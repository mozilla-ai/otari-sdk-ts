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
 * `controlPlane.keys.raw.createKeyV1KeysPost(...)`), so the full generated
 * surface remains available as an escape hatch.
 */

import {
  BudgetsApi,
  Configuration,
  KeysApi,
  PricingApi,
  UsageApi,
  UsersApi,
} from "./_client/index.js";

/** Ergonomic aliases for the API-keys management endpoints. */
export class KeysResource {
  constructor(readonly raw: KeysApi) {}

  create(...args: Parameters<KeysApi["createKeyV1KeysPost"]>) {
    return this.raw.createKeyV1KeysPost(...args);
  }

  get(...args: Parameters<KeysApi["getKeyV1KeysKeyIdGet"]>) {
    return this.raw.getKeyV1KeysKeyIdGet(...args);
  }

  list(...args: Parameters<KeysApi["listKeysV1KeysGet"]>) {
    return this.raw.listKeysV1KeysGet(...args);
  }

  update(...args: Parameters<KeysApi["updateKeyV1KeysKeyIdPatch"]>) {
    return this.raw.updateKeyV1KeysKeyIdPatch(...args);
  }

  delete(...args: Parameters<KeysApi["deleteKeyV1KeysKeyIdDelete"]>) {
    return this.raw.deleteKeyV1KeysKeyIdDelete(...args);
  }
}

/** Ergonomic aliases for the users management endpoints. */
export class UsersResource {
  constructor(readonly raw: UsersApi) {}

  create(...args: Parameters<UsersApi["createUserV1UsersPost"]>) {
    return this.raw.createUserV1UsersPost(...args);
  }

  get(...args: Parameters<UsersApi["getUserV1UsersUserIdGet"]>) {
    return this.raw.getUserV1UsersUserIdGet(...args);
  }

  list(...args: Parameters<UsersApi["listUsersV1UsersGet"]>) {
    return this.raw.listUsersV1UsersGet(...args);
  }

  update(...args: Parameters<UsersApi["updateUserV1UsersUserIdPatch"]>) {
    return this.raw.updateUserV1UsersUserIdPatch(...args);
  }

  delete(...args: Parameters<UsersApi["deleteUserV1UsersUserIdDelete"]>) {
    return this.raw.deleteUserV1UsersUserIdDelete(...args);
  }

  getUsage(...args: Parameters<UsersApi["getUserUsageV1UsersUserIdUsageGet"]>) {
    return this.raw.getUserUsageV1UsersUserIdUsageGet(...args);
  }
}

/** Ergonomic aliases for the budgets management endpoints. */
export class BudgetsResource {
  constructor(readonly raw: BudgetsApi) {}

  create(...args: Parameters<BudgetsApi["createBudgetV1BudgetsPost"]>) {
    return this.raw.createBudgetV1BudgetsPost(...args);
  }

  get(...args: Parameters<BudgetsApi["getBudgetV1BudgetsBudgetIdGet"]>) {
    return this.raw.getBudgetV1BudgetsBudgetIdGet(...args);
  }

  list(...args: Parameters<BudgetsApi["listBudgetsV1BudgetsGet"]>) {
    return this.raw.listBudgetsV1BudgetsGet(...args);
  }

  update(...args: Parameters<BudgetsApi["updateBudgetV1BudgetsBudgetIdPatch"]>) {
    return this.raw.updateBudgetV1BudgetsBudgetIdPatch(...args);
  }

  delete(...args: Parameters<BudgetsApi["deleteBudgetV1BudgetsBudgetIdDelete"]>) {
    return this.raw.deleteBudgetV1BudgetsBudgetIdDelete(...args);
  }
}

/** Ergonomic aliases for the model-pricing management endpoints. */
export class PricingResource {
  constructor(readonly raw: PricingApi) {}

  list(...args: Parameters<PricingApi["listPricingV1PricingGet"]>) {
    return this.raw.listPricingV1PricingGet(...args);
  }

  get(...args: Parameters<PricingApi["getPricingV1PricingModelKeyGet"]>) {
    return this.raw.getPricingV1PricingModelKeyGet(...args);
  }

  set(...args: Parameters<PricingApi["setPricingV1PricingPost"]>) {
    return this.raw.setPricingV1PricingPost(...args);
  }

  delete(...args: Parameters<PricingApi["deletePricingV1PricingModelKeyDelete"]>) {
    return this.raw.deletePricingV1PricingModelKeyDelete(...args);
  }

  getHistory(...args: Parameters<PricingApi["getPricingHistoryV1PricingModelKeyHistoryGet"]>) {
    return this.raw.getPricingHistoryV1PricingModelKeyHistoryGet(...args);
  }
}

/** Ergonomic aliases for the usage-log management endpoints. */
export class UsageResource {
  constructor(readonly raw: UsageApi) {}

  list(...args: Parameters<UsageApi["listUsageV1UsageGet"]>) {
    return this.raw.listUsageV1UsageGet(...args);
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
      // The generated operation paths already include the `/v1` prefix, so the
      // control-plane targets the gateway root.
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
