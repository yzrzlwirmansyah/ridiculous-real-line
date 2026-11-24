import fs from "node:fs";

const sentence =
  "Our subscription mails your houseplants to a spa for a week of misting, pruning and pep talks, because travelling plant parents will pay to come home to thriving leaves instead of a funeral.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence);
