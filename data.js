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
        reaction_good: "ももか「……ま、悪くないわね。ちゃんとできてるじゃない」",
        reaction_bad: "ももか「は？名前間違えるとかありえないんだけど。目ついてる？」",
        reaction_fast: "ももか「ちょ、はやっ…！別に嬉しくなんか…ないし！」",
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
        start_msg: "すおう「村瀬蘇芳。……やだね、形式ばって」",
        reaction_good: "すおう「へぇ、合ってるじゃん。意外」", 
        reaction_bad: "すおう「そこ違うよ先生。雑だねぇ」",
        reaction_fast: "すおう「早すぎ。さては慣れてるね？」", 
        reaction_slow: "すおう「……まだ？ま、待つけどさ」", 
        love_msg: "すおう「先生、俺の名前ちゃんと覚えたんだ。ふぅん」",
        image: "suo.png"
    },
    { 
        id: "1-2_elua", 
        subtype: "roster",
        group: "1-2",
        text: "茂地 榎留愛", 
        kana: "もじ えるあ", 
        romaji: "moji elua", 
        start_msg: "えるあ「茂地榎留愛。よろしく、先生」",
        reaction_good: "えるあ「うん、合ってるよ」", 
        reaction_bad: "えるあ「そこ違う。ちゃんと確認しな」",
        reaction_fast: "えるあ「早いね。要領いいじゃん」", 
        reaction_slow: "えるあ「遅いけど…まあ聞くから続けて」", 
        love_msg: "えるあ「先生、意外とちゃんとしてるんだね」",
        image: "elua.png"
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
        start_msg: "めり「えっと……な、仲村です。あの、書きにくかったら言ってください…失礼でしたら本当にすみません…」",
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
        id: "1-3_kota", 
        subtype: "roster",
        group: "1-3",
        text: "桃山 小歌", 
        kana: "ももやま こうた", 
        romaji: "momoyama kota", 
        start_msg: "こうた「桃山小歌です。……えっと、きちんと書いていただけると助かります」",
        reaction_good: "こうた「はい、完璧です。ありがとうございます、先生」", 
        reaction_bad: "こうた「……すみません、そこ間違ってます。修正お願いします」",
        reaction_fast: "こうた「早いですね。流石です」", 
        reaction_slow: "こうた「急ぎませんので、大丈夫ですよ」", 
        love_msg: "こうた「先生に名前を呼ばれると……少し安心します」",
        image: "kota.png"
    },
    { 
        id: "1-3_misaki", 
        subtype: "roster",
        group: "1-3",
        text: "勇惣 岬咲", 
        kana: "ゆそう みさき", 
        romaji: "yuso misaki", 
        start_msg: "みさき「ゆ、勇惣です……あの、漢字むずかしくて……ごめんなさい……」",
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
        id: "1-4_yuki", 
        subtype: "roster",
        group: "1-4",
        text: "市川 宥暉", 
        kana: "いちかわ ゆうき", 
        romaji: "ichikawa yuki", 
        start_msg: "ゆうき「市川宥暉です！先生、あとで占いしてあげよっか？」",
        reaction_good: "ゆうき「うんうん、いい流れ来てるよ〜！」", 
        reaction_bad: "ゆうき「あれ？星の巡り的にそこ違うかも？」",
        reaction_fast: "ゆうき「はやっ！今日ツイてるね、先生！」", 
        reaction_slow: "ゆうき「ゆっくりで大丈夫〜、運命は逃げないからさ」", 
        love_msg: "ゆうき「先生に名前呼ばれると、ちょっと運気上がる気する」",
        image: "yuki.png"
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
        romaji: "teluada sayaka", 
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
        start_msg: "めい「あ、あの…私なんかでいいんですかぁ？」",
        reaction_good: "めい「わぁっ！すごいです先生！憧れちゃいますぅ！」",
        reaction_bad: "めい「あぅっ…私みたいにドジしちゃダメですよぉ💦」",
        image: "mei.png"
    },
    {
        id: "teacher_katsumi",
        subtype: "roster",
        group: "teacher",
        text: "妻鹿 克己",
        kana: "めがかつみ",
        romaji: "mega katsumi",
        start_msg: "かつみ「おう！俺の名前を打つ気合はあるか！！」",
        reaction_good: "かつみ「いいパンチだ！その調子で走り抜けろ！」",
        reaction_bad: "かつみ「たるんどる！指立て伏せ20回だ！」",
        image: "katsumi.png"
    },
    {
        id: "teacher_murasame",
        subtype: "roster",
        group: "teacher",
        text: "村雨 巳太楼",
        kana: "むらさめみたろう",
        romaji: "murasame mitarou",
        start_msg: "みたろう「…私の名前？時間の無駄では？」",
        reaction_good: "みたろう「…まあ、最低限の仕事はできる用ですね。」",
        reaction_bad: "みたろう「非効率的です。出直してきなさい。」",
        image: "murasame.png"
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
        id: "msg_gohobi", 
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
        image: "gohobi.png"
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
        text: "ねぇ先生。今日の体育、あたし一番だったんだけど？ちゃんと見てた？🐾✨",
        kana: "きょうはよくがんばっていましたね。けがもなくてよかったです。",
        romaji: "kyou wa yoku ganbatte imashita ne. kega mo nakute yokatta desu.",
        start_msg: "（ももかからLINEが届きました）",
        reaction_good: "ももか「……べ、別に褒めてほしかったわけじゃないし///」",
        reaction_bad: "ももか「は？先生、文おかしくない？ちゃんと書きなさいよ」",
        reaction_fast: "ももか「即レス？ふーん…まぁ、悪くないわね」",
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
        id: "msg_elua",
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
        image: "elua.png"
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
        text: "せんせー！きょうさぁ、むぎめっちゃねむくてさ〜！でもがんばったっけ！えらい！？",
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
        id: "msg_soushi",
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
        image: "soushi.png"
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

    // -------------------------------------
    // 🗣️ グループチャット参加
    // -------------------------------------
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
        id: "chat_jiha_kotori_deluail",
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
            id: "chat_teacher", 
            subtype: "chat", 
            group: "teacher",
            sender: "【極秘】教員連絡網",
            start_msg: "克己「今日の体育、グラウンド100周に変更するか！」\n芽衣「えぇっ！？生徒が倒れちゃいますよぉ💦」\n克己「甘い！甘すぎる！なぁ先生、お前もそう思うだろ！？」",
            text: "妻鹿先生、それはさすがにやりすぎです。", 
            kana: "めがせんせい、それはさすがにやりすぎです。", 
            romaji: "megasensei sore wa sasuga ni yarisugi desu", 
            reaction_good: "克己「むぅ…先生がそう言うなら50周にしておくか…」\n芽衣「ホッ…ありがとうございますぅ〜🍵」",
            reaction_bad: "克己「なんだその入力は！お前も走り足りないようだな！！」",
            images: ["katsumi.png", "mei.png"]
        },
];
