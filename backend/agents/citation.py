"""
Chemo Companion - Citation Agent
Ensures every medical claim has a citation and formats them consistently.
"""
import json
from typing import Optional

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))


def enforce_citations(writer_result: dict) -> dict:
    """
    Final pass: verify and format citations in the answer.
    Appends a clean citation footer to the response.
    """
    answer = writer_result.get("answer", "")
    sources = writer_result.get("sources_used", [])
    used_browser = writer_result.get("used_browser", False)

    # Build citation footer
    # Build citation footer (only for external web sources as per user request)
    citation_entries = []
    seen = set()
    
    for i, source in enumerate(sources, 1):
        source_name = source.get("source", "Unknown")
        source_type = source.get("type", "internal_pdf")
        
        # Deduplicate
        key = source_name
        if key in seen:
            continue
        seen.add(key)

        # Only reference external web sources
        if source_type == "external_web":
            url = source.get("url", "")
            citation_entries.append({
                "index": len(citation_entries) + 1,
                "label": source_name,
                "url": url,
                "type": "web",
            })
            
    if not citation_entries:
        return {
            "agent": "citation",
            "answer": answer, # No footer if no web sources
            "raw_answer": answer,
            "citations": [],
            "used_browser": used_browser,
            "source_count": 0,
            "status": "complete",
        }

    # Format citation footer
    footer_lines = ["\n\n---\n🌐 **External References:**"]
    for c in citation_entries:
        footer_lines.append(f"  [{c['index']}] [{c['label']}]({c['url']})")

    citation_footer = "\n".join(footer_lines)

    return {
        "agent": "citation",
        "answer": answer + citation_footer,
        "raw_answer": answer,
        "citations": citation_entries,
        "used_browser": used_browser,
        "source_count": len(citation_entries),
        "status": "complete",
    }
