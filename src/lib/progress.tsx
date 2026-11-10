import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { loadProgress, type ArcadeRun, type AssessmentRow, type NodeProgress, type Stats } from "./progressApi";

type ProgressState = {
  nodes: Record<string, NodeProgress>;
  stats: Stats;
  badges: string[];
  milestones: Set<string>;
  assessments: AssessmentRow[];
  /** Bands opened by passing a Gate. */
  unlocks: string[];
  purchases: string[];
  arcade: ArcadeRun[];
  loaded: boolean;
  refresh: () => Promise<void>;
};

const Ctx = createContext<ProgressState | null>(null);

/** Student progress, loaded once and refreshed after each step. */
export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Omit<ProgressState, "refresh">>({
    nodes: {}, stats: { xp: 0, coins: 0, streak: 0, best_streak: 0, freezes: 1, last_day: null, color: "sky", title: "learner" }, badges: [], milestones: new Set(), assessments: [], unlocks: [], purchases: [], arcade: [], loaded: false,
  });
  const refresh = useCallback(async () => {
    try { setState({ ...(await loadProgress()), loaded: true }); } catch { setState((s) => ({ ...s, loaded: true })); }
  }, []);
  useEffect(() => { void refresh(); }, [refresh]);
  return <Ctx.Provider value={{ ...state, refresh }}>{children}</Ctx.Provider>;
}

/** Null for teachers (preview mode has no progress). */
export const useProgress = () => useContext(Ctx);
