import test, { beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const stored = new Map();
const timers = new Map();
let timerId = 0;
globalThis.window = Object.assign(new EventTarget(), {
  localStorage: { getItem: (key) => stored.get(key) ?? null, setItem: (key, value) => stored.set(key, value) },
  crypto: globalThis.crypto,
  location: { href: 'http://localhost/index.html' },
  setTimeout: (callback) => { timers.set(++timerId, callback); return timerId; },
  clearTimeout: (id) => timers.delete(id),
});
globalThis.document = Object.assign(new EventTarget(), { visibilityState: 'visible' });
const history = await import('../js/history.js');
const { state } = await import('../js/state.js');
const { testStats, testQuestionsHref } = await import('../js/practice-stats.js');
const { questionFromHistoryAttempt, formatHistoryAnswer } = await import('../js/question-review.js');

const session = (id, extra = {}) => ({ id, category: 'terms', status: 'completed', startedAt: '2026-11-13T08:00:00Z', questionCount: 2, attemptCount: 2, correctCount: 1, wrongCount: 1, ...extra });
const attempt = (id, sessionId, extra = {}) => ({ id, sessionId, questionId: `q-${id}`, skillId: 'terms.test', category: 'terms', wasCorrect: false, attemptedAt: '2026-11-13T08:01:00Z', questionSnapshot: { question: 'Saved question?', category: 'terms', grade: 2 }, selectedAnswer: 'wrong', correctAnswer: 'right', ...extra });
const response = (value) => ({ ok: true, json: async () => value });
const key = 'abrsm-music-theory-quiz-history-v1';

beforeEach(() => {
  stored.clear(); timers.clear();
  Object.assign(history.practiceHistory, { ownerId: null, sessions: [], attempts: [] });
  Object.assign(history.authState, { idToken: null, userId: null, lastSync: null });
  Object.assign(state, { sessionId: null, sessionCompleted: false, score: 0, category: 'terms', grade: 2, test: [{}, {}] });
  delete window.ABRSM_HISTORY_AUTH_TOKEN;
  delete window.ABRSM_HISTORY_USER_ID;
  delete window.ABRSM_HISTORY_API_URL;
  window.fetch = async () => { throw new Error('Unexpected network request'); };
});

test('stats include completed and partial tests, dates, correct scores, and session-specific mistakes', () => {
  const data = {
    sessions: [session('old'), session('new', { startedAt: '2026-11-13T09:00:00Z', status: 'abandoned', attemptCount: 1, questionCount: 5 }), session('empty', { attemptCount: 0 })],
    attempts: [attempt('a', 'old'), attempt('b', 'old', { wasCorrect: true }), attempt('c', 'new')],
  };
  const stats = testStats(data);
  assert.deepEqual(stats.map(s => s.id), ['new', 'old']);
  assert.equal(stats[0].answered, 1);
  assert.equal(stats[0].total, 5);
  assert.equal(stats[1].correct, 1);
  assert.deepEqual(stats[1].mistakes.map(a => a.id), ['a']);
  assert.equal(new URL(testQuestionsHref('a/b?x=1'), 'http://localhost').searchParams.get('session'), 'a/b?x=1');
});

test('retained summary scores remain available when older question details have been pruned', () => {
  const [row] = testStats({ sessions: [session('s', { correctCount: 4, wrongCount: 1, attemptCount: 5, questionCount: 5 })], attempts: [] });
  assert.equal(row.correct, 4); assert.equal(row.wrong, 1); assert.equal(row.mistakes.length, 0);
});

test('answers and exact generated notation are stored locally and survive a module reload', async () => {
  history.startPracticeSession(2);
  const notation = { abc: 'X:1\nL:1/4\nK:C\nC4|', alt: 'Original score' };
  history.recordPracticeAttempt({ questionId: 'generated-1', skillId: 'pitch.test', category: 'pitches', question: 'Name this note.', notation, correct: 'C', userAnswer: 'D' }, false, true);
  state.score = 1;
  history.recordPracticeAttempt({ questionId: 'generated-2', skillId: 'pitch.test', category: 'pitches', question: 'Name this note.', correct: 'E', userAnswer: 'E' }, true, false);
  history.completePracticeSession();
  const persisted = JSON.parse(stored.get(key));
  assert.equal(persisted.sessions[0].score, 1);
  assert.equal(persisted.sessions[0].wrongCount, 1);
  const reloaded = await import(`../js/history.js?reload=${Date.now()}`);
  assert.equal(reloaded.practiceHistory.attempts.length, 2);
  const wrong = reloaded.practiceHistory.attempts.find(a => !a.wasCorrect);
  assert.deepEqual(questionFromHistoryAttempt(wrong).notation, notation);
  assert.equal(wrong.timedOut, true);
});

test('review formats saved builder answers from JSON snapshots', () => {
  const saved = attempt('a', 's', { questionSnapshot: JSON.stringify({ question: 'Choose the key signature.', category: 'key-signatures', answerType: 'key-signature' }), correctAnswer: 'sharp:F,C' });
  const item = questionFromHistoryAttempt(saved);
  assert.equal(item.question, 'Choose the key signature.');
  assert.equal(formatHistoryAnswer(item, item.correct), 'F♯, C♯');
  const restItem = questionFromHistoryAttempt(attempt('rest', 's', { questionSnapshot: { question: 'Missing rests', answerType: 'rest-identification' }, correctAnswer: JSON.stringify([{ units: 16, dotted: false }]) }));
  assert.equal(restItem.restCount, 1);
  assert.equal(formatHistoryAnswer(restItem, restItem.correct), 'Rest 1: minim rest');
});

test('offline work stays local and retries successfully when connectivity returns', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  Object.assign(history.authState, { idToken: 'test-token', userId: 'google:test' });
  history.startPracticeSession(2);
  history.recordPracticeAttempt({ questionId: 'q', skillId: 'skill', category: 'terms', question: 'Question', correct: 'A', userAnswer: 'B' }, false, false);
  assert.ok(timers.size > 0);
  window.fetch = async () => { throw new Error('Offline'); };
  assert.equal((await history.syncPracticeHistory()).reason, 'network-error');
  assert.equal(JSON.parse(stored.get(key)).attempts.length, 1);
  let uploaded;
  window.fetch = async (url, options = {}) => {
    assert.equal(options.headers.Authorization, 'Bearer test-token');
    if (options.method !== 'POST') return response({ sessions: [], attempts: [] });
    uploaded = JSON.parse(options.body);
    return response({ syncedSessions: uploaded.sessions.length, syncedAttempts: uploaded.attempts.length });
  };
  history.initializeHistorySync();
  window.dispatchEvent(new Event('online'));
  const result = await history.refreshPracticeHistory();
  assert.equal(result.synced.synced, true);
  assert.equal(uploaded.attempts.length, 1);
  assert.equal(uploaded.sessions[0].wrongCount, 1);
});

test('sync batches all retained attempts within the API request limit', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  history.authState.idToken = 'test-token';
  history.practiceHistory.sessions = [session('s')];
  history.practiceHistory.attempts = Array.from({ length: 4500 }, (_, i) => attempt(`${i}`, 's'));
  const batches = [];
  window.fetch = async (url, options) => { const body = JSON.parse(options.body); batches.push(body); return response({ syncedSessions: body.sessions.length, syncedAttempts: body.attempts.length }); };
  const result = await history.syncPracticeHistory();
  assert.equal(result.syncedAttempts, 4500);
  assert.deepEqual(batches.map(b => b.attempts.length), [2000, 2000, 500]);
  assert.equal(batches.reduce((sum, b) => sum + b.sessions.length, 0), 1);
});

test('remote merging preserves answers recorded while the history request is in flight', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  Object.assign(history.authState, { idToken: 'test-token', userId: 'google:test' });
  history.startPracticeSession(2);
  let resolvePull;
  window.fetch = async (url, options = {}) => options.method === 'POST' ? response({}) : new Promise(resolve => { resolvePull = resolve; });
  const pending = history.refreshPracticeHistory();
  history.recordPracticeAttempt({ questionId: 'q', skillId: 'skill', category: 'terms', question: 'New answer', correct: 'A', userAnswer: 'B' }, false, false);
  resolvePull(response({ sessions: [session('remote')], attempts: [attempt('remote-attempt', 'remote')] }));
  await pending;
  assert.equal(history.practiceHistory.attempts.length, 2);
  assert.ok(history.practiceHistory.attempts.some(a => a.questionSnapshot.question === 'New answer'));
});

test('switching accounts never merges the previous account’s cached tests', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  Object.assign(history.practiceHistory, { ownerId: 'google:first', sessions: [session('first')], attempts: [attempt('first-a', 'first')] });
  Object.assign(history.authState, { idToken: 'second-token', userId: 'google:second' });
  window.fetch = async (url, options = {}) => response(options.method === 'POST' ? {} : { sessions: [session('second')], attempts: [attempt('second-a', 'second')] });
  await history.refreshPracticeHistory();
  assert.deepEqual(history.practiceHistory.sessions.map(s => s.id), ['second']);
  assert.equal(history.practiceHistory.ownerId, 'google:second');
});

test('newer local sessions are retained when a full remote cache is merged', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  Object.assign(history.authState, { idToken: 'test-token', userId: 'google:test' });
  history.practiceHistory.sessions = [session('local-newest', { startedAt: '2027-01-01T00:00:00Z' })];
  window.fetch = async (url, options = {}) => response(options.method === 'POST' ? {} : {
    sessions: Array.from({ length: 100 }, (_, i) => session(`remote-${i}`)), attempts: [],
  });
  await history.refreshPracticeHistory();
  assert.equal(history.practiceHistory.sessions.length, 100);
  assert.equal(history.practiceHistory.sessions[0].id, 'local-newest');
});

test('queued uploads cannot overwrite newer scores with an older upload', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  history.authState.idToken = 'test-token';
  history.practiceHistory.sessions = [session('s', { correctCount: 0 })];
  let finishFirst;
  const uploads = [];
  window.fetch = async (url, options) => {
    uploads.push(JSON.parse(options.body));
    if (uploads.length === 1) return new Promise(resolve => { finishFirst = resolve; });
    return response({});
  };
  const first = history.syncPracticeHistory();
  await Promise.resolve();
  const second = history.syncPracticeHistory();
  history.practiceHistory.sessions[0].correctCount = 2;
  assert.equal(uploads.length, 1);
  finishFirst(response({}));
  await Promise.all([first, second]);
  assert.equal(uploads[0].sessions[0].correctCount, 0);
  assert.equal(uploads[1].sessions[0].correctCount, 2);
});

test('signing out during a remote fetch cannot restore the previous account’s history', async () => {
  window.ABRSM_HISTORY_API_URL = 'https://example.test/api/v1/history/sync';
  Object.assign(history.authState, { idToken: 'test-token', userId: 'google:test' });
  let finishPull;
  window.fetch = () => new Promise(resolve => { finishPull = resolve; });
  const pending = history.refreshPracticeHistory();
  history.signOutGoogle();
  finishPull(response({ sessions: [session('private-test')], attempts: [attempt('private-a', 'private-test')] }));
  const result = await pending;
  assert.equal(result.synced.reason, 'account-changed');
  assert.equal(history.practiceHistory.sessions.length, 0);
  assert.equal(history.practiceHistory.ownerId, null);
});
