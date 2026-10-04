import fs from 'node:fs';

let s = fs.readFileSync('src/lib/geographie-data.ts', 'utf8');
s = s.replace('"Innsbruck (Textanalyse & Übungen)",\n        "folder": "innsbruck-2-5706"', '"Innsbruck (Kompakt & Video)",\n        "folder": "innsbruck-2-5706"');
s = s.replace('"Innsbruck (Textanalyse & Übungen)",\n        "folder": "innsbruck-1446"', '"Innsbruck (Vertiefung & Textanalyse)",\n        "folder": "innsbruck-1446"');
s = s.replace('"Klagenfurt (Textanalyse & Übungen)",\n        "folder": "klagenfurt-2-5709"', '"Klagenfurt (Kompakt & Video)",\n        "folder": "klagenfurt-2-5709"');
s = s.replace('"Klagenfurt (Textanalyse & Übungen)",\n        "folder": "klagenfurt-1445"', '"Klagenfurt (Vertiefung & Textanalyse)",\n        "folder": "klagenfurt-1445"');
fs.writeFileSync('src/lib/geographie-data.ts', s, 'utf8');
console.log('✅ Geo Titel Innsbruck und Klagenfurt sauber differenziert.');
