"""
Supabase database client wrapper for Chemo Companion.
Provides typed CRUD operations for all tables.
"""
import os
from supabase import create_client, Client

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import SUPABASE_URL, SUPABASE_KEY


def get_client() -> Client:
    """Get a Supabase client instance."""
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in .env")
    return create_client(SUPABASE_URL, SUPABASE_KEY)


# Singleton client
_client = None

def db() -> Client:
    """Get singleton Supabase client."""
    global _client
    if _client is None:
        _client = get_client()
    return _client


# ============================================================================
# PATIENTS
# ============================================================================

def get_patients(limit=100):
    return db().table('patients').select('*').limit(limit).execute().data

def get_patient(patient_id: str):
    result = db().table('patients').select('*').eq('id', patient_id).execute().data
    return result[0] if result else None

def insert_patient(data: dict):
    return db().table('patients').insert(data).execute()

def insert_patients_batch(data: list):
    return db().table('patients').insert(data).execute()


# ============================================================================
# SYMPTOM LOGS
# ============================================================================

def log_symptom(data: dict):
    return db().table('symptom_logs').insert(data).execute()

def log_symptoms_batch(data: list):
    return db().table('symptom_logs').insert(data).execute()

def get_symptoms(patient_id: str, limit=50):
    return (db().table('symptom_logs')
            .select('*')
            .eq('patient_id', patient_id)
            .order('logged_at', desc=True)
            .limit(limit)
            .execute().data)


# ============================================================================
# WEARABLE READINGS
# ============================================================================

def insert_wearable(data: dict):
    return db().table('wearable_readings').insert(data).execute()

def insert_wearables_batch(data: list):
    return db().table('wearable_readings').insert(data).execute()

def get_wearable_readings(patient_id: str, reading_type=None, limit=100):
    q = (db().table('wearable_readings')
         .select('*')
         .eq('patient_id', patient_id)
         .order('recorded_at', desc=True)
         .limit(limit))
    if reading_type:
        q = q.eq('reading_type', reading_type)
    return q.execute().data


# ============================================================================
# MEDICATIONS
# ============================================================================

def get_medications(patient_id: str):
    return (db().table('medications')
            .select('*')
            .eq('patient_id', patient_id)
            .order('start_date', desc=True)
            .execute().data)

def insert_medication(data: dict):
    return db().table('medications').insert(data).execute()

def insert_medications_batch(data: list):
    return db().table('medications').insert(data).execute()


# ============================================================================
# LAB RESULTS
# ============================================================================

def get_lab_results(patient_id: str, limit=50):
    return (db().table('lab_results')
            .select('*')
            .eq('patient_id', patient_id)
            .order('observed_at', desc=True)
            .limit(limit)
            .execute().data)

def insert_lab_result(data: dict):
    return db().table('lab_results').insert(data).execute()

def insert_lab_results_batch(data: list):
    return db().table('lab_results').insert(data).execute()


# ============================================================================
# DIAGNOSES
# ============================================================================

def get_diagnoses(patient_id: str, limit=20):
    return (db().table('diagnoses')
            .select('*')
            .eq('patient_id', patient_id)
            .order('generated_at', desc=True)
            .limit(limit)
            .execute().data)

def insert_diagnosis(data: dict):
    return db().table('diagnoses').insert(data).execute()


# ============================================================================
# REPORTS
# ============================================================================

def get_reports(patient_id: str):
    return (db().table('reports')
            .select('*')
            .eq('patient_id', patient_id)
            .order('generated_at', desc=True)
            .execute().data)

def insert_report(data: dict):
    return db().table('reports').insert(data).execute()
