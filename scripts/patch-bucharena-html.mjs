import fs from 'fs';
import path from 'path';

const dir = 'd:/eum_neu/html/bucharena';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} HTML files to inspect and patch.`);

const oldJs = ')).g.style="position:absolute;top:0;left:0;width:100%;height:100%;"';
const newJs = ')),(function(){var fix=function(){try{var el=(r&&r.getIframe&&r.getIframe())||document.getElementById(c);if(el&&el.style){el.style.position="absolute";el.style.top="0";el.style.left="0";el.style.width="100%";el.style.height="100%"}}catch(e){}};fix();setTimeout(fix,50);setTimeout(fix,200);setTimeout(fix,500)})()';

const targetStyleRegex = /<style>\s*(\/\*[\s\S]*?\*\/)?\s*(\.h5p-slide[\s\S]*?)?iframe\[id\^="h5p-youtube-"\][\s\S]*?<\/style>/i;

const updatedStyleTag = `<style>
        .h5p-slide .h5p-video > div {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .h5p-slide .h5p-video div[style*="56.25%"] {
            padding: 0 !important;
            width: 780px !important;
            height: 438px !important;
            max-width: 100% !important;
            max-height: 100% !important;
            aspect-ratio: 16 / 9 !important;
            position: relative !important;
            margin: auto !important;
        }
        .h5p-slide iframe[id^="h5p-youtube-"] {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
        }
    </style>`;

let patchedCount = 0;

for (const file of files) {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  if (content.includes(oldJs)) {
    content = content.replace(oldJs, newJs);
    changed = true;
  }

  if (targetStyleRegex.test(content)) {
    content = content.replace(targetStyleRegex, updatedStyleTag);
    changed = true;
  } else if (!content.includes('.h5p-slide .h5p-video div[style*="56.25%"]')) {
    if (content.includes('<meta name="viewport" content="width=device-width, initial-scale=1">')) {
      content = content.replace(
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n    ' + updatedStyleTag
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    patchedCount++;
  }
}

console.log(`Finished patching! Patched ${patchedCount} files.`);
