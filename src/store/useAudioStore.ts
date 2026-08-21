import { create } from 'zustand';

export type AudioTrackType = 'verse_arabic' | 'verse_urdu' | 'hadith_urdu' | 'dua_urdu' | 'dhikr_urdu';

export interface AudioTrack {
  id: string;
  type: AudioTrackType;
  title: string;
  subtitle: string;
  audioUrl?: string;
  speechText?: string;
  sourceInfo?: string;
}

interface AudioStoreState {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progressPercent: number;
  playbackSpeed: number;
  audioError: boolean;
  isPlayerVisible: boolean;

  // Actions
  playTrack: (track: AudioTrack) => void;
  pauseTrack: () => void;
  resumeTrack: () => void;
  togglePlayPause: () => void;
  replayTrack: () => void;
  seekTo: (seconds: number) => void;
  seekPercent: (percent: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  closePlayer: () => void;
  showPlayer: () => void;
  isTrackActive: (id: string) => boolean;
  isTrackPlaying: (id: string) => boolean;
}

let globalAudio: HTMLAudioElement | null = null;
let speechTimer: any = null;
let estimatedSpeechDuration = 10;

function getAudioElement(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!globalAudio) {
    globalAudio = new Audio();
  }
  return globalAudio;
}

function clearSpeechTimer() {
  if (speechTimer) {
    clearInterval(speechTimer);
    speechTimer = null;
  }
}

export const useAudioStore = create<AudioStoreState>((set, get) => {
  // Helper to attach HTML5 audio listeners
  const setupAudioListeners = (audio: HTMLAudioElement) => {
    audio.onloadedmetadata = () => {
      const dur = audio.duration || 0;
      set({ duration: dur, audioError: false });
    };

    audio.ontimeupdate = () => {
      const cur = audio.currentTime || 0;
      const dur = audio.duration || 0;
      const pct = dur > 0 ? (cur / dur) * 100 : 0;
      set({ currentTime: cur, duration: dur, progressPercent: pct });
    };

    audio.onended = () => {
      set({ isPlaying: false, currentTime: 0, progressPercent: 0 });
    };

    audio.onerror = () => {
      set({ audioError: true, isPlaying: false });
    };
  };

  return {
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    progressPercent: 0,
    playbackSpeed: 1,
    audioError: false,
    isPlayerVisible: false,

    playTrack: (track: AudioTrack) => {
      const state = get();
      const audio = getAudioElement();

      // Clean up previous speech
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearSpeechTimer();

      // If playing HTML5 audio
      if (track.audioUrl && audio) {
        audio.pause();
        audio.src = track.audioUrl;
        audio.playbackRate = state.playbackSpeed || 1;
        setupAudioListeners(audio);

        set({
          currentTrack: track,
          isPlaying: true,
          currentTime: 0,
          duration: 0,
          progressPercent: 0,
          audioError: false,
          isPlayerVisible: true
        });

        audio.play().catch(err => {
          console.warn('Audio play failed:', err);
          set({ audioError: true, isPlaying: false });
        });
      } 
      // If playing SpeechSynthesis text
      else if (track.speechText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (audio) audio.pause();

        const words = track.speechText.split(/\s+/).length;
        estimatedSpeechDuration = Math.max(5, Math.ceil(words / 2.2)); // rough estimate

        const utterance = new SpeechSynthesisUtterance(track.speechText);
        utterance.lang = 'ur-PK';
        utterance.rate = state.playbackSpeed * 0.9;

        set({
          currentTrack: track,
          isPlaying: true,
          currentTime: 0,
          duration: estimatedSpeechDuration,
          progressPercent: 0,
          audioError: false,
          isPlayerVisible: true
        });

        let elapsed = 0;
        speechTimer = setInterval(() => {
          elapsed += 0.5;
          const pct = Math.min(99, (elapsed / estimatedSpeechDuration) * 100);
          set({ currentTime: elapsed, progressPercent: pct });
        }, 500);

        utterance.onend = () => {
          clearSpeechTimer();
          set({ isPlaying: false, currentTime: 0, progressPercent: 0 });
        };

        utterance.onerror = () => {
          clearSpeechTimer();
          set({ isPlaying: false, audioError: true });
        };

        window.speechSynthesis.speak(utterance);
      }
    },

    pauseTrack: () => {
      const { currentTrack } = get();
      const audio = getAudioElement();

      if (currentTrack?.audioUrl && audio) {
        audio.pause();
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause();
        if (!window.speechSynthesis.paused) {
          window.speechSynthesis.cancel();
        }
      }

      clearSpeechTimer();
      set({ isPlaying: false });
    },

    resumeTrack: () => {
      const { currentTrack, playbackSpeed } = get();
      const audio = getAudioElement();

      if (!currentTrack) return;

      if (currentTrack.audioUrl && audio) {
        audio.playbackRate = playbackSpeed || 1;
        audio.play().then(() => {
          set({ isPlaying: true });
        }).catch(err => {
          console.warn('Audio resume error:', err);
          set({ audioError: true });
        });
      } else if (currentTrack.speechText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          set({ isPlaying: true });
        } else {
          // Re-trigger play
          get().playTrack(currentTrack);
        }
      }
    },

    togglePlayPause: () => {
      const { isPlaying, currentTrack } = get();
      if (!currentTrack) return;
      if (isPlaying) {
        get().pauseTrack();
      } else {
        get().resumeTrack();
      }
    },

    replayTrack: () => {
      const { currentTrack } = get();
      if (!currentTrack) return;
      get().playTrack(currentTrack);
    },

    seekTo: (seconds: number) => {
      const { currentTrack, duration } = get();
      const audio = getAudioElement();

      if (currentTrack?.audioUrl && audio && duration > 0) {
        const target = Math.max(0, Math.min(seconds, duration));
        audio.currentTime = target;
        const pct = (target / duration) * 100;
        set({ currentTime: target, progressPercent: pct });
      }
    },

    seekPercent: (percent: number) => {
      const { duration } = get();
      if (duration > 0) {
        const seconds = (percent / 100) * duration;
        get().seekTo(seconds);
      }
    },

    setPlaybackSpeed: (speed: number) => {
      const audio = getAudioElement();
      const { currentTrack, isPlaying } = get();
      set({ playbackSpeed: speed });

      if (currentTrack?.audioUrl && audio) {
        audio.playbackRate = speed;
      } else if (currentTrack?.speechText && isPlaying) {
        // Re-start speech with new rate
        get().playTrack(currentTrack);
      }
    },

    closePlayer: () => {
      const audio = getAudioElement();
      if (audio) audio.pause();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearSpeechTimer();
      set({ isPlaying: false, isPlayerVisible: false });
    },

    showPlayer: () => {
      set({ isPlayerVisible: true });
    },

    isTrackActive: (id: string) => {
      return get().currentTrack?.id === id;
    },

    isTrackPlaying: (id: string) => {
      return get().currentTrack?.id === id && get().isPlaying;
    }
  };
});
