import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { IslamicLogo } from './IslamicLogo';

interface PWAInstallBannerProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ onInstall, onDismiss }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-5">
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0B5D3C] to-[#073D27] text-white shadow-md flex items-center justify-between gap-3 border border-[#C9A227]/30">
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <IslamicLogo size={40} variant="shield" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Install Daily Noor on Your Device
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-[#C9A227] text-[#0C1813] font-bold">
                PWA
              </span>
            </div>
            <p className="text-[11px] text-white/80 line-clamp-1">
              Read 365 daily verses & Hadiths offline with 1-tap home screen access.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="pwa-install-banner-accept-btn"
            onClick={onInstall}
            className="px-3.5 py-1.5 rounded-xl bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] text-xs font-bold shadow-xs transition-colors shrink-0"
          >
            Install
          </button>
          <button
            id="pwa-install-banner-dismiss-btn"
            onClick={onDismiss}
            className="p-1 rounded-lg text-white/70 hover:bg-white/10 transition-colors"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
