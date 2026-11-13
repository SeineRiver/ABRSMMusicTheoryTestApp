import { state } from './state.js';

const TIMER_SECONDS = 20;
const PREFERENCES_STORAGE_KEY = 'abrsm-music-theory-quiz-preferences-v1';
const PRACTICE_HISTORY_STORAGE_KEY = 'abrsm-music-theory-quiz-history-v1';
const MAX_LOCAL_SESSIONS = 100;
const MAX_LOCAL_ATTEMPTS = 5000;
const MAX_SYNC_ATTEMPTS = 2000;
const QUESTION_COUNT_OPTIONS = Object.freeze([5, 10, 15]);
const DEFAULT_QUESTION_COUNT = 15;
const authState = { idToken: null, userId: null, email: null, name: null, lastSync: null, googleReady: false };
const authUi = { renderAuthState() {}, setAuthMessage() {} };

function configureAuthUI(callbacks = {}) {
  if (typeof callbacks.renderAuthState === 'function') authUi.renderAuthState = callbacks.renderAuthState;
  if (typeof callbacks.setAuthMessage === 'function') authUi.setAuthMessage = callbacks.setAuthMessage;
}

function loadPreferences() {
  try {
    const value = JSON.parse(window.localStorage.getItem(PREFERENCES_STORAGE_KEY) || '{}');
    const validCategories = ['terms', 'intervals', 'pitches', 'tonic-triads', 'time-signatures', 'key-signatures'];
    const category = validCategories.includes(value.category) ? value.category : 'terms';
    const grade = Number.isInteger(value.grade) && value.grade >= 1 && value.grade <= 5 ? value.grade : 3;
    const storedQuestionCount = Number(value.questionCount ?? value.questionCounts?.[category] ?? value.questionCounts?.terms);
    const questionCount = QUESTION_COUNT_OPTIONS.includes(storedQuestionCount) ? storedQuestionCount : DEFAULT_QUESTION_COUNT;
    return { category, grade, timerEnabled: Boolean(value.timerEnabled), practiceMode: Boolean(value.practiceMode), questionCount };
  } catch (error) {
    return { category: 'terms', grade: 3, timerEnabled: false, practiceMode: false, questionCount: DEFAULT_QUESTION_COUNT };
  }
}

function savePreferences() {
  try {
    window.localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify({
      category: state.category,
      grade: state.grade,
      timerEnabled: state.timerEnabled,
      practiceMode: state.practiceMode,
      questionCount: state.questionCount,
    }));
  } catch (error) {
    // The quiz continues normally when browser storage is unavailable.
  }
}

function createLocalId(prefix) {
  const uuid = window.crypto?.randomUUID?.();
  return `${prefix}-${uuid || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`}`;
}

function loadPracticeHistory() {
  try {
    const value = JSON.parse(window.localStorage.getItem(PRACTICE_HISTORY_STORAGE_KEY) || '{}');
    return {
      version: 1,
      ownerId: typeof value.ownerId === 'string' ? value.ownerId : null,
      sessions: Array.isArray(value.sessions) ? value.sessions : [],
      attempts: Array.isArray(value.attempts) ? value.attempts : [],
    };
  } catch (error) {
    return { version: 1, ownerId: null, sessions: [], attempts: [] };
  }
}

const practiceHistory = loadPracticeHistory();
let historySyncTimer = null;

function historyEndpoint(suffix) {
  const endpoint = window.ABRSM_HISTORY_API_URL;
  if (!endpoint) return null;
  try {
    const url = new URL(endpoint, window.location.href);
    if (!/\/api\/v1\/history\/sync\/?$/i.test(url.pathname)) return null;
    url.pathname = url.pathname.replace(/\/history\/sync\/?$/i, suffix);
    return url.toString();
  } catch (error) {
    return null;
  }
}

function decodeJwtPayloadForDisplay(token) {
  try {
    const segment = token.split('.')[1];
    const normalized = segment.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(segment.length / 4) * 4, '=');
    return JSON.parse(window.atob(normalized));
  } catch (error) {
    return null;
  }
}

function savePracticeHistory() {
  try {
    practiceHistory.version = 1;
    practiceHistory.sessions = practiceHistory.sessions
      .sort((a, b) => recordTimestamp(b, ['startedAt']) - recordTimestamp(a, ['startedAt'])).slice(0, MAX_LOCAL_SESSIONS);
    practiceHistory.attempts = practiceHistory.attempts
      .sort((a, b) => recordTimestamp(b, ['attemptedAt']) - recordTimestamp(a, ['attemptedAt'])).slice(0, MAX_LOCAL_ATTEMPTS);
    window.localStorage.setItem(PRACTICE_HISTORY_STORAGE_KEY, JSON.stringify(practiceHistory));
  } catch (error) {
    // Practice continues normally if browser storage is unavailable or full.
  }
  window.dispatchEvent?.(new Event('abrsm-history-changed'));
}

let historySyncQueue = Promise.resolve();
function syncPracticeHistory(endpoint = window.ABRSM_HISTORY_API_URL, userId = window.ABRSM_HISTORY_USER_ID) {
  // Keep an older upload from finishing after a newer session summary.
  const pending = historySyncQueue.then(() => uploadPracticeHistory(endpoint, userId));
  historySyncQueue = pending.catch(() => {});
  return pending;
}

async function uploadPracticeHistory(endpoint, userId) {
  if (!endpoint || typeof window.fetch !== 'function') return { synced: false, reason: 'not-configured' };
  const headers = { 'Content-Type': 'application/json' };
  const token = authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  else if (userId) headers['X-User-Id'] = userId;
  else return { synced: false, reason: 'not-authenticated' };
  // The API accepts 2,000 attempts per request. Send every retained attempt,
  // including older offline work, rather than silently dropping the tail.
  const ownerId = practiceHistory.ownerId;
  const sessions = [...practiceHistory.sessions];
  const attempts = [...practiceHistory.attempts];
  let syncedSessions = 0;
  let syncedAttempts = 0;
  try {
    for (let offset = 0; offset < Math.max(attempts.length, 1); offset += MAX_SYNC_ATTEMPTS) {
      if (ownerId !== practiceHistory.ownerId || token !== (authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN)) {
        return { synced: false, reason: 'account-changed' };
      }
      const response = await window.fetch(endpoint, {
        method: 'POST', headers,
        body: JSON.stringify({ version: 1, sessions: offset === 0 ? sessions : [], attempts: attempts.slice(offset, offset + MAX_SYNC_ATTEMPTS) }),
      });
      if (!response.ok) return { synced: false, status: response.status };
      const result = await response.json();
      syncedSessions += Number(result.syncedSessions) || 0;
      syncedAttempts += Number(result.syncedAttempts) || 0;
    }
    if (ownerId !== practiceHistory.ownerId || token !== (authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN)) {
      return { synced: false, reason: 'account-changed' };
    }
    authState.lastSync = new Date().toISOString();
    window.dispatchEvent?.(new Event('abrsm-history-changed'));
    return { synced: true, syncedSessions, syncedAttempts };
  } catch (error) {
    return { synced: false, reason: 'network-error' };
  }
}

function schedulePracticeHistorySync() {
  if (!window.ABRSM_HISTORY_API_URL || (!authState.idToken && !window.ABRSM_HISTORY_AUTH_TOKEN && !window.ABRSM_HISTORY_USER_ID)) return;
  if (historySyncTimer !== null) window.clearTimeout(historySyncTimer);
  historySyncTimer = window.setTimeout(() => {
    historySyncTimer = null;
    syncPracticeHistory().catch(() => {});
  }, 250);
}

async function fetchRemotePracticeHistory() {
  const endpoint = historyEndpoint('/history');
  const token = authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN;
  const devUserId = window.ABRSM_HISTORY_USER_ID;
  if (!endpoint || (!token && !devUserId)) return { ok: false, reason: 'not-configured' };
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : { 'X-User-Id': devUserId };
    const response = await window.fetch(endpoint, { headers });
    if (!response.ok) return { ok: false, status: response.status };
    const value = await response.json();
    return {
      ok: true,
      sessions: Array.isArray(value.sessions) ? value.sessions : [],
      attempts: Array.isArray(value.attempts) ? value.attempts : [],
    };
  } catch (error) {
    return { ok: false, reason: 'network-error' };
  }
}

function recordTimestamp(record, fields) {
  for (const field of fields) {
    const value = record?.[field];
    if (value) {
      const timestamp = Date.parse(value);
      if (!Number.isNaN(timestamp)) return timestamp;
    }
  }
  return 0;
}

function mergeHistoryRecords(localRecords, remoteRecords, timestampFields) {
  const merged = new Map(remoteRecords.map((record) => [record.id, record]));
  localRecords.forEach((record) => {
    const existing = merged.get(record.id);
    if (!existing || recordTimestamp(record, timestampFields) >= recordTimestamp(existing, timestampFields)) {
      merged.set(record.id, record);
    }
  });
  return [...merged.values()].sort((a, b) => recordTimestamp(b, timestampFields) - recordTimestamp(a, timestampFields));
}

async function mergeLocalHistoryForUser(userId) {
  const previousOwner = practiceHistory.ownerId;
  if (previousOwner && previousOwner !== userId) {
    // Never merge one signed-in user's cached records into another account.
    practiceHistory.sessions = [];
    practiceHistory.attempts = [];
  }
  practiceHistory.ownerId = userId;
  const token = authState.idToken;
  savePracticeHistory();
  const remote = await fetchRemotePracticeHistory();
  if (token !== authState.idToken || (authState.userId || window.ABRSM_HISTORY_USER_ID) !== userId) {
    return { remote: { ok: false, reason: 'account-changed' }, synced: { synced: false, reason: 'account-changed' } };
  }
  if (remote.ok) {
    practiceHistory.sessions = mergeHistoryRecords(practiceHistory.sessions, remote.sessions, ['updatedAt', 'completedAt', 'startedAt']);
    practiceHistory.attempts = mergeHistoryRecords(practiceHistory.attempts, remote.attempts, ['attemptedAt']);
  }
  practiceHistory.ownerId = userId;
  savePracticeHistory();
  const synced = await syncPracticeHistory();
  authState.lastSync = synced.synced ? new Date().toISOString() : null;
  return { remote, synced };
}

let refreshInFlight = null;
function refreshPracticeHistory() {
  const userId = authState.userId || window.ABRSM_HISTORY_USER_ID;
  if (!userId) return Promise.resolve({ remote: { ok: false }, synced: { synced: false, reason: 'not-authenticated' } });
  if (refreshInFlight?.userId === userId) return refreshInFlight.promise;
  const pending = { userId, promise: null };
  pending.promise = mergeLocalHistoryForUser(userId).finally(() => {
    if (refreshInFlight === pending) refreshInFlight = null;
  });
  refreshInFlight = pending;
  return pending.promise;
}

let historySyncInitialized = false;
function initializeHistorySync() {
  if (historySyncInitialized) return;
  historySyncInitialized = true;
  const retry = () => { void refreshPracticeHistory(); };
  window.addEventListener('online', retry);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') retry();
  });
}

function serializeHistoryValue(value) {
  if (value === null || value === undefined) return null;
  return typeof value === 'string' ? value : JSON.stringify(value);
}

function questionSnapshotForHistory(question) {
  const snapshot = {};
  ['questionId', 'skillId', 'category', 'questionForm', 'answerType', 'grade', 'question', 'image', 'notation', 'timeSignaturePrompt', 'triadMode', 'triadFunction', 'restCount', 'options', 'explanation'].forEach((key) => {
    if (question[key] !== undefined) snapshot[key] = question[key];
  });
  return snapshot;
}

function upsertPracticeSession(session) {
  session.updatedAt = new Date().toISOString();
  const existingIndex = practiceHistory.sessions.findIndex((candidate) => candidate.id === session.id);
  if (existingIndex >= 0) practiceHistory.sessions[existingIndex] = { ...practiceHistory.sessions[existingIndex], ...session };
  else practiceHistory.sessions.unshift(session);
  savePracticeHistory();
}

function startPracticeSession(questionCount) {
  const startedAt = new Date().toISOString();
  state.sessionId = createLocalId('session');
  state.sessionStartedAt = startedAt;
  state.sessionCompleted = false;
  upsertPracticeSession({
    id: state.sessionId,
    status: 'in-progress',
    category: state.category,
    maximumGrade: state.grade,
    requestedQuestionCount: questionCount,
    questionCount: state.test.length,
    timedMode: state.timerEnabled,
    startedAt,
    completedAt: null,
    score: 0,
    attemptCount: 0,
    correctCount: 0,
    wrongCount: 0,
  });
  schedulePracticeHistorySync();
}

function completePracticeSession(status = 'completed') {
  if (!state.sessionId || state.sessionCompleted && status === 'completed') return;
  const attempts = practiceHistory.attempts.filter((attempt) => attempt.sessionId === state.sessionId);
  const session = practiceHistory.sessions.find((candidate) => candidate.id === state.sessionId);
  if (!session) return;
  session.status = status;
  session.completedAt = new Date().toISOString();
  session.score = state.score;
  session.updatedAt = session.completedAt;
  session.attemptCount = attempts.length;
  session.correctCount = attempts.filter((attempt) => attempt.wasCorrect).length;
  session.wrongCount = attempts.filter((attempt) => !attempt.wasCorrect).length;
  state.sessionCompleted = status === 'completed';
  savePracticeHistory();
  schedulePracticeHistorySync();
}

function recordPracticeAttempt(item, wasCorrect, timedOut) {
  if (!state.sessionId) return;
  const attemptedAt = new Date().toISOString();
  practiceHistory.attempts.unshift({
    id: createLocalId('attempt'),
    sessionId: state.sessionId,
    questionId: item.questionId,
    skillId: item.skillId,
    category: item.category,
    questionForm: item.questionForm,
    grade: item.grade,
    wasCorrect,
    timedOut: Boolean(timedOut),
    selectedAnswer: serializeHistoryValue(item.userAnswer),
    correctAnswer: serializeHistoryValue(item.correct),
    responseTimeMs: state.questionStartedAt ? Math.max(0, Date.now() - state.questionStartedAt) : null,
    attemptedAt,
    questionSnapshot: questionSnapshotForHistory(item),
  });
  const session = practiceHistory.sessions.find((candidate) => candidate.id === state.sessionId);
  if (session) {
    session.attemptCount = (session.attemptCount || 0) + 1;
    session.correctCount = (session.correctCount || 0) + (wasCorrect ? 1 : 0);
    session.wrongCount = (session.wrongCount || 0) + (wasCorrect ? 0 : 1);
    session.score = state.score;
    session.updatedAt = attemptedAt;
  }
  savePracticeHistory();
  schedulePracticeHistorySync();
}

window.ABRSM_PRACTICE_HISTORY = {
  get: () => JSON.parse(JSON.stringify(practiceHistory)),
  sync: (endpoint, userId) => syncPracticeHistory(endpoint, userId),
  clear: () => {
    practiceHistory.ownerId = null;
    practiceHistory.sessions = [];
    practiceHistory.attempts = [];
    savePracticeHistory();
  },
};

function waitForGoogleIdentity(timeoutMs = 10000) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const check = () => {
      if (window.google?.accounts?.id) {
        resolve(true);
        return;
      }
      if (Date.now() - startedAt >= timeoutMs) {
        resolve(false);
        return;
      }
      window.setTimeout(check, 100);
    };
    check();
  });
}

async function configuredGoogleClientId() {
  if (window.ABRSM_GOOGLE_CLIENT_ID) return window.ABRSM_GOOGLE_CLIENT_ID;
  const endpoint = historyEndpoint('/auth/config');
  if (!endpoint) return null;
  try {
    const response = await window.fetch(endpoint);
    if (!response.ok) return null;
    const value = await response.json();
    return typeof value.googleClientId === 'string' && value.googleClientId ? value.googleClientId : null;
  } catch (error) {
    return null;
  }
}

async function handleGoogleCredential(response) {
  const token = response?.credential;
  const claims = token ? decodeJwtPayloadForDisplay(token) : null;
  if (!token || !claims?.sub) {
    authUi.setAuthMessage('Google sign-in did not return a valid identity.', 'error');
    return;
  }
  authState.idToken = token;
  authState.userId = `google:${claims.sub}`;
  authState.email = typeof claims.email === 'string' ? claims.email : null;
  authState.name = typeof claims.name === 'string' ? claims.name : null;
  window.ABRSM_HISTORY_AUTH_TOKEN = token;
  authUi.renderAuthState();
  authUi.setAuthMessage('Merging local history…');
  const result = await refreshPracticeHistory();
  if (result.synced.synced) {
    authUi.setAuthMessage('History merged and synced.', 'success');
  } else if (result.remote.ok) {
    authUi.setAuthMessage('Signed in; history is saved locally until sync is available.');
  } else {
    authUi.setAuthMessage('Signed in; local history will sync when the API is configured.');
  }
}

function signOutGoogle() {
  if (window.google?.accounts?.id?.disableAutoSelect) window.google.accounts.id.disableAutoSelect();
  authState.idToken = null;
  authState.userId = null;
  authState.email = null;
  authState.name = null;
  authState.lastSync = null;
  delete window.ABRSM_HISTORY_AUTH_TOKEN;
  // The remote account remains intact; clear the browser cache to prevent a
  // later account from inheriting another user's local records.
  practiceHistory.ownerId = null;
  practiceHistory.sessions = [];
  practiceHistory.attempts = [];
  savePracticeHistory();
  authUi.renderAuthState();
  authUi.setAuthMessage('Signed out. New practice stays local until you sign in again.');
}

async function initializeGoogleSignIn() {
  const signIn = document.getElementById('google-signin');
  if (!signIn) return;
  const clientId = await configuredGoogleClientId();
  if (!clientId) {
    authState.googleReady = false;
    signIn.classList.add('hidden');
    authUi.renderAuthState();
    if (window.ABRSM_HISTORY_API_URL) authUi.setAuthMessage('Set GOOGLE_CLIENT_ID in the Worker to enable Google Sign-In.');
    return;
  }
  if (!await waitForGoogleIdentity()) {
    authState.googleReady = false;
    signIn.classList.add('hidden');
    authUi.setAuthMessage('Google Sign-In could not be loaded.');
    return;
  }
  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: (response) => { void handleGoogleCredential(response); },
    auto_select: false,
    cancel_on_tap_outside: true,
    use_fedcm_for_prompt: true,
  });
  signIn.innerHTML = '';
  window.google.accounts.id.renderButton(signIn, { theme: 'outline', size: 'medium', text: 'signin_with', shape: 'rectangular' });
  authState.googleReady = true;
  authUi.renderAuthState();
}

window.ABRSM_AUTH = {
  signOut: signOutGoogle,
  getState: () => ({ signedIn: Boolean(authState.idToken), email: authState.email, lastSync: authState.lastSync }),
};

export {
  DEFAULT_QUESTION_COUNT,
  QUESTION_COUNT_OPTIONS,
  TIMER_SECONDS,
  authState,
  completePracticeSession,
  configureAuthUI,
  initializeGoogleSignIn,
  initializeHistorySync,
  loadPreferences,
  practiceHistory,
  recordPracticeAttempt,
  recordTimestamp,
  refreshPracticeHistory,
  savePreferences,
  signOutGoogle,
  startPracticeSession,
  syncPracticeHistory,
};
