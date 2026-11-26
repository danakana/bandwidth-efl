import { AuthLayout } from "../app/AuthLayout";
import { LISTENING_BASE } from "../lib/placementApi";

/** The same video scene drawn in four styles, so the owner can choose one. Open at #video-styles. */
const STYLES = [
  { letter: "C1", name: "Cartoon: bold outlines", file: "v/style-cartoon.png", note: "Thick clean outlines, flat colours, big exaggerated shapes. Loud and energetic." },
  { letter: "C2", name: "Cartoon: retro graphic", file: "v/cartoon-retro.png", note: "Characters built from simple shapes (triangles, rectangles, circles), thin lines, a retro colour set. Stylish and witty." },
  { letter: "C3", name: "Cartoon: soft, no outlines", file: "v/cartoon-soft.png", note: "Rounded shapes with no black lines, warm colours. Cosy and friendly." },
  { letter: "C4", name: "Cartoon: hand-drawn ink", file: "v/cartoon-sketchy.png", note: "Loose, wobbly ink lines and watercolour fills on paper. Quirky, funny and clearly hand-made." },
  { letter: "M", name: "Bird mascots", file: "v/mascots-birds.png", note: "Left to right: toucan with headphones, motmot (barranquero) whose two tail feathers look like antennas, macaw with a walkie-talkie, round owl with glasses and headphones." },
];

export function StylePicker() {
  return (
    <AuthLayout
      title="Choose a style"
      intro={<p>Four cartoon styles and four bird mascots. Tell Claude which style (C1 to C4) and which bird (1 to 4, left to right), or mix them.</p>}
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
