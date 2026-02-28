"""
Chemo Companion - FAQ Cache & Suggested Questions
Pre-generates common FAQs and provides contextual question suggestions.
"""
import json
import time
from pathlib import Path
from typing import Optional

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import CACHE_DIR, GEMINI_API_KEY, GOOGLE_API_KEY, GEMINI_MODEL


_api_key = GEMINI_API_KEY or GOOGLE_API_KEY

# ── Default FAQs (hardcoded clinical knowledge) ───────
DEFAULT_FAQS = [
    {
        "id": "faq_1",
        "question": "What are the most common side effects of chemotherapy?",
        "category": "Side Effects",
    },
    {
        "id": "faq_2",
        "question": "How can I manage nausea during chemotherapy?",
        "category": "Side Effects",
    },
    {
        "id": "faq_3",
        "question": "What is chemo brain and how long does it last?",
        "category": "Side Effects",
    },
    {
        "id": "faq_4",
        "question": "What foods should I eat during chemotherapy?",
        "category": "Lifestyle",
    },
    {
        "id": "faq_5",
        "question": "When should I call my doctor during treatment?",
        "category": "Emergency",
    },
    {
        "id": "faq_6",
        "question": "How can I manage fatigue from chemotherapy?",
        "category": "Side Effects",
    },
    {
        "id": "faq_7",
        "question": "What is peripheral neuropathy from chemotherapy?",
        "category": "Side Effects",
    },
    {
        "id": "faq_8",
        "question": "Can I exercise during chemotherapy?",
        "category": "Lifestyle",
    },
    {
        "id": "faq_9",
        "question": "How do I care for my mouth sores during treatment?",
        "category": "Side Effects",
    },
    {
        "id": "faq_10",
        "question": "What should I know about hair loss during chemotherapy?",
        "category": "Side Effects",
    },
    {
        "id": "faq_11",
        "question": "What is a complete blood count (CBC) and why is it important?",
        "category": "Medical Info",
    },
    {
        "id": "faq_12",
        "question": "How can caregivers manage their own wellbeing?",
        "category": "Caregiver",
    },
    {
        "id": "faq_13",
        "question": "What are common emotional responses to a cancer diagnosis?",
        "category": "Emotional",
    },
    {
        "id": "faq_14",
        "question": "How does chemotherapy affect the immune system?",
        "category": "Medical Info",
    },
    {
        "id": "faq_15",
        "question": "What activities are available at Active Ageing Centres?",
        "category": "Community",
    },
]

# ── Default Suggested Questions by Topic ──────────────
TOPIC_SUGGESTIONS = {
    "side_effect": [
        "How long will this side effect last?",
        "Are there medications to help with this?",
        "When should I be worried about this symptom?",
        "Can you tell me what other patients experience?",
    ],
    "medication_info": [
        "What are the side effects of this medication?",
        "How should I take this medication?",
        "Can I take other medications with it?",
        "What happens if I miss a dose?",
    ],
    "lifestyle": [
        "What foods help with recovery?",
        "Can I travel during treatment?",
        "How much rest do I need?",
        "Are there exercises safe for me?",
    ],
    "emotional": [
        "Is it normal to feel this way?",
        "How can I talk to my family about my feelings?",
        "Are there support groups I can join?",
        "What relaxation techniques can help?",
    ],
    "general": [
        "What are chemotherapy side effects?",
        "How can I manage nausea?",
        "What should I eat during treatment?",
        "When should I call my doctor?",
        "How do I manage fatigue?",
    ],
}


class FAQCache:
    """Manages cached FAQs and contextual question suggestions."""

    def __init__(self, cache_dir: Optional[Path] = None):
        self.cache_dir = cache_dir or CACHE_DIR
        self.cache_file = self.cache_dir / "faq_cache.json"
        self.cache = self._load_cache()

    def _load_cache(self) -> dict:
        """Load cache from disk or initialize."""
        if self.cache_file.exists():
            with open(self.cache_file, "r", encoding="utf-8") as f:
                return json.load(f)
        return {"faqs": [], "generated_at": None, "ttl": 86400}

    def _save_cache(self):
        """Save cache to disk."""
        with open(self.cache_file, "w", encoding="utf-8") as f:
            json.dump(self.cache, f, indent=2, ensure_ascii=False)

    def get_faqs(self) -> list[dict]:
        """Get cached FAQs, or return defaults."""
        if self.cache.get("faqs"):
            return self.cache["faqs"]
        return DEFAULT_FAQS

    def generate_faqs(self, knowledge_graph_data: Optional[dict] = None) -> list[dict]:
        """
        Generate FAQs from the knowledge graph using Gemini.
        Falls back to defaults if Gemini isn't available.
        """
        if not _api_key:
            self.cache["faqs"] = DEFAULT_FAQS
            self._save_cache()
            return DEFAULT_FAQS

        try:
            import google.generativeai as genai
            genai.configure(api_key=_api_key)
            model = genai.GenerativeModel(GEMINI_MODEL)

            graph_summary = ""
            if knowledge_graph_data:
                nodes = knowledge_graph_data.get("nodes", [])[:50]
                graph_summary = f"Key medical entities in our knowledge base: {', '.join([n['label'] for n in nodes])}"

            prompt = f"""Generate 20 frequently asked questions that chemotherapy patients and their caregivers commonly ask.
{graph_summary}

Categories: Side Effects, Medication, Lifestyle, Emotional, Medical Info, Caregiver, Community, Emergency

Return a JSON array where each item has "id", "question", and "category" fields.
Return ONLY valid JSON."""

            response = model.generate_content(prompt)
            text = response.text.strip()
            if text.startswith("```"):
                text = text.split("```")[1]
                if text.startswith("json"):
                    text = text[4:]
                text = text.strip()

            faqs = json.loads(text)
            self.cache["faqs"] = faqs
            self.cache["generated_at"] = time.time()
            self._save_cache()
            return faqs

        except Exception as e:
            print(f"[FAQ Cache] Generation error: {e}")
            self.cache["faqs"] = DEFAULT_FAQS
            self._save_cache()
            return DEFAULT_FAQS

    def get_suggestions(self, intent: Optional[str] = None,
                        last_topic: Optional[str] = None) -> list[str]:
        """Get contextual question suggestions based on current topic."""
        if intent and intent in TOPIC_SUGGESTIONS:
            return TOPIC_SUGGESTIONS[intent]

        if last_topic:
            # Map topics to suggestion categories
            topic_map = {
                "medical_qa": "general",
                "symptom_check": "side_effect",
                "medication_info": "medication_info",
                "side_effect": "side_effect",
                "lifestyle": "lifestyle",
                "emotional": "emotional",
            }
            category = topic_map.get(last_topic, "general")
            return TOPIC_SUGGESTIONS.get(category, TOPIC_SUGGESTIONS["general"])

        return TOPIC_SUGGESTIONS["general"]


# Module-level singleton
_faq_cache: Optional[FAQCache] = None

def get_faq_cache() -> FAQCache:
    global _faq_cache
    if _faq_cache is None:
        _faq_cache = FAQCache()
    return _faq_cache
