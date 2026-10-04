import fs from 'node:fs';

function examine(a, b) {
  const ja = JSON.parse(fs.readFileSync('public/h5p-content/' + a + '/content/content.json', 'utf8'));
  const jb = JSON.parse(fs.readFileSync('public/h5p-content/' + b + '/content/content.json', 'utf8'));
  console.log('===', a, 'vs', b, '===');
  console.log('MainLibrary A:', JSON.parse(fs.readFileSync('public/h5p-content/' + a + '/h5p.json', 'utf8')).mainLibrary);
  console.log('MainLibrary B:', JSON.parse(fs.readFileSync('public/h5p-content/' + b + '/h5p.json', 'utf8')).mainLibrary);
  for (let i = 0; i < Math.min(ja.presentation.slides.length, jb.presentation.slides.length); i++) {
    const ta = (ja.presentation.slides[i].elements || []).map(e => e.action?.params?.text || e.action?.params?.question || '').filter(Boolean).join(' ').replace(/<[^>]+>/g, '').trim();
    const tb = (jb.presentation.slides[i].elements || []).map(e => e.action?.params?.text || e.action?.params?.question || '').filter(Boolean).join(' ').replace(/<[^>]+>/g, '').trim();
    if (ta !== tb) {
      console.log(`Slide ${i} differs:`);
      console.log('  A:', ta.slice(0, 90));
      console.log('  B:', tb.slice(0, 90));
    }
  }
}

examine('anna-seghers-das-siebte-kreuz-3404', 'anna-seghers-das-siebte-kreuz-2-4509');
examine('friedrich-durrenmatt-die-physiker-3-4525', 'friedrich-durrenmatt-die-physiker-3278');
