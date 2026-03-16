import { TrendingDown, Activity, CheckCircle, ArrowLeft, FileText } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import imgDoctor from "figma:asset/57f83801297436fb573a8a2b699bd3c446628dfb.png";
import type { CheckInEntry } from '../types';

interface ClinicalHistoryProps {
  checkIns: CheckInEntry[];
}

const heartRateData = [
  { day: 'Mon', rate: 68 },
  { day: 'Tue', rate: 72 },
  { day: 'Wed', rate: 70 },
  { day: 'Thu', rate: 75 },
  { day: 'Fri', rate: 72 },
  { day: 'Sat', rate: 69 },
  { day: 'Sun', rate: 71 },
];

const historicalCheckIns: CheckInEntry[] = [
  { id: 'history-1', createdAt: '2026-03-08T08:30:00.000Z', mood: 3, fatigue: 4, pain: 3, tookMedicine: true, journal: 'Slight nausea this morning, but resting helped.', appointmentReminder: null },
  { id: 'history-2', createdAt: '2026-03-09T08:30:00.000Z', mood: 4, fatigue: 3, pain: 2, tookMedicine: true, journal: 'Energy felt steadier after breakfast.', appointmentReminder: null },
  { id: 'history-3', createdAt: '2026-03-10T08:30:00.000Z', mood: 3, fatigue: 4, pain: 2, tookMedicine: false, journal: 'A bit more tired than usual in the afternoon.', appointmentReminder: null },
  { id: 'history-4', createdAt: '2026-03-11T08:30:00.000Z', mood: 2, fatigue: 5, pain: 3, tookMedicine: true, journal: 'Needed more rest today and had some concern about appetite.', appointmentReminder: null },
  { id: 'history-5', createdAt: '2026-03-12T08:30:00.000Z', mood: 4, fatigue: 3, pain: 1, tookMedicine: true, journal: 'Pain eased up and hydration felt better.', appointmentReminder: null },
  { id: 'history-6', createdAt: '2026-03-13T08:30:00.000Z', mood: 4, fatigue: 2, pain: 2, tookMedicine: true, journal: 'Good energy in the morning and fewer symptoms overall.', appointmentReminder: null },
];

export function ClinicalHistory({ checkIns }: ClinicalHistoryProps) {
  const reportCheckIns = mergeCheckIns(checkIns);
  const painLevelData = reportCheckIns.map((entry) => ({
    day: formatDay(entry.createdAt),
    level: entry.pain,
  }));

  const averagePain = reportCheckIns.length
    ? Math.round((reportCheckIns.reduce((sum, entry) => sum + entry.pain, 0) / reportCheckIns.length) * 10) / 10
    : 0;

  const medicationAdherence = reportCheckIns.length
    ? Math.round((reportCheckIns.filter((entry) => entry.tookMedicine === true).length / reportCheckIns.length) * 100)
    : 0;

  const symptomLog = buildSymptomLog(reportCheckIns);
  const summaryLabel = averagePain <= 2 ? 'Low' : averagePain <= 3.5 ? 'Moderate' : 'High';
  const reportWindow = `${formatShortDate(reportCheckIns[0]?.createdAt)} - ${formatShortDate(reportCheckIns[reportCheckIns.length - 1]?.createdAt)}`;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-serif text-gray-800">Patient Health Reports</h1>
          <p className="text-sm text-gray-600 mt-1">Your health journey at a glance</p>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/70 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/15 via-purple-200/15 to-blue-200/15 rounded-full blur-3xl -translate-y-1/3" />

        <div className="relative">
          <div className="text-center mb-8">
            <div className="w-64 h-64 mx-auto mb-6 rounded-3xl overflow-hidden bg-white/60 shadow-xl border border-white/60 p-4">
              <img src={imgDoctor} alt="Health Report" className="w-full h-full object-contain" />
            </div>

            <h2 className="text-2xl font-serif text-gray-800 mb-3">
              Weekly Wellness Report
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              This report combines your latest daily check-ins with starter historical records so your trends are visible right away.
            </p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="backdrop-blur-md bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-200/60 shadow">
                <span className="text-sm font-semibold text-indigo-600">{reportWindow}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-serif text-gray-800">Vital Trends</h3>
                <p className="text-sm text-indigo-600 font-medium mt-1">Live Data</p>
              </div>
              <button className="backdrop-blur-md bg-indigo-50/80 p-3 rounded-xl shadow border border-indigo-200/60">
                <Activity className="w-5 h-5 text-indigo-600" />
              </button>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-indigo-50/50 to-white/40 rounded-2xl p-5 border border-white/60 shadow-lg mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Heart Rate</span>
                <span className="backdrop-blur-md bg-indigo-100/80 px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                  Favorite
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-800">72</span>
                <span className="text-lg text-gray-600">bpm</span>
              </div>

              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(99, 102, 241, 0.1)" />
                    <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <Tooltip contentStyle={tooltipStyles} />
                    <Line type="monotone" dataKey="rate" stroke="#6366F1" strokeWidth={3} dot={{ fill: '#6366F1', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-serif text-gray-800">Pain Levels</h3>
              </div>
              <button className="backdrop-blur-md bg-emerald-50/80 p-3 rounded-xl shadow border border-emerald-200/60">
                <TrendingDown className="w-5 h-5 text-emerald-600" />
              </button>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-emerald-50/50 to-white/40 rounded-2xl p-5 border border-white/60 shadow-lg">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-emerald-600">{summaryLabel}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Avg {averagePain}/5 from daily check-ins</p>

              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={painLevelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                    <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} domain={[0, 5]} />
                    <Tooltip contentStyle={tooltipStyles} />
                    <Bar dataKey="level" fill="#10B981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">Symptom Log</h3>
            <button className="text-sm text-indigo-600 font-medium hover:underline">
              View Full Log
            </button>
          </div>

          <div className="space-y-3">
            {symptomLog.map((item) => (
              <SymptomItem
                key={item.id}
                icon={item.icon}
                name={item.name}
                severity={item.severity}
                time={item.time}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/70 rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl translate-y-1/4" />

        <div className="relative">
          <h3 className="text-xl font-serif text-gray-800 mb-6">Medication Adherence</h3>

          <div className="flex items-center gap-8 mb-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-32 h-32 -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="12" fill="none" />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#8B5CF6"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 56 * (medicationAdherence / 100)} ${2 * Math.PI * 56}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{medicationAdherence}%</div>
                  <div className="text-xs text-purple-600 font-medium">from check-ins</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Medication adherence is now calculated from your daily check-in responses, mixed with starter history until more live entries are collected.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">On track with treatment plan</span>
              </div>
            </div>
          </div>

          <button className="w-full backdrop-blur-md bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-600 hover:to-indigo-600 text-white py-4 px-8 rounded-2xl shadow-xl border border-white/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
            <FileText className="w-5 h-5" />
            <span className="font-semibold">Generate PDF for Doctor</span>
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            Securely encrypted and HIPAA compliant
          </p>
        </div>
      </div>
    </div>
  );
}

const tooltipStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  borderRadius: '12px',
  backdropFilter: 'blur(10px)',
};

function mergeCheckIns(liveCheckIns: CheckInEntry[]) {
  const combined = [...historicalCheckIns, ...liveCheckIns]
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .slice(-7);

  return combined;
}

function buildSymptomLog(entries: CheckInEntry[]) {
  return [...entries]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)
    .flatMap((entry) => {
      const items = [];

      if (entry.fatigue > 0) {
        items.push({
          id: `${entry.id}-fatigue`,
          icon: '😴',
          name: 'Fatigue',
          severity: severityLabel(entry.fatigue),
          time: relativeTime(entry.createdAt),
          color: 'purple' as const,
        });
      }

      const stressLevel = 6 - entry.mood;
      if (stressLevel > 0) {
        items.push({
          id: `${entry.id}-stress`,
          icon: '😟',
          name: 'Stress',
          severity: severityLabel(stressLevel),
          time: relativeTime(entry.createdAt),
          color: 'orange' as const,
        });
      }

      return items;
    })
    .slice(0, 5);
}

function severityLabel(value: number) {
  if (value <= 2) return 'Mild';
  if (value <= 3) return 'Moderate';
  return 'High';
}

function relativeTime(dateString: string) {
  const diffHours = Math.max(1, Math.round((Date.now() - new Date(dateString).getTime()) / (1000 * 60 * 60)));
  return `Reported ${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
}

function formatDay(dateString: string) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(dateString));
}

function formatShortDate(dateString?: string) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(dateString));
}

interface SymptomItemProps {
  icon: string;
  name: string;
  severity: string;
  time: string;
  color: 'orange' | 'purple';
}

function SymptomItem({ icon, name, severity, time, color }: SymptomItemProps) {
  const colorClasses = {
    orange: 'bg-orange-50/70 border-orange-200/60 text-orange-600',
    purple: 'bg-purple-50/70 border-purple-200/60 text-purple-600',
  }[color];

  return (
    <div className={`backdrop-blur-md ${colorClasses} rounded-2xl p-4 border transition-all hover:shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className="text-3xl min-w-[48px] text-center">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
        <span className={`backdrop-blur-md ${color === 'orange' ? 'bg-orange-100/80 text-orange-600' : 'bg-purple-100/80 text-purple-600'} px-3 py-1 rounded-full text-sm font-bold`}>
          {severity}
        </span>
      </div>
    </div>
  );
}
