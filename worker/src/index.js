const MAX_SESSIONS_PER_SYNC = 100;
const MAX_ATTEMPTS_PER_SYNC = 2000;
const MAX_HISTORY_ROWS = 5000;
const GOOGLE_JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function corsHeaders(request, env) {
  const requestedOrigin = request.headers.get('Origin');
  const allowedOrigins = (env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  const headers = {
    'Access-Control-Allow-Headers': 'authorization, content-type, x-user-id',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (requestedOrigin && allowedOrigins.includes(requestedOrigin)) {
    headers['Access-Control-Allow-Origin'] = requestedOrigin;
  }
  return headers;
}

function json(data, status = 200, request, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders(request, env),
    },
  });
}

function requireString(value, field, maxLength = 200) {
  if (typeof value !== 'string' || value.length === 0 || value.length > maxLength) {
    throw new HttpError(400, `${field} must be a non-empty string of at most ${maxLength} characters`);
  }
  return value;
}

function optionalString(value, field, maxLength = 200) {
  if (value === null || value === undefined) return null;
  return requireString(value, field, maxLength);
}

function integer(value, field, { min = 0, max = 100000 } = {}) {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new HttpError(400, `${field} must be an integer between ${min} and ${max}`);
  }
  return value;
}

function booleanInteger(value, field) {
  if (value === true || value === 1) return 1;
  if (value === false || value === 0 || value === null || value === undefined) return 0;
  throw new HttpError(400, `${field} must be a boolean`);
}

function isoTimestamp(value, field, required = true) {
  if (value === null || value === undefined || value === '') {
    if (!required) return null;
    throw new HttpError(400, `${field} is required`);
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) throw new HttpError(400, `${field} must be an ISO timestamp`);
  return parsed.toISOString();
}

function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(normalized);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function decodeJsonSegment(value, field) {
  try {
    return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
  } catch (error) {
    throw new HttpError(401, `Invalid Google token ${field}`);
  }
}

async function verifyGoogleIdToken(token, env) {
  if (!env.GOOGLE_CLIENT_ID) throw new HttpError(503, 'Google authentication is not configured');
  const parts = token.split('.');
  if (parts.length !== 3) throw new HttpError(401, 'Invalid Google ID token');
  const header = decodeJsonSegment(parts[0], 'header');
  const payload = decodeJsonSegment(parts[1], 'payload');
  if (header.alg !== 'RS256' || typeof header.kid !== 'string') throw new HttpError(401, 'Unsupported Google ID token');

  let keySet;
  try {
    const response = await fetch(GOOGLE_JWKS_URL, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Google JWKS returned ${response.status}`);
    keySet = await response.json();
  } catch (error) {
    throw new HttpError(503, 'Unable to verify Google identity right now');
  }
  const jwk = Array.isArray(keySet.keys) ? keySet.keys.find((key) => key.kid === header.kid) : null;
  if (!jwk) throw new HttpError(401, 'Unknown Google signing key');

  let publicKey;
  try {
    publicKey = await crypto.subtle.importKey(
      'jwk',
      jwk,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify'],
    );
  } catch (error) {
    throw new HttpError(503, 'Unable to load Google signing key');
  }
  const validSignature = await crypto.subtle.verify(
    { name: 'RSASSA-PKCS1-v1_5' },
    publicKey,
    decodeBase64Url(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  );
  if (!validSignature) throw new HttpError(401, 'Invalid Google ID token signature');

  const issuerValid = payload.iss === 'https://accounts.google.com' || payload.iss === 'accounts.google.com';
  const audienceValid = Array.isArray(payload.aud)
    ? payload.aud.includes(env.GOOGLE_CLIENT_ID)
    : payload.aud === env.GOOGLE_CLIENT_ID;
  const now = Math.floor(Date.now() / 1000);
  if (!issuerValid || !audienceValid || !Number.isFinite(payload.exp) || payload.exp < now - 30 || (payload.iat && payload.iat > now + 300)) {
    throw new HttpError(401, 'Google ID token claims are invalid');
  }
  if (typeof payload.sub !== 'string' || payload.sub.length === 0) throw new HttpError(401, 'Google ID token has no subject');
  if (payload.email_verified !== true) throw new HttpError(401, 'Google email is not verified');
  return `google:${payload.sub}`;
}

async function requestUserId(request, env) {
  // This development-only header makes curl and Wrangler local testing easy.
  // It is never accepted outside the local Wrangler environment.
  const allowDevHeader = env.ENVIRONMENT === 'development' && env.ALLOW_DEV_USER_HEADER === 'true';
  if (allowDevHeader) {
    const userId = request.headers.get('X-User-Id');
    if (userId) return requireString(userId, 'X-User-Id', 160);
  }

  const authorization = request.headers.get('Authorization') || '';
  const tokenMatch = authorization.match(/^Bearer\s+(.+)$/i);
  if (!tokenMatch) throw new HttpError(401, 'Authentication is required');
  return verifyGoogleIdToken(tokenMatch[1], env);
}

function parseQuestionSnapshot(value) {
  if (value && typeof value === 'object') return JSON.stringify(value);
  if (typeof value === 'string' && value.length <= 500000) {
    try {
      JSON.parse(value);
      return value;
    } catch (error) {
      throw new HttpError(400, 'questionSnapshot must contain valid JSON');
    }
  }
  throw new HttpError(400, 'questionSnapshot is required');
}

function normalizeSession(input, userId, now) {
  const status = requireString(input.status, 'session.status', 30);
  if (!['in-progress', 'completed', 'abandoned'].includes(status)) throw new HttpError(400, 'Invalid session.status');
  return {
    id: requireString(input.id, 'session.id', 160),
    userId,
    status,
    category: requireString(input.category, 'session.category', 80),
    maximumGrade: integer(input.maximumGrade, 'session.maximumGrade', { min: 1, max: 5 }),
    requestedQuestionCount: integer(input.requestedQuestionCount, 'session.requestedQuestionCount', { min: 1, max: 100 }),
    questionCount: integer(input.questionCount, 'session.questionCount', { min: 0, max: 100 }),
    timedMode: booleanInteger(input.timedMode, 'session.timedMode'),
    startedAt: isoTimestamp(input.startedAt, 'session.startedAt'),
    completedAt: isoTimestamp(input.completedAt, 'session.completedAt', false),
    score: integer(input.score ?? 0, 'session.score', { min: 0, max: 100 }),
    attemptCount: integer(input.attemptCount ?? 0, 'session.attemptCount', { min: 0, max: 100 }),
    correctCount: integer(input.correctCount ?? 0, 'session.correctCount', { min: 0, max: 100 }),
    wrongCount: integer(input.wrongCount ?? 0, 'session.wrongCount', { min: 0, max: 100 }),
    createdAt: now,
    updatedAt: now,
  };
}

function normalizeAttempt(input, userId) {
  return {
    id: requireString(input.id, 'attempt.id', 160),
    userId,
    sessionId: requireString(input.sessionId, 'attempt.sessionId', 160),
    questionId: requireString(input.questionId, 'attempt.questionId', 240),
    skillId: requireString(input.skillId, 'attempt.skillId', 240),
    category: requireString(input.category, 'attempt.category', 80),
    questionForm: optionalString(input.questionForm, 'attempt.questionForm', 100),
    grade: input.grade === null || input.grade === undefined ? null : integer(input.grade, 'attempt.grade', { min: 1, max: 5 }),
    wasCorrect: booleanInteger(input.wasCorrect, 'attempt.wasCorrect'),
    timedOut: booleanInteger(input.timedOut, 'attempt.timedOut'),
    selectedAnswer: input.selectedAnswer === null || input.selectedAnswer === undefined ? null : requireString(String(input.selectedAnswer), 'attempt.selectedAnswer', 10000),
    correctAnswer: input.correctAnswer === null || input.correctAnswer === undefined ? null : requireString(String(input.correctAnswer), 'attempt.correctAnswer', 10000),
    responseTimeMs: input.responseTimeMs === null || input.responseTimeMs === undefined ? null : integer(input.responseTimeMs, 'attempt.responseTimeMs', { min: 0, max: 86400000 }),
    attemptedAt: isoTimestamp(input.attemptedAt, 'attempt.attemptedAt'),
    questionSnapshotJson: parseQuestionSnapshot(input.questionSnapshot),
  };
}

async function syncHistory(request, env, userId) {
  let payload;
  try {
    payload = await request.json();
  } catch (error) {
    throw new HttpError(400, 'Request body must be valid JSON');
  }
  const sessions = Array.isArray(payload.sessions) ? payload.sessions.slice(0, MAX_SESSIONS_PER_SYNC) : [];
  const attempts = Array.isArray(payload.attempts) ? payload.attempts.slice(0, MAX_ATTEMPTS_PER_SYNC) : [];
  const now = new Date().toISOString();
  const normalizedSessions = sessions.map((session) => normalizeSession(session, userId, now));
  const normalizedAttempts = attempts.map((attempt) => normalizeAttempt(attempt, userId));

  const statements = [env.abrsm.prepare(
    `INSERT INTO users (id, created_at, updated_at) VALUES (?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET updated_at = excluded.updated_at`,
  ).bind(userId, now, now)];

  normalizedSessions.forEach((session) => {
    statements.push(env.abrsm.prepare(
      `INSERT INTO practice_sessions
        (id, user_id, status, category, maximum_grade, requested_question_count, question_count,
         timed_mode, started_at, completed_at, score, attempt_count, correct_count, wrong_count,
         created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         user_id = excluded.user_id,
         status = excluded.status,
         category = excluded.category,
         maximum_grade = excluded.maximum_grade,
         requested_question_count = excluded.requested_question_count,
         question_count = excluded.question_count,
         timed_mode = excluded.timed_mode,
         started_at = excluded.started_at,
         completed_at = excluded.completed_at,
         score = excluded.score,
         attempt_count = excluded.attempt_count,
         correct_count = excluded.correct_count,
         wrong_count = excluded.wrong_count,
         updated_at = excluded.updated_at`,
    ).bind(session.id, session.userId, session.status, session.category, session.maximumGrade, session.requestedQuestionCount, session.questionCount, session.timedMode, session.startedAt, session.completedAt, session.score, session.attemptCount, session.correctCount, session.wrongCount, session.createdAt, session.updatedAt));
  });

  normalizedAttempts.forEach((attempt) => {
    statements.push(env.abrsm.prepare(
      `INSERT INTO practice_attempts
        (id, user_id, session_id, question_id, skill_id, category, question_form, grade,
         was_correct, timed_out, selected_answer, correct_answer, response_time_ms,
         attempted_at, question_snapshot_json)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         user_id = excluded.user_id,
         session_id = excluded.session_id,
         question_id = excluded.question_id,
         skill_id = excluded.skill_id,
         category = excluded.category,
         question_form = excluded.question_form,
         grade = excluded.grade,
         was_correct = excluded.was_correct,
         timed_out = excluded.timed_out,
         selected_answer = excluded.selected_answer,
         correct_answer = excluded.correct_answer,
         response_time_ms = excluded.response_time_ms,
         attempted_at = excluded.attempted_at,
         question_snapshot_json = excluded.question_snapshot_json`,
    ).bind(attempt.id, attempt.userId, attempt.sessionId, attempt.questionId, attempt.skillId, attempt.category, attempt.questionForm, attempt.grade, attempt.wasCorrect, attempt.timedOut, attempt.selectedAnswer, attempt.correctAnswer, attempt.responseTimeMs, attempt.attemptedAt, attempt.questionSnapshotJson));
  });

  for (let index = 0; index < statements.length; index += 100) {
    await env.abrsm.batch(statements.slice(index, index + 100));
  }
  return { syncedSessions: normalizedSessions.length, syncedAttempts: normalizedAttempts.length };
}

async function getHistory(env, userId) {
  const [sessionsResult, attemptsResult] = await Promise.all([
    env.abrsm.prepare(
      `SELECT id, status, category, maximum_grade AS maximumGrade, requested_question_count AS requestedQuestionCount,
              question_count AS questionCount, timed_mode AS timedMode, started_at AS startedAt,
              completed_at AS completedAt, score, attempt_count AS attemptCount, correct_count AS correctCount,
              wrong_count AS wrongCount, created_at AS createdAt, updated_at AS updatedAt
       FROM practice_sessions WHERE user_id = ? ORDER BY started_at DESC LIMIT ?`,
    ).bind(userId, MAX_HISTORY_ROWS).all(),
    env.abrsm.prepare(
      `SELECT id, session_id AS sessionId, question_id AS questionId, skill_id AS skillId,
              category, question_form AS questionForm, grade, was_correct AS wasCorrect,
              timed_out AS timedOut, selected_answer AS selectedAnswer, correct_answer AS correctAnswer,
              response_time_ms AS responseTimeMs, attempted_at AS attemptedAt, question_snapshot_json AS questionSnapshot
       FROM practice_attempts WHERE user_id = ? ORDER BY attempted_at DESC LIMIT ?`,
    ).bind(userId, MAX_HISTORY_ROWS).all(),
  ]);
  return {
    sessions: sessionsResult.results || [],
    attempts: (attemptsResult.results || []).map((attempt) => ({
      ...attempt,
      wasCorrect: Boolean(attempt.wasCorrect),
      timedOut: Boolean(attempt.timedOut),
      questionSnapshot: JSON.parse(attempt.questionSnapshot),
    })),
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    try {
      if (request.method === 'GET' && url.pathname === '/api/v1/health') {
        return json({ ok: true, service: 'music-theory-quiz-api' }, 200, request, env);
      }
      if (request.method === 'GET' && url.pathname === '/api/v1/auth/config') {
        return json({ ok: true, googleClientId: env.GOOGLE_CLIENT_ID || null }, 200, request, env);
      }
      if (!url.pathname.startsWith('/api/v1/history')) return json({ error: 'Not found' }, 404, request, env);
      const userId = await requestUserId(request, env);
      if (request.method === 'POST' && url.pathname === '/api/v1/history/sync') {
        return json({ ok: true, ...(await syncHistory(request, env, userId)) }, 200, request, env);
      }
      if (request.method === 'GET' && url.pathname === '/api/v1/history') {
        return json({ ok: true, ...(await getHistory(env, userId)) }, 200, request, env);
      }
      return json({ error: 'Not found' }, 404, request, env);
    } catch (error) {
      const status = error instanceof HttpError ? error.status : 500;
      return json({ error: status === 500 ? 'Internal server error' : error.message }, status, request, env);
    }
  },
};
