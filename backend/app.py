"""
Chemo Companion - FastAPI Backend Server  
Main API server orchestrating the multi-agent pipeline.
"""
import json
import asyncio
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import GRAPH_DIR

app = FastAPI(
    title="Chemo Companion API",
    description="RAG-powered oncology knowledge assistant",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Request/Response Models ────────────────────────────

class ChatRequest(BaseModel):
    query: str
    chat_history: Optional[list] = None

class ChatResponse(BaseModel):
    answer: str
    raw_answer: Optional[str] = None
    citations: list = []
    used_browser: bool = False
    confidence: float = 0.0
    agent_trace: list = []
    suggestions: list = []

class GraphQueryRequest(BaseModel):
    entity: str
    depth: int = 2


# ── Agent Pipeline ─────────────────────────────────────

def run_agent_pipeline(query: str, chat_history: Optional[list] = None) -> dict:
    """
    Execute the full multi-agent pipeline:
    Planner → Lookup → Relevance → [Browser] → Writer → Citation
    With caching at planner and full-pipeline levels.
    """
    from agents.planner import analyze_intent
    from agents.lookup import lookup
    from agents.relevance import judge_relevance
    from agents.browser_agent import search_verified_domains
    from agents.writer import synthesize_answer
    from agents.citation import enforce_citations
    from cache.faq_cache import get_faq_cache
    from cache.pipeline_cache import get_pipeline_cache

    cache = get_pipeline_cache()

    # ── Full pipeline cache check (instant return for repeated queries) ──
    cached_result = cache.get_pipeline(query)
    if cached_result:
        cached_result["agent_trace"] = [{"agent": "cache", "status": "pipeline_hit"}]
        return cached_result

    trace = []

    # Step 1: Planner — analyze intent (cached for 1 hour)
    intent = cache.get_planner(query)
    if intent:
        trace.append({"agent": "planner", "intent": intent.get("intent"), "urgency": intent.get("urgency"), "cached": True})
    else:
        intent = analyze_intent(query, chat_history)
        cache.set_planner(query, intent)
        trace.append({"agent": "planner", "intent": intent.get("intent"), "urgency": intent.get("urgency")})

    # Step 2: Lookup — query internal GraphRAG
    lookup_result = lookup(query, intent)
    trace.append({
        "agent": "lookup",
        "confidence": lookup_result["confidence"],
        "vector_hits": lookup_result["vector_hits"],
        "graph_hits": lookup_result["graph_hits"],
    })

    # Step 3: Relevance — judge sufficiency
    relevance = judge_relevance(lookup_result, query)
    trace.append({
        "agent": "relevance",
        "decision": relevance["decision"],
        "needs_browser": relevance["needs_browser"],
    })

    # Step 4: Browser Agent (conditional)
    browser_result = None
    if relevance["needs_browser"]:
        browser_result = search_verified_domains(query)
        trace.append({
            "agent": "browser",
            "status": browser_result.get("status"),
            "sources_found": len(browser_result.get("sources", [])),
        })

    # Step 5: Writer — synthesize answer
    writer_result = synthesize_answer(query, lookup_result, browser_result, intent)
    trace.append({"agent": "writer", "status": writer_result.get("status")})

    # Step 6: Citation — enforce and format citations
    final_result = enforce_citations(writer_result)
    trace.append({"agent": "citation", "source_count": final_result.get("source_count")})

    # Get contextual suggestions
    faq_cache = get_faq_cache()
    suggestions = faq_cache.get_suggestions(intent.get("intent"))

    result = {
        "answer": final_result["answer"],
        "raw_answer": final_result.get("raw_answer", ""),
        "citations": final_result.get("citations", []),
        "used_browser": final_result.get("used_browser", False),
        "confidence": lookup_result["confidence"],
        "agent_trace": trace,
        "suggestions": suggestions,
    }

    # Cache the full pipeline result
    cache.set_pipeline(query, result)

    return result


# ── API Endpoints ──────────────────────────────────────

@app.get("/api/health")
def health_check():
    return {"service": "Chemo Companion API", "version": "1.0.0", "status": "running"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    """Submit a query through the full multi-agent pipeline."""
    from safety import check_safety
    
    # 1. Local Safety Guardrail (Zero-latency, Free)
    is_safe, warning = check_safety(request.query)
    
    if not is_safe:
        return ChatResponse(
            answer=warning,
            raw_answer=warning,
            confidence=1.0,
            agent_trace=[{"agent": "guardrail", "status": "blocked", "reason": "safety_policy"}]
        )

    try:
        result = run_agent_pipeline(request.query, request.chat_history)
        
        # Prepend non-blocking warnings
        if warning:
            result["answer"] = f"{warning}\n\n{result['answer']}"
            
        return ChatResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/chat/stream")
async def chat_stream(request: ChatRequest):
    """SSE streaming version showing agent stages."""
    from safety import check_safety

    # 1. Local Safety Guardrail
    is_safe, warning = check_safety(request.query)
    
    if not is_safe:
        async def safety_generator():
            yield f"data: {json.dumps({'stage': 'guardrail', 'message': '⚠️ Safety Check Triggered'})}\n\n"
            await asyncio.sleep(0.1)
            # Yield blocking warning as final answer
            yield f"data: {json.dumps({'stage': 'complete', 'result': {'answer': warning, 'confidence': 1.0}})}\n\n"
        
        return StreamingResponse(
            safety_generator(),
            media_type="text/event-stream",
            headers={"Cache-Control": "no-cache", "Connection": "keep-alive"},
        )

    async def event_generator():
        from agents.planner import analyze_intent
        from agents.lookup import lookup
        from agents.relevance import judge_relevance
        from agents.browser_agent import search_verified_domains
        from agents.writer import synthesize_answer
        from agents.citation import enforce_citations
        from cache.pipeline_cache import get_pipeline_cache

        cache = get_pipeline_cache()

        # ── Full pipeline cache check ──
        cached_result = cache.get_pipeline(request.query)
        if cached_result:
            yield f"data: {json.dumps({'stage': 'complete', 'result': cached_result})}\n\n"
            return

        # Stage 1: Planning (with cache)
        yield f"data: {json.dumps({'stage': 'planner', 'message': '🧠 Analyzing your question...'})}\n\n"
        await asyncio.sleep(0.1)
        intent = cache.get_planner(request.query)
        if not intent:
            intent = analyze_intent(request.query, request.chat_history)
            cache.set_planner(request.query, intent)

        # Stage 2: Lookup
        yield f"data: {json.dumps({'stage': 'lookup', 'message': '📚 Searching knowledge base...'})}\n\n"
        await asyncio.sleep(0.1)
        lookup_result = lookup(request.query, intent)

        # Stage 3: Relevance check
        yield f"data: {json.dumps({'stage': 'relevance', 'message': '⚖️ Evaluating information quality...'})}\n\n"
        await asyncio.sleep(0.1)
        relevance = judge_relevance(lookup_result, request.query)

        # Stage 4: Browser (conditional)
        browser_result = None
        if relevance["needs_browser"]:
            yield f"data: {json.dumps({'stage': 'browser', 'message': '🌐 Searching verified medical sources...'})}\n\n"
            await asyncio.sleep(0.1)
            browser_result = search_verified_domains(request.query)

        # Stage 5: Writing
        yield f"data: {json.dumps({'stage': 'writer', 'message': '✍️ Composing your answer...'})}\n\n"
        await asyncio.sleep(0.1)
        writer_result = synthesize_answer(request.query, lookup_result, browser_result, intent)

        # Stage 6: Citations
        yield f"data: {json.dumps({'stage': 'citation', 'message': '📋 Adding citations...'})}\n\n"
        await asyncio.sleep(0.1)
        final_result = enforce_citations(writer_result)
        
        # Inject non-blocking warning if needed
        if warning:
            final_result["answer"] = f"{warning}\n\n{final_result['answer']}"

        # Final result
        from cache.faq_cache import get_faq_cache
        faq_cache = get_faq_cache()
        suggestions = faq_cache.get_suggestions(intent.get("intent"))

        result_payload = {
            'answer': final_result['answer'],
            'raw_answer': final_result.get('raw_answer', ''),
            'citations': final_result.get('citations', []),
            'used_browser': final_result.get('used_browser', False),
            'confidence': lookup_result['confidence'],
            'suggestions': suggestions,
        }

        # Cache for future requests
        cache.set_pipeline(request.query, result_payload)

        yield f"data: {json.dumps({'stage': 'complete', 'result': result_payload})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive"},
    )


@app.get("/api/cache/stats")
def cache_stats():
    """Get pipeline cache statistics."""
    from cache.pipeline_cache import get_pipeline_cache
    return get_pipeline_cache().stats()


@app.get("/api/suggestions")
def get_suggestions(intent: Optional[str] = None):
    """Get suggested questions."""
    from cache.faq_cache import get_faq_cache
    cache = get_faq_cache()
    return {"suggestions": cache.get_suggestions(intent)}


@app.get("/api/faqs")
def get_faqs():
    """Get cached FAQ list."""
    from cache.faq_cache import get_faq_cache
    cache = get_faq_cache()
    return {"faqs": cache.get_faqs()}


@app.get("/api/graph")
def get_graph():
    """Get knowledge graph data for visualization."""
    graph_file = GRAPH_DIR / "knowledge_graph.json"
    if not graph_file.exists():
        return {"nodes": [], "links": [], "message": "Knowledge graph not yet built."}
    with open(graph_file, "r", encoding="utf-8") as f:
        return json.load(f)


@app.post("/api/graph/query")
def query_graph_endpoint(request: GraphQueryRequest):
    """Query specific graph relationships."""
    from knowledge.graph_builder import load_graph, query_graph
    try:
        G = load_graph()
        result = query_graph(G, request.entity, request.depth)
        return result
    except FileNotFoundError:
        return {"entity": request.entity, "found": False, "message": "Graph not built yet."}


# ── MerLION Audio Endpoints ──────────────────────────

from fastapi import File, UploadFile

@app.post("/api/audio/transcribe", response_model=ChatResponse)
async def audio_transcribe(file: UploadFile = File(...)):
    """
    Accept an audio file, transcribe via MerLION, then run the text
    through the existing multi-agent pipeline (Gemini Writer).
    Returns the same ChatResponse as /api/chat.
    """
    from agents.merlion_client import transcribe_audio
    from safety import check_safety

    # Validate file type (strip codec params like "audio/webm;codecs=opus" → "audio/webm")
    allowed_types = {"audio/wav", "audio/mpeg", "audio/flac", "audio/mp4",
                     "audio/webm", "audio/ogg", "audio/x-wav"}
    content_type = file.content_type or "audio/wav"
    base_type = content_type.split(";")[0].strip()
    if base_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported audio format: {content_type}. Supported: wav, mp3, flac, m4a, webm"
        )

    try:
        # Read audio bytes
        audio_bytes = await file.read()
        if len(audio_bytes) == 0:
            raise HTTPException(status_code=400, detail="Empty audio file")

        filename = file.filename or "recording.wav"
        print(f"[Audio] Received {filename} ({len(audio_bytes)} bytes, {content_type})")

        # Step 1: Transcribe via MerLION
        transcribed_text = transcribe_audio(audio_bytes, filename, content_type)

        if not transcribed_text or not transcribed_text.strip():
            return ChatResponse(
                answer="I couldn't understand the audio. Could you please try again or type your question?",
                confidence=0.0,
                agent_trace=[{"agent": "merlion", "status": "empty_transcription"}],
            )

        # Step 2: Safety check on transcribed text
        is_safe, warning = check_safety(transcribed_text)
        if not is_safe:
            return ChatResponse(
                answer=warning,
                raw_answer=warning,
                confidence=1.0,
                agent_trace=[
                    {"agent": "merlion", "status": "transcribed", "text": transcribed_text},
                    {"agent": "guardrail", "status": "blocked"},
                ],
            )

        # Step 3: Run through existing pipeline
        result = run_agent_pipeline(transcribed_text)

        # Prepend non-blocking warnings
        if warning:
            result["answer"] = f"{warning}\n\n{result['answer']}"

        # Add MerLION trace info
        result.setdefault("agent_trace", []).insert(0, {
            "agent": "merlion",
            "status": "transcribed",
            "transcribed_text": transcribed_text,
        })

        return ChatResponse(**result)

    except HTTPException:
        raise
    except Exception as e:
        print(f"[Audio] Error: {e}")
        raise HTTPException(status_code=500, detail=f"Audio processing failed: {str(e)}")


@app.get("/api/sources")
def get_sources():
    """List all indexed source documents."""
    from config import RAG_DATA_DIR
    pdfs = sorted(RAG_DATA_DIR.glob("*.pdf"))
    return {
        "sources": [
            {"name": p.name, "size_kb": round(p.stat().st_size / 1024, 1)}
            for p in pdfs
        ],
        "total": len(pdfs),
    }


# ── Data Ingestion Endpoints (Admin) ──────────────────

@app.post("/api/admin/extract")
def run_extraction():
    """Run PDF extraction pipeline."""
    from extraction.pdf_extractor import extract_all
    chunks = extract_all()
    return {"status": "complete", "chunks": len(chunks)}


@app.post("/api/admin/index")
def run_indexing():
    """Index extracted chunks into ChromaDB."""
    from knowledge.vector_store import VectorStore
    store = VectorStore()
    store.index_chunks()
    return {"status": "complete", "stats": store.get_stats()}


@app.post("/api/admin/build-graph")
def run_graph_build():
    """Build knowledge graph from entities."""
    from knowledge.graph_builder import build_graph, save_graph
    G = build_graph()
    save_graph(G)
    return {
        "status": "complete",
        "nodes": G.number_of_nodes(),
        "edges": G.number_of_edges(),
    }


# ── Static File Serving (React Frontend) ─────────────

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend_from_figma" / "dist"

# Serve static assets (CSS, JS bundles in assets/)
app.mount("/assets", StaticFiles(directory=str(FRONTEND_DIR / "assets")), name="assets")

@app.get("/app")
def serve_frontend():
    """Serve the React frontend."""
    return FileResponse(str(FRONTEND_DIR / "index.html"))

# Redirect root to app
@app.get("/", include_in_schema=False)
def root_redirect():
    from fastapi.responses import RedirectResponse
    return RedirectResponse(url="/app")

# Catch-all for React Router (if needed in the future)
@app.get("/app/{path:path}", include_in_schema=False)
def serve_spa(path: str):
    return FileResponse(str(FRONTEND_DIR / "index.html"))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
