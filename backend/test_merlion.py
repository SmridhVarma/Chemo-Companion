
import requests
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

API_KEY = os.getenv("MERLION_API_KEY", "dummy_key_for_testing")
BASE_URL = "https://api.cr8lab.com"

def test_merlion():
    print(f"Testing MerLION with API Key: {API_KEY[:4]}...{API_KEY[-4:] if len(API_KEY) > 8 else ''}")
    
    # Try a simple chat-style request (MerLION supports /chat or /complete depending on version)
    try:
        url = f"{BASE_URL}/chat"
        headers = {
            "Content-Type": "application/json",
            "x-api-key": API_KEY
        }
        data = {
            "instruction": "Hello",
            "hyperParameters": {
                "temperature": 0.7,
                "topP": 0.9,
                "maxTokens": 10
            }
        }
        response = requests.post(url, headers=headers, json=data, timeout=10)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_merlion()
