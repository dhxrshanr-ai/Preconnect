import { SubjectRow } from './SubjectRow';
import { Subject } from '@/types';
import { calculateSGPA } from '@/lib/gpa';
import { useGpaStore } from '@/store/useGpaStore';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Filter, ChevronRight, RotateCcw, ChevronDown } from 'lucide-react';
import { ElectivePicker } from './ElectivePicker';
import { cn } from '@/lib/utils';

export function SemesterSection({ 
  semNumber, 
  subjects, 
  isOpen, 
  onToggle,
  showSgpa = true
}: { 
  semNumber: number; 
  subjects: Subject[]; 
  isOpen: boolean; 
  onToggle: () => void;
  showSgpa?: boolean;
}) {
  const { getGrade, setGrade, getSelection, setSelection, extraSubjects, addExtraSubject, removeExtraSubject, regulation, department } = useGpaStore();
  
  // Elective Modal State
  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeElectiveGroup, setActiveElectiveGroup] = useState<string | null>(null);
  const [activeElectiveOptions, setActiveElectiveOptions] = useState<Subject[]>([]);
  const [activePlaceholder, setActivePlaceholder] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentExtraSubjects = extraSubjects[regulation]?.[department]?.[semNumber] || [];
  const combinedSubjects = [...subjects, ...currentExtraSubjects];

  const semesterInputs = combinedSubjects.map(s => {
    if (s.options) {
      const pickedCode = getSelection(semNumber, s.code);
      const pickedSubject = pickedCode ? s.options.find((opt: Subject) => opt.code === pickedCode) : null;
      return {
        credits: pickedSubject ? pickedSubject.credits : s.credits,
        type: pickedSubject ? pickedSubject.type : s.type,
        grade: pickedCode ? getGrade(semNumber, pickedCode) : ''
      };
    }
    return {
      credits: s.credits,
      type: s.type,
      grade: getGrade(semNumber, s.code)
    };
  });
  
  const sgpa = calculateSGPA(semesterInputs);
  const totalCredits = combinedSubjects.reduce((acc, s) => {
    if (s.options) {
      const pickedCode = getSelection(semNumber, s.code);
      const pickedSubject = pickedCode ? s.options.find((opt: Subject) => opt.code === pickedCode) : null;
      return acc + (pickedSubject ? pickedSubject.credits : 0);
    }
    return acc + s.credits;
  }, 0);
  
  const isComplete = combinedSubjects
    .filter(s => {
      const isOpt = !!s.options;
      const actualCredits = isOpt ? (getSelection(semNumber, s.code) ? s.options!.find((opt: Subject) => opt.code === getSelection(semNumber, s.code))?.credits || s.credits : s.credits) : s.credits;
      const actualType = isOpt ? (getSelection(semNumber, s.code) ? s.options!.find((opt: Subject) => opt.code === getSelection(semNumber, s.code))?.type || s.type : s.type) : s.type;
      return actualCredits > 0 && actualType !== 'mandatory';
    })
    .every(s => {
      if (s.options) {
        const pickedCode = getSelection(semNumber, s.code);
        return pickedCode ? !!getGrade(semNumber, pickedCode) : false;
      }
      return !!getGrade(semNumber, s.code);
    });

  const rows: React.ReactNode[] = [];

  const openElectivePicker = (placeholderCode: string, options: Subject[], label: string) => {
    setActiveElectiveGroup(label);
    setActiveElectiveOptions(options);
    setActivePlaceholder(placeholderCode);
    setPickerOpen(true);
  };

  combinedSubjects.forEach((s, index) => {
    const isExtra = currentExtraSubjects.some((ext: any) => ext.code === s.code);
    const isLastTwo = index >= combinedSubjects.length - 2;

    if (s.options) {
      const pickedCode = getSelection(semNumber, s.code);
      const pickedSubject = pickedCode ? s.options.find((opt: Subject) => opt.code === pickedCode) : null;
      
      if (pickedSubject) {
        rows.push(
          <SubjectRow 
            key={pickedSubject.code} 
            subject={pickedSubject} 
            grade={getGrade(semNumber, pickedSubject.code)} 
            onGradeChange={(val) => setGrade(semNumber, pickedSubject.code, val)}
            onElectiveChange={() => openElectivePicker(s.code, s.options!, s.name)} 
            dropUp={isLastTwo}
          />
        );
      } else {
        rows.push(
          <SubjectRow 
            key={`placeholder-${s.code}`}
            subject={s}
            grade=""
            onGradeChange={() => {}}
            isElectivePlaceholder={true}
            onElectiveChange={() => openElectivePicker(s.code, s.options!, s.name)}
            dropUp={isLastTwo}
          />
        );
      }
    } else {
      rows.push(
        <SubjectRow 
          key={s.code} 
          subject={s} 
          grade={getGrade(semNumber, s.code)} 
          onGradeChange={(val) => setGrade(semNumber, s.code, val)} 
          isExtraSubject={isExtra}
          onRemove={isExtra ? () => removeExtraSubject(semNumber, s.code) : undefined}
          dropUp={isLastTwo}
        />
      );
    }
  });

  return (
    <div className={cn(
      "glass-panel rounded-[2.5rem] mb-8 transition-weightless group animate-float depth-tilt border-primary/20",
      semNumber % 2 === 0 ? "animation-delay-500" : ""
    )}>
       <div 
         className="p-6 flex justify-between items-center cursor-pointer select-none relative overflow-hidden"
         onClick={onToggle}
       >
         <div className="flex items-center gap-5 z-10">
           <div className={cn(
             "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-weightless font-space-grotesque font-black text-sm",
             totalCredits > 0 
               ? "bg-primary border-white text-white shadow-[0_0_15px_rgba(255,85,0,0.4)]" 
               : "bg-white/5 border-white/10 text-white/40"
           )}>
             {semNumber}
           </div>
           <div>
             <h3 className="font-space-grotesque text-xs font-black text-white uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
               Semester {semNumber}
             </h3>
             <p className="text-[9px] font-space-grotesque font-black text-white/40 uppercase tracking-[0.2em] mt-1">
               {totalCredits > 0 ? `${totalCredits} Credits Synced` : 'Awaiting data'}
             </p>
           </div>
         </div>

         <div className="flex items-center gap-4 z-10">
           {showSgpa && sgpa > 0 && (
             <div className="flex flex-col items-end">
                <span className="text-[8px] font-space-grotesque font-black text-primary uppercase tracking-[0.2em] mb-1 text-glow-orange">Semester GPA</span>
               <span className="text-2xl font-space-grotesque font-black text-white tracking-tighter text-glow-orange">{sgpa.toFixed(2)}</span>
             </div>
           )}
           <div className={cn(
             "p-2 rounded-full transition-weightless",
             isOpen ? "bg-primary/20 text-primary rotate-180" : "text-white/30 group-hover:text-white"
           )}>
             <ChevronDown size={20} />
           </div>
         </div>
         
         {/* Subtle internal glow */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
       </div>

       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.4 }}
             onAnimationStart={() => setIsAnimating(true)}
             onAnimationComplete={() => setIsAnimating(false)}
             className={isAnimating ? "overflow-hidden" : "overflow-visible"}
           >
             <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-2 bg-white/[0.02] rounded-b-[2.5rem]">
               <div className="pt-6 flex flex-col gap-4 relative">
                 {rows.map((row, i) => (
                   <div key={i} className="relative transition-all duration-300 hover:!z-[70] focus-within:!z-[70]" style={{ zIndex: 50 - i }}>
                     {row}
                   </div>
                 ))}
                  <button 
                    onClick={() => openElectivePicker('EXTRA_SUBJECT', [], 'Additional Subject')}
                    className="w-full flex items-center justify-center gap-3 p-5 mt-2 border-2 border-dashed border-white/10 rounded-2xl text-white/40 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-weightless text-[10px] font-space-grotesque font-black uppercase tracking-[0.2em] active:scale-95 group relative z-0"
                  >
                    <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" /> Add Custom Subject
                  </button>
                   
                   <button 
                     onClick={() => {
                        if (confirm('Are you sure you want to reset all grades for Semester ' + semNumber + '?')) {
                           useGpaStore.getState().resetSemester(semNumber);
                        }
                     }}
                     className="w-full flex items-center justify-center gap-3 p-4 mt-2 bg-white/5 border border-[#FF4D4D]/20 rounded-2xl text-[#FF4D4D]/70 hover:text-[#FF4D4D] hover:border-[#FF4D4D]/40 hover:bg-[#FF4D4D]/10 transition-weightless text-[9px] font-space-grotesque font-black uppercase tracking-[0.3em] active:scale-95 group"
                   >
                     <RotateCcw size={14} strokeWidth={3} className="group-hover:-rotate-90 transition-transform duration-500" /> Reset Semester
                   </button>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>

       <ElectivePicker 
         isOpen={pickerOpen} 
         onClose={() => setPickerOpen(false)} 
         options={activeElectiveOptions} 
         groupLabel={activeElectiveGroup || ''}
         onSelect={(sub) => {
            if (activePlaceholder === 'EXTRA_SUBJECT') {
               addExtraSubject(semNumber, sub);
            } else if (activePlaceholder) {
               setSelection(semNumber, activePlaceholder, sub.code);
            }
         }}
       />
    </div>
  )
}
