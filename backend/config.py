"""
Chemo Companion - Configuration
Loads environment variables and defines system-wide constants.
"""
import os
from pathlib import Path
from dotenv import load_dotenv

# ── Paths ──────────────────────────────────────────────
ROOT_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = Path(__file__).resolve().parent
RAG_DATA_DIR = ROOT_DIR / "RAG_Data"
DATA_DIR = BACKEND_DIR / "data"
EXTRACTED_TEXT_DIR = DATA_DIR / "extracted_text"
ENTITIES_DIR = DATA_DIR / "entities"
GRAPH_DIR = DATA_DIR / "graph"
CHROMA_DIR = BACKEND_DIR / "chroma_db"
CACHE_DIR = DATA_DIR / "cache"

# Create directories
for d in [EXTRACTED_TEXT_DIR, ENTITIES_DIR, GRAPH_DIR, CHROMA_DIR, CACHE_DIR]:
    d.mkdir(parents=True, exist_ok=True)

# ── Environment ────────────────────────────────────────
load_dotenv(ROOT_DIR / ".env")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")
GOOGLE_CSE_API_KEY = os.getenv("GOOGLE_CSE_API_KEY", "")
GOOGLE_CSE_ENGINE_ID = os.getenv("GOOGLE_CSE_ENGINE_ID", "")

# ── Model Configuration ───────────────────────────────
EMBEDDING_MODEL = "pritamdeka/S-PubMedBert-MS-MARCO"
GEMINI_MODEL = "gemini-2.5-flash"
LANGEXTRACT_MODEL = "gemini-2.5-flash"

# ── RAG Configuration ─────────────────────────────────
CHUNK_SIZE = 500          # tokens per chunk
CHUNK_OVERLAP = 100       # token overlap between chunks
TOP_K_RESULTS = 5         # number of vector search results
RELEVANCE_THRESHOLD = 0.7 # confidence threshold for Relevance Agent

# ── Verified Medical Domains (Browser Agent) ──────────
VERIFIED_DOMAINS = [
    "cancer.org",
    "cancer.gov",
    "nuhs.edu.sg",
    "nccs.com.sg",
    "chemocare.com",
]

# ── ChromaDB Collection ───────────────────────────────
CHROMA_COLLECTION = "chemo_companion_docs"
