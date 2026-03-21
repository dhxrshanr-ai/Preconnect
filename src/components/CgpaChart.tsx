import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ChartData {
  sem: number;
  sgpa: number;
  cgpa: number;
}

export function CgpaChart({ data }: { data: ChartData[] }) {
  if (!data || data.length === 0) return null;

  const validSgpas = data.filter(d => d.sgpa > 0).map(d => d.sgpa);
  const maxSgpa = Math.max(...validSgpas, 10);
  const bestSgpa = Math.max(...validSgpas);
  const lowestSgpa = Math.min(...validSgpas);

  return (
    <div className="glass-panel p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(255,85,0,0.1)] mb-8 transition-shadow animate-float depth-tilt border-primary/20">
      <h3 className="text-[10px] font-space-grotesque font-black text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-3 text-glow-orange">
         <span className="w-6 h-px bg-primary/30" /> Statistics
      </h3>
      <div className="flex items-end justify-between h-52 gap-4 mt-6">
        {data.map((d) => {
          const heightPct = d.sgpa > 0 ? (d.sgpa / maxSgpa) * 100 : 0;
          const isBest = d.sgpa === bestSgpa && d.sgpa > 0;
          const isLowest = d.sgpa === lowestSgpa && d.sgpa > 0 && validSgpas.length > 1;

          return (
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              key={d.sem} 
              className="flex flex-col items-center flex-1 group relative"
            >
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-space-grotesque font-black text-white bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/30 shadow-[0_0_20px_rgba(255,85,0,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-14 z-20 text-glow-orange">
                 {d.sgpa > 0 ? d.sgpa.toFixed(2) : '-'}
               </div>
               <div className="w-full max-w-[40px] h-full bg-white/5 rounded-2xl relative flex items-end justify-center overflow-hidden border border-white/10 shadow-inner">
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: `${heightPct}%` }}
                   transition={{ duration: 1, type: "spring", stiffness: 50 }}
                   className={cn(
                     "w-full rounded-2xl",
                     isBest ? "bg-primary shadow-[0_0_20px_rgba(255,85,0,0.6)]" : isLowest ? "bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.6)]" : "bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                   )}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               </div>
               <span className="text-[11px] font-space-grotesque font-black text-white mt-4 text-glow-white">S{d.sem}</span>
               <span className="text-[9px] font-outfit font-black text-white/40 mt-1">{d.cgpa > 0 ? d.cgpa.toFixed(2) : '-'}</span>
            </motion.div>
          )
        })}
      </div>
      <div className="flex items-center gap-6 mt-8 justify-center border-t border-white/5 pt-8">
        <div className="flex items-center gap-2.5 text-[10px] font-space-grotesque font-black text-white/50 uppercase tracking-[0.2em]"><div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(255,85,0,0.6)]" /> Peak</div>
        <div className="flex items-center gap-2.5 text-[10px] font-space-grotesque font-black text-white/50 uppercase tracking-[0.2em]"><div className="w-3 h-3 rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" /> GPA</div>
        <div className="flex items-center gap-2.5 text-[10px] font-space-grotesque font-black text-white/50 uppercase tracking-[0.2em]"><div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" /> Nadir</div>
      </div>
    </div>
  )
}
