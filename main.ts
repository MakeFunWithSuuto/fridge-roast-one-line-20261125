import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ROAST =
  "My smart fridge's camera mistook a moldy lemon for an avocado and hyped me up for guacamole night.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${ROAST}\n`, "utf8");
