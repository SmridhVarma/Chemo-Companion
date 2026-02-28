"""
Chemo Companion - PDF Text Extractor
Extracts text from all PDFs in RAG_Data/ using PyMuPDF.
Outputs structured text chunks with metadata.
"""
import json
import re
from pathlib import Path
from typing import Optional

import fitz  # PyMuPDF

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import RAG_DATA_DIR, EXTRACTED_TEXT_DIR, CHUNK_SIZE, CHUNK_OVERLAP


def extract_text_from_pdf(pdf_path: Path) -> list[dict]:
    """Extract text from a single PDF, returning a list of page-level dicts."""
    doc = fitz.open(str(pdf_path))
    pages = []
    for page_num, page in enumerate(doc, start=1):
        text = page.get_text("text")
        text = re.sub(r'\n{3,}', '\n\n', text).strip()
        if text:
            pages.append({
                "source": pdf_path.name,
                "page": page_num,
                "text": text,
            })
    doc.close()
    return pages


def chunk_text(text: str, chunk_size: int = CHUNK_SIZE,
               overlap: int = CHUNK_OVERLAP) -> list[str]:
    """Split text into overlapping chunks by approximate word count."""
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = start + chunk_size
        chunk = " ".join(words[start:end])
        chunks.append(chunk)
        start += chunk_size - overlap
    return chunks


def extract_all(data_dir: Optional[Path] = None) -> list[dict]:
    """
    Extract and chunk all PDFs in RAG_Data/.
    Returns list of chunk dicts with metadata.
    Saves results to extracted_text/ as JSON.
    """
    data_dir = data_dir or RAG_DATA_DIR
    all_chunks = []

    pdf_files = sorted(data_dir.glob("*.pdf"))
    print(f"[PDF Extractor] Found {len(pdf_files)} PDFs in {data_dir}")

    for pdf_path in pdf_files:
        try:
            pages = extract_text_from_pdf(pdf_path)
            for page_data in pages:
                chunks = chunk_text(page_data["text"])
                for i, chunk in enumerate(chunks):
                    all_chunks.append({
                        "id": f"{pdf_path.stem}_p{page_data['page']}_c{i}",
                        "source": page_data["source"],
                        "page": page_data["page"],
                        "chunk_index": i,
                        "text": chunk,
                    })
            print(f"  ✓ {pdf_path.name}: {len(pages)} pages → "
                  f"{sum(len(chunk_text(p['text'])) for p in pages)} chunks")
        except Exception as e:
            print(f"  ✗ {pdf_path.name}: {e}")

    # Save to disk
    output_file = EXTRACTED_TEXT_DIR / "all_chunks.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_chunks, f, indent=2, ensure_ascii=False)

    print(f"\n[PDF Extractor] Total: {len(all_chunks)} chunks saved to {output_file}")
    return all_chunks


if __name__ == "__main__":
    chunks = extract_all()
    print(f"\nSample chunk:\n{json.dumps(chunks[0], indent=2)}")
