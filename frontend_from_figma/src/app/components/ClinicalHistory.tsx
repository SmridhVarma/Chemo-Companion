import { TrendingDown, Activity, Droplet, CheckCircle, ArrowLeft, FileText, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import imgDoctor from "figma:asset/57f83801297436fb573a8a2b699bd3c446628dfb.png";

const heartRateData = [
  { day: 'Mon', rate: 68 },
  { day: 'Tue', rate: 72 },
  { day: 'Wed', rate: 70 },
  { day: 'Thu', rate: 75 },
  { day: 'Fri', rate: 72 },
  { day: 'Sat', rate: 69 },
  { day: 'Sun', rate: 71 },
];

const painLevelData = [
  { day: 'Mon', level: 3 },
  { day: 'Tue', level: 2 },
  { day: 'Wed', level: 1 },
  { day: 'Thu', level: 2 },
  { day: 'Fri', level: 1 },
  { day: 'Sat', level: 3 },
  { day: 'Sun', level: 2 },
];

export function ClinicalHistory() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-serif text-gray-800">Patient Health Reports</h1>
          <p className="text-sm text-gray-600 mt-1">Your health journey at a glance</p>
        </div>
      </div>

      {/* Weekly Wellness Report */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/70 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/15 via-purple-200/15 to-blue-200/15 rounded-full blur-3xl -translate-y-1/3" />
        
        <div className="relative">
          {/* Report Header with Image */}
          <div className="text-center mb-8">
            <div className="w-64 h-64 mx-auto mb-6 rounded-3xl overflow-hidden bg-white/60 shadow-xl border border-white/60 p-4">
              <img 
                src={imgDoctor} 
                alt="Health Report" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h2 className="text-2xl font-serif text-gray-800 mb-3">
              Weekly Wellness Report
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Here is a summary of your health journey over the last 7 days. Your vitals are looking great!
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="backdrop-blur-md bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-200/60 shadow">
                <span className="text-sm font-semibold text-indigo-600">📅 Oct 14 - Oct 20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Vital Trends - Heart Rate */}
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
                  ❤️ Favorite
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
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#6366F1"
                      strokeWidth={3}
                      dot={{ fill: '#6366F1', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Levels */}
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
                <span className="text-4xl font-bold text-emerald-600">Low</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Avg 2/10</p>

              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={painLevelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                    <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Bar dataKey="level" fill="#10B981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Symptom Log */}
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
            <SymptomItem
              icon="🤢"
              name="Nausea"
              severity="Moderate"
              time="Reported 4 hours ago"
              color="orange"
            />
            <SymptomItem
              icon="😴"
              name="Fatigue"
              severity="Mild"
              time="Reported 5 hours ago"
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Medication Adherence */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/70 rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl translate-y-1/4" />
        
        <div className="relative">
          <h3 className="text-xl font-serif text-gray-800 mb-6">Medication Adherence</h3>
          
          <div className="flex items-center gap-8 mb-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-32 h-32 -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(139, 92, 246, 0.1)"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#8B5CF6"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 56 * 0.94} ${2 * Math.PI * 56}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">94%</div>
                  <div className="text-xs text-purple-600 font-medium">+2%</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Great job! You've been very consistent this week.
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
          
          <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
            🔒 Securely encrypted & HIPAA compliant
          </p>
        </div>
      </div>
    </div>
  );
}

interface SymptomItemProps {
  icon: string;
  name: string;
  severity: string;
  time: string;
  color: string;
}

function SymptomItem({ icon, name, severity, time, color }: SymptomItemProps) {
  const colorClasses = {
    orange: 'bg-orange-50/70 border-orange-200/60 text-orange-600',
    purple: 'bg-purple-50/70 border-purple-200/60 text-purple-600'
  }[color];

  return (
    <div className={`backdrop-blur-md ${colorClasses} rounded-2xl p-4 border transition-all hover:shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
        <span className={`backdrop-blur-md ${color === 'orange' ? 'bg-orange-100/80' : 'bg-purple-100/80'} px-3 py-1 rounded-full text-sm font-bold ${color === 'orange' ? 'text-orange-600' : 'text-purple-600'}`}>
          {severity}
        </span>
      </div>
    </div>
  );
}
