
import sys
import os
from pathlib import Path

# Add backend to path
backend_path = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_path))

from agents.report_agent import run_report_pipeline

PATIENT_ID = "7c5fca7a-e68c-4e86-96e0-cd3bc1fb8974" # Hilton Prosacco

print(f"Testing Integrated Report Agent for {PATIENT_ID}...")
try:
    result = run_report_pipeline(PATIENT_ID)
    print("Success!")
    print(f"Report Location: {result['file_path']}")
    print(f"Clinical Insight (Meralion): {result.get('clinical_summary', 'Check generated PDF')}")
except Exception as e:
    import traceback
    traceback.print_exc()
    print(f"Failed: {e}")
