import { recordTimestamp } from './history.js';

function sessionAttempts(history, sessionId) {
  return history.attempts.filter((attempt) => attempt.sessionId === sessionId)
    .sort((a, b) => recordTimestamp(a, ['attemptedAt']) - recordTimestamp(b, ['attemptedAt']));
}

function testStats(history) {
  return history.sessions.map((session) => {
    const attempts = sessionAttempts(history, session.id);
    const answered = Math.max(Number(session.attemptCount) || 0, attempts.length);
    const completeDetails = attempts.length === answered;
    const correct = completeDetails ? attempts.filter((attempt) => attempt.wasCorrect).length
      : Number(session.correctCount ?? session.score) || 0;
    const wrong = completeDetails ? attempts.filter((attempt) => !attempt.wasCorrect).length
      : Number(session.wrongCount) || 0;
    return {
      ...session,
      answered,
      correct,
      wrong,
      total: Math.max(Number(session.questionCount) || 0, answered),
      mistakes: attempts.filter((attempt) => !attempt.wasCorrect),
    };
  }).filter((session) => session.answered > 0)
    .sort((a, b) => recordTimestamp(b, ['startedAt']) - recordTimestamp(a, ['startedAt']));
}

function testQuestionsHref(sessionId) {
  return `question-bank.html?${new URLSearchParams({ session: sessionId })}`;
}

function formatTestDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Date unavailable'
    : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

export { sessionAttempts, testStats, testQuestionsHref, formatTestDate };
