const STORAGE_KEYS = {
  accounts: 'skinhouse:accounts:v3',
  active: 'skinhouse:active',
  cases: 'skinhouse:cases:v3',
  catalog: 'skinhouse:catalog:v1',
  live: 'skinhouse:live:v1',
  admin: 'skinhouse:admin-session',
};

const ADMIN_CREDENTIALS = {
  login: 'Admin',
  password: 'Lol123lol02',
};

const rarityColors = {
  consumer: '#9DA3AF',
  industrial: '#4CC3FF',
  milspec: '#4D7CFE',
  restricted: '#936BFF',
  classified: '#EA4C89',
  covert: '#F39C12',
  extraordinary: '#FF5454',
};

const DEFAULT_SKINS = [
  { id: 'ak47-wild-lotus', weapon: 'AK-47', name: 'Wild Lotus', rarity: 'covert', price: 134999, image: null },
  { id: 'ak47-head-shot', weapon: 'AK-47', name: 'Head Shot', rarity: 'classified', price: 21999, image: null },
  { id: 'ak47-asiimov', weapon: 'AK-47', name: 'Asiimov', rarity: 'classified', price: 15999, image: null },
  { id: 'ak47-redline', weapon: 'AK-47', name: 'Redline', rarity: 'restricted', price: 7999, image: null },
  { id: 'ak47-slate', weapon: 'AK-47', name: 'Slate', rarity: 'milspec', price: 2499, image: null },
  { id: 'ak47-ice-coaled', weapon: 'AK-47', name: 'Ice Coaled', rarity: 'restricted', price: 5699, image: null },
  { id: 'm4a4-temukau', weapon: 'M4A4', name: 'Temukau', rarity: 'covert', price: 11299, image: null },
  { id: 'm4a4-neo-noir', weapon: 'M4A4', name: 'Neo-Noir', rarity: 'classified', price: 10999, image: null },
  { id: 'm4a4-royal-paladin', weapon: 'M4A4', name: 'Royal Paladin', rarity: 'classified', price: 8999, image: null },
  { id: 'm4a4-asiimov', weapon: 'M4A4', name: 'Asiimov', rarity: 'classified', price: 9999, image: null },
  { id: 'm4a1s-imminent-danger', weapon: 'M4A1-S', name: 'Imminent Danger', rarity: 'covert', price: 74999, image: null },
  { id: 'm4a1s-printstream', weapon: 'M4A1-S', name: 'Printstream', rarity: 'covert', price: 24499, image: null },
  { id: 'm4a1s-nightmare', weapon: 'M4A1-S', name: 'Nightmare', rarity: 'restricted', price: 4599, image: null },
  { id: 'awp-desert-hydra', weapon: 'AWP', name: 'Desert Hydra', rarity: 'covert', price: 178999, image: null },
  { id: 'awp-dragon-lore', weapon: 'AWP', name: 'Dragon Lore', rarity: 'covert', price: 659999, image: null },
  { id: 'awp-chromatic-aberration', weapon: 'AWP', name: 'Chromatic Aberration', rarity: 'classified', price: 14999, image: null },
  { id: 'awp-asiimov', weapon: 'AWP', name: 'Asiimov', rarity: 'covert', price: 18999, image: null },
  { id: 'awp-neo-noir', weapon: 'AWP', name: 'Neo-Noir', rarity: 'classified', price: 12999, image: null },
  { id: 'usp-printstream', weapon: 'USP-S', name: 'Printstream', rarity: 'covert', price: 15499, image: null },
  { id: 'usp-monster-mashup', weapon: 'USP-S', name: 'Monster Mashup', rarity: 'restricted', price: 4999, image: null },
  { id: 'usp-purple-ddpat', weapon: 'USP-S', name: 'Purple DDPAT', rarity: 'restricted', price: 3699, image: null },
  { id: 'glock-water-elemental', weapon: 'Glock-18', name: 'Water Elemental', rarity: 'restricted', price: 2999, image: null },
  { id: 'glock-neo-noir', weapon: 'Glock-18', name: 'Neo-Noir', rarity: 'classified', price: 6399, image: null },
  { id: 'glock-oxidized-copper', weapon: 'Glock-18', name: 'Oxide Blaze', rarity: 'industrial', price: 799, image: null },
  { id: 'deagle-printstream', weapon: 'Desert Eagle', name: 'Printstream', rarity: 'covert', price: 19999, image: null },
  { id: 'deagle-fennec-fox', weapon: 'Desert Eagle', name: 'Fennec Fox', rarity: 'covert', price: 32999, image: null },
  { id: 'deagle-code-red', weapon: 'Desert Eagle', name: 'Code Red', rarity: 'classified', price: 8499, image: null },
  { id: 'knife-karambit-doppler', weapon: 'Karambit', name: 'Doppler', rarity: 'extraordinary', price: 189999, image: null },
  { id: 'knife-bayonet-fade', weapon: 'Bayonet', name: 'Fade', rarity: 'extraordinary', price: 87999, image: null },
  { id: 'knife-butterfly-slaughter', weapon: 'Butterfly', name: 'Slaughter', rarity: 'extraordinary', price: 129999, image: null },
  { id: 'smg-orochi', weapon: 'MP9', name: 'Mount Fuji', rarity: 'restricted', price: 2899, image: null },
  { id: 'smg-biotox', weapon: 'MP7', name: 'Bloodsport', rarity: 'classified', price: 4499, image: null },
  { id: 'p90-shallow-grave', weapon: 'P90', name: 'Shallow Grave', rarity: 'classified', price: 3799, image: null },
  { id: 'famas-mecha', weapon: 'FAMAS', name: 'Mecha Industries', rarity: 'classified', price: 3299, image: null },
  { id: 'sg553-integral', weapon: 'SG 553', name: 'Integral', rarity: 'classified', price: 4199, image: null },
  { id: 'aug-stymphalian', weapon: 'AUG', name: 'Stymphalian', rarity: 'classified', price: 3399, image: null },
  { id: 'mac10-disco-tech', weapon: 'MAC-10', name: 'Disco Tech', rarity: 'classified', price: 2299, image: null },
];

const DEFAULT_CASES = [
  {
    id: 'quantum',
    name: 'Quantum Flux',
    tag: 'Эксклюзив',
    description: 'Яркий микс ковертного и таинственного дропа c акцентом на AWP и ножи.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60',
    price: 299,
    xp: 40,
    frequency: 'balanced',
    drops: [
      { skinId: 'awp-desert-hydra', weight: 1 },
      { skinId: 'knife-karambit-doppler', weight: 0.5 },
      { skinId: 'awp-dragon-lore', weight: 0.3 },
      { skinId: 'awp-asiimov', weight: 4 },
      { skinId: 'awp-neo-noir', weight: 6 },
      { skinId: 'usp-printstream', weight: 7 },
      { skinId: 'deagle-printstream', weight: 5 },
      { skinId: 'glock-neo-noir', weight: 10 },
      { skinId: 'm4a1s-printstream', weight: 4 },
    ],
  },
  {
    id: 'pulse',
    name: 'Neon Pulse',
    tag: 'Хит',
    description: 'Неоновые паттерны и популярные коллекции для M4 и AK.',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=600&q=60',
    price: 149,
    xp: 25,
    frequency: 'fast',
    drops: [
      { skinId: 'ak47-head-shot', weight: 3 },
      { skinId: 'ak47-asiimov', weight: 5 },
      { skinId: 'ak47-ice-coaled', weight: 9 },
      { skinId: 'm4a4-temukau', weight: 4 },
      { skinId: 'm4a4-neo-noir', weight: 7 },
      { skinId: 'm4a4-asiimov', weight: 6 },
      { skinId: 'm4a1s-nightmare', weight: 9 },
      { skinId: 'usp-monster-mashup', weight: 11 },
      { skinId: 'glock-water-elemental', weight: 12 },
      { skinId: 'smg-biotox', weight: 9 },
    ],
  },
  {
    id: 'lotus',
    name: 'Lotus Bloom',
    tag: 'Премиум',
    description: 'Коллекция редких Skinbox-стайл скинов и ножей.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=60',
    price: 499,
    xp: 60,
    frequency: 'rare',
    drops: [
      { skinId: 'ak47-wild-lotus', weight: 0.8 },
      { skinId: 'knife-bayonet-fade', weight: 0.6 },
      { skinId: 'knife-butterfly-slaughter', weight: 0.4 },
      { skinId: 'awp-dragon-lore', weight: 0.2 },
      { skinId: 'm4a1s-imminent-danger', weight: 0.9 },
      { skinId: 'deagle-fennec-fox', weight: 1.5 },
      { skinId: 'deagle-printstream', weight: 2.5 },
      { skinId: 'usp-printstream', weight: 3 },
      { skinId: 'ak47-redline', weight: 10 },
      { skinId: 'p90-shallow-grave', weight: 9 },
    ],
  },
  {
    id: 'spectrum',
    name: 'Spectrum Rush',
    tag: 'Коллекция',
    description: 'Сбалансированный микс ковертных и restricted скинов из актуальных кейсов.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=60',
    price: 99,
    xp: 15,
    frequency: 'fast',
    drops: [
      { skinId: 'ak47-slate', weight: 12 },
      { skinId: 'ak47-ice-coaled', weight: 8 },
      { skinId: 'm4a4-royal-paladin', weight: 4 },
      { skinId: 'm4a4-neo-noir', weight: 6 },
      { skinId: 'usp-purple-ddpat', weight: 14 },
      { skinId: 'glock-oxidized-copper', weight: 20 },
      { skinId: 'smg-orochi', weight: 10 },
      { skinId: 'mac10-disco-tech', weight: 9 },
      { skinId: 'aug-stymphalian', weight: 5 },
      { skinId: 'famas-mecha', weight: 4 },
    ],
  },
  {
    id: 'carbon',
    name: 'Carbon Edge',
    tag: 'Новый',
    description: 'Всё, что нужно для апгрейдов: популярные mid-tier скины.',
    image: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=600&q=60',
    price: 59,
    xp: 10,
    frequency: 'fast',
    drops: [
      { skinId: 'glock-water-elemental', weight: 11 },
      { skinId: 'glock-neo-noir', weight: 8 },
      { skinId: 'usp-monster-mashup', weight: 11 },
      { skinId: 'usp-purple-ddpat', weight: 9 },
      { skinId: 'smg-orochi', weight: 15 },
      { skinId: 'mac10-disco-tech', weight: 14 },
      { skinId: 'p90-shallow-grave', weight: 6 },
      { skinId: 'sg553-integral', weight: 5 },
      { skinId: 'aug-stymphalian', weight: 7 },
      { skinId: 'famas-mecha', weight: 9 },
    ],
  },
];

const DEFAULT_GIVEAWAYS = [
  { id: 'hourly', title: 'Каждый час', skin: 'AK-47 | Slate', value: 2499, duration: 3600 },
  { id: 'daily', title: 'Каждый день', skin: 'AWP | Neo-Noir', value: 12999, duration: 86400 },
  { id: 'weekly', title: 'Каждую неделю', skin: 'Karambit | Doppler', value: 189999, duration: 604800 },
  { id: 'monthly', title: 'Раз в месяц', skin: 'AWP | Desert Hydra', value: 178999, duration: 2592000 },
];

const UPGRADE_TARGETS = [
  { id: 'target-1', name: 'USP-S | Printstream', price: 15499 },
  { id: 'target-2', name: 'M4A1-S | Imminent Danger', price: 74999 },
  { id: 'target-3', name: 'Karambit | Doppler', price: 189999 },
  { id: 'target-4', name: 'AWP | Dragon Lore', price: 659999 },
];

const liveNames = ['nox', 's1mple', 'ropz', 'zorte', 'denzed', 'stalker', 'arizona', 'm0NESY', 'flamie'];

const methodLabels = {
  card: 'банковскую карту',
  qiwi: 'QIWI',
  crypto: 'криптовалюту',
};

const upgradeState = {
  selectedItem: null,
  targetItem: null,
};

const frequencyLabels = {
  fast: 'Частый дроп',
  rare: 'Редкий',
  balanced: 'Сбалансированный',
};

const pageId = document.body.dataset.page || 'cases';
const randomId = () => (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));

function getGuestState() {
  return {
    id: 'guest',
    name: 'Гость',
    password: '',
    steamLinked: false,
    steamProfile: null,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=guest',
    xp: 0,
    level: 1,
    casesOpened: 0,
    balance: 0,
    upgradesWon: 0,
    inventory: [],
    giveaways: {},
    depositHistory: [],
    tradeCode: '-----',
    lastLogin: Date.now(),
  };
}

let catalog = loadCatalog();
let casePool = loadCases();
let accounts = loadAccounts();
let currentAccountId = window.localStorage.getItem(STORAGE_KEYS.active);

if (!currentAccountId || !accounts[currentAccountId]) {
  const seeded = createAccountPayload({
    name: 'demo',
    password: 'demo',
    steam: null,
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
  });
  accounts[seeded.id] = seeded;
  currentAccountId = seeded.id;
  persistAccounts();
}

let userState = currentAccountId ? accounts[currentAccountId] : getGuestState();
let liveDrops = loadLiveFeed();

function loadCatalog() {
  const raw = localStorage.getItem(STORAGE_KEYS.catalog);
  if (!raw) return DEFAULT_SKINS.map(enrichSkinImage);
  try {
    const parsed = JSON.parse(raw);
    return parsed.map(enrichSkinImage);
  } catch (err) {
    console.error('catalog load', err);
    return DEFAULT_SKINS.map(enrichSkinImage);
  }
}

function loadCases() {
  const raw = localStorage.getItem(STORAGE_KEYS.cases);
  if (!raw) return DEFAULT_CASES;
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error('cases load', err);
    return DEFAULT_CASES;
  }
}

function loadAccounts() {
  const raw = localStorage.getItem(STORAGE_KEYS.accounts);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    Object.keys(parsed).forEach((key) => {
      parsed[key] = normalizeAccount(parsed[key]);
    });
    return parsed;
  } catch (err) {
    console.error('accounts load', err);
    return {};
  }
}

function loadLiveFeed() {
  const raw = localStorage.getItem(STORAGE_KEYS.live);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error('live feed load', err);
    return [];
  }
}

function persistCatalog() {
  localStorage.setItem(STORAGE_KEYS.catalog, JSON.stringify(catalog));
}

function persistCases() {
  localStorage.setItem(STORAGE_KEYS.cases, JSON.stringify(casePool));
}

function persistAccounts() {
  localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
  if (currentAccountId) {
    localStorage.setItem(STORAGE_KEYS.active, currentAccountId);
  } else {
    localStorage.removeItem(STORAGE_KEYS.active);
  }
}

function persistLiveFeed() {
  localStorage.setItem(STORAGE_KEYS.live, JSON.stringify(liveDrops.slice(0, 40)));
}

function createAccountPayload({ name, password, steam, avatar }) {
  return {
    id: randomId(),
    name,
    password,
    steamProfile: steam?.profile || null,
    steamLinked: Boolean(steam),
    avatar: avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(name)}`,
    xp: 0,
    level: 1,
    casesOpened: 0,
    balance: 0,
    upgradesWon: 0,
    inventory: [],
    giveaways: {},
    depositHistory: [],
    tradeCode: Math.floor(10000 + Math.random() * 90000),
    lastLogin: Date.now(),
  };
}

function normalizeAccount(payload) {
  return {
    ...createAccountPayload({
      name: payload?.name || 'player',
      password: payload?.password || 'pass',
      steam: payload?.steamLinked ? { profile: payload?.steamProfile } : null,
      avatar: payload?.avatar,
    }),
    ...payload,
    inventory: Array.isArray(payload?.inventory) ? payload.inventory : [],
    depositHistory: Array.isArray(payload?.depositHistory) ? payload.depositHistory : [],
    giveaways: payload?.giveaways || {},
  };
}

function enrichSkinImage(skin) {
  if (skin.image) return skin;
  const color = rarityColors[skin.rarity] || '#ffffff';
  const svg = encodeURIComponent(`<?xml version='1.0' encoding='UTF-8'?>
    <svg xmlns='http://www.w3.org/2000/svg' width='420' height='180'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='${color}' stop-opacity='0.2'/>
          <stop offset='100%' stop-color='${color}' stop-opacity='0.65'/>
        </linearGradient>
      </defs>
      <rect width='420' height='180' rx='24' fill='#11131a'/>
      <rect x='10' y='10' width='400' height='160' rx='18' fill='url(#g)'/>
      <text x='50%' y='55%' font-size='36' fill='white' text-anchor='middle' font-family='Manrope'>${skin.weapon}</text>
      <text x='50%' y='75%' font-size='24' fill='white' text-anchor='middle' font-family='Manrope'>${skin.name}</text>
    </svg>`);
  return { ...skin, image: `data:image/svg+xml,${svg}` };
}

function toast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const item = document.createElement('div');
  item.className = `toast ${type}`;
  item.textContent = message;
  container.appendChild(item);
  setTimeout(() => item.classList.add('show'));
  setTimeout(() => {
    item.classList.remove('show');
    setTimeout(() => item.remove(), 300);
  }, 3500);
}

function closeModal(modal) {
  modal?.setAttribute('aria-hidden', 'true');
}

function openModal(modal) {
  modal?.setAttribute('aria-hidden', 'false');
}

function formatCurrency(value) {
  return `₽${value.toFixed(2)}`;
}

function getSkinById(id) {
  return catalog.find((skin) => skin.id === id);
}

function getCaseById(id) {
  return casePool.find((cs) => cs.id === id);
}

function setActiveAccount(id) {
  if (!accounts[id]) return;
  currentAccountId = id;
  userState = accounts[id];
  userState.lastLogin = Date.now();
  persistAccounts();
  renderAccountInfo();
  renderAccountList();
  refreshPageData();
}

function renderAccountInfo() {
  const headerUser = document.getElementById('headerUser');
  const userExp = document.getElementById('userExp');
  const headerBalance = document.getElementById('headerBalance');
  const headerAvatar = document.getElementById('headerAvatar');
  const casesOpened = document.getElementById('casesOpened');
  const userLevel = document.getElementById('userLevel');
  const nextLevel = document.getElementById('nextLevel');
  const expProgress = document.getElementById('expProgress');

  if (headerUser) headerUser.textContent = userState.name;
  if (userExp) userExp.textContent = `${userState.xp} XP`;
  if (headerBalance) headerBalance.textContent = formatCurrency(userState.balance);
  if (headerAvatar) headerAvatar.src = userState.avatar;
  if (casesOpened) casesOpened.textContent = userState.casesOpened;
  if (userLevel) userLevel.textContent = userState.level;
  if (nextLevel) nextLevel.textContent = `${Math.max(0, userState.level * 100 - userState.xp)} XP`;
  if (expProgress) {
    const xpIntoLevel = userState.xp % 100;
    const progress = Math.min(100, (xpIntoLevel / 100) * 100);
    expProgress.style.width = `${progress}%`;
  }
}

function updateInventoryStats() {
  const profileBalance = document.getElementById('profileBalance');
  const profileXp = document.getElementById('profileXp');
  const profileCases = document.getElementById('profileCases');
  const profileUpgrades = document.getElementById('profileUpgrades');
  const profileName = document.getElementById('profileName');
  const profileId = document.getElementById('profileId');

  if (profileName) profileName.textContent = userState.name;
  if (profileId) profileId.textContent = userState.tradeCode;
  if (profileBalance) profileBalance.textContent = formatCurrency(userState.balance);
  if (profileXp) profileXp.textContent = userState.xp;
  if (profileCases) profileCases.textContent = userState.casesOpened;
  if (profileUpgrades) profileUpgrades.textContent = userState.upgradesWon;
}

function openAccountModal() {
  const modal = document.getElementById('accountModal');
  openModal(modal);
  renderAccountList();
}

function renderAccountList() {
  const container = document.getElementById('accountList');
  if (!container) return;
  const entries = Object.values(accounts);
  if (!entries.length) {
    container.innerHTML = '<p class="muted">Аккаунтов пока нет</p>';
    return;
  }
  container.innerHTML = entries
    .map(
      (acc) => `
      <button data-account="${acc.id}" class="account-row ${acc.id === currentAccountId ? 'active' : ''}">
        <img src="${acc.avatar}" alt="${acc.name}" />
        <div>
          <strong>${acc.name}</strong>
          <small>${acc.xp} XP</small>
        </div>
        <span>${formatCurrency(acc.balance)}</span>
      </button>
    `,
    )
    .join('');
  container.querySelectorAll('[data-account]').forEach((btn) => {
    btn.addEventListener('click', () => setActiveAccount(btn.dataset.account));
  });
}

function login(name, password) {
  const target = Object.values(accounts).find(
    (acc) => acc.name.toLowerCase() === name.trim().toLowerCase() && acc.password === password,
  );
  if (!target) {
    toast('Неверные данные', 'error');
    return;
  }
  setActiveAccount(target.id);
  toast(`Вошли как ${target.name}`);
  closeModal(document.getElementById('accountModal'));
}

function register(name, password) {
  if (Object.values(accounts).some((acc) => acc.name.toLowerCase() === name.trim().toLowerCase())) {
    toast('Никнейм уже занят', 'error');
    return;
  }
  const payload = createAccountPayload({ name, password });
  accounts[payload.id] = payload;
  persistAccounts();
  toast('Аккаунт создан', 'success');
  renderAccountList();
}

function steamAuth(profile, nick) {
  const cleaned = profile.trim();
  if (!cleaned) {
    toast('Укажите ссылку на Steam', 'error');
    return;
  }
  const payload = createAccountPayload({
    name: nick,
    password: randomId(),
    steam: { profile: cleaned },
    avatar: `https://avatars.cloudflare.steamstatic.com/${Math.floor(Math.random() * 1e16)}_full.jpg`,
  });
  accounts[payload.id] = payload;
  persistAccounts();
  setActiveAccount(payload.id);
  toast('Steam аккаунт привязан', 'success');
  closeModal(document.getElementById('accountModal'));
}

function logout() {
  closeModal(document.getElementById('accountModal'));
  currentAccountId = null;
  userState = getGuestState();
  persistAccounts();
  renderAccountInfo();
  refreshPageData();
  toast('Вы вышли из аккаунта');
  openAccountModal();
}

function handleDeposit(amount, method) {
  if (!requireAuth()) return;
  if (Number.isNaN(amount) || amount <= 0) {
    toast('Введите сумму', 'error');
    return;
  }
  userState.balance += amount;
  userState.depositHistory.push({ id: randomId(), amount, method, date: Date.now() });
  persistAccounts();
  renderAccountInfo();
  updateInventoryStats();
  toast(`Баланс пополнен на ${formatCurrency(amount)} через ${methodLabels[method] || 'способ'}`, 'success');
}

function ensureBalance(cost) {
  if (!requireAuth()) return false;
  if (userState.balance < cost) {
    toast('Недостаточно баланса', 'error');
    return false;
  }
  return true;
}

function addInventoryItem(skin, sourceCase) {
  const item = {
    id: randomId(),
    skinId: skin.id,
    name: `${skin.weapon} | ${skin.name}`,
    price: skin.price,
    image: skin.image,
    rarity: skin.rarity,
    status: 'available',
    caseId: sourceCase.id,
    obtainedAt: Date.now(),
  };
  userState.inventory.unshift(item);
  persistAccounts();
  updateInventoryStats();
}

function buildLiveEntry({ account, skin, caseData }) {
  const username = account?.name || liveNames[Math.floor(Math.random() * liveNames.length)];
  const entry = {
    id: randomId(),
    user: username,
    skin: `${skin.weapon} | ${skin.name}`,
    rarity: skin.rarity,
    caseName: caseData.name,
    image: skin.image,
    price: skin.price,
    timestamp: Date.now(),
  };
  liveDrops.unshift(entry);
  liveDrops = liveDrops.slice(0, 40);
  persistLiveFeed();
  renderLiveFeed();
}

function rollCase(caseData) {
  const wheel = [];
  caseData.drops.forEach((drop) => {
    const skin = getSkinById(drop.skinId);
    if (!skin) return;
    for (let i = 0; i < Math.max(1, Math.round(drop.weight * 10)); i += 1) {
      wheel.push(skin);
    }
  });
  const winner = wheel[Math.floor(Math.random() * wheel.length)];
  return winner;
}

function openCase(caseData) {
  if (!caseData || !ensureBalance(caseData.price)) return;
  userState.balance -= caseData.price;
  userState.casesOpened += 1;
  userState.xp += caseData.xp;
  const newLevel = Math.floor(userState.xp / 100) + 1;
  if (newLevel > userState.level) {
    userState.level = newLevel;
    toast(`Поздравляем! Новый уровень: ${userState.level}`, 'success');
  }
  const drop = rollCase(caseData);
  addInventoryItem(drop, caseData);
  buildLiveEntry({ account: userState, skin: drop, caseData });
  persistAccounts();
  renderAccountInfo();
  runSpinnerAnimation(caseData, drop);
}

function buildSpinPool(caseData, winner) {
  const pool = [];
  const entries = caseData.drops.flatMap((drop) => {
    const skin = getSkinById(drop.skinId);
    if (!skin) return [];
    return new Array(2).fill({ skin, weight: drop.weight });
  });
  const filler = entries.sort(() => Math.random() - 0.5);
  while (pool.length < 80) {
    filler.forEach((entry) => pool.push(entry.skin));
  }
  pool.splice(Math.floor(pool.length / 2), 0, winner);
  return pool;
}

function runSpinnerAnimation(caseData, drop) {
  const spinner = document.getElementById('caseSpinner');
  const track = document.getElementById('spinnerTrack');
  const result = document.getElementById('spinnerResult');
  if (!spinner || !track || !result) return;
  track.innerHTML = '';
  const pool = buildSpinPool(caseData, drop);
  pool.forEach((skin) => {
    const item = document.createElement('div');
    item.className = `spinner-item rarity-${skin.rarity}`;
    item.innerHTML = `
      <img src="${skin.image}" alt="${skin.weapon}" />
      <p>${skin.weapon}<br><span>${skin.name}</span></p>
    `;
    track.appendChild(item);
  });
  spinner.setAttribute('aria-hidden', 'false');
  track.style.transition = 'none';
  track.style.transform = 'translateX(0)';
  requestAnimationFrame(() => {
    const targetIndex = pool.length - 10;
    const offset = -targetIndex * 180 + Math.random() * -60;
    track.style.transition = 'transform 5.5s cubic-bezier(0.12, 0.01, 0.18, 0.99)';
    track.style.transform = `translateX(${offset}px)`;
  });
  setTimeout(() => {
    result.innerHTML = `
      <h3>Выпал предмет</h3>
      <p>${drop.weapon} | ${drop.name}</p>
      <strong>${formatCurrency(drop.price)}</strong>
      <button class="btn secondary" data-close-spinner>Забрать</button>
    `;
    result.querySelector('[data-close-spinner]').addEventListener('click', () => {
      spinner.setAttribute('aria-hidden', 'true');
    });
  }, 5600);
}

function renderCases() {
  const container = document.getElementById('caseGrid');
  if (!container) return;
  container.innerHTML = casePool
    .map(
      (item) => `
      <article class="case-card" style="--accent:${rarityColors.covert}">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <p class="eyebrow">${item.tag}</p>
          <h3>${item.name}</h3>
          <p class="muted">${item.description}</p>
          <div class="case-meta-line">
            <span>${formatCurrency(item.price)}</span>
            <span>${item.xp} XP</span>
          </div>
          <div class="case-actions">
            <button class="btn secondary" data-case="${item.id}" data-action="open">Открыть</button>
            <a class="btn ghost" href="case.html?id=${item.id}">Подробнее</a>
          </div>
        </div>
      </article>
    `,
    )
    .join('');
  container.querySelectorAll('[data-action="open"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const caseData = getCaseById(btn.dataset.case);
      openCase(caseData);
    });
  });
}

function renderLiveFeed() {
  const feed = document.getElementById('liveFeed');
  if (!feed) return;
  if (!liveDrops.length) {
    feed.innerHTML = '<p class="muted">Нет данных</p>';
    return;
  }
  feed.innerHTML = liveDrops
    .map(
      (entry) => `
      <div class="live-row rarity-${entry.rarity}">
        <img src="${entry.image}" alt="${entry.skin}" />
        <div>
          <p><strong>${entry.user}</strong> выбил ${entry.skin}</p>
          <small>${entry.caseName}</small>
        </div>
        <span>${formatCurrency(entry.price)}</span>
      </div>
    `,
    )
    .join('');
}

function renderGiveaways() {
  const grid = document.getElementById('giveawayGrid');
  const log = document.getElementById('winnersLog');
  if (!grid) return;
  grid.innerHTML = DEFAULT_GIVEAWAYS.map((item) => `
    <article class="giveaway-card" data-giveaway="${item.id}">
      <p class="eyebrow">${item.title}</p>
      <h3>${item.skin}</h3>
      <p class="muted">Стоимость ${formatCurrency(item.value)}</p>
      <p class="countdown" data-countdown="${item.duration}"></p>
      <button class="btn primary" data-action="join" data-giveaway="${item.id}">Участвовать</button>
    </article>
  `).join('');
  if (log) log.innerHTML = '<h3>Победители появятся здесь</h3>';
  grid.querySelectorAll('[data-action="join"]').forEach((btn) => {
    btn.addEventListener('click', () => joinGiveaway(btn.dataset.giveaway));
  });
  startCountdowns();
}

function joinGiveaway(id) {
  if (!requireAuth()) return;
  userState.giveaways[id] = Date.now();
  persistAccounts();
  toast('Вы участвуете в розыгрыше', 'success');
}

function startCountdowns() {
  document.querySelectorAll('[data-countdown]').forEach((el) => {
    const base = Number(el.dataset.countdown);
    const start = Date.now();
    const tick = () => {
      const delta = base - Math.floor((Date.now() - start) / 1000);
      if (delta <= 0) {
        el.textContent = 'Завершён';
        return;
      }
      const h = Math.floor(delta / 3600);
      const m = Math.floor((delta % 3600) / 60);
      const s = delta % 60;
      el.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function renderLeaderboard() {
  const container = document.getElementById('leaderboardList');
  if (!container) return;
  const data = Object.values(accounts)
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 20);
  container.innerHTML = data
    .map(
      (entry, index) => `
      <div class="leaderboard-row">
        <span>#${index + 1}</span>
        <div>
          <strong>${entry.name}</strong>
          <small>${entry.casesOpened} кейсов</small>
        </div>
        <strong>${entry.xp} XP</strong>
      </div>
    `,
    )
    .join('');
  const rank = data.findIndex((acc) => acc.id === userState.id);
  const lbRank = document.getElementById('lbRank');
  const lbLevel = document.getElementById('lbLevel');
  const lbXp = document.getElementById('lbXp');
  if (lbRank) lbRank.textContent = rank >= 0 ? `#${rank + 1}` : '—';
  if (lbLevel) lbLevel.textContent = userState.level;
  if (lbXp) lbXp.textContent = `${userState.xp} XP`;
}

function renderInventory(filter = 'all') {
  const grid = document.getElementById('profileInventory');
  if (!grid) return;
  const items = userState.inventory.filter((item) => (filter === 'all' ? true : item.status === filter));
  if (!items.length) {
    grid.innerHTML = '<p class="muted">Пока пусто</p>';
    return;
  }
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="skin-card rarity-${item.rarity}">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>Из кейса: ${getCaseById(item.caseId)?.name || '—'}</p>
        </div>
        <strong>${formatCurrency(item.price)}</strong>
      </article>
    `,
    )
    .join('');
}

function renderUpgradeInventory() {
  const container = document.getElementById('upgradeInventory');
  if (!container) return;
  const items = userState.inventory.filter((item) => item.status === 'available');
  container.innerHTML = items
    .map(
      (item) => `
      <button class="skin-chip rarity-${item.rarity}" data-upgrade-item="${item.id}">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <p>${item.name}</p>
          <small>${formatCurrency(item.price)}</small>
        </div>
      </button>
    `,
    )
    .join('');
}

function renderUpgradePool() {
  const pool = document.getElementById('upgradePool');
  if (!pool) return;
  pool.innerHTML = UPGRADE_TARGETS.map((target) => `
    <button class="skin-chip" data-upgrade-target="${target.id}">
      <p>${target.name}</p>
      <small>${formatCurrency(target.price)}</small>
    </button>
  `).join('');
}

function runUpgradeSimulation(selectedItem, target, chance) {
  const wheel = document.getElementById('wheel');
  const status = document.getElementById('upgradeStatus');
  if (!wheel || !status) return;
  wheel.classList.remove('win', 'lose');
  wheel.style.setProperty('--chance', `${chance}%`);
  const success = Math.random() * 100 <= chance;
  status.textContent = success ? 'Успех! Предмет улучшен' : 'Неудача, предмет сгорел';
  status.className = `upgrade-status ${success ? 'success' : 'fail'}`;
  if (success) {
    userState.upgradesWon += 1;
    selectedItem.status = 'upgraded';
    addInventoryItem({ ...target, id: target.id, weapon: target.name.split('|')[0].trim(), name: target.name.split('|')[1]?.trim() || '' }, { id: 'upgrade', name: 'Апгрейд', xp: 0 });
  } else {
    selectedItem.status = 'sold';
  }
  persistAccounts();
  renderInventory('all');
}

function initUpgradeModule() {
  const chanceRange = document.getElementById('chanceRange');
  const chanceValue = document.getElementById('chanceValue');
  const upgradeBtn = document.getElementById('upgradeBtn');
  const upgradeSelected = document.getElementById('upgradeSelected');
  const upgradeTarget = document.getElementById('upgradeTarget');
  const inventoryContainer = document.getElementById('upgradeInventory');
  const poolContainer = document.getElementById('upgradePool');

  if (!chanceRange) return;
  renderUpgradePool();

  const updateSelectedLabels = () => {
    upgradeSelected.textContent = upgradeState.selectedItem?.name || 'Не выбран';
    upgradeTarget.textContent = upgradeState.targetItem?.name || '—';
    upgradeBtn.disabled = !(upgradeState.selectedItem && upgradeState.targetItem);
  };

  inventoryContainer?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-upgrade-item]');
    if (!target) return;
    upgradeState.selectedItem = userState.inventory.find((item) => item.id === target.dataset.upgradeItem);
    updateSelectedLabels();
  });

  poolContainer?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-upgrade-target]');
    if (!target) return;
    upgradeState.targetItem = UPGRADE_TARGETS.find((t) => t.id === target.dataset.upgradeTarget);
    updateSelectedLabels();
  });

  chanceRange.addEventListener('input', () => {
    chanceValue.textContent = `${chanceRange.value}%`;
  });

  upgradeBtn.addEventListener('click', () => {
    if (!(upgradeState.selectedItem && upgradeState.targetItem)) return;
    runUpgradeSimulation(upgradeState.selectedItem, upgradeState.targetItem, Number(chanceRange.value));
    upgradeState.selectedItem = null;
    upgradeState.targetItem = null;
    renderUpgradeInventory();
    updateSelectedLabels();
  });

  updateSelectedLabels();
}

function initCaseDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const caseId = params.get('id');
  const caseData = getCaseById(caseId);
  if (!caseData) {
    toast('Кейс не найден', 'error');
    return;
  }
  document.getElementById('caseName').textContent = caseData.name;
  document.getElementById('caseTag').textContent = caseData.tag;
  document.getElementById('caseDescription').textContent = caseData.description;
  document.getElementById('casePrice').textContent = formatCurrency(caseData.price);
  document.getElementById('caseXp').textContent = `${caseData.xp} XP`;
  document.getElementById('caseFrequency').textContent = frequencyLabels[caseData.frequency] || caseData.frequency;
  document.getElementById('casePreview').innerHTML = `<img src="${caseData.image}" alt="${caseData.name}" />`;
  const openBtn = document.getElementById('openCaseBtn');
  openBtn.disabled = false;
  openBtn.addEventListener('click', () => openCase(caseData));
  renderCaseDrop(caseData);
  const search = document.getElementById('dropSearch');
  if (search) {
    search.addEventListener('input', () => renderCaseDrop(caseData, search.value));
  }
}

function renderCaseDrop(caseData, filter = '') {
  const grid = document.getElementById('dropGrid');
  if (!grid) return;
  const normalized = caseData.drops
    .map((drop) => ({ ...drop, skin: getSkinById(drop.skinId) }))
    .filter((item) => item.skin)
    .filter((item) => item.skin.name.toLowerCase().includes(filter.toLowerCase()));
  grid.innerHTML = normalized
    .map(
      ({ skin, weight }) => `
      <article class="drop-card rarity-${skin.rarity}">
        <img src="${skin.image}" alt="${skin.name}" />
        <div>
          <p>${skin.weapon} | ${skin.name}</p>
          <small>Вес: ${weight}%</small>
        </div>
        <strong>${formatCurrency(skin.price)}</strong>
      </article>
    `,
    )
    .join('');
}

function simulateLiveDrop() {
  const caseData = casePool[Math.floor(Math.random() * casePool.length)];
  const drop = rollCase(caseData);
  buildLiveEntry({ account: null, skin: drop, caseData });
}

function initAdminPage() {
  const loginCard = document.getElementById('adminLogin');
  const dashboard = document.getElementById('adminDashboard');
  const loginForm = document.getElementById('adminLoginForm');
  const adminCaseSelect = document.getElementById('adminCaseSelect');
  const adminCaseName = document.getElementById('adminCaseName');
  const adminCasePrice = document.getElementById('adminCasePrice');
  const adminCaseXp = document.getElementById('adminCaseXp');
  const adminCaseFrequency = document.getElementById('adminCaseFrequency');
  const adminCaseDescription = document.getElementById('adminCaseDescription');
  const adminDropList = document.getElementById('adminDropList');

  const sessionActive = localStorage.getItem(STORAGE_KEYS.admin) === '1';
  if (sessionActive) {
    loginCard.classList.add('hidden');
    dashboard.classList.remove('hidden');
    populateAdminCaseSelect();
  }

  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginValue = document.getElementById('adminLoginInput').value;
    const passwordValue = document.getElementById('adminPasswordInput').value;
    if (loginValue === ADMIN_CREDENTIALS.login && passwordValue === ADMIN_CREDENTIALS.password) {
      localStorage.setItem(STORAGE_KEYS.admin, '1');
      loginCard.classList.add('hidden');
      dashboard.classList.remove('hidden');
      toast('Добро пожаловать, Admin', 'success');
      populateAdminCaseSelect();
    } else {
      toast('Неверный логин или пароль', 'error');
    }
  });

  document.getElementById('adminLogout')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.admin);
    dashboard.classList.add('hidden');
    loginCard.classList.remove('hidden');
  });

  document.getElementById('refreshCatalog')?.addEventListener('click', async () => {
    try {
      const response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('network');
      const data = await response.json();
      catalog = catalog.map((skin) => {
        const updated = data.find((item) => `${item.weapon} | ${item.name}` === `${skin.weapon} | ${skin.name}`);
        return updated ? { ...skin, price: Number(updated.price || skin.price) } : skin;
      });
      persistCatalog();
      toast('Каталог обновлён', 'success');
    } catch (err) {
      console.warn(err);
      toast('Не удалось подтянуть цены, используем локальные данные', 'error');
    }
  });

  document.getElementById('saveCase')?.addEventListener('click', () => {
    const caseId = adminCaseSelect.value;
    const target = getCaseById(caseId);
    if (!target) return;
    target.name = adminCaseName.value;
    target.price = Number(adminCasePrice.value);
    target.xp = Number(adminCaseXp.value);
    target.frequency = adminCaseFrequency.value;
    target.description = adminCaseDescription.value;
    persistCases();
    toast('Кейс сохранён', 'success');
    renderCases();
  });

  adminCaseSelect?.addEventListener('change', () => populateCaseForm(adminCaseSelect.value));

  function populateAdminCaseSelect() {
    adminCaseSelect.innerHTML = casePool.map((c) => `<option value="${c.id}">${c.name}</option>`).join('');
    populateCaseForm(adminCaseSelect.value);
  }

  function populateCaseForm(caseId) {
    const target = getCaseById(caseId);
    if (!target) return;
    adminCaseName.value = target.name;
    adminCasePrice.value = target.price;
    adminCaseXp.value = target.xp;
    adminCaseFrequency.value = target.frequency;
    adminCaseDescription.value = target.description;
    renderAdminDrops(target);
    renderCatalog();
  }

  function renderAdminDrops(caseData) {
    adminDropList.innerHTML = caseData.drops
      .map(
        (drop) => {
          const skin = getSkinById(drop.skinId);
          if (!skin) return '';
          return `
          <div class="admin-drop-row" data-drop="${drop.skinId}">
            <div>
              <strong>${skin.weapon} | ${skin.name}</strong>
              <small>${formatCurrency(skin.price)}</small>
            </div>
            <input type="number" min="0.1" step="0.1" value="${drop.weight}" />
            <button class="icon-btn" data-remove-drop="${drop.skinId}">×</button>
          </div>
        `;
        },
      )
      .join('');
    adminDropList.querySelectorAll('input').forEach((input) => {
      input.addEventListener('change', () => {
        const id = input.closest('[data-drop]').dataset.drop;
        const targetDrop = caseData.drops.find((item) => item.skinId === id);
        targetDrop.weight = Number(input.value);
        persistCases();
      });
    });
    adminDropList.querySelectorAll('[data-remove-drop]').forEach((btn) => {
      btn.addEventListener('click', () => {
        caseData.drops = caseData.drops.filter((drop) => drop.skinId !== btn.dataset.removeDrop);
        persistCases();
        renderAdminDrops(caseData);
      });
    });
  }

  document.getElementById('addDropBtn')?.addEventListener('click', () => {
    const caseId = adminCaseSelect.value;
    const target = getCaseById(caseId);
    if (!target) return;
    const selected = document.querySelector('[data-catalog-selected="true"]');
    if (!selected) {
      toast('Выберите скин в каталоге', 'error');
      return;
    }
    const skinId = selected.dataset.skin;
    if (target.drops.some((drop) => drop.skinId === skinId)) {
      toast('Скин уже в кейсе', 'error');
      return;
    }
    target.drops.push({ skinId, weight: 5 });
    persistCases();
    toast('Скин добавлен', 'success');
    renderAdminDrops(target);
  });

  function renderCatalog(filter = '') {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    const filtered = catalog.filter((skin) => `${skin.weapon} ${skin.name}`.toLowerCase().includes(filter.toLowerCase()));
    catalogGrid.innerHTML = filtered
      .map(
        (skin) => `
        <button class="catalog-card" data-skin="${skin.id}">
          <img src="${skin.image}" alt="${skin.name}" />
          <div>
            <strong>${skin.weapon} | ${skin.name}</strong>
            <small>${formatCurrency(skin.price)}</small>
          </div>
        </button>
      `,
      )
      .join('');
    catalogGrid.querySelectorAll('[data-skin]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-catalog-selected]').forEach((el) => el.removeAttribute('data-catalog-selected'));
        btn.setAttribute('data-catalog-selected', 'true');
      });
    });
  }

  document.getElementById('catalogSearch')?.addEventListener('input', (event) => {
    renderCatalog(event.target.value);
  });
}

function attachModalHandlers() {
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
  });
  document.querySelectorAll('[data-close-spinner]').forEach((btn) => {
    btn.addEventListener('click', () => btn.closest('.case-spinner')?.setAttribute('aria-hidden', 'true'));
  });
  document.getElementById('accountManager')?.addEventListener('click', openAccountModal);
  document.getElementById('depositBtn')?.addEventListener('click', () => openModal(document.getElementById('depositModal')));
  document.getElementById('logoutBtn')?.addEventListener('click', logout);

  const tabs = document.querySelectorAll('.modal-tabs .chip');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((chip) => chip.classList.remove('active'));
      tab.classList.add('active');
      ['steamForm', 'loginForm', 'registerForm'].forEach((formId) => document.getElementById(formId)?.classList.add('hidden'));
      const targetForm = document.getElementById(`${tab.dataset.tab}Form`);
      targetForm?.classList.remove('hidden');
    });
  });

  document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    login(event.target.loginName.value, event.target.loginPassword.value);
  });

  document.getElementById('registerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.registerPassword.value !== event.target.registerConfirm.value) {
      toast('Пароли не совпадают', 'error');
      return;
    }
    register(event.target.registerName.value, event.target.registerPassword.value);
    event.target.reset();
    renderAccountList();
  });

  document.getElementById('steamForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    steamAuth(event.target.steamProfile.value, event.target.steamNick.value);
  });

  document.getElementById('depositForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = Number(event.target.depositAmount.value);
    const method = event.target.depositMethod.value;
    handleDeposit(amount, method);
    closeModal(document.getElementById('depositModal'));
  });
}

function initCaseFilters() {
  const filters = document.getElementById('caseFilters');
  if (!filters) return;
  const availableFilters = [
    { id: 'all', label: 'Все' },
    { id: 'premium', label: 'Премиум' },
    { id: 'fast', label: 'Быстрые' },
    { id: 'rare', label: 'Редкие' },
  ];
  filters.innerHTML = availableFilters.map((filter, index) => `<button class="chip ${index === 0 ? 'active' : ''}" data-filter="${filter.id}">${filter.label}</button>`).join('');
  filters.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
      btn.classList.add('active');
      const id = btn.dataset.filter;
      if (id === 'all') {
        renderCases();
        return;
      }
      const filtered = casePool.filter((item) => (id === 'premium' ? item.price >= 300 : item.frequency === id));
      const container = document.getElementById('caseGrid');
      container.innerHTML = filtered
        .map(
          (item) => `
          <article class="case-card">
            <img src="${item.image}" alt="${item.name}" />
            <div>
              <p class="eyebrow">${item.tag}</p>
              <h3>${item.name}</h3>
              <div class="case-meta-line">
                <span>${formatCurrency(item.price)}</span>
                <span>${item.xp} XP</span>
              </div>
              <div class="case-actions">
                <button class="btn secondary" data-case="${item.id}" data-action="open">Открыть</button>
                <a class="btn ghost" href="case.html?id=${item.id}">Подробнее</a>
              </div>
            </div>
          </article>
        `,
        )
        .join('');
      container.querySelectorAll('[data-action="open"]').forEach((openBtn) => {
        openBtn.addEventListener('click', () => openCase(getCaseById(openBtn.dataset.case)));
      });
    });
  });
}

function initInventoryFilters() {
  const filters = document.getElementById('inventoryFilters');
  if (!filters) return;
  filters.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
      btn.classList.add('active');
      renderInventory(btn.dataset.filter);
    });
  });
}

function refreshPageData() {
  switch (pageId) {
    case 'cases':
      renderCases();
      renderLiveFeed();
      break;
    case 'leaderboard':
      renderLeaderboard();
      break;
    case 'profile':
      updateInventoryStats();
      renderInventory('all');
      break;
    case 'upgrade':
      renderUpgradeInventory();
      upgradeState.selectedItem = null;
      upgradeState.targetItem = null;
      if (document.getElementById('upgradeSelected')) document.getElementById('upgradeSelected').textContent = 'Не выбран';
      if (document.getElementById('upgradeTarget')) document.getElementById('upgradeTarget').textContent = '—';
      if (document.getElementById('upgradeBtn')) document.getElementById('upgradeBtn').disabled = true;
      break;
    default:
      break;
  }
}

function setupPageInteractions() {
  switch (pageId) {
    case 'cases':
      initCaseFilters();
      document.getElementById('openRandom')?.addEventListener('click', () => {
        const randomCase = casePool[Math.floor(Math.random() * casePool.length)];
        openCase(randomCase);
      });
      document.getElementById('forceDrop')?.addEventListener('click', simulateLiveDrop);
      break;
    case 'case':
      initCaseDetailPage();
      break;
    case 'giveaways':
      renderGiveaways();
      break;
    case 'profile':
      initInventoryFilters();
      document.getElementById('sellAll')?.addEventListener('click', () => {
        if (!requireAuth()) return;
        const total = userState.inventory.reduce((sum, item) => {
          if (item.status === 'available') {
            item.status = 'sold';
            return sum + item.price;
          }
          return sum;
        }, 0);
        userState.balance += total;
        persistAccounts();
        renderInventory('all');
        updateInventoryStats();
        renderAccountInfo();
        toast(`Продали предметы на ${formatCurrency(total)}`);
      });
      document.getElementById('copyTrade')?.addEventListener('click', async () => {
        if (!requireAuth()) return;
        await navigator.clipboard?.writeText(`https://steamcommunity.com/tradeoffer/new/?partner=${userState.tradeCode}`);
        toast('Трейд-ссылка скопирована', 'success');
      });
      break;
    case 'upgrade':
      initUpgradeModule();
      break;
    case 'admin':
      initAdminPage();
      break;
    default:
      break;
  }
}

function initPage() {
  renderAccountInfo();
  setupPageInteractions();
  refreshPageData();
}

function requireAuth() {
  if (!currentAccountId || userState?.id === 'guest') {
    toast('Авторизуйтесь через Steam или логин', 'error');
    openAccountModal();
    return false;
  }
  return true;
}

function highlightNav() {
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const targetPage = pageId === 'case' ? 'cases' : pageId;
    if (link.dataset.page === targetPage) {
      link.classList.add('active');
    }
  });
}

highlightNav();
attachModalHandlers();
initPage();
