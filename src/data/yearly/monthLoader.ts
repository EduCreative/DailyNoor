import { Verse, Hadith, DhikrItem } from '../../types';
import { TafseerDetail } from '../tafseerData';

export interface MonthDataset {
  month: number;
  monthName: string;
  startDay: number;
  endDay: number;
  verses: Verse[];
  hadiths: Hadith[];
  tafseers: TafseerDetail[];
  dhikrs: DhikrItem[];
}

const monthCache = new Map<number, MonthDataset>();

/**
 * Dynamically loads dataset for a specific month (1 to 12)
 * Ensures only 1 month is parsed into memory on demand.
 */
export async function loadMonthData(monthNumber: number): Promise<MonthDataset> {
  const m = Math.min(12, Math.max(1, Math.floor(monthNumber) || 1));
  
  if (monthCache.has(m)) {
    return monthCache.get(m)!;
  }

  let mod: any;
  switch (m) {
    case 1:
      mod = await import('./months/month1');
      break;
    case 2:
      mod = await import('./months/month2');
      break;
    case 3:
      mod = await import('./months/month3');
      break;
    case 4:
      mod = await import('./months/month4');
      break;
    case 5:
      mod = await import('./months/month5');
      break;
    case 6:
      mod = await import('./months/month6');
      break;
    case 7:
      mod = await import('./months/month7');
      break;
    case 8:
      mod = await import('./months/month8');
      break;
    case 9:
      mod = await import('./months/month9');
      break;
    case 10:
      mod = await import('./months/month10');
      break;
    case 11:
      mod = await import('./months/month11');
      break;
    case 12:
      mod = await import('./months/month12');
      break;
    default:
      mod = await import('./months/month1');
      break;
  }

  const dataset: MonthDataset = {
    month: mod.month || m,
    monthName: mod.monthName || `Month ${m}`,
    startDay: mod.startDay || 1,
    endDay: mod.endDay || 31,
    verses: mod.verses || [],
    hadiths: mod.hadiths || [],
    tafseers: mod.tafseers || [],
    dhikrs: mod.dhikrs || []
  };

  monthCache.set(m, dataset);
  return dataset;
}

/**
 * Dynamically loads all 12 monthly modules for complete export tasks
 */
export async function loadAll365Data(): Promise<{
  verses: Verse[];
  hadiths: Hadith[];
  tafseers: TafseerDetail[];
  dhikrs: DhikrItem[];
}> {
  const months = await Promise.all([
    loadMonthData(1),
    loadMonthData(2),
    loadMonthData(3),
    loadMonthData(4),
    loadMonthData(5),
    loadMonthData(6),
    loadMonthData(7),
    loadMonthData(8),
    loadMonthData(9),
    loadMonthData(10),
    loadMonthData(11),
    loadMonthData(12)
  ]);

  return {
    verses: months.flatMap(m => m.verses),
    hadiths: months.flatMap(m => m.hadiths),
    tafseers: months.flatMap(m => m.tafseers),
    dhikrs: months.flatMap(m => m.dhikrs)
  };
}
