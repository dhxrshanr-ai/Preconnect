import { Share2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function ShareCard({ cgpa }: { cgpa: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      const shareData = {
        title: 'My GPAfy Result',
        text: `I just calculated my CGPA: ${parseFloat(cgpa).toFixed(2)}! Check yours on GPAfy.`, // Fixed rounding and used cgpa
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback for browsers that don't support navigator.share or clipboard API
      // or if user cancels share
      alert('Could not share. Please copy the link manually.');
    }
  };

  return (
    <div className="w-full glass-panel bg-[#111111]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 border-primary/30 relative overflow-hidden group/share transition-shadow animate-float depth-tilt">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 z-10 relative">
        <div className="text-center sm:text-left">
          <p className="text-[10px] font-space-grotesque font-black text-primary uppercase tracking-[0.4em] mb-3 text-glow-orange">Transmission Ready</p>
          <h3 className="text-xl font-outfit font-black text-white leading-tight tracking-tight">Broadcast your stellar performance</h3>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white font-space-grotesque font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,85,0,0.6)] hover:shadow-[0_0_45px_rgba(255,85,0,0.8)] transition-shadow solar-glow"
        >
          <Share2 size={18} strokeWidth={3} />
          {copied ? 'CARRIER SYNCED' : 'INITIALIZE SHARE'}
        </motion.button>
      </div>
    </div>
  )
}
