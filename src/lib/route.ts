import { useEffect, useState } from "react";
import { BANDS, type BandId } from "../content/bands";
import type { TreeId } from "../content/curriculum";

/** Inside the app the hash looks like #app, #app/band/b1-plus or #app/band/b1-plus/grammar. */
export type AppRoute = { band: BandId | null; tree: TreeId | null; page: "map" | "arcade" | "shop" | "exams" | "library" | "words" };

export const bandSlug = (id: BandId) => id.toLowerCase().replace("+", "-plus");
const bandFromSlug = (s: string | undefined) => BANDS.find((b) => bandSlug(b.id) === s)?.id ?? null;
const TREES: TreeId[] = ["grammar", "words", "communicate", "sounds", "errors"];

function read(): AppRoute {
  const parts = window.location.hash.replace(/^#/, "").split("/");
  if (parts[0] === "app" && (parts[1] === "arcade" || parts[1] === "shop" || parts[1] === "exams" || parts[1] === "library" || parts[1] === "words")) return { band: null, tree: null, page: parts[1] };
  if (parts[0] !== "app" || parts[1] !== "band") return { band: null, tree: null, page: "map" };
  const band = bandFromSlug(parts[2]);
  const tree = TREES.includes(parts[3] as TreeId) ? (parts[3] as TreeId) : null;
  return { band, tree: band ? tree : null, page: "map" };
}

export function useAppRoute(): AppRoute {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export const hrefFor = (band?: BandId | null, tree?: TreeId | null) =>
  band ? `#app/band/${bandSlug(band)}${tree ? `/${tree}` : ""}` : "#app";
