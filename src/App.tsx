import React, { useState, useEffect } from 'react';
import { Mode, SubMode, ClassGroup, QuestionCount, TypingQuestion, GameStats } from './types';
import { businessData, schoolData } from './data/typingData';
import { StartScreen } from './components/StartScreen';
import { GameContainer } from './components/GameContainer';
import { ResultScreen } from './components/ResultScreen';

export const App: React.FC = () => {
  const [screen, setScreen] = useState<'start' | 'game' | 'result'>('start');
  const [mode, setMode] = useState<Mode>('business');
  const [subMode, setSubMode] = useState<SubMode>('roster');
  const [classGroup, setClassGroup] = useState<ClassGroup>('all');
  const [count, setCount] = useState<QuestionCount>(5);

  const [currentQuestions, setCurrentQuestions] = useState<TypingQuestion[]>([]);
  const [gameStats, setGameStats] = useState<GameStats | null>(null);

  // Background style synchronization
  useEffect(() => {
    if (screen === 'game' && mode === 'school') {
      document.body.style.background = 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)';
    } else {
      document.body.style.background = '#f4f6f9';
    }
  }, [screen, mode]);

  const initGame = () => {
    let source: TypingQuestion[] = [];
    if (mode === 'business') {
      source = businessData;
    } else {
      source = schoolData.filter((q) => {
        const typeMatch = subMode === 'mix' || q.subtype === subMode;
        const classMatch = classGroup === 'all' || q.group === classGroup;
        return typeMatch && classMatch;
      });
    }

    if (source.length === 0) {
      source = schoolData;
    }

    const shuffled = [...source].sort(() => 0.5 - Math.random()).slice(0, count);
    setCurrentQuestions(shuffled);
    setScreen('game');
  };

  const handleFinish = (stats: GameStats) => {
    setGameStats(stats);
    setScreen('result');
  };

  const handleRetry = () => {
    initGame();
  };

  const handleQuit = () => {
    setScreen('start');
  };

  return (
    <>
      {screen === 'start' && (
        <StartScreen
          mode={mode}
          setMode={setMode}
          subMode={subMode}
          setSubMode={setSubMode}
          classGroup={classGroup}
          setClassGroup={setClassGroup}
          count={count}
          setCount={setCount}
          onStart={initGame}
        />
      )}

      {screen === 'game' && currentQuestions.length > 0 && (
        <GameContainer
          mode={mode}
          subMode={subMode}
          classGroup={classGroup}
          questions={currentQuestions}
          onFinish={handleFinish}
          onQuit={handleQuit}
        />
      )}

      {screen === 'result' && gameStats && (
        <ResultScreen
          stats={gameStats}
          onRetry={handleRetry}
          onBackToTitle={handleQuit}
        />
      )}
    </>
  );
};

export default App;
