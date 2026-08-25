import fs from 'fs';
import path from 'path';

function patchAllYoutubeFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      patchAllYoutubeFiles(full);
    } else if (ent.isFile() && ent.name === 'youtube.js') {
      let content = fs.readFileSync(full, 'utf8');
      
      // Fix player style assignment error
      const targetPattern = /\(player\.getIframe\s*\?\s*player\.getIframe\(\)\.style[\s\S]*?=\s*"position:absolute;top:0;left:0;width:100%;height:100%;";/g;
      const targetPatternOld = /player\.g\.style\s*=\s*"position:absolute;top:0;left:0;width:100%;height:100%;";/g;
      
      const replacement = `
      var fixIframe = function () {
        try {
          var iframe = (player && player.getIframe && player.getIframe()) || (player && player.g) || (player && player.a) || (player && player.h) || document.getElementById(id);
          if (iframe && iframe.style) {
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
          }
        } catch (e) {}
      };
      fixIframe();
      setTimeout(fixIframe, 50);
      setTimeout(fixIframe, 300);
      `;

      let changed = false;
      if (content.match(targetPattern)) {
        content = content.replace(targetPattern, replacement);
        changed = true;
      }
      if (content.match(targetPatternOld)) {
        content = content.replace(targetPatternOld, replacement);
        changed = true;
      }

      // Also ensure onReady calls fixIframe
      if (content.includes('onReady: function () {') && !content.includes('fixIframe();')) {
        content = content.replace('onReady: function () {', 'onReady: function () { fixIframe();');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(full, content);
        console.log(`Patched YouTube in: ${full}`);
      }
    }
  }
}

patchAllYoutubeFiles('d:/eum_neu/public/h5p-content');
console.log('All YouTube scripts patched!');
