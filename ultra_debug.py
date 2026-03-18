
import sys
import os
from pathlib import Path

# Add backend to path
backend_path = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_path))

from database import supabase_client as supa

patient_id = "7c5fca7a-e68c-4e86-96e0-cd3bc1fb8974"
report_data = {
    "patient_id": patient_id,
    "assessment": "Debug test",
    "recommendations": "Test",
    "wearable_summary": "{}",
    "call_doctor": "Test",
    "generated_at": "2026-03-17T16:00:00"
}

print(f"DEBUG: Attempting insert into 'reports' with data: {report_data}")
try:
    res = supa.db().table('reports').insert(report_data).execute()
    print(f"DEBUG: Success! Result: {res.data}")
except Exception as e:
    print(f"DEBUG: FAILED! Error: {e}")
    # Try to see if it's the 'id' field causing issues (though it should be auto-gen)
    # Check if 'reports' has a different name?
