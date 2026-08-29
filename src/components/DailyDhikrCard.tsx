import React, { useState, useEffect } from 'react';
import { DhikrItem } from '../types';
import { DAILY_DHIKRS } from '../data/dhikrData';
import { useDailyStore } from '../store/useDailyStore';
import { useAudioStore } from '../store/useAudioStore';
import { getDailyIndex } from '../utils/dateUtils';
import { triggerHaptic } from '../utils/haptics';
import { 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Copy, 
  Check, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Award, 
  BookOpen, 
  Plus, 
  Target,
  Layers,
  Sparkle
} from 'lucide-react';

interface DailyDhikrCardProps {
  dateStr: string;
}

export const DailyDhikrCard: React.FC<DailyDhikrCardProps> = ({ dateStr }) => {
  const { 
    settings, 
    dhikrProgress, 
    getDhikrCount, 
    setDhikrCount, 
    incrementDhikrCount 
  } = useDailyStore();

  const { playTrack, togglePlayPause, currentTrack, isTrackPlaying } = useAudioStore();

  // Pick default daily dhikr based on day of year
  const defaultIndex = getDailyIndex(DAILY_DHIKRS.length, dateStr) - 1;
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
  const [customTarget, setCustomTarget] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync index when selected date changes
  useEffect(() => {
    setSelectedIndex(getDailyIndex(DAILY_DHIKRS.length, dateStr) - 1);
  }, [dateStr]);

  const dhikr: DhikrItem = DAILY_DHIKRS[selectedIndex] || DAILY_DHIKRS[0];
  const storageKey = `${dateStr}_${dhikr.id}`;
  const currentCount = getDhikrCount(storageKey);
  const dhikrTrackId = `dhikr-urdu-${dhikr.id}`;
  const isPlayingSpeech = isTrackPlaying(dhikrTrackId);
  const targetCount = customTarget ?? dhikr.targetCount;

  // Calculations
  const isCompleted = currentCount >= targetCount;
  const progressPercent = Math.min(100, Math.round((currentCount / targetCount) * 100));

  // Increment Tasbih Count
  const handleTapTasbih = (delta: number = 1) => {
    triggerHaptic('medium');
    incrementDhikrCount(storageKey, targetCount, delta);
  };

  // Reset Tasbih Count
  const handleResetCount = () => {
    triggerHaptic('warning');
    setDhikrCount(storageKey, 0);
  };

  // Speech Narration
  const handleToggleSpeech = () => {
    triggerHaptic('medium');
    if (currentTrack?.id === dhikrTrackId) {
      togglePlayPause();
    } else {
      playTrack({
        id: dhikrTrackId,
        type: 'dhikr_urdu',
        title: `Daily Dhikr • ${dhikr.titleEn}`,
        subtitle: `${dhikr.titleUrdu}`,
        speechText: `${dhikr.titleUrdu}۔ ${dhikr.urdu_translation}۔ فضیلت: ${dhikr.virtueUrdu}`,
        sourceInfo: 'Daily Dhikr'
      });
    }
  };

  // Copy Dhikr
  const handleCopy = () => {
    triggerHaptic('success');
    const fullText = `📿 روزانہ کا ذکر و تسبیح (Daily Dhikr)\n📌 ${dhikr.titleUrdu} (${dhikr.titleEn})\n\n${dhikr.arabic}\n\nتلفظ / Transliteration:\n${dhikr.transliteration}\n\nاردو ترجمہ:\n${dhikr.urdu_translation}\n\nEnglish Translation:\n${dhikr.english_translation}\n\n🎯 ہدف (Target): ${targetCount} مرتبہ\n📖 سند و فضیلت: ${dhikr.source}\n${dhikr.virtueUrdu}\n\nDaily Noor (نورِ روزانہ App)`;
    
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Share Dhikr
  const handleShare = async () => {
    triggerHaptic('light');
    const shareText = `📿 روزانہ کا ذکر و تسبیح - ${dhikr.titleUrdu}\n\n${dhikr.arabic}\n\n"${dhikr.urdu_translation}"\n\n🎯 ہدف: ${targetCount} مرتبہ\n📖 سند: ${dhikr.source}\n\nDaily Noor - Spiritual Routine App`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Daily Dhikr - ${dhikr.titleUrdu}`,
          text: shareText,
          url: window.location.href,
        });
      } catch (e) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const handlePrevDhikr = () => {
    triggerHaptic('light');
    setSelectedIndex(prev => (prev > 0 ? prev - 1 : DAILY_DHIKRS.length - 1));
  };

  const handleNextDhikr = () => {
    triggerHaptic('light');
    setSelectedIndex(prev => (prev < DAILY_DHIKRS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div 
      id="card-daily-dhikr-tasbih"
      className="relative max-w-4xl mx-auto my-6 sm:my-8 rounded-3xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/15 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300"
    >
      {/* Top Banner Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-[#0B5D3C] via-[#C9A227] to-[#0B5D3C]" />

      <div className="p-5 sm:p-7 md:p-8 space-y-6">

        {/* Header Section & Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#0B5D3C]/10 dark:border-white/10">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0B5D3C] to-[#061912] border border-[#C9A227]/40 flex items-center justify-center text-[#E5C76B] shadow-md shrink-0">
              <Layers className="w-6 h-6 text-[#E5C76B]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0B5D3C] dark:text-[#E8EFEA] tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Daily Dhikr & Tasbih</span>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] border border-[#C9A227]/30">
                    {dhikr.category || 'Tasbih & Praise'}
                  </span>
                  <span className="font-urdu text-sm sm:text-base font-bold text-[#0B5D3C] dark:text-[#E5C76B]" dir="rtl">
                    روزانہ کا ذکر و تسبیح
                  </span>
                </h2>
              </div>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] mt-0.5 hidden sm:block">
                Interactive digital tasbih counter with authentic virtues and multi-language translations.
              </p>
            </div>
          </div>

          {/* Dhikr Switcher Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            <div className="flex items-center gap-1 bg-[#F5F1E8] dark:bg-[#0C1813] p-1 rounded-2xl border border-[#0B5D3C]/10 dark:border-white/10">
              <button
                id="btn-prev-dhikr"
                onClick={handlePrevDhikr}
                title="Previous Dhikr"
                className="p-1.5 rounded-xl text-[#1D2B24] dark:text-[#E8EFEA] hover:bg-white dark:hover:bg-[#142820] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-2.5 py-1 text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                Dhikr {selectedIndex + 1} of {DAILY_DHIKRS.length}
              </span>

              <button
                id="btn-next-dhikr"
                onClick={handleNextDhikr}
                title="Next Dhikr"
                className="p-1.5 rounded-xl text-[#1D2B24] dark:text-[#E8EFEA] hover:bg-white dark:hover:bg-[#142820] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Dhikr Titles */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D2B24] dark:text-[#E8EFEA] tracking-tight">
              {dhikr.titleEn}
            </h2>
            <span className="flex items-center gap-1 px-3 py-1 rounded-xl bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] text-xs font-bold">
              <Target className="w-3.5 h-3.5" />
              <span>Target: {targetCount} Recitations</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#0B5D3C] dark:text-[#C9A227] font-urdu" dir="rtl">
            {dhikr.titleUrdu}
          </h3>
        </div>

        {/* Large Arabic Uthmani Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F1E8]/80 dark:bg-[#0C1813]/80 border border-[#0B5D3C]/15 dark:border-white/10 text-center space-y-4 shadow-inner">
          <p 
            className="text-2xl sm:text-3xl md:text-4xl font-arabic text-[#0B5D3C] dark:text-[#E8EFEA] leading-relaxed sm:leading-loose selection:bg-[#C9A227]/30"
            dir="rtl"
          >
            {dhikr.arabic}
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              id="btn-dhikr-listen-speech"
              onClick={handleToggleSpeech}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isPlayingSpeech
                  ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] shadow-md animate-pulse'
                  : 'bg-white dark:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
              }`}
            >
              {isPlayingSpeech ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />}
              <span>{isPlayingSpeech ? 'Stop Voice' : 'Listen Pronunciation'}</span>
            </button>
          </div>
        </div>

        {/* MAIN DIGITAL TASBIH COUNTER ENGINE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#F5F1E8] to-[#EFEAD8] dark:from-[#0C1813] dark:to-[#142820] border border-[#0B5D3C]/20 dark:border-white/10 space-y-6 text-center shadow-lg relative overflow-hidden">
          
          {/* Progress Bar Top Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
              <span>Tasbih Progress</span>
              <span className="text-[#0B5D3C] dark:text-[#C9A227]">{currentCount} / {targetCount} ({progressPercent}%)</span>
            </div>

            <div className="w-full h-3 rounded-full bg-[#0B5D3C]/10 dark:bg-white/10 overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-[#0B5D3C] via-[#22c55e] to-[#C9A227] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* LARGE INTERACTIVE TOUCHABLE TASBIH BEAD BUTTON */}
          <div className="flex flex-col items-center justify-center space-y-4 my-2">
            
            <button
              id="btn-tasbih-counter-bead"
              onClick={() => handleTapTasbih(1)}
              className={`relative group w-40 h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center transition-all duration-150 transform active:scale-95 shadow-2xl border-4 select-none cursor-pointer ${
                isCompleted
                  ? 'bg-gradient-to-br from-[#0B5D3C] via-[#117A51] to-[#0B5D3C] text-white border-[#C9A227] ring-4 ring-[#C9A227]/30'
                  : 'bg-gradient-to-br from-white via-[#FAF8F5] to-[#EFEAD8] dark:from-[#142820] dark:via-[#1C3A2E] dark:to-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] border-[#0B5D3C]/30 dark:border-[#C9A227]/40 hover:border-[#0B5D3C]'
              }`}
            >
              {/* Outer Decorative Ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#0B5D3C]/20 dark:border-white/20 pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D53] dark:text-[#96A89F] group-hover:text-[#0B5D3C] dark:group-hover:text-[#C9A227] transition-colors">
                TAP TASBIH
              </span>

              <span className="text-4xl sm:text-5xl font-black font-mono my-1 tracking-tight">
                {currentCount}
              </span>

              <span className="text-[11px] font-semibold text-[#0B5D3C] dark:text-[#E5C76B]">
                {isCompleted ? '✓ Target Achieved!' : `Goal: ${targetCount}`}
              </span>
            </button>

            {/* Quick Increment & Preset Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                id="btn-tasbih-add-1"
                onClick={() => handleTapTasbih(1)}
                className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/20 text-[#1D2B24] dark:text-[#E8EFEA] text-xs font-bold hover:bg-[#0B5D3C]/10 transition-colors shadow-xs"
              >
                +1 Tap
              </button>

              <button
                id="btn-tasbih-add-10"
                onClick={() => handleTapTasbih(10)}
                className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/20 text-[#1D2B24] dark:text-[#E8EFEA] text-xs font-bold hover:bg-[#0B5D3C]/10 transition-colors shadow-xs"
              >
                +10 Fast
              </button>

              <button
                id="btn-tasbih-complete-target"
                onClick={() => {
                  triggerHaptic('success');
                  setDhikrCount(storageKey, targetCount);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
              >
                Complete ({targetCount})
              </button>

              <button
                id="btn-tasbih-reset-zero"
                onClick={handleResetCount}
                title="Reset Counter to 0"
                className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40 text-xs font-bold hover:bg-rose-100 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Target Preset Selector Badges */}
            <div className="flex items-center justify-center gap-1.5 pt-2">
              <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium mr-1">
                Preset Goal:
              </span>
              {[33, 100, 500].map((preset) => (
                <button
                  key={preset}
                  id={`preset-target-${preset}`}
                  onClick={() => {
                    triggerHaptic('light');
                    setCustomTarget(preset);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    targetCount === preset
                      ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]'
                      : 'bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border border-[#0B5D3C]/10'
                  }`}
                >
                  {preset}x
                </button>
              ))}
            </div>

          </div>

          {/* Completion Mubarak Message */}
          {isCompleted && (
            <div className="p-4 rounded-2xl bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 text-center space-y-1 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                <Sparkles className="w-4 h-4" />
                <span>Mubarak! You have completed this Dhikr target ({currentCount} Recitations).</span>
              </div>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                ما شاء اللہ! آپ نے آج کا ذکر مکمل کر لیا ہے۔ اللہ پاک آپ کی عبادات قبول فرمائے۔
              </p>
            </div>
          )}

        </div>

        {/* Pronunciation & Translations */}
        <div className="space-y-3">
          {/* Transliteration */}
          <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block mb-0.5">
              Pronunciation / Transliteration (تلفظ)
            </span>
            <p className="text-sm font-medium italic text-amber-950 dark:text-amber-200">
              "{dhikr.transliteration}"
            </p>
          </div>

          {/* Urdu & English Translations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F5F1E8]/50 dark:bg-[#0C1813]/50 border border-[#0B5D3C]/10 dark:border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] block font-urdu" dir="rtl">
                اردو ترجمہ
              </span>
              <p className="text-base font-bold text-[#1D2B24] dark:text-[#E8EFEA] font-urdu leading-relaxed" dir="rtl">
                {dhikr.urdu_translation}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F1E8]/50 dark:bg-[#0C1813]/50 border border-[#0B5D3C]/10 dark:border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] block">
                English Translation
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#2C3E35] dark:text-[#D1DDD6] leading-relaxed">
                "{dhikr.english_translation}"
              </p>
            </div>
          </div>
        </div>

        {/* Virtue & Hadith Reference Card */}
        <div className="p-5 rounded-2xl bg-[#0B5D3C]/5 dark:bg-[#C9A227]/10 border border-[#0B5D3C]/15 dark:border-[#C9A227]/20 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
              <span className="text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA] uppercase tracking-wider">
                Hadith Virtue & Reference (سند و فضیلت)
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-white dark:bg-[#142820] text-[11px] font-bold text-[#0B5D3C] dark:text-[#E5C76B] border border-[#0B5D3C]/10">
              {dhikr.source}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#2C3E35] dark:text-[#D1DDD6] font-urdu leading-relaxed" dir="rtl">
            {dhikr.virtueUrdu}
          </p>
        </div>

        {/* Bottom Bar: Copy & Share */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#0B5D3C]/10 dark:border-white/10">
          <span className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-medium">
            Daily Noor Dhikr Routine
          </span>

          <div className="flex items-center gap-2">
            <button
              id={`btn-copy-dhikr-${dhikr.id}`}
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] text-xs font-bold hover:bg-[#0B5D3C]/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" /> : <Copy className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              id={`btn-share-dhikr-${dhikr.id}`}
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Dhikr</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
