// data.js

/* =========================================
   🏢 実務訓練モード（表）データ
   ========================================= */
const businessData = [
    { id: "b1", text: "お世話になっております", kana: "おせわになっております", romaji: "osewaninatteorimasu", subtype: "basic" },
    { id: "b2", text: "報告・連絡・相談", kana: "ほうこく・れんらく・そうだん", romaji: "houkoku/renraku/soudan", subtype: "basic" },
    { id: "b3", text: "議事録の作成", kana: "ぎじろくのさくせい", romaji: "gijirokunosakusei", subtype: "basic" },
    { id: "b4", text: "株式会社とりの丘", kana: "かぶしきがいしゃとりのおか", romaji: "kabusikigaisyatorinooka", subtype: "basic" },
    { id: "b5", text: "承知いたしました", kana: "しょうちいたしました", romaji: "syoutiitasimasita", subtype: "basic" }
];

/* =========================================
   🏫 とりの丘学園モード（裏）データ
   ========================================= */
const schoolData = [
    // -------------------------------------
    // 📋 名簿コース（名前入力）
    // -------------------------------------
    { 
        id: "2-1_miriya", 
        subtype: "roster", // 名簿コース
        text: "相原 美里耶", 
        kana: "あいはらみりや", 
        romaji: "aiharamiriya", 
        start_msg: "美里耶「…業務遂行します。」", // 開始時のセリフ
        reaction_good: "美里耶「迅速な対応、感謝します。」", // クリア時
        reaction_bad: "美里耶「…ミスですか？珍しい。」", // ミス時
        reaction_fast: "みりや「速い…効率的。評価します。」",
        reaction_slow: "みりや「問題ありません。正確性を優先してください。」",
        love_msg: "みりや「また私ですか。…業務効率を考えても、悪くありません。」",
        image: "miriya.png"    
    },
    { 
        id: "2-1_hitori", 
        subtype: "roster",
        text: "阿見 一人", 
        kana: "あみひとり", 
        romaji: "amihitori", 
        
        start_msg: "ひとり「俺の真名（なまえ）を刻むがいい…！」",
        reaction_good: "ひとり「ククク…悪くない手際だ。」", 
        reaction_bad: "ひとり「おいおい、右手が震えてるぞ？」",
        
        // スピード反応
        reaction_fast: "ひとり「残像が見えるだと…！？貴様、何者だ…！」",
        reaction_slow: "ひとり「ふっ、闇の力に飲まれたか…遅いぞ。」",

        // 好感度MAX
        love_msg: "ひとり「また俺様を選んだのか…？フッ、俺の契約者はお前だけだ…。」",

        image: "hitori.png"
    },
    {
        id: "2-1_ketsui",
        subtype: "roster",
        text: "海老ケ迫 決意",
        kana: "えびがさこけつい",
        romaji: "ebigasakoketsui",

        start_msg: "けつい「よし、今日も名簿いこか。船長として見とるけぇな。」",
        reaction_good: "けつい「ほぉ〜、ええ速さじゃ。よう頑張ったの。」",
        reaction_bad: "けつい「指ひっかかった？ほいじゃ深呼吸していこ。」",

        reaction_fast: "けつい「速いのう！波乗りみたいにスイッといったな！」",
        reaction_slow: "けつい「ゆっくりでええよ。急ぎすぎたら沈むけぇ。」",

        love_msg: "けつい「またワシの名前打っとるんか？……ふふ、大事にされとる気ぃするわ。」",
        image: "ketsui.png",
    },
    {
        id: "2-1_ameri",
        subtype: "roster",
        text: "岡崎 愛芽里",
        kana: "おかざきあめり",
        romaji: "okazakiameri",

        start_msg: "あめり「…あ、あの……よろしくお願いします、せんせ…。」",
        reaction_good: "あめり「す、すごい…。せんせ、指の動ききれい…。」",
        reaction_bad: "あめり「わ、わっ…！み、ミス…？だ、大丈夫、やよ…？」",

        reaction_fast: "あめり「ひゃっ…！そんな速く動くん…？びっくりした…。」",
        reaction_slow: "あめり「えと…ゆっくりでも、あめりは嬉しいし…だいじょぶ、やよ。」",

        love_msg: "あめり「また…あめりの名前選んでくれたが…？ふふ、なんか胸あつなる…。」",
        image: "ameri.png",
    },
    {
        id: "2-1_shogo",
        subtype: "roster",
        text: "神崎 奨午",
        kana: "かんざきしょうご",
        romaji: "kanzakishogo",

        start_msg: "しょうご「先生、今日もよろしくお願いします。」",
        reaction_good: "しょうご「お見事です。さすが先生ですね。」",
        reaction_bad: "しょうご「ミスは誰にでもあります。次、整えていきましょう。」",

        reaction_fast: "しょうご「速い…！本気なんですね。素直に尊敬します。」",
        reaction_slow: "しょうご「慌てずに。ゆっくりやれば大丈夫です。」",

        love_msg: "しょうご「先生、僕を選ぶこと多くないですか？…悪い気はしませんが。」",
        image: "shogo.png",
    },
    {
        id: "2-1_yuko",
        subtype: "roster",
        text: "橘定 由子",
        kana: "きつじょうゆこ",
        romaji: "kitsujouyuko",

        start_msg: "ゆこ「名簿…ですね。ええ、先生となら頑張れますわ。」",
        reaction_good: "ゆこ「まあ…素敵ですわ。とても綺麗な指の運びですのね。」",
        reaction_bad: "ゆこ「す、少しミスが…いえ、大丈夫です。ゆっくりで。」",

        reaction_fast: "ゆこ「は、速い…！先生、見惚れてしまいますわ…。」",
        reaction_slow: "ゆこ「ゆっくりで構いませんのよ。早さは美しさではありませんわ。」",

        love_msg: "ゆこ「またわたくしを選んでくださったのね…。光栄ですわ、先生。」",
        image: "yuko.png",
    },
    {
        id: "2-1_akira",
        subtype: "roster",
        text: "霧生 曙",
        kana: "きりうあきら",
        romaji: "kiriuakira",

        start_msg: "あきら「ふん…俺の名を入力するとは、見る目はあるようだな。」",
        reaction_good: "あきら「その精度、悪くない。認めてやる。」",
        reaction_bad: "あきら「ミス？…まぁ凡人なら当然だ。次は上げろ。」",

        reaction_fast: "あきら「…速いな。まさか俺を超える気か？」",
        reaction_slow: "あきら「遅い。だが丁寧なら良しとしてやる。」",

        love_msg: "あきら「また俺か…？ふん。選ばれて当然だろう。」",
        image: "akira.png",
    },
    {
        id: "2-1_tomoki",
        subtype: "roster",
        text: "久堂 朋己",
        kana: "くどうともき",
        romaji: "kudoutomoki",

        start_msg: "ともき「よし、名簿いくぞ先生。期待してる。」",
        reaction_good: "ともき「完璧だな。先生ならやれると思ってた。」",
        reaction_bad: "ともき「おっとミス。まぁ切り替えて次いこう。」",

        reaction_fast: "ともき「速ぇ…！先生、ガチ勢じゃん。」",
        reaction_slow: "ともき「丁寧なのは悪くねぇ。ゆっくりで大丈夫だ。」",

        love_msg: "ともき「またオレ？ふっ、信頼されてんな…悪くねぇな。」",
        image: "tomoki.png",
    },
    {
        id: "2-1_wataru",
        subtype: "roster",
        text: "君国 航",
        kana: "くんこくわたる",
        romaji: "kunkokuwataru",

        start_msg: "わたる「入力、始めてくれ。精度を重視しろ。」",
        reaction_good: "わたる「問題ない。正確だ。」",
        reaction_bad: "わたる「ミスか…次は必ず修正するんだ。」",

        reaction_fast: "わたる「速いな…だが制御できているところは評価する。」",
        reaction_slow: "わたる「慎重なのは良いが、緩みすぎるな。」",

        love_msg: "わたる「また俺を選ぶのか…？責任感が強いのは良い傾向だ。」",
        image: "wataru.png"
    },
    {
        id: "2-1_zakuro",
        subtype: "roster",
        text: "更級 柘榴",
        kana: "さらしなざくろ",
        romaji: "sarashina_zakuro",

        start_msg: "ざくろ「……えっ、お、俺…？あ、その…おねがいします…。」",
        reaction_good: "ざくろ「う、打つの…早いんだね…。すご…。」",
        reaction_bad: "ざくろ「ひっ…ミス…？だ、大丈夫…俺よくやるし…。」",

        reaction_fast: "ざくろ「は、はや…っ！？て、手…見えへん…！」",
        reaction_slow: "ざくろ「ゆっくりで、ええよ…。お、俺もゆっくりやし…。」",

        love_msg: "ざくろ「ま、また俺…？え、え、え…そんな、選んでくれるん…？」",
        image: "zakuro.png"
    },
    {
        id: "2-1_kotori",
        subtype: "roster",
        text: "酒々井 小鳥",
        kana: "しすいことり",
        romaji: "shisui_kotori",

        start_msg: "ことり「よっ、先生。まぁ適当にいこーや。」",
        reaction_good: "ことり「速いやん。先生、やるやん〜。」",
        reaction_bad: "ことり「おっとっと、ミスやね？まぁ気にしなさんな。」",

        reaction_fast: "ことり「うひゃ、めっちゃ速いやん！鳥より速いけんそれ。」",
        reaction_slow: "ことり「ゆる〜くいこ。焦ってもしゃーないしな。」",

        love_msg: "ことり「またオレ選んでくれたん？先生、ちょっと好きになってまうやん。」",
        image: "kotori.png"
    },
    {
        id: "2-1_mikina",
        subtype: "roster",
        text: "鈴木 幹菜",
        kana: "すずきみきな",
        romaji: "suzuki_mikina",

        start_msg: "みきな「名簿ね。…よし、やろっか。」",
        reaction_good: "みきな「うん、きれいに打ててる。さすが。」",
        reaction_bad: "みきな「ミスしちゃった？大丈夫、まだいけるよ。」",

        reaction_fast: "みきな「速…！まきしより速いかも。」",
        reaction_slow: "みきな「ゆっくりでいいよ。丁寧さって大事だしね。」",

        love_msg: "みきな「また私？…ふふ、なんかちょっと嬉しいかも。」",
        image: "mikina.png"
    },
    {
        id: "2-1_iseri",
        subtype: "roster",
        text: "寸土 壱芹",
        kana: "すどういせり",
        romaji: "sudou_iseri",

        start_msg: "いせり「はいせんせー！名簿いくでぇ！」",
        reaction_good: "いせり「やるやん！サイズは小さくても実力はデカいで？」",
        reaction_bad: "いせり「おっとミスや！まあええわ、次いこ次！」",

        reaction_fast: "いせり「はっや！！せんせー、ちっこい俺でも追えへんで！」",
        reaction_slow: "いせり「ゆっくりも悪うないで。大阪人でもたまには落ち着くねん。」",

        love_msg: "いせり「またワイか〜？ほら見てみ、選ばれてニヤけてもうてる。」",
        image: "iseri.png"
    },
    {
        id: "2-1_maria",
        subtype: "roster",
        text: "猫谷 茉莉亜",
        kana: "ねこやまりあ",
        romaji: "nekoya_maria",

        start_msg: "まりあ「あなたの入力…今日も見守っていますね。」",
        reaction_good: "まりあ「すごく丁寧です…えへへ、嬉しいです。」",
        reaction_bad: "まりあ「…だ、大丈夫です。ゆっくりでいいんですよ？」",

        reaction_fast: "まりあ「わっ…すごい速さ…！天使の羽みたいに軽やか…！」",
        reaction_slow: "まりあ「落ち着いて打てる人って、なんだか信頼できます…。」",

        love_msg: "まりあ「また私を…選んでくれたんですね。あなたのやさしさ、ちゃんと届いてます。」",
        image: "maria.png"
    },
    {
        id: "2-1_migiwa",
        subtype: "roster",
        text: "舟濤 汀",
        kana: "ふなとみぎわ",
        romaji: "funato_migiwa",

        start_msg: "みぎわ「名簿の入力ね。任しとき、私も一緒に見とくけぇ。」",
        reaction_good: "みぎわ「おぉ〜やるじゃん！思ったよりできる子じゃなぁ。」",
        reaction_bad: "みぎわ「ちょっ…そこでミス！？落ち着きんさいよ！」",

        reaction_fast: "みぎわ「速っ！？え、指どうなっとん！？…けついにも負けんレベルじゃ。」",
        reaction_slow: "みぎわ「ゆっくり打つんも悪うないよ〜。丁寧さ大事じゃし。」",

        love_msg: "みぎわ「また私！？…ふ、ふんっ。嬉しいとか思っとらんけど…まあ、ありがとね。」",
        image: "migiwa.png"
    },
    {
        id: "2-1_ryogo",
        subtype: "roster",
        text: "水上 亮吾",
        kana: "みずかみりょうご",
        romaji: "mizukami_ryogo",

        start_msg: "りょうご「では…入力、お願いします。僕も確認しますね。」",
        reaction_good: "りょうご「正確ですね。素晴らしい…本当に。」",
        reaction_bad: "りょうご「すみません、少しズレてます…もう一度だけ調整を。」",

        reaction_fast: "りょうご「速い…！回路のように正確なリズムです…すごい。」",
        reaction_slow: "りょうご「ゆっくりで大丈夫ですよ。丁寧さは武器ですから。」",

        love_msg: "りょうご「また僕を…？その、えっと…すごく信頼されてる気がして…嬉しいです。」",
        image: "ryogo.png"
    },
    {
        id: "2-1_jiha",
        subtype: "roster",
        text: "恵 時生",
        kana: "めぐみじは",
        romaji: "megumi_jiha",

        start_msg: "じは「はーい！名簿打つんやろ？やろやろーっ！」",
        reaction_good: "じは「はっや！天才？天才なん？」",
        reaction_bad: "じは「えっミス！？うそっ、やり直そやり直そ！ほらほら！」",

        reaction_fast: "じは「はやっ！？え、なにそれ阿波踊り級のキレやん！」",
        reaction_slow: "じは「ゆっくりやん。でもそれもアリ！うちら気分で動くタイプやしな！」",

        love_msg: "じは「またうち選んだん？えぇ〜？こんなん惚れてまうやんか〜！」",
        image: "jiha.png"
    },
    {
        id: "2-1_rei",
        subtype: "roster",
        text: "用達 怜",
        kana: "ようだてれい",
        romaji: "yodate_rei",

        start_msg: "れい「入力をお願いします。…丁寧に、ね。」",
        reaction_good: "れい「完璧。見事です。」",
        reaction_bad: "れい「ここ、少し違っています。もう一度…できますよね？」",

        reaction_fast: "れい「すごい速度…まるで黒羽が空気を切るみたい。」",
        reaction_slow: "れい「ゆっくりは悪くありません。精度が高いなら、それが最適解です。」",

        love_msg: "れい「また私？…ふふ、選ばれるのって悪くないですね。あなた、優秀です。」",
        image: "rei.png"
    },
const roster = [
    {
        id: "3-1_yae",
        subtype: "roster",
        text: "藍河 八重",
        kana: "あいかわやえ",
        romaji: "aikawa yae",
    
        start_msg: "やえ「……先生、呼んだ？」",
        reaction_good: "やえ「……うん。間違ってない。」",
        reaction_bad: "やえ「……そこ、違うよ。」",
    
        reaction_fast: "やえ「……速いね。ちょっと驚いた。」",
        reaction_slow: "やえ「……待ってたよ。焦らなくていい。」",
    
        love_msg: "やえ「……先生が呼ぶと、なんか心が静かになる…不思議…。」",
    
        image: "yae.png",
    },
    {
        id: "3-2_akari",
        subtype: "roster",
        text: "味野 灯莉",
        kana: "あじのあかり",
        romaji: "ajino akari",
    
        start_msg: "あかり「はーいっ！せんせい、あかり来たよーっ🌟」",
        reaction_good: "あかり「すごっ！ねぇねぇ今の見た！？✨」",
        reaction_bad: "あかり「うへっ！？ま、まちがえてるよ〜〜💦」",
    
        reaction_fast: "あかり「はっやっ！？天才！？好き！！」",
        reaction_slow: "あかり「おっそ〜い！あかり寝ちゃうよ〜😪」",
    
        love_msg: "あかり「ねぇ…私の名前いっぱい打ってくれるの嬉しい…もっと呼んで？」",
    
        image: "akari.png",
    },
    {
        id: "3-3_enishi",
        subtype: "roster",
        text: "鼬川 絵丹師",
        kana: "いたちがわえにし",
        romaji: "itachigawa enishi",
    
        start_msg: "えにし「……呼んだが？」",
        reaction_good: "えにし「ふむ。悪うない動きや。」",
        reaction_bad: "えにし「そこ、ズレとる。見直せ。」",
    
        reaction_fast: "えにし「速っ……。筆の走りみたいやな。」",
        reaction_slow: "えにし「遅い。乾き待ちの絵の具みたいや。」",
    
        love_msg: "えにし「先生、ようオレの名を呼んでくれるな。……嫌いやないで。」",
    
        image: "enishi.png",
    },
    {
        id: "3-4_matoi",
        subtype: "roster",
        text: "芋縄 的倭",
        kana: "いもなわまとい",
        romaji: "imonawa matoi",
    
        start_msg: "まとい「……なんだ。」",
        reaction_good: "まとい「ふん。合ってんだろ。」",
        reaction_bad: "まとい「そこ違ぇよ。」",
    
        reaction_fast: "まとい「速ぇな。ちょっと見直したわ。」",
        reaction_slow: "まとい「遅ぇって。置いてくぞ？」",
    
        love_msg: "まとい「……先生、しつこいくらい俺の名呼ぶよな。悪くねぇけど。」",
    
        image: "matoi.png",
    },
    {
        id: "3-5_suzu",
        subtype: "roster",
        text: "忍足 鈴",
        kana: "おしたりすず",
        romaji: "oshitari suzu",
    
        start_msg: "すず「はい、鈴です。先生、呼んでくれたんですか？」",
        reaction_good: "すず「きっちりうててますね。ええ感じです。」",
        reaction_bad: "すず「そこちょっと違いますよ。おちついてな。」",
    
        reaction_fast: "すず「速っ…！先生、その瞬発力すごいわ。」",
        reaction_slow: "すず「ゆっくりでええんですよ。焦らんでも大丈夫です。」",
    
        love_msg: "すず「そんなに何回も…私の名前呼んでくれるんですか。……ふふ、嬉しいです。」",
    
        image: "suzu.png",
    },
    {
        id: "3-6_arin",
        subtype: "roster",
        text: "小犬丸 愛凛",
        kana: "こいぬまるありん",
        romaji: "koinumaru arin",
    
        start_msg: "ありん「せ、先生…！呼んでくれたんだね…！」",
        reaction_good: "ありん「すごいよ先生…！そんなにはやくうてるんだ…！」",
        reaction_bad: "ありん「ちょ、ちょっと間違ってるかも…！がんばって…！」",
    
        reaction_fast: "ありん「は、はやすぎ…！？先生ってほんとにすごい…！」",
        reaction_slow: "ありん「ゆ、ゆっくりでいいよ…！私、まってるから…！」",
    
        love_msg: "ありん「先生…どうしてそんなに何度も私の名前よんでくれるの…？嬉しすぎて…胸がぎゅってなるよ…。」",
    
        image: "arin.png",
    },
    {
        id: "4-1_yasashi",
        subtype: "roster",
        text: "霜降 柔",
        kana: "しもふりやさし",
        romaji: "shimofuri yasashi",
    
        start_msg: "やさし「せんせい、僕を呼んだんですか？ふふ、嬉しいです。」",
        reaction_good: "やさし「きれいに打ててますよ。すごく丁寧ですね。」",
        reaction_bad: "やさし「ここだけ少し違ってますね…。ゆっくりで大丈夫ですよ。」",
    
        reaction_fast: "やさし「おお…！はやいですね。びっくりしました…！」",
        reaction_slow: "やさし「ゆっくりでも全然平気ですよ。ぼく待つの得意なんです。」",
    
        love_msg: "やさし「こんなに僕の名前…呼んでくれるんですね…。なんだか胸があったかくなります。」",
    
        image: "yasashi.png",
    },
    {
        id: "4-2_rui",
        subtype: "roster",
        text: "春潮楼 塁",
        kana: "しゅんちょうろうるい",
        romaji: "shunchoro rui",
    
        start_msg: "るい「せんせい？呼んだかい？僕で良かったん？」",
        reaction_good: "るい「おぉーっ！ちゃんとうててるじゃん！すげぇな～。」",
        reaction_bad: "るい「んー…そこちぃっと違ぇかも。気にすんなて。」",
    
        reaction_fast: "るい「はっや！？なんだそりゃ！せんせい、天才か？」",
        reaction_slow: "るい「おっそ〜い…いや、いいんだけどさ！急がんでいいよ？」",
    
        love_msg: "るい「そんなになんども僕の名前よんでくれるとか…ちょっと照れるなぁ。ありがとな。」",
    
        image: "rui.png",
    },
    {
        id: "4-3_makishi",
        subtype: "roster",
        text: "鈴木 槙士",
        kana: "すずきまきし",
        romaji: "suzuki makishi",
    
        start_msg: "まきし「よっ、せんせーっ☆呼んだ？僕来たぞー！！」",
        reaction_good: "まきし「おっしゃナイスッ！せんせい、やるじゃーん！！」",
        reaction_bad: "まきし「うわっと！？そこミスってるぞっ！どんまいどんまい☆」",
    
        reaction_fast: "まきし「え！？はっや！！せんせいガチ勢！？テンション上がる〜！！」",
        reaction_slow: "まきし「おーいせんせ〜〜ねむくなっちゃうぞ〜〜？笑」",
    
        love_msg: "まきし「そんな連打して僕の名前よぶとか…えっなにそれ好きじゃん！？えへへ☆」",
    
        image: "makishi.png",
    },
    {
        id: "4-4_shige",
        subtype: "roster",
        text: "仲馬 穣",
        kana: "ちゅうましげ",
        romaji: "chuma shige",
    
        start_msg: "しげ「……せ、せんせ…ぼ、僕呼んだと…？」",
        reaction_good: "しげ「おぉっ…う、打てとる…す、すごかよ…。」",
        reaction_bad: "しげ「え、えっと…そこ…ちょっと違うかも…。ごめん…。」",
    
        reaction_fast: "しげ「は、はやっ！？せ、せんせ…そげん急に打たれたら心臓もたん…！」",
        reaction_slow: "しげ「ゆ、ゆっくりでよか…急がんでよかけん…おれ待っとるけん…。」",
    
        love_msg: "しげ「何回も…僕の名前よんでくれると…なんか…胸がぎゅってなる…ありがと…。」",
    
        image: "shige.png",
    },
    {
        id: "4-5_hakomo",
        subtype: "roster",
        text: "出逢 箱藻",
        kana: "であいはこも",
        romaji: "deai hakomo",
    
        start_msg: "はこも「……先生。呼ばれた気がしたから来た…気もする。」",
        reaction_good: "はこも「……うん。合ってると思う。たぶん。」",
        reaction_bad: "はこも「……そこ違う…かも。よくわかんないけど。」",
    
        reaction_fast: "はこも「……速いね。そんなにぼくの名前が必要…？」",
        reaction_slow: "はこも「……遅いのも別に嫌いじゃない。時間ゆっくり感じるし。」",
    
        love_msg: "はこも「……そんなに何度も呼ばれると、不思議な気分。悪くない…と思う。」",
    
        image: "hakomo.png",
    },
    {
        id: "4-6_shizuka",
        subtype: "roster",
        text: "灰住 鎮花",
        kana: "はいずみしずか",
        romaji: "haizumi shizuka",
    
        start_msg: "しずか「……はい。呼びました…よね？わ、私で間違ってませんか…？」",
        reaction_good: "しずか「す、すごいです…。ちゃんと打ててます…！」",
        reaction_bad: "しずか「そ、そこ…違います…。ごめんなさい…もっと丁寧に…。」",
    
        reaction_fast: "しずか「あ、あの…そんな速く打てるんですか…！？わ、私追いつけない…！」",
        reaction_slow: "しずか「ゆ、ゆっくりでも…大丈夫です…。私もゆっくりの方が落ち着きます…。」",
    
        love_msg: "しずか「な、何度も…私の名前を呼んでくれるの…？そんなの…嬉しすぎて…どうしたら…。」",
    
        image: "shizuka.png",
    },
    { 
        id: "2-2_mirin", 
        subtype: "roster",
        text: "萩枝 美琳", 
        kana: "はぎえだみりん", 
        romaji: "hagiedami rin", 
        
        // 通常時
        start_msg: "みりん「えー、みりんてゃって呼んでよぉ🎀」",
        reaction_good: "みりん「やるじゃん！褒めてあげる💕」", 
        reaction_bad: "みりん「だっさw 噛んでやんのw」",
        
        // ★NEW：スピード反応
        reaction_fast: "みりん「えっ早すぎ！？私のこと好きすぎじゃん！？😍」", // 爆速
        reaction_slow: "みりん「ねぇ〜遅い〜。ネイル乾いちゃったよ💅」", // 遅い

        // ★NEW：好感度MAX（たくさん打った後）
        love_msg: "みりん「センセ…今日もみりんの名前呼んでくれるの？…へへ、嬉しい💕」",
        
        image: "mirin.png"
    },
    {
        id: "2-2_yuzu",
        subtype: "roster",
        text: "昆沙丸 柚子",
        kana: "びさまる ゆず",
        romaji: "bisamaru yuzu",

        start_msg: "ゆず「……先生、呼んだん？ 招き猫って言われんの、べつに嫌いじゃねぇぞ。」",
        reaction_good: "ゆず「先生、ふつうに上手いな。ちょっと感心した。」",
        reaction_bad: "ゆず「打ち間違いか……まぁ気にすんな、先生。」",

        reaction_fast: "ゆず「速っ……先生、今日なんか運いいんじゃねぇ？」",
        reaction_slow: "ゆず「遅ぇ……けど急がんでええよ。」",

        love_msg: "ゆず「……そんなに名前呼ばれっと……照れるべ……先生……。」",

        image: "yuzu.png"
    },
    {
        id: "2-2_shinon",
        subtype: "roster",
        text: "細物 詩温",
        kana: "ほそもの しのん",
        romaji: "hosomono shinon",

        start_msg: "しのん「せ、先生……呼んでくれて……ありがとう……。」",
        reaction_good: "しのん「先生……僕の名前、そんな綺麗に……すごいね……。」",
        reaction_bad: "しのん「だ、大丈夫……ミスしても……僕は嫌じゃないよ……先生……。」",

        reaction_fast: "しのん「は、早い……っ。そんなに集中して……僕のために……？」",
        reaction_slow: "しのん「ゆっくりでもいいよ……先生が打ってくれるなら……。」",

        love_msg: "しのん「先生……僕の名前……そんなに何度も……胸が苦しくなるくらい嬉しい……。」",

        image: "shinon.png"
    },
    {
        id: "2-2_hikari",
        subtype: "roster",
        text: "法華 光里",
        kana: "ほっか ひかり",
        romaji: "hokka hikari",

        start_msg: "ひかり「先生……呼んだの？ 一応聞いてあげるわ。」",
        reaction_good: "ひかり「正確ね。先生、その精度なら問題ないわ。」",
        reaction_bad: "ひかり「それミスよね？ わざとじゃないのは分かってるけど。」",

        reaction_fast: "ひかり「その速さ……先生、本気出してるでしょ。表情で分かるわよ。」",
        reaction_slow: "ひかり「遅い……集中しなおして。」",

        love_msg: "ひかり「そんなに私の名前ばかり……先生の気持ちは受け取っておくわ。」",

        image: "hikari.png"
    },
    {
        id: "2-2_kozue",
        subtype: "roster",
        text: "柞原 梢",
        kana: "みはら こずえ",
        romaji: "mihara kozue",

        start_msg: "こずえ「……呼んでくれたん、先生？ ふふ、ありがと。」",
        reaction_good: "こずえ「綺麗に打つなぁ……先生、ええ指さばきや。」",
        reaction_bad: "こずえ「間違えてもうたん？ 気にせんでええよ、先生。」",

        reaction_fast: "こずえ「はやっ……先生、びっくりしてまうわ。」",
        reaction_slow: "こずえ「ゆっくりやなぁ……焦らんでええて。」",

        love_msg: "こずえ「うちの名前……そんな好きなん？ ……胸がぽっと温なるわ、先生……。」",

        image: "kozue.png"
    },
    {
        id: "2-2_yamato",
        subtype: "roster",
        text: "雪村 大和",
        kana: "ゆきむら やまと",
        romaji: "yukimura yamato",

        start_msg: "やまと「先生、呼んだんだな。聞こえてる。」",
        reaction_good: "やまと「正確だ。先生、悪くない。」",
        reaction_bad: "やまと「ミスか。直しゃいい。」",

        reaction_fast: "やまと「速いな……先生、そういうの嫌いじゃない。」",
        reaction_slow: "やまと「遅い……まぁ先生らしい。」",

        love_msg: "やまと「名前をそんなに何度も……先生の気持ち、ちゃんと伝わってる。」",

        image: "yamato.png"
    },
    // -------------------------------------
    // 💬 LINEコース（返信入力）
    // -------------------------------------
    { 
        id: "msg_mirin", 
        subtype: "line",
        sender: "萩枝 美琳",
        text: "せんせー！🎀 今日のネイル見てー！爪にリボンついてんの！すごくない！？💅✨",
        kana: "こうそくいはんです。あすまでにおとしてきなさい。",
        romaji: "kousokuihan desu asu made ni otosite kinasai",
        
        start_msg: "（みりんからLINEが届きました）",
        reaction_good: "みりん「えぇ〜…せんせーのわからずや🥺」",
        reaction_bad: "みりん「ねぇ先生、誤字ってるよ？w」",
        
        // スピード反応（LINEは即レスかどうかが大事！）
        reaction_fast: "みりん「即レス神！✨ センセ大好き！🫶」",
        reaction_slow: "みりん「…既読スルー？🥺 センセ冷たい…」",

        image: "mirin_icon.png"
    },
    { 
        id: "msg_nui", 
        subtype: "line",
        sender: "栄城 縫",
        text: "先生！今日の給食はおかわりあるのか！？だぞ！🍛",
        kana: "はしらないで。おかわりはぜんいんにいきわたってからです。",
        romaji: "hasiranaide okawari wa zenin ni ikiwatatte kara desu",
        
        start_msg: "（ぬいからLINEが届きました）",
        reaction_good: "ぬい「ぶひぃ！待ちきれないゾッ！🤤」",
        reaction_bad: "ぬい「お腹空いて指が動かないのかだぞ？」",

        reaction_fast: "ぬい「返信早くて助かるゾッ！カレー飲み込んでくる！」",
        reaction_slow: "ぬい「先生の返信待ってたら痩せちゃうゾッ…（嘘）」",

        image: "nui.png"
    },
    { 
        id: "msg_enishi", 
        subtype: "line",
        sender: "鼬川 絵丹師",
        text: "……インスピレーションが降りてきた。早退してもいいですか。",
        kana: "だめです。アトリエにいくならほうかごにしなさい。",
        romaji: "dame desu atorie ni iku nara houkago ni shinasai",
        start_msg: "（絵丹師からLINEが届きました）",
        reaction_good: "絵丹師「……チッ。わかったよ。」",
        reaction_bad: "絵丹師「……集中力、散漫してるよ。」",
        image: "enishi.png"
    },
    { 
        id: "inst_01", 
        subtype: "instruction", 
        text: "廊下を走らないこと。怪我をしますよ。", 
        kana: "ろうかをはしらないこと。けがをしますよ。", 
        romaji: "rouka wo hasiranai koto kega wo simasu yo", 
        start_msg: "（生活指導部からの連絡事項です）",
        reaction_good: "生活指導部「周知徹底、ありがとうございます。」",
        reaction_bad: "生活指導部「先生、噛んでますよ。威厳が台無しです。」",
        image: "teacher_03.png" // 村雨先生（冷酷物理教師）のイメージ？
    },
    { 
        id: "inst_02", 
        subtype: "instruction", 
        text: "進路希望調査票の提出期限は明日までです。", 
        kana: "しんろきぼうちょうさひょうのていしゅつきげんはあすまでです。", 
        romaji: "sinrokibouchousahyou no teisyutsukigen wa asu made desu", 
        start_msg: "（ホームルームでの伝達事項です）",
        reaction_good: "校長「うむ。期限厳守は社会人の基本だね。」",
        reaction_bad: "校長「おや？ 先生が期限を忘れてはいかんよ？」"
    },
    { 
        id: "inst_mei", 
        subtype: "instruction", 
        text: "あわわっ！黒板消し落としちゃいましたぁ〜💦", 
        kana: "あわわっ！こくばんけしおとしちゃいましたぁ〜💦", 
        romaji: "awawa kokubankesi otosite simaimasita", 
        start_msg: "芽衣先生「せ、先生！助けてくださぁい！」",
        reaction_good: "芽衣先生「拾ってくれてありがとうございますぅ😭✨」",
        reaction_bad: "芽衣先生「あぅっ…先生までつられて転ばないでくださいぃ💦」",
        image: "mei_icon.png"
    },
    { 
        id: "inst_katsumi", 
        subtype: "instruction", 
        text: "気合いだ！声が小さいぞ！グラウンド１０周！", 
        kana: "きあいだ！こえがちいさいぞ！ぐらうんどじゅっしゅう！", 
        romaji: "kiaida koe ga tiisai zo guraundo jussyuu", 
        
        start_msg: "克己先生「おーい先生！生徒への檄（げき）を頼む！」",
        reaction_good: "克己先生「いい声だ！それが青春だ！！🔥」",
        reaction_bad: "克己先生「なんだその情けないタイプミスは！腕立て伏せだ！」",

        reaction_fast: "克己先生「いい反射神経だ！スポーツマンの鑑だな！！」",
        reaction_slow: "克己先生「たるんどる！！お前のやる気はそんなものか！！」",

        image: "katsumi_icon.png"
    },
    { 
        id: "inst_science", 
        subtype: "instruction", 
        text: "理科室のビーカーを割ったのは誰ですか？", 
        kana: "りかしつのびーかーをわったのはだれですか？", 
        romaji: "rikasitsu no bi-ka- wo watta no wa dare desu ka", 
        start_msg: "（職員室にて、犯人探し中…）",
        reaction_good: "村雨先生「…正直に名乗り出れば、減刑してやります。」",
        reaction_bad: "村雨先生「…動揺していますね。まさか先生、貴方が？」"
    },
    // -------------------------------------
    // 🙏 生徒からの依頼（DM）コース
    // -------------------------------------
    { 
        id: "req_nui", 
        subtype: "request", 
        sender: "栄城 縫",
        // 依頼内容（DM本文）
        start_msg: "縫「先生！給食のおかわり増量嘆願書を作ったから、清書して教育委員会に出してほしいんだゾッ！」",
        // タイピングする内容（作成する書類）
        text: "給食におけるカレーの配給量見直しに関する嘆願書", 
        kana: "きゅうしょくにおけるかれーのはいきゅうりょうみなおしにかんするたんがんしょ", 
        romaji: "kyuusyoku ni okeru kare- no haikyuuryou minaosi ni kansuru tangansyo", 
        reaction_good: "縫「先生ありがとうだぞ！これでカツカレーも夢じゃない！」",
        reaction_bad: "縫「先生、お腹空いてるのか？文字が震えてるゾッ…」",
        image: "nui.png"
    },
    { 
        id: "req_rei", 
        subtype: "request", 
        sender: "用達 怜",
        start_msg: "怜「先生、生徒会で使う『目安箱』のポスターを作りたいのですが、キャッチコピーを入力していただけますか？」",
        text: "あなたの声が学校を変える。生徒会意見箱設置中。", 
        kana: "あなたのこえががっこうをかえる。せいとかいいけんばこせっちちゅう。", 
        romaji: "anata no koe ga gakkou wo kaeru seitokai ikenbako setti cyuu", 
        reaction_good: "怜「完璧です。美しいフォントで印刷しておきますね。」",
        reaction_bad: "怜「先生、誤字はポスターの信頼性を損ないますよ。（黒笑）」",
        image: "rei_icon.png"
    },
    { 
        id: "req_rui", 
        subtype: "request", 
        sender: "春潮楼 塁",
        start_msg: "塁「センセ！姉ちゃんのチーズ店のメニュー表、英語がわかんなくて…代わりに入力頼める？」",
        text: "こだわりの濃厚カマンベールチーズとワインのセット", 
        kana: "こだわりののうこうかまんべーるちーずとわいんのせっと", 
        romaji: "kodawari no noukou kamanbe-ru ti-zu to wain no setto", 
        reaction_good: "塁「すげー！センセ英語もいけるんスね！助かった〜！」",
        reaction_bad: "塁「あ、センセも英語苦手？俺と同じ匂いがする…w」",
        image: "rui_icon.png" // るいくん画像あれば
    },

    // -------------------------------------
    // 🗣️ グループチャット参加コース
    // -------------------------------------
    { 
        id: "chat_girls", 
        subtype: "chat", 
        sender: "2年女子グル",
        // ★会話ログ（改行 \n を使って会話っぽくする！）
        start_msg: "美琳「ねーねー、今度の連休どこいくー？🎀」\n愛芽里「えっと…うさぎカフェ…いきたいな🐰」\n美琳「いいね！センセも誘っちゃう？w」",
        // 先生の書き込み（タイピング内容）
        text: "先生は仕事があるから遠慮しておきます。", 
        kana: "せんせいはしごとがあるからえんりょしておきます。", 
        romaji: "sensei wa sigoto ga aru kara enryo site okimasu", 
        reaction_good: "美琳「えー！つまんないのー！🥺」\n愛芽里「せんせい…おしごとがんばって…」",
        reaction_bad: "美琳「あ、センセ動揺してない？ホントは行きたいんでしょw」",
        image: "mirin_icon.png" 
    },
    { 
        id: "chat_game", 
        subtype: "chat", 
        sender: "ゲーマーズ",
        start_msg: "一人「ククク…昨日のランクマ、俺の右腕が暴走して負けた…」\n縫「ただの操作ミスだろ！だぞ！」\n一人「貴様…！俺の闇の力を疑うのか…先生、言ってやれ！」",
        text: "ゲームは一日一時間。宿題は終わったの？", 
        kana: "げーむはいちにちいちじかん。しゅくだいはおわったの？", 
        romaji: "ge-mu wa itiniti itijikan syukudai wa owatta no", 
        reaction_good: "一人「ぐっ…現実という名の結界に阻まれるとは…」\n縫「先生正論すぎるゾッ…」",
        reaction_bad: "一人「先生、コマンド入力ミスってるぞ。エイムが悪いな。」",
        image: "hitori.png"
    },
    { 
        id: "chat_teacher", 
        subtype: "chat", 
        sender: "【極秘】教員連絡網",
        start_msg: "克己「今日の体育、グラウンド100周に変更するか！」\n芽衣「えぇっ！？生徒が倒れちゃいますよぉ💦」\n克己「甘い！甘すぎる！なぁ先生、お前もそう思うだろ！？」",
        text: "妻鹿先生、それはさすがにやりすぎです。", 
        kana: "めがせんせい、それはさすがにやりすぎです。", 
        romaji: "megasensei sore wa sasuga ni yarisugi desu", 
        reaction_good: "克己「むぅ…先生がそう言うなら50周にしておくか…」\n芽衣「ホッ…ありがとうございますぅ〜🍵」",
        reaction_bad: "克己「なんだその入力は！お前も走り足りないようだな！！」",
        image: "katsumi_icon.png"
    }
];
