/**
 * Endpoint-coverage drift gate.
 *
 * Fetches the canonical otari gateway OpenAPI spec and asserts that every API
 * endpoint it exposes is accounted for in `sdk-endpoints.txt` -- either wrapped
 * by this SDK's public surface (`[covered]`) or deliberately deferred
 * (`[excluded]`). A new gateway endpoint in neither section fails this test, so
 * a future endpoint (as `/messages` once was) cannot silently go unsurfaced.
 *
 * The fetch uses the global `fetch`. It is skipped offline (network error /
 * `OTARI_SKIP_NETWORK_TESTS=1`) but runs in CI, where the network is available.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { beforeAll, describe, expect, it } from "vitest";

const SPEC_URL = "https://raw.githubusercontent.com/mozilla-ai/otari/main/docs/public/openapi.json";
const MANIFEST = fileURLToPath(new URL("../../sdk-endpoints.txt", import.meta.url));
const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete"]);

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

/** Extract `METHOD /path` pairs from an OpenAPI doc, dropping meta routes. */
function specEndpoints(spec: { paths?: Record<string, Record<string, unknown>> }): Set<string> {
  const eps = new Set<string>();
  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    if (path === "/health" || path.startsWith("/health/")) continue;
    for (const method of Object.keys(methods)) {
      if (HTTP_METHODS.has(method.toLowerCase())) {
        eps.add(`${method.toUpperCase()} ${path}`);
      }
    }
  }
  return eps;
}

const skipNetwork = process.env.OTARI_SKIP_NETWORK_TESTS === "1";

describe("endpoint-coverage drift gate", () => {
  const { covered, excluded } = parseManifest(readFileSync(MANIFEST, "utf8"));
  let spec: Set<string> | null = null;
  let fetchError: string | null = null;

  beforeAll(async () => {
    if (skipNetwork) return;
    try {
      const res = await fetch(SPEC_URL, { signal: AbortSignal.timeout(30_000) });
      if (!res.ok) {
        fetchError = `HTTP ${res.status} fetching ${SPEC_URL}`;
        return;
      }
      spec = specEndpoints(await res.json());
    } catch (err) {
      fetchError = `could not fetch otari OpenAPI spec from ${SPEC_URL}: ${String(err)}`;
    }
  });

  it("manifest parses with non-empty, disjoint sections", () => {
    expect(covered.size).toBeGreaterThan(0);
    const overlap = [...covered].filter((e) => excluded.has(e));
    expect(overlap, `endpoints in both sections: ${overlap.join(", ")}`).toEqual([]);
  });

  it("every spec endpoint is accounted for (covered or excluded)", (ctx) => {
    if (skipNetwork || fetchError) {
      ctx.skip(fetchError ?? "OTARI_SKIP_NETWORK_TESTS=1");
      return;
    }
    const accounted = new Set([...covered, ...excluded]);
    const unaccounted = [...(spec as Set<string>)].filter((e) => !accounted.has(e)).sort();
    expect(
      unaccounted,
      `Gateway OpenAPI exposes endpoint(s) the SDK does not account for: ` +
        `${JSON.stringify(unaccounted)}. Add a public wrapper and list under ` +
        `[covered], or defer it under [excluded] with a reason, in sdk-endpoints.txt.`,
    ).toEqual([]);
  });

  it("manifest has no stale entries (warn-only skip)", (ctx) => {
    if (skipNetwork || fetchError) {
      ctx.skip(fetchError ?? "OTARI_SKIP_NETWORK_TESTS=1");
      return;
    }
    const stale = [...covered, ...excluded].filter((e) => !(spec as Set<string>).has(e)).sort();
    if (stale.length > 0) {
      ctx.skip(`manifest entries not present in current spec (review): ${stale.join(", ")}`);
    }
  });
});
