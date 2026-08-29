import React, { useState, useEffect } from 'react';
import { Verse } from '../types';
import { useDailyStore } from '../store/useDailyStore';
import { useAudioStore } from '../store/useAudioStore';
import { getTafseerForDay, getTafseerBySurahAyah, TafseerDetail } from '../data/tafseerData';
import { fetchDynamicTafseer, TAFSEER_EDITIONS } from '../services/tafseerService';
import { triggerHaptic } from '../utils/haptics';
import { 
  BookOpen, 
  Volume2, 
  Copy, 
  Check, 
  Bookmark, 
  Sparkles, 
  Globe, 
  History, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Loader2, 
  PenTool, 
  RotateCcw,
  BookMarked
} from 'lucide-react';

interface DailyTafseerProps {
  verse: Verse;
  dateStr: string;
}

export const DailyTafseer: React.FC<DailyTafseerProps> = ({ verse, dateStr }) => {
  const { settings, toggleBookmark, isBookmarked } = useDailyStore();
  const { playTrack, currentTrack, togglePlayPause, isTrackPlaying } = useAudioStore();

  const localTafseer: TafseerDetail = getTafseerBySurahAyah(verse.surah, verse.ayah) || getTafseerForDay(verse.day);

  // Active view tab: 'urdu' | 'english' | 'context' | 'lessons'
  const [activeTab, setActiveTab] = useState<'urdu' | 'english' | 'context' | 'lessons'>('urdu');
  
  // Selected Tafseer Edition for dynamic fetching (driven by Settings)
  const selectedEdition = settings.tafseerSourceUrdu || 'embedded';
  const [dynamicText, setDynamicText] = useState<string>('');
  const [dynamicSource, setDynamicSource] = useState<string>('');
  const [loadingDynamic, setLoadingDynamic] = useState<boolean>(false);
  const [dynamicError, setDynamicError] = useState<string | null>(null);

  // Expanded / Collapsed state for long Tafseers
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  // Copy and Bookmark feedback
  const [copied, setCopied] = useState<boolean>(false);
  const bookmarkKey = `tafseer-${verse.day}-${verse.surah}-${verse.ayah}`;
  const bookmarked = isBookmarked(bookmarkKey);

  // Audio Speech Narration
  const speechTrackId = `tafseer-speech-${verse.day}-${activeTab}`;
  const isNarrating = isTrackPlaying(speechTrackId);

  // Local Reflection Notes State
  const [showReflections, setShowReflections] = useState<boolean>(false);
  const reflectionKey = `noor_reflection_${dateStr}_day${verse.day}`;
  const [userNote, setUserNote] = useState<string>(() => {
    try {
      return localStorage.getItem(reflectionKey) || '';
    } catch {
      return '';
    }
  });
  const [noteSaved, setNoteSaved] = useState<boolean>(false);

  // Save reflection notes locally
  const handleSaveNote = (val: string) => {
    setUserNote(val);
    try {
      localStorage.setItem(reflectionKey, val);
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2000);
    } catch {
      // Storage quota or browser restriction
    }
  };

  // Fetch online Tafseer when edition changes
  useEffect(() => {
    if (selectedEdition === 'embedded') {
      setDynamicText('');
      setDynamicSource('');
      setDynamicError(null);
      setLoadingDynamic(false);
      return;
    }

    let isMounted = true;
    setLoadingDynamic(true);
    setDynamicError(null);

    const surahNum = localTafseer.surahNumber || 1;
    const ayahNum = verse.ayah;

    fetchDynamicTafseer(surahNum, ayahNum, selectedEdition, verse.day)
      .then((res) => {
        if (!isMounted) return;
        setDynamicText(res.text);
        setDynamicSource(res.sourceName);
        if (res.error) {
          setDynamicError(res.error);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setDynamicError('آن لائن تفسیر حاصل نہیں ہو سکی۔ مقامی خلاصہ دکھایا جا رہا ہے۔');
      })
      .finally(() => {
        if (isMounted) setLoadingDynamic(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedEdition, verse.day, verse.surah, verse.ayah, localTafseer.surahNumber]);

  // Audio Narration
  const toggleNarration = () => {
    triggerHaptic('light');

    if (currentTrack?.id === speechTrackId) {
      togglePlayPause();
      return;
    }

    let speechContent = '';
    let langSubtitle = '';

    if (activeTab === 'urdu') {
      speechContent = selectedEdition !== 'embedded' && dynamicText 
        ? dynamicText 
        : localTafseer.tafseerUrdu;
      langSubtitle = 'اردو وضاحت و تفسیر';
    } else if (activeTab === 'english') {
      speechContent = localTafseer.tafseerEn;
      langSubtitle = 'English Explanation & Commentary';
    } else if (activeTab === 'context') {
      speechContent = localTafseer.asbabAlNuzulUrdu;
      langSubtitle = 'شانِ نزول و تاریخی پس منظر';
    } else {
      speechContent = localTafseer.keyLessonsUrdu.join('۔ ');
      langSubtitle = 'اہم نکات و علمی و عملی اسباق';
    }

    playTrack({
      id: speechTrackId,
      type: 'verse_urdu',
      title: `Tafseer • Surah ${verse.surah} (${verse.surah_ar}) : Ayah ${verse.ayah}`,
      subtitle: langSubtitle,
      speechText: `${verse.surah_ar}۔ آیت ${verse.ayah}۔ ${speechContent}`,
      sourceInfo: 'Daily Tafseer'
    });
  };

  // Copy Tafseer
  const handleCopy = async () => {
    triggerHaptic('medium');
    let copyText = `📖 تفسیرِ قرآن برائے نورِ روزانہ
سورۃ ${verse.surah_ar} (${verse.surah}) — آیت ${verse.ayah}

آیت:
${verse.arabic}

ترجمہ:
${verse.urdu_translation}

`;

    if (activeTab === 'urdu') {
      copyText += `تفسیر (${selectedEdition !== 'embedded' ? dynamicSource : localTafseer.sourceNameUrdu}):\n${selectedEdition !== 'embedded' && dynamicText ? dynamicText : localTafseer.tafseerUrdu}`;
    } else if (activeTab === 'english') {
      copyText += `English Tafseer:\n${localTafseer.tafseerEn}`;
    } else if (activeTab === 'context') {
      copyText += `شانِ نزول:\n${localTafseer.asbabAlNuzulUrdu}`;
    } else {
      copyText += `اہم نکات:\n${localTafseer.keyLessonsUrdu.map((l, i) => `${i + 1}. ${l}`).join('\n')}`;
    }

    copyText += `\n\n✨ Daily Noor App`;

    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const activeTextClass = 
    settings.fontSize === 'xlarge' ? 'text-lg sm:text-xl' :
    settings.fontSize === 'large' ? 'text-base sm:text-lg' : 'text-base sm:text-lg';

  return (
    <div id={`daily-tafseer-card-${verse.day}`} className="mt-4 flex flex-col gap-3">
      {/* Top Header Label */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-2 pb-0.5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0B5D3C] to-[#061912] border border-[#C9A227]/40 flex items-center justify-center text-[#E5C76B] shadow-md shrink-0">
            <BookOpen className="w-5 h-5 text-[#E5C76B]" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[#0B5D3C] dark:text-[#E8EFEA] font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-2">
              <span>Daily Tafseer</span>
              <span className="font-urdu text-sm sm:text-base font-bold text-[#0B5D3C] dark:text-[#E5C76B]" dir="rtl">
                تفسیرِ قرآن
              </span>
            </h2>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-xl bg-white dark:bg-[#142820] text-[#0B5D3C] dark:text-[#E5C76B] border border-[#0B5D3C]/15 dark:border-[#C9A227]/30 shadow-sm">
          Surah {localTafseer.surahNumber || 1}:{verse.ayah}
        </span>
      </div>

      {/* Main Tafseer Card Container */}
      <div className="app-card-surface bg-white dark:bg-[#142820] rounded-[28px] shadow-lg shadow-black/5 p-5 sm:p-7 flex flex-col border border-[#0B5D3C]/15 dark:border-[#C9A227]/20 transition-all duration-300">
        
        {/* Navigation Tabs (Urdu, English, Context, Lessons) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F5F1E8] dark:bg-[#0C1813] rounded-2xl overflow-x-auto no-scrollbar border border-[#0B5D3C]/10 dark:border-white/5 mb-5">
          <button
            id={`tafseer-tab-urdu-${verse.day}`}
            onClick={() => { triggerHaptic('light'); setActiveTab('urdu'); }}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap font-urdu ${
              activeTab === 'urdu'
                ? 'bg-[#0B5D3C] text-white shadow-md shadow-[#0B5D3C]/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-[#0B5D3C]/5'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>آسان تفسیر</span>
          </button>

          <button
            id={`tafseer-tab-english-${verse.day}`}
            onClick={() => { triggerHaptic('light'); setActiveTab('english'); }}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'english'
                ? 'bg-[#0B5D3C] text-white shadow-md shadow-[#0B5D3C]/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-[#0B5D3C]/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>English</span>
          </button>

          <button
            id={`tafseer-tab-context-${verse.day}`}
            onClick={() => { triggerHaptic('light'); setActiveTab('context'); }}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap font-urdu ${
              activeTab === 'context'
                ? 'bg-[#0B5D3C] text-white shadow-md shadow-[#0B5D3C]/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-[#0B5D3C]/5'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>شانِ نزول</span>
          </button>

          <button
            id={`tafseer-tab-lessons-${verse.day}`}
            onClick={() => { triggerHaptic('light'); setActiveTab('lessons'); }}
            className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap font-urdu ${
              activeTab === 'lessons'
                ? 'bg-[#0B5D3C] text-white shadow-md shadow-[#0B5D3C]/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-[#0B5D3C]/5'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>اہم نکات</span>
          </button>
        </div>

        {/* Loading Spinner for Dynamic Online Fetching */}
        {loadingDynamic && activeTab === 'urdu' ? (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
            <Loader2 className="w-7 h-7 text-[#0B5D3C] dark:text-[#C9A227] animate-spin" />
            <p className="text-xs font-urdu text-slate-500 dark:text-slate-400">
              آن لائن تفسیر اپ لوڈ ہو رہی ہے...
            </p>
          </div>
        ) : (
          <>
            {/* Error Notification if Online Fetch Failed */}
            {dynamicError && activeTab === 'urdu' && (
              <div className="mb-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-urdu text-right" dir="rtl">
                {dynamicError}
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1">
              {/* TAB 1: Simplified Urdu Tafseer */}
              {activeTab === 'urdu' && (
                <div className="flex flex-col gap-3" dir="rtl">
                  <div 
                    className={`font-urdu text-slate-700 dark:text-slate-200 leading-[2.1] whitespace-pre-line text-right ${activeTextClass} ${
                      !isExpanded && (selectedEdition !== 'embedded' ? dynamicText : localTafseer.tafseerUrdu).length > 350
                        ? 'line-clamp-6'
                        : ''
                    }`}
                  >
                    {selectedEdition !== 'embedded' && dynamicText 
                      ? dynamicText 
                      : localTafseer.tafseerUrdu}
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-urdu">
                    <span>
                      ماخذ: {selectedEdition !== 'embedded' ? dynamicSource : localTafseer.sourceNameUrdu}
                    </span>
                    
                    {(selectedEdition !== 'embedded' ? dynamicText : localTafseer.tafseerUrdu).length > 350 && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#0B5D3C] dark:text-[#E5C76B] font-bold flex items-center gap-1 hover:underline"
                      >
                        {isExpanded ? (
                          <>
                            <span>مختصر دیکھیں</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>مکمل تفصیلی تفسیر پڑھیں</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: English Explanation */}
              {activeTab === 'english' && (
                <div className="flex flex-col gap-3" dir="ltr">
                  <div className={`font-sans text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line ${activeTextClass}`}>
                    {localTafseer.tafseerEn}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                    Source: {localTafseer.sourceNameEn}
                  </div>
                </div>
              )}

              {/* TAB 3: Historical Context / Asbab Al-Nuzul */}
              {activeTab === 'context' && (
                <div className="flex flex-col gap-3" dir="rtl">
                  <div className="p-4 rounded-2xl bg-[#F5F1E8]/80 dark:bg-[#0C1813]/80 border border-[#0B5D3C]/10 dark:border-white/10">
                    <p className="text-xs uppercase tracking-wider text-[#0B5D3C] dark:text-[#C9A227] font-bold mb-2 flex items-center gap-1.5">
                      <History className="w-4 h-4" />
                      <span>شانِ نزول و تاریخی پس منظر</span>
                    </p>
                    <p className={`font-urdu text-slate-700 dark:text-slate-200 leading-relaxed text-right ${activeTextClass}`}>
                      {localTafseer.asbabAlNuzulUrdu}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans text-left" dir="ltr">
                    Context: {localTafseer.asbabAlNuzulEn}
                  </p>
                </div>
              )}

              {/* TAB 4: Key Takeaways & Lessons */}
              {activeTab === 'lessons' && (
                <div className="flex flex-col gap-4" dir="rtl">
                  <div className="space-y-2.5">
                    {localTafseer.keyLessonsUrdu.map((lesson, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/30 flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#0B5D3C] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="font-urdu text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-right flex-1">
                          {lesson}
                        </p>
                      </div>
                    ))}
                  </div>

                  {localTafseer.reflectionsUrdu && (
                    <div className="p-4 rounded-2xl bg-[#C9A227]/10 border border-[#C9A227]/30">
                      <p className="text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>آج کا نکتہ و سچی عمل کی نیت:</span>
                      </p>
                      <p className="font-urdu text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-right">
                        {localTafseer.reflectionsUrdu}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        {/* Reflection Notes Drawer Toggle & Scratchpad */}
        <div className="mt-5 pt-4 border-t border-[#0B5D3C]/10 dark:border-white/10 flex flex-col gap-3">
          <button
            onClick={() => setShowReflections(!showReflections)}
            className="self-start text-xs font-bold text-[#0B5D3C] dark:text-[#E5C76B] flex items-center gap-1.5 hover:underline"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>{showReflections ? 'میرا ذاتی تدبر نوٹس چھپائیں' : 'آیت پر اپنا ذاتی تدبر و نوٹس لکھیں (My Reflections)'}</span>
            {userNote && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
          </button>

          {showReflections && (
            <div className="p-3.5 rounded-2xl bg-[#F5F1E8]/70 dark:bg-[#0C1813]/70 border border-[#0B5D3C]/20 dark:border-white/10 flex flex-col gap-2">
              <label className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227] flex items-center justify-between">
                <span>ذاتی نوٹ و تدبر (Personal Notes):</span>
                {noteSaved && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">محفوظ ہو گیا!</span>}
              </label>
              <textarea
                value={userNote}
                onChange={(e) => handleSaveNote(e.target.value)}
                placeholder="اس آیت سے آپ نے کیا سیکھا؟ اپنی سوچ یا دعا یہاں تحریر کریں..."
                rows={3}
                className="w-full text-xs sm:text-sm font-urdu p-3 rounded-xl bg-white dark:bg-[#142820] text-slate-800 dark:text-slate-100 border border-[#0B5D3C]/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0B5D3C]"
                dir="rtl"
              />
            </div>
          )}

          {/* Action Toolbar: Speech Narration, Copy, Bookmark */}
          <div className="flex items-center justify-between gap-2 pt-2">
            {/* Audio Speech Narration */}
            {'speechSynthesis' in window && (
              <button
                id={`tafseer-narration-btn-${verse.day}`}
                onClick={toggleNarration}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                  isNarrating
                    ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                    : 'bg-[#F5F1E8] dark:bg-[#0C1813] text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/10 hover:border-[#0B5D3C]'
                }`}
                title="Listen to Tafseer Speech Narration"
              >
                <Volume2 className="w-4 h-4" />
                <span>{isNarrating ? 'تفسیر سن رہے ہیں...' : 'تفسیر سنیں'}</span>
              </button>
            )}

            <div className="flex items-center gap-2 ml-auto">
              {/* Copy Tafseer */}
              <button
                id={`tafseer-copy-btn-${verse.day}`}
                onClick={handleCopy}
                className="px-3 py-2 text-xs font-bold text-[#0B5D3C] dark:text-[#E8EFEA] border border-[#0B5D3C]/20 dark:border-white/15 rounded-xl hover:bg-[#0B5D3C]/5 transition-colors flex items-center gap-1.5"
                title="Copy Tafseer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>کپی کریں</span>
                  </>
                )}
              </button>

              {/* Bookmark Tafseer */}
              <button
                id={`tafseer-bookmark-btn-${verse.day}`}
                onClick={() => {
                  triggerHaptic('light');
                  toggleBookmark({
                    id: bookmarkKey,
                    type: 'verse',
                    day: verse.day
                  });
                }}
                className={`p-2 rounded-xl border transition-colors ${
                  bookmarked
                    ? 'bg-[#C9A227] text-[#0C1813] border-[#C9A227]'
                    : 'text-[#0B5D3C] dark:text-[#E8EFEA] border-[#0B5D3C]/20 dark:border-white/15 hover:bg-[#0B5D3C]/5'
                }`}
                title={bookmarked ? "Bookmarked Tafseer" : "Bookmark this Tafseer"}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
