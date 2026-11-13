import { useState } from "react";
import { useAuth } from "../../lib/auth";
import { supabase } from "../../lib/supabase";
import { savePractice } from "../../lib/progressApi";
import { wordCount } from "../../lib/answers";
import type { Submission } from "../../lib/placementApi";

const SEP = "\n\n* * *\n\n";
/** Exam writing stores "question\n→ answer" pieces; practice writing is plain text. */
function pieces(body: string) {
  return body.split(SEP).map((p) => {
    const at = p.indexOf("\n→ ");
    return at >= 0 ? { ask: p.slice(0, at), text: p.slice(at + 3) === "(no answer)" ? "" : p.slice(at + 3) } : { ask: "", text: p };
  });
}

/** Rewrite a piece of writing using the teacher's feedback. The teacher sees both versions. */
export function Rewrite({ sub, onDone }: { sub: Submission; onDone: () => void }) {
  const { session } = useAuth();
  const [parts, setParts] = useState(() => pieces(sub.body ?? ""));
  const [state, setState] = useState<"edit" | "busy" | "sent" | "error">("edit");
  const changed = parts.some((p, k) => p.text.trim() !== pieces(sub.body ?? "")[k].text.trim());
  const words = parts.reduce((n, p) => n + wordCount(p.text), 0);

  async function send() {
    setState("busy");
    try {
      const body = parts.some((p) => p.ask) ? parts.map((p) => `${p.ask}\n→ ${p.text.trim() || "(no answer)"}`).join(SEP) : parts[0].text;
      const id = await savePractice(session!.user.id, sub.node_id!, sub.prompt.startsWith("Rewrite: ") ? sub.prompt : `Rewrite: ${sub.prompt}`, body, words, null, null, undefined, sub.id);
      // Exam writing: the server recounts the words (and gives the small sending reward).
      if (/^(aptis|ielts|toefl)-w/.test(sub.node_id ?? "")) await supabase.rpc("reward_production", { p_submission: id });
      setState("sent");
    } catch { setState("error"); }
  }

  if (state === "sent") return <p className="rw-sent" role="status"><strong>Sent.</strong> Your teacher will see your first version, their comment and your rewrite together.</p>;
  return (
    <div className="rw">
      <p className="muted px-small">Change your text using the comment above. Rewriting after feedback is one of the fastest ways to improve.</p>
      {parts.map((p, k) => (
        <label key={k} className="rw-part">
          {p.ask ? <span className="rw-ask">{p.ask}</span> : <span className="visually-hidden">Your rewrite</span>}
          <textarea className="pt-textarea" rows={Math.min(14, Math.max(4, Math.ceil(p.text.length / 70)))} value={p.text} spellCheck={false}
            onPaste={(e) => e.preventDefault()} onChange={(e) => setParts(parts.map((x, j) => (j === k ? { ...x, text: e.target.value } : x)))} />
        </label>
      ))}
      {state === "error" && <p className="form-error" role="alert">That didn't send. Check your connection and try again.</p>}
      <div className="pt-actions">
        <button type="button" className="btn btn-primary" disabled={!changed || state === "busy"} onClick={() => void send()}>{state === "busy" ? "Sending…" : "Send my rewrite"}</button>
        <button type="button" className="btn btn-ghost" onClick={onDone}>Cancel</button>
        {!changed && <span className="muted px-small">Make at least one change first.</span>}
      </div>
    </div>
  );
}
