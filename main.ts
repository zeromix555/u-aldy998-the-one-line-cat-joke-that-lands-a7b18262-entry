// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262 — entry program (Node 22, standard library only).
//
// Writes one joke about cats, a single line under 200 characters, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when the grader sets
// it). Setup: the cat only cuddles when the Wi-Fi is down. Turn: the owner
// is not the cat's person, just its hotspot. Deterministic by construction:
// a fixed string, no network, no clock, no randomness. Running it twice
// writes identical bytes.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cat only cuddles me when the Wi-Fi is down — turns out I'm not his person, I'm his hotspot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, LINE, "utf8");

// Read back what was written so a truncated write can never pass silently.
const written = readFileSync(target, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt mismatch: output differs from the entry line");
}

console.log(`entry.txt: ${Buffer.byteLength(LINE, "utf8")} bytes -> ${target}`);
