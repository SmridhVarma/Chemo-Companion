"""
Matcher Logic for Intelligent AAC & Peer Matching (FR 6).
Calculates Recovery Scores and performs KG-based matching.
"""
import networkx as nx
from typing import List, Dict, Any
from knowledge.aac_data import MOCK_PEERS, AAC_ACTIVITIES

# HRV Baselines (RMSSD in ms) from HEALTHGEN_PARAMETERS.md
HRV_BASELINES = {
    (40, 50): 38,
    (50, 60): 32,
    (60, 70): 26,
    (70, 80): 21,
    (80, 91): 17,
}

def calculate_recovery_score(age: int, current_rmssd: float) -> int:
    """
    Calculate Recovery Score (0-100) based on age-banded baseline.
    Formula: (Current RMSSD / Baseline RMSSD) * 100
    """
    baseline = 17  # Default for 80+
    for (lo, hi), val in HRV_BASELINES.items():
        if lo <= age < hi:
            baseline = val
            break
    
    score = (current_rmssd / baseline) * 100
    return int(max(0, min(100, score)))

def find_similar_peers(G: nx.DiGraph, patient_id: str, top_n: int = 3) -> List[Dict[str, Any]]:
    """
    Find similar peers based on shared interests and recovery trajectory.
    Uses the Knowledge Graph to traverse shared nodes.
    """
    if not G.has_node(patient_id):
        # Fallback to simple matching if patient not in graph yet
        return MOCK_PEERS[:top_n]

    scores = {}
    patient_interests = set()
    for _, neighbor in G.out_edges(patient_id):
        if G.nodes[neighbor].get('type') == 'INTEREST':
            patient_interests.add(neighbor)

    for peer in MOCK_PEERS:
        if peer['id'] == patient_id:
            continue
            
        # Interest overlap
        peer_interests = set(peer['interests'])
        overlap = len(patient_interests.intersection(peer_interests))
        
        # Recovery score similarity (closer is better)
        # We assume the user profile has a recovery_score too
        # For simplicity, we just use interest overlap for now in this mock version
        scores[peer['id']] = overlap

    # Sort peers by overlap score
    sorted_peers = sorted(MOCK_PEERS, key=lambda p: scores.get(p['id'], 0), reverse=True)
    return sorted_peers[:top_n]

def recommend_aac_activities(recovery_score: int, interests: List[str]) -> List[Dict[str, Any]]:
    """
    Recommend AAC activities based on recovery score (energy level) and interests.
    Returns empty list if no interests are provided.
    """
    if not interests:
        return []

    recommendations = []
    interest_set = set(interests)
    
    for activity in AAC_ACTIVITIES:
        # Check energy requirement
        if recovery_score < activity['energy_req']:
            continue
            
        # Calculate interest score — must have at least 1 overlap
        overlap = len(interest_set.intersection(set(activity['interests'])))
        if overlap == 0:
            continue
        
        recommendations.append({
            "activity": activity,
            "match_score": overlap,
        })
    
    # Sort by match score and then by name
    recommendations.sort(key=lambda x: (x['match_score'], x['activity']['name']), reverse=True)
    return [r['activity'] for r in recommendations[:5]]
