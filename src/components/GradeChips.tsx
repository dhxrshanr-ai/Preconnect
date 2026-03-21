import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const GRADES = ['O', 'A+', 'A', 'B+', 'B', 'C', 'RA'];

export function GradeChips({ value, onChange }: { value?: string, onChange: (v: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
     className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide select-none"
    >
      {GRADES.map((g) => (
        <motion.button
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.9 }}
          key={g}
          onClick={(e) => {
            e.stopPropagation();
            onChange(g);
          }}
          className={cn(
            "min-w-[54px] h-14 flex items-center justify-center rounded-2xl border-2 font-space-grotesque font-black text-xs transition-colors shrink-0 relative overflow-hidden group/chip",
            value === g 
              ? "bg-primary text-white border-white shadow-[0_0_25px_rgba(255,85,0,0.6)] z-10"
              : "bg-white/5 text-white/40 border-white/10 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
          )}
          aria-label={`Grade ${g}`}
        >
          {/* Shimmer sweep effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/chip:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <span className="relative z-10">{g}</span>
        </motion.button>
      ))}
    </div>
  )
}
