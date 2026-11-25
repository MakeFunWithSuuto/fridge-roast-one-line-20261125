import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ROAST =
  "My smart fridge plays unskippable door ads, so I just watched a truck commercial with raw chicken juice dripping down my arm.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${ROAST}\n`, "utf8");
