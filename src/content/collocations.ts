/**
 * Collocations for Collocation Crush. Each band has two groups of "heads" (a verb or adjective)
 * with the words they go with. Inside a band, every partner belongs to ONE head only and sounds
 * wrong with the others, so the game never rejects a natural pair. Many target typical Spanish-speaker
 * mistakes (make/do, say/tell, strong/heavy). For teacher review.
 */
import type { BandId } from "./bands";

export type Head = { head: string; partners: string[] };
export type CollocationGroup = { name: string; heads: Head[] };

export const COLLOCATIONS: Record<BandId, CollocationGroup[]> = {
  "A1+": [
    { name: "Everyday verbs", heads: [
      { head: "have", partners: ["breakfast", "a shower", "a party", "fun", "a rest"] },
      { head: "play", partners: ["football", "the guitar", "video games", "chess", "cards"] },
      { head: "do", partners: ["homework", "the dishes", "exercise", "the housework"] },
      { head: "watch", partners: ["TV", "a film", "the news", "cartoons"] },
    ] },
    { name: "Going places", heads: [
      { head: "go", partners: ["shopping", "swimming", "to bed", "on holiday"] },
      { head: "ride", partners: ["a bike", "a horse", "a skateboard"] },
      { head: "brush", partners: ["your teeth", "your hair"] },
      { head: "listen to", partners: ["music", "the radio", "a podcast", "the teacher"] },
    ] },
  ],
  A2: [
    { name: "Make or do?", heads: [
      { head: "make", partners: ["a mistake", "a cake", "a plan", "a noise", "friends"] },
      { head: "do", partners: ["your best", "a course", "the washing-up", "a favour"] },
      { head: "take", partners: ["a photo", "a break", "an exam", "medicine"] },
      { head: "get", partners: ["lost", "married", "dressed", "angry"] },
    ] },
    { name: "Say or tell?", heads: [
      { head: "tell", partners: ["a joke", "the truth", "a lie", "a story"] },
      { head: "say", partners: ["sorry", "goodbye", "thank you", "hello"] },
      { head: "pay", partners: ["the bill", "by card", "in cash"] },
      { head: "send", partners: ["a message", "an email", "a postcard"] },
    ] },
  ],
  "A2+": [
    { name: "Catch, miss, spend", heads: [
      { head: "catch", partners: ["a cold", "a thief", "a ball", "fish"] },
      { head: "miss", partners: ["a class", "my family", "the point"] },
      { head: "spend", partners: ["the weekend", "a fortune", "the night"] },
      { head: "save", partners: ["the planet", "a file", "a life"] },
    ] },
    { name: "Jobs at home", heads: [
      { head: "fill in", partners: ["a form", "the gaps"] },
      { head: "set", partners: ["an alarm", "an example", "a goal"] },
      { head: "tidy", partners: ["your room", "your desk"] },
      { head: "throw away", partners: ["rubbish", "the leftovers"] },
    ] },
  ],
  B1: [
    { name: "Strong, heavy, high?", heads: [
      { head: "heavy", partners: ["rain", "traffic", "smoker"] },
      { head: "strong", partners: ["coffee", "wind", "smell"] },
      { head: "high", partners: ["temperature", "speed", "standards"] },
      { head: "deep", partners: ["sleep", "breath", "trouble"] },
    ] },
    { name: "Verbs that go together", heads: [
      { head: "pay", partners: ["a visit", "the price", "your respects"] },
      { head: "keep", partners: ["a secret", "calm", "in touch"] },
      { head: "break", partners: ["the rules", "the news", "the ice"] },
      { head: "give", partners: ["advice", "a speech", "permission"] },
    ] },
  ],
  "B1+": [
    { name: "Run, raise, reach", heads: [
      { head: "run", partners: ["a business", "a marathon", "a risk"] },
      { head: "raise", partners: ["money", "your hand", "prices"] },
      { head: "reach", partners: ["an agreement", "a target", "the top"] },
      { head: "lose", partners: ["weight", "your temper", "your way"] },
    ] },
    { name: "Common adjectives", heads: [
      { head: "close", partners: ["friend", "relative", "call"] },
      { head: "public", partners: ["transport", "holiday", "opinion"] },
      { head: "bright", partners: ["future", "smile", "spark"] },
      { head: "main", partners: ["course", "reason", "road"] },
    ] },
  ],
  B2: [
    { name: "Formal verbs", heads: [
      { head: "commit", partners: ["a crime", "an offence", "fraud"] },
      { head: "meet", partners: ["a deadline", "expectations", "demand"] },
      { head: "draw", partners: ["attention", "a distinction", "inspiration"] },
      { head: "take", partners: ["responsibility", "advantage", "place"] },
    ] },
    { name: "Adverb + adjective", heads: [
      { head: "bitterly", partners: ["disappointed", "cold"] },
      { head: "highly", partners: ["recommended", "unlikely", "regarded"] },
      { head: "deeply", partners: ["concerned", "moved", "rooted"] },
      { head: "fully", partners: ["aware", "booked", "recovered"] },
    ] },
  ],
  "B2+": [
    { name: "Academic verbs", heads: [
      { head: "pose", partners: ["a threat", "a challenge"] },
      { head: "bear", partners: ["in mind", "a resemblance", "the cost"] },
      { head: "conduct", partners: ["research", "a survey", "an interview"] },
      { head: "bridge", partners: ["the gap", "the divide"] },
    ] },
    { name: "Strong adverbs", heads: [
      { head: "utterly", partners: ["ridiculous", "exhausted", "useless"] },
      { head: "widely", partners: ["accepted", "known", "available"] },
      { head: "strongly", partners: ["disagree", "oppose", "believe"] },
      { head: "heavily", partners: ["taxed", "in debt", "populated"] },
    ] },
  ],
  C1: [
    { name: "C1 verb collocations", heads: [
      { head: "shed", partners: ["light on", "tears", "jobs"] },
      { head: "strike", partners: ["a balance", "a deal", "a chord"] },
      { head: "exert", partners: ["pressure", "influence", "control"] },
      { head: "voice", partners: ["concerns", "doubts", "support"] },
    ] },
    { name: "C1 adjective collocations", heads: [
      { head: "heated", partners: ["debate", "exchange", "row"] },
      { head: "compelling", partners: ["evidence", "reason", "case"] },
      { head: "sweeping", partners: ["changes", "reforms", "generalisation"] },
      { head: "narrow", partners: ["margin", "escape", "majority"] },
    ] },
  ],
  C2: [
    { name: "C2 verb collocations", heads: [
      { head: "allay", partners: ["fears", "suspicion"] },
      { head: "incur", partners: ["costs", "debt", "penalties"] },
      { head: "wreak", partners: ["havoc", "revenge"] },
      { head: "hone", partners: ["skills", "technique", "craft"] },
    ] },
    { name: "C2 adjective collocations", heads: [
      { head: "abject", partners: ["poverty", "failure"] },
      { head: "staunch", partners: ["supporter", "ally"] },
      { head: "tacit", partners: ["agreement", "approval", "understanding"] },
      { head: "scathing", partners: ["criticism", "attack", "review"] },
    ] },
  ],
};
