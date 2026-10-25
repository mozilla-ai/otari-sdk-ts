import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const repoRoot = join(__dirname, "..", "..");
let fixtureDir: string;

function runNpm(args: string[], cwd: string): void {
  if (process.env.npm_execpath) {
    execFileSync(process.execPath, [process.env.npm_execpath, ...args], { cwd, stdio: "pipe" });
    return;
  }
  execFileSync("npm", args, { cwd, shell: process.platform === "win32", stdio: "pipe" });
}

describe("package exports", () => {
  beforeAll(() => {
    runNpm(["run", "build"], repoRoot);

    fixtureDir = mkdtempSync(join(tmpdir(), "otari-cjs-"));
    writeFileSync(join(fixtureDir, "package.json"), `${JSON.stringify({ type: "commonjs" })}\n`);
    runNpm(["install", repoRoot, "--ignore-scripts"], fixtureDir);
  }, 90_000);

  afterAll(() => {
    rmSync(join(repoRoot, "dist"), { recursive: true, force: true });
    if (fixtureDir) rmSync(fixtureDir, { recursive: true, force: true });
  });

  it("exposes the SDK to CommonJS require consumers", () => {
    const scriptPath = join(fixtureDir, "require-otari.cjs");
    const tmpDirForWindows = join(fixtureDir, "tmp");
    mkdirSync(tmpDirForWindows);

    writeFileSync(
      scriptPath,
      [
        'const sdk = require("@mozilla-ai/otari");',
        "if (typeof sdk.OtariClient !== 'function') throw new Error('OtariClient missing');",
        "if (typeof sdk.AuthenticationError !== 'function') throw new Error('AuthenticationError missing');",
      ].join("\n"),
    );

    expect(() => {
      execFileSync(process.execPath, [scriptPath], {
        cwd: fixtureDir,
        env: { ...process.env, TEMP: tmpDirForWindows, TMP: tmpDirForWindows },
        stdio: "pipe",
      });
    }).not.toThrow();
  });
});
