import React, { useState, useEffect } from 'react';
import { Verse, Hadith, Dua } from '../types';
import { useDailyStore } from '../store/useDailyStore';
import { formatReadableDate, getEstimatedHijriDate, getWeeklyIndex } from '../utils/dateUtils';
import { MASNOON_DUAS } from '../data/duaData';
import { downloadDataUrl } from '../utils/exportImage';
import { renderDailySummaryCardToCanvas } from '../utils/canvasCardGenerator';
import { getQuizForDay } from '../data/quizData';
import { triggerHaptic } from '../utils/haptics';
import { IslamicLogo } from './IslamicLogo';
import { 
  X, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  HeartHandshake, 
  Layers, 
  Smartphone, 
  Square, 
  Eye,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

interface DailySummaryCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  verse: Verse;
  hadith: Hadith;
  dua?: Dua;
  dateStr: string;
}

type AspectRatio = 'story' | 'portrait' | 'square';
type ThemeStyle = 'emerald' | 'midnight' | 'pearl';

export const DailySummaryCardModal: React.FC<DailySummaryCardModalProps> = ({
  isOpen,
  onClose,
  verse,
  hadith,
  dua,
  dateStr
}) => {
  const { settings } = useDailyStore();
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('portrait');
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>('emerald');
  const [includeDua, setIncludeDua] = useState<boolean>(true);
  const [includeQuiz, setIncludeQuiz] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && settings.appTheme) {
      setThemeStyle(settings.appTheme as ThemeStyle);
    }
  }, [isOpen, settings.appTheme]);

  // Lock body scroll and attach Escape key listener when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentWeekNumber = getWeeklyIndex(MASNOON_DUAS.length, dateStr);
  const weekDua: Dua = dua || MASNOON_DUAS.find(d => d.week === currentWeekNumber) || MASNOON_DUAS[0];

  const dateObj = new Date(dateStr + 'T00:00:00');
  const hijri = getEstimatedHijriDate(dateObj, undefined, settings.hijriDateAdjustment);
  const dateFormatted = formatReadableDate(dateStr);
  const quizQuestions = getQuizForDay(verse, hadith);

  const cardElementId = 'daily-combined-summary-card';
  const filename = `Daily-Noor-Summary-${themeStyle}-${dateStr}`;

  // Generate high-resolution studio quality PNG using Canvas Generator
  const generateHighResImage = async (): Promise<string> => {
    return await renderDailySummaryCardToCanvas({
      verse,
      hadith,
      dua: weekDua,
      hijri,
      gregorianDate: dateFormatted.english,
      theme: themeStyle,
      format: aspectRatio,
      includeQuiz,
      includeDua
    });
  };

  const handleDownload = async () => {
    triggerHaptic('success');
    setErrorMessage(null);
    try {
      setIsExporting(true);
      const dataUrl = await generateHighResImage();
      const res = await downloadDataUrl(dataUrl, filename);
      
      if (res.success) {
        setDownloadSuccess(true);
        setPreviewImageUrl(dataUrl);
        setTimeout(() => setDownloadSuccess(false), 3500);
      } else {
        setErrorMessage('Auto-download was blocked. Use "Save to Files" in the preview below.');
        setPreviewImageUrl(dataUrl);
      }
    } catch (err: any) {
      console.error('Download error:', err);
      setErrorMessage('Export error. Please try "Preview" or "Share".');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePreview = async () => {
    triggerHaptic('light');
    try {
      setIsExporting(true);
      const dataUrl = await generateHighResImage();
      setPreviewImageUrl(dataUrl);
    } catch (err) {
      console.error('Preview error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyImage = async () => {
    triggerHaptic('medium');
    setErrorMessage(null);
    try {
      setIsExporting(true);
      const dataUrl = await generateHighResImage();
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      
      if (navigator.clipboard && (window as any).ClipboardItem) {
        await navigator.clipboard.write([
          new (window as any).ClipboardItem({ 'image/png': blob })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } else {
        await handleDownload();
      }
    } catch (err) {
      console.warn('Clipboard image copy not supported, falling back to download', err);
      await handleDownload();
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = async () => {
    triggerHaptic('medium');
    setErrorMessage(null);
    try {
      setIsExporting(true);
      const dataUrl = await generateHighResImage();
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      
      if (blob && navigator.canShare) {
        const file = new File([blob], `${filename}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `Daily Noor — ${dateFormatted.english}`,
            text: `📖 آیت: ${verse.surah} (${verse.ayah}) • 📜 حدیث: ${hadith.source} • 🤲 دعا: ${weekDua.titleUrdu}\nنورِ روزانہ برائے ذاتی و خاندانی تربیت`,
            files: [file]
          });
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 3000);
          return;
        }
      }

      if (navigator.share) {
        await navigator.share({
          title: `Daily Noor — ${dateFormatted.english}`,
          text: `📖 ${verse.surah} (${verse.ayah}): "${verse.urdu_translation}"\n\n📜 ${hadith.source}: "${hadith.urdu_translation}"\n\n🤲 دعائے مسنونہ (${weekDua.titleUrdu}): "${weekDua.urdu_translation}"\n\nDaily Noor App`
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } else {
        await handleDownload();
      }
    } catch (err) {
      console.error('Share action cancelled or failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Dimension styling for in-modal preview
  const getCardWidthClass = () => {
    switch (aspectRatio) {
      case 'story':
        return 'w-[340px] sm:w-[420px] min-h-[600px]';
      case 'square':
        return 'w-[340px] sm:w-[440px] aspect-square';
      case 'portrait':
      default:
        return 'w-[340px] sm:w-[460px]';
    }
  };

  // Live preview explicit inline styles
  const isEmerald = themeStyle === 'emerald';
  const isMidnight = themeStyle === 'midnight';
  const isPearl = themeStyle === 'pearl';

  const containerStyle: React.CSSProperties = {
    background: isMidnight 
      ? 'linear-gradient(180deg, #05140D 0%, #092319 50%, #030C08 100%)' 
      : isPearl 
      ? 'linear-gradient(180deg, #FAF7F2 0%, #F4ECE0 100%)' 
      : 'linear-gradient(180deg, #06442B 0%, #0B5D3C 50%, #032316 100%)',
    color: isPearl ? '#1D2B24' : isEmerald ? '#F5F1E8' : '#F0F5F2',
    borderColor: isPearl ? 'rgba(11,93,60,0.3)' : '#C9A227',
    borderWidth: '2px',
    borderStyle: 'solid'
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: isMidnight ? 'rgba(5,19,13,0.9)' : isPearl ? 'rgba(11,93,60,0.08)' : 'rgba(3,27,18,0.75)',
    borderBottom: isPearl ? '1px solid rgba(11,93,60,0.15)' : '1px solid rgba(201,162,39,0.3)'
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: isMidnight ? 'rgba(8, 28, 20, 0.95)' : isPearl ? '#FFFFFF' : '#FAF7F0',
    color: isMidnight ? '#F0F5F2' : '#1D2B24',
    border: isMidnight ? '1.5px solid rgba(201,162,39,0.35)' : isPearl ? '1.5px solid rgba(11,93,60,0.2)' : '1.5px solid #C9A227',
    boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
  };

  const arabicStyle: React.CSSProperties = {
    color: isMidnight ? '#FFFFFF' : '#0B5D3C',
    fontFamily: '"Amiri", "Scheherazade New", "Noto Sans Arabic", serif'
  };

  const urduStyle: React.CSSProperties = {
    color: isMidnight ? '#F0F5F2' : '#1A2C23',
    fontFamily: '"Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif'
  };

  return (
    <div 
      className="fixed inset-0 z-60 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          triggerHaptic('light');
          onClose();
        }
      }}
    >
      <div 
        className="relative bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-[#0B5D3C]/20 dark:border-[#C9A227]/30 my-2 sm:my-6 flex flex-col max-h-[calc(100dvh-1rem)] sm:max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Pinned Sticky Header: Guaranteed visible on mobile and desktop */}
        <div className="sticky top-0 z-30 bg-[#F5F1E8] dark:bg-[#0C1813] px-3.5 py-3 sm:px-6 sm:py-4 border-b border-[#0B5D3C]/10 dark:border-white/10 flex items-center justify-between gap-2 shrink-0 shadow-xs">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <IslamicLogo size={36} variant="shield" />
            <div className="min-w-0">
              <h3 className="text-sm sm:text-lg font-bold text-[#0B5D3C] dark:text-[#E8EFEA] flex items-center gap-1.5 flex-wrap leading-tight">
                <span>Daily Summary Card</span>
                <span className="text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] font-bold border border-[#C9A227]/30">
                  1080p Studio HD
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-[#4A5D53] dark:text-[#96A89F] truncate">
                Verse, Hadith, Dua of the Week & Quiz
              </p>
            </div>
          </div>

          {/* Prominent, touch-friendly close button */}
          <button
            id="close-summary-card-modal-btn"
            aria-label="Close summary card modal"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-2 sm:p-2.5 rounded-full sm:rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D2B24] dark:text-[#E8EFEA] transition-colors shrink-0 touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-3 sm:p-6 space-y-3.5 flex-1 overscroll-contain">

          {/* Customization Toolbars */}
          <div className="p-2.5 rounded-2xl bg-white/60 dark:bg-[#142820]/60 border border-[#0B5D3C]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            
            {/* Format / Aspect Ratio Selector */}
            <div className="flex items-center gap-1 bg-white/80 dark:bg-[#142820] p-1 rounded-xl border border-[#0B5D3C]/15 dark:border-white/10">
              <span className="text-[10px] sm:text-[11px] font-semibold px-1.5 text-[#4A5D53] dark:text-[#96A89F]">Format:</span>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setAspectRatio('portrait');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 text-[11px] sm:text-xs ${
                  aspectRatio === 'portrait'
                    ? 'bg-[#0B5D3C] text-white font-semibold shadow-xs'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>4:5</span>
              </button>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setAspectRatio('story');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 text-[11px] sm:text-xs ${
                  aspectRatio === 'story'
                    ? 'bg-[#0B5D3C] text-white font-semibold shadow-xs'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>9:16</span>
              </button>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setAspectRatio('square');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 text-[11px] sm:text-xs ${
                  aspectRatio === 'square'
                    ? 'bg-[#0B5D3C] text-white font-semibold shadow-xs'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                <Square className="w-3 h-3" />
                <span>1:1</span>
              </button>
            </div>

            {/* Theme Palette Selector */}
            <div className="flex items-center gap-1 bg-white/80 dark:bg-[#142820] p-1 rounded-xl border border-[#0B5D3C]/15 dark:border-white/10">
              <span className="text-[10px] sm:text-[11px] font-semibold px-1.5 text-[#4A5D53] dark:text-[#96A89F]">Theme:</span>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setThemeStyle('emerald');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors text-[11px] sm:text-xs ${
                  themeStyle === 'emerald'
                    ? 'bg-[#0B5D3C] text-white font-semibold shadow-xs'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                Emerald
              </button>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setThemeStyle('midnight');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors text-[11px] sm:text-xs ${
                  themeStyle === 'midnight'
                    ? 'bg-[#061912] text-[#E5C76B] font-semibold shadow-xs border border-[#C9A227]/40'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                Midnight
              </button>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setThemeStyle('pearl');
                }}
                className={`px-2 py-1 rounded-lg font-medium transition-colors text-[11px] sm:text-xs ${
                  themeStyle === 'pearl'
                    ? 'bg-amber-100 text-[#0B5D3C] font-semibold shadow-xs border border-[#0B5D3C]/30'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#4A5D53] dark:text-[#96A89F]'
                }`}
              >
                Pearl
              </button>
            </div>

            {/* Dua & Quiz Content Toggles */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Dua of the week toggle */}
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setIncludeDua(!includeDua);
                }}
                className={`px-2.5 py-1 rounded-xl font-medium transition-colors flex items-center gap-1.5 text-[11px] sm:text-xs border ${
                  includeDua 
                    ? 'bg-[#0B5D3C] text-white font-bold border-[#0B5D3C] shadow-xs' 
                    : 'bg-white/80 dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:bg-black/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Dua: {includeDua ? 'On' : 'Off'}</span>
              </button>

              {/* Quiz Include Toggle */}
              <button
                onClick={() => {
                  triggerHaptic('light');
                  setIncludeQuiz(!includeQuiz);
                }}
                className={`px-2.5 py-1 rounded-xl font-medium transition-colors flex items-center gap-1.5 text-[11px] sm:text-xs border ${
                  includeQuiz 
                    ? 'bg-[#C9A227] text-[#0C1813] font-bold border-[#C9A227] shadow-xs' 
                    : 'bg-white/80 dark:bg-[#142820] text-[#4A5D53] dark:text-[#96A89F] border-[#0B5D3C]/15 dark:border-white/10 hover:bg-black/5'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Quiz (3 Qs): {includeQuiz ? 'On' : 'Off'}</span>
              </button>
            </div>

          </div>

          {/* Live Card Preview Area */}
          <div className="py-2 flex justify-center items-center overflow-x-auto">
            <div 
              id={cardElementId}
              style={containerStyle}
              className={`rounded-[28px] overflow-hidden transition-all duration-300 shadow-2xl ${getCardWidthClass()}`}
            >
              {/* Top Brand Banner */}
              <div style={headerStyle} className="px-4 sm:px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <IslamicLogo size={32} variant="shield" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm tracking-tight leading-none">
                      Daily Noor • <span className="font-urdu">نورِ روزانہ</span>
                    </h4>
                    <p className="text-[9px] sm:text-[10px] opacity-85 mt-0.5">
                      1 Quranic Verse, 1 Hadith & Masnoon Dua
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] sm:text-[11px] font-bold block text-[#E5C76B] font-urdu" dir="rtl">
                    {hijri.formatted}
                  </span>
                  <span className="text-[9px] sm:text-[10px] opacity-75 block" dir="ltr">
                    {dateFormatted.english}
                  </span>
                </div>
              </div>

              {/* Combined Content Body */}
              <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
                
                {/* --- 1. Quranic Verse Section --- */}
                <div style={boxStyle} className="p-3.5 sm:p-4 rounded-2xl">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/10 text-xs">
                    <span className="font-bold flex items-center gap-1 text-[#0B5D3C] dark:text-[#E5C76B]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>آیتِ مبارکہ</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold opacity-75">
                      Surah {verse.surah} • Ayah {verse.ayah}
                    </span>
                  </div>

                  <div dir="rtl" className="text-center space-y-2">
                    <p style={arabicStyle} className="text-lg sm:text-2xl font-bold leading-[1.8] sm:leading-[1.9] select-text">
                      {verse.arabic}
                    </p>
                    <div className="h-px w-20 bg-[#C9A227]/70 mx-auto" />
                    <p style={urduStyle} className="text-xs sm:text-base leading-relaxed">
                      {verse.urdu_translation}
                    </p>
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-2 py-0.5 opacity-70">
                  <span className="h-px w-10 bg-[#C9A227]" />
                  <span className="text-[10px] text-[#C9A227] font-bold">✦ ✦ ✦</span>
                  <span className="h-px w-10 bg-[#C9A227]" />
                </div>

                {/* --- 2. Daily Hadith Section --- */}
                <div style={boxStyle} className="p-3.5 sm:p-4 rounded-2xl">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/10 text-xs">
                    <span className="font-bold flex items-center gap-1 text-[#0B5D3C] dark:text-[#E5C76B]">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span>حدیثِ نبوی ﷺ</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold opacity-75">
                      {hadith.source}
                    </span>
                  </div>

                  <div dir="rtl" className="text-center space-y-2">
                    <p style={arabicStyle} className="text-base sm:text-xl font-bold leading-relaxed select-text">
                      {hadith.arabic}
                    </p>
                    <div className="h-px w-20 bg-[#C9A227]/70 mx-auto" />
                    <p style={urduStyle} className="text-xs sm:text-base leading-relaxed">
                      {hadith.urdu_translation}
                    </p>
                  </div>

                  {/* Hadith Lesson */}
                  {hadith.lesson && (
                    <div className="mt-2.5 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-right" dir="rtl">
                      <p className="text-[9px] sm:text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-0.5">
                        💡 سبق و عملی نکتہ:
                      </p>
                      <p className="font-urdu text-xs leading-normal">
                        {hadith.lesson}
                      </p>
                    </div>
                  )}
                </div>

                {/* --- 3. Dua of the Week Section --- */}
                {includeDua && (
                  <>
                    <div className="flex items-center justify-center gap-2 py-0.5 opacity-70">
                      <span className="h-px w-10 bg-[#C9A227]" />
                      <span className="text-[10px] text-[#C9A227] font-bold">✦ ✦ ✦</span>
                      <span className="h-px w-10 bg-[#C9A227]" />
                    </div>

                    <div style={boxStyle} className="p-3.5 sm:p-4 rounded-2xl">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/10 text-xs">
                        <span className="font-bold flex items-center gap-1 text-[#0B5D3C] dark:text-[#E5C76B]">
                          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                          <span>دعائے مسنونہ (ہفتہ وار)</span>
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold opacity-75">
                          Week {weekDua.week} • {weekDua.titleUrdu}
                        </span>
                      </div>

                      <div dir="rtl" className="text-center space-y-2">
                        <p style={arabicStyle} className="text-base sm:text-xl font-bold leading-relaxed select-text">
                          {weekDua.arabic}
                        </p>
                        <div className="h-px w-20 bg-[#C9A227]/70 mx-auto" />
                        <p style={urduStyle} className="text-xs sm:text-base leading-relaxed">
                          {weekDua.urdu_translation}
                        </p>
                      </div>

                      {/* Dua Source and Benefit */}
                      <div className="mt-2.5 p-2 rounded-xl bg-[#0B5D3C]/10 dark:bg-white/5 border border-[#0B5D3C]/15 dark:border-white/10 text-right text-xs" dir="rtl">
                        <p className="text-[9px] sm:text-[10px] font-bold text-[#0B5D3C] dark:text-[#E5C76B] mb-0.5">
                          📌 موقع و فضیلت:
                        </p>
                        <p className="font-urdu text-xs leading-normal opacity-90">
                          {weekDua.occasion} • {weekDua.source}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* --- 4. Daily Reflection Quiz & Answers Section --- */}
                {includeQuiz && (
                  <div style={boxStyle} className="p-3.5 sm:p-4 rounded-2xl">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/10 text-xs">
                      <span className="font-bold flex items-center gap-1 text-[#0B5D3C] dark:text-[#E5C76B]">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>کوئز اور جوابات (3 Qs)</span>
                      </span>
                      <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-[#C9A227]/20 text-[#0B5D3C] dark:text-[#E5C76B] font-bold border border-[#C9A227]/30">
                        Solutions
                      </span>
                    </div>

                    <div className="space-y-2 text-right" dir="rtl">
                      {quizQuestions.map((q, idx) => (
                        <div key={q.id} className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                          <p className="font-bold font-urdu mb-1 flex items-center gap-1 text-[11px] sm:text-xs">
                            <span className="text-[#C9A227] font-sans">Q{idx + 1}.</span>
                            <span>{q.questionUrdu}</span>
                          </p>
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-[#0B5D3C] dark:text-[#8EE4AF] font-urdu font-semibold flex items-center gap-1 text-[11px] sm:text-xs">
                            <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>جواب: {q.options[q.correctIndex]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Watermark */}
              <div className="px-4 py-2 text-center bg-black/25 border-t border-[#C9A227]/30">
                <p className="text-[9px] sm:text-[10px] font-medium opacity-85 tracking-wide text-white">
                  Daily Noor App • Seek Light in Quran & Sunnah Every Day
                </p>
              </div>

            </div>
          </div>

          {/* Error / Notice Alert if any */}
          {errorMessage && (
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{errorMessage}</span>
            </div>
          )}

        </div>

        {/* Pinned Sticky Footer Actions */}
        <div className="sticky bottom-0 z-30 bg-[#F5F1E8] dark:bg-[#0C1813] px-3.5 py-2.5 sm:px-6 sm:py-3.5 border-t border-[#0B5D3C]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0 shadow-xs">
          <div className="text-[10px] sm:text-xs text-[#4A5D53] dark:text-[#96A89F] font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
            <span className="hidden sm:inline">Generates crystal-clear 1080p PNG for Status & WhatsApp</span>
            <span className="sm:hidden">1080p Studio PNG</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            
            {/* Mobile Explicit Close Button */}
            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="sm:hidden px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-black/5 dark:bg-white/10 text-[#4A5D53] dark:text-[#E8EFEA] border border-black/10 dark:border-white/10 hover:bg-black/10 transition-colors"
            >
              Close
            </button>

            {/* View / Preview High-Res Modal Trigger */}
            <button
              id="summary-card-preview-btn"
              onClick={handlePreview}
              disabled={isExporting}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-white dark:bg-[#142820] text-[#4A5D53] dark:text-[#E8EFEA] border border-[#0B5D3C]/20 dark:border-white/10 hover:bg-[#0B5D3C]/10 transition-colors flex items-center gap-1 sm:gap-1.5 disabled:opacity-50"
              title="Preview full high-resolution image"
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B5D3C] dark:text-[#E5C76B]" />
              <span>Preview</span>
            </button>

            {/* Copy Image Button */}
            <button
              id="summary-card-copy-btn"
              onClick={handleCopyImage}
              disabled={isExporting}
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-white dark:bg-[#142820] text-[#0B5D3C] dark:text-[#E8EFEA] border border-[#0B5D3C]/20 dark:border-white/10 hover:bg-[#0B5D3C]/10 transition-colors flex items-center gap-1 sm:gap-1.5 disabled:opacity-50"
              title="Copy image directly to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Native Share Button */}
            <button
              id="summary-card-share-btn"
              onClick={handleShare}
              disabled={isExporting}
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] transition-colors flex items-center gap-1 sm:gap-1.5 shadow-xs disabled:opacity-50 font-bold"
              title="Share via WhatsApp / Social Media"
            >
              {shareSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Shared!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Download Image Button */}
            <button
              id="summary-card-download-btn"
              onClick={handleDownload}
              disabled={isExporting}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 disabled:opacity-50 ${
                downloadSuccess 
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-[#0B5D3C] hover:bg-[#084A30] text-white shadow-md shadow-[#0B5D3C]/20'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{isExporting ? 'Generating...' : 'Download'}</span>
                </>
              )}
            </button>

          </div>
        </div>

      </div>

      {/* Instant Image Preview / Save Modal */}
      {previewImageUrl && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewImageUrl(null)}
        >
          <div 
            className="bg-[#142820] text-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-5 border border-[#C9A227]/40 shadow-2xl flex flex-col items-center max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C76B]" />
                <span className="font-bold text-xs sm:text-sm text-[#E5C76B]">1080p Studio HD Card Generated</span>
              </div>
              <button
                onClick={() => setPreviewImageUrl(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image display */}
            <div className="my-3 overflow-y-auto max-h-[55vh] rounded-2xl border border-[#C9A227]/30 shadow-lg bg-black/40 p-2 flex justify-center w-full">
              <img 
                src={previewImageUrl} 
                alt="Daily Noor Generated Card" 
                className="max-h-[50vh] rounded-xl object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-[10px] sm:text-[11px] text-center text-white/80 mb-3 font-medium">
              💡 <span className="text-[#E5C76B]">Direct Save:</span> Right-click or tap & hold the image above to save directly to your Photos / Gallery.
            </p>

            {/* Actions in Preview Modal */}
            <div className="w-full flex items-center gap-2">
              <a
                href={previewImageUrl}
                download={`${filename}.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Save to Files</span>
              </a>

              <a
                href={previewImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                title="Open image full size in new tab"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open in Tab</span>
              </a>

              <button
                onClick={() => setPreviewImageUrl(null)}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

