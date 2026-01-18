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
    { id: "b17", text: "郵便物を仕分けします", kana: "ゆうびんぶつをしわけします", romaji: "yuubinbutusosiwakesimasu", subtype: "basic" },
    { id: "b18", text: "勤怠の確認をお願いします", kana: "きんたいのかくにんをおねがいします", romaji: "kintainokakuninnwoonegaishimasu", subtype: "basic" },
    { id: "b19", text: "ご連絡ありがとうございます", kana: "ごれんらくありがとうございます", romaji: "gorenrakuarigatougozaimasu", subtype: "basic" },
    { id: "b20", text: "本日中に対応いたします", kana: "ほんじつちゅうにたいおういたします", romaji: "honjituchuunitaiouitasimasu", subtype: "basic" },

    { id: "b21", text: "データを更新しました", kana: "でーたをこうしんしました", romaji: "deetawokousinsimasu", subtype: "basic" },
    { id: "b22", text: "ファイル名を変更しました", kana: "ふぁいるめいをへんこうしました", romaji: "fairumeiwohenkousimasita", subtype: "basic" },
    { id: "b23", text: "パスワードを共有します", kana: "ぱすわーどをきょうゆうします", romaji: "pasuwaadowokyouyuusimasu", subtype: "basic" },
    { id: "b24", text: "本件につきまして", kana: "ほんけんにつきまして", romaji: "honkennitsukimashite", subtype: "basic" },
    { id: "b25", text: "ご査収ください", kana: "ごさしゅうください", romaji: "gosasyuukudasai", subtype: "basic" },
    { id: "b26", text: "ご対応ありがとうございます", kana: "ごたいおうありがとうございます", romaji: "gotaiouarigatougozaimasu", subtype: "basic" },
    { id: "b27", text: "引き続きよろしくお願いいたします", kana: "ひきつづきよろしくおねがいいたします", romaji: "hikitsuzukiyoroshikuonegaishimasu", subtype: "basic" },
    { id: "b28", text: "メールを確認いたしました", kana: "めーるをかくにんいたしました", romaji: "meeruwokakuninitaishimasu", subtype: "basic" },
    { id: "b29", text: "資料をご提出ください", kana: "しりょうをごていしゅつください", romaji: "siryouogoteishutukudasai", subtype: "basic" },
    { id: "b30", text: "会議室を予約します", kana: "かいぎしつをよやくします", romaji: "kaigisituwoyoyakusimasu", subtype: "basic" },

    { id: "b31", text: "本日の業務を開始します", kana: "ほんじつのぎょうむをかいしします", romaji: "honjitunogyomuwokaishisimasu", subtype: "basic" },
    { id: "b32", text: "進捗をご報告します", kana: "しんちょくをごほうこくします", romaji: "shintyokugohoukokusimasu", subtype: "basic" },
    { id: "b33", text: "不備がないか確認してください", kana: "ふびがないかかくにんしてください", romaji: "fubiganai kakakuninsitekudasai", subtype: "basic" },
    { id: "b34", text: "担当者に共有いたします", kana: "たんとうしゃにきょうゆういたします", romaji: "tantousyanikyouyuuitasimasu", subtype: "basic" },
    { id: "b35", text: "ご指摘ありがとうございます", kana: "ごしてきありがとうございます", romaji: "gositekiarigatougozaimasu", subtype: "basic" },

    { id: "b36", text: "変更内容を反映しました", kana: "へんこうないようをはんえいしました", romaji: "henkounaijyouwohanneisimasita", subtype: "basic" },
    { id: "b37", text: "本件につきご連絡いたします", kana: "ほんけんにつきごれんらくいたします", romaji: "honkennitsukigorenrakuitasimasu", subtype: "basic" },
    { id: "b38", text: "ご都合のよい日時を教えてください", kana: "ごつごうのよいにちじをおしえてください", romaji: "gotsugounoyoinitijiwoosietekudasai", subtype: "basic" },
    { id: "b39", text: "確認後あらためてご連絡します", kana: "かくにんごあらためてごれんらくします", romaji: "kakuningoaratametegorenrakusimasu", subtype: "basic" },
    { id: "b40", text: "添付ファイルをご確認ください", kana: "てんぷふぁいるをごかくにんください", romaji: "tenpufairuwogakunin kudasai", subtype: "basic" },

    { id: "b41", text: "至急ご対応お願いいたします", kana: "しきゅうごたいおうおねがいいたします", romaji: "shikyuugotaiouonegaishimasu", subtype: "basic" },
    { id: "b42", text: "電話を転送いたしました", kana: "でんわをてんそういたしました", romaji: "denwawotensouitasimasu", subtype: "basic" },
    { id: "b43", text: "席に戻りました", kana: "せきにもどりました", romaji: "sekini modorimasita", subtype: "basic" },
    { id: "b44", text: "不在のため折り返します", kana: "ふざいのためおりかえします", romaji: "fuzainotameorikaesimasu", subtype: "basic" },
    { id: "b45", text: "資料を再送いたします", kana: "しりょうをさいそういたします", romaji: "siryouosaisouitasimasu", subtype: "basic" },

    { id: "b46", text: "承認をお願いいたします", kana: "しょうにんをおねがいいたします", romaji: "shouninwoonegaishimasu", subtype: "basic" },
    { id: "b47", text: "会議が開始されました", kana: "かいぎがかいしされました", romaji: "kaigigakaishisaremashita", subtype: "basic" },
    { id: "b48", text: "議題を共有いたします", kana: "ぎだいをきょうゆういたします", romaji: "gidaiwokyouyuuitasimasu", subtype: "basic" },
    { id: "b49", text: "担当者へ引き継ぎました", kana: "たんとうしゃへひきつぎました", romaji: "tantousyaehikitsugimasita", subtype: "basic" },
    { id: "b50", text: "問題を確認中です", kana: "もんだいをかくにんちゅうです", romaji: "mondaikakuninchuudesu", subtype: "basic" },

    { id: "b51", text: "回覧資料を回付します", kana: "かいらんしりょうをかいふします", romaji: "kairannsiryouokaifusimasu", subtype: "basic" },
    { id: "b52", text: "誤字を修正いたしました", kana: "ごじをしゅうせいいたしました", romaji: "gojioshuseiitasimasu", subtype: "basic" },
    { id: "b53", text: "最新版を共有いたします", kana: "さいしんばんをきょうゆういたします", romaji: "saishinbanwokyouyuuitasimasu", subtype: "basic" },
    { id: "b54", text: "担当者へ確認しています", kana: "たんとうしゃへかくにんしています", romaji: "tantousyahekakuninsiteimasu", subtype: "basic" },
    { id: "b55", text: "会議資料を追加しました", kana: "かいぎしりょうをついかしました", romaji: "kaigisiryouotsuikasimasu", subtype: "basic" },

    { id: "b56", text: "記入漏れがないか確認します", kana: "きにゅうもれがないかかくにんします", romaji: "kinyuumoreganaikakakuninshimasu", subtype: "basic" },
    { id: "b57", text: "本日のタスクを整理します", kana: "ほんじつのたすくをせいりします", romaji: "honjitunotaskwoseirisimasu", subtype: "basic" },
    { id: "b58", text: "メール送信を完了しました", kana: "めーるそうしんをかんりょうしました", romaji: "meerusousinwokanryousimasu", subtype: "basic" },
    { id: "b59", text: "必要書類を提出しました", kana: "ひつようしょるいをていしゅつしました", romaji: "hitsuuyousyoruiteishutsusimasu", subtype: "basic" },
    { id: "b60", text: "予定をカレンダーに反映しました", kana: "よていをかれんだーにはんえいしました", romaji: "yoteiwocarendaanihanneisimasu", subtype: "basic" }
];

/* =========================================
   🏫 とりの丘学園モード（裏）データ
   ========================================= */
const schoolData = [
    // =====================================
    // 📋 名簿コース（名前入力）
    // =====================================
    // --- 1年1組 ---
    { 
        id: "1-1_momoka",
        subtype: "roster",
        group: "1-1",
        text: "遠藤 桃花",
        kana: "えんどうももか",
        romaji: "endo momoka",
        start_msg: "ももか「……ふん。せんせ、ちゃんと書きなさいよ。間違えたら噛むから」",
        reaction_good: "ももか「……ま、悪くないワン。ちゃんとできてるじゃない」",
        reaction_bad: "ももか「は？名前間違えるとかありえないんだけど。目ついてる？」",
        reaction_fast: "ももか「ちょ、はやっ…！別に嬉しくなんか…ないワン！」",
        reaction_slow: "ももか「……遅い。待たせすぎ。パパならすぐなのに」",
        love_msg: "ももか「……せんせ、今日もちゃんと呼んでくれたわね。……それでいいのよ」",
        image: "momoka.png"
    },
    { 
        id: "1-1_mimika",
        subtype: "roster",
        group: "1-1",
        text: "近藤 美々香",
        kana: "こんどうみみか",
        romaji: "kondo mimika",
        start_msg: "みみか「……名簿ね。合理的でいい判断だと思うわ、先生」",
        reaction_good: "みみか「正確。無駄がないわ。さすがね」",
        reaction_bad: "みみか「誤字。確認不足よ、先生。やり直して」",
        reaction_fast: "みみか「……想定より早いわね。効率的で助かる」",
        reaction_slow: "みみか「遅延。工程管理、見直した方がいいわ」",
        love_msg: "みみか「先生が呼ぶなら…その名前で問題ないわ」",
        image: "mimika.png"
    },
    { 
        id: "1-1_hinaka",
        subtype: "roster",
        group: "1-1",
        text: "辻山 妃菜華",
        kana: "つじやまひなか",
        romaji: "tsujiyama hinaka",
        start_msg: "ひなか「せんせ〜！ひなか、島根から来ただに〜！よろしくねぇ！」",
        reaction_good: "ひなか「え〜！せんせ上手じゃん！やるやんか〜！」",
        reaction_bad: "ひなか「ちょっとぉ！それ違うが！ちゃんと見て書きんさい！」",
        reaction_fast: "ひなか「はやっ！せんせ仕事できる人じゃん！」",
        reaction_slow: "ひなか「も〜遅いけぇ！待ちくたびれたわ〜！」",
        love_msg: "ひなか「せんせに名前呼ばれると、なんか嬉しいんよね〜！」",
        image: "hinaka.png"
    },
    { 
        id: "1-1_hikaru",
        subtype: "roster",
        group: "1-1",
        text: "黒見 晃",
        kana: "くろみひかる",
        romaji: "kuromi hikaru",
        start_msg: "ひかる「えっ、名簿？なんだ先生、そういうの好きなん？まぁ俺はいいけどさ〜」",
        reaction_good: "ひかる「おっ、いいじゃん！先生なかなかやるな！」",
        reaction_bad: "ひかる「え、それ違くね？俺そんなんじゃねーし。ちゃんと見て書きなよ〜」",
        reaction_fast: "ひかる「はやっ！？ちょ、先生気合入ってんじゃん！」",
        reaction_slow: "ひかる「ん〜？まぁいいけどさ、ちょっと遅くね？」",
        love_msg: "ひかる「先生に名前呼ばれるとさ、なんか照れるっつーか…悪くねぇな」",
        image: "hikaru.png"
    },
    { 
        id: "1-1_seina",
        subtype: "roster",
        group: "1-1",
        text: "天雨 聖奈",
        kana: "あまうせいな",
        romaji: "amau seina",
        start_msg: "せいな「はい、先生。名簿ならテキパキお願いします」",
        reaction_good: "せいな「よし、完璧。ちゃんとしてるじゃない」",
        reaction_bad: "せいな「ちょっと！そこ違うでしょ！確認してください！」",
        reaction_fast: "せいな「判断早いわね。嫌いじゃないわ」",
        reaction_slow: "せいな「遅い！もっとシャキッとしなさい！」",
        love_msg: "せいな「……先生がちゃんと呼ぶなら、文句ないわ」",
        image: "seina.png"
    },
    { 
        id: "1-1_tetsu",
        subtype: "roster",
        group: "1-1",
        text: "市宮 哲",
        kana: "いちみやてつ",
        romaji: "ichimiya tetsu",
        start_msg: "てつ「わぁ〜！名簿だぁ！みんなの名前、大事だよね〜！」",
        reaction_good: "てつ「うんうん！いい感じ！さすがせんせだね！」",
        reaction_bad: "てつ「あれ？ちょっと違うかも？もう一回見てみよっ！」",
        reaction_fast: "てつ「はやい！実験もこれくらいだと嬉しいな〜！」",
        reaction_slow: "てつ「のんびりでもいいけど〜、忘れないでね！」",
        love_msg: "てつ「せんせに名前呼ばれると、心があったかくなるよ〜！」",
        image: "tetsu.png"
    },
    { 
        id: "1-1_towa",
        subtype: "roster",
        group: "1-1",
        text: "右幸 永遠",
        kana: "うこうとわ",
        romaji: "uko towa",
        start_msg: "とわ「え〜名簿？まぁいいけどさ、早く終わらせよ〜」",
        reaction_good: "とわ「おっ、いいじゃん。やる気あるね先生！」",
        reaction_bad: "とわ「は？それ違うし。ちゃんと見て書いてよ〜」",
        reaction_fast: "とわ「うわ早っ！チーズ食べていい？」",
        reaction_slow: "とわ「まだ？まぁいっか〜ゲームして待つわ」",
        love_msg: "とわ「先生が素直に呼ぶなら、俺も素直でいよっかな」",
        image: "towa.png"
    },
    { 
        id: "1-1_mai",
        subtype: "roster",
        group: "1-1",
        text: "岡田 麻衣",
        kana: "おかだまい",
        romaji: "okada mai",
        start_msg: "まい「名簿？ふふ…ちゃんと書いてくれるなら、嘘つかなくていいかもね」",
        reaction_good: "まい「へぇ…意外と丁寧。騙しがいないの、ちょっと残念」",
        reaction_bad: "まい「あは、そこ違うよ。わざと？それとも本気？」",
        reaction_fast: "まい「早いね。雑じゃないならいいけど」",
        reaction_slow: "まい「遅いなぁ…でも待つの、嫌いじゃないよ」",
        love_msg: "まい「先生が呼ぶなら…本当の名前でも、まあいいかな」",
        image: "mai.png"
    },
    { 
        id: "1-1_kosaku",
        subtype: "roster",
        group: "1-1",
        text: "小路 虎作",
        kana: "こじこさく",
        romaji: "koji kosaku",
        start_msg: "こさく「名簿？ええやん！俺の名前、目立つように頼むで先生！」",
        reaction_good: "こさく「さすがやな先生！センスあるわ〜！」",
        reaction_bad: "こさく「ちょちょ、そこちゃうやろ！ちゃんと見ぃや〜！」",
        reaction_fast: "こさく「はっや！ノリええ先生やな！」",
        reaction_slow: "こさく「まだ〜？まぁええけど、腹減ってきたわ」",
        love_msg: "こさく「先生に呼ばれるん、なんか気分ええな！」",
        image: "kosaku.png"
    },
    { 
        id: "1-1_kotarou",
        subtype: "roster",
        group: "1-1",
        text: "川曽 虎太郎",
        kana: "かわそこたろう",
        romaji: "kawaso kotarou",
        start_msg: "こたろう「名簿ですね。分かりました、先生。よろしくお願いします」",
        reaction_good: "こたろう「はい、とても綺麗です。ありがとうございます」",
        reaction_bad: "こたろう「あ、そこ少し違います。落ち着いて直しましょう」",
        reaction_fast: "こたろう「早いですね。助かります」",
        reaction_slow: "こたろう「大丈夫です。待つのは慣れてますから」",
        love_msg: "こたろう「先生に名前を呼んでもらえるの、嬉しいです」",
        image: "kotarou.png"
    },
    { 
        id: "1-1_koto",
        subtype: "roster",
        group: "1-1",
        text: "雑敷 言",
        kana: "ざつしきこと",
        romaji: "zatsushiki koto",
        start_msg: "こと「名簿か。まぁ、適当じゃなきゃええよ」",
        reaction_good: "こと「お、ちゃんとしちゅうね。悪くない」",
        reaction_bad: "こと「それ違うろ？ちゃんと見て書かんと」",
        reaction_fast: "こと「はやいな。勢いあるやん」",
        reaction_slow: "こと「ちと遅いけど…まぁええか」",
        love_msg: "こと「先生に呼ばれるん、嫌いじゃないき」",
        image: "koto.png"
    },
    { 
        id: "1-1_komari",
        subtype: "roster",
        group: "1-1",
        text: "杉山 虎毱",
        kana: "すぎやまこまり",
        romaji: "sugiyama komari",
        start_msg: "こまり「名簿なんだぁ…ちゃんと書いてくれる？」",
        reaction_good: "こまり「うん、いい感じ。ありがとう」",
        reaction_bad: "こまり「それ、ちょっと違うよ？直してほしいな」",
        reaction_fast: "こまり「はやいね。びっくりしちゃった」",
        reaction_slow: "こまり「ゆっくりでもいいけど…忘れないでね」",
        love_msg: "こまり「せんせいに名前呼ばれるの、嬉しいよ」",
        image: "komari.png"
    },
    { 
        id: "1-1_ai",
        subtype: "roster",
        group: "1-1",
        text: "園田 藍",
        kana: "そのたあい",
        romaji: "sonota ai",
        start_msg: "あい「まあ…名簿ですか。大変ですね、先生」",
        reaction_good: "あい「あらあら、正確ですねぇ。意外でした」",
        reaction_bad: "あい「あら…間違えてますよ？本当に先生ですか？」",
        reaction_fast: "あい「ふふ、随分お早いんですね」",
        reaction_slow: "あい「遅いですねぇ…でも、観察する時間が増えて助かります」",
        love_msg: "あい「先生に呼ばれると…ふふ、逃げ場ないですね」",
        image: "ai.png"
    },
    { 
        id: "1-1_akaru",
        subtype: "roster",
        group: "1-1",
        text: "成政 明流",
        kana: "なりまさあかる",
        romaji: "narimasa akaru",
        start_msg: "あかる「名簿！？よっしゃー！じゃあ先生、今日も盛り上げてこーぜ！」",
        reaction_good: "あかる「いいねいいね！先生ノリ最高じゃん！」",
        reaction_bad: "あかる「ちょ待って！それ俺じゃなくね！？名前見てよ先生〜！」",
        reaction_fast: "あかる「はやっ！テンポ良すぎてパーティー始まるわ！」",
        reaction_slow: "あかる「おっそ！でもまぁ、待つのもイベントってことで！」",
        love_msg: "あかる「先生に名前呼ばれるとさ、なんか主役感あって嬉しいんだよね！」",
        image: "akaru.png"
    },
    { 
        id: "1-1_kojiro",
        subtype: "roster",
        group: "1-1",
        text: "二瓶 小次郎",
        kana: "にへいこじろう",
        romaji: "nihei kojiro",
        start_msg: "こじろう「名簿ですね。分かりました、丁寧にお願いします」",
        reaction_good: "こじろう「はい、綺麗です。ありがとうございます先生」",
        reaction_bad: "こじろう「あ、そこ少し違いますね。修正していただけると助かります」",
        reaction_fast: "こじろう「早いですね。流れるようで心地いいです」",
        reaction_slow: "こじろう「大丈夫です。落ち着いていきましょう」",
        love_msg: "こじろう「先生に名前を呼ばれると…少し背筋が伸びます」",
        image: "kojiro.png"
    },
    { 
        id: "1-1_kaede",
        subtype: "roster",
        group: "1-1",
        text: "速川 楓",
        kana: "はやかわかえで",
        romaji: "hayakawa kaede",
        start_msg: "かえで「名簿？ふーん…ま、私が一番目立つ名前だよね？」",
        reaction_good: "かえで「当然でしょ。先生、見る目あるじゃん」",
        reaction_bad: "かえで「は？そこ間違える？ちゃんと私の美しさ見なさいよ」",
        reaction_fast: "かえで「え、早っ！さすが私、手間取らせないね」",
        reaction_slow: "かえで「ちょっと遅くない？私を待たせるなんて勇気あるわね」",
        love_msg: "かえで「先生が私の名前呼ぶの、悪くないわ。許してあげる」",
        image: "kaede.png"
    },
    { 
        id: "1-1_sei",
        subtype: "roster",
        group: "1-1",
        text: "腹巻 青",
        kana: "はらまきせい",
        romaji: "haramaki sei",
        start_msg: "せい「名簿ですね先生！よし、気合入れていきましょう！」",
        reaction_good: "せい「素晴らしいです！その調子でいきましょう！」",
        reaction_bad: "せい「むっ…そこ違います！確認をお願いします先生！」",
        reaction_fast: "せい「早い！やる気を感じます！」",
        reaction_slow: "せい「大丈夫です！焦らず着実にいきましょう！」",
        love_msg: "せい「先生に名前を呼ばれると、ますます燃えてきます！」",
        image: "sei.png"
    },
    { 
        id: "1-1_setsuna",
        subtype: "roster",
        group: "1-1",
        text: "谷幡 節捺",
        kana: "やはたせつな",
        romaji: "yahata setsuna",
        start_msg: "せつな「名簿？あー…ちょっと待って、名前忘れとらんよね？」",
        reaction_good: "せつな「うんうん、そぎゃん感じでよかよ〜」",
        reaction_bad: "せつな「あれ？そこ違うばい。先生、見直しなっせ」",
        reaction_fast: "せつな「はやっ！メモ取る暇もなかね」",
        reaction_slow: "せつな「まぁよかよ。ゆっくりで」",
        love_msg: "せつな「先生に名前呼ばれると、なんか記者魂くすぐらるっちゃんね」",
        image: "setsuna.png"
    },
    { 
        id: "1-1_kofuku",
        subtype: "roster",
        group: "1-1",
        text: "山神 小福",
        kana: "やまがみこふく",
        romaji: "yamagami kofuku",
        start_msg: "こふく「名簿か。問題ない。淡々と進めてくれ」",
        reaction_good: "こふく「正確だ。評価する」",
        reaction_bad: "こふく「違う。確認してから記せ」",
        reaction_fast: "こふく「無駄がない。良い」",
        reaction_slow: "こふく「遅いが…許容範囲だ」",
        love_msg: "こふく「先生に名を呼ばれるのも、悪くはないな」",
        image: "kofuku.png"
    },
    { 
        id: "1-1_masaki",
        subtype: "roster",
        group: "1-1",
        text: "勇惣 柾季",
        kana: "ゆそうまさき",
        romaji: "yusou masaki",
        start_msg: "まさき「名簿ですね…分かりました。お願いします」",
        reaction_good: "まさき「はい、ありがとうございます先生」",
        reaction_bad: "まさき「あ…そこ、少し違います。すみません」",
        reaction_fast: "まさき「早いですね。助かります」",
        reaction_slow: "まさき「大丈夫です。時間はありますから」",
        love_msg: "まさき「先生に名前を呼ばれると…少し安心します」",
        image: "masaki.png"
    },
    // --- 1年2組 ---
    { 
        id: "1-2_mari",
        subtype: "roster",
        group: "1-2",
        text: "愛野 麻理",
        kana: "あいのまり",
        romaji: "aino mari",
        start_msg: "まり「……名簿、ですか。あ、はい……お願いします」",
        reaction_good: "まり「……ありがとうございます。ちゃんと、合ってます」",
        reaction_bad: "まり「……それ、違うと思います。名前……見てほしいです」",
        reaction_fast: "まり「……早いですね。少し、びっくりしました」",
        reaction_slow: "まり「……大丈夫です。急がんでよかです」",
        love_msg: "まり「先生に……名前、呼ばれるの……嫌じゃ、ないです」",
        image: "mari.png"
    }, 
    { 
        id: "1-2_machie",
        subtype: "roster",
        group: "1-2",
        text: "井漕 舞茅依",
        kana: "いこぎまちえ",
        romaji: "ikogi machie",
        start_msg: "まちえ「名簿ですね。承知しました、先生」",
        reaction_good: "まちえ「素晴らしいです。その姿勢、尊敬します」",
        reaction_bad: "まちえ「あ、そこ違いますね。確認、お願いします」",
        reaction_fast: "まちえ「お早いですね……流石です」",
        reaction_slow: "まちえ「焦らなくても大丈夫ですよ。大事なのは積み重ねですから」",
        love_msg: "まちえ「先生に名前を呼ばれると……胸が熱くなりますね」",
        image: "machie.png"
    }, 
    { 
        id: "1-2_hebiki",
        subtype: "roster",
        group: "1-2",
        text: "石原 蛇喜",
        kana: "いしはらへびき",
        romaji: "ishihara hebiki",
        start_msg: "へびき「名簿さ〜？はーい、よろしくね先生」",
        reaction_good: "へびき「いいさ〜！ばっちりだね！」",
        reaction_bad: "へびき「あれ？それ違うさ〜。もう一回見てほしいな」",
        reaction_fast: "へびき「早いねぇ！クーラーいらずだよ〜」",
        reaction_slow: "へびき「まぁまぁ、ゆっくりでいいさ〜」",
        love_msg: "へびき「先生に名前呼ばれると、なんか安心するさ〜」",
        image: "hebiki.png"
    }, 
    { 
        id: "1-2_mirai",
        subtype: "roster",
        group: "1-2",
        text: "岩結 未来",
        kana: "いわいみらい",
        romaji: "iwai mirai",
        start_msg: "みらい「名簿ですね！よーし、ちゃんとお願いします先生！」",
        reaction_good: "みらい「うん！その調子です！」",
        reaction_bad: "みらい「えっ、それ違いますよ先生！もう一回！」",
        reaction_fast: "みらい「早っ！さすがです！」",
        reaction_slow: "みらい「大丈夫です！失敗してもやり直せばいいですから！」",
        love_msg: "みらい「先生に名前呼ばれると、なんかやる気出ます！」",
        image: "mirai.png"
    }, 
    { 
        id: "1-2_miru",
        subtype: "roster",
        group: "1-2",
        text: "遠藤 海松",
        kana: "えんどうみる",
        romaji: "endo miru",
        start_msg: "みる「名簿〜！？やったぁ！先生がんばって〜！」",
        reaction_good: "みる「わー！すごーい！完璧じゃん！」",
        reaction_bad: "みる「あれ？違くない？先生おちゃめだな〜！」",
        reaction_fast: "みる「はやっ！笑う間もなかったよ〜！」",
        reaction_slow: "みる「だいじょーぶ！ゆっくりいこ〜！」",
        love_msg: "みる「先生に名前呼ばれるの、なんかうれし〜！」",
        image: "miru.png"
    }, 
    { 
        id: "1-2_shirube",
        subtype: "roster",
        group: "1-2",
        text: "鬼弦 導",
        kana: "おにづるしるべ",
        romaji: "onizuru shirube",
        start_msg: "しるべ「……名簿。うん」",
        reaction_good: "しるべ「……合ってる」",
        reaction_bad: "しるべ「……違う。そこ」",
        reaction_fast: "しるべ「……早い」",
        reaction_slow: "しるべ「……別に、いい」",
        love_msg: "しるべ「……呼ばれるのは、嫌じゃない」",
        image: "shirube.png"
    }, 
    { 
        id: "1-2_yuu",
        subtype: "roster",
        group: "1-2",
        text: "柏倉 佑",
        kana: "かしわぐらゆう",
        romaji: "kashiwagura yuu",
        start_msg: "ゆう「えっと……名簿、ですよね。お願いします」",
        reaction_good: "ゆう「わ……合ってます。ありがとうございます先生」",
        reaction_bad: "ゆう「あ、それ……僕じゃないです……」",
        reaction_fast: "ゆう「は、早いですね……！」",
        reaction_slow: "ゆう「だいじょうぶです。待てますから」",
        love_msg: "ゆう「先生に名前呼ばれると……ちょっと、嬉しいです」",
        image: "yuu.png"
    }, 
    { 
        id: "1-2_kanon",
        subtype: "roster",
        group: "1-2",
        text: "雲然 翔暖",
        kana: "くもしかりかのん",
        romaji: "kumoshikari kanon",
        start_msg: "かのん「名簿〜？いいよいいよ〜！よろしくね先生！」",
        reaction_good: "かのん「おぉ〜！完璧やんか！」",
        reaction_bad: "かのん「あれ？それ違わん？もっかい見てみまいけ！」",
        reaction_fast: "かのん「はやっ！もう一人おるみたいやね！」",
        reaction_slow: "かのん「まぁまぁ、のんびりいこ〜！」",
        love_msg: "かのん「先生に名前呼ばれると、なんか照れるわ〜！」",
        image: "kanon.png"
    }, 
    { 
        id: "1-2_bunta", 
        subtype: "roster",
        group: "1-2",
        text: "小桂 文太", 
        kana: "こがつら ぶんた", 
        romaji: "kogatsura bunta", 
        start_msg: "ぶんた「はいはい、文太な。先生、名簿つけるん早いなぁ」",
        reaction_good: "ぶんた「お、合ってるやん。さすが先生やな」", 
        reaction_bad: "ぶんた「ちょ、名前ちゃうで？新聞の誤植よりヒドいわ」",
        reaction_fast: "ぶんた「はやっ。もう終わり？段取り良すぎやろ」", 
        reaction_slow: "ぶんた「先生、のんびりしすぎやって。コーヒーでも飲んでた？」", 
        love_msg: "ぶんた「先生、俺の名前ちゃんと覚えてくれてるんやな。…なんか嬉しいわ」",
        image: "bunta.png"
    },
    { 
        id: "1-2_fumiko", 
        subtype: "roster",
        group: "1-2",
        text: "小玉 史子", 
        kana: "こだま ふみこ", 
        romaji: "kodama fumiko", 
        start_msg: "ふみこ「小玉史子です。よろしくお願いします、先生」",
        reaction_good: "ふみこ「はい…その通りです。丁寧にありがとうございます」", 
        reaction_bad: "ふみこ「あ…少し違うみたいです。ゆっくりで大丈夫ですよ」",
        reaction_fast: "ふみこ「早いですね…お仕事、慣れていらっしゃるんですね」", 
        reaction_slow: "ふみこ「大丈夫です、先生。急がなくていいですよ」", 
        love_msg: "ふみこ「先生に名前を呼ばれると…心が落ち着きます」",
        image: "fumiko.png"
    },
    { 
        id: "1-2_kome", 
        subtype: "roster",
        group: "1-2",
        text: "素麺 米", 
        kana: "そうめん こめ", 
        romaji: "soumen kome", 
        start_msg: "こめ「えっとぉ…こめです…。ねむいです…」",
        reaction_good: "こめ「あってるぅ…。えらい…」", 
        reaction_bad: "こめ「ちがうぅ…先生、ちゃんと見てぇ…」",
        reaction_fast: "こめ「はやっ！？まだ頭起きてないのにぃ…」", 
        reaction_slow: "こめ「……まだぁ？こめ、床と一体化しそう…」", 
        love_msg: "こめ「先生が呼ぶなら…がんばって返事する…」",
        image: "kome.png"
    },
    { 
        id: "1-2_yuji", 
        subtype: "roster",
        group: "1-2",
        text: "高槁 優侍", 
        kana: "たかはし ゆうじ", 
        romaji: "takahashi yuji", 
        start_msg: "ゆうじ「高槁優侍です。規律は守ります」",
        reaction_good: "ゆうじ「正確です。模範的ですね、先生」", 
        reaction_bad: "ゆうじ「誤字です。確認を怠らないでください」",
        reaction_fast: "ゆうじ「迅速ですね。無駄がありません」", 
        reaction_slow: "ゆうじ「遅いです。時間管理も重要ですよ」", 
        love_msg: "ゆうじ「先生が公正であるなら…俺は信頼します」",
        image: "yuji.png"
    },
    { 
        id: "1-2_kyo", 
        subtype: "roster",
        group: "1-2",
        text: "辻山 郷", 
        kana: "つじやま きょう", 
        romaji: "tsujiyama kyo", 
        start_msg: "きょう「……辻山、郷です」",
        reaction_good: "きょう「……合ってます」", 
        reaction_bad: "きょう「……違います。よく見てください」",
        reaction_fast: "きょう「……早いですね」", 
        reaction_slow: "きょう「……遅いですけど、問題ないです」", 
        love_msg: "きょう「……先生に覚えてもらえるのは、悪くないです」",
        image: "kyo.png"
    },
    { 
        id: "1-2_ayu", 
        subtype: "roster",
        group: "1-2",
        text: "鳥飼 歩", 
        kana: "とりかい あゆ", 
        romaji: "torikai ayu", 
        start_msg: "あゆ「はーい！鳥飼歩でーす！よろしくね先生っ」",
        reaction_good: "あゆ「やったぁ！正解〜！先生ノリいいね！」", 
        reaction_bad: "あゆ「あれ？そこ違うよ〜？先生ドジっ子？」",
        reaction_fast: "あゆ「早っ！テンポ良すぎて楽しい〜！」", 
        reaction_slow: "あゆ「んふふ、待つのも嫌いじゃないけどね？」", 
        love_msg: "あゆ「先生が名前呼んでくれるの、ちょっと特別な感じするね！」",
        image: "ayu.png"
    },
    { 
        id: "1-2_kohaku", 
        subtype: "roster",
        group: "1-2",
        text: "西 琥博", 
        kana: "にし こはく", 
        romaji: "nishi kohaku", 
        start_msg: "こはく「西琥博です。……規則に沿って記入してください、先生」",
        reaction_good: "こはく「正確です。模範的ですね」", 
        reaction_bad: "こはく「違います。名簿は遊びじゃありません」",
        reaction_fast: "こはく「……早いですね。無駄がないのは評価します」", 
        reaction_slow: "こはく「遅いです。後ろが詰まっています」", 
        love_msg: "こはく「先生が規律を守る方で……安心しました」",
        image: "kohaku.png"
    },
    { 
        id: "1-2_megumu", 
        subtype: "roster",
        group: "1-2",
        text: "根峯 萠", 
        kana: "ねみね めぐむ", 
        romaji: "nemine megumu", 
        start_msg: "めぐむ「根峯萠です。はい、どうぞ先生」",
        reaction_good: "めぐむ「うん、合ってる。助かるわ」", 
        reaction_bad: "めぐむ「そこ違うでしょ。ちゃんと見なさい」",
        reaction_fast: "めぐむ「仕事早いじゃない。嫌いじゃないわ」", 
        reaction_slow: "めぐむ「ちょっと遅いわね……まあいいけど」", 
        love_msg: "めぐむ「先生がちゃんとしてると、こっちも安心するのよ」",
        image: "megumu.png"
    },
    { 
        id: "1-2_yutasuke", 
        subtype: "roster",
        group: "1-2",
        text: "身浦 柚太允", 
        kana: "みうら ゆたすけ", 
        romaji: "miura yutasuke", 
        start_msg: "ゆたすけ「身浦柚太允です。よろしくお願いします、先生」",
        reaction_good: "ゆたすけ「はい、合うちゅうと思います」", 
        reaction_bad: "ゆたすけ「あれ…ちょっと違うみたいです」",
        reaction_fast: "ゆたすけ「はやいですねぇ。びっくりしました」", 
        reaction_slow: "ゆたすけ「大丈夫です。急がんでください」", 
        love_msg: "ゆたすけ「先生に名前を呼んでもらえると、嬉しいです」",
        image: "yutasuke.png"
    },
    { 
        id: "1-2_suo", 
        subtype: "roster",
        group: "1-2",
        text: "村瀬 蘇芳", 
        kana: "むらせ すおう", 
        romaji: "murase suo", 
        start_msg: "すおう「村瀬蘇芳。……やだな、形式ばって」",
        reaction_good: "すおう「へぇ、合ってるじゃん。意外」", 
        reaction_bad: "すおう「そこ違うよ先生。雑だねぇ」",
        reaction_fast: "すおう「早すぎ。さては慣れてるね？」", 
        reaction_slow: "すおう「……まだ？ま、待つけどさ」", 
        love_msg: "すおう「先生、俺の名前ちゃんと覚えたんだ。ふぅん」",
        image: "suo.png"
    },
    { 
        id: "1-2_erua", 
        subtype: "roster",
        group: "1-2",
        text: "茂地 榎留愛", 
        kana: "もじ えるあ", 
        romaji: "moji erua", 
        start_msg: "えるあ「茂地榎留愛。よろしく、先生」",
        reaction_good: "えるあ「うん、合ってるよ」", 
        reaction_bad: "えるあ「そこ違う。ちゃんと確認しな」",
        reaction_fast: "えるあ「早いね。要領いいじゃん」", 
        reaction_slow: "えるあ「遅いけど…まあ聞くから続けて」", 
        love_msg: "えるあ「先生、意外とちゃんとしてるんだね」",
        image: "erua.png"
    },
    { 
        id: "1-2_mibana", 
        subtype: "roster",
        group: "1-2",
        text: "本梶 美花", 
        kana: "もとかじ みばな", 
        romaji: "motokaji mibana", 
        start_msg: "みばな「……本梶美花。以上」",
        reaction_good: "みばな「……合ってる」", 
        reaction_bad: "みばな「違う。ちゃんと見て」",
        reaction_fast: "みばな「……早いのは嫌いじゃない」", 
        reaction_slow: "みばな「遅い。……別に怒ってないけど」", 
        love_msg: "みばな「……先生が呼ぶなら、返事する」",
        image: "mibana.png"
    },
    // --- 1年3組 ---
    { 
        id: "1-3_rinon",
        subtype: "roster",
        group: "1-3",
        text: "浅苧 李音", 
        kana: "あさお りのん", 
        romaji: "asao rinon", 
        start_msg: "りのん「浅苧李音。……覚えてもらえると助かります、先生」",
        reaction_good: "りのん「問題ありません。正確です」", 
        reaction_bad: "りのん「違います。そこ、ちゃんと見てください」",
        reaction_fast: "りのん「早いですね。要領がいいのは評価します」", 
        reaction_slow: "りのん「少し遅いですが……許容範囲です」", 
        love_msg: "りのん「先生が名前を呼んでくれるなら、応えます」",
        image: "rinon.png"
    },
    { 
        id: "1-3_kisora",
        subtype: "roster",
        group: "1-3",
        text: "井之尾 希空", 
        kana: "いのお きそら", 
        romaji: "inoo kisora", 
        start_msg: "きそら「……き、きそらです……」",
        reaction_good: "きそら「……あ、あってます……」", 
        reaction_bad: "きそら「……ちが、います……」",
        reaction_fast: "きそら「……はや……」", 
        reaction_slow: "きそら「……ゆっくりで、いいです……」", 
        love_msg: "きそら「……きそらって、呼んで……」",
        image: "kisora.png"
    },
    { 
        id: "1-3_soji",
        subtype: "roster",
        group: "1-3",
        text: "牛沢 蒼司", 
        kana: "うしざわ そうじ", 
        romaji: "ushizawa soji", 
        start_msg: "そうじ「牛沢蒼司！よっしゃ、名簿な！」",
        reaction_good: "そうじ「いいねぇ先生！その調子でイこうぜ！」", 
        reaction_bad: "そうじ「おいおい、そこ違うだろ！？」",
        reaction_fast: "そうじ「はっや！イキってるねぇ先生！」", 
        reaction_slow: "そうじ「ん？まぁ待つけどさ〜」", 
        love_msg: "そうじ「先生に名前呼ばれると、気合入るわ！」",
        image: "soji.png"
    },
    { 
        id: "1-3_ritsu",
        subtype: "roster",
        group: "1-3",
        text: "大江 浬積", 
        kana: "おおえ りつ", 
        romaji: "ooe ritsu", 
        start_msg: "りつ「やあ先生☆大江浬積だよ」",
        reaction_good: "りつ「完璧だね☆さすが先生！」", 
        reaction_bad: "りつ「えっ…そこ間違えるの？ちょっとショック…」",
        reaction_fast: "りつ「速い！美しい仕事だね☆」", 
        reaction_slow: "りつ「ゆっくりなのも…嫌いじゃないけどさ」", 
        love_msg: "りつ「先生に名前呼ばれるの、結構好きなんだ」",
        image: "ritsu.png"
    },
    { 
        id: "1-3_honoka",
        subtype: "roster",
        group: "1-3",
        text: "大野 蓬乃果", 
        kana: "おおの ほのか", 
        romaji: "oono honoka", 
        start_msg: "ほのか「大野蓬乃果。はい次」",
        reaction_good: "ほのか「ふーん、正解ね」", 
        reaction_bad: "ほのか「は？そこ違うでしょ」",
        reaction_fast: "ほのか「早いのはいいけど雑じゃない？」", 
        reaction_slow: "ほのか「まだ？時間かかりすぎ」", 
        love_msg: "ほのか「……ま、先生なら悪くないかもね」",
        image: "honoka.png"
    },
    { 
        id: "1-3_yui",
        subtype: "roster",
        group: "1-3",
        text: "土市 結衣", 
        kana: "つちいち ゆい", 
        romaji: "tsuchiichi yui", 
        start_msg: "ゆい「ゆいだよ〜♡よろしくね、先生」",
        reaction_good: "ゆい「えへ、できてる〜♡」", 
        reaction_bad: "ゆい「えぇ〜？そこ間違えちゃうの？」",
        reaction_fast: "ゆい「はやっ♡ゆいのこと好きすぎ？」", 
        reaction_slow: "ゆい「ん〜、待たされるの寂しいな」", 
        love_msg: "ゆい「先生、今日もゆいの名前呼んで♡」",
        image: "yui.png"
    },
    { 
        id: "1-3_tayori",
        subtype: "roster",
        group: "1-3",
        text: "自念 頼", 
        kana: "じねん たより", 
        romaji: "jinen tayori", 
        start_msg: "たより「自念頼です。よろしくお願いします、先生」",
        reaction_good: "たより「はい、合っています」", 
        reaction_bad: "たより「あれ、少し違いますね」",
        reaction_fast: "たより「早いですね。助かります」", 
        reaction_slow: "たより「大丈夫です。急がなくて」", 
        love_msg: "たより「先生に名前を呼ばれると、安心します」",
        image: "tayori.png"
    },
    { 
        id: "1-3_mugi",
        subtype: "roster",
        group: "1-3",
        text: "素麺 麦", 
        kana: "そうめん むぎ", 
        romaji: "somen mugi", 
        start_msg: "むぎ「そうめんむぎだよ〜！！よろしくね先生〜！！」",
        reaction_good: "むぎ「えっ！？あってる！？すごーい！！！」", 
        reaction_bad: "むぎ「ちがうちがう！！そこ全然ちがうってば！！」",
        reaction_fast: "むぎ「はやっ！！天才！？天才なの先生！？」", 
        reaction_slow: "むぎ「え〜？まだ〜？むぎ眠くなってきた〜」", 
        love_msg: "むぎ「先生が名前呼んでくれるの、だいすき〜！！」",
        image: "mugi.png"
    },
    { 
        id: "1-3_aoi",
        subtype: "roster",
        group: "1-3",
        text: "二十八 碧", 
        kana: "つずや あおい", 
        romaji: "tsuzuya aoi", 
        start_msg: "あおい「二十八碧です。よろしくお願いします」",
        reaction_good: "あおい「……はい、合っています」", 
        reaction_bad: "あおい「……少し違いますね」",
        reaction_fast: "あおい「早いですね。助かります」", 
        reaction_slow: "あおい「大丈夫です。待てますから」", 
        love_msg: "あおい「先生に名前を呼ばれると……少し嬉しいです」",
        image: "aoi.png"
    },
    { 
        id: "1-3_yuhi",
        subtype: "roster",
        group: "1-3",
        text: "直宿 夕日", 
        kana: "とのい ゆうひ", 
        romaji: "tonoi yuhi", 
        start_msg: "ゆうひ「直宿夕日な！よろしく〜w」",
        reaction_good: "ゆうひ「お、正解じゃんw」", 
        reaction_bad: "ゆうひ「は？それ俺じゃないんだけどw」",
        reaction_fast: "ゆうひ「早すぎw先生ノリ良すぎな」", 
        reaction_slow: "ゆうひ「おっそwまぁいいけど」", 
        love_msg: "ゆうひ「先生に名前呼ばれるとちょっとテンション上がるわw」",
        image: "yuhi.png"
    },
    { 
        id: "1-3_atsushi",
        subtype: "roster",
        group: "1-3",
        text: "天王寺 淳志", 
        kana: "てんのうじ あつし", 
        romaji: "tennoji atsushi", 
        start_msg: "あつし「天王寺淳志だよ〜。よろしくね先生〜」",
        reaction_good: "あつし「お〜！ばっちりだね〜！」", 
        reaction_bad: "あつし「あれ？ちがう星の人になってる？」",
        reaction_fast: "あつし「はやいね〜！星みたい！」", 
        reaction_slow: "あつし「うんうん、待つのも好きだよ〜」", 
        love_msg: "あつし「先生が呼んでくれるなら、いくらでも輝くよ〜！」",
        image: "atsushi.png"
    },
    { 
        id: "1-3_kuu",
        subtype: "roster",
        group: "1-3",
        text: "中井 空羽", 
        kana: "なかい くう", 
        romaji: "nakai kuu", 
        start_msg: "くう「……中井空羽」",
        reaction_good: "くう「……合ってる」", 
        reaction_bad: "くう「チッ……違う」",
        reaction_fast: "くう「……無駄がないな」", 
        reaction_slow: "くう「……別に、急がなくていい」", 
        love_msg: "くう「……名前、覚えてくれてるならいい」",
        image: "kuu.png"
    },
    { 
        id: "1-3_noriomi",
        subtype: "roster",
        group: "1-3",
        text: "永丘 紀臣", 
        kana: "ながおか のりおみ", 
        romaji: "nagaoka noriomi", 
        start_msg: "のりおみ「永丘紀臣です。どうぞよろしく」",
        reaction_good: "のりおみ「ええ、正しいですね」", 
        reaction_bad: "のりおみ「……それは僕ではありませんよ」",
        reaction_fast: "のりおみ「早いですね。効率的で助かります」", 
        reaction_slow: "のりおみ「問題ありません。待つのは慣れています」", 
        love_msg: "のりおみ「先生が呼ぶなら……それも一つの関係ですね」",
        image: "noriomi.png"
    },
    { 
        id: "1-3_meri", 
        subtype: "roster",
        group: "1-3",
        text: "仲村 愛梨", 
        kana: "なかむら めり", 
        romaji: "nakamura meri", 
        start_msg: "めり「えっと……な、仲村愛梨です。あの、書きにくかったら言ってください…失礼でしたら本当にすみません…」",
        reaction_good: "めり「ぁ……ありがとうございます。ちゃんと書いてもらえて、嬉しいです……」", 
        reaction_bad: "めり「あ……あの、その字…ちょっと違うかもです……す、すみません……」",
        reaction_fast: "めり「は、はやい……！先生、お仕事できる方なんですね……」", 
        reaction_slow: "めり「だ、大丈夫です……！ゆっくりで……わたし、待つのは慣れてますから……」", 
        love_msg: "めり「先生……今日も名前、呼んでくださるんですね……ありがとうございます……」",
        image: "meri.png"
    },
    { 
        id: "1-3_soshi", 
        subtype: "roster",
        group: "1-3",
        text: "美戸 創至", 
        kana: "みと そうし", 
        romaji: "mito soshi", 
        start_msg: "そうし「ぼく、美戸創至です。あ、名前の構造ちょっと面白くないですか？特許取れそうじゃないです？」",
        reaction_good: "そうし「いいですね、その書き方。効率も美しさもあります」", 
        reaction_bad: "そうし「あれ……そこ違います。惜しいです、改良案出します？」",
        reaction_fast: "そうし「もう！？先生、思考速度かなり高いですね」", 
        reaction_slow: "そうし「待つ時間もアイデアが湧くので、全然平気ですよ」", 
        love_msg: "そうし「先生に名前呼ばれると、なんか……ちゃんと存在してる感じします」",
        image: "soshi.png"
    },
    { 
        id: "1-3_kouta", 
        subtype: "roster",
        group: "1-3",
        text: "桃山 小歌", 
        kana: "ももやま こうた", 
        romaji: "momoyama kouta", 
        start_msg: "こうた「桃山小歌です。……えっと、きちんと書いていただけると助かります」",
        reaction_good: "こうた「はい、完璧です。ありがとうございます、先生」", 
        reaction_bad: "こうた「……すみません、そこ間違ってます。修正お願いします」",
        reaction_fast: "こうた「早いですね。流石です」", 
        reaction_slow: "こうた「急ぎませんので、大丈夫ですよ」", 
        love_msg: "こうた「先生に名前を呼ばれると……少し安心します」",
        image: "kouta.png"
    },
    { 
        id: "1-3_misaki", 
        subtype: "roster",
        group: "1-3",
        text: "勇惣 岬咲", 
        kana: "ゆそう みさき", 
        romaji: "yuso misaki", 
        start_msg: "みさき「ゆ、勇惣岬咲です……あの、漢字むずかしくて……ごめんなさい……」",
        reaction_good: "みさき「わぁ……ありがとうございます。お兄ちゃんにも見せたいです」", 
        reaction_bad: "みさき「あ……そこ、ちょっと違うかも……すみません……」",
        reaction_fast: "みさき「はやい……！先生、すごいです……」", 
        reaction_slow: "みさき「だ、大丈夫です……！待つの、慣れてますから……」", 
        love_msg: "みさき「先生……名前、呼んでくれて……ありがとうございます」",
        image: "misaki.png"
    },
    { 
        id: "1-3_nagisa", 
        subtype: "roster",
        group: "1-3",
        text: "代々木 渚", 
        kana: "よよぎ なぎさ", 
        romaji: "yoyogi nagisa", 
        start_msg: "なぎさ「代々木なぎさ！あ、渚ね。波みたいでしょ」",
        reaction_good: "なぎさ「いいじゃん！先生、ノリわかってる〜！」", 
        reaction_bad: "なぎさ「え、それ違くない？まぁいっか、冗談冗談」",
        reaction_fast: "なぎさ「はやっ！クマより俊敏じゃん！」", 
        reaction_slow: "なぎさ「ゆっくりでいいよ〜、急ぐと疲れるしさ」", 
        love_msg: "なぎさ「先生に名前呼ばれるの、ちょっと好きかも」",
        image: "nagisa.png"
    },
    { 
        id: "1-3_hibiki", 
        subtype: "roster",
        group: "1-3",
        text: "楽得 響", 
        kana: "らくえ ひびき", 
        romaji: "rakue hibiki", 
        start_msg: "ひびき「楽得響や！！ちゃんと書けよ先生！！」",
        reaction_good: "ひびき「おっ、やるやんけ！！」", 
        reaction_bad: "ひびき「ちゃうやろ！！目ぇついとんか！！」",
        reaction_fast: "ひびき「はっや！！気合入っとるな！！」", 
        reaction_slow: "ひびき「おっそ！！コケコッコー！！朝来たで！！」", 
        love_msg: "ひびき「先生に名前呼ばれるん、悪ないな！！」",
        image: "hibiki.png"
    },
    // --- 1年4組 ---
    { 
        id: "1-4_yukihiko", 
        subtype: "roster",
        group: "1-4",
        text: "池里 雪彦", 
        kana: "いけさと ゆきひこ", 
        romaji: "ikesato yukihiko", 
        start_msg: "ゆきひこ「わち、池里雪彦〜！あ、ゆきひこ団の団長でもあるんだよ！」",
        reaction_good: "ゆきひこ「おぉ〜！先生すごっ！団員にしてあげてもいいよ！」", 
        reaction_bad: "ゆきひこ「えっ、そこ違くない！？わちでも分かるよ！？」",
        reaction_fast: "ゆきひこ「はやっ！？わちより先に終わった！？」", 
        reaction_slow: "ゆきひこ「まだ〜？わち、もう別の落書き始めちゃったよ〜」", 
        love_msg: "ゆきひこ「先生が名前呼ぶとさ、なんか照れるんだけど！」",
        image: "yukihiko.png"
    },
    { 
        id: "1-4_yuuki", 
        subtype: "roster",
        group: "1-4",
        text: "市川 宥暉", 
        kana: "いちかわ ゆうき", 
        romaji: "ichikawa yuuki", 
        start_msg: "ゆうき「市川宥暉です！先生、あとで占いしてあげよっか？」",
        reaction_good: "ゆうき「うんうん、いい流れ来てるよ〜！」", 
        reaction_bad: "ゆうき「あれ？星の巡り的にそこ違うかも？」",
        reaction_fast: "ゆうき「はやっ！今日ツイてるね、先生！」", 
        reaction_slow: "ゆうき「ゆっくりで大丈夫〜、運命は逃げないからさ」", 
        love_msg: "ゆうき「先生に名前呼ばれると、ちょっと運気上がる気する」",
        image: "yuuki.png"
    },
    { 
        id: "1-4_maaya", 
        subtype: "roster",
        group: "1-4",
        text: "卯瀧 真綾", 
        kana: "うたき まあや", 
        romaji: "utaki maaya", 
        start_msg: "まあや「卯瀧真綾です。どうぞ、よろしゅうお願いいたしますね」",
        reaction_good: "まあや「ふふ……お上手ですね、先生」", 
        reaction_bad: "まあや「あら……そこ、少し違うようですわ」",
        reaction_fast: "まあや「まあ……お仕事が早うて、感心します」", 
        reaction_slow: "まあや「ゆっくりでええんですよ。時間も思い出のひとつですけん」", 
        love_msg: "まあや「先生に名を呼ばれるの、好きなんです」",
        image: "maaya.png"
    },
    { 
        id: "1-4_uruu", 
        subtype: "roster",
        group: "1-4",
        text: "槐原 潤", 
        kana: "えずはら うるう", 
        romaji: "ezuhara uruu", 
        start_msg: "うるう「槐原潤です。あ、普通に書いてもらえりゃよかですよ」",
        reaction_good: "うるう「うん、問題なかですね」", 
        reaction_bad: "うるう「あー……そこ、違うですよ」",
        reaction_fast: "うるう「はやかですね。助かります」", 
        reaction_slow: "うるう「急がんでよかですよ。待つの慣れとるけん」", 
        love_msg: "うるう「……先生に名前呼ばれるの、悪くなかですね」",
        image: "uruu.png"
    },
    { 
        id: "1-4_haruka", 
        subtype: "roster",
        group: "1-4",
        text: "栢島 遥香", 
        kana: "かやしま はるか", 
        romaji: "kayashima haruka", 
        start_msg: "はるか「栢島遥香です！よろしくお願いしますっ！」",
        reaction_good: "はるか「わぁ！ありがとうございます先生！」", 
        reaction_bad: "はるか「あれ？そこちょっと違いますよ〜？」",
        reaction_fast: "はるか「早いですね！さすがです！」", 
        reaction_slow: "はるか「大丈夫です！ゆっくりで！」", 
        love_msg: "はるか「先生に名前呼ばれると元気出ます！」",
        image: "haruka.png"
    },
    { 
        id: "1-4_sui", 
        subtype: "roster",
        group: "1-4",
        text: "狩生 彗威", 
        kana: "かりう すい", 
        romaji: "kariu sui", 
        start_msg: "すい「狩生彗威。……ちゃんと書けよ？」",
        reaction_good: "すい「……まぁ、いいじゃん」", 
        reaction_bad: "すい「は？違うだろ。見て書けよ」",
        reaction_fast: "すい「はや。やるじゃん先生」", 
        reaction_slow: "すい「遅ぇ……けど待つ」", 
        love_msg: "すい「……名前呼ばれるの、嫌いじゃねぇ」",
        image: "sui.png"
    },
    { 
        id: "1-4_ayato", 
        subtype: "roster",
        group: "1-4",
        text: "後等 綺乙", 
        kana: "ごとう あやと", 
        romaji: "goto ayato", 
        start_msg: "あやと「オラ、あやとだっぺ！」",
        reaction_good: "あやと「おっ！先生じょうずだっぺ！」", 
        reaction_bad: "あやと「そこ違うっぺよ！納豆投げるぞ！」",
        reaction_fast: "あやと「はやっ！オラびっくりしたっぺ！」", 
        reaction_slow: "あやと「まだ〜？オラ椅子から落ちそうだっぺ」", 
        love_msg: "あやと「先生に名前呼ばれるの、なんかいいな！」",
        image: "ayato.png"
    },
    { 
        id: "1-4_mikoto", 
        subtype: "roster",
        group: "1-4",
        text: "櫻井 甫詞", 
        kana: "さくらい みこと", 
        romaji: "sakurai mikoto", 
        start_msg: "みこと「櫻井甫詞やで。よろしゅうな、先生」",
        reaction_good: "みこと「ふふ、やるやん。判断が早いわ」", 
        reaction_bad: "みこと「……そこ違うで？先生、気配が甘いわ」",
        reaction_fast: "みこと「はやっ。さすがやな、無駄がない」", 
        reaction_slow: "みこと「ゆっくりでもええけど、背後は気ぃつけや？」", 
        love_msg: "みこと「先生に名前呼ばれるん、嫌いやないで」",
        image: "mikoto.png"
    },
    { 
        id: "1-4_taichi", 
        subtype: "roster",
        group: "1-4",
        text: "土川 卓逸", 
        kana: "つちかわ たいち", 
        romaji: "tsuchikawa taichi", 
        start_msg: "たいち「土川卓逸です……よろしくお願いします」",
        reaction_good: "たいち「はい、合ってます。ありがとうございます」", 
        reaction_bad: "たいち「あの……そこ、間違ってます」",
        reaction_fast: "たいち「はやいですね……助かります」", 
        reaction_slow: "たいち「だ、大丈夫です。待てますので……」", 
        love_msg: "たいち「名前、ちゃんと呼んでもらえると安心します」",
        image: "taichi.png"
    },
    { 
        id: "1-4_roi", 
        subtype: "roster",
        group: "1-4",
        text: "손 로이", 
        kana: "そん ろい", 
        romaji: "son roi", 
        start_msg: "ろい「손ロイ……です。問題ないニダ」",
        reaction_good: "ろい「正確ですね。評価します」", 
        reaction_bad: "ろい「違います。確認不足ニダ」",
        reaction_fast: "ろい「速い判断……悪くない」", 
        reaction_slow: "ろい「遅いですが……まぁ、許容範囲ニダ」", 
        love_msg: "ろい「先生に名を呼ばれるのは……少し不思議ニダ」",
        image: "roi.png"
    },
    { 
        id: "1-4_sayaka", 
        subtype: "roster",
        group: "1-4",
        text: "寺田 山茶花", 
        kana: "てらだ さやか", 
        romaji: "teruada sayaka", 
        start_msg: "さやか「寺田山茶花です……よろしゅうお願いします」",
        reaction_good: "さやか「あ……合ってます。ありがとうございます」", 
        reaction_bad: "さやか「そ、そこ……違うと思いますえ」",
        reaction_fast: "さやか「は、早うて……びっくりしました」", 
        reaction_slow: "さやか「ゆっくりでええですよ。急がはらへんし」", 
        love_msg: "さやか「名前呼んでもろて……嬉しいです」",
        image: "sayaka.png"
    },
    { 
        id: "1-4_akatsuki", 
        subtype: "roster",
        group: "1-4",
        text: "二瓶 暁", 
        kana: "にへい あかつき", 
        romaji: "nihei akatsuki", 
        start_msg: "あかつき「……二瓶暁」",
        reaction_good: "あかつき「……別に。合ってるならいい」", 
        reaction_bad: "あかつき「違う。……ちゃんと見ろよ」",
        reaction_fast: "あかつき「……はやいな」", 
        reaction_slow: "あかつき「遅くても……別にいい」", 
        love_msg: "あかつき「……名前呼ぶな。……嫌じゃないけど」",
        image: "akatsuki.png"
    },
    { 
        id: "1-4_enya", 
        subtype: "roster",
        group: "1-4",
        text: "暗 援也", 
        kana: "はらい えんや", 
        romaji: "harai enya", 
        start_msg: "えんや「暗援也！この世界を救う男だ！」",
        reaction_good: "えんや「さすがだな先生！オレを見る目がある！」", 
        reaction_bad: "えんや「え？そこミスる？人類の未来大丈夫？」",
        reaction_fast: "えんや「はやっ！運命がオレを呼んでる！」", 
        reaction_slow: "えんや「まだ？まぁ焦らず英雄を待て！」", 
        love_msg: "えんや「先生に名前呼ばれるの……悪くねぇな」",
        image: "enya.png"
    },
    { 
        id: "1-4_maya", 
        subtype: "roster",
        group: "1-4",
        text: "保福 真夜", 
        kana: "ほふく まや", 
        romaji: "hofuku maya", 
        start_msg: "まや「……保福真夜。ちゃんと覚えてね」",
        reaction_good: "まや「ふふ……合ってる。先生、えらい」", 
        reaction_bad: "まや「……違う。ねぇ、わざと？」",
        reaction_fast: "まや「はや……。そんなに急いでどこ行くの？」", 
        reaction_slow: "まや「……遅い。でも待ってるから」", 
        love_msg: "まや「先生が名前呼ぶの……まや、好き」",
        image: "maya.png"
    },
    { 
        id: "1-4_yoru", 
        subtype: "roster",
        group: "1-4",
        text: "御厨 夜", 
        kana: "みくりや よる", 
        romaji: "mikuriya yoru", 
        start_msg: "よる「御厨夜ばい……眠かぁ」",
        reaction_good: "よる「おー、合っとるね。よかよか」", 
        reaction_bad: "よる「そこ違うばい……目ぇ覚めたし」",
        reaction_fast: "よる「はやっ。まだ夜やろ……」", 
        reaction_slow: "よる「遅かねぇ。まぁ、よかけど」", 
        love_msg: "よる「先生に名前呼ばれると……ちょっと起きれる」",
        image: "yoru.png"
    },
    { 
        id: "1-4_sadama", 
        subtype: "roster",
        group: "1-4",
        text: "満山 渉守", 
        kana: "みつやま さだま", 
        romaji: "mitsuyama sadama", 
        start_msg: "さだま「満山渉守だ。状況は把握している」",
        reaction_good: "さだま「問題ない。正確だ」", 
        reaction_bad: "さだま「誤記だ。訂正を勧める」",
        reaction_fast: "さだま「迅速だな。評価できる」", 
        reaction_slow: "さだま「遅延か……だが許容範囲だ」", 
        love_msg: "さだま「先生に名を呼ばれるのは……悪くない」",
        image: "sadama.png"
    },
    { 
        id: "1-4_kaji", 
        subtype: "roster",
        group: "1-4",
        text: "源口 舵", 
        kana: "みなぐち かじ", 
        romaji: "minaguchi kaji", 
        start_msg: "かじ「源口舵！よろしくな、先生！」",
        reaction_good: "かじ「おっ、合ってるじゃん！やった！」", 
        reaction_bad: "かじ「え、ちがくね？まぁいっか！」",
        reaction_fast: "かじ「はやっ！なんかすげー！」", 
        reaction_slow: "かじ「ゆっくりでいいよ〜」", 
        love_msg: "かじ「先生に名前呼ばれるの、なんか嬉しいな！」",
        image: "kaji.png"
    },
    { 
        id: "1-4_alice", 
        subtype: "roster",
        group: "1-4",
        text: "恵 愛麗糸", 
        kana: "めぐみ ありす", 
        romaji: "megumi alice", 
        start_msg: "ありす「……恵愛麗糸。起こさないで」",
        reaction_good: "ありす「……合ってるならいい」", 
        reaction_bad: "ありす「違う。……眠いのに」",
        reaction_fast: "ありす「……もう終わったの？」", 
        reaction_slow: "ありす「……まだ？寝る」", 
        love_msg: "ありす「先生の声……嫌いじゃない」",
        image: "alice.png"
    },
    { 
        id: "1-4_shunki", 
        subtype: "roster",
        group: "1-4",
        text: "吉岡 俊樹", 
        kana: "よしおか しゅんき", 
        romaji: "yoshioka shunki", 
        start_msg: "しゅんき「吉岡俊樹。まぁ適当によろしく」",
        reaction_good: "しゅんき「おー、正解正解」", 
        reaction_bad: "しゅんき「そこミスる？先生も苦労性だねぇ」",
        reaction_fast: "しゅんき「はやいねぇ。フクロウもびっくり」", 
        reaction_slow: "しゅんき「まだ？まぁのんびりでいこ」", 
        love_msg: "しゅんき「先生に名前呼ばれると……悪くない」",
        image: "shunki.png"
    },
    // --- 2年1組 ---
    { 
        id: "2-1_miriya", 
        subtype: "roster", 
        group: "2-1", // ★クラス指定
        text: "相原 美里耶", 
        kana: "あいはらみりや", 
        romaji: "aihara miriya", 
        start_msg: "みりや「…業務遂行します。」", 
        reaction_good: "みりや「迅速な対応、感謝します。」", 
        reaction_bad: "みりや「…ミスですか？珍しい。」", 
        reaction_fast: "みりや「速い…効率的。評価します。」",
        reaction_slow: "みりや「問題ありません。正確性を優先してください。」",
        love_msg: "みりや「また私ですか。…業務効率を考えても、悪くありません。」",
        image: "miriya.png"    
    },
    { 
        id: "2-1_hitori", 
        subtype: "roster",
        group: "2-1",
        text: "阿見 一人", 
        kana: "あみひとり", 
        romaji: "ami hitori", 
        start_msg: "ひとり「俺の真名（なまえ）を刻むがいい…！」",
        reaction_good: "ひとり「ククク…悪くない手際だ。」", 
        reaction_bad: "ひとり「おいおい、右手が震えてるぞ？」",
        reaction_fast: "ひとり「残像が見えるだと…！？貴様、何者だ…！」",
        reaction_slow: "ひとり「ふっ、闇の力に飲まれたか…遅いぞ。」",
        love_msg: "ひとり「また俺様を選んだのか…？フッ、俺の契約者はお前だけだ…。」",
        image: "hitori.png"
    },
    {
        id: "2-1_ketsui",
        subtype: "roster",
        group: "2-1",
        text: "海老ケ迫 決意",
        kana: "えびがさこけつい",
        romaji: "ebigasako ketsui",
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
        group: "2-1",
        text: "岡崎 愛芽里",
        kana: "おかざきあめり",
        romaji: "okazaki ameri",
        start_msg: "あめり「…あ、あの……よろしくお願いします、せんせ…。」",
        reaction_good: "あめり「す、すごい…。せんせ、指の動ききれい…。」",
        reaction_bad: "あめり「わ、わっ…！み、ミス…？だ、大丈夫、やよ…？」",
        reaction_fast: "あめり「ひゃっ…！そんな速く動くん…？びっくりした…。」",
        reaction_slow: "あめり「えと…ゆっくりでも、…だいじょぶ、やよ。」",
        love_msg: "あめり「また…私の名前選んでくれたが…？ふふ、なんか胸あつなる…。」",
        image: "ameri.png",
    },
    {
        id: "2-1_shogo",
        subtype: "roster",
        group: "2-1",
        text: "神崎 奨午",
        kana: "かんざきしょうご",
        romaji: "kanzaki shogo",
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
        group: "2-1",
        text: "橘定 由子",
        kana: "きつじょうゆこ",
        romaji: "kitsujou yuko",
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
        group: "2-1",
        text: "霧生 曙",
        kana: "きりうあきら",
        romaji: "kiriu akira",
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
        group: "2-1",
        text: "久堂 朋己",
        kana: "くどうともき",
        romaji: "kudou tomoki",
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
        group: "2-1",
        text: "君国 航",
        kana: "くんこくわたる",
        romaji: "kunkoku wataru",
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
        group: "2-1",
        text: "更級 柘榴",
        kana: "さらしなざくろ",
        romaji: "sarashina zakuro",
        start_msg: "ざくろ「……えっ、お、俺…？あ、その…おねがいします…。」",
        reaction_good: "ざくろ「う、打つの…早いんですね…。すご…。」",
        reaction_bad: "ざくろ「ひっ…ミス…？だ、大丈夫…俺よくやるし…。」",
        reaction_fast: "ざくろ「は、はや…っ！？て、手…見えへん…！」",
        reaction_slow: "ざくろ「ゆっくりで、ええよ…。お、俺もゆっくりやし…。」",
        love_msg: "ざくろ「ま、また俺…？え、え、え…そんな、選んでくれるん…？」",
        image: "zakuro.png"
    },
    {
        id: "2-1_kotori",
        subtype: "roster",
        group: "2-1",
        text: "酒々井 小鳥",
        kana: "しすいことり",
        romaji: "shisui kotori",
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
        group: "2-1",
        text: "鈴木 幹菜",
        kana: "すずきみきな",
        romaji: "suzuki mikina",
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
        group: "2-1",
        text: "寸土 壱芹",
        kana: "すどういせり",
        romaji: "sudou iseri",
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
        group: "2-1",
        text: "猫谷 茉莉亜",
        kana: "ねこやまりあ",
        romaji: "nekoya maria",
        start_msg: "まりあ「先生の入力…今日も見守っていますね。」",
        reaction_good: "まりあ「すごく丁寧です…えへへ、嬉しいです。」",
        reaction_bad: "まりあ「…だ、大丈夫です。ゆっくりでいいんですよ？」",
        reaction_fast: "まりあ「わっ…すごい速さ…！天使の羽みたいに軽やか…！」",
        reaction_slow: "まりあ「落ち着いて打てる人って、なんだか信頼できます…。」",
        love_msg: "まりあ「また私を…選んでくれたんですね。先生のやさしさ、ちゃんと届いてます。」",
        image: "maria.png"
    },
    {
        id: "2-1_migiwa",
        subtype: "roster",
        group: "2-1",
        text: "舟濤 汀",
        kana: "ふなとみぎわ",
        romaji: "funato migiwa",
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
        group: "2-1",
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
        group: "2-1",
        text: "恵 時生",
        kana: "めぐみじは",
        romaji: "megumi jiha",
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
        group: "2-1",
        text: "用達 怜",
        kana: "ようだてれい",
        romaji: "yodate rei",
        start_msg: "れい「入力をお願いします。…丁寧に、ね。」",
        reaction_good: "れい「完璧。見事です。」",
        reaction_bad: "れい「ここ、少し違っています。もう一度…できますよね？」",
        reaction_fast: "れい「すごい速度…まるで黒羽が空気を切るみたい。」",
        reaction_slow: "れい「ゆっくりは悪くありません。精度が高いなら、それが最適解です。」",
        love_msg: "れい「また私？…ふふ、選ばれるのって悪くないですね。あなた、優秀です。」",
        image: "rei.png"
    },

    // --- 2年2組 ---
    {
        id: "2-2_yae",
        subtype: "roster",
        group: "2-2", // 設定上のクラス
        text: "藍河 八重",
        kana: "あいかわやえ",
        romaji: "aikawa yae",
        start_msg: "やえ「……先生、呼んだ？」",
        reaction_good: "やえ「……うん。間違ってない。」",
        reaction_bad: "やえ「……そこ、違うよ。」",
        reaction_fast: "やえ「……速いね。ちょっと驚いた。」",
        reaction_slow: "やえ「……待ってたよ。焦らなくていい。」",
        love_msg: "やえ「……先生が呼ぶと、なんか静かになる…不思議…。」",
        image: "yae.png",
    },
    {
        id: "2-2_akari",
        subtype: "roster",
        group: "2-2",
        text: "味野 灯莉",
        kana: "あじのあかり",
        romaji: "ajino akari",
        start_msg: "あかり「はーいっ！せんせい、あかり来たよーっ🌟」",
        reaction_good: "あかり「すごっ！ねぇねぇ今の見た！？✨」",
        reaction_bad: "あかり「うへっ！？ま、まちがえてるよ〜〜💦」",
        reaction_fast: "あかり「はっやっ！？天才！？好き！！」",
        reaction_slow: "あかり「おっそ〜い！わたし寝ちゃうよ〜😪」",
        love_msg: "あかり「ねぇ…私の名前いっぱい打ってくれるの嬉しい…もっと呼んで？」",
        image: "akari.png",
    },
    {
        id: "2-2_enishi",
        subtype: "roster",
        group: "2-2",
        text: "鼬川 絵丹師",
        kana: "いたちがわえにし",
        romaji: "itachigawa enishi",
        start_msg: "えにし「……呼んだが？」",
        reaction_good: "えにし「ふむ。悪うない動きや。」",
        reaction_bad: "えにし「そこ、ズレとる。見直せ。」",
        reaction_fast: "えにし「速っ……。筆の走りみたいやな。」",
        reaction_slow: "えにし「遅い。乾き待ちの絵の具みたいや。」",
        love_msg: "えにし「先生、ようオレの名を呼んでくれるな。……嫌いやない。」",
        image: "enishi.png",
    },
    {
        id: "2-2_matoi",
        subtype: "roster",
        group: "2-2",
        text: "芋縄 的倭",
        kana: "いもなわまとい",
        romaji: "imonawa matoi",
        start_msg: "まとい「……なんだ。」",
        reaction_good: "まとい「ふん。合ってんだろ。」",
        reaction_bad: "まとい「そこ違ぇよ。」",
        reaction_fast: "まとい「速ぇな。ちょっと見直したわ。」",
        reaction_slow: "まとい「遅ぇって。置いてくぞ？」",
        love_msg: "まとい「……先生、しつこいくらいオレの名呼ぶよな。悪くねぇけど。」",
        image: "matoi.png",
    },
    {
        id: "2-2_suzu",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_arin",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_yasashi",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_rui",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_makishi",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_shige",
        subtype: "roster",
        group: "2-2",
        text: "仲馬 穣",
        kana: "ちゅうましげ",
        romaji: "chuma shige",
        start_msg: "しげ「……せ、せんせ…ぼ、僕呼んだと…？」",
        reaction_good: "しげ「おぉっ…う、打てとる…す、すごかよ…。」",
        reaction_bad: "しげ「え、えっと…そこ…ちょっと違うかも…。ごめん…。」",
        reaction_fast: "しげ「は、はやっ！？せ、せんせ…そげん急に打たれたら心臓もたん…！」",
        reaction_slow: "しげ「ゆ、ゆっくりでよか…急がんでよかけん…僕待っとるけん…。」",
        love_msg: "しげ「何回も…僕の名前よんでくれると…なんか…胸がぎゅってなる…ありがと…。」",
        image: "shige.png",
    },
    {
        id: "2-2_hakomo",
        subtype: "roster",
        group: "2-2",
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
        id: "2-2_shizuka",
        subtype: "roster",
        group: "2-2",
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
        group: "2-2",
        text: "萩枝 美琳", 
        kana: "はぎえだみりん", 
        romaji: "hagieda mirin", 
        start_msg: "みりん「えー、みりんてゃって呼んでよぉ🎀」",
        reaction_good: "みりん「やるじゃん！褒めてあげる💕」", 
        reaction_bad: "みりん「だっさw 噛んでやんのw」",
        reaction_fast: "みりん「えっ早すぎ！？私のこと好きすぎじゃん！？😍」", 
        reaction_slow: "みりん「ねぇ〜遅い〜。ネイル乾いちゃったよ💅」", 
        love_msg: "みりん「センセ…今日もみりんの名前呼んでくれるの？…へへ、嬉しい💕」",
        image: "mirin.png"
    },
    {
        id: "2-2_yuzu",
        subtype: "roster",
        group: "2-2",
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
        group: "2-2",
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
        group: "2-2",
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
        group: "2-2",
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
        group: "2-2",
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

        // --- 3年1組 ---
    {
        id: "3-1_nui",
        subtype: "roster",
        group: "3-1",
        text: "栄城 縫",
        kana: "えいしろ ぬい",
        romaji: "eishiro nui",
        start_msg: "ご褒美「拙者のあだ名はご褒美だゾ！先生、ちゃんと名前呼べるやんけ〜？」",
        reaction_good: "ご褒美「おおっ！？正解だゾ！これはご褒美案件やな！拙者の出汁飲むか？」",
        reaction_bad: "ご褒美「だゾ……？今の噛み方、完全に事故っとるやんけ！」",
        reaction_fast: "ご褒美「はっや！？先生、拙者のこと好きすぎだゾっ！」",
        reaction_slow: "ご褒美「むぅ…遅いゾ…ツインテールの子わしゃわしゃして待っとるからな…」",
        love_msg: "ご褒美「先生が拙者の名前呼んでくれるの、なんか照れるゾ……」",
        image: "nui.png"
    },
    {
        id: "3-1_miika",
        subtype: "roster",
        group: "3-1",
        text: "柿窪 未唯樺",
        kana: "かきくぼ みいか",
        romaji: "kakikubo miika",
        start_msg: "みいか「やっほー先生！とりあえず走ってから考えよっ！」",
        reaction_good: "みいか「えっすごっ！先生ノリ良すぎじゃん！」",
        reaction_bad: "みいか「ん？今の打ち方ちょっと雑じゃない？」",
        reaction_fast: "みいか「速っ！先生、足速いタイプでしょ絶対！」",
        reaction_slow: "みいか「あれ？先生止まってる？置いてくよー！」",
        love_msg: "みいか「先生と一緒だとさ、なんか楽しいんだよね！」",
        image: "miika.png"
    },
    {
        id: "3-1_jinya",
        subtype: "roster",
        group: "3-1",
        text: "軽墓 稔也",
        kana: "かるはか じんや",
        romaji: "karuhaka jinya",
        start_msg: "じんや「……先生、別に期待してないけどさ。打つなら正確に、だっちゃ」",
        reaction_good: "じんや「へぇ……ちゃんと打てるんだ。意外」",
        reaction_bad: "じんや「今の完全にtypoだっちゃ。言い訳は？」",
        reaction_fast: "じんや「速すぎ。思考置いてきてない？」",
        reaction_slow: "じんや「遅……。先生、脳内ラグってる？」",
        love_msg: "じんや「先生が名前呼ぶの、悪くない……」",
        image: "jinya.png"
    },
    {
        id: "3-1_koume",
        subtype: "roster",
        group: "3-1",
        text: "慶祥 小梅",
        kana: "けいしょう こうめ",
        romaji: "keisho koume",
        start_msg: "こうめ「よっ先生！神社式タイピング、いくよ！」",
        reaction_good: "こうめ「いいじゃん！先生、度胸あるね！」",
        reaction_bad: "こうめ「今のミス、完全に気合不足！」",
        reaction_fast: "こうめ「速っ！その集中力、嫌いじゃないよ！」",
        reaction_slow: "こうめ「先生〜？お祓い必要？」",
        love_msg: "こうめ「先生に名前呼ばれるの、案外好きかも」",
        image: "koume.png"
    },
    {
        id: "3-1_fukumi",
        subtype: "roster",
        group: "3-1",
        text: "小谷 服美",
        kana: "こたに ふくみ",
        romaji: "kotani fukumi",
        start_msg: "ふくみ「……別に、打ちたければどうぞ」",
        reaction_good: "ふくみ「まぁ……悪くない」",
        reaction_bad: "ふくみ「今の完全にtypo。直す気ある？」",
        reaction_fast: "ふくみ「……無駄に速いね」",
        reaction_slow: "ふくみ「遅。先生、任せた意味ないんだけど」",
        love_msg: "ふくみ「名前、呼ばれるのは……嫌いじゃない」",
        image: "fukumi.png"
    },
    {
        id: "3-1_eiji",
        subtype: "roster",
        group: "3-1",
        text: "筋永 明日雅",
        kana: "すじなが あすが",
        romaji: "sujinaga asuga",
        start_msg: "えいじ「おっす先生！おら、えいじ！タイピングも筋肉だ！」",
        reaction_good: "えいじ「ナイスだ！その指も鍛え上がってるな！」",
        reaction_bad: "えいじ「ミスだ！プロテイン足りてないぞ！」",
        reaction_fast: "えいじ「速すぎ！先生も筋肉派か！？」",
        reaction_slow: "えいじ「遅いぞ！ほら！汗入りポカリ飲め！」",
        love_msg: "えいじ「先生が俺の名前呼ぶと、筋肉が喜ぶ！」",
        image: "eiji.png"
    },
    {
        id: "3-1_kahoko",
        subtype: "roster",
        group: "3-1",
        text: "虹林 佳穂子",
        kana: "にじばやし かほこ",
        romaji: "nijibayashi kahoko",
        start_msg: "かほこ「先生、名簿記入ですね。では正確性を最優先でお願いします」",
        reaction_good: "かほこ「問題ありません。論理的に正しい入力です」",
        reaction_bad: "かほこ「そこは誤入力です。整合性が取れていません」",
        reaction_fast: "かほこ「速度と精度が両立していますね。理想的です」",
        reaction_slow: "かほこ「遅いですが……慎重なのは悪くありません」",
        love_msg: "かほこ「先生が私の名前を正しく呼ぶのは……信頼できます」",
        image: "kahoko.png"
    },
    {
        id: "3-1_uchu",
        subtype: "roster",
        group: "3-1",
        text: "松気之宮 宇宙",
        kana: "まつきのみや うちゅう",
        romaji: "matsukinomiya uchu",
        start_msg: "うちゅう「先生〜、気楽にいこうえ。宇宙は広いけんさ」",
        reaction_good: "うちゅう「おー、やるやん。地球レベルじゃねぇな」",
        reaction_bad: "うちゅう「今のミス、重力に引っ張られすぎやろ」",
        reaction_fast: "うちゅう「速っ！ワープでもしたん？」",
        reaction_slow: "うちゅう「ん〜遅いなぁ。まあ時間は無限やけど」",
        love_msg: "うちゅう「先生に名前呼ばれると、なんか安心するんよな」",
        image: "uchu.png"
    },
    {
        id: "3-1_jun",
        subtype: "roster",
        group: "3-1",
        text: "水洗 純",
        kana: "みずあらい じゅん",
        romaji: "mizuarai jun",
        start_msg: "じゅん「先生、その手……消毒しました？」",
        reaction_good: "じゅん「完璧です。誤字も汚れもありません」",
        reaction_bad: "じゅん「今のtypo、不潔です。すぐ修正してください」",
        reaction_fast: "じゅん「速いですが……清潔さは保ててますね」",
        reaction_slow: "じゅん「遅いのはいいですが、慎重すぎも困ります」",
        love_msg: "じゅん「先生が僕の名前を正確に呼ぶのは……評価します」",
        image: "jun.png"
    },
    {
        id: "3-1_miwa",
        subtype: "roster",
        group: "3-1",
        text: "夢咲 美環",
        kana: "ゆめさき みわ",
        romaji: "yumesaki miwa",
        start_msg: "みわ「先生、今日もよろしくね！楽しくいこ〜！」",
        reaction_good: "みわ「わぁ、上手だね！その調子だよ！」",
        reaction_bad: "みわ「あら？今のちょっと違っとったよ〜」",
        reaction_fast: "みわ「はやっ！サンタさん並みだね！」",
        reaction_slow: "みわ「だいじょぶだよ〜、焦らんでよかよ」",
        love_msg: "みわ「先生が名前呼んでくれるの、すっごく嬉しか〜！」",
        image: "miwa.png"
    },
    {
        id: "3-1_rin",
        subtype: "roster",
        group: "3-1",
        text: "立助 凜",
        kana: "りゅうすけ りん",
        romaji: "ryusuke rin",
        start_msg: "りん「先生、きっと今日もいいことありますよ〜」",
        reaction_good: "りん「すごいです！ちゃんとできてます！」",
        reaction_bad: "りん「あっ……今の、少し間違ってますね」",
        reaction_fast: "りん「早いですね！でも無理しないでくださいね」",
        reaction_slow: "りん「ゆっくりでも大丈夫ですよ〜」",
        love_msg: "りん「先生が名前呼んでくれると、安心します」",
        image: "rin.png"
    },
    {
        id: "3-1_maho",
        subtype: "roster",
        group: "3-1",
        text: "綿森 茉歩",
        kana: "わたもり まほ",
        romaji: "watamori maho",
        start_msg: "まほ「……先生、よろしくね。転入したばっかだから」",
        reaction_good: "まほ「うん……いい感じ」",
        reaction_bad: "まほ「あ……今の、ちょっと違うかも」",
        reaction_fast: "まほ「え、早……すごい」",
        reaction_slow: "まほ「ゆっくりでいいと思うよ……」",
        love_msg: "まほ「先生に名前呼ばれるの……嬉しい」",
        image: "maho.png"
    },
        // --- 3年2組 ---
    {
        id: "3-2_shiori",
        subtype: "roster",
        group: "3-2",
        text: "稲地 栞",
        kana: "いなち しおり",
        romaji: "inachi shiori",
        start_msg: "しおり「先生、名簿ですよね？私、ちゃんと見てますからね！」",
        reaction_good: "しおり「うんうん！その調子です！」",
        reaction_bad: "しおり「あっ、そこ違いますよ先生！ほら、もう一回！」",
        reaction_fast: "しおり「えっ、早っ！？でも無理しないでくださいね！」",
        reaction_slow: "しおり「大丈夫です！ゆっくりでいいですよ！」",
        love_msg: "しおり「先生が名前呼んでくれると、ちゃんと見てもらえてる感じします！」",
        image: "shiori.png"
    },
    {
        id: "3-2_hitomi",
        subtype: "roster",
        group: "3-2",
        text: "笑原 瞳",
        kana: "えみはら ひとみ",
        romaji: "emihara hitomi",
        start_msg: "ひとみ「先生……名簿、ありがとうございます」",
        reaction_good: "ひとみ「……正しく書いてくださって、嬉しいです」",
        reaction_bad: "ひとみ「……あ、少し違います。私のせいかもしれません」",
        reaction_fast: "ひとみ「そんなに急がなくて、大丈夫ですよ……」",
        reaction_slow: "ひとみ「ゆっくりでいいです。先生が疲れませんように」",
        love_msg: "ひとみ「名前を呼んでくれるだけで……救われます」",
        image: "hitomi.png"
    },
    {
        id: "3-2_toro",
        subtype: "roster",
        group: "3-2",
        text: "一適 土呂",
        kana: "かずよし とろ",
        romaji: "kazuyoshi toro",
        start_msg: "とろ「……先生、書くなら正確に」",
        reaction_good: "とろ「問題ない」",
        reaction_bad: "とろ「今の、完全にミス。直しといて」",
        reaction_fast: "とろ「……無駄に速いな」",
        reaction_slow: "とろ「遅い。けどまあ、現実的」",
        love_msg: "とろ「名前、呼ばれるのは……悪くない」",
        image: "toro.png"
    },
    {
        id: "3-2_sumire",
        subtype: "roster",
        group: "3-2",
        text: "草摘 菫",
        kana: "くさなぎ すみれ",
        romaji: "kusanagi sumire",
        start_msg: "すみれ「先生……お名前、きれいに書いてくれる？」",
        reaction_good: "すみれ「……ありがとう。なんだか安心する」",
        reaction_bad: "すみれ「あ……そこ、違うと思うけど……」",
        reaction_fast: "すみれ「そんなに急がなくても……だいじょぶだよ」",
        reaction_slow: "すみれ「ゆっくりでいいら。お花もゆっくり育つし」",
        love_msg: "すみれ「先生に名前呼ばれると……ちょっと救われる」",
        image: "sumire.png"
    },
    {
        id: "3-2_urara",
        subtype: "roster",
        group: "3-2",
        text: "並河 麗",
        kana: "なびか うらら",
        romaji: "nabika urara",
        start_msg: "うらら「は？名簿？さっさと書きなさいよ」",
        reaction_good: "うらら「……ふん。まあ、できてるじゃない」",
        reaction_bad: "うらら「ちょっと！それ間違ってるんだけど！？目ついてる？」",
        reaction_fast: "うらら「はやっ……。でも雑だったら許さないから」",
        reaction_slow: "うらら「遅っ！イライラするんだけど！」",
        love_msg: "うらら「……名前、ちゃんと呼びなさいよね」",
        image: "urara.png"
    },
    {
        id: "3-2_mayuko",
        subtype: "roster",
        group: "3-2",
        text: "畑奈 麻由子",
        kana: "はたな まゆこ",
        romaji: "hatana mayuko",
        start_msg: "まゆこ「せんせー！名簿ってさ、むずかしそ〜！」",
        reaction_good: "まゆこ「えっ！すごーい！できてるじゃん！」",
        reaction_bad: "まゆこ「あれ？なんか違くない？ま、いっか！」",
        reaction_fast: "まゆこ「はやっ！ダンスより速くない！？」",
        reaction_slow: "まゆこ「ゆっくりだね〜。眠くなってきた〜」",
        love_msg: "まゆこ「先生が名前呼ぶの、ちょっと嬉しいかも！」",
        image: "mayuko.png"
    },
    {
        id: "3-2_aiko",
        subtype: "roster",
        group: "3-2",
        text: "蜂ケ崎 敢惟子",
        kana: "はちがさき あいこ",
        romaji: "hachigasaki aiko",
        start_msg: "あいこ「先生、名簿だね？よし、威勢よくいこうじゃないか！」",
        reaction_good: "あいこ「いいねぇ！仕事が早くて気持ちいいよ！」",
        reaction_bad: "あいこ「おっと先生、そこ間違ってるよ。締め直しだ！」",
        reaction_fast: "あいこ「速ぇ！江戸っ子好みのテンポだ！」",
        reaction_slow: "あいこ「ちと遅ぇな。でも丁寧なのは悪くないね」",
        love_msg: "あいこ「先生に名前呼ばれるとさ、背筋が伸びるんだよ」",
        image: "aiko.png"
    },
    {
        id: "3-2_yayoi",
        subtype: "roster",
        group: "3-2",
        text: "深名 弥生",
        kana: "ふかな やよい",
        romaji: "fukana yayoi",
        start_msg: "やよい「先生、名簿？手元、ちゃんと安定させて」",
        reaction_good: "やよい「……うん、仕上がりいいね」",
        reaction_bad: "やよい「今のミス、削り直しだね」",
        reaction_fast: "やよい「速いけど、雑じゃないのは評価する」",
        reaction_slow: "やよい「遅い。でも精度は悪くない」",
        love_msg: "やよい「名前、ちゃんと呼ばれるの……嫌いじゃない」",
        image: "yayoi.png"
    },
    {
        id: "3-2_satsuki",
        subtype: "roster",
        group: "3-2",
        text: "普賢 総都喜",
        kana: "ふげん さつき",
        romaji: "fugen satsuki",
        start_msg: "さつき「先生……名簿作業、お疲れさまです」",
        reaction_good: "さつき「正確ですね。安心しました」",
        reaction_bad: "さつき「あ……そこ、少し違います。恐れ入ります」",
        reaction_fast: "さつき「そんなに急がなくても……大丈夫ですよ」",
        reaction_slow: "さつき「丁寧ですね。嫌いではありません」",
        love_msg: "さつき「先生が名前を呼ぶと……胸が落ち着きます」",
        image: "satsuki.png"
    },
    {
        id: "3-2_hotomo",
        subtype: "roster",
        group: "3-2",
        text: "扶蘇 補知",
        kana: "ふそう ほとも",
        romaji: "fuso hotomo",
        start_msg: "ほとも「……先生、名簿か。ふーん」",
        reaction_good: "ほとも「まあ……いいんじゃない？」",
        reaction_bad: "ほとも「そこ違うよ。見ればわかるでしょ」",
        reaction_fast: "ほとも「そんな急がなくていいのに」",
        reaction_slow: "ほとも「遅いけど……その方が楽」",
        love_msg: "ほとも「名前呼ばれるの、悪くないね」",
        image: "hotomo.png"
    },
    {
        id: "3-2_hoshi",
        subtype: "roster",
        group: "3-2",
        text: "松気之宮 星",
        kana: "まつきのみや ほし",
        romaji: "matsukinomiya hoshi",
        start_msg: "ほし「先生、今日もよろしくな！空は広いけん！」",
        reaction_good: "ほし「うんうん！ええ感じや！」",
        reaction_bad: "ほし「おっと、そこ違うで。もう一回いこ！」",
        reaction_fast: "ほし「速っ！流れ星みたいやな！」",
        reaction_slow: "ほし「ゆっくりでええよ。夜は長いけん」",
        love_msg: "ほし「先生が名前呼んでくれると、心があったかい」",
        image: "hoshi.png"
    },
    {
        id: "3-2_nami",
        subtype: "roster",
        group: "3-2",
        text: "村瀬 奈美",
        kana: "むらせ なみ",
        romaji: "murase nami",
        start_msg: "なみ「まあ先生、名簿ですの？じっくり観察させていただきますわ」",
        reaction_good: "なみ「ふふ……お上手ですわね」",
        reaction_bad: "なみ「あら？今のはtypoですわ。わざと？」",
        reaction_fast: "なみ「まあまあ！そんなに急ぐと面白いですわ」",
        reaction_slow: "なみ「うふふ、焦らしプレイですの？」",
        love_msg: "なみ「先生が名前を呼ぶと……愉快ですわ」",
        image: "nami.png"
    },
    // --- 教職員（★NEW！先生たちの名簿！） ---
    {
        id: "teacher_mei",
        subtype: "roster",
        group: "teacher", // クラス: 教職員
        text: "薮崎 芽衣",
        kana: "やぶさきめい",
        romaji: "yabusaki mei",
        start_msg: "めい先生「あ、あの…私なんかでいいんですかぁ？」",
        reaction_good: "めい先生「わぁっ！すごいです先生！憧れちゃいますぅ！」",
        reaction_bad: "めい先生「あぅっ…私みたいにドジしちゃダメですよぉ💦」",
        image: "mei.png"
    },
    {
        id: "teacher_katsumi",
        subtype: "roster",
        group: "teacher",
        text: "妻鹿 克己",
        kana: "めがかつみ",
        romaji: "mega katsumi",
        start_msg: "かつみ先生「おう！俺の名前を打つ気合はあるか！！」",
        reaction_good: "かつみ先生「いいパンチだ！その調子で走り抜けろ！」",
        reaction_bad: "かつみ先生「たるんどる！指立て伏せ20回だ！」",
        image: "katsumi.png"
    },
    {
        id: "teacher_murasame",
        subtype: "roster",
        group: "teacher",
        text: "村雨 巳太楼",
        kana: "むらさめみたろう",
        romaji: "murasame mitarou",
        start_msg: "みたろう先生「…私の名前？時間の無駄では？」",
        reaction_good: "みたろう先生「…まあ、最低限の仕事はできる用ですね。」",
        reaction_bad: "みたろう先生「非効率的です。出直してきなさい。」",
        image: "mitarou.png"
    },

    // -------------------------------------
    // 💬 LINEコース（返信入力）
    // -------------------------------------
        // --- 2年1組 ---
    // --- 2-1 ---
    {
        id: "msg_miriya",
        subtype: "line",
        group: "2-1",
        sender: "相原 美里耶",
        text: "先生。業務連絡です。本日、放課後のシフトに入っています。何かありましたらすぐ対応できます。",
        kana: "わかりました。いつもありがとうございます。",
        romaji: "wakarimashita itsumo arigatou gozaimasu",
        start_msg: "（みりやからLINEが届きました）",
        reaction_good: "みりや「……お役に立てて光栄です、先生。」",
        reaction_bad: "みりや「……承知しました。次は気をつけます。」",
        reaction_fast: "みりや「確認が早くて助かります。では、業務に戻ります。」",
        reaction_slow: "みりや「……先生。返信をお待ちしていましたが、もうシフトの時間です。」",
        image: "miriya.png"
    },
    {
        id: "msg_hitori",
        subtype: "line",
        group: "2-1",
        sender: "阿見 一人",
        text: "……先生。今、左腕が疼いている。これは“兆し”だ。今日の授業、何か起きるぞ。",
        kana: "またへんなこといってますね。ちゃんとしゅっせきしなさい。",
        romaji: "mata henna koto ittemasu ne chanto shusseki shinasai",
        start_msg: "（ひとりからLINEが届きました）",
        reaction_good: "ひとり「……ふっ。さすが先生、俺の運命（さだめ）を理解している。」",
        reaction_bad: "ひとり「チッ……現実的すぎんだよ、先生。」",
        reaction_fast: "ひとり「くくっ…反応が早いな。貴様も“こちらの世界”の住人か？」",
        reaction_slow: "ひとり「遅い……！闇の侵食が始まってしまうぞ……！」",
        image: "hitori.png"
    },
    {
        id: "msg_ketsui",
        subtype: "line",
        group: "2-1",
        sender: "海老ケ迫 決意",
        text: "先生、今日の放課後なんじゃけど、水兵部の整備が長引きそうでの。少し遅れるかもしれん。",
        kana: "了解です。無理しないでください。",
        romaji: "ryoukai desu muri shinaide kudasai",
        start_msg: "（けついからLINEが届きました）",
        
        reaction_good: "けつい「助かるわ、先生。気にかけてもろうて、船員も安心するじゃろ」",
        reaction_bad: "けつい「……すまんの。次はもっとうまく舵取るけぇ」",
        
        // New! reaction_fast (Se)
        reaction_fast: "けつい「おっ、返信早いのぉ！ 先生、ええ反射神経しとるわ」", // 身体能力・即応性を褒める
        
        // New! reaction_slow (Ti-Ni)
        reaction_slow: "けつい「ええよ、ゆっくりで。凪の海みたいに待っとるけぇ」", // 焦らせない、大人の余裕
        
        image: "ketsui.png"
    },
    {
        id: "msg_ameri",
        subtype: "line",
        group: "2-1",
        sender: "岡崎 愛芽里",
        text: "せ、先生……あの……今日、ちょっと体調が不安で……無理だったら、早めに言います……。",
        kana: "むりしなくていいですよ。つらかったらやすみましょう。",
        romaji: "muri shinakute ii desu yo tsurakattara yasumimashou",
        start_msg: "（あめりからLINEが届きました）",
        reaction_good: "あめり「……はい……先生、やさしくて……ありがとう……。」",
        reaction_bad: "あめり「……ご、ごめんなさい……迷惑でしたよね……。」",
        reaction_fast: "あめり「……あ……すぐ返事くれて……安心しました……。」",
        reaction_slow: "あめり「……あの……お忙しいですよね……ごめんなさい……。」",
        image: "ameri.png"
    },
    {
        id: "msg_shogo",
        subtype: "line",
        group: "2-1",
        sender: "神崎 奨午",
        text: "先生、お疲れさまです！今日の授業の資料、もう一度確認しておいた方がいいところありますか？",
        kana: "ありがとうございます。いまのままでだいじょうぶですよ。",
        romaji: "arigatou gozaimasu ima no mama de daijoubu desu yo",
        start_msg: "（しょうごからLINEが届きました）",
        reaction_good: "しょうご「よかった！先生にそう言ってもらえると安心します！」",
        reaction_bad: "しょうご「了解です！次はもっと気を配りますね。」",
        reaction_fast: "しょうご「わっ、早い！先生、仕事早いっすね！✨」",
        reaction_slow: "しょうご「お忙しいみたいですね。また後で確認します！」",
        image: "shogo.png"
    },
    {
        id: "msg_yuko",
        subtype: "line",
        group: "2-1",
        sender: "橘定 由子",
        text: "先生……差し出がましかったらすみません。今日のクラス、少し空気が張りつめている気がして……。",
        kana: "きづいてくれてたすかります。こちらでたいおうしますね。",
        romaji: "kidzuite kurete tasukarimasu kochira de taiou shimasu ne",
        start_msg: "（ゆこからLINEが届きました）",
        reaction_good: "ゆこ「……先生、やっぱり頼りになります。」",
        reaction_bad: "ゆこ「……そうですか。私の考えすぎでしたね。」",
        reaction_fast: "ゆこ「すぐに対応してくださるなんて……信頼できます。」",
        reaction_slow: "ゆこ「……先生？ あまり大事にはしたくないのですが……。」",
        image: "yuko.png"
    },
    {
        id: "msg_akira",
        subtype: "line",
        group: "2-1",
        sender: "霧生 曙",
        text: "先生。先日の課題、解法に一部非効率な点がありました。修正案を提出してもよろしいですか。",
        kana: "ではそのあんをまとめてていしゅつしてください。",
        romaji: "dewa sono an wo matomete teishutsu shite kudasai",
        start_msg: "（あきらからLINEが届きました）",
        reaction_good: "あきら「……当然です。より良い結果を出します。」",
        reaction_bad: "あきら「……先生、そこを間違えるのは感心しませんね。」",
        reaction_fast: "あきら「即断即決。効率的で悪くないですね。」",
        reaction_slow: "あきら「……判断が遅い。時間のロスです。」",
        image: "akira.png"
    },
    {
        id: "msg_tomoki",
        subtype: "line",
        group: "2-1",
        sender: "久堂 朋己",
        text: "先生。クラスの進行、少し遅れてます。必要ならオレがまとめ役に入りますが、どうします？",
        kana: "たすかります。おねがいします。",
        romaji: "tasukarimasu onegaishimasu",
        start_msg: "（ともきからLINEが届きました）",
        reaction_good: "ともき「了解です。じゃあオレが引き取ります。」",
        reaction_bad: "ともき「……そこ打ち間違える？先生でもミスるんですね。」",
        reaction_fast: "ともき「話が早くて助かります。すぐ動きますね。」",
        reaction_slow: "ともき「先生？ 返事待ちしてる間にチャイム鳴っちゃいますよ。」",
        image: "tomoki.png"
    },
    {
        id: "msg_wataru",
        subtype: "line",
        group: "2-1",
        sender: "君国 航",
        text: "先生。設備点検の結果を共有します。異常はありませんが、予防整備を推奨します。",
        kana: "ほうこくありがとうございます。たいおうをけんとうします。",
        romaji: "houkoku arigatou gozaimasu taiou wo kentou shimasu",
        start_msg: "（わたるからLINEが届きました）",
        reaction_good: "わたる「了解しました。では次の段階に進めます。」",
        reaction_bad: "わたる「……入力精度が甘い。確認を怠らないでください。」",
        reaction_fast: "わたる「確認ありがとうございます。迅速な対応、感謝します。」",
        reaction_slow: "わたる「……既読がつかない。リスク管理に問題があります。」",
        image: "wataru.png"
    },
    {
        id: "msg_zakuro",
        subtype: "line",
        group: "2-1",
        sender: "更級 柘榴",
        text: "……せ、先生。あの……提出物、もう少しだけ時間もらえたら……助かります。",
        kana: "わかりました。むりしないでください。",
        romaji: "wakarimashita muri shinaide kudasai",
        start_msg: "（ざくろからLINEが届きました）",
        reaction_good: "ざくろ「……あ、ありがとうございます……ほんま……。」",
        reaction_bad: "ざくろ「……あっ……せ、先生……そこ……違います……。」",
        reaction_fast: "ざくろ「……うわっ、返事はや……びっくりした……。」",
        reaction_slow: "ざくろ「……やっぱり、だめ、ですよね……。」",
        image: "zakuro.png"
    },
    {
        id: "msg_kotori",
        subtype: "line",
        group: "2-1",
        sender: "酒々井 小鳥",
        text: "せんせー、今日の課題、正直あとでもよかろ？今がばい眠かけんさ〜。",
        kana: "いまのうちにおわらせましょう。",
        romaji: "ima no uchi ni owarasemashou",
        start_msg: "（ことりからLINEが届きました）",
        reaction_good: "ことり「え〜真面目〜。でも先生が言うならやるたい。」",
        reaction_bad: "ことり「うわ、ミスっとるやん。先生もだらけとーね？」",
        reaction_fast: "ことり「早っ！？今寝ようとしたとに〜。」",
        reaction_slow: "ことり「……あ、寝とった。返事遅かよ先生〜。」",
        image: "kotori.png"
    },
    {
        id: "msg_mikina",
        subtype: "line",
        group: "2-1",
        sender: "鈴木 幹菜",
        text: "先生。今日のクラス、ちょっと空気読んだ方がいいかもです。表は平気そうですけど。",
        kana: "おしえてくれてありがとう。たすかります。",
        romaji: "oshiete kurete arigatou tasukarimasu",
        start_msg: "（みきなからLINEが届きました）",
        reaction_good: "みきな「さすが先生。ちゃんと伝わってますね。」",
        reaction_bad: "みきな「……先生？今の入力、わざとじゃないですよね？」",
        reaction_fast: "みきな「早っ。先生、勘が鋭いですね。」",
        reaction_slow: "みきな「……遅いですよ。もう空気が変わっちゃいました。」",
        image: "mikina.png"
    },
    { 
        id: "msg_iseri", 
        subtype: "line",
        group: "2-1",
        sender: "寸土 壱芹",
        text: "せんせー！オレ今日ちっちゃすぎて黒板見えへん！席替えてええ？",
        kana: "だめです。いまのせきでがんばりなさい。",
        romaji: "dame desu ima no seki de ganbarinasai",
        start_msg: "（いせりからLINEが届きました）",
        reaction_good: "いせり「えぇ〜！まぁ先生が言うならしゃあないわ！」",
        reaction_bad: "いせり「は？先生、文字ミスってへん？ちゃんと打って？」",
        reaction_fast: "いせり「即答かよ！もっと悩んでくれやー！」",
        reaction_slow: "いせり「おーい！無視すんなって！ジャンプしても見えへんねん！」",
        image: "iseri.png"
    },
    { 
        id: "msg_maria", 
        subtype: "line",
        group: "2-1",
        sender: "猫谷 茉莉亜",
        text: "先生、教会のお手伝いで少し遅れそうです。授業に間に合わなくてもよろしいでしょうか？",
        kana: "はい。あわてずにきてください。",
        romaji: "hai awatezu ni kite kudasai",
        start_msg: "（まりあからLINEが届きました）",
        reaction_good: "まりあ「ありがとうございます。心から感謝します。」",
        reaction_bad: "まりあ「……先生、入力が乱れています。落ち着いてくださいね。」",
        reaction_fast: "まりあ「すぐに許してくださるなんて……先生に神のご加護を。」",
        reaction_slow: "まりあ「……お祈りをして待っておりますね。」",
        image: "maria.png"
    },
    { 
        id: "msg_migiwa", 
        subtype: "line",
        group: "2-1",
        sender: "舟濤 汀",
        text: "先生、水兵部の準備が長引いてます。少し遅れても問題ありませんか？", // 先生用・猫かぶりモード
        kana: "はい。かたづけをしてからきなさい。",
        romaji: "hai katazuke o shite kara kinasai",
        start_msg: "（みぎわからLINEが届きました）",
        
        // リアクションで素が出る（岡山弁）
        reaction_good: "みぎわ「了解です！ すぐ片付けるけぇ、待っとって！」", 
        reaction_bad: "みぎわ「先生？ 今の打ち方、ちょっと雑じゃない？ ちゃんとせられー」", // 方言でツッコミ
        
        // New! reaction_fast (Fe)
        reaction_fast: "みぎわ「早っ！ 先生、仕事早すぎじゃろ！ さすがじゃわ〜！」", // 勢いと感情で褒める
        
        // New! reaction_slow (Fe-Si)
        reaction_slow: "みぎわ「ゆっくりでええよ〜。先生が来るまで、うちらも休憩しとるけぇ！」", // 気遣い・和ませ
        
        image: "migiwa.png"
    },
    { 
        id: "msg_ryogo", 
        subtype: "line",
        group: "2-1",
        sender: "水上 亮吾",
        text: "先生、実験装置の調整で手が離せません。開始に少し遅れそうです。",
        kana: "わかりました。あとでせつめいしてください。",
        romaji: "wakarimashita ato de setsumei shite kudasai",
        start_msg: "（りょうごからLINEが届きました）",
        
        // Ni修正：時系列だけじゃなく「因果関係」
        reaction_good: "りょうご「ありがとうございます。後ほど報告します。」",
        
        // Ni修正：精度の低下＝思考の乱れの予兆
        reaction_bad: "りょうご「……先生、入力精度が下がっていませんか？」",
        
        // Ni修正：タイムラグのなさ＝思考の同期
        reaction_fast: "りょうご「即レス、助かります。思考が同期しているみたいで……悪くないですね」",
        
        // Ni修正：待ち時間＝脳内シミュレーション
        reaction_slow: "りょうご「……既読までの遅延を確認。まあ、脳内でトラブルシューティングを進めておきます」",
        
        image: "ryogo.png"
    },
    { 
        id: "msg_jiha", 
        subtype: "line",
        group: "2-1",
        sender: "恵 時生",
        text: "せんせー、今日なんか気分乗らんのよ。休んでもええ？",
        kana: "だめです。がっこうにきなさい。",
        romaji: "dame desu gakkou ni kinasai",
        start_msg: "（じはからLINEが届きました）",
        reaction_good: "じは「ちぇ〜！しゃあないなぁ。」",
        reaction_bad: "じは「は？先生、打ち間違えすぎやろ。やる気ある？」",
        reaction_fast: "じは「げっ、即レス。逃げられんやつやん。」",
        reaction_slow: "じは「返事ないってことは……サボってええってこと？ラッキー！」",
        image: "jiha.png"
    },
    { 
        id: "msg_rei", 
        subtype: "line",
        group: "2-1",
        sender: "用達 怜",
        text: "先生、本日の課題について一点確認したいことがあります。放課後でもよろしいでしょうか。",
        kana: "はい。ほうかごにきてください。",
        romaji: "hai houkago ni kite kudasai",
        start_msg: "（れいからLINEが届きました）",
        reaction_good: "れい「ありがとうございます。では放課後に伺います。」",
        reaction_bad: "れい「……先生、その入力は少し見直した方がよさそうですね。」",
        reaction_fast: "れい「素早い判断、尊敬します。では後ほど。」",
        reaction_slow: "れい「お忙しいようですね。メモを残しておきます。」",
        image: "rei.png"
    },

    // --- 2-2 ---
    { 
        id: "msg_yae", 
        subtype: "line",
        group: "2-2",
        sender: "藍河 八重",
        text: "……先生。今日の授業、出たほうがいいですか。",
        kana: "はい。でたほうがいいです。",
        romaji: "hai deta hou ga ii desu",
        start_msg: "（やえからLINEが届きました）",
        reaction_good: "やえ「……わかりました。」",
        reaction_bad: "やえ「……先生、打ち間違い。気になります。」",
        reaction_fast: "やえ「……早いです。」",
        reaction_slow: "やえ「……待ってます。」",
        image: "yae.png"
    },
    { 
        id: "msg_akari", 
        subtype: "line",
        group: "2-2",
        sender: "味野 灯莉",
        text: "せんせー！ちょっと遅れそう！走って行ったほうがいい？",
        kana: "あわてなくていいです。きをつけてきてください。",
        romaji: "awatenakute ii desu ki wo tsukete kite kudasai",
        start_msg: "（あかりからLINEが届きました）",
        reaction_good: "あかり「りょーかい！ありがと先生！」",
        reaction_bad: "あかり「え？今の返事ちょっと変じゃない？」",
        reaction_fast: "あかり「おっ！先生の即レスいただきましたー！✨」",
        reaction_slow: "あかり「あれ？ 返事待ってたら遅刻しちゃうよ〜💦」",
        image: "akari.png"
    },
    { 
        id: "msg_enishi", 
        subtype: "line",
        group: "2-2",
        sender: "鼬川 絵丹師",
        text: "……インスピレーションが降りてきた。早退してもいいですか。",
        kana: "だめです。アトリエにいくならほうかごにしなさい。",
        romaji: "dame desu atorie ni iku nara houkago ni shinasai",
        start_msg: "（えにしからLINEが届きました）",
        reaction_good: "えにし「……チッ。わかったよ。」",
        reaction_bad: "えにし「……集中力、散漫しとるよ。」",
        reaction_fast: "えにし「……判断が早くて助かる。……けど、行けないのか。」",
        reaction_slow: "えにし「……遅い。もうイメージが消えかかっとる。」",
        image: "enishi.png"
    },
    { 
        id: "msg_matoi", 
        subtype: "line",
        group: "2-2",
        sender: "芋縄 的倭",
        text: "先生。授業前に外出てきてもいいですか。",
        kana: "だめです。じゅぎょうまえはきょうしつにいなさい。",
        romaji: "dame desu jugyou mae wa kyoushitsu ni inasai",
        start_msg: "（まといからLINEが届きました）",
        reaction_good: "まとい「……了解。」",
        reaction_bad: "まとい「先生、入力荒れてますよ。」",
        reaction_fast: "まとい「チッ……見張ってんのかよ。早すぎ。」",
        reaction_slow: "まとい「……返事おっせ。もう出るわ。」",
        image: "matoi.png"
    },
    { 
        id: "msg_suzu", 
        subtype: "line",
        group: "2-2",
        sender: "忍足 鈴",
        text: "先生、規定の提出物について確認があるんさ。今、よろしいですか？",
        kana: "はい。ないようをおくってください。",
        romaji: "hai naiyou wo okutte kudasai",
        start_msg: "（すずからLINEが届きました）",
        reaction_good: "すず「ありがとうございます。送信します。」",
        reaction_bad: "すず「……先生、その入力は正確ではありません。」",
        reaction_fast: "すず「素早い対応……かたじけないです。」",
        reaction_slow: "すず「……忍んで待っております。」",
        image: "suzu.png"
    },
    { 
        id: "msg_arin", 
        subtype: "line",
        group: "2-2",
        sender: "小犬丸 愛凛",
        text: "先生、資料作りを手伝っていたら少し遅れそうで……大丈夫でしょうか。",
        kana: "はい。むりしないでください。",
        romaji: "hai muri shinaide kudasai",
        start_msg: "（ありんからLINEが届きました）",
        reaction_good: "ありん「ありがとうございます。安心しました。」",
        reaction_bad: "ありん「……先生、入力が少し乱れてます。」",
        reaction_fast: "ありん「わっ、すぐにお返事……！嬉しいです！」",
        reaction_slow: "ありん「……くぅん。怒ってないかな……。」",
        image: "arin.png"
    },
    { 
        id: "msg_yasashi", 
        subtype: "line",
        group: "2-2",
        sender: "霜降 柔",
        text: "先生、体操部のストレッチが長引いてしまって。少し遅れても大丈夫ですか。",
        kana: "はい。けがをしないようにしてください。",
        romaji: "hai kega wo shinai you ni shite kudasai",
        start_msg: "（やさしからLINEが届きました）",
        reaction_good: "やさし「ありがとうございます。気をつけます。」",
        reaction_bad: "やさし「先生、入力ミスがあるみたいです。」",
        reaction_fast: "やさし「柔軟な対応、ありがとうございます！」",
        reaction_slow: "やさし「あれ……もう体固まっちゃいますよ……？」",
        image: "yasashi.png"
    },
    { 
        id: "msg_rui", 
        subtype: "line",
        group: "2-2",
        sender: "春潮楼 塁",
        text: "先生！今日のお弁当、卵焼きに砂糖入れすぎました！これってアウトですか！？",
        kana: "じぶんでたべるぶんにはもんだいありません。",
        romaji: "jibun de taberu bun ni wa mondai arimasen",
        start_msg: "（るいからLINEが届きました）",
        reaction_good: "るい「よかったです！姉に怒られるとこでした！」",
        reaction_bad: "るい「えっ、先生そこ噛みます！？」",
        reaction_fast: "るい「早っ！先生エスパーですか！？」",
        reaction_slow: "るい「…あ、今見ました？すみません！」",
        image: "rui.png"
    },
    { 
        id: "msg_makishi", 
        subtype: "line",
        group: "2-2",
        sender: "鈴木 槙士",
        text: "ねー先生！マヨって飲み物ですよね？今日も元気です！",
        kana: "しょくじちゅうはふざけないように。",
        romaji: "shokuji chuu wa fuzakenai you ni",
        start_msg: "（まきしからLINEが届きました）",
        reaction_good: "まきし「はーい！でもマヨは正義っす！」",
        reaction_bad: "まきし「先生、誤字ってて可愛いっすね！」",
        reaction_fast: "まきし「即レス！先生ノリいい！」",
        reaction_slow: "まきし「先生〜生きてます〜？」",
        image: "makishi.png"
    },
    { 
        id: "msg_shige", 
        subtype: "line",
        group: "2-2",
        sender: "仲馬 穣",
        text: "先生……あの、給食……今日は少なめにしてもらってもいいですか。",
        kana: "はい。むりしなくていいですよ。",
        romaji: "hai muri shinakute ii desu yo",
        start_msg: "（しげからLINEが届きました）",
        reaction_good: "しげ「……ありがとうございます。」",
        reaction_bad: "しげ「……あ、先生、文字……違います。」",
        reaction_fast: "しげ「……すぐ返ってきて、少し安心しました。」",
        reaction_slow: "しげ「……いそがしかったら、だいじょうぶです。」",
        image: "shige.png"
    },
    { 
        id: "msg_hakomo", 
        subtype: "line",
        group: "2-2",
        sender: "出逢 箱藻",
        text: "先生。今、自分が教室にいるかどうか、わからなくなりました。",
        kana: "きょうしつにいます。いどうしないでください。",
        romaji: "kyoushitsu ni imasu idou shinaide kudasai",
        start_msg: "（はこもからLINEが届きました）",
        reaction_good: "はこも「……了解。」",
        reaction_bad: "はこも「……先生、文が崩れてます。」",
        reaction_fast: "はこも「……早いですね。不思議。」",
        reaction_slow: "はこも「……時間の感覚、ずれました。」",
        image: "hakomo.png"
    },
    { 
        id: "msg_shizuka", 
        subtype: "line",
        group: "2-2",
        sender: "灰住 鎮花",
        text: "先生、確認ですが…この問題、解答は一つで合っていますでしょうか。",
        kana: "はい。そのかいとうであっています。",
        romaji: "hai sono kaitou de atteimasu",
        start_msg: "（しずかからLINEが届きました）",
        reaction_good: "しずか「ありがとうございます……安心しました。」",
        reaction_bad: "しずか「……先生、誤字は良くないと思います。」",
        reaction_fast: "しずか「すぐ返事をいただけて助かります。」",
        reaction_slow: "しずか「……返事が遅いと、不安になります。」",
        image: "shizuka.png"
    },
    { 
        id: "msg_mirin", 
        subtype: "line",
        group: "2-2",
        sender: "萩枝 美琳",
        text: "せんせー！🎀 今日のネイル見てー！爪にリボンついてんの！すごくない！？💅✨",
        kana: "こうそくいはんです。あすまでにおとしてきなさい。",
        romaji: "kousokuihan desu asu made ni otosite kinasai",
        start_msg: "（みりんからLINEが届きました）",
        reaction_good: "みりん「えぇ〜…せんせーのわからずや🥺」",
        reaction_bad: "みりん「ねぇ先生、誤字ってるよ？w」",
        reaction_fast: "みりん「即レス神！✨ センセ大好き！🫶」",
        reaction_slow: "みりん「…既読スルー？🥺 センセ冷たい…」",
        image: "mirin.png"
    },
    { 
        id: "msg_yuzu", 
        subtype: "line",
        group: "2-2",
        sender: "昆沙丸 柚子",
        text: "……先生、今日ちょっと運いい気すんだ。何も起きてねぇけど。",
        kana: "なにもないひがいちばんです。",
        romaji: "nani mo nai hi ga ichiban desu",
        start_msg: "（ゆずからLINEが届きました）",
        reaction_good: "ゆず「……まぁ、そうかもな。」",
        reaction_bad: "ゆず「先生、そこ間違えっと運逃げっぞ。」",
        reaction_fast: "ゆず「はやっ……先生、今日ついてんじゃね？」",
        reaction_slow: "ゆず「……まぁ、急ぐ話でもねぇか。」",
        image: "yuzu.png"
    },
    { 
        id: "msg_shinon", 
        subtype: "line",
        group: "2-2",
        sender: "細物 詩温",
        text: "先生……今日は、少し気分が沈んでて……無理しない方がいいですよね。",
        kana: "はい。きょうはやすみましょう。",
        romaji: "hai kyou wa yasumimashou",
        start_msg: "（しのんからLINEが届きました）",
        reaction_good: "しのん「……ありがとうございます。少し、楽になりました。」",
        reaction_bad: "しのん「……先生、文字……違ってます……。」",
        reaction_fast: "しのん「……すぐ返してくれて、嬉しいです。」",
        reaction_slow: "しのん「……返事、来るって信じてました。」",
        image: "shinon.png"
    },
    { 
        id: "msg_hikari", 
        subtype: "line",
        group: "2-2",
        sender: "法華 光里",
        text: "先生、その指示……本音で言ってます？",
        kana: "はい。いじょうはありません。",
        romaji: "hai ijou wa arimasen",
        start_msg: "（ひかりからLINEが届きました）",
        reaction_good: "ひかり「……なら、いいわ。」",
        reaction_bad: "ひかり「誤字。……嘘じゃないなら、気をつけて。」",
        reaction_fast: "ひかり「即答ね。判断は早い方がいいわ。」",
        reaction_slow: "ひかり「……迷ってる？顔に出てる。」",
        image: "hikari.png"
    },
    { 
        id: "msg_kozue", 
        subtype: "line",
        group: "2-2",
        sender: "柞原 梢",
        text: "先生、今夜花火の音がしてな……ちょっと懐かしなって。",
        kana: "きれいなよるですね。",
        romaji: "kirei na yoru desu ne",
        start_msg: "（こずえからLINEが届きました）",
        reaction_good: "こずえ「……ふふ、そうやね。」",
        reaction_bad: "こずえ「先生、そこ打ち間違えとるよ。」",
        reaction_fast: "こずえ「はよ返ってきて、うれしいわ。」",
        reaction_slow: "こずえ「……待つ時間も、悪うないな。」",
        image: "kozue.png"
    },
    { 
        id: "msg_yamato", 
        subtype: "line",
        group: "2-2",
        sender: "雪村 大和",
        text: "先生。今日、かき氷食ってもいいか。",
        kana: "ほどほどにしなさい。",
        romaji: "hodohodo ni shinasai",
        start_msg: "（やまとからLINEが届きました）",
        reaction_good: "やまと「了解。」",
        reaction_bad: "やまと「……先生、そこ違う。」",
        reaction_fast: "やまと「即レスか。悪くない。」",
        reaction_slow: "やまと「……まぁ、待つのは慣れてる。」",
        image: "yamato.png"
    },

        // --- 3年1組 ---
    { 
        id: "msg_nui", 
        subtype: "line",
        group: "3-1",
        sender: "栄城 縫",
        text: "せんせー！拙者な、風呂上がりでピカピカだぞ！🐷✨ 今日の体育、めっちゃ頑張ったやんけ！ご褒美ほしい、だぞ！",
        kana: "よくがんばったな。こんどじゅーすをおごってやる。",
        romaji: "yoku ganbatta na kondo juusu wo ogotte yaru",
        start_msg: "（ご褒美からLINEが届きました）",
        reaction_good: "ごほうび「えっ！？いいのか！？せんせー神やんけ！！だぞ！！🥹✨」",
        reaction_bad: "ごほうび「せんせー、そこ誤字っとるぞ！拙者でも分かる、だぞ！w」",
        reaction_fast: "ごほうび「はやっ！？即レス！？拙者、感動で豚汁になるとこだったぞ！🐷💦」",
        reaction_slow: "ごほうび「まだかな…って待っとったら腹減ったぞ…🥺」",
        image: "nui.png"
    },
    { 
        id: "msg_miika", 
        subtype: "line",
        group: "3-1",
        sender: "柿窪 未唯樺",
        text: "先生っ！今さっき廊下ダッシュしたら自己ベスト出たんだけど！？🐎💨 これ才能じゃない？w",
        kana: "そのすぴーどはすごいがろうかをはしるな。",
        romaji: "sono supiido wa sugoi ga rouka wo hashiru na",
        start_msg: "（みいかからLINEが届きました）",
        reaction_good: "みいか「でしょでしょ！先生わかってる〜！😆✨（え、走っちゃダメ？）」",
        reaction_bad: "みいか「先生、そこ誤字ってるよ？勢いで打ったでしょw」",
        reaction_fast: "みいか「え、秒で返ってきた！先生ヒマ！？🤣」",
        reaction_slow: "みいか「…あ、走りすぎて電池切れた？😴」",
        image: "miika.png"
    },
    { 
        id: "msg_jinya", 
        subtype: "line",
        group: "3-1",
        sender: "軽墓 稔也",
        text: "先生、今ゲーム配信の編集してたんだけどさ。提出物って今日だっけ？…違っても別に、いいっちゃ。",
        kana: "ていしゅつびはきょうだぞ。ちゃんとだしなさい。",
        romaji: "teishutsubi wa kyou dazo chanto dashinasai",
        start_msg: "（じんやからLINEが届きました）",
        reaction_good: "じんや「へぇ…ちゃんと答えるんだ。意外。」",
        reaction_bad: "じんや「先生、誤字。そういうとこ雑だよね。」",
        reaction_fast: "じんや「早…即レスはちょっと引く。」",
        reaction_slow: "じんや「まぁ、どうせ後で見るでしょ。」",
        image: "jinya.png"
    },
    { 
        id: "msg_koume", 
        subtype: "line",
        group: "3-1",
        sender: "慶祥 小梅",
        text: "せんせ！今日の掃除、私一人で半分終わらせたんだけど！巫女パワーなめんなって感じじゃない？🔥",
        kana: "さすがかみさまにつかえるみこぱわーだね。",
        romaji: "sasuga kamisama ni tsukaeru miko pawaa da ne",
        start_msg: "（こうめからLINEが届きました）",
        reaction_good: "こうめ「っしょ！？先生、話わかる〜！😎✨」",
        reaction_bad: "こうめ「ちょ、先生そこ誤字！詰め甘いぞー！w」",
        reaction_fast: "こうめ「はやっ！行動力Sランクじゃん！」",
        reaction_slow: "こうめ「既読つかないってことは修行中？🧘‍♀️」",
        image: "koume.png"
    },
    { 
        id: "msg_fukumi", 
        subtype: "line",
        group: "3-1",
        sender: "小谷 服美",
        text: "先生。連絡事項あるなら今のうちに言って。あと、寒い。青森なめんな。",
        kana: "れんらくはあしたのあさするよ。かぜひくなよ。",
        romaji: "renraku wa ashita no asa suru yo kaze hiku na yo",
        start_msg: "（ふくみからLINEが届きました）",
        reaction_good: "ふくみ「…まぁ、それならいい。」",
        reaction_bad: "ふくみ「誤字。直してから送って。」",
        reaction_fast: "ふくみ「即レス。珍しいね。」",
        reaction_slow: "ふくみ「…別に、急ぎじゃないけど。」",
        image: "fukumi.png"
    },
    { 
        id: "msg_eiji", 
        subtype: "line",
        group: "3-1",
        sender: "筋永 明日雅",
        text: "おっす先生！！💪🔥 今日も筋肉が最高なんだ！！今プロテイン飲んでる！！",
        kana: "きょうしつでぷろていんをこぼすなよ。",
        romaji: "kyoushitsu de purotein wo kobosu na yo",
        start_msg: "（えいじからLINEが届きました）",
        reaction_good: "えいじ「よっしゃ！！先生も筋肉派だな！！💥」",
        reaction_bad: "えいじ「先生！そこ誤字だ！筋肉は正確さも大事だぞ！」",
        reaction_fast: "えいじ「秒返し！！レスポンスも筋肉だ！！」",
        reaction_slow: "えいじ「まだかな！？スクワットしながら待つ！！」",
        image: "eiji.png"
    },
    { 
        id: "msg_kahoko", 
        subtype: "line",
        group: "3-1",
        sender: "虹林 佳穂子",
        text: "先生、明日の提出物について確認です。配布プリントと掲示内容に若干の差異がありますが、どちらが正ですか？",
        kana: "けいじばんのないほうがただしいです。",
        romaji: "keijiban no naihou ga tadashii desu",
        start_msg: "（かほこからLINEが届きました）",
        reaction_good: "かほこ「なるほど。整合性は取れました。ありがとうございます。」",
        reaction_bad: "かほこ「…先生、誤字があります。論理以前の問題です。」",
        reaction_fast: "かほこ「迅速ですね。業務的には助かります。」",
        reaction_slow: "かほこ「少々遅いですが、許容範囲です。」",
        image: "kahoko.png"
    },
    { 
        id: "msg_uchu", 
        subtype: "line",
        group: "3-1",
        sender: "松気之宮 宇宙",
        text: "せんせー、今日の授業ちょっと眠かったわ〜。昨夜ブラックホール調べよったら朝やったんよ☄️",
        kana: "よるはちゃんとねなさい。ちこくするぞ。",
        romaji: "yoru wa chanto nenasai chikoku suru zo",
        start_msg: "（うちゅうからLINEが届きました）",
        reaction_good: "うちゅう「ま、そう言うと思ったち。やさしかな〜😎」",
        reaction_bad: "うちゅう「せんせ、そこ字まちごうちょるよ？w」",
        reaction_fast: "うちゅう「はやっ！地球一周より速いやん！」",
        reaction_slow: "うちゅう「既読つかんけん、宇宙行っちょる？」",
        image: "uchu.png"
    },
    { 
        id: "msg_jun", 
        subtype: "line",
        group: "3-1",
        sender: "水洗 純",
        text: "先生。今日の教室、机が汚れていました。清掃指示の再徹底をお願いします。",
        kana: "ほうこくありがとう。すぐしどうしておくよ。",
        romaji: "houkoku arigatou sugu shidou shite oku yo",
        start_msg: "（じゅんからLINEが届きました）",
        reaction_good: "じゅん「理解していただけて助かります。安心しました。」",
        reaction_bad: "じゅん「先生、誤字があります。…除菌してから打ちました？」",
        reaction_fast: "じゅん「即レス。判断が早いのは評価します。」",
        reaction_slow: "じゅん「…返信前に手洗いは済ませましたか？」",
        image: "jun.png"
    },
    { 
        id: "msg_miwa", 
        subtype: "line",
        group: "3-1",
        sender: "夢咲 美環",
        text: "先生〜！今度クラスでちょっとした飾り付けしたかとよ✨ みんな元気出ると思うばい！",
        kana: "それはいいね。にぎやかなクラスにしてくれ。",
        romaji: "sore wa ii ne nigiyaka na kurasu ni shite kure",
        start_msg: "（みわからLINEが届きました）",
        reaction_good: "みわ「よかった〜！先生ありがとう！気合い入れて準備するけんね💖」",
        reaction_bad: "みわ「先生、そこ誤字っとるばい？ふふっ☺️」",
        reaction_fast: "みわ「返信はやっ！先生もノリ良かね〜✨」",
        reaction_slow: "みわ「あら？忙しかったとかな？無理せんでね🌸」",
        image: "miwa.png"
    },
    { 
        id: "msg_rin", 
        subtype: "line",
        group: "3-1",
        sender: "立助 凜",
        text: "先生、お疲れさまです。今日ちょっと元気なさそうに見えたので…無理しすぎないでくださいね。",
        kana: "しんぱいしてくれてありがとう。げんきだよ。",
        romaji: "shinpai shite kurete arigatou genki da yo",
        start_msg: "（りんからLINEが届きました）",
        reaction_good: "りん「えへへ…そう言ってもらえると嬉しいです。きっといいことありますよ〜🌱」",
        reaction_bad: "りん「あ、先生…ここ、誤字かもです。大丈夫ですか？」",
        reaction_fast: "りん「すぐ返してくれてありがとうございます。安心しました☺️」",
        reaction_slow: "りん「後ででも大丈夫ですよ。待ってますね🌸」",
        image: "rin.png"
    },
    { 
        id: "msg_maho", 
        subtype: "line",
        group: "3-1",
        sender: "綿森 茉歩",
        text: "先生〜。放課後、コスプレ衣装のスケッチ描いてたら時間忘れちゃって…この学校、なんか好きです。",
        kana: "きにいってくれてうれしいよ。またみせてね。",
        romaji: "kiniitte kurete ureshii yo mata misete ne",
        start_msg: "（まほからLINEが届きました）",
        reaction_good: "まほ「うん…そう言ってもらえると、ほっとする。」",
        reaction_bad: "まほ「先生、そこちょっと違うよ？…ふふ。」",
        reaction_fast: "まほ「え、すぐ返ってきた。なんかうれしい。」",
        reaction_slow: "まほ「…ゆっくりでいいよ。わたしも、ゆっくりだから。」",
        image: "maho.png"
    },
        // --- 3年2組 ---
    { 
        id: "msg_shiori", 
        subtype: "line",
        group: "3-2",
        sender: "稲地 栞",
        text: "先生！今日配布されたプリント、休んでた子の分もまとめて預かってます！あとで渡しておきますね！",
        kana: "ありがとう。助かります。無理しすぎないようにしてください。",
        romaji: "arigatou. tasukarimasu. muri shisuginai you ni shite kudasai.",
        start_msg: "（しおりからLINEが届きました）",
        reaction_good: "しおり「えへへ、役に立ててよかったです！」",
        reaction_bad: "しおり「先生、そこ誤字ありますよ〜？」",
        reaction_fast: "しおり「はやっ！確認ありがとうございます！」",
        reaction_slow: "しおり「あ、忙しかったですよね！大丈夫です！」",
        image: "shiori.png"
    },

    { 
        id: "msg_hitomi", 
        subtype: "line",
        group: "3-2",
        sender: "笑原 瞳",
        text: "先生、今日の授業内容、少し難しそうな子がいました。後でフォローできたらと思います。",
        kana: "気づいてくれてありがとう。無理のない範囲で大丈夫ですよ。",
        romaji: "kizuite kurete arigatou. muri no nai han'i de daijoubu desu yo.",
        start_msg: "（ひとみからLINEが届きました）",
        reaction_good: "ひとみ「そう言っていただけて、少し安心しました。」",
        reaction_bad: "ひとみ「先生、誤字があります…。大丈夫ですか？」",
        reaction_fast: "ひとみ「すぐにお返事をいただけて嬉しいです。」",
        reaction_slow: "ひとみ「後ででも問題ありません。ありがとうございます。」",
        image: "hitomi.png"
    },

    { 
        id: "msg_toro", 
        subtype: "line",
        group: "3-2",
        sender: "一適 土呂",
        text: "先生。弓道部の用具、少し傷んでます。確認だけしといた方がいいです。",
        kana: "報告ありがとうございます。後日こちらで確認します。",
        romaji: "houkoku arigatou gozaimasu. gojitsu kochira de kakunin shimasu.",
        start_msg: "（とろからLINEが届きました）",
        reaction_good: "とろ「了解です。」",
        reaction_bad: "とろ「…先生、字ちがいます。」",
        reaction_fast: "とろ「はやいですね。」",
        reaction_slow: "とろ「後ででも大丈夫です。」",
        image: "toro.png"
    },

    { 
        id: "msg_sumire", 
        subtype: "line",
        group: "3-2",
        sender: "草摘 菫",
        text: "先生、校庭のお花がきれいに咲いてました。少しだけ、気持ちが楽になりました。",
        kana: "そうですか。教えてくれてありがとうございます。",
        romaji: "sou desu ka. oshiete kurete arigatou gozaimasu.",
        start_msg: "（すみれからLINEが届きました）",
        reaction_good: "すみれ「…はい。ありがとうございます。」",
        reaction_bad: "すみれ「あ、先生…そこ、間違ってます…。」",
        reaction_fast: "すみれ「すぐ返してくれて、うれしいです。」",
        reaction_slow: "すみれ「ゆっくりで大丈夫です。」",
        image: "sumire.png"
    },

    { 
        id: "msg_urara", 
        subtype: "line",
        group: "3-2",
        sender: "並河 麗",
        text: "先生、あの花壇、勝手に触られた形跡あるんだけど。注意した方がいいんじゃない？",
        kana: "確認します。情報ありがとうございます。",
        romaji: "kakunin shimasu. jouhou arigatou gozaimasu.",
        start_msg: "（うららからLINEが届きました）",
        reaction_good: "うらら「でしょ？ちゃんと見てくださいよ。」",
        reaction_bad: "うらら「は？先生、誤字ってるし。」",
        reaction_fast: "うらら「対応早いじゃない。」",
        reaction_slow: "うらら「…遅いんだけど？」",
        image: "urara.png"
    },

    { 
        id: "msg_mayuko", 
        subtype: "line",
        group: "3-2",
        sender: "畑奈 麻由子",
        text: "せんせー！今日ダンスめっちゃ上手くできた気する！見せたかったな〜！",
        kana: "それは良かったですね。次の機会を楽しみにしています。",
        romaji: "sore wa yokatta desu ne. tsugi no kikai wo tanoshimi ni shiteimasu.",
        start_msg: "（まゆこからLINEが届きました）",
        reaction_good: "まゆこ「えへへ！がんばる〜！」",
        reaction_bad: "まゆこ「先生、なんか変な字になってるよ？」",
        reaction_fast: "まゆこ「はやっ！うれしー！」",
        reaction_slow: "まゆこ「あれ？寝てた？まあいっか！」",
        image: "mayuko.png"
    },
    { 
        id: "msg_aiko", 
        subtype: "line",
        group: "3-2",
        sender: "蜂ケ崎 敢惟子",
        text: "先生、放課後の準備はあたしが仕切っといたよ。人手も配置も問題なし。",
        kana: "ありがとう。段取りしてくれて助かります。",
        romaji: "arigatou. dantori shite kurete tasukarimasu.",
        start_msg: "（あいこからLINEが届きました）",
        reaction_good: "あいこ「当然だね！」",
        reaction_bad: "あいこ「先生、そこ字が違うよ？」",
        reaction_fast: "あいこ「仕事早いね、先生。」",
        reaction_slow: "あいこ「ま、忙しいなら仕方ないか。」",
        image: "aiko.png"
    },

    { 
        id: "msg_yayoi", 
        subtype: "line",
        group: "3-2",
        sender: "深名 弥生",
        text: "先生、今日もアトリエ借ります。少し作業が長引きそうで。",
        kana: "わかりました。戸締まりだけ気をつけてください。",
        romaji: "wakarimashita. tojimari dake ki wo tsukete kudasai.",
        start_msg: "（やよいからLINEが届きました）",
        reaction_good: "やよい「了解です。」",
        reaction_bad: "やよい「先生、変な変換してますよ。」",
        reaction_fast: "やよい「早いですね。」",
        reaction_slow: "やよい「後で見ときます。」",
        image: "yayoi.png"
    },

    { 
        id: "msg_satsuki", 
        subtype: "line",
        group: "3-2",
        sender: "普賢 総都喜",
        text: "先生、次の生徒会資料ですが、少し補足を加えた方がよいかと思われます。",
        kana: "確認します。意見をありがとうございます。",
        romaji: "kakunin shimasu. iken wo arigatou gozaimasu.",
        start_msg: "（さつきからLINEが届きました）",
        reaction_good: "さつき「お役に立てれば幸いです。」",
        reaction_bad: "さつき「先生、誤字がございます。」",
        reaction_fast: "さつき「迅速なご対応、感謝します。」",
        reaction_slow: "さつき「ご都合のよい時で構いません。」",
        image: "satsuki.png"
    },

    { 
        id: "msg_hotomo", 
        subtype: "line",
        group: "3-2",
        sender: "扶蘇 補知",
        text: "先生、漬物できたんで、余ってたら職員室置いときます。",
        kana: "ありがとうございます。気持ちだけいただきますね。",
        romaji: "arigatou gozaimasu. kimochi dake itadakimasu ne.",
        start_msg: "（ほともからLINEが届きました）",
        reaction_good: "ほとも「そっすか。了解です。」",
        reaction_bad: "ほとも「先生、打ち間違えてますよ。」",
        reaction_fast: "ほとも「はや。」",
        reaction_slow: "ほとも「あとででいいですよ。」",
        image: "hotomo.png"
    },

    { 
        id: "msg_hoshi", 
        subtype: "line",
        group: "3-2",
        sender: "松気之宮 星",
        text: "先生、今夜星がよく見えそうっす。屋上、使ってもいいですか？",
        kana: "安全に配慮した上で、短時間なら許可します。",
        romaji: "anzen ni hairyo shita ue de, tanjikan nara kyoka shimasu.",
        start_msg: "（ほしからLINEが届きました）",
        reaction_good: "ほし「ありがとうございます！」",
        reaction_bad: "ほし「先生、そこ違いますよ〜。」",
        reaction_fast: "ほし「即レス助かります！」",
        reaction_slow: "ほし「あとででも大丈夫っす！」",
        image: "hoshi.png"
    },

    { 
        id: "msg_nami", 
        subtype: "line",
        group: "3-2",
        sender: "村瀬 奈美",
        text: "先生、さっき廊下で面白い光景を見ましたわ。ふふ。",
        kana: "詳しい内容は控えてください。",
        romaji: "kuwashii naiyou wa hikaete kudasai.",
        start_msg: "（なみからLINEが届きました）",
        reaction_good: "なみ「さすが先生、冷静ですわね。」",
        reaction_bad: "なみ「あら、先生？誤字ですわ。」",
        reaction_fast: "なみ「反応がお早いですわ〜。」",
        reaction_slow: "なみ「気づいたらで結構ですのよ。」",
        image: "nami.png"
    },
        // --- 1年1組 ---
    { 
        id: "msg_momoka",
        subtype: "line",
        group: "1-1",
        sender: "遠藤 桃花",
        text: "ねぇせんせ。今日の体育、あたし一番だったんだけど？ちゃんと見てた？🐾✨",
        kana: "きょうはよくがんばっていましたね。けがもなくてよかったです。",
        romaji: "kyou wa yoku ganbatte imashita ne. kega mo nakute yokatta desu.",
        start_msg: "（ももかからLINEが届きました）",
        reaction_good: "ももか「……べ、別に褒めてほしかったわけじゃないワン///」",
        reaction_bad: "ももか「は？せんせ、文おかしくない？ちゃんと書きなさいよ」",
        reaction_fast: "ももか「即レス？ふーん…まぁ、悪くないワン」",
        reaction_slow: "ももか「……ふん。あとでまとめて返すとか言わないでよ」",
        image: "momoka.png"
    },
    { 
        id: "msg_mimika",
        subtype: "line",
        group: "1-1",
        sender: "近藤 美々香",
        text: "先生、本日の給食ですが栄養バランスは問題ありませんでした。桃花がデザートを狙っていましたが。",
        kana: "ほうこくありがとう。みんなでなかよくたべるようにつたえてください。",
        romaji: "houkoku arigatou. minna de nakayoku taberu you ni tsutaete kudasai.",
        start_msg: "（みみかからLINEが届きました）",
        reaction_good: "みみか「ふふ、了解しました。さすが先生です」",
        reaction_bad: "みみか「先生、誤字があります。落ち着いて入力してください」",
        reaction_fast: "みみか「迅速な対応、感謝します」",
        reaction_slow: "みみか「少し返信が遅いようですね。業務多忙でしょうか？」",
        image: "mimika.png"
    },
    { 
        id: "msg_hinaka",
        subtype: "line",
        group: "1-1",
        sender: "辻山 妃菜華",
        text: "せんせー！今日の掃除めっちゃ早く終わったでー！うちら最強じゃない？😺✨",
        kana: "そうですね。みなさんがきょうりょくしてくれたおかげです。",
        romaji: "sou desu ne. minasan ga kyouryoku shite kureta okage desu.",
        start_msg: "（ひなかからLINEが届きました）",
        reaction_good: "ひなか「えへへ〜！先生わかっとるわ〜！」",
        reaction_bad: "ひなか「先生、文字へんじゃない？大丈夫そ？」",
        reaction_fast: "ひなか「はやっ！即レス神やん！」",
        reaction_slow: "ひなか「まだかな〜って待っとったんだけど〜」",
        image: "hinaka.png"
    },
    { 
        id: "msg_hikaru",
        subtype: "line",
        group: "1-1",
        sender: "黒見 晃",
        text: "なぁ先生！今日ハロウィンの飾り見た？オレあれテンション上がるんだけど！🎃🐈‍⬛",
        kana: "たのしみにできるのはいいことですね。ただしじゅんびはきそくをまもりましょう。",
        romaji: "tanoshimi ni dekiru no wa ii koto desu ne. tadashi junbi wa kisoku o mamorimashou.",
        start_msg: "（ひかるからLINEが届きました）",
        reaction_good: "ひかる「さすが先生！話わかる〜！」",
        reaction_bad: "ひかる「先生、そこ噛んでない？w」",
        reaction_fast: "ひかる「即返事くるの嬉しいわ〜！」",
        reaction_slow: "ひかる「あれ？寝てる？それとも忙しい？」",
        image: "hikaru.png"
    },
    { 
        id: "msg_seina",
        subtype: "line",
        group: "1-1",
        sender: "天雨 聖奈",
        text: "先生、明日の体操部の朝練、校庭使っていいですよね？確認です。",
        kana: "はい、しようきょかはとっています。あんぜんにちゅういしてください。",
        romaji: "hai, shiyou kyoka wa totte imasu. anzen ni chuui shite kudasai.",
        start_msg: "（せいなからLINEが届きました）",
        reaction_good: "せいな「了解です。助かります」",
        reaction_bad: "せいな「先生、誤字多くないですか？」",
        reaction_fast: "せいな「即確認ありがとうございます」",
        reaction_slow: "せいな「返信まだですか？準備に影響出ます」",
        image: "seina.png"
    },
    { 
        id: "msg_tetsu",
        subtype: "line",
        group: "1-1",
        sender: "市宮 哲",
        text: "せんせー！今日の実験めっちゃ楽しかったです！みんな個性バラバラで最高でした！🐱🧪",
        kana: "そういってもらえてうれしいです。つぎもあんぜんにたのしみましょう。",
        romaji: "sou itte moraete ureshii desu. tsugi mo anzen ni tanoshimimashou.",
        start_msg: "（てつからLINEが届きました）",
        reaction_good: "てつ「えへへ〜！先生だいすきです！」",
        reaction_bad: "てつ「先生、誤字ってますよ〜？」",
        reaction_fast: "てつ「即レス！先生ほんと優しい〜！」",
        reaction_slow: "てつ「あとでまとめてでも大丈夫ですよ〜！」",
        image: "tetsu.png"
    },
    { 
        id: "msg_towa",
        subtype: "line",
        group: "1-1",
        sender: "右幸 永遠",
        text: "先生〜今日の授業ちょっと長く感じたっす！オレ頑張った方じゃない？🧀🎮",
        kana: "さいごまでよくさんかしていましたね。このちょうしでいきましょう。",
        romaji: "saigo made yoku sanka shite imashita ne. kono choushi de ikimashou.",
        start_msg: "（とわからLINEが届きました）",
        reaction_good: "とわ「よっしゃ！褒められた！」",
        reaction_bad: "とわ「先生、そこ変換ミスってない？」",
        reaction_fast: "とわ「即レスありがと！テンション上がる〜！」",
        reaction_slow: "とわ「まぁ忙しいならしゃーないっすね！」",
        image: "towa.png"
    },
    { 
        id: "msg_mai",
        subtype: "line",
        group: "1-1",
        sender: "岡田 麻衣",
        text: "先生、今日の掃除当番、私一人でやっておきました。みんな忙しそうだったので。",
        kana: "ほうこくありがとう。ただし、つぎからはみんなでぶんたんしましょう。",
        romaji: "houkoku arigatou. tadashi, tsugi kara wa minna de buntan shimashou.",
        start_msg: "（まいからLINEが届きました）",
        reaction_good: "まい「……ふふ、先生って優しいですね」",
        reaction_bad: "まい「先生、誤字ありますよ。わざとですか？」",
        reaction_fast: "まい「即レスですね。暇なんですか？」",
        reaction_slow: "まい「あとで返すって、そういうの嫌いじゃないです」",
        image: "mai.png"
    },
    { 
        id: "msg_kosaku",
        subtype: "line",
        group: "1-1",
        sender: "小路 虎作",
        text: "せんせー！今日のお昼のお好み焼き、マジで俺ん家レベルやったで！誇ってええ？",
        kana: "そうですね。じまんはほどほどにして、まわりにもきをくばりましょう。",
        romaji: "sou desu ne. jiman wa hodohodo ni shite, mawari ni mo ki o kubarimashou.",
        start_msg: "（こさくからLINEが届きました）",
        reaction_good: "こさく「さすが先生、ツッコミ上手やな〜！」",
        reaction_bad: "こさく「先生、そこ日本語おかしない？w」",
        reaction_fast: "こさく「即レスやん！ノリええな〜！」",
        reaction_slow: "こさく「まぁ忙しいんはええことやで！」",
        image: "kosaku.png"
    },
    { 
        id: "msg_kotarou",
        subtype: "line",
        group: "1-1",
        sender: "川曽 虎太郎",
        text: "先生、今日ちょっとクラスの雰囲気良かったと思うんです。みんな笑顔でした。",
        kana: "そう感じたなら、とてもいいことですね。これからもたいせつにしましょう。",
        romaji: "sou kanjita nara, totemo ii koto desu ne. kore kara mo taisetsu ni shimashou.",
        start_msg: "（こたろうからLINEが届きました）",
        reaction_good: "こたろう「ありがとうございます。嬉しいです」",
        reaction_bad: "こたろう「先生、誤字ありますよ？」",
        reaction_fast: "こたろう「すぐ返してくれるの、安心します」",
        reaction_slow: "こたろう「後でも大丈夫ですよ」",
        image: "kotarou.png"
    },
    { 
        id: "msg_koto",
        subtype: "line",
        group: "1-1",
        sender: "雑敷 言",
        text: "先生、写真部の申請出しちょきました。今日はちょっと寒かったです。",
        kana: "れんらくありがとう。からだをひやさないようにしてください。",
        romaji: "renraku arigatou. karada o hiyasanai you ni shite kudasai.",
        start_msg: "（ことからLINEが届きました）",
        reaction_good: "こと「気にかけてくれて助かります」",
        reaction_bad: "こと「先生、文字間違うちゅうが」",
        reaction_fast: "こと「返信はやいですね」",
        reaction_slow: "こと「忙しいがやったら無理せんで」",
        image: "koto.png"
    },
    { 
        id: "msg_komari",
        subtype: "line",
        group: "1-1",
        sender: "杉山 虎毱",
        text: "せんせい、これ見て。おうちで作った棚なの。教室に置いてもいいかな？",
        kana: "すてきですね。あんぜんをかくにんしてからそうだんしましょう。",
        romaji: "suteki desu ne. anzen o kakunin shite kara soudan shimashou.",
        start_msg: "（こまりからLINEが届きました）",
        reaction_good: "こまり「よかった…ほめられた」",
        reaction_bad: "こまり「せんせい、へんな文字あるよ？」",
        reaction_fast: "こまり「すぐ見てくれてありがとう」",
        reaction_slow: "こまり「あとででもいいよ」",
        image: "komari.png"
    },
    { 
        id: "msg_ai",
        subtype: "line",
        group: "1-1",
        sender: "園田 藍",
        text: "先生、本日もお疲れさまです。クラス運営、大変そうでいらっしゃいますね。",
        kana: "きづかいありがとうございます。これからもよろしくおねがいします。",
        romaji: "kizukai arigatou gozaimasu. kore kara mo yoroshiku onegaishimasu.",
        start_msg: "（あいからLINEが届きました）",
        reaction_good: "あい「ふふ…素直に返されると、つまらないですわね」",
        reaction_bad: "あい「あら？先生、誤字ですわ。余裕がありませんの？」",
        reaction_fast: "あい「即レスとは…優等生ですわ」",
        reaction_slow: "あい「放置ですか。ふーん…」",
        image: "ai.png"
    },
    { 
        id: "msg_akaru",
        subtype: "line",
        group: "1-1",
        sender: "成政 明流",
        text: "先生見て見てー！今日も新作パーティーハット完成！被る？🎉🐱",
        kana: "きもちだけうけとっておきます。がっこうではひかえましょう。",
        romaji: "kimochi dake uketotte okimasu. gakkou de wa hikaemashou.",
        start_msg: "（あかるからLINEが届きました）",
        reaction_good: "あかる「さすが先生！ノリわかってる〜！」",
        reaction_bad: "あかる「先生、変換ミスってるよ〜！」",
        reaction_fast: "あかる「即レスうれしー！」",
        reaction_slow: "あかる「忙しいなら仕方ないっすね！」",
        image: "akaru.png"
    },
    { 
        id: "msg_kojiro",
        subtype: "line",
        group: "1-1",
        sender: "二瓶 小次郎",
        text: "先生、今日の音楽室、少し長く使ってしまいました。問題ありませんでしたか？",
        kana: "れんらくありがとう。つぎからはじかんをいしきしましょう。",
        romaji: "renraku arigatou. tsugi kara wa jikan o ishiki shimashou.",
        start_msg: "（こじろうからLINEが届きました）",
        reaction_good: "こじろう「はい、気をつけます」",
        reaction_bad: "こじろう「先生、変換が違います」",
        reaction_fast: "こじろう「すぐ確認していただいて助かります」",
        reaction_slow: "こじろう「後でで大丈夫です」",
        image: "kojiro.png"
    },
    { 
        id: "msg_kaede",
        subtype: "line",
        group: "1-1",
        sender: "速川 楓",
        text: "先生さぁ、今日の写真、私が一番可愛く写ってないんだけど？撮り直ししない？",
        kana: "しゃしんはこうへいにあつかいます。ごりかいください。",
        romaji: "shashin wa kouhei ni atsukaimasu. gorikai kudasai.",
        start_msg: "（かえでからLINEが届きました）",
        reaction_good: "かえで「ふーん…まぁいっか」",
        reaction_bad: "かえで「先生、日本語ヘンじゃない？」",
        reaction_fast: "かえで「即レス？意外と仕事できるじゃん」",
        reaction_slow: "かえで「放置はちょっと傷つくんだけど」",
        image: "kaede.png"
    },
    { 
        id: "msg_sei",
        subtype: "line",
        group: "1-1",
        sender: "腹巻 青",
        text: "先生！明日の準備、クラス代表として俺がまとめます！指示ください！",
        kana: "たのもしいですね。むりのないはんいでおねがいします。",
        romaji: "tanomoshii desu ne. muri no nai hani de onegaishimasu.",
        start_msg: "（せいからLINEが届きました）",
        reaction_good: "せい「はい！全力でやります！」",
        reaction_bad: "せい「先生、誤字あります！」",
        reaction_fast: "せい「即返信ありがとうございます！」",
        reaction_slow: "せい「後ででも待ちます！」",
        image: "sei.png"
    },
    { 
        id: "msg_setsuna",
        subtype: "line",
        group: "1-1",
        sender: "谷幡 節捺",
        text: "せんせぇ…メモ帳どこ入れたか分からんくなったと。新聞のネタも一緒に消えた…",
        kana: "まずはおちついて、かばんのなかをいっしょにかくにんしましょう。",
        romaji: "mazu wa ochitsuite, kaban no naka o issho ni kakunin shimashou.",
        start_msg: "（せつなからLINEが届きました）",
        reaction_good: "せつな「やさしかぁ…助かる」",
        reaction_bad: "せつな「せんせ、へんな字あるばい」",
        reaction_fast: "せつな「すぐ返ってきた！」",
        reaction_slow: "せつな「あとででよかよ〜」",
        image: "setsuna.png"
    },
    { 
        id: "msg_kofuku",
        subtype: "line",
        group: "1-1",
        sender: "山神 小福",
        text: "先生、本日も山の巡回を終えました。異常はありません。",
        kana: "ほうこくありがとう。あんぜんをさいゆうせんで。",
        romaji: "houkoku arigatou. anzen o sai yuusen de.",
        start_msg: "（こふくからLINEが届きました）",
        reaction_good: "こふく「了解しました」",
        reaction_bad: "こふく「先生、表記が違います」",
        reaction_fast: "こふく「迅速な対応、感謝します」",
        reaction_slow: "こふく「問題ありません」",
        image: "kofuku.png"
    },
    { 
        id: "msg_masaki",
        subtype: "line",
        group: "1-1",
        sender: "勇惣 柾季",
        text: "先生、少し相談したいことがあります。明日、時間をいただけますか。",
        kana: "わかりました。あした、ほうかごにきてください。",
        romaji: "wakarimashita. ashita, houkago ni kite kudasai.",
        start_msg: "（まさきからLINEが届きました）",
        reaction_good: "まさき「ありがとうございます」",
        reaction_bad: "まさき「先生、誤字があります」",
        reaction_fast: "まさき「すぐ対応していただいて助かります」",
        reaction_slow: "まさき「お忙しいところすみません」",
        image: "masaki.png"
    },
        // --- 1年2組 ---
    { 
        id: "msg_mari",
        subtype: "line",
        group: "1-2",
        sender: "愛野 麻理",
        text: "せんせい…今日の課題、まだ途中です。提出、遅れても大丈夫でしょうか…",
        kana: "だいじょうぶですよ。むりのないぺーすでしあげてください。",
        romaji: "daijoubu desu yo. muri no nai peesu de shiagete kudasai.",
        start_msg: "（まりからLINEが届きました）",
        reaction_good: "まり「……ありがとうございます」",
        reaction_bad: "まり「せんせい、へんかんがちがいます…」",
        reaction_fast: "まり「すぐ返してくれて、少し安心しました」",
        reaction_slow: "まり「いそいでないので、大丈夫です…」",
        image: "mari.png"
    },
    { 
        id: "msg_machie",
        subtype: "line",
        group: "1-2",
        sender: "井漕 舞茅依",
        text: "先生、本日の活動についてご報告です。全体の士気も高く、良い流れでした。",
        kana: "ほうこくありがとうございます。これからもよろしくおねがいします。",
        romaji: "houkoku arigatou gozaimasu. kore kara mo yoroshiku onegaishimasu.",
        start_msg: "（まちえからLINEが届きました）",
        reaction_good: "まちえ「はい！期待に応えます」",
        reaction_bad: "まちえ「先生、誤字がありますよ」",
        reaction_fast: "まちえ「迅速なご返信、助かります」",
        reaction_slow: "まちえ「後ほどで結構です」",
        image: "machie.png"
    },
    { 
        id: "msg_hebiki",
        subtype: "line",
        group: "1-2",
        sender: "石原 蛇喜",
        text: "せんせー、明日ちょっと体調あやしくてさー。無理せんほうがいいかな？",
        kana: "たいちょうがさいゆうせんです。むりはしないでください。",
        romaji: "taichou ga sai yuusen desu. muri wa shinaide kudasai.",
        start_msg: "（へびきからLINEが届きました）",
        reaction_good: "へびき「ありがとねー、助かるさー」",
        reaction_bad: "へびき「せんせ、へんな字あるよー？」",
        reaction_fast: "へびき「即返信ありがとー！」",
        reaction_slow: "へびき「あとででいいさー」",
        image: "hebiki.png"
    },
    { 
        id: "msg_mirai",
        subtype: "line",
        group: "1-2",
        sender: "岩結 未来",
        text: "先生！今日のテスト、悔しかったけど次はもっと上げたいです！",
        kana: "そのいきごみはだいじです。つぎもいっしょにがんばりましょう。",
        romaji: "sono ikigomi wa daiji desu. tsugi mo issho ni ganbarimashou.",
        start_msg: "（みらいからLINEが届きました）",
        reaction_good: "みらい「はい！やる気出ました！」",
        reaction_bad: "みらい「先生、打ち間違いありますよ！」",
        reaction_fast: "みらい「即レス最高です！」",
        reaction_slow: "みらい「忙しいですよね、大丈夫です！」",
        image: "mirai.png"
    },
    { 
        id: "msg_miru",
        subtype: "line",
        group: "1-2",
        sender: "遠藤 海松",
        text: "せんせー！今日ね、めっちゃ笑ったんだけど聞いてほしい〜！",
        kana: "またあした、がっこうでおはなしをきかせてください。",
        romaji: "mata ashita, gakkou de ohanashi o kikasete kudasai.",
        start_msg: "（みるからLINEが届きました）",
        reaction_good: "みる「やったー！絶対話す！」",
        reaction_bad: "みる「せんせ、へんかんミスってる！」",
        reaction_fast: "みる「即レス嬉しすぎ！」",
        reaction_slow: "みる「あとでもいーよー！」",
        image: "miru.png"
    },
    { 
        id: "msg_shirube",
        subtype: "line",
        group: "1-2",
        sender: "鬼弦 導",
        text: "……先生。提出物、机に置いてあります。",
        kana: "かくにんしました。れんらくありがとう。",
        romaji: "kakunin shimashita. renraku arigatou.",
        start_msg: "（しるべからLINEが届きました）",
        reaction_good: "しるべ「……はい」",
        reaction_bad: "しるべ「……ちがう」",
        reaction_fast: "しるべ「……もう見たんだ」",
        reaction_slow: "しるべ「……問題ない」",
        image: "shirube.png"
    },
    { 
        id: "msg_yuu",
        subtype: "line",
        group: "1-2",
        sender: "柏倉 佑",
        text: "先生、これ可愛いと思って買ったんですけど…男が持ってても変じゃないですか？",
        kana: "すきなものをたいせつにしていいとおもいますよ。",
        romaji: "suki na mono o taisetsu ni shite ii to omoimasu yo.",
        start_msg: "（ゆうからLINEが届きました）",
        reaction_good: "ゆう「……少し自信出ました」",
        reaction_bad: "ゆう「先生、文字まちがってます…」",
        reaction_fast: "ゆう「すぐ返してくれて嬉しいです」",
        reaction_slow: "ゆう「お時間あるときで大丈夫です」",
        image: "yuu.png"
    },
    { 
        id: "msg_kanon",
        subtype: "line",
        group: "1-2",
        sender: "雲然 翔暖",
        text: "せんせー！今日さ、オレのモノマネ見た？🐦✨ ちょっと似とらんかった？w",
        kana: "もくひょうをもってれんしゅうするのは、とてもいいことですよ。",
        romaji: "mokuhyou o motte renshuu suru no wa totemo ii koto desu yo",
        start_msg: "（かのんからLINEが届きました）",
        reaction_good: "かのん「やろ〜？えへへ、せんせーにほめられた✨」",
        reaction_bad: "かのん「せんせ、そこ誤字しとるちゃ！w」",
        reaction_fast: "かのん「はやっ！即レスうれし〜！」",
        reaction_slow: "かのん「寝とった？まぁいっか〜」",
        image: "kanon.png"
    },
    { 
        id: "msg_bunta",
        subtype: "line",
        group: "1-2",
        sender: "小桂 文太",
        text: "せんせ、新聞部の原稿〆切、ちょい伸ばしてもええ？📰",
        kana: "しめきりはだいじです。けいかくてきにすすめましょう。",
        romaji: "shimekiri wa daiji desu keikakuteki ni susumemashou",
        start_msg: "（ぶんたからLINEが届きました）",
        reaction_good: "ぶんた「さすが先生、話わかるわ」",
        reaction_bad: "ぶんた「先生、誤字ってんで？w」",
        reaction_fast: "ぶんた「仕事はや…助かるわ」",
        reaction_slow: "ぶんた「まぁ忙しいわな」",
        image: "bunta.png"
    },
    { 
        id: "msg_fumiko",
        subtype: "line",
        group: "1-2",
        sender: "小玉 史子",
        text: "先生、オカリナの音、うるさくなかったでしょうか…？",
        kana: "まわりにきづかいできていて、とてもりっぱですよ。",
        romaji: "mawari ni kizukai dekite ite totemo rippa desu yo",
        start_msg: "（ふみこからLINEが届きました）",
        reaction_good: "ふみこ「…ありがとうございます。安心しました」",
        reaction_bad: "ふみこ「せ、先生…誤字があります…」",
        reaction_fast: "ふみこ「すぐお返事くださって、嬉しいです」",
        reaction_slow: "ふみこ「お忙しいところ、すみません…」",
        image: "fumiko.png"
    },
    { 
        id: "msg_kome",
        subtype: "line",
        group: "1-2",
        sender: "素麺 米",
        text: "せんせぇ…あしたのじゅんび、まだなにもしてないんだけど……",
        kana: "すこしずつでいいので、じぶんでやってみましょう。",
        romaji: "sukoshi zutsu de ii node jibun de yatte mimashou",
        start_msg: "（こめからLINEが届きました）",
        reaction_good: "こめ「えぇ〜…がんばるぅ…」",
        reaction_bad: "こめ「せんせ、まちがってるよぉ？」",
        reaction_fast: "こめ「まだおきてたんだ〜」",
        reaction_slow: "こめ「……ねちゃった？」",
        image: "kome.png"
    },
    { 
        id: "msg_yuji",
        subtype: "line",
        group: "1-2",
        sender: "高槁 優侍",
        text: "先生、本日の規則違反について確認したい点があります。",
        kana: "きそくはみんなをまもるためのものです。",
        romaji: "kisoku wa minna o mamoru tame no mono desu",
        start_msg: "（ゆうじからLINEが届きました）",
        reaction_good: "ゆうじ「はい。納得しました」",
        reaction_bad: "ゆうじ「先生、誤字は看過できません」",
        reaction_fast: "ゆうじ「迅速な対応、感謝します」",
        reaction_slow: "ゆうじ「後ほどで構いません」",
        image: "yuji.png"
    },
    { 
        id: "msg_kyo",
        subtype: "line",
        group: "1-2",
        sender: "辻山 郷",
        text: "……先生。これ、提出しといた方がいいですか。",
        kana: "はい、きょうのうちにだしておきましょう。",
        romaji: "hai kyou no uchi ni dashite okimashou",
        start_msg: "（きょうからLINEが届きました）",
        reaction_good: "きょう「……わかりました」",
        reaction_bad: "きょう「……誤字、あります」",
        reaction_fast: "きょう「……助かります」",
        reaction_slow: "きょう「……後でいいです」",
        image: "kyo.png"
    },
    { 
        id: "msg_ayu",
        subtype: "line",
        group: "1-2",
        sender: "鳥飼 歩",
        text: "せんせー！今日のHR、ちょっと元気出た！ありがとー！",
        kana: "そういってもらえて、せんせいもうれしいです。",
        romaji: "sou itte moraete sensei mo ureshii desu",
        start_msg: "（あゆからLINEが届きました）",
        reaction_good: "あゆ「えへへ！また話そ！」",
        reaction_bad: "あゆ「先生、誤字ってるってば〜w」",
        reaction_fast: "あゆ「即レス！最高〜！」",
        reaction_slow: "あゆ「あとででも大丈夫だよ！」",
        image: "ayu.png"
    },
    { 
        id: "msg_kohaku",
        subtype: "line",
        group: "1-2",
        sender: "西 琥博",
        text: "先生。本日、廊下を走っていた生徒を注意しました。対応に問題はありませんでしたか。",
        kana: "てきせつなたいおうだったとおもいます。つづけてください。",
        romaji: "tekisetsu na taiou datta to omoimasu tsuzukete kudasai",
        start_msg: "（こはくからLINEが届きました）",
        reaction_good: "こはく「…承知しました」",
        reaction_bad: "こはく「先生、誤字があります。確認を」",
        reaction_fast: "こはく「迅速な返信、感謝します」",
        reaction_slow: "こはく「後ほどで構いません」",
        image: "kohaku.png"
    },
    { 
        id: "msg_megumu",
        subtype: "line",
        group: "1-2",
        sender: "根峯 萠",
        text: "先生、クラスのことで少し気になることがあってさ。今度時間もらえる？",
        kana: "はい、らいしゅうでよければはなしをききますよ。",
        romaji: "hai raishuu de yokereba hanashi o kikimasu yo",
        start_msg: "（めぐむからLINEが届きました）",
        reaction_good: "めぐむ「助かる。やっぱ先生だわ」",
        reaction_bad: "めぐむ「先生、誤字ってるからw」",
        reaction_fast: "めぐむ「仕事早いね」",
        reaction_slow: "めぐむ「忙しいよね、後でいいよ」",
        image: "megumu.png"
    },
    { 
        id: "msg_yutasuke",
        subtype: "line",
        group: "1-2",
        sender: "身浦 柚太允",
        text: "先生…今日の授業、少し難しかったですけど、楽しかったです。",
        kana: "そういってもらえてうれしいです。よくがんばりましたね。",
        romaji: "sou itte moraete ureshii desu yoku ganbarimashita ne",
        start_msg: "（ゆたすけからLINEが届きました）",
        reaction_good: "ゆたすけ「ありがとうございます…」",
        reaction_bad: "ゆたすけ「せ、先生…誤字が…」",
        reaction_fast: "ゆたすけ「すぐ返してくれて嬉しいです」",
        reaction_slow: "ゆたすけ「お忙しいところ、すみません」",
        image: "yutasuke.png"
    },
    { 
        id: "msg_suo",
        subtype: "line",
        group: "1-2",
        sender: "村瀬 蘇芳",
        text: "先生ってさ、なんでそんな真面目に相手してくれるわけ？",
        kana: "ひとりひとりとむきあうのが、せんせいのしごとです。",
        romaji: "hitori hitori to mukiau no ga sensei no shigoto desu",
        start_msg: "（すおうからLINEが届きました）",
        reaction_good: "すおう「ふーん…物好き」",
        reaction_bad: "すおう「誤字ってるよ、先生」",
        reaction_fast: "すおう「即レスとは意外」",
        reaction_slow: "すおう「まぁ気長に待つけど」",
        image: "suo.png"
    },
    { 
        id: "msg_erua",
        subtype: "line",
        group: "1-2",
        sender: "茂地 榎留愛",
        text: "先生、今日ちょっと元気なかったけど、大丈夫？",
        kana: "きづかってくれてありがとう。だいじょうぶですよ。",
        romaji: "kizukatte kurete arigatou daijoubu desu yo",
        start_msg: "（えるあからLINEが届きました）",
        reaction_good: "えるあ「ならいいけど」",
        reaction_bad: "えるあ「先生、そこ誤字」",
        reaction_fast: "えるあ「早いね」",
        reaction_slow: "えるあ「無理しないで」",
        image: "erua.png"
    },
    { 
        id: "msg_mibana",
        subtype: "line",
        group: "1-2",
        sender: "本梶 美花",
        text: "先生。別に相談じゃないけど…今日の判断、悪くなかったと思う。",
        kana: "そういってもらえると、せんせいもほっとします。",
        romaji: "sou itte moraeru to sensei mo hotto shimasu",
        start_msg: "（みばなからLINEが届きました）",
        reaction_good: "みばな「……べつに」",
        reaction_bad: "みばな「誤字。気づいてないでしょ」",
        reaction_fast: "みばな「…はや」",
        reaction_slow: "みばな「あとで読んどく」",
        image: "mibana.png"
    },
    { 
        id: "msg_rinon",
        subtype: "line",
        group: "1-3",
        sender: "浅苧 李音",
        text: "先生。次の発表、私が一番取ります。結果、見ててください。",
        kana: "いしきがたかいのはよいことです。じゅんびもしっかりしましょう。",
        romaji: "ishiki ga takai no wa yoi koto desu junbi mo shikkari shimashou",
        start_msg: "（りのんからLINEが届きました）",
        reaction_good: "りのん「はい。期待に応えます」",
        reaction_bad: "りのん「先生、そこ誤字です」",
        reaction_fast: "りのん「早いですね。助かります」",
        reaction_slow: "りのん「後で見てもらえれば大丈夫です」",
        image: "rinon.png"
    },
    { 
        id: "msg_kisora",
        subtype: "line",
        group: "1-3",
        sender: "井之尾 希空",
        text: "あのね…先生。きそら、ちゃんとできてた…？",
        kana: "はい。きちんとできていましたよ。あんしんしてください。",
        romaji: "hai kichinto dekite imashita yo anshin shite kudasai",
        start_msg: "（きそらからLINEが届きました）",
        reaction_good: "きそら「……よかった」",
        reaction_bad: "きそら「せ、先生…まちがってる」",
        reaction_fast: "きそら「すぐ返ってきた…！」",
        reaction_slow: "きそら「いそがしかったら、あとでいいよ」",
        image: "kisora.png"
    },
    { 
        id: "msg_soji",
        subtype: "line",
        group: "1-3",
        sender: "牛沢 蒼司",
        text: "先生！俺さ、もっとデカいことやっていい？イキってこーぜ！",
        kana: "いきごみはたいせつですが、るーるはまもりましょう。",
        romaji: "ikigomi wa taisetsu desu ga ruuru wa mamorimashou",
        start_msg: "（そうじからLINEが届きました）",
        reaction_good: "そうじ「さすが先生、現実的！」",
        reaction_bad: "そうじ「先生、そこミスってね？」",
        reaction_fast: "そうじ「ノリ早っ！」",
        reaction_slow: "そうじ「まぁ気長に待つけど！」",
        image: "soji.png"
    },
    { 
        id: "msg_ritsu",
        subtype: "line",
        group: "1-3",
        sender: "大江 浬積",
        text: "先生、今日の僕どうだった？ちゃんと美しかったよね☆",
        kana: "せいりされたみだしなみで、こうかんがもてましたよ。",
        romaji: "seiri sareta midashinami de koukan ga motemashita yo",
        start_msg: "（りつからLINEが届きました）",
        reaction_good: "りつ「ふふ☆やっぱりね！」",
        reaction_bad: "りつ「先生、誤字は美しくないよ？」",
        reaction_fast: "りつ「即レス…愛を感じる☆」",
        reaction_slow: "りつ「あとででも大丈夫だよ☆」",
        image: "ritsu.png"
    },
    { 
        id: "msg_honoka",
        subtype: "line",
        group: "1-3",
        sender: "大野 蓬乃果",
        text: "ねぇ先生、それって本当に正しいと思って言ってる？",
        kana: "いけんのひとつとして、きちょうにうけとめます。",
        romaji: "iken no hitotsu to shite kichou ni uketomemasu",
        start_msg: "（ほのかからLINEが届きました）",
        reaction_good: "ほのか「へぇ、意外と冷静じゃん」",
        reaction_bad: "ほのか「先生、誤字ってるけど？」",
        reaction_fast: "ほのか「レス早いのは評価する」",
        reaction_slow: "ほのか「まぁ忙しいよね」",
        image: "honoka.png"
    },
    { 
        id: "msg_yui",
        subtype: "line",
        group: "1-3",
        sender: "土市 結衣",
        text: "先生ぇ…今日、ゆいちょっと不安でさ。かまってほしいな。",
        kana: "きもちがふあんなときは、むりしなくていいですよ。",
        romaji: "kimochi ga fuanna toki wa muri shinakute ii desu yo",
        start_msg: "（ゆいからLINEが届きました）",
        reaction_good: "ゆい「……先生やさしい」",
        reaction_bad: "ゆい「ねぇ、そこ誤字だよ？」",
        reaction_fast: "ゆい「即レスうれしい…」",
        reaction_slow: "ゆい「既読ついたから安心」",
        image: "yui.png"
    },
    { 
        id: "msg_tayori",
        subtype: "line",
        group: "1-3",
        sender: "自念 頼",
        text: "先生、クラスの雰囲気が少し不安定な気がします。僕にできること、ありますか？",
        kana: "きづいてくれてありがとうございます。むりのないはんいでだいじょうぶですよ。",
        romaji: "kizuite kurete arigatou gozaimasu muri no nai hani de daijoubu desu yo",
        start_msg: "（たよりからLINEが届きました）",
        reaction_good: "たより「少し安心しました」",
        reaction_bad: "たより「先生、そこ誤字ですね」",
        reaction_fast: "たより「早い返信、助かります」",
        reaction_slow: "たより「落ち着いたらで構いません」",
        image: "tayori.png"
    },
    { 
        id: "msg_mugi",
        subtype: "line",
        group: "1-3",
        sender: "素麺 麦",
        text: "せんせー！きょうさぁ、あたちめっちゃねむくてさ〜！でもがんばったっけ！えらい！？",
        kana: "がんばったのはえらいですね。じゅぎょうちゅうはしっかりおきましょう。",
        romaji: "ganbatta no wa erai desu ne jugyou chuu wa shikkari okimashou",
        start_msg: "（むぎからLINEが届きました）",
        reaction_good: "むぎ「でしょでしょ〜！むぎ天才らてば！」",
        reaction_bad: "むぎ「せんせ、そこまちがってる！」",
        reaction_fast: "むぎ「はやっ！せんせ神だっけ！」",
        reaction_slow: "むぎ「まぁいっか〜そのうちで〜」",
        image: "mugi.png"
    },
    { 
        id: "msg_aoi",
        subtype: "line",
        group: "1-3",
        sender: "二十八 碧",
        text: "先生、今日の作業、少し難しかったですけど…やりきれました。",
        kana: "さいごまでやれたのはりっぱですよ。つぎもがんばりましょう。",
        romaji: "saigo made yareta no wa rippa desu yo tsugi mo ganbarimashou",
        start_msg: "（あおいからLINEが届きました）",
        reaction_good: "あおい「ありがとうございます」",
        reaction_bad: "あおい「あ、先生…誤字あります」",
        reaction_fast: "あおい「すぐ返ってきて嬉しいです」",
        reaction_slow: "あおい「お忙しいですよね」",
        image: "aoi.png"
    },
    { 
        id: "msg_yuhi",
        subtype: "line",
        group: "1-3",
        sender: "直宿 夕日",
        text: "先生さw 今日の授業ちょっと長くね？俺もう限界なんだけどw",
        kana: "たいりょくのかんりもたいせつです。きゅうけいはとりましょう。",
        romaji: "tairyoku no kanri mo taisetsu desu kyuukei wa torimashou",
        start_msg: "（ゆうひからLINEが届きました）",
        reaction_good: "ゆうひ「ま、先生にしては優しいじゃんw」",
        reaction_bad: "ゆうひ「先生、誤字ってて草」",
        reaction_fast: "ゆうひ「レスはえーw」",
        reaction_slow: "ゆうひ「既読ついたからOKw」",
        image: "yuhi.png"
    },
    { 
        id: "msg_atsushi",
        subtype: "line",
        group: "1-3",
        sender: "天王寺 淳志",
        text: "先生！夜って暗いからさ、ぼく星になったらいいと思わない？",
        kana: "すてきなかんがえですが、いまはがくぎょうをたいせつにしましょう。",
        romaji: "suteki na kangae desu ga ima wa gakugyou wo taisetsu ni shimashou",
        start_msg: "（あつしからLINEが届きました）",
        reaction_good: "あつし「えへへ！ほしのじゅんし！」",
        reaction_bad: "あつし「あれ？先生まちがえてる？」",
        reaction_fast: "あつし「もう返ってきた！」",
        reaction_slow: "あつし「あとででもいいよ〜」",
        image: "atsushi.png"
    },
    { 
        id: "msg_kuu",
        subtype: "line",
        group: "1-3",
        sender: "中井 空羽",
        text: "……別に用はない。ただ連絡来てたから。",
        kana: "れんらくしてくれてありがとう。ようがあればいつでもどうぞ。",
        romaji: "renraku shite kurete arigatou you ga areba itsu demo douzo",
        start_msg: "（くうからLINEが届きました）",
        reaction_good: "くう「……ふん」",
        reaction_bad: "くう「誤字。ださい」",
        reaction_fast: "くう「即レスかよ」",
        reaction_slow: "くう「別にいい」",
        image: "kuu.png"
    },
    { 
        id: "msg_noriomi",
        subtype: "line",
        group: "1-3",
        sender: "永丘 紀臣",
        text: "先生、お疲れ様です。今日も平和で何よりですね。",
        kana: "そうですね。あんていしたいちにちでした。",
        romaji: "sou desu ne antei shita ichinichi deshita",
        start_msg: "（のりおみからLINEが届きました）",
        reaction_good: "のりおみ「それは何よりです」",
        reaction_bad: "のりおみ「先生、誤字がありますよ」",
        reaction_fast: "のりおみ「迅速ですね」",
        reaction_slow: "のりおみ「お忙しいのでしょう」",
        image: "noriomi.png"
    },
    {
        id: "msg_meri",
        subtype: "line",
        group: "1-3",
        sender: "仲村 愛梨",
        text: "先生…！今日、わたしが貸した本、生徒さんがよごしちゃって……でも、わたしのかんりがわるかったのかもって……すみません……📖🐰",
        kana: "きにしなくていいですよ。せんせいのほうで、あとで対応します。",
        romaji: "kinishinakute ii desu yo sensei no hou de ato de taiou shimasu",
        start_msg: "（めりからLINEが届きました）",
        reaction_good: "めり「……ありがとうございます。せんせい、やさしいです……☺️」",
        reaction_bad: "めり「……あの、その……漢字、ちがってます……💦」",
        reaction_fast: "めり「すぐお返事……！ほんとうに、ありがとうございます……🐇✨」",
        reaction_slow: "めり「……お忙しいですよね。大丈夫です……」",
        image: "meri.png"
    },
    {
        id: "msg_soshi",
        subtype: "line",
        group: "1-3",
        sender: "美戸 創至",
        text: "せんせい、この前考えたアイデア、じつは特許になるかもしれなくて……！もしよかったら、意見もらえますか？🚀",
        kana: "いいですね。あとで、くわしく聞かせてください。",
        romaji: "ii desu ne ato de kuwashiku kikasete kudasai",
        start_msg: "（そうしからLINEが届きました）",
        reaction_good: "そうし「やった……！せんせいにそういってもらえて、嬉しいです！」",
        reaction_bad: "そうし「……あ、そこ、ちょっと誤字ありますね……🙂」",
        reaction_fast: "そうし「即レス……！これはもう、発明の神に祝福されてます！」",
        reaction_slow: "そうし「あとででも大丈夫です！待ってますね🌱」",
        image: "soshi.png"
    },
    {
        id: "msg_kouta",
        subtype: "line",
        group: "1-3",
        sender: "桃山 小歌",
        text: "先生。今日の会議のないよう、まとめておきました。なにか足りないところがあれば、ご指摘ください。",
        kana: "ありがとうございます。とても助かります。",
        romaji: "arigatou gozaimasu totemo tasukarimasu",
        start_msg: "（こうたからLINEが届きました）",
        reaction_good: "こうた「お役に立てたなら、うれしいです……！」",
        reaction_bad: "こうた「……先生、そこ誤字があります。確認お願いします。」",
        reaction_fast: "こうた「迅速なご確認、ありがとうございます。励みになります。」",
        reaction_slow: "こうた「ご多忙のところ、失礼しました。後ほどで構いません。」",
        image: "kouta.png"
    },
    {
        id: "msg_misaki",
        subtype: "line",
        group: "1-3",
        sender: "勇惣 岬咲",
        text: "せんせい……お兄ちゃんに、手紙書いたんですけど……この漢字、あってますか……？✉️",
        kana: "きもちが伝わっていますよ。そのままで大丈夫です。",
        romaji: "kimochi ga tsutawatteimasu yo sono mama de daijoubu desu",
        start_msg: "（みさきからLINEが届きました）",
        reaction_good: "みさき「……よかったです。ありがとうございます……！」",
        reaction_bad: "みさき「……あの……先生の返事、まちがってます……💦」",
        reaction_fast: "みさき「すぐお返事……！お兄ちゃんにも、そうつたえます……☺️」",
        reaction_slow: "みさき「後ででも、全然大丈夫です……」",
        image: "misaki.png"
    },
    {
        id: "msg_nagisa",
        subtype: "line",
        group: "1-3",
        sender: "代々木 渚",
        text: "ねぇせんせ！きょうのルール、ちょっと厳しすぎじゃない？まぁ守るけどさ〜🐻",
        kana: "いけんは受け取りました。ありがとうございます。",
        romaji: "iken wa uketorimashita arigatou gozaimasu",
        start_msg: "（なぎさからLINEが届きました）",
        reaction_good: "なぎさ「うわ、ちゃんと聞いてくれるんだ。やるじゃん先生！」",
        reaction_bad: "なぎさ「先生、誤字ってるよ？そこ、地味にダサいよ？w」",
        reaction_fast: "なぎさ「即レス！？先生ヒマなの？それとも私特別？w」",
        reaction_slow: "なぎさ「まぁ忙しいよね〜。既読ついたしヨシ！」",
        image: "nagisa.png"
    },
    {
        id: "msg_hibiki",
        subtype: "line",
        group: "1-3",
        sender: "楽得 響",
        text: "せんせぇぇ！！あしたの体育、ぜったいオレが一番やからな！！コケコッコー！！！🐔🔥",
        kana: "けがをしないように、がんばってください。",
        romaji: "kega o shinai you ni ganbatte kudasai",
        start_msg: "（ひびきからLINEが届きました）",
        reaction_good: "ひびき「おう！！せんせも見とけよォ！！」",
        reaction_bad: "ひびき「はぁ！？せんせ、誤字っとるやんけ！！」",
        reaction_fast: "ひびき「はやっ！！せんせ、ノリええやん！！」",
        reaction_slow: "ひびき「既読おっそ！！まぁええわ！！」",
        image: "hibiki.png"
    },
    {
        id: "msg_yukihiko",
        subtype: "line",
        group: "1-4",
        sender: "池里 雪彦",
        text: "せんせー！きょう、わちのノートどっかいっちゃってさ〜！ゆきひこ団のだいじなページだったのに〜！！🐩💦",
        kana: "おちついて、まわりをよくさがしてみましょう。",
        romaji: "ochitsuite mawari o yoku sagashite mimashou",
        start_msg: "（ゆきひこからLINEが届きました）",
        reaction_good: "ゆきひこ「さすがせんせー！わち、ちょっと元気でた！」",
        reaction_bad: "ゆきひこ「えっ、せんせ、そこ誤字ってるよ！？わちでもわかる！」",
        reaction_fast: "ゆきひこ「はやっ！せんせー、わちのこと見てた！？」",
        reaction_slow: "ゆきひこ「まぁいっか！そのうち出てくる気がするし！」",
        image: "yukihiko.png"
    },
    {
        id: "msg_yuuki",
        subtype: "line",
        group: "1-4",
        sender: "市川 宥暉",
        text: "せんせ、きょうの運勢みる？いまなら無料だよ〜🔮✨",
        kana: "ありがとう。でも、じゅぎょうをゆうせんしてください。",
        romaji: "arigatou demo jugyou o yuusen shite kudasai",
        start_msg: "（ゆうきからLINEが届きました）",
        reaction_good: "ゆうき「さすが先生！現実派だね〜！」",
        reaction_bad: "ゆうき「あれ？先生、漢字ちがくない？占いより気になるw」",
        reaction_fast: "ゆうき「即レス！これは今日ツイてるやつ！」",
        reaction_slow: "ゆうき「忙しそうだね〜、あとで声かけるよ！」",
        image: "yuuki.png"
    },
    {
        id: "msg_maaya",
        subtype: "line",
        group: "1-4",
        sender: "卯瀧 真綾",
        text: "先生、今日の授業、とても心に残りました……思い出として、大切にいたします🌸",
        kana: "そういってもらえて、うれしいです。",
        romaji: "sou itte moraete ureshii desu",
        start_msg: "（まあやからLINEが届きました）",
        reaction_good: "まあや「こちらこそ、ありがとうございます……✨」",
        reaction_bad: "まあや「あの……先生、少し誤字がございますね……」",
        reaction_fast: "まあや「お早いお返事……上品で素敵です……」",
        reaction_slow: "まあや「ご多忙のところ、失礼いたしました……」",
        image: "maaya.png"
    },
    {
        id: "msg_uruu",
        subtype: "line",
        group: "1-4",
        sender: "槐原 潤",
        text: "せんせ、これ提出でよかですか？ちょっと工作、がんばったとです✂️",
        kana: "はい。きちんとできていますよ。",
        romaji: "hai kichinto dekiteimasu yo",
        start_msg: "（うるうからLINEが届きました）",
        reaction_good: "うるう「よかった……それ聞いて安心したと」",
        reaction_bad: "うるう「あれ？せんせ、そこ文字ちがうとよ？」",
        reaction_fast: "うるう「はやか……助かりました」",
        reaction_slow: "うるう「あとででよかですよ〜」",
        image: "uruu.png"
    },
    {
        id: "msg_haruka",
        subtype: "line",
        group: "1-4",
        sender: "栢島 遥香",
        text: "先生ー！きょうのクラス、なんか雰囲気よくないですか？みんな仲良くなれそう〜♪",
        kana: "そうですね。いいクラスにしていきましょう。",
        romaji: "sou desu ne ii kurasu ni shite ikimashou",
        start_msg: "（はるかからLINEが届きました）",
        reaction_good: "はるか「ですよねですよね！先生、最高！」",
        reaction_bad: "はるか「先生〜、そこ誤字！でも気持ちは伝わる！」",
        reaction_fast: "はるか「即レス！？嬉しすぎるんですけど！」",
        reaction_slow: "はるか「忙しいですよね！また話しましょー！」",
        image: "haruka.png"
    },
    {
        id: "msg_sui",
        subtype: "line",
        group: "1-4",
        sender: "狩生 彗威",
        text: "せんせ、廊下走んなって言われたんだけどさ、オレ悪くなくね？",
        kana: "ルールは守りましょう。",
        romaji: "ruuru wa mamorimashou",
        start_msg: "（すいからLINEが届きました）",
        reaction_good: "すい「チッ……まぁ、しゃーねぇか」",
        reaction_bad: "すい「は？先生、誤字ってんじゃん。ダセぇ」",
        reaction_fast: "すい「即レスとかマジかよ……」",
        reaction_slow: "すい「既読ついたからいーや」",
        image: "sui.png"
    },
    {
        id: "msg_ayato",
        subtype: "line",
        group: "1-4",
        sender: "後等 綺乙",
        text: "せんせー！授業ちょっと退屈でオラ、椅子から落っこちた！納豆は投げてねぇから安心して！",
        kana: "まず、けがはありませんか。",
        romaji: "mazu kega wa arimasen ka",
        start_msg: "（あやとからLINEが届きました）",
        reaction_good: "あやと「へへっ、せんせやさし〜！」",
        reaction_bad: "あやと「せんせ、そこ文字ちげぇぞ！w」",
        reaction_fast: "あやと「はっや！オラ見張られてる？」",
        reaction_slow: "あやと「まぁいっか！オラ元気だし！」",
        image: "ayato.png"
    },
    {
        id: "msg_mikoto",
        subtype: "line",
        group: "1-4",
        sender: "櫻井 甫詞",
        text: "せんせ、今日の判断、うち的には悪うなかった思いますえ。場の空気、よう見てはりましたなぁ🦭",
        kana: "そう言ってもらえて助かります。",
        romaji: "sou itte moraete tasukarimasu",
        start_msg: "（みことからLINEが届きました）",
        reaction_good: "みこと「ふふ、せんせ、なかなか肝が据わってはりますな」",
        reaction_bad: "みこと「ん？先生、そこ誤字してはるえ？」",
        reaction_fast: "みこと「即断即決…嫌いやないですわ」",
        reaction_slow: "みこと「忙しそうどすな。無理せんといて」",
        image: "mikoto.png"
    },
    {
        id: "msg_taichi",
        subtype: "line",
        group: "1-4",
        sender: "土川 卓逸",
        text: "先生、提出物…これで全部揃ってますよね？一応、三回確認しました。",
        kana: "はい、きちんとそろっています。",
        romaji: "hai kichinto sorotteimasu",
        start_msg: "（たいちからLINEが届きました）",
        reaction_good: "たいち「よかった……安心しました」",
        reaction_bad: "たいち「あ、先生……そこ誤字です……」",
        reaction_fast: "たいち「は、早い……ありがとうございます」",
        reaction_slow: "たいち「急ぎじゃないので、大丈夫です」",
        image: "taichi.png"
    },
    {
        id: "msg_roi",
        subtype: "line",
        group: "1-4",
        sender: "손 로이",
        text: "先生、今日の授業内容、合理的でした。無駄が少ない。評価します…ニダ。",
        kana: "そう感じてもらえたなら、うれしいです。",
        romaji: "sou kanjite moraetanara ureshii desu",
        start_msg: "（ろいからLINEが届きました）",
        reaction_good: "ろい「感情論ではなく、事実で返す…良いニダ」",
        reaction_bad: "ろい「先生、誤字がある。修正推奨ニダ」",
        reaction_fast: "ろい「即レス…想定より早い」",
        reaction_slow: "ろい「返信は不要でした。問題ないニダ」",
        image: "roi.png"
    },
    {
        id: "msg_sayaka",
        subtype: "line",
        group: "1-4",
        sender: "寺田 山茶花",
        text: "先生……あの……今日の授業、少しだけ……安心しましたえ🍵",
        kana: "そう言ってもらえて、よかったです。",
        romaji: "sou itte moraete yokatta desu",
        start_msg: "（さやかからLINEが届きました）",
        reaction_good: "さやか「……ありがとうございます……」",
        reaction_bad: "さやか「せ、先生……そこ……誤字どす……」",
        reaction_fast: "さやか「すぐ返ってきて……びっくりしました」",
        reaction_slow: "さやか「お忙しいところ、すみません……」",
        image: "sayaka.png"
    },
    {
        id: "msg_akatsuki",
        subtype: "line",
        group: "1-4",
        sender: "二瓶 暁",
        text: "……先生、ピアノのことなんだけどさ。別に、相談ってほどじゃない。",
        kana: "話したくなったら、いつでも聞きます。",
        romaji: "hanashitakunattara itsudemo kikimasu",
        start_msg: "（あかつきからLINEが届きました）",
        reaction_good: "あかつき「……そ。じゃあ、また今度」",
        reaction_bad: "あかつき「は？先生、誤字ってるし」",
        reaction_fast: "あかつき「……即レスとか、やりにくい」",
        reaction_slow: "あかつき「……まぁ、いいや」",
        image: "akatsuki.png"
    },
    {
        id: "msg_enya",
        subtype: "line",
        group: "1-4",
        sender: "暗 援也",
        text: "先生、今日もクラスは平和だったろ？つまりオレのおかげってことでOK？🐺✨",
        kana: "みんなの協力のおかげです。",
        romaji: "minna no kyouryoku no okage desu",
        start_msg: "（えんやからLINEが届きました）",
        reaction_good: "えんや「だよな！やっぱオレ、ヒーローだわ！」",
        reaction_bad: "えんや「先生、誤字ってるぞ？ヒーローは見逃さない！」",
        reaction_fast: "えんや「即レス！これは信頼されてる証！」",
        reaction_slow: "えんや「まぁ忙しいよな、世界守ってるし！」",
        image: "enya.png"
    },
    {
        id: "msg_maya",
        subtype: "line",
        group: "1-4",
        sender: "保福 真夜",
        text: "せんせ……さっき、他の子と話してましたよね。べつに……いいですけど。",
        kana: "順番に話していますから、心配しなくて大丈夫ですよ。",
        romaji: "junban ni hanashiteimasu kara shinpai shinakute daijoubu desu",
        start_msg: "（まやからLINEが届きました）",
        reaction_good: "まや「……なら、いいです」",
        reaction_bad: "まや「先生、そこ……誤字。ちゃんと見てますから」",
        reaction_fast: "まや「すぐ返してくれるんですね……」",
        reaction_slow: "まや「……既読、ついてましたよね？」",
        image: "maya.png"
    },
    {
        id: "msg_yoru",
        subtype: "line",
        group: "1-4",
        sender: "御厨 夜",
        text: "せんせ〜、あした朝ムリかもしれん。夜、全然寝れんかったとよ🐈‍⬛",
        kana: "無理のないように、気をつけて来てください。",
        romaji: "muri no nai you ni ki o tsukete kite kudasai",
        start_msg: "（よるからLINEが届きました）",
        reaction_good: "よる「やさしか〜……」",
        reaction_bad: "よる「先生、誤字しとるばい？」",
        reaction_fast: "よる「まだ起きとったと？」",
        reaction_slow: "よる「……もう寝たん？」",
        image: "yoru.png"
    },
    {
        id: "msg_sadama",
        subtype: "line",
        group: "1-4",
        sender: "満山 渉守",
        text: "先生、今後このクラスで問題が起きた場合、対応は事前に共有されますか？",
        kana: "必要なことは、事前に伝えます。",
        romaji: "hitsuyou na koto wa jizen ni tsutaemasu",
        start_msg: "（さだまからLINEが届きました）",
        reaction_good: "さだま「了解しました。合理的ですね」",
        reaction_bad: "さだま「先生、誤字があります。確認を」",
        reaction_fast: "さだま「即答、助かります」",
        reaction_slow: "さだま「後ほどで構いません」",
        image: "sadama.png"
    },
    {
        id: "msg_kaji",
        subtype: "line",
        group: "1-4",
        sender: "源口 舵",
        text: "せんせー！今日さ！新聞紙に描いたねこ、みんなに配った！ダメだった！？",
        kana: "次からは、事前に相談してください。",
        romaji: "tsugi kara wa jizen ni soudan shite kudasai",
        start_msg: "（かじからLINEが届きました）",
        reaction_good: "かじ「えー！でも楽しかった！」",
        reaction_bad: "かじ「せんせ、誤字ってるよ〜！」",
        reaction_fast: "かじ「はやっ！見てた！？」",
        reaction_slow: "かじ「……もう片付けたけど！」",
        image: "kaji.png"
    },
    {
        id: "msg_alice",
        subtype: "line",
        group: "1-4",
        sender: "恵 愛麗糸",
        text: "……先生。昼寝、邪魔しないでほしい。夢の方が現実よりマシだから。",
        kana: "授業中は、起きていましょう。",
        romaji: "jugyou chuu wa okite imashou",
        start_msg: "（ありすからLINEが届きました）",
        reaction_good: "ありす「……ちぇ」",
        reaction_bad: "ありす「先生、誤字。現実見て？」",
        reaction_fast: "ありす「……起きてる時に返すんだ」",
        reaction_slow: "ありす「もう寝たからいいや」",
        image: "alice.png"
    },
    {
        id: "msg_shunki",
        subtype: "line",
        group: "1-4",
        sender: "吉岡 俊樹",
        text: "先生〜、赤点ってさ、人生にどれくらい影響すると思う？🦉",
        kana: "努力次第で、いくらでも変えられます。",
        romaji: "doryoku shidai de ikurademo kaeraremasu",
        start_msg: "（しゅんきからLINEが届きました）",
        reaction_good: "しゅんき「おー、希望系の答え！」",
        reaction_bad: "しゅんき「先生、誤字は不苦労じゃないよ？」",
        reaction_fast: "しゅんき「まだ起きてたんだ」",
        reaction_slow: "しゅんき「まぁ、あとで聞くわ」",
        image: "shunki.png"
    },
    // -------------------------------------
    // 📣 先生の指示
    // -------------------------------------
    { 
        id: "inst_01", 
        subtype: "instruction",
        group: "teacher",
        text: "廊下を走らないこと。怪我をしますよ。", 
        kana: "ろうかをはしらないこと。けがをしますよ。", 
        romaji: "rouka wo hasiranai koto kega wo simasu yo", 
        start_msg: "（生活指導部からの連絡事項です）",
        reaction_good: "生活指導部「周知徹底、ありがとうございます。」",
        reaction_bad: "生活指導部「先生、噛んでますよ。威厳が台無しです。」",
        image: "teacher_03.png"
    },
    { 
        id: "inst_02", 
        subtype: "instruction", 
        group: "teacher",
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
        group: "teacher",
        text: "あわわっ！黒板消し落としちゃいましたぁ〜💦", 
        kana: "あわわっ！こくばんけしおとしちゃいましたぁ〜💦", 
        romaji: "awawa kokubankesi otosite simaimasita", 
        start_msg: "芽衣先生「せ、先生！助けてくださぁい！」",
        reaction_good: "芽衣先生「拾ってくれてありがとうございますぅ😭✨」",
        reaction_bad: "芽衣先生「あぅっ…先生までつられて転ばないでくださいぃ💦」",
        image: "mei.png"
    },
    { 
        id: "inst_katsumi", 
        subtype: "instruction", 
        group: "teacher",
        text: "気合いだ！声が小さいぞ！グラウンド１０周！", 
        kana: "きあいだ！こえがちいさいぞ！ぐらうんどじゅっしゅう！", 
        romaji: "kiaida koe ga tiisai zo guraundo jussyuu", 
        start_msg: "克己先生「おーい先生！生徒への檄（げき）を頼む！」",
        reaction_good: "克己先生「いい声だ！それが青春だ！！🔥」",
        reaction_bad: "克己先生「なんだその情けないタイプミスは！腕立て伏せだ！」",
        reaction_fast: "克己先生「いい反射神経だ！スポーツマンの鑑だな！！」",
        reaction_slow: "克己先生「たるんどる！！お前のやる気はそんなものか！！」",
        image: "katsumi.png"
    },
    { 
        id: "inst_science", 
        subtype: "instruction", 
        group: "teacher",
        text: "理科室のビーカーを割ったのは誰ですか？", 
        kana: "りかしつのびーかーをわったのはだれですか？", 
        romaji: "rikasitsu no bi-ka- wo watta no wa dare desu ka", 
        start_msg: "（職員室にて、犯人探し中…）",
        reaction_good: "村雨先生「…正直に名乗り出れば、減刑してやります。」",
        reaction_bad: "村雨先生「…動揺していますね。まさか先生、貴方が？」"
    },

    // -------------------------------------
    // 🙏 生徒からの依頼（DM）
    // -------------------------------------
    // --- 2年1組 ---
    { 
        id: "req_miriya", 
        subtype: "request",
        group: "2-1",
        sender: "相原 美里耶",
        start_msg: "みりや「先生。バイト先の予約メモ、正確に入力したいので確認をお願いします。」",
        text: "ご予約は三名様、十九時より禁煙席希望",
        kana: "ごよやくはさんめいさま じゅうくじよりきんえんせききぼう",
        romaji: "goyoyaku wa sanmeisama juukuji yori kinen seki kibou",
        reaction_good: "みりや「問題ありません。先生、さすがですね。」",
        reaction_bad: "みりや「……誤字があります。修正をお願いします。」",
        image: "miriya.png"
    },
    { 
        id: "req_hitori", 
        subtype: "request",
        group: "2-1",
        sender: "阿見 一人",
        start_msg: "ひとり「先生……左腕が疼く。闇の契約文、代わりに入力してくれ。」",
        text: "漆黒の契約は血と影によって結ばれる",
        kana: "しっこくのけいやくはちとかげによってむすばれる",
        romaji: "shikkoku no keiyaku wa chi to kage ni yotte musubareru",
        reaction_good: "ひとり「……フッ。やはり先生も選ばれし者か。」",
        reaction_bad: "ひとり「誤字だ。闇が拒んでいる……クク。」",
        image: "hitori.png"
    },
    { 
        id: "req_ketsui", 
        subtype: "request",
        group: "2-1",
        sender: "海老ケ迫 決意",
        start_msg: "けつい「先生、船の予約案内文、代わりに打ってもらえますかの。」",
        text: "明日の遊漁船は朝六時出航予定です",
        kana: "あしたのゆうぎょせんはあさろくじしゅっこうよていです",
        romaji: "ashita no yuugyosen wa asa rokuji shukkou yotei desu",
        reaction_good: "けつい「助かりました。ほんま、頼りになりますわ。」",
        reaction_bad: "けつい「ありゃ、そこ違うとる。落ち着いていきましょ。」",
        image: "ketsui.png"
    },
    { 
        id: "req_ameri", 
        subtype: "request",
        group: "2-1",
        sender: "岡崎 愛芽里",
        start_msg: "あめり「せ、先生……日記の一文、うまく打てなくて……。」",
        text: "今日はお気に入りのリボンをつけて出かけた",
        kana: "きょうはおきにいりのりぼんをつけてでかけた",
        romaji: "kyou wa okiniiri no ribon wo tsukete dekaketa",
        reaction_good: "あめり「……ありがとうございます。」",
        reaction_bad: "あめり「あっ……まちがってますよ、そこ……。」",
        image: "ameri.png"
    },
    { 
        id: "req_shogo", 
        subtype: "request",
        group: "2-1",
        sender: "神崎 奨午",
        start_msg: "しょうご「先生、カフェの新メニュー説明文、確認してもらえますか？」",
        text: "香ばしいカフェオレと自家製スイーツのセット",
        kana: "こうばしいかふぇおれとじかせいすいーつのせっと",
        romaji: "koubashii kafeore to jikasei sui-tsu no setto",
        reaction_good: "しょうご「完璧です。先生、ほんと頼りになりますね。」",
        reaction_bad: "しょうご「あれ……先生、ちょっと誤字ありますよ？」",
        image: "shogo.png"
    },
    { 
        id: "req_yuko", 
        subtype: "request",
        group: "2-1",
        sender: "橘定 由子",
        start_msg: "ゆこ「先生……内緒ですが、案内状の文章、確認していただけます？」",
        text: "静かな時間を大切な方とお過ごしください",
        kana: "しずかなじかんをたいせつなかたとおすごしください",
        romaji: "shizuka na jikan wo taisetsu na kata to osugoshi kudasai",
        reaction_good: "ゆこ「……ありがとうございます。安心しました。」",
        reaction_bad: "ゆこ「先生、誤字があります。少し気になりますね。」",
        image: "yuko.png"
    },
    {
    id: "req_akira",
    subtype: "request",
    group: "2-1",
    sender: "霧生 曙",
    start_msg: "あきら「先生。牧場の案内文を入力する必要がある。正確に頼む」",
    text: "放牧された羊たちがのびのびと暮らす高原の牧場",
    kana: "ほうぼくされたひつじたちがのびのびとくらすこうげんのぼくじょう",
    romaji: "houboku sareta hitsujitachi ga nobinobi to kurasu kougen no bokujou",
    reaction_good: "あきら「……完璧だ。さすが先生だな」",
    reaction_bad: "あきら「入力ミスか？次は慎重にやれ、先生」",
    image: "akira.png"
    },
    {
    id: "req_tomoki",
    subtype: "request",
    group: "2-1",
    sender: "久堂 朋己",
    start_msg: "ともき「先生、クラス掲示用の文章まとめたい。入力お願いできる？」",
    text: "協力と規律を大切にし全員で目標を達成する",
    kana: "きょうりょくときりつをたいせつにしぜんいんでもくひょうをたっせいする",
    romaji: "kyouryoku to kiritsu o taisetsu ni shi zenin de mokuhyou o tassei suru",
    reaction_good: "ともき「いいね、読みやすい。助かったよ先生」",
    reaction_bad: "ともき「あれ？誤字あるぞ先生。詰めが甘いな」",
    image: "tomoki.png"
    },
    {
    id: "req_wataru",
    subtype: "request",
    group: "2-1",
    sender: "君国 航",
    start_msg: "わたる「先生。提出用資料の一文を入力してほしい」",
    text: "細部まで妥協せず完成度を追求する姿勢",
    kana: "さいぶまでだきょうせずかんせいどをついきゅうするしせい",
    romaji: "saibu made dakyou sezu kanseido o tsuikyuu suru shisei",
    reaction_good: "わたる「問題ない。正確だ」",
    reaction_bad: "わたる「……誤りがある。やり直してくれ、先生」",
    image: "wataru.png"
    },
    {
    id: "req_zakuro",
    subtype: "request",
    group: "2-1",
    sender: "更級 柘榴",
    start_msg: "ざくろ「せ、先生……ノートの表紙用の文、入力お願いしてもいいですか」",
    text: "静かな努力はやがて確かな力になる",
    kana: "しずかなどりょくはやがてたしかなちからになる",
    romaji: "shizuka na doryoku wa yagate tashika na chikara ni naru",
    reaction_good: "ざくろ「あ……ありがとうございます。助かりました」",
    reaction_bad: "ざくろ「えっ……ま、間違ってます……」",
    image: "zakuro.png"
    },
    {
    id: "req_kotori",
    subtype: "request",
    group: "2-1",
    sender: "酒々井 小鳥",
    start_msg: "ことり「先生〜、課題の一文だけ入力してくれん？」",
    text: "ほどほどに力を抜いて楽しむことも大切",
    kana: "ほどほどにちからをぬいてたのしむこともたいせつ",
    romaji: "hodohodo ni chikara o nuite tanoshimu koto mo taisetsu",
    reaction_good: "ことり「おー、完璧やん。先生できるねぇ」",
    reaction_bad: "ことり「あれ？ミスっとるよ先生。気ぃ抜きすぎやろ」",
    image: "kotori.png"
    },
    {
    id: "req_mikina",
    subtype: "request",
    group: "2-1",
    sender: "鈴木 幹菜",
    start_msg: "みきな「先生、イベント用の説明文、入力お願い！」",
    text: "みんなで笑顔になれる楽しい時間を届けます",
    kana: "みんなでえがおになれるたのしいじかんをとどけます",
    romaji: "minna de egao ni nareru tanoshii jikan o todokemasu",
    reaction_good: "みきな「いいね！さすが先生！」",
    reaction_bad: "みきな「あれ〜？先生ミスってるよ？」",
    image: "mikina.png"
    },
    {
    id: "req_iseri",
    subtype: "request",
    group: "2-1",
    sender: "寸土 壱芹",
    start_msg: "いせり「センセー！掲示板に貼る文、入力してくれへん？」",
    text: "ちいさな体でも元気いっぱい全力前進",
    kana: "ちいさなからだでもげんきいっぱいぜんりょくぜんしん",
    romaji: "chiisana karada demo genki ippai zenryoku zenshin",
    reaction_good: "いせり「おお！さすがセンセやな！」",
    reaction_bad: "いせり「なんやこれ、ミスっとるやん！やり直しやで〜」",
    image: "iseri.png"
    },
    {
    id: "req_maria",
    subtype: "request",
    group: "2-1",
    sender: "猫谷 茉莉亜",
    start_msg: "まりあ「先生、教会のお知らせ文を入力していただけますか？」",
    text: "静かな祈りと温かな心を大切にしています",
    kana: "しずかないのりとあたたかなこころをたいせつにしています",
    romaji: "shizuka na inori to atataka na kokoro o taisetsu ni shiteimasu",
    reaction_good: "まりあ「ありがとうございます。とても助かりました」",
    reaction_bad: "まりあ「あら……少し間違っているみたいですね」",
    image: "maria.png"
    },
    {
    id: "req_migiwa_fix",
    subtype: "request",
    group: "2-1",
    sender: "舟濤 汀",
    
    // 先生には標準語で明るく
    start_msg: "みぎわ「先生、水兵部の案内文、入力お願いできます？ 大事なスローガンなんです！」",
    
    text: "仲間と支え合いながら海を目指して進む",
    kana: "なかまとささえあいながらうみをめざしてすすむ",
    romaji: "nakama to sasaeai nagara umi o mezashite susumu",
    // Good: 感動して方言が出る
    reaction_good: "みぎわ「完璧です！ ありがとうございます先生！ さすがじゃわ〜！」",
    // Bad: 思わずツッコミが出る
    reaction_bad: "みぎわ「あれ？ 先生、ここ間違ってますよ？ ……ああんもう、ちゃんとしてぇな！」",
    
    image: "migiwa.png"
    },
    {
    id: "req_ryogo",
    subtype: "request",
    group: "2-1",
    sender: "水上 亮吾",
    start_msg: "りょうご「先生、機材説明の一文を入力してもらえますか」",
    text: "精密な調整が安全と信頼につながる",
    kana: "せいみつなちょうせいがあんぜんとしんらいにつながる",
    romaji: "seimitsu na chousei ga anzen to shinrai ni tsunagaru",
    reaction_good: "りょうご「正確ですね。助かります」",
    reaction_bad: "りょうご「少し誤りがありますね……」",
    image: "ryogo.png"
    },
    {
    id: "req_jiha",
    subtype: "request",
    group: "2-1",
    sender: "恵 時生",
    start_msg: "じは「ねぇ先生〜！私の座右の銘、入力してほしいんじょ！」",
    text: "思いついたらすぐ行動それが私のスタイル",
    kana: "おもいついたらすぐこうどうそれがわたしのすたいる",
    romaji: "omoitsuitara sugu koudou sore ga watashi no sutairu",
    reaction_good: "じは「やるじゃん先生！ほうなんよ、それが私なんじょ！」",
    reaction_bad: "じは「え〜ミス？先生しっかりしてよ〜！頼むけん！」",
    image: "jiha.png"
    },
    { 
        id: "req_rei", 
        subtype: "request", 
        group: "2-1",
        sender: "用達 怜",
        start_msg: "れい「先生、生徒会で使う『目安箱』のポスターを作りたいのですが、キャッチコピーを入力していただけますか？」",
        text: "あなたの声が学校を変える。生徒会意見箱設置中。", 
        kana: "あなたのこえががっこうをかえる。せいとかいいけんばこせっちちゅう。", 
        romaji: "anata no koe ga gakkou wo kaeru seitokai ikenbako setti cyuu", 
        reaction_good: "れい「完璧です。美しいフォントで印刷しておきますね。」",
        reaction_bad: "れい「先生、誤字はポスターの信頼性を損ないますよ。（黒笑）」",
        image: "rei.png"
    },
// --- 2-2 修正分 ---
    {
    id: "req_yae",
    subtype: "request",
    group: "2-2",
    sender: "藍河 八重",
    start_msg: "やえ「……先生。日記に書く言葉……入力してほしい。」",
    text: "自分の気持ちを探しながらゆっくり進む",
    kana: "じぶんのきもちをさがしながらゆっくりすすむ",
    romaji: "jibun no kimochi o sagashinagara yukkuri susumu",
    reaction_good: "やえ「……ありがとう。これで……忘れずにすむ。」",
    reaction_bad: "やえ「……誤字、ある。ちゃんと見て……。」",
    image: "yae.png"
    },
    {
    id: "req_akari",
    subtype: "request",
    group: "2-2",
    sender: "味野 灯莉",
    start_msg: "あかり「せんせー！クラスの目標、この文入力してほしいなっ！」",
    text: "毎日を楽しく前向きに過ごそう",
    kana: "まいにちをたのしくまえむきにすごそう",
    romaji: "mainichi o tanoshiku maemuki ni sugosou",
    reaction_good: "あかり「わー！完璧〜！さすが先生！元気出たー！」",
    reaction_bad: "あかり「あれ？先生ミスってない？w ドンマイ！」",
    image: "akari.png"
    },
    {
    id: "req_enishi",
    subtype: "request",
    group: "2-2",
    sender: "鼬川 絵丹師",
    start_msg: "えにし「……個展のキャプション（説明文）、入力頼めるけ？」",
    text: "静かな線の中に感情を込めて描く",
    kana: "しずかなせんのなかにかんじょうをこめてえがく",
    romaji: "shizuka na sen no naka ni kanjou o komete egaku",
    reaction_good: "えにし「……悪くない。ありがとう。いい感じや。」",
    reaction_bad: "えにし「……先生、線がブレとるよ。集中して。」",
    image: "enishi.png"
    },
    {
    id: "req_matoi",
    subtype: "request",
    group: "2-2",
    sender: "芋縄 的倭",
    start_msg: "まとい「先生、オレのメモ帳にこの一文、入力してけろ。」",
    text: "身体で感じたことを信じて進む",
    kana: "からだでかんじたことをしんじてすすむ",
    romaji: "karada de kanjita koto o shinjite susumu",
    reaction_good: "まとい「……いいな。助かった。」",
    reaction_bad: "まとい「そこ違ぇべ。ちゃんと打て。」",
    image: "matoi.png"
    },
    {
    id: "req_suzu",
    subtype: "request",
    group: "2-2",
    sender: "忍足 鈴",
    start_msg: "すず「先生、この掟（おきて）、入力をお願いしますに。」",
    text: "決まりを守ることで全体の調和が保たれる",
    kana: "きまりをまもることでぜんたいのちょうわがたもたれる",
    romaji: "kimari o mamoru koto de zentai no chouwa ga tamotareru",
    reaction_good: "すず「正確やんな。ありがとうございます。」",
    reaction_bad: "すず「誤字がありますに。やり直してください。」",
    image: "suzu.png"
    },
    {
    id: "req_arin",
    subtype: "request",
    group: "2-2",
    sender: "小犬丸 愛凛",
    start_msg: "ありん「先生、ボランティア部のスローガン、入力してもらえますか？」",
    text: "誰かの役に立てることが私の喜びです",
    kana: "だれかのやくにたてることがわたしのよろこびです",
    romaji: "dareka no yaku ni tateru koto ga watashi no yorokobi desu",
    reaction_good: "ありん「ありがとうございます！すごく助かりました！」",
    reaction_bad: "ありん「あっ……先生、少し間違ってます……。」",
    image: "arin.png"
    },
    {
    id: "req_yasashi",
    subtype: "request",
    group: "2-2",
    sender: "霜降 柔",
    start_msg: "やさし「先生、体操部の掲示用にこれ入力してもらってもいいですか？」",
    text: "柔軟性を高めることで怪我を防ぐ",
    kana: "じゅうなんせいをたかめることでけがをふせぐ",
    romaji: "juunansei o takameru koto de kega o fusegu",
    reaction_good: "やさし「ありがとうございます！先生ほんと優しいですね。」",
    reaction_bad: "やさし「あっ…先生、そこ打ち間違えてますよ。」",
    image: "yasashi.png"
    },
    { 
    id: "req_rui", 
    subtype: "request", 
    group: "2-2",
    sender: "春潮楼 塁",
    start_msg: "るい「センセ！姉ちゃんのチーズ店のメニュー表、英語がわかんなくて…代わりに入力頼める？」",
    text: "こだわりの濃厚カマンベールチーズとワインのセット", 
    kana: "こだわりののうこうかまんべーるちーずとわいんのせっと", 
    romaji: "kodawari no noukou kamanbe-ru ti-zu to wain no setto", 
    reaction_good: "るい「すげー！センセ英語もいけるんスね！助かった〜！」",
    reaction_bad: "るい「あ、センセも英語苦手？俺と同じ匂いがする…w」",
    image: "rui.png"
    },
    {
    id: "req_makishi",
    subtype: "request",
    group: "2-2",
    sender: "鈴木 槙士",
    start_msg: "まきし「センセ！僕の格言！サクッと入力お願い♪」",
    text: "マヨネーズはすべてを解決する",
    kana: "まよねーずはすべてをかいけつする",
    romaji: "mayoneezu wa subete o kaiketsu suru",
    reaction_good: "まきし「っしゃ！完璧じゃん！先生最高〜！」",
    reaction_bad: "まきし「あれ？センセ、指すべってない？w」",
    image: "makishi.png"
    },
    {
    id: "req_shige",
    subtype: "request",
    group: "2-2",
    sender: "仲馬 穣",
    start_msg: "しげ「せ、先生…給食の目標、入力お願いしてもよかですか…？」",
    text: "落ち着いてゆっくり食べることが大切",
    kana: "おちついてゆっくりたべることがたいせつ",
    romaji: "ochitsuite yukkuri taberu koto ga taisetsu",
    reaction_good: "しげ「あ、ありがとうございます…助かりました。」",
    reaction_bad: "しげ「す、すみません…先生、ちょっと違っとります…。」",
    image: "shige.png"
    },
    {
    id: "req_hakomo",
    subtype: "request",
    group: "2-2",
    sender: "出逢 箱藻",
    start_msg: "はこも「……先生。ふと思ったこと……入力、頼んでいい？」",
    text: "考えることをやめないでいよう",
    kana: "かんがえることをやめないでいよう",
    romaji: "kangaeru koto o yamenai de iyou",
    reaction_good: "はこも「……うん。ありがと。」",
    reaction_bad: "はこも「……違う。そこ。」",
    image: "hakomo.png"
    },
    {
    id: "req_shizuka",
    subtype: "request",
    group: "2-2",
    sender: "灰住 鎮花",
    start_msg: "しずか「先生、学習計画の表紙、入力をお願いいたします。」",
    text: "基礎を完璧に理解することが重要です",
    kana: "きそをかんぺきにりかいすることがじゅうようです",
    romaji: "kiso o kanpeki ni rikai suru koto ga juuyou desu",
    reaction_good: "しずか「ありがとうございます。満点です。」",
    reaction_bad: "しずか「誤字があります。評価が下がります。」",
    image: "shizuka.png"
    },
    {
    id: "req_mirin",
    subtype: "request",
    group: "2-2",
    sender: "萩枝 美琳",
    start_msg: "みりん「せんせ〜♡インスタのキャプション、入力してほしいなっ♪」",
    text: "かわいいは正義で世界を救う",
    kana: "かわいいはせいぎでせかいをすくう",
    romaji: "kawaii wa seigi de sekai o sukuu",
    reaction_good: "みりん「さすが先生〜！だいすきっ♡」",
    reaction_bad: "みりん「えー？先生ミスってるよ〜？w」",
    image: "mirin.png"
    },
    {
    id: "req_yuzu",
    subtype: "request",
    group: "2-2",
    sender: "昆沙丸 柚子",
    start_msg: "ゆず「先生、商品の説明……入力してもらえますか。」",
    text: "福を呼ぶ招き猫の置物",
    kana: "ふくをよぶまねきねこのおきもの",
    romaji: "fuku o yobu manekineko no okimono",
    reaction_good: "ゆず「……うん。ありがとう。運、上がった気がする。」",
    reaction_bad: "ゆず「先生、そこ違う。運、逃げる。」",
    image: "yuzu.png"
    },
    {
    id: "req_shinon",
    subtype: "request",
    group: "2-2",
    sender: "細物 詩温",
    start_msg: "しのん「先生……保健室へのメモ、お願いできますか……。」",
    text: "静かな場所でゆっくり休む",
    kana: "しずかなばしょでゆっくりやすむ",
    romaji: "shizuka na basho de yukkuri yasumu",
    reaction_good: "しのん「ありがとうございます……少し、安心しました。」",
    reaction_bad: "しのん「……あ、ごめんなさい。先生、そこ間違ってます……。」",
    image: "shinon.png"
    },
    {
    id: "req_hikari",
    subtype: "request",
    group: "2-2",
    sender: "法華 光里",
    start_msg: "ひかり「先生、私のルールブック、入力してください。」",
    text: "事実と感情は分けて考える",
    kana: "じじつとかんじょうはわけてかんがえる",
    romaji: "jijitsu to kanjou wa wakete kangaeru",
    reaction_good: "ひかり「……正確ですね。信頼できます。」",
    reaction_bad: "ひかり「今の、明らかに誤入力です。わかりますよ。」",
    image: "hikari.png"
    },
    {
    id: "req_kozue",
    subtype: "request",
    group: "2-2",
    sender: "柞原 梢",
    start_msg: "こずえ「先生、一句詠みましたんで…入力してほしいんやけど。」",
    text: "夏の夜空に咲く大輪の花火",
    kana: "なつのよぞらにさくだいりんのはなび",
    romaji: "natsu no yozora ni saku dairinn no hanabi",
    reaction_good: "こずえ「……ふふ、きれいですね。おおきに。」",
    reaction_bad: "こずえ「あら…先生、そこ違いますえ。」",
    image: "kozue.png"
    },
    {
    id: "req_yamato",
    subtype: "request",
    group: "2-2",
    sender: "雪村 大和",
    start_msg: "やまと「先生、新作のかき氷メニュー、入力してくりょう。」",
    text: "氷山の天然かき氷",
    kana: "ひょうざんのてんねんかきごおり",
    romaji: "hyouzan no tennen kakigoori",
    reaction_good: "やまと「……悪くない。助かった。」",
    reaction_bad: "やまと「違う。そこはそう打たん。」",
    image: "yamato.png"
    },
    // --- 3年1組 ---
    {
        id: "req_nui",
        subtype: "request",
        group: "3-1",
        sender: "栄城 縫",
        start_msg: "ご褒美「せんせぇ〜！拙者、今日の戦利品（フィギュア）をXに載せるんだゾ！その…魂の一文、入力してほしいやんけ！」",
        text: "推しは人生を豊かにする最高の栄養だぞ",
        kana: "おしはじんせいをゆたかにするさいこうのえいようだぞ",
        romaji: "oshi wa jinsei o yutaka ni suru saikou no eiyou dazo",
        reaction_good: "ご褒美「うおお！先生わかってるやんけ！これぞ拙者の哲学だゾ〜！」",
        reaction_bad: "ご褒美「先生、誤字ってるやんけ！推しへの愛が足りんゾ！」",
        image: "nui.png"
    },
    {
        id: "req_miika",
        subtype: "request",
        group: "3-1",
        sender: "柿窪 未唯樺",
        start_msg: "みいか「先生〜！大会の写真アップするからさ！前向きでテンション上がるキャプション、入れてほしいんだけど！」",
        text: "全力で走った分だけ世界は楽しい",
        kana: "ぜんりょくではしったぶんだけせかいはたのしい",
        romaji: "zenryoku de hashitta bun dake sekai wa tanoshii",
        reaction_good: "みいか「いいじゃん！これ！めっちゃ私っぽい〜！」",
        reaction_bad: "みいか「え、先生そこ間違える？勢い大事だよ〜？」",
        image: "miika.png"
    },
    {
        id: "req_jinya",
        subtype: "request",
        group: "3-1",
        sender: "軽墓 稔也",
        start_msg: "じんや「先生、配信の切り抜き上げるっちゃ。説明文、オレの代わりに入れてくれんかね…自分で書くと角立つんさ」",
        text: "ゆるく見えて中身は割と本気です",
        kana: "ゆるくみえてなかみはわりとほんきです",
        romaji: "yuruku miete nakami wa wari to honki desu",
        reaction_good: "じんや「……うん、それでいいっちゃ。無難で助かるわ」",
        reaction_bad: "じんや「先生、誤字しとるっちゃ。そこ間違えると印象変わるがね」",
        image: "jinya.png"
    },
    {
        id: "req_koume",
        subtype: "request",
        group: "3-1",
        sender: "慶祥 小梅",
        start_msg: "こうめ「先生！神社の行事写真あげるんだけどさ、ちょっと締まる一文入れてほしくて！」",
        text: "今日も平和を全力で守りました",
        kana: "きょうもへいわをぜんりょくでまもりました",
        romaji: "kyou mo heiwa o zenryoku de mamorimashita",
        reaction_good: "こうめ「よっしゃ！シンプルでいいじゃん！」",
        reaction_bad: "こうめ「先生、そこミスるとダサいから気をつけな？」",
        image: "koume.png"
    },
    {
        id: "req_fukumi",
        subtype: "request",
        group: "3-1",
        sender: "小谷 服美",
        start_msg: "ふくみ「……先生。写真は上げるから、説明文だけ任せたい。考えるの面倒」",
        text: "特に何もしてないけど一日終わった",
        kana: "とくになにもしてないけどいちにちおわった",
        romaji: "toku ni nani mo shite inai kedo ichinichi owatta",
        reaction_good: "ふくみ「……うん。ちょうどいい」",
        reaction_bad: "ふくみ「誤字。直して。以上」",
        image: "fukumi.png"
    },
    {
        id: "req_eiji",
        subtype: "request",
        group: "3-1",
        sender: "筋永 明日雅",
        start_msg: "えいじ「先生！今日の筋トレ成果を世界に見せるからよ！魂こもった一文、頼むぜ！」",
        text: "努力は裏切らない筋肉はもっと裏切らない",
        kana: "どりょくはうらぎらないきんにくはもっとうらぎらない",
        romaji: "doryoku wa uragiranai kinniku wa motto uragiranai",
        reaction_good: "えいじ「っしゃあ！最高だぜ先生！」",
        reaction_bad: "えいじ「先生！誤字は筋肉に失礼だぞ！」",
        image: "eiji.png"
    },
    {
        id: "req_kahoko",
        subtype: "request",
        group: "3-1",
        sender: "虹林 佳穂子",
        start_msg: "かほこ「先生。掲示用の注意喚起文を作成中なのですが、文面の最終入力をお願いできますか。私情は一切入れていません」",
        text: "規則を守ることは全体の効率を高める最適解です",
        kana: "きそくをまもることはぜんたいのこうりつをたかめるさいてきかいです",
        romaji: "kisoku o mamoru koto wa zentai no kouritsu o takameru saiteki kai desu",
        reaction_good: "かほこ「ありがとうございます。論理的にも整合性があります」",
        reaction_bad: "かほこ「……誤字があります。この文章では説得力が落ちます」",
        image: "kahoko.png"
    },
    {
        id: "req_uchu",
        subtype: "request",
        group: "3-1",
        sender: "松気之宮 宇宙",
        start_msg: "うちゅう「先生〜、天体観測会のゆるいお知らせ作っちょんのやけどさ。文字入力、ちょっと頼めん？」",
        text: "夜空は誰にでも平等にひらかれています",
        kana: "よぞらはだれにでもびょうどうにひらかれています",
        romaji: "yozora wa dare ni demo byoudou ni hirakarete imasu",
        reaction_good: "うちゅう「お〜、いい感じやん。これなら人来そう」",
        reaction_bad: "うちゅう「先生、そこ違うっち。宇宙は正確さ大事なんやで？」",
        image: "uchu.png"
    },
    {
        id: "req_jun",
        subtype: "request",
        group: "3-1",
        sender: "水洗 純",
        start_msg: "じゅん「先生。清掃強化週間の掲示文です。私が触らずに済むよう、入力をお願いします」",
        text: "清潔な環境は心と身体の安全を守ります",
        kana: "せいけつなかんきょうはこころとからだのあんぜんをまもります",
        romaji: "seiketsu na kankyou wa kokoro to karada no anzen o mamorimasu",
        reaction_good: "じゅん「問題ありません。非常に適切です」",
        reaction_bad: "じゅん「誤字です。すぐ修正してください。不衛生です」",
        image: "jun.png"
    },
    {
        id: "req_miwa",
        subtype: "request",
        group: "3-1",
        sender: "夢咲 美環",
        start_msg: "みわ「先生〜！ボランティア募集のポスター作っとると！あったかい一文、入力してもらえん？」",
        text: "誰かの笑顔はきっと自分の力になります",
        kana: "だれかのえがおはきっとじぶんのちからになります",
        romaji: "dareka no egao wa kitto jibun no chikara ni narimasu",
        reaction_good: "みわ「よかよか！これで気持ち伝わるたい！」",
        reaction_bad: "みわ「あれ？先生、そこ違うばい。想い大事にしなっせ？」",
        image: "miwa.png"
    },
    {
        id: "req_rin",
        subtype: "request",
        group: "3-1",
        sender: "立助 凜",
        start_msg: "りん「先生、声優体験会の案内文なんですけど…優しい雰囲気になるよう、入力お願いできますか？」",
        text: "一歩踏み出すだけで世界は少し変わります",
        kana: "いっぽふみだすだけでせかいはすこしかわります",
        romaji: "ippo fumidasu dake de sekai wa sukoshi kawarimasu",
        reaction_good: "りん「ありがとうございます…きっと、いいことありますよ」",
        reaction_bad: "りん「先生、そこ間違ってます…。でも、すぐ直せば大丈夫です」",
        image: "rin.png"
    },
    {
        id: "req_maho",
        subtype: "request",
        group: "3-1",
        sender: "綿森 茉歩",
        start_msg: "まほ「先生、コスプレ参加表の注意文なんだけど…自分で書くと固くなっちゃって」",
        text: "好きという気持ちは自由で大切なものです",
        kana: "すきというきもちはじゆうでたいせつなものです",
        romaji: "suki to iu kimochi wa jiyuu de taisetsu na mono desu",
        reaction_good: "まほ「……うん。これ、すき」",
        reaction_bad: "まほ「先生、そこ違う…。言葉、ちゃんと見て」",
        image: "maho.png"
    },
   // --- 3年2組 ---
    {
        id: "req_shiori",
        subtype: "request",
        group: "3-2",
        sender: "稲地 栞",
        start_msg: "しおり「先生！クラスのお知らせ掲示、私がまとめたんですけど…最終入力だけお願いしてもいいですか？」",
        text: "困ったときはお互いさまです。気軽に声をかけてください",
        kana: "こまったときはおたがいさまです。きがるにこえをかけてください",
        romaji: "komatta toki wa otagaisama desu. kigaru ni koe o kakete kudasai",
        reaction_good: "しおり「ありがとうございます！これで安心して出せます！」",
        reaction_bad: "しおり「えっ、先生そこ誤字です！私もう一回見直しますね！」",
        image: "shiori.png"
    },
    {
        id: "req_hitomi",
        subtype: "request",
        group: "3-2",
        sender: "笑原 瞳",
        start_msg: "ひとみ「先生…相談室の案内文、私が書いたんですが…入力をお願いできますか？」",
        text: "あなたの気持ちは一人で抱えなくていいんです",
        kana: "あなたのきもちはひとりでかかえなくていいんです",
        romaji: "anata no kimochi wa hitori de kakaenakute ii n desu",
        reaction_good: "ひとみ「……ありがとうございます。きっと、誰かに届きます」",
        reaction_bad: "ひとみ「先生……そこ、少し違います。でも、教えてくれてありがとうございます」",
        image: "hitomi.png"
    },
    {
        id: "req_toro",
        subtype: "request",
        group: "3-2",
        sender: "一適 土呂",
        start_msg: "とろ「先生。弓道大会の掲示用だ。俺が触ると汚れるから、入力頼む」",
        text: "基本を守れば結果は後からついてくる",
        kana: "きほんをまもればけっかはあとからついてくる",
        romaji: "kihon o mamoreba kekka wa ato kara tsuite kuru",
        reaction_good: "とろ「……問題ない」",
        reaction_bad: "とろ「そこ違う。そういうの、気になる」",
        image: "toro.png"
    },
    {
        id: "req_sumire",
        subtype: "request",
        group: "3-2",
        sender: "草摘 菫",
        start_msg: "すみれ「先生…お花係のポスターなんですけど…文字、入力してもらえますか？」",
        text: "きれいなものに触れる時間を大切にしましょう",
        kana: "きれいなものにふれるじかんをたいせつにしましょう",
        romaji: "kirei na mono ni fureru jikan o taisetsu ni shimashou",
        reaction_good: "すみれ「……うん。やさしい文章です」",
        reaction_bad: "すみれ「あっ……先生、そこ違います。ちょっと、かなしいです」",
        image: "sumire.png"
    },
    {
        id: "req_urara",
        subtype: "request",
        group: "3-2",
        sender: "並河 麗",
        start_msg: "うらら「先生。ガーデニング委員の注意書きよ。私が書くと角立つから、入力して」",
        text: "植物にも人にも丁寧な扱いを心がけましょう",
        kana: "しょくぶつにもひとにもていねいなあつかいをこころがけましょう",
        romaji: "shokubutsu ni mo hito ni mo teinei na atsukai o kokorogakemashou",
        reaction_good: "うらら「……まあ、悪くないわ」",
        reaction_bad: "うらら「は？先生、そこ間違えてる。ちゃんとやって」",
        image: "urara.png"
    },
    {
        id: "req_mayuko",
        subtype: "request",
        group: "3-2",
        sender: "畑奈 麻由子",
        start_msg: "まゆこ「せんせー！ダンスの発表会ポスターなんだけどさ、文字入力むずくて〜！」",
        text: "思いきり体を動かして楽しもう",
        kana: "おもいきりからだをうごかしてたのしもう",
        romaji: "omoikiri karada o ugokashite tanoshimou",
        reaction_good: "まゆこ「やったー！先生天才じゃん！」",
        reaction_bad: "まゆこ「えー？先生そこちがくない？まあいっか！」",
        image: "mayuko.png"
    },
    {
        id: "req_aiko",
        subtype: "request",
        group: "3-2",
        sender: "蜂ケ崎 敢惟子",
        start_msg: "あいこ「先生！商店街のお祭りポスターだ！アタシが書くと強すぎっから、入力頼むぜ！」",
        text: "みんなで守ろう、下町の伝統とにぎわい",
        kana: "みんなでまもろう、したまちのでんとうとにぎわい",
        romaji: "minna de mamorou, shitamachi no dentou to nigiwai",
        reaction_good: "あいこ「よし！これなら誰も文句ねぇな！」",
        reaction_bad: "あいこ「おっと先生、そこ誤字だ！詰めが甘いぜ？」",
        image: "aiko.png"
    },
    {
        id: "req_yayoi",
        subtype: "request",
        group: "3-2",
        sender: "深名 弥生",
        start_msg: "やよい「先生、工芸展に出す作品説明文…文字起こしお願いできます？」",
        text: "手の感覚を信じて、ひとつひとつ仕上げました",
        kana: "てのかんかくをしんじて、ひとつひとつしあげました",
        romaji: "te no kankaku o shinjite, hitotsu hitotsu shiagemashita",
        reaction_good: "やよい「……ありがとうございます。これで出せます」",
        reaction_bad: "やよい「そこ違います。意味、変わっちゃいます」",
        image: "yayoi.png"
    },
    {
        id: "req_satsuki",
        subtype: "request",
        group: "3-2",
        sender: "普賢 総都喜",
        start_msg: "さつき「先生、生徒会だよりの一文を…正式に入力していただけますか？」",
        text: "静かな努力が、やがて大きな信頼につながります",
        kana: "しずかなどりょくが、やがておおきなしんらいにつながります",
        romaji: "shizuka na doryoku ga, yagate ookina shinrai ni tsunagarimasu",
        reaction_good: "さつき「ありがとうございます…とても助かりました」",
        reaction_bad: "さつき「あっ…先生、恐れ入りますが、そこは誤りです」",
        image: "satsuki.png"
    },
    {
        id: "req_hotomo",
        subtype: "request",
        group: "3-2",
        sender: "扶蘇 補知",
        start_msg: "ほとも「先生〜、漬物配布の張り紙さぁ…入力、任せてもいい？」",
        text: "ゆっくり味わって食べてください",
        kana: "ゆっくりあじわってたべてください",
        romaji: "yukkuri ajiwatte tabete kudasai",
        reaction_good: "ほとも「うん、いい感じ。ありがと」",
        reaction_bad: "ほとも「あれ？先生そこ違くない？」",
        image: "hotomo.png"
    },
    {
        id: "req_hoshi",
        subtype: "request",
        group: "3-2",
        sender: "松気之宮 星",
        start_msg: "ほし「先生、天体観測会のお知らせば入力してほしいっちゃ！」",
        text: "夜空を見上げて、同じ星を探してみよう",
        kana: "よぞらをみあげて、おなじほしをさがしてみよう",
        romaji: "yozora o miagete, onaji hoshi o sagashite miyou",
        reaction_good: "ほし「よっしゃ！これで伝わるばい！」",
        reaction_bad: "ほし「先生、そこ違うっちゃ！星の名前間違えとる！」",
        image: "hoshi.png"
    },
    {
        id: "req_nami",
        subtype: "request",
        group: "3-2",
        sender: "村瀬 奈美",
        start_msg: "なみ「先生、観察ノートの表紙文…お上品に入力してくださる？」",
        text: "人は思った以上に表情で語りますわ",
        kana: "ひとはおもったいじょうにひょうじょうでかたりますわ",
        romaji: "hito wa omotta ijou ni hyoujou de katarimasu wa",
        reaction_good: "なみ「まあ…とっても素敵ですわ♡」",
        reaction_bad: "なみ「先生？そこ誤字ですわよ？ふふっ」",
        image: "nami.png"
    },
    // --- 1-1 ---
    {
    id: "req_momoka",
    subtype: "request",
    group: "1-1",
    sender: "遠藤 桃花",
    start_msg: "ももか「せんせ、あたしの写真に付ける紹介文、ちゃんと入力しなさいよ。」",
    text: "勝ちにいくのが礼儀でしょ？",
    kana: "かちにいくのがれいぎでしょ",
    romaji: "kachi ni iku no ga reigi desho",
    reaction_good: "ももか「……ふん。悪くないじゃない。」",
    reaction_bad: "ももか「ちょっと、そこ誤字ってる！やり直し！」",
    image: "momoka.png"
    },
    {
    id: "req_mimika",
    subtype: "request",
    group: "1-1",
    sender: "近藤 美々香",
    start_msg: "みみか「先生、調理部の掲示用コメントを入力してください。」",
    text: "丁寧に作ることが、いちばんの近道",
    kana: "ていねいにつくることがいちばんのみち",
    romaji: "teinei ni tsukuru koto ga ichiban no michi",
    reaction_good: "みみか「問題ありません。助かりました。」",
    reaction_bad: "みみか「……その漢字、違います。」",
    image: "mimika.png"
    },
    {
    id: "req_hinaka",
    subtype: "request",
    group: "1-1",
    sender: "辻山 妃菜華",
    start_msg: "ひなか「せんせ〜！クラス紹介のコメント、お願いするけん！」",
    text: "毎日がたのしいけん、来てみんさい！",
    kana: "まいにちがたのしいけんきてみんさい",
    romaji: "mainichi ga tanoshii ken kite minsai",
    reaction_good: "ひなか「わ〜！ええ感じじゃん！」",
    reaction_bad: "ひなか「えっ、その言い方おかしくない？」",
    image: "hinaka.png"
    },
    {
    id: "req_hikaru",
    subtype: "request",
    group: "1-1",
    sender: "黒見 晃",
    start_msg: "ひかる「せんせー、ハロウィン企画の告知文、頼むべ！」",
    text: "黒猫だって主役になれる夜",
    kana: "くろねこだってしゅやくになれるよる",
    romaji: "kuroneko datte shuyaku ni nareru yoru",
    reaction_good: "ひかる「おっ！それそれ！」",
    reaction_bad: "ひかる「ん？そこ変じゃね？」",
    image: "hikaru.png"
    },
    {
    id: "req_seina",
    subtype: "request",
    group: "1-1",
    sender: "天雨 聖奈",
    start_msg: "せいな「先生、体操部の募集ポスター用よ。」",
    text: "本気でやるなら、今すぐ来なさい",
    kana: "ほんきでやるならいますぐきなさい",
    romaji: "honki de yaru nara ima sugu kinasai",
    reaction_good: "せいな「よし、これでいくわ。」",
    reaction_bad: "せいな「は？そこ間違えてるでしょ。」",
    image: "seina.png"
    },
    {
    id: "req_tetsu",
    subtype: "request",
    group: "1-1",
    sender: "市宮 哲",
    start_msg: "てつ「せんせ〜！化学部の紹介文、入力してほしいな！」",
    text: "実験も友情も、反応は無限大！",
    kana: "じっけんもゆうじょうもはんのうはむげんだい",
    romaji: "jikken mo yuujou mo hannou wa mugendai",
    reaction_good: "てつ「わぁ〜！いいねいいね！」",
    reaction_bad: "てつ「あれ？そこ違くない？」",
    image: "tetsu.png"
    },
    {
    id: "req_towa",
    subtype: "request",
    group: "1-1",
    sender: "右幸 永遠",
    start_msg: "とわ「せんせ〜、ゲーム大会の告知文やって！」",
    text: "楽しいほうに全力、それが正解！",
    kana: "たのしいほうにぜんりょくそれがせいかい",
    romaji: "tanoshii hou ni zenryoku sore ga seikai",
    reaction_good: "とわ「っしゃ！最高！」",
    reaction_bad: "とわ「ちょ、そこミスってね？」",
    image: "towa.png"
    },
    {
    id: "req_mai",
    subtype: "request",
    group: "1-1",
    sender: "岡田 麻衣",
    start_msg: "まい「先生、掲示用の注意書き、入力してもらえます？」",
    text: "丁寧な暮らしは、心を守るための嘘",
    kana: "ていねいなくらしはこころをまもるためのうそ",
    romaji: "teinei na kurashi wa kokoro o mamoru tame no uso",
    reaction_good: "まい「……ふふ、信じてくれるんですね。」",
    reaction_bad: "まい「あれ？そこ、わざと間違えました？」",
    image: "mai.png"
    },
    {
    id: "req_kosaku",
    subtype: "request",
    group: "1-1",
    sender: "小路 虎作",
    start_msg: "こさく「先生〜！店のSNSに載せる一言、頼むわ！」",
    text: "粉も気合いも、山盛りやで！",
    kana: "こなもきあいもやまもりやで",
    romaji: "kona mo kiai mo yamamori yade",
    reaction_good: "こさく「さすがやな！ノリええわ！」",
    reaction_bad: "こさく「ちょ、そこちゃうやろ！」",
    image: "kosaku.png"
    },
    {
    id: "req_kotarou",
    subtype: "request",
    group: "1-1",
    sender: "川曽 虎太郎",
    start_msg: "こたろう「先生、クラスだより用の一文をお願いします。」",
    text: "みんなで走れば、遠くまで行ける",
    kana: "みんなではしればとおくまでいける",
    romaji: "minna de hashireba tooku made ikeru",
    reaction_good: "こたろう「ありがとうございます。助かりました。」",
    reaction_bad: "こたろう「あれ？そこ違う気がします。」",
    image: "kotarou.png"
    },
    {
    id: "req_koto",
    subtype: "request",
    group: "1-1",
    sender: "雑敷 言",
    start_msg: "こと「先生、写真展示のキャプション頼めます？」",
    text: "その一瞬、ちゃんと残しときたい",
    kana: "そのいっしゅんちゃんとのこしときたい",
    romaji: "sono isshun chanto nokoshitokitai",
    reaction_good: "こと「いいですね。しっくりきます。」",
    reaction_bad: "こと「あれ？打ち間違いじゃないですか？」",
    image: "koto.png"
    },
    {
    id: "req_komari",
    subtype: "request",
    group: "1-1",
    sender: "杉山 虎毱",
    start_msg: "こまり「先生、作品につける説明文、お願いしたいんだけど…」",
    text: "作るって、たのしいんだよ",
    kana: "つくるってたのしいんだよ",
    romaji: "tsukuru tte tanoshii n da yo",
    reaction_good: "こまり「うん…これでいい。」",
    reaction_bad: "こまり「そこ、ちがくない？」",
    image: "komari.png"
    },
    {
    id: "req_ai",
    subtype: "request",
    group: "1-1",
    sender: "園田 藍",
    start_msg: "あい「先生、文画部の提出用コメントをお願いしますわ。」",
    text: "静かな言葉ほど、人を刺しますの",
    kana: "しずかなことばほどひとをさしますの",
    romaji: "shizuka na kotoba hodo hito o sashimasu no",
    reaction_good: "あい「あらあら…素敵ですわ。」",
    reaction_bad: "あい「ふふ、その程度の確認もできませんの？」",
    image: "ai.png"
    },
    {
    id: "req_akaru",
    subtype: "request",
    group: "1-1",
    sender: "成政 明流",
    start_msg: "あかる「先生〜！イベント告知の一言、入力して！」",
    text: "今日も楽しくいこーぜ！",
    kana: "きょうもたのしくいこーぜ",
    romaji: "kyou mo tanoshiku ikoo ze",
    reaction_good: "あかる「いいじゃんいいじゃん！」",
    reaction_bad: "あかる「えっ、そこ違くね？」",
    image: "akaru.png"
    },
    {
    id: "req_kojiro",
    subtype: "request",
    group: "1-1",
    sender: "二瓶 小次郎",
    start_msg: "こじろう「先生、作曲発表会の案内文、入力をお願いできますか？」",
    text: "音で伝える、ぼくたちの気持ち",
    kana: "おとでつたえるぼくたちのきもち",
    romaji: "oto de tsutaeru bokutachi no kimochi",
    reaction_good: "こじろう「ありがとうございます。とても助かりました。」",
    reaction_bad: "こじろう「あれ？そこ、少し違う気がします。」",
    image: "kojiro.png"
    },
    {
    id: "req_kaede",
    subtype: "request",
    group: "1-1",
    sender: "速川 楓",
    start_msg: "かえで「先生、写真載せるからキャプションお願い！」",
    text: "世界でいちばん美しいのは、今日のわたし",
    kana: "せかいでいちばんうつくしいのはきょうのわたし",
    romaji: "sekai de ichiban utsukushii no wa kyou no watashi",
    reaction_good: "かえで「でしょ？完璧じゃん！」",
    reaction_bad: "かえで「は？そこ間違える？」",
    image: "kaede.png"
    },
    {
    id: "req_sei",
    subtype: "request",
    group: "1-1",
    sender: "腹巻 青",
    start_msg: "せい「先生！朝礼用の一言、入力お願いします！」",
    text: "全力でやれば、後悔は残らない！",
    kana: "ぜんりょくでやればこうかいはのこらない",
    romaji: "zenryoku de yareba koukai wa nokoranai",
    reaction_good: "せい「よっしゃ！気合入ります！」",
    reaction_bad: "せい「あれっ？そこは気をつけてください！」",
    image: "sei.png"
    },
    {
    id: "req_setsuna",
    subtype: "request",
    group: "1-1",
    sender: "谷幡 節捺",
    start_msg: "せつな「先生〜、新聞に載せる見出し、頼んでいい？」",
    text: "今を切り取る、それがスクープたい",
    kana: "いまをきりとるそれがすくーぷたい",
    romaji: "ima o kiritoru sore ga sukuupu tai",
    reaction_good: "せつな「よかよか〜！助かったばい。」",
    reaction_bad: "せつな「あれ？そこ違っとらん？」",
    image: "setsuna.png"
    },
    {
    id: "req_kofuku",
    subtype: "request",
    group: "1-1",
    sender: "山神 小福",
    start_msg: "こふく「先生、山の写真展の説明文を頼む。」",
    text: "静かな山は、多くを語る",
    kana: "しずかなやまはおおくをかたる",
    romaji: "shizuka na yama wa ooku o kataru",
    reaction_good: "こふく「……問題ない。」",
    reaction_bad: "こふく「誤字だ。直してくれ。」",
    image: "kofuku.png"
    },
    {
    id: "req_masaki",
    subtype: "request",
    group: "1-1",
    sender: "勇惣 柾季",
    start_msg: "まさき「先生、掲示用のお知らせ文、お願いできますか。」",
    text: "誰かのために、今日も動いています",
    kana: "だれかのためにきょうもうごいています",
    romaji: "dareka no tame ni kyou mo ugoiteimasu",
    reaction_good: "まさき「ありがとうございます…助かります。」",
    reaction_bad: "まさき「あの…そこ、少し違います。」",
    image: "masaki.png"
    },
    // --- 1-2 ---
    {
    id: "req_mari",
    subtype: "request",
    group: "1-2",
    sender: "愛野 麻理",
    start_msg: "まり「せんせ…原画展に出すイラストの説明文、入力してほしか…」",
    text: "線の奥に、ほんとの気持ちがある",
    kana: "せんのおくにほんとのきもちがある",
    romaji: "sen no oku ni honto no kimochi ga aru",
    reaction_good: "まり「……ありがとう。助かった…」",
    reaction_bad: "まり「そこ…ちょっと違うと思う」",
    image: "mari.png"
    },
    {
    id: "req_machie",
    subtype: "request",
    group: "1-2",
    sender: "井漕 舞茅依",
    start_msg: "まちえ「先生、水兵部の募集ポスター用の一文、お願いします。」",
    text: "覚悟があれば、海は応えてくれる",
    kana: "かくごがあればうみはこたえてくれる",
    romaji: "kakugo ga areba umi wa kotaete kureru",
    reaction_good: "まちえ「ありがとうございます。心に響きました。」",
    reaction_bad: "まちえ「そこ、誤字がありますよ？」",
    image: "machie.png"
    },
    {
    id: "req_hebiki",
    subtype: "request",
    group: "1-2",
    sender: "石原 蛇喜",
    start_msg: "へびき「先生〜、平和集会のお知らせ文、頼んでいいさ〜」",
    text: "争わんで、話そうや",
    kana: "あらそわんではなそうや",
    romaji: "arasowan de hanasou ya",
    reaction_good: "へびき「うんうん、これなら伝わるね〜」",
    reaction_bad: "へびき「あれ？字、間違っとるさ〜」",
    image: "hebiki.png"
    },
    {
    id: "req_mirai",
    subtype: "request",
    group: "1-2",
    sender: "岩結 未来",
    start_msg: "みらい「先生、学年だよりに載せる一言、お願い！」",
    text: "失敗は、前に進んだ証拠",
    kana: "しっぱいはまえにすすんだしょうこ",
    romaji: "shippai wa mae ni susunda shouko",
    reaction_good: "みらい「いいね！前向きで好き！」",
    reaction_bad: "みらい「ちょっと違うよ〜？確認して！」",
    image: "mirai.png"
    },
    {
    id: "req_miru",
    subtype: "request",
    group: "1-2",
    sender: "遠藤 海松",
    start_msg: "みる「先生！イベント写真のコメント入れてほしい〜！」",
    text: "笑顔は連鎖する！",
    kana: "えがおはれんさする",
    romaji: "egao wa rensa suru",
    reaction_good: "みる「やったー！これ絶対ウケる！」",
    reaction_bad: "みる「えっ？そこ違くない？」",
    image: "miru.png"
    },
    {
    id: "req_shirube",
    subtype: "request",
    group: "1-2",
    sender: "鬼弦 導",
    start_msg: "しるべ「……掲示用の文、頼む」",
    text: "静かでも、ここにいる",
    kana: "しずかでもここにいる",
    romaji: "shizuka demo koko ni iru",
    reaction_good: "しるべ「……いい」",
    reaction_bad: "しるべ「違う」",
    image: "shirube.png"
    },
    {
    id: "req_yuu",
    subtype: "request",
    group: "1-2",
    sender: "柏倉 佑",
    start_msg: "ゆう「せ、先生…展示会の紹介文、お願いしてもいいですか…？」",
    text: "やさしい気持ちは、ちゃんと届く",
    kana: "やさしいきもちはちゃんととどく",
    romaji: "yasashii kimochi wa chanto todoku",
    reaction_good: "ゆう「ありがとうございます…すごく嬉しいです」",
    reaction_bad: "ゆう「あの…そこ、少し違います」",
    image: "yuu.png"
    },
    {
    id: "req_kanon",
    subtype: "request",
    group: "1-2",
    sender: "雲然 翔暖",
    start_msg: "かのん「せんせ〜！クラス紹介ページの一言、入れてほしいが！」",
    text: "毎日がちょっと楽しくなる場所",
    kana: "まいにちがちょっとたのしくなるばしょ",
    romaji: "mainichi ga chotto tanoshiku naru basho",
    reaction_good: "かのん「うわ〜！それいいちゃ！さすがやね！」",
    reaction_bad: "かのん「あれ？そこ違うがになっとるよ〜」",
    image: "kanon.png"
    },
    {
    id: "req_bunta",
    subtype: "request",
    group: "1-2",
    sender: "小桂 文太",
    start_msg: "ぶんた「先生、新聞の見出し文ちょっと頼むわ」",
    text: "今日の出来事、ちゃんと残そう",
    kana: "きょうのできごとちゃんとのこそう",
    romaji: "kyou no dekigoto chanto nokosou",
    reaction_good: "ぶんた「ええやん。読みやすいわ」",
    reaction_bad: "ぶんた「そこ誤字やで？気ぃつけな」",
    image: "bunta.png"
    },
    {
    id: "req_fumiko",
    subtype: "request",
    group: "1-2",
    sender: "小玉 史子",
    start_msg: "ふみこ「先生…調理の展示用コメント、お願いできますか？」",
    text: "心をこめて作りました",
    kana: "こころをこめてつくりました",
    romaji: "kokoro o komete tsukurimashita",
    reaction_good: "ふみこ「ありがとうございます。とても温かいです」",
    reaction_bad: "ふみこ「あ…少し違っています」",
    image: "fumiko.png"
    },
    {
    id: "req_kome",
    subtype: "request",
    group: "1-2",
    sender: "素麺 米",
    start_msg: "こめ「せんせぇ…連絡帳の一文、代わりに入れてほしいんだけど…」",
    text: "今日は体調不良のためお休みします",
    kana: "きょうはたいちょうふりょうのためおやすみします",
    romaji: "kyou wa taichou furyou no tame oyasumi shimasu",
    reaction_good: "こめ「はぁ…助かったぁ……」",
    reaction_bad: "こめ「えぇ…それ違くない？」",
    image: "kome.png"
    },
    {
    id: "req_yuji",
    subtype: "request",
    group: "1-2",
    sender: "高槁 優侍",
    start_msg: "ゆうじ「先生、公示文の文章を正確に入力してください」",
    text: "規則は全員が守るためにある",
    kana: "きそくはぜんいんがまもるためにある",
    romaji: "kisoku wa zenin ga mamoru tame ni aru",
    reaction_good: "ゆうじ「問題ありません。適切です」",
    reaction_bad: "ゆうじ「誤りです。修正してください」",
    image: "yuji.png"
    },
    {
    id: "req_kyo",
    subtype: "request",
    group: "1-2",
    sender: "辻山 郷",
    start_msg: "きょう「先生…試合前の掲示、頼んでもいいですか」",
    text: "最後まで集中すること",
    kana: "さいごまでしゅうちゅうすること",
    romaji: "saigo made shuuchuu suru koto",
    reaction_good: "きょう「…ありがとうございます」",
    reaction_bad: "きょう「そこ、違います」",
    image: "kyo.png"
    },
    {
    id: "req_ayu",
    subtype: "request",
    group: "1-2",
    sender: "鳥飼 歩",
    start_msg: "あゆ「せんせー！自己紹介カードの一言、入力してほしい！」",
    text: "今は迷ってても、ちゃんと前に進んでる",
    kana: "いまはまよっててもちゃんとまえにすすんでる",
    romaji: "ima wa mayottete mo chanto mae ni susunderu",
    reaction_good: "あゆ「えへへ！それ、好きかも！」",
    reaction_bad: "あゆ「あれ？そこ変じゃない？」",
    image: "ayu.png"
    },
    {
    id: "req_kohaku",
    subtype: "request",
    group: "1-2",
    sender: "西 琥博",
    start_msg: "こはく「先生。校内掲示用の注意文を作成してください。」",
    text: "校則は全生徒が守るべき重要な規律です",
    kana: "こうそくはぜんせいとがまもるべきじゅうようなきりつです",
    romaji: "kousoku wa zenseito ga mamorubeki juuyou na kiritsu desu",
    reaction_good: "こはく「確認しました。問題ありません。」",
    reaction_bad: "こはく「……誤字があります。修正を。」",
    image: "kohaku.png"
    },
    {
    id: "req_megumu",
    subtype: "request",
    group: "1-2",
    sender: "根峯 萠",
    start_msg: "めぐむ「先生、配布プリントの一文、入力お願いできます？」",
    text: "困ったときはお互いさまが基本です",
    kana: "こまったときはおたがいさまがきほんです",
    romaji: "komatta toki wa otagaisama ga kihon desu",
    reaction_good: "めぐむ「うん、これで伝わるね。ありがと。」",
    reaction_bad: "めぐむ「先生、それ誤字。さすがに直そ？」",
    image: "megumu.png"
    },
    {
    id: "req_yutasuke",
    subtype: "request",
    group: "1-2",
    sender: "身浦 柚太允",
    start_msg: "ゆたすけ「先生…農業体験のお知らせ文、お願いしてもええですか？」",
    text: "自然と向き合う時間を大切にしましょう",
    kana: "しぜんとむきあうじかんをたいせつにしましょう",
    romaji: "shizen to mukiau jikan o taisetsu ni shimashou",
    reaction_good: "ゆたすけ「ありがとうございます…助かります。」",
    reaction_bad: "ゆたすけ「あっ…そこ、ちくと違うみたいです。」",
    image: "yutasuke.png"
    },
    {
    id: "req_suo",
    subtype: "request",
    group: "1-2",
    sender: "村瀬 蘇芳",
    start_msg: "すおう「先生〜、掲示用の一言、代わりに打っといて。」",
    text: "静かに行動するのが一番効率的だね",
    kana: "しずかにこうどうするのがいちばんこうりつてきだね",
    romaji: "shizuka ni koudou suru no ga ichiban kouritsuteki da ne",
    reaction_good: "すおう「ふーん、悪くないね。」",
    reaction_bad: "すおう「先生、ミスってる。ま、らしいけど。」",
    image: "suo.png"
    },
    {
    id: "req_erua",
    subtype: "request",
    group: "1-2",
    sender: "茂地 榎留愛",
    start_msg: "えるあ「先生、体操部のお知らせ文、これで入力して。」",
    text: "準備運動は怪我防止の基本です",
    kana: "じゅんびうんどうはけがぼうしのきほんです",
    romaji: "junbi undou wa kega boushi no kihon desu",
    reaction_good: "えるあ「うん、これで大丈夫。」",
    reaction_bad: "えるあ「そこ間違ってる。ちゃんと見て？」",
    image: "erua.png"
    },
    {
    id: "req_mibana",
    subtype: "request",
    group: "1-2",
    sender: "本梶 美花",
    start_msg: "みばな「先生、提出用のコメント文…お願い。」",
    text: "実践を重ねることで完成度は上がる",
    kana: "じっせんをかさねることでかんせいどはあがる",
    romaji: "jissen o kasaneru koto de kanseido wa agaru",
    reaction_good: "みばな「……別に。悪くない。」",
    reaction_bad: "みばな「誤字。そこ、違うから。」",
    image: "mibana.png"
    },
   // --- 1-3 ---
    {
    id: "req_rinon",
    subtype: "request",
    group: "1-3",
    sender: "浅苧 李音",
    start_msg: "りのん「先生、ライブ告知用の文章、入力お願い。」",
    text: "努力は必ず結果として表れる",
    kana: "どりょくはかならずけっかとしてあらわれる",
    romaji: "doryoku wa kanarazu kekka to shite arawareru",
    reaction_good: "りのん「うん、これでいい。ありがとう。」",
    reaction_bad: "りのん「誤字があるわ。結果主義としては見逃せない。」",
    image: "rinon.png"
    },
    {
    id: "req_kisora",
    subtype: "request",
    group: "1-3",
    sender: "井之尾 希空",
    start_msg: "きそら「せんせ…SNSのひとこと、にゅうりょくしてほしいな…」",
    text: "ゆっくりでも自分のペースでいい",
    kana: "ゆっくりでもじぶんのぺーすでいい",
    romaji: "yukkuri demo jibun no peesu de ii",
    reaction_good: "きそら「…ありがとう。きそら、うれしい。」",
    reaction_bad: "きそら「そ、そこ…ちがう、かも…」",
    image: "kisora.png"
    },
    {
    id: "req_soji",
    subtype: "request",
    group: "1-3",
    sender: "牛沢 蒼司",
    start_msg: "そうじ「先生！宣言文っぽいやつ、打っといて！」",
    text: "挑戦しない選択肢は最初からない",
    kana: "ちょうせんしないせんたくしはさいしょからない",
    romaji: "chousen shinai sentakushi wa saisho kara nai",
    reaction_good: "そうじ「っしゃ！イケてる！」",
    reaction_bad: "そうじ「え、そこミスる？ダサくね？」",
    image: "soji.png"
    },
    {
    id: "req_ritsu",
    subtype: "request",
    group: "1-3",
    sender: "大江 浬積",
    start_msg: "りつ「先生☆体操部の紹介文、入力お願いするよ♪」",
    text: "美しさは日々の積み重ねから生まれる",
    kana: "うつくしさはひびのつみかさねからうまれる",
    romaji: "utsukushisa wa hibi no tsumikasanekara umareru",
    reaction_good: "りつ「さすが先生☆完璧だね！」",
    reaction_bad: "りつ「えっ…そこ違う…ちょっと傷つくかも…」",
    image: "ritsu.png"
    },
    {
    id: "req_honoka",
    subtype: "request",
    group: "1-3",
    sender: "大野 蓬乃果",
    start_msg: "ほのか「先生、討論用のテーマ文、入れといて。」",
    text: "疑問を持つことは成長の第一歩だ",
    kana: "ぎもんをもつことはせいちょうのだいいっぽだ",
    romaji: "gimon o motsu koto wa seichou no daiippo da",
    reaction_good: "ほのか「ふーん、まあ合格点。」",
    reaction_bad: "ほのか「誤字？論外なんだけど。」",
    image: "honoka.png"
    },
    {
    id: "req_yui",
    subtype: "request",
    group: "1-3",
    sender: "土市 結衣",
    start_msg: "ゆい「せんせぇ…お店のSNS用の文章、ゆいの代わりに♡」",
    text: "今日もかわいくがんばりました",
    kana: "きょうもかわいくがんばりました",
    romaji: "kyou mo kawaiku ganbarimashita",
    reaction_good: "ゆい「えへへ…せんせだいすき…♡」",
    reaction_bad: "ゆい「ちがうの…？ゆい、かなしい…」",
    image: "yui.png"
    },
    {
    id: "req_tayori",
    subtype: "request",
    group: "1-3",
    sender: "自念 頼",
    start_msg: "たより「先生、提出用の文章、入力をお願いできますか。」",
    text: "相手の立場を考えた言葉を選びたい",
    kana: "あいてのたちばをかんがえたことばをえらびたい",
    romaji: "aite no tachiba o kangaeta kotoba o erabitai",
    reaction_good: "たより「ありがとうございます。とても助かりました。」",
    reaction_bad: "たより「あ、そこ誤字がありますね。直しましょう。」",
    image: "tayori.png"
    },
    {
    id: "req_mugi",
    subtype: "request",
    group: "1-3",
    sender: "素麺 麦",
    start_msg: "むぎ「せんせー！SNSの文、あたちのかわりに入れてほしいんさ〜！」",
    text: "きょうも全力でたのしかったらて",
    kana: "きょうもぜんりょくでたのしかったらて",
    romaji: "kyou mo zenryoku de tanoshikatta rate",
    reaction_good: "むぎ「えへへ〜！それそれ！むぎ天才じゃね？」",
    reaction_bad: "むぎ「えっ？そこちがうん？なんでらて〜！」",
    image: "mugi.png"
    },
    {
    id: "req_aoi",
    subtype: "request",
    group: "1-3",
    sender: "二十八 碧",
    start_msg: "あおい「先生…掲示用のお知らせ文、入力お願いできますか」",
    text: "毎日の積み重ねを大切にしたいです",
    kana: "まいにちのつみかさねをたいせつにしたいです",
    romaji: "mainichi no tsumikasané o taisetsu ni shitai desu",
    reaction_good: "あおい「ありがとうございます。助かりました」",
    reaction_bad: "あおい「あ、少し違いますね。ここ直しましょう」",
    image: "aoi.png"
    },
    {
    id: "req_yuhi",
    subtype: "request",
    group: "1-3",
    sender: "直宿 夕日",
    start_msg: "ゆうひ「先生〜w告知文打っといてくんね？」",
    text: "楽しいことは全部やったもん勝ちw",
    kana: "たのしいことはぜんぶやったもんがち",
    romaji: "tanoshii koto wa zenbu yatta mon gachi",
    reaction_good: "ゆうひ「いいじゃんwさすが先生w」",
    reaction_bad: "ゆうひ「は？誤字ってるんだけどw」",
    image: "yuhi.png"
    },
    {
    id: "req_atsushi",
    subtype: "request",
    group: "1-3",
    sender: "天王寺 淳志",
    start_msg: "あつし「せんせ〜、ポスターの言葉、入れてもらってもいい？」",
    text: "自分が光れば世界も明るくなる",
    kana: "じぶんがひかればせかいもあかるくなる",
    romaji: "jibun ga hikareba sekai mo akaruku naru",
    reaction_good: "あつし「うんうん！それだねぇ〜！」",
    reaction_bad: "あつし「あれ？そこ、星ズレてない？」",
    image: "atsushi.png"
    },
    {
    id: "req_kuu",
    subtype: "request",
    group: "1-3",
    sender: "中井 空羽",
    start_msg: "くう「……先生。提出文、代わりに入力して」",
    text: "無駄な期待はしないほうが楽だ",
    kana: "むだなきたいはしないほうがらくだ",
    romaji: "muda na kitai wa shinai hou ga rakuda",
    reaction_good: "くう「……別に。悪くない」",
    reaction_bad: "くう「はぁ……そこ、違う」",
    image: "kuu.png"
    },
    {
    id: "req_noriomi",
    subtype: "request",
    group: "1-3",
    sender: "永丘 紀臣",
    start_msg: "のりおみ「先生、提出用の文章、お願いしても？」",
    text: "表面上の言葉にも意味はあると思います",
    kana: "ひょうめんじょうのことばにもいみはあるとおもいます",
    romaji: "hyoumenjou no kotoba ni mo imi wa aru to omoimasu",
    reaction_good: "のりおみ「ええ、無難でいいですね」",
    reaction_bad: "のりおみ「ああ、誤字ですか。よくある話ですね」",
    image: "noriomi.png"
    },
    {
    id: "req_meri",
    subtype: "request",
    group: "1-3",
    sender: "仲村 愛梨",
    start_msg: "めり「先生…図書委員会の掲示文、入力お願いしてもいいでしょうか…？」",
    text: "本は心をそっと支えてくれます",
    kana: "ほんはこころをそっとささえてくれます",
    romaji: "hon wa kokoro o sotto sasaete kuremasu",
    reaction_good: "めり「ありがとうございます…本当に助かりました」",
    reaction_bad: "めり「あっ…ここ、少し違ってます…すみません…」",
    image: "meri.png"
    },
    {
    id: "req_soshi",
    subtype: "request",
    group: "1-3",
    sender: "美戸 創至",
    start_msg: "そうし「先生、その…アイデア提出用の文章、入力お願いできますか？」",
    text: "発想は日常の違和感から生まれます",
    kana: "はっそうはにちじょうのいわかんからうまれます",
    romaji: "hassou wa nichijou no iwakan kara umaremasu",
    reaction_good: "そうし「うん…それ、いいと思います」",
    reaction_bad: "そうし「あれ？そこ、少し変ですね」",
    image: "soshi.png"
    },
    {
    id: "req_kouta",
    subtype: "request",
    group: "1-3",
    sender: "桃山 小歌",
    start_msg: "こうた「先生、生徒会の提出文を入力していただけますか」",
    text: "皆が安心して過ごせる環境を目指します",
    kana: "みながあんしんしてすごせるかんきょうをめざします",
    romaji: "mina ga anshin shite sugoseru kankyou o mezashimasu",
    reaction_good: "こうた「ありがとうございます。助かりました」",
    reaction_bad: "こうた「申し訳ありません、そこ誤字があります」",
    image: "kouta.png"
    },
    {
    id: "req_misaki",
    subtype: "request",
    group: "1-3",
    sender: "勇惣 岬咲",
    start_msg: "みさき「先生…お手紙の文章、代わりに入力してもらえますか？」",
    text: "お兄ちゃん、いつもありがとう",
    kana: "おにいちゃんいつもありがとう",
    romaji: "oniichan itsumo arigatou",
    reaction_good: "みさき「…ちゃんと伝わりそうです」",
    reaction_bad: "みさき「あっ…漢字、違います…」",
    image: "misaki.png"
    },
    {
    id: "req_nagisa",
    subtype: "request",
    group: "1-3",
    sender: "代々木 渚",
    start_msg: "なぎさ「先生さ、SNSに載せる文、打っといてくんない？」",
    text: "自分の好きくらい自分で決める",
    kana: "じぶんのすきくらいじぶんできめる",
    romaji: "jibun no suki kurai jibun de kimeru",
    reaction_good: "なぎさ「いいじゃん。それっぽい」",
    reaction_bad: "なぎさ「は？そこミスる？ダサ」",
    image: "nagisa.png"
    },
    {
    id: "req_hibiki",
    subtype: "request",
    group: "1-3",
    sender: "楽得 響",
    start_msg: "ひびき「先生！！ポスターの文字！早よ入れてくれや！！」",
    text: "やるからには本気で勝負や",
    kana: "やるからにはほんきでしょうぶや",
    romaji: "yaru kara niwa honki de shoubu ya",
    reaction_good: "ひびき「おっしゃ！！完璧や！！」",
    reaction_bad: "ひびき「コラァ！！そこ違うやろが！！」",
    image: "hibiki.png"
    },
    // --- 1-4 ---
    {
    id: "req_yukihiko",
    subtype: "request",
    group: "1-4",
    sender: "池里 雪彦",
    start_msg: "ゆきひこ「せんせー！わちさ〜、クラス掲示用のひとこと書く係になっちゃってさ！たすけて〜！」",
    text: "あしたはプリント提出日！わすれもの注意だよ〜！",
    kana: "あしたはぷりんとていしゅつび わすれものちゅういだよ",
    romaji: "ashita wa purinto teishutsubi wasuremono chuui dayo",
    reaction_good: "ゆきひこ「うわー！せんせー天才！これならわちでも怒られない〜！」",
    reaction_bad: "ゆきひこ「えっ、せんせ…誤字ってる！？わちのせいにされるやつじゃんそれ〜！」",
    image: "yukihiko.png"
    },
    {
    id: "req_yuuki",
    subtype: "request",
    group: "1-4",
    sender: "市川 宥暉",
    start_msg: "ゆうき「せんせー、占いアカの今日のひとこと、入力お願いしてもいい？」",
    text: "今日は直感を信じると運気アップ",
    kana: "きょうはちょっかんをしんじるとうんきあっぷ",
    romaji: "kyou wa chokkan o shinjiru to unki appu",
    reaction_good: "ゆうき「さすが先生！この文、めっちゃ当たりそうな気する！」",
    reaction_bad: "ゆうき「あれ？せんせ、文字ズレてない？これだと運気下がりそうなんだけど〜？」",
    image: "yuuki.png"
    },
    {
    id: "req_maaya",
    subtype: "request",
    group: "1-4",
    sender: "卯瀧 真綾",
    start_msg: "まあや「先生…今度のお出かけのしおり、表紙の言葉をお願いしてもよろしいですか？」",
    text: "思い出は心にそっと残していくもの",
    kana: "おもいではこころにそっとのこしていくもの",
    romaji: "omoide wa kokoro ni sotto nokoshite iku mono",
    reaction_good: "まあや「まあ…素敵。先生らしい優しい言葉ですね」",
    reaction_bad: "まあや「……先生、ここ誤字があります。少しだけ、気になってしまって」",
    image: "maaya.png"
    },
    {
    id: "req_uruu",
    subtype: "request",
    group: "1-4",
    sender: "槐原 潤",
    start_msg: "うるう「先生、作業手順メモのタイトル、代わりに入れてくれん？」",
    text: "ゆっくりでも確実に進めよう",
    kana: "ゆっくりでもかくじつにすすめよう",
    romaji: "yukkuri demo kakujitsu ni susumeyou",
    reaction_good: "うるう「うん、よかね。これなら分かりやすか」",
    reaction_bad: "うるう「先生、そこ文字違う。気づかんと？」",
    image: "uruu.png"
    },
    {
    id: "req_haruka",
    subtype: "request",
    group: "1-4",
    sender: "栢島 遥香",
    start_msg: "はるか「せんせー！クラス共有のお知らせ文、いっしょに作ってほしくて！」",
    text: "困ったときはおたがいさま！声かけてね",
    kana: "こまったときはおたがいさま こえかけてね",
    romaji: "komatta toki wa otagaisama koekakete ne",
    reaction_good: "はるか「わ〜！これ絶対みんな嬉しいやつ！」",
    reaction_bad: "はるか「あれ？先生、ここちょっと変じゃない？ドキドキする〜！」",
    image: "haruka.png"
    },
    {
    id: "req_sui",
    subtype: "request",
    group: "1-4",
    sender: "狩生 彗威",
    start_msg: "すい「せんせ、陸上部の連絡文、代わりに打ってくんね？」",
    text: "放課後はグラウンド集合 時間厳守",
    kana: "ほうかごはぐらうんどしゅうごう じかんげんしゅ",
    romaji: "houkago wa guraundo shuugou jikan genshu",
    reaction_good: "すい「お、いいじゃん。これなら文句言われねーな」",
    reaction_bad: "すい「は？せんせ、誤字ってるぞ。ちゃんと見ろよ」",
    image: "sui.png"
    },
    {
    id: "req_ayato",
    subtype: "request",
    group: "1-4",
    sender: "後等 綺乙",
    start_msg: "あやと「せんせー！提出用のひとこと、オラ字が苦手だから頼むべ！」",
    text: "今日は最後まで席に座ることを目標にする",
    kana: "きょうはさいごまでせきにすわることをもくひょうにする",
    romaji: "kyou wa saigo made seki ni suwaru koto o mokuhyou ni suru",
    reaction_good: "あやと「おおー！なんかできそうな気してきたぞ！」",
    reaction_bad: "あやと「えっ、せんせ誤字！？それオラのせいにされっからやめて〜！」",
    image: "ayato.png"
    },
    {
    id: "req_mikoto",
    subtype: "request",
    group: "1-4",
    sender: "櫻井 甫詞",
    start_msg: "みこと「せんせ、掲示用の注意文やけど…言葉選び、任せてもええ？」",
    text: "静かに過ごす時間を大切にしましょう",
    kana: "しずかにすごすじかんをたいせつにしましょう",
    romaji: "shizuka ni sugosu jikan o taisetsu ni shimashou",
    reaction_good: "みこと「ええやん。角立たへんし、効く言い方やわ」",
    reaction_bad: "みこと「……先生、ここ誤字あるで？詰めが甘いんは好きやないな」",
    image: "mikoto.png"
    },
    {
    id: "req_taichi",
    subtype: "request",
    group: "1-4",
    sender: "土川 卓逸",
    start_msg: "たいち「せ、先生…提出物チェック表の注意書き、代わりに入力してもらえますか…？」",
    text: "記入漏れがないか提出前に確認してください",
    kana: "きにゅうもれがないかていしゅつまえにかくにんしてください",
    romaji: "kinyuu more ga nai ka teishutsu mae ni kakunin shite kudasai",
    reaction_good: "たいち「ありがとうございます…これなら安心です」",
    reaction_bad: "たいち「……すみません先生、ここ一文字違ってます。直した方がいいです」",
    image: "taichi.png"
    },
    {
    id: "req_roi",
    subtype: "request",
    group: "1-4",
    sender: "손 로이",
    start_msg: "ろい「先生、共有メモの表紙文を入力してほしいニダ」",
    text: "計画通りに進めることが成功への近道",
    kana: "けいかくどおりにすすめることがせいこうへのちかみち",
    romaji: "keikaku doori ni susumeru koto ga seikou e no chikamichi",
    reaction_good: "ろい「合理的で無駄がない。さすがニダ」",
    reaction_bad: "ろい「誤字があります。先生らしくないミスですニダ」",
    image: "roi.png"
    },
    {
    id: "req_sayaka",
    subtype: "request",
    group: "1-4",
    sender: "寺田 山茶花",
    start_msg: "さやか「せんせ…展示用のひとこと、入れてもらえへんやろか…？」",
    text: "静かに楽しんでいただけたら嬉しいです",
    kana: "しずかにたのしんでいただけたらうれしいです",
    romaji: "shizuka ni tanoshinde itadaketara ureshii desu",
    reaction_good: "さやか「……やさしい言葉やね。ありがとう」",
    reaction_bad: "さやか「あの…先生、ここ誤字があって…ちょっと気になってしもた」",
    image: "sayaka.png"
    },
    {
    id: "req_akatsuki",
    subtype: "request",
    group: "1-4",
    sender: "二瓶 暁",
    start_msg: "あかつき「……せんせ。作曲提出用のコメント、適当に入れてくんない？」",
    text: "未完成でも今の自分を形にする",
    kana: "みかんせいでもいまのじぶんをかたちにする",
    romaji: "mikansei demo ima no jibun o katachi ni suru",
    reaction_good: "あかつき「……悪くない。まあ、これでいい」",
    reaction_bad: "あかつき「は？先生、誤字ってる。ちゃんと見ろよ」",
    image: "akatsuki.png"
    },
    {
    id: "req_enya",
    subtype: "request",
    group: "1-4",
    sender: "暗 援也",
    start_msg: "えんや「せんせ！オレのSNS用決めゼリフ、入力頼むわ！」",
    text: "世界を救うのは今日もオレだ",
    kana: "せかいをすくうのはきょうもおれだ",
    romaji: "sekai o sukuu no wa kyou mo ore da",
    reaction_good: "えんや「っしゃ！完璧！これでバズる未来見えた！」",
    reaction_bad: "えんや「ちょ、先生！？誤字ってたらヒーロー台無しなんだけど！」",
    image: "enya.png"
    },
    {
    id: "req_maya",
    subtype: "request",
    group: "1-4",
    sender: "保福 真夜",
    start_msg: "まや「せんせ……これ、私のロッカーに貼る注意文なんだけど……入力、お願いしてもいい？」",
    text: "私物には許可なく触れないでください",
    kana: "しぶつにはきょかなくふれないでください",
    romaji: "shibutsu ni wa kyoka naku furenai de kudasai",
    reaction_good: "まや「……うん。これなら、ちゃんと伝わる」",
    reaction_bad: "まや「……誤字。せんせ、ちゃんと見て。大事なことだから」",
    image: "maya.png"
    },
    {
    id: "req_yoru",
    subtype: "request",
    group: "1-4",
    sender: "御厨 夜",
    start_msg: "よる「せんせ〜、遅刻届の理由文、代わりに入力してほしかと…」",
    text: "体調不良のため朝の登校が遅れました",
    kana: "たいちょうふりょうのためあさのとうこうがおくれました",
    romaji: "taichou furyou no tame asa no toukou ga okuremashita",
    reaction_good: "よる「ありがと〜…これで怒られんですむばい」",
    reaction_bad: "よる「ん？ここ違っとるよ〜、せんせ眠かと？」",
    image: "yoru.png"
    },
    {
    id: "req_sadama",
    subtype: "request",
    group: "1-4",
    sender: "満山 渉守",
    start_msg: "さだま「先生、掲示用の注意喚起文を入力してもらえますか」",
    text: "安全確保のため無断行動は控えてください",
    kana: "あんぜんかくほのためむだんこうどうはひかえてください",
    romaji: "anzen kakuho no tame mudan koudou wa hikaete kudasai",
    reaction_good: "さだま「合理的でいい。これなら誤解も生まれません」",
    reaction_bad: "さだま「誤字があります。信頼性が下がるので修正してください」",
    image: "sadama.png"
    },
    {
    id: "req_kaji",
    subtype: "request",
    group: "1-4",
    sender: "源口 舵",
    start_msg: "かじ「せんせ！これ配る紙の一言、打ってくんね？」",
    text: "自由な発想を大切にしよう",
    kana: "じゆうなはっそうをたいせつにしよう",
    romaji: "jiyuu na hassou o taisetsu ni shiyou",
    reaction_good: "かじ「おお！なんかそれっぽい！いいじゃん！」",
    reaction_bad: "かじ「え、せんせ誤字ってるぞ？逆に味ってやつ？」",
    image: "kaji.png"
    },
    {
    id: "req_alice",
    subtype: "request",
    group: "1-4",
    sender: "恵 愛麗糸",
    start_msg: "ありす「……せんせ。提出用の一文、眠いから代わりに入力して」",
    text: "考察は夢の中で得た発想を元にしている",
    kana: "こうさつはゆめのなかでえたはっそうをもとにしている",
    romaji: "kousatsu wa yume no naka de eta hassou o moto ni shite iru",
    reaction_good: "ありす「……まあ、悪くない」",
    reaction_bad: "ありす「誤字。起こされた上にこれは最悪」",
    image: "alice.png"
    },
    {
    id: "req_shunki",
    subtype: "request",
    group: "1-4",
    sender: "吉岡 俊樹",
    start_msg: "しゅんき「せんせ〜、レポートの締め文、いい感じに入れてくんない？」",
    text: "今回は最低限の内容をまとめた",
    kana: "こんかいはさいていげんのないようをまとめた",
    romaji: "konkai wa saiteigen no naiyou o matometa",
    reaction_good: "しゅんき「お〜助かる助かる。これで一仕事終わりだわ」",
    reaction_bad: "しゅんき「え、誤字？……まぁ先生だし、しゃーないか」",
    image: "shunki.png"
    },
    // -------------------------------------
    // 🗣️ グループチャット参加
    // -------------------------------------
    // --- 1-1 ---
    {
        id: "chat_momoka_mimika_logic",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆みみか",
        start_msg:
            "ももか「ねぇ、今の問題さ。あたしの解法の方が速いでしょ？」\n" +
            "みみか「速いけど雑。条件の扱いが甘い」\n" +
            "ももか「勝てばいいのよ、勝てば！」\n" +
            "みみか「その思考が事故る原因」\n" +
            "ももか「はぁ？あたしは負けないんだから」\n" +
            "みみか「……そこが好きだけど」",
        text: "落ち着いて続きを確認しましょう。",
        kana: "おちついてつづきをかくにんしましょう。",
        romaji: "ochitsuite tsuzuki o kakunin shimashou",
        reaction_good:
            "みみか「その判断は合理的」\n" +
            "ももか「ふん。あたしの勝ちね」",
        reaction_bad:
            "ももか「何その入力。集中してる？」\n" +
            "みみか「誤字が多い。見直して」",
        images: ["momoka.png", "mimika.png"]
    },
    {
        id: "chat_hinaka_hikaru_noise",
        subtype: "chat",
        group: "1-1",
        sender: "ひなか＆ひかる",
        start_msg:
            "ひなか「え〜？その答え、ちょー早すぎん？雑じゃない？」\n" +
            "ひかる「は？感覚でいけるって！」\n" +
            "ひなか「それが一番あぶない言うとるが！」\n" +
            "ひかる「だいじょぶだって！ほら、ほぼ合ってる！」\n" +
            "ひなか「“ほぼ”は正解じゃないけんね？」",
        text: "順序立てて説明してください。",
        kana: "じゅんじょだててせつめいしてください。",
        romaji: "junjo datete setsumei shite kudasai",
        reaction_good:
            "ひかる「お、おう……説明すっか」\n" +
            "ひなか「そうそう、それでええけん！」",
        reaction_bad:
            "ひなか「先生、今の打ち間違い多すぎん？」\n" +
            "ひかる「落ち着けって！」",
        images: ["hinaka.png", "hikaru.png"]
    },
    {
        id: "chat_seina_tetsu_care",
        subtype: "chat",
        group: "1-1",
        sender: "せいな＆てつ",
        start_msg:
            "せいな「はいはい、そこ違う。貸して」\n" +
            "てつ「え〜？でもこの考え方も良くない？」\n" +
            "せいな「良いけど今は違う！」\n" +
            "てつ「うーん、みんな違ってみんないいと思うんだけどなぁ」\n" +
            "せいな「今は統一するの！」",
        text: "意見を整理しましょう。",
        kana: "いけんをせいりしましょう。",
        romaji: "iken o seiri shimashou",
        reaction_good:
            "せいな「そう、それ！」\n" +
            "てつ「なるほど〜！」",
        reaction_bad:
            "せいな「入力ミス。やり直し」\n" +
            "てつ「あ、ほんとだ〜？」",
        images: ["seina.png", "tetsu.png"]
    },
    {
        id: "chat_towa_akaru_party",
        subtype: "chat",
        group: "1-1",
        sender: "とわ＆あかる",
        start_msg:
            "とわ「なぁ、これ終わったら飯じゃね？」\n" +
            "あかる「いいね！終わってなくても食べよ！」\n" +
            "とわ「それ最高」\n" +
            "あかる「チーズあるよ？」\n" +
            "とわ「神か？」",
        text: "今は課題を優先してください。",
        kana: "いまはかだいをゆうせんしてください。",
        romaji: "ima wa kadai o yuusen shite kudasai",
        reaction_good:
            "とわ「はーい……」\n" +
            "あかる「あとでね！」",
        reaction_bad:
            "とわ「先生、ミスってる」\n" +
            "あかる「酔ってる？」",
        images: ["towa.png", "akaru.png"]
    },
    {
        id: "chat_mai_ai_abyss",
        subtype: "chat",
        group: "1-1",
        sender: "まい＆あい",
        start_msg:
            "まい「……それ、本当に正解だと思ってる？」\n" +
            "あい「あらあら〜。そう思っていらっしゃるなら幸せですねぇ」\n" +
            "まい「嘘つくのも疲れるんだけど」\n" +
            "あい「嘘だと分かってて聞いてあげてるんですよ？」\n" +
            "まい「……性格悪」\n" +
            "あい「褒め言葉として受け取りますねぇ」",
        text: "感情的にならず進めてください。",
        kana: "かんじょうてきにならずすすめてください。",
        romaji: "kanjouteki ni narazu susumete kudasai",
        reaction_good:
            "あい「あら、先生。空気が読めていらっしゃる」\n" +
            "まい「……今のは助かった」",
        reaction_bad:
            "まい「先生、誤字。見てて不安」\n" +
            "あい「その入力精度で指導は、少々滑稽ですねぇ」",
        images: ["mai.png", "ai.png"]
    },
    {
        id: "chat_kotarou_momoka_dog",
        subtype: "chat",
        group: "1-1",
        sender: "こたろう＆ももか",
        start_msg:
            "ももか「ちょっと、そこ違うでしょ」\n" +
            "こたろう「あ、ほんとだ。ありがとう」\n" +
            "ももか「……素直すぎない？」\n" +
            "こたろう「だって助かったし」\n" +
            "ももか「……ふん」\n" +
            "こたろう「でも、ももかの考え方は好きだよ」",
        text: "協力して進めましょう。",
        kana: "きょうりょくしてすすめましょう。",
        romaji: "kyouryoku shite susumemashou",
        reaction_good:
            "こたろう「うん、そうしよう」\n" +
            "ももか「……別に嫌じゃない」",
        reaction_bad:
            "ももか「先生、そこ打ち間違えてる」\n" +
            "こたろう「落ち着いてください」",
        images: ["kotarou.png", "momoka.png"]
    },
    {
        id: "chat_koto_setsuna_photo",
        subtype: "chat",
        group: "1-1",
        sender: "こと＆せつな",
        start_msg:
            "こと「その角度、今の光ええな」\n" +
            "せつな「あ、ほんとだねぇ……あれ？何の話だっけ？」\n" +
            "こと「さっきのやつ」\n" +
            "せつな「あ〜……忘れた」\n" +
            "こと「メモ帳は？」\n" +
            "せつな「あっ、カバンの奥！」",
        text: "話題を整理してください。",
        kana: "わだいをせいりしてください。",
        romaji: "wadai o seiri shite kudasai",
        reaction_good:
            "せつな「メモ見たら思い出した〜！」\n" +
            "こと「ほらな」",
        reaction_bad:
            "こと「先生、そこ誤字や」\n" +
            "せつな「えへへ、間違っとるよ〜」",
        images: ["koto.png", "setsuna.png"]
    },
    {
        id: "chat_kaede_mount",
        subtype: "chat",
        group: "1-1",
        sender: "かえで",
        start_msg:
            "かえで「ねぇ先生、これ簡単すぎない？」\n" +
            "かえで「まぁ、私が美しくて頭もいいからだけど」\n" +
            "かえで「クラスで一番理解してるの私だし」\n" +
            "かえで「異論ある？」",
        text: "謙虚に取り組みましょう。",
        kana: "けんきょにとりくみましょう。",
        romaji: "kenkyo ni torikumimashou",
        reaction_good:
            "かえで「……まぁ、先生が言うなら？」",
        reaction_bad:
            "かえで「先生、誤字多くない？」\n" +
            "かえで「その入力で私を導こうとしてるの？」",
        images: ["kaede.png"]
    },
    {
        id: "chat_momoka_hikaru_balloon",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆ひかる",
        start_msg:
            "ひかる「なぁ、またその顔してる」\n" +
            "ももか「なによ」\n" +
            "ひかる「噛みつく前の顔」\n" +
            "ももか「……うるさい」\n" +
            "ひかる「この前もそうやってさ、風船――」\n" +
            "ももか「言うな！！」\n" +
            "ひかる「はは、相変わらずだな」",
        text: "落ち着いて続けてください。",
        kana: "おちついてつづけてください。",
        romaji: "ochitsuite tsuzukete kudasai",
        reaction_good:
            "ひかる「ま、やるか」\n" +
            "ももか「……ちゃんとやりなさいよ」",
        reaction_bad:
            "ももか「先生、誤字」\n" +
            "ひかる「そこ違くね？」",
        images: ["momoka.png", "hikaru.png"]
    },
    {
        id: "chat_setsuna_reporter",
        subtype: "chat",
        group: "1-1",
        sender: "せつな",
        start_msg:
            "せつな「あっ、それニュースになるやつじゃなか？」\n" +
            "せつな「ちょっと待って、メモ……あれ？」\n" +
            "せつな「写真撮らなん！」\n" +
            "せつな「……あれ？何撮るんだっけ」",
        text: "課題に集中してください。",
        kana: "かだいにしゅうちゅうしてください。",
        romaji: "kadai ni shuuchuu shite kudasai",
        reaction_good:
            "せつな「あっ、ごめん！戻るね〜」",
        reaction_bad:
            "せつな「先生、そこ打ち間違えとるよ〜」\n" +
            "せつな「スクープ以前の問題たい」",
        images: ["setsuna.png"]
    },
    {
        id: "chat_kotarou_kojiro_safe",
        subtype: "chat",
        group: "1-1",
        sender: "こたろう＆こじろう",
        start_msg:
            "こじろう「この流れ、ここで一度整理しよう」\n" +
            "こたろう「うん、その方が分かりやすいね」\n" +
            "こじろう「焦らなくていい」\n" +
            "こたろう「ありがとう。助かる」",
        text: "良いペースです。",
        kana: "よいぺーすです。",
        romaji: "yoi peesu desu",
        reaction_good:
            "こじろう「その評価は嬉しいです」\n" +
            "こたろう「このままいこう」",
        reaction_bad:
            "こじろう「先生、誤字があります」\n" +
            "こたろう「落ち着いてください」",
        images: ["kotarou.png", "kojiro.png"]
    },
    {
        id: "chat_masaki_komari_gentle",
        subtype: "chat",
        group: "1-1",
        sender: "まさき＆こまり",
        start_msg:
            "こまり「これ、自分で作ったんだ！」\n" +
            "まさき「……すごく丁寧だね」\n" +
            "こまり「えへへ」\n" +
            "まさき「その感覚、大事にした方がいい」\n" +
            "こまり「うん。ありがと」",
        text: "そのまま続けてください。",
        kana: "そのままつづけてください。",
        romaji: "sono mama tsuzukete kudasai",
        reaction_good:
            "まさき「この雰囲気、いいですね」\n" +
            "こまり「落ち着く〜」",
        reaction_bad:
            "こまり「先生、そこ違うよ」\n" +
            "まさき「誤字があります」",
        images: ["masaki.png", "komari.png"]
    },
    {
    id: "chat_momoka_pose_lesson",
    subtype: "chat",
    group: "1-1",
    sender: "ももか＆みみか＆ひなか",
    start_msg:
        "ももか「見てなさい。これが“セレブ座り”よ」\n" +
        "ひなか「えっ、なにそれ！島根にはないけん新鮮だわ〜！」\n" +
        "みみか「背筋、尻尾の角度、視線。全部計算されてる」\n" +
        "ももか「当然でしょ。無様な姿は見せられないの」\n" +
        "ひなか「ほえ〜！写真撮っていい？」\n" +
        "ももか「……一枚だけよ。ブレたら噛む」",
    text: "姿勢に気をつけてね。",
    kana: "しせいにきをつけてね。",
    romaji: "shisei ni ki o tsukete ne",
    reaction_good:
        "みみか「先生、意外と観察眼ある」\n" +
        "ももか「ふん…悪くないわ」",
    reaction_bad:
        "ひなか「先生、誤字っとるけん意味変わっとるよ？」\n" +
        "ももか「指導する側が噛むとか論外ね」",
    images: ["momoka.png", "mimika.png", "hinaka.png"]
    },
    {
    id: "chat_kofuku_ai_coldwar",
    subtype: "chat",
    group: "1-1",
    sender: "こふく＆あい",
    start_msg:
        "こふく「……また山に入ったね」\n" +
        "あい「あらあら〜、見回りご苦労さま♡」\n" +
        "こふく「荒らすなら、静かにしてほしい」\n" +
        "あい「荒らすだなんて失礼ですね。観察、ですよ」\n" +
        "こふく「……あなたの観察は、刃がある」\n" +
        "あい「ふふ。気づいてしまいました？」",
    text: "仲良くしなさい。",
    kana: "なかよくしなさい。",
    romaji: "nakayoku shinasai",
    reaction_good:
        "こふく「……忠告として受け取る」\n" +
        "あい「先生、平和主義なんですねぇ」",
    reaction_bad:
        "あい「先生、誤字です。その程度の注意で止まると？」\n" +
        "こふく「言葉は正確に」",
    images: ["kofuku.png", "ai.png"]
    },
    {
    id: "chat_sei_kaede_clash",
    subtype: "chat",
    group: "1-1",
    sender: "せい＆かえで",
    start_msg:
        "せい「全体の士気を考えて行動しろ！」\n" +
        "かえで「は？私が目立つ方がクラスの華でしょ」\n" +
        "せい「自分本位すぎる！」\n" +
        "かえで「情熱だけで回るほど甘くないんだけど？」\n" +
        "せい「だからこそ、心を一つに！」\n" +
        "かえで「暑苦しいのよ！」",
    text: "落ち着いて話そう。",
    kana: "おちついてはなそう。",
    romaji: "ochitsuite hanasou",
    reaction_good:
        "せい「……すまん、少し熱くなった」\n" +
        "かえで「まぁ、嫌いじゃないけどね」",
    reaction_bad:
        "かえで「先生、誤字って説得力ゼロ」\n" +
        "せい「そこはキッチリしてくれ！」",
    images: ["sei.png", "kaede.png"]
    },
    {
    id: "chat_kojiro_koto_music",
    subtype: "chat",
    group: "1-1",
    sender: "こじろう＆こと",
    start_msg:
        "こじろう「その写真、音が聞こえそうだね」\n" +
        "こと「瞬間を切り取るだけや」\n" +
        "こじろう「曲も同じ。一瞬の感情」\n" +
        "こと「なるほどな。今度撮らせてや」\n" +
        "こじろう「いいよ。静かな曲の時に」",
    text: "いい交流だね。",
    kana: "いいこうりゅうだね。",
    romaji: "ii kouryuu da ne",
    reaction_good:
        "こと「先生、わかっとるやん」\n" +
        "こじろう「嬉しいな」",
    reaction_bad:
        "こと「先生、誤字。空気は読めとる？」\n" +
        "こじろう「細かいところ、大事だよ」",
    images: ["kojiro.png", "koto.png"]
    },
    {
    id: "chat_towa_akaru_chaos",
    subtype: "chat",
    group: "1-1",
    sender: "とわ＆あかる",
    start_msg:
        "とわ「なぁあかる、それ食っていい？」\n" +
        "あかる「え、オレの？いいよいいよ！」\n" +
        "とわ「やった！…うまっ！」\n" +
        "あかる「ちょっと！半分以上いってない！？」\n" +
        "とわ「うまいもんは勢いだろ」\n" +
        "あかる「まぁ楽しいからいっか！はい帽子！」\n" +
        "とわ「被せんなって！」",
    text: "教室では節度を守りましょう。",
    kana: "きょうしつではせつどをまもりましょう。",
    romaji: "kyoushitsu dewa setsudo o mamorimashou",
    reaction_good:
        "あかる「はーい！ほどほどにしまーす！」\n" +
        "とわ「ほどほどってなんだ？」",
    reaction_bad:
        "とわ「先生、誤字ってる。勢い止める気ないでしょ」\n" +
        "あかる「注意文で噛むのはダサいっすよ〜！」",
    images: ["towa.png", "akaru.png"]
    },
    {
    id: "chat_mai_ai_mindgame",
    subtype: "chat",
    group: "1-1",
    sender: "まい＆あい",
    start_msg:
        "まい「それ、本当だと思う？」\n" +
        "あい「あらあら〜、さぁどうでしょう？」\n" +
        "まい「信じてるふり、楽しいよね」\n" +
        "あい「ええ。騙されてあげる人を見るのも」\n" +
        "まい「じゃあ、私が嘘ついてるとしたら？」\n" +
        "あい「ふふ…それも含めて、可愛いです」",
    text: "穏やかに話してください。",
    kana: "おだやかにはなしてください。",
    romaji: "odayaka ni hanashite kudasai",
    reaction_good:
        "あい「先生、表面しか見てませんねぇ」\n" +
        "まい「それでいいと思うよ」",
    reaction_bad:
        "あい「誤字ですよ先生。嘘より先に気づくべきでは？」\n" +
        "まい「指摘されてる時点で負け」",
    images: ["mai.png", "ai.png"]
    },
    {
    id: "chat_setsuna_koto_report",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆こと",
    start_msg:
        "せつな「ことくん、今の表情いい！」\n" +
        "こと「おい、急に撮るなや」\n" +
        "せつな「スクープの予感がして！」\n" +
        "こと「新聞部、勢いで動くな」\n" +
        "せつな「大丈夫！あとで忘れるから！」\n" +
        "こと「それが一番問題やろ」",
    text: "撮影は許可を取ろう。",
    kana: "さつえいはきょかをとろう。",
    romaji: "satsuei wa kyoka o torou",
    reaction_good:
        "せつな「はーい！メモするね！」\n" +
        "こと「それ忘れるやつや」",
    reaction_bad:
        "こと「先生、誤字。説得力落ちとる」\n" +
        "せつな「あっ、先生もメモしよ！」",
    images: ["setsuna.png", "koto.png"]
    },
    {
    id: "chat_setsuna_momoka_celeb",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆ももか",
    start_msg:
        "せつな「ももかちゃん！そのポーズ…！」\n" +
        "ももか「撮るなら一言いいなさい」\n" +
        "せつな「セレブ特集いけるもん！」\n" +
        "ももか「勝手に価値つけないで」\n" +
        "せつな「えー！でも輝いとる！」\n" +
        "ももか「……一枚だけよ」",
    text: "落ち着いて行動しましょう。",
    kana: "おちついてこうどうしましょう。",
    romaji: "ochitsuite koudou shimashou",
    reaction_good:
        "ももか「礼儀は分かってるわね」\n" +
        "せつな「やったー！スクープ！」",
    reaction_bad:
        "ももか「先生、誤字。注意する側が乱れてどうするの」\n" +
        "せつな「あっ、そこも撮っとこ！」",
    images: ["setsuna.png", "momoka.png"]
    },
    {
    id: "chat_setsuna_kosaku_blackhole",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆こさく",
    start_msg:
        "こさく「なぁせつな！オレのスマホ知らん？」\n" +
        "せつな「えー？見てないよぉ」\n" +
        "こさく「さっきまでここで使っとってん！」\n" +
        "せつな「……あ、今カバン動いた」\n" +
        "こさく「は？生きとるん？」\n" +
        "せつな「ブラックホール期かも」",
    text: "持ち物は各自で管理しましょう。",
    kana: "もちものはかくじでかんりしましょう。",
    romaji: "mochimono wa kakujide kanri shimashou",
    reaction_good:
        "こさく「次から名札つけるわ！」\n" +
        "せつな「それでも吸われそう」",
    reaction_bad:
        "せつな「先生、字抜けとるよ」\n" +
        "こさく「管理以前の問題やん」",
    images: ["setsuna.png", "kosaku.png"]
    },
    {
    id: "chat_setsuna_mimika_blackhole",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆みみか",
    start_msg:
        "みみか「……私のメモ帳、知らない？」\n" +
        "せつな「あっ」\n" +
        "みみか「その反応は黒」\n" +
        "せつな「昨日インタビューした気がする」\n" +
        "みみか「それは私の記憶」\n" +
        "せつな「じゃあ吸われたね」",
    text: "人の物は勝手に触らないこと。",
    kana: "ひとのものはかってにさわらないこと。",
    romaji: "hito no mono wa katte ni sawaranaikoto",
    reaction_good:
        "みみか「後で回収するわ」\n" +
        "せつな「ブラックホール整理する…多分」",
    reaction_bad:
        "みみか「先生、助詞がおかしい」\n" +
        "せつな「冷静すぎてこわい」",
    images: ["setsuna.png", "mimika.png"]
    },
    {
    id: "chat_mimika_momoka_besties",
    subtype: "chat",
    group: "1-1",
    sender: "みみか＆ももか",
    start_msg:
        "ももか「またひかるがちょっかい出してきたんだけど」\n" +
        "みみか「無視すればいい」\n" +
        "ももか「吠えた方が早いでしょ」\n" +
        "みみか「効率は悪い」\n" +
        "ももか「でもスッキリするわ」\n" +
        "みみか「……それも否定はしない」",
    text: "落ち着いて行動しましょう。",
    kana: "おちついてこうどうしましょう。",
    romaji: "ochitsuite koudou shimashou",
    reaction_good:
        "ももか「みみかが味方なら無敵ね」\n" +
        "みみか「当然」",
    reaction_bad:
        "みみか「先生、表現が曖昧」\n" +
        "ももか「説得力ないわね」",
    images: ["mimika.png", "momoka.png"]
    },
    {
    id: "chat_mimika_ai_mindgame",
    subtype: "chat",
    group: "1-1",
    sender: "みみか＆あい",
    start_msg:
        "あい「あらあら〜、随分静かね」\n" +
        "みみか「無駄な発話をしていないだけ」\n" +
        "あい「効率主義？」\n" +
        "みみか「感情は必要な時だけ使う」\n" +
        "あい「ふふ…似てるようで違うわね」\n" +
        "みみか「あなたは遊んでいる」",
    text: "他人を挑発しないように。",
    kana: "たにんをちょうはつしないように。",
    romaji: "tanin o chouhatsu shinai youni",
    reaction_good:
        "あい「ご明察〜♡」\n" +
        "みみか「自覚があるなら尚更厄介」",
    reaction_bad:
        "あい「先生、誤字ですよ？」\n" +
        "みみか「注意文の精度が低い」",
    images: ["mimika.png", "ai.png"]
    },
    {
    id: "chat_hinaka_momoka_energy",
    subtype: "chat",
    group: "1-1",
    sender: "ひなか＆ももか",
    start_msg:
        "ひなか「もったんこ、今日もピリピリしとるね〜！」\n" +
        "ももか「アンタが近いのよ」\n" +
        "ひなか「えー？仲良しの距離じゃん！」\n" +
        "ももか「吠えるわよ？」\n" +
        "ひなか「それも可愛いけん！」",
    text: "適切な距離を保ちましょう。",
    kana: "てきせつなきょりをたもちましょう。",
    romaji: "tekisetsuna kyori o tamochimashou",
    reaction_good:
        "ひなか「先生わかっとる〜！」\n" +
        "ももか「まぁ、悪くない」",
    reaction_bad:
        "ももか「誤字多すぎ」\n" +
        "ひなか「注意文の方が荒れとるよ？」",
    images: ["hinaka.png", "momoka.png"]
    },
    {
    id: "chat_setsuna_bag_explosion",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆ももか＆みみか",
    start_msg:
        "せつな「ちょっとカバン開けるね〜」\n" +
        "ももか「待ちなさい、嫌な予感しかしない」\n" +
        "みみか「統計的に危険」\n" +
        "せつな「えいっ」\n" +
        "ももか「……私の首輪」\n" +
        "みみか「私のメモ帳」\n" +
        "せつな「あ、昨日のスクープ写真もある」",
    text: "他人の持ち物は返却しましょう。",
    kana: "たにんのもちものはへんきゃくしましょう。",
    romaji: "tanin no mochimono wa henkyaku shimashou",
    reaction_good:
        "ももか「全部回収したわ」\n" +
        "みみか「ブラックホール、危険指定」",
    reaction_bad:
        "みみか「先生、誤字」\n" +
        "ももか「注意文が雑ね」",
    images: ["setsuna.png", "momoka.png", "mimika.png"]
    },
    {
    id: "chat_momoka_celebrity_win",
    subtype: "chat",
    group: "1-1",
    sender: "ももか＆ひかる＆せいな",
    start_msg:
        "ひかる「またキメ顔してんな」\n" +
        "ももか「これは勝利のポーズよ」\n" +
        "せいな「何に勝ったの？」\n" +
        "ももか「全てに」\n" +
        "ひかる「意味わかんねぇけど強そう」\n" +
        "ももか「当然でしょ」",
    text: "自慢しすぎないように。",
    kana: "じまんしすぎないように。",
    romaji: "jiman shisuginai youni",
    reaction_good:
        "せいな「まぁ結果出してるしね」\n" +
        "ももか「でしょ？」",
    reaction_bad:
        "ももか「先生、語尾変」\n" +
        "ひかる「威厳ゼロ」",
    images: ["momoka.png", "hikaru.png", "seina.png"]
    },
    {
    id: "chat_ai_psychological_pressure",
    subtype: "chat",
    group: "1-1",
    sender: "あい＆とわ＆こさく",
    start_msg:
        "あい「あらあら〜、また宿題忘れたんですか？」\n" +
        "とわ「うっ……」\n" +
        "こさく「今日はたまたまや！」\n" +
        "あい「その“たまたま”何回目です？」\n" +
        "とわ「笑顔が一番怖い」\n" +
        "あい「褒め言葉です♡」",
    text: "相手を責めすぎないでください。",
    kana: "あいてをせめすぎないでください。",
    romaji: "aite o semesuginai de kudasai",
    reaction_good:
        "あい「自覚はあります〜」\n" +
        "とわ「止める気ねぇな」",
    reaction_bad:
        "あい「先生、誤字ですよ？」\n" +
        "こさく「説得力どこ行ったん」",
    images: ["ai.png", "towa.png", "kosaku.png"]
    },
    {
    id: "chat_surprise_momoka",
    subtype: "chat",
    group: "1-1",
    sender: "ひなか＆みみか＆ももか",
    start_msg:
        "ひなか「もったんこちゃん、目つぶって！」\n" +
        "ももか「……怪しい」\n" +
        "みみか「危険性は低い」\n" +
        "ひなか「じゃーん！」\n" +
        "ももか「……」\n" +
        "ももか「悪くないわね」",
    text: "サプライズは程々に。",
    kana: "さぷらいずはほどほどに。",
    romaji: "sapuraizu wa hodohodo ni",
    reaction_good:
        "ひなか「成功〜！」\n" +
        "みみか「計画通り」",
    reaction_bad:
        "ももか「先生、読みにくい」\n" +
        "ひなか「雰囲気壊しとるよ？」",
    images: ["hinaka.png", "mimika.png", "momoka.png"]
    },
    {
    id: "chat_akaru_kosaku_energy",
    subtype: "chat",
    group: "1-1",
    sender: "あかる＆こさく",
    start_msg:
        "あかる「この帽子どう？」\n" +
        "こさく「派手すぎやろ！」\n" +
        "あかる「じゃあ倍にする！」\n" +
        "こさく「なんでやねん！」\n" +
        "あかる「楽しいから！」\n" +
        "こさく「否定できんわ！」",
    text: "教室では静かにしましょう。",
    kana: "きょうしつではしずかにしましょう。",
    romaji: "kyoushitsu dewa shizuka ni shimashou",
    reaction_good:
        "あかる「元気出たでしょ！」\n" +
        "こさく「まぁな！」",
    reaction_bad:
        "こさく「先生、誤字やで」\n" +
        "あかる「ツッコミ助かる〜！」",
    images: ["akaru.png", "kosaku.png"]
    },
    {
    id: "chat_blackhole_trial",
    subtype: "chat",
    group: "1-1",
    sender: "せつな＆ももか＆みみか＆せいな",
    start_msg:
        "せいな「これより裁判を始める」\n" +
        "ももか「被告はカバン」\n" +
        "せつな「え〜？そんなに？」\n" +
        "みみか「証拠は十分」\n" +
        "せつな「昨日なくした記憶も出てきた」\n" +
        "ももか「有罪」",
    text: "冷静に話し合いましょう。",
    kana: "れいせいにはなしあいましょう。",
    romaji: "reisei ni hanashiaimashou",
    reaction_good:
        "せいな「判決、カバン没収」\n" +
        "せつな「えぇ〜！？」",
    reaction_bad:
        "みみか「先生、漢字違う」\n" +
        "ももか「威厳が足りない」",
    images: ["setsuna.png", "momoka.png", "mimika.png", "seina.png"]
    },
    {
    id: "chat_kojiro_music_breakdown",
    subtype: "chat",
    group: "1-1",
    sender: "こじろう＆ももか＆てつ",
    start_msg:
        "こじろう「少し弾くね」\n" +
        "ももか「……」\n" +
        "てつ「ちょ、涙出てきた」\n" +
        "ももか「……綺麗」\n" +
        "こじろう「え？」\n" +
        "てつ「クラス全員泣くやつだこれ」",
    text: "授業中の演奏は控えてください。",
    kana: "じゅぎょうちゅうのえんそうはひかえてください。",
    romaji: "jugyouchuu no ensou wa hikaete kudasai",
    reaction_good:
        "こじろう「次は放課後にする」\n" +
        "ももか「それは来る」",
    reaction_bad:
        "てつ「先生、読点多いよ〜」\n" +
        "ももか「集中切れる」",
    images: ["kojiro.png", "momoka.png", "tetsu.png"]
    },
    {
    id: "chat_ai_vs_mimika",
    subtype: "chat",
    group: "1-1",
    sender: "あい＆みみか",
    start_msg:
        "あい「あらあら〜、理論派ですね」\n" +
        "みみか「感情論より正確」\n" +
        "あい「その正確さ、孤独ですよ？」\n" +
        "みみか「孤独は効率的」\n" +
        "あい「ふふ、面白い」",
    text: "喧嘩はやめましょう。",
    kana: "けんかはやめましょう。",
    romaji: "kenka wa yamemashou",
    reaction_good:
        "あい「喧嘩ではありません♡」\n" +
        "みみか「議論」",
    reaction_bad:
        "みみか「先生、定義が曖昧」\n" +
        "あい「止め方が甘いですねぇ」",
    images: ["ai.png", "mimika.png"]
    },
    {
    id: "chat_tetsu_kotarou",
    subtype: "chat",
    group: "1-1",
    sender: "てつ＆こたろう",
    start_msg:
        "てつ「今日も平和だねぇ」\n" +
        "こたろう「うん、いいクラスだ」\n" +
        "てつ「みんな違ってて楽しい」\n" +
        "こたろう「それが強みだよね」",
    text: "仲良くしましょう。",
    kana: "なかよくしましょう。",
    romaji: "nakayoku shimashou",
    reaction_good:
        "てつ「はーい！」\n" +
        "こたろう「もちろん」",
    reaction_bad:
        "てつ「先生、平仮名多い〜」\n" +
        "こたろう「ちょっと幼い」",
    images: ["tetsu.png", "kotarou.png"]
    },
    {
    id: "chat_kofuku_masaki",
    subtype: "chat",
    group: "1-1",
    sender: "こふく＆まさき",
    start_msg:
        "こふく「今日は風が穏やかだ」\n" +
        "まさき「うん、落ち着くね」\n" +
        "こふく「山も静かだ」\n" +
        "まさき「…少し、救われる」",
    text: "静かに過ごしましょう。",
    kana: "しずかにすごしましょう。",
    romaji: "shizuka ni sugoshimashou",
    reaction_good:
        "こふく「望ましい」\n" +
        "まさき「ありがとう」",
    reaction_bad:
        "こふく「文が崩れている」\n" +
        "まさき「読みづらいかも」",
    images: ["kofuku.png", "masaki.png"]
    },
    {
    id: "chat_sei_koto",
    subtype: "chat",
    group: "1-1",
    sender: "せい＆こと",
    start_msg:
        "せい「よし！まず目標を明確にするぞ！」\n" +
        "こと「まぁまぁ、そんな肩に力入れんでも」\n" +
        "せい「やるからには全力だ！」\n" +
        "こと「力入れすぎると、長持ちせんき」\n" +
        "せい「熱意は大事だろ！」\n" +
        "こと「熱意と空回りは紙一重やぞ」",
    text: "落ち着いて進めましょう。",
    kana: "おちついてすすめましょう。",
    romaji: "ochitsuite susumemashou",
    reaction_good:
        "せい「……よし、役割分担から行く！」\n" +
        "こと「それなら付き合えるき」",
    reaction_bad:
        "こと「先生、今の誤字多すぎや」\n" +
        "せい「伝わらなきゃ意味ないぞ！」",
    images: ["sei.png", "koto.png"]
    },
    {
    id: "chat_momoka_hikaru",
    subtype: "chat",
    group: "1-1",
    sender: "ももか＆ひかる",
    start_msg:
        "ひかる「なぁ桃花、また眉間シワ寄ってんぞ」\n" +
        "ももか「うるさい！集中してんの！」\n" +
        "ひかる「はいはい、噛みつかないで〜」\n" +
        "ももか「……あんたは真剣さが足りないのよ」\n" +
        "ひかる「でもさ、楽しんだ方がうまくいくって！」",
    text: "話をまとめてください。",
    kana: "はなしをまとめてください。",
    romaji: "hanashi o matomete kudasai",
    reaction_good:
        "ももか「……後で文句言うから覚悟しなさい」\n" +
        "ひかる「はいはい、褒め言葉な！」",
    reaction_bad:
        "ももか「先生、変なとこで切らないで」\n" +
        "ひかる「それだと意味ズレるべ？」",
    images: ["momoka.png", "hikaru.png"]
    },
    {
    id: "chat_mimika_ai",
    subtype: "chat",
    group: "1-1",
    sender: "みみか＆あい",
    start_msg:
        "みみか「……非合理ね」\n" +
        "あい「あらあら〜そう見えます？」\n" +
        "みみか「感情で誤魔化しているだけよ」\n" +
        "あい「ふふ、理屈だけで世界は回りませんよ？」\n" +
        "みみか「……回すわ」",
    text: "冷静に意見交換しましょう。",
    kana: "れいせいにいけんこうかんしましょう。",
    romaji: "reisei ni iken koukan shimashou",
    reaction_good:
        "あい「まあ、今回は譲ってあげます」\n" +
        "みみか「恩着せがましい」",
    reaction_bad:
        "みみか「先生、論理が破綻しています」\n" +
        "あい「入力、落ち着いてなさそうですねぇ」",
    images: ["mimika.png", "ai.png"]
    },
    {
    id: "chat_seina_kosaku",
    subtype: "chat",
    group: "1-1",
    sender: "せいな＆こさく",
    start_msg:
        "せいな「で？ちゃんと考えて来た？」\n" +
        "こさく「まあまあ！なんとかなるやろ！」\n" +
        "せいな「ならないから聞いてんの！」\n" +
        "こさく「細かいなぁ〜」\n" +
        "せいな「詰めが甘いのよ！」",
    text: "計画的に進めてください。",
    kana: "けいかくてきにすすめてください。",
    romaji: "keikakuteki ni susumete kudasai",
    reaction_good:
        "こさく「しゃーない、真面目にやるわ！」\n" +
        "せいな「最初からそうしなさい」",
    reaction_bad:
        "せいな「先生、その書き方だと誤解生む」\n" +
        "こさく「日本語むずかしなっとるで？」",
    images: ["seina.png", "kosaku.png"]
    },
    {
    id: "chat_tetsu_komari",
    subtype: "chat",
    group: "1-1",
    sender: "てつ＆こまり",
    start_msg:
        "てつ「それ、すごく丁寧だねぇ！」\n" +
        "こまり「うん、ここは譲れんの」\n" +
        "てつ「いいと思うよ！個性だもん！」\n" +
        "こまり「……そう言われると安心する」",
    text: "良い点をまとめましょう。",
    kana: "よいてんをまとめましょう。",
    romaji: "yoi ten o matomemashou",
    reaction_good:
        "こまり「じゃあ、この案で行く」\n" +
        "てつ「やったぁ！」",
    reaction_bad:
        "こまり「先生、そこ意味違ってくるよ」\n" +
        "てつ「一文字抜けてるかも？」",
    images: ["tetsu.png", "komari.png"]
    },
    {
    id: "chat_momoka_sei",
    subtype: "chat",
    group: "1-1",
    sender: "ももか＆せい",
    start_msg:
        "ももか「指示が遅いわ。決断は一瞬でしなさい」\n" +
        "せい「いや、全員の意見を聞いてからだ！」\n" +
        "ももか「それで機会逃したら意味ないでしょ」\n" +
        "せい「独断じゃ人はついてこない！」\n" +
        "ももか「結果出せば黙るわ」\n" +
        "せい「結果は“みんなで”出すんだ！」",
    text: "意見を整理してください。",
    kana: "いけんをせいりしてください。",
    romaji: "iken o seiri shite kudasai",
    reaction_good:
        "ももか「……役割分担なら認める」\n" +
        "せい「よし！前線は任せた！」",
    reaction_bad:
        "ももか「先生、主語が抜けてる」\n" +
        "せい「それじゃ誤解されるぞ！」",
    images: ["momoka.png", "sei.png"]
    },
    {
    id: "chat_tetsu_koto",
    subtype: "chat",
    group: "1-1",
    sender: "てつ＆こと",
    start_msg:
        "てつ「みんなの気持ちも大事にしたいな〜」\n" +
        "こと「まぁ、それもええけど」\n" +
        "てつ「無理してる子、いそうじゃない？」\n" +
        "こと「無理してるなら休ませりゃええ」\n" +
        "てつ「割り切り早いねぇ」\n" +
        "こと「長引かせる方がしんどいき」",
    text: "意見を共有しましょう。",
    kana: "いけんをきょうゆうしましょう。",
    romaji: "iken o kyouyuu shimashou",
    reaction_good:
        "てつ「なるほど〜！助かる〜！」\n" +
        "こと「それなら役に立ったな」",
    reaction_bad:
        "こと「先生、今の文わかりにくいき」\n" +
        "てつ「一文長すぎかも？」",
    images: ["tetsu.png", "koto.png"]
    },
    {
    id: "chat_mimika_kofuku",
    subtype: "chat",
    group: "1-1",
    sender: "みみか＆こふく",
    start_msg:
        "みみか「感情論は不要よ」\n" +
        "こふく「同意する」\n" +
        "みみか「では最短ルートで」\n" +
        "こふく「山道でも問題ない」",
    text: "話を進めてください。",
    kana: "はなしをすすめてください。",
    romaji: "hanashi o susumete kudasai",
    reaction_good:
        "みみか「無駄がないですね」\n" +
        "こふく「当然だ」",
    reaction_bad:
        "みみか「先生、論点が飛躍しています」\n" +
        "こふく「読み直した方がいい」",
    images: ["mimika.png", "kofuku.png"]
    },
    {
    id: "chat_towa_akaru",
    subtype: "chat",
    group: "1-1",
    sender: "とわ＆あかる",
    start_msg:
        "とわ「なぁ、それより飯じゃね？」\n" +
        "あかる「え！それな！！」\n" +
        "とわ「チーズあったら最高」\n" +
        "あかる「帽子被る？」\n" +
        "とわ「今！？」",
    text: "集中してください。",
    kana: "しゅうちゅうしてください。",
    romaji: "shuuchuu shite kudasai",
    reaction_good:
        "あかる「はいはい〜」\n" +
        "とわ「戻る戻る」",
    reaction_bad:
        "とわ「先生、話止まってる」\n" +
        "あかる「入力ミスってない？」",
    images: ["towa.png", "akaru.png"]
    },
    {
    id: "chat_hinaka_kotarou",
    subtype: "chat",
    group: "1-1",
    sender: "ひなか＆こたろう",
    start_msg:
        "ひなか「それ、めっちゃええと思うわ〜！」\n" +
        "こたろう「ありがとう。具体化しよう」\n" +
        "ひなか「細かいの苦手〜！」\n" +
        "こたろう「俺がまとめるよ」",
    text: "協力して進めましょう。",
    kana: "きょうりょくしてすすめましょう。",
    romaji: "kyouryoku shite susumemashou",
    reaction_good:
        "ひなか「助かる〜！」\n" +
        "こたろう「任せて」",
    reaction_bad:
        "こたろう「先生、表現が曖昧です」\n" +
        "ひなか「どっちの意味？」",
    images: ["hinaka.png", "kotarou.png"]
    },
    { 
        id: "chat_towa_akaru_skip",
        subtype: "chat",
        group: "1-1",
        sender: "とわ＆あかる",
        start_msg:
            "とわ「なぁあかる、今日の数学さ…黒板見るだけで眠くね？」\n" +
            "あかる「わかる！脳がシャットダウンする音したもん！」\n" +
            "とわ「屋上行かね？風気持ちいいし、チーズの話しよ」\n" +
            "あかる「行こ行こ！授業よりチーズの方が栄養あるし！」\n" +
            "とわ「それ科学的に証明できそうじゃね？」\n" +
            "あかる「よしサボり理由できたな！」",
        text: "授業中ですよ。席に戻りなさい。", 
        kana: "じゅぎょうちゅうですよ。せきにもどりなさい。",
        romaji: "jugyouchuu desu yo. seki ni modorinasai",
        reaction_good:
            "とわ「え〜マジかぁ…しゃーない戻るわ」\n" +
            "あかる「はーい先生！屋上は放課後ね！」",
        reaction_bad:
            "とわ「先生、誤字ってるけど大丈夫？」\n" +
            "あかる「集中力、先に席戻ってない？」",
        images: ["towa.png", "akaru.png"]
    },
    { 
        id: "chat_momoka_sei_leader",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆せい",
        start_msg:
            "ももか「アンタ指示多すぎ。現場見て言いなさいよ」\n" +
            "せい「全体を回すには必要だ！感情論で動くな！」\n" +
            "ももか「結果出してから吠えなさいよ、ヤマショウビン」\n" +
            "せい「吠えるのは君だろ！責任感が違う！」\n" +
            "ももか「責任は取る主義なの。逃げないから」",
        text: "二人とも落ち着いてください。", 
        kana: "ふたりともおちついてください。",
        romaji: "futari tomo ochitsuite kudasai",
        reaction_good:
            "ももか「……チッ。今回は引くわ」\n" +
            "せい「議論は後で続けよう」",
        reaction_bad:
            "ももか「先生、変換ミスってるわよ」\n" +
            "せい「指導する前に文章整えてください！」",
        images: ["momoka.png", "sei.png"]
    },
    { 
        id: "chat_tetsu_koto_lab",
        subtype: "chat",
        group: "1-1",
        sender: "てつ＆こと",
        start_msg:
            "てつ「ねえこと、これ混ぜたら色変わると思う？」\n" +
            "こと「変わる思うけど…匂いがもう危険やき」\n" +
            "てつ「大丈夫大丈夫！科学は挑戦だよ！」\n" +
            "こと「挑戦で済まん結果になりそうやけどな」\n" +
            "てつ「でもワクワクしない？」\n" +
            "こと「まぁ…それはちょっとする」",
        text: "安全確認をしてください。", 
        kana: "あんぜんかくにんをしてください。",
        romaji: "anzen kakunin wo shite kudasai",
        reaction_good:
            "てつ「あっ、ごめん！確認するね！」\n" +
            "こと「ちゃんと見るき」",
        reaction_bad:
            "てつ「先生、字抜けてますよ〜？」\n" +
            "こと「それじゃ注意の説得力ないき」",
        images: ["tetsu.png", "koto.png"]
    },
    { 
        id: "chat_towa_kosaku_skip",
        subtype: "chat",
        group: "1-1",
        sender: "とわ＆こさく",
        start_msg:
            "こさく「なぁとわ、今日の授業長ない？」\n" +
            "とわ「体感3時間。まだ10分」\n" +
            "こさく「それもう事件やん！」\n" +
            "とわ「購買行こ。パンが俺を呼んでる」\n" +
            "こさく「食欲は正義やな！」",
        text: "二人とも席について。", 
        kana: "ふたりともせきについて。",
        romaji: "futari tomo seki ni tsuite",
        reaction_good:
            "とわ「はーい、戻りまーす」\n" +
            "こさく「しゃあないなぁ」",
        reaction_bad:
            "とわ「先生、助詞迷子じゃん」\n" +
            "こさく「ツッコまれる前に直しとこ？」",
        images: ["towa.png", "kosaku.png"]
    },
    { 
        id: "chat_ai_observation",
        subtype: "chat",
        group: "1-1",
        sender: "あい＆ももか＆みみか",
        start_msg:
            "あい「ふふ…今日もサボり組、元気そうですねぇ」\n" +
            "ももか「元気すぎ。首輪つけたいレベル」\n" +
            "みみか「行動パターンが完全に固定化してるわ」\n" +
            "あい「とわくんは快楽優先、あかるくんは同調型…」\n" +
            "ももか「分析ごっこ楽しい？」\n" +
            "あい「観察ですよぉ。弱点探し♡」",
        text: "こそこそ話さないでください。", 
        kana: "こそこそはなさないでください。",
        romaji: "kososoko hanasanaide kudasai",
        reaction_good:
            "あい「あらあら…聞こえてました？」\n" +
            "みみか「静かにするわ」\n" +
            "ももか「チッ…」",
        reaction_bad:
            "あい「先生、言葉一個抜けてますよ？」\n" +
            "ももか「その注意、説得力ないわね」",
        images: ["ai.png", "momoka.png", "mimika.png"]
    },
    { 
        id: "chat_skip_vs_sei",
        subtype: "chat",
        group: "1-1",
        sender: "せい＆とわ＆あかる",
        start_msg:
            "せい「お前ら！また授業抜けただろ！」\n" +
            "とわ「いや〜風が俺を呼んでてさ」\n" +
            "あかる「屋上が最高の教室だったんすよ！」\n" +
            "せい「言い訳するな！集団行動の自覚を持て！」\n" +
            "とわ「チーズは個人行動派なんで」\n" +
            "あかる「ほら〜せいくん顔赤い！」",
        text: "落ち着いて指導してください。", 
        kana: "おちついてしどうしてください。",
        romaji: "ochitsuite shidou shite kudasai",
        reaction_good:
            "せい「……深呼吸する」\n" +
            "とわ「お、冷却成功？」\n" +
            "あかる「えらいえらい！」",
        reaction_bad:
            "とわ「先生、誤字ってますよ」\n" +
            "あかる「説教前に整えよ？」",
        images: ["sei.png", "towa.png", "akaru.png"]
    },
    { 
        id: "chat_halloween_hikaru",
        subtype: "chat",
        group: "1-1",
        sender: "ひかる＆ももか",
        start_msg:
            "ひかる「今日はハロウィンだべ？テンション上がんね？」\n" +
            "ももか「…その帽子、似合ってるわね」\n" +
            "ひかる「マジ？黒猫パワー復活かも！」\n" +
            "ももか「前は噛んで悪かったわ」\n" +
            "ひかる「気にしてねぇよ！穴も含めて思い出だし！」\n" +
            "ももか「……バカ」",
        text: "廊下で騒がないでください。", 
        kana: "ろうかでさわがないでください。",
        romaji: "rouka de sawaganaide kudasai",
        reaction_good:
            "ひかる「はーい、静かにするべ！」\n" +
            "ももか「…行くわよ」",
        reaction_bad:
            "ひかる「先生、変換おかしくね？」\n" +
            "ももか「集中切れてるわよ」",
        images: ["hikaru.png", "momoka.png"]
    },
    { 
        id: "chat_towa_ai_notice",
        subtype: "chat",
        group: "1-1",
        sender: "とわ＆あい",
        start_msg:
            "とわ「なぁ…視線感じね？」\n" +
            "あい「気のせいじゃないですかぁ？」\n" +
            "とわ「いや絶対あいちゃんだろ」\n" +
            "あい「観察される側の気分、どうです？」\n" +
            "とわ「うわ…ゾクっとした」",
        text: "私語を控えましょう。", 
        kana: "しごをひかえましょう。",
        romaji: "shigo wo hikaemashou",
        reaction_good:
            "とわ「はーい」\n" +
            "あい「従順ですねぇ」",
        reaction_bad:
            "あい「先生、助詞落ちてますよ？」\n" +
            "とわ「見られてんの先生じゃね？」",
        images: ["towa.png", "ai.png"]
    },
    { 
        id: "chat_momoka_incident",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆みみか",
        start_msg:
            "ももか「……ちょっと待って」\n" +
            "みみか「どうしたの？」\n" +
            "ももか「今、変な匂いしなかった？」\n" +
            "みみか「……」\n" +
            "ももか「ねぇ、したでしょ？」\n" +
            "みみか「あなたの後ろからよ」\n" +
            "ももか「……は？」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "みみか「話は後で」\n" +
            "ももか「……チッ」",
        reaction_bad:
            "ももか「誤字ってるわよ」\n" +
            "みみか「注意が雑ね」",
        images: ["momoka.png", "mimika.png"]
    },
    { 
        id: "chat_towa_careless",
        subtype: "chat",
        group: "1-1",
        sender: "とわ＆ひなか",
        start_msg:
            "とわ「今の空気、なんか重くね？」\n" +
            "ひなか「ちょ、言わんでいいけん！」\n" +
            "とわ「え？事実じゃん」\n" +
            "ひなか「命の危機感じるわ！」\n" +
            "とわ「チーズは正直者なんで」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "とわ「はーい」\n" +
            "ひなか「助かった…」",
        reaction_bad:
            "とわ「先生、誤字」\n" +
            "ひなか「今それどころじゃないけん」",
        images: ["towa.png", "hinaka.png"]
    },
    { 
        id: "chat_momoka_hikaru_daily",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆ひかる",
        start_msg:
            "ひかる「さっきの、ももかだべ？」\n" +
            "ももか「……何の話？」\n" +
            "ひかる「いや、別に？」\n" +
            "ももか「余計なこと言ったら噛むわよ」\n" +
            "ひかる「はいはい、番犬さん」",
        text: "会話をやめてください。", 
        kana: "かいわをやめてください。",
        romaji: "kaiwa wo yamete kudasai",
        reaction_good:
            "ひかる「了解〜」\n" +
            "ももか「……ふん」",
        reaction_bad:
            "ももか「指示文おかしいわよ」\n" +
            "ひかる「先生も焦ってね？」",
        images: ["momoka.png", "hikaru.png"]
    },
    { 
        id: "chat_1-1_setsuna_mimika_momoka_news",
        subtype: "chat",
        group: "1-1",
        sender: "せつな＆みみか＆ももか",
        start_msg:
            "せつな「ねぇねぇ〜、最近さぁ…『普段は強気だけど、特定の単語で挙動がおかしくなる存在』がおるらしかよ〜」\n" +
            "みみか「その表現、ほぼ名指しに近いけど」\n" +
            "ももか「は？ なにそれ。くだらな…」\n" +
            "せつな「しかもその単語が“家族関連”らしくて〜」\n" +
            "ももか「……。」\n" +
            "みみか「反応速度、0.3秒。分かりやすすぎ」\n" +
            "せつな「記事タイトルどうしよっかな〜。“優雅な獣、急に静止”とか」\n" +
            "ももか「……それ載せたら噛むから」",
        text: "取材は慎重にしなさい。",
        kana: "しゅざいはしんちょうにしなさい。",
        romaji: "shuzai wa shinchou ni shinasai",
        reaction_good:
            "せつな「はーい。遠回しに書くけん大丈夫たい」\n" +
            "みみか「遠回しが一番刺さるけどね」",
        reaction_bad:
            "せつな「先生、誤字あるよ〜？そのまま載せてよか？」\n" +
            "みみか「新聞部にtypoは致命的」",
        images: ["setsuna.png", "mimika.png", "momoka.png"]
    },
    { 
        id: "chat_1-1_momoka_hikaru_papa",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆ひかる",
        start_msg:
            "ひかる「なぁももか、今日さ…お前の――」\n" +
            "ももか「待て」\n" +
            "ひかる「え？」\n" +
            "ももか「その続き、言うな」\n" +
            "ひかる「いや、まだ何も言ってねぇけど…パ――」\n" +
            "ももか「っ！！！」\n" +
            "ひかる「うわ！？ なんで今だけ急に耳下がんの！？」\n" +
            "ももか「……別に」\n" +
            "ひかる「絶対動揺してんじゃん」",
        text: "落ち着いて話しなさい。",
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "ひかる「ほら深呼吸な。吸って〜」\n" +
            "ももか「……うるさい」",
        reaction_bad:
            "ひかる「先生も噛んでるぞ、それ」\n" +
            "ももか「……今のは先生のミス」",
        images: ["momoka.png", "hikaru.png"]
    },
    { 
        id: "chat_1-1_seina_setsuna_news",
        subtype: "chat",
        group: "1-1",
        sender: "せいな＆せつな",
        start_msg:
            "せいな「ちょっと、あの記事どういう意味？」\n" +
            "せつな「どの記事〜？」\n" +
            "せいな「“強気な存在が特定の呼称で機能停止”ってやつ」\n" +
            "せつな「あ〜、あれは一般論たい」\n" +
            "せいな「誰が信じるのよ」\n" +
            "せつな「でも事実は事実やけん」\n" +
            "せいな「……あの子、今朝もパパって聞いた瞬間固まってたし」\n" +
            "せつな「ほら〜」",
        text: "憶測で書かないように。",
        kana: "おくそくでかかないように。",
        romaji: "okusoku de kakanai you ni",
        reaction_good:
            "せつな「事実をやわらかく包んどるだけたい」\n" +
            "せいな「それが一番タチ悪いのよ」",
        reaction_bad:
            "せつな「先生、その漢字違っとる」\n" +
            "せいな「新聞部に突っ込まれるの草」",
        images: ["seina.png", "setsuna.png"]
    },
    { 
        id: "chat_1-1_ai_mimika_analysis",
        subtype: "chat",
        group: "1-1",
        sender: "あい＆みみか",
        start_msg:
            "あい「ふふ…面白いですねぇ。あれほど威圧的なのに」\n" +
            "みみか「“パパ”という音声刺激だけで戦闘力が落ちる」\n" +
            "あい「条件反射、可愛いです」\n" +
            "みみか「本人は認めないだろうけど」\n" +
            "あい「記事にしたら燃えますか？」\n" +
            "みみか「もうされてる」",
        text: "陰口は控えなさい。",
        kana: "かげぐちはひかえなさい。",
        romaji: "kageguchi wa hikae nasai",
        reaction_good:
            "あい「あらあら…これは観察です」\n" +
            "みみか「学術目的」",
        reaction_bad:
            "あい「先生、typo多いですねぇ？」\n" +
            "みみか「信頼度が下がる」",
        images: ["ai.png", "mimika.png"]
    },
    { 
        id: "chat_1-1_setsuna_tetsu_momoka_news",
        subtype: "chat",
        group: "1-1",
        sender: "せつな＆てつ＆ももか",
        start_msg:
            "せつな「今度の新聞さ〜、“最近よく吠える子ほど静かになる瞬間”って特集どうかなぁ」\n" +
            "てつ「えっなにそれ！動物特集？」\n" +
            "ももか「……なに書く気？」\n" +
            "せつな「別に〜？名前も出さんし」\n" +
            "てつ「でも実話ベースだよね？」\n" +
            "せつな「そらそうたい」\n" +
            "ももか「……余計なこと書いたら許さないから」\n" +
            "せつな「その“余計”がどこか、読んだ人に任せるだけたい」",
        text: "憶測で誤解を生まないように。",
        kana: "おくそくでごかいをうまないように。",
        romaji: "okusoku de gokai o umanai you ni",
        reaction_good:
            "せつな「大丈夫です。事実しか書かんけん」\n" +
            "てつ「それが一番強いんだよね〜」",
        reaction_bad:
            "せつな「先生、そこ誤字っとるよ？」\n" +
            "ももか「新聞部に突っ込まれるとかだっさ」",
        images: ["setsuna.png", "tetsu.png", "momoka.png"]
    },
    { 
        id: "chat_1-1_momoka_mimika_weakpoint",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆みみか",
        start_msg:
            "みみか「今日も姿勢が完璧」\n" +
            "ももか「当然」\n" +
            "みみか「パパに褒められた？」\n" +
            "ももか「……別に」\n" +
            "みみか「声、半音下がった」\n" +
            "ももか「気のせい」\n" +
            "みみか「瞳孔も広がってる」\n" +
            "ももか「……観察やめろ」",
        text: "話題を変えましょう。",
        kana: "わだいをかえましょう。",
        romaji: "wadai o kaemashou",
        reaction_good:
            "みみか「了解。これ以上は非効率」\n" +
            "ももか「……助かる」",
        reaction_bad:
            "みみか「先生、そこ入力ミス」\n" +
            "ももか「typoで止めに来るな」",
        images: ["momoka.png", "mimika.png"]
    },
    { 
        id: "chat_1-1_hikaru_momoka_papa",
        subtype: "chat",
        group: "1-1",
        sender: "ひかる＆ももか",
        start_msg:
            "ひかる「なぁももか、昨日さ……」\n" +
            "ももか「言い方による」\n" +
            "ひかる「え？」\n" +
            "ももか「その前置き、嫌な予感しかしない」\n" +
            "ひかる「いや普通に、パ――」\n" +
            "ももか「……っ」\n" +
            "ひかる「あ、ごめん！今のナシ！」\n" +
            "ももか「……もう遅い」",
        text: "落ち着いて続けなさい。",
        kana: "おちついてつづけなさい。",
        romaji: "ochitsuite tsudzuke nasai",
        reaction_good:
            "ひかる「深呼吸な、はい」\n" +
            "ももか「……一回だけだから」",
        reaction_bad:
            "ひかる「先生も言い間違えてる」\n" +
            "ももか「今日ミス多くない？」",
        images: ["hikaru.png", "momoka.png"]
    },
    {
        id: "chat_kaede_kosaku",
        subtype: "chat",
        group: "1-1",
        sender: "かえで＆こさく",
        start_msg:
            "かえで「は？鏡見た？今日も世界一かわいいんだけど」\n" +
            "こさく「出た出た〜自己評価インフレ姫やん。せやけど否定できひんのが悔しいわ」\n" +
            "かえで「でしょ？アンタ分かってるじゃん」\n" +
            "こさく「いやいや、せやからって調子乗りすぎやろ」\n" +
            "かえで「乗れる才能があるの。凡人と一緒にしないで」\n" +
            "こさく「うわぁ…その自信、少し分けてほしいわ」",
        text: "落ち着いて話しなさい。",
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "かえで「はーい？先生の前では一応ね」\n" +
            "こさく「一応て。まぁええわ、続きは後でな」",
        reaction_bad:
            "かえで「日本語ミスってるけど？」\n" +
            "こさく「先生、入力焦りすぎやで。深呼吸し？」",
        images: ["kaede.png", "kosaku.png"]
    },
    {
        id: "chat_momoka_mimika",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆みみか",
        start_msg:
            "ももか「……あいつら、また騒いでる」\n" +
            "みみか「効率が悪いね。集中力が散ってる」\n" +
            "ももか「群れは吠える生き物だから仕方ないでしょ」\n" +
            "みみか「もったんこは吠えないの？」\n" +
            "ももか「……必要な時だけ」\n" +
            "みみか「ふふ。じゃあ私は料理で黙らせる」",
        text: "仲良しですね。",
        kana: "なかよしですね。",
        romaji: "nakayoshi desu ne",
        reaction_good:
            "ももか「別に」\n" +
            "みみか「否定はしないよ」",
        reaction_bad:
            "ももか「先生、変換ミス多くない？」\n" +
            "みみか「落ち着いて入力しよ。焦ると精度落ちる」",
        images: ["momoka.png", "mimika.png"]
    },
    {
        id: "chat_hinaka_hikaru",
        subtype: "chat",
        group: "1-1",
        sender: "ひなか＆ひかる",
        start_msg:
            "ひなか「ねぇひかるくん！それ、昨日も同じ話しとったよ！」\n" +
            "ひかる「え、マジ？でもよ〜、この話好きなんだわ」\n" +
            "ひなか「ほんと自由人だねぇ！」\n" +
            "ひかる「ひなかも大概だっぺ」\n" +
            "ひなか「え〜？あたしは元気なだけだに！」",
        text: "静かにしましょう。",
        kana: "しずかにしましょう。",
        romaji: "shizuka ni shimashou",
        reaction_good:
            "ひかる「はいはい、分かりました〜」\n" +
            "ひなか「あとでまた話そ！」",
        reaction_bad:
            "ひなか「先生、入力噛んどるよ？」\n" +
            "ひかる「落ち着けって〜」",
        images: ["hinaka.png", "hikaru.png"]
    },
    {
        id: "chat_ai_tetsu",
        subtype: "chat",
        group: "1-1",
        sender: "あい＆てつ",
        start_msg:
            "あい「あらあら…今日も賑やかですね」\n" +
            "てつ「みんな元気でいいじゃん！」\n" +
            "あい「元気と無秩序は別物ですよ？」\n" +
            "てつ「うーん、でもそれも個性だよ！」\n" +
            "あい「……ふふ、甘いですね」",
        text: "何の話ですか？",
        kana: "なんのはなしですか？",
        romaji: "nan no hanashi desu ka",
        reaction_good:
            "あい「内緒です♡」\n" +
            "てつ「難しい話じゃないよ〜」",
        reaction_bad:
            "あい「誤字…可愛いですね」\n" +
            "てつ「先生も人間だね！」",
        images: ["ai.png", "tetsu.png"]
    },
    {
        id: "chat_kaede_momoka",
        subtype: "chat",
        group: "1-1",
        sender: "かえで＆ももか",
        start_msg:
            "かえで「ねぇ桃花。あたしと並んで立つの、緊張しない？」\n" +
            "ももか「は？なんで私が」\n" +
            "かえで「だって美の頂点が二つ並ぶわけじゃん？」\n" +
            "ももか「……自信過剰」\n" +
            "かえで「負け犬の遠吠え？」\n" +
            "ももか「吠えるのは勝つ時だけよ」",
        text: "落ち着いてください。",
        kana: "おちついてください。",
        romaji: "ochitsuite kudasai",
        reaction_good:
            "ももか「チッ……」\n" +
            "かえで「ま、先生の顔立てたげる」",
        reaction_bad:
            "かえで「先生、日本語迷子？」\n" +
            "ももか「誤字って威厳下げてるわよ」",
        images: ["kaede.png", "momoka.png"]
    },
    {
        id: "chat_hikaru_akaru",
        subtype: "chat",
        group: "1-1",
        sender: "ひかる＆あかる",
        start_msg:
            "あかる「ひかる〜！この帽子被ってみ？」\n" +
            "ひかる「え、派手すぎっぺ」\n" +
            "あかる「似合う似合う！ほら！」\n" +
            "ひかる「ちょ、勝手に被せんなって！」\n" +
            "あかる「いいじゃん！テンション上がるっしょ！」",
        text: "遊びすぎですよ。",
        kana: "あそびすぎですよ。",
        romaji: "asobisugi desu yo",
        reaction_good:
            "ひかる「はーい」\n" +
            "あかる「あとで続きな！」",
        reaction_bad:
            "あかる「先生、入力荒れてるぞー？」\n" +
            "ひかる「焦りすぎだっぺ」",
        images: ["hikaru.png", "akaru.png"]
    },
    {
        id: "chat_seina_komari",
        subtype: "chat",
        group: "1-1",
        sender: "せいな＆こまり",
        start_msg:
            "せいな「それ、自分で作ったの？」\n" +
            "こまり「うん。昨日の夜やった」\n" +
            "せいな「夜更かし禁止って言ったでしょ」\n" +
            "こまり「でも納得いかんかったし…」\n" +
            "せいな「もう…体調管理も作品のうちよ？」",
        text: "いい関係ですね。",
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "こまり「…うん」\n" +
            "せいな「でしょ？」",
        reaction_bad:
            "せいな「先生、誤字ってる」\n" +
            "こまり「直した方がいいよ」",
        images: ["seina.png", "komari.png"]
    },
    {
        id: "chat_kotarou_sei",
        subtype: "chat",
        group: "1-1",
        sender: "こたろう＆せい",
        start_msg:
            "せい「次の行事、俺がまとめる！」\n" +
            "こたろう「いいけど、全体の意見も聞こう」\n" +
            "せい「スピードも大事だ！」\n" +
            "こたろう「暴走するとついてこれない人が出る」\n" +
            "せい「……なるほど」",
        text: "建設的ですね。",
        kana: "けんせつてきですね。",
        romaji: "kensetsuteki desu ne",
        reaction_good:
            "せい「よし、役割分担だ！」\n" +
            "こたろう「うん、それでいこう」",
        reaction_bad:
            "こたろう「先生、変換ミス」\n" +
            "せい「落ち着いて打て！」",
        images: ["kotarou.png", "sei.png"]
    },
    {
        id: "chat_koto_kofuku",
        subtype: "chat",
        group: "1-1",
        sender: "こと＆こふく",
        start_msg:
            "こと「その写真、山か？」\n" +
            "こふく「ああ。今朝の光が良かった」\n" +
            "こと「構図、嫌いじゃない」\n" +
            "こふく「無駄がない」\n" +
            "こと「…静かでいいな」",
        text: "渋い会話ですね。",
        kana: "しぶいかいわですね。",
        romaji: "shibui kaiwa desu ne",
        reaction_good:
            "こと「まぁな」\n" +
            "こふく「問題ない」",
        reaction_bad:
            "こと「誤字しとる」\n" +
            "こふく「修正した方がいい」",
        images: ["koto.png", "kofuku.png"]
    },
    {
        id: "chat_kojiro_masaki",
        subtype: "chat",
        group: "1-1",
        sender: "こじろう＆まさき",
        start_msg:
            "こじろう「この曲、妹さん好きそう」\n" +
            "まさき「……ありがとう」\n" +
            "こじろう「無理しないでね」\n" +
            "まさき「君も、弾きすぎないように」",
        text: "優しいですね。",
        kana: "やさしいですね。",
        romaji: "yasashii desu ne",
        reaction_good:
            "まさき「……はい」\n" +
            "こじろう「ふふ」",
        reaction_bad:
            "こじろう「先生、誤字あります」\n" +
            "まさき「直した方がいいです」",
        images: ["kojiro.png", "masaki.png"]
    },
    {
        id: "chat_tetsu_kojiro",
        subtype: "chat",
        group: "1-1",
        sender: "てつ＆こじろう",
        start_msg:
            "てつ「ねぇねぇ！この前の曲、すっごく良かったよ！」\n" +
            "こじろう「ありがとう。みんなに届けばいいなって」\n" +
            "てつ「絶対届くよ！優しい音だもん」\n" +
            "こじろう「てつさんの言葉も、優しいです」",
        text: "いい雰囲気ですね。",
        kana: "いいふんいきですね。",
        romaji: "ii funiki desu ne",
        reaction_good:
            "てつ「えへへ〜！」\n" +
            "こじろう「ありがとうございます」",
        reaction_bad:
            "てつ「先生、変換ちがうよ？」\n" +
            "こじろう「修正した方が良さそうです」",
        images: ["tetsu.png", "kojiro.png"]
    },
    {
        id: "chat_seina_setsuna",
        subtype: "chat",
        group: "1-1",
        sender: "せいな＆せつな",
        start_msg:
            "せいな「また物なくしたの？」\n" +
            "せつな「うーん……たぶんカバンの中」\n" +
            "せいな「“たぶん”で済ませない！」\n" +
            "せつな「でもさぁ、探すと出てこんのよ」\n" +
            "せいな「もう！あとで一緒に整理するわよ！」",
        text: "面倒見がいいですね。",
        kana: "めんどうみがいいですね。",
        romaji: "mendoumi ga ii desu ne",
        reaction_good:
            "せいな「当然でしょ」\n" +
            "せつな「助かる〜」",
        reaction_bad:
            "せいな「先生、誤字」\n" +
            "せつな「落ち着こ？」",
        images: ["seina.png", "setsuna.png"]
    },
    {
        id: "chat_komari_koto",
        subtype: "chat",
        group: "1-1",
        sender: "こまり＆こと",
        start_msg:
            "こまり「これ、今作っとる途中なんよ」\n" +
            "こと「手、器用やな」\n" +
            "こまり「ほんと？」\n" +
            "こと「写真に残しときたいくらい」\n" +
            "こまり「え、ちょっと恥ずかしいんだけど」",
        text: "集中してますね。",
        kana: "しゅうちゅうしてますね。",
        romaji: "shuuchuu shitemasu ne",
        reaction_good:
            "こと「邪魔せん」\n" +
            "こまり「ありがと」",
        reaction_bad:
            "こと「先生、誤字や」\n" +
            "こまり「直した方がいいよ」",
        images: ["komari.png", "koto.png"]
    },
    {
        id: "chat_kotarou_kofuku",
        subtype: "chat",
        group: "1-1",
        sender: "こたろう＆こふく",
        start_msg:
            "こたろう「山の写真、すごいね」\n" +
            "こふく「守っているだけだ」\n" +
            "こたろう「その姿勢、尊敬するよ」\n" +
            "こふく「……悪くない」",
        text: "落ち着いた会話ですね。",
        kana: "おちついたかいわですね。",
        romaji: "ochitsuita kaiwa desu ne",
        reaction_good:
            "こたろう「ありがとうございます」\n" +
            "こふく「問題ない」",
        reaction_bad:
            "こふく「誤字だ」\n" +
            "こたろう「修正しましょう」",
        images: ["kotarou.png", "kofuku.png"]
    },
    { 
        id: "chat_kofuku_komari_mountain",
        subtype: "chat",
        group: "1-1",
        sender: "こふく＆こまり",
        start_msg:
            "こまり「これね、山で拾った木で作ったんだよ」\n" +
            "こふく「……無駄がない。形も理にかなってる」\n" +
            "こまり「えへへ、そうかな？」\n" +
            "こふく「長く使える。大事にしろ」\n" +
            "こまり「うん！こふくに褒められると嬉しい」",
        text: "いい雰囲気ですね。", 
        kana: "いいふんいきですね。",
        romaji: "ii funiki desu ne",
        reaction_good:
            "こふく「事実を言っただけだ」\n" +
            "こまり「でも嬉しいもんは嬉しいよ〜」",
        reaction_bad:
            "こふく「誤字だ。落ち着け」\n" +
            "こまり「先生、ゆっくりでいいよ？」",
        images: ["kofuku.png", "komari.png"]
    },
    { 
        id: "chat_tetsu_kotarou_support",
        subtype: "chat",
        group: "1-1",
        sender: "てつ＆こたろう",
        start_msg:
            "てつ「はいはい、道具足りてる？」\n" +
            "こたろう「うん、ありがとう。助かるよ」\n" +
            "てつ「協力大事だよね〜！」\n" +
            "こたろう「そうだね。みんなでやる方が早い」",
        text: "いいチームワークですね。", 
        kana: "いいちーむわーくですね。",
        romaji: "ii chi-mu wa-ku desu ne",
        reaction_good:
            "てつ「でしょ〜！」\n" +
            "こたろう「自然とそうなっただけだよ」",
        reaction_bad:
            "てつ「先生、タイプミスしてるよ〜？」\n" +
            "こたろう「一回深呼吸しようか」",
        images: ["tetsu.png", "kotarou.png"]
    },
    { 
        id: "chat_tetsu_koto_photo",
        subtype: "chat",
        group: "1-1",
        sender: "てつ＆こと",
        start_msg:
            "こと「その薬品、光の反射きれいだな」\n" +
            "てつ「え、写真撮るの？」\n" +
            "こと「撮る。今しかない」\n" +
            "てつ「じゃあ成功させなきゃね！」",
        text: "集中してください。", 
        kana: "しゅうちゅうしてください。",
        romaji: "shuuchuu shite kudasai",
        reaction_good:
            "こと「分かってる」\n" +
            "てつ「はーい！」",
        reaction_bad:
            "こと「そこ誤字だぞ」\n" +
            "てつ「先生、落ち着こ〜？」",
        images: ["tetsu.png", "koto.png"]
    },
    { 
        id: "chat_kaede_masaki_pride",
        subtype: "chat",
        group: "1-1",
        sender: "かえで＆まさき",
        start_msg:
            "かえで「はぁ〜、やっぱ私が一番綺麗じゃない？」\n" +
            "まさき「……否定はしないよ」\n" +
            "かえで「でしょ？」\n" +
            "まさき「でも内面も大事だと思う」\n" +
            "かえで「なにそれ、真面目すぎ」",
        text: "落ち着いて話しましょう。", 
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "かえで「まぁ、嫌いじゃないけど？」\n" +
            "まさき「それならよかった」",
        reaction_bad:
            "かえで「先生、誤字多くない？」\n" +
            "まさき「指摘は冷静にしよう」",
        images: ["kaede.png", "masaki.png"]
    },
    { 
        id: "chat_mai_ai_shadow",
        subtype: "chat",
        group: "1-1",
        sender: "まい＆あい",
        start_msg:
            "あい「ふふ、今日も静かですね」\n" +
            "まい「騒ぐ理由がないだけ」\n" +
            "あい「嘘、得意そうですものね？」\n" +
            "まい「騙されてくれるなら、いくらでも」",
        text: "仲良くしてください。", 
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "あい「あらあら、褒められました」\n" +
            "まい「どう受け取るかは自由」",
        reaction_bad:
            "あい「先生、そこ誤字ですよ？」\n" +
            "まい「わざとじゃないよね？」",
        images: ["mai.png", "ai.png"]
    },
    {
        id: "chat_kotarou_kojiro",
        subtype: "chat",
        group: "1-1",
        sender: "こたろう＆こじろう",
        start_msg:
            "こたろう「こじろうの曲さ、聴いてると前向きになれるんだよな」\n" +
            "こじろう「そ、そうかな……ありがとう。そう言ってもらえると嬉しい」\n" +
            "こたろう「誰かの背中押せる音って、すごい力だと思う」\n" +
            "こじろう「……君自身がもう、十分ヒーローだよ」",
        text: "いい関係ですね。",
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "こたろう「へへ、そう言われると照れるな」\n" +
            "こじろう「ええ、信頼してます」",
        reaction_bad:
            "こたろう「先生、文字抜けてるよ？」\n" +
            "こじろう「落ち着いて打ちましょう」",
        images: ["kotarou.png", "kojiro.png"]
    },
    {
        id: "chat_sei_koto",
        subtype: "chat",
        group: "1-1",
        sender: "せい＆こと",
        start_msg:
            "せい「よし！全体写真、気合入れていくぞ！」\n" +
            "こと「気合はええけど、構図は落ち着いて決めんと」\n" +
            "せい「スピードも大事だ！」\n" +
            "こと「ピントずれたら意味ないやろ」",
        text: "役割分担しましょう。",
        kana: "やくわりぶんたんしましょう。",
        romaji: "yakuwari buntan shimashou",
        reaction_good:
            "せい「なるほど！任せた！」\n" +
            "こと「ほいたら、ええ写真撮るき」",
        reaction_bad:
            "せい「指示が雑だぞ！」\n" +
            "こと「先生、タイプミス多いで」",
        images: ["sei.png", "koto.png"]
    },
    {
        id: "chat_masaki_towa",
        subtype: "chat",
        group: "1-1",
        sender: "まさき＆とわ",
        start_msg:
            "とわ「なーまさき、昼チーズ食っていい？」\n" +
            "まさき「……栄養、偏らない？」\n" +
            "とわ「気分が大事なんだって！」\n" +
            "まさき「……ほどほどにね」",
        text: "食生活も大切です。",
        kana: "しょくせいかつもたいせつです。",
        romaji: "shokuseikatsu mo taisetsu desu",
        reaction_good:
            "とわ「はーい、気をつけまーす」\n" +
            "まさき「ありがとう」",
        reaction_bad:
            "とわ「先生、誤字ってる！」\n" +
            "まさき「落ち着いて入力してください」",
        images: ["masaki.png", "towa.png"]
    },
    {
        id: "chat_momoka_mimika",
        subtype: "chat",
        group: "1-1",
        sender: "ももか＆みみか",
        start_msg:
            "ももか「今日の配置、気に入らないんだけど？」\n" +
            "みみか「効率は最適。文句は後で聞く」\n" +
            "ももか「……ふん」\n" +
            "みみか「でも、似合ってる」",
        text: "落ち着いてください。",
        kana: "おちついてください。",
        romaji: "ochitsuite kudasai",
        reaction_good:
            "ももか「別に褒められても嬉しくないし！」\n" +
            "みみか「はいはい」",
        reaction_bad:
            "ももか「先生、そこ噛む？」\n" +
            "みみか「入力ミスですね」",
        images: ["momoka.png", "mimika.png"]
    },
    {
        id: "chat_mai_ai",
        subtype: "chat",
        group: "1-1",
        sender: "まい＆あい",
        start_msg:
            "まい「……それ、本気で言ってる？」\n" +
            "あい「あらあら〜、どうでしょう？」\n" +
            "まい「嘘つく顔してる」\n" +
            "あい「騙されてくれるの、好きですよ？」",
        text: "空気が重いですね。",
        kana: "くうきがおもいですね。",
        romaji: "kuuki ga omoi desu ne",
        reaction_good:
            "まい「ふふ、面白い」\n" +
            "あい「でしょう？」",
        reaction_bad:
            "あい「先生、誤字です〜♡」\n" +
            "まい「直してから話そう」",
        images: ["mai.png", "ai.png"]
    },
    {
        id: "chat_kofuku_komari",
        subtype: "chat",
        group: "1-1",
        sender: "こふく＆こまり",
        start_msg:
            "こまり「これ、山で拾った木で作ったんだよ」\n" +
            "こふく「……無駄がない。良い仕事だ」\n" +
            "こまり「えへへ、褒められた！」",
        text: "いい作品ですね。",
        kana: "いいさくひんですね。",
        romaji: "ii sakuhin desu ne",
        reaction_good:
            "こふく「守る価値がある」\n" +
            "こまり「大事にする！」",
        reaction_bad:
            "こふく「入力が乱れている」\n" +
            "こまり「先生、焦りすぎだよ〜」",
        images: ["kofuku.png", "komari.png"]
    },
    // --- 1-2 ---
    {
        id: "chat_machie_kohaku_rules",
        subtype: "chat",
        group: "1-2",
        sender: "まちえ＆こはく",
        start_msg:
            "まちえ「校則ってさ、守るのが目的じゃないと思うんだよね」\n" +
            "こはく「……守らない理由にはならない」\n" +
            "まちえ「でも形だけ守って中身が伴わないのは違くない？」\n" +
            "こはく「秩序は形から入るものだ」\n" +
            "まちえ「ふふ、相変わらず堅いなあ。嫌いじゃないけど」\n" +
            "こはく「……馴れ合う気はない」",
        text: "落ち着いて話を続けましょう。",
        kana: "おちついてはなしをつづけましょう。",
        romaji: "ochitsuite hanashi o tsuzukemashou",
        reaction_good:
            "まちえ「ですね。感情論になりすぎました」\n" +
            "こはく「冷静な介入だ。感謝する」",
        reaction_bad:
            "こはく「誤字が多い。教師なら尚更だ」\n" +
            "まちえ「そこ噛むの、ちょっと恥ずかしいですよ？」",
        images: ["machie.png", "kohaku.png"]
    },
    {
        id: "chat_miru_bunta_noise",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆ぶんた",
        start_msg:
            "みる「ねえねえ聞いて！今日の給食のコロッケさ〜！」\n" +
            "ぶんた「はいはい、また感動しとるんやろ」\n" +
            "みる「ちがうの！衣がね、サクッて！」\n" +
            "ぶんた「……平和でええこっちゃ」\n" +
            "みる「でしょ！？人生そうあるべき！」",
        text: "少し声のボリュームを下げましょう。",
        kana: "すこしこえのぼりゅーむをさげましょう。",
        romaji: "sukoshi koe no boryuumu o sagemashou",
        reaction_good:
            "みる「あっ、ごめんなさーい！」\n" +
            "ぶんた「先生、助かるわ」",
        reaction_bad:
            "ぶんた「今の変換、どないした？」\n" +
            "みる「え、先生もテンパるんだ！」",
        images: ["miru.png", "bunta.png"]
    },
    {
        id: "chat_mari_yuu_soft",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ゆう",
        start_msg:
            "まり「……その作画、すごく丁寧やね」\n" +
            "ゆう「え、ほんと？ありがとう…」\n" +
            "まり「線が、やさしか」\n" +
            "ゆう「まりちゃんの色使いも好きだよ」",
        text: "いい雰囲気ですね。",
        kana: "いいふんいきですね。",
        romaji: "ii funiki desu ne",
        reaction_good:
            "まり「……先生、静かでよか」\n" +
            "ゆう「うん、ありがとうございます」",
        reaction_bad:
            "ゆう「えっと……入力、ちょっと違うかも」\n" +
            "まり「焦らんでよかよ」",
        images: ["mari.png", "yuu.png"]
    },
    {
        id: "chat_suou_yuji_logic",
        subtype: "chat",
        group: "1-2",
        sender: "すおう＆ゆうじ",
        start_msg:
            "すおう「それって“正しい”って言うより、君が気持ちいいだけじゃない？」\n" +
            "ゆうじ「違う。間違いは正さないといけない」\n" +
            "すおう「へぇ。誰が“間違い”を決めるの？」\n" +
            "ゆうじ「ルールだ。みんなのための基準だ」\n" +
            "すおう「基準ねぇ……神様でもないのに大変だ」\n" +
            "ゆうじ「……その態度が気に入らない」",
        text: "感情的にならず、話し合いましょう。",
        kana: "かんじょうてきにならず、はなしあいましょう。",
        romaji: "kanjouteki ni narazu, hanashiai mashou",
        reaction_good:
            "ゆうじ「……失礼しました。続けます」\n" +
            "すおう「ふふ、先生は中立なんだ」",
        reaction_bad:
            "すおう「その誤字、説得力落ちるよ？」\n" +
            "ゆうじ「正確に入力してください」",
        images: ["suou.png", "yuji.png"]
    },
    {
        id: "chat_ayu_mibana_close",
        subtype: "chat",
        group: "1-2",
        sender: "あゆ＆みばな",
        start_msg:
            "あゆ「ねえ、今日の体育さ〜、走るのしんどくなかった？」\n" +
            "みばな「……別に」\n" +
            "あゆ「絶対無理してたでしょ。顔見たらわかるって！」\n" +
            "みばな「……あゆがうるさいだけ」\n" +
            "あゆ「え〜？心配してあげてるのに〜！」\n" +
            "みばな「……嫌じゃない」",
        text: "少し静かに話しましょう。",
        kana: "すこししずかにはなしましょう。",
        romaji: "sukoshi shizuka ni hanashimashou",
        reaction_good:
            "あゆ「あ、はーい！ごめんなさーい！」\n" +
            "みばな「……先生、ありがとう」",
        reaction_bad:
            "みばな「……入力、間違ってる」\n" +
            "あゆ「先生、落ち着こ？」",
        images: ["ayu.png", "mibana.png"]
    },
    {
        id: "chat_hebiki_kyou_tension",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆きょう",
        start_msg:
            "へびき「まあまあ、そんな怒らんでもいいさ〜」\n" +
            "きょう「……あの言い方は、舐めてる」\n" +
            "へびき「冗談さ〜。深く考えすぎよ」\n" +
            "きょう「冗談で済むなら、苦労しない」\n" +
            "へびき「はぁ……暑いと余計ピリピリするねぇ」",
        text: "トラブルにならないようにしましょう。",
        kana: "とらぶるにならないようにしましょう。",
        romaji: "toraburu ni naranai you ni shimashou",
        reaction_good:
            "へびき「先生、助かるさ〜」\n" +
            "きょう「……わかった」",
        reaction_bad:
            "きょう「今の入力、危険だ」\n" +
            "へびき「先生、焦りすぎさ〜」",
        images: ["hebiki.png", "kyo.png"]
    },
    {
        id: "chat_mirai_yutasuke_balance",
        subtype: "chat",
        group: "1-2",
        sender: "みらい＆ゆたすけ",
        start_msg:
            "みらい「失敗してもさ、次に活かせばよくない？」\n" +
            "ゆたすけ「それも一理あるけんど…無理は禁物や」\n" +
            "みらい「大丈夫！転んでも立てるタイプだから！」\n" +
            "ゆたすけ「はは、頼もしいのう」",
        text: "落ち着いた話し合いですね。",
        kana: "おちついたはなしあいですね。",
        romaji: "ochitsuita hanashiai desu ne",
        reaction_good:
            "みらい「ありがとうございます！」\n" +
            "ゆたすけ「先生もええ目しちゅう」",
        reaction_bad:
            "ゆたすけ「その誤字、ちくと惜しいのう」\n" +
            "みらい「先生、惜しい！」",
        images: ["mirai.png", "yutasuke.png"]
    },
    {
        id: "chat_kanon_miru_noise",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆みる",
        start_msg:
            "かのん「なぁなぁ！オレのモノマネ聞いて〜！」\n" +
            "みる「えっなに！？絶対おもしろいやつじゃん！」\n" +
            "かのん「じゃあいくよ〜！先生の歩き方！」\n" +
            "みる「ちょ、今の似てた！」",
        text: "教室では静かにしましょう。",
        kana: "きょうしつではしずかにしましょう。",
        romaji: "kyoushitsu dewa shizuka ni shimashou",
        reaction_good:
            "みる「あっ、ごめんなさい！」\n" +
            "かのん「はいはーい！」",
        reaction_bad:
            "かのん「先生、今の入力ズレとるよ？」\n" +
            "みる「集中しよ集中！」",
        images: ["kanon.png", "miru.png"]
    },
    {
        id: "chat_kome_fumiko_soft",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆ふみこ",
        start_msg:
            "こめ「……今日も眠いんだけど」\n" +
            "ふみこ「無理しなくていいですよ」\n" +
            "こめ「ふみこちゃん優しすぎる…」\n" +
            "ふみこ「そう言ってもらえると嬉しいです」",
        text: "静かでいい雰囲気ですね。",
        kana: "しずかでいいふんいきですね。",
        romaji: "shizuka de ii funiki desu ne",
        reaction_good:
            "ふみこ「ありがとうございます」\n" +
            "こめ「……先生もやさしい」",
        reaction_bad:
            "こめ「それ、打ち間違いだと思う」\n" +
            "ふみこ「落ち着いて入力しましょう」",
        images: ["kome.png", "fumiko.png"]
    },
    {
        id: "chat_era_shirube_gap",
        subtype: "chat",
        group: "1-2",
        sender: "えるあ＆しるべ",
        start_msg:
            "えるあ「ちゃんと聞いてる？」\n" +
            "しるべ「……聞いてる」\n" +
            "えるあ「顔が無なんだけど」\n" +
            "しるべ「……いつもこう」",
        text: "会話を続けましょう。",
        kana: "かいわをつづけましょう。",
        romaji: "kaiwa o tsuzukemashou",
        reaction_good:
            "えるあ「まぁ、いっか」\n" +
            "しるべ「……ありがとう」",
        reaction_bad:
            "えるあ「先生、そこ間違えてる」\n" +
            "しるべ「……惜しい」",
        images: ["erua.png", "shirube.png"]
    },
    {
        id: "chat_megumu_bunta_common",
        subtype: "chat",
        group: "1-2",
        sender: "めぐむ＆ぶんた",
        start_msg:
            "めぐむ「それは流石に非常識でしょ」\n" +
            "ぶんた「まぁまぁ、状況次第や」\n" +
            "めぐむ「言い訳が上手いね」\n" +
            "ぶんた「褒め言葉として受け取るわ」",
        text: "冷静に話してください。",
        kana: "れいせいにはなしてください。",
        romaji: "reisei ni hanashite kudasai",
        reaction_good:
            "めぐむ「はい」\n" +
            "ぶんた「先生、助かる」",
        reaction_bad:
            "ぶんた「先生、誤字っとるで」\n" +
            "めぐむ「落ち着きましょう」",
        images: ["megumu.png", "bunta.png"]
    },
    {
    id: "chat_mari_mirai",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆みらい",
    start_msg:
        "みらい「まり、ここ線ズレてるよ。直す？」\n" +
        "まり「……ううん、大丈夫。自分でやる…」\n" +
        "みらい「そっか。でもさ、頼ってもいいんだよ？」\n" +
        "まり「……人に任せるの、ちょっと怖くて」\n" +
        "みらい「失敗しても一緒に直せばいいじゃん。ゲームと同じ！」\n" +
        "まり「……みらいちゃんは、強いね」\n" +
        "みらい「強くないよ。怖いまま突っ込んでるだけ！」",
    text: "様子を見守る。",
    kana: "ようすをみまもる。",
    romaji: "yousu o mimamoru",
    reaction_good:
        "みらい「ほらね、まりもちゃんと前進してる」\n" +
        "まり「……ありがとう。少し、安心した」",
    images:
        "みらい「先生、今の誤字はさすがに見逃せない！」\n" +
        "まり「……焦ってるの、伝わる」",
    images: ["mari.png", "mirai.png"]
    },
    {
    id: "chat_kome_shirube",
    subtype: "chat",
    group: "1-2",
    sender: "こめ＆しるべ",
    start_msg:
        "こめ「しるべぇ…今日も眠いんだけど……」\n" +
        "しるべ「……」\n" +
        "こめ「朝さ、アラーム5回鳴ったんだて。全部無視した」\n" +
        "しるべ「……逆にすごい」\n" +
        "こめ「だろ？才能だと思うんだけど」\n" +
        "しるべ「……才能の使い道、間違ってる」",
    text: "二人の空気を壊さない。",
    kana: "ふたりのくうきをこわさない。",
    romaji: "futari no kuuki o kowasanai",
    reaction_good:
        "こめ「しるべ、否定しねの優しいねぇ」\n" +
        "しるべ「……してる」",
    images:
        "しるべ「……先生、文字抜けてる」\n" +
        "こめ「ありゃ？寝ぼけたんじゃね？」",
    images: ["kome.png", "shirube.png"]
    },
    {
    id: "chat_bunta_fumiko",
    subtype: "chat",
    group: "1-2",
    sender: "ぶんた＆ふみこ",
    start_msg:
        "ぶんた「ふみこ、またオカリナ？」\n" +
        "ふみこ「うん。音、落ち着くでしょ」\n" +
        "ぶんた「せやなぁ。新聞部の部室より平和や」\n" +
        "ふみこ「いつも賑やかだもんね」\n" +
        "ぶんた「騒がしいんも悪ないけどな」\n" +
        "ふみこ「……ぶんたくん、ちゃんと休んでる？」",
    text: "会話に入る。",
    kana: "かいわにはいる。",
    romaji: "kaiwa ni hairu",
    reaction_good:
        "ぶんた「心配されるとこそばいわ」\n" +
        "ふみこ「ふふ、無理しすぎないでね」",
    images:
        "ぶんた「先生、今の変換ミスはさすがにツッコむで」\n" +
        "ふみこ「でも、意味は伝わってますよ」",
    images: ["bunta.png", "fumiko.png"]
    },
    {
    id: "chat_miru_kanon",
    subtype: "chat",
    group: "1-2",
    sender: "みる＆かのん",
    start_msg:
        "みる「ねえねえ！今日の給食デザート何！？」\n" +
        "かのん「え、知らんが？プリンな気しとる！」\n" +
        "みる「根拠なさすぎでしょ！」\n" +
        "かのん「当たったらオレもう一人欲しなるわ〜！」",
    text: "止める。",
    kana: "とめる。",
    romaji: "tomeru",
    reaction_good:
        "みる「えへへ、テンション上がりすぎた！」\n" +
        "かのん「抑えられんもんはしゃあない！」",
    images:
        "かのん「先生、今の入力ミスは芸術点低いちゃ」\n" +
        "みる「逆にレアだよね！」",
    images: ["miru.png", "kanon.png"]
    },
    {
    id: "chat_hebiki_yuu",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆ゆう",
    start_msg:
        "へびき「今日も暑いさー……」\n" +
        "ゆう「ネッククーラー、手放せないね」\n" +
        "へびき「これ無いと溶ける」\n" +
        "ゆう「ふふ……」",
    text: "静かに見守る。",
    kana: "しずかにみまもる。",
    romaji: "shizuka ni mimamoru",
    reaction_good:
        "へびき「落ち着く空気だな」\n" +
        "ゆう「うん……好き」",
    images:
        "へびき「先生、今の誤字で空気割れたさ」\n" +
        "ゆう「でも、すぐ直せば大丈夫だよ」",
    images: ["hebiki.png", "yuu.png"]
    },
    {
    id: "chat_yuji_kohaku",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆こはく",
    start_msg:
        "ゆうじ「今の廊下走行、完全に校則違反だ」\n" +
        "こはく「……把握している。だが今は注意のみだ」\n" +
        "ゆうじ「なぜだ。違反は即是正するべきだろう」\n" +
        "こはく「全体秩序を保つための判断だ」\n" +
        "ゆうじ「甘いな」\n" +
        "こはく「硬すぎる」",
    text: "二人をなだめる。",
    kana: "ふたりをなだめる。",
    romaji: "futari o nadameru",
    reaction_good:
        "ゆうじ「……今回は見逃す」\n" +
        "こはく「妥協ではなく調整だ」",
    images:
        "こはく「先生、誤字がある」\n" +
        "ゆうじ「正確性は大事だぞ」",
    images: ["yuji.png", "kohaku.png"]
    },
    {
    id: "chat_yutasuke_hebiki",
    subtype: "chat",
    group: "1-2",
    sender: "ゆたすけ＆へびき",
    start_msg:
        "へびき「今日も暑いさー……」\n" +
        "ゆたすけ「ほんまやねぇ。無理せんとこう」\n" +
        "へびき「このネッククーラー命綱」\n" +
        "ゆたすけ「分かる気ぃする」\n" +
        "へびき「……静かで落ち着くな」",
    text: "そのままにしておく。",
    kana: "そのままにしておく。",
    romaji: "sono mama ni shite oku",
    reaction_good:
        "ゆたすけ「えい空気やね」\n" +
        "へびき「平和が一番さ」",
    images:
        "へびき「先生、今の文字変だぞ」\n" +
        "ゆたすけ「慌てんでもええき」",
    images: ["yutasuke.png", "hebiki.png"]
    },
    {
    id: "chat_megumu_era",
    subtype: "chat",
    group: "1-2",
    sender: "めぐむ＆えるあ",
    start_msg:
        "めぐむ「また机に足乗せてるやついたわ」\n" +
        "えるあ「注意した？」\n" +
        "めぐむ「したけど聞かん」\n" +
        "えるあ「じゃあ後で私が言う」\n" +
        "めぐむ「頼もしいわ」",
    text: "話を聞く。",
    kana: "はなしをきく。",
    romaji: "hanashi o kiku",
    reaction_good:
        "えるあ「まぁ、なんとかなる」\n" +
        "めぐむ「そういうの助かる」",
    images:
        "えるあ「先生、誤字ってる」\n" +
        "めぐむ「落ち着きなさい」",
    images: ["megumu.png", "erua.png"]
    },
    {
    id: "chat_suou_ayu",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆あゆ",
    start_msg:
        "あゆ「ねぇすおうくん、私さ…」\n" +
        "すおう「はいはい、悩み相談？」\n" +
        "あゆ「軽っ！」\n" +
        "すおう「でも聞くよ。ちゃんと」\n" +
        "あゆ「……ありがと」",
    text: "会話を促す。",
    kana: "かいわをうながす。",
    romaji: "kaiwa o unagasu",
    reaction_good:
        "すおう「で、どうしたの」\n" +
        "あゆ「えへへ、話すね！」",
    images:
        "すおう「先生、今の誤入力は演技失敗」\n" +
        "あゆ「ドンマイ！」",
    images: ["suou.png", "ayu.png"]
    },
    {
    id: "chat_mibana_bunta",
    subtype: "chat",
    group: "1-2",
    sender: "みばな＆ぶんた",
    start_msg:
        "ぶんた「新聞部、取材手伝わん？」\n" +
        "みばな「……面倒」\n" +
        "ぶんた「即答すぎやろ」\n" +
        "みばな「でも条件次第」\n" +
        "ぶんた「ほらな」",
    text: "様子を見る。",
    kana: "ようすをみる。",
    romaji: "yousu o miru",
    reaction_good:
        "みばな「無駄は省く」\n" +
        "ぶんた「合理的やな」",
    images:
        "ぶんた「先生、今のタイプミス見逃さんで」\n" +
        "みばな「雑」",
    images: ["mibana.png", "bunta.png"]
    },
    {
    id: "chat_mari_machie",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆まちえ",
    start_msg:
        "まちえ「まりさん、その原画……とても繊細ですね」\n" +
        "まり「……あ、ありがとう。ちょっと手、震えたけど」\n" +
        "まちえ「それも含めて、感情が伝わります」\n" +
        "まり「……そう言われると、救われる」\n" +
        "まちえ「表現は、心の航海ですから」\n" +
        "まり「……ちょっと、クサい」",
    text: "静かに褒める。",
    kana: "しずかにほめる。",
    romaji: "shizuka ni homeru",
    reaction_good:
        "まちえ「ふふ、でも本心です」\n" +
        "まり「……嫌いじゃない」",
    images:
        "まり「先生、文字落ちてる」\n" +
        "まちえ「焦りは禁物ですよ」",
    images: ["mari.png", "machie.png"]
    },
    {
    id: "chat_hebiki_miru",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆みる",
    start_msg:
        "みる「へびきくん、その紙袋なに！？」\n" +
        "へびき「直射日光カットさー……」\n" +
        "みる「発想が自由すぎる！」\n" +
        "へびき「暑さに勝つ工夫だぞ」",
    text: "止めない。",
    kana: "とめない。",
    romaji: "tomenai",
    reaction_good:
        "みる「でもちょっと可愛い！」\n" +
        "へびき「褒められても嬉しくないさー」",
    images:
        "へびき「先生、今の変換おかしいさ」\n" +
        "みる「レアミスだね！」",
    images: ["hebiki.png", "miru.png"]
    },
    {
    id: "chat_kome_yutasuke",
    subtype: "chat",
    group: "1-2",
    sender: "こめ＆ゆたすけ",
    start_msg:
        "こめ「ゆたすけぇ……眠い……」\n" +
        "ゆたすけ「また夜更かししたが？」\n" +
        "こめ「うん……お米炊く動画見てた」\n" +
        "ゆたすけ「それは仕方ないねぇ」",
    text: "注意する。",
    kana: "ちゅういする。",
    romaji: "chuui suru",
    reaction_good:
        "こめ「怒られんかった……」\n" +
        "ゆたすけ「ほどほどにしちょき」",
    images:
        "ゆたすけ「先生、入力間違うちゅう」\n" +
        "こめ「ねむねむだねぇ」",
    images: ["kome.png", "yutasuke.png"]
    },
    {
    id: "chat_yuji_era",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆えるあ",
    start_msg:
        "ゆうじ「今の行為、明確にルール違反だ」\n" +
        "えるあ「まぁまぁ。段階ってもんがある」\n" +
        "ゆうじ「妥協は不正を生む」\n" +
        "えるあ「正論だけじゃ回らんのよ」",
    text: "間に入る。",
    kana: "あいだにはいる。",
    romaji: "aida ni hairu",
    reaction_good:
        "ゆうじ「……検討する」\n" +
        "えるあ「それでいい」",
    images:
        "えるあ「先生、今の誤字ひどい」\n" +
        "ゆうじ「正確に入力してくれ」",
    images: ["yuji.png", "erua.png"]
    },
    {
    id: "chat_bunta_fumiko_2",
    subtype: "chat",
    group: "1-2",
    sender: "ぶんた＆ふみこ",
    start_msg:
        "ぶんた「今日の新聞、どう思う？」\n" +
        "ふみこ「読んでて、安心した」\n" +
        "ぶんた「そらよかった」\n" +
        "ふみこ「人柄が出てるよ」",
    text: "見守る。",
    kana: "みまもる。",
    romaji: "mimamoru",
    reaction_good:
        "ぶんた「照れるわ」\n" +
        "ふみこ「ふふ」",
    images:
        "ぶんた「先生、今のタイプミス多いで」\n" +
        "ふみこ「落ち着いてくださいね」",
    images: ["bunta.png", "fumiko.png"]
    },
    {
        id: "chat_mari_suou_distance",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆すおう",
        start_msg:
            "まり「……人、信用するの苦手で」\n" +
            "すおう「無理にする必要、ある？」\n" +
            "まり「……ない、かも」\n" +
            "すおう「それでいいと思うよ」",
        text: "いい会話ですね。",
        kana: "いいかいわですね。",
        romaji: "ii kaiwa desu ne",
        reaction_good:
            "まり「……先生、ありがとう」\n" +
            "すおう「ふふ」",
        reaction_bad:
            "すおう「先生、そこ誤字」\n" +
            "まり「だいじょぶ？」",
        images: ["mari.png", "suou.png"]
    },
    {
    id: "chat_mari_mirai",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆みらい",
    start_msg:
        "みらい「まり、ここ線ズレてるよ。直す？」\n" +
        "まり「……ううん、大丈夫。自分でやる…」\n" +
        "みらい「そっか。でもさ、頼ってもいいんだよ？」\n" +
        "まり「……人に任せるの、ちょっと怖くて」\n" +
        "みらい「失敗しても一緒に直せばいいじゃん。ゲームと同じ！」\n" +
        "まり「……みらいちゃんは、強いね」\n" +
        "みらい「強くないよ。怖いまま突っ込んでるだけ！」",
    text: "様子を見守る。",
    kana: "ようすをみまもる。",
    romaji: "yousu o mimamoru",
    reaction_good:
        "みらい「ほらね、まりもちゃんと前進してる」\n" +
        "まり「……ありがとう。少し、安心した」",
    images:
        "みらい「先生、今の誤字はさすがに見逃せない！」\n" +
        "まり「……焦ってるの、伝わる」",
    images: ["mari.png", "mirai.png"]
    },
    {
    id: "chat_kome_shirube",
    subtype: "chat",
    group: "1-2",
    sender: "こめ＆しるべ",
    start_msg:
        "こめ「しるべぇ…今日も眠いんだけど……」\n" +
        "しるべ「……」\n" +
        "こめ「朝さ、アラーム5回鳴ったんだて。全部無視した」\n" +
        "しるべ「……逆にすごい」\n" +
        "こめ「だろ？才能だと思うんだけど」\n" +
        "しるべ「……才能の使い道、間違ってる」",
    text: "二人の空気を壊さない。",
    kana: "ふたりのくうきをこわさない。",
    romaji: "futari no kuuki o kowasanai",
    reaction_good:
        "こめ「しるべ、否定しねの優しいねぇ」\n" +
        "しるべ「……してる」",
    images:
        "しるべ「……先生、文字抜けてる」\n" +
        "こめ「ありゃ？寝ぼけたんじゃね？」",
    images: ["kome.png", "shirube.png"]
    },
    {
    id: "chat_bunta_fumiko",
    subtype: "chat",
    group: "1-2",
    sender: "ぶんた＆ふみこ",
    start_msg:
        "ぶんた「ふみこ、またオカリナ？」\n" +
        "ふみこ「うん。音、落ち着くでしょ」\n" +
        "ぶんた「せやなぁ。新聞部の部室より平和や」\n" +
        "ふみこ「いつも賑やかだもんね」\n" +
        "ぶんた「騒がしいんも悪ないけどな」\n" +
        "ふみこ「……ぶんたくん、ちゃんと休んでる？」",
    text: "会話に入る。",
    kana: "かいわにはいる。",
    romaji: "kaiwa ni hairu",
    reaction_good:
        "ぶんた「心配されるとこそばいわ」\n" +
        "ふみこ「ふふ、無理しすぎないでね」",
    images:
        "ぶんた「先生、今の変換ミスはさすがにツッコむで」\n" +
        "ふみこ「でも、意味は伝わってますよ」",
    images: ["bunta.png", "fumiko.png"]
    },
    {
    id: "chat_miru_kanon",
    subtype: "chat",
    group: "1-2",
    sender: "みる＆かのん",
    start_msg:
        "みる「ねえねえ！今日の給食デザート何！？」\n" +
        "かのん「え、知らんが？プリンな気しとる！」\n" +
        "みる「根拠なさすぎでしょ！」\n" +
        "かのん「当たったらオレもう一人欲しなるわ〜！」",
    text: "止める。",
    kana: "とめる。",
    romaji: "tomeru",
    reaction_good:
        "みる「えへへ、テンション上がりすぎた！」\n" +
        "かのん「抑えられんもんはしゃあない！」",
    images:
        "かのん「先生、今の入力ミスは芸術点低いちゃ」\n" +
        "みる「逆にレアだよね！」",
    images: ["miru.png", "kanon.png"]
    },
    {
    id: "chat_hebiki_yuu",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆ゆう",
    start_msg:
        "へびき「今日も暑いさー……」\n" +
        "ゆう「ネッククーラー、手放せないね」\n" +
        "へびき「これ無いと溶ける」\n" +
        "ゆう「ふふ……」",
    text: "静かに見守る。",
    kana: "しずかにみまもる。",
    romaji: "shizuka ni mimamoru",
    reaction_good:
        "へびき「落ち着く空気だな」\n" +
        "ゆう「うん……好き」",
    images:
        "へびき「先生、今の誤字で空気割れたさ」\n" +
        "ゆう「でも、すぐ直せば大丈夫だよ」",
    images: ["hebiki.png", "yuu.png"]
    },
    {
    id: "chat_yuji_kohaku",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆こはく",
    start_msg:
        "ゆうじ「今の廊下走行、完全に校則違反だ」\n" +
        "こはく「……把握している。だが今は注意のみだ」\n" +
        "ゆうじ「なぜだ。違反は即是正するべきだろう」\n" +
        "こはく「全体秩序を保つための判断だ」\n" +
        "ゆうじ「甘いな」\n" +
        "こはく「硬すぎる」",
    text: "二人をなだめる。",
    kana: "ふたりをなだめる。",
    romaji: "futari o nadameru",
    reaction_good:
        "ゆうじ「……今回は見逃す」\n" +
        "こはく「妥協ではなく調整だ」",
    images:
        "こはく「先生、誤字がある」\n" +
        "ゆうじ「正確性は大事だぞ」",
    images: ["yuji.png", "kohaku.png"]
    },
    {
    id: "chat_yutasuke_hebiki",
    subtype: "chat",
    group: "1-2",
    sender: "ゆたすけ＆へびき",
    start_msg:
        "へびき「今日も暑いさー……」\n" +
        "ゆたすけ「ほんまやねぇ。無理せんとこう」\n" +
        "へびき「このネッククーラー命綱」\n" +
        "ゆたすけ「分かる気ぃする」\n" +
        "へびき「……静かで落ち着くな」",
    text: "そのままにしておく。",
    kana: "そのままにしておく。",
    romaji: "sono mama ni shite oku",
    reaction_good:
        "ゆたすけ「えい空気やね」\n" +
        "へびき「平和が一番さ」",
    images:
        "へびき「先生、今の文字変だぞ」\n" +
        "ゆたすけ「慌てんでもええき」",
    images: ["yutasuke.png", "hebiki.png"]
    },
    {
    id: "chat_megumu_era",
    subtype: "chat",
    group: "1-2",
    sender: "めぐむ＆えるあ",
    start_msg:
        "めぐむ「また机に足乗せてるやついたわ」\n" +
        "えるあ「注意した？」\n" +
        "めぐむ「したけど聞かん」\n" +
        "えるあ「じゃあ後で私が言う」\n" +
        "めぐむ「頼もしいわ」",
    text: "話を聞く。",
    kana: "はなしをきく。",
    romaji: "hanashi o kiku",
    reaction_good:
        "えるあ「まぁ、なんとかなる」\n" +
        "めぐむ「そういうの助かる」",
    images:
        "えるあ「先生、誤字ってる」\n" +
        "めぐむ「落ち着きなさい」",
    images: ["megumu.png", "erua.png"]
    },
    {
    id: "chat_suou_ayu",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆あゆ",
    start_msg:
        "あゆ「ねぇすおうくん、私さ…」\n" +
        "すおう「はいはい、悩み相談？」\n" +
        "あゆ「軽っ！」\n" +
        "すおう「でも聞くよ。ちゃんと」\n" +
        "あゆ「……ありがと」",
    text: "会話を促す。",
    kana: "かいわをうながす。",
    romaji: "kaiwa o unagasu",
    reaction_good:
        "すおう「で、どうしたの」\n" +
        "あゆ「えへへ、話すね！」",
    images:
        "すおう「先生、今の誤入力は演技失敗」\n" +
        "あゆ「ドンマイ！」",
    images: ["suou.png", "ayu.png"]
    },
    {
    id: "chat_mibana_bunta",
    subtype: "chat",
    group: "1-2",
    sender: "みばな＆ぶんた",
    start_msg:
        "ぶんた「新聞部、取材手伝わん？」\n" +
        "みばな「……面倒」\n" +
        "ぶんた「即答すぎやろ」\n" +
        "みばな「でも条件次第」\n" +
        "ぶんた「ほらな」",
    text: "様子を見る。",
    kana: "ようすをみる。",
    romaji: "yousu o miru",
    reaction_good:
        "みばな「無駄は省く」\n" +
        "ぶんた「合理的やな」",
    images:
        "ぶんた「先生、今のタイプミス見逃さんで」\n" +
        "みばな「雑」",
    images: ["mibana.png", "bunta.png"]
    },
    {
    id: "chat_mari_machie",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆まちえ",
    start_msg:
        "まちえ「まりさん、その原画……とても繊細ですね」\n" +
        "まり「……あ、ありがとう。ちょっと手、震えたけど」\n" +
        "まちえ「それも含めて、感情が伝わります」\n" +
        "まり「……そう言われると、救われる」\n" +
        "まちえ「表現は、心の航海ですから」\n" +
        "まり「……ちょっと、クサい」",
    text: "静かに褒める。",
    kana: "しずかにほめる。",
    romaji: "shizuka ni homeru",
    reaction_good:
        "まちえ「ふふ、でも本心です」\n" +
        "まり「……嫌いじゃない」",
    images:
        "まり「先生、文字落ちてる」\n" +
        "まちえ「焦りは禁物ですよ」",
    images: ["mari.png", "machie.png"]
    },
    {
    id: "chat_hebiki_miru",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆みる",
    start_msg:
        "みる「へびきくん、その紙袋なに！？」\n" +
        "へびき「直射日光カットさー……」\n" +
        "みる「発想が自由すぎる！」\n" +
        "へびき「暑さに勝つ工夫だぞ」",
    text: "止めない。",
    kana: "とめない。",
    romaji: "tomenai",
    reaction_good:
        "みる「でもちょっと可愛い！」\n" +
        "へびき「褒められても嬉しくないさー」",
    images:
        "へびき「先生、今の変換おかしいさ」\n" +
        "みる「レアミスだね！」",
    images: ["hebiki.png", "miru.png"]
    },
    {
    id: "chat_kome_yutasuke",
    subtype: "chat",
    group: "1-2",
    sender: "こめ＆ゆたすけ",
    start_msg:
        "こめ「ゆたすけぇ……眠い……」\n" +
        "ゆたすけ「また夜更かししたが？」\n" +
        "こめ「うん……お米炊く動画見てた」\n" +
        "ゆたすけ「それは仕方ないねぇ」",
    text: "注意する。",
    kana: "ちゅういする。",
    romaji: "chuui suru",
    reaction_good:
        "こめ「怒られんかった……」\n" +
        "ゆたすけ「ほどほどにしちょき」",
    images:
        "ゆたすけ「先生、入力間違うちゅう」\n" +
        "こめ「ねむねむだねぇ」",
    images: ["kome.png", "yutasuke.png"]
    },
    {
    id: "chat_yuji_era",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆えるあ",
    start_msg:
        "ゆうじ「今の行為、明確にルール違反だ」\n" +
        "えるあ「まぁまぁ。段階ってもんがある」\n" +
        "ゆうじ「妥協は不正を生む」\n" +
        "えるあ「正論だけじゃ回らんのよ」",
    text: "間に入る。",
    kana: "あいだにはいる。",
    romaji: "aida ni hairu",
    reaction_good:
        "ゆうじ「……検討する」\n" +
        "えるあ「それでいい」",
    images:
        "えるあ「先生、今の誤字ひどい」\n" +
        "ゆうじ「正確に入力してくれ」",
    images: ["yuji.png", "erua.png"]
    },
    {
    id: "chat_suou_ayu_mibana",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆あゆ＆みばな",
    start_msg:
        "あゆ「ねぇねぇ、私ってうるさい？」\n" +
        "すおう「今さら？」\n" +
        "みばな「……自覚なかったの？」\n" +
        "あゆ「ひどっ！？」\n" +
        "すおう「でも場は明るくなる」\n" +
        "みばな「……それは事実」",
    text: "放っておく。",
    kana: "ほうっておく。",
    romaji: "houte oku",
    reaction_good:
        "あゆ「えへへ！じゃあいっか！」\n" +
        "すおう「単純」\n" +
        "みばな「羨ましい」",
    images:
        "すおう「先生、今の入力ミスはいただけない」\n" +
        "あゆ「ドンマイ！」\n" +
        "みばな「雑」",
    images: ["suou.png", "ayu.png", "mibana.png"]
    },
    {
    id: "chat_bunta_fumiko_2",
    subtype: "chat",
    group: "1-2",
    sender: "ぶんた＆ふみこ",
    start_msg:
        "ぶんた「今日の新聞、どう思う？」\n" +
        "ふみこ「読んでて、安心しました」\n" +
        "ぶんた「そらよかった」\n" +
        "ふみこ「人柄が出てます」",
    text: "見守る。",
    kana: "みまもる。",
    romaji: "mimamoru",
    reaction_good:
        "ぶんた「照れるわ」\n" +
        "ふみこ「ふふ」",
    images:
        "ぶんた「先生、今のタイプミス多いで」\n" +
        "ふみこ「落ち着いてくださいね」",
    images: ["bunta.png", "fumiko.png"]
    },
    {
    id: "chat_kyo_dual_trigger",
    subtype: "chat",
    group: "1-2",
    sender: "きょう＆こはく",
    start_msg:
        "こはく「廊下で走るな。校則第17条違反だ」\n" +
        "きょう「……あ、ご、ごめん」\n" +
        "こはく「謝罪で済むと思うな」\n" +
        "きょう「……」\n" +
        "きょう「……あ？」\n" +
        "きょう「今の言い方、誰に向けてだ？」\n" +
        "こはく「……何だ、その目は」\n" +
        "きょう「ルール盾にして他人潰す趣味、直した方がいいぞ」",
    text: "落ち着いて話そう。",
    kana: "おちついてはなそう。",
    romaji: "ochitsuite hanasou",
    reaction_good:
        "きょう「……チッ」\n" +
        "きょう「……悪い、戻る」\n" +
        "こはく「……人格切り替えか」",
    images:
        "きょう「“おちついて”じゃなくて“おちついて”だ」\n" +
        "きょう「先生、変なとこで噛むな」",
    images: ["kyo.png", "kohaku.png"]
    },
    {
    id: "chat_machie_mirai_ideology",
    subtype: "chat",
    group: "1-2",
    sender: "まちえ＆みらい",
    start_msg:
        "まちえ「結果を出す人が、場を導くべきだと思うの」\n" +
        "みらい「でもさ、それって“できる人”しか残らないよね？」\n" +
        "まちえ「全員救う思想は、結局誰も救えないわ」\n" +
        "みらい「私は、転んだ人が立つ瞬間を見るのが好き」\n" +
        "まちえ「……甘い」\n" +
        "みらい「強さの定義が違うだけだよ」",
    text: "いい議論ですね。",
    kana: "いいぎろんですね。",
    romaji: "ii giron desu ne",
    reaction_good:
        "まちえ「……意見の衝突は、進歩の兆しね」\n" +
        "みらい「うん、嫌いじゃない」",
    images:
        "みらい「“ぎろん”じゃなくて“ぎろん”ね」\n" +
        "まちえ「先生、思想以前に日本語を整えましょう」",
    images: ["machie.png", "mirai.png"]
    },
    {
    id: "chat_mari_yuu_empathy",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆ゆう",
    start_msg:
        "まり「……ゆうくん、無理して笑ってない？」\n" +
        "ゆう「えっ……そ、そんなこと……」\n" +
        "まり「声、少し震えてる」\n" +
        "ゆう「……まりちゃんこそ」\n" +
        "まり「……」\n" +
        "ゆう「黙る時、同じ顔してる」",
    text: "大丈夫ですか？",
    kana: "だいじょうぶですか？",
    romaji: "daijoubu desu ka",
    reaction_good:
        "まり「……大丈夫じゃない時も、あるね」\n" +
        "ゆう「……うん」",
    images:
        "ゆう「“だいじょうぶ”の“い”抜けてます」\n" +
        "まり「先生、今それ言うとこじゃなかよ……」",
    images: ["mari.png", "yuu.png"]
    },
    {
    id: "chat_hebiki_miru_vibe",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆みる",
    start_msg:
        "みる「ねえねえ！今日テンション低くない？」\n" +
        "へびき「平和だよ〜……ただ暑いだけ〜」\n" +
        "みる「ネッククーラー増設したら？」\n" +
        "へびき「首、何本あっても足りんさ〜」",
    text: "楽しそうですね。",
    kana: "たのしそうですね。",
    romaji: "tanoshisou desu ne",
    reaction_good:
        "みる「でしょー！」\n" +
        "へびき「平和が一番〜」",
    images:
        "へびき「“たのしそう”じゃなくて“たのしそう”だよ〜」\n" +
        "みる「先生、噛みすぎ！」",
    images: ["hebiki.png", "miru.png"]
    },
    {
    id: "chat_suo_bunta_commentary",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆ぶんた",
    start_msg:
        "ぶんた「このクラス、毎日事件起きすぎやろ」\n" +
        "すおう「面白いだろ。感情の博覧会だ」\n" +
        "ぶんた「他人事すぎ」\n" +
        "すおう「だからこそ冷静に見える」",
    text: "何の話ですか？",
    kana: "なんのはなしですか？",
    romaji: "nan no hanashi desu ka",
    reaction_good:
        "ぶんた「クラスの話や」\n" +
        "すおう「先生も展示物の一部ですよ」",
    images:
        "すおう「“はなし”じゃなくて“はなし”ですね」\n" +
        "ぶんた「先生も観察対象入りやな」",
    images: ["suo.png", "bunta.png"]
    },
    {
    id: "chat_ayu_mibana_cuckoo",
    subtype: "chat",
    group: "1-2",
    sender: "あゆ＆みばな",
    start_msg:
        "あゆ「ねぇみばな、私たちさ……ちょっと似てるよね」\n" +
        "みばな「……今さら？」\n" +
        "あゆ「育ち方とか、立場とか」\n" +
        "みばな「でも考え方は真逆」\n" +
        "あゆ「それがいいんじゃん！」\n" +
        "みばな「……まぁ、否定はしない」",
    text: "距離感を保ちなさい。",
    kana: "きょりかんをたもちなさい。",
    romaji: "kyorikan o tamochinasai",
    reaction_good:
        "あゆ「ちょうどいい距離ってやつ？」\n" +
        "みばな「近すぎると、息苦しい」",
    images:
        "みばな「先生、誤字多い」\n" +
        "あゆ「今の入力、雑じゃない？」",
    images: ["ayu.png", "mibana.png"]
    },
    {
    id: "chat_yuji_suou_justice",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆すおう",
    start_msg:
        "ゆうじ「間違いは正されるべきだ」\n" +
        "すおう「それ、誰基準？」\n" +
        "ゆうじ「社会の基準だ」\n" +
        "すおう「社会って便利な言葉だな」\n" +
        "ゆうじ「逃げるな」\n" +
        "すおう「逃げてないよ。考えてるだけ」",
    text: "落ち着いて話し合いなさい。",
    kana: "おちついてはなしあいなさい。",
    romaji: "ochitsuite hanashiai nasai",
    reaction_good:
        "ゆうじ「……議論は続ける」\n" +
        "すおう「やっと楽しくなってきた」",
    images:
        "すおう「先生、入力ミス多くない？」\n" +
        "ゆうじ「正確性を欠いている」",
    images: ["yuji.png", "suou.png"]
    },
    {
    id: "chat_kanon_interrupt",
    subtype: "chat",
    group: "1-2",
    sender: "かのん＆みる＆ぶんた",
    start_msg:
        "かのん「ねぇねぇ！今めっちゃ重たい空気じゃなかった！？」\n" +
        "みる「感じた！空気がギュッて！」\n" +
        "ぶんた「お前ら察しろや……」\n" +
        "かのん「じゃあモノマネいくね！」\n" +
        "ぶんた「行くな」",
    text: "静かにしなさい。",
    kana: "しずかにしなさい。",
    romaji: "shizuka ni shinasai",
    reaction_good:
        "みる「でもちょっと和んだよね！」\n" +
        "ぶんた「……まぁな」",
    images:
        "かのん「先生、今のタイプ変だよ！」\n" +
        "みる「そこ間違える！？」",
    images: ["kanon.png", "miru.png", "bunta.png"]
    },
    {
    id: "chat_mari_yuu_empathy",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆ゆう",
    start_msg:
        "まり「……その気持ち、わかるばい」\n" +
        "ゆう「え、ほんと？」\n" +
        "まり「同じことで、眠れん日あった」\n" +
        "ゆう「それ聞いて、余計に胸が……」\n" +
        "まり「……ごめん」\n" +
        "ゆう「ううん、ありがとう」",
    text: "話題を変えなさい。",
    kana: "わだいをかえなさい。",
    romaji: "wadai o kae nasai",
    reaction_good:
        "まり「……外、行く？」\n" +
        "ゆう「うん……少しだけ」",
    images:
        "ゆう「先生、そこ誤字です……」\n" +
        "まり「静かに打ってほしい」",
    images: ["mari.png", "yuu.png"]
    },
    {
    id: "chat_hebiki_kome_relax",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆こめ",
    start_msg:
        "こめ「もう動けんて……」\n" +
        "へびき「わかるさー。今日は暑い」\n" +
        "こめ「ネッククーラー貸して」\n" +
        "へびき「はいさい、どうぞ」",
    text: "授業に集中しなさい。",
    kana: "じゅぎょうにしゅうちゅうしなさい。",
    romaji: "jugyou ni shuuchuu shinasai",
    reaction_good:
        "こめ「あと5分……」\n" +
        "へびき「無理せんでいいさー」",
    images:
        "へびき「先生、変換違うさー」\n" +
        "こめ「そこミスっとるよ」",
    images: ["hebiki.png", "kome.png"]
    },
    {
    id: "chat_kyou_dual_persona",
    subtype: "chat",
    group: "1-2",
    sender: "きょう＆ゆうじ",
    start_msg:
        "きょう「……別に、俺は何もしとらん」\n" +
        "ゆうじ「ならその態度は何だ」\n" +
        "きょう「……」\n" +
        "きょう「――うるさい。正しさで殴れば全部解決する思っとるだろ」\n" +
        "ゆうじ「口の利き方を改めろ」\n" +
        "きょう「改める価値がある相手かどうかは俺が決める」",
    text: "落ち着きなさい。",
    kana: "おちつきなさい。",
    romaji: "ochitsuki nasai",
    reaction_good:
        "きょう「……チッ」\n" +
        "ゆうじ「感情で動くな」",
    images:
        "きょう「先生、今の誤字はダサい」\n" +
        "ゆうじ「入力精度を上げてください」",
    images: ["kyo.png", "yuji.png"]
    },
    {
    id: "chat_kohaku_vs_class",
    subtype: "chat",
    group: "1-2",
    sender: "こはく＆みる＆かのん",
    start_msg:
        "こはく「廊下で走るな」\n" +
        "みる「え〜！？今の走りに入る！？」\n" +
        "かのん「セーフだと思うな〜！」\n" +
        "こはく「アウトだ」\n" +
        "かのん「厳し〜！」",
    text: "規律を守りなさい。",
    kana: "きりつをまもりなさい。",
    romaji: "kiritsu o mamorinasai",
    reaction_good:
        "こはく「理解したなら良い」\n" +
        "みる「はいは〜い」",
    images:
        "こはく「先生、注意文の誤字は風紀違反だ」\n" +
        "かのん「そこ間違える！？」",
    images: ["kohaku.png", "miru.png", "kanon.png"]
    },
    {
    id: "chat_machie_mirai_ideology",
    subtype: "chat",
    group: "1-2",
    sender: "まちえ＆みらい",
    start_msg:
        "まちえ「成果を出すことは、信頼に直結します」\n" +
        "みらい「でも結果だけが全てじゃないでしょ」\n" +
        "まちえ「努力が評価されない世界は不健全です」\n" +
        "みらい「失敗しても立ち上がれる環境の方が大事」\n" +
        "まちえ「……理想論ですね」\n" +
        "みらい「現実論だよ」",
    text: "冷静に議論しなさい。",
    kana: "れいせいにぎろんしなさい。",
    romaji: "reisei ni giron shinasai",
    reaction_good:
        "まちえ「……意見として受け取ります」\n" +
        "みらい「ありがと」",
    images:
        "みらい「先生、誤字って説得力下がるよ」\n" +
        "まちえ「そこは正確にお願いします」",
    images: ["machie.png", "mirai.png"]
    },
    {
    id: "chat_shirube_observer",
    subtype: "chat",
    group: "1-2",
    sender: "しるべ＆えるあ",
    start_msg:
        "えるあ「さっきの流れ、どう思う？」\n" +
        "しるべ「……別に」\n" +
        "えるあ「ほんとに？」\n" +
        "しるべ「全員、自分の正義で動いてるだけ」\n" +
        "えるあ「よく見てるじゃん」",
    text: "意見を言ってもいいですよ。",
    kana: "いけんをいってもいいですよ。",
    romaji: "iken o itte mo ii desu yo",
    reaction_good:
        "しるべ「……まぁ」\n" +
        "えるあ「その一言が貴重」",
    images:
        "しるべ「先生、そこ誤字」\n" +
        "えるあ「雑だな」",
    images: ["shirube.png", "erua.png"]
    },
    {
    id: "chat_ayu_mibana_t5",
    subtype: "chat",
    group: "1-2",
    sender: "あゆ＆みばな",
    start_msg:
        "あゆ「私たちさ、同じ鳥なのに全然違うよね」\n" +
        "みばな「育ちも考え方も違う」\n" +
        "あゆ「でも一緒にいるの楽」\n" +
        "みばな「……それは事実」",
    text: "仲良くしなさい。",
    kana: "なかよくしなさい。",
    romaji: "nakayoku shinasai",
    reaction_good:
        "あゆ「へへ」\n" +
        "みばな「……別に嫌じゃない」",
    images:
        "みばな「先生、誤字」\n" +
        "あゆ「今の入力ちょっと適当！」",
    images: ["ayu.png", "mibana.png"]
    },
    {
    id: "chat_hebiki_shirube",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆しるべ",
    start_msg:
        "へびき「今日も暑いさぁ……溶けるど……」\n" +
        "しるべ「……それ、年中言ってる」\n" +
        "へびき「しるべ冷たいさぁ〜」\n" +
        "しるべ「事実」",
    text: "仲良くしなさい。",
    kana: "なかよくしなさい。",
    romaji: "nakayoku shinasai",
    reaction_good:
        "へびき「まぁ喧嘩してるわけじゃないさぁ」\n" +
        "しるべ「……普通」",
    images:
        "へびき「先生、誤字あるさぁ」\n" +
        "しるべ「……ちゃんと見て」",
    images: ["hebiki.png", "shirube.png"]
    },
    {
    id: "chat_yutasuke_break",
    subtype: "chat",
    group: "1-2",
    sender: "ゆたすけ＆ふみこ",
    start_msg:
        "ゆたすけ「……みんな、すごいなぁ」\n" +
        "ふみこ「どうしたの？」\n" +
        "ゆたすけ「俺だけ、なんも出来てない気がして」\n" +
        "ふみこ「比べなくていいんだよ」\n" +
        "ゆたすけ「でも……褒められても、信じきれんがよ」",
    text: "自分もちゃんと見なさい。",
    kana: "じぶんもちゃんとみなさい。",
    romaji: "jibun mo chanto minasai",
    reaction_good:
        "ゆたすけ「……はい」\n" +
        "ふみこ「ゆっくりでいいからね」",
    images:
        "ゆたすけ「先生、言葉抜けちゅう」\n" +
        "ふみこ「落ち着いて打ち直そ？」",
    images: ["yutasuke.png", "fumiko.png"]
    },
    {
    id: "chat_machie_mirai",
    subtype: "chat",
    group: "1-2",
    sender: "まちえ＆みらい",
    start_msg:
        "まちえ「本日の議題についてですが──」\n" +
        "みらい「真面目だねぇ」\n" +
        "まちえ「……まぁ、やるならやりきらなかんで？」\n" +
        "みらい「出た！名古屋弁！」\n" +
        "まちえ「ちょ、聞こえとった？」",
    text: "方言も個性ですよ。",
    kana: "ほうげんもこせいですよ。",
    romaji: "hougen mo kosei desu yo",
    reaction_good:
        "まちえ「……そう言われると、悪くないですね」\n" +
        "みらい「でしょ〜！」",
    images:
        "まちえ「先生、助詞おかしいです」\n" +
        "みらい「煽られてるよ〜？」",
    images: ["machie.png", "mirai.png"]
    },
    {
    id: "chat_kyou_switch",
    subtype: "chat",
    group: "1-2",
    sender: "きょう＆すおう",
    start_msg:
        "すおう「きょう、無理して平和主義やってない？」\n" +
        "きょう「……別に」\n" +
        "すおう「その顔、来るね」\n" +
        "きょう「……静かにしてくれんか」\n" +
        "すおう「はいはい、今は刺激禁止っと」",
    text: "落ち着いてください。",
    kana: "おちついてください。",
    romaji: "ochitsuite kudasai",
    reaction_good:
        "きょう「……分かっとる」\n" +
        "すおう「戻った戻った」",
    images:
        "きょう「誤字だ」\n" +
        "すおう「今それ指摘する余裕あるの草」",
    images: ["kyo.png", "suou.png"]
    },
    {
    id: "chat_mari_yuu",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆ゆう",
    start_msg:
        "まり「……ここ、静かでよかね」\n" +
        "ゆう「うん……落ち着く」\n" +
        "まり「人、多かと疲れる」\n" +
        "ゆう「わかる……ぼくも」",
    text: "静かに過ごしてください。",
    kana: "しずかにすごしてください。",
    romaji: "shizuka ni sugoshite kudasai",
    reaction_good:
        "まり「……はい」\n" +
        "ゆう「ありがとうございます」",
    images:
        "まり「先生、字ぬけとる」\n" +
        "ゆう「そこ直したほうが……」",
    images: ["mari.png", "yuu.png"]
    },
    {
    id: "chat_miru_kanon",
    subtype: "chat",
    group: "1-2",
    sender: "みる＆かのん",
    start_msg:
        "みる「ねぇねぇ！今日の雲さ、ハートじゃない！？」\n" +
        "かのん「ほんとや！もう一羽いたら一緒に見たいわ〜」\n" +
        "みる「分裂すな！w」",
    text: "騒がないでください。",
    kana: "さわがないでください。",
    romaji: "sawaganaide kudasai",
    reaction_good:
        "みる「はーい！」\n" +
        "かのん「気をつけるちゃ！」",
    images:
        "みる「先生、誤字ってる！」\n" +
        "かのん「そこ突っ込むんw」",
    images: ["miru.png", "kanon.png"]
    },
    {
    id: "chat_kome_bunta",
    subtype: "chat",
    group: "1-2",
    sender: "こめ＆ぶんた",
    start_msg:
        "こめ「今日もだるいんだけど……」\n" +
        "ぶんた「毎日言うとるやん」\n" +
        "こめ「お米食べたい……」\n" +
        "ぶんた「授業中やぞ」",
    text: "授業に集中してください。",
    kana: "じゅぎょうにしゅうちゅうしてください。",
    romaji: "jugyou ni shuuchuu shite kudasai",
    reaction_good:
        "こめ「はぁーい……」\n" +
        "ぶんた「まぁ後でな」",
    images:
        "ぶんた「先生、漢字ちゃうで」\n" +
        "こめ「そこ間違えるんだ……」",
    images: ["kome.png", "bunta.png"]
    },
    {
    id: "chat_yuji_kohaku",
    subtype: "chat",
    group: "1-2",
    sender: "ゆうじ＆こはく",
    start_msg:
        "ゆうじ「その行動、規則違反だ」\n" +
        "こはく「……風紀を乱すな」\n" +
        "ゆうじ「正す必要がある」\n" +
        "こはく「当然だ」",
    text: "落ち着いて話してください。",
    kana: "おちついてはなしてください。",
    romaji: "ochitsuite hanashite kudasai",
    reaction_good:
        "ゆうじ「……了解しました」\n" +
        "こはく「静粛を保つ」",
    images:
        "こはく「先生、文法が崩れてます」\n" +
        "ゆうじ「正確にお願いします」",
    images: ["yuji.png", "kohaku.png"]
    },
    {
    id: "chat_suou_erua",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆えるあ",
    start_msg:
        "すおう「えるあって真面目だよね〜」\n" +
        "えるあ「皮肉ならやめときな」\n" +
        "すおう「褒めてる褒めてる」\n" +
        "えるあ「信用ならん」",
    text: "仲良くしてください。",
    kana: "なかよくしてください。",
    romaji: "nakayoku shite kudasai",
    reaction_good:
        "すおう「はいはい」\n" +
        "えるあ「……まぁいい」",
    images:
        "えるあ「先生、そこ変」\n" +
        "すおう「即ツッコミ草」",
    images: ["suou.png", "erua.png"]
    },
    {
    id: "chat_kyo_mibana",
    subtype: "chat",
    group: "1-2",
    sender: "きょう＆みばな",
    start_msg:
        "みばな「……さっきの、危なかったな」\n" +
        "きょう「……ああ」\n" +
        "みばな「切り替え早すぎ」\n" +
        "きょう「必要だった」",
    text: "穏やかに過ごしましょう。",
    kana: "おだやかにすごしましょう。",
    romaji: "odayaka ni sugoshimashou",
    reaction_good:
        "きょう「……分かっとる」\n" +
        "みばな「ならいい」",
    images:
        "みばな「誤字」\n" +
        "きょう「今それか」",
    images: ["kyo.png", "mibana.png"]
    },
    {
    id: "chat_mari_mirai",
    subtype: "chat",
    group: "1-2",
    sender: "まり＆みらい",
    start_msg:
        "まり「みらいちゃんって、いつも前向きよね」\n" +
        "みらい「そ？失敗しても楽しいからかな」\n" +
        "まり「……強かね」\n" +
        "みらい「強くなりたいだけだよ」",
    text: "静かに話しましょう。",
    kana: "しずかにはなしましょう。",
    romaji: "shizuka ni hanashimashou",
    reaction_good:
        "みらい「はーい」\n" +
        "まり「……ごめんなさい」",
    images:
        "みらい「先生、送り仮名違うよ」\n" +
        "まり「そこ、間違っとる」",
    images: ["mari.png", "mirai.png"]
    },
    {
    id: "chat_hebiki_kyo",
    subtype: "chat",
    group: "1-2",
    sender: "へびき＆きょう",
    start_msg:
        "へびき「きょう、さっき雰囲気変わっとったさ」\n" +
        "きょう「……気のせいだ」\n" +
        "へびき「無理せんでいいよ」\n" +
        "きょう「必要なら、やるだけだ」",
    text: "落ち着いて行動してください。",
    kana: "おちついてこうどうしてください。",
    romaji: "ochitsuite koudou shite kudasai",
    reaction_good:
        "へびき「はいさー」\n" +
        "きょう「……了解」",
    images:
        "きょう「誤字」\n" +
        "へびき「先生、急ぎすぎさ〜」",
    images: ["hebiki.png", "kyo.png"]
    },
    {
    id: "chat_kanon_suou",
    subtype: "chat",
    group: "1-2",
    sender: "かのん＆すおう",
    start_msg:
        "かのん「すおうってさ、何考えとるかわからんちゃ」\n" +
        "すおう「考えてない時もあるよ」\n" +
        "かのん「絶対ウソ！」\n" +
        "すおう「さぁ、どうだろ」",
    text: "私語は控えなさい。",
    kana: "しごはひかえなさい。",
    romaji: "shigo wa hikaenasai",
    reaction_good:
        "かのん「はーい」\n" +
        "すおう「了解」",
    images:
        "すおう「先生、漢字逆」\n" +
        "かのん「そこツッコむんw」",
    images: ["kanon.png", "suou.png"]
    },
    {
    id: "chat_yutasuke_fumiko",
    subtype: "chat",
    group: "1-2",
    sender: "ゆたすけ＆ふみこ",
    start_msg:
        "ゆたすけ「みんな、すごい人ばっかりやき……」\n" +
        "ふみこ「比べなくていいんだよ」\n" +
        "ゆたすけ「それが、難しいがです」",
    text: "前を向いてください。",
    kana: "まえをむいてください。",
    romaji: "mae o muite kudasai",
    reaction_good:
        "ゆたすけ「はい……」\n" +
        "ふみこ「ありがとうございます」",
    images:
        "ふみこ「先生、文字が抜けてます」\n" +
        "ゆたすけ「そこ、違うです」",
    images: ["yutasuke.png", "fumiko.png"]
    },
    {
    id: "chat_miru_yuji",
    subtype: "chat",
    group: "1-2",
    sender: "みる＆ゆうじ",
    start_msg:
        "みる「え、ダメなのそれ？」\n" +
        "ゆうじ「規則違反だ」\n" +
        "みる「細かっ！」\n" +
        "ゆうじ「守るべきだ」",
    text: "冷静に話し合いなさい。",
    kana: "れいせいにはなしあいなさい。",
    romaji: "reisei ni hanashiai nasai",
    reaction_good:
        "みる「はーい……」\n" +
        "ゆうじ「理解しました」",
    images:
        "ゆうじ「先生、助詞がおかしい」\n" +
        "みる「即ツッコミw」",
    images: ["miru.png", "yuji.png"]
    },
    {
    id: "chat_machie_erua",
    subtype: "chat",
    group: "1-2",
    sender: "まちえ＆えるあ",
    start_msg:
        "まちえ「えるあさん、それ違いますよ」\n" +
        "えるあ「そう？」\n" +
        "まちえ「もう、ちゃんとせなかんがね」\n" +
        "えるあ「出た、名古屋」",
    text: "落ち着いてください。",
    kana: "おちついてください。",
    romaji: "ochitsuite kudasai",
    reaction_good:
        "まちえ「失礼しました」\n" +
        "えるあ「はいはい」",
    images:
        "えるあ「先生、誤字」\n" +
        "まちえ「そこ直してください」",
    images: ["machie.png", "erua.png"]
    },
    {
    id: "chat_suou_kome",
    subtype: "chat",
    group: "1-2",
    sender: "すおう＆こめ",
    start_msg:
        "こめ「動きたくない……」\n" +
        "すおう「理想的だね」\n" +
        "こめ「褒めてないよね？」\n" +
        "すおう「観察してるだけ」",
    text: "授業中です。",
    kana: "じゅぎょうちゅうです。",
    romaji: "jugyouchuu desu",
    reaction_good:
        "こめ「はーい……」\n" +
        "すおう「了解」",
    images:
        "こめ「先生、短すぎ」\n" +
        "すおう「雑だね」",
    images: ["suou.png", "kome.png"]
    },
    { 
        id: "chat_fumiko_bunta",
        subtype: "chat",
        group: "1-2",
        sender: "ふみこ＆ぶんた",
        start_msg:
            "ぶんた「部室の机、またガタついとったで」\n" +
            "ふみこ「えっ、そうなの？後で見てみるね」\n" +
            "ぶんた「無理せんでええ。俺が締めとく」\n" +
            "ふみこ「ありがとう。…ぶんたくん、優しいね」\n" +
            "ぶんた「は？普通やろ」",
        text: "協力して進めましょう。",
        kana: "きょうりょくしてすすめましょう。",
        romaji: "kyouryoku shite susumemashou",
        reaction_good:
            "ふみこ「うん、そうだね」\n" +
            "ぶんた「ま、悪ないな」",
        reaction_bad:
            "ぶんた「日本語ガタガタやん」\n" +
            "ふみこ「落ち着いて入力しよう？」",
        images: ["fumiko.png", "bunta.png"]
    },
    { 
        id: "chat_kome_shirube",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆しるべ",
        start_msg:
            "こめ「ねむい……帰りたい……」\n" +
            "しるべ「まだ昼」\n" +
            "こめ「昼が一番だるいんだってば……」\n" +
            "しるべ「……米食う？」\n" +
            "こめ「食う！！！！」",
        text: "集中してください。",
        kana: "しゅうちゅうしてください。",
        romaji: "shuuchuu shite kudasai",
        reaction_good:
            "こめ「はーい……がんばる……」\n" +
            "しるべ「無理すんな」",
        reaction_bad:
            "しるべ「今の誤字、逆にすごい」\n" +
            "こめ「え、どこ……？」",
        images: ["kome.png", "shirube.png"]
    },
    { 
        id: "chat_hebiki_shirube",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆しるべ",
        start_msg:
            "へびき「今日あちーさー……」\n" +
            "しるべ「……」\n" +
            "へびき「その首のやつ、涼しそうだね？」\n" +
            "しるべ「貸さない」\n" +
            "へびき「即答！？」",
        text: "私語は控えましょう。",
        kana: "しごはひかえましょう。",
        romaji: "shigo wa hikaemashou",
        reaction_good:
            "へびき「はーい、静かにするさー」\n" +
            "しるべ「……」",
        reaction_bad:
            "しるべ「変な変換」\n" +
            "へびき「え、今のどこ！？」",
        images: ["hebiki.png", "shirube.png"]
    },
    { 
        id: "chat_megumu_suou",
        subtype: "chat",
        group: "1-2",
        sender: "めぐむ＆すおう",
        start_msg:
            "めぐむ「それ、今やる必要ある？」\n" +
            "すおう「必要ないけど、面白い」\n" +
            "めぐむ「はぁ……」\n" +
            "すおう「呆れ顔、可愛いね」\n" +
            "めぐむ「調子乗るな」",
        text: "課題に戻ってください。",
        kana: "かだいにもどってください。",
        romaji: "kadai ni modotte kudasai",
        reaction_good:
            "めぐむ「ほら、聞いてる」\n" +
            "すおう「りょーかい」",
        reaction_bad:
            "すおう「誤字った？」\n" +
            "めぐむ「ちゃんと見て打ちなさい」",
        images: ["megumu.png", "suou.png"]
    },
    { 
        id: "chat_mari_yuu",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ゆう",
        start_msg:
            "まり「……その、静かでいいね」\n" +
            "ゆう「うん……落ち着く」\n" +
            "まり「人、少ないと安心する……」\n" +
            "ゆう「わかる……」",
        text: "会話を止めてください。",
        kana: "かいわをとめてください。",
        romaji: "kaiwa o tomete kudasai",
        reaction_good:
            "まり「……うん」\n" +
            "ゆう「はい……」",
        reaction_bad:
            "ゆう「今の、惜しい」\n" +
            "まり「ご、ごめん……」",
        images: ["mari.png", "yuu.png"]
    },
    { 
        id: "chat_miru_kanon",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆かのん",
        start_msg:
            "みる「ねえ聞いて聞いて！」\n" +
            "かのん「なになに〜？」\n" +
            "みる「今日の給食さ！」\n" +
            "かのん「それモノマネでいこ！」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "みる「はーい！」\n" +
            "かのん「了解〜！」",
        reaction_bad:
            "かのん「今の入力、音ズレしとるよ？」\n" +
            "みる「え、ほんと！？」",
        images: ["miru.png", "kanon.png"]
    },
    { 
        id: "chat_ayu_mibana",
        subtype: "chat",
        group: "1-2",
        sender: "あゆ＆みばな",
        start_msg:
            "あゆ「ねえ聞いてよ〜」\n" +
            "みばな「どうせくだらない」\n" +
            "あゆ「ひどっ！？ちゃんと聞いて！」\n" +
            "みばな「……一応」\n" +
            "あゆ「今の“一応”が傷つくんだけど〜！」",
        text: "授業に集中してください。",
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "あゆ「はーい！集中する！」\n" +
            "みばな「……今度続き聞く」",
        reaction_bad:
            "みばな「誤字」\n" +
            "あゆ「え、どこどこ！？」",
        images: ["ayu.png", "mibana.png"]
    },
    { 
        id: "chat_mari_mirai",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆みらい",
        start_msg:
            "みらい「まりちゃん、これ一緒にやろ！」\n" +
            "まり「……え、私でよかと？」\n" +
            "みらい「もちろん！頼りにしてるよ！」\n" +
            "まり「……が、頑張る……」",
        text: "協力して進めましょう。",
        kana: "きょうりょくしてすすめましょう。",
        romaji: "kyouryoku shite susumemashou",
        reaction_good:
            "みらい「いい感じ！」\n" +
            "まり「……うん」",
        reaction_bad:
            "みらい「あっ、そこ打ち間違えてる！」\n" +
            "まり「ご、ごめん……」",
        images: ["mari.png", "mirai.png"]
    },
    { 
        id: "chat_yuu_fumiko",
        subtype: "chat",
        group: "1-2",
        sender: "ゆう＆ふみこ",
        start_msg:
            "ゆう「その……これ、どう思う？」\n" +
            "ふみこ「うん、とても素敵だと思うよ」\n" +
            "ゆう「ほ、ほんと？」\n" +
            "ふみこ「うん。ゆうくんらしい」",
        text: "会話を止めてください。",
        kana: "かいわをとめてください。",
        romaji: "kaiwa o tomete kudasai",
        reaction_good:
            "ゆう「は、はい……」\n" +
            "ふみこ「ごめんね」",
        reaction_bad:
            "ふみこ「少し入力ずれてるよ」\n" +
            "ゆう「あっ……！」",
        images: ["yuu.png", "fumiko.png"]
    },
    { 
        id: "chat_hebiki_miru",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆みる",
        start_msg:
            "みる「へびきくん今日も暑そう！」\n" +
            "へびき「常に暑いさー……」\n" +
            "みる「元気出してこ！」\n" +
            "へびき「その元気分けてほしい……」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "みる「はーい！」\n" +
            "へびき「はーい……」",
        reaction_bad:
            "へびき「今の変換おかしいさー」\n" +
            "みる「え！？どこ！？」",
        images: ["hebiki.png", "miru.png"]
    },
    { 
        id: "chat_machie_kohaku",
        subtype: "chat",
        group: "1-2",
        sender: "まちえ＆こはく",
        start_msg:
            "まちえ「姿勢、正しいですね」\n" +
            "こはく「当然だ」\n" +
            "まちえ「流石です」\n" +
            "こはく「褒めるな。集中しろ」",
        text: "私語を慎みなさい。",
        kana: "しごをつつしみなさい。",
        romaji: "shigo o tsutsushimi nasai",
        reaction_good:
            "まちえ「失礼しました」\n" +
            "こはく「うむ」",
        reaction_bad:
            "こはく「誤字だ」\n" +
            "まちえ「あ、失礼しました」",
        images: ["machie.png", "kohaku.png"]
    },
    { 
        id: "chat_kome_yutasuke",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆ゆたすけ",
        start_msg:
            "こめ「もう動けん……」\n" +
            "ゆたすけ「無理せんでええき」\n" +
            "こめ「やさし……」\n" +
            "ゆたすけ「ちゃんと後でやればええ」",
        text: "課題を進めてください。",
        kana: "かだいをすすめてください。",
        romaji: "kadai o susumete kudasai",
        reaction_good:
            "こめ「はーい……」\n" +
            "ゆたすけ「うん」",
        reaction_bad:
            "ゆたすけ「そこ打ち間違えちゅう」\n" +
            "こめ「え……？」",
        images: ["kome.png", "yutasuke.png"]
    },
    { 
        id: "chat_kanon_megumu",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆めぐむ",
        start_msg:
            "かのん「なぁなぁめぐむ〜」\n" +
            "めぐむ「嫌な予感しかしないんだけど」\n" +
            "かのん「今の声マネどう？」\n" +
            "めぐむ「授業中にやることじゃない」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "かのん「はーい！」\n" +
            "めぐむ「最初からそうしなさい」",
        reaction_bad:
            "めぐむ「打ち間違えてる」\n" +
            "かのん「え、マジ？」",
        images: ["kanon.png", "megumu.png"]
    },
    { 
        id: "chat_yuu_yutasuke",
        subtype: "chat",
        group: "1-2",
        sender: "ゆう＆ゆたすけ",
        start_msg:
            "ゆう「その……ここ、どう思う？」\n" +
            "ゆたすけ「ええと思うで」\n" +
            "ゆう「ほんと？」\n" +
            "ゆたすけ「ゆうくんらしいき」",
        text: "手を止めてください。",
        kana: "てをとめてください。",
        romaji: "te o tomete kudasai",
        reaction_good:
            "ゆう「あ、はい……」\n" +
            "ゆたすけ「ごめんな」",
        reaction_bad:
            "ゆたすけ「そこ誤字やき」\n" +
            "ゆう「あっ……！」",
        images: ["yuu.png", "yutasuke.png"]
    },
    { 
        id: "chat_yuu_kyo",
        subtype: "chat",
        group: "1-2",
        sender: "ゆう＆きょう",
        start_msg:
            "ゆう「……その、寒くない？」\n" +
            "きょう「……別に」\n" +
            "ゆう「そ、そっか……」\n" +
            "きょう「……」",
        text: "会話は控えなさい。",
        kana: "かいわはひかえなさい。",
        romaji: "kaiwa wa hikae nasai",
        reaction_good:
            "ゆう「は、はい……」\n" +
            "きょう「……」",
        reaction_bad:
            "きょう「誤字」\n" +
            "ゆう「ご、ごめん！」",
        images: ["yuu.png", "kyo.png"]
    },
    { 
        id: "chat_miru_bunta",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆ぶんた",
        start_msg:
            "みる「ねえねえぶんたくん！」\n" +
            "ぶんた「なんや急に」\n" +
            "みる「今日めっちゃ楽しくない？」\n" +
            "ぶんた「まぁ、ぼちぼちやな」",
        text: "私語はやめましょう。",
        kana: "しごはやめましょう。",
        romaji: "shigo wa yamemashou",
        reaction_good:
            "みる「はーい！」\n" +
            "ぶんた「了解」",
        reaction_bad:
            "ぶんた「そこミスっとるで」\n" +
            "みる「え！？」",
        images: ["miru.png", "bunta.png"]
    },
    { 
        id: "chat_machie_erua",
        subtype: "chat",
        group: "1-2",
        sender: "まちえ＆えるあ",
        start_msg:
            "まちえ「進捗どうですか？」\n" +
            "えるあ「普通」\n" +
            "まちえ「それなら安心です」\n" +
            "えるあ「真面目だね」",
        text: "集中してください。",
        kana: "しゅうちゅうしてください。",
        romaji: "shuuchuu shite kudasai",
        reaction_good:
            "まちえ「失礼しました」\n" +
            "えるあ「うん」",
        reaction_bad:
            "えるあ「誤字ある」\n" +
            "まちえ「あ、すみません」",
        images: ["machie.png", "erua.png"]
    },
    { 
        id: "chat_hebiki_shirube",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆しるべ",
        start_msg:
            "へびき「暑いさー……」\n" +
            "しるべ「……」\n" +
            "へびき「何か言ってほしいさー……」\n" +
            "しるべ「……暑い」",
        text: "授業中です。",
        kana: "じゅぎょうちゅうです。",
        romaji: "jugyou chuu desu",
        reaction_good:
            "へびき「はーい……」\n" +
            "しるべ「……」",
        reaction_bad:
            "しるべ「誤字」\n" +
            "へびき「まちがえたさー」",
        images: ["hebiki.png", "shirube.png"]
    },
    { 
        id: "chat_kanon_kohaku",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆こはく",
        start_msg:
            "かのん「こはく〜！ちょっと聞いて聞いて！」\n" +
            "こはく「授業中だ。私語は禁止だ」\n" +
            "かのん「え〜一瞬で終わるちゃ！」\n" +
            "こはく「一瞬でも規則違反だ」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "かのん「はーい……」\n" +
            "こはく「最初からそうすればいい」",
        reaction_bad:
            "こはく「入力が乱れている」\n" +
            "かのん「先生も落ち着こ？」",
        images: ["kanon.png", "kohaku.png"]
    },
    { 
        id: "chat_miru_megumu",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆めぐむ",
        start_msg:
            "みる「めぐむちゃん見て見て！今日の消しゴム！」\n" +
            "めぐむ「……今それ必要？」\n" +
            "みる「今が一番かわいい時間！」\n" +
            "めぐむ「意味が分からない」",
        text: "授業に集中しなさい。",
        kana: "じゅぎょうにしゅうちゅうしなさい。",
        romaji: "jugyou ni shuuchuu shinasai",
        reaction_good:
            "みる「はーい！」\n" +
            "めぐむ「切り替え早いのは偉い」",
        reaction_bad:
            "めぐむ「先生、誤字あります」\n" +
            "みる「ドーナツ食べて落ち着こ？」",
        images: ["miru.png", "megumu.png"]
    },
    { 
        id: "chat_mari_fumiko",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ふみこ",
        start_msg:
            "まり「……この線、どう描くといいと？」\n" +
            "ふみこ「うん、力抜くと優しくなるよ」\n" +
            "まり「……ありがとう」\n" +
            "ふみこ「どういたしまして」",
        text: "作業に戻ってください。",
        kana: "さぎょうにもどってください。",
        romaji: "sagyou ni modotte kudasai",
        reaction_good:
            "まり「は、はい……」\n" +
            "ふみこ「すみません」",
        reaction_bad:
            "ふみこ「先生、少し打ち間違えてます」\n" +
            "まり「……ドンマイです」",
        images: ["mari.png", "fumiko.png"]
    },
    { 
        id: "chat_hebiki_shirube",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆しるべ",
        start_msg:
            "へびき「今日も暑いさー……」\n" +
            "しるべ「……」\n" +
            "へびき「ネッククーラー二重にしたさ」\n" +
            "しるべ「……そう」",
        text: "私語は控えなさい。",
        kana: "しごはひかえなさい。",
        romaji: "shigo wa hikae nasai",
        reaction_good:
            "へびき「はーい……」\n" +
            "しるべ「……」",
        reaction_bad:
            "しるべ「誤字」\n" +
            "へびき「あ、先生も暑さでやられてるさー」",
        images: ["hebiki.png", "shirube.png"]
    },
    { 
        id: "chat_kome_mibana",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆みばな",
        start_msg:
            "こめ「ねむい……」\n" +
            "みばな「また寝てんの？」\n" +
            "こめ「起きてる……たぶん」\n" +
            "みばな「目閉じてる時点でアウト」",
        text: "姿勢を正しなさい。",
        kana: "しせいをただしなさい。",
        romaji: "shisei o tadashi nasai",
        reaction_good:
            "こめ「はーい……」\n" +
            "みばな「よし」",
        reaction_bad:
            "みばな「先生、そこ違う」\n" +
            "こめ「先生も寝不足？」",
        images: ["kome.png", "mibana.png"]
    },
    { 
        id: "chat_yuji_suou",
        subtype: "chat",
        group: "1-2",
        sender: "ゆうじ＆すおう",
        start_msg:
            "ゆうじ「校則は守るべきだ」\n" +
            "すおう「場合によるんじゃない？」\n" +
            "ゆうじ「例外を作るな」\n" +
            "すおう「頭固いなぁ」",
        text: "口論はやめなさい。",
        kana: "こうろんはやめなさい。",
        romaji: "kouron wa yame nasai",
        reaction_good:
            "ゆうじ「……了解しました」\n" +
            "すおう「はいはい」",
        reaction_bad:
            "ゆうじ「誤字があります」\n" +
            "すおう「正義も確認大事だよ？」",
        images: ["yuji.png", "suou.png"]
    },
    { 
        id: "chat_kanon_suou",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆すおう",
        start_msg:
            "かのん「すおう〜！俺の声マネ聞いて！」\n" +
            "すおう「今？」\n" +
            "かのん「今が一番ノってるちゃ！」\n" +
            "すおう「面白いけど場所考えなよ」",
        text: "私語は控えなさい。",
        kana: "しごはひかえなさい。",
        romaji: "shigo wa hikae nasai",
        reaction_good:
            "かのん「はーい！」\n" +
            "すおう「素直だね」",
        reaction_bad:
            "すおう「先生、打ち間違えてるよ」\n" +
            "かのん「そこ俺の声で言ってほしい！」",
        images: ["kanon.png", "suou.png"]
    },
    { 
        id: "chat_miru_kohaku",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆こはく",
        start_msg:
            "みる「こはくくん！今日のノートかわいくない？」\n" +
            "こはく「授業中だ」\n" +
            "みる「見るだけ！一瞬！」\n" +
            "こはく「一瞬でも違反だ」",
        text: "前を向きなさい。",
        kana: "まえをむきなさい。",
        romaji: "mae o muki nasai",
        reaction_good:
            "みる「はーい……」\n" +
            "こはく「よろしい」",
        reaction_bad:
            "こはく「誤字がある」\n" +
            "みる「風紀も完璧じゃないね！」",
        images: ["miru.png", "kohaku.png"]
    },
    { 
        id: "chat_hebiki_mirai_bag",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆みらい",
        start_msg:
            "みらい「……へびき、その紙袋なに？」\n" +
            "へびき「今日は日差し強いさー……」\n" +
            "みらい「紙袋で解決する？」\n" +
            "へびき「気分的に平和さー」",
        text: "被り物は外しなさい。",
        kana: "かぶりものははずしなさい。",
        romaji: "kaburimono wa hazushi nasai",
        reaction_good:
            "へびき「はーい……」\n" +
            "みらい「ちゃんと聞けて偉いね」",
        reaction_bad:
            "みらい「先生、誤字あります」\n" +
            "へびき「先生も暑さでやられてるさー」",
        images: ["hebiki.png", "mirai.png"]
    },
    { 
        id: "chat_kanon_miru_bunta",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆みる＆ぶんた",
        start_msg:
            "かのん「なぁなぁ三人でユニット組まん？」\n" +
            "みる「楽しそう！」\n" +
            "ぶんた「急すぎやろ」\n" +
            "かのん「名前は今から考えるちゃ！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "みる「はーい！」\n" +
            "ぶんた「了解」\n" +
            "かのん「後で続きね！」",
        reaction_bad:
            "ぶんた「先生、誤字あるで」\n" +
            "かのん「そこツッコむんだ！」",
        images: ["kanon.png", "miru.png", "bunta.png"]
    },
    { 
        id: "chat_kohaku_yuji_erua",
        subtype: "chat",
        group: "1-2",
        sender: "こはく＆ゆうじ＆えるあ",
        start_msg:
            "ゆうじ「今の行動は校則違反だ」\n" +
            "こはく「同意する」\n" +
            "えるあ「まぁ確かにアウト」\n" +
            "ゆうじ「注意が必要だな」",
        text: "落ち着いて話し合いなさい。",
        kana: "おちついてはなしあいなさい。",
        romaji: "ochitsuite hanashiai nasai",
        reaction_good:
            "こはく「了解しました」\n" +
            "ゆうじ「是正する」\n" +
            "えるあ「はいはい」",
        reaction_bad:
            "えるあ「先生、そこ違う」\n" +
            "ゆうじ「確認は重要です」",
        images: ["kohaku.png", "yuji.png", "erua.png"]
    },
    { 
        id: "chat_mari_fumiko_yuu",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ふみこ＆ゆう",
        start_msg:
            "まり「……この色、変やろか」\n" +
            "ふみこ「優しくていいと思うよ」\n" +
            "ゆう「ぼくも好き……」\n" +
            "まり「……ありがとう」",
        text: "作業に集中してください。",
        kana: "さぎょうにしゅうちゅうしてください。",
        romaji: "sagyou ni shuuchuu shite kudasai",
        reaction_good:
            "まり「は、はい……」\n" +
            "ふみこ「すみません」\n" +
            "ゆう「気をつけます」",
        reaction_bad:
            "ふみこ「先生、誤字があります」\n" +
            "ゆう「だ、大丈夫ですか……？」",
        images: ["mari.png", "fumiko.png", "yuu.png"]
    },
    { 
        id: "chat_suou_mibana_ayu",
        subtype: "chat",
        group: "1-2",
        sender: "すおう＆みばな＆あゆ",
        start_msg:
            "あゆ「ねぇねぇ今の見た？」\n" +
            "みばな「別に」\n" +
            "すおう「面白かったけどね」\n" +
            "みばな「……ふーん」",
        text: "おしゃべりは控えなさい。",
        kana: "おしゃべりはひかえなさい。",
        romaji: "oshaberi wa hikae nasai",
        reaction_good:
            "あゆ「はーい！」\n" +
            "すおう「了解」\n" +
            "みばな「……」",
        reaction_bad:
            "みばな「誤字」\n" +
            "すおう「先生も油断したね」",
        images: ["suou.png", "mibana.png", "ayu.png"]
    },
    { 
        id: "chat_bunta_fumiko_pancake",
        subtype: "chat",
        group: "1-2",
        sender: "ぶんた＆ふみこ",
        start_msg:
            "ふみこ「ぶんたくん、これ……よかったら」\n" +
            "ぶんた「ん？パンケーキ？」\n" +
            "ふみこ「朝、焼きすぎちゃって」\n" +
            "ぶんた「え、普通に嬉しいんやけど」",
        text: "飲食は控えなさい。",
        kana: "いんしょくはひかえなさい。",
        romaji: "inshoku wa hikae nasai",
        reaction_good:
            "ぶんた「あとで食うわ」\n" +
            "ふみこ「うん」",
        reaction_bad:
            "ぶんた「先生、誤字あるで」\n" +
            "ふみこ「ふふ……」",
        images: ["bunta.png", "fumiko.png"]
    },
    { 
        id: "chat_hebiki_shirube_kome",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆しるべ＆こめ",
        start_msg:
            "へびき「今日も暑いさー……」\n" +
            "こめ「……ねむい」\n" +
            "しるべ「……」\n" +
            "へびき「誰も喋らんさー」",
        text: "姿勢を正しなさい。",
        kana: "しせいをただしなさい。",
        romaji: "shisei o tadashi nasai",
        reaction_good:
            "へびき「はーい」\n" +
            "こめ「……がんばる」\n" +
            "しるべ「……うん」",
        reaction_bad:
            "しるべ「誤字」\n" +
            "へびき「先生も疲れてるさー」",
        images: ["hebiki.png", "shirube.png", "kome.png"]
    },
    { 
        id: "chat_miru_kanon_ayu",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆かのん＆あゆ",
        start_msg:
            "みる「ねぇねぇ今の音楽よくない？」\n" +
            "かのん「俺それ歌えるちゃ！」\n" +
            "あゆ「え、今！？」\n" +
            "かのん「今！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "みる「はーい！」\n" +
            "あゆ「ごめんなさーい！」\n" +
            "かのん「後で歌うちゃ！」",
        reaction_bad:
            "あゆ「先生、誤字！」\n" +
            "かのん「そこノリで行こうよ〜」",
        images: ["miru.png", "kanon.png", "ayu.png"]
    },
    { 
        id: "chat_kohaku_yuji_megumu",
        subtype: "chat",
        group: "1-2",
        sender: "こはく＆ゆうじ＆めぐむ",
        start_msg:
            "ゆうじ「今のは規則違反だ」\n" +
            "こはく「同意する」\n" +
            "めぐむ「まぁ……アウトだな」\n" +
            "ゆうじ「是正が必要だ」",
        text: "落ち着いてください。",
        kana: "おちついてください。",
        romaji: "ochitsuite kudasai",
        reaction_good:
            "こはく「了解しました」\n" +
            "めぐむ「はいはい」\n" +
            "ゆうじ「感謝する」",
        reaction_bad:
            "めぐむ「先生、誤字」\n" +
            "ゆうじ「確認は重要です」",
        images: ["kohaku.png", "yuji.png", "megumu.png"]
    },
    { 
        id: "chat_mari_yutasuke_fumiko",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ゆたすけ＆ふみこ",
        start_msg:
            "まり「……この線、変やろか」\n" +
            "ゆたすけ「ええと思います」\n" +
            "ふみこ「とても綺麗だよ」\n" +
            "まり「……ありがとう」",
        text: "作業に集中してください。",
        kana: "さぎょうにしゅうちゅうしてください。",
        romaji: "sagyou ni shuuchuu shite kudasai",
        reaction_good:
            "まり「は、はい……」\n" +
            "ゆたすけ「すみません」\n" +
            "ふみこ「失礼しました」",
        reaction_bad:
            "ゆたすけ「先生、誤字があります」\n" +
            "ふみこ「大丈夫ですか？」",
        images: ["mari.png", "yutasuke.png", "fumiko.png"]
    },
    { 
        id: "chat_mirai_game_fail",
        subtype: "chat",
        group: "1-2",
        sender: "みらい＆みる＆しるべ",
        start_msg:
            "みらい「よっしゃ！次で逆転だから！」\n" +
            "みる「それ毎回言ってない？www」\n" +
            "しるべ「……今の、崖」\n" +
            "みらい「え？あっ、あーーー！！」\n" +
            "みる「ほら落ちたー！！」\n" +
            "みらい「でもさ！下手だからこそ楽しい時ってあるじゃん！」\n" +
            "しるべ「……強い精神力」",
        text: "落ち着いて操作しなさい。", 
        kana: "おちついてそうさしなさい。",
        romaji: "ochitsuite sousa shinasai",
        reaction_good:
            "みらい「はーい！次は慎重にいく！」\n" +
            "みる「そのセリフ何回目よwww」",
        reaction_bad:
            "みる「先生、操作じゃなくて入力ミスしてない？」\n" +
            "しるべ「……キー違う」",
        images: ["mirai.png", "miru.png", "shirube.png"]
    },
    { 
        id: "chat_shirube_ant",
        subtype: "chat",
        group: "1-2",
        sender: "しるべ＆ゆたすけ",
        start_msg:
            "ゆたすけ「……何しゆうが？」\n" +
            "しるべ「……アリ」\n" +
            "ゆたすけ「アリ？」\n" +
            "しるべ「巣、ここ」\n" +
            "ゆたすけ「……その手の、餌かえ？」\n" +
            "しるべ「……余ってた」\n" +
            "ゆたすけ「優しいのう」",
        text: "虫遊びは控えなさい。", 
        kana: "むしあそびはひかえなさい。",
        romaji: "mushi asobi wa hikae nasai",
        reaction_good:
            "しるべ「……分かった」\n" +
            "ゆたすけ「片付けるきね」",
        reaction_bad:
            "ゆたすけ「先生、言葉抜けちゅう」\n" +
            "しるべ「……意味は通じるけど」",
        images: ["shirube.png", "yutasuke.png"]
    },
    { 
        id: "chat_megumu_memory",
        subtype: "chat",
        group: "1-2",
        sender: "めぐむ＆えるあ",
        start_msg:
            "めぐむ「……思い出そうとすると、頭が止まるんだよな」\n" +
            "えるあ「無理に思い出す必要ないでしょ」\n" +
            "めぐむ「でもさ、元野良ってことしか分からん」\n" +
            "えるあ「今のあんた見てれば十分だと思うけど」\n" +
            "めぐむ「……そういうもんか？」\n" +
            "えるあ「そういうもん」",
        text: "過去より今を大切にしなさい。", 
        kana: "かこよりいまをたいせつにしなさい。",
        romaji: "kako yori ima o taisetsu ni shinasai",
        reaction_good:
            "めぐむ「……まぁ、悪くないな」\n" +
            "えるあ「でしょ」",
        reaction_bad:
            "えるあ「先生、助詞おかしい」\n" +
            "めぐむ「説教より入力直そ」",
        images: ["megumu.png", "erua.png"]
    },
    { 
        id: "chat_miru_umimatsugai",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆かのん",
        start_msg:
            "みる「昔さー、海松貝ほんと無理だったんだよね！」\n" +
            "かのん「え！？今めっちゃ好きじゃん！」\n" +
            "みる「そう！味覚って成長するんだな〜って！」\n" +
            "かのん「オレもピーマン克服したもん！」\n" +
            "みる「えらっ！成長成長〜！」",
        text: "食の好みの話は程々に。", 
        kana: "しょくのこのみのはなしはほどほどに。",
        romaji: "shoku no konomi no hanashi wa hodohodo ni",
        reaction_good:
            "みる「はーい！でも語りたい！」\n" +
            "かのん「分かる〜！」",
        reaction_bad:
            "かのん「先生、かな抜けとる！」\n" +
            "みる「タイピング失敗してない？www」",
        images: ["miru.png", "kanon.png"]
    },
    { 
        id: "chat_hebi_kome_shirube",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆こめ＆しるべ",
        start_msg:
            "へびき「今日暑すぎん？」\n" +
            "こめ「動けん……」\n" +
            "しるべ「……同意」\n" +
            "へびき「ネッククーラー貸そか？」\n" +
            "こめ「神……」",
        text: "授業中は静かに。", 
        kana: "じゅぎょうちゅうはしずかに。",
        romaji: "jugyou chuu wa shizuka ni",
        reaction_good:
            "へびき「はいはーい」\n" +
            "こめ「はーい……」",
        reaction_bad:
            "しるべ「……ローマ字違う」\n" +
            "へびき「先生、タイプミスさー」",
        images: ["hebiki.png", "kome.png", "shirube.png"]
    },
    { 
        id: "chat_mari_yuu_quiet",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆ゆう",
        start_msg:
            "まり「……ここ、静かでよかね」\n" +
            "ゆう「うん……落ち着く」\n" +
            "まり「人、多かと疲るっちゃん」\n" +
            "ゆう「分かる……僕も」\n" +
            "まり「……一緒やね」",
        text: "仲良くするのは良いことですね。", 
        kana: "なかよくするのはよいことですね。",
        romaji: "nakayoku suru no wa yoi koto desu ne",
        reaction_good:
            "ゆう「……はい」\n" +
            "まり「……はい」",
        reaction_bad:
            "ゆう「先生、ローマ字違ってます……」\n" +
            "まり「入力、間違えとらす」",
        images: ["mari.png", "yuu.png"]
    },
    { 
        id: "chat_hebiki_miru_cooler",
        subtype: "chat",
        group: "1-2",
        sender: "へびき＆みる",
        start_msg:
            "みる「それ年中つけてるよね？」\n" +
            "へびき「命綱さー」\n" +
            "みる「冬でも！？」\n" +
            "へびき「冬こそ油断禁物よ」\n" +
            "みる「へびきくん暑さ弱すぎwww」",
        text: "服装には気をつけなさい。", 
        kana: "ふくそうにはきをつけなさい。",
        romaji: "fukusou ni wa ki o tsuke nasai",
        reaction_good:
            "へびき「はーい」\n" +
            "みる「気をつけまーす！」",
        reaction_bad:
            "みる「先生、変なとこで切れてるよ？」\n" +
            "へびき「入力ミスさー」",
        images: ["hebiki.png", "miru.png"]
    },
    { 
        id: "chat_kome_mirai_morning",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆みらい",
        start_msg:
            "みらい「今日何回アラーム鳴った？」\n" +
            "こめ「5……いや6」\n" +
            "みらい「それで起きれないの才能だよ」\n" +
            "こめ「起きたくなかった……」\n" +
            "みらい「正直でよろしい！」",
        text: "時間管理を意識しなさい。", 
        kana: "じかんかんりをいしきしなさい。",
        romaji: "jikan kanri o ishiki shinasai",
        reaction_good:
            "みらい「気をつけまーす！」\n" +
            "こめ「……がんばる」",
        reaction_bad:
            "こめ「先生、かな抜けてるよ」\n" +
            "みらい「タイピング落ち着こ！」",
        images: ["kome.png", "mirai.png"]
    },
    { 
        id: "chat_bunta_fumiko_pancake",
        subtype: "chat",
        group: "1-2",
        sender: "ぶんた＆ふみこ",
        start_msg:
            "ぶんた「今日パンケーキ余ったん？」\n" +
            "ふみこ「うん、よかったら」\n" +
            "ぶんた「助かるわ〜」\n" +
            "ふみこ「甘さ控えめだよ」\n" +
            "ぶんた「そこがええねん」",
        text: "廊下での飲食は控えなさい。", 
        kana: "ろうかでのいんしょくはひかえなさい。",
        romaji: "rouka de no inshoku wa hikae nasai",
        reaction_good:
            "ぶんた「すんませーん」\n" +
            "ふみこ「気をつけます」",
        reaction_bad:
            "ぶんた「先生、字抜けてまっせ」\n" +
            "ふみこ「入力が少し違いますね」",
        images: ["bunta.png", "fumiko.png"]
    },
    { 
        id: "chat_suou_kohaku_rules",
        subtype: "chat",
        group: "1-2",
        sender: "すおう＆こはく",
        start_msg:
            "こはく「校則は守りなさい」\n" +
            "すおう「形式だけ守ればいいでしょ」\n" +
            "こはく「そういう問題ではない」\n" +
            "すおう「堅いなぁ」\n" +
            "こはく「真面目だから」",
        text: "口論は慎みなさい。", 
        kana: "こうろんはつつしみなさい。",
        romaji: "kouron wa tsutsushimi nasai",
        reaction_good:
            "すおう「はーい」\n" +
            "こはく「了解です」",
        reaction_bad:
            "こはく「先生、誤字があります」\n" +
            "すおう「風紀的にアウトだね」",
        images: ["suou.png", "kohaku.png"]
    },
    { 
        id: "chat_ayu_mibana",
        subtype: "chat",
        group: "1-2",
        sender: "あゆ＆みばな",
        start_msg:
            "あゆ「ねぇ、今日一緒帰ろ？」\n" +
            "みばな「……別にいい」\n" +
            "あゆ「その言い方好き〜」\n" +
            "みばな「調子乗んな」",
        text: "仲良く下校しなさい。", 
        kana: "なかよくげこうしなさい。",
        romaji: "nakayoku gekou shinasai",
        reaction_good:
            "あゆ「はーい！」\n" +
            "みばな「……了解」",
        reaction_bad:
            "みばな「先生、表記ズレてる」\n" +
            "あゆ「タイピングミスだよ〜？」",
        images: ["ayu.png", "mibana.png"]
    },
    { 
        id: "chat_lunch_chaos",
        subtype: "chat",
        group: "1-2",
        sender: "かのん＆みる＆へびき",
        start_msg:
            "かのん「もう一人いたら昼休み倍なのに〜！」\n" +
            "みる「それ毎日言ってるwww」\n" +
            "へびき「分身ほしいさー」\n" +
            "かのん「分かる！三人じゃ足りん！」",
        text: "昼休みでも騒ぎすぎないように。", 
        kana: "ひるやすみでもさわぎすぎないように。",
        romaji: "hiruyasumi demo sawagisuginai you ni",
        reaction_good:
            "みる「はーい！」\n" +
            "かのん「気をつけるー！」",
        reaction_bad:
            "へびき「先生、助詞抜けてるさー」\n" +
            "みる「入力落ち着こwww」",
        images: ["kanon.png", "miru.png", "hebiki.png"]
    },
    { 
        id: "chat_hinaka_kyo_twins",
        subtype: "chat",
        group: "1-1",
        sender: "ひなか＆きょう",
        start_msg:
            "ひなか「きょう！今日の昼パン買ったけん一緒食べよーや！」\n" +
            "きょう「……今はいい」\n" +
            "ひなか「えー！相変わらず冷たっ！」\n" +
            "きょう「普通だと思うが」\n" +
            "ひなか「ほんと双子なのに正反対だわ〜」",
        text: "姉弟仲良くしなさい。", 
        kana: "きょうだいなかよくしなさい。",
        romaji: "kyoudai nakayoku shinasai",
        reaction_good:
            "ひなか「はーい！」\n" +
            "きょう「……善処する」",
        reaction_bad:
            "きょう「先生、ローマ字が違う」\n" +
            "ひなか「入力ミス多くない？」",
        images: ["hinaka.png", "kyo.png"]
    },
    { 
        id: "chat_mirai_bunta_game",
        subtype: "chat",
        group: "1-2",
        sender: "みらい＆ぶんた",
        start_msg:
            "みらい「よし！今の完璧！」\n" +
            "ぶんた「いや今の完全に自滅や」\n" +
            "みらい「でも楽しいでしょ？」\n" +
            "ぶんた「まぁ、それはそう」\n" +
            "みらい「才能ないから燃えるんだよね！」",
        text: "授業中にゲームの話は控えなさい。", 
        kana: "じゅぎょうちゅうにげーむのはなしはひかえなさい。",
        romaji: "jugyou chuu ni geemu no hanashi wa hikae nasai",
        reaction_good:
            "みらい「すみませーん！」\n" +
            "ぶんた「了解でーす」",
        reaction_bad:
            "ぶんた「先生、単語抜けてます」\n" +
            "みらい「タイピング焦りすぎ！」",
        images: ["mirai.png", "bunta.png"]
    },
    { 
        id: "chat_shirube_kohaku_ant",
        subtype: "chat",
        group: "1-2",
        sender: "しるべ＆こはく",
        start_msg:
            "しるべ「……アリ」\n" +
            "こはく「何を見ている」\n" +
            "しるべ「餌、運んでる」\n" +
            "こはく「……無駄のない動きだな」\n" +
            "しるべ「……うん」",
        text: "校庭では遊ばず移動しなさい。", 
        kana: "こうていではあそばずいどうしなさい。",
        romaji: "koutei de wa asobazu idou shinasai",
        reaction_good:
            "こはく「了解です」\n" +
            "しるべ「……はい」",
        reaction_bad:
            "こはく「先生、助詞が抜けています」\n" +
            "しるべ「入力、変」",
        images: ["shirube.png", "kohaku.png"]
    },
    { 
        id: "chat_megumu_erua_memory",
        subtype: "chat",
        group: "1-2",
        sender: "めぐむ＆えるあ",
        start_msg:
            "めぐむ「……やっぱ思い出せない」\n" +
            "えるあ「無理に思い出さなくていい」\n" +
            "めぐむ「そう言われると助かる」\n" +
            "えるあ「今のめぐむは、今のめぐむだし」\n" +
            "めぐむ「……ありがとな」",
        text: "静かに会話しなさい。", 
        kana: "しずかにかいわしなさい。",
        romaji: "shizuka ni kaiwa shinasai",
        reaction_good:
            "めぐむ「すみません」\n" +
            "えるあ「気をつけます」",
        reaction_bad:
            "えるあ「先生、表記ミス」\n" +
            "めぐむ「入力落ち着け」",
        images: ["megumu.png", "erua.png"]
    },
    { 
        id: "chat_miru_kanon_umimatsugai",
        subtype: "chat",
        group: "1-2",
        sender: "みる＆かのん",
        start_msg:
            "みる「昔ね、海松貝食べれなかったんだよ！」\n" +
            "かのん「え！？今あんな好きなのに？」\n" +
            "みる「今はもう愛してる」\n" +
            "かのん「成長だねぇ〜」\n" +
            "みる「人生って味変あるよね！」",
        text: "食べ物の話は控えめに。", 
        kana: "たべもののはなしはひかえめに。",
        romaji: "tabemono no hanashi wa hikaeme ni",
        reaction_good:
            "みる「はーい！」\n" +
            "かのん「気をつけるー！」",
        reaction_bad:
            "かのん「先生、送り仮名おかしいよ〜」\n" +
            "みる「タイピング事故！」",
        images: ["miru.png", "kanon.png"]
    },
    { 
        id: "chat_lunch_soft",
        subtype: "chat",
        group: "1-2",
        sender: "こめ＆ゆたすけ＆まり",
        start_msg:
            "こめ「動きたくない……」\n" +
            "ゆたすけ「無理せんでええき」\n" +
            "まり「……ここ、静かでよか」\n" +
            "こめ「最高の場所……」",
        text: "昼休み後は速やかに教室へ。", 
        kana: "ひるやすみごはすみやかにきょうしつへ。",
        romaji: "hiruyasumi go wa sumiyaka ni kyoushitsu e",
        reaction_good:
            "ゆたすけ「はい」\n" +
            "まり「……はい」",
        reaction_bad:
            "こめ「先生、文字抜けとる」\n" +
            "ゆたすけ「入力ミスやね」",
        images: ["kome.png", "yutasuke.png", "mari.png"]
    },
    {
        id: "chat_hinaka_kyou_sibling1",
        subtype: "chat",
        group: "1-1",
        sender: "ひなか＆きょう",
        start_msg:
            "ひなか「きょう！また黙っとる！転校生の姉を放置する気なん？」\n" +
            "きょう「……騒がしいだけだと思っとる」\n" +
            "ひなか「は！？あたしの元気は島根の名産品だが！」\n" +
            "きょう「そんなもん聞いたことない」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ひなか「はーい先生！今だけね！」\n" +
            "きょう「……助かった」",
        reaction_bad:
            "きょう「タイポ多すぎ。落ち着け」\n" +
            "ひなか「先生まで慌てとるじゃん！？」",
        images: ["hinaka.png", "kyo.png"]
    },
    {
        id: "chat_hinaka_kyou_sibling2",
        subtype: "chat",
        group: "1-1",
        sender: "ひなか＆きょう",
        start_msg:
            "ひなか「ねぇきょう、東京の人って冷たいと思わん？」\n" +
            "きょう「別に。距離感あるだけ」\n" +
            "ひなか「距離詰めるのが人情だが！」\n" +
            "きょう「近すぎるのも問題」",
        text: "姉弟仲良くしなさい。",
        kana: "きょうだいなかよくしなさい。",
        romaji: "kyoudai nakayoku shinasai",
        reaction_good:
            "ひなか「ほら〜！先生も言っとる！」\n" +
            "きょう「……仕方ない」",
        reaction_bad:
            "きょう「文法おかしい」\n" +
            "ひなか「先生！島根弁より崩れとるよ！」",
        images: ["hinaka.png", "kyo.png"]
    },
    {
        id: "chat_mugi_kome_twins",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆こめ",
        start_msg:
            "むぎ「聞いて！？今日の夢やばかったんだけど！！」\n" +
            "こめ「……また授業中寝てたん？」\n" +
            "むぎ「うん！！世界救ってた！！」\n" +
            "こめ「はぁ……」",
        text: "授業に集中しなさい。",
        kana: "じゅぎょうにしゅうちゅうしなさい。",
        romaji: "jugyou ni shuuchuu shinasai",
        reaction_good:
            "むぎ「え〜！？今から本気出す！」\n" +
            "こめ「どうせ三分」",
        reaction_bad:
            "こめ「先生、誤字ってる」\n" +
            "むぎ「先生も眠いん！？仲間じゃん！」",
        images: ["mugi.png", "kome.png"]
    },
    {
        id: "chat_mugi_kome_shirube",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆こめ＆しるべ",
        start_msg:
            "むぎ「しるべってさ、ロボットみたい！」\n" +
            "しるべ「……別に」\n" +
            "こめ「感情省エネなんだよ」\n" +
            "むぎ「え！？進化系じゃん！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "しるべ「……了解」\n" +
            "こめ「はーい」\n" +
            "むぎ「はいっ！！」",
        reaction_bad:
            "しるべ「誤字」\n" +
            "むぎ「先生もしるべ化してる！」",
        images: ["mugi.png", "kome.png", "shirube.png"]
    },
    {
        id: "chat_mirai_miru",
        subtype: "chat",
        group: "1-2",
        sender: "みらい＆みる",
        start_msg:
            "みる「ねぇねぇ！今日の運勢大吉だった！」\n" +
            "みらい「根拠は？」\n" +
            "みる「勘！！」",
        text: "会話を控えなさい。",
        kana: "かいわをひかえなさい。",
        romaji: "kaiwa wo hikae nasai",
        reaction_good:
            "みらい「了解」\n" +
            "みる「えへへ」",
        reaction_bad:
            "みらい「誤字」\n" +
            "みる「先生ドンマイ！」",
        images: ["mirai.png", "miru.png"]
    },
    {
        id: "chat_marie_machie",
        subtype: "chat",
        group: "1-2",
        sender: "まり＆まちえ",
        start_msg:
            "まちえ「大丈夫？無理してない？」\n" +
            "まり「……ちょっとだけ」\n" +
            "まちえ「その弱さごと、私は肯定するよ」",
        text: "私語をやめなさい。",
        kana: "しごをやめなさい。",
        romaji: "shigo wo yame nasai",
        reaction_good:
            "まり「……はい」\n" +
            "まちえ「了解です」",
        reaction_bad:
            "まちえ「先生、入力ミスですよ」\n" +
            "まり「……ふふ」",
        images: ["mari.png", "machie.png"]
    },
    // --- 1-3 ---
    {
        id: "chat_masaki_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "まさき＆みさき",
        start_msg:
            "みさき「お兄ちゃん……これ」\n" +
            "まさき「……手紙？」\n" +
            "みさき「うん。漢字、ちょっと変かもだけど」\n" +
            "まさき「……ありがとう。ちゃんと読めるよ」\n" +
            "みさき「無理、してない？」\n" +
            "まさき「してない……大丈夫」\n" +
            "みさき「……そっか。じゃあ、よかった」",
        text: "優しい兄妹ですね。",
        kana: "やさしいきょうだいですね。",
        romaji: "yasashii kyoudai desu ne",
        reaction_good:
            "まさき「……はい」\n" +
            "みさき「えへへ」",
        reaction_bad:
            "みさき「せ、先生……誤字あります」\n" +
            "まさき「直した方がいいです」",
        images: ["masaki.png", "misaki.png"]
    },
    { 
        id: "chat_1-3_rinon_honoka_debate",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ほのか",
        start_msg:
            "ほのか「その練習法、効率悪くない？」\n" +
            "りのん「結果出てるから問題ない」\n" +
            "ほのか「でも理論的にはさ」\n" +
            "りのん「理論で点は取れない」\n" +
            "ほのか「うわ、結果厨」\n" +
            "りのん「負け犬の遠吠え？」",
        text: "落ち着いて話しましょう。", 
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "ほのか「はーいはい、冷静冷静」\n" +
            "りのん「先生、続けてもいいですか？」",
        reaction_bad:
            "ほのか「誤字ってない？先生」\n" +
            "りのん「論点以前の問題かも」",
        images: ["rinon.png", "honoka.png"]
    },
    { 
        id: "chat_1-3_kisora_yui_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆ゆい",
        start_msg:
            "ゆい「きそら、今日声ちっちゃくない？」\n" +
            "きそら「ん……人、多くて……」\n" +
            "ゆい「そっか。じゃあ、ゆいの隣いよ？」\n" +
            "きそら「……うん……ありがと……」\n" +
            "ゆい「かわいい」",
        text: "仲が良いですね。", 
        kana: "なかがいいですね。",
        romaji: "naka ga ii desu ne",
        reaction_good:
            "きそら「……えへ……」\n" +
            "ゆい「でしょ〜♡」",
        reaction_bad:
            "ゆい「先生、打ち間違えてるけど大丈夫？」\n" +
            "きそら「……無理、指摘できない……」",
        images: ["kisora.png", "yui.png"]
    },
    { 
        id: "chat_1-3_kuu_noriomi_dark",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「愛って概念、信用してる？」\n" +
            "くう「してない。無駄」\n" +
            "のりおみ「だよね。壊れやすいし」\n" +
            "くう「壊れる前提で期待するのが嫌」\n" +
            "のりおみ「実に合理的」",
        text: "難しい話ですね。", 
        kana: "むずかしいはなしですね。",
        romaji: "muzukashii hanashi desu ne",
        reaction_good:
            "のりおみ「配慮ありがとうございます」\n" +
            "くう「……別に」",
        reaction_bad:
            "くう「誤字。目障り」\n" +
            "のりおみ「先生、確認してから送信を」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_1-3_mugi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ひびき",
        start_msg:
            "ひびき「コケコッコーーー！！朝やでえええ！！」\n" +
            "むぎ「うるさぁぁぁ！？！？朝っぱらから何しとんがね！！」\n" +
            "ひびき「元気注入や！！」\n" +
            "むぎ「元気通り越して鼓膜ぶっ壊れるて！！」\n" +
            "ひびき「ほらお前も鳴けや！」\n" +
            "むぎ「コ、コケ……ってやらんわ！！」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "むぎ「はーい……ちょっとだけな……」\n" +
            "ひびき「しゃーないなぁ」",
        reaction_bad:
            "ひびき「先生、文字も騒音やで？」\n" +
            "むぎ「誤字っとるし、静かに言われても説得力ねぇわ！」",
        images: ["mugi.png", "hibiki.png"]
    },
    { 
        id: "chat_1-3_sharehouse_talk",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆なぎさ＆ほのか",
        start_msg:
            "なぎさ「でさ、昨日もほのかが夜中に論破動画見ててさ」\n" +
            "ほのか「勉強だけど？」\n" +
            "めり「夜中に音出すのは……失礼極まりないと……」\n" +
            "ほのか「イヤホンしてたし」\n" +
            "なぎさ「音漏れな」\n" +
            "めり「わ、わたし……そのたびに謝ってて……」\n" +
            "ほのか「めりが謝る必要なくない？」",
        text: "仲良く生活しましょう。", 
        kana: "なかよくせいかつしましょう。",
        romaji: "nakayoku seikatsu shimashou",
        reaction_good:
            "なぎさ「まぁルール決めりゃいっか」\n" +
            "めり「はい……努力します……」\n" +
            "ほのか「合理的」",
        reaction_bad:
            "ほのか「先生、誤字ってない？」\n" +
            "なぎさ「生活指導の前に文章整えよ」\n" +
            "めり「す、すみません……でも気になります……」",
        images: ["meri.png", "nagisa.png", "honoka.png"]
    },
    { 
        id: "chat_1-3_ritsu_kisora",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆きそら",
        start_msg:
            "りつ「やあ☆仔猫ちゃん！」\n" +
            "きそら「……ひゃ……」\n" +
            "りつ「その反応、実にキュートだね！」\n" +
            "きそら「な、名前で……呼んで……」\n" +
            "りつ「もちろんだよ、きそらちゃん☆」\n" +
            "きそら「……うぅ……」",
        text: "からかいすぎないように。", 
        kana: "からかいすぎないように。",
        romaji: "karakai sugina you ni",
        reaction_good:
            "りつ「愛ゆえだよ！」\n" +
            "きそら「……や、やさしくなら……」",
        reaction_bad:
            "りつ「先生、誤字は美しくないね？」\n" +
            "きそら「……読むの、むずかしい……」",
        images: ["ritsu.png", "kisora.png"]
    },
    { 
        id: "chat_1-3_atsushi_soshi",
        subtype: "chat",
        group: "1-3",
        sender: "あつし＆そうし",
        start_msg:
            "あつし「ねぇそうし、星ってさ、自分で光ってるんだよ？」\n" +
            "そうし「……それ、特許取れる？」\n" +
            "あつし「え！？取れるの！？」\n" +
            "そうし「発想としては……面白い」\n" +
            "あつし「やったぁ！！」",
        text: "授業に集中してください。", 
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "あつし「はーい！」\n" +
            "そうし「……あとで続きを」",
        reaction_bad:
            "そうし「先生、誤字があります」\n" +
            "あつし「星より先に文字直そ！」",
        images: ["atsushi.png", "soshi.png"]
    },
    { 
    id: "chat_1-3_kisora_tayori_hide",
    subtype: "chat",
    group: "1-3",
    sender: "きそら＆たより",
    start_msg:
        "そうじ「お、きそらじゃん！今日さ——」\n" +
        "きそら「……っ」\n" +
        "たより「おっと、ごめんね。今ちょっと話し中なんだ」\n" +
        "きそら「……（たよりの背中に隠れる）」\n" +
        "そうじ「草。ガード固っ」\n" +
        "たより「はは、安心していいよ」",
    text: "大丈夫ですか？",
    kana: "だいじょうぶですか？",
    romaji: "daijoubu desu ka",
    reaction_good:
        "きそら「……うん……」\n" +
        "たより「ありがとうございます」",
    reaction_bad:
        "たより「先生、誤字で不安増やさないでください」\n" +
        "きそら「……よ、読めな……」",
    images: ["kisora.png", "tayori.png", "soji.png"]
    },
    { 
    id: "chat_1-3_honoka_aoi",
    subtype: "chat",
    group: "1-3",
    sender: "ほのか＆あおい",
    start_msg:
        "ほのか「そのやり方、効率悪くない？」\n" +
        "あおい「……そうだら？」\n" +
        "ほのか「普通こうするでしょ」\n" +
        "あおい「わたしは、この方が落ち着くら」\n" +
        "ほのか「感情論じゃん」\n" +
        "あおい「感情でも、結果は出とるで」",
    text: "言い方に気をつけて。",
    kana: "いいかたにきをつけて。",
    romaji: "iikata ni ki o tsukete",
    reaction_good:
        "ほのか「……まぁ、結果出てるなら」\n" +
        "あおい「ありがとう」",
    reaction_bad:
        "ほのか「先生、誤字は論外」\n" +
        "あおい「注意の前に直した方がいいら」",
    images: ["honoka.png", "aoi.png"]
    },
    { 
    id: "chat_1-3_rinon_yui",
    subtype: "chat",
    group: "1-3",
    sender: "りのん＆ゆい",
    start_msg:
        "ゆい「ねぇりのん……今日の歌、胸ぎゅってした……」\n" +
        "りのん「結果出たでしょ」\n" +
        "ゆい「ゆい、泣いちゃうとこだった……」\n" +
        "りのん「泣くなら次は一緒に勝とう」",
    text: "良い関係ですね。",
    kana: "よいかんけいですね。",
    romaji: "yoi kankei desu ne",
    reaction_good:
        "りのん「当然です」\n" +
        "ゆい「えへ……」",
    reaction_bad:
        "ゆい「先生、字ちがう……」\n" +
        "りのん「評価以前の問題ですね」",
    images: ["rinon.png", "yui.png"]
    },
    { 
    id: "chat_1-3_yuhi_noriomi",
    subtype: "chat",
    group: "1-3",
    sender: "ゆうひ＆のりおみ",
    start_msg:
        "ゆうひ「人生つまんなくね？w」\n" +
        "のりおみ「信じる価値がないだけだ」\n" +
        "ゆうひ「重っ」\n" +
        "のりおみ「あなたが軽すぎるだけでしょう」",
    text: "落ち着いて。",
    kana: "おちついて。",
    romaji: "ochitsuite",
    reaction_good:
        "ゆうひ「はいはいw」\n" +
        "のりおみ「了解です」",
    reaction_bad:
        "のりおみ「先生、誤字は信用を落とします」\n" +
        "ゆうひ「草。まず文字直そw」",
    images: ["yuhi.png", "noriomi.png"]
    },
    { 
    id: "chat_1-3_kouta_misaki",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆みさき",
    start_msg:
        "みさき「これ……お兄ちゃんに……」\n" +
        "こうた「手紙、丁寧だね」\n" +
        "みさき「漢字……まちがってて……」\n" +
        "こうた「気持ちは、正確だよ」",
    text: "素敵ですね。",
    kana: "すてきですね。",
    romaji: "suteki desu ne",
    reaction_good:
        "みさき「……ありがとう」\n" +
        "こうた「当然です」",
    reaction_bad:
        "こうた「先生、誤字は避けましょう」\n" +
        "みさき「……それ、ちょっと悲しいです……」",
    images: ["kouta.png", "misaki.png"]
    },
    {
        id: "chat_ritsu_rinon_clash",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「やあ☆歌姫りのんちゃん！そのリップ、発色が少し沈んでるね？」\n" +
            "りのん「は？歌に関係ある？」\n" +
            "りつ「あるとも！舞台は総合芸術！美は勝利条件なんだ☆」\n" +
            "りのん「結果出せばいいでしょ。余計な工程いらない」\n" +
            "りつ「工程を削るのは凡人の発想だよ？美は積み上げるもの！」",
        text: "落ち着いて話し合いなさい。",
        kana: "おちついてはなしあいなさい。",
        romaji: "ochitsuite hanashiai nasai",
        reaction_good:
            "りのん「……まぁ、歌に集中できるならいい」\n" +
            "りつ「ふふ☆理解が早くて助かるよ、歌姫ちゃん！」",
        reaction_bad:
            "りつ「先生、誤字は美しくないよ？」\n" +
            "りのん「そこ直してから注意して」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_sc_kouta_tayori",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆たより",
        start_msg:
            "こうた「この文章……無難すぎないか？」\n" +
            "たより「でも、誰も傷つかないよ」\n" +
            "こうた「それが正解なのか分からなくなる時がある」\n" +
            "たより「書記は、矢面に立たなくていいんだよ」\n" +
            "こうた「……僕は、誰のために書いてるんだろう」",
        text: "自分の言葉で書いてみなさい。",
        kana: "じぶんのことばでかいてみなさい。",
        romaji: "jibun no kotoba de kaite mimasai",
        reaction_good:
            "たより「うん、その方がこうたらしい」\n" +
            "こうた「……ありがとう。少し、楽になった」",
        reaction_bad:
            "こうた「先生、文章の意味が曖昧です」\n" +
            "たより「読み手困っちゃうかも」",
        images: ["kouta.png", "tayori.png"]
    },
    {
        id: "chat_sharehouse_girls",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆ほのか＆なぎさ",
        start_msg:
            "ほのか「この家さ、ルール多くない？」\n" +
            "なぎさ「でも守らないと崩れるでしょ」\n" +
            "めり「も、申し訳ない……わたしが気にしすぎで……」\n" +
            "ほのか「ほらそうやってすぐ謝る！」\n" +
            "なぎさ「めりは悪くないよ。世界が荒いだけ」",
        text: "役割分担を見直してみましょう。",
        kana: "やくわりぶんたんをみなおしてみましょう。",
        romaji: "yakuwari buntan o minaoshite mimashou",
        reaction_good:
            "めり「……ありがとうございます」\n" +
            "ほのか「効率上がりそうじゃん？」\n" +
            "なぎさ「先生、案外現実派だね」",
        reaction_bad:
            "ほのか「先生、論点ズレてない？」\n" +
            "なぎさ「そこじゃない」",
        images: ["meri.png", "honoka.png", "nagisa.png"]
    },
    {
        id: "chat_yuhi_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆くう",
        start_msg:
            "ゆうひ「おいカラス、また一人？」\n" +
            "くう「……舌打ちするぞ」\n" +
            "ゆうひ「草w その顔で言うなって」\n" +
            "くう「群れる趣味はない」",
        text: "人との距離感を考えなさい。",
        kana: "ひととのきょりかんをかんがえなさい。",
        romaji: "hito to no kyori kan o kangae nasai",
        reaction_good:
            "ゆうひ「はいはいw」\n" +
            "くう「……無駄ではないかもな」",
        reaction_bad:
            "ゆうひ「誤字ってて説得力ゼロw」\n" +
            "くう「直してから言え」",
        images: ["yuhi.png", "kuu.png"]
    },
    {
        id: "chat_ritsu_yui_cat",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆ゆい",
        start_msg:
            "りつ「やあ☆仔猫ちゃん！今日も毛並みが最高だね」\n" +
            "ゆい「えへ……♡ ゆい、仔猫ちゃん好き……」\n" +
            "りつ「素直で可愛い！その感受性、大事にしたまえ☆」\n" +
            "ゆい「りつくん優しい……ゆい、撫でられてる気分……」",
        text: "距離感を考えなさい。",
        kana: "きょりかんをかんがえなさい。",
        romaji: "kyori kan o kangae nasai",
        reaction_good:
            "りつ「おっと、先生の視線が入ったね☆」\n" +
            "ゆい「……でも、ちょっとだけならいいよね？」",
        reaction_bad:
            "りつ「先生、誤字は美しくないよ？」\n" +
            "ゆい「そこ間違えるの、情緒乱れる……」",
        images: ["ritsu.png", "yui.png"]
    },
    {
        id: "chat_ritsu_kisora_cat",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆きそら",
        start_msg:
            "りつ「やあ☆仔猫ちゃん！」\n" +
            "きそら「……っ！ な、名前で……呼んで……」\n" +
            "りつ「おや？照れてるのかい？それも可愛いよ☆」\n" +
            "きそら「ち、ちが……違くないけど……！」",
        text: "相手の希望を尊重しなさい。",
        kana: "あいてのきぼうをそんちょうしなさい。",
        romaji: "aite no kibou o sonchou shinasai",
        reaction_good:
            "りつ「なるほど……じゃあ、きそらちゃん」\n" +
            "きそら「……うん……それなら……」",
        reaction_bad:
            "りつ「先生、そこ誤字だと説得力が落ちるよ？」\n" +
            "きそら「よ、余計混乱する……」",
        images: ["ritsu.png", "kisora.png"]
    },
    {
        id: "chat_ritsu_soji",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ",
        start_msg:
            "そうじ「その髪、風の抵抗ヤバくね？」\n" +
            "りつ「計算済みだよ☆美は空気を切り裂く！」\n" +
            "そうじ「毎日イキっていこうって感じ？」\n" +
            "りつ「君も悪くないセンスしてるね☆」",
        text: "張り合わないでください。",
        kana: "はりあわないでください。",
        romaji: "hariawanaide kudasai",
        reaction_good:
            "そうじ「ま、ケンカする気はねーけどな！」\n" +
            "りつ「競い合うのも青春さ☆」",
        reaction_bad:
            "そうじ「先生、誤字ってて草」\n" +
            "りつ「美しく直してから注意しよう☆」",
        images: ["ritsu.png", "soji.png"]
    },
    {
        id: "chat_yuhi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ひびき",
        start_msg:
            "ひびき「コケコッコーーー！！朝やぞォ！！」\n" +
            "ゆうひ「うるさw 近所迷惑すぎ草」\n" +
            "ひびき「文句あんなら勝負や！！」\n" +
            "ゆうひ「はいはいw」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ゆうひ「はいはいw」\n" +
            "ひびき「チッ……」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて説得力ゼロw」\n" +
            "ひびき「ちゃんと書けやぁ！！」",
        images: ["yuhi.png", "hibiki.png"]
    },
    {
        id: "chat_rinon_honoka_debate",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ほのか",
        start_msg:
            "りのん「結果が出てない議論は意味ない」\n" +
            "ほのか「でも過程が甘いと再現性なくない？」\n" +
            "りのん「再現できないなら才能不足」\n" +
            "ほのか「うわ出た、強者理論」",
        text: "言い方に気をつけなさい。",
        kana: "いいかたにきをつけなさい。",
        romaji: "iikata ni ki o tsukenasai",
        reaction_good:
            "りのん「……事実は曲げないけどね」\n" +
            "ほのか「まぁ、そこは嫌いじゃない」",
        reaction_bad:
            "ほのか「先生、誤字ってない？」\n" +
            "りのん「注意する側が崩れてる」",
        images: ["rinon.png", "honoka.png"]
    },
    {
        id: "chat_kisora_aoi_quiet",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆あおい",
        start_msg:
            "きそら「……あの……それ……かわいい……」\n" +
            "あおい「ありがと。きそらちゃんも、似合っとるよ」\n" +
            "きそら「……えへ……」",
        text: "会話を続けなさい。",
        kana: "かいわをつづけなさい。",
        romaji: "kaiwa o tsuzuke nasai",
        reaction_good:
            "あおい「ゆっくりでいいよ」\n" +
            "きそら「……うん……」",
        reaction_bad:
            "あおい「先生、そこ違うら？」\n" +
            "きそら「よ、余計緊張する……」",
        images: ["kisora.png", "aoi.png"]
    },
    {
        id: "chat_tayori_misaki_letter",
        subtype: "chat",
        group: "1-3",
        sender: "たより＆みさき",
        start_msg:
            "みさき「この漢字……合ってるかな……？」\n" +
            "たより「うん、大丈夫。気持ちはちゃんと伝わる」\n" +
            "みさき「……よかった……」",
        text: "手助けしすぎないでください。",
        kana: "てだすけしすぎないでください。",
        romaji: "tedasuke shi suginaide kudasai",
        reaction_good:
            "たより「じゃあ、仕上げは自分で」\n" +
            "みさき「……はい」",
        reaction_bad:
            "たより「先生、そこ誤字ですね」\n" +
            "みさき「せ、先生も間違えるんですね……」",
        images: ["tayori.png", "misaki.png"]
    },
    {
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「ねぇねぇ！今の話ヤバくない！？」\n" +
            "ゆうひ「いや雑すぎw 草」\n" +
            "むぎ「えー！？ひどーい！」",
        text: "授業に集中しなさい。",
        kana: "じゅぎょうにしゅうちゅうしなさい。",
        romaji: "jugyou ni shuuchuu shinasai",
        reaction_good:
            "ゆうひ「はーいw」\n" +
            "むぎ「あとで続き話すね！」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて集中できんw」\n" +
            "むぎ「え？どこどこ！？」",
        images: ["mugi.png", "yuhi.png"]
    },
    {
        id: "chat_kuu_noriomi_cold",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……無駄な努力だ」\n" +
            "のりおみ「そう思うなら、それでいいんじゃない」\n" +
            "くう「君も諦めてる側だろ」\n" +
            "のりおみ「さぁ、どうでしょう」",
        text: "協調性を持ちなさい。",
        kana: "きょうちょうせいをもちなさい。",
        romaji: "kyouchousei o mochi nasai",
        reaction_good:
            "くう「……チッ」\n" +
            "のりおみ「形式上は、従います」",
        reaction_bad:
            "のりおみ「先生、誤字ですね」\n" +
            "くう「説得力ゼロ」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_atsushi_nagisa_world",
        subtype: "chat",
        group: "1-3",
        sender: "あつし＆なぎさ",
        start_msg:
            "あつし「世界が暗いなら、自分が光になればいい！」\n" +
            "なぎさ「そういうの、押し付けじゃない？」\n" +
            "あつし「でも希望は必要だよ！」",
        text: "考えを尊重しなさい。",
        kana: "かんがえをそんちょうしなさい。",
        romaji: "kangae o sonchou shinasai",
        reaction_good:
            "なぎさ「……まぁ、嫌いじゃない」\n" +
            "あつし「やった！」",
        reaction_bad:
            "なぎさ「先生、誤字ってるよ」\n" +
            "あつし「言葉も磨こう！」",
        images: ["atsushi.png", "nagisa.png"]
    },
    {
        id: "chat_aoi_honoka_clash",
        subtype: "chat",
        group: "1-3",
        sender: "あおい＆ほのか",
        start_msg:
            "ほのか「そのやり方、非効率すぎない？」\n" +
            "あおい「そうかな…。でも、ちゃんと意味はあると思うよ」\n" +
            "ほのか「意味がある≠正解、でしょ？」\n" +
            "あおい「正解じゃなくても、必要なことはあるよ」\n" +
            "ほのか「感情論だね。それ」\n" +
            "あおい「……感情も、判断材料だよ」",
        text: "一度立ち止まって、相手の意見を整理しよう。",
        kana: "いちどたちどまって、あいてのいけんをせいりしよう。",
        romaji: "ichido tachidomatte, aite no iken o seiri shiyou",
        reaction_good:
            "ほのか「……まぁ、聞くだけは聞くか」\n" +
            "あおい「うん、ありがとう」",
        reaction_bad:
            "ほのか「その言い方、論点ズレてる」\n" +
            "あおい「先生、今のはちょっと違うかも…」",
        images: ["aoi.png", "honoka.png"]
    },
    {
        id: "chat_tayori_kisora_soft",
        subtype: "chat",
        group: "1-3",
        sender: "たより＆きそら",
        start_msg:
            "きそら「……それ、みんなの前で言わなきゃだめ？」\n" +
            "たより「無理なら、僕が横にいるよ」\n" +
            "きそら「……下の名前で呼んでくれる？」\n" +
            "たより「きそら。大丈夫、ゆっくりでいい」\n" +
            "きそら「……ありがと」",
        text: "無理のない形で進めよう。",
        kana: "むりのないかたちですすめよう。",
        romaji: "muri no nai katachi de susumeyou",
        reaction_good:
            "たより「その方が続くしね」\n" +
            "きそら「……うん」",
        reaction_bad:
            "たより「先生、急かしすぎかも」\n" +
            "きそら「……こわい」",
        images: ["tayori.png", "kisora.png"]
    },
    {
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「それでさ〜！！めっちゃさ〜！！」\n" +
            "ゆうひ「話なげぇw 要点3秒で言え」\n" +
            "むぎ「え！？今の超重要！！」\n" +
            "ゆうひ「重要そうに見えねぇw」",
        text: "順番に話しなさい。",
        kana: "じゅんばんにはなしなさい。",
        romaji: "junban ni hanashi nasai",
        reaction_good:
            "ゆうひ「はーい先生w」\n" +
            "むぎ「えへへ！がんばる〜！」",
        reaction_bad:
            "ゆうひ「その注意、雑すぎ」\n" +
            "むぎ「え！？今どっちのこと！？」",
        images: ["mugi.png", "yuhi.png"]
    },
    {
        id: "chat_ritsu_rinon_pride",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「ボクの仕上がり、完璧じゃない？」\n" +
            "りのん「結果は数字で出るよ」\n" +
            "りつ「え、夢なさすぎない？」\n" +
            "りのん「夢は勝ってから見なさい」",
        text: "評価基準の違いを認めよう。",
        kana: "ひょうかきじゅんのちがいをみとめよう。",
        romaji: "hyouka kijun no chigai o mitomeyou",
        reaction_good:
            "りつ「……まぁ、それも美学か」\n" +
            "りのん「理解が早くて助かる」",
        reaction_bad:
            "りのん「先生、感覚論すぎる」\n" +
            "りつ「それ、フォローになってないよ？」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_soji_kuu_irritate",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆くう",
        start_msg:
            "そうじ「なぁなぁ、その顔なに考えてんの？」\n" +
            "くう「……別に」\n" +
            "そうじ「絶対なんかあるじゃん！」\n" +
            "くう「詮索すんな。舌打ちするぞ」",
        text: "距離感を大切にしよう。",
        kana: "きょりかんをたいせつにしよう。",
        romaji: "kyorikan o taisetsu ni shiyou",
        reaction_good:
            "そうじ「はいはい、了解〜」\n" +
            "くう「……助かる」",
        reaction_bad:
            "くう「その介入、最悪」\n" +
            "そうじ「え、地雷踏んだ？」",
        images: ["soji.png", "kuu.png"]
    },
    {
        id: "chat_soji_soshi_gap",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆そうし",
        start_msg:
            "そうじ「なぁそうし！それ特許取れんじゃね？」\n" +
            "そうし「えっ、そ、そんな大それたことじゃ…」\n" +
            "そうじ「いや絶対イケるって！イキってこ！」\n" +
            "そうし「イキるのは、ちょっと……こわいかな」\n" +
            "そうじ「弱気だな〜！火星人なのに！」\n" +
            "そうし「地球では慎重が大事なんだ…」",
        text: "一度、現実的な手順を整理しましょう。",
        kana: "いちど、げんじつてきなてじゅんをせいりしましょう。",
        romaji: "ichido, genjitsuteki na tejun o seiri shimashou",
        reaction_good:
            "そうじ「お、じゃあ段階踏むか！」\n" +
            "そうし「はい…それなら安心です」",
        reaction_bad:
            "そうじ「その言い方、夢潰してない？」\n" +
            "そうし「先生、話が飛んでます…」",
        images: ["soji.png", "soshi.png"]
    },
    {
        id: "chat_aoi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "あおい＆ゆうひ",
        start_msg:
            "ゆうひ「それさ〜、効率悪くね？w」\n" +
            "あおい「うん、でも丁寧にやりたくて」\n" +
            "ゆうひ「真面目かよ〜」\n" +
            "あおい「……それ、褒めてる？」",
        text: "互いのやり方を尊重してください。",
        kana: "たがいのやりかたをそんちょうしてください。",
        romaji: "tagai no yarikata o sonchou shite kudasai",
        reaction_good:
            "ゆうひ「まぁ好きにやればいっかw」\n" +
            "あおい「ありがとう」",
        reaction_bad:
            "ゆうひ「説教くさw」\n" +
            "あおい「少し強い言い方かも…」",
        images: ["aoi.png", "yuhi.png"]
    },
    {
        id: "chat_mugi_honoka_crash",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ほのか",
        start_msg:
            "むぎ「それ絶対楽しいって！！」\n" +
            "ほのか「根拠は？」\n" +
            "むぎ「え！？楽しいから！！」\n" +
            "ほのか「論理破綻してる」\n" +
            "むぎ「えぇ〜！？ひどくない！？」",
        text: "感覚と論理、両方大事にしよう。",
        kana: "かんかくとろんり、りょうほうだいじにしよう。",
        romaji: "kankaku to ronri, ryouhou daiji ni shiyou",
        reaction_good:
            "ほのか「まぁ…一理はある」\n" +
            "むぎ「やったー！！」",
        reaction_bad:
            "ほのか「曖昧すぎ」\n" +
            "むぎ「先生どっちの味方！？」",
        images: ["mugi.png", "honoka.png"]
    },
    {
        id: "chat_ritsu_rinon_tension",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「この表現、芸術的じゃない？」\n" +
            "りのん「点数に出なきゃ意味ない」\n" +
            "りつ「夢なさすぎ…」\n" +
            "りのん「勝たなきゃ歌えないでしょ」",
        text: "目的の違いを言語化してみよう。",
        kana: "もくてきのちがいをごげんかしてみよう。",
        romaji: "mokuteki no chigai o gogenka shite miyou",
        reaction_good:
            "りつ「……なるほどね」\n" +
            "りのん「理解が早い」",
        reaction_bad:
            "りのん「抽象的すぎ」\n" +
            "りつ「それ、逃げじゃない？」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_noriomi_kuu_dry",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「協力って幻想だよね」\n" +
            "くう「……同意」\n" +
            "のりおみ「でも表向きは必要」\n" +
            "くう「だから疲れる」",
        text: "最低限の連携を意識してください。",
        kana: "さいていげんのれんけいをいしきしてください。",
        romaji: "saiteigen no renkei o ishiki shite kudasai",
        reaction_good:
            "のりおみ「まぁ、建前としてはね」\n" +
            "くう「……了解」",
        reaction_bad:
            "くう「理想論」\n" +
            "のりおみ「綺麗事ですね」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_nagisa_honoka_clash",
        subtype: "chat",
        group: "1-3",
        sender: "なぎさ＆ほのか",
        start_msg:
            "なぎさ「否定から入るのやめなよ」\n" +
            "ほのか「間違ってるから」\n" +
            "なぎさ「正しさだけで生きてんの？」\n" +
            "ほのか「無駄が嫌いなだけ」",
        text: "価値観の違いを認識しましょう。",
        kana: "かちかんのちがいをにんしきしましょう。",
        romaji: "kachikan no chigai o ninshiki shimashou",
        reaction_good:
            "ほのか「……まぁ、そうかも」\n" +
            "なぎさ「でしょ」",
        reaction_bad:
            "なぎさ「上からすぎ」\n" +
            "ほのか「抽象論」",
        images: ["nagisa.png", "honoka.png"]
    },
    { 
        id: "chat_yuhi_rinon_ritsu_tease",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆りのん＆りつ",
        start_msg:
            "ゆうひ「なぁなぁw りのんとりつ、今日も距離近くね？w」\n" +
            "りのん「は？別に普通だけど」\n" +
            "りつ「ふふ☆美しい者同士、引力が働くのは自然だろ？」\n" +
            "ゆうひ「うわ出たwww 自己肯定感銀河w」\n" +
            "りのん「茶化すなら黙ってて。集中切れる」\n" +
            "ゆうひ「はいはいw でもさー、周りから見たらもう夫婦漫才だからw」",
        text: "落ち着いて話しなさい。", 
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "りつ「ふふ、先生の言う通りだね☆」\n" +
            "りのん「……まぁ、今は我慢する」\n" +
            "ゆうひ「ちぇー、つまんねw」",
        reaction_bad:
            "ゆうひ「日本語崩壊してんぞ先生w」\n" +
            "りのん「指示が曖昧すぎ」",
        images: ["yuhi.png", "rinon.png", "ritsu.png"]
    },
    { 
        id: "chat_kuu_soji_irritate",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆そうじ",
        start_msg:
            "そうじ「なぁくう、もっと輪に入ればいいじゃん！」\n" +
            "くう「……別に」\n" +
            "そうじ「その『一人上等』ムーブ、逆にダサくね？」\n" +
            "くう「……チッ」\n" +
            "そうじ「お、舌打ち！今のは刺さった？」\n" +
            "くう「……黙れ。お前に測られる筋合いない」",
        text: "落ち着きなさい。", 
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "くう「……すみません」\n" +
            "そうじ「はいはい、今日はここまで！」",
        reaction_bad:
            "くう「……先生、誤字」\n" +
            "そうじ「今の空気でそれは寒いってw」",
        images: ["kuu.png", "soji.png"]
    },
    { 
        id: "chat_yui_meri_emotional",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆めり",
        start_msg:
            "ゆい「ねぇめり……わたし、今日嫌われてたかも」\n" +
            "めり「えっ！？そ、そんなこと……もしそうなら私の配慮不足だよ……」\n" +
            "ゆい「やっぱり……わたしが重いからだよね」\n" +
            "めり「ち、違うよ！ゆいちゃんは可愛いし……！」\n" +
            "ゆい「……ほんと？じゃあ、そばいて」\n" +
            "めり「う、うん……失礼じゃないなら……」",
        text: "落ち着いて距離を保ちましょう。", 
        kana: "おちついてきょりをたもちましょう。",
        romaji: "ochitsuite kyori wo tamochimashou",
        reaction_good:
            "ゆい「……先生、空気読めない」\n" +
            "めり「す、すみません……」",
        reaction_bad:
            "ゆい「誤字あると情緒もっと不安定になるんだけど」\n" +
            "めり「先生……確認した方が……」",
        images: ["yui.png", "meri.png"]
    },
    {
        id: "chat_aoi_honoka_clash",
        subtype: "chat",
        group: "1-3",
        sender: "あおい＆ほのか",
        start_msg:
            "ほのか「そのやり方、非効率すぎない？」\n" +
            "あおい「そうかな…。でも、ちゃんと意味はあると思うよ」\n" +
            "ほのか「意味がある≠正解、でしょ？」\n" +
            "あおい「正解じゃなくても、必要なことはあるよ」\n" +
            "ほのか「感情論だね。それ」\n" +
            "あおい「……感情も、判断材料だよ」",
        text: "一度立ち止まって、相手の意見を整理しよう。",
        kana: "いちどたちどまって、あいてのいけんをせいりしよう。",
        romaji: "ichido tachidomatte, aite no iken o seiri shiyou",
        reaction_good:
            "ほのか「……まぁ、聞くだけは聞くか」\n" +
            "あおい「うん、ありがとう」",
        reaction_bad:
            "ほのか「その言い方、論点ズレてる」\n" +
            "あおい「先生、今のはちょっと違うかも…」",
        images: ["aoi.png", "honoka.png"]
    },
    {
        id: "chat_tayori_kisora_soft",
        subtype: "chat",
        group: "1-3",
        sender: "たより＆きそら",
        start_msg:
            "きそら「……それ、みんなの前で言わなきゃだめ？」\n" +
            "たより「無理なら、僕が横にいるよ」\n" +
            "きそら「……下の名前で呼んでくれる？」\n" +
            "たより「きそら。大丈夫、ゆっくりでいい」\n" +
            "きそら「……ありがと」",
        text: "無理のない形で進めよう。",
        kana: "むりのないかたちですすめよう。",
        romaji: "muri no nai katachi de susumeyou",
        reaction_good:
            "たより「その方が続くしね」\n" +
            "きそら「……うん」",
        reaction_bad:
            "たより「先生、急かしすぎかも」\n" +
            "きそら「……こわい」",
        images: ["tayori.png", "kisora.png"]
    },
    {
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「それでさ〜！！めっちゃさ〜！！」\n" +
            "ゆうひ「話なげぇw 要点3秒で言え」\n" +
            "むぎ「え！？今の超重要！！」\n" +
            "ゆうひ「重要そうに見えねぇw」",
        text: "順番に話しなさい。",
        kana: "じゅんばんにはなしなさい。",
        romaji: "junban ni hanashi nasai",
        reaction_good:
            "ゆうひ「はーい先生w」\n" +
            "むぎ「えへへ！がんばる〜！」",
        reaction_bad:
            "ゆうひ「その注意、雑すぎ」\n" +
            "むぎ「え！？今どっちのこと！？」",
        images: ["mugi.png", "yuhi.png"]
    },
    {
        id: "chat_ritsu_rinon_pride",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「ボクの仕上がり、完璧じゃない？」\n" +
            "りのん「結果は数字で出るよ」\n" +
            "りつ「え、夢なさすぎない？」\n" +
            "りのん「夢は勝ってから見なさい」",
        text: "評価基準の違いを認めよう。",
        kana: "ひょうかきじゅんのちがいをみとめよう。",
        romaji: "hyouka kijun no chigai o mitomeyou",
        reaction_good:
            "りつ「……まぁ、それも美学か」\n" +
            "りのん「理解が早くて助かる」",
        reaction_bad:
            "りのん「先生、感覚論すぎる」\n" +
            "りつ「それ、フォローになってないよ？」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_soji_kuu_irritate",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆くう",
        start_msg:
            "そうじ「なぁなぁ、その顔なに考えてんの？」\n" +
            "くう「……別に」\n" +
            "そうじ「絶対なんかあるじゃん！」\n" +
            "くう「詮索すんな。舌打ちするぞ」",
        text: "距離感を大切にしよう。",
        kana: "きょりかんをたいせつにしよう。",
        romaji: "kyorikan o taisetsu ni shiyou",
        reaction_good:
            "そうじ「はいはい、了解〜」\n" +
            "くう「……助かる」",
        reaction_bad:
            "くう「その介入、最悪」\n" +
            "そうじ「え、地雷踏んだ？」",
        images: ["soji.png", "kuu.png"]
    },
    {
        id: "chat_soji_soshi_gap",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆そうし",
        start_msg:
            "そうじ「なぁそうし！それ特許取れんじゃね？」\n" +
            "そうし「えっ、そ、そんな大それたことじゃ…」\n" +
            "そうじ「いや絶対イケるって！イキってこ！」\n" +
            "そうし「イキるのは、ちょっと……こわいかな」\n" +
            "そうじ「弱気だな〜！火星人なのに！」\n" +
            "そうし「地球では慎重が大事なんだ…」",
        text: "一度、現実的な手順を整理しましょう。",
        kana: "いちど、げんじつてきなてじゅんをせいりしましょう。",
        romaji: "ichido, genjitsuteki na tejun o seiri shimashou",
        reaction_good:
            "そうじ「お、じゃあ段階踏むか！」\n" +
            "そうし「はい…それなら安心です」",
        reaction_bad:
            "そうじ「その言い方、夢潰してない？」\n" +
            "そうし「先生、話が飛んでます…」",
        images: ["soji.png", "soshi.png"]
    },
    {
        id: "chat_aoi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "あおい＆ゆうひ",
        start_msg:
            "ゆうひ「それさ〜、効率悪くね？w」\n" +
            "あおい「うん、でも丁寧にやりたくて」\n" +
            "ゆうひ「真面目かよ〜」\n" +
            "あおい「……それ、褒めてる？」",
        text: "互いのやり方を尊重してください。",
        kana: "たがいのやりかたをそんちょうしてください。",
        romaji: "tagai no yarikata o sonchou shite kudasai",
        reaction_good:
            "ゆうひ「まぁ好きにやればいっかw」\n" +
            "あおい「ありがとう」",
        reaction_bad:
            "ゆうひ「説教くさw」\n" +
            "あおい「少し強い言い方かも…」",
        images: ["aoi.png", "yuhi.png"]
    },
    {
        id: "chat_mugi_honoka_crash",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ほのか",
        start_msg:
            "むぎ「それ絶対楽しいって！！」\n" +
            "ほのか「根拠は？」\n" +
            "むぎ「え！？楽しいから！！」\n" +
            "ほのか「論理破綻してる」\n" +
            "むぎ「えぇ〜！？ひどくない！？」",
        text: "感覚と論理、両方大事にしよう。",
        kana: "かんかくとろんり、りょうほうだいじにしよう。",
        romaji: "kankaku to ronri, ryouhou daiji ni shiyou",
        reaction_good:
            "ほのか「まぁ…一理はある」\n" +
            "むぎ「やったー！！」",
        reaction_bad:
            "ほのか「曖昧すぎ」\n" +
            "むぎ「先生どっちの味方！？」",
        images: ["mugi.png", "honoka.png"]
    },
    {
        id: "chat_ritsu_rinon_tension",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「この表現、芸術的じゃない？」\n" +
            "りのん「点数に出なきゃ意味ない」\n" +
            "りつ「夢なさすぎ…」\n" +
            "りのん「勝たなきゃ歌えないでしょ」",
        text: "目的の違いを言語化してみよう。",
        kana: "もくてきのちがいをごげんかしてみよう。",
        romaji: "mokuteki no chigai o gogenka shite miyou",
        reaction_good:
            "りつ「……なるほどね」\n" +
            "りのん「理解が早い」",
        reaction_bad:
            "りのん「抽象的すぎ」\n" +
            "りつ「それ、逃げじゃない？」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_noriomi_kuu_dry",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「協力って幻想だよね」\n" +
            "くう「……同意」\n" +
            "のりおみ「でも表向きは必要」\n" +
            "くう「だから疲れる」",
        text: "最低限の連携を意識してください。",
        kana: "さいていげんのれんけいをいしきしてください。",
        romaji: "saiteigen no renkei o ishiki shite kudasai",
        reaction_good:
            "のりおみ「まぁ、建前としてはね」\n" +
            "くう「……了解」",
        reaction_bad:
            "くう「理想論」\n" +
            "のりおみ「綺麗事ですね」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_nagisa_honoka_clash",
        subtype: "chat",
        group: "1-3",
        sender: "なぎさ＆ほのか",
        start_msg:
            "なぎさ「否定から入るのやめなよ」\n" +
            "ほのか「間違ってるから」\n" +
            "なぎさ「正しさだけで生きてんの？」\n" +
            "ほのか「無駄が嫌いなだけ」",
        text: "価値観の違いを認識しましょう。",
        kana: "かちかんのちがいをにんしきしましょう。",
        romaji: "kachikan no chigai o ninshiki shimashou",
        reaction_good:
            "ほのか「……まぁ、そうかも」\n" +
            "なぎさ「でしょ」",
        reaction_bad:
            "なぎさ「上からすぎ」\n" +
            "ほのか「抽象論」",
        images: ["nagisa.png", "honoka.png"]
    },
    { 
        id: "chat_yuhi_rinon_ritsu_tease",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆りのん＆りつ",
        start_msg:
            "ゆうひ「なぁなぁw りのんとりつ、今日も距離近くね？w」\n" +
            "りのん「は？別に普通だけど」\n" +
            "りつ「ふふ☆美しい者同士、引力が働くのは自然だろ？」\n" +
            "ゆうひ「うわ出たwww 自己肯定感銀河w」\n" +
            "りのん「茶化すなら黙ってて。集中切れる」\n" +
            "ゆうひ「はいはいw でもさー、周りから見たらもう夫婦漫才だからw」",
        text: "落ち着いて話しなさい。", 
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "りつ「ふふ、先生の言う通りだね☆」\n" +
            "りのん「……まぁ、今は我慢する」\n" +
            "ゆうひ「ちぇー、つまんねw」",
        reaction_bad:
            "ゆうひ「日本語崩壊してんぞ先生w」\n" +
            "りのん「指示が曖昧すぎ」",
        images: ["yuhi.png", "rinon.png", "ritsu.png"]
    },
    { 
        id: "chat_kuu_soji_irritate",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆そうじ",
        start_msg:
            "そうじ「なぁくう、もっと輪に入ればいいじゃん！」\n" +
            "くう「……別に」\n" +
            "そうじ「その『一人上等』ムーブ、逆にダサくね？」\n" +
            "くう「……チッ」\n" +
            "そうじ「お、舌打ち！今のは刺さった？」\n" +
            "くう「……黙れ。お前に測られる筋合いない」",
        text: "落ち着きなさい。", 
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "くう「……すみません」\n" +
            "そうじ「はいはい、今日はここまで！」",
        reaction_bad:
            "くう「……先生、誤字」\n" +
            "そうじ「今の空気でそれは寒いってw」",
        images: ["kuu.png", "soji.png"]
    },
    { 
        id: "chat_yui_meri_emotional",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆めり",
        start_msg:
            "ゆい「ねぇめり……わたし、今日嫌われてたかも」\n" +
            "めり「えっ！？そ、そんなこと……もしそうなら私の配慮不足だよ……」\n" +
            "ゆい「やっぱり……わたしが重いからだよね」\n" +
            "めり「ち、違うよ！ゆいちゃんは可愛いし……！」\n" +
            "ゆい「……ほんと？じゃあ、そばいて」\n" +
            "めり「う、うん……失礼じゃないなら……」",
        text: "落ち着いて距離を保ちましょう。", 
        kana: "おちついてきょりをたもちましょう。",
        romaji: "ochitsuite kyori wo tamochimashou",
        reaction_good:
            "ゆい「……先生、空気読めない」\n" +
            "めり「す、すみません……」",
        reaction_bad:
            "ゆい「誤字あると情緒もっと不安定になるんだけど」\n" +
            "めり「先生……確認した方が……」",
        images: ["yui.png", "meri.png"]
    },
    { 
        id: "chat_meri_misaki_care",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆みさき",
        start_msg:
            "めり「みさきちゃん、今日ちょっと元気なくない？」\n" +
            "みさき「えっ…？そんなこと…ない、と思う…」\n" +
            "めり「無理してる感じする。無理しなくていいよ」\n" +
            "みさき「……それ、めりちゃんも同じだと思う」\n" +
            "めり「え」\n" +
            "みさき「めりちゃん、いつも先に自分責めるから…見てて苦しい」\n" +
            "めり「……ごめん。でも、放っておけない」",
        text: "お互い無理しすぎないようにしてください。", 
        kana: "おたがいむりしすぎないようにしてください。",
        romaji: "otagai muri shisuginai you ni shite kudasai",
        reaction_good:
            "みさき「……はい」\n" +
            "めり「うん、気をつける」",
        reaction_bad:
            "めり「先生、誤字あると真面目な話が崩れる」\n" +
            "みさき「読み返した方がいいと思います…」",
        images: ["meri.png", "misaki.png"]
    },
    { 
        id: "chat_hibiki_yuhi_hell",
        subtype: "chat",
        group: "1-3",
        sender: "ひびき＆ゆうひ",
        start_msg:
            "ひびき「おいコラァ！！朝から誰がうるさい言うた！！」\n" +
            "ゆうひ「いや事実な？w コケコッコー目覚ましw」\n" +
            "ひびき「なめとんかワレ！！！」\n" +
            "ゆうひ「こっわw 声量で殴るタイプじゃんw」\n" +
            "ひびき「一回外出ろや！！！」\n" +
            "ゆうひ「はいはいw 鳴き声デカいだけの鶏さん乙w」",
        text: "教室では静かにしてください。", 
        kana: "きょうしつではしずかにしてください。",
        romaji: "kyoushitsu dewa shizuka ni shite kudasai",
        reaction_good:
            "ひびき「チッ……」\n" +
            "ゆうひ「はーい先生w」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて説得力ゼロw」\n" +
            "ひびき「そんなんで止まる思とんのか」",
        images: ["hibiki.png", "yuhi.png"]
    },
    { 
        id: "chat_kisora_tayori_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「……たより」\n" +
            "たより「どうした？」\n" +
            "きそら「大人になるの、こわい」\n" +
            "たより「うん」\n" +
            "きそら「ずっと…今のままじゃだめ？」\n" +
            "たより「だめじゃないよ。逃げたい時は逃げていい」\n" +
            "きそら「……じゃあ、もうちょっとここにいる」",
        text: "無理のない距離でお願いします。", 
        kana: "むりのないきょりでおねがいします。",
        romaji: "muri no nai kyori de onegai shimasu",
        reaction_good:
            "たより「はい、先生」\n" +
            "きそら「……うん」",
        reaction_bad:
            "きそら「せんせい、よみづらい」\n" +
            "たより「今の雰囲気では致命的ですね」",
        images: ["kisora.png", "tayori.png"]
    },
    { 
        id: "chat_rinon_yui_mismatch",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ゆい",
        start_msg:
            "ゆい「ねぇりのんちゃん、わたし今日どうだった？」\n" +
            "りのん「正直？集中力足りない」\n" +
            "ゆい「……やっぱり」\n" +
            "りのん「結果で見てるだけ。感情は評価外」\n" +
            "ゆい「それ、きつい」\n" +
            "りのん「でも事実」",
        text: "言い方に配慮しましょう。", 
        kana: "いいかたにはいりょしましょう。",
        romaji: "iikata ni hairyo shimashou",
        reaction_good:
            "りのん「……気をつけます」\n" +
            "ゆい「……うん」",
        reaction_bad:
            "ゆい「先生、誤字あると傷増えるんだけど」\n" +
            "りのん「説得力落ちてます」",
        images: ["rinon.png", "yui.png"]
    },
    { 
        id: "chat_kouta_identity",
        subtype: "chat",
        group: "1-3",
        sender: "こうた",
        start_msg:
            "こうた「……正解を選んでるだけなのに」\n" +
            "こうた「どうして苦しいんだろうな」\n" +
            "こうた「皆が期待する“こうた”をやってるだけで」\n" +
            "こうた「本音なんて……わからなくなってきた」",
        text: "無理をしすぎていませんか。", 
        kana: "むりをしすぎていませんか。",
        romaji: "muri o shisugite imasen ka",
        reaction_good:
            "こうた「……ありがとうございます」\n" +
            "こうた「少し、考えてみます」",
        reaction_bad:
            "こうた「先生、その誤字……今は刺さります」\n" +
            "こうた「本気なら、ちゃんと書いてください」",
        images: ["kouta.png"]
    },
    { 
        id: "chat_noriomi_yui_hell",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "ゆい「ねぇ、のりおみってさ」\n" +
            "のりおみ「はいはい、どうかした？」\n" +
            "ゆい「人のこと信用してないでしょ」\n" +
            "のりおみ「……否定はしない」\n" +
            "ゆい「わたしも。愛とか、全部嘘だと思ってる」\n" +
            "のりおみ「奇遇だね」\n" +
            "ゆい「でも、ひとりは嫌」\n" +
            "のりおみ「ああ……それが一番、厄介だ」",
        text: "距離感を考えましょう。", 
        kana: "きょりかんをかんがえましょう。",
        romaji: "kyorikan o kangaemashou",
        reaction_good:
            "のりおみ「配慮、ありがとうございます」\n" +
            "ゆい「……うん」",
        reaction_bad:
            "ゆい「先生、誤字ってると信用できない」\n" +
            "のりおみ「今の文、論理も崩れてますよ」",
        images: ["noriomi.png", "yui.png"]
    },
    { 
        id: "chat_kouta_kuu_clash",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆くう",
        start_msg:
            "こうた「くうは、どうして何も期待しないんだ？」\n" +
            "くう「期待するだけ無駄だからだろ」\n" +
            "こうた「それじゃ……何も始まらない」\n" +
            "くう「始めた結果が今だ」\n" +
            "こうた「……逃げてるだけじゃないのか？」\n" +
            "くう「……チッ」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "こうた「……すみません」\n" +
            "くう「……」",
        reaction_bad:
            "くう「誤字ってんぞ」\n" +
            "こうた「今は些細なミスが重いです」",
        images: ["kouta.png", "kuu.png"]
    },
    { 
        id: "chat_kisora_meri_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆めり",
        start_msg:
            "きそら「……めり」\n" +
            "めり「なに？」\n" +
            "きそら「優しくされると、こわい」\n" +
            "めり「え」\n" +
            "きそら「期待されてる気がして……逃げたくなる」\n" +
            "めり「……じゃあ、逃げていいよ」\n" +
            "きそら「……それでも、ここにいる」",
        text: "無理に支え合わなくて大丈夫です。", 
        kana: "むりにささえあわなくてだいじょうぶです。",
        romaji: "muri ni sasaeawana kute daijoubu desu",
        reaction_good:
            "めり「……うん」\n" +
            "きそら「……」",
        reaction_bad:
            "きそら「せんせい、よみづらい」\n" +
            "めり「誤字、今はきつい」",
        images: ["kisora.png", "meri.png"]
    },
    {
        id: "chat_yui_breakdown",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ねぇ……先生」\n" +
            "ゆい「ゆい、ちゃんと笑ってたよね？」\n" +
            "ゆい「可愛いって言われるように、頑張ってたよね？」\n" +
            "ゆい「なのにさ……なんで、誰も残らないの？」\n" +
            "ゆい「……ねぇ」\n" +
            "ゆい「ゆい、何か壊れてる？」",
        text: "落ち着きなさい。",
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "ゆい「……うん」\n" +
            "ゆい「でもさ、壊れたままでも……いいよね？」",
        reaction_bad:
            "ゆい「……なにそれ」\n" +
            "ゆい「誤字るくらいなら、見ないで」",
        images: ["yui.png"]
    },
    {
        id: "chat_ritsu_kisora",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆きそら",
        start_msg:
            "りつ「やあ☆仔猫ちゃん！」\n" +
            "きそら「ひゃ……っ」\n" +
            "りつ「その反応、最高にキュートだね」\n" +
            "きそら「……名前で、呼んで」\n" +
            "りつ「え？」\n" +
            "きそら「きそら、って……」",
        text: "からかわないの。",
        kana: "からかわないの。",
        romaji: "karakawanai no",
        reaction_good:
            "りつ「……失礼。きそらちゃん」\n" +
            "きそら「……うん」",
        reaction_bad:
            "りつ「先生、入力雑すぎない？」\n" +
            "きそら「……読みにくい」",
        images: ["ritsu.png", "kisora.png"]
    },
    {
        id: "chat_honoka_yuhi",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆ゆうひ",
        start_msg:
            "ほのか「その理屈、穴だらけ」\n" +
            "ゆうひ「は？ どこがw」\n" +
            "ほのか「全部」\n" +
            "ゆうひ「草。自分賢いと思ってそう」\n" +
            "ほのか「思ってるけど？」",
        text: "喧嘩しない。",
        kana: "けんかしない。",
        romaji: "kenka shinai",
        reaction_good:
            "ゆうひ「チッ」\n" +
            "ほのか「静かに論破するだけ」",
        reaction_bad:
            "ゆうひ「先生まで雑魚ムーブw」\n" +
            "ほのか「誤字って注意とか笑う」",
        images: ["honoka.png", "yuhi.png"]
    },
    {
        id: "chat_kouta_rinon_mask",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆りのん",
        start_msg:
            "りのん「こうた、今回の結果どう思う？」\n" +
            "こうた「……問題ないよ」\n" +
            "りのん「感想じゃなくて本音」\n" +
            "こうた「……」\n" +
            "りのん「黙るってことは、不満あり」\n" +
            "こうた「……正解をなぞってるだけで、何も残らない」",
        text: "言い方に気をつけなさい。",
        kana: "いいかたにきをつけなさい。",
        romaji: "iikata ni ki o tsukenasai",
        reaction_good:
            "こうた「……すみません。でも、本音です」\n" +
            "りのん「それでいい」",
        reaction_bad:
            "りのん「誤字って注意は説得力ない」\n" +
            "こうた「先生、落ち着いてください」",
        images: ["kouta.png", "rinon.png"]
    },
    {
        id: "chat_honoka_aoi_clash",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆あおい",
        start_msg:
            "ほのか「そのやり方、効率悪すぎ」\n" +
            "あおい「そうかな」\n" +
            "ほのか「感情論」\n" +
            "あおい「別に、間違ってないならいいよ」\n" +
            "ほのか「……イラつくんだけど」\n" +
            "あおい「ごめんね。でも変えない」",
        text: "言い合いはやめなさい。",
        kana: "いいあいはやめなさい。",
        romaji: "iiai wa yamenasai",
        reaction_good:
            "ほのか「チッ」\n" +
            "あおい「うん」",
        reaction_bad:
            "ほのか「先生まで雑」\n" +
            "あおい「読みづらいね」",
        images: ["honoka.png", "aoi.png"]
    },
    {
        id: "chat_mugi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ひびき",
        start_msg:
            "むぎ「ねぇねぇ！今日の夢さぁ！！！」\n" +
            "ひびき「コケコッコー！！！」\n" +
            "むぎ「声でっか！！！」\n" +
            "ひびき「お前もな！！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "むぎ「はーい！」\n" +
            "ひびき「無理！！」",
        reaction_bad:
            "ひびき「誤字多すぎやろ！」\n" +
            "むぎ「先生あわてすぎ〜！」",
        images: ["mugi.png", "hibiki.png"]
    },
    {
        id: "chat_noriomi_kuu_conspiracy",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「この世界ってさ、信じた方が損する仕様だよね」\n" +
            "くう「……最初から期待しなきゃいい」\n" +
            "のりおみ「期待しない、信用しない、でも表面上は合わせる」\n" +
            "くう「合理的」\n" +
            "のりおみ「共犯だね」\n" +
            "くう「……言葉選び最悪」",
        text: "仲良く話し合いなさい。",
        kana: "なかよくはなしあいなさい。",
        romaji: "nakayoku hanashia inasai",
        reaction_good:
            "のりおみ「十分仲良しですよ」\n" +
            "くう「これで」",
        reaction_bad:
            "くう「先生、誤字」\n" +
            "のりおみ「信用度下がりますね」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_ritsu_soji_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆あつし",
        start_msg:
            "りつ「やあ☆ 今日も世界一美しい僕から始まる朝だね！」\n" +
            "そうじ「年中イキっていこうぜ！テンション上げてこ！」\n" +
            "あつし「朝が暗いならさ〜、自分が光ればよくない？」\n" +
            "りつ「さすが王子☆発想が宇宙！」\n" +
            "そうじ「意味わかんねぇけど最高！」",
        text: "少し落ち着きなさい。",
        kana: "すこしおちつきなさい。",
        romaji: "sukoshi ochitsuki nasai",
        reaction_good:
            "りつ「ふふ、抑えてるよ☆」\n" +
            "そうじ「これで？」\n" +
            "あつし「まだ光ってない！」",
        reaction_bad:
            "そうじ「誤字ってんじゃんw」\n" +
            "りつ「先生、指先もケアしよう☆」",
        images: ["ritsu.png", "soji.png", "atsushi.png"]
    },
    {
        id: "chat_yuhi_honoka",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ほのか",
        start_msg:
            "ゆうひ「その考え浅くね？w」\n" +
            "ほのか「は？論点そこじゃない」\n" +
            "ゆうひ「逃げたw」\n" +
            "ほのか「煽りしかできないなら黙って」",
        text: "口調に気をつけなさい。",
        kana: "くちょうにきをつけなさい。",
        romaji: "kuchou ni ki o tsukenasai",
        reaction_good:
            "ゆうひ「はーいw」\n" +
            "ほのか「信用しない」",
        reaction_bad:
            "ほのか「誤字で注意は草」\n" +
            "ゆうひ「先生も煽られてるw」",
        images: ["yuhi.png", "honoka.png"]
    },
    {
        id: "chat_meri_kisora",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆きそら",
        start_msg:
            "めり「ご、ごめんね…邪魔だったよね…」\n" +
            "きそら「ううん…大丈夫…」\n" +
            "めり「でも…気を悪くしたなら…」\n" +
            "きそら「ほんとに…大丈夫だから…」",
        text: "ちゃんと話しなさい。",
        kana: "ちゃんとはなしなさい。",
        romaji: "chanto hanashi nasai",
        reaction_good:
            "めり「は、はい…」\n" +
            "きそら「……がんばる」",
        reaction_bad:
            "きそら「せんせ…誤字…」\n" +
            "めり「すみません…」",
        images: ["meri.png", "kisora.png"]
    },
    {
        id: "chat_mugi_hibiki_chaos2",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ひびき",
        start_msg:
            "むぎ「ねぇねぇねぇ！！聞いて！！！」\n" +
            "ひびき「コケコッコーー！！！」\n" +
            "むぎ「張り合うな！！！」\n" +
            "ひびき「お前が先や！！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "むぎ「むりー！」\n" +
            "ひびき「無理やな！」",
        reaction_bad:
            "ひびき「先生誤字！」\n" +
            "むぎ「先生もテンパってる〜！」",
        images: ["mugi.png", "hibiki.png"]
    },
    {
        id: "chat_noriomi_kuu_emotion_drop",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……ねぇ、知ってる？感情ってさ、合理性のノイズなんだよ」\n" +
            "くう「は。急に哲学かよ」\n" +
            "のりおみ「笑うでしょ。でも“好き”とか“信じる”とか、全部錯覚だ」\n" +
            "くう「……」\n" +
            "のりおみ「壊れてしまえばいいんだよ。そうすれば期待もしなくて済む」\n" +
            "くう「……それ、平気なフリしてるだけだろ」\n" +
            "のりおみ「フリ？……違うよ。もう“無い”んだ」",
        text: "のりおみくん、大丈夫ですか？", 
        kana: "のりおみくん、だいじょうぶですか？",
        romaji: "noriomi-kun, daijoubu desu ka?",
        reaction_good:
            "のりおみ「……ご心配なく。問題は発生していません」\n" +
            "くう「先生、深入りしない方がいい」",
        reaction_bad:
            "のりおみ「敬語の助詞、ズレてますよ。心配する前に日本語を」\n" +
            "くう「そこ直すとこかよ」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_ritsu_honoka_break",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆ほのか",
        start_msg:
            "りつ「やあ☆今日も完成度高いでしょ、僕」\n" +
            "ほのか「で？」\n" +
            "りつ「……で、とは？」\n" +
            "ほのか「中身が伴ってないって話」\n" +
            "りつ「っ……努力はしてるよ」\n" +
            "ほのか「努力して“評価されたい顔”してるだけじゃん」\n" +
            "りつ「……」\n" +
            "ほのか「自己愛で誤魔化すの、そろそろ限界じゃない？」",
        text: "言い過ぎではありませんか？", 
        kana: "いいすぎではありませんか？",
        romaji: "iisugi dewa arimasen ka?",
        reaction_good:
            "りつ「……いい。先生、放っといて」\n" +
            "ほのか「ほら、図星」",
        reaction_bad:
            "ほのか「“ありませんか”じゃなくて“ありません”ね。指摘するなら正確に」\n" +
            "りつ「……もうやめて」",
        images: ["ritsu.png", "honoka.png"]
    },
    {
        id: "chat_yui_tayori_depend",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆たより",
        start_msg:
            "ゆい「ねぇ……たよりは、ゆいのこと嫌いにならない？」\n" +
            "たより「そんなことないよ」\n" +
            "ゆい「ほんと？じゃあ、ずっと一緒にいてくれる？」\n" +
            "たより「……それは」\n" +
            "ゆい「やっぱり無理なんだ。みんなそう」\n" +
            "たより「違う。大事だから、依存にはなりたくない」",
        text: "少し距離を置いてみては？", 
        kana: "すこしきょりをおいてみては？",
        romaji: "sukoshi kyori o oite mite wa?",
        reaction_good:
            "ゆい「……じゃあ、考える」\n" +
            "たより「それでいい」",
        reaction_bad:
            "ゆい「“置いて”じゃなくて“おいて”だよ、先生」\n" +
            "たより「今そこ？」",
        images: ["yui.png", "tayori.png"]
    },
    {
        id: "chat_soshi_meri_gentle",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆めり",
        start_msg:
            "そうし「……これ、特許出せるかな」\n" +
            "めり「す、すごいと思う……！」\n" +
            "そうし「ほんと？」\n" +
            "めり「うん。発想がとても、素敵で……」\n" +
            "そうし「……ありがとう。なんか、救われた」",
        text: "良い関係ですね", 
        kana: "よいかんけいですね",
        romaji: "yoi kankei desu ne",
        reaction_good:
            "めり「そ、そんな……恐縮です……」\n" +
            "そうし「へへ」",
        reaction_bad:
            "そうし「“関係”の送り仮名、そこ？」\n" +
            "めり「すみません……」",
        images: ["soshi.png", "meri.png"]
    },
    {
        id: "chat_tayori_kisora_jealousy",
        subtype: "chat",
        group: "1-3",
        sender: "たより＆きそら",
        start_msg:
            "きそら「……たより、最近ゆいちゃんとばっかり話してるね」\n" +
            "たより「え？ああ、困ってそうだったから」\n" +
            "きそら「……そっか」\n" +
            "たより「きそらは大丈夫だと思ってた」\n" +
            "きそら「……うん。大丈夫だよ」\n" +
            "（きそらは目を逸らした）",
        text: "きそらさんも気にかけてあげてください", 
        kana: "きそらさんもきにかけてあげてください",
        romaji: "kisora-san mo ki ni kakete agete kudasai",
        reaction_good:
            "たより「……ごめん。僕の配慮不足だった」\n" +
            "きそら「……名前で呼んで」",
        reaction_bad:
            "きそら「“気にかける”の送り仮名、違うよ……」\n" +
            "たより「今そこ！？」",
        images: ["tayori.png", "kisora.png"]
    },
    {
        id: "chat_ritsu_soshi_soft_break",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうし",
        start_msg:
            "りつ「……正直さ、もう自分がわからない」\n" +
            "そうし「うん」\n" +
            "りつ「……否定しないんだ？」\n" +
            "そうし「だって、今はそうなんでしょ」\n" +
            "りつ「……それ、救われるようで刺さる」\n" +
            "そうし「でも、りつは“綺麗でいよう”としてる」\n" +
            "りつ「……っ」",
        text: "二人とも、良い話し合いですね", 
        kana: "ふたりとも、よいはなしあいですね",
        romaji: "futari tomo, yoi hanashiai desu ne",
        reaction_good:
            "りつ「……先生、今は放っといて」\n" +
            "そうし「うん」",
        reaction_bad:
            "りつ「“話し合い”の送り仮名、そこ間違える？」\n" +
            "そうし「細かい……」",
        images: ["ritsu.png", "soshi.png"]
    },
    {
        id: "chat_noriomi_collapse",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ",
        start_msg:
            "のりおみ「……全部、無意味だ」\n" +
            "のりおみ「信じても、裏切られる」\n" +
            "のりおみ「期待しても、壊れる」\n" +
            "のりおみ「だったら最初から……」",
        text: "のりおみくん、落ち着いてください", 
        kana: "のりおみくん、おちついてください",
        romaji: "noriomi-kun, ochitsuite kudasai",
        reaction_good:
            "のりおみ「……無理ですよ」",
        reaction_bad:
            "のりおみ「“落ち着く”の活用、間違ってます」",
        images: ["noriomi.png"]
    },
    {
        id: "chat_noriomi_kuu_rescue",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "くう「……逃げんな」\n" +
            "のりおみ「皮肉？」\n" +
            "くう「違う。壊れるなら、一人でやるな」\n" +
            "のりおみ「……」\n" +
            "くう「世界はクソだ。でも、それでも生きてる奴もいる」\n" +
            "のりおみ「……君は、ずるいな」",
        text: "二人とも、大丈夫ですか？", 
        kana: "ふたりとも、だいじょうぶですか？",
        romaji: "futari tomo, daijoubu desu ka?",
        reaction_good:
            "くう「……まぁな」\n" +
            "のりおみ「……一時的に、ね」",
        reaction_bad:
            "くう「先生、今は黙ってて」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_soji_atsushi_universe",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆あつし",
        start_msg:
            "そうじ「なぁあつし！人生ってさ、勢いだと思わね？」\n" +
            "あつし「うん！！勢いで宇宙行けると思う！！」\n" +
            "そうじ「だろ！？失敗とか気にしてたらつまんねーよな！」\n" +
            "あつし「失敗したら星になればいいしね！！」\n" +
            "そうじ「お前それ何回目だよ！」\n" +
            "あつし「でもさ、楽しいじゃん？」",
        text: "授業中なので静かにしてください", 
        kana: "じゅぎょうちゅうなのでしずかにしてください",
        romaji: "jugyou-chuu nanode shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はーい」\n" +
            "あつし「じゃあ心の中で宇宙行こ！！」",
        reaction_bad:
            "そうじ「“授業中”の送り仮名そこじゃねーだろ」\n" +
            "あつし「先生、地球語むずかしいね！」",
        images: ["soji.png", "atsushi.png"]
    },
    {
        id: "chat_ritsu_soshi_after",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうし",
        start_msg:
            "りつ「……今日さ、鏡見たくない」\n" +
            "そうし「じゃあ見なくていいよ」\n" +
            "りつ「即答すぎない？」\n" +
            "そうし「無理な日は、無理でいいんだと思う」\n" +
            "りつ「……そういうの、ずるいんだけど」\n" +
            "そうし「褒め言葉？」",
        text: "二人とも大丈夫ですか？", 
        kana: "ふたりともだいじょうぶですか？",
        romaji: "futari tomo daijoubu desu ka?",
        reaction_good:
            "りつ「……今はね」\n" +
            "そうし「うん」",
        reaction_bad:
            "りつ「“大丈夫”の漢字そこ違う」\n" +
            "そうし「先生、減点」",
        images: ["ritsu.png", "soshi.png"]
    },
    {
        id: "chat_kisora_aoi_quiet",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆あおい",
        start_msg:
            "きそら「……あおいちゃんは、我慢できる？」\n" +
            "あおい「できるよ。得意」\n" +
            "きそら「……すごいね」\n" +
            "あおい「でも、しない方がいいこともある」\n" +
            "きそら「……うん」",
        text: "静かに話せていますね", 
        kana: "しずかにはなせていますね",
        romaji: "shizuka ni hanaseteimasu ne",
        reaction_good:
            "あおい「はい」\n" +
            "きそら「……」",
        reaction_bad:
            "きそら「“話せて”の表記、違う」",
        images: ["kisora.png", "aoi.png"]
    },
    {
        id: "chat_soji_rinon_scold",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆りのん",
        start_msg:
            "そうじ「なぁ聞いてくれよ！オレ今日も完璧ムーブじゃね？」\n" +
            "りのん「……で？その“完璧ムーブ”で何人巻き込んだの」\n" +
            "そうじ「細けぇこと気にすんなって！ノリだよノリ！」\n" +
            "りのん「ノリで評価下げる人、初めて見たわ」\n" +
            "そうじ「え、逆にすごくね？」\n" +
            "りのん「すごくない。恥」",
        text: "少しは反省しなさい。", 
        kana: "すこしははんせいしなさい。",
        romaji: "sukoshi wa hansei shinasai",
        reaction_good:
            "そうじ「え〜先生までそっち側〜？」\n" +
            "りのん「当然でしょ。結果が全てよ」",
        reaction_bad:
            "そうじ「説教入るタイミング雑すぎw」\n" +
            "りのん「注意文、誤字ってるの論外」",
        images: ["soji.png", "rinon.png"]
    },
    {
        id: "chat_honoka_nagisa_clash",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆なぎさ",
        start_msg:
            "ほのか「それってさ、理想論すぎない？」\n" +
            "なぎさ「理想を語らないなら、何を語るの？」\n" +
            "ほのか「現実見なよ。効率悪い」\n" +
            "なぎさ「効率のために心捨てるの？」\n" +
            "ほのか「捨てるとは言ってないけど」\n" +
            "なぎさ「じゃあ、守りなよ」",
        text: "建設的に話しなさい。", 
        kana: "けんせつてきにはなしなさい。",
        romaji: "kensetsuteki ni hanashinasai",
        reaction_good:
            "ほのか「まぁ…続ける価値はあるか」\n" +
            "なぎさ「うん。否定から入らないならね」",
        reaction_bad:
            "ほのか「先生、変換ミスってない？」\n" +
            "なぎさ「言葉、ちょっとズレてる」",
        images: ["honoka.png", "nagisa.png"]
    },
    {
        id: "chat_nagisa_meri_soft",
        subtype: "chat",
        group: "1-3",
        sender: "なぎさ＆めり",
        start_msg:
            "めり「……申し訳ない。わたし、余計なことを……」\n" +
            "なぎさ「え？なんで謝るの」\n" +
            "めり「気を遣わせてちゃって……」\n" +
            "なぎさ「それ、誰に刷り込まれたの？」\n" +
            "めり「……え」\n" +
            "なぎさ「謝る癖、やめなよ」",
        text: "自分を責めすぎないで。", 
        kana: "じぶんをせめすぎないで。",
        romaji: "jibun o semesuginai de",
        reaction_good:
            "めり「……はい」\n" +
            "なぎさ「それでいい」",
        reaction_bad:
            "なぎさ「先生、日本語変だよ」\n" +
            "めり「意味が少し……」",
        images: ["nagisa.png", "meri.png"]
    },
    {
        id: "chat_soji_yuhi_darkjoke",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "ゆうひ「このクラスさ、病み多くね？w」\n" +
            "そうじ「それなw闇市かよ」\n" +
            "ゆうひ「草w」\n" +
            "そうじ「でもさ」\n" +
            "ゆうひ「ん？」\n" +
            "そうじ「オレらが一番元気なの、逆に怖くね？」",
        text: "自覚は大事ですよ。", 
        kana: "じかくはだいじですよ。",
        romaji: "jikaku wa daiji desu yo",
        reaction_good:
            "ゆうひ「確かにw」\n" +
            "そうじ「まぁいっか！」",
        reaction_bad:
            "そうじ「先生、誤字ってて草」\n" +
            "ゆうひ「意味伝わるけどw」",
        images: ["soji.png", "yuhi.png"]
    },
    {
        id: "chat_kisora_tayori_safe",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「……たよりくん」\n" +
            "たより「うん」\n" +
            "きそら「今日、しゃべれなかった」\n" +
            "たより「それでも、ここに来たね」",
        text: "無理しなくていい。", 
        kana: "むりしなくていい。",
        romaji: "muri shinakute ii",
        reaction_good:
            "きそら「……えへ」\n" +
            "たより「それで十分」",
        reaction_bad:
            "たより「先生、表現が違います」\n" +
            "きそら「意味、ちがう…」",
        images: ["kisora.png", "tayori.png"]
    },
    {
        id: "chat_honoka_aoi_flat",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆あおい",
        start_msg:
            "ほのか「それ、非効率じゃない？」\n" +
            "あおい「そうかもしれないね」\n" +
            "ほのか「……否定しないんだ」\n" +
            "あおい「必要なら直すよ」",
        text: "落ち着いて話しなさい。", 
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashinasai",
        reaction_good:
            "ほのか「……まぁいいや」\n" +
            "あおい「うん」",
        reaction_bad:
            "ほのか「先生、変換ミス」\n" +
            "あおい「意味は伝わるけどね」",
        images: ["honoka.png", "aoi.png"]
    },
    {
        id: "chat_kisora_tayori_escape",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆そうじ＆ゆうひ＆たより",
        start_msg:
            "きそら「き、きょうのぷりんと……もらっ…もらった、？」\n" +
            "そうじ「え？今なんつった？プリンが暴れた？」\n" +
            "ゆうひ「草w きそら語、翻訳必要じゃんw」\n" +
            "きそら「……っ、ちが……」\n" +
            "そうじ「顔赤っ！ほら言えよ〜」\n" +
            "きそら「……っ、たより……」\n" +
            "たより「はいはい、そこまで。からかいすぎ」\n" +
            "ゆうひ「え〜保護者来たw」\n" +
            "たより「きそら、こっちおいで。無理して話さなくていい」\n" +
            "きそら「……うん……ありがと……」",
        text: "もう少し静かにしてください。", 
        kana: "もうすこししずかにしてください。",
        romaji: "mou sukoshi shizuka ni shite kudasai",
        reaction_good:
            "たより「すみません、気をつけます」\n" +
            "きそら「……せんせ、ありがと……」",
        reaction_bad:
            "そうじ「先生、噛んでます」\n" +
            "ゆうひ「誤字より空気読んでほしw」",
        images: ["kisora.png", "soji.png", "yuhi.png", "tayori.png"]
    },
    {
        id: "chat_misaki_meri",
        subtype: "chat",
        group: "1-3",
        sender: "みさき＆めり",
        start_msg:
            "みさき「その……わたし、役に立ててなくて……」\n" +
            "めり「い、いや……！わたしの方こそ……」\n" +
            "みさき「ごめんなさい……」\n" +
            "めり「も、申し訳ない……」\n" +
            "みさき「……あの」\n" +
            "めり「……うん」\n" +
            "みさき「一緒に謝ってるね」\n" +
            "めり「……だね」",
        text: "どちらも悪くありません。", 
        kana: "どちらもわるくありません。",
        romaji: "dochira mo waruku arimasen",
        reaction_good:
            "みさき「……ありがとうございます」\n" +
            "めり「……恐縮です……」",
        reaction_bad:
            "めり「謝る話ではなくて……」\n" +
            "みさき「状況が違います……」",
        images: ["misaki.png", "meri.png"]
    },
    {
        id: "chat_yui_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆みさき",
        start_msg:
            "ゆい「ねえ……ゆい、重い？」\n" +
            "みさき「そんなこと……！」\n" +
            "ゆい「みさきは優しいから……」\n" +
            "みさき「わたしが我慢すれば……」\n" +
            "ゆい「……やっぱり、ゆいって迷惑だよね」\n" +
            "みさき「ち、違うよ……！」",
        text: "一度話を止めましょう。", 
        kana: "いちどはなしをとめましょう。",
        romaji: "ichido hanashi o tomemashou",
        reaction_good:
            "みさき「……はい」\n" +
            "ゆい「……ごめん」",
        reaction_bad:
            "ゆい「先生、察して……」\n" +
            "みさき「言い方が……」",
        images: ["yui.png", "misaki.png"]
    },
    {
        id: "chat_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "ひびき＆くう",
        start_msg:
            "ひびき「コケコッコー！！！」\n" +
            "くう「うるせぇ」\n" +
            "ひびき「元気出るやろ！！」\n" +
            "くう「黙れ」\n" +
            "ひびき「……静かにしたら、誰も見てくれへん」\n" +
            "くう「……」",
        text: "廊下では静かに。", 
        kana: "ろうかではしずかに。",
        romaji: "rouka dewa shizuka ni",
        reaction_good:
            "ひびき「はーい……」\n" +
            "くう「……行くぞ」",
        reaction_bad:
            "ひびき「今の聞こえた？」\n" +
            "くう「誤字以前の問題」",
        images: ["hibiki.png", "kuu.png"]
    },
    {
        id: "chat_kuu_noriomi_core",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……お前さ、さっきの自己紹介、また壁作ってたろ」\n" +
            "くう「……別に」\n" +
            "のりおみ「“別に”で済ませるには、目が死にすぎ」\n" +
            "くう「……馴染めないんだよ。努力しても、ただの模倣になる」\n" +
            "のりおみ「へぇ。珍しく素直」\n" +
            "くう「……諦めてるだけ。だから、あなたくらいでいい」\n" +
            "のりおみ「光栄だね。最低限の人間枠ってわけだ」",
        text: "もう少しクラスに溶け込んだら？",
        kana: "もうすこしくらすにとけこんだら？",
        romaji: "mou sukoshi kurasu ni tokekondara",
        reaction_good:
            "くう「……今のままでいい」\n" +
            "のりおみ「無理強いしない先生、助かる」",
        reaction_bad:
            "のりおみ「誤字ってるけど、溶け込めって圧は伝わった」\n" +
            "くう「先生、まず日本語から馴染んだら」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_mugi_hibiki",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ひびき",
        start_msg:
            "むぎ「聞いて聞いて！昨日な、寝相やばすぎて壁に激突したんさ！」\n" +
            "ひびき「コケコッコー！！それ絶対おもろいやんけ！」\n" +
            "むぎ「でしょ！？マジでドーン！って！」\n" +
            "ひびき「うるささなら負けへんで！！」",
        text: "少し静かにしてください。",
        kana: "すこししずかにしてください。",
        romaji: "sukoshi shizuka ni shite kudasai",
        reaction_good:
            "むぎ「はーい！…たぶん！」\n" +
            "ひびき「無理やけどな！！」",
        reaction_bad:
            "ひびき「先生、“静か”の字違うで！」\n" +
            "むぎ「細けぇこと気にすんなって〜！」",
        images: ["mugi.png", "hibiki.png"]
    },
    {
        id: "chat_rinon_kisora",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆きそら",
        start_msg:
            "りのん「本番、結果出せばいい。それだけ」\n" +
            "きそら「……結果だけじゃ、こわい」\n" +
            "りのん「怖くても、前に出る」\n" +
            "きそら「……りのんちゃん、つよいね」",
        text: "お互いの良さを認め合いましょう。",
        kana: "おたがいのよさをみとめあいましょう。",
        romaji: "otagai no yosa o mitomeaimashou",
        reaction_good:
            "りのん「合理的」\n" +
            "きそら「……うん」",
        reaction_bad:
            "りのん「先生、変換ミス多い」\n" +
            "きそら「でも……気持ちは、わかる」",
        images: ["rinon.png", "kisora.png"]
    },
    { 
        id: "chat_kuu_girls_miss",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆ゆい＆めり＆のりおみ",
        start_msg:
            "ゆい「ねぇくうちゃん、今日のリボンかわいくない？」\n" +
            "くう「……装飾に機能性はないだろ」\n" +
            "めり「えっ……あ、そ、そういう意味じゃなくて……」\n" +
            "ゆい「え、機能……？かわいいって話なんだけど……」\n" +
            "くう「無駄が多いって言ってる」\n" +
            "めり「ご、ごめんなさい……」\n" +
            "のりおみ「（あ〜……これは死んだな）」",
        text: "くうさん、もう少し柔らかく話しましょう。", 
        kana: "くうさん、もうすこしやわらかくはなしましょう。",
        romaji: "kuu-san, mou sukoshi yawarakaku hanashimashou",
        reaction_good:
            "くう「……善処する」\n" +
            "のりおみ「“善処”出た。はい優勝」",
        reaction_bad:
            "のりおみ「先生、日本語が雑です。文脈死んでます」\n" +
            "くう「指示が曖昧だ」",
        images: ["kuu.png", "yui.png", "meri.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_kuu_after",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「さっきの、悪気はなかったんだろ？」\n" +
            "くう「……事実を言っただけだ」\n" +
            "のりおみ「女子は事実より感情優先だからさ」\n" +
            "くう「理解不能」\n" +
            "のりおみ「まぁ、俺も半分はそう思ってる」\n" +
            "くう「……話が通じるな」",
        text: "仲良くしてください。", 
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "のりおみ「表面上はな」\n" +
            "くう「それでいい」",
        reaction_bad:
            "のりおみ「先生、それ理想論です」\n" +
            "くう「現実を見ろ」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_kisora_yui",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆ゆい",
        start_msg:
            "ゆい「ねぇきそらちゃん、今日ちょっと寂しくて……」\n" +
            "きそら「……うん……そっか……」\n" +
            "ゆい「えへ、聞いてくれるだけでいいの」\n" +
            "きそら「……それなら……よかった……」",
        text: "いい関係ですね。", 
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "ゆい「でしょ〜？」\n" +
            "きそら「……うん……」",
        reaction_bad:
            "ゆい「先生、急に何……？」\n" +
            "きそら「……びっくりした……」",
        images: ["kisora.png", "yui.png"]
    },
    { 
        id: "chat_kouta_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆みさき",
        start_msg:
            "みさき「こうたくん、これ……生徒会の書類……」\n" +
            "こうた「あ、ありがとう。無理してない？」\n" +
            "みさき「だ、大丈夫……」\n" +
            "こうた「……何かあったら言って」\n" +
            "みさき「……うん」",
        text: "助け合いが大事ですね。", 
        kana: "たすけあいがだいじですね。",
        romaji: "tasukeai ga daiji desu ne",
        reaction_good:
            "こうた「その通りです」\n" +
            "みさき「……はい」",
        reaction_bad:
            "こうた「先生、その言い方だと抽象的すぎます」\n" +
            "みさき「……むずかしいです……」",
        images: ["kouta.png", "misaki.png"]
    },
    { 
        id: "chat_noriomi_girls_kuu_watch",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい＆めり＆くう",
        start_msg:
            "ゆい「のりおみくんって、ほんと優しいよねぇ」\n" +
            "のりおみ「そう？ありがとう。ゆいちゃんも気配り上手だよ」\n" +
            "ゆい「えへへ♡」\n" +
            "のりおみ「めりちゃんは真面目で助かるよ。図書委員も大変でしょ」\n" +
            "めり「……はい……恐縮です……」\n" +
            "くう「（……社交辞令のテンプレ）」",
        text: "みなさん、仲良く会話してください。", 
        kana: "みなさん、なかよくかいわしてください。",
        romaji: "minasan, nakayoku kaiwa shite kudasai",
        reaction_good:
            "のりおみ「ええ、問題ありません」\n" +
            "くう「……表面上はな」",
        reaction_bad:
            "のりおみ「先生、その指示は抽象的すぎます」\n" +
            "くう「観測価値が下がる」",
        images: ["noriomi.png", "yui.png", "meri.png", "kuu.png"]
    },
    { 
        id: "chat_noriomi_kuu_truth",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "くう「……さっきの、全部嘘だろ」\n" +
            "のりおみ「嘘じゃないよ。必要な言葉を選んだだけ」\n" +
            "くう「同じだ」\n" +
            "のりおみ「……まぁね」\n" +
            "くう「疲れないのか」\n" +
            "のりおみ「慣れてる」",
        text: "仲良くしてください。", 
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "のりおみ「この距離感が一番楽だ」\n" +
            "くう「同意する」",
        reaction_bad:
            "のりおみ「先生、それは幻想です」\n" +
            "くう「現実を直視しろ」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_soji_interrupt",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆くう＆のりおみ",
        start_msg:
            "そうじ「お、なんか重くね？空気」\n" +
            "くう「黙れ」\n" +
            "のりおみ「今、思考中だから」\n" +
            "そうじ「まぁいっか！人生ノリっしょ！」\n" +
            "くう「……羨ましいな」\n" +
            "のりおみ「それは本音だろ」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はいはーい！」\n" +
            "くう「……消えろ」",
        reaction_bad:
            "そうじ「先生ノリ悪っ！」\n" +
            "のりおみ「場を読んでください」",
        images: ["soji.png", "kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_popularity_hell",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい＆めり＆くう",
        start_msg:
            "ゆい「のりおみくんってさ、ほんと落ち着いてて大人っぽいよねぇ」\n" +
            "のりおみ「そう言われると困るけど、ありがとう」\n" +
            "めり「お話ししてると安心するよ……」\n" +
            "のりおみ「それは光栄だよ。無理しないでいいから」\n" +
            "ゆい「やさし〜♡……」\n" +
            "くう「（……好感度、順調に上がってるな）」",
        text: "みなさん、楽しそうですね。", 
        kana: "みなさん、たのしそうですね。",
        romaji: "minasan, tanoshisou desu ne",
        reaction_good:
            "のりおみ「ええ、円滑なコミュニケーションです」\n" +
            "くう「……仮面舞踏会」",
        reaction_bad:
            "のりおみ「先生、語彙が雑ですね」\n" +
            "くう「観測者に向いてない」",
        images: ["noriomi.png", "yui.png", "meri.png", "kuu.png"]
    },
    { 
        id: "chat_noriomi_kuu_after",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "くう「……好かれてるな」\n" +
            "のりおみ「表面上はね」\n" +
            "くう「切らないのか」\n" +
            "のりおみ「無害だから放置」\n" +
            "くう「冷たいな」\n" +
            "のりおみ「くうにだけ言う」",
        text: "仲良くしてください。", 
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "のりおみ「この距離が一番楽だ」\n" +
            "くう「……同意」",
        reaction_bad:
            "のりおみ「先生、それは理想論です」\n" +
            "くう「現実見ろ」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_ritsu_honoka_soji",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆ほのか＆そうじ",
        start_msg:
            "りつ「やあ☆アルパカちゃん！今日も可愛いね！」\n" +
            "ほのか「は？その呼び方意味わかんない」\n" +
            "りつ「え……」\n" +
            "ほのか「てか自分の見た目ばっか気にして中身薄くない？」\n" +
            "りつ「…………」\n" +
            "そうじ「おーいりつ、生きてるー？」\n" +
            "りつ「……心が折れた」\n" +
            "そうじ「草！まぁイキっていこ！」",
        text: "言い方に気をつけてください。", 
        kana: "いいかたにきをつけてください。",
        romaji: "iikata ni ki o tsukete kudasai",
        reaction_good:
            "そうじ「はいはーい！」\n" +
            "りつ「……ありがとう」",
        reaction_bad:
            "ほのか「先生、今さら？」\n" +
            "そうじ「遅くね？」",
        images: ["ritsu.png", "honoka.png", "soji.png"]
    },
    { 
        id: "chat_yui_soji_chaos",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆そうじ",
        start_msg:
            "ゆい「ねえそうじくん……わたし、嫌われてないよね……？」\n" +
            "そうじ「え？知らん！多分大丈夫っしょ！」\n" +
            "ゆい「多分ってなに……」\n" +
            "そうじ「考えすぎ！人生ノリ！」\n" +
            "ゆい「……泣きそう」\n" +
            "そうじ「え、泣くの！？」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "そうじ「はいはい！」\n" +
            "ゆい「……ちゃんと聞いて」",
        reaction_bad:
            "そうじ「先生もノリ悪い！」\n" +
            "ゆい「空気読んで……」",
        images: ["yui.png", "soji.png"]
    },
    {
    id: "chat_honoka_rinon_result",
    subtype: "chat",
    group: "1-3",
    sender: "ほのか＆りのん",
    start_msg:
        "ほのか「で？それ数字出てんの？」\n" +
        "りのん「結果は出してる。あなたは？」\n" +
        "ほのか「効率が悪いって話してんだけど」\n" +
        "りのん「質を落としてまで効率を取る気はないわ」\n" +
        "ほのか「じゃあ負けるね、そのやり方」\n" +
        "りのん「勝ち負け決めるの早すぎ」",
    text: "もう少し穏やかに話しなさい。",
    kana: "もうすこしおだやかにはなしなさい。",
    romaji: "mou sukoshi odayaka ni hanashi nasai",
    reaction_good:
        "りのん「……まぁ、続けるけど」\n" +
        "ほのか「チッ、時間無駄にした」",
    reaction_bad:
        "ほのか「注意の論点そこ？」\n" +
        "りのん「今の指摘、成果に繋がらないわ」",
    images: ["honoka.png", "rinon.png"]
    },
    {
    id: "chat_ritsu_yui_menhera",
    subtype: "chat",
    group: "1-3",
    sender: "りつ＆ゆい",
    start_msg:
        "ゆい「ねぇりつくん、ゆいのこと可愛い？」\n" +
        "りつ「えっ！？ そ、それはもちろん……」\n" +
        "ゆい「じゃあさ、今日一日ゆいだけ見てて？」\n" +
        "りつ「ま、待って！？ プレッシャーが強い！！」\n" +
        "ゆい「え……やっぱり重い？」",
    text: "落ち着いて会話しましょう。",
    kana: "おちついてかいわしましょう。",
    romaji: "ochitsuite kaiwa shimashou",
    reaction_good:
        "りつ「深呼吸する……」\n" +
        "ゆい「ゆい、がんばる……」",
    reaction_bad:
        "りつ「今の注意、情緒に刺さる！」\n" +
        "ゆい「ゆいの気持ち誤字ってる……」",
    images: ["ritsu.png", "yui.png"]
    },
    {
    id: "chat_hibiki_misaki",
    subtype: "chat",
    group: "1-3",
    sender: "ひびき＆みさき",
    start_msg:
        "ひびき「コケコッコー！！今日も元気か！？」\n" +
        "みさき「……声、大きいよ」\n" +
        "ひびき「元気の証やろが！」\n" +
        "みさき「静かでも元気は出せるよ」\n" +
        "ひびき「は？ 合鴨に説教されたんやけど」",
    text: "教室では静かにしてください。",
    kana: "きょうしつではしずかにしてください。",
    romaji: "kyoushitsu dewa shizuka ni shite kudasai",
    reaction_good:
        "ひびき「……チッ」\n" +
        "みさき「ありがとうございます」",
    reaction_bad:
        "ひびき「注意の声小さすぎ！」\n" +
        "みさき「今の言い方、少し雑です」",
    images: ["hibiki.png", "misaki.png"]
    },
    {
    id: "chat_honoka_aoi_unbreakable",
    subtype: "chat",
    group: "1-3",
    sender: "ほのか＆あおい",
    start_msg:
        "ほのか「それ非効率だよ」\n" +
        "あおい「そうかな」\n" +
        "ほのか「無駄多すぎ」\n" +
        "あおい「必要だと思っとるで」\n" +
        "ほのか「……だから負けるんだって」\n" +
        "あおい「負けてもいいら」",
    text: "口論は控えてください。",
    kana: "こうろんはひかえてください。",
    romaji: "kouron wa hikaete kudasai",
    reaction_good:
        "あおい「すみません」\n" +
        "ほのか「……チッ」",
    reaction_bad:
        "ほのか「止め方が雑」\n" +
        "あおい「今の言い方でも大丈夫です」",
    images: ["honoka.png", "aoi.png"]
    },
    {
    id: "chat_hibiki_down_soji",
    subtype: "chat",
    group: "1-3",
    sender: "ひびき＆そうじ",
    start_msg:
        "ひびき「……うるさいって言われた」\n" +
        "そうじ「マジ？ 今さらじゃね？」\n" +
        "ひびき「本気のトーンやった」\n" +
        "そうじ「お、効いてる効いてる」\n" +
        "ひびき「笑うなや……」\n" +
        "そうじ「よし、イキってこ！」",
    text: "廊下では静かにしてください。",
    kana: "ろうかではしずかにしてください。",
    romaji: "rouka dewa shizuka ni shite kudasai",
    reaction_good:
        "ひびき「……しゃあないな」\n" +
        "そうじ「復活はえー！」",
    reaction_bad:
        "ひびき「その注意テンポ悪い！」\n" +
        "そうじ「今の煽り足りん！」",
    images: ["hibiki.png", "soji.png"]
    },
    {
    id: "chat_aoi_honoka_clash",
    subtype: "chat",
    group: "1-3",
    sender: "あおい＆ほのか",
    start_msg:
        "ほのか「それ効率悪くない？頭使ってる？」\n" +
        "あおい「……」\n" +
        "ほのか「黙るの？図星？」\n" +
        "あおい「……その言い方、やめて」\n" +
        "ほのか「は？事実でしょ」\n" +
        "あおい「……他人を下げて、自分上げるの」\n" +
        "あおい「それ、強さじゃないから」",
    text: "冷静に話しましょう。",
    kana: "れいせいにはなしましょう。",
    romaji: "reisei ni hanashimashou",
    reaction_good:
        "ほのか「……へぇ。そう来るんだ」\n" +
        "あおい「戦う気、ないから」",
    reaction_bad:
        "ほのか「先生、日本語変。注意するならちゃんとやって」\n" +
        "あおい「……そこ？」",
    images: ["aoi.png", "honoka.png"]
    },
    {
    id: "chat_mugi_nagisa_chaos",
    subtype: "chat",
    group: "1-3",
    sender: "むぎ＆なぎさ",
    start_msg:
        "むぎ「なぎさ〜！聞いて聞いて！昨日な、夢でプリン10個食べたんさ！」\n" +
        "なぎさ「は？意味わかんな」\n" +
        "むぎ「でもな、起きたらお腹いっぱいだったんだってば！すごくない！？」\n" +
        "なぎさ「脳みそお花畑すぎでしょ」\n" +
        "むぎ「え〜？それ褒めてる？」\n" +
        "なぎさ「褒めてない」",
    text: "授業に集中してください。",
    kana: "じゅぎょうにしゅうちゅうしてください。",
    romaji: "jugyou ni shuuchuu shite kudasai",
    reaction_good:
        "むぎ「はーい！でもプリンの話あとで続きね！」\n" +
        "なぎさ「続かなくていい」",
    reaction_bad:
        "なぎさ「先生、漢字ミスってるけど？」\n" +
        "むぎ「え！？どこどこ！？」",
    images: ["mugi.png", "nagisa.png"]
    },
    {
    id: "chat_yui_noriomi_kuu",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ＆くう",
    start_msg:
        "ゆい「ねぇのりおみくん……今日ちょっと元気なくてぇ」\n" +
        "のりおみ「そうなんだ。無理はしない方がいいよ」\n" +
        "ゆい「え〜、でも聞いてほしいなぁ……」\n" +
        "のりおみ「……まぁ。時間が許す範囲でなら」\n" +
        "ゆい「やさし〜。やっぱのりおみくん好き」\n" +
        "くう「……」\n" +
        "のりおみ「光栄だよ。だけど誤解はしないでね」\n" +
        "ゆい「も〜、かたいなぁ」\n" +
        "くう「……それ、全部社交辞令だから」",
    text: "人間関係には節度を持ちましょう。",
    kana: "にんげんかんけいにはせつどをもちましょう。",
    romaji: "ningen kankei ni wa setsudo o mochimashou",
    reaction_good:
        "のりおみ「ええ、その通りです」\n" +
        "ゆい「は〜い……」\n" +
        "くう「……ふん」",
    reaction_bad:
        "のりおみ「“節度”の送り仮名、間違ってますよ。先生」\n" +
        "くう「そこは即ツッコむんだ」",
    images: ["yui.png", "noriomi.png", "kuu.png"]
    },
    {
    id: "chat_yui_nagisa",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆なぎさ",
    start_msg:
        "ゆい「なぎさちゃん〜、今日ゆいちょっと不安でぇ」\n" +
        "なぎさ「また？」\n" +
        "ゆい「冷たっ！ひどい！」\n" +
        "なぎさ「甘えりゃ誰か助けてくれると思ってんのが嫌」\n" +
        "ゆい「え……」\n" +
        "なぎさ「でもまぁ、嫌いじゃないけど」\n" +
        "ゆい「……なにそれ」",
    text: "言い方に気をつけなさい。",
    kana: "いいかたにきをつけなさい。",
    romaji: "iikata ni ki o tsukenasai",
    reaction_good:
        "なぎさ「はーいはい」\n" +
        "ゆい「むぅ……」",
    reaction_bad:
        "なぎさ「先生、“気をつける”漢字それじゃない」\n" +
        "ゆい「え、ほんと？」",
    images: ["yui.png", "nagisa.png"]
    },
    {
    id: "chat_mugi_soji",
    subtype: "chat",
    group: "1-3",
    sender: "むぎ＆そうじ",
    start_msg:
        "むぎ「そうじ〜！今日な、夢でハムスターが空飛んだんさ！」\n" +
        "そうじ「いいねぇ。イキってこ」\n" +
        "むぎ「でしょ！？現実も飛べる気する！」\n" +
        "そうじ「勢い大事」",
    text: "現実を見なさい。",
    kana: "げんじつをみなさい。",
    romaji: "genjitsu o minasai",
    reaction_good:
        "そうじ「現実もイケてるっしょ」\n" +
        "むぎ「な〜！」",
    reaction_bad:
        "むぎ「先生、“現実”の字ちがくない！？」\n" +
        "そうじ「そこ見るんだ」",
    images: ["mugi.png", "soji.png"]
    },
    {
    id: "chat_noriomi_yui_dependency",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ＆くう",
    start_msg:
        "ゆい「ねぇ……最近のりおみくんと話してると落ち着くんだよね」\n" +
        "のりおみ「そっか。それは良かったよ」\n" +
        "ゆい「ね、ゆいのことちゃんと見てくれてる？」\n" +
        "のりおみ「まぁ、一応は」\n" +
        "ゆい「……“一応”ってなに」\n" +
        "のりおみ「言葉通りだけど」\n" +
        "ゆい「もっとちゃんとしてよ……」\n" +
        "のりおみ「……期待されると困る」\n" +
        "ゆい「え？」\n" +
        "のりおみ「俺は、誰かの居場所になるつもりはないから」\n" +
        "くう「……ほらね」",
    text: "依存関係には注意しましょう。",
    kana: "いぞんかんけいにはちゅういしましょう。",
    romaji: "izon kankei ni wa chuui shimashou",
    reaction_good:
        "のりおみ「……助かります」\n" +
        "くう「線引き、大事」\n" +
        "ゆい「……」",
    reaction_bad:
        "のりおみ「“依存”の漢字、違いますよ」\n" +
        "くう「先生まで依存してんの？」",
    images: ["yui.png", "noriomi.png", "kuu.png"]
    },
    {
    id: "chat_yui_tayori_kisora",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆たより＆きそら",
    start_msg:
        "ゆい「たよりくん、今日ゆいと一緒に帰らない？」\n" +
        "たより「ごめん、きそらと図書室行く約束で」\n" +
        "きそら「……たよりくん」\n" +
        "ゆい「……そっか」",
    text: "約束は守りましょう。",
    kana: "やくそくはまもりましょう。",
    romaji: "yakusoku wa mamorimashou",
    reaction_good:
        "たより「その通りですね」\n" +
        "きそら「……うん」",
    reaction_bad:
        "ゆい「先生、“約束”の字……」\n" +
        "たより「そこ突くんだ……」",
    images: ["yui.png", "tayori.png", "kisora.png"]
    },
    {
    id: "chat_yui_ritsu_kouta",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆りつ＆こうた",
    start_msg:
        "ゆい「ねぇりつくん、今日のゆいどう？」\n" +
        "りつ「素敵だよ☆でも僕の方が可愛いけどね」\n" +
        "ゆい「……」\n" +
        "こうた「ごめんね、これから生徒会で」",
    text: "集中しなさい。",
    kana: "しゅうちゅうしなさい。",
    romaji: "shuuchuu shinasai",
    reaction_good:
        "こうた「はい」\n" +
        "りつ「集中も美の一部☆」",
    reaction_bad:
        "りつ「先生、今の誤字ダサいよ？」\n" +
        "ゆい「言い方〜」",
    images: ["yui.png", "ritsu.png", "kouta.png"]
    },
    { 
        id: "chat_yui_vs_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆くう",
        start_msg:
            "ゆい「ねぇ…くうちゃんってさ、のりおみくんとだけ仲良いよね」\n" +
            "くう「……だから何」\n" +
            "ゆい「独占してる感じ、するなぁって」\n" +
            "くう「勘違い。信用してるだけ」\n" +
            "ゆい「信用って、愛と何が違うの？」\n" +
            "くう「その言葉使う時点で無理」",
        text: "空気を読もう。",
        kana: "くうきをよもう。",
        romaji: "kuuki wo yomou",
        reaction_good:
            "ゆい「……ふふ、そっかぁ」\n" +
            "くう「分かったなら近づくな」",
        reaction_bad:
            "くう「読めてないのは先生」\n" +
            "ゆい「変換ミス…可愛いけど今じゃない♡」",
        images: ["yui.png", "kuu.png"]
    },
    { 
        id: "chat_kuu_noriomi_honne",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……俺さ、優しいフリやめようと思う」\n" +
            "くう「やっと気づいた？」\n" +
            "のりおみ「誰も救われてない」\n" +
            "くう「知ってた。最初から」\n" +
            "のりおみ「それでも俺は、壊れたまま生きる」\n" +
            "くう「それでいい。私も同類」",
        text: "静かに見守る。",
        kana: "しずかにみまもる。",
        romaji: "shizuka ni mimamoru",
        reaction_good:
            "のりおみ「……ありがと」\n" +
            "くう「言うと思った」",
        reaction_bad:
            "くう「今の空気で誤字る？」\n" +
            "のりおみ「先生、集中切れてる」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_ritsu_tayori_yui",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆たより",
        start_msg:
            "りつ「やあ☆仔犬くん、あの猫系どう思う？」\n" +
            "たより「距離感が、ちょっとね…」\n" +
            "りつ「美意識が耐えられない☆」\n" +
            "たより「優しさを消耗するタイプだと思う」",
        text: "同意する。",
        kana: "どういする。",
        romaji: "doi suru",
        reaction_good:
            "りつ「分かる人がいて嬉しい☆」\n" +
            "たより「静かに距離取ろう」",
        reaction_bad:
            "りつ「誤字は美しくないよ☆」\n" +
            "たより「落ち着いて打ちましょう」",
        images: ["ritsu.png", "tayori.png"]
    },
    { 
        id: "chat_mugi_yuhi",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「なぁなぁ！クラス空気バキバキじゃね！？」\n" +
            "ゆうひ「草www 修羅場w」\n" +
            "むぎ「怖すぎて眠くなってきた〜」\n" +
            "ゆうひ「お前いつも眠いだろw」",
        text: "注意する。",
        kana: "ちゅういする。",
        romaji: "chuui suru",
        reaction_good:
            "むぎ「はーい！寝まーす！」\n" +
            "ゆうひ「自由かw」",
        reaction_bad:
            "ゆうひ「先生誤字ってて草w」\n" +
            "むぎ「大丈夫だてー！」",
        images: ["mugi.png", "yuhi.png"]
    },
    { 
        id: "chat_yui_victim_soji",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆そうじ＆のりおみ",
        start_msg:
            "ゆい「最近さ…のりおみくん、すごく冷たいんだよね」\n" +
            "ゆい「前はちゃんと話聞いてくれたのに…」\n" +
            "のりおみ「……」\n" +
            "そうじ「お、そういう時こそイキってこーぜ！」\n" +
            "ゆい「え？」\n" +
            "そうじ「落ち込むイベントは経験値だからな！」",
        text: "話を整理しよう。",
        kana: "はなしをせいりしよう。",
        romaji: "hanashi wo seiri shiyou",
        reaction_good:
            "そうじ「ほら！深刻になるとこじゃねー！」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "そうじ「先生、誤字ってる場合じゃねーぞ！」\n" +
            "のりおみ「論点ズレてます」",
        images: ["yui.png", "soji.png", "noriomi.png"]
    },
    { 
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「なぁ！空気重すぎて眠くなってきたてー！」\n" +
            "ゆうひ「草w それなw」\n" +
            "むぎ「修羅場ってお腹すくね！」\n" +
            "ゆうひ「感情消化が雑すぎw」",
        text: "静かにしよう。",
        kana: "しずかにしよう。",
        romaji: "shizuka ni shiyou",
        reaction_good:
            "むぎ「はーい！静かに寝るてー！」\n" +
            "ゆうひ「結局寝るんかいw」",
        reaction_bad:
            "ゆうひ「先生誤字ってて草w」\n" +
            "むぎ「だいじょぶだてー！」",
        images: ["mugi.png", "yuhi.png"]
    },
    { 
        id: "chat_yui_savior",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ね、ゆいがちゃんと見てるから大丈夫だよ」\n" +
            "ゆい「のりおみくん、壊れやすそうだし」\n" +
            "のりおみ「……」\n" +
            "ゆい「だから、ゆいが守るね」\n" +
            "のりおみ「そう」",
        text: "フォローしよう。",
        kana: "ふぉろーしよう。",
        romaji: "foroo shiyou",
        reaction_good:
            "ゆい「ね、安心した？」\n" +
            "のりおみ「うん」",
        reaction_bad:
            "のりおみ「“守る”の主語がズレてます」\n" +
            "ゆい「冷た…」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_rinon_honoka",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ほのか",
        start_msg:
            "ほのか「りのんってさ、結果主義すぎない？」\n" +
            "りのん「結果を出さない努力に意味ある？」\n" +
            "ほのか「ひぇ〜怖っ」\n" +
            "りのん「あなたは議論だけで満足するタイプ」",
        text: "落ち着きなさい。",
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "りのん「……続きは後で」",
        reaction_bad:
            "りのん「論点が浅い」",
        images: ["rinon.png", "honoka.png"]
    },
    { 
        id: "chat_kisora_tayori",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「……たより、行かないで」\n" +
            "たより「大丈夫、すぐ戻るよ」\n" +
            "きそら「ひとり、やだ……」\n" +
            "たより「ほら、深呼吸しよ」",
        text: "席につきなさい。",
        kana: "せきにつきなさい。",
        romaji: "seki ni tsukinasai",
        reaction_good:
            "たより「はい、失礼しました」",
        reaction_bad:
            "たより「注意のタイミングが急ですね」",
        images: ["kisora.png", "tayori.png"]
    },
    { 
        id: "chat_yuhi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ひびき",
        start_msg:
            "ゆうひ「おいニワトリw 朝から鳴きすぎだろwww」\n" +
            "ひびき「誰がニワトリじゃ！！コケコッコー！！」\n" +
            "ゆうひ「草ww 声量で勝てると思ってんの？w」\n" +
            "ひびき「はぁ！？一回外出ろや！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ゆうひ「はいはーいw」\n" +
            "ひびき「チッ……」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて草w」\n" +
            "ひびき「ちゃんと打てや」",
        images: ["yuhi.png", "hibiki.png"]
    },
    { 
        id: "chat_mugi_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆あつし",
        start_msg:
            "むぎ「ねぇ聞いて聞いて！今日夢で空飛んだ！」\n" +
            "あつし「いいね！！じゃあ現実でも飛んじゃおう！！」\n" +
            "むぎ「え！？いける！？屋上！？」",
        text: "席に座りなさい。",
        kana: "せきにすわりなさい。",
        romaji: "seki ni suwari nasai",
        reaction_good:
            "あつし「はーい！」\n" +
            "むぎ「はーい！」",
        reaction_bad:
            "むぎ「先生、文字まちがってるよー！」",
        images: ["mugi.png", "atsushi.png"]
    },
    { 
        id: "chat_soji_noise_cancel",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「はいはい！重い空気きたー！イキってこ！」\n" +
            "りのん「ちょっと黙りなさい」\n" +
            "そうじ「イキり宣言だっての！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はーい」",
        reaction_bad:
            "そうじ「先生、字ミスってね？」",
        images: ["soji.png", "rinon.png"]
    },
    { 
        id: "chat_yuhi_hibiki_chaos",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ひびき",
        start_msg:
            "ゆうひ「お前声量だけは才能だよなw」\n" +
            "ひびき「才能や！！コケコッコー！！」\n" +
            "ゆうひ「耳死ぬんだけどwww」",
        text: "やめなさい。",
        kana: "やめなさい。",
        romaji: "yame nasai",
        reaction_good:
            "ゆうひ「はーいw」\n" +
            "ひびき「チッ」",
        reaction_bad:
            "ひびき「ちゃんと打てや！」",
        images: ["yuhi.png", "hibiki.png"]
    },
    { 
        id: "chat_yui_victim_soji",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆そうじ＆のりおみ",
        start_msg:
            "ゆい「最近さ…のりおみくん、すごく冷たいんだよね」\n" +
            "ゆい「前はちゃんと話聞いてくれたのに…」\n" +
            "のりおみ「……」\n" +
            "そうじ「お、そういう時こそイキってこーぜ！」\n" +
            "ゆい「え？」\n" +
            "そうじ「落ち込むイベントは経験値だからな！」",
        text: "話を整理しよう。",
        kana: "はなしをせいりしよう。",
        romaji: "hanashi wo seiri shiyou",
        reaction_good:
            "そうじ「ほら！深刻になるとこじゃねー！」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "そうじ「先生、誤字ってる場合じゃねーぞ！」\n" +
            "のりおみ「論点ズレてます」",
        images: ["yui.png", "soji.png", "noriomi.png"]
    },
    { 
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「なぁ！空気重すぎて眠くなってきたてー！」\n" +
            "ゆうひ「草w それなw」\n" +
            "むぎ「修羅場ってお腹すくね！」\n" +
            "ゆうひ「感情消化が雑すぎw」",
        text: "静かにしよう。",
        kana: "しずかにしよう。",
        romaji: "shizuka ni shiyou",
        reaction_good:
            "むぎ「はーい！静かに寝るてー！」\n" +
            "ゆうひ「結局寝るんかいw」",
        reaction_bad:
            "ゆうひ「先生誤字ってて草w」\n" +
            "むぎ「だいじょぶだてー！」",
        images: ["mugi.png", "yuhi.png"]
    },
    { 
        id: "chat_yui_savior",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ね、ゆいがちゃんと見てるから大丈夫だよ」\n" +
            "ゆい「のりおみくん、壊れやすそうだし」\n" +
            "のりおみ「……」\n" +
            "ゆい「だから、ゆいが守るね」\n" +
            "のりおみ「そう」",
        text: "フォローしよう。",
        kana: "ふぉろーしよう。",
        romaji: "foroo shiyou",
        reaction_good:
            "ゆい「ね、安心した？」\n" +
            "のりおみ「うん」",
        reaction_bad:
            "のりおみ「“守る”の主語がズレてます」\n" +
            "ゆい「冷た…」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_rinon_honoka",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ほのか",
        start_msg:
            "ほのか「りのんってさ、結果主義すぎない？」\n" +
            "りのん「結果を出さない努力に意味ある？」\n" +
            "ほのか「ひぇ〜怖っ」\n" +
            "りのん「あなたは議論だけで満足するタイプ」",
        text: "落ち着きなさい。",
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "りのん「……続きは後で」",
        reaction_bad:
            "りのん「論点が浅い」",
        images: ["rinon.png", "honoka.png"]
    },
    { 
        id: "chat_kisora_tayori",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「……たより、行かないで」\n" +
            "たより「大丈夫、すぐ戻るよ」\n" +
            "きそら「ひとり、やだ……」\n" +
            "たより「ほら、深呼吸しよ」",
        text: "席につきなさい。",
        kana: "せきにつきなさい。",
        romaji: "seki ni tsukinasai",
        reaction_good:
            "たより「はい、失礼しました」",
        reaction_bad:
            "たより「注意のタイミングが急ですね」",
        images: ["kisora.png", "tayori.png"]
    },
    { 
        id: "chat_yuhi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ひびき",
        start_msg:
            "ゆうひ「おいニワトリw 朝から鳴きすぎだろwww」\n" +
            "ひびき「誰がニワトリじゃ！！コケコッコー！！」\n" +
            "ゆうひ「草ww 声量で勝てると思ってんの？w」\n" +
            "ひびき「はぁ！？一回外出ろや！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ゆうひ「はいはーいw」\n" +
            "ひびき「チッ……」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて草w」\n" +
            "ひびき「ちゃんと打てや」",
        images: ["yuhi.png", "hibiki.png"]
    },
    { 
        id: "chat_mugi_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆あつし",
        start_msg:
            "むぎ「ねぇ聞いて聞いて！今日夢で空飛んだ！」\n" +
            "あつし「いいね！！じゃあ現実でも飛んじゃおう！！」\n" +
            "むぎ「え！？いける！？屋上！？」",
        text: "席に座りなさい。",
        kana: "せきにすわりなさい。",
        romaji: "seki ni suwari nasai",
        reaction_good:
            "あつし「はーい！」\n" +
            "むぎ「はーい！」",
        reaction_bad:
            "むぎ「先生、文字まちがってるよー！」",
        images: ["mugi.png", "atsushi.png"]
    },
    { 
        id: "chat_soji_noise_cancel",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「はいはい！重い空気きたー！イキってこ！」\n" +
            "りのん「ちょっと黙りなさい」\n" +
            "そうじ「イキり宣言だっての！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はーい」",
        reaction_bad:
            "そうじ「先生、字ミスってね？」",
        images: ["soji.png", "rinon.png"]
    },
    { 
        id: "chat_yuhi_hibiki_chaos",
        subtype: "chat",
        group: "1-3",
        sender: "ゆうひ＆ひびき",
        start_msg:
            "ゆうひ「お前声量だけは才能だよなw」\n" +
            "ひびき「才能や！！コケコッコー！！」\n" +
            "ゆうひ「耳死ぬんだけどwww」",
        text: "やめなさい。",
        kana: "やめなさい。",
        romaji: "yame nasai",
        reaction_good:
            "ゆうひ「はーいw」\n" +
            "ひびき「チッ」",
        reaction_bad:
            "ひびき「ちゃんと打てや！」",
        images: ["yuhi.png", "hibiki.png"]
    },
    {
    id: "chat_rinon_honoka_logic",
    subtype: "chat",
    group: "1-3",
    sender: "りのん＆ほのか",
    start_msg:
        "りのん「この方法で結果出る。数字見れば分かるでしょ」\n" +
        "ほのか「その数字の前提条件、穴だらけだけど？」\n" +
        "りのん「で？代案は？」\n" +
        "ほのか「今は批判フェーズなんで」\n" +
        "りのん「出せない意見は意見じゃない」",
    text: "感情的にならず、建設的に話し合いましょう。",
    kana: "かんじょうてきにならず、けんせつてきにはなしあいましょう。",
    romaji: "kanjouteki ni narazu, kensetsuteki ni hanashiaimashou",
    reaction_good:
        "ほのか「はーいはい、先生ポイント稼ぎね」\n" +
        "りのん「私は最初から建設的」",
    reaction_bad:
        "ほのか「日本語ミスってるけど大丈夫？」\n" +
        "りのん「そこ直さないと説得力ない」",
    images: ["rinon.png", "honoka.png"]
    },
    {
    id: "chat_kisora_tayori_soft",
    subtype: "chat",
    group: "1-3",
    sender: "きそら＆たより",
    start_msg:
        "きそら「たよりくん……今日も、ここいていい？」\n" +
        "たより「もちろん。無理しなくていいからね」\n" +
        "きそら「えへへ……」\n" +
        "たより「……ほんとに、無理してない？」",
    text: "周囲とも関わってみましょう。",
    kana: "しゅういともかかわってみましょう。",
    romaji: "shuui tomo kakawatte mimashou",
    reaction_good:
        "たより「少しずつ、だね」\n" +
        "きそら「……うん」",
    reaction_bad:
        "きそら「せんせ……文、変……」\n" +
        "たより「誤字がありますね」",
    images: ["kisora.png", "tayori.png"]
    },
    {
    id: "chat_hibiki_yuhi_noise",
    subtype: "chat",
    group: "1-3",
    sender: "ひびき＆ゆうひ",
    start_msg:
        "ひびき「コケコッコーー！！朝やで！！」\n" +
        "ゆうひ「うっせww近所迷惑だろw」\n" +
        "ひびき「うるさいのがオレや！」\n" +
        "ゆうひ「草」",
    text: "静かにしてください。",
    kana: "しずかにしてください。",
    romaji: "shizuka ni shite kudasai",
    reaction_good:
        "ゆうひ「はいはいw」\n" +
        "ひびき「チッ……」",
    reaction_bad:
        "ゆうひ「先生それ誤字ってね？」\n" +
        "ひびき「日本語朝練からやな」",
    images: ["hibiki.png", "yuhi.png"]
    },
    {
    id: "chat_kouta_noriomi_cold",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆のりおみ",
    start_msg:
        "こうた「感情論は不要だ。秩序を優先する」\n" +
        "のりおみ「……それ、人が壊れるやつだよ」\n" +
        "こうた「壊れるなら、それまでだ」\n" +
        "のりおみ「……っ」",
    text: "落ち着いて話してください。",
    kana: "おちついてはなしてください。",
    romaji: "ochitsuite hanashite kudasai",
    reaction_good:
        "こうた「問題ありません」\n" +
        "のりおみ「……はい」",
    reaction_bad:
        "のりおみ「先生、誤字」\n" +
        "こうた「正確さを欠いています」",
    images: ["kouta.png", "noriomi.png"]
    },
    {
    id: "chat_meri_aoi_softcare",
    subtype: "chat",
    group: "1-3",
    sender: "めり＆あおい",
    start_msg:
        "めり「……私、余計なことしたよね」\n" +
        "あおい「そんなこと、ないと思う」\n" +
        "めり「でも……」\n" +
        "あおい「大丈夫だよ」",
    text: "そのままでいいですよ。",
    kana: "そのままでいいですよ。",
    romaji: "sono mama de ii desu yo",
    reaction_good:
        "めり「……ありがとうございます」\n" +
        "あおい「うん」",
    reaction_bad:
        "めり「せ、先生……誤字……」\n" +
        "あおい「ちょっと違うかも」",
    images: ["meri.png", "aoi.png"]
    },
    {
    id: "chat_meri_nagisa_softfix",
    subtype: "chat",
    group: "1-3",
    sender: "めり＆なぎさ",
    start_msg:
        "めり「……私、空気悪くしたかも」\n" +
        "なぎさ「は？誰が決めたのそれ」\n" +
        "めり「でも、私が余計なこと言って……」\n" +
        "なぎさ「余計とか他人が決めることじゃないでしょ」",
    text: "自分を責めすぎないでください。",
    kana: "じぶんをせめすぎないでください。",
    romaji: "jibun o semesugi naide kudasai",
    reaction_good:
        "なぎさ「ほら、先生も言ってる」\n" +
        "めり「……うん」",
    reaction_bad:
        "なぎさ「先生、日本語変」\n" +
        "めり「そこ、違うと思う」",
    images: ["meri.png", "nagisa.png"]
    },
    {
    id: "chat_yui_kuu_solitude",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆くう",
    start_msg:
        "ゆい「ねぇくうちゃん」\n" +
        "くう「……何」\n" +
        "ゆい「くうちゃんと、ゆいってさ。孤独なとこ一緒だよね？」\n" +
        "くう「……違う」\n" +
        "ゆい「否定しても、馴染めないだけでしょ？」\n" +
        "くう「……」\n" +
        "ゆい「だったらさ、ゆいと仲良くしよ？」",
    text: "相手の気持ちを尊重しましょう。",
    kana: "あいてのきもちをそんちょうしましょう。",
    romaji: "aite no kimochi o sonchou shimashou",
    reaction_good:
        "ゆい「えへ、優しい先生♡」\n" +
        "くう「……話終わった？」",
    reaction_bad:
        "くう「誤字」\n" +
        "ゆい「先生、ちゃんと見て♡」",
    images: ["yui.png", "kuu.png"]
    },
    {
    id: "chat_yui_noriomi_play",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ",
    start_msg:
        "ゆい「のりおみくん、最近冷たいよね」\n" +
        "のりおみ「そういうつもりはないよ」\n" +
        "ゆい「また社交辞令」\n" +
        "のりおみ「……」\n" +
        "ゆい「くうちゃんにだけ本音出すの、ずるい」\n" +
        "のりおみ「比較は意味ない」\n" +
        "ゆい「じゃあ、ゆいが壊れたら？」",
    text: "落ち着いて会話してください。",
    kana: "おちついてかいわしてください。",
    romaji: "ochitsuite kaiwa shite kudasai",
    reaction_good:
        "ゆい「はーい」\n" +
        "のりおみ「……はい」",
    reaction_bad:
        "のりおみ「先生、誤字」\n" +
        "ゆい「そういうとこだよ？」",
    images: ["yui.png", "noriomi.png"]
    },
    {
    id: "chat_kouta_rinon_order",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆りのん",
    start_msg:
        "こうた「このクラス、秩序が崩れている」\n" +
        "りのん「原因は？」\n" +
        "こうた「不登校者の影響が大きい」\n" +
        "りのん「……なるほど」\n" +
        "こうた「感情ではなく、結果で判断すべきだ」",
    text: "決めつけはやめましょう。",
    kana: "きめつけはやめましょう。",
    romaji: "kimetsuke wa yamemashou",
    reaction_good:
        "りのん「先生の言うことも一理ある」\n" +
        "こうた「検討します」",
    reaction_bad:
        "りのん「先生、誤字」\n" +
        "こうた「正確性に欠けます」",
    images: ["kouta.png", "rinon.png"]
    },
    { 
        id: "chat_yui_noriomi_bento",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ、のりおみくん？」\n" +
            "のりおみ「……なに」\n" +
            "ゆい「一緒にお弁当食べよ？♡」\n" +
            "のりおみ「いや、今日は──」\n" +
            "ゆい「ゆいの手作りだよ♡ 朝4時に起きて作ったの♡」\n" +
            "のりおみ「……早起き自慢は評価基準にない」\n" +
            "ゆい「ひど〜い。でもさ、断ったらゆい泣いちゃうかも」\n" +
            "のりおみ「それは俺の責任じゃない」\n" +
            "ゆい「え〜？ほんとに？じゃあくうちゃんと食べよっかな」\n" +
            "のりおみ「……それは、やめてほしい」\n" +
            "ゆい「ふふ♡ 今の顔かわい」",
        text: "仲良くしなさい。",
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "のりおみ「……善処します」\n" +
            "ゆい「やった♡ じゃあ決まりだね」",
        reaction_bad:
            "のりおみ「先生、入力ミス多いですね」\n" +
            "ゆい「えへ♡ 焦ってるの？かわい〜」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_ritsu_kisora",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆きそら",
        start_msg:
            "りつ「やあ☆仔猫ちゃん！」\n" +
            "きそら「……ひゃ」\n" +
            "りつ「その反応も含めて芸術だね」\n" +
            "きそら「下の名前で……呼んで……」\n" +
            "りつ「おっと、失礼。きそらちゃん☆」\n" +
            "きそら「……うん」",
        text: "距離感に気をつけましょう。",
        kana: "きょりかんにきをつけましょう。",
        romaji: "kyorikan ni ki wo tsukemashou",
        reaction_good:
            "りつ「ふふ、紳士は心得てるさ」\n" +
            "きそら「……ほっ」",
        reaction_bad:
            "りつ「先生、そこ誤字ですよ？」\n" +
            "きそら「だ、大丈夫……？」",
        images: ["ritsu.png", "kisora.png"]
    },
    {
        id: "chat_soji_yuhi",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "ゆうひ「クラス空気重くね？w」\n" +
            "そうじ「だから壊すんだろ。ドーンって」\n" +
            "ゆうひ「天才かよw」\n" +
            "そうじ「深刻にならない才能、持ってるんで」",
        text: "授業中ですよ。",
        kana: "じゅぎょうちゅうですよ。",
        romaji: "jugyou chuu desu yo",
        reaction_good:
            "そうじ「はいはーい（聞いてない）」\n" +
            "ゆうひ「草」",
        reaction_bad:
            "そうじ「先生、文字落ちてるぞ」\n" +
            "ゆうひ「入力も授業も雑w」",
        images: ["soji.png", "yuhi.png"]
    },
    {
        id: "chat_kuu_noriomi",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……また、ゆい？」\n" +
            "のりおみ「まあな」\n" +
            "くう「無理するな」\n" +
            "のりおみ「してない。……お前以外には」",
        text: "静かに話しましょう。",
        kana: "しずかにはなしましょう。",
        romaji: "shizuka ni hanashimashou",
        reaction_good:
            "くう「……わかった」\n" +
            "のりおみ「それだけでいい」",
        reaction_bad:
            "くう「先生、そこ変」\n" +
            "のりおみ「校正してから注意して」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_mugi_hibiki_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ひびき",
        start_msg:
            "ひびき「コケコッコーー！！！」\n" +
            "むぎ「うわああああ！！朝！？朝なの！？」\n" +
            "ひびき「授業中でも鳴くけどな！」\n" +
            "むぎ「まじ元気すぎ〜！！」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "むぎ「はーい！（5秒後寝る）」\n" +
            "ひびき「コケッ」",
        reaction_bad:
            "ひびき「先生、誤字ってるで」\n" +
            "むぎ「せんせ〜だいじょぶ〜？」",
        images: ["mugi.png", "hibiki.png"]
    },
    {
        id: "chat_kuu_rinon",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆りのん",
        start_msg:
            "りのん「努力は結果に変換してこそ意味がある」\n" +
            "くう「……その結果が出ない人は？」\n" +
            "りのん「切り捨てる」\n" +
            "くう「潔いな」\n" +
            "りのん「優しさは甘えになる」",
        text: "議論はほどほどに。",
        kana: "ぎろんはほどほどに。",
        romaji: "giron wa hodohodo ni",
        reaction_good:
            "りのん「了解です」\n" +
            "くう「……ふん」",
        reaction_bad:
            "くう「先生、そこ誤字」\n" +
            "りのん「詰めが甘いですね」",
        images: ["kuu.png", "rinon.png"]
    },
    {
        id: "chat_kuu_noriomi_break",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……顔色悪い」\n" +
            "のりおみ「平気」\n" +
            "くう「嘘」\n" +
            "のりおみ「……靴、脱げない」\n" +
            "くう「座れ」\n" +
            "のりおみ「……っ」\n" +
            "くう「無理すんな」\n" +
            "のりおみ「……学校で、ずっと」\n" +
            "のりおみ「正しいこと言われて」\n" +
            "のりおみ「優しい声で責められて」\n" +
            "のりおみ「……耐えてた」\n" +
            "くう「……」\n" +
            "のりおみ「俺、間違ってるのか分かんなくなって」\n" +
            "のりおみ「……っ、くそ」\n" +
            "くう「泣いていい」\n" +
            "のりおみ「……っ、うっ……」",
        text: "少し休みましょう。",
        kana: "すこしやすみましょう。",
        romaji: "sukoshi yasumimashou",
        reaction_good:
            "くう「今日は外、行かない」\n" +
            "のりおみ「……ありがとう」",
        reaction_bad:
            "くう「先生、そこ誤字」\n" +
            "のりおみ「今それ言う？」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_yui_noriomi_soft_trap",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇのりおみくん」\n" +
            "のりおみ「……何」\n" +
            "ゆい「ゆいさ、ただ仲良くしたいだけだよ？」\n" +
            "のりおみ「それが一番信用できない」\n" +
            "ゆい「ひどーい。ゆい、傷つくんだけど」\n" +
            "のりおみ「傷ついたって言えば、俺が引くと思ってるだろ」\n" +
            "ゆい「……鋭いね」\n" +
            "ゆい「でもさ、のりおみくんって」\n" +
            "ゆい「本当は誰かに必要とされたいんでしょ？」\n" +
            "のりおみ「……やめろ」\n" +
            "ゆい「ほら、今ここ痛いでしょ？」\n" +
            "のりおみ「……っ」\n" +
            "ゆい「可愛い顔してる人、最近怖いんだよね？」\n" +
            "のりおみ「……黙れ」",
        text: "落ち着いて話しましょう。",
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "ゆい「ふふ、先生優し〜」\n" +
            "のりおみ「……助かる」",
        reaction_bad:
            "ゆい「先生、漢字違うよ？」\n" +
            "のりおみ「今それ指摘する？」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_rinon_ritsu",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆りつ",
        start_msg:
            "りつ「やあ☆歌姫ちゃん！」\n" +
            "りのん「その呼び方やめて」\n" +
            "りつ「冷たいなぁ」\n" +
            "りのん「結果出してから話しかけて」\n" +
            "りつ「ぐっ……」\n" +
            "りつ「美も努力の結晶だよ？」\n" +
            "りのん「点数にならない努力は趣味」",
        text: "仲良くしなさい。",
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "りつ「はい☆」\n" +
            "りのん「……善処する」",
        reaction_bad:
            "りのん「先生、語尾変」\n" +
            "りつ「表現が雑☆」",
        images: ["rinon.png", "ritsu.png"]
    },
    {
        id: "chat_noriomi_kouta_selfdestruct",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆こうた",
        start_msg:
            "のりおみ「……なあ、こうた」\n" +
            "こうた「何？」\n" +
            "のりおみ「ちょっと確認したいことがある」\n" +
            "こうた「確認？」\n" +
            "（のりおみが自分からこうたの袖を掴む）\n" +
            "こうた「！？」\n" +
            "のりおみ「……っ」\n" +
            "こうた「……は？」\n" +
            "のりおみ「……い、た……」\n" +
            "こうた「離せ」\n" +
            "のりおみ「……っ、無理……」\n" +
            "こうた「意味が分からない」\n" +
            "こうた「痛いなら触らなきゃいいだろ」\n" +
            "のりおみ「……それを検証してた」\n" +
            "こうた「頭、大丈夫？」\n" +
            "こうた「合理性が一切ない」",
        text: "距離を取りなさい。",
        kana: "きょりをとりなさい。",
        romaji: "kyori wo torinasai",
        reaction_good:
            "こうた「適切です」\n" +
            "のりおみ「……助かる」",
        reaction_bad:
            "こうた「誤字があります」\n" +
            "のりおみ「今それ言う？」",
        images: ["noriomi.png", "kouta.png"]
    },
    {
        id: "chat_kouta_analysis",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆たより",
        start_msg:
            "こうた「理解できない」\n" +
            "たより「誰のこと？」\n" +
            "こうた「のりおみ」\n" +
            "こうた「痛いと言いながら自分から原因に触る」\n" +
            "たより「……複雑なんだと思うよ」\n" +
            "こうた「複雑で済ませる話じゃない」\n" +
            "こうた「改善策が取れないなら距離を置くべきだ」\n" +
            "たより「……それ、本人の前で言わないでね」\n" +
            "こうた「事実だから」",
        text: "配慮を忘れないように。",
        kana: "はいりょをわすれないように。",
        romaji: "hairyo wo wasurenai you ni",
        reaction_good:
            "こうた「努力します」\n" +
            "たより「ありがとう」",
        reaction_bad:
            "こうた「誤字です」\n" +
            "たより「今そこ！？」",
        images: ["kouta.png", "tayori.png"]
    },
    {
        id: "chat_kuu_noriomi_after",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……またやった？」\n" +
            "のりおみ「……実験失敗」\n" +
            "くう「触ったの？」\n" +
            "のりおみ「自分から」\n" +
            "くう「バカ」\n" +
            "のりおみ「否定できない」\n" +
            "くう「……今日はもう考えるな」\n" +
            "のりおみ「……ありがとう」",
        text: "静かに過ごしなさい。",
        kana: "しずかにすごしなさい。",
        romaji: "shizuka ni sugoshinasai",
        reaction_good:
            "くう「それでいい」\n" +
            "のりおみ「……助かる」",
        reaction_bad:
            "くう「誤字」\n" +
            "のりおみ「今それ？」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_yui_noriomi_touch",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇのりおみ、寒そう」\n" +
            "のりおみ「……触るな」\n" +
            "ゆい「もう触ってる♡」\n" +
            "のりおみ「っ……！」\n" +
            "ゆい「……あ、来た？」\n" +
            "のりおみ「やめろ……神経、燃える……」\n" +
            "ゆい「わたしもね、同じのなるんだよ」\n" +
            "ゆい「一緒だね♡」",
        text: "距離感を大切にしましょう。",
        kana: "きょりかんをたいせつにしましょう。",
        romaji: "kyorikan o taisetsu ni shimashou",
        reaction_good:
            "ゆい「えへへ、怒られちゃった」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "ゆい「先生、誤字ってるよ？」\n" +
            "のりおみ「焦ってる。観測できた」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_interrupt",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "そうじ「うわ暗っ！この教室ホラー映画？」\n" +
            "ゆうひ「草w 情緒ジェンガ崩れてんじゃん」\n" +
            "そうじ「ま、深刻にならんでいいって」\n" +
            "そうじ「壊れる時は一瞬だし」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はいはーい」\n" +
            "ゆうひ「チッ」",
        reaction_bad:
            "そうじ「先生も動揺してる？」\n" +
            "ゆうひ「誤字ってる時点でアウトw」",
        images: ["soji.png", "yuhi.png"]
    },
    {
        id: "chat_noriomi_kouta_dark_te",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆こうた",
        start_msg:
            "のりおみ「……こうた。今、余裕ある？」\n" +
            "こうた「要件は30秒以内で」\n" +
            "のりおみ「じゃあ単刀直入に聞く。人に距離詰められると——」\n" +
            "こうた「結論から言え」\n" +
            "のりおみ「……俺が一歩近づいたら、どう感じるか」\n" +
            "こうた「時間の無駄」\n" +
            "こうた「その仮説、再現性ある？目的は？」\n" +
            "のりおみ「目的……は……」\n" +
            "こうた「無いなら終了。退いて」\n" +
            "のりおみ「……っ」\n" +
            "こうた「主導権取れない実験は、実験じゃない」",
        text: "話し合いをやめなさい。",
        kana: "はなしあいをやめなさい。",
        romaji: "hanashiai o yamenasai",
        reaction_good:
            "こうた「了解しました」\n" +
            "のりおみ「……失敗だ」",
        reaction_bad:
            "こうた「誤字。指示が曖昧」\n" +
            "のりおみ「……完全に負けたな、これ」",
        images: ["noriomi.png", "kouta.png"]
    },
    {
        id: "chat_yui_noriomi_play",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ、のりおみ」\n" +
            "のりおみ「……何」\n" +
            "ゆい「今さ、実験してるんでしょ？」\n" +
            "のりおみ「……してない」\n" +
            "ゆい「じゃあ、わたしがするね♡」\n" +
            "のりおみ「は？」\n" +
            "ゆい「こうやって触ると……ほら」\n" +
            "のりおみ「……っ、やめろ……！」\n" +
            "ゆい「痛い？」\n" +
            "ゆい「でも逃げないんだね♡」",
        text: "やめなさい。",
        kana: "やめなさい。",
        romaji: "yamenasai",
        reaction_good:
            "ゆい「ちぇー」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "ゆい「先生、焦ってる」\n" +
            "のりおみ「……観測、完了」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "そうじ「いや今日の教室さ、情緒ぐちゃぐちゃすぎ」\n" +
            "ゆうひ「草w メンタル弱すぎじゃね？」\n" +
            "そうじ「壊れるなら派手にいこーぜ」\n" +
            "ゆうひ「それなw」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はーい」\n" +
            "ゆうひ「はいはい」",
        reaction_bad:
            "そうじ「先生も壊れてる？」\n" +
            "ゆうひ「誤字ってる時点で草w」",
        images: ["soji.png", "yuhi.png"]
    },
    {
        id: "chat_kuu_noriomi_silent",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……またやった？」\n" +
            "のりおみ「実験失敗」\n" +
            "くう「学ばないね」\n" +
            "のりおみ「でも、やめられない」\n" +
            "くう「……一人でやるから壊れる」",
        text: "問題ありませんか？",
        kana: "もんだいありませんか？",
        romaji: "mondai arimasen ka",
        reaction_good:
            "のりおみ「……今は、大丈夫」\n" +
            "くう「そ」",
        reaction_bad:
            "くう「誤字」\n" +
            "のりおみ「先生より冷静だな、私たち」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_yui_noriomi_after_school",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「のりおみくん、一緒に帰ろ？♡」\n" +
            "のりおみ「……今日は用事ある」\n" +
            "ゆい「へぇ。誰と？」\n" +
            "のりおみ「一人」\n" +
            "ゆい「じゃあ一緒だね♡」\n" +
            "のりおみ「そういう意味じゃない」\n" +
            "ゆい「ねぇ、ゆいって邪魔？」\n" +
            "のりおみ「……論理が飛んでる」\n" +
            "ゆい「でも否定しないんだ♡」",
        text: "下校を急ぎなさい。",
        kana: "げこうをいそぎなさい。",
        romaji: "gekou o isoginasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "ゆい「先生、誤字」\n" +
            "のりおみ「指摘が早い」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_yuhi_noise2",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "そうじ「今日も情緒ジェットコースター」\n" +
            "ゆうひ「草w」\n" +
            "そうじ「深刻は似合わねーって」\n" +
            "ゆうひ「壊すかw」",
        text: "私語を慎みなさい。",
        kana: "しごをつつしみなさい。",
        romaji: "shigo o tsutsushiminasai",
        reaction_good:
            "そうじ「はーい」\n" +
            "ゆうひ「了解w」",
        reaction_bad:
            "そうじ「先生もtypoってる」\n" +
            "ゆうひ「草草w」",
        images: ["soji.png", "yuhi.png"]
    },
    {
    id: "chat_yui_noriomi_bento",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ",
    start_msg:
        "ゆい「ねぇのりおみくん♡ 一緒にお弁当食べよ？」\n" +
        "のりおみ「今日は…いいや」\n" +
        "ゆい「え？」\n" +
        "ゆい「くうちゃんのは食べてるんでしょ？」\n" +
        "のりおみ「それは……事情が違う」\n" +
        "ゆい「事情ってなに？」\n" +
        "ゆい「ゆいのはダメなの？」\n" +
        "ゆい「ゆいのこと嫌いなの……？」",
    text: "落ち着いて話しましょう。",
    kana: "おちついてはなしましょう。",
    romaji: "ochitsuite hanashimashou",
    reaction_good:
        "のりおみ「……混乱するからやめて」\n" +
        "ゆい「ふふ♡ 本音だ♡」",
    reaction_bad:
        "ゆい「先生、誤字ってるよ？ もしかして動揺してる？」\n" +
        "のりおみ「指摘されてる」",
    images: ["yui.png", "noriomi.png"]
    },
    {
    id: "chat_rinon_honoka_logic",
    subtype: "chat",
    group: "1-3",
    sender: "りのん＆ほのか",
    start_msg:
        "りのん「結論が出ない議論は時間の無駄」\n" +
        "ほのか「はいはい、結果厨きた」\n" +
        "りのん「過程に酔って負けるのが一番ダサい」\n" +
        "ほのか「その言い方が敵作るんだよ」\n" +
        "りのん「敵が増えても勝てばいい」",
    text: "議論は建設的にお願いします。",
    kana: "ぎろんはけんせつてきにおねがいします。",
    romaji: "giron wa kensetsuteki ni onegaishimasu",
    reaction_good:
        "ほのか「まぁ嫌いじゃないけどね」\n" +
        "りのん「でしょ？」",
    reaction_bad:
        "ほのか「先生、漢字ミスってるけど論破されたい？」\n" +
        "りのん「そこ突くんだ」",
    images: ["rinon.png", "honoka.png"]
    },
    {
    id: "chat_soji_airbreak",
    subtype: "chat",
    group: "1-3",
    sender: "そうじ＆ゆうひ",
    start_msg:
        "そうじ「はいはい暗い暗い！空気重っ！」\n" +
        "ゆうひ「草w お前マジ兵器」\n" +
        "そうじ「病みはさ、深刻ぶるから悪化すんの」\n" +
        "ゆうひ「雑すぎて逆に正論w」",
    text: "静かにしてください。",
    kana: "しずかにしてください。",
    romaji: "shizuka ni shite kudasai",
    reaction_good:
        "そうじ「はーい(聞かない)」\n" +
        "ゆうひ「言うだけ無駄w」",
    reaction_bad:
        "そうじ「先生、誤字ってるけどそれ命令？」\n" +
        "ゆうひ「命令でも聞かねーだろw」",
    images: ["soji.png", "yuhi.png"]
    },
    {
    id: "chat_kuu_noriomi_silence",
    subtype: "chat",
    group: "1-3",
    sender: "くう＆のりおみ",
    start_msg:
        "くう「……また絡まれた？」\n" +
        "のりおみ「まあね」\n" +
        "くう「無理すんな」\n" +
        "のりおみ「君に言われると説得力ある」",
    text: "問題があれば相談してください。",
    kana: "もんだいがあればそうだんしてください。",
    romaji: "mondai ga areba soudan shite kudasai",
    reaction_good:
        "くう「……はぁ」\n" +
        "のりおみ「先生は無理」",
    reaction_bad:
        "のりおみ「その文、条件分岐おかしい」\n" +
        "くう「論理破綻してる」",
    images: ["kuu.png", "noriomi.png"]
    },
    {
    id: "chat_yui_noriomi_fe_crack",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ",
    start_msg:
        "ゆい「ねぇのりおみくん……ゆい、重い？」\n" +
        "のりおみ「そういう話じゃなくて」\n" +
        "ゆい「じゃあ何の話？」\n" +
        "ゆい「ゆい、ちゃんと向き合ってるよ？」\n" +
        "のりおみ「……向き合うって、定義が広すぎる」\n" +
        "ゆい「え？それってゆいが頭悪いってこと？」",
    text: "感情的にならないでください。",
    kana: "かんじょうてきにならないでください。",
    romaji: "kanjouteki ni naranai de kudasai",
    reaction_good:
        "のりおみ「……今は無理」\n" +
        "ゆい「ふふ♡ 今の、本音だよね？」",
    reaction_bad:
        "ゆい「先生、誤字あるよ？焦ってるの？」\n" +
        "のりおみ「論点ずらしが多い」",
    images: ["yui.png", "noriomi.png"]
    },
    {
    id: "chat_kouta_noriomi_darkjudge",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆のりおみ",
    start_msg:
        "こうた「のりおみくん、それは正しくないよ」\n" +
        "のりおみ「正しさの話はしてない」\n" +
        "こうた「でも傷つく人がいる」\n" +
        "こうた「君はそれを分かってて逃げてる」\n" +
        "のりおみ「……逃げてるわけじゃ」\n" +
        "こうた「じゃあ向き合おう。今ここで」",
    text: "二人とも冷静に。",
    kana: "ふたりともれいせいに。",
    romaji: "futari tomo reisei ni",
    reaction_good:
        "こうた「話せてよかった」\n" +
        "のりおみ「……疲れた」",
    reaction_bad:
        "こうた「先生、その文章主語抜けてます」\n" +
        "のりおみ「条件不足」",
    images: ["kouta.png", "noriomi.png"]
    },
    {
    id: "chat_yui_kouta_pincer",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆こうた",
    start_msg:
        "ゆい「ねぇこうたくん、ゆい悪いこと言ってる？」\n" +
        "こうた「いや、感情は正当だよ」\n" +
        "ゆい「だよね……」\n" +
        "こうた「だから、のりおみくんが変わるべき」\n" +
        "ゆい「ゆい、信じてたのにな……」",
    text: "その言い方は控えてください。",
    kana: "そのいいかたはひかえてください。",
    romaji: "sono iikata wa hikaete kudasai",
    reaction_good:
        "こうた「……すみません」\n" +
        "ゆい「大丈夫です♡」",
    reaction_bad:
        "ゆい「先生、漢字違うよ？」\n" +
        "こうた「正確さは大事です」",
    images: ["yui.png", "kouta.png"]
    },
    {
    id: "chat_kuu_home_explosion",
    subtype: "chat",
    group: "1-3",
    sender: "くう＆のりおみ",
    start_msg:
        "くう「……顔色やばい」\n" +
        "のりおみ「平気」\n" +
        "くう「嘘」\n" +
        "のりおみ「……っ」\n" +
        "のりおみ「なんで……放っといてくれないんだよ！！」\n" +
        "くう「……泣け」",
    text: "事情があれば話してください。",
    kana: "じじょうがあればはなしてください。",
    romaji: "jijou ga areba hanashite kudasai",
    reaction_good:
        "のりおみ「……ごめん……」\n" +
        "くう「いい」",
    reaction_bad:
        "くう「先生、今それ言う？」\n" +
        "のりおみ「空気読めてない」",
    images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_fe_overflow",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……別に、平気だから」\n" +
            "くう「その手の震えでそれ言う？」\n" +
            "のりおみ「気のせいだろ」\n" +
            "くう「じゃあなんで呼吸浅いの」",
        text: "大丈夫ですか？",
        kana: "だいじょうぶですか？",
        romaji: "daijoubu desu ka",
        reaction_good:
            "のりおみ「……先生には、そう見える？」\n" +
            "くう「ほら、無理してる」",
        reaction_bad:
            "のりおみ「誤字ってる。今それ指摘される側の気分？」\n" +
            "くう「タイミング最悪」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_yui_pressure",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ、ゆい何か悪いことした？」\n" +
            "のりおみ「……してない」\n" +
            "ゆい「じゃあなんで避けるの？」\n" +
            "のりおみ「避けてない。ただ距離を」",
        text: "落ち着いて話そう。",
        kana: "おちついてはなそう",
        romaji: "ochitsuite hanasou",
        reaction_good:
            "ゆい「先生までそう言うの？」\n" +
            "のりおみ「……ごめん」",
        reaction_bad:
            "ゆい「先生、文途切れてるよ？」\n" +
            "のりおみ「今それ言う？」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_soji_breaker",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆りのん",
        start_msg:
            "そうじ「はいはい重たい空気やめやめ！」\n" +
            "りのん「……真面目な話してるんだけど」\n" +
            "そうじ「だから壊すんだって」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はーい先生」\n" +
            "りのん「助かります」",
        reaction_bad:
            "そうじ「命令形ミスってね？」\n" +
            "りのん「誤字多いですね」",
        images: ["soji.png", "rinon.png"]
    },
    { 
        id: "chat_noriomi_breakdown_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……俺さ」\n" +
            "のりおみ「感情があるふり、もう無理かもしれない」\n" +
            "くう「……」\n" +
            "のりおみ「正しいって言われても、優しいって言われても、全部痛い」\n" +
            "くう「……座れ」",
        text: "落ち着いて話してください。",
        kana: "おちついてはなしてください",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "のりおみ「……先生、今それ無理」\n" +
            "くう「呼吸。私が数える」",
        reaction_bad:
            "のりおみ「誤字ってる。頭に入らない」\n" +
            "くう「今それ指摘される側じゃない」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_yui_guilt",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ゆい、悪い子なのかな…？」\n" +
            "のりおみ「……違う」\n" +
            "ゆい「じゃあ、なんでいなくなるの？」\n" +
            "のりおみ「それ以上は…」",
        text: "ゆいさんも落ち着いて。",
        kana: "ゆいさんもおちついて",
        romaji: "yui-san mo ochitsuite",
        reaction_good:
            "ゆい「先生までそう言うんだ…」\n" +
            "のりおみ「……ごめん」",
        reaction_bad:
            "ゆい「先生、助詞抜けてるよ？」\n" +
            "のりおみ「今そこじゃない」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_kouta_entj",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「感情に流されるのは未熟だ」\n" +
            "のりおみ「……」\n" +
            "こうた「正しい行動を選べ。それだけだ」",
        text: "言い方を考えなさい。",
        kana: "いいかたをかんがえなさい",
        romaji: "iikata wo kangae nasai",
        reaction_good:
            "こうた「……配慮はする」\n" +
            "のりおみ「……遅い」",
        reaction_bad:
            "こうた「先生、文法おかしい」\n" +
            "のりおみ「今それ言われるの無理」",
        images: ["kouta.png", "noriomi.png"]
    },
    { 
        id: "chat_soshi_gentle",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆くう",
        start_msg:
            "そうし「世界ってさ、意外と雑音多いよね」\n" +
            "くう「……ああ」\n" +
            "そうし「だから考える場所は机の上でいいと思う」",
        text: "良い視点ですね。",
        kana: "よいてんですね",
        romaji: "yoi ten desu ne",
        reaction_good:
            "そうし「でしょ？」\n" +
            "くう「……助かる」",
        reaction_bad:
            "そうし「先生、語尾変」\n" +
            "くう「気になるとこそこ？」",
        images: ["soshi.png", "kuu.png"]
    },
    { 
        id: "chat_kouta_entj_distance",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆こうた",
        start_msg:
            "のりおみ「こうたは……俺が近づくの、どう思う？」\n" +
            "こうた「何が言いたい？」\n" +
            "こうた「ソーシャルディスタンスを保ってくれないか」\n" +
            "こうた「正直、不快だ」\n" +
            "のりおみ「……」\n" +
            "のりおみ「こうた、俺のこと嫌いになった？」",
        text: "少し言葉を選びなさい。",
        kana: "すこしことばをえらびなさい",
        romaji: "sukoshi kotoba o erabi nasai",
        reaction_good:
            "こうた「……配慮はする」\n" +
            "のりおみ「……ありがとう」",
        reaction_bad:
            "こうた「先生、助詞が抜けてます」\n" +
            "のりおみ「今それ指摘されるの、きつい」",
        images: ["noriomi.png", "kouta.png"]
    },
    { 
        id: "chat_kuu_safezone",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……俺、変なこと言ったよな」\n" +
            "くう「言ってない」\n" +
            "のりおみ「でも、嫌われた」\n" +
            "くう「事実と感情を混ぜるな」\n" +
            "くう「ここでは、近づいていい」",
        text: "落ち着いて深呼吸しましょう。",
        kana: "おちついてしんこきゅうしましょう",
        romaji: "ochitsuite shinkokyuu shimashou",
        reaction_good:
            "のりおみ「……うん」\n" +
            "くう「私がいる」",
        reaction_bad:
            "くう「先生、漢字間違ってる」\n" +
            "のりおみ「今それで戻れるなら戻りたい」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_observe",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆りつ",
        start_msg:
            "ゆい「あ……やっぱりだ」\n" +
            "りつ「ん？なにがだい、仔猫ちゃん？」\n" +
            "ゆい「のりおみくん、壊れかけてる」\n" +
            "りつ「それ、面白がるところじゃないよ？」\n" +
            "ゆい「うん。だから、放っておけないの」",
        text: "憶測で決めつけないように。",
        kana: "おくそくできめつけないように",
        romaji: "okusoku de kimetsukenai you ni",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "りつ「……信用ならないな」",
        reaction_bad:
            "ゆい「先生、語尾抜けてるよ？」\n" +
            "りつ「そこ指摘する余裕ある？」",
        images: ["yui.png", "ritsu.png"]
    },
    { 
        id: "chat_soshi_elsewhere",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆そうじ＆あつし",
        start_msg:
            "そうじ「なーんかクラス重くね？」\n" +
            "あつし「重力？じゃあ星になろう！」\n" +
            "そうし「机の上なら無重力だよ」\n" +
            "そうじ「意味わかんねーけど元気出たわ」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はいはーい」\n" +
            "そうし「了解」",
        reaction_bad:
            "そうし「先生、読点多い」\n" +
            "そうじ「そこかよw」",
        images: ["soshi.png", "soji.png", "atsushi.png"]
    },
    { 
        id: "chat_noriomi_breakdown_at_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……っ、は、……」\n" +
            "くう「……靴、脱げ」\n" +
            "のりおみ「ごめ……無理……」\n" +
            "くう「いいから座れ」\n" +
            "のりおみ「……俺さ……嫌われた、よな」\n" +
            "くう「結論が早い」\n" +
            "のりおみ「でも……っ、近づくなって……不快だって……」\n" +
            "くう「……」\n" +
            "のりおみ「俺、ちゃんと距離守ってたつもりだった……」\n" +
            "のりおみ「なのに……っ、なんで……」",
        text: "落ち着いて話しなさい。",
        kana: "おちついてはなしなさい",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "くう「……泣いていい」\n" +
            "のりおみ「……っ、……ぅ、」\n" +
            "のりおみ「……っあ、……やだ……止まんない……」\n" +
            "くう「呼吸」\n" +
            "くう「私がいる」",
        reaction_bad:
            "くう「先生、句点多い」\n" +
            "のりおみ「今それ言われると逆に笑うからやめて……」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_yui_poison_logic",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねえのりおみくん♡」\n" +
            "ゆい「嫌って言われてないなら、嫌じゃないってことでしょ？」\n" +
            "のりおみ「……それは……」\n" +
            "ゆい「言葉にしないのが一番ズルいんだよ？」\n" +
            "ゆい「だからね、わたしはちゃんと言うよ♡」\n" +
            "ゆい「のりおみくんのこと、嫌ってない」",
        text: "感情を整理しましょう。",
        kana: "かんじょうをせいりしましょう",
        romaji: "kanjou o seiri shimashou",
        reaction_good:
            "のりおみ「……それ、今言われるの……怖い」\n" +
            "ゆい「え〜♡助けたいだけなのに」",
        reaction_bad:
            "ゆい「先生、漢字ちがう♡」\n" +
            "ゆい「“整理”じゃなくて“整頓”の方が好きかな〜？」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_kouta_cold_truth",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「嫌なら嫌って言えばいいだけだ」\n" +
            "のりおみ「……」\n" +
            "こうた「察してもらおうとするのは甘えだ」\n" +
            "こうた「相手に負担を押し付けてる自覚はある？」\n" +
            "のりおみ「……ごめん」\n" +
            "こうた「謝る必要はない。修正すればいい」",
        text: "言葉を選びなさい。",
        kana: "ことばをえらびなさい",
        romaji: "kotoba o erabi nasai",
        reaction_good:
            "のりおみ「……わかった」\n" +
            "こうた「それでいい」",
        reaction_bad:
            "こうた「先生、論点がズレてます」\n" +
            "こうた「今は感情論じゃない」",
        images: ["kouta.png", "noriomi.png"]
    },
    { 
        id: "chat_rinon_kisora_side",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆きそら",
        start_msg:
            "りのん「……空気、最悪だね」\n" +
            "きそら「……うん……こわい……」\n" +
            "りのん「結果出せばいい話なんだけど」\n" +
            "きそら「……結果だけじゃ、だめ……」",
        text: "私語は控えましょう。",
        kana: "しごはひかえましょう",
        romaji: "shigo wa hikaemashou",
        reaction_good:
            "りのん「はい」\n" +
            "きそら「……ごめんなさい……」",
        reaction_bad:
            "りのん「先生、声小さくない？」\n" +
            "きそら「……聞こえない……」",
        images: ["rinon.png", "kisora.png"]
    },
    { 
        id: "chat_soji_noise_break",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ＆あつし",
        start_msg:
            "そうじ「なーんかさ！湿気すごくね！？」\n" +
            "ゆうひ「草w除湿機つけろw」\n" +
            "あつし「じゃあみんな星になれば乾燥するよ！！！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はーいw」\n" +
            "ゆうひ「無理w」",
        reaction_bad:
            "そうじ「先生、圧が弱い！」\n" +
            "ゆうひ「もっと怒れw」",
        images: ["soji.png", "yuhi.png", "atsushi.png"]
    },
    { 
        id: "chat_yui_victim_move",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねえ、のりおみくん……」\n" +
            "ゆい「わたし、助けてるつもりだよ？」\n" +
            "のりおみ「……」\n" +
            "ゆい「こんなに考えてあげてるのに、距離取られるの悲しいな♡」\n" +
            "ゆい「報われないの、ちょっとつらい……」\n" +
            "のりおみ「……それ……」\n" +
            "ゆい「嫌なら嫌って言えばいいのに♡」\n" +
            "ゆい「言わないってことは、嫌じゃないってことでしょ？」",
        text: "相手の気持ちを尊重しなさい。",
        kana: "あいてのきもちをそんちょうしなさい",
        romaji: "aite no kimochi o sonchou shinasai",
        reaction_good:
            "のりおみ「……っ、胸……痛い……」\n" +
            "ゆい「え……？ごめん……でも、ゆい悪くないよね？」",
        reaction_bad:
            "ゆい「先生、“尊重”の送り仮名ちがう♡」\n" +
            "のりおみ「……今それ指摘するの、才能だと思います……」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_kouta_observe",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「……今の、かなり負担だと思う」\n" +
            "ゆい「え？」\n" +
            "こうた「助けてるかどうかは、受け手が決める」\n" +
            "こうた「のりおみ、嫌なら嫌って言えばいい」\n" +
            "のりおみ「……それが、できたら……」",
        text: "感情的にならないでください。",
        kana: "かんじょうてきにならないでください",
        romaji: "kanjouteki ni naranai de kudasai",
        reaction_good:
            "こうた「……すみません」\n" +
            "ゆい「……ゆい、悪者？」",
        reaction_bad:
            "こうた「先生、敬語が崩れてます」\n" +
            "こうた「今は正確さが必要です」",
        images: ["kouta.png", "yui.png", "noriomi.png"]
    },
    { 
        id: "chat_midnight_ptsd_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "（深夜）\n" +
            "のりおみ「……っ、やめ……っ」\n" +
            "くう「……起きてる」\n" +
            "のりおみ「胸……っ、刺さる……」\n" +
            "くう「今は夜。ここは私の家」\n" +
            "のりおみ「……嫌って……言えなかった……」\n" +
            "くう「……言えなくていい」\n" +
            "のりおみ「……俺、ずるい……」",
        text: "落ち着いて深呼吸してください。",
        kana: "おちついてしんこきゅうしてください",
        romaji: "ochitsuite shinkokyuu shite kudasai",
        reaction_good:
            "くう「呼吸、合わせろ」\n" +
            "のりおみ「……っ、……は……」\n" +
            "くう「私がいる」",
        reaction_bad:
            "くう「先生、“深呼吸”」\n" +
            "くう「誤字ると逆に不安煽る」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_soji_relief_noise",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆むぎ＆ゆうひ",
        start_msg:
            "そうじ「おはよー！今日もクラス暗すぎな！！」\n" +
            "むぎ「え！？そう！？むぎ元気だよ！！！」\n" +
            "ゆうひ「草w朝からうるせw」",
        text: "静かにしてください。",
        kana: "しずかにしてください",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はーいw」\n" +
            "むぎ「はーい！！！（でかい）」",
        reaction_bad:
            "そうじ「先生、声ちっさ！」\n" +
            "ゆうひ「もっと怒れw」",
        images: ["soji.png", "mugi.png", "yuhi.png"]
    },
    {
        id: "chat_yui_noriomi_edge",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねえのりおみくん、わたしさ、ちゃんと助けてるよね？♡」\n" +
            "のりおみ「……そうだね。ありがとう」\n" +
            "ゆい「でもさ〜、全然顔見せてくれないし、連絡も遅いし」\n" +
            "ゆい「わたしが消えたら、ちょっとは困る？」\n" +
            "のりおみ「……それは、極端じゃないかな」\n" +
            "ゆい「え〜？極端なのは放置されてるわたしだよ？」\n" +
            "ゆい「ねえ、今日も苦しい？わたしのせい？♡」",
        text: "その話題はここまでにしなさい。",
        kana: "そのわだいはここまでにしなさい。",
        romaji: "sono wadai wa koko made ni shinasai",
        reaction_good:
            "ゆい「……はーい。せんせ、優しいね♡」\n" +
            "のりおみ「……助かります」",
        reaction_bad:
            "ゆい「先生、日本語ちょっと変だよ？今の空気でそれは草♡」\n" +
            "のりおみ「誤字ですね。文脈が崩れてます」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_iya_miss",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねえ、のりおみくんってさ、嫌なことあったら言っていいんだよ？」\n" +
            "のりおみ「……言わなくても平気だよ」\n" +
            "ゆい「それってさ、嫌じゃないってことだよね？♡」\n" +
            "のりおみ「……違う」\n" +
            "ゆい「え、なにが違うの？」\n" +
            "のりおみ「……嫌、では……」\n" +
            "のりおみ「……いや……」\n" +
            "ゆい「えっ、なに？今の♡」\n" +
            "ゆい「“嫌”って言いかけた？かわいい〜♡」",
        text: "今の発言はここで止めましょう。",
        kana: "いまのはつげんはここでとめましょう。",
        romaji: "ima no hatsugen wa koko de tomemashou",
        reaction_good:
            "のりおみ「……すみません」\n" +
            "ゆい「も〜、先生が遮るから続き聞けなかったじゃん♡」",
        reaction_bad:
            "ゆい「先生、助詞おかしくない？緊張してる？♡」\n" +
            "のりおみ「タイミングが悪いです」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_limit_night",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……また、来た」\n" +
            "くう「……何回目」\n" +
            "のりおみ「数えてない。痛い」\n" +
            "くう「……チッ」\n" +
            "のりおみ「ごめん」\n" +
            "くう「それ言うなって言ってるだろ」\n" +
            "のりおみ「でも……」\n" +
            "くう「……もう限界」\n" +
            "くう「毎晩壊れて、朝は何事もない顔して」\n" +
            "くう「それで“平気”なわけないだろ！」\n" +
            "のりおみ「……くう」\n" +
            "くう「……出てく。頭冷やす」",
        text: "一度休憩を入れなさい。",
        kana: "いちどきゅうけいをいれなさい。",
        romaji: "ichido kyuukei o irenasai",
        reaction_good:
            "くう「……分かった」\n" +
            "のりおみ「……ありがとうございます」",
        reaction_bad:
            "くう「先生、漢字違う。今それどころじゃないけど」\n" +
            "のりおみ「誤変換ですね」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_touch_logic",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ねぇ、のりおみくん」\n" +
            "ゆい「前にさ、嫌じゃないって言ってたよね？」\n" +
            "のりおみ「……言ってない」\n" +
            "ゆい「否定してない♡」\n" +
            "ゆい「じゃあさ、嫌じゃないなら触るね♡」\n" +
            "のりおみ「……待て」\n" +
            "ゆい「え、嫌なの？」\n" +
            "ゆい「嫌って言わないと、分かんないよ♡」",
        text: "距離感に気をつけなさい。",
        kana: "きょりかんにきをつけなさい。",
        romaji: "kyorikan ni ki o tsukenasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "ゆい「先生、誤字ってる♡」\n" +
            "のりおみ「そこ違う」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_soji_break_air",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「うわ空気おっも」\n" +
            "そうじ「のりおみ生きてる？」\n" +
            "ゆい「もう、そうじくん空気読んで♡」\n" +
            "そうじ「この空気で読むもクソもある？」\n" +
            "のりおみ「……放っといてくれ」\n" +
            "そうじ「それ言えたなら進歩じゃん」",
        text: "授業に集中しなさい。",
        kana: "じゅぎょうにしゅうちゅうしなさい。",
        romaji: "jugyou ni shuuchuu shinasai",
        reaction_good:
            "そうじ「はーい」\n" +
            "のりおみ「……」",
        reaction_bad:
            "そうじ「先生誤字ってるぞー」\n" +
            "ゆい「かわいい♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_hate_abort",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ",
        start_msg:
            "ゆい「ね、さっきの続きだけど♡」\n" +
            "ゆい「嫌だったら言っていいんだよ？」\n" +
            "のりおみ「……」\n" +
            "のりおみ「……別に」\n" +
            "ゆい「ふふ♡」\n" +
            "ゆい「じゃあ嫌じゃないね♡」",
        text: "話はそこまで。",
        kana: "はなしはそこまで。",
        romaji: "hanashi wa soko made",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……」",
        reaction_bad:
            "ゆい「先生、typo♡」\n" +
            "のりおみ「今はそれどころじゃない」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_lunch_invite",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「今日さ、一緒にお弁当食べよ？」\n" +
            "ゆい「ゆいの手作り弁当、食べる？♡」\n" +
            "のりおみ「……気持ちは、嬉しいよ」\n" +
            "ゆい「じゃあ、一緒に食べよ♡」\n" +
            "のりおみ「……断る理由もないな」\n" +
            "ゆい「やった♡逃げないでね？」",
        text: "静かに昼食をとりなさい。",
        kana: "しずかにちゅうしょくをとりなさい。",
        romaji: "shizuka ni chuushoku o torinasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……いただきます」",
        reaction_bad:
            "ゆい「先生、ちゅう“しょく”ね♡」\n" +
            "のりおみ「今そこ？」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_walk_home",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ね、今日さ」\n" +
            "ゆい「一緒に帰ろ？♡」\n" +
            "のりおみ「……用事は？」\n" +
            "ゆい「用事作るの♡」\n" +
            "のりおみ「それ理由になってない」\n" +
            "ゆい「でも断らないでしょ？」",
        text: "下校時は寄り道を控えなさい。",
        kana: "げこうじはよりみちをひかえなさい。",
        romaji: "gekouji wa yorimichi o hikaenasai",
        reaction_good:
            "ゆい「じゃあ真っ直ぐ一緒に帰ろ♡」\n" +
            "のりおみ「……話が早いな」",
        reaction_bad:
            "ゆい「先生、より“みち”ね♡」\n" +
            "のりおみ「チェック厳しいな」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_side_comment",
        subtype: "chat",
        group: "1-3",
        sender: "こうた",
        start_msg:
            "こうた「……のりおみ」\n" +
            "こうた「嫌なら嫌と言えばいい」\n" +
            "のりおみ「分かってる」\n" +
            "こうた「分かってて言えないなら、選択だ」\n" +
            "ゆい「選んでくれてるんだよね？♡」\n" +
            "こうた「……解釈が飛躍してる」",
        text: "感情的にならず話し合いなさい。",
        kana: "かんじょうてきにならずはなしあいなさい。",
        romaji: "kanjouteki ni narazu hanashiainasai",
        reaction_good:
            "こうた「……以上だ」\n" +
            "のりおみ「助言は感謝する」",
        reaction_bad:
            "こうた「先生、論点ズレてます」\n" +
            "ゆい「えー♡」",
        images: ["kouta.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_low_voice",
        subtype: "chat",
        group: "1-3",
        sender: "くう",
        start_msg:
            "くう「……無理してない？」\n" +
            "のりおみ「別に」\n" +
            "ゆい「くうちゃん、心配性♡」\n" +
            "くう「……のりおみ、夜は帰るよね」\n" +
            "のりおみ「……ああ」",
        text: "私語を控えなさい。",
        kana: "しごをひかえなさい。",
        romaji: "shigo o hikaenasai",
        reaction_good:
            "くう「……」\n" +
            "のりおみ「……」",
        reaction_bad:
            "くう「誤字」\n" +
            "のりおみ「短っ」",
        images: ["kuu.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_air_break",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「はいはいラブコメ現場こちらですか」\n" +
            "ゆい「ちがうもん♡」\n" +
            "のりおみ「違わなくはない」\n" +
            "そうじ「認めんなw」\n" +
            "そうじ「昼飯一緒＝帰りもセット理論？」",
        text: "騒がず行動しなさい。",
        kana: "さわがずこうどうしなさい。",
        romaji: "sawagazu koudou shinasai",
        reaction_good:
            "そうじ「りょーかい」\n" +
            "のりおみ「助かった」",
        reaction_bad:
            "そうじ「先生、日本語あやしいぞ」\n" +
            "ゆい「かわいい♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_special_bento",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ねぇ」\n" +
            "ゆい「ゆいの手作り弁当、のりおみくん食べるよね？♡」\n" +
            "のりおみ「……どうしてそうなる」\n" +
            "ゆい「だって特別じゃなきゃ作らないもん♡」\n" +
            "のりおみ「……一般論として、それは重い」\n" +
            "ゆい「えー？じゃあ、ゆいは特別じゃないの？」",
        text: "昼食中の会話は控えめにしなさい。",
        kana: "ちゅうしょくちゅうのかいわはひかえめにしなさい。",
        romaji: "chuushokuchuu no kaiwa wa hikaeme ni shinasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……いただきます」",
        reaction_bad:
            "ゆい「先生、“ひかえめ”ね♡」\n" +
            "のりおみ「そこ訂正する余裕はあるんだな」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_notice",
        subtype: "chat",
        group: "1-3",
        sender: "くう",
        start_msg:
            "くう「……それ、逃げ道潰してる」\n" +
            "ゆい「なにが？」\n" +
            "のりおみ「くう、いい」\n" +
            "くう「よくない」\n" +
            "くう「“特別”を条件にすると、断れなくなる」\n" +
            "ゆい「えー？愛情だよ？♡」",
        text: "言い争いは控えなさい。",
        kana: "いいあらそいはひかえなさい。",
        romaji: "iiarasoi wa hikaenasai",
        reaction_good:
            "くう「……以上」\n" +
            "のりおみ「助かる」",
        reaction_bad:
            "くう「誤字」\n" +
            "ゆい「冷たい♡」",
        images: ["kuu.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_bento_joke",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「手作り＝特別理論きたな」\n" +
            "そうじ「じゃあ給食のおばちゃん全員彼女じゃん」\n" +
            "ゆい「失礼なんだけど♡」\n" +
            "のりおみ「……例えは雑だが助かった」",
        text: "冗談はほどほどにしなさい。",
        kana: "じょうだんはほどほどにしなさい。",
        romaji: "joudan wa hodohodo ni shinasai",
        reaction_good:
            "そうじ「りょーかい」\n" +
            "のりおみ「感謝する」",
        reaction_bad:
            "そうじ「先生、ほどほどな」\n" +
            "ゆい「ふーん♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_meri_kindness",
        subtype: "chat",
        group: "1-3",
        sender: "めり",
        start_msg:
            "めり「手作りのお弁当って、愛情だよね…」\n" +
            "のりおみ「……一般論としては」\n" +
            "ゆい「でしょ♡」\n" +
            "めり「大切にしてあげてね…！」",
        text: "周囲への配慮を忘れないように。",
        kana: "しゅういへのはいりょをわすれないように。",
        romaji: "shuui e no hairyo o wasurena i you ni",
        reaction_good:
            "めり「はい…！」\n" +
            "のりおみ「……努力はする」",
        reaction_bad:
            "めり「先生、はいりょ…」\n" +
            "のりおみ「連鎖するな」",
        images: ["meri.png", "yui.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_touch_logic",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ねぇ、のりおみくん」\n" +
            "ゆい「前にさ、嫌じゃないって言ってたよね？」\n" +
            "のりおみ「……言ってない」\n" +
            "ゆい「否定してない♡」\n" +
            "ゆい「じゃあさ、嫌じゃないなら触るね♡」\n" +
            "のりおみ「……待て」\n" +
            "ゆい「え、嫌なの？」\n" +
            "ゆい「嫌って言わないと、分かんないよ♡」",
        text: "距離感に気をつけなさい。",
        kana: "きょりかんにきをつけなさい。",
        romaji: "kyorikan ni ki o tsukenasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……助かった」",
        reaction_bad:
            "ゆい「先生、誤字ってる♡」\n" +
            "のりおみ「そこ違う」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_soji_break_air",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「うわ空気おっも」\n" +
            "そうじ「のりおみ生きてる？」\n" +
            "ゆい「もう、そうじくん空気読んで♡」\n" +
            "そうじ「この空気で読むもクソもある？」\n" +
            "のりおみ「……放っといてくれ」\n" +
            "そうじ「それ言えたなら進歩じゃん」",
        text: "授業に集中しなさい。",
        kana: "じゅぎょうにしゅうちゅうしなさい。",
        romaji: "jugyou ni shuuchuu shinasai",
        reaction_good:
            "そうじ「はーい」\n" +
            "のりおみ「……」",
        reaction_bad:
            "そうじ「先生誤字ってるぞー」\n" +
            "ゆい「かわいい♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_hate_abort",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ",
        start_msg:
            "ゆい「ね、さっきの続きだけど♡」\n" +
            "ゆい「嫌だったら言っていいんだよ？」\n" +
            "のりおみ「……」\n" +
            "のりおみ「……別に」\n" +
            "ゆい「ふふ♡」\n" +
            "ゆい「じゃあ嫌じゃないね♡」",
        text: "話はそこまで。",
        kana: "はなしはそこまで。",
        romaji: "hanashi wa soko made",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……」",
        reaction_bad:
            "ゆい「先生、typo♡」\n" +
            "のりおみ「今はそれどころじゃない」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_lunch_invite",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「今日さ、一緒にお弁当食べよ？」\n" +
            "ゆい「ゆいの手作り弁当、食べる？♡」\n" +
            "のりおみ「……気持ちは、嬉しいよ」\n" +
            "ゆい「じゃあ、一緒に食べよ♡」\n" +
            "のりおみ「……断る理由もないな」\n" +
            "ゆい「やった♡逃げないでね？」",
        text: "静かに昼食をとりなさい。",
        kana: "しずかにちゅうしょくをとりなさい。",
        romaji: "shizuka ni chuushoku o torinasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……いただきます」",
        reaction_bad:
            "ゆい「先生、ちゅう“しょく”ね♡」\n" +
            "のりおみ「今そこ？」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_walk_home",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ね、今日さ」\n" +
            "ゆい「一緒に帰ろ？♡」\n" +
            "のりおみ「……用事は？」\n" +
            "ゆい「用事作るの♡」\n" +
            "のりおみ「それ理由になってない」\n" +
            "ゆい「でも断らないでしょ？」",
        text: "下校時は寄り道を控えなさい。",
        kana: "げこうじはよりみちをひかえなさい。",
        romaji: "gekouji wa yorimichi o hikaenasai",
        reaction_good:
            "ゆい「じゃあ真っ直ぐ一緒に帰ろ♡」\n" +
            "のりおみ「……話が早いな」",
        reaction_bad:
            "ゆい「先生、より“みち”ね♡」\n" +
            "のりおみ「チェック厳しいな」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_side_comment",
        subtype: "chat",
        group: "1-3",
        sender: "こうた",
        start_msg:
            "こうた「……のりおみ」\n" +
            "こうた「嫌なら嫌と言えばいい」\n" +
            "のりおみ「分かってる」\n" +
            "こうた「分かってて言えないなら、選択だ」\n" +
            "ゆい「選んでくれてるんだよね？♡」\n" +
            "こうた「……解釈が飛躍してる」",
        text: "感情的にならず話し合いなさい。",
        kana: "かんじょうてきにならずはなしあいなさい。",
        romaji: "kanjouteki ni narazu hanashiainasai",
        reaction_good:
            "こうた「……以上だ」\n" +
            "のりおみ「助言は感謝する」",
        reaction_bad:
            "こうた「先生、論点ズレてます」\n" +
            "ゆい「えー♡」",
        images: ["kouta.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_low_voice",
        subtype: "chat",
        group: "1-3",
        sender: "くう",
        start_msg:
            "くう「……無理してない？」\n" +
            "のりおみ「別に」\n" +
            "ゆい「くうちゃん、心配性♡」\n" +
            "くう「……のりおみ、夜は帰るよね」\n" +
            "のりおみ「……ああ」",
        text: "私語を控えなさい。",
        kana: "しごをひかえなさい。",
        romaji: "shigo o hikaenasai",
        reaction_good:
            "くう「……」\n" +
            "のりおみ「……」",
        reaction_bad:
            "くう「誤字」\n" +
            "のりおみ「短っ」",
        images: ["kuu.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_air_break",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「はいはいラブコメ現場こちらですか」\n" +
            "ゆい「ちがうもん♡」\n" +
            "のりおみ「違わなくはない」\n" +
            "そうじ「認めんなw」\n" +
            "そうじ「昼飯一緒＝帰りもセット理論？」",
        text: "騒がず行動しなさい。",
        kana: "さわがずこうどうしなさい。",
        romaji: "sawagazu koudou shinasai",
        reaction_good:
            "そうじ「りょーかい」\n" +
            "のりおみ「助かった」",
        reaction_bad:
            "そうじ「先生、日本語あやしいぞ」\n" +
            "ゆい「かわいい♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_special_bento",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「ねぇ」\n" +
            "ゆい「ゆいの手作り弁当、のりおみくん食べるよね？♡」\n" +
            "のりおみ「……どうしてそうなる」\n" +
            "ゆい「だって特別じゃなきゃ作らないもん♡」\n" +
            "のりおみ「……一般論として、それは重い」\n" +
            "ゆい「えー？じゃあ、ゆいは特別じゃないの？」",
        text: "昼食中の会話は控えめにしなさい。",
        kana: "ちゅうしょくちゅうのかいわはひかえめにしなさい。",
        romaji: "chuushokuchuu no kaiwa wa hikaeme ni shinasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……いただきます」",
        reaction_bad:
            "ゆい「先生、“ひかえめ”ね♡」\n" +
            "のりおみ「そこ訂正する余裕はあるんだな」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_notice",
        subtype: "chat",
        group: "1-3",
        sender: "くう",
        start_msg:
            "くう「……それ、逃げ道潰してる」\n" +
            "ゆい「なにが？」\n" +
            "のりおみ「くう、いい」\n" +
            "くう「よくない」\n" +
            "くう「“特別”を条件にすると、断れなくなる」\n" +
            "ゆい「えー？愛情だよ？♡」",
        text: "言い争いは控えなさい。",
        kana: "いいあらそいはひかえなさい。",
        romaji: "iiarasoi wa hikaenasai",
        reaction_good:
            "くう「……以上」\n" +
            "のりおみ「助かる」",
        reaction_bad:
            "くう「誤字」\n" +
            "ゆい「冷たい♡」",
        images: ["kuu.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_soji_bento_joke",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「手作り＝特別理論きたな」\n" +
            "そうじ「じゃあ給食のおばちゃん全員彼女じゃん」\n" +
            "ゆい「失礼なんだけど♡」\n" +
            "のりおみ「……例えは雑だが助かった」",
        text: "冗談はほどほどにしなさい。",
        kana: "じょうだんはほどほどにしなさい。",
        romaji: "joudan wa hodohodo ni shinasai",
        reaction_good:
            "そうじ「りょーかい」\n" +
            "のりおみ「感謝する」",
        reaction_bad:
            "そうじ「先生、ほどほどな」\n" +
            "ゆい「ふーん♡」",
        images: ["soji.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_meri_kindness",
        subtype: "chat",
        group: "1-3",
        sender: "めり",
        start_msg:
            "めり「手作りのお弁当って、愛情だよね…」\n" +
            "のりおみ「……一般論としては」\n" +
            "ゆい「でしょ♡」\n" +
            "めり「大切にしてあげてね…！」",
        text: "周囲への配慮を忘れないように。",
        kana: "しゅういへのはいりょをわすれないように。",
        romaji: "shuui e no hairyo o wasurena i you ni",
        reaction_good:
            "めり「はい…！」\n" +
            "のりおみ「……努力はする」",
        reaction_bad:
            "めり「先生、はいりょ…」\n" +
            "のりおみ「連鎖するな」",
        images: ["meri.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_breakdown_kuu_home",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "くう「……靴、そこ」\n" +
            "のりおみ「あ……悪い」\n" +
            "くう「……今日も、やられた？」\n" +
            "のりおみ「別に」\n" +
            "くう「……嘘」\n" +
            "のりおみ「……」\n" +
            "のりおみ「正論なんだよ」\n" +
            "のりおみ「全部、正しい」\n" +
            "のりおみ「だから……反論できない」\n" +
            "くう「……」\n" +
            "のりおみ「俺が悪いって言われ続けるとさ」\n" +
            "のりおみ「だんだん……何が悪いのかも、分からなくなる」\n" +
            "のりおみ「……っ」\n" +
            "（呼吸が乱れる）\n" +
            "のりおみ「やめて……もう……」",
        text: "落ち着いて、深呼吸しましょう。",
        kana: "おちついて、しんこきゅうしましょう。",
        romaji: "ochitsuite, shinkokyuu shimashou",
        reaction_good:
            "くう「……先生、今は刺激しないで」\n" +
            "くう「私がやる」\n" +
            "のりおみ「……ごめ……」",
        reaction_bad:
            "くう「先生、誤字」\n" +
            "くう「今は正確さ、必要」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_noriomi_flashback_yui",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "（脳裏に声がよみがえる）\n" +
            "ゆい「わたし、壊れたらどうするの？」\n" +
            "ゆい「のりおみくんは、平気なの？」\n" +
            "のりおみ「……違う……」\n" +
            "のりおみ「そんなつもりじゃ……」\n" +
            "ゆい「じゃあ、どういうつもり？」\n" +
            "（耳鳴り）\n" +
            "のりおみ「やめ……」",
        text: "幻聴ではありませんよ。",
        kana: "げんちょうではありませんよ。",
        romaji: "genchou dewa arimasen yo",
        reaction_good:
            "のりおみ「……分かってる……」\n" +
            "くう「過去だ。今じゃない」",
        reaction_bad:
            "のりおみ「……先生、今それ言う……？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_noriomi_kouta_echo",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆こうた",
        start_msg:
            "（思い出す声）\n" +
            "こうた「君は被害者だと思ってる？」\n" +
            "こうた「でも、相手から見たら加害者だよ」\n" +
            "のりおみ「……っ」\n" +
            "のりおみ「違う……」\n" +
            "のりおみ「俺は……ただ……」\n" +
            "（言葉にならない）",
        text: "考えを言語化しましょう。",
        kana: "かんがえをげんごかしましょう。",
        romaji: "kangae o gengoka shimashou",
        reaction_good:
            "くう「無理に言葉にしなくていい」\n" +
            "くう「今は、壊れろ」",
        reaction_bad:
            "くう「先生、今それは拷問」",
        images: ["noriomi.png", "kouta.png"]
    },
    {
        id: "chat_kuu_final_word",
        subtype: "chat",
        group: "1-3",
        sender: "くう",
        start_msg:
            "くう「……のりおみ」\n" +
            "くう「全部、君の責任にするのは」\n" +
            "くう「楽だからだ」\n" +
            "くう「世界は、怠け者が多い」\n" +
            "くう「……今日は、寝ろ」",
        text: "見守ります。",
        kana: "みまもります。",
        romaji: "mimamori masu",
        reaction_good:
            "くう「それでいい」",
        reaction_bad:
            "くう「先生、誤字多い」",
        images: ["kuu.png"]
    },
    {
        id: "chat_kouta_truth_act",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「ねえ、のりおみ」\n" +
            "こうた「最初の頃の僕さ」\n" +
            "こうた「……優しかったでしょ？」\n" +
            "のりおみ「……」\n" +
            "こうた「安心させる言い方して」\n" +
            "こうた「ちゃんと共感してる“風”で」\n" +
            "こうた「君、あれ好きだったよね」\n" +
            "のりおみ「……やめて」\n" +
            "こうた「でもさ」\n" +
            "こうた「正直に言うね」\n" +
            "こうた「――あれ、演技だから」\n" +
            "（一瞬、空気が凍る）\n" +
            "のりおみ「……は？」\n" +
            "こうた「場を円滑に回すため」\n" +
            "こうた「“優等生”でいるのが一番効率的だった」\n" +
            "こうた「感情じゃない。戦略」\n" +
            "のりおみ「……じゃあ、今は？」\n" +
            "こうた「今？」\n" +
            "こうた「今は、君に本当のこと言ってる」",
        text: "冷静に話してください。",
        kana: "れいせいにはなしてください。",
        romaji: "reisei ni hanashite kudasai",
        reaction_good:
            "こうた「冷静だよ。これ以上なく」",
        reaction_bad:
            "こうた「先生、誤字。集中して」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_yui_sub_account",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "（深夜、スマホ）\n" +
            "のりおみ「……」\n" +
            "『謝られると逆に気まずい』\n" +
            "『言葉のやり取りが薄い』\n" +
            "『気遣ってるのバレバレだよ』\n" +
            "のりおみ「……はは」\n" +
            "のりおみ「……そうだよな」\n" +
            "（手が震える）\n" +
            "のりおみ「全部……見透かされてた」\n" +
            "のりおみ「俺の社交辞令……」\n" +
            "のりおみ「気遣い……」\n" +
            "のりおみ「……全部、嫌われてた」",
        text: "画面を閉じましょう。",
        kana: "がめんをとじましょう。",
        romaji: "gamen o tojimarimashou",
        reaction_good:
            "のりおみ「……無理」",
        reaction_bad:
            "のりおみ「先生、誤字ってる。今それ？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_kuu_aftermath",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……見たんだ」\n" +
            "のりおみ「……見ちゃった」\n" +
            "くう「まあ」\n" +
            "くう「書いてあること、事実だし」\n" +
            "のりおみ「……」\n" +
            "くう「でも」\n" +
            "くう「“悪意”とは限らない」\n" +
            "くう「ゆいは、感情を吐く場所が必要なだけ」\n" +
            "のりおみ「……それが、俺？」\n" +
            "くう「……結果的には」",
        text: "支え合いましょう。",
        kana: "ささえあいましょう。",
        romaji: "sasaeaimashou",
        reaction_good:
            "くう「理想論」",
        reaction_bad:
            "くう「先生、誤字。今それ言う？」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_uraaka_exposed",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「のりおみくん、ゆいの裏垢…見たでしょ？♡」\n" +
            "のりおみ「……見た」\n" +
            "ゆい「ふふ♡ ちゃんと読んでくれたんだ」\n" +
            "のりおみ「偶然だよ。通知で流れてきただけ」\n" +
            "ゆい「でもさ？」\n" +
            "ゆい「ゆいの気持ち、分かってくれた？」\n" +
            "のりおみ「……感想を書いただけだろ」\n" +
            "ゆい「違うよ♡ 本音だよ」\n" +
            "のりおみ「……それを、本人に見せる前提で書くのは悪趣味だ」\n" +
            "ゆい「えー？ でも見たのはのりおみくんでしょ？」\n" +
            "ゆい「逃げないでよ。共犯なんだから♡」",
        text: "続けてください。", 
        kana: "つづけてください。",
        romaji: "tsuzukete kudasai",
        reaction_good:
            "ゆい「ありがと、先生♡」\n" +
            "のりおみ「……続ける意味、あるのか？」",
        reaction_bad:
            "ゆい「先生、誤字ってますよ♡ 焦ってる？」\n" +
            "のりおみ「入力ミスですね。論点はそこじゃない」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_date_no_escape",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「のりおみくん♡ お出かけしよ？」\n" +
            "のりおみ「……どういう意味で？」\n" +
            "ゆい「デートだよ♡」\n" +
            "のりおみ「……」\n" +
            "ゆい「無言ってことは、嫌じゃないってことだよね？」\n" +
            "のりおみ「そういう論理は成立しない」\n" +
            "ゆい「でも断らないんだ」\n" +
            "ゆい「ゆい、断られると思って勇気出したのに」\n" +
            "のりおみ「……責任の押し付け方が雑だ」\n" +
            "ゆい「ひど」\n" +
            "ゆい「ゆいが傷ついたら、のりおみくんのせいだよ？」\n" +
            "のりおみ「……予定、確認する」",
        text: "続けてください。", 
        kana: "つづけてください。",
        romaji: "tsuzukete kudasai",
        reaction_good:
            "ゆい「やった♡ じゃあデートだね」\n" +
            "のりおみ「……確定させてない」",
        reaction_bad:
            "ゆい「先生、誤字ってるよ♡ 落ち着こ？」\n" +
            "のりおみ「入力ミスですね。話は続いてます」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_fe_overload",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……くう」\n" +
            "くう「顔色、死んでる」\n" +
            "のりおみ「息が……浅い」\n" +
            "くう「またか」\n" +
            "のりおみ「頭が熱いのに、手が冷たい」\n" +
            "のりおみ「胸の奥が……ざらざらする」\n" +
            "くう「座れ。考えるな」\n" +
            "のりおみ「考えないと……全部、俺のせいになる」\n" +
            "のりおみ「断らなかったのも、期待させたのも」\n" +
            "のりおみ「全部……俺が悪いって顔される」\n" +
            "（のりおみの手が震え、言葉が途切れる）\n" +
            "のりおみ「……っ、息、吸えてる？」\n" +
            "くう「吸えてる。ここにいる」",
        text: "落ち着いてください。", 
        kana: "おちついてください。",
        romaji: "ochitsuite kudasai",
        reaction_good:
            "くう「……少し、戻ってきたな」\n" +
            "のりおみ「……ごめん」",
        reaction_bad:
            "くう「先生、誤字。今それどころじゃない」\n" +
            "のりおみ「typoですね……すみません」",
        images: ["noriomi.png", "kuu.png"]
    },
    { 
        id: "chat_yui_victim_move",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ね、のりおみくん」\n" +
            "のりおみ「……何」\n" +
            "ゆい「ゆい、昨日ずっと考えてた」\n" +
            "ゆい「嫌なら嫌って言ってほしかったな、って」\n" +
            "のりおみ「……言えると思ってるのか？」\n" +
            "ゆい「え？」\n" +
            "ゆい「ゆい、そんな怖い？」\n" +
            "ゆい「傷ついた顔してたら、悪者みたいじゃん」\n" +
            "のりおみ「……それが、問題だって言ってる」",
        text: "会話を続けてください。", 
        kana: "かいわをつづけてください。",
        romaji: "kaiwa wo tsuzukete kudasai",
        reaction_good:
            "ゆい「ふふ♡ 難しいこと言うね」\n" +
            "のりおみ「……論点ずらすな」",
        reaction_bad:
            "ゆい「先生、誤字だよ♡」\n" +
            "のりおみ「変換ミスですね」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_noriomi_responsibility",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「君が不登校だった間、クラスがどうなったか知ってる？」\n" +
            "のりおみ「……さあ。想像はつくけど」\n" +
            "こうた「戻ってきたなら、“最低限の責任”は果たすべきじゃない？」\n" +
            "のりおみ「責任、ね……」\n" +
            "こうた「体調が悪いのは分かるよ。でも——」\n" +
            "（一拍置く）\n" +
            "こうた「それを理由に、人に迷惑かけ続けるのは違う」\n" +
            "のりおみ「……」\n" +
            "こうた「感情で止まる癖、やめなよ」\n" +
            "のりおみ「……わからない……」\n" +
            "のりおみ「どうしたら……正しいのか……」\n" +
            "こうた「正しいのは、前に進むこと」\n" +
            "こうた「泣いてる時間が無駄なんだ」\n" +
            "のりおみ「……じゃあ……俺が今まで感じてたのって……全部、無駄だった？」\n" +
            "（沈黙）\n" +
            "こうた「結果が出てないなら、そうだね」",
        text: "少し声のトーンを落としてください。", 
        kana: "すこしこえのとーんをおとしてください。",
        romaji: "sukoshi koe no toon wo otoshite kudasai",
        reaction_good:
            "こうた「……失礼しました。続けます」\n" +
            "のりおみ「……いえ。大丈夫、です」",
        reaction_bad:
            "こうた「今の注意、主語が抜けてます」\n" +
            "こうた「正確に伝えてください」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_yui_date",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "ゆい「ねぇ、のりおみくん……今日、デートだよ？」\n" +
            "のりおみ「……うん。そうだね」\n" +
            "ゆい「その反応、冷たくない？」\n" +
            "のりおみ「いや……嬉しい、よ。多分」\n" +
            "ゆい「多分？ ふーん……」\n" +
            "（ゆい、腕に絡みつく）\n" +
            "ゆい「ねぇ、わたしのこと……ちゃんと見てる？」\n" +
            "のりおみ「見てる、つもり……」\n" +
            "ゆい「“つもり”ばっかり」\n" +
            "ゆい「くうちゃんの前だと、もっと喋るよね？」\n" +
            "のりおみ「……それは……」\n" +
            "ゆい「ねぇ」\n" +
            "ゆい「わたしがいなくなったら、泣く？」\n" +
            "のりおみ「……やめて……」\n" +
            "ゆい「ふふ。ちゃんと感情、動いてるじゃん」",
        text: "人目のある場所です。距離を保ってください。", 
        kana: "ひとめのあるばしょです。きょりをたもってください。",
        romaji: "hitome no aru basho desu. kyori wo tamotte kudasai",
        reaction_good:
            "ゆい「はーい。先生こわーい」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "ゆい「先生、誤字ってるよ？」\n" +
            "ゆい「緊張すると可愛いね」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_noriomi_yui_pain",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "（人通りの多い駅前）\n" +
            "ゆい「ね、寒い〜」\n" +
            "（ゆい、自然に腕に絡みつく）\n" +
            "のりおみ「……っ」\n" +
            "（一瞬、息が止まる）\n" +
            "ゆい「？ どしたの？」\n" +
            "のりおみ「……いや、大丈夫」\n" +
            "（胸の奥が、ぎゅっと締め付けられる）\n" +
            "のりおみ（まずい……痛い……）\n" +
            "ゆい「顔、固くない？」\n" +
            "ゆい「わたしと一緒、嫌？」\n" +
            "のりおみ「違う……違うよ」\n" +
            "（指先が震える）\n" +
            "ゆい「……へぇ」\n" +
            "ゆい「今、ちゃんと反応したね」",
        text: "少し距離を取ってください。", 
        kana: "すこしきょりをとってください。",
        romaji: "sukoshi kyori wo totte kudasai",
        reaction_good:
            "ゆい「はーい。先生に怒られちゃった」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "ゆい「先生、“距離”の字ちがうよ？」\n" +
            "ゆい「痛いとこ突かれた？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_kouta_enfj_past",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「のりおみ、最近元気ないよね」\n" +
            "のりおみ「……そう見える？」\n" +
            "こうた「うん。でもさ」\n" +
            "こうた「無理して話さなくていいから」\n" +
            "のりおみ「……」\n" +
            "こうた「ここに来てるだけで、十分だと思うよ」\n" +
            "こうた「前に進む速さなんて、人それぞれだし」\n" +
            "のりおみ「……それ、正しいの？」\n" +
            "こうた「正しいかどうかより」\n" +
            "こうた「君が壊れない方が、大事」",
        text: "良い雰囲気ですね。", 
        kana: "よいふんいきですね。",
        romaji: "yoi funiki desu ne",
        reaction_good:
            "こうた「ありがとうございます」\n" +
            "のりおみ「……少し、楽です」",
        reaction_bad:
            "こうた「“雰囲気”の送り仮名、違います」\n" +
            "（昔のこうたは、やんわり指摘する）",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_now_gap",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "のりおみ「……前はさ」\n" +
            "のりおみ「そんな言い方、しなかったよね」\n" +
            "こうた「前？」\n" +
            "こうた「……ああ。非効率だった頃の話？」\n" +
            "のりおみ「……」\n" +
            "こうた「感情を優先しても、何も改善しなかった」\n" +
            "こうた「だから切り替えた」\n" +
            "のりおみ「……人も？」\n" +
            "こうた「必要なら」",
        text: "言葉を選びなさい。", 
        kana: "ことばをえらびなさい。",
        romaji: "kotoba wo erabinasai",
        reaction_good:
            "こうた「……配慮します」",
        reaction_bad:
            "こうた「先生、今の注意は抽象的です」\n" +
            "こうた「具体性に欠けます」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_yui_selfharm",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "（放課後、人気のない廊下）\n" +
            "ゆい「ねぇ……のりおみ」\n" +
            "のりおみ「……なに」\n" +
            "ゆい「最近さ」\n" +
            "ゆい「わたしがいなくなっても、平気そうだよね」\n" +
            "（ゆい、袖を引く）\n" +
            "のりおみ「……そんなこと」\n" +
            "ゆい「昨日もね、ちょっとだけ」\n" +
            "ゆい「ここ、赤くなったの」\n" +
            "（腕を近づける）\n" +
            "のりおみ「……っ、近……」\n" +
            "（胸が締め付けられる）\n" +
            "ゆい「ちゃんと見て？」\n" +
            "ゆい「ほら、触ってもいいよ」\n" +
            "のりおみ「……やめ……」\n" +
            "（声が震える）\n" +
            "ゆい「ねぇ」\n" +
            "ゆい「こうでもしないと、見てくれないでしょ？」",
        text: "距離を取りなさい。", 
        kana: "きょりをとりなさい。",
        romaji: "kyori wo torinasai",
        reaction_good:
            "ゆい「……先生、邪魔」\n" +
            "のりおみ「……助かります」",
        reaction_bad:
            "ゆい「先生、“距離”また間違えてる」\n" +
            "ゆい「注意する前に落ち着こ？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_noriomi_full_pain",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ",
        start_msg:
            "（保健室前の廊下）\n" +
            "のりおみ「……っ……」\n" +
            "（壁に手をつく）\n" +
            "（呼吸が浅くなる）\n" +
            "のりおみ「……だめ……」\n" +
            "（膝が震える）\n" +
            "（視界が歪む）\n" +
            "のりおみ（考えろ……考えろ……）\n" +
            "（何も考えられない）\n" +
            "（声が出ない）\n" +
            "（ただ、苦しい）",
        text: "座りなさい。", 
        kana: "すわりなさい。",
        romaji: "suwari nasai",
        reaction_good:
            "（のりおみ、ゆっくり座り込む）",
        reaction_bad:
            "（のりおみ、反応できない）\n" +
            "（意識が内側に沈む）",
        images: ["noriomi.png"]
    },
    {
        id: "chat_kuu_finds",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……またか」\n" +
            "のりおみ「……ごめ」\n" +
            "くう「謝るな」\n" +
            "くう「生きてるだけで精一杯なんだろ」",
        text: "付き添います。", 
        kana: "つきそいます。",
        romaji: "tsukisoimasu",
        reaction_good:
            "くう「……ありがとう」",
        reaction_bad:
            "くう「敬語いらない」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_yui_noriomi_trigger",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇのりおみ……ちょっとだけ、触ってもいい？」\n" +
            "のりおみ「……やめろ。距離、取れ」\n" +
            "ゆい「またそうやって拒否する。ゆい、悪いことした？」\n" +
            "のりおみ「質問の形をした脅迫はやめてくれ」\n" +
            "ゆい「だって……ゆい、消えちゃいそうなんだもん」\n" +
            "のりおみ「……っ、来るな……！」",
        text: "落ち着いて話しなさい。", 
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "ゆい「……先生がいるなら、今日は我慢する」\n" +
            "のりおみ「……助かりました」",
        reaction_bad:
            "ゆい「漢字間違えてるよ？先生、焦ってるの？」\n" +
            "のりおみ「指摘される前に確認した方がいい」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_pain_attack",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……っ、視界が歪む……」\n" +
            "くう「座れ。呼吸、私のカウントに合わせろ」\n" +
            "のりおみ「身体が……燃えるみたいに痛い」\n" +
            "くう「今は考えるな。感じるな。ここにいろ」\n" +
            "のりおみ「……ごめん」\n" +
            "くう「謝る必要はない。生理反応だ」",
        text: "保健室に行きましょうか。", 
        kana: "ほけんしつにいきましょうか。",
        romaji: "hokenshitsu ni ikimashou ka",
        reaction_good:
            "くう「判断が早い」\n" +
            "のりおみ「……ありがとうございます」",
        reaction_bad:
            "くう「誤字。緊急時なんだから落ち着け」\n" +
            "のりおみ「先生、深呼吸」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_noriomi_kouta_realistic",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆こうた",
        start_msg:
            "こうた「避ければいい話だろ。合理的に考えろ」\n" +
            "のりおみ「……それが出来たら、もうやってる」\n" +
            "こうた「言い訳にしか聞こえないな」\n" +
            "のりおみ「……そう思うなら、それでいい」\n" +
            "こうた「逃げるのか？」\n" +
            "のりおみ「……話、これ以上は無理だ」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "のりおみ「……ありがとうございます」\n" +
            "こうた「……チッ」",
        reaction_bad:
            "こうた「誤字だ。正確に話せ」\n" +
            "のりおみ「……先生、今はそれどころじゃない」",
        images: ["noriomi.png", "kouta.png"]
    },
    {
        id: "chat_yui_boundary_failed",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ……ちょっとだけだから」\n" +
            "のりおみ「……ごめん、今日は無理」\n" +
            "ゆい「また拒否？ ゆい、嫌われた？」\n" +
            "のりおみ「……そんなこと言ってない」\n" +
            "ゆい「じゃあ、なんで？」\n" +
            "のりおみ「……俺が、弱いだけだ」",
        text: "距離を取りなさい。", 
        kana: "きょりをとりなさい。",
        romaji: "kyori wo torinasai",
        reaction_good:
            "ゆい「……先生が言うなら」\n" +
            "のりおみ「……助かります」",
        reaction_bad:
            "ゆい「先生、文字違うよ？」\n" +
            "のりおみ「……今は指摘しないでほしい」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_fe_burst_midnight",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい＆こうた",
        start_msg:
            "（深夜・くう宅）\n" +
            "のりおみ「……」\n" +
            "（スマホ画面は暗いのに、頭だけがうるさい）」\n" +
            "のりおみ「……それを言う資格、お前らにある？」",
        text: "落ち着いて話そう。",
        kana: "おちついてはなそう。",
        romaji: "ochitsuite hanasou",
        reaction_good:
            "のりおみ「……すみません」\n" +
            "（でも呼吸は戻らない）",
        reaction_bad:
            "こうた「“資格”の使い方、論理的に破綻してるよ？」\n" +
            "ゆい「先生まで責めるの……？」",
        images: ["noriomi.png", "yui.png", "kouta.png"]
    },
    {
        id: "chat_yui_victim_mode",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "のりおみ「……それを言う資格、お前らにある？」\n" +
            "ゆい「……え」\n" +
            "ゆい「いきなりどうしたの？」\n" +
            "ゆい「こわ……」\n" +
            "のりおみ「……ごめん」",
        text: "言い方に気をつけなさい。",
        kana: "いいかたにきをつけなさい。",
        romaji: "iikata ni ki wo tsukenasai",
        reaction_good:
            "ゆい「だよね……先生は分かってくれるよね🥺」",
        reaction_bad:
            "ゆい「“気をつける”って、誰が？」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_te_execution",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "のりおみ「……それを言う資格、お前らにある？」\n" +
            "こうた「資格？」\n" +
            "こうた「それ、被害者が言うセリフだよね」\n" +
            "こうた「君さ、3ヶ月不登校で」\n" +
            "こうた「クラスにどれだけ迷惑かけたか」\n" +
            "こうた「数字で考えたこと、ある？」",
        text: "感情論はやめなさい。",
        kana: "かんじょうろんはやめなさい。",
        romaji: "kanjouron wa yamenasai",
        reaction_good:
            "こうた「助かります」\n" +
            "のりおみ「……ごめん」",
        reaction_bad:
            "こうた「“感情論”の定義、分かって言ってます？」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_yui_twinray",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ね……」\n" +
            "ゆい「のりおみくんと、ゆいって似てるよね？」\n" +
            "ゆい「同じくらい弱くて、同じくらい寂しくて」\n" +
            "ゆい「ツインレイなんだと思うんだ♡」\n" +
            "のりおみ「……違う」",
        text: "距離を取りなさい。",
        kana: "きょりをとりなさい。",
        romaji: "kyori wo torinasai",
        reaction_good:
            "ゆい「……先生が言うなら」",
        reaction_bad:
            "ゆい「先生も、ゆいのこと嫌いなんだ？」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_after_burst",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……」\n" +
            "くう「今日はもう寝ろ」\n" +
            "のりおみ「……ごめ」\n" +
            "くう「謝るな」",
        text: "今日は解散。",
        kana: "きょうはかいさん。",
        romaji: "kyou wa kaisan",
        reaction_good:
            "くう「……よし」",
        reaction_bad:
            "くう「指示が雑」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_selfharm_threat",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ……」\n" +
            "ゆい「のりおみくん、既読つかないんだけど」\n" +
            "ゆい「ゆい、ちょっと怖くなってきちゃって……」\n" +
            "ゆい「また一人になるなら、切った方が楽かなって思って」\n" +
            "のりおみ「……やめて」\n" +
            "のりおみ「俺が悪かったから」\n" +
            "のりおみ「だから……傷つけないで」",
        text: "責任を背負う必要はありません。",
        kana: "せきにんをせおうひつようはありません。",
        romaji: "sekinin wo seou hitsuyou wa arimasen",
        reaction_good:
            "のりおみ「……でも」",
        reaction_bad:
            "ゆい「ゆいの気持ち、分からないんだ」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_yui_noriomi_trigger",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇ、のりおみくん🌸」\n" +
            "ゆい「最近さ、家でくうちゃんと何話してるの？」\n" +
            "のりおみ「……別に」\n" +
            "ゆい「まさか……ゆいの悪口言ってたりしないよね？♡」\n" +
            "のりおみ「……そんなわけ、ないだろ」\n" +
            "のりおみ「ただの……雑談だよ。天気とか、課題とか……それくらい」\n" +
            "ゆい「ふーん……そっかぁ」\n" +
            "ゆい「でもさ、くうちゃんにだけ本音出すの、ずるくない？」",
        text: "落ち着いて話しなさい。",
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "ゆい「えへ♡ 先生って優しいよね〜」\n" +
            "のりおみ「……はい」",
        reaction_bad:
            "ゆい「先生、入力ミスしてるよ？緊張してるの？♡」\n" +
            "のりおみ「……誤字、あります」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_intervene",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ＆ゆい",
        start_msg:
            "くう「……その話、今する必要ある？」\n" +
            "ゆい「え〜？くうちゃん、過保護すぎ♡」\n" +
            "くう「……私は事実を言ってるだけ」\n" +
            "のりおみ「……くう、いい」\n" +
            "ゆい「ほら〜。のりおみくん、ゆいよりくうちゃん選ぶんだ」",
        text: "これ以上はやめなさい。",
        kana: "これいじょうはやめなさい。",
        romaji: "kore ijou wa yame nasai",
        reaction_good:
            "くう「……ありがとうございます、先生」\n" +
            "ゆい「ちぇ〜」",
        reaction_bad:
            "くう「先生、止めるならちゃんと」\n" +
            "ゆい「中途半端〜♡」",
        images: ["kuu.png", "yui.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_te_attack",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「……見てて不快なんだよ」\n" +
            "のりおみ「……何が？」\n" +
            "こうた「自分が傷ついてる自覚もないまま、相手に配慮してるフリしてるところ」\n" +
            "こうた「それ、優しさじゃない。ただの思考放棄だ」\n" +
            "のりおみ「……」\n" +
            "こうた「選ばないことを選択だと思ってるなら、もう終わってる」",
        text: "言い過ぎです。",
        kana: "いいすぎです。",
        romaji: "iisugi desu",
        reaction_good:
            "こうた「事実しか言ってません」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "こうた「先生、論点ズレてます」\n" +
            "のりおみ「……庇われても、助かりません」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_yui_kouta_demon",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆こうた",
        start_msg:
            "ゆい「ね〜こうたくん♡ のりおみくんってさ、可哀想だよね？」\n" +
            "こうた「可哀想じゃない。選んだ結果だ」\n" +
            "ゆい「え〜冷た〜い。でも、そこが好き♡」\n" +
            "こうた「甘やかす気はない」\n" +
            "ゆい「ゆいはね、壊れるまで可愛がりたいタイプなの♡」",
        text: "その言い方は不適切です。",
        kana: "そのいいかたはふてきせつです。",
        romaji: "sono iikata wa futekisetsu desu",
        reaction_good:
            "こうた「……了解です」\n" +
            "ゆい「はーい♡」",
        reaction_bad:
            "ゆい「先生、漢字間違ってるよ〜？」\n" +
            "こうた「注意する側がミスしないでください」",
        images: ["yui.png", "kouta.png"]
    },
    {
        id: "chat_kuu_home_night_quiet",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……電気、消すけど」\n" +
            "のりおみ「……ああ」\n" +
            "くう「今日、学校……きつかった？」\n" +
            "のりおみ「別に。いつも通り」\n" +
            "くう「……そ」",
        text: "無理はしないでください。",
        kana: "むりはしないでください。",
        romaji: "muri wa shinaide kudasai",
        reaction_good:
            "くう「……はい」\n" +
            "のりおみ「……ありがとうございます」",
        reaction_bad:
            "くう「先生、敬語おかしい」\n" +
            "のりおみ「……誤字、あります」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_collapse_full",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……やめて……」\n" +
            "のりおみ「言ってない……言ってないのに……」\n" +
            "のりおみ「……っ、痛い……！」\n" +
            "くう「……大丈夫。ここ、私の家」\n" +
            "くう「ゆい、いない。安全」\n" +
            "のりおみ「……ほんと……？」",
        text: "今は休みなさい。",
        kana: "いまはやすみなさい。",
        romaji: "ima wa yasumi nasai",
        reaction_good:
            "くう「……ありがとうございます」\n" +
            "のりおみ「……はい……」",
        reaction_bad:
            "くう「命令口調、逆効果」\n" +
            "のりおみ「……怖いです」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_aftercare",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……水」\n" +
            "のりおみ「……ありがとう」\n" +
            "くう「……震え、止まるまで起きてる」\n" +
            "のりおみ「……ごめん」\n" +
            "くう「謝るな」",
        text: "くうさん、ありがとう。",
        kana: "くうさん、ありがとう。",
        romaji: "kuu san, arigatou",
        reaction_good:
            "くう「……別に」",
        reaction_bad:
            "くう「句読点、多い」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_public_cut",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「……君、判断が遅い」\n" +
            "こうた「考えてるフリをして、選択を先延ばしにしてるだけだ」\n" +
            "のりおみ「……すみません」\n" +
            "こうた「謝罪はいらない。改善しろ」",
        text: "言い方に気をつけなさい。",
        kana: "いいかたにきをつけなさい。",
        romaji: "iikata ni ki o tsuke nasai",
        reaction_good:
            "こうた「……善処します」",
        reaction_bad:
            "こうた「先生、表現が曖昧です」\n" +
            "のりおみ「……助かりません」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_soji_break_air",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "そうじ「なにこの空気w 重っ！」\n" +
            "ゆうひ「草w 地獄かよw」\n" +
            "そうじ「ま、考えすぎるとハゲるぞ〜」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shina sai",
        reaction_good:
            "そうじ「はーいw」",
        reaction_bad:
            "そうじ「先生も空気読めてないw」",
        images: ["soji.png", "yuhi.png"]
    },
    {
        id: "chat_yui_victim_full",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆こうた＆のりおみ",
        start_msg:
            "ゆい「ねぇ……のりおみくん」\n" +
            "ゆい「最近、ゆいのこと避けてるよね……？」\n" +
            "のりおみ「……そんなことは」\n" +
            "ゆい「嘘。わたし、ちゃんと分かるもん」\n" +
            "こうた「私語は作業効率を下げる」\n" +
            "ゆい「効率より“気持ち”でしょ……？」\n" +
            "ゆい「このままなら、ゆい……どうなってもいいって思っちゃう」\n" +
            "のりおみ「……っ」\n" +
            "こうた「感情で脅すのは論外だ」\n" +
            "ゆい「脅してないよ？“事実”を言ってるだけ♡」",
        text: "班内のトラブルはやめてください。",
        kana: "はんないのとらぶるはやめてください。",
        romaji: "hannai no toraburu wa yamete kudasai",
        reaction_good:
            "こうた「了解しました」\n" +
            "ゆい「はーい……先生」",
        reaction_bad:
            "ゆい「先生、漢字まちがってる……？」\n" +
            "こうた「注意文の誤字は信用を失います」",
        images: ["yui.png", "kouta.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_freeze_class",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆クラス",
        start_msg:
            "（授業中）\n" +
            "のりおみ「……」\n" +
            "のりおみ「……っ」\n" +
            "りのん「……おい、のりおみ？」\n" +
            "ほのか「え、止まってない？」\n" +
            "ゆうひ「草……いや草じゃないなこれ」\n" +
            "のりおみ「……だい、じょ……」\n" +
            "（言葉が続かない）",
        text: "大丈夫ですか？返事してください。",
        kana: "だいじょうぶですか？へんじしてください。",
        romaji: "daijoubu desu ka? henji shite kudasai",
        reaction_good:
            "のりおみ「……はい……」",
        reaction_bad:
            "のりおみ「……こわいです」\n" +
            "ほのか「先生、その聞き方まずいって」",
        images: ["noriomi.png", "rinon.png", "honoka.png", "yuhi.png"]
    },
    {
        id: "chat_class_react_freeze",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆たより＆そうじ",
        start_msg:
            "くう「……過呼吸の前兆」\n" +
            "たより「先生、刺激少ない対応を」\n" +
            "そうじ「うわ……ガチのやつじゃん」",
        text: "落ち着いて対応します。",
        kana: "おちついてたいおうします。",
        romaji: "ochitsuite taiou shimasu",
        reaction_good:
            "たより「ありがとうございます」",
        reaction_bad:
            "くう「……口だけ」\n" +
            "そうじ「その宣言いらんw」",
        images: ["kuu.png", "tayori.png", "soji.png"]
    },
    {
    id: "chat_group_kouta_yui_noriomi",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆ゆい＆のりおみ",
    start_msg:
        "こうた「感情論は後にして。まず役割を決めよう」\n" +
        "（ゆいを一瞥し、のりおみを見る）\n" +
        "こうた「君は資料まとめ担当でいいね？口頭発表は無理だろ」\n" +
        "\n" +
        "のりおみ「……あ、うん。それでいいよ」\n" +
        "（声は平坦、笑顔は薄い）\n" +
        "\n" +
        "ゆい「でもさ〜、無理しなくていいんだよ？」\n" +
        "ゆい「のりおみくん、最近大変そうだし」\n" +
        "ゆい「ゆい、ちゃんと支えてあげるから♡」\n" +
        "\n" +
        "（教室が一瞬、静まる）\n" +
        "こうた「支えるのはいいが、依存を助長するのは違う」\n" +
        "こうた「君が復帰できない原因の一部は、自己管理不足だ」\n" +
        "\n" +
        "のりおみ「……っ」",
    text: "役割分担は妥当です。続けてください。",
    kana: "やくわりぶんたんはだとうです。つづけてください。",
    romaji: "yakuwari buntan wa datou desu. tsudzukete kudasai",
    reaction_good:
        "こうた「ありがとうございます。ではこのまま進めます」\n" +
        "ゆい「は〜い♡ 先生もちゃんと見ててね？」",
    reaction_bad:
        "こうた「先生、誤字があります。確認してから発言してください」\n" +
        "ゆい「え〜、そんな雑だと信用なくなっちゃうよ？」",
    images: ["kouta.png", "yui.png", "noriomi.png"]
    },
    {
    id: "chat_noriomi_freeze_class",
    subtype: "chat",
    group: "1-3",
    sender: "クラス一同",
    start_msg:
        "（授業中、のりおみの手が止まる）\n" +
        "（ペンが机から転がり落ちる）\n" +
        "\n" +
        "りつ「え？のりおみくん？」\n" +
        "むぎ「え、なに！？大丈夫！？」\n" +
        "ゆうひ「草…って言えないやつじゃんこれ」\n" +
        "\n" +
        "（のりおみ、反応なし。視線が定まらない）\n" +
        "そうじ「おーい、生きてるー？」\n" +
        "くう「……触るな」",
    text: "のりおみくん、返事できますか？",
    kana: "のりおみくん、へんじできますか？",
    romaji: "noriomi kun, henji dekimasu ka",
    reaction_good:
        "くう「今は無理。少し時間をください」\n" +
        "あおい「…静かにした方がいいと思う」",
    reaction_bad:
        "そうじ「先生、名前間違えてるし空気も読めてないぞ？」\n" +
        "ゆうひ「今それ言う？w」",
    images: ["ritsu.png", "mugi.png", "yuhi.png", "soji.png", "kuu.png"]
    },
    {
    id: "chat_yui_kouta_finisher",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆こうた",
    start_msg:
        "ゆい「ねぇ、さっきのこと…ゆいのせいだったらごめんね？」\n" +
        "ゆい「でも、ゆいがいなくなったらもっと困るよね？」\n" +
        "\n" +
        "こうた「感情に流されるな。事実を整理しろ」\n" +
        "こうた「結果を出せない以上、配慮は優先されない」\n" +
        "\n" +
        "（のりおみ、俯いたまま動かない）",
    text: "二人とも、言い過ぎでは？",
    kana: "ふたりとも、いいすぎでは？",
    romaji: "futari tomo, iisugi dewa?",
    reaction_good:
        "こうた「ご指摘ありがとうございます。ですが必要な指摘です」\n" +
        "ゆい「え〜、ゆいは心配してるだけなのに♡」",
    reaction_bad:
        "こうた「先生、その表現は曖昧です。具体性に欠けます」\n" +
        "ゆい「守るつもりなら、ちゃんと守ってあげて？」",
    images: ["yui.png", "kouta.png", "noriomi.png"]
    },
    {
    id: "chat_group_kouta_yui_noriomi_fix",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆ゆい＆のりおみ",
    start_msg:
        "こうた「感情論は後にして。まず役割を決めよう」\n" +
        "こうた「のりおみは資料まとめ担当でいい」\n" +
        "こうた「口頭発表は現実的じゃない」\n" +
        "\n" +
        "のりおみ「……あ、うん。それでいいよ」\n" +
        "（声は平坦。笑顔は貼り付け）\n" +
        "\n" +
        "ゆい「でもさ〜、無理しなくていいんだよ？」\n" +
        "ゆい「最近、顔色よくないし」\n" +
        "ゆい「ゆいがちゃんと見ててあげるから♡」\n" +
        "\n" +
        "こうた「それは配慮じゃない」\n" +
        "こうた「依存を助長するだけだ」",
    text: "役割分担としては妥当ですね。そのまま進めてください。",
    kana: "やくわりぶんたんとしてはだとうですね。そのまますすめてください。",
    romaji: "yakuwari buntan to shite wa datou desu ne. sono mama susumete kudasai",
    reaction_good:
        "こうた「ありがとうございます。ではこの形で」\n" +
        "ゆい「は〜い♡ 先生、ちゃんと見ててね？」",
    reaction_bad:
        "こうた「先生、文が崩れています。落ち着いてください」\n" +
        "ゆい「え〜、それだとのりおみくん混乱しちゃうよ？」",
    images: ["kouta.png", "yui.png", "noriomi.png"]
    },
    {
    id: "chat_kouta_honoka_logic",
    subtype: "chat",
    group: "1-3",
    sender: "こうた＆ほのか",
    start_msg:
        "ほのか「さっきの流れ、効率悪くない？」\n" +
        "ほのか「感情ケア入れるから話進まないんだけど」\n" +
        "\n" +
        "こうた「同意する」\n" +
        "こうた「成果を出せない配慮に意味はない」\n" +
        "こうた「結果が全てだ」",
    text: "言い方には気をつけてください。",
    kana: "いいかたにはきをつけてください。",
    romaji: "iikata ni wa ki o tsukete kudasai",
    reaction_good:
        "こうた「承知しました。ですが主張は変えません」\n" +
        "ほのか「まぁ、正論だよね〜」",
    reaction_bad:
        "ほのか「先生、その注意ふわっとしすぎ」\n" +
        "こうた「指摘が抽象的です」",
    images: ["kouta.png", "honoka.png"]
    },
    {
    id: "chat_kuu_noriomi_whisper",
    subtype: "chat",
    group: "1-3",
    sender: "くう＆のりおみ",
    start_msg:
        "くう「……無理しなくていい」\n" +
        "くう「壊れる前に離れろ」\n" +
        "\n" +
        "のりおみ「……ありがとう」\n" +
        "のりおみ「それだけでいい」",
    text: "私語は控えてください。",
    kana: "しごはひかえてください。",
    romaji: "shigo wa hikaete kudasai",
    reaction_good:
        "くう「すみません」",
    reaction_bad:
        "くう「先生、今それ言う？」\n" +
        "のりおみ「……タイミング、悪いね」",
    images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_noriomi_kuu_silence",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……今日、やけに騒がしいな」\n" +
            "くう「いつもだろ。今日は特にひどいだけ」\n" +
            "のりおみ「……俺、ここにいていいのかな」\n" +
            "くう「知らない。判断する気もない」\n" +
            "のりおみ「即答かよ」\n" +
            "くう「迷う理由がない」",
        text: "落ち着いて続けなさい。",
        kana: "おちついてつづけなさい。",
        romaji: "ochitsuite tsudzukenasai",
        reaction_good:
            "のりおみ「……ああ、すみません」\n" +
            "くう「私は元から落ち着いてる」",
        reaction_bad:
            "のりおみ「先生、誤字ってますよ」\n" +
            "くう「指示する側が噛むな」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_rinon_ritsu_aesthetic",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆りつ",
        start_msg:
            "りのん「結果が全てでしょ。評価は数字で出る」\n" +
            "りつ「数字だけで美は測れないんだよ☆」\n" +
            "りのん「甘い。勝てなきゃ意味ない」\n" +
            "りつ「でも心が動かなきゃ誰も見ないよ？」\n" +
            "りのん「……それも戦略なら認める」",
        text: "建設的に話し合いなさい。",
        kana: "けんせつてきにはなしあいなさい。",
        romaji: "kensetsuteki ni hanashiai nasai",
        reaction_good:
            "りつ「さすが先生☆美意識高い〜！」\n" +
            "りのん「了解です。冷静に続けます」",
        reaction_bad:
            "りつ「先生、言葉抜けてない？」\n" +
            "りのん「指示が曖昧です」",
        images: ["rinon.png", "ritsu.png"]
    },
    {
        id: "chat_kisora_tayori_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「たよりくん……人、多いね……」\n" +
            "たより「大丈夫だよ。ここなら静かだ」\n" +
            "きそら「……子供のままでいたい」\n" +
            "たより「無理に大人にならなくていい」\n" +
            "きそら「……うん」",
        text: "続けていいですよ。",
        kana: "つづけていいですよ。",
        romaji: "tsudzukete ii desu yo",
        reaction_good:
            "きそら「……ありがとう、先生」\n" +
            "たより「配慮に感謝します」",
        reaction_bad:
            "きそら「……先生、ちがう」\n" +
            "たより「入力ミスですね」",
        images: ["kisora.png", "tayori.png"]
    },
    {
        id: "chat_hibiki_soji_chaos",
        subtype: "chat",
        group: "1-3",
        sender: "ひびき＆そうじ",
        start_msg:
            "ひびき「コケコッコー！！うるさくて何が悪いんや！！」\n" +
            "そうじ「最高じゃんw クラス沈んでたし丁度いい」\n" +
            "ひびき「お前話わかるやんけ！！」\n" +
            "そうじ「深刻になると死ぬ病なんでw」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はいはーいw」\n" +
            "ひびき「しゃーなしやで」",
        reaction_bad:
            "そうじ「先生、日本語ミスってるw」\n" +
            "ひびき「誤字やんけ！」",
        images: ["hibiki.png", "soji.png"]
    },
    {
        id: "chat_mugi_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ＆ゆうひ",
        start_msg:
            "むぎ「ねえねえ！昨日さ！めっちゃすごかったんだって！！」\n" +
            "ゆうひ「は？何が？w 草」\n" +
            "むぎ「全部！！！」\n" +
            "ゆうひ「雑すぎw」",
        text: "要点をまとめなさい。",
        kana: "ようてんをまとめなさい。",
        romaji: "youten o matome nasai",
        reaction_good:
            "むぎ「がんばる〜！！」\n" +
            "ゆうひ「はいはい」",
        reaction_bad:
            "ゆうひ「先生誤字ってんだけどw」\n" +
            "むぎ「え！？ちがう！？」",
        images: ["mugi.png", "yuhi.png"]
    },
    {
        id: "chat_honoka_nagisa_ideology",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆なぎさ",
        start_msg:
            "ほのか「それ、感情論だよね？」\n" +
            "なぎさ「は？感情も意見ですけど」\n" +
            "ほのか「論理的じゃないの」\n" +
            "なぎさ「論理だけで生きてる方が変じゃん」\n" +
            "ほのか「効率悪いって言ってるだけ」\n" +
            "なぎさ「否定から入るのやめなよ」",
        text: "互いの意見を尊重しなさい。",
        kana: "たがいのいけんをそんちょうしなさい。",
        romaji: "tagai no iken o sonchou shinasai",
        reaction_good:
            "なぎさ「まぁ…先生が言うなら」\n" +
            "ほのか「一旦、聞くだけ聞く」",
        reaction_bad:
            "ほのか「先生、日本語怪しいよ」\n" +
            "なぎさ「誤字は説得力下がるって〜」",
        images: ["honoka.png", "nagisa.png"]
    },
    {
        id: "chat_soshi_atsushi_cosmos",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆あつし",
        start_msg:
            "そうし「この世界は情報の集合体なんだ」\n" +
            "あつし「え！じゃあさ！」\n" +
            "あつし「星になれば世界も明るくなるよね！！」\n" +
            "そうし「……概念としては否定できない」\n" +
            "あつし「でしょ！！」",
        text: "話題をまとめてください。",
        kana: "わだいをまとめてください。",
        romaji: "wadai o matomete kudasai",
        reaction_good:
            "そうし「要約します」\n" +
            "あつし「りょーかい！！」",
        reaction_bad:
            "そうし「先生、変換ミスがあります」\n" +
            "あつし「そこズレてるよ〜！」",
        images: ["soshi.png", "atsushi.png"]
    },
    {
        id: "chat_rinon_mugi_gap",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆むぎ",
        start_msg:
            "むぎ「りのんちゃんの歌さ！やばかった！！」\n" +
            "りのん「ありがとう。でも改善点はある」\n" +
            "むぎ「え！？完璧だったよ！？」\n" +
            "りのん「完璧は更新するもの」",
        text: "会話を続けなさい。",
        kana: "かいわをつづけなさい。",
        romaji: "kaiwa o tsudzukenasai",
        reaction_good:
            "むぎ「すごーい！！」\n" +
            "りのん「前向きに捉えます」",
        reaction_bad:
            "りのん「誤字があります」\n" +
            "むぎ「先生ミスった！？」",
        images: ["rinon.png", "mugi.png"]
    },
    {
        id: "chat_kouta_ritsu_value",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆りつ",
        start_msg:
            "こうた「それは規範から外れている」\n" +
            "りつ「でも美しいでしょ？」\n" +
            "こうた「正しさが先だ」\n" +
            "りつ「心が動かなきゃ意味ないよ☆」",
        text: "論点を整理してください。",
        kana: "ろんてんをせいりしてください。",
        romaji: "ronten o seiri shite kudasai",
        reaction_good:
            "こうた「承知しました」\n" +
            "りつ「さすが先生〜☆」",
        reaction_bad:
            "こうた「入力が正確ではありません」\n" +
            "りつ「誤字は美しくないね☆」",
        images: ["kouta.png", "ritsu.png"]
    },
    {
        id: "chat_meri_aoi_soft",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆あおい",
        start_msg:
            "めり「ご迷惑じゃないでしょうか……」\n" +
            "あおい「そんなことないよ」\n" +
            "めり「……よかった」\n" +
            "あおい「ゆっくりでいいからね」",
        text: "そのまま続けてください。",
        kana: "そのままつづけてください。",
        romaji: "sono mama tsudzukete kudasai",
        reaction_good:
            "めり「ありがとうございます」\n" +
            "あおい「先生、やさしいね」",
        reaction_bad:
            "あおい「先生、ちょっと誤字あるよ」\n" +
            "めり「申し訳ありません……」",
        images: ["meri.png", "aoi.png"]
    },
    {
        id: "chat_ritsu_soji_clash",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ",
        start_msg:
            "りつ「やあ☆ 今日もクラスが騒がしいね」\n" +
            "そうじ「俺が静かにしてやってんだろ？」\n" +
            "りつ「破壊で均衡を取るのは美しくないよ」\n" +
            "そうじ「美とか知らねぇ。空気は壊すもんだ」\n" +
            "りつ「乱暴すぎる……」",
        text: "落ち着いて話しなさい。",
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "りつ「先生、理解があるね☆」\n" +
            "そうじ「まぁ聞くだけ聞くわ」",
        reaction_bad:
            "そうじ「先生、誤字ってんぞ」\n" +
            "りつ「美しくない入力だね☆」",
        images: ["ritsu.png", "soji.png"]
    },
    {
        id: "chat_soji_soshi_thought",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆そうし",
        start_msg:
            "そうし「思考は世界を内包しているんだ」\n" +
            "そうじ「は？世界は外にあんだろ」\n" +
            "そうし「外界は投影に過ぎない」\n" +
            "そうじ「難しい言葉で逃げてるだけじゃん」\n" +
            "そうし「否定も一種の思考実験だよ」",
        text: "話題を整理してください。",
        kana: "わだいをせいりしてください。",
        romaji: "wadai o seiri shite kudasai",
        reaction_good:
            "そうし「要約します」\n" +
            "そうじ「お、珍しく噛み合ったな」",
        reaction_bad:
            "そうじ「先生、変換ミス多くね？」\n" +
            "そうし「意味が曖昧になります」",
        images: ["soji.png", "soshi.png"]
    },
    {
        id: "chat_kisora_tayori_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆たより",
        start_msg:
            "きそら「……ここ、いていい？」\n" +
            "たより「もちろんだよ」\n" +
            "きそら「名前、呼んでほしい」\n" +
            "たより「きそらちゃん、大丈夫」",
        text: "静かに続けてください。",
        kana: "しずかにつづけてください。",
        romaji: "shizuka ni tsudzukete kudasai",
        reaction_good:
            "きそら「……うれしい」\n" +
            "たより「先生、ありがとう」",
        reaction_bad:
            "たより「先生、誤字あります」\n" +
            "きそら「……ちょっとこわい」",
        images: ["kisora.png", "tayori.png"]
    },
    { 
        id: "chat_kouta_noriomi_old",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「……最近、来てなかっただろ」\n" +
            "のりおみ「まあね。体調とか、色々」\n" +
            "こうた「理由は聞かない。言いたくなったらでいい」\n" +
            "のりおみ「……それ、ズルくない？」\n" +
            "こうた「何が？」\n" +
            "のりおみ「責めないくせに、逃げ場だけ残す」\n" +
            "こうた「逃げてもいいだろ。戻る場所があるなら」",
        text: "こうた、もっと厳しく指導しなさい。",
        kana: "もっときびしくしどうしなさい。",
        romaji: "motto kibishiku shidou shinasai",
        reaction_good:
            "こうた「そのやり方じゃ、彼は潰れます」\n" +
            "のりおみ「……ありがとう」",
        reaction_bad:
            "こうた「先生、論点が違います」\n" +
            "のりおみ「今の、何を直せばいいか分かんないやつ」",
        images: ["kouta.png", "noriomi.png"]
    },
    { 
        id: "chat_yui_noriomi_trigger",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「のりくんの『優しい』って、社交辞令だよね？」\n" +
            "のりおみ「……まあ、円滑に生きるための」\n" +
            "ゆい「ふふ。じゃあ今のは？」\n" +
            "のりおみ「……聞かなかったことにして」\n" +
            "ゆい「やだ♡ 今の、本音だもん」\n" +
            "のりおみ「……っ」",
        text: "ゆい、相手を困らせない。",
        kana: "あいてをこまらせない。",
        romaji: "aite o komarasenai",
        reaction_good:
            "ゆい「はーい♡ でもね、困る顔かわいいよ？」",
        reaction_bad:
            "ゆい「先生、入力ミスしてるよ？」\n" +
            "のりおみ「……今の、訂正する余地ある？」",
        images: ["yui.png", "noriomi.png"]
    },
    { 
        id: "chat_ritsu_soshi",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうし",
        start_msg:
            "りつ「やあ☆火星人くん、その髪型は計算？」\n" +
            "そうし「いや、重力と寝癖の共同制作」\n" +
            "りつ「美意識が足りないね！」\n" +
            "そうし「美って主観だよ？」\n" +
            "りつ「ぐっ……理屈で殴らないでほしいな」",
        text: "仲良くしなさい。",
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "りつ「仕方ない☆今日は休戦ね」\n" +
            "そうし「平和条約締結」",
        reaction_bad:
            "りつ「先生、誤字ってる☆」\n" +
            "そうし「それはバグだね」",
        images: ["ritsu.png", "soshi.png"]
    },
    { 
        id: "chat_ritsu_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆あつし",
        start_msg:
            "りつ「やあ☆天王星の王子様、今日も眩しいね！」\n" +
            "あつし「えへへ！だって星は輝くためにあるんだもん！」\n" +
            "りつ「……その自信、どこから来るの？」\n" +
            "あつし「うーん、宇宙？」\n" +
            "りつ「くっ…論理が存在しない！」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "りつ「仕方ない☆王子様、後で続きを話そう」\n" +
            "あつし「やったー！銀河ティータイム！」",
        reaction_bad:
            "りつ「先生、誤字ってるよ？」\n" +
            "あつし「言葉が迷子だね！」",
        images: ["ritsu.png", "atsushi.png"]
    },
    { 
        id: "chat_honoka_soshi",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆そうし",
        start_msg:
            "ほのか「それ、効率悪くない？」\n" +
            "そうし「効率は目的次第だよ」\n" +
            "ほのか「いや、無駄でしょ」\n" +
            "そうし「無駄って言葉、主観だよね？」\n" +
            "ほのか「……あーもう！理屈多い！」",
        text: "ちゃんと話を聞きなさい。",
        kana: "ちゃんとはなしをききなさい。",
        romaji: "chanto hanashi o kiki nasai",
        reaction_good:
            "ほのか「まあ…嫌いじゃないけどさ」\n" +
            "そうし「それは好意と受け取っていい？」",
        reaction_bad:
            "ほのか「先生、入力ミスってる」\n" +
            "そうし「バグ報告ありがとう」",
        images: ["honoka.png", "soshi.png"]
    },
    {
        id: "chat_noriomi_fe_break",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……大丈夫だよ。別に。よくある話だし」\n" +
            "くう「その声、震えてるけど」\n" +
            "のりおみ「気のせい。俺は壊れてない。最初から何も期待してないだけ」\n" +
            "くう「期待してない人間は、そんな顔しない」\n" +
            "のりおみ「……やめろ」\n" +
            "くう「無理」\n" +
            "のりおみ「……っ、感情なんて……邪魔なんだよ……！！」",
        text: "落ち着きなさい。",
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "くう「……先生、今はそれ逆効果」\n" +
            "のりおみ「……すみません……」",
        reaction_bad:
            "くう「誤字ってる。今それ直す余裕ないでしょ」\n" +
            "のりおみ「……指摘、しないで……」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_meri_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆みさき",
        start_msg:
            "めり「その……無理、してない……？」\n" +
            "みさき「だ、大丈夫だよ……！わたしがやらなきゃだから……」\n" +
            "めり「でも……それ、みさきちゃん一人の責任じゃ……」\n" +
            "みさき「いえ……わたしが、ちゃんとしてれば……」",
        text: "お互い思いやりが大事ですね。",
        kana: "おたがいおもいやりがだいじですね。",
        romaji: "otagai omoiyari ga daiji desu ne",
        reaction_good:
            "めり「……はい……」\n" +
            "みさき「……ありがとうございます……」",
        reaction_bad:
            "めり「えっと……“思いやり”の漢字……違うかも……」\n" +
            "みさき「ご、ごめんなさい……！」",
        images: ["meri.png", "misaki.png"]
    },
    {
        id: "chat_noriomi_yui_yuhi",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい＆ゆうひ",
        start_msg:
            "ゆい「ねぇのりおみくん、わたしのこと好き？」\n" +
            "のりおみ「……社交辞令でいい？」\n" +
            "ゆうひ「草w それ一番残酷だろw」\n" +
            "ゆい「……ねぇ、なんでくうちゃんには本音なの？」\n" +
            "のりおみ「……触るな」",
        text: "授業中です。",
        kana: "じゅぎょうちゅうです。",
        romaji: "jugyou chuu desu",
        reaction_good:
            "ゆうひ「はーい先生w」\n" +
            "ゆい「……ごめんなさい……」",
        reaction_bad:
            "ゆうひ「先生タイポってて草w」\n" +
            "のりおみ「……もういい……」",
        images: ["noriomi.png", "yui.png", "yuhi.png"]
    },
    {
        id: "chat_kouta_enfj_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆みさき",
        start_msg:
            "こうた「みさき、最近顔色よくないけど…無理してない？」\n" +
            "みさき「う、ううん……大丈夫だよ……」\n" +
            "こうた「“大丈夫”って言い方が一番危ないやつ」\n" +
            "みさき「……っ」\n" +
            "こうた「ちゃんと頑張ってるの、周りは見てるよ」",
        text: "落ち着いて話しましょう。",
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "みさき「……ありがとうございます……」\n" +
            "こうた「それでいい」",
        reaction_bad:
            "こうた「先生、敬語の送り仮名違います」\n" +
            "みさき「す、すみません……」",
        images: ["kouta.png", "misaki.png"]
    },
    {
        id: "chat_noriomi_yui_truefeel",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "のりおみ「……もう、どうでもいい……」\n" +
            "ゆい「え……今の、本音？」\n" +
            "のりおみ「……知らない……」\n" +
            "ゆい「……ふふ」\n" +
            "ゆい「のりおみくん、やっと本音言ってくれたね♡」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ゆい「はぁい♡」\n" +
            "のりおみ「……ごめん……」",
        reaction_bad:
            "ゆい「先生、誤字ってるよ？」\n" +
            "のりおみ「……今、それ言う？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_noriomi_yui_yuhi_after",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい＆ゆうひ",
        start_msg:
            "ゆうひ「お、珍しく本音出たじゃんw」\n" +
            "のりおみ「……黙れ」\n" +
            "ゆい「でも嬉しいよ？ずっと仮面だったもんね」\n" +
            "のりおみ「……くうには、言うな……」\n" +
            "ゆい「え〜？それはどうかな♡」",
        text: "授業を続けます。",
        kana: "じゅぎょうをつづけます。",
        romaji: "jugyou wo tsuzukemasu",
        reaction_good:
            "ゆうひ「はーいw」\n" +
            "ゆい「……ちぇ」",
        reaction_bad:
            "ゆうひ「先生タイポってて草w」\n" +
            "のりおみ「……最悪……」",
        images: ["noriomi.png", "yui.png", "yuhi.png"]
    },
    {
        id: "chat_soji_mugi",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆むぎ",
        start_msg:
            "むぎ「ねぇそうじくん！！このクラス暗すぎじゃない！？」\n" +
            "そうじ「だから面白ぇんだろ」\n" +
            "むぎ「え！？そうなん！？」\n" +
            "そうじ「深刻になる才能ないからさ、俺」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "そうじ「はいはい」\n" +
            "むぎ「はーい！」",
        reaction_bad:
            "そうじ「先生、命令形ブレてる」\n" +
            "むぎ「え！？どこ！？」",
        images: ["soji.png", "mugi.png"]
    },
    {
        id: "chat_ritsu_rinon",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆りのん",
        start_msg:
            "りつ「やあ☆歌姫ちゃん！今日も声が美しいね！」\n" +
            "りのん「……うるさい。集中してる」\n" +
            "りつ「えっ、冷たっ……」",
        text: "私語は控えてください。",
        kana: "しごはひかえてください。",
        romaji: "shigo wa hikaete kudasai",
        reaction_good:
            "りつ「了解☆」\n" +
            "りのん「……」",
        reaction_bad:
            "りつ「先生、“控える”の漢字違うかも☆」\n" +
            "りのん「……今それ？」",
        images: ["ritsu.png", "rinon.png"]
    },
    {
        id: "chat_yui_noriomi_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ＆くう",
        start_msg:
            "ゆい「ねぇ……さっきの、ほんとに本音だよね？」\n" +
            "のりおみ「……知らない……」\n" +
            "くう「……」\n" +
            "ゆい「くうちゃんだけずるいなぁ。本音もらえて」\n" +
            "くう「……私は、聞いてない。ただ見てるだけ」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ゆい「はーい♡」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "くう「……先生、表記ズレてる」\n" +
            "ゆい「細かいとこ気づくねぇ？」",
        images: ["yui.png", "noriomi.png", "kuu.png"]
    },
    {
        id: "chat_yui_noriomi_kuu_kouta",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆ゆい＆のりおみ＆くう",
        start_msg:
            "こうた「私語が多い。感情的な雑音は学習効率を下げる」\n" +
            "ゆい「え〜、冷た〜い」\n" +
            "のりおみ「……」\n" +
            "こうた「のりおみ、君は休養が必要だ。判断力が落ちている」\n" +
            "くう「……正論だけど、今それ言う？」",
        text: "授業を続けます。",
        kana: "じゅぎょうをつづけます。",
        romaji: "jugyou wo tsuzukemasu",
        reaction_good:
            "こうた「理解が早くて助かります」\n" +
            "くう「……はいはい」",
        reaction_bad:
            "こうた「先生、誤字があります」\n" +
            "ゆい「うわ、即ツッコミ」",
        images: ["kouta.png", "yui.png", "noriomi.png", "kuu.png"]
    },
    {
        id: "chat_soji_weapon",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ",
        start_msg:
            "そうじ「俺？元兵器兵器ｗｗ」\n" +
            "そうじ「空気悪くなったらぶっ壊す用な？」\n" +
            "そうじ「深刻になる才能ないのが取り柄なんで」",
        text: "ふざけないでください。",
        kana: "ふざけないでください。",
        romaji: "fuzakenaide kudasai",
        reaction_good:
            "そうじ「はーい、兵器停止」",
        reaction_bad:
            "そうじ「先生、漢字変」",
        images: ["soji.png"]
    },
    {
        id: "chat_soshi_umeboshi",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆りつ＆あつし",
        start_msg:
            "そうし「今日もパンに梅干し乗せてきた」\n" +
            "りつ「えっ！？それ美意識的にどうなの！？」\n" +
            "あつし「梅干しは宇宙だよ！！！無限！！！」\n" +
            "そうし「赤いから落ち着く」",
        text: "食べ物で遊ばないでください。",
        kana: "たべものであそばないでください。",
        romaji: "tabemono de asobanaide kudasai",
        reaction_good:
            "そうし「遊んでない。研究」\n" +
            "りつ「研究……？」",
        reaction_bad:
            "そうし「先生、“遊ばない”表記違う」",
        images: ["soshi.png", "ritsu.png", "atsushi.png"]
    },
    {
        id: "chat_yui_noriomi_kuyuu",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ＆くう",
        start_msg:
            "ゆい「ねぇのりおみ、今日も顔色悪くない？ゆいのせい？」\n" +
            "のりおみ「違うよ。君はいつも元気だね、ってだけ」\n" +
            "ゆい「それ社交辞令でしょ。ゆい分かるもん」\n" +
            "のりおみ「……そう思うなら距離取ればいい」\n" +
            "くう「その言い方が一番煽ってるって気づいてる？」\n" +
            "ゆい「くうちゃんには本音出すのずるい」\n" +
            "のりおみ「……比較しないでくれ」",
        text: "少し落ち着きなさい。", 
        kana: "すこしおちつきなさい。",
        romaji: "sukoshi ochitsuki nasai",
        reaction_good:
            "くう「ほら、先生に言われてる」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "ゆい「先生、誤字ってるよ？それで止めに来たの？」\n" +
            "のりおみ「注意するなら正確にどうぞ」",
        images: ["yui.png", "noriomi.png", "kuu.png"]
    },
    {
        id: "chat_kouta_enfj_era",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆たより",
        start_msg:
            "こうた「みんな大丈夫かな。最近、雰囲気重いよね」\n" +
            "たより「無理しすぎじゃない？」\n" +
            "こうた「放っておけないよ。正しいことをするのが役目だし」\n" +
            "たより「それ、こうたが壊れない？」\n" +
            "こうた「……壊れるわけないよ」",
        text: "自分のことも大事にしなさい。", 
        kana: "じぶんのこともだいじにしなさい。",
        romaji: "jibun no koto mo daiji ni shinasai",
        reaction_good:
            "こうた「はい。気をつけます」\n" +
            "たより「それでいいんだよ」",
        reaction_bad:
            "こうた「先生、言葉抜けてます」\n" +
            "たより「伝える側が焦ると意味変わるよ？」",
        images: ["kouta.png", "tayori.png"]
    },
    {
        id: "chat_boys_group_peace",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「今日の俺、前髪完璧じゃない？」\n" +
            "そうじ「知らん。俺は元兵器だから」\n" +
            "あつし「え！兵器！？じゃあ宇宙戦争しよ！」\n" +
            "そうし「理論上、兵器名乗るだけで抑止力になる」\n" +
            "りつ「全然意味わかんないんだけど！？」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "りつ「はいはい☆」\n" +
            "あつし「星になって静かにするね！」",
        reaction_bad:
            "そうじ「先生、注意文バグってる」\n" +
            "そうし「助詞が欠けてる。惜しい」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_soshi_umeboshi",
        subtype: "chat",
        group: "1-3",
        sender: "そうし＆そうじ＆りつ",
        start_msg:
            "そうし「パンに梅干しは理にかなってる」\n" +
            "りつ「絶対おかしいって！」\n" +
            "そうじ「赤いから好きなんだろ」\n" +
            "そうし「色彩嗜好と味覚は無関係」",
        text: "食事中です。", 
        kana: "しょくじちゅうです。",
        romaji: "shokujichuu desu",
        reaction_good:
            "りつ「はーい」\n" +
            "そうし「了解」",
        reaction_bad:
            "そうじ「先生、漢字間違ってるぞ」\n" +
            "そうし「意味は通じるけど減点」",
        images: ["soshi.png", "soji.png", "ritsu.png"]
    },
    {
        id: "chat_kouta_vs_noriomi_tefe",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆のりおみ",
        start_msg:
            "こうた「で、君はいつまで被害者ぶるつもり？」\n" +
            "のりおみ「被害者だなんて言ってない」\n" +
            "こうた「言ってない“だけ”。態度は雄弁だよ」\n" +
            "のりおみ「……君に何が分かる」\n" +
            "こうた「分かる必要ある？結果が全てだろ」\n" +
            "のりおみ「っ……！」",
        text: "感情的にならないでください。", 
        kana: "かんじょうてきにならないでください。",
        romaji: "kanjouteki ni naranai de kudasai",
        reaction_good:
            "こうた「はいはい」\n" +
            "のりおみ「……すみません」",
        reaction_bad:
            "こうた「先生、敬語崩れてる」\n" +
            "のりおみ「指摘するなら正確に」",
        images: ["kouta.png", "noriomi.png"]
    },
    {
        id: "chat_kouta_enfj_soft",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆たより",
        start_msg:
            "こうた「最近さ、みんな元気ないよね」\n" +
            "たより「こうたが一番気にしてる」\n" +
            "こうた「放っておけないんだ」\n" +
            "たより「それ、背負いすぎ」\n" +
            "こうた「……誰かがやらないと」",
        text: "無理をしないように。", 
        kana: "むりをしないように。",
        romaji: "muri wo shinai you ni",
        reaction_good:
            "こうた「ありがとうございます」\n" +
            "たより「今のうちだよ、その余裕」",
        reaction_bad:
            "こうた「先生、語尾抜けてます」\n" +
            "たより「意味は分かるけどね」",
        images: ["kouta.png", "tayori.png"]
    },
    {
        id: "chat_boys_group_daily",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「今日の俺、肌の調子良すぎ」\n" +
            "そうじ「知らん。俺は兵器だから」\n" +
            "あつし「兵器！？じゃあ守って！」\n" +
            "そうし「兵器宣言は抑止力になる」\n" +
            "りつ「誰も守られてないんだけど！？」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "りつ「はーい☆」\n" +
            "あつし「宇宙レベルで静かにする！」",
        reaction_bad:
            "そうじ「先生、助詞落ちてる」\n" +
            "そうし「惜しい」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_sharehouse_girls",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆なぎさ＆ほのか",
        start_msg:
            "めり「洗濯、私がやるよ」\n" +
            "なぎさ「いいって。分担制」\n" +
            "ほのか「合理的。揉める要素ゼロ」\n" +
            "めり「でも……」\n" +
            "なぎさ「でも禁止」",
        text: "協力するのは良いことです。", 
        kana: "きょうりょくするのはよいことです。",
        romaji: "kyouryoku suru no wa yoi koto desu",
        reaction_good:
            "めり「はい……！」\n" +
            "なぎさ「でしょ」",
        reaction_bad:
            "ほのか「先生、主語抜けてる」\n" +
            "なぎさ「雑だな〜」",
        images: ["meri.png", "nagisa.png", "honoka.png"]
    },
    {
        id: "chat_kuu_noriomi_silent",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……疲れた」\n" +
            "くう「知ってる」\n" +
            "のりおみ「何も言わないんだな」\n" +
            "くう「言えば壊れる」",
        text: "無言も会話です。", 
        kana: "むごんもかいわです。",
        romaji: "mugon mo kaiwa desu",
        reaction_good:
            "くう「そう」\n" +
            "のりおみ「……助かる」",
        reaction_bad:
            "くう「先生、変換ミス」\n" +
            "のりおみ「意味は通じるけど」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_boys_honobono",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「やあ☆今日も僕は完璧だね」\n" +
            "そうじ「はいはい、鏡と会話してろ」\n" +
            "そうし「その自己愛、エネルギー変換したら永久機関作れそう」\n" +
            "あつし「え〜？でも輝くって大事だよ？星みたいに！」",
        text: "仲良くしなさい。", 
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "りつ「もちろんさ☆」\n" +
            "そうじ「今の流れでそれ言えるの才能だな」",
        reaction_bad:
            "そうし「先生、誤字。論理が崩れる」\n" +
            "あつし「ま、いっか！」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    { 
        id: "chat_noise_trio",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ＆ひびき",
        start_msg:
            "ゆうひ「なぁそうじw ひびき今日も鳴いてんだけどw」\n" +
            "ひびき「コケコッコーー！！文句あんのか！！」\n" +
            "そうじ「静かにできない才能すごいな」",
        text: "静かにしよう。", 
        kana: "しずかにしよう。",
        romaji: "shizuka ni shiyou",
        reaction_good:
            "ゆうひ「一瞬だけなw」\n" +
            "ひびき「無理！！」",
        reaction_bad:
            "そうじ「先生、タイプミス多いな」\n" +
            "ゆうひ「草」",
        images: ["soji.png", "yuhi.png", "hibiki.png"]
    },
    { 
        id: "chat_honoka_aoi",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆あおい",
        start_msg:
            "ほのか「そのやり方、効率悪くない？」\n" +
            "あおい「そうかもしれないけど、今はこれで大丈夫」\n" +
            "ほのか「へぇ、メンタル強」",
        text: "意見交換だね。", 
        kana: "いけんこうかんだね。",
        romaji: "iken koukan dane",
        reaction_good:
            "あおい「うん、そう思う」\n" +
            "ほのか「まぁ悪くないか」",
        reaction_bad:
            "ほのか「先生、誤字ってるよ」\n" +
            "あおい「ふふ」",
        images: ["honoka.png", "aoi.png"]
    },
    { 
        id: "chat_kuu_noriomi_quiet",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……無理して喋らなくていい」\n" +
            "のりおみ「してない。これが通常運転」\n" +
            "くう「嘘。声のトーンが違う」\n" +
            "のりおみ「……観測精度、高すぎ」\n" +
            "くう「私も同類だから」",
        text: "二人とも落ち着いていますね。", 
        kana: "ふたりともおちついていますね。",
        romaji: "futari tomo ochitsuite imasu ne",
        reaction_good:
            "のりおみ「……それは、助かる」\n" +
            "くう「余計なことは言わない」",
        reaction_bad:
            "くう「先生、誤字。冷静さが崩れてる」\n" +
            "のりおみ「そこ突くのは容赦ないな」",
        images: ["kuu.png", "noriomi.png"]
    },
    { 
        id: "chat_boys_honobono_2",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「やあ☆今日の僕、肌の調子が神」\n" +
            "そうじ「知らんがな」\n" +
            "そうし「皮膚状態の安定は精神安定にも寄与するね」\n" +
            "あつし「じゃあ今日はみんな輝いてる日だ！」",
        text: "楽しそうですね。", 
        kana: "たのしそうですね。",
        romaji: "tanoshisou desu ne",
        reaction_good:
            "りつ「当然さ☆」\n" +
            "そうじ「深刻にならんのが一番」",
        reaction_bad:
            "そうし「先生、誤字ある」\n" +
            "あつし「でも雰囲気は明るいからOK！」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    { 
        id: "chat_noriomi_atsushi_soft",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆あつし",
        start_msg:
            "あつし「ねえのりおみ、暗い夜って好き？」\n" +
            "のりおみ「……嫌いではない」\n" +
            "あつし「じゃあ星になろ！」\n" +
            "のりおみ「理屈が飛躍してる」\n" +
            "あつし「でも元気出たでしょ？」",
        text: "いい関係ですね。", 
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "のりおみ「……少しだけ」\n" +
            "あつし「やったー！」",
        reaction_bad:
            "のりおみ「誤字。集中切れる」\n" +
            "あつし「先生ドンマイ！」",
        images: ["noriomi.png", "atsushi.png"]
    },
    { 
        id: "chat_girls_daily_soft",
        subtype: "chat",
        group: "1-3",
        sender: "きそら＆めり＆むぎ＆あおい",
        start_msg:
            "むぎ「ねぇねぇ！今日のおやつ何にする！？」\n" +
            "きそら「……あまいの……」\n" +
            "めり「静かに食べられるものがいいかな……」\n" +
            "あおい「それなら焼き菓子かな」",
        text: "穏やかですね。", 
        kana: "おだやかですね。",
        romaji: "odayaka desu ne",
        reaction_good:
            "めり「はい……落ち着きます」\n" +
            "きそら「……すき……」",
        reaction_bad:
            "むぎ「先生、文字へん！」\n" +
            "あおい「ふふ」",
        images: ["kisora.png", "meri.png", "mugi.png", "aoi.png"]
    },
    { 
        id: "chat_yui_smell",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい",
        start_msg:
            "ゆい「……今、のりおみ笑った？」\n" +
            "ゆい「ふーん……」",
        text: "何か気になりますか？", 
        kana: "なにかきになりますか？",
        romaji: "nanika ki ni narimasu ka",
        reaction_good:
            "ゆい「べつに♡」",
        reaction_bad:
            "ゆい「先生、誤字。焦ってる？」",
        images: ["yui.png"]
    },
    { 
        id: "chat_yui_vs_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆あつし",
        start_msg:
            "あつし「のりおみ、さっき笑ってたよ！」\n" +
            "ゆい「……へぇ？」\n" +
            "あつし「元気って大事だよね！」\n" +
            "ゆい「ねえ、それって……誰のおかげ？」\n" +
            "あつし「みんなのおかげじゃない？」\n" +
            "ゆい「……ふふ」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "ゆい「だいじょうぶ♡」\n" +
            "あつし「ならよかった！」",
        reaction_bad:
            "ゆい「先生、誤字。焦ってる？」\n" +
            "あつし「空気ちょっと重くなったね！」",
        images: ["yui.png", "atsushi.png"]
    },
    { 
        id: "chat_noriomi_trigger",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "のりおみ「……今日は、少し楽だった」\n" +
            "ゆい「誰と？」\n" +
            "のりおみ「クラスの……何人かと」\n" +
            "ゆい「へぇ……ゆいじゃなくて？」\n" +
            "のりおみ「比較の話じゃない」\n" +
            "ゆい「でも、ゆいの前では笑わないよね？」",
        text: "二人とも冷静に。", 
        kana: "ふたりともれいせいに。",
        romaji: "futari tomo reisei ni",
        reaction_good:
            "のりおみ「……すまない」\n" +
            "ゆい「ううん♡」",
        reaction_bad:
            "ゆい「先生、誤字。今どっちの味方？」\n" +
            "のりおみ「……やめてくれ」",
        images: ["noriomi.png", "yui.png"]
    },
    { 
        id: "chat_boys_honobono_3",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「やあ☆今日の前髪、芸術的だろう？」\n" +
            "そうじ「風任せのくせに」\n" +
            "そうし「前髪は意思を持つ可能性がある」\n" +
            "あつし「前髪も星も自由だよ！」",
        text: "仲が良いですね。", 
        kana: "なかがいいですね。",
        romaji: "naka ga ii desu ne",
        reaction_good:
            "りつ「当然さ☆」\n" +
            "そうじ「深刻ゼロ」",
        reaction_bad:
            "そうし「先生、誤字検出」\n" +
            "あつし「でも平和！」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    { 
        id: "chat_rinon_nagisa",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆なぎさ",
        start_msg:
            "りのん「結果出してから言おう？」\n" +
            "なぎさ「結果がすべてって考えがもう嫌」\n" +
            "りのん「でも現実はそう」\n" +
            "なぎさ「だから現実にNOって言うんじゃん」",
        text: "意見交換ですね。", 
        kana: "いけんこうかんですね。",
        romaji: "iken koukan desu ne",
        reaction_good:
            "りのん「まあ、嫌いじゃない」\n" +
            "なぎさ「でしょ？」",
        reaction_bad:
            "なぎさ「先生、誤字」\n" +
            "りのん「集中しよ」",
        images: ["rinon.png", "nagisa.png"]
    },
    { 
        id: "chat_hibiki_yuhi_noise",
        subtype: "chat",
        group: "1-3",
        sender: "ひびき＆ゆうひ",
        start_msg:
            "ひびき「コケコッコー！！！」\n" +
            "ゆうひ「うっせww朝かよww」\n" +
            "ひびき「文句あんなら勝負や！」\n" +
            "ゆうひ「草。負ける気せんw」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ゆうひ「はいはーいw」\n" +
            "ひびき「チッ」",
        reaction_bad:
            "ひびき「先生、誤字！」\n" +
            "ゆうひ「煽り雑で草」",
        images: ["hibiki.png", "yuhi.png"]
    },
    {
        id: "chat_noriomi_fe_overflow",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "のりおみ「……息、うまく入らない」\n" +
            "ゆい「え？どしたの？ゆい、何かした？」\n" +
            "のりおみ「してない、君は……」\n" +
            "ゆい「じゃあ誰のせい？」\n" +
            "のりおみ「……やめてくれ」\n" +
            "ゆい「泣きそうな顔してる。かわいい」",
        text: "落ち着いて、深呼吸してください。",
        kana: "おちついて、しんこきゅうしてください。",
        romaji: "ochitsuite, shinkokyuu shite kudasai",
        reaction_good:
            "のりおみ「……っ、は……」\n" +
            "ゆい「ほら、ゆいがいるでしょ♡」",
        reaction_bad:
            "ゆい「先生、誤字。今の状況で焦ってる？」\n" +
            "のりおみ「……頭が、痛い」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_rinon_mushroom",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆ほのか",
        start_msg:
            "りのん「……これ、キノコ？」\n" +
            "ほのか「学食の和風パスタだけど？」\n" +
            "りのん「無理。撤退」\n" +
            "ほのか「は？好き嫌い？」\n" +
            "りのん「体調崩したことある。論外」",
        text: "残さず食べましょう。",
        kana: "のこさずたべましょう。",
        romaji: "nokosazu tabemashou",
        reaction_good:
            "りのん「代替案を考えます」\n" +
            "ほのか「合理的だね」",
        reaction_bad:
            "りのん「先生、誤字。集中力落ちてません？」\n" +
            "ほのか「説得力ゼロ」",
        images: ["rinon.png", "honoka.png"]
    },
    {
        id: "chat_atsushi_nagisa",
        subtype: "chat",
        group: "1-3",
        sender: "あつし＆なぎさ",
        start_msg:
            "あつし「世界ってさ、もっと自由でいいと思うんだ！」\n" +
            "なぎさ「自由って言葉で全部流すの嫌」\n" +
            "あつし「でも否定ばっかも疲れない？」\n" +
            "なぎさ「疲れるけど、黙るよりマシ」",
        text: "意見を尊重し合いましょう。",
        kana: "いけんをそんちょうしあいましょう。",
        romaji: "iken o sonchou shi aimashou",
        reaction_good:
            "あつし「そっか！それも星だね！」\n" +
            "なぎさ「……嫌いじゃない」",
        reaction_bad:
            "なぎさ「先生、誤字。適当に言ってない？」\n" +
            "あつし「でも楽しい！」",
        images: ["atsushi.png", "nagisa.png"]
    },
    {
        id: "chat_boys_honobono_4",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「やあ☆今日の肌、完璧じゃないかい？」\n" +
            "そうじ「自分に言うな」\n" +
            "そうし「美意識は量子状態で揺らぐ」\n" +
            "あつし「つまり全員最高ってことだね！」",
        text: "楽しそうですね。",
        kana: "たのしそうですね。",
        romaji: "tanoshisou desu ne",
        reaction_good:
            "りつ「当然さ☆」\n" +
            "そうじ「平和」",
        reaction_bad:
            "そうし「先生、誤字検出」\n" +
            "あつし「でも雰囲気いい！」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_kuu_block",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "くう「……今日は帰る」\n" +
            "のりおみ「え、まだ」\n" +
            "くう「無理してるの、顔に出てる」",
        text: "大丈夫ですか？",
        kana: "だいじょうぶですか？",
        romaji: "daijoubu desu ka",
        reaction_good:
            "くう「私が連れて帰る」\n" +
            "のりおみ「……助かる」",
        reaction_bad:
            "くう「先生、誤字。今は口出さないで」\n" +
            "のりおみ「……」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_kuu_home_breakdown",
        subtype: "chat",
        group: "1-3",
        sender: "くう＆のりおみ",
        start_msg:
            "のりおみ「……無理だ」\n" +
            "くう「何が」\n" +
            "のりおみ「全部。音も、人も、思考も」\n" +
            "くう「……座れ」\n" +
            "のりおみ「息が、勝手に速くなる」\n" +
            "くう「大丈夫。ここ私の部屋」",
        text: "落ち着いて話しましょう。",
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "のりおみ「……ここ、逃げてもいい場所だよな」\n" +
            "くう「当たり前」",
        reaction_bad:
            "くう「先生、誤字。今それ言う場面じゃない」\n" +
            "のりおみ「……頭、割れそう」",
        images: ["kuu.png", "noriomi.png"]
    },
    {
        id: "chat_yui_kuu",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆くう",
        start_msg:
            "ゆい「のりおみ、最近ゆい避けてる」\n" +
            "くう「当然」\n" +
            "ゆい「くうちゃんのせいだよね？」\n" +
            "くう「違う。君のせい」\n" +
            "ゆい「……ひど」\n" +
            "くう「事実」",
        text: "言い方に気をつけましょう。",
        kana: "いいかたにきをつけましょう。",
        romaji: "iikata ni ki o tsukemashou",
        reaction_good:
            "くう「私は冷静」\n" +
            "ゆい「泣けばよかった？」",
        reaction_bad:
            "ゆい「先生、誤字。感情乱れてる？」\n" +
            "くう「介入しないで」",
        images: ["yui.png", "kuu.png"]
    },
    {
        id: "chat_noriomi_nagisa",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆なぎさ",
        start_msg:
            "なぎさ「無理なら無理って言えば？」\n" +
            "のりおみ「言ったら壊れる人がいる」\n" +
            "なぎさ「それ、相手の問題」\n" +
            "のりおみ「……そう割り切れたら楽だ」\n" +
            "なぎさ「私は割り切るよ」",
        text: "意見を尊重してください。",
        kana: "いけんをそんちょうしてください。",
        romaji: "iken o sonchou shite kudasai",
        reaction_good:
            "のりおみ「否定されないの、久しぶりだ」\n" +
            "なぎさ「でしょ」",
        reaction_bad:
            "なぎさ「先生、誤字。説得力ない」\n" +
            "のりおみ「……助かる」",
        images: ["noriomi.png", "nagisa.png"]
    },
    {
        id: "chat_boys_cipher",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "そうし「シーザー暗号ってズラすだけで面白い」\n" +
            "そうじ「ずらすの得意だわ俺」\n" +
            "りつ「やあ☆僕の美意識は何進数かな？」\n" +
            "あつし「全部10進法で輝いてる！」",
        text: "授業に集中してください。",
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "そうし「集中も概念」\n" +
            "そうじ「自由」",
        reaction_bad:
            "りつ「先生、誤字☆」\n" +
            "あつし「でも楽しい！」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_rinon_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "りのん＆あつし",
        start_msg:
            "りのん「無駄な努力は嫌い」\n" +
            "あつし「でも楽しい努力もあるよ！」\n" +
            "りのん「結果が出なければ意味がない」\n" +
            "あつし「結果も星の一部！」\n" +
            "りのん「……意味わからない」",
        text: "仲良くしてください。",
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "りのん「嫌いじゃない」\n" +
            "あつし「やった！」",
        reaction_bad:
            "りのん「先生、誤字。評価が雑」\n" +
            "あつし「でも楽しい！」",
        images: ["rinon.png", "atsushi.png"]
    },
    {
        id: "chat_yui_noriomi_bento",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆のりおみ",
        start_msg:
            "ゆい「ねぇのりおみくん♡ 今日さ、お弁当一緒に食べよ？」\n" +
            "のりおみ「……急だな。いつもくうと食ってるけど」\n" +
            "ゆい「え〜、たまにはゆいともいいじゃん。嫌ならいいけど…」\n" +
            "のりおみ「……その言い方やめろ。断りづらくなる」\n" +
            "ゆい「ふふ、知ってる♡ でも来てくれるんでしょ？」\n" +
            "のりおみ「……気分次第だ」\n" +
            "ゆい「じゃあゆい、待ってるね♡ 来なかったら…ちょっとだけ泣くかも」",
        text: "昼休みはどうしますか？",
        kana: "ひるやすみはどうしますか？",
        romaji: "hiruyasumi wa dou shimasu ka",
        reaction_good:
            "のりおみ「……わかった。少しだけな」\n" +
            "ゆい「やった♡ さすがのりおみくん優しい〜」",
        reaction_bad:
            "のりおみ「先生、入力ミスですよ。…それとも試してます？」\n" +
            "ゆい「ふふ、ちゃんと打ってあげて？ゆい見てるから♡」",
        images: ["yui.png", "noriomi.png"]
    },
    {
        id: "chat_noriomi_honoka",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ほのか",
        start_msg:
            "ほのか「ねぇのりおみ、あんたさ。全部斜に構えてるけど楽しい？」\n" +
            "のりおみ「楽しいかどうかで物事決めてないだけだ」\n" +
            "ほのか「はい逃げた。そういうとこ嫌いなんだけど」\n" +
            "のりおみ「嫌われる前提で話してるから問題ない」\n" +
            "ほのか「うわ、めんど。生きづらそう」\n" +
            "のりおみ「事実だな」",
        text: "介入しますか？",
        kana: "かいにゅうしますか？",
        romaji: "kainyuu shimasu ka",
        reaction_good:
            "ほのか「ま、先生が言うなら一旦やめとく」\n" +
            "のりおみ「助かります」",
        reaction_bad:
            "ほのか「先生、誤字多くない？思考も雑そう」\n" +
            "のりおみ「……今のは論点ズレてます」",
        images: ["noriomi.png", "honoka.png"]
    },
    {
        id: "chat_tayori_meri",
        subtype: "chat",
        group: "1-3",
        sender: "たより＆めり",
        start_msg:
            "めり「あの…たよりくん、さっきの発言…失礼じゃなかったかな…？」\n" +
            "たより「全然だよ。むしろ助かった」\n" +
            "めり「……よかった。迷惑かけてないなら」\n" +
            "たより「めりちゃんはもっと自信持っていい」\n" +
            "めり「……ありがとう」",
        text: "見守りますか？",
        kana: "みまもりますか？",
        romaji: "mimamori masu ka",
        reaction_good:
            "たより「先生もそう思います？」\n" +
            "めり「……嬉しいです」",
        reaction_bad:
            "たより「先生、誤字あります」\n" +
            "めり「ご、ごめんなさい…あ、先生でした…」",
        images: ["tayori.png", "meri.png"]
    },
    {
        id: "chat_boys_rin_riku",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "りつ「……はぁ。ああ言われると流石に傷つくんだけど」\n" +
            "そうじ「気にすんな！羽ばたけカワセミ！」\n" +
            "そうし「論理的には問題ない評価だったと思うけど」\n" +
            "あつし「じゃあ星になって忘れちゃお〜！」\n" +
            "りつ「……ふふ、もういいや☆」",
        text: "声をかけますか？",
        kana: "こえをかけますか？",
        romaji: "koe o kakemasu ka",
        reaction_good:
            "りつ「先生も優しいね☆」\n" +
            "そうじ「ほら復活！」",
        reaction_bad:
            "そうじ「先生、誤字ってるぞ〜！」\n" +
            "りつ「入力も美しくお願いしたいな☆」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_kouta_atsushi",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆あつし",
        start_msg:
            "こうた「計画性がなさすぎる」\n" +
            "あつし「え〜？でも楽しいよ？」\n" +
            "こうた「楽しいで物事は進まない」\n" +
            "あつし「じゃあさ、楽しく計画立てよ！」\n" +
            "こうた「……意味がわからない」",
        text: "どうしますか？",
        kana: "どうしますか？",
        romaji: "dou shimasu ka",
        reaction_good:
            "こうた「……一理あるかもしれません」\n" +
            "あつし「でしょ〜！」",
        reaction_bad:
            "こうた「先生、入力ミスです」\n" +
            "あつし「星も誤字もキラキラだね！」",
        images: ["kouta.png", "atsushi.png"]
    },
    {
        id: "chat_noriomi_kuu_safe",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆くう",
        start_msg:
            "のりおみ「……今日、教室うるさすぎないか」\n" +
            "くう「いつもだろ。今さら」\n" +
            "のりおみ「……ゆいが視界に入るだけで胃が痛い」\n" +
            "くう「そりゃトリガーだな」\n" +
            "のりおみ「逃げ場なくてさ」\n" +
            "くう「……帰ったら静かにしとく」\n" +
            "のりおみ「それだけで助かる」",
        text: "声をかけますか？",
        kana: "こえをかけますか？",
        romaji: "koe o kakemasu ka",
        reaction_good:
            "くう「……配慮は感謝する」\n" +
            "のりおみ「ありがとうございます」",
        reaction_bad:
            "のりおみ「先生、誤字です」\n" +
            "くう「集中力切れてるなら下がれ」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_noriomi_fe_burst",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "ゆい「ねぇ、ゆいだけ置いてくの？」\n" +
            "のりおみ「……置いてない」\n" +
            "ゆい「じゃあなんで目合わせてくれないの？」\n" +
            "のりおみ「それは……」\n" +
            "ゆい「ねぇ、ゆいのこと嫌いになった？」\n" +
            "のりおみ「……やめろ」\n" +
            "ゆい「え？」\n" +
            "のりおみ「その言い方……責任取れないなら近づくな！！」",
        text: "介入しますか？",
        kana: "かいにゅうしますか？",
        romaji: "kainyuu shimasu ka",
        reaction_good:
            "のりおみ「……すみません」\n" +
            "ゆい「……そっか」",
        reaction_bad:
            "のりおみ「先生、誤字……今はそれどころじゃない」\n" +
            "ゆい「空気、読んで？」",
        images: ["noriomi.png", "yui.png"]
    },
    {
        id: "chat_boys_weapon",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "そうじ「俺？元兵器兵器w」\n" +
            "りつ「やめてよ☆物騒すぎ！」\n" +
            "そうし「兵器の定義が曖昧だな」\n" +
            "あつし「じゃあ今は平和兵器？」\n" +
            "そうじ「そう！空気破壊用☆」\n" +
            "りつ「ほんと困るんだけど☆」",
        text: "注意しますか？",
        kana: "ちゅういしますか？",
        romaji: "chuui shimasu ka",
        reaction_good:
            "そうじ「え〜、平和的じゃん」\n" +
            "りつ「まぁ結果オーライ☆」",
        reaction_bad:
            "そうじ「先生、誤字ってるぞ〜！」\n" +
            "そうし「入力精度が落ちてる」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_honoka_aoi",
        subtype: "chat",
        group: "1-3",
        sender: "ほのか＆あおい",
        start_msg:
            "ほのか「それ、非効率じゃない？」\n" +
            "あおい「そうかな」\n" +
            "ほのか「論点ずらしてるよね？」\n" +
            "あおい「そうは思わない」\n" +
            "ほのか「……は？」\n" +
            "あおい「私は私のやり方でやるよ」",
        text: "止めますか？",
        kana: "とめますか？",
        romaji: "tomemasu ka",
        reaction_good:
            "ほのか「チッ……」\n" +
            "あおい「……すみません」",
        reaction_bad:
            "ほのか「先生、誤字多くない？」\n" +
            "あおい「入力、違ってます」",
        images: ["honoka.png", "aoi.png"]
    },
    {
        id: "chat_hibiki_kisora_tayori",
        subtype: "chat",
        group: "1-3",
        sender: "ひびき＆きそら＆たより",
        start_msg:
            "ひびき「コケコッコー！！朝やぞ！！」\n" +
            "きそら「ひっ……」\n" +
            "たより「ひびき、声大きい」\n" +
            "ひびき「元気やん？」\n" +
            "きそら「……たよりくん」\n" +
            "たより「大丈夫。ここにいよう」",
        text: "声をかけますか？",
        kana: "こえをかけますか？",
        romaji: "koe o kakemasu ka",
        reaction_good:
            "たより「ありがとうございます」\n" +
            "きそら「……ほっとしました」",
        reaction_bad:
            "ひびき「先生、誤字やで！」\n" +
            "たより「入力、直した方がいいです」",
        images: ["hibiki.png", "kisora.png", "tayori.png"]
    },
    {
        id: "chat_meri_soshi",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆そうし",
        start_msg:
            "めり「……さっきの発言、失礼だったかも」\n" +
            "そうし「失礼の定義が曖昧だね」\n" +
            "めり「え……？」\n" +
            "そうし「意図と受信が一致しないだけ」\n" +
            "めり「……そうなんですね」\n" +
            "そうし「世界は案外、許容範囲が広い」",
        text: "見守りますか？",
        kana: "みまもりますか？",
        romaji: "mimamori masu ka",
        reaction_good:
            "めり「少し、安心しました」\n" +
            "そうし「それなら良かった」",
        reaction_bad:
            "そうし「先生、誤字だよ」\n" +
            "めり「あ……入力、違ってます」",
        images: ["meri.png", "soshi.png"]
    },
    {
        id: "chat_nagisa_honoka",
        subtype: "chat",
        group: "1-3",
        sender: "なぎさ＆ほのか",
        start_msg:
            "ほのか「それ、感情論じゃない？」\n" +
            "なぎさ「否定される前提で話してないし」\n" +
            "ほのか「事実を言ってるだけ」\n" +
            "なぎさ「じゃあ聞かなくていいよね？」\n" +
            "ほのか「……話通じないな」\n" +
            "なぎさ「通じさせる気もないし」",
        text: "止めますか？",
        kana: "とめますか？",
        romaji: "tomemasu ka",
        reaction_good:
            "ほのか「……チッ」\n" +
            "なぎさ「はい終了〜」",
        reaction_bad:
            "なぎさ「先生、誤字ってる」\n" +
            "ほのか「指示が雑」",
        images: ["nagisa.png", "honoka.png"]
    },
    {
        id: "chat_yui_meri",
        subtype: "chat",
        group: "1-3",
        sender: "ゆい＆めり",
        start_msg:
            "ゆい「めりちゃんってさ、優しすぎ」\n" +
            "めり「そ、そうかな……？」\n" +
            "ゆい「ゆいならもっとわがまま言うのに」\n" +
            "めり「それも……悪くないと思う」\n" +
            "ゆい「……へぇ」",
        text: "様子を見ますか？",
        kana: "ようすをみますか？",
        romaji: "yousu o mimasu ka",
        reaction_good:
            "ゆい「ちょっと楽になった」\n" +
            "めり「それなら、よかったです」",
        reaction_bad:
            "ゆい「先生、誤字だよ？」\n" +
            "めり「入力、違います」",
        images: ["yui.png", "meri.png"]
    },
    {
        id: "chat_boys_peace_again",
        subtype: "chat",
        group: "1-3",
        sender: "りつ＆そうじ＆そうし＆あつし",
        start_msg:
            "そうじ「今日も俺、空気破壊兵器？」\n" +
            "りつ「もう兵器設定やめて☆」\n" +
            "そうし「兵器というより現象」\n" +
            "あつし「じゃあ星みたいなもの？」\n" +
            "そうじ「輝いてるってこと？」\n" +
            "りつ「ポジティブ変換すぎ☆」",
        text: "注意しますか？",
        kana: "ちゅういしますか？",
        romaji: "chuui shimasu ka",
        reaction_good:
            "そうじ「平和だな〜」\n" +
            "あつし「うん！」",
        reaction_bad:
            "そうじ「先生、誤字〜！」\n" +
            "そうし「入力精度が低下してる」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
    id: "chat_noriomi_yui_pressure",
    subtype: "chat",
    group: "1-3",
    sender: "のりおみ＆ゆい",
    start_msg:
        "ゆい「ねぇのりおみ、さっきくうちゃんと何話してたの？」\n" +
        "のりおみ「……別に、雑談だけど」\n" +
        "ゆい「ほんと？もしかして、ゆいの悪口？」\n" +
        "のりおみ「そんな話、する意味ないだろ」\n" +
        "ゆい「意味とかじゃなくてさぁ……隠されるの、やだな」",
    text: "落ち着いて話しなさい。",
    kana: "おちついてはなしなさい。",
    romaji: "ochitsuite hanashi nasai",
    reaction_good:
        "のりおみ「……ごめん。言い方が悪かった」\n" +
        "ゆい「えへ、素直なのりおみ可愛い」",
    reaction_bad:
        "ゆい「先生、誤字ってるよ？余裕なさそ」\n" +
        "のりおみ「……話、止まるからちゃんとして」",
    images: ["noriomi.png", "yui.png"]
    },
    {
    id: "chat_noriomi_kuu_safe",
    subtype: "chat",
    group: "1-3",
    sender: "のりおみ＆くう",
    start_msg:
        "のりおみ「……さっきの、俺が悪いのかな」\n" +
        "くう「知らない。私は悪いと思ってない」\n" +
        "のりおみ「即答だな」\n" +
        "くう「考える必要がないだけ」",
    text: "二人とも静かに。",
    kana: "ふたりともしずかに。",
    romaji: "futari tomo shizuka ni",
    reaction_good:
        "のりおみ「……ありがとう。少し楽」\n" +
        "くう「それでいい」",
    reaction_bad:
        "くう「先生、今の文章おかしい」\n" +
        "のりおみ「論理崩れるから直して」",
    images: ["noriomi.png", "kuu.png"]
    },
    {
    id: "chat_boys_relax",
    subtype: "chat",
    group: "1-3",
    sender: "りつ＆そうじ＆そうし＆あつし",
    start_msg:
        "そうじ「なぁ、人生って深刻になる必要なくね？」\n" +
        "りつ「そう思えたら苦労しないんだけど☆」\n" +
        "そうし「深刻さは情報量の問題だよ。削減すればいい」\n" +
        "あつし「じゃあ星になって全部照らせば解決だね！！」",
    text: "楽しそうだね。",
    kana: "たのしそうだね。",
    romaji: "tanoshisou da ne",
    reaction_good:
        "りつ「でしょ☆空気は美容だよ」\n" +
        "そうじ「先生も混ざれよ！」",
    reaction_bad:
        "そうじ「先生、変換ミス多くね？」\n" +
        "そうし「意味がズレるから修正推奨」",
    images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
    id: "chat_mugi_meri",
    subtype: "chat",
    group: "1-3",
    sender: "むぎ＆めり",
    start_msg:
        "むぎ「めり〜！今日の給食プリンでさ〜！」\n" +
        "めり「え、あ、うん！甘かったね」\n" +
        "むぎ「新潟の雪くらい甘かった！！」\n" +
        "めり「……それは分からないけど、すごいね」",
    text: "仲良しだね。",
    kana: "なかよしだね。",
    romaji: "nakayoshi da ne",
    reaction_good:
        "むぎ「でしょでしょ！」\n" +
        "めり「うん」",
    reaction_bad:
        "むぎ「先生、誤字ってるよー！」\n" +
        "めり「読みにくいかも」",
    images: ["mugi.png", "meri.png"]
    },
    {
    id: "chat_kisora_tayori_soshi",
    subtype: "chat",
    group: "1-3",
    sender: "きそら＆たより＆そうし",
    start_msg:
        "きそら「……たよりくん」\n" +
        "たより「どうした？」\n" +
        "きそら「ここ、静かで好き」\n" +
        "そうし「静寂は思考を促進するからね」",
    text: "落ち着いてるね。",
    kana: "おちついてるね。",
    romaji: "ochitsuite ru ne",
    reaction_good:
        "たより「安心する空気だよね」\n" +
        "きそら「うん…」",
    reaction_bad:
        "そうし「先生、誤字はノイズだよ」\n" +
        "たより「直した方がいいかも」",
    images: ["kisora.png", "tayori.png", "soshi.png"]
    },
    {
    id: "chat_yui_selfharm_threat",
    subtype: "chat",
    group: "1-3",
    sender: "ゆい＆のりおみ",
    start_msg:
        "ゆい「……ねぇ、のりおみ」\n" +
        "のりおみ「なに」\n" +
        "ゆい「もしさ、ゆいが消えたら……少しは困る？」\n" +
        "のりおみ「……どういう意味だよ」\n" +
        "ゆい「わかんないならいい。でも、今日ちょっと無理かも」",
    text: "どうしましたか？",
    kana: "どうしましたか？",
    romaji: "dou shimashita ka",
    reaction_good:
        "のりおみ「……待て。今の言い方、冗談に聞こえない」\n" +
        "ゆい「ふふ、ちゃんと反応してくれるんだ」",
    reaction_bad:
        "ゆい「先生、誤字ってるよ。空気読めてない」\n" +
        "のりおみ「……今そこじゃない」",
    images: ["yui.png", "noriomi.png"]
    },
    {
    id: "chat_boys_wholesome_2",
    subtype: "chat",
    group: "1-3",
    sender: "りつ＆そうじ＆そうし＆あつし",
    start_msg:
        "そうじ「人生は深刻になった時点で負けな！」\n" +
        "りつ「でもさ、心の保湿は大事だよ☆」\n" +
        "そうし「保湿理論、興味深いね」\n" +
        "あつし「じゃあみんな星になろう！！」",
    text: "楽しそうですね。",
    kana: "たのしそうですね。",
    romaji: "tanoshisou desu ne",
    reaction_good:
        "りつ「でしょ☆」\n" +
        "そうじ「先生も笑えよ！」",
    reaction_bad:
        "そうじ「先生、誤字多いぞ」\n" +
        "そうし「意味がズレる」",
    images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
    id: "chat_ritsu_soshi",
    subtype: "chat",
    group: "1-3",
    sender: "りつ＆そうし",
    start_msg:
        "りつ「思考ってさ、顔に出ると思うんだよね☆」\n" +
        "そうし「表情筋は情報媒体だね」\n" +
        "りつ「ほら〜話通じる！」",
    text: "静かにしてください。",
    kana: "しずかにしてください。",
    romaji: "shizuka ni shite kudasai",
    reaction_good:
        "りつ「はーい☆」\n" +
        "そうし「了解」",
    reaction_bad:
        "そうし「先生、誤字」\n" +
        "りつ「美容に悪いよ？」",
    images: ["ritsu.png", "soshi.png"]
    },
    {
    id: "chat_mugi_misaki",
    subtype: "chat",
    group: "1-3",
    sender: "むぎ＆みさき",
    start_msg:
        "むぎ「みさき〜！おにぎり二個食べた！」\n" +
        "みさき「え、ちゃんと噛んだ？」\n" +
        "むぎ「噛んだつもり！！」",
    text: "仲良くしてください。",
    kana: "なかよくしてください。",
    romaji: "nakayoku shite kudasai",
    reaction_good:
        "みさき「もう……」\n" +
        "むぎ「えへへ！」",
    reaction_bad:
        "むぎ「先生、字まちがってる〜！」\n" +
        "みさき「読みにくいかも」",
    images: ["mugi.png", "misaki.png"]
    },
    {
    id: "chat_meri_misaki",
    subtype: "chat",
    group: "1-3",
    sender: "めり＆みさき",
    start_msg:
        "めり「みさき、無理してない？」\n" +
        "みさき「大丈夫。慣れてるから」\n" +
        "めり「……慣れって、怖いよね」",
    text: "良い会話ですね。",
    kana: "いいかいわですね。",
    romaji: "ii kaiwa desu ne",
    reaction_good:
        "みさき「うん」\n" +
        "めり「……うん」",
    reaction_bad:
        "めり「先生、誤字」\n" +
        "みさき「直した方がいいかも」",
    images: ["meri.png", "misaki.png"]
    },
    {
        id: "chat_103_noriomi_trigger",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ・くう・ゆい・こうた",
        start_msg:
            "のりおみ「……ゆいが視界に入るだけで胃が痛い」\n" +
            "くう「……視界に入らなきゃいいじゃん」\n" +
            "のりおみ「無理。クラスにいる限り、空気に混ざってる」\n" +
            "くう「……それ、医者に言え」\n" +
            "のりおみ「言った。“トリガー刺激による身体反応”だって」\n" +
            "ゆい「……ねえ？」\n" +
            "ゆい「くうちゃんに、ゆいの悪口話した？？？」\n" +
            "のりおみ「……ちが、」\n" +
            "こうた「……で？」\n" +
            "こうた「何の話をしてたのか、論理的に説明してくれる？」\n" +
            "くう「……言う義務ない」\n" +
            "こうた「のりおみ。君が誰かの存在で体調を崩すなら、それは集団行動上の問題だ」\n" +
            "ゆい「ゆい、そんなに悪いことしたかな……？」\n" +
            "のりおみ「……頼むから、これ以上、俺の中に入ってこないで……」",
        text: "落ち着いて話しましょう。",
        kana: "おちついてはなしましょう。",
        romaji: "ochitsuite hanashimashou",
        reaction_good:
            "くう「……今は無理だ」\n" +
            "こうた「感情整理後に再開しよう」",
        reaction_bad:
            "こうた「誤字がある。冷静さを欠いている証拠だ」\n" +
            "くう「先生、文字も整えてから介入して」",
        images: ["noriomi.png", "kuu.png", "yui.png", "kouta.png"]
    },
    {
        id: "chat_103_boys_soft",
        subtype: "chat",
        group: "1-3",
        sender: "りつ・そうじ・そうし・あつし",
        start_msg:
            "りつ「やあ☆諸君！今日の僕、肌の調子どう思う？」\n" +
            "そうじ「知らねーよｗｗｗ」\n" +
            "あつし「星みたいに輝いてると思うよ！！！」\n" +
            "そうし「輝度で言うと月よりは下だね」\n" +
            "りつ「理論で殴るのやめて！？」",
        text: "授業に集中してください。",
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "りつ「はーい☆美は集中から生まれる！」",
        reaction_bad:
            "そうじ「先生、誤字ってるけどノリで流すわｗ」",
        images: ["ritsu.png", "soji.png", "soshi.png", "atsushi.png"]
    },
    {
        id: "chat_103_soshi_kouta",
        subtype: "chat",
        group: "1-3",
        sender: "そうし・こうた",
        start_msg:
            "そうし「正しさって、誰基準？」\n" +
            "こうた「集団が破綻しない基準だ」\n" +
            "そうし「じゃあ個体が壊れるのは許容？」\n" +
            "こうた「……最小限なら」\n" +
            "そうし「それ、合理じゃなくて切り捨てだよ」",
        text: "議論はほどほどに。",
        kana: "ぎろんはほどほどに。",
        romaji: "giron wa hodohodo ni",
        reaction_good:
            "こうた「……続きは後だ」",
        reaction_bad:
            "そうし「先生、誤字は議論のノイズになるよ」",
        images: ["soshi.png", "kouta.png"]
    },
    {
        id: "chat_103_nagisa_misaki",
        subtype: "chat",
        group: "1-3",
        sender: "なぎさ・みさき",
        start_msg:
            "なぎさ「我慢して偉いって風潮、嫌いなんだよね」\n" +
            "みさき「……でも、我慢しないと回らないこともあるよ」\n" +
            "なぎさ「それ誰の都合？」\n" +
            "みさき「家族、だよ……」",
        text: "二人とも、落ち着いて。",
        kana: "ふたりともおちついて。",
        romaji: "futari tomo ochitsuite",
        reaction_good:
            "なぎさ「まぁ…続きは後で」",
        reaction_bad:
            "みさき「先生、字が違います……」",
        images: ["nagisa.png", "misaki.png"]
    },
    {
        id: "chat_103_kuu_house_break",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ・くう",
        start_msg:
            "のりおみ「……帰った」\n" +
            "くう「風呂、先入れ」\n" +
            "のりおみ「……無理」\n" +
            "くう「は？」\n" +
            "のりおみ「足、動かない」\n" +
            "くう「……ソファ座れ」\n" +
            "のりおみ「……ごめん」\n" +
            "くう「謝るな」\n" +
            "くう「今日は“反応”が強すぎた」\n" +
            "のりおみ「……俺、壊れてる？」\n" +
            "くう「壊れてるのは状況だ」",
        text: "大丈夫ですか？",
        kana: "だいじょうぶですか？",
        romaji: "daijoubu desu ka",
        reaction_good:
            "くう「今は休ませるのが最優先だ」",
        reaction_bad:
            "くう「先生、状況読めてない」",
        images: ["noriomi.png", "kuu.png"]
    },
    {
        id: "chat_103_mugi_idiot",
        subtype: "chat",
        group: "1-3",
        sender: "むぎ・そうじ・りつ",
        start_msg:
            "むぎ「ねぇ聞いてぇ！」\n" +
            "むぎ「生物の教科書開いたら、ひまわりの種入っとったんさ！」\n" +
            "むぎ「おいしそ〜！って思って食べたらさぁ！」\n" +
            "むぎ「紙の味しかしなかった！！！」\n" +
            "そうじ「当たり前だろｗｗｗ」\n" +
            "りつ「むぎちゃん、それは“印刷物”だよ☆」\n" +
            "むぎ「え！？ひまわりじゃないの！？」",
        text: "授業中ですよ。",
        kana: "じゅぎょうちゅうですよ。",
        romaji: "jugyouchuu desu yo",
        reaction_good:
            "むぎ「ごめん先生！でもびっくりしたんさ〜！」",
        reaction_bad:
            "そうじ「先生、字もびっくりしてるｗ」",
        images: ["mugi.png", "soji.png", "ritsu.png"]
    },
    {
        id: "chat_103_rinon_yuhi",
        subtype: "chat",
        group: "1-3",
        sender: "りのん・ゆうひ",
        start_msg:
            "りのん「静かにして」\n" +
            "ゆうひ「え？今盛り上がるとこじゃね？ｗ」\n" +
            "りのん「結果出してから喋って」\n" +
            "ゆうひ「こっわｗｗ」",
        text: "二人とも控えめに。",
        kana: "ふたりともひかえめに。",
        romaji: "futari tomo hikaeme ni",
        reaction_good:
            "りのん「……了解」",
        reaction_bad:
            "ゆうひ「先生、誤字ってて草ｗ」",
        images: ["rinon.png", "yuhi.png"]
    },
    {
        id: "chat_103_kisora_tayori",
        subtype: "chat",
        group: "1-3",
        sender: "きそら・たより",
        start_msg:
            "きそら「……ここ、静か」\n" +
            "たより「無理しなくていい」\n" +
            "きそら「名前で呼んで……」\n" +
            "たより「きそらちゃん」",
        text: "仲良しですね。",
        kana: "なかよしですね。",
        romaji: "nakayoshi desu ne",
        reaction_good:
            "たより「ええ、まぁ」",
        reaction_bad:
            "きそら「……せんせ、ちがう」",
        images: ["kisora.png", "tayori.png"]
    },
    {
        id: "chat_103_atsushi_light",
        subtype: "chat",
        group: "1-3",
        sender: "あつし・そうし",
        start_msg:
            "あつし「暗いならさ！」\n" +
            "あつし「星になって光ればよくない！？」\n" +
            "そうし「理論的ではないけど嫌いじゃない」",
        text: "前向きですね。",
        kana: "まえむきですね。",
        romaji: "maemuki desu ne",
        reaction_good:
            "あつし「でしょ！！！」",
        reaction_bad:
            "そうし「先生、字がズレてる」",
        images: ["atsushi.png", "soshi.png"]
    },
    { 
        id: "chat_noriomi_yui_presence",
        subtype: "chat",
        group: "1-3",
        sender: "のりおみ＆ゆい",
        start_msg:
            "のりおみ「……大丈夫、だよ」\n" +
            "ゆい「……ねえ」\n" +
            "ゆい「その言い方さ」\n" +
            "ゆい「一番煽ってるって、気づいてる？」\n" +
            "のりおみ「……え？」\n" +
            "ゆい「優しいフリして、全部遠くから見下ろしてる感じ」\n" +
            "のりおみ「……そんなつもりは」\n" +
            "のりおみ「気を遣ってるだけ、で……」\n" +
            "ゆい「ほら、それ」\n" +
            "ゆい「自分は大人で、ゆいは面倒な子って言ってるのと同じ」",
        text: "落ち着いて話し合いましょう。",
        kana: "おちついてはなしあいましょう。",
        romaji: "ochitsuite hanashiaimashou",
        reaction_good:
            "のりおみ「……すみません。言い方、考えます」\n" +
            "ゆい「ふーん。今のはちょっとだけマシ」",
        reaction_bad:
            "ゆい「先生、今の入力」\n" +
            "ゆい「雑すぎ。気持ち入ってない」\n" +
            "のりおみ「……伝える気、あります？」",
        images: ["noriomi.png", "yui.png"]
    },
    { 
        id: "chat_kouta_mugi_logic",
        subtype: "chat",
        group: "1-3",
        sender: "こうた＆むぎ",
        start_msg:
            "こうた「それは非効率だ。順序を守れ」\n" +
            "むぎ「え？ なんで？」\n" +
            "むぎ「楽しいほうがよくない？」\n" +
            "こうた「感情で判断するな。結果が全てだ」\n" +
            "むぎ「けっかっておいしい？」\n" +
            "こうた「……話を聞け」\n" +
            "むぎ「え、怒ってる？ なんで？？」",
        text: "話を整理して説明してください。",
        kana: "はなしをせいりしてせつめいしてください。",
        romaji: "hanashi wo seiri shite setsumei shite kudasai",
        reaction_good:
            "こうた「……順を追って説明する」\n" +
            "むぎ「わー！ せんせーみたい！」",
        reaction_bad:
            "こうた「その誤入力」\n" +
            "こうた「論理構造が破綻している」\n" +
            "むぎ「えー？ こわーい！」",
        images: ["kouta.png", "mugi.png"]
    },
    { 
        id: "chat_soji_yuhi_chaos",
        subtype: "chat",
        group: "1-3",
        sender: "そうじ＆ゆうひ",
        start_msg:
            "そうじ「深刻な顔してるやつ多すぎだろ」\n" +
            "ゆうひ「草w それなw」\n" +
            "そうじ「オレ空気破壊するの得意だからさ」\n" +
            "ゆうひ「やめろwww」\n" +
            "そうじ「やめねぇよ？」",
        text: "授業中です。静かにしてください。",
        kana: "じゅぎょうちゅうです。しずかにしてください。",
        romaji: "jugyouchuu desu. shizuka ni shite kudasai",
        reaction_good:
            "そうじ「はーい（守らない）」\n" +
            "ゆうひ「一瞬だけなw」",
        reaction_bad:
            "ゆうひ「先生誤字ってて草」\n" +
            "そうじ「説得力ゼロ」",
        images: ["soji.png", "yuhi.png"]
    },
    { 
        id: "chat_meri_soshi_thought",
        subtype: "chat",
        group: "1-3",
        sender: "めり＆そうし",
        start_msg:
            "めり「……あの、ごめんね」\n" +
            "そうし「え？ なんで？」\n" +
            "めり「邪魔だったら、失礼極まりなくて……」\n" +
            "そうし「今、火星で都市設計してた」\n" +
            "めり「えっ……？」",
        text: "会話を続けてください。",
        kana: "かいわをつづけてください。",
        romaji: "kaiwa wo tsuzukete kudasai",
        reaction_good:
            "そうし「地球の話に戻すね」\n" +
            "めり「ありがとうございます……！」",
        reaction_bad:
            "そうし「その入力」\n" +
            "そうし「論理的に存在してない」",
        images: ["meri.png", "soshi.png"]
    },
    // --- 1-4 ---
    { 
        id: "chat_1-4_noise_from_alice",
        subtype: "chat",
        group: "1-4",
        sender: "ありす",
        start_msg:
            "ありす（心の声）「……今日の騒音レベル、昨日より3割増し」\n" +
            "ゆきひこ「わち今日さ〜！ゆきひこ団の新キャラ考えたんだけど！」\n" +
            "あやと「オラそれ知りてぇ！納豆投げる役ある？」\n" +
            "すい「うっせ。廊下走ってくるわ」\n" +
            "えんや「待て！世界を救うのはオレだ！」\n" +
            "かじ「ねこたくん参上！黒板使っていい？」\n" +
            "ありす（心の声）「……耳が死ぬ」",
        text: "教室の状況を把握しなさい。",
        kana: "きょうしつのじょうきょうをはあくしなさい。",
        romaji: "kyoushitsu no joukyou o haaku shinasai",
        reaction_good:
            "ありす「……把握はしてる。問題は騒音」\n" +
            "ろい「騒音源が多すぎるニダ」",
        reaction_bad:
            "ありす「誤字。集中切れるからやめて」\n" +
            "ろい「タイプミスは情報汚染ニダ」",
        images: ["alice.png", "yukihiko.png", "ayato.png", "sui.png", "enya.png", "kaji.png", "roi.png"]
    },
    { 
        id: "chat_1-4_kaji_vs_alice",
        subtype: "chat",
        group: "1-4",
        sender: "かじ＆ありす",
        start_msg:
            "かじ「なぁなぁ！これ見て！新聞紙で作った猫ロボ！」\n" +
            "ありす「……今、何時だと思ってる？」\n" +
            "かじ「昼休み前！」\n" +
            "ありす「思考が一番深い時間帯」\n" +
            "かじ「すげぇ！よく分かんないけどすげぇ！」\n" +
            "ありす「分かんないなら静かにして」",
        text: "二人に声をかけます。",
        kana: "ふたりにこえをかけます。",
        romaji: "futari ni koe o kakemasu",
        reaction_good:
            "ありす「先生、かじが騒音です」\n" +
            "かじ「騒音！？オレ音じゃないよ！？」",
        reaction_bad:
            "ありす「誤字。注意がそれた」\n" +
            "かじ「今の何！？オレのせい！？」",
        images: ["kaji.png", "alice.png"]
    },
    { 
        id: "chat_1-4_alice_roi_silence",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「……今日は騒がしいニダ」\n" +
            "ありす「統計的に見て、いつもより多い」\n" +
            "ろい「逃げ場はないニダ」\n" +
            "ありす「……机の下は？」\n" +
            "ろい「合理的だニダ」",
        text: "二人の会話を続けさせます。",
        kana: "ふたりのかいわをつづけさせます。",
        romaji: "futari no kaiwa o tsuzukesasemasu",
        reaction_good:
            "ありす「……静か」\n" +
            "ろい「最高の環境ニダ」",
        reaction_bad:
            "ろい「誤入力ニダ」\n" +
            "ありす「現実に戻された」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_1-4_yoru_alice_halfdream",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆ありす",
        start_msg:
            "よる「……ありす、まだ夢の中おるやろ」\n" +
            "ありす「現実より解像度高い」\n" +
            "よる「そがん言うと思った」\n" +
            "ありす「夢は邪魔しない。現実はうるさい」\n" +
            "よる「わかる。朝の教室、音が刺さる」\n" +
            "ありす「……静かな場所、落ちてないかな」",
        text: "二人に声をかけます。",
        kana: "ふたりにこえをかけます。",
        romaji: "futari ni koe o kakemasu",
        reaction_good:
            "ありす「……今、起きてる判定になった」\n" +
            "よる「先生、夢ん中では静かにして」",
        reaction_bad:
            "ありす「誤字。現実感が強制接続された」\n" +
            "よる「変な文字入っとるけん、夢から落ちた」",
        images: ["yoru.png", "alice.png"]
    },
    {
        id: "chat_1-4_haruka_security",
        subtype: "chat",
        group: "1-4",
        sender: "はるか",
        start_msg:
            "はるか「ちょっとみんなー！席つこ！」\n" +
            "すい「無理。足が勝手に走る」\n" +
            "あやと「オラまだ納豆残っとる！」\n" +
            "ゆきひこ「わち黒板に顔描いちゃった！」\n" +
            "はるか「情報量多い！一人ずつ！」",
        text: "落ち着くよう指示します。",
        kana: "おちつくようしじします。",
        romaji: "ochitsuku you shiji shimasu",
        reaction_good:
            "はるか「ありがとう先生！今ならいける気がする！」\n" +
            "たいち「今のうちに座ろう…」",
        reaction_bad:
            "はるか「先生、誤字ってる場合じゃないよ！？」\n" +
            "すい「その打鍵の方が落ち着いてねぇ」",
        images: ["haruka.png", "sui.png", "ayato.png", "yukihiko.png", "taichi.png"]
    },
    {
        id: "chat_1-4_mikoto_silence",
        subtype: "chat",
        group: "1-4",
        sender: "みこと",
        start_msg:
            "みこと「……なぁ」\n" +
            "（一瞬、空気が止まる）\n" +
            "みこと「今、静かにできひん人は後で話そ」\n" +
            "えんや「……はい」\n" +
            "すい「チッ……」",
        text: "教室を見回します。",
        kana: "きょうしつをみまわします。",
        romaji: "kyoushitsu o mimawashimasu",
        reaction_good:
            "みこと「判断、はやくて助かるわ」\n" +
            "ろい「合理的制圧ニダ」",
        reaction_bad:
            "みこと「誤字。集中切れるから直して」\n" +
            "ろい「教官の入力精度が低いニダ」",
        images: ["mikoto.png", "enya.png", "sui.png", "roi.png"]
    },
    {
        id: "chat_1-4_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき",
        start_msg:
            "ゆうき「はいはい〜今日の運勢見るよ〜」\n" +
            "さやか「……ほんまに当たるん？」\n" +
            "ゆうき「信じる心が大事！」\n" +
            "ありす「統計的根拠は？」\n" +
            "ゆうき「ノリ！」",
        text: "占いを止めさせます。",
        kana: "うらないをとめさせます。",
        romaji: "uranai o tomesasemasu",
        reaction_good:
            "ゆうき「はーい！また放課後ね！」\n" +
            "さやか「ちょっと残念やけど…」",
        reaction_bad:
            "ありす「誤字。信憑性がさらに下がった」\n" +
            "ゆうき「先生の入力も占っとこっか？」",
        images: ["yuuki.png", "sayaka.png", "alice.png"]
    },
    {
        id: "chat_1-4_taichi_rules",
        subtype: "chat",
        group: "1-4",
        sender: "たいち",
        start_msg:
            "たいち「……廊下、走っちゃだめだよ」\n" +
            "すい「細かくね？」\n" +
            "たいち「校則に書いてある」\n" +
            "すい「……チッ」",
        text: "二人を注意します。",
        kana: "ふたりをちゅういします。",
        romaji: "futari o chuui shimasu",
        reaction_good:
            "たいち「ありがとうございます」\n" +
            "すい「まぁ、守るわ」",
        reaction_bad:
            "たいち「誤字…気になります」\n" +
            "すい「先生の方がルール違反だろ」",
        images: ["taichi.png", "sui.png"]
    },
    {
        id: "chat_1-4_kaji_event",
        subtype: "chat",
        group: "1-4",
        sender: "かじ",
        start_msg:
            "かじ「ねこたくん参上！！」\n" +
            "まや「……また始まった」\n" +
            "はるか「今はダメ！」\n" +
            "かじ「今しかないと思った！」",
        text: "止めに入ります。",
        kana: "とめにはいります。",
        romaji: "tome ni hairimasu",
        reaction_good:
            "かじ「えへへ…怒られた」\n" +
            "まや「片付けてから帰りなさい」",
        reaction_bad:
            "かじ「先生、文字おかしいよ！？」\n" +
            "まや「注意する側がミスしてる…」",
        images: ["kaji.png", "maya.png", "haruka.png"]
    },
    {
        id: "chat_1-4_sui_sadama_clash",
        subtype: "chat",
        group: "1-4",
        sender: "すい＆さだま",
        start_msg:
            "すい「うぜぇな。指示ばっか出すなよ」\n" +
            "さだま「無駄な行動が多いからだ」\n" +
            "すい「効率効率って、人は部品じゃねぇ」\n" +
            "さだま「感情論で動くから事故る」\n" +
            "すい「殴った方が早ぇ時もあんだろ」\n" +
            "さだま「その発想が危険だ」",
        text: "二人を制止します。",
        kana: "ふたりをせいしします。",
        romaji: "futari o seishi shimasu",
        reaction_good:
            "さだま「……先生の判断は妥当だ」\n" +
            "すい「チッ……今回はな」",
        reaction_bad:
            "すい「先生、誤字ってんぞ」\n" +
            "さだま「制止以前に入力精度を上げてください」",
        images: ["sui.png", "sadama.png"]
    },
    {
        id: "chat_1-4_akatsuki_piano_dark",
        subtype: "chat",
        group: "1-4",
        sender: "あかつき",
        start_msg:
            "あかつき「……また間違えた」\n" +
            "あかつき「兄貴なら一発で弾けるのに」\n" +
            "あかつき「才能ないなら、やる意味ねぇだろ」",
        text: "声をかけます。",
        kana: "こえをかけます。",
        romaji: "koe o kakemasu",
        reaction_good:
            "あかつき「……別に、慰めはいらねぇ」\n" +
            "あかつき「でも……聞いてくれただけでいい」",
        reaction_bad:
            "あかつき「先生、誤字ってる」\n" +
            "あかつき「そういう雑なとこ、嫌いだ」",
        images: ["akatsuki.png"]
    },
    {
        id: "chat_1-4_enya_savior",
        subtype: "chat",
        group: "1-4",
        sender: "えんや",
        start_msg:
            "えんや「聞こえる……今も誰かの悲鳴が」\n" +
            "えんや「オレが動かないと世界は終わる」\n" +
            "はるか「えんやくん！？ちょっと落ち着こ？」\n" +
            "えんや「止めるな！使命なんだ！」",
        text: "えんやを落ち着かせます。",
        kana: "えんやをおちつかせます。",
        romaji: "enya o ochitsukasemasu",
        reaction_good:
            "えんや「……今は、待つ時か」\n" +
            "はるか「うん！今は教室守ろ！」",
        reaction_bad:
            "えんや「先生……誤字が世界線を乱した」\n" +
            "はるか「今それ言う！？笑」",
        images: ["enya.png", "haruka.png"]
    },
    {
        id: "chat_1-4_roi_spyplay",
        subtype: "chat",
        group: "1-4",
        sender: "ろい",
        start_msg:
            "ゆきひこ「わち見た！ろいくん影から出てきた！」\n" +
            "かじ「やっぱスパイじゃん！」\n" +
            "ろい「違うニダ。ただの移動だ」\n" +
            "あやと「それスパイの言い訳！」\n" +
            "ろい「……低レベルな推理だ」",
        text: "誤解を解きます。",
        kana: "ごかいをときます。",
        romaji: "gokai o tokimasu",
        reaction_good:
            "ろい「理解が早くて助かるニダ」\n" +
            "ゆきひこ「わち、ちょっと残念！」",
        reaction_bad:
            "ろい「先生、誤字ニダ」\n" +
            "ろい「情報操作以前の問題だ」",
        images: ["roi.png", "yukihiko.png", "kaji.png", "ayato.png"]
    },
    {
        id: "chat_1-4_alice_reality",
        subtype: "chat",
        group: "1-4",
        sender: "ありす",
        start_msg:
            "ありす「……別に」\n" +
            "ありす「夢の方が楽なのは変わらない」\n" +
            "ありす「でも……」\n" +
            "ありす「静かな午後の教室は、嫌いじゃない」",
        text: "黙って見守ります。",
        kana: "だまってみまもります。",
        romaji: "damatte mimamorimasu",
        reaction_good:
            "ありす「……今は起きててもいい」",
        reaction_bad:
            "ありす「誤字」\n" +
            "ありす「現実に戻る気が失せた」",
        images: ["alice.png"]
    },
    {
        id: "chat_1-4_alice_spy_interest",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「……ねえ」\n" +
            "ろい「何ニダ」\n" +
            "ありす「スパイって、常に嘘ついてるの？」\n" +
            "ろい「必要なら」\n" +
            "ありす「じゃあ……本当の自分は、どこにあるの」\n" +
            "ろい「……定義次第ニダ」\n" +
            "ありす「ふーん。夢より面白いかも」",
        text: "二人の会話を止めます。",
        kana: "ふたりのかいわをとめます。",
        romaji: "futari no kaiwa o tomemasu",
        reaction_good:
            "ありす「別に授業の邪魔はしてない」\n" +
            "ろい「問題ないニダ」",
        reaction_bad:
            "ありす「誤字」\n" +
            "ろい「監視対象としては甘いニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_1-4_roi_mocked_spy",
        subtype: "chat",
        group: "1-4",
        sender: "ろい",
        start_msg:
            "ゆきひこ「わち思ったんだけどさ〜」\n" +
            "あやと「ろいって二重人格だろ？」\n" +
            "かじ「絶対通信機持ってるって！」\n" +
            "ろい「……低次元な推論だ」\n" +
            "ありす「でも否定しないんだ」\n" +
            "ろい「否定する価値がないニダ」",
        text: "注意します。",
        kana: "ちゅういします。",
        romaji: "chuui shimasu",
        reaction_good:
            "ろい「了解ニダ」\n" +
            "ありす「……やっぱ面白い」",
        reaction_bad:
            "ろい「誤字」\n" +
            "ありす「現実の先生、ポンコツ」",
        images: ["roi.png", "alice.png", "yukihiko.png", "ayato.png", "kaji.png"]
    },
    { 
        id: "chat_roi_alice_observe",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ありす「ねえ、ろい」\n" +
            "ろい「何ニダ」\n" +
            "ありす「もしさ。計画が全部うまくいっても、退屈だったらどうする？」\n" +
            "ろい「……退屈は排除対象ニダ」\n" +
            "ありす「へえ。感情じゃなくて処理するんだ」\n" +
            "ろい「感情で判断すると、ミスが増える」\n" +
            "ありす「じゃあさ――あたしが退屈だったら？」\n" +
            "ろい「……それは、例外ニダ」\n" +
            "ありす「ふーん。今の、ちょっと遅れたね」\n" +
            "ろい「試したな」\n" +
            "ありす「うん。合格」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ろい「悪くない観測だ」\n" +
            "ありす「でしょ。退屈しなかった」",
        reaction_bad:
            "ろい「誤字が多い。焦ってるのか」\n" +
            "ありす「落ち着いて入力してから来て」",
        images: ["roi.png", "alice.png"]
    },
    { 
        id: "chat_alice_salty_enfp",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ゆきひこ＆あやと",
        start_msg:
            "ゆきひこ「わちさ〜！ありすにこれ見せたくてさ〜！」\n" +
            "ありす「三行で」\n" +
            "ゆきひこ「え、三行！？」\n" +
            "あやと「オラも混ざっていい？」\n" +
            "ありす「同時に話すなら、どっちか黙って」\n" +
            "ゆきひこ「わ、わち黙る！」\n" +
            "あやと「じゃあオラが――」\n" +
            "ありす「結論から言って」\n" +
            "あやと「……えっと……」\n" +
            "ありす「はい終了。次」",
        text: "ちゃんと会話しなさい。", 
        kana: "ちゃんとかいわしなさい。",
        romaji: "chanto kaiwa shinasai",
        reaction_good:
            "ゆきひこ「わち、要点まとめる練習する！」\n" +
            "ありす「最初からそうして」",
        reaction_bad:
            "ありす「今の入力、話長い人みたい」\n" +
            "ゆきひこ「わちより長い！？」",
        images: ["alice.png", "yukihiko.png", "ayato.png"]
    },
    { 
        id: "chat_alice_good_mood",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「眠くないのか」\n" +
            "ありす「今日はね」\n" +
            "ろい「珍しい」\n" +
            "ありす「……あんたのせい」\n" +
            "ろい「それは、想定外ニダ」\n" +
            "ありす「ふふ。今の反応、記録」",
        text: "私語は控えなさい。", 
        kana: "しごはひかえなさい。",
        romaji: "shigo wa hikae nasai",
        reaction_good:
            "ろい「後で続きだ」\n" +
            "ありす「うん」",
        reaction_bad:
            "ありす「そこ誤字ると雰囲気壊れる」\n" +
            "ろい「修正しろ」",
        images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_alice_roi_observe",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「ねえ、ろい」\n" +
            "ろい「……何ニダ」\n" +
            "ありす「このクラス、無駄な動き多いと思わない？」\n" +
            "ろい「効率は最悪ニダ」\n" +
            "ありす「でも？」\n" +
            "ろい「……娯楽性は高い」\n" +
            "ありす「ふふ、今の反応は想定内」\n" +
            "ろい「試してる顔ニダ」",
        text: "二人とも、授業中です。静かにしてください。", 
        kana: "ふたりとも、じゅぎょうちゅうです。しずかにしてください。",
        romaji: "futari tomo, jugyouchuu desu. shizuka ni shite kudasai",
        reaction_good:
            "ろい「了解ニダ」\n" +
            "ありす「はいはい、観測終了」",
        reaction_bad:
            "ありす「先生、言い回しが曖昧」\n" +
            "ろい「指示は正確にするべきニダ」",
        images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_enfp_salt_alice",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆ありす",
        start_msg:
            "ゆきひこ「わち、新しい必殺技考えたんだけど見る？」\n" +
            "あやと「オラも納豆連携思いついた！」\n" +
            "ありす「……今じゃない」\n" +
            "ゆきひこ「えっ冷たっ」\n" +
            "あやと「でも今の『今じゃない』良くね？」\n" +
            "ありす「（小声）騒音だけど、挙動は面白い」",
        text: "騒がないでください。", 
        kana: "さわがないでください。",
        romaji: "sawaganaide kudasai",
        reaction_good:
            "ゆきひこ「わち静かにする！」\n" +
            "あやと「オラ後でやる！」\n" +
            "ありす「理解が早くて助かる」",
        reaction_bad:
            "ありす「その注意、雑音レベル」\n" +
            "あやと「先生、言葉足りねぇべ」",
        images: ["yukihiko.png", "ayato.png", "alice.png"]
    },
    { 
        id: "chat_elementary_trio",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "かじ「見て！新聞紙で猫ロボ作った！」\n" +
            "ゆきひこ「わち団の基地に置こう！」\n" +
            "あやと「オラ納豆で動力つける！」\n" +
            "かじ「それ壊れるやつ！」",
        text: "何をしているんですか。", 
        kana: "なにをしているんですか。",
        romaji: "nani o shiteirun desu ka",
        reaction_good:
            "ゆきひこ「工作です！」\n" +
            "あやと「多分！」\n" +
            "かじ「一応！」",
        reaction_bad:
            "かじ「質問がざっくりすぎ」\n" +
            "ゆきひこ「わち意味わからんかった！」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    { 
        id: "chat_short_good_mood",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「眠そうニダ」\n" +
            "ありす「うん、でも今は平気」",
        text: "そのまま続けてください。", 
        kana: "そのままつづけてください。",
        romaji: "sono mama tsuzukete kudasai",
        reaction_good:
            "ありす「……ありがと」\n" +
            "ろい「珍しいニダ」",
        reaction_bad:
            "ありす「今の言葉、余計」\n" +
            "ろい「ノイズが多いニダ」",
        images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_divination_break",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆はるか",
        start_msg:
            "ゆうき「今日の運勢見る？」\n" +
            "はるか「えー！見たい見たい！」\n" +
            "ゆうき「大吉、ただし騒ぐと怒られる」\n" +
            "はるか「今じゃんそれ！」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "はるか「はーい！」\n" +
            "ゆうき「運勢当たったね」",
        reaction_bad:
            "ゆうき「注意の精度が低い」\n" +
            "はるか「先生、もうちょい優しくても！」",
        images: ["yuuki.png", "haruka.png"]
    },
    {
    id: "chat_alice_roi_retest",
    subtype: "chat",
    group: "1-4",
    sender: "ありす＆ろい",
    start_msg:
        "ありす「ろい、さっきの続き」\n" +
        "ろい「今度は何を測るニダ」\n" +
        "ありす「仮定。私が今、このクラスを全部切り捨てるって言ったら？」\n" +
        "ろい「……合理性はあるが、失う情報が多いニダ」\n" +
        "ありす「即否定しないの、偉い」\n" +
        "ろい「試験官の口調ニダ」\n" +
        "ありす「合格かは、まだ見てから」",
    text: "私語は控えてください。",
    kana: "しごはひかえてください。",
    romaji: "shigo wa hikaete kudasai",
    reaction_good:
        "ろい「了解ニダ」\n" +
        "ありす「……続きは放課後」",
    reaction_bad:
        "ありす「注意が抽象的」\n" +
        "ろい「条件指定が甘いニダ」",
    images: ["alice.png", "roi.png"]
    },
    {
    id: "chat_elementary_trio_chaos",
    subtype: "chat",
    group: "1-4",
    sender: "ゆきひこ＆あやと＆かじ",
    start_msg:
        "ゆきひこ「わち団、秘密基地ここにする！」\n" +
        "かじ「机の下はロマン！」\n" +
        "あやと「オラ見張り役！」\n" +
        "ゆきひこ「敵来たらどうする！？」\n" +
        "かじ「逃げる！」\n" +
        "あやと「納豆投げる！」",
    text: "何をしているのですか。",
    kana: "なにをしているのですか。",
    romaji: "nani o shiteiru no desu ka",
    reaction_good:
        "ゆきひこ「遊びです！」\n" +
        "かじ「授業前です！」",
    reaction_bad:
        "かじ「質問が広すぎ」\n" +
        "ゆきひこ「わち困った！」",
    images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
    id: "chat_ayato_fall",
    subtype: "chat",
    group: "1-4",
    sender: "あやと＆はるか＆たいち",
    start_msg:
        "あやと「オラ考え事してたらさ──」\n" +
        "（ガタン！）\n" +
        "あやと「うわっ！！」\n" +
        "はるか「大丈夫！？」\n" +
        "たいち「椅子はちゃんと座らないと……」\n" +
        "あやと「床つえぇ……」",
    text: "大丈夫ですか。",
    kana: "だいじょうぶですか。",
    romaji: "daijoubu desu ka",
    reaction_good:
        "あやと「大丈夫！」\n" +
        "はるか「びっくりしたね」",
    reaction_bad:
        "たいち「先生、声が小さいです」\n" +
        "あやと「聞こえなかった！」",
    images: ["ayato.png", "haruka.png", "taichi.png"]
    },
    {
    id: "chat_yuuki_fortune",
    subtype: "chat",
    group: "1-4",
    sender: "ゆうき＆よる",
    start_msg:
        "ゆうき「今日の運勢見る？」\n" +
        "よる「当たるなら」\n" +
        "ゆうき「夜更かしすると凶」\n" +
        "よる「もう詰んどる」",
    text: "静かにしてください。",
    kana: "しずかにしてください。",
    romaji: "shizuka ni shite kudasai",
    reaction_good:
        "ゆうき「はいはい〜」\n" +
        "よる「占い当たったやん」",
    reaction_bad:
        "ゆうき「注意の精度が低い」\n" +
        "よる「今の聞き取れん」",
    images: ["yuuki.png", "yoru.png"]
    },
    {
    id: "chat_enya_sui",
    subtype: "chat",
    group: "1-4",
    sender: "えんや＆すい",
    start_msg:
        "えんや「オレが本気出したら世界変わるから」\n" +
        "すい「はいはいヒーロー」\n" +
        "えんや「信じてないな？」\n" +
        "すい「信じてる信じてる、廊下で」",
    text: "静かに。",
    kana: "しずかに。",
    romaji: "shizuka ni",
    reaction_good:
        "すい「はい」\n" +
        "えんや「力を抑えるか……」",
    reaction_bad:
        "えんや「命令が短すぎる」\n" +
        "すい「雑だな」",
    images: ["enya.png", "sui.png"]
    },
    {
    id: "chat_alice_good_mood",
    subtype: "chat",
    group: "1-4",
    sender: "ありす＆ろい",
    start_msg:
        "ろい「今日は眠くないニダ？」\n" +
        "ありす「うん、今は面白いから」",
    text: "そのまま続けてください。",
    kana: "そのままつづけてください。",
    romaji: "sono mama tsuzukete kudasai",
    reaction_good:
        "ありす「……ありがとう」\n" +
        "ろい「貴重ニダ」",
    reaction_bad:
        "ありす「今の一言、余計」\n" +
        "ろい「ノイズニダ」",
    images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_alice_roi_test",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「……平均点、想定より低いニダ」\n" +
            "ありす「そりゃそう。問題構造が単調すぎ」\n" +
            "ろい「単調でも識別力はある」\n" +
            "ありす「その識別、現実じゃ役に立たない」\n" +
            "ろい「……で、ありすの点数は？」\n" +
            "ありす「……」\n" +
            "ろい「……？」\n" +
            "ありす「……はい」\n" +
            "（バサッ）",
        text: "ありすさん、テストは投げないでください。",
        kana: "ありすさん、てすとはなげないでください。",
        romaji: "alice-san, tesuto wa nagenai de kudasai",
        reaction_good:
            "ありす「外した。狙いが甘かった」\n" +
            "ろい「失敗を分析する姿勢は評価するニダ」",
        reaction_bad:
            "ありす「今の言い方、論理欠けてる」\n" +
            "ろい「typo以前に構文が崩壊してるニダ」",
        images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_mikoto_te",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆すい",
        start_msg:
            "すい「めんどい授業、サボらね？」\n" +
            "みこと「まあまあ」\n" +
            "すい「今の『まあまあ』信用できねぇんだけど」\n" +
            "みこと「……すい、廊下走った回数と注意回数、先月比で増えとる」\n" +
            "すい「は？」\n" +
            "みこと「効率悪い。今サボると後で倍だるい」\n" +
            "すい「……」\n" +
            "みこと「行くで。今」",
        text: "授業に戻ってください。",
        kana: "じゅぎょうにもどってください。",
        romaji: "jugyou ni modotte kudasai",
        reaction_good:
            "すい「チッ……今日は従っとくわ」\n" +
            "みこと「賢明やな」",
        reaction_bad:
            "みこと「その言い方、非効率」\n" +
            "すい「先生、今の指示ズレてね？」",
        images: ["mikoto.png", "sui.png"]
    },
    { 
        id: "chat_kids_vs_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ＆たいち",
        start_msg:
            "ゆきひこ「わち、たいちの耳すごい説提唱する〜」\n" +
            "あやと「オラ検証すっぺ！」\n" +
            "かじ「じゃあ後ろで変な音出す！」\n" +
            "（カサ…）\n" +
            "たいち「……今、紙擦ったでしょ」\n" +
            "三人「！？」\n" +
            "たいち「静かにして。集中切れる」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ゆきひこ「わち…反省…」\n" +
            "あやと「すげぇ…」\n" +
            "かじ「人間センサーだ…」",
        reaction_bad:
            "たいち「今の注意、曖昧すぎ」\n" +
            "かじ「先生、言葉足りてなくね？」",
        images: ["yukihiko.png", "ayato.png", "kaji.png", "taichi.png"]
    },
    { 
        id: "chat_janken_pon",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "かじ「叩いて被ってじゃんけんぽんやろうぜ！」\n" +
            "ゆきひこ「わち、被る役やる〜」\n" +
            "あやと「オラ叩く気満々！」\n" +
            "（ガンッ）\n" +
            "ゆきひこ「痛いんだけど！？」\n" +
            "かじ「早すぎた！」",
        text: "何をしているんですか。",
        kana: "なにをしているんですか。",
        romaji: "nani o shiteirun desu ka",
        reaction_good:
            "ゆきひこ「わち、生存…」\n" +
            "あやと「楽しかったな！」",
        reaction_bad:
            "かじ「先生、説明不足！」\n" +
            "あやと「言い切れてねぇ！」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    { 
        id: "chat_yoru_late",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆はるか",
        start_msg:
            "はるか「よるちゃん、また遅刻だよ〜？」\n" +
            "よる「夜が楽しかったと…」\n" +
            "はるか「朝は楽しくなかった？」\n" +
            "よる「存在してなかった」",
        text: "遅刻はよくありません。",
        kana: "ちこくはよくありません。",
        romaji: "chikoku wa yokuarimasen",
        reaction_good:
            "よる「……はい」\n" +
            "はるか「次は一緒に起きよ！」",
        reaction_bad:
            "よる「その注意、眠い」\n" +
            "はるか「もうちょい優しく言お？」",
        images: ["yoru.png", "haruka.png"]
    },
    { 
        id: "chat_roi_enya_ideology",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆えんや",
        start_msg:
            "えんや「世界を救えるのはオレだけだと思うんだよね」\n" +
            "ろい「根拠は？」\n" +
            "えんや「直感。あとオレ、心読めるし」\n" +
            "ろい「再現性がないニダ」\n" +
            "えんや「支配される側の発想だな」\n" +
            "ろい「支配より設計の方が効率的ニダ」\n" +
            "えんや「冷たいなぁ」",
        text: "言い争いはやめてください。",
        kana: "いいあらそいはやめてください。",
        romaji: "ii arasoi wa yamete kudasai",
        reaction_good:
            "えんや「ま、議論ってことで！」\n" +
            "ろい「未解決のまま保留ニダ」",
        reaction_bad:
            "ろい「その注意、抽象的すぎニダ」\n" +
            "えんや「言葉、足りなくね？」",
        images: ["roi.png", "enya.png"]
    },
    { 
        id: "chat_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆はるか",
        start_msg:
            "ゆうき「今日の運勢はね〜、赤い物持つと吉！」\n" +
            "はるか「えっ、ほんと？」\n" +
            "ゆうき「信じるか信じないかは〜君次第！」\n" +
            "はるか「それ昨日も聞いた気がする…？」\n" +
            "ゆうき「細かいことは気にしない派でしょ？」",
        text: "授業中に占いをしないでください。",
        kana: "じゅぎょうちゅうにうらないをしないでください。",
        romaji: "jugyou chuu ni uranai o shinaide kudasai",
        reaction_good:
            "ゆうき「はーい、放課後ね！」\n" +
            "はるか「楽しみにしてる〜！」",
        reaction_bad:
            "ゆうき「今の言い方、曖昧だよ？」\n" +
            "はるか「もう少し具体的に注意しよ？」",
        images: ["yuuki.png", "haruka.png"]
    },
    { 
        id: "chat_maaya_sayaka",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆さやか",
        start_msg:
            "まあや「この紅茶、香りがええんよ」\n" +
            "さやか「……ええ香りどすなぁ」\n" +
            "まあや「辛いお菓子もあるけん、食べる？」\n" +
            "さやか「い、いえ…お気遣いだけで…」\n" +
            "（沈黙）",
        text: "会話を続けてください。",
        kana: "かいわをつづけてください。",
        romaji: "kaiwa o tsuzukete kudasai",
        reaction_good:
            "まあや「無理せんでええよ」\n" +
            "さやか「……優しおす」",
        reaction_bad:
            "さやか「今の注意、怖いどす」\n" +
            "まあや「言い方、きついんよ」",
        images: ["maaya.png", "sayaka.png"]
    },
    { 
        id: "chat_akatsuki_piano",
        subtype: "chat",
        group: "1-4",
        sender: "あかつき",
        start_msg:
            "あかつき「……兄貴は、もっと上手く弾く」\n" +
            "あかつき「オレの音、薄いんだよ」\n" +
            "あかつき「才能ないなら、やめりゃいいのに」",
        text: "手を止めてください。",
        kana: "てをとめてください。",
        romaji: "te o tomete kudasai",
        reaction_good:
            "あかつき「……悪い」",
        reaction_bad:
            "あかつき「今の注意、浅い」\n" +
            "あかつき「理由になってない」",
        images: ["akatsuki.png"]
    },
    { 
        id: "chat_maaya_maya",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆まや",
        start_msg:
            "まや「これ、捨てられんの」\n" +
            "まあや「思い出あるん？」\n" +
            "まや「ある。全部」\n" +
            "まあや「……大事にしたらええ」",
        text: "物の整理をしてください。",
        kana: "もののせいりをしてください。",
        romaji: "mono no seiri o shite kudasai",
        reaction_good:
            "まや「……うん」\n" +
            "まあや「ゆっくりでええよ」",
        reaction_bad:
            "まや「今の言い方、無理」\n" +
            "まあや「急かさんで」",
        images: ["maaya.png", "maya.png"]
    },
    { 
        id: "chat_yukihiko_dan",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆かじ",
        start_msg:
            "ゆきひこ「わち、ゆきひこ団復活させる！」\n" +
            "かじ「団員一人じゃね？」\n" +
            "ゆきひこ「心は満員！」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "かじ「まぁ、嫌いじゃない」\n" +
            "ゆきひこ「団員ゲット！」",
        reaction_bad:
            "ゆきひこ「注意、雑！」\n" +
            "かじ「もっと具体的に！」",
        images: ["yukihiko.png", "kaji.png"]
    },
    { 
        id: "chat_yoru_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆たいち",
        start_msg:
            "たいち「また遅刻…」\n" +
            "よる「夜が悪い」\n" +
            "たいち「生活リズム…」\n" +
            "よる「無理」",
        text: "時間を守りましょう。",
        kana: "じかんをまもりましょう。",
        romaji: "jikan o mamorimashou",
        reaction_good:
            "よる「努力はする」\n" +
            "たいち「それでいい」",
        reaction_bad:
            "たいち「曖昧すぎ」\n" +
            "よる「眠い」",
        images: ["yoru.png", "taichi.png"]
    },
    { 
        id: "chat_uruu_pronoun",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆はるか",
        start_msg:
            "はるか「それ、お願いできる？」\n" +
            "うるう「……それって、どれ？」\n" +
            "はるか「え、あ、机のやつ！」\n" +
            "うるう「役に立つならやる」\n" +
            "はるか「役に立つよ！ありがとう！」",
        text: "指示は具体的にしてください。",
        kana: "しじはぐたいてきにしてください。",
        romaji: "shiji wa gutaiteki ni shite kudasai",
        reaction_good:
            "うるう「それなら分かる」\n" +
            "はるか「ごめんね、気をつける！」",
        reaction_bad:
            "うるう「今の注意も曖昧」\n" +
            "はるか「それ言われると困る…」",
        images: ["uruu.png", "haruka.png"]
    },
    { 
        id: "chat_uruu_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆たいち",
        start_msg:
            "たいち「無理しなくていいよ」\n" +
            "うるう「……それ、役に立たんって意味？」\n" +
            "たいち「違う！休んでいいって！」\n" +
            "うるう「役に立つなら動く」",
        text: "落ち着いて話してください。",
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "たいち「ありがとう…気持ちは分かった」\n" +
            "うるう「ならいい」",
        reaction_bad:
            "うるう「その言い方、曖昧」\n" +
            "たいち「ご、ごめん…」",
        images: ["uruu.png", "taichi.png"]
    },
    { 
        id: "chat_roi_alice_observe",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ありす「……今、何考えてる？」\n" +
            "ろい「君の質問の意図を観測中ニダ」\n" +
            "ありす「へぇ」\n" +
            "ろい「退屈そうニダ」\n" +
            "ありす「壊してくれる？」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ろい「後でニダ」\n" +
            "ありす「楽しみ」",
        reaction_bad:
            "ありす「今の注意、退屈」\n" +
            "ろい「刺激不足ニダ」",
        images: ["roi.png", "alice.png"]
    },
    { 
        id: "chat_kids_chaos",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "ゆきひこ「叩いて被ってじゃんけんぽん！」\n" +
            "あやと「オラ勝った！」\n" +
            "かじ「帽子ねぇけど！？」\n" +
            "ゆきひこ「心で被る！」",
        text: "何をしているんですか。",
        kana: "なにをしているんですか。",
        romaji: "nani o shiteirundesuka",
        reaction_good:
            "あやと「遊び！」\n" +
            "かじ「教育的！」",
        reaction_bad:
            "ゆきひこ「説明不足！」\n" +
            "かじ「主語どこ？」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    { 
        id: "chat_yoru_sui",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆すい",
        start_msg:
            "すい「お前また寝てたろ」\n" +
            "よる「夜行性」\n" +
            "すい「言い訳だろ」\n" +
            "よる「本能」",
        text: "授業態度を改めなさい。",
        kana: "じゅぎょうたいどをあらためなさい。",
        romaji: "jugyou taido o aratamena sai",
        reaction_good:
            "すい「はいはい」\n" +
            "よる「努力はする」",
        reaction_bad:
            "すい「雑すぎ」\n" +
            "よる「眠い」",
        images: ["yoru.png", "sui.png"]
    },
    {
        id: "chat_mikoto_sada_revised",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆さだま",
        start_msg:
            "みこと「危ない要素は切った方が早いやろ？」\n" +
            "さだま「いや、把握しておく」\n" +
            "みこと「甘ない？」\n" +
            "さだま「想定内なら問題ない」",
        text: "物騒な話はやめてください。",
        kana: "ぶっそうなはなしはやめてください。",
        romaji: "bussona hanashi wa yamete kudasai",
        reaction_good:
            "みこと「まぁ…考え方の違いやな」\n" +
            "さだま「そういうこと」",
        reaction_bad:
            "さだま「前提が雑です」\n" +
            "みこと「判断材料足りてへんで」",
        images: ["mikoto.png", "sadama.png"]
    },
    {
        id: "chat_sadama_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "さだま＆たいち",
        start_msg:
            "たいち「これ、規則的に問題ありませんか…？」\n" +
            "さだま「問題はない」\n" +
            "たいち「でも…失敗したら」\n" +
            "さだま「失敗前提で考えてる」",
        text: "相談は簡潔にお願いします。",
        kana: "そうだんはかんけつにおねがいします。",
        romaji: "soudan wa kanketsu ni onegai shimasu",
        reaction_good:
            "たいち「安心しました」\n" +
            "さだま「それでいい」",
        reaction_bad:
            "さだま「主語が抜けてます」\n" +
            "たいち「質問の意図が…」",
        images: ["sadama.png", "taichi.png"]
    },
    {
        id: "chat_enya_sadama",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆さだま",
        start_msg:
            "えんや「オレは誰にも縛られねぇ」\n" +
            "さだま「縛る気はない」\n" +
            "えんや「なら何だ」\n" +
            "さだま「壊れないように見てるだけ」",
        text: "穏やかに話してください。",
        kana: "おだやかにはなしてください。",
        romaji: "odayaka ni hanashite kudasai",
        reaction_good:
            "えんや「……チッ」\n" +
            "さだま「必要なら止める」",
        reaction_bad:
            "さだま「感情論です」\n" +
            "えんや「上からだな」",
        images: ["enya.png", "sadama.png"]
    },
    {
        id: "chat_alice_sadama",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆さだま",
        start_msg:
            "ありす「さだまって、全部把握してるよね」\n" +
            "さだま「必要な範囲だけ」\n" +
            "ありす「把握してても手出さない」\n" +
            "さだま「選択は本人に任せる」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ありす「合理的」\n" +
            "さだま「当然」",
        reaction_bad:
            "ありす「抽象的すぎ」\n" +
            "さだま「説明不足です」",
        images: ["alice.png", "sadama.png"]
    },
    { 
        id: "chat_ayato_natto",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆すい",
        start_msg:
            "あやと「オラ暇だっぺ！！」\n" +
            "すい「静かにしろって」\n" +
            "あやと「納豆投げると楽しいぞ？」\n" +
            "すい「やめろ……って投げてんじゃねぇ！！」",
        text: "授業中に物を投げるのはやめてください。",
        kana: "じゅぎょうちゅうにものをなげるのはやめてください。",
        romaji: "jugyou chuu ni mono o nageru no wa yamete kudasai",
        reaction_good:
            "あやと「はーい……」\n" +
            "すい「ったく」",
        reaction_bad:
            "すい「先生、今の言い方雑じゃね？」\n" +
            "あやと「注意もネバネバしてんな！」",
        images: ["ayato.png", "sui.png"]
    },
    { 
        id: "chat_uruu_haruka",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆はるか",
        start_msg:
            "はるか「それ、お願いしていい？」\n" +
            "うるう「……それって、どれ？」\n" +
            "はるか「あ、ごめん！この箱！」\n" +
            "うるう「役に立つならやる」",
        text: "落ち着いて作業を続けてください。",
        kana: "おちついてさぎょうをつづけてください。",
        romaji: "ochitsuite sagyou o tsuzukete kudasai",
        reaction_good:
            "うるう「了解」\n" +
            "はるか「ありがとう！」",
        reaction_bad:
            "うるう「今の指示も曖昧」\n" +
            "はるか「えっ、そこ！？」",
        images: ["uruu.png", "haruka.png"]
    },
    { 
        id: "chat_alice_roi",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「……退屈」\n" +
            "ろい「刺激不足ニダ？」\n" +
            "ありす「壊して」\n" +
            "ろい「後で設計するニダ」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ろい「了解ニダ」\n" +
            "ありす「ふーん」",
        reaction_bad:
            "ありす「その注意、退屈」\n" +
            "ろい「刺激が足りないニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_ayato_focus",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆たいち",
        start_msg:
            "たいち「ここ、次はまとめだから」\n" +
            "あやと「お、窓の外トラック走ってっぞ」\n" +
            "たいち「今それ関係ないだろ」\n" +
            "あやと「でも赤だぞ！？珍しくね？」",
        text: "今は授業に集中してください。",
        kana: "いまはじゅぎょうにしゅうちゅうしてください。",
        romaji: "ima wa jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "あやと「はーい……あ、ノートどこだ？」\n" +
            "たいち「もう一回最初からな」",
        reaction_bad:
            "たいち「先生、今の言い方雑です」\n" +
            "あやと「集中ってどれだっけ？」",
        images: ["ayato.png", "taichi.png"]
    },
    {
        id: "chat_ayato_impulse",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆すい",
        start_msg:
            "すい「お前、座れ」\n" +
            "あやと「今ひらめいた！」\n" +
            "すい「嫌な予感しかしねぇ」\n" +
            "あやと「机でドリフトできそう！」",
        text: "危ない行動はやめてください。",
        kana: "あぶないこうどうはやめてください。",
        romaji: "abunai koudou wa yamete kudasai",
        reaction_good:
            "あやと「ちぇー」\n" +
            "すい「命拾いしたな」",
        reaction_bad:
            "すい「注意の内容ズレてね？」\n" +
            "あやと「危なくない案もあるぞ？」",
        images: ["ayato.png", "sui.png"]
    },
    {
        id: "chat_maaya_cover",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆あやと",
        start_msg:
            "あやと「オラ悪気はねぇんだ」\n" +
            "まあや「分かっとるよ。でも周りが困るけんね」\n" +
            "あやと「じゃあ次は何すりゃいい？」\n" +
            "まあや「今は座って聞こ？」",
        text: "周囲に配慮して行動してください。",
        kana: "しゅういにはいりょしてこうどうしてください。",
        romaji: "shuui ni hairyo shite koudou shite kudasai",
        reaction_good:
            "まあや「ありがとうございます」\n" +
            "あやと「お嬢優しいな！」",
        reaction_bad:
            "まあや「先生、その注意きつすぎやけん」\n" +
            "あやと「オラより目立ってるぞ？」",
        images: ["maaya.png", "ayato.png"]
    },
    {
        id: "chat_ayato_alice",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆ありす",
        start_msg:
            "ありす「……退屈」\n" +
            "あやと「じゃあ納豆投げるか？」\n" +
            "ありす「刺激としては弱い」\n" +
            "あやと「え、じゃあ椅子倒す？」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ありす「……まあいい」\n" +
            "あやと「勝った！」",
        reaction_bad:
            "ありす「その注意、退屈」\n" +
            "あやと「先生も刺激足りてねぇな」",
        images: ["ayato.png", "alice.png"]
    },
    {
        id: "chat_alice_roi_midnight",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「……起きてる？」\n" +
            "ろい「起きてるニダ。寝る理由がない」\n" +
            "ありす「現実、退屈すぎて」\n" +
            "ろい「退屈は敵ニダ。壊す対象が必要」\n" +
            "ありす「……君は壊れる側？」\n" +
            "ろい「試す側ニダ」",
        text: "もう消灯時間です。",
        kana: "もうしょうとうじかんです。",
        romaji: "mou shoutou jikan desu",
        reaction_good:
            "ろい「了解ニダ」\n" +
            "ありす「……またね」",
        reaction_bad:
            "ありす「注意のタイミング遅い」\n" +
            "ろい「観測精度が低いニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_alice_yoru",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆よる",
        start_msg:
            "よる「まだ起きとると？」\n" +
            "ありす「夢の方が静かだから」\n" +
            "よる「わかる。夜は誰も触ってこん」\n" +
            "ありす「……それ、楽」",
        text: "早く寝なさい。",
        kana: "はやくねなさい。",
        romaji: "hayaku nenasai",
        reaction_good:
            "よる「はーい」\n" +
            "ありす「おやすみ」",
        reaction_bad:
            "ありす「命令形、嫌い」\n" +
            "よる「今の言い方、朝みたいで嫌」",
        images: ["alice.png", "yoru.png"]
    },
    {
        id: "chat_maaya_akatsuki",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆あかつき",
        start_msg:
            "まあや「その曲、前より柔らかくなっとるね」\n" +
            "あかつき「……気のせいだ」\n" +
            "まあや「でも、優しい音や」\n" +
            "あかつき「……褒めても何も出ねぇ」",
        text: "私語は控えてください。",
        kana: "しごはひかえてください。",
        romaji: "shigo wa hikaete kudasai",
        reaction_good:
            "まあや「すみません」\n" +
            "あかつき「……悪い」",
        reaction_bad:
            "あかつき「注意が雑だ」\n" +
            "まあや「言葉、もう少し柔らかくてもええよ？」",
        images: ["maaya.png", "akatsuki.png"]
    },
    {
        id: "chat_yukihiko_gang",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "ゆきひこ「わち、今から団長な！」\n" +
            "あやと「オラ副団長！」\n" +
            "かじ「じゃあオレ、ねこたくん」\n" +
            "ゆきひこ「役職ふえた！」",
        text: "何をしているんですか。",
        kana: "なにをしているんですか。",
        romaji: "nani o shite irun desu ka",
        reaction_good:
            "ゆきひこ「活動停止！」\n" +
            "あやと「解散だー！」\n" +
            "かじ「またやろーな！」",
        reaction_bad:
            "かじ「説明足りなくね？」\n" +
            "あやと「オラたち楽しそうなのに？」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
        id: "chat_enya_mikoto",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆みこと",
        start_msg:
            "えんや「オレがいれば世界救える」\n" +
            "みこと「ほう。具体的な手段は？」\n" +
            "えんや「……気合？」\n" +
            "みこと「気合で世界は救えへん」",
        text: "静かに議論してください。",
        kana: "しずかにぎろんしてください。",
        romaji: "shizuka ni giron shite kudasai",
        reaction_good:
            "えんや「チッ」\n" +
            "みこと「続きは後でな」",
        reaction_bad:
            "みこと「議論の定義、分かっとる？」\n" +
            "えんや「先生、抽象的すぎ」",
        images: ["enya.png", "mikoto.png"]
    },
    { 
        id: "chat_uruu_trigger",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆はるか",
        start_msg:
            "はるか「うるう、これお願いしてもいい？」\n" +
            "うるう「……これって、役に立つと？」\n" +
            "はるか「え？ もちろんだよ！」\n" +
            "うるう「……“それ”が何か、はっきり言って」",
        text: "それ、お願い。",
        kana: "それ、おねがい。",
        romaji: "sore, onegai",
        reaction_good:
            "はるか「あ、ごめん！ この書類まとめるのお願い！」\n" +
            "うるう「……なら、やる」",
        images:
            "うるう「“それ”って何ね。試されとる感じする」\n" +
            "はるか「ご、ごめんってば！」",
        images: ["uruu.png", "haruka.png"]
    },
    { 
        id: "chat_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆すい",
        start_msg:
            "ゆうき「今日の運勢見る？」\n" +
            "すい「当たんのかよ」\n" +
            "ゆうき「多分！」\n" +
            "すい「不安になる言い方すんな」",
        text: "占って。",
        kana: "うらなって。",
        romaji: "uranatte",
        reaction_good:
            "ゆうき「今日は走ると転ぶ！」\n" +
            "すい「……もう走ってきたんだが」",
        images:
            "すい「今の結果に後付けすんな」\n" +
            "ゆうき「え、そう見えたんだけどな〜」",
        images: ["yuuki.png", "sui.png"]
    },
    { 
        id: "chat_sayaka_alice",
        subtype: "chat",
        group: "1-4",
        sender: "さやか＆ありす",
        start_msg:
            "さやか「……ありすちゃん、寝てはる？」\n" +
            "ありす「起きてる。夢見てただけ」\n" +
            "さやか「それ、起きてる言うんやろか」\n" +
            "ありす「境界は曖昧」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "さやか「……はい」\n" +
            "ありす「静けさは嫌いじゃない」",
        images:
            "ありす「その命令、意味ある？」\n" +
            "さやか「……すみません」",
        images: ["sayaka.png", "alice.png"]
    },
    { 
        id: "chat_yuuki_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆たいち",
        start_msg:
            "ゆうき「占い的に今日は慎重が吉！」\n" +
            "たいち「……元から慎重です」\n" +
            "ゆうき「そっか！ じゃあ完璧だね！」\n" +
            "たいち「プレッシャーです」",
        text: "仲良くしなさい。",
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "たいち「……努力します」\n" +
            "ゆうき「無理しないのも運だよ！」",
        images:
            "たいち「急にまとめないでください」\n" +
            "ゆうき「あ、ごめん！」",
        images: ["yuuki.png", "taichi.png"]
    },
    { 
        id: "chat_kaji_uruu_work",
        subtype: "chat",
        group: "1-4",
        sender: "かじ＆うるう",
        start_msg:
            "かじ「見て！ 水兵部用の謎マシン作った！」\n" +
            "うるう「……何に使うと？」\n" +
            "かじ「役に立つかは、これから考える！」\n" +
            "うるう「……役に立たんのは困る」",
        text: "それ、何？", 
        kana: "それ、なに？",
        romaji: "sore, nani?",
        reaction_good:
            "かじ「部品整理機！ 多分！」\n" +
            "うるう「……なら、水兵部で使えるかもしれん」",
        images:
            "うるう「“それ”って言い方、分かりにくか」\n" +
            "かじ「え、そこ！？」",
        images: ["kaji.png", "uruu.png"]
    },
    { 
        id: "chat_maaya_uruu",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆うるう",
        start_msg:
            "まあや「うるうさん、水兵部のお仕事大変そうやねぇ」\n" +
            "うるう「慣れとるけん」\n" +
            "まあや「役に立っとる証拠やと思うよ」\n" +
            "うるう「……そう言われると、悪うない」",
        text: "頑張ってるね。",
        kana: "がんばってるね。",
        romaji: "ganbatteru ne",
        reaction_good:
            "まあや「無理せんでええんよ？」\n" +
            "うるう「……気ぃ遣われるの、嫌いじゃなか」",
        images:
            "うるう「急に評価されると戸惑う」\n" +
            "まあや「あら、ごめんなさい」",
        images: ["maaya.png", "uruu.png"]
    },
    { 
        id: "chat_yukihiko_sui",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆すい",
        start_msg:
            "ゆきひこ「わち！ 廊下で新技思いついた！」\n" +
            "すい「走るなって言われてんだろ」\n" +
            "ゆきひこ「止まれん！」\n" +
            "すい「……転ぶぞ」",
        text: "廊下は走らない。",
        kana: "ろうかははしらない。",
        romaji: "rouka wa hashiranai",
        reaction_good:
            "すい「ほら見ろ」\n" +
            "ゆきひこ「わちーー！！」",
        images:
            "すい「注意の仕方が遅ぇ」\n" +
            "ゆきひこ「結果論！」",
        images: ["yukihiko.png", "sui.png"]
    },
    { 
        id: "chat_yoru_alice",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆ありす",
        start_msg:
            "よる「眠か……昼は向いとらん」\n" +
            "ありす「昼も夜も、等しく退屈」\n" +
            "よる「それはそれで重か」\n" +
            "ありす「事実」",
        text: "起きなさい。",
        kana: "おきなさい。",
        romaji: "okinasa i",
        reaction_good:
            "ありす「……必要なら」\n" +
            "よる「無理せんでよか」",
        images:
            "ありす「命令に意味を感じない」\n" +
            "よる「わかる」",
        images: ["yoru.png", "alice.png"]
    },
    { 
        id: "chat_enya_shunki",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆しゅんき",
        start_msg:
            "えんや「世界を救えるのはオレだけだ」\n" +
            "しゅんき「それ、疲れない？」\n" +
            "えんや「使命だからな」\n" +
            "しゅんき「へぇ……」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "しゅんき「はーい」\n" +
            "えんや「今は黙る」",
        images:
            "えんや「止め方が雑」\n" +
            "しゅんき「ノリ悪」",
        images: ["enya.png", "shunki.png"]
    },
    { 
        id: "chat_yukihiko_yuuki_01",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆ゆうき",
        start_msg:
            "ゆきひこ「わちさぁ〜！今日の数学プリントどっか消えたんだけど！？」\n" +
            "ゆうき「また？猫でも占ってみる？」\n" +
            "ゆきひこ「占いでプリント出てくるなら頼むわち！」\n" +
            "ゆうき「じゃあ結果は……机の中に入れっぱなしだね」\n" +
            "ゆきひこ「うわ！？ほんとにあった！すげぇ〜！」",
        text: "落ち着いて確認しなさい。", 
        kana: "おちついてかくにんしなさい。",
        romaji: "ochitsuite kakunin shinasai",
        reaction_good:
            "ゆきひこ「わち、次から3秒は探す！」\n" +
            "ゆうき「成長したね〜」",
        reaction_bad:
            "ゆうき「先生、今の文ちょっと読みにくいかも」\n" +
            "ゆきひこ「わちでも分かる書き方でお願い！」",
        images: ["yukihiko.png", "yuuki.png"]
    },
    {
        id: "chat_maaya_uruu_01",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆うるう",
        start_msg:
            "まあや「この教室、少し空気が重たい気がせん？」\n" +
            "うるう「そうねぇ。窓開けたら風通ると思うばい」\n" +
            "まあや「さすがやね。細かいとこ、よう気づくわ」\n" +
            "うるう「役に立つなら、するだけたい」",
        text: "換気をお願いします。", 
        kana: "かんきをおねがいします。",
        romaji: "kanki o onegaishimasu",
        reaction_good:
            "まあや「ありがとう、気持ちええね」\n" +
            "うるう「ん。これで作業しやすか」",
        reaction_bad:
            "うるう「先生、その言い方やと指示が曖昧たい」\n" +
            "まあや「もう少し丁寧に言うてほしいな」",
        images: ["maaya.png", "uruu.png"]
    },
    {
        id: "chat_sui_haruka_01",
        subtype: "chat",
        group: "1-4",
        sender: "すい＆はるか",
        start_msg:
            "すい「おい、廊下走ったら怒られたんだけど」\n" +
            "はるか「そりゃ走ったらダメだよ〜！」\n" +
            "すい「うるせぇな。遅刻すんだろ」\n" +
            "はるか「じゃあ一緒に早く来ればいいじゃん！」",
        text: "校内は走らないでください。", 
        kana: "こうないははしらないでください。",
        romaji: "kounai wa hashiranaide kudasai",
        reaction_good:
            "すい「……はいはい」\n" +
            "はるか「えらいえらい！」",
        reaction_bad:
            "すい「先生、今の注意雑すぎ」\n" +
            "はるか「伝わらないと意味ないよ〜？」",
        images: ["sui.png", "haruka.png"]
    },
    {
        id: "chat_roi_alice_01",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ろい「この課題、無駄な工程多すぎニダ」\n" +
            "ありす「だね。効率より形式重視」\n" +
            "ろい「退屈を強制する設計は嫌いニダ」\n" +
            "ありす「でも、壊す価値はある」",
        text: "静かに作業を続けなさい。", 
        kana: "しずかにさぎょうをつづけなさい。",
        romaji: "shizuka ni sagyou o tsudzukenasai",
        reaction_good:
            "ろい「了解ニダ」\n" +
            "ありす「……続けよ」",
        reaction_bad:
            "ありす「今の文、論理が崩れてる」\n" +
            "ろい「入力ミス多いニダ」",
        images: ["roi.png", "alice.png"]
    },
    {
        id: "chat_ayato_kaji_01",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆かじ",
        start_msg:
            "あやと「オラ退屈すぎて椅子から落ちた！」\n" +
            "かじ「じゃあ新聞に絵描こ！」\n" +
            "あやと「納豆投げる？」\n" +
            "かじ「それ怒られるやつ！」",
        text: "授業中は静かにしなさい。", 
        kana: "じゅぎょうちゅうはしずかにしなさい。",
        romaji: "jugyouchuu wa shizuka ni shinasai",
        reaction_good:
            "あやと「はーい……」\n" +
            "かじ「あとで続きな！」",
        reaction_bad:
            "かじ「先生、文変じゃない？」\n" +
            "あやと「オラでも分かる書き方にして！」",
        images: ["ayato.png", "kaji.png"]
    },
    {
        id: "chat_yukihiko_ayato_kaji_01",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "ゆきひこ「わち思ったんだけどさ！机で要塞作れんじゃね！？」\n" +
            "あやと「オラ納豆でトラップ仕掛ける！」\n" +
            "かじ「新聞紙で旗作ろうぜ！ねこたくん基地！」\n" +
            "ゆきひこ「ゆきひこ団、ここに爆誕！！」",
        text: "授業の準備をしなさい。", 
        kana: "じゅぎょうのじゅんびをしなさい。",
        romaji: "jugyou no junbi o shinasai",
        reaction_good:
            "かじ「あとで続きな！」\n" +
            "あやと「オラ今は座る！」\n" +
            "ゆきひこ「わち、鉛筆持つ！」",
        reaction_bad:
            "あやと「先生、文ちょっと変だぞ？」\n" +
            "かじ「誤字ってない？」\n" +
            "ゆきひこ「わちでも気づいた！」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
        id: "chat_sui_haruka_taichi_01",
        subtype: "chat",
        group: "1-4",
        sender: "すい＆はるか＆たいち",
        start_msg:
            "すい「なぁ、宿題出さなくても死なねぇよな？」\n" +
            "たいち「出さないと評価が下がるよ……」\n" +
            "はるか「ね！みんなでやればすぐ終わるよ！」\n" +
            "すい「チッ……じゃあ写させろ」",
        text: "自分で取り組みなさい。", 
        kana: "じぶんでとりくみなさい。",
        romaji: "jibun de torikumi nasai",
        reaction_good:
            "たいち「……頑張ろ」\n" +
            "はるか「えらいよ！」\n" +
            "すい「しゃーねぇな」",
        reaction_bad:
            "すい「先生、今の注意わかりづら」\n" +
            "たいち「言葉、少し足りないかも」",
        images: ["sui.png", "haruka.png", "taichi.png"]
    },
    {
        id: "chat_roi_alice_mikoto_01",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす＆みこと",
        start_msg:
            "ろい「この配置、死角が多すぎニダ」\n" +
            "ありす「構造的に甘い」\n" +
            "みこと「ほな、奇襲されても対処できる陣に変えよか」\n" +
            "ろい「合理的ニダ」",
        text: "物騒な話は控えなさい。", 
        kana: "ぶっそうなはなしはひかえなさい。",
        romaji: "bussou na hanashi wa hikae nasai",
        reaction_good:
            "みこと「はいはい、了解や」\n" +
            "ありす「……戻る」\n" +
            "ろい「了解ニダ」",
        reaction_bad:
            "ありす「今の文、主語抜けてる」\n" +
            "ろい「タイプミス多いニダ」",
        images: ["roi.png", "alice.png", "mikoto.png"]
    },
    {
        id: "chat_yuuki_yoru_01",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆よる",
        start_msg:
            "よる「昨日も寝れんやった……」\n" +
            "ゆうき「星の配置的に夜型だね〜」\n" +
            "よる「やっぱそう？」\n" +
            "ゆうき「たぶんだけど」",
        text: "授業中は起きていなさい。", 
        kana: "じゅぎょうちゅうはおきていなさい。",
        romaji: "jugyouchuu wa okite inasai",
        reaction_good:
            "よる「……努力はする」\n" +
            "ゆうき「無理しないでね〜」",
        reaction_bad:
            "ゆうき「先生、今の文章変じゃない？」\n" +
            "よる「ちょっと読みにくか」",
        images: ["yuuki.png", "yoru.png"]
    },
    {
        id: "chat_enya_akatsuki_01",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆あかつき",
        start_msg:
            "えんや「オレが本気出したら世界救えるんだけどな」\n" +
            "あかつき「はいはい」\n" +
            "えんや「信じてないだろ？」\n" +
            "あかつき「興味ないだけ」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "えんや「チッ」\n" +
            "あかつき「……」",
        reaction_bad:
            "あかつき「誤字」\n" +
            "えんや「先生、そこ間違ってる」",
        images: ["enya.png", "akatsuki.png"]
    },
    {
        id: "chat_maaya_sayaka_maya_01",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆さやか＆まや",
        start_msg:
            "まあや「この前のお出かけ、写真見返してしもて」\n" +
            "さやか「思い出って、あったかいえ」\n" +
            "まや「……捨てられないよね」",
        text: "作業を進めましょう。", 
        kana: "さぎょうをすすめましょう。",
        romaji: "sagyou o susumemashou",
        reaction_good:
            "まあや「せやね」\n" +
            "さやか「がんばるえ」\n" +
            "まや「……うん」",
        reaction_bad:
            "さやか「今の言い方、ちょっと不自然やわ」\n" +
            "まあや「誤字あるみたいやね」",
        images: ["maaya.png", "sayaka.png", "maya.png"]
    },
    {
        id: "chat_uruu_taichi_01",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆たいち",
        start_msg:
            "たいち「ここ、こうで合ってるかな……？」\n" +
            "うるう「……どこ？」\n" +
            "たいち「この手順」\n" +
            "うるう「それ、曖昧。番号で言って」\n" +
            "たいち「あ、ごめん！」",
        text: "協力して進めてください。", 
        kana: "きょうりょくしてすすめてください。",
        romaji: "kyouryoku shite susumete kudasai",
        reaction_good:
            "たいち「ありがとう……！」\n" +
            "うるう「別に」",
        reaction_bad:
            "うるう「先生、指示それだと分からん」\n" +
            "たいち「主語抜けてます……」",
        images: ["uruu.png", "taichi.png"]
    },
    {
        id: "chat_uruu_kaji_01",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆かじ",
        start_msg:
            "かじ「これさ！こうしたら面白くね？」\n" +
            "うるう「……意味ある？」\n" +
            "かじ「ない！」\n" +
            "うるう「じゃあ後回し」",
        text: "無駄な行動は控えましょう。", 
        kana: "むだなこうどうはひかえましょう。",
        romaji: "mudana koudou wa hikaemashou",
        reaction_good:
            "かじ「はいはい〜」\n" +
            "うるう「今やること先」",
        reaction_bad:
            "かじ「先生、誤字ってる！」\n" +
            "うるう「そこ直して」",
        images: ["uruu.png", "kaji.png"]
    },
    {
        id: "chat_yukihiko_ayato_01",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと",
        start_msg:
            "ゆきひこ「わち、新しい団考えた！」\n" +
            "あやと「団？なにそれ、食えんのか？」\n" +
            "ゆきひこ「ゆきひこ団！世界征服する！」\n" +
            "あやと「オラも入る！納豆係な！」",
        text: "授業中は静かにしなさい。", 
        kana: "じゅぎょうちゅうはしずかにしなさい。",
        romaji: "jugyouchuu wa shizuka ni shinasai",
        reaction_good:
            "ゆきひこ「はーい……」\n" +
            "あやと「ちぇー」",
        reaction_bad:
            "あやと「先生、今しゃべってねぇ」\n" +
            "ゆきひこ「団の話は授業じゃないもん！」",
        images: ["yukihiko.png", "ayato.png"]
    },
    {
        id: "chat_uruu_taichi_02",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆たいち",
        start_msg:
            "たいち「これ、ここでいいかな……」\n" +
            "うるう「“ここ”ってどこね」\n" +
            "たいち「えっと……この辺」\n" +
            "うるう「その言い方、一番困る」",
        text: "協力して作業してください。", 
        kana: "きょうりょくしてさぎょうしてください。",
        romaji: "kyouryoku shite sagyou shite kudasai",
        reaction_good:
            "たいち「ごめん、番号で言うね」\n" +
            "うるう「それなら分かる」",
        reaction_bad:
            "うるう「先生も“それ”多すぎ」\n" +
            "たいち「主語ください……」",
        images: ["uruu.png", "taichi.png"]
    },
    {
        id: "chat_sui_enya_01",
        subtype: "chat",
        group: "1-4",
        sender: "すい＆えんや",
        start_msg:
            "すい「どけ、走る」\n" +
            "えんや「フッ……風を感じろ、俺の背中を」\n" +
            "すい「うるせぇ」",
        text: "廊下を走らないでください。", 
        kana: "ろうかをはしらないでください。",
        romaji: "rouka wo hashiranaide kudasai",
        reaction_good:
            "すい「チッ……」\n" +
            "えんや「忠告感謝するぜ、先生」",
        reaction_bad:
            "すい「今の言い方、遅い」\n" +
            "えんや「注意するなら先読みだろ？」",
        images: ["sui.png", "enya.png"]
    },
    {
        id: "chat_maaya_haruka_01",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆はるか",
        start_msg:
            "まあや「この前の旅行、ほんま素敵やったんよ」\n" +
            "はるか「いいな〜！今度一緒に行こ！」\n" +
            "まあや「ふふ、楽しみやね」",
        text: "おしゃべりは休み時間にしましょう。", 
        kana: "おしゃべりはやすみじかんにしましょう。",
        romaji: "oshaberi wa yasumi jikan ni shimashou",
        reaction_good:
            "はるか「はーい！」\n" +
            "まあや「失礼しました」",
        reaction_bad:
            "まあや「先生、今は静かでしたよ？」\n" +
            "はるか「タイミング惜しい〜！」",
        images: ["maaya.png", "haruka.png"]
    },
    {
        id: "chat_alice_roi_02",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「この配置が最適解ニダ」\n" +
            "ありす「“最適”の条件、何？」\n" +
            "ろい「成功率と時間効率」\n" +
            "ありす「じゃあ失敗時のコストは？」",
        text: "静かに話し合いなさい。", 
        kana: "しずかにはなしあいなさい。",
        romaji: "shizuka ni hanashiai nasai",
        reaction_good:
            "ろい「……続けるニダ」\n" +
            "ありす「今の定義なら、まぁ許容」",
        reaction_bad:
            "ありす「先生、その“合理的”って言葉、雑」\n" +
            "ろい「前提を省くなニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_yuuki_taichi_01",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆たいち",
        start_msg:
            "ゆうき「たいちくん、今日の運勢みる？」\n" +
            "たいち「え、いいの？時間取らせない？」\n" +
            "ゆうき「全然！むしろ楽しいし」\n" +
            "たいち「……じゃあ、手短で……」",
        text: "私語は控えてください。", 
        kana: "しごはひかえてください。",
        romaji: "shigo wa hikaete kudasai",
        reaction_good:
            "たいち「ごめんなさい……」\n" +
            "ゆうき「はーい、あとでね！」",
        reaction_bad:
            "たいち「今、声量かなり抑えてました」\n" +
            "ゆうき「注意するなら占い終わってからが吉！」",
        images: ["yuuki.png", "taichi.png"]
    },
    {
        id: "chat_uruu_maaya_01",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆まあや",
        start_msg:
            "まあや「それ、そこに置いといてくれる？」\n" +
            "うるう「……それって、どれね」\n" +
            "まあや「あ、ごめん。こっちの箱やわ」\n" +
            "うるう「最初からそう言ってほしか」",
        text: "協力して作業しましょう。", 
        kana: "きょうりょくしてさぎょうしましょう。",
        romaji: "kyouryoku shite sagyou shimashou",
        reaction_good:
            "まあや「言い方、気をつけるね」\n" +
            "うるう「それなら助かる」",
        reaction_bad:
            "うるう「先生も“それ”多か」\n" +
            "まあや「指示は具体的が一番ですわ」",
        images: ["uruu.png", "maaya.png"]
    },
    {
        id: "chat_roi_trio_01",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ゆきひこ＆あやと＆かじ",
        start_msg:
            "ゆきひこ「わち見た！ろいくん今スパイ顔！」\n" +
            "あやと「やっぱりな！秘密基地あるべ！」\n" +
            "かじ「盗聴器作ろ！今から！」\n" +
            "ろい「……違うニダ」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ろい「感謝するニダ……」\n" +
            "ゆきひこ「スパイ守られた！」",
        reaction_bad:
            "ろい「先生、事態を理解してないニダ」\n" +
            "かじ「今いいとこなのにー！」",
        images: ["roi.png", "yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
        id: "chat_haruka_sayaka_01",
        subtype: "chat",
        group: "1-4",
        sender: "はるか＆さやか",
        start_msg:
            "はるか「さやかちゃん、これどう思う？」\n" +
            "さやか「……えっと、素敵やと思います」\n" +
            "はるか「やった！ありがとう！」",
        text: "集中してください。", 
        kana: "しゅうちゅうしてください。",
        romaji: "shuuchuu shite kudasai",
        reaction_good:
            "さやか「すみません……」\n" +
            "はるか「あとでね！」",
        reaction_bad:
            "はるか「今ほぼ独り言だったよ？」\n" +
            "さやか「小声でしたけど……」",
        images: ["haruka.png", "sayaka.png"]
    },
    {
        id: "chat_alice_shunki_01",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆しゅんき",
        start_msg:
            "しゅんき「今日、だるくね？」\n" +
            "ありす「今日に限らず」\n" +
            "しゅんき「それな」\n" +
            "ありす「話が早くて助かる」",
        text: "寝ないでください。", 
        kana: "ねないでください。",
        romaji: "nenaide kudasai",
        reaction_good:
            "ありす「起きてます」\n" +
            "しゅんき「目はね」",
        reaction_bad:
            "ありす「観測方法が雑」\n" +
            "しゅんき「寝てる定義からいこ？」",
        images: ["alice.png", "shunki.png"]
    },
    {
        id: "chat_roi_alice_01",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ろい「……今日は起きているニダ」\n" +
            "ありす「その判断基準は？」\n" +
            "ろい「目が合った」\n" +
            "ありす「なるほど。起きてる定義が甘い」\n" +
            "ろい「否定はしないニダ」",
        text: "静かに作業してください。", 
        kana: "しずかにさぎょうしてください。",
        romaji: "shizuka ni sagyou shite kudasai",
        reaction_good:
            "ありす「今は会話してない」\n" +
            "ろい「観測だけニダ」",
        reaction_bad:
            "ろい「先生、因果が逆ニダ」\n" +
            "ありす「静か＝無音とは限らない」",
        images: ["roi.png", "alice.png"]
    },
    {
        id: "chat_shunki_yoru_01",
        subtype: "chat",
        group: "1-4",
        sender: "しゅんき＆よる",
        start_msg:
            "しゅんき「眠くね？」\n" +
            "よる「今から元気出る時間」\n" +
            "しゅんき「逆転してんな」\n" +
            "よる「昼が悪い」",
        text: "前を向いてください。", 
        kana: "まえをむいてください。",
        romaji: "mae wo muite kudasai",
        reaction_good:
            "しゅんき「気持ちは前向き」\n" +
            "よる「体は横向き」",
        reaction_bad:
            "よる「前ってどっち？」\n" +
            "しゅんき「概念から？」",
        images: ["shunki.png", "yoru.png"]
    },
    {
        id: "chat_akatsuki_maaya_01",
        subtype: "chat",
        group: "1-4",
        sender: "あかつき＆まあや",
        start_msg:
            "まあや「それ、手伝ってくれる？」\n" +
            "あかつき「……別に」\n" +
            "まあや「ありがとう。優しいね」\n" +
            "あかつき「評価いらねぇ」",
        text: "協力してください。", 
        kana: "きょうりょくしてください。",
        romaji: "kyouryoku shite kudasai",
        reaction_good:
            "まあや「ふふ、ごめんね」\n" +
            "あかつき「……言うなら最初から」",
        reaction_bad:
            "あかつき「今、指示曖昧」\n" +
            "まあや「確かに説明不足でしたわ」",
        images: ["akatsuki.png", "maaya.png"]
    },
    {
    id: "chat_roi_alice_silence",
    subtype: "chat",
    group: "1-4",
    sender: "ろい＆ありす",
    start_msg:
        "ろい「……また寝てるのか、ありす」\n" +
        "ありす「起きてる。観察してるだけ」\n" +
        "ろい「何をニダ」\n" +
        "ありす「ろいが“何もしてないふり”してる理由」\n" +
        "ろい「……」\n" +
        "ありす「沈黙で答えるの、好きだよね」",
    text: "授業中だぞ。",
    kana: "じゅぎょうちゅうだぞ。",
    romaji: "jugyouchuu dazo",
    reaction_good:
        "ろい「了解ニダ」\n" +
        "ありす「はーい、表面上は従っとく」",
    images:
        "ありす「先生、文字ズレてる。思考もズレてない？」\n" +
        "ろい「入力精度が低いニダ」",
    images: ["roi.png", "alice.png"]
    },
    {
    id: "chat_shunki_yoru_sleepy",
    subtype: "chat",
    group: "1-4",
    sender: "しゅんき＆よる",
    start_msg:
        "しゅんき「よる、また遅刻？」\n" +
        "よる「……夢の続き見とった」\n" +
        "しゅんき「現実に帰ってこいって」\n" +
        "よる「現実、つまらんやん」\n" +
        "しゅんき「それは分かる」",
    text: "席に着け。",
    kana: "せきにつけ。",
    romaji: "seki ni tsuke",
    reaction_good:
        "よる「はーい……」\n" +
        "しゅんき「怒られ回避っと」",
    images:
        "しゅんき「先生、打ち間違えてる。眠いの？」\n" +
        "よる「それとも夢見とる？」",
    images: ["shunki.png", "yoru.png"]
    },
    {
    id: "chat_akatsuki_maaya_piano",
    subtype: "chat",
    group: "1-4",
    sender: "あかつき＆まあや",
    start_msg:
        "あかつき「……また弾いたんか」\n" +
        "まあや「うん。でも今日は途中でやめたんよ」\n" +
        "あかつき「兄貴みたいに上手くないから？」\n" +
        "まあや「比べんでええよ。あかつきはあかつきやけん」\n" +
        "あかつき「……それが一番キツい」",
    text: "私語は控えろ。",
    kana: "しごはひかえろ。",
    romaji: "shigo wa hikaero",
    reaction_good:
        "まあや「はーい」\n" +
        "あかつき「……悪い」",
    images:
        "あかつき「先生、誤字ってる」\n" +
        "まあや「落ち着こ？」",
    images: ["akatsuki.png", "maaya.png"]
    },
    {
    id: "chat_maya_maaya_memory",
    subtype: "chat",
    group: "1-4",
    sender: "まや＆まあや",
    start_msg:
        "まや「それ、前も持ってたよね」\n" +
        "まあや「うん。大事なもんやけん」\n" +
        "まや「……捨てないタイプ？」\n" +
        "まあや「思い出は置いておきたい派」\n" +
        "まや「……一緒だ」",
    text: "話すな。",
    kana: "はなすな。",
    romaji: "hanasuna",
    reaction_good:
        "まや「……ごめん」\n" +
        "まあや「あとで続き話そ」",
    images:
        "まや「先生、文字欠けてる」\n" +
        "まあや「気持ちも欠けてない？」",
    images: ["maya.png", "maaya.png"]
    },
    {
    id: "chat_sui_enya_battle",
    subtype: "chat",
    group: "1-4",
    sender: "すい＆えんや",
    start_msg:
        "すい「なぁ、廊下走ってんの俺だけじゃねーよな？」\n" +
        "えんや「オレは走ってねぇ。風を切ってただけだ」\n" +
        "すい「は？ 言い訳ダサ」\n" +
        "えんや「支配される側の発想だな、それ」\n" +
        "すい「吠えてんなら結果出せよ、ヒーロー気取り」",
    text: "廊下は走るな。",
    kana: "ろうかははしるな。",
    romaji: "rouka wa hashiruna",
    reaction_good:
        "すい「チッ……」\n" +
        "えんや「今回は引く」",
    images:
        "えんや「先生、誤字ってる」\n" +
        "すい「注意する側がミスってんの草」",
    images: ["sui.png", "enya.png"]
    },
    {
    id: "chat_sadama_shunki_logic",
    subtype: "chat",
    group: "1-4",
    sender: "さだま＆しゅんき",
    start_msg:
        "さだま「赤点回避の計画、立ててるか？」\n" +
        "しゅんき「計画立てるのが一番めんどい」\n" +
        "さだま「その思考が非効率だ」\n" +
        "しゅんき「人生は効率じゃ測れないって」\n" +
        "さだま「測れる。少なくとも成績は」",
    text: "静かにしろ。",
    kana: "しずかにしろ。",
    romaji: "shizuka ni shiro",
    reaction_good:
        "しゅんき「はいはい」\n" +
        "さだま「助かる」",
    images:
        "さだま「先生、文字抜けてる」\n" +
        "しゅんき「計画性ゼロじゃん」",
    images: ["sadama.png", "shunki.png"]
    },
    {
    id: "chat_yuuki_fortune",
    subtype: "chat",
    group: "1-4",
    sender: "ゆうき",
    start_msg:
        "ゆうき「今日の運勢？ いいよ見てあげる」\n" +
        "ゆうき「……あー、これ出ちゃったかぁ」\n" +
        "ゆうき「近くに“厄介な存在”がいるね」\n" +
        "ゆうき「でも優しい人だから大丈夫！」",
    text: "授業中だ。",
    kana: "じゅぎょうちゅうだ。",
    romaji: "jugyou chuu da",
    reaction_good:
        "ゆうき「はーい、また後でね」",
    images:
        "ゆうき「先生、入力ミスってる」\n" +
        "ゆうき「それも運命かも？」",
    images: ["yuuki.png"]
    },
    {
    id: "chat_sayaka_uruu_drawing",
    subtype: "chat",
    group: "1-4",
    sender: "さやか＆うるう",
    start_msg:
        "さやか「……その線、きれいやね」\n" +
        "うるう「ん？ そうか」\n" +
        "さやか「羽の描き方、好き」\n" +
        "うるう「役に立つなら教える」\n" +
        "さやか「ありがとう……嬉しい」",
    text: "何を描いている。",
    kana: "なにをえがいている。",
    romaji: "nani wo egaite iru",
    reaction_good:
        "うるう「落書き」\n" +
        "さやか「内緒です」",
    images:
        "さやか「先生、誤字やよ」\n" +
        "うるう「指示語多すぎ」",
    images: ["sayaka.png", "uruu.png"]
    },
    {
    id: "chat_alice_roi_core",
    subtype: "chat",
    group: "1-4",
    sender: "ありす＆ろい",
    start_msg:
        "ありす「ねぇ、ろい」\n" +
        "ろい「何ニダ」\n" +
        "ありす「ホントはさ、全部把握してるくせに」\n" +
        "ありす「“知らない側”にいるの楽しいんでしょ？」\n" +
        "ろい「……」\n" +
        "ありす「沈黙は肯定って習った」",
    text: "私語は禁止だ。",
    kana: "しごはきんしだ。",
    romaji: "shigo wa kinshi da",
    reaction_good:
        "ろい「後で話すニダ」\n" +
        "ありす「ふふ、逃げた」",
    images:
        "ありす「先生、文字順おかしい」\n" +
        "ろい「精度が甘いニダ」",
    images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_sui_enya_battle",
        subtype: "chat",
        group: "1−4",
        sender: "すい＆えんや",
        start_msg:
            "すい「チッ……廊下で自撮りすんなって言ってんだろ」\n" +
            "えんや「は？これはヒーローの記録だ。民衆の希望ニダ」\n" +
            "すい「うっわ寒っ。口より足動かせよナル」\n" +
            "えんや「暴力でしか語れないのか？支配される側の思考だな」\n" +
            "すい「……あ？」\n" +
            "えんや「今、心読んだ。キレる前兆」",
        text: "廊下は走らないでください。", 
        kana: "ろうかははしらないでください。",
        romaji: "rouka wa hashiranaide kudasai",
        reaction_good:
            "すい「チッ……先生来た」\n" +
            "えんや「今日は引く。世界がオレを呼んでる」",
        reaction_bad:
            "すい「先生、日本語ズレてんだけど」\n" +
            "えんや「注意文の構文が甘いな」",
        images: ["sui.png", "enya.png"]
    },
    { 
        id: "chat_sadama_shunki_logic",
        subtype: "chat",
        group: "1−4",
        sender: "さだま＆しゅんき",
        start_msg:
            "さだま「その発想、再現性がない」\n" +
            "しゅんき「え〜？ノリでいけるっしょ」\n" +
            "さだま「ノリは事故率が高い」\n" +
            "しゅんき「人生は事故ってなんぼだろ」\n" +
            "さだま「……保険に入ってから言え」",
        text: "議題から逸れていますよ。", 
        kana: "ぎだいからそれていますよ。",
        romaji: "gidai kara soreteimasu yo",
        reaction_good:
            "しゅんき「はいはーい現実戻りまーす」\n" +
            "さだま「今のは有効な修正だ」",
        reaction_bad:
            "しゅんき「先生、助詞ミスってない？」\n" +
            "さだま「注意文としては不正確だ」",
        images: ["sadama.png", "shunki.png"]
    },
    { 
        id: "chat_yuuki_fortune",
        subtype: "chat",
        group: "1−4",
        sender: "ゆうき",
        start_msg:
            "ゆうき「はいはーい、今日の運勢見るよ？」\n" +
            "ゆうき「カードが示すのは……“秘密の暴露”」\n" +
            "ゆうき「誰か、隠し事してない？」\n" +
            "ゆうき「ちなみに当たったら信じてね」",
        text: "授業中に占いはやめてください。", 
        kana: "じゅぎょうちゅうにうらないはやめてください。",
        romaji: "jugyouchuu ni uranai wa yamete kudasai",
        reaction_good:
            "ゆうき「はーい、放課後にする！」",
        reaction_bad:
            "ゆうき「先生、漢字変だよ？」",
        images: ["yuuki.png"]
    },
    { 
        id: "chat_sayaka_uruu_drawing",
        subtype: "chat",
        group: "1−4",
        sender: "さやか＆うるう",
        start_msg:
            "さやか「その線、やさしいなぁ……」\n" +
            "うるう「ん？ただ手ぇ動かしとるだけばい」\n" +
            "さやか「うち、こういう静かな絵好き」\n" +
            "うるう「役に立つかは知らんけどな」\n" +
            "さやか「立つよ。心に」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shitekudasai",
        reaction_good:
            "うるう「ほら、怒られたばい」\n" +
            "さやか「……ごめんなさい」",
        reaction_bad:
            "うるう「先生、その言い方曖昧ばい」\n" +
            "さやか「意味、通りにくいえ」",
        images: ["sayaka.png", "uruu.png"]
    },
    { 
        id: "chat_alice_roi_core",
        subtype: "chat",
        group: "1−4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「ねえ、ろい」\n" +
            "ろい「……何ニダ」\n" +
            "ありす「ホントは怖いんでしょ。高いとこ」\n" +
            "ろい「……」\n" +
            "ありす「隠す構造、単純」\n" +
            "ろい「分析するな」",
        text: "私語は控えてください。", 
        kana: "しごはひかえてください。",
        romaji: "shigo wa hikaete kudasai",
        reaction_good:
            "ろい「……後で話す」\n" +
            "ありす「ふふ。興味深い」",
        reaction_bad:
            "ありす「先生、注意の粒度が粗い」\n" +
            "ろい「論理的に弱いニダ」",
        images: ["alice.png", "roi.png"]
    },
    { 
        id: "chat_yukihiko_kaji_graffiti",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆かじ",
        start_msg:
            "ゆきひこ「わちの自由帳に…ねこ生えとるんじゃが！？」\n" +
            "かじ「生やした。団体にはマスコット必要だろ？」\n" +
            "ゆきひこ「ゆきひこ団は人間主体なんじゃが！」\n" +
            "かじ「じゃあ半獣ってことで」\n" +
            "ゆきひこ「設定勝手に盛るな〜！」",
        text: "落書きはやめなさい。", 
        kana: "らくがきはやめなさい。",
        romaji: "rakugaki wa yamenasai",
        reaction_good:
            "かじ「じゃあ清書する？」\n" +
            "ゆきひこ「団体ロゴに昇格したわち…」",
        reaction_bad:
            "ゆきひこ「先生、誤字っとる！団じゃなくて団体！」\n" +
            "かじ「ツッコミどころそこ？」",
        images: ["yukihiko.png", "kaji.png"]
    },
    { 
        id: "chat_maaya_haruka_romance",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆はるか",
        start_msg:
            "はるか「この窓際、光が綺麗じゃない？」\n" +
            "まあや「ほんまやねぇ…青春やわぁ」\n" +
            "はるか「ここで手紙書いたら素敵かも！」\n" +
            "まあや「封蝋も用意したいねぇ」",
        text: "授業に集中してください。", 
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "はるか「はっ！ごめんなさい！」\n" +
            "まあや「後で続き話そ？」",
        reaction_bad:
            "まあや「先生、“集中”抜けとるよ？」\n" +
            "はるか「指摘が優しい…」",
        images: ["maaya.png", "haruka.png"]
    },
    { 
        id: "chat_taichi_yoru_silent",
        subtype: "chat",
        group: "1-4",
        sender: "たいち＆よる",
        start_msg:
            "たいち「……また遅刻？」\n" +
            "よる「朝が悪い」\n" +
            "たいち「理由になってない」\n" +
            "よる「でも事実」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "たいち「…今は黙る」\n" +
            "よる「元から静か」",
        reaction_bad:
            "よる「先生、“しなさい”多くない？」\n" +
            "たいち「圧が強い…」",
        images: ["taichi.png", "yoru.png"]
    },
    { 
        id: "chat_mikoto_appears",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆すい",
        start_msg:
            "すい「なぁ今の話さ──」\n" +
            "みこと「それ続ける意味ある？」\n" +
            "すい「うわ！？いつからおった！？」\n" +
            "みこと「最初からやで」",
        text: "私語は控えなさい。", 
        kana: "しごはひかえなさい。",
        romaji: "shigo wa hikaenasai",
        reaction_good:
            "すい「……悪かった」\n" +
            "みこと「素直でよろしい」",
        reaction_bad:
            "みこと「先生、句読点落ちとる」\n" +
            "すい「そこ気にすんのかよ…」",
        images: ["mikoto.png", "sui.png"]
    },
    { 
        id: "chat_kaji_weird_event",
        subtype: "chat",
        group: "1-4",
        sender: "かじ",
        start_msg:
            "かじ「今日からオレ、ねこたくん」\n" +
            "かじ「名札も作った」\n" +
            "かじ「語尾はにゃ」",
        text: "ふざけないでください。", 
        kana: "ふざけないでください。",
        romaji: "fuzakenaide kudasai",
        reaction_good:
            "かじ「じゃあ静かににゃ」",
        reaction_bad:
            "かじ「先生、漢字間違ってるにゃ」",
        images: ["kaji.png"]
    },
    { 
        id: "chat_roi_alice_boredom",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ありす「この授業、構造が単純すぎる」\n" +
            "ろい「だから眠くなるニダ」\n" +
            "ありす「壊してみる？」\n" +
            "ろい「最小単位でな」",
        text: "話を聞きなさい。", 
        kana: "はなしをききなさい。",
        romaji: "hanashi wo kikinasai",
        reaction_good:
            "ろい「聞いてるニダ」\n" +
            "ありす「表層は」",
        reaction_bad:
            "ありす「先生、主語ない」\n" +
            "ろい「命令が雑ニダ」",
        images: ["roi.png", "alice.png"]
    },
    { 
        id: "chat_mikoto_enya_power",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆えんや",
        start_msg:
            "えんや「なぁみこと、オレが前出た方が映えるよな？」\n" +
            "みこと「別に。目立つ＝有能ちゃうし」\n" +
            "えんや「は？オレ主役体質なんだけど？」\n" +
            "みこと「自称は実績にならんで」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "えんや「……チッ」\n" +
            "みこと「感情制御できとるやん」",
        reaction_bad:
            "みこと「先生、“落ち着い”抜けてる」\n" +
            "えんや「漢字も落ち着いてねぇな」",
        images: ["mikoto.png", "enya.png"]
    },
    { 
        id: "chat_shunki_taichi_pressure",
        subtype: "chat",
        group: "1-4",
        sender: "しゅんき＆たいち",
        start_msg:
            "しゅんき「そのノート、細かすぎね？」\n" +
            "たいち「抜けがある方が怖い」\n" +
            "しゅんき「人生そんな几帳面だと疲れん？」\n" +
            "たいち「疲れても、失敗するよりいい」",
        text: "授業中です。", 
        kana: "じゅぎょうちゅうです。",
        romaji: "jugyou chuu desu",
        reaction_good:
            "しゅんき「はいはい」\n" +
            "たいち「助かります」",
        reaction_bad:
            "たいち「先生、句点がないです」\n" +
            "しゅんき「そこ突っ込むの草」",
        images: ["shunki.png", "taichi.png"]
    },
    { 
        id: "chat_yoru_sadama_logic",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆さだま",
        start_msg:
            "よる「今日、頭回らん」\n" +
            "さだま「回らないなら最低限やれ」\n" +
            "よる「最低限ってどれ」\n" +
            "さだま「今これ」",
        text: "静かに作業してください。", 
        kana: "しずかにさぎょうしてください。",
        romaji: "shizuka ni sagyou shite kudasai",
        reaction_good:
            "よる「……わかった」\n" +
            "さだま「それでいい」",
        reaction_bad:
            "よる「先生、“作業”の漢字違う」\n" +
            "さだま「確認不足ですね」",
        images: ["yoru.png", "sadama.png"]
    },
    { 
        id: "chat_maaya_akatsuki_gap",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆あかつき",
        start_msg:
            "まあや「ピアノ、弾けるんよね？」\n" +
            "あかつき「……別に」\n" +
            "まあや「すごいなぁって思って」\n" +
            "あかつき「褒めるなら兄貴に言え」",
        text: "会話は控えてください。", 
        kana: "かいわはひかえてください。",
        romaji: "kaiwa wa hikaete kudasai",
        reaction_good:
            "まあや「ごめんね」\n" +
            "あかつき「……気にすんな」",
        reaction_bad:
            "あかつき「先生、送り仮名ズレてる」\n" +
            "まあや「細かいとこ見るんやね」",
        images: ["maaya.png", "akatsuki.png"]
    },
    { 
        id: "chat_yukihiko_shunki_random",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆しゅんき",
        start_msg:
            "ゆきひこ「わち思うんじゃが、時間って丸いよな」\n" +
            "しゅんき「わかる。直線だと学校つらい」\n" +
            "ゆきひこ「やっぱそうじゃろ！？」",
        text: "私語をやめなさい。", 
        kana: "しごをやめなさい。",
        romaji: "shigo wo yamenasai",
        reaction_good:
            "しゅんき「はいはい」\n" +
            "ゆきひこ「概念は後で話すわち」",
        reaction_bad:
            "ゆきひこ「先生、“私語”の字ちがう！」\n" +
            "しゅんき「よく見てんな」",
        images: ["yukihiko.png", "shunki.png"]
    },
    { 
        id: "chat_sui_kaji_trouble",
        subtype: "chat",
        group: "1-4",
        sender: "すい＆かじ",
        start_msg:
            "すい「お前また変なことしてんな」\n" +
            "かじ「これは芸術」\n" +
            "すい「机に描くな」\n" +
            "かじ「じゃあ床？」",
        text: "やめてください。", 
        kana: "やめてください。",
        romaji: "yamete kudasai",
        reaction_good:
            "すい「……チッ」\n" +
            "かじ「やめたやめた」",
        reaction_bad:
            "かじ「先生、語尾弱い」\n" +
            "すい「煽んな」",
        images: ["sui.png", "kaji.png"]
    },
    {
    id: "chat_yuuki_fortune_trio",
    subtype: "chat",
    group: "1-4",
    sender: "ゆうき＆ゆきひこ＆あやと＆かじ",
    start_msg:
        "ゆうき「はいはい〜今日も占い屋ゆうき開店でーす！」\n" +
        "ゆきひこ「わちの運勢も見るわち！！」\n" +
        "あやと「オラも！オラも今日納豆投げていい日か占ってくれ！」\n" +
        "かじ「オレは今日ねこたくん名乗っていいかどうかで頼む」",
    text: "占いって何占ってるの？",
    kana: "うらないってなにうらなってるの？",
    romaji: "uranai tte nani uranatteru no",
    reaction_good:
        "ゆうき「え、気分？ノリ？あと星っぽいやつ！」\n" +
        "ゆきひこ「星キラキラしてるとだいたい良いわち！」\n" +
        "あやと「じゃあ今日全部当たり日じゃん！」\n" +
        "かじ「よっしゃ！ねこたくん出動〜！」",
    reaction_bad:
        "ゆうき「質問文ズレてるよ〜先生！」\n" +
        "あやと「占いより日本語占った方がいいんじゃね？」\n" +
        "かじ「誤字ってるのも運命ってことにしとく？」",
    images: ["yuuki.png", "yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
    id: "chat_sui_shunki",
    subtype: "chat",
    group: "1-4",
    sender: "すい＆しゅんき",
    start_msg:
        "すい「おいフクロウ、今日の授業サボるか？」\n" +
        "しゅんき「え〜面倒だけど〜赤点も面倒なんだよな〜」\n" +
        "すい「走れば全部忘れられるぞ」",
    text: "授業には出なさい。",
    kana: "じゅぎょうにはでなさい。",
    romaji: "jugyou ni wa denasai",
    reaction_good:
        "しゅんき「はいはい〜出ればいいんでしょ〜」\n" +
        "すい「チッ…先生に言われたらしゃーねぇな」",
    reaction_bad:
        "すい「は？文短すぎだろ」\n" +
        "しゅんき「句読点多くない？それで威圧してる？」",
    images: ["sui.png", "shunki.png"]
    },
    {
    id: "chat_taichi_maya",
    subtype: "chat",
    group: "1-4",
    sender: "たいち＆まや",
    start_msg:
        "たいち「その箱、昨日も持ってたよね？」\n" +
        "まや「うん。捨てる予定はない」\n" +
        "たいち「増えてない？」\n" +
        "まや「増えてる」",
    text: "整理したらどう？",
    kana: "せいりしたらどう？",
    romaji: "seiri shitara dou",
    reaction_good:
        "まや「……考えとく」\n" +
        "たいち「無理はしなくていいからね」",
    reaction_bad:
        "たいち「“どう”の使い方ちょっと曖昧かも」\n" +
        "まや「言葉雑だと信用落ちるよ」",
    images: ["taichi.png", "maya.png"]
    },
    {
    id: "chat_yoru_mikoto",
    subtype: "chat",
    group: "1-4",
    sender: "よる＆みこと",
    start_msg:
        "よる「……また遅刻した」\n" +
        "みこと「気配消して入ったらええんちゃう？」\n" +
        "よる「それできたら苦労せん」",
    text: "静かに入りなさい。",
    kana: "しずかにはいりなさい。",
    romaji: "shizuka ni hairinasai",
    reaction_good:
        "よる「はーい……」\n" +
        "みこと「ほな成功やな」",
    reaction_bad:
        "みこと「指示が抽象的すぎるで？」\n" +
        "よる「先生の声が一番でかい」",
    images: ["yoru.png", "mikoto.png"]
    },
    {
    id: "chat_roi_alice_structure",
    subtype: "chat",
    group: "1-4",
    sender: "ろい＆ありす",
    start_msg:
        "ろい「まだ寝てるニダ？」\n" +
        "ありす「……現実が単層すぎる」\n" +
        "ろい「退屈を理由にするなニダ」\n" +
        "ありす「退屈じゃなかったら起きてる」",
    text: "授業中は起きなさい。",
    kana: "じゅぎょうちゅうはおきなさい。",
    romaji: "jugyouchuu wa okinasai",
    reaction_good:
        "ろい「まぁ一応は聞くニダ」\n" +
        "ありす「……刺激くれたら」",
    reaction_bad:
        "ろい「命令形が雑ニダ」\n" +
        "ありす「構文ミスってる」",
    images: ["roi.png", "alice.png"]
    },
    {
    id: "chat_sui_enya",
    subtype: "chat",
    group: "1-4",
    sender: "すい＆えんや",
    start_msg:
        "えんや「このクラスを救えるのはオレだけだ」\n" +
        "すい「うるせぇ。廊下走るぞ」\n" +
        "えんや「支配される気はない」\n" +
        "すい「じゃあ勝手に吠えてろ」",
    text: "廊下を走ってはいけません。",
    kana: "ろうかをはしってはいけません。",
    romaji: "rouka o hashitte wa ikemasen",
    reaction_good:
        "すい「チッ……」\n" +
        "えんや「今回は従ってやる」",
    reaction_bad:
        "えんや「語尾が曖昧だな？」\n" +
        "すい「その日本語で止められると思った？」",
    images: ["sui.png", "enya.png"]
    },
    {
    id: "chat_yukihiko_kaji",
    subtype: "chat",
    group: "1-4",
    sender: "ゆきひこ＆かじ",
    start_msg:
        "ゆきひこ「わちのノート見て！！ゆきひこ団！！」\n" +
        "かじ「いいね！ここねこたくん足そう！」\n" +
        "ゆきひこ「団員増えたわち！」",
    text: "授業に集中しなさい。",
    kana: "じゅぎょうにしゅうちゅうしなさい。",
    romaji: "jugyou ni shuuchuu shinasai",
    reaction_good:
        "ゆきひこ「はーいわち……」\n" +
        "かじ「あとで続き描こ！」",
    reaction_bad:
        "かじ「集中って何に？」\n" +
        "ゆきひこ「先生、漢字合ってるわち？」",
    images: ["yukihiko.png", "kaji.png"]
    },
    {
    id: "chat_maaya_haruka",
    subtype: "chat",
    group: "1-4",
    sender: "まあや＆はるか",
    start_msg:
        "まあや「この前のお出かけ、素敵やったねぇ」\n" +
        "はるか「うん！写真もいっぱい撮れた！」\n" +
        "まあや「思い出は大事にせなね」",
    text: "私語は控えてください。",
    kana: "しごはひかえてください。",
    romaji: "shigo wa hikaete kudasai",
    reaction_good:
        "まあや「失礼しました」\n" +
        "はるか「ごめんなさーい！」",
    reaction_bad:
        "はるか「先生、丁寧すぎて逆に浮いてる！」\n" +
        "まあや「言い回しがちょっと不自然やね」",
    images: ["maaya.png", "haruka.png"]
    },
    {
    id: "chat_taichi_yoru",
    subtype: "chat",
    group: "1-4",
    sender: "たいち＆よる",
    start_msg:
        "たいち「また遅刻してたよね」\n" +
        "よる「……朝は無理」\n" +
        "たいち「規則だから」",
    text: "遅刻はやめましょう。",
    kana: "ちこくはやめましょう。",
    romaji: "chikoku wa yamemashou",
    reaction_good:
        "よる「……努力はする」\n" +
        "たいち「無理しなくていいから」",
    reaction_bad:
        "たいち「“やめましょう”だと指示弱いかも」\n" +
        "よる「先生も眠そう」",
    images: ["taichi.png", "yoru.png"]
    },
    {
    id: "chat_uruu_akatsuki",
    subtype: "chat",
    group: "1-4",
    sender: "うるう＆あかつき",
    start_msg:
        "うるう「この部品、無駄が多か」\n" +
        "あかつき「……別に」\n" +
        "うるう「直した方が役に立つ」",
    text: "協力して作業しなさい。",
    kana: "きょうりょくしてさぎょうしなさい。",
    romaji: "kyouryoku shite sagyou shinasai",
    reaction_good:
        "あかつき「……まぁいい」\n" +
        "うるう「助かる」",
    reaction_bad:
        "うるう「指示語が多すぎ」\n" +
        "あかつき「具体性ゼロ」",
    images: ["uruu.png", "akatsuki.png"]
    },
    {
    id: "chat_sayaka_shunki",
    subtype: "chat",
    group: "1-4",
    sender: "さやか＆しゅんき",
    start_msg:
        "しゅんき「その絵、何描いてるの？」\n" +
        "さやか「……内緒や」\n" +
        "しゅんき「ふーん、不思議」",
    text: "静かにしなさい。",
    kana: "しずかにしなさい。",
    romaji: "shizuka ni shinasai",
    reaction_good:
        "さやか「……はい」\n" +
        "しゅんき「はーい」",
    reaction_bad:
        "しゅんき「急に命令形だね？」\n" +
        "さやか「ちょっと怖い言い方や」",
    images: ["sayaka.png", "shunki.png"]
    },
    {
    id: "chat_yoru_late",
    subtype: "chat",
    group: "1-4",
    sender: "よる",
    start_msg:
        "よる「……おはよ」\n" +
        "よる「遅れた……」",
    text: "また遅刻ですか。",
    kana: "またちこくですか。",
    romaji: "mata chikoku desu ka",
    reaction_good:
        "よる「……ごめん」",
    reaction_bad:
        "よる「“また”強調しすぎ」",
    images: ["yoru.png"]
    },
    {
    id: "chat_shunki_yukihiko",
    subtype: "chat",
    group: "1-4",
    sender: "しゅんき＆ゆきひこ",
    start_msg:
        "ゆきひこ「わち昨日さ、宿題やった気がする」\n" +
        "しゅんき「“気がする”はやってないやつ」\n" +
        "ゆきひこ「じゃあ一緒に忘れよ？」",
    text: "宿題は提出しなさい。",
    kana: "しゅくだいはていしゅつしなさい。",
    romaji: "shukudai wa teishutsu shinasai",
    reaction_good:
        "しゅんき「はーい」\n" +
        "ゆきひこ「わち探してくる！」",
    reaction_bad:
        "しゅんき「漢字一個足りなくない？」\n" +
        "ゆきひこ「先生も忘れてるわち？」",
    images: ["shunki.png", "yukihiko.png"]
    },
    {
    id: "chat_kaji_sadama",
    subtype: "chat",
    group: "1-4",
    sender: "かじ＆さだま",
    start_msg:
        "かじ「見て！新聞紙で作ったねこたくん！」\n" +
        "さだま「合理性が一切ない」\n" +
        "かじ「でも可愛いだろ！」",
    text: "無駄なものを作らないでください。",
    kana: "むだなものをつくらないでください。",
    romaji: "muda na mono o tsukuranaide kudasai",
    reaction_good:
        "さだま「まぁ片付けるならいい」\n" +
        "かじ「よっしゃ！」",
    reaction_bad:
        "かじ「“無駄”って主観じゃん」\n" +
        "さだま「指示が抽象的だ」",
    images: ["kaji.png", "sadama.png"]
    },
    {
    id: "chat_akatsuki_maaya",
    subtype: "chat",
    group: "1-4",
    sender: "あかつき＆まあや",
    start_msg:
        "まあや「その曲、切ないねぇ」\n" +
        "あかつき「……別に」\n" +
        "まあや「心がこもっとる」",
    text: "授業中に演奏しないでください。",
    kana: "じゅぎょうちゅうにえんそうしないでください。",
    romaji: "jugyouchuu ni ensou shinaide kudasai",
    reaction_good:
        "あかつき「……はい」\n" +
        "まあや「後で聞かせてね」",
    reaction_bad:
        "あかつき「言葉長すぎ」\n" +
        "まあや「先生、少し硬いねぇ」",
    images: ["akatsuki.png", "maaya.png"]
    },
    {
    id: "chat_alice_roi_whisper",
    subtype: "chat",
    group: "1-4",
    sender: "ありす＆ろい",
    start_msg:
        "ありす「……この授業、情報密度低い」\n" +
        "ろい「同意するニダ」\n" +
        "ありす「早く終わらないかな」",
    text: "静かに聞きなさい。",
    kana: "しずかにききなさい。",
    romaji: "shizuka ni kiki nasai",
    reaction_good:
        "ろい「了解ニダ」\n" +
        "ありす「……はい」",
    reaction_bad:
        "ありす「命令形が雑」\n" +
        "ろい「主語が抜けてるニダ」",
    images: ["alice.png", "roi.png"]
    },
    {
    id: "chat_enya_sui_pressure",
    subtype: "chat",
    group: "1-4",
    sender: "えんや＆すい",
    start_msg:
        "えんや「このクラスはオレが守る」\n" +
        "すい「勝手にやってろ」\n" +
        "えんや「支配は許さない」",
    text: "喧嘩しないでください。",
    kana: "けんかしないでください。",
    romaji: "kenka shinaide kudasai",
    reaction_good:
        "すい「チッ……」\n" +
        "えんや「今回はな」",
    reaction_bad:
        "えんや「止め方が弱い」\n" +
        "すい「それで止まると思った？」",
    images: ["enya.png", "sui.png"]
    },
    {
    id: "chat_yuuki_haruka",
    subtype: "chat",
    group: "1-4",
    sender: "ゆうき＆はるか",
    start_msg:
        "ゆうき「今日の運勢、はるか最強だよ」\n" +
        "はるか「えー！やった！」",
    text: "占いは後にしなさい。",
    kana: "うらないはあとにしなさい。",
    romaji: "uranai wa ato ni shinasai",
    reaction_good:
        "ゆうき「はーい」\n" +
        "はるか「ごめんなさい！」",
    reaction_bad:
        "ゆうき「助詞おかしいよ？」\n" +
        "はるか「先生ちょっと日本語変！」",
    images: ["yuuki.png", "haruka.png"]
    },
    {
        id: "chat_alice_roi_dream",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ありす「さっき寝てたんだけどさ」\n" +
            "ろい「授業中ニダ」\n" +
            "ありす「夢見た。教室が水槽で、みんな喋らない」\n" +
            "ろい「……ほう」\n" +
            "ありす「ろいだけ上から見てて。助けないの」\n" +
            "ろい「助ける理由がなかったニダ？」\n" +
            "ありす「うん。でも、見てた」",
        text: "静かにしなさい。",
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ろい「夢は無意識の構造ニダ」\n" +
            "ありす「やっぱそう思う？」",
        reaction_bad:
            "ろい「注意のタイミングが雑ニダ」\n" +
            "ありす「誤字ってる。起こすなら正確に」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_uruu_haruka_order",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆はるか",
        start_msg:
            "はるか「うるうちゃん、これお願いしてもいい？」\n" +
            "うるう「……それ、今？」\n" +
            "はるか「うん、今！」\n" +
            "うるう「……なんか、胸ムカムカしてきた」\n" +
            "はるか「え！？大丈夫！？」\n" +
            "うるう「『これ』って言われると、頭ぐるぐるする」",
        text: "体調が悪いなら無理しないで。",
        kana: "たいちょうがわるいならむりしないで。",
        romaji: "taichou ga warui nara muri shinaide",
        reaction_good:
            "うるう「……すんません。少し休む」\n" +
            "はるか「うん、あとででいいよ！」",
        reaction_bad:
            "うるう「先生、日本語抜けとる」\n" +
            "はるか「誤字ってるよ〜？」",
        images: ["uruu.png", "haruka.png"]
    },
    {
        id: "chat_akatsuki_maaya_talent",
        subtype: "chat",
        group: "1-4",
        sender: "あかつき＆まあや",
        start_msg:
            "あかつき「なあ、才能ってさ」\n" +
            "まあや「急やね、どうしたん？」\n" +
            "あかつき「俺には無い。音も、感覚も」\n" +
            "まあや「……そんなことない思うけど」\n" +
            "あかつき「兄貴と同じことやって、全部下」\n" +
            "まあや「比べんでええんよ」",
        text: "前を向きましょう。",
        kana: "まえをむきましょう。",
        romaji: "mae o mukimashou",
        reaction_good:
            "まあや「ゆっくりでええんよ」\n" +
            "あかつき「……そういうのが一番刺さる」",
        reaction_bad:
            "あかつき「説教ならちゃんと書け」\n" +
            "まあや「漢字落ちとるよ？」",
        images: ["akatsuki.png", "maaya.png"]
    },
    {
        id: "chat_yukihiko_sui_run",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆すい",
        start_msg:
            "すい「おい、走んな」\n" +
            "ゆきひこ「わち、足が勝手に〜！」\n" +
            "すい「言い訳が可愛いと思うな」\n" +
            "ゆきひこ「え、思ってる？」",
        text: "廊下は走らないでください。",
        kana: "ろうかははしらないでください。",
        romaji: "rouka wa hashiranaide kudasai",
        reaction_good:
            "すい「ほらな」\n" +
            "ゆきひこ「わち反省〜」",
        reaction_bad:
            "すい「注意文ズレてる」\n" +
            "ゆきひこ「先生も走った？」",
        images: ["yukihiko.png", "sui.png"]
    },
    {
        id: "chat_yoru_taichi_morning",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆たいち",
        start_msg:
            "たいち「……眠そうだね」\n" +
            "よる「毎朝こんな」\n" +
            "たいち「布団、強敵だよね」\n" +
            "よる「敵というか、味方」",
        text: "授業に集中してください。",
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "たいち「がんばろう……」\n" +
            "よる「……うん」",
        reaction_bad:
            "よる「誤字で集中切れた」\n" +
            "たいち「漢字違うよ」",
        images: ["yoru.png", "taichi.png"]
    },
    {
        id: "chat_enya_mikoto_hero",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆みこと",
        start_msg:
            "えんや「世界救えるのはオレだけだ」\n" +
            "みこと「ほな、責任も全部背負い」\n" +
            "えんや「当然だろ」\n" +
            "みこと「口だけやと軽いで？」",
        text: "議論は静かに。",
        kana: "ぎろんはしずかに。",
        romaji: "giron wa shizuka ni",
        reaction_good:
            "えんや「チッ」\n" +
            "みこと「続きは後でな」",
        reaction_bad:
            "みこと「先生、語尾抜けとる」\n" +
            "えんや「説得力ゼロ」",
        images: ["enya.png", "mikoto.png"]
    },
    {
        id: "chat_alice_roi_dream_analysis",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「昨日の夢、続きを聞くニダ」\n" +
            "ありす「うん。水が引いたあと、机だけ残った」\n" +
            "ろい「人は？」\n" +
            "ありす「いない。私だけ起きてた」\n" +
            "ろい「観測者になったニダな」\n" +
            "ありす「ろいは最後まで上にいた」\n" +
            "ろい「救わない選択をした記号ニダ」",
        text: "夢の話は後にしてください。",
        kana: "ゆめのはなしはあとにしてください。",
        romaji: "yume no hanashi wa ato ni shite kudasai",
        reaction_good:
            "ろい「合理的な判断ニダ」\n" +
            "ありす「……やっぱ、そう読むよね」",
        reaction_bad:
            "ありす「助詞抜けてる」\n" +
            "ろい「命令文として不完全ニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_uruu_useful",
        subtype: "chat",
        group: "1-4",
        sender: "うるう＆たいち",
        start_msg:
            "たいち「これ、お願いできる？」\n" +
            "うるう「……それ、誰でもよかろ」\n" +
            "たいち「うるうちゃんが得意だから」\n" +
            "うるう「役に立つ時しか呼ばんやろ」\n" +
            "たいち「そんなつもりじゃ…」\n" +
            "うるう「立たん時の自分、要らん気がしてくる」",
        text: "協力し合いましょう。",
        kana: "きょうりょくしあいましょう。",
        romaji: "kyouryoku shi aimashou",
        reaction_good:
            "たいち「……一緒にやろ」\n" +
            "うるう「……うん」",
        reaction_bad:
            "うるう「先生、言い回し曖昧」\n" +
            "たいち「誤字あるよ」",
        images: ["uruu.png", "taichi.png"]
    },
    {
        id: "chat_akatsuki_piano_escape",
        subtype: "chat",
        group: "1-4",
        sender: "あかつき＆さやか",
        start_msg:
            "さやか「今日、弾かへんの？」\n" +
            "あかつき「……触りたくねぇ」\n" +
            "さやか「嫌いになったん？」\n" +
            "あかつき「好きだから逃げる」\n" +
            "さやか「……それ、しんどいやつや」",
        text: "授業に戻ってください。",
        kana: "じゅぎょうにもどってください。",
        romaji: "jugyou ni modotte kudasai",
        reaction_good:
            "あかつき「後でな」\n" +
            "さやか「待っとく」",
        reaction_bad:
            "あかつき「命令文ミスってる」\n" +
            "さやか「漢字ちゃうえ」",
        images: ["akatsuki.png", "sayaka.png"]
    },
    {
        id: "chat_kaji_bread",
        subtype: "chat",
        group: "1-4",
        sender: "かじ＆すい",
        start_msg:
            "すい「それ何だよ」\n" +
            "かじ「パン」\n" +
            "すい「どこで手に入れた」\n" +
            "かじ「知らん」\n" +
            "すい「食えよ」\n" +
            "かじ「やだ」\n" +
            "すい「なんでだよ」\n" +
            "かじ「今じゃない」",
        text: "食べ物で遊ばないでください。",
        kana: "たべものであそばないでください。",
        romaji: "tabemono de asobanaide kudasai",
        reaction_good:
            "すい「意味わからん」\n" +
            "かじ「それでいい」",
        reaction_bad:
            "かじ「先生、助詞落ちてる」\n" +
            "すい「注意文弱すぎ」",
        images: ["kaji.png", "sui.png"]
    },
    {
        id: "chat_ayato_natto",
        subtype: "chat",
        group: "1-4",
        sender: "あやと＆はるか",
        start_msg:
            "あやと「無理！！」\n" +
            "はるか「え、ちょ、あやとくん！？」\n" +
            "あやと「頭がうるせぇ！！」\n" +
            "はるか「落ち着こ！？」\n" +
            "あやと「納豆は落ち着く！！」",
        text: "静かにしてください！",
        kana: "しずかにしてください！",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "はるか「あとで外行こ？」\n" +
            "あやと「……オラ、行く」",
        reaction_bad:
            "あやと「誤字って余計イラつく」\n" +
            "はるか「先生、逆効果だよ！」",
        images: ["ayato.png", "haruka.png"]
    },
    {
        id: "chat_yukihiko_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆ゆうき",
        start_msg:
            "ゆうき「今日の運勢みる？」\n" +
            "ゆきひこ「わち、悪いの引く気しかしない」\n" +
            "ゆうき「じゃあ逆にチャンスだね」",
        text: "私語は控えてください。",
        kana: "しごはひかえてください。",
        romaji: "shigo wa hikaete kudasai",
        reaction_good:
            "ゆきひこ「当たってる！」\n" +
            "ゆうき「でしょ？」",
        reaction_bad:
            "ゆうき「誤字あるよ」\n" +
            "ゆきひこ「先生も運勢悪い？」",
        images: ["yukihiko.png", "yuuki.png"]
    },
    {
        id: "chat_yoru_maya_night",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆まや",
        start_msg:
            "まや「それ、壊れてるよ」\n" +
            "よる「それでもいい」\n" +
            "まや「……捨てないんだ」\n" +
            "よる「一緒に夜越えたから」",
        text: "授業に集中しましょう。",
        kana: "じゅぎょうにしゅうちゅうしましょう。",
        romaji: "jugyou ni shuuchuu shimashou",
        reaction_good:
            "まや「……そっか」\n" +
            "よる「うん」",
        reaction_bad:
            "よる「誤字で現実戻された」\n" +
            "まや「注意になってない」",
        images: ["yoru.png", "maya.png"]
    },
    {
        id: "chat_maaya_akatsuki_homecoming",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆あかつき",
        start_msg:
            "まあや「夏休みに久々に実家帰っとったんよ。海も空も、昔のまんまでね」\n" +
            "あかつき「……へぇ。変わらない場所があるのは、悪くないな」\n" +
            "まあや「ふふ。あかつきくんも、懐かしい場所とかあるん？」\n" +
            "あかつき「……ピアノのある部屋。音だけは、今も覚えてる」",
        text: "懐かしい気持ちになりますね。",
        kana: "なつかしいきもちになりますね。",
        romaji: "natsukashii kimochi ni narimasu ne",
        reaction_good:
            "まあや「先生もそう思われます？記憶って、不思議ですね」\n" +
            "あかつき「……悪くない解釈だ」",
        reaction_bad:
            "あかつき「敬語の使い方、微妙にズレてる」\n" +
            "まあや「先生、そこはもう少し丁寧に言うた方が綺麗よ？」",
        images: ["maaya.png", "akatsuki.png"]
    },
    {
        id: "chat_enya_shunki_hero",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆しゅんき",
        start_msg:
            "えんや「このクラスを導けるのはオレしかいない」\n" +
            "しゅんき「へぇ……それ、テストの点にも効く？」\n" +
            "えんや「精神的勝利は数値化できない」\n" +
            "しゅんき「じゃあ寝るわ」",
        text: "協力しなさい。",
        kana: "きょうりょくしなさい。",
        romaji: "kyouryoku shinasai",
        reaction_good:
            "えんや「仕方ない、共闘だ」\n" +
            "しゅんき「はいはい」",
        reaction_bad:
            "しゅんき「命令形雑すぎ」\n" +
            "えんや「カリスマが足りないな」",
        images: ["enya.png", "shunki.png"]
    },
    {
        id: "chat_haruka_yoru_morning",
        subtype: "chat",
        group: "1-4",
        sender: "はるか＆よる",
        start_msg:
            "はるか「今日こそ早起きしよー！」\n" +
            "よる「……朝は敵」\n" +
            "はるか「でも太陽きれいだよ？」\n" +
            "よる「夜のが落ち着く」",
        text: "時間を守りましょう。",
        kana: "じかんをまもりましょう。",
        romaji: "jikan o mamorimashou",
        reaction_good:
            "よる「……努力はする」\n" +
            "はるか「えらい！」",
        reaction_bad:
            "よる「その言い方、眠気に刺さる」\n" +
            "はるか「もう少し優しく言お？」",
        images: ["haruka.png", "yoru.png"]
    },
    {
        id: "chat_yukihiko_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆ゆうき",
        start_msg:
            "ゆきひこ「今日の運勢占ってほしいわち！」\n" +
            "ゆうき「いいよ〜。今日は……転ぶ日！」\n" +
            "ゆきひこ「もう転んだわち！！」",
        text: "静かにしてください。",
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ゆうき「はいはーい」\n" +
            "ゆきひこ「反省するわち」",
        reaction_bad:
            "ゆうき「語気が強いと運気下がるよ？」\n" +
            "ゆきひこ「先生こそ注意わち！」",
        images: ["yukihiko.png", "yuuki.png"]
    },
    {
        id: "chat_roi_spy_activity_v2",
        subtype: "chat",
        group: "1-4",
        sender: "ろい＆ありす",
        start_msg:
            "ろい「監視カメラの配置、三箇所に歪みがあるニダ」\n" +
            "ありす「……歪み？」\n" +
            "ろい「死角というより、意図的な配置ミスニダ」\n" +
            "ありす「ふーん……じゃあ、“誰が”“何のために”？」\n" +
            "ろい「そこを今、詰めてるニダ」\n" +
            "ありす「結論急ぐタイプじゃないのは、まあ嫌いじゃない」",
        text: "何を調べているんですか？",
        kana: "なにをしらべているんですか？",
        romaji: "nani o shirabete iru n desu ka",
        reaction_good:
            "ろい「校内の安全確認ニダ」\n" +
            "ありす「先生にはそのくらいで十分」",
        reaction_bad:
            "ありす「質問が広すぎ。焦点ズレてる」\n" +
            "ろい「もう少し観察してから聞くといいニダ」",
        images: ["roi.png", "alice.png"]
    },
    {
        id: "chat_maaya_homecoming_cafe",
        subtype: "chat",
        group: "1-4",
        sender: "まあや＆あかつき",
        start_msg:
            "まあや「この前、夏休みに帰省しとったんよ」\n" +
            "まあや「昔よう通っとった喫茶店があってね……行ってみたら、もう無くなっとった」\n" +
            "あかつき「……そうか」\n" +
            "まあや「時間は流れるんやなぁって、ちょっと思ったんよ」\n" +
            "あかつき「……残るのは、音とか匂いだけだな」\n" +
            "まあや「ふふ、あかつきくんらしい言い方」",
        text: "少し寂しいですね。",
        kana: "すこしさびしいですね。",
        romaji: "sukoshi sabishii desu ne",
        reaction_good:
            "まあや「でも、思い出まで消えるわけやないけん」\n" +
            "あかつき「……それは、救いだな」",
        reaction_bad:
            "あかつき「感想が浅い」\n" +
            "まあや「先生、もう一歩踏み込んで言うてほしかったなぁ」",
        images: ["maaya.png", "akatsuki.png"]
    },
    {
        id: "chat_enya_werewolf_game",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆すい＆あやと",
        start_msg:
            "えんや「人狼ゲーム？オレが仕切る」\n" +
            "すい「はいはい、もう人狼はえんやな」\n" +
            "あやと「え〜？オラ占い師やりてぇ！」\n" +
            "えんや「役職はオレが配る」\n" +
            "すい「独裁じゃん」",
        text: "公平に進めてください。",
        kana: "こうへいにすすめてください。",
        romaji: "kouhei ni susumete kudasai",
        reaction_good:
            "えんや「……チッ、今回は民主制だ」\n" +
            "すい「最初からそうしろよ」",
        reaction_bad:
            "すい「今の言い方、完全に人狼」\n" +
            "あやと「先生、疑われてっぞ！」",
        images: ["enya.png", "sui.png", "ayato.png"]
    },
    {
        id: "chat_yoru_sayaka_night",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆さやか",
        start_msg:
            "よる「夜の教室、落ち着く」\n" +
            "さやか「……人、少ないしね」\n" +
            "よる「昼は眩しすぎ」\n" +
            "さやか「わかる」",
        text: "早く帰りましょう。",
        kana: "はやくかえりましょう。",
        romaji: "hayaku kaerimashou",
        reaction_good:
            "よる「……はーい」\n" +
            "さやか「気をつけて帰りましょ」",
        reaction_bad:
            "よる「急かされると余計帰りたくなくなる」\n" +
            "さやか「言い方、ちょっと怖いです」",
        images: ["yoru.png", "sayaka.png"]
    },
    {
        id: "chat_enya_sns_hero",
        subtype: "chat",
        group: "1-4",
        sender: "えんや＆しゅんき",
        start_msg:
            "えんや「見ろよ、この投稿。いいね三桁いった」\n" +
            "しゅんき「“今日も世界を守った”って何したんだよ」\n" +
            "えんや「通学路で転びそうな奴を助けた」\n" +
            "しゅんき「それ昨日も言ってた」\n" +
            "えんや「毎日世界は危機に瀕してるからな」",
        text: "SNSの使い方に気をつけてください。",
        kana: "えすえぬえすのつかいかたにきをつけてください。",
        romaji: "esu enu esu no tsukaikata ni ki o tsukete kudasai",
        reaction_good:
            "えんや「啓蒙活動だよ、これは」\n" +
            "しゅんき「便利な言い訳だな」",
        reaction_bad:
            "しゅんき「先生、誤字ってる。正義も校正も甘い」\n" +
            "えんや「そこ直さないと説得力ゼロだぞ」",
        images: ["enya.png", "shunki.png"]
    },
    {
        id: "chat_maya_object_attachment",
        subtype: "chat",
        group: "1-4",
        sender: "まや＆たいち",
        start_msg:
            "たいち「その鞄、前から使ってるよね」\n" +
            "まや「うん。まだ使えるし」\n" +
            "たいち「新しいの買えば？」\n" +
            "まや「……せっかく私の物になったのに」\n" +
            "まや「ちゃんと大事にしないと、可哀想でしょ」",
        text: "物は適度に整理しましょう。",
        kana: "ものはてきどにせいりしましょう。",
        romaji: "mono wa tekido ni seiri shimashou",
        reaction_good:
            "まや「捨てる整理と、大事にする整理は違うよ」\n" +
            "たいち「……確かに」",
        reaction_bad:
            "まや「先生、言葉選び雑」\n" +
            "たいち「今の言い方、逆効果です」",
        images: ["maya.png", "taichi.png"]
    },
    {
        id: "chat_yuuki_fortune_taichi",
        subtype: "chat",
        group: "1-4",
        sender: "ゆうき＆たいち",
        start_msg:
            "たいち「最近、失敗する気がして落ち着かなくて」\n" +
            "ゆうき「じゃあ占ってみよっか」\n" +
            "ゆうき「……大丈夫。今は“守り”の運勢」\n" +
            "たいち「守り？」\n" +
            "ゆうき「無理に動かなくていい時期」",
        text: "占いに頼りすぎないように。",
        kana: "うらないにたよりすぎないように。",
        romaji: "uranai ni tayorisuginai you ni",
        reaction_good:
            "たいち「でも、気持ちは楽になりました」\n" +
            "ゆうき「それが一番だよ」",
        reaction_bad:
            "ゆうき「先生、誤字ってる」\n" +
            "たいち「今の指摘、逆に不安煽ってます」",
        images: ["yuuki.png", "taichi.png"]
    },
    {
        id: "chat_yoru_alice_dream",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆ありす",
        start_msg:
            "よる「昨日、空飛ぶ猫の夢見た」\n" +
            "ありす「私は世界が二層構造になってる夢」\n" +
            "よる「楽しそう」\n" +
            "ありす「現実よりマシ」",
        text: "授業中に寝ないでください。",
        kana: "じゅぎょうちゅうにねないでください。",
        romaji: "jugyou chuu ni nenai de kudasai",
        reaction_good:
            "よる「寝る子は育つって言うし」\n" +
            "ありす「脳内処理中なだけ」",
        reaction_bad:
            "ありす「注意文の構造が雑」\n" +
            "よる「説得力なくなるよ、それ」",
        images: ["yoru.png", "alice.png"]
    },
    {
        id: "chat_kaji_uruu_trigger",
        subtype: "chat",
        group: "1-4",
        sender: "かじ＆うるう",
        start_msg:
            "かじ「それ、役に立つ？」\n" +
            "うるう「……何に対して？」\n" +
            "かじ「いや、なんとなく」\n" +
            "うるう「“なんとなく”で測られるの嫌い」",
        text: "協力して作業してください。",
        kana: "きょうりょくしてさぎょうしてください。",
        romaji: "kyouryoku shite sagyou shite kudasai",
        reaction_good:
            "かじ「悪かったって」\n" +
            "うるう「次は言い方考えて」",
        reaction_bad:
            "うるう「先生も指示語多すぎ」\n" +
            "かじ「今の言い方、火に油」",
        images: ["kaji.png", "uruu.png"]
    },
    {
        id: "chat_maya_collection",
        subtype: "chat",
        group: "1-4",
        sender: "まや＆さやか",
        start_msg:
            "まや「……それ、捨てるの？」\n" +
            "さやか「え？あぁ、このメモ帳？もう使ってへんし」\n" +
            "まや「……まだ、気配あるのに」\n" +
            "さやか「気配て……まやちゃん、相変わらずやなぁ」",
        text: "物は整理した方がいいですよ。",
        kana: "ものはせいりしたほうがいいですよ。",
        romaji: "mono wa seiri shita hou ga ii desu yo",
        reaction_good:
            "まや「……はい。でも、時間ください」\n" +
            "さやか「無理せんでええよ」",
        reaction_bad:
            "まや「“整理”と“廃棄”は違う」\n" +
            "さやか「言葉、雑すぎやわ」",
        images: ["maya.png", "sayaka.png"]
    },
    {
        id: "chat_sadama_sui_defense",
        subtype: "chat",
        group: "1-4",
        sender: "さだま＆すい",
        start_msg:
            "すい「正直さ、殴った方が早くね？」\n" +
            "さだま「早い＝安全じゃない」\n" +
            "すい「めんどくさ」\n" +
            "さだま「生き延びたいなら、めんどくさい方選べ」",
        text: "落ち着いて話してください。",
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "すい「……チッ、まぁ聞くわ」\n" +
            "さだま「選択肢は残しとく」",
        reaction_bad:
            "さだま「“落ち着く”の使い方が曖昧」\n" +
            "すい「先生も具体性なくね？」",
        images: ["sadama.png", "sui.png"]
    },
    {
        id: "chat_mikoto_yuuki_fortune",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆ゆうき",
        start_msg:
            "ゆうき「みことちゃんも占う？」\n" +
            "みこと「ええよ。戦う理由、出る？」\n" +
            "ゆうき「……使命感、強いね。背負ってる」\n" +
            "みこと「ふふ、よう分かっとるやん」",
        text: "占いはほどほどに。",
        kana: "うらないはほどほどに。",
        romaji: "uranai wa hodo hodo ni",
        reaction_good:
            "ゆうき「はーい」\n" +
            "みこと「節度は守るで」",
        reaction_bad:
            "みこと「“ほどほど”って便利な逃げ言葉やな」\n" +
            "ゆうき「先生、核心避けた？」",
        images: ["mikoto.png", "yuuki.png"]
    },
    {
        id: "chat_mikoto_roi_silence",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆ろい",
        start_msg:
            "ろい「……気配、消えるの上手いニダ」\n" +
            "みこと「訓練や」\n" +
            "ろい「学校で要らん技術」\n" +
            "みこと「生き残るのに要る」",
        text: "物騒な話はやめてください。",
        kana: "ぶっそうなはなしはやめてください。",
        romaji: "bussona hanashi wa yamete kudasai",
        reaction_good:
            "みこと「冗談や」\n" +
            "ろい「……了解ニダ」",
        reaction_bad:
            "ろい「言葉の切り取りが雑ニダ」\n" +
            "みこと「核心ズラすの下手やな」",
        images: ["mikoto.png", "roi.png"]
    },
    {
        id: "chat_yukihiko_ayato_graffiti",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと",
        start_msg:
            "ゆきひこ「この落書き団、最強わち！」\n" +
            "あやと「オラも混ざる！」\n" +
            "ゆきひこ「納豆は禁止わち！！」",
        text: "授業中です。",
        kana: "じゅぎょうちゅうです。",
        romaji: "jugyou chuu desu",
        reaction_good:
            "あやと「はーい」\n" +
            "ゆきひこ「反省わち」",
        reaction_bad:
            "あやと「省略しすぎ！」\n" +
            "ゆきひこ「先生、圧が強いわち」",
        images: ["yukihiko.png", "ayato.png"]
    },
    {
        id: "chat_treasure_hunt_trio",
        subtype: "chat",
        group: "1-4",
        sender: "ゆきひこ＆あやと＆かじ",
        start_msg:
            "ゆきひこ「宝の地図、完成わち！」\n" +
            "あやと「どれどれ？オラの机がスタートか！」\n" +
            "かじ「ゴールは……ロッカーの裏！完璧！」\n" +
            "ゆきひこ「罠も仕掛けるわち！」",
        text: "何をしているんですか？",
        kana: "なにをしているんですか？",
        romaji: "nani o shite iru n desu ka",
        reaction_good:
            "かじ「宝探し！」\n" +
            "あやと「今から最終局面！」\n" +
            "ゆきひこ「大人は立入禁止わち！」",
        reaction_bad:
            "あやと「主語抜けてる！」\n" +
            "かじ「先生、説明不足！」\n" +
            "ゆきひこ「曖昧わち！」",
        images: ["yukihiko.png", "ayato.png", "kaji.png"]
    },
    {
        id: "chat_kaji_sleep_class",
        subtype: "chat",
        group: "1-4",
        sender: "かじ＆たいち",
        start_msg:
            "たいち「……かじ、起きてる？」\n" +
            "かじ「起きてる……夢の中で」\n" +
            "たいち「教科書、盾にするのやめて」\n" +
            "かじ「合理的防御なんだけど」",
        text: "授業に集中してください。",
        kana: "じゅぎょうにしゅうちゅうしてください。",
        romaji: "jugyou ni shuuchuu shite kudasai",
        reaction_good:
            "かじ「はーい……」\n" +
            "たいち「ちゃんと起きなよ」",
        reaction_bad:
            "たいち「注意の対象が曖昧です」\n" +
            "かじ「オレだけ狙われてない？」",
        images: ["kaji.png", "taichi.png"]
    },
    {
        id: "chat_mikoto_enya_pride",
        subtype: "chat",
        group: "1-4",
        sender: "みこと＆えんや",
        start_msg:
            "えんや「オレは誰の指示も受けねぇ」\n" +
            "みこと「別に命令する気はないで？」\n" +
            "えんや「……じゃあ何だ」\n" +
            "みこと「選択肢を教えとるだけや」",
        text: "仲良くしてください。",
        kana: "なかよくしてください。",
        romaji: "nakayoku shite kudasai",
        reaction_good:
            "えんや「フン……」\n" +
            "みこと「無理強いはせえへん」",
        reaction_bad:
            "みこと「“仲良く”は抽象的すぎや」\n" +
            "えんや「それで支配した気？」",
        images: ["mikoto.png", "enya.png"]
    },
    {
        id: "chat_shunki_red_mark",
        subtype: "chat",
        group: "1-4",
        sender: "しゅんき＆ありす",
        start_msg:
            "しゅんき「赤点ってさ、別に悪くなくね？」\n" +
            "ありす「目的が“点”ならね」\n" +
            "しゅんき「やりがいないし」\n" +
            "ありす「怠けたいって言えば？」",
        text: "反省してください。",
        kana: "はんせいしてください。",
        romaji: "hansei shite kudasai",
        reaction_good:
            "しゅんき「はいはい」\n" +
            "ありす「形式的だね」",
        reaction_bad:
            "ありす「主語がない」\n" +
            "しゅんき「誰が反省？」",
        images: ["shunki.png", "alice.png"]
    },
    {
        id: "chat_alice_roi_cards",
        subtype: "chat",
        group: "1-4",
        sender: "ありす＆ろい",
        start_msg:
            "ろい「次、引くニダ」\n" +
            "ありす「その指、迷いある」\n" +
            "ろい「……観察しすぎニダ」\n" +
            "ありす「構造が見えるだけ」",
        text: "遊んでいないでください。",
        kana: "あそんでいないでください。",
        romaji: "asonde inaide kudasai",
        reaction_good:
            "ろい「休憩ニダ」\n" +
            "ありす「一時停止」",
        reaction_bad:
            "ありす「状況把握が遅い」\n" +
            "ろい「先生、流れ読めてないニダ」",
        images: ["alice.png", "roi.png"]
    },
    {
        id: "chat_yoru_late",
        subtype: "chat",
        group: "1-4",
        sender: "よる＆はるか",
        start_msg:
            "はるか「また遅刻〜？」\n" +
            "よる「朝は無理……」\n" +
            "はるか「夜更かし？」\n" +
            "よる「生存時間帯が違う」",
        text: "時間を守りましょう。",
        kana: "じかんをまもりましょう。",
        romaji: "jikan o mamorimashou",
        reaction_good:
            "よる「努力はする」\n" +
            "はるか「えらい！」",
        reaction_bad:
            "よる「精神論すぎ」\n" +
            "はるか「言い方きついよ〜」",
        images: ["yoru.png", "haruka.png"]
    },
    {
    id: "chat_sadama_logic_re",
    subtype: "chat",
    group: "1-4",
    sender: "さだま＆みこと",
    start_msg:
        "みこと「面倒やな、これ」\n" +
        "さだま「工程が多いだけだ。減らせる部分はある」\n" +
        "みこと「ほな切る？」\n" +
        "さだま「切らなくていい。優先度を下げればいい」",
    text: "表現に気をつけてください。",
    kana: "ひょうげんにきをつけてください。",
    romaji: "hyougen ni ki o tsukete kudasai",
    reaction_good:
        "さだま「了解しました」\n" +
        "みこと「さすがやな」",
    reaction_bad:
        "みこと「先生、指摘が雑やで」\n" +
        "さだま「意図は理解できるが、言い方が弱い」",
    images: ["sadama.png", "mikoto.png"]
    },

    {
    id: "chat_sadama_yoru_re",
    subtype: "chat",
    group: "1-4",
    sender: "さだま＆よる",
    start_msg:
        "さだま「遅刻が続いてる」\n" +
        "よる「夜型やけん無理」\n" +
        "さだま「全部は求めない。週三でいい」\n" +
        "よる「……それなら現実的」",
    text: "改善しましょう。",
    kana: "かいぜんしましょう。",
    romaji: "kaizen shimashou",
    reaction_good:
        "さだま「できる範囲で構わない」\n" +
        "よる「それなら頑張れる」",
    reaction_bad:
        "よる「ふわっとしすぎ」\n" +
        "さだま「具体性が足りない指示だ」",
    images: ["sadama.png", "yoru.png"]
    },

    {
    id: "chat_sadama_taichi_re",
    subtype: "chat",
    group: "1-4",
    sender: "さだま＆たいち",
    start_msg:
        "さだま「全部正解を選ばなくていい」\n" +
        "たいち「でも失敗すると……」\n" +
        "さだま「失敗しても修正できる」\n" +
        "たいち「……それなら」",
    text: "前向きに考えなさい。",
    kana: "まえむきにかんがえなさい。",
    romaji: "maemuki ni kangaenasai",
    reaction_good:
        "たいち「少し楽になりました」\n" +
        "さだま「それで十分だ」",
    reaction_bad:
        "さだま「抽象度が高すぎる」\n" +
        "たいち「すみません……」",
    images: ["sadama.png", "taichi.png"]
    },

    {
    id: "chat_sayaka_yoru",
    subtype: "chat",
    group: "1-4",
    sender: "さやか＆よる",
    start_msg:
        "さやか「今日も眠そうやね」\n" +
        "よる「夜は元気やけどな」\n" +
        "さやか「無理せんでええよ」\n" +
        "よる「……優しすぎ」",
    text: "仲良くしなさい。",
    kana: "なかよくしなさい。",
    romaji: "nakayoku shinasai",
    reaction_good:
        "さやか「うん……」\n" +
        "よる「まあ、悪くない」",
    reaction_bad:
        "よる「急に先生感出すやん」\n" +
        "さやか「距離感が近すぎます……」",
    images: ["sayaka.png", "yoru.png"]
    },

    {
    id: "chat_sayaka_alice",
    subtype: "chat",
    group: "1-4",
    sender: "さやか＆ありす",
    start_msg:
        "さやか「……起きてる？」\n" +
        "ありす「半分」\n" +
        "さやか「それでもええと思う」\n" +
        "ありす「……肯定されると困る」",
    text: "授業中ですよ。",
    kana: "じゅぎょうちゅうですよ。",
    romaji: "jugyouchuu desu yo",
    reaction_good:
        "ありす「一応聞いてる」\n" +
        "さやか「なら大丈夫です」",
    reaction_bad:
        "ありす「テンプレ注意」\n" +
        "さやか「空気が硬いです……」",
    images: ["sayaka.png", "alice.png"]
    },
    {
    id: "chat_sayaka_uru",
    subtype: "chat",
    group: "1-4",
    sender: "さやか＆うるう",
    start_msg:
        "さやか「その工具、すごいね」\n" +
        "うるう「手に馴染むだけ」\n" +
        "さやか「……素敵やと思う」\n" +
        "うるう「そう言われると困る」",
    text: "集中してください。",
    kana: "しゅうちゅうしてください。",
    romaji: "shuuchuu shite kudasai",
    reaction_good:
        "うるう「はいはい」\n" +
        "さやか「ごめんなさい……」",
    reaction_bad:
        "うるう「急に言われても」\n" +
        "さやか「言い方が強いです……」",
    images: ["sayaka.png", "uruu.png"]
    },
    // --- 2-1 ---
    { 
        id: "chat_suibeibu_after_teacher_fix",
        subtype: "chat",
        group: "2-1", // 修正！
        sender: "水兵部・現場組",
        start_msg:
            "けつい「点検の件、先生にも共有しとくけぇ」\n" +
            "みぎわ「了解〜。一応ちゃんとしとこ」\n" +
            "りょうご「写真、時系列順に整理して送る」" ,// ただの整理じゃなくTi的な秩序
        text: "任せます。", 
        reaction_good:
            "（先生がグループを退出しました）\n" +
            "みぎわ「……っはー！やっと抜けた！」\n" +
            "けつい「お前なw まぁ空気変わるわな」\n" +
            "りょうご「……正直、監視されてるような圧はあった」\n"+ // Ni的な「圧」の感知
            "みぎわ「で？ぶっちゃけ今日の点検どうなん」\n" +
            "けつい「潮が悪い。無理はせん」\n" +
            "りょうご「同意。計器の数値も、いつもと微妙にズレてる」" ,// Niの違和感+Tiのデータ
        reaction_bad:
            "みぎわ「先生まだ見とるん？！じゃあ黙るわ！」\n" +
            "けつい「おいw」",
        images: ["ketsui.png", "migiwa.png", "ryogo.png"]
    }, 
    { 
        id: "chat_suigun_fix",
        subtype: "chat", 
        group: "2-1", // 修正！
        sender: "🌊 水兵部・作戦会議",
        images: ["ketsui.png", "migiwa.png", "ryogo.png"], 
        start_msg: 
            "けつい「次の航海、ルートどうする？」\n" +
            "みぎわ「うちは南の島がええ！アジサシ見たい！」\n" +
            "りょうご「……今の燃料備蓄だと、南は帰還率が下がる」", // リスク計算（Ni-Ti）
        text: "安全第一で計画を立ててください。", 
        reaction_good: 
            "けつい「お、ええ判断じゃ！」\n" +
            "みぎわ「さすが先生、わかっとる〜！」\n" +
            "りょうご「……妥当な判断。冒険は準備が整ってから」",
        reaction_bad: 
            "けつい「おっと、舵取りミスか？」\n" +
            "みぎわ「先生、それ座礁コースよ〜w」\n" +
            "りょうご「……航路、再計算した方がいいと思う」"
    }, 
    { 
        id: "chat_top_rankers_fix", 
        subtype: "chat", 
        group: "2-1", // 修正！
        sender: "成績上位グル",
        start_msg: 
            "ともき「次の模試、全体の底上げは必要だろ」\n" +
            "あきら「平均の話しても意味ない。トップが突き抜ければいい」\n"+ // ENTJらしさ追加
            "れい「でも全体が上がれば、クラスの評価も安定するわよ」\n" + 
            "りょうご「正規分布的には、底上げした方が全体の偏差値効率はいい」", // Ti全開ｗ
        text: "無理に競わず、それぞれの強みを活かそう。", 
        reaction_good: 
            "れい「まぁ、悪くない考えね」\n" +
            "ともき「現実的だ」\n" +
            "りょうご「納得。無駄な摩擦は避けるべき」" ,// Tiの省エネ思考
        reaction_bad: 
            "あきら「……甘いな」\n" +
            "ともき「競争は必要だろ」\n" +
            "れい「価値観の違い、ってやつね」",
        images: ["rei.png", "tomoki.png", "akira.png", "ryogo.png"]
    }, 
    { 
        id: "chat_suibeibu_field_observe", 
        subtype: "chat", 
        group: "2-1",
        sender: "水兵部・現場組",
        start_msg: 
            "けつい「今日の放課後、船の点検するけぇの。集合な」\n" +
            "みぎわ「りょーかい！……って言いたいけど、時間ちょい押してない？」\n" +
            "りょうご「燃料計の誤差、昨日直しといた。今日は短時間で済むと思う」\n" +
            "れい「……ふぅん。ちゃんと効率上がってるのね」",
        text: "今日は予定通り点検を進めてください。", 
        kana: "きょうはよていどおりてんけんをすすめてください。", 
        romaji: "kyou wa yotei doori tenken o susumete kudasai", 
        reaction_good: 
            "けつい「了解じゃ。あとで進捗、見といてもええよ」\n" +
            "りょうご「写真まとめとく」\n" +
            "れい「流れ、きれいじゃない。悪くないわ」",
        reaction_bad: 
            "みぎわ「え、今それ言う？！空気読んで先生！」\n" +
            "けつい「まぁまぁ、焦らんでええ」\n" +
            "りょうご「工程的には問題ないけどな」\n" +
            "れい「……一気に緊張走ったわね」",
        images: ["ketsui.png", "migiwa.png", "ryogo.png", "rei.png"]
    },
    { 
        id: "chat_suibeibu_field_observe", 
        subtype: "chat", 
        group: "2-1",
        sender: "水兵部・現場組",
        start_msg: 
            "けつい「今日の放課後、船の点検するけぇの。集合な」\n" +
            "みぎわ「りょーかい！……って言いたいけど、時間ちょい押してない？」\n" +
            "りょうご「燃料計の誤差、昨日直しといた。今日は短時間で済むと思う」\n" +
            "れい「……ふぅん。ちゃんと効率上がってるのね」",
        text: "今日は予定通り点検を進めてください。", 
        kana: "きょうはよていどおりてんけんをすすめてください。", 
        romaji: "kyou wa yotei doori tenken o susumete kudasai", 
        reaction_good: 
            "けつい「了解じゃ。あとで進捗、見といてもええよ」\n" +
            "りょうご「写真まとめとく」\n" +
            "れい「流れ、きれいじゃない。悪くないわ」",
        reaction_bad: 
            "みぎわ「え、今それ言う？！空気読んで先生！」\n" +
            "けつい「まぁまぁ、焦らんでええ」\n" +
            "りょうご「工程的には問題ないけどな」\n" +
            "れい「……一気に緊張走ったわね」",
        images: ["ketsui.png", "migiwa.png", "ryogo.png", "rei.png"]
    },
    { 
        id: "chat_suibeibu_inner", 
        subtype: "chat", 
        group: "2-1",
        sender: "水兵部",
        start_msg: 
            "みぎわ「今日の風、なんか嫌な感じせん？」\n" +
            "けつい「潮がズレとるな。無理せんほうがええ」\n" +
            "りょうご「数値的にも横流れ強い」",
        text: "無理はしないで、状況を見て判断しよう。", 
        kana: "むりはしないで、じょうきょうをみてはんだんしよう。", 
        romaji: "muri wa shinaide, joukyou o mite handan shiyou", 
        reaction_good: 
            "けつい「ほら、意見一致じゃ」\n" +
            "みぎわ「珍し！全会一致とか！」",
        reaction_bad: 
            "みぎわ「それ今さら言わんでもええじゃろ！」\n" +
            "りょうご「判断材料としては遅いな」",
        images: ["ketsui.png", "migiwa.png", "ryogo.png"]
    },
    { 
        id: "chat_rei_akira_duel",
        subtype: "chat",
        group: "2-1",
        sender: "れい＆あきら",
        start_msg:
            "あきら「……で、1位様は今回も余裕か？」\n" +
            "れい「余裕かどうかは関係ないわ。結果が全て」\n" +
            "あきら「結果“だけ”見てるのが気に入らない」\n" +
            "れい「過程に酔うのは三流のやることよ」\n" +
            "あきら「……言うな」\n" +
            "れい「でも、あなたの詰め方は嫌いじゃないわ」",
        text: "冷静に話し合おう。", 
        kana: "れいせいにはなしあおう。",
        romaji: "reisei ni hanashiaou",
        reaction_good:
            "れい「……ふふ。先生、今いないんだけど？」\n" +
            "あきら「空気読め。これは殴り合いだ」",
        reaction_bad:
            "あきら「今の入力、論点ズレてる」\n" +
            "れい「介入するなら、もっと的確にお願い」",
        images: ["rei.png", "akira.png"]
    },
    { 
        id: "chat_top3",
        subtype: "chat",
        group: "2-1",
        sender: "トップ3",
        start_msg:
            "ともき「次の模試、全体の平均が下がってる」\n" +
            "あきら「だから言っただろ。甘やかすな」\n" +
            "れい「競争だけ煽っても、質は上がらないわ」\n" +
            "ともき「……1位と3位が真逆だな」\n" +
            "あきら「だから面白い」\n" +
            "れい「ふふ、否定しないわ」",
        text: "全体を引き上げる方法を考えて。", 
        kana: "ぜんたいをひきあげるほうほうをかんがえて。",
        romaji: "zentai o hikiageru houhou o kangaete",
        reaction_good:
            "ともき「役割分担だな」\n" +
            "れい「合理的ね」\n" +
            "あきら「……まぁ、それならいい」",
        reaction_bad:
            "あきら「曖昧すぎる」\n" +
            "れい「具体性に欠けるわ」\n" +
            "ともき「指示として弱い」",
        images: ["rei.png", "tomoki.png", "akira.png"]
    },
    { 
        id: "chat_ryogo_backstage",
        subtype: "chat",
        group: "2-1",
        sender: "りょうご",
        start_msg:
            "りょうご「……僕の感覚なんだけど」\n" +
            "りょうご「今の流れ、このまま行くと一回どこかで詰まる」\n" +
            "りょうご「みぎわは気配で動くし、けついは経験で判断する」\n" +
            "りょうご「それ自体は悪くないけど、噛み合ってない」\n" +
            "りょうご「……嫌な予感がする時って、大体当たるんだ」",
        text: "みんな大事な仲間だよ。", 
        kana: "みんなだいじななかまだよ。",
        romaji: "minna daiji na nakama da yo",
        reaction_good:
            "りょうご「……うん、それは前提」\n" +
            "りょうご「だからこそ、衝突する前に軌道修正したい」",
        reaction_bad:
            "りょうご「……そういう話じゃない」\n" +
            "りょうご「今は、感情の問題じゃない」",
        images: ["ryogo.png"]
    },
    { 
        id: "chat_akira_tomoki_duel",
        subtype: "chat",
        group: "学年成績上位",
        sender: "あきら＆ともき",
        start_msg:
            "ともき「また平均下げたな、牧羊犬」\n" +
            "あきら「うるせぇ。無駄な層を切らないからだ」\n" +
            "ともき「切る前提で話すな。オレは使えるようにする」\n" +
            "あきら「その甘さが全体を鈍らせる」\n" +
            "ともき「吠えてろよ、犬男。結果出してから言え」\n" +
            "あきら「……番犬がいなきゃ群れは崩壊する」",
        text: "冷静に議論しなさい。", 
        kana: "れいせいにぎろんしなさい。",
        romaji: "reisei ni giron shinasai",
        reaction_good:
            "ともき「チッ……まぁ、続けるか」\n" +
            "あきら「オレは最初から冷静だ」",
        reaction_bad:
            "ともき「割り込み方が雑だ」\n" +
            "あきら「論点がズレてる」",
        images: ["akira.png", "tomoki.png"]
    },
    { 
        id: "chat_ryogo_rei_quiet",
        subtype: "chat",
        group: "水兵部・知性",
        sender: "りょうご＆れい",
        start_msg:
            "りょうご「……最近、少し流れが歪んでる気がする」\n" +
            "れい「歪み、か。具体的には？」\n" +
            "りょうご「誰も間違ってないのに、噛み合ってない」\n" +
            "れい「ふふ、感覚的だけど的確ね」\n" +
            "れい「論理の前に、配置の問題かも」",
        text: "続けて。", 
        kana: "つづけて。",
        romaji: "tsuzukete",
        reaction_good:
            "りょうご「僕も、そう思う」\n" +
            "れい「やっぱり。じゃあ修正点は――」",
        reaction_bad:
            "りょうご「……いや、今はいい」\n" +
            "れい「無理に言語化しなくてもいいわ」",
        images: ["ryogo.png", "rei.png"]
    },
    { 
        id: "chat_tomoki_ketsui_field",
        subtype: "chat",
        group: "水兵部",
        sender: "ともき＆けつい",
        start_msg:
            "ともき「現場判断に任せすぎだ」\n" +
            "けつい「現場知らん机上論は沈むけぇ」\n" +
            "ともき「だから統制が要る」\n" +
            "けつい「だから信頼が要るんじゃ」",
        text: "どっちも正しい。", 
        kana: "どっちもただしい。",
        romaji: "docchi mo tadashii",
        reaction_good:
            "ともき「……だな」\n" +
            "けつい「ほう。ええこと言うじゃん」",
        reaction_bad:
            "ともき「曖昧だ」\n" +
            "けつい「中途半端じゃのう」",
        images: ["tomoki.png", "ketsui.png"]
    },
    { 
        id: "chat_migiwa_rei",
        subtype: "chat",
        group: "2-2",
        sender: "みぎわ＆れい",
        start_msg:
            "みぎわ「れいちゃんってさ、全部見えとるじゃろ？」\n" +
            "れい「そんなことないわ」\n" +
            "みぎわ「でも黙っとる時が一番怖い」\n" +
            "れい「……それ、褒め言葉？」",
        text: "仲良さそうだね。", 
        kana: "なかよさそうだね。",
        romaji: "nakayosou da ne",
        reaction_good:
            "みぎわ「まあね！」\n" +
            "れい「ええ、悪くない関係よ」",
        reaction_bad:
            "みぎわ「気遣いすぎた？」\n" +
            "れい「少しだけ」",
        images: ["migiwa.png", "rei.png"]
    },
    { 
        id: "chat_fuwa_introvert",
        subtype: "chat",
        group: "ふわ内向",
        sender: "ゆめかわ組",
        start_msg:
            "あめり「……あの……おはよう、です……🐰」\n" +
            "ゆこ「今日、静かでいいですね」\n" +
            "ざくろ「……」\n" +
            "まりあ「ふふ、落ち着くね✨」",
        text: "今日はゆっくりで大丈夫だよ。", 
        kana: "きょうはゆっくりでだいじょうぶだよ。",
        romaji: "kyou wa yukkuri de daijoubu da yo",
        reaction_good:
            "あめり「……ほっ」\n" +
            "ゆこ「安心しました」\n" +
            "ざくろ「……了解」\n" +
            "まりあ「ありがとうございます」",
        reaction_bad:
            "（全員が一瞬、黙る）",
        images: ["ameri.png", "yuko.png", "zakuro.png", "maria.png"]
    },
    { 
        id: "chat_teacher_out",
        subtype: "chat",
        group: "2-2",
        sender: "クラス",
        start_msg:
            "れい「先生、ここまでで大丈夫です」\n" +
            "ともき「了解です」\n" +
            "あきら「……はい」",
        text: "じゃあ、任せたよ。", 
        kana: "じゃあ、まかせたよ。",
        romaji: "jaa makaseta yo",
        reaction_good:
            "（先生が退出しました）\n" +
            "ともき「……で？」\n" +
            "あきら「やっと本題だな」\n" +
            "れい「話、戻しましょう」",
        reaction_bad:
            "（先生が退出しました）\n" +
            "ともき「ちっ、時間の無駄だった」\n" +
            "あきら「建前会議」",
        images: ["rei.png", "tomoki.png", "akira.png"]
    },
    { 
        id: "chat_top3_hell",
        subtype: "chat",
        group: "学年成績上位",
        sender: "れい＆あきら＆ともき",
        start_msg:
            "ともき「結論から言う。今の配分は非効率だ」\n" +
            "あきら「非効率なのは、無能を残してるからだ」\n" +
            "れい「二人とも、前提が違うわ」\n" +
            "ともき「違わない。結果がすべてだ」\n" +
            "あきら「結果を出せない奴は切る。それだけ」\n" +
            "れい「切った後の責任は誰が取るの？」",
        text: "落ち着いて。", 
        kana: "おちついて。",
        romaji: "ochitsuite",
        reaction_good:
            "ともき「……続ける」\n" +
            "あきら「話は終わってない」\n" +
            "れい「ええ。むしろ、ここから」",
        reaction_bad:
            "ともき「感情論は要らない」\n" +
            "あきら「同情で回る組織は腐る」\n" +
            "れい「……二人とも、聞く気がないのね」",
        images: ["rei.png", "akira.png", "tomoki.png"]
    },
    { 
        id: "chat_ameri_mikina",
        subtype: "chat",
        group: "女子",
        sender: "あめり＆みきな",
        start_msg:
            "みきな「そのうさぎのキーホルダー、かわいいね」\n" +
            "あめり「……え、あ……ありがとう……🐰」\n" +
            "みきな「緊張しすぎじゃない？」\n" +
            "あめり「して……るかも……」",
        text: "仲良さそうだね。", 
        kana: "なかよさそうだね。",
        romaji: "nakayosou da ne",
        reaction_good:
            "みきな「でしょ？」\n" +
            "あめり「……うん」",
        reaction_bad:
            "あめり「……」\n" +
            "みきな「……あ、ごめん」",
        images: ["ameri.png", "mikina.png"]
    },
    { 
        id: "chat_maria_yuko",
        subtype: "chat",
        group: "女子",
        sender: "まりあ＆ゆこ",
        start_msg:
            "まりあ「今日は少し静かですね」\n" +
            "ゆこ「……落ち着いてて、助かります」\n" +
            "まりあ「無理してない？」\n" +
            "ゆこ「……少しだけ」",
        text: "大丈夫そう？", 
        kana: "だいじょうぶそう？",
        romaji: "daijoubu sou?",
        reaction_good:
            "ゆこ「今は」\n" +
            "まりあ「よかった」",
        reaction_bad:
            "ゆこ「……ごめんなさい」\n" +
            "まりあ「謝らなくていいのよ」",
        images: ["maria.png", "yuko.png"]
    },
    { 
        id: "chat_mikina_makishi",
        subtype: "chat",
        group: "2-1",
        sender: "みきな＆まきし",
        start_msg:
            "みきな「……ねぇ」\n" +
            "まきし「なに？」\n" +
            "みきな「またマヨかけてるでしょ」\n" +
            "まきし「え？普通じゃない？」\n" +
            "みきな「普通じゃないから言ってるんだけど」\n" +
            "まきし「え〜？人生楽しまなきゃ損じゃん！」",
        text: "ほどほどにしなさい。", 
        kana: "ほどほどにしなさい。",
        romaji: "hodohodo ni shinasai",
        reaction_good:
            "まきし「はーい先生！」\n" +
            "みきな「……絶対減らさないよね」",
        reaction_bad:
            "みきな「ほら、先生にも言われた」\n" +
            "まきし「え〜？厳しくない？」",
        images: ["mikina.png", "makishi.png"]
    },
    { 
        id: "chat_makishi_rei",
        subtype: "chat",
        group: "2-1",
        sender: "まきし＆れい",
        start_msg:
            "まきし「ケチャップとマヨ、一緒が最強じゃん？」\n" +
            "れい「それは味覚の怠慢よ」\n" +
            "まきし「え、喧嘩売ってる？」\n" +
            "れい「事実を述べているだけよ」\n" +
            "まきし「人生、合理性だけじゃないよ？」\n" +
            "れい「だからこそ、基準が必要なの」",
        text: "食の好みは自由だよ。", 
        kana: "しょくのこのみはじゆうだよ。",
        romaji: "shoku no konomi wa jiyuu da yo",
        reaction_good:
            "まきし「だよね！」\n" +
            "れい「……先生がそう言うなら」",
        reaction_bad:
            "れい「論点が逸れてます」\n" +
            "まきし「え、今いい話してたよ？」",
        images: ["makishi.png", "rei.png"]
    },
    { 
        id: "chat_hitori_iseri",
        subtype: "chat",
        group: "2-1",
        sender: "ひとり＆いせり",
        start_msg:
            "ひとり「……左腕が疼く」\n" +
            "いせり「またかいな！」\n" +
            "ひとり「封印が……」\n" +
            "いせり「それ成長痛ちゃう？」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "ひとり「……了解」\n" +
            "いせり「はーい」",
        reaction_bad:
            "いせり「先生もノリ悪いなぁ！」\n" +
            "ひとり「貴様も敵か……」",
        images: ["hitori.png", "iseri.png"]
    },
    { 
        id: "chat_shogo_ameri",
        subtype: "chat",
        group: "2-1",
        sender: "しょうご＆あめり",
        start_msg:
            "しょうご「寒くなってきたね」\n" +
            "あめり「……うん……」\n" +
            "しょうご「温かいの飲む？」\n" +
            "あめり「……ありがとう」",
        text: "いい雰囲気だね。", 
        kana: "いいふんいきだね。",
        romaji: "ii funiki da ne",
        reaction_good:
            "しょうご「そうかな？」\n" +
            "あめり「……えへ」",
        reaction_bad:
            "あめり「……」\n" +
            "しょうご「あ、ごめん」",
        images: ["shogo.png", "ameri.png"]
    },
    { 
        id: "chat_rei_ryogo",
        subtype: "chat",
        group: "2-1",
        sender: "れい＆りょうご",
        start_msg:
            "れい「あなたの視点、興味深いわ」\n" +
            "りょうご「僕は、全体の流れを見てるだけだよ」\n" +
            "れい「未来を読む、という意味で？」\n" +
            "りょうご「……結果として、そうなることもあるな」",
        text: "難しい話してるね。", 
        kana: "むずかしいはなししてるね。",
        romaji: "muzukashii hanashi shiteru ne",
        reaction_good:
            "れい「説明しましょうか」\n" +
            "りょうご「先生向けに噛み砕きます」",
        reaction_bad:
            "りょうご「……今は省略します」\n" +
            "れい「時間が足りませんね」",
        images: ["rei.png", "ryogo.png"]
    },
    { 
        id: "chat_kotori_hitori",
        subtype: "chat",
        group: "2-1",
        sender: "ことり＆ひとり",
        start_msg:
            "ことり「だる〜…今日もう帰らん？」\n" +
            "ひとり「フッ……俺の左腕が騒いでいる」\n" +
            "ことり「それ昨日も言っとったやん」\n" +
            "ひとり「昨日とは質が違う」\n" +
            "ことり「知らんがな」",
        text: "ちゃんと授業受けなさい。", 
        kana: "ちゃんとじゅぎょううけなさい。",
        romaji: "chanto jugyou ukenasai",
        reaction_good:
            "ことり「はーいはい」\n" +
            "ひとり「……封印するか」",
        reaction_bad:
            "ことり「先生ノリ悪〜」\n" +
            "ひとり「貴様も敵か」",
        images: ["kotori.png", "hitori.png"]
    },
    { 
        id: "chat_kotori_akira",
        subtype: "chat",
        group: "2-1",
        sender: "ことり＆あきら",
        start_msg:
            "ことり「頑張る意味ってさ、ある？」\n" +
            "あきら「ないなら落ちろ」\n" +
            "ことり「極端すぎん？」\n" +
            "あきら「中途半端が一番邪魔だ」\n" +
            "ことり「うわ、牧羊犬こわ」",
        text: "落ち着いて話しなさい。", 
        kana: "おちついてはなしなさい。",
        romaji: "ochitsuite hanashi nasai",
        reaction_good:
            "あきら「……続ける」\n" +
            "ことり「まぁ聞くだけ聞くわ」",
        reaction_bad:
            "あきら「論点が浅い」\n" +
            "ことり「それ褒めてる？」",
        images: ["kotori.png", "akira.png"]
    },
    { 
        id: "chat_jiha_tomoki",
        subtype: "chat",
        group: "2-1",
        sender: "じは＆ともき",
        start_msg:
            "じは「なーなー、ともき」\n" +
            "ともき「今忙しい」\n" +
            "じは「今ヒマでしょ」\n" +
            "ともき「ヒマでもお前の相手はしない」\n" +
            "じは「うわ冷たっ」",
        text: "仲良くしなさい。", 
        kana: "なかよくしなさい。",
        romaji: "nakayoku shinasai",
        reaction_good:
            "ともき「努力はする」\n" +
            "じは「言い方〜！」",
        reaction_bad:
            "ともき「指示が抽象的だ」\n" +
            "じは「めんどくさ〜！」",
        images: ["jiha.png", "tomoki.png"]
    },
    { 
        id: "chat_ryogo_yuko",
        subtype: "chat",
        group: "2-1",
        sender: "りょうご＆ゆこ",
        start_msg:
            "りょうご「このクラス、流れ変わりそうだね」\n" +
            "ゆこ「……私もそう思ってた」\n" +
            "りょうご「たぶん中心は、あきらとともき」\n" +
            "ゆこ「衝突は避けられないね」",
        text: "何の話？", 
        kana: "なんのはなし？",
        romaji: "nan no hanashi?",
        reaction_good:
            "りょうご「今は言わない」\n" +
            "ゆこ「そのうち分かるよ」",
        reaction_bad:
            "りょうご「説明すると長い」\n" +
            "ゆこ「今は黙っとこ」",
        images: ["ryogo.png", "yuko.png"]
    },
    { 
        id: "chat_migiwa_maria",
        subtype: "chat",
        group: "2-1",
        sender: "みぎわ＆まりあ",
        start_msg:
            "みぎわ「また男子らが騒いどる…」\n" +
            "まりあ「ふふ、大変そうね」\n" +
            "みぎわ「放っとくと事故るけぇ」\n" +
            "まりあ「神様に祈っておくよ✨」",
        text: "頼りにしてるよ。", 
        kana: "たよりにしてるよ。",
        romaji: "tayori ni shiteru yo",
        reaction_good:
            "みぎわ「任せて！」\n" +
            "まりあ「がんばります」",
        reaction_bad:
            "みぎわ「先生も手伝って！」\n" +
            "まりあ「あらあら…」",
        images: ["migiwa.png", "maria.png"]
    },
    { 
        id: "chat_hidden_ni_triangle",
        subtype: "chat",
        group: "2−1",
        sender: "りょうご＆あきら＆れい",
        start_msg:
            "りょうご「……先生、出たね」\n" +
            "あきら「今のうちだ。さっきの設問、構造が甘い」\n" +
            "れい「甘いというより、前提条件がズレてるわ」\n" +
            "りょうご「たぶん意図は評価基準の揺さぶりだと思う」\n" +
            "あきら「だったら尚更、切り分けが必要だ」\n" +
            "れい「結論を急ぐと、誤差が残るもの」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "りょうご「……了解」\n" +
            "れい「続きは後でね」\n" +
            "あきら「覚えとく」",
        reaction_bad:
            "あきら「遮る意味がない」\n" +
            "れい「今のは必要な確認よ」\n" +
            "りょうご「ノイズが増えただけだね」",
        images: ["ryogo.png", "akira.png", "rei.png"]
    },
    { 
        id: "chat_miriya_formal_strike",
        subtype: "chat",
        group: "2−1",
        sender: "みりや＆ひとり",
        start_msg:
            "ひとり「……左腕が疼く。これは何か起きるな」\n" +
            "みりや「そのような根拠のない発言はお控えください」\n" +
            "ひとり「は？ノリだろ」\n" +
            "みりや「場の進行を乱しております」\n" +
            "ひとり「チッ……堅いな」",
        text: "落ち着きなさい。", 
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "みりや「ご協力、感謝いたします」\n" +
            "ひとり「……はいはい」",
        reaction_bad:
            "みりや「その態度は看過できません」\n" +
            "ひとり「説教かよ」",
        images: ["miriya.png", "hitori.png"]
    },
    { 
        id: "chat_rei_zakuro_silence",
        subtype: "chat",
        group: "2−1",
        sender: "れい＆ざくろ",
        start_msg:
            "ざくろ「……この問題、解法が二通りある」\n" +
            "れい「ええ。遠回りだけど、そっちの方が安定するわ」\n" +
            "ざくろ「君、気づいとったんや」\n" +
            "れい「当然よ。見落とす理由がないもの」\n" +
            "ざくろ「……無駄があらへんな」",
        text: "私語は控えましょう。", 
        kana: "しごはひかえましょう。",
        romaji: "shigo wa hikaemashou",
        reaction_good:
            "れい「後でまとめましょう」\n" +
            "ざくろ「うん」",
        reaction_bad:
            "ざくろ「今止めるんか」\n" +
            "れい「今だから止めるの」",
        images: ["rei.png", "zakuro.png"]
    },
    { 
        id: "chat_jiha_kotori",
        subtype: "chat",
        group: "2−1",
        sender: "じは＆ことり",
        start_msg:
            "じは「なぁなぁ、それ今やる意味あるん？」\n" +
            "ことり「あるって思うならやるし、思わんかったらやらん」\n" +
            "じは「ほらもうズレとるやん」\n" +
            "ことり「ズレとるのが一番楽しかろ」\n" +
            "じは「先生戻ってきたら終わりやで？」\n" +
            "ことり「戻ってきてから考えりゃよか」",
        text: "話を戻しなさい。", 
        kana: "はなしをもどしなさい。",
        romaji: "hanashi o modoshi nasai",
        reaction_good:
            "じは「しゃーなしやな」\n" +
            "ことり「はいはい、現実」",
        reaction_bad:
            "ことり「戻す気せん」\n" +
            "じは「それが問題なんよ」",
        images: ["jiha.png", "kotori.png"]
    },
    { 
        id: "chat_migiwa_ketsui_pressure",
        subtype: "chat",
        group: "2−1",
        sender: "みぎわ＆けつい",
        start_msg:
            "みぎわ「船の整備、また後回しにしとるじゃろ」\n" +
            "けつい「ちゃんと順番決めとるけぇ」\n" +
            "みぎわ「その順番が甘い言うとんじゃ」\n" +
            "けつい「急ぎすぎると事故るけぇの」\n" +
            "みぎわ「だからって遅すぎるんは困るんよ」",
        text: "言い合いは控えなさい。", 
        kana: "いいあいはひかえなさい。",
        romaji: "iiai wa hikae nasai",
        reaction_good:
            "けつい「……分かった」\n" +
            "みぎわ「後で詰めよう」",
        reaction_bad:
            "みぎわ「話、聞いとる？」\n" +
            "けつい「聞いとるけぇ」",
        images: ["migiwa.png", "ketsui.png"]
    },
    { 
        id: "chat_ameri_zakuro_soft",
        subtype: "chat",
        group: "2−1",
        sender: "あめり＆ざくろ",
        start_msg:
            "あめり「……この問題、遠回りの方が安全やと思うん」\n" +
            "ざくろ「せやな。計算は増えるけど、崩れにくい」\n" +
            "あめり「急ぐと、怖いし……」\n" +
            "ざくろ「無理せんでええ」\n" +
            "あめり「……ありがと」",
        text: "集中しなさい。", 
        kana: "しゅうちゅうしなさい。",
        romaji: "shuuchuu shinasai",
        reaction_good:
            "ざくろ「続きは後でな」\n" +
            "あめり「うん」",
        reaction_bad:
            "ざくろ「今の遮断は痛い」\n" +
            "あめり「……思考切れた」",
        images: ["ameri.png", "zakuro.png"]
    },
    { 
        id: "chat_iseri_hitori_noise",
        subtype: "chat",
        group: "2−1",
        sender: "いせり＆ひとり",
        start_msg:
            "いせり「なぁ兄ちゃん、それ絶対ちゃうで」\n" +
            "ひとり「黙れ、今左腕が疼いてる」\n" +
            "いせり「知らんがな！」\n" +
            "ひとり「これは運命だ」\n" +
            "いせり「運命うるさいわ！」",
        text: "静かにしなさい。", 
        kana: "しずかにしなさい。",
        romaji: "shizuka ni shinasai",
        reaction_good:
            "いせり「ほら見て、怒られた」\n" +
            "ひとり「……チッ」",
        reaction_bad:
            "ひとり「黙る理由がない」\n" +
            "いせり「余計あかんやつ！」",
        images: ["iseri.png", "hitori.png"]
    },
    { 
        id: "chat_shogo_yuko_air",
        subtype: "chat",
        group: "2−1",
        sender: "しょうご＆ゆこ",
        start_msg:
            "しょうご「ここ、意見分かれてるけどさ」\n" +
            "ゆこ「……あえて今は触れない方がいい気もする」\n" +
            "しょうご「なるほど、場の温度的に？」\n" +
            "ゆこ「ええ。波風は立てたくないの」\n" +
            "しょうご「じゃ、後で整理しよっか」",
        text: "相談は静かにしなさい。", 
        kana: "そうだんはしずかにしなさい。",
        romaji: "soudan wa shizuka ni shinasai",
        reaction_good:
            "ゆこ「助かるわ」\n" +
            "しょうご「お互い様だね」",
        reaction_bad:
            "しょうご「今じゃなかったか」\n" +
            "ゆこ「……そういう時もあるわ」",
        images: ["shogo.png", "yuko.png"]
    },
    { 
        id: "chat_wataru_ryogo_pressure",
        subtype: "chat",
        group: "2−1",
        sender: "わたる＆りょうご",
        start_msg:
            "わたる「その仮定、根拠は？」\n" +
            "りょうご「傾向からの推測」\n" +
            "わたる「推測で進めるのは危険だ」\n" +
            "りょうご「でも、当たる確率は高い」\n" +
            "わたる「……検証する」",
        text: "議論は簡潔に。", 
        kana: "ぎろんはかんけつに。",
        romaji: "giron wa kanketsu ni",
        reaction_good:
            "りょうご「了解」\n" +
            "わたる「続けよう」",
        reaction_bad:
            "わたる「話が長い」\n" +
            "りょうご「……そうかも」",
        images: ["wataru.png", "ryogo.png"]
    },
    { 
        id: "chat_maria_iseri",
        subtype: "chat",
        group: "2-1",
        sender: "まりあ＆いせり",
        start_msg:
            "いせり「なぁなぁ、それ絶対ちゃうって！」\n" +
            "まりあ「ふふ、声大きいよ〜」\n" +
            "いせり「え、そう？」\n" +
            "まりあ「周りがびっくりしてるよ💦」\n" +
            "いせり「ごめんって〜！」",
        text: "声量を下げなさい。", 
        kana: "せいりょうをさげなさい。",
        romaji: "seiryou o sage nasai",
        reaction_good:
            "まりあ「ありがとう✨」\n" +
            "いせり「気ぃつけるわ！」",
        reaction_bad:
            "いせり「先生、タイポしとるで！」\n" +
            "まりあ「ふふ、落ち着いてね」",
        images: ["maria.png", "iseri.png"]
    },
    { 
        id: "chat_rei_akira_silent",
        subtype: "chat",
        group: "2−1",
        sender: "れい＆あきら",
        start_msg:
            "れい「その解法、効率はいいけど」\n" +
            "あきら「リスクが残る」\n" +
            "れい「ええ、同意」\n" +
            "あきら「なら別案だ」\n" +
            "れい「……それが最適ね」",
        text: "無言で睨まない。", 
        kana: "むごんでにらまない。",
        romaji: "mugon de niramanai",
        reaction_good:
            "れい「続けましょ」\n" +
            "あきら「時間が惜しい」",
        reaction_bad:
            "あきら「邪魔だ」\n" +
            "れい「それは違うわ」",
        images: ["rei.png", "akira.png"]
    },
    { 
        id: "chat_miriya_hitori_strike",
        subtype: "chat",
        group: "2−1",
        sender: "みりや＆ひとり",
        start_msg:
            "ひとり「左腕が……」\n" +
            "みりや「それは今関係ありません」\n" +
            "ひとり「黙れ」\n" +
            "みりや「黙りません」\n" +
            "ひとり「……チッ」",
        text: "落ち着きなさい。", 
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "みりや「助かります」\n" +
            "ひとり「覚えてろ」",
        reaction_bad:
            "ひとり「命令するな」\n" +
            "みりや「命令ではありません」",
        images: ["miriya.png", "hitori.png"]
    },
    { 
        id: "chat_suiheibu_accident",
        subtype: "chat",
        group: "2−1",
        sender: "けつい＆みぎわ＆りょうご",
        start_msg:
            "みぎわ「ちょ、けつい！そのロープ結び甘いんじゃが！」\n" +
            "けつい「大丈夫じゃろ、潮の向き見とるけぇ」\n" +
            "りょうご「……いや、その二つ前提ズレてる」\n" +
            "みぎわ「は？」\n" +
            "けつい「ん？」\n" +
            "りょうご「今の波、計算に入ってない」",
        text: "落ち着いて確認しなさい。", 
        kana: "おちついてかくにんしなさい。",
        romaji: "ochitsuite kakunin shinasai",
        reaction_good:
            "けつい「……あ、マジじゃ」\n" +
            "みぎわ「だから言うたじゃろ！」\n" +
            "りょうご「今なら修正できる」",
        reaction_bad:
            "みぎわ「センセ邪魔！」\n" +
            "けつい「今いいとこなんじゃけぇ！」\n" +
            "りょうご「……事故る」",
        images: ["ketsui.png", "migiwa.png", "ryogo.png"]
    },
    { 
        id: "chat_enfp_infinite",
        subtype: "chat",
        group: "2−1",
        sender: "みきな＆まきし",
        start_msg:
            "まきし「なぁ聞いて！今日マヨ新作見つけた！」\n" +
            "みきな「え、どこの？てかマヨって新作あるんだ」\n" +
            "まきし「ある！しかも辛いやつ！」\n" +
            "みきな「辛いの！？それポテト用？」\n" +
            "まきし「いやパスタにもいける！」\n" +
            "みきな「パスタ！？え、でもそれならさ——」",
        text: "話をまとめなさい。", 
        kana: "はなしをまとめなさい。",
        romaji: "hanashi o matome nasai",
        reaction_good:
            "みきな「え、どこまで話したっけ？」\n" +
            "まきし「マヨの話！」",
        reaction_bad:
            "まきし「まだ途中なんだけど！」\n" +
            "みきな「終わる気なくない？」",
        images: ["mikina.png", "makishi.png"]
    },
    { 
        id: "chat_ni_freeze",
        subtype: "chat",
        group: "2−1",
        sender: "ざくろ＆りょうご",
        start_msg:
            "ざくろ「……それ、最終的に破綻せぇへん？」\n" +
            "りょうご「うん、だから別ルート考えてた」\n" +
            "ざくろ「……同じこと考えてたわ」\n" +
            "りょうご「……だよね」\n" +
            "ざくろ「…………」\n" +
            "りょうご「…………」",
        text: "何か話しなさい。", 
        kana: "なにかはなしなさい。",
        romaji: "nanika hanashi nasai",
        reaction_good:
            "ざくろ「今、頭の中で完結した」\n" +
            "りょうご「僕も」",
        reaction_bad:
            "ざくろ「無理」\n" +
            "りょうご「今じゃない」",
        images: ["zakuro.png", "ryogo.png"]
    },
    { 
        id: "chat_maria_jiha_tempest",
        subtype: "chat",
        group: "2−1",
        sender: "まりあ＆じは",
        start_msg:
            "じは「なぁ聞いて！今ひらめいたんやけど！」\n" +
            "まりあ「うん、でもそれ昨日も言ってた」\n" +
            "じは「昨日とは違う！」\n" +
            "まりあ「だいたい同じだよ」\n" +
            "じは「ひど！」",
        text: "順番に話しなさい。", 
        kana: "じゅんばんにはなしなさい。",
        romaji: "junban ni hanashi nasai",
        reaction_good:
            "まりあ「はい、どうぞ」\n" +
            "じは「今度こそ聞いてな！」",
        reaction_bad:
            "じは「止めんといて！」\n" +
            "まりあ「止めてないよ？」",
        images: ["maria.png", "jiha.png"]
    },
    { 
        id: "chat_all_teacher_enters",
        subtype: "chat",
        group: "2−1",
        sender: "クラス全体",
        start_msg:
            "ひとり「このクラス…闇が渦巻いている…」\n" +
            "じは「ねぇそれ何回目〜？」\n" +
            "いせり「腹減ったんやけど！」\n" +
            "ことり「もう帰ろーぜ」\n" +
            "みぎわ「ちょ、廊下うるさいって！」\n" +
            "けつい「まぁまぁ、落ち着きんさい」\n" +
            "（ガラッ）\n" +
            "しょうご「……先生来た」\n" +
            "全員「……」",
        text: "静かにしてください。", 
        kana: "しずかにしてください。",
        romaji: "shizuka ni shite kudasai",
        reaction_good:
            "ひとり「……封印した」\n" +
            "じは「はーい」\n" +
            "いせり「了解や！」",
        reaction_bad:
            "わたる「姿勢がなっていない」\n" +
            "ともき「切り替え遅いぞ」",
        images: ["class.png"]
    },
    { 
        id: "chat_rei_silence",
        subtype: "chat",
        group: "2−1",
        sender: "れい",
        start_msg:
            "あきら「非効率だな」\n" +
            "ともき「結論を急ぎすぎだ」\n" +
            "じは「ねぇねぇケンカ？」\n" +
            "ひとり「フッ…争いは力を呼ぶ…」\n" +
            "れい「――今、授業中」",
        text: "続けるなら外で。", 
        kana: "つづけるならそとで。",
        romaji: "tsuzukeru nara soto de",
        reaction_good:
            "あきら「……了解」\n" +
            "ともき「やめとく」",
        reaction_bad:
            "れい「記録つけるけど？」\n" +
            "全員「……」",
        images: ["rei.png"]
    },
    { 
        id: "chat_miriya_formation",
        subtype: "chat",
        group: "2−1",
        sender: "みりや",
        start_msg:
            "いせり「机ずらそーぜ！」\n" +
            "ことり「いいね、それ」\n" +
            "みぎわ「ちょっと勝手に――」\n" +
            "みりや「……皆さん」",
        text: "元の席にお戻りください。", 
        kana: "もとのせきにもどってください。",
        romaji: "moto no seki ni modotte kudasai",
        reaction_good:
            "いせり「はっや……」\n" +
            "ことり「戻る戻る」\n" +
            "みぎわ「助かった…」",
        reaction_bad:
            "みりや「報告が必要でしょうか？」\n" +
            "全員「戻ります」",
        images: ["miriya.png"]
    },
    { 
        id: "chat_ketsui_migiwa_rival",
        subtype: "chat",
        group: "2−1",
        sender: "けつい＆みぎわ",
        start_msg:
            "みぎわ「また勝手に決めとるじゃろ」\n" +
            "けつい「効率ええ思うたんじゃ」\n" +
            "みぎわ「副部長の意見は無視？」\n" +
            "けつい「無視はしとらん」\n" +
            "みぎわ「顔がそう言うとる！」",
        text: "落ち着いて話してください。", 
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "けつい「……悪かった」\n" +
            "みぎわ「……まぁええわ」",
        reaction_bad:
            "みぎわ「もう知らん！」\n" +
            "けつい「待て言うとるじゃろ！」",
        images: ["ketsui.png", "migiwa.png"]
    },
    { 
        id: "chat_hitori_ignored",
        subtype: "chat",
        group: "2−1",
        sender: "ひとり",
        start_msg:
            "ひとり「この左腕が…騒ぎ出している…」\n" +
            "じは「でさ〜」\n" +
            "いせり「それ昨日も言うてたで」\n" +
            "ひとり「闇を恐れぬ者だけが――」\n" +
            "しょうご「次のページ行こう」",
        text: "私語を控えなさい。", 
        kana: "しごをひかえなさい。",
        romaji: "shigo o hikaenasai",
        reaction_good:
            "ひとり「……封印した」",
        reaction_bad:
            "ひとり「理解者がいない世界だ」",
        images: ["hitori.png"]
    },
    { 
        id: "chat_ameri_small_voice",
        subtype: "chat",
        group: "2−1",
        sender: "あめり",
        start_msg:
            "あめり「……あの……」\n" +
            "じは「ねぇ聞いてこれ！」\n" +
            "いせり「それより昼メシ！」\n" +
            "あめり「……うん……」",
        text: "順番に発言してください。", 
        kana: "じゅんばんにはつげんしてください。",
        romaji: "junban ni hatsugen shite kudasai",
        reaction_good:
            "あめり「……ありがとう」",
        reaction_bad:
            "あめり「……だいじょうぶ」",
        images: ["ameri.png"]
    },
    { 
        id: "chat_wataru_strict",
        subtype: "chat",
        group: "2−1",
        sender: "わたる",
        start_msg:
            "じは「適当でよくない？」\n" +
            "ことり「楽な方でいこーぜ」\n" +
            "わたる「それでは基準を満たさない」\n" +
            "ことり「うわ正論」",
        text: "話を続けてください。", 
        kana: "はなしをつづけてください。",
        romaji: "hanashi o tsuzukete kudasai",
        reaction_good:
            "わたる「以上だ」",
        reaction_bad:
            "ことり「はい終了」",
        images: ["wataru.png", "kotori.png"]
    },
    { 
        id: "chat_zakuro_core",
        subtype: "chat",
        group: "2−1",
        sender: "ざくろ",
        start_msg:
            "ともき「結局まとめ役が必要だ」\n" +
            "あきら「統率できる者がやるべきだ」\n" +
            "ざくろ「……どっちも自分の話」",
        text: "続けて。", 
        kana: "つづけて。",
        romaji: "tsuzukete",
        reaction_good:
            "ともき「……一理ある」\n" +
            "あきら「……否定できん」",
        reaction_bad:
            "ざくろ「……まぁいい」",
        images: ["zakuro.png"]
    },
    { 
        id: "chat_teacher_enters",
        subtype: "chat",
        group: "2−1",
        sender: "クラス全体",
        start_msg:
            "じは「それでさ〜！」\n" +
            "いせり「だからオレが言うたやろ！」\n" +
            "ことり「まぁどうでもよかろ」\n" +
            "（ガラッ）\n" +
            "全員「……」",
        text: "着席してください。", 
        kana: "ちゃくせきしてください。",
        romaji: "chakuseki shite kudasai",
        reaction_good:
            "全員「はい」",
        reaction_bad:
            "わたる「……遅い」",
        images: ["jiha.png", "kotori.png","iseri.png","wataru.png"]
    },
    { 
        id: "chat_rei_silence",
        subtype: "chat",
        group: "2−1",
        sender: "れい",
        start_msg:
            "ともき「効率的には――」\n" +
            "あきら「数字が――」\n" +
            "じは「えー難し！」\n" +
            "れい「今、授業中」",
        text: "静かに。", 
        kana: "しずかに。",
        romaji: "shizuka ni",
        reaction_good:
            "ともき「……了解」\n" +
            "あきら「……悪い」",
        reaction_bad:
            "じは「はい黙ります」",
        images: ["rei.png"]
    },
    { 
        id: "chat_miriya_align",
        subtype: "chat",
        group: "2−1",
        sender: "みりや",
        start_msg:
            "いせり「まだ始まらんの？」\n" +
            "ひとり「封印が――」\n" +
            "みりや「先生、全員そろってます」",
        text: "ありがとう。", 
        kana: "ありがとう。",
        romaji: "arigatou",
        reaction_good:
            "みりや「はい」",
        reaction_bad:
            "みりや「……次はもっと早くします」",
        images: ["miriya.png"]
    },
    { 
        id: "chat_kotori_zakuro_freeze",
        subtype: "chat",
        group: "2−1",
        sender: "ことり＆ざくろ",
        start_msg:
            "ことり「……」\n" +
            "ざくろ「……」\n" +
            "ことり「考え中」\n" +
            "ざくろ「……同じ」",
        text: "進めてください。", 
        kana: "すすめてください。",
        romaji: "susumete kudasai",
        reaction_good:
            "ことり「まぁそのうち」\n" +
            "ざくろ「……うん」",
        reaction_bad:
            "ことり「無理」",
        images: ["kotori.png", "zakuro.png"]
    },
    { 
        id: "chat_yuko_soft_control",
        subtype: "chat",
        group: "2−1",
        sender: "ゆこ",
        start_msg:
            "じは「それ絶対ウケるって！」\n" +
            "あきら「くだらん」\n" +
            "ゆこ「……次の問題、見よっか」",
        text: "話を戻しましょう。", 
        kana: "はなしをもどしましょう。",
        romaji: "hanashi o modoshimashou",
        reaction_good:
            "じは「はーい」",
        reaction_bad:
            "あきら「……助かる」",
        images: ["yuko.png"]
    },
    { 
        id: "chat_shogo_smile",
        subtype: "chat",
        group: "2−1",
        sender: "しょうご",
        start_msg:
            "いせり「ややこし！」\n" +
            "みきな「めんどい〜」\n" +
            "しょうご「まぁまぁ、順番にやろう」",
        text: "いい提案です。", 
        kana: "いいていあんです。",
        romaji: "ii teian desu",
        reaction_good:
            "みきな「さすが〜」",
        reaction_bad:
            "いせり「はいはい」",
        images: ["shogo.png"]
    },
    { 
        id: "chat_maria_soft",
        subtype: "chat",
        group: "2−1",
        sender: "まりあ",
        start_msg:
            "ともき「議論が散ってる」\n" +
            "あきら「無駄が多い」\n" +
            "まりあ「まぁまぁ、深呼吸しよ✨」",
        text: "続けて。", 
        kana: "つづけて。",
        romaji: "tsuzukete",
        reaction_good:
            "ともき「……そうだな」",
        reaction_bad:
            "あきら「……調子狂う」",
        images: ["maria.png"]
    },
    { 
        id: "chat_ryogo_solution",
        subtype: "chat",
        group: "2−1",
        sender: "りょうご",
        start_msg:
            "ともき「方法が多すぎる」\n" +
            "あきら「統一しろ」\n" +
            "りょうご「……これで解決する」",
        text: "説明してください。", 
        kana: "せつめいしてください。",
        romaji: "setsumei shite kudasai",
        reaction_good:
            "ともき「採用」\n" +
            "あきら「……認める」",
        reaction_bad:
            "りょうご「……いい」",
        images: ["ryogo.png"]
    },
    // --- 2-2 ---
        { 
            id: "chat_girls", 
            subtype: "chat", 
            group: "2-2",
            sender: "2年女子グル",
            start_msg: "みりん「ねーねー、今度の連休どこいくー？🎀」\nあめり「えっと…うさぎカフェ…いきたいな🐰」\nみりん「いいね！センセも誘っちゃう？w」",
            text: "先生は仕事があるから遠慮しておきます。", 
            kana: "せんせいはしごとがあるからえんりょしておきます。", 
            romaji: "sensei wa sigoto ga aru kara enryo site okimasu", 
            reaction_good: "みりん「えー！つまんないのー！🥺」\nあめり「せんせい…おしごとがんばって…」",
            reaction_bad: "みりん「あ、センセ動揺してない？ホントは行きたいんでしょw」",
            images: ["mirin.png", "ameri.png"] // ★複数画像
        },
    // --- 3-1 ---
        { 
            id: "chat_game", 
            subtype: "chat", 
            group: "3-1",
            sender: "ゲーマーズ",
            start_msg: "一人「ククク…昨日のランクマ、俺の右腕が暴走して負けた…」\n縫「ただの操作ミスだろ！だぞ！」\n一人「貴様…！俺の闇の力を疑うのか…先生、言ってやれ！」",
            text: "ゲームは一日一時間。宿題は終わったの？", 
            kana: "げーむはいちにちいちじかん。しゅくだいはおわったの？", 
            romaji: "ge-mu wa itiniti itijikan syukudai wa owatta no", 
            reaction_good: "一人「ぐっ…現実という名の結界に阻まれるとは…」\n縫「先生正論すぎるゾッ…」",
            reaction_bad: "一人「先生、コマンド入力ミスってるぞ。エイムが悪いな。」",
            images: ["hitori.png", "nui.png"]
        },
        {
        id: "chat_31_nui_chaos",
        subtype: "chat",
        group: "3-1",
        sender: "ご褒美＆えいじ＆じんや",
        start_msg:
            "ご褒美「拙者の今日のコンディション、脂ノリ最高潮だぞ！風呂上がり出汁いくやんけ！」\n" +
            "えいじ「おっす！オラえいじ伊達！今日も筋肉が最高に仕上がってるぜ！」\n" +
            "じんや「……開始5秒でミュートしたくなったっちゃ」\n" +
            "ご褒美「なに言っとる！筋肉×脂質は完全栄養だぞ！」\n" +
            "えいじ「そうそう！プロテインに可能性は無限だ！」\n" +
            "じんや「無限なのはノイズ量だっちゃ」\n" +
            "みいか「朝から元気すぎでしょw 走ってきたら？」\n" +
            "ふくみ「勝手にやってて。ログだけ流さないで」\n" +
            "こうめ「神社の境内でその会話したら即追い出すけどな？」",
        text: "朝からグループチャットを荒らさない。",
        kana: "あさからぐるーぷちゃっとをあらさない。",
        romaji: "asa kara group chatto o arasanai",
        reaction_good:
            "じんや「その判断は論理的だっちゃ」\n" +
            "かほこ「注意として妥当。再発防止も期待できるわね」\n" +
            "りん「先生ありがとう〜、ちょっと平和になったかも」",
        reaction_bad:
            "じんや「文の主語が抜けてるっちゃ」\n" +
            "かほこ「表現が曖昧。誰に向けた注意か不明確ね」",
        images: ["nui.png", "eiji.png", "jinya.png", "miika.png", "koume.png"]
        },
        { 
            id: "chat_3-1_nui_miika",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆みいか",
            start_msg:
                "ご褒美「今日も拙者は自らを甘やかす日、だゾ！プロテイン菓子はご褒美やんけ！」\n" +
                "みいか「いやそれ絶対ご褒美じゃなくてただの間食でしょ！」\n" +
                "ご褒美「間食は魂の栄養、だゾ？」\n" +
                "みいか「魂太りしすぎ！」\n" +
                "ご褒美「魂が丸いのは優しさの証やんけ〜」",
            text: "ほどほどにしなさい。",
            kana: "ほどほどにしなさい。",
            romaji: "hodohodo ni shinasai",
            reaction_good:
                "みいか「はーい！じゃあ午後は走る！」\n" +
                "ご褒美「拙者は見守る係、だゾ！」",
            reaction_bad:
                "みいか「先生、日本語ちょっと太ってない？」\n" +
                "ご褒美「誤字は脂肪じゃなくてミス、だゾ！」",
            images: ["nui.png", "miika.png"]
        },
        { 
            id: "chat_3-1_jinya_fukumi",
            subtype: "chat",
            group: "3-1",
            sender: "じんや＆ふくみ",
            start_msg:
                "じんや「このクラス、情報量多すぎて処理落ちするっちゃ」\n" +
                "ふくみ「青森でもここまでうるさくない」\n" +
                "じんや「それはそれで怖いっちゃ」\n" +
                "ふくみ「……静かな方が効率いいのに」",
            text: "仲良くしてください。",
            kana: "なかよくしてください。",
            romaji: "nakayoku shite kudasai",
            reaction_good:
                "じんや「別に仲悪くはないっちゃ」\n" +
                "ふくみ「必要最低限で十分」",
            reaction_bad:
                "じんや「先生、漢字間違ってるっちゃ」\n" +
                "ふくみ「確認してから言えば？」",
            images: ["jinya.png", "fukumi.png"]
        },
        { 
            id: "chat_3-1_eiji_jun",
            subtype: "chat",
            group: "3-1",
            sender: "えいじ＆じゅん",
            start_msg:
                "えいじ「見ろよじゅん！この上腕二頭筋！」\n" +
                "じゅん「近づかないでください。汗が飛びます」\n" +
                "えいじ「これは努力の結晶だぞ！」\n" +
                "じゅん「結晶でも菌は菌です」",
            text: "距離を保ちなさい。",
            kana: "きょりをたもちなさい。",
            romaji: "kyori o tamochinasai",
            reaction_good:
                "えいじ「よっしゃ！2mスクワットだ！」\n" +
                "じゅん「……それなら許容範囲です」",
            reaction_bad:
                "じゅん「先生、送り仮名が違います」\n" +
                "えいじ「細けぇ！筋トレしよ！」",
            images: ["eiji.png", "jun.png"]
        },
        { 
            id: "chat_3-1_maho_first",
            subtype: "chat",
            group: "3-1",
            sender: "まほ＆クラスメイト",
            start_msg:
                "みいか「えっ転入生！？どこから来たの！？」\n" +
                "えいじ「筋トレする！？」\n" +
                "ご褒美「ツインテールは好きか、だゾ！？」\n" +
                "じんや「静かに質問しろっちゃ」\n" +
                "まほ「あ、えっと……東京から来ました……羊は好きです……」",
            text: "一人ずつ質問しなさい。",
            kana: "ひとりずつしつもんしなさい。",
            romaji: "hitori zutsu shitsumon shinasai",
            reaction_good:
                "まほ「ありがとうございます……ちょっと安心しました……」\n" +
                "りん「きっといいことあるよ〜」",
            reaction_bad:
                "ご褒美「先生、漢字が暴走しとるやんけ！」\n" +
                "まほ「……えっと、それ誤字です……」",
            images: ["maho.png", "miika.png", "eiji.png", "nui.png", "jinya.png", "rin.png"]
        },
        { 
            id: "chat_3-1_maho_rin_healing",
            subtype: "chat",
            group: "3-1",
            sender: "まほ＆りん",
            start_msg:
                "まほ「この教室…音が多くて、ちょっとだけ雲みたい……」\n" +
                "りん「そっかぁ。じゃあ今は雲の上ってことにしよ〜」\n" +
                "まほ「……それ、いいね……」\n" +
                "りん「きっといいことあるよ〜。雲の上だもん」",
            text: "静かに過ごしてください。",
            kana: "しずかにすごしてください。",
            romaji: "shizuka ni sugoshite kudasai",
            reaction_good:
                "まほ「はい……静かな雲にします……」\n" +
                "りん「ふふ、もふもふだね〜」",
            reaction_bad:
                "りん「先生、その漢字ちょっと違うかも〜？」\n" +
                "まほ「……あ、誤字です……」",
            images: ["maho.png", "rin.png"]
        },
        { 
            id: "chat_3-1_kome_kahoko",
            subtype: "chat",
            group: "3-1",
            sender: "こうめ＆かほこ",
            start_msg:
                "こうめ「細かい理屈より、気合でいこーぜ！」\n" +
                "かほこ「非合理です。成功率が低下します」\n" +
                "こうめ「成功率は気合で跳ね上がる！」\n" +
                "かほこ「データがありません」",
            text: "落ち着いて話し合いなさい。",
            kana: "おちついてはなしあいなさい。",
            romaji: "ochitsuite hanashiai nasai",
            reaction_good:
                "こうめ「まぁ、拳は出してないしな！」\n" +
                "かほこ「それだけは評価します」",
            reaction_bad:
                "かほこ「先生、助詞が不正確です」\n" +
                "こうめ「細けぇ！でも確かに変だな！」",
            images: ["kome.png", "kahoko.png"]
        },
        { 
            id: "chat_3-1_uchu_miika",
            subtype: "chat",
            group: "3-1",
            sender: "うちゅう＆みいか",
            start_msg:
                "うちゅう「宇宙ってさ、終わりがないんよ」\n" +
                "みいか「えっ！じゃあどこまで走ってもいいってこと！？」\n" +
                "うちゅう「理論上はな」\n" +
                "みいか「よっしゃ！銀河ダッシュ！」",
            text: "教室では走らないでください。",
            kana: "きょうしつでははしらないでください。",
            romaji: "kyoushitsu dewa hashiranai de kudasai",
            reaction_good:
                "みいか「はーい！宇宙は心で走る！」\n" +
                "うちゅう「それも一つの真理やな」",
            reaction_bad:
                "うちゅう「先生、“では”の漢字違うで」\n" +
                "みいか「宇宙よりミスがでかい！」",
            images: ["uchu.png", "miika.png"]
        },
        { 
            id: "chat_3-1_jun_fukumi",
            subtype: "chat",
            group: "3-1",
            sender: "じゅん＆ふくみ",
            start_msg:
                "じゅん「そこ、消毒しましたか？」\n" +
                "ふくみ「してない」\n" +
                "じゅん「……してください」\n" +
                "ふくみ「……後で」",
            text: "協力しなさい。",
            kana: "きょうりょくしなさい。",
            romaji: "kyouryoku shinasai",
            reaction_good:
                "じゅん「最低限でいいです」\n" +
                "ふくみ「じゃあ最低限で」",
            reaction_bad:
                "じゅん「先生、変換ミスです」\n" +
                "ふくみ「一発で分かるの逆にすごい」",
            images: ["jun.png", "fukumi.png"]
        },
        { 
            id: "chat_3-1_nui_scold",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆みいか",
            start_msg:
                "ご褒美「拙者の風呂上がりの出汁、今日は豚骨濃いめだゾ！」\n" +
                "みいか「え、なにそれ！？」\n" +
                "ご褒美「飲むか？元気出るやんけ！」\n" +
                "みいか「いや無理無理無理！！！」",
            text: "変なものを配らないでください。",
            kana: "へんなものをくばらないでください。",
            romaji: "henna mono o kubaranaide kudasai",
            reaction_good:
                "ご褒美「ぬぅ…拙者の善意が…」\n" +
                "みいか「善意の方向おかしいって！」",
            reaction_bad:
                "みいか「先生、“配る”の漢字それじゃない！」\n" +
                "ご褒美「誤字は出汁より薄いな！」",
            images: ["nui.png", "miika.png"]
        },
        { 
            id: "chat_3-1_nui_eiji_fantasy",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆えいじ",
            start_msg:
                "えいじ「おっす！今日も筋肉仕上がってるぜ！」\n" +
                "ご褒美「その汗…黄金のスープだゾ…！」\n" +
                "えいじ「飲むか？オラの汗ポカリ！」\n" +
                "ご褒美「拙者の脂と混ぜたら完全栄養やんけ！！」",
            text: "二人とも落ち着きなさい。",
            kana: "ふたりともおちつきなさい。",
            romaji: "futari tomo ochitsuki nasai",
            reaction_good:
                "えいじ「へへっ、筋肉は裏切らねぇ！」\n" +
                "ご褒美「脂も裏切らんゾ！」",
            reaction_bad:
                "ご褒美「先生、“二人共”は旧字体やんけ！」\n" +
                "えいじ「細かいとこも鍛えような！」",
            images: ["nui.png", "eiji.png"]
        },
        { 
            id: "chat_3-1_nui_maho",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆まほ",
            start_msg:
                "ご褒美「そのふわふわおさげ…わしゃわしゃしたい…！」\n" +
                "まほ「え、近い近い」\n" +
                "ご褒美「一瞬だけ！拙者の癒しだゾ！」\n" +
                "まほ「ダメ。距離感覚えて」",
            text: "距離を保ちなさい。",
            kana: "きょりをたもちなさい。",
            romaji: "kyori o tamochinasai",
            reaction_good:
                "ご褒美「ぬぅ…理性…！」\n" +
                "まほ「理性は大事」",
            reaction_bad:
                "まほ「先生、“距離”の字違うよ」\n" +
                "ご褒美「誤字は触れんゾ！」",
            images: ["nui.png", "maho.png"]
        },
        { 
            id: "chat_3-1_maho_rin_after",
            subtype: "chat",
            group: "3-1",
            sender: "まほ＆りん",
            start_msg:
                "まほ「今日ちょっと疲れた」\n" +
                "りん「そっか〜。じゃあ一緒に深呼吸しよ」\n" +
                "まほ「……ふぅ」\n" +
                "りん「ほら、ちょっと楽になったでしょ〜」",
            text: "仲良く過ごしてください。",
            kana: "なかよくすごしてください。",
            romaji: "nakayoku sugoshite kudasai",
            reaction_good:
                "まほ「うん、だいぶ」\n" +
                "りん「きっといいことあるよ〜」",
            reaction_bad:
                "りん「先生、その送り仮名ちがうかも〜」\n" +
                "まほ「惜しい」",
            images: ["maho.png", "rin.png"]
        },
        { 
            id: "chat_3-1_nui_ban",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆かほこ",
            start_msg:
                "ご褒美「今日は拙者の出汁、改良版だゾ！」\n" +
                "かほこ「待って。まず前提が間違ってる」\n" +
                "ご褒美「え？進化だゾ？」\n" +
                "かほこ「校則・衛生・常識、すべてに違反してる」",
            text: "これ以上続くなら出禁にします。",
            kana: "これいじょうつづくならできんにします。",
            romaji: "kore ijou tsuzuku nara dekin ni shimasu",
            reaction_good:
                "ご褒美「で、出禁！？拙者そこまで！？」\n" +
                "かほこ「妥当」",
            reaction_bad:
                "かほこ「先生、“出入り禁止”の使い方違う」\n" +
                "ご褒美「誤字で救われる命もあるゾ！」",
            images: ["nui.png", "kahoko.png"]
        },
        { 
            id: "chat_3-1_nui_rin_anime",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆りん",
            start_msg:
                "りん「昨日の深夜アニメ、作画すごかったよね〜」\n" +
                "ご褒美「なに！？アニメ！？だゾ！！」\n" +
                "りん「え、なに急に」\n" +
                "ご褒美「声優志望＋アニメ＝尊い構図だゾ…！」",
            text: "落ち着いて会話しなさい。",
            kana: "おちついてかいわしなさい。",
            romaji: "ochitsuite kaiwa shinasai",
            reaction_good:
                "りん「はは…ぬいくん元気だね」\n" +
                "ご褒美「癒しオーラが漏れとるやんけ！」",
            reaction_bad:
                "りん「先生、“会話”の字ちょっと違うかも〜」\n" +
                "ご褒美「先生も癒し不足だゾ！」",
            images: ["nui.png", "rin.png"]
        },
        { 
            id: "chat_3-1_miwa_lead",
            subtype: "chat",
            group: "3-1",
            sender: "みわ＆みいか",
            start_msg:
                "みわ「はいはーい！クラス用の掲示、可愛くまとめよ？」\n" +
                "みいか「いいね！派手めでいこ！」\n" +
                "みわ「配色は統一せなんよ〜？」\n" +
                "みいか「そこは任せた！」",
            text: "協力して進めてください。",
            kana: "きょうりょくしてすすめてください。",
            romaji: "kyouryoku shite susumete kudasai",
            reaction_good:
                "みわ「よかよか！楽しくいこ〜」\n" +
                "みいか「みわちゃん頼もしすぎ！」",
            reaction_bad:
                "みわ「先生、“協力”の送り仮名違うばい」\n" +
                "みいか「先生も修正しよ！」",
            images: ["miwa.png", "miika.png"]
        },
        { 
            id: "chat_3-1_nui_final_warning",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆じゅん",
            start_msg:
                "ご褒美「拙者、今日は何も配ってないゾ？」\n" +
                "じゅん「存在がもう不衛生」\n" +
                "ご褒美「ひどくない！？」\n" +
                "じゅん「距離2メートル」",
            text: "次やったら本当に出禁です。",
            kana: "つぎやったらほんとうにできんです。",
            romaji: "tsugi yattara hontou ni dekin desu",
            reaction_good:
                "ご褒美「ぬぅ…我慢…」\n" +
                "じゅん「学習したなら良し」",
            reaction_bad:
                "じゅん「先生、“次”が漢数字になってる」\n" +
                "ご褒美「細菌より細かいな！」",
            images: ["nui.png", "jun.png"]
        },
        {
            id: "chat_3-1_nui_guidance",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆じゅん",
            start_msg:
                "ご褒美「拙者、善意で“風呂上がり豚骨出汁”を配布しただけだぞ！感謝されこそすれ、呼び出しは解せんやんけ！」\n" +
                "じゅん「それを“未密封容器・常温・出所不明液体”って言うんだ。今すぐ廃棄対象」\n" +
                "ご褒美「えぇ〜！？魂のエキスだぞ！？ツインテール成分も入っとる！」\n" +
                "じゅん「成分の時点でアウトだ。生活指導室出禁、検討案件」\n" +
                "ご褒美「ま、待つだぞ！拙者、反省文なら5枚書ける！」",
            text: "落ち着いて説明してください。",
            kana: "おちついてせつめいしてください。",
            romaji: "ochitsuite setsumei shite kudasai",
            reaction_good:
                "ご褒美「了解だぞ！論理的に！まず拙者は無罪！」\n" +
                "じゅん「いや前提が間違ってる」",
            reaction_bad:
                "じゅん「誤字以前に文章が不潔だ」\n" +
                "ご褒美「先生、動揺してタイプ荒れとるやんけ！」",
            images: ["nui.png", "jun.png"]
        },
        {
            id: "chat_3-1_maho_cosplay",
            subtype: "chat",
            group: "3-1",
            sender: "まほ＆みいか",
            start_msg:
                "まほ「……今日、アニメの衣装着てきた」\n" +
                "みいか「え！？なにそれ！かわいっ！！走って一周してきていい！？」\n" +
                "まほ「走らなくていい…」\n" +
                "ご褒美「うおおおお！！公式がここに存在しとるだぞ！！」\n" +
                "かほこ「視線集中率が異常。論理的に考えても刺激が強すぎる」\n" +
                "まほ「……騒がしいの、ちょっと好き」",
            text: "授業に集中してください。",
            kana: "じゅぎょうにしゅうちゅうしてください。",
            romaji: "jugyou ni shuuchuu shite kudasai",
            reaction_good:
                "まほ「はーい…あとで着替える」\n" +
                "みいか「えー！もったいなーい！」",
            reaction_bad:
                "かほこ「誤字ですね。指示として成立してません」\n" +
                "ご褒美「先生の方が動揺しとるぞ！」",
            images: ["maho.png", "miika.png", "nui.png", "kahoko.png"]
        },
        {
            id: "chat_3-1_space_wrapping",
            subtype: "chat",
            group: "3-1",
            sender: "うちゅう＆みわ",
            start_msg:
                "うちゅう「この銀紙、星雲っぽくね？」\n" +
                "みわ「よかね〜！ここに星座リボンつけたら宇宙ギフトたい！」\n" +
                "うちゅう「渡す相手、地球人でいいん？」\n" +
                "みわ「気持ちは宇宙規模たい！」\n" +
                "りん「……なんか、見てたら元気出るね。きっといいことあるよ〜」",
            text: "何をしているんですか。",
            kana: "なにをしているんですか。",
            romaji: "nani o shiteirun desu ka",
            reaction_good:
                "みわ「先生にも包んであげるたい！」\n" +
                "うちゅう「ブラックホール風でよくね？」",
            reaction_bad:
                "うちゅう「先生、入力がワープしちょる」\n" +
                "みわ「落ち着きなっせ〜」",
            images: ["uchu.png", "miwa.png", "rin.png"]
        },
        {
            id: "chat_3-1_sweat_war",
            subtype: "chat",
            group: "3-1",
            sender: "じゅん＆えいじ",
            start_msg:
                "えいじ「なぁじゅん！今日の汗、いつもよりミネラル多めだぞ！」\n" +
                "じゅん「近寄るな。半径2メートル汚染区域だ」\n" +
                "えいじ「えぇ！？筋肉の努力だぞ！？」\n" +
                "じゅん「努力は認めるが、飛沫は認めない」\n" +
                "ふくみ「……どっちも勝手にやってて」",
            text: "静かにしなさい。",
            kana: "しずかにしなさい。",
            romaji: "shizuka ni shinasai",
            reaction_good:
                "えいじ「よし！黙ってスクワットする！」\n" +
                "じゅん「それもやめろ」",
            reaction_bad:
                "じゅん「誤字がある時点で不快指数が上がる」\n" +
                "えいじ「先生も汗かいてこ！」",
            images: ["jun.png", "eiji.png", "fukumi.png"]
        },
        {
            id: "chat_3-1_rin_maho_voicecos",
            subtype: "chat",
            group: "3-1",
            sender: "りん＆まほ",
            start_msg:
                "りん「ねぇまほちゃん、このセリフ…こういう間の方が感情伝わるかな？」\n" +
                "まほ「……うん。息、少しだけ置くと好き」\n" +
                "りん「えへへ、じゃあもう一回やってみよっか！」\n" +
                "ご褒美「ななななな！？声優×コス＝神聖儀式だぞ！？拙者、拝んでいい！？」\n" +
                "まほ「……見ないで」\n" +
                "りん「だ、大丈夫だよぬいくん！落ち着こ？」",
            text: "静かにしてください。",
            kana: "しずかにしてください。",
            romaji: "shizuka ni shite kudasai",
            reaction_good:
                "りん「はーい、ごめんなさい！」\n" +
                "まほ「……続き、あとでやろ」",
            reaction_bad:
                "ご褒美「先生、動揺して敬語崩れとるやんけ！」\n" +
                "りん「ふふ、きっといいことあるよ〜」",
            images: ["rin.png", "maho.png", "nui.png"]
        },
        {
            id: "chat_3-1_logic_battle",
            subtype: "chat",
            group: "3-1",
            sender: "かほこ＆じんや",
            start_msg:
                "かほこ「その主張、前提条件が曖昧。論理的に成立してない」\n" +
                "じんや「前提が曖昧でも現実は回ってるっちゃ。理論は机上だろ」\n" +
                "かほこ「整合性を欠いた理屈はセオリー外」\n" +
                "じんや「セオリー信仰は思考停止だっちゃ」\n" +
                "こうめ「おー、殴らないレスバだ」",
            text: "議論はほどほどに。",
            kana: "ぎろんはほどほどに。",
            romaji: "giron wa hodohodo ni",
            reaction_good:
                "かほこ「……一旦、ここまでにしましょう」\n" +
                "じんや「まぁ、続きは配信ネタだな」",
            reaction_bad:
                "じんや「先生、誤字ってるっちゃ」\n" +
                "かほこ「指示文として不完全です」",
            images: ["kahoko.png", "jinya.png", "koume.png"]
        },
        {
            id: "chat_3-1_nui_bunkasai_ban",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆みわ",
            start_msg:
                "ご褒美「文化祭限定！ツインテール鑑賞所、開店だぞ！」\n" +
                "みわ「はいストーーップ！それは即刻中止たい！」\n" +
                "ご褒美「なぜだぞ！？文化の共有だやんけ！」\n" +
                "みわ「共有していい文化とダメな文化があるたい！」\n" +
                "じゅん「不衛生・不適切・不審の三拍子」",
            text: "企画は却下です。",
            kana: "きかくはきゃっかです。",
            romaji: "kikaku wa kyakka desu",
            reaction_good:
                "ご褒美「うぅ…拙者、豚舎に帰る…」\n" +
                "みわ「反省したらラッピング手伝わせるたい」",
            reaction_bad:
                "じゅん「誤字以前に判断が遅い」\n" +
                "ご褒美「先生も共犯やんけ！」",
            images: ["nui.png", "miwa.png", "jun.png"]
        },
        {
            id: "chat_3-1_sweat_oil_vs_clean",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆えいじ＆じゅん",
            start_msg:
                "えいじ「おっす！今日の筋トレ後の汗、ノリにノってるぜ！」\n" +
                "ご褒美「拙者の皮脂も最高潮だぞ！豚の旨味、熟成中やんけ！」\n" +
                "じゅん「……今すぐ距離を取ってください」\n" +
                "えいじ「え？このポカリ飲む？俺の汗入り！」\n" +
                "じゅん「論外です。存在が不衛生」\n" +
                "ご褒美「えぇ！？拙者たち、生命力の塊だぞ！？」",
            text: "落ち着いて距離を保ってください。",
            kana: "おちついてきょりをたもってください。",
            romaji: "ochitsuite kyori o tamotte kudasai",
            reaction_good:
                "じゅん「理解しました。最低限の安全距離を確保します」\n" +
                "えいじ「よし！じゃあ5メートル筋トレだ！」",
            reaction_bad:
                "じゅん「先生、指示文に曖昧さがあります」\n" +
                "ご褒美「先生も除菌派か！？裏切りだぞ！」",
            images: ["nui.png", "eiji.png", "jun.png"]
        },
        {
            id: "chat_3-1_maho_cosplay_debut",
            subtype: "chat",
            group: "3-1",
            sender: "まほ＆みいか＆ご褒美",
            start_msg:
                "まほ「……今日、衣装持ってきた」\n" +
                "みいか「え！？まほちゃんのコス！？絶対かわいいじゃん！」\n" +
                "まほ「羊じゃないやつ。ちゃんと…作品用」\n" +
                "ご褒美「なっ……！？拙者、呼吸が追いつかんだぞ！！」\n" +
                "まほ「……見ないって言った」\n" +
                "みいか「ご褒美くん！深呼吸！はい！」",
            text: "注目しすぎないでください。",
            kana: "ちゅうもくしすぎないでください。",
            romaji: "chuumoku shisuginai de kudasai",
            reaction_good:
                "まほ「……ありがとう」\n" +
                "みいか「写真はあとでね！」",
            reaction_bad:
                "ご褒美「先生、注意の矛先が弱いぞ！」\n" +
                "まほ「……ズレてる」",
            images: ["maho.png", "miika.png", "nui.png"]
        },
        {
            id: "chat_3-1_space_wrapping",
            subtype: "chat",
            group: "3-1",
            sender: "うちゅう＆みわ",
            start_msg:
                "うちゅう「この銀紙、銀河っぽくね？」\n" +
                "みわ「ほんとたい！星座モチーフで包んだらロマンあるたい！」\n" +
                "うちゅう「贈り物は宇宙。受け取る側は地球人」\n" +
                "みわ「なんそれ〜！素敵たい！」\n" +
                "かほこ「意味はありますか？」",
            text: "コンセプトを説明してください。",
            kana: "こんせぷとをせつめいしてください。",
            romaji: "konseputo o setsumei shite kudasai",
            reaction_good:
                "みわ「気持ちたい！それで十分たい！」\n" +
                "うちゅう「気持ちは重力より強い」",
            reaction_bad:
                "かほこ「質問文が不明確です」\n" +
                "うちゅう「先生も地球人だな」",
            images: ["uchu.png", "miwa.png", "kahoko.png"]
        },
        {
            id: "chat_3-1_fukumi_nui_tempdiff",
            subtype: "chat",
            group: "3-1",
            sender: "ふくみ＆ご褒美",
            start_msg:
                "ご褒美「ふくみ殿〜！拙者の最新豚骨出汁、嗅ぐだけで幸せだゾ！」\n" +
                "ふくみ「……」\n" +
                "ご褒美「無言！？評価は！？」\n" +
                "ふくみ「今、関わる理由ない」\n" +
                "ご褒美「冷たすぎやんけ！青森の吹雪か！？」",
            text: "適切な距離を保ちなさい。",
            kana: "てきせつなきょりをたもちなさい。",
            romaji: "tekisetsu na kyori o tamochinasai",
            reaction_good:
                "ふくみ「それでいい」\n" +
                "ご褒美「先生ぇ！距離が心まで来てるゾ！」",
            reaction_bad:
                "ふくみ「日本語、雑」\n" +
                "ご褒美「拙者のハートに誤字が刺さったゾ！」",
            images: ["fukumi.png", "nui.png"]
        },
        {
            id: "chat_3-1_fukumi_eiji_practical",
            subtype: "chat",
            group: "3-1",
            sender: "ふくみ＆えいじ",
            start_msg:
                "えいじ「この机さ、気合で直せばいけるだろ！」\n" +
                "ふくみ「無理。ネジ死んでる」\n" +
                "えいじ「筋力でカバー！」\n" +
                "ふくみ「壊れる」\n" +
                "えいじ「……じゃあ、どうすりゃいい？」\n" +
                "ふくみ「ドライバー持ってくる」",
            text: "協力して作業してください。",
            kana: "きょうりょくしてさぎょうしてください。",
            romaji: "kyouryoku shite sagyou shite kudasai",
            reaction_good:
                "えいじ「よっしゃ！実務筋トレだ！」\n" +
                "ふくみ「……悪くない」",
            reaction_bad:
                "ふくみ「指示が抽象的」\n" +
                "えいじ「先生もプロテイン足りてねぇな！」",
            images: ["fukumi.png", "eiji.png"]
        },
        {
            id: "chat_3-1_fukumi_rin_calm",
            subtype: "chat",
            group: "3-1",
            sender: "ふくみ＆りん",
            start_msg:
                "りん「このアニメの間、好きなんだ〜」\n" +
                "ふくみ「無音多いの、いい」\n" +
                "りん「分かってくれる人いて嬉しいな」\n" +
                "ふくみ「うるさくないのが、好き」\n" +
                "りん「きっと、いいことあるよ〜」",
            text: "穏やかに会話してください。",
            kana: "おだやかにかいわしてください。",
            romaji: "odayaka ni kaiwa shite kudasai",
            reaction_good:
                "ふくみ「……このままでいい」\n" +
                "りん「うん！」",
            reaction_bad:
                "ふくみ「今の指示、要らない」\n" +
                "りん「先生、空気読めてるよ〜？」",
            images: ["fukumi.png", "rin.png"]
        },
        { 
            id: "chat_nui_eiji_protein",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆えいじ",
            start_msg:
                "ご褒美「拙者の筋肉も実質プロテインで出来とるんやんけ！だゾ！」\n" +
                "えいじ「おっ！分かってるじゃねぇか！筋肉は裏切らねぇ！」\n" +
                "ご褒美「つまり拙者もえいじ殿と同じステージ…同志、だゾ！」\n" +
                "えいじ「いや脂肪と筋肉は別物だ！」\n" +
                "ご褒美「な、なんだとぉ！？拙者の霜降りボディを否定する気かやんけ！」",
            text: "落ち着いて話しなさい。", 
            kana: "おちついてはなしなさい。",
            romaji: "ochitsuite hanashi nasai",
            reaction_good:
                "えいじ「おっす！すまん先生！冷静に筋肉と向き合う！」\n" +
                "ご褒美「むぅ…先生が言うなら一旦落ち着く、だゾ…」",
            reaction_bad:
                "えいじ「誤字ってるぞ先生！筋肉以前の問題だ！」\n" +
                "ご褒美「先生ぇ！その入力は脂が乗りすぎやんけ！」",
            images: ["nui.png", "eiji.png"]
        },
        { 
            id: "chat_nui_miika_run",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆みいか",
            start_msg:
                "みいか「よーいドン！って言ったら全力で走るからね！」\n" +
                "ご褒美「ま、待つんだゾ！拙者、助走に30分は必要やんけ！」\n" +
                "みいか「考える前に走る！それが人生！」\n" +
                "ご褒美「拙者の人生は休憩込みプランだぞぉ！」",
            text: "安全に行動しなさい。", 
            kana: "あんぜんにこうどうしなさい。",
            romaji: "anzen ni kodo shinasai",
            reaction_good:
                "みいか「はーい！ケガしない範囲で走る！」\n" +
                "ご褒美「先生は拙者の健康管理AIだぞ…」",
            reaction_bad:
                "みいか「先生、変換ミスってる！走る前に確認！」\n" +
                "ご褒美「先生ぇ！入力が転んどるやんけ！」",
            images: ["nui.png", "miika.png"]
        },
        { 
            id: "chat_eiji_jun_clean",
            subtype: "chat",
            group: "3-1",
            sender: "えいじ＆じゅん",
            start_msg:
                "えいじ「はい！トレ後のポカリだ！」\n" +
                "じゅん「それ…あなたの汗が混入していますね？」\n" +
                "えいじ「汗は努力の結晶だ！」\n" +
                "じゅん「努力でも菌は菌です」\n" +
                "えいじ「筋肉が泣いてるぞ！？」",
            text: "衛生面に配慮しなさい。", 
            kana: "えいせいめんにはいりょしなさい。",
            romaji: "eiseimen ni hairyo shinasai",
            reaction_good:
                "じゅん「適切な指示です」\n" +
                "えいじ「よし！次は新品ポカリだ！」",
            reaction_bad:
                "じゅん「先生、誤字は不衛生です」\n" +
                "えいじ「その入力じゃ筋肉も困惑する！」",
            images: ["eiji.png", "jun.png"]
        },
        { 
            id: "chat_nui_rin_healing",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆りん",
            start_msg:
                "りん「きっといいことあるよ〜」\n" +
                "ご褒美「その言葉だけで白米三杯いけるんだゾ…！」\n" +
                "りん「無理しなくていいんだよ？」\n" +
                "ご褒美「無理せず太るのが拙者の流儀だゾ！」",
            text: "穏やかに会話しなさい。", 
            kana: "おだやかにかいわしなさい。",
            romaji: "odayaka ni kaiwa shinasai",
            reaction_good:
                "りん「うん、ありがとう先生」\n" +
                "ご褒美「先生も癒し枠だゾ…」",
            reaction_bad:
                "りん「あれ？先生、打ち間違えてるよ〜」\n" +
                "ご褒美「その誤字、心がざわつくやんけ！」",
            images: ["nui.png", "rin.png"]
        },
        { 
            id: "chat_nui_maho_kahoko",
            subtype: "chat",
            group: "3-1",
            sender: "ご褒美＆まほ＆かほこ",
            start_msg:
                "ご褒美「おおっ！？そのふわふわおさげと三つ編み…拙者の理性が溶けるやんけ！」\n" +
                "まほ「え…？あ、触るのはちょっと…」\n" +
                "かほこ「距離を保ちなさい。許容範囲を超えています」\n" +
                "ご褒美「まだ触ってない！予告だけだゾ！」",
            text: "不用意に近づかないでください。", 
            kana: "ふよういにちかづかないでください。",
            romaji: "fuyoi ni chikazukanaide kudasai",
            reaction_good:
                "かほこ「適切な介入です」\n" +
                "まほ「……ありがとう、先生」\n" +
                "ご褒美「先生は拙者のストッパーだゾ…」",
            reaction_bad:
                "かほこ「誤字があります。注意力が足りません」\n" +
                "ご褒美「先生ぇ！入力が先走っとるやんけ！」",
            images: ["nui.png", "maho.png", "kahoko.png"]
        },
        { 
            id: "chat_nui_yayoi",
            subtype: "chat",
            group: "3-1_3-2",
            sender: "ご褒美＆やよい",
            start_msg:
                "ご褒美「な、なんだその角子っぽい髪型は！！職人芸か！？」\n" +
                "やよい「…あ？作業の邪魔しないでくれる？」\n" +
                "ご褒美「その髪型、わしゃわしゃ適性SSSだゾ！」\n" +
                "やよい「一歩でも近づいたら道具投げるから」",
            text: "作業の妨げはやめなさい。", 
            kana: "さぎょうのぼうがいはやめなさい。",
            romaji: "sagyo no bogai wa yamenasai",
            reaction_good:
                "やよい「…助かった」\n" +
                "ご褒美「先生がいなかったら拙者、木屑になっとった…」",
            reaction_bad:
                "やよい「先生、入力ミスってる」\n" +
                "ご褒美「その誤字、刃物レベルだゾ！」",
            images: ["nui.png", "yayoi.png"]
        },
        { 
            id: "chat_nui_eiji_urara",
            subtype: "chat",
            group: "3-1_3-2",
            sender: "ご褒美＆えいじ＆うらら",
            start_msg:
                "ご褒美「ツイン系は世界の至宝だゾ！」\n" +
                "えいじ「筋肉的にも保護対象だ！」\n" +
                "うらら「……あんたたち、今すぐそこに正座しなさい」\n" +
                "ご褒美「えっ？拙者なにか違法行為を？」\n" +
                "えいじ「筋肉は無罪だろ！？」",
            text: "全員、静かにしなさい。", 
            kana: "ぜんいんしずかにしなさい。",
            romaji: "zenin shizuka ni shinasai",
            reaction_good:
                "うらら「……先生の判断、今回は評価するわ」\n" +
                "えいじ「反省！筋肉封印！」\n" +
                "ご褒美「拙者、魂がしぼんだゾ…」",
            reaction_bad:
                "うらら「先生、誤字？ふざけてるの？」\n" +
                "ご褒美「その入力、火に油やんけ！」",
            images: ["nui.png", "eiji.png", "urara.png"]
        },
            // --- 3-2 ---
        { 
            id: "chat_sumire_hitomi_observe",
            subtype: "chat",
            group: "3-2",
            sender: "すみれ＆ひとみ",
            start_msg:
                "すみれ「……今日も世界がにぎやかだねぇ」\n" +
                "ひとみ「ええ。少し、騒がしすぎるけれど」\n" +
                "すみれ「お花たちがびっくりしちゃう」",
            text: "静かな場所に移動しましょう。", 
            kana: "しずかなばしょにいどうしましょう。",
            romaji: "shizuka na basho ni ido shimasho",
            reaction_good:
                "ひとみ「配慮、ありがとうございます」\n" +
                "すみれ「先生、やさしいね」",
            reaction_bad:
                "すみれ「先生、文字まちがってるよぉ」\n" +
                "ひとみ「落ち着いて入力してください」",
            images: ["sumire.png", "hitomi.png"]
        },
        { 
            id: "chat_shiori_mayuko",
            subtype: "chat",
            group: "3-2",
            sender: "しおり＆まゆこ",
            start_msg:
                "しおり「ちょっとまゆこ、提出物まだ出してないでしょ？」\n" +
                "まゆこ「え〜？明日でよくない？」\n" +
                "しおり「よくないから言ってるの！」\n" +
                "まゆこ「しおりママすぎ〜w」",
            text: "提出期限を守りましょう。", 
            kana: "ていしゅつきげんをまもりましょう。",
            romaji: "teishutsu kigen o mamorimasho",
            reaction_good:
                "しおり「ほら〜！先生も言ってる！」\n" +
                "まゆこ「はーい…あとで出す〜」",
            reaction_bad:
                "しおり「先生、誤字あります」\n" +
                "まゆこ「そこ間違えるのウケるw」",
            images: ["shiori.png", "mayuko.png"]
        },
        { 
            id: "chat_urara_aiko",
            subtype: "chat",
            group: "3-2",
            sender: "うらら＆あいこ",
            start_msg:
                "うらら「そっちの植木、勝手に触らないで」\n" +
                "あいこ「いいじゃねぇか、元気そうだったぜ？」\n" +
                "うらら「管理者は私なんだけど？」\n" +
                "あいこ「へぇ〜、縄張り意識強ぇな」",
            text: "落ち着いて話し合ってください。", 
            kana: "おちついてはなしあってください。",
            romaji: "ochitsuite hanashiatte kudasai",
            reaction_good:
                "あいこ「ま、先生の顔立てるか」\n" +
                "うらら「…今回は許すわ」",
            reaction_bad:
                "うらら「先生、入力ミス」\n" +
                "あいこ「説得力なくなるぜ？」",
            images: ["urara.png", "aiko.png"]
        },
        { 
            id: "chat_yayoi_toro",
            subtype: "chat",
            group: "3-2",
            sender: "やよい＆とろ",
            start_msg:
                "やよい「その弓、バランスいいね」\n" +
                "とろ「まあな。手に馴染む」\n" +
                "やよい「道具は裏切らないよね」\n" +
                "とろ「…分かる」",
            text: "静かに続けてください。", 
            kana: "しずかにつづけてください。",
            romaji: "shizuka ni tsuzukete kudasai",
            reaction_good:
                "とろ「了解」\n" +
                "やよい「助かる」",
            reaction_bad:
                "やよい「先生、変換ミス」\n" +
                "とろ「意味通らない」",
            images: ["yayoi.png", "toro.png"]
        },
        { 
            id: "chat_sumire_hitomi",
            subtype: "chat",
            group: "3-2",
            sender: "すみれ＆ひとみ",
            start_msg:
                "すみれ「最近、空気がちょっとざわざわしてるねぇ」\n" +
                "ひとみ「…誰かが傷ついていないといいのだけれど」\n" +
                "すみれ「お花は静かな方が好きだもんね」",
            text: "このまま穏やかに過ごしましょう。", 
            kana: "このままおだやかにすごしましょう。",
            romaji: "kono mama odayaka ni sugoshimasho",
            reaction_good:
                "ひとみ「ありがとうございます」\n" +
                "すみれ「先生、やさしいねぇ」",
            reaction_bad:
                "すみれ「先生、文字ちがうよ〜」\n" +
                "ひとみ「確認してください」",
            images: ["sumire.png", "hitomi.png"]
        },
        { 
            id: "chat_nami_hoshi",
            subtype: "chat",
            group: "3-2",
            sender: "なみ＆ほし",
            start_msg:
                "なみ「人の反応って星座みたいですわね」\n" +
                "ほし「お、いい例えやん。感情にも軌道があるけん」\n" +
                "なみ「面白いですわ〜」",
            text: "話題を広げすぎないでください。", 
            kana: "わだいをひろげすぎないでください。",
            romaji: "wadai o hirogesuginai de kudasai",
            reaction_good:
                "ほし「はーい」\n" +
                "なみ「了解ですわ」",
            reaction_bad:
                "なみ「先生、誤字ですわ」\n" +
                "ほし「星よりブレとるで？」",
            images: ["nami.png", "hoshi.png"]
        },
        { 
            id: "chat_satsuki_hotomo",
            subtype: "chat",
            group: "3-2",
            sender: "さつき＆ほとも",
            start_msg:
                "さつき「もう少し姿勢を正した方が…」\n" +
                "ほとも「え〜、今いい感じなんだけど」\n" +
                "さつき「だらけすぎです」",
            text: "周囲に配慮してください。", 
            kana: "しゅういにはいりょしてください。",
            romaji: "shui ni hairyo shite kudasai",
            reaction_good:
                "ほとも「はーい…」\n" +
                "さつき「助かります」",
            reaction_bad:
                "さつき「先生、誤字があります」\n" +
                "ほとも「説教感なくなるね」",
            images: ["satsuki.png", "hotomo.png"]
        },
        {
        id: "chat_3-2_urara_aiko_mayuko",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆あいこ＆まゆこ",
        start_msg:
            "うらら「ちょっと、花壇の配置変えたの誰？」\n" +
            "まゆこ「え〜？可愛いからよくない？」\n" +
            "うらら「よくないに決まってるでしょ！計画って言葉知らないの？」\n" +
            "あいこ「おいおい、朝から火力高ぇな。要点言え」\n" +
            "うらら「要点？勝手に触るなって話よ！」\n" +
            "まゆこ「こわ〜！猫ちゃん怒ってる〜」",
        text: "落ち着いて話し合いなさい。",
        kana: "おちついてはなしあいなさい。",
        romaji: "ochitsuite hanashiai nasai",
        reaction_good:
            "あいこ「はいはい、先生の言う通りだ」\n" +
            "うらら「……一応、聞きます」",
        reaction_bad:
            "うらら「先生、漢字間違ってる。そこ直してから言って」\n" +
            "あいこ「説得力、誤字で吹っ飛んでますぜ？」",
        images: ["urara.png", "aiko.png", "mayuko.png"]
        },
        {
        id: "chat_3-2_hitomi_sumire_hotomo",
        subtype: "chat",
        group: "3-2",
        sender: "ひとみ＆すみれ＆ほとも",
        start_msg:
            "すみれ「ひとみちゃん、最近ずっと無理しとるら？」\n" +
            "ひとみ「ううん、大丈夫。私がやれば済むことだから」\n" +
            "ほとも「それ、大丈夫って顔じゃないけど」\n" +
            "ひとみ「……誰かが楽になるなら、それでいいの」\n" +
            "すみれ「それ、ひとみちゃんが沈むやつだよ」",
        text: "無理はしなくていいですよ。",
        kana: "むりはしなくていいですよ。",
        romaji: "muri wa shinakute ii desu yo",
        reaction_good:
            "ひとみ「……ありがとうございます。少し、考えます」",
        reaction_bad:
            "ひとみ「先生、その言葉…変換、違ってます」\n" +
            "ほとも「今の流れで誤字るの、逆にすごいな」",
        images: ["hitomi.png", "sumire.png", "hotomo.png"]
        },
        {
        id: "chat_3-2_nami_observe",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆ほし＆さつき＆とろ",
        start_msg:
            "なみ「観察ログ其ノ一。ほしくんは人の感情を先に拾いすぎですわ」\n" +
            "ほし「え？そげなことあるかなぁ」\n" +
            "なみ「其ノ二。さつきくんは怖がりなのに責任感で前に出ますわね」\n" +
            "さつき「な、なぜそれを……」\n" +
            "なみ「其ノ三。とろくんは無駄な会話を全部省いてますわ」\n" +
            "とろ「……うるさい」",
        text: "観察はほどほどに。",
        kana: "かんさつはほどほどに。",
        romaji: "kansatsu wa hodohodo ni",
        reaction_good:
            "なみ「あら、失礼。ですが事実ですわ」",
        reaction_bad:
            "なみ「先生、その敬語…変ですわよ？」\n" +
            "とろ「ツッコむ前に直せ」",
        images: ["nami.png", "hoshi.png", "satsuki.png", "toro.png"]
        },
        {
        id: "chat_3-2_shiori_urara_mayuko",
        subtype: "chat",
        group: "3-2",
        sender: "しおり＆うらら＆まゆこ",
        start_msg:
            "しおり「ちょっと二人とも、教室散らかしすぎ！」\n" +
            "まゆこ「え〜？あとで片すって〜」\n" +
            "うらら「必要な作業中なんだけど？」\n" +
            "しおり「必要でも順序ってものがあるでしょ！」\n" +
            "まゆこ「しおりちゃんママみたい〜」\n" +
            "うらら「……言い返せないのがムカつく」",
        text: "今のうちに片付けましょう。",
        kana: "いまのうちにかたづけましょう。",
        romaji: "ima no uchi ni katazukemashou",
        reaction_good:
            "しおり「はい！ありがとうございます、先生！」",
        reaction_bad:
            "うらら「先生、日本語おかしいわよ」\n" +
            "まゆこ「それだと説教感なくなるんだけど〜？」",
        images: ["shiori.png", "urara.png", "mayuko.png"]
        },
        {
        id: "chat_3-2_sumire_hitomi",
        subtype: "chat",
        group: "3-2",
        sender: "すみれ＆ひとみ",
        start_msg:
            "すみれ「ひとみちゃん、空、きれいだねぇ」\n" +
            "ひとみ「……うん。でも、ずっと見てると苦しくなる」\n" +
            "すみれ「世界が汚れて見えちゃうら？」\n" +
            "ひとみ「私が汚れてるのかもしれない」\n" +
            "すみれ「そんなことないよ。花は踏まれても咲くら」",
        text: "少し休んでもいいですよ。",
        kana: "すこしやすんでもいいですよ。",
        romaji: "sukoshi yasundemo ii desu yo",
        reaction_good:
            "ひとみ「……はい。ありがとうございます」",
        reaction_bad:
            "すみれ「先生、その助詞、変だに」\n" +
            "ひとみ「今の文、意味が通りません」",
        images: ["sumire.png", "hitomi.png"]
        },
        {
        id: "chat_3-2_toro_yayoi",
        subtype: "chat",
        group: "3-2",
        sender: "とろ＆やよい",
        start_msg:
            "やよい「この削り、力入れすぎだな」\n" +
            "とろ「……無駄な力は使ってない」\n" +
            "やよい「身体の使い方が硬いって言ってんの」\n" +
            "とろ「結果出てるだろ」\n" +
            "やよい「長く続けるなら、そこ直せ」",
        text: "仲良く意見交換してください。",
        kana: "なかよくいけんこうかんしてください。",
        romaji: "nakayoku iken koukan shite kudasai",
        reaction_good:
            "やよい「ま、先生の言う通りだな」",
        reaction_bad:
            "とろ「敬語おかしい」\n" +
            "やよい「文章、削り直した方がいい」",
        images: ["toro.png", "yayoi.png"]
        },
        {
        id: "chat_3-2_nami_log2",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆ほし＆さつき",
        start_msg:
            "なみ「観察ログ続編ですわ」\n" +
            "なみ「ほしくんは人を励ます時、自分の不安を隠しますの」\n" +
            "ほし「そ、そんなつもりは……」\n" +
            "なみ「さつきくんは正解を知っていても、怖くて一歩遅れますわ」\n" +
            "さつき「……否定できません」",
        text: "分析は控えなさい。",
        kana: "ぶんせきはひかえなさい。",
        romaji: "bunseki wa hikae nasai",
        reaction_good:
            "なみ「あら、では控えめに致しますわ」",
        reaction_bad:
            "なみ「先生、その命令形…美しくありませんわ」\n" +
            "さつき「文法的にも少し不自然です」",
        images: ["nami.png", "hoshi.png", "satsuki.png"]
        },
        {
        id: "chat_3-2_urara_fullrage",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆あいこ＆しおり",
        start_msg:
            "うらら「……さっきから何度も言ってるわよね？」\n" +
            "あいこ「まあまあ、そんな眉つり上げなさんな」\n" +
            "うらら「“まあまあ”で片付ける話じゃないの！」\n" +
            "しおり「うららちゃん、落ち着いて…！」\n" +
            "うらら「落ち着いてるわよ！！むしろ今が一番冷静！！」\n" +
            "あいこ「それキレてる人のセリフだぜ」\n" +
            "うらら「——っ、あんたも黙りなさいよ！！」",
        text: "少し声を抑えてください。",
        kana: "すこしこえをおさえてください。",
        romaji: "sukoshi koe wo osaete kudasai",
        reaction_good:
            "うらら「……はい。すみません、先生」\n" +
            "しおり「よかった…」",
        reaction_bad:
            "うらら「先生、助詞抜けてるわよ」\n" +
            "あいこ「その言い回し、逆に火つけてるぜ？」",
        images: ["urara.png", "aiko.png", "shiori.png"]
        },
        {
        id: "chat_3-2_flower_sumire_urara",
        subtype: "chat",
        group: "3-2",
        sender: "すみれ＆うらら",
        start_msg:
            "すみれ「ねぇ、うららちゃん」\n" +
            "うらら「なに」\n" +
            "すみれ「スミレの花言葉、知ってるら？」\n" +
            "うらら「……興味ないって言ったら怒る？」\n" +
            "すみれ「ううん。『小さな幸せ』だって」\n" +
            "うらら「……ふん」\n" +
            "すみれ「マーガレットは『誠実』なんだって」\n" +
            "うらら「……それは、嫌いじゃない」",
        text: "いい話ですね。",
        kana: "いいはなしですね。",
        romaji: "ii hanashi desu ne",
        reaction_good:
            "すみれ「えへへ」\n" +
            "うらら「……まぁ、たまにはね」",
        reaction_bad:
            "うらら「先生、その感想雑すぎ」\n" +
            "すみれ「主語が抜けてて、ふわっとしすぎら」",
        images: ["sumire.png", "urara.png"]
        },
        {
        id: "chat_3-1_uchu_hoshi_fix",
        subtype: "chat",
        group: "3-1",
        sender: "うちゅう＆ほし",
        start_msg:
            "うちゅう「星ってさ、ほっといても勝手に回りよるんよ」\n" +
            "ほし「まぁな。でも見る人がおらんと、ただの光やけん」\n" +
            "うちゅう「ロマン派やなぁ」\n" +
            "ほし「うちゅうは現実派っち感じやな」\n" +
            "うちゅう「現実っちいうか、めんどいだけやけど」\n" +
            "ほし「それも悪くない生き方やと思うちょるよ」",
        text: "いい関係ですね。",
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "ほし「ありがとうございます、先生」",
        reaction_bad:
            "うちゅう「先生、その言い方ざっくりしすぎやろ」\n" +
            "ほし「もうちょっと具体的に言うてほしいです」",
        images: ["uchu.png", "hoshi.png"]
        },
        {
        id: "chat_3-2_urara_vs_toro",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆とろ",
        start_msg:
            "うらら「ちょっと、今の聞いた？」\n" +
            "とろ「……聞こえた」\n" +
            "うらら「だったら返事しなさいよ！」\n" +
            "とろ「必要ないと思った」\n" +
            "うらら「はぁ！？それが一番ムカつくのよ！！」",
        text: "落ち着いて話してください。",
        kana: "おちついてはなしてください。",
        romaji: "ochitsuite hanashite kudasai",
        reaction_good:
            "うらら「……失礼しました、先生」",
        reaction_bad:
            "うらら「先生、誤字ありますけど？」\n" +
            "とろ「そこ気になるタイプなんだ」",
        images: ["urara.png", "toro.png"]
        },
        {
        id: "chat_3-2_hitomi_dark",
        subtype: "chat",
        group: "3-2",
        sender: "ひとみ＆なみ",
        start_msg:
            "ひとみ「……私が我慢すれば、丸く収まるから」\n" +
            "なみ「まぁまぁ、自己犠牲指数が上昇中ですわね」\n" +
            "ひとみ「え？」\n" +
            "なみ「今の発言、典型的“自分を後回しにする犬型”ですわ」",
        text: "無理しなくていいですよ。",
        kana: "むりしなくていいですよ。",
        romaji: "muri shinakute ii desu yo",
        reaction_good:
            "ひとみ「……ありがとうございます、先生」",
        reaction_bad:
            "なみ「先生、“無理しなくて”の送り仮名抜けてますわ」\n" +
            "ひとみ「……そこ、気になります」",
        images: ["hitomi.png", "nami.png"]
        },
        {
        id: "chat_3-2_nami_log_mayuko",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆まゆこ",
        start_msg:
            "まゆこ「ねぇねぇ、次ダンス動画撮らない？」\n" +
            "なみ「今の発言、思考より身体が先行しましたわ」\n" +
            "まゆこ「え？ほめてる？」\n" +
            "なみ「観察してるだけですの」",
        text: "ほどほどにしてください。",
        kana: "ほどほどにしてください。",
        romaji: "hodohodo ni shite kudasai",
        reaction_good:
            "なみ「承知いたしました、先生」",
        reaction_bad:
            "なみ「先生、“ほどほど”がひらがなですわ」\n" +
            "まゆこ「そこ見るんだ！？」",
        images: ["nami.png", "mayuko.png"]
        },
        {
        id: "chat_3-2_flower_birthday",
        subtype: "chat",
        group: "3-2",
        sender: "すみれ＆うらら",
        start_msg:
            "すみれ「2月21日はスミレの日ら」\n" +
            "うらら「……前日がマーガレットね」\n" +
            "すみれ「近いら」\n" +
            "うらら「……偶然にしちゃ、できすぎ」",
        text: "素敵ですね。",
        kana: "すてきですね。",
        romaji: "suteki desu ne",
        reaction_good:
            "すみれ「えへへ」\n" +
            "うらら「……まぁ、悪くないわ」",
        reaction_bad:
            "うらら「先生、“素敵”の漢字違う」\n" +
            "すみれ「そこ直したほうがいいら」",
        images: ["sumire.png", "urara.png"]
        },
        {
        id: "chat_3-2_shiori_hitomi",
        subtype: "chat",
        group: "3-2",
        sender: "しおり＆ひとみ",
        start_msg:
            "しおり「はいひとみちゃん、今日もちゃんとお昼食べた？」\n" +
            "ひとみ「うん…でも、しおりちゃんこそ無理してない？」\n" +
            "しおり「私はいいの！クラス回す係だから！」\n" +
            "ひとみ「……そうやって、自分を後回しにするところが心配なの」",
        text: "いい関係ですね。",
        kana: "いいかんけいですね。",
        romaji: "ii kankei desu ne",
        reaction_good:
            "しおり「えへへ、そう言ってもらえると助かります！」\n" +
            "ひとみ「……少し、救われます」",
        reaction_bad:
            "しおり「先生、ざっくりしすぎです！」\n" +
            "ひとみ「言葉、少し違います……」",
        images: ["shiori.png", "hitomi.png"]
        },
        {
        id: "chat_3-2_toro_sumire",
        subtype: "chat",
        group: "3-2",
        sender: "とろ＆すみれ",
        start_msg:
            "とろ「その花、踏んだら折れる」\n" +
            "すみれ「……わかってるだよ。でも、きれいで」\n" +
            "とろ「きれいでも、壊れる」\n" +
            "すみれ「だから今、見ときたいだよ」",
        text: "考え方が違いますね。",
        kana: "かんがえかたがちがいますね。",
        romaji: "kangaekata ga chigaimasu ne",
        reaction_good:
            "とろ「違うだけだろ」\n" +
            "すみれ「うん、それでいいら」",
        reaction_bad:
            "とろ「先生、変換ミス」\n" +
            "すみれ「そこ、言い方ちょっと違うだよ」",
        images: ["toro.png", "sumire.png"]
        },
        {
        id: "chat_3-2_urara_mayuko",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆まゆこ",
        start_msg:
            "うらら「ちょっと！花壇の土、誰が踏んだのよ！」\n" +
            "まゆこ「え〜？あたし？たぶん？」\n" +
            "うらら「たぶんじゃないでしょ！！」\n" +
            "まゆこ「でもさ〜、ダンスの練習って勢い大事じゃん？」",
        text: "落ち着きなさい。",
        kana: "おちつきなさい。",
        romaji: "ochitsuki nasai",
        reaction_good:
            "うらら「……先生が言うなら一旦ね」\n" +
            "まゆこ「はーい！一旦ね！」",
        reaction_bad:
            "うらら「先生、誤字ってる！」\n" +
            "まゆこ「そこ違くない？w」",
        images: ["urara.png", "mayuko.png"]
        },
        {
        id: "chat_3-2_aiko_yayoi",
        subtype: "chat",
        group: "3-2",
        sender: "あいこ＆やよい",
        start_msg:
            "あいこ「段取り決めりゃ、祭りは勝ちだよ」\n" +
            "やよい「手ぇ動かさねぇと、完成せん」\n" +
            "あいこ「だから両方必要なんだろ？」\n" +
            "やよい「……まあな」",
        text: "協力しましょう。",
        kana: "きょうりょくしましょう。",
        romaji: "kyouryoku shimashou",
        reaction_good:
            "あいこ「話が早いね、先生」\n" +
            "やよい「それが一番だ」",
        reaction_bad:
            "あいこ「先生、言葉抜けてるよ」\n" +
            "やよい「誤字、直しな」",
        images: ["aiko.png", "yayoi.png"]
        },
        {
        id: "chat_3-2_satsuki_hotomo",
        subtype: "chat",
        group: "3-2",
        sender: "さつき＆ほとも",
        start_msg:
            "さつき「その漬物、発酵具合が絶妙ですね」\n" +
            "ほとも「ん〜、気温が良かっただけ」\n" +
            "さつき「偶然を活かすのも才能です」\n" +
            "ほとも「めんどいけどね」",
        text: "いいですね。",
        kana: "いいですね。",
        romaji: "ii desu ne",
        reaction_good:
            "さつき「恐縮です」\n" +
            "ほとも「ま、いっか」",
        reaction_bad:
            "さつき「先生、表現が曖昧です」\n" +
            "ほとも「そこ誤字ってる〜」",
        images: ["satsuki.png", "hotomo.png"]
        },
        {
        id: "chat_3-2_hoshi_nami",
        subtype: "chat",
        group: "3-2",
        sender: "ほし＆なみ",
        start_msg:
            "ほし「今日は星がよく見えるけんな」\n" +
            "なみ「まあ、空を見上げる余裕がある人が少ないですわね」\n" +
            "ほし「見てくれる人がおらんと、寂しいんよ」\n" +
            "なみ「だからこそ、あなたは優しいのですわ」",
        text: "感性が豊かですね。",
        kana: "かんせいがゆたかですね。",
        romaji: "kansei ga yutaka desu ne",
        reaction_good:
            "ほし「ありがとうございます、先生」\n" +
            "なみ「お褒めにあずかり光栄ですわ」",
        reaction_bad:
            "ほし「先生、そこ違うけん」\n" +
            "なみ「誤字ですわよ？」",
        images: ["hoshi.png", "nami.png"]
        },
        {
        id: "chat_3-2_urara_yayoi",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆やよい",
        start_msg:
            "うらら「ちょっと、その作業机！土ついてるんだけど！」\n" +
            "やよい「削りカスだ」\n" +
            "うらら「花壇の近くでやらないでって言ってるでしょ！」\n" +
            "やよい「場所はここが一番、手ぇ動く」",
        text: "ルールを守りましょう。",
        kana: "るーるをまもりましょう。",
        romaji: "ru-ru o mamorimashou",
        reaction_good:
            "うらら「ほら、先生もこう言ってる！」\n" +
            "やよい「……後で掃く」",
        reaction_bad:
            "うらら「先生、誤字！」\n" +
            "やよい「そこ、違う」",
        images: ["urara.png", "yayoi.png"]
        },
        {
        id: "chat_3-2_nami_sumire",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆すみれ",
        start_msg:
            "なみ「あなた、いつも人の後ろに下がりますわね」\n" +
            "すみれ「……前に出るの、ちょっと怖いだよ」\n" +
            "なみ「でも誰かのためなら、沈めますでしょう？」\n" +
            "すみれ「……うん、そうかもだら」",
        text: "自分も大切にしなさい。",
        kana: "じぶんもたいせつにしなさい。",
        romaji: "jibun mo taisetsu ni shinasai",
        reaction_good:
            "すみれ「……ありがとうだよ」\n" +
            "なみ「その言葉、今のあなたに必要でしたわ」",
        reaction_bad:
            "なみ「先生、変換が甘いですわ」\n" +
            "すみれ「そこ、違うと思うだら」",
        images: ["nami.png", "sumire.png"]
        },
        {
        id: "chat_3-2_shiori_toro",
        subtype: "chat",
        group: "3-2",
        sender: "しおり＆とろ",
        start_msg:
            "しおり「とろくん、手当てした？その指！」\n" +
            "とろ「かすっただけ」\n" +
            "しおり「それ一番危ないやつ！」\n" +
            "とろ「動く分には問題ない」",
        text: "心配されていますよ。",
        kana: "しんぱいされていますよ。",
        romaji: "shinpai sarete imasu yo",
        reaction_good:
            "しおり「ほら〜！」\n" +
            "とろ「……わかった」",
        reaction_bad:
            "とろ「先生、打ち間違い」\n" +
            "しおり「そこ誤字ですよ！」",
        images: ["shiori.png", "toro.png"]
        },
        {
        id: "chat_3-2_hitomi_aiko",
        subtype: "chat",
        group: "3-2",
        sender: "ひとみ＆あいこ",
        start_msg:
            "ひとみ「私がやるよ。皆の負担になるから……」\n" +
            "あいこ「バカ言いな。潰れたら元も子もないよ」\n" +
            "ひとみ「でも……」\n" +
            "あいこ「“でも”は禁止。戦力は守って使うもんだ」",
        text: "無理をしないように。",
        kana: "むりをしないように。",
        romaji: "muri o shinai you ni",
        reaction_good:
            "ひとみ「……はい」\n" +
            "あいこ「よし、それでいい」",
        reaction_bad:
            "あいこ「先生、言葉足りないね」\n" +
            "ひとみ「そこ、誤字です……」",
        images: ["hitomi.png", "aiko.png"]
        },
        {
        id: "chat_3-2_nami_toro",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆とろ",
        start_msg:
            "なみ「弓を引くとき、何を考えてますの？」\n" +
            "とろ「距離と角度」\n" +
            "なみ「感情は？」\n" +
            "とろ「邪魔」",
        text: "対照的ですね。",
        kana: "たいしょうてきですね。",
        romaji: "taishouteki desu ne",
        reaction_good:
            "なみ「ふふ、面白いですわ」\n" +
            "とろ「そうか」",
        reaction_bad:
            "とろ「先生、誤字」\n" +
            "なみ「そこ、違いますわよ？」",
        images: ["nami.png", "toro.png"]
        },
        {
        id: "chat_3-2_sumire_shiori",
        subtype: "chat",
        group: "3-2",
        sender: "すみれ＆しおり",
        start_msg:
            "すみれ「このスミレ、寒さに強いら？」\n" +
            "しおり「うんうん！だから今の時期ちょうどいいよ！」\n" +
            "すみれ「……お花も、がんばってるだね」\n" +
            "しおり「すみれちゃんも十分がんばってるって！」",
        text: "いい時間ですね。",
        kana: "いいじかんですね。",
        romaji: "ii jikan desu ne",
        reaction_good:
            "しおり「ですよね！」\n" +
            "すみれ「……えへへ」",
        reaction_bad:
            "しおり「先生、誤字ありますよ！」\n" +
            "すみれ「そこ、違うと思うだよ」",
        images: ["sumire.png", "shiori.png"]
        },
        {
        id: "chat_3-2_urara_aiko",
        subtype: "chat",
        group: "3-2",
        sender: "うらら＆あいこ",
        start_msg:
            "うらら「マーガレットは手入れが命なのよ」\n" +
            "あいこ「わかるねぇ。放っとくとすぐ荒れる」\n" +
            "うらら「……話わかるじゃない」\n" +
            "あいこ「伊達に下町で揉まれてないよ」",
        text: "気が合いますね。",
        kana: "きがあいますね。",
        romaji: "ki ga aimasu ne",
        reaction_good:
            "うらら「まぁ、悪くないわね」\n" +
            "あいこ「だろ？」",
        reaction_bad:
            "あいこ「先生、言葉抜けてるよ」\n" +
            "うらら「ちゃんと書きなさい」",
        images: ["urara.png", "aiko.png"]
        },
        {
        id: "chat_3-2_hotomo_mayuko",
        subtype: "chat",
        group: "3-2",
        sender: "ほとも＆まゆこ",
        start_msg:
            "まゆこ「ねぇねぇ！この振りどう？」\n" +
            "ほとも「……疲れそう」\n" +
            "まゆこ「えー！楽しいのに！」\n" +
            "ほとも「後で里芋食べるなら」",
        text: "仲が良いですね。",
        kana: "なかがいいですね。",
        romaji: "naka ga ii desu ne",
        reaction_good:
            "まゆこ「でしょー！」\n" +
            "ほとも「まぁな」",
        reaction_bad:
            "ほとも「先生、誤字」\n" +
            "まゆこ「そこ違うよー！」",
        images: ["hotomo.png", "mayuko.png"]
        },
        {
        id: "chat_3-2_nami_toro_sumire",
        subtype: "chat",
        group: "3-2",
        sender: "なみ＆とろ＆すみれ",
        start_msg:
            "なみ「人は三種類に分けられますわ」\n" +
            "とろ「分ける意味ある？」\n" +
            "すみれ「……私は分けられたくないだよ」\n" +
            "なみ「ふふ、それも一理」",
        text: "静かな会話ですね。",
        kana: "しずかなかいわですね。",
        romaji: "shizuka na kaiwa desu ne",
        reaction_good:
            "すみれ「落ち着くだよ」\n" +
            "とろ「悪くない」",
        reaction_bad:
            "なみ「先生、表現が雑ですわ」\n" +
            "とろ「誤字」",
        images: ["nami.png", "toro.png", "sumire.png"]
        },
        {
        id: "chat_3-2_hitomi_shiori_yayoi",
        subtype: "chat",
        group: "3-2",
        sender: "ひとみ＆しおり＆やよい",
        start_msg:
            "ひとみ「私、準備しておきますね……」\n" +
            "しおり「じゃあ私はチェックする！」\n" +
            "やよい「……手ぇ動かす」\n" +
            "しおり「完璧じゃんこの布陣！」",
        text: "協力できています。",
        kana: "きょうりょくできています。",
        romaji: "kyouryoku dekite imasu",
        reaction_good:
            "ひとみ「よかった……」\n" +
            "しおり「ね！」",
        reaction_bad:
            "しおり「先生、字抜けてます！」\n" +
            "やよい「そこ違う」",
        images: ["hitomi.png", "shiori.png", "yayoi.png"]
        },
    // --- 教員 ---
        { 
            id: "chat_teacher", 
            subtype: "chat", 
            group: "teacher",
            sender: "【極秘】教員連絡網",
            start_msg: "克己「今日の体育、グラウンド100周に変更するか！」\n芽衣「えぇっ！？生徒が倒れちゃいますよぉ💦」\n克己「甘い！甘すぎる！なぁ先生、お前もそう思うだろ！？」",
            text: "妻鹿先生、それはさすがにやりすぎです。", 
            kana: "めがせんせい、それはさすがにやりすぎです。", 
            romaji: "megasensei sore wa sasuga ni yalicegi desu", 
            reaction_good: "克己「むぅ…先生がそう言うなら50周にしておくか…」\n芽衣「ホッ…ありがとうございますぅ〜🍵」",
            reaction_bad: "克己「なんだその入力は！お前も走り足りないようだな！！」",
            images: ["katsumi.png", "mei.png"]
        },
];
