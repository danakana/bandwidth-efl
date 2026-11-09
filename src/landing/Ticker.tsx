const UPGRADES = [
  ["very tired", "exhausted", "var(--band-a1)"],
  ["very big", "enormous", "var(--band-a2)"],
  ["very happy", "thrilled", "var(--band-b1)"],
  ["very good", "outstanding", "var(--band-b2)"],
  ["very scared", "terrified", "var(--band-c1)"],
  ["very small", "tiny", "var(--band-a1)"],
  ["very old", "ancient", "var(--band-a2)"],
  ["very hungry", "starving", "var(--band-b1)"],
  ["very funny", "hilarious", "var(--band-b2)"],
  ["very surprised", "astonished", "var(--band-c1)"],
] as const;

/** Endless strip of "very" upgrades. Static for reduced motion. */
export function Ticker() {
  const items = [...UPGRADES, ...UPGRADES];
  return (
    <div className="ticker" aria-label="Examples of precise word choices">
      <ul className="ticker-track">
        {items.map(([from, to, colour], i) => (
          <li key={i} aria-hidden={i >= UPGRADES.length}>
            <s>{from}</s>
            <span className="ticker-arrow" aria-hidden="true" style={{ background: colour }} />
            <strong>{to}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
