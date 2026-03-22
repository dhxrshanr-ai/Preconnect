import { Subject } from '@/types';
import { X, Search, Plus, Check } from 'lucide-react';
import { useGpaStore } from '@/store/useGpaStore';
import { useState, useEffect } from 'react';
import { 
  MASTER_R2021_SUBJECTS, 
  MASTER_R2025_SUBJECTS,
  ALL_OPEN_ELECTIVES,
  ALL_PROFESSIONAL_ELECTIVES,
  ALL_MANDATORY_COURSES
} from '@/data';

export function ElectivePicker({
  isOpen,
  onClose,
  options,
  onSelect,
  title
}: {
  isOpen: boolean;
  onClose: () => void;
  options: Subject[];
  onSelect: (sub: Subject) => void;
  title: string;
}) {
  const { regulation } = useGpaStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const masterRegistry = regulation === 'R2021' ? MASTER_R2021_SUBJECTS : 
                         regulation === 'R2025' ? MASTER_R2025_SUBJECTS : {};

  const masterMatch = masterRegistry[searchQuery.trim().toUpperCase()];
  const showCustomOption = searchQuery.trim().length > 0 && !masterMatch;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xl animate-in fade-in duration-500 p-4"
      onClick={onClose}
    >
      <div 
        className="glass-panel bg-[#050505] w-full max-w-xl rounded-[2.5rem] shadow-[0_0_100px_rgba(255,85,0,0.15)] overflow-hidden animate-float transition-weightless flex flex-col max-h-[85vh] border-primary/30 depth-tilt"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Section */}
        <div className="p-8 pb-6 border-b border-white/5 relative shrink-0">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h3 className="font-space-grotesque font-medium text-xl text-white tracking-tight text-glow-orange">
              {title}
            </h3>
            <button 
              onClick={onClose} 
              className="p-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-full transition-weightless border border-white/10 active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative z-10 group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                <Search className="text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
             </div>
             <input 
               type="text" 
               placeholder="ENTER SUBJECT CODE (e.g. AI3201)" 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               autoFocus
               className="w-full pl-14 pr-14 py-6 bg-white/5 border border-white/10 rounded-[1.5rem] text-xl font-outfit font-black focus:border-primary focus:ring-8 focus:ring-primary/10 transition-all outline-none text-white placeholder:text-white/10 tracking-widest uppercase"
             />
             {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={16} className="text-white/40" />
                </button>
             )}
          </div>
        </div>

        {/* Dynamic Fetch Area */}
        <div className="overflow-y-auto p-8 grow scrollbar-hide space-y-8">
            
            {/* Direct Match Result */}
            {searchQuery.trim().length >= 3 && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                    <p className="text-[10px] font-space-grotesque font-black text-primary/40 uppercase tracking-[0.4em] mb-4 ml-2">Direct Terminal Resolve</p>
                    {masterMatch ? (
                        <button
                          onClick={() => { onSelect({ ...masterMatch, type: 'theory' } as Subject); onClose(); }}
                          className="w-full text-left glass-panel p-8 rounded-[2rem] border-primary bg-primary/10 hover:bg-primary/20 transition-all group shadow-[0_0_40px_rgba(255,85,0,0.15)] ring-1 ring-primary/30"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-primary text-white text-[11px] font-space-grotesque font-bold rounded-lg tracking-widest">
                                        {masterMatch.code}
                                    </span>
                                    <span className="text-[11px] font-space-grotesque font-medium text-white/40 tracking-widest uppercase">
                                        • {masterMatch.credits} CREDITS
                                    </span>
                                </div>
                                <Check size={24} className="text-primary animate-pulse" />
                            </div>
                            <h4 className="text-2xl font-outfit font-bold text-white leading-tight mb-2 uppercase tracking-tight">
                                {masterMatch.name}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] font-space-grotesque font-black text-primary uppercase tracking-widest">
                                <Plus size={14} /> CLICK TO ADD TO SEMESTER
                            </div>
                        </button>
                    ) : (
                        <div className="glass-panel p-8 rounded-[2rem] border-white/5 bg-white/[0.02] text-center border-dashed border-2">
                             <p className="text-white/20 font-space-grotesque font-bold text-sm tracking-widest uppercase">
                                {searchQuery.trim().length < 5 ? "Analyzing patterns..." : "No standard subject found"}
                             </p>
                             {searchQuery.trim().length >= 6 && (
                                <button 
                                  onClick={() => {
                                      onSelect({
                                          code: searchQuery.trim().toUpperCase(),
                                          name: "Experimental Subject",
                                          credits: 3,
                                          type: 'theory'
                                      } as Subject);
                                      onClose();
                                  }}
                                  className="mt-6 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-space-grotesque font-black text-white hover:bg-primary hover:border-primary transition-all uppercase tracking-widest"
                                >
                                    Force Generate {searchQuery.toUpperCase()}
                                </button>
                             )}
                        </div>
                    )}
                </div>
            )}

            {/* Suggested Options */}
            {options.length > 0 && !masterMatch && (
                <div className="animate-in fade-in duration-700 delay-300">
                    <p className="text-[10px] font-space-grotesque font-black text-white/20 uppercase tracking-[0.4em] mb-4 ml-2">Suggested Orbits</p>
                    <div className="grid grid-cols-1 gap-4">
                        {options.map((opt) => (
                           <button
                             key={opt.code}
                             onClick={() => { onSelect(opt); onClose(); }}
                             className="w-full text-left p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                           >
                               <div>
                                   <div className="flex items-center gap-3 mb-1">
                                       <span className="text-[10px] font-space-grotesque font-medium text-primary uppercase">{opt.code}</span>
                                       <span className="text-[10px] font-space-grotesque font-medium text-white/20 uppercase">• {opt.credits} CR</span>
                                   </div>
                                   <p className="font-outfit font-medium text-white/80 group-hover:text-white transition-colors">{opt.name}</p>
                               </div>
                               <Plus size={18} className="text-white/10 group-hover:text-primary transition-colors" />
                           </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
 
         {/* Footer Area */}
         <div className="p-6 bg-white/[0.02] border-t border-white/5 text-center shrink-0">
           <p className="text-[8px] font-space-grotesque font-black text-white/20 uppercase tracking-[0.5em]">GPAfy Engine v2.0</p>
         </div>
       </div>
     </div>
   );
}
