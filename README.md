# ABRSM Music Theory Test App

A simple, strictly client-side mock-test application primarily covering ABRSM Music Theory Grades 1–5.

Current release: **1.5.0**

## How to use

No local server, build step, or package installation is required.

Open [`index.html`](./index.html) directly in a web browser.

## How the mock test works

- Terms, signs, and notation tests contain 15 questions, with five randomly selected from each grade.
- Interval tests generate four-choice interval questions from the runtime interval matrix.
- Interval practice also includes naming harmonic and melodic intervals shown in treble or bass clef, with a studied key signature or written accidentals.
- Pitch practice asks learners to name notes shown in treble or bass clef with a studied key signature.
- Tonic-triad practice has builders for using a key signature first or writing accidentals directly on the chord tones.
- Time-signature and key-signature practice are separate categories, each with 5, 10, or 15 questions.
- Time-signature practice mixes meter recognition with missing-rest questions; key-signature practice mixes key-signature building with scale identification.
- Time-signature practice also asks learners to classify metres as simple or compound, and as duple, triple, or quadruple.
- Some time-signature questions hide two to four rests across two bars and ask the learner to identify each rest’s duration and dotted state.
- Choice-based questions have four answer choices: one correct answer and three distractors.
- Questions are answered one at a time.
- The five-dot grade selector sets the highest grade in a test. About half the questions use that highest available grade and the rest are drawn from lower grades.
- Every category uses the same sampler: it balances available question forms within each grade band while keeping about half the test at the selected highest grade.
- Grade 4 Terms & Signs includes Italian and French directions, string techniques, piano pedal signs, and illustrated ornament recognition.
- Grade 5 Terms & Signs adds the remaining supplied Italian, French, and German directions and expressive markings.
- Grade 5 time-signature practice adds 5/4, 7/4, 5/8, and 7/8, with valid irregular beat groupings plus quintuplet and septuplet recognition.
- Grade 5 pitch practice adds tenor-clef reading, six-sharp and six-flat key signatures, and concert-pitch transposition for B♭, A, and F instruments.
- Grade 5 interval practice includes compound intervals; triad practice adds supertonic triads, inversion recognition, and perfect, plagal, and imperfect cadences in C, G, D, and F major.
- Grade 4 practice adds five-accidental keys, alto-clef pitch reading, enharmonic equivalents, chromatic scales, technical scale-degree names, subdominant and dominant triads, extended compound metres, and recognition of duplets, double dots, and breve notes and rests.
- An optional timed mode gives 20 seconds per question; unanswered questions count as incorrect.
- The selected category, Grade ceiling, per-category question count, and timed-mode setting are saved locally in the browser and restored when the app is reopened.
- Every generated question carries the earliest applicable syllabus grade in a central curriculum map. This keeps the current mixed-level practice ready for a later Grade 4 or Grade 5 filter.
- Progress and the current score are shown during the test.
- After the final question, the result page lists incorrect answers alongside the correct answers.
- **Do another test** starts a fresh randomized test.

## Features

- Time signatures are shown as musical notation choices, including common time (`C`) and alla breve/cut time.
- Time-signature distractors avoid the easily confused pairs 4/4 vs 2/2 and 3/4 vs 6/8.
- Time-signature rhythms are generated from meter-specific templates, with sensible beat groupings, controlled subdivisions, and occasional crotchet, quaver, or semiquaver triplets.
- Key-signature questions support the requested major keys and their relative minor keys.
- The key-signature builder lets learners choose sharps, flats, or no accidentals, then select notes in C–B order. The answer is validated against the conventional written order (F–C–G–D–A–E–B for sharps and B–E–A–D–G–C–F for flats).
- Scale-identification questions show eight semibreves in treble or bass clef, ascending or descending, with major, harmonic-minor, and melodic-minor scales. Scales may use a key signature or accidentals written on the notes.
- Melodic-minor descending scales correctly use the natural-minor form, and tonic endpoints remain the same base note.
- Musical notation is rendered client-side with the bundled ABCJS runtime; no server or package installation is required.

## Ground truth and question bank

The maintained ground truth for the app is the PDF question bank:

[`output/pdf/abrsm-terms-and-signs-grades-1-3.pdf`](./output/pdf/abrsm-terms-and-signs-grades-1-3.pdf)

The Grade 1–3 PDF is the canonical reference for those terms-and-signs questions, answers, grade grouping, and notation graphics. Grade 4 terms were initially drawn from the supplied Italian and French PPSX presentations and reconciled with the maintained Grade 4 curriculum list. Grade 5 terms are the remaining entries in the maintained supplied list that do not already appear in Grades 1–4. The question data in [`app.js`](./app.js) is the client-side runtime copy used by the application. Runtime-generated interval, time-signature, key-signature, and scale questions are defined in `app.js`; their grade metadata is maintained in the central `CURRICULUM` map.

The PDF was compiled from:

- The supplied Grade 1, Grade 2, and Grade 3 Terms & Signs PPSX presentations
- The supplied Grade 4 Italian and French Terms & Signs PPSX presentations
- The attached ABRSM terms-and-signs PDF
- The attached ABRSM terms-and-signs DOCX

Notation images used by both the app and the PDF are stored under [`assets/`](./assets).

## Project structure

```text
index.html                         Application markup
privacy-policy.html                Privacy Policy
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
