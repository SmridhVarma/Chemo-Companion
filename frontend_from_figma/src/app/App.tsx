import { useState } from 'react';
import { Home } from './components/Home';
import { AIAssistant } from './components/AIAssistant';
import { HealingJournal } from './components/HealingJournal';
import { Community } from './components/Community';
import { ClinicalHistory } from './components/ClinicalHistory';
import { CareSchedule } from './components/CareSchedule';
import { UserProfile } from './components/UserProfile';
import { Home as HomeIcon, Calendar, Users, FileText, MessageSquare, Heart, User } from 'lucide-react';

type Page = 'home' | 'schedule' | 'journal' | 'community' | 'history' | 'ai' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'schedule':
        return <CareSchedule />;
      case 'journal':
        return <HealingJournal />;
      case 'community':
        return <Community />;
      case 'history':
        return <ClinicalHistory />;
      case 'ai':
        return <AIAssistant />;
      case 'profile':
        return <UserProfile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 min-h-screen backdrop-blur-xl bg-gradient-to-b from-[rgba(224,231,255,0.8)] via-[rgba(237,233,254,0.7)] to-[rgba(219,234,254,0.6)] border-r border-white/40 shadow-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.05)] via-transparent to-[rgba(139,92,246,0.05)] pointer-events-none" />

        <div className="relative p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="backdrop-blur-md bg-white/70 p-3 rounded-2xl shadow-lg border border-white/60">
              <Heart className="w-6 h-6 text-[#6366F1]" fill="#6366F1" />
            </div>
            <h1 className="font-serif text-xl text-[#4338CA] font-bold">
              Chemo Companion
            </h1>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            <NavItem
              icon={HomeIcon}
              label="Home"
              active={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
            />
            <NavItem
              icon={MessageSquare}
              label="AI Assistant"
              active={currentPage === 'ai'}
              onClick={() => setCurrentPage('ai')}
            />
            <NavItem
              icon={Calendar}
              label="Care Schedule"
              active={currentPage === 'schedule'}
              onClick={() => setCurrentPage('schedule')}
            />
            <NavItem
              icon={Heart}
              label="My Journal"
              active={currentPage === 'journal'}
              onClick={() => setCurrentPage('journal')}
            />
            <NavItem
              icon={Users}
              label="Community"
              active={currentPage === 'community'}
              onClick={() => setCurrentPage('community')}
            />
            <NavItem
              icon={FileText}
              label="Health Reports"
              active={currentPage === 'history'}
              onClick={() => setCurrentPage('history')}
            />
            <NavItem
              icon={User}
              label="My Profile"
              active={currentPage === 'profile'}
              onClick={() => setCurrentPage('profile')}
            />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F5F3FF] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />
        <div className="relative">
          {renderPage()}
        </div>
      </main>
    </div>
  );
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