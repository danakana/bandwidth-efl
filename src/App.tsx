import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { AuthProvider } from "./lib/auth";
import { Landing } from "./landing/Landing";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import { AppGate } from "./app/AppGate";

type View = "landing" | "join" | "login" | "app";

/** Plain-hash routing: #join, #login and #app; anything else is the landing page. */
function readView(): View {
  const h = window.location.hash.replace("#", "");
  return h === "join" || h === "login" || h === "app" ? h : "landing";
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
        {view === "app" && <AppGate />}
        {view === "landing" && <Landing />}
      </AuthProvider>
    </MotionConfig>
  );
}
