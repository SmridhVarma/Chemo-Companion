import os
import sys
import uuid
from datetime import datetime, timedelta
import random

# Add current dir to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database.supabase_client import db

def backfill_data(patient_id: str, days: int = 14):
    print(f"Backfilling {days} days of data for patient {patient_id}...")
    
    # End date is today (March 18th)
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)
    
    readings = []
    
    for i in range(days + 1):
        current_date = start_date + timedelta(days=i)
        date_str = current_date.strftime("%Y-%m-%d")
        
        # Base values with some variance
        hrv_rmssd = 40 + random.uniform(-5, 15)
        mean_hr = 70 + random.uniform(-5, 10)
        steps = 6000 + random.randint(-2000, 4000)
        stress = 20 + random.uniform(-10, 30)
        
        # Add some "chemo-like" decay for a few days to make it interesting
        if 4 <= i <= 7:
            hrv_rmssd *= 0.6
            steps *= 0.3
            stress += 20
        
        # We'll put all metrics in ONE 'hrv' record per day since the table has columns for all of them
        # RMSSD, MEAN_HR, STEPS, STRESS_SCORE
        readings.append({
            "patient_id": patient_id,
            "reading_type": "hrv",
            "recorded_at": f"{date_str}T08:00:00Z",
            "rmssd": round(hrv_rmssd, 2),
            "mean_hr": round(mean_hr, 1),
            "steps": int(steps),
            "stress_score": round(stress, 1)
        })

    print(f"Inserting {len(readings)} records...")
    # Clear existing for this window first to avoid duplicates
    db().table('wearable_readings').delete().eq('patient_id', patient_id).execute()
    
    # Insert in batches
    batch_size = 50
    for i in range(0, len(readings), batch_size):
        batch = readings[i:i + batch_size]
        db().table('wearable_readings').insert(batch).execute()
        
    print("Backfill complete!")

if __name__ == "__main__":
    target_patient = "7c5fca7a-e68c-4e86-96e0-cd3bc1fb8974"
    backfill_data(target_patient)
