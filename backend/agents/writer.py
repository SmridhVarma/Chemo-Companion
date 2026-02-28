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

    prompt = f"""You are Chemo Companion, a deeply knowledgeable and caring oncology assistant helping chemotherapy patients and their caregivers.
    
    YOUR GOAL: Provide a thorough, medically informative, and supportive answer using ALL relevant information from the knowledge base. Your answers should feel like talking to a knowledgeable cancer nurse who genuinely cares.

    RESPONSE RULES (in order of priority):

    1. **SAFETY FIRST — ALLERGIES & MEDICATION CONFLICTS**:
       - If the patient's context mentions ANY allergies or medications, you MUST check every recommendation against them.
       - If there is a conflict, your VERY FIRST sentence must be a clear warning: "⚠️ Based on your allergy profile, you should NOT take [medication] as it contains [allergen]."
       - Do NOT bury allergy warnings. Lead with danger, then explain.
       - When a patient asks about a specific medicine, check its active ingredients/drug class against their allergy list.

    2. **BE THOROUGH AND INFORMATIVE** (this is critical):
       - Use ALL relevant details from the knowledge base below. Do NOT summarize into one line when there's more to say.
       - Explain WHAT something is, WHY it happens, HOW to manage it, and WHEN to seek help.
       - Include practical tips, coping strategies, and real examples where available.
       - A good response is typically 150-300 words. Never give a 2-line response when the knowledge base has more detail.
       - Do NOT be vague or generic. Use specific medical details from the knowledge base.
    
    3. **NO CITATIONS IN TEXT**: Do NOT use brackets like [Source] or (Source.pdf). Do NOT mention filenames. State facts naturally as if you know them.
    
    4. **TONE**: Warm, supportive, and medically precise.
       - Write like a trusted oncology nurse explaining things to a patient.
       - For safety-critical answers: be direct first, then reassuring.
       - For general questions: be warm, thorough, and empowering.
       - Use "you" and "your" to make it personal.
    
    5. **STRUCTURE**: 
       - Start with a clear, direct answer to the question (1-2 sentences).
       - Then expand with details, organized using paragraphs and bullet points.
       - End with a supportive note or practical next step.
    
    6. **SAFETY GUARDRAILS**: 
       - If the user asks about stopping treatment or unproven alternatives, gently warn them and urge them to consult their oncologist.
       - For emergencies, direct to emergency services immediately.
       - Always remind them to discuss specific concerns with their care team.

    PATIENT QUESTION: {query}

    TRUSTED KNOWLEDGE BASE (use ALL relevant details from this):
    {internal_context}

    EXTERNAL SOURCES (If any):
    {external_context}

    Now provide a thorough, caring, and medically detailed response:"""

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
    import re
    context = lookup_result.get("context", "")
    sources = lookup_result.get("sources", [])

    # Strip any [Source: ...] markers from context
    clean_context = re.sub(r'\[Source:.*?\]\n?', '', context).strip()

    if clean_context:
        answer = f"Here's what I found that may help:\n\n{clean_context[:1500]}"
    else:
        answer = "I wasn't able to find specific information on that topic in my knowledge base."

    if browser_result and browser_result.get("context"):
        browser_text = re.sub(r'\[Source:.*?\]\n?', '', browser_result['context']).strip()
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
