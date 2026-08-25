const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  try {
    fs.readdirSync(dir).forEach(f => {
      let p = path.join(dir, f);
      try {
        if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
        else res.push(p);
      } catch (e) {}
    });
  } catch (e) {}
  return res;
}

const all = walk('bilder');
console.log('All files matching physics/chem/bio/geo:');
all.filter(f => /physik|chemie|biologie|geo|natur/i.test(f)).forEach(f => console.log(f));
