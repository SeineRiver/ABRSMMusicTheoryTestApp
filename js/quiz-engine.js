// The app keeps the syllabus data separate from question generation so that
// later Grade 4/5 content can be added without changing existing generators.
import { BANK, buildExplanation, ensureQuestionMetadata, stableQuestionSnapshot } from './question-bank.js';
import {
  INTERVAL_DIATONIC_STEPS,
  NOTE_LETTERS,
  SAFE_ROOT_OCTAVES,
  createAbcScore,
  makeIntervalNotation,
  makeIntervalOptionNotation,
  noteToAbc,
  randomNotationPitch,
} from './notation.js';

const CURRICULUM = Object.freeze({
  keyGrades: Object.freeze({
    'C major': 1, 'G major': 1, 'D major': 1, 'F major': 1,
    'A major': 2, 'B♭ major': 2, 'E♭ major': 2,
    'A minor': 2, 'E minor': 2, 'D minor': 2,
    'E major': 3, 'A♭ major': 3,
    'B minor': 3, 'F♯ minor': 3, 'C♯ minor': 3, 'G minor': 3, 'C minor': 3, 'F minor': 3,
    'B major': 4, 'G♯ minor': 4, 'D♭ major': 4, 'B♭ minor': 4,
    'F♯ major': 5, 'D♯ minor': 5, 'G♭ major': 5, 'E♭ minor': 5,
  }),
  timeSignatureGrades: Object.freeze({
    '2/4': 1, '3/4': 1, '4/4': 1,
    '2/2': 2, '3/2': 2, '4/2': 2, '3/8': 2,
    '6/8': 3, '9/8': 3, '12/8': 3,
    '6/4': 4, '9/4': 4, '12/4': 4,
    '5/4': 5, '7/4': 5, '5/8': 5, '7/8': 5,
  }),
  questionFormGrades: Object.freeze({
    namedInterval: 3,
    intervalRecognition: 3,
    timeSignatureClassification: 4,
    altoClef: 4,
    enharmonic: 4,
    scaleDegree: 4,
    chromaticScale: 4,
    functionalTriad: 4,
    tenorClef: 5,
    instrumentTransposition: 5,
    compoundInterval: 5,
    triadInversion: 5,
    cadence: 5,
    irregularRhythm: 5,
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
  { top: 6, bottom: 4 }, { top: 9, bottom: 4 }, { top: 12, bottom: 4 },
  { top: 5, bottom: 4 }, { top: 7, bottom: 4 }, { top: 5, bottom: 8 }, { top: 7, bottom: 8 },
].map((signature) => {
  const label = `${signature.top}/${signature.bottom}`;
  return Object.freeze({ ...signature, label, grade: CURRICULUM.timeSignatureGrades[label] });
});
const TIME_SIGNATURE_CLASSES = ['Simple duple', 'Simple triple', 'Simple quadruple', 'Compound duple', 'Compound triple', 'Compound quadruple', 'Irregular quintuple', 'Irregular septuple'];
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
  ['B major', 'G♯ minor', 'sharp', ['F', 'C', 'G', 'D', 'A']],
  ['F major', 'D minor', 'flat', ['B']],
  ['B♭ major', 'G minor', 'flat', ['B', 'E']],
  ['E♭ major', 'C minor', 'flat', ['B', 'E', 'A']],
  ['A♭ major', 'F minor', 'flat', ['B', 'E', 'A', 'D']],
  ['D♭ major', 'B♭ minor', 'flat', ['B', 'E', 'A', 'D', 'G']],
  ['F♯ major', 'D♯ minor', 'sharp', ['F', 'C', 'G', 'D', 'A', 'E']],
  ['G♭ major', 'E♭ minor', 'flat', ['B', 'E', 'A', 'D', 'G', 'C']],
].flatMap(([major, minor, accidental, notes]) => [
  { key: major, accidental, notes, grade: CURRICULUM.keyGrades[major] }, { key: minor, accidental, notes, grade: CURRICULUM.keyGrades[minor] },
]);
const SCALE_TEMPLATES = [
  { major: ['C major', 'C', ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']], minor: ['A minor', 'Am', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']] },
  { major: ['G major', 'G', ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']], minor: ['E minor', 'Em', ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E']] },
  { major: ['D major', 'D', ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D']], minor: ['B minor', 'Bm', ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']] },
  { major: ['A major', 'A', ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A']], minor: ['F♯ minor', 'F#m', ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#']] },
  { major: ['E major', 'E', ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E']], minor: ['C♯ minor', 'C#m', ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B', 'C#']] },
  { major: ['B major', 'B', ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B']], minor: ['G♯ minor', 'G#m', ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#']] },
  { major: ['F major', 'F', ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F']], minor: ['D minor', 'Dm', ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D']] },
  { major: ['B♭ major', 'Bb', ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']], minor: ['G minor', 'Gm', ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']] },
  { major: ['E♭ major', 'Eb', ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb']], minor: ['C minor', 'Cm', ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']] },
  { major: ['A♭ major', 'Ab', ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab']], minor: ['F minor', 'Fm', ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']] },
  { major: ['D♭ major', 'Db', ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db']], minor: ['B♭ minor', 'Bbm', ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb']] },
  { major: ['F♯ major', 'F#', ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#']], minor: ['D♯ minor', 'D#m', ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#', 'D#']] },
  { major: ['G♭ major', 'Gb', ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb']], minor: ['E♭ minor', 'Ebm', ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb']] },
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
  // Illustrated entries use a visual-focused prompt; shared notation may add
  // the specific marking so the learner can tell which symbol is being asked.
  // Text-only entries name the term because the definition is being recalled.
  const question = entry.displayQuestion || entry.question;
  return { ...entry, questionKey: entry.question, question, questionForm: entry.image ? 'notation-sign' : 'term-definition', correct, options: shuffle([correct, ...distractors]), userAnswer: null };
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

function makeIntervalQuestion(root, interval) {
  const correct = window.ABRSM_INTERVAL_MATRIX[root][interval.id];
  const distractors = [...sameLetterDistractors(correct), adjacentLetterDistractor(correct)];

  return {
    id: `interval-${root}-${interval.id}`,
    category: 'intervals',
    questionForm: 'named-interval',
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
    questionForm: 'interval-identification',
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

function makeCompoundIntervalRecognitionQuestion() {
  const simpleIntervals = window.ABRSM_INTERVALS.filter((interval) => interval.id !== 'P8');
  const interval = randomFrom(simpleIntervals);
  const root = randomFrom(Object.keys(window.ABRSM_INTERVAL_MATRIX));
  const upper = window.ABRSM_INTERVAL_MATRIX[root][interval.id];
  const rootIndex = NOTE_LETTERS.indexOf(root[0]);
  const clef = randomFrom(['treble', 'alto', 'tenor', 'bass']);
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][root[0]]);
  const upperOctave = octave + Math.floor((rootIndex + INTERVAL_DIATONIC_STEPS[interval.id]) / NOTE_LETTERS.length) + 1;
  const number = INTERVAL_DIATONIC_STEPS[interval.id] + 8;
  const compoundName = interval.name.replace(/\d+(?:st|nd|rd|th)$/, `${number}${number === 9 ? 'th' : number === 10 ? 'th' : number === 11 ? 'th' : number === 12 ? 'th' : 'th'}`);
  const presentation = randomFrom(['harmonic', 'melodic']);
  const lowerNote = noteToAbc(root, octave);
  const upperNote = noteToAbc(upper, upperOctave);
  const notation = presentation === 'harmonic' ? `[${lowerNote}${upperNote}]4` : `${lowerNote}4 ${upperNote}4`;
  const labels = simpleIntervals.map((candidate) => {
    const candidateNumber = INTERVAL_DIATONIC_STEPS[candidate.id] + 8;
    return candidate.name.replace(/\d+(?:st|nd|rd|th)$/, `${candidateNumber}th`);
  });
  return {
    id: `compound-interval-${root}-${interval.id}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'intervals',
    questionForm: 'compound-interval-identification',
    grade: CURRICULUM.questionFormGrades.compoundInterval,
    answerType: 'interval-identification',
    question: 'Name this compound interval.',
    answer: compoundName,
    correct: compoundName,
    options: shuffle([compoundName, ...shuffle(labels.filter((label) => label !== compoundName)).slice(0, 3)]),
    explanation: `${compoundName} is an octave plus a ${interval.name.toLowerCase()}; it spans ${interval.semitones + 12} semitones.`,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:C\nV:1 clef=${clef}\n${notation}`, alt: `${presentation} ${compoundName} in ${clef} clef` },
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
  const clef = randomFrom(['treble', 'bass', 'alto', 'tenor']);
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
    questionForm: 'note-naming',
    grade: Math.max(CURRICULUM.keyGrades[scaleName], clef === 'tenor' ? CURRICULUM.questionFormGrades.tenorClef : clef === 'alto' ? CURRICULUM.questionFormGrades.altoClef : 1),
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

function makeEnharmonicQuestion() {
  const pairs = [
    ['C#', 'Db'], ['D#', 'Eb'], ['F#', 'Gb'], ['G#', 'Ab'], ['A#', 'Bb'],
    ['C##', 'D'], ['Dbb', 'C'], ['F##', 'G'], ['Gbb', 'F'], ['A##', 'B'], ['Bbb', 'A'],
  ];
  const [written, equivalent] = randomFrom(pairs);
  const clef = randomFrom(['treble', 'alto', 'bass']);
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][written[0]]);
  const options = [equivalent, ...shuffle(pairs.map(([, option]) => option).filter((option) => option !== equivalent)).slice(0, 3)];
  return {
    id: `enharmonic-${written}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'pitches',
    questionForm: 'enharmonic-equivalence',
    grade: CURRICULUM.questionFormGrades.enharmonic,
    question: 'Which note is enharmonically equivalent to this note?',
    answer: formatPitchName(equivalent),
    correct: formatPitchName(equivalent),
    options: shuffle(options.map(formatPitchName)),
    explanation: `${formatPitchName(written)} and ${formatPitchName(equivalent)} sound at the same pitch, even though they are written differently.`,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:C\nV:1 clef=${clef}\n${noteToAbc(written, octave)}4`, alt: `${formatPitchName(written)} in ${clef} clef` },
    userAnswer: null,
  };
}

function makeInstrumentTranspositionQuestion() {
  const examples = [
    { instrument: 'B♭ instrument', interval: 'a major 2nd lower than written', written: 'C major', concert: 'B♭ major' },
    { instrument: 'A instrument', interval: 'a minor 3rd lower than written', written: 'C major', concert: 'A major' },
    { instrument: 'F instrument', interval: 'a perfect 5th lower than written', written: 'C major', concert: 'F major' },
  ];
  const example = randomFrom(examples);
  const toConcert = Math.random() < 0.5;
  const sourceKey = toConcert ? example.written : example.concert;
  const answer = toConcert ? example.concert : example.written;
  const direction = toConcert ? 'concert pitch' : `a part for the ${example.instrument}`;
  const sourceAbcKey = sourceKey.replace(' major', '').replace('♭', 'b');
  const options = ['C major', 'A major', 'B♭ major', 'F major'];
  return {
    id: `instrument-transposition-${example.instrument[0]}-${toConcert ? 'concert' : 'written'}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'pitches',
    questionForm: 'instrument-transposition',
    grade: CURRICULUM.questionFormGrades.instrumentTransposition,
    question: `This short melody is in ${sourceKey}. A ${example.instrument} sounds ${example.interval}. Which key gives ${direction}?`,
    answer,
    correct: answer,
    options: shuffle([answer, ...options.filter((option) => option !== answer).slice(0, 3)]),
    explanation: toConcert
      ? `Transpose the written key ${example.interval}: ${example.written} becomes ${example.concert} at concert pitch.`
      : `Transpose from concert pitch in the opposite direction: ${example.concert} becomes written ${example.written} for an ${example.instrument}.`,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:${sourceAbcKey}\nV:1 clef=treble\nC D E G|`, alt: `Short melody in ${sourceKey}` },
    userAnswer: null,
  };
}

function raiseScaleNote(note) {
  if (note.endsWith('b')) return note[0];
  return note.endsWith('#') ? `${note}#` : `${note}#`;
}

function makeTonicTriadQuestion(degree = 1) {
  const template = randomFrom(SCALE_TEMPLATES);
  const [keyName, key, scaleNotes] = randomFrom([template.major, template.minor]);
  const signature = KEY_SIGNATURES.find(({ key: signatureKey }) => signatureKey === keyName);
  const functionNames = { 1: 'tonic', 2: 'supertonic', 4: 'subdominant', 5: 'dominant' };
  const mode = degree === 1 ? randomFrom(['key-signature', 'written-accidentals']) : 'written-accidentals';
  const harmonicNotes = keyName.endsWith('minor')
    ? scaleNotes.map((note, index) => (index === 6 ? raiseScaleNote(note) : note))
    : scaleNotes;
  const rootIndex = degree - 1;
  const triadNotes = [0, 2, 4].map((offset) => harmonicNotes[(rootIndex + offset) % 7]);
  const expectedNotes = mode === 'key-signature' ? triadNotes.map((note) => note[0]) : triadNotes;
  const correct = JSON.stringify({
    signature: mode === 'key-signature' ? keySignatureValue(signature.accidental, signature.notes) : 'none',
    notes: expectedNotes,
  });
  return {
    id: `${functionNames[degree]}-triad-${key.replaceAll('#', 'sharp').replaceAll('b', 'flat')}-${mode}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'tonic-triads',
    questionForm: 'triad-builder',
    grade: Math.max(CURRICULUM.keyGrades[keyName], degree === 1 ? 1 : degree === 2 ? 5 : CURRICULUM.questionFormGrades.functionalTriad),
    answerType: 'tonic-triad',
    triadMode: mode,
    triadFunction: functionNames[degree],
    question: `Build the ${functionNames[degree]} triad of ${keyName}. ${mode === 'key-signature' ? 'Use the key signature.' : 'Use written accidentals — no key signature.'}`,
    answer: correct,
    correct,
    options: [],
    explanation: `${keyName} uses the ${functionNames[degree]}-triad notes ${triadNotes.map(formatPitchName).join(', ')}${mode === 'key-signature' ? '; the required accidentals belong in the key signature.' : '; write any required accidentals on the notes.'}`,
    image: null,
    notation: null,
    triad: { keyName, key, triadNotes, signature },
    userAnswer: null,
  };
}

function triadChordAbc(notes, inversion = 0) {
  const voiced = [...notes.slice(inversion), ...notes.slice(0, inversion)];
  let octave = 4;
  return `[${voiced.map((note, index) => {
    if (index > 0 && NOTE_LETTERS.indexOf(note[0]) <= NOTE_LETTERS.indexOf(voiced[index - 1][0])) octave += 1;
    return noteToAbc(note, octave);
  }).join('')}]4`;
}

function makeTriadInversionQuestion() {
  const template = randomFrom(SCALE_TEMPLATES);
  const [keyName, , scaleNotes] = randomFrom([template.major, template.minor]);
  const functionOptions = [{ degree: 1, name: 'tonic' }, { degree: 2, name: 'supertonic' }, { degree: 4, name: 'subdominant' }, { degree: 5, name: 'dominant' }];
  const functionChoice = randomFrom(functionOptions);
  const harmonicNotes = keyName.endsWith('minor') ? scaleNotes.map((note, index) => (index === 6 ? raiseScaleNote(note) : note)) : scaleNotes;
  const rootIndex = functionChoice.degree - 1;
  const notes = [0, 2, 4].map((offset) => harmonicNotes[(rootIndex + offset) % 7]);
  const inversion = randomFrom([0, 1, 2]);
  const labels = ['Root position', 'First inversion', 'Second inversion'];
  const answer = labels[inversion];
  return {
    id: `triad-inversion-${keyName}-${functionChoice.degree}-${inversion}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'tonic-triads',
    questionForm: 'triad-inversion',
    grade: CURRICULUM.questionFormGrades.triadInversion,
    question: `Identify the inversion of this ${functionChoice.name} triad in ${keyName}.`,
    answer,
    correct: answer,
    options: labels,
    explanation: `${answer} has ${formatPitchName(notes[inversion])} as its lowest note.`,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:C\nV:1 clef=treble\n${triadChordAbc(notes, inversion)}|`, alt: `${answer} ${functionChoice.name} triad in ${keyName}` },
    userAnswer: null,
  };
}

function makeCadenceQuestion() {
  const template = randomFrom(SCALE_TEMPLATES.filter(({ major }) => ['C major', 'G major', 'D major', 'F major'].includes(major[0])));
  const [keyName, , scaleNotes] = template.major;
  const types = [
    { name: 'Perfect cadence', degrees: [5, 1], explanation: 'A perfect cadence moves from the dominant (V) to the tonic (I).' },
    { name: 'Plagal cadence', degrees: [4, 1], explanation: 'A plagal cadence moves from the subdominant (IV) to the tonic (I).' },
    { name: 'Imperfect cadence', degrees: [1, 5], explanation: 'An imperfect cadence ends on the dominant (V).' },
  ];
  const type = randomFrom(types);
  const chordFor = (degree) => triadChordAbc([0, 2, 4].map((offset) => scaleNotes[(degree - 1 + offset) % 7]));
  return {
    id: `cadence-${keyName}-${type.name.replaceAll(' ', '-').toLowerCase()}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'tonic-triads',
    questionForm: 'cadence-identification',
    grade: CURRICULUM.questionFormGrades.cadence,
    question: `Identify this cadence in ${keyName}.`,
    answer: type.name,
    correct: type.name,
    options: shuffle([type.name, ...types.filter((candidate) => candidate !== type).map((candidate) => candidate.name), 'Interrupted cadence']),
    explanation: type.explanation,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:C\nV:1 clef=treble\n${chordFor(type.degrees[0])}|${chordFor(type.degrees[1])}||`, alt: `${type.name} in ${keyName}` },
    userAnswer: null,
  };
}

function getTimeSignatureGroups(signature) {
  const irregularGroupings = {
    '5/4': [[16, 24], [24, 16]],
    '7/4': [[16, 16, 24], [24, 16, 16]],
    '5/8': [[8, 12], [12, 8]],
    '7/8': [[8, 8, 12], [12, 8, 8], [8, 12, 8]],
  };
  if (irregularGroupings[signature.label]) return randomFrom(irregularGroupings[signature.label]);
  const beatUnits = 32 / signature.bottom;
  if (signature.top > 3 && signature.top % 3 === 0) {
    return Array(signature.top / 3).fill(beatUnits * 3);
  }
  return Array(signature.top).fill(beatUnits);
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
  const slots = descriptors.flat();
  const first = randomFrom(slots);
  first.missing = true;
  // Keep blanks separated. Adjacent hidden rests can admit more than one
  // plausible reading, whereas separated slots retain the beat grouping.
  if (restCount === 2) {
    const separatedSlots = slots.filter((slot, index) => {
      const firstIndex = slots.indexOf(first);
      return Math.abs(index - firstIndex) > 1;
    });
    if (separatedSlots.length) randomFrom(separatedSlots).missing = true;
  }
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
  const compound = signature.top > 3 && signature.top % 3 === 0;
  const options = [signature.label];
  shuffle(TIME_SIGNATURES).forEach(({ label }) => {
    const conflictsWithAnOption = options.some((option) => CONFUSING_TIME_SIGNATURES.get(option) === label);
    if (options.length < 4 && !options.includes(label) && !conflictsWithAnOption) options.push(label);
  });
  return {
    id: `time-signature-${signature.label}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    questionForm: 'time-signature-identification',
    grade: notation.grade,
    question: 'What is the time signature of the following bars?',
    answer: signature.label,
    correct: signature.label,
    options: shuffle(options),
    explanation: signature.top === 5 || signature.top === 7
      ? `${signature.label} is irregular: the notes are grouped into beats of two and three${signature.top === 7 ? ', with one additional group of two' : ''}.`
      : compound
      ? `${signature.label} has ${signature.top / 3} main beats, each grouped as three quavers.`
      : `${signature.label} has ${signature.top} beats in each bar, with a ${signature.bottom} note receiving one beat.`,
    image: null,
    notation,
    userAnswer: null,
  };
}

function timeSignatureClass(signature) {
  if (signature.top === 5) return 'Irregular quintuple';
  if (signature.top === 7) return 'Irregular septuple';
  const compound = signature.top > 3 && signature.top % 3 === 0;
  const beats = compound ? signature.top / 3 : signature.top;
  return `${compound ? 'Compound' : 'Simple'} ${beats === 2 ? 'duple' : beats === 3 ? 'triple' : 'quadruple'}`;
}

function makeTimeSignatureClassificationQuestion() {
  const signature = randomFrom(TIME_SIGNATURES);
  const correct = timeSignatureClass(signature);
  return {
    id: `time-classification-${signature.label}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    questionForm: 'time-signature-classification',
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

function makeAdvancedRhythmQuestion() {
  const examples = [
    {
      answer: 'A minim + a crotchet + a quaver (7 quavers)',
      question: 'What value is this note?',
      abc: 'X:1\nM:none\nL:1/8\nK:C\nV:1 clef=treble\nC7',
      explanation: 'A double-dotted minim lasts seven quavers: a minim plus a crotchet and a quaver.',
      options: ['A minim + a crotchet + a quaver (7 quavers)', 'A minim + a crotchet (6 quavers)', 'A minim + a quaver (5 quavers)', 'Two minims (8 quavers)'],
    },
    {
      answer: 'Duplet',
      question: 'What rhythmic grouping is shown?',
      abc: 'X:1\nM:6/8\nL:1/8\nK:C\nV:1 clef=treble\n(2CD EFG',
      explanation: 'A duplet fits two equal notes into the time normally occupied by three of the same value.',
      options: ['Duplet', 'Triplet', 'Double-dotted rhythm', 'Syncopation'],
    },
    {
      answer: 'A minim rest + a crotchet rest + a quaver rest (7 quavers)',
      question: 'What value is this rest?',
      abc: 'X:1\nM:none\nL:1/8\nK:C\nV:1 clef=bass\nz7',
      explanation: 'A double-dotted minim rest lasts seven quavers: a minim plus a crotchet and a quaver.',
      options: ['A minim rest + a crotchet rest + a quaver rest (7 quavers)', 'A minim rest + a crotchet rest (6 quavers)', 'A minim rest + a quaver rest (5 quavers)', 'Two minim rests (8 quavers)'],
    },
    {
      answer: 'Two semibreves (8 crotchets)',
      question: 'What value is this note?',
      abc: 'X:1\nM:4/2\nL:1/8\nK:C\nV:1 clef=treble\nC16||',
      explanation: 'A breve note lasts for two semibreves, which is eight crotchets.',
      options: ['Two semibreves (8 crotchets)', 'One semibreve (4 crotchets)', 'One minim (2 crotchets)', 'Three minims (6 crotchets)'],
    },
    {
      answer: 'Two semibreves (8 crotchets)',
      question: 'What value is this rest?',
      abc: 'X:1\nM:4/2\nL:1/8\nK:C\nV:1 clef=treble\nz16||',
      explanation: 'A breve rest lasts for two semibreves.',
      options: ['Two semibreves (8 crotchets)', 'One semibreve (4 crotchets)', 'One minim (2 crotchets)', 'Three minims (6 crotchets)'],
    },
  ];
  const example = randomFrom(examples);
  return {
    id: `advanced-rhythm-${example.answer.replaceAll(' ', '-').toLowerCase()}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    questionForm: 'rhythm-value',
    grade: 4,
    answerType: 'rhythm-identification',
    question: example.question,
    answer: example.answer,
    correct: example.answer,
    options: shuffle(example.options),
    explanation: example.explanation,
    image: null,
    notation: { abc: example.abc, alt: example.answer },
    userAnswer: null,
  };
}

function makeIrregularDivisionQuestion() {
  const example = randomFrom([
    { name: 'Quintuplet', abc: 'X:1\nM:4/4\nL:1/8\nK:C\nV:1 clef=treble\n(5CDEFG', explanation: 'A quintuplet divides a simple time value into five equal notes instead of its usual division.' },
    { name: 'Septuplet', abc: 'X:1\nM:4/4\nL:1/8\nK:C\nV:1 clef=treble\n(7CDEFGAB', explanation: 'A septuplet divides a simple time value into seven equal notes instead of its usual division.' },
  ]);
  return {
    id: `irregular-division-${example.name.toLowerCase()}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'time-signatures',
    questionForm: 'irregular-division',
    grade: CURRICULUM.questionFormGrades.irregularRhythm,
    question: 'What irregular division is shown?',
    answer: example.name,
    correct: example.name,
    options: shuffle([example.name, ...['Duplet', 'Triplet', 'Quintuplet', 'Septuplet'].filter((name) => name !== example.name).slice(0, 3)]),
    explanation: example.explanation,
    image: null,
    notation: { abc: example.abc, alt: example.name },
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
    questionForm: 'missing-rest',
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
      barCount: 2,
      lineBreaks: [2],
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
    questionForm: 'key-signature-builder',
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
    questionForm: 'scale-identification',
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

function makeScaleDegreeQuestion() {
  const template = randomFrom(SCALE_TEMPLATES);
  const [keyName, key, notes] = template.major;
  const degreeNames = ['Tonic', 'Supertonic', 'Mediant', 'Subdominant', 'Dominant', 'Submediant', 'Leading note'];
  const degree = Math.floor(Math.random() * 7);
  const note = notes[degree];
  const clef = randomFrom(['treble', 'alto', 'bass']);
  const octave = randomFrom(SAFE_ROOT_OCTAVES[clef][note[0]]);
  return {
    id: `scale-degree-${key}-${degree}-${Math.random().toString(36).slice(2, 8)}`,
    category: 'key-signatures',
    grade: CURRICULUM.questionFormGrades.scaleDegree,
    questionForm: 'scale-degree',
    question: `What is the technical name of this note in ${keyName}?`,
    answer: degreeNames[degree],
    correct: degreeNames[degree],
    options: shuffle([degreeNames[degree], ...shuffle(degreeNames.filter((name) => name !== degreeNames[degree])).slice(0, 3)]),
    explanation: `${formatPitchName(note)} is the ${degreeNames[degree].toLowerCase()} of ${keyName}.`,
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/4\nK:${key}\nV:1 clef=${clef}\n${noteToAbc(scaleNoteWithAccidental(note, true, notes.filter((scaleNote) => scaleNote.length > 1).map((scaleNote) => scaleNote[0])), octave)}4`, alt: `${formatPitchName(note)} in ${keyName}` },
    userAnswer: null,
  };
}

function makeChromaticScaleQuestion() {
  const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
  const notationNotes = chromaticNotes.map((note, index) => `${noteToAbc(note, index === chromaticNotes.length - 1 ? 5 : 4)}2`);
  return {
    id: `chromatic-scale-${Math.random().toString(36).slice(2, 8)}`,
    category: 'key-signatures',
    grade: CURRICULUM.questionFormGrades.chromaticScale,
    questionForm: 'chromatic-scale',
    question: 'Identify this scale.',
    answer: 'Chromatic scale',
    correct: 'Chromatic scale',
    options: shuffle(['Chromatic scale', 'C major scale', 'C harmonic minor scale', 'C melodic minor scale']),
    explanation: 'A chromatic scale moves by semitone throughout, using every pitch between the starting note and its octave.',
    image: null,
    notation: { abc: `X:1\nM:none\nL:1/8\nK:C\nV:1 clef=treble\n${notationNotes.join(' ')}`, alt: 'Ascending chromatic scale' },
    userAnswer: null,
  };
}

function sampleQuestions(questions, count) {
  return shuffle(uniqueQuestions(questions)).slice(0, count).map((question) => ({ ...question }));
}

// Ignore answer choices and runtime metadata when identifying a question. This
// prevents the same prompt/notation from being selected twice, even when it
// was generated in different grade pools.
function questionIdentity(question) {
  return stableQuestionSnapshot(question);
}

function uniqueQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    const identity = questionIdentity(question);
    if (seen.has(identity)) return false;
    seen.add(identity);
    return true;
  });
}

function selectQuestionsByGrade(candidates, questionCount, maximumGrade) {
  return selectBalancedQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function selectBalancedQuestionsByGrade(candidates, questionCount, maximumGrade) {
  const eligible = candidates.map(ensureQuestionMetadata).filter((question) => question.grade <= maximumGrade);
  if (!eligible.length) return [];
  const focusGrade = eligible.some((question) => question.grade === maximumGrade)
    ? maximumGrade
    : Math.max(...eligible.map((question) => question.grade));
  const focusPool = uniqueQuestions(eligible.filter((question) => question.grade === focusGrade));
  const lowerPool = uniqueQuestions(eligible.filter((question) => question.grade < focusGrade));
  const focusCount = lowerPool.length ? Math.ceil(questionCount / 2) : questionCount;
  const selectedIdentities = new Set();
  const selectBand = (pool, count) => {
    const selected = [];
    const formCounts = new Map();
    while (selected.length < count) {
      const availablePool = pool.filter((question) => !selectedIdentities.has(questionIdentity(question)));
      if (!availablePool.length) break;
      const availableForms = [...new Set(availablePool.map((question) => question.questionForm || 'default'))];
      const leastUsed = Math.min(...availableForms.map((form) => formCounts.get(form) || 0));
      const forms = availableForms.filter((form) => (formCounts.get(form) || 0) === leastUsed);
      const choice = randomFrom(availablePool.filter((question) => forms.includes(question.questionForm || 'default')));
      selected.push({ ...choice });
      selectedIdentities.add(questionIdentity(choice));
      const form = choice.questionForm || 'default';
      formCounts.set(form, (formCounts.get(form) || 0) + 1);
    }
    return selected;
  };
  const selected = [
    ...selectBand(focusPool, focusCount),
    ...selectBand(lowerPool, questionCount - focusCount),
  ];
  // If one grade band has fewer unique questions than its target, top up from
  // the other eligible questions without ever reusing a question identity.
  const remaining = uniqueQuestions(eligible).filter((question) => !selectedIdentities.has(questionIdentity(question)));
  selected.push(...selectBand(remaining, questionCount - selected.length));
  return shuffle(selected).slice(0, questionCount);
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
    ...runtimeQuestionPool(makeCompoundIntervalRecognitionQuestion, questionCount),
  ];
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function createPitchesTest(questionCount, maximumGrade) {
  const makers = [makePitchQuestion, makePitchQuestion, makeEnharmonicQuestion, makeInstrumentTranspositionQuestion];
  return selectQuestionsByGrade(runtimeQuestionPool(() => randomFrom(makers)(), questionCount), questionCount, maximumGrade);
}

function createTonicTriadsTest(questionCount, maximumGrade) {
  const makers = [
    () => makeTonicTriadQuestion(),
    () => makeTonicTriadQuestion(randomFrom([4, 5])),
    () => makeTonicTriadQuestion(2),
    makeTriadInversionQuestion,
    makeCadenceQuestion,
  ];
  return selectQuestionsByGrade(runtimeQuestionPool(() => randomFrom(makers)(), questionCount), questionCount, maximumGrade);
}

function createTimeSignaturesTest(questionCount, maximumGrade) {
  const makers = [makeTimeSignatureQuestion, makeRestIdentificationQuestion, makeTimeSignatureClassificationQuestion, makeAdvancedRhythmQuestion, makeIrregularDivisionQuestion];
  const candidates = runtimeQuestionPool(() => randomFrom(makers)(), questionCount);
  return selectQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function createKeySignaturesTest(questionCount, maximumGrade) {
  const makers = [makeKeySignatureQuestion, makeScaleQuestion, makeScaleDegreeQuestion, makeChromaticScaleQuestion];
  const candidates = makers.flatMap((maker) => runtimeQuestionPool(maker, questionCount));
  return selectBalancedQuestionsByGrade(candidates, questionCount, maximumGrade);
}

function formatTonicTriadAnswer(answer) {
  if (!answer) return '';
  let value;
  try { value = JSON.parse(answer); } catch (error) { return answer; }
  const signature = value.signature === 'none' ? 'No key signature' : formatKeySignatureAnswer(value.signature);
  return `${signature}; notes: ${value.notes.map(formatPitchName).join(', ')}`;
}

export {
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
};
