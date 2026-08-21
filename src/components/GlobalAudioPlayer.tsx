import React from 'react';
import { useAudioStore, AudioTrack } from '../store/useAudioStore';
import { useDailyStore } from '../store/useDailyStore';
import { EMBEDDED_VERSES, EMBEDDED_HADITHS } from '../data/embeddedData';
import { getDailyIndex } from '../utils/dateUtils';
import { triggerHaptic } from '../utils/haptics';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Gauge, 
  BookOpen, 
  Sparkles, 
  Radio, 
  Disc,
  FastForward,
  Rewind
} from 'lucide-react';

export const GlobalAudioPlayer: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    progressPercent, 
    playbackSpeed, 
    audioError, 
    isPlayerVisible, 
    playTrack, 
    pauseTrack, 
    resumeTrack, 
    togglePlayPause, 
    replayTrack, 
    seekPercent, 
    setPlaybackSpeed, 
    closePlayer, 
    showPlayer 
  } = useAudioStore();

  const { selectedDate } = useDailyStore();

  // Retrieve current day's Verse & Hadith for quick play if no track is selected yet
  const verseIndex = getDailyIndex(EMBEDDED_VERSES.length, selectedDate) - 1;
  const currentVerse = EMBEDDED_VERSES[verseIndex] || EMBEDDED_VERSES[0];

  const hadithIndex = getDailyIndex(EMBEDDED_HADITHS.length, selectedDate) - 1;
  const currentHadith = EMBEDDED_HADITHS[hadithIndex] || EMBEDDED_HADITHS[0];

  // Quick Start Actions
  const handlePlayVerseArabic = () => {
    triggerHaptic('light');
    playTrack({
      id: `verse-arabic-${currentVerse.day}`,
      type: 'verse_arabic',
      title: `Surah ${currentVerse.surah} (${currentVerse.surah_ar}) • Ayah ${currentVerse.ayah}`,
      subtitle: 'Arabic Recitation • Mishary Rashid Alafasy',
      audioUrl: currentVerse.audio_url,
      sourceInfo: 'Verse of the Day'
    });
  };

  const handlePlayVerseUrdu = () => {
    triggerHaptic('light');
    playTrack({
      id: `verse-urdu-${currentVerse.day}`,
      type: 'verse_urdu',
      title: `Surah ${currentVerse.surah} (${currentVerse.surah_ar}) • Ayah ${currentVerse.ayah}`,
      subtitle: 'Urdu Translation Narration',
      speechText: `${currentVerse.surah_ar}۔ ${currentVerse.urdu_translation}`,
      sourceInfo: 'Verse Translation'
    });
  };

  const handlePlayHadithUrdu = () => {
    triggerHaptic('light');
    playTrack({
      id: `hadith-urdu-${currentHadith.day}`,
      type: 'hadith_urdu',
      title: `Hadith • ${currentHadith.source}`,
      subtitle: `Urdu Narration • ${currentHadith.category || 'Character & Ethics'}`,
      speechText: `${currentHadith.urdu_translation}۔ سبق: ${currentHadith.lesson}`,
      sourceInfo: 'Hadith of the Day'
    });
  };

  // Format MM:SS helper
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Cycle Speed
  const handleCycleSpeed = () => {
    triggerHaptic('light');
    const speeds = [0.8, 1, 1.2, 1.5];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
  };

  // If player is hidden or minimized but track exists, show mini floating widget button
  if (!isPlayerVisible) {
    if (!currentTrack) return null;

    return (
      <div className="fixed bottom-4 right-4 z-50 animate-bounce-subtle">
        <button
          id="btn-global-audio-minimized-fab"
          onClick={() => {
            triggerHaptic('light');
            showPlayer();
          }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] shadow-2xl border border-white/20 hover:scale-105 transition-all cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
              </span>
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </div>
          <div className="text-left text-xs font-bold truncate max-w-[140px]">
            <span className="block truncate">{currentTrack.title}</span>
          </div>
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div 
      id="global-audio-player-sticky"
      className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 max-w-5xl mx-auto pointer-events-none"
    >
      <div className="pointer-events-auto rounded-3xl bg-white/95 dark:bg-[#142820]/95 backdrop-blur-md border border-[#0B5D3C]/20 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Top Progress Bar */}
        <div className="relative w-full h-1.5 bg-[#0B5D3C]/10 dark:bg-white/10 group cursor-pointer">
          <input
            id="audio-progress-range-slider"
            type="range"
            min="0"
            max="100"
            value={progressPercent || 0}
            onChange={(e) => seekPercent(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
            title="Seek Audio Progress"
          />
          <div 
            className="h-full bg-gradient-to-r from-[#0B5D3C] via-[#22c55e] to-[#C9A227] transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Left Column: Track Info & Source */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Playing Animated Equalizer Icon */}
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
              isPlaying 
                ? 'bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813]' 
                : 'bg-[#0B5D3C]/10 dark:bg-white/10 text-[#0B5D3C] dark:text-[#E5C76B]'
            }`}>
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-5">
                  <span className="w-1 bg-current rounded-full animate-bounce h-3" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 bg-current rounded-full animate-bounce h-5" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 bg-current rounded-full animate-bounce h-2" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 bg-current rounded-full animate-bounce h-4" style={{ animationDelay: '450ms' }} />
                </div>
              ) : (
                <Disc className="w-5 h-5" />
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="min-w-0 flex-1">
              {currentTrack ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#0B5D3C]/10 text-[#0B5D3C] dark:bg-white/10 dark:text-[#E5C76B] shrink-0">
                      {currentTrack.sourceInfo || 'Daily Recitation'}
                    </span>
                    <span className="text-xs text-[#4A5D53] dark:text-[#96A89F] font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#1D2B24] dark:text-[#E8EFEA] truncate leading-snug">
                    {currentTrack.title}
                  </h4>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F] truncate">
                    {currentTrack.subtitle}
                  </p>
                </>
              ) : (
                /* No Track Playing - Quick Start Options */
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0B5D3C] dark:text-[#C9A227]">
                    🎧 Quick Audio Player (روزانہ کی آڈیو)
                  </span>
                  <p className="text-xs text-[#4A5D53] dark:text-[#96A89F]">
                    Select today's Verse or Hadith audio to start listening:
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Center / Right Controls Column */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#0B5D3C]/10 dark:border-white/10">
            
            {/* If No Active Track: Show Quick Buttons */}
            {!currentTrack && (
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  id="btn-quick-audio-verse-arabic"
                  onClick={handlePlayVerseArabic}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Verse Arabic</span>
                </button>

                <button
                  id="btn-quick-audio-verse-urdu"
                  onClick={handlePlayVerseUrdu}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B5D3C]/10 dark:bg-white/10 text-[#0B5D3C] dark:text-[#E5C76B] text-xs font-bold hover:bg-[#0B5D3C]/20 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Verse Urdu</span>
                </button>

                <button
                  id="btn-quick-audio-hadith-urdu"
                  onClick={handlePlayHadithUrdu}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B5D3C]/10 dark:bg-white/10 text-[#0B5D3C] dark:text-[#E5C76B] text-xs font-bold hover:bg-[#0B5D3C]/20 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Hadith Urdu</span>
                </button>
              </div>
            )}

            {/* Controls when Track exists */}
            {currentTrack && (
              <div className="flex items-center gap-2">
                
                {/* Speed Toggle Button */}
                <button
                  id="btn-global-audio-speed"
                  onClick={handleCycleSpeed}
                  title={`Speed: ${playbackSpeed}x`}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/10 dark:border-white/10 text-xs font-bold hover:bg-[#0B5D3C]/10 transition-colors"
                >
                  {playbackSpeed}x
                </button>

                {/* Replay / Restart Button */}
                <button
                  id="btn-global-audio-replay"
                  onClick={() => {
                    triggerHaptic('medium');
                    replayTrack();
                  }}
                  title="Replay Audio from Start"
                  className="p-2 rounded-xl bg-[#F5F1E8] dark:bg-[#0C1813] text-[#1D2B24] dark:text-[#E8EFEA] border border-[#0B5D3C]/10 dark:border-white/10 hover:bg-[#0B5D3C]/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Play / Pause Primary Button */}
                <button
                  id="btn-global-audio-play-pause"
                  onClick={() => {
                    triggerHaptic('light');
                    togglePlayPause();
                  }}
                  title={isPlaying ? 'Pause Audio' : 'Resume Audio'}
                  className="p-3 rounded-2xl bg-[#0B5D3C] text-white dark:bg-[#C9A227] dark:text-[#0C1813] hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current" />
                  )}
                </button>

                {/* Minimize Button */}
                <button
                  id="btn-global-audio-minimize"
                  onClick={() => {
                    triggerHaptic('light');
                    closePlayer();
                  }}
                  title="Close / Minimize Audio Player"
                  className="p-2 rounded-xl text-[#4A5D53] dark:text-[#96A89F] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors ml-1"
                >
                  <X className="w-4 h-4" />
                </button>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
