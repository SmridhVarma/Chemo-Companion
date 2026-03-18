import pydantic.v1.fields
_orig_get_type_hints = pydantic.v1.fields.get_type_hints
def patched_get_type_hints(obj, globalns=None, localns=None, include_extras=False):
    try:
        return _orig_get_type_hints(obj, globalns, localns, include_extras)
    except Exception:
        return {}
pydantic.v1.fields.get_type_hints = patched_get_type_hints

import chromadb
try:
    print("Attempting to initialize chromadb PersistentClient with advanced pydantic patch...")
    client = chromadb.PersistentClient(path="./test_chroma")
    print("Success!")
except Exception as e:
    import traceback
    traceback.print_exc()
