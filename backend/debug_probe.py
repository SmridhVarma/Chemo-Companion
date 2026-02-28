import requests
import json

try:
    response = requests.post(
        "http://localhost:8000/api/chat",
        json={"query": "why is the sky blue", "chat_history": []}
    )
    print(f"Status: {response.status_code}")
    print("Body:", response.text)
except Exception as e:
    print(f"Error: {e}")
