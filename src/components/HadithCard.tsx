import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hadith } from '../types';
import { useDailyStore } from '../store/useDailyStore';
import { useAudioStore } from '../store/useAudioStore';
import { 
  Check, 
  Copy, 
  Download, 
  Bookmark, 
  Users, 
  Volume2, 
  VolumeX,
  CheckCircle2,
  BookmarkCheck,
  Lightbulb
} from 'lucide-react';
import { exportCardAsImage, downloadDataUrl } from '../utils/exportImage';
import { triggerHaptic } from '../utils/haptics';
import { renderSingleCardToCanvas } from '../utils/canvasCardGenerator';
import { getEstimatedHijriDate, formatReadableDate } from '../utils/dateUtils';

interface HadithCardProps {
  hadith: Hadith;
  dateStr: string;
}

export const HadithCard: React.FC<HadithCardProps> = ({ hadith, dateStr }) => {
  const { 
    settings, 
    getProgressForDate, 
    toggleHadithRead, 
    toggleBookmark, 
    isBookmarked 
  } = useDailyStore();

  const { playTrack, togglePlayPause, currentTrack, isTrackPlaying } = useAudioStore();

  const progress = getProgressForDate(dateStr);
  const isRead = progress.hadithRead;
  const bookmarked = isBookmarked(`hadith-${hadith.day}-${hadith.source}`);

  const hadithTrackId = `hadith-urdu-${hadith.day}`;
  const isPlayingUrdu = isTrackPlaying(hadithTrackId);

  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Urdu Voice Synthesis
  const togglePlayUrdu = () => {
    triggerHaptic('light');
    if (currentTrack?.id === hadithTrackId) {
      togglePlayPause();
    } else {
      playTrack({
        id: hadithTrackId,
        type: 'hadith_urdu',
        title: `Hadith • ${hadith.source}`,
        subtitle: `Hadith Narration • ${hadith.category || 'Character & Wisdom'}`,
        speechText: `${hadith.urdu_translation}۔ سبق: ${hadith.lesson}`,
        sourceInfo: 'Hadith of the Day'
      });
    }
  };

  // Copy to Clipboard
  const handleCopy = async () => {
    triggerHaptic('medium');
    const text = `📜 حدیثِ مبارکہ برائے نورِ روزانہ
مصدر: ${hadith.source}
موضوع: ${hadith.category || 'حسن اخلاق'}

${hadith.arabic}

ترجمہ:
${hadith.urdu_translation}

سبق و عملی نکتہ:
${hadith.lesson}

✨ Daily Noor App`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Download Card as Image
  const handleDownloadImage = async () => {
    triggerHaptic('success');
    setIsExporting(true);
    try {
      const dateObj = new Date(dateStr + 'T00:00:00');
      const hijri = getEstimatedHijriDate(dateObj);
      const dateFormatted = formatReadableDate(dateStr);

      const highResDataUrl = await renderSingleCardToCanvas({
        type: 'hadith',
        item: hadith,
        hijri,
        gregorianDate: dateFormatted.english,
        theme: 'emerald',
        format: 'portrait'
      });

      const filename = `Daily-Noor-Hadith-Day${hadith.day}`;
      const res = await downloadDataUrl(highResDataUrl, filename);
      if (res.success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } catch (err) {
      console.warn('Canvas generator fallback to DOM export', err);
      const cardId = `hadith-card-${hadith.day}`;
      const res = await exportCardAsImage(cardId, `Daily-Noor-Hadith-Day${hadith.day}`);
      if (res.success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } finally {
      setIsExporting(false);
    }
  };

  // Font size classes
  const arabicFontClass = 
    settings.fontSize === 'xlarge' ? 'text-2xl sm:text-3xl' :
    settings.fontSize === 'large' ? 'text-xl sm:text-2xl' : 'text-xl sm:text-2xl';

  const urduFontClass = 
    settings.fontSize === 'xlarge' ? 'text-xl sm:text-2xl' :
    settings.fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-lg sm:text-xl';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-3"
    >
      {/* Top Header Label */}
      <div className="flex justify-between items-end px-2">
        <h2 className="text-[#0B5D3C] dark:text-[#C9A227] font-bold text-lg sm:text-xl uppercase tracking-widest flex items-center gap-2">
          <span>Daily Hadith</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] font-semibold lowercase tracking-normal font-urdu" dir="rtl">
            حدیثِ نبوی ﷺ
          </span>
        </h2>
        <span className="text-xs sm:text-sm font-medium opacity-70 text-slate-600 dark:text-slate-300">
          {hadith.source}
        </span>
      </div>

      {/* Main Card Container */}
      <div 
        id={`hadith-card-${hadith.day}`}
        className={`bg-white dark:bg-[#142820] rounded-[32px] shadow-xl shadow-black/5 p-6 sm:p-8 flex flex-col border transition-all duration-300 ${
          isRead
            ? 'border-emerald-400/60 dark:border-emerald-700/50 shadow-emerald-950/5'
            : 'border-[#0B5D3C]/10 dark:border-[#C9A227]/20'
        }`}
      >
        {/* Arabic Matn & Urdu Translation (RTL Centered) */}
        <div className="flex-1 flex flex-col justify-center text-center gap-4 sm:gap-6" dir="rtl">
          <p 
            className={`font-arabic text-[#0B5D3C] dark:text-[#E8EFEA] leading-relaxed font-semibold select-text ${arabicFontClass}`}
          >
            {hadith.arabic}
          </p>

          {/* Minimal Gold Divider */}
          <div className="h-px w-24 bg-[#C9A227]/40 mx-auto"></div>

          <p 
            className={`font-urdu text-slate-600 dark:text-slate-200 leading-relaxed ${urduFontClass}`}
          >
            {hadith.urdu_translation}
          </p>
        </div>

        {/* Character & Moral Lesson Block */}
        <div className="mt-6 p-5 bg-[#C9A227]/10 dark:bg-[#C9A227]/15 rounded-2xl border border-[#C9A227]/20 dark:border-[#C9A227]/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C9A227] text-base">💡</span>
              <p className="text-xs uppercase font-bold text-[#8F7212] dark:text-[#E5C76B] tracking-wider">
                Character Lesson
              </p>
            </div>
            {hadith.category && (
              <span className="text-xs font-urdu text-[#8F7212] dark:text-[#E5C76B]" dir="rtl">
                موضوع: {hadith.category}
              </span>
            )}
          </div>
          <p className="font-urdu text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic text-right" dir="rtl">
            {hadith.lesson}
          </p>
        </div>

        {/* Family Discussion Tip (When Family Mode is ON) */}
        {settings.familyMode && hadith.family_tip && (
          <div className="mt-4 p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/25 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40">
            <div className="flex items-center justify-between text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] mb-1.5">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#E5C76B]" />
                <span className="uppercase tracking-wider">Family Discussion Tip</span>
              </div>
              <span className="font-urdu" dir="rtl">خاندانی مکالمہ</span>
            </div>
            <p className="font-urdu text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-right" dir="rtl">
              {hadith.family_tip}
            </p>
          </div>
        )}

        {/* Bottom Action Controls */}
        <div className="mt-6 pt-5 border-t border-[#0B5D3C]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Audio Read-Aloud */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {'speechSynthesis' in window ? (
              <button
                id={`hadith-urdu-audio-btn-${hadith.day}`}
                onClick={togglePlayUrdu}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  isPlayingUrdu
                    ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813] text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/10 hover:border-[#0B5D3C]'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isPlayingUrdu ? 'Listening...' : 'Listen Voice'}</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400 font-mono">Updated Daily</span>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-end">
            {/* Bookmark */}
            <button
              id={`hadith-bookmark-btn-${hadith.day}`}
              onClick={() => {
                triggerHaptic('light');
                toggleBookmark({ id: `hadith-${hadith.day}-${hadith.source}`, type: 'hadith', day: hadith.day });
              }}
              className={`p-2 rounded-xl border transition-colors ${
                bookmarked
                  ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                  : 'text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/10 hover:bg-[#0B5D3C]/5'
              }`}
              title={bookmarked ? "Bookmarked" : "Bookmark this hadith"}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-4 h-4 fill-current" />
              ) : (
                <Bookmark className="w-4 h-4 fill-current" />
              )}
            </button>

            {/* Copy Button */}
            <button
              id={`hadith-copy-btn-${hadith.day}`}
              onClick={handleCopy}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold text-[#0B5D3C] dark:text-[#E8EFEA] border border-[#0B5D3C]/30 dark:border-white/20 rounded-xl hover:bg-[#0B5D3C]/5 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Image Card Export */}
            <button
              id={`hadith-download-card-btn-${hadith.day}`}
              onClick={handleDownloadImage}
              disabled={isExporting}
              className={`px-3 py-2 text-xs font-bold border rounded-xl transition-colors flex items-center gap-1 ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/30 dark:border-white/20 hover:bg-[#0B5D3C]/5'
              }`}
              title="Download image card"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isExporting ? 'Saving..' : 'Save Card'}</span>
                </>
              )}
            </button>

            {/* Done / Mark as Read */}
            <button
              id={`hadith-mark-read-btn-${hadith.day}`}
              onClick={() => {
                triggerHaptic('success');
                toggleHadithRead(dateStr);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-1.5 ${
                isRead
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700'
                  : 'bg-[#0B5D3C] text-white shadow-[#0B5D3C]/20 hover:bg-[#084a30]'
              }`}
            >
              {isRead ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Done</span>
                </>
              ) : (
                <span>Mark Done</span>
              )}
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
