import { DhikrItem } from '../types';

// In-memory cache for dynamically loaded monthly dhikrs
const dhikrCache = new Map<number, DhikrItem>();
let allLoadedDhikrs: DhikrItem[] = [];

export const BASE_DHIKR: DhikrItem = {
  id: 'subhanallah-wa-bihamdihi',
  day: 1,
  titleEn: "Subhan Allah wa bihamdihi",
  titleUrdu: "سبحان اللہ وبحمدہ",
  arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
  transliteration: "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
  urdu_translation: "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
  english_translation: "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
  targetCount: 33,
  virtueUrdu: "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
  virtueEn: "Two words that are light on the tongue, heavy on the scale, and beloved to the Most Merciful.",
  source: "صحیح البخاری: 6406 (Sahih al-Bukhari 6406)",
  category: "Tasbih & Praise"
};

allLoadedDhikrs = [BASE_DHIKR];
dhikrCache.set(1, BASE_DHIKR);

export function registerMonthDhikrs(dhikrs: DhikrItem[]) {
  if (!Array.isArray(dhikrs)) return;
  for (let i = 0; i < dhikrs.length; i++) {
    const d = dhikrs[i];
    dhikrCache.set(d.day || (i + 1), d);
  }
  allLoadedDhikrs = dhikrs;
}

export const DAILY_DHIKRS: DhikrItem[] = allLoadedDhikrs;

export function getDhikrForDay(day: number): DhikrItem {
  if (dhikrCache.has(day)) return dhikrCache.get(day)!;
  if (allLoadedDhikrs.length > 0) {
    const idx = ((Math.max(1, day) - 1) % allLoadedDhikrs.length);
    return allLoadedDhikrs[idx];
  }
  return BASE_DHIKR;
}
