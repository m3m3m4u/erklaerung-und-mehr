import fs from 'node:fs';
import ts from 'typescript';

// Skript zur Erkennung und automatischen Differenzierung von Mehrfach-Reitern
const files = fs.readdirSync('src/lib').filter(f => f.endsWith('-data.ts'));
const changes = {};

for (const file of files) {
  const filePath = 'src/lib/' + file;
  let src = fs.readFileSync(filePath, 'utf8');
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
  const topicsKey = Object.keys(m.exports).find(k => /Topics$/.test(k) && !Array.isArray(m.exports[k]));
  if (!topicsKey) continue;
  const topics = m.exports[topicsKey];

  let modified = false;

  for (const topic of Object.values(topics)) {
    const titles = {};
    for (const ex of topic.exercises) {
      const norm = (ex.title || '').trim().toLowerCase().replace(/[^a-z0-9äöüß]+/g, ' ');
      (titles[norm] = titles[norm] || []).push(ex);
    }

    for (const [norm, list] of Object.entries(titles)) {
      if (list.length > 1) {
        list.forEach((ex, idx) => {
          let suffix = '';
          try {
            const h = JSON.parse(fs.readFileSync('public/h5p-content/' + ex.folder + '/h5p.json', 'utf8'));
            const c = JSON.parse(fs.readFileSync('public/h5p-content/' + ex.folder + '/content/content.json', 'utf8'));
            const s0 = (c.presentation?.slides?.[0]?.elements || []).map(e => e.action?.params?.text || '').join(' ');
            
            if (s0.includes('Song') || s0.includes('Lernsong')) {
              suffix = 'Lernsong & Video';
            } else if (s0.includes('ZUM VIDEO') || (s0.includes('Erklärvideo') && !s0.includes('Informationen'))) {
              suffix = 'Video & Quiz';
            } else if (s0.includes('Informationen und Übungen')) {
              suffix = 'Textanalyse & Übungen';
            } else if (h.mainLibrary === 'H5P.InteractiveVideo') {
              suffix = 'Interaktives Video';
            } else if (h.mainLibrary === 'H5P.QuestionSet' || h.mainLibrary === 'H5P.SingleChoiceSet') {
              suffix = 'Quiz & Test';
            } else if (h.mainLibrary === 'H5P.DragText') {
              suffix = 'Zuordnungsübung';
            } else if (h.mainLibrary === 'H5P.ImagePair') {
              suffix = 'Memory & Zuordnung';
            } else {
              suffix = `Teil ${idx + 1}`;
            }
          } catch (e) {
            suffix = `Teil ${idx + 1}`;
          }

          const baseTitle = ex.title.replace(/\s*\([^)]*\)$/, '').trim();
          const newTitle = `${baseTitle} (${suffix})`;
          
          if (ex.title !== newTitle) {
            console.log(`[${file}] "${ex.title}" -> "${newTitle}"`);
            // Im Quelltext ersetzen
            const targetStr = `"folder": "${ex.folder}"`;
            // Finde die Übung im Text
            const exBlockRegex = new RegExp(`(\\{[^{}]*?"title":\\s*")[^"]+("[^{}]*?"folder":\\s*"${ex.folder}"[^{}]*?\\})`, 'g');
            if (exBlockRegex.test(src)) {
              src = src.replace(exBlockRegex, `$1${newTitle}$2`);
              modified = true;
            }
          }
        });
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, src, 'utf8');
    console.log(`✅ ${file} aktualisiert.`);
  }
}
