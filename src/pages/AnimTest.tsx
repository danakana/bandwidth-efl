import { useEffect, useRef } from "react";
import { Logo } from "../components/Logo";
import { Credit } from "../components/Credit";
import { LISTENING_BASE } from "../lib/placementApi";

/** When Leo's recorded line starts in the animation (score.js ev.say). */
const VOICE_AT = 3.3;

/**
 * Review page for the 10-second animation test. Open at #anim-test.
 * The MP4 carries the picture and the music; Leo's real recorded voice is a
 * separate file that this page plays in sync on top.
 */
export function AnimTest() {
  const video = useRef<HTMLVideoElement>(null);
  const voice = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const v = video.current, a = voice.current;
    if (!v || !a) return;
    const sync = () => {
      const local = v.currentTime - VOICE_AT;
      const inside = local >= 0 && (!a.duration || local < a.duration);
      if (v.paused || !inside) {
        if (!a.paused) a.pause();
        if (!inside) a.currentTime = 0;
        return;
      }
      if (Math.abs(a.currentTime - local) > 0.15) a.currentTime = local;
      if (a.paused) a.play().catch(() => {});
    };
    const events = ["play", "pause", "seeked", "timeupdate", "ended"] as const;
    events.forEach((e) => v.addEventListener(e, sync));
    return () => events.forEach((e) => v.removeEventListener(e, sync));
  }, []);

  return (
    <main id="main" className="wv">
      <a href="#top" className="wv-logo" aria-label="Bandwidth EFL home"><Logo size={32} /></a>
      <header className="wv-head">
        <h1>Animation test · School gate</h1>
        <p>Ten seconds of the opening scene, drawn and moved in code. Turn the sound on.</p>
      </header>
      <video ref={video} className="wv-anim" src="/video/leo-test.mp4" controls playsInline preload="auto" />
      <audio ref={voice} src={`${LISTENING_BASE}p/v1-l01.mp3`} preload="auto" />
      <Credit />
    </main>
  );
}
