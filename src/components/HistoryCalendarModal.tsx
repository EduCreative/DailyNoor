import React from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { getPast30Days, getTodayDateString, formatReadableDate } from '../utils/dateUtils';
import { IslamicLogo } from './IslamicLogo';
import { X, Calendar as CalendarIcon, Flame, Award, CheckCircle2, Circle, ChevronRight } from 'lucide-react';

interface HistoryCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryCalendarModal: React.FC<HistoryCalendarModalProps> = ({ isOpen, onClose }) => {
  const { 
    selectedDate, 
    setSelectedDate, 
    history, 
    getStreakInfo 
  } = useDailyStore();

  if (!isOpen) return null;

  const past30Days = getPast30Days();
  const todayStr = getTodayDateString();
  const streakInfo = getStreakInfo();

  const handleSelectDay = (dateStr: string) => {
    setSelectedDate(dateStr);
    onClose();
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
              <h3 className="font-bold text-base">30-Day Routine & Calendar</h3>
              <p className="text-xs text-white/80 font-urdu" dir="rtl">گزشتہ ۳۰ دنوں کی پیش رفت • Daily Noor</p>
            </div>
          </div>
          
          <button
            id="calendar-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Streaks & Stats Ribbon */}
        <div className="p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-b border-[#0B5D3C]/10 dark:border-white/10 grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400 mb-0.5">
              <Flame className="w-4 h-4 fill-current" />
              <span className="text-base font-bold">{streakInfo.currentStreak}</span>
            </div>
            <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Current Streak</span>
          </div>

          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-0.5">
              <Award className="w-4 h-4" />
              <span className="text-base font-bold">{streakInfo.bestStreak}</span>
            </div>
            <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Best Streak</span>
          </div>

          <div className="p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-[#0B5D3C] dark:text-[#C9A227] mb-0.5">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-base font-bold">{streakInfo.totalCompletedDays}</span>
            </div>
            <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Total Completed</span>
          </div>
        </div>

        {/* 30-Day Grid List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-2">
          <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-medium mb-3">
            Click any day to revisit that day's Quranic verse and Hadith:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {past30Days.map((dateStr) => {
              const progress = history[dateStr];
              const isToday = dateStr === todayStr;
              const isSelected = dateStr === selectedDate;
              const isFullyDone = progress?.completed;
              const isHalfDone = !isFullyDone && (progress?.verseRead || progress?.hadithRead);
              const dateInfo = formatReadableDate(dateStr);

              return (
                <button
                  key={dateStr}
                  onClick={() => handleSelectDay(dateStr)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'ring-2 ring-[#C9A227] bg-[#0B5D3C]/10 dark:bg-[#C9A227]/15 border-[#0B5D3C] dark:border-[#C9A227]'
                      : isFullyDone
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/25 border-emerald-300 dark:border-emerald-800/40 hover:bg-emerald-100/70'
                      : 'bg-[#F5F1E8]/50 dark:bg-[#0C1813]/40 border-[#0B5D3C]/10 dark:border-white/10 hover:bg-white dark:hover:bg-[#183127]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                        {dateStr}
                      </span>
                      {isToday && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] font-semibold">
                          Today
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                      {dateInfo.urdu}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {isFullyDone ? (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Both Done
                      </span>
                    ) : isHalfDone ? (
                      <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-full">
                        1 of 2 Done
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] opacity-60">
                        Incomplete
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#4A5D53] dark:text-[#96A89F] opacity-40" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-t border-[#0B5D3C]/10 dark:border-white/10 text-center">
          <button
            id="calendar-modal-today-shortcut-btn"
            onClick={() => handleSelectDay(todayStr)}
            className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] hover:underline"
          >
            Jump back to Today's Routine
          </button>
        </div>

      </div>
    </div>
  );
};
