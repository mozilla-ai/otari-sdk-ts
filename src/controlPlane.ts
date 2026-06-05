/**
 * Typed client for the gateway control-plane (management) endpoints.
 *
 * Wraps the generated `_control_plane` client. These endpoints authenticate with
 * `Authorization: Bearer <admin/master key>`, distinct from the `Otari-Key`
 * virtual key used for inference. Obtain an instance via {@link OtariClient.controlPlane}.
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
} from "./_control_plane/index.js";

export class ControlPlane {
  readonly keys: KeysApi;
  readonly users: UsersApi;
  readonly budgets: BudgetsApi;
  readonly pricing: PricingApi;
  readonly usage: UsageApi;

  constructor(baseUrl: string, bearerToken: string) {
    const config = new Configuration({
      basePath: baseUrl,
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    this.keys = new KeysApi(config);
    this.users = new UsersApi(config);
    this.budgets = new BudgetsApi(config);
    this.pricing = new PricingApi(config);
    this.usage = new UsageApi(config);
  }
}
