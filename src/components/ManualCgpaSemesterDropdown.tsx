import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ManualCgpaSemesterDropdownProps {
  value: number;
  onChange: (sem: number) => void;
}

export function ManualCgpaSemesterDropdown({ value, onChange }: ManualCgpaSemesterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full h-16 bg-white/5 border rounded-[1.5rem] px-6 text-white font-space-grotesque font-black text-lg outline-none transition-all cursor-pointer shadow-inner flex items-center justify-between group uppercase tracking-[0.2em]",
          isOpen ? "border-primary bg-primary/5" : "border-white/10 hover:border-primary/40"
        )}
      >
        <span>Semester {value}</span>
        <div className={cn(
          "text-primary/50 group-hover:text-primary transition-all duration-300",
          isOpen && "rotate-180 text-primary"
        )}>
          <ChevronDown size={24} strokeWidth={3} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 right-0 mt-3 bg-[#111111]/95 border border-white/10 rounded-[1.5rem] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.9)] z-[100] flex flex-col gap-1 backdrop-blur-2xl max-h-[300px] overflow-y-auto scrollbar-hide"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => {
                  onChange(sem);
                  setIsOpen(false);
                }}
                className={cn(
                  "p-4 rounded-xl font-space-grotesque font-black text-left transition-colors flex items-center justify-between uppercase tracking-[0.2em]",
                  value === sem
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-white/60 hover:bg-white/10 hover:text-white border border-transparent"
                )}
              >
                <span>Semester {sem}</span>
                {value === sem && (
                  <motion.div 
                    layoutId="activeManualSemIndicator"
                    className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(255,85,0,0.8)]" 
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
