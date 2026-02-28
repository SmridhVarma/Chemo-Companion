"""
Chemo Companion - Entity Extractor (LangExtract)
Extracts oncology-specific entities and relationships from text chunks
using LangExtract with Gemini for knowledge graph construction.
"""
import json
import os
from pathlib import Path
from typing import Optional

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import (
    EXTRACTED_TEXT_DIR, ENTITIES_DIR,
    GEMINI_API_KEY, GOOGLE_API_KEY, LANGEXTRACT_MODEL
)

# Set API key for LangExtract/Gemini
_api_key = GEMINI_API_KEY or GOOGLE_API_KEY
if _api_key:
    os.environ["GOOGLE_API_KEY"] = _api_key

try:
    import langextract as lx
    HAS_LANGEXTRACT = True
except ImportError:
    HAS_LANGEXTRACT = False
    print("[Entity Extractor] WARNING: langextract not installed. Using fallback.")


# ── LangExtract Prompt & Examples ──────────────────────

ONCOLOGY_PROMPT = """Extract all oncology-relevant entities and their relationships from this medical text.

Entities to extract:
- MEDICATION: Drug names, brand names, generic names (e.g., Docetaxel, Cisplatin)
- SIDE_EFFECT: Symptoms, adverse reactions (e.g., nausea, hair loss, neuropathy)
- TREATMENT: Chemotherapy protocols, procedures, therapies (e.g., radiation, immunotherapy)
- BODY_SYSTEM: Organs, body parts affected (e.g., liver, bone marrow, nervous system)
- RECOMMENDATION: Patient advice, management tips, lifestyle modifications
- CONDITION: Diseases, diagnoses, medical conditions (e.g., breast cancer, lymphoma)

Also extract relationships between entities, such as:
- MEDICATION causes SIDE_EFFECT
- TREATMENT treats CONDITION
- RECOMMENDATION manages SIDE_EFFECT
- SIDE_EFFECT affects BODY_SYSTEM
"""

ONCOLOGY_EXAMPLES = []

# Try to build LangExtract examples if available
if HAS_LANGEXTRACT:
    try:
        ONCOLOGY_EXAMPLES = [
            lx.data.ExampleData(
                text="Docetaxel may cause peripheral neuropathy, characterized by tingling and numbness in the hands and feet. Patients should report these symptoms immediately. Vitamin B6 supplements may help manage mild cases.",
                extractions=[
                    lx.data.Extraction(
                        extraction_class="MEDICATION",
                        extraction_text="Docetaxel"
                    ),
                    lx.data.Extraction(
                        extraction_class="SIDE_EFFECT",
                        extraction_text="peripheral neuropathy"
                    ),
                    lx.data.Extraction(
                        extraction_class="SIDE_EFFECT",
                        extraction_text="tingling and numbness in the hands and feet"
                    ),
                    lx.data.Extraction(
                        extraction_class="BODY_SYSTEM",
                        extraction_text="hands and feet"
                    ),
                    lx.data.Extraction(
                        extraction_class="RECOMMENDATION",
                        extraction_text="Vitamin B6 supplements may help manage mild cases"
                    ),
                ]
            )
        ]
    except Exception:
        ONCOLOGY_EXAMPLES = []


def extract_entities_langextract(text: str, chunk_id: str = "") -> dict:
    """Extract entities from text using LangExtract + Gemini."""
    if not HAS_LANGEXTRACT:
        return _fallback_extraction(text, chunk_id)

    try:
        result = lx.extract(
            text_or_documents=text,
            prompt_description=ONCOLOGY_PROMPT,
            examples=ONCOLOGY_EXAMPLES,
            model_id=LANGEXTRACT_MODEL,
        )

        entities = []
        if hasattr(result, 'extractions'):
            for ext in result.extractions:
                entities.append({
                    "type": ext.extraction_class,
                    "text": ext.extraction_text,
                    "source_span": getattr(ext, 'source_span', None),
                })

        return {
            "chunk_id": chunk_id,
            "entities": entities,
            "raw_text": text[:200],
        }
    except Exception as e:
        print(f"  [LangExtract Error] {chunk_id}: {e}")
        return _fallback_extraction(text, chunk_id)


def _fallback_extraction(text: str, chunk_id: str = "") -> dict:
    """
    Fallback entity extraction using Gemini directly when LangExtract
    is unavailable or fails. Uses structured prompting.
    """
    try:
        import google.generativeai as genai
        genai.configure(api_key=_api_key)
        model = genai.GenerativeModel("gemini-2.5-flash")

        prompt = f"""Extract structured oncology entities from this medical text.
Return a valid JSON array of objects, each with "type" and "text" fields.
Entity types: MEDICATION, SIDE_EFFECT, TREATMENT, BODY_SYSTEM, RECOMMENDATION, CONDITION

Text: {text[:2000]}

Return ONLY the JSON array, no other text. Example:
[{{"type":"MEDICATION","text":"Docetaxel"}},{{"type":"SIDE_EFFECT","text":"nausea"}}]"""

        response = model.generate_content(prompt)
        response_text = response.text.strip()

        # Parse JSON from response
        if response_text.startswith("```"):
            response_text = response_text.split("```")[1]
            if response_text.startswith("json"):
                response_text = response_text[4:]
            response_text = response_text.strip()

        entities = json.loads(response_text)

        return {
            "chunk_id": chunk_id,
            "entities": entities,
            "raw_text": text[:200],
            "method": "gemini_fallback"
        }
    except Exception as e:
        print(f"  [Fallback Error] {chunk_id}: {e}")
        return _keyword_extraction_fallback(text, chunk_id)


def _keyword_extraction_fallback(text: str, chunk_id: str = "") -> dict:
    """
    Final fallback: Keyword-based extraction for common oncology terms.
    Ensures some data is always extracted even if APIs fail.
    """
    medical_terms = {
        'MEDICATION': ['chemotherapy', 'chemo', 'cisplatin', 'carboplatin', 'paclitaxel', 'doxorubicin', 'fluorouracil', '5-fu', 'methotrexate', 'cyclophosphamide', 'vincristine', 'irinotecan', 'oxaliplatin', 'gemcitabine', 'tamoxifen', 'trastuzumab', 'bevacizumab', 'rituximab', 'pembrolizumab', 'nivolumab', 'ibuprofen', 'paracetamol', 'ondansetron', 'dexamethasone', 'prednisone', 'granisetron', 'filgrastim', 'epoetin', 'loperamide', 'diphenhydramine'],
        'SIDE_EFFECT': ['nausea', 'vomiting', 'fatigue', 'hair loss', 'alopecia', 'neuropathy', 'diarrhea', 'constipation', 'mouth sores', 'mucositis', 'anemia', 'neutropenia', 'thrombocytopenia', 'infection', 'fever', 'pain', 'appetite loss', 'weight loss', 'insomnia', 'anxiety', 'depression', 'cognitive changes', 'chemo brain', 'skin changes', 'rash', 'nail changes', 'taste changes', 'bleeding', 'bruising', 'swelling', 'tingling', 'numbness', 'dizziness', 'headache'],
        'TREATMENT': ['radiation', 'immunotherapy', 'surgery', 'stem cell transplant', 'hormone therapy', 'targeted therapy', 'clinical trial', 'palliative care', 'rehabilitation'],
        'BODY_SYSTEM': ['immune system', 'digestive system', 'nervous system', 'bone marrow', 'liver', 'kidney', 'heart', 'lungs', 'skin', 'blood', 'gastrointestinal', 'cardiovascular'],
        'CONDITION': ['cancer', 'breast cancer', 'lung cancer', 'colorectal cancer', 'lymphoma', 'leukemia', 'melanoma', 'ovarian cancer', 'prostate cancer'],
        'RECOMMENDATION': ['hydration', 'rest', 'exercise', 'diet', 'nutrition', 'meditation', 'support group', 'counseling'],
    }

    entities = []
    text_lower = text.lower()
    for entity_type, terms in medical_terms.items():
        for term in terms:
            if term in text_lower:
                # Basic whole-word check equivalent
                start_idx = text_lower.find(term)
                if start_idx != -1: # Simple check, could be improved with regex
                     entities.append({
                        "type": entity_type,
                        "text": term.title(),
                        "source_span": {"start": start_idx, "end": start_idx + len(term)}
                    })
    
    # Simple relationship heuristic
    relationships = [] # Will be populated by the caller if needed, or we can return here?
    # The caller expects "entities" dict. Process_all_chunks handles relationship extraction separately,
    # but we can't easily do it there if we lack the LLM. 
    # Let's just return entities.

    return {
        "chunk_id": chunk_id,
        "entities": entities,
        "raw_text": text[:200],
        "method": "keyword_fallback"
    }


def extract_relationships(entities: list[dict], text: str) -> list[dict]:
    """
    Extract relationships between entities using Gemini.
    Returns list of {source, relation, target} dicts.
    """
    if not entities or not _api_key:
        return []

    try:
        import google.generativeai as genai
        genai.configure(api_key=_api_key)
        model = genai.GenerativeModel("gemini-2.5-flash")

        entity_list = ", ".join([f"{e['type']}:{e['text']}" for e in entities[:20]])
        prompt = f"""Given these medical entities: [{entity_list}]
And this source text: {text[:1500]}

Extract relationships between these entities. Return a JSON array of objects with "source", "relation", "target" fields.
Common relations: CAUSES, TREATS, MANAGES, AFFECTS, PART_OF, USED_FOR, CONTRAINDICATES

Return ONLY the JSON array. Example:
[{{"source":"Docetaxel","relation":"CAUSES","target":"neuropathy"}}]"""

        response = model.generate_content(prompt)
        response_text = response.text.strip()

        if response_text.startswith("```"):
            response_text = response_text.split("```")[1]
            if response_text.startswith("json"):
                response_text = response_text[4:]
            response_text = response_text.strip()

        return json.loads(response_text)
    except Exception as e:
        print(f"  [Relationship Error]: {e}")
        return []


def process_all_chunks(chunks_file: Optional[Path] = None,
                       max_chunks: Optional[int] = None) -> list[dict]:
    """
    Process all extracted text chunks through entity extraction.
    Saves results to entities/ directory.
    """
    chunks_file = chunks_file or (EXTRACTED_TEXT_DIR / "all_chunks.json")

    with open(chunks_file, "r", encoding="utf-8") as f:
        chunks = json.load(f)

    if max_chunks:
        chunks = chunks[:max_chunks]

    print(f"[Entity Extractor] Processing {len(chunks)} chunks...")
    all_results = []

    for i, chunk in enumerate(chunks):
        print(f"  Processing chunk {i+1}/{len(chunks)}: {chunk['id']}")

        # Extract entities
        result = extract_entities_langextract(chunk["text"], chunk["id"])

        # Extract relationships if entities found
        if result["entities"]:
            relationships = extract_relationships(
                result["entities"], chunk["text"]
            )
            result["relationships"] = relationships
        else:
            result["relationships"] = []

        # Preserve source metadata
        result["source"] = chunk["source"]
        result["page"] = chunk["page"]

        all_results.append(result)

    # Save results
    output_file = ENTITIES_DIR / "all_entities.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_results, f, indent=2, ensure_ascii=False)

    total_entities = sum(len(r["entities"]) for r in all_results)
    total_rels = sum(len(r["relationships"]) for r in all_results)
    print(f"\n[Entity Extractor] Done: {total_entities} entities, "
          f"{total_rels} relationships → {output_file}")

    return all_results


if __name__ == "__main__":
    # Process a small sample first
    results = process_all_chunks(max_chunks=5)
    if results:
        print(f"\nSample result:\n{json.dumps(results[0], indent=2)}")
