// Rebuilt from the PDF: the three PPSX banks plus additional entries from the
// attached official ABRSM terms-and-signs PDF/DOCX. Each entry is [question, answer, optional image].
const RAW_BANK = {
  1: [
    ['Accelerando means:', 'Gradually getting quicker'], ['Adagio means:', 'Slow'], ['Allegretto means:', 'Fairly quick—but not as quick as allegro'], ['Allegro means:', 'Quick'], ['Andante means:', 'At a walking pace'], ['Cantabile means:', 'In a singing style'], ['Crescendo means:', 'Gradually getting louder'], ['Da capo means:', 'Repeat from the beginning'], ['Dal segno means:', 'Repeat from the sign'], ['Decrescendo means:', 'Gradually getting quieter'], ['Diminuendo means:', 'Gradually getting quieter'], ['Fine means:', 'The end'], ['f (forte) means:', 'Loud'], ['ff (fortissimo) means:', 'Very loud'], ['Legato means:', 'Smoothly'], ['Lento means:', 'Slow'], ['Mezzo means:', 'Half'], ['Maestoso means:', 'Majestic'], ['mf (mezzo forte) means:', 'Moderately loud'], ['mp (mezzo piano) means:', 'Moderately quiet'], ['Moderato means:', 'At a moderate speed'], ['p (piano) means:', 'Quiet'], ['pp (pianissimo) means:', 'Very quiet'], ['Poco means:', 'A little'], ['Rallentando (or rall.) means:', 'Gradually getting slower'], ['Ritardando (or rit.) means:', 'Gradually getting slower'], ['Ritenuto (or rit.) means:', 'Held back'], ['Staccato (or stacc.) means:', 'Detached'], ['Tempo means:', 'Speed/time'], ['These signs above and below the notes are:', 'Accents', 'assets/grade1/image5.png'], ['The dots above the notes are:', 'Staccato marks', 'assets/grade1/image6.png'], ['The sign above the last note means:', 'A pause', 'assets/grade1/image7.png'], ['The sign above these notes means:', 'Tie', 'assets/grade3/image8.png'], ['The two dots at the stave end mean:', 'Repeat last section', 'assets/grade1/image9.png'],
    ['A tempo means:', "Return to the former speed ('in time')"], ['Al fine means:', 'Until the end'], ['Allegro moderato means:', 'Moderately quick'], ['Da capo al fine (D.C. al fine) means:', 'Repeat from the beginning and stop at the marked ending'], ['MM. crotchet = 120 means:', "Maelzel's metronome, 120 beats per minute"], ['Pause or fermata means:', 'Hold for longer than written'], ['Ottava sign (8va) means:', 'Play one octave higher than written'], ['Poco a poco means:', 'Little by little']
  ],
  2: [
    ['a means:', 'To, at, or in (depending on the phrase)'], ['a, alla means:', 'In the manner of'], ['Allargando means:', 'Broadening'], ['Andantino means:', 'Slightly faster than andante'], ['Assai means:', 'Very'], ['Con, col means:', 'With'], ['Dolce means:', 'Sweet'], ['e, ed means:', 'And'], ['Espressivo means:', 'Expressive'], ['fp (forte-piano) means:', 'Loud then immediately quiet'], ['Giocoso means:', 'Playful'], ['Grave means:', 'Very slow, solemn'], ['Grazioso means:', 'Graceful'], ['Larghetto means:', 'Rather slow (but not as slow as largo)'], ['Largo means:', 'Slow'], ['Ma means:', 'But'], ['Maestoso means:', 'Majestic'], ['Meno means:', 'Less'], ['Molto means:', 'Much'], ['Mosso, moto means:', 'Movement'], ['Non means:', 'Not'], ['Piu means:', 'More'], ['Presto means:', 'Fast'], ['Senza means:', 'Without'], ['sf, sfz (sforzando) means:', 'Forced, accented'], ['Simile (or sim.) means:', 'In the same way'], ['Sostenuto means:', 'Sustained'], ['Tenuto means:', 'Hold for the full written value'], ['Troppo means:', 'Too much'], ['Vivace, vivo means:', 'Lively, quick'], ['Dots inside the slur mark mean:', 'Semi-staccato', 'assets/grade2/image5.png'], ['These wedge shapes above and below the notes mean:', 'Staccatissimo (super-staccato)', 'assets/grade2/image6.png'], ['The lines above and below these notes mean:', 'Tenuto (held with slight pressure)', 'assets/grade2/image7.png'],
    ['Alla marcia means:', 'In the style of a march'], ['Con moto means:', 'With movement'], ['Meno mosso means:', 'Less movement (slower)'], ['Non troppo means:', 'Not too much'], ['Piu mosso means:', 'More speed (faster)'], ['Accent sign means:', 'Play strongly'], ['Mezzo-staccato means:', 'Moderately short and detached'], ['Marcato sign means:', 'A strong accent'], ['Staccatissimo means:', 'Extremely short and detached']
  ],
  3: [
    ['adagietto means:', 'Rather slow'], ['ad libitum, ad lib. means:', 'Play freely'], ['Agitato means:', 'Agitated'], ['Alla breve means:', 'Cut time or 2/2 time — 2 minim beats in a bar'], ['Amore means:', 'Love'], ['Anima means:', 'Soul, spirit'], ['Animato means:', 'Animated, lively'], ['Ben means:', 'Well'], ['Brio means:', 'Vigour'], ['Comodo means:', 'At a comfortable speed'], ['Deciso means:', 'With determination'], ['Delicato means:', 'Delicate'], ['Energico means:', 'Energetic'], ['Forza means:', 'Force'], ['Largamente means:', 'Broadly'], ['Leggiero means:', 'Light, nimble'], ['Marcato, marc. means:', 'Emphatic, accented'], ['Marziale means:', 'In a military style'], ['Mesto means:', 'Sad'], ['Pesante means:', 'Heavy'], ['Prima, primo means:', 'First'], ['Risoluto means:', 'With determination'], ['Ritmico means:', 'Rhythmically'], ['Rubato, tempo rubato means:', 'With some freedom of time'], ['Scherzando, scherzoso means:', 'Playful, joking'], ['Seconda, secondo means:', 'Second'], ['Semplice means:', 'Simple, plain'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'], ['Subito means:', 'Suddenly'], ['Tanto means:', 'So much'], ['Tranquillo means:', 'Calm'], ['Triste, tristamente means:', 'Sad, sorrowful'], ['Volta means:', 'Time (an occurrence or repeat, as in first or second time)'], ['What is the meaning of the two dots at the end of the stave?', 'Repeat previous section', 'assets/grade3/image5.png'], ['What does the line above the notes mean?', 'The slur', 'assets/grade3/image6.png'], ['What is the meaning of the dots above the notes?', 'Staccato marks', 'assets/grade3/image7.png'], ['What is the name of the line joining these two notes?', 'Tie', 'assets/grade3/image8.png'], ['What does a crotchet = 120 mean?', '120 crotchet beats per minute', 'assets/grade3/image9.png'],
    ['Amoroso means:', 'Loving'], ['Ben marcato means:', 'Well marked'], ['Con anima means:', 'With feeling, with spirit'], ['Con brio means:', 'With vigour'], ['Con forza means:', 'With force'], ['Prestissimo means:', 'Very fast'], ['Sforzando, sforzato, sfz, sf means:', 'Forced, accented']
  ],
  4: [
    ['Affettuoso means:', 'Tenderly'], ['Affrettando means:', 'Hurrying'], ['Amabile means:', 'Pleasant, amiable'], ['Appassionato means:', 'With passion'], ['Calando means:', 'Getting softer, dying away'], ['Cantando means:', 'Singing'], ['Come means:', 'As, similar to'], ['Facile means:', 'Easy'], ['Fuoco means:', 'Fire'], ['Giusto means:', 'Proper, exact'], ['L’istesso / L\'istesso tempo means:', 'At the same speed'], ['Morendo means:', 'Dying away'], ['Niente means:', 'Nothing'], ['Nobilmente means:', 'Nobly'], ['Perdendosi means:', 'Dying away'], ['Possibile means:', 'Possible'], ['Quasi means:', 'As if, resembling'], ['Sonoro means:', 'Resonant, with rich tone'], ['Sopra means:', 'Above'], ['Sotto means:', 'Below'], ['Veloce means:', 'Swift'], ['Voce means:', 'Voice'],
    ['Alla breve means:', 'Two minims (half notes) per bar'], ['Assai means:', 'Very'], ['Come prima means:', 'As before'], ['Comodo / Tempo comodo means:', 'At a comfortable speed'], ['Con brio means:', 'With vigour, spirit'], ['Deciso means:', 'With determination, decisive'], ['Larghetto means:', 'Less slow than largo'], ['Mesto means:', 'Sad, mournful'], ['Misterioso means:', 'Mysterious'], ['Ritmico means:', 'Rhythmic'], ['Rubato / Tempo rubato means:', 'With some freedom of time/rhythm'], ['Sempre means:', 'Always'], ['Stringendo means:', 'Gradually getting faster'],
    ['Arco means:', 'Play with the bow (after pizzicato)'], ['Pizzicato means:', 'Plucked'], ['Con sordini (con sord.) / avec sourdines means:', 'With mutes'], ['Senza sordini / sans sourdines means:', 'Without mutes'], ['Sul G / Sul D means:', 'Play on the specified string'], ['The down-bow and up-bow signs show:', 'Down-bow and up-bow: direction of the bow stroke'], ['A slur over string notes means:', 'Play the notes in one bow stroke (legato)', 'assets/grade4/string-slur.png'],
    ['Una corda means:', 'Press the left pedal (softer sound)'], ['Tre corde means:', 'Release the left pedal'], ['This pedal line means:', 'Indicates when to depress and release the sustain (right) pedal', 'assets/grade4/pedal-line.png'],
    ['The tr sign means:', 'Trill: repeated rapid alternation between the note and the note above'], ['This turn sign means:', 'Turn: note above, main note, note below, main note', 'assets/grade4/turn.png'], ['This upper mordent sign means:', 'Upper mordent: main note, note above, main note quickly', 'assets/grade4/upper-mordent.png'], ['This lower mordent sign means:', 'Lower mordent: main note, note below, main note quickly', 'assets/grade4/lower-mordent.png'], ['This slashed grace note means:', 'Acciaccatura: a crushed grace note played as quickly as possible before the main note', 'assets/grade4/acciaccatura.png'], ['This unslashed grace note means:', 'Appoggiatura: an expressive grace note that takes a fixed portion of the main note\'s value', 'assets/grade4/appoggiatura.png'],
    ['a means:', 'To, at'], ['Animé means:', 'Animated, lively'], ['Assez means:', 'Enough, sufficiently'], ['Avec means:', 'With'], ['Cedez means:', 'Yield, relax the speed'], ['Douce means:', 'Sweet'], ['En dehors means:', 'Prominent'], ['Et means:', 'And'], ['Legerement means:', 'Light'], ['Lent means:', 'Slow'], ['Mais means:', 'But'], ['Moins means:', 'Less'], ['Modéré means:', 'At a moderate speed'], ['Non means:', 'Not'], ['Peu means:', 'Little'], ['Plus means:', 'More'], ['Presser means:', 'Hurry'], ['Ralentir means:', 'Slow down'], ['Retenu means:', 'Held back'], ['Sans means:', 'Without'], ['Tres means:', 'Very'], ['Un, une means:', 'One'], ['Vif means:', 'Lively'], ['Vite means:', 'Quick']
  ],
  5: [
    ['Aber means:', 'But'],
    ['A cappella means:', 'Unaccompanied'],
    ['À la pointe means:', 'Use the bow at the point (tip)'],
    ['Allegro assai means:', 'Very fast'],
    ['a niente means:', 'To nothing; dying away to silence'],
    ['Attacca means:', 'Go immediately to the next section'],
    ['Ausdruck means:', 'Expression'],
    ['Bewegt means:', 'Agitated'],
    ['Colla voce means:', 'Follow the singer’s phrasing and tempo'],
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
  'crescendo means:': 'assets/grade3/crescendo-hairpin.png',
  'mm. crotchet = 120 means:': 'assets/grade1/metronome-crotchet-120.png',
  'ottava sign (8va) means:': 'assets/grade3/ottava.png',
  'alla breve means:': 'assets/grade3/alla-breve.png',
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

const VISUAL_QUESTION_PROMPTS = {
  'crescendo means:': 'What does the widening hairpin indicate?',
  'alla breve means:': 'What does this time-signature symbol mean?',
  'these signs above and below the notes are:': 'What do the > and ∧ markings beside the notes indicate?',
  'f (forte) means:': 'This sign (f) means:',
  'ff (fortissimo) means:': 'This sign (ff) means:',
  'mf (mezzo forte) means:': 'This sign (mf) means:',
  'mp (mezzo piano) means:': 'This sign (mp) means:',
  'p (piano) means:': 'This sign (p) means:',
  'pp (pianissimo) means:': 'This sign (pp) means:',
  'mm. crotchet = 120 means:': 'This sign (mm. crotchet = 120) means:',
  'ottava sign (8va) means:': 'This sign (8va) means:',
  'this pedal line means:': 'What do the markings below the lower stave indicate?',
  'a slur over string notes means:': 'For a string player, what do the curved lines over these groups of notes indicate?',
  'this turn sign means:': 'What does the ornament above the note mean?',
  'this upper mordent sign means:': 'What does the ornament above the note mean?',
  'this lower mordent sign means:': 'What does the ornament above the accent mark mean?',
  'this slashed grace note means:': 'What do the small slashed notes before the main notes indicate?',
  'this unslashed grace note means:': 'What do the small unslashed notes before the main notes indicate?',
};

function visualQuestionPrompt(question) {
  return VISUAL_QUESTION_PROMPTS[question.trim().toLowerCase()] || question;
}

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
  'fine means:': 'Fine marks the ending point, for example when following a direction such as D.C. al Fine.',
  'al fine means:': 'Al fine means “to the end”: after a repeat or direction such as D.C., continue until the marked Fine.',
  'retenu means:': 'Retenu means held back in tempo: play more slowly, rather than holding an individual note longer.',
  'a means:': 'Italian a can mean to, at, or in, depending on the phrase. French à means to or at.',
  'a, alla means:': 'Al and alla introduce a direction about style or manner, as in alla marcia (in march style).',
  'tre corde means:': 'Tre corde tells the pianist to release the una corda (soft) pedal and return to the normal tone.',
  'colla voce means:': 'Colla voce tells the accompanist to follow the singer’s phrasing and timing.',
  'à la pointe means:': 'À la pointe tells the player to use the tip of the bow.',
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
  'what is the meaning of the dots above the notes?': 'The dots are staccato marks, so the notes should be played short and detached. Staccatissimo is even shorter, while legato is smooth and connected.',
  'what is the name of the line joining these two notes?': 'A tie joins notes of the same pitch and combines their written durations. A slur may look similar but joins notes for phrasing, including different pitches.',
  'what does a crotchet = 120 mean?': 'The crotchet receives the beat, and the tempo is 120 crotchet beats per minute. The number is the metronome speed, not a count of 120 notes in the piece.',
  'mm. crotchet = 120 means:': 'The marking sets the crotchet as the beat at 120 beats per minute. It is a tempo marking, not a count of notes in the piece.',
  'pause or fermata means:': 'A fermata tells the performer to hold the note or rest longer than its written value. It allows expressive lengthening, unlike tenuto, which normally preserves the written duration.',
  'ottava sign (8va) means:': '8va means the marked passage sounds one octave higher than written. 8vb is used for an octave lower.',
  'accent sign means:': 'An accent mark means the note should be played strongly or stressed. Marcato is a closely related marking; staccato instead describes a detached length of note.',
  'mezzo-staccato means:': 'Mezzo-staccato combines moderate shortening with a detached touch. It is less pointed than staccato and much less extreme than staccatissimo.',
  'marcato sign means:': 'Marcato means marked or strongly accented, giving the note extra emphasis. It concerns stress, whereas staccato concerns detached duration and touch.',
  'the down-bow and up-bow signs show:': 'The down-bow sign (Π) indicates a down-bow stroke; the up-bow sign (V) indicates an up-bow stroke.',
  'a slur over string notes means:': 'The notes under the slur are played smoothly in one bow stroke. The slur describes bowing and phrasing, not a tie between notes of the same pitch.',
  'this pedal line means:': 'The pedal line shows when to press and release the piano’s sustain pedal. The line and its ending mark define the pedal’s duration.',
  'the tr sign means:': 'The trill sign asks for repeated rapid alternation between the written note and the note immediately above it, continuing for the indicated duration.',
  'this turn sign means:': 'A turn moves around the main note: note above, main note, note below, then main note.',
  'this upper mordent sign means:': 'An upper mordent is a quick single alternation from the main note to the note above and back to the main note.',
  'this lower mordent sign means:': 'A lower mordent is a quick single alternation from the main note to the note below and back to the main note.',
  'this slashed grace note means:': 'An acciaccatura is a slashed grace note played very briefly just before the main note.',
  'this unslashed grace note means:': 'An appoggiatura is an unslashed leaning grace note that takes part of the main note’s duration.',
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

function buildExplanation(question, answer) {
  const key = question.toLowerCase();
  if (EXPLANATION_OVERRIDES[key]) return EXPLANATION_OVERRIDES[key];
  const term = getTermName(question);
  const label = question.replace(/\s+means:\s*$/i, '').replace(/[.?!]+$/, '').trim();
  const guidance = TERM_GUIDANCE[term];
  return `${label} means “${answer}”.${guidance ? ` ${guidance}` : ''}`;
}

// Synonyms and broad definitions must not become competing correct options.
// These groups are intentionally conservative where meanings overlap.
const TERM_ANSWER_GROUPS = [
  'staccato|staccato (or stacc.)|staccato marks',
  'tenuto|sostenuto',
  'mezzo-staccato',
  'staccatissimo',
  'accent marks|accent|marcato|marcato, marc.|ben marcato|sf, sfz (sforzando)|sforzando, sforzato, sfz, sf|forza|con forza|rinforzando (rf, rfz, rinf.)',
  'decrescendo|diminuendo|calando|morendo|perdendosi|smorzando (smorz.)|a niente',
  'accelerando|affrettando|stringendo|incalzando|presser',
  'rallentando (or rall.)|ritardando (or rit.)|ritenuto (or rit.)|ralentir|retenu|cedez|allargando',
  'adagio|lento|largo|larghetto|adagietto|grave|lent|langsam',
  'allegro|allegretto|allegro moderato|presto|prestissimo|allegro assai|vivace, vivo|vite|veloce|schnell|animato|animé|vivace, vivo|vif|lebhaft|bewegt|agitato',
  'moderato|modéré|mässig|comodo|comodo / tempo comodo',
  'anima|con anima|brio|con brio|con spirito|energico',
  'a|a, alla',
  'con, col|avec',
  'e, ed|et',
  'ma|mais|aber',
  'meno|moins',
  'poco|peu',
  'piu|plus',
  'senza|sans',
  'assai|molto|tanto|tres',
  'dolce|douce',
  'leggiero|legerement',
  'mesto|triste, tristamente|dolente|dolore|doloroso|con dolore|traurig',
  'risoluto|deciso',
  'amabile|piacevole',
  'amore|amoroso',
  'espressivo|espressione|ausdruck',
  'cantabile|cantando',
  'ad libitum, ad lib.|rubato, tempo rubato|rubato / tempo rubato',
  'simile (or sim.)|come prima',
  'fine|al fine',
  'fermata|pause or fermata',
  'repeat sign|da capo|dal segno|da capo al fine (d.c. al fine)',
].map((group) => new Set(group.split('|').map(normalizedAnswerLabel)));

function isTermDistractor(entry, candidate) {
  const definition = (item) => normalizedAnswerLabel(item.answer.replace(/^[^:]+:\s*/, ''));
  if (definition(entry) === definition(candidate)) return false;
  const term = (item) => normalizedAnswerLabel(visualAnswerLabel(item.question, item.answer));
  const correctTerm = term(entry);
  const candidateTerm = term(candidate);
  if (correctTerm === candidateTerm) return false;
  return !TERM_ANSWER_GROUPS.some((group) => group.has(correctTerm) && group.has(candidateTerm));
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

// Keep existing practice-history skill keys stable when correcting source spellings.
const LEGACY_SKILL_ID_OVERRIDES = {
  'grade-4-question-044': 'terms.tre-corda-means',
  'grade-5-question-003': 'terms.al-la-pointe-means',
  'grade-5-question-009': 'terms.collo-voce-means',
};

const DISPLAY_QUESTION_OVERRIDES = {
  'grade-2-question-001': 'In Italian performance directions, “a” means:',
  'grade-2-question-002': 'Al / alla means:',
  'grade-4-question-052': 'In French performance directions, “à” means:',
  'grade-4-question-041': 'What do the symbols Π and V indicate in string music?',
  'grade-4-question-046': 'What does “tr” above a note mean?',
};

const BANK = Object.fromEntries(
  Object.entries(RAW_BANK).map(([grade, entries]) => [
    Number(grade),
    entries.map(([question, answer, image], index) => {
      const imagePath = image || EXAMPLE_IMAGES[question.toLowerCase()] || null;
      const bankAnswer = imagePath || VISUAL_QUESTION_PROMPTS[question.toLowerCase()] ? visualAnswerText(question, answer) : answer;
      const displayQuestion = DISPLAY_QUESTION_OVERRIDES[`grade-${grade}-question-${String(index + 1).padStart(3, '0')}`] || VISUAL_QUESTION_PROMPTS[question.toLowerCase()] || (imagePath ? visualQuestionPrompt(question) : question);
      return {
        id: `grade-${grade}-question-${String(index + 1).padStart(3, '0')}`,
        questionId: `terms-grade-${grade}-question-${String(index + 1).padStart(3, '0')}`,
        skillId: LEGACY_SKILL_ID_OVERRIDES[`grade-${grade}-question-${String(index + 1).padStart(3, '0')}`] || `terms.${slugifyId(question)}`,
        grade: Number(grade),
        category: 'terms',
        topic: 'terms-and-signs',
        question,
        displayQuestion,
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
if (typeof window !== 'undefined') window.ABRSM_QUESTION_BANK = BANK;

export { BANK, buildExplanation, ensureQuestionMetadata, isTermDistractor, slugifyId, stableQuestionSnapshot };
