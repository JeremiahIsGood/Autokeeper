const BRAND_GROUPS = [
  {
    "name": "中国",
    "brands": [
      "比亚迪",
      "埃安",
      "传祺",
      "北京",
      "小鹏",
      "理想",
      "五菱",
      "长安",
      "哈弗",
      "问界",
      "吉利",
      "红旗",
      "蔚来",
      "奇瑞",
      "东风风神",
      "领克",
      "极氪",
      "启辰",
      "腾势",
      "深蓝",
      "奔腾",
      "荣威",
      "方程豹",
      "宝骏",
      "吉利银河",
      "吉利几何",
      "东风风行",
      "枫叶",
      "乐道",
      "零跑",
      "欧拉",
      "昊铂",
      "极狐",
      "岚图",
      "小米",
      "魏牌",
      "长安启源",
      "坦克",
      "星途",
      "智己",
      "合创",
      "海马",
      "智界",
      "名爵",
      "威马",
      "捷途",
      "阿维塔",
      "哪吒",
      "享界",
      "尊界",
      "东风奕派",
      "大通",
      "国金",
      "瑞麒",
      "一汽",
      "东风",
      "东风风光",
      "iCar",
      "极越",
      "江淮",
      "萤火虫",
      "幻速",
      "众泰",
      "长城",
      "赛力斯",
      "飞凡",
      "思皓",
      "陆风",
      "猎豹",
      "知豆",
      "极石",
      "猛士",
      "君马",
      "力帆",
      "东南",
      "东风纳米",
      "中华",
      "仰望",
      "全球鹰",
      "凌宝",
      "奇瑞风云",
      "尚界",
      "思铭",
      "斯威",
      "爱驰",
      "理念",
      "蓝电",
      "观致",
      "长安欧尚",
      "高合",
      "江铃",
      "宝沃",
      "创维"
    ]
  },
  {
    "name": "日本",
    "brands": [
      "丰田",
      "本田",
      "日产",
      "马自达",
      "雷克萨斯",
      "三菱",
      "斯巴鲁",
      "讴歌",
      "铃木",
      "英菲尼迪",
      "世极",
      "大发"
    ]
  },
  {
    "name": "美国",
    "brands": [
      "特斯拉",
      "福特",
      "雪佛兰",
      "别克",
      "凯迪拉克",
      "林肯",
      "吉普",
      "道奇",
      "克莱斯勒"
    ]
  },
  {
    "name": "德国",
    "brands": [
      "大众",
      "奔驰",
      "宝马",
      "奥迪",
      "保时捷",
      "斯玛特",
      "迈巴赫",
      "欧宝",
      "捷达"
    ]
  },
  {
    "name": "英国",
    "brands": [
      "路虎",
      "捷豹",
      "迷你",
      "宾利",
      "劳斯莱斯",
      "莲花",
      "阿斯顿·马丁",
      "LEVC",
      "迈凯伦",
      "英力士掷弹兵"
    ]
  },
  {
    "name": "韩国",
    "brands": [
      "现代",
      "起亚",
      "捷尼赛斯"
    ]
  },
  {
    "name": "法国",
    "brands": [
      "标致",
      "雪铁龙",
      "雷诺",
      "DS",
      "布加迪"
    ]
  },
  {
    "name": "意大利",
    "brands": [
      "玛莎拉蒂",
      "菲亚特",
      "兰博基尼",
      "法拉利",
      "阿尔法·罗密欧"
    ]
  },
  {
    "name": "其他",
    "brands": [
      "沃尔沃",
      "斯柯达",
      "纳智捷",
      "科尼赛克",
      "极星",
      "萨博"
    ]
  }
];

const CHINA_BRAND_GROUPS = BRAND_GROUPS;
const US_BRAND_GROUPS = [
  {
    name: "美国品牌",
    brands: ["福特", "雪佛兰", "特斯拉", "别克", "凯迪拉克", "林肯", "吉普", "道奇", "克莱斯勒", "GMC", "公羊", "路西德", "里维安", "水星", "庞蒂亚克"],
  },
  {
    name: "日本品牌",
    brands: ["丰田", "本田", "日产", "斯巴鲁", "雷克萨斯", "马自达", "三菱", "讴歌", "英菲尼迪", "铃木"],
  },
  {
    name: "韩国品牌",
    brands: ["现代", "起亚", "捷尼赛斯"],
  },
  {
    name: "德国品牌",
    brands: ["大众", "奔驰", "宝马", "奥迪", "保时捷", "斯玛特", "迈巴赫"],
  },
  {
    name: "英国品牌",
    brands: ["路虎", "捷豹", "迷你", "阿斯顿·马丁", "宾利", "劳斯莱斯", "莲花", "英力士掷弹兵", "迈凯伦"],
  },
  {
    name: "意大利品牌",
    brands: ["法拉利", "兰博基尼", "玛莎拉蒂", "菲亚特", "阿尔法·罗密欧"],
  },
  {
    name: "其他品牌",
    brands: ["沃尔沃", "极星", "VinFast", "布加迪", "萨博"],
  },
];

const US_STATES = [
  "亚拉巴马州",
  "阿拉斯加州",
  "亚利桑那州",
  "阿肯色州",
  "加利福尼亚州",
  "科罗拉多州",
  "康涅狄格州",
  "特拉华州",
  "佛罗里达州",
  "佐治亚州",
  "夏威夷州",
  "爱达荷州",
  "伊利诺伊州",
  "印第安纳州",
  "艾奥瓦州",
  "堪萨斯州",
  "肯塔基州",
  "路易斯安那州",
  "缅因州",
  "马里兰州",
  "马萨诸塞州",
  "密歇根州",
  "明尼苏达州",
  "密西西比州",
  "密苏里州",
  "蒙大拿州",
  "内布拉斯加州",
  "内华达州",
  "新罕布什尔州",
  "新泽西州",
  "新墨西哥州",
  "纽约州",
  "北卡罗来纳州",
  "北达科他州",
  "俄亥俄州",
  "俄克拉荷马州",
  "俄勒冈州",
  "宾夕法尼亚州",
  "罗得岛州",
  "南卡罗来纳州",
  "南达科他州",
  "田纳西州",
  "得克萨斯州",
  "犹他州",
  "佛蒙特州",
  "弗吉尼亚州",
  "华盛顿州",
  "西弗吉尼亚州",
  "威斯康星州",
  "怀俄明州",
  "哥伦比亚特区",
];

const US_STATE_NAME_MAP = {
  Alabama: "亚拉巴马州",
  Alaska: "阿拉斯加州",
  Arizona: "亚利桑那州",
  Arkansas: "阿肯色州",
  California: "加利福尼亚州",
  Colorado: "科罗拉多州",
  Connecticut: "康涅狄格州",
  Delaware: "特拉华州",
  Florida: "佛罗里达州",
  Georgia: "佐治亚州",
  Hawaii: "夏威夷州",
  Idaho: "爱达荷州",
  Illinois: "伊利诺伊州",
  Indiana: "印第安纳州",
  Iowa: "艾奥瓦州",
  Kansas: "堪萨斯州",
  Kentucky: "肯塔基州",
  Louisiana: "路易斯安那州",
  Maine: "缅因州",
  Maryland: "马里兰州",
  Massachusetts: "马萨诸塞州",
  Michigan: "密歇根州",
  Minnesota: "明尼苏达州",
  Mississippi: "密西西比州",
  Missouri: "密苏里州",
  Montana: "蒙大拿州",
  Nebraska: "内布拉斯加州",
  Nevada: "内华达州",
  "New Hampshire": "新罕布什尔州",
  "New Jersey": "新泽西州",
  "New Mexico": "新墨西哥州",
  "New York": "纽约州",
  "North Carolina": "北卡罗来纳州",
  "North Dakota": "北达科他州",
  Ohio: "俄亥俄州",
  Oklahoma: "俄克拉荷马州",
  Oregon: "俄勒冈州",
  Pennsylvania: "宾夕法尼亚州",
  "Rhode Island": "罗得岛州",
  "South Carolina": "南卡罗来纳州",
  "South Dakota": "南达科他州",
  Tennessee: "田纳西州",
  Texas: "得克萨斯州",
  Utah: "犹他州",
  Vermont: "佛蒙特州",
  Virginia: "弗吉尼亚州",
  Washington: "华盛顿州",
  "West Virginia": "西弗吉尼亚州",
  Wisconsin: "威斯康星州",
  Wyoming: "怀俄明州",
  "District of Columbia": "哥伦比亚特区",
};

const CHINA_REGION_TREE = window.REGION_TREE;
const US_REGION_TREE = US_STATES.map((state) => ({
  province: state,
  cities: [{ city: state, districts: [state] }],
}));

let currentCountry = "CN";
let activeBrandGroups = CHINA_BRAND_GROUPS;
let BRANDS = [...new Set(activeBrandGroups.flatMap((group) => group.brands))];
let activeRegionTree = CHINA_REGION_TREE;
let REGION_OPTIONS = buildRegionOptions(activeRegionTree);

function buildRegionOptions(regionTree) {
  return regionTree.flatMap((province) =>
  province.cities.flatMap((city) =>
    city.districts.map((district) => {
      const name = `${province.province} ${city.city} ${district}`;
      return {
        province: province.province,
        city: city.city,
        district,
        name,
        shortName: `${city.city} ${district}`,
      };
    })
  )
  );
}
const BRAND_LOGOS = {
  "DS": "logos/logo-001.png",
  "iCar": "logos/logo-002.png",
  "LEVC": "logos/logo-003.png",
  "一汽": "logos/logo-004.png",
  "三菱": "logos/logo-005.png",
  "世极": "logos/logo-006.png",
  "东南": "logos/logo-007.png",
  "东风": "logos/logo-008.png",
  "东风奕派": "logos/logo-009.png",
  "东风纳米": "logos/logo-010.png",
  "东风风光": "logos/logo-011.png",
  "东风风神": "logos/logo-012.png",
  "东风风行": "logos/logo-013.png",
  "中华": "logos/logo-014.png",
  "丰田": "logos/logo-015.png",
  "乐道": "logos/logo-016.png",
  "五菱": "logos/logo-017.png",
  "享界": "logos/logo-018.png",
  "仰望": "logos/logo-019.png",
  "众泰": "logos/logo-020.png",
  "传祺": "logos/logo-021.png",
  "保时捷": "logos/logo-022.png",
  "克莱斯勒": "logos/logo-023.png",
  "全球鹰": "logos/logo-024.png",
  "兰博基尼": "logos/logo-025.png",
  "凌宝": "logos/logo-026.png",
  "凯迪拉克": "logos/logo-027.png",
  "别克": "logos/logo-028.png",
  "力帆": "logos/logo-029.png",
  "劳斯莱斯": "logos/logo-030.png",
  "北京": "logos/logo-031.png",
  "合创": "logos/logo-032.png",
  "吉利": "logos/logo-033.png",
  "吉利几何": "logos/logo-034.png",
  "吉利银河": "logos/logo-035.png",
  "吉普": "logos/logo-036.png",
  "名爵": "logos/logo-037.png",
  "君马": "logos/logo-038.png",
  "启辰": "logos/logo-039.png",
  "哈弗": "logos/logo-040.png",
  "哪吒": "logos/logo-041.png",
  "国金": "logos/logo-042.png",
  "坦克": "logos/logo-043.png",
  "埃安": "logos/logo-044.png",
  "大众": "logos/logo-045.png",
  "大通": "logos/logo-046.png",
  "奇瑞": "logos/logo-047.png",
  "奇瑞风云": "logos/logo-048.png",
  "奔腾": "logos/logo-049.png",
  "奔驰": "logos/logo-050.png",
  "奥迪": "logos/logo-051.png",
  "威马": "logos/logo-052.png",
  "宝沃": "logos/logo-053.png",
  "宝马": "logos/logo-054.png",
  "宝骏": "logos/logo-055.png",
  "宾利": "logos/logo-056.png",
  "尊界": "logos/logo-057.png",
  "小米": "logos/logo-058.png",
  "小鹏": "logos/logo-059.png",
  "尚界": "logos/logo-060.png",
  "岚图": "logos/logo-061.png",
  "布加迪": "logos/logo-062.png",
  "幻速": "logos/logo-063.png",
  "思皓": "logos/logo-064.png",
  "思铭": "logos/logo-065.png",
  "捷尼赛斯": "logos/logo-066.png",
  "捷豹": "logos/logo-067.png",
  "捷达": "logos/logo-068.png",
  "捷途": "logos/logo-069.png",
  "斯威": "logos/logo-070.png",
  "斯巴鲁": "logos/logo-071.png",
  "斯柯达": "logos/logo-072.png",
  "斯玛特": "logos/logo-073.png",
  "方程豹": "logos/logo-074.png",
  "日产": "logos/logo-075.png",
  "昊铂": "logos/logo-076.png",
  "星途": "logos/logo-077.png",
  "智己": "logos/logo-078.png",
  "智界": "logos/logo-079.png",
  "本田": "logos/logo-080.png",
  "极星": "logos/logo-081.png",
  "极氪": "logos/logo-082.png",
  "极狐": "logos/logo-083.png",
  "极石": "logos/logo-084.png",
  "极越": "logos/logo-085.png",
  "林肯": "logos/logo-086.png",
  "枫叶": "logos/logo-087.png",
  "标致": "logos/logo-088.png",
  "欧宝": "logos/logo-089.png",
  "欧拉": "logos/logo-090.png",
  "比亚迪": "logos/logo-091.png",
  "江淮": "logos/logo-092.png",
  "江铃": "logos/logo-093.png",
  "沃尔沃": "logos/logo-094.png",
  "法拉利": "logos/logo-095.png",
  "海马": "logos/logo-096.png",
  "深蓝": "logos/logo-097.png",
  "爱驰": "logos/logo-098.png",
  "特斯拉": "logos/logo-099.png",
  "猎豹": "logos/logo-100.png",
  "猛士": "logos/logo-101.png",
  "玛莎拉蒂": "logos/logo-102.png",
  "现代": "logos/logo-103.png",
  "理念": "logos/logo-104.png",
  "理想": "logos/logo-105.png",
  "睿蓝": "logos/logo-106.png",
  "知豆": "logos/logo-107.png",
  "福特": "logos/logo-108.png",
  "科尼赛克": "logos/logo-109.png",
  "红旗": "logos/logo-110.png",
  "纳智捷": "logos/logo-111.png",
  "腾势": "logos/logo-112.png",
  "英力士掷弹兵": "logos/logo-113.png",
  "英菲尼迪": "logos/logo-114.png",
  "荣威": "logos/logo-115.png",
  "莲花": "logos/logo-116.png",
  "菲亚特": "logos/logo-117.png",
  "萤火虫": "logos/logo-118.png",
  "萨博": "logos/logo-119.png",
  "蓝电": "logos/logo-120.png",
  "蔚来": "logos/logo-121.png",
  "观致": "logos/logo-122.png",
  "讴歌": "logos/logo-123.png",
  "赛力斯": "logos/logo-124.png",
  "起亚": "logos/logo-125.png",
  "路虎": "logos/logo-126.png",
  "迈凯伦": "logos/logo-127.png",
  "迈巴赫": "logos/logo-128.png",
  "迷你": "logos/logo-129.png",
  "道奇": "logos/logo-130.png",
  "铃木": "logos/logo-131.png",
  "长城": "logos/logo-132.png",
  "长安": "logos/logo-133.png",
  "长安启源": "logos/logo-134.png",
  "长安欧尚": "logos/logo-135.png",
  "问界": "logos/logo-136.png",
  "阿尔法·罗密欧": "logos/logo-137.png",
  "阿斯顿·马丁": "logos/logo-138.png",
  "阿维塔": "logos/logo-139.png",
  "陆风": "logos/logo-140.png",
  "雪佛兰": "logos/logo-141.png",
  "雪铁龙": "logos/logo-142.png",
  "零跑": "logos/logo-143.png",
  "雷克萨斯": "logos/logo-144.png",
  "雷诺": "logos/logo-145.png",
  "领克": "logos/logo-146.png",
  "飞凡": "logos/logo-147.png",
  "马自达": "logos/logo-148.png",
  "高合": "logos/logo-149.png",
  "魏牌": "logos/logo-150.png",
  "GMC": "logos/logo-151.png",
  "公羊": "logos/logo-152.png",
  "里维安": "logos/logo-153.png",
  "路西德": "logos/logo-154.png",
  "水星": "logos/logo-155.png",
  "VinFast": "logos/logo-156.png",
  "庞蒂亚克": "logos/logo-157.png",
  "瑞麒": "logos/logo-158.png",
  "创维": "logos/logo-159.png",
  "大发": "logos/logo-160.png"
};

const COUNTRY_CONFIGS = {
  CN: {
    name: "中国",
    flag: "🇨🇳",
    allRegionLabel: "全国",
    defaultRegion: "广东省 广州市 天河区",
    brandGroups: CHINA_BRAND_GROUPS,
    regionTree: CHINA_REGION_TREE,
  },
  US: {
    name: "美国",
    flag: "🇺🇸",
    allRegionLabel: "全国",
    defaultRegion: "加利福尼亚州 加利福尼亚州 加利福尼亚州",
    brandGroups: US_BRAND_GROUPS,
    regionTree: US_REGION_TREE,
  },
};

const STORAGE_KEY = "jicheqi.records.v1";
const APP_VERSION = "1.2.6";
const SETTINGS_KEY = `${STORAGE_KEY}.settings`;
const RANGE_LABELS = {
  today: "本日",
  week: "近七天",
  month: "本月",
  year: "本年",
  all: "全部",
};

let appSettings = loadAppSettings();
setCountryState(appSettings.defaultCountry || "CN");
let selectedRegion = getCountrySetting("lastRegion");
let lastSpecificRegion = selectedRegion;
let selectedRange = "today";
let rankRegionBase = selectedRegion;
let rankRegionScope = "district";
let rankRange = "today";
let selectedRankMonth = "";
let selectedRankYear = "";
let records = loadRecords();
let collapsedGroups = loadCollapsedGroups();
let brandOrders = loadBrandOrders();
let activeBrand = null;
let activeBrandGroup = null;
let longPressTimer = null;
let longPressTriggered = false;
let longPressPointerId = null;
let longPressStartX = 0;
let longPressStartY = 0;
let isMultiTouchGesture = false;
const activeTouchPointers = new Set();
const LONG_PRESS_MS = 560;
const LONG_PRESS_MOVE_LIMIT = 12;
let dragState = null;
let sortingGroup = null;
let regionStep = "province";
let selectedProvince = null;
let selectedCity = null;

const brandGrid = document.querySelector("#brandGrid");
const recordPage = document.querySelector("#recordPage");
const rankPage = document.querySelector("#rankPage");
const settingsPage = document.querySelector("#settingsPage");
const rankPageButton = document.querySelector("#rankPageButton");
const settingsPageButton = document.querySelector("#settingsPageButton");
const backToRecordButton = document.querySelector("#backToRecordButton");
const backFromSettingsButton = document.querySelector("#backFromSettingsButton");
const rankList = document.querySelector("#rankList");
const rankTitle = document.querySelector("#rankTitle");
const statusText = document.querySelector("#statusText");
const undoButton = document.querySelector("#undoButton");
const currentRegion = document.querySelector("#currentRegion");
const todayCount = document.querySelector("#todayCount");
const recordRangeLabel = document.querySelector("#recordRangeLabel");
const importInput = document.querySelector("#importInput");
const brandSearchInput = document.querySelector("#brandSearchInput");
const brandSearchButton = document.querySelector("#brandSearchButton");
const regionPickerButton = document.querySelector("#regionPickerButton");
const regionPickerText = document.querySelector("#regionPickerText");
const rankRegionButton = document.querySelector("#rankRegionButton");
const rankRegionText = document.querySelector("#rankRegionText");
const rankMonthSelect = document.querySelector("#rankMonthSelect");
const rankYearSelect = document.querySelector("#rankYearSelect");
const brandMenu = document.querySelector("#brandMenu");
const menuTitle = document.querySelector("#menuTitle");
const menuViewButton = document.querySelector("#menuViewButton");
const menuSortButton = document.querySelector("#menuSortButton");
const menuMinusButton = document.querySelector("#menuMinusButton");
const menuCloseButton = document.querySelector("#menuCloseButton");
const recordDialog = document.querySelector("#recordDialog");
const recordTitle = document.querySelector("#recordTitle");
const recordList = document.querySelector("#recordList");
const recordCloseButton = document.querySelector("#recordCloseButton");
const recordTools = document.querySelector("#recordTools");
const bulkDeleteRange = document.querySelector("#bulkDeleteRange");
const bulkDeleteBrandInput = document.querySelector("#bulkDeleteBrandInput");
const bulkDeleteButton = document.querySelector("#bulkDeleteButton");
const sortDialog = document.querySelector("#sortDialog");
const sortTitle = document.querySelector("#sortTitle");
const sortList = document.querySelector("#sortList");
const sortCloseButton = document.querySelector("#sortCloseButton");
const sortSaveButton = document.querySelector("#sortSaveButton");
const regionDialog = document.querySelector("#regionDialog");
const regionCloseButton = document.querySelector("#regionCloseButton");
const regionSearchInput = document.querySelector("#regionSearchInput");
const regionBackButton = document.querySelector("#regionBackButton");
const regionPathText = document.querySelector("#regionPathText");
const regionPath = document.querySelector(".region-path");
const regionList = document.querySelector("#regionList");
const regionSearchResults = document.querySelector("#regionSearchResults");
const updateAppButton = document.querySelector("#updateAppButton");
const updateStatusText = document.querySelector("#updateStatusText");
const reloadAppButton = document.querySelector("#reloadAppButton");
const appVersionText = document.querySelector("#appVersionText");
const guideButton = document.querySelector("#guideButton");
const recordQueryButton = document.querySelector("#recordQueryButton");
const settingsImportButton = document.querySelector("#settingsImportButton");
const settingsExportButton = document.querySelector("#settingsExportButton");
const clearDataButton = document.querySelector("#clearDataButton");
const dataStats = document.querySelector("#dataStats");
const showLogoToggle = document.querySelector("#showLogoToggle");
const buttonSizeSelect = document.querySelector("#buttonSizeSelect");
const showFrequentToggle = document.querySelector("#showFrequentToggle");
const frequentLimitInput = document.querySelector("#frequentLimitInput");
const resetBrandOrderButton = document.querySelector("#resetBrandOrderButton");
const defaultRegionButton = document.querySelector("#defaultRegionButton");
const defaultRegionText = document.querySelector("#defaultRegionText");
const recentRegionsList = document.querySelector("#recentRegionsList");
const countryPickerButton = document.querySelector("#countryPickerButton");
const countryPickerText = document.querySelector("#countryPickerText");
const countryDialog = document.querySelector("#countryDialog");
const countryCloseButton = document.querySelector("#countryCloseButton");
const guideDialog = document.querySelector("#guideDialog");
const guideTitle = document.querySelector("#guideTitle");
const guideStepTitle = document.querySelector("#guideStepTitle");
const guideStepText = document.querySelector("#guideStepText");
const guideProgress = document.querySelector("#guideProgress");
const guideBackButton = document.querySelector("#guideBackButton");
const guideNextButton = document.querySelector("#guideNextButton");
const guideSkipButton = document.querySelector("#guideSkipButton");
const guideSkipTextButton = document.querySelector("#guideSkipTextButton");
const undoTip = document.querySelector("#undoTip");
const undoTipCloseButton = document.querySelector("#undoTipCloseButton");
let regionDialogMode = "record";
let activeRecordDialog = { mode: "recent", brand: "" };
let guideStepIndex = 0;

const GUIDE_STEPS = [
  {
    title: "快速记录你见到的汽车品牌",
    text: "看到一辆车，点一下品牌按钮，计车器会自动保存品牌、时间和地区。",
  },
  {
    title: "先选地区，再开始记录",
    text: "顶部显示当前地区。切换地区后，后续记录会保存到新地区。",
  },
  {
    title: "点错了也没关系",
    text: "右上角的 ↶ 可以撤销上一次记录。长按品牌按钮可以查看记录或减一。",
  },
  {
    title: "查看排行和备份数据",
    text: "排行榜可以按时间和地区统计。设置里可以导入、导出、查询和删除记录。",
  },
];

function getCountryConfig(country = currentCountry) {
  return COUNTRY_CONFIGS[country] || COUNTRY_CONFIGS.CN;
}

function getCountryBrands(country = currentCountry) {
  return [...new Set(getCountryConfig(country).brandGroups.flatMap((group) => group.brands))];
}

function setCountryState(country) {
  currentCountry = COUNTRY_CONFIGS[country] ? country : "CN";
  activeBrandGroups = getCountryConfig(currentCountry).brandGroups;
  BRANDS = getCountryBrands(currentCountry);
  activeRegionTree = getCountryConfig(currentCountry).regionTree;
  REGION_OPTIONS = buildRegionOptions(activeRegionTree);
}

function getCountrySetting(key, country = currentCountry) {
  return appSettings?.countries?.[country]?.[key] || getCountryConfig(country).defaultRegion;
}

function setCountrySetting(key, value, country = currentCountry) {
  if (!appSettings.countries) appSettings.countries = {};
  if (!appSettings.countries[country]) appSettings.countries[country] = {};
  appSettings.countries[country][key] = value;
}

function normalizeRegionName(regionName) {
  if (!regionName || typeof regionName !== "string") return regionName;
  let normalized = regionName;
  Object.entries(US_STATE_NAME_MAP)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([englishName, chineseName]) => {
      normalized = normalized.replaceAll(englishName, chineseName);
    });
  return normalized;
}

function normalizeRecentRegionEntry(entry) {
  if (typeof entry === "string") {
    return { name: normalizeRegionName(entry), usedAt: "" };
  }
  if (entry && typeof entry === "object" && typeof entry.name === "string") {
    return {
      name: normalizeRegionName(entry.name),
      usedAt: entry.usedAt || "",
    };
  }
  return null;
}

function loadAppSettings() {
  const fallback = {
    defaultCountry: "CN",
    countries: {
      CN: {
        defaultRegion: COUNTRY_CONFIGS.CN.defaultRegion,
        lastRegion: COUNTRY_CONFIGS.CN.defaultRegion,
        recentRegions: [{ name: COUNTRY_CONFIGS.CN.defaultRegion, usedAt: "" }],
      },
      US: {
        defaultRegion: COUNTRY_CONFIGS.US.defaultRegion,
        lastRegion: COUNTRY_CONFIGS.US.defaultRegion,
        recentRegions: [{ name: COUNTRY_CONFIGS.US.defaultRegion, usedAt: "" }],
      },
    },
    showLogos: true,
    buttonSize: "large",
    showFrequentGroup: true,
    frequentLimit: 9,
    guideSeen: false,
    undoTipSeen: false,
  };

  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    const countries = {
      ...fallback.countries,
      ...(saved.countries || {}),
    };
    if (saved.defaultRegion && !countries.CN.defaultRegion) countries.CN.defaultRegion = saved.defaultRegion;
    if (Array.isArray(saved.recentRegions) && saved.recentRegions.length > 0) countries.CN.recentRegions = saved.recentRegions;
    Object.keys(countries).forEach((country) => {
      const config = COUNTRY_CONFIGS[country] || COUNTRY_CONFIGS.CN;
      countries[country] = {
        ...fallback.countries[country],
        ...countries[country],
      };
      countries[country].defaultRegion = normalizeRegionName(countries[country].defaultRegion || config.defaultRegion);
      countries[country].lastRegion = normalizeRegionName(countries[country].lastRegion || countries[country].defaultRegion || config.defaultRegion);
      const recent = Array.isArray(countries[country].recentRegions) ? countries[country].recentRegions : [];
      const normalizedRecent = recent.map(normalizeRecentRegionEntry).filter(Boolean);
      countries[country].recentRegions = normalizedRecent.length > 0 ? normalizedRecent.slice(0, 5) : [{ name: countries[country].lastRegion, usedAt: "" }];
    });

    return {
      ...fallback,
      ...saved,
      defaultCountry: COUNTRY_CONFIGS[saved.defaultCountry] ? saved.defaultCountry : fallback.defaultCountry,
      countries,
    };
  } catch {
    return fallback;
  }
}

function saveAppSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
}

function rememberRegion(regionName) {
  if (!regionName || isAllRegion(regionName)) return;
  const normalizedRegion = normalizeRegionName(regionName);
  const recentRegions = getCountryRecentRegions();
  setCountrySetting(
    "recentRegions",
    [
      { name: normalizedRegion, usedAt: new Date().toISOString() },
      ...recentRegions.filter((item) => item.name !== normalizedRegion),
    ].slice(0, 5)
  );
  saveAppSettings();
}

function rememberLastRegion(regionName) {
  if (!regionName || isAllRegion(regionName)) return;
  const normalizedRegion = normalizeRegionName(regionName);
  setCountrySetting("lastRegion", normalizedRegion);
  rememberRegion(normalizedRegion);
}

function getCountryRecentRegions(country = currentCountry) {
  const recent = appSettings?.countries?.[country]?.recentRegions;
  const normalized = Array.isArray(recent) ? recent.map(normalizeRecentRegionEntry).filter(Boolean) : [];
  return normalized.length > 0 ? normalized.slice(0, 5) : [{ name: getCountryConfig(country).defaultRegion, usedAt: "" }];
}

function loadRecords() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).map(normalizeRecordRegion) : [];
  } catch {
    return [];
  }
}

function normalizeRecordRegion(record) {
  if (!record || !record.region) return record;

  const oldRegionMap = {
    广州: "广东省 广州市 天河区",
    深圳: "广东省 深圳市 南山区",
    香港: "香港特别行政区 香港 中西区",
  };

  return {
    ...record,
    country: record.country && COUNTRY_CONFIGS[record.country] ? record.country : "CN",
    region: normalizeRegionName(oldRegionMap[record.region] || record.region),
  };
}

function loadCollapsedGroups() {
  try {
    const saved = localStorage.getItem(`${STORAGE_KEY}.collapsedGroups`);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function loadBrandOrders() {
  try {
    const saved = localStorage.getItem(`${STORAGE_KEY}.brandOrders`);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function saveCollapsedGroups() {
  localStorage.setItem(`${STORAGE_KEY}.collapsedGroups`, JSON.stringify(collapsedGroups));
}

function getFrequentLimit() {
  const limit = Number(appSettings.frequentLimit) || 9;
  return Math.min(20, Math.max(3, Math.round(limit)));
}

function saveBrandOrders() {
  localStorage.setItem(`${STORAGE_KEY}.brandOrders`, JSON.stringify(brandOrders));
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfWeek(date) {
  const day = date.getDay() || 7;
  const start = startOfDay(date);
  start.setDate(start.getDate() - day + 1);
  return start;
}

function startOfLastSevenDays() {
  const start = startOfDay(new Date());
  start.setDate(start.getDate() - 6);
  return start;
}

function inSelectedRange(record) {
  if (selectedRange === "all") return true;

  const recordDate = new Date(record.time);
  const now = new Date();

  if (selectedRange === "today") {
    return recordDate >= startOfDay(now);
  }

  if (selectedRange === "week") {
    return recordDate >= startOfLastSevenDays();
  }

  if (selectedRange === "month") {
    return recordDate.getFullYear() === now.getFullYear() && recordDate.getMonth() === now.getMonth();
  }

  if (selectedRange === "year") {
    return recordDate.getFullYear() === now.getFullYear();
  }

  return true;
}

function isInRange(record, range, periodValue = "") {
  if (range === "all") return true;

  const recordDate = new Date(record.time);
  const now = new Date();

  if (range === "today") {
    return recordDate >= startOfDay(now);
  }

  if (range === "last24") {
    return now - recordDate <= 24 * 60 * 60 * 1000;
  }

  if (range === "week") {
    return recordDate >= startOfLastSevenDays();
  }

  if (range === "month") {
    const monthKey = periodValue || getMonthKey(now);
    return getMonthKey(recordDate) === monthKey;
  }

  if (range === "year") {
    const yearKey = periodValue || String(now.getFullYear());
    return String(recordDate.getFullYear()) === yearKey;
  }

  return true;
}

function inSelectedRegion(record) {
  return record.country === currentCountry && (isAllRegion(selectedRegion) || record.region === selectedRegion);
}

function isAllRegion(regionName) {
  return regionName === "全部地区" || regionName === "全国";
}

function getRegionParts(regionName) {
  const [province = "", city = "", district = ""] = regionName.split(" ");
  return { province, city, district };
}

function isInRankRegion(record) {
  if (record.country !== currentCountry) return false;
  if (rankRegionScope === "all") return true;

  const recordRegion = getRegionParts(record.region);
  const baseRegion = getRegionParts(rankRegionBase);

  if (rankRegionScope === "province") return recordRegion.province === baseRegion.province;
  if (rankRegionScope === "city") return recordRegion.province === baseRegion.province && recordRegion.city === baseRegion.city;
  return record.region === rankRegionBase;
}

function getMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthKey(monthKey) {
  const [year, month] = monthKey.split("-");
  return `${year}年${Number(month)}月`;
}

function countRecords({ brand, region = selectedRegion, range = "today" } = {}) {
  const previousRange = selectedRange;
  selectedRange = range;
  const count = records.filter((record) => {
    const matchesBrand = brand ? record.brand === brand : true;
    const matchesRegion = isAllRegion(region) || record.region === region;
    return record.country === currentCountry && matchesBrand && matchesRegion && inSelectedRange(record);
  }).length;
  selectedRange = previousRange;
  return count;
}

function countRecentBrand(brand) {
  const recentStart = startOfLastSevenDays();
  return records.filter((record) => {
    return record.country === currentCountry && record.brand === brand && inSelectedRegion(record) && new Date(record.time) >= recentStart;
  }).length;
}

function getFrequentBrands() {
  return BRANDS.map((brand) => ({
    brand,
    count: countRecentBrand(brand),
  }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || BRANDS.indexOf(a.brand) - BRANDS.indexOf(b.brand))
    .slice(0, getFrequentLimit())
    .map((item) => item.brand);
}

function addRecord(brand, button) {
  const recordRegion = isAllRegion(selectedRegion) ? lastSpecificRegion : selectedRegion;
  const shouldShowUndoTip = !appSettings.undoTipSeen;

  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    country: currentCountry,
    brand,
    region: recordRegion,
    time: new Date().toISOString(),
  };

  records.push(record);
  saveRecords();
  statusText.textContent = `已记录：${brand} · ${formatRegion(recordRegion)}`;
  flashButton(button);
  render();
  if (shouldShowUndoTip) {
    appSettings.undoTipSeen = true;
    saveAppSettings();
    showUndoTip();
  }
}

function flashButton(button) {
  button.classList.add("flash");
  window.setTimeout(() => button.classList.remove("flash"), 260);
}

function undoLastRecord() {
  const index = records.findLastIndex((record) => record.country === currentCountry);
  if (index === -1) return;
  const [last] = records.splice(index, 1);

  saveRecords();
  statusText.textContent = `已撤销：${last.brand} · ${last.region}`;
  render();
}

function removeLatestBrandRecord(brand) {
  let index = -1;
  for (let i = records.length - 1; i >= 0; i -= 1) {
    if (records[i].brand === brand && inSelectedRegion(records[i])) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    statusText.textContent = `没有可减少的${brand}记录`;
    closeBrandMenu();
    return;
  }

  const removed = records.splice(index, 1)[0];
  saveRecords();
  statusText.textContent = `已减一：${removed.brand} · ${removed.region}`;
  closeBrandMenu();
  render();
}

function buildRanking() {
  const totals = new Map(BRANDS.map((brand) => [brand, 0]));

  records
    .filter((record) => isInRankRegion(record) && isInRange(record, rankRange, rankRange === "month" ? selectedRankMonth : selectedRankYear))
    .forEach((record) => {
      totals.set(record.brand, (totals.get(record.brand) || 0) + 1);
    });

  return [...totals.entries()]
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count || BRANDS.indexOf(a.brand) - BRANDS.indexOf(b.brand));
}

function getGroupBrands(groupName, defaultBrands) {
  const savedOrder = Array.isArray(brandOrders[groupName]) ? brandOrders[groupName] : [];
  const known = new Set(defaultBrands);
  return [...savedOrder.filter((brand) => known.has(brand)), ...defaultBrands.filter((brand) => !savedOrder.includes(brand))];
}

function createBrandButton(brand, groupName, canDrag) {
  const button = document.createElement("button");
  button.className = "brand-button";
  button.type = "button";
  button.dataset.brand = brand;
  button.dataset.group = groupName;
  button.dataset.canDrag = String(canDrag);
  const logo = appSettings.showLogos ? BRAND_LOGOS[brand] : "";
  button.classList.toggle("has-logo", Boolean(logo));
  button.innerHTML = `
    ${logo ? `<span class="brand-logo-wrap"><img class="brand-logo" src="${logo}" alt="${brand}车标"></span>` : ""}
    <span class="brand-name">${brand}</span>
    <span class="brand-count">${countRecords({ brand, range: selectedRange })}</span>
  `;

  button.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
      activeTouchPointers.add(event.pointerId);
      if (activeTouchPointers.size > 1) {
        isMultiTouchGesture = true;
        resetLongPressState({ resetTouches: true });
        return;
      }
    }

    button.classList.add("is-pressing");
    longPressTriggered = false;
    longPressPointerId = event.pointerId;
    longPressStartX = event.clientX;
    longPressStartY = event.clientY;
    button.setPointerCapture?.(event.pointerId);

    longPressTimer = window.setTimeout(() => {
      longPressTriggered = true;
      openBrandMenu(brand, groupName, canDrag);
    }, LONG_PRESS_MS);
  });

  button.addEventListener("pointermove", (event) => {
    if (event.pointerId === longPressPointerId) {
      const moveX = Math.abs(event.clientX - longPressStartX);
      const moveY = Math.abs(event.clientY - longPressStartY);
      if (moveX > LONG_PRESS_MOVE_LIMIT || moveY > LONG_PRESS_MOVE_LIMIT) {
        clearLongPressTimer();
        button.classList.remove("is-pressing");
        longPressPointerId = null;
      }
    }
    updateFloatingDrag(event);
  });

  button.addEventListener("pointerup", (event) => {
    const wasMultiTouch = isMultiTouchGesture;
    if (event.pointerType === "touch") {
      activeTouchPointers.delete(event.pointerId);
      if (activeTouchPointers.size === 0) {
        isMultiTouchGesture = false;
      }
    }

    clearLongPressTimer();
    button.classList.remove("is-pressing");
    const wasLongPress = longPressTriggered;
    const wasPrimaryPointer = event.pointerId === longPressPointerId;
    dragState = null;
    resetLongPressState({ resetTouches: true });
    releaseButtonPointer(button, event.pointerId);
    if (wasMultiTouch || wasLongPress || !wasPrimaryPointer) {
      return;
    }
    addRecord(brand, button);
  });

  button.addEventListener("pointercancel", (event) => {
    if (event.pointerType === "touch") {
      activeTouchPointers.delete(event.pointerId);
      if (activeTouchPointers.size === 0) {
        isMultiTouchGesture = false;
      }
    }
    resetLongPressState({ resetTouches: true });
    releaseButtonPointer(button, event.pointerId);
    dragState = null;
  });
  button.addEventListener("contextmenu", (event) => event.preventDefault());

  return button;
}

function clearLongPressTimer() {
  window.clearTimeout(longPressTimer);
  longPressTimer = null;
}

function resetLongPressState({ resetTouches = false } = {}) {
  clearLongPressTimer();
  longPressTriggered = false;
  longPressPointerId = null;
  if (resetTouches) {
    activeTouchPointers.clear();
    isMultiTouchGesture = false;
  }
  document.querySelectorAll(".brand-button.is-pressing").forEach((button) => {
    button.classList.remove("is-pressing");
  });
}

function releaseButtonPointer(button, pointerId) {
  try {
    button.releasePointerCapture?.(pointerId);
  } catch (error) {
    // Some browsers release capture automatically before pointerup.
  }
}

function updateFloatingDrag(event) {
  if (!dragState?.active) return;

  event.preventDefault();

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".sort-item");
  if (!target || target === dragState.item) return;

  const targetRect = target.getBoundingClientRect();
  const targetCenter = targetRect.top + targetRect.height / 2;
  const placeAfter = event.clientY > targetCenter;
  sortList.insertBefore(dragState.item, placeAfter ? target.nextSibling : target);
}

function saveGroupOrder(groupName, grid) {
  if (!groupName || groupName === "常用" || !grid) return;
  brandOrders[groupName] = [...grid.querySelectorAll("[data-brand]")].map((item) => item.dataset.brand);
  saveBrandOrders();
}

function createBrandGroup({ name, brands, note, canDrag = true }) {
  const section = document.createElement("section");
  section.className = "brand-group";
  section.dataset.group = name;

  const isCollapsed = Boolean(collapsedGroups[name]);
  const header = document.createElement("button");
  header.className = "brand-group-header";
  header.type = "button";
  header.setAttribute("aria-expanded", String(!isCollapsed));
  header.innerHTML = `
    <span class="group-arrow">${isCollapsed ? "›" : "⌄"}</span>
    <span class="group-name">${name}</span>
    <span class="group-note">${note || `${brands.length} 个品牌`}</span>
  `;

  const grid = document.createElement("div");
  grid.className = "brand-grid";
  grid.hidden = isCollapsed;

  const orderedBrands = canDrag ? getGroupBrands(name, brands) : brands;

  orderedBrands.forEach((brand) => {
    grid.append(createBrandButton(brand, name, canDrag));
  });

  header.addEventListener("click", () => {
    collapsedGroups[name] = !collapsedGroups[name];
    saveCollapsedGroups();
    renderBrands();
  });

  section.append(header, grid);
  return section;
}

function renderBrands() {
  brandGrid.innerHTML = "";

  if (appSettings.showFrequentGroup) {
    const frequentBrands = getFrequentBrands();
    brandGrid.append(
      createBrandGroup({
        name: "常用",
        brands: frequentBrands,
        note: `近七天最多 ${getFrequentLimit()}`,
        canDrag: false,
      })
    );
  }

  activeBrandGroups.forEach((group) => {
    brandGrid.append(createBrandGroup(group));
  });
}

function findBrandGroup(brand) {
  return activeBrandGroups.find((group) => group.brands.includes(brand));
}

function locateBrand() {
  const keyword = brandSearchInput.value.trim();
  if (!keyword) {
    statusText.textContent = "请输入品牌名称";
    return;
  }

  const exact = BRANDS.find((brand) => brand === keyword);
  const partial = BRANDS.find((brand) => brand.includes(keyword) || keyword.includes(brand));
  const brand = exact || partial;

  if (!brand) {
    statusText.textContent = `没有找到：${keyword}`;
    return;
  }

  const group = findBrandGroup(brand);
  if (!group) return;

  if (collapsedGroups[group.name]) {
    collapsedGroups[group.name] = false;
    saveCollapsedGroups();
  }

  renderBrands();

  window.requestAnimationFrame(() => {
    const button = [...document.querySelectorAll(".brand-button")].find((item) => {
      return item.dataset.group === group.name && item.dataset.brand === brand;
    });
    if (!button) return;
    button.scrollIntoView({ behavior: "smooth", block: "center" });
    flashButton(button);
    statusText.textContent = `已定位：${brand} · ${group.name}`;
  });
}

function renderRanking() {
  populateRankPeriods();
  const ranking = buildRanking();
  const visible = ranking.filter((item) => item.count > 0);
  rankTitle.textContent = `${getRankRangeLabel()}排行榜`;
  rankRegionText.textContent = getRankRegionLabel();
  updateRankButtons();
  rankList.innerHTML = "";

  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "还没有记录";
    rankList.append(empty);
    return;
  }

  visible.forEach((item, index) => {
    const row = document.createElement("li");
    row.className = "rank-item";
    const logo = appSettings.showLogos ? BRAND_LOGOS[item.brand] : "";
    row.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <span class="rank-brand">
        ${logo ? `<span class="rank-logo-wrap"><img class="rank-logo" src="${logo}" alt="${item.brand}车标"></span>` : ""}
        <span class="rank-name">${item.brand}</span>
      </span>
      <span class="rank-count">${item.count}</span>
    `;
    rankList.append(row);
  });
}

function populateRankPeriods() {
  const countryRecords = records.filter((record) => record.country === currentCountry);
  const monthKeys = [...new Set(countryRecords.map((record) => getMonthKey(new Date(record.time))))].sort().reverse();
  const yearKeys = [...new Set(countryRecords.map((record) => String(new Date(record.time).getFullYear())))].sort().reverse();
  const currentMonth = getMonthKey(new Date());
  const currentYear = String(new Date().getFullYear());
  const months = monthKeys.length > 0 ? monthKeys : [currentMonth];
  const years = yearKeys.length > 0 ? yearKeys : [currentYear];

  if (!selectedRankMonth || !months.includes(selectedRankMonth)) selectedRankMonth = months[0];
  if (!selectedRankYear || !years.includes(selectedRankYear)) selectedRankYear = years[0];

  rankMonthSelect.innerHTML = months.map((month) => `<option value="${month}">${formatMonthKey(month)}</option>`).join("");
  rankYearSelect.innerHTML = years.map((year) => `<option value="${year}">${year}年</option>`).join("");
  rankMonthSelect.value = selectedRankMonth;
  rankYearSelect.value = selectedRankYear;
}

function getRankRangeLabel() {
  if (rankRange === "month") return formatMonthKey(selectedRankMonth);
  if (rankRange === "year") return `${selectedRankYear}年`;
  return RANGE_LABELS[rankRange];
}

function getRankRegionLabel() {
  if (rankRegionScope === "all") return getCountryConfig().allRegionLabel;

  const parts = getRegionParts(rankRegionBase);
  if (rankRegionScope === "province") return parts.province;
  if (rankRegionScope === "city") return `${parts.province} · ${parts.city}`;
  return formatRegion(rankRegionBase);
}

function updateRegionButtons() {
  regionPickerText.textContent = formatRegion(lastSpecificRegion);
}

function updateCountryButtons() {
  document.querySelectorAll("[data-country]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.country === currentCountry);
  });
  if (countryPickerText) {
    const country = getCountryConfig();
    countryPickerText.textContent = `${country.flag} ${country.name}`;
  }
  const allRankScopeButton = document.querySelector('[data-rank-scope="all"]');
  if (allRankScopeButton) allRankScopeButton.textContent = getCountryConfig().allRegionLabel;
}

function updateRankButtons() {
  rankPageButton.classList.toggle("is-active", !rankPage.hidden);
  document.querySelectorAll("[data-rank-scope]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rankScope === rankRegionScope);
  });
  document.querySelectorAll("[data-rank-range]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rankRange === rankRange);
  });
  rankMonthSelect.hidden = rankRange !== "month";
  rankYearSelect.hidden = rankRange !== "year";
}

function updateRangeButtons() {
  document.querySelectorAll("[data-range]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === selectedRange);
  });
}

function render() {
  document.body.dataset.buttonSize = appSettings.buttonSize;
  currentRegion.textContent = formatRegion(lastSpecificRegion);
  regionPickerText.textContent = formatRegion(lastSpecificRegion);
  recordRangeLabel.textContent = `${RANGE_LABELS[selectedRange] || "本日"}记录`;
  todayCount.textContent = countRecords({ range: selectedRange });
  undoButton.disabled = !records.some((record) => record.country === currentCountry);
  updateCountryButtons();
  updateRegionButtons();
  updateRangeButtons();
  renderBrands();
  renderRanking();
  renderSettings();
}

function showRankPage() {
  recordPage.hidden = true;
  settingsPage.hidden = true;
  rankPage.hidden = false;
  rankRegionBase = lastSpecificRegion;
  rankPageButton.classList.add("is-active");
  settingsPageButton.classList.remove("is-active");
  renderRanking();
}

function showSettingsPage() {
  recordPage.hidden = true;
  rankPage.hidden = true;
  settingsPage.hidden = false;
  rankPageButton.classList.remove("is-active");
  settingsPageButton.classList.add("is-active");
  renderSettings();
}

function showRecordPage() {
  rankPage.hidden = true;
  settingsPage.hidden = true;
  recordPage.hidden = false;
  rankPageButton.classList.remove("is-active");
  settingsPageButton.classList.remove("is-active");
}

function switchCountry(country) {
  if (!COUNTRY_CONFIGS[country]) return;
  if (country === currentCountry) {
    closeCountryDialog();
    return;
  }
  setCountryState(country);
  appSettings.defaultCountry = country;
  selectedRegion = getCountrySetting("lastRegion", country);
  lastSpecificRegion = selectedRegion;
  rankRegionBase = selectedRegion;
  rankRegionScope = "district";
  saveAppSettings();
  statusText.textContent = `当前国家：${getCountryConfig().name}`;
  closeCountryDialog();
  showRecordPage();
  render();
}

function openCountryDialog() {
  countryDialog.hidden = false;
  updateCountryButtons();
}

function closeCountryDialog() {
  countryDialog.hidden = true;
}

function formatDateTime(value) {
  if (!value) return "无";
  return new Date(value).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getBusiestDay() {
  const countryRecords = records.filter((record) => record.country === currentCountry);
  if (countryRecords.length === 0) return "无";

  const totals = new Map();
  countryRecords.forEach((record) => {
    const day = new Date(record.time).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    totals.set(day, (totals.get(day) || 0) + 1);
  });

  const [day, count] = [...totals.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
  return `${day}（${count} 条）`;
}

function renderSettings() {
  appVersionText.textContent = APP_VERSION;
  defaultRegionText.textContent = formatRegion(getCountrySetting("defaultRegion"));
  countryPickerText.textContent = `${getCountryConfig().flag} ${getCountryConfig().name}`;
  showLogoToggle.checked = appSettings.showLogos;
  buttonSizeSelect.value = appSettings.buttonSize;
  showFrequentToggle.checked = appSettings.showFrequentGroup;
  frequentLimitInput.value = String(getFrequentLimit());

  const countryRecords = records.filter((record) => record.country === currentCountry);
  const sortedRecords = [...countryRecords].sort((a, b) => new Date(a.time) - new Date(b.time));
  const firstRecord = sortedRecords[0];
  const lastRecord = sortedRecords[sortedRecords.length - 1];

  dataStats.innerHTML = `
    <div><span>当前国家</span><strong>${getCountryConfig().name}</strong></div>
    <div><span>总记录数</span><strong>${countryRecords.length}</strong></div>
    <div><span>最早记录</span><strong>${formatDateTime(firstRecord?.time)}</strong></div>
    <div><span>最后记录</span><strong>${formatDateTime(lastRecord?.time)}</strong></div>
    <div><span>记录最多的日子</span><strong>${getBusiestDay()}</strong></div>
  `;

  recentRegionsList.innerHTML = `
    <span class="settings-list-title">最近使用地区</span>
  `;
  getCountryRecentRegions().forEach((region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent-region-button";
    const timeText = region.usedAt ? formatDateTime(region.usedAt) : "未记录时间";
    button.innerHTML = `
      <span>${formatRegion(region.name)}</span>
      <strong>${timeText}</strong>
    `;
    button.addEventListener("click", () => {
      selectedRegion = region.name;
      lastSpecificRegion = region.name;
      rememberLastRegion(region.name);
      statusText.textContent = `当前地区：${formatRegion(region.name)}`;
      showRecordPage();
      render();
    });
    recentRegionsList.append(button);
  });
}

function renderGuideStep() {
  const step = GUIDE_STEPS[guideStepIndex];
  guideTitle.textContent = "欢迎使用计车器";
  guideStepTitle.textContent = step.title;
  guideStepText.textContent = step.text;
  guideBackButton.disabled = guideStepIndex === 0;
  guideNextButton.textContent = guideStepIndex === GUIDE_STEPS.length - 1 ? "开始使用" : "下一步";
  guideProgress.innerHTML = GUIDE_STEPS.map((_, index) => {
    return `<span class="${index === guideStepIndex ? "is-active" : ""}"></span>`;
  }).join("");
}

function openGuide({ force = false } = {}) {
  if (!force && appSettings.guideSeen) return;
  guideStepIndex = 0;
  renderGuideStep();
  guideDialog.hidden = false;
}

function closeGuide({ markSeen = true } = {}) {
  if (markSeen) {
    appSettings.guideSeen = true;
    saveAppSettings();
  }
  guideDialog.hidden = true;
}

function goNextGuideStep() {
  if (guideStepIndex >= GUIDE_STEPS.length - 1) {
    closeGuide();
    return;
  }
  guideStepIndex += 1;
  renderGuideStep();
}

function goBackGuideStep() {
  if (guideStepIndex === 0) return;
  guideStepIndex -= 1;
  renderGuideStep();
}

function showUndoTip() {
  undoTip.hidden = false;
}

function closeUndoTip() {
  undoTip.hidden = true;
}

function exportBackup() {
  const backup = {
    app: "计车器",
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    settings: appSettings,
    records,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `计车器备份-${date}.json`;
  link.click();
  URL.revokeObjectURL(url);
  statusText.textContent = "备份已导出";
}

function importBackup(file) {
  if (!file) return;

  if (records.length > 0 && !window.confirm("导入备份会替换当前本地记录。确定继续吗？")) {
    importInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);
      const incomingRecords = Array.isArray(backup) ? backup : backup.records;
      if (!Array.isArray(incomingRecords)) throw new Error("Invalid backup");

      records = incomingRecords
        .filter((record) => record && record.brand && record.region && record.time)
        .map((record) =>
          normalizeRecordRegion({
            id: record.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
            country: record.country && COUNTRY_CONFIGS[record.country] ? record.country : "CN",
            brand: String(record.brand),
            region: String(record.region),
            time: new Date(record.time).toISOString(),
          })
        );

      if (backup && typeof backup.settings === "object" && !Array.isArray(backup.settings)) {
        appSettings = {
          ...loadAppSettings(),
          ...backup.settings,
          countries: {
            ...loadAppSettings().countries,
            ...(backup.settings.countries || {}),
          },
        };
        if (!COUNTRY_CONFIGS[appSettings.defaultCountry]) appSettings.defaultCountry = "CN";
        saveAppSettings();
        appSettings = loadAppSettings();
      }

      saveRecords();
      setCountryState(appSettings.defaultCountry || "CN");
      selectedRegion = getCountrySetting("lastRegion");
      lastSpecificRegion = selectedRegion;
      statusText.textContent = `已导入 ${records.length} 条记录`;
      render();
    } catch {
      statusText.textContent = "导入失败，请选择计车器 JSON 备份";
    } finally {
      importInput.value = "";
    }
  });
  reader.readAsText(file, "utf-8");
}

function formatRegion(regionName) {
  if (regionName === "全部地区") return "全部地区";
  if (regionName === "全国") return "全国";
  const { province, city, district } = getRegionParts(regionName);
  if (province && city && district) {
    if (province === city && city === district) return province;
    if (city === province || province.endsWith("特别行政区")) return `${province} · ${district}`;
    if (district === city) return `${province} · ${city}`;
  }
  return regionName.replaceAll(" ", " · ");
}

function selectSpecificRegion(regionName) {
  if (regionDialogMode === "rank") {
    rankRegionBase = regionName;
  } else if (regionDialogMode === "default") {
    setCountrySetting("defaultRegion", regionName);
    rememberRegion(regionName);
    statusText.textContent = `默认地区：${formatRegion(regionName)}`;
  } else {
    selectedRegion = regionName;
    lastSpecificRegion = regionName;
    rememberLastRegion(regionName);
    statusText.textContent = `当前地区：${formatRegion(regionName)}`;
  }
  closeRegionDialog();
  render();
}

function openRegionDialog(mode = "record") {
  regionDialogMode = mode;
  regionDialog.hidden = false;
  regionSearchInput.value = "";
  const baseRegion = mode === "rank" ? rankRegionBase : mode === "default" ? getCountrySetting("defaultRegion") : lastSpecificRegion;
  primeRegionDialog(baseRegion);
  renderRegionList();
  renderRegionSearch();
}

function closeRegionDialog() {
  regionDialog.hidden = true;
}

function shouldSkipCityStep(province) {
  if (!province || province.cities.length !== 1) return false;
  const cityName = province.cities[0].city;
  return cityName === province.province || province.province.endsWith("特别行政区");
}

function isSelfOnlyCity(city) {
  return city && city.districts.length === 1 && city.districts[0] === city.city;
}

function makeRegionName(province, city, district) {
  return `${province.province} ${city.city} ${district}`;
}

function findRegionLocation(regionName) {
  const parts = getRegionParts(regionName);
  const province = activeRegionTree.find((item) => item.province === parts.province);
  if (!province) return null;
  const city = province.cities.find((item) => item.city === parts.city) || province.cities[0];
  if (!city) return { province, city: null };
  return { province, city };
}

function primeRegionDialog(regionName) {
  regionStep = "province";
  selectedProvince = null;
  selectedCity = null;

  const location = findRegionLocation(regionName);
  if (!location?.province || !location.city) return;

  selectedProvince = location.province;
  selectedCity = location.city;

  if (isSelfOnlyCity(selectedCity)) {
    selectedCity = null;
    regionStep = shouldSkipCityStep(selectedProvince) ? "province" : "city";
    return;
  }

  regionStep = "district";
}

function chooseProvince(province) {
  selectedProvince = province;
  selectedCity = null;

  if (shouldSkipCityStep(province)) {
    selectedCity = province.cities[0];
    if (isSelfOnlyCity(selectedCity)) {
      selectSpecificRegion(makeRegionName(province, selectedCity, selectedCity.city));
      return;
    }
    regionStep = "district";
    renderRegionList();
    return;
  }

  regionStep = "city";
  renderRegionList();
}

function chooseCity(city) {
  selectedCity = city;

  if (isSelfOnlyCity(city)) {
    selectSpecificRegion(makeRegionName(selectedProvince, city, city.city));
    return;
  }

  regionStep = "district";
  renderRegionList();
}

function renderRegionList() {
  regionList.innerHTML = "";
  regionList.hidden = regionSearchInput.value.trim().length > 0;
  regionBackButton.disabled = regionStep === "province";

  if (regionStep === "province") {
    regionPathText.textContent = "请选择省级地区";
    activeRegionTree.forEach((province) => {
      const button = createRegionOption(province.province, false);
      button.addEventListener("click", () => chooseProvince(province));
      regionList.append(button);
    });
    return;
  }

  if (regionStep === "city" && selectedProvince) {
    regionPathText.textContent = selectedProvince.province;
    selectedProvince.cities.forEach((city) => {
      const button = createRegionOption(city.city, false);
      button.addEventListener("click", () => chooseCity(city));
      regionList.append(button);
    });
    return;
  }

  if (regionStep === "district" && selectedProvince && selectedCity) {
    regionPathText.textContent = shouldSkipCityStep(selectedProvince)
      ? selectedProvince.province
      : `${selectedProvince.province} > ${selectedCity.city}`;
    selectedCity.districts.forEach((district) => {
      const regionName = makeRegionName(selectedProvince, selectedCity, district);
      const button = createRegionOption(district, regionName === lastSpecificRegion);
      button.addEventListener("click", () => selectSpecificRegion(regionName));
      regionList.append(button);
    });
  }
}

function createRegionOption(label, isActive) {
  const button = document.createElement("button");
  button.className = "region-option";
  button.classList.toggle("is-active", isActive);
  button.type = "button";
  button.textContent = label;
  return button;
}

function renderRegionSearch() {
  const keyword = regionSearchInput.value.trim();
  const isSearchMode = keyword.length > 0;
  regionSearchResults.innerHTML = "";
  regionDialog.classList.toggle("is-searching", isSearchMode);
  regionSearchResults.hidden = !isSearchMode;
  regionList.hidden = isSearchMode;
  regionPath.hidden = isSearchMode;
  regionBackButton.disabled = isSearchMode || regionStep === "province";

  if (!keyword) {
    renderRegionList();
    return;
  }

  const matches = REGION_OPTIONS.filter((region) => {
    return region.name.includes(keyword) || region.shortName.includes(keyword) || region.district.includes(keyword);
  }).slice(0, 60);

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到地区";
    regionSearchResults.append(empty);
    return;
  }

  matches.forEach((region) => {
    const button = document.createElement("button");
    button.className = "search-result";
    button.type = "button";
    button.innerHTML = `
      <strong>${region.district}</strong>
      <span>${region.province} · ${region.city}</span>
    `;
    button.addEventListener("click", () => selectSpecificRegion(region.name));
    regionSearchResults.append(button);
  });
}

function goBackRegionStep() {
  if (regionStep === "district") {
    if (shouldSkipCityStep(selectedProvince)) {
      regionStep = "province";
      selectedProvince = null;
    } else {
      regionStep = "city";
      selectedCity = null;
    }
  } else if (regionStep === "city") {
    regionStep = "province";
    selectedProvince = null;
  }

  renderRegionList();
  renderRegionSearch();
}

function openBrandMenu(brand, groupName = findBrandGroup(brand)?.name, canSort = true) {
  activeBrand = brand;
  activeBrandGroup = groupName;
  menuTitle.textContent = brand;
  menuSortButton.disabled = !canSort || groupName === "常用";
  menuMinusButton.disabled = countRecords({ brand, range: "all" }) === 0;
  brandMenu.hidden = false;
  resetLongPressState({ resetTouches: true });
}

function closeBrandMenu() {
  activeBrand = null;
  activeBrandGroup = null;
  resetLongPressState({ resetTouches: true });
  brandMenu.hidden = true;
}

function startSortMode() {
  if (!activeBrandGroup || activeBrandGroup === "常用") return;
  sortingGroup = activeBrandGroup;
  closeBrandMenu();
  renderSortDialog();
  sortDialog.hidden = false;
}

function stopSortMode() {
  sortingGroup = null;
  dragState = null;
  sortDialog.hidden = true;
}

function renderSortDialog() {
  const group = BRAND_GROUPS.find((item) => item.name === sortingGroup);
  if (!group) return;

  sortTitle.textContent = `调整${group.name}排序`;
  sortList.innerHTML = "";

  getGroupBrands(group.name, group.brands).forEach((brand) => {
    const item = document.createElement("li");
    item.className = "sort-item";
    item.dataset.brand = brand;
    item.innerHTML = `
      <span class="sort-handle">≡</span>
      <strong>${brand}</strong>
    `;

    item.addEventListener("pointerdown", (event) => {
      if (!event.target.closest(".sort-handle")) return;
      event.preventDefault();
      item.setPointerCapture?.(event.pointerId);
      dragState = { active: true, item };
      item.classList.add("is-dragging");
    });
    item.addEventListener("pointermove", updateFloatingDrag);
    item.addEventListener("pointerup", () => {
      item.classList.remove("is-dragging");
      dragState = null;
    });
    item.addEventListener("pointercancel", () => {
      item.classList.remove("is-dragging");
      dragState = null;
    });

    sortList.append(item);
  });
}

function saveSortDialog() {
  if (!sortingGroup) return;
  saveGroupOrder(sortingGroup, sortList);
  statusText.textContent = `${sortingGroup}分组顺序已保存`;
  stopSortMode();
  render();
}

function getBrandRecords(brand) {
  return records
    .filter((record) => record.brand === brand && inSelectedRegion(record))
    .sort((a, b) => new Date(b.time) - new Date(a.time));
}

function getRecentRecords() {
  return records
    .filter((record) => record.country === currentCountry && isInRange(record, "week"))
    .sort((a, b) => new Date(b.time) - new Date(a.time));
}

function openRecordDialog(brand) {
  activeRecordDialog = { mode: "brand", brand };
  renderRecordDialog();
}

function openRecentRecordDialog() {
  activeRecordDialog = { mode: "recent", brand: "" };
  showRecordPage();
  renderRecordDialog();
}

function getActiveRecordList() {
  if (activeRecordDialog.mode === "brand") return getBrandRecords(activeRecordDialog.brand);
  return getRecentRecords();
}

function renderRecordDialog() {
  const list = getActiveRecordList();
  recordTools.hidden = activeRecordDialog.mode !== "recent";
  bulkDeleteBrandInput.hidden = bulkDeleteRange.value !== "brand";
  recordTitle.textContent = activeRecordDialog.mode === "brand" ? `${activeRecordDialog.brand}记录` : "近七天记录";
  recordList.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "还没有记录";
    recordList.append(empty);
  } else {
    list.slice(0, 60).forEach((record) => {
      const item = document.createElement("li");
      item.className = "record-item";
      const time = new Date(record.time).toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      item.innerHTML = `
        <span>
          <strong>${record.brand}</strong>
          <em>${formatRegion(record.region)}</em>
        </span>
        <time>${time}</time>
        <button class="record-delete-button" type="button" aria-label="删除这条记录" title="删除">🗑</button>
      `;
      item.querySelector(".record-delete-button").addEventListener("click", () => deleteRecord(record.id));
      recordList.append(item);
    });
  }

  closeBrandMenu();
  recordDialog.hidden = false;
}

function deleteRecord(recordId) {
  const record = records.find((item) => item.id === recordId);
  if (!record) return;
  if (!window.confirm(`删除这条${record.brand}记录吗？`)) return;
  records = records.filter((item) => item.id !== recordId);
  saveRecords();
  statusText.textContent = `已删除：${record.brand}`;
  renderRecordDialog();
  render();
}

function getBulkDeleteRecords() {
  const range = bulkDeleteRange.value;
  const keyword = bulkDeleteBrandInput.value.trim();
  return records.filter((record) => {
    if (record.country !== currentCountry) return false;
    if (range === "brand") {
      if (!keyword) return false;
      return record.brand.includes(keyword) || keyword.includes(record.brand);
    }
    return isInRange(record, range);
  });
}

function bulkDeleteRecords() {
  const range = bulkDeleteRange.value;
  const matched = getBulkDeleteRecords();
  if (range === "brand" && !bulkDeleteBrandInput.value.trim()) {
    statusText.textContent = "请输入要删除的品牌";
    return;
  }
  if (matched.length === 0) {
    statusText.textContent = "没有符合条件的记录";
    return;
  }
  const label = range === "brand" ? `品牌包含“${bulkDeleteBrandInput.value.trim()}”` : bulkDeleteRange.selectedOptions[0].textContent.replace("删除", "");
  if (!window.confirm(`将删除${label}的 ${matched.length} 条记录。确定继续吗？`)) return;
  if (!window.confirm("请再次确认：这些记录删除后无法恢复，真的删除吗？")) return;
  const ids = new Set(matched.map((record) => record.id));
  records = records.filter((record) => !ids.has(record.id));
  saveRecords();
  statusText.textContent = `已删除 ${matched.length} 条记录`;
  renderRecordDialog();
  render();
}

function closeRecordDialog() {
  recordDialog.hidden = true;
}

function withTimeout(promise, ms, message = "timeout") {
  return Promise.race([
    promise,
    new Promise((_, reject) => window.setTimeout(() => reject(new Error(message)), ms)),
  ]);
}

function waitForWorkerInstalled(worker, ms = 3500) {
  if (!worker) return Promise.resolve(null);
  if (worker.state === "installed" || worker.state === "activated") return Promise.resolve(worker);

  return withTimeout(
    new Promise((resolve) => {
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" || worker.state === "activated") {
          resolve(worker);
        }
      });
    }),
    ms,
    "worker-install-timeout"
  ).catch(() => null);
}

async function activateWaitingWorker(worker) {
  if (!worker) return false;
  worker.postMessage({ type: "SKIP_WAITING" });
  await withTimeout(
    new Promise((resolve) => {
      navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
    }),
    2500,
    "controllerchange-timeout"
  ).catch(() => {});
  window.location.reload();
  return true;
}

async function updateApp() {
  if (updateAppButton.disabled) return;
  updateAppButton.disabled = true;
  updateStatusText.textContent = "正在检查更新";

  if (!("serviceWorker" in navigator)) {
    updateStatusText.textContent = "当前浏览器不支持";
    updateAppButton.disabled = false;
    return;
  }

  try {
    let registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
      registration = await withTimeout(navigator.serviceWorker.register("sw.js"), 4500, "register-timeout");
    }

    await withTimeout(registration.update(), 4500, "update-timeout");

    let waitingWorker = registration.waiting;
    if (!waitingWorker && registration.installing) {
      updateStatusText.textContent = "正在安装新版";
      await waitForWorkerInstalled(registration.installing);
      waitingWorker = registration.waiting || registration.installing;
    }

    if (waitingWorker) {
      updateStatusText.textContent = "已获取新版";
      if (window.confirm("已获取新版，是否立即刷新？")) {
        await activateWaitingWorker(waitingWorker);
      }
      return;
    }

    updateStatusText.textContent = "已是最新";
  } catch (error) {
    updateStatusText.textContent = error.message?.includes("timeout") ? "检查超时，请稍后重试" : "检查失败";
  } finally {
    updateAppButton.disabled = false;
  }
}

function clearAllData() {
  if (!window.confirm("清空后会删除所有本地记录、排序和设置。确定继续吗？")) return;
  if (!window.confirm("请再次确认：真的清空全部数据吗？")) return;

  records = [];
  collapsedGroups = {};
  brandOrders = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(`${STORAGE_KEY}.collapsedGroups`);
  localStorage.removeItem(`${STORAGE_KEY}.brandOrders`);
  localStorage.removeItem(SETTINGS_KEY);
  appSettings = loadAppSettings();
  setCountryState(appSettings.defaultCountry || "CN");
  selectedRegion = getCountrySetting("lastRegion");
  lastSpecificRegion = selectedRegion;
  statusText.textContent = "全部本地数据已清空";
  showRecordPage();
  render();
}

function resetBrandOrder() {
  if (!window.confirm("确定恢复所有品牌的默认排序吗？")) return;
  brandOrders = {};
  saveBrandOrders();
  statusText.textContent = "品牌排序已重置";
  render();
}

document.querySelectorAll("[data-rank-range]").forEach((button) => {
  button.addEventListener("click", () => {
    rankRange = button.dataset.rankRange;
    renderRanking();
  });
});

document.querySelectorAll("[data-rank-scope]").forEach((button) => {
  button.addEventListener("click", () => {
    rankRegionScope = button.dataset.rankScope;
    renderRanking();
  });
});

document.querySelectorAll("[data-range]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRange = button.dataset.range;
    render();
  });
});

document.querySelectorAll("[data-country]").forEach((button) => {
  button.addEventListener("click", () => switchCountry(button.dataset.country));
});

undoButton.addEventListener("click", undoLastRecord);
rankPageButton.addEventListener("click", showRankPage);
settingsPageButton.addEventListener("click", showSettingsPage);
backToRecordButton.addEventListener("click", showRecordPage);
backFromSettingsButton.addEventListener("click", showRecordPage);
settingsExportButton.addEventListener("click", exportBackup);
settingsImportButton.addEventListener("click", () => importInput.click());
recordQueryButton.addEventListener("click", openRecentRecordDialog);
importInput.addEventListener("change", () => importBackup(importInput.files[0]));
updateAppButton.addEventListener("click", updateApp);
reloadAppButton.addEventListener("click", () => window.location.reload());
clearDataButton.addEventListener("click", clearAllData);
resetBrandOrderButton.addEventListener("click", resetBrandOrder);
guideButton.addEventListener("click", () => openGuide({ force: true }));
defaultRegionButton.addEventListener("click", () => openRegionDialog("default"));
countryPickerButton.addEventListener("click", openCountryDialog);
countryCloseButton.addEventListener("click", closeCountryDialog);
countryDialog.addEventListener("click", (event) => {
  if (event.target === countryDialog) closeCountryDialog();
});
showLogoToggle.addEventListener("change", () => {
  appSettings.showLogos = showLogoToggle.checked;
  saveAppSettings();
  render();
});
buttonSizeSelect.addEventListener("change", () => {
  appSettings.buttonSize = buttonSizeSelect.value;
  saveAppSettings();
  render();
});
showFrequentToggle.addEventListener("change", () => {
  appSettings.showFrequentGroup = showFrequentToggle.checked;
  saveAppSettings();
  render();
});
frequentLimitInput.addEventListener("change", () => {
  appSettings.frequentLimit = Math.min(20, Math.max(3, Math.round(Number(frequentLimitInput.value) || 9)));
  saveAppSettings();
  render();
});
rankMonthSelect.addEventListener("change", () => {
  selectedRankMonth = rankMonthSelect.value;
  renderRanking();
});
rankYearSelect.addEventListener("change", () => {
  selectedRankYear = rankYearSelect.value;
  renderRanking();
});
brandSearchButton.addEventListener("click", locateBrand);
brandSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") locateBrand();
});
regionPickerButton.addEventListener("click", () => openRegionDialog("record"));
rankRegionButton.addEventListener("click", () => openRegionDialog("rank"));
regionCloseButton.addEventListener("click", closeRegionDialog);
regionBackButton.addEventListener("click", goBackRegionStep);
regionSearchInput.addEventListener("input", renderRegionSearch);
regionDialog.addEventListener("click", (event) => {
  if (event.target === regionDialog) closeRegionDialog();
});
menuCloseButton.addEventListener("click", closeBrandMenu);
menuViewButton.addEventListener("click", () => activeBrand && openRecordDialog(activeBrand));
menuSortButton.addEventListener("click", startSortMode);
menuMinusButton.addEventListener("click", () => activeBrand && removeLatestBrandRecord(activeBrand));
sortCloseButton.addEventListener("click", stopSortMode);
sortSaveButton.addEventListener("click", saveSortDialog);
brandMenu.addEventListener("click", (event) => {
  if (event.target === brandMenu) closeBrandMenu();
});
window.addEventListener("pointerup", () => resetLongPressState({ resetTouches: true }));
window.addEventListener("pointercancel", () => resetLongPressState({ resetTouches: true }));
window.addEventListener("blur", () => resetLongPressState({ resetTouches: true }));
sortDialog.addEventListener("click", (event) => {
  if (event.target === sortDialog) stopSortMode();
});
recordCloseButton.addEventListener("click", closeRecordDialog);
bulkDeleteRange.addEventListener("change", () => {
  bulkDeleteBrandInput.hidden = bulkDeleteRange.value !== "brand";
});
bulkDeleteButton.addEventListener("click", bulkDeleteRecords);
recordDialog.addEventListener("click", (event) => {
  if (event.target === recordDialog) closeRecordDialog();
});
guideBackButton.addEventListener("click", goBackGuideStep);
guideNextButton.addEventListener("click", goNextGuideStep);
guideSkipButton.addEventListener("click", () => closeGuide());
guideSkipTextButton.addEventListener("click", () => closeGuide());
guideDialog.addEventListener("click", (event) => {
  if (event.target === guideDialog) closeGuide();
});
undoTipCloseButton.addEventListener("click", closeUndoTip);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

render();
openGuide();
