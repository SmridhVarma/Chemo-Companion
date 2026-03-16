import { useMemo, useState } from 'react';
import { ArrowLeft, Bell, Mic, Plus, Calendar, MapPin, Check, Video, Clock, X } from 'lucide-react';
import imgAppointment from "figma:asset/8669c136a244f7227f342ed23bd2000cc314c451.png";
import type { Appointment } from '../types';

interface CareScheduleProps {
  appointments: Appointment[];
  upcomingAppointment: Appointment | null;
  onAddAppointment: (appointment: Appointment) => void;
}

export function CareSchedule({ appointments, upcomingAppointment, onAddAppointment }: CareScheduleProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const groupedDates = useMemo(() => {
    const baseDate = appointments[0]?.date ?? new Date().toISOString().slice(0, 10);
    const start = new Date(`${baseDate}T00:00:00`);

    return Array.from({ length: 5 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      const iso = date.toISOString().slice(0, 10);

      return {
        iso,
        day: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date),
        date: date.getDate(),
        hasEvent: appointments.some((appointment) => appointment.date === iso),
      };
    });
  }, [appointments]);

  const [selectedDate, setSelectedDate] = useState(groupedDates[0]?.iso ?? new Date().toISOString().slice(0, 10));

  const selectedAppointments = appointments.filter((appointment) => appointment.date === selectedDate);

  const daysUntilNextCycle = upcomingAppointment
    ? Math.max(0, Math.ceil((new Date(`${upcomingAppointment.date}T${upcomingAppointment.time || '09:00'}`).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-serif text-gray-800">Care Schedule</h1>
        </div>
        <button className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60 hover:bg-white/90 transition-all">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-purple-50/80 via-indigo-50/70 to-blue-50/60 rounded-[2.5rem] p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-300/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-purple-100/80 px-4 py-2 rounded-full mb-4 border border-purple-200/60 shadow">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              {upcomingAppointment ? `Upcoming: ${upcomingAppointment.type}` : 'Upcoming: No appointment scheduled'}
            </span>
          </div>

          <h2 className="text-4xl font-serif text-gray-800 mb-2">
            {daysUntilNextCycle === null ? 'No upcoming visit yet' : `${daysUntilNextCycle} Day${daysUntilNextCycle === 1 ? '' : 's'} Until Visit`}
          </h2>
          <p className="text-gray-600 mb-6">
            {upcomingAppointment
              ? `${upcomingAppointment.doctor || 'Your care team'} at ${formatTime(upcomingAppointment.time)} in ${upcomingAppointment.location || 'your selected location'}.`
              : 'Remember to add your next appointment so the app can remind you during daily check-ins.'}
          </p>

          <div className="backdrop-blur-md bg-white/60 rounded-2xl p-4 max-w-md mx-auto border border-white/60 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="backdrop-blur-md bg-white/70 p-3 rounded-xl shadow border border-white/60">
                <Mic className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 text-left text-gray-600">
                {upcomingAppointment ? `Reminder active for ${formatDate(upcomingAppointment.date)}.` : 'Add a reminder for your next treatment or blood test.'}
              </div>
              <button
                onClick={() => setShowBookingModal(true)}
                className="backdrop-blur-md bg-purple-600/90 hover:bg-purple-600 p-3 rounded-xl shadow-lg border border-white/30 transition-all"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-gray-800">
              {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(`${selectedDate}T00:00:00`))}
            </h3>
            <button className="text-sm text-purple-600 font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {groupedDates.map((item) => (
              <button
                key={item.iso}
                onClick={() => setSelectedDate(item.iso)}
                className={`
                  backdrop-blur-md rounded-2xl p-4 border transition-all hover:scale-105
                  ${selectedDate === item.iso ? 'bg-purple-600 border-purple-600 shadow-xl' : 'bg-white/70 border-white/60 shadow-lg'}
                `}
              >
                <div className={`text-xs font-medium mb-2 ${selectedDate === item.iso ? 'text-purple-200' : 'text-gray-500'}`}>
                  {item.day}
                </div>
                <div className={`text-2xl font-bold ${selectedDate === item.iso ? 'text-white' : 'text-gray-800'}`}>
                  {item.date}
                </div>
                {item.hasEvent && (
                  <div className={`w-1.5 h-1.5 mx-auto mt-2 rounded-full ${selectedDate === item.iso ? 'bg-white' : 'bg-purple-600'}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <h3 className="text-xl font-serif text-gray-800 mb-6">Appointments for {formatDate(selectedDate)}</h3>

          <div className="space-y-4">
            {selectedAppointments.length === 0 ? (
              <div className="backdrop-blur-md bg-white/60 rounded-2xl p-5 border border-white/60 text-gray-600">
                No appointments on this day yet.
              </div>
            ) : (
              selectedAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  status={new Date(`${appointment.date}T${appointment.time || '09:00'}`).getTime() < Date.now() ? 'completed' : 'upcoming'}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowBookingModal(true)}
        className="w-full backdrop-blur-md bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-600 hover:to-indigo-600 text-white py-4 px-8 rounded-2xl shadow-xl border border-white/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
      >
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Book New Appointment</span>
      </button>

      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} onConfirm={onAddAppointment} />
      )}
    </div>
  );
}

function AppointmentCard({ appointment, status }: { appointment: Appointment; status: 'upcoming' | 'completed' }) {
  return (
    <div className="backdrop-blur-md bg-gradient-to-br from-purple-50/70 to-indigo-50/50 rounded-2xl border border-purple-200/60 shadow-lg transition-all hover:shadow-xl relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600" />

      <div className="p-5 pl-7">
        <div className="flex items-start gap-4">
          <div className="backdrop-blur-md bg-purple-100/80 p-3 rounded-xl shadow border border-white/60 flex-shrink-0">
            <span className="text-2xl">Appointment</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{appointment.type || 'Care visit'}</h4>
                <p className="text-sm text-gray-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {appointment.location || appointment.doctor || 'Location to be confirmed'}
                </p>
              </div>

              {status === 'completed' && (
                <div className="backdrop-blur-md bg-emerald-100/80 p-2 rounded-lg shadow border border-white/60">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-purple-600 font-semibold text-sm">
                <Clock className="w-4 h-4" />
                {formatTime(appointment.time)}
              </div>

              {appointment.notes && (
                <button className="backdrop-blur-md bg-indigo-600/90 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow border border-white/30 transition-all flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  {appointment.notes}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: (appointment: Appointment) => void;
}) {
  const [selectedType, setSelectedType] = useState('Check-up');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('09:00');
  const [doctor, setDoctor] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const submit = () => {
    onConfirm({
      id: crypto.randomUUID(),
      date,
      time,
      type: selectedType,
      doctor,
      notes,
      location,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/60 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif text-gray-800">Book an Appointment</h2>
            <button onClick={onClose} className="backdrop-blur-md bg-white/70 p-2 rounded-lg shadow border border-white/60 hover:bg-white/90 transition-all">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/60 shadow-lg border border-white/60 p-4">
            <img src={imgAppointment} alt="Book appointment" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Appointment Type</label>
              <div className="grid grid-cols-3 gap-3">
                {['Check-up', 'Treatment', 'Lab Work'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`backdrop-blur-md rounded-xl p-3 border transition-all ${
                      selectedType === type ? 'bg-indigo-100/80 border-indigo-300/60 shadow-lg' : 'bg-white/70 border-white/60'
                    }`}
                  >
                    <div className="text-xs font-medium text-gray-700">{type}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Doctor or care team</label>
              <input
                type="text"
                value={doctor}
                onChange={(event) => setDoctor(event.target.value)}
                placeholder="e.g., Dr. Smith"
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="e.g., Ward 3B or Zoom"
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Any specific concerns or requests..."
                className="w-full backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 py-3 shadow outline-none focus:border-indigo-300 resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={onClose} className="flex-1 backdrop-blur-md bg-white/70 hover:bg-white/90 border border-white/60 text-gray-700 py-3 rounded-xl shadow transition-all font-semibold">
              Cancel
            </button>
            <button onClick={submit} className="flex-1 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl shadow-xl border border-white/30 transition-all font-semibold">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
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
  if (!time) return 'Time TBD';
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(`2026-03-14T${time}`));
}
