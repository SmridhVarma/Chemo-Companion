"""
Chemo Companion - Vector Store (ChromaDB + PubMedBERT)
Biomedical-domain embeddings for semantic search over medical text chunks.
"""
import json
from pathlib import Path
from typing import Optional

import chromadb
from chromadb.config import Settings

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import (
    CHROMA_DIR, CHROMA_COLLECTION, EXTRACTED_TEXT_DIR,
    EMBEDDING_MODEL, TOP_K_RESULTS
)


# ── Embedding Model Loader ────────────────────────────

_embedding_model = None
_embedding_mode = None

def _load_embedding_model():
    """Load the best available embedding model (singleton)."""
    global _embedding_model, _embedding_mode
    if _embedding_model is not None:
        return _embedding_model, _embedding_mode

    # Try PubMedBERT first
    try:
        from sentence_transformers import SentenceTransformer
        print(f"[Vector Store] Loading biomedical model: {EMBEDDING_MODEL}")
        _embedding_model = SentenceTransformer(EMBEDDING_MODEL)
        _embedding_mode = "pubmedbert"
        print(f"[Vector Store] PubMedBERT loaded. Dim: {_embedding_model.get_sentence_embedding_dimension()}")
        return _embedding_model, _embedding_mode
    except Exception as e:
        print(f"[Vector Store] PubMedBERT unavailable: {e}")

    # Try Gemini embeddings
    try:
        from config import GEMINI_API_KEY, GOOGLE_API_KEY
        api_key = GEMINI_API_KEY or GOOGLE_API_KEY
        if api_key:
            import google.generativeai as genai
            genai.configure(api_key=api_key)
            _embedding_model = genai
            _embedding_mode = "gemini"
            print("[Vector Store] Using Gemini text-embedding-004")
            return _embedding_model, _embedding_mode
    except Exception as e:
        print(f"[Vector Store] Gemini embeddings unavailable: {e}")

    _embedding_mode = "none"
    print("[Vector Store] No embedding model available")
    return None, "none"


def compute_embeddings(texts: list[str]) -> list[list[float]]:
    """Compute embeddings for a list of texts using the best available model."""
    model, mode = _load_embedding_model()
    if mode == "pubmedbert":
        return model.encode(texts, show_progress_bar=False).tolist()
    elif mode == "gemini":
        results = []
        for text in texts:
            resp = model.embed_content(
                model="models/text-embedding-004",
                content=text[:2048],
            )
            results.append(resp['embedding'])
        return results
    else:
        raise RuntimeError("No embedding model available")


class VectorStore:
    """ChromaDB vector store with pre-computed embeddings."""

    def __init__(self, persist_dir: Optional[Path] = None, collection_name: str = CHROMA_COLLECTION):
        self.persist_dir = persist_dir or CHROMA_DIR
        self.collection_name = collection_name
        self._client = None
        self._collection = None

    @property
    def client(self):
        if self._client is None:
            self._client = chromadb.PersistentClient(
                path=str(self.persist_dir),
                settings=Settings(anonymized_telemetry=False),
            )
        return self._client

    @property
    def collection(self):
        if self._collection is None:
            self._collection = self.client.get_or_create_collection(
                name=self.collection_name,
                metadata={"hnsw:space": "cosine"},
            )
        return self._collection

    def index_chunks(self, chunks_file: Optional[Path] = None, batch_size: int = 50):
        """Index all text chunks into ChromaDB with pre-computed embeddings."""
        chunks_file = chunks_file or (EXTRACTED_TEXT_DIR / "all_chunks.json")

        with open(chunks_file, "r", encoding="utf-8") as f:
            chunks = json.load(f)

        print(f"[Vector Store] Indexing {len(chunks)} chunks in batches of {batch_size}...")

        for i in range(0, len(chunks), batch_size):
            batch = chunks[i:i + batch_size]
            texts = [c["text"] for c in batch]
            embeddings = compute_embeddings(texts)
            
            self.collection.upsert(
                ids=[c["id"] for c in batch],
                documents=texts,
                embeddings=embeddings,
                metadatas=[{
                    "source": c["source"],
                    "page": c["page"],
                    "chunk_index": c["chunk_index"],
                } for c in batch],
            )
            print(f"  Indexed batch {i // batch_size + 1}/"
                  f"{(len(chunks) + batch_size - 1) // batch_size}")

        print(f"[Vector Store] Indexing complete. Collection size: {self.collection.count()}")

    def search(self, query: str, top_k: int = TOP_K_RESULTS) -> list[dict]:
        """Semantic search using pre-computed query embeddings."""
        query_embedding = compute_embeddings([query])
        
        results = self.collection.query(
            query_embeddings=query_embedding,
            n_results=top_k,
            include=["documents", "metadatas", "distances"],
        )

        hits = []
        if results and results["documents"]:
            for doc, meta, dist in zip(
                results["documents"][0],
                results["metadatas"][0],
                results["distances"][0],
            ):
                hits.append({
                    "text": doc,
                    "source": meta.get("source", ""),
                    "page": meta.get("page", 0),
                    "similarity": round(1 - dist, 4),
                })

        return hits

    def get_stats(self) -> dict:
        """Get collection statistics."""
        _, mode = _load_embedding_model()
        return {
            "collection": self.collection_name,
            "count": self.collection.count(),
            "embedding_model": EMBEDDING_MODEL if mode == "pubmedbert" else f"gemini ({mode})",
        }


# Module-level singleton
_store: Optional[VectorStore] = None

def get_store() -> VectorStore:
    global _store
    if _store is None:
        _store = VectorStore()
    return _store


if __name__ == "__main__":
    store = VectorStore()
    store.index_chunks()

    # Test search
    results = store.search("What are the side effects of chemotherapy?")
    print(f"\nSearch results for 'side effects of chemotherapy':")
    for i, hit in enumerate(results, 1):
        print(f"  {i}. [{hit['similarity']:.3f}] {hit['source']} p.{hit['page']}")
        print(f"     {hit['text'][:150]}...")
