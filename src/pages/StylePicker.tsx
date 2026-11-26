import { AuthLayout } from "../app/AuthLayout";
import { LISTENING_BASE } from "../lib/placementApi";

/** The same video scene drawn in four styles, so the owner can choose one. Open at #video-styles. */
const STYLES = [
  { letter: "1", name: "Risograph print", file: "v/style-riso.png", note: "Printed with three inks (red, teal, yellow) on warm paper, with grain. Simple faces. Looks like a print by an editorial illustrator." },
  { letter: "2", name: "Cut paper", file: "v/style-paper.png", note: "Shapes cut from coloured paper with soft shadows. Handmade, warm and friendly." },
  { letter: "3", name: "Clear-line comic", file: "v/style-ligne.png", note: "Clean, even black outlines and flat, softened colours, like a classic European comic. Very readable." },
  { letter: "B", name: "Flat illustration (from before)", file: "v/style-flat.png", note: "The one you liked best before, for comparison." },
];

export function StylePicker() {
  return (
    <AuthLayout
      title="Choose a style"
      intro={<p>New styles that look made by a person: a real moment, softened colours, simple faces. Tell Claude the number you like, or mix them ("1, but with the lines of 3").</p>}
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
