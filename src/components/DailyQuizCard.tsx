import React from 'react';
import { Verse, Hadith } from '../types';
import { useDailyStore } from '../store/useDailyStore';
import { triggerHaptic } from '../utils/haptics';
import { HelpCircle, Award, CheckCircle2, Sparkles, Play } from 'lucide-react';

interface DailyQuizCardProps {
  verse: Verse;
  hadith: Hadith;
  dateStr: string;
  onOpenQuiz: () => void;
}

export const DailyQuizCard: React.FC<DailyQuizCardProps> = ({
  verse,
  hadith,
  dateStr,
  onOpenQuiz
}) => {
  const { getProgressForDate } = useDailyStore();
  const progress = getProgressForDate(dateStr);

  const hasTakenQuiz = progress.quizCompleted;
  const score = progress.quizScore ?? 0;
  const total = progress.quizTotal ?? 3;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mt-6 mb-8">
      <div className="app-card-surface bg-white dark:bg-[#142820] text-[#111E18] dark:text-[#E8EFEA] rounded-3xl p-5 sm:p-6 border border-[#0B5D3C]/15 dark:border-[#C9A227]/30 shadow-lg shadow-black/5 relative overflow-hidden">
        
        {/* Background decorative glows */}
        <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-[#C9A227]/10 pointer-events-none blur-2xl" />
        <div className="absolute -left-6 -top-6 w-36 h-36 rounded-full bg-[#0B5D3C]/10 dark:bg-[#0B5D3C]/20 pointer-events-none blur-2xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Left: Info */}
          <div className="flex items-center gap-4 text-center md:text-left w-full md:w-auto justify-center md:justify-start flex-1 min-w-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B5D3C] to-[#061912] border border-[#C9A227]/40 flex items-center justify-center shrink-0 shadow-md">
              {hasTakenQuiz ? (
                <Award className="w-7 h-7 text-[#E5C76B]" />
              ) : (
                <HelpCircle className="w-7 h-7 text-[#E5C76B]" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                <h3 className="font-extrabold text-lg sm:text-xl text-[#084D31] dark:text-white flex items-center gap-2 flex-wrap break-words">
                  <span>Daily Islamic Quiz</span>
                  <span className="font-urdu text-sm sm:text-base font-bold text-[#7A5B0B] dark:text-[#E5C76B]" dir="rtl">روزانہ اسلامی کوئز</span>
                </h3>
                {hasTakenQuiz && (
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-500/40 shadow-xs shrink-0">
                    Completed
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#2D3E35] dark:text-[#C5D5CC] font-medium mt-1 break-words leading-relaxed">
                {hasTakenQuiz 
                  ? `Your score: ${score}/${total} points (${Math.round((score / total) * 100)}%). Test your knowledge anytime!`
                  : `3 quick questions on today's Surah ${verse.surah}, Hadith teachings, and Islamic ethics.`}
              </p>
            </div>
          </div>

          {/* Right: Action Button */}
          <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <button
              id="start-daily-quiz-btn"
              onClick={() => {
                triggerHaptic('medium');
                onOpenQuiz();
              }}
              className="w-full md:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#C9A227] to-[#DFB93C] hover:from-[#B38E1E] hover:to-[#C9A227] text-[#0C1813] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C9A227]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              {hasTakenQuiz ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Review / Retake Quiz</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Start 3-Question Quiz (کوئز شروع کریں)</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
