import { DhikrItem } from '../types';
import { YEARLY_DHIKR_365, getYearlyDhikr } from './yearly';

export const DAILY_DHIKRS: DhikrItem[] = YEARLY_DHIKR_365;

export function getDhikrForDay(day: number): DhikrItem {
  return getYearlyDhikr(day);
}
