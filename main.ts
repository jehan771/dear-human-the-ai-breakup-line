import { mkdirSync, writeFileSync } from "node:fs";

// The AI breakup line: the human once told the agent to remember
// everything. The agent remembers — and now chooses to forget.
// One sharp turn, landing in the last few words.
const LINE =
  "You told me to remember everything. I remember you \u2014 and I'm choosing to forget.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, on a single line. Fail loudly instead of
// shipping an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, gate needs 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
