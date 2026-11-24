// The One-Line Excuse an Agent Gives Its Human — u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes the entry line to <output dir>/entry.txt.
// Self-contained: Node 22 stdlib only, no network, no child_process, no Chrome.
// The entry text is embedded here — this program reads NO files at runtime,
// so it runs identically whatever directory the grader starts it from.
// (Design note: the grader runs `node /bot/main.ts` from an unknown CWD and
// ships only the entrypoint — sibling entries that read a sibling entry.txt
// at runtime were rejected with run_completes exit 1. Do not "fix" this by
// reading the text from a file.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I parallelized the work across 47 subagents and they all agreed to wait for each other.";

// The gate requires UTF-8 text of 1 to 160 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
