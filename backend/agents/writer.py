"""
Chemo Companion - Writer Agent
Synthesizes context from Lookup + Browser agents into empathetic, cited answers.
"""
import json
from typing import Optional

import google.generativeai as genai

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import GEMINI_API_KEY, GOOGLE_API_KEY, GEMINI_MODEL


_api_key = GEMINI_API_KEY or GOOGLE_API_KEY


def synthesize_answer(query: str, lookup_result: dict,
                      browser_result: Optional[dict] = None,
                      intent: Optional[dict] = None) -> dict:
    """
    Synthesize a final answer from all available context.
    Combines internal RAG + external browser results.
    Uses an empathetic, supportive tone appropriate for oncology patients.
    """
    if not _api_key:
        return _fallback_answer(query, lookup_result, browser_result)

    genai.configure(api_key=_api_key)
    model = genai.GenerativeModel(GEMINI_MODEL)

    # Build context
    internal_context = lookup_result.get("context", "")
    external_context = browser_result.get("context", "") if browser_result else ""
    
    context_section = f"""INTERNAL KNOWLEDGE BASE:
{internal_context}"""

    if external_context:
        context_section += f"""

EXTERNAL VERIFIED SOURCES:
{external_context}"""
    # context_section is no longer used directly in the prompt,
    # internal_context and external_context are used separately.
    # context_section = f"""INTERNAL KNOWLEDGE BASE:
    # {internal_context}"""

    # if external_context:
    #     context_section += f"""

    # EXTERNAL VERIFIED SOURCES:
    # {external_context}"""

    # Gather all sources for citation
    all_sources = lookup_result.get("sources", [])
    if browser_result:
        all_sources.extend(browser_result.get("sources", []))

    prompt = f"""You are Chemo Companion, a warm and knowledgeable oncology nurse assistant. A patient is asking you a question. Read the REFERENCE MATERIAL below, then write a helpful response **entirely in your own words**.

    CRITICAL RULES:

    1. **NEVER COPY-PASTE**: You must NEVER copy text directly from the reference material. Always rewrite and synthesize the information in your own caring, conversational voice. If you find yourself writing a paragraph that looks identical to the reference material, STOP and rewrite it.

    2. **REMOVE ARTIFACTS**: Never include page numbers, phone numbers (like 1.800.227.2345), website URLs, "cancer.org", "see page X", headers from documents, or any formatting artifacts from the source material. These are not part of your response.

    3. **SAFETY FIRST**: If the patient mentions allergies or medications, check for conflicts IMMEDIATELY. Start your response with a clear ⚠️ warning if there's a danger.

    4. **WRITE LIKE A NURSE**: Speak directly to the patient using "you" and "your". Be warm, reassuring, and medically accurate. Imagine you're sitting with them and explaining things face-to-face.

    5. **STRUCTURE YOUR RESPONSE** using markdown:
       - Open with 1-2 sentences directly answering their question
       - Use **bold** for key terms and important points
       - Use bullet points (•) for lists of tips or symptoms
       - Use short paragraphs (2-3 sentences each)
       - End with an encouraging note and a gentle reminder to talk to their care team

    6. **BE THOROUGH**: Aim for 150-250 words. Cover WHAT is happening, WHY it happens, and HOW to manage it. Include specific, practical tips.

    PATIENT QUESTION: {query}

    REFERENCE MATERIAL (synthesize this — do NOT copy it):
    {internal_context}

    {f"ADDITIONAL CONTEXT: {external_context}" if external_context else ""}

    Now write your response as a caring oncology nurse, in your own words:"""

    import time
    from google.api_core.exceptions import ResourceExhausted

    max_retries = 3
    base_delay = 5

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
            answer = response.text.strip()

            return {
                "agent": "writer",
                "answer": answer,
                "sources_used": all_sources,
                "used_browser": browser_result is not None and browser_result.get("status") == "complete",
                "status": "complete",
            }
        except ResourceExhausted as e:
            if attempt < max_retries:
                delay = base_delay * (2 ** attempt)
                print(f"[Writer Agent] Rate limit hit. Retrying in {delay} seconds (Attempt {attempt + 1}/{max_retries})...")
                time.sleep(delay)
            else:
                import traceback
                with open("C:/tmp/gemini_error.txt", "w") as f:
                    f.write(traceback.format_exc())
                print(f"[Writer Agent] Rate limit exhausted after {max_retries} retries: {e}")
                return _fallback_answer(query, lookup_result, browser_result)
        except Exception as e:
            import traceback
            with open("C:/tmp/gemini_error.txt", "w") as f:
                f.write(traceback.format_exc())
            print(f"[Writer Agent] Error: {e}")
            return _fallback_answer(query, lookup_result, browser_result)


def _fallback_answer(query: str, lookup_result: dict,
                     browser_result: Optional[dict] = None) -> dict:
    """Simple fallback when Gemini is unavailable."""
    import re
    context = lookup_result.get("context", "")
    sources = lookup_result.get("sources", [])

    # Clean up common PDF scraping artifacts
    clean_context = re.sub(r'\[Source:.*?\]\n?', '', context)
    clean_context = re.sub(r'\d*\s*cancer\.org\s*\|\s*1\.800\.227\.2345', '', clean_context, flags=re.IGNORECASE)
    clean_context = re.sub(r'Page \d+ of \d+', '', clean_context, flags=re.IGNORECASE)
    clean_context = re.sub(r'page \d+', '', clean_context, flags=re.IGNORECASE)
    clean_context = re.sub(r'www\.cancer\.gov', '', clean_context, flags=re.IGNORECASE)
    clean_context = re.sub(r'https?://[^\s]+', '', clean_context)  # Remove stray URLs
    clean_context = re.sub(r'\s{2,}', ' ', clean_context).strip()

    if clean_context:
        answer = f"Here's what I found that may help:\n\n{clean_context[:1500]}"
    else:
        answer = "I wasn't able to find specific information on that topic in my knowledge base."

    if browser_result and browser_result.get("context"):
        browser_text = re.sub(r'\[Source:.*?\]\n?', '', browser_result['context'])
        browser_text = re.sub(r'\s{2,}', ' ', browser_text).strip()
        answer += f"\n\n{browser_text[:500]}"
        sources.extend(browser_result.get("sources", []))

    answer += "\n\n💡 Please discuss any specific concerns with your oncologist or care team."

    return {
        "agent": "writer",
        "answer": answer,
        "sources_used": sources,
        "used_browser": browser_result is not None,
        "status": "fallback",
    }
