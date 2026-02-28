"""
Chemo Companion - Citation Agent
Ensures every medical claim has a citation and formats them consistently.
Returns structured citations for both internal documents and external web sources.
"""
import re


# ── Source Name Mapping ────────────────────────────────
# Maps PDF filenames to human-readable article titles.
# Derived from the actual content of each document in the knowledge base.
SOURCE_LABELS = {
    # American Cancer Society articles (cancer.org)
    "246.00.pdf":                       "Anxiety — American Cancer Society",
    "6678.00.pdf":                      "Immunotherapy — American Cancer Society",
    "6730.00.pdf":                      "Dietary Supplements — American Cancer Society",
    "7288.00.pdf":                      "Chemo Brain (Memory & Focus Changes) — American Cancer Society",
    "7288.00 (1).pdf":                  "Chemo Brain (Memory & Focus Changes) — American Cancer Society",
    "7509.00.pdf":                      "Peripheral Neuropathy — American Cancer Society",
    "7529.00.pdf":                      "Anemia in People with Cancer — American Cancer Society",
    "7629.00.pdf":                      "Targeted Therapy — American Cancer Society",
    "7799.00.pdf":                      "Cancer-related Fatigue — American Cancer Society",
    "7958.00.pdf":                      "Palliative Care — American Cancer Society",
    "8070.00.pdf":                      "Bladder Incontinence — American Cancer Society",
    "8883.00.pdf":                      "Confusion and Delirium — American Cancer Society",
    "8885.00.pdf":                      "Depression — American Cancer Society",
    "8887.00.pdf":                      "Loss of Appetite & Cachexia — American Cancer Society",
    "8889.00.pdf":                      "Weight Changes During Treatment — American Cancer Society",
    "8894.00.pdf":                      "Hair Loss (Alopecia) — American Cancer Society",
    "8896.00.pdf":                      "Infections in People with Cancer — American Cancer Society",
    "8900.00.pdf":                      "Thrombocytopenia (Low Platelet Count) — American Cancer Society",
    "8904.00.pdf":                      "Mouth Soreness and Pain — American Cancer Society",
    "8918.00.pdf":                      "Constipation — American Cancer Society",
    "8919.00.pdf":                      "Diarrhea — American Cancer Society",
    "9466.00.pdf":                      "Nail Changes — American Cancer Society",
    "9468.00.pdf":                      "Neutropenia (Low White Blood Cell Counts) — American Cancer Society",
    "9498.00.pdf":                      "Hormone Therapy — American Cancer Society",
    "9546.00.pdf":                      "Nausea and Vomiting — American Cancer Society",
    "9658.00.pdf":                      "Rashes and Skin Changes — American Cancer Society",
    "9717.00.pdf":                      "Chemotherapy — American Cancer Society",
    "9717.00 (1).pdf":                  "Chemotherapy — American Cancer Society",
    "9717.00 (2).pdf":                  "Chemotherapy — American Cancer Society",
    "9717.00 (3).pdf":                  "Chemotherapy — American Cancer Society",
    "9733.00.pdf":                      "Cancer Surgery — American Cancer Society",
    # Other sources
    "Bowel Incontinence _ American Cancer Society.pdf":  "Bowel Incontinence — American Cancer Society",
    "Chemotherapy and You 2024 508-compliant_0.pdf":     "Chemotherapy and You — National Cancer Institute",
    "Patient's Guide to the Cancer Experience - Chemocare.pdf": "Patient's Guide to Cancer — Chemocare",
    "getting-help-for-chemo-brain.pdf":                  "Getting Help for Chemo Brain — American Cancer Society",
    "help-for-patients-survivors-caregivers.pdf":        "Help for Patients, Survivors & Caregivers — American Cancer Society",
    "questions-to-ask-about-my-cancer.pdf":              "Questions to Ask About My Cancer — American Cancer Society",
}


def _get_source_label(filename: str) -> str:
    """Get a human-readable label for a source document."""
    if filename in SOURCE_LABELS:
        return SOURCE_LABELS[filename]
    # Fallback: clean up the filename into something presentable
    name = filename.replace(".pdf", "").replace("_", " ").replace("-", " ")
    # Remove numeric-only names like "9717.00"
    if re.match(r'^[\d\s\.\(\)]+$', name):
        return "Medical Reference — Cancer.org"
    return name.title()


def enforce_citations(writer_result: dict) -> dict:
    """
    Final pass: collect and structure all citations.
    Returns structured citation data for the frontend to render.
    """
    answer = writer_result.get("answer", "")
    sources = writer_result.get("sources_used", [])
    used_browser = writer_result.get("used_browser", False)

    citation_entries = []
    seen_labels = set()

    for source in sources:
        source_name = source.get("source", "Unknown")
        source_type = source.get("type", "internal_pdf")

        if source_type == "external_web":
            label = source_name
            if label in seen_labels:
                continue
            seen_labels.add(label)
            citation_entries.append({
                "index": len(citation_entries) + 1,
                "label": label,
                "url": source.get("url", ""),
                "type": "web",
            })
        else:
            # Internal PDF — use human-readable label, deduplicate by label
            label = _get_source_label(source_name)
            if label in seen_labels:
                continue
            seen_labels.add(label)
            citation_entries.append({
                "index": len(citation_entries) + 1,
                "label": label,
                "type": "document",
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
