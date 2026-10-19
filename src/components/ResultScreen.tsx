import React from 'react';
import { GameStats } from '../types';

interface ResultScreenProps {
  stats: GameStats;
  onRetry: () => void;
  onBackToTitle: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  stats,
  onRetry,
  onBackToTitle
}) => {
  return (
    <div id="result-screen">
      <div className="result-box">
        {/* ランクバッジ */}
        <div id="rank-badge" className={stats.rankClass}>
          {stats.rank}
        </div>
        <h2 id="result-title">業務完了</h2>

        <div className="result-grid">
          <div className="result-item">
            <span className="label">スコア</span>
            <span className="value" id="result-score">
              {stats.score}
            </span>
          </div>
          <div className="result-item">
            <span className="label">ランク</span>
            <span className="value" id="result-rank">
              {stats.rank}
            </span>
          </div>
          <div className="result-item">
            <span className="label">タイム</span>
            <span className="value">
              <span id="result-time">{stats.finalTime.toFixed(1)}</span>s
            </span>
          </div>
          <div className="result-item">
            <span className="label">ミス</span>
            <span className="value" id="result-miss">
              {stats.missCount}
            </span>
          </div>
        </div>

        {/* ベストスコア比較 & 苦手キー */}
        <div className="analysis-area">
          <p id="best-score-info">
            {stats.isNewBest ? (
              <>
                <i className="fa-solid fa-trophy"></i> 自己ベスト更新！ (旧: {stats.prevBest})
              </>
            ) : (
              <>
                <i className="fa-solid fa-crown"></i> 自己ベスト: {stats.prevBest}
              </>
            )}
          </p>
          <div id="weak-keys-area">
            <p>⚠️ 苦手なキー</p>
            <div id="weak-keys-list">
              {stats.sortedWeakKeys.length > 0 ? (
                stats.sortedWeakKeys.map(([char, count]) => (
                  <div
                    key={char}
                    className="weak-key"
                    title={`${count}回ミス`}
                  >
                    {char.toUpperCase()}
                  </div>
                ))
              ) : (
                'なし (Perfect!)'
              )}
            </div>
          </div>
        </div>

        <p id="result-msg" className="msg-text">
          {stats.resultMessage}
        </p>

        <button onClick={onRetry} className="retry-btn same-settings-btn">
          <i className="fa-solid fa-repeat"></i> 同じ設定でもう一度
        </button>
        <button onClick={onBackToTitle} className="retry-btn">
          <i className="fa-solid fa-rotate-right"></i> タイトルに戻る
        </button>
      </div>
    </div>
  );
};
