import React, { useEffect, useState } from 'react';
import { PrayerTimesData, PrayerTimes } from '../types';
import { 
  getPrayerTimesForLocation, 
  getSavedLocation, 
  saveLocation, 
  getCityNameFromCoords, 
  format12Hour, 
  PRAYER_NAMES, 
  SavedLocation,
  cleanTimeStr 
} from '../utils/prayerTimes';
import { 
  Clock, 
  MapPin, 
  Navigation, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Sun, 
  Moon, 
  Sunrise as SunriseIcon, 
  Sunset as SunsetIcon,
  Sparkles,
  Check
} from 'lucide-react';

const POPULAR_CITIES: { city: string; country: string; label: string }[] = [
  { city: 'Makkah', country: 'Saudi Arabia', label: 'Mecca, Saudi Arabia' },
  { city: 'Medina', country: 'Saudi Arabia', label: 'Medina, Saudi Arabia' },
  { city: 'Karachi', country: 'Pakistan', label: 'Karachi, Pakistan' },
  { city: 'Lahore', country: 'Pakistan', label: 'Lahore, Pakistan' },
  { city: 'Islamabad', country: 'Pakistan', label: 'Islamabad, Pakistan' },
  { city: 'Hyderabad', country: 'Pakistan', label: 'Hyderabad, Pakistan' },
  { city: 'Peshawar', country: 'Pakistan', label: 'Peshawar, Pakistan' },
  { city: 'Quetta', country: 'Pakistan', label: 'Quetta, Pakistan' },
  { city: 'Delhi', country: 'India', label: 'Delhi, India' },
  { city: 'Dhaka', country: 'Bangladesh', label: 'Dhaka, Bangladesh' },
  { city: 'Dubai', country: 'United Arab Emirates', label: 'Dubai, UAE' },
  { city: 'London', country: 'United Kingdom', label: 'London, UK' },
  { city: 'New York', country: 'United States', label: 'New York, USA' },
  { city: 'Toronto', country: 'Canada', label: 'Toronto, Canada' },
  { city: 'Istanbul', country: 'Turkey', label: 'Istanbul, Turkey' },
];

export const PrayerTimesCard: React.FC = () => {
  const [prayerData, setPrayerData] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [use24h, setUse24h] = useState<boolean>(false);
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState<boolean>(false);
  const [customCityInput, setCustomCityInput] = useState<string>('');
  const [customCountryInput, setCustomCountryInput] = useState<string>('');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Load Prayer Times
  const loadTimes = async (customLoc?: SavedLocation | null) => {
    try {
      setLoading(true);
      const loc = customLoc !== undefined ? customLoc : getSavedLocation();
      const data = await getPrayerTimesForLocation(loc);
      setPrayerData(data);
      setLocationError(null);
    } catch (err) {
      console.error('Failed to load prayer times:', err);
      setLocationError('Could not fetch times');
    } finally {
      setLoading(false);
    }
  };

  // Initial load & automatic geolocation check
  useEffect(() => {
    const saved = getSavedLocation();
    if (saved) {
      loadTimes(saved);
    } else {
      // Prompt GPS automatically once if supported
      requestGeolocation(true);
    }
  }, []);

  // Periodic refresh for next prayer countdown every 60s
  useEffect(() => {
    const interval = setInterval(() => {
      if (prayerData) {
        setPrayerData(prev => {
          if (!prev) return null;
          return {
            ...prev,
            nextPrayer: getPrayerTimesForLocation(getSavedLocation()).then ? prev.nextPrayer : prev.nextPrayer
          };
        });
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [prayerData]);

  // Request browser geolocation
  const requestGeolocation = (silentFallback: boolean = false) => {
    setIsLocating(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      if (!silentFallback) setLocationError('Geolocation not supported');
      loadTimes(null);
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          const name = await getCityNameFromCoords(lat, lng);
          const newLoc: SavedLocation = {
            type: 'gps',
            latitude: lat,
            longitude: lng,
            displayName: name
          };
          saveLocation(newLoc);
          await loadTimes(newLoc);
          setIsLocationSelectorOpen(false);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLocating(false);
        }
      },
      (err) => {
        console.warn('Geolocation denied or timed out:', err);
        setIsLocating(false);
        if (!silentFallback) {
          setLocationError('Location access denied. Please choose a city below.');
        }
        // Load default/cached if first time
        if (!prayerData) {
          loadTimes(null);
        }
      },
      { timeout: 8000, enableHighAccuracy: false }
    );
  };

  // Select predefined city
  const handleSelectCity = async (item: { city: string; country: string; label: string }) => {
    const newLoc: SavedLocation = {
      type: 'city',
      city: item.city,
      country: item.country,
      displayName: item.label
    };
    saveLocation(newLoc);
    await loadTimes(newLoc);
    setIsLocationSelectorOpen(false);
  };

  // Submit custom city
  const handleCustomCitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCityInput.trim()) return;

    const newLoc: SavedLocation = {
      type: 'city',
      city: customCityInput.trim(),
      country: customCountryInput.trim() || undefined,
      displayName: customCountryInput.trim() 
        ? `${customCityInput.trim()}, ${customCountryInput.trim()}` 
        : customCityInput.trim()
    };
    saveLocation(newLoc);
    await loadTimes(newLoc);
    setCustomCityInput('');
    setCustomCountryInput('');
    setIsLocationSelectorOpen(false);
  };

  const getPrayerIcon = (key: string) => {
    switch (key) {
      case 'Fajr':
        return <SunriseIcon className="w-3.5 h-3.5 text-amber-500" />;
      case 'Sunrise':
        return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      case 'Dhuhr':
        return <Sun className="w-3.5 h-3.5 text-yellow-500" />;
      case 'Asr':
        return <Sun className="w-3.5 h-3.5 text-orange-400" />;
      case 'Maghrib':
        return <SunsetIcon className="w-3.5 h-3.5 text-rose-500" />;
      case 'Isha':
      default:
        return <Moon className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-6">
      <div className="bg-white/85 dark:bg-[#142820]/90 backdrop-blur-xs rounded-2xl border border-[#0B5D3C]/10 dark:border-[#C9A227]/20 shadow-xs transition-all duration-200 overflow-hidden">
        
        {/* Main Header Bar */}
        <div className="p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#0B5D3C]/5 dark:border-white/5">
          
          {/* Left: Title & Location Pill */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0B5D3C]/10 dark:bg-[#C9A227]/15 text-[#0B5D3C] dark:text-[#E5C76B] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B5D3C] dark:text-[#E8EFEA] tracking-tight">
                  Daily Prayer Times <span className="text-[#C9A227] font-normal">•</span> <span className="font-urdu text-xs font-semibold">اوقاتِ نماز</span>
                </h3>
              </div>

              {/* Location Badge Button */}
              <button
                id="prayer-change-location-btn"
                onClick={() => setIsLocationSelectorOpen(!isLocationSelectorOpen)}
                className="flex items-center gap-1 text-[11px] text-[#2D3E35] dark:text-[#C5D5CC] hover:text-[#0B5D3C] dark:hover:text-[#E5C76B] font-medium transition-colors mt-0.5 group"
                title="Change location"
              >
                <MapPin className="w-3 h-3 text-[#C9A227] group-hover:scale-110 transition-transform" />
                <span className="truncate max-w-[170px] sm:max-w-xs font-semibold text-[#111E18] dark:text-[#E8EFEA]">
                  {prayerData?.locationName || 'Loading location...'}
                </span>
                <span className="text-[10px] text-[#084D31] dark:text-[#E5C76B] underline ml-0.5 font-bold">
                  (Change)
                </span>
              </button>
            </div>
          </div>

          {/* Right: Next Prayer Badge & Toggles */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            
            {/* Next Prayer Highlight Pill */}
            {prayerData?.nextPrayer && (
              <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-[11px] sm:text-xs font-bold shadow-xs animate-fade-in">
                <Sparkles className="w-3 h-3 text-[#C9A227] dark:text-[#0B5D3C] shrink-0" />
                <span className="hidden xs:inline">Next: </span>
                <span>{prayerData.nextPrayer.name}</span>
                <span className="opacity-90 font-mono text-[10px] sm:text-[11px]">
                  {use24h ? cleanTimeStr(prayerData.nextPrayer.time) : format12Hour(prayerData.nextPrayer.time)}
                </span>
                <span className="bg-black/20 px-1.5 py-0.2 rounded-sm text-[9px] sm:text-[10px] font-semibold">
                  {prayerData.nextPrayer.timeRemainingFormatted}
                </span>
              </div>
            )}

            {/* 12h/24h toggle button */}
            <button
              id="prayer-time-format-toggle"
              onClick={() => setUse24h(!use24h)}
              className="px-2 py-1 rounded-lg text-[10px] font-bold bg-[#0B5D3C]/5 dark:bg-white/5 hover:bg-[#0B5D3C]/10 dark:hover:bg-white/10 text-[#2D3E35] dark:text-[#C5D5CC] transition-colors border border-black/5 dark:border-white/5"
              title="Toggle 12-Hour / 24-Hour format"
            >
              {use24h ? '24H' : '12H'}
            </button>

            {/* Collapse / Expand Toggle */}
            <button
              id="prayer-card-collapse-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg text-[#2D3E35] dark:text-[#C5D5CC] hover:bg-[#0B5D3C]/5 dark:hover:bg-white/5 transition-colors"
              title={isExpanded ? "Collapse timings" : "Expand timings"}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Expandable Location Selector Panel */}
        {isLocationSelectorOpen && (
          <div className="p-4 bg-[#FAF7F2] dark:bg-[#0C1813] border-b border-[#0B5D3C]/10 dark:border-white/10 animate-fade-in text-xs">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-black/5 dark:border-white/5">
              <span className="font-bold text-[#0B5D3C] dark:text-[#E8EFEA] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                Select Your City for Accurate Prayer Times:
              </span>

              {/* GPS Auto-Detect Button */}
              <button
                id="prayer-gps-autodetect-btn"
                onClick={() => requestGeolocation(false)}
                disabled={isLocating}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B5D3C] text-white hover:bg-[#084A30] font-semibold text-xs transition-colors shadow-xs disabled:opacity-50"
              >
                {isLocating ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Navigation className="w-3.5 h-3.5 text-[#C9A227]" />
                )}
                <span>{isLocating ? 'Detecting GPS...' : 'Auto-Detect via GPS'}</span>
              </button>
            </div>

            {locationError && (
              <p className="text-rose-600 dark:text-rose-400 text-xs py-2 font-medium">
                {locationError}
              </p>
            )}

            {/* Popular City Quick Chips */}
            <div className="mt-3">
              <p className="text-[11px] font-semibold text-[#4A5D53] dark:text-[#96A89F] mb-1.5">
                Quick Select:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_CITIES.map((c) => {
                  const isCurrent = prayerData?.locationName.toLowerCase().includes(c.city.toLowerCase());
                  return (
                    <button
                      key={c.city}
                      onClick={() => handleSelectCity(c)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                        isCurrent
                          ? 'bg-[#0B5D3C] text-white font-bold shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/10 dark:border-white/10 hover:border-[#0B5D3C]/30'
                      }`}
                    >
                      {isCurrent && <Check className="w-3 h-3 text-[#C9A227]" />}
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom City Search Form */}
            <form onSubmit={handleCustomCitySubmit} className="mt-3 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-[#4A5D53] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Or type city (e.g. Islamabad, Chicago, Birmingham)..."
                  value={customCityInput}
                  onChange={(e) => setCustomCityInput(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/20 dark:border-white/10 text-xs text-[#1D2B24] dark:text-[#E8EFEA] focus:outline-none focus:ring-1 focus:ring-[#0B5D3C]"
                />
              </div>
              <button
                type="submit"
                disabled={!customCityInput.trim()}
                className="px-3.5 py-1.5 rounded-xl bg-[#0B5D3C] hover:bg-[#084A30] text-white font-semibold text-xs transition-colors disabled:opacity-40"
              >
                Set City
              </button>
            </form>

          </div>
        )}

        {/* Timings 6-Column Grid */}
        {isExpanded && (
          <div className="p-3 sm:p-4">
            {loading && !prayerData ? (
              <div className="py-4 flex items-center justify-center gap-2 text-xs text-[#4A5D53] dark:text-[#96A89F]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0B5D3C]" />
                <span>Fetching local prayer times...</span>
              </div>
            ) : prayerData ? (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {PRAYER_NAMES.map(({ key, en, ur }) => {
                  const rawTime = prayerData.timings[key as keyof PrayerTimes] || '00:00';
                  const displayTime = use24h ? cleanTimeStr(rawTime) : format12Hour(rawTime);
                  const isNext = prayerData.nextPrayer?.name.toLowerCase() === key.toLowerCase();

                  return (
                    <div
                      key={key}
                      className={`relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl transition-all ${
                        isNext
                          ? 'bg-[#0B5D3C]/10 dark:bg-[#C9A227]/15 border-2 border-[#0B5D3C] dark:border-[#C9A227] shadow-xs'
                          : 'bg-[#FAF7F2]/80 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/5 dark:border-white/5 hover:border-[#0B5D3C]/20'
                      }`}
                    >
                      {/* Active indicator dot */}
                      {isNext && (
                        <span className="absolute -top-1.5 px-1.5 py-0.2 rounded-full bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-[9px] font-bold tracking-tight uppercase shadow-2xs">
                          Next
                        </span>
                      )}

                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#111E18] dark:text-[#E8EFEA]">
                        {getPrayerIcon(key)}
                        <span>{en}</span>
                      </div>

                      <span className="font-urdu text-[11px] text-[#2D3E35] dark:text-[#C5D5CC] font-bold leading-tight my-0.5">
                        {ur}
                      </span>

                      <span className={`font-mono text-xs sm:text-sm font-bold tracking-tight mt-0.5 ${
                        isNext 
                          ? 'text-[#084D31] dark:text-[#E5C76B]' 
                          : 'text-[#111E18] dark:text-[#E8EFEA]'
                      }`}>
                        {displayTime}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        )}

      </div>
    </div>
  );
};
