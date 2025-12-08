/* ==========================================
   変数の準備
   ========================================== */
let currentMode = 'business';
let currentSubMode = 'roster';
let maxQuestions = 5;

let currentQuestions = [];
let currentIndex = 0;
let targetRomaji = "";
let typedCount = 0;
let startTime = 0;
let timerInterval = null;
let missCount = 0;

// ★状態管理フラグ
let isPlaying = false;     // ゲーム中かどうか
let isWaitingNext = false; // クリア後の待機時間中かどうか

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
const charImg = document.getElementById('char-img');
const senderInfo = document.getElementById('sender-info');
const senderName = document.getElementById('sender-name');
const keys = document.querySelectorAll('.key');

/* ==========================================
   設定画面の制御
   ========================================== */
function updateSubMode() {
    const mode = document.getElementById('mode-select').value;
    const subGroup = document.getElementById('sub-mode-group');
    if (mode === 'school') {
        subGroup.classList.remove('hidden');
    } else {
        subGroup.classList.add('hidden');
    }
}

/* ==========================================
   ゲーム初期化（スタート画面から遷移）
   ========================================== */
function initGame() {
    currentMode = document.getElementById('mode-select').value;
    currentSubMode = document.getElementById('sub-mode-select').value;
    maxQuestions = parseInt(document.getElementById('count-select').value);

    // 画面切り替え
    startScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    
    applyModeStyles();
    prepareQuestions();
    
    // 変数リセット
    isPlaying = false; // まだ始まってない
    isWaitingNext = false;
    inputField.disabled = false;
    inputField.value = "";
    inputField.placeholder = "Spaceキーで研修開始";
    
    // フォーカスを当てる
    inputField.focus();

    // 画面クリックでフォーカスを維持する
    document.addEventListener('click', keepFocus);
}

function keepFocus() {
    // 結果画面が表示されていない時だけフォーカスする
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
        subInfo.innerHTML = '<i class="fa-solid fa-graduation-cap"></i> 教育実習生アカウント';
        
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
        if (currentSubMode === 'mix') {
            source = schoolData;
        } else {
            source = schoolData.filter(q => q.subtype === currentSubMode);
        }
    }
    // ランダム選出
    currentQuestions = source.sort(() => 0.5 - Math.random()).slice(0, maxQuestions);
}

/* ==========================================
   ★キー入力制御（ここを最強にした！）
   ========================================== */

// 1. 画面全体でSpaceキーを監視（ゲーム開始用）
window.addEventListener('keydown', (e) => {
    // スタート画面やリザルト画面なら無視
    if (!startScreen.classList.contains('hidden')) return;
    if (!resultScreen.classList.contains('hidden')) return;

    // ゲームがまだ始まっていない場合
    if (!isPlaying) {
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault(); // スクロール防止
            console.log("Start command received!"); // デバッグ用
            startGame();
        }
    }
});

// 2. 入力欄の制御（タイピング判定用）
inputField.addEventListener('input', (e) => {
    // ゲーム中じゃない、または待機中は入力をすべて消す
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
            updateRomajiDisplay();
            
            // Badコメント消去
            if (commentField.style.color === "rgb(231, 76, 60)") { 
                commentField.innerText = "";
            }

            if (typedCount >= targetRomaji.length) {
                questionClear();
            } else {
                highlightKey(targetRomaji[typedCount]);
            }
        } else {
            // ❌ ミス
            missCount++;
            inputField.value = val.slice(0, -1);
            flashKeyboardError();
            
            const q = currentQuestions[currentIndex];
            if (q.reaction_bad) {
                commentField.innerText = q.reaction_bad;
                commentField.style.color = "#e74c3c"; // 赤字
            }
        }
    }
});

function startGame() {
    console.log("Game Started!");
    isPlaying = true;
    currentIndex = 0;
    missCount = 0;
    startTime = Date.now();
    
    // タイマー開始
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const time = ((Date.now() - startTime) / 1000).toFixed(1);
        document.getElementById('time-display').innerText = time;
    }, 100);

    inputField.placeholder = "";
    inputField.focus(); // 念のため再フォーカス
    nextQuestion();
}

/* ==========================================
   問題進行
   ========================================== */
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
    inputField.value = "";
    
    // 表示更新
    commentField.innerText = q.start_msg ? q.start_msg : "";
    commentField.style.color = "#555";

    if (currentMode === 'school' && q.image) {
        charImgBox.classList.remove('hidden');
        charImg.src = "images/" + q.image;
        charImg.onerror = () => { charImg.src = ""; charImgBox.classList.add('hidden'); };
    } else {
        charImgBox.classList.add('hidden');
    }

    if (q.subtype === 'line') {
        senderInfo.classList.remove('hidden');
        senderName.innerText = q.sender;
    } else {
        senderInfo.classList.add('hidden');
    }

    displayTextField.innerText = q.text;
    readingTextField.innerText = q.kana;

    updateRomajiDisplay();
    highlightKey(targetRomaji[0]);
}

function questionClear() {
    isWaitingNext = true; // 待機
    const q = currentQuestions[currentIndex];
    
    if (q.reaction_good) {
        commentField.innerText = q.reaction_good;
        commentField.style.color = "#27ae60"; // 緑
    } else {
        commentField.innerText = "OK!";
    }

    updateRomajiDisplay();
    highlightKey(null);

    setTimeout(() => {
        currentIndex++;
        nextQuestion();
    }, 2000); 
}

/* ==========================================
   表示更新系
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
    
    // イベントリスナー解除（リトライ時のため）
    document.removeEventListener('click', keepFocus);

    gameContainer.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    document.getElementById('result-time').innerText = finalTime;
    document.getElementById('result-miss').innerText = missCount;

    const msg = document.getElementById('result-msg');
    if (currentMode === 'school') {
        msg.innerHTML = "実習お疲れ様でした！<br>みりん「せんせーさすが！ジュース奢ってあげる！」";
    } else {
        msg.innerText = "本日のデータ入力業務は全て完了しました。\nお疲れ様でした。";
    }
}