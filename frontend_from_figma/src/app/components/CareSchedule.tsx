import { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowLeft, Bell, Mic, Plus, Calendar, Users, MapPin, Check, Video, Clock, X, Trash2, RefreshCw } from 'lucide-react';
import imgAppointment from "figma:asset/8669c136a244f7227f342ed23bd2000cc314c451.png";

interface ApiAppointment {
  id: number;
  title: string;
  time: string;
  type: string;
}

export function CareSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [appointments, setAppointments] = useState<ApiAppointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAppointments = useCallback(async () => {
    try {
      const res = await fetch('/api/appointments');
      const data = await res.json();
      if (data.status === 'success') {
        setAppointments(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch appointments:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch on mount + auto-refresh every 30s
  useEffect(() => {
    fetchAppointments();
    const interval = setInterval(fetchAppointments, 30000);
    return () => clearInterval(interval);
  }, [fetchAppointments]);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
      setAppointments(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error('Failed to delete appointment:', err);
    }
  };

  // Map API types to card visual styles
  const mapType = (type: string): 'chemotherapy' | 'lab' | 'wellness' => {
    switch (type) {
      case 'medication':
      case 'treatment':
        return 'chemotherapy';
      case 'lab_test':
        return 'lab';
      case 'wellness':
        return 'wellness';
      case 'doctor_visit':
      default:
        return 'lab';
    }
  };

  const formatTime = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    } catch {
      return isoStr;
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    } catch {
      return '';
    }
  };

  // Dynamically generate current week's dates, synced to real time
  const { dates, calendarLabel } = useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, ...
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(now);
    monday.setDate(now.getDate() + mondayOffset);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dateNum = d.getDate();
      // Check if any appointment falls on this date
      const hasEvent = appointments.some(apt => {
        try {
          const aptDate = new Date(apt.time);
          return aptDate.getFullYear() === d.getFullYear() &&
                 aptDate.getMonth() === d.getMonth() &&
                 aptDate.getDate() === d.getDate();
        } catch { return false; }
      });
      return { day: dayNames[d.getDay()], date: dateNum, fullDate: d, hasEvent };
    });

    const label = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    return { dates: weekDates, calendarLabel: label };
  }, [appointments]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-serif text-gray-800">Care Schedule</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchAppointments}
            className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all"
            title="Refresh"
          >
            <RefreshCw className="w-5 h-5 text-gray-600" />
          </button>
          <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Cycle Countdown */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-purple-50/80 via-indigo-50/70 to-blue-50/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-300/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-purple-100/80 px-4 py-2 rounded-full mb-4 border border-purple-200/60 shadow">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Upcoming: Chemo Cycle #4
            </span>
          </div>
          
          <h2 className="text-4xl font-serif text-gray-800 mb-2">
            3 Days Until Cycle
          </h2>
          <p className="text-gray-600 mb-6">
            Remember to rest well beforehand.
          </p>

          <div className="backdrop-blur-md bg-white/60 rounded-2xl p-4 max-w-md mx-auto border border-white/60 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60">
                <Mic className="w-5 h-5 text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="e.g., 'Blood test next Monday'"
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="backdrop-blur-md bg-purple-600/90 hover:bg-purple-600 p-3 rounded-xl shadow-lg border border-white/30 transition-all">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">{calendarLabel}</h3>
            <button className="text-sm text-purple-600 font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {dates.map((item) => (
              <button
                key={item.date}
                onClick={() => setSelectedDate(item.date)}
                className={`
                  backdrop-blur-md rounded-2xl p-4 border transition-all hover:scale-105
                  ${selectedDate === item.date
                    ? 'bg-purple-600 border-purple-600 shadow-xl'
                    : 'bg-white/70 border-white/60 shadow-lg'
                  }
                `}
              >
                <div className={`text-xs font-medium mb-2 ${selectedDate === item.date ? 'text-purple-200' : 'text-gray-500'}`}>
                  {item.day}
                </div>
                <div className={`text-2xl font-bold ${selectedDate === item.date ? 'text-white' : 'text-gray-800'}`}>
                  {item.date}
                </div>
                {item.hasEvent && (
                  <div className={`w-1.5 h-1.5 mx-auto mt-2 rounded-full ${selectedDate === item.date ? 'bg-white' : 'bg-purple-600'}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Your Appointments (from API) */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">Your Appointments</h3>
            <span className="text-sm text-gray-500 font-medium">
              {appointments.length} total
            </span>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8 text-gray-500">Loading appointments...</div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-2">No appointments yet</p>
              <p className="text-sm text-gray-400">Chat with the AI Assistant to add appointments automatically!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((apt) => (
                <AppointmentCard
                  key={apt.id}
                  type={mapType(apt.type)}
                  title={apt.title}
                  location={formatDate(apt.time)}
                  time={formatTime(apt.time)}
                  attendees={[]}
                  status="upcoming"
                  onDelete={() => handleDelete(apt.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Today's Schedule (hardcoded demo) */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <h3 className="text-xl font-serif text-gray-800 mb-6">Today's Schedule</h3>
          
          <div className="space-y-4">
            <AppointmentCard
              type="chemotherapy"
              title="Chemotherapy Session"
              location="Ward 3B • Dr. Smith"
              time="10:00 AM"
              attendees={[
                { name: 'Sarah', color: 'bg-purple-400' },
                { name: 'Mom', color: 'bg-indigo-400' }
              ]}
              status="upcoming"
            />
            
            <AppointmentCard
              type="lab"
              title="Blood Work: CBC"
              location="Lab Corp Center"
              time="Completed at 11:15 AM"
              attendees={[]}
              status="completed"
            />
            
            <AppointmentCard
              type="wellness"
              title="Wellness Circle"
              location="Community Hall • Online"
              time="4:00 PM"
              hasVideo={true}
              attendees={[]}
              status="upcoming"
            />
          </div>
        </div>
      </div>

      {/* Book Appointment Button */}
      <button 
        onClick={() => setShowBookingModal(true)}
        className="w-full backdrop-blur-md bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-600 hover:to-indigo-600 text-white py-4 px-8 rounded-2xl shadow-xl border border-white/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
      >
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Book New Appointment</span>
      </button>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}

interface AppointmentCardProps {
  type: 'chemotherapy' | 'lab' | 'wellness';
  title: string;
  location: string;
  time: string;
  attendees?: Array<{ name: string; color: string }>;
  hasVideo?: boolean;
  status: 'upcoming' | 'completed';
  onDelete?: () => void;
}

function AppointmentCard({ type, title, location, time, attendees = [], hasVideo, status, onDelete }: AppointmentCardProps) {
  const typeConfig = {
    chemotherapy: {
      icon: '💉',
      borderColor: 'border-purple-200/60',
      bgColor: 'from-purple-50/70 to-indigo-50/50',
      accentColor: 'bg-purple-600',
      iconBg: 'bg-purple-100/80',
      timeColor: 'text-purple-600'
    },
    lab: {
      icon: '🩸',
      borderColor: 'border-emerald-200/60',
      bgColor: 'from-emerald-50/70 to-teal-50/50',
      accentColor: 'bg-emerald-500',
      iconBg: 'bg-emerald-100/80',
      timeColor: 'text-emerald-600'
    },
    wellness: {
      icon: '🧘',
      borderColor: 'border-blue-200/60',
      bgColor: 'from-blue-50/70 to-cyan-50/50',
      accentColor: 'bg-blue-500',
      iconBg: 'bg-blue-100/80',
      timeColor: 'text-blue-600'
    }
  }[type];

  return (
    <div className={`backdrop-blur-md bg-gradient-to-br ${typeConfig.bgColor} rounded-2xl border ${typeConfig.borderColor} shadow-lg transition-all hover:shadow-xl relative overflow-hidden`}>
      {/* Left Accent Bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${typeConfig.accentColor}`} />
      
      <div className="p-5 pl-7">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`backdrop-blur-md ${typeConfig.iconBg} p-3 rounded-xl shadow border border-white/60 flex-shrink-0`}>
            <span className="text-2xl">{typeConfig.icon}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                <p className="text-sm text-gray-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </p>
              </div>
              
              {status === 'completed' && (
                <div className="backdrop-blur-md bg-emerald-100/80 p-2 rounded-lg shadow border border-white/60">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              )}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="backdrop-blur-md bg-red-50/80 hover:bg-red-100/80 p-2 rounded-lg shadow border border-red-200/60 transition-all hover:scale-105"
                  title="Remove appointment"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              )}
            </div>

            {/* Attendees */}
            {attendees.length > 0 && (
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-gray-500" />
                <div className="flex -space-x-2">
                  {attendees.map((attendee, idx) => (
                    <div
                      key={idx}
                      className={`w-7 h-7 ${attendee.color} rounded-full border-2 border-white flex items-center justify-center shadow`}
                    >
                      <span className="text-xs font-semibold text-white">
                        {attendee.name.charAt(0)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-600 ml-1">
                  {attendees.map(a => a.name).join(' & ')}
                </span>
              </div>
            )}

            {/* Time and Actions */}
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1.5 ${typeConfig.timeColor} font-semibold text-sm`}>
                <Clock className="w-4 h-4" />
                {time}
              </div>
              
              {hasVideo && (
                <button className="backdrop-blur-md bg-indigo-600/90 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow border border-white/30 transition-all flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  Join Zoom Link
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [selectedType, setSelectedType] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/60 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif text-gray-800">Book an Appointment</h2>
            <button 
              onClick={onClose}
              className="backdrop-blur-md bg-white/70 p-2 rounded-lg shadow border border-white/60 hover:bg-white/90 transition-all"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Illustration */}
          <div className="w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/60 shadow-lg border border-white/60 p-4">
            <img 
              src={imgAppointment} 
              alt="Book appointment" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Appointment Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedType('checkup')}
                  className={`backdrop-blur-md rounded-xl p-3 border transition-all ${
                    selectedType === 'checkup'
                      ? 'bg-indigo-100/80 border-indigo-300/60 shadow-lg'
                      : 'bg-white/70 border-white/60'
                  }`}
                >
                  <div className="text-2xl mb-1">🏥</div>
                  <div className="text-xs font-medium text-gray-700">Check-up</div>
                </button>
                <button
                  onClick={() => setSelectedType('treatment')}
                  className={`backdrop-blur-md rounded-xl p-3 border transition-all ${
                    selectedType === 'treatment'
                      ? 'bg-purple-100/80 border-purple-300/60 shadow-lg'
                      : 'bg-white/70 border-white/60'
                  }`}
                >
                  <div className="text-2xl mb-1">💉</div>
                  <div className="text-xs font-medium text-gray-700">Treatment</div>
                </button>
                <button
                  onClick={() => setSelectedType('lab')}
                  className={`backdrop-blur-md rounded-xl p-3 border transition-all ${
                    selectedType === 'lab'
                      ? 'bg-emerald-100/80 border-emerald-300/60 shadow-lg'
                      : 'bg-white/70 border-white/60'
                  }`}
                >
                  <div className="text-2xl mb-1">🩸</div>
                  <div className="text-xs font-medium text-gray-700">Lab Work</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Time
              </label>
              <input
                type="time"
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any specific concerns or requests..."
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300 resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 backdrop-blur-md bg-white/70 hover:bg-white/90 border border-white/60 text-gray-700 py-3 rounded-xl shadow transition-all font-semibold"
            >
              Cancel
            </button>
            <button className="flex-1 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl shadow-xl border border-white/30 transition-all font-semibold">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
