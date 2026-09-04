# WorkspaceWebSearchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDelete**](WorkspaceWebSearchApi.md#clearworkspacewebsearchconfigv1workspacesworkspaceidwebsearchdelete) | **DELETE** /v1/workspaces/{workspace_id}/web-search | Clear Workspace Web Search Config |
| [**getWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGet**](WorkspaceWebSearchApi.md#getworkspacewebsearchconfigv1workspacesworkspaceidwebsearchget) | **GET** /v1/workspaces/{workspace_id}/web-search | Get Workspace Web Search Config |
| [**setWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPut**](WorkspaceWebSearchApi.md#setworkspacewebsearchconfigv1workspacesworkspaceidwebsearchput) | **PUT** /v1/workspaces/{workspace_id}/web-search | Set Workspace Web Search Config |



## clearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDelete

> WorkspaceWebSearchConfigPublic clearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDelete(workspaceId)

Clear Workspace Web Search Config

Drop a workspace\&#39;s configuration, returning it to the deployment\&#39;s behavior.  Idempotent: a workspace that has no configuration is already in the state this asks for, so it answers with the unconfigured shape rather than a 404.

### Example

```ts
import {
  Configuration,
  WorkspaceWebSearchApi,
} from '';
import type { ClearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceWebSearchApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ClearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDeleteRequest;

  try {
    const data = await api.clearWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchDelete(body);
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

[**WorkspaceWebSearchConfigPublic**](WorkspaceWebSearchConfigPublic.md)

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


## getWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGet

> WorkspaceWebSearchConfigPublic getWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGet(workspaceId)

Get Workspace Web Search Config

Read a workspace\&#39;s web-search configuration.  Takes the same role as setting it (an organization owner/admin, or an owner/admin of this workspace), because the row describes the workspace\&#39;s posture rather than one member\&#39;s allowance. A workspace with no row answers with the unconfigured shape (&#x60;&#x60;configured: false&#x60;&#x60;), which is the deployment\&#39;s own behavior described in the same shape rather than a 404.

### Example

```ts
import {
  Configuration,
  WorkspaceWebSearchApi,
} from '';
import type { GetWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceWebSearchApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGetRequest;

  try {
    const data = await api.getWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchGet(body);
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

[**WorkspaceWebSearchConfigPublic**](WorkspaceWebSearchConfigPublic.md)

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


## setWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPut

> WorkspaceWebSearchConfigPublic setWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPut(workspaceId, workspaceWebSearchConfigUpdate)

Set Workspace Web Search Config

Set a workspace\&#39;s web-search configuration, replacing any existing one.  An organization owner/admin, or an owner/admin of this workspace, may write it. The configuration can only narrow what the deployment permits: turning web search off for the workspace, lowering the result ceiling, and adding to the domains a search may not reach. It never turns on a backend the deployment has not configured, and it carries no credential.

### Example

```ts
import {
  Configuration,
  WorkspaceWebSearchApi,
} from '';
import type { SetWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceWebSearchApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceWebSearchConfigUpdate
    workspaceWebSearchConfigUpdate: ...,
  } satisfies SetWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPutRequest;

  try {
    const data = await api.setWorkspaceWebSearchConfigV1WorkspacesWorkspaceIdWebSearchPut(body);
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
| **workspaceWebSearchConfigUpdate** | [WorkspaceWebSearchConfigUpdate](WorkspaceWebSearchConfigUpdate.md) |  | |

### Return type

[**WorkspaceWebSearchConfigPublic**](WorkspaceWebSearchConfigPublic.md)

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

