// Nutzung: node scripts/audit-subject.mjs <datei-ohne-.ts> [--check]
// Gibt Kategorien -> Themen -> Übungen (Titel | Ordner) kompakt aus.
// --check: zusätzlich Abgleich mit public/h5p-content/<folder>/h5p.json
//          (fehlender Ordner, abweichender H5P-Titel, Mehrfachverwendung im Fach)
import fs from "node:fs";
import ts from "typescript";

const name = process.argv[2];
const check = process.argv.includes("--check");
const src = fs.readFileSync(`src/lib/${name}.ts`, "utf8");
const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
new Function("module", "exports", "require", js)(m, m.exports, () => ({}));
const ex = m.exports;
const cats = Object.entries(ex).find(([k, v]) => /Categories$/.test(k) && Array.isArray(v))?.[1] ?? [];
const topics = Object.entries(ex).find(([k, v]) => /Topics$/.test(k) && v && !Array.isArray(v))?.[1] ?? {};
const by = {};
for (const t of Object.values(topics)) (by[t.category] ??= []).push(t);
const order = [...cats, ...Object.keys(by).filter((c) => !cats.includes(c))];

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9äöüß]+/g, " ").trim();
const seen = {}; // folder -> [topic slugs]
const titleSeen = {};
const problems = [];
let tc = 0, ec = 0;

for (const c of order) {
  console.log(`\n## ${c} (${(by[c] || []).length} Themen)`);
  for (const t of by[c] || []) {
    tc++; ec += t.exercises.length;
    console.log(`- ${t.slug} :: ${t.title} [${t.exercises.length}]`);
    for (const e of t.exercises) {
      let extra = "";
      (seen[e.folder] ??= []).push(t.slug);
      if (check) {
        const p = `public/h5p-content/${e.folder}/h5p.json`;
        if (!fs.existsSync(p)) {
          extra = "  !! ORDNER FEHLT";
          problems.push(`FEHLT: ${e.folder} (${t.slug})`);
        } else {
          const real = JSON.parse(fs.readFileSync(p, "utf8")).title ?? "";
          (titleSeen[norm(real)] ??= new Set()).add(e.folder);
          if (norm(real) !== norm(e.title)) extra = `  ~~ H5P-Titel: "${real}"`;
        }
      }
      console.log(`    · ${e.title}  |  ${e.folder}${extra}`);
    }
  }
}
if (check) {
  for (const [f, s] of Object.entries(seen)) if (s.length > 1) problems.push(`MEHRFACH: ${f} in ${[...new Set(s)].join(", ")}`);
  for (const [t, s] of Object.entries(titleSeen)) if (s.size > 1) problems.push(`GLEICHER H5P-TITEL "${t}": ${[...s].join(", ")}`);
  console.log("\n=== PROBLEME ===");
  console.log(problems.join("\n") || "keine");
}
console.log(`\nSUMME: ${tc} Themen, ${ec} Übungen`);
