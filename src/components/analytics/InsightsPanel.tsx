import React from 'react';
import { Lightbulb, CheckCircle2, AlertCircle, TrendingUp, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGPAStore } from '@/store/useGPAStore';

export const InsightsPanel: React.FC = () => {
  const { getInsights } = useGPAStore();
  const insights = getInsights();

  return (
    <div className="bg-card border border-white/5 rounded-[32px] p-6 shadow-2xl overflow-hidden relative group">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
          <Lightbulb size={20} />
        </div>
        <div>
          <h2 className="text-xl font-black italic tracking-tight">SMART INSIGHTS</h2>
          <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Academic Analysis</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
              insight.isPositive 
                ? 'bg-success-green/5 border-success-green/10 hover:border-success-green/30' 
                : 'bg-danger-red/5 border-danger-red/10 hover:border-danger-red/30'
            }`}
          >
            <div className={`mt-1 ${insight.isPositive ? 'text-success-green' : 'text-danger-red'}`}>
              {insight.type === 'eligibility' && <CheckCircle2 size={18} />}
              {insight.type === 'warning' && <AlertCircle size={18} />}
              {insight.type === 'achievement' && <Trophy size={18} />}
              {insight.type === 'info' && <TrendingUp size={18} />}
            </div>
            <p className={`text-sm font-bold ${insight.isPositive ? 'text-white/80' : 'text-white/60'}`}>
              {insight.message}
            </p>
          </motion.div>
        ))}

        {insights.length === 0 && (
          <div className="py-8 text-center text-white/20 italic font-medium">
            Add data to unlock academic insights
          </div>
        )}
      </div>
    </div>
  );
};
