type Props = {
  /** Height of the mark in px; wordmark scales with it. */
  size?: number;
  /** "light" for light backgrounds, "dark" for navy backgrounds. */
  tone?: "light" | "dark";
  /** Show only the stacked-b mark. */
  markOnly?: boolean;
};

/** The six stripes of the Stack mark, top (C2) to bottom (A1). */
const STRIPES = [
  { w: 12, light: "#173B63", dark: "#FFFFFF" },
  { w: 12, light: "#49B8F2", dark: "#49B8F2" },
  { w: 34, light: "#FF85B3", dark: "#FF85B3" },
  { w: 46, light: "#FF914D", dark: "#FF914D" },
  { w: 46, light: "#FFD95C", dark: "#FFD95C" },
  { w: 34, light: "#8BD77B", dark: "#8BD77B" },
];

export function StackMark({ size = 40, tone = "light" }: { size?: number; tone?: "light" | "dark" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      {STRIPES.map((s, i) => (
        <rect key={i} x="4" y={2 + i * 9} width={s.w} height="7" rx="3.5" fill={tone === "light" ? s.light : s.dark} />
      ))}
    </svg>
  );
}

export function Logo({ size = 36, tone = "light", markOnly = false }: Props) {
  const ink = tone === "light" ? "#173B63" : "#FFFFFF";
  const accent = tone === "light" ? "#1F7FB6" : "#7FD0F7";
  const sub = tone === "light" ? "#3C5A7A" : "#BCEBFF";
  return (
    <span
      role="img"
      aria-label="Bandwidth EFL"
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.28 }}
    >
      <StackMark size={size} tone={tone} />
      {!markOnly && (
        <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }} aria-hidden="true">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: size * 0.72,
              letterSpacing: "-0.04em",
              color: ink,
            }}
          >
            band<span style={{ color: accent }}>width</span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: Math.max(9, size * 0.22),
              letterSpacing: "0.28em",
              color: sub,
              marginTop: size * 0.08,
              paddingLeft: 2,
            }}
          >
            EFL
          </span>
        </span>
      )}
    </span>
  );
}
