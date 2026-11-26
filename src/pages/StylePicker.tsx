import { AuthLayout } from "../app/AuthLayout";
import { LISTENING_BASE } from "../lib/placementApi";

/** The same video scene drawn in four styles, so the owner can choose one. Open at #video-styles. */
const STYLES = [
  { letter: "C", name: "Cartoon series (new)", file: "v/style-cartoon.png", note: "A 2D TV-cartoon look for teens: bold outlines, flat colours, a different body shape for every character, a funny real moment. The parrot mascot is watching from the gate." },
  { letter: "M", name: "Mascot ideas", file: "v/mascots.png", note: "Left: a parrot with headphones (parrots repeat what they hear, like language learners, and Colombia has more bird species than any country). Middle: a capybara (chigüiro) with a radio backpack. Right: a hummingbird with signal-wave wings." },
  { letter: "1", name: "Risograph print", file: "v/style-riso.png", note: "Earlier option, for comparison." },
  { letter: "3", name: "Clear-line comic", file: "v/style-ligne.png", note: "Earlier option, for comparison." },
];

export function StylePicker() {
  return (
    <AuthLayout
      title="Choose a style"
      intro={<p>The cartoon direction and three mascot ideas. Tell Claude what you think of C and which mascot (left, middle or right) you like.</p>}
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
