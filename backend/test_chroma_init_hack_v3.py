import pydantic.v1
import chromadb.config

# Create a fixed version of the Settings class
class FixedSettings(chromadb.config.BaseSettings):
    # Manually define all the fields that ChromaDB expects or just the one that breaks
    # But BaseSettings validation happens at class definition time.
    # So we must fix it before it's used.
    pass

# Actually, the error happens when Settings is imported.
# So I need to patch pydantic's field inference.

import pydantic.v1.fields
original_infer_type = pydantic.v1.fields.ModelField.infer_type

def patched_infer_type(self):
    try:
        return original_infer_type(self)
    except Exception as e:
        if self.name == "chroma_server_nofile":
            return int, None, None
        raise e

pydantic.v1.fields.ModelField.infer_type = patched_infer_type

import chromadb
try:
    print("Attempting to initialize chromadb PersistentClient with ModelField hack...")
    client = chromadb.PersistentClient(path="./test_chroma")
    print("Success!")
except Exception as e:
    import traceback
    traceback.print_exc()
