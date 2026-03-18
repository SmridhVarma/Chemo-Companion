"""
Chemo Companion - Report Agent
Orchestrates patient data retrieval and PDF report generation.
Adapts to MerLION for clinical insights.
"""
import os
import json
from datetime import datetime, timedelta
from pathlib import Path

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from database import supabase_client as supa
from agents.merlion_client import generate_text
from reporting.report_generator import generate_patient_report

def run_report_pipeline(patient_id: str) -> dict:
    """
    Full pipeline for report generation:
    1. Fetch holistic data from Supabase
    2. Analyze clinical trends with MerLION
    3. Render professional PDF
    """
    # 1. Gather data
    patient = supa.get_patient(patient_id) or {}
    if patient:
        # Synthesize name for report_generator compatibility
        patient['name'] = f"{patient.get('first_name', '')} {patient.get('last_name', '')}".strip() or "Unknown"
        
    wearable = supa.get_wearable_readings(patient_id, None, 2000) or []
    diagnoses = supa.get_diagnoses(patient_id, 20) or []
    symptoms = supa.get_symptoms(patient_id, 50) or []
    medications = supa.get_medications(patient_id) or []
    labs = supa.get_lab_results(patient_id, 30) or []

    if not patient:
        raise ValueError(f"Patient {patient_id} not found.")

    # 2. Build Vitals Summary (latest + 7rd averages)
    hrv_readings = [r for r in wearable if r.get('reading_type') == 'hrv']
    vitals = {}
    if hrv_readings:
        vitals['HRV RMSSD (latest)'] = f"{hrv_readings[0].get('rmssd', 0):.1f} ms"
        vitals['Heart Rate (latest)'] = f"{hrv_readings[0].get('mean_hr', 0):.0f} bpm"
        
        # Dynamic window: end at latest reading date instead of fixed now()
        latest_reading_date = datetime.fromisoformat(hrv_readings[0]['recorded_at'][:10])
        week_ago = latest_reading_date - timedelta(days=7)
        recent_hrvs = [r for r in hrv_readings if datetime.fromisoformat(r['recorded_at'][:10]) >= week_ago]
        
        if recent_hrvs:
            avg_rmssd = sum(r.get('rmssd', 0) for r in recent_hrvs) / len(recent_hrvs)
            avg_hr = sum(r.get('mean_hr', 0) for r in recent_hrvs) / len(recent_hrvs)
            vitals['HRV (7-day avg)'] = f"{avg_rmssd:.1f} ms"
            vitals['Heart Rate (7-day avg)'] = f"{avg_hr:.0f} bpm"

    # 3. Generate Clinical Insights via MerLION
    # Prepare context for the prompt
    symptom_summary = ", ".join([f"{s['symptom_name']} ({s['severity']})" for s in symptoms[:5]])
    med_summary = ", ".join([m['name'] for m in medications[:5]])
    
    prompt = f"""You are a senior oncology clinical analyst. Review the following patient data and provided a concise, empathetic clinical assessment (approx 150 words).
    
    PATIENT: {patient.get('name')} ({patient.get('cancer_type')})
    VITALS: {json.dumps(vitals)}
    RECENT SYMPTOMS: {symptom_summary}
    CURRENT MEDICATIONS: {med_summary}
    
    Focus on recovery trends, potential side effect conflicts, and actionable advice for the physician. Use a professional yet caring tone.
    """
    
    try:
        clinical_summary = generate_text(prompt)
        if not clinical_summary or "unavailable" in clinical_summary.lower():
             raise ValueError("Empty or invalid MerLION response")
    except Exception as e:
        print(f"[Report Agent] MerLION error: {e}. Falling back to Gemini.")
        try:
            import google.generativeai as genai
            from config import GEMINI_API_KEY
            genai.configure(api_key=GEMINI_API_KEY)
            model = genai.GenerativeModel('gemini-1.5-flash')
            response = model.generate_content(prompt)
            clinical_summary = response.text
        except Exception as ge:
            print(f"[Report Agent] Gemini fallback also failed: {ge}")
            clinical_summary = "Clinical summary unavailable. Please review latest vitals and symptom logs manually."

    # 4. Generate PDF
    report_filename = f"report_{patient_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    output_path = generate_patient_report(
        patient, vitals, clinical_summary, 
        filename=report_filename,
        medications=medications,
        labs=labs,
        symptoms=symptoms,
        wearable=wearable
    )

    # 5. Persist to Supabase
    report_data = {
        "patient_id": patient_id,
        "report_type": "Oncology Summary",
        "file_path": str(output_path),
        "generated_at": datetime.now().isoformat(),
        "metadata": {
            "filename": report_filename,
            "clinical_summary": clinical_summary,
            "vitals": vitals
        }
    }
    
    try:
        print(f"[Report Agent] Persisting report for {patient_id} to Supabase...")
        db_result = supa.insert_report(report_data)
        report_id = db_result.data[0]['id'] if db_result.data else None
    except Exception as e:
        print(f"[Report Agent] ERROR: Supabase insert failed: {str(e)}")
        report_id = None

    return {
        "status": "complete",
        "message": f"Report successfully generated and saved for {patient.get('name')}.",
        "report_id": report_id,
        "file_path": str(output_path),
        "filename": report_filename,
        "patient_name": patient.get('name'),
        "clinical_summary": clinical_summary,
        "timestamp": datetime.now().isoformat()
    }
