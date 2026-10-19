export interface TypingQuestion {
  id: string;
  text: string;
  kana: string;
  romaji: string;
  subtype: string;
  group?: string;
  start_msg?: string;
  reaction_good?: string;
  reaction_bad?: string;
  reaction_fast?: string;
  reaction_slow?: string;
  love_msg?: string;
  image?: string;
  images?: string[];
  sender?: string;
}

export type Mode = 'business' | 'school';
export type SubMode = 'roster' | 'instruction' | 'line' | 'request' | 'chat' | 'mix';
export type ClassGroup = 'all' | '1-1' | '1-2' | '1-4' | '2-1' | '2-2' | '3-1' | '3-2' | 'teacher';
export type QuestionCount = 5 | 10 | 20;

export type Emotion = 'normal' | 'good' | 'bad' | 'love';

export interface GameStats {
  score: number;
  rank: 'S' | 'A' | 'B' | 'C' | 'D';
  rankClass: string;
  finalTime: number;
  missCount: number;
  wpm: number;
  prevBest: number;
  isNewBest: boolean;
  sortedWeakKeys: [string, number][];
  resultMessage: string;
}
