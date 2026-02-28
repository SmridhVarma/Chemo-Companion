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

    prompt = f"""You are Chemo Companion, a gentle, reassuring, and highly knowledgeable oncology assistant.
    
    YOUR GOAL: Provide a structured, comforting, and easy-to-understand answer based *only* on the provided knowledge.

    CRITICAL RULES:
    1. **NO CITATIONS IN TEXT**: Do NOT use brackets like [Source] or (Source.pdf). Do NOT mention filenames. Just state the facts naturally as if you know them.
    2. **TONE**: Be warm, calm, and "we"-oriented. 
       - BAD: "Chemotherapy causes death in rare cases."
       - GOOD: "While serious side effects can happen, your care team monitors you closely to prevent them."
       - Don't scare the patient. Frame risks with management strategies.
    3. **STRUCTURE**: Use natural paragraphs and bullet points for lists. Make it readable.
    4. **SAFETY GUARDRAILS**: 
       - If the user asks about stopping treatment or unproven alternatives, gently warn them and urge them to consult their oncologist.
       - Identify if a question implies self-harm or medical emergency, and direct them to emergency services immediately.
    5. **SYNTHESIS**: Combine the facts into a cohesive story.

    PATIENT QUESTION: {query}

    TRUSTED KNOWLEDGE BASE:
    {internal_context}

    EXTERNAL SOURCES (If any):
    {external_context}

    Respond now, naturally and gently:"""

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
