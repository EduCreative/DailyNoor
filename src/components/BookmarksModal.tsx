import React from 'react';
import { useDailyStore } from '../store/useDailyStore';
import { Verse, Hadith } from '../types';
import { MASNOON_DUAS } from '../data/duaData';
import { IslamicLogo } from './IslamicLogo';
import { X, Bookmark, BookOpen, HeartHandshake, Heart, Trash2 } from 'lucide-react';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  verses: Verse[];
  hadiths: Hadith[];
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  verses,
  hadiths
}) => {
  const { bookmarks, toggleBookmark, setSelectedDate } = useDailyStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#142820] w-full max-w-md rounded-3xl border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B5D3C] to-[#073D27] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IslamicLogo size={36} variant="shield" />
            <div>
              <h3 className="font-bold text-base">Saved Bookmarks</h3>
              <p className="text-xs text-white/80 font-urdu" dir="rtl">محفوظ شدہ آیات و احادیث • Daily Noor</p>
            </div>
          </div>
          
          <button
            id="bookmarks-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookmarks List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {bookmarks.length === 0 ? (
            <div className="py-12 text-center text-[#4A5D53] dark:text-[#96A89F]">
              <Bookmark className="w-10 h-10 mx-auto opacity-30 mb-2" />
              <p className="font-semibold text-sm">No bookmarks yet</p>
              <p className="text-xs opacity-75 mt-1 font-urdu" dir="rtl">
                کسی بھی آیت یا حدیث کے اوپر بک مارک کا بٹن دبا کر اسے محفوظ کریں۔
              </p>
            </div>
          ) : (
            bookmarks.map((b) => {
              if (b.type === 'verse') {
                const item = verses.find(v => v.day === b.day) || verses[0];
                return (
                  <div 
                    key={b.id}
                    className="p-3.5 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5 flex-1">
                      <div className="w-7 h-7 rounded-lg bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                          {item.surah} • Ayah {item.ayah}
                        </span>
                        <p className="font-arabic text-sm text-[#1D2B24] dark:text-[#E8EFEA] text-right line-clamp-1 mt-1" dir="rtl">
                          {item.arabic}
                        </p>
                        <p className="font-urdu text-xs text-[#4A5D53] dark:text-[#96A89F] line-clamp-1 mt-0.5" dir="rtl">
                          {item.urdu_translation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(b)}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              } else if (b.type === 'dua') {
                const item = MASNOON_DUAS.find(d => d.week === b.day) || MASNOON_DUAS[0];
                return (
                  <div 
                    key={b.id}
                    className="p-3.5 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5 flex-1">
                      <div className="w-7 h-7 rounded-lg bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Heart className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#C9A227]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                          Dua (Week {item.week}) • {item.titleEn}
                        </span>
                        <p className="font-arabic text-sm text-[#1D2B24] dark:text-[#E8EFEA] text-right line-clamp-1 mt-1" dir="rtl">
                          {item.arabic}
                        </p>
                        <p className="font-urdu text-xs text-[#4A5D53] dark:text-[#96A89F] line-clamp-1 mt-0.5" dir="rtl">
                          {item.urdu_translation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(b)}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              } else {
                const item = hadiths.find(h => h.day === b.day) || hadiths[0];
                return (
                  <div 
                    key={b.id}
                    className="p-3.5 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5 flex-1">
                      <div className="w-7 h-7 rounded-lg bg-[#C9A227]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <HeartHandshake className="w-3.5 h-3.5 text-[#8F7212] dark:text-[#E5C76B]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B]">
                          {item.source}
                        </span>
                        <p className="font-arabic text-sm text-[#1D2B24] dark:text-[#E8EFEA] text-right line-clamp-1 mt-1" dir="rtl">
                          {item.arabic}
                        </p>
                        <p className="font-urdu text-xs text-[#4A5D53] dark:text-[#96A89F] line-clamp-1 mt-0.5" dir="rtl">
                          {item.urdu_translation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(b)}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              }
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F5F1E8] dark:bg-[#0C1813] border-t border-[#0B5D3C]/10 dark:border-white/10 text-center">
          <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
            Saved items remain locally on this device.
          </p>
        </div>

      </div>
    </div>
  );
};
