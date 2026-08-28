export interface Verse {
  day: number;
  surah: string;
  surah_ar: string;
  ayah: number;
  arabic: string;
  urdu_translation: string;
  explanation: string;
  family_tip: string;
  audio_url: string;
}

export interface Hadith {
  day: number;
  arabic: string;
  urdu_translation: string;
  source: string;
  category: string;
  lesson: string;
  family_tip: string;
}

export interface DayProgress {
  date: string; // ISO format: YYYY-MM-DD
  verseRead: boolean;
  hadithRead: boolean;
  quizScore?: number;
  quizTotal?: number;
  quizCompleted?: boolean;
  completed: boolean;
  completedAt?: string;
}

export interface QuizQuestion {
  id: string;
  questionEn: string;
  questionUrdu: string;
  options: string[]; // 4 options in Urdu/English
  correctIndex: number; // 0..3
  explanationUrdu: string;
  explanationEn: string;
  reference: string;
  type: 'verse' | 'hadith' | 'general';
}

export interface DailyQuizData {
  day: number;
  date: string;
  questions: QuizQuestion[];
}

export interface AppSettings {
  reminderEnabled: boolean;
  reminderTime: string; // e.g. "19:00"
  fontSize: 'normal' | 'large' | 'xlarge';
  familyMode: boolean;
  audioAutoplay: boolean;
  audioSpeed: number; // 0.8, 1, 1.2
  darkMode: boolean;
  appTheme: 'emerald' | 'midnight' | 'pearl';
  hapticsEnabled: boolean;
  showDailyDhikr?: boolean;
  showDuaOfTheWeek?: boolean;
  showDailyQuiz?: boolean;
  hijriDateAdjustment?: number | 'auto';
  tafseerSourceUrdu?: string;
  tafseerSourceEn?: string;
  tafseerSourceShaneNazool?: string;
  qariVoice?: string;
  reciterVoice?: string;
}

export interface DhikrItem {
  id: string;
  day: number;
  titleEn: string;
  titleUrdu: string;
  arabic: string;
  transliteration: string;
  urdu_translation: string;
  english_translation: string;
  targetCount: number;
  virtueUrdu: string;
  virtueEn: string;
  source: string;
  category: string;
}

export interface Dua {
  week: number;
  titleEn: string;
  titleUrdu: string;
  arabic: string;
  transliteration: string;
  urdu_translation: string;
  english_translation: string;
  source: string;
  occasion: string;
  benefit: string;
  memorization_tip: string;
}

export interface BookmarkItem {
  id: string;
  type: 'verse' | 'hadith' | 'dua';
  day: number;
  savedAt: string;
}

export interface HijriDateInfo {
  day: number;
  monthNameAr: string;
  monthNameEn: string;
  year: number;
  formatted: string;
  formattedUrdu?: string;
  formattedEn?: string;
  offsetApplied?: number;
  locationName?: string;
}

export interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface PrayerTimesData {
  timings: PrayerTimes;
  date: string;
  locationName: string;
  timezone: string;
  calculationMethod?: string;
  nextPrayer?: {
    name: string;
    nameUrdu: string;
    time: string;
    timeRemainingFormatted: string;
  };
}

