# ABRSM Music Theory Test App

A simple, strictly client-side mock-test application for ABRSM Music Theory Grades 1–3.

## How to use

No local server, build step, or package installation is required.

Open [`index.html`](./index.html) directly in a web browser.

## How the mock test works

- Terms, signs, and notation tests contain 15 questions, with five randomly selected from each grade.
- Interval tests generate four-choice interval questions from the runtime interval matrix.
- Time-signature and key-signature tests contain 5, 10, or 15 questions, mixed randomly.
- Time-signature questions make up no more than 30% of that category; the remaining questions cover key-signature building and scale identification.
- Choice-based questions have four answer choices: one correct answer and three distractors.
- Questions are answered one at a time.
- Progress and the current score are shown during the test.
- After the final question, the result page lists incorrect answers alongside the correct answers.
- **Do another test** starts a fresh randomized test.

## Features

- Time signatures are shown as musical notation choices, including common time (`C`) and alla breve/cut time.
- Time-signature distractors avoid the easily confused pairs 4/4 vs 2/2 and 3/4 vs 6/8.
- Key-signature questions support the requested major keys and their relative minor keys.
- The key-signature builder lets learners choose sharps, flats, or no accidentals, then select notes in C–B order. The answer is validated against the conventional written order (F–C–G–D–A–E–B for sharps and B–E–A–D–G–C–F for flats).
- Scale-identification questions show eight semibreves in treble or bass clef, ascending or descending, with major, harmonic-minor, and melodic-minor scales. Scales may use a key signature or accidentals written on the notes.
- Melodic-minor descending scales correctly use the natural-minor form, and tonic endpoints remain the same base note.
- Musical notation is rendered client-side with the bundled ABCJS runtime; no server or package installation is required.

## Ground truth and question bank

The maintained ground truth for the app is the PDF question bank:

[`output/pdf/abrsm-terms-and-signs-grades-1-3.pdf`](./output/pdf/abrsm-terms-and-signs-grades-1-3.pdf)

The PDF is the canonical reference for the terms-and-signs questions, answers, grade grouping, and notation graphics. The question data in [`app.js`](./app.js) is the client-side runtime copy used by the application. Runtime-generated interval, time-signature, key-signature, and scale questions are defined in `app.js`.

The PDF was compiled from:

- The supplied Grade 1, Grade 2, and Grade 3 Terms & Signs PPSX presentations
- The attached ABRSM terms-and-signs PDF
- The attached ABRSM terms-and-signs DOCX

Notation images used by both the app and the PDF are stored under [`assets/`](./assets).

## Project structure

```text
index.html                         Application markup
styles.css                         Application styling
app.js                             Question bank and test logic
assets/                            Musical notation images
output/pdf/                        Canonical PDF question bank
```

## Updating the bank

When adding or correcting questions:

1. Update the canonical PDF question bank first.
2. Update the corresponding grade array in `app.js`.
3. Keep question wording, answers, grade tags, and image paths aligned between the PDF and app.
4. Run a JavaScript syntax check before committing:

   ```bash
   node --check app.js
   ```
