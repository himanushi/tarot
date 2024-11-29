import {
  Orientation,
  TarotCardCategory,
  type tarotCards,
  type tarotSpreadPositions,
  type tarotSpreads,
} from "./schema";

export const seedTarotCards: (typeof tarotCards.$inferInsert)[] = [
  // 大アルカナ
  {
    id: 1,
    name: "THE FOOL",
    description: "新しい旅立ち、自由、無限の可能性を象徴するカード",
    uprightMeaning: "冒険心、自由、純粋さ、信念",
    reversedMeaning: "不注意、愚かさ、無計画、リスクを取ることの恐れ",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 0,
  },
  {
    id: 2,
    name: "THE MAGICIAN",
    description: "創造力、行動、意志力を象徴するカード",
    uprightMeaning: "創造力、集中、成功、技術",
    reversedMeaning: "計画の失敗、悪用、不誠実",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 1,
  },
  {
    id: 3,
    name: "THE HIGH PRIESTESS",
    description: "知識、直感、秘密を象徴するカード",
    uprightMeaning: "直感、知識、洞察、秘密",
    reversedMeaning: "隠れた意図、不正確な情報、混乱",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 2,
  },
  {
    id: 4,
    name: "THE EMPRESS",
    description: "母性、豊かさ、創造力を象徴するカード",
    uprightMeaning: "豊かさ、成長、創造、育成",
    reversedMeaning: "不安、抑圧、停滞、損失",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 3,
  },
  {
    id: 5,
    name: "THE EMPEROR",
    description: "権威、秩序、安定を象徴するカード",
    uprightMeaning: "安定、リーダーシップ、成功、保護",
    reversedMeaning: "独裁的、支配欲、柔軟性の欠如",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 4,
  },
  {
    id: 6,
    name: "THE HIEROPHANT",
    description: "信仰、伝統、導きを象徴するカード",
    uprightMeaning: "精神性、信仰、指導、教育",
    reversedMeaning: "独断、偏見、偽善、不信",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 5,
  },
  {
    id: 7,
    name: "THE LOVERS",
    description: "選択、調和、愛を象徴するカード",
    uprightMeaning: "愛、調和、選択、コミットメント",
    reversedMeaning: "不一致、分裂、誘惑、不信感",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 6,
  },
  {
    id: 8,
    name: "THE CHARIOT",
    description: "意志力、勝利、コントロールを象徴するカード",
    uprightMeaning: "意志、成功、決断、進歩",
    reversedMeaning: "自制心の欠如、敗北、無計画",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 7,
  },
  {
    id: 9,
    name: "STRENGTH",
    description: "内なる強さ、勇気、忍耐を象徴するカード",
    uprightMeaning: "強さ、勇気、忍耐、自己信頼",
    reversedMeaning: "弱さ、不安、無力、恐怖",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 8,
  },
  {
    id: 10,
    name: "THE HERMIT",
    description: "内省、孤独、知恵を象徴するカード",
    uprightMeaning: "洞察、内省、知恵、ガイド",
    reversedMeaning: "孤立、無目的、自己中心的",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 9,
  },
  {
    id: 11,
    name: "WHEEL of FORTUNE",
    description: "運命、変化、転換点を象徴するカード",
    uprightMeaning: "転換、運命、チャンス、流れ",
    reversedMeaning: "逆境、不運、制御不能",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 10,
  },
  {
    id: 12,
    name: "JUSTICE",
    description: "公正、責任、バランスを象徴するカード",
    uprightMeaning: "公平、公正、責任、真実",
    reversedMeaning: "不正、不公平、偏見、無責任",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 11,
  },
  {
    id: 13,
    name: "THE HANGED MAN",
    description: "犠牲、視点の変化、内なる探求を象徴するカード",
    uprightMeaning: "内省、新しい視点、忍耐、自己犠牲",
    reversedMeaning: "停滞、無駄な犠牲、犠牲の拒否",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 12,
  },
  {
    id: 14,
    name: "DEATH",
    description: "終わり、新しい始まり、変容を象徴するカード",
    uprightMeaning: "変容、終わり、再生、新しい始まり",
    reversedMeaning: "抵抗、変化への恐れ、停滞",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 13,
  },
  {
    id: 15,
    name: "TEMPERANCE",
    description: "調和、バランス、自己制御を象徴するカード",
    uprightMeaning: "調和、自己制御、忍耐、バランス",
    reversedMeaning: "過剰、不均衡、自己管理の欠如",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 14,
  },
  {
    id: 16,
    name: "THE DEVIL",
    description: "束縛、誘惑、物質的な執着を象徴するカード",
    uprightMeaning: "誘惑、執着、依存、物質主義",
    reversedMeaning: "解放、執着からの解放、自己認識",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 15,
  },
  {
    id: 17,
    name: "THE TOWER",
    description: "突然の変化、破壊、啓示を象徴するカード",
    uprightMeaning: "変化、破壊、啓示、再構築",
    reversedMeaning: "抵抗、回避、壊滅的な誤解",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 16,
  },
  {
    id: 18,
    name: "THE STAR",
    description: "希望、癒し、指針を象徴するカード",
    uprightMeaning: "希望、癒し、インスピレーション、信仰",
    reversedMeaning: "失望、混乱、信念の欠如",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 17,
  },
  {
    id: 19,
    name: "THE MOON",
    description: "直感、不安、潜在意識を象徴するカード",
    uprightMeaning: "直感、夢、不安、未知",
    reversedMeaning: "明晰、真実、不安の解消",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 18,
  },
  {
    id: 20,
    name: "THE SUN",
    description: "成功、喜び、エネルギーを象徴するカード",
    uprightMeaning: "成功、喜び、生命力、達成",
    reversedMeaning: "自信過剰、楽観的すぎる、停滞",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 19,
  },
  {
    id: 21,
    name: "JUDGEMENT",
    description: "決断、再生、カルマを象徴するカード",
    uprightMeaning: "再生、決断、覚醒、カルマ",
    reversedMeaning: "躊躇、後悔、自己批判",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 20,
  },
  {
    id: 22,
    name: "THE WORLD",
    description: "達成、完成、統合を象徴するカード",
    uprightMeaning: "完成、達成、統合、新たな始まり",
    reversedMeaning: "未完成、不完全、停滞、欠如感",
    category: TarotCardCategory.MajorArcana,
    cardNumber: 21,
  },
  // 棒
  {
    id: 23,
    name: "ACE of WANDS",
    description: "創造力、新しい始まり、可能性を象徴するカード",
    uprightMeaning: "創造、情熱、新しい始まり、インスピレーション",
    reversedMeaning: "遅延、失敗、創造性の欠如、意欲の低下",
    category: TarotCardCategory.Wands,
    cardNumber: 1,
  },
  {
    id: 24,
    name: "TWO of WANDS",
    description: "計画、選択、展望を象徴するカード",
    uprightMeaning: "計画、決断、目標の設定、進歩",
    reversedMeaning: "混乱、決断力の欠如、停滞",
    category: TarotCardCategory.Wands,
    cardNumber: 2,
  },
  {
    id: 25,
    name: "THREE of WANDS",
    description: "展望、拡大、探求を象徴するカード",
    uprightMeaning: "前進、探求、冒険、拡大",
    reversedMeaning: "遅延、期待外れ、準備不足",
    category: TarotCardCategory.Wands,
    cardNumber: 3,
  },
  {
    id: 26,
    name: "FOUR of WANDS",
    description: "安定、祝福、調和を象徴するカード",
    uprightMeaning: "祝福、安定、調和、家族",
    reversedMeaning: "不安定、争い、不一致",
    category: TarotCardCategory.Wands,
    cardNumber: 4,
  },
  {
    id: 27,
    name: "FIVE of WANDS",
    description: "競争、挑戦、葛藤を象徴するカード",
    uprightMeaning: "競争、対立、挑戦、緊張",
    reversedMeaning: "葛藤の回避、不和の解決、協力",
    category: TarotCardCategory.Wands,
    cardNumber: 5,
  },
  {
    id: 28,
    name: "SIX of WANDS",
    description: "勝利、成功、承認を象徴するカード",
    uprightMeaning: "成功、承認、名誉、勝利",
    reversedMeaning: "誤解、承認の欠如、成功の遅れ",
    category: TarotCardCategory.Wands,
    cardNumber: 6,
  },
  {
    id: 29,
    name: "SEVEN of WANDS",
    description: "防衛、勇気、自己主張を象徴するカード",
    uprightMeaning: "防衛、勇気、困難の克服、自己主張",
    reversedMeaning: "意志の弱さ、防御の失敗、退却",
    category: TarotCardCategory.Wands,
    cardNumber: 7,
  },
  {
    id: 30,
    name: "EIGHT of WANDS",
    description: "迅速な行動、進展、コミュニケーションを象徴するカード",
    uprightMeaning: "迅速な行動、進展、旅行、コミュニケーション",
    reversedMeaning: "遅延、混乱、コミュニケーションの問題",
    category: TarotCardCategory.Wands,
    cardNumber: 8,
  },
  {
    id: 31,
    name: "NINE of WANDS",
    description: "忍耐、回復力、守備を象徴するカード",
    uprightMeaning: "忍耐、守備、最後の努力、回復力",
    reversedMeaning: "疲労、無防備、困難への恐れ",
    category: TarotCardCategory.Wands,
    cardNumber: 9,
  },
  {
    id: 32,
    name: "TEN of WANDS",
    description: "負担、責任、努力を象徴するカード",
    uprightMeaning: "責任、努力、達成、負担",
    reversedMeaning: "負担の解放、責任の分担、怠惰",
    category: TarotCardCategory.Wands,
    cardNumber: 10,
  },
  {
    id: 33,
    name: "PAGE of WANDS",
    description: "情熱、発見、新しい可能性を象徴するカード",
    uprightMeaning: "情熱、探求、新しい始まり、冒険心",
    reversedMeaning: "無計画、衝動、集中力の欠如",
    category: TarotCardCategory.Wands,
    cardNumber: 11,
  },
  {
    id: 34,
    name: "KNIGHT of WANDS",
    description: "冒険、行動力、エネルギーを象徴するカード",
    uprightMeaning: "行動力、エネルギー、冒険心、熱意",
    reversedMeaning: "無謀、せっかち、無責任",
    category: TarotCardCategory.Wands,
    cardNumber: 12,
  },
  {
    id: 35,
    name: "QUEEN of WANDS",
    description: "情熱、自信、魅力を象徴するカード",
    uprightMeaning: "情熱、自信、魅力、独立",
    reversedMeaning: "嫉妬、不誠実、過剰な自己主張",
    category: TarotCardCategory.Wands,
    cardNumber: 13,
  },
  {
    id: 36,
    name: "KING of WANDS",
    description: "リーダーシップ、ビジョン、成功を象徴するカード",
    uprightMeaning: "リーダーシップ、ビジョン、成功、目標達成",
    reversedMeaning: "独裁、頑固、自己中心的",
    category: TarotCardCategory.Wands,
    cardNumber: 14,
  },
  // 金貨
  {
    id: 37,
    name: "ACE of PENTACLES",
    description: "物質的な豊かさ、新しい始まり、繁栄を象徴するカード",
    uprightMeaning: "繁栄、機会、安定、新しい始まり",
    reversedMeaning: "遅延、損失、機会の欠如、不安定",
    category: TarotCardCategory.Pentacles,
    cardNumber: 1,
  },
  {
    id: 38,
    name: "TWO of PENTACLES",
    description: "バランス、柔軟性、調整を象徴するカード",
    uprightMeaning: "バランス、調整、優先順位、柔軟性",
    reversedMeaning: "混乱、不均衡、調整の失敗、疲労",
    category: TarotCardCategory.Pentacles,
    cardNumber: 2,
  },
  {
    id: 39,
    name: "THREE of PENTACLES",
    description: "チームワーク、スキル、計画を象徴するカード",
    uprightMeaning: "チームワーク、スキル、成功への計画、協力",
    reversedMeaning: "不協和、計画の失敗、努力の欠如",
    category: TarotCardCategory.Pentacles,
    cardNumber: 3,
  },
  {
    id: 40,
    name: "FOUR of PENTACLES",
    description: "所有、保守、安定を象徴するカード",
    uprightMeaning: "所有、安定、保守的、節約",
    reversedMeaning: "執着、物質主義、孤立、浪費",
    category: TarotCardCategory.Pentacles,
    cardNumber: 4,
  },
  {
    id: 41,
    name: "FIVE of PENTACLES",
    description: "困難、損失、困窮を象徴するカード",
    uprightMeaning: "困難、損失、孤立、支援の欠如",
    reversedMeaning: "回復、支援、希望、困難の克服",
    category: TarotCardCategory.Pentacles,
    cardNumber: 5,
  },
  {
    id: 42,
    name: "SIX of PENTACLES",
    description: "与えること、受け取ること、助け合いを象徴するカード",
    uprightMeaning: "寛大さ、助け合い、支援、平等",
    reversedMeaning: "不平等、施しの欠如、搾取",
    category: TarotCardCategory.Pentacles,
    cardNumber: 6,
  },
  {
    id: 43,
    name: "SEVEN of PENTACLES",
    description: "忍耐、評価、長期的な視野を象徴するカード",
    uprightMeaning: "忍耐、評価、努力、見返り",
    reversedMeaning: "焦り、失敗、計画の見直し",
    category: TarotCardCategory.Pentacles,
    cardNumber: 7,
  },
  {
    id: 44,
    name: "EIGHT of PENTACLES",
    description: "努力、スキル向上、献身を象徴するカード",
    uprightMeaning: "努力、スキル向上、専門性、献身",
    reversedMeaning: "怠慢、スキル不足、集中力の欠如",
    category: TarotCardCategory.Pentacles,
    cardNumber: 8,
  },
  {
    id: 45,
    name: "NINE of PENTACLES",
    description: "独立、物質的な満足、豊かさを象徴するカード",
    uprightMeaning: "独立、豊かさ、物質的な満足、成果",
    reversedMeaning: "依存、浪費、不安定、孤立",
    category: TarotCardCategory.Pentacles,
    cardNumber: 9,
  },
  {
    id: 46,
    name: "TEN of PENTACLES",
    description: "豊かさ、家族、伝統を象徴するカード",
    uprightMeaning: "家族、豊かさ、伝統、安定",
    reversedMeaning: "不安定、分裂、財政的困難",
    category: TarotCardCategory.Pentacles,
    cardNumber: 10,
  },
  {
    id: 47,
    name: "PAGE of PENTACLES",
    description: "学び、好奇心、機会を象徴するカード",
    uprightMeaning: "学び、機会、実践、探求",
    reversedMeaning: "無関心、怠慢、計画の欠如",
    category: TarotCardCategory.Pentacles,
    cardNumber: 11,
  },
  {
    id: 48,
    name: "KNIGHT of PENTACLES",
    description: "努力、信頼性、安定を象徴するカード",
    uprightMeaning: "努力、信頼性、慎重、実直",
    reversedMeaning: "怠惰、停滞、柔軟性の欠如",
    category: TarotCardCategory.Pentacles,
    cardNumber: 12,
  },
  {
    id: 49,
    name: "QUEEN of PENTACLES",
    description: "世話、物質的な豊かさ、実用性を象徴するカード",
    uprightMeaning: "世話、実用性、家庭的、物質的な豊かさ",
    reversedMeaning: "無関心、物質主義、孤立",
    category: TarotCardCategory.Pentacles,
    cardNumber: 13,
  },
  {
    id: 50,
    name: "KING of PENTACLES",
    description: "安定、成功、繁栄を象徴するカード",
    uprightMeaning: "安定、成功、繁栄、実績",
    reversedMeaning: "物質主義、横柄、失敗",
    category: TarotCardCategory.Pentacles,
    cardNumber: 14,
  },
  // 剣
  {
    id: 51,
    name: "ACE of SWORDS",
    description: "知識、決断、新たな視点を象徴するカード",
    uprightMeaning: "知識、決断、明晰、新たな始まり",
    reversedMeaning: "混乱、誤解、失敗、偏見",
    category: TarotCardCategory.Swords,
    cardNumber: 1,
  },
  {
    id: 52,
    name: "TWO of SWORDS",
    description: "選択、均衡、決断を象徴するカード",
    uprightMeaning: "選択、均衡、決断、平静",
    reversedMeaning: "優柔不断、混乱、逃避",
    category: TarotCardCategory.Swords,
    cardNumber: 2,
  },
  {
    id: 53,
    name: "THREE of SWORDS",
    description: "痛み、悲しみ、裏切りを象徴するカード",
    uprightMeaning: "悲しみ、別れ、裏切り、心の痛み",
    reversedMeaning: "癒し、許し、回復、再生",
    category: TarotCardCategory.Swords,
    cardNumber: 3,
  },
  {
    id: 54,
    name: "FOUR of SWORDS",
    description: "休息、回復、内省を象徴するカード",
    uprightMeaning: "休息、回復、内省、再考",
    reversedMeaning: "疲労、停滞、再生の遅れ",
    category: TarotCardCategory.Swords,
    cardNumber: 4,
  },
  {
    id: 55,
    name: "FIVE of SWORDS",
    description: "対立、勝利、損失を象徴するカード",
    uprightMeaning: "対立、勝利、戦略、不和",
    reversedMeaning: "和解、敗北の受容、平和",
    category: TarotCardCategory.Swords,
    cardNumber: 5,
  },
  {
    id: 56,
    name: "SIX of SWORDS",
    description: "移動、変化、癒しを象徴するカード",
    uprightMeaning: "移動、癒し、進展、新たな旅",
    reversedMeaning: "停滞、未解決の問題、移動の遅れ",
    category: TarotCardCategory.Swords,
    cardNumber: 6,
  },
  {
    id: 57,
    name: "SEVEN of SWORDS",
    description: "策略、秘密、逃避を象徴するカード",
    uprightMeaning: "策略、秘密、慎重、独立",
    reversedMeaning: "失敗、暴露、誤解、不正",
    category: TarotCardCategory.Swords,
    cardNumber: 7,
  },
  {
    id: 58,
    name: "EIGHT of SWORDS",
    description: "束縛、制約、恐れを象徴するカード",
    uprightMeaning: "束縛、制約、恐れ、困難",
    reversedMeaning: "解放、克服、自己発見",
    category: TarotCardCategory.Swords,
    cardNumber: 8,
  },
  {
    id: 59,
    name: "NINE of SWORDS",
    description: "不安、恐怖、後悔を象徴するカード",
    uprightMeaning: "不安、恐怖、後悔、悪夢",
    reversedMeaning: "希望、回復、問題の克服",
    category: TarotCardCategory.Swords,
    cardNumber: 9,
  },
  {
    id: 60,
    name: "TEN of SWORDS",
    description: "終わり、絶望、再生を象徴するカード",
    uprightMeaning: "終わり、絶望、再生、新たな始まり",
    reversedMeaning: "回復、再生、解放、希望",
    category: TarotCardCategory.Swords,
    cardNumber: 10,
  },
  {
    id: 61,
    name: "PAGE of SWORDS",
    description: "知識、警戒、好奇心を象徴するカード",
    uprightMeaning: "知識、警戒、好奇心、真実の探求",
    reversedMeaning: "不注意、無責任、混乱",
    category: TarotCardCategory.Swords,
    cardNumber: 11,
  },
  {
    id: 62,
    name: "KNIGHT of SWORDS",
    description: "行動、野心、集中力を象徴するカード",
    uprightMeaning: "行動、野心、集中力、決意",
    reversedMeaning: "衝動、無謀、過度の野心",
    category: TarotCardCategory.Swords,
    cardNumber: 12,
  },
  {
    id: 63,
    name: "QUEEN of SWORDS",
    description: "知性、公正、独立を象徴するカード",
    uprightMeaning: "知性、公正、独立、客観性",
    reversedMeaning: "冷酷、批判的、孤立",
    category: TarotCardCategory.Swords,
    cardNumber: 13,
  },
  {
    id: 64,
    name: "KING of SWORDS",
    description: "権威、知性、決断を象徴するカード",
    uprightMeaning: "権威、知性、決断、公正",
    reversedMeaning: "専制、冷淡、誤解",
    category: TarotCardCategory.Swords,
    cardNumber: 14,
  },
  // 聖杯
  {
    id: 65,
    name: "ACE of CUPS",
    description: "感情、新しい愛、創造的な始まりを象徴するカード",
    uprightMeaning: "愛、感情、新しい始まり、創造性",
    reversedMeaning: "失望、感情の停滞、閉鎖",
    category: TarotCardCategory.Cups,
    cardNumber: 1,
  },
  {
    id: 66,
    name: "TWO of CUPS",
    description: "パートナーシップ、調和、愛を象徴するカード",
    uprightMeaning: "調和、パートナーシップ、愛、関係の発展",
    reversedMeaning: "不一致、誤解、関係の摩擦",
    category: TarotCardCategory.Cups,
    cardNumber: 2,
  },
  {
    id: 67,
    name: "THREE of CUPS",
    description: "友情、祝福、喜びを象徴するカード",
    uprightMeaning: "友情、祝福、喜び、コミュニティ",
    reversedMeaning: "孤立、過剰、友情の崩壊",
    category: TarotCardCategory.Cups,
    cardNumber: 3,
  },
  {
    id: 68,
    name: "FOUR of CUPS",
    description: "退屈、不満、自己反省を象徴するカード",
    uprightMeaning: "不満、退屈、反省、瞑想",
    reversedMeaning: "新たな可能性、視野の広がり、変化",
    category: TarotCardCategory.Cups,
    cardNumber: 4,
  },
  {
    id: 69,
    name: "FIVE of CUPS",
    description: "喪失、悲しみ、後悔を象徴するカード",
    uprightMeaning: "喪失、悲しみ、後悔、癒しの始まり",
    reversedMeaning: "回復、新たな希望、前進",
    category: TarotCardCategory.Cups,
    cardNumber: 5,
  },
  {
    id: 70,
    name: "SIX of CUPS",
    description: "過去、思い出、純粋な喜びを象徴するカード",
    uprightMeaning: "思い出、純粋さ、過去のつながり",
    reversedMeaning: "過去への執着、進歩の停滞",
    category: TarotCardCategory.Cups,
    cardNumber: 6,
  },
  {
    id: 71,
    name: "SEVEN of CUPS",
    description: "選択、幻想、直感を象徴するカード",
    uprightMeaning: "選択、幻想、想像力、可能性",
    reversedMeaning: "現実逃避、混乱、優柔不断",
    category: TarotCardCategory.Cups,
    cardNumber: 7,
  },
  {
    id: 72,
    name: "EIGHT of CUPS",
    description: "放棄、旅立ち、自己探求を象徴するカード",
    uprightMeaning: "放棄、自己探求、新たな旅、変化",
    reversedMeaning: "執着、離れることへの恐れ、停滞",
    category: TarotCardCategory.Cups,
    cardNumber: 8,
  },
  {
    id: 73,
    name: "NINE of CUPS",
    description: "満足、喜び、感謝を象徴するカード",
    uprightMeaning: "満足、感謝、成功、願望成就",
    reversedMeaning: "不満、過度の期待、浪費",
    category: TarotCardCategory.Cups,
    cardNumber: 9,
  },
  {
    id: 74,
    name: "TEN of CUPS",
    description: "幸福、調和、家族を象徴するカード",
    uprightMeaning: "幸福、家族、調和、長期的な満足",
    reversedMeaning: "不和、関係の緊張、幸福の喪失",
    category: TarotCardCategory.Cups,
    cardNumber: 10,
  },
  {
    id: 75,
    name: "PAGE of CUPS",
    description: "直感、創造性、新たな感情を象徴するカード",
    uprightMeaning: "直感、創造性、新たな感情、驚き",
    reversedMeaning: "幼稚さ、感情の不安定さ、非現実的な期待",
    category: TarotCardCategory.Cups,
    cardNumber: 11,
  },
  {
    id: 76,
    name: "KNIGHT of CUPS",
    description: "理想、感情的な追求、創造性を象徴するカード",
    uprightMeaning: "理想、感情の追求、ロマンス、創造性",
    reversedMeaning: "空想、感情的な未熟さ、現実逃避",
    category: TarotCardCategory.Cups,
    cardNumber: 12,
  },
  {
    id: 77,
    name: "QUEEN of CUPS",
    description: "感情の成熟、直感、共感を象徴するカード",
    uprightMeaning: "感情の成熟、直感、共感、理解",
    reversedMeaning: "感情の不安定、依存、過敏",
    category: TarotCardCategory.Cups,
    cardNumber: 13,
  },
  {
    id: 78,
    name: "KING of CUPS",
    description: "感情のコントロール、賢明さ、優しさを象徴するカード",
    uprightMeaning: "感情のコントロール、賢明さ、理解、優しさ",
    reversedMeaning: "感情の抑制、不安定、依存",
    category: TarotCardCategory.Cups,
    cardNumber: 14,
  },
];

export const seedTarotSpreads: (typeof tarotSpreads.$inferInsert)[] = [
  {
    id: 1,
    name: "ワンオラクル",
    description: "1枚引きの占い。簡易な占い。",
  },
  {
    id: 2,
    name: "ツーオラクル",
    description: "2枚引きの占い。選択肢の二者択一。",
  },
  {
    id: 3,
    name: "スリーオラクル",
    description:
      "3枚引きの占い。過去、現在、未来を表す。または、選択肢の三者択一。",
  },
  {
    id: 4,
    name: "フォーオラクル",
    description:
      "4枚引きの占い。過去、現在、未来、アドバイスを表す。または、選択肢の四者択一。",
  },
  {
    id: 5,
    name: "ケルト十字",
    description: "10枚引きの占い。対象者の問題、心情、現状、解決策を表す。",
  },
];

export const seedTarotSpreadPositions: (typeof tarotSpreadPositions.$inferInsert)[] =
  [
    // ワンオラクル
    {
      id: 1,
      spreadId: 1,
      drawOrder: 0,
      x: 0,
      y: 0,
      description: "結果",
      displayName: "結果",
    },
    // ツーオラクル
    {
      id: 2,
      spreadId: 2,
      drawOrder: 0,
      x: 0,
      y: 0,
      description: "選択肢1、アドバイス",
      displayName: "選択肢1またはアドバイス",
    },
    {
      id: 3,
      spreadId: 2,
      drawOrder: 1,
      x: 1,
      y: 0,
      description: "選択肢2、結果",
      displayName: "選択肢2または結果",
    },
    // スリーオラクル
    {
      id: 4,
      spreadId: 3,
      drawOrder: 0,
      x: 0,
      y: 0,
      description: "選択肢1、過去",
      displayName: "選択肢1または過去",
    },
    {
      id: 5,
      spreadId: 3,
      drawOrder: 1,
      x: 1,
      y: 0,
      description: "選択肢2、現在",
      displayName: "選択肢2または現在",
    },
    {
      id: 6,
      spreadId: 3,
      drawOrder: 2,
      x: 2,
      y: 0,
      description: "選択肢3、未来",
      displayName: "選択肢3または未来",
    },
    // フォーオラクル
    {
      id: 7,
      spreadId: 4,
      drawOrder: 0,
      x: 0,
      y: 0,
      description: "選択肢1、過去",
      displayName: "選択肢1または過去",
    },
    {
      id: 8,
      spreadId: 4,
      drawOrder: 1,
      x: 1,
      y: 0,
      description: "選択肢2、現在",
      displayName: "選択肢2または現在",
    },
    {
      id: 9,
      spreadId: 4,
      drawOrder: 2,
      x: 2,
      y: 0,
      description: "選択肢3、未来",
      displayName: "選択肢3または未来",
    },
    {
      id: 10,
      spreadId: 4,
      drawOrder: 3,
      x: 3,
      y: 0,
      description: "選択肢4、アドバイス",
      displayName: "選択肢4、アドバイス",
    },
    // ケルト十字
    {
      id: 11,
      spreadId: 5,
      drawOrder: 0,
      x: 1,
      y: 1,
      description: "現在",
      displayName: "現在",
    },
    {
      id: 12,
      spreadId: 5,
      drawOrder: 1,
      x: 1,
      y: 1,
      description: "妨害",
      displayName: "妨害",
      orientation: Orientation.Horizontal,
    },
    {
      id: 13,
      spreadId: 5,
      drawOrder: 2,
      x: 1,
      y: 2,
      description: "顕在意識",
      displayName: "顕在意識",
    },
    {
      id: 14,
      spreadId: 5,
      drawOrder: 3,
      x: 1,
      y: 0,
      description: "潜在意識",
      displayName: "潜在意識",
    },
    {
      id: 15,
      spreadId: 5,
      drawOrder: 4,
      x: 0,
      y: 1,
      description: "過去",
      displayName: "過去",
    },
    {
      id: 16,
      spreadId: 5,
      drawOrder: 5,
      x: 2,
      y: 1,
      description: "未来",
      displayName: "未来",
    },
    {
      id: 17,
      spreadId: 5,
      drawOrder: 6,
      x: 3,
      y: 3,
      description: "今後の変化",
      displayName: "今後の変化",
    },
    {
      id: 18,
      spreadId: 5,
      drawOrder: 7,
      x: 3,
      y: 2,
      description: "周囲の状況",
      displayName: "周囲の状況",
    },
    {
      id: 19,
      spreadId: 5,
      drawOrder: 8,
      x: 3,
      y: 1,
      description: "願望",
      displayName: "願望",
    },
    {
      id: 20,
      spreadId: 5,
      drawOrder: 9,
      x: 3,
      y: 0,
      description: "最終結果",
      displayName: "最終結果",
    },
  ];
