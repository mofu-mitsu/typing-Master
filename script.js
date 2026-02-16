/* ==========================================
   変数の準備
   ========================================== */
let currentMode = 'business';
let currentSubMode = 'roster';
let currentClass = 'all';
let maxQuestions = 5;

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
const soundCorrect = new Audio('sounds/correct.mp3');
const soundMiss = new Audio('sounds/miss.mp3');
const soundClear = new Audio('sounds/clear.mp3');

soundCorrect.volume = 0.5;
soundMiss.volume = 0.3;
soundClear.volume = 0.6;

let saveData = JSON.parse(localStorage.getItem('tori_save')) || {};
let scoreData = JSON.parse(localStorage.getItem('tori_score')) || {};

// HTML要素取得
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const resultScreen = document.getElementById('result-screen');
const inputField = document.getElementById('type-input');
const displayTextField = document.getElementById('display-text');
const readingTextField = document.getElementById('reading-text');
const romajiDisplay = document.getElementById('romaji-display');
const commentField = document.getElementById('char-comment');
const charImgBox = document.getElementById('char-image-box');
const senderInfo = document.getElementById('sender-info');
const senderName = document.getElementById('sender-name');
const keys = document.querySelectorAll('.key');
const soundIcon = document.getElementById('sound-icon');

/* ==========================================
   音の制御
   ========================================== */
function toggleSound() {
    isMuted = !isMuted;
    if (isMuted) {
        soundIcon.className = "fa-solid fa-volume-xmark";
    } else {
        soundIcon.className = "fa-solid fa-volume-high";
    }
}

function playSound(type) {
    if (isMuted) return;
    if (type === 'correct') {
        soundCorrect.currentTime = 0;
        soundCorrect.play();
    } else if (type === 'miss') {
        soundMiss.currentTime = 0;
        soundMiss.play();
    } else if (type === 'clear') {
        soundClear.currentTime = 0;
        soundClear.play();
    }
}

/* ==========================================
   設定画面の制御
   ========================================== */
function updateSubMode() {
    const mode = document.getElementById('mode-select').value;
    const subGroup = document.getElementById('sub-mode-group');
    const classGroup = document.getElementById('class-select-group');

    if (mode === 'school') {
        subGroup.classList.remove('hidden');
        classGroup.classList.remove('hidden');
        updateClassOptions();
    } else {
        subGroup.classList.add('hidden');
        classGroup.classList.add('hidden');
    }
}

function updateClassOptions() {
    const subMode = document.getElementById('sub-mode-select').value;
    const classGroup = document.getElementById('class-select-group');
    const classSelect = document.getElementById('class-select');
    const teacherOption = classSelect.querySelector('option[value="teacher"]');

    classGroup.classList.remove('hidden');
    teacherOption.disabled = false;
    teacherOption.hidden = false;

    if (subMode === 'instruction') {
        classSelect.value = 'teacher';
        classGroup.classList.add('hidden');
    } 
    else if (['line', 'request', 'chat'].includes(subMode)) {
        if (classSelect.value === 'teacher') {
            classSelect.value = 'all';
        }
        teacherOption.disabled = true;
        teacherOption.hidden = true;
    } 
}

/* ==========================================
   ゲーム初期化
   ========================================== */
function initGame() {
    currentMode = document.getElementById('mode-select').value;
    currentSubMode = document.getElementById('sub-mode-select').value;
    currentClass = document.getElementById('class-select').value;
    maxQuestions = parseInt(document.getElementById('count-select').value);
    
    saveData = JSON.parse(localStorage.getItem('tori_save')) || {};
    scoreData = JSON.parse(localStorage.getItem('tori_score')) || {};

    startScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    
    applyModeStyles();
    prepareQuestions();
    
    isPlaying = false;
    isWaitingNext = false;
    inputField.disabled = false;
    inputField.value = "";
    inputField.placeholder = "Spaceキーで研修開始";
    inputField.focus();

    document.addEventListener('click', keepFocus);
}

function keepFocus() {
    if (resultScreen.classList.contains('hidden')) {
        inputField.focus();
    }
}

function applyModeStyles() {
    const body = document.body;
    const title = document.getElementById('app-title');
    const subInfo = document.getElementById('sub-info');
    
    gameContainer.className = "";
    document.getElementById('question-area').className = "";
    body.style.background = ""; 

    if (currentMode === 'school') {
        gameContainer.classList.add('school-mode');
        body.style.background = "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"; 
        title.innerText = "🏫 教育機関実務研修（とりの丘学園）";
        
        let className = currentClass === 'all' ? '全校' : currentClass;
        if (currentClass === 'teacher') className = '教職員';
        
        subInfo.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> 実習対象: ${className}`;
        
        if (currentSubMode === 'line') {
            document.getElementById('question-area').classList.add('line-style');
        }
    } else {
        gameContainer.classList.add('business-mode');
        title.innerText = "実務データ入力演習";
        subInfo.innerHTML = '<i class="fa-solid fa-id-card"></i> 教務課・データ管理担当';
    }
}

function prepareQuestions() {
    let source = [];
    if (currentMode === 'business') {
        source = businessData;
    } else {
        source = schoolData.filter(q => {
            let typeMatch = (currentSubMode === 'mix' || q.subtype === currentSubMode);
            let classMatch = (currentClass === 'all' || q.group === currentClass);
            return typeMatch && classMatch;
        });
    }

    if (source.length === 0) {
        alert("該当するデータがありません！全データから出題します。");
        source = schoolData;
    }

    currentQuestions = source.sort(() => 0.5 - Math.random()).slice(0, maxQuestions);
}

/* ==========================================
   ★キー入力制御（Backspace無効化追加！）
   ========================================== */
window.addEventListener('keydown', (e) => {
    // 画面が表示されていない時は何もしない
    if (!startScreen.classList.contains('hidden')) return;
    if (!resultScreen.classList.contains('hidden')) return;

    // ★重要：Backspaceキーを無効化！
    // ユーザーが消す必要はないので、誤操作防止のために無効にする
    if (e.key === 'Backspace') {
        e.preventDefault();
        return; // 何もさせない
    }

    // スペースキー処理
    if (!isPlaying) {
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            startGame();
        }
    } else {
        // ゲーム中、スペースキーでのスクロール等を防ぐ
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
        }
    }
});

inputField.addEventListener('input', (e) => {
    if (!isPlaying || isWaitingNext) {
        inputField.value = "";
        return;
    }

    const val = inputField.value;
    const lastChar = val.slice(-1);
    const expectedChar = targetRomaji[typedCount];

    if (val.length > typedCount) {
        // フレックス入力チェック
        let isMatch = (lastChar === expectedChar);
        if (!isMatch) isMatch = checkFlexibleInput(lastChar);

        if (isMatch) {
            // ✅ 正解
            typedCount++;
            totalTyped++;
            playSound('correct');
            
            skipSpaces();
            updateRomajiDisplay();
            
            if (commentField.style.color === "rgb(231, 76, 60)") { 
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
            // ❌ ミス
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
                commentField.style.color = "#e74c3c"; 
            }
            updateCharExpression("bad");
        }
    }
});

function checkFlexibleInput(inputChar) {
    const remaining = targetRomaji.substring(typedCount);
    const prevChar = typedCount > 0 ? targetRomaji[typedCount - 1] : "";

    const replacements = [
        { from: "shi", to: "si" }, { from: "chi", to: "ti" }, { from: "tsu", to: "tu" }, { from: "tsu", to: "cyu" },  { from: "jyu", to: "10" },   { from: "ju", to: "10" }, 
        { from: "fu",  to: "hu" }, { from: "ji",  to: "zi" },  { from: "ti", to: "chi" },  { from: "ha", to: "wa" },  { from: "wa", to: "ha" }, 
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

function skipSpaces() {
    while (typedCount < targetRomaji.length && targetRomaji[typedCount] === ' ') {
        typedCount++;
        inputField.value += " "; 
    }
}

function startGame() {
    isPlaying = true;
    currentIndex = 0;
    missCount = 0;
    currentMiss = 0;
    totalTyped = 0;
    missedKeysMap = {};
    startTime = Date.now();
    
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const time = ((Date.now() - startTime) / 1000).toFixed(1);
        document.getElementById('time-display').innerText = time;
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
    
    document.getElementById('count-display').innerText = maxQuestions - currentIndex;
    
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
        commentField.style.color = "#ff69b4";
        initialFace = "love"; 
    } else {
        commentField.style.color = "#555";
    }
    commentField.innerText = startMsg ? startMsg : "";

    renderCharImages(q, initialFace);

    if (q.subtype === 'line' || q.subtype === 'chat' || q.subtype === 'request') {
        senderInfo.classList.remove('hidden');
        senderName.innerText = q.sender;
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

/* ==========================================
   ★クリア処理（モード別スピード調整！）
   ========================================== */
function questionClear() {
    isWaitingNext = true;
    const q = currentQuestions[currentIndex];
    
    const endTime = Date.now();
    const duration = (endTime - questionStartTime) / 1000;
    const speed = targetRomaji.length / duration;
    
    let reaction = q.reaction_good || "OK!";
    let color = "#27ae60";

    if (currentMiss === 0) {
        reaction = "Perfect!!✨ " + reaction;
        color = "#f1c40f";
        playSound('correct'); 
    } else if (speed > 5 && q.reaction_fast) {
        reaction = q.reaction_fast;
        color = "#e67e22";
    } else if (speed < 2 && q.reaction_slow) {
        reaction = q.reaction_slow;
        color = "#3498db";
    }

    commentField.innerText = reaction;
    commentField.style.color = color;
    
    updateCharExpression("good");

    if (currentMode === 'school') {
        saveData[q.id] = (saveData[q.id] || 0) + 1;
        localStorage.setItem('tori_save', JSON.stringify(saveData));
    }

    updateRomajiDisplay();
    highlightKey(null);

    // ★重要！モードによって待ち時間を変える！
    // Business: 0.5秒, School: 1.2秒 (セリフ読む用)
    let delay = (currentMode === 'business') ? 500 : 1200;

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
    keys.forEach(k => k.classList.remove('active-key'));
    if (!char) return;
    let searchChar = char.toLowerCase();
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

    const finalTime = parseFloat(document.getElementById('time-display').innerText);
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
        localStorage.setItem('tori_score', JSON.stringify(scoreData));
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
    rankBadge.innerText = rank;
    rankBadge.className = ""; 
    rankBadge.classList.add(rankClass);

    document.getElementById('result-score').innerText = score;
    document.getElementById('result-rank').innerText = rank;
    document.getElementById('result-time').innerText = finalTime;
    document.getElementById('result-miss').innerText = missCount;
    
    document.getElementById('best-score-info').innerHTML = 
        score > prevBest 
        ? `<i class="fa-solid fa-trophy"></i> 自己ベスト更新！ (旧: ${prevBest})` 
        : `<i class="fa-solid fa-crown"></i> 自己ベスト: ${prevBest}`;

    document.getElementById('weak-keys-list').innerHTML = weakKeysHtml;

    const msg = document.getElementById('result-msg');
    if (currentMode === 'school') {
        let comment = "実習お疲れ様でした！";
        if (rank === "S") comment = "みりん「えっ神！？センセ凄すぎ！惚れ直した！」";
        else if (rank === "A") comment = "みりん「おぉ〜やるね！いい感じ！」";
        msg.innerHTML = comment;
    } else {
        msg.innerText = "本日のデータ入力業務は全て完了しました。\nお疲れ様でした。";
    }
}
