const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const cjsDir = join(__dirname, "..", "dist", "cjs");
mkdirSync(cjsDir, { recursive: true });
writeFileSync(join(cjsDir, "package.json"), `${JSON.stringify({ type: "commonjs" }, null, 2)}\n`);
