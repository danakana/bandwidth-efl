import { readdirSync } from "node:fs";
const R = new URL("../src/content", import.meta.url).pathname;
const files = [
  ["placement", `${R}/placement.ts`],
  ...readdirSync(`${R}/assessments`).filter(f => !/index|types/.test(f)).map(f => ["assessments", `${R}/assessments/${f}`]),
  ...readdirSync(`${R}/practice`).filter(f => /^[a-c]/.test(f)).map(f => ["practice", `${R}/practice/${f}`]),
  ...["icfes","aptis","ielts","toefl"].map(f => ["exams", `${R}/exams/${f}.ts`]),
  ...["a-levels","b-levels","c-levels"].map(f => ["library", `${R}/library/${f}.ts`]),
];
type Row = { bank: string; file: string; opts: string[]; ans: number; stem: string };
const rows: Row[] = []; const seen = new WeakSet();
function walk(o: any, bank: string, file: string) {
  if (!o || typeof o !== "object" || seen.has(o)) return; seen.add(o);
  if (Array.isArray(o.options) && typeof o.answer === "number" && o.options.length >= 2) {
    const opts = o.options.map((x: any) => typeof x === "string" ? x : x?.text ?? "");
    if (opts.every((t: string) => t)) rows.push({ bank, file, opts, ans: o.answer, stem: o.prompt ?? o.q ?? o.stem ?? o.context ?? "" });
  }
  for (const v of Object.values(o)) walk(v, bank, file);
}
for (const [bank, f] of files) { const m = await import(f); walk(m, bank, f.split("/").slice(-2).join("/")); }
const len = (s: string) => s.replace(/\s+/g, " ").trim().length;
const by: Record<string, { n: number; longest: number; clear: number; chance: number }> = {};
const worst: Row[] = [];
for (const r of rows) {
  const L = r.opts.map(len); const a = L[r.ans]; const others = L.filter((_, i) => i !== r.ans);
  const b = (by[r.bank] ??= { n: 0, longest: 0, clear: 0, chance: 0 });
  b.n++; b.chance += 1 / r.opts.length;
  if (a > Math.max(...others)) b.longest++;
  // Clearly longest: 30% longer than every other option and at least 8 characters more.
  if (a >= Math.max(...others) * 1.3 && a - Math.max(...others) >= 8) { b.clear++; worst.push(r); }
}
console.log("bank          items  correct-is-longest  expected-by-chance  clearly-longest");
for (const [k, v] of Object.entries(by)) console.log(k.padEnd(13), String(v.n).padStart(5), `${Math.round(100*v.longest/v.n)}%`.padStart(19), `${Math.round(100*v.chance/v.n)}%`.padStart(19), String(v.clear).padStart(16));
const perFile: Record<string, number> = {}; for (const w of worst) perFile[w.file] = (perFile[w.file] ?? 0) + 1;
console.log("\nclearly-longest by file:", JSON.stringify(Object.entries(perFile).sort((a,b)=>b[1]-a[1]).slice(0,25)));
console.log("\nexamples:"); for (const w of worst.slice(0, 6)) console.log(" -", w.file, "|", w.opts.map((o,i)=> (i===w.ans?"*":"")+o).join(" / "));

// Banks that place students or decide band moves must not give the answer away by length.
const STRICT = ["placement", "assessments", "library", "exams"];
const fail = STRICT.filter((k) => by[k] && (by[k].longest / by[k].n > 0.4 || by[k].clear > 2));
if (fail.length) { console.error(`\nFAIL: the right answer is too often the longest option in: ${fail.join(", ")}`); process.exit(1); }
console.log("\nOK: no length bias in the placement test, Midpoints, Gates, library or exams.");
