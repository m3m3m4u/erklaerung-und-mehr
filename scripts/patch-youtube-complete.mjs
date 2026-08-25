import fs from 'fs';
import path from 'path';

function patchCompleteYouTube(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix loadAPI to handle already loaded window.YT
  const loadApiPattern = /var\s+loadAPI\s*=\s*function\s*\([^)]*\)\s*\{[\s\S]*?\};\s*var\s+LABELS/g;
  const newLoadApi = `var loadAPI = function (loaded) {
    if (window.YT && window.YT.Player) {
      setTimeout(loaded, 0);
      return;
    }
    if (window.onYouTubeIframeAPIReady !== undefined) {
      var original = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function (id) {
        try { loaded(id); } catch(e) {}
        try { original(id); } catch(e) {}
      };
    } else {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0] || document.head;
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = loaded;
    }
  };

  var LABELS`;

  if (content.match(loadApiPattern)) {
    content = content.replace(loadApiPattern, newLoadApi);
  }

  // 2. Fix create() visibility check
  content = content.replace(
    /if\s*\(\s*!\$placeholder\.is\(':visible'\)\s*\|\|\s*player\s*!==\s*undefined\s*\)\s*\{/g,
    "if (player !== undefined) {"
  );

  // 3. Fix appendTo to retry create
  content = content.replace(
    /self\.appendTo\s*=\s*function\s*\(\$container\)\s*\{[\s\S]*?create\(\);\s*\};/g,
    `self.appendTo = function ($container) {
      $container.addClass('h5p-youtube').append($wrapper);
      create();
      setTimeout(create, 50);
      setTimeout(create, 200);
      setTimeout(create, 500);
    };`
  );

  // 4. Robust fixIframe implementation
  const fixIframeBlock = `
      var fixIframe = function () {
        try {
          var iframe = (player && player.getIframe && player.getIframe()) || (player && player.g) || (player && player.a) || (player && player.h) || document.getElementById(id);
          if (iframe) {
            if (iframe.style) {
              iframe.style.position = 'absolute';
              iframe.style.top = '0';
              iframe.style.left = '0';
              iframe.style.width = '100%';
              iframe.style.height = '100%';
            }
          }
        } catch (e) {}
      };
      fixIframe();
      setTimeout(fixIframe, 50);
      setTimeout(fixIframe, 200);
      setTimeout(fixIframe, 600);
  `;

  content = content.replace(
    /player\.g\.style[\s\S]*?;\s*/g,
    fixIframeBlock
  );
  content = content.replace(
    /\(player\.getIframe\s*\?[\s\S]*?;\s*/g,
    fixIframeBlock
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fully patched: ${filePath}`);
}

function walkAndPatch(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walkAndPatch(full);
    } else if (ent.isFile() && ent.name === 'youtube.js') {
      patchCompleteYouTube(full);
    }
  }
}

walkAndPatch('d:/eum_neu/public/h5p-content');
console.log('All YouTube files patched with full fix!');
