class SoundManager {
  private correct: HTMLAudioElement | null = null;
  private miss: HTMLAudioElement | null = null;
  private clear: HTMLAudioElement | null = null;
  private muted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.correct = new Audio('/sounds/correct.mp3');
        this.correct.volume = 0.5;
        this.miss = new Audio('/sounds/miss.mp3');
        this.miss.volume = 0.3;
        this.clear = new Audio('/sounds/clear.mp3');
        this.clear.volume = 0.6;
      } catch (e) {
        console.error('Audio init error', e);
      }
    }
  }

  setMuted(muted: boolean) {
    this.muted = muted;
  }

  isMuted() {
    return this.muted;
  }

  play(type: 'correct' | 'miss' | 'clear') {
    if (this.muted) return;
    try {
      if (type === 'correct' && this.correct) {
        this.correct.currentTime = 0;
        this.correct.play().catch(() => {});
      } else if (type === 'miss' && this.miss) {
        this.miss.currentTime = 0;
        this.miss.play().catch(() => {});
      } else if (type === 'clear' && this.clear) {
        this.clear.currentTime = 0;
        this.clear.play().catch(() => {});
      }
    } catch {
      // Ignore autoplay errors
    }
  }
}

export const soundManager = new SoundManager();
