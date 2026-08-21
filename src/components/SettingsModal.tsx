import React, { useState } from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { IslamicLogo } from './IslamicLogo';
import { 
  X, 
  Settings as SettingsIcon, 
  Bell, 
  Type, 
  Users, 
  Volume2, 
  RotateCcw, 
  ShieldCheck, 
  Send, 
  Smartphone, 
  Vibrate, 
  Share2, 
  Info, 
  Check, 
  Copy, 
  Sparkles, 
  Palette, 
  Clock, 
  Layers,
  Heart,
  HelpCircle,
  Calendar,
  MapPin,
  Globe,
  MessageCircle
} from 'lucide-react';
import { requestNotificationPermission, sendDailyReminderNotification } from '../utils/notification';
import { triggerHaptic } from '../utils/haptics';
import { APP_VERSION } from './AboutModal';
import { formatTime12h, getEstimatedHijriDate, getRegionalCalculationDescription } from '../utils/dateUtils';
import { getSavedLocation, getUserLocationName } from '../utils/prayerTimes';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAbout?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onOpenAbout }) => {
  const { settings, updateSettings, resetAllData } = useDailyStore();
  const [testSent, setTestSent] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://daily-noor.app';
  const shareText = `🌙 Daily Noor (نورِ روزانہ) — 1 Quranic Verse & 1 Hadith Daily\nSpiritual daily routine with Urdu translations, audio recitation, prayer times & streak tracking.\n\nTry it online: ${appUrl}`;

  const handleToggleReminder = async () => {
    triggerHaptic('medium');
    if (!settings.reminderEnabled) {
      const permission = await requestNotificationPermission();
      if (permission === 'granted') {
        updateSettings({ reminderEnabled: true });
      } else {
        alert('Please allow notification permissions in your browser to enable Daily Noor reminders.');
      }
    } else {
      updateSettings({ reminderEnabled: false });
    }
  };

  const handleTestNotification = () => {
    triggerHaptic('success');
    const displayTime = formatTime12h(settings.reminderTime || '19:00');
    sendDailyReminderNotification(
      'Daily Noor 🌙 Reminder Test',
      `This is how you will receive your daily Quran verse & Hadith reminder at ${displayTime}.`
    );
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3000);
  };

  const handleToggleHaptics = () => {
    const nextVal = !settings.hapticsEnabled;
    updateSettings({ hapticsEnabled: nextVal });
    if (nextVal && typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(30);
    }
  };

  const handleShareApp = async () => {
    triggerHaptic('medium');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Noor — 1 Verse & 1 Hadith Daily',
          text: shareText,
          url: appUrl
        });
      } catch (e) {
        // user dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 3000);
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const handleResetData = () => {
    triggerHaptic('warning');
    if (confirmReset) {
      resetAllData();
      setConfirmReset(false);
      onClose();
    } else {
      setConfirmReset(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#142820] w-full max-w-lg rounded-3xl border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B5D3C] to-[#073D27] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IslamicLogo size={36} variant="shield" />
            <div>
              <h3 className="font-bold text-base">Settings & Preferences</h3>
              <p className="text-xs text-white/80 font-urdu" dir="rtl">ترتیبات و ترجیحات • Daily Noor</p>
            </div>
          </div>
          
          <button
            id="settings-modal-close-btn"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Section 1: Haptic / Vibration Feedback */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Vibrate className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <div>
                <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                  Vibration & Haptic Feedback
                </span>
                <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                  Tactile vibrations on button clicks & routine completion
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id="settings-haptics-toggle"
                type="checkbox"
                checked={settings.hapticsEnabled}
                onChange={handleToggleHaptics}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
            </label>
          </div>

          {/* Section 2: App Theme Selection (Emerald, Midnight, Pearl) */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2.5">
              <Palette className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <div>
                <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                  App Theme Palette
                </span>
                <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                  شاهی زمرد • آبنوسی رات • مروارید موتی
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1">
              {[
                {
                  id: 'emerald',
                  name: 'Royal Emerald',
                  nameUrdu: 'شاہی زمرد',
                  headerBg: '#0B5D3C',
                  cardBg: '#FFFFFF',
                  appBg: '#F5F1E8'
                },
                {
                  id: 'midnight',
                  name: 'Midnight',
                  nameUrdu: 'آبنوسی رات',
                  headerBg: '#05140D',
                  cardBg: '#142820',
                  appBg: '#0C1813'
                },
                {
                  id: 'pearl',
                  name: 'Pearl Alabaster',
                  nameUrdu: 'مروارید موتی',
                  headerBg: '#1C3D2F',
                  cardBg: '#FFFFFF',
                  appBg: '#FAF8F5'
                }
              ].map((theme) => {
                const isActive = (settings.appTheme || (settings.darkMode ? 'midnight' : 'emerald')) === theme.id;
                return (
                  <button
                    key={theme.id}
                    id={`theme-select-${theme.id}-btn`}
                    onClick={() => {
                      triggerHaptic('medium');
                      updateSettings({ appTheme: theme.id as any });
                    }}
                    className={`relative p-2 sm:p-2.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                      isActive
                        ? 'border-[#0B5D3C] dark:border-[#C9A227] bg-white dark:bg-[#142820] shadow-md ring-2 ring-[#0B5D3C]/30 dark:ring-[#C9A227]/30'
                        : 'border-[#0B5D3C]/15 dark:border-white/10 bg-white/60 dark:bg-[#142820]/60 hover:bg-white dark:hover:bg-[#142820]'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0B5D3C] dark:bg-[#C9A227] text-white dark:text-[#0C1813] flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}

                    {/* Color Swatch Preview */}
                    <div className="w-full h-7 sm:h-8 rounded-lg overflow-hidden border border-black/10 flex mb-2">
                      <div className="w-1/3 h-full" style={{ backgroundColor: theme.headerBg }} title="Header" />
                      <div className="w-1/3 h-full" style={{ backgroundColor: theme.appBg }} title="Background" />
                      <div className="w-1/3 h-full" style={{ backgroundColor: theme.cardBg }} title="Card" />
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA] block leading-tight">
                        {theme.name}
                      </span>
                      <span className="text-[10px] text-[#4A5D53] dark:text-[#96A89F] font-urdu block leading-tight mt-0.5" dir="rtl">
                        {theme.nameUrdu}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Daily Reminder Notifications */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bell className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
                <div>
                  <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                    Daily Reminder Notifications
                  </span>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                    {settings.reminderEnabled 
                      ? `Scheduled daily at ${formatTime12h(settings.reminderTime || '19:00')}`
                      : 'Set custom time for daily spiritual reflection'}
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="settings-reminder-toggle"
                  type="checkbox"
                  checked={settings.reminderEnabled}
                  onChange={handleToggleReminder}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
              </label>
            </div>

            {settings.reminderEnabled && (
              <div className="pt-3 border-t border-[#0B5D3C]/10 dark:border-white/10 space-y-2.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />
                    <span className="text-xs font-semibold text-[#1D2B24] dark:text-[#E8EFEA]">Reminder Time:</span>
                  </div>

                  <input
                    id="settings-reminder-time-input"
                    type="time"
                    value={settings.reminderTime || '19:00'}
                    onChange={(e) => updateSettings({ reminderTime: e.target.value })}
                    className="px-2.5 py-1 text-xs font-bold rounded-xl border border-[#0B5D3C]/30 bg-white dark:bg-[#142820] text-[#0B5D3C] dark:text-[#E5C76B] font-mono shadow-xs focus:ring-1 focus:ring-[#0B5D3C]"
                  />
                </div>

                {/* Preset Time Badges & Test Button */}
                <div className="flex items-center justify-between gap-1.5 pt-1 overflow-x-auto">
                  <div className="flex items-center gap-1">
                    {[
                      { label: '8:00 AM', time: '08:00' },
                      { label: '1:30 PM', time: '13:30' },
                      { label: '7:00 PM', time: '19:00' },
                      { label: '9:00 PM', time: '21:00' },
                    ].map((preset) => (
                      <button
                        key={preset.time}
                        id={`reminder-preset-${preset.time}`}
                        onClick={() => {
                          triggerHaptic('light');
                          updateSettings({ reminderTime: preset.time });
                        }}
                        className={`px-2 py-1 rounded-lg text-[11px] font-medium border transition-all ${
                          settings.reminderTime === preset.time
                            ? 'bg-[#0B5D3C] text-white border-[#0B5D3C]'
                            : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <button
                    id="settings-test-notification-btn"
                    onClick={handleTestNotification}
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] font-semibold hover:bg-[#C9A227]/30 transition-colors shrink-0"
                  >
                    <Send className="w-3 h-3" />
                    <span>{testSent ? 'Sent!' : 'Test'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Font Size Adjustment */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center gap-2.5 mb-3">
              <Type className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <div>
                <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                  Arabic & Urdu Font Size
                </span>
                <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                  Adjust reading comfort for verses and translations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['normal', 'large', 'xlarge'] as const).map((size) => (
                <button
                  key={size}
                  id={`font-size-${size}-btn`}
                  onClick={() => {
                    triggerHaptic('light');
                    updateSettings({ fontSize: size });
                  }}
                  className={`py-2 rounded-xl text-xs font-semibold border capitalize transition-all ${
                    settings.fontSize === size
                      ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                      : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                  }`}
                >
                  {size === 'normal' ? 'Standard' : size === 'large' ? 'Large' : 'Extra Large'}
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Family Discussion Mode */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <div>
                <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                  Family Discussion Tips
                </span>
                <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                  خاندانی مکالمے اور گفتگو کے نکات دکھائیں
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id="settings-family-mode-toggle"
                type="checkbox"
                checked={settings.familyMode}
                onChange={() => {
                  triggerHaptic('medium');
                  updateSettings({ familyMode: !settings.familyMode });
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
            </label>
          </div>

          {/* Card Visibility Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A5D53] dark:text-[#96A89F] px-1">
              Dashboard Cards & Modules
            </h4>

            {/* Daily Dhikr & Tasbih Card Display Toggle */}
            <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
                <div>
                  <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                    Daily Dhikr & Tasbih
                  </span>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                    Interactive daily remembrance and digital tasbih
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="settings-daily-dhikr-toggle"
                  type="checkbox"
                  checked={settings.showDailyDhikr !== false}
                  onChange={() => {
                    triggerHaptic('medium');
                    updateSettings({ showDailyDhikr: !(settings.showDailyDhikr !== false) });
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
              </label>
            </div>

            {/* Dua of the Week Display Toggle */}
            <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
                <div>
                  <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                    Dua of the Week
                  </span>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                    Weekly Masnoon Dua memorization and audio
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="settings-dua-of-week-toggle"
                  type="checkbox"
                  checked={settings.showDuaOfTheWeek !== false}
                  onChange={() => {
                    triggerHaptic('medium');
                    updateSettings({ showDuaOfTheWeek: !(settings.showDuaOfTheWeek !== false) });
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
              </label>
            </div>

            {/* Daily Islamic Quiz Display Toggle */}
            <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
                <div>
                  <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                    Daily Islamic Quiz
                  </span>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                    Daily reflection questions with Quran & Hadith explanations
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="settings-daily-quiz-toggle"
                  type="checkbox"
                  checked={settings.showDailyQuiz !== false}
                  onChange={() => {
                    triggerHaptic('medium');
                    updateSettings({ showDailyQuiz: !(settings.showDailyQuiz !== false) });
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B5D3C]"></div>
              </label>
            </div>
          </div>

          {/* Section: Islamic (Hijri) Date Regional Sighting & Adjustment */}
          {(() => {
            const savedLoc = getSavedLocation();
            const locationName = getUserLocationName();
            const regInfo = getRegionalCalculationDescription(savedLoc, settings.hijriDateAdjustment);
            const liveHijri = getEstimatedHijriDate(new Date(), savedLoc, settings.hijriDateAdjustment);
            const isAuto = settings.hijriDateAdjustment === 'auto' || settings.hijriDateAdjustment === undefined;

            return (
              <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227] shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                          Islamic (Hijri) Date Calculation
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0B5D3C]/15 dark:bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B]">
                          Location-Aware
                        </span>
                      </div>
                      <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu mt-0.5" dir="rtl">
                        علاقائی رویتِ ہلال کے مطابق اسلامی تاریخ کی ترتیب
                      </p>
                    </div>
                  </div>
                </div>

                {/* Current Active Location & Live Hijri Date Badge */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/15 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-[#4A5D53] dark:text-[#96A89F] min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                    <span className="font-semibold truncate text-[#1D2B24] dark:text-[#E8EFEA]">
                      {locationName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 font-urdu text-sm font-bold text-[#0B5D3C] dark:text-[#E5C76B]" dir="rtl">
                    <span>✨ {liveHijri.formatted}</span>
                  </div>
                </div>

                {/* Sighting Explanation */}
                <div className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] leading-relaxed bg-[#0B5D3C]/5 dark:bg-white/5 p-2.5 rounded-xl border border-[#0B5D3C]/10 dark:border-white/5">
                  <span className="font-semibold text-[#0B5D3C] dark:text-[#E5C76B]">
                    Regional Rule:
                  </span>{' '}
                  In Pakistan, India, and South Asia, the crescent is sighted 1 day after Saudi Arabia. Daily Noor automatically adjusts the Hijri date based on your active location.
                </div>

                {/* Adjustment Mode Selector */}
                <div>
                  <label className="text-[11px] font-bold text-[#1D2B24] dark:text-[#E8EFEA] block mb-1.5">
                    Select Hijri Date Mode / Offset:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {/* Auto Option */}
                    <button
                      id="settings-hijri-auto-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: 'auto' });
                      }}
                      className={`p-2 rounded-xl text-left text-xs font-semibold border transition-all col-span-2 sm:col-span-1 ${
                        isAuto
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Auto (Location)</span>
                        {isAuto && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isAuto ? 'text-white/80' : 'text-[#4A5D53]/80 dark:text-[#96A89F]/80'}`}>
                        {regInfo.offset === -1 ? 'Pakistan (-1d)' : 'Saudi Arabia (0d)'}
                      </p>
                    </button>

                    {/* Pakistan / South Asia (-1 Day) */}
                    <button
                      id="settings-hijri-pakistan-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: -1 });
                      }}
                      className={`p-2 rounded-xl text-left text-xs font-semibold border transition-all ${
                        !isAuto && settings.hijriDateAdjustment === -1
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Pakistan / India</span>
                        {!isAuto && settings.hijriDateAdjustment === -1 && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <p className={`text-[10px] mt-0.5 ${!isAuto && settings.hijriDateAdjustment === -1 ? 'text-white/80' : 'text-[#4A5D53]/80 dark:text-[#96A89F]/80'}`}>
                        -1 Day (South Asia)
                      </p>
                    </button>

                    {/* Saudi Arabia / Umm al-Qura (0 Days) */}
                    <button
                      id="settings-hijri-saudi-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: 0 });
                      }}
                      className={`p-2 rounded-xl text-left text-xs font-semibold border transition-all ${
                        !isAuto && settings.hijriDateAdjustment === 0
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Saudi Arabia</span>
                        {!isAuto && settings.hijriDateAdjustment === 0 && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <p className={`text-[10px] mt-0.5 ${!isAuto && settings.hijriDateAdjustment === 0 ? 'text-white/80' : 'text-[#4A5D53]/80 dark:text-[#96A89F]/80'}`}>
                        0 Days (Umm al-Qura)
                      </p>
                    </button>

                    {/* Custom -2 Days */}
                    <button
                      id="settings-hijri-minus2-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: -2 });
                      }}
                      className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                        !isAuto && settings.hijriDateAdjustment === -2
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <span>-2 Days</span>
                    </button>

                    {/* Custom +1 Day */}
                    <button
                      id="settings-hijri-plus1-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: 1 });
                      }}
                      className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                        !isAuto && settings.hijriDateAdjustment === 1
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <span>+1 Day</span>
                    </button>

                    {/* Custom +2 Days */}
                    <button
                      id="settings-hijri-plus2-btn"
                      onClick={() => {
                        triggerHaptic('light');
                        updateSettings({ hijriDateAdjustment: 2 });
                      }}
                      className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                        !isAuto && settings.hijriDateAdjustment === 2
                          ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                          : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                      }`}
                    >
                      <span>+2 Days</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Section 5: Audio Playback Speed */}
          <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center gap-2.5 mb-3">
              <Volume2 className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <div>
                <span className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                  Recitation Audio Speed
                </span>
                <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                  Pace of Mishary Rashid Alafasy recitation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[0.8, 1.0, 1.25].map((speed) => (
                <button
                  key={speed}
                  id={`audio-speed-${speed}-btn`}
                  onClick={() => {
                    triggerHaptic('light');
                    updateSettings({ audioSpeed: speed });
                  }}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                    settings.audioSpeed === speed
                      ? 'bg-[#0B5D3C] text-white border-[#0B5D3C] shadow-xs'
                      : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                  }`}
                >
                  {speed === 1.0 ? '1.0x (Normal)' : `${speed}x`}
                </button>
              ))}
            </div>
          </div>

          {/* Section 6: App Actions (Share, About & Suggestions) */}
          <div className="space-y-2 pt-1">
            <a
              id="settings-whatsapp-suggestion-btn"
              href="https://wa.me/923331306603?text=Assalamu%20Alaikum%20Daily%20Noor%20Team%2C%20I%20have%20a%20suggestion%2Ffeedback%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerHaptic('medium')}
              className="w-full p-3 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#0B5D3C] dark:text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 border border-[#25D366]/30 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Send Suggestions / Feedback on WhatsApp (+92 333 1306603)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                id="settings-share-app-btn"
                onClick={handleShareApp}
                className="p-3 rounded-2xl bg-[#0B5D3C]/10 dark:bg-[#C9A227]/15 hover:bg-[#0B5D3C]/20 text-[#0B5D3C] dark:text-[#E5C76B] font-bold text-xs flex items-center justify-center gap-2 border border-[#0B5D3C]/15 dark:border-[#C9A227]/30 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Link Copied!' : 'Share This App'}</span>
              </button>

              {onOpenAbout && (
                <button
                  id="settings-open-about-btn"
                  onClick={() => {
                    triggerHaptic('light');
                    onClose();
                    onOpenAbout();
                  }}
                  className="p-3 rounded-2xl bg-white dark:bg-[#142820] hover:bg-black/5 dark:hover:bg-white/5 text-[#1D2B24] dark:text-[#E8EFEA] font-bold text-xs flex items-center justify-center gap-2 border border-[#0B5D3C]/15 dark:border-white/10 transition-colors"
                >
                  <Info className="w-4 h-4 text-[#C9A227]" />
                  <span>About & {APP_VERSION}</span>
                </button>
              )}
            </div>
          </div>

          {/* Section 7: Reset All Data */}
          <div className="pt-2 border-t border-[#0B5D3C]/10 dark:border-white/10">
            <button
              id="settings-reset-data-btn"
              onClick={handleResetData}
              className={`w-full py-2.5 px-4 rounded-2xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 ${
                confirmReset
                  ? 'bg-rose-600 text-white hover:bg-rose-700'
                  : 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 hover:bg-rose-100'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{confirmReset ? 'Confirm: Reset all streak history?' : 'Reset History & Streaks'}</span>
            </button>
          </div>

        </div>

        {/* Modal Footer: Privacy & Version */}
        <div className="p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-t border-[#0B5D3C]/10 dark:border-white/10 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#0B5D3C] dark:text-[#C9A227] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Offline & Private • Version {APP_VERSION}</span>
          </div>
          <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F]">
            No ads. No tracking. Stored strictly in your browser.
          </p>
        </div>

      </div>
    </div>
  );
};
