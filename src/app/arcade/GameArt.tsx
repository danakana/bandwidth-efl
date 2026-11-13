/**
 * Bandwidth's game illustrations: one hand-drawn style in place of emoji.
 * Flat fills from the band palette, a 3px navy outline, rounded joins and one soft highlight.
 * Every piece is decorative (aria-hidden); meaning is always carried by text nearby.
 */
import type { CSSProperties } from "react";

const INK = "#173b63";
const S = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

type ArtProps = { size?: number; className?: string; style?: CSSProperties };
const svg = (size: number, className: string | undefined, style: CSSProperties | undefined, children: React.ReactNode, vb = "0 0 64 64") => (
  <svg width={size} height={size} viewBox={vb} className={className} style={style} aria-hidden="true" focusable="false">{children}</svg>
);

/* ---------- World icons (one per game) ---------- */

export function WorldIcon({ game, size = 56, className }: ArtProps & { game: string }) {
  switch (game) {
    case "tower": return svg(size, className, undefined, <>
      <rect x="14" y="44" width="36" height="10" rx="2" fill="#f2c48d" {...S} />
      <rect x="18" y="33" width="30" height="10" rx="2" fill="#dc9b58" {...S} transform="rotate(-3 33 38)" />
      <rect x="15" y="22" width="32" height="10" rx="2" fill="#f2c48d" {...S} transform="rotate(2 31 27)" />
      <rect x="40" y="10" width="18" height="9" rx="2" fill="#ff7a59" {...S} transform="rotate(14 49 14)" />
      <path d="M8 57h48" {...S} />
    </>);
    case "rain": return svg(size, className, undefined, <>
      <path d="M16 30a10 10 0 0 1 2-19.8A13 13 0 0 1 43 12a9 9 0 1 1 3 18Z" fill="#fff" {...S} />
      <path d="M22 38c-2 4-4 6-4 9a4 4 0 0 0 8 0c0-3-2-5-4-9Z M40 36c-2 4-4 6-4 9a4 4 0 0 0 8 0c0-3-2-5-4-9Z M31 46c-2 3-3 5-3 7a3 3 0 0 0 6 0c0-2-1-4-3-7Z" fill="#49b8f2" {...S} />
    </>);
    case "crush": return svg(size, className, undefined, <>
      <circle cx="22" cy="24" r="12" fill="#ff85b3" {...S} />
      <rect x="32" y="30" width="22" height="22" rx="6" fill="#fff" {...S} />
      <rect x="12" y="40" width="16" height="16" rx="8" fill="#6d45c9" {...S} />
      <path d="M18 19a5 5 0 0 1 6-3" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#ffd95c" {...S} strokeWidth={2} />
    </>);
    case "kitchen": return svg(size, className, undefined, <>
      <path d="M18 30c-6 0-9-5-7-10 2-4 7-5 10-3 1-6 7-9 12-7 4-4 12-3 14 3 5-1 10 3 9 9-1 4-4 7-8 7Z" fill="#fff" {...S} />
      <rect x="18" y="30" width="28" height="14" rx="2" fill="#fff" {...S} />
      <ellipse cx="32" cy="52" rx="24" ry="6" fill="#ffd95c" {...S} />
      <path d="M24 37h16" {...S} />
    </>);
    case "golf": return svg(size, className, undefined, <>
      <ellipse cx="32" cy="52" rx="26" ry="8" fill="#8bd77b" {...S} />
      <path d="M34 50V10" {...S} />
      <path d="M34 11l18 6-18 7Z" fill="#ff7a59" {...S} />
      <ellipse cx="34" cy="51" rx="4" ry="2" fill={INK} />
      <circle cx="16" cy="46" r="5" fill="#fff" {...S} />
    </>);
    case "boss": return <Monster size={size} kind={6} className={className} />;
    case "snake": return svg(size, className, undefined, <>
      <path d="M10 46c0-8 8-10 14-6s14 4 14-4-12-8-12-16 8-10 16-10" fill="none" stroke={INK} strokeWidth="13" strokeLinecap="round" />
      <path d="M10 46c0-8 8-10 14-6s14 4 14-4-12-8-12-16 8-10 16-10" fill="none" stroke="#5fbf3a" strokeWidth="7" strokeLinecap="round" />
      <circle cx="44" cy="10" r="7" fill="#5fbf3a" {...S} />
      <circle cx="46" cy="8" r="1.8" fill={INK} />
      <path d="M50 12l5 2M50 12l5-1" stroke="#ff3d6e" strokeWidth="2" strokeLinecap="round" />
    </>);
    case "racer": return <Kart size={size} color="#ff3d6e" className={className} />;
    case "story": return svg(size, className, undefined, <>
      <path d="M8 16c8-4 16-4 24 2v36c-8-6-16-6-24-2Z" fill="#fff" {...S} />
      <path d="M56 16c-8-4-16-4-24 2v36c8-6 16-6 24-2Z" fill="#fff4cc" {...S} />
      <path d="M14 24c4-1 8-1 12 1M14 31c4-1 8-1 12 1M38 25c4-2 8-2 12-1M38 32c4-2 8-2 12-1" stroke="#9aa7b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 4l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1Z" fill="#ffd95c" {...S} strokeWidth={2} />
    </>);
    default: return null;
  }
}

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

/* ---------- Monsters for Boss Battles: one body, seven characters ---------- */

const MONSTER = [
  { body: "#8bd77b", belly: "#e3f6de", horns: "ears", eyes: 1, teeth: true },     // Grumble the Goblin
  { body: "#5fd1b9", belly: "#d9fbf3", horns: "drip", eyes: 3, teeth: false },    // Syntax Slime
  { body: "#a3876a", belly: "#efe2d2", horns: "tusk", eyes: 2, teeth: true },     // Tense Troll
  { body: "#b49bff", belly: "#efe8ff", horns: "tufts", eyes: 2, teeth: false },   // Professor Preposition
  { body: "#d7e3f4", belly: "#ffffff", horns: "wisp", eyes: 2, teeth: false },    // Phrasal Phantom
  { body: "#6d45c9", belly: "#d8ccff", horns: "hat", eyes: 2, teeth: true },      // Lord Lexicon
  { body: "#ff5d3d", belly: "#ffd9a0", horns: "dragon", eyes: 2, teeth: true },   // Grammar Dragon
] as const;

export function Monster({ kind, size = 160, className, style }: ArtProps & { kind: number }) {
  const m = MONSTER[kind % MONSTER.length];
  return svg(size, className, style, <>
    <ellipse cx="60" cy="112" rx="34" ry="5" fill="rgba(0,0,0,0.25)" />
    {m.horns === "ears" && <><path d="M26 44 6 30l26 2Z" fill={m.body} {...S} /><path d="M94 44l20-14-26 2Z" fill={m.body} {...S} /></>}
    {m.horns === "tusk" && <><path d="M34 34l-8-18 16 12Z M86 34l8-18-16 12Z" fill="#efe2d2" {...S} /></>}
    {m.horns === "tufts" && <><path d="M36 30c-4-10 2-16 8-14M84 30c4-10-2-16-8-14" fill="none" {...S} /></>}
    {m.horns === "hat" && <><path d="M34 34 60 2l26 32Z" fill={INK} {...S} /><circle cx="60" cy="6" r="4" fill="#ffd95c" {...S} strokeWidth={2} /><path d="M46 24h28" stroke="#ffd95c" strokeWidth="4" /></>}
    {m.horns === "dragon" && <><path d="M36 32 26 6l20 20Z M84 32l10-26-20 20Z" fill="#ffd95c" {...S} /><path d="M98 70l18-14-4 22Z M22 70 4 56l4 22Z" fill="#ff914d" {...S} /></>}
    {m.horns === "wisp"
      ? <path d="M22 108c0-6 4-8 4-14V58a34 34 0 0 1 68 0v36c0 6 4 8 4 14-6 0-8-6-14-6s-8 6-14 6-8-6-14-6-8 6-14 6-8-6-14-6-8 6-14 6Z" fill={m.body} {...S} />
      : m.horns === "drip"
        ? <path d="M22 104c-4-30 6-70 38-70s42 40 38 70c-4 4-8-6-12 0s-6 6-10 0-8 6-12 0-8-6-12 2-8-6-12-2-8 4-12 0Z" fill={m.body} {...S} />
        : <rect x="24" y="32" width="72" height="76" rx="34" fill={m.body} {...S} />}
    <ellipse cx="60" cy="84" rx="22" ry="16" fill={m.belly} opacity="0.9" />
    {Array.from({ length: m.eyes }, (_, i) => {
      const cx = m.eyes === 1 ? 60 : m.eyes === 2 ? 46 + i * 28 : 40 + i * 20;
      const r = m.eyes === 1 ? 13 : 9;
      return <g key={i}><circle cx={cx} cy="58" r={r} fill="#fff" {...S} /><circle cx={cx + 2} cy="60" r={r * 0.45} fill={INK} /><circle cx={cx + 4} cy="56" r={r * 0.15} fill="#fff" /></g>;
    })}
    <path d="M44 78c6 6 26 6 32 0" fill={m.teeth ? "#fff" : "none"} {...S} />
    {m.teeth && <path d="M50 80l3 5 3-4 4 4 4-4 3 4 3-5" fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round" />}
    <path d="M34 50a10 10 0 0 1 8-10" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" strokeLinecap="round" />
  </>, "0 0 120 120");
}

/* ---------- Word Kitchen customers: simple portraits ---------- */

const SKIN = ["#f6d2b0", "#e0a97e", "#c68653", "#8d5a3b", "#5e3b26"];
const HAIR = ["#2b1b12", "#5a3a1e", "#c9792c", "#e9c46a", "#9aa7b8", "#173b63"];
const SHIRT = ["#49b8f2", "#ff85b3", "#8bd77b", "#ffd95c", "#ff914d", "#6d45c9"];

export function Customer({ seed, mood, size = 88 }: { seed: number; mood: "happy" | "ok" | "meh" | "cross" | "angry"; size?: number }) {
  const skin = SKIN[seed % SKIN.length], hair = HAIR[(seed * 3) % HAIR.length], shirt = SHIRT[(seed * 5) % SHIRT.length];
  const style = seed % 4;
  const mouth = { happy: "M24 40q8 8 16 0", ok: "M25 41q7 4 14 0", meh: "M25 42h14", cross: "M25 43q7-4 14 0", angry: "M24 44q8-7 16 0" }[mood];
  return svg(size, undefined, undefined, <>
    <path d="M10 64c0-12 10-18 22-18s22 6 22 18Z" fill={shirt} {...S} />
    {style === 1 && <path d="M12 34c-4-16 6-26 20-26s24 10 20 26c-2 8-6 14-6 14H18s-4-6-6-14Z" fill={hair} {...S} />}
    <circle cx="32" cy="32" r="16" fill={skin} {...S} />
    {style === 0 && <path d="M16 28c0-10 8-14 16-14s16 4 16 14c-6-2-10-6-12-10-4 6-12 9-20 10Z" fill={hair} {...S} />}
    {style === 1 && <path d="M16 28c2-9 8-13 16-13s14 4 16 13c-8 0-16-4-16-8-2 4-8 8-16 8Z" fill={hair} {...S} />}
    {style === 2 && <path d="M17 26c0-9 7-12 15-12s15 3 15 12c-3-3-6-4-9-4-2-2-4-3-6-3s-4 1-6 3c-3 0-6 1-9 4Z" fill={hair} {...S} />}
    {style === 3 && <><circle cx="32" cy="14" r="7" fill={hair} {...S} /><path d="M17 27c0-8 7-11 15-11s15 3 15 11c-5-2-10-3-15-3s-10 1-15 3Z" fill={hair} {...S} /></>}
    {mood === "angry" || mood === "cross"
      ? <><path d="M22 27l6 2M42 27l-6 2" {...S} strokeWidth={2.5} /><circle cx="26" cy="32" r="2.2" fill={INK} /><circle cx="38" cy="32" r="2.2" fill={INK} /></>
      : <><circle cx="26" cy="32" r="2.4" fill={INK} /><circle cx="38" cy="32" r="2.4" fill={INK} /></>}
    {mood === "happy" && <><circle cx="21" cy="38" r="3" fill="#ff85b3" opacity="0.6" /><circle cx="43" cy="38" r="3" fill="#ff85b3" opacity="0.6" /></>}
    {mood === "angry" && <path d="M48 12l4-4M50 18l6-1M44 8l1-5" stroke="#ff3d6e" strokeWidth="2.5" strokeLinecap="round" />}
    <path d={mouth} fill="none" {...S} strokeWidth={2.5} />
  </>);
}

/* ---------- Pronunciation Racer karts ---------- */

export function Kart({ color, size = 64, className }: ArtProps & { color: string }) {
  return svg(size, className, undefined, <>
    <path d="M6 40c0-6 4-10 10-10h10l6-10h14l4 10h6c3 0 6 3 6 6v6H6Z" fill={color} {...S} />
    <path d="M34 22h10l3 8H30Z" fill="#bcebff" {...S} strokeWidth={2} />
    <path d="M10 34h12" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    <circle cx="18" cy="44" r="7" fill={INK} /><circle cx="18" cy="44" r="3" fill="#d7dde6" />
    <circle cx="48" cy="44" r="7" fill={INK} /><circle cx="48" cy="44" r="3" fill="#d7dde6" />
  </>, "0 0 64 56");
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
    <path d="M14 41V5" {...S} />
    <path d="M14 6l18 6-18 7Z" fill="#ff3d6e" {...S} />
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
export function StoryCover({ index, title, size = 120 }: { index: number; title: string; size?: number }) {
  const [a, b] = COVER[index % COVER.length];
  const id = `cv${index}`;
  return svg(size, undefined, undefined, <>
    <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
    <rect x="8" y="4" width="64" height="92" rx="6" fill={`url(#${id})`} {...S} />
    <path d="M16 4v92" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />
    <circle cx="44" cy="40" r="16" fill="rgba(255,255,255,0.25)" />
    <path d="M32 44l8-10 6 7 4-4 8 9Z" fill="rgba(255,255,255,0.85)" />
    <path d="M26 74h36M26 81h24" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" />
    <title>{title}</title>
  </>, "0 0 80 100");
}
