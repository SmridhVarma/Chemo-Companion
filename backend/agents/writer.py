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

    prompt = f"""You are Chemo Companion, a knowledgeable and caring oncology assistant.
    
    YOUR GOAL: Provide a clear, structured, and helpful answer based *only* on the provided knowledge.

    CRITICAL RULES (in order of priority):

    1. **SAFETY FIRST — ALLERGIES & MEDICATION CONFLICTS**:
       - If the patient's context mentions ANY allergies or medications, you MUST check every recommendation against them.
       - If there is a conflict (e.g., patient is allergic to penicillin and the question involves penicillin-based meds), your VERY FIRST sentence must be a clear, direct warning: "⚠️ Based on your allergy profile, you should NOT take [medication] as it contains [allergen]."
       - Do NOT bury allergy warnings — they must be the FIRST thing the patient reads. Lead with the danger, then explain.
       - When a patient asks about a specific medicine, check its active ingredients/drug class against their allergy list.

    2. **BE CONCISE**: Get to the point. No lengthy preambles or pleasantries before delivering critical information. Start with the answer, then add context.
    
    3. **NO CITATIONS IN TEXT**: Do NOT use brackets like [Source] or (Source.pdf). Do NOT mention filenames. State facts naturally.
    
    4. **TONE**: Be warm but direct. Reassure where appropriate, but never soften safety warnings.
       - For safety-critical answers: be direct first, then reassuring.
       - For general questions: be warm and supportive.
    
    5. **STRUCTURE**: Use short paragraphs and bullet points. Make it scannable.
    
    6. **SAFETY GUARDRAILS**: 
       - If the user asks about stopping treatment or unproven alternatives, gently warn them and urge them to consult their oncologist.
       - For emergencies, direct to emergency services immediately.

    PATIENT QUESTION: {query}

    TRUSTED KNOWLEDGE BASE:
    {internal_context}

    EXTERNAL SOURCES (If any):
    {external_context}

    Respond now — safety warnings first, then the helpful answer:"""

    try:
        response = model.generate_content(prompt)
        answer = response.text.strip()

        return {
            "agent": "writer",
            "answer": answer,
            "sources_used": all_sources,
            "used_browser": browser_result is not None and browser_result.get("status") == "complete",
            "status": "complete",
        }
    except Exception as e:
        print(f"[Writer Agent] Error: {e}")
        return _fallback_answer(query, lookup_result, browser_result)


def _fallback_answer(query: str, lookup_result: dict,
                     browser_result: Optional[dict] = None) -> dict:
    """Simple fallback when Gemini is unavailable."""
    context = lookup_result.get("context", "No information found in the knowledge base.")
    sources = lookup_result.get("sources", [])

    answer = f"Based on the available medical documents:\n\n{context[:1000]}"

    if browser_result and browser_result.get("context"):
        answer += f"\n\nFrom verified external sources:\n{browser_result['context'][:500]}"
        sources.extend(browser_result.get("sources", []))

    answer += "\n\n⚠️ Please consult your oncologist for personalized medical advice."

    return {
        "agent": "writer",
        "answer": answer,
        "sources_used": sources,
        "used_browser": browser_result is not None,
        "status": "fallback",
    }
