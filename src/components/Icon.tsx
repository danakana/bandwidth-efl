/**
 * Bandwidth's own icon set, drawn on a 24px grid with a 2px stroke
 * (same weight as the skill-tree icons), so icons look consistent
 * on every device instead of depending on emoji fonts.
 */
import type { ReactElement } from "react";

export type IconName = "flame" | "coin" | "bolt" | "swords" | "star" | "check" | "lock" | "x" | "play" | "arrow" | "sparkle" | "trophy" | "headphones" | "mic" | "book" | "clock" | "snow";

const P: Record<IconName, ReactElement> = {
  snow: <path d="M12 2.5v19M3.8 7.25l16.4 9.5M3.8 16.75l16.4-9.5M9.5 4l2.5 2 2.5-2M9.5 20l2.5-2 2.5 2M4.2 10.4l3-.6-1-3M19.8 13.6l-3 .6 1 3M4.2 13.6l3 .6-1 3M19.8 10.4l-3-.6 1-3" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  flame: <path d="M12 3c.5 3.2-2.5 4.8-2.5 8a2.5 2.5 0 0 0 5 0c0-1.2-.5-2-1-2.8C16.5 9.5 18 12 18 14.5A6 6 0 0 1 6 14.5C6 9.5 10.5 7.5 12 3z" />,
  coin: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /></>,
  bolt: <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z" />,
  swords: <path d="M4 4l9 9M4 4v3.5M4 4h3.5M20 4l-9 9M20 4v3.5M20 4h-3.5M8 16l-3 3M16 16l3 3M10 14l-4 4M14 14l4 4" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  play: <path d="M8 5.5v13l10.5-6.5z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  trophy: <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />,
  headphones: <path d="M4 15v-3a8 8 0 0 1 16 0v3M4 15h3v5H5a1 1 0 0 1-1-1zM20 15h-3v5h2a1 1 0 0 0 1-1z" />,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>,
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />,
};

export function Icon({ name, size = 20, fill = false, className }: { name: IconName; size?: number; fill?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" focusable="false"
      fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {P[name]}
    </svg>
  );
}
