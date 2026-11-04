// Rebuilt from the PDF: the three PPSX banks plus additional entries from the
// attached official ABRSM terms-and-signs PDF/DOCX. Each entry is [question, answer, optional image].
const APP_VERSION = 'Version 2.1.0';

const RAW_BANK = {
  1: [
    ['Accelerando means:', 'Gradually getting quicker'], ['Adagio means:', 'Slow'], ['Allegretto means:', 'Fairly quick—but not as quick as allegro'], ['Allegro means:', 'Quick'], ['Andante means:', 'At a walking pace'], ['Cantabile means:', 'In a singing style'], ['Crescendo means:', 'Gradually getting louder'], ['Da capo means:', 'Repeat from the beginning'], ['Dal segno means:', 'Repeat from the sign'], ['Decrescendo means:', 'Gradually getting quieter'], ['Diminuendo means:', 'Gradually getting quieter'], ['Fine means:', 'The end'], ['f (forte) means:', 'Loud'], ['ff (fortissimo) means:', 'Very loud'], ['Legato means:', 'Smoothly'], ['Lento means:', 'Slow'], ['Mezzo means:', 'Half'], ['Maestoso means:', 'Majestic'], ['mf (mezzo forte) means:', 'Moderately loud'], ['mp (mezzo piano) means:', 'Moderately quiet'], ['Moderato means:', 'Moderately'], ['p (piano) means:', 'Quiet'], ['pp (pianissimo) means:', 'Very quiet'], ['Poco means:', 'A little'], ['Rallentando (or rall.) means:', 'Gradually getting slower'], ['Ritardando (or rit.) means:', 'Gradually getting slower'], ['Ritenuto (or rit.) means:', 'Held back'], ['Staccato (or stacc.) means:', 'Detached'], ['Tempo means:', 'Speed/time'], ['These signs above and below the notes are:', 'Accents', 'assets/grade1/image5.png'], ['The dots above the notes are:', 'Staccato marks', 'assets/grade1/image6.png'], ['The sign above the last note means:', 'A pause', 'assets/grade1/image7.png'], ['The sign above these notes means:', 'Tie', 'assets/grade1/image8.png'], ['The two dots at the stave end mean:', 'Repeat last section', 'assets/grade1/image9.png'],
    ['A tempo means:', "Return to the former speed ('in time')"], ['Al fine means:', 'Until the end'], ['Allegro moderato means:', 'Moderately quick'], ['Da capo al fine (D.C. al fine) means:', 'Repeat from the beginning and stop at the marked ending'], ['MM. crotchet = 120 means:', "Maelzel's metronome, 120 beats per minute"], ['Pause or fermata means:', 'Hold for longer than written'], ['Ottava sign (8va) means:', 'Play one octave higher or lower than written'], ['Poco a poco means:', 'Little by little']
  ],
  2: [
    ['a means:', 'In the style of'], ['a, alla means:', 'In the manner of'], ['Allargando means:', 'Broadening'], ['Andantino means:', 'Slightly faster than andante'], ['Assai means:', 'Very'], ['Con, col means:', 'With'], ['Dolce means:', 'Sweet'], ['e, ed means:', 'And'], ['Espressivo means:', 'Expressive'], ['fp (forte-piano) means:', 'Loud then immediately quiet'], ['Giocoso means:', 'Playful'], ['Grave means:', 'Very slow, solemn'], ['Grazioso means:', 'Graceful'], ['Larghetto means:', 'Rather slow (but not as slow as largo)'], ['Largo means:', 'Slow'], ['Ma means:', 'But'], ['Maestoso means:', 'Majestic'], ['Meno means:', 'Less'], ['Molto means:', 'Much'], ['Mosso, moto means:', 'Movement'], ['Non means:', 'Not'], ['Piu means:', 'More'], ['Presto means:', 'Fast'], ['Senza means:', 'Without'], ['sf, sfz (sforzando) means:', 'Forced, accented'], ['Simile (or sim.) means:', 'In the same way'], ['Sostenuto means:', 'Sustained'], ['Tenuto means:', 'Held'], ['Troppo means:', 'Too much'], ['Vivace, vivo means:', 'Lively, quick'], ['Dots inside the slur mark mean:', 'Semi-staccato', 'assets/grade2/image5.png'], ['These wedge shapes above and below the notes mean:', 'Staccatissimo (super-staccato)', 'assets/grade2/image6.png'], ['The lines above and below these notes mean:', 'Tenuto (held with slight pressure)', 'assets/grade2/image7.png'],
    ['Alla marcia means:', 'In the style of a march'], ['Con moto means:', 'With movement'], ['Meno mosso means:', 'Less movement (slower)'], ['Non troppo means:', 'Not too much'], ['Piu mosso means:', 'More speed (faster)'], ['Accent sign means:', 'Play strongly'], ['Mezzo-staccato means:', 'Moderately short and detached'], ['Marcato sign means:', 'A strong accent'], ['Staccatissimo means:', 'Extremely short and detached']
  ],
  3: [
    ['adagietto means:', 'Rather slow'], ['ad libitum, ad lib. means:', 'Play freely'], ['Agitato means:', 'Agitated'], ['Alla breve means:', 'Cut time or 2/2 time — 2 minim beats in a bar'], ['Amore means:', 'Love'], ['Anima means:', 'Soul, spirit'], ['Animato means:', 'Animated, lively'], ['Ben means:', 'Well'], ['Brio means:', 'Vigour'], ['Comodo means:', 'Convenient'], ['Deciso means:', 'With determination'], ['Delicato means:', 'Delicate'], ['Energico means:', 'Energetic'], ['Forza means:', 'Force'], ['Largamente means:', 'Broadly'], ['Leggiero means:', 'Light, nimble'], ['Marcato, marc. means:', 'Emphatic, accented'], ['Marziale means:', 'In a military style'], ['Mesto means:', 'Sad'], ['Pesante means:', 'Heavy'], ['Prima, primo means:', 'First'], ['Risoluto means:', 'With determination'], ['Ritmico means:', 'Rhythmically'], ['Rubato, tempo rubato means:', 'With some freedom of time'], ['Scherzando, scherzoso means:', 'Playful, joking'], ['Seconda, secondo means:', 'Second'], ['Semplice means:', 'Simple, plain'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'], ['Subito means:', 'Suddenly'], ['Tanto means:', 'So much'], ['Tranquillo means:', 'Calm'], ['Triste, tristamente means:', 'Sad, sorrowful'], ['Volta means:', 'Time'], ['What is the meaning of the two dots at the end of the stave?', 'Repeat previous section', 'assets/grade3/image5.png'], ['What does the line above the notes mean?', 'The slur', 'assets/grade3/image6.png'], ['What is the meaning of the dots above the notes?', 'Staccato marks', 'assets/grade3/image7.png'], ['What is the name of the line joining these two notes?', 'Tie', 'assets/grade3/image8.png'], ['What does a crotchet = 120 mean?', '120 crochet beats in a minute', 'assets/grade3/image9.png'],
    ['Amoroso means:', 'Loving'], ['Ben marcato means:', 'Well marked'], ['Con anima means:', 'With feeling, with spirit'], ['Con brio means:', 'With vigour'], ['Con forza means:', 'With force'], ['Prestissimo means:', 'Very fast'], ['Sforzando, sforzato, sfz, sf means:', 'Forced, accented']
  ],
  4: [
    ['Affettuoso means:', 'Tenderly'], ['Affrettando means:', 'Hurrying'], ['Amabile means:', 'Pleasant, amiable'], ['Appassionato means:', 'With passion'], ['Calando means:', 'Getting softer, dying away'], ['Cantando means:', 'Singing'], ['Come means:', 'As, similar to'], ['Facile means:', 'Easy'], ['Fuoco means:', 'Fire'], ['Giusto means:', 'Proper, exact'], ['L’istesso / L\'istesso tempo means:', 'At the same speed'], ['Morendo means:', 'Dying away'], ['Niente means:', 'Nothing'], ['Nobilmente means:', 'Nobly'], ['Perdendosi means:', 'Dying away'], ['Possibile means:', 'Possible'], ['Quasi means:', 'As if, resembling'], ['Sonoro means:', 'Resonant, with rich tone'], ['Sopra means:', 'Above'], ['Sotto means:', 'Below'], ['Veloce means:', 'Swift'], ['Voce means:', 'Voice'],
    ['Alla breve means:', 'Two minims (half notes) per bar'], ['Assai means:', 'Very'], ['Come prima means:', 'As before'], ['Comodo / Tempo comodo means:', 'Convenient, comfortable, at a comfortable speed'], ['Con brio means:', 'With vigour, spirit'], ['Deciso means:', 'With determination, decisive'], ['Larghetto means:', 'Less slow than largo'], ['Mesto means:', 'Sad, mournful'], ['Misterioso means:', 'Mysterious'], ['Ritmico means:', 'Rhythmic'], ['Rubato / Tempo rubato means:', 'With some freedom of time/rhythm'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'],
    ['Arco means:', 'Play with the bow (after pizzicato)'], ['Pizzicato means:', 'Plucked'], ['Con sordini (con sord.) / avec sourdines means:', 'With mutes'], ['Senza sordini / sans sourdines means:', 'Without mutes'], ['Sul G / Sul D means:', 'Play on the specified string'], ['The down-bow and up-bow signs show:', 'Direction of the bow stroke', 'assets/grade4/bow-directions.png'], ['A slur over string notes means:', 'Play the notes in one bow stroke (legato)', 'assets/grade4/string-slur.png'],
    ['Una corda means:', 'Press the left pedal (softer sound)'], ['Tre corda means:', 'Release the left pedal'], ['This pedal line means:', 'Indicates when to depress and release the sustain (right) pedal', 'assets/grade4/pedal-line.png'],
    ['The tr sign means:', 'Trill: rapid alternation between the note and the note above', 'assets/grade4/trill.png'], ['This turn sign means:', 'Turn: note above, main note, note below, main note', 'assets/grade4/turn.png'], ['This upper mordent sign means:', 'Upper mordent: main note, note above, main note quickly', 'assets/grade4/upper-mordent.png'], ['This lower mordent sign means:', 'Lower mordent: main note, note below, main note quickly', 'assets/grade4/lower-mordent.png'], ['This slashed grace note means:', 'Acciaccatura: a crushed grace note played as quickly as possible before the main note', 'assets/grade4/acciaccatura.png'], ['This unslashed grace note means:', 'Appoggiatura: an expressive grace note that takes a fixed portion of the main note\'s value', 'assets/grade4/appoggiatura.png'],
    ['a means:', 'To, at'], ['Animé means:', 'Animated, lively'], ['Assez means:', 'Enough, sufficiently'], ['Avec means:', 'With'], ['Cedez means:', 'Yield, relax the speed'], ['Douce means:', 'Sweet'], ['En dehors means:', 'Prominent'], ['Et means:', 'And'], ['Legerement means:', 'Light'], ['Lent means:', 'Slow'], ['Mais means:', 'But'], ['Moins means:', 'Less'], ['Modéré means:', 'At a moderate speed'], ['Non means:', 'Not'], ['Peu means:', 'Little'], ['Plus means:', 'More'], ['Presser means:', 'Hurry'], ['Ralentir means:', 'Slow down'], ['Retenu means:', 'Held back'], ['Sans means:', 'Without'], ['Tres means:', 'Very'], ['Un, une means:', 'One'], ['Vif means:', 'Lively'], ['Vite means:', 'Quick']
  ],
  5: [
    ['Aber means:', 'But'],
    ['A cappella means:', 'Unaccompanied'],
    ['Al la pointe means:', 'Use the bow at the point'],
    ['Allegro assai means:', 'Very fast'],
    ['a niente means:', 'To nothing; dying away to silence'],
    ['Attacca means:', 'Go immediately to the next section'],
    ['Ausdruck means:', 'Expression'],
    ['Bewegt means:', 'Agitated'],
    ['Collo voce means:', 'Keep with the singer'],
    ['Con dolore means:', 'With grief, sorrow'],
    ['Con spirito means:', 'With spirit'],
    ['Dolente means:', 'Sad, mournful'],
    ['Dolore means:', 'Grief'],
    ['Doloroso means:', 'Sorrowful'],
    ['Espressione means:', 'Expression'],
    ['Furioso means:', 'Furious'],
    ['Grandioso means:', 'Grandly'],
    ['Incalzando means:', 'Hurrying'],
    ['Nicht means:', 'Not'],
    ['Ossia means:', 'Or; alternatively'],
    ['Piacevole means:', 'Pleasant'],
    ['Rinforzando (rf, rfz, rinf.) means:', 'Reinforcing'],
    ['Smorzando (smorz.) means:', 'Dying away in tone and speed'],
    ['Sotto voce means:', 'In an undertone'],
    ['Langsam means:', 'Slow'],
    ['Lebhaft means:', 'Lively'],
    ['Mässig means:', 'At a moderate speed'],
    ['Ruhig means:', 'Peaceful'],
    ['Schnell means:', 'Fast'],
    ['Traurig means:', 'Sad']
  ]
};

// Short score excerpts are shared where the printed marking is the teaching point.
// Character words remain text-only because they do not have a single notated shape.
const EXAMPLE_IMAGES = {
  'andante means:': 'assets/grade3/tempo-metronome.png',
  'crescendo means:': 'assets/grade3/crescendo-hairpin.png',
  'decrescendo means:': 'assets/grade3/decrescendo-diminuendo.png',
  'diminuendo means:': 'assets/grade3/decrescendo-diminuendo.png',
  'f (forte) means:': 'assets/grade3/dynamic-levels.png',
  'ff (fortissimo) means:': 'assets/grade3/dynamic-levels.png',
  'mf (mezzo forte) means:': 'assets/grade3/dynamic-levels.png',
  'mp (mezzo piano) means:': 'assets/grade3/dynamic-levels.png',
  'p (piano) means:': 'assets/grade3/dynamic-levels.png',
  'pp (pianissimo) means:': 'assets/grade3/dynamic-levels.png',
  'staccato (or stacc.) means:': 'assets/grade1/image6.png',
  'mm. crotchet = 120 means:': 'assets/grade1/metronome-crotchet-120.png',
  'ottava sign (8va) means:': 'assets/grade3/ottava.png',
  'tenuto means:': 'assets/grade2/image7.png',
  'accent sign means:': 'assets/grade1/image5.png',
  'mezzo-staccato means:': 'assets/grade2/image5.png',
  'marcato sign means:': 'assets/grade1/image5.png',
  'staccatissimo means:': 'assets/grade2/image6.png',
  'alla breve means:': 'assets/grade3/alla-breve.png',
  'marcato, marc. means:': 'assets/grade1/image5.png',
};

const VISUAL_ANSWER_LABELS = {
  'these signs above and below the notes are:': 'Accent marks',
  'the dots above the notes are:': 'Staccato marks',
  'the sign above the last note means:': 'Fermata',
  'the sign above these notes means:': 'Tie',
  'the two dots at the stave end mean:': 'Repeat sign',
  'dots inside the slur mark mean:': 'Mezzo-staccato',
  'these wedge shapes above and below the notes mean:': 'Staccatissimo',
  'the lines above and below these notes mean:': 'Tenuto',
  'what is the meaning of the two dots at the end of the stave?': 'Repeat sign',
  'what does the line above the notes mean?': 'Slur',
  'what is the meaning of the dots above the notes?': 'Staccato marks',
  'what is the name of the line joining these two notes?': 'Tie',
  'what does a crotchet = 120 mean?': 'Metronome marking',
  'the down-bow and up-bow signs show:': 'Down-bow and up-bow signs',
  'a slur over string notes means:': 'String slur',
  'this pedal line means:': 'Sustain-pedal line',
};

const VISUAL_ANSWER_DEFINITIONS = {
  'these signs above and below the notes are:': 'play the note strongly',
  'the dots above the notes are:': 'make each note short and detached',
  'the sign above the last note means:': 'hold the note or rest longer than its written value',
  'the sign above these notes means:': 'join notes of the same pitch and combine their durations',
  'the two dots at the stave end mean:': 'repeat the indicated section',
  'dots inside the slur mark mean:': 'play moderately short and detached',
  'these wedge shapes above and below the notes mean:': 'play extremely short and detached',
  'the lines above and below these notes mean:': 'hold the note for its full written value, often with slight pressure',
  'what is the meaning of the two dots at the end of the stave?': 'repeat the previous section',
  'what does the line above the notes mean?': 'connect notes smoothly across a phrase',
  'what is the meaning of the dots above the notes?': 'play the notes short and detached',
  'what is the name of the line joining these two notes?': 'join notes of the same pitch and combine their written durations',
  'mm. crotchet = 120 means:': 'the crotchet receives 120 beats per minute',
  'what does a crotchet = 120 mean?': '120 crotchet beats in a minute',
};

function normalizedAnswerLabel(value) {
  return String(value || '').toLowerCase().replace(/\bsign\b/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function titleCaseAnswerLabel(value) {
  const label = String(value || '').trim();
  if (/^f \(forte\)$/i.test(label)) return 'Forte (f)';
  if (/^ff \(fortissimo\)$/i.test(label)) return 'Fortissimo (ff)';
  if (/^mf \(mezzo forte\)$/i.test(label)) return 'Mezzo forte (mf)';
  if (/^mp \(mezzo piano\)$/i.test(label)) return 'Mezzo piano (mp)';
  if (/^p \(piano\)$/i.test(label)) return 'Piano (p)';
  if (/^pp \(pianissimo\)$/i.test(label)) return 'Pianissimo (pp)';
  if (/^staccato \(or stacc\.\)$/i.test(label)) return 'Staccato';
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function visualAnswerLabel(question, answer) {
  const key = question.trim().toLowerCase();
  if (VISUAL_ANSWER_LABELS[key]) return VISUAL_ANSWER_LABELS[key];
  const existingLabel = String(answer).match(/^([^:]+):\s*/)?.[1]?.trim();
  if (/^(?:the|this)\s/i.test(question) && existingLabel) return existingLabel;
  const term = question.match(/^(.+?)\s+means:\s*$/i)?.[1];
  if (term) {
    if (/^mm\./i.test(term)) return 'Metronome marking';
    return titleCaseAnswerLabel(term.replace(/\s+sign$/i, ''));
  }
  return String(answer).match(/^([^:]+):\s*/)?.[1]?.trim() || String(answer).trim();
}

function visualAnswerText(question, answer) {
  const key = question.trim().toLowerCase();
  const label = visualAnswerLabel(question, answer);
  let definition = VISUAL_ANSWER_DEFINITIONS[key] || String(answer).trim();
  const existingPrefix = definition.match(/^([^:]+):\s*(.+)$/);
  if (existingPrefix) {
    const prefixLabel = normalizedAnswerLabel(existingPrefix[1]);
    const targetLabel = normalizedAnswerLabel(label);
    if (prefixLabel === targetLabel || prefixLabel.startsWith(targetLabel) || targetLabel.startsWith(prefixLabel)) {
      definition = existingPrefix[2].trim();
    }
  }
  definition = definition.charAt(0).toLowerCase() + definition.slice(1);
  return `${label}: ${definition}`;
}

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
  'what does a crotchet = 120 mean?': 'The crotchet receives the beat, and the tempo is 120 crotchet beats in a minute. The number is the metronome speed, not a count of 120 notes in the piece.',
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

function slugifyId(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'question';
}

function hashId(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).padStart(7, '0');
}

function stableQuestionSnapshot(question) {
  const ignored = new Set(['answer', 'correct', 'explanation', 'grade', 'id', 'options', 'questionId', 'skillId', 'source', 'userAnswer']);
  const snapshot = {};
  Object.keys(question).sort().forEach((key) => {
    if (!ignored.has(key)) snapshot[key] = question[key];
  });
  return JSON.stringify(snapshot);
}

function deriveSkillId(question) {
  const category = slugifyId(question.category || 'music-theory');
  const skill = question.category === 'terms'
    ? question.question
    : question.questionForm || question.question;
  return `${category}.${slugifyId(skill)}`;
}

function ensureQuestionMetadata(question) {
  const skillId = question.skillId || deriveSkillId(question);
  const questionId = question.questionId || `${slugifyId(question.category || 'question')}-${hashId(stableQuestionSnapshot(question))}`;
  return { ...question, questionId, skillId };
}

const BANK = Object.fromEntries(
  Object.entries(RAW_BANK).map(([grade, entries]) => [
    Number(grade),
    entries.map(([question, answer, image], index) => {
      const imagePath = image || EXAMPLE_IMAGES[question.toLowerCase()] || null;
      const bankAnswer = imagePath ? visualAnswerText(question, answer) : answer;
      return {
        id: `grade-${grade}-question-${String(index + 1).padStart(3, '0')}`,
        questionId: `terms-grade-${grade}-question-${String(index + 1).padStart(3, '0')}`,
        skillId: `terms.${slugifyId(question)}`,
        grade: Number(grade),
        category: 'terms',
        topic: 'terms-and-signs',
        question,
        answer: bankAnswer,
        acceptedAnswers: [bankAnswer],
        explanation: buildExplanation(question, answer),
        image: imagePath,
        source: Number(grade) === 4 ? 'Grade 4 Italian and French Terms & Signs PPSX presentations' : Number(grade) === 5 ? 'Maintained Grade 5 terms and signs list' : 'ABRSM Terms & Signs Grades 1–3 PDF'
      };
    })
  ])
);

// The study-bank page reads this same normalized data, keeping it in sync with the test.
window.ABRSM_QUESTION_BANK = BANK;

const TIMER_SECONDS = 20;
const PREFERENCES_STORAGE_KEY = 'abrsm-music-theory-quiz-preferences-v1';
const PRACTICE_HISTORY_STORAGE_KEY = 'abrsm-music-theory-quiz-history-v1';
const MAX_LOCAL_SESSIONS = 100;
const MAX_LOCAL_ATTEMPTS = 5000;
const QUESTION_COUNT_OPTIONS = Object.freeze([5, 10, 15]);
const DEFAULT_QUESTION_COUNT = 15;
const authState = { idToken: null, userId: null, email: null, name: null, lastSync: null, googleReady: false };

function loadPreferences() {
  try {
    const value = JSON.parse(window.localStorage.getItem(PREFERENCES_STORAGE_KEY) || '{}');
    const validCategories = ['terms', 'intervals', 'pitches', 'tonic-triads', 'time-signatures', 'key-signatures'];
    const category = validCategories.includes(value.category) ? value.category : 'terms';
    const grade = Number.isInteger(value.grade) && value.grade >= 1 && value.grade <= 5 ? value.grade : 3;
    const storedQuestionCount = Number(value.questionCount ?? value.questionCounts?.[category] ?? value.questionCounts?.terms);
    const questionCount = QUESTION_COUNT_OPTIONS.includes(storedQuestionCount) ? storedQuestionCount : DEFAULT_QUESTION_COUNT;
    return { category, grade, timerEnabled: Boolean(value.timerEnabled), questionCount };
  } catch (error) {
    return { category: 'terms', grade: 3, timerEnabled: false, questionCount: DEFAULT_QUESTION_COUNT };
  }
}

const preferences = loadPreferences();
function createLocalId(prefix) {
  const uuid = window.crypto?.randomUUID?.();
  return `${prefix}-${uuid || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`}`;
}

function loadPracticeHistory() {
  try {
    const value = JSON.parse(window.localStorage.getItem(PRACTICE_HISTORY_STORAGE_KEY) || '{}');
    return {
      version: 1,
      ownerId: typeof value.ownerId === 'string' ? value.ownerId : null,
      sessions: Array.isArray(value.sessions) ? value.sessions : [],
      attempts: Array.isArray(value.attempts) ? value.attempts : [],
    };
  } catch (error) {
    return { version: 1, ownerId: null, sessions: [], attempts: [] };
  }
}

const practiceHistory = loadPracticeHistory();
let historySyncTimer = null;

function historyEndpoint(suffix) {
  const endpoint = window.ABRSM_HISTORY_API_URL;
  if (!endpoint) return null;
  try {
    const url = new URL(endpoint, window.location.href);
    if (!/\/api\/v1\/history\/sync\/?$/i.test(url.pathname)) return null;
    url.pathname = url.pathname.replace(/\/history\/sync\/?$/i, suffix);
    return url.toString();
  } catch (error) {
    return null;
  }
}

function decodeJwtPayloadForDisplay(token) {
  try {
    const segment = token.split('.')[1];
    const normalized = segment.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(segment.length / 4) * 4, '=');
    return JSON.parse(window.atob(normalized));
  } catch (error) {
    return null;
  }
}

function savePracticeHistory() {
  try {
    practiceHistory.version = 1;
    practiceHistory.sessions = practiceHistory.sessions.slice(0, MAX_LOCAL_SESSIONS);
    practiceHistory.attempts = practiceHistory.attempts.slice(0, MAX_LOCAL_ATTEMPTS);
    window.localStorage.setItem(PRACTICE_HISTORY_STORAGE_KEY, JSON.stringify(practiceHistory));
  } catch (error) {
    // Practice continues normally if browser storage is unavailable or full.
  }
}

async function syncPracticeHistory(endpoint = window.ABRSM_HISTORY_API_URL, userId = window.ABRSM_HISTORY_USER_ID) {
  if (!endpoint || typeof window.fetch !== 'function') return { synced: false, reason: 'not-configured' };
  const headers = { 'Content-Type': 'application/json' };
  const token = authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  else if (userId) headers['X-User-Id'] = userId;
  else return { synced: false, reason: 'not-authenticated' };
  try {
    const response = await window.fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(practiceHistory),
    });
    if (!response.ok) return { synced: false, status: response.status };
    return { synced: true, ...(await response.json()) };
  } catch (error) {
    return { synced: false, reason: 'network-error' };
  }
}

function schedulePracticeHistorySync() {
  if (!window.ABRSM_HISTORY_API_URL || (!authState.idToken && !window.ABRSM_HISTORY_USER_ID)) return;
  if (historySyncTimer !== null) window.clearTimeout(historySyncTimer);
  historySyncTimer = window.setTimeout(() => {
    historySyncTimer = null;
    syncPracticeHistory().catch(() => {});
  }, 250);
}

async function fetchRemotePracticeHistory() {
  const endpoint = historyEndpoint('/history');
  const token = authState.idToken || window.ABRSM_HISTORY_AUTH_TOKEN;
  if (!endpoint || !token) return { ok: false, reason: 'not-configured' };
  try {
    const response = await window.fetch(endpoint, { headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) return { ok: false, status: response.status };
    const value = await response.json();
    return {
      ok: true,
      sessions: Array.isArray(value.sessions) ? value.sessions : [],
      attempts: Array.isArray(value.attempts) ? value.attempts : [],
    };
  } catch (error) {
    return { ok: false, reason: 'network-error' };
  }
}

function recordTimestamp(record, fields) {
  for (const field of fields) {
    const value = record?.[field];
    if (value) {
      const timestamp = Date.parse(value);
      if (!Number.isNaN(timestamp)) return timestamp;
    }
  }
  return 0;
}

function mergeHistoryRecords(localRecords, remoteRecords, timestampFields) {
  const merged = new Map(remoteRecords.map((record) => [record.id, record]));
  localRecords.forEach((record) => {
    const existing = merged.get(record.id);
    if (!existing || recordTimestamp(record, timestampFields) >= recordTimestamp(existing, timestampFields)) {
      merged.set(record.id, record);
    }
  });
  return [...merged.values()];
}

async function mergeLocalHistoryForUser(userId) {
  const previousOwner = practiceHistory.ownerId;
  if (previousOwner && previousOwner !== userId) {
    // Never merge one signed-in user's cached records into another account.
    practiceHistory.sessions = [];
    practiceHistory.attempts = [];
  }
  const localSessions = practiceHistory.sessions;
  const localAttempts = practiceHistory.attempts;
  const remote = await fetchRemotePracticeHistory();
  if (remote.ok) {
    practiceHistory.sessions = mergeHistoryRecords(localSessions, remote.sessions, ['updatedAt', 'completedAt', 'startedAt']);
    practiceHistory.attempts = mergeHistoryRecords(localAttempts, remote.attempts, ['attemptedAt']);
  }
  practiceHistory.ownerId = userId;
  savePracticeHistory();
  const synced = await syncPracticeHistory();
  authState.lastSync = synced.synced ? new Date().toISOString() : null;
  return { remote, synced };
}

function serializeHistoryValue(value) {
  if (value === null || value === undefined) return null;
  return typeof value === 'string' ? value : JSON.stringify(value);
}

function questionSnapshotForHistory(question) {
  const snapshot = {};
  ['questionId', 'skillId', 'category', 'questionForm', 'answerType', 'grade', 'question', 'image', 'notation', 'timeSignaturePrompt', 'triadMode', 'triadFunction', 'restCount', 'options', 'explanation'].forEach((key) => {
    if (question[key] !== undefined) snapshot[key] = question[key];
  });
  return snapshot;
}

function upsertPracticeSession(session) {
  const existingIndex = practiceHistory.sessions.findIndex((candidate) => candidate.id === session.id);
  if (existingIndex >= 0) practiceHistory.sessions[existingIndex] = { ...practiceHistory.sessions[existingIndex], ...session };
  else practiceHistory.sessions.unshift(session);
  savePracticeHistory();
}

function startPracticeSession(questionCount) {
  const startedAt = new Date().toISOString();
  state.sessionId = createLocalId('session');
  state.sessionStartedAt = startedAt;
  state.sessionCompleted = false;
  upsertPracticeSession({
    id: state.sessionId,
    status: 'in-progress',
    category: state.category,
    maximumGrade: state.grade,
    requestedQuestionCount: questionCount,
    questionCount: state.test.length,
    timedMode: state.timerEnabled,
    startedAt,
    completedAt: null,
    score: 0,
    attemptCount: 0,
    correctCount: 0,
    wrongCount: 0,
  });
}

function completePracticeSession(status = 'completed') {
  if (!state.sessionId || state.sessionCompleted && status === 'completed') return;
  const attempts = practiceHistory.attempts.filter((attempt) => attempt.sessionId === state.sessionId);
  const session = practiceHistory.sessions.find((candidate) => candidate.id === state.sessionId);
  if (!session) return;
  session.status = status;
  session.completedAt = new Date().toISOString();
  session.score = state.score;
  session.attemptCount = attempts.length;
  session.correctCount = attempts.filter((attempt) => attempt.wasCorrect).length;
  session.wrongCount = attempts.filter((attempt) => !attempt.wasCorrect).length;
  state.sessionCompleted = status === 'completed';
  savePracticeHistory();
  schedulePracticeHistorySync();
}

function recordPracticeAttempt(item, wasCorrect, timedOut) {
  if (!state.sessionId) return;
  const attemptedAt = new Date().toISOString();
  practiceHistory.attempts.unshift({
    id: createLocalId('attempt'),
    sessionId: state.sessionId,
    questionId: item.questionId,
    skillId: item.skillId,
    category: item.category,
    questionForm: item.questionForm,
    grade: item.grade,
    wasCorrect,
    timedOut: Boolean(timedOut),
    selectedAnswer: serializeHistoryValue(item.userAnswer),
    correctAnswer: serializeHistoryValue(item.correct),
    responseTimeMs: state.questionStartedAt ? Math.max(0, Date.now() - state.questionStartedAt) : null,
    attemptedAt,
    questionSnapshot: questionSnapshotForHistory(item),
  });
  const session = practiceHistory.sessions.find((candidate) => candidate.id === state.sessionId);
  if (session) {
    session.attemptCount = (session.attemptCount || 0) + 1;
    session.correctCount = (session.correctCount || 0) + (wasCorrect ? 1 : 0);
    session.wrongCount = (session.wrongCount || 0) + (wasCorrect ? 0 : 1);
    session.score = state.score;
  }
  savePracticeHistory();
}

window.ABRSM_PRACTICE_HISTORY = {
  get: () => JSON.parse(JSON.stringify(practiceHistory)),
  sync: (endpoint, userId) => syncPracticeHistory(endpoint, userId),
  clear: () => {
    practiceHistory.ownerId = null;
    practiceHistory.sessions = [];
    practiceHistory.attempts = [];
    savePracticeHistory();
  },
};

const state = { test: [], current: 0, score: 0, selected: null, locked: false, category: preferences.category, grade: preferences.grade, timerEnabled: preferences.timerEnabled, questionCount: preferences.questionCount, timerId: null, timerDeadline: null, sessionId: null, sessionStartedAt: null, sessionCompleted: false, questionStartedAt: null };

function savePreferences() {
  try {
    window.localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify({
      category: state.category,
      grade: state.grade,
      timerEnabled: state.timerEnabled,
      questionCount: state.questionCount,
    }));
  } catch (error) {
    // The quiz continues normally if browser storage is unavailable.
  }
}
const $ = (id) => document.getElementById(id);

function setAuthMessage(message, type = '') {
  const element = $('auth-message');
  if (!element) return;
  element.textContent = message;
  element.className = `auth-message${type ? ` ${type}` : ''}`;
}

function renderAuthState() {
  const status = $('auth-status');
  const signIn = $('google-signin');
  const signOut = $('sign-out-button');
  if (!status || !signIn || !signOut) return;
  if (authState.idToken) {
    status.textContent = `Signed in${authState.email ? ` as ${authState.email}` : ''}`;
    signIn.classList.add('hidden');
    signOut.classList.remove('hidden');
  } else {
    status.textContent = window.ABRSM_HISTORY_API_URL ? 'Sign in to sync your history' : 'Local history only';
    signIn.classList.toggle('hidden', !authState.googleReady);
    signOut.classList.add('hidden');
  }
}

function waitForGoogleIdentity(timeoutMs = 10000) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const check = () => {
      if (window.google?.accounts?.id) {
        resolve(true);
        return;
      }
      if (Date.now() - startedAt >= timeoutMs) {
        resolve(false);
        return;
      }
      window.setTimeout(check, 100);
    };
    check();
  });
}

async function configuredGoogleClientId() {
  if (window.ABRSM_GOOGLE_CLIENT_ID) return window.ABRSM_GOOGLE_CLIENT_ID;
  const endpoint = historyEndpoint('/auth/config');
  if (!endpoint) return null;
  try {
    const response = await window.fetch(endpoint);
    if (!response.ok) return null;
    const value = await response.json();
    return typeof value.googleClientId === 'string' && value.googleClientId ? value.googleClientId : null;
  } catch (error) {
    return null;
  }
}

async function handleGoogleCredential(response) {
  const token = response?.credential;
  const claims = token ? decodeJwtPayloadForDisplay(token) : null;
  if (!token || !claims?.sub) {
    setAuthMessage('Google sign-in did not return a valid identity.', 'error');
    return;
  }
  authState.idToken = token;
  authState.userId = `google:${claims.sub}`;
  authState.email = typeof claims.email === 'string' ? claims.email : null;
  authState.name = typeof claims.name === 'string' ? claims.name : null;
  window.ABRSM_HISTORY_AUTH_TOKEN = token;
  renderAuthState();
  setAuthMessage('Merging local history…');
  const result = await mergeLocalHistoryForUser(authState.userId);
  if (result.synced.synced) {
    setAuthMessage('History merged and synced.', 'success');
  } else if (result.remote.ok) {
    setAuthMessage('Signed in; history is saved locally until sync is available.');
  } else {
    setAuthMessage('Signed in; local history will sync when the API is configured.');
  }
}

function signOutGoogle() {
  if (window.google?.accounts?.id?.disableAutoSelect) window.google.accounts.id.disableAutoSelect();
  authState.idToken = null;
  authState.userId = null;
  authState.email = null;
  authState.name = null;
  authState.lastSync = null;
  delete window.ABRSM_HISTORY_AUTH_TOKEN;
  // The remote account remains intact; clear the browser cache to prevent a
  // later account from inheriting another user's local records.
  practiceHistory.ownerId = null;
  practiceHistory.sessions = [];
  practiceHistory.attempts = [];
  savePracticeHistory();
  renderAuthState();
  setAuthMessage('Signed out. New practice stays local until you sign in again.');
}

async function initializeGoogleSignIn() {
  const signIn = $('google-signin');
  if (!signIn) return;
  const clientId = await configuredGoogleClientId();
  if (!clientId) {
    authState.googleReady = false;
    signIn.classList.add('hidden');
    renderAuthState();
    if (window.ABRSM_HISTORY_API_URL) setAuthMessage('Set GOOGLE_CLIENT_ID in the Worker to enable Google Sign-In.');
    return;
  }
  if (!await waitForGoogleIdentity()) {
    authState.googleReady = false;
    signIn.classList.add('hidden');
    setAuthMessage('Google Sign-In could not be loaded.');
    return;
  }
  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: (response) => { void handleGoogleCredential(response); },
    auto_select: false,
    cancel_on_tap_outside: true,
    use_fedcm_for_prompt: true,
  });
  signIn.innerHTML = '';
  window.google.accounts.id.renderButton(signIn, { theme: 'outline', size: 'medium', text: 'signin_with', shape: 'rectangular' });
  authState.googleReady = true;
  renderAuthState();
}

window.ABRSM_AUTH = {
  signOut: signOutGoogle,
  getState: () => ({ signedIn: Boolean(authState.idToken), email: authState.email, lastSync: authState.lastSync }),
};

document.querySelectorAll('[data-app-version]').forEach((element) => { element.textContent = APP_VERSION; });
const NOTE_LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const INTERVAL_DIATONIC_STEPS = { m2: 1, M2: 1, m3: 2, M3: 2, P4: 3, P5: 4, m6: 5, M6: 5, m7: 6, M7: 6, P8: 7 };
const SAFE_ROOT_OCTAVES = {
  treble: { C: [4, 5], D: [4, 5], E: [4, 5], F: [4, 5], G: [4, 5], A: [4, 5], B: [4, 5] },
  bass: { C: [3, 4], D: [3, 4], E: [2, 3], F: [2, 3], G: [2, 3], A: [2, 3], B: [2, 3] },
  alto: { C: [4, 5], D: [4, 5], E: [4, 5], F: [4, 5], G: [3, 4], A: [3, 4], B: [3, 4] },
  tenor: { C: [4, 5], D: [4, 5], E: [4, 5], F: [3, 4], G: [3, 4], A: [3, 4], B: [3, 4] },
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
  // When a score/example image is shown, identify the visual rather than
  // repeating its name in the prompt. Text-only entries still name the term,
  // because the definition is what the learner is being asked to recall.
  const question = entry.image ? 'This sign means:' : entry.question;
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
  element.setAttribute('aria-label', notation.alt);
  element.classList.toggle('hide-time-signature', Boolean(notation.hideTimeSignature));
  const scale = notation.scale || 1;
  const container = element.closest('.question-notation-wrap, .review-notation, .key-signature-preview') || element.parentElement || element;
  element.__notationObserver?.disconnect();
  const initialWidth = container.clientWidth || container.getBoundingClientRect?.().width || width;
  const draw = (availableWidth) => {
    availableWidth = Math.max(220, Math.floor(availableWidth));
    // Some foldable cover screens report their physical width (1080px) as the
    // CSS viewport width. Include a portrait aspect-ratio check so those
    // screens still get one bar per system, while an unfolded wide viewport
    // keeps the two bars together.
    const viewportWidth = window.innerWidth || availableWidth;
    const viewportHeight = window.innerHeight || 0;
    const portraitViewport = viewportHeight > viewportWidth * 1.35;
    const narrowLayout = availableWidth < 480 || (portraitViewport && availableWidth < 1100);
    const lineBreaks = notation.barCount > 1
      ? narrowLayout
        ? Array.from({ length: notation.barCount - 1 }, (_, index) => index + 1)
        : notation.lineBreaks
      : notation.lineBreaks;
    element.replaceChildren();
    window.ABCJS.renderAbc(element, notation.abc, {
      staffwidth: availableWidth / scale,
      scale,
      add_classes: true,
      ...(lineBreaks ? { lineBreaks } : {}),
      paddingtop: 2,
      paddingbottom: 10,
      paddingleft: 0,
      paddingright: 0,
    });
    if (notation.hideTimeSignature) {
      element.querySelectorAll('.abcjs-time-signature, .time-signature').forEach((timeSignature) => timeSignature.remove());
    }
  };
  draw(initialWidth - 28);
  if (window.ResizeObserver && container !== element) {
    let lastWidth = Math.floor(container.clientWidth || container.getBoundingClientRect().width);
    const observer = new window.ResizeObserver(([entry]) => {
      const nextWidth = Math.floor(entry.contentRect.width);
      if (nextWidth > 0 && Math.abs(nextWidth - lastWidth) > 1) {
        lastWidth = nextWidth;
        draw(nextWidth);
      }
    });
    observer.observe(container);
    element.__notationObserver = observer;
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
  savePreferences();
}

let settingsChanged = false;
let settingsReturnScreen = 'test';

function syncSettingsControls() {
  const questionCount = $('test-length');
  const timer = $('timer-enabled');
  if (questionCount) questionCount.value = String(state.questionCount);
  if (timer) timer.checked = state.timerEnabled;
}

function openSettings() {
  const settings = $('settings-screen');
  if (!settings) return;
  settingsReturnScreen = $('result-screen')?.classList.contains('hidden') === false
    ? 'result'
    : $('mistakes-screen')?.classList.contains('hidden') === false
      ? 'mistakes'
      : $('needs-practice-screen')?.classList.contains('hidden') === false
        ? 'needs-practice'
        : 'test';
  settingsChanged = false;
  stopQuestionTimer();
  syncSettingsControls();
  $('test-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  settings.classList.remove('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'true');
}

function closeSettings() {
  const settings = $('settings-screen');
  if (!settings) return;
  settings.classList.add('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'false');
  if (settingsChanged) {
    createTest(state.questionCount, state.category);
    settingsChanged = false;
    return;
  }
  if (settingsReturnScreen === 'result') {
    $('result-screen')?.classList.remove('hidden');
  } else if (settingsReturnScreen === 'mistakes') {
    $('mistakes-screen')?.classList.remove('hidden');
    renderMistakesView();
  } else if (settingsReturnScreen === 'needs-practice') {
    $('needs-practice-screen')?.classList.remove('hidden');
    renderNeedsPracticeView();
  } else {
    $('test-screen')?.classList.remove('hidden');
    if (!state.locked) startQuestionTimer();
  }
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

function createTest(questionCount = state.questionCount, category = state.category) {
  if (state.sessionId && !state.sessionCompleted) completePracticeSession('abandoned');
  state.category = category;
  state.questionCount = questionCount;
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
  startPracticeSession(questionCount);
  state.current = 0;
  state.score = 0;
  state.selected = null;
  state.locked = false;
  syncSettingsControls();
  savePreferences();
  $('result-screen').classList.add('hidden');
  $('test-screen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  stopQuestionTimer();
  const item = state.test[state.current];
  state.questionStartedAt = Date.now();
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
  const requiresSubmitButton = ['key-signature', 'rest-identification', 'tonic-triad'].includes(item.answerType);
  $('next-button').classList.toggle('hidden', !requiresSubmitButton);
  $('next-button').disabled = true;
  $('next-button').textContent = requiresSubmitButton ? 'Complete the answer' : '';
  state.selected = null;
  state.locked = false;

  const imageWrap = $('question-image-wrap');
  const notationWrap = $('question-notation-wrap');
  $('question-notation').__notationObserver?.disconnect();
  $('question-notation').__notationObserver = null;
  if (item.timeSignaturePrompt) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    renderTimeSignaturePrompt($('question-notation'), item.timeSignaturePrompt);
    notationWrap.classList.remove('hidden');
  } else if (item.notation) {
    $('question-image').removeAttribute('src');
    imageWrap.classList.add('hidden');
    $('question-notation').classList.remove('question-time-signature');
    notationWrap.classList.remove('hidden');
    renderNotation($('question-notation'), item.notation, item.notation.timeSignatureNotation ? 629 : 520);
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
  answers.classList.toggle('time-signature-answers', item.category === 'time-signatures' && !item.answerType && item.questionForm !== 'irregular-division');
  answers.classList.toggle('irregular-division-answers', item.questionForm === 'irregular-division');
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
    // Keep answer rendering resilient if a generated option is an object from
    // an older question-bank entry. Never let a missing display field become
    // the literal word "undefined" in the UI.
    const rawOptionValue = typeof option === 'string'
      ? option
      : option?.name ?? option?.label ?? option?.value ?? '';
    const optionValue = String(rawOptionValue).replace(/\s+undefined\b/g, '').trim();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    if (item.questionForm === 'irregular-division') button.classList.add('irregular-division-answer-option');
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.dataset.answer = optionValue;
    const letter = String.fromCharCode(65 + index);
    button.setAttribute('aria-label', `Option ${letter}: ${optionValue}`);
    if (item.category === 'intervals' && item.answerType !== 'interval-identification') {
      button.classList.add('interval-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong><div class="answer-notation" role="img"></div>`;
      renderNotation(button.querySelector('.answer-notation'), makeIntervalOptionNotation(item, option), 240);
    } else if (item.category === 'pitches') {
      button.classList.add('pitch-answer-option');
      button.innerHTML = `<strong>${letter}.</strong> ${option}`;
    } else if (item.category === 'time-signatures' && !item.answerType) {
      button.classList.add('time-signature-answer-option');
      button.innerHTML = `<strong class="answer-choice-label">${letter}.</strong>${timeSignatureMarkMarkup({ label: option })}`;
    } else {
      button.innerHTML = `<strong>${letter}.</strong> ${optionValue}`;
    }
    button.addEventListener('click', () => chooseAnswer(button, optionValue));
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

function deserializeHistoryValue(value) {
  if (value === null || value === undefined) return null;
  if (typeof value !== 'string') return value;
  try { return JSON.parse(value); } catch (error) { return value; }
}

function formatHistoryAnswer(item, value) {
  if (value === null || value === undefined || value === '') return '';
  if (item?.answerType === 'key-signature') return formatKeySignatureAnswer(typeof value === 'string' ? value : JSON.stringify(value));
  if (item?.answerType === 'rest-identification') return formatRestAnswers(typeof value === 'string' ? value : JSON.stringify(value));
  if (item?.answerType === 'tonic-triad') return formatTonicTriadAnswer(typeof value === 'string' ? value : JSON.stringify(value));
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function historySnapshotForAttempt(attempt) {
  const snapshot = deserializeHistoryValue(attempt?.questionSnapshot);
  return snapshot && typeof snapshot === 'object' ? snapshot : {};
}

function questionFromHistoryAttempt(attempt) {
  const snapshot = historySnapshotForAttempt(attempt);
  const correct = deserializeHistoryValue(attempt?.correctAnswer);
  const category = snapshot.category || attempt?.category || 'terms';
  const question = snapshot.question || `${categoryLabel(category)} question`;
  const questionForm = snapshot.questionForm || attempt?.questionForm || 'history-review';
  const item = {
    ...snapshot,
    category,
    questionForm,
    grade: Number(snapshot.grade ?? attempt?.grade) || undefined,
    question,
    correct,
    answer: correct,
    userAnswer: null,
    restCount: snapshot.restCount ?? (Array.isArray(correct) ? correct.length : undefined),
  };
  if (!item.explanation) {
    item.explanation = typeof correct === 'string'
      ? buildExplanation(question, correct)
      : `The correct answer is “${formatHistoryAnswer(item, correct)}”.`;
  }
  return ensureQuestionMetadata(item);
}

function historyLabelForItem(item) {
  return item.grade ? `Grade ${item.grade} · ${categoryLabel(item.category)}` : categoryLabel(item.category);
}

function appendHistoryVisual(card, item) {
  if (item.notation) {
    const notation = document.createElement('div');
    notation.className = 'review-notation history-notation';
    notation.setAttribute('role', 'img');
    card.appendChild(notation);
    renderNotation(notation, item.notation, 320);
  } else if (item.image) {
    const image = document.createElement('img');
    image.className = 'review-image';
    image.src = item.image;
    image.alt = 'Musical notation for the question';
    card.appendChild(image);
  }
}

function appendHistoryParagraph(card, label, value) {
  const paragraph = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = `${label}:`;
  paragraph.append(strong, document.createTextNode(` ${value || 'No answer'}`));
  card.appendChild(paragraph);
}

function renderMistakesView() {
  const list = $('mistakes-list');
  if (!list) return;
  list.replaceChildren();
  const mistakes = practiceHistory.attempts
    .filter((attempt) => !attempt.wasCorrect)
    .sort((left, right) => recordTimestamp(right, ['attemptedAt']) - recordTimestamp(left, ['attemptedAt']))
    .slice(0, 100);
  if (!mistakes.length) {
    const empty = document.createElement('div');
    empty.className = 'history-empty';
    empty.innerHTML = '<h3>No mistakes recorded yet.</h3><p>Complete a test and any missed questions will appear here for review.</p>';
    list.appendChild(empty);
    return;
  }
  mistakes.forEach((attempt) => {
    const item = questionFromHistoryAttempt(attempt);
    const card = document.createElement('article');
    card.className = 'review-item history-card';
    const heading = document.createElement('h3');
    heading.textContent = `${historyLabelForItem(item)} · ${item.question}`;
    card.appendChild(heading);
    appendHistoryVisual(card, item);
    appendHistoryParagraph(card, 'Your answer', formatHistoryAnswer(item, deserializeHistoryValue(attempt.selectedAnswer)));
    appendHistoryParagraph(card, 'Correct answer', formatHistoryAnswer(item, item.correct));
    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';
    const explanationLabel = document.createElement('strong');
    explanationLabel.textContent = 'Explanation:';
    explanation.append(explanationLabel, document.createTextNode(` ${item.explanation}`));
    card.appendChild(explanation);
    if (attempt.timedOut) {
      const timedOut = document.createElement('span');
      timedOut.className = 'history-tag';
      timedOut.textContent = 'Timed out';
      card.appendChild(timedOut);
    }
    list.appendChild(card);
  });
}

function historySkillGroups() {
  const groups = new Map();
  practiceHistory.attempts.forEach((attempt) => {
    const skillId = attempt.skillId || `${attempt.category || 'music-theory'}.${attempt.questionForm || attempt.questionId || 'unknown'}`;
    const group = groups.get(skillId) || {
      skillId,
      attempts: [],
      total: 0,
      wrong: 0,
      correct: 0,
      latestAttempt: null,
    };
    group.attempts.push(attempt);
    group.total += 1;
    if (attempt.wasCorrect) group.correct += 1;
    else group.wrong += 1;
    if (!group.latestAttempt || recordTimestamp(attempt, ['attemptedAt']) > recordTimestamp(group.latestAttempt, ['attemptedAt'])) group.latestAttempt = attempt;
    groups.set(skillId, group);
  });
  return [...groups.values()]
    .filter((group) => group.wrong > 0)
    .sort((left, right) => {
      const accuracyDifference = (left.correct / left.total) - (right.correct / right.total);
      if (accuracyDifference !== 0) return accuracyDifference;
      if (left.wrong !== right.wrong) return right.wrong - left.wrong;
      return recordTimestamp(right.latestAttempt, ['attemptedAt']) - recordTimestamp(left.latestAttempt, ['attemptedAt']);
    });
}

function humanizeQuestionForm(value) {
  return String(value || 'skill')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderNeedsPracticeView() {
  const list = $('needs-practice-list');
  if (!list) return;
  list.replaceChildren();
  const groups = historySkillGroups();
  if (!groups.length) {
    const empty = document.createElement('div');
    empty.className = 'history-empty';
    empty.innerHTML = '<h3>You are on track.</h3><p>Once a skill has a missed answer, it will appear here with a focused practice option.</p>';
    list.appendChild(empty);
    return;
  }
  groups.forEach((group) => {
    const item = questionFromHistoryAttempt(group.latestAttempt);
    const card = document.createElement('article');
    card.className = 'skill-card';
    const heading = document.createElement('div');
    heading.className = 'skill-card-heading';
    const title = document.createElement('h3');
    title.textContent = item.category === 'terms' ? item.question.replace(/\s+means:\s*$/i, '') : humanizeQuestionForm(item.questionForm);
    const category = document.createElement('p');
    category.textContent = `${categoryLabel(item.category)}${item.grade ? ` · up to Grade ${item.grade}` : ''}`;
    heading.append(title, category);
    card.appendChild(heading);
    const metrics = document.createElement('div');
    metrics.className = 'skill-metrics';
    const accuracy = Math.round((group.correct / group.total) * 100);
    metrics.innerHTML = `<span><strong>${accuracy}%</strong> accuracy</span><span><strong>${group.wrong}</strong> missed</span><span><strong>${group.total}</strong> attempted</span>`;
    card.appendChild(metrics);
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'secondary-button history-action';
    action.dataset.skillId = group.skillId;
    action.textContent = 'Practise this skill';
    card.appendChild(action);
    list.appendChild(card);
  });
}

let historyReturnScreen = 'test';

function openHistoryView(view) {
  const target = view === 'mistakes' ? $('mistakes-screen') : $('needs-practice-screen');
  if (!target) return;
  historyReturnScreen = $('result-screen')?.classList.contains('hidden') === false ? 'result' : $('settings-screen')?.classList.contains('hidden') === false ? 'settings' : 'test';
  stopQuestionTimer();
  $('test-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('settings-screen')?.classList.add('hidden');
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  target.classList.remove('hidden');
  $('settings-button')?.setAttribute('aria-expanded', 'false');
  if (view === 'mistakes') renderMistakesView();
  else renderNeedsPracticeView();
  if (authState.idToken) {
    void syncPracticeHistory().then(() => {
      if (!target.classList.contains('hidden')) {
        if (view === 'mistakes') renderMistakesView();
        else renderNeedsPracticeView();
      }
    });
  }
}

function closeHistoryView() {
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  if (historyReturnScreen === 'result') $('result-screen')?.classList.remove('hidden');
  else if (historyReturnScreen === 'settings') $('settings-screen')?.classList.remove('hidden');
  else {
    $('test-screen')?.classList.remove('hidden');
    if (!state.locked) startQuestionTimer();
  }
}

function createFocusedPractice(skillId) {
  const attempts = practiceHistory.attempts
    .filter((attempt) => (attempt.skillId || '') === skillId)
    .sort((left, right) => recordTimestamp(right, ['attemptedAt']) - recordTimestamp(left, ['attemptedAt']));
  const latestByQuestion = new Map();
  attempts.forEach((attempt) => {
    const questionId = attempt.questionId || attempt.id;
    if (!latestByQuestion.has(questionId)) latestByQuestion.set(questionId, attempt);
  });
  const questions = [...latestByQuestion.values()]
    .map(questionFromHistoryAttempt)
    .filter((item) => item.question && (item.options?.length || item.answerType));
  if (!questions.length) return;
  if (state.sessionId && !state.sessionCompleted) completePracticeSession('abandoned');
  state.category = questions[0].category || state.category;
  state.test = questions;
  setActiveCategory(state.category);
  startPracticeSession(questions.length);
  state.current = 0;
  state.score = 0;
  state.selected = null;
  state.locked = false;
  $('mistakes-screen')?.classList.add('hidden');
  $('needs-practice-screen')?.classList.add('hidden');
  $('result-screen')?.classList.add('hidden');
  $('settings-screen')?.classList.add('hidden');
  $('test-screen')?.classList.remove('hidden');
  renderQuestion();
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
    $('next-button').textContent = state.selected
      ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question')
      : item.triadMode === 'key-signature' && !canBuildChord ? 'Build the key signature first' : `Build the ${item.triadFunction || 'tonic'} triad`;
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
    $('next-button').textContent = state.selected ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question') : 'Build the key signature';
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
    $('next-button').textContent = state.selected ? (state.current === state.test.length - 1 ? 'Finish test' : 'Next question') : 'Complete the rest values';
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
  submitAnswer();
}

function flashAnswerResult(correct, onComplete) {
  const card = document.querySelector('.question-card');
  if (!card) {
    onComplete();
    return;
  }
  const className = correct ? 'answer-flash-correct' : 'answer-flash-incorrect';
  card.classList.remove('answer-flash-correct', 'answer-flash-incorrect');
  card.classList.add(className);
  window.setTimeout(() => {
    card.classList.remove(className);
    onComplete();
  }, 180);
}

function submitAnswer(timedOut = false) {
  if (state.locked) return;
  stopQuestionTimer();
  const item = state.test[state.current];
  item.userAnswer = state.selected;
  state.locked = true;
  const correct = state.selected === item.correct;
  if (correct) state.score += 1;
  recordPracticeAttempt(item, correct, timedOut);
  flashAnswerResult(correct, () => {
    if (state.current === state.test.length - 1) {
      renderResults();
      return;
    }
    state.current += 1;
    renderQuestion();
  });
}

function nextQuestion() {
  submitAnswer();
}

function renderResults() {
  stopQuestionTimer();
  completePracticeSession('completed');
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
  $('settings-button')?.addEventListener('click', () => {
    if ($('settings-screen')?.classList.contains('hidden')) openSettings();
    else closeSettings();
  });
  $('settings-back-button')?.addEventListener('click', closeSettings);
  $('review-mistakes-button')?.addEventListener('click', () => openHistoryView('mistakes'));
  $('needs-practice-button')?.addEventListener('click', () => openHistoryView('needs-practice'));
  $('mistakes-back-button')?.addEventListener('click', closeHistoryView);
  $('needs-practice-back-button')?.addEventListener('click', closeHistoryView);
  $('needs-practice-list')?.addEventListener('click', (event) => {
    const button = event.target.closest('.history-action');
    if (button?.dataset.skillId) createFocusedPractice(button.dataset.skillId);
  });
  $('next-button').addEventListener('click', nextQuestion);
  document.querySelectorAll('.category-button').forEach((button) => {
    button.addEventListener('click', () => createTest(state.questionCount, button.dataset.category));
  });
  document.querySelectorAll('.grade-dot').forEach((button) => {
    button.addEventListener('click', () => {
      settingsChanged = true;
      setActiveGrade(Number(button.dataset.grade));
    });
  });
  $('test-length').addEventListener('change', (event) => {
    state.questionCount = QUESTION_COUNT_OPTIONS.includes(Number(event.target.value)) ? Number(event.target.value) : DEFAULT_QUESTION_COUNT;
    settingsChanged = true;
    savePreferences();
  });
  $('timer-enabled').addEventListener('change', (event) => {
    state.timerEnabled = event.target.checked;
    settingsChanged = true;
    savePreferences();
  });
  $('restart-button').addEventListener('click', () => createTest(state.questionCount, state.category));
  $('sign-out-button')?.addEventListener('click', signOutGoogle);
  syncSettingsControls();
  setActiveGrade(state.grade);
  createTest(state.questionCount, state.category);
  renderAuthState();
  void initializeGoogleSignIn();
}
