// Wendet einen Änderungsplan auf src/lib/<fach>-data.ts an (Format: JSON.stringify, 2 Leerzeichen).
// Nutzung: node scripts/edit-subject.mjs <datei-ohne-.ts> <plan.json>
// Plan: { "remove": ["folder"], "move": { "folder": "ziel-slug" }, "topic": { "slug": { feld: wert } } }
import fs from "node:fs";
import ts from "typescript";

const [name, planFile] = process.argv.slice(2);
const file = `src/lib/${name}.ts`;
const src = fs.readFileSync(file, "utf8");
const plan = JSON.parse(fs.readFileSync(planFile, "utf8"));

const re = /(export const (\w+Topics)\s*:[^=]*=\s*)(\{[\s\S]*\})\s*;\s*$/;
const mt = src.match(re);
if (!mt) throw new Error("Topics-Block nicht gefunden");
const topics = JSON.parse(mt[3]);

const all = Object.values(topics);
for (const f of plan.remove ?? []) {
  let hit = false;
  for (const t of all) {
    const n = t.exercises.length;
    t.exercises = t.exercises.filter((e) => e.folder !== f);
    if (t.exercises.length !== n) hit = true;
  }
  if (!hit) console.warn("remove: nicht gefunden", f);
}
for (const [f, slug] of Object.entries(plan.move ?? {})) {
  if (!topics[slug]) throw new Error("Zielthema fehlt: " + slug);
  let ex;
  for (const t of all) {
    const i = t.exercises.findIndex((e) => e.folder === f);
    if (i >= 0) { ex = t.exercises.splice(i, 1)[0]; break; }
  }
  if (!ex) { console.warn("move: nicht gefunden", f); continue; }
  topics[slug].exercises.push(ex);
}
for (const [slug, patch] of Object.entries(plan.topic ?? {})) Object.assign(topics[slug], patch);

fs.writeFileSync(file, src.slice(0, mt.index) + mt[1] + JSON.stringify(topics, null, 2) + ";\n");
console.log("ok:", file);
