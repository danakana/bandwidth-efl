/**
 * Scripts for practice clips, by file. When a recording isn't uploaded yet, the player reads
 * the script with the device voice instead. Bands register their clips here.
 */
const SCRIPTS = new Map<string, string>();
export function registerClips(list: { file: string; script: string }[]) { for (const c of list) SCRIPTS.set(c.file, c.script); }
export const clipScript = (file: string) => SCRIPTS.get(file);
