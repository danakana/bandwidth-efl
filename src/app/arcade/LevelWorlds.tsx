import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { BANDS, type BandId } from "../../content/bands";
import { Icon } from "../../components/Icon";
import { LEVEL_NAMES, LEVELS, towerReady, type LevelBand, type LevelGame } from "./levels";
import { WordTower } from "./WordTower";
import { WordRain } from "./WordRain";

type Row = { game: LevelGame; band: string; level: number; stars: number; best: number };

const WORLDS: { id: LevelGame; name: string; blurb: string; emoji: string }[] = [
  { id: "tower", name: "Word Tower", blurb: "Pull out the blocks with mistakes before the tower falls.", emoji: "🧱" },
  { id: "rain", name: "Word Rain", blurb: "Catch the right word before it splashes on the city.", emoji: "🌧️" },
];

/** The two level-based games, each a path of seven levels per band, unlocked in order. */
export function LevelWorlds({ start }: { start: number }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [band, setBand] = useState<Record<LevelGame, LevelBand>>({ tower: BANDS[start].id, rain: BANDS[start].id });
  const [playing, setPlaying] = useState<{ game: LevelGame; band: LevelBand; level: number } | null>(null);

  const load = async () => {
    const { data } = await supabase.from("game_levels").select("game, band, level, stars, best");
    setRows((data as Row[]) ?? []);
  };
  useEffect(() => { void load(); }, []);

  const starsAt = (g: LevelGame, b: LevelBand, l: number) => rows.find((r) => r.game === g && r.band === b && r.level === l)?.stars ?? 0;
  const close = (changed: boolean) => { setPlaying(null); if (changed) void load(); };
  // Bands a student can choose: everything up to one above their own. The exam words open from B2+.
  const choices = (g: LevelGame): LevelBand[] => [
    ...BANDS.slice(0, Math.min(BANDS.length, start + 2)).map((b) => b.id).filter((b) => g !== "tower" || towerReady(b)),
    ...(g === "rain" && start >= 6 ? ["EX" as const] : []),
  ];

  return (
    <section className="lw" aria-labelledby="lw-title">
      <h2 id="lw-title">Adventure games</h2>
      <div className="lw-worlds">
        {WORLDS.map((wd) => {
          const b = band[wd.id];
          const total = Array.from({ length: LEVELS }, (_, i) => starsAt(wd.id, b, i + 1)).reduce((a, c) => a + c, 0);
          return (
            <article key={wd.id} className={`lw-world is-${wd.id}`}>
              <header className="lw-head">
                <span className="lw-emoji" aria-hidden="true">{wd.emoji}</span>
                <div><h3>{wd.name}</h3><p>{wd.blurb}</p></div>
                <span className="lw-total"><span aria-hidden="true">★</span> {total} / {LEVELS * 3}</span>
              </header>
              <label className="lw-band">Words from
                <select value={b} onChange={(e) => setBand({ ...band, [wd.id]: e.target.value as LevelBand })}>
                  {choices(wd.id).map((x) => <option key={x} value={x}>{x === "EX" ? "Exams & essays" : x}</option>)}
                </select>
              </label>
              <ol className="lw-path">
                {Array.from({ length: LEVELS }, (_, i) => {
                  const lv = i + 1;
                  const st = starsAt(wd.id, b, lv);
                  const open = lv === 1 || starsAt(wd.id, b, lv - 1) > 0;
                  const boss = lv === LEVELS;
                  return (
                    <li key={lv} className={`lw-node${open ? "" : " is-locked"}${boss ? " is-boss" : ""}${st ? " is-done" : ""}`}>
                      <button type="button" disabled={!open} onClick={() => setPlaying({ game: wd.id, band: b, level: lv })}
                        aria-label={`Level ${lv}: ${LEVEL_NAMES[wd.id][i]}${open ? `, ${st} stars` : ", locked"}`}>
                        {open ? (boss ? "👑" : lv) : <Icon name="lock" size={16} />}
                      </button>
                      <span className="lw-stars" aria-hidden="true">{[1, 2, 3].map((s) => <i key={s} className={s <= st ? "is-on" : ""}>★</i>)}</span>
                      <span className="lw-name">{LEVEL_NAMES[wd.id][i]}</span>
                    </li>
                  );
                })}
              </ol>
            </article>
          );
        })}
      </div>
      {playing?.game === "tower" && <WordTower key={`${playing.band}-${playing.level}`} band={playing.band as BandId} level={playing.level} onClose={close} onLevel={(n) => { void load(); setPlaying({ ...playing, level: n }); }} />}
      {playing?.game === "rain" && <WordRain key={`${playing.band}-${playing.level}`} band={playing.band} level={playing.level} onClose={close} onLevel={(n) => { void load(); setPlaying({ ...playing, level: n }); }} />}
    </section>
  );
}
