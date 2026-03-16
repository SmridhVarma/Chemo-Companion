"""
Verification script for FR 6: Intelligent AAC & Peer Matching.
Tests the /api/peers/match and /api/aac/recommend endpoints.
"""
import requests
import json

BASE_URL = "http://127.0.0.1:8000"

def test_peer_matching():
    print("\n--- Testing Peer Matching ---")
    payload = {
        "patient_id": "497c0923-b34e-0004-095a-54b61544403e" # Hilton Prosacco
    }
    try:
        response = requests.post(f"{BASE_URL}/api/peers/match", json=payload)
        response.raise_for_status()
        result = response.json()
        print(f"Status: {result.get('status')}")
        print(f"Found {result.get('count')} peers.")
        for peer in result.get('peers', []):
            print(f"  - {peer['name']} ({peer['cancer_type']}) - Score: {peer['recovery_score']}")
    except Exception as e:
        print(f"Error: {e}")

def test_aac_recommendation():
    print("\n--- Testing AAC Recommendation (High Energy) ---")
    # Young-ish patient with good HRV
    payload = {
        "age": 45,
        "rmssd": 35.0,
        "interests": ["Gardening", "Yoga"]
    }
    try:
        response = requests.post(f"{BASE_URL}/api/aac/recommend", json=payload)
        response.raise_for_status()
        result = response.json()
        print(f"Recovery Score: {result.get('recovery_score')}")
        print(f"Found {result.get('count')} recommendations.")
        for act in result.get('activities', []):
            print(f"  - {act['name']} (Req: {act['energy_req']})")

    except Exception as e:
        print(f"Error: {e}")

    print("\n--- Testing AAC Recommendation (Low Energy) ---")
    # Older patient with low HRV
    payload = {
        "age": 75,
        "rmssd": 10.0,
        "interests": ["Gardening", "Social"]
    }
    try:
        response = requests.post(f"{BASE_URL}/api/aac/recommend", json=payload)
        response.raise_for_status()
        result = response.json()
        print(f"Recovery Score: {result.get('recovery_score')}")
        print(f"Found {result.get('count')} recommendations.")
        for act in result.get('activities', []):
            print(f"  - {act['name']} (Req: {act['energy_req']})")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Note: app.py must be running for this to work.
    # We can also test the functions directly if app.py is hard to run.
    test_peer_matching()
    test_aac_recommendation()
