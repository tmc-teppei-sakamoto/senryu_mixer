const database = {};

function addContent(key) {
  return function (content) {
    if (!database[key]) {
      database[key] = [];
    }
    const data = content.split(" ");
    database[key].push(data);
  };
}

// サラリーマン川柳を追加する関数を作成
const addSaraContent = addContent("sara");
const addSilverContent = addContent("silver");
const addKurashiContent = addContent("kurashi");

// サラリーマン川柳を追加
{
  addSaraContent("ボディコンを 無理して着たら ボンレスハム");
  addSaraContent("まだ寝てる 帰ってみれば もう寝てる");
  addSaraContent("コストダウン さけぶあんたが コスト高");
  addSaraContent("わが家では 子供ポケモン パパノケモン");
  addSaraContent("「早くやれ」 そう言うことは 早く言え");
  addSaraContent("『ゴハンよ』と 呼ばれて行けば タマだった");
  addSaraContent("やせてやる!! コレ食べてから やせてやる!!");
  addSaraContent("連れ込むな！ わたしは急に 泊まれない");
  addSaraContent("いい家内 10年経ったら おっ家内");
  addSaraContent("昼食は 妻がセレブで 俺セルフ");
  addSaraContent("「課長いる？」 返ったこたえは 「いりません！」");
  addSaraContent("オレオレに 亭主と知りつつ 電話切る");
  addSaraContent("タバコより 体に悪い 妻のグチ");
  addSaraContent("デジカメの エサはなんだと 孫に聞く");
  addSaraContent("ドットコム どこが混むのと 聞く上司");
  addSaraContent("プロポーズ あの日にかえって ことわりたい");
  addSaraContent("コストダウン さけぶあんたが コスト高");
  addSaraContent("「宝くじ 当たれば辞める」が 合言葉");
  addSaraContent("久しぶり～ 名が出ないまま じゃあまたね～");
  addSaraContent("仕分け人 妻に比べりゃ まだ甘い");
  addSaraContent("しゅうち心 なくした妻は ポーニョポニョ");
  addSaraContent("「空気読め!!」 それより部下の 気持ち読め!!");
  addSaraContent("脳年齢 年金すでに もらえます");
  addSaraContent("会社へは 来るなと上司 行けと妻");
  addSaraContent("我が家では 最強スクラム 妻・娘");
  addSaraContent("五時過ぎた カモンベイビー ＵＳＡ（うさ）ばらし");
  addSaraContent("スポーツジム 車で行って チャリをこぐ");
  addSaraContent("ゆとりでしょ？ そう言うあなたは バブルでしょ？");
  addSaraContent("退職金 もらった瞬間 妻ドローン");
  addSaraContent("皮下脂肪 資源にできれば ノーベル賞");
  addSaraContent("うちの嫁 後ろ姿は フナッシー");
  addSaraContent("いい夫婦 今じゃどうでも いい夫婦");
}

// シルバー川柳を追加
{
  addSilverContent("みずあそび じじとおそろい 手しわしわ");
  addSilverContent("既読スルー いいえ只今 格闘中");
  addSilverContent("メルカリで 誰も買わない ワシの服");
  addSilverContent("失言は 家庭内でも 命取り");
  addSilverContent("婚活の 殺し文句は 「看取ります」");
  addSilverContent("居ないとき 妻の枕を 尻に敷く");
  addSilverContent("じいちゃんに スマホ教える 孫5才");
  addSilverContent("自分でも 事実か分からぬ 武勇伝");
  addSilverContent("若作り しても話題は みな昭和");
}

// くらしの川柳(https://eonet.jp/kurashi/senryu/prize-winning/06_eomaga.html)
{
  addKurashiContent("夫婦仲 猫が取り持つ 癒し顔");
  addKurashiContent("平日か 土曜日日曜 今日何曜");
  addKurashiContent("上司より 妻の視線が 突き刺さる");
  addKurashiContent("在宅で 緊急事態 僕の腹");
  addKurashiContent("知り過ぎた ステイホームで 妻の日々");
  addKurashiContent("WEB会議 背景だけは 世界旅行");
  addKurashiContent("古ルータ 速度訊かれて 照れワーク");
  addKurashiContent("この機会 変わる思いは 有るのにな");
  addKurashiContent("三が日 抱負も忘れ ホームステイ");
  addKurashiContent("食べ過ぎて マラソンするか ゲーム機で");
  addKurashiContent("巣ごもりも 羽ばたく未来の 充電期間");
}
