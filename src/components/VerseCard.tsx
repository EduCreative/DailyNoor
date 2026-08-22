import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Verse } from '../types';
import { useDailyStore } from '../store/useDailyStore';
import { useAudioStore } from '../store/useAudioStore';
import { 
  Play, 
  Pause, 
  Volume2, 
  Check, 
  Copy, 
  Download, 
  Bookmark, 
  Users, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { exportCardAsImage, downloadDataUrl } from '../utils/exportImage';
import { triggerHaptic } from '../utils/haptics';
import { renderSingleCardToCanvas } from '../utils/canvasCardGenerator';
import { getEstimatedHijriDate, formatReadableDate } from '../utils/dateUtils';

interface VerseCardProps {
  verse: Verse;
  dateStr: string;
}

export const VerseCard: React.FC<VerseCardProps> = ({ verse, dateStr }) => {
  const { 
    settings, 
    getProgressForDate, 
    toggleVerseRead, 
    toggleBookmark, 
    isBookmarked 
  } = useDailyStore();

  const { 
    currentTrack, 
    isPlaying, 
    currentTime: globalCurrentTime, 
    duration: globalDuration, 
    progressPercent: globalProgressPercent, 
    playTrack, 
    togglePlayPause, 
    seekPercent, 
    isTrackPlaying 
  } = useAudioStore();

  const progress = getProgressForDate(dateStr);
  const isRead = progress.verseRead;
  const bookmarked = isBookmarked(`verse-${verse.day}-${verse.surah}-${verse.ayah}`);

  const arabicTrackId = `verse-arabic-${verse.day}`;
  const urduTrackId = `verse-urdu-${verse.day}`;

  const isPlayingArabic = isTrackPlaying(arabicTrackId);
  const isPlayingUrdu = isTrackPlaying(urduTrackId);
  const isCurrentArabic = currentTrack?.id === arabicTrackId;

  const audioProgress = isCurrentArabic ? globalProgressPercent : 0;
  const currentTime = isCurrentArabic ? globalCurrentTime : 0;
  const duration = isCurrentArabic ? globalDuration : 0;

  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Audio Play / Pause for Arabic Recitation
  const togglePlayArabic = () => {
    triggerHaptic('light');
    if (isCurrentArabic) {
      togglePlayPause();
    } else {
      playTrack({
        id: arabicTrackId,
        type: 'verse_arabic',
        title: `Surah ${verse.surah} (${verse.surah_ar}) • Ayah ${verse.ayah}`,
        subtitle: 'Arabic Recitation • Mishary Rashid Alafasy',
        audioUrl: verse.audio_url,
        sourceInfo: 'Verse of the Day'
      });
    }
  };

  // Audio Reading for Urdu Translation
  const togglePlayUrdu = () => {
    triggerHaptic('light');
    if (currentTrack?.id === urduTrackId) {
      togglePlayPause();
    } else {
      playTrack({
        id: urduTrackId,
        type: 'verse_urdu',
        title: `Surah ${verse.surah} (${verse.surah_ar}) • Ayah ${verse.ayah}`,
        subtitle: 'Urdu Translation Narration',
        speechText: `${verse.surah_ar}۔ ${verse.urdu_translation}`,
        sourceInfo: 'Verse Translation'
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekPercent(Number(e.target.value));
  };

  // Copy to Clipboard
  const handleCopy = async () => {
    triggerHaptic('medium');
    const text = `📖 قرآنی آیت برائے نورِ روزانہ
${verse.surah_ar} (${verse.surah}) — آیت ${verse.ayah}

${verse.arabic}

ترجمہ:
${verse.urdu_translation}

وضاحت و نصیحت:
${verse.explanation}

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
        type: 'verse',
        item: verse,
        hijri,
        gregorianDate: dateFormatted.english,
        theme: 'emerald',
        format: 'portrait'
      });

      const filename = `Daily-Noor-Verse-Day${verse.day}`;
      const res = await downloadDataUrl(highResDataUrl, filename);
      if (res.success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } catch (err) {
      console.warn('Canvas generator fallback to DOM export', err);
      const cardId = `verse-card-${verse.day}`;
      const res = await exportCardAsImage(cardId, `Daily-Noor-Verse-Day${verse.day}`);
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
    settings.fontSize === 'xlarge' ? 'text-3xl sm:text-4xl' :
    settings.fontSize === 'large' ? 'text-2xl sm:text-3xl' : 'text-2xl sm:text-3xl';

  const urduFontClass = 
    settings.fontSize === 'xlarge' ? 'text-xl sm:text-2xl' :
    settings.fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-lg sm:text-xl';

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-3"
    >
      {/* Top Header Label */}
      <div className="flex justify-between items-end px-2">
        <h2 className="text-[#0B5D3C] dark:text-[#C9A227] font-bold text-lg sm:text-xl uppercase tracking-widest flex items-center gap-2">
          <span>Today's Verse</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#0B5D3C]/10 dark:bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] font-semibold lowercase tracking-normal font-urdu" dir="rtl">
            آیتِ مبارکہ
          </span>
        </h2>
        <span className="text-xs sm:text-sm font-medium opacity-70 text-slate-600 dark:text-slate-300">
          Surah {verse.surah}: {verse.ayah}
        </span>
      </div>

      {/* Main Card Container */}
      <div 
        id={`verse-card-${verse.day}`}
        className={`bg-white dark:bg-[#142820] rounded-[32px] shadow-xl shadow-black/5 p-6 sm:p-8 flex flex-col border transition-all duration-300 ${
          isRead
            ? 'border-emerald-400/60 dark:border-emerald-700/50 shadow-emerald-950/5'
            : 'border-[#0B5D3C]/10 dark:border-[#C9A227]/20'
        }`}
      >
        {/* Arabic & Urdu Verses (RTL Centered) */}
        <div className="flex-1 flex flex-col justify-center text-center gap-4 sm:gap-6" dir="rtl">
          <p 
            className={`font-arabic text-[#0B5D3C] dark:text-[#E8EFEA] leading-[1.9] sm:leading-[2.2] font-semibold select-text ${arabicFontClass}`}
          >
            {verse.arabic}
          </p>

          {/* Minimal Gold Divider */}
          <div className="h-px w-24 bg-[#C9A227]/40 mx-auto"></div>

          <p 
            className={`font-urdu text-slate-600 dark:text-slate-200 leading-relaxed ${urduFontClass}`}
          >
            {verse.urdu_translation}
          </p>
        </div>

        {/* Tafseer / Explanation Section */}
        <div className="mt-6 p-4 sm:p-5 bg-[#F5F1E8]/70 dark:bg-[#0C1813]/60 rounded-2xl border border-dashed border-[#0B5D3C]/20 dark:border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs uppercase tracking-wider text-[#0B5D3C] dark:text-[#C9A227] font-bold">
              Tafseer / Explanation
            </p>
            <span className="text-[11px] font-urdu text-[#0B5D3C]/70 dark:text-[#E5C76B]/70" dir="rtl">
              وضاحت و نصیحت
            </span>
          </div>
          <p className="font-urdu text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-right" dir="rtl">
            {verse.explanation}
          </p>
        </div>

        {/* Family Discussion Tip (When Family Mode is ON) */}
        {settings.familyMode && verse.family_tip && (
          <div className="mt-4 p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/25 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40">
            <div className="flex items-center justify-between text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] mb-1.5">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#0B5D3C] dark:text-[#E5C76B]" />
                <span className="uppercase tracking-wider">Family Discussion Tip</span>
              </div>
              <span className="font-urdu" dir="rtl">خاندانی مکالمہ</span>
            </div>
            <p className="font-urdu text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-right" dir="rtl">
              {verse.family_tip}
            </p>
          </div>
        )}

        {/* Bottom Audio & Action Controls */}
        <div className="mt-6 pt-5 border-t border-[#0B5D3C]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Audio Controls (Recitation & Scrubber) */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id={`verse-audio-play-${verse.day}`}
              onClick={togglePlayArabic}
              className="w-10 h-10 rounded-full bg-[#0B5D3C] hover:bg-[#084a30] text-white flex items-center justify-center transition-all shadow-md shadow-[#0B5D3C]/20 shrink-0"
              title="Play Arabic Recitation (Sheikh Alafasy)"
            >
              {isPlayingArabic ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <div className="flex flex-col justify-center px-1 flex-1 sm:w-36">
              <input
                type="range"
                min="0"
                max="100"
                value={audioProgress || 0}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-[#C9A227]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Urdu Speech Voice */}
            {'speechSynthesis' in window && (
              <button
                id={`verse-urdu-audio-btn-${verse.day}`}
                onClick={togglePlayUrdu}
                className={`p-2 rounded-xl text-xs border transition-colors ${
                  isPlayingUrdu
                    ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813] text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/10 hover:border-[#0B5D3C]'
                }`}
                title="Listen to Urdu Translation"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action Buttons: Bookmark, Copy, Image Card, Done */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-end">
            {/* Bookmark */}
            <button
              id={`verse-bookmark-btn-${verse.day}`}
              onClick={() => {
                triggerHaptic('light');
                toggleBookmark({ id: `verse-${verse.day}-${verse.surah}-${verse.ayah}`, type: 'verse', day: verse.day });
              }}
              className={`p-2 rounded-xl border transition-colors ${
                bookmarked
                  ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                  : 'text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/10 hover:bg-[#0B5D3C]/5'
              }`}
              title={bookmarked ? "Bookmarked" : "Bookmark this verse"}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Copy Button */}
            <button
              id={`verse-copy-btn-${verse.day}`}
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
              id={`verse-download-card-btn-${verse.day}`}
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
              id={`verse-mark-read-btn-${verse.day}`}
              onClick={() => {
                triggerHaptic('success');
                toggleVerseRead(dateStr);
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
