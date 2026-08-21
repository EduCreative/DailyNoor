import { DayProgress, HijriDateInfo } from '../types';
import { getSavedLocation, SavedLocation } from './prayerTimes';

export function getTodayDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatTime12h(time24: string): string {
  if (!time24) return '7:00 PM';
  const parts = time24.split(':');
  if (parts.length < 2) return time24;
  let h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  if (isNaN(h) || isNaN(m)) return time24;
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  const mPadded = m < 10 ? `0${m}` : `${m}`;
  return `${h}:${mPadded} ${ampm}`;
}

export function getDayOfYear(d: Date = new Date()): number {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime() + ((start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear > 0 ? dayOfYear : 1;
}

export function getWeekOfYear(d: Date = new Date()): number {
  const dayOfYear = getDayOfYear(d);
  return Math.min(52, Math.max(1, Math.ceil(dayOfYear / 7)));
}

/**
 * Maps day of year (1..365) to the available data count (e.g. 14 items)
 */
export function getDailyIndex(totalItems: number, dateStr?: string): number {
  if (!totalItems || totalItems <= 0) return 1;
  const dateObj = dateStr ? new Date(dateStr + 'T00:00:00') : new Date();
  const dayOfYear = getDayOfYear(dateObj);
  return ((dayOfYear - 1) % totalItems) + 1;
}

/**
 * Maps week of year (1..52) to available week index
 */
export function getWeeklyIndex(totalItems: number, dateStr?: string): number {
  if (!totalItems || totalItems <= 0) return 1;
  const dateObj = dateStr ? new Date(dateStr + 'T00:00:00') : new Date();
  const weekOfYear = getWeekOfYear(dateObj);
  return ((weekOfYear - 1) % totalItems) + 1;
}

export function formatReadableDate(dateStr: string): { english: string; urdu: string } {
  const d = new Date(dateStr + 'T00:00:00');
  const optionsEn: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const english = d.toLocaleDateString('en-US', optionsEn);

  const urduMonths = [
    'جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون',
    'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'
  ];
  const urduDays = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];

  const dayName = urduDays[d.getDay()];
  const dayNum = d.getDate();
  const monthName = urduMonths[d.getMonth()];
  const year = d.getFullYear();

  const urdu = `${dayName}، ${dayNum} ${monthName} ${year}`;
  return { english, urdu };
}

export function toUrduNumerals(num: number | string): string {
  const urduDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, d => urduDigits[parseInt(d, 10)]);
}

/**
 * Determines regional Hijri offset based on location.
 * Regional moon sighting in Pakistan, India, Bangladesh, etc., is typically 1 day behind Saudi Arabia (Umm al-Qura).
 */
export function getRegionalHijriOffset(loc?: SavedLocation | null): number {
  let targetLoc = loc;
  if (!targetLoc && typeof localStorage !== 'undefined') {
    targetLoc = getSavedLocation();
  }

  if (!targetLoc) {
    return 0; // Default Makkah / Saudi Arabia
  }

  const name = (targetLoc.displayName || '').toLowerCase();
  const country = (targetLoc.country || '').toLowerCase();
  const city = (targetLoc.city || '').toLowerCase();

  // South Asian regions (Pakistan, India, Bangladesh, Sri Lanka, Nepal)
  const isSouthAsia = 
    country.includes('pakistan') || 
    name.includes('pakistan') ||
    city.includes('karachi') ||
    city.includes('lahore') ||
    city.includes('islamabad') ||
    city.includes('hyderabad') ||
    city.includes('peshawar') ||
    city.includes('quetta') ||
    city.includes('multan') ||
    city.includes('faisalabad') ||
    city.includes('rawalpindi') ||
    city.includes('sialkot') ||
    city.includes('gujranwala') ||
    city.includes('sukkur') ||
    city.includes('larkana') ||
    country.includes('india') ||
    name.includes('india') ||
    city.includes('delhi') ||
    city.includes('mumbai') ||
    country.includes('bangladesh') ||
    name.includes('bangladesh') ||
    city.includes('dhaka') ||
    country.includes('sri lanka') ||
    country.includes('nepal');

  // Other regional sightings (Morocco, etc.)
  const isOtherLocalSighting = 
    country.includes('morocco') || 
    name.includes('morocco') ||
    country.includes('south africa');

  if (isSouthAsia || isOtherLocalSighting) {
    return -1;
  }

  // Check GPS coordinates for South Asia (Lat 5-38, Lon 60-95)
  if (targetLoc.type === 'gps' && targetLoc.latitude && targetLoc.longitude) {
    const lat = targetLoc.latitude;
    const lon = targetLoc.longitude;
    if (lat >= 5 && lat <= 38 && lon >= 60 && lon <= 95) {
      return -1;
    }
  }

  // Saudi Arabia, UAE, Gulf States, North America (ISNA), Turkey, Egypt align with Umm al-Qura standard (0 offset)
  return 0;
}

/**
 * Returns descriptive summary of the regional calculation
 */
export function getRegionalCalculationDescription(
  loc?: SavedLocation | null,
  manualAdjustment?: number | 'auto'
): { region: string; offsetLabel: string; offset: number } {
  let targetLoc = loc;
  if (!targetLoc && typeof localStorage !== 'undefined') {
    targetLoc = getSavedLocation();
  }

  const locationName = targetLoc?.displayName || 'Makkah, Saudi Arabia';
  const detectedOffset = getRegionalHijriOffset(targetLoc);
  
  let effectiveOffset = detectedOffset;
  let offsetLabel = '';

  if (typeof manualAdjustment === 'number') {
    effectiveOffset = manualAdjustment;
    offsetLabel = effectiveOffset === 0 
      ? '0 Days (Umm al-Qura Standard)' 
      : `${effectiveOffset > 0 ? '+' : ''}${effectiveOffset} Day${Math.abs(effectiveOffset) > 1 ? 's' : ''} (Custom)`;
  } else {
    offsetLabel = detectedOffset === -1 
      ? '-1 Day (Pakistan / South Asia Local Sighting)' 
      : detectedOffset === 0 
        ? '0 Days (Saudi Arabia / Umm al-Qura Standard)' 
        : `${detectedOffset > 0 ? '+' : ''}${detectedOffset} Day (Auto)`;
  }

  return {
    region: locationName,
    offsetLabel,
    offset: effectiveOffset
  };
}

/**
 * Calculates Islamic / Hijri date according to the user's location and regional moon sighting
 */
export function getEstimatedHijriDate(
  dateObj: Date = new Date(),
  loc?: SavedLocation | null,
  manualAdjustment?: number | 'auto'
): HijriDateInfo {
  let offset = 0;
  if (typeof manualAdjustment === 'number') {
    offset = manualAdjustment;
  } else {
    offset = getRegionalHijriOffset(loc);
  }

  // Apply regional date shift (in milliseconds: offset * 86,400,000)
  const adjustedDate = new Date(dateObj.getTime() + offset * 86400000);

  try {
    // Use Intl DateTimeFormat with islamic-umalqura calendar
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    const parts = formatter.formatToParts(adjustedDate);
    const day = parseInt(parts.find(p => p.type === 'day')?.value || '1', 10);
    const month = parseInt(parts.find(p => p.type === 'month')?.value || '1', 10);
    const year = parseInt(parts.find(p => p.type === 'year')?.value || '1448', 10);

    const hijriMonthsAr = [
      'محرم الحرام', 'صفر المظفر', 'ربیع الاول', 'ربیع الثانی',
      'جمادی الاول', 'جمادی الثانی', 'رجب المرجب', 'شعبان المعظم',
      'رمضان المبارک', 'شوال المکرم', 'ذو القعدة', 'ذو الحجة'
    ];
    const hijriMonthsEn = [
      'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
      'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
      'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
    ];

    const safeMonthIdx = Math.max(0, Math.min(11, month - 1));
    const monthNameAr = hijriMonthsAr[safeMonthIdx] || 'صفر المظفر';
    const monthNameEn = hijriMonthsEn[safeMonthIdx] || 'Safar';

    const dayUrdu = toUrduNumerals(day);
    const yearUrdu = toUrduNumerals(year);

    // Right-To-Left Mark (\u200F) ensures proper RTL Bidi ordering: [Day] [Month] [Year]
    const formattedUrdu = `\u200F${dayUrdu} ${monthNameAr} \u200F${yearUrdu}ھ`;
    const formatted = `\u200F${dayUrdu} ${monthNameAr} \u200F${yearUrdu}ھ`;
    const formattedEn = `${day} ${monthNameEn} ${year} AH`;

    return {
      day,
      monthNameAr,
      monthNameEn,
      year,
      formatted,
      formattedUrdu,
      formattedEn,
      offsetApplied: offset
    };
  } catch {
    // Fallback if islamic calendar is unsupported
    return {
      day: 1,
      monthNameAr: 'صفر المظفر',
      monthNameEn: 'Safar',
      year: 1448,
      formatted: `\u200F۱ صفر المظفر \u200F۱۴۴۸ھ`,
      formattedUrdu: `\u200F۱ صفر المظفر \u200F۱۴۴۸ھ`,
      formattedEn: `1 Safar 1448 AH`,
      offsetApplied: offset
    };
  }
}

/**
 * Calculates current streak of consecutive completed days up to today or yesterday
 */
export function calculateStreak(history: Record<string, DayProgress>): {
  currentStreak: number;
  bestStreak: number;
  totalCompletedDays: number;
} {
  const todayStr = getTodayDateString();
  const keys = Object.keys(history).sort();
  const totalCompletedDays = Object.values(history).filter(h => h.completed).length;

  if (keys.length === 0) {
    return { currentStreak: 0, bestStreak: 0, totalCompletedDays: 0 };
  }

  // Check from today backwards
  let currentStreak = 0;
  const cursor = new Date();
  
  // If today is completed, start from today. If not, check if yesterday was completed
  const todayProgress = history[todayStr];
  if (todayProgress && todayProgress.completed) {
    currentStreak++;
    cursor.setDate(cursor.getDate() - 1);
  } else {
    // Check yesterday
    cursor.setDate(cursor.getDate() - 1);
    const yesterdayStr = getTodayDateString(cursor);
    if (!history[yesterdayStr]?.completed) {
      // Streak broken
      return { currentStreak: 0, bestStreak: calculateBestStreak(history), totalCompletedDays };
    }
  }

  // Count backwards consecutive days
  while (true) {
    const dStr = getTodayDateString(cursor);
    if (history[dStr]?.completed) {
      currentStreak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    currentStreak,
    bestStreak: Math.max(currentStreak, calculateBestStreak(history)),
    totalCompletedDays
  };
}

function calculateBestStreak(history: Record<string, DayProgress>): number {
  const dates = Object.keys(history)
    .filter(k => history[k].completed)
    .sort();

  if (dates.length === 0) return 0;

  let maxStreak = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1] + 'T00:00:00');
    const curr = new Date(dates[i] + 'T00:00:00');
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      current++;
      if (current > maxStreak) maxStreak = current;
    } else {
      current = 1;
    }
  }

  return maxStreak;
}

export function getPast30Days(): string[] {
  const days: string[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    days.push(getTodayDateString(d));
  }
  return days;
}
