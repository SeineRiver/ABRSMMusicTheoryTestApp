const bankContainer = document.getElementById('question-bank');
const questionBank = window.ABRSM_QUESTION_BANK;
const grades = [1, 2, 3, 4, 5];
const tabList = document.createElement('div');
tabList.className = 'bank-tabs';
tabList.setAttribute('role', 'tablist');
tabList.setAttribute('aria-label', 'Question bank grade');
const panel = document.createElement('section');
panel.className = 'bank-panel';
panel.setAttribute('role', 'tabpanel');
panel.tabIndex = 0;

function renderGrade(grade) {
  const questions = questionBank[grade] || [];
  panel.replaceChildren();
  panel.setAttribute('aria-labelledby', `bank-tab-${grade}`);
  const heading = document.createElement('h2');
  heading.textContent = `Grade ${grade}`;
  panel.appendChild(heading);
  const count = document.createElement('p');
  count.className = 'bank-count';
  count.textContent = `${questions.length} question${questions.length === 1 ? '' : 's'} in this bank`;
  panel.appendChild(count);
  if (!questions.length) {
    const empty = document.createElement('p');
    empty.className = 'bank-empty';
    empty.textContent = 'Grade 5 questions have not been added yet.';
    panel.appendChild(empty);
    return;
  }
  const list = document.createElement('div');
  list.className = 'bank-list';
  questions.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'bank-item';
    const title = document.createElement('h3');
    title.textContent = `${index + 1}. ${item.question}`;
    card.appendChild(title);
    if (item.image) {
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = `Musical notation for: ${item.question}`;
      card.appendChild(image);
    }
    const answer = document.createElement('p');
    answer.innerHTML = `<strong>Correct answer:</strong> ${item.answer}`;
    const explanation = document.createElement('p');
    explanation.innerHTML = `<strong>Explanation:</strong> ${item.explanation}`;
    card.append(answer, explanation);
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

panel.id = 'bank-panel';
bankContainer.append(tabList, panel);
renderGrade(1);
