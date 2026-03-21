import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesque'
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'GPAfy — Anna University GPA & CGPA',
  description: 'Unofficial AU GPA calculator with completely accurate grade tracking.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(
        "min-h-screen bg-black font-outfit antialiased pb-20 md:pb-0 overflow-x-hidden selection:bg-[#FF5500]/30",
        spaceGrotesk.variable,
        outfit.variable
      )}>
        {/* Modern Black Background elements */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a0a00_0%,#000000_70%)] opacity-60" />
          <div className="stars-container absolute inset-0 opacity-30" />
        </div>

        <header className="sticky top-0 z-50 w-full transition-all duration-500 bg-[#050505]/95 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="py-5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black tracking-tighter font-space-grotesque text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FF5500] to-[#FFFFFF] animate-shimmer-orange drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
                  GPAfy
                </span>
              </div>

            </div>
            <div className="bg-gradient-to-r from-transparent via-[#FF5500]/15 to-transparent text-[#FF5500] text-[9px] py-2 px-4 text-center font-space-grotesque font-black uppercase tracking-[0.5em] border-y border-white/5">
              • Precision GPA Calculator •
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative perspective-[2000px]">
          {children}
        </main>
      </body>
    </html>
  );
}
