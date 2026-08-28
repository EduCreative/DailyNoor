import { Verse } from '../types';
import { YEARLY_TAFSEER_365, getYearlyTafseer } from './yearly';

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

export const EMBEDDED_TAFSEER_LIST: TafseerDetail[] = YEARLY_TAFSEER_365;

export function getTafseerForDay(day: number): TafseerDetail {
  return getYearlyTafseer(day);
}

export function getTafseerBySurahAyah(surah: string | number, ayah: number): TafseerDetail | undefined {
  return YEARLY_TAFSEER_365.find(t => {
    if (typeof surah === 'number') {
      return t.surahNumber === surah && t.ayah === ayah;
    }
    return t.surah.toLowerCase() === surah.toString().toLowerCase() && t.ayah === ayah;
  });
}
