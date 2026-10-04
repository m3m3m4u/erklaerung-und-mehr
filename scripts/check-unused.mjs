import fs from 'node:fs';

const files = fs.readdirSync('src/lib').filter(f => f.endsWith('-data.ts'));
const totalFolders = new Set();
for (const f of files) {
  const c = fs.readFileSync('src/lib/' + f, 'utf8');
  // Match folder: "..." or "folder": "..."
  const regex = /folder["']?\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    totalFolders.add(m[1]);
  }
}
const allOnDisk = fs.readdirSync('public/h5p-content');
const unused = allOnDisk.filter(f => !totalFolders.has(f));
console.log('Tatsächlich genutzte eindeutige H5P-Ordner im Code:', totalFolders.size);
console.log('Vorhandene H5P Ordner auf Festplatte:', allOnDisk.length);
console.log('Differenz (nicht im Code verlinkt):', unused.length);

const unusedDetails = unused.map(f => {
  try {
    const h = JSON.parse(fs.readFileSync('public/h5p-content/' + f + '/h5p.json', 'utf8'));
    return { folder: f, title: h.title, library: h.mainLibrary };
  } catch (e) {
    return { folder: f, error: true };
  }
});

fs.writeFileSync('scripts/_unused_inventory.json', JSON.stringify(unusedDetails.slice(0, 100), null, 2));
console.log('Erste 100 ungenutzte Module gespeichert.');
