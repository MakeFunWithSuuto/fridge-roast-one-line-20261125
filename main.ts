import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ROAST =
  "My smart fridge won't dispense water without a $60 chipped filter—my tap water has a cover charge now.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${ROAST}\n`, "utf8");
