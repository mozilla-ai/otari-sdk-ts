/**
 * Endpoint-coverage manifest checks.
 *
 * `sdk-endpoints.txt` records which gateway endpoints this SDK surfaces
 * (`[covered]`) and which it deliberately does not (`[excluded]`). The file is a
 * generated artifact: the gateway's codegen workflow pushes it here alongside
 * the generated core, from the canonical copy at
 * `scripts/sdk_codegen/sdk-endpoints.txt` in `mozilla-ai/otari`.
 *
 * The drift gate itself lives in the gateway, where the manifest is validated
 * against `docs/public/openapi.json` from the same commit. It used to live here
 * and fetch the spec from `main` over the network at test time, which made the
 * result depend on when the test ran rather than on what the commit contained:
 * an unchanged commit passed one day and failed the next, and because CI only
 * runs on push and pull_request, `main` sat red unnoticed for over two weeks
 * (mozilla-ai/otari#438). What remains here is offline and deterministic.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const MANIFEST = fileURLToPath(new URL("../../sdk-endpoints.txt", import.meta.url));
const HTTP_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);

/** Parse the manifest into { covered, excluded } endpoint sets. */
function parseManifest(text: string): { covered: Set<string>; excluded: Set<string> } {
  const covered = new Set<string>();
  const excluded = new Set<string>();
  let section: Set<string> | null = null;
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    if (line === "[covered]") {
      section = covered;
      continue;
    }
    if (line === "[excluded]") {
      section = excluded;
      continue;
    }
    const entry = (line.split("#", 1)[0] ?? "").trim();
    if (!entry || section === null) continue;
    const [method, ...rest] = entry.split(/\s+/);
    section.add(`${method.toUpperCase()} ${rest.join(" ")}`);
  }
  return { covered, excluded };
}

describe("endpoint-coverage manifest", () => {
  const { covered, excluded } = parseManifest(readFileSync(MANIFEST, "utf8"));

  it("has non-empty sections", () => {
    expect(covered.size).toBeGreaterThan(0);
    expect(excluded.size).toBeGreaterThan(0);
  });

  it("keeps the sections disjoint", () => {
    const overlap = [...covered].filter((e) => excluded.has(e)).sort();
    expect(overlap, `endpoints in both sections: ${overlap.join(", ")}`).toEqual([]);
  });

  it("holds only well-formed METHOD /path entries", () => {
    const malformed = [...covered, ...excluded]
      .filter((entry) => {
        const [method, path] = entry.split(" ", 2);
        return !HTTP_METHODS.has(method) || !path?.startsWith("/");
      })
      .sort();
    expect(malformed, `malformed manifest entries: ${malformed.join(", ")}`).toEqual([]);
  });
});
