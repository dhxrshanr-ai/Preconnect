export function StickyResultBar({ sgpa }: { sgpa: number }) {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-40 glass-space bg-orange-500/80 backdrop-blur-2xl border-white/20 p-5 rounded-[2.5rem] shadow-[0_0_40px_rgba(255,140,0,0.4)] md:hidden animate-float transition-weightless text-white">
      <div className="flex justify-center items-center max-w-3xl mx-auto px-4 gap-4">
        <span className="text-xs text-white/80 font-space-grotesque font-black tracking-[0.3em] uppercase text-glow-orange">Current GPA</span>
        <span className="text-2xl font-space-grotesque font-black tracking-tighter text-white text-glow-orange">
          {sgpa > 0 ? sgpa.toFixed(2) : '0.00'}
        </span>
      </div>
    </div>
  )
}
