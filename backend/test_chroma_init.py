import os
os.environ["CHROMA_SERVER_NOFILE"] = "0"
import chromadb

try:
    print("Attempting to initialize chromadb PersistentClient with environment patch...")
    client = chromadb.PersistentClient(
        path="./test_chroma"
    )
    print("Success!")
except Exception as e:
    print(f"Error: {e}")
