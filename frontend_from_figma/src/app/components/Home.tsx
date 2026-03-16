import { useMemo, useState } from 'react';
import imgDailyCheckIn from "figma:asset/c37608e0639d481199161f86f938cbb87cfa2de8.png";
import { Heart, Droplet, Pill, Calendar, Plus, Bell, Clock, X } from 'lucide-react';
import { Slider } from './ui/slider';
import type { Appointment, CheckInEntry, Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onSubmitCheckIn: (entry: Omit<CheckInEntry, 'id' | 'createdAt'>) => void;
  upcomingAppointment: Appointment | null;
}

const moodLabels = ['Very low', 'Low', 'Steady', 'Good', 'Excellent'];

export function Home({ onNavigate, onSubmitCheckIn, upcomingAppointment }: HomeProps) {
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [mood, setMood] = useState([3]);
  const [fatigue, setFatigue] = useState([4]);
  const [pain, setPain] = useState([2]);
  const [tookMedicine, setTookMedicine] = useState<boolean | null>(null);
  const [journal, setJournal] = useState('');

  const reminderMessage = useMemo(() => {
    if (!upcomingAppointment) {
      return 'No upcoming appointments yet. Add one in Care Schedule or My Profile.';
    }

    return `${upcomingAppointment.type} with ${upcomingAppointment.doctor || 'your care team'} at ${formatTime(upcomingAppointment.time)} on ${formatDate(upcomingAppointment.date)}${upcomingAppointment.location ? `, ${upcomingAppointment.location}` : ''}.`;
  }, [upcomingAppointment]);

  const handleSubmit = () => {
    onSubmitCheckIn({
      mood: mood[0],
      fatigue: fatigue[0],
      pain: pain[0],
      tookMedicine,
      journal: journal.trim(),
      appointmentReminder: upcomingAppointment ? reminderMessage : null,
    });

    setIsCheckInOpen(false);
    setMood([3]);
    setFatigue([4]);
    setPain([2]);
    setTookMedicine(null);
    setJournal('');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-purple-100/20 to-blue-100/20" />
          <div className="relative">
            <h2 className="text-3xl font-serif text-gray-800 mb-2">
              Welcome back,
            </h2>
            <h3 className="text-2xl font-serif text-[#6366F1] mb-3">
              how are you feeling today?
            </h3>
            <p className="text-gray-600">Let's check in on your journey together.</p>
          </div>
        </div>
      </header>

      <div className="mb-8">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-6">
              Daily Check-in
            </h3>

            <div className="flex justify-center mb-6">
              <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/60 p-4">
                <img
                  src={imgDailyCheckIn}
                  alt="Daily check-in"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
              Logging your symptoms helps your care team tailor your treatment and support you better.
            </p>

            <button
              onClick={() => setIsCheckInOpen(true)}
              className="w-full backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white py-4 px-8 rounded-[2rem] shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <Heart className="w-5 h-5" fill="white" />
              <span className="text-lg font-semibold">Start Check-in</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-serif text-gray-800">Recovery Garden</h3>
              <span className="backdrop-blur-md bg-indigo-50/80 px-4 py-1.5 rounded-full text-sm text-indigo-600 font-bold border border-indigo-200/50 shadow">
                Week 4 of 8
              </span>
            </div>

            <div className="flex gap-6 items-center">
              <div className="relative w-20 h-20 flex-shrink-0">
                <svg className="w-20 h-20 -rotate-90">
                  <circle cx="40" cy="40" r="34" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="6" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#6366F1"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34 * 0.5} ${2 * Math.PI * 34}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800">50%</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Halfway there!
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You've completed 4 cycles.<br />
                  Your garden is blooming<br />
                  beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif text-gray-800">Appointment Reminder</h3>
              <Bell className="w-5 h-5 text-purple-600" />
            </div>

            <div className="space-y-3">
              {upcomingAppointment ? (
                <ScheduleItem
                  icon={Calendar}
                  time={formatTime(upcomingAppointment.time)}
                  title={upcomingAppointment.type}
                  subtitle={`${formatDate(upcomingAppointment.date)}${upcomingAppointment.location ? ` • ${upcomingAppointment.location}` : ''}`}
                  color="indigo"
                />
              ) : (
                <div className="backdrop-blur-md bg-white/60 rounded-2xl p-5 border border-white/60 shadow-lg text-gray-600">
                  Add an appointment to start getting daily reminders here.
                </div>
              )}

              <button
                onClick={() => onNavigate('schedule')}
                className="w-full text-sm font-semibold text-purple-700 backdrop-blur-md bg-purple-50/80 border border-purple-200/60 rounded-2xl py-3 hover:bg-purple-100/80 transition-all"
              >
                Manage appointments
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickActionCard icon={Calendar} title="Book Appointment" description="Schedule your next visit" color="purple" onClick={() => onNavigate('schedule')} />
        <QuickActionCard icon={Heart} title="Log Symptoms" description="Track how you're feeling" color="indigo" onClick={() => setIsCheckInOpen(true)} />
        <QuickActionCard icon={Plus} title="My Journal" description="Review your latest entries" color="blue" onClick={() => onNavigate('journal')} />
      </div>

      {isCheckInOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm p-4 flex items-center justify-center">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/90 rounded-[2rem] border border-white/70 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
            <div className="relative p-8">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-serif text-gray-800">Daily Check-in</h2>
                  <p className="text-gray-600 mt-2">
                    Share today&apos;s symptoms, medication status, and anything you want your care team to know.
                  </p>
                </div>
                <button
                  onClick={() => setIsCheckInOpen(false)}
                  className="backdrop-blur-md bg-white/80 p-3 rounded-xl shadow border border-white/60 hover:bg-white"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                <SliderField
                  label="Patient mood"
                  value={mood}
                  onValueChange={setMood}
                  description={moodLabels[mood[0] - 1]}
                  accent="indigo"
                />
                <SliderField
                  label="Fatigue level"
                  value={fatigue}
                  onValueChange={setFatigue}
                  description={fatigue[0] <= 2 ? 'Low fatigue' : fatigue[0] === 3 ? 'Manageable' : fatigue[0] === 4 ? 'High fatigue' : 'Severe fatigue'}
                  accent="blue"
                />
                <SliderField
                  label="Pain level"
                  value={pain}
                  onValueChange={setPain}
                  description={pain[0] <= 2 ? 'Mild pain' : pain[0] === 3 ? 'Moderate pain' : pain[0] === 4 ? 'High pain' : 'Severe pain'}
                  accent="purple"
                />

                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-5 border border-white/60 shadow-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-3">Did you already take your medicine today?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <MedicineButton selected={tookMedicine === true} label="Yes, already taken" onClick={() => setTookMedicine(true)} />
                    <MedicineButton selected={tookMedicine === false} label="Not yet today" onClick={() => setTookMedicine(false)} />
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-5 border border-white/60 shadow-lg">
                  <label className="text-sm font-semibold text-gray-800 block mb-3">Today&apos;s journal</label>
                  <textarea
                    value={journal}
                    onChange={(event) => setJournal(event.target.value)}
                    placeholder="How are you feeling, any concerns, or anything you want to remember for later?"
                    rows={5}
                    className="w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 outline-none focus:border-indigo-300 text-gray-700 resize-none"
                  />
                </div>

                <div className="backdrop-blur-md bg-gradient-to-r from-purple-50/90 to-indigo-50/90 rounded-2xl p-5 border border-purple-100/80 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <p className="font-semibold text-gray-800">Appointment Reminder</p>
                  </div>
                  <p className="text-sm text-gray-600">{reminderMessage}</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setIsCheckInOpen(false)}
                  className="flex-1 backdrop-blur-md bg-white/80 text-gray-700 py-3 rounded-2xl border border-white/70 shadow-lg hover:bg-white transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white py-3 rounded-2xl border border-white/30 shadow-xl hover:scale-[1.01] transition-all"
                >
                  Save check-in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

function formatTime(time: string) {
  if (!time) return 'Time TBD';
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(`2026-03-14T${time}`));
}

interface SliderFieldProps {
  label: string;
  value: number[];
  onValueChange: (value: number[]) => void;
  description: string;
  accent: 'indigo' | 'blue' | 'purple';
}

function SliderField({ label, value, onValueChange, description, accent }: SliderFieldProps) {
  const accentClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
  }[accent];

  return (
    <div className="backdrop-blur-md bg-white/70 rounded-2xl p-5 border border-white/60 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm font-semibold text-gray-800">{label}</label>
        <span className={`text-sm font-bold ${accentClasses}`}>{value[0]}/5</span>
      </div>
      <Slider value={value} onValueChange={onValueChange} min={1} max={5} step={1} className="mb-3" />
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

function MedicineButton({ selected, label, onClick }: { selected: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${
        selected
          ? 'bg-indigo-100/90 border-indigo-300 text-indigo-700 shadow-lg'
          : 'bg-white/70 border-white/70 text-gray-600 hover:bg-white'
      }`}
    >
      {label}
    </button>
  );
}

interface ScheduleItemProps {
  icon: React.ElementType;
  time: string;
  title: string;
  subtitle?: string;
  color: 'indigo' | 'blue';
}

function ScheduleItem({ icon: Icon, time, title, subtitle, color }: ScheduleItemProps) {
  const colorClasses = color === 'indigo'
    ? 'bg-indigo-50/70 border-indigo-200/50 text-indigo-600'
    : 'bg-blue-50/70 border-blue-200/50 text-blue-600';

  return (
    <div className={`backdrop-blur-md ${colorClasses} rounded-2xl p-4 border transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className={`backdrop-blur-md ${color === 'indigo' ? 'bg-indigo-100/80' : 'bg-blue-100/80'} p-3 rounded-xl shadow`}>
          <Icon className={`w-5 h-5 ${color === 'indigo' ? 'text-indigo-600' : 'text-blue-600'}`} />
        </div>
        <div className="flex-1">
          <p className={`text-xs font-bold uppercase tracking-wide ${color === 'indigo' ? 'text-indigo-600' : 'text-blue-600'} opacity-80`}>
            {time}
          </p>
          <p className="text-gray-800 font-semibold mt-0.5">{title}</p>
          {subtitle && <p className="text-sm text-gray-600 mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

interface QuickActionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'purple' | 'indigo' | 'blue';
  onClick: () => void;
}

function QuickActionCard({ icon: Icon, title, description, color, onClick }: QuickActionCardProps) {
  const colorClasses = {
    purple: 'from-purple-50/80 to-purple-100/50 border-purple-200/50 hover:shadow-purple-200/50',
    indigo: 'from-indigo-50/80 to-indigo-100/50 border-indigo-200/50 hover:shadow-indigo-200/50',
    blue: 'from-blue-50/80 to-blue-100/50 border-blue-200/50 hover:shadow-blue-200/50',
  }[color];

  const iconColor = {
    purple: 'text-purple-600',
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
  }[color];

  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-xl bg-gradient-to-br ${colorClasses} rounded-2xl p-5 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-left w-full`}
    >
      <div className="flex items-start gap-4">
        <div className="backdrop-blur-md bg-white/60 p-3 rounded-xl shadow border border-white/50">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}
