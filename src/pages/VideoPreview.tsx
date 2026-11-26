import { AuthLayout } from "../app/AuthLayout";
import { LISTENING_BASE } from "../lib/placementApi";

/** Narration review for grammar video 1, before the pictures are added. Open at #listen-video-1. */
const PARTS = [
  { title: "Mini scene", text: "Hi! I'm Sofia. I am thirteen. This is Leo. He is my friend. And this is my bike. It is red!" },
  { title: "Family photo", text: "Look! This is my mum. She is a teacher. This is my brother, Tomás. He is ten. And this is my dog. It is small." },
  { title: "The rule", text: "Look. I am. You are. He is. She is. It is. A boy or a man: he. A girl or a woman: she. A thing or an animal: it." },
  { title: "Three examples", text: "I am happy. You are my friend. It is a big dog." },
  { title: "Short forms", text: "Say it short. I'm. You're. He's. She's. It's." },
  { title: "Say it with me", text: "Now you! Say it with me. I'm Sofia. … She's my mum. … It's my bike. … Great!" },
  { title: "The Spanish speaker mistake", text: "Careful! In English, we always say who. Not: \"Is my friend.\" He is my friend." },
  { title: "Level-up word", text: "Level-up word: classmate. Leo is my classmate. He is nice." },
  { title: "Your turn", text: "Your turn! Tomás is my brother. He or she? … He! He is ten. This is my bag. She or it? … It! It is blue." },
  { title: "Recap and ending", text: "I am. You are. He, she, it is. Boost your bandwidth!" },
];

export function VideoPreview() {
  return (
    <AuthLayout
      title="Video 1: the narration"
      intro={<p>Pre-A1 · I am, you are, he/she/it is · voice: Mira. Press play on each part. The pictures come next.</p>}
    >
      <ol className="vp-list">
        {PARTS.map((p, i) => (
          <li key={p.title} className="vp-item">
            <h2 className="vp-title">{i + 1}. {p.title}</h2>
            <p className="vp-text">{p.text}</p>
            <audio className="vp-audio" controls preload="none" src={`${LISTENING_BASE}p/vid1-${String(i + 1).padStart(2, "0")}.mp3`} />
          </li>
        ))}
      </ol>
    </AuthLayout>
  );
}
