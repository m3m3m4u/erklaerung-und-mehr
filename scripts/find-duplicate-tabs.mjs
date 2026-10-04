import fs from 'node:fs';
import ts from 'typescript';

const files = fs.readdirSync('src/lib').filter(f => f.endsWith('-data.ts'));
const duplicateTabsInTopics = [];

for (const file of files) {
  const src = fs.readFileSync('src/lib/' + file, 'utf8');
  let js;
  try {
    js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  } catch (e) {
    continue;
  }
  const m = { exports: {} };
  try {
    new Function('module', 'exports', 'require', js)(m, m.exports, () => ({}));
  } catch (e) {
    continue;
  }
  const topics = Object.entries(m.exports).find(([k, v]) => /Topics$/.test(k) && v && !Array.isArray(v))?.[1] ?? {};

  for (const topic of Object.values(topics)) {
    const titles = {};
    for (const ex of topic.exercises) {
      // Normiere Titel
      const norm = (ex.title || '').trim().toLowerCase().replace(/[^a-z0-9äöüß]+/g, ' ');
      (titles[norm] = titles[norm] || []).push(ex);
    }
    for (const [norm, list] of Object.entries(titles)) {
      if (list.length > 1) {
        // Ermittle Inhaltstyp für jedes Element
        const enhancedList = list.map(ex => {
          let type = 'Theorie & Übung';
          try {
            const h = JSON.parse(fs.readFileSync('public/h5p-content/' + ex.folder + '/h5p.json', 'utf8'));
            const c = JSON.parse(fs.readFileSync('public/h5p-content/' + ex.folder + '/content/content.json', 'utf8'));
            const s0 = (c.presentation?.slides?.[0]?.elements || []).map(e => e.action?.params?.text || '').join(' ');
            if (s0.includes('Song') || s0.includes('Lernsong')) {
              type = 'Lernsong & Video';
            } else if (s0.includes('VIDEO') || s0.includes('Erklärvideo') || JSON.stringify(c).includes('H5P.Video') || h.mainLibrary === 'H5P.InteractiveVideo') {
              type = 'Erklärvideo & Quiz';
            } else if (h.mainLibrary === 'H5P.QuestionSet' || h.mainLibrary === 'H5P.SingleChoiceSet') {
              type = 'Quiz & Test';
            } else if (h.mainLibrary === 'H5P.DragText') {
              type = 'Zuordnungsübung';
            } else if (h.mainLibrary === 'H5P.ImagePair') {
              type = 'Memory & Zuordnung';
            } else if (h.mainLibrary === 'H5P.IFrameEmbed') {
              type = 'Interaktive Grafik';
            } else {
              type = 'Textanalyse & Übung';
            }
          } catch (e) {}
          return { ...ex, detectedType: type };
        });
        duplicateTabsInTopics.push({
          file,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          normTitle: norm,
          items: enhancedList
        });
      }
    }
  }
}

fs.writeFileSync('scripts/_duplicate_tabs.json', JSON.stringify(duplicateTabsInTopics, null, 2));
console.log('Anzahl gefundener Themen mit gleichnamigen Tabs:', duplicateTabsInTopics.length);
duplicateTabsInTopics.slice(0, 15).forEach(d => {
  console.log(`[${d.file}] ${d.topicTitle} -> "${d.normTitle}" (${d.items.length} Tabs)`);
  d.items.forEach(it => console.log(`   · "${it.title}" -> Vorschlag: "${it.title} (${it.detectedType})" [${it.folder}]`));
});
