/** Lenient answer matching: case, spacing, curly quotes, final punctuation and common contractions don't matter. */
const CONTRACTIONS: [RegExp, string][] = [
  [/\bwon't\b/g, "will not"], [/\bcan't\b/g, "cannot"], [/\bshan't\b/g, "shall not"],
  [/n't\b/g, " not"], [/'re\b/g, " are"], [/'ve\b/g, " have"], [/'ll\b/g, " will"], [/\bi'm\b/g, "i am"],
  [/\bcan not\b/g, "cannot"],
];

export function normalise(s: string): string {
  let t = s.toLowerCase().replace(/[‘’`´]/g, "'").replace(/[“”]/g, '"');
  for (const [re, rep] of CONTRACTIONS) t = t.replace(re, rep);
  return t.replace(/[.,!?;:"]+/g, " ").replace(/\s+/g, " ").trim();
}

export const matches = (given: string, accept: string[]) => {
  const g = normalise(given);
  return g.length > 0 && accept.some((a) => normalise(a) === g);
};

/** Share of target words heard, in order-insensitive form (for speech). */
export function overlap(heard: string, target: string): number {
  const want = normalise(target).split(" ");
  const got = new Set(normalise(heard).split(" "));
  return want.filter((w) => got.has(w)).length / want.length;
}

export const wordCount = (t: string) => (t.trim().match(/[A-Za-zÀ-ÿ0-9'’-]+/g) ?? []).length;

export function runChecks(text: string, checks: { label: string; pattern: string; min: number }[]) {
  return checks.map((c) => {
    const n = (text.match(new RegExp(c.pattern, "gi")) ?? []).length;
    return { ...c, found: n, ok: n >= c.min };
  });
}

export function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
