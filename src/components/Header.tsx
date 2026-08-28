import React, { useState, useEffect } from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { formatReadableDate, getEstimatedHijriDate, getTodayDateString } from '../utils/dateUtils';
import { triggerHaptic } from '../utils/haptics';
import { IslamicLogo } from './IslamicLogo';
import { 
  Calendar, 
  Moon, 
  Sun, 
  Palette,
  Settings as SettingsIcon, 
  Users, 
  Bookmark, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  Info,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { getUserLocationName, getSavedLocation } from '../utils/prayerTimes';

interface HeaderProps {
  onOpenCalendar: () => void;
  onOpenSettings: () => void;
  onOpenBookmarks: () => void;
  onOpenSummaryCard?: () => void;
  onOpenQuiz?: () => void;
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalendar,
  onOpenSettings,
  onOpenBookmarks,
  onOpenSummaryCard,
  onOpenQuiz,
  onOpenAbout
}) => {
  const { 
    selectedDate, 
    resetToToday, 
    getStreakInfo, 
    settings, 
    updateSettings,
    bookmarks 
  } = useDailyStore();

  const [currentLocation, setCurrentLocation] = useState(getSavedLocation());

  useEffect(() => {
    const handleLocationChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setCurrentLocation(customEvent.detail || getSavedLocation());
    };
    window.addEventListener('daily_noor_location_changed', handleLocationChange);
    return () => {
      window.removeEventListener('daily_noor_location_changed', handleLocationChange);
    };
  }, []);

  const isToday = selectedDate === getTodayDateString();
  const streakInfo = getStreakInfo();
  const dateInfo = formatReadableDate(selectedDate);
  const hijriInfo = getEstimatedHijriDate(
    new Date(selectedDate + 'T00:00:00'),
    currentLocation,
    settings.hijriDateAdjustment
  );

  const currentTheme = settings.appTheme || (settings.darkMode ? 'midnight' : 'emerald');

  const cycleTheme = () => {
    triggerHaptic('medium');
    let nextTheme: 'emerald' | 'midnight' | 'pearl' = 'emerald';
    if (currentTheme === 'emerald') nextTheme = 'midnight';
    else if (currentTheme === 'midnight') nextTheme = 'pearl';
    else if (currentTheme === 'pearl') nextTheme = 'emerald';

    updateSettings({ appTheme: nextTheme });
  };

  const getThemeDetails = () => {
    if (currentTheme === 'midnight') {
      return {
        title: "Theme: Midnight Obsidian (Click to switch to Pearl Alabaster)",
        icon: <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5C76B]" />,
        label: "Midnight"
      };
    }
    if (currentTheme === 'pearl') {
      return {
        title: "Theme: Pearl Alabaster (Click to switch to Royal Emerald)",
        icon: <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5F1E8]" />,
        label: "Pearl"
      };
    }
    return {
      title: "Theme: Royal Emerald (Click to switch to Midnight Obsidian)",
      icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A227]" />,
      label: "Emerald"
    };
  };

  const themeDetails = getThemeDetails();

  const toggleFamilyMode = () => {
    triggerHaptic('medium');
    updateSettings({ familyMode: !settings.familyMode });
  };

  const getHeaderBgClass = () => {
    if (currentTheme === 'midnight') return 'bg-[#05140D]/95 border-b border-[#C9A227]/30 text-[#E8EFEA] shadow-md';
    if (currentTheme === 'pearl') return 'bg-[#1C3D2F]/95 border-b border-[#C9A227]/40 text-[#F5F1E8] shadow-md';
    return 'bg-[#0B5D3C]/95 border-b border-[#C9A227]/20 text-[#F5F1E8] shadow-md';
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md ${getHeaderBgClass()} transition-colors duration-200`}>
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink min-w-0">
            <button 
              id="header-logo-button"
              onClick={() => {
                triggerHaptic('light');
                resetToToday();
              }} 
              className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none min-w-0"
              title="Daily Noor - Return to Today"
            >
              <div className="relative group-hover:scale-105 transition-transform duration-200 shrink-0">
                <IslamicLogo size={34} variant="shield" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#F5F1E8] flex items-center gap-1.5 truncate">
                  <span>Daily Noor</span>
                </h1>
                <p className="text-[11px] text-[#F5F1E8]/80 font-medium leading-none hidden sm:block mt-0.5">
                  1 Verse & 1 Hadith Daily • <span className="font-urdu text-xs text-[#E5C76B]">نورِ روزانہ</span>
                </p>
              </div>
            </button>
          </div>

          {/* Quick Action Badges & Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            
            {/* Streak Counter Pill */}
            <button
              id="header-streak-badge"
              onClick={() => {
                triggerHaptic('light');
                onOpenCalendar();
              }}
              className="flex items-center bg-[#084a30] px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#C9A227]/30 text-xs sm:text-sm font-semibold hover:bg-[#063b26] transition-colors shrink-0"
              title={`Streak: ${streakInfo.currentStreak} days completed`}
            >
              <span className="text-[#C9A227] mr-1">🔥</span>
              <span className="font-semibold text-white">{streakInfo.currentStreak}</span>
              <span className="hidden md:inline text-xs opacity-80 ml-1">Day Streak</span>
            </button>

            {/* Family Mode Pill Toggle (Hidden on mobile < md) */}
            <button
              id="header-family-toggle"
              onClick={toggleFamilyMode}
              className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all shrink-0 ${
                settings.familyMode
                  ? 'bg-[#C9A227] text-[#0B5D3C] border-[#C9A227] shadow-xs'
                  : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20'
              }`}
              title={settings.familyMode ? "Family Discussion Mode ON" : "Family Discussion Mode OFF"}
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>Family Mode</span>
            </button>

            {/* Combined Daily Summary Card Button */}
            {onOpenSummaryCard && (
              <button
                id="header-summary-card-button"
                onClick={() => {
                  triggerHaptic('medium');
                  onOpenSummaryCard();
                }}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-[#C9A227] transition-colors inline-flex shrink-0 border border-[#C9A227]/30 bg-black/10 hover:border-[#C9A227]/60"
                title="Generate & Share Daily Summary Card"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A227]" />
              </button>
            )}

            {/* Controls Group */}
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              
              {/* Theme Toggle Button (Emerald -> Midnight -> Pearl) */}
              <button
                id="header-theme-toggle"
                onClick={cycleTheme}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-white/90 transition-all flex items-center gap-1 border border-white/10 bg-black/10 hover:border-white/30"
                title={themeDetails.title}
              >
                {themeDetails.icon}
                <span className="text-[10px] sm:text-xs font-semibold hidden lg:inline tracking-wide opacity-95">
                  {themeDetails.label}
                </span>
              </button>

              {/* Bookmarks / Favorites Button */}
              <button
                id="header-bookmarks-button"
                onClick={() => {
                  triggerHaptic('light');
                  onOpenBookmarks();
                }}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-white/90 transition-colors relative"
                title="Saved Verses & Hadiths"
              >
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                {bookmarks.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C9A227]" />
                )}
              </button>

              {/* Calendar / Archive Button */}
              <button
                id="header-calendar-button"
                onClick={() => {
                  triggerHaptic('light');
                  onOpenCalendar();
                }}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                title="30-Day Routine Calendar"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Daily Quiz Button (Visible on sm+ screens; on mobile available in StreakBanner) */}
              {onOpenQuiz && (
                <button
                  id="header-quiz-button"
                  onClick={() => {
                    triggerHaptic('medium');
                    onOpenQuiz();
                  }}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-[#E5C76B] transition-colors hidden sm:inline-flex"
                  title="Daily Islamic Reflection Quiz"
                >
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* WhatsApp Suggestion Button */}
              <a
                id="header-whatsapp-suggestion-button"
                href="https://wa.me/923331306603?text=Assalamu%20Alaikum%20Daily%20Noor%20Team%2C%20I%20have%20a%20suggestion%2Ffeedback%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerHaptic('medium')}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-[#25D366] transition-colors hidden xs:inline-flex"
                title="Send Suggestion or Feedback on WhatsApp (+92 333 1306603)"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366]/20" />
              </a>

              {/* About Button */}
              {onOpenAbout && (
                <button
                  id="header-about-button"
                  onClick={() => {
                    triggerHaptic('light');
                    onOpenAbout();
                  }}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-white/90 transition-colors hidden md:inline-flex"
                  title="About Daily Noor & Version"
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* Settings Button */}
              <button
                id="header-settings-button"
                onClick={() => {
                  triggerHaptic('light');
                  onOpenSettings();
                }}
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                title="Preferences & Settings"
              >
                <SettingsIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Sub-strip with Hijri & Gregorian date + User Location Name */}
        <div className="mt-2 pt-1.5 sm:pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#F5F1E8]/80 font-medium">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap min-w-0">
            <span className="text-[#C9A227] font-semibold font-urdu shrink-0" dir="rtl">
              {hijriInfo.formatted}
            </span>
            <span className="opacity-40 shrink-0">•</span>
            <span className="hidden sm:inline shrink-0">{dateInfo.english}</span>
            <span className="sm:hidden shrink-0">{dateInfo.urdu}</span>
            <span className="opacity-40 shrink-0">•</span>
            <button
              id="header-user-location-badge"
              onClick={() => {
                triggerHaptic('light');
                onOpenSettings();
              }}
              className="flex items-center gap-1 text-[11px] font-semibold text-[#E5C76B] hover:text-white transition-colors cursor-pointer bg-white/10 px-2 py-0.5 rounded-full border border-white/15 max-w-[120px] xs:max-w-[160px] sm:max-w-[220px]"
              title="Click to view or change location"
            >
              <MapPin className="w-3 h-3 text-[#C9A227] shrink-0" />
              <span className="truncate">{getUserLocationName()}</span>
            </button>
          </div>

          {!isToday && (
            <button
              id="header-back-today-pill"
              onClick={() => {
                triggerHaptic('light');
                resetToToday();
              }}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#C9A227] hover:underline shrink-0"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Back to Today</span>
            </button>
          )}

          {isToday && (
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#C9A227] font-semibold shrink-0">
              <Sparkles className="w-3 h-3" />
              <span>Today's Routine</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
