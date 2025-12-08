// data.js

/* =========================================
   🏢 実務訓練モード（表）データ
   ========================================= */
const businessData = [
    { id: "b1", text: "お世話になっております", kana: "おせわになっております", romaji: "osewaninatteorimasu", subtype: "basic" },
    { id: "b2", text: "報告・連絡・相談", kana: "ほうこく・れんらく・そうだん", romaji: "houkoku/renraku/soudan", subtype: "basic" },
    { id: "b3", text: "議事録の作成", kana: "ぎじろくのさくせい", romaji: "gijirokunosakusei", subtype: "basic" },
    { id: "b4", text: "株式会社とりの丘", kana: "かぶしきがいしゃとりのおか", romaji: "kabusikigaisyatorinooka", subtype: "basic" },
    { id: "b5", text: "承知いたしました", kana: "しょうちいたしました", romaji: "syoutiitasimasita", subtype: "basic" },
    { id: "b6",  text: "よろしくお願いいたします", kana: "よろしくおねがいいたします", romaji: "yoroshikuonegaishimasu", subtype: "basic" },
    { id: "b7",  text: "ご確認のほどお願いいたします", kana: "ごかくにんのほどおねがいいたします", romaji: "gokakuninnnohodoonregaishimasu", subtype: "basic" },
    { id: "b8",  text: "資料を添付いたします", kana: "しりょうをてんぷいたします", romaji: "siryouotennpuitasimasu", subtype: "basic" },
    { id: "b9",  text: "本日の予定をご共有します", kana: "ほんじつのよていをごきょうゆうします", romaji: "honjitunoyoteiwokyouyuusimasu", subtype: "basic" },
    { id: "b10", text: "在席しております", kana: "ざいせきしております", romaji: "zaisekisiteorimasu", subtype: "basic" },
    { id: "b11", text: "席を外しております", kana: "せきをはずしております", romaji: "sekiwohazusiteorimasu", subtype: "basic" },
    { id: "b12", text: "会議の準備を行います", kana: "かいぎのじゅんびをおこないます", romaji: "kaiginojunbiwookonaimasu", subtype: "basic" },
    { id: "b13", text: "書類をファイリングします", kana: "しょるいをふぁいりんぐします", romaji: "soruiwofairingusimasu", subtype: "basic" },
    { id: "b14", text: "スケジュールを調整します", kana: "すけじゅーるをちょうせいします", romaji: "sukejuuruwotyouseisimasu", subtype: "basic" },
    { id: "b15", text: "Excelで集計します", kana: "えくせるでしゅうけいします", romaji: "ekuserudeshukeisimasu", subtype: "basic" },
    { id: "b16", text: "データ入力を行います", kana: "でーたにゅうりょくをおこないます", romaji: "deetanyuuryokuwookonaimasu", subtype: "basic" },
    { id: "b17", text: "郵便物を仕分けします", kana: "ゆうびんぶつをしわけします", romaji: "yuubinbutusosiwakesimasu", subtype: "soumu" },
    { id: "b18", text: "勤怠の確認をお願いします", kana: "きんたいのかくにんをおねがいします", romaji: "kintainokakuninnwoonegaishimasu", subtype: "soumu" },
    { id: "b19", text: "ご連絡ありがとうございます", kana: "ごれんらくありがとうございます", romaji: "gorenrakuarigatougozaimasu", subtype: "basic" },
    { id: "b20", text: "本日中に対応いたします", kana: "ほんじつちゅうにたいおういたします", romaji: "honjituchuunitaiouitasimasu", subtype: "basic" },
    { id: "b21", text: "データを更新しました", kana: "でーたをこうしんしました", romaji: "deetawokousinsimasu", subtype: "basic" },
    { id: "b22", text: "ファイル名を変更しました", kana: "ふぁいるめいをへんこうしました", romaji: "fairumeiwohenkousimasita", subtype: "basic" },
    { id: "b23", text: "パスワードを共有します", kana: "ぱすわーどをきょうゆうします", romaji: "pasuwaadowokyouyuusimasu", subtype: "basic" },
    { id: "b24", text: "本件につきまして", kana: "ほんけんにつきまして", romaji: "honkennitsukimashite", subtype: "basic" },
    { id: "b25", text: "ご査収ください", kana: "ごさしゅうください", romaji: "gosasyuukudasai", subtype: "basic" }
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
        image: "miriya.png"
    },
    { 
        id: "2-1_hitori", 
        subtype: "roster",
        text: "阿見 一人", 
        kana: "あみひとり", 
        romaji: "amihitori", 
        start_msg: "一人「俺の真名（なまえ）を刻むがいい…！」",
        reaction_good: "一人「ククク…悪くない手際だ。」", 
        reaction_bad: "一人「おいおい、右手が震えてるぞ？」",
        image: "hitori.png"
    },
    { 
        id: "2-2_mirin", 
        subtype: "roster",
        text: "萩枝 美琳", 
        kana: "はぎえだみりん", 
        romaji: "hagiedami rin", 
        start_msg: "みりん「えー、みりんてゃって呼んでよぉ🎀」",
        reaction_good: "みりん「やるじゃん！褒めてあげる💕」", 
        reaction_bad: "みりん「え、ダッサw 今の噛んだ？w」", // ←これが見たいやつw
        image: "mirin.png"
    },

    // -------------------------------------
    // 💬 LINEコース（返信入力）
    // -------------------------------------
    { 
        id: "msg_mirin", 
        subtype: "line", // LINEコース
        sender: "萩枝 美琳",
        // 受信メッセージ↓
        text: "せんせー！🎀 今日のネイル見てー！爪にリボンついてんの！すごくない！？💅✨",
        // 先生の返信（タイピング内容）↓
        kana: "こうそくいはんです。あすまでにおとしてきなさい。",
        romaji: "kousokuihan desu asu made ni otosite kinasai",
        start_msg: "（みりんからLINEが届きました）",
        reaction_good: "みりん「えぇ〜…せんせーのわからずや🥺」",
        reaction_bad: "みりん「ねぇ先生、誤字ってるよ？w」",
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
        reaction_bad: "ぬい「先生、お腹空いて指動かないのかだぞ？」",
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
    }
];
