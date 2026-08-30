// Ascending intervals, spelled correctly from the supplied starting notes.
// `semitones` supports answer checking; `note` preserves the musically correct spelling.
const INTERVALS = Object.freeze([
  Object.freeze({ id: 'm2', name: 'Minor 2nd', semitones: 1 }),
  Object.freeze({ id: 'M2', name: 'Major 2nd', semitones: 2 }),
  Object.freeze({ id: 'm3', name: 'Minor 3rd', semitones: 3 }),
  Object.freeze({ id: 'M3', name: 'Major 3rd', semitones: 4 }),
  Object.freeze({ id: 'P4', name: 'Perfect 4th', semitones: 5 }),
  Object.freeze({ id: 'P5', name: 'Perfect 5th', semitones: 7 }),
  Object.freeze({ id: 'm6', name: 'Minor 6th', semitones: 8 }),
  Object.freeze({ id: 'M6', name: 'Major 6th', semitones: 9 }),
  Object.freeze({ id: 'm7', name: 'Minor 7th', semitones: 10 }),
  Object.freeze({ id: 'M7', name: 'Major 7th', semitones: 11 }),
  Object.freeze({ id: 'P8', name: 'Perfect 8th', semitones: 12 }),
]);

const INTERVAL_MATRIX = Object.freeze({
  C: Object.freeze({ m2: 'Db', M2: 'D', m3: 'Eb', M3: 'E', P4: 'F', P5: 'G', m6: 'Ab', M6: 'A', m7: 'Bb', M7: 'B', P8: 'C' }),
  G: Object.freeze({ m2: 'Ab', M2: 'A', m3: 'Bb', M3: 'B', P4: 'C', P5: 'D', m6: 'Eb', M6: 'E', m7: 'F', M7: 'F#', P8: 'G' }),
  D: Object.freeze({ m2: 'Eb', M2: 'E', m3: 'F', M3: 'F#', P4: 'G', P5: 'A', m6: 'Bb', M6: 'B', m7: 'C', M7: 'C#', P8: 'D' }),
  A: Object.freeze({ m2: 'Bb', M2: 'B', m3: 'C', M3: 'C#', P4: 'D', P5: 'E', m6: 'F', M6: 'F#', m7: 'G', M7: 'G#', P8: 'A' }),
  E: Object.freeze({ m2: 'F', M2: 'F#', m3: 'G', M3: 'G#', P4: 'A', P5: 'B', m6: 'C', M6: 'C#', m7: 'D', M7: 'D#', P8: 'E' }),
  F: Object.freeze({ m2: 'Gb', M2: 'G', m3: 'Ab', M3: 'A', P4: 'Bb', P5: 'C', m6: 'Db', M6: 'D', m7: 'Eb', M7: 'E', P8: 'F' }),
  Bb: Object.freeze({ m2: 'Cb', M2: 'C', m3: 'Db', M3: 'D', P4: 'Eb', P5: 'F', m6: 'Gb', M6: 'G', m7: 'Ab', M7: 'A', P8: 'Bb' }),
  Eb: Object.freeze({ m2: 'Fb', M2: 'F', m3: 'Gb', M3: 'G', P4: 'Ab', P5: 'Bb', m6: 'Cb', M6: 'C', m7: 'Db', M7: 'D', P8: 'Eb' }),
  Ab: Object.freeze({ m2: 'Bbb', M2: 'Bb', m3: 'Cb', M3: 'C', P4: 'Db', P5: 'Eb', m6: 'Fb', M6: 'F', m7: 'Gb', M7: 'G', P8: 'Ab' }),
});

// Global exports keep the matrix available to future non-module quiz scripts.
window.ABRSM_INTERVALS = INTERVALS;
window.ABRSM_INTERVAL_MATRIX = INTERVAL_MATRIX;
