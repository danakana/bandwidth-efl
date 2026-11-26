import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { AuthProvider } from "./lib/auth";
import { Landing } from "./landing/Landing";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import { AppGate } from "./app/AppGate";
import { VideoPreview } from "./pages/VideoPreview";
import { StylePicker } from "./pages/StylePicker";
import { WatchVideo } from "./pages/WatchVideo";
import { AnimTest } from "./pages/AnimTest";

type View = "landing" | "join" | "login" | "app" | "listen" | "styles" | "watch" | "anim";

/** Plain-hash routing: #join, #login and #app (plus #app/...); anything else is the landing page. */
function readView(): View {
  const h = window.location.hash.replace("#", "");
  if (h === "app" || h.startsWith("app/")) return "app";
  if (h === "listen-video-1") return "listen";
  if (h === "video-styles") return "styles";
  if (h === "watch-video-1") return "watch";
  if (h === "anim-test") return "anim";
  return h === "join" || h === "login" ? h : "landing";
}

function useView() {
  const [view, setView] = useState<View>(readView);
  useEffect(() => {
    const onHash = () => {
      const next = readView();
      setView((prev) => {
        if (prev !== next) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return view;
}

export default function App() {
  const view = useView();
  return (
    <MotionConfig reducedMotion="user">
      <AuthProvider>
        {view === "join" && <Join />}
        {view === "login" && <Login />}
        {view === "listen" && <VideoPreview />}
        {view === "styles" && <StylePicker />}
        {view === "watch" && <WatchVideo />}
        {view === "anim" && <AnimTest />}
        {view === "app" && <AppGate />}
        {view === "landing" && <Landing />}
      </AuthProvider>
    </MotionConfig>
  );
}
