import React from 'react';
import { Mode, SubMode, ClassGroup, QuestionCount } from '../types';

interface StartScreenProps {
  mode: Mode;
  setMode: (m: Mode) => void;
  subMode: SubMode;
  setSubMode: (sm: SubMode) => void;
  classGroup: ClassGroup;
  setClassGroup: (cg: ClassGroup) => void;
  count: QuestionCount;
  setCount: (c: QuestionCount) => void;
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  mode,
  setMode,
  subMode,
  setSubMode,
  classGroup,
  setClassGroup,
  count,
  setCount,
  onStart
}) => {
  const handleSubModeChange = (newSubMode: SubMode) => {
    setSubMode(newSubMode);
    if (newSubMode === 'instruction') {
      setClassGroup('teacher');
    } else if (['line', 'request', 'chat'].includes(newSubMode)) {
      if (classGroup === 'teacher') {
        setClassGroup('all');
      }
    }
  };

  const isInstruction = subMode === 'instruction';
  const isStudentChat = ['line', 'request', 'chat'].includes(subMode);

  return (
    <div id="start-screen">
      <div className="menu-card">
        <div className="menu-header">
          <i className="fa-solid fa-keyboard fa-3x"></i>
          <h1>Typing Master</h1>
          <p>事務職のためのタイピングスキル向上プログラム</p>
        </div>

        <div className="setting-area">
          {/* コース選択 */}
          <div className="setting-group course-setting">
            <label>
              <i className="fa-solid fa-briefcase"></i> 研修コース選択
            </label>
            <div className="school-course-notice">
              <i className="fa-solid fa-star"></i>
              <span>
                <strong>とりの丘の生徒・先生と実習したい方はこちら！</strong>
                <br />
                「教育機関（とりの丘）実習コース」を選ぶと、名簿登録や校内チャットなどの課題に挑戦できます。
              </span>
            </div>
            <select
              id="mode-select"
              value={mode}
              onChange={(e) => setMode(e.target.value as Mode)}
            >
              <option value="business">🏢 一般企業 実務コース</option>
              <option value="school">🏫 教育機関（とりの丘）実習コース</option>
            </select>
          </div>

          {/* 学校コースを選んだ時だけ出る詳細設定 */}
          {mode === 'school' && (
            <>
              <div className="setting-group" id="sub-mode-group">
                <label>
                  <i className="fa-solid fa-list-check"></i> 業務内容
                </label>
                <select
                  id="sub-mode-select"
                  value={subMode}
                  onChange={(e) => handleSubModeChange(e.target.value as SubMode)}
                >
                  <option value="roster">📋 生徒名簿データ登録</option>
                  <option value="instruction">📣 先生の指示・業務連絡</option>
                  <option value="line">💬 生徒連絡（チャット）対応</option>
                  <option value="request">🙏 生徒からの依頼（DM）</option>
                  <option value="chat">🗣️ グループチャット参加</option>
                  <option value="mix">⭐ 総合実務（ランダム）</option>
                </select>
              </div>

              {!isInstruction && (
                <div className="setting-group" id="class-select-group">
                  <label>
                    <i className="fa-solid fa-users"></i> 対象クラス（任意）
                  </label>
                  <select
                    id="class-select"
                    value={classGroup}
                    onChange={(e) => setClassGroup(e.target.value as ClassGroup)}
                  >
                    <option value="all">指定なし（全校生徒）</option>
                    <option value="1-1">1年1組</option>
                    <option value="1-2">1年2組</option>
                    <option value="1-4">1年4組</option>
                    <option value="2-1">2年1組</option>
                    <option value="2-2">2年2組</option>
                    <option value="3-1">3年1組</option>
                    <option value="3-2">3年2組</option>
                    {!isStudentChat && <option value="teacher">教職員</option>}
                  </select>
                </div>
              )}
            </>
          )}

          {/* 課題数 */}
          <div className="setting-group">
            <label>
              <i className="fa-solid fa-stopwatch"></i> 課題数
            </label>
            <select
              id="count-select"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value, 10) as QuestionCount)}
            >
              <option value="5">5問（クイック）</option>
              <option value="10">10問（スタンダード）</option>
              <option value="20">20問（ハード）</option>
            </select>
          </div>
        </div>

        <button className="start-btn" onClick={onStart}>
          研修を開始する <i className="fa-solid fa-play"></i>
        </button>
      </div>
    </div>
  );
};
