/**
 * Typed client for the gateway control-plane (management) endpoints.
 *
 * Rebuilt on the full OpenAPI-generated core in `./_client` (the same core that
 * backs the inference path). These endpoints authenticate with
 * `Authorization: Bearer <admin/master key>`, distinct from the `Otari-Key`
 * virtual key used for inference. Obtain an instance via
 * {@link OtariClient.controlPlane}.
 *
 * Method names on the API objects are generator-derived (for example
 * `keys.createKeyV1KeysPost(...)`); friendlier aliases are a planned follow-up.
 */

import {
  BudgetsApi,
  Configuration,
  KeysApi,
  PricingApi,
  UsageApi,
  UsersApi,
} from "./_client/index.js";

export class ControlPlane {
  readonly keys: KeysApi;
  readonly users: UsersApi;
  readonly budgets: BudgetsApi;
  readonly pricing: PricingApi;
  readonly usage: UsageApi;

  constructor(baseUrl: string, bearerToken: string, fetchApi?: typeof fetch) {
    const config = new Configuration({
      // The generated operation paths already include the `/v1` prefix, so the
      // control-plane targets the gateway root.
      basePath: baseUrl,
      headers: { Authorization: `Bearer ${bearerToken}` },
      fetchApi,
    });
    this.keys = new KeysApi(config);
    this.users = new UsersApi(config);
    this.budgets = new BudgetsApi(config);
    this.pricing = new PricingApi(config);
    this.usage = new UsageApi(config);
  }
}
