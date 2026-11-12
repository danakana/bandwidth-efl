import type { SceneId } from "../../content/exams/aptis-production";

/** Simple drawn scenes for Aptis Speaking parts 2 and 3. Drawn here so they're free and load instantly. */
const SK = ["#7a4a24", "#a8693b", "#d39b6a", "#f0c9a0"];
const INK = "#1d2b3a";

type PersonP = { x: number; y: number; s?: number; skin: string; hair: string; top: string; legs: string; arm?: "down" | "out" | "up" | "hold"; long?: boolean; sit?: boolean; flip?: boolean; cap?: string };
/** A person standing on (x, y), facing right. `sit` puts the hips at y with legs forward. */
function Person({ x, y, s = 1, skin, hair, top, legs, arm = "down", long, sit, flip, cap }: PersonP) {
  const hip = sit ? 0 : -38;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {sit
        ? <path d={`M-10 ${hip - 4} h30 v8 h-0 v30 h-8 v-22 h-22z`} fill={legs} />
        : <><rect x={-9} y={hip} width={8} height={38} rx={3} fill={legs} /><rect x={1} y={hip} width={8} height={38} rx={3} fill={legs} /><rect x={-11} y={-4} width={11} height={5} rx={2} fill={INK} /><rect x={1} y={-4} width={11} height={5} rx={2} fill={INK} /></>}
      <rect x={-12} y={hip - 36} width={24} height={40} rx={9} fill={top} />
      {arm === "down" && <><rect x={-16} y={hip - 33} width={7} height={30} rx={3.5} fill={top} /><rect x={9} y={hip - 33} width={7} height={30} rx={3.5} fill={top} /></>}
      {arm === "out" && <><rect x={-16} y={hip - 33} width={7} height={30} rx={3.5} fill={top} /><rect x={4} y={hip - 30} width={28} height={7} rx={3.5} fill={top} /><circle cx={33} cy={hip - 26.5} r={4} fill={skin} /></>}
      {arm === "hold" && <><rect x={-6} y={hip - 30} width={30} height={7} rx={3.5} fill={top} /><rect x={4} y={hip - 24} width={26} height={7} rx={3.5} fill={top} /><circle cx={30} cy={hip - 20} r={4} fill={skin} /></>}
      {arm === "up" && <><rect x={-16} y={hip - 33} width={7} height={30} rx={3.5} fill={top} /><rect x={10} y={hip - 60} width={7} height={30} rx={3.5} fill={top} transform={`rotate(25 13 ${hip - 32})`} /></>}
      <rect x={-4} y={hip - 42} width={8} height={8} fill={skin} />
      <circle cx={0} cy={hip - 50} r={12} fill={skin} />
      {long && <rect x={-13} y={hip - 56} width={8} height={26} rx={4} fill={hair} />}
      <path d={`M-12.5 ${hip - 50} a12.5 12.5 0 0 1 25 0 q-6 -5 -13 -4 q-7 1 -12 4z`} fill={hair} />
      {cap && <path d={`M-12 ${hip - 54} a12 10 0 0 1 24 0 h8 v3 h-32z`} fill={cap} />}
      <circle cx={6} cy={hip - 51} r={1.6} fill={INK} />
      <path d={`M3 ${hip - 44} q4 3 7 0`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </g>
  );
}

const Tree = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}><rect x={-5} y={-40} width={10} height={40} fill="#7b5233" /><circle cx={0} cy={-58} r={26} fill="#4f9d5d" /><circle cx={-16} cy={-46} r={16} fill="#5fb06c" /><circle cx={16} cy={-46} r={16} fill="#5fb06c" /></g>
);

function Kitchen() {
  return (
    <>
      <rect width={400} height={260} fill="#f7ead4" />
      <rect x={250} y={30} width={110} height={80} rx={4} fill="#bfe3f5" stroke="#fff" strokeWidth={6} /><line x1={305} y1={30} x2={305} y2={110} stroke="#fff" strokeWidth={5} />
      <circle cx={70} cy={45} r={18} fill="#fff" stroke={INK} strokeWidth={3} /><line x1={70} y1={45} x2={70} y2={34} stroke={INK} strokeWidth={2.5} /><line x1={70} y1={45} x2={78} y2={48} stroke={INK} strokeWidth={2.5} />
      <rect x={0} y={170} width={400} height={90} fill="#e3c9a3" />
      {/* counter and stove */}
      <rect x={20} y={150} width={200} height={14} fill="#8a6142" /><rect x={28} y={164} width={184} height={70} fill="#b9895f" />
      <rect x={60} y={132} width={44} height={20} rx={3} fill="#5c6670" /><path d="M72 128 q-6 -12 0 -22 M84 128 q-6 -12 0 -22 M96 128 q-6 -12 0 -22" stroke="#9aa6b2" strokeWidth={3} fill="none" />
      <rect x={140} y={142} width={50} height={8} rx={2} fill="#f3e3c7" /><circle cx={150} cy={140} r={5} fill="#f28c28" /><circle cx={162} cy={140} r={5} fill="#f28c28" /><circle cx={176} cy={140} r={6} fill="#5fb06c" />
      {/* table */}
      <rect x={250} y={185} width={130} height={10} rx={3} fill="#8a6142" /><rect x={262} y={195} width={8} height={50} fill="#8a6142" /><rect x={360} y={195} width={8} height={50} fill="#8a6142" />
      <ellipse cx={290} cy={183} rx={16} ry={4} fill="#fff" /><ellipse cx={340} cy={183} rx={16} ry={4} fill="#fff" />
      <Person x={60} y={235} skin={SK[1]} hair="#2b1b12" top="#d9534f" legs="#3d4f7a" arm="out" long />
      <Person x={150} y={235} s={0.85} skin={SK[2]} hair="#1d1d1d" top="#3b8ed0" legs="#2d3e50" arm="hold" />
      <Person x={330} y={240} s={0.85} skin={SK[1]} hair="#3a2a1a" top="#f2b134" legs="#6b4f9e" arm="out" long flip />
    </>
  );
}

function Bus() {
  return (
    <>
      <rect width={400} height={260} fill="#c9d6df" />
      <rect x={10} y={40} width={70} height={140} fill="#9fb0bd" /><rect x={90} y={20} width={60} height={160} fill="#8798a6" /><rect x={300} y={50} width={90} height={130} fill="#9fb0bd" />
      {[0, 1, 2, 3].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={22 + c * 28} y={55 + r * 30} width={16} height={18} fill="#e8eef2" />))}
      <rect x={0} y={180} width={400} height={80} fill="#5d6770" /><rect x={0} y={176} width={400} height={8} fill="#b8c2ca" />
      {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={10 + k * 85} y={228} width={45} height={5} fill="#f4f4f4" />)}
      <rect x={110} y={110} width={220} height={95} rx={12} fill="#e64b3c" /><rect x={110} y={185} width={220} height={8} fill="#b8352a" />
      {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={124 + k * 40} y={122} width={32} height={34} rx={3} fill="#cfe9f6" />)}
      {[0, 1, 2, 3, 4].map((k) => <g key={k}><circle cx={133 + k * 40} cy={146} r={7} fill={SK[k % 4]} /><circle cx={147 + k * 40} cy={148} r={7} fill={SK[(k + 2) % 4]} /></g>)}
      <circle cx={150} cy={207} r={14} fill={INK} /><circle cx={290} cy={207} r={14} fill={INK} /><circle cx={150} cy={207} r={5} fill="#aaa" /><circle cx={290} cy={207} r={5} fill="#aaa" />
      <rect x={300} y={124} width={22} height={30} rx={3} fill="#cfe9f6" /><text x={220} y={176} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff" fontFamily="sans-serif">CENTRO</text>
      <rect x={350} y={110} width={5} height={70} fill="#555" /><rect x={340} y={100} width={26} height={16} rx={3} fill="#2f7fbf" /><text x={353} y={112} textAnchor="middle" fontSize={10} fill="#fff" fontFamily="sans-serif">BUS</text>
      <Person x={372} y={182} s={0.7} skin={SK[2]} hair="#222" top="#4a8f4a" legs="#333" />
      <Person x={30} y={182} s={0.7} skin={SK[0]} hair="#111" top="#7a5ca8" legs="#2d3e50" arm="out" />
      <Person x={60} y={182} s={0.7} skin={SK[3]} hair="#6b4a2a" top="#f2b134" legs="#3d4f7a" long flip />
      <rect x={20} y={200} width={60} height={22} rx={6} fill="#f2b134" /><circle cx={34} cy={224} r={7} fill={INK} /><circle cx={66} cy={224} r={7} fill={INK} />
    </>
  );
}

function Bike() {
  const bike = (x: number, y: number, c: string) => (
    <g transform={`translate(${x} ${y})`} stroke={INK} strokeWidth={3} fill="none">
      <circle cx={-26} cy={0} r={16} /><circle cx={26} cy={0} r={16} />
      <path d="M-26 0 L-6 -24 L18 -24 L26 0 M-6 -24 L0 0 L18 -24 M0 0 L-26 0" stroke={c} strokeWidth={4} />
      <path d="M18 -24 l4 -10 h8" /><path d="M-10 -28 h10" strokeWidth={5} />
    </g>
  );
  return (
    <>
      <rect width={400} height={260} fill="#bfe3f5" /><circle cx={340} cy={45} r={24} fill="#ffd166" />
      <rect x={0} y={150} width={400} height={110} fill="#7cc47f" />
      <Tree x={40} y={160} /><Tree x={360} y={165} s={0.9} /><Tree x={240} y={150} s={0.7} />
      <path d="M0 200 L400 185 L400 240 L0 260z" fill="#8c96a0" /><path d="M0 222 L400 210" stroke="#3aa35b" strokeWidth={14} />
      <text x={70} y={230} fontSize={11} fill="#fff" fontWeight={700} fontFamily="sans-serif" transform="rotate(-2 70 230)">BICI</text>
      {bike(160, 210, "#2f7fbf")}
      <Person x={148} y={186} s={0.85} sit skin={SK[1]} hair="#222" top="#f2b134" legs="#2d3e50" arm="out" cap="#e64b3c" />
      {bike(290, 202, "#e64b3c")}
      <Person x={278} y={178} s={0.8} sit skin={SK[3]} hair="#6b4a2a" top="#3b8ed0" legs="#444" arm="out" long cap="#5fb06c" />
    </>
  );
}

function Market() {
  const stall = (x: number, a: string, fruit: string[]) => (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={150} width={120} height={60} fill="#a87b52" />
      {[0, 1, 2, 3, 4, 5].map((k) => <rect key={k} x={k * 20} y={70} width={20} height={26} fill={k % 2 ? "#fff" : a} />)}
      <path d="M0 96 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0" fill={a} />
      <rect x={4} y={96} width={5} height={56} fill="#7b5233" /><rect x={111} y={96} width={5} height={56} fill="#7b5233" />
      {fruit.map((f, k) => [0, 1, 2].map((j) => <circle key={`${k}${j}`} cx={14 + k * 34 + j * 9} cy={146 - (j === 1 ? 6 : 0)} r={6} fill={f} />))}
    </g>
  );
  return (
    <>
      <rect width={400} height={260} fill="#bfe3f5" /><rect x={0} y={60} width={400} height={100} fill="#f2d7a6" />
      <rect x={0} y={200} width={400} height={60} fill="#cfc2ac" />
      <Person x={70} y={194} s={0.8} skin={SK[0]} hair="#111" top="#5fb06c" legs="#333" arm="out" flip cap="#f2b134" />
      {stall(10, "#e64b3c", ["#f28c28", "#e64b3c", "#f2d14b"])}
      <Person x={320} y={194} s={0.8} skin={SK[2]} hair="#3a2a1a" top="#e64b3c" legs="#333" long flip />
      {stall(260, "#2f7fbf", ["#5fb06c", "#8e44ad", "#f28c28"])}
      <Person x={190} y={245} skin={SK[1]} hair="#2b1b12" top="#7a5ca8" legs="#3d4f7a" arm="out" long />
      <path d="M216 182 h20 l-3 26 h-14z" fill="#d6b56d" /><path d="M220 182 q6 -10 12 0" stroke="#a88a4a" strokeWidth={2} fill="none" />
      <Person x={160} y={245} s={0.6} skin={SK[1]} hair="#111" top="#f2b134" legs="#2d3e50" arm="up" />
    </>
  );
}

function Football() {
  return (
    <>
      <rect width={400} height={260} fill="#bfe3f5" /><circle cx={60} cy={45} r={22} fill="#ffd166" />
      <rect x={0} y={140} width={400} height={120} fill="#6dbb6f" /><path d="M0 140 h400" stroke="#5aa85c" strokeWidth={4} />
      <Tree x={210} y={150} s={0.8} /><Tree x={380} y={150} s={0.9} />
      <g stroke="#fff" strokeWidth={5} fill="none"><path d="M300 210 v-60 h80 v60" /></g>
      <path d="M300 150 l10 10 h60 l10 -10" stroke="#e8e8e8" strokeWidth={2} fill="none" />
      <Person x={80} y={235} skin={SK[2]} hair="#222" top="#e64b3c" legs="#fff" arm="up" />
      <Person x={170} y={240} skin={SK[0]} hair="#111" top="#2f7fbf" legs="#fff" long />
      <Person x={330} y={205} s={0.75} skin={SK[1]} hair="#3a2a1a" top="#f2b134" legs="#333" arm="up" flip />
      <circle cx={125} cy={230} r={8} fill="#fff" stroke={INK} strokeWidth={2} /><path d="M121 226 l4 3 l4 -3 M125 229 v5" stroke={INK} strokeWidth={1.5} fill="none" />
      <rect x={20} y={232} width={30} height={12} rx={3} fill="#3b8ed0" /><rect x={30} y={226} width={6} height={8} fill="#cfe9f6" />
    </>
  );
}

function Gaming() {
  return (
    <>
      <rect width={400} height={260} fill="#3c3f63" />
      <rect x={30} y={30} width={90} height={80} fill="#1b1d38" /><circle cx={95} cy={52} r={10} fill="#f6f1c7" />
      <path d="M22 26 h26 v94 h-26z M102 26 h26 v94 h-26z" fill="#7a5ca8" />
      <rect x={0} y={200} width={400} height={60} fill="#5a4a6e" />
      <rect x={250} y={60} width={130} height={80} rx={6} fill="#111" /><rect x={258} y={68} width={114} height={64} fill="#4fd1c5" />
      <path d="M270 120 l20 -30 l15 20 l12 -12 l18 22z" fill="#2a9d8f" /><circle cx={350} cy={84} r={6} fill="#ffd166" />
      <rect x={300} y={140} width={30} height={10} fill="#222" /><rect x={250} y={150} width={130} height={50} fill="#6b4a2a" />
      <path d="M258 68 L120 210 L200 230 L372 132z" fill="#4fd1c5" opacity={0.08} />
      <rect x={40} y={170} width={150} height={40} rx={8} fill="#c6b3e0" /><rect x={40} y={150} width={36} height={30} rx={8} fill="#fff" />
      <Person x={120} y={180} sit skin={SK[3]} hair="#3a2a1a" top="#e64b3c" legs="#2d3e50" arm="hold" />
      <rect x={146} y={153} width={18} height={10} rx={4} fill="#222" />
      <rect x={200} y={215} width={22} height={14} rx={2} fill="#f2b134" transform="rotate(-15 211 222)" /><rect x={225} y={222} width={12} height={20} rx={2} fill="#e64b3c" />
      <circle cx={70} cy={225} r={4} fill="#f2b134" /><circle cx={82} cy={232} r={4} fill="#f2b134" />
    </>
  );
}

const SCENES: Record<SceneId, { draw: () => React.ReactElement; alt: string }> = {
  kitchen: { draw: Kitchen, alt: "A kitchen. A woman is cooking at the stove, a boy is cutting vegetables, and a girl is putting plates on the table." },
  bus: { draw: Bus, alt: "A busy city street. A full red bus is driving past tall buildings, and people are waiting at a bus stop." },
  bike: { draw: Bike, alt: "A sunny park. Two people with helmets are riding bicycles on a green bike lane next to the trees." },
  market: { draw: Market, alt: "An outdoor market. Two stalls sell fruit, and a woman with a shopping bag is walking with a child." },
  football: { draw: Football, alt: "A park on a sunny day. Three young people are playing football on the grass near a goal." },
  gaming: { draw: Gaming, alt: "A bedroom at night. A teenager is sitting on a bed playing a video game on a big screen, with snacks on the floor." },
};

export function Scene({ id, label }: { id: SceneId; label?: string }) {
  const s = SCENES[id];
  const Draw = s.draw;
  return (
    <figure className="ex-scene">
      <svg viewBox="0 0 400 260" role="img" aria-label={s.alt}><Draw /></svg>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}
