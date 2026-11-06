# RoutingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**routingDeleteOrganizationRoutingPolicy**](RoutingApi.md#routingdeleteorganizationroutingpolicy) | **DELETE** /api/v1/organizations/me/routing-policies/{name} | Delete Organization Routing Policy |
| [**routingDeletePolicy**](RoutingApi.md#routingdeletepolicy) | **DELETE** /api/v1/routing/policies/{name} | Delete Policy |
| [**routingExplainPolicy**](RoutingApi.md#routingexplainpolicy) | **POST** /api/v1/routing/policies/explain | Explain Policy |
| [**routingListAutomaticFallbacks**](RoutingApi.md#routinglistautomaticfallbacks) | **GET** /api/v1/organizations/me/automatic-fallbacks | List Automatic Fallbacks |
| [**routingListPolicies**](RoutingApi.md#routinglistpolicies) | **GET** /api/v1/routing/policies | List Policies |
| [**routingListVisibleRoutingPolicies**](RoutingApi.md#routinglistvisibleroutingpolicies) | **GET** /api/v1/organizations/me/routing-policies | List Visible Routing Policies |
| [**routingRecommendModelForAgent**](RoutingApi.md#routingrecommendmodelforagent) | **POST** /api/v1/routing/recommend | Recommend Model For Agent |
| [**routingSetOrganizationRoutingPolicy**](RoutingApi.md#routingsetorganizationroutingpolicy) | **POST** /api/v1/organizations/me/routing-policies | Set Organization Routing Policy |
| [**routingSetPolicy**](RoutingApi.md#routingsetpolicy) | **POST** /api/v1/routing/policies | Set Policy |



## routingDeleteOrganizationRoutingPolicy

> routingDeleteOrganizationRoutingPolicy(name, workspaceId)

Delete Organization Routing Policy

Delete a stored policy from one of the organization\&#39;s workspaces. Owners and admins only.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingDeleteOrganizationRoutingPolicyRequest } from '';

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
  } satisfies RoutingDeleteOrganizationRoutingPolicyRequest;

  try {
    const data = await api.routingDeleteOrganizationRoutingPolicy(body);
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


## routingDeletePolicy

> routingDeletePolicy(name, userId, workspaceId)

Delete Policy

Delete a stored policy in one scope.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingDeletePolicyRequest } from '';

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
  } satisfies RoutingDeletePolicyRequest;

  try {
    const data = await api.routingDeletePolicy(body);
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


## routingExplainPolicy

> ExplainResponse routingExplainPolicy(explainRequest)

Explain Policy

Compile a policy and return the plan, without dispatching anything.  Operator-gated, and deliberately so: the response enumerates the policy\&#39;s targets, which is exactly the information a policy exists to keep off the wire. It is a management surface, not a caller-facing one.  Accepts an unsaved &#x60;&#x60;spec&#x60;&#x60; as well as a saved &#x60;&#x60;name&#x60;&#x60;, so a form can validate what the operator is about to save. The response includes dropped candidates with reasons, which is the part that catches a \&quot;failover\&quot; policy that has quietly compiled down to a single attempt.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingExplainPolicyRequest } from '';

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
  } satisfies RoutingExplainPolicyRequest;

  try {
    const data = await api.routingExplainPolicy(body);
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


## routingListAutomaticFallbacks

> AutomaticFallbacksResponse routingListAutomaticFallbacks()

List Automatic Fallbacks

The models the caller\&#39;s organization sent requests to in the last 30 days, and the fallback each gets.  A request that sends a model\&#39;s catalog ID moves to the model\&#39;s next offering when one fails, with no policy. Each model lists its offerings in the order such a request tries them before automatic selection reorders it, each with its input price for this organization and who runs the built-in tools on it, beside its traffic: how many requests a backup served, and how many named one offering or a policy instead, by API key and provider. The traffic is the workspaces the caller may see in their active organization, by the rule the organization\&#39;s usage reads use.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingListAutomaticFallbacksRequest } from '';

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
    const data = await api.routingListAutomaticFallbacks();
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

[**AutomaticFallbacksResponse**](AutomaticFallbacksResponse.md)

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


## routingListPolicies

> Array&lt;PolicyResponse&gt; routingListPolicies(workspaceId)

List Policies

List every routing policy in force in your organization, from config.yml and from storage.  Every scope at once, workspace-wide and user-scoped alike: this is the master-key management view, not what any one caller resolves.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingListPoliciesRequest } from '';

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
    // string | Only stored policies in this workspace. Config-file policies are always included, being deployment-wide. Omit to list the stored policies of every workspace in your organization. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RoutingListPoliciesRequest;

  try {
    const data = await api.routingListPolicies(body);
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
| **workspaceId** | `string` | Only stored policies in this workspace. Config-file policies are always included, being deployment-wide. Omit to list the stored policies of every workspace in your organization. | [Optional] [Defaults to `undefined`] |

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


## routingListVisibleRoutingPolicies

> Array&lt;PolicyResponse&gt; routingListVisibleRoutingPolicies(limit, workspaceId)

List Visible Routing Policies

List the routing policies in force in the workspaces this caller may see.  Stored policies from the caller\&#39;s visible workspaces plus the config-file policies, which are deployment-wide and resolve in every workspace. The response is the shape &#x60;&#x60;GET /api/v1/routing/policies&#x60;&#x60; answers, narrowed to the caller\&#39;s own organization, and narrowed again to one workspace when &#x60;&#x60;workspace_id&#x60;&#x60; names one.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingListVisibleRoutingPoliciesRequest } from '';

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
    // string | Only stored entries in this workspace. Config-file entries are always included, being deployment-wide. Omit for every workspace this caller may see. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RoutingListVisibleRoutingPoliciesRequest;

  try {
    const data = await api.routingListVisibleRoutingPolicies(body);
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
| **workspaceId** | `string` | Only stored entries in this workspace. Config-file entries are always included, being deployment-wide. Omit for every workspace this caller may see. | [Optional] [Defaults to `undefined`] |

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


## routingRecommendModelForAgent

> AgentModelRecommendation routingRecommendModelForAgent(agentModelRecommendationRequest)

Recommend Model For Agent

Recommend the model a subagent about to start should run on.  The harness sends the facts it holds at spawn time: its own ids for the session and the spawning tool call, the subagent type, the task, the parent\&#39;s model and the model the caller asked for, if any. The recommender this build binds picks one of the candidate models and the answer names it. By default the deployment asks the subagent router an operator switched on in the dashboard to choose among &#x60;agent_recommender_candidates&#x60; for Claude Code and among the request\&#39;s own &#x60;candidates&#x60; for pi; a bootstrap may bind a recommender of its own, which the caller never configures. Where the recommender reports them, the answer also carries a one-line reason and its probability for each candidate.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and names who the decision is billed to. - API key: the decision is billed to the key\&#39;s own user.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingRecommendModelForAgentRequest } from '';

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
    // AgentModelRecommendationRequest
    agentModelRecommendationRequest: ...,
  } satisfies RoutingRecommendModelForAgentRequest;

  try {
    const data = await api.routingRecommendModelForAgent(body);
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
| **agentModelRecommendationRequest** | [AgentModelRecommendationRequest](AgentModelRecommendationRequest.md) |  | |

### Return type

[**AgentModelRecommendation**](AgentModelRecommendation.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | No subagent router is switched on, or a master-key call names no &#x60;user&#x60;. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routingSetOrganizationRoutingPolicy

> PolicyResponse routingSetOrganizationRoutingPolicy(policyRequest)

Set Organization Routing Policy

Create or update a stored policy in one of the organization\&#39;s workspaces.  Organization owners and admins only. &#x60;&#x60;workspace_id&#x60;&#x60; is required and must name a workspace of the caller\&#39;s own organization; &#x60;&#x60;user_id&#x60;&#x60; is not accepted here.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingSetOrganizationRoutingPolicyRequest } from '';

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
  } satisfies RoutingSetOrganizationRoutingPolicyRequest;

  try {
    const data = await api.routingSetOrganizationRoutingPolicy(body);
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


## routingSetPolicy

> PolicyResponse routingSetPolicy(policyRequest)

Set Policy

Create or update a stored policy in one workspace, optionally for one user.  Omitting &#x60;&#x60;workspace_id&#x60;&#x60; means the deployment\&#39;s default workspace, which is where an operator acting deployment-wide writes.

### Example

```ts
import {
  Configuration,
  RoutingApi,
} from '';
import type { RoutingSetPolicyRequest } from '';

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
  } satisfies RoutingSetPolicyRequest;

  try {
    const data = await api.routingSetPolicy(body);
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

