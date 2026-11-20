/** Authorship line. Bandwidth EFL is created by D. Baer. */
export function Credit({ className = "" }: { className?: string }) {
  return <p className={`credit ${className}`}>Bandwidth EFL · created by D. Baer · © {new Date().getFullYear()}</p>;
}
