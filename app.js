// Rebuilt from the PDF: the three PPSX banks plus additional entries from the
// attached official ABRSM terms-and-signs PDF/DOCX. Each entry is [question, answer, optional image].
const RAW_BANK = {
  1: [
    ['Accelerando means:', 'Gradually getting quicker'], ['Adagio means:', 'Slow'], ['Allegretto means:', 'Fairly quick—but not as quick as allegro'], ['Allegro means:', 'Quick'], ['Andante means:', 'At a walking pace'], ['Cantabile means:', 'In a singing style'], ['Crescendo means:', 'Gradually getting louder'], ['Da capo means:', 'Repeat from the beginning'], ['Dal segno means:', 'Repeat from the sign'], ['Decrescendo means:', 'Gradually getting quieter'], ['Diminuendo means:', 'Gradually getting quieter'], ['Fine means:', 'The end'], ['f (forte) means:', 'Loud'], ['ff (fortissimo) means:', 'Very loud'], ['Legato means:', 'Smoothly'], ['Lento means:', 'Slow'], ['Mezzo means:', 'Half'], ['Maestoso means:', 'Majestic'], ['mf (mezzo forte) means:', 'Moderately loud'], ['mp (mezzo piano) means:', 'Moderately quiet'], ['Moderato means:', 'Moderately'], ['p (piano) means:', 'Quiet'], ['pp (pianissimo) means:', 'Very quiet'], ['Poco means:', 'A little'], ['Rallentando (or rall.) means:', 'Gradually getting slower'], ['Ritardando (or rit.) means:', 'Gradually getting slower'], ['Ritenuto (or rit.) means:', 'Held back'], ['Staccato (or stacc.) means:', 'Detached'], ['Tempo means:', 'Speed/time'], ['These signs above and below the notes are:', 'Accents', 'assets/grade1/image5.png'], ['The dots above the notes are:', 'Staccato marks', 'assets/grade1/image6.png'], ['The sign above the last note means:', 'A pause', 'assets/grade1/image7.png'], ['The sign above these notes means:', 'Tie', 'assets/grade1/image8.png'], ['The two dots at the stave end mean:', 'Repeat last section', 'assets/grade1/image9.png'],
    ['A tempo means:', "Return to the former speed ('in time')"], ['Allegro moderato means:', 'Moderately quick'], ['Da capo al fine (D.C. al fine) means:', "From the beginning until 'fine'"], ['MM. crotchet = 96 means:', "Maelzel's metronome, 96 beats per minute"], ['Pause or fermata means:', 'Hold for longer than written'], ['Ottava sign (8va) means:', 'Play one octave higher or lower than written']
  ],
  2: [
    ['a means:', 'In the style of'], ['a, alla means:', 'In the manner of'], ['Allargando means:', 'Broadening'], ['Andantino means:', 'Slightly faster than andante'], ['Assai means:', 'Very'], ['Con, col means:', 'With'], ['Dolce means:', 'Sweet'], ['e, ed means:', 'And'], ['Espressivo means:', 'Expressive'], ['fp (forte-piano) means:', 'Loud then immediately quiet'], ['Giocoso means:', 'Playful'], ['Grave means:', 'Very slow, solemn'], ['Grazioso means:', 'Graceful'], ['Larghetto means:', 'Rather slow (but not as slow as largo)'], ['Largo means:', 'Slow'], ['Ma means:', 'But'], ['Maestoso means:', 'Majestic'], ['Meno means:', 'Less'], ['Molto means:', 'Much'], ['Mosso, moto means:', 'Movement'], ['Non means:', 'Not'], ['Piu means:', 'More'], ['Presto means:', 'Fast'], ['Senza means:', 'Without'], ['sf, sfz (sforzando) means:', 'Forced, accented'], ['Simile (or sim.) means:', 'In the same way'], ['Sostenuto means:', 'Sustained'], ['Tenuto means:', 'Held'], ['Troppo means:', 'Too much'], ['Vivace, vivo means:', 'Lively, quick'], ['Dots inside the slur mark mean:', 'Semi-staccato', 'assets/grade2/image5.png'], ['These wedge shapes above and below the notes mean:', 'Staccatissimo (super-staccato)', 'assets/grade2/image6.png'], ['The lines above and below these notes mean:', 'Tenuto (held with slight pressure)', 'assets/grade2/image7.png'],
    ['Con moto means:', 'With movement'], ['Non troppo means:', 'Not too much'], ['Piu mosso means:', 'More speed (faster)'], ['Accent sign means:', 'Play strongly'], ['Mezzo-staccato means:', 'Moderately short and detached'], ['Marcato sign means:', 'A strong accent'], ['Staccatissimo means:', 'Extremely short and detached']
  ],
  3: [
    ['adagietto means:', 'Rather slow'], ['ad libitum, ad lib. means:', 'Play freely'], ['Agitato means:', 'Agitated'], ['Alla breve means:', 'With a minim beat'], ['Amore means:', 'Love'], ['Anima means:', 'Soul, spirit'], ['Animato means:', 'Animated, lively'], ['Ben means:', 'Well'], ['Brio means:', 'Vigour'], ['Comodo means:', 'Convenient'], ['Deciso means:', 'With determination'], ['Delicato means:', 'Delicate'], ['Energico means:', 'Energetic'], ['Forza means:', 'Force'], ['Largamente means:', 'Broadly'], ['Leggiero means:', 'Light, nimble'], ['Marcato, marc. means:', 'Emphatic, accented'], ['Marziale means:', 'In a military style'], ['Mesto means:', 'Sad'], ['Pesante means:', 'Heavy'], ['Prima, primo means:', 'First'], ['Risoluto means:', 'With determination'], ['Ritmico means:', 'Rhythmically'], ['Rubato, tempo rubato means:', 'With some freedom of time'], ['Scherzando, scherzoso means:', 'Playful, joking'], ['Seconda, secondo means:', 'Second'], ['Semplice means:', 'Simple, plain'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'], ['Subito means:', 'Suddenly'], ['Tanto means:', 'So much'], ['Tranquillo means:', 'Calm'], ['Triste, tristamente means:', 'Sad, sorrowful'], ['Volta means:', 'Time'], ['What is the meaning of the two dots at the end of the stave?', 'Repeat previous section', 'assets/grade3/image5.png'], ['What does the line above the notes mean?', 'The slur', 'assets/grade3/image6.png'], ['What is the meaning of the dots above these notes?', 'Staccato marks', 'assets/grade3/image7.png'], ['What is the name of the line joining these two notes?', 'Tie', 'assets/grade3/image8.png'], ['What does a crotchet = 96 mean?', '96 crotchet beats per minute', 'assets/grade3/image9.png'],
    ['Amoroso means:', 'Loving'], ['Ben marcato means:', 'Well marked'], ['Con anima means:', 'With feeling, with spirit'], ['Con brio means:', 'With vigour'], ['Con forza means:', 'With force']
  ]
};

// Short score excerpts are shared where the printed marking is the teaching point.
// Character words remain text-only because they do not have a single notated shape.
const EXAMPLE_IMAGES = {
  'andante means:': 'assets/examples/tempo-metronome.png',
  'crescendo means:': 'assets/examples/hairpins.png',
  'decrescendo means:': 'assets/examples/hairpins.png',
  'diminuendo means:': 'assets/examples/hairpins.png',
  'f (forte) means:': 'assets/examples/dynamic-levels.png',
  'ff (fortissimo) means:': 'assets/examples/dynamic-levels.png',
  'mf (mezzo forte) means:': 'assets/examples/dynamic-levels.png',
  'mp (mezzo piano) means:': 'assets/examples/dynamic-levels.png',
  'p (piano) means:': 'assets/examples/dynamic-levels.png',
  'pp (pianissimo) means:': 'assets/examples/dynamic-levels.png',
  'staccato (or stacc.) means:': 'assets/grade1/image6.png',
  'mm. crotchet = 96 means:': 'assets/examples/tempo-metronome.png',
  'ottava sign (8va) means:': 'assets/examples/ottava.png',
  'tenuto means:': 'assets/grade2/image7.png',
  'accent sign means:': 'assets/grade1/image5.png',
  'mezzo-staccato means:': 'assets/grade2/image5.png',
  'marcato sign means:': 'assets/grade1/image5.png',
  'staccatissimo means:': 'assets/grade2/image6.png',
  'alla breve means:': 'assets/examples/alla-breve.png',
  'marcato, marc. means:': 'assets/grade1/image5.png',
};

const EXPLANATION_OVERRIDES = {
  'these signs above and below the notes are:': 'An accent mark stresses an individual note. It is a brief emphasis, unlike a crescendo, which gradually increases the volume across a passage.',
  'the dots above the notes are:': 'A staccato dot makes each note short and detached. It contrasts with legato and is less extreme than staccatissimo.',
  'the sign above the last note means:': 'A pause, or fermata, holds the note or rest longer than its written value. A tenuto mark normally means the full written value, not an indefinite extension.',
  'the sign above these notes means:': 'A tie joins notes of the same pitch and combines their durations; a slur normally indicates smooth phrasing between different pitches.',
  'the two dots at the stave end mean:': 'The repeat sign sends the performer back to play the indicated section again. This differs from Da capo or Dal segno, which explicitly redirect the music to the beginning or a sign.',
  'dots inside the slur mark mean:': 'Dots within a slur indicate mezzo-staccato: moderately short and detached. It lies between smooth legato and very short staccatissimo.',
  'these wedge shapes above and below the notes mean:': 'These wedge-shaped marks indicate staccatissimo: extremely short and detached. It is sharper and shorter than ordinary staccato.',
  'the lines above and below these notes mean:': 'A tenuto line means to hold the note for its full written value, often with slight pressure. It contrasts with staccato and is less extended than a fermata.',
  'what is the meaning of the two dots at the end of the stave?': 'The repeat sign means to play the previous section again. It is different from D.C. (back to the beginning) and D.S. (back to the sign).',
  'what does the line above the notes mean?': 'The curved line is a slur, indicating smooth connection across notes. Unlike a tie, it can join different pitches and does not combine their durations.',
  'what is the meaning of the dots above these notes?': 'The dots are staccato marks, so the notes should be played short and detached. Staccatissimo is even shorter, while legato is smooth and connected.',
  'what is the name of the line joining these two notes?': 'A tie joins notes of the same pitch and combines their written durations. A slur may look similar but joins notes for phrasing, including different pitches.',
  'what does a crotchet = 96 mean?': 'The crotchet receives the beat, and the tempo is 96 crotchet beats per minute. The number is the metronome speed, not a count of 96 notes in the piece.',
  'pause or fermata means:': 'A fermata tells the performer to hold the note or rest longer than its written value. It allows expressive lengthening, unlike tenuto, which normally preserves the written duration.',
  'ottava sign (8va) means:': 'An ottava sign changes the sounding pitch by an octave: higher when written above, lower when written below. It changes register, unlike a tie or slur.',
  'accent sign means:': 'An accent mark means the note should be played strongly or stressed. Marcato is a closely related marking; staccato instead describes a detached length of note.',
  'mezzo-staccato means:': 'Mezzo-staccato combines moderate shortening with a detached touch. It is less pointed than staccato and much less extreme than staccatissimo.',
  'marcato sign means:': 'Marcato means marked or strongly accented, giving the note extra emphasis. It concerns stress, whereas staccato concerns detached duration and touch.',
  'staccatissimo means:': 'Staccatissimo is stronger than ordinary staccato: the note is extremely short and detached. Mezzo-staccato is a gentler, moderately detached version.',
  'accelerando means:': 'Accelerando is a gradual increase in tempo, so the music becomes faster little by little.',
  'rallentando (or rall.) means:': 'Rallentando means gradually slowing down over a passage.',
  'ritardando (or rit.) means:': 'Ritardando means gradually slowing down, usually over a passage rather than immediately.',
  'ritenuto (or rit.) means:': 'Ritenuto means becoming slower or holding back immediately, unlike a gradual rallentando or ritardando.',
  'a tempo means:': 'A tempo tells the performer to return to the previous speed.',
  'da capo means:': 'Da capo means go back to the beginning and play from there.',
  'dal segno means:': 'Dal segno means return to the sign and continue from there.',
  'da capo al fine (d.c. al fine) means:': 'D.C. al fine means return to the beginning and continue until the word Fine.',
  'andantino means:': 'Andantino is a tempo direction related to Andante; in this bank it means slightly faster than a walking pace.',
  'largo means:': 'Largo indicates a broad, slow tempo.',
  'larghetto means:': 'Larghetto is rather slow, but not as slow as Largo.',
  'presto means:': 'Presto indicates a very fast tempo.',
  'grave means:': 'Grave indicates a very slow and solemn character.',
  'rubato, tempo rubato means:': 'Rubato allows some freedom in the timing, with the performer stretching or compressing the pulse expressively.',
  'alla breve means:': 'Alla breve is cut time, felt with a minim as the beat.',
  'common time (c) means:': 'Common time is the symbol C and represents a 4/4 time signature.',
};

const TERM_GUIDANCE = {
  accelerando: 'This is a gradual tempo change. It is the opposite direction from rallentando or ritardando, which gradually slow the music down.',
  adagio: 'This is a slow tempo marking. It is slower than Allegretto and Allegro, but is less solemn in character than Grave.',
  allegretto: 'This is moderately quick. It is quicker than Andante but not as fast as Allegro.',
  allegro: 'This is a quick tempo marking. It is faster than Allegretto; do not confuse it with a dynamic marking such as forte, which describes volume.',
  andante: 'This describes a walking pace. It is generally slower than Allegretto and faster than Adagio.',
  crescendo: 'This is a gradual increase in volume. It is the opposite of decrescendo or diminuendo, which make the music quieter.',
  'da capo': 'This is a navigation instruction, not a tempo marking: return to the beginning. D.C. al fine adds the stopping point, Fine.',
  'dal segno': 'This is a navigation instruction: return to the sign (𝄋), rather than going back to the beginning as in Da capo.',
  decrescendo: 'This means a gradual decrease in volume. It is interchangeable with diminuendo and contrasts with crescendo.',
  diminuendo: 'This means a gradual decrease in volume. It is interchangeable with decrescendo and contrasts with crescendo.',
  forte: 'This describes volume, not speed: play loudly. Its stronger form is fortissimo, while piano means quietly.',
  fortissimo: 'This describes very loud volume. It is stronger than forte; it does not mean very fast, despite the similar-looking word Presto.',
  legato: 'This describes a smooth, connected touch. It contrasts with staccato, where notes are short and detached.',
  lento: 'This is a slow tempo marking. It is close to Adagio; Largo is also slow but suggests a broader character.',
  mezzo: 'Mezzo means half or medium. In dynamics, mezzo modifies forte or piano to create mf or mp; it is not the same as mezzo-staccato.',
  'mezzo forte': 'This is moderately loud. It is between piano (quiet) and forte (loud), rather than being as loud as fortissimo.',
  'mezzo piano': 'This is moderately quiet. It is louder than piano but softer than mezzo forte.',
  moderato: 'This indicates a moderate tempo, between very slow and very fast. It is a speed instruction, not a volume instruction.',
  piano: 'This describes quiet volume. It contrasts with forte (loud); it does not mean slow, even though slow music is sometimes played quietly.',
  pianissimo: 'This describes very quiet volume. It is softer than piano, not slower than piano.',
  rallentando: 'This is a gradual slowing down. It contrasts with accelerando and is similar to ritardando; unlike ritenuto, the change is gradual.',
  ritardando: 'This is a gradual slowing down. It is similar to rallentando; ritenuto usually indicates a more immediate holding back.',
  ritenuto: 'This means held back or suddenly slower. It differs from ritardando and rallentando, which usually describe a gradual slowing down.',
  staccato: 'This indicates a short, detached touch. It contrasts with legato and is less extreme than staccatissimo.',
  tempo: 'This concerns the speed or pace of the music. It should not be confused with dynamics, which describe how loud or quiet the music is.',
  'a tempo': 'This restores the previous tempo after a change. It does not mean start from the beginning; that instruction is Da capo.',
  'allegro moderato': 'This is moderately quick: more restrained than Allegro but quicker than a moderate walking pace.',
  'pause or fermata': 'This lengthens a note or rest beyond its written value. Unlike a tenuto mark, it does not simply ask for the full written duration.',
  'ottava sign (8va)': 'This changes the sounding pitch by an octave. It is a pitch/register instruction, unlike a tie or slur, which affects connection and phrasing.',
  allargando: 'This usually means broadening, often by becoming slower and sometimes louder. It is more than simply holding back one note as in ritenuto.',
  andantino: 'This is related to Andante but is slightly faster in this syllabus bank. It should not be treated as another word for Adagio.',
  grave: 'This combines a very slow tempo with a solemn character. Largo and Lento are slow, but do not necessarily imply the same seriousness.',
  larghetto: 'This is rather slow but not as slow as Largo. The suffix helps distinguish it from the broader, slower Largo.',
  largo: 'This is a broad, slow tempo. Larghetto is somewhat less slow, while Grave adds a solemn character.',
  presto: 'This indicates a very fast tempo. It describes speed, not loudness; forte and fortissimo describe volume.',
  sostenuto: 'This asks for a sustained, supported sound. It is related to Tenuto, but Sostenuto often suggests maintaining the line or character across a phrase.',
  tenuto: 'This asks the performer to hold a note for its full value, often with slight emphasis. It is not the same as staccato or a fermata.',
  vivace: 'This indicates a lively, quick character. It is generally faster and more animated than a moderate tempo, but is not simply a dynamic marking.',
  rubato: 'This allows expressive freedom in timing while preserving the musical flow. It is different from a fixed gradual change such as accelerando or ritardando.',
  'alla breve': 'This is cut time, where the minim receives the beat. It is not the same as common time (C), where the crotchet receives the beat.',
  'ad libitum': 'This gives the performer freedom, often including freedom in tempo or delivery. Rubato is narrower: it concerns flexible timing within the phrase.',
  'marcato, marc.': 'This means marked or emphatic. It gives notes extra stress, but does not necessarily make them as short as staccato.',
  'ben marcato': 'This means well marked, with clear emphasis. Marcato concerns stress; it should not be confused with legato, which concerns smooth connection.',
  'con brio': 'This means with vigour or spirit. It describes character and energy, not a precise metronome speed or volume level.',
  'con anima': 'This means with feeling or spirit. It is an expressive character instruction, unlike animato, which more directly suggests becoming lively.',
  'stringendo': 'This means gradually getting faster, often with a sense of pressing forward. It is related to accelerando but can imply increasing urgency.',
  subito: 'This means suddenly. It signals an immediate change, unlike gradual directions such as crescendo or accelerando.',
  sempre: 'This means always or continue the instruction. It tells the performer to maintain a marking rather than change it suddenly.',
};

function getTermName(question) {
  return question.replace(/\s+means:\s*$/i, '').replace(/[.?!]+$/, '').trim().toLowerCase();
}

function getFallbackGuidance(answer) {
  const value = answer.toLowerCase();
  if (/loud|quiet|force|accent|emphatic/.test(value)) return 'This is mainly about dynamics or emphasis. Compare it with the opposite volume marking and with marcato or accent, which add stress rather than simply changing the overall loudness.';
  if (/slow|quick|fast|speed|tempo|walking pace|faster|slower/.test(value)) return 'This is a tempo or pacing instruction. Compare nearby markings such as Andante, Moderato, Allegro, and Presto, which indicate different speeds or characters.';
  if (/smooth|detached|short|held|sustain|staccato|tie|slur/.test(value)) return 'This concerns articulation or connection. Compare legato and slur (smooth connection), staccato (detached), tenuto (full value), and tie (same-pitch notes joined).';
  if (/repeat|beginning|sign|end|fine/.test(value)) return 'This is a navigation instruction. Check whether it sends the performer to the beginning (Da capo), to a sign (Dal segno), or back through a repeated section.';
  if (/style|manner|feeling|spirit|playful|sad|graceful|military|loving|delicate|heavy|light/.test(value)) return 'This describes the character or manner of performance rather than an exact speed. It works alongside tempo and dynamics, which give separate instructions.';
  return 'This is a performance direction. Read it together with the nearby tempo, dynamic, and articulation markings: those categories describe speed, volume, and touch respectively.';
}

function buildExplanation(question, answer) {
  const key = question.toLowerCase();
  if (EXPLANATION_OVERRIDES[key]) return EXPLANATION_OVERRIDES[key];
  const term = getTermName(question);
  return `${term} means ${answer.toLowerCase()}. ${TERM_GUIDANCE[term] || getFallbackGuidance(answer)}`;
}

const BANK = Object.fromEntries(
  Object.entries(RAW_BANK).map(([grade, entries]) => [
    Number(grade),
    entries.map(([question, answer, image], index) => ({
      id: `grade-${grade}-question-${String(index + 1).padStart(3, '0')}`,
      grade: Number(grade),
      topic: 'terms-and-signs',
      question,
      answer,
      acceptedAnswers: [answer],
      explanation: buildExplanation(question, answer),
      image: image || EXAMPLE_IMAGES[question.toLowerCase()] || null,
      source: 'ABRSM Terms & Signs Grades 1–3 PDF'
    }))
  ])
);

// The study-bank page reads this same normalized data, keeping it in sync with the test.
window.ABRSM_QUESTION_BANK = BANK;

const state = { test: [], current: 0, score: 0, selected: null, locked: false };
const $ = (id) => document.getElementById(id);

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeQuestion(grade, entry) {
  const { answer: correct } = entry;
  const distractors = shuffle(BANK[grade].map((item) => item.answer).filter((answer) => answer !== correct)).slice(0, 3);
  return { ...entry, correct, options: shuffle([correct, ...distractors]), userAnswer: null };
}

function createTest(questionCount = 15) {
  const gradeCounts = [0, 0, 0];
  for (let index = 0; index < questionCount; index += 1) gradeCounts[index % 3] += 1;

  state.test = shuffle([1, 2, 3].flatMap((grade, index) => shuffle(BANK[grade]).slice(0, gradeCounts[index]).map((entry) => makeQuestion(grade, entry))));
  state.current = 0;
  state.score = 0;
  state.selected = null;
  state.locked = false;
  $('test-length').value = String(questionCount);
  $('result-screen').classList.add('hidden');
  $('test-screen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const item = state.test[state.current];
  const position = state.current + 1;
  $('progress-label').textContent = `Question ${position} of ${state.test.length}`;
  $('score-label').textContent = `${state.score} correct`;
  $('progress-bar').style.width = `${(position / state.test.length) * 100}%`;
  $('grade-badge').textContent = `Grade ${item.grade}`;
  $('question-number').textContent = String(position).padStart(2, '0');
  $('question-text').textContent = item.question;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('next-button').disabled = true;
  $('next-button').textContent = 'Choose an answer';
  state.selected = null;
  state.locked = false;

  const imageWrap = $('question-image-wrap');
  if (item.image) {
    $('question-image').src = item.image;
    imageWrap.classList.remove('hidden');
  } else {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
  }

  const answers = $('answers');
  answers.innerHTML = '';
  item.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.dataset.answer = option;
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}.</strong> ${option}`;
    button.addEventListener('click', () => chooseAnswer(button, option));
    answers.appendChild(button);
  });
}

function chooseAnswer(button, answer) {
  if (state.locked) return;
  state.selected = answer;
  document.querySelectorAll('.answer-option').forEach((option) => {
    option.classList.toggle('selected', option === button);
    option.setAttribute('aria-checked', option === button ? 'true' : 'false');
  });
  $('next-button').disabled = false;
  $('next-button').textContent = 'Check answer';
}

function submitAnswer() {
  const item = state.test[state.current];
  item.userAnswer = state.selected;
  state.locked = true;
  const correct = state.selected === item.correct;
  if (correct) state.score += 1;
  document.querySelectorAll('.answer-option').forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === item.correct) option.classList.add('correct');
    else if (option.dataset.answer === item.userAnswer) option.classList.add('incorrect');
  });
  $('feedback').textContent = correct ? 'Correct — well done.' : `Not quite. The correct answer is “${item.correct}”.`;
  $('feedback').className = `feedback ${correct ? 'good' : 'bad'}`;
  $('score-label').textContent = `${state.score} correct`;
  $('next-button').textContent = state.current === state.test.length - 1 ? 'See results' : 'Next question';
}

function nextQuestion() {
  if (!state.locked) { submitAnswer(); return; }
  if (state.current === state.test.length - 1) { renderResults(); return; }
  state.current += 1;
  renderQuestion();
}

function renderResults() {
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
    card.innerHTML = `<h3>Grade ${item.grade} · ${item.question}</h3>${item.image ? `<img class="review-image" src="${item.image}" alt="Musical notation for the question" />` : ''}<p><strong>Your answer:</strong> ${item.userAnswer || 'No answer'}</p><p><strong>Correct answer:</strong> ${item.correct}</p><p class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</p>`;
    review.appendChild(card);
  });
}

if ($('test-screen')) {
  $('next-button').addEventListener('click', nextQuestion);
  $('test-length').addEventListener('change', (event) => createTest(Number(event.target.value)));
  $('restart-button').addEventListener('click', () => createTest(Number($('test-length').value)));
  createTest(15);
}
