/**
 * The nine Bandwidth bands. Colours map to the Stack logo:
 * A1 green, A2 yellow, B1 orange, B2 pink, C1 cerulean, C2 deep blue.
 */
export type BandId = "A1+" | "A2" | "A2+" | "B1" | "B1+" | "B2" | "B2+" | "C1" | "C2";

export type Band = {
  id: BandId;
  fill: string;
  tint: string;
  /** Text colour that passes contrast on `fill`. */
  onFill: string;
  canDo: string;
};

export const BANDS: Band[] = [
  { id: "A1+", fill: "var(--band-a1)", tint: "var(--tint-a1)", onFill: "var(--ink)", canDo: "Introduce yourself, talk about your day and understand short messages." },
  { id: "A2", fill: "var(--band-a2)", tint: "var(--tint-a2)", onFill: "var(--ink)", canDo: "Tell people what you did, make plans and handle everyday situations." },
  { id: "A2+", fill: "var(--band-a2)", tint: "var(--tint-a2)", onFill: "var(--ink)", canDo: "Share opinions, tell a story in order and keep a conversation going." },
  { id: "B1", fill: "var(--band-b1)", tint: "var(--tint-b1)", onFill: "var(--ink)", canDo: "Explain and defend your ideas, follow podcasts and write a clear email." },
  { id: "B1+", fill: "var(--band-b1)", tint: "var(--tint-b1)", onFill: "var(--ink)", canDo: "Give a short talk, compare options and write reviews people want to read." },
  { id: "B2", fill: "var(--band-b2)", tint: "var(--tint-b2)", onFill: "var(--ink)", canDo: "Argue a position, read between the lines and switch between formal and casual." },
  { id: "B2+", fill: "var(--band-b2)", tint: "var(--tint-b2)", onFill: "var(--ink)", canDo: "Spot irony, persuade an audience and lead a discussion." },
  { id: "C1", fill: "var(--band-c1)", tint: "var(--tint-c1)", onFill: "var(--ink)", canDo: "Read classic literature, build long arguments and understand many accents." },
  { id: "C2", fill: "var(--band-c2)", tint: "var(--tint-c2)", onFill: "var(--white)", canDo: "Write with your own voice and catch every joke, reference and nuance." },
];
