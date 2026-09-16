/**
 * Unit tests for the control-plane ergonomic aliases.
 *
 * Each resource accessor (`keys`, `users`, `budgets`, `pricing`, `usage`)
 * exposes short aliases (`create`, `get`, `list`, ...) that delegate to the
 * generator-derived methods on the underlying generated API, which stays
 * reachable via `raw`. These tests stub `raw` and assert each alias forwards
 * to the right generated method with the right arguments, without a live
 * gateway.
 */

import { describe, expect, it, vi } from "vitest";
import { ControlPlane } from "../../src/controlPlane.js";
import { AuthenticationError } from "../../src/errors.js";

type Case = {
  resource: "keys" | "users" | "budgets" | "pricing" | "usage";
  alias: string;
  generated: string;
  args: unknown[];
};

const CASES: Case[] = [
  {
    resource: "keys",
    alias: "create",
    generated: "keysCreateKey",
    args: [{ createKeyRequest: {} }],
  },
  { resource: "keys", alias: "get", generated: "keysGetKey", args: [{ keyId: "k1" }] },
  {
    resource: "keys",
    alias: "list",
    generated: "keysListKeys",
    args: [{ skip: 1, limit: 2 }],
  },
  {
    resource: "keys",
    alias: "update",
    generated: "keysUpdateKey",
    args: [{ keyId: "k1", updateKeyRequest: {} }],
  },
  {
    resource: "keys",
    alias: "delete",
    generated: "keysDeleteKey",
    args: [{ keyId: "k1" }],
  },
  {
    resource: "users",
    alias: "create",
    generated: "usersCreateUser",
    args: [{ createUserRequest: {} }],
  },
  {
    resource: "users",
    alias: "get",
    generated: "usersGetUser",
    args: [{ userId: "u1" }],
  },
  { resource: "users", alias: "list", generated: "usersListUsers", args: [{}] },
  {
    resource: "users",
    alias: "update",
    generated: "usersUpdateUser",
    args: [{ userId: "u1", updateUserRequest: {} }],
  },
  {
    resource: "users",
    alias: "delete",
    generated: "usersDeleteUser",
    args: [{ userId: "u1" }],
  },
  {
    resource: "users",
    alias: "getUsage",
    generated: "usersGetUserUsage",
    args: [{ userId: "u1" }],
  },
  {
    resource: "budgets",
    alias: "create",
    generated: "budgetsCreateBudget",
    args: [{ createBudgetRequest: {} }],
  },
  {
    resource: "budgets",
    alias: "get",
    generated: "budgetsGetBudget",
    args: [{ budgetId: "b1" }],
  },
  { resource: "budgets", alias: "list", generated: "budgetsListBudgets", args: [{}] },
  {
    resource: "budgets",
    alias: "update",
    generated: "budgetsUpdateBudget",
    args: [{ budgetId: "b1", updateBudgetRequest: {} }],
  },
  {
    resource: "budgets",
    alias: "delete",
    generated: "budgetsDeleteBudget",
    args: [{ budgetId: "b1" }],
  },
  { resource: "pricing", alias: "list", generated: "pricingListPricing", args: [{}] },
  {
    resource: "pricing",
    alias: "get",
    generated: "pricingGetPricing",
    args: [{ modelKey: "m1" }],
  },
  {
    resource: "pricing",
    alias: "set",
    generated: "pricingSetPricing",
    args: [{ setPricingRequest: {} }],
  },
  {
    resource: "pricing",
    alias: "delete",
    generated: "pricingDeletePricing",
    args: [{ modelKey: "m1" }],
  },
  {
    resource: "pricing",
    alias: "getHistory",
    generated: "pricingGetPricingHistory",
    args: [{ modelKey: "m1" }],
  },
  {
    resource: "usage",
    alias: "list",
    generated: "usageListUsage",
    args: [{ userId: "u1", skip: 0, limit: 10 }],
  },
];

function controlPlane(): ControlPlane {
  return new ControlPlane("http://localhost:8000", "master");
}

describe("ControlPlane ergonomic aliases", () => {
  for (const { resource, alias, generated, args } of CASES) {
    it(`${resource}.${alias} delegates to raw.${generated}`, async () => {
      const cp = controlPlane();
      // Resources are indexed dynamically by name across the test table.
      const res = (cp as Record<string, { raw: Record<string, unknown> }>)[resource];
      const sentinel = { ok: true };
      const spy = vi.fn().mockResolvedValue(sentinel);
      res.raw[generated] = spy;

      const result = await (res as Record<string, (...a: unknown[]) => Promise<unknown>>)[alias](
        ...args,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(...args);
      expect(result).toBe(sentinel);
    });
  }

  it("forwards initOverrides through to the generated method", async () => {
    const cp = controlPlane();
    const spy = vi.fn().mockResolvedValue(undefined);
    cp.keys.raw.keysGetKey = spy;
    const overrides = { headers: { "X-Test": "1" } };

    await cp.keys.get({ keyId: "k1" }, overrides);

    expect(spy).toHaveBeenCalledWith({ keyId: "k1" }, overrides);
  });

  it("exposes the generated API via raw on every resource", () => {
    const cp = controlPlane();
    expect(typeof cp.keys.raw.keysCreateKey).toBe("function");
    expect(typeof cp.users.raw.usersListUsers).toBe("function");
    expect(typeof cp.budgets.raw.budgetsGetBudget).toBe("function");
    expect(typeof cp.pricing.raw.pricingSetPricing).toBe("function");
    expect(typeof cp.usage.raw.usageListUsage).toBe("function");
  });
});

// ---------------------------------------------------------------------------
// Error mapping: the ergonomic aliases route generated `ResponseError`s through
// the same status -> typed-error table as the inference path, so callers branch
// on the typed `OtariError` hierarchy instead of the raw generated error.
// ---------------------------------------------------------------------------

/**
 * A generated-core `ResponseError` look-alike: an `Error` carrying the raw
 * failed `fetch` `Response` on its `.response` field, which is what `mapError`
 * inspects.
 */
function responseError(status: number, detail: string): Error {
  const response = new Response(JSON.stringify({ detail }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
  return Object.assign(new Error(`Response returned status ${status}`), { response });
}

describe("ControlPlane error mapping", () => {
  // One representative alias per resource, covering all five resource classes.
  const ERROR_CASES: Case[] = [
    { resource: "keys", alias: "get", generated: "keysGetKey", args: [{ keyId: "k1" }] },
    {
      resource: "users",
      alias: "get",
      generated: "usersGetUser",
      args: [{ userId: "u1" }],
    },
    {
      resource: "budgets",
      alias: "get",
      generated: "budgetsGetBudget",
      args: [{ budgetId: "b1" }],
    },
    {
      resource: "pricing",
      alias: "get",
      generated: "pricingGetPricing",
      args: [{ modelKey: "m1" }],
    },
    {
      resource: "usage",
      alias: "list",
      generated: "usageListUsage",
      args: [{ userId: "u1" }],
    },
  ];

  for (const { resource, alias, generated, args } of ERROR_CASES) {
    it(`${resource}.${alias} maps a 401 ResponseError to AuthenticationError`, async () => {
      const cp = controlPlane();
      const res = (cp as Record<string, { raw: Record<string, unknown> }>)[resource];
      res.raw[generated] = vi.fn().mockRejectedValue(responseError(401, "nope"));

      const call = (res as Record<string, (...a: unknown[]) => Promise<unknown>>)[alias](...args);

      await expect(call).rejects.toBeInstanceOf(AuthenticationError);
      await expect(call).rejects.toMatchObject({ statusCode: 401 });
    });
  }

  it("propagates non-ResponseError failures unchanged", async () => {
    const cp = controlPlane();
    const boom = new Error("network down");
    cp.keys.raw.keysGetKey = vi.fn().mockRejectedValue(boom);

    await expect(cp.keys.get({ keyId: "k1" })).rejects.toBe(boom);
  });
});
