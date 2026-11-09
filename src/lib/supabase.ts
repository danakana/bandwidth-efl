import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

/** Browser client. Uses the public key; row level security protects every table. */
export const supabase = createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true },
});

/** Students have no email; their login address is derived from the username. */
export const STUDENT_EMAIL_DOMAIN = "students.bandwidth.invalid";
export const studentEmail = (username: string) => `${username.trim().toLowerCase()}@${STUDENT_EMAIL_DOMAIN}`;

export type Profile = {
  id: string;
  role: "student" | "teacher";
  username: string | null;
  display_name: string | null;
  class_id: string | null;
  spanish_help: boolean;
  interests: string[];
  universes: string[];
  onboarded_at: string | null;
};

export type ClassRow = {
  id: string;
  name: string;
  code: string;
  active: boolean;
  created_at: string;
};
