// Rebuilt from the PDF: the three PPSX banks plus additional entries from the
// attached official ABRSM terms-and-signs PDF/DOCX. Each entry is [question, answer, optional image].
const APP_VERSION = 'Version 1.3.0';

const RAW_BANK = {
  1: [
    ['Accelerando means:', 'Gradually getting quicker'], ['Adagio means:', 'Slow'], ['Allegretto means:', 'Fairly quick—but not as quick as allegro'], ['Allegro means:', 'Quick'], ['Andante means:', 'At a walking pace'], ['Cantabile means:', 'In a singing style'], ['Crescendo means:', 'Gradually getting louder'], ['Da capo means:', 'Repeat from the beginning'], ['Dal segno means:', 'Repeat from the sign'], ['Decrescendo means:', 'Gradually getting quieter'], ['Diminuendo means:', 'Gradually getting quieter'], ['Fine means:', 'The end'], ['f (forte) means:', 'Loud'], ['ff (fortissimo) means:', 'Very loud'], ['Legato means:', 'Smoothly'], ['Lento means:', 'Slow'], ['Mezzo means:', 'Half'], ['Maestoso means:', 'Majestic'], ['mf (mezzo forte) means:', 'Moderately loud'], ['mp (mezzo piano) means:', 'Moderately quiet'], ['Moderato means:', 'Moderately'], ['p (piano) means:', 'Quiet'], ['pp (pianissimo) means:', 'Very quiet'], ['Poco means:', 'A little'], ['Rallentando (or rall.) means:', 'Gradually getting slower'], ['Ritardando (or rit.) means:', 'Gradually getting slower'], ['Ritenuto (or rit.) means:', 'Held back'], ['Staccato (or stacc.) means:', 'Detached'], ['Tempo means:', 'Speed/time'], ['These signs above and below the notes are:', 'Accents', 'assets/grade1/image5.png'], ['The dots above the notes are:', 'Staccato marks', 'assets/grade1/image6.png'], ['The sign above the last note means:', 'A pause', 'assets/grade1/image7.png'], ['The sign above these notes means:', 'Tie', 'assets/grade1/image8.png'], ['The two dots at the stave end mean:', 'Repeat last section', 'assets/grade1/image9.png'],
    ['A tempo means:', "Return to the former speed ('in time')"], ['Al fine means:', 'Until the end'], ['Allegro moderato means:', 'Moderately quick'], ['Da capo al fine (D.C. al fine) means:', "From the beginning until 'fine'"], ['MM. crotchet = 96 means:', "Maelzel's metronome, 96 beats per minute"], ['Pause or fermata means:', 'Hold for longer than written'], ['Ottava sign (8va) means:', 'Play one octave higher or lower than written'], ['Poco a poco means:', 'Little by little']
  ],
  2: [
    ['a means:', 'In the style of'], ['a, alla means:', 'In the manner of'], ['Allargando means:', 'Broadening'], ['Andantino means:', 'Slightly faster than andante'], ['Assai means:', 'Very'], ['Con, col means:', 'With'], ['Dolce means:', 'Sweet'], ['e, ed means:', 'And'], ['Espressivo means:', 'Expressive'], ['fp (forte-piano) means:', 'Loud then immediately quiet'], ['Giocoso means:', 'Playful'], ['Grave means:', 'Very slow, solemn'], ['Grazioso means:', 'Graceful'], ['Larghetto means:', 'Rather slow (but not as slow as largo)'], ['Largo means:', 'Slow'], ['Ma means:', 'But'], ['Maestoso means:', 'Majestic'], ['Meno means:', 'Less'], ['Molto means:', 'Much'], ['Mosso, moto means:', 'Movement'], ['Non means:', 'Not'], ['Piu means:', 'More'], ['Presto means:', 'Fast'], ['Senza means:', 'Without'], ['sf, sfz (sforzando) means:', 'Forced, accented'], ['Simile (or sim.) means:', 'In the same way'], ['Sostenuto means:', 'Sustained'], ['Tenuto means:', 'Held'], ['Troppo means:', 'Too much'], ['Vivace, vivo means:', 'Lively, quick'], ['Dots inside the slur mark mean:', 'Semi-staccato', 'assets/grade2/image5.png'], ['These wedge shapes above and below the notes mean:', 'Staccatissimo (super-staccato)', 'assets/grade2/image6.png'], ['The lines above and below these notes mean:', 'Tenuto (held with slight pressure)', 'assets/grade2/image7.png'],
    ['Alla marcia means:', 'In the style of a march'], ['Con moto means:', 'With movement'], ['Meno mosso means:', 'Less movement (slower)'], ['Non troppo means:', 'Not too much'], ['Piu mosso means:', 'More speed (faster)'], ['Accent sign means:', 'Play strongly'], ['Mezzo-staccato means:', 'Moderately short and detached'], ['Marcato sign means:', 'A strong accent'], ['Staccatissimo means:', 'Extremely short and detached']
  ],
  3: [
    ['adagietto means:', 'Rather slow'], ['ad libitum, ad lib. means:', 'Play freely'], ['Agitato means:', 'Agitated'], ['Alla breve means:', 'With a minim beat'], ['Amore means:', 'Love'], ['Anima means:', 'Soul, spirit'], ['Animato means:', 'Animated, lively'], ['Ben means:', 'Well'], ['Brio means:', 'Vigour'], ['Comodo means:', 'Convenient'], ['Deciso means:', 'With determination'], ['Delicato means:', 'Delicate'], ['Energico means:', 'Energetic'], ['Forza means:', 'Force'], ['Largamente means:', 'Broadly'], ['Leggiero means:', 'Light, nimble'], ['Marcato, marc. means:', 'Emphatic, accented'], ['Marziale means:', 'In a military style'], ['Mesto means:', 'Sad'], ['Pesante means:', 'Heavy'], ['Prima, primo means:', 'First'], ['Risoluto means:', 'With determination'], ['Ritmico means:', 'Rhythmically'], ['Rubato, tempo rubato means:', 'With some freedom of time'], ['Scherzando, scherzoso means:', 'Playful, joking'], ['Seconda, secondo means:', 'Second'], ['Semplice means:', 'Simple, plain'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'], ['Subito means:', 'Suddenly'], ['Tanto means:', 'So much'], ['Tranquillo means:', 'Calm'], ['Triste, tristamente means:', 'Sad, sorrowful'], ['Volta means:', 'Time'], ['What is the meaning of the two dots at the end of the stave?', 'Repeat previous section', 'assets/grade3/image5.png'], ['What does the line above the notes mean?', 'The slur', 'assets/grade3/image6.png'], ['What is the meaning of the dots above these notes?', 'Staccato marks', 'assets/grade3/image7.png'], ['What is the name of the line joining these two notes?', 'Tie', 'assets/grade3/image8.png'], ['What does a crotchet = 96 mean?', '96 crotchet beats per minute', 'assets/grade3/image9.png'],
    ['Amoroso means:', 'Loving'], ['Ben marcato means:', 'Well marked'], ['Con anima means:', 'With feeling, with spirit'], ['Con brio means:', 'With vigour'], ['Con forza means:', 'With force'], ['Prestissimo means:', 'Very fast'], ['Sforzando, sforzato, sfz, sf means:', 'Forced, accented']
  ],
  4: [
    ['Affettuoso means:', 'Tenderly'], ['Affrettando means:', 'Hurrying'], ['Amabile means:', 'Pleasant, amiable'], ['Appassionato means:', 'With passion'], ['Calando means:', 'Getting softer, dying away'], ['Cantando means:', 'Singing'], ['Come means:', 'As, similar to'], ['Facile means:', 'Easy'], ['Fuoco means:', 'Fire'], ['Giusto means:', 'Proper, exact'], ['L’istesso / L\'istesso tempo means:', 'At the same speed'], ['Morendo means:', 'Dying away'], ['Niente means:', 'Nothing'], ['Nobilmente means:', 'Nobly'], ['Perdendosi means:', 'Dying away'], ['Possibile means:', 'Possible'], ['Quasi means:', 'As if, resembling'], ['Sonoro means:', 'Resonant, with rich tone'], ['Sopra means:', 'Above'], ['Sotto means:', 'Below'], ['Veloce means:', 'Swift'], ['Voce means:', 'Voice'],
    ['Alla breve means:', 'Two minims (half notes) per bar'], ['Assai means:', 'Very'], ['Come prima means:', 'As before'], ['Comodo / Tempo comodo means:', 'Convenient, comfortable, at a comfortable speed'], ['Con brio means:', 'With vigour, spirit'], ['Deciso means:', 'With determination, decisive'], ['Larghetto means:', 'Less slow than largo'], ['Mesto means:', 'Sad, mournful'], ['Misterioso means:', 'Mysterious'], ['Ritmico means:', 'Rhythmic'], ['Rubato / Tempo rubato means:', 'With some freedom of time/rhythm'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'],
    ['Arco means:', 'Play with the bow (after pizzicato)'], ['Pizzicato means:', 'Plucked'], ['Con sordini (con sord.) / avec sourdines means:', 'With mutes'], ['Senza sordini / sans sourdines means:', 'Without mutes'], ['Sul G / Sul D means:', 'Play on the specified string'], ['The down-bow and up-bow signs show:', 'Direction of the bow stroke', 'assets/grade4/bow-directions.svg'], ['A slur over string notes means:', 'Play the notes in one bow stroke (legato)', 'assets/grade4/string-slur.svg'],
    ['Una corda means:', 'Press the left pedal (softer sound)'], ['Tre corda means:', 'Release the left pedal'], ['This pedal line means:', 'Indicates when to depress and release the sustain (right) pedal', 'assets/grade4/pedal-line.svg'],
    ['The tr sign means:', 'Trill: rapid alternation between the note and the note above', 'assets/grade4/trill.svg'], ['This turn sign means:', 'Turn: note above, main note, note below, main note', 'assets/grade4/turn.svg'], ['This upper mordent sign means:', 'Upper mordent: main note, note above, main note quickly', 'assets/grade4/upper-mordent.svg'], ['This lower mordent sign means:', 'Lower mordent: main note, note below, main note quickly', 'assets/grade4/lower-mordent.svg'], ['This slashed grace note means:', 'Acciaccatura: a crushed grace note played as quickly as possible before the main note', 'assets/grade4/acciaccatura.svg'], ['This unslashed grace note means:', 'Appoggiatura: an expressive grace note that takes a fixed portion of the main note\'s value', 'assets/grade4/appoggiatura.svg'],
    ['a means:', 'To, at'], ['Animé means:', 'Animated, lively'], ['Assez means:', 'Enough, sufficiently'], ['Avec means:', 'With'], ['Cedez means:', 'Yield, relax the speed'], ['Douce means:', 'Sweet'], ['En dehors means:', 'Prominent'], ['Et means:', 'And'], ['Legerement means:', 'Light'], ['Lent means:', 'Slow'], ['Mais means:', 'But'], ['Moins means:', 'Less'], ['Modéré means:', 'At a moderate speed'], ['Non means:', 'Not'], ['Peu means:', 'Little'], ['Plus means:', 'More'], ['Presser means:', 'Hurry'], ['Ralentir means:', 'Slow down'], ['Retenu means:', 'Held back'], ['Sans means:', 'Without'], ['Tres means:', 'Very'], ['Un, une means:', 'One'], ['Vif means:', 'Lively'], ['Vite means:', 'Quick']
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
      category: 'terms',
      topic: 'terms-and-signs',
      question,
      answer,
      acceptedAnswers: [answer],
      explanation: buildExplanation(question, answer),
      image: image || EXAMPLE_IMAGES[question.toLowerCase()] || null,
      source: Number(grade) === 4 ? 'Grade 4 Italian and French Terms & Signs PPSX presentations' : 'ABRSM Terms & Signs Grades 1–3 PDF'
    }))
  ])
);

// The study-bank page reads this same normalized data, keeping it in sync with the test.
window.ABRSM_QUESTION_BANK = BANK;

const TIMER_SECONDS = 20;
const state = { test: [], current: 0, score: 0, selected: null, locked: false, category: 'terms', grade: 3, timerEnabled: false, timerId: null, timerDeadline: null };
const $ = (id) => document.getElementById(id);
document.querySelectorAll('[data-app-version]').forEach((element) => { element.textContent = APP_VERSION; });
const NOTE_LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const INTERVAL_DIATONIC_STEPS = { m2: 1, M2: 1, m3: 2, M3: 2, P4: 3, P5: 4, m6: 5, M6: 5, m7: 6, M7: 6, P8: 7 };
const SAFE_ROOT_OCTAVES = {
  treble: { C: [4, 5], D: [4, 5], E: [4, 5], F: [4, 5], G: [4, 5], A: [4, 5], B: [4, 5] },
  bass: { C: [3, 4], D: [3, 4], E: [2, 3], F: [2, 3], G: [2, 3], A: [2, 3], B: [2, 3] },
};
// The app keeps the syllabus data separate from question generation so that
// later Grade 4/5 content can be added without changing existing generators.
const CURRICULUM = Object.freeze({
  keyGrades: Object.freeze({
    'C major': 1, 'G major': 1, 'D major': 1, 'F major': 1,
    'A major': 2, 'B♭ major': 2, 'E♭ major': 2,
    'A minor': 2, 'E minor': 2, 'D minor': 2,
    'E major': 3, 'A♭ major': 3,
    'B minor': 3, 'F♯ minor': 3, 'C♯ minor': 3, 'G minor': 3, 'C minor': 3, 'F minor': 3,
  }),
  timeSignatureGrades: Object.freeze({
    '2/4': 1, '3/4': 1, '4/4': 1,
    '2/2': 2, '3/2': 2, '4/2': 2, '3/8': 2,
    '6/8': 3, '9/8': 3, '12/8': 3,
  }),
  questionFormGrades: Object.freeze({
    namedInterval: 3,
    intervalRecognition: 3,
    timeSignatureClassification: 4,
  }),
  categoryMinimumGrades: Object.freeze({
    terms: 1,
    intervals: 3,
    pitches: 1,
    'tonic-triads': 1,
    'time-signatures': 1,
    'key-signatures': 1,
  }),
});
const TIME_SIGNATURES = [
  { top: 2, bottom: 4 }, { top: 3, bottom: 4 }, { top: 4, bottom: 4 },
  { top: 2, bottom: 2 }, { top: 3, bottom: 2 }, { top: 4, bottom: 2 },
  { top: 3, bottom: 8 }, { top: 6, bottom: 8 }, { top: 9, bottom: 8 }, { top: 12, bottom: 8 },
].map((signature) => {
  const label = `${signature.top}/${signature.bottom}`;
  return Object.freeze({ ...signature, label, grade: CURRICULUM.timeSignatureGrades[label] });
});
const TIME_SIGNATURE_CLASSES = ['Simple duple', 'Simple triple', 'Simple quadruple', 'Compound duple', 'Compound triple', 'Compound quadruple'];
const CONFUSING_TIME_SIGNATURES = new Map([
  ['4/4', '2/2'], ['2/2', '4/4'],
  ['3/4', '6/8'], ['6/8', '3/4'],
]);
const KEY_SIGNATURE_ORDERS = {
  sharp: ['F', 'C', 'G', 'D', 'A', 'E', 'B'],
  flat: ['B', 'E', 'A', 'D', 'G', 'C', 'F'],
};
const KEY_SIGNATURES = [
  ['C major', 'A minor', 'none', []],
  ['G major', 'E minor', 'sharp', ['F']],
  ['D major', 'B minor', 'sharp', ['F', 'C']],
  ['A major', 'F♯ minor', 'sharp', ['F', 'C', 'G']],
  ['E major', 'C♯ minor', 'sharp', ['F', 'C', 'G', 'D']],
  ['F major', 'D minor', 'flat', ['B']],
  ['B♭ major', 'G minor', 'flat', ['B', 'E']],
  ['E♭ major', 'C minor', 'flat', ['B', 'E', 'A']],
  ['A♭ major', 'F minor', 'flat', ['B', 'E', 'A', 'D']],
].flatMap(([major, minor, accidental, notes]) => [
  { key: major, accidental, notes, grade: CURRICULUM.keyGrades[major] }, { key: minor, accidental, notes, grade: CURRICULUM.keyGrades[minor] },
]);
const SCALE_TEMPLATES = [
  { major: ['C major', 'C', ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']], minor: ['A minor', 'Am', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']] },
  { major: ['G major', 'G', ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']], minor: ['E minor', 'Em', ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E']] },
  { major: ['D major', 'D', ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D']], minor: ['B minor', 'Bm', ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']] },
  { major: ['A major', 'A', ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A']], minor: ['F♯ minor', 'F#m', ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#']] },
  { major: ['E major', 'E', ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E']], minor: ['C♯ minor', 'C#m', ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B', 'C#']] },
  { major: ['F major', 'F', ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F']], minor: ['D minor', 'Dm', ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D']] },
  { major: ['B♭ major', 'Bb', ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']], minor: ['G minor', 'Gm', ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']] },
  { major: ['E♭ major', 'Eb', ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb']], minor: ['C minor', 'Cm', ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']] },
  { major: ['A♭ major', 'Ab', ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab']], minor: ['F minor', 'Fm', ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']] },
];
const SCALE_QUESTIONS = SCALE_TEMPLATES.flatMap(({ major, minor }) => {
  const [majorName, majorKey, majorNotes] = major;
  const [minorName, minorKey, minorNotes] = minor;
  const minorTonic = minorName.replace(/ minor$/, '');
  return [
    { name: majorName, answer: majorName, equivalent: minorName, key: majorKey, notes: majorNotes, type: 'major', grade: CURRICULUM.keyGrades[majorName] },
    { name: `${minorTonic} harmonic minor`, answer: `${minorTonic} harmonic minor`, equivalent: majorName, key: minorKey, notes: minorNotes, type: 'harmonic-minor', grade: Math.max(2, CURRICULUM.keyGrades[minorName]) },
    { name: `${minorTonic} melodic minor`, answer: `${minorTonic} melodic minor`, equivalent: majorName, key: minorKey, notes: minorNotes, type: 'melodic-minor', grade: Math.max(3, CURRICULUM.keyGrades[minorName]) },
  ];
});
const RHYTHM_VALUES = [
  { units: 48, duration: '12' }, { units: 32, duration: '8' }, { units: 24, duration: '6' },
  { units: 16, duration: '4' }, { units: 12, duration: '3' }, { units: 8, duration: '2' },
  { units: 6, duration: '3/2' }, { units: 4, duration: '' }, { units: 2, duration: '/2', semiquaver: true },
];
// Each entry is a complete subdivision of one beat (or one compound beat),
// expressed in the same units as RHYTHM_VALUES. This keeps every generated bar
// rhythmically legal while favouring patterns that look like real music.
const RHYTHM_GROUP_TEMPLATES = {
  4: [[4], [2, 2]],
  8: [[8], [4, 4], [4, 2, 2]],
  12: [[12], [8, 4], [4, 8], [4, 4, 4]],
  16: [[16], [8, 8], [8, 4, 4], [4, 4, 4, 4]],
  24: [[24], [16, 8], [8, 16], [8, 8, 8]],
  32: [[32], [16, 16], [16, 8, 8], [8, 8, 8, 8]],
  48: [[48], [32, 16], [16, 16, 16]],
};
const RHYTHM_TRIPLET_RATE = 0.04;
const RHYTHM_GROUP_TRIPLETS = {
  4: 'semiquaver',
  8: 'quaver',
  16: 'crotchet',
};
const REST_DURATIONS = [
  { name: 'semibreve', units: 32, duration: '8' },
  { name: 'minim', units: 16, duration: '4' },
  { name: 'crotchet', units: 8, duration: '2' },
  { name: 'quaver', units: 4, duration: '' },
  { name: 'semiquaver', units: 2, duration: '/2' },
];

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
  const distractors = shuffle([...new Set(BANK[grade].map((item) => item.answer).filter((answer) => answer !== correct))]).slice(0, 3);
  return { ...entry, correct, options: shuffle([correct, ...distractors]), userAnswer: null };
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function sameLetterDistractors(correct) {
  const letter = correct[0];
  const accidental = correct.slice(1);
  const variants = {
    '': ['b', '#'],
    b: ['', '#'],
    '#': ['', 'b'],
    bb: ['b', ''],
    '##': ['#', ''],
  };
  return variants[accidental].map((suffix) => `${letter}${suffix}`);
}

function adjacentLetterDistractor(correct) {
  const index = NOTE_LETTERS.indexOf(correct[0]);
  const lower = NOTE_LETTERS[(index + NOTE_LETTERS.length - 1) % NOTE_LETTERS.length];
  const higher = NOTE_LETTERS[(index + 1) % NOTE_LETTERS.length];
  return randomFrom([lower, `${lower}#`, higher, `${higher}b`]);
}

function noteToAbc(note, octave) {
  const accidental = [...note.slice(1)].map((character) => (character === '#' ? '^' : '_')).join('');
  const letter = note[0];
  const pitch = octave === 4
    ? letter
    : octave > 4
      ? `${letter.toLowerCase()}${"'".repeat(octave - 5)}`
      : `${letter}${','.repeat(4 - octave)}`;
  return `${accidental}${pitch}`;
}

function createAbcScore(clef, notes) {
  return `X:1\nL:1/4\nK:C\nV:1 clef=${clef}\n${notes}4|`;
}

function makeIntervalNotation(root) {
  const clef = randomFrom(['treble', 'bass']);
  const clefName = clef === 'treble' ? 'treble (G)' : 'bass (F)';
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][root[0]]);
  return {
    abc: createAbcScore(clef, noteToAbc(root, octave)),
    alt: `Starting note ${root} on a ${clefName} clef staff`,
    clef,
    octave,
    root,
  };
}

function makeIntervalOptionNotation(item, option) {
  const rootIndex = NOTE_LETTERS.indexOf(item.notation.root[0]);
  const optionIndex = NOTE_LETTERS.indexOf(option[0]);
  const steps = option === item.correct
    ? INTERVAL_DIATONIC_STEPS[item.interval.id]
    : (optionIndex - rootIndex + NOTE_LETTERS.length) % NOTE_LETTERS.length;
  const upperOctave = item.notation.octave + Math.floor((rootIndex + steps) / NOTE_LETTERS.length);
  const chord = `[${noteToAbc(item.notation.root, item.notation.octave)}${noteToAbc(option, upperOctave)}]`;
  return {
    abc: createAbcScore(item.notation.clef, chord),
    alt: `Harmonic interval with ${item.notation.root} below and ${option} above`,
  };
}

function renderNotation(element, notation, width) {
  element.replaceChildren();
  element.setAttribute('aria-label', notation.alt);
  element.classList.toggle('hide-time-signature', Boolean(notation.hideTimeSignature));
  const scale = notation.scale || 1;
  window.ABCJS.renderAbc(element, notation.abc, {
    staffwidth: width / scale,
    scale,
    add_classes: true,
    ...(notation.lineBreaks ? { lineBreaks: notation.lineBreaks } : {}),
    paddingtop: 2,
    paddingbottom: 10,
    paddingleft: 0,
    paddingright: 0,
  });
  if (notation.hideTimeSignature) {
    element.querySelectorAll('.abcjs-time-signature, .time-signature').forEach((timeSignature) => timeSignature.remove());
  }
}

function timeSignatureMarkMarkup(signature) {
  const [top, bottom] = signature.label.split('/');
  const markType = signature.label === '4/4' ? ' common-time' : signature.label === '2/2' ? ' alla-breve' : '';
  const ariaLabel = signature.label === '4/4' ? 'Common time, 4/4' : signature.label === '2/2' ? 'Alla breve, 2/2' : signature.label;
  const content = signature.label === '4/4' || signature.label === '2/2' ? 'C' : `<span>${top}</span><span>${bottom}</span>`;
  return `<span class="time-signature-mark${markType}" role="img" aria-label="${ariaLabel}">${content}</span>`;
}

function renderTimeSignaturePrompt(element, signature) {
  element.replaceChildren();
  element.classList.add('question-time-signature');
  element.innerHTML = timeSignatureMarkMarkup(signature);
  element.setAttribute('aria-label', signature.label);
}

function makeIntervalQuestion(root, interval) {
  const correct = window.ABRSM_INTERVAL_MATRIX[root][interval.id];
  const distractors = [...sameLetterDistractors(correct), adjacentLetterDistractor(correct)];

  return {
    id: `interval-${root}-${interval.id}`,
    category: 'intervals',
    grade: CURRICULUM.questionFormGrades.namedInterval,
    question: `What is the ${interval.name} above the following note?`,
    answer: correct,
    correct,
    options: shuffle([correct, ...distractors]),
    explanation: `A ${interval.name.toLowerCase()} is ${interval.semitones} semitone${interval.semitones === 1 ? '' : 's'}. Count ${interval.semitones} semitone${interval.semitones === 1 ? '' : 's'} up from ${root}; the correctly spelled answer is ${correct}.`,
    image: null,
    notation: makeIntervalNotation(root),
    interval,
    userAnswer: null,
  };
}

function intervalRecognitionCandidates() {
  return SCALE_TEMPLATES.flatMap((template) => [template.major, template.minor].flatMap(([scaleName, key, notes]) => {
    const scaleNotes = new Set(notes);
    return notes.slice(0, -1).flatMap((root) => {
      if (root.length !== 1 || !window.ABRSM_INTERVAL_MATRIX[root]) return [];
      return window.ABRSM_INTERVALS
        .filter((interval) => interval.semitones >= 2 && interval.semitones < 12)
        .filter((interval) => scaleNotes.has(window.ABRSM_INTERVAL_MATRIX[root][interval.id]))
        .map((interval) => ({ scaleName, key, notes, root, interval, upper: window.ABRSM_INTERVAL_MATRIX[root][interval.id] }));
    });
  }));
}

function makeIntervalRecognitionQuestion() {
  const candidate = randomFrom(intervalRecognitionCandidates());
  const { scaleName, key, notes, root, interval, upper } = candidate;
  const clef = randomFrom(['treble', 'bass']);
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][root]);
  const rootIndex = NOTE_LETTERS.indexOf(root[0]);
  const upperIndex = NOTE_LETTERS.indexOf(upper[0]);
  const upperOctave = octave + Math.floor((rootIndex + INTERVAL_DIATONIC_STEPS[interval.id]) / NOTE_LETTERS.length);
  const presentation = randomFrom(['harmonic', 'melodic']);
  const useKeySignature = Math.random() < 0.5;
  const keyForNotation = useKeySignature ? key : 'C';
  const signatureNotes = [...new Set(notes.filter((note) => note.length > 1).map((note) => note[0]))];
  const lowerNote = noteToAbc(scaleNoteWithAccidental(root, useKeySignature, signatureNotes), octave);
  const upperNote = noteToAbc(scaleNoteWithAccidental(upper, useKeySignature, signatureNotes), upperOctave);
  const notation = presentation === 'harmonic'
    ? `[${lowerNote}${upperNote}]4`
    : `${lowerNote}4 ${upperNote}4`;
  const nearby = window.ABRSM_INTERVALS.filter((option) => (
    option.id !== interval.id && Math.abs(option.semitones - interval.semitones) <= 2
  ));
  const matchingNumber = nearby.filter((option) => INTERVAL_DIATONIC_STEPS[option.id] === INTERVAL_DIATONIC_STEPS[interval.id]);
  const nearbyDistractors = [...matchingNumber, ...shuffle(nearby.filter((option) => !matchingNumber.includes(option)))].slice(0, 2);
  const otherPresentation = presentation === 'harmonic' ? 'melodic' : 'harmonic';
  const answerLabel = (option, style) => `${option.name} (${style})`;
  const correct = answerLabel(interval, presentation);

  return {
    id: `interval-recognition-${presentation}-${interval.id}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'intervals',
    grade: Math.max(CURRICULUM.questionFormGrades.intervalRecognition, CURRICULUM.keyGrades[scaleName]),
    answerType: 'interval-identification',
    question: 'Name this interval.',
    answer: correct,
    correct,
    options: shuffle([
      correct,
      answerLabel(interval, otherPresentation),
      ...nearbyDistractors.map((option) => answerLabel(option, randomFrom(['harmonic', 'melodic']))),
    ]),
    explanation: `This is a ${interval.name.toLowerCase()} (${interval.semitones} semitones) shown ${presentation === 'harmonic' ? 'with both notes sounding together' : 'as two notes in succession'}${useKeySignature ? ` in ${scaleName}` : ''}.`,
    image: null,
    notation: {
      abc: `X:1\nM:none\nL:1/4\nK:${keyForNotation}\nV:1 clef=${clef}\n${notation}`,
      alt: `${presentation} ${interval.name} in ${clef} clef${useKeySignature ? ` with the key signature of ${scaleName}` : ' with written accidentals'}`,
    },
    userAnswer: null,
  };
}

function formatPitchName(note) {
  return note.replaceAll('#', '♯').replaceAll('b', '♭');
}

function makePitchQuestion() {
  // Excluding C major/A minor ensures every pitch question has a visible key signature.
  const template = randomFrom(SCALE_TEMPLATES.slice(1));
  const [scaleName, key, scaleNotes] = randomFrom([template.major, template.minor]);
  const note = randomFrom(scaleNotes.slice(0, -1));
  const clef = randomFrom(['treble', 'bass']);
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][note[0]]);
  const signatureNotes = [...new Set(scaleNotes.filter((scaleNote) => scaleNote.length > 1).map((scaleNote) => scaleNote[0]))];
  const noteIndex = NOTE_LETTERS.indexOf(note[0]);
  const neighbours = [
    NOTE_LETTERS[(noteIndex + NOTE_LETTERS.length - 1) % NOTE_LETTERS.length],
    NOTE_LETTERS[(noteIndex + 1) % NOTE_LETTERS.length],
  ];
  const distractors = [...sameLetterDistractors(note), randomFrom(neighbours)];
  const correct = formatPitchName(note);

  return {
    id: `pitch-${key}-${note}-${clef}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'pitches',
    grade: CURRICULUM.keyGrades[scaleName],
    question: 'Name this note.',
    answer: correct,
    correct,
    options: shuffle([correct, ...distractors.map(formatPitchName)]),
    explanation: `${correct} is shown in ${clef} clef with the key signature of ${scaleName}.`,
    image: null,
    notation: {
      abc: `X:1\nM:none\nL:1/4\nK:${key}\nV:1 clef=${clef}\n${noteToAbc(scaleNoteWithAccidental(note, true, signatureNotes), octave)}4`,
      alt: `${correct} in ${clef} clef with the key signature of ${scaleName}`,
    },
    userAnswer: null,
  };
}

function makeTonicTriadQuestion() {
  const template = randomFrom(SCALE_TEMPLATES);
  const [keyName, key, scaleNotes] = randomFrom([template.major, template.minor]);
  const signature = KEY_SIGNATURES.find(({ key: signatureKey }) => signatureKey === keyName);
  const mode = randomFrom(['key-signature', 'written-accidentals']);
  const triadNotes = [scaleNotes[0], scaleNotes[2], scaleNotes[4]];
  const expectedNotes = mode === 'key-signature' ? triadNotes.map((note) => note[0]) : triadNotes;
  const correct = JSON.stringify({
    signature: mode === 'key-signature' ? keySignatureValue(signature.accidental, signature.notes) : 'none',
    notes: expectedNotes,
  });
  return {
    id: `tonic-triad-${key.replaceAll('#', 'sharp').replaceAll('b', 'flat')}-${mode}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'tonic-triads',
    grade: CURRICULUM.keyGrades[keyName],
    answerType: 'tonic-triad',
    triadMode: mode,
    question: `Build the tonic triad of ${keyName}. ${mode === 'key-signature' ? 'Use the key signature.' : 'Use written accidentals — no key signature.'}`,
    answer: correct,
    correct,
    options: [],
    explanation: `${keyName} uses the tonic-triad notes ${triadNotes.map(formatPitchName).join(', ')}${mode === 'key-signature' ? '; the required accidentals belong in the key signature.' : '; write any required accidentals on the notes.'}`,
    image: null,
    notation: null,
    triad: { keyName, key, triadNotes, signature },
    userAnswer: null,
  };
}

function getTimeSignatureGroups(signature) {
  const beatUnits = 32 / signature.bottom;
  if (signature.bottom === 8 && signature.top > 3 && signature.top % 3 === 0) {
    return Array(signature.top / 3).fill(beatUnits * 3);
  }
  return Array(signature.top).fill(beatUnits);
}

function randomNotationPitch(clef) {
  return clef === 'treble'
    ? randomFrom(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c', 'd'])
    : randomFrom(['C,', 'D,', 'E,', 'F,', 'G,', 'A,', 'B,', 'C', 'D']);
}

function makeRhythmToken(value, clef) {
  const symbol = Math.random() < 0.16 ? 'z' : randomNotationPitch(clef);
  return `${symbol}${value.duration}`;
}

function makeTripletToken(kind, clef) {
  const value = kind === 'crotchet'
    ? RHYTHM_VALUES.find((candidate) => candidate.units === 8)
    : kind === 'quaver'
      ? RHYTHM_VALUES.find((candidate) => candidate.units === 4)
      : RHYTHM_VALUES.find((candidate) => candidate.units === 2);
  return `(3${Array.from({ length: 3 }, () => `${randomNotationPitch(clef)}${value.duration}`).join('')}`;
}

function makeRhythmBar(groups, clef, allowSemiquavers) {
  const bar = [];
  for (let index = 0; index < groups.length; index += 1) {
    const group = groups[index];
    // In crotchet-based simple metre, a crotchet triplet spans two beats.
    if (group === 8 && groups[index + 1] === 8 && Math.random() < RHYTHM_TRIPLET_RATE) {
      bar.push([makeTripletToken('crotchet', clef)]);
      index += 1;
      continue;
    }
    const templates = (RHYTHM_GROUP_TEMPLATES[group] || [[group]]).filter((template) =>
      allowSemiquavers || !template.includes(2)
    );
    if (RHYTHM_GROUP_TRIPLETS[group] && Math.random() < RHYTHM_TRIPLET_RATE) {
      bar.push([makeTripletToken(RHYTHM_GROUP_TRIPLETS[group], clef)]);
      continue;
    }
    const template = randomFrom(templates);
    bar.push(template.map((units) => makeRhythmToken(RHYTHM_VALUES.find((value) => value.units === units), clef)));
  }
  return bar;
}

function restDurationFromValue(value) {
  const match = REST_DURATIONS.find((duration) => duration.units === value.units || duration.units * 1.5 === value.units);
  return { units: match.units, dotted: value.units === match.units * 1.5 };
}

function makeRestIdentificationBar(groups, clef, allowSemiquavers) {
  const descriptors = groups.map((group) => {
    const templates = (RHYTHM_GROUP_TEMPLATES[group] || [[group]]).filter((template) => allowSemiquavers || !template.includes(2));
    return randomFrom(templates).map((units) => {
      const value = RHYTHM_VALUES.find((candidate) => candidate.units === units);
      return { units, value, token: `${randomNotationPitch(clef)}${value.duration}` };
    });
  });
  const restCount = randomFrom([1, 2]);
  shuffle(descriptors.flat()).slice(0, restCount).forEach((descriptor) => { descriptor.missing = true; });
  return descriptors;
}

function makeTimeSignatureNotation(signature) {
  const clef = randomFrom(['treble', 'bass']);
  const groups = getTimeSignatureGroups(signature);
  const barUnits = groups.reduce((sum, units) => sum + units, 0);
  const allowSemiquavers = signature.bottom === 8;
  const barCount = 3;
  const bars = Array.from({ length: barCount }, () => makeRhythmBar(groups, clef, allowSemiquavers));
  const hasTriplets = bars.flat(2).some((token) => token.includes('(3'));

  return {
    abc: `X:1\nM:${signature.label}\nL:1/8\nK:C\nV:1 clef=${clef}\n${bars.map((bar) => bar.map((group) => group.join('')).join(' ')).join('|')}||`,
    alt: `${barCount} bars of rhythm in ${clef === 'treble' ? 'treble' : 'bass'} clef`,
    timeSignatureNotation: true,
    hideTimeSignature: true,
    groups,
    barUnits,
    barCount,
    tokenCount: bars.flat(2).length,
    grade: Math.max(signature.grade, hasTriplets ? 2 : 1),
    lineBreaks: [2],
  };
}

function makeTimeSignatureQuestion() {
  const signature = randomFrom(TIME_SIGNATURES);
  const notation = makeTimeSignatureNotation(signature);
  const compound = signature.bottom === 8 && signature.top > 3 && signature.top % 3 === 0;
  const options = [signature.label];
  shuffle(TIME_SIGNATURES).forEach(({ label }) => {
    const conflictsWithAnOption = options.some((option) => CONFUSING_TIME_SIGNATURES.get(option) === label);
    if (options.length < 4 && !options.includes(label) && !conflictsWithAnOption) options.push(label);
  });
  return {
    id: `time-signature-${signature.label}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    grade: notation.grade,
    question: 'What is the time signature of the following bars?',
    answer: signature.label,
    correct: signature.label,
    options: shuffle(options),
    explanation: compound
      ? `${signature.label} has ${signature.top / 3} main beats, each grouped as three quavers.`
      : `${signature.label} has ${signature.top} beats in each bar, with a ${signature.bottom} note receiving one beat.`,
    image: null,
    notation,
    userAnswer: null,
  };
}

function timeSignatureClass(signature) {
  const compound = signature.bottom === 8 && signature.top > 3 && signature.top % 3 === 0;
  const beats = compound ? signature.top / 3 : signature.top;
  return `${compound ? 'Compound' : 'Simple'} ${beats === 2 ? 'duple' : beats === 3 ? 'triple' : 'quadruple'}`;
}

function makeTimeSignatureClassificationQuestion() {
  const signature = randomFrom(TIME_SIGNATURES);
  const correct = timeSignatureClass(signature);
  return {
    id: `time-classification-${signature.label}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    grade: CURRICULUM.questionFormGrades.timeSignatureClassification,
    answerType: 'time-classification',
    question: 'How is this time signature classified?',
    answer: correct,
    correct,
    options: shuffle([correct, ...shuffle(TIME_SIGNATURE_CLASSES.filter((option) => option !== correct)).slice(0, 3)]),
    explanation: `${signature.label} is ${correct.toLowerCase()}.`,
    image: null,
    notation: null,
    timeSignaturePrompt: signature,
    userAnswer: null,
  };
}

function restAnswerLabel(answer) {
  if (!answer) return '';
  const duration = REST_DURATIONS.find((candidate) => candidate.units === answer.units);
  return `${answer.dotted ? 'dotted ' : ''}${duration.name} rest`;
}

function formatRestAnswers(answer) {
  if (!answer) return '';
  let values;
  try { values = JSON.parse(answer); } catch (error) { return answer; }
  return values.map((value, index) => `Rest ${index + 1}: ${restAnswerLabel(value)}`).join('; ');
}

const REST_ICON_FILES = {
  semibreve: 'assets/rest-icons/semibreve.svg',
  minim: 'assets/rest-icons/minim.svg',
  crotchet: 'assets/rest-icons/crotchet.svg',
  quaver: 'assets/rest-icons/quaver.svg',
  semiquaver: 'assets/rest-icons/semiquaver.svg',
};

function restIconMarkup(name) {
  return `<span class="rest-choice-icon rest-choice-icon--${name}" aria-hidden="true"><img src="${REST_ICON_FILES[name]}" alt=""></span>`;
}

function makeRestIdentificationQuestion() {
  const signature = randomFrom(TIME_SIGNATURES);
  const clef = randomFrom(['treble', 'bass']);
  const groups = getTimeSignatureGroups(signature);
  const allowSemiquavers = signature.bottom === 8;
  const bars = Array.from({ length: 2 }, () => makeRestIdentificationBar(groups, clef, allowSemiquavers));
  let marker = 0;
  bars.forEach((bar) => bar.flat().filter((descriptor) => descriptor.missing).forEach((descriptor) => { descriptor.id = ++marker; }));
  const rests = bars.flat(2).filter((descriptor) => descriptor.missing).map((descriptor) => ({ ...restDurationFromValue(descriptor.value), id: descriptor.id }));
  const abcBars = bars.map((bar) => bar.map((group) => group.map((descriptor) => {
    if (!descriptor.missing) return descriptor.token;
    return `"${String.fromCharCode(9311 + descriptor.id)}"y${descriptor.value.duration}`;
  }).join('')).join(' '));
  const correct = JSON.stringify(rests.map(({ units, dotted }) => ({ units, dotted })));
  return {
    id: `rest-identification-${signature.label}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    grade: signature.grade,
    answerType: 'rest-identification',
    question: 'What is the value of each missing rest?',
    answer: correct,
    correct,
    options: [],
    explanation: rests.map((rest, index) => `Rest ${index + 1} is a ${restAnswerLabel(rest)}.`).join(' '),
    image: null,
    notation: {
      abc: `X:1\nM:${signature.label}\nL:1/8\nK:C\nV:1 clef=${clef}\n${abcBars.join('|')}||`,
      alt: `Two bars in ${signature.label} with numbered missing rests in ${clef} clef`,
      timeSignatureNotation: true,
      scale: 1.2,
      lineBreaks: [1],
    },
    restCount: rests.length,
    userAnswer: null,
  };
}

function keySignatureValue(accidental, notes) {
  if (accidental === 'none') return 'none';
  const orderedNotes = Array.isArray(notes)
    ? notes
    : KEY_SIGNATURE_ORDERS[accidental].filter((note) => notes.has(note));
  return `${accidental}:${orderedNotes.join(',')}`;
}

function formatKeySignatureAnswer(answer) {
  if (!answer || answer === 'none') return 'No sharps or flats';
  const [accidental, noteList] = answer.split(':');
  const symbol = accidental === 'sharp' ? '♯' : '♭';
  return noteList ? noteList.split(',').map((note) => `${note}${symbol}`).join(', ') : 'No accidentals selected';
}

function makeKeySignatureQuestion() {
  const signature = randomFrom(KEY_SIGNATURES);
  const notes = new Set(signature.notes);
  const correct = keySignatureValue(signature.accidental, notes);
  return {
    id: `key-signature-${signature.key.replaceAll('♯', 'sharp').replaceAll('♭', 'flat').replaceAll(' ', '-')}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'key-signatures',
    grade: signature.grade,
    answerType: 'key-signature',
    question: `Give the key signature for ${signature.key}.`,
    answer: correct,
    correct,
    options: [],
    explanation: `${signature.key} has ${formatKeySignatureAnswer(correct).toLowerCase()}.`,
    image: null,
    notation: null,
    userAnswer: null,
  };
}

function scaleNoteWithAccidental(note, useKeySignature, signatureNotes) {
  if (useKeySignature && signatureNotes.includes(note[0])) return note[0];
  return note;
}

function makeScaleNotation(scale, direction, clef, useKeySignature) {
  const ascendingNotes = scale.notes;
  const descendingNotes = scale.type === 'melodic-minor' ? scale.naturalNotes : ascendingNotes;
  const sourceNotes = direction === 'ascending' ? ascendingNotes : [...descendingNotes].reverse();
  let octave = (clef === 'treble' ? 4 : 3) + (direction === 'descending' ? 1 : 0);
  const notes = sourceNotes.map((note, index) => {
    if (index > 0) {
      const previousLetter = NOTE_LETTERS.indexOf(sourceNotes[index - 1][0]);
      const currentLetter = NOTE_LETTERS.indexOf(note[0]);
      if (direction === 'ascending' && currentLetter <= previousLetter) octave += 1;
      if (direction === 'descending' && currentLetter >= previousLetter) octave -= 1;
    }
    return `${noteToAbc(scaleNoteWithAccidental(note, useKeySignature, scale.signatureNotes), octave)}4`;
  });
  const key = useKeySignature ? scale.key : 'C';
  return {
    abc: `X:1\nM:none\nL:1/4\nK:${key}\nV:1 clef=${clef}\n${notes.join(' ')}`,
    alt: `${direction} ${scale.name} scale in ${clef} clef${useKeySignature ? ' with a key signature' : ' with accidentals on the notes'}`,
  };
}

function makeScaleQuestion() {
  const base = randomFrom(SCALE_TEMPLATES);
  const isMajor = Math.random() < 0.5;
  const [majorName, majorKey, majorNotes] = base.major;
  const [minorName, minorKey, naturalMinorNotes] = base.minor;
  const signatureNotes = KEY_SIGNATURES.find(({ key }) => key === majorName)?.notes || [];
  const type = isMajor ? 'major' : randomFrom(['harmonic-minor', 'melodic-minor']);
  const scaleGrade = isMajor
    ? CURRICULUM.keyGrades[majorName]
    : Math.max(type === 'melodic-minor' ? 3 : 2, CURRICULUM.keyGrades[minorName]);
  const minorTonic = minorName.replace(/ minor$/, '');
  const minorQuality = type === 'harmonic-minor' ? 'harmonic minor' : 'melodic minor';
  const minorEquivalent = `${minorTonic} ${randomFrom(['harmonic minor', 'melodic minor'])}`;
  const scale = isMajor
    ? { name: majorName, answer: majorName, equivalent: minorEquivalent, key: majorKey, notes: majorNotes, naturalNotes: majorNotes, signatureNotes, type }
    : {
      name: `${minorTonic} ${minorQuality}`,
      answer: `${minorTonic} ${minorQuality}`,
      equivalent: majorName,
      key: minorKey,
      notes: naturalMinorNotes.map((note, index) => {
        const harmonic = type === 'harmonic-minor' && index === 6;
        const melodic = type === 'melodic-minor' && index >= 5 && index <= 6;
        if (harmonic || melodic) {
          return note.endsWith('b') ? `${note[0]}` : note.includes('#') ? note : `${note}#`;
        }
        return note;
      }),
      naturalNotes: naturalMinorNotes,
      signatureNotes,
      type,
    };
  const direction = randomFrom(['ascending', 'descending']);
  const clef = randomFrom(['treble', 'bass']);
  const useKeySignature = Math.random() < 0.5;
  const relativeOption = isMajor ? minorEquivalent : majorName;
  const parallelOption = isMajor
    ? `${majorName.replace(/ major$/, '')} ${randomFrom(['harmonic minor', 'melodic minor'])}`
    : `${minorTonic} major`;
  const randomOption = randomFrom(SCALE_QUESTIONS
    .map(({ answer }) => answer)
    .filter((answer) => ![scale.answer, relativeOption, parallelOption].includes(answer)));
  return {
    id: `scale-identification-${Math.random().toString(36).slice(2, 8)}`,
    category: 'key-signatures',
    grade: scaleGrade,
    answerType: 'scale-identification',
    question: 'Identify this scale.',
    answer: scale.answer,
    correct: scale.answer,
    options: shuffle([scale.answer, relativeOption, parallelOption, randomOption]),
    explanation: `${scale.answer} is shown ${direction}. Its relative key is ${relativeOption}; its parallel key has the same tonic, ${parallelOption}.`,
    image: null,
    notation: makeScaleNotation(scale, direction, clef, useKeySignature),
    userAnswer: null,
  };
}

function sampleQuestions(questions, count) {
  if (!questions.length) return [];
  const selected = [];
  while (selected.length < count) {
    shuffle(questions).forEach((question) => {
      if (selected.length < count) selected.push({ ...question });
    });
  }
  return selected;
}

function selectQuestionsByGrade(candidates, questionCount, maximumGrade) {
  const eligible = candidates.filter((question) => question.grade <= maximumGrade);
  if (!eligible.length) return [];

  // Prefer the selected grade. Until a future grade has content, use the
  // highest available grade below it so Grade 4/5 selections remain useful.
  const focusGrade = eligible.some((question) => question.grade === maximumGrade)
    ? maximumGrade
    : Math.max(...eligible.map((question) => question.grade));
  const focusQuestions = eligible.filter((question) => question.grade === focusGrade);
  const lowerGradeQuestions = eligible.filter((question) => question.grade < focusGrade);
  const focusCount = lowerGradeQuestions.length ? Math.ceil(questionCount / 2) : questionCount;
  const remainingCount = questionCount - focusCount;

  return shuffle([
    ...sampleQuestions(focusQuestions, focusCount),
    ...sampleQuestions(lowerGradeQuestions.length ? lowerGradeQuestions : focusQuestions, remainingCount),
  ]);
}

function runtimeQuestionPool(makeQuestion, count) {
  return Array.from({ length: Math.max(80, count * 16) }, makeQuestion);
}

function createTermsTest(questionCount, maximumGrade) {
  const candidates = Object.keys(BANK).map(Number).flatMap((grade) => BANK[grade].map((entry) => makeQuestion(grade, entry)));
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function createIntervalsTest(questionCount, maximumGrade) {
  const namedQuestions = Object.keys(window.ABRSM_INTERVAL_MATRIX).flatMap((root) =>
    window.ABRSM_INTERVALS.map((interval) => makeIntervalQuestion(root, interval))
  );
  const candidates = [
    ...namedQuestions,
    ...runtimeQuestionPool(makeIntervalRecognitionQuestion, questionCount),
  ];
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function createPitchesTest(questionCount, maximumGrade) {
  return selectQuestionsByGrade(runtimeQuestionPool(makePitchQuestion, questionCount), questionCount, maximumGrade);
}

function createTonicTriadsTest(questionCount, maximumGrade) {
  return selectQuestionsByGrade(runtimeQuestionPool(makeTonicTriadQuestion, questionCount), questionCount, maximumGrade);
}

function createTimeSignaturesTest(questionCount, maximumGrade) {
  const makers = [makeTimeSignatureQuestion, makeRestIdentificationQuestion, makeTimeSignatureClassificationQuestion];
  const candidates = runtimeQuestionPool(() => randomFrom(makers)(), questionCount);
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function createKeySignaturesTest(questionCount, maximumGrade) {
  const candidates = runtimeQuestionPool(() => (Math.random() < 0.5 ? makeKeySignatureQuestion() : makeScaleQuestion()), questionCount);
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
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

function createTest(questionCount = Number($('test-length').value), category = state.category) {
  state.category = category;
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
  stopQuestionTimer();
  const item = state.test[state.current];
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
  $('next-button').disabled = true;
  $('next-button').textContent = 'Choose an answer';
  state.selected = null;
  state.locked = false;

  const imageWrap = $('question-image-wrap');
  const notationWrap = $('question-notation-wrap');
  if (item.timeSignaturePrompt) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    renderTimeSignaturePrompt($('question-notation'), item.timeSignaturePrompt);
    notationWrap.classList.remove('hidden');
  } else if (item.notation) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    $('question-notation').classList.remove('question-time-signature');
    renderNotation($('question-notation'), item.notation, item.notation.timeSignatureNotation ? 629 : 520);
    notationWrap.classList.remove('hidden');
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
  answers.classList.toggle('time-signature-answers', item.category === 'time-signatures' && item.answerType !== 'time-classification');
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
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.dataset.answer = option;
    const letter = String.fromCharCode(65 + index);
    button.setAttribute('aria-label', `Option ${letter}: ${option}`);
    if (item.category === 'intervals' && item.answerType !== 'interval-identification') {
      button.classList.add('interval-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong><div class="answer-notation" role="img"></div>`;
      renderNotation(button.querySelector('.answer-notation'), makeIntervalOptionNotation(item, option), 240);
    } else if (item.category === 'pitches') {
      button.classList.add('pitch-answer-option');
      button.innerHTML = `<strong>${letter}.</strong> ${option}`;
    } else if (item.category === 'time-signatures' && item.answerType !== 'time-classification') {
      button.classList.add('time-signature-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong>${timeSignatureMarkMarkup({ label: option })}`;
    } else {
      button.innerHTML = `<strong>${letter}.</strong> ${option}`;
    }
    button.addEventListener('click', () => chooseAnswer(button, option));
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

function formatTonicTriadAnswer(answer) {
  if (!answer) return '';
  let value;
  try { value = JSON.parse(answer); } catch (error) { return answer; }
  const signature = value.signature === 'none' ? 'No key signature' : formatKeySignatureAnswer(value.signature);
  return `${signature}; notes: ${value.notes.map(formatPitchName).join(', ')}`;
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
    $('next-button').textContent = state.selected ? 'Check answer' : item.triadMode === 'key-signature' && !canBuildChord ? 'Build the key signature first' : 'Build the tonic triad';
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
    $('next-button').textContent = state.selected ? 'Check answer' : 'Build the key signature';
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
    $('next-button').textContent = state.selected ? 'Check answer' : 'Complete the rest values';
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
  document.querySelectorAll('.answer-option').forEach((option) => {
    option.classList.toggle('selected', option === button);
    option.setAttribute('aria-checked', option === button ? 'true' : 'false');
  });
  $('next-button').disabled = false;
  $('next-button').textContent = 'Check answer';
}

function submitAnswer(timedOut = false) {
  if (state.locked) return;
  stopQuestionTimer();
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
  if (item.answerType === 'key-signature') {
    document.querySelectorAll('.key-signature-builder button').forEach((button) => { button.disabled = true; });
    document.querySelector('.key-signature-builder').classList.add(correct ? 'correct' : 'incorrect');
  }
  if (item.answerType === 'rest-identification') {
    document.querySelectorAll('.rest-value-builder button').forEach((button) => { button.disabled = true; });
    document.querySelector('.rest-value-builder').classList.add(correct ? 'correct' : 'incorrect');
  }
  if (item.answerType === 'tonic-triad') {
    document.querySelectorAll('.tonic-triad-builder button').forEach((button) => { button.disabled = true; });
    document.querySelector('.tonic-triad-builder').classList.add(correct ? 'correct' : 'incorrect');
  }
  const formattedCorrect = item.answerType === 'key-signature'
    ? formatKeySignatureAnswer(item.correct)
    : item.answerType === 'rest-identification'
      ? formatRestAnswers(item.correct)
      : item.answerType === 'tonic-triad'
        ? formatTonicTriadAnswer(item.correct)
      : item.correct;
  $('feedback').textContent = correct
    ? 'Correct — well done.'
    : timedOut
      ? `Time’s up. The correct answer is “${formattedCorrect}”.`
      : `Not quite. The correct answer is “${formattedCorrect}”.`;
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
  stopQuestionTimer();
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

if ($('test-screen')) {
  $('next-button').addEventListener('click', nextQuestion);
  document.querySelectorAll('.category-button').forEach((button) => {
    button.addEventListener('click', () => createTest(button.dataset.category === 'terms' ? 15 : 10, button.dataset.category));
  });
  document.querySelectorAll('.grade-dot').forEach((button) => {
    button.addEventListener('click', () => {
      setActiveGrade(Number(button.dataset.grade));
      createTest(Number($('test-length').value));
    });
  });
  $('test-length').addEventListener('change', (event) => createTest(Number(event.target.value)));
  $('timer-enabled').addEventListener('change', (event) => {
    state.timerEnabled = event.target.checked;
    if (!state.locked) startQuestionTimer();
  });
  $('restart-button').addEventListener('click', () => createTest(Number($('test-length').value)));
  setActiveGrade(state.grade);
  createTest(15);
}
