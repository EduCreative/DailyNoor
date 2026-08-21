import React from 'react';
import { IslamicLogo } from './IslamicLogo';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  message?: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ 
  message = "Opening Daily Noor..." 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#073D27] via-[#0B5D3C] to-[#042618] text-[#F5F1E8] p-6 selection:bg-[#C9A227]/30">
      
      {/* Background Sacred Geometric Mandala Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
        <svg 
          viewBox="0 0 600 600" 
          className="w-[650px] h-[650px] animate-[spin_60s_linear_infinite]"
        >
          <g stroke="#C9A227" strokeWidth="1.5" fill="none">
            <circle cx="300" cy="300" r="280" />
            <circle cx="300" cy="300" r="240" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="180" />
            <circle cx="300" cy="300" r="120" />
            <rect x="180" y="180" width="240" height="240" />
            <rect x="180" y="180" width="240" height="240" transform="rotate(45 300 300)" />
            <rect x="180" y="180" width="240" height="240" transform="rotate(22.5 300 300)" />
            <rect x="180" y="180" width="240" height="240" transform="rotate(67.5 300 300)" />
          </g>
        </svg>
      </div>

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        
        {/* Bismillah Opening Calligraphy */}
        <p className="font-arabic text-[#E5C76B] text-lg sm:text-xl font-bold mb-6 tracking-wide drop-shadow-sm opacity-90">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Grand Islamic Art Logo Container */}
        <div className="relative mb-6 group">
          {/* Animated Gold Aura */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#C9A227] via-[#E5C76B] to-[#C9A227] opacity-30 blur-lg animate-pulse" />
          
          <div className="relative p-1 rounded-3xl bg-gradient-to-b from-[#E5C76B] via-[#C9A227] to-[#8F7212] shadow-2xl">
            <IslamicLogo size={104} variant="shield" />
          </div>
        </div>

        {/* App Title with Urdu Calligraphy */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Daily Noor</span>
        </h1>
        
        <p className="text-sm font-urdu text-[#E5C76B] mt-1 text-base font-semibold" dir="rtl">
          نورِ روزانہ — قرآن و حدیث
        </p>

        <p className="text-xs text-white/75 mt-2 font-medium">
          1 Quranic Verse & 1 Hadith Daily
        </p>

        {/* Loading Indicator */}
        <div className="mt-8 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/20 border border-[#C9A227]/30 backdrop-blur-xs">
          <div className="w-4 h-4 border-2 border-[#C9A227] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium text-[#E5C76B]">{message}</span>
        </div>

      </div>

      {/* Bottom Footer Note */}
      <div className="absolute bottom-6 text-center text-[11px] text-white/50">
        Personal & Family Spiritual Routine • Offline Ready
      </div>

    </div>
  );
};
