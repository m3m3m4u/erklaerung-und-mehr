import fs from 'node:fs';
import ts from 'typescript';

// Mappings von Dateinamen zu URL-Pfaden und Anzeigenamen
const SUBJECT_CONFIG = {
  'biologie': { name: 'Biologie', path: '/biologie' },
  'chemie': { name: 'Chemie', path: '/chemie' },
  'physik': { name: 'Physik', path: '/physik' },
  'geographie': { name: 'Geographie', path: '/geographie' },
  'geschichte': { name: 'Geschichte', path: '/geschichte' },
  'math': { name: 'Mathematik', path: '/mathematik' },
  'informatik': { name: 'Informatik', path: '/informatik' },
  'technik': { name: 'Technik', path: '/technik' },
  'deutsch': { name: 'Deutsch', path: '/deutsch' },
  'englisch': { name: 'Englisch', path: '/englisch' },
  'musik': { name: 'Musik', path: '/musik' },
  'kunst': { name: 'Kunst', path: '/kunst' },
  'religion': { name: 'Religion', path: '/religion' },
  'ethik': { name: 'Ethik', path: '/ethik' },
  'philosophie': { name: 'Philosophie', path: '/philosophie' },
  'psychologie': { name: 'Psychologie', path: '/psychologie' },
  'soziales-lernen': { name: 'Soziales Lernen', path: '/soziales-und-emotionales-lernen' },
  'politik': { name: 'Politik & Gesellschaft', path: '/politik-und-gesellschaft' },
  'wirtschaft': { name: 'Wirtschaft', path: '/wirtschaft' },
  'ernaehrung': { name: 'Ernährung', path: '/ernaehrung' },
  'persoenlichkeiten': { name: 'Persönlichkeiten', path: '/wichtige-persoenlichkeiten-der-geschichte' },
  'sport': { name: 'Sport', path: '/sport' },
  'hauswirtschaft': { name: 'Hauswirtschaft', path: '/hauswirtschaft' },
  'verkehr': { name: 'Verkehrserziehung', path: '/die-freiwillige-fahrradpruefung' },
  'medien': { name: 'Medien', path: '/medien' },
  'klima': { name: 'Klima & Umwelt', path: '/sustainable-development-goals' },
  'lehrberufe': { name: 'Lehrberufe', path: '/lehrberufe' }
};

const allTopics = [];

for (const [key, conf] of Object.entries(SUBJECT_CONFIG)) {
  const filePath = `src/lib/${key}-data.ts`;
  if (!fs.existsSync(filePath)) continue;
  const src = fs.readFileSync(filePath, 'utf8');
  let js;
  try {
    js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  } catch (e) { continue; }
  const m = { exports: {} };
  try {
    new Function('module', 'exports', 'require', js)(m, m.exports, () => ({}));
  } catch (e) { continue; }
  const topics = Object.entries(m.exports).find(([k, v]) => /Topics$/.test(k) && v && !Array.isArray(v))?.[1] ?? {};

  for (const t of Object.values(topics)) {
    allTopics.push({
      subjectKey: key,
      subjectName: conf.name,
      subjectPath: conf.path,
      slug: t.slug,
      title: t.title,
      category: t.category,
      shortDesc: t.shortDesc,
      keyPoints: t.keyPoints || [],
      text: `${t.title} ${t.shortDesc} ${(t.keyPoints || []).join(' ')}`.toLowerCase()
    });
  }
}

// Striktere Stopwords: Allgemeine deutsche Wörter und zu vage Wörter
const STOPWORDS = new Set([
  'und', 'oder', 'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einer', 'eines', 'einem', 'einen',
  'im', 'in', 'am', 'an', 'auf', 'aus', 'bei', 'mit', 'nach', 'von', 'zu', 'zum', 'zur', 'über', 'unter',
  'vor', 'wie', 'was', 'wer', 'warum', 'durch', 'für', 'gegen', 'ohne', 'um', 'bis', 'seit', 'als', 'auch',
  'sowie', 'ihre', 'ihre', 'ihrer', 'seine', 'seiner', 'sein', 'wichtige', 'grundlagen', 'grundbegriffe',
  'einführung', 'überblick', 'bedeutung', 'funktion', 'funktionen', 'entstehung', 'entwicklung', 'geschichte',
  'moderne', 'historische', 'formen', 'verschiedene', 'rolle', 'thema', 'themen', 'bereich', 'bereiche',
  'arten', 'welt', 'leben', 'jahrhundert', 'jahrhunderts', 'jahre', 'jahren', 'menschen', 'mensch', 'schule',
  'lernen', 'unterricht', 'beispiele', 'begriff', 'struktur', 'aufbau', 'prinzip', 'wirkung', 'nutzung',
  'herz', 'sport', 'bildung', 'medizin', 'technik', 'gesellschaft', 'schweiz', 'österreich', 'deutschland',
  'klassische', 'kleine', 'große', 'einfache', 'wichtiger', 'wichtigen', 'einfach', 'schnell', 'praxis',
  'alltag', 'ueberblick', 'einfuehrung', 'verstaendnis', 'beispiel', 'systeme', 'prozesse', 'methoden'
]);

function extractKeywords(text) {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-z0-9äöüß\- ]+/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 6 && !STOPWORDS.has(w))
  );
}

const crossLinksIndex = {};

for (const current of allTopics) {
  const currentKey = `${current.subjectPath.replace(/^\//, '')}:${current.slug}`;
  const currentWords = extractKeywords(current.text);
  const currentTitleWords = extractKeywords(current.title);

  const candidates = [];

  for (const other of allTopics) {
    if (other.subjectKey === current.subjectKey) continue;

    const otherWords = extractKeywords(other.text);
    const otherTitleWords = extractKeywords(other.title);

    let score = 0;

    // Strikte fachliche Relevanz:
    // Mindestens 1 echtes Fachbegriff-Wort im Titel beider Themen (z. B. "energie", "oekosystem", "demokratie", "verdauung", "genetik", "antike", "programmierung")
    let titleIntersection = 0;
    for (const tw of currentTitleWords) {
      if (otherTitleWords.has(tw) && tw.length >= 5) {
        titleIntersection += 1;
        score += 20;
      }
    }

    if (titleIntersection === 0) continue; // Kein Querverweis, wenn kein zentraler Begriff im Titel übereinstimmt!

    // Zusätzliche Relevanzpunkte für Textbezug
    for (const tw of currentTitleWords) {
      if (otherWords.has(tw)) score += 5;
    }
    for (const otw of otherTitleWords) {
      if (currentWords.has(otw)) score += 5;
    }

    if (score >= 20) {
      candidates.push({
        subjectKey: other.subjectKey,
        subjectName: other.subjectName,
        subjectPath: other.subjectPath,
        slug: other.slug,
        title: other.title,
        shortDesc: other.shortDesc,
        score
      });
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  const selected = [];
  const usedSubjects = new Set();

  for (const c of candidates) {
    if (!usedSubjects.has(c.subjectKey)) {
      usedSubjects.add(c.subjectKey);
      selected.push({
        subjectName: c.subjectName,
        subjectPath: c.subjectPath,
        slug: c.slug,
        title: c.title,
        shortDesc: c.shortDesc
      });
      if (selected.length >= 3) break;
    }
  }

  if (selected.length > 0) {
    crossLinksIndex[currentKey] = selected;
  }
}

console.log(`Präzise Cross-Links für ${Object.keys(crossLinksIndex).length} Themen generiert.`);

const codeContent = `// Automatisch generierte fächerübergreifende Querverweise
export interface CrossLink {
  subjectName: string;
  subjectPath: string;
  slug: string;
  title: string;
  shortDesc: string;
}

export const topicCrossLinks: Record<string, CrossLink[]> = ${JSON.stringify(crossLinksIndex, null, 2)};
`;

fs.writeFileSync('src/lib/cross-links.ts', codeContent, 'utf8');
console.log('src/lib/cross-links.ts erfolgreich aktualisiert.');
