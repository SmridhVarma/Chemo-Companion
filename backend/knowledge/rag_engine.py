"""
Chemo Companion - Hybrid RAG Engine
Combines vector search (ChromaDB/PubMedBERT) + graph traversal (NetworkX)
for grounded, citation-rich answers.
"""
import json
from pathlib import Path
from typing import Optional

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import GRAPH_DIR, TOP_K_RESULTS
from knowledge.vector_store import get_store
from knowledge.graph_builder import load_graph, query_graph


class RAGEngine:
    """Hybrid RAG engine combining vector search + knowledge graph."""

    def __init__(self):
        self._store = None
        self._graph = None

    @property
    def store(self):
        if self._store is None:
            self._store = get_store()
        return self._store

    @property
    def graph(self):
        if self._graph is None:
            try:
                self._graph = load_graph()
            except FileNotFoundError:
                print("[RAG Engine] No knowledge graph found. Vector-only mode.")
                self._graph = None
        return self._graph

    def retrieve(self, query: str, top_k: int = TOP_K_RESULTS) -> dict:
        """
        Hybrid retrieval: vector search + graph traversal.
        Returns context, sources, and a confidence score.
        """
        # 1. Vector search (semantic)
        vector_results = self.store.search(query, top_k=top_k)

        # 2. Graph traversal (structured)
        graph_results = []
        graph_context = ""
        if self.graph:
            # Extract key terms from query for graph lookup
            key_terms = self._extract_key_terms(query)
            for term in key_terms:
                gr = query_graph(self.graph, term)
                if gr["found"]:
                    graph_results.append(gr)

            # Format graph context
            if graph_results:
                graph_context = self._format_graph_context(graph_results)

        # 3. Combine and score
        vector_context = "\n\n".join([
            f"[Source: {r['source']}, Page {r['page']}]\n{r['text']}"
            for r in vector_results
        ])

        # Calculate confidence score
        confidence = self._calculate_confidence(vector_results, graph_results)

        # Collect unique sources
        sources = []
        seen = set()
        for r in vector_results:
            key = f"{r['source']}_p{r['page']}"
            if key not in seen:
                seen.add(key)
                sources.append({
                    "source": r["source"],
                    "page": r["page"],
                    "similarity": r["similarity"],
                    "type": "internal_pdf",
                })

        return {
            "vector_context": vector_context,
            "graph_context": graph_context,
            "combined_context": f"{vector_context}\n\n--- Knowledge Graph ---\n{graph_context}" if graph_context else vector_context,
            "sources": sources,
            "confidence": confidence,
            "vector_hit_count": len(vector_results),
            "graph_hit_count": len(graph_results),
        }

    def _extract_key_terms(self, query: str) -> list[str]:
        """Extract medical key terms from query for graph lookup."""
        # Simple approach: use significant words
        stop_words = {
            "what", "is", "are", "the", "a", "an", "of", "for", "in", "to",
            "and", "or", "can", "do", "how", "does", "my", "i", "me", "about",
            "with", "from", "this", "that", "it", "be", "have", "has", "had",
            "was", "will", "would", "should", "could", "may", "might",
            "common", "side", "effects", "symptoms", "treatment", "cause",
            "help", "manage", "during", "after", "before",
        }
        words = query.lower().split()
        terms = [w.strip("?,!.") for w in words if w.lower().strip("?,!.") not in stop_words and len(w) > 2]

        # Also try bigrams for medical terms
        bigrams = []
        for i in range(len(words) - 1):
            bigram = f"{words[i].strip('?,!.')} {words[i+1].strip('?,!.')}"
            if any(w not in stop_words for w in bigram.split()):
                bigrams.append(bigram)

        return terms[:5] + bigrams[:3]

    def _format_graph_context(self, graph_results: list[dict]) -> str:
        """Format graph query results into readable context."""
        lines = []
        for gr in graph_results:
            entity = gr["entity"]
            if gr["connections"]:
                lines.append(f"Knowledge about '{entity}':")
                for conn in gr["connections"][:10]:
                    lines.append(
                        f"  • {conn['from']} → {conn['relation']} → {conn['to']} "
                        f"({conn.get('to_type', '')})"
                    )
        return "\n".join(lines)

    def _calculate_confidence(self, vector_results: list, graph_results: list) -> float:
        """
        Calculate confidence score (0-1) based on retrieval quality.
        Used by Relevance Agent to decide if browser fallback is needed.
        """
        if not vector_results:
            return 0.0

        # Factor 1: Best vector similarity
        best_sim = max(r["similarity"] for r in vector_results) if vector_results else 0
        # Factor 2: Number of relevant results (similarity > 0.5)
        relevant_count = sum(1 for r in vector_results if r["similarity"] > 0.5)
        # Factor 3: Graph hits
        graph_bonus = min(0.2, len(graph_results) * 0.05)

        # Weighted combination
        confidence = (best_sim * 0.5) + (relevant_count / 5 * 0.3) + graph_bonus

        return round(min(1.0, confidence), 3)


# Module-level singleton
_engine: Optional[RAGEngine] = None

def get_engine() -> RAGEngine:
    global _engine
    if _engine is None:
        _engine = RAGEngine()
    return _engine


if __name__ == "__main__":
    engine = RAGEngine()
    result = engine.retrieve("What are the side effects of chemotherapy?")
    print(f"Confidence: {result['confidence']}")
    print(f"Vector hits: {result['vector_hit_count']}")
    print(f"Graph hits: {result['graph_hit_count']}")
    print(f"\nSources:")
    for s in result["sources"]:
        print(f"  • {s['source']} p.{s['page']} ({s['similarity']:.3f})")
