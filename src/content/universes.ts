/** The six Universes and the topics a student can pick inside each. */
export type UniverseId = "screens" | "arts" | "words" | "past" | "science" | "futures";

export type Universe = {
  id: UniverseId;
  name: string;
  colour: string;
  onColour: string;
  blurb: string;
  topics: string[];
};

export const UNIVERSE_LIST: Universe[] = [
  {
    id: "screens", name: "Screens & Play", colour: "var(--band-c1)", onColour: "var(--ink)",
    blurb: "Games, film and series, and how they're made",
    topics: ["Video games", "Film", "Series", "Animation and anime", "Game design", "Streaming and creators"],
  },
  {
    id: "arts", name: "Arts & Making", colour: "var(--band-b2)", onColour: "var(--ink)",
    blurb: "Making things and looking closely at them",
    topics: ["Visual arts", "Street art", "Design", "Photography", "Music", "Architecture", "Fashion"],
  },
  {
    id: "words", name: "Words & Ideas", colour: "var(--band-b1)", onColour: "var(--ink)",
    blurb: "Big questions, great writing, your own voice",
    topics: ["Philosophy", "Classic literature", "Poetry", "Essays and opinion", "Creative writing", "Newsletters and blogs"],
  },
  {
    id: "past", name: "Past & People", colour: "var(--band-a2)", onColour: "var(--ink)",
    blurb: "How we got here and who changed things",
    topics: ["History", "Human rights", "Cultures", "Mythology", "Social movements"],
  },
  {
    id: "science", name: "Science & Numbers", colour: "var(--band-a1)", onColour: "var(--ink)",
    blurb: "How the world works, from atoms to galaxies",
    topics: ["Space", "Maths", "The human body", "Climate", "Tech and AI", "Animals and nature"],
  },
  {
    id: "futures", name: "Futures", colour: "var(--band-c2)", onColour: "var(--white)",
    blurb: "Careers and the English they really use",
    topics: ["Journalism", "Science and research", "Content creation", "Law", "Medicine", "Game development", "Business", "Translation"],
  },
];
