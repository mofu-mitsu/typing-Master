/* ==========================================
   変数の準備
   ========================================== */
let currentMode = 'business';
let currentSubMode = 'roster';
let currentClass = 'all'; // ★クラス選択用
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

let isPlaying = false;
let isWaitingNext = false;

// セーブデータ読み込み
let saveData = JSON.parse(localStorage.getItem('tori_save')) || {};

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
// const charImg = document.getElementById('char-img'); // ←これは今回使わず、動的に生成するよ！
const senderInfo = document.getElementById('sender-info');
const senderName = document.getElementById('sender-name');
const keys = document.querySelectorAll('.key');

/* ==========================================
   設定画面の制御
   ========================================== */
function updateSubMode() {
    const mode = document.getElementById('mode-select').value;
    const subGroup = document.getElementById('sub-mode-group');
    const classGroup = document.getElementById('class-select-group'); // ★これ！

    if (mode === 'school') {
        subGroup.classList.remove('hidden');
        classGroup.classList.remove('hidden'); // ★学校モードならクラス選択を表示！
    } else {
        subGroup.classList.add('hidden');
        classGroup.classList.add('hidden');
    }
}

/* ==========================================
   ゲーム初期化
   ========================================== */
function initGame() {
    currentMode = document.getElementById('mode-select').value;
    currentSubMode = document.getElementById('sub-mode-select').value;
    currentClass = document.getElementById('class-select').value; // ★クラス取得
    maxQuestions = parseInt(document.getElementById('count-select').value);
    
    saveData = JSON.parse(localStorage.getItem('tori_save')) || {};

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
        // 学園モードのフィルタリング
        source = schoolData.filter(q => {
            let typeMatch = (currentSubMode === 'mix' || q.subtype === currentSubMode);
            // ★クラスが合致するか、指定なしか
            let classMatch = (currentClass === 'all' || q.group === currentClass);
            return typeMatch && classMatch;
        });
    }

    if (source.length === 0) {
        alert("該当するデータがありません！条件を変えてみてください。ひとまず全データから出題します。");
        source = schoolData;
    }

    currentQuestions = source.sort(() => 0.5 - Math.random()).slice(0, maxQuestions);
}

/* ==========================================
   キー入力制御
   ========================================== */
window.addEventListener('keydown', (e) => {
    if (!startScreen.classList.contains('hidden')) return;
    if (!resultScreen.classList.contains('hidden')) return;

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

inputField.addEventListener('input', (e) => {
    if (!isPlaying || isWaitingNext) {
        inputField.value = "";
        return;
    }

    const val = inputField.value;
    const lastChar = val.slice(-1);
    const expectedChar = targetRomaji[typedCount];

    if (val.length > typedCount) {
        if (lastChar === expectedChar) {
            // ✅ 正解
            typedCount++;
            skipSpaces();
            updateRomajiDisplay();
            
            // Badコメント消去 & 顔を元に戻す
            if (commentField.style.color === "rgb(231, 76, 60)") { 
                commentField.innerText = "";
                // 好感度が高い場合はデレ顔に戻す、そうでなければ通常
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
            inputField.value = val.slice(0, -1);
            flashKeyboardError();
            
            const q = currentQuestions[currentIndex];
            if (q.reaction_bad) {
                commentField.innerText = q.reaction_bad;
                commentField.style.color = "#e74c3c"; 
            }
            // ★Bad顔に変更
            updateCharExpression("bad");
        }
    }
});

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

/* ==========================================
   問題進行 & ★画像管理システム
   ========================================= */
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
    
    // 好感度チェック
    let charLove = saveData[q.id] || 0;
    let startMsg = q.start_msg;
    let initialFace = "normal"; // 最初の顔

    if (currentMode === 'school' && charLove >= 5 && q.love_msg) {
        startMsg = q.love_msg;
        commentField.style.color = "#ff69b4";
        initialFace = "love"; // ★好感度MAXなら最初からデレ顔
    } else {
        commentField.style.color = "#555";
    }
    commentField.innerText = startMsg ? startMsg : "";

    // ★画像表示処理（ここを大改造！）
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

// ★画像を生成して表示する関数
function renderCharImages(q, emotion) {
    charImgBox.innerHTML = ""; // 一旦クリア
    charImgBox.classList.remove('hidden');

    if (currentMode !== 'school') {
        charImgBox.classList.add('hidden');
        return;
    }

    // A. グループチャット（複数画像）の場合
    if (q.images && Array.isArray(q.images)) {
        q.images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = "images/" + imgSrc;
            img.className = "char-img-group"; // CSSで丸アイコンにする
            img.onerror = () => { img.style.display = "none"; }; // エラーなら消す
            charImgBox.appendChild(img);
        });
        return;
    }

    // B. 単体キャラの場合（表情差分あり）
    if (q.image) {
        const img = document.createElement("img");
        img.id = "single-char-img"; // 操作用ID
        img.className = "char-img-single";
        img.dataset.baseSrc = q.image; // 元のファイル名を保存
        charImgBox.appendChild(img);
        
        // 表情セット
        updateCharExpression(emotion);
    } else {
        charImgBox.classList.add('hidden');
    }
}

// ★表情を変える関数（ファイル名を自動推測！）
function updateCharExpression(emotion) {
    const img = document.getElementById("single-char-img");
    if (!img) return; // グルチャ等の場合は何もしない

    const baseSrc = img.dataset.baseSrc; // "mirin.png"
    if (!baseSrc) return;

    // 拡張子とファイル名を分離
    const dotIndex = baseSrc.lastIndexOf(".");
    const name = baseSrc.substring(0, dotIndex); // "mirin"
    const ext = baseSrc.substring(dotIndex);     // ".png"

    let targetSrc = baseSrc; // デフォルトは通常

    if (emotion === "bad") {
        targetSrc = `${name}_bad${ext}`; // "mirin_bad.png"
    } else if (emotion === "good") {
        targetSrc = `${name}_good${ext}`; // "mirin_good.png"
    } else if (emotion === "love") {
        targetSrc = `${name}_love${ext}`; // "mirin_love.png"
    }

    // 画像セット
    img.src = "images/" + targetSrc;

    // ★もし画像がなかったら通常画像に戻す（ここが便利ポイント！）
    img.onerror = () => {
        if (img.src.includes(baseSrc)) {
            // 通常画像すら無い場合は非表示
            img.style.display = "none"; 
        } else {
            // 差分がない時は通常画像を表示
            img.src = "images/" + baseSrc;
        }
    };
}

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
    } else if (speed > 5 && q.reaction_fast) {
        reaction = q.reaction_fast;
        color = "#e67e22";
    } else if (speed < 2 && q.reaction_slow) {
        reaction = q.reaction_slow;
        color = "#3498db";
    }

    commentField.innerText = reaction;
    commentField.style.color = color;
    
    // ★クリア時、Good顔に変更！
    updateCharExpression("good");

    if (currentMode === 'school') {
        saveData[q.id] = (saveData[q.id] || 0) + 1;
        localStorage.setItem('tori_save', JSON.stringify(saveData));
    }

    updateRomajiDisplay();
    highlightKey(null);

    setTimeout(() => {
        currentIndex++;
        nextQuestion();
    }, 2000); 
}

/* ==========================================
   表示更新系（変更なし）
   ========================================== */
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

/* ==========================================
   終了画面
   ========================================== */
function finishGame() {
    isPlaying = false;
    clearInterval(timerInterval);
    const finalTime = document.getElementById('time-display').innerText;
    
    document.removeEventListener('click', keepFocus);

    gameContainer.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    document.getElementById('result-time').innerText = finalTime;
    document.getElementById('result-miss').innerText = missCount;

    const msg = document.getElementById('result-msg');
    if (currentMode === 'school') {
        msg.innerHTML = "実習お疲れ様でした！<br>キャラとの絆が少し深まった気がします…💕";
    } else {
        msg.innerText = "本日のデータ入力業務は全て完了しました。\nお疲れ様でした。";
    }
}