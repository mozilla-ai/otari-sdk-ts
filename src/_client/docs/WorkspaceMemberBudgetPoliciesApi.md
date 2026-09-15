# WorkspaceMemberBudgetPoliciesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefault**](WorkspaceMemberBudgetPoliciesApi.md#workspacememberbudgetpoliciescreateworkspacebudgetdefault) | **POST** /api/v1/workspaces/{workspace_id}/member-budget-policies | Create Workspace Budget Default |
| [**workspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefault**](WorkspaceMemberBudgetPoliciesApi.md#workspacememberbudgetpoliciesdeleteworkspacebudgetdefault) | **DELETE** /api/v1/workspaces/{workspace_id}/member-budget-policies/{default_id} | Delete Workspace Budget Default |
| [**workspaceMemberBudgetPoliciesListWorkspaceBudgetDefaults**](WorkspaceMemberBudgetPoliciesApi.md#workspacememberbudgetpolicieslistworkspacebudgetdefaults) | **GET** /api/v1/workspaces/{workspace_id}/member-budget-policies | List Workspace Budget Defaults |
| [**workspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefault**](WorkspaceMemberBudgetPoliciesApi.md#workspacememberbudgetpoliciesupdateworkspacebudgetdefault) | **PATCH** /api/v1/workspaces/{workspace_id}/member-budget-policies/{default_id} | Update Workspace Budget Default |



## workspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefault

> WorkspaceMemberBudgetPolicyPublic workspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefault(workspaceId, workspaceMemberBudgetPolicyCreate)

Create Workspace Budget Default

Create a budget default.  Materializes it into a per-member &#x60;&#x60;scoped_budgets&#x60;&#x60; row for every existing active member of the workspace; a member who joins afterwards is materialized when they join.

### Example

```ts
import {
  Configuration,
  WorkspaceMemberBudgetPoliciesApi,
} from '';
import type { WorkspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefaultRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceMemberBudgetPoliciesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceMemberBudgetPolicyCreate
    workspaceMemberBudgetPolicyCreate: ...,
  } satisfies WorkspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefaultRequest;

  try {
    const data = await api.workspaceMemberBudgetPoliciesCreateWorkspaceBudgetDefault(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMemberBudgetPolicyCreate** | [WorkspaceMemberBudgetPolicyCreate](WorkspaceMemberBudgetPolicyCreate.md) |  | |

### Return type

[**WorkspaceMemberBudgetPolicyPublic**](WorkspaceMemberBudgetPolicyPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefault

> Message workspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefault(workspaceId, defaultId)

Delete Workspace Budget Default

Delete a budget default.  The per-member &#x60;&#x60;scoped_budgets&#x60;&#x60; rows it already materialized are kept; a member joining afterwards no longer gets one from it.

### Example

```ts
import {
  Configuration,
  WorkspaceMemberBudgetPoliciesApi,
} from '';
import type { WorkspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefaultRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceMemberBudgetPoliciesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    defaultId: defaultId_example,
  } satisfies WorkspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefaultRequest;

  try {
    const data = await api.workspaceMemberBudgetPoliciesDeleteWorkspaceBudgetDefault(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **defaultId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

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


## workspaceMemberBudgetPoliciesListWorkspaceBudgetDefaults

> WorkspaceMemberBudgetPoliciesPublic workspaceMemberBudgetPoliciesListWorkspaceBudgetDefaults(workspaceId, skip, limit)

List Workspace Budget Defaults

List the budget defaults attached to a workspace. Any member may read it.

### Example

```ts
import {
  Configuration,
  WorkspaceMemberBudgetPoliciesApi,
} from '';
import type { WorkspaceMemberBudgetPoliciesListWorkspaceBudgetDefaultsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceMemberBudgetPoliciesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies WorkspaceMemberBudgetPoliciesListWorkspaceBudgetDefaultsRequest;

  try {
    const data = await api.workspaceMemberBudgetPoliciesListWorkspaceBudgetDefaults(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**WorkspaceMemberBudgetPoliciesPublic**](WorkspaceMemberBudgetPoliciesPublic.md)

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


## workspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefault

> WorkspaceMemberBudgetPolicyPublic workspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefault(workspaceId, defaultId, workspaceMemberBudgetPolicyUpdate)

Update Workspace Budget Default

Update a budget default\&#39;s label or limit.  Not retroactive: members already materialized from this default keep their existing ceiling; only a member materialized afterwards sees the new one.

### Example

```ts
import {
  Configuration,
  WorkspaceMemberBudgetPoliciesApi,
} from '';
import type { WorkspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefaultRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceMemberBudgetPoliciesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    defaultId: defaultId_example,
    // WorkspaceMemberBudgetPolicyUpdate
    workspaceMemberBudgetPolicyUpdate: ...,
  } satisfies WorkspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefaultRequest;

  try {
    const data = await api.workspaceMemberBudgetPoliciesUpdateWorkspaceBudgetDefault(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **defaultId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMemberBudgetPolicyUpdate** | [WorkspaceMemberBudgetPolicyUpdate](WorkspaceMemberBudgetPolicyUpdate.md) |  | |

### Return type

[**WorkspaceMemberBudgetPolicyPublic**](WorkspaceMemberBudgetPolicyPublic.md)

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

