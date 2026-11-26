import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line = "Status: I'm in the fitted sheet again. Please tell my pair the dryer is innocent. The sheet did it.";
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
