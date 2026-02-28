"""
Chemo Companion - One-command data pipeline
Runs: PDF Extraction → Entity Extraction → Knowledge Graph → Vector Indexing
"""
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

def run_pipeline():
    start = time.time()
    print("=" * 60)
    print("  Chemo Companion — Data Pipeline")
    print("=" * 60)

    # ── Step 1: Extract text from PDFs ─────────────
    print("\n📄 Step 1/4: Extracting text from PDFs...")
    from extraction.pdf_extractor import extract_all
    chunks = extract_all()
    print(f"   ✅ Extracted {len(chunks)} text chunks")

    # ── Step 2: Extract entities ───────────────────
    print("\n🧬 Step 2/4: Extracting medical entities...")
    try:
        from extraction.entity_extractor import process_all_chunks
        # Process a subset for speed (full extraction can take a while with API calls)
        entities = process_all_chunks(max_chunks=50)
        print(f"   ✅ Extracted entities from {len(entities)} chunks")
    except Exception as e:
        print(f"   ⚠️  Entity extraction skipped: {e}")
        print("   → Creating minimal entities file for graph...")
        _create_minimal_entities(chunks)

    # ── Step 3: Build Knowledge Graph ──────────────
    print("\n🕸️  Step 3/4: Building knowledge graph...")
    try:
        from knowledge.graph_builder import build_graph, save_graph
        G = build_graph()
        save_graph(G)
        print(f"   ✅ Graph: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
    except Exception as e:
        print(f"   ⚠️  Graph build skipped: {e}")
        print("   → Creating empty graph structure...")
        _create_empty_graph()

    # ── Step 4: Index into Vector Store ────────────
    print("\n🔍 Step 4/4: Indexing into vector store...")
    try:
        from knowledge.vector_store import VectorStore
        store = VectorStore()
        store.index_chunks()
        stats = store.get_stats()
        print(f"   ✅ Indexed {stats['count']} chunks into ChromaDB")
    except Exception as e:
        print(f"   ⚠️  Indexing skipped: {e}")

    elapsed = time.time() - start
    print(f"\n{'=' * 60}")
    print(f"  Pipeline complete in {elapsed:.1f}s")
    print(f"{'=' * 60}")


def _create_minimal_entities(chunks):
    """Create a minimal entities file from chunk text using keyword extraction."""
    import json
    from config import ENTITIES_DIR

    # Simple keyword-based entity extraction as fallback
    medical_terms = {
        "MEDICATION": ["chemotherapy", "chemo", "cisplatin", "carboplatin", "paclitaxel",
                       "doxorubicin", "fluorouracil", "5-fu", "methotrexate", "cyclophosphamide",
                       "vincristine", "irinotecan", "oxaliplatin", "gemcitabine", "tamoxifen",
                       "trastuzumab", "bevacizumab", "rituximab", "pembrolizumab", "nivolumab",
                       "ibuprofen", "paracetamol", "ondansetron", "dexamethasone", "prednisone",
                       "granisetron", "filgrastim", "epoetin", "loperamide", "diphenhydramine"],
        "SIDE_EFFECT": ["nausea", "vomiting", "fatigue", "hair loss", "alopecia",
                        "neuropathy", "diarrhea", "constipation", "mouth sores", "mucositis",
                        "anemia", "neutropenia", "thrombocytopenia", "infection", "fever",
                        "pain", "appetite loss", "weight loss", "insomnia", "anxiety",
                        "depression", "cognitive changes", "chemo brain", "skin changes",
                        "rash", "nail changes", "taste changes", "bleeding", "bruising",
                        "swelling", "tingling", "numbness", "dizziness", "headache"],
        "TREATMENT": ["radiation", "immunotherapy", "surgery", "stem cell transplant",
                      "hormone therapy", "targeted therapy", "clinical trial",
                      "palliative care", "rehabilitation"],
        "BODY_SYSTEM": ["immune system", "digestive system", "nervous system",
                        "bone marrow", "liver", "kidney", "heart", "lungs", "skin",
                        "blood", "gastrointestinal", "cardiovascular"],
        "CONDITION": ["cancer", "breast cancer", "lung cancer", "colorectal cancer",
                      "lymphoma", "leukemia", "melanoma", "ovarian cancer", "prostate cancer"],
        "RECOMMENDATION": ["hydration", "rest", "exercise", "diet", "nutrition",
                           "meditation", "support group", "counseling"],
    }

    all_results = []
    for chunk in chunks[:100]:
        text_lower = chunk["text"].lower()
        entities = []
        relationships = []

        for entity_type, terms in medical_terms.items():
            for term in terms:
                if term in text_lower:
                    entities.append({
                        "text": term.title(),
                        "type": entity_type,
                    })

        # Auto-generate relationships
        side_effects = [e for e in entities if e["type"] == "SIDE_EFFECT"]
        medications = [e for e in entities if e["type"] == "MEDICATION"]
        for med in medications:
            for se in side_effects:
                relationships.append({
                    "source": med["text"],
                    "relation": "causes",
                    "target": se["text"],
                })

        if entities:
            all_results.append({
                "chunk_id": chunk["id"],
                "source": chunk["source"],
                "page": chunk["page"],
                "entities": entities,
                "relationships": relationships,
            })

    output_file = ENTITIES_DIR / "all_entities.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_results, f, indent=2, ensure_ascii=False)

    print(f"   → Created {len(all_results)} entity records with keyword extraction")


def _create_empty_graph():
    """Create a minimal empty graph structure."""
    import json
    from config import GRAPH_DIR
    
    graph_data = {"nodes": [], "links": []}
    with open(GRAPH_DIR / "knowledge_graph.json", "w", encoding="utf-8") as f:
        json.dump(graph_data, f, indent=2)


if __name__ == "__main__":
    run_pipeline()
