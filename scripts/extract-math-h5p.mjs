import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

const mathFiles = [
  // Brüche
  'brucharten-bestimmen-29.h5p',
  'bruche-addieren-und-subtrahieren-41.h5p',
  'bruche-arten-von-bruchen-graphische-darstellung-kurzen-und-erweitern-28.h5p',
  'bruche-erweitern-32.h5p',
  'bruche-erweitern-und-kurzen-34.h5p',
  'bruche-und-dezimalzahlen-38.h5p',
  // Dezimalzahlen
  'addition-und-subtraktion-von-dezimalzahlen-151.h5p',
  // Winkel
  'einteilung-von-winkeln-218.h5p',
  'kurs-winkel-schatzen-662.h5p',
  'lerninhalt-winkel-567.h5p',
  // Symmetrie
  'spiegelungen-achsensymmetrie-665.h5p',
  'spiegelungen-achsensymmetrie-2-666.h5p',
  // Pythagoras
  'satz-von-pythagoras-am-rechteck-video-mit-fragen-180.h5p',
  'satz-von-pythagoras-deltoid-325.h5p',
  'satz-von-pythagoras-gleichschenkliges-dreieck-323.h5p',
  // Terme
  'grundrechnungsarten-mit-termen-erklarvideos-und-bungen-235.h5p',
  'bruchterme-376.h5p',
  // Gleichungen
  'gleichungen-116.h5p',
  'gleichungen-im-kopf-losen-184.h5p',
  'gleichungen-losen-erklarung-und-bungen-326.h5p',
  'gleichungen-video-mit-fragen-179.h5p',
  'textgleichungen-einfach-160.h5p',
  // Statistik
  'berechne-mittelwerte-und-statistische-grundbegriffe-8.h5p',
  'bungen-zum-boxplot-238.h5p',
  'erklarvideo-statistik-haufigkeiten-und-diagramme-mit-fragen-188.h5p',
  'erklarvideo-statistik-mittelwerte-und-boxplot-mit-fragen-186.h5p',
  // Prozent
  'prozent-graphische-darstellung-79.h5p',
  'prozent-und-bruche-80.h5p',
  'prozentsatz-berechnen-einfach-85.h5p',
  'prozentsatz-berechnen-mit-bruchen-258.h5p',
];

const targetDir = path.resolve('public/h5p-content');

for (const file of mathFiles) {
  const sourcePath = path.resolve('exports', file);
  if (!fs.existsSync(sourcePath)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  const folderName = file.replace(/\.h5p$/, '');
  const outPath = path.join(targetDir, folderName);
  
  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath, { recursive: true });
    const zip = new AdmZip(sourcePath);
    zip.extractAllTo(outPath, true);
    console.log(`Extracted: ${folderName}`);
  } else {
    console.log(`Already exists: ${folderName}`);
  }

  // Patch youtube.js if present
  function patchYoutube(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) patchYoutube(full);
      else if (ent.isFile() && ent.name === 'youtube.js') {
        let content = fs.readFileSync(full, 'utf8');
        if (content.includes('player.g.style') || content.includes('self.player.g.style')) {
          content = content.replace(/player\.g\.style/g, '(player.getIframe ? player.getIframe().style : (player.g ? player.g.style : {}))');
          fs.writeFileSync(full, content);
          console.log(`  Patched YouTube in: ${full}`);
        }
      }
    }
  }
  patchYoutube(outPath);
}

console.log('All Math H5Ps extracted successfully!');
