import { PrayerTimes, PrayerTimesData } from '../types';

const PRAYER_STORAGE_KEY = 'daily_noor_prayer_times_v1';
const PRAYER_LOCATION_KEY = 'daily_noor_prayer_location_v1';

export const PRAYER_NAMES = [
  { key: 'Fajr', en: 'Fajr', ur: 'فجر', ar: 'الفجر' },
  { key: 'Sunrise', en: 'Sunrise', ur: 'طلوعِ آفتاب', ar: 'الشروق' },
  { key: 'Dhuhr', en: 'Dhuhr', ur: 'ظہر', ar: 'الظهر' },
  { key: 'Asr', en: 'Asr', ur: 'عصر', ar: 'العصر' },
  { key: 'Maghrib', en: 'Maghrib', ur: 'مغرب', ar: 'المغرب' },
  { key: 'Isha', en: 'Isha', ur: 'عشاء', ar: 'العشاء' },
] as const;

export interface SavedLocation {
  type: 'gps' | 'city';
  latitude?: number;
  longitude?: number;
  city?: string;
  country?: string;
  displayName: string;
}

export function getSavedLocation(): SavedLocation | null {
  try {
    const data = localStorage.getItem(PRAYER_LOCATION_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveLocation(loc: SavedLocation): void {
  try {
    localStorage.setItem(PRAYER_LOCATION_KEY, JSON.stringify(loc));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('daily_noor_location_changed', { detail: loc }));
    }
  } catch (err) {
    console.error('Failed to save location', err);
  }
}

export function getUserLocationName(): string {
  const saved = getSavedLocation();
  if (saved && saved.displayName) {
    return saved.displayName;
  }
  return 'Makkah, Saudi Arabia';
}

// Clean Aladhan time format: "05:14 (PKT)" -> "05:14"
export function cleanTimeStr(raw: string): string {
  if (!raw) return '00:00';
  return raw.split(' ')[0].trim();
}

// Format 24h to 12h: "18:30" -> "6:30 PM", "05:12" -> "5:12 AM"
export function format12Hour(time24: string): string {
  const cleaned = cleanTimeStr(time24);
  const parts = cleaned.split(':');
  if (parts.length < 2) return time24;
  
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1];
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  return `${hours}:${minutes} ${ampm}`;
}

// Calculate the next upcoming prayer based on current time
export function getNextPrayerInfo(timings: PrayerTimes): PrayerTimesData['nextPrayer'] {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayers = [
    { name: 'Fajr', nameUrdu: 'فجر', time: timings.Fajr },
    { name: 'Sunrise', nameUrdu: 'طلوعِ آفتاب', time: timings.Sunrise },
    { name: 'Dhuhr', nameUrdu: 'ظہر', time: timings.Dhuhr },
    { name: 'Asr', nameUrdu: 'عصر', time: timings.Asr },
    { name: 'Maghrib', nameUrdu: 'مغرب', time: timings.Maghrib },
    { name: 'Isha', nameUrdu: 'عشاء', time: timings.Isha },
  ];

  for (const prayer of prayers) {
    const [h, m] = cleanTimeStr(prayer.time).split(':').map(Number);
    const prayerMinutes = h * 60 + m;

    if (prayerMinutes > currentMinutes) {
      const diff = prayerMinutes - currentMinutes;
      const diffHours = Math.floor(diff / 60);
      const diffMins = diff % 60;
      const timeRemaining = diffHours > 0 ? `${diffHours}h ${diffMins}m` : `${diffMins}m`;

      return {
        name: prayer.name,
        nameUrdu: prayer.nameUrdu,
        time: prayer.time,
        timeRemainingFormatted: timeRemaining
      };
    }
  }

  // If all prayers today have passed, the next prayer is Tomorrow's Fajr
  const [fajrH, fajrM] = cleanTimeStr(timings.Fajr).split(':').map(Number);
  const fajrMinutesTomorrow = 24 * 60 + (fajrH * 60 + fajrM);
  const diff = fajrMinutesTomorrow - currentMinutes;
  const diffHours = Math.floor(diff / 60);
  const diffMins = diff % 60;
  const timeRemaining = diffHours > 0 ? `${diffHours}h ${diffMins}m` : `${diffMins}m`;

  return {
    name: 'Fajr',
    nameUrdu: 'فجر (کل)',
    time: timings.Fajr,
    timeRemainingFormatted: timeRemaining
  };
}

// Fetch Prayer times from Aladhan API with cache and fallbacks
export async function getPrayerTimesForLocation(
  loc?: SavedLocation | null,
  dateStr?: string
): Promise<PrayerTimesData> {
  const todayDate = dateStr || new Date().toISOString().split('T')[0];
  const cacheKey = `${PRAYER_STORAGE_KEY}_${todayDate}_${loc?.displayName || 'default'}`;

  // Check local storage cache first
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed: PrayerTimesData = JSON.parse(cached);
      parsed.nextPrayer = getNextPrayerInfo(parsed.timings);
      return parsed;
    }
  } catch (e) {
    console.warn('Could not read cached prayer times', e);
  }

  // Attempt API fetch
  try {
    let url = '';
    let locationDisplayName = 'Mecca, Saudi Arabia (Default)';

    if (loc?.type === 'gps' && loc.latitude && loc.longitude) {
      url = `https://api.aladhan.com/v1/timings?latitude=${loc.latitude}&longitude=${loc.longitude}&method=2`;
      locationDisplayName = loc.displayName || 'Current Location';
    } else if (loc?.type === 'city' && loc.city) {
      url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(loc.city)}&country=${encodeURIComponent(loc.country || '')}&method=2`;
      locationDisplayName = loc.displayName || `${loc.city}, ${loc.country || ''}`;
    } else {
      // Default: Mecca
      url = `https://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi%20Arabia&method=4`;
    }

    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Aladhan API HTTP ${response.status}`);
    }

    const json = await response.json();
    if (json && json.data && json.data.timings) {
      const t = json.data.timings;
      const cleanTimings: PrayerTimes = {
        Fajr: cleanTimeStr(t.Fajr),
        Sunrise: cleanTimeStr(t.Sunrise),
        Dhuhr: cleanTimeStr(t.Dhuhr),
        Asr: cleanTimeStr(t.Asr),
        Maghrib: cleanTimeStr(t.Maghrib),
        Isha: cleanTimeStr(t.Isha),
      };

      const result: PrayerTimesData = {
        timings: cleanTimings,
        date: todayDate,
        locationName: locationDisplayName,
        timezone: json.data.meta?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        calculationMethod: json.data.meta?.method?.name || 'Standard',
        nextPrayer: getNextPrayerInfo(cleanTimings)
      };

      // Save to localStorage cache
      try {
        localStorage.setItem(cacheKey, JSON.stringify(result));
      } catch (err) {
        console.warn('Failed to cache prayer times', err);
      }

      return result;
    }
  } catch (err) {
    console.error('Error fetching prayer times from API, using fallback:', err);
  }

  // Fallback defaults if offline / network error
  const fallbackTimings: PrayerTimes = {
    Fajr: '05:15',
    Sunrise: '06:35',
    Dhuhr: '12:30',
    Asr: '15:45',
    Maghrib: '18:25',
    Isha: '19:45'
  };

  return {
    timings: fallbackTimings,
    date: todayDate,
    locationName: loc?.displayName || 'Local Timings (Offline Estimate)',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    calculationMethod: 'Standard Estimate',
    nextPrayer: getNextPrayerInfo(fallbackTimings)
  };
}

// Reverse geocode lat/lng to city name via free OpenStreetMap Nominatim or basic fallback
export async function getCityNameFromCoords(lat: number, lng: number): Promise<string> {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`, {
      headers: { 'Accept-Language': 'en' }
    });
    if (res.ok) {
      const data = await res.json();
      const city = data.address?.city || data.address?.town || data.address?.village || data.address?.county || data.address?.state;
      const country = data.address?.country;
      if (city && country) return `${city}, ${country}`;
      if (city) return city;
      if (country) return country;
    }
  } catch (e) {
    console.warn('Reverse geocoding error:', e);
  }
  return 'Your Location';
}
