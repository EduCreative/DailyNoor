import { create } from './createStore';
import { AppSettings, BookmarkItem, DayProgress } from '../types';
import { calculateStreak, getTodayDateString } from '../utils/dateUtils';
import confetti from 'canvas-confetti';

const STORAGE_KEYS = {
  HISTORY: 'daily_noor_history',
  SETTINGS: 'daily_noor_settings',
  BOOKMARKS: 'daily_noor_bookmarks',
  USER_COUNT_OFFSET: 'daily_noor_user_offset',
  MEMORIZED_DUAS: 'daily_noor_memorized_duas',
  DHIKR_PROGRESS: 'daily_noor_dhikr_progress'
};

const DEFAULT_SETTINGS: AppSettings = {
  reminderEnabled: false,
  reminderTime: '19:00', // 7:00 PM default
  fontSize: 'normal',
  familyMode: true, // Default ON to encourage family discussion
  audioAutoplay: false,
  audioSpeed: 1,
  darkMode: true,
  appTheme: 'midnight',
  cardOpacity: 100,
  hapticsEnabled: true,
  showDailyDhikr: true,
  showDuaOfTheWeek: true,
  showDailyQuiz: true,
  hijriDateAdjustment: 'auto',
  tafseerSourceUrdu: 'embedded',
  tafseerSourceEn: 'embedded-en',
  tafseerSourceShaneNazool: 'asbab-al-nuzul-wahidi',
  qariVoice: 'Alafasy_128kbps',
  reciterVoice: 'jalandhari'
};

interface DailyStoreState {
  selectedDate: string;
  history: Record<string, DayProgress>;
  settings: AppSettings;
  bookmarks: BookmarkItem[];
  memorizedDuas: number[];
  dhikrProgress: Record<string, number>;
  userCount: number;
  showCelebration: boolean;

  // Actions
  setSelectedDate: (date: string) => void;
  resetToToday: () => void;
  toggleVerseRead: (dateStr?: string) => void;
  toggleHadithRead: (dateStr?: string) => void;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  toggleBookmark: (item: { id: string; type: 'verse' | 'hadith' | 'dua'; day: number }) => void;
  isBookmarked: (id: string) => boolean;
  toggleDuaMemorized: (week: number) => void;
  isDuaMemorized: (week: number) => boolean;
  getDhikrCount: (key: string) => number;
  setDhikrCount: (key: string, count: number) => void;
  incrementDhikrCount: (key: string, targetCount: number, delta?: number) => void;
  saveQuizResult: (dateStr: string, score: number, total: number) => void;
  getStreakInfo: () => { currentStreak: number; bestStreak: number; totalCompletedDays: number };
  getProgressForDate: (dateStr: string) => DayProgress;
  resetAllData: () => void;
}

const loadJson = <T>(key: string, fallback: T): T => {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};

const saveJson = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('LocalStorage write error:', e);
  }
};

// Base user count + dynamic organic variance based on day
const computeUserCount = (): number => {
  const baseCount = 18450;
  const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const userOffset = Number(localStorage.getItem(STORAGE_KEYS.USER_COUNT_OFFSET) || '0');
  return baseCount + (daysSinceEpoch % 300) * 14 + userOffset;
};

export const useDailyStore = create<DailyStoreState>((set, get) => {
  const initialHistory = loadJson<Record<string, DayProgress>>(STORAGE_KEYS.HISTORY, {});
  const initialSettings = { ...DEFAULT_SETTINGS, ...loadJson<Partial<AppSettings>>(STORAGE_KEYS.SETTINGS, {}) };
  const initialBookmarks = loadJson<BookmarkItem[]>(STORAGE_KEYS.BOOKMARKS, []);
  const initialMemorizedDuas = loadJson<number[]>(STORAGE_KEYS.MEMORIZED_DUAS, []);
  const initialDhikrProgress = loadJson<Record<string, number>>(STORAGE_KEYS.DHIKR_PROGRESS, {});

  return {
    selectedDate: getTodayDateString(),
    history: initialHistory,
    settings: initialSettings,
    bookmarks: initialBookmarks,
    memorizedDuas: initialMemorizedDuas,
    dhikrProgress: initialDhikrProgress,
    userCount: computeUserCount(),
    showCelebration: false,

    setSelectedDate: (date: string) => {
      set({ selectedDate: date });
    },

    resetToToday: () => {
      set({ selectedDate: getTodayDateString() });
    },

    toggleVerseRead: (dateStr?: string) => {
      const targetDate = dateStr || get().selectedDate;
      const history = { ...get().history };
      const current = history[targetDate] || {
        date: targetDate,
        verseRead: false,
        hadithRead: false,
        completed: false
      };

      const newVerseRead = !current.verseRead;
      const isCompleted = newVerseRead && current.hadithRead;

      history[targetDate] = {
        ...current,
        verseRead: newVerseRead,
        completed: isCompleted,
        completedAt: isCompleted ? new Date().toISOString() : current.completedAt
      };

      saveJson(STORAGE_KEYS.HISTORY, history);
      set({ history });

      if (isCompleted && !current.completed) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B5D3C', '#C9A227', '#E5C76B', '#F5F1E8']
        });
      }
    },

    toggleHadithRead: (dateStr?: string) => {
      const targetDate = dateStr || get().selectedDate;
      const history = { ...get().history };
      const current = history[targetDate] || {
        date: targetDate,
        verseRead: false,
        hadithRead: false,
        completed: false
      };

      const newHadithRead = !current.hadithRead;
      const isCompleted = current.verseRead && newHadithRead;

      history[targetDate] = {
        ...current,
        hadithRead: newHadithRead,
        completed: isCompleted,
        completedAt: isCompleted ? new Date().toISOString() : current.completedAt
      };

      saveJson(STORAGE_KEYS.HISTORY, history);
      set({ history });

      if (isCompleted && !current.completed) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B5D3C', '#C9A227', '#E5C76B', '#F5F1E8']
        });
      }
    },

    updateSettings: (newSettings: Partial<AppSettings>) => {
      const current = get().settings;
      let updated = { ...current, ...newSettings };

      // Sync appTheme and darkMode
      if (newSettings.appTheme !== undefined) {
        updated.darkMode = updated.appTheme === 'midnight';
      } else if (newSettings.darkMode !== undefined) {
        if (newSettings.darkMode) {
          updated.appTheme = 'midnight';
        } else if (updated.appTheme === 'midnight') {
          updated.appTheme = 'emerald';
        }
      }

      if (!updated.appTheme) {
        updated.appTheme = updated.darkMode ? 'midnight' : 'emerald';
      }

      saveJson(STORAGE_KEYS.SETTINGS, updated);

      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        root.setAttribute('data-theme', updated.appTheme);
        root.classList.remove('theme-emerald', 'theme-midnight', 'theme-pearl', 'theme-daylight');
        root.classList.add(`theme-${updated.appTheme}`);

        const cardOpacityVal = (updated.cardOpacity ?? 100) / 100;
        root.style.setProperty('--app-card-opacity', cardOpacityVal.toString());

        if (updated.appTheme === 'midnight') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }

      set({ settings: updated });
    },

    toggleBookmark: (item) => {
      const bookmarks = [...get().bookmarks];
      const index = bookmarks.findIndex(b => b.id === item.id);

      if (index >= 0) {
        bookmarks.splice(index, 1);
      } else {
        bookmarks.push({
          ...item,
          savedAt: new Date().toISOString()
        });
      }

      saveJson(STORAGE_KEYS.BOOKMARKS, bookmarks);
      set({ bookmarks });
    },

    isBookmarked: (id: string) => {
      return get().bookmarks.some(b => b.id === id);
    },

    toggleDuaMemorized: (week: number) => {
      const current = [...get().memorizedDuas];
      const index = current.indexOf(week);
      if (index >= 0) {
        current.splice(index, 1);
      } else {
        current.push(week);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C9A227', '#0B5D3C', '#E5C76B']
        });
      }
      saveJson(STORAGE_KEYS.MEMORIZED_DUAS, current);
      set({ memorizedDuas: current });
    },

    isDuaMemorized: (week: number) => {
      return get().memorizedDuas.includes(week);
    },

    getDhikrCount: (key: string) => {
      return get().dhikrProgress[key] || 0;
    },

    setDhikrCount: (key: string, count: number) => {
      const dhikrProgress = { ...get().dhikrProgress, [key]: Math.max(0, count) };
      saveJson(STORAGE_KEYS.DHIKR_PROGRESS, dhikrProgress);
      set({ dhikrProgress });
    },

    incrementDhikrCount: (key: string, targetCount: number, delta: number = 1) => {
      const current = get().dhikrProgress[key] || 0;
      const nextCount = current + delta;
      const dhikrProgress = { ...get().dhikrProgress, [key]: nextCount };
      saveJson(STORAGE_KEYS.DHIKR_PROGRESS, dhikrProgress);
      set({ dhikrProgress });

      // Trigger celebratory confetti if target reached for the first time
      if (current < targetCount && nextCount >= targetCount) {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B5D3C', '#C9A227', '#E5C76B', '#22c55e']
        });
      }
    },

    saveQuizResult: (dateStr: string, score: number, total: number) => {
      const targetDate = dateStr || get().selectedDate;
      const history = { ...get().history };
      const current = history[targetDate] || {
        date: targetDate,
        verseRead: false,
        hadithRead: false,
        completed: false
      };

      history[targetDate] = {
        ...current,
        quizScore: score,
        quizTotal: total,
        quizCompleted: true
      };

      saveJson(STORAGE_KEYS.HISTORY, history);
      set({ history });

      if (score >= Math.ceil(total * 0.66)) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#C9A227', '#0B5D3C', '#E5C76B', '#38A169']
        });
      }
    },

    getStreakInfo: () => {
      return calculateStreak(get().history);
    },

    getProgressForDate: (dateStr: string) => {
      return get().history[dateStr] || {
        date: dateStr,
        verseRead: false,
        hadithRead: false,
        completed: false
      };
    },

    resetAllData: () => {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      set({
        history: {},
        bookmarks: [],
        selectedDate: getTodayDateString()
      });
    }
  };
});
