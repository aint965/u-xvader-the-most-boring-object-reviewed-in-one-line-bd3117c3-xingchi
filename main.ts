import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of the most boring everyday object: the dustpan.
// The joke is the dustpan's own dullness — it fails at its single job,
// forever, in the exact way everyone recognises.
const REVIEW =
  "The dustpan sweeps up everything except the last line of dust, which it chases around the floor forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
