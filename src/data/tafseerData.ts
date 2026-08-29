export interface TafseerDetail {
  day: number;
  surah: string;
  surah_ar: string;
  surahNumber: number;
  ayah: number;
  arabic: string;
  urdu_translation: string;
  tafseerUrdu: string;
  tafseerEn: string;
  sourceNameUrdu: string;
  sourceNameEn: string;
  asbabAlNuzulUrdu: string;
  asbabAlNuzulEn: string;
  keyLessonsUrdu: string[];
  keyLessonsEn: string[];
  reflectionsUrdu: string;
  reflectionsEn: string;
}

// In-memory cache for dynamically loaded monthly tafseers
const tafseerCacheByDay = new Map<number, TafseerDetail>();
const tafseerCacheByKey = new Map<string, TafseerDetail>();

export const BASE_TAFSEER_LIST: TafseerDetail[] = [
  {
    day: 1,
    surah: "Al-Fatiha",
    surah_ar: "سورة الفاتحة",
    surahNumber: 1,
    ayah: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    urdu_translation: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
    tafseerUrdu: "یہ آیتِ مبارکہ توحیدِ عبادت اور توحیدِ استعانت کا خلاصہ ہے۔ 'إِيَّاكَ نَعْبُدُ' شرک اور ریاکاری سے براءت ہے، جبکہ 'وَإِيَّاكَ نَسْتَعِينُ' اپنی قوت پر گھمنڈ کرنے سے نجات دلاتی ہے۔ انسان ہر حال میں اللہ کا محتاج ہے۔",
    tafseerEn: "This verse encapsulates sincere monotheism and reliance upon Allah alone. Worship is reserved exclusively for the Creator, and seeking aid in all affairs belongs solely to Him.",
    sourceNameUrdu: "تفسیر ابنِ کثیر / خلاصہ تفسیرِ عثمانی",
    sourceNameEn: "Tafsir Ibn Kathir / Usmani Summary",
    asbabAlNuzulUrdu: "سورۃ الفاتحہ مکہ مکرمہ میں نماز کی فرضیت کے اوائل میں مکمل سورت کی صورت میں نازل ہوئی۔",
    asbabAlNuzulEn: "Revealed in Makkah in the early period of Islam establishing complete worship orientation.",
    keyLessonsUrdu: [
      "عبادت میں اخلاص لازم ہے، کسی غیر کی خوشنودی شامل نہ ہو۔",
      "دعا اور مدد مانگنے کا حقیقی مرجع صرف اور صرف اللہ تعالیٰ ہے۔",
      "انسان اپنی طاقت و تدبیر کے بجائے اللہ کی توفیق پر بھروسہ رکھے۔"
    ],
    keyLessonsEn: [
      "Pure devotion is required in all acts of worship.",
      "Allah alone is the ultimate source of help and refuge.",
      "Human strength is limited; true accomplishment comes through divine assistance."
    ],
    reflectionsUrdu: "کیا میں اپنے تمام معاملات اور پریشانیوں میں سب سے پہلے اللہ سے مدد طلب کرتا ہوں؟",
    reflectionsEn: "In moments of difficulty, is my first reflex to turn to Allah in prayer?"
  }
];

// Seed cache with base tafseer
BASE_TAFSEER_LIST.forEach(t => {
  tafseerCacheByDay.set(t.day, t);
  tafseerCacheByKey.set(`${t.surahNumber}:${t.ayah}`, t);
  tafseerCacheByKey.set(`${t.surah.toLowerCase()}:${t.ayah}`, t);
});

export function registerMonthTafseers(tafseers: TafseerDetail[]) {
  if (!Array.isArray(tafseers)) return;
  for (const t of tafseers) {
    tafseerCacheByDay.set(t.day, t);
    tafseerCacheByKey.set(`${t.surahNumber}:${t.ayah}`, t);
    tafseerCacheByKey.set(`${t.surah.toLowerCase()}:${t.ayah}`, t);
  }
}

export const EMBEDDED_TAFSEER_LIST: TafseerDetail[] = BASE_TAFSEER_LIST;

export function getTafseerForDay(day: number): TafseerDetail {
  const cached = tafseerCacheByDay.get(day);
  if (cached) return cached;
  return BASE_TAFSEER_LIST[0];
}

export function getTafseerBySurahAyah(surah: string | number, ayah: number): TafseerDetail | undefined {
  if (typeof surah === 'number') {
    const key = `${surah}:${ayah}`;
    if (tafseerCacheByKey.has(key)) return tafseerCacheByKey.get(key);
  } else {
    const key = `${surah.toLowerCase()}:${ayah}`;
    if (tafseerCacheByKey.has(key)) return tafseerCacheByKey.get(key);
  }
  return BASE_TAFSEER_LIST.find(t => {
    if (typeof surah === 'number') return t.surahNumber === surah && t.ayah === ayah;
    return t.surah.toLowerCase() === surah.toString().toLowerCase() && t.ayah === ayah;
  });
}
