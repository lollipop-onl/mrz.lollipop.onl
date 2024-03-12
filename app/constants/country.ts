import { DatalistOptionItem } from "~/types";

/** @see https://www-kokusai.jsps.go.jp/jsps1/kuniList.do */
export const DATALIST_COUNTRY = [
  {
    value: "ISL",
    label: "アイスランド / ICELAND",
  },
  {
    value: "IRL",
    label: "アイルランド / IRELAND",
  },
  {
    value: "AZE",
    label: "アゼルバイジャン / AZERBAIDJAN",
  },
  {
    value: "AFG",
    label: "アフガニスタン / AFGHANISTAN",
  },
  {
    value: "ARE",
    label: "アラブ首長国連邦 / UNITED ARAB EMIRATES",
  },
  {
    value: "DZA",
    label: "アルジェリア / ALGERIA",
  },
  {
    value: "ARG",
    label: "アルゼンチン / ARGENTINA",
  },
  {
    value: "ALB",
    label: "アルバニア / ALBANIA",
  },
  {
    value: "ARM",
    label: "アルメニア / ARMENIA",
  },
  {
    value: "AGO",
    label: "アンゴラ / ANGOLA",
  },
  {
    value: "ATG",
    label: "アンティグア・バーブーダ / ANTIGUA & BARBUDA",
  },
  {
    value: "AND",
    label: "アンドラ / ANDORRA",
  },
  {
    value: "YEM",
    label: "イエメン / YEMEN",
  },
  {
    value: "ISR",
    label: "イスラエル / ISRAEL",
  },
  {
    value: "ITA",
    label: "イタリア / ITALY",
  },
  {
    value: "IRQ",
    label: "イラク / IRAQ",
  },
  {
    value: "IRN",
    label: "イラン / IRAN",
  },
  {
    value: "IND",
    label: "インド / INDIA",
  },
  {
    value: "IDN",
    label: "インドネシア / INDONESIA",
  },
  {
    value: "UGA",
    label: "ウガンダ / UGANDA",
  },
  {
    value: "UKR",
    label: "ウクライナ / UKRAINE",
  },
  {
    value: "UZB",
    label: "ウズベキスタン / UZBEKISTAN",
  },
  {
    value: "URY",
    label: "ウルグアイ / URUGUAY",
  },
  {
    value: "GBR",
    label: "英国 / UNITED KINGDOM",
  },
  {
    value: "ECU",
    label: "エクアドル / ECUADOR",
  },
  {
    value: "EGY",
    label: "エジプト / EGYPT",
  },
  {
    value: "EST",
    label: "エストニア / ESTONIA",
  },
  {
    value: "SWZ",
    label: "エスワティニ / ESWATINI",
  },
  {
    value: "ETH",
    label: "エチオピア / ETHIOPIA",
  },
  {
    value: "ERI",
    label: "エリトリア / ERITREA",
  },
  {
    value: "SLV",
    label: "エルサルバドル / EL SALVADOR",
  },
  {
    value: "AUS",
    label: "オーストラリア / AUSTRALIA",
  },
  {
    value: "AUT",
    label: "オーストリア / AUSTRIA",
  },
  {
    value: "OMN",
    label: "オマーン / OMAN",
  },
  {
    value: "NLD",
    label: "オランダ / NETHERLANDS",
  },
  {
    value: "CPV",
    label: "カーボベルデ / CAPE VERDE",
  },
  {
    value: "KAZ",
    label: "カザフスタン / KAZAKHSTAN",
  },
  {
    value: "QAT",
    label: "カタール / QATAR",
  },
  {
    value: "CAN",
    label: "カナダ / CANADA",
  },
  {
    value: "CMR",
    label: "カメルーン / CAMEROON",
  },
  {
    value: "KOR",
    label: "韓国 / KOREA (REP. OF KOREA)",
  },
  {
    value: "KHM",
    label: "カンボジア / CAMBODIA",
  },
  {
    value: "GHA",
    label: "ガーナ / GHANA",
  },
  {
    value: "GUY",
    label: "ガイアナ / GUYANA",
  },
  {
    value: "GAB",
    label: "ガボン / GABON",
  },
  {
    value: "GMB",
    label: "ガンビア / GAMBIA",
  },
  {
    value: "MKD",
    label: "北マケドニア / NORTH MACEDONIA",
  },
  {
    value: "CYP",
    label: "キプロス / CYPRUS",
  },
  {
    value: "CUB",
    label: "キューバ / CUBA",
  },
  {
    value: "KIR",
    label: "キリバス / KIRIBATI",
  },
  {
    value: "KGZ",
    label: "キルギス / KYRGYZSTAN",
  },
  {
    value: "GIN",
    label: "ギニア / GUINEA",
  },
  {
    value: "GNB",
    label: "ギニアビサウ / GUINEA-BISSAU",
  },
  {
    value: "GRC",
    label: "ギリシャ / GREECE",
  },
  {
    value: "KWT",
    label: "クウェート / KUWAIT",
  },
  {
    value: "COK",
    label: "クック諸島 / COOK ISLANDS",
  },
  {
    value: "HRV",
    label: "クロアチア / CROATIA",
  },
  {
    value: "GTM",
    label: "グアテマラ / GUATEMALA",
  },
  {
    value: "GRD",
    label: "グレナダ / GRENADA",
  },
  {
    value: "KEN",
    label: "ケニア / KENYA",
  },
  {
    value: "CIV",
    label: "コートジボワール / COTE D'IVOIRE",
  },
  {
    value: "CRI",
    label: "コスタリカ / COSTA RICA",
  },
  {
    value: "KSV",
    label: "コソボ / KOSOVO",
  },
  {
    value: "COM",
    label: "コモロ / COMOROS",
  },
  {
    value: "COL",
    label: "コロンビア / COLOMBIA",
  },
  {
    value: "COG",
    label: "コンゴ共和国 / CONGO",
  },
  {
    value: "COD",
    label: "コンゴ民主共和国 / DEM. REP. OF CONGO",
  },
  {
    value: "SAU",
    label: "サウジアラビア / SAUDI ARABIA",
  },
  {
    value: "WSM",
    label: "サモア / INDEPENDENT STATE OF SAMOA",
  },
  {
    value: "STP",
    label: "サントメ・プリンシペ / SAO TOME & PRINCIPE",
  },
  {
    value: "SMR",
    label: "サンマリノ / SAN MARINO",
  },
  {
    value: "ZMB",
    label: "ザンビア / ZAMBIA",
  },
  {
    value: "SLE",
    label: "シエラレオネ / SIERRA LEONE",
  },
  {
    value: "SYR",
    label: "シリア / SYRIA",
  },
  {
    value: "SGP",
    label: "シンガポール / SINGAPORE",
  },
  {
    value: "DJI",
    label: "ジブチ / DJIBOUTI",
  },
  {
    value: "JAM",
    label: "ジャマイカ / JAMAICA",
  },
  {
    value: "GEO",
    label: "ジョージア / GEORGIA",
  },
  {
    value: "ZWE",
    label: "ジンバブエ / ZIMBABWE",
  },
  {
    value: "SDN",
    label: "スーダン / SUDAN",
  },
  {
    value: "CHE",
    label: "スイス / SWITZERLAND",
  },
  {
    value: "SWE",
    label: "スウェーデン / SWEDEN",
  },
  {
    value: "ESP",
    label: "スペイン / SPAIN",
  },
  {
    value: "SUR",
    label: "スリナム / SURINAME",
  },
  {
    value: "LKA",
    label: "スリランカ / SRI LANKA",
  },
  {
    value: "SVK",
    label: "スロバキア / SLOVAKIA",
  },
  {
    value: "SVN",
    label: "スロベニア / SLOVENIA",
  },
  {
    value: "SYC",
    label: "セーシェル / SEYCHELLES",
  },
  {
    value: "GNQ",
    label: "赤道ギニア / EQUATORIAL GUINEA",
  },
  {
    value: "SEN",
    label: "セネガル / SENEGAL",
  },
  {
    value: "SRB",
    label: "セルビア / SERBIA",
  },
  {
    value: "KNA",
    label: "セントクリストファー・ネービス / ST. CHRISTOPHER & NEVIS",
  },
  {
    value: "VCT",
    label:
      "セントビンセント・グレナディーン諸島 / ST. VINCENT & THE GRENADINES",
  },
  {
    value: "LCA",
    label: "セントルシア / ST. LUCIA",
  },
  {
    value: "SOM",
    label: "ソマリア / SOMALIA",
  },
  {
    value: "SLB",
    label: "ソロモン / SOLOMON ISLANDS",
  },
  {
    value: "THA",
    label: "タイ / THAILAND",
  },
  {
    value: "TWN",
    label: "台湾 / TAIWAN",
  },
  {
    value: "TJK",
    label: "タジキスタン / TADZHIKISTAN",
  },
  {
    value: "TZA",
    label: "タンザニア / TANZANIA",
  },
  {
    value: "CZE",
    label: "チェコ / CZECH",
  },
  {
    value: "TCD",
    label: "チャド / CHAD",
  },
  {
    value: "CAF",
    label: "中央アフリカ / CENTRAL AFRICAN REP.",
  },
  {
    value: "CHN",
    label: "中国 / CHINA",
  },
  {
    value: "TUN",
    label: "チュニジア / TUNISIA",
  },
  {
    value: "CHL",
    label: "チリ / CHILE",
  },
  {
    value: "TUV",
    label: "ツバル / TUVALU",
  },
  {
    value: "DNK",
    label: "デンマーク / DENMARK",
  },
  {
    value: "TGO",
    label: "トーゴ / TOGO",
  },
  {
    value: "TTO",
    label: "トリニダード・トバゴ / TRINIDAD & TOBAGO",
  },
  {
    value: "TKM",
    label: "トルクメニスタン / TURKMENISTAN",
  },
  {
    value: "TUR",
    label: "トルコ / TURKEY",
  },
  {
    value: "TON",
    label: "トンガ / TONGA",
  },
  {
    value: "DEU",
    label: "ドイツ / GERMANY",
  },
  {
    value: "DOM",
    label: "ドミニカ共和国 / DOMINICAN REPUBLIC",
  },
  {
    value: "DMA",
    label: "ドミニカ国 / COMMOMWEALTH OF DOMINICA",
  },
  {
    value: "NGA",
    label: "ナイジェリア / NIGERIA",
  },
  {
    value: "NRU",
    label: "ナウル / NAURU",
  },
  {
    value: "NAM",
    label: "ナミビア / NAMIBIA",
  },
  {
    value: "NIC",
    label: "ニカラグア / NICARAGUA",
  },
  {
    value: "NER",
    label: "ニジェール / NIGER",
  },
  {
    value: "JPN",
    label: "日本 / JAPAN",
  },
  {
    value: "NZL",
    label: "ニュージーランド / NEW ZEALAND",
  },
  {
    value: "NPL",
    label: "ネパール / NEPAL",
  },
  {
    value: "NOR",
    label: "ノルウェー / NORWAY",
  },
  {
    value: "HTI",
    label: "ハイチ / HAITI",
  },
  {
    value: "HUN",
    label: "ハンガリー / HUNGARY",
  },
  {
    value: "BHR",
    label: "バーレーン / BAHRAIN",
  },
  {
    value: "VAT",
    label: "バチカン / VATICAN",
  },
  {
    value: "VUT",
    label: "バヌアツ / VANUATU",
  },
  {
    value: "BHS",
    label: "バハマ / BAHAMAS",
  },
  {
    value: "BRB",
    label: "バルバドス / BARBADOS",
  },
  {
    value: "BGD",
    label: "バングラデシュ / BANGLADESH",
  },
  {
    value: "PAK",
    label: "パキスタン / PAKISTAN",
  },
  {
    value: "PAN",
    label: "パナマ / PANAMA",
  },
  {
    value: "PNG",
    label: "パプアニューギニア / PAPUA NEW GUINEA",
  },
  {
    value: "PLW",
    label: "パラオ / PALAU",
  },
  {
    value: "PRY",
    label: "パラグアイ / PARAGUAY",
  },
  {
    value: "PSE",
    label: "パレスチナ(PLO) / PALESTINE LIBERATION ORGANIZATION",
  },
  {
    value: "TLS",
    label: "東ティモール / TIMOR-LESTE",
  },
  {
    value: "FJI",
    label: "フィジー / FIJI",
  },
  {
    value: "PHL",
    label: "フィリピン / PHILIPPINES",
  },
  {
    value: "FIN",
    label: "フィンランド / FINLAND",
  },
  {
    value: "FRA",
    label: "フランス / FRANCE",
  },
  {
    value: "BTN",
    label: "ブータン / BHUTAN",
  },
  {
    value: "BRA",
    label: "ブラジル / BRAZIL",
  },
  {
    value: "BGR",
    label: "ブルガリア / BULGARIA",
  },
  {
    value: "BFA",
    label: "ブルキナファソ / BURKINA FASO",
  },
  {
    value: "BRN",
    label: "ブルネイ・ダルサラーム / BRUNEI DARUSSALAM",
  },
  {
    value: "BDI",
    label: "ブルンジ / BURUNDI",
  },
  {
    value: "USA",
    label: "米国 / U.S.A.",
  },
  {
    value: "VNM",
    label: "ベトナム / VIET NAM",
  },
  {
    value: "BEN",
    label: "ベナン / BENIN",
  },
  {
    value: "VEN",
    label: "ベネズエラ / VENEZUELA",
  },
  {
    value: "BLR",
    label: "ベラルーシ / BELARUS",
  },
  {
    value: "BLZ",
    label: "ベリーズ / BELIZE",
  },
  {
    value: "BEL",
    label: "ベルギー / BELGIUM",
  },
  {
    value: "PER",
    label: "ペルー / PERU",
  },
  {
    value: "HND",
    label: "ホンジュラス / HONDURAS",
  },
  {
    value: "BIH",
    label: "ボスニア・ヘルツェゴビナ / BOSNIA AND HERZEGOVINA",
  },
  {
    value: "BWA",
    label: "ボツワナ / BOTSWANA",
  },
  {
    value: "BOL",
    label: "ボリビア / BOLIVIA",
  },
  {
    value: "POL",
    label: "ポーランド / POLAND",
  },
  {
    value: "PRT",
    label: "ポルトガル / PORTUGAL",
  },
  {
    value: "MHL",
    label: "マーシャル / REP. OF THE MARSHALL IS.",
  },
  {
    value: "MDG",
    label: "マダガスカル / MADAGASCAR",
  },
  {
    value: "MWI",
    label: "マラウイ / MALAWI",
  },
  {
    value: "MLI",
    label: "マリ / MALI",
  },
  {
    value: "MLT",
    label: "マルタ / MALTA",
  },
  {
    value: "MYS",
    label: "マレーシア / MALAYSIA",
  },
  {
    value: "FSM",
    label: "ミクロネシア / MICRONESIA",
  },
  {
    value: "ZAF",
    label: "南アフリカ / SOUTH AFRICA",
  },
  {
    value: "SSD",
    label: "南スーダン / SOUTH SUDAN",
  },
  {
    value: "MMR",
    label: "ミャンマー / MYANMAR",
  },
  {
    value: "MEX",
    label: "メキシコ / MEXICO",
  },
  {
    value: "MUS",
    label: "モーリシャス / MAURITIUS",
  },
  {
    value: "MRT",
    label: "モーリタニア / MAURITANIA",
  },
  {
    value: "MOZ",
    label: "モザンビーク / MOZAMBIQUE",
  },
  {
    value: "MCO",
    label: "モナコ / MONACO",
  },
  {
    value: "MDV",
    label: "モルディブ / MALDIVES",
  },
  {
    value: "MDA",
    label: "モルドバ / MOLDOVA",
  },
  {
    value: "MAR",
    label: "モロッコ / MOROCCO",
  },
  {
    value: "MNG",
    label: "モンゴル / MONGOLIA",
  },
  {
    value: "MNE",
    label: "モンテネグロ / MONTENEGRO",
  },
  {
    value: "JOR",
    label: "ヨルダン / JORDAN",
  },
  {
    value: "LAO",
    label: "ラオス / LAOS",
  },
  {
    value: "LVA",
    label: "ラトビア / LATVIA",
  },
  {
    value: "LTU",
    label: "リトアニア / LITHUANIA",
  },
  {
    value: "LIE",
    label: "リヒテンシュタイン / LIECHTENSTEIN",
  },
  {
    value: "LBY",
    label: "リビア / LIBYA",
  },
  {
    value: "LBR",
    label: "リベリア / LIBERIA",
  },
  {
    value: "ROU",
    label: "ルーマニア / ROMANIA",
  },
  {
    value: "LUX",
    label: "ルクセンブルク / LUXEMBOURG",
  },
  {
    value: "RWA",
    label: "ルワンダ / RWANDA",
  },
  {
    value: "LSO",
    label: "レソト / LESOTHO",
  },
  {
    value: "LBN",
    label: "レバノン / LEBANON",
  },
  {
    value: "RUS",
    label: "ロシア連邦 / RUSSIA FEDERATION",
  },
  {
    value: "ZZZ",
    label: "その他の国・地域",
  },
] satisfies DatalistOptionItem[];
