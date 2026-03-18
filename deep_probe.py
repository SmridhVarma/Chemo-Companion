
import sys
import os
from pathlib import Path

# Add backend to path
backend_path = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_path))

from database import supabase_client as supa

print("Brute forcing ALL potential columns in 'reports'...")
try:
    # We will try to SELECT * and if it's empty, we will try to SELECT 'column_name' for a list of common names.
    # The previous probe worked for some. Let's try more.
    potential = [
        'id', 'patient_id', 'generated_at', 'file_path', 'assessment', 'recommendations', 
        'wearable_summary', 'call_doctor', 'status', 'created_at', 'updated_at', 'name',
        'type', 'metadata', 'report_data', 'summary', 'insights', 'analysis', 'priority',
        'file_url', 'url', 'pdf_url', 'doctor_id', 'provider_id', 'clinic_id'
    ]
    
    found = []
    for p in potential:
        try:
            supa.db().table('reports').select(p).limit(1).execute()
            found.append(p)
        except:
            pass
            
    print(f"DEEP PROBE RESULTS: {found}")
except Exception as e:
    print(f"Deep Probe Failed: {e}")
