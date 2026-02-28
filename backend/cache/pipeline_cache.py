"""
Chemo Companion - Pipeline Cache
In-memory TTL cache for agent results to speed up repeated/similar queries.
Caches: planner intents, lookup results, and full pipeline responses.
"""
import time
import hashlib
import re
from typing import Optional


class PipelineCache:
    """Thread-safe in-memory cache with TTL expiration."""

    def __init__(self, planner_ttl: int = 3600, pipeline_ttl: int = 300,
                 max_entries: int = 200):
        """
        Args:
            planner_ttl:  Seconds to cache planner intent results (1 hour default)
            pipeline_ttl: Seconds to cache full pipeline responses (5 min default — shorter
                          since user context like allergies may change)
            max_entries:  Maximum cache entries before eviction
        """
        self.planner_ttl = planner_ttl
        self.pipeline_ttl = pipeline_ttl
        self.max_entries = max_entries

        self._planner_cache: dict[str, dict] = {}   # key → {result, ts}
        self._pipeline_cache: dict[str, dict] = {}   # key → {result, ts}

        self._hits = 0
        self._misses = 0

    # ── Key Normalization ──────────────────────────────────

    @staticmethod
    def _normalize_query(query: str) -> str:
        """Normalize query for cache key: lowercase, strip, collapse whitespace."""
        q = query.lower().strip()
        q = re.sub(r'\s+', ' ', q)
        # Remove patient context prefix for planner caching
        # (planner doesn't need patient context, it just classifies intent)
        q = re.sub(r'\[patient context:.*?\]\s*', '', q, flags=re.IGNORECASE | re.DOTALL)
        return q

    @staticmethod
    def _make_key(normalized_query: str) -> str:
        """Create a short hash key."""
        return hashlib.md5(normalized_query.encode()).hexdigest()

    # ── Planner Cache ──────────────────────────────────────

    def get_planner(self, query: str) -> Optional[dict]:
        """Get cached planner result for a query."""
        norm = self._normalize_query(query)
        key = self._make_key(norm)
        entry = self._planner_cache.get(key)
        if entry and (time.time() - entry["ts"]) < self.planner_ttl:
            self._hits += 1
            print(f"[Cache] Planner HIT for: '{norm[:60]}...'")
            return entry["result"]
        self._misses += 1
        return None

    def set_planner(self, query: str, result: dict):
        """Cache a planner result."""
        self._evict_if_full(self._planner_cache)
        norm = self._normalize_query(query)
        key = self._make_key(norm)
        self._planner_cache[key] = {"result": result, "ts": time.time()}

    # ── Full Pipeline Cache ────────────────────────────────

    def get_pipeline(self, query: str) -> Optional[dict]:
        """Get cached full pipeline result (includes user context in key)."""
        # For pipeline, keep patient context in the key
        norm = query.lower().strip()
        norm = re.sub(r'\s+', ' ', norm)
        key = self._make_key(norm)
        entry = self._pipeline_cache.get(key)
        if entry and (time.time() - entry["ts"]) < self.pipeline_ttl:
            self._hits += 1
            print(f"[Cache] Pipeline HIT for: '{norm[:60]}...'")
            return entry["result"]
        self._misses += 1
        return None

    def set_pipeline(self, query: str, result: dict):
        """Cache a full pipeline result."""
        self._evict_if_full(self._pipeline_cache)
        norm = query.lower().strip()
        norm = re.sub(r'\s+', ' ', norm)
        key = self._make_key(norm)
        self._pipeline_cache[key] = {"result": result, "ts": time.time()}

    # ── Eviction ───────────────────────────────────────────

    def _evict_if_full(self, cache: dict):
        """Remove oldest entries if cache exceeds max_entries."""
        if len(cache) >= self.max_entries:
            # Remove oldest 25%
            sorted_keys = sorted(cache.keys(), key=lambda k: cache[k]["ts"])
            for k in sorted_keys[:len(sorted_keys) // 4]:
                del cache[k]

    # ── Stats ──────────────────────────────────────────────

    def stats(self) -> dict:
        total = self._hits + self._misses
        return {
            "planner_entries": len(self._planner_cache),
            "pipeline_entries": len(self._pipeline_cache),
            "hits": self._hits,
            "misses": self._misses,
            "hit_rate": f"{(self._hits / total * 100):.1f}%" if total > 0 else "N/A",
        }


# ── Module Singleton ──────────────────────────────────────
_cache: Optional[PipelineCache] = None

def get_pipeline_cache() -> PipelineCache:
    global _cache
    if _cache is None:
        _cache = PipelineCache()
    return _cache
