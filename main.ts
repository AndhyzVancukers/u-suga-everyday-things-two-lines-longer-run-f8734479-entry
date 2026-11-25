import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const lineOne =
  "A traffic jam is a slinky made of cars: it stretches, bunches up, and the bunch travels backward even though every car moves forward.";
const lineTwo =
  "The slinky maps how a slow patch ripples backward through moving cars, but it leaves out why the first car braked.";

const out = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lineOne + "\n" + lineTwo + "\n", "utf8");
