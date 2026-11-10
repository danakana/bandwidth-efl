/**
 * The shop catalogue. Prices are enforced by private.shop_item on the server; keep the two in step.
 * Nothing here makes learning easier: coins buy looks, streak protection and extra review games.
 */
export type ShopKind = "consumable" | "color" | "title" | "game";
export type ShopItem = { id: string; kind: ShopKind; name: string; price: number; blurb?: string };

export const COLORS: Record<string, { bg: string; ink: string }> = {
  sky: { bg: "#2f7fc4", ink: "#ffffff" },
  mint: { bg: "#1f8a68", ink: "#ffffff" },
  sunset: { bg: "#c4521b", ink: "#ffffff" },
  grape: { bg: "#6d45c9", ink: "#ffffff" },
  midnight: { bg: "#0d2440", ink: "#ffffff" },
  gold: { bg: "#f2c230", ink: "#0d2440" },
};

export const TITLES: Record<string, string> = {
  learner: "Learner",
  "word-collector": "Word Collector",
  "night-owl": "Night Owl",
  "grammar-ninja": "Grammar Ninja",
  "accent-explorer": "Accent Explorer",
  "debate-captain": "Debate Captain",
  "error-hunter": "Error Hunter",
};

export const FREEZE: ShopItem = { id: "freeze", kind: "consumable", name: "Streak freeze", price: 60,
  blurb: "Miss a day and your streak survives. You can hold two." };

export const ITEMS: ShopItem[] = [
  { id: "game:speed", kind: "game", name: "Speed Round", price: 0, blurb: "60 seconds of quick questions from skills you've practised." },
  { id: "game:frenzy", kind: "game", name: "Fix-it Frenzy", price: 150, blurb: "90 seconds to find and fix as many mistakes as you can." },
  { id: "game:echo", kind: "game", name: "Echo Chamber", price: 200, blurb: "Hear it, type it. Eight dictations from your skills." },
  { id: "color:sky", kind: "color", name: "Sky", price: 0 },
  { id: "color:mint", kind: "color", name: "Mint", price: 40 },
  { id: "color:sunset", kind: "color", name: "Sunset", price: 40 },
  { id: "color:grape", kind: "color", name: "Grape", price: 40 },
  { id: "color:midnight", kind: "color", name: "Midnight", price: 80 },
  { id: "color:gold", kind: "color", name: "Gold", price: 120 },
  { id: "title:learner", kind: "title", name: "Learner", price: 0 },
  { id: "title:word-collector", kind: "title", name: "Word Collector", price: 50 },
  { id: "title:night-owl", kind: "title", name: "Night Owl", price: 60 },
  { id: "title:grammar-ninja", kind: "title", name: "Grammar Ninja", price: 80 },
  { id: "title:accent-explorer", kind: "title", name: "Accent Explorer", price: 80 },
  { id: "title:debate-captain", kind: "title", name: "Debate Captain", price: 100 },
  { id: "title:error-hunter", kind: "title", name: "Error Hunter", price: 100 },
];

export const owns = (purchases: string[], id: string) => (ITEMS.find((i) => i.id === id)?.price ?? 1) === 0 || purchases.includes(id);
export const ARCADE_DAILY_COINS = 30;
