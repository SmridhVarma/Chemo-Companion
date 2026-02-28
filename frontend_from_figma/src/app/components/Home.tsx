import imgDailyCheckIn from "figma:asset/c37608e0639d481199161f86f938cbb87cfa2de8.png";
import { Heart, Droplet, Pill, Calendar, Plus } from 'lucide-react';

export function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
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

      {/* Daily Check-in Card */}
      <div className="mb-8">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 relative overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          
          <div className="relative">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-6">
              Daily Check-in
            </h3>
            
            {/* Image */}
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
            
            {/* Button */}
            <button className="w-full backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white py-4 px-8 rounded-[2rem] shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3">
              <Heart className="w-5 h-5" fill="white" />
              <span className="text-lg font-semibold">Start Check-in</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recovery Garden */}
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
              {/* Progress Circle */}
              <div className="relative w-20 h-20 flex-shrink-0">
                <svg className="w-20 h-20 -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="rgba(99, 102, 241, 0.15)"
                    strokeWidth="6"
                    fill="none"
                  />
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
                  You've completed 4 cycles.<br/>
                  Your garden is blooming<br/>
                  beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Schedule Preview */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />
          
          <div className="relative">
            <h3 className="text-xl font-serif text-gray-800 mb-6">Today's Schedule</h3>
            
            <div className="space-y-3">
              <ScheduleItem
                icon={Pill}
                time="10:00 AM"
                title="Morning Medication"
                color="indigo"
              />
              <ScheduleItem
                icon={Droplet}
                time="ALL DAY"
                title="Hydration Goal"
                subtitle="4 of 8 glasses"
                color="blue"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickActionCard
          icon={Calendar}
          title="Book Appointment"
          description="Schedule your next visit"
          color="purple"
        />
        <QuickActionCard
          icon={Heart}
          title="Log Symptoms"
          description="Track how you're feeling"
          color="indigo"
        />
        <QuickActionCard
          icon={Plus}
          title="Join Community"
          description="Connect with others"
          color="blue"
        />
      </div>
    </div>
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
          {subtitle && (
            <p className="text-sm text-gray-600 mt-0.5">{subtitle}</p>
          )}
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
}

function QuickActionCard({ icon: Icon, title, description, color }: QuickActionCardProps) {
  const colorClasses = {
    purple: 'from-purple-50/80 to-purple-100/50 border-purple-200/50 hover:shadow-purple-200/50',
    indigo: 'from-indigo-50/80 to-indigo-100/50 border-indigo-200/50 hover:shadow-indigo-200/50',
    blue: 'from-blue-50/80 to-blue-100/50 border-blue-200/50 hover:shadow-blue-200/50'
  }[color];

  const iconColor = {
    purple: 'text-purple-600',
    indigo: 'text-indigo-600',
    blue: 'text-blue-600'
  }[color];

  return (
    <button className={`backdrop-blur-xl bg-gradient-to-br ${colorClasses} rounded-2xl p-5 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-left w-full`}>
      <div className="flex items-start gap-4">
        <div className={`backdrop-blur-md bg-white/60 p-3 rounded-xl shadow border border-white/50`}>
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
