const bankContainer = document.getElementById('question-bank');
const questionBank = window.ABRSM_QUESTION_BANK;

Object.entries(questionBank).forEach(([grade, questions]) => {
  const section = document.createElement('section');
  section.className = 'bank-section';
  section.setAttribute('aria-labelledby', `grade-${grade}-heading`);
  section.innerHTML = `<h2 id="grade-${grade}-heading">Grade ${grade}</h2><div class="bank-list"></div>`;
  const list = section.querySelector('.bank-list');

  questions.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'bank-item';
    card.innerHTML = `<h3>${index + 1}. ${item.question}</h3>${item.image ? `<img src="${item.image}" alt="Musical notation for: ${item.question}" />` : ''}<p><strong>Correct answer:</strong> ${item.answer}</p><p><strong>Explanation:</strong> ${item.explanation}</p>`;
    list.appendChild(card);
  });

  bankContainer.appendChild(section);
});
