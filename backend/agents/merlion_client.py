"""
Chemo Companion - MerLION Client
Handles audio upload and transcription via the MerLION API.
Flow: get presigned URL → upload to S3 → transcribe/analyze.
"""
import io
import requests

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import MERLION_API_KEY, MERLION_BASE_URL

# Point to the imageio-ffmpeg static binary (no system ffmpeg or ffprobe needed)
import imageio_ffmpeg
import subprocess

# MerLION-supported MIME types
_SUPPORTED_TYPES = {"audio/wav", "audio/mpeg", "audio/flac", "audio/mp4", "audio/x-wav"}


def _convert_to_wav(audio_bytes: bytes, source_format: str) -> tuple[bytes, str, str]:
    """
    Convert audio bytes to WAV if the source format isn't supported by MerLION.
    Uses subprocess + ffmpeg directly to avoid pydub's ffprobe dependency.
    """
    base_type = source_format.split(";")[0].strip()

    if base_type in _SUPPORTED_TYPES:
        # Already supported, no conversion needed
        ext = base_type.split("/")[-1]
        if ext == "mpeg":
            ext = "mp3"
        return audio_bytes, f"recording.{ext}", base_type

    print(f"[MerLION] Converting {source_format} → wav (16kHz) via subprocess...")
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    # Run ffmpeg: read from stdin (pipe:0), output wav to stdout (pipe:1), 16kHz
    cmd = [
        ffmpeg_exe,
        "-y",               # Overwrite output
        "-i", "pipe:0",     # Input from stdin
        "-ar", "16000",     # 16kHz sample rate
        "-ac", "1",         # Mono (standard for speech-to-text)
        "-f", "wav",        # Output format wav
        "pipe:1"            # Output to stdout
    ]
    
    try:
        process = subprocess.Popen(
            cmd,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        stdout, stderr = process.communicate(input=audio_bytes)
        
        if process.returncode != 0:
            error_msg = stderr.decode('utf-8', errors='ignore')
            print(f"[MerLION] ffmpeg error: {error_msg}")
            raise RuntimeError(f"ffmpeg conversion failed: {error_msg}")
            
        wav_bytes = stdout
        if len(wav_bytes) == 0:
            print(f"[MerLION] ffmpeg produced empty output. stderr: {stderr.decode('utf-8', errors='ignore')}")
            raise RuntimeError("Audio conversion produced empty WAV file")
            
        print(f"[MerLION] Converted: {len(audio_bytes)} → {len(wav_bytes)} bytes (wav, 16kHz)")
        return wav_bytes, "recording.wav", "audio/wav"
        
    except Exception as e:
        print(f"[MerLION] Conversion failed: {e}")
        raise RuntimeError(f"Audio conversion failed: {str(e)}")


def _headers():
    """Standard headers for MerLION API calls."""
    return {
        "Content-Type": "application/json",
        "x-api-key": MERLION_API_KEY,
    }


def get_upload_url(filename: str, content_type: str, file_size: int) -> dict:
    """
    Step 1: Get a presigned S3 upload URL from MerLION.

    Returns:
        dict with 'url' (presigned S3 URL) and 'key' (fileKey for processing).
    """
    resp = requests.post(
        f"{MERLION_BASE_URL}/upload-url",
        headers=_headers(),
        json={
            "filename": filename,
            "contentType": content_type,
            "fileSize": file_size,
        },
        timeout=30,
    )
    resp.raise_for_status()
    data = resp.json()

    if data.get("status", {}).get("code") != 200:
        raise RuntimeError(f"MerLION /upload-url failed: {data.get('status', {}).get('description', 'Unknown error')}")

    return data["response"]


def upload_to_s3(presigned_url: str, audio_bytes: bytes, content_type: str) -> None:
    """
    Step 2: Upload raw audio bytes to S3 via the presigned URL.
    Must use PUT method.
    """
    resp = requests.put(
        presigned_url,
        data=audio_bytes,
        headers={"Content-Type": content_type},
        timeout=120,
    )
    resp.raise_for_status()


def transcribe(file_key: str, max_retries: int = 3, retry_delay: float = 1.0) -> str:
    """
    Step 3: Transcribe uploaded audio to text.
    Includes a retry loop to handle transient 404s (resource not found).

    Args:
        file_key: The 'key' returned from get_upload_url().
        max_retries: Times to retry on 404 or 5xx.
        retry_delay: Seconds to wait between retries (exponential).

    Returns:
        Transcribed text string.
    """
    import time
    
    last_err = None
    for attempt in range(max_retries + 1):
        try:
            resp = requests.post(
                f"{MERLION_BASE_URL}/transcribe",
                headers=_headers(),
                json={
                    "key": file_key,
                    "hyperParameters": {
                        "temperature": 0.1,
                        "topP": 0.9,
                        "repetitionPenalty": 1.05,
                        "noRepeatNGramSize": 8,
                    },
                },
                timeout=120,
            )
            
            # If we get a 404, the file might not be indexed yet. Retry.
            if resp.status_code == 404 and attempt < max_retries:
                delay = retry_delay * (2 ** attempt)
                print(f"[MerLION] Transcribe 404 (Resource not found). Retrying in {delay}s (Attempt {attempt+1}/{max_retries})...")
                time.sleep(delay)
                continue
                
            resp.raise_for_status()
            data = resp.json()

            if data.get("status", {}).get("code") != 200:
                raise RuntimeError(f"MerLION /transcribe failed: {data.get('status', {}).get('description', 'Unknown error')}")

            return data["response"]["text"]
            
        except requests.exceptions.RequestException as e:
            last_err = e
            if attempt < max_retries:
                delay = retry_delay * (2 ** attempt)
                print(f"[MerLION] Transcribe attempt {attempt+1} failed ({e}). Retrying in {delay}s...")
                time.sleep(delay)
            else:
                raise last_err

    raise last_err or RuntimeError("Transcription failed after retries")


def analyze_audio(file_key: str, segment_length: int = 4) -> str:
    """
    Analyze paralinguistic signals (emotion, tone, energy) from audio.

    Args:
        file_key: The 'key' returned from get_upload_url().
        segment_length: Duration in seconds per analysis segment.

    Returns:
        Analysis text describing emotion, tone, and energy.
    """
    resp = requests.post(
        f"{MERLION_BASE_URL}/analyze",
        headers=_headers(),
        json={
            "key": file_key,
            "segment_length": segment_length,
            "hyperParameters": {
                "temperature": 0.1,
                "topP": 0.9,
                "repetitionPenalty": 1.05,
                "noRepeatNGramSize": 8,
            },
        },
        timeout=120,
    )
    resp.raise_for_status()
    data = resp.json()

    if data.get("status", {}).get("code") != 200:
        raise RuntimeError(f"MerLION /analyze failed: {data.get('status', {}).get('description', 'Unknown error')}")

    return data["response"]["text"]


def transcribe_audio(audio_bytes: bytes, filename: str = "recording.wav",
                     content_type: str = "audio/wav") -> str:
    """
    Convenience: convert (if needed) + upload + transcribe in one call.

    Args:
        audio_bytes: Raw audio file bytes.
        filename: Name for the upload.
        content_type: MIME type of the audio.

    Returns:
        Transcribed text string.
    """
    # Convert to a MerLION-supported format if needed (e.g. webm → wav)
    audio_bytes, filename, content_type = _convert_to_wav(audio_bytes, content_type)

    print(f"[MerLION] Uploading {filename} ({len(audio_bytes)} bytes, {content_type})...")

    # Step 1: Get presigned URL
    upload_info = get_upload_url(filename, content_type, len(audio_bytes))
    file_key = upload_info["key"]
    presigned_url = upload_info["url"]
    print(f"[MerLION] Got fileKey: {file_key}")

    # Step 2: Upload to S3
    upload_to_s3(presigned_url, audio_bytes, content_type)
    print("[MerLION] Upload complete.")

    # Step 3: Transcribe
    text = transcribe(file_key)
    print(f"[MerLION] Transcription: {text[:100]}...")

    return text
