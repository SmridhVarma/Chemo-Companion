"""
Chemo Companion - Browser Agent
Searches verified medical domains when internal RAG is insufficient.
Only queries allowlisted domains (cancer.org, cancer.gov, etc.)
"""
import json
from typing import Optional

import httpx
from bs4 import BeautifulSoup

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import VERIFIED_DOMAINS, GEMINI_API_KEY, GOOGLE_API_KEY, GEMINI_MODEL


_api_key = GEMINI_API_KEY or GOOGLE_API_KEY


def search_verified_domains(query: str, max_results: int = 5) -> dict:
    """
    Search verified medical domains for information.
    Uses DuckDuckGo with site: operators restricted to our allowlist.
    
    Returns:
        dict with external results and citations
    """
    results = []

    # Strategy 1: DuckDuckGo search with site: restrictions
    try:
        results = _duckduckgo_search(query, max_results)
    except Exception as e:
        print(f"[Browser Agent] DuckDuckGo search failed: {e}")

    # Strategy 2: Direct scraping of key pages if search yields nothing
    if not results:
        try:
            results = _direct_search(query)
        except Exception as e:
            print(f"[Browser Agent] Direct search failed: {e}")

    # If still nothing, return graceful degradation
    if not results:
        return {
            "agent": "browser",
            "status": "no_results",
            "context": "",
            "sources": [],
            "message": "Could not retrieve external information. Using internal knowledge only.",
        }

    # Summarize results using Gemini
    context = _summarize_results(query, results)

    return {
        "agent": "browser",
        "status": "complete",
        "context": context,
        "sources": [
            {
                "source": r.get("title", r.get("url", "External")),
                "url": r.get("url", ""),
                "snippet": r.get("snippet", "")[:200],
                "type": "external_web",
            }
            for r in results
        ],
    }


def _duckduckgo_search(query: str, max_results: int = 5) -> list[dict]:
    """Search using DuckDuckGo with site: restrictions."""
    try:
        from duckduckgo_search import DDGS
    except ImportError:
        print("[Browser Agent] duckduckgo-search not installed.")
        return []

    # Build site-restricted query
    site_query = " OR ".join([f"site:{d}" for d in VERIFIED_DOMAINS])
    full_query = f"{query} ({site_query})"

    results = []
    with DDGS() as ddgs:
        for r in ddgs.text(full_query, max_results=max_results):
            # Only keep results from verified domains
            url = r.get("href", "")
            if any(domain in url for domain in VERIFIED_DOMAINS):
                results.append({
                    "title": r.get("title", ""),
                    "url": url,
                    "snippet": r.get("body", ""),
                })

    return results


def _direct_search(query: str) -> list[dict]:
    """
    Attempt direct page scraping from key verified domains.
    Fallback when search APIs are unavailable.
    """
    results = []
    
    # Try to scrape relevant pages from cancer.org and chemocare.com
    urls_to_try = [
        f"https://www.cancer.org/search.html?q={query.replace(' ', '+')}",
        f"https://chemocare.com/search/?q={query.replace(' ', '+')}",
    ]

    for url in urls_to_try:
        try:
            with httpx.Client(timeout=10, follow_redirects=True) as client:
                resp = client.get(url, headers={
                    "User-Agent": "Mozilla/5.0 (compatible; ChemoCompanion/1.0)"
                })
                if resp.status_code == 200:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    # Extract text content
                    text = soup.get_text(separator="\n", strip=True)[:2000]
                    if len(text) > 100:
                        results.append({
                            "title": soup.title.string if soup.title else url,
                            "url": url,
                            "snippet": text[:500],
                        })
        except Exception:
            continue

    return results


def _summarize_results(query: str, results: list[dict]) -> str:
    """Summarize external search results using Gemini."""
    if not _api_key or not results:
        # Return raw snippets if no API key
        return "\n\n".join([
            f"[{r.get('title', 'Source')}] ({r.get('url', '')})\n{r.get('snippet', '')}"
            for r in results
        ])

    try:
        import google.generativeai as genai
        genai.configure(api_key=_api_key)
        model = genai.GenerativeModel(GEMINI_MODEL)

        snippets = "\n\n".join([
            f"Source: {r.get('title', '')} ({r.get('url', '')})\n{r.get('snippet', '')}"
            for r in results
        ])

        prompt = f"""Based on these search results from verified medical sources, 
provide a clear, accurate summary relevant to this question: "{query}"

Search Results:
{snippets}

Provide a concise medical summary. Do NOT add information beyond what's in the sources.
Cite which source each fact comes from."""

        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"[Browser Agent] Summarization error: {e}")
        return "\n\n".join([r.get("snippet", "") for r in results])
