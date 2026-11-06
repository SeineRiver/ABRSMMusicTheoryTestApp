import { APP_VERSION } from './config.js';
import { state } from './state.js';
import { BANK, buildExplanation, ensureQuestionMetadata } from './question-bank.js';
import {
  CURRICULUM,
  REST_DURATIONS,
  createIntervalsTest,
  createKeySignaturesTest,
  createPitchesTest,
  createTermsTest,
  createTimeSignaturesTest,
  createTonicTriadsTest,
  formatKeySignatureAnswer,
  formatPitchName,
  formatRestAnswers,
  formatTonicTriadAnswer,
  keySignatureValue,
} from './quiz-engine.js';
import {
  DEFAULT_QUESTION_COUNT,
  QUESTION_COUNT_OPTIONS,
  TIMER_SECONDS,
  authState,
  completePracticeSession,
  configureAuthUI,
  initializeGoogleSignIn,
  loadPreferences,
  practiceHistory,
  recordPracticeAttempt,
  savePreferences,
  signOutGoogle,
  startPracticeSession,
  syncPracticeHistory,
} from './history.js';
import {
  NOTE_LETTERS,
  makeIntervalOptionNotation,
  noteToAbc,
  renderNotation,
  renderTimeSignaturePrompt,
  restIconMarkup,
  timeSignatureMarkMarkup,
} from './notation.js';

const $ = (id) => document.getElementById(id);

function setAuthMessage(message, type = '') {
  const element = $('auth-message');
  if (!element) return;
  element.textContent = message;
  element.className = `auth-message${type ? ` ${type}` : ''}`;
}

function renderAuthState() {
  const status = $('auth-status');
  const signIn = $('google-signin');
  const signOut = $('sign-out-button');
  if (!status || !signIn || !signOut) return;
  if (authState.idToken) {
    status.textContent = `Signed in${authState.email ? ` as ${authState.email}` : ''}`;
    signIn.classList.add('hidden');
    signOut.classList.remove('hidden');
  } else {
    status.textContent = window.ABRSM_HISTORY_API_URL ? 'Sign in to sync your history' : 'Local history only';
    signIn.classList.toggle('hidden', !authState.googleReady);
    signOut.classList.add('hidden');
  }
}

function setActiveCategory(category) {
  document.querySelectorAll('.category-button').forEach((button) => {
    const active = button.dataset.category === category;
    const available = CURRICULUM.categoryMinimumGrades[button.dataset.category] <= state.grade;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
    button.disabled = !available;
  });
}

function setActiveGrade(grade) {
  state.grade = grade;
  document.querySelectorAll('.grade-dot').forEach((button) => {
    const active = Number(button.dataset.grade) === grade;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (CURRICULUM.categoryMinimumGrades[state.category] > grade) state.category = 'terms';
  setActiveCategory(state.category);
  savePreferences();
}

let settingsChanged = false;
let settingsReturnScreen = 'test';

function syncSettingsControls() {
  const questionCount = $('test-length');
  const timer = $('timer-enabled');
  const practiceMode = $('practice-mode-toggle');
  if (questionCount) questionCount.value = String(state.questionCount);
  if (timer) timer.checked = state.timerEnabled;
  if (practiceMode) {
    practiceMode.setAttribute('aria-checked', String(state.practiceMode));
    practiceMode.classList.toggle('active', state.practiceMode);
    practiceMode.querySelector('.setting-switch-state').textContent = state.practiceMode ? 'On' : 'Off';
  }
}

function openSettings() {
  const settings = $('settings-screen');
  if (!settings) return;
  settingsReturnScreen = $('result-screen')?.classList.contains('hidden') === false
    ? 'result'
    : $('mistakes-screen')?.classList.contains('hidden') === false
      ? 'mistakes'
      : $('needs-practice-screen')?.classList.contains('hidden') === false
        ? 'needs-practice'
        : 'test';
  settingsChanged = false;
  stopQuestionTimer();
  syncSettingsControls();
  $('test-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  settings.classList.remove('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'true');
}

function closeSettings() {
  const settings = $('settings-screen');
  if (!settings) return;
  settings.classList.add('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'false');
  if (settingsChanged) {
    createTest(state.questionCount, state.category);
    settingsChanged = false;
    return;
  }
  if (settingsReturnScreen === 'result') {
    $('result-screen')?.classList.remove('hidden');
  } else if (settingsReturnScreen === 'mistakes') {
    $('mistakes-screen')?.classList.remove('hidden');
    renderMistakesView();
  } else if (settingsReturnScreen === 'needs-practice') {
    $('needs-practice-screen')?.classList.remove('hidden');
    renderNeedsPracticeView();
  } else {
    $('test-screen')?.classList.remove('hidden');
    if (!state.locked) startQuestionTimer();
  }
}

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

function stopQuestionTimer() {
  if (state.timerId !== null) window.clearInterval(state.timerId);
  state.timerId = null;
  state.timerDeadline = null;
}

function updateQuestionTimer(remaining) {
  const timer = $('question-timer');
  timer.textContent = `${remaining}s`;
  timer.classList.toggle('urgent', remaining <= 5);
}

function startQuestionTimer() {
  stopQuestionTimer();
  const timer = $('question-timer');
  timer.classList.toggle('hidden', !state.timerEnabled);
  if (!state.timerEnabled) return;
  state.timerDeadline = Date.now() + TIMER_SECONDS * 1000;
  const tick = () => {
    const remaining = Math.max(0, Math.ceil((state.timerDeadline - Date.now()) / 1000));
    updateQuestionTimer(remaining);
    if (remaining === 0) {
      stopQuestionTimer();
      if (!state.locked) {
        state.selected = null;
        submitAnswer(true);
      }
    }
  };
  tick();
  state.timerId = window.setInterval(tick, 200);
}

function createTest(questionCount = state.questionCount, category = state.category) {
  if (state.sessionId && !state.sessionCompleted) completePracticeSession('abandoned');
  state.category = category;
  state.questionCount = questionCount;
  setActiveCategory(category);
  state.test = state.category === 'intervals'
    ? createIntervalsTest(questionCount, state.grade)
    : state.category === 'pitches'
      ? createPitchesTest(questionCount, state.grade)
      : state.category === 'tonic-triads'
        ? createTonicTriadsTest(questionCount, state.grade)
        : state.category === 'time-signatures'
          ? createTimeSignaturesTest(questionCount, state.grade)
          : state.category === 'key-signatures'
            ? createKeySignaturesTest(questionCount, state.grade)
            : createTermsTest(questionCount, state.grade);
  startPracticeSession(questionCount);
  state.current = 0;
  state.score = 0;
  state.selected = null;
  state.locked = false;
  syncSettingsControls();
  savePreferences();
  $('result-screen').classList.add('hidden');
  $('test-screen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  stopQuestionTimer();
  const item = state.test[state.current];
  state.questionStartedAt = Date.now();
  const position = state.current + 1;
  $('progress-label').textContent = `Question ${position} of ${state.test.length}`;
  $('score-label').textContent = `${state.score} correct`;
  $('progress-bar').style.width = `${(position / state.test.length) * 100}%`;
  const label = categoryLabel(item.category);
  $('grade-badge').textContent = item.grade ? `Grade ${item.grade} · ${label}` : label;
  $('question-number').textContent = String(position).padStart(2, '0');
  $('question-text').textContent = item.question;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('practice-explanation').classList.add('hidden');
  $('practice-result-title').textContent = '';
  $('practice-result-title').className = '';
  $('practice-correct-answer').textContent = '';
  $('practice-explanation-text').textContent = '';
  const requiresSubmitButton = ['key-signature', 'rest-identification', 'tonic-triad'].includes(item.answerType);
  $('next-button').classList.toggle('hidden', !requiresSubmitButton);
  $('next-button').disabled = true;
  $('next-button').textContent = requiresSubmitButton ? 'Complete the answer' : '';
  state.selected = null;
  state.locked = false;

  const imageWrap = $('question-image-wrap');
  const notationWrap = $('question-notation-wrap');
  $('question-notation').__notationObserver?.disconnect();
  $('question-notation').__notationObserver = null;
  if (item.timeSignaturePrompt) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    renderTimeSignaturePrompt($('question-notation'), item.timeSignaturePrompt);
    notationWrap.classList.remove('hidden');
  } else if (item.notation) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    $('question-notation').classList.remove('question-time-signature');
    notationWrap.classList.remove('hidden');
    renderNotation($('question-notation'), item.notation, item.notation.timeSignatureNotation ? 629 : 520);
  } else if (item.image) {
    $('question-image').src = item.image;
    imageWrap.classList.remove('hidden');
    $('question-notation').classList.remove('question-time-signature');
    notationWrap.classList.add('hidden');
  } else {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    $('question-notation').classList.remove('question-time-signature');
    notationWrap.classList.add('hidden');
  }

  const answers = $('answers');
  answers.innerHTML = '';
  answers.classList.remove('correct', 'incorrect');
  answers.classList.toggle('interval-answers', item.category === 'intervals');
  answers.classList.toggle('pitch-answers', item.category === 'pitches');
  answers.classList.toggle('tonic-triad-answers', item.answerType === 'tonic-triad');
  answers.classList.toggle('time-signature-answers', item.category === 'time-signatures' && !item.answerType && item.questionForm !== 'irregular-division');
  answers.classList.toggle('irregular-division-answers', item.questionForm === 'irregular-division');
  answers.classList.toggle('time-classification-answers', item.answerType === 'time-classification');
  answers.classList.toggle('key-signature-answers', item.answerType === 'key-signature');
  answers.classList.toggle('scale-identification-answers', item.answerType === 'scale-identification');
  answers.classList.toggle('rest-identification-answers', item.answerType === 'rest-identification');
  if (item.answerType === 'key-signature') {
    renderKeySignatureAnswers(item);
    startQuestionTimer();
    return;
  }
  if (item.answerType === 'rest-identification') {
    renderRestValueAnswers(item);
    startQuestionTimer();
    return;
  }
  if (item.answerType === 'tonic-triad') {
    renderTonicTriadAnswers(item);
    startQuestionTimer();
    return;
  }
  item.options.forEach((option, index) => {
    // Keep answer rendering resilient if a generated option is an object from
    // an older question-bank entry. Never let a missing display field become
    // the literal word "undefined" in the UI.
    const rawOptionValue = typeof option === 'string'
      ? option
      : option?.name ?? option?.label ?? option?.value ?? '';
    const optionValue = String(rawOptionValue).replace(/\s+undefined\b/g, '').trim();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    if (item.questionForm === 'irregular-division') button.classList.add('irregular-division-answer-option');
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.dataset.answer = optionValue;
    const letter = String.fromCharCode(65 + index);
    button.setAttribute('aria-label', `Option ${letter}: ${optionValue}`);
    if (item.category === 'intervals' && item.answerType !== 'interval-identification') {
      button.classList.add('interval-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong><div class="answer-notation" role="img"></div>`;
      renderNotation(button.querySelector('.answer-notation'), makeIntervalOptionNotation(item, option), 240);
    } else if (item.category === 'pitches') {
      button.classList.add('pitch-answer-option');
      button.innerHTML = `<strong>${letter}.</strong> ${option}`;
    } else if (item.category === 'time-signatures' && !item.answerType) {
      button.classList.add('time-signature-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong>${timeSignatureMarkMarkup({ label: option })}`;
    } else {
      button.innerHTML = `<strong>${letter}.</strong> ${optionValue}`;
    }
    button.addEventListener('click', () => chooseAnswer(button, optionValue));
    answers.appendChild(button);
  });
  startQuestionTimer();
}

function renderKeySignaturePreview(element, accidental, notes) {
  const keyModifiers = accidental && accidental !== 'none'
    ? notes.map((note) => `${accidental === 'sharp' ? '^' : '_'}${note}`).join(' ')
    : '';
  renderNotation(element, {
    abc: `X:1\nM:none\nL:1/8\nK:C${keyModifiers ? ` ${keyModifiers}` : ''}\nV:1 clef=treble\ny8`,
    alt:
    accidental === 'none'
      ? 'Empty staff: no sharps or flats'
      : accidental
        ? `Key signature preview: ${formatKeySignatureAnswer(keySignatureValue(accidental, notes))}`
        : 'Empty staff: choose sharps, flats, or no accidentals',
  }, 520);
}

function selectedKeySignatureModifiers(accidental, notes) {
  return accidental && accidental !== 'none'
    ? notes.map((note) => `${accidental === 'sharp' ? '^' : '_'}${note}`).join(' ')
    : '';
}

function makeTriadPreviewNotation(mode, accidental, signatureNotes, selections) {
  const rootLetter = selections[0]?.letter || 'C';
  const rootIndex = NOTE_LETTERS.indexOf(rootLetter);
  const chordNotes = selections.map((selection, index) => {
    if (!selection) return null;
    const note = mode === 'key-signature' ? selection.letter : `${selection.letter}${selection.accidental || ''}`;
    const octave = 4 + Math.floor((rootIndex + index * 2) / NOTE_LETTERS.length);
    return noteToAbc(note, octave);
  }).filter(Boolean);
  const keyModifiers = mode === 'key-signature' ? selectedKeySignatureModifiers(accidental, signatureNotes) : '';
  return {
    abc: `X:1\nM:none\nL:1/4\nK:C${keyModifiers ? ` ${keyModifiers}` : ''}\nV:1 clef=treble\n${chordNotes.length ? `[${chordNotes.join('')}]4` : 'y4'}`,
    alt: chordNotes.length ? 'Tonic triad being built in treble clef' : 'Empty treble-clef staff for building a tonic triad',
  };
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
  if (item.notation) {
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

function renderMistakesView() {
  const list = $('mistakes-list');
  if (!list) return;
  list.replaceChildren();
  const mistakes = practiceHistory.attempts
    .filter((attempt) => !attempt.wasCorrect)
    .sort((left, right) => recordTimestamp(right, ['attemptedAt']) - recordTimestamp(left, ['attemptedAt']))
    .slice(0, 100);
  if (!mistakes.length) {
    const empty = document.createElement('div');
    empty.className = 'history-empty';
    empty.innerHTML = '<h3>No mistakes recorded yet.</h3><p>Complete a test and any missed questions will appear here for review.</p>';
    list.appendChild(empty);
    return;
  }
  mistakes.forEach((attempt) => {
    const item = questionFromHistoryAttempt(attempt);
    const card = document.createElement('article');
    card.className = 'review-item history-card';
    const heading = document.createElement('h3');
    heading.textContent = `${historyLabelForItem(item)} · ${item.question}`;
    card.appendChild(heading);
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
    list.appendChild(card);
  });
}

function historySkillGroups() {
  const groups = new Map();
  practiceHistory.attempts.forEach((attempt) => {
    const skillId = attempt.skillId || `${attempt.category || 'music-theory'}.${attempt.questionForm || attempt.questionId || 'unknown'}`;
    const group = groups.get(skillId) || {
      skillId,
      attempts: [],
      total: 0,
      wrong: 0,
      correct: 0,
      latestAttempt: null,
    };
    group.attempts.push(attempt);
    group.total += 1;
    if (attempt.wasCorrect) group.correct += 1;
    else group.wrong += 1;
    if (!group.latestAttempt || recordTimestamp(attempt, ['attemptedAt']) > recordTimestamp(group.latestAttempt, ['attemptedAt'])) group.latestAttempt = attempt;
    groups.set(skillId, group);
  });
  return [...groups.values()]
    .filter((group) => group.wrong > 0)
    .sort((left, right) => {
      const accuracyDifference = (left.correct / left.total) - (right.correct / right.total);
      if (accuracyDifference !== 0) return accuracyDifference;
      if (left.wrong !== right.wrong) return right.wrong - left.wrong;
      return recordTimestamp(right.latestAttempt, ['attemptedAt']) - recordTimestamp(left.latestAttempt, ['attemptedAt']);
    });
}

function humanizeQuestionForm(value) {
  return String(value || 'skill')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderNeedsPracticeView() {
  const list = $('needs-practice-list');
  if (!list) return;
  list.replaceChildren();
  const groups = historySkillGroups();
  if (!groups.length) {
    const empty = document.createElement('div');
    empty.className = 'history-empty';
    empty.innerHTML = '<h3>You are on track.</h3><p>Once a skill has a missed answer, it will appear here with a focused practice option.</p>';
    list.appendChild(empty);
    return;
  }
  groups.forEach((group) => {
    const item = questionFromHistoryAttempt(group.latestAttempt);
    const card = document.createElement('article');
    card.className = 'skill-card';
    const heading = document.createElement('div');
    heading.className = 'skill-card-heading';
    const title = document.createElement('h3');
    title.textContent = item.category === 'terms' ? item.question.replace(/\s+means:\s*$/i, '') : humanizeQuestionForm(item.questionForm);
    const category = document.createElement('p');
    category.textContent = `${categoryLabel(item.category)}${item.grade ? ` · up to Grade ${item.grade}` : ''}`;
    heading.append(title, category);
    card.appendChild(heading);
    const metrics = document.createElement('div');
    metrics.className = 'skill-metrics';
    const accuracy = Math.round((group.correct / group.total) * 100);
    metrics.innerHTML = `<span><strong>${accuracy}%</strong> accuracy</span><span><strong>${group.wrong}</strong> missed</span><span><strong>${group.total}</strong> attempted</span>`;
    card.appendChild(metrics);
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'secondary-button history-action';
    action.dataset.skillId = group.skillId;
    action.textContent = 'Practise this skill';
    card.appendChild(action);
    list.appendChild(card);
  });
}

let historyReturnScreen = 'test';

function openHistoryView(view) {
  const target = view === 'mistakes' ? $('mistakes-screen') : $('needs-practice-screen');
  if (!target) return;
  historyReturnScreen = $('result-screen')?.classList.contains('hidden') === false ? 'result' : $('settings-screen')?.classList.contains('hidden') === false ? 'settings' : 'test';
  stopQuestionTimer();
  $('test-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('settings-screen')?.classList.add('hidden');
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  target.classList.remove('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'false');
  if (view === 'mistakes') renderMistakesView();
  else renderNeedsPracticeView();
  if (authState.idToken) {
    void syncPracticeHistory().then(() => {
      if (!target.classList.contains('hidden')) {
        if (view === 'mistakes') renderMistakesView();
        else renderNeedsPracticeView();
      }
    });
  }
}

function closeHistoryView() {
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  if (historyReturnScreen === 'result') $('result-screen')?.classList.remove('hidden');
  else if (historyReturnScreen === 'settings') $('settings-screen')?.classList.remove('hidden');
  else {
    $('test-screen')?.classList.remove('hidden');
    if (!state.locked) startQuestionTimer();
  }
}

function createFocusedPractice(skillId) {
  const attempts = practiceHistory.attempts
    .filter((attempt) => (attempt.skillId || '') === skillId)
    .sort((left, right) => recordTimestamp(right, ['attemptedAt']) - recordTimestamp(left, ['attemptedAt']));
  const latestByQuestion = new Map();
  attempts.forEach((attempt) => {
    const questionId = attempt.questionId || attempt.id;
    if (!latestByQuestion.has(questionId)) latestByQuestion.set(questionId, attempt);
  });
  const questions = [...latestByQuestion.values()]
    .map(questionFromHistoryAttempt)
    .filter((item) => item.question && (item.options?.length || item.answerType));
  if (!questions.length) return;
  if (state.sessionId && !state.sessionCompleted) completePracticeSession('abandoned');
  state.category = questions[0].category || state.category;
  state.test = questions;
  setActiveCategory(state.category);
  startPracticeSession(questions.length);
  state.current = 0;
  state.score = 0;
  state.selected = null;
  state.locked = false;
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('settings-screen')?.classList.add('hidden');
  $('test-screen')?.classList.remove('hidden');
  renderQuestion();
}

function renderTonicTriadAnswers(item) {
  const answers = $('answers');
  const builder = document.createElement('div');
  builder.className = 'tonic-triad-builder';
  const preview = document.createElement('div');
  preview.className = 'key-signature-preview';
  preview.setAttribute('role', 'img');
  const signatureControls = document.createElement('div');
  signatureControls.className = 'triad-signature-controls';
  const chordControls = document.createElement('section');
  chordControls.className = 'triad-chord-controls';
  chordControls.innerHTML = '<h3>Build the chord</h3>';
  const slots = document.createElement('div');
  slots.className = 'triad-note-slots';
  const noteLetters = document.createElement('div');
  noteLetters.className = 'triad-note-letters';
  const accidentals = document.createElement('div');
  accidentals.className = 'triad-accidental-controls';
  let signatureNotesRow = null;
  const selectedSignatureNotes = [];
  const selections = [null, null, null];
  let signatureAccidental = item.triadMode === 'written-accidentals' ? 'none' : null;
  let activeSlot = 0;

  const signatureReady = () => signatureAccidental === 'none' || selectedSignatureNotes.length > 0;
  const update = () => {
    renderNotation(preview, makeTriadPreviewNotation(item.triadMode, signatureAccidental, selectedSignatureNotes, selections), 520);
    signatureControls.querySelectorAll('[data-signature-mode]').forEach((button) => {
      const active = button.dataset.signatureMode === signatureAccidental;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-checked', String(active));
    });
    signatureControls.querySelectorAll('[data-signature-note]').forEach((button) => {
      const active = selectedSignatureNotes.includes(button.dataset.signatureNote);
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
      button.textContent = `${button.dataset.signatureNote}${signatureAccidental === 'sharp' ? '♯' : '♭'}`;
    });
    if (signatureNotesRow) signatureNotesRow.hidden = !signatureAccidental || signatureAccidental === 'none';
    const canBuildChord = item.triadMode === 'written-accidentals' || signatureReady();
    chordControls.hidden = !canBuildChord;
    slots.replaceChildren();
    ['Root (1)', 'Third (3)', 'Fifth (5)'].forEach((label, index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'triad-slot-button';
      button.classList.toggle('selected', activeSlot === index);
      button.textContent = selections[index] ? `${label}: ${formatPitchName(`${selections[index].letter}${item.triadMode === 'written-accidentals' ? selections[index].accidental || '' : ''}`)}` : label;
      button.addEventListener('click', () => { activeSlot = index; update(); });
      slots.appendChild(button);
    });
    noteLetters.replaceChildren();
    NOTE_LETTERS.forEach((letter) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'key-note-button'; button.textContent = letter;
      button.classList.toggle('selected', selections[activeSlot]?.letter === letter);
      button.addEventListener('click', () => {
        selections[activeSlot] = { letter, accidental: selections[activeSlot]?.accidental || '' };
        update();
      });
      noteLetters.appendChild(button);
    });
    accidentals.replaceChildren();
    if (item.triadMode === 'written-accidentals') {
      [['b', '♭'], ['', '♮'], ['#', '♯']].forEach(([value, label]) => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'key-mode-button'; button.textContent = label;
        button.classList.toggle('selected', selections[activeSlot]?.accidental === value);
        button.disabled = !selections[activeSlot];
        button.addEventListener('click', () => { if (selections[activeSlot]) selections[activeSlot].accidental = value; update(); });
        accidentals.appendChild(button);
      });
    }
    const selectedNotes = selections.map((selection) => selection && (item.triadMode === 'key-signature' ? selection.letter : `${selection.letter}${selection.accidental || ''}`));
    state.selected = canBuildChord && selectedNotes.every(Boolean)
      ? JSON.stringify({ signature: item.triadMode === 'key-signature' ? keySignatureValue(signatureAccidental, selectedSignatureNotes) : 'none', notes: selectedNotes })
      : null;
    $('next-button').disabled = !state.selected;
    $('next-button').textContent = state.selected
      ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question')
      : item.triadMode === 'key-signature' && !canBuildChord ? 'Build the key signature first' : `Build the ${item.triadFunction || 'tonic'} triad`;
  };

  if (item.triadMode === 'key-signature') {
    const modes = document.createElement('div');
    modes.className = 'key-signature-modes';
    [['sharp', '♯ Sharps'], ['flat', '♭ Flats'], ['none', 'No accidentals']].forEach(([type, label]) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'key-mode-button'; button.dataset.signatureMode = type; button.textContent = label;
      button.setAttribute('role', 'radio'); button.setAttribute('aria-checked', 'false');
      button.addEventListener('click', () => { signatureAccidental = type; selectedSignatureNotes.length = 0; update(); });
      modes.appendChild(button);
    });
    const notes = document.createElement('div');
    notes.className = 'key-signature-notes';
    signatureNotesRow = notes;
    NOTE_LETTERS.forEach((note) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'key-note-button'; button.dataset.signatureNote = note;
      button.textContent = note;
      button.addEventListener('click', () => {
        const selectedIndex = selectedSignatureNotes.indexOf(note);
        if (selectedIndex >= 0) selectedSignatureNotes.splice(selectedIndex, 1);
        else selectedSignatureNotes.push(note);
        update();
      });
      notes.appendChild(button);
    });
    signatureControls.append(modes, notes);
  }
  chordControls.append(slots, noteLetters, accidentals);
  builder.append(preview, signatureControls, chordControls);
  answers.appendChild(builder);
  update();
}

function renderKeySignatureAnswers() {
  const answers = $('answers');
  const builder = document.createElement('div');
  builder.className = 'key-signature-builder';
  const preview = document.createElement('div');
  preview.className = 'key-signature-preview';
  preview.setAttribute('role', 'img');
  const modes = document.createElement('div');
  modes.className = 'key-signature-modes';
  modes.setAttribute('role', 'radiogroup');
  modes.setAttribute('aria-label', 'Accidental type');
  const notes = document.createElement('div');
  notes.className = 'key-signature-notes';
  notes.setAttribute('aria-label', 'Notes in the key signature');
  const selectedNotes = [];
  let accidental = null;

  const update = () => {
    renderKeySignaturePreview(preview, accidental, selectedNotes);
    modes.querySelectorAll('button').forEach((button) => {
      const active = button.dataset.accidental === accidental;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-checked', String(active));
    });
    notes.replaceChildren();
    if (accidental && accidental !== 'none') {
      const symbol = accidental === 'sharp' ? '♯' : '♭';
      NOTE_LETTERS.forEach((note) => {
        const button = document.createElement('button');
        const active = selectedNotes.includes(note);
        button.type = 'button';
        button.className = 'key-note-button';
        button.textContent = `${note}${symbol}`;
        button.setAttribute('aria-pressed', String(active));
        button.classList.toggle('selected', active);
        button.addEventListener('click', () => {
          const selectedIndex = selectedNotes.indexOf(note);
          if (selectedIndex >= 0) selectedNotes.splice(selectedIndex, 1);
          else selectedNotes.push(note);
          update();
        });
        notes.appendChild(button);
      });
    }
    state.selected = accidental === 'none' || selectedNotes.length > 0 ? keySignatureValue(accidental, selectedNotes) : null;
    $('next-button').disabled = !state.selected;
    $('next-button').textContent = state.selected ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question') : 'Build the key signature';
  };

  [['sharp', '♯ Sharps'], ['flat', '♭ Flats'], ['none', 'No accidentals']].forEach(([type, label]) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'key-mode-button';
    button.dataset.accidental = type; button.textContent = label;
    button.setAttribute('role', 'radio'); button.setAttribute('aria-checked', 'false');
    button.addEventListener('click', () => {
      accidental = type;
      selectedNotes.length = 0;
      update();
    });
    modes.appendChild(button);
  });
  builder.append(preview, modes, notes);
  answers.appendChild(builder);
  update();
}

function renderRestValueAnswers(item) {
  const answers = $('answers');
  const builder = document.createElement('div');
  builder.className = 'rest-value-builder';
  const selections = Array.from({ length: item.restCount }, () => null);
  const update = () => {
    builder.querySelectorAll('.rest-duration-button').forEach((button) => {
      const index = Number(button.dataset.restIndex);
      button.classList.toggle('selected', selections[index]?.units === Number(button.dataset.units));
    });
    builder.querySelectorAll('.rest-dot-button').forEach((button) => {
      const index = Number(button.dataset.restIndex);
      button.classList.toggle('selected', Boolean(selections[index]?.dotted));
    });
    state.selected = selections.every(Boolean) ? JSON.stringify(selections) : null;
    $('next-button').disabled = !state.selected;
    $('next-button').textContent = state.selected ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question') : 'Complete the rest values';
  };
  for (let index = 0; index < item.restCount; index += 1) {
    const group = document.createElement('section');
    group.className = 'rest-answer-group';
    group.innerHTML = `<h3>Rest ${index + 1}</h3>`;
    const controls = document.createElement('div');
    controls.className = 'rest-answer-controls';
    const durations = document.createElement('div');
    durations.className = 'rest-duration-options';
    REST_DURATIONS.forEach((duration) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'rest-duration-button';
      button.dataset.restIndex = String(index); button.dataset.units = String(duration.units);
      button.setAttribute('aria-label', `${duration.name} rest`);
      button.innerHTML = restIconMarkup(duration.name);
      button.addEventListener('click', () => { selections[index] = { units: duration.units, dotted: selections[index]?.dotted || false }; update(); });
      durations.appendChild(button);
    });
    const dot = document.createElement('button');
    dot.type = 'button'; dot.className = 'rest-dot-button';
    dot.dataset.restIndex = String(index); dot.setAttribute('aria-label', 'Toggle dotted rest');
    dot.innerHTML = '<span class="rest-dot-symbol">·</span>';
    dot.addEventListener('click', () => { if (selections[index]) selections[index].dotted = !selections[index].dotted; update(); });
    controls.append(durations, dot);
    group.appendChild(controls);
    builder.appendChild(group);
  }
  answers.appendChild(builder);
  update();
}

function chooseAnswer(button, answer) {
  if (state.locked) return;
  state.selected = answer;
  submitAnswer();
}

function flashAnswerResult(correct, onComplete) {
  const card = document.querySelector('.question-card');
  if (!card) {
    onComplete();
    return;
  }
  const className = correct ? 'answer-flash-correct' : 'answer-flash-incorrect';
  card.classList.remove('answer-flash-correct', 'answer-flash-incorrect');
  card.classList.add(className);
  window.setTimeout(() => {
    card.classList.remove(className);
    onComplete();
  }, 180);
}

function showPracticeExplanation(item, correct, timedOut) {
  $('score-label').textContent = `${state.score} correct`;
  const title = $('practice-result-title');
  title.textContent = timedOut ? "Time's up" : correct ? 'Correct!' : 'Not quite';
  title.className = correct ? 'practice-result-good' : 'practice-result-bad';
  $('practice-correct-answer').textContent = formatHistoryAnswer(item, item.correct);
  $('practice-explanation-text').textContent = item.explanation || '';
  $('practice-next-button').textContent = state.current === state.test.length - 1 ? 'See results' : 'Next question';
  const explanationPanel = $('practice-explanation');
  explanationPanel.classList.remove('hidden');
  $('next-button').classList.add('hidden');
  $('next-button').disabled = true;
  $('answers').querySelectorAll('button').forEach((button) => {
    button.disabled = true;
    if (button.classList.contains('answer-option')) {
      const isCorrect = button.dataset.answer === String(item.correct);
      button.classList.toggle('correct', isCorrect);
      button.classList.toggle('incorrect', !timedOut && button.dataset.answer === String(state.selected) && !correct);
    }
  });
  explanationPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  $('practice-next-button').focus({ preventScroll: true });
}

function advanceQuestion() {
  if (state.current === state.test.length - 1) {
    renderResults();
    return;
  }
  state.current += 1;
  renderQuestion();
}

function submitAnswer(timedOut = false) {
  if (state.locked) return;
  stopQuestionTimer();
  const item = state.test[state.current];
  item.userAnswer = state.selected;
  state.locked = true;
  const correct = state.selected === item.correct;
  if (correct) state.score += 1;
  recordPracticeAttempt(item, correct, timedOut);
  if (state.practiceMode) {
    showPracticeExplanation(item, correct, timedOut);
    return;
  }
  flashAnswerResult(correct, () => {
    advanceQuestion();
  });
}

function nextQuestion() {
  submitAnswer();
}

function continueAfterExplanation() {
  if (!state.locked) return;
  advanceQuestion();
}

function renderResults() {
  stopQuestionTimer();
  completePracticeSession('completed');
  $('test-screen').classList.add('hidden');
  $('result-screen').classList.remove('hidden');
  const wrong = state.test.filter((item) => item.userAnswer !== item.correct);
  $('result-title').textContent = `${state.score} / ${state.test.length}`;
  $('result-summary').textContent = wrong.length === 0 ? 'Perfect score — every answer was correct.' : `${wrong.length} question${wrong.length === 1 ? '' : 's'} to review.`;
  const review = $('review');
  review.innerHTML = '';
  if (wrong.length === 0) {
    const perfect = document.createElement('div');
    perfect.className = 'review-item correct-item';
    perfect.innerHTML = '<h3>Excellent work.</h3><p>Try another test to practise with a fresh mix of questions.</p>';
    review.appendChild(perfect);
    return;
  }
  wrong.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'review-item';
    const label = item.grade
      ? `Grade ${item.grade} · ${categoryLabel(item.category)}`
      : categoryLabel(item.category);
    const userAnswer = item.answerType === 'key-signature' ? formatKeySignatureAnswer(item.userAnswer) : item.answerType === 'rest-identification' ? formatRestAnswers(item.userAnswer) : item.answerType === 'tonic-triad' ? formatTonicTriadAnswer(item.userAnswer) : item.userAnswer;
    const correctAnswer = item.answerType === 'key-signature' ? formatKeySignatureAnswer(item.correct) : item.answerType === 'rest-identification' ? formatRestAnswers(item.correct) : item.answerType === 'tonic-triad' ? formatTonicTriadAnswer(item.correct) : item.correct;
    card.innerHTML = `<h3>${label} · ${item.question}</h3>${item.notation ? '<div class="review-notation" role="img"></div>' : item.image ? `<img class="review-image" src="${item.image}" alt="Musical notation for the question" />` : ''}<p><strong>Your answer:</strong> ${userAnswer || 'No answer'}</p><p><strong>Correct answer:</strong> ${correctAnswer}</p><p class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</p>`;
    if (item.notation) renderNotation(card.querySelector('.review-notation'), item.notation, 250);
    review.appendChild(card);
  });
}

let appInitialized = false;

function initializeQuizApp() {
  document.querySelectorAll('[data-app-version]').forEach((element) => {
    element.textContent = APP_VERSION;
  });
  if (appInitialized || !$('test-screen')) return;
  appInitialized = true;
  Object.assign(state, loadPreferences());
  configureAuthUI({ renderAuthState, setAuthMessage });

  $('settings-button')?.addEventListener('click', () => {
    if ($('settings-screen')?.classList.contains('hidden')) openSettings();
    else closeSettings();
  });
  $('settings-back-button')?.addEventListener('click', closeSettings);
  $('review-mistakes-button')?.addEventListener('click', () => openHistoryView('mistakes'));
  $('needs-practice-button')?.addEventListener('click', () => openHistoryView('needs-practice'));
  $('mistakes-back-button')?.addEventListener('click', closeHistoryView);
  $('needs-practice-back-button')?.addEventListener('click', closeHistoryView);
  $('needs-practice-list')?.addEventListener('click', (event) => {
    const button = event.target.closest('.history-action');
    if (button?.dataset.skillId) createFocusedPractice(button.dataset.skillId);
  });
  $('next-button').addEventListener('click', nextQuestion);
  $('practice-next-button').addEventListener('click', continueAfterExplanation);
  document.querySelectorAll('.category-button').forEach((button) => {
    button.addEventListener('click', () => createTest(state.questionCount, button.dataset.category));
  });
  document.querySelectorAll('.grade-dot').forEach((button) => {
    button.addEventListener('click', () => {
      settingsChanged = true;
      setActiveGrade(Number(button.dataset.grade));
    });
  });
  $('test-length').addEventListener('change', (event) => {
    state.questionCount = QUESTION_COUNT_OPTIONS.includes(Number(event.target.value))
      ? Number(event.target.value)
      : DEFAULT_QUESTION_COUNT;
    settingsChanged = true;
    savePreferences();
  });
  $('timer-enabled').addEventListener('change', (event) => {
    state.timerEnabled = event.target.checked;
    settingsChanged = true;
    savePreferences();
  });
  $('practice-mode-toggle').addEventListener('click', () => {
    state.practiceMode = !state.practiceMode;
    settingsChanged = true;
    syncSettingsControls();
    savePreferences();
  });
  $('restart-button').addEventListener('click', () => createTest(state.questionCount, state.category));
  $('sign-out-button')?.addEventListener('click', signOutGoogle);
  syncSettingsControls();
  setActiveGrade(state.grade);
  createTest(state.questionCount, state.category);
  renderAuthState();
  void initializeGoogleSignIn();
}

export { initializeQuizApp };
