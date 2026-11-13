/**
 * Bandwidth's game art. Characters, world icons and shop items are illustrated images (soft matte 3D,
 * made for Bandwidth in Figma) served from /public/art; small UI glyphs (hearts, speaker, mic) stay inline SVG.
 * Every piece is decorative (empty alt / aria-hidden); meaning is always carried by text nearby.
 */
import type { CSSProperties } from "react";

const INK = "#173b63";
const S = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

type ArtProps = { size?: number; className?: string; style?: CSSProperties };
const svg = (size: number, className: string | undefined, style: CSSProperties | undefined, children: React.ReactNode, vb = "0 0 64 64") => (
  <svg width={size} height={size} viewBox={vb} className={className} style={style} aria-hidden="true" focusable="false">{children}</svg>
);

/** One illustrated image from /public/art. */
export function Art({ name, size = 64, className, style }: ArtProps & { name: string }) {
  return <img src={`/art/${name}.webp`} width={size} height={size} alt="" aria-hidden="true" draggable={false} decoding="async"
    className={`gart${className ? ` ${className}` : ""}`} style={style} />;
}

/* ---------- World icons (one per game) ---------- */

export function WorldIcon({ game, size = 56, className }: ArtProps & { game: string }) {
  return <Art name={game === "boss" ? "boss-7" : `world-${game}`} size={size} className={className} />;
}

export const Coin = (p: ArtProps) => <Art name="coin" size={p.size ?? 24} className={p.className} />;
export const Chest = (p: ArtProps) => <Art name="chest" size={p.size ?? 96} className={p.className} />;
export const FreezeArt = (p: ArtProps) => <Art name="freeze" size={p.size ?? 64} className={p.className} />;

/* ---------- Hearts, lives, crowns ---------- */

export function Life({ kind, on = true, size = 22 }: { kind: "heart" | "block" | "star" | "page" | "snake"; on?: boolean; size?: number }) {
  const fill = on ? { heart: "#ff3d6e", block: "#dc9b58", star: "#ffc72c", page: "#fff4cc", snake: "#5fbf3a" }[kind] : "#d7dde6";
  const st = { ...S, strokeWidth: 2.5, stroke: on ? INK : "#9aa7b8" };
  return svg(size, undefined, undefined, (() => {
    switch (kind) {
      case "heart": return <path d="M12 21s-9-5.6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.4-9 12-9 12Z" fill={fill} {...st} />;
      case "block": return <rect x="3" y="7" width="18" height="10" rx="2" fill={fill} {...st} />;
      case "star": return <path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.6L12 17.2l-5.9 3.2 1.3-6.6L2.5 9.3l6.6-.8Z" fill={fill} {...st} />;
      case "page": return <path d="M5 3h10l4 4v14H5Z M15 3v4h4" fill={fill} {...st} />;
      case "snake": return <path d="M5 17c0-4 4-5 7-3s7 2 7-2-6-4-6-8" fill="none" stroke={fill} strokeWidth={5} strokeLinecap="round" />;
    }
  })(), "0 0 24 24");
}

export function Crown({ size = 26 }: ArtProps) {
  return svg(size, undefined, undefined, <path d="M3 17 5 7l5 5 4-8 4 8 5-5 2 10Z M4 20h20" fill="#ffd95c" {...S} strokeWidth={2.2} />, "0 0 28 24");
}

export function Speaker({ on, size = 20 }: { on: boolean; size?: number }) {
  return svg(size, undefined, undefined, <>
    <path d="M4 9h4l5-4v14l-5-4H4Z" fill="currentColor" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
    {on ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      : <path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />}
  </>, "0 0 24 24");
}

export function Mic({ size = 20 }: ArtProps) {
  return svg(size, undefined, undefined, <>
    <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </>, "0 0 24 24");
}

/* ---------- Monsters for Boss Battles: Goblin, Slime, Troll, Owl, Phantom, Wizard, Dragon ---------- */

export function Monster({ kind, size = 160, className, style }: ArtProps & { kind: number }) {
  return <Art name={`boss-${(kind % 7) + 1}`} size={size} className={className} style={style} />;
}

/* ---------- Word Kitchen customers: four regulars; mood shows as a ring and a little motion ---------- */

export function Customer({ seed, mood, size = 88 }: { seed: number; mood: "happy" | "ok" | "meh" | "cross" | "angry"; size?: number }) {
  return <span className={`gart-cust is-${mood}`} style={{ width: size, height: size }}><Art name={`cust-${(seed % 4) + 1}`} size={size} /></span>;
}

/* ---------- Pronunciation Racer karts ---------- */

const KART_TINT: Record<string, string> = { "#49b8f2": "hue-rotate(200deg) saturate(1.1)", "#ffd95c": "hue-rotate(48deg) brightness(1.25) saturate(1.2)" };
export function Kart({ color, size = 64, className }: ArtProps & { color: string }) {
  return <Art name="world-racer" size={size} className={className} style={{ filter: KART_TINT[color] }} />;
}

export function FinishFlag({ size = 30 }: ArtProps) {
  return svg(size, undefined, undefined, <>
    <path d="M6 4v26" {...S} />
    <path d="M6 5h20v14H6Z" fill="#fff" {...S} strokeWidth={2} />
    <path d="M6 5h5v5H6Zm10 0h5v5h-5ZM11 10h5v5h-5Zm10 0h5v5h-5ZM6 15h5v4H6Zm10 0h5v4h-5Z" fill={INK} />
  </>, "0 0 30 32");
}

/* ---------- Golf ---------- */

export function GolfFlag({ size = 44 }: ArtProps) {
  return svg(size, undefined, undefined, <>
    <ellipse cx="14" cy="42" rx="9" ry="3" fill="#1f5a24" />
    <path d="M14 41V5" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
    <path d="M14 6l18 6-18 7Z" fill="#ff3d4f" />
  </>, "0 0 40 46");
}

export function Club({ size = 18 }: ArtProps) {
  return svg(size, undefined, undefined, <path d="M18 3 8 17M8 17l-4 2 1 2 6-1Z" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />, "0 0 24 24");
}

/* ---------- Story Builder covers ---------- */

const COVER = [
  ["#ffd95c", "#ff914d"], ["#ff85b3", "#6d45c9"], ["#49b8f2", "#173b63"], ["#8bd77b", "#1f8a68"],
  ["#ff914d", "#c4521b"], ["#b49bff", "#3a2a8c"], ["#5fd1b9", "#176796"],
];
export function StoryCover({ index, size = 120 }: { index: number; title?: string; size?: number }) {
  const [a, b] = COVER[index % COVER.length];
  return (
    <span className="gart-cover" style={{ width: size * 0.8, height: size, background: `linear-gradient(150deg, ${a}, ${b})` }} aria-hidden="true">
      <Art name="world-story" size={size * 0.62} />
    </span>
  );
}
