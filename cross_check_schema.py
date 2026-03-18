
import sys
import os
from pathlib import Path

# Add backend to path
backend_path = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_path))

from database import supabase_client as supa

print("Checking schema via 'symptom_logs' table (since it worked for identifying its columns)...")
try:
    # Let's list columns for ALL tables we interact with
    target_tables = ['patients', 'symptom_logs', 'wearable_readings', 'medications', 'lab_results', 'diagnoses', 'reports']
    for t in target_tables:
        try:
            res = supa.db().table(t).select('*').limit(1).execute()
            if res.data:
                print(f"Table '{t}' columns: {list(res.data[0].keys())}")
            else:
                print(f"Table '{t}' is empty.")
        except Exception as e:
            print(f"Table '{t}' error: {e}")
            
except Exception as e:
    print(f"Connection Failed: {e}")
