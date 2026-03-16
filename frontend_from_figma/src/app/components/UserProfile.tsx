import { useEffect, useState } from 'react';
import { User, Heart, Pill, AlertCircle, Calendar, Plus, X, Save, Check } from 'lucide-react';
import type { Appointment } from '../types';

interface UserProfileData {
  name: string;
  age: string;
  cancerType: string;
  treatmentStage: string;
  medications: string[];
  allergies: string[];
  conditions: string[];
  dietaryRestrictions: string[];
}

interface UserProfileProps {
  appointments: Appointment[];
  onAddAppointment: (appointment: Appointment) => void;
  onUpdateAppointment: (id: string, field: keyof Appointment, value: string) => void;
  onRemoveAppointment: (id: string) => void;
}

const STORAGE_KEY = 'chemo_companion_profile';

const defaultProfile: UserProfileData = {
  name: '',
  age: '',
  cancerType: '',
  treatmentStage: '',
  medications: [],
  allergies: [],
  conditions: [],
  dietaryRestrictions: [],
};

export function UserProfile({
  appointments,
  onAddAppointment,
  onUpdateAppointment,
  onRemoveAppointment,
}: UserProfileProps) {
  const [profile, setProfile] = useState<UserProfileData>(defaultProfile);
  const [saved, setSaved] = useState(false);
  const [newItem, setNewItem] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProfile({ ...defaultProfile, ...JSON.parse(stored) });
      }
    } catch {
      // Ignore malformed local storage.
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addToList = (field: keyof UserProfileData) => {
    const value = newItem[field]?.trim();
    if (!value) return;
    const list = profile[field] as string[];
    if (!list.includes(value)) {
      setProfile({ ...profile, [field]: [...list, value] });
    }
    setNewItem({ ...newItem, [field]: '' });
  };

  const removeFromList = (field: keyof UserProfileData, index: number) => {
    const list = [...(profile[field] as string[])];
    list.splice(index, 1);
    setProfile({ ...profile, [field]: list });
  };

  const addAppointment = () => {
    onAddAppointment({
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      time: '09:00',
      type: '',
      doctor: '',
      notes: '',
      location: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 font-serif">My Health Profile</h1>
          <p className="text-sm text-gray-500 mt-1">
            Your health information helps the AI provide personalized advice
          </p>
        </div>
        <button
          onClick={saveProfile}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-2xl shadow-lg border transition-all duration-300 font-medium
            ${saved
              ? 'bg-green-50/90 border-green-200/60 text-green-600'
              : 'backdrop-blur-md bg-gradient-to-br from-indigo-600/90 to-purple-600/90 border-white/30 text-white hover:scale-105'
            }
          `}
        >
          {saved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
          {saved ? 'Saved!' : 'Save Profile'}
        </button>
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="backdrop-blur-md bg-indigo-100/80 p-3 rounded-2xl shadow border border-white/50">
              <User className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <ProfileInput label="Full Name" value={profile.name} onChange={(value) => setProfile({ ...profile, name: value })} placeholder="Sarah Johnson" />
            <ProfileInput label="Age" value={profile.age} onChange={(value) => setProfile({ ...profile, age: value })} placeholder="45" />
            <ProfileInput label="Cancer Type" value={profile.cancerType} onChange={(value) => setProfile({ ...profile, cancerType: value })} placeholder="e.g., Breast Cancer Stage II" />
            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">Treatment Stage</label>
              <select
                value={profile.treatmentStage}
                onChange={(event) => setProfile({ ...profile, treatmentStage: event.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
              >
                <option value="">Select stage...</option>
                <option value="Pre-treatment">Pre-treatment</option>
                <option value="Active Treatment - Cycle 1">Active Treatment - Cycle 1</option>
                <option value="Active Treatment - Cycle 2">Active Treatment - Cycle 2</option>
                <option value="Active Treatment - Cycle 3+">Active Treatment - Cycle 3+</option>
                <option value="Between Cycles">Between Cycles</option>
                <option value="Post-treatment Recovery">Post-treatment Recovery</option>
                <option value="Remission">Remission</option>
                <option value="Follow-up Monitoring">Follow-up Monitoring</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <TagCard icon={Pill} title="Current Medications" color="blue" items={profile.medications} inputValue={newItem.medications || ''} onInputChange={(value) => setNewItem({ ...newItem, medications: value })} onAdd={() => addToList('medications')} onRemove={(index) => removeFromList('medications', index)} placeholder="e.g., Ondansetron 8mg" />
        <TagCard icon={AlertCircle} title="Known Allergies" color="red" items={profile.allergies} inputValue={newItem.allergies || ''} onInputChange={(value) => setNewItem({ ...newItem, allergies: value })} onAdd={() => addToList('allergies')} onRemove={(index) => removeFromList('allergies', index)} placeholder="e.g., Penicillin" />
        <TagCard icon={Heart} title="Health Conditions" color="purple" items={profile.conditions} inputValue={newItem.conditions || ''} onInputChange={(value) => setNewItem({ ...newItem, conditions: value })} onAdd={() => addToList('conditions')} onRemove={(index) => removeFromList('conditions', index)} placeholder="e.g., Type 2 Diabetes" />
        <TagCard icon={AlertCircle} title="Dietary Restrictions" color="amber" items={profile.dietaryRestrictions} inputValue={newItem.dietaryRestrictions || ''} onInputChange={(value) => setNewItem({ ...newItem, dietaryRestrictions: value })} onAdd={() => addToList('dietaryRestrictions')} onRemove={(index) => removeFromList('dietaryRestrictions', index)} placeholder="e.g., Gluten-free" />
      </div>

      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="backdrop-blur-md bg-purple-100/80 p-3 rounded-2xl shadow border border-white/50">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Appointments & History</h2>
            </div>
            <button
              onClick={addAppointment}
              className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-purple-50/80 border border-purple-200/60 text-purple-600 text-sm font-medium hover:bg-purple-100/80 transition-all hover:scale-105 shadow"
            >
              <Plus className="w-4 h-4" /> Add Appointment
            </button>
          </div>

          {appointments.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">
              No appointments recorded yet. Click "Add Appointment" to start tracking.
            </p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="grid grid-cols-[1.1fr_0.8fr_1fr_1fr_1.2fr_auto] gap-3 backdrop-blur-md bg-white/50 p-4 rounded-2xl border border-white/50 shadow-sm relative group">
                  <input
                    type="date"
                    value={appointment.date}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'date', event.target.value)}
                    className="px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <input
                    type="time"
                    value={appointment.time}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'time', event.target.value)}
                    className="px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <input
                    type="text"
                    value={appointment.type}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'type', event.target.value)}
                    placeholder="Appointment type"
                    className="px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <input
                    type="text"
                    value={appointment.doctor}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'doctor', event.target.value)}
                    placeholder="Doctor"
                    className="px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <input
                    type="text"
                    value={appointment.location}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'location', event.target.value)}
                    placeholder="Location"
                    className="px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <button
                    onClick={() => onRemoveAppointment(appointment.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={appointment.notes}
                    onChange={(event) => onUpdateAppointment(appointment.id, 'notes', event.target.value)}
                    placeholder="Notes"
                    className="col-span-5 px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500 mb-1.5 block">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
      />
    </div>
  );
}

interface TagCardProps {
  icon: React.ElementType;
  title: string;
  color: string;
  items: string[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  placeholder: string;
}

function TagCard({ icon: Icon, title, color, items, inputValue, onInputChange, onAdd, onRemove, placeholder }: TagCardProps) {
  const colorMap: Record<string, { bg: string; tag: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-100/80', tag: 'bg-blue-50/80 border-blue-200/60 text-blue-700', icon: 'text-blue-600', border: 'focus:ring-blue-300' },
    red: { bg: 'bg-red-100/80', tag: 'bg-red-50/80 border-red-200/60 text-red-700', icon: 'text-red-600', border: 'focus:ring-red-300' },
    purple: { bg: 'bg-purple-100/80', tag: 'bg-purple-50/80 border-purple-200/60 text-purple-700', icon: 'text-purple-600', border: 'focus:ring-purple-300' },
    amber: { bg: 'bg-amber-100/80', tag: 'bg-amber-50/80 border-amber-200/60 text-amber-700', icon: 'text-amber-600', border: 'focus:ring-amber-300' },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-200/5 rounded-full blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className={`backdrop-blur-md ${c.bg} p-2.5 rounded-xl shadow border border-white/50`}>
            <Icon className={`w-4 h-4 ${c.icon}`} />
          </div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {items.map((item, index) => (
            <span key={index} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border shadow-sm ${c.tag}`}>
              {item}
              <button onClick={() => onRemove(index)} className="hover:opacity-70 transition-opacity">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && onAdd()}
            placeholder={placeholder}
            className={`flex-1 px-3 py-2 rounded-xl bg-white/60 border border-white/50 text-sm shadow-sm focus:outline-none focus:ring-2 ${c.border} transition-all`}
          />
          <button onClick={onAdd} className="p-2 rounded-xl backdrop-blur-md bg-white/70 border border-white/50 shadow hover:bg-white/90 transition-all hover:scale-105">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
