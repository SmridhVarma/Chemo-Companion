"""
Standalone Verification for AAC & Peer Matching Logic.
Tests the functions in matcher.py directly.
"""
import networkx as nx
from knowledge.matcher import (
    calculate_recovery_score, find_similar_peers, recommend_aac_activities
)
from knowledge.graph_builder import load_graph
import json

def verify_all():
    print("=== STANDALONE VERIFICATION ===")
    
    # 1. Test Recovery Score Calculation
    print("\n1. Testing Recovery Score Formula:")
    # Age 45 (Baseline 38), RMSSD 35 -> (35/38)*100 = 92
    score_high = calculate_recovery_score(45, 35.0)
    # Age 75 (Baseline 21), RMSSD 10 -> (10/21)*100 = 47
    score_low = calculate_recovery_score(75, 10.0)
    
    print(f"  Age 45, RMSSD 35.0 -> Score: {score_high} (Expected ~92)")
    print(f"  Age 75, RMSSD 10.0 -> Score: {score_low} (Expected ~47)")

    # 2. Test Activity Recommendation
    print("\n2. Testing AAC Recommendations:")
    interests = ["Gardening", "Yoga", "Mindfulness"]
    
    print(f"  High Energy ({score_high}):")
    rec_high = recommend_aac_activities(score_high, interests)
    for r in rec_high:
        print(f"    - {r['name']} (Req: {r['energy_req']})")
        
    print(f"  Low Energy ({score_low}):")
    rec_low = recommend_aac_activities(score_low, interests)
    for r in rec_low:
        print(f"    - {r['name']} (Req: {r['energy_req']})")

    # 3. Test Peer Matching with Knowledge Graph
    print("\n3. Testing Peer Matching (Knowledge Graph Traverse):")
    try:
        G = load_graph()
        print(f"  Graph loaded: {G.number_of_nodes()} nodes.")
        
        # Test matching for a patient ID (even if mock)
        peers = find_similar_peers(G, "any_patient_id")
        print(f"  Matched Peers:")
        for p in peers:
            print(f"    - {p['name']} ({p['cancer_type']}) - Recovery Score: {p['recovery_score']}")
            
    except Exception as e:
        print(f"  Error loading graph: {e}")

if __name__ == "__main__":
    verify_all()
    print("\nVerification Complete.")
