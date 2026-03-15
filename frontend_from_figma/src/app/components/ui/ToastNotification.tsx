import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

// ── Types ────────────────────────────────────────────
interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
  exiting?: boolean;
}

interface ToastContextValue {
  showToast: (message: string, type: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

// ── Hook ─────────────────────────────────────────────
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}

// ── Provider ─────────────────────────────────────────
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const dismiss = useCallback((id: number) => {
    // Start exit animation
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t));
    // Remove after animation
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 300);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container — fixed top-right */}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none" style={{ maxWidth: 420 }}>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── Individual Toast ─────────────────────────────────
function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: number) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), 5000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const isSuccess = toast.type === 'success';

  return (
    <div
      className={`
        pointer-events-auto flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl border
        backdrop-blur-xl transition-all duration-300
        ${toast.exiting
          ? 'opacity-0 translate-x-8'
          : 'opacity-100 translate-x-0 animate-slideInRight'
        }
        ${isSuccess
          ? 'bg-gradient-to-r from-emerald-50/90 to-teal-50/80 border-emerald-200/60'
          : 'bg-gradient-to-r from-red-50/90 to-rose-50/80 border-red-200/60'
        }
      `}
    >
      {/* Icon */}
      <div className={`flex-shrink-0 p-1.5 rounded-xl ${isSuccess ? 'bg-emerald-100/80' : 'bg-red-100/80'}`}>
        {isSuccess
          ? <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          : <XCircle className="w-5 h-5 text-red-500" />
        }
      </div>

      {/* Message */}
      <p className={`text-sm font-medium leading-snug flex-1 ${isSuccess ? 'text-emerald-800' : 'text-red-800'}`}>
        {toast.message}
      </p>

      {/* Close */}
      <button
        onClick={() => onDismiss(toast.id)}
        className={`flex-shrink-0 p-1 rounded-lg transition-colors ${
          isSuccess ? 'hover:bg-emerald-100/80 text-emerald-400' : 'hover:bg-red-100/80 text-red-400'
        }`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
