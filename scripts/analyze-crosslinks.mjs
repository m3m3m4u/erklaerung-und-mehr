import fs from 'node:fs';
import ts from 'typescript';

// Lade alle Themen aus allen Fächern
const files = fs.readdirSync('src/lib').filter(f => f.endsWith('-data.ts'));
const allTopics = [];

for (const file of files) {
  const subjectKey = file.replace('-data.ts', '');
  const src = fs.readFileSync('src/lib/' + file, 'utf8');
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
      subject: subjectKey,
      slug: t.slug,
      title: t.title,
      category: t.category,
      shortDesc: t.shortDesc,
      keyPoints: t.keyPoints || []
    });
  }
}

console.log('Insgesamt geladene Themen:', allTopics.length);

// Finde thematische Verwandtschaften (z.B. Begriffe im Titel oder KeyPoints)
const crossLinks = {};
const keywords = [
  { term: 'photosynthese', subjects: ['biologie', 'chemie', 'klima'] },
  { term: 'galileo galilei', subjects: ['physik', 'persoenlichkeiten', 'geschichte'] },
  { term: 'albert einstein', subjects: ['physik', 'persoenlichkeiten'] },
  { term: 'algorithmen', subjects: ['informatik', 'math'] },
  { term: 'kryptographie', subjects: ['informatik', 'math'] },
  { term: 'dna', subjects: ['biologie', 'chemie'] },
  { term: 'buddhismus', subjects: ['religion', 'ethik', 'philosophie'] },
  { term: 'islam', subjects: ['religion', 'geschichte', 'geographie'] },
  { term: 'demokratie', subjects: ['politik', 'geschichte', 'philosophie'] },
  { term: 'katalysator', subjects: ['chemie', 'technik'] },
  { term: 'elektromotor', subjects: ['physik', 'technik'] },
  { term: 'regenerative energien', subjects: ['physik', 'technik', 'klima', 'geographie'] }
];

for (const kw of keywords) {
  const matches = allTopics.filter(t => 
    t.title.toLowerCase().includes(kw.term) || 
    t.shortDesc.toLowerCase().includes(kw.term) ||
    t.keyPoints.some(k => k.toLowerCase().includes(kw.term))
  );
  if (matches.length > 1) {
    const bySubj = new Set(matches.map(m => m.subject));
    if (bySubj.size > 1) {
      crossLinks[kw.term] = matches.map(m => ({ subject: m.subject, slug: m.slug, title: m.title }));
    }
  }
}

console.log('Gefundene Schnittmengen (Beispiele):', Object.keys(crossLinks));
fs.writeFileSync('scripts/_crosslink_sample.json', JSON.stringify(crossLinks, null, 2));
