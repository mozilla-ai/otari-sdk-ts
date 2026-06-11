/**
 * The gateway/spec version is surfaced on the public package.
 *
 * The gateway codegen stamps the spec version into the generated core
 * (`src/_client/specVersion.ts`); the package re-exports it as `SPEC_VERSION`
 * so callers can tell which gateway spec this SDK targets. This guards the
 * wiring (a stale literal in `index.ts` would diverge from the generated one).
 */

import { describe, expect, it } from "vitest";
import { SPEC_VERSION as marker } from "../../src/_client/specVersion.js";
import { SPEC_VERSION } from "../../src/index.js";

describe("SPEC_VERSION", () => {
  it("re-exports the generated core's spec version", () => {
    expect(SPEC_VERSION).toBe(marker);
    expect(typeof SPEC_VERSION).toBe("string");
    expect(SPEC_VERSION.length).toBeGreaterThan(0);
  });
});
