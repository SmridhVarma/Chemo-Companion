
import sys
import os
from pathlib import Path

# Add backend to path
backend_path = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_path))

from database import supabase_client as supa

print("Inspecting 'reports' table via a specific trick...")
try:
    # If the table is empty, SELECT * returns [].
    # But we can try to order by a column we suspect exists.
    # If it fails, that column doesn't exist.
    candidates = ['id', 'patient_id', 'report_url', 'insights', 'priority', 'created_at', 'assessment', 'recommendations', 'wearable_summary', 'call_doctor', 'generated_at', 'file_path']
    existing_cols = []
    for c in candidates:
        try:
            supa.db().table('reports').select(c).limit(1).execute()
            existing_cols.append(c)
        except:
            pass
    print(f"Detected columns in 'reports': {existing_cols}")
except Exception as e:
    print(f"Inspection Failed: {e}")
