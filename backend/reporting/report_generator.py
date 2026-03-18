from fpdf import FPDF
import datetime
import os
from pathlib import Path

# Add project root to path for imports
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import REPORTS_DIR

class PatientReportPDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'Weekly Patient History Report', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

    def add_patient_details(self, patient_data):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, f"Patient: {patient_data.get('name', 'Unknown')}", 0, 1)
        self.set_font('Arial', '', 10)
        self.cell(0, 6, f"ID: {patient_data.get('id', 'N/A')}", 0, 1)
        self.cell(0, 6, f"Age: {patient_data.get('age', 'N/A')}", 0, 1)
        self.cell(0, 6, f"Cancer Type: {patient_data.get('cancer_type', 'N/A')}", 0, 1)
        self.cell(0, 6, f"Report Date: {datetime.date.today()}", 0, 1)
        self.ln(5)

    def add_section(self, title, content):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255)
        self.cell(0, 6, title, 0, 1, 'L', 1)
        self.ln(2)
        
        # Markdown Parsing (Basic: Bold ** and Bullets -)
        self.set_font('Arial', '', 10)
        lines = content.split('\n')
        for line in lines:
            line = line.strip()
            if not line:
                self.ln(2)
                continue
            
            # Bullet points
            is_bullet = False
            if line.startswith('- ') or line.startswith('• '):
                is_bullet = True
                line = line[2:]
                current_x = self.get_x()
                self.set_x(current_x + 5)
                self.cell(5, 5, chr(149), 0, 0)
            
            # Bold parsing (**text**)
            parts = line.split('**')
            for i, part in enumerate(parts):
                if i % 2 == 1:
                    self.set_font('Arial', 'B', 10)
                    self.write(5, part)
                else:
                    self.set_font('Arial', '', 10)
                    self.write(5, part)
            
            self.ln(5)
            if is_bullet:
                self.set_x(self.l_margin)
        self.ln(5)

    def add_vitals_clean(self, vitals):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255)
        self.cell(0, 6, "Key Clinical Metrics", 0, 1, 'L', 1)
        self.ln(2)
        self.set_font('Arial', '', 10)
        
        self.set_font('Courier', '', 10)
        for key, value in vitals.items():
            self.cell(60, 5, f"{key}:", 0, 0)
            self.cell(0, 5, f"{value}", 0, 1)
        self.ln(5)

def sanitize_text(text):
    if text is None: return ""
    return str(text).encode('latin-1', 'replace').decode('latin-1')

def generate_patient_report(patient_data, vitals, clinical_summary, filename="patient_report.pdf", medications=None, labs=None, symptoms=None, wearable=None):
    # Ensure full output path
    output_path = REPORTS_DIR / filename
    
    pdf = PatientReportPDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    
    # 1. Header Details
    pdf.add_patient_details(patient_data)
    
    # 2. Vitals / Metrics
    pdf.add_vitals_clean(vitals)
    
    # 3. Clinical Summary
    pdf.add_section("Clinical Assessment & Plan", sanitize_text(clinical_summary))
    
    # 4. Current Medications
    if medications:
        pdf.set_font('Arial', 'B', 12)
        pdf.set_fill_color(200, 220, 255)
        pdf.cell(0, 6, "Current Medications", 0, 1, 'L', 1)
        pdf.ln(2)
        pdf.set_font('Arial', 'B', 9)
        pdf.set_fill_color(240, 240, 245)
        pdf.cell(50, 6, 'Medication', 1, 0, 'C', 1)
        pdf.cell(60, 6, 'Indication / Reason', 1, 0, 'C', 1)
        pdf.cell(40, 6, 'Category', 1, 0, 'C', 1)
        pdf.cell(40, 6, 'Start Date', 1, 1, 'C', 1)
        pdf.set_font('Arial', '', 8)
        for med in medications[:10]:
            pdf.cell(50, 6, sanitize_text(med.get('name', ''))[:30], 1, 0)
            pdf.cell(60, 6, sanitize_text(med.get('reason', ''))[:35], 1, 0)
            is_chemo = med.get('is_chemo', False)
            pdf.set_text_color(200, 0, 0) if is_chemo else pdf.set_text_color(0, 100, 0)
            pdf.cell(40, 6, 'Chemotherapy' if is_chemo else 'Supportive', 1, 0, 'C')
            pdf.set_text_color(0, 0, 0)
            pdf.cell(40, 6, sanitize_text(med.get('start_date', ''))[:20], 1, 1, 'C')
        pdf.ln(5)

    # 5. Recent Lab Results
    if labs:
        pdf.set_font('Arial', 'B', 12)
        pdf.set_fill_color(200, 220, 255)
        pdf.cell(0, 6, "Recent Lab Results", 0, 1, 'L', 1)
        pdf.ln(2)
        pdf.set_font('Arial', 'B', 9)
        pdf.set_fill_color(240, 240, 245)
        pdf.cell(60, 6, 'Test Name', 1, 0, 'C', 1)
        pdf.cell(40, 6, 'Result', 1, 0, 'C', 1)
        pdf.cell(50, 6, 'Reference Range', 1, 0, 'C', 1)
        pdf.cell(40, 6, 'Date', 1, 1, 'C', 1)
        pdf.set_font('Arial', '', 8)
        for lab in labs[:10]:
            pdf.cell(60, 6, sanitize_text(lab.get('test_name', ''))[:35], 1, 0)
            val = str(lab.get('value', ''))
            unit = lab.get('unit', '')
            pdf.cell(40, 6, f"{val} {unit}".strip()[:20], 1, 0, 'C')
            pdf.cell(50, 6, sanitize_text(lab.get('reference_range', ''))[:30], 1, 0, 'C')
            obs_date = str(lab.get('observed_at', ''))[:10]
            pdf.cell(40, 6, obs_date, 1, 1, 'C')
        pdf.ln(5)

    # 6. Detailed Symptom Log
    if symptoms:
        pdf.set_font('Arial', 'B', 12)
        pdf.set_fill_color(200, 220, 255)
        pdf.cell(0, 6, "Recent Symptoms Log", 0, 1, 'L', 1)
        pdf.ln(2)
        pdf.set_font('Arial', 'B', 9)
        pdf.set_fill_color(240, 240, 245)
        pdf.cell(40, 6, 'Date', 1, 0, 'C', 1)
        pdf.cell(50, 6, 'Symptom', 1, 0, 'C', 1)
        pdf.cell(30, 6, 'Severity', 1, 0, 'C', 1)
        pdf.cell(70, 6, 'Context / Notes', 1, 1, 'L', 1)
        pdf.set_font('Arial', '', 8)
        for sym in symptoms[:15]:
            d = str(sym.get('logged_at', ''))[:10]
            pdf.cell(40, 6, d, 1, 0, 'C')
            pdf.cell(50, 6, sanitize_text(sym.get('symptom_name', ''))[:30], 1, 0)
            sev = sanitize_text(sym.get('severity', ''))
            if 'severe' in sev.lower(): pdf.set_text_color(200, 0, 0)
            elif 'moderate' in sev.lower(): pdf.set_text_color(200, 100, 0)
            else: pdf.set_text_color(0, 0, 0)
            pdf.cell(30, 6, sev[:15], 1, 0, 'C')
            pdf.set_text_color(0, 0, 0)
            ctx = sanitize_text(sym.get('context', '')) or '-'
            pdf.cell(70, 6, ctx[:40], 1, 1)
        pdf.ln(5)

    # 7. Wearable Biometrics Log & Visualization
    if wearable:
        hrv_logs = [w for w in wearable if w.get('reading_type') == 'hrv']
        
        # Dynamic window: end at latest reading date instead of fixed today()
        if hrv_logs:
            latest_reading = max(hrv_logs, key=lambda x: x['recorded_at'])
            end_date = datetime.datetime.fromisoformat(latest_reading['recorded_at'][:10]).date()
        else:
            end_date = datetime.date.today()

        seven_days_ago = end_date - datetime.timedelta(days=7)
        recent_logs = [w for w in hrv_logs if datetime.datetime.fromisoformat(w['recorded_at'][:10]).date() >= seven_days_ago]
        
        from collections import defaultdict
        daily_groups = defaultdict(list)
        for w in recent_logs:
            d_str = str(w.get('recorded_at', ''))[:10]
            daily_groups[d_str].append(w)
            
        plot_days = [seven_days_ago + datetime.timedelta(days=i) for i in range(8)]
        daily_summaries = []
        
        for d_date in plot_days:
            d_str = d_date.strftime('%Y-%m-%d')
            day_data = daily_groups[d_str]
            if day_data:
                avg_rmssd = sum(w.get('rmssd', 0) for w in day_data) / len(day_data)
                avg_hr = sum(w.get('mean_hr', 0) for w in day_data) / len(day_data)
                step_vals = [w.get('steps') for w in day_data if w.get('steps') is not None]
                avg_steps = sum(step_vals) / len(step_vals) if step_vals else 0
                stress_vals = [w.get('stress_score') for w in day_data if w.get('stress_score') is not None]
                avg_stress = sum(stress_vals) / len(stress_vals) if stress_vals else 0
                
                daily_summaries.append({
                    'date': d_str,
                    'rmssd': avg_rmssd,
                    'hr': avg_hr,
                    'steps': avg_steps,
                    'stress': avg_stress,
                    'count': len(day_data)
                })
            else:
                daily_summaries.append({'date': d_str, 'rmssd': None, 'hr': None, 'steps': 0, 'stress': None, 'count': 0})

        if recent_logs:
            pdf.ln(10)
            pdf.set_font('Arial', 'B', 12)
            pdf.set_fill_color(200, 220, 255)
            date_range_str = f"Biometric Trends (Daily Averages: {seven_days_ago} to {end_date})"
            pdf.cell(0, 6, date_range_str, 0, 1, 'L', 1)
            pdf.ln(5)
            
            try:
                import matplotlib.pyplot as plt
                import tempfile
                import numpy as np
                import matplotlib.dates as mdates
                from datetime import datetime as dt
                
                plot_dates = [dt.strptime(s['date'], '%Y-%m-%d') for s in daily_summaries]
                plot_rmssds = [s['rmssd'] if s['rmssd'] else np.nan for s in daily_summaries]
                plot_hrs = [s['hr'] if s['hr'] else np.nan for s in daily_summaries]
                plot_steps = [s['steps'] for s in daily_summaries]
                plot_stress = [s['stress'] if s['stress'] else np.nan for s in daily_summaries]
                
                fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, figsize=(8, 7.5), sharex=True)
                fig.patch.set_facecolor('#ffffff')
                date_fmt = mdates.DateFormatter('%b %d')
                
                color_hrv = '#0d9ca0'
                ax1.plot(plot_dates, plot_rmssds, color=color_hrv, marker='o', linewidth=2, markersize=4)
                ax1.fill_between(plot_dates, plot_rmssds, color=color_hrv, alpha=0.1)
                ax1.set_ylabel('HRV', color=color_hrv, fontweight='bold', fontsize=8)
                ax1.set_title('7-Day Biometric Recovery Averages', fontsize=10, fontweight='bold')
                
                color_hr = '#f4645f'
                ax2.plot(plot_dates, plot_hrs, color=color_hr, marker='o', linewidth=2, markersize=4)
                ax2.set_ylabel('HR (bpm)', color=color_hr, fontweight='bold', fontsize=8)
                
                color_steps = '#4a90e2'
                ax3.bar(plot_dates, plot_steps, color=color_steps, alpha=0.7, width=0.4)
                ax3.set_ylabel('Steps', color=color_steps, fontweight='bold', fontsize=8)
                
                color_stress = '#e67e22'
                ax4.plot(plot_dates, plot_stress, color=color_stress, marker='s', linewidth=2, markersize=4)
                ax4.set_ylabel('Stress', color=color_stress, fontweight='bold', fontsize=8)
                
                ax4.xaxis.set_major_formatter(date_fmt)
                ax4.xaxis.set_major_locator(mdates.DayLocator())
                plt.setp(ax4.xaxis.get_majorticklabels(), fontsize=8)
                
                for ax in [ax1, ax2, ax3, ax4]:
                    ax.spines['top'].set_visible(False)
                    ax.spines['right'].set_visible(False)
                    ax.grid(True, linestyle='--', alpha=0.2)
                
                plt.subplots_adjust(hspace=0.4)
                fig.tight_layout()
                
                _, img_path = tempfile.mkstemp(suffix='.png')
                plt.savefig(img_path, format='png', dpi=120, bbox_inches='tight')
                plt.close(fig)
                
                pdf.image(img_path, x=15, w=180)
                try: os.remove(img_path)
                except: pass
                pdf.ln(2)
            except Exception as e:
                print(f"Failed to generate visualization: {e}")
            
            pdf.set_font('Arial', 'B', 8)
            pdf.set_fill_color(240, 240, 245)
            pdf.cell(30, 6, 'Date', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'Avg HRV (ms)', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'Avg HR (bpm)', 1, 0, 'C', 1)
            pdf.cell(25, 6, 'Steps', 1, 0, 'C', 1)
            pdf.cell(25, 6, 'Stress', 1, 0, 'C', 1)
            pdf.cell(25, 6, 'Status', 1, 0, 'C', 1)
            pdf.cell(25, 6, 'Readings', 1, 1, 'C', 1)
            
            pdf.set_font('Arial', '', 7)
            for s in reversed(daily_summaries):
                if s['count'] == 0: continue
                pdf.cell(30, 6, s['date'], 1, 0, 'C')
                rmssd = s['rmssd']
                pdf.cell(30, 6, f"{rmssd:.1f}" if rmssd else "-", 1, 0, 'C')
                hr = s['hr']
                pdf.cell(30, 6, f"{hr:.0f}" if hr else "-", 1, 0, 'C')
                pdf.cell(25, 6, f"{int(s['steps'])}", 1, 0, 'C')
                stress = s['stress']
                pdf.cell(25, 6, f"{stress:.1f}" if stress is not None else "-", 1, 0, 'C')
                status = "Stable"
                if stress and stress > 65: status = "Hi Stress"
                if rmssd and rmssd < 25: status = "Low HRV"
                if rmssd and rmssd < 20: status = "Critical"
                pdf.cell(25, 6, status, 1, 0, 'C')
                pdf.cell(25, 6, f"{s['count']}", 1, 1, 'C')
            pdf.ln(5)
            
            pdf.set_font('Arial', 'B', 10)
            pdf.set_fill_color(240, 240, 245)
            pdf.cell(0, 6, "Recent Individual Readings", 0, 1, 'L', 1)
            pdf.ln(2)
            
            pdf.set_font('Arial', 'B', 8)
            pdf.cell(35, 6, 'Recorded At', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'HRV (ms)', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'Heart Rate', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'Steps', 1, 0, 'C', 1)
            pdf.cell(30, 6, 'Stress Score', 1, 0, 'C', 1)
            pdf.cell(35, 6, 'Status', 1, 1, 'C', 1)
            
            pdf.set_font('Arial', '', 7)
            hrv_logs_sorted = sorted(hrv_logs, key=lambda x: x['recorded_at'], reverse=True)
            for w in hrv_logs_sorted[:12]: 
                d = str(w.get('recorded_at', ''))[:16].replace('T', ' ')
                pdf.cell(35, 6, d, 1, 0, 'C')
                rmssd = w.get('rmssd')
                pdf.cell(30, 6, f"{rmssd:.1f}" if rmssd else "-", 1, 0, 'C')
                hr = w.get('mean_hr')
                pdf.cell(30, 6, f"{hr:.0f}" if hr else "-", 1, 0, 'C')
                steps = w.get('steps')
                pdf.cell(30, 6, f"{steps}" if steps is not None else "-", 1, 0, 'C')
                stress = w.get('stress_score')
                pdf.cell(30, 6, f"{stress:.1f}" if stress is not None else "-", 1, 0, 'C')
                status = "Stable"
                if stress and stress > 70: status = "Hi Stress"
                if rmssd and rmssd < 25: status = "Low HRV"
                pdf.cell(35, 6, status, 1, 1, 'C')
            pdf.ln(8)

    pdf.output(str(output_path))
    return str(output_path)
