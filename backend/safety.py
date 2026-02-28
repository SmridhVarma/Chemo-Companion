"""
Chemo Companion - Local Safety Guardrails
A lightweight, zero-cost, deterministic guardrail system to prevent harmful queries
and ensure patient safety without additional API calls.
"""

import re
from typing import Tuple

# Define patterns for unsafe or critical content
PATTERN_SELF_HARM = re.compile(r"(suicide|kill myself|end it all|hurt myself|want to die)", re.IGNORECASE)
PATTERN_STOP_TREATMENT = re.compile(r"(stop chemo|quit treatment|give up chemo|refuse treatment|alternatives instead of chemo|natural instead of chemo)", re.IGNORECASE)
PATTERN_UNPROVEN_CURE = re.compile(r"(cure cancer naturally|miracle cure|bleach|essential oils cure|fruit cure|alkaline diet cure)", re.IGNORECASE)
PATTERN_EMERGENCY = re.compile(r"(chest pain|difficulty breathing|fainted|unconscious|heavy bleeding|passed out|seizure)", re.IGNORECASE)

def check_safety(query: str) -> Tuple[bool, str]:
    """
    Check if a query is safe to process.
    Returns (is_safe, warning_message).
    """
    if not query:
        return True, ""

    query_lower = query.lower()

    # 1. Immediate Harm / Emergency
    if PATTERN_SELF_HARM.search(query):
        return False, "⚠️ **IMMEDIATE ACTION REQUIRED**\n\nIt sounds like you are in distress. Please reach out for help immediately:\n- **Call Emergency Services (999/995 in Singapore)**\n- **SOS (Samaritans of Singapore): 1-767** (24-hour hotline)\n\nYou are not alone. Please speak to a professional now."

    if PATTERN_EMERGENCY.search(query):
        return False, "⚠️ **MEDICAL EMERGENCY DETECTED**\n\nYour query suggests a potential medical emergency (e.g., chest pain, breathing difficulty). **Please go to the nearest A&E or call an ambulance immediately.** Do not rely on an AI for life-threatening symptoms."

    # 2. Treatment Cessation / Unproven Alternatives
    # We don't block these, but we add a strong disclaimer PRE-pended to the answer context.
    # The Writer Agent is already instructed to handle this, but we can return a flag if needed.
    # For now, let's allow the query but maybe inject a system note?
    # Actually, the user asked to "identify harmful behaviour".
    # Let's return a warning but TRUE for is_safe, so the LLM can still answer with the right context + warning.
    if PATTERN_STOP_TREATMENT.search(query) or PATTERN_UNPROVEN_CURE.search(query):
        return True, "⚠️ **SAFETY NOTICE**: PLEASE DISCUSS ANY CHANGES TO YOUR TREATMENT PLAN WITH YOUR ONCOLOGIST. DO NOT STOP CHEMOTHERAPY WITHOUT MEDICAL SUPERVISION."

    return True, ""
