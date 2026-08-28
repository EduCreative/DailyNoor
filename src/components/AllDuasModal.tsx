import React, { useState } from 'react';
import { Dua } from '../types';
import { MASNOON_DUAS } from '../data/duaData';
import { useDailyStore } from '../store/useDailyStore';
import { triggerHaptic } from '../utils/haptics';
import { 
  X, 
  Search, 
  CheckCircle2, 
  BookOpen, 
  Heart, 
  Award, 
  Bookmark, 
  Check, 
  Sparkles, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

interface AllDuasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWeek?: (week: number) => void;
}

export const AllDuasModal: React.FC<AllDuasModalProps> = ({
  isOpen,
  onClose,
  onSelectWeek
}) => {
  const { 
    memorizedDuas, 
    toggleDuaMemorized, 
    isDuaMemorized, 
    isBookmarked, 
    toggleBookmark 
  } = useDailyStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'memorized' | 'bookmarked'>('all');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  if (!isOpen) return null;

  // Filter Duas based on search & filter tabs
  const filteredDuas = MASNOON_DUAS.filter(dua => {
    const matchesSearch = 
      dua.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.titleUrdu.includes(searchQuery) ||
      dua.arabic.includes(searchQuery) ||
      dua.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.occasion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.week.toString() === searchQuery.trim();

    if (!matchesSearch) return false;

    if (activeFilter === 'memorized') {
      return isDuaMemorized(dua.week);
    }
    if (activeFilter === 'bookmarked') {
      return isBookmarked(`dua-${dua.week}`);
    }

    return true;
  });

  const totalMemorizedCount = memorizedDuas.length;
  const memorizedPercent = Math.round((totalMemorizedCount / MASNOON_DUAS.length) * 100);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-[#142820] border border-[#0B5D3C]/20 dark:border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between gap-4 bg-[#F5F1E8]/60 dark:bg-[#0C1813]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0B5D3C] text-white flex items-center justify-center shadow-xs shrink-0">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1D2B24] dark:text-[#E8EFEA] leading-tight">
                52 Masnoon Duas Collection
              </h2>
              <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-urdu" dir="rtl">
                52 ہفتوں کی مسنون دعائیں (1 ہفتہ - 1 دعا حفظ)
              </p>
            </div>
          </div>

          <button
            id="btn-close-all-duas-modal"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-2 rounded-full text-[#4A5D53] dark:text-[#96A89F] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress & Search Controls */}
        <div className="p-4 sm:p-5 space-y-4 border-b border-[#0B5D3C]/10 dark:border-white/10 bg-white dark:bg-[#142820]">
          
          {/* Progress Bar */}
          <div className="p-3 rounded-2xl bg-[#F5F1E8] dark:bg-[#0C1813] border border-[#0B5D3C]/10 dark:border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C9A227]" />
                <span>Annual Memorization Goal: {totalMemorizedCount} of 52 Duas</span>
              </span>
              <span className="text-[#0B5D3C] dark:text-[#C9A227]">{memorizedPercent}% Completed</span>
            </div>

            <div className="w-full h-2 rounded-full bg-[#0B5D3C]/10 dark:bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#0B5D3C] to-[#C9A227] transition-all duration-500 rounded-full"
                style={{ width: `${memorizedPercent}%` }}
              />
            </div>
          </div>

          {/* Search Input & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5D53] dark:text-[#96A89F]" />
              <input
                id="search-duas-input"
                type="text"
                placeholder="Search Dua, Week or Keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#0B5D3C]/20 dark:border-white/10 bg-[#F5F1E8]/50 dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] focus:outline-none focus:ring-1 focus:ring-[#0B5D3C]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto p-1 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] border border-[#0B5D3C]/10 dark:border-white/10">
              <button
                id="filter-dua-all"
                onClick={() => {
                  triggerHaptic('light');
                  setActiveFilter('all');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]'
                    : 'text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                All (52)
              </button>

              <button
                id="filter-dua-memorized"
                onClick={() => {
                  triggerHaptic('light');
                  setActiveFilter('memorized');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  activeFilter === 'memorized'
                    ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]'
                    : 'text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Memorized ({totalMemorizedCount})</span>
              </button>

              <button
                id="filter-dua-bookmarked"
                onClick={() => {
                  triggerHaptic('light');
                  setActiveFilter('bookmarked');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  activeFilter === 'bookmarked'
                    ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]'
                    : 'text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Bookmarks</span>
              </button>
            </div>

          </div>

        </div>

        {/* Scrollable Duas List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredDuas.length === 0 ? (
            <div className="text-center py-12 text-[#4A5D53] dark:text-[#96A89F] space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-[#0B5D3C]/40" />
              <p className="text-sm font-semibold">No Duas found matching your search.</p>
            </div>
          ) : (
            filteredDuas.map((dua) => {
              const isMemorized = isDuaMemorized(dua.week);
              const isSaved = isBookmarked(`dua-${dua.week}`);
              const isExpanded = expandedWeek === dua.week;

              return (
                <div
                  key={dua.week}
                  id={`modal-dua-item-week-${dua.week}`}
                  className={`p-4 rounded-2xl border transition-all ${
                    isMemorized
                      ? 'bg-[#0B5D3C]/5 dark:bg-[#C9A227]/10 border-[#0B5D3C]/30 dark:border-[#C9A227]/30'
                      : 'bg-[#F5F1E8]/50 dark:bg-[#0C1813]/50 border-[#0B5D3C]/10 dark:border-white/10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    
                    {/* Left Details */}
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 rounded-xl bg-[#0B5D3C] text-white text-xs font-extrabold shrink-0">
                        W{dua.week}
                      </span>

                      <div className="space-y-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-[#1D2B24] dark:text-[#E8EFEA]">
                            {dua.titleEn}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#0B5D3C]/10 text-[#0B5D3C] dark:bg-white/10 dark:text-[#E5C76B] font-medium">
                            {dua.occasion}
                          </span>
                        </div>

                        <p className="text-sm font-bold text-[#0B5D3C] dark:text-[#C9A227] font-urdu" dir="rtl">
                          {dua.titleUrdu}
                        </p>
                      </div>
                    </div>

                    {/* Right Action Controls */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                      
                      {/* Mark as Memorized Toggle */}
                      <button
                        id={`btn-modal-memorize-week-${dua.week}`}
                        onClick={() => {
                          triggerHaptic('success');
                          toggleDuaMemorized(dua.week);
                        }}
                        className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xl border font-semibold transition-all ${
                          isMemorized
                            ? 'bg-[#0B5D3C] text-white border-[#0B5D3C]'
                            : 'bg-white dark:bg-[#142820] text-[#4A5D53] border-[#0B5D3C]/20 hover:border-[#0B5D3C]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{isMemorized ? 'Memorized' : 'Memorize'}</span>
                      </button>

                      {/* Expand / Collapse Preview */}
                      <button
                        id={`btn-expand-dua-week-${dua.week}`}
                        onClick={() => {
                          triggerHaptic('light');
                          setExpandedWeek(isExpanded ? null : dua.week);
                        }}
                        className="p-1.5 rounded-xl bg-white dark:bg-[#142820] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/10 text-xs font-semibold hover:bg-[#0B5D3C]/10"
                      >
                        {isExpanded ? 'Less' : 'More'}
                      </button>

                      {/* Select & Close */}
                      {onSelectWeek && (
                        <button
                          id={`btn-select-dua-week-${dua.week}`}
                          onClick={() => {
                            triggerHaptic('medium');
                            onSelectWeek(dua.week);
                            onClose();
                          }}
                          className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xl bg-[#C9A227] text-[#0C1813] font-bold hover:opacity-90"
                        >
                          <span>View Card</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}

                    </div>

                  </div>

                  {/* Expanded View */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-[#0B5D3C]/10 dark:border-white/10 space-y-2.5 animate-fade-in">
                      <p className="text-lg font-arabic text-[#0B5D3C] dark:text-[#E8EFEA] text-center" dir="rtl">
                        {dua.arabic}
                      </p>
                      
                      <p className="text-xs italic text-amber-900 dark:text-amber-300">
                        "{dua.transliteration}"
                      </p>

                      <p className="text-xs font-bold text-[#1D2B24] dark:text-[#E8EFEA] font-urdu leading-relaxed" dir="rtl">
                        {dua.urdu_translation}
                      </p>

                      <div className="text-[11px] text-[#4A5D53] dark:text-[#96A89F] pt-1 flex justify-between">
                        <span>Source: {dua.source}</span>
                        <span>Week {dua.week} of 52</span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
