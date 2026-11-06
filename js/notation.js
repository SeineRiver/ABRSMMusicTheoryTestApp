function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const NOTE_LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const INTERVAL_DIATONIC_STEPS = { m2: 1, M2: 1, m3: 2, M3: 2, P4: 3, P5: 4, m6: 5, M6: 5, m7: 6, M7: 6, P8: 7 };
const SAFE_ROOT_OCTAVES = {
  treble: { C: [4, 5], D: [4, 5], E: [4, 5], F: [4, 5], G: [4, 5], A: [4, 5], B: [4, 5] },
  bass: { C: [3, 4], D: [3, 4], E: [2, 3], F: [2, 3], G: [2, 3], A: [2, 3], B: [2, 3] },
  alto: { C: [4, 5], D: [4, 5], E: [4, 5], F: [4, 5], G: [3, 4], A: [3, 4], B: [3, 4] },
  tenor: { C: [4, 5], D: [4, 5], E: [4, 5], F: [3, 4], G: [3, 4], A: [3, 4], B: [3, 4] },
};

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

function randomNotationPitch(clef) {
  return clef === 'treble'
    ? randomFrom(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c', 'd'])
    : randomFrom(['C,', 'D,', 'E,', 'F,', 'G,', 'A,', 'B,', 'C', 'D']);
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

export {
  INTERVAL_DIATONIC_STEPS,
  NOTE_LETTERS,
  REST_ICON_FILES,
  SAFE_ROOT_OCTAVES,
  createAbcScore,
  makeIntervalNotation,
  makeIntervalOptionNotation,
  noteToAbc,
  randomNotationPitch,
  renderNotation,
  renderTimeSignaturePrompt,
  restIconMarkup,
  timeSignatureMarkMarkup,
};
