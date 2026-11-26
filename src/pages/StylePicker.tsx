import { AuthLayout } from "../app/AuthLayout";
import { LISTENING_BASE } from "../lib/placementApi";

/** The same video scene drawn in four styles, so the owner can choose one. Open at #video-styles. */
const STYLES = [
  { letter: "A", name: "Soft 3D", file: "v/vid1-gate.png", note: "Rounded, clay-like, like an animated film. Polished, but the most \"AI\" looking." },
  { letter: "B", name: "Flat illustration", file: "v/style-flat.png", note: "Simple shapes and a small set of colours, like a well-designed learning app. Clean and calm." },
  { letter: "C", name: "Storybook", file: "v/style-storybook.png", note: "Hand-painted look with brush and pencil texture, like a picture book. Warm and human." },
  { letter: "D", name: "Comic", file: "v/style-comic.png", note: "Bold outlines and bright flat colours, like a cartoon series for teens. Energetic." },
];

export function StylePicker() {
  return (
    <AuthLayout
      title="Choose a style"
      intro={<p>The same scene from video 1 in four styles. Tell Claude the letter you like, or mix them ("B, but with the colours of D").</p>}
    >
      <ol className="sp-list">
        {STYLES.map((s) => (
          <li key={s.letter} className="sp-item">
            <h2 className="sp-title"><span className="sp-letter">{s.letter}</span> {s.name}</h2>
            <img className="sp-img" src={`${LISTENING_BASE}${s.file}`} alt={`School gate scene in the ${s.name} style`} width={1536} height={864} loading="lazy" />
            <p className="sp-note">{s.note}</p>
          </li>
        ))}
      </ol>
    </AuthLayout>
  );
}
