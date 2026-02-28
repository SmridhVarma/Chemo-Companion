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
    # Use keyword-based classification to conserve Gemini API quota.
    # The Writer agent is the only one that truly needs the LLM.
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
