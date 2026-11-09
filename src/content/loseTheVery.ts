/**
 * "Lose the VERY" demo rounds for the landing page.
 * Each round replaces a "very + adjective" with a more precise word,
 * teaching intensity and register, not just synonyms.
 */
export type Verdict = "best" | "works" | "miss";

export type Option = {
  word: string;
  verdict: Verdict;
  why: string;
};

export type Round = {
  before: string;
  target: string; // the phrase being replaced, as it appears in `before`
  after: string;
  context: string;
  options: Option[];
};

export const ROUNDS: Round[] = [
  {
    before: "After a ten-hour flight and no sleep, I was ",
    target: "very tired",
    after: ".",
    context: "Chatting with a friend",
    options: [
      { word: "exhausted", verdict: "best", why: "Exhausted means extremely tired, with no energy left. Strong, clear and fine anywhere." },
      { word: "worn out", verdict: "works", why: "Worn out works too. It's a little more casual than exhausted, perfect for a chat." },
      { word: "sleepy", verdict: "miss", why: "Sleepy means you want to sleep. It's too mild for ten hours and no rest." },
    ],
  },
  {
    before: "The view from the top of the mountain was ",
    target: "very beautiful",
    after: ".",
    context: "Writing a travel post",
    options: [
      { word: "breathtaking", verdict: "best", why: "Breathtaking means so beautiful it surprises you. Ideal for a view you want people to imagine." },
      { word: "gorgeous", verdict: "works", why: "Gorgeous works and sounds friendly. It's a bit less dramatic than breathtaking." },
      { word: "pretty", verdict: "miss", why: "Pretty is weaker than beautiful, so the sentence loses power instead of gaining it." },
    ],
  },
  {
    before: "Dear Principal, I am writing because the cafeteria food is ",
    target: "very bad",
    after: ".",
    context: "Email to your school principal",
    options: [
      { word: "unacceptable", verdict: "best", why: "Unacceptable is strong and formal. It fits an email to a principal and asks for action." },
      { word: "awful", verdict: "works", why: "Awful is correct, but it's more casual. In a formal email, unacceptable sounds more serious." },
      { word: "gross", verdict: "miss", why: "Gross is slang. Friends say it, but in a formal email to a principal it sounds rude." },
    ],
  },
];
