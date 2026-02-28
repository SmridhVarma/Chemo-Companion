"""
Chemo Companion - Planner Agent
Orchestrator that analyzes user intent and routes to appropriate agents.
"""
import json
from typing import Optional

import google.generativeai as genai

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import GEMINI_API_KEY, GOOGLE_API_KEY, GEMINI_MODEL


_api_key = GEMINI_API_KEY or GOOGLE_API_KEY


def analyze_intent(query: str, chat_history: Optional[list] = None) -> dict:
    """
    Analyze user query to determine intent and extract context.
    Returns structured intent information for routing.
    """
    if not _api_key:
        # Fallback: simple keyword-based classification
        return _simple_classify(query)

    genai.configure(api_key=_api_key)
    model = genai.GenerativeModel(GEMINI_MODEL)

    history_text = ""
    if chat_history:
        history_text = "\nRecent conversation:\n" + "\n".join(
            [f"{'User' if m['role']=='user' else 'Assistant'}: {m['content'][:200]}"
             for m in chat_history[-4:]]
        )

    prompt = f"""You are the Planner Agent for a chemotherapy companion assistant.
Analyze this patient query and classify the intent.

Query: "{query}"
{history_text}

Return a JSON object with:
- "intent": one of ["medical_qa", "symptom_check", "medication_info", "side_effect", "lifestyle", "emotional", "general_info", "greeting"]
- "key_entities": list of medical terms/entities mentioned
- "urgency": "low", "medium", or "high"
- "requires_graph": boolean — does this need knowledge graph lookup?
- "standalone_query": REPHRASED question that includes context from history (e.g., replace "it" with "nausea"). If no history, use original query.

Return ONLY valid JSON, no other text."""

    try:
        response = model.generate_content(prompt)
        text = response.text.strip()
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
            text = text.strip()
        return json.loads(text)
    except Exception as e:
        print(f"[Planner] Error: {e}")
        return _simple_classify(query)


def _simple_classify(query: str) -> dict:
    """Fallback classification using keywords."""
    q = query.lower()

    medical_keywords = ["side effect", "symptom", "pain", "nausea", "fatigue",
                        "neuropathy", "chemo", "treatment", "medication", "drug",
                        "cancer", "tumor", "radiation"]
    symptom_keywords = ["feeling", "hurt", "ache", "fever", "vomit", "dizzy",
                        "bleeding", "swelling", "rash", "tingling"]
    lifestyle_keywords = ["eat", "sleep", "exercise", "diet", "food", "work",
                          "travel", "activity"]

    intent = "general_info"
    if any(k in q for k in symptom_keywords):
        intent = "symptom_check"
    elif any(k in q for k in medical_keywords):
        intent = "medical_qa"
    elif any(k in q for k in lifestyle_keywords):
        intent = "lifestyle"
    elif any(w in q for w in ["hello", "hi", "hey", "good morning"]):
        intent = "greeting"

    return {
        "intent": intent,
        "key_entities": [],
        "urgency": "low",
        "requires_graph": intent in ["medical_qa", "symptom_check", "medication_info"],
        "standalone_query": query,
    }
