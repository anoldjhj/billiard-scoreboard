const MEMBER_KEY = "billiards-members-v1";
const RESULT_KEY = "billiards-results-v1";
const SETTINGS_KEY = "billiards-settings-v1";
const VOICE_KEY = "billiards-voice-v1";
const VOICE_STYLE_KEY = "billiards-voice-style-v1";
const WARNING_SOUND_KEY = "billiards-warning-sound-v1";
const LANGUAGE_KEY = "billiards-language-v1";
const APP_VERSION = "v303";
const I18N = {
  ko: {
    appTitle: "PLAY 당구점수판 3/4구",
    matchSettings: "경기설정",
    returnBoard: "점수판으로",
    returnBoardShort: "점수판",
    startBoard: "점수판 시작",
    records: "기록보기",
    matchRecords: "경기 기록",
    gameType: "경기방식",
    playerCount: "인원수",
    finishThreeC: "3C 마무리",
    finishBank: "Bank 마무리",
    customInput: "입력",
    timeLimit: "제한시간",
    noLimit: "없음",
    seconds: "초",
    warningSound: "경고음",
    use: "사용",
    off: "끄기",
    language: "언어/Language",
    korean: "한국어",
    english: "English",
    voice: "음성",
    voiceStyle: "음성스타일",
    autoSelect: "자동 선택",
    voiceBright: "밝은 여성",
    voiceYoung: "어린 톤",
    voiceClear: "또렷한 안내",
    voiceCalm: "차분한 톤",
    selectedPlayers: "선택된 선수",
    managerTitle: "선수 등록/편집",
    memberName: "선수 이름",
    targetScore: "점수",
    targetScoreAria: "목표점수",
    add: "등록",
    update: "수정",
    edit: "편집",
    delete: "삭제",
    setup: "설정",
    backToSetup: "설정으로",
    recordAverage: "평균 Aver.",
    playerSelect: "선수 선택",
    recentRecords: "최근 30게임 기록",
    scoreboard: "점수판",
    timerAria: "타이머 일시정지 또는 다시 시작",
    matchTimeAria: "전체 경기시간",
    inningAdjustAria: "이닝 수동 조정",
    inningUpAria: "이닝 올리기",
    inningDownAria: "이닝 내리기",
    quickScoreAria: "현재 선수 점수 빠르게 올리기",
    undoAria: "되돌리기",
    playerBoardAria: "선수 점수판",
    startMatch: "경기시작",
    endMatch: "경기종료",
    endMatchShort: "종료",
    rematch: "재경기",
    changePlayer: "선수변경",
    changePlayerShort: "변경",
    setupShort: "설정",
    win: "승리",
    player: "선수",
    noneSelected: "선택 없음",
    boxSelect: "박스 선택",
    score: "점수",
    inningScoreMinus: "이닝스코어 1점 빼기",
    savedTwoRecordsEmpty: "저장된 2인 경기 기록이 없습니다.",
    savedRecordsEmpty: "저장된 경기 기록이 없습니다.",
    recordDeleteAria: "기록 삭제",
    peopleSuffix: "인",
    choosePlayersAlert: "명의 선수를 선택해 주세요.",
    limitPrefix: "제한",
    pointSuffix: "점",
    minusOne: "마이너스 일",
    bankShot: "뱅크샷입니다",
    remainingCount: "개 남았습니다",
    remainingScore: "점 남았습니다",
    matchEnded: "경기종료",
    wonSentence: "님이 승리하였습니다",
    ok: "확인",
  },
  en: {
    appTitle: "PLAY Billiards Scoreboard 3/4 Ball",
    matchSettings: "Match Settings",
    returnBoard: "Back to Board",
    returnBoardShort: "Board",
    startBoard: "Start Board",
    records: "Records",
    matchRecords: "Match Records",
    gameType: "Game Type",
    playerCount: "Players",
    finishThreeC: "3C Finish",
    finishBank: "Bank Finish",
    customInput: "Custom",
    timeLimit: "Shot Clock",
    noLimit: "None",
    seconds: "sec",
    warningSound: "Warning",
    use: "On",
    off: "Off",
    language: "언어/Language",
    korean: "Korean",
    english: "English",
    voice: "Voice",
    voiceStyle: "Voice Style",
    autoSelect: "Auto",
    voiceBright: "Bright Female",
    voiceYoung: "Young Tone",
    voiceClear: "Clear Guide",
    voiceCalm: "Calm Tone",
    selectedPlayers: "Selected Players",
    managerTitle: "Player Add/Edit",
    memberName: "Player Name",
    targetScore: "Score",
    targetScoreAria: "Score",
    add: "Add",
    update: "Update",
    edit: "Edit",
    delete: "Delete",
    setup: "Settings",
    backToSetup: "Settings",
    recordAverage: "Average",
    playerSelect: "Player",
    recentRecords: "Recent 30 Match Records",
    scoreboard: "Scoreboard",
    timerAria: "Pause or restart timer",
    matchTimeAria: "Total match time",
    inningAdjustAria: "Manual inning adjustment",
    inningUpAria: "Increase inning",
    inningDownAria: "Decrease inning",
    quickScoreAria: "Quickly add score for current player",
    undoAria: "Undo",
    playerBoardAria: "Player scoreboard",
    startMatch: "Start",
    endMatch: "End Match",
    endMatchShort: "End",
    rematch: "Rematch",
    changePlayer: "Change Player",
    changePlayerShort: "Change",
    setupShort: "Set",
    win: "Win",
    player: "Player",
    noneSelected: "No Selection",
    boxSelect: "box select",
    score: "score",
    inningScoreMinus: "subtract 1 run point",
    savedTwoRecordsEmpty: "No saved 2-player match records.",
    savedRecordsEmpty: "No saved match records.",
    recordDeleteAria: "delete record",
    peopleSuffix: " players",
    choosePlayersAlert: " players.",
    limitPrefix: "Limit",
    pointSuffix: " points",
    minusOne: "minus one",
    bankShot: "Bank shot",
    remainingCount: " remaining",
    remainingScore: " points remaining",
    matchEnded: "Match ended",
    wonSentence: "won",
    ok: "OK",
  },
};
const VOICE_STYLES = {
  bright: { rate: 1.1, pitch: 1.8 },
  young: { rate: 1.38, pitch: 2 },
  clear: { rate: 0.94, pitch: 1.25 },
  calm: { rate: 0.78, pitch: 0.8 },
};
const DEFAULT_MEMBERS = [
  { name: "선수1", target: 30 },
  { name: "선수2", target: 15 },
  { name: "회원A", target: 20 },
  { name: "회원B", target: 20 },
];
const state = {
  language: localStorage.getItem(LANGUAGE_KEY) || "ko",
  gameType: "four-ball",
  playerCount: 2,
  finish: {
    threeC: 1,
    bank: 0,
  },
  timeLimit: null,
  elapsed: 0,
  timerId: null,
  matchElapsed: 0,
  matchTimerId: null,
  gameStarted: false,
  gameEnded: false,
  resultSaved: false,
  inning: 1,
  active: 0,
  selected: [0, 1],
  nextPick: 0,
  editIndex: null,
  players: [],
  members: [],
  history: [],
};

let preferredOrientation = "portrait";
let currentDeviceMode = "tablet";
let safeAreaProbe = null;
const PHONE_VIEWPORT_LIMITS = {
  shortSide: 600,
  longSide: 960,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let audioContext = null;
let preferredVoice = null;
let englishVoice = null;
let voiceOptionsSignature = "";

const els = {
  setupScreen: $("#setupScreen"),
  recordsScreen: $("#recordsScreen"),
  scoreScreen: $("#scoreScreen"),
  memberName: $("#memberName"),
  memberTarget: $("#memberTarget"),
  editList: $("#editList"),
  memberCount: $("#memberCount"),
  addMemberButton: $("#addMemberButton"),
  selectionStrip: $("#selectionStrip"),
  openBoardButton: $("#openBoardButton"),
  openRecordsButton: $("#openRecordsButton"),
  returnBoardFromRecordsButton: $("#returnBoardFromRecordsButton"),
  backToSetupButton: $("#backToSetupButton"),
  recordGameType: $("#recordGameType"),
  recordPlayerSelect: $("#recordPlayerSelect"),
  recordAverage: $("#recordAverage"),
  recordList: $("#recordList"),
  gameType: $("#gameType"),
  playerCount: $("#playerCount"),
  shotLimit: $("#shotLimit"),
  warningSound: $("#warningSound"),
  languageSelect: $("#languageSelect"),
  voiceSelect: $("#voiceSelect"),
  voiceStyle: $("#voiceStyle"),
  finishThreeCField: $("#finishThreeCField"),
  finishThreeC: $("#finishThreeC"),
  finishThreeCCustom: $("#finishThreeCCustom"),
  finishBank: $("#finishBank"),
  finishBankCustom: $("#finishBankCustom"),
  timerButton: $("#timerButton"),
  timerValue: $("#timerValue"),
  matchTimerValue: $("#matchTimerValue"),
  limitChip: $("#limitChip"),
  inningValue: $("#inningValue"),
  inningUpButton: $("#inningUpButton"),
  inningDownButton: $("#inningDownButton"),
  quickScoreButtons: $$("[data-quick-score]"),
  startButton: $("#startButton"),
  turnSwitchButton: $("#turnSwitchButton"),
  homeButton: $("#homeButton"),
  undoButton: $("#undoButton"),
  scoreBoard: $("#scoreBoard"),
  winnerDialog: $("#winnerDialog"),
  winnerTitle: $("#winnerTitle"),
  winnerText: $("#winnerText"),
};

function t(key) {
  return I18N[state.language]?.[key] || I18N.ko[key] || key;
}

function text(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function renderAppVersion() {
  const heading = document.querySelector(".setup-heading > div:last-child");
  if (!heading) return;
  let version = heading.querySelector(".app-version");
  if (!version) {
    version = document.createElement("p");
    version.className = "app-version";
    heading.append(version);
  }
  version.textContent = `Version ${APP_VERSION}`;
}

function setLabelText(control, value) {
  const label = control?.closest("label");
  if (!label) return;
  const node = [...label.childNodes].find((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
  if (node) node.textContent = `\n                ${value}\n                `;
}

function setOptionText(select, value, label) {
  const option = select?.querySelector(`option[value="${value}"]`);
  if (option) option.textContent = label;
}

function currentLocale() {
  return state.language === "en" ? "en-US" : "ko-KR";
}

function readViewportSize() {
  const viewport = window.visualViewport;
  const width = Math.round(viewport?.width || window.innerWidth || document.documentElement.clientWidth || 0);
  const height = Math.round(viewport?.height || window.innerHeight || document.documentElement.clientHeight || 0);
  return { width, height };
}

function readScoreViewportSize(width, height) {
  return { width, height };
}

function readSafeAreaInsets() {
  if (!safeAreaProbe) {
    safeAreaProbe = document.createElement("div");
    safeAreaProbe.style.cssText =
      "position:fixed;top:env(safe-area-inset-top,0px);right:env(safe-area-inset-right,0px);bottom:env(safe-area-inset-bottom,0px);left:env(safe-area-inset-left,0px);visibility:hidden;pointer-events:none;";
    document.body.append(safeAreaProbe);
  }

  const style = getComputedStyle(safeAreaProbe);
  const parsePx = (value) => Math.max(0, Number.parseFloat(value) || 0);
  return {
    top: parsePx(style.top),
    right: parsePx(style.right),
    bottom: parsePx(style.bottom),
    left: parsePx(style.left),
  };
}

function syncPhoneScoreGeometry(scoreViewport) {
  if (currentDeviceMode !== "phone") return;

  const insets = readSafeAreaInsets();
  document.documentElement.style.setProperty("--phone-safe-left", `${Math.round(insets.left)}px`);
  document.documentElement.style.setProperty("--phone-safe-right", `${Math.round(insets.right)}px`);
  document.documentElement.style.setProperty("--phone-safe-top", `${Math.round(insets.top)}px`);
  document.documentElement.style.setProperty("--phone-safe-bottom", "0px");

  const shellRect = document.querySelector(".app-shell")?.getBoundingClientRect();
  const shellWidth = Math.round(shellRect?.width || 0);
  const shellHeight = Math.round(shellRect?.height || 0);
  const safeWidth = shellWidth || Math.max(0, Math.round(scoreViewport.width - insets.left - insets.right));
  const safeHeight = shellHeight || Math.max(0, Math.round(scoreViewport.height - insets.top));
  const scoreLogicalWidth = Math.max(safeWidth, safeHeight);
  const scoreLogicalHeight = Math.min(safeWidth, safeHeight);

  document.documentElement.style.setProperty("--phone-score-width", `${scoreLogicalWidth}px`);
  document.documentElement.style.setProperty("--phone-score-height", `${scoreLogicalHeight}px`);
}

function deviceModeFromViewport() {
  const { width, height } = readViewportSize();
  const shortSide = Math.min(width, height);
  const longSide = Math.max(width, height);
  return shortSide <= PHONE_VIEWPORT_LIMITS.shortSide && longSide <= PHONE_VIEWPORT_LIMITS.longSide ? "phone" : "tablet";
}

function applyDeviceMode() {
  currentDeviceMode = deviceModeFromViewport();
  const isPhone = currentDeviceMode === "phone";
  document.documentElement.classList.toggle("device-phone", isPhone);
  document.documentElement.classList.toggle("device-tablet", !isPhone);
  document.body.classList.toggle("device-phone", isPhone);
  document.body.classList.toggle("device-tablet", !isPhone);
  document.documentElement.dataset.device = currentDeviceMode;
  document.body.dataset.device = currentDeviceMode;
}

function isCompactViewport() {
  const { width, height } = readViewportSize();
  return Math.min(width, height) <= 520 && Math.max(width, height) <= 980;
}

function displayName(name) {
  if (state.language !== "en") return name;
  return (
    {
      선수1: "Player 1",
      선수2: "Player 2",
      회원A: "Member A",
      회원B: "Member B",
    }[name] || name
  );
}

function compactSetupLabels() {
  return isCompactViewport() && !els.setupScreen.classList.contains("is-hidden");
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.setAttribute("translate", "no");
  document.documentElement.classList.add("notranslate");
  document.body.setAttribute("translate", "no");
  document.body.classList.add("notranslate");
  document.title = state.language === "en" ? "PLAY Billiards Scoreboard" : "PLAY Billiards Scoreboard";
  els.languageSelect.value = state.language;

  text(".setup-panel h1", t("appTitle"));
  text(".member-title h2", t("matchSettings"));
  text(".manager-summary-title", t("managerTitle"));
  const compactSetup = false;
  text("#openRecordsButton", t("records"));
  text(".records-header h1", t("matchRecords"));
  text(".record-average div span", t("recordAverage"));
  text("#returnBoardFromRecordsButton", state.language === "en" && isCompactViewport() ? t("returnBoardShort") : t("returnBoard"));
  text("#backToSetupButton", t("backToSetup"));
  text("#homeButton", t("setup"));
  text("#turnSwitchButton", t("changePlayer"));
  text("#winnerTitle", t("win"));
  text(".winner-dialog button", t("ok"));

  setLabelText(els.gameType, t("gameType"));
  setLabelText(els.playerCount, t("playerCount"));
  setLabelText(els.finishThreeC, t("finishThreeC"));
  setLabelText(els.finishBank, t("finishBank"));
  setLabelText(els.shotLimit, t("timeLimit"));
  setLabelText(els.warningSound, t("warningSound"));
  setLabelText(els.languageSelect, t("language"));
  setLabelText(els.voiceSelect, t("voice"));
  setLabelText(els.voiceStyle, t("voiceStyle"));
  setLabelText(els.recordGameType, t("gameType"));
  setLabelText(els.recordPlayerSelect, t("playerSelect"));

  setOptionText(els.gameType, "four-ball", state.language === "en" ? "4 Ball" : "4구");
  setOptionText(els.gameType, "three-cushion", state.language === "en" ? "3 Cushion" : "3구");
  setOptionText(els.recordGameType, "four-ball", state.language === "en" ? "4 Ball" : "4구");
  setOptionText(els.recordGameType, "three-cushion", state.language === "en" ? "3 Cushion" : "3구");
  [2, 3, 4].forEach((count) =>
    setOptionText(els.playerCount, String(count), state.language === "en" ? `${count} Players` : `${count}명`),
  );
  [els.finishThreeC, els.finishBank].forEach((select) => setOptionText(select, "custom", t("customInput")));
  setOptionText(els.shotLimit, "none", t("noLimit"));
  [30, 40, 50, 60].forEach((seconds) => setOptionText(els.shotLimit, String(seconds), `${seconds}${t("seconds")}`));
  setOptionText(els.warningSound, "on", t("use"));
  setOptionText(els.warningSound, "off", t("off"));
  setOptionText(els.languageSelect, "ko", t("korean"));
  setOptionText(els.languageSelect, "en", t("english"));
  setOptionText(els.voiceStyle, "bright", t("voiceBright"));
  setOptionText(els.voiceStyle, "young", t("voiceYoung"));
  setOptionText(els.voiceStyle, "clear", t("voiceClear"));
  setOptionText(els.voiceStyle, "calm", t("voiceCalm"));

  els.finishThreeCCustom.placeholder = t("customInput");
  els.finishThreeCCustom.setAttribute("aria-label", `${t("finishThreeC")} ${t("customInput")}`);
  els.finishBankCustom.placeholder = t("customInput");
  els.finishBankCustom.setAttribute("aria-label", `${t("finishBank")} ${t("customInput")}`);
  els.memberName.placeholder = t("memberName");
  els.memberTarget.placeholder = t("targetScore");
  els.memberTarget.setAttribute("aria-label", t("targetScoreAria"));
  els.setupScreen.setAttribute("aria-label", t("matchSettings"));
  $(".member-box")?.setAttribute("aria-label", t("selectedPlayers"));
  $(".game-options")?.setAttribute("aria-label", t("matchSettings"));
  els.recordsScreen.setAttribute("aria-label", t("records"));
  $(".record-average")?.setAttribute("aria-label", t("recordAverage"));
  els.scoreScreen.setAttribute("aria-label", t("scoreboard"));
  els.selectionStrip.setAttribute("aria-label", t("selectedPlayers"));
  els.editList.setAttribute("aria-label", t("managerTitle"));
  els.recordList.setAttribute("aria-label", t("recentRecords"));
  els.timerButton.setAttribute("aria-label", t("timerAria"));
  $(".match-time")?.setAttribute("aria-label", t("matchTimeAria"));
  $(".inning-adjust")?.setAttribute("aria-label", t("inningAdjustAria"));
  els.inningUpButton.setAttribute("aria-label", t("inningUpAria"));
  els.inningDownButton.setAttribute("aria-label", t("inningDownAria"));
  $(".quick-score-actions")?.setAttribute("aria-label", t("quickScoreAria"));
  els.undoButton.setAttribute("aria-label", t("undoAria"));
  els.scoreBoard.setAttribute("aria-label", t("playerBoardAria"));

  els.addMemberButton.textContent = state.editIndex === null ? t("add") : t("update");
  renderVoiceOptions();
  renderMembers();
  renderScoreboard();
  if (!els.recordsScreen.classList.contains("is-hidden")) renderRecords();
}

function normalizeSelected() {
  const maxIndex = Math.max(0, state.members.length - 1);
  state.selected = state.selected
    .slice(0, state.playerCount)
    .map((index) => (Number.isInteger(index) && index >= 0 && index <= maxIndex ? index : null));

  for (let slot = 0; slot < state.playerCount; slot += 1) {
    if (state.selected[slot] === undefined || state.selected[slot] === null) state.selected[slot] = firstAvailableIndex();
    if (isDuplicateSelection(slot)) state.selected[slot] = firstAvailableIndex(state.selected);
  }
  state.nextPick = Math.min(state.nextPick, state.playerCount - 1);
}

function isDuplicateSelection(slot) {
  if (state.selected[slot] === null) return false;
  return state.selected.findIndex((index) => index === state.selected[slot]) !== slot;
}

function firstAvailableIndex(existing = state.selected) {
  for (let index = 0; index < state.members.length; index += 1) {
    if (!existing.includes(index)) return index;
  }
  return null;
}

function loadMembers() {
  try {
    const saved = JSON.parse(localStorage.getItem(MEMBER_KEY) || "[]");
    state.members = Array.isArray(saved) && saved.length ? saved : DEFAULT_MEMBERS.map((member) => ({ ...member }));
  } catch {
    state.members = DEFAULT_MEMBERS.map((member) => ({ ...member }));
  }
  normalizeSelected();
}

function saveMembers() {
  localStorage.setItem(MEMBER_KEY, JSON.stringify(state.members));
}

function loadSettings() {
  let settings = {};
  try {
    settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") || {};
  } catch {
    settings = {};
  }

  const playerCount = [2, 3, 4].includes(Number(settings.playerCount)) ? Number(settings.playerCount) : state.playerCount;
  const gameType = ["four-ball", "three-cushion"].includes(settings.gameType) ? settings.gameType : state.gameType;
  state.gameType = gameType;
  state.playerCount = playerCount;
  state.language = ["ko", "en"].includes(settings.language) ? settings.language : localStorage.getItem(LANGUAGE_KEY) || state.language;
  if (Array.isArray(settings.selected)) state.selected = settings.selected.map((index) => (Number.isInteger(index) ? index : null));
  state.nextPick = Number.isInteger(settings.nextPick) ? settings.nextPick : state.nextPick;

  els.gameType.value = gameType;
  els.playerCount.value = String(playerCount);
  els.languageSelect.value = state.language;
  els.shotLimit.value = settings.shotLimit || "none";
  setFinishControlValue(els.finishThreeC, els.finishThreeCCustom, settings.finish?.threeC ?? (gameType === "four-ball" ? 1 : 0));
  setFinishControlValue(els.finishBank, els.finishBankCustom, settings.finish?.bank ?? 0);

  renderFinishOptions();
  normalizeSelected();
  readFinishSettings();
  saveSettings();
}

function saveSettings() {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify({
      gameType: els.gameType.value,
      playerCount: Number(els.playerCount.value),
      finish: {
        threeC: readFinishControlValue(els.finishThreeC, els.finishThreeCCustom),
        bank: readFinishControlValue(els.finishBank, els.finishBankCustom),
      },
      shotLimit: els.shotLimit.value,
      language: state.language,
      selected: state.selected.slice(0, Math.max(state.playerCount, state.selected.length)),
      nextPick: state.nextPick,
    }),
  );
}

function selectionText(slot) {
  const member = state.members[state.selected[slot]];
  return member ? `${member.name} ${member.target}` : t("noneSelected");
}

function appendNameTarget(parent, member) {
  const name = document.createElement("span");
  const target = document.createElement("span");
  name.className = "member-label-name";
  target.className = "member-label-target";
  name.textContent = displayName(member.name);
  target.textContent = member.target;
  parent.replaceChildren(name, target);
}

function renderSelections() {
  els.selectionStrip.dataset.selectedCount = String(state.playerCount);
  els.selectionStrip.replaceChildren(
    ...Array.from({ length: state.playerCount }, (_, slot) => {
      const item = document.createElement("button");
      const label = document.createElement("span");
      const value = document.createElement("strong");
      const member = state.members[state.selected[slot]];
      const canSwap = state.nextPick !== slot && state.selected[state.nextPick] !== null && state.selected[slot] !== null;

      item.type = "button";
      item.className = "selection-card";
      item.classList.toggle("is-picking", state.nextPick === slot);
      item.classList.toggle("can-swap", canSwap);
      item.dataset.selectionSlot = String(slot);
      item.setAttribute("aria-label", `${t("player")} ${slot + 1} ${t("boxSelect")}`);
      label.textContent = `${t("player")} ${slot + 1}`;
      if (member) appendNameTarget(value, member);
      else value.textContent = selectionText(slot);
      item.append(label, value);
      if (canSwap) {
        const swap = document.createElement("span");
        swap.className = "selection-swap-button";
        swap.dataset.swapSlot = String(slot);
        swap.textContent = "Swap";
        item.append(swap);
      }
      return item;
    }),
  );
}

function renderMembers() {
  const previousScrollTop = els.editList.scrollTop;
  normalizeSelected();
  els.memberCount.textContent = `${state.members.length}`;
  renderReturnBoardActions();
  renderSelections();

  els.editList.replaceChildren(
    ...state.members.map((member, index) => {
      const row = document.createElement("div");
      const pick = document.createElement("button");
      const badge = document.createElement("span");
      const edit = document.createElement("button");
      const remove = document.createElement("button");
      const selectedSlot = state.selected.findIndex((selected) => selected === index);

      row.className = "edit-row";
      row.classList.toggle("is-selected", selectedSlot > -1);

      pick.type = "button";
      pick.className = "edit-info";
      pick.dataset.pickIndex = String(index);
      appendNameTarget(pick, member);
      pick.setAttribute("aria-label", `${displayName(member.name)} ${t("playerSelect")}`);

      badge.className = "selection-badge";
      badge.textContent = selectedSlot > -1 ? String(selectedSlot + 1) : "";

      edit.type = "button";
      edit.className = "edit-button";
      edit.dataset.editIndex = String(index);
      edit.textContent = t("edit");
      edit.setAttribute("aria-label", `${displayName(member.name)} ${t("edit")}`);

      remove.type = "button";
      remove.className = "delete-button";
      remove.dataset.deleteIndex = String(index);
      remove.textContent = t("delete");
      remove.setAttribute("aria-label", `${displayName(member.name)} ${t("delete")}`);

      row.append(pick, badge, edit, remove);
      return row;
    }),
  );
  restoreScrollablePosition(els.editList, previousScrollTop);
}

function pickMember(index) {
  const existingSlot = state.selected.findIndex((selected) => selected === index);
  if (existingSlot > -1 && existingSlot !== state.nextPick) state.selected[existingSlot] = state.selected[state.nextPick] ?? null;

  state.selected[state.nextPick] = index;
  state.nextPick = (state.nextPick + 1) % state.playerCount;
  saveSettings();
  renderMembers();
}

function selectPlayerSlot(slot) {
  state.nextPick = Math.min(Math.max(0, slot), state.playerCount - 1);
  saveSettings();
  renderMembers();
}

function swapSelectedSlots(slot) {
  const targetSlot = Math.min(Math.max(0, slot), state.playerCount - 1);
  const sourceSlot = state.nextPick;
  if (targetSlot === sourceSlot || state.selected[sourceSlot] === null || state.selected[targetSlot] === null) return;
  [state.selected[sourceSlot], state.selected[targetSlot]] = [state.selected[targetSlot], state.selected[sourceSlot]];
  state.nextPick = targetSlot;
  saveSettings();
  renderMembers();
}

function saveMemberFromForm() {
  const name = els.memberName.value.trim();
  const target = Number(els.memberTarget.value);
  if (!name) {
    els.memberName.focus();
    return;
  }
  if (!Number.isFinite(target) || target < 1) {
    els.memberTarget.focus();
    return;
  }

  if (state.editIndex === null) {
    state.members.push({ name, target });
  } else {
    state.members[state.editIndex] = { name, target };
  }

  state.editIndex = null;
  els.memberName.value = "";
  els.memberTarget.value = "";
  els.addMemberButton.textContent = t("add");
  saveMembers();
  renderMembers();
}

function editMember(index) {
  const member = state.members[index];
  if (!member) return;
  state.editIndex = index;
  els.memberName.value = member.name;
  els.memberTarget.value = member.target;
  els.addMemberButton.textContent = t("update");
  els.memberName.focus();
}

function deleteMember(index) {
  if (state.members.length <= state.playerCount) return;
  state.members.splice(index, 1);
  state.selected = state.selected.map((selected) => {
    if (selected === index) return null;
    return selected > index ? selected - 1 : selected;
  });
  normalizeSelected();
  saveMembers();
  saveSettings();
  renderMembers();
}

function readFinishSettings() {
  state.finish = {
    threeC: state.gameType === "four-ball" ? readFinishControlValue(els.finishThreeC, els.finishThreeCCustom) : 0,
    bank: readFinishControlValue(els.finishBank, els.finishBankCustom),
  };
}

function readFinishControlValue(select, customInput) {
  const value = select.value === "custom" ? customInput.value : select.value;
  return Math.max(0, Number(value) || 0);
}

function setFinishControlValue(select, customInput, value) {
  const normalized = Math.max(0, Number(value) || 0);
  if (normalized <= 5) {
    select.value = String(normalized);
  } else {
    select.value = "custom";
    customInput.value = String(normalized);
  }
  renderFinishCustomInput(select, customInput);
}

function renderFinishCustomInput(select, customInput, focusInput = false) {
  const showCustomInput = select.value === "custom";
  select.hidden = showCustomInput;
  customInput.hidden = !showCustomInput;
  if (showCustomInput && focusInput) customInput.focus();
}

function commitFinishCustomInput(select, customInput) {
  setFinishControlValue(select, customInput, customInput.value);
  readFinishSettings();
  saveSettings();
}

function renderFinishOptions() {
  const isFourBall = els.gameType.value === "four-ball";
  els.finishThreeC.disabled = !isFourBall;
  els.finishThreeCCustom.disabled = !isFourBall;
  els.finishThreeCField.classList.toggle("is-disabled", !isFourBall);
  renderFinishCustomInput(els.finishThreeC, els.finishThreeCCustom);
  renderFinishCustomInput(els.finishBank, els.finishBankCustom);
}

function applyDefaultFinishSettings() {
  const isFourBall = els.gameType.value === "four-ball";
  setFinishControlValue(els.finishThreeC, els.finishThreeCCustom, isFourBall ? 1 : 0);
  setFinishControlValue(els.finishBank, els.finishBankCustom, 0);
  renderFinishOptions();
}

function snapshot() {
  state.history.push({
    timeLimit: state.timeLimit,
    gameType: state.gameType,
    playerCount: state.playerCount,
    finish: { ...state.finish },
    elapsed: state.elapsed,
    matchElapsed: state.matchElapsed,
    gameStarted: state.gameStarted,
    gameEnded: state.gameEnded,
    resultSaved: state.resultSaved,
    inning: state.inning,
    active: state.active,
    players: state.players.map((player) => ({
      ...player,
      runs: [...player.runs],
      finish: { ...player.finish },
      finishGoal: { ...player.finishGoal },
    })),
  });
  if (state.history.length > 80) state.history.shift();
}

function restore(previous) {
  state.timeLimit = previous.timeLimit;
  state.gameType = previous.gameType || "four-ball";
  state.playerCount = previous.playerCount || 2;
  state.finish = previous.finish || { threeC: 0, bank: 0 };
  state.elapsed = previous.elapsed;
  state.matchElapsed = previous.matchElapsed || 0;
  state.gameStarted = previous.gameStarted;
  state.gameEnded = previous.gameEnded || false;
  state.resultSaved = previous.resultSaved || false;
  state.inning = previous.inning;
  state.active = previous.active;
  state.players = previous.players.map((player) => ({
    ...player,
    runs: [...player.runs],
    finish: { ...player.finish },
    finishGoal: player.finishGoal || { ...player.finish },
  }));
  if (state.gameStarted) {
    startTimer();
    startMatchTimer();
  } else {
    stopTimer();
    stopMatchTimer();
  }
  renderScoreboard();
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    state.elapsed += 1;
    renderTimer();
  }, 1000);
}

function startMatchTimer() {
  stopMatchTimer();
  state.matchTimerId = window.setInterval(() => {
    state.matchElapsed += 1;
    renderMatchTimer();
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function stopMatchTimer() {
  if (state.matchTimerId) {
    window.clearInterval(state.matchTimerId);
    state.matchTimerId = null;
  }
}

function resetTimer(autostart = state.gameStarted) {
  state.elapsed = 0;
  renderTimer();
  if (autostart) startTimer();
}

function renderTimer() {
  els.timerValue.textContent = state.elapsed;
  els.timerButton.classList.toggle("is-over-limit", Boolean(state.timeLimit && state.elapsed > state.timeLimit));
  playLimitWarningIfNeeded();
}

function renderMatchTimer() {
  els.matchTimerValue.textContent = formatDuration(state.matchElapsed);
}

function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function findSelectedVoice(voices = "speechSynthesis" in window ? window.speechSynthesis.getVoices() : []) {
  const selectedVoiceURI = localStorage.getItem(VOICE_KEY);
  if (selectedVoiceURI === "off") return "off";
  if (selectedVoiceURI && selectedVoiceURI !== "auto") {
    const selected = voices.find((voice) => voice.voiceURI === selectedVoiceURI) || null;
    if (selected) return selected;
    localStorage.removeItem(VOICE_KEY);
  }
  return null;
}

function limitedVoiceOptions(voices) {
  const uniqueVoices = voices.filter(
    (voice, index, list) => list.findIndex((candidate) => candidate.voiceURI === voice.voiceURI) === index,
  );
  const languageVoices = (prefix) => uniqueVoices.filter((voice) => voice.lang.toLowerCase().startsWith(prefix)).slice(0, 5);
  return [
    ...languageVoices("ko").map((voice, index) => ({ voice, label: "Korean " + (index + 1) + " - " + voice.name })),
    ...languageVoices("en").map((voice, index) => ({ voice, label: "English " + (index + 1) + " - " + voice.name })),
  ];
}

function findPreferredVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const selectedVoice = findSelectedVoice(voices);
  if (selectedVoice === "off") return null;
  if (selectedVoice) {
    preferredVoice = selectedVoice;
    return preferredVoice;
  }
  const localePrefix = state.language === "en" ? "en" : "ko";
  const localeVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith(localePrefix));
  const femaleHints = ["female", "woman", "yuna", "sora", "narae"];
  preferredVoice =
    localeVoices.find((voice) => femaleHints.some((hint) => voice.name.toLowerCase().includes(hint))) ||
    localeVoices[0] ||
    voices.find((voice) => femaleHints.some((hint) => voice.name.toLowerCase().includes(hint))) ||
    null;
  return preferredVoice;
}

function renderVoiceOptions() {
  if (!("speechSynthesis" in window) || !els.voiceSelect) return;
  const voices = window.speechSynthesis.getVoices();
  const voiceChoices = limitedVoiceOptions(voices);
  const signature = state.language + "|" + voiceChoices.map(({ voice }) => voice.voiceURI).join("|");
  const current = localStorage.getItem(VOICE_KEY) || "auto";
  if (signature === voiceOptionsSignature && els.voiceSelect.options.length) {
    els.voiceSelect.value = [...els.voiceSelect.options].some((option) => option.value === current)
      ? current
      : els.voiceSelect.options[0]?.value || "";
    return;
  }
  voiceOptionsSignature = signature;
  els.voiceSelect.replaceChildren(
    ...voiceChoices.map(({ voice, label }) => new Option(label + " (" + voice.lang + ")", voice.voiceURI)),
  );
  els.voiceSelect.value = [...els.voiceSelect.options].some((option) => option.value === current)
    ? current
    : els.voiceSelect.options[0]?.value || "";
  if (els.voiceSelect.value) localStorage.setItem(VOICE_KEY, els.voiceSelect.value);
  findPreferredVoice();
}

function speakScore(score) {
  speakLocalizedText(spokenScoreText(score));
}

function speakPenaltyScore(score, wasPositiveRun) {
  if (wasPositiveRun) {
    speakLocalizedText(t("minusOne") + ", " + spokenScoreText(score));
    return;
  }
  speakScore(score);
}

function koreanCount(value) {
  return String(Math.max(0, Number(value) || 0));
}

function speakText(text, lang = "ko-KR") {
  if (!("speechSynthesis" in window)) return;
  if (localStorage.getItem(VOICE_KEY) === "off") return;
  window.speechSynthesis.cancel();
  const style = VOICE_STYLES[localStorage.getItem(VOICE_STYLE_KEY)] || VOICE_STYLES.clear;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.voice = preferredVoice || findPreferredVoice();
  utterance.rate = style.rate;
  utterance.pitch = style.pitch;
  window.speechSynthesis.speak(utterance);
}

function findEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const selectedVoice = findSelectedVoice(voices);
  if (selectedVoice === "off") return null;
  if (selectedVoice) {
    englishVoice = selectedVoice;
    return englishVoice;
  }
  if (englishVoice && voices.includes(englishVoice)) return englishVoice;
  englishVoice =
    voices.find((voice) => voice.lang.toLowerCase() === "en-us") ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ||
    null;
  return englishVoice;
}

function speakEnglishText(text) {
  if (!("speechSynthesis" in window)) return;
  if (localStorage.getItem(VOICE_KEY) === "off") return;
  window.speechSynthesis.cancel();
  const style = VOICE_STYLES[localStorage.getItem(VOICE_STYLE_KEY)] || VOICE_STYLES.clear;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.voice = findEnglishVoice();
  utterance.rate = style.rate;
  utterance.pitch = style.pitch;
  window.speechSynthesis.speak(utterance);
}
function speakLocalizedText(text, lang = currentLocale()) {
  if (state.language === "en") {
    speakEnglishText(text);
    return;
  }
  speakText(text, lang);
}

function spokenScoreText(score) {
  if (state.language !== "en") return `${score}${t("pointSuffix")}`;
  return `${score} ${Number(score) === 1 ? "point" : "points"}`;
}

function speakTurn() {
  if (localStorage.getItem(VOICE_KEY) === "off") {
    playTurnSound();
    return;
  }
  speakEnglishText("turn");
}

function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  audioContext ||= new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTurnSound() {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(720, now);
  oscillator.frequency.setValueAtTime(980, now + 0.08);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function playVictorySound() {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((frequency, index) => {
    const start = now + index * 0.11;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.11, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.2);
  });
}

function warningSoundEnabled() {
  return localStorage.getItem(WARNING_SOUND_KEY) !== "off";
}

function playLimitWarningIfNeeded() {
  if (!state.gameStarted || state.gameEnded || !state.timeLimit || !warningSoundEnabled()) return;
  const remaining = state.timeLimit - state.elapsed;
  if (remaining === 10 || (remaining <= 5 && remaining >= 0)) playWarningSound(remaining <= 5);
}

function playWarningSound(isUrgent = false) {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(isUrgent ? 1180 : 900, now);
  oscillator.frequency.setValueAtTime(isUrgent ? 980 : 780, now + 0.08);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(isUrgent ? 0.24 : 0.17, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + (isUrgent ? 0.13 : 0.1));

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + (isUrgent ? 0.14 : 0.11));
}

function playSubtractSound() {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const secondOscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;

  oscillator.type = "triangle";
  secondOscillator.type = "sine";
  oscillator.frequency.setValueAtTime(560, now);
  oscillator.frequency.exponentialRampToValueAtTime(230, now + 0.34);
  secondOscillator.frequency.setValueAtTime(420, now + 0.08);
  secondOscillator.frequency.exponentialRampToValueAtTime(170, now + 0.38);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.13, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.24);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.46);

  oscillator.connect(gain);
  secondOscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  secondOscillator.start(now + 0.08);
  oscillator.stop(now + 0.48);
  secondOscillator.stop(now + 0.48);
}

function renderScoreboard() {
  renderTimer();
  renderMatchTimer();
  els.inningValue.textContent = state.inning;
  els.limitChip.textContent = state.timeLimit ? `${t("limitPrefix")} ${state.timeLimit}${t("seconds")}` : `${t("limitPrefix")} ${t("noLimit")}`;
  els.startButton.disabled = false;
  const compactActions = isCompactViewport();
  els.startButton.textContent = state.gameEnded
    ? t("rematch")
    : state.gameStarted
      ? compactActions
        ? t("endMatchShort")
        : t("endMatch")
      : t("startMatch");
  els.turnSwitchButton.textContent = compactActions ? t("changePlayerShort") : t("changePlayer");
  els.homeButton.textContent = compactActions ? t("setupShort") : t("setup");
  els.undoButton.disabled = state.gameEnded;
  els.turnSwitchButton.disabled = false;
  els.inningUpButton.disabled = state.gameEnded;
  els.inningDownButton.disabled = state.gameEnded || state.inning <= 1;
  els.quickScoreButtons.forEach((button) => {
    button.disabled = !state.gameStarted || state.gameEnded;
  });
  els.scoreScreen.classList.toggle("is-ended", state.gameEnded);
  renderReturnBoardActions();

  els.scoreBoard.dataset.players = String(state.players.length);
  els.scoreBoard.replaceChildren(...state.players.map(createPlayerCard));
  scheduleScoreTextFit();
}

function scheduleScoreTextFit() {
  requestAnimationFrame(() => {
    fitScoreTextToBoxes();
    requestAnimationFrame(fitScoreTextToBoxes);
  });
}

function fitScoreTextToBoxes() {
  els.scoreBoard.querySelectorAll(".score-content > span").forEach((score) => {
    if (score.classList.contains("result-text") || score.classList.contains("status-three-c") || score.classList.contains("status-bank")) return;
    const content = score.closest(".score-content");
    if (!content) return;

    score.style.fontSize = "";
    const scoreValue = Math.abs(Number(score.textContent));
    if (!Number.isFinite(scoreValue) || scoreValue < 10) return;

    const contentWidth = content.clientWidth;
    if (!contentWidth) return;

    const oneMillimeter = 96 / 25.4;
    const availableWidth = Math.max(24, Math.floor(contentWidth - oneMillimeter * 2));
    const baseFontSize = Number.parseFloat(getComputedStyle(score).fontSize);
    if (!baseFontSize || score.offsetWidth <= availableWidth) return;

    let low = 12;
    let high = baseFontSize;
    let best = low;
    for (let step = 0; step < 12; step += 1) {
      const next = (low + high) / 2;
      score.style.fontSize = `${next}px`;
      const scoreWidth = score.offsetWidth;
      if (scoreWidth <= availableWidth) {
        best = next;
        low = next;
      } else {
        high = next;
      }
    }
    score.style.fontSize = `${best.toFixed(2)}px`;
    while (score.offsetWidth > availableWidth && best > 12) {
      best -= 0.5;
      score.style.fontSize = `${best.toFixed(2)}px`;
    }
  });
}

function createPlayerCard(player, index) {
  const card = document.createElement("article");
  const top = document.createElement("div");
  const target = document.createElement("span");
  const name = document.createElement("button");
  const scoreBox = document.createElement("button");
  const scoreContent = document.createElement("div");
  const score = document.createElement("span");
  const finishCount = finishRemaining(player);
  const stats = document.createElement("div");

  card.className = `player-card player-${index + 1}`;
  card.classList.toggle("is-active", index === state.active && player.status !== "win");
  card.classList.toggle("is-winner", player.status === "win");
  card.dataset.player = String(index);

  top.className = "player-topline";
  target.className = "target";
  target.textContent = player.target;
  name.type = "button";
  name.className = "name-button";
  name.textContent = displayName(player.name);
  top.append(target, name);

  scoreBox.type = "button";
  scoreBox.className = isYellowBall(player, index) ? "score-box yellow" : "score-box";
  scoreBox.dataset.scoreIndex = String(index);
  scoreBox.disabled = state.gameEnded || player.status === "win";
  scoreBox.setAttribute("aria-label", `${displayName(player.name)} ${t("score")}`);
  scoreContent.className = "score-content";
  score.textContent = scoreText(player);
  score.classList.toggle("score-digits-2", player.status === "playing" && Math.abs(Number(player.score)) >= 10);
  score.classList.toggle("score-digits-3", player.status === "playing" && Math.abs(Number(player.score)) >= 100);
  score.classList.toggle("result-text", player.status !== "playing");
  score.classList.toggle("status-win", player.status === "win");
  score.classList.toggle("status-three-c", player.status === "threeC");
  score.classList.toggle("status-bank", player.status === "bank");
  scoreContent.append(score);
  if (finishCount !== null) {
    const count = document.createElement("em");
    count.className = "finish-count";
    count.textContent = finishCount;
    scoreContent.append(count);
  }
  scoreBox.append(scoreContent);

  stats.className = "stat-row";
  stats.append(
    createStat(state.players.length > 2 ? "High" : "High Run", player.high, "high-run"),
    createStat(state.players.length > 2 ? "Avg" : "Aver.", averageFor(player), "average"),
    createTurnButton(player, index),
  );

  card.append(top, scoreBox, stats);
  return card;
}

function createStat(labelText, valueText, className) {
  const stat = document.createElement("div");
  const label = document.createElement("span");
  const value = document.createElement("strong");
  stat.className = `stat ${className}`;
  label.textContent = labelText;
  value.textContent = valueText;
  stat.append(label, value);
  return stat;
}

function createTurnButton(player, index) {
  const button = document.createElement("button");
  const label = document.createElement("span");
  const value = document.createElement("strong");
  button.type = "button";
  button.className = "stat inning-score";
  button.dataset.turnIndex = String(index);
  button.disabled = state.gameEnded || player.status === "win";
  button.setAttribute("aria-label", `${displayName(player.name)} ${t("inningScoreMinus")}`);
  value.textContent = player.turn;
  const hint = document.createElement("small");
  hint.textContent = "/ -1";
  label.textContent = "Run";
  label.append(hint);
  button.append(label, value);
  return button;
}

function scoreText(player) {
  if (player.status === "win") return rankText(player.rank);
  if (player.status === "threeC") return "3C";
  if (player.status === "bank") return "Bank";
  return player.score;
}

function rankText(rank) {
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return "Win";
}

function finishRemaining(player) {
  if (player.status === "threeC") return finishProgress(player.finish.threeC, player.finishGoal.threeC);
  if (player.status === "bank") return finishProgress(player.finish.bank, player.finishGoal.bank);
  return null;
}

function finishProgress(remaining, goal) {
  const target = Math.max(1, Number(goal) || 1);
  const made = Math.max(0, target - remaining);
  return `${made}/${target}`;
}

function scoreSnapshot(player) {
  return {
    score: player.score,
    status: player.status,
    finish: { ...player.finish },
  };
}

function announceScoreState(player, before) {
  if (player.status === "win") return;

  if (before.status !== player.status) {
    if (player.status === "threeC") {
      speakLocalizedText("Three cushion");
      return;
    }
    if (player.status === "bank") {
      speakLocalizedText(t("bankShot"));
      return;
    }
  }

  if (player.status === "threeC") {
    speakLocalizedText(`${player.finish.threeC}${t("remainingCount")}`);
    return;
  }

  if (player.status === "bank") {
    speakLocalizedText(`${player.finish.bank}${t("remainingCount")}`);
    return;
  }

  const remaining = player.target - player.score;
  if (remaining === 10 || remaining === 5 || (remaining > 0 && remaining <= 3)) {
    speakLocalizedText(state.language === "en" ? `${spokenScoreText(remaining)} remaining` : `${remaining}${t("remainingScore")}`);
    return;
  }

  speakScore(player.turn);
}

function isYellowBall(player, index) {
  if (player.status === "win") return false;
  if (typeof player.ballYellow === "boolean") return player.ballYellow;
  if (state.players.length === 3 && !hasRankedWinner()) {
    return yellowByOriginalRule(index, state.players.length);
  }
  return yellowByOriginalRule(index, state.players.length);
}

function yellowByOriginalRule(index, playerCount) {
  if (playerCount !== 3) return index % 2 === 1;
  return (index + state.inning - 1) % 2 === 1;
}

function latestWinnerPlayerIndex() {
  let latestRank = 0;
  let latestIndex = -1;
  state.players.forEach((player, index) => {
    if (player.rank && player.rank > latestRank) {
      latestRank = player.rank;
      latestIndex = index;
    }
  });
  return latestIndex;
}

function orderedActivePlayersAfter(index) {
  const ordered = [];
  for (let step = 1; step <= state.players.length; step += 1) {
    const player = state.players[(index + step) % state.players.length];
    if (player?.status !== "win") ordered.push(player);
  }
  return ordered;
}

function averageFor(player) {
  return (player.score / (player.finishedAtInning || state.inning)).toFixed(1);
}

function recalcHigh(player) {
  player.high = Math.max(0, player.turn, ...player.runs);
}

function createPlayer(member) {
  return {
    name: member.name,
    target: Math.max(1, Number(member.target) || 20),
    score: 0,
    high: 0,
    turn: 0,
    runs: [],
    status: "playing",
    rank: null,
    finishedAtInning: null,
    ballYellow: null,
    finish: { threeC: state.finish.threeC, bank: state.finish.bank },
    finishGoal: { threeC: state.finish.threeC, bank: state.finish.bank },
  };
}

function addScore(playerIndex, delta) {
  const player = state.players[playerIndex];
  if (!player || player.status === "win") return;
  if (delta > 0 && advanceFinish(player)) return;

  player.score += delta;
  player.turn += delta;
  recalcHigh(player);
  updatePlayerStatus(player);
}

function advanceFinish(player) {
  if (player.status === "threeC") {
    player.finish.threeC = Math.max(0, player.finish.threeC - 1);
    if (player.finish.threeC === 0) {
      player.status = player.finish.bank > 0 ? "bank" : "win";
    }
    return true;
  }

  if (player.status === "bank") {
    player.finish.bank = Math.max(0, player.finish.bank - 1);
    if (player.finish.bank === 0) player.status = "win";
    return true;
  }

  return false;
}

function updatePlayerStatus(player) {
  if (player.score < player.target || player.status !== "playing") return;
  if (player.finish.threeC > 0) {
    player.status = "threeC";
    return;
  }
  if (player.finish.bank > 0) {
    player.status = "bank";
    return;
  }
  player.status = "win";
}

function beginTurn(playerIndex) {
  const currentIndex = state.active;
  const current = state.players[currentIndex];
  const next = state.players[playerIndex];
  const currentColor =
    current && typeof current.ballYellow === "boolean" ? current.ballYellow : current ? isYellowBall(current, currentIndex) : null;
  if (current && current.status !== "win") {
    if (typeof current.ballYellow !== "boolean") current.ballYellow = currentColor;
    current.runs.push(current.turn);
    current.turn = 0;
    recalcHigh(current);
  }
  const inningChanged = playerIndex <= currentIndex;
  const lastIndex = inningChanged ? findLastActivePlayerIndex() : -1;
  const lastColor =
    current?.status === "win" && typeof current.ballYellow === "boolean"
      ? current.ballYellow
      : lastIndex >= 0
        ? isYellowBall(state.players[lastIndex], lastIndex)
        : null;
  if (inningChanged) state.inning += 1;
  state.active = playerIndex;
  if (inningChanged) arrangeBallColorsForNewInning(lastColor);
  resetTimer(true);
}

function arrangeBallColorsForNewInning(lastColor) {
  const firstIndex = state.players.findIndex((player) => player.status !== "win");
  if (firstIndex < 0 || activePlayerCount() < 2 || typeof lastColor !== "boolean") return;
  // Skipped players count as played. Start opposite the last slot, then rebuild every remaining card in order.
  alternateRemainingBallColors(firstIndex, !lastColor);
}

function hasRankedWinner() {
  return state.players.some((player) => player.rank);
}

function activePlayerCount() {
  return state.players.filter((player) => player.status !== "win").length;
}

function alternateRemainingBallColors(startIndex, firstColor) {
  let orderIndex = 0;
  for (let step = 0; step < state.players.length; step += 1) {
    const player = state.players[(startIndex + step) % state.players.length];
    if (player.status === "win") continue;
    player.ballYellow = orderIndex % 2 === 0 ? firstColor : !firstColor;
    orderIndex += 1;
  }
}

function nextPlayerIndex(fromIndex = state.active) {
  for (let step = 1; step <= state.players.length; step += 1) {
    const nextIndex = (fromIndex + step) % state.players.length;
    if (state.players[nextIndex]?.status !== "win") return nextIndex;
  }

  return fromIndex;
}

function findLastActivePlayerIndex() {
  for (let index = state.players.length - 1; index >= 0; index -= 1) {
    if (state.players[index]?.status !== "win") return index;
  }

  return -1;
}

function handleScoreTouch(playerIndex) {
  if (state.gameEnded) return;
  if (!state.gameStarted) startMatch();
  if (!state.gameStarted || state.gameEnded) return;
  if (state.players[playerIndex].status === "win") return;
  if (playerIndex !== state.active) {
    snapshot();
    beginTurn(playerIndex);
    speakTurn();
  } else {
    scoreActivePlayer(1);
    return;
  }
  renderScoreboard();
  checkWinnerForRankedPlay(state.players[playerIndex]);
}

function scoreActivePlayer(points) {
  if (!state.gameStarted || state.gameEnded) return;
  const playerIndex = state.active;
  const player = state.players[playerIndex];
  if (!player || player.status === "win") return;

  snapshot();
  const before = scoreSnapshot(player);
  const previousColor = isYellowBall(player, playerIndex);
  for (let point = 0; point < points && player.status !== "win"; point += 1) {
    addScore(playerIndex, 1);
  }
  if (player.status === "win") player.ballYellow = previousColor;
  announceScoreState(player, before);
  if (!state.gameEnded) resetTimer(true);
  renderScoreboard();
  checkWinnerForRankedPlay(player);
}

function switchTurn() {
  if (state.gameEnded || !state.gameStarted) {
    state.players.unshift(state.players.pop());
    state.active = 0;
    renderScoreboard();
    return;
  }
  snapshot();
  beginTurn(nextPlayerIndex());
  renderScoreboard();
}

function reduceTurn(playerIndex) {
  if (!state.gameStarted || state.gameEnded || playerIndex !== state.active) return;
  const player = state.players[playerIndex];
  if (player.status !== "playing") return;
  const wasPositiveRun = player.turn > 0;
  snapshot();
  addScore(playerIndex, -1);
  renderScoreboard();
  playSubtractSound();
  window.setTimeout(() => speakPenaltyScore(player.turn, wasPositiveRun), 520);
}

function adjustInning(delta) {
  if (state.gameEnded) return;
  const nextInning = Math.max(1, state.inning + delta);
  if (nextInning === state.inning) return;
  snapshot();
  state.inning = nextInning;
  renderScoreboard();
}

function checkWinner(player) {
  checkWinnerForRankedPlay(player);
  return;
  if (player.status !== "win") return;
  state.gameEnded = true;
  state.gameStarted = false;
  stopTimer();
  stopMatchTimer();
  if (!state.resultSaved) {
    saveMatchResult(player);
    state.resultSaved = true;
  }
  renderScoreboard();
  playVictorySound();
  speakLocalizedText(`${t("matchEnded")} ${displayName(player.name)} ${t("wonSentence")}`);
  if (!els.winnerDialog.showModal) return;
  els.winnerTitle.textContent = `${displayName(player.name)} ${t("win")}`;
  els.winnerText.textContent = "";
  els.winnerDialog.showModal();
}

function checkWinnerForRankedPlay(player) {
  if (player.status !== "win") return;
  freezeDisplayedBallColors();
  assignRank(player);

  const remainingPlayers = state.players.filter((candidate) => candidate.status !== "win").length;
  const shouldEnd = state.players.length <= 2 || remainingPlayers <= 1;
  if (shouldEnd) {
    state.gameEnded = true;
    state.gameStarted = false;
    stopTimer();
    stopMatchTimer();
    if (!state.resultSaved) {
      saveMatchResult(player);
      state.resultSaved = true;
    }
  }

  renderScoreboard();
  playVictorySound();
  speakLocalizedText(`${displayName(player.name)} ${t("win")}`);
}

function freezeDisplayedBallColors() {
  state.players.forEach((player, index) => {
    if (player.status !== "win") player.ballYellow = isYellowBall(player, index);
  });
}

function assignRank(player) {
  if (player.rank) return;
  const ranks = state.players.map((candidate) => candidate.rank).filter(Boolean);
  player.rank = ranks.length + 1;
  player.finishedAtInning = state.inning;
}

function saveMatchResult(winner) {
  const rankedWinner = state.players.find((player) => player.rank === 1) || winner;
  const result = {
    id: `match-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt: new Date().toISOString(),
    gameType: state.gameType,
    playerCount: state.playerCount,
    finish: { ...state.finish },
    winner: rankedWinner.name,
    inning: state.inning,
    duration: state.matchElapsed,
    players: state.players.map((player) => ({
      name: player.name,
      target: player.target,
      rank: player.rank || null,
      highRun: player.high,
      average: averageFor(player),
      score: player.score,
      inning: player.finishedAtInning || state.inning,
    })),
  };

  try {
    const previous = JSON.parse(localStorage.getItem(RESULT_KEY) || "[]");
    const results = Array.isArray(previous) ? previous : [];
    results.unshift(result);
    localStorage.setItem(RESULT_KEY, JSON.stringify(results.slice(0, 60)));
  } catch {
    localStorage.setItem(RESULT_KEY, JSON.stringify([result]));
  }
}

function loadResults() {
  try {
    const saved = JSON.parse(localStorage.getItem(RESULT_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function resultsForGameType(gameType = els.recordGameType.value) {
  return loadResults()
    .filter((result) => result.gameType === gameType)
    .slice(0, 30);
}

function resultKey(result, index) {
  return result.id || result.savedAt || `record-${index}`;
}

function deleteResultByKey(key) {
  const results = loadResults();
  localStorage.setItem(
    RESULT_KEY,
    JSON.stringify(results.filter((result, index) => resultKey(result, index) !== key)),
  );
  renderRecords();
}

function recordAverageForPlayer(player) {
  const savedAverage = Number(player.average);
  if (Number.isFinite(savedAverage)) return savedAverage.toFixed(1);

  const score = Number(player.score || 0);
  const inning = Number(player.inning || player.finishedAtInning || 0);
  if (inning > 0) return (score / inning).toFixed(1);
  return "0.0";
}

function recordHighForPlayer(player) {
  return Number(player.highRun ?? player.high ?? 0);
}

function recordStatsText(player) {
  const averageLabel = state.language === "en" ? "Avg" : "Aver";
  return `High ${recordHighForPlayer(player)} ${averageLabel} ${recordAverageForPlayer(player)}`;
}

function recordStatText(player) {
  return `${displayName(player.name)} ${recordStatsText(player)}`;
}

function restoreScrollablePosition(element, scrollTop) {
  element.scrollTop = Math.min(scrollTop, Math.max(0, element.scrollHeight - element.clientHeight));
}

function renderRecordPlayers(results = resultsForGameType()) {
  const names = [...new Set(results.flatMap((result) => result.players.map((player) => player.name)))];
  const current = els.recordPlayerSelect.value;
  els.recordPlayerSelect.replaceChildren(
    ...names.map((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = displayName(name);
      return option;
    }),
  );
  if (names.includes(current)) els.recordPlayerSelect.value = current;
  else if (names.length) els.recordPlayerSelect.value = names[0];
}

function renderRecords() {
  const previousScrollTop = els.recordList.scrollTop;
  const results = resultsForGameType();
  renderRecordPlayers(results);
  const playerName = els.recordPlayerSelect.value;
  const playerRows = results
    .map((result) => result.players.find((player) => player.name === playerName))
    .filter(Boolean);
  const average =
    playerRows.length === 0
      ? "0.0"
      : (playerRows.reduce((sum, player) => sum + Number(recordAverageForPlayer(player)), 0) / playerRows.length).toFixed(1);

  els.recordAverage.textContent = average;
  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "record-empty";
    empty.textContent = t("savedTwoRecordsEmpty");
    els.recordList.replaceChildren(empty);
    restoreScrollablePosition(els.recordList, previousScrollTop);
    return;
  }

  els.recordList.replaceChildren(
    ...results.map((result) => {
      const row = document.createElement("article");
      const title = document.createElement("div");
      const meta = document.createElement("div");
      const winner = document.createElement("strong");
      const players = document.createElement("div");
      const date = new Date(result.savedAt);

      row.className = "record-row";
      title.className = "record-row-title";
      meta.className = "record-meta";
      players.className = "record-players";
      winner.textContent = `${displayName(result.winner)} ${t("win")}`;
      meta.textContent = `${date.toLocaleDateString(currentLocale())} ${formatDuration(result.duration || 0)} · ${result.inning} inning`;
      title.append(winner, meta);

      result.players.forEach((player) => {
        const item = document.createElement("span");
        const targetText = player.target ? ` (${player.target})` : "";
        item.textContent = `${displayName(player.name)}${targetText} ${recordStatsText(player)}`;
        players.append(item);
      });

      row.append(title, players);
      return row;
    }),
  );
  restoreScrollablePosition(els.recordList, previousScrollTop);
}

function renderRecords() {
  const previousScrollTop = els.recordList.scrollTop;
  const results = resultsForGameType();
  renderRecordPlayers(results);
  const playerName = els.recordPlayerSelect.value;
  const playerRows = results
    .map((result) => result.players.find((player) => player.name === playerName))
    .filter(Boolean);
  const average =
    playerRows.length === 0
      ? "0.0"
      : (playerRows.reduce((sum, player) => sum + Number(recordAverageForPlayer(player)), 0) / playerRows.length).toFixed(1);

  els.recordAverage.textContent = average;
  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "record-empty";
    empty.textContent = t("savedRecordsEmpty");
    els.recordList.replaceChildren(empty);
    restoreScrollablePosition(els.recordList, previousScrollTop);
    return;
  }

  els.recordList.replaceChildren(...results.map(createRecordRow));
  restoreScrollablePosition(els.recordList, previousScrollTop);
}

function createRecordRow(result, index) {
  const row = document.createElement("article");
  const title = document.createElement("div");
  const meta = document.createElement("div");
  const winner = document.createElement("strong");
  const players = document.createElement("div");
  const deleteButton = document.createElement("button");
  const date = new Date(result.savedAt);
  const key = resultKey(result, index);

  row.className = "record-row";
  row.dataset.resultKey = key;
  title.className = "record-row-title";
  meta.className = "record-meta";
  players.className = "record-players";
  deleteButton.className = "record-delete";
  deleteButton.type = "button";
  deleteButton.dataset.deleteResult = key;
  deleteButton.textContent = t("delete");
  deleteButton.setAttribute("aria-label", `${displayName(result.winner)} ${t("recordDeleteAria")}`);
  winner.textContent = `${displayName(result.winner)} ${t("win")}`;
  meta.textContent = `${date.toLocaleDateString(currentLocale())} ${formatDuration(result.duration || 0)} · ${result.inning} inning · ${result.playerCount || result.players.length}${t("peopleSuffix")}`;
  title.append(winner, meta);

  result.players.forEach((player) => {
    const item = document.createElement("span");
    const targetText = player.target ? ` (${player.target})` : "";
    const rankText = player.rank ? ` ${rankTextForRecord(player.rank)}` : "";
    item.textContent = `${displayName(player.name)}${rankText}${targetText} ${recordStatsText(player)}`;
    players.append(item);
  });

  row.append(title, players, deleteButton);
  return row;
}

function rankTextForRecord(rank) {
  if (state.language !== "en") return rank === 1 ? "승" : `${rank}위`;
  if (rank === 1) return "Win";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}th`;
}

function createRecordRow(result, index) {
  const row = document.createElement("article");
  const title = document.createElement("div");
  const standings = document.createElement("strong");
  const meta = document.createElement("div");
  const players = document.createElement("div");
  const deleteButton = document.createElement("button");
  const date = new Date(result.savedAt);
  const key = resultKey(result, index);

  row.className = "record-row";
  row.dataset.resultKey = key;
  title.className = "record-row-title";
  standings.className = "record-standings";
  meta.className = "record-meta";
  players.className = "record-players";
  deleteButton.className = "record-delete";
  deleteButton.type = "button";
  deleteButton.dataset.deleteResult = key;
  deleteButton.textContent = t("delete");
  deleteButton.setAttribute("aria-label", `${displayName(result.winner)} ${t("recordDeleteAria")}`);

  standings.textContent = recordStandingsText(result);
  meta.textContent = `${date.toLocaleDateString(currentLocale())} ${formatDuration(result.duration || 0)} · ${result.inning} inning · ${result.playerCount || result.players.length}${t("peopleSuffix")}`;
  title.append(standings, meta);

  result.players.forEach((player) => {
    const item = document.createElement("span");
    item.textContent = recordStatText(player);
    players.append(item);
  });

  row.append(title, players, deleteButton);
  return row;
}

function recordStandingsText(result) {
  const rankedPlayers = result.players.filter((player) => player.rank).sort((a, b) => a.rank - b.rank);
  if (!rankedPlayers.length) return `${displayName(result.winner)} ${rankTextForRecord(1)}`;
  return rankedPlayers.map((player) => `${displayName(player.name)} ${rankTextForRecord(player.rank)}`).join(", ");
}

function setScreenMode(mode) {
  document.body.classList.toggle("setup-mode", mode === "setup");
  document.body.classList.toggle("records-mode", mode === "records");
  document.body.classList.toggle("score-mode", mode === "score");
}

function showRecords() {
  setPreferredOrientation("portrait");
  setScreenMode("records");
  syncVisualViewport();
  renderRecords();
  renderReturnBoardActions();
  els.setupScreen.classList.add("is-hidden");
  els.scoreScreen.classList.add("is-hidden");
  els.recordsScreen.classList.remove("is-hidden");
}

function showSetup() {
  setPreferredOrientation("portrait");
  setScreenMode("setup");
  syncVisualViewport();
  els.recordsScreen.classList.add("is-hidden");
  els.scoreScreen.classList.add("is-hidden");
  els.setupScreen.classList.remove("is-hidden");
  applyLanguage();
}

function canReturnToBoard() {
  return state.gameStarted && !state.gameEnded;
}

function renderReturnBoardActions() {
  const canReturn = canReturnToBoard();
  els.openBoardButton.textContent = canReturn ? t("returnBoard") : t("startBoard");
  els.openBoardButton.setAttribute("aria-label", canReturn ? t("returnBoard") : t("startBoard"));
  els.returnBoardFromRecordsButton.hidden = !canReturn;
}

function returnToBoard() {
  if (!canReturnToBoard()) return;
  setPreferredOrientation("landscape");
  setScreenMode("score");
  syncVisualViewport();
  els.setupScreen.classList.add("is-hidden");
  els.recordsScreen.classList.add("is-hidden");
  els.scoreScreen.classList.remove("is-hidden");
  renderScoreboard();
  queueScoreGeometrySync();
}

function handleSetupBoardAction() {
  if (canReturnToBoard()) {
    returnToBoard();
    return;
  }
  openBoard();
}

function readSelectedMembers() {
  normalizeSelected();
  const selectedIndexes = state.selected.slice(0, state.playerCount);
  if (selectedIndexes.includes(null) || new Set(selectedIndexes).size !== state.playerCount) {
    if (window.alert) {
      const message =
        state.language === "en"
          ? `Please select ${state.playerCount}${t("choosePlayersAlert")}`
          : `${state.playerCount}${t("choosePlayersAlert")}`;
      window.alert(message);
    }
    return null;
  }
  const members = selectedIndexes.map((index) => state.members[index]);
  if (members.some((member) => !member)) return null;

  return members;
}

function readSelectedPlayers() {
  const members = readSelectedMembers();
  if (!members) return false;
  state.players = members.map(createPlayer);
  return true;
}

function openBoard() {
  setPreferredOrientation("landscape");
  const nextGameType = els.gameType.value;
  const nextPlayerCount = Number(els.playerCount.value);
  const selectedMembers = readSelectedMembers();
  if (!selectedMembers) return;

  endCurrentMatch({ render: false, announce: false });
  state.gameType = nextGameType;
  state.playerCount = nextPlayerCount;
  readFinishSettings();
  state.players = selectedMembers.map(createPlayer);
  saveSettings();
  stopTimer();
  stopMatchTimer();
  state.timeLimit = els.shotLimit.value === "none" ? null : Number(els.shotLimit.value);
  state.gameStarted = false;
  state.gameEnded = false;
  state.resultSaved = false;
  state.elapsed = 0;
  state.matchElapsed = 0;
  state.inning = 1;
  state.active = 0;
  state.history = [];
  setScreenMode("score");
  syncVisualViewport();
  els.setupScreen.classList.add("is-hidden");
  els.scoreScreen.classList.remove("is-hidden");
  renderScoreboard();
  queueScoreGeometrySync();
}

function startMatch() {
  if (state.gameStarted) {
    snapshot();
    endCurrentMatch();
    return;
  }
  if (state.gameEnded) {
    prepareRematch();
    startMatch();
    return;
  }
  snapshot();
  state.gameStarted = true;
  state.gameEnded = false;
  state.resultSaved = false;
  state.active = 0;
  state.inning = 1;
  state.matchElapsed = 0;
  resetTimer(true);
  startMatchTimer();
  renderScoreboard();
}

function endCurrentMatch({ render = true, announce = true } = {}) {
  const winner = state.players.find((player) => player.rank === 1);
  freezeDisplayedBallColors();
  state.gameEnded = true;
  state.gameStarted = false;
  stopTimer();
  stopMatchTimer();
  if (winner && !state.resultSaved) {
    saveMatchResult(winner);
    state.resultSaved = true;
  }
  if (render) renderScoreboard();
  if (announce) speakLocalizedText(t("matchEnded"));
}

function saveRankedResultIfNeeded() {
  const winner = state.players.find((player) => player.rank === 1);
  if (!winner || state.resultSaved) return;
  saveMatchResult(winner);
  state.resultSaved = true;
  state.gameEnded = true;
  state.gameStarted = false;
  stopTimer();
  stopMatchTimer();
}

function prepareRematch() {
  stopTimer();
  stopMatchTimer();
  state.players = state.players.map((player) =>
    createPlayer({
      name: player.name,
      target: player.target,
    }),
  );
  state.gameEnded = false;
  state.gameStarted = false;
  state.resultSaved = false;
  state.inning = 1;
  state.active = 0;
  state.history = [];
  state.elapsed = 0;
  state.matchElapsed = 0;
  renderScoreboard();
}

function goHome() {
  setPreferredOrientation("portrait");
  saveRankedResultIfNeeded();
  setScreenMode("setup");
  syncVisualViewport();
  els.scoreScreen.classList.add("is-hidden");
  els.setupScreen.classList.remove("is-hidden");
  els.recordsScreen.classList.add("is-hidden");
  applyLanguage();
}

function setPreferredOrientation(orientation) {
  preferredOrientation = orientation === "landscape" ? "landscape" : "portrait";
  if (!isPhoneViewport()) return;
  const screenOrientation = screen.orientation;
  if (!screenOrientation?.lock) return;
  const lockTarget = preferredOrientation === "landscape" ? "landscape" : "portrait";
  screenOrientation.lock(lockTarget).catch(() => {});
}

function isPhoneViewport() {
  return currentDeviceMode === "phone";
}

function enforceCurrentOrientation() {
  if (!isPhoneViewport()) return;
  if (!els.scoreScreen.classList.contains("is-hidden")) {
    setPreferredOrientation("landscape");
    return;
  }
  setPreferredOrientation("portrait");
}

function syncVisualViewport() {
  const { width, height } = readViewportSize();
  applyDeviceMode();
  const scoreViewport = readScoreViewportSize(width, height);
  const scoreLongSide = Math.max(scoreViewport.width, scoreViewport.height);
  const scoreShortSide = Math.min(scoreViewport.width, scoreViewport.height);
  document.documentElement.style.setProperty("--viewport-width", `${width}px`);
  document.documentElement.style.setProperty("--viewport-height", `${height}px`);
  document.documentElement.style.setProperty("--score-viewport-width", `${scoreViewport.width}px`);
  document.documentElement.style.setProperty("--score-viewport-height", `${scoreViewport.height}px`);
  document.documentElement.style.setProperty("--score-long-side", `${scoreLongSide}px`);
  document.documentElement.style.setProperty("--score-short-side", `${scoreShortSide}px`);
  syncPhoneScoreGeometry(scoreViewport);
}

function queueScoreGeometrySync() {
  requestAnimationFrame(syncVisualViewport);
  window.setTimeout(syncVisualViewport, 120);
  window.setTimeout(syncVisualViewport, 300);
}

els.addMemberButton.addEventListener("click", saveMemberFromForm);
els.memberName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveMemberFromForm();
});
els.memberTarget.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveMemberFromForm();
});
els.editList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-index]");
  if (editButton) {
    editMember(Number(editButton.dataset.editIndex));
    return;
  }

  const deleteButton = event.target.closest("[data-delete-index]");
  if (deleteButton) {
    deleteMember(Number(deleteButton.dataset.deleteIndex));
    return;
  }

  const pickButton = event.target.closest("[data-pick-index]");
  if (pickButton) pickMember(Number(pickButton.dataset.pickIndex));
});
els.selectionStrip.addEventListener("click", (event) => {
  const swapButton = event.target.closest("[data-swap-slot]");
  if (swapButton) {
    event.stopPropagation();
    swapSelectedSlots(Number(swapButton.dataset.swapSlot));
    return;
  }

  const slotButton = event.target.closest("[data-selection-slot]");
  if (slotButton) selectPlayerSlot(Number(slotButton.dataset.selectionSlot));
});
els.openBoardButton.addEventListener("click", handleSetupBoardAction);
els.openRecordsButton.addEventListener("click", showRecords);
els.returnBoardFromRecordsButton.addEventListener("click", returnToBoard);
els.backToSetupButton.addEventListener("click", showSetup);
els.recordGameType.addEventListener("change", renderRecords);
els.recordPlayerSelect.addEventListener("change", renderRecords);
els.recordList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-result]");
  if (deleteButton) deleteResultByKey(deleteButton.dataset.deleteResult);
});
els.startButton.addEventListener("click", startMatch);
els.turnSwitchButton.addEventListener("click", switchTurn);
els.quickScoreButtons.forEach((button) => {
  button.addEventListener("click", () => scoreActivePlayer(Number(button.dataset.quickScore)));
});
els.homeButton.addEventListener("click", goHome);
els.gameType.addEventListener("change", () => {
  applyDefaultFinishSettings();
  state.gameType = els.gameType.value;
  readFinishSettings();
  saveSettings();
});
els.voiceSelect.addEventListener("change", () => {
  localStorage.setItem(VOICE_KEY, els.voiceSelect.value);
  preferredVoice = null;
  englishVoice = null;
  findPreferredVoice();
  speakScore(1);
});
if (!localStorage.getItem(VOICE_STYLE_KEY)) localStorage.setItem(VOICE_STYLE_KEY, "clear");
els.voiceStyle.value = localStorage.getItem(VOICE_STYLE_KEY) || "clear";
els.voiceStyle.addEventListener("change", () => {
  localStorage.setItem(VOICE_STYLE_KEY, els.voiceStyle.value);
  speakScore(1);
});
els.warningSound.value = localStorage.getItem(WARNING_SOUND_KEY) || "on";
els.warningSound.addEventListener("change", () => {
  localStorage.setItem(WARNING_SOUND_KEY, els.warningSound.value);
  saveSettings();
  if (els.warningSound.value !== "off") playWarningSound(false);
});
els.languageSelect.addEventListener("change", () => {
  state.language = els.languageSelect.value === "en" ? "en" : "ko";
  localStorage.setItem(LANGUAGE_KEY, state.language);
  preferredVoice = null;
  englishVoice = null;
  saveSettings();
  applyLanguage();
});
els.playerCount.addEventListener("change", () => {
  state.playerCount = Number(els.playerCount.value);
  normalizeSelected();
  applyDefaultFinishSettings();
  readFinishSettings();
  saveSettings();
  renderMembers();
});
els.shotLimit.addEventListener("change", saveSettings);
els.finishThreeC.addEventListener("change", () => {
  renderFinishCustomInput(els.finishThreeC, els.finishThreeCCustom, true);
  readFinishSettings();
  saveSettings();
});
els.finishBank.addEventListener("change", () => {
  renderFinishCustomInput(els.finishBank, els.finishBankCustom, true);
  readFinishSettings();
  saveSettings();
});
els.finishThreeCCustom.addEventListener("change", () => commitFinishCustomInput(els.finishThreeC, els.finishThreeCCustom));
els.finishBankCustom.addEventListener("change", () => commitFinishCustomInput(els.finishBank, els.finishBankCustom));
els.timerButton.addEventListener("click", () => {
  if (!state.gameStarted || state.gameEnded) return;
  if (state.timerId) stopTimer();
  else startTimer();
});
els.undoButton.addEventListener("click", () => {
  const previous = state.history.pop();
  if (previous) restore(previous);
});
els.inningUpButton.addEventListener("click", () => adjustInning(1));
els.inningDownButton.addEventListener("click", () => adjustInning(-1));
els.scoreBoard.addEventListener("click", (event) => {
  const scoreButton = event.target.closest("[data-score-index]");
  if (scoreButton) {
    handleScoreTouch(Number(scoreButton.dataset.scoreIndex));
    return;
  }

  const turnButton = event.target.closest("[data-turn-index]");
  if (turnButton) reduceTurn(Number(turnButton.dataset.turnIndex));
});
function handleViewportChange() {
  syncVisualViewport();
  enforceCurrentOrientation();
  if (!els.scoreScreen.classList.contains("is-hidden")) {
    queueScoreGeometrySync();
    renderScoreboard();
  } else if (!els.setupScreen.classList.contains("is-hidden")) applyLanguage();
}

let lockedScrollTouchY = 0;

function lockedScreenScrollTarget(target) {
  if (!els.recordsScreen.classList.contains("is-hidden")) return target.closest(".record-list");
  if (!els.setupScreen.classList.contains("is-hidden")) return target.closest(".edit-list");
  return null;
}

function handleLockedScreenTouchStart(event) {
  lockedScrollTouchY = event.touches?.[0]?.clientY || 0;
}

function handleLockedScreenTouchMove(event) {
  if (els.recordsScreen.classList.contains("is-hidden") && els.setupScreen.classList.contains("is-hidden")) return;
  const scrollTarget = lockedScreenScrollTarget(event.target);
  if (!scrollTarget) {
    event.preventDefault();
    return;
  }

  const currentY = event.touches?.[0]?.clientY || lockedScrollTouchY;
  const deltaY = currentY - lockedScrollTouchY;
  lockedScrollTouchY = currentY;
  const atTop = scrollTarget.scrollTop <= 0;
  const atBottom = scrollTarget.scrollTop + scrollTarget.clientHeight >= scrollTarget.scrollHeight - 1;
  if (scrollTarget.scrollHeight <= scrollTarget.clientHeight || (deltaY > 0 && atTop) || (deltaY < 0 && atBottom)) {
    event.preventDefault();
  }
}

window.addEventListener("resize", handleViewportChange);
window.addEventListener("orientationchange", () => window.setTimeout(handleViewportChange, 120));
window.visualViewport?.addEventListener("resize", handleViewportChange);
window.visualViewport?.addEventListener("scroll", syncVisualViewport);
document.addEventListener("touchstart", handleLockedScreenTouchStart, { passive: true });
document.addEventListener("touchmove", handleLockedScreenTouchMove, { passive: false });

if ("speechSynthesis" in window) {
  renderVoiceOptions();
  window.speechSynthesis.addEventListener("voiceschanged", renderVoiceOptions);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

syncVisualViewport();
loadMembers();
loadSettings();
state.players = state.selected.slice(0, state.playerCount).map((index) => createPlayer(state.members[index] || DEFAULT_MEMBERS[0]));
setScreenMode("setup");
renderAppVersion();
applyLanguage();
enforceCurrentOrientation();


