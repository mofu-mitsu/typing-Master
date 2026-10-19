import { GameStats, Mode } from '../types';

interface FlexibleReplacement {
  from: string;
  to: string;
  prev?: string;
}

const REPLACEMENTS: FlexibleReplacement[] = [
  { from: "shi", to: "si" },
  { from: "chi", to: "ti" },
  { from: "tsu", to: "tu" },
  { from: "tsu", to: "cyu" },
  { from: "jyu", to: "10" },
  { from: "ju",  to: "10" }, 
  { from: "fu",  to: "hu" },
  { from: "ji",  to: "zi" },
  { from: "ti",  to: "chi" },
  { from: "ha",  to: "wa" },
  { from: "wa",  to: "ha" },
  { from: "o",   to: "wo" },
  { from: "sha", to: "sya" },
  { from: "shu", to: "syu" },
  { from: "sho", to: "syo" },
  { from: "cha", to: "tya" },
  { from: "chu", to: "tyu" },
  { from: "cho", to: "tyo" },
  { from: "ja",  to: "zya" },
  { from: "ju",  to: "zyu" },
  { from: "jo",  to: "zyo" },
  { from: "hi",  to: "i", prev: "s" },
  { from: "su",  to: "u", prev: "t" }, 
  { from: "ha",  to: "ya", prev: "s" },
  { from: "hu",  to: "yu", prev: "s" },
  { from: "ho",  to: "yo", prev: "s" }
];

export function checkFlexibleInput(
  inputChar: string,
  targetRomaji: string,
  typedCount: number
): { matched: boolean; newRomaji: string } {
  const remaining = targetRomaji.substring(typedCount);
  const prevChar = typedCount > 0 ? targetRomaji[typedCount - 1] : "";

  for (const r of REPLACEMENTS) {
    if (r.prev && r.prev !== prevChar) continue;
    if (remaining.startsWith(r.from)) {
      if (r.to.startsWith(inputChar)) {
        const newTail = r.to + remaining.substring(r.from.length);
        const head = targetRomaji.substring(0, typedCount);
        return { matched: true, newRomaji: head + newTail };
      }
    }
  }

  return { matched: false, newRomaji: targetRomaji };
}

export function getSkippedSpacesCount(romaji: string, startIndex: number): number {
  let count = 0;
  while (startIndex + count < romaji.length && romaji[startIndex + count] === ' ') {
    count++;
  }
  return count;
}

export function calculateGameStats(
  mode: Mode,
  totalTyped: number,
  finalTime: number,
  missCount: number,
  prevBest: number,
  missedKeysMap: Record<string, number>
): GameStats {
  const safeTime = finalTime > 0 ? finalTime : 1;
  const wpm = (totalTyped / safeTime) * 60;
  let score = Math.round((wpm * 10) - (missCount * 50));
  if (score < 0) score = 0;

  let rank: 'S' | 'A' | 'B' | 'C' | 'D' = 'D';
  let rankClass = 'rank-d';

  if (score >= 3000) {
    rank = 'S';
    rankClass = 'rank-s';
  } else if (score >= 2000) {
    rank = 'A';
    rankClass = 'rank-a';
  } else if (score >= 1000) {
    rank = 'B';
    rankClass = 'rank-b';
  } else if (score >= 500) {
    rank = 'C';
    rankClass = 'rank-c';
  }

  const sortedWeakKeys = Object.entries(missedKeysMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  let resultMessage = "";
  if (mode === 'school') {
    if (rank === 'S') {
      resultMessage = "みりん「えっ神！？センセ凄すぎ！惚れ直した！」";
    } else if (rank === 'A') {
      resultMessage = "みりん「おぉ〜やるね！いい感じ！」";
    } else {
      resultMessage = "実習お疲れ様でした！";
    }
  } else {
    resultMessage = "本日のデータ入力業務は全て完了しました。\nお疲れ様でした。";
  }

  return {
    score,
    rank,
    rankClass,
    finalTime,
    missCount,
    wpm,
    prevBest,
    isNewBest: score > prevBest,
    sortedWeakKeys,
    resultMessage
  };
}
