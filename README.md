# ABRSM Music Theory Test App

A simple, strictly client-side mock-test application primarily covering ABRSM Music Theory Grades 1–5.

Current release: **2.0.0**

## How to use

No local server, build step, or package installation is required.

Open [`index.html`](./index.html) directly in a web browser.

## How the mock test works

- Terms, signs, and notation tests contain 15 questions, with five randomly selected from each grade.
- Interval tests generate four-choice interval questions from the runtime interval matrix.
- Interval practice also includes naming harmonic and melodic intervals shown in treble or bass clef, with a studied key signature or written accidentals.
- Pitch practice asks learners to name notes shown in treble or bass clef with a studied key signature.
- Tonic-triad practice has builders for using a key signature first or writing accidentals directly on the chord tones.
- Time-signature and key-signature practice are separate categories, with one shared 5, 10, or 15-question test-length setting.
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
- Every question now carries a stable `questionId` and `skillId`, including runtime-generated notation questions, so later synced history can group attempts reliably.
- Completed and in-progress tests are stored locally as practice sessions and individual attempts. The history includes category, grade, skill, answer, correctness, timing, and a question snapshot; it is ready to sync to a server in a later phase.
- The main quiz includes **Review mistakes** and **Needs practice** views. Mistakes retain their notation, answers, and explanations; skills are ranked by accuracy and can launch focused practice from saved questions.
- An optional history-sync client can merge browser history with the signed-in Google account and POST the merged history to a Cloudflare Worker when `window.ABRSM_HISTORY_API_URL` is configured. The client remains offline-first when no API URL is configured.
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
- Music notation uses the available container width with controlled ABCJS layout, resize-aware reflow, and mobile overflow handling for narrow phone screens and orientation changes.

## Cloudflare Worker and D1 history API

The repository includes a Worker API in [`worker/src/index.js`](./worker/src/index.js) and one shared D1 schema in [`worker/migrations/0001_history.sql`](./worker/migrations/0001_history.sql). All users share the same D1 database; records are isolated by the verified Google subject (`google:<sub>`). The browser uses Google Identity Services and sends the Google ID token as a Bearer token. The Worker verifies the token signature, issuer, audience, expiry, and verified-email claim against Google’s published signing keys. The local Worker still accepts `X-User-Id` only when the `local` Wrangler environment is used.

### Configure Google Sign-In

Create a Google OAuth **Web application** client in Google Cloud Console. Add every browser origin that will host the quiz (for example, `http://localhost:8000` and your production HTTPS domain) to the client’s authorized JavaScript origins. The client ID is public; do not treat it as a secret.

Set the same client ID and the production frontend origin in the production Wrangler environment:

```toml
[env.production.vars]
ENVIRONMENT = "production"
GOOGLE_CLIENT_ID = "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com"
ALLOWED_ORIGINS = "https://your-quiz-domain.example"
```

The static app discovers `GOOGLE_CLIENT_ID` from `/api/v1/auth/config`, renders the Google button, and keeps the ID token in memory only. On sign-in it fetches the account’s remote history, merges it with anonymous local records by stable session/attempt ID, stores the merged result locally, and syncs it back to D1. If a different Google account signs in later, the previous account’s browser cache is cleared before merging so histories cannot cross accounts.

### Automatic production deployment

[`deploy.yml`](./.github/workflows/deploy.yml) deploys the production Worker and static assets whenever a commit reaches the `master` branch. It first applies any pending remote D1 migrations, then runs `wrangler deploy --env production`.

Add these repository secrets in GitHub under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`: an account API token with the minimum permissions needed to edit Workers and D1 (Workers Scripts Edit and D1 Edit).
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID that owns the Worker and `abrsm` database.

The token is used only by GitHub Actions and is never stored in the repository.

### Test the Worker and D1 locally

Install or run Wrangler, then apply the migration to Wrangler’s local D1 emulator:

```bash
npx wrangler@latest d1 migrations apply music-theory-quiz --local --env local
```

Start the Worker in local mode:

```bash
npx wrangler@latest dev --local --env local
```

The Worker listens on `http://localhost:8787`. Check it with:

```bash
curl http://localhost:8787/api/v1/health
```

Sync a small test history using the development-only user header:

```bash
curl -X POST http://localhost:8787/api/v1/history/sync \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: local-user-1' \
  -d '{"sessions":[],"attempts":[]}'
```

Read that user’s synced history:

```bash
curl http://localhost:8787/api/v1/history \
  -H 'X-User-Id: local-user-1'
```

To exercise the browser sync client locally, set these development-only globals before starting a test:

```js
window.ABRSM_HISTORY_API_URL = 'http://localhost:8787/api/v1/history/sync';
window.ABRSM_HISTORY_USER_ID = 'local-user-1';
```

For Google Sign-In locally, configure `GOOGLE_CLIENT_ID` in `env.local.vars` and use the local Worker URL in `window.ABRSM_HISTORY_API_URL`. The development-only `X-User-Id` path remains available for curl tests; browser Google tokens are verified the same way as production tokens when a client ID is configured.

The local D1 files are managed by Wrangler and should not be committed. Apply the production migration and deploy the named production environment explicitly:

```bash
npx wrangler@latest d1 migrations apply abrsm --remote --env production --config ./wrangler.toml
npx wrangler@latest deploy --env production --config ./wrangler.toml
```

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
