"""
Chemo Companion - Relevance Agent
Judges whether internal RAG results are sufficient or browser fallback is needed.
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import RELEVANCE_THRESHOLD


def judge_relevance(lookup_result: dict, query: str) -> dict:
    """
    Evaluate if internal RAG results are sufficient.
    
    Decision logic:
    - confidence >= threshold → SUFFICIENT (pass to Writer)
    - confidence < threshold  → INSUFFICIENT (trigger Browser Agent)
    
    Args:
        lookup_result: Output from Lookup Agent
        query: Original user query
    
    Returns:
        dict with decision and reasoning
    """
    confidence = lookup_result.get("confidence", 0)
    vector_hits = lookup_result.get("vector_hits", 0)
    graph_hits = lookup_result.get("graph_hits", 0)
    context = lookup_result.get("context", "")

    # Decision factors
    is_sufficient = confidence >= RELEVANCE_THRESHOLD
    has_context = len(context.strip()) > 100
    has_hits = vector_hits >= 2

    # Override: even if confidence is OK, check if context is too thin
    if is_sufficient and not has_context:
        is_sufficient = False

    # Calculate detailed reasoning
    reasons = []
    if confidence >= RELEVANCE_THRESHOLD:
        reasons.append(f"Confidence ({confidence:.2f}) meets threshold ({RELEVANCE_THRESHOLD})")
    else:
        reasons.append(f"Confidence ({confidence:.2f}) below threshold ({RELEVANCE_THRESHOLD})")

    if vector_hits > 0:
        reasons.append(f"Found {vector_hits} vector matches")
    else:
        reasons.append("No vector matches found")

    if graph_hits > 0:
        reasons.append(f"Found {graph_hits} graph results")

    decision = "SUFFICIENT" if is_sufficient else "INSUFFICIENT"

    return {
        "agent": "relevance",
        "decision": decision,
        "confidence": confidence,
        "needs_browser": not is_sufficient,
        "reasoning": "; ".join(reasons),
        "threshold": RELEVANCE_THRESHOLD,
    }
