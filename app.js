const MEMBER_KEY = "billiards-members-v1";
const RESULT_KEY = "billiards-results-v1";
const SETTINGS_KEY = "billiards-settings-v1";
const VOICE_KEY = "billiards-voice-v1";
const VOICE_STYLE_KEY = "billiards-voice-style-v1";
const WARNING_SOUND_KEY = "billiards-warning-sound-v1";
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

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let audioContext = null;
let preferredVoice = null;

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
  backToSetupButton: $("#backToSetupButton"),
  recordGameType: $("#recordGameType"),
  recordPlayerSelect: $("#recordPlayerSelect"),
  recordAverage: $("#recordAverage"),
  recordList: $("#recordList"),
  gameType: $("#gameType"),
  playerCount: $("#playerCount"),
  shotLimit: $("#shotLimit"),
  warningSound: $("#warningSound"),
  voiceSelect: $("#voiceSelect"),
  voiceStyle: $("#voiceStyle"),
  finishThreeCField: $("#finishThreeCField"),
  finishThreeC: $("#finishThreeC"),
  finishBank: $("#finishBank"),
  timerButton: $("#timerButton"),
  timerValue: $("#timerValue"),
  matchTimerValue: $("#matchTimerValue"),
  limitChip: $("#limitChip"),
  inningValue: $("#inningValue"),
  inningUpButton: $("#inningUpButton"),
  inningDownButton: $("#inningDownButton"),
  startButton: $("#startButton"),
  turnSwitchButton: $("#turnSwitchButton"),
  homeButton: $("#homeButton"),
  undoButton: $("#undoButton"),
  scoreBoard: $("#scoreBoard"),
  winnerDialog: $("#winnerDialog"),
  winnerTitle: $("#winnerTitle"),
  winnerText: $("#winnerText"),
};

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
  if (Array.isArray(settings.selected)) state.selected = settings.selected.map((index) => (Number.isInteger(index) ? index : null));
  state.nextPick = Number.isInteger(settings.nextPick) ? settings.nextPick : state.nextPick;

  els.gameType.value = gameType;
  els.playerCount.value = String(playerCount);
  els.shotLimit.value = settings.shotLimit || "none";
  els.finishThreeC.value = settings.finish?.threeC ?? (gameType === "four-ball" ? "1" : "0");
  els.finishBank.value = settings.finish?.bank ?? "0";

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
        threeC: Math.max(0, Number(els.finishThreeC.value) || 0),
        bank: Math.max(0, Number(els.finishBank.value) || 0),
      },
      shotLimit: els.shotLimit.value,
      selected: state.selected.slice(0, Math.max(state.playerCount, state.selected.length)),
      nextPick: state.nextPick,
    }),
  );
}

function selectionText(slot) {
  const member = state.members[state.selected[slot]];
  return member ? `${member.name} ${member.target}` : "선택 없음";
}

function appendNameTarget(parent, member) {
  const name = document.createElement("span");
  const target = document.createElement("span");
  name.className = "member-label-name";
  target.className = "member-label-target";
  name.textContent = member.name;
  target.textContent = member.target;
  parent.replaceChildren(name, target);
}

function renderSelections() {
  els.selectionStrip.replaceChildren(
    ...Array.from({ length: state.playerCount }, (_, slot) => {
      const item = document.createElement("button");
      const label = document.createElement("span");
      const value = document.createElement("strong");
      const member = state.members[state.selected[slot]];

      item.type = "button";
      item.className = "selection-card";
      item.classList.toggle("is-picking", state.nextPick === slot);
      item.dataset.selectionSlot = String(slot);
      item.setAttribute("aria-label", `선수${slot + 1} 박스 선택`);
      label.textContent = `선수${slot + 1}`;
      if (member) appendNameTarget(value, member);
      else value.textContent = selectionText(slot);
      item.append(label, value);
      return item;
    }),
  );
}

function renderMembers() {
  normalizeSelected();
  els.memberCount.textContent = `${state.members.length}`;
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
      pick.setAttribute("aria-label", `${member.name} 선택`);

      badge.className = "selection-badge";
      badge.textContent = selectedSlot > -1 ? String(selectedSlot + 1) : "";

      edit.type = "button";
      edit.className = "edit-button";
      edit.dataset.editIndex = String(index);
      edit.textContent = "편집";
      edit.setAttribute("aria-label", `${member.name} 편집`);

      remove.type = "button";
      remove.className = "delete-button";
      remove.dataset.deleteIndex = String(index);
      remove.textContent = "삭제";
      remove.setAttribute("aria-label", `${member.name} 삭제`);

      row.append(pick, badge, edit, remove);
      return row;
    }),
  );
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
  els.addMemberButton.textContent = "등록";
  saveMembers();
  renderMembers();
}

function editMember(index) {
  const member = state.members[index];
  if (!member) return;
  state.editIndex = index;
  els.memberName.value = member.name;
  els.memberTarget.value = member.target;
  els.addMemberButton.textContent = "수정";
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
    threeC: state.gameType === "four-ball" ? Math.max(0, Number(els.finishThreeC.value) || 0) : 0,
    bank: Math.max(0, Number(els.finishBank.value) || 0),
  };
}

function renderFinishOptions() {
  const isFourBall = els.gameType.value === "four-ball";
  els.finishThreeC.disabled = !isFourBall;
  els.finishThreeCField.classList.toggle("is-disabled", !isFourBall);
}

function applyDefaultFinishSettings() {
  const isFourBall = els.gameType.value === "four-ball";
  els.finishThreeC.value = isFourBall ? "1" : "0";
  els.finishBank.value = "0";
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

function findPreferredVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const selectedVoiceURI = localStorage.getItem(VOICE_KEY);
  if (selectedVoiceURI === "off") return null;
  if (selectedVoiceURI && selectedVoiceURI !== "auto") {
    preferredVoice = voices.find((voice) => voice.voiceURI === selectedVoiceURI) || null;
    if (preferredVoice) return preferredVoice;
  }
  const koreanVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("ko"));
  const femaleHints = ["female", "woman", "yuna", "sora", "narae", "유나", "소라", "나래", "여성"];
  preferredVoice =
    koreanVoices.find((voice) => femaleHints.some((hint) => voice.name.toLowerCase().includes(hint))) ||
    koreanVoices[0] ||
    voices.find((voice) => femaleHints.some((hint) => voice.name.toLowerCase().includes(hint))) ||
    null;
  return preferredVoice;
}

function renderVoiceOptions() {
  if (!("speechSynthesis" in window) || !els.voiceSelect) return;
  const voices = window.speechSynthesis.getVoices();
  const current = localStorage.getItem(VOICE_KEY) || "auto";
  const sortedVoices = voices
    .slice()
    .sort((a, b) => Number(b.lang.toLowerCase().startsWith("ko")) - Number(a.lang.toLowerCase().startsWith("ko")));

  els.voiceSelect.replaceChildren(
    new Option("없음", "off"),
    new Option("자동 선택", "auto"),
    ...sortedVoices.map((voice) => new Option(`${voice.name} (${voice.lang})`, voice.voiceURI)),
  );
  els.voiceSelect.value = [...els.voiceSelect.options].some((option) => option.value === current) ? current : "auto";
  findPreferredVoice();
}

function speakScore(score) {
  speakText(`${score}점`, "ko-KR");
}

function speakPenaltyScore(score, wasPositiveRun) {
  if (wasPositiveRun) {
    speakText(`마이너스 일, ${score}점`, "ko-KR");
    return;
  }

  speakScore(score);
}

function koreanCount(value) {
  const number = Math.max(0, Number(value) || 0);
  const native = [
    "영",
    "하나",
    "둘",
    "셋",
    "넷",
    "다섯",
    "여섯",
    "일곱",
    "여덟",
    "아홉",
    "열",
    "열하나",
    "열둘",
    "열셋",
    "열넷",
    "열다섯",
    "열여섯",
    "열일곱",
    "열여덟",
    "열아홉",
  ];
  if (native[number]) return native[number];
  if (number < 30) return `스물 ${native[number - 20]}`;
  if (number < 40) return `서른 ${native[number - 30] || ""}`.trim();
  if (number < 50) return `마흔 ${native[number - 40] || ""}`.trim();
  if (number < 60) return `쉰 ${native[number - 50] || ""}`.trim();
  return String(number);
}

function speakText(text, lang = "ko-KR") {
  if (!("speechSynthesis" in window)) return;
  if (localStorage.getItem(VOICE_KEY) === "off") return;
  window.speechSynthesis.cancel();
  const style = VOICE_STYLES[localStorage.getItem(VOICE_STYLE_KEY)] || VOICE_STYLES.calm;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.voice = preferredVoice || findPreferredVoice();
  utterance.rate = style.rate;
  utterance.pitch = style.pitch;
  window.speechSynthesis.speak(utterance);
}

function speakTurn() {
  if (localStorage.getItem(VOICE_KEY) === "off") {
    playTurnSound();
    return;
  }
  speakText("TURN", "en-US");
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
  els.limitChip.textContent = state.timeLimit ? `제한 ${state.timeLimit}초` : "제한 없음";
  els.startButton.disabled = state.gameStarted;
  els.startButton.textContent = state.gameEnded ? "재경기" : state.gameStarted ? "경기중" : "경기시작";
  els.undoButton.disabled = state.gameEnded;
  els.turnSwitchButton.disabled = state.gameEnded;
  els.inningUpButton.disabled = state.gameEnded;
  els.inningDownButton.disabled = state.gameEnded || state.inning <= 1;
  els.scoreScreen.classList.toggle("is-ended", state.gameEnded);

  els.scoreBoard.dataset.players = String(state.players.length);
  els.scoreBoard.replaceChildren(...state.players.map(createPlayerCard));
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
  card.classList.toggle("is-active", index === state.active);
  card.classList.toggle("is-winner", player.status === "win");
  card.dataset.player = String(index);

  top.className = "player-topline";
  target.className = "target";
  target.textContent = player.target;
  name.type = "button";
  name.className = "name-button";
  name.textContent = player.name;
  top.append(target, name);

  scoreBox.type = "button";
  scoreBox.className = isYellowBall(player, index) ? "score-box yellow" : "score-box";
  scoreBox.dataset.scoreIndex = String(index);
  scoreBox.disabled = state.gameEnded || player.status === "win";
  scoreBox.setAttribute("aria-label", `${player.name} 점수`);
  scoreContent.className = "score-content";
  score.textContent = scoreText(player);
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
  button.setAttribute("aria-label", `${player.name} 이닝스코어 1점 빼기`);
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
      speakText("Three cushion", "en-US");
      return;
    }
    if (player.status === "bank") {
      speakText("뱅크샷입니다");
      return;
    }
  }

  if (player.status === "threeC") {
    speakText(`${player.finish.threeC}개 남았습니다`);
    return;
  }

  if (player.status === "bank") {
    speakText(`${player.finish.bank}개 남았습니다`);
    return;
  }

  const remaining = player.target - player.score;
  if (remaining === 10 || remaining === 5 || (remaining > 0 && remaining <= 3)) {
    speakText(`${remaining}점 남았습니다`);
    return;
  }

  speakScore(player.turn);
}

function isYellowBall(player, index) {
  if (player.status === "win") return false;
  if (state.players.length === 3 && !hasRankedWinner()) {
    return yellowByOriginalRule(index, state.players.length);
  }
  if (typeof player.ballYellow === "boolean") return player.ballYellow;
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

function beginTurn(playerIndex, { adjustBallColor = true, followPreviousColor = false } = {}) {
  const currentIndex = state.active;
  const current = state.players[currentIndex];
  const next = state.players[playerIndex];
  const previousColor =
    current && typeof current.ballYellow === "boolean" ? current.ballYellow : current ? isYellowBall(current, currentIndex) : null;
  const preservedNextColor =
    !adjustBallColor && next && next.status !== "win" ? isYellowBall(next, playerIndex) : null;
  if (current && current.status !== "win") {
    if (typeof current.ballYellow !== "boolean") current.ballYellow = previousColor;
    current.runs.push(current.turn);
    current.turn = 0;
    recalcHigh(current);
  }
  const inningChanged = playerIndex <= currentIndex;
  if (inningChanged) state.inning += 1;
  state.active = playerIndex;
  adjustTurnBallColor(next, playerIndex, previousColor, preservedNextColor, adjustBallColor && inningChanged, followPreviousColor);
  resetTimer(true);
}

function adjustTurnBallColor(player, index, previousColor, preservedColor, shouldAdjust, followPreviousColor) {
  if (!player || player.status === "win" || !hasRankedWinner()) return;
  if (followPreviousColor && typeof previousColor === "boolean") {
    player.ballYellow = !previousColor;
    return;
  }
  if (typeof preservedColor === "boolean") {
    player.ballYellow = preservedColor;
    return;
  }

  if (shouldAdjust) {
    normalizeRemainingBallColors(index, previousColor);
    return;
  }

  const nextColor = isYellowBall(player, index);
  if (typeof player.ballYellow !== "boolean") player.ballYellow = nextColor;
}

function hasRankedWinner() {
  return state.players.some((player) => player.rank);
}

function normalizeRemainingBallColors(startIndex, previousColor) {
  const activeOrder = orderedActivePlayersFrom(startIndex);
  if (!activeOrder.length) return;

  const first = activeOrder[0];
  const firstIndex = state.players.indexOf(first);
  let nextColor = isYellowBall(first, firstIndex);
  if (typeof previousColor === "boolean" && nextColor === previousColor) nextColor = !previousColor;

  activeOrder.forEach((player, orderIndex) => {
    player.ballYellow = orderIndex % 2 === 0 ? nextColor : !nextColor;
  });
}

function orderedActivePlayersFrom(index) {
  const ordered = [];
  for (let step = 0; step < state.players.length; step += 1) {
    const player = state.players[(index + step) % state.players.length];
    if (player?.status !== "win") ordered.push(player);
  }
  return ordered;
}

function nextPlayerIndex(fromIndex = state.active) {
  for (let step = 1; step <= state.players.length; step += 1) {
    const nextIndex = (fromIndex + step) % state.players.length;
    if (state.players[nextIndex]?.status !== "win") return nextIndex;
  }

  return fromIndex;
}

function handleScoreTouch(playerIndex) {
  if (!state.gameStarted || state.gameEnded) return;
  if (state.players[playerIndex].status === "win") return;
  snapshot();
  if (playerIndex !== state.active) {
    beginTurn(playerIndex);
    speakTurn();
  } else {
    const before = scoreSnapshot(state.players[playerIndex]);
    const previousColor = isYellowBall(state.players[playerIndex], playerIndex);
    addScore(playerIndex, 1);
    if (state.players[playerIndex].status === "win") state.players[playerIndex].ballYellow = previousColor;
    announceScoreState(state.players[playerIndex], before);
    if (!state.gameEnded) resetTimer(true);
  }
  renderScoreboard();
  checkWinnerForRankedPlay(state.players[playerIndex]);
}

function switchTurn() {
  if (state.gameEnded) return;
  if (!state.gameStarted) {
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
  speakText(`경기종료 ${player.name} 님이 승리하였습니다`);
  if (!els.winnerDialog.showModal) return;
  els.winnerTitle.textContent = `${player.name} 승리`;
  els.winnerText.textContent = "";
  els.winnerDialog.showModal();
}

function checkWinnerForRankedPlay(player) {
  if (player.status !== "win") return;
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
  } else if (state.players[state.active] === player) {
    beginTurn(nextPlayerIndex(state.active), { adjustBallColor: false, followPreviousColor: true });
  }

  renderScoreboard();
  playVictorySound();
  speakText(`${player.name} 승리`);
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

function renderRecordPlayers(results = resultsForGameType()) {
  const names = [...new Set(results.flatMap((result) => result.players.map((player) => player.name)))];
  const current = els.recordPlayerSelect.value;
  els.recordPlayerSelect.replaceChildren(
    ...names.map((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      return option;
    }),
  );
  if (names.includes(current)) els.recordPlayerSelect.value = current;
  else if (names.length) els.recordPlayerSelect.value = names[0];
}

function renderRecords() {
  const results = resultsForGameType();
  renderRecordPlayers(results);
  const playerName = els.recordPlayerSelect.value;
  const playerRows = results
    .map((result) => result.players.find((player) => player.name === playerName))
    .filter(Boolean);
  const average =
    playerRows.length === 0
      ? "0.0"
      : (playerRows.reduce((sum, player) => sum + Number(player.average || 0), 0) / playerRows.length).toFixed(1);

  els.recordAverage.textContent = average;
  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "record-empty";
    empty.textContent = "저장된 2인 경기 기록이 없습니다.";
    els.recordList.replaceChildren(empty);
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
      winner.textContent = `${result.winner} 승리`;
      meta.textContent = `${date.toLocaleDateString("ko-KR")} ${formatDuration(result.duration || 0)} · ${result.inning} inning`;
      title.append(winner, meta);

      result.players.forEach((player) => {
        const item = document.createElement("span");
        const targetText = player.target ? ` (${player.target})` : "";
        item.textContent = `${player.name}${targetText} High ${player.highRun} Aver ${player.average}`;
        players.append(item);
      });

      row.append(title, players);
      return row;
    }),
  );
}

function renderRecords() {
  const results = resultsForGameType();
  renderRecordPlayers(results);
  const playerName = els.recordPlayerSelect.value;
  const playerRows = results
    .map((result) => result.players.find((player) => player.name === playerName))
    .filter(Boolean);
  const average =
    playerRows.length === 0
      ? "0.0"
      : (playerRows.reduce((sum, player) => sum + Number(player.average || 0), 0) / playerRows.length).toFixed(1);

  els.recordAverage.textContent = average;
  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "record-empty";
    empty.textContent = "저장된 경기 기록이 없습니다.";
    els.recordList.replaceChildren(empty);
    return;
  }

  els.recordList.replaceChildren(...results.map(createRecordRow));
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
  deleteButton.textContent = "삭제";
  deleteButton.setAttribute("aria-label", `${result.winner} 기록 삭제`);
  winner.textContent = `${result.winner} 승리`;
  meta.textContent = `${date.toLocaleDateString("ko-KR")} ${formatDuration(result.duration || 0)} · ${result.inning} inning · ${result.playerCount || result.players.length}인`;
  title.append(winner, meta);

  result.players.forEach((player) => {
    const item = document.createElement("span");
    const targetText = player.target ? ` (${player.target})` : "";
    const rankText = player.rank ? ` ${rankTextForRecord(player.rank)}` : "";
    item.textContent = `${player.name}${rankText}${targetText} High ${player.highRun} Aver ${player.average}`;
    players.append(item);
  });

  row.append(title, players, deleteButton);
  return row;
}

function rankTextForRecord(rank) {
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
  deleteButton.textContent = "삭제";
  deleteButton.setAttribute("aria-label", `${result.winner} 기록 삭제`);

  standings.textContent = recordStandingsText(result);
  meta.textContent = `${date.toLocaleDateString("ko-KR")} ${formatDuration(result.duration || 0)} · ${result.inning} inning · ${result.playerCount || result.players.length}인`;
  title.append(standings, meta);

  result.players.forEach((player) => {
    const item = document.createElement("span");
    item.textContent = `${player.name} High ${player.highRun} Aver ${player.average}`;
    players.append(item);
  });

  row.append(title, players, deleteButton);
  return row;
}

function recordStandingsText(result) {
  const rankedPlayers = result.players.filter((player) => player.rank).sort((a, b) => a.rank - b.rank);
  if (!rankedPlayers.length) return `${result.winner} Win`;
  return rankedPlayers.map((player) => `${player.name}${rankTextForRecord(player.rank)}`).join(", ");
}

function showRecords() {
  setPreferredOrientation("portrait");
  document.body.classList.remove("score-mode");
  syncVisualViewport();
  renderRecords();
  els.setupScreen.classList.add("is-hidden");
  els.scoreScreen.classList.add("is-hidden");
  els.recordsScreen.classList.remove("is-hidden");
}

function showSetup() {
  setPreferredOrientation("portrait");
  document.body.classList.remove("score-mode");
  syncVisualViewport();
  els.recordsScreen.classList.add("is-hidden");
  els.scoreScreen.classList.add("is-hidden");
  els.setupScreen.classList.remove("is-hidden");
  renderMembers();
}

function readSelectedPlayers() {
  normalizeSelected();
  const selectedIndexes = state.selected.slice(0, state.playerCount);
  if (selectedIndexes.includes(null) || new Set(selectedIndexes).size !== state.playerCount) {
    if (window.alert) window.alert(`${state.playerCount}명의 선수를 선택해 주세요.`);
    return false;
  }
  const members = selectedIndexes.map((index) => state.members[index]);
  if (members.some((member) => !member)) return false;

  state.players = members.map(createPlayer);
  return true;
}

function openBoard() {
  setPreferredOrientation("landscape");
  state.gameType = els.gameType.value;
  state.playerCount = Number(els.playerCount.value);
  readFinishSettings();
  if (!readSelectedPlayers()) return;
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
  document.body.classList.add("score-mode");
  syncVisualViewport();
  els.setupScreen.classList.add("is-hidden");
  els.scoreScreen.classList.remove("is-hidden");
  renderScoreboard();
  requestAnimationFrame(syncVisualViewport);
}

function startMatch() {
  if (state.gameStarted) return;
  if (state.gameEnded) {
    prepareRematch();
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
  stopTimer();
  stopMatchTimer();
  document.body.classList.remove("score-mode");
  syncVisualViewport();
  els.scoreScreen.classList.add("is-hidden");
  els.setupScreen.classList.remove("is-hidden");
  els.recordsScreen.classList.add("is-hidden");
  state.gameStarted = false;
  state.gameEnded = false;
  state.resultSaved = false;
  renderMembers();
}

function setPreferredOrientation(orientation) {
  const screenOrientation = screen.orientation;
  if (!screenOrientation?.lock) return;
  const lockTarget = orientation === "landscape" ? "landscape" : "portrait";
  screenOrientation.lock(lockTarget).catch(() => {});
}

function syncVisualViewport() {
  const viewport = window.visualViewport;
  const width = Math.round(viewport?.width || window.innerWidth || document.documentElement.clientWidth);
  const height = Math.round(viewport?.height || window.innerHeight || document.documentElement.clientHeight);
  document.documentElement.style.setProperty("--viewport-width", `${width}px`);
  document.documentElement.style.setProperty("--viewport-height", `${height}px`);
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
  const slotButton = event.target.closest("[data-selection-slot]");
  if (slotButton) selectPlayerSlot(Number(slotButton.dataset.selectionSlot));
});
els.openBoardButton.addEventListener("click", openBoard);
els.openRecordsButton.addEventListener("click", showRecords);
els.backToSetupButton.addEventListener("click", showSetup);
els.recordGameType.addEventListener("change", renderRecords);
els.recordPlayerSelect.addEventListener("change", renderRecords);
els.recordList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-result]");
  if (deleteButton) deleteResultByKey(deleteButton.dataset.deleteResult);
});
els.startButton.addEventListener("click", startMatch);
els.turnSwitchButton.addEventListener("click", switchTurn);
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
  findPreferredVoice();
  speakScore(1);
});
els.voiceStyle.value = localStorage.getItem(VOICE_STYLE_KEY) || "calm";
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
  readFinishSettings();
  saveSettings();
});
els.finishBank.addEventListener("change", () => {
  readFinishSettings();
  saveSettings();
});
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
window.addEventListener("resize", syncVisualViewport);
window.visualViewport?.addEventListener("resize", syncVisualViewport);
window.visualViewport?.addEventListener("scroll", syncVisualViewport);

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
renderMembers();
renderScoreboard();
