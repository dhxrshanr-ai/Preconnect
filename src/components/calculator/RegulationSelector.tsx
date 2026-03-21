import React from 'react';
import { Settings } from 'lucide-react';
import { useGPAStore } from '@/store/useGPAStore';
import { REGULATION_OPTIONS } from '@/data/regulations';

export const RegulationSelector: React.FC = () => {
  const { regulation, setRegulation } = useGPAStore();

  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 hover:bg-white/10 transition-all group">
      <Settings className="w-4 h-4 text-white/40 group-hover:text-primary group-hover:rotate-90 transition-all" />
      <select
        value={regulation}
        onChange={(e) => setRegulation(e.target.value as any)}
        className="bg-transparent text-sm font-bold text-white outline-none cursor-pointer pr-2 appearance-none"
      >
        {REGULATION_OPTIONS.map((option) => (
          <option key={option.value} value={option.value} className="bg-gray-900">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
