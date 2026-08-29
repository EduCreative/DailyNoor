import React, { useEffect, useState } from 'react';
import { useDailyStore } from './store/useDailyStore';
import { Verse, Hadith } from './types';
import { EMBEDDED_VERSES, EMBEDDED_HADITHS } from './data/embeddedData';
import { loadMonthData } from './data/yearly/monthLoader';
import { registerMonthTafseers } from './data/tafseerData';
import { registerMonthDhikrs } from './data/dhikrData';
import { getDayOfYear, getDailyIndex, getTodayDateString } from './utils/dateUtils';
import { checkAndScheduleDailyReminder } from './utils/notification';
import { Header } from './components/Header';
import { PrayerTimesCard } from './components/PrayerTimesCard';
import { StreakBanner } from './components/StreakBanner';
import { VerseCard } from './components/VerseCard';
import { DailyTafseer } from './components/DailyTafseer';
import { HadithCard } from './components/HadithCard';
import { HistoryCalendarModal } from './components/HistoryCalendarModal';
import { BookmarksModal } from './components/BookmarksModal';
import { SettingsModal } from './components/SettingsModal';
import { DailySummaryCardModal } from './components/DailySummaryCardModal';
import { DailyQuizModal } from './components/DailyQuizModal';
import { DailyQuizCard } from './components/DailyQuizCard';
import { DuaCard } from './components/DuaCard';
import { DailyDhikrCard } from './components/DailyDhikrCard';
import { AllDuasModal } from './components/AllDuasModal';
import { AboutModal } from './components/AboutModal';
import { SplashScreen } from './components/SplashScreen';
import { Footer } from './components/Footer';
import { GlobalAudioPlayer } from './components/GlobalAudioPlayer';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { IslamicBackgroundPattern } from './components/IslamicBackgroundPattern';
import { Loader2, AlertCircle } from 'lucide-react';

export default function App() {
  const { selectedDate, settings } = useDailyStore();

  const [verses, setVerses] = useState<Verse[]>(EMBEDDED_VERSES);
  const [hadiths, setHadiths] = useState<Hadith[]>(EMBEDDED_HADITHS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal States
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSummaryCardOpen, setIsSummaryCardOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAllDuasOpen, setIsAllDuasOpen] = useState(false);

  // PWA Install prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  // Dynamic Monthly Data Import: imports only the requested month chunk on-demand
  useEffect(() => {
    let isCancelled = false;

    async function loadActiveMonthData() {
      try {
        const targetDate = selectedDate ? new Date(selectedDate + 'T00:00:00') : new Date();
        const monthNumber = targetDate.getMonth() + 1; // 1 to 12

        const data = await loadMonthData(monthNumber);
        if (isCancelled) return;

        if (Array.isArray(data.verses) && data.verses.length > 0) {
          setVerses(data.verses);
        }
        if (Array.isArray(data.hadiths) && data.hadiths.length > 0) {
          setHadiths(data.hadiths);
        }
        if (Array.isArray(data.tafseers) && data.tafseers.length > 0) {
          registerMonthTafseers(data.tafseers);
        }
        if (Array.isArray(data.dhikrs) && data.dhikrs.length > 0) {
          registerMonthDhikrs(data.dhikrs);
        }
      } catch (err: any) {
        console.warn('Dynamic monthly dataset load note:', err);
      }
    }

    loadActiveMonthData();
    return () => {
      isCancelled = true;
    };
  }, [selectedDate]);

  // Theme & Card Opacity Sync on Mount & Settings Change
  useEffect(() => {
    const activeTheme = settings.appTheme || (settings.darkMode ? 'midnight' : 'emerald');
    const root = document.documentElement;
    root.setAttribute('data-theme', activeTheme);
    root.classList.remove('theme-emerald', 'theme-midnight', 'theme-pearl');
    root.classList.add(`theme-${activeTheme}`);

    const cardOpacityVal = (settings.cardOpacity ?? 100) / 100;
    root.style.setProperty('--app-card-opacity', cardOpacityVal.toString());

    if (activeTheme === 'midnight') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [settings.appTheme, settings.darkMode, settings.cardOpacity]);

  // Daily Reminder Scheduler
  useEffect(() => {
    if (settings.reminderEnabled && settings.reminderTime) {
      const timer = checkAndScheduleDailyReminder(settings.reminderTime, true);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [settings.reminderEnabled, settings.reminderTime]);

  // PWA Install Event Listener
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };

  // Get active verse and hadith based on selected date
  const targetDateObj = selectedDate ? new Date(selectedDate + 'T00:00:00') : new Date();
  const dayOfYear = getDayOfYear(targetDateObj);

  const currentVerse = verses.find(v => v.day === dayOfYear) || verses[0];
  const currentHadith = hadiths.find(h => h.day === dayOfYear) || hadiths[0];

  const getAppBgClass = () => {
    if (settings.appTheme === 'midnight') return 'bg-[#0C1813] text-[#E8EFEA]';
    if (settings.appTheme === 'pearl') return 'bg-[#FAF8F5] text-[#1A2621]';
    return 'bg-[#F5F1E8] text-[#1D2B24]';
  };

  if (loading) {
    return <SplashScreen message="Loading Today's Daily Noor..." />;
  }

  return (
    <div className={`relative min-h-screen w-full flex flex-col ${getAppBgClass()} transition-colors duration-200`}>
      
      {/* Semi-transparent Islamic Art Background Pattern */}
      <IslamicBackgroundPattern opacity={settings.appTheme === 'midnight' ? 0.60 : 0.40} />

      {/* Sticky Header */}
      <Header
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSummaryCard={() => setIsSummaryCardOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 pt-4 pb-28 sm:pt-6 sm:pb-36">
        
        {/* PWA Install Banner */}
        {showInstallBanner && deferredPrompt && (
          <PWAInstallBanner
            onInstall={handleInstallPWA}
            onDismiss={() => setShowInstallBanner(false)}
          />
        )}

        {/* Small Elegant Daily Prayer Times Card */}
        <PrayerTimesCard />

        {/* Top Streak & Routine Progress Bar */}
        <StreakBanner 
          onOpenSummaryCard={() => setIsSummaryCardOpen(true)} 
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-300 text-center text-sm my-12">
            <AlertCircle className="w-6 h-6 mx-auto mb-2 text-rose-600" />
            <p className="font-semibold">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-semibold"
            >
              Retry
            </button>
          </div>
        )}

        {/* Cards Section: 1 Quranic Verse & 1 Hadith (2-Column Grid on Desktop) */}
        {!loading && currentVerse && currentHadith && (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
              
              {/* Section 1: Today's Verse & Daily Tafseer */}
              <section id="section-daily-verse" className="h-full flex flex-col justify-between">
                <VerseCard verse={currentVerse} dateStr={selectedDate} />
                <DailyTafseer verse={currentVerse} dateStr={selectedDate} />
              </section>

              {/* Section 2: Today's Hadith */}
              <section id="section-daily-hadith" className="h-full">
                <HadithCard hadith={currentHadith} dateStr={selectedDate} />
              </section>

            </div>

            {/* Section 3: Daily Islamic Reflection Quiz Card (Placed immediately after Daily Hadith & Verse) */}
            {settings.showDailyQuiz !== false && (
              <DailyQuizCard
                verse={currentVerse}
                hadith={currentHadith}
                dateStr={selectedDate}
                onOpenQuiz={() => setIsQuizOpen(true)}
              />
            )}

            {/* Section 4: Daily Dhikr & Tasbih Counter Card */}
            {settings.showDailyDhikr !== false && (
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <DailyDhikrCard dateStr={selectedDate} />
              </div>
            )}

            {/* Section 5: Masnoon Dua of the Week Card (Collapsed by Default) */}
            {settings.showDuaOfTheWeek !== false && (
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <DuaCard 
                  dateStr={selectedDate} 
                  onOpenAllDuas={() => setIsAllDuasOpen(true)} 
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onInstallClick={deferredPrompt ? handleInstallPWA : undefined}
        canInstall={!!deferredPrompt}
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSummaryCard={() => setIsSummaryCardOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Modals & Drawers */}
      <HistoryCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        verses={verses}
        hadiths={hadiths}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <AllDuasModal
        isOpen={isAllDuasOpen}
        onClose={() => setIsAllDuasOpen(false)}
      />

      {currentVerse && currentHadith && (
        <>
          <DailySummaryCardModal
            isOpen={isSummaryCardOpen}
            onClose={() => setIsSummaryCardOpen(false)}
            verse={currentVerse}
            hadith={currentHadith}
            dateStr={selectedDate}
          />

          <DailyQuizModal
            isOpen={isQuizOpen}
            onClose={() => setIsQuizOpen(false)}
            verse={currentVerse}
            hadith={currentHadith}
            dateStr={selectedDate}
          />
        </>
      )}

      {/* Global Persistent Audio Player */}
      <GlobalAudioPlayer currentVerse={currentVerse} currentHadith={currentHadith} />

    </div>
  );
}
