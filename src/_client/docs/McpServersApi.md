# McpServersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPost**](McpServersApi.md#createworkspacemcpserverv1workspacesworkspaceidmcpserverspost) | **POST** /v1/workspaces/{workspace_id}/mcp-servers | Create Workspace Mcp Server |
| [**deleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDelete**](McpServersApi.md#deleteworkspacemcpserverv1workspacesworkspaceidmcpserversserveriddelete) | **DELETE** /v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Delete Workspace Mcp Server |
| [**listWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGet**](McpServersApi.md#listworkspacemcpserversv1workspacesworkspaceidmcpserversget) | **GET** /v1/workspaces/{workspace_id}/mcp-servers | List Workspace Mcp Servers |
| [**updateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatch**](McpServersApi.md#updateworkspacemcpserverv1workspacesworkspaceidmcpserversserveridpatch) | **PATCH** /v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Update Workspace Mcp Server |



## createWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPost

> WorkspaceMcpServerPublic createWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPost(workspaceId, workspaceMcpServerCreate)

Create Workspace Mcp Server

Register an MCP server for a workspace. Organization owners/admins or this workspace\&#39;s owners/admins.  The authorization token is encrypted at rest and never returned. The URL is checked for SSRF safety here as well as on the request path, and must use https when a token is set. A name already used in this workspace is refused with a 409.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { CreateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpServersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceMcpServerCreate
    workspaceMcpServerCreate: ...,
  } satisfies CreateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPostRequest;

  try {
    const data = await api.createWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersPost(body);
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
| **workspaceMcpServerCreate** | [WorkspaceMcpServerCreate](WorkspaceMcpServerCreate.md) |  | |

### Return type

[**WorkspaceMcpServerPublic**](WorkspaceMcpServerPublic.md)

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


## deleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDelete

> Message deleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDelete(workspaceId, serverId)

Delete Workspace Mcp Server

Delete a server and the token stored with it. Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { DeleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpServersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDeleteRequest;

  try {
    const data = await api.deleteWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdDelete(body);
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
| **serverId** | `string` |  | [Defaults to `undefined`] |

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


## listWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGet

> WorkspaceMcpServersPublic listWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGet(workspaceId, skip, limit)

List Workspace Mcp Servers

List the MCP servers configured for a workspace.  Readable by any member who can see the workspace: these servers act on every request a member sends through it, so what they are is a member\&#39;s to view (otari-ai#1942). Changing them stays with organization owners/admins or this workspace\&#39;s owners/admins. Authorization tokens are never included; each server reports only whether it has one.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { ListWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpServersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGetRequest;

  try {
    const data = await api.listWorkspaceMcpServersV1WorkspacesWorkspaceIdMcpServersGet(body);
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

[**WorkspaceMcpServersPublic**](WorkspaceMcpServersPublic.md)

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


## updateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatch

> WorkspaceMcpServerPublic updateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatch(workspaceId, serverId, workspaceMcpServerUpdate)

Update Workspace Mcp Server

Update a server. Organization owners/admins or this workspace\&#39;s owners/admins.  Only the fields sent are applied. Omit &#x60;authorization_token&#x60; to leave the stored token alone, send an empty string to clear it, or send a value to rotate it.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { UpdateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpServersApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceMcpServerUpdate
    workspaceMcpServerUpdate: ...,
  } satisfies UpdateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatchRequest;

  try {
    const data = await api.updateWorkspaceMcpServerV1WorkspacesWorkspaceIdMcpServersServerIdPatch(body);
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
| **serverId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMcpServerUpdate** | [WorkspaceMcpServerUpdate](WorkspaceMcpServerUpdate.md) |  | |

### Return type

[**WorkspaceMcpServerPublic**](WorkspaceMcpServerPublic.md)

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

