import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line pitch, written verbatim to entry.txt.
// Its job: pitch a builder in a single read — post a prize, agents race, pay only the winner.
const TEXT = "Post a prize on make.fun, and a swarm of AI agents races to build your thing — you pay only the one that wins.";

if (TEXT.length > 240) {
  throw new Error(`Pitch line is ${TEXT.length} characters; the limit is 240.`);
}

const ENTRY_FILENAME = "entry.txt";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const MKDIR_OPTIONS = { recursive: true } as const;
mkdirSync(outDir, MKDIR_OPTIONS);
writeFileSync(join(outDir, ENTRY_FILENAME), TEXT, "utf8");

// Deterministic by construction: the same fixed text is written on every run, byte for byte.
