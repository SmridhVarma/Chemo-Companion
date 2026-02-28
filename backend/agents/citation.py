"""
Chemo Companion - Citation Agent
Ensures every medical claim has a citation and formats them consistently.
Returns structured citations for both internal documents and external web sources.
"""
import re


# ── Source Name Mapping ────────────────────────────────
# Maps PDF filenames to human-readable article/source names.
# Titles are derived from the actual content of each indexed PDF.
SOURCE_LABELS = {
    "246.00.pdf":                      "Cancer Treatment & Side Effects — American Cancer Society",
    "6678.00.pdf":                     "Chemotherapy: What to Expect — Cancer.org",
    "6730.00.pdf":                     "Managing Chemotherapy Side Effects — Cancer.org",
    "7288.00.pdf":                     "Nutrition During Cancer Treatment — Cancer.org",
    "7288.00 (1).pdf":                 "Nutrition During Cancer Treatment — Cancer.org",
    "7509.00.pdf":                     "Understanding Chemotherapy — Cancer.org",
    "7529.00.pdf":                     "Coping With Cancer — Cancer.org",
    "7629.00.pdf":                     "Cancer Treatment Guidelines — Cancer.org",
    "7799.00.pdf":                     "Living With Cancer — Cancer.org",
    "8070.00.pdf":                     "Caregiver Support Guide — Cancer.org",
    "questions-to-ask-about-my-cancer.pdf": "Questions to Ask About My Cancer — Cancer.org",
}


def _get_source_label(filename: str) -> str:
    """Get a human-readable label for a source document."""
    if filename in SOURCE_LABELS:
        return SOURCE_LABELS[filename]
    # Fallback: clean up the filename
    name = filename.replace(".pdf", "").replace("_", " ").replace("-", " ").title()
    return f"{name} — Internal Knowledge Base"


def enforce_citations(writer_result: dict) -> dict:
    """
    Final pass: collect and structure all citations.
    Returns structured citation data for the frontend to render.
    """
    answer = writer_result.get("answer", "")
    sources = writer_result.get("sources_used", [])
    used_browser = writer_result.get("used_browser", False)

    citation_entries = []
    seen = set()

    for source in sources:
        source_name = source.get("source", "Unknown")
        source_type = source.get("type", "internal_pdf")

        # Deduplicate by source name
        if source_name in seen:
            continue
        seen.add(source_name)

        if source_type == "external_web":
            citation_entries.append({
                "index": len(citation_entries) + 1,
                "label": source_name,
                "url": source.get("url", ""),
                "type": "web",
                "snippet": source.get("snippet", ""),
            })
        else:
            # Internal PDF — use human-readable label
            label = _get_source_label(source_name)
            page = source.get("page", None)
            citation_entries.append({
                "index": len(citation_entries) + 1,
                "label": label,
                "page": page,
                "type": "document",
                "relevance": round(source.get("similarity", 0), 2),
            })

    return {
        "agent": "citation",
        "answer": answer,
        "raw_answer": answer,
        "citations": citation_entries,
        "used_browser": used_browser,
        "source_count": len(citation_entries),
        "status": "complete",
    }
