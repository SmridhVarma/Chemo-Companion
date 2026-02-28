"""
Chemo Companion - Lookup Agent
Queries the internal GraphRAG (vector search + knowledge graph).
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from knowledge.rag_engine import get_engine


def lookup(query: str, intent: dict = None) -> dict:
    """
    Query internal GraphRAG and return results with confidence.
    
    Args:
        query: User's question
        intent: Planner's intent analysis (optional)
    
    Returns:
        dict with context, sources, and confidence score
    """

    engine = get_engine()
    
    # Use context-aware query if available (e.g., "How long does nausea last?" instead of "How long does it last?")
    search_query = query
    if intent and intent.get("standalone_query"):
        candidate = intent["standalone_query"].strip()
        if candidate:
            search_query = candidate
            print(f"[Lookup] Using rewritten query: '{search_query}'")

    results = engine.retrieve(search_query)

    return {
        "agent": "lookup",
        "query": search_query,
        "original_query": query,
        "context": results["combined_context"],
        "sources": results["sources"],
        "confidence": results["confidence"],
        "vector_hits": results["vector_hit_count"],
        "graph_hits": results["graph_hit_count"],
        "status": "complete",
    }
