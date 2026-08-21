import React from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { Smartphone, Share2, Info, Sparkles, MessageCircle } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';
import { APP_VERSION } from './AboutModal';

interface FooterProps {
  onInstallClick?: () => void;
  canInstall?: boolean;
  onOpenCalendar?: () => void;
  onOpenBookmarks?: () => void;
  onOpenSummaryCard?: () => void;
  onOpenQuiz?: () => void;
  onOpenAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onInstallClick, 
  canInstall,
  onOpenCalendar,
  onOpenBookmarks,
  onOpenSummaryCard,
  onOpenQuiz,
  onOpenAbout
}) => {
  const { userCount, settings, updateSettings, resetToToday } = useDailyStore();

  const toggleFamilyMode = () => {
    triggerHaptic('medium');
    updateSettings({ familyMode: !settings.familyMode });
  };

  const handleShareApp = async () => {
    triggerHaptic('medium');
    const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://daily-noor.app';
    const shareText = `🌙 Daily Noor (نورِ روزانہ) — 1 Quranic Verse & 1 Hadith Daily\nSpiritual daily routine with Urdu translations, audio recitation, prayer times & streak tracking.\n\nTry it online: ${appUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Noor — 1 Verse & 1 Hadith Daily',
          text: shareText,
          url: appUrl
        });
      } catch (e) {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Daily Noor link copied to clipboard!');
      } catch (e) {
        console.warn(e);
      }
    }
  };

  return (
    <footer className="w-full mt-12 py-5 border-t border-[#0B5D3C]/10 dark:border-white/10 bg-white/50 dark:bg-[#142820]/60 backdrop-blur-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Section: Family Mode switch & Active Users */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div 
            onClick={toggleFamilyMode}
            className="flex items-center gap-2 cursor-pointer select-none group"
            title="Toggle Family Reflection Mode"
          >
            <div className={`relative w-11 h-6 rounded-full transition-colors p-1 ${
              settings.familyMode ? 'bg-[#0B5D3C]' : 'bg-slate-300 dark:bg-slate-700'
            }`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                settings.familyMode ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0B5D3C] dark:text-[#E8EFEA]">
              Family Mode
            </span>
          </div>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Active Seekers: <span className="font-bold text-[#0B5D3C] dark:text-[#E5C76B]">{userCount.toLocaleString()}+</span>
          </p>
        </div>

        {/* Middle Section: Quick Nav shortcuts */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <button
            onClick={() => {
              triggerHaptic('light');
              resetToToday();
            }}
            className="text-xs sm:text-sm font-bold text-[#0B5D3C] dark:text-[#E5C76B] border-b-2 border-[#0B5D3C] dark:border-[#E5C76B] pb-0.5"
          >
            Today
          </button>

          {onOpenCalendar && (
            <button
              onClick={() => {
                triggerHaptic('light');
                onOpenCalendar();
              }}
              className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] transition-colors"
            >
              Archive & Calendar
            </button>
          )}

          {onOpenBookmarks && (
            <button
              onClick={() => {
                triggerHaptic('light');
                onOpenBookmarks();
              }}
              className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] transition-colors"
            >
              Favorites
            </button>
          )}

          {onOpenQuiz && (
            <button
              onClick={() => {
                triggerHaptic('medium');
                onOpenQuiz();
              }}
              className="text-xs sm:text-sm font-semibold text-[#8F7212] dark:text-[#E5C76B] hover:underline transition-colors flex items-center gap-1"
            >
              <span>Daily Quiz</span>
            </button>
          )}

          {onOpenSummaryCard && (
            <button
              onClick={() => {
                triggerHaptic('medium');
                onOpenSummaryCard();
              }}
              className="text-xs sm:text-sm font-semibold text-[#8F7212] dark:text-[#E5C76B] hover:underline transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Summary Card</span>
            </button>
          )}

          <a
            id="footer-whatsapp-suggestions-btn"
            href="https://wa.me/923331306603?text=Assalamu%20Alaikum%20Daily%20Noor%20Team%2C%20I%20have%20a%20suggestion%2Ffeedback%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerHaptic('medium')}
            className="text-xs sm:text-sm font-semibold text-[#0B5D3C] dark:text-[#25D366] hover:underline transition-colors flex items-center gap-1.5 bg-[#25D366]/10 dark:bg-[#25D366]/20 px-2.5 py-1 rounded-full border border-[#25D366]/30"
            title="Send Suggestion or Feedback on WhatsApp (+92 333 1306603)"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20" />
            <span>Suggestions / تجاویز</span>
          </a>

          <button
            id="footer-share-app-btn"
            onClick={handleShareApp}
            className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] transition-colors flex items-center gap-1"
            title="Share Daily Noor with friends & family"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Share App</span>
          </button>

          {onOpenAbout && (
            <button
              id="footer-about-btn"
              onClick={() => {
                triggerHaptic('light');
                onOpenAbout();
              }}
              className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] transition-colors flex items-center gap-1"
            >
              <Info className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />
              <span>About ({APP_VERSION})</span>
            </button>
          )}

          {canInstall && onInstallClick && (
            <button
              id="footer-install-btn"
              onClick={() => {
                triggerHaptic('medium');
                onInstallClick();
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0B5D3C] text-white hover:bg-[#073D27] transition-all"
            >
              <Smartphone className="w-3 h-3" />
              <span>Install PWA</span>
            </button>
          )}
        </div>

        {/* Right Section: Non-commercial disclaimer & Version */}
        <div className="flex items-center gap-2 text-center md:text-right">
          <p className="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Non-Commercial • {APP_VERSION}
          </p>
        </div>

      </div>
    </footer>
  );
};
