import { buildExplanation, ensureQuestionMetadata } from './question-bank.js';
import { formatKeySignatureAnswer, formatRestAnswers, formatTonicTriadAnswer } from './quiz-engine.js';
import { renderNotation, renderTimeSignaturePrompt } from './notation.js';

function categoryLabel(category) {
  return {
    intervals: 'Intervals',
    pitches: 'Pitch',
    'tonic-triads': 'Tonic triads',
    'key-signatures': 'Key signatures',
    'time-signatures': 'Time signatures',
    terms: 'Terms & signs',
  }[category] || 'Music theory';
}

function deserializeHistoryValue(value) {
  if (value === null || value === undefined) return null;
  if (typeof value !== 'string') return value;
  try { return JSON.parse(value); } catch (error) { return value; }
}

function formatHistoryAnswer(item, value) {
  if (value === null || value === undefined || value === '') return '';
  if (item?.answerType === 'key-signature') return formatKeySignatureAnswer(typeof value === 'string' ? value : JSON.stringify(value));
  if (item?.answerType === 'rest-identification') return formatRestAnswers(typeof value === 'string' ? value : JSON.stringify(value));
  if (item?.answerType === 'tonic-triad') return formatTonicTriadAnswer(typeof value === 'string' ? value : JSON.stringify(value));
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function historySnapshotForAttempt(attempt) {
  const snapshot = deserializeHistoryValue(attempt?.questionSnapshot);
  return snapshot && typeof snapshot === 'object' ? snapshot : {};
}

function questionFromHistoryAttempt(attempt) {
  const snapshot = historySnapshotForAttempt(attempt);
  const correct = deserializeHistoryValue(attempt?.correctAnswer);
  const category = snapshot.category || attempt?.category || 'terms';
  const question = snapshot.question || `${categoryLabel(category)} question`;
  const questionForm = snapshot.questionForm || attempt?.questionForm || 'history-review';
  const item = {
    ...snapshot,
    category,
    questionForm,
    grade: Number(snapshot.grade ?? attempt?.grade) || undefined,
    question,
    correct,
    answer: correct,
    userAnswer: null,
    restCount: snapshot.restCount ?? (Array.isArray(correct) ? correct.length : undefined),
  };
  if (!item.explanation) {
    item.explanation = typeof correct === 'string'
      ? buildExplanation(question, correct)
      : `The correct answer is “${formatHistoryAnswer(item, correct)}”.`;
  }
  return ensureQuestionMetadata(item);
}

function historyLabelForItem(item) {
  return item.grade ? `Grade ${item.grade} · ${categoryLabel(item.category)}` : categoryLabel(item.category);
}

function appendHistoryVisual(card, item) {
  if (item.timeSignaturePrompt) {
    const notation = document.createElement('div');
    notation.className = 'review-notation';
    card.appendChild(notation);
    renderTimeSignaturePrompt(notation, item.timeSignaturePrompt);
  } else if (item.notation) {
    const notation = document.createElement('div');
    notation.className = 'review-notation history-notation';
    notation.setAttribute('role', 'img');
    card.appendChild(notation);
    renderNotation(notation, item.notation, 320);
  } else if (item.image) {
    const image = document.createElement('img');
    image.className = 'review-image';
    image.src = item.image;
    image.alt = 'Musical notation for the question';
    card.appendChild(image);
  }
}

function appendHistoryParagraph(card, label, value) {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = `${label}:`;
  paragraph.append(strong, document.createTextNode(` ${value || 'No answer'}`));
  card.appendChild(paragraph);
}

function appendHistoryAttempt(parent, attempt) {
  const item = questionFromHistoryAttempt(attempt);
  const card = document.createElement('article');
  card.className = 'review-item history-card';
  const heading = document.createElement('h3');
  heading.textContent = `${historyLabelForItem(item)} · ${item.question}`;
  card.appendChild(heading);
  parent.appendChild(card);
  appendHistoryVisual(card, item);
  appendHistoryParagraph(card, 'Your answer', formatHistoryAnswer(item, deserializeHistoryValue(attempt.selectedAnswer)));
  appendHistoryParagraph(card, 'Correct answer', formatHistoryAnswer(item, item.correct));
  const explanation = document.createElement('p');
  explanation.className = 'review-explanation';
  const explanationLabel = document.createElement('strong');
  explanationLabel.textContent = 'Explanation:';
  explanation.append(explanationLabel, document.createTextNode(` ${item.explanation}`));
  card.appendChild(explanation);
  if (attempt.timedOut) {
    const timedOut = document.createElement('span');
    timedOut.className = 'history-tag';
    timedOut.textContent = 'Timed out';
    card.appendChild(timedOut);
  }
  return card;
}

export { categoryLabel, deserializeHistoryValue, formatHistoryAnswer, questionFromHistoryAttempt, appendHistoryAttempt };
