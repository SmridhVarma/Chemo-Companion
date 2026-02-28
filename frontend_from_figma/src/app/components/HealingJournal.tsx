import { useState } from 'react';
import { Smile, Meh, Frown, Image as ImageIcon, Mic, Send, Menu } from 'lucide-react';
import imgJournalKid from "figma:asset/04f6a920c6d2ac9fc506b74e143b84a83b645680.png";

export function HealingJournal() {
  const [selectedMood, setSelectedMood] = useState<'great' | 'neutral' | 'tired' | null>('neutral');
  const [journalEntry, setJournalEntry] = useState('');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
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

      {/* Current Mood Card */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        
        <div className="relative">
          {/* Mood Image Placeholder */}
          <div className="w-56 h-56 mx-auto mb-6 rounded-3xl overflow-hidden bg-white/60 shadow-xl border border-white/60 p-4">
            <img 
              src={imgJournalKid} 
              alt="Journal" 
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            How are you feeling?
          </h3>

          {/* Mood Selector */}
          <div className="flex justify-center gap-4 mb-2">
            <MoodButton
              icon={Smile}
              label="Great"
              color="green"
              selected={selectedMood === 'great'}
              onClick={() => setSelectedMood('great')}
            />
            <MoodButton
              icon={Meh}
              label="Neutral"
              color="yellow"
              selected={selectedMood === 'neutral'}
              onClick={() => setSelectedMood('neutral')}
            />
            <MoodButton
              icon={Frown}
              label="Tired"
              color="purple"
              selected={selectedMood === 'tired'}
              onClick={() => setSelectedMood('tired')}
            />
          </div>
        </div>
      </div>

      {/* Recovery Roadmap */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <h3 className="text-xl font-serif text-gray-800 mb-6">My Recovery Roadmap</h3>
          
          <div className="space-y-4">
            <MilestoneCard
              title="Chemo Cycle 3"
              description="Hydration is key today. Remember the lemon water."
              status="current"
              color="purple"
            />
            <MilestoneCard
              title="Rest & Recovery"
              description="Scheduled me time and reading."
              status="upcoming"
              color="indigo"
            />
          </div>
        </div>
      </div>

      {/* Today's Reflections */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif text-gray-800">Today's Reflections</h3>
            <span className="text-xs text-gray-500 backdrop-blur-md bg-white/60 px-3 py-1 rounded-full border border-white/50">
              11:35 PM
            </span>
          </div>

          <div className="backdrop-blur-md bg-white/50 rounded-2xl p-5 border border-white/60 shadow-lg mb-4">
            <p className="text-sm text-indigo-600 font-medium mb-3 flex items-center gap-2">
              <span>✍️</span> Dear Diary...
            </p>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
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
              <button className="backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-xl shadow-lg border border-white/30 transition-all hover:scale-105 flex items-center gap-2">
                <span className="text-sm font-semibold">Save</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Wins */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">Weekly Wins</h3>
            <span className="text-sm text-indigo-600 font-medium cursor-pointer hover:underline">View All</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <WinCard
              emoji="💪"
              title="Walk Break"
              description="Gentle walk for 10 mins without feeling tired."
              color="purple"
            />
            <WinCard
              emoji="💧"
              title="Hydration Goal"
              description="Drank 10 of 8 water servings feeling very strong."
              color="indigo"
            />
          </div>
        </div>
      </div>
    </div>
  );
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
    purple: selected ? 'bg-purple-100/80 border-purple-300/60 shadow-lg scale-110' : 'bg-white/70 border-white/60'
  }[color];

  const iconColor = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600'
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

interface MilestoneCardProps {
  title: string;
  description: string;
  status: 'current' | 'upcoming';
  color: 'purple' | 'indigo';
}

function MilestoneCard({ title, description, status, color }: MilestoneCardProps) {
  const colorClasses = color === 'purple'
    ? 'bg-purple-50/70 border-purple-200/60'
    : 'bg-indigo-50/70 border-indigo-200/60';
  
  const dotColor = color === 'purple' ? 'bg-purple-500' : 'bg-indigo-500';

  return (
    <div className={`backdrop-blur-md ${colorClasses} rounded-2xl p-4 border shadow-lg flex gap-4`}>
      <div className="flex flex-col items-center gap-2 pt-1">
        <div className={`w-3 h-3 ${dotColor} rounded-full ${status === 'current' ? 'animate-pulse' : ''}`} />
        {status === 'upcoming' && <div className="w-px h-full bg-gray-300" />}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
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
      <div className="text-3xl mb-2">{emoji}</div>
      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
