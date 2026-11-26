import { Logo } from "../components/Logo";
import { Credit } from "../components/Credit";
import { GrammarVideo } from "../video/GrammarVideo";
import { VIDEO1 } from "../video/video1";

/** Review page for grammar video 1. Open at #watch-video-1. */
export function WatchVideo() {
  return (
    <main id="main" className="wv">
      <a href="#top" className="wv-logo" aria-label="Bandwidth EFL home"><Logo size={32} /></a>
      <header className="wv-head">
        <h1>Video 1 · First day at a new school</h1>
        <p>Pre-A1 grammar: I am, you are, he / she / it is. First draft for review.</p>
      </header>
      <GrammarVideo video={VIDEO1} />
      <Credit />
    </main>
  );
}
