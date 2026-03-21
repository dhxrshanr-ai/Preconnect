import React from 'react';
import { AlertTriangle, Trash2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGPAStore } from '@/store/useGPAStore';

export const ArrearDashboard: React.FC = () => {
  const { arrears, removeArrear, clearArrear } = useGPAStore();

  if (arrears.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black italic tracking-tight flex items-center gap-3">
          <AlertTriangle className="text-warning-amber" />
          ARREAR TRACKER
        </h2>
        <span className="px-3 py-1 bg-warning-amber/10 border border-warning-amber/20 rounded-full text-warning-amber text-xs font-bold uppercase tracking-widest">
          {arrears.length} PENDING
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {arrears.map((arrear) => (
            <motion.div
              key={arrear.id}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="group bg-card border border-white/5 rounded-[24px] p-5 hover:border-warning-amber/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-black tracking-tight group-hover:text-warning-amber transition-colors">
                    {arrear.code}
                  </h3>
                  <p className="text-white/40 text-sm font-medium">{arrear.name}</p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => clearArrear(arrear.id, 'A')}
                    className="p-2 rounded-xl bg-success-green/10 text-success-green hover:bg-success-green hover:text-white transition-all"
                    title="Mark as Cleared"
                  >
                    <CheckCircle size={18} />
                  </button>
                  <button
                    onClick={() => removeArrear(arrear.id)}
                    className="p-2 rounded-xl bg-danger-red/10 text-danger-red hover:bg-danger-red hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Attempts</span>
                  <span className="text-lg font-black italic">{arrear.attempts}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Credits</span>
                  <span className="text-lg font-black italic">{arrear.credits}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
