/**
 * The shop catalogue. Prices are enforced by private.shop_item on the server; keep the two in step.
 * Nothing here makes learning easier: coins buy looks, streak protection and extra review games.
 */
export type ShopKind = "consumable" | "color" | "title" | "game";
export type ShopItem = { id: string; kind: ShopKind; name: string; price: number; blurb?: string };

/**
 * Profile skins. Ids stay the same as the server's catalogue; each is a foil gradient built from the band palette.
 * `bg` is the solid fallback (and the avatar ring), `grad` the full skin, `ink` the text colour on top.
 */
export const COLORS: Record<string, { bg: string; grad: string; ink: string }> = {
  sky: { bg: "#1f8fd1", grad: "linear-gradient(135deg, #00b3a4 0%, #49b8f2 50%, #2f6fe0 100%)", ink: "#ffffff" },
  mint: { bg: "#3ddc97", grad: "linear-gradient(135deg, #d4f76a 0%, #8bd77b 45%, #22b8a0 100%)", ink: "#0d2440" },
  sunset: { bg: "#ff6a3d", grad: "linear-gradient(135deg, #ffd95c 0%, #ff914d 40%, #ff3d6e 100%)", ink: "#0d2440" },
  grape: { bg: "#8b4fd8", grad: "linear-gradient(135deg, #6d45c9 0%, #b04fd8 50%, #ff85b3 100%)", ink: "#ffffff" },
  midnight: { bg: "#1b2a6b", grad: "linear-gradient(160deg, #0d2440 0%, #3a2a8c 55%, #00b3a4 120%)", ink: "#ffffff" },
  gold: { bg: "#f2c230", grad: "linear-gradient(135deg, #fff1a8 0%, #f2c230 40%, #d98b1b 70%, #fff1a8 100%)", ink: "#0d2440" },
};

/** Rarity is decided by price, so it always matches the server. */
export const rarity = (price: number) => price === 0 ? "Starter" : price < 70 ? "Rare" : price < 110 ? "Epic" : "Legendary";

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
  { id: "color:sky", kind: "color", name: "Lagoon", price: 0 },
  { id: "color:mint", kind: "color", name: "Lime pop", price: 40 },
  { id: "color:sunset", kind: "color", name: "Sunset", price: 40 },
  { id: "color:grape", kind: "color", name: "Grape", price: 40 },
  { id: "color:midnight", kind: "color", name: "Aurora", price: 80 },
  { id: "color:gold", kind: "color", name: "Gold foil", price: 120 },
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
