import { APP_VERSION } from './js/config.js';
import { BANK } from './js/question-bank.js';
import { practiceHistory } from './js/history.js';
import { testStats, formatTestDate } from './js/practice-stats.js';
import { appendHistoryAttempt, categoryLabel } from './js/question-review.js';

const bankContainer = document.getElementById('question-bank');
const sessionId = new URLSearchParams(window.location.search).get('session');

function renderTestMistakes() {
  bankContainer.replaceChildren();
  document.title = 'Missed questions | Music Theory Quiz';
  const back = document.getElementById('questions-back-link');
  back.href = 'index.html?view=stats';
  back.textContent = '← Back to Stats';
  document.getElementById('questions-eyebrow').textContent = 'TEST REVIEW';
  document.getElementById('questions-title').textContent = 'Missed questions';
  const description = document.getElementById('questions-description');
  const session = testStats(practiceHistory).find((item) => item.id === sessionId);
  const browse = document.createElement('a');
  browse.className = 'text-link';
  browse.href = 'question-bank.html';
  browse.textContent = 'Browse all Questions';
  if (!session) {
    description.textContent = 'This test is not saved on this device. Return to Stats and sign in to sync your saved tests.';
    bankContainer.appendChild(browse);
    return;
  }
  description.textContent = `${categoryLabel(session.category)} · ${formatTestDate(session.startedAt)} · ${session.correct} / ${session.status === 'completed' ? session.total : session.answered} correct`;
  const list = document.createElement('div');
  list.className = 'history-list';
  bankContainer.appendChild(list);
  session.mistakes.forEach((attempt) => {
    const card = appendHistoryAttempt(list, attempt);
    card.id = `attempt-${attempt.id}`;
  });
  if (session.wrong === 0 || session.mistakes.length < session.wrong) {
    const note = document.createElement('p');
    note.className = 'history-empty';
    note.textContent = session.wrong === 0 ? 'No missed questions in this test.'
      : 'Some older question details are no longer saved on this device.';
    list.appendChild(note);
  }
  bankContainer.appendChild(browse);
}

function renderBank() {
  const grades = [1, 2, 3, 4, 5];
  const tabList = document.createElement('div');
  tabList.className = 'bank-tabs';
  tabList.setAttribute('role', 'tablist');
  tabList.setAttribute('aria-label', 'Question bank grade');
  const panel = document.createElement('section');
  panel.className = 'bank-panel';
  panel.id = 'bank-panel';
  panel.setAttribute('role', 'tabpanel');
  panel.tabIndex = 0;

  function renderGrade(grade) {
    const questions = BANK[grade] || [];
    panel.replaceChildren();
    panel.setAttribute('aria-labelledby', `bank-tab-${grade}`);
    const heading = document.createElement('h2');
    heading.textContent = `Grade ${grade}`;
    const count = document.createElement('p');
    count.className = 'bank-count';
    count.textContent = `${questions.length} question${questions.length === 1 ? '' : 's'} in this bank`;
    panel.append(heading, count);
    const list = document.createElement('div');
    list.className = 'bank-list';
    questions.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'bank-item';
      card.id = item.questionId;
      const title = document.createElement('h3');
      const prompt = item.displayQuestion || item.question;
      title.textContent = `${index + 1}. ${prompt}`;
      card.appendChild(title);
      if (item.image) {
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = `Musical notation for: ${prompt}`;
        card.appendChild(image);
      }
      for (const [label, value] of [['Correct answer', item.answer], ['Explanation', item.explanation]]) {
        const paragraph = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        paragraph.append(strong, document.createTextNode(value));
        card.appendChild(paragraph);
      }
      list.appendChild(card);
    });
    panel.appendChild(list);
  }

  grades.forEach((grade) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bank-tab';
    button.id = `bank-tab-${grade}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'bank-panel');
    button.setAttribute('aria-selected', String(grade === 1));
    button.textContent = `Grade ${grade}`;
    button.addEventListener('click', () => {
      tabList.querySelectorAll('.bank-tab').forEach((tab) => tab.setAttribute('aria-selected', String(tab === button)));
      renderGrade(grade);
    });
    tabList.appendChild(button);
  });
  bankContainer.append(tabList, panel);
  renderGrade(1);
}

if (sessionId !== null) renderTestMistakes();
else renderBank();
window.addEventListener('abrsm-history-changed', () => { if (sessionId !== null) renderTestMistakes(); });
document.querySelectorAll('[data-app-version]').forEach((element) => { element.textContent = APP_VERSION; });
