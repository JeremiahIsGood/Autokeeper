const BRAND_GROUPS = [
  {
    name: "中国",
    brands: [
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
      "捷达",
      "驭胜",
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
    ],
  },
  {
    name: "日本",
    brands: ["丰田", "本田", "日产", "马自达", "雷克萨斯", "三菱", "斯巴鲁", "讴歌", "铃木", "英菲尼迪"],
  },
  {
    name: "美国",
    brands: ["特斯拉", "福特", "雪佛兰", "别克", "凯迪拉克", "林肯", "吉普", "道奇", "克莱斯勒"],
  },
  {
    name: "德国",
    brands: ["大众", "奔驰", "宝马", "奥迪", "保时捷", "斯玛特"],
  },
  {
    name: "英国",
    brands: ["路虎", "捷豹", "迷你", "宾利", "劳斯莱斯", "莲花"],
  },
  {
    name: "韩国",
    brands: ["现代", "起亚"],
  },
  {
    name: "法国",
    brands: ["标致", "雪铁龙", "雷诺", "DS"],
  },
  {
    name: "意大利",
    brands: ["玛莎拉蒂", "菲亚特", "兰博基尼", "法拉利", "阿尔法·罗密欧"],
  },
  {
    name: "其他",
    brands: ["沃尔沃", "斯柯达", "纳智捷"],
  },
];

const BRANDS = [...new Set(BRAND_GROUPS.flatMap((group) => group.brands))];
const REGION_TREE = window.REGION_TREE || [];
const REGION_OPTIONS = REGION_TREE.flatMap((province) =>
  province.cities.flatMap((city) =>
    city.districts.map((district) => ({
      province: province.province,
      city: city.city,
      district,
      name: `${province.province} ${city.city} ${district}`,
      shortName: `${city.city} ${district}`,
    }))
  )
);
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
let records = loadRecords();
let collapsedGroups = loadCollapsedGroups();
let brandOrders = loadBrandOrders();
let activeBrand = null;
let activeBrandGroup = null;
let longPressTimer = null;
let longPressTriggered = false;
let dragState = null;
let sortingGroup = null;
let selectedProvinceIndex = 0;
let selectedCityIndex = 0;

const brandGrid = document.querySelector("#brandGrid");
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
const sortBar = document.querySelector("#sortBar");
const sortBarText = document.querySelector("#sortBarText");
const sortDoneButton = document.querySelector("#sortDoneButton");
const regionPickerButton = document.querySelector("#regionPickerButton");
const regionPickerText = document.querySelector("#regionPickerText");
const allRegionButton = document.querySelector("#allRegionButton");
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
const regionDialog = document.querySelector("#regionDialog");
const regionCloseButton = document.querySelector("#regionCloseButton");
const regionSearchInput = document.querySelector("#regionSearchInput");
const provinceList = document.querySelector("#provinceList");
const cityList = document.querySelector("#cityList");
const districtList = document.querySelector("#districtList");
const regionSearchResults = document.querySelector("#regionSearchResults");

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

function inSelectedRegion(record) {
  return selectedRegion === "全部地区" || record.region === selectedRegion;
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
    .filter((record) => inSelectedRegion(record) && inSelectedRange(record))
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
  button.classList.toggle("is-sortable", sortingGroup === groupName && canDrag);
  button.type = "button";
  button.dataset.brand = brand;
  button.dataset.group = groupName;
  button.dataset.canDrag = String(canDrag);
  button.innerHTML = `
    <span class="brand-name">${brand}</span>
    <span class="brand-count">${countRecords({ brand, range: "today" })}</span>
  `;

  button.addEventListener("pointerdown", (event) => {
    longPressTriggered = false;
    button.setPointerCapture?.(event.pointerId);

    if (sortingGroup === groupName && canDrag) {
      startFloatingDrag(button, groupName, event);
      return;
    }

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
    const wasDragging = Boolean(dragState?.active);

    if (wasDragging) {
      finishFloatingDrag();
      return;
    }

    button.classList.remove("is-dragging");
    dragState = null;
    longPressTriggered = false;
    if (wasLongPress) {
      return;
    }
    if (sortingGroup) return;
    addRecord(brand, button);
  });

  button.addEventListener("pointercancel", () => {
    clearLongPressTimer();
    cancelFloatingDrag();
  });
  button.addEventListener("contextmenu", (event) => event.preventDefault());

  return button;
}

function clearLongPressTimer() {
  window.clearTimeout(longPressTimer);
  longPressTimer = null;
}

function startFloatingDrag(button, groupName, event) {
  const rect = button.getBoundingClientRect();
  const clone = button.cloneNode(true);
  const placeholder = document.createElement("div");

  placeholder.className = "brand-placeholder";
  placeholder.style.width = `${rect.width}px`;
  placeholder.style.height = `${rect.height}px`;

  clone.classList.add("drag-clone");
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.left = "0";
  clone.style.top = "0";

  button.parentElement.insertBefore(placeholder, button);
  button.classList.add("drag-source");
  document.body.append(clone);

  dragState = {
    active: true,
    button,
    clone,
    placeholder,
    groupName,
    grid: button.parentElement,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };

  document.body.classList.add("is-sorting-drag");
  moveDragClone(event.clientX, event.clientY);
}

function updateFloatingDrag(event) {
  if (!dragState?.active) return;

  event.preventDefault();
  moveDragClone(event.clientX, event.clientY);

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".brand-button");
  if (!target || target === dragState.button || target.classList.contains("drag-clone")) return;
  if (target.dataset.group !== dragState.groupName || target.dataset.canDrag !== "true") return;

  const targetRect = target.getBoundingClientRect();
  const targetCenter = targetRect.top + targetRect.height / 2;
  const placeAfter = event.clientY > targetCenter;
  dragState.grid.insertBefore(dragState.placeholder, placeAfter ? target.nextSibling : target);
}

function moveDragClone(clientX, clientY) {
  if (!dragState?.clone) return;
  dragState.clone.style.transform = `translate3d(${clientX - dragState.offsetX}px, ${clientY - dragState.offsetY}px, 0)`;
}

function finishFloatingDrag() {
  if (!dragState?.active) return;

  const { button, clone, placeholder, grid, groupName } = dragState;
  grid.insertBefore(button, placeholder);
  button.classList.remove("drag-source", "is-dragging");
  placeholder.remove();
  clone.remove();
  saveGroupOrder(groupName, grid);
  document.body.classList.remove("is-sorting-drag");
  dragState = null;
  statusText.textContent = `${groupName}分组顺序已保存`;
}

function cancelFloatingDrag() {
  if (!dragState?.active) {
    dragState = null;
    return;
  }

  const { button, clone, placeholder } = dragState;
  button.classList.remove("drag-source", "is-dragging");
  placeholder.remove();
  clone.remove();
  document.body.classList.remove("is-sorting-drag");
  dragState = null;
}

function saveGroupOrder(groupName, grid) {
  if (!groupName || groupName === "常用" || !grid) return;
  brandOrders[groupName] = [...grid.querySelectorAll(".brand-button")].map((button) => button.dataset.brand);
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
  const ranking = buildRanking();
  const visible = ranking.filter((item) => item.count > 0);
  rankTitle.textContent = `${RANGE_LABELS[selectedRange]}排行榜`;
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

function updateRegionButtons() {
  allRegionButton.classList.toggle("is-active", selectedRegion === "全部地区");
}

function updateRangeButtons() {
  document.querySelectorAll("[data-range]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === selectedRange);
  });
}

function render() {
  currentRegion.textContent = formatRegion(selectedRegion);
  regionPickerText.textContent = formatRegion(selectedRegion === "全部地区" ? lastSpecificRegion : selectedRegion);
  todayCount.textContent = countRecords({ range: "today" });
  undoButton.disabled = records.length === 0;
  sortBar.hidden = !sortingGroup;
  sortBarText.textContent = sortingGroup ? `正在调整：${sortingGroup}` : "正在调整排序";
  updateRegionButtons();
  renderBrands();
  renderRanking();
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
  return regionName.replaceAll(" ", " · ");
}

function selectSpecificRegion(regionName) {
  selectedRegion = regionName;
  lastSpecificRegion = regionName;
  statusText.textContent = `当前地区：${formatRegion(regionName)}`;
  closeRegionDialog();
  render();
}

function openRegionDialog() {
  regionDialog.hidden = false;
  regionSearchInput.value = "";
  renderRegionColumns();
  renderRegionSearch();
}

function closeRegionDialog() {
  regionDialog.hidden = true;
}

function renderRegionColumns() {
  provinceList.innerHTML = "";
  cityList.innerHTML = "";
  districtList.innerHTML = "";

  REGION_TREE.forEach((province, index) => {
    const button = createRegionOption(province.province, index === selectedProvinceIndex);
    button.addEventListener("click", () => {
      selectedProvinceIndex = index;
      selectedCityIndex = 0;
      renderRegionColumns();
    });
    provinceList.append(button);
  });

  const province = REGION_TREE[selectedProvinceIndex];
  if (!province) return;

  province.cities.forEach((city, index) => {
    const button = createRegionOption(city.city, index === selectedCityIndex);
    button.addEventListener("click", () => {
      selectedCityIndex = index;
      renderRegionColumns();
    });
    cityList.append(button);
  });

  const city = province.cities[selectedCityIndex];
  if (!city) return;

  city.districts.forEach((district) => {
    const regionName = `${province.province} ${city.city} ${district}`;
    const button = createRegionOption(district, regionName === lastSpecificRegion);
    button.addEventListener("click", () => selectSpecificRegion(regionName));
    districtList.append(button);
  });
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
  collapsedGroups[sortingGroup] = false;
  saveCollapsedGroups();
  closeBrandMenu();
  statusText.textContent = `正在调整${sortingGroup}分组，拖动品牌改变位置`;
  render();
}

function stopSortMode() {
  if (sortingGroup) {
    const grid = [...document.querySelectorAll(".brand-group")].find((group) => group.dataset.group === sortingGroup)?.querySelector(".brand-grid");
    saveGroupOrder(sortingGroup, grid);
  }
  sortingGroup = null;
  dragState = null;
  statusText.textContent = "排序已完成";
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

document.querySelectorAll("[data-range]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRange = button.dataset.range;
    updateRangeButtons();
    renderRanking();
  });
});

undoButton.addEventListener("click", undoLastRecord);
exportButton.addEventListener("click", exportBackup);
importButton.addEventListener("click", () => importInput.click());
importInput.addEventListener("change", () => importBackup(importInput.files[0]));
brandSearchButton.addEventListener("click", locateBrand);
brandSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") locateBrand();
});
regionPickerButton.addEventListener("click", openRegionDialog);
allRegionButton.addEventListener("click", () => {
  selectedRegion = selectedRegion === "全部地区" ? lastSpecificRegion : "全部地区";
  statusText.textContent = `当前地区：${formatRegion(selectedRegion)}`;
  render();
});
regionCloseButton.addEventListener("click", closeRegionDialog);
regionSearchInput.addEventListener("input", renderRegionSearch);
regionDialog.addEventListener("click", (event) => {
  if (event.target === regionDialog) closeRegionDialog();
});
menuCloseButton.addEventListener("click", closeBrandMenu);
menuViewButton.addEventListener("click", () => activeBrand && openRecordDialog(activeBrand));
menuSortButton.addEventListener("click", startSortMode);
menuMinusButton.addEventListener("click", () => activeBrand && removeLatestBrandRecord(activeBrand));
sortDoneButton.addEventListener("click", stopSortMode);
brandMenu.addEventListener("click", (event) => {
  if (event.target === brandMenu) closeBrandMenu();
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
