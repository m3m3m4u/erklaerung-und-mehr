const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../public/h5p-content');
const libsDir = path.join(__dirname, '../public/h5p-libraries');

if (!fs.existsSync(libsDir)) {
    fs.mkdirSync(libsDir, { recursive: true });
}

console.log('Starting deduplication process...');

const items = fs.readdirSync(contentDir);
let processed = 0;

items.forEach(item => {
    const itemPath = path.join(contentDir, item);
    if (!fs.statSync(itemPath).isDirectory()) return;

    const files = fs.readdirSync(itemPath);
    files.forEach(file => {
        if (file === 'content' || file === 'h5p.json') {
            return;
        }

        const sourcePath = path.join(itemPath, file);
        if (!fs.statSync(sourcePath).isDirectory()) {
             return;
        }

        const destPath = path.join(libsDir, file);

        if (!fs.existsSync(destPath)) {
            fs.cpSync(sourcePath, destPath, { recursive: true });
            console.log(`Copied library: ${file}`);
        }

        fs.rmSync(sourcePath, { recursive: true, force: true });
    });
    
    processed++;
    if (processed % 100 === 0) {
        console.log(`Processed ${processed} / ${items.length} folders...`);
    }
});

console.log('Deduplication finished successfully!');
