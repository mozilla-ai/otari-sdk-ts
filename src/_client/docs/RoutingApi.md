# RoutingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDelete**](RoutingApi.md#deleteorganizationroutingpolicyv1organizationsmeroutingpoliciesnamedelete) | **DELETE** /v1/organizations/me/routing-policies/{name} | Delete Organization Routing Policy |
| [**deletePolicyV1RoutingPoliciesNameDelete**](RoutingApi.md#deletepolicyv1routingpoliciesnamedelete) | **DELETE** /v1/routing/policies/{name} | Delete Policy |
| [**explainPolicyV1RoutingPoliciesExplainPost**](RoutingApi.md#explainpolicyv1routingpoliciesexplainpost) | **POST** /v1/routing/policies/explain | Explain Policy |
| [**listPoliciesV1RoutingPoliciesGet**](RoutingApi.md#listpoliciesv1routingpoliciesget) | **GET** /v1/routing/policies | List Policies |
| [**listVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGet**](RoutingApi.md#listvisibleroutingpoliciesv1organizationsmeroutingpoliciesget) | **GET** /v1/organizations/me/routing-policies | List Visible Routing Policies |
| [**rankCandidatesV1RoutingPreferencesRankPost**](RoutingApi.md#rankcandidatesv1routingpreferencesrankpost) | **POST** /v1/routing/preferences/rank | Rank Candidates |
| [**routingMemoryStatusV1RoutingStatusGet**](RoutingApi.md#routingmemorystatusv1routingstatusget) | **GET** /v1/routing/status | Routing Memory Status |
| [**setOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPost**](RoutingApi.md#setorganizationroutingpolicyv1organizationsmeroutingpoliciespost) | **POST** /v1/organizations/me/routing-policies | Set Organization Routing Policy |
| [**setPolicyV1RoutingPoliciesPost**](RoutingApi.md#setpolicyv1routingpoliciespost) | **POST** /v1/routing/policies | Set Policy |



## deleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDelete

> deleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDelete(name, workspaceId)

Delete Organization Routing Policy

Delete a stored policy from one of the organization\&#39;s workspaces. Owners and admins only.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { DeleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDeleteRequest } from '';

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
    // string | Delete the policy in this workspace of the caller\'s organization. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDeleteRequest;

  try {
    const data = await api.deleteOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesNameDelete(body);
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
| **workspaceId** | `string` | Delete the policy in this workspace of the caller\&#39;s organization. | [Optional] [Defaults to `undefined`] |

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


## deletePolicyV1RoutingPoliciesNameDelete

> deletePolicyV1RoutingPoliciesNameDelete(name, userId, workspaceId)

Delete Policy

Delete a stored policy in one scope.

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
    // string | Delete the policy scoped to this user. Omit to delete the workspace-wide one. (optional)
    userId: userId_example,
    // string | Delete the policy in this workspace. Omit for the deployment\'s default workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **userId** | `string` | Delete the policy scoped to this user. Omit to delete the workspace-wide one. | [Optional] [Defaults to `undefined`] |
| **workspaceId** | `string` | Delete the policy in this workspace. Omit for the deployment\&#39;s default workspace. | [Optional] [Defaults to `undefined`] |

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

Compile a policy and return the plan, without dispatching anything.  Operator-gated, and deliberately so: the response enumerates the policy\&#39;s targets, which is exactly the information a policy exists to keep off the wire. It is a management surface, not a caller-facing one.  Accepts an unsaved &#x60;&#x60;spec&#x60;&#x60; as well as a saved &#x60;&#x60;name&#x60;&#x60;, so a form can validate what the operator is about to save. The response includes dropped candidates with reasons, which is the part that catches a \&quot;failover\&quot; policy that has quietly compiled down to a single attempt.

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

> Array&lt;PolicyResponse&gt; listPoliciesV1RoutingPoliciesGet(workspaceId)

List Policies

List every routing policy in force, from config.yml and from storage.  Every scope at once, workspace-wide and user-scoped alike: this is the master-key management view, not what any one caller resolves.

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

  const body = {
    // string | Only stored policies in this workspace. Config-file policies are always included, being deployment-wide. Omit to list the stored policies of every workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListPoliciesV1RoutingPoliciesGetRequest;

  try {
    const data = await api.listPoliciesV1RoutingPoliciesGet(body);
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
| **workspaceId** | `string` | Only stored policies in this workspace. Config-file policies are always included, being deployment-wide. Omit to list the stored policies of every workspace. | [Optional] [Defaults to `undefined`] |

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
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGet

> Array&lt;PolicyResponse&gt; listVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGet(limit)

List Visible Routing Policies

List the routing policies in force in the workspaces this caller may see.  Stored policies from the caller\&#39;s visible workspaces plus the config-file policies, which are deployment-wide and resolve in every workspace. The response is the shape &#x60;&#x60;GET /v1/routing/policies&#x60;&#x60; answers, narrowed to the caller\&#39;s own organization.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { ListVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGetRequest } from '';

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
    // number | Maximum entries to return, stored and config-file together. (optional)
    limit: 56,
  } satisfies ListVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGetRequest;

  try {
    const data = await api.listVisibleRoutingPoliciesV1OrganizationsMeRoutingPoliciesGet(body);
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
| **limit** | `number` | Maximum entries to return, stored and config-file together. | [Optional] [Defaults to `1000`] |

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
| **422** | Validation Error |  -  |

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

> RouterStatus routingMemoryStatusV1RoutingStatusGet(userId, workspaceId)

Routing Memory Status

Report how warm one user\&#39;s routing memory is in one workspace, per pool.  &#x60;&#x60;user_id&#x60;&#x60; is required rather than optional because there is no aggregate answer: warmth is per user, and a total across users would describe a pool that no request ever votes over. The same holds across workspaces, which is why &#x60;&#x60;workspace_id&#x60;&#x60; narrows rather than aggregating; it merely defaults instead of being required, because a single-workspace deployment has one answer.

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
    // string | Which workspace\'s routing memory to report on. Omit for the default workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **workspaceId** | `string` | Which workspace\&#39;s routing memory to report on. Omit for the default workspace. | [Optional] [Defaults to `undefined`] |

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


## setOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPost

> PolicyResponse setOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPost(policyRequest)

Set Organization Routing Policy

Create or update a stored policy in one of the organization\&#39;s workspaces.  Organization owners and admins only. &#x60;&#x60;workspace_id&#x60;&#x60; is required and must name a workspace of the caller\&#39;s own organization; &#x60;&#x60;user_id&#x60;&#x60; is not accepted here.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { SetOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPostRequest } from '';

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
  } satisfies SetOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPostRequest;

  try {
    const data = await api.setOrganizationRoutingPolicyV1OrganizationsMeRoutingPoliciesPost(body);
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


## setPolicyV1RoutingPoliciesPost

> PolicyResponse setPolicyV1RoutingPoliciesPost(policyRequest)

Set Policy

Create or update a stored policy in one workspace, optionally for one user.  Omitting &#x60;&#x60;workspace_id&#x60;&#x60; means the deployment\&#39;s default workspace, which is where an operator acting deployment-wide writes.

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

