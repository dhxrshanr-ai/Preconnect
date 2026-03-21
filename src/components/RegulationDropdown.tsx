import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RegulationDropdownProps {
  value: string;
  options: { reg: string; label: string }[];
  onChange: (reg: string) => void;
}

export function RegulationDropdown({ value, options, onChange }: RegulationDropdownProps) {
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

  const selectedOption = options.find(o => o.reg === value);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full h-20 bg-white/5 border rounded-[1.5rem] px-6 text-white outline-none transition-all cursor-pointer shadow-inner flex items-center justify-between group",
          isOpen ? "border-primary bg-primary/5" : "border-white/10 hover:border-primary/40"
        )}
      >
        <div className="flex flex-col items-start">
          <span className="font-space-grotesque font-black text-xl tracking-tighter">{value}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-40 group-hover:opacity-100 transition-opacity">
            {selectedOption?.label.split(' ')[1]} {selectedOption?.label.split(' ')[2]}
          </span>
        </div>
        <div className={cn(
          "text-primary/50 group-hover:text-primary transition-all duration-300",
          isOpen && "rotate-180 text-primary"
        )}>
          <ChevronDown size={28} strokeWidth={3} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 right-0 mt-3 bg-[#111111]/95 border border-white/10 rounded-[1.5rem] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.9)] z-[100] flex flex-col gap-1 backdrop-blur-2xl"
          >
            {options.map((opt) => (
              <button
                key={opt.reg}
                onClick={() => {
                  onChange(opt.reg);
                  setIsOpen(false);
                }}
                className={cn(
                  "p-5 rounded-xl transition-colors flex items-center justify-between group/opt shrink-0",
                  value === opt.reg
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-white/60 hover:bg-white/10 hover:text-white border border-transparent"
                )}
              >
                <div className="flex flex-col items-start">
                   <span className="font-space-grotesque font-black text-lg tracking-tighter">{opt.reg}</span>
                   <span className="text-[9px] font-bold uppercase tracking-[0.1em] opacity-50">{opt.label}</span>
                </div>
                {value === opt.reg && (
                  <motion.div 
                    layoutId="activeRegIndicator"
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
