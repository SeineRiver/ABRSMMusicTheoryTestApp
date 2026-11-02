-- One shared D1 database for every app user.
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS practice_sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('in-progress', 'completed', 'abandoned')),
  category TEXT NOT NULL,
  maximum_grade INTEGER NOT NULL,
  requested_question_count INTEGER NOT NULL,
  question_count INTEGER NOT NULL,
  timed_mode INTEGER NOT NULL DEFAULT 0,
  started_at TEXT NOT NULL,
  completed_at TEXT,
  score INTEGER NOT NULL DEFAULT 0,
  attempt_count INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  wrong_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS practice_sessions_user_started_idx
  ON practice_sessions (user_id, started_at DESC);

CREATE TABLE IF NOT EXISTS practice_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  skill_id TEXT NOT NULL,
  category TEXT NOT NULL,
  question_form TEXT,
  grade INTEGER,
  was_correct INTEGER NOT NULL,
  timed_out INTEGER NOT NULL DEFAULT 0,
  selected_answer TEXT,
  correct_answer TEXT,
  response_time_ms INTEGER,
  attempted_at TEXT NOT NULL,
  question_snapshot_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS practice_attempts_user_attempted_idx
  ON practice_attempts (user_id, attempted_at DESC);

CREATE INDEX IF NOT EXISTS practice_attempts_user_skill_idx
  ON practice_attempts (user_id, skill_id, attempted_at DESC);

CREATE INDEX IF NOT EXISTS practice_attempts_session_idx
  ON practice_attempts (user_id, session_id);
