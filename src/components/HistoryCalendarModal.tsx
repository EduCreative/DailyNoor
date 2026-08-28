import React, { useState } from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { getPast30Days, getTodayDateString, formatReadableDate, getDayOfYear } from '../utils/dateUtils';
import { IslamicLogo } from './IslamicLogo';
import { 
  X, 
  Calendar as CalendarIcon, 
  Flame, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Search
} from 'lucide-react';

interface HistoryCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MONTH_NAMES = [
  'January (جنوری)', 'February (فروری)', 'March (مارچ)', 'April (اپریل)',
  'May (مئی)', 'June (جون)', 'July (جولائی)', 'August (اگست)',
  'September (ستمبر)', 'October (اکتوبر)', 'November (نومبر)', 'December (دسمبر)'
];

export const HistoryCalendarModal: React.FC<HistoryCalendarModalProps> = ({ isOpen, onClose }) => {
  const { 
    selectedDate, 
    setSelectedDate, 
    history, 
    getStreakInfo 
  } = useDailyStore();

  const [activeTab, setActiveTab] = useState<'recent' | 'year'>('recent');
  
  const currentDateObj = selectedDate ? new Date(selectedDate + 'T00:00:00') : new Date();
  const [selectedYear, setSelectedYear] = useState<number>(currentDateObj.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(currentDateObj.getMonth());

  if (!isOpen) return null;

  const past30Days = getPast30Days();
  const todayStr = getTodayDateString();
  const streakInfo = getStreakInfo();

  const handleSelectDay = (dateStr: string) => {
    setSelectedDate(dateStr);
    onClose();
  };

  // Helper to generate days for selected month in year view
  const getDaysInMonth = (year: number, month: number) => {
    const days = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      days.push(`${y}-${m}-${d}`);
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const monthDays = getDaysInMonth(selectedYear, selectedMonth);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#142820] w-full max-w-xl rounded-3xl border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B5D3C] to-[#073D27] text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IslamicLogo size={36} variant="shield" />
            <div>
              <h3 className="font-bold text-base">365-Day Islamic Calendar</h3>
              <p className="text-xs text-white/80 font-urdu" dir="rtl">پورے سال کی پیش رفت و روزمرہ تاریخ • Daily Noor</p>
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
        <div className="p-3 sm:p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-b border-[#0B5D3C]/10 dark:border-white/10 grid grid-cols-3 gap-2 text-center">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400 mb-0.5">
              <Flame className="w-4 h-4 fill-current" />
              <span className="text-sm sm:text-base font-bold">{streakInfo.currentStreak}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Current Streak</span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-0.5">
              <Award className="w-4 h-4" />
              <span className="text-sm sm:text-base font-bold">{streakInfo.bestStreak}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Best Streak</span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/10 dark:border-white/10">
            <div className="flex items-center justify-center gap-1 text-[#0B5D3C] dark:text-[#C9A227] mb-0.5">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm sm:text-base font-bold">{streakInfo.totalCompletedDays}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#4A5D53] dark:text-[#96A89F] font-medium">Total Completed</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center border-b border-[#0B5D3C]/10 dark:border-white/10 px-4 pt-2 bg-white dark:bg-[#142820]">
          <button
            onClick={() => setActiveTab('recent')}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'recent'
                ? 'border-[#0B5D3C] text-[#0B5D3C] dark:border-[#C9A227] dark:text-[#C9A227]'
                : 'border-transparent text-[#4A5D53] dark:text-[#96A89F] hover:text-[#1D2B24]'
            }`}
          >
            Recent 30 Days (گزشتہ ۳۰ دن)
          </button>
          <button
            onClick={() => setActiveTab('year')}
            className={`flex-1 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'year'
                ? 'border-[#0B5D3C] text-[#0B5D3C] dark:border-[#C9A227] dark:text-[#C9A227]'
                : 'border-transparent text-[#4A5D53] dark:text-[#96A89F] hover:text-[#1D2B24]'
            }`}
          >
            Full 365-Day Explorer (پورے ۳۶۵ دن)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'recent' ? (
            <div>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-medium mb-3">
                Click any day to jump to that day's Quranic verse, Hadith, and Tafseer:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {past30Days.map((dateStr) => {
                  const progress = history[dateStr];
                  const isToday = dateStr === todayStr;
                  const isSelected = dateStr === selectedDate;
                  const isFullyDone = progress?.completed;
                  const isHalfDone = !isFullyDone && (progress?.verseRead || progress?.hadithRead);
                  const dateInfo = formatReadableDate(dateStr);
                  const dayNumOfYear = getDayOfYear(new Date(dateStr + 'T00:00:00'));

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
                          <span className="text-[10px] text-[#4A5D53] dark:text-[#96A89F]">
                            (Day {dayNumOfYear})
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
                            <CheckCircle2 className="w-3.5 h-3.5" /> Done
                          </span>
                        ) : isHalfDone ? (
                          <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-full">
                            1/2 Done
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
          ) : (
            <div className="space-y-4">
              {/* Month Navigation */}
              <div className="flex items-center justify-between bg-[#F5F1E8] dark:bg-[#0C1813] p-2.5 rounded-2xl border border-[#0B5D3C]/10 dark:border-white/10">
                <button
                  onClick={() => setSelectedMonth((prev) => (prev > 0 ? prev - 1 : 11))}
                  className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                    {MONTH_NAMES[selectedMonth]} {selectedYear}
                  </h4>
                  <p className="text-[10px] text-[#4A5D53] dark:text-[#96A89F]">
                    All 365 days of the year are ready with Daily Noor records
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMonth((prev) => (prev < 11 ? prev + 1 : 0))}
                  className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Month Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                {monthDays.map((dateStr) => {
                  const dayNum = parseInt(dateStr.split('-')[2], 10);
                  const progress = history[dateStr];
                  const isToday = dateStr === todayStr;
                  const isSelected = dateStr === selectedDate;
                  const isFullyDone = progress?.completed;
                  const dayOfYearNum = getDayOfYear(new Date(dateStr + 'T00:00:00'));

                  return (
                    <button
                      key={dateStr}
                      onClick={() => handleSelectDay(dateStr)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'ring-2 ring-[#C9A227] bg-[#0B5D3C] text-white border-[#0B5D3C]'
                          : isToday
                          ? 'border-[#0B5D3C] bg-emerald-50 dark:bg-emerald-950/40 text-[#0B5D3C] dark:text-[#C9A227] font-bold'
                          : isFullyDone
                          ? 'bg-emerald-100/60 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-800 text-[#1D2B24] dark:text-[#E8EFEA]'
                          : 'bg-white dark:bg-[#142820] border-[#0B5D3C]/10 dark:border-white/10 hover:border-[#0B5D3C] text-[#1D2B24] dark:text-[#E8EFEA]'
                      }`}
                    >
                      <span className="text-xs font-bold">{dayNum}</span>
                      <span className="text-[9px] opacity-70">Day {dayOfYearNum}</span>
                      {isFullyDone && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-0.5"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Direct Date Picker Jump */}
              <div className="pt-2 flex items-center justify-between bg-white dark:bg-[#142820] p-3 rounded-2xl border border-[#0B5D3C]/10 dark:border-white/10">
                <span className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-medium flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" /> Jump to Specific Date:
                </span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => {
                    if (e.target.value) handleSelectDay(e.target.value);
                  }}
                  className="text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-[#0B5D3C]/20 dark:border-white/20 bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] focus:outline-hidden focus:ring-1 focus:ring-[#0B5D3C]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-t border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
            Selected: <strong className="text-[#1D2B24] dark:text-[#E8EFEA]">{selectedDate}</strong> (Day {getDayOfYear(new Date(selectedDate + 'T00:00:00'))} of 365)
          </span>
          <button
            id="calendar-modal-today-shortcut-btn"
            onClick={() => handleSelectDay(todayStr)}
            className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] hover:underline"
          >
            Jump to Today
          </button>
        </div>

      </div>
    </div>
  );
};
