import { IELTS_CHARTS, type ChartId } from "../../content/exams/ielts-production";

/** Brand-neutral series colours with strong contrast on white; series are also told apart by shape. */
const COLORS = ["#1f6fb2", "#d9822b", "#2e8b57"];
const DASH = ["", "6 4", "2 4"];

/** IELTS Task 1 chart: a drawn bar or line chart, with the same numbers in a table for screen readers. */
export function Chart({ id }: { id: ChartId }) {
  const c = IELTS_CHARTS[id];
  const W = 560, H = 300, L = 48, R = 12, T = 16, B = 46;
  const max = Math.max(...c.series.flatMap((s) => s.values));
  const top = Math.ceil(max / (max > 100 ? 100 : 5)) * (max > 100 ? 100 : 5);
  const step = top / 5;
  const y = (v: number) => T + (H - T - B) * (1 - v / top);
  const band = (W - L - R) / c.labels.length;
  return (
    <figure className="ex-chart">
      <figcaption>{c.title}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${c.kind === "bars" ? "Bar chart" : "Line graph"}: ${c.title}. The numbers are in the table below.`}>
        {Array.from({ length: 6 }, (_, k) => k * step).map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#d8dee6" />
            <text x={L - 8} y={y(v) + 4} textAnchor="end" fontSize="15" fill="#3d4a5c">{v}</text>
          </g>
        ))}
        {c.labels.map((l, k) => <text key={l} x={L + band * (k + 0.5)} y={H - B + 18} textAnchor="middle" fontSize="15" fill="#1d2b3a">{l}</text>)}
        {c.kind === "bars"
          ? c.series.map((s, si) => s.values.map((v, k) => {
              const w = (band * 0.7) / c.series.length;
              const x = L + band * k + band * 0.15 + w * si;
              return <rect key={`${si}-${k}`} x={x} y={y(v)} width={w - 3} height={y(0) - y(v)} fill={COLORS[si]} rx={2} />;
            }))
          : c.series.map((s, si) => (
              <g key={s.name}>
                <polyline fill="none" stroke={COLORS[si]} strokeWidth={3} strokeDasharray={DASH[si]} points={s.values.map((v, k) => `${L + band * (k + 0.5)},${y(v)}`).join(" ")} />
                {s.values.map((v, k) => <circle key={k} cx={L + band * (k + 0.5)} cy={y(v)} r={4} fill={COLORS[si]} />)}
              </g>
            ))}
        <text x={14} y={T + (H - T - B) / 2} fontSize="13" fill="#3d4a5c" transform={`rotate(-90 14 ${T + (H - T - B) / 2})`} textAnchor="middle">{c.unit}</text>
      </svg>
      <ul className="ex-legend" aria-hidden="true">
        {c.series.map((s, si) => (
          <li key={s.name}>
            <svg width="26" height="10" aria-hidden="true">{c.kind === "bars" ? <rect width="26" height="10" rx="2" fill={COLORS[si]} /> : <line x1="0" x2="26" y1="5" y2="5" stroke={COLORS[si]} strokeWidth="3" strokeDasharray={DASH[si]} />}</svg>
            {s.name}
          </li>
        ))}
      </ul>
      <div className="visually-hidden"><table>
        <caption>{c.title} ({c.unit})</caption>
        <thead><tr><th scope="col">Series</th>{c.labels.map((l) => <th key={l} scope="col">{l}</th>)}</tr></thead>
        <tbody>{c.series.map((s) => <tr key={s.name}><th scope="row">{s.name}</th>{s.values.map((v, k) => <td key={k}>{v}</td>)}</tr>)}</tbody>
      </table></div>
      <p className="muted px-small">Practice data, not real figures.</p>
    </figure>
  );
}
