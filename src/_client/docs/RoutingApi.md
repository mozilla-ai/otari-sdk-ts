# RoutingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePolicyV1RoutingPoliciesNameDelete**](RoutingApi.md#deletepolicyv1routingpoliciesnamedelete) | **DELETE** /v1/routing/policies/{name} | Delete Policy |
| [**explainPolicyV1RoutingPoliciesExplainPost**](RoutingApi.md#explainpolicyv1routingpoliciesexplainpost) | **POST** /v1/routing/policies/explain | Explain Policy |
| [**listPoliciesV1RoutingPoliciesGet**](RoutingApi.md#listpoliciesv1routingpoliciesget) | **GET** /v1/routing/policies | List Policies |
| [**rankCandidatesV1RoutingPreferencesRankPost**](RoutingApi.md#rankcandidatesv1routingpreferencesrankpost) | **POST** /v1/routing/preferences/rank | Rank Candidates |
| [**routingMemoryStatusV1RoutingStatusGet**](RoutingApi.md#routingmemorystatusv1routingstatusget) | **GET** /v1/routing/status | Routing Memory Status |
| [**setPolicyV1RoutingPoliciesPost**](RoutingApi.md#setpolicyv1routingpoliciespost) | **POST** /v1/routing/policies | Set Policy |



## deletePolicyV1RoutingPoliciesNameDelete

> deletePolicyV1RoutingPoliciesNameDelete(name, userId)

Delete Policy

Delete a stored policy in one scope.  Scoped by &#x60;&#x60;user_id&#x60;&#x60; for the same reason the upsert is: deleting the global policy must not take a user\&#39;s override with it, and deleting an override must leave the global one serving everyone else.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { DeletePolicyV1RoutingPoliciesNameDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  const body = {
    // string
    name: name_example,
    // string | Delete the policy scoped to this user. Omit to delete the global one. (optional)
    userId: userId_example,
  } satisfies DeletePolicyV1RoutingPoliciesNameDeleteRequest;

  try {
    const data = await api.deletePolicyV1RoutingPoliciesNameDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` | Delete the policy scoped to this user. Omit to delete the global one. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## explainPolicyV1RoutingPoliciesExplainPost

> ExplainResponse explainPolicyV1RoutingPoliciesExplainPost(explainRequest)

Explain Policy

Compile a policy and return the plan, without dispatching anything.  Master-key gated, and deliberately so: the response enumerates the policy\&#39;s targets, which is exactly the information a policy exists to keep off the wire. It is a management surface, not a caller-facing one.  Accepts an unsaved &#x60;&#x60;spec&#x60;&#x60; as well as a saved &#x60;&#x60;name&#x60;&#x60;, so a form can validate what the operator is about to save. The response includes dropped candidates with reasons, which is the part that catches a \&quot;failover\&quot; policy that has quietly compiled down to a single attempt.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { ExplainPolicyV1RoutingPoliciesExplainPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  const body = {
    // ExplainRequest
    explainRequest: ...,
  } satisfies ExplainPolicyV1RoutingPoliciesExplainPostRequest;

  try {
    const data = await api.explainPolicyV1RoutingPoliciesExplainPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **explainRequest** | [ExplainRequest](ExplainRequest.md) |  | |

### Return type

[**ExplainResponse**](ExplainResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPoliciesV1RoutingPoliciesGet

> Array&lt;PolicyResponse&gt; listPoliciesV1RoutingPoliciesGet()

List Policies

List every routing policy in force, from config.yml and from storage.  Every scope at once, global and user-scoped alike: this is the master-key management view, not what any one caller resolves.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { ListPoliciesV1RoutingPoliciesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  try {
    const data = await api.listPoliciesV1RoutingPoliciesGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;PolicyResponse&gt;**](PolicyResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rankCandidatesV1RoutingPreferencesRankPost

> RankResponse rankCandidatesV1RoutingPreferencesRankPost(rankRequest)

Rank Candidates

Record scored examples: one routing-memory record each, plus an audit row.  The routing-memory record is written before its audit row for each example, because it is the load-bearing one (the router votes over it) and embedding it can fail; writing the audit row only afterwards means a failed embedding never leaves an orphan audit row.  A failed embedding is a 502 that names the model, not a 500. Every example in the batch is embedded, so this is the call an operator makes most often and the one most likely to meet a misconfigured &#x60;&#x60;router_embedding_model&#x60;&#x60;.  Score keys are stored canonically as &#x60;&#x60;instance:model&#x60;&#x60; (see :func:&#x60;_validated_scores&#x60;), which is the form the router canonicalizes its candidates to, so how a policy spells a candidate cannot decide whether it matches.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RankCandidatesV1RoutingPreferencesRankPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  const body = {
    // RankRequest
    rankRequest: ...,
  } satisfies RankCandidatesV1RoutingPreferencesRankPostRequest;

  try {
    const data = await api.rankCandidatesV1RoutingPreferencesRankPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rankRequest** | [RankRequest](RankRequest.md) |  | |

### Return type

[**RankResponse**](RankResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routingMemoryStatusV1RoutingStatusGet

> RouterStatus routingMemoryStatusV1RoutingStatusGet(userId)

Routing Memory Status

Report how warm one user\&#39;s routing memory is, per pool.  &#x60;&#x60;user_id&#x60;&#x60; is required rather than optional because there is no aggregate answer: warmth is per user, and a total across users would describe a pool that no request ever votes over.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingMemoryStatusV1RoutingStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  const body = {
    // string | Whose routing memory to report on.
    userId: userId_example,
  } satisfies RoutingMemoryStatusV1RoutingStatusGetRequest;

  try {
    const data = await api.routingMemoryStatusV1RoutingStatusGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `string` | Whose routing memory to report on. | [Defaults to `undefined`] |

### Return type

[**RouterStatus**](RouterStatus.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPolicyV1RoutingPoliciesPost

> PolicyResponse setPolicyV1RoutingPoliciesPost(policyRequest)

Set Policy

Create or update a stored policy, global or scoped to one user.  The spec is validated here and stored as given, so a row can never contain a body this build would refuse at load. The cache is refreshed twice: once before validating (so the shadowing checks see other writers\&#39; policies) and once after committing (so this worker serves the new policy immediately).  &#x60;&#x60;rename_from&#x60;&#x60; renames the row instead of keying on &#x60;&#x60;name&#x60;&#x60;. It is part of this write rather than an endpoint of its own so that an edit which both renames a policy and re-targets it cannot land half-applied, leaving the old name serving the new spec. The new name is validated exactly as a fresh one is, because a rename can walk a policy into every collision a create can. Sending the field asserts the named policy is stored, so it never falls back to creating one.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { SetPolicyV1RoutingPoliciesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RoutingApi(config);

  const body = {
    // PolicyRequest
    policyRequest: ...,
  } satisfies SetPolicyV1RoutingPoliciesPostRequest;

  try {
    const data = await api.setPolicyV1RoutingPoliciesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **policyRequest** | [PolicyRequest](PolicyRequest.md) |  | |

### Return type

[**PolicyResponse**](PolicyResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

