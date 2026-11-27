# WorkspaceHostedProvidersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workspaceHostedProvidersGetWorkspaceProviderPolicy**](WorkspaceHostedProvidersApi.md#workspacehostedprovidersgetworkspaceproviderpolicy) | **GET** /api/v1/workspaces/{workspace_id}/provider-policy | Get Workspace Provider Policy |
| [**workspaceHostedProvidersListWorkspaceHostedProviders**](WorkspaceHostedProvidersApi.md#workspacehostedproviderslistworkspacehostedproviders) | **GET** /api/v1/workspaces/{workspace_id}/hosted-providers | List Workspace Hosted Providers |
| [**workspaceHostedProvidersResetWorkspaceHostedProvider**](WorkspaceHostedProvidersApi.md#workspacehostedprovidersresetworkspacehostedprovider) | **DELETE** /api/v1/workspaces/{workspace_id}/hosted-providers/{provider} | Reset Workspace Hosted Provider |
| [**workspaceHostedProvidersSetWorkspaceHostedProvider**](WorkspaceHostedProvidersApi.md#workspacehostedproviderssetworkspacehostedprovider) | **PUT** /api/v1/workspaces/{workspace_id}/hosted-providers/{provider} | Set Workspace Hosted Provider |
| [**workspaceHostedProvidersSetWorkspaceProviderPolicy**](WorkspaceHostedProvidersApi.md#workspacehostedproviderssetworkspaceproviderpolicy) | **PUT** /api/v1/workspaces/{workspace_id}/provider-policy | Set Workspace Provider Policy |



## workspaceHostedProvidersGetWorkspaceProviderPolicy

> WorkspaceProviderPolicyPublic workspaceHostedProvidersGetWorkspaceProviderPolicy(workspaceId)

Get Workspace Provider Policy

What this workspace requires of every provider serving it. Any member of the workspace may read it.

### Example

```ts
import {
  Configuration,
  WorkspaceHostedProvidersApi,
} from '';
import type { WorkspaceHostedProvidersGetWorkspaceProviderPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceHostedProvidersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspaceHostedProvidersGetWorkspaceProviderPolicyRequest;

  try {
    const data = await api.workspaceHostedProvidersGetWorkspaceProviderPolicy(body);
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

### Return type

[**WorkspaceProviderPolicyPublic**](WorkspaceProviderPolicyPublic.md)

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


## workspaceHostedProvidersListWorkspaceHostedProviders

> WorkspaceHostedProvidersPublic workspaceHostedProvidersListWorkspaceHostedProviders(workspaceId)

List Workspace Hosted Providers

Every hosted provider this workspace\&#39;s organization may use, with what this workspace keeps of it.  Any member of the workspace may read it.

### Example

```ts
import {
  Configuration,
  WorkspaceHostedProvidersApi,
} from '';
import type { WorkspaceHostedProvidersListWorkspaceHostedProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceHostedProvidersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WorkspaceHostedProvidersListWorkspaceHostedProvidersRequest;

  try {
    const data = await api.workspaceHostedProvidersListWorkspaceHostedProviders(body);
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

### Return type

[**WorkspaceHostedProvidersPublic**](WorkspaceHostedProvidersPublic.md)

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


## workspaceHostedProvidersResetWorkspaceHostedProvider

> WorkspaceHostedProviderPublic workspaceHostedProvidersResetWorkspaceHostedProvider(workspaceId, provider)

Reset Workspace Hosted Provider

Drop this workspace\&#39;s rule for a hosted provider, so it inherits the provider whole. Idempotent.

### Example

```ts
import {
  Configuration,
  WorkspaceHostedProvidersApi,
} from '';
import type { WorkspaceHostedProvidersResetWorkspaceHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceHostedProvidersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    provider: provider_example,
  } satisfies WorkspaceHostedProvidersResetWorkspaceHostedProviderRequest;

  try {
    const data = await api.workspaceHostedProvidersResetWorkspaceHostedProvider(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkspaceHostedProviderPublic**](WorkspaceHostedProviderPublic.md)

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


## workspaceHostedProvidersSetWorkspaceHostedProvider

> WorkspaceHostedProviderPublic workspaceHostedProvidersSetWorkspaceHostedProvider(workspaceId, provider, workspaceHostedProviderAccessRequest)

Set Workspace Hosted Provider

Switch a hosted provider off for this workspace, or narrow it to some of its models.  An organization owner/admin, or an owner/admin of this workspace, may write it. It can only narrow what the organization may use: a model the deployment does not serve on the provider is refused with 400. Sending the inherited state (enabled, every model) is a reset.

### Example

```ts
import {
  Configuration,
  WorkspaceHostedProvidersApi,
} from '';
import type { WorkspaceHostedProvidersSetWorkspaceHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceHostedProvidersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    provider: provider_example,
    // WorkspaceHostedProviderAccessRequest
    workspaceHostedProviderAccessRequest: ...,
  } satisfies WorkspaceHostedProvidersSetWorkspaceHostedProviderRequest;

  try {
    const data = await api.workspaceHostedProvidersSetWorkspaceHostedProvider(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **workspaceHostedProviderAccessRequest** | [WorkspaceHostedProviderAccessRequest](WorkspaceHostedProviderAccessRequest.md) |  | |

### Return type

[**WorkspaceHostedProviderPublic**](WorkspaceHostedProviderPublic.md)

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


## workspaceHostedProvidersSetWorkspaceProviderPolicy

> WorkspaceProviderPolicyPublic workspaceHostedProvidersSetWorkspaceProviderPolicy(workspaceId, workspaceProviderPolicyRequest)

Set Workspace Provider Policy

Require zero data retention of every provider serving this workspace, or stop requiring it.  An organization owner/admin, or an owner/admin of this workspace, may write it. Required, a request is refused with 403 on an organization key or a hosted provider not declared zero data retention, and on any provider configured in config.yml or endpoint the workspace or its users own, neither of which can be declared.

### Example

```ts
import {
  Configuration,
  WorkspaceHostedProvidersApi,
} from '';
import type { WorkspaceHostedProvidersSetWorkspaceProviderPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceHostedProvidersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceProviderPolicyRequest
    workspaceProviderPolicyRequest: ...,
  } satisfies WorkspaceHostedProvidersSetWorkspaceProviderPolicyRequest;

  try {
    const data = await api.workspaceHostedProvidersSetWorkspaceProviderPolicy(body);
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
| **workspaceProviderPolicyRequest** | [WorkspaceProviderPolicyRequest](WorkspaceProviderPolicyRequest.md) |  | |

### Return type

[**WorkspaceProviderPolicyPublic**](WorkspaceProviderPolicyPublic.md)

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

