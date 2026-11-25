import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ROAST =
  "My smart fridge's AI camera mistook a moldy lemon for an avocado and emailed me a brunch recipe.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${ROAST}\n`, "utf8");
