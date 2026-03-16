import { useEffect, useMemo, useState } from 'react';
import { Home } from './components/Home';
import { AIAssistant } from './components/AIAssistant';
import { HealingJournal } from './components/HealingJournal';
import { Community } from './components/Community';
import { ClinicalHistory } from './components/ClinicalHistory';
import { CareSchedule } from './components/CareSchedule';
import { UserProfile } from './components/UserProfile';
import { Home as HomeIcon, Calendar, Users, FileText, MessageSquare, Heart, User } from 'lucide-react';
import type { Appointment, CheckInEntry, Page } from './types';

const APPOINTMENTS_STORAGE_KEY = 'chemo_companion_appointments';
const CHECK_INS_STORAGE_KEY = 'chemo_companion_check_ins';

const defaultAppointments: Appointment[] = [
  {
    id: 'seed-blood-test',
    date: '2026-03-14',
    time: '14:00',
    type: 'Blood Test',
    doctor: 'Dr. Smith',
    location: 'Lab Center',
    notes: 'Bring insurance card and hydration log.',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [appointments, setAppointments] = useState<Appointment[]>(defaultAppointments);
  const [checkIns, setCheckIns] = useState<CheckInEntry[]>([]);

  useEffect(() => {
    try {
      const storedAppointments = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
      const storedCheckIns = localStorage.getItem(CHECK_INS_STORAGE_KEY);
      if (storedCheckIns) {
        setCheckIns(JSON.parse(storedCheckIns));
      }
    } catch {
      // Ignore malformed local storage and continue with defaults.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem(CHECK_INS_STORAGE_KEY, JSON.stringify(checkIns));
  }, [checkIns]);

  const upcomingAppointment = useMemo(() => {
    const now = Date.now();

    return [...appointments]
      .filter((appointment) => Boolean(appointment.date))
      .map((appointment) => ({
        appointment,
        timestamp: new Date(`${appointment.date}T${appointment.time || '09:00'}`).getTime(),
      }))
      .filter(({ timestamp }) => !Number.isNaN(timestamp) && timestamp >= now)
      .sort((a, b) => a.timestamp - b.timestamp)[0]?.appointment ?? null;
  }, [appointments]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((current) =>
      [...current, appointment].sort((a, b) =>
        `${a.date}T${a.time || '09:00'}`.localeCompare(`${b.date}T${b.time || '09:00'}`),
      ),
    );
  };

  const updateAppointment = (id: string, field: keyof Appointment, value: string) => {
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id ? { ...appointment, [field]: value } : appointment,
      ),
    );
  };

  const removeAppointment = (id: string) => {
    setAppointments((current) => current.filter((appointment) => appointment.id !== id));
  };

  const addCheckIn = (entry: Omit<CheckInEntry, 'id' | 'createdAt'>) => {
    const newCheckIn: CheckInEntry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...entry,
    };

    setCheckIns((current) => [newCheckIn, ...current]);
    setCurrentPage('journal');
  };

  const addJournalReflection = (mood: number, journal: string) => {
    const newReflection: CheckInEntry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      mood,
      fatigue: 0,
      pain: 0,
      tookMedicine: null,
      journal,
      appointmentReminder: upcomingAppointment
        ? `Upcoming appointment: ${upcomingAppointment.type} at ${formatTime(upcomingAppointment.time)} on ${formatDate(upcomingAppointment.date)}.`
        : null,
    };

    setCheckIns((current) => [newReflection, ...current]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={setCurrentPage}
            onSubmitCheckIn={addCheckIn}
            upcomingAppointment={upcomingAppointment}
          />
        );
      case 'schedule':
        return (
          <CareSchedule
            appointments={appointments}
            upcomingAppointment={upcomingAppointment}
            onAddAppointment={addAppointment}
          />
        );
      case 'journal':
        return (
          <HealingJournal
            checkIns={checkIns}
            onSaveReflection={addJournalReflection}
          />
        );
      case 'community':
        return <Community />;
      case 'history':
        return <ClinicalHistory checkIns={checkIns} />;
      case 'ai':
        return <AIAssistant />;
      case 'profile':
        return (
          <UserProfile
            appointments={appointments}
            onAddAppointment={addAppointment}
            onUpdateAppointment={updateAppointment}
            onRemoveAppointment={removeAppointment}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex">
      <aside className="w-64 min-h-screen backdrop-blur-xl bg-gradient-to-b from-[rgba(224,231,255,0.8)] via-[rgba(237,233,254,0.7)] to-[rgba(219,234,254,0.6)] border-r border-white/40 shadow-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.05)] via-transparent to-[rgba(139,92,246,0.05)] pointer-events-none" />

        <div className="relative p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="backdrop-blur-md bg-white/70 p-3 rounded-2xl shadow-lg border border-white/60">
              <Heart className="w-6 h-6 text-[#6366F1]" fill="#6366F1" />
            </div>
            <h1 className="font-serif text-xl text-[#4338CA] font-bold">
              Chemo Companion
            </h1>
          </div>

          <nav className="space-y-2">
            <NavItem icon={HomeIcon} label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
            <NavItem icon={MessageSquare} label="AI Assistant" active={currentPage === 'ai'} onClick={() => setCurrentPage('ai')} />
            <NavItem icon={Calendar} label="Care Schedule" active={currentPage === 'schedule'} onClick={() => setCurrentPage('schedule')} />
            <NavItem icon={Heart} label="My Journal" active={currentPage === 'journal'} onClick={() => setCurrentPage('journal')} />
            <NavItem icon={Users} label="Community" active={currentPage === 'community'} onClick={() => setCurrentPage('community')} />
            <NavItem icon={FileText} label="Health Reports" active={currentPage === 'history'} onClick={() => setCurrentPage('history')} />
            <NavItem icon={User} label="My Profile" active={currentPage === 'profile'} onClick={() => setCurrentPage('profile')} />
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-auto bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F5F3FF] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />
        <div className="relative">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

function formatTime(time: string) {
  if (!time) return 'time TBD';
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(`2026-03-14T${time}`));
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
        ${active
          ? 'backdrop-blur-md bg-white/80 shadow-lg border border-white/70 text-[#6366F1]'
          : 'hover:backdrop-blur-md hover:bg-white/50 text-gray-600 hover:text-[#6366F1]'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
