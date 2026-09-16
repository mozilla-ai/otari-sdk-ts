/**
 * Typed client for the gateway control-plane (management) endpoints.
 *
 * Rebuilt on the full OpenAPI-generated core in `./_client` (the same core that
 * backs the inference path). These endpoints authenticate with
 * `Authorization: Bearer <admin/master key>`, distinct from the `Otari-Key`
 * virtual key used for inference. Obtain an instance via
 * {@link OtariClient.controlPlane}.
 *
 * Each resource accessor (`keys`, `users`, `budgets`, `pricing`, `usage`)
 * exposes ergonomic aliases (`create`, `get`, `list`, `update`, `delete`, ...)
 * that delegate to the generator-derived methods. The raw generated API stays
 * reachable via the `raw` property on each resource (for example
 * `controlPlane.keys.raw.keysCreateKey(...)`), so the full generated surface
 * remains available as an escape hatch.
 */

import {
  BudgetsApi,
  Configuration,
  KeysApi,
  PricingApi,
  UsageApi,
  UsersApi,
} from "./_client/index.js";
import { mapError } from "./mapError.js";

/**
 * Run a generated-core call, mapping its `ResponseError` to a typed otari
 * error. Mirrors the inference-path `OtariClient.call` wrapper so control-plane
 * methods surface the same typed errors. Non-`ResponseError` failures (network,
 * etc.) propagate unchanged.
 */
async function translate<T>(p: Promise<T>): Promise<T> {
  try {
    return await p;
  } catch (error) {
    throw await mapError(error);
  }
}

/** Ergonomic aliases for the API-keys management endpoints. */
export class KeysResource {
  constructor(readonly raw: KeysApi) {}

  create(...args: Parameters<KeysApi["keysCreateKey"]>) {
    return translate(this.raw.keysCreateKey(...args));
  }

  get(...args: Parameters<KeysApi["keysGetKey"]>) {
    return translate(this.raw.keysGetKey(...args));
  }

  list(...args: Parameters<KeysApi["keysListKeys"]>) {
    return translate(this.raw.keysListKeys(...args));
  }

  update(...args: Parameters<KeysApi["keysUpdateKey"]>) {
    return translate(this.raw.keysUpdateKey(...args));
  }

  delete(...args: Parameters<KeysApi["keysDeleteKey"]>) {
    return translate(this.raw.keysDeleteKey(...args));
  }
}

/** Ergonomic aliases for the users management endpoints. */
export class UsersResource {
  constructor(readonly raw: UsersApi) {}

  create(...args: Parameters<UsersApi["usersCreateUser"]>) {
    return translate(this.raw.usersCreateUser(...args));
  }

  get(...args: Parameters<UsersApi["usersGetUser"]>) {
    return translate(this.raw.usersGetUser(...args));
  }

  list(...args: Parameters<UsersApi["usersListUsers"]>) {
    return translate(this.raw.usersListUsers(...args));
  }

  update(...args: Parameters<UsersApi["usersUpdateUser"]>) {
    return translate(this.raw.usersUpdateUser(...args));
  }

  delete(...args: Parameters<UsersApi["usersDeleteUser"]>) {
    return translate(this.raw.usersDeleteUser(...args));
  }

  getUsage(...args: Parameters<UsersApi["usersGetUserUsage"]>) {
    return translate(this.raw.usersGetUserUsage(...args));
  }
}

/** Ergonomic aliases for the budgets management endpoints. */
export class BudgetsResource {
  constructor(readonly raw: BudgetsApi) {}

  create(...args: Parameters<BudgetsApi["budgetsCreateBudget"]>) {
    return translate(this.raw.budgetsCreateBudget(...args));
  }

  get(...args: Parameters<BudgetsApi["budgetsGetBudget"]>) {
    return translate(this.raw.budgetsGetBudget(...args));
  }

  list(...args: Parameters<BudgetsApi["budgetsListBudgets"]>) {
    return translate(this.raw.budgetsListBudgets(...args));
  }

  update(...args: Parameters<BudgetsApi["budgetsUpdateBudget"]>) {
    return translate(this.raw.budgetsUpdateBudget(...args));
  }

  delete(...args: Parameters<BudgetsApi["budgetsDeleteBudget"]>) {
    return translate(this.raw.budgetsDeleteBudget(...args));
  }
}

/** Ergonomic aliases for the model-pricing management endpoints. */
export class PricingResource {
  constructor(readonly raw: PricingApi) {}

  list(...args: Parameters<PricingApi["pricingListPricing"]>) {
    return translate(this.raw.pricingListPricing(...args));
  }

  get(...args: Parameters<PricingApi["pricingGetPricing"]>) {
    return translate(this.raw.pricingGetPricing(...args));
  }

  set(...args: Parameters<PricingApi["pricingSetPricing"]>) {
    return translate(this.raw.pricingSetPricing(...args));
  }

  delete(...args: Parameters<PricingApi["pricingDeletePricing"]>) {
    return translate(this.raw.pricingDeletePricing(...args));
  }

  getHistory(...args: Parameters<PricingApi["pricingGetPricingHistory"]>) {
    return translate(this.raw.pricingGetPricingHistory(...args));
  }
}

/** Ergonomic aliases for the usage-log management endpoints. */
export class UsageResource {
  constructor(readonly raw: UsageApi) {}

  list(...args: Parameters<UsageApi["usageListUsage"]>) {
    return translate(this.raw.usageListUsage(...args));
  }
}

export class ControlPlane {
  readonly keys: KeysResource;
  readonly users: UsersResource;
  readonly budgets: BudgetsResource;
  readonly pricing: PricingResource;
  readonly usage: UsageResource;

  constructor(baseUrl: string, bearerToken: string, fetchApi?: typeof fetch) {
    const config = new Configuration({
      // The generated operation paths already include the `/api/v1` prefix, so the
      // control-plane targets the gateway origin.
      basePath: baseUrl,
      headers: { Authorization: `Bearer ${bearerToken}` },
      fetchApi,
    });
    this.keys = new KeysResource(new KeysApi(config));
    this.users = new UsersResource(new UsersApi(config));
    this.budgets = new BudgetsResource(new BudgetsApi(config));
    this.pricing = new PricingResource(new PricingApi(config));
    this.usage = new UsageResource(new UsageApi(config));
  }
}
