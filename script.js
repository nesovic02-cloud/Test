const cases = [
  { id: 'wood', name: 'Шатёр', price: 2.99, rarity: 'Common', color: '#5f5cff' },
  { id: 'metro', name: 'Метро', price: 4.99, rarity: 'Uncommon', color: '#7d71ff' },
  { id: 'villa', name: 'Вилла', price: 7.5, rarity: 'Rare', color: '#a96bff' },
  { id: 'palace', name: 'Дворец', price: 11.99, rarity: 'Epic', color: '#ff7e6b' },
  { id: 'space', name: 'Орбита', price: 19.99, rarity: 'Legendary', color: '#ffb347' },
  { id: 'nebula', name: 'Небула', price: 34.99, rarity: 'Mythic', color: '#e76cff' },
];

const upgrades = [
  { name: 'AWP | Desert Hydra', price: 1499 },
  { name: 'Karambit | Doppler', price: 1199 },
  { name: 'AK-47 | Wild Lotus', price: 899 },
  { name: 'M4A4 | Temukau', price: 399 },
  { name: 'USP-S | Printstream', price: 299 },
  { name: 'Glock-18 | Water Elemental', price: 129 },
];

const giveaways = [
  { id: 'hour', title: '1 ЧАС', skin: 'Восходящий череп', price: '$420', duration: 60 * 60 },
  { id: 'day', title: '1 ДЕНЬ', skin: 'Снайперская обедня', price: '$980', duration: 24 * 60 * 60 },
  { id: 'week', title: '1 НЕДЕЛЯ', skin: 'Номерок', price: '$4 005', duration: 7 * 24 * 60 * 60 },
  { id: 'month', title: '1 МЕСЯЦ', skin: 'AWP | Unicore', price: '$11 440', duration: 30 * 24 * 60 * 60 },
];

const leaderboardBase = [
  { name: 'cXtion', xp: 3200 },
  { name: 'Anarchy Stormborn', xp: 2750 },
  { name: 'milli0nn', xp: 1980 },
  { name: 'vapor', xp: 1540 },
  { name: 'juunak', xp: 1480 },
];

const STORAGE_KEYS = {
  accounts: 'skinhouse:accounts',
  active: 'skinhouse:active',
};
const methodLabels = {
  card: 'банковскую карту',
  crypto: 'криптовалюту',
  skin: 'скины',
};

const randomId = () => (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));

function createAccountPayload(name, password) {
  return {
    id: randomId(),
    name: name.trim(),
    password,
    tradeCode: Math.floor(10000 + Math.random() * 90000),
    xp: 0,
    level: 1,
    casesOpened: 0,
    balance: 0,
    upgradesWon: 0,
    inventory: [],
    giveaways: {},
    depositHistory: [],
    lastLogin: Date.now(),
  };
}

function normalizeAccount(data = {}) {
  const base = createAccountPayload(data.name || 'player', data.password || '');
  return {
    ...base,
    ...data,
    id: data.id || base.id,
    tradeCode: data.tradeCode || base.tradeCode,
    inventory: Array.isArray(data.inventory) ? data.inventory : [],
    giveaways: data.giveaways || {},
    depositHistory: Array.isArray(data.depositHistory) ? data.depositHistory : [],
    level: data.level || 1,
    xp: data.xp || 0,
    casesOpened: data.casesOpened || 0,
    balance: data.balance || 0,
    upgradesWon: data.upgradesWon || 0,
  };
}

function loadAccounts() {
  const raw = window.localStorage.getItem(STORAGE_KEYS.accounts);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    Object.keys(parsed).forEach((key) => {
      parsed[key] = normalizeAccount(parsed[key]);
    });
    return parsed;
  } catch (error) {
    console.error('Не удалось прочитать аккаунты', error);
    return {};
  }
}

let accounts = loadAccounts();
let currentAccountId = window.localStorage.getItem(STORAGE_KEYS.active);

if (!currentAccountId || !accounts[currentAccountId]) {
  const seeded = createAccountPayload('nox', 'demo');
  accounts[seeded.id] = seeded;
  currentAccountId = seeded.id;
  window.localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
  window.localStorage.setItem(STORAGE_KEYS.active, currentAccountId);
}

let userState = accounts[currentAccountId];

const caseGrid = document.getElementById('caseGrid');
const leaderboardList = document.getElementById('leaderboardList');
const giveawayGrid = document.getElementById('giveawayGrid');
const winnersLog = document.getElementById('winnersLog');
const upgradeInventory = document.getElementById('upgradeInventory');
const upgradePool = document.getElementById('upgradePool');
const profileInventory = document.getElementById('profileInventory');
const liveFeed = document.getElementById('liveFeed');
const chanceRange = document.getElementById('chanceRange');
const chanceValue = document.getElementById('chanceValue');
const upgradeBtn = document.getElementById('upgradeBtn');
const upgradeStatus = document.getElementById('upgradeStatus');
const wheel = document.getElementById('wheel');
const copyTrade = document.getElementById('copyTrade');
const withdrawToggle = document.getElementById('withdrawToggle');
const profileBalance = document.getElementById('profileBalance');
const profileCases = document.getElementById('profileCases');
const profileUpgrades = document.getElementById('profileUpgrades');
const profileName = document.getElementById('profileName');
const profileId = document.getElementById('profileId');
const headerUser = document.getElementById('headerUser');
const sellAllBtn = document.getElementById('sellAll');
const openRandomBtn = document.getElementById('openRandom');
const navLinks = document.querySelectorAll('.main-nav a');
const accountModal = document.getElementById('accountModal');
const depositModal = document.getElementById('depositModal');
const accountManagerBtn = document.getElementById('accountManager');
const depositBtn = document.getElementById('depositBtn');
const loginForm = document.getElementById('loginForm');
const loginName = document.getElementById('loginName');
const loginPassword = document.getElementById('loginPassword');
const registerForm = document.getElementById('registerForm');
const registerName = document.getElementById('registerName');
const registerPassword = document.getElementById('registerPassword');
const registerConfirm = document.getElementById('registerConfirm');
const accountList = document.getElementById('accountList');
const depositForm = document.getElementById('depositForm');
const depositAmount = document.getElementById('depositAmount');
const depositMethod = document.getElementById('depositMethod');
const depositComment = document.getElementById('depositComment');
const depositHint = document.getElementById('depositHint');
const balanceInputField = document.getElementById('balanceInput');
const expProgress = document.getElementById('expProgress');
const userExp = document.getElementById('userExp');
const userLevel = document.getElementById('userLevel');
const nextLevel = document.getElementById('nextLevel');

let selectedItem = null;
const pageId = document.body.dataset.page || 'cases';

navLinks.forEach((link) => {
  if (link.dataset.page === pageId) {
    link.classList.add('active');
  }
});

const liveNames = ['nox', 's1mple', 'cXtion', 'milli0nn', 'vapor', 'denzed', 'stalker', 'arizona', 'natality'];
const liveSkins = [
  'AK-47 | Headshot',
  'M4A4 | Temukau',
  'AWP | Chromatic Aberration',
  'USP-S | Printstream',
  'Karambit | Doppler',
  'Glock-18 | Water Elemental',
  'Desert Eagle | Printstream',
  'AK-47 | Slate',
];

function persistState() {
  accounts[currentAccountId] = JSON.parse(JSON.stringify(userState));
  userState = accounts[currentAccountId];
  window.localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
  window.localStorage.setItem(STORAGE_KEYS.active, currentAccountId);
}

function findAccountByName(name) {
  const target = name.trim().toLowerCase();
  return Object.values(accounts).find((acc) => acc.name.toLowerCase() === target);
}

function renderAccountList() {
  if (!accountList) return;
  const entries = Object.values(accounts);
  if (entries.length === 0) {
    accountList.innerHTML = '<p class="muted">Аккаунтов пока нет</p>';
    return;
  }
  accountList.innerHTML = entries
    .map(
      (acc) => `
        <button data-account="${acc.id}" class="${acc.id === currentAccountId ? 'active' : ''}">
          <span>${acc.name}</span>
          <small>${acc.xp} XP • $${acc.balance.toFixed(2)}</small>
        </button>
      `,
    )
    .join('');
  accountList.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => switchAccount(btn.dataset.account));
  });
}

function switchAccount(id) {
  if (!accounts[id]) return;
  currentAccountId = id;
  userState = accounts[id];
  selectedItem = null;
  renderInventory();
  renderUpgradeInventory();
  updateStats();
  persistState();
  flash(`Вы вошли как ${userState.name}`);
  closeModal(accountModal);
}

function getTradeLink() {
  return `https://steamcommunity.com/tradeoffer/new/?partner=${userState.tradeCode}`;
}

function renderCases() {
  if (!caseGrid) return;
  caseGrid.innerHTML = cases
    .map(
      (item) => `
    <article class="case-card" style="background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.3)), ${item.color};">
      <div>
        <p class="eyebrow">${item.rarity}</p>
        <h3>${item.name}</h3>
        <p class="muted">$${item.price.toFixed(2)}</p>
      </div>
      <p class="muted">Опыт за открытие: <strong>${getExperience(item.price)}</strong></p>
      <button class="btn primary" data-case="${item.id}">Открыть</button>
    </article>
  `,
    )
    .join('');

  caseGrid.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => openCase(btn.dataset.case));
  });
}

function getExperience(price) {
  const base = 5;
  return Math.round(base + price * 2.5);
}

function openCase(caseId) {
  const selectedCase = cases.find((c) => c.id === caseId) || cases[Math.floor(Math.random() * cases.length)];
  const gainedXp = getExperience(selectedCase.price);
  userState.xp += gainedXp;
  userState.casesOpened += 1;
  const dropValue = +(selectedCase.price * (1 + Math.random())).toFixed(2);
  userState.balance = +(userState.balance + selectedCase.price * 0.35).toFixed(2);

  const newItem = {
    id: randomId(),
    name: `${selectedCase.name} drop #${userState.casesOpened}`,
    price: dropValue,
    status: 'available',
  };

  userState.inventory.unshift(newItem);
  renderInventory();
  renderUpgradeInventory();
  updateStats();
  persistState();
  pushLiveDrop({ user: userState.name, caseName: selectedCase.name, itemName: newItem.name, price: dropValue });
  flash(`Вы получили ${newItem.name} и ${gainedXp} XP`);
}

function updateStats() {
  let xpForNextLevel = userState.level * 100;
  while (userState.xp >= xpForNextLevel) {
    userState.level += 1;
    xpForNextLevel = userState.level * 100;
  }
  const previousThreshold = (userState.level - 1) * 100;
  const progressValue = userState.xp - previousThreshold;
  const levelProgress = progressValue / (xpForNextLevel - previousThreshold || 1);
  if (expProgress) {
    expProgress.style.width = `${Math.min(100, levelProgress * 100)}%`;
  }
  if (userExp) {
    userExp.textContent = `${userState.xp} XP`;
  }
  if (userLevel) {
    userLevel.textContent = userState.level;
  }
  const xpLeft = xpForNextLevel - progressValue;
  if (nextLevel) {
    nextLevel.textContent = xpLeft;
  }
  if (profileBalance) {
    profileBalance.textContent = `$${userState.balance.toFixed(2)}`;
  }
  if (profileCases) {
    profileCases.textContent = userState.casesOpened;
  }
  if (profileUpgrades) {
    profileUpgrades.textContent = userState.upgradesWon;
  }
  if (profileName) {
    profileName.textContent = userState.name;
  }
  if (profileId) {
    profileId.textContent = `ID ${userState.tradeCode}`;
  }
  if (headerUser) {
    headerUser.textContent = userState.name;
  }
  renderLeaderboard();
  renderAccountList();
}

function renderLeaderboard() {
  if (!leaderboardList) return;
  const playerAccounts = Object.values(accounts).map((acc) => ({ name: acc.name, xp: acc.xp }));
  const combined = [...leaderboardBase, ...playerAccounts];
  combined.sort((a, b) => b.xp - a.xp);
  leaderboardList.innerHTML = combined
    .slice(0, 10)
    .map(
      (player, index) => `
    <div class="leaderboard-row">
      <strong>#${index + 1}</strong>
      <span>${player.name}</span>
      <span>${player.xp} XP</span>
    </div>
  `,
    )
    .join('');
}

function renderGiveaways() {
  if (!giveawayGrid) return;
  giveawayGrid.innerHTML = giveaways
    .map(
      (item) => `
    <article class="giveaway-card" data-id="${item.id}">
      <p class="eyebrow">${item.title}</p>
      <h3>${item.skin}</h3>
      <p class="muted">Призовой фонд ${item.price}</p>
      <div class="timer" id="timer-${item.id}">--:--:--</div>
      <button class="btn secondary" data-join="${item.id}">Принять участие</button>
      <small class="muted" id="participants-${item.id}">Участников: 0</small>
    </article>
  `,
    )
    .join('');

  giveawayGrid.querySelectorAll('[data-join]').forEach((btn) => {
    btn.addEventListener('click', () => joinGiveaway(btn.dataset.join));
  });
}

const timers = {};

function startTimers() {
  if (!giveawayGrid) return;
  giveaways.forEach((item) => {
    if (!timers[item.id]) {
      timers[item.id] = {
        end: Date.now() + item.duration * 1000,
        interval: null,
        participants: new Set(),
      };
      timers[item.id].interval = setInterval(() => updateTimer(item.id), 1000);
    }
  });
}

function formatDuration(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function updateTimer(id) {
  const data = timers[id];
  if (!data) return;
  const timerEl = document.getElementById(`timer-${id}`);
  const participantsEl = document.getElementById(`participants-${id}`);
  const diff = Math.max(0, Math.floor((data.end - Date.now()) / 1000));
  if (timerEl) {
    timerEl.textContent = formatDuration(diff);
  }
  if (participantsEl) {
    participantsEl.textContent = `Участников: ${data.participants.size}`;
  }

  if (diff <= 0) {
    clearInterval(data.interval);
    pickWinner(id);
  }
}

function joinGiveaway(id) {
  const data = timers[id];
  if (!data) return;
  if (!data.participants.has(userState.name)) {
    data.participants.add(userState.name);
    userState.giveaways[id] = Date.now();
    persistState();
    flash(`Вы участвуете в розыгрыше ${id}`);
  }
}

function pickWinner(id) {
  const data = timers[id];
  if (!data || data.participants.size === 0) {
    flash(`Розыгрыш ${id} завершился без победителя`);
  } else {
    const participants = Array.from(data.participants);
    const winner = participants[Math.floor(Math.random() * participants.length)];
    winnersLog && winnersLog.prepend(createWinnerLog(id, winner));
    if (winner === userState.name) {
      userState.balance += 50;
      updateStats();
      persistState();
      flash('Победа! +$50 на баланс');
    }
  }
  timers[id] = null;
  const giveaway = giveaways.find((g) => g.id === id);
  setTimeout(() => {
    timers[id] = {
      end: Date.now() + giveaway.duration * 1000,
      interval: setInterval(() => updateTimer(id), 1000),
      participants: new Set(),
    };
  }, 2000);
}

function createWinnerLog(id, winner) {
  const row = document.createElement('div');
  row.textContent = `${new Date().toLocaleTimeString()} • ${winner} выиграл розыгрыш ${id}`;
  return row;
}

function renderUpgradeInventory() {
  if (!upgradeInventory) return;
  const pool = userState.inventory.slice(0, 8);
  if (pool.length === 0) {
    upgradeInventory.innerHTML = '<p class="muted">Нет предметов</p>';
    return;
  }
  upgradeInventory.innerHTML = pool
    .map(
      (item) => `
    <div class="item-card ${selectedItem?.id === item.id ? 'selected' : ''}" data-id="${item.id}">
      <strong>${item.name}</strong>
      <small>$${item.price}</small>
      <span class="muted">${item.status}</span>
    </div>
  `,
    )
    .join('');

  upgradeInventory.querySelectorAll('.item-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      selectedItem = userState.inventory.find((item) => item.id === id) || null;
      renderUpgradeInventory();
      if (upgradeStatus) {
        upgradeStatus.textContent = selectedItem ? `Выбран ${selectedItem.name}` : 'Выберите предмет';
      }
    });
  });
}

function renderUpgradePool() {
  if (!upgradePool) return;
  upgradePool.innerHTML = upgrades
    .map(
      (item) => `
    <div class="item-card">
      <strong>${item.name}</strong>
      <small>$${item.price}</small>
      <span class="muted">x1 - x100</span>
    </div>
  `,
    )
    .join('');
}

function renderInventory(filter) {
  if (!profileInventory) return;
  const activeFilter = filter || document.querySelector('.profile-tabs .chip.active')?.dataset.filter || 'all';
  const filtered = userState.inventory.filter((item) => (activeFilter === 'all' ? true : item.status === activeFilter));
  profileInventory.innerHTML =
    filtered
      .map(
        (item) => `
    <div class="item-card">
      <strong>${item.name}</strong>
      <small>$${item.price}</small>
      <span class="muted">${item.status}</span>
    </div>
  `,
      )
      .join('') || '<p class="muted">Нет предметов</p>';
}

function pushLiveDrop({ user, caseName, itemName, price }) {
  if (!liveFeed) return;
  const row = document.createElement('div');
  row.className = 'live-entry';
  const formatted = typeof price === 'number' ? price.toFixed(2) : Number(price).toFixed(2);
  row.innerHTML = `
    <div>
      <strong>${user}</strong>
      <span>выбил ${itemName}</span>
    </div>
    <div class="live-meta">
      <span>${caseName}</span>
      <strong>$${formatted}</strong>
    </div>
  `;
  liveFeed.prepend(row);
  const maxRows = 10;
  while (liveFeed.children.length > maxRows) {
    liveFeed.removeChild(liveFeed.lastElementChild);
  }
}

function mockLiveDrop() {
  const dropCase = cases[Math.floor(Math.random() * cases.length)];
  const player = liveNames[Math.floor(Math.random() * liveNames.length)];
  const skin = liveSkins[Math.floor(Math.random() * liveSkins.length)];
  const price = +(dropCase.price * (1.2 + Math.random() * 2)).toFixed(2);
  return { user: player, caseName: dropCase.name, itemName: skin, price };
}

function seedLiveFeed() {
  if (!liveFeed) return;
  if (!liveFeed.dataset.ready) {
    for (let i = 0; i < 6; i += 1) {
      pushLiveDrop(mockLiveDrop());
    }
    liveFeed.dataset.ready = 'true';
  }
  setInterval(() => {
    pushLiveDrop(mockLiveDrop());
  }, 4500);
}

function flash(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function handleUpgrade() {
  if (!chanceRange || !chanceValue || !wheel || !balanceInputField) return;
  if (!selectedItem) {
    flash('Выберите предмет');
    return;
  }
  const chance = Number(chanceRange.value);
  const balanceContribution = Number(balanceInputField.value) || 0;
  if (balanceContribution > userState.balance) {
    flash('Недостаточно средств');
    return;
  }
  chanceValue.textContent = `${chance}%`;
  wheel.classList.add('spinning');
  setTimeout(() => wheel.classList.remove('spinning'), 2000);

  const itemIndex = userState.inventory.findIndex((item) => item.id === selectedItem.id);
  if (itemIndex !== -1) {
    userState.inventory.splice(itemIndex, 1);
  }
  if (balanceContribution > 0) {
    userState.balance -= balanceContribution;
  }

  const success = Math.random() * 100 <= chance;
  if (success) {
    const reward = upgrades[Math.floor(Math.random() * upgrades.length)];
    const upgradedItem = {
      id: randomId(),
      name: reward.name,
      price: reward.price,
      status: 'upgraded',
    };
    userState.inventory.unshift(upgradedItem);
    userState.upgradesWon += 1;
    if (upgradeStatus) {
      upgradeStatus.textContent = `Успех! ${reward.name}`;
    }
  } else {
    if (upgradeStatus) {
      upgradeStatus.textContent = 'Неудача, попробуйте снова';
    }
  }
  selectedItem = null;
  renderInventory();
  renderUpgradeInventory();
  updateStats();
  persistState();
}

chanceRange?.addEventListener('input', (e) => {
  chanceValue.textContent = `${e.target.value}%`;
});

upgradeBtn?.addEventListener('click', handleUpgrade);
openRandomBtn?.addEventListener('click', () => openCase());

copyTrade?.addEventListener('click', () => {
  navigator.clipboard.writeText(getTradeLink()).then(() => {
    flash('Трейд ссылка скопирована');
  });
});

withdrawToggle?.addEventListener('change', (event) => {
  flash(event.target.checked ? 'Средства доступны к выводу' : 'Вывод заблокирован');
});

sellAllBtn?.addEventListener('click', () => {
  const sold = userState.inventory.reduce((sum, item) => sum + Number(item.price), 0);
  userState.balance += sold;
  userState.inventory = [];
  renderInventory();
  renderUpgradeInventory();
  updateStats();
  persistState();
  flash(`Продано на $${sold.toFixed(2)}`);
});

document.querySelectorAll('.profile-tabs .chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.profile-tabs .chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    renderInventory(chip.dataset.filter);
  });
});

function setModalState(modal, open) {
  if (!modal) return;
  modal.classList.toggle('show', open);
  modal.setAttribute('aria-hidden', String(!open));
}

accountManagerBtn?.addEventListener('click', () => {
  setModalState(accountModal, true);
});

depositBtn?.addEventListener('click', () => {
  setModalState(depositModal, true);
});

Array.from(document.querySelectorAll('[data-close-modal]')).forEach((btn) => {
  btn.addEventListener('click', () => setModalState(btn.closest('.modal'), false));
});

[accountModal, depositModal].forEach((modal) => {
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      setModalState(modal, false);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach((modal) => setModalState(modal, false));
  }
});

accountModal?.querySelectorAll('[data-tab]').forEach((tabBtn) => {
  tabBtn.addEventListener('click', () => {
    accountModal.querySelectorAll('[data-tab]').forEach((btn) => btn.classList.remove('active'));
    tabBtn.classList.add('active');
    const isLogin = tabBtn.dataset.tab === 'login';
    loginForm.classList.toggle('hidden', !isLogin);
    registerForm.classList.toggle('hidden', isLogin);
  });
});

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = loginName.value.trim();
  const password = loginPassword.value.trim();
  const account = findAccountByName(name);
  if (!account) {
    flash('Аккаунт не найден');
    return;
  }
  if (account.password && account.password !== password) {
    flash('Неверный пароль');
    return;
  }
  switchAccount(account.id);
  loginForm.reset();
});

registerForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = registerName.value.trim();
  const password = registerPassword.value.trim();
  const confirm = registerConfirm.value.trim();
  if (name.length < 3) {
    flash('Минимум 3 символа');
    return;
  }
  if (findAccountByName(name)) {
    flash('Ник уже занят');
    return;
  }
  if (password !== confirm) {
    flash('Пароли не совпадают');
    return;
  }
  const newAccount = createAccountPayload(name, password);
  accounts[newAccount.id] = newAccount;
  switchAccount(newAccount.id);
  registerForm.reset();
  flash('Аккаунт создан');
});

depositForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(depositAmount.value);
  if (!amount || amount <= 0) {
    flash('Введите сумму');
    return;
  }
  const method = depositMethod.value;
  const comment = depositComment.value.trim();
  userState.balance += amount;
  userState.depositHistory.unshift({ id: randomId(), amount, method, comment, ts: Date.now() });
  updateStats();
  persistState();
  depositHint.textContent = `Последнее пополнение: $${amount.toFixed(2)} через ${methodLabels[method] || method}`;
  flash(`Баланс пополнен на $${amount.toFixed(2)}`);
  depositForm.reset();
  setModalState(depositModal, false);
});

renderCases();
renderLeaderboard();
renderGiveaways();
renderUpgradeInventory();
renderUpgradePool();
renderInventory();
updateStats();
persistState();
startTimers();
seedLiveFeed();
