import React, { useState, useEffect } from 'react';
import { Dua } from '../types';
import { MASNOON_DUAS } from '../data/duaData';
import { useDailyStore } from '../store/useDailyStore';
import { useAudioStore } from '../store/useAudioStore';
import { getWeeklyIndex } from '../utils/dateUtils';
import { triggerHaptic } from '../utils/haptics';
import { 
  Heart, 
  Volume2, 
  VolumeX, 
  Check, 
  Copy, 
  Bookmark, 
  Share2, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Award, 
  Sparkles, 
  Clock, 
  ListOrdered,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

interface DuaCardProps {
  dateStr: string;
  onOpenAllDuas?: () => void;
}

export const DuaCard: React.FC<DuaCardProps> = ({ dateStr, onOpenAllDuas }) => {
  const { 
    settings, 
    toggleBookmark, 
    isBookmarked, 
    memorizedDuas, 
    toggleDuaMemorized, 
    isDuaMemorized 
  } = useDailyStore();

  const { playTrack, togglePlayPause, currentTrack, isTrackPlaying } = useAudioStore();

  // Calculate current week based on selected date
  const currentWeekNumber = getWeeklyIndex(MASNOON_DUAS.length, dateStr);
  const [selectedWeek, setSelectedWeek] = useState<number>(currentWeekNumber);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Sync with date changes if week changes
  useEffect(() => {
    setSelectedWeek(currentWeekNumber);
  }, [currentWeekNumber]);

  const dua: Dua = MASNOON_DUAS.find(d => d.week === selectedWeek) || MASNOON_DUAS[0];

  const isSaved = isBookmarked(`dua-${dua.week}`);
  const isMemorized = isDuaMemorized(dua.week);

  const duaTrackId = `dua-urdu-${dua.week}`;
  const isPlayingSpeech = isTrackPlaying(duaTrackId);

  // State
  const [copied, setCopied] = useState(false);

  // Handle Speech Narration
  const handleToggleSpeech = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerHaptic('medium');
    if (currentTrack?.id === duaTrackId) {
      togglePlayPause();
    } else {
      playTrack({
        id: duaTrackId,
        type: 'dua_urdu',
        title: `Masnoon Dua • Week ${dua.week}`,
        subtitle: `${dua.titleUrdu} (${dua.titleEn})`,
        speechText: `${dua.titleUrdu}۔ ${dua.urdu_translation}۔ فضیلت: ${dua.benefit}`,
        sourceInfo: 'Masnoon Dua of the Week'
      });
    }
  };

  // Copy Dua Text
  const handleCopy = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerHaptic('success');
    const fullText = `✨ مسنون دعائے ہفتہ (ہفتہ ${dua.week} از 52)\n📌 ${dua.titleUrdu} (${dua.titleEn})\n\narabic:\n${dua.arabic}\n\nتلفظ / Transliteration:\n${dua.transliteration}\n\nاردو ترجمہ:\n${dua.urdu_translation}\n\nEnglish Translation:\n${dua.english_translation}\n\n📖 سند / Source: ${dua.source}\n💡 موقع / Occasion: ${dua.occasion}\n🌟 فضیلت / Benefit: ${dua.benefit}\n\nکوڈ: Daily Noor (نورِ روزانہ App)`;
    
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Share Dua
  const handleShare = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerHaptic('light');
    const shareText = `✨ مسنون دعائے ہفتہ (ہفتہ ${dua.week})\n📌 ${dua.titleUrdu}\n\n${dua.arabic}\n\n"${dua.urdu_translation}"\n\n📖 سند: ${dua.source}\n\nDaily Noor - Daily Islamic Routine App`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `مسنون دعائے ہفتہ - ${dua.titleUrdu}`,
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

  const handlePrevWeek = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic('light');
    setSelectedWeek(prev => (prev > 1 ? prev - 1 : MASNOON_DUAS.length));
  };

  const handleNextWeek = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic('light');
    setSelectedWeek(prev => (prev < MASNOON_DUAS.length ? prev + 1 : 1));
  };

  const totalMemorizedCount = memorizedDuas.length;
  const memorizedPercent = Math.round((totalMemorizedCount / MASNOON_DUAS.length) * 100);

  return (
    <div 
      id="card-masnoon-dua-of-week"
      className="app-card-surface relative max-w-4xl mx-auto my-6 sm:my-8 rounded-3xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/15 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300"
    >
      {/* Top Banner Accent */}
      <div className="h-2 bg-gradient-to-r from-[#0B5D3C] via-[#C9A227] to-[#0B5D3C]" />

      <div className="p-4 sm:p-6 md:p-8">

        {/* Header Navigation & Week Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-[#0B5D3C]/10 dark:border-white/10">
          
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0B5D3C] to-[#061912] border border-[#C9A227]/40 flex items-center justify-center text-[#E5C76B] shadow-md shrink-0">
              <Heart className="w-6 h-6 fill-[#E5C76B]/20 text-[#E5C76B]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0B5D3C] dark:text-[#E8EFEA] tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Dua of the Week</span>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] border border-[#C9A227]/30">
                    Week {dua.week} of 52
                  </span>
                  <span className="font-urdu text-sm sm:text-base font-bold text-[#0B5D3C] dark:text-[#E5C76B]" dir="rtl">
                    ہفتے کی مسنون دعا
                  </span>
                </h2>
                {isMemorized && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-0.5 border border-emerald-500/30">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Memorized</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] mt-0.5 hidden sm:block">
                1 Week • 1 Dua Memorization routine with audio recitations & contextual virtues.
              </p>
            </div>
          </div>

          {/* Week Selector Controls & Collapse Button */}
          <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 shrink-0 flex-wrap">
            
            {/* Memorization Progress Badge */}
            <div 
              title={`${totalMemorizedCount} of ${MASNOON_DUAS.length} Duas Memorized`}
              className="flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] border border-[#0B5D3C]/10 dark:border-white/10 text-xs font-semibold text-[#1D2B24] dark:text-[#E8EFEA]"
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227]" />
              <span>{totalMemorizedCount}/52</span>
              <span className="text-[10px] text-[#4A5D53] dark:text-[#96A89F] hidden xs:inline">({memorizedPercent}%)</span>
            </div>

            <div className="flex items-center gap-0.5 bg-[#F5F1E8] dark:bg-[#0C1813] p-0.5 sm:p-1 rounded-2xl border border-[#0B5D3C]/10 dark:border-white/10">
              <button
                id="btn-prev-week-dua"
                onClick={handlePrevWeek}
                title="Previous Week's Dua"
                className="p-1 sm:p-1.5 rounded-xl text-[#1D2B24] dark:text-[#E8EFEA] hover:bg-white dark:hover:bg-[#142820] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                id="btn-current-week-reset"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerHaptic('light');
                  setSelectedWeek(currentWeekNumber);
                }}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedWeek === currentWeekNumber
                    ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]'
                    : 'text-[#4A5D53] dark:text-[#96A89F] hover:text-[#1D2B24]'
                }`}
              >
                This Week
              </button>

              <button
                id="btn-next-week-dua"
                onClick={handleNextWeek}
                title="Next Week's Dua"
                className="p-1 sm:p-1.5 rounded-xl text-[#1D2B24] dark:text-[#E8EFEA] hover:bg-white dark:hover:bg-[#142820] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {onOpenAllDuas && (
              <button
                id="btn-open-all-52-duas"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerHaptic('light');
                  onOpenAllDuas();
                }}
                title="View All 52 Weekly Duas"
                className="flex items-center gap-1 px-2.5 py-1 sm:py-1.5 rounded-2xl bg-[#0B5D3C]/10 dark:bg-white/10 text-[#0B5D3C] dark:text-[#E8EFEA] text-xs font-bold hover:bg-[#0B5D3C]/20 transition-colors"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All 52</span>
              </button>
            )}

            {/* Expand / Collapse Button */}
            <button
              id="btn-toggle-expand-dua-card"
              onClick={() => {
                triggerHaptic('light');
                setIsExpanded(prev => !prev);
              }}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] hover:bg-[#C9A227]/30 text-xs font-bold transition-all ml-1"
              title={isExpanded ? "Collapse Dua Details" : "Expand Dua Details"}
            >
              <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

          </div>

        </div>

        {/* Collapsed State Summary Row */}
        {!isExpanded && (
          <div 
            onClick={() => {
              triggerHaptic('light');
              setIsExpanded(true);
            }}
            className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer group"
          >
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-[#1D2B24] dark:text-[#E8EFEA] group-hover:text-[#0B5D3C] dark:group-hover:text-[#C9A227] transition-colors">
                  {dua.titleEn}
                </h2>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] text-[11px] font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{dua.occasion}</span>
                </span>
              </div>
              <p className="text-sm font-semibold text-[#0B5D3C] dark:text-[#C9A227] font-urdu" dir="rtl">
                {dua.titleUrdu}
              </p>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-arabic line-clamp-1 opacity-90" dir="rtl">
                {dua.arabic}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                id="btn-listen-dua-speech-collapsed"
                onClick={handleToggleSpeech}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isPlayingSpeech
                    ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] shadow-md animate-pulse'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                }`}
                title="Listen to Urdu Recitation"
              >
                {isPlayingSpeech ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />}
                <span className="text-[11px]">{isPlayingSpeech ? 'Stop' : 'Listen'}</span>
              </button>

              <button
                id="btn-expand-dua-action"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerHaptic('light');
                  setIsExpanded(true);
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-xs font-bold shadow-xs hover:opacity-90 transition-opacity"
              >
                <span>View Full Dua</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Expanded Full State */}
        {isExpanded && (
          <div className="space-y-6 pt-4 animate-in fade-in duration-200">
            {/* Dua Title & Occasion */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D2B24] dark:text-[#E8EFEA] tracking-tight">
                  {dua.titleEn}
                </h2>
                <span className="flex items-center gap-1 px-3 py-1 rounded-xl bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{dua.occasion}</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0B5D3C] dark:text-[#C9A227] font-urdu" dir="rtl">
                {dua.titleUrdu}
              </h3>
            </div>

            {/* Large Uthmani Arabic Box */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#F5F1E8]/80 dark:bg-[#0C1813]/80 border border-[#0B5D3C]/15 dark:border-white/10 text-center space-y-4 shadow-inner">
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-arabic text-[#0B5D3C] dark:text-[#E8EFEA] leading-relaxed sm:leading-loose selection:bg-[#C9A227]/30"
                dir="rtl"
              >
                {dua.arabic}
              </p>

              {/* Audio & Transliteration Quick Switcher */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  id="btn-listen-dua-speech"
                  onClick={handleToggleSpeech}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isPlayingSpeech
                      ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] shadow-md animate-pulse'
                      : 'bg-white dark:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/15 dark:border-white/10 hover:border-[#0B5D3C]'
                  }`}
                >
                  {isPlayingSpeech ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />}
                  <span>{isPlayingSpeech ? 'Stop Voice' : 'Listen Narration'}</span>
                </button>
              </div>
            </div>

            {/* Transliteration Box (Pronunciation) */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                Pronunciation / Transliteration (تلفظ)
              </span>
              <p className="text-sm font-medium italic text-amber-950 dark:text-amber-200 leading-relaxed">
                "{dua.transliteration}"
              </p>
            </div>

            {/* Translations: Urdu & English */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Urdu Translation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F1E8]/50 dark:bg-[#0C1813]/50 border border-[#0B5D3C]/10 dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] block font-urdu" dir="rtl">
                  اردو ترجمہ
                </span>
                <p className="text-base sm:text-lg font-bold text-[#1D2B24] dark:text-[#E8EFEA] font-urdu leading-relaxed" dir="rtl">
                  {dua.urdu_translation}
                </p>
              </div>

              {/* English Translation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F1E8]/50 dark:bg-[#0C1813]/50 border border-[#0B5D3C]/10 dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] block">
                  English Translation
                </span>
                <p className="text-sm font-medium text-[#2C3E35] dark:text-[#D1DDD6] leading-relaxed">
                  "{dua.english_translation}"
                </p>
              </div>
            </div>

            {/* Authentic Source & Virtue Card (سند و فضیلت) */}
            <div className="p-5 rounded-2xl bg-[#0B5D3C]/5 dark:bg-[#C9A227]/10 border border-[#0B5D3C]/15 dark:border-[#C9A227]/20 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />
                  <span className="text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA] uppercase tracking-wider">
                    Source & Recommendation (سند و فضیلت)
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#142820] text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] border border-[#0B5D3C]/10 dark:border-white/10">
                  {dua.source}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#2C3E35] dark:text-[#D1DDD6] font-urdu leading-relaxed" dir="rtl">
                {dua.benefit}
              </p>
            </div>

            {/* Weekly Family Practice Tip & Memorization Action */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#EFEAD8] dark:from-[#0C1813] dark:to-[#142820] border border-[#C9A227]/30 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C9A227] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Lightbulb className="w-5 h-5 fill-white" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#8F7212] dark:text-[#E5C76B] uppercase tracking-wider block">
                    7-Day Family Memorization Goal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#1D2B24] dark:text-[#E8EFEA] font-urdu leading-relaxed" dir="rtl">
                    {dua.memorization_tip}
                  </p>
                </div>
              </div>

              {/* Memorization Goal Toggle Button */}
              <div className="pt-2 border-t border-[#0B5D3C]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                  {isMemorized ? (
                    <span className="text-[#0B5D3C] dark:text-[#C9A227] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 inline" />
                      Alhamdulillah! You have memorized this Dua.
                    </span>
                  ) : (
                    <span>Goal: Recite multiple times daily throughout Week {dua.week}.</span>
                  )}
                </div>

                <button
                  id={`btn-toggle-memorized-week-${dua.week}`}
                  onClick={() => {
                    triggerHaptic('success');
                    toggleDuaMemorized(dua.week);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    isMemorized
                      ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] hover:opacity-90'
                      : 'bg-white dark:bg-[#142820] text-[#0B5D3C] dark:text-[#E5C76B] border border-[#0B5D3C]/30 hover:bg-[#0B5D3C]/10'
                  }`}
                >
                  {isMemorized ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Memorized! (حفظ شدہ)</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#C9A227]" />
                      <span>Mark as Memorized (حفظ کر لیا)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer Actions Bar: Bookmark, Copy, Share */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#0B5D3C]/10 dark:border-white/10">
              <button
                id={`btn-bookmark-dua-${dua.week}`}
                onClick={(e) => {
                  e.stopPropagation();
                  triggerHaptic('medium');
                  toggleBookmark({ id: `dua-${dua.week}`, type: 'dua', day: dua.week });
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSaved
                    ? 'bg-[#C9A227]/20 text-[#8F7212] dark:text-[#E5C76B] border border-[#C9A227]/40'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813] text-[#4A5D53] dark:text-[#96A89F] hover:text-[#1D2B24]'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? 'Saved' : 'Bookmark'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  id={`btn-copy-dua-${dua.week}`}
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] text-xs font-bold hover:bg-[#0B5D3C]/10 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" /> : <Copy className="w-4 h-4 text-[#0B5D3C] dark:text-[#C9A227]" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>

                <button
                  id={`btn-share-dua-${dua.week}`}
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Dua</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

