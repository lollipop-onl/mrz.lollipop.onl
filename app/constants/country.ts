import { DatalistOptionItem } from "~/types";

/** @see https://ja.wikipedia.org/wiki/ISO_3166-1 */
export const DATALIST_COUNTRY = [
  {
    value: "ISL",
    label: "アイスランド / Iceland",
  },
  {
    value: "IRL",
    label: "アイルランド / Ireland",
  },
  {
    value: "AZE",
    label: "アゼルバイジャン / Azerbaijan",
  },
  {
    value: "AFG",
    label: "アフガニスタン / Afghanistan",
  },
  {
    value: "USA",
    label: "アメリカ合衆国 / United States of America",
  },
  {
    value: "VIR",
    label: "アメリカ領ヴァージン諸島 / Virgin Islands (U.S.)",
  },
  {
    value: "ASM",
    label: "アメリカ領サモア / American Samoa",
  },
  {
    value: "ARE",
    label: "アラブ首長国連邦 / United Arab Emirates",
  },
  {
    value: "DZA",
    label: "アルジェリア / Algeria",
  },
  {
    value: "ARG",
    label: "アルゼンチン / Argentina",
  },
  {
    value: "ABW",
    label: "アルバ / Aruba",
  },
  {
    value: "ALB",
    label: "アルバニア / Albania",
  },
  {
    value: "ARM",
    label: "アルメニア / Armenia",
  },
  {
    value: "AIA",
    label: "アンギラ / Anguilla",
  },
  {
    value: "AGO",
    label: "アンゴラ / Angola",
  },
  {
    value: "ATG",
    label: "アンティグア・バーブーダ / Antigua and Barbuda",
  },
  {
    value: "AND",
    label: "アンドラ / Andorra",
  },
  {
    value: "YEM",
    label: "イエメン / Yemen",
  },
  {
    value: "GBR",
    label: "イギリス / United Kingdom of Great Britain and Northern Ireland",
  },
  {
    value: "IOT",
    label: "イギリス領インド洋地域 / British Indian Ocean Territory",
  },
  {
    value: "VGB",
    label: "イギリス領ヴァージン諸島 / Virgin Islands (British)",
  },
  {
    value: "ISR",
    label: "イスラエル / Israel",
  },
  {
    value: "ITA",
    label: "イタリア / Italy",
  },
  {
    value: "IRQ",
    label: "イラク / Iraq",
  },
  {
    value: "IRN",
    label: "イラン・イスラム共和国 / Iran (Islamic Republic of)",
  },
  {
    value: "IND",
    label: "インド / India",
  },
  {
    value: "IDN",
    label: "インドネシア / Indonesia",
  },
  {
    value: "WLF",
    label: "ウォリス・フツナ / Wallis and Futuna",
  },
  {
    value: "UGA",
    label: "ウガンダ / Uganda",
  },
  {
    value: "UKR",
    label: "ウクライナ / Ukraine",
  },
  {
    value: "UZB",
    label: "ウズベキスタン / Uzbekistan",
  },
  {
    value: "URY",
    label: "ウルグアイ / Uruguay",
  },
  {
    value: "ECU",
    label: "エクアドル / Ecuador",
  },
  {
    value: "EGY",
    label: "エジプト / Egypt",
  },
  {
    value: "EST",
    label: "エストニア / Estonia",
  },
  {
    value: "SWZ",
    label: "エスワティニ / Eswatini",
  },
  {
    value: "ETH",
    label: "エチオピア / Ethiopia",
  },
  {
    value: "ERI",
    label: "エリトリア / Eritrea",
  },
  {
    value: "SLV",
    label: "エルサルバドル / El Salvador",
  },
  {
    value: "AUS",
    label: "オーストラリア / Australia",
  },
  {
    value: "AUT",
    label: "オーストリア / Austria",
  },
  {
    value: "ALA",
    label: "オーランド諸島 / Åland Islands",
  },
  {
    value: "OMN",
    label: "オマーン / Oman",
  },
  {
    value: "NLD",
    label: "オランダ / Netherlands",
  },
  {
    value: "GHA",
    label: "ガーナ / Ghana",
  },
  {
    value: "CPV",
    label: "カーボベルデ / Cabo Verde",
  },
  {
    value: "GGY",
    label: "ガーンジー / Guernsey",
  },
  {
    value: "GUY",
    label: "ガイアナ / Guyana",
  },
  {
    value: "KAZ",
    label: "カザフスタン / Kazakhstan",
  },
  {
    value: "QAT",
    label: "カタール / Qatar",
  },
  {
    value: "UMI",
    label: "合衆国領有小離島 / United States Minor Outlying Islands",
  },
  {
    value: "CAN",
    label: "カナダ / Canada",
  },
  {
    value: "GAB",
    label: "ガボン / Gabon",
  },
  {
    value: "CMR",
    label: "カメルーン / Cameroon",
  },
  {
    value: "GMB",
    label: "ガンビア / Gambia",
  },
  {
    value: "KHM",
    label: "カンボジア / Cambodia",
  },
  {
    value: "MKD",
    label: "北マケドニア / North Macedonia",
  },
  {
    value: "MNP",
    label: "北マリアナ諸島 / Northern Mariana Islands",
  },
  {
    value: "GIN",
    label: "ギニア / Guinea",
  },
  {
    value: "GNB",
    label: "ギニアビサウ / Guinea-Bissau",
  },
  {
    value: "CYP",
    label: "キプロス / Cyprus",
  },
  {
    value: "CUB",
    label: "キューバ / Cuba",
  },
  {
    value: "CUW",
    label: "キュラソー / Curaçao",
  },
  {
    value: "GRC",
    label: "ギリシャ / Greece",
  },
  {
    value: "KIR",
    label: "キリバス / Kiribati",
  },
  {
    value: "KGZ",
    label: "キルギス / Kyrgyzstan",
  },
  {
    value: "GTM",
    label: "グアテマラ / Guatemala",
  },
  {
    value: "GLP",
    label: "グアドループ / Guadeloupe",
  },
  {
    value: "GUM",
    label: "グアム / Guam",
  },
  {
    value: "KWT",
    label: "クウェート / Kuwait",
  },
  {
    value: "COK",
    label: "クック諸島 / Cook Islands",
  },
  {
    value: "GRL",
    label: "グリーンランド / Greenland",
  },
  {
    value: "CXR",
    label: "クリスマス島 / Christmas Island",
  },
  {
    value: "GRD",
    label: "グレナダ / Grenada",
  },
  {
    value: "HRV",
    label: "クロアチア / Croatia",
  },
  {
    value: "CYM",
    label: "ケイマン諸島 / Cayman Islands",
  },
  {
    value: "KEN",
    label: "ケニア / Kenya",
  },
  {
    value: "CIV",
    label: "コートジボワール / Côte d'Ivoire",
  },
  {
    value: "CCK",
    label: "ココス（キーリング）諸島 / Cocos (Keeling) Islands",
  },
  {
    value: "CRI",
    label: "コスタリカ / Costa Rica",
  },
  {
    value: "COM",
    label: "コモロ / Comoros",
  },
  {
    value: "COL",
    label: "コロンビア / Colombia",
  },
  {
    value: "COG",
    label: "コンゴ共和国 / Congo",
  },
  {
    value: "COD",
    label: "コンゴ民主共和国 / Congo, Democratic Republic of the",
  },
  {
    value: "SAU",
    label: "サウジアラビア / Saudi Arabia",
  },
  {
    value: "SGS",
    label:
      "サウスジョージア・サウスサンドウィッチ諸島 / South Georgia and the South Sandwich Islands",
  },
  {
    value: "WSM",
    label: "サモア / Samoa",
  },
  {
    value: "STP",
    label: "サントメ・プリンシペ / Sao Tome and Principe",
  },
  {
    value: "BLM",
    label: "サン・バルテルミー / Saint Barthélemy",
  },
  {
    value: "ZMB",
    label: "ザンビア / Zambia",
  },
  {
    value: "SPM",
    label: "サンピエール島・ミクロン島 / Saint Pierre and Miquelon",
  },
  {
    value: "SMR",
    label: "サンマリノ / San Marino",
  },
  {
    value: "MAF",
    label: "サン・マルタン（フランス領） / Saint Martin (French part)",
  },
  {
    value: "SLE",
    label: "シエラレオネ / Sierra Leone",
  },
  {
    value: "DJI",
    label: "ジブチ / Djibouti",
  },
  {
    value: "GIB",
    label: "ジブラルタル / Gibraltar",
  },
  {
    value: "JEY",
    label: "ジャージー / Jersey",
  },
  {
    value: "JAM",
    label: "ジャマイカ / Jamaica",
  },
  {
    value: "GEO",
    label: "ジョージア / Georgia",
  },
  {
    value: "SYR",
    label: "シリア・アラブ共和国 / Syrian Arab Republic",
  },
  {
    value: "SGP",
    label: "シンガポール / Singapore",
  },
  {
    value: "SXM",
    label: "シント・マールテン（オランダ領） / Sint Maarten (Dutch part)",
  },
  {
    value: "ZWE",
    label: "ジンバブエ / Zimbabwe",
  },
  {
    value: "CHE",
    label: "スイス / Switzerland",
  },
  {
    value: "SWE",
    label: "スウェーデン / Sweden",
  },
  {
    value: "SDN",
    label: "スーダン / Sudan",
  },
  {
    value: "SJM",
    label: "スヴァールバル諸島およびヤンマイエン島 / Svalbard and Jan Mayen",
  },
  {
    value: "ESP",
    label: "スペイン / Spain",
  },
  {
    value: "SUR",
    label: "スリナム / Suriname",
  },
  {
    value: "LKA",
    label: "スリランカ / Sri Lanka",
  },
  {
    value: "SVK",
    label: "スロバキア / Slovakia",
  },
  {
    value: "SVN",
    label: "スロベニア / Slovenia",
  },
  {
    value: "SYC",
    label: "セーシェル / Seychelles",
  },
  {
    value: "GNQ",
    label: "赤道ギニア / Equatorial Guinea",
  },
  {
    value: "SEN",
    label: "セネガル / Senegal",
  },
  {
    value: "SRB",
    label: "セルビア / Serbia",
  },
  {
    value: "KNA",
    label: "セントクリストファー・ネイビス / Saint Kitts and Nevis",
  },
  {
    value: "VCT",
    label:
      "セントビンセントおよびグレナディーン諸島 / Saint Vincent and the Grenadines",
  },
  {
    value: "SHN",
    label:
      "セントヘレナ・アセンションおよびトリスタンダクーニャ / Saint Helena, Ascension and Tristan da Cunha",
  },
  {
    value: "LCA",
    label: "セントルシア / Saint Lucia",
  },
  {
    value: "SOM",
    label: "ソマリア / Somalia",
  },
  {
    value: "SLB",
    label: "ソロモン諸島 / Solomon Islands",
  },
  {
    value: "TCA",
    label: "タークス・カイコス諸島 / Turks and Caicos Islands",
  },
  {
    value: "THA",
    label: "タイ / Thailand",
  },
  {
    value: "KOR",
    label: "大韓民国 / Korea (the Republic of)",
  },
  {
    value: "TWN",
    label: "台湾（中華民国） / Taiwan, Province of China",
  },
  {
    value: "TJK",
    label: "タジキスタン / Tajikistan",
  },
  {
    value: "TZA",
    label: "タンザニア / Tanzania, United Republic of",
  },
  {
    value: "CZE",
    label: "チェコ / Czechia",
  },
  {
    value: "TCD",
    label: "チャド / Chad",
  },
  {
    value: "CAF",
    label: "中央アフリカ共和国 / Central African Republic",
  },
  {
    value: "CHN",
    label: "中華人民共和国 / China",
  },
  {
    value: "TUN",
    label: "チュニジア / Tunisia",
  },
  {
    value: "PRK",
    label:
      "朝鮮民主主義人民共和国 / Korea (the Democratic People's Republic of)",
  },
  {
    value: "CHL",
    label: "チリ / Chile",
  },
  {
    value: "TUV",
    label: "ツバル / Tuvalu",
  },
  {
    value: "DNK",
    label: "デンマーク / Denmark",
  },
  {
    value: "DEU",
    label: "ドイツ / Germany",
  },
  {
    value: "TGO",
    label: "トーゴ / Togo",
  },
  {
    value: "TKL",
    label: "トケラウ / Tokelau",
  },
  {
    value: "DOM",
    label: "ドミニカ共和国 / Dominican Republic",
  },
  {
    value: "DMA",
    label: "ドミニカ国 / Dominica",
  },
  {
    value: "TTO",
    label: "トリニダード・トバゴ / Trinidad and Tobago",
  },
  {
    value: "TKM",
    label: "トルクメニスタン / Turkmenistan",
  },
  {
    value: "TUR",
    label: "トルコ / Turkey",
  },
  {
    value: "TON",
    label: "トンガ / Tonga",
  },
  {
    value: "NGA",
    label: "ナイジェリア / Nigeria",
  },
  {
    value: "NRU",
    label: "ナウル / Nauru",
  },
  {
    value: "NAM",
    label: "ナミビア / Namibia",
  },
  {
    value: "ATA",
    label: "南極 / Antarctica",
  },
  {
    value: "NIU",
    label: "ニウエ / Niue",
  },
  {
    value: "NIC",
    label: "ニカラグア / Nicaragua",
  },
  {
    value: "NER",
    label: "ニジェール / Niger",
  },
  {
    value: "JPN",
    label: "日本 / Japan",
  },
  {
    value: "ESH",
    label: "西サハラ / Western Sahara",
  },
  {
    value: "NCL",
    label: "ニューカレドニア / New Caledonia",
  },
  {
    value: "NZL",
    label: "ニュージーランド / New Zealand",
  },
  {
    value: "NPL",
    label: "ネパール / Nepal",
  },
  {
    value: "NFK",
    label: "ノーフォーク島 / Norfolk Island",
  },
  {
    value: "NOR",
    label: "ノルウェー / Norway",
  },
  {
    value: "HMD",
    label: "ハード島とマクドナルド諸島 / Heard Island and McDonald Islands",
  },
  {
    value: "BHR",
    label: "バーレーン / Bahrain",
  },
  {
    value: "HTI",
    label: "ハイチ / Haiti",
  },
  {
    value: "PAK",
    label: "パキスタン / Pakistan",
  },
  {
    value: "VAT",
    label: "バチカン市国 / Holy See",
  },
  {
    value: "PAN",
    label: "パナマ / Panama",
  },
  {
    value: "VUT",
    label: "バヌアツ / Vanuatu",
  },
  {
    value: "BHS",
    label: "バハマ / Bahamas",
  },
  {
    value: "PNG",
    label: "パプアニューギニア / Papua New Guinea",
  },
  {
    value: "BMU",
    label: "バミューダ / Bermuda",
  },
  {
    value: "PLW",
    label: "パラオ / Palau",
  },
  {
    value: "PRY",
    label: "パラグアイ / Paraguay",
  },
  {
    value: "BRB",
    label: "バルバドス / Barbados",
  },
  {
    value: "PSE",
    label: "パレスチナ / Palestine, State of",
  },
  {
    value: "HUN",
    label: "ハンガリー / Hungary",
  },
  {
    value: "BGD",
    label: "バングラデシュ / Bangladesh",
  },
  {
    value: "TLS",
    label: "東ティモール / Timor-Leste",
  },
  {
    value: "PCN",
    label: "ピトケアン / Pitcairn",
  },
  {
    value: "FJI",
    label: "フィジー / Fiji",
  },
  {
    value: "PHL",
    label: "フィリピン / Philippines",
  },
  {
    value: "FIN",
    label: "フィンランド / Finland",
  },
  {
    value: "BTN",
    label: "ブータン / Bhutan",
  },
  {
    value: "BVT",
    label: "ブーベ島 / Bouvet Island",
  },
  {
    value: "PRI",
    label: "プエルトリコ / Puerto Rico",
  },
  {
    value: "FRO",
    label: "フェロー諸島 / Faroe Islands",
  },
  {
    value: "FLK",
    label: "フォークランド（マルビナス）諸島 / Falkland Islands (Malvinas)",
  },
  {
    value: "BRA",
    label: "ブラジル / Brazil",
  },
  {
    value: "FRA",
    label: "フランス / France",
  },
  {
    value: "GUF",
    label: "フランス領ギアナ / French Guiana",
  },
  {
    value: "PYF",
    label: "フランス領ポリネシア / French Polynesia",
  },
  {
    value: "ATF",
    label: "フランス領南方・南極地域 / French Southern Territories",
  },
  {
    value: "BGR",
    label: "ブルガリア / Bulgaria",
  },
  {
    value: "BFA",
    label: "ブルキナファソ / Burkina Faso",
  },
  {
    value: "BRN",
    label: "ブルネイ・ダルサラーム / Brunei Darussalam",
  },
  {
    value: "BDI",
    label: "ブルンジ / Burundi",
  },
  {
    value: "VNM",
    label: "ベトナム / Viet Nam",
  },
  {
    value: "BEN",
    label: "ベナン / Benin",
  },
  {
    value: "VEN",
    label: "ベネズエラ・ボリバル共和国 / Venezuela (Bolivarian Republic of)",
  },
  {
    value: "BLR",
    label: "ベラルーシ / Belarus",
  },
  {
    value: "BLZ",
    label: "ベリーズ / Belize",
  },
  {
    value: "PER",
    label: "ペルー / Peru",
  },
  {
    value: "BEL",
    label: "ベルギー / Belgium",
  },
  {
    value: "POL",
    label: "ポーランド / Poland",
  },
  {
    value: "BIH",
    label: "ボスニア・ヘルツェゴビナ / Bosnia and Herzegovina",
  },
  {
    value: "BWA",
    label: "ボツワナ / Botswana",
  },
  {
    value: "BES",
    label:
      "ボネール、シント・ユースタティウスおよびサバ / Bonaire, Sint Eustatius and Saba",
  },
  {
    value: "BOL",
    label: "ボリビア多民族国 / Bolivia (Plurinational State of)",
  },
  {
    value: "PRT",
    label: "ポルトガル / Portugal",
  },
  {
    value: "HKG",
    label: "香港 / Hong Kong",
  },
  {
    value: "HND",
    label: "ホンジュラス / Honduras",
  },
  {
    value: "MHL",
    label: "マーシャル諸島 / Marshall Islands",
  },
  {
    value: "MAC",
    label: "マカオ / Macau",
  },
  {
    value: "MDG",
    label: "マダガスカル / Madagascar",
  },
  {
    value: "MYT",
    label: "マヨット / Mayotte",
  },
  {
    value: "MWI",
    label: "マラウイ / Malawi",
  },
  {
    value: "MLI",
    label: "マリ / Mali",
  },
  {
    value: "MLT",
    label: "マルタ / Malta",
  },
  {
    value: "MTQ",
    label: "マルティニーク / Martinique",
  },
  {
    value: "MYS",
    label: "マレーシア / Malaysia",
  },
  {
    value: "IMN",
    label: "マン島 / Isle of Man",
  },
  {
    value: "FSM",
    label: "ミクロネシア連邦 / Micronesia (Federated States of)",
  },
  {
    value: "ZAF",
    label: "南アフリカ / South Africa",
  },
  {
    value: "SSD",
    label: "南スーダン / South Sudan",
  },
  {
    value: "MMR",
    label: "ミャンマー / Myanmar",
  },
  {
    value: "MEX",
    label: "メキシコ / Mexico",
  },
  {
    value: "MUS",
    label: "モーリシャス / Mauritius",
  },
  {
    value: "MRT",
    label: "モーリタニア / Mauritania",
  },
  {
    value: "MOZ",
    label: "モザンビーク / Mozambique",
  },
  {
    value: "MCO",
    label: "モナコ / Monaco",
  },
  {
    value: "MDV",
    label: "モルディブ / Maldives",
  },
  {
    value: "MDA",
    label: "モルドバ共和国 / Moldova, Republic of",
  },
  {
    value: "MAR",
    label: "モロッコ / Morocco",
  },
  {
    value: "MNG",
    label: "モンゴル / Mongolia",
  },
  {
    value: "MNE",
    label: "モンテネグロ / Montenegro",
  },
  {
    value: "MSR",
    label: "モントセラト / Montserrat",
  },
  {
    value: "JOR",
    label: "ヨルダン / Jordan",
  },
  {
    value: "LAO",
    label: "ラオス人民民主共和国 / Lao People's Democratic Republic",
  },
  {
    value: "LVA",
    label: "ラトビア / Latvia",
  },
  {
    value: "LTU",
    label: "リトアニア / Lithuania",
  },
  {
    value: "LBY",
    label: "リビア / Libya",
  },
  {
    value: "LIE",
    label: "リヒテンシュタイン / Liechtenstein",
  },
  {
    value: "LBR",
    label: "リベリア / Liberia",
  },
  {
    value: "ROU",
    label: "ルーマニア / Romania",
  },
  {
    value: "LUX",
    label: "ルクセンブルク / Luxembourg",
  },
  {
    value: "RWA",
    label: "ルワンダ / Rwanda",
  },
  {
    value: "LSO",
    label: "レソト / Lesotho",
  },
  {
    value: "LBN",
    label: "レバノン / Lebanon",
  },
  {
    value: "REU",
    label: "レユニオン / Réunion",
  },
  {
    value: "RUS",
    label: "ロシア連邦 / Russian Federation",
  },
] satisfies DatalistOptionItem[];
