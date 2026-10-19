import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mode, SubMode, ClassGroup, TypingQuestion, Emotion, GameStats } from '../types';
import { KeyboardGuide } from './KeyboardGuide';
import { CharacterDisplay } from './CharacterDisplay';
import { soundManager } from '../utils/sound';
import { checkFlexibleInput, getSkippedSpacesCount, calculateGameStats } from '../utils/typingEngine';

interface GameContainerProps {
  mode: Mode;
  subMode: SubMode;
  classGroup: ClassGroup;
  questions: TypingQuestion[];
  onFinish: (stats: GameStats) => void;
  onQuit: () => void;
}

export const GameContainer: React.FC<GameContainerProps> = ({
  mode,
  subMode,
  classGroup,
  questions,
  onFinish,
  onQuit
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isWaitingNext, setIsWaitingNext] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const [targetRomaji, setTargetRomaji] = useState<string>('');
  const [typedCount, setTypedCount] = useState<number>(0);
  const [currentMiss, setCurrentMiss] = useState<number>(0);
  const [totalMiss, setTotalMiss] = useState<number>(0);
  const [totalTyped, setTotalTyped] = useState<number>(0);
  const [missedKeysMap, setMissedKeysMap] = useState<Record<string, number>>({});

  const [comment, setComment] = useState<string>('');
  const [commentColor, setCommentColor] = useState<string>('#555');
  const [charEmotion, setCharEmotion] = useState<Emotion>('normal');
  const [hasErrorFlash, setHasErrorFlash] = useState<boolean>(false);

  const [isMuted, setIsMuted] = useState<boolean>(soundManager.isMuted());

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const questionStartTimeRef = useRef<number>(0);

  // Keep refs for callbacks so state stays fresh in event listeners
  const stateRef = useRef({
    isStarted,
    isWaitingNext,
    targetRomaji,
    typedCount,
    currentIndex,
    currentMiss,
    totalMiss,
    totalTyped,
    missedKeysMap,
    questions,
    commentColor
  });

  stateRef.current = {
    isStarted,
    isWaitingNext,
    targetRomaji,
    typedCount,
    currentIndex,
    currentMiss,
    totalMiss,
    totalTyped,
    missedKeysMap,
    questions,
    commentColor
  };

  // Refocus input whenever user clicks
  const keepFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', keepFocus);
    return () => {
      document.removeEventListener('click', keepFocus);
    };
  }, [keepFocus]);

  // Load question data
  const loadQuestion = useCallback((index: number) => {
    if (index >= questions.length) {
      return;
    }

    const q = questions[index];
    let initialRomaji = q.romaji;
    let initialTyped = 0;

    // Skip leading spaces
    const initialSkip = getSkippedSpacesCount(initialRomaji, 0);
    initialTyped += initialSkip;

    setTargetRomaji(initialRomaji);
    setTypedCount(initialTyped);
    setCurrentMiss(0);
    setIsWaitingNext(false);

    let saveData: Record<string, number> = {};
    try {
      saveData = JSON.parse(localStorage.getItem('tori_save') || '{}');
    } catch {
      saveData = {};
    }

    const charLove = saveData[q.id] || 0;
    let startMsg = q.start_msg || '';
    let initialFace: Emotion = 'normal';
    let initColor = '#555';

    if (mode === 'school' && charLove >= 5 && q.love_msg) {
      startMsg = q.love_msg;
      initColor = '#ff69b4';
      initialFace = 'love';
    }

    setComment(startMsg);
    setCommentColor(initColor);
    setCharEmotion(initialFace);
    questionStartTimeRef.current = Date.now();

    if (inputRef.current) {
      inputRef.current.value = ' '.repeat(initialSkip);
      inputRef.current.focus();
    }
  }, [questions, mode]);

  // Handle game finish
  const finishGame = useCallback((finalTotalTyped: number, finalMissCount: number, finalMap: Record<string, number>) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    soundManager.play('clear');

    const totalSeconds = startTimeRef.current > 0 ? (Date.now() - startTimeRef.current) / 1000 : 0;
    const finalTime = parseFloat(totalSeconds.toFixed(1));

    const saveKey = `best_${mode}_${subMode}_${classGroup}_${questions.length}`;
    let scoreData: Record<string, number> = {};
    try {
      scoreData = JSON.parse(localStorage.getItem('tori_score') || '{}');
    } catch {
      scoreData = {};
    }

    const prevBest = scoreData[saveKey] || 0;
    const stats = calculateGameStats(
      mode,
      finalTotalTyped,
      finalTime,
      finalMissCount,
      prevBest,
      finalMap
    );

    if (stats.score > prevBest) {
      scoreData[saveKey] = stats.score;
      try {
        localStorage.setItem('tori_score', JSON.stringify(scoreData));
      } catch {
        // Ignore storage quota
      }
    }

    onFinish(stats);
  }, [mode, subMode, classGroup, questions.length, onFinish]);

  // Handle question clear
  const questionClear = useCallback((clearedRomaji: string, updatedTotalTyped: number, updatedTotalMiss: number, updatedMissMap: Record<string, number>) => {
    setIsWaitingNext(true);
    const { currentIndex: idx, currentMiss: qMiss, questions: allQ } = stateRef.current;
    const q = allQ[idx];

    const endTime = Date.now();
    const duration = (endTime - questionStartTimeRef.current) / 1000;
    const speed = duration > 0 ? clearedRomaji.length / duration : 10;

    let reaction = q.reaction_good || 'OK!';
    let color = '#27ae60';

    if (qMiss === 0) {
      reaction = 'Perfect!!✨ ' + reaction;
      color = '#f1c40f';
      soundManager.play('correct');
    } else if (speed > 5 && q.reaction_fast) {
      reaction = q.reaction_fast;
      color = '#e67e22';
    } else if (speed < 2 && q.reaction_slow) {
      reaction = q.reaction_slow;
      color = '#3498db';
    }

    setComment(reaction);
    setCommentColor(color);
    setCharEmotion('good');

    if (mode === 'school') {
      try {
        const saveData = JSON.parse(localStorage.getItem('tori_save') || '{}');
        saveData[q.id] = (saveData[q.id] || 0) + 1;
        localStorage.setItem('tori_save', JSON.stringify(saveData));
      } catch {
        // Ignore storage error
      }
    }

    const delay = mode === 'business' ? 500 : 1200;

    setTimeout(() => {
      const nextIdx = idx + 1;
      if (nextIdx >= allQ.length) {
        finishGame(updatedTotalTyped, updatedTotalMiss, updatedMissMap);
      } else {
        setCurrentIndex(nextIdx);
        loadQuestion(nextIdx);
      }
    }, delay);
  }, [mode, finishGame, loadQuestion]);

  // Start game on Space
  const startGame = useCallback(() => {
    setIsStarted(true);
    startTimeRef.current = Date.now();
    questionStartTimeRef.current = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      const diff = (Date.now() - startTimeRef.current) / 1000;
      setElapsedTime(parseFloat(diff.toFixed(1)));
    }, 100);

    loadQuestion(0);
  }, [loadQuestion]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Global keydown handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        return;
      }

      // Space key handler
      if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (!stateRef.current.isStarted) {
          startGame();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startGame]);

  // Typing input handler
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isStarted: started, isWaitingNext: waiting, targetRomaji: romaji, typedCount: count } = stateRef.current;
    if (!started || waiting) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    const val = e.target.value;
    if (val.length <= count) {
      return;
    }

    const lastChar = val.slice(-1);
    const expectedChar = romaji[count];

    let isMatch = lastChar === expectedChar;
    let effectiveRomaji = romaji;

    if (!isMatch) {
      const flexResult = checkFlexibleInput(lastChar, romaji, count);
      if (flexResult.matched) {
        isMatch = true;
        effectiveRomaji = flexResult.newRomaji;
        setTargetRomaji(flexResult.newRomaji);
      }
    }

    if (isMatch) {
      // Correct input
      let nextCount = count + 1;
      const nextTotalTyped = stateRef.current.totalTyped + 1;
      setTotalTyped(nextTotalTyped);
      soundManager.play('correct');

      // Skip spaces
      const spaceSkip = getSkippedSpacesCount(effectiveRomaji, nextCount);
      nextCount += spaceSkip;

      setTypedCount(nextCount);

      if (stateRef.current.commentColor === '#e74c3c') {
        setComment('');
        const q = stateRef.current.questions[stateRef.current.currentIndex];
        let saveData: Record<string, number> = {};
        try {
          saveData = JSON.parse(localStorage.getItem('tori_save') || '{}');
        } catch {
          saveData = {};
        }
        const charLove = saveData[q.id] || 0;
        setCharEmotion(charLove >= 5 ? 'love' : 'normal');
      }

      if (nextCount >= effectiveRomaji.length) {
        questionClear(effectiveRomaji, nextTotalTyped, stateRef.current.totalMiss, stateRef.current.missedKeysMap);
      }
    } else {
      // Mistake
      const nextMiss = stateRef.current.currentMiss + 1;
      const nextTotalMiss = stateRef.current.totalMiss + 1;
      setCurrentMiss(nextMiss);
      setTotalMiss(nextTotalMiss);
      soundManager.play('miss');

      if (expectedChar) {
        const charKey = expectedChar.toLowerCase();
        setMissedKeysMap(prev => ({
          ...prev,
          [charKey]: (prev[charKey] || 0) + 1
        }));
      }

      if (inputRef.current) {
        inputRef.current.value = val.slice(0, -1);
      }

      setHasErrorFlash(true);
      setTimeout(() => setHasErrorFlash(false), 200);

      const q = stateRef.current.questions[stateRef.current.currentIndex];
      if (q && q.reaction_bad) {
        setComment(q.reaction_bad);
        setCommentColor('#e74c3c');
      }
      setCharEmotion('bad');
    }
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundManager.setMuted(nextMuted);
  };

  const currentQ = questions[currentIndex] || questions[0];
  const activeChar = isStarted && typedCount < targetRomaji.length ? targetRomaji[typedCount] : null;

  // Header labels
  const appTitle = mode === 'school' ? '🏫 教育機関実務研修（とりの丘学園）' : '実務データ入力演習';
  let classNameDisplay = classGroup === 'all' ? '全校' : classGroup;
  if (classGroup === 'teacher') classNameDisplay = '教職員';

  const isLineStyle = mode === 'school' && subMode === 'line';
  const showSender = mode === 'school' && ['line', 'chat', 'request'].includes(currentQ?.subtype || '');

  return (
    <div id="game-container" className={mode === 'school' ? 'school-mode' : 'business-mode'}>
      <header id="header">
        <div className="header-left">
          <h1 id="app-title">{appTitle}</h1>
          <div id="sub-info">
            {mode === 'school' ? (
              <>
                <i className="fa-solid fa-graduation-cap"></i> 実習対象: {classNameDisplay}
              </>
            ) : (
              <>
                <i className="fa-solid fa-id-card"></i> 教務課・データ管理担当
              </>
            )}
          </div>
        </div>
        <div className="header-right">
          <button id="sound-btn" onClick={toggleSound}>
            <i
              id="sound-icon"
              className={isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'}
            ></i>
          </button>
          <button id="back-btn" onClick={onQuit}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> 終了
          </button>
        </div>
      </header>

      <main>
        {/* ステータスバー */}
        <div id="status-bar">
          <div className="status-item">
            <i className="fa-solid fa-layer-group"></i> 残り: <span id="count-display">{isStarted ? questions.length - currentIndex : questions.length}</span>問
          </div>
          <div className="status-item">
            <i className="fa-solid fa-clock"></i> Time: <span id="time-display">{elapsedTime.toFixed(1)}</span>s
          </div>
        </div>

        {/* お題エリア */}
        <div id="question-area" className={isLineStyle ? 'line-style' : ''}>
          {/* キャラ画像 */}
          {currentQ && (
            <CharacterDisplay
              mode={mode}
              question={currentQ}
              emotion={charEmotion}
            />
          )}

          {/* チャット風の送信者名 */}
          {showSender && currentQ.sender && (
            <div id="sender-info">
              <i className="fa-solid fa-user-circle"></i> <span id="sender-name">{currentQ.sender}</span>
            </div>
          )}

          {/* お題テキスト */}
          <div id="display-text">{currentQ?.text || ''}</div>

          {/* かな読み */}
          <div id="reading-text">{currentQ?.kana || ''}</div>
        </div>

        {/* キャラのセリフ（リアクション） */}
        <div id="char-comment-box">
          <span id="char-comment" style={{ color: commentColor }}>
            {comment}
          </span>
        </div>

        {/* タイピング入力エリア */}
        <div id="input-area">
          <div id="romaji-display">
            {targetRomaji.split('').map((char, i) => {
              if (i < typedCount) {
                return (
                  <span key={i} className="typed-char">
                    {char}
                  </span>
                );
              } else if (i === typedCount) {
                return (
                  <span key={i} className="highlight-char">
                    {char}
                  </span>
                );
              } else {
                return <span key={i}>{char}</span>;
              }
            })}
          </div>

          <input
            ref={inputRef}
            type="text"
            id="type-input"
            autoComplete="off"
            spellCheck={false}
            disabled={isWaitingNext}
            placeholder={!isStarted ? 'Spaceキーで研修開始' : ''}
            onChange={handleInput}
          />
        </div>

        {/* キーボードガイド */}
        <KeyboardGuide activeKey={activeChar} hasError={hasErrorFlash} />
      </main>
    </div>
  );
};
