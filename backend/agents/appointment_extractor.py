"""
Chemo Companion - Appointment Extractor Agent
Analyzes user chat messages to detect appointment/medication scheduling intent
and extracts structured data (title, datetime, type).
"""
import json
import re
from datetime import datetime, timedelta
from typing import Optional

import google.generativeai as genai

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import GEMINI_API_KEY, GOOGLE_API_KEY, GEMINI_MODEL


_api_key = GEMINI_API_KEY or GOOGLE_API_KEY


def _strip_patient_context(query: str) -> str:
    """Remove [Patient Context: ...] prefix injected by the frontend."""
    return re.sub(r'^\[Patient Context:.*?\]\s*', '', query, flags=re.DOTALL).strip()


_WEEKDAY_MAP = {
    'monday': 0, 'tuesday': 1, 'wednesday': 2, 'thursday': 3,
    'friday': 4, 'saturday': 5, 'sunday': 6,
    'mon': 0, 'tue': 1, 'wed': 2, 'thu': 3, 'fri': 4, 'sat': 5, 'sun': 6,
}


def _resolve_weekday(day_name: str, now: datetime, next_week: bool = False) -> datetime:
    """Resolve a weekday name to the next upcoming occurrence of that day."""
    target = _WEEKDAY_MAP.get(day_name.lower())
    if target is None:
        return now + timedelta(days=1)  # fallback: tomorrow

    current_weekday = now.weekday()  # 0=Monday
    days_ahead = target - current_weekday
    if days_ahead <= 0:
        days_ahead += 7  # next week
    if next_week:
        days_ahead += 7  # explicitly "next week"
    return (now + timedelta(days=days_ahead)).replace(hour=9, minute=0, second=0)


def _detect_type(query: str) -> str:
    """Infer appointment type from the query text."""
    q = query.lower()
    if any(k in q for k in ['blood test', 'lab test', 'lab work', 'cbc', 'blood work', 'biopsy', 'screening', 'mammogram']):
        return 'lab_test'
    if any(k in q for k in ['medication', 'medicine', 'pill', 'drug', 'prescription']):
        return 'medication'
    if any(k in q for k in ['chemo', 'chemotherapy', 'radiation', 'infusion', 'dialysis']):
        return 'treatment'
    if any(k in q for k in ['wellness', 'yoga', 'meditation', 'exercise', 'physical therapy', 'therapy session']):
        return 'wellness'
    if any(k in q for k in ['surgery', 'operation', 'procedure']):
        return 'treatment'
    if any(k in q for k in ['vaccination', 'vaccine', 'injection', 'shot', 'immunization']):
        return 'treatment'
    if any(k in q for k in ['dental', 'dentist', 'eye exam', 'vision', 'hearing']):
        return 'doctor_visit'
    if any(k in q for k in ['scan', 'mri', 'ct scan', 'x-ray', 'xray', 'ultrasound']):
        return 'lab_test'
    return 'doctor_visit'


def extract_appointments(query: str, current_time: Optional[str] = None) -> dict:
    """
    Analyze a user message to detect appointment or medication scheduling intent.
    Returns structured appointment data if found.
    
    Returns:
        {
            "has_appointment": bool,
            "appointments": [
                {"title": str, "time": str (ISO format), "type": str}
            ]
        }
    """
    # Strip patient context prefix added by frontend
    clean_query = _strip_patient_context(query)

    # Quick keyword pre-check to avoid unnecessary API calls
    if not _has_scheduling_keywords(clean_query):
        return {"has_appointment": False, "appointments": []}

    if not _api_key:
        return _fallback_extraction(clean_query, current_time)

    now = current_time or datetime.now().strftime("%Y-%m-%dT%H:%M:%S")

    genai.configure(api_key=_api_key)
    model = genai.GenerativeModel(GEMINI_MODEL)

    prompt = f"""You are a scheduling assistant. Analyze the user's message and determine if they are mentioning an appointment, medication schedule, or any event that should be added to their care calendar.

CURRENT DATE/TIME: {now}

USER MESSAGE: "{clean_query}"

RULES:
1. Only extract appointments if the user is clearly stating or requesting a scheduled event.
2. DO NOT extract appointments from general medical questions (e.g., "What is chemo?" is NOT an appointment).
3. For relative dates like "next Monday", "tomorrow", "in 3 days", calculate the actual date based on the current date/time provided.
4. For day names like "Monday", "Tuesday" etc. without "next", resolve to the UPCOMING occurrence of that day from the current date.
5. For type, use one of: "doctor_visit", "medication", "lab_test", "treatment", "wellness"
6. If no appointment is detected, return has_appointment: false

Respond ONLY with valid JSON in this exact format (no markdown, no extra text):
{{"has_appointment": true/false, "appointments": [{{"title": "...", "time": "YYYY-MM-DDTHH:MM:SS", "type": "..."}}]}}
"""

    try:
        import time
        from google.api_core.exceptions import ResourceExhausted

        max_retries = 2
        base_delay = 3

        for attempt in range(max_retries + 1):
            try:
                response = model.generate_content(
                    prompt,
                    safety_settings=[
                        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
                        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
                        {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
                        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
                    ]
                )
                raw = response.text.strip()

                # Strip markdown code fences if present
                raw = re.sub(r'^```(?:json)?\s*', '', raw)
                raw = re.sub(r'\s*```$', '', raw)

                result = json.loads(raw)

                if result.get("has_appointment") and result.get("appointments"):
                    print(f"[Appointment Extractor] Detected {len(result['appointments'])} appointment(s)")
                    return result
                else:
                    return {"has_appointment": False, "appointments": []}

            except ResourceExhausted:
                if attempt < max_retries:
                    delay = base_delay * (2 ** attempt)
                    print(f"[Appointment Extractor] Rate limit. Retrying in {delay}s...")
                    time.sleep(delay)
                else:
                    print("[Appointment Extractor] Rate limit exhausted. Using fallback.")
                    return _fallback_extraction(clean_query, current_time)

    except Exception as e:
        print(f"[Appointment Extractor] Error: {e}. Using fallback.")
        return _fallback_extraction(clean_query, current_time)


def _has_scheduling_keywords(query: str) -> bool:
    """Quick keyword check to avoid unnecessary Gemini calls."""
    q = query.lower()
    scheduling_keywords = [
        # Scheduling action words
        "appointment", "schedule", "book", "remind", "reminder",
        "take pill", "take medication", "take medicine", "take my",
        # Day / time references
        "monday", "tuesday", "wednesday", "thursday",
        "friday", "saturday", "sunday",
        "tomorrow", "next week", "this week",
        "at 9", "at 10", "at 11", "at 12",
        "at 1pm", "at 2pm", "at 3pm", "at 4pm", "at 5pm",
        # Medical events
        "blood test", "check-up", "checkup", "check up",
        "follow-up", "followup", "follow up",
        "doctor visit", "doctor appointment",
        "lab test", "lab work", "blood work",
        "meet dr", "see dr", "see doctor", "visit doctor",
        "morning pill", "evening pill", "daily medication",
        "chemo session", "chemotherapy", "radiation session", "radiation therapy",
        "therapy session", "physical therapy",
        "wellness check", "scan", "mri", "ct scan", "x-ray", "xray",
        "set a reminder", "add to calendar", "add to schedule",
        # Broader medical / health terms
        "medical", "consultation", "surgery", "operation",
        "dental", "dentist", "eye exam", "vision test",
        "vaccination", "vaccine", "injection", "infusion",
        "dialysis", "biopsy", "ultrasound", "mammogram",
        "screening", "physical exam", "annual physical",
        "oncologist", "specialist", "clinic", "hospital",
    ]
    return any(kw in q for kw in scheduling_keywords)


_DAY_NAMES_PATTERN = r'(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|wed|thu|fri|sat|sun)'

# Comprehensive health event terms for broad matching
_HEALTH_EVENTS = (
    r'(?:blood test|blood work|lab test|lab work|check-?up|check up|follow-?up|follow up|'
    r'scan|mri|ct scan|x-?ray|ultrasound|mammogram|biopsy|screening|'
    r'doctor(?:\s+(?:visit|appointment))?|medical(?:\s+(?:visit|appointment|check))?|'
    r'appointment|visit|session|consultation|'
    r'chemo(?:therapy)?(?:\s+session)?|radiation(?:\s+(?:session|therapy))?|'
    r'therapy(?:\s+session)?|physical therapy|'
    r'surgery|operation|procedure|'
    r'dental(?:\s+(?:visit|appointment|cleaning|check))?|dentist|'
    r'eye exam|vision test|hearing test|'
    r'vaccination|vaccine|injection|infusion|shot|'
    r'dialysis|treatment|'
    r'physical exam|annual physical|wellness check|'
    r'oncologist|specialist|clinic|hospital|'
    r'medication|medicine|pills?|prescription)'
)

_TIME_REFERENCE = (
    r'(?:tomorrow|today|tonight|this week|next week|'
    + _DAY_NAMES_PATTERN + r'|'
    r'(?:on|at|next|this)\s+' + _DAY_NAMES_PATTERN + r'|'
    r'at\s+\d{1,2}(?::\d{2})?\s*(?:[ap]m)?|'
    r'in\s+\d+\s+days?|'
    r'\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)'
)


def _fallback_extraction(query: str, current_time: Optional[str] = None) -> dict:
    """Regex-based fallback when Gemini is unavailable. Resolves weekday names to real dates."""
    q = query.lower()
    now = datetime.fromisoformat(current_time) if current_time else datetime.now()

    # Detect "next week" modifier
    next_week = bool(re.search(r'next\s+week', q))

    # --- Try to match: health event + time reference (in either order) ---
    matched = False

    # Pattern 1: <health event> ... <time reference>  (e.g. "blood test on Monday")
    if re.search(_HEALTH_EVENTS + r'.{0,30}' + _TIME_REFERENCE, q):
        matched = True
    # Pattern 2: <time reference> ... <health event>  (e.g. "Monday I have a doctor visit")
    elif re.search(_TIME_REFERENCE + r'.{0,30}' + _HEALTH_EVENTS, q):
        matched = True
    # Pattern 3: scheduling action + anything  (e.g. "book an appointment", "schedule a visit")
    elif re.search(r'(?:book|schedule|set|add|remind)\s+(?:a\s+|an\s+|my\s+)?(?:\w+\s+){0,3}(?:appointment|visit|session|test|reminder|check)', q):
        matched = True
    # Pattern 4: "see/visit/meet dr/doctor" with optional day
    elif re.search(r'(?:see|visit|meet|going to)\s+(?:the\s+)?(?:dr\.?|doctor|oncologist|specialist|dentist)', q):
        matched = True
    # Pattern 5: "remind me to take..." 
    elif re.search(r'(?:remind me to|set a reminder|don\'t forget)\s+', q):
        matched = True
    # Pattern 6: "I have/need (a) <anything> <day>"  — broad catch-all
    elif re.search(r'(?:i have|i\'ve got|i got|i need|i\'m going|going for|going to)\s+(?:a\s+|an\s+|my\s+)?(?:\w+\s+){0,4}' + _DAY_NAMES_PATTERN, q):
        matched = True
    # Pattern 7: "I have/need (a) <anything> tomorrow"
    elif re.search(r'(?:i have|i\'ve got|i got|i need|i\'m going|going for)\s+(?:a\s+|an\s+|my\s+)?(?:\w+\s+){0,4}(?:tomorrow|next week)', q):
        matched = True

    if not matched:
        return {"has_appointment": False, "appointments": []}

    # Try to extract the weekday from the query
    day_match = re.search(_DAY_NAMES_PATTERN, q)
    if day_match:
        day_name = day_match.group(0)
        # Also check if "next" appears before the day name
        next_prefix = bool(re.search(r'next\s+' + re.escape(day_name), q))
        target_time = _resolve_weekday(day_name, now, next_week=next_week or next_prefix)
    elif 'tomorrow' in q:
        target_time = (now + timedelta(days=1)).replace(hour=9, minute=0, second=0)
    else:
        target_time = (now + timedelta(days=1)).replace(hour=9, minute=0, second=0)

    # Try to extract a time like "at 10am", "at 2pm", "at 14:00"
    time_match = re.search(r'at\s+(\d{1,2})(?::(\d{2}))?\s*([ap]m)?', q)
    if time_match:
        hour = int(time_match.group(1))
        minute = int(time_match.group(2) or 0)
        ampm = time_match.group(3)
        if ampm == 'pm' and hour < 12:
            hour += 12
        elif ampm == 'am' and hour == 12:
            hour = 0
        target_time = target_time.replace(hour=hour, minute=minute)

    # Build a clean title from the query
    title = _build_title(query)
    apt_type = _detect_type(query)

    print(f"[Appointment Extractor/Fallback] Resolved: {title} -> {target_time.isoformat()} ({apt_type})")

    return {
        "has_appointment": True,
        "appointments": [{
            "title": title,
            "time": target_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "type": apt_type,
        }]
    }


def _build_title(query: str) -> str:
    """Build a clean appointment title from the user query."""
    q = query.lower().strip()
    # Remove common prefixes
    q = re.sub(r'^(?:i have|i\'ve got|i got|i need|please add|can you add|add)\s+(?:a\s+)?', '', q)
    # Capitalize nicely and truncate
    title = q.strip().capitalize()
    if len(title) > 60:
        title = title[:57] + '...'
    return title
