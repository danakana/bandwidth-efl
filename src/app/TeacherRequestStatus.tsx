import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { AppHeader } from "./AppHeader";

type Req = { status: "pending" | "approved" | "declined"; display_name: string | null };

/** What someone without a profile sees: their teacher request, or the class-code message. */
export function NoProfile() {
  const { session, refreshProfile } = useAuth();
  const [req, setReq] = useState<Req | null | undefined>(undefined);

  useEffect(() => {
    void supabase.from("teacher_requests").select("status, display_name").eq("id", session!.user.id).maybeSingle()
      .then(({ data }) => setReq((data as Req) ?? null));
  }, [session]);

  let body;
  if (req === undefined) body = <p className="muted">Loading…</p>;
  else if (req?.status === "pending") body = (
    <>
      <h1>Your request is waiting</h1>
      <p>Thanks{req.display_name ? `, ${req.display_name}` : ""}. The Bandwidth owner checks every teacher request. You'll be able to make classes here as soon as it's approved.</p>
      <button type="button" className="btn btn-primary" onClick={() => void refreshProfile()}>Check again</button>
    </>
  );
  else if (req?.status === "declined") body = (
    <>
      <h1>Your request wasn't approved</h1>
      <p>Contact the Bandwidth owner if you think this is a mistake.</p>
    </>
  );
  else if (req?.status === "approved") body = (
    <>
      <h1>You're approved</h1>
      <button type="button" className="btn btn-primary" onClick={() => void refreshProfile()}>Open my teacher page</button>
    </>
  );
  else body = (
    <>
      <h1>This account isn't connected to a class</h1>
      <p>Students join with a class code from their teacher. Teachers ask for an account from the teacher login page.</p>
    </>
  );
  return (
    <div className="shell">
      <AppHeader />
      <main id="main" className="page shell-main tr-status">{body}</main>
    </div>
  );
}

/** A teacher whose access the owner has paused. */
export function TeacherPaused() {
  return (
    <div className="shell">
      <AppHeader />
      <main id="main" className="page shell-main tr-status">
        <h1>Your teacher access is paused</h1>
        <p>Your classes are safe. Contact the Bandwidth owner to turn your access back on.</p>
      </main>
    </div>
  );
}
