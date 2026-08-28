import React, { useState } from 'react';
import { IslamicLogo } from './IslamicLogo';
import { 
  X, 
  Share2, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  BookOpen, 
  ShieldCheck, 
  Smartphone, 
  Copy, 
  ExternalLink,
  Code2,
  Clock,
  Flame,
  Globe,
  MessageCircle
} from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenShareApp?: () => void;
}

export const APP_VERSION = 'v2.6.4';
export const APP_RELEASE_DATE = 'August 2026';

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  if (!isOpen) return null;

  const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dailynoor-islam.web.app';

  const shareText = `🌙 Daily Noor (نورِ روزانہ) — 1 Quranic Verse & 1 Hadith Daily\nDaily spiritual routine for personal & family betterment with Urdu translations, audio recitation, prayer times & streak tracking.\n\nTry it online: ${appUrl}`;

  const handleShareApp = async () => {
    triggerHaptic('medium');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Noor — 1 Verse & 1 Hadith Daily',
          text: shareText,
          url: appUrl
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch (e) {
        // user dismissed
      }
    } else {
      await handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    triggerHaptic('light');
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch (e) {
      console.warn('Copy link failed', e);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#0B5D3C]/10 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <IslamicLogo size={46} variant="shield" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#0B5D3C] dark:text-[#E8EFEA]">
                  About Daily Noor
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] text-[10px] font-bold border border-[#C9A227]/30">
                  {APP_VERSION}
                </span>
              </div>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                نورِ روزانہ برائے ذاتی و خاندانی تربیت
              </p>
            </div>
          </div>

          <button
            id="about-modal-close-btn"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-2 rounded-xl text-[#4A5D53] dark:text-[#96A89F] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4 space-y-4 text-xs sm:text-sm text-[#2C3E35] dark:text-[#CFDDD5] max-h-[65vh] overflow-y-auto pr-1">
          
          {/* Mission Card */}
          <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10 space-y-2">
            <h4 className="font-bold text-[#0B5D3C] dark:text-[#E5C76B] flex items-center gap-1.5 text-xs">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span>Core Purpose & Mission</span>
            </h4>
            <p className="leading-relaxed text-xs">
              Daily Noor is an ad-free, non-commercial spiritual routine companion crafted to help individuals and families connect with the Quran and Sunnah every single day through bite-sized, impactful reflections.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            
            <div className="p-3 rounded-xl bg-white/60 dark:bg-[#142820]/70 border border-black/5 dark:border-white/5 space-y-1">
              <div className="flex items-center gap-1 font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Daily Verse</span>
              </div>
              <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-tight">
                365 Uthmani verses + Urdu translation, Tafseer & audio.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/60 dark:bg-[#142820]/70 border border-black/5 dark:border-white/5 space-y-1">
              <div className="flex items-center gap-1 font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Daily Hadith</span>
              </div>
              <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-tight">
                Authentic Hadith with character & family lessons.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/60 dark:bg-[#142820]/70 border border-black/5 dark:border-white/5 space-y-1">
              <div className="flex items-center gap-1 font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                <Clock className="w-3.5 h-3.5" />
                <span>Prayer Times</span>
              </div>
              <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-tight">
                GPS auto-detection & countdown to next prayer.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/60 dark:bg-[#142820]/70 border border-black/5 dark:border-white/5 space-y-1">
              <div className="flex items-center gap-1 font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                <Smartphone className="w-3.5 h-3.5" />
                <span>PWA & Offline</span>
              </div>
              <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-tight">
                Works offline, installable on mobile & desktop.
              </p>
            </div>

          </div>

          {/* Privacy & Data Authenticity */}
          <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10 space-y-1.5">
            <h4 className="font-bold text-[#0B5D3C] dark:text-[#E5C76B] flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Privacy & Authentic Sources</span>
            </h4>
            <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-relaxed">
              Your bookmarks, streaks, and settings are stored strictly locally on your own device. No user tracking or advertisements. Content is sourced from trusted collections (Tanzil, QuranCloud, Sahih Bukhari, Muslim, and Al-Nawawi).
            </p>
          </div>

          {/* Direct WhatsApp Suggestions & Feedback */}
          <div className="p-3.5 rounded-2xl bg-[#25D366]/10 dark:bg-[#25D366]/15 border border-[#25D366]/30 text-[#1D2B24] dark:text-[#E8EFEA] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-bold text-xs text-[#0B5D3C] dark:text-[#E8EFEA]">
                  Suggestions & Feedback / تجاویز و رائے
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#0B5D3C] dark:text-[#25D366] font-semibold">
                WhatsApp
              </span>
            </div>
            <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-relaxed">
              Have suggestions, feature requests, or feedback to make Daily Noor even better? Message directly on WhatsApp:
            </p>
            <a
              id="about-whatsapp-suggestion-link"
              href="https://wa.me/923331306603?text=Assalamu%20Alaikum%20Daily%20Noor%20Team%2C%20I%20have%20a%20suggestion%2Ffeedback%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerHaptic('medium')}
              className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Suggestion on WhatsApp (+92 333 1306603)</span>
            </a>
          </div>

          {/* Share with Family & Friends Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0B5D3C] to-[#073D27] text-white shadow-md space-y-3">
            <div>
              <p className="text-xs font-bold text-[#E5C76B] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Spread the Noor</span>
              </p>
              <p className="text-xs text-white/90 mt-1 leading-normal">
                Share this free app with your family, friends, and community groups for continuous reward (Sadqah Jariyah).
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                id="about-share-app-btn"
                onClick={handleShareApp}
                className="flex-1 py-2 px-3 rounded-xl bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                {shareSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Shared!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share This App</span>
                  </>
                )}
              </button>

              <button
                id="about-copy-link-btn"
                onClick={handleCopyLink}
                className="py-2 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1"
                title="Copy share link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Technical Specs & Version Note */}
          <div className="pt-2 text-center text-[11px] text-[#4A5D53] dark:text-[#96A89F] space-y-1">
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 font-arabic leading-relaxed" dir="rtl">
              مسرور خان اور ان کے اہل خانہ کو دعاؤں میں یاد رکھیں
            </p>
            <p className="font-semibold text-[#0B5D3C] dark:text-[#E8EFEA]">
              DailyNoor Islam • Version {APP_VERSION}
            </p>
            <p className="text-[10px] opacity-75">
              Built with React, Vite, Tailwind CSS, Zustand & PWA offline cache.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F]">
            Released: {APP_RELEASE_DATE}
          </span>
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-[#0B5D3C] hover:bg-[#084A30] text-white font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
