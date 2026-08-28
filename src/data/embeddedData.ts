import { Verse, Hadith } from '../types';
import { YEARLY_VERSES_365, YEARLY_HADITHS_365, getYearlyVerse, getYearlyHadith } from './yearly';

export const EMBEDDED_VERSES: Verse[] = YEARLY_VERSES_365;
export const EMBEDDED_HADITHS: Hadith[] = YEARLY_HADITHS_365;
export { getYearlyVerse, getYearlyHadith };
