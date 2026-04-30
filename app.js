const BRAND_GROUPS = [
  {
    "name": "中国",
    "brands": [
      "比亚迪",
      "埃安",
      "传祺",
      "红旗",
      "吉利",
      "理想",
      "小鹏",
      "五菱",
      "宝骏",
      "问界",
      "智界",
      "尊界",
      "享界",
      "奇瑞",
      "长安",
      "启辰",
      "领克",
      "极氪",
      "蔚来",
      "小米",
      "方程豹",
      "腾势",
      "魏牌",
      "一汽",
      "奔腾",
      "荣威",
      "昊铂",
      "哈弗",
      "深蓝",
      "吉利银河",
      "吉利几何",
      "零跑",
      "东风",
      "东风风神",
      "东风风行",
      "东风风光",
      "东风奕派",
      "威马",
      "岚图",
      "欧拉",
      "阿维塔",
      "长安启源",
      "名爵",
      "捷途",
      "哪吒",
      "极狐",
      "星途",
      "睿蓝",
      "枫叶",
      "合创",
      "iCar",
      "坦克",
      "极越",
      "江淮",
      "萤火虫",
      "海马",
      "大通",
      "幻速",
      "北京",
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
      "乐道",
      "仰望",
      "全球鹰",
      "凌宝",
      "国金",
      "奇瑞风云",
      "尚界",
      "思铭",
      "斯威",
      "智己",
      "爱驰",
      "理念",
      "蓝电",
      "观致",
      "长安欧尚",
      "高合",
      "江铃",
      "宝沃"
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
      "世极"
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

const BRANDS = [...new Set(BRAND_GROUPS.flatMap((group) => group.brands))];
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
  "魏牌": "logos/logo-150.png"
};

const STORAGE_KEY = "jicheqi.records.v1";
const RANGE_LABELS = {
  today: "今日",
  week: "本周",
  month: "本月",
  year: "本年",
  all: "全部",
};

let selectedRegion = "广东省 广州市 天河区";
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
let dragState = null;
let sortingGroup = null;
let regionStep = "province";
let selectedProvince = null;
let selectedCity = null;

const brandGrid = document.querySelector("#brandGrid");
const recordPage = document.querySelector("#recordPage");
const rankPage = document.querySelector("#rankPage");
const rankPageButton = document.querySelector("#rankPageButton");
const backToRecordButton = document.querySelector("#backToRecordButton");
const rankList = document.querySelector("#rankList");
const rankTitle = document.querySelector("#rankTitle");
const statusText = document.querySelector("#statusText");
const undoButton = document.querySelector("#undoButton");
const currentRegion = document.querySelector("#currentRegion");
const todayCount = document.querySelector("#todayCount");
const exportButton = document.querySelector("#exportButton");
const importButton = document.querySelector("#importButton");
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
const regionList = document.querySelector("#regionList");
const regionSearchResults = document.querySelector("#regionSearchResults");
let regionDialogMode = "record";

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
    region: oldRegionMap[record.region] || record.region,
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
    return recordDate >= startOfWeek(now);
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

  if (range === "week") {
    return recordDate >= startOfWeek(now);
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
  return selectedRegion === "全部地区" || record.region === selectedRegion;
}

function getRegionParts(regionName) {
  const [province = "", city = "", district = ""] = regionName.split(" ");
  return { province, city, district };
}

function isInRankRegion(record) {
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
    const matchesRegion = region === "全部地区" || record.region === region;
    return matchesBrand && matchesRegion && inSelectedRange(record);
  }).length;
  selectedRange = previousRange;
  return count;
}

function countRecentBrand(brand) {
  const recentStart = startOfLastSevenDays();
  return records.filter((record) => {
    return record.brand === brand && inSelectedRegion(record) && new Date(record.time) >= recentStart;
  }).length;
}

function getFrequentBrands() {
  return BRANDS.map((brand) => ({
    brand,
    count: countRecentBrand(brand),
  }))
    .sort((a, b) => b.count - a.count || BRANDS.indexOf(a.brand) - BRANDS.indexOf(b.brand))
    .slice(0, 9)
    .map((item) => item.brand);
}

function addRecord(brand, button) {
  const recordRegion = selectedRegion === "全部地区" ? lastSpecificRegion : selectedRegion;

  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    brand,
    region: recordRegion,
    time: new Date().toISOString(),
  };

  records.push(record);
  saveRecords();
  statusText.textContent = `已记录：${brand} · ${formatRegion(recordRegion)}`;
  flashButton(button);
  render();
}

function flashButton(button) {
  button.classList.add("flash");
  window.setTimeout(() => button.classList.remove("flash"), 180);
}

function undoLastRecord() {
  const last = records.pop();
  if (!last) return;

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
  const logo = BRAND_LOGOS[brand];
  button.classList.toggle("has-logo", Boolean(logo));
  button.innerHTML = `
    ${logo ? `<span class="brand-logo-wrap"><img class="brand-logo" src="${logo}" alt="${brand}车标"></span>` : ""}
    <span class="brand-name">${brand}</span>
    <span class="brand-count">${countRecords({ brand, range: "today" })}</span>
  `;

  button.addEventListener("pointerdown", (event) => {
    longPressTriggered = false;
    button.setPointerCapture?.(event.pointerId);

    longPressTimer = window.setTimeout(() => {
      longPressTriggered = true;
      openBrandMenu(brand, groupName, canDrag);
    }, 520);
  });

  button.addEventListener("pointermove", (event) => {
    updateFloatingDrag(event);
  });

  button.addEventListener("pointerup", () => {
    clearLongPressTimer();
    const wasLongPress = longPressTriggered;
    dragState = null;
    longPressTriggered = false;
    if (wasLongPress) {
      return;
    }
    addRecord(brand, button);
  });

  button.addEventListener("pointercancel", () => {
    clearLongPressTimer();
    dragState = null;
  });
  button.addEventListener("contextmenu", (event) => event.preventDefault());

  return button;
}

function clearLongPressTimer() {
  window.clearTimeout(longPressTimer);
  longPressTimer = null;
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

  const frequentBrands = getFrequentBrands();
  brandGrid.append(
    createBrandGroup({
      name: "常用",
      brands: frequentBrands,
      note: "近 7 天前 9",
      canDrag: false,
    })
  );

    BRAND_GROUPS.forEach((group) => {
    brandGrid.append(createBrandGroup(group));
  });
}

function findBrandGroup(brand) {
  return BRAND_GROUPS.find((group) => group.brands.includes(brand));
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
    row.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <span class="rank-name">${item.brand}</span>
      <span class="rank-count">${item.count}</span>
    `;
    rankList.append(row);
  });
}

function populateRankPeriods() {
  const monthKeys = [...new Set(records.map((record) => getMonthKey(new Date(record.time))))].sort().reverse();
  const yearKeys = [...new Set(records.map((record) => String(new Date(record.time).getFullYear())))].sort().reverse();
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
  if (rankRegionScope === "all") return "全部地区";

  const parts = getRegionParts(rankRegionBase);
  if (rankRegionScope === "province") return parts.province;
  if (rankRegionScope === "city") return `${parts.province} · ${parts.city}`;
  return formatRegion(rankRegionBase);
}

function updateRegionButtons() {
  regionPickerText.textContent = formatRegion(lastSpecificRegion);
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
  currentRegion.textContent = formatRegion(lastSpecificRegion);
  regionPickerText.textContent = formatRegion(lastSpecificRegion);
  todayCount.textContent = countRecords({ range: "today" });
  undoButton.disabled = records.length === 0;
  updateRegionButtons();
  renderBrands();
  renderRanking();
}

function showRankPage() {
  recordPage.hidden = true;
  rankPage.hidden = false;
  rankRegionBase = lastSpecificRegion;
  rankPageButton.classList.add("is-active");
  renderRanking();
}

function showRecordPage() {
  rankPage.hidden = true;
  recordPage.hidden = false;
  rankPageButton.classList.remove("is-active");
}

function exportBackup() {
  const backup = {
    app: "计车器",
    version: 1,
    exportedAt: new Date().toISOString(),
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
            brand: String(record.brand),
            region: String(record.region),
            time: new Date(record.time).toISOString(),
          })
        );

      saveRecords();
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
  const { province, city, district } = getRegionParts(regionName);
  if (province && city && district) {
    if (city === province || province.endsWith("特别行政区")) return `${province} · ${district}`;
    if (district === city) return `${province} · ${city}`;
  }
  return regionName.replaceAll(" ", " · ");
}

function selectSpecificRegion(regionName) {
  if (regionDialogMode === "rank") {
    rankRegionBase = regionName;
  } else {
    selectedRegion = regionName;
    lastSpecificRegion = regionName;
    statusText.textContent = `当前地区：${formatRegion(regionName)}`;
  }
  closeRegionDialog();
  render();
}

function openRegionDialog(mode = "record") {
  regionDialogMode = mode;
  regionDialog.hidden = false;
  regionSearchInput.value = "";
  regionStep = "province";
  selectedProvince = null;
  selectedCity = null;
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

function chooseProvince(province) {
  selectedProvince = province;
  selectedCity = null;

  if (shouldSkipCityStep(province)) {
    selectedCity = province.cities[0];
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
    REGION_TREE.forEach((province) => {
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
  regionSearchResults.innerHTML = "";
  regionSearchResults.hidden = keyword.length === 0;
  regionList.hidden = keyword.length > 0;
  regionBackButton.disabled = keyword.length > 0 || regionStep === "province";

  if (!keyword) return;

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
}

function closeBrandMenu() {
  activeBrand = null;
  activeBrandGroup = null;
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

function openRecordDialog(brand) {
  const list = getBrandRecords(brand);
  recordTitle.textContent = `${brand}记录`;
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
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      item.innerHTML = `
        <span>${record.region}</span>
        <strong>${time}</strong>
      `;
      recordList.append(item);
    });
  }

  closeBrandMenu();
  recordDialog.hidden = false;
}

function closeRecordDialog() {
  recordDialog.hidden = true;
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

undoButton.addEventListener("click", undoLastRecord);
rankPageButton.addEventListener("click", showRankPage);
backToRecordButton.addEventListener("click", showRecordPage);
exportButton.addEventListener("click", exportBackup);
importButton.addEventListener("click", () => importInput.click());
importInput.addEventListener("change", () => importBackup(importInput.files[0]));
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
sortDialog.addEventListener("click", (event) => {
  if (event.target === sortDialog) stopSortMode();
});
recordCloseButton.addEventListener("click", closeRecordDialog);
recordDialog.addEventListener("click", (event) => {
  if (event.target === recordDialog) closeRecordDialog();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

render();
