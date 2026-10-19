/* ==========================================
   Typing Master - メインスクリプト
   ========================================== */

// 設定と状態の変数
let currentMode = 'business';
let currentSubMode = 'roster';
let currentClass = 'all';
let maxQuestions = 10;

let currentQuestions = [];
let currentIndex = 0;
let targetRomaji = "";
let typedCount = 0;
let startTime = 0;
let questionStartTime = 0;
let timerInterval = null;
let missCount = 0;
let currentMiss = 0;
let totalTyped = 0;
let missedKeysMap = {};

let isPlaying = false;
let isWaitingNext = false;
let isMuted = false;

// 効果音
const soundCorrect = new Audio('sounds/correct.mp3');
const soundMiss = new Audio('sounds/miss.mp3');
const soundClear = new Audio('sounds/clear.mp3');

soundCorrect.volume = 0.5;
soundMiss.volume = 0.3;
soundClear.volume = 0.6;

// LocalStorage キー定数
const SETTINGS_KEY = 'typing_master_last_settings';
const SAVE_DATA_KEY = 'tori_save';
const SCORE_DATA_KEY = 'tori_score';

// 安全なJSON読み出し
function safeLoadJSON(key, defaultVal) {
    try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultVal;
    } catch (e) {
        return defaultVal;
    }
}

let saveData = safeLoadJSON(SAVE_DATA_KEY, {});
let scoreData = safeLoadJSON(SCORE_DATA_KEY, {});

// HTML要素キャッシュ
let startScreen, gameContainer, resultScreen;
let inputField, displayTextField, readingTextField, romajiDisplay;
let commentField, charImgBox, senderInfo, senderName;
let keys, soundIcon, schoolDetailsPanel;

/* ==========================================
   音の制御
   ========================================== */
function toggleSound() {
    isMuted = !isMuted;
    if (soundIcon) {
        soundIcon.className = isMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
    }
}

function playSound(type) {
    if (isMuted) return;
    try {
        let sound = null;
        if (type === 'correct') sound = soundCorrect;
        else if (type === 'miss') sound = soundMiss;
        else if (type === 'clear') sound = soundClear;

        if (sound) {
            sound.currentTime = 0;
            const playPromise = sound.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // 自動再生ポリシーなどのエラーは無視
                });
            }
        }
    } catch (e) {
        // 音声再生エラーはゲーム進行を止めない
    }
}

/* ==========================================
   設定の保存 & 復元（前回の設定を自動優先）
   ========================================== */
function saveCurrentSettings() {
    try {
        const settings = {
            mode: currentMode,
            subMode: currentSubMode,
            targetClass: currentClass,
            count: maxQuestions
        };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        // localStorage容量制限等のエラー無視
    }
}

function restoreSavedSettings() {
    const saved = safeLoadJSON(SETTINGS_KEY, null);
    if (!saved) return;

    if (saved.mode === 'business' || saved.mode === 'school') {
        currentMode = saved.mode;
    }
    if (saved.subMode) {
        currentSubMode = saved.subMode;
    }
    if (saved.targetClass) {
        currentClass = saved.targetClass;
    }
    if (saved.count && [5, 10, 20].includes(parseInt(saved.count))) {
        maxQuestions = parseInt(saved.count);
    }

    applySettingsToUI();
}

function applySettingsToUI() {
    // 1. コース選択カードの反映
    const cardBiz = document.getElementById('card-business');
    const cardSch = document.getElementById('card-school');
    const modeSelect = document.getElementById('mode-select');

    if (cardBiz && cardSch) {
        cardBiz.classList.toggle('active', currentMode === 'business');
        cardSch.classList.toggle('active', currentMode === 'school');
    }
    if (modeSelect) {
        modeSelect.value = currentMode;
    }

    // 2. 学校コース詳細パネルの表示/非表示
    if (schoolDetailsPanel) {
        if (currentMode === 'school') {
            schoolDetailsPanel.classList.remove('hidden');
        } else {
            schoolDetailsPanel.classList.add('hidden');
        }
    }

    // 3. 業務内容の反映
    const subSelect = document.getElementById('sub-mode-select');
    if (subSelect && currentSubMode) {
        subSelect.value = currentSubMode;
    }

    // 4. クラス選択の反映
    updateClassOptions(false); // UI更新のみ（再保存スキップ）
    const classSelect = document.getElementById('class-select');
    if (classSelect && currentClass) {
        classSelect.value = currentClass;
    }

    // 5. 課題数の反映
    const countSelect = document.getElementById('count-select');
    if (countSelect) {
        countSelect.value = String(maxQuestions);
    }
    const countPills = document.querySelectorAll('.count-pill');
    countPills.forEach(pill => {
        const count = parseInt(pill.getAttribute('data-count'));
        pill.classList.toggle('active', count === maxQuestions);
    });
}

/* ==========================================
   UI操作イベントハンドラ
   ========================================== */
function selectCourse(mode) {
    currentMode = mode;
    const modeSelect = document.getElementById('mode-select');
    if (modeSelect) modeSelect.value = mode;

    applySettingsToUI();
    saveCurrentSettings();
}

function selectQuestionCount(num) {
    maxQuestions = parseInt(num);
    const countSelect = document.getElementById('count-select');
    if (countSelect) countSelect.value = String(num);

    const countPills = document.querySelectorAll('.count-pill');
    countPills.forEach(pill => {
        const count = parseInt(pill.getAttribute('data-count'));
        pill.classList.toggle('active', count === maxQuestions);
    });

    saveCurrentSettings();
}

function updateSubMode() {
    const modeSelect = document.getElementById('mode-select');
    if (modeSelect) {
        currentMode = modeSelect.value;
    }
    applySettingsToUI();
    saveCurrentSettings();
}

function updateClassOptions(shouldSave = true) {
    const subModeSelect = document.getElementById('sub-mode-select');
    const classGroup = document.getElementById('class-select-group');
    const classSelect = document.getElementById('class-select');
    if (!subModeSelect || !classGroup || !classSelect) return;

    currentSubMode = subModeSelect.value;
    const teacherOption = classSelect.querySelector('option[value="teacher"]');

    classGroup.classList.remove('hidden');
    if (teacherOption) {
        teacherOption.disabled = false;
        teacherOption.hidden = false;
    }

    if (currentSubMode === 'instruction') {
        classSelect.value = 'teacher';
        currentClass = 'teacher';
        classGroup.classList.add('hidden');
    } else if (['line', 'request', 'chat'].includes(currentSubMode)) {
        if (classSelect.value === 'teacher') {
            classSelect.value = 'all';
            currentClass = 'all';
        }
        if (teacherOption) {
            teacherOption.disabled = true;
            teacherOption.hidden = true;
        }
    }

    if (shouldSave) {
        saveCurrentSettings();
    }
}

function onClassChange() {
    const classSelect = document.getElementById('class-select');
    if (classSelect) {
        currentClass = classSelect.value;
        saveCurrentSettings();
    }
}

/* ==========================================
   ゲーム初期化
   ========================================== */
function initGame() {
    const subSelect = document.getElementById('sub-mode-select');
    const classSelect = document.getElementById('class-select');
    if (subSelect) currentSubMode = subSelect.value;
    if (classSelect) currentClass = classSelect.value;

    saveCurrentSettings();

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');

    applyModeStyles();
    prepareQuestions();

    isPlaying = false;
    isWaitingNext = false;
    inputField.disabled = false;
    inputField.value = "";
    inputField.placeholder = "Spaceキーを押して開始";
    inputField.focus();

    document.addEventListener('click', keepFocus);
}

function backToTitle() {
    isPlaying = false;
    if (timerInterval) clearInterval(timerInterval);

    document.removeEventListener('click', keepFocus);

    gameContainer.classList.add('hidden');
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');

    // タイトルに戻った時、前回の設定をそのまま維持・反映
    restoreSavedSettings();
}

function keepFocus() {
    if (!gameContainer.classList.contains('hidden') && resultScreen.classList.contains('hidden')) {
        if (inputField) inputField.focus();
    }
}

function applyModeStyles() {
    const body = document.body;
    const title = document.getElementById('app-title');
    const subInfo = document.getElementById('sub-info');
    const badgeText = document.getElementById('badge-text');

    gameContainer.className = "";
    const questionArea = document.getElementById('question-area');
    if (questionArea) questionArea.className = "";
    body.style.background = "";

    if (currentMode === 'school') {
        gameContainer.classList.add('school-mode');
        body.style.background = "radial-gradient(circle at 50% 10%, #fff0f3 0%, #fff9fa 80%)";
        if (title) title.innerText = "🏫 教育機関実習コース（とりの丘）";
        if (badgeText) badgeText.innerText = "とりの丘実習";

        let className = currentClass === 'all' ? '全校' : currentClass;
        if (currentClass === 'teacher') className = '教職員';

        if (subInfo) {
            subInfo.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> 実習対象: ${className}`;
        }

        if (currentSubMode === 'line' && questionArea) {
            questionArea.classList.add('line-style');
        }
    } else {
        gameContainer.classList.add('business-mode');
        body.style.background = "radial-gradient(circle at 50% 10%, #eff6ff 0%, #f8fafc 80%)";
        if (title) title.innerText = "実務データ入力演習";
        if (badgeText) badgeText.innerText = "一般実務";
        if (subInfo) {
            subInfo.innerHTML = '<i class="fa-solid fa-id-card"></i> 教務課・データ管理担当';
        }
    }
}

function prepareQuestions() {
    let source = [];
    if (currentMode === 'business') {
        source = (typeof businessData !== 'undefined') ? businessData : [];
    } else {
        const pool = (typeof schoolData !== 'undefined') ? schoolData : [];
        source = pool.filter(q => {
            let typeMatch = (currentSubMode === 'mix' || q.subtype === currentSubMode);
            let classMatch = (currentClass === 'all' || q.group === currentClass);
            return typeMatch && classMatch;
        });
        if (source.length === 0) {
            source = pool;
        }
    }

    if (!source || source.length === 0) {
        currentQuestions = [
            { text: "お世話になっております", kana: "おせわになっております", romaji: "osewaninatteorimasu" }
        ];
        return;
    }

    currentQuestions = [...source].sort(() => 0.5 - Math.random()).slice(0, maxQuestions);
}

/* ==========================================
   キー入力制御（Backspace無効化 & Space開始）
   ========================================== */
window.addEventListener('keydown', (e) => {
    // タイトル画面で Enter キーで開始
    if (!startScreen.classList.contains('hidden')) {
        if (e.key === 'Enter') {
            e.preventDefault();
            initGame();
        }
        return;
    }

    if (!resultScreen.classList.contains('hidden')) return;

    // ゲーム中のBackspaceキーを無効化（誤操作・履歴戻り防止）
    if (e.key === 'Backspace') {
        e.preventDefault();
        return;
    }

    // スペースキー処理
    if (!isPlaying) {
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            startGame();
        }
    } else {
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
        }
    }
});

/* ==========================================
   ゲーム進行ロジック
   ========================================== */
function startGame() {
    isPlaying = true;
    currentIndex = 0;
    missCount = 0;
    currentMiss = 0;
    totalTyped = 0;
    missedKeysMap = {};
    startTime = Date.now();

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const time = ((Date.now() - startTime) / 1000).toFixed(1);
        const timeDisp = document.getElementById('time-display');
        if (timeDisp) timeDisp.innerText = time;
    }, 100);

    inputField.placeholder = "";
    inputField.focus();
    nextQuestion();
}

function nextQuestion() {
    if (currentIndex >= currentQuestions.length) {
        finishGame();
        return;
    }

    isWaitingNext = false;
    inputField.disabled = false;
    inputField.focus();

    const q = currentQuestions[currentIndex];
    const countDisplay = document.getElementById('count-display');
    if (countDisplay) {
        countDisplay.innerText = String(maxQuestions - currentIndex);
    }

    targetRomaji = q.romaji;
    typedCount = 0;
    currentMiss = 0;
    inputField.value = "";

    skipSpaces();
    questionStartTime = Date.now();

    let charLove = saveData[q.id] || 0;
    let startMsg = q.start_msg;
    let initialFace = "normal";

    if (currentMode === 'school' && charLove >= 5 && q.love_msg) {
        startMsg = q.love_msg;
        commentField.style.color = "#f43f5e";
        initialFace = "love";
    } else {
        commentField.style.color = "#475569";
    }
    commentField.innerText = startMsg ? startMsg : "";

    renderCharImages(q, initialFace);

    if (q.subtype === 'line' || q.subtype === 'chat' || q.subtype === 'request') {
        senderInfo.classList.remove('hidden');
        senderName.innerText = q.sender || "";
    } else {
        senderInfo.classList.add('hidden');
    }

    displayTextField.innerText = q.text;
    readingTextField.innerText = q.kana;

    updateRomajiDisplay();
    if (typedCount < targetRomaji.length) {
        highlightKey(targetRomaji[typedCount]);
    } else {
        questionClear();
    }
}

function skipSpaces() {
    while (typedCount < targetRomaji.length && targetRomaji[typedCount] === ' ') {
        typedCount++;
        inputField.value += " ";
    }
}

function checkFlexibleInput(inputChar) {
    const remaining = targetRomaji.substring(typedCount);
    const prevChar = typedCount > 0 ? targetRomaji[typedCount - 1] : "";

    const replacements = [
        { from: "shi", to: "si" }, { from: "chi", to: "ti" }, { from: "tsu", to: "tu" }, { from: "tsu", to: "cyu" }, { from: "jyu", to: "10" }, { from: "ju", to: "10" },
        { from: "fu",  to: "hu" }, { from: "ji",  to: "zi" },  { from: "ti", to: "chi" },  { from: "ha", to: "wa" },  { from: "wa", to: "ha" }, { from: "o", to: "wo" },
        { from: "sha", to: "sya" }, { from: "shu", to: "syu" }, { from: "sho", to: "syo" },
        { from: "cha", to: "tya" }, { from: "chu", to: "tyu" }, { from: "cho", to: "tyo" },
        { from: "ja",  to: "zya" }, { from: "ju",  to: "zyu" }, { from: "jo",  to: "zyo" },
        { from: "hi", to: "i", prev: "s" }, { from: "su", to: "u", prev: "t" },
        { from: "ha", to: "ya", prev: "s" }, { from: "hu", to: "yu", prev: "s" }, { from: "ho", to: "yo", prev: "s" }
    ];

    for (let r of replacements) {
        if (r.prev && r.prev !== prevChar) continue;
        if (remaining.startsWith(r.from)) {
            if (r.to.startsWith(inputChar)) {
                const newTail = r.to + remaining.substring(r.from.length);
                const head = targetRomaji.substring(0, typedCount);
                targetRomaji = head + newTail;
                return true;
            }
        }
    }
    return false;
}

function renderCharImages(q, emotion) {
    charImgBox.innerHTML = "";
    charImgBox.classList.remove('hidden');

    if (currentMode !== 'school') {
        charImgBox.classList.add('hidden');
        return;
    }

    if (q.images && Array.isArray(q.images)) {
        q.images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = "images/" + imgSrc;
            img.className = "char-img-group";
            img.onerror = () => { img.style.display = "none"; };
            charImgBox.appendChild(img);
        });
        return;
    }

    if (q.image) {
        const img = document.createElement("img");
        img.id = "single-char-img";
        img.className = "char-img-single";
        img.dataset.baseSrc = q.image;
        charImgBox.appendChild(img);
        updateCharExpression(emotion);
    } else {
        charImgBox.classList.add('hidden');
    }
}

function updateCharExpression(emotion) {
    const img = document.getElementById("single-char-img");
    if (!img) return;

    const baseSrc = img.dataset.baseSrc;
    if (!baseSrc) return;

    const dotIndex = baseSrc.lastIndexOf(".");
    const name = baseSrc.substring(0, dotIndex);
    const ext = baseSrc.substring(dotIndex);

    let targetSrc = baseSrc;
    if (emotion === "bad") {
        targetSrc = `${name}_bad${ext}`;
    } else if (emotion === "good") {
        targetSrc = `${name}_good${ext}`;
    } else if (emotion === "love") {
        targetSrc = `${name}_love${ext}`;
    }

    img.src = "images/" + targetSrc;
    img.onerror = () => {
        if (img.src.includes(baseSrc)) {
            img.style.display = "none";
        } else {
            img.src = "images/" + baseSrc;
        }
    };
}

function questionClear() {
    isWaitingNext = true;
    const q = currentQuestions[currentIndex];

    const endTime = Date.now();
    const duration = (endTime - questionStartTime) / 1000;
    const speed = duration > 0 ? (targetRomaji.length / duration) : 0;

    let reaction = q.reaction_good || "入力完了！";
    let color = "#16a34a";

    if (currentMiss === 0) {
        reaction = "Perfect!! ✨ " + reaction;
        color = "#eab308";
        playSound('correct');
    } else if (speed > 5 && q.reaction_fast) {
        reaction = q.reaction_fast;
        color = "#ea580c";
    } else if (speed < 2 && q.reaction_slow) {
        reaction = q.reaction_slow;
        color = "#0284c7";
    }

    commentField.innerText = reaction;
    commentField.style.color = color;

    updateCharExpression("good");

    if (currentMode === 'school') {
        saveData[q.id] = (saveData[q.id] || 0) + 1;
        try {
            localStorage.setItem(SAVE_DATA_KEY, JSON.stringify(saveData));
        } catch (e) {}
    }

    updateRomajiDisplay();
    highlightKey(null);

    let delay = (currentMode === 'business') ? 450 : 1100;
    setTimeout(() => {
        currentIndex++;
        nextQuestion();
    }, delay);
}

function updateRomajiDisplay() {
    let html = "";
    for (let i = 0; i < targetRomaji.length; i++) {
        if (i < typedCount) {
            html += `<span class="typed-char">${targetRomaji[i]}</span>`;
        } else if (i === typedCount) {
            html += `<span class="highlight-char">${targetRomaji[i]}</span>`;
        } else {
            html += `<span>${targetRomaji[i]}</span>`;
        }
    }
    romajiDisplay.innerHTML = html;
}

function highlightKey(char) {
    if (!keys) return;
    keys.forEach(k => k.classList.remove('active-key'));
    if (!char) return;
    const searchChar = char.toLowerCase();
    const keyElement = document.querySelector(`.key[data-key="${searchChar}"]`);
    if (keyElement) keyElement.classList.add('active-key');
}

function flashKeyboardError() {
    const active = document.querySelector('.active-key');
    if (active) {
        active.classList.add('error-key');
        setTimeout(() => active.classList.remove('error-key'), 200);
    }
}

function finishGame() {
    isPlaying = false;
    clearInterval(timerInterval);
    playSound('clear');

    const finalTime = parseFloat(document.getElementById('time-display').innerText) || 0.1;
    const wpm = (totalTyped / finalTime) * 60;

    let score = Math.round((wpm * 10) - (missCount * 50));
    if (score < 0) score = 0;

    let rank = "D";
    let rankClass = "rank-d";
    if (score >= 3000) { rank = "S"; rankClass = "rank-s"; }
    else if (score >= 2000) { rank = "A"; rankClass = "rank-a"; }
    else if (score >= 1000) { rank = "B"; rankClass = "rank-b"; }
    else if (score >= 500) { rank = "C"; rankClass = "rank-c"; }

    const saveKey = `best_${currentMode}_${currentSubMode}_${currentClass}_${maxQuestions}`;
    const prevBest = scoreData[saveKey] || 0;

    if (score > prevBest) {
        scoreData[saveKey] = score;
        try {
            localStorage.setItem(SCORE_DATA_KEY, JSON.stringify(scoreData));
        } catch (e) {}
    }

    const sortedWeakKeys = Object.entries(missedKeysMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    let weakKeysHtml = "";
    if (sortedWeakKeys.length > 0) {
        sortedWeakKeys.forEach(item => {
            weakKeysHtml += `<div class="weak-key" title="${item[1]}回ミス">${item[0].toUpperCase()}</div>`;
        });
    } else {
        weakKeysHtml = "なし (Perfect!)";
    }

    document.removeEventListener('click', keepFocus);
    gameContainer.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const rankBadge = document.getElementById('rank-badge');
    if (rankBadge) {
        rankBadge.innerText = rank;
        rankBadge.className = rankClass;
    }

    document.getElementById('result-score').innerText = String(score);
    document.getElementById('result-rank').innerText = rank;
    document.getElementById('result-time').innerText = String(finalTime);
    document.getElementById('result-miss').innerText = String(missCount);

    const bestScoreInfo = document.getElementById('best-score-info');
    if (bestScoreInfo) {
        bestScoreInfo.innerHTML = (score > prevBest && prevBest > 0)
            ? `<i class="fa-solid fa-trophy"></i> 自己ベスト更新！ (前記録: ${prevBest})`
            : `<i class="fa-solid fa-crown"></i> 自己ベスト: ${score > prevBest ? score : prevBest}`;
    }

    const weakKeysList = document.getElementById('weak-keys-list');
    if (weakKeysList) weakKeysList.innerHTML = weakKeysHtml;

    const msg = document.getElementById('result-msg');
    if (msg) {
        if (currentMode === 'school') {
            let comment = "実習お疲れ様でした！";
            if (rank === "S") comment = "みりん「えっ神！？センセ凄すぎ！惚れ直した！」";
            else if (rank === "A") comment = "みりん「おぉ〜やるね！いい感じ！」";
            msg.innerHTML = comment;
        } else {
            msg.innerText = "本日のデータ入力実務は全て完了しました。\nお疲れ様でした！";
        }
    }
}

/* ==========================================
   DOM読み込み後の初期バインド
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 要素参照初期化
    startScreen = document.getElementById('start-screen');
    gameContainer = document.getElementById('game-container');
    resultScreen = document.getElementById('result-screen');
    inputField = document.getElementById('type-input');
    displayTextField = document.getElementById('display-text');
    readingTextField = document.getElementById('reading-text');
    romajiDisplay = document.getElementById('romaji-display');
    commentField = document.getElementById('char-comment');
    charImgBox = document.getElementById('char-image-box');
    senderInfo = document.getElementById('sender-info');
    senderName = document.getElementById('sender-name');
    keys = document.querySelectorAll('.key');
    soundIcon = document.getElementById('sound-icon');
    schoolDetailsPanel = document.getElementById('school-details-panel');

    // タイピング入力欄のリスナー
    if (inputField) {
        inputField.addEventListener('input', (e) => {
            if (!isPlaying || isWaitingNext) {
                inputField.value = "";
                return;
            }

            const val = inputField.value;
            const lastChar = val.slice(-1);
            const expectedChar = targetRomaji[typedCount];

            if (val.length > typedCount) {
                let isMatch = (lastChar === expectedChar);
                if (!isMatch) isMatch = checkFlexibleInput(lastChar);

                if (isMatch) {
                    typedCount++;
                    totalTyped++;
                    playSound('correct');

                    skipSpaces();
                    updateRomajiDisplay();

                    if (commentField.style.color === "rgb(231, 76, 60)" || commentField.style.color === "#ef4444") {
                        commentField.innerText = "";
                        const q = currentQuestions[currentIndex];
                        let charLove = saveData[q.id] || 0;
                        let face = (charLove >= 5) ? "love" : "normal";
                        updateCharExpression(face);
                    }

                    if (typedCount >= targetRomaji.length) {
                        questionClear();
                    } else {
                        highlightKey(targetRomaji[typedCount]);
                    }
                } else {
                    missCount++;
                    currentMiss++;
                    playSound('miss');

                    if (expectedChar) {
                        missedKeysMap[expectedChar] = (missedKeysMap[expectedChar] || 0) + 1;
                    }

                    inputField.value = val.slice(0, -1);
                    flashKeyboardError();

                    const q = currentQuestions[currentIndex];
                    if (q.reaction_bad) {
                        commentField.innerText = q.reaction_bad;
                        commentField.style.color = "#ef4444";
                    }
                    updateCharExpression("bad");
                }
            }
        });
    }

    // 保存されている前回の設定を復元してUIに反映
    restoreSavedSettings();
});
