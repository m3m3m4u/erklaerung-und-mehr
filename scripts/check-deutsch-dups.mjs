import fs from 'node:fs';

const diff = (a, b) => {
  const pA = 'public/h5p-content/' + a + '/content/content.json';
  const pB = 'public/h5p-content/' + b + '/content/content.json';
  if (!fs.existsSync(pA) || !fs.existsSync(pB)) return 'FEHLT';
  const ja = JSON.parse(fs.readFileSync(pA, 'utf8'));
  const jb = JSON.parse(fs.readFileSync(pB, 'utf8'));
  const clean = obj => JSON.stringify(obj).replace(/"subContentId":"[^"]+"/g, '');
  return { slidesA: ja.presentation?.slides?.length, slidesB: jb.presentation?.slides?.length, equal: clean(ja) === clean(jb) };
};

const samples = [
  ['anna-seghers-das-siebte-kreuz-3404', 'anna-seghers-das-siebte-kreuz-2-4509'],
  ['literaturepoche-naturalismus-2-4647', 'literaturepoche-naturalismus-2377'],
  ['g-e-lessing-emilia-galotti-3-4533', 'g-e-lessing-emilia-galotti-3095'],
  ['theodor-fontane-effi-briest-3-4567', 'theodor-fontane-effi-briest-3102'],
  ['franz-kafka-der-prozess-3-4523', 'franz-kafka-der-prozess-3093'],
  ['wolfgang-herrndorf-tschick-3-4574', 'wolfgang-herrndorf-tschick-3277'],
  ['friedrich-durrenmatt-die-physiker-3-4525', 'friedrich-durrenmatt-die-physiker-3278']
];

for(const [a, b] of samples) {
  console.log(a, 'vs', b, JSON.stringify(diff(a, b)));
}
