import { useMemo, useState } from 'react';
import { Smile, Meh, Frown, Image as ImageIcon, Mic, Send, Menu, CalendarClock, Pill, Activity, Battery } from 'lucide-react';
import imgJournalKid from "figma:asset/04f6a920c6d2ac9fc506b74e143b84a83b645680.png";
import type { CheckInEntry } from '../types';

interface HealingJournalProps {
  checkIns: CheckInEntry[];
  onSaveReflection: (mood: number, journal: string) => void;
}

export function HealingJournal({ checkIns, onSaveReflection }: HealingJournalProps) {
  const latestMood = checkIns[0]?.mood ?? 3;
  const [selectedMood, setSelectedMood] = useState(latestMoodToTone(latestMood));
  const [journalEntry, setJournalEntry] = useState('');
  const latestDailyCheckIns = useMemo(() => {
    const grouped = new Map<string, CheckInEntry>();

    checkIns.forEach((entry) => {
      const dayKey = new Date(entry.createdAt).toISOString().slice(0, 10);
      const current = grouped.get(dayKey);

      if (!current || new Date(entry.createdAt).getTime() > new Date(current.createdAt).getTime()) {
        grouped.set(dayKey, entry);
      }
    });

    return [...grouped.values()].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [checkIns]);

  const moodSummary = useMemo(() => {
    const averageMood = checkIns.length
      ? Math.round(checkIns.reduce((sum, entry) => sum + entry.mood, 0) / checkIns.length)
      : latestMood;

    return moodLabel(averageMood);
  }, [checkIns, latestMood]);

  const handleSaveReflection = () => {
    if (!journalEntry.trim()) return;
    onSaveReflection(toneToMoodValue(selectedMood), journalEntry.trim());
    setJournalEntry('');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-serif text-[#6366F1]">My Healing Journal</h1>
        </div>
        <button className="backdrop-blur-md bg-white/70 p-3 rounded-full shadow border border-white/60 hover:bg-white/90 transition-all">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
        </button>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative">
          <div className="w-56 h-56 mx-auto mb-6 rounded-3xl overflow-hidden bg-white/60 shadow-xl border border-white/60 p-4">
            <img src={imgJournalKid} alt="Journal" className="w-full h-full object-contain" />
          </div>

          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Recent mood trend
          </h3>
          <p className="text-center text-xl font-serif text-gray-800 mb-4">{moodSummary}</p>

          <div className="flex justify-center gap-4 mb-2">
            <MoodButton icon={Smile} label="Great" color="green" selected={selectedMood === 'great'} onClick={() => setSelectedMood('great')} />
            <MoodButton icon={Meh} label="Neutral" color="yellow" selected={selectedMood === 'neutral'} onClick={() => setSelectedMood('neutral')} />
            <MoodButton icon={Frown} label="Tired" color="purple" selected={selectedMood === 'tired'} onClick={() => setSelectedMood('tired')} />
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif text-gray-800">Today&apos;s Reflections</h3>
            <span className="text-xs text-gray-500 backdrop-blur-md bg-white/60 px-3 py-1 rounded-full border border-white/50">
              {new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date())}
            </span>
          </div>

          <div className="backdrop-blur-md bg-white/50 rounded-2xl p-5 border border-white/60 shadow-lg mb-4">
            <p className="text-sm text-indigo-600 font-medium mb-3 flex items-center gap-2">
              <span>Notes</span> Dear Diary...
            </p>
            <textarea
              value={journalEntry}
              onChange={(event) => setJournalEntry(event.target.value)}
              placeholder="How are you feeling right now? What's on your mind?"
              className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 resize-none"
              rows={4}
            />

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/40">
              <div className="flex gap-2">
                <button className="backdrop-blur-md bg-white/70 p-2 rounded-lg shadow border border-white/60 hover:bg-white/90 transition-all">
                  <ImageIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="backdrop-blur-md bg-white/70 p-2 rounded-lg shadow border border-white/60 hover:bg-white/90 transition-all">
                  <Mic className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button
                onClick={handleSaveReflection}
                className="backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl shadow-lg border border-white/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <span className="text-sm font-semibold">Save</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">My Journal Entries</h3>
            <span className="text-sm text-indigo-600 font-medium">
              {latestDailyCheckIns.length} entr{latestDailyCheckIns.length === 1 ? 'y' : 'ies'}
            </span>
          </div>

          {latestDailyCheckIns.length === 0 ? (
            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/60 text-gray-600">
              No check-ins yet. Start one from Home and it will appear here.
            </div>
          ) : (
            <div className="space-y-4">
              {latestDailyCheckIns.map((entry) => (
                <JournalEntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">Weekly Wins</h3>
            <span className="text-sm text-indigo-600 font-medium cursor-pointer hover:underline">View All</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <WinCard emoji="Strong" title="Walk Break" description="Gentle walk for 10 mins without feeling tired." color="purple" />
            <WinCard emoji="Hydrated" title="Hydration Goal" description="Drank 10 of 8 water servings feeling very strong." color="indigo" />
          </div>
        </div>
      </div>
    </div>
  );
}

function latestMoodToTone(mood: number): 'great' | 'neutral' | 'tired' {
  if (mood >= 4) return 'great';
  if (mood === 3) return 'neutral';
  return 'tired';
}

function toneToMoodValue(mood: 'great' | 'neutral' | 'tired' | null) {
  if (mood === 'great') return 5;
  if (mood === 'tired') return 2;
  return 3;
}

function moodLabel(mood: number) {
  if (mood >= 5) return 'Excellent';
  if (mood === 4) return 'Good';
  if (mood === 3) return 'Steady';
  if (mood === 2) return 'Low';
  return 'Very low';
}

interface MoodButtonProps {
  icon: React.ElementType;
  label: string;
  color: string;
  selected: boolean;
  onClick: () => void;
}

function MoodButton({ icon: Icon, label, color, selected, onClick }: MoodButtonProps) {
  const colorClasses = {
    green: selected ? 'bg-green-100/80 border-green-300/60 shadow-lg scale-110' : 'bg-white/70 border-white/60',
    yellow: selected ? 'bg-yellow-100/80 border-yellow-300/60 shadow-lg scale-110' : 'bg-white/70 border-white/60',
    purple: selected ? 'bg-purple-100/80 border-purple-300/60 shadow-lg scale-110' : 'bg-white/70 border-white/60',
  }[color];

  const iconColor = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  }[color];

  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-md ${colorClasses} p-4 rounded-2xl border transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2 min-w-[80px]`}
    >
      <Icon className={`w-6 h-6 ${iconColor}`} />
      <span className={`text-xs font-medium ${selected ? iconColor : 'text-gray-600'}`}>
        {label}
      </span>
    </button>
  );
}

function JournalEntryCard({ entry }: { entry: CheckInEntry }) {
  const createdAt = new Date(entry.createdAt);

  return (
    <div className="backdrop-blur-md bg-gradient-to-br from-white/80 to-white/55 rounded-3xl p-5 border border-white/60 shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-800">Daily Check-in</h4>
          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            }).format(createdAt)}
          </p>
        </div>
        <div className="backdrop-blur-md bg-indigo-50/80 border border-indigo-200/60 rounded-full px-3 py-1 text-sm font-semibold text-indigo-700">
          Mood {entry.mood}/5
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <MetricPill icon={Activity} label="Pain" value={`${entry.pain}/5`} color="purple" />
        <MetricPill icon={Battery} label="Fatigue" value={`${entry.fatigue}/5`} color="blue" />
        <MetricPill
          icon={Pill}
          label="Medicine"
          value={entry.tookMedicine === null ? 'Not logged' : entry.tookMedicine ? 'Taken' : 'Not yet'}
          color="indigo"
        />
        <MetricPill icon={CalendarClock} label="Reminder" value={entry.appointmentReminder ? 'Included' : 'None'} color="amber" />
      </div>

      <div className="backdrop-blur-md bg-white/60 rounded-2xl p-4 border border-white/60">
        <p className="text-sm font-semibold text-gray-700 mb-2">Today&apos;s journal</p>
        <p className="text-sm text-gray-600 whitespace-pre-wrap">
          {entry.journal || 'No written reflection added for this entry.'}
        </p>
      </div>

      {entry.appointmentReminder && (
        <div className="mt-3 backdrop-blur-md bg-purple-50/80 rounded-2xl p-4 border border-purple-100/80">
          <p className="text-sm font-semibold text-purple-700 mb-1">Appointment reminder</p>
          <p className="text-sm text-gray-600">{entry.appointmentReminder}</p>
        </div>
      )}
    </div>
  );
}

function MetricPill({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: 'purple' | 'blue' | 'indigo' | 'amber';
}) {
  const palette = {
    purple: 'bg-purple-50/80 border-purple-100/80 text-purple-700',
    blue: 'bg-blue-50/80 border-blue-100/80 text-blue-700',
    indigo: 'bg-indigo-50/80 border-indigo-100/80 text-indigo-700',
    amber: 'bg-amber-50/80 border-amber-100/80 text-amber-700',
  }[color];

  return (
    <div className={`rounded-2xl border ${palette} p-3`}>
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

interface WinCardProps {
  emoji: string;
  title: string;
  description: string;
  color: 'purple' | 'indigo';
}

function WinCard({ emoji, title, description, color }: WinCardProps) {
  const colorClasses = color === 'purple'
    ? 'from-purple-50/80 to-purple-100/60'
    : 'from-indigo-50/80 to-indigo-100/60';

  return (
    <div className={`backdrop-blur-md bg-gradient-to-br ${colorClasses} rounded-2xl p-4 shadow-lg border border-white/60`}>
      <div className="text-lg font-semibold text-gray-700 mb-2">{emoji}</div>
      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
