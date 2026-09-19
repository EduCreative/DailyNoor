import React from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { getTodayDateString, getDayOfYear } from '../utils/dateUtils';
import { triggerHaptic } from '../utils/haptics';
import { 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  Sparkles, 
  BookOpen, 
  HeartHandshake,
  Share2,
  ImageIcon
} from 'lucide-react';

interface StreakBannerProps {
  onOpenSummaryCard?: () => void;
  onOpenQuiz?: () => void;
}

export const StreakBanner: React.FC<StreakBannerProps> = ({ onOpenSummaryCard, onOpenQuiz }) => {
  const { 
    selectedDate, 
    setSelectedDate, 
    getProgressForDate, 
    getStreakInfo 
  } = useDailyStore();

  const progress = getProgressForDate(selectedDate);
  const streakInfo = getStreakInfo();
  const todayStr = getTodayDateString();
  const isToday = selectedDate === todayStr;

  const dayOfYear = getDayOfYear(new Date(selectedDate + 'T00:00:00'));

  const handlePrevDay = () => {
    triggerHaptic('light');
    const d = new Date(selectedDate + 'T00:00:00');
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    setSelectedDate(`${y}-${m}-${day}`);
  };

  const handleNextDay = () => {
    triggerHaptic('light');
    const d = new Date(selectedDate + 'T00:00:00');
    d.setDate(d.getDate() + 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    setSelectedDate(`${y}-${m}-${day}`);
  };

  const completedCount = (progress.verseRead ? 1 : 0) + (progress.hadithRead ? 1 : 0);
  const progressPercent = completedCount * 50;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-6">
      <div className="bg-white/80 dark:bg-[#142820]/90 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-[#0B5D3C]/10 dark:border-[#C9A227]/20 shadow-xs relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#C9A227]/10 pointer-events-none blur-xl" />
        <div className="absolute -left-8 -bottom-8 w-28 h-28 rounded-full bg-[#0B5D3C]/10 pointer-events-none blur-xl" />

        <div className="relative z-10">
          
          {/* Top Date Navigation & Routine Tag */}
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#0B5D3C]/10 dark:border-white/10">
            <button
              id="streak-prev-day-btn"
              onClick={handlePrevDay}
              className="flex items-center gap-1 text-xs font-semibold text-[#2D3E35] dark:text-[#C5D5CC] hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] px-2 py-1 rounded-lg hover:bg-[#0B5D3C]/5 dark:hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous Day</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B5D3C]/10 dark:bg-[#C9A227]/15 text-[#0B5D3C] dark:text-[#E5C76B] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Day {dayOfYear} of 365</span>
                {isToday && <span className="text-[10px] bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] px-1.5 py-0.2 rounded-sm ml-1 font-semibold">Today</span>}
              </span>

              {/* Combined Summary Card Quick Trigger Button */}
              {onOpenSummaryCard && (
                <button
                  id="streak-open-summary-card-btn"
                  onClick={() => {
                    triggerHaptic('medium');
                    onOpenSummaryCard();
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/20 hover:bg-[#C9A227]/30 text-[#7A5B0B] dark:text-[#E5C76B] text-xs font-bold border border-[#C9A227]/40 transition-colors shadow-xs"
                  title="Generate combined image card for WhatsApp & Social Media"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Daily Summary Card</span>
                </button>
              )}
            </div>

            <button
              id="streak-next-day-btn"
              onClick={handleNextDay}
              className="flex items-center gap-1 text-xs font-semibold text-[#2D3E35] dark:text-[#C5D5CC] hover:text-[#0B5D3C] dark:hover:text-[#E8EFEA] px-2 py-1 rounded-lg hover:bg-[#0B5D3C]/5 dark:hover:bg-white/5 transition-colors"
            >
              <span className="hidden sm:inline">Next Day</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Daily Progress Status & 2-Step Badges */}
          <div className="mt-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-[#111E18] dark:text-[#E8EFEA]">
                  {progress.completed ? (
                    <span className="text-[#084D31] dark:text-[#E5C76B] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> الحمد لله! Daily Noor Completed
                    </span>
                  ) : completedCount === 1 ? (
                    '1 of 2 Completed — Almost there!'
                  ) : (
                    'Daily Routine: 2 Spiritual Reflections'
                  )}
                </h2>
              </div>
              <p className="text-xs text-[#2D3E35] dark:text-[#C5D5CC] font-medium mt-0.5 font-urdu text-right sm:text-left" dir="rtl">
                {progress.completed
                  ? 'ماشاء اللہ! آج کی آیت اور حدیث مکمل ہو چکی ہیں۔'
                  : 'روزانہ ایک آیت اور ایک حدیث سے اپنی اور گھر والوں کی زندگی سنواریے۔'}
              </p>
            </div>

            {/* Steps Pills & Mobile Summary Trigger */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Step 1: Verse */}
              <div 
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  progress.verseRead
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813]/60 border-[#0B5D3C]/15 dark:border-white/10 text-[#2D3E35] dark:text-[#C5D5CC]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>1. Verse</span>
                {progress.verseRead ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900" />
                ) : (
                  <Circle className="w-3.5 h-3.5 opacity-40" />
                )}
              </div>

              {/* Step 2: Hadith */}
              <div 
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  progress.hadithRead
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813]/60 border-[#0B5D3C]/15 dark:border-white/10 text-[#2D3E35] dark:text-[#C5D5CC]'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>2. Hadith</span>
                {progress.hadithRead ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-900" />
                ) : (
                  <Circle className="w-3.5 h-3.5 opacity-40" />
                )}
              </div>

              {/* Step 3: Daily Quiz */}
              {onOpenQuiz && (
                <button 
                  id="streak-quiz-step-btn"
                  onClick={() => {
                    triggerHaptic('medium');
                    onOpenQuiz();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    progress.quizCompleted
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/50 text-amber-800 dark:text-amber-300'
                      : 'bg-[#C9A227]/15 hover:bg-[#C9A227]/25 border-[#C9A227]/40 text-[#8F7212] dark:text-[#E5C76B]'
                  }`}
                  title="Daily Islamic Reflection Quiz"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>3. Quiz</span>
                  {progress.quizCompleted ? (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500 text-white dark:text-black">
                      {progress.quizScore ?? 3}/{progress.quizTotal ?? 3}
                    </span>
                  ) : (
                    <span className="text-[10px] opacity-75">کوئز</span>
                  )}
                </button>
              )}

              {/* Mobile button for Summary Card */}
              {onOpenSummaryCard && (
                <button
                  id="streak-open-summary-card-mobile-btn"
                  onClick={() => {
                    triggerHaptic('medium');
                    onOpenSummaryCard();
                  }}
                  className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#C9A227] text-[#0C1813] text-xs font-bold shadow-xs"
                  title="Summary Card"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Card</span>
                </button>
              )}

            </div>

          </div>

          {/* Progress Bar Line */}
          <div className="mt-3 w-full bg-[#0B5D3C]/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#0B5D3C] via-[#C9A227] to-emerald-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Active streak incentive note & Social Card shortcut */}
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#4A5D53] dark:text-[#96A89F]">
            {streakInfo.currentStreak > 0 ? (
              <span className="flex items-center gap-1 text-amber-700 dark:text-amber-300 font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {streakInfo.currentStreak} Day Active Streak
              </span>
            ) : (
              <span>Begin your spiritual routine today</span>
            )}
            
            {onOpenSummaryCard && (
              <button
                onClick={() => {
                  triggerHaptic('medium');
                  onOpenSummaryCard();
                }}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] hover:underline"
              >
                <Share2 className="w-3 h-3" />
                <span>Share Daily Summary Card</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
