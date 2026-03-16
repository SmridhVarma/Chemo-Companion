export type Page = 'home' | 'schedule' | 'journal' | 'community' | 'history' | 'ai' | 'profile';

export interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  doctor: string;
  notes: string;
  location: string;
}

export interface CheckInEntry {
  id: string;
  createdAt: string;
  mood: number;
  fatigue: number;
  pain: number;
  tookMedicine: boolean | null;
  journal: string;
  appointmentReminder: string | null;
}
