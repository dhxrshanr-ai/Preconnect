import { Subject } from '@/types';
import { GradeDropdown } from './GradeDropdown';
import { Plus, Filter, ChevronRight, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubjectRowProps {
  subject: Subject;
  grade: string;
  onGradeChange: (g: string) => void;
  onElectiveChange?: () => void;
  isElectivePlaceholder?: boolean;
  isExtraSubject?: boolean;
  onRemove?: () => void;
  dropUp?: boolean;
}

export function SubjectRow({ subject, grade, onGradeChange, onElectiveChange, isElectivePlaceholder, isExtraSubject, onRemove, dropUp = false }: SubjectRowProps) {
  if (isElectivePlaceholder) {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onElectiveChange}
        className="glass-panel p-6 rounded-[1.5rem] flex items-center justify-between border-dashed border-primary/40 bg-primary/5 cursor-pointer hover:bg-primary/10 hover:border-primary transition-colors group"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,85,0,0.3)] group-hover:scale-110 transition-transform">
            <Plus size={22} strokeWidth={3} />
          </div>
          <div>
            <p className="text-[10px] font-space-grotesque font-black text-primary uppercase tracking-[0.3em] text-glow-orange">Choice Slot</p>
            <p className="text-sm font-outfit font-medium text-white/60 group-hover:text-white transition-colors tracking-tight">Select {subject.name}</p>
          </div>
        </div>
        <ChevronRight size={20} className="text-primary/40 group-hover:text-primary group-hover:translate-x-2 transition-transform" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-panel p-4 sm:p-6 rounded-[2rem] flex items-center justify-between gap-3 sm:gap-5 hover:shadow-[0_15px_60px_rgba(255,85,0,0.15)] group relative transition-shadow"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        {/* Aurora glow effect */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-1000" />
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>

      <div className="flex-1 z-10 relative pr-2">
        <div className="flex items-center flex-wrap gap-4 mb-3">
          <span className="text-[10px] font-space-grotesque font-medium text-primary uppercase tracking-widest">
            {subject.code}
          </span>
          <span className="text-[10px] font-space-grotesque font-medium text-white/40 uppercase tracking-widest">
            • {subject.credits} CR
          </span>
          {isExtraSubject && (
            <button 
              onClick={onRemove}
              className="p-1.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors active:scale-90 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)] ml-auto hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]"
              title="Remove Subject"
            >
              <Trash2 size={12} strokeWidth={3} />
            </button>
          )}
        </div>
        <h3 className="text-sm sm:text-base font-outfit font-medium text-white leading-snug group-hover:text-white transition-colors tracking-tight">
          {subject.name}
        </h3>
      </div>
      
      <div className="flex items-center justify-end gap-2 sm:gap-4 z-10 shrink-0">
        {subject.options && (
          <button 
            onClick={onElectiveChange}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/80 transition-colors shadow-inner group-hover:scale-110 active:scale-95 shrink-0 relative z-10"
            title="Switch Orbital Config"
          >
            <Filter size={16} strokeWidth={3} />
          </button>
        )}
        <GradeDropdown value={grade} onChange={onGradeChange} dropUp={dropUp} />
      </div>
    </motion.div>
  );
}
