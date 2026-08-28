import { Verse, Hadith, DhikrItem } from '../../types';
import { TafseerDetail } from '../tafseerData';
import { YEARLY_VERSES_365 } from './yearlyVerses';
import { YEARLY_HADITHS_365 } from './yearlyHadiths';
import { YEARLY_TAFSEER_365 } from './yearlyTafseer';
import { YEARLY_DHIKR_365 } from './yearlyDhikr';

export { YEARLY_VERSES_365 } from './yearlyVerses';
export { YEARLY_HADITHS_365 } from './yearlyHadiths';
export { YEARLY_TAFSEER_365 } from './yearlyTafseer';
export { YEARLY_DHIKR_365 } from './yearlyDhikr';

export function getYearlyVerse(day: number): Verse {
  const targetDay = ((Math.max(1, day) - 1) % 365) + 1;
  return YEARLY_VERSES_365[targetDay - 1] || YEARLY_VERSES_365[0];
}

export function getYearlyHadith(day: number): Hadith {
  const targetDay = ((Math.max(1, day) - 1) % 365) + 1;
  return YEARLY_HADITHS_365[targetDay - 1] || YEARLY_HADITHS_365[0];
}

export function getYearlyTafseer(day: number): TafseerDetail {
  const targetDay = ((Math.max(1, day) - 1) % 365) + 1;
  return YEARLY_TAFSEER_365[targetDay - 1] || YEARLY_TAFSEER_365[0];
}

export function getYearlyDhikr(day: number): DhikrItem {
  const targetDay = ((Math.max(1, day) - 1) % 365) + 1;
  return YEARLY_DHIKR_365[targetDay - 1] || YEARLY_DHIKR_365[0];
}
