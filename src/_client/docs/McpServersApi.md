# McpServersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpServersCheckWorkspaceMcpServer**](McpServersApi.md#mcpserverscheckworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/check | Check Workspace Mcp Server |
| [**mcpServersCheckWorkspaceMcpServerConnection**](McpServersApi.md#mcpserverscheckworkspacemcpserverconnection) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/check | Check Workspace Mcp Server Connection |
| [**mcpServersCreateWorkspaceMcpServer**](McpServersApi.md#mcpserverscreateworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers | Create Workspace Mcp Server |
| [**mcpServersDeleteWorkspaceMcpServer**](McpServersApi.md#mcpserversdeleteworkspacemcpserver) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Delete Workspace Mcp Server |
| [**mcpServersListWorkspaceMcpServers**](McpServersApi.md#mcpserverslistworkspacemcpservers) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers | List Workspace Mcp Servers |
| [**mcpServersUpdateWorkspaceMcpServer**](McpServersApi.md#mcpserversupdateworkspacemcpserver) | **PATCH** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Update Workspace Mcp Server |



## mcpServersCheckWorkspaceMcpServer

> WorkspaceMcpServerPublic mcpServersCheckWorkspaceMcpServer(workspaceId, serverId)

Check Workspace Mcp Server

Check a server\&#39;s connection now. Organization owners/admins or this workspace\&#39;s owners/admins.  Opens one session, lists the server\&#39;s tools, and stores the outcome as &#x60;health&#x60;. A server that fails is still a 200, with &#x60;health.status&#x60; set to &#x60;failing&#x60;. A 429 means every check slot on this gateway was busy and nothing was recorded.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersCheckWorkspaceMcpServerRequest } from '';

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
  } satisfies McpServersCheckWorkspaceMcpServerRequest;

  try {
    const data = await api.mcpServersCheckWorkspaceMcpServer(body);
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

[**WorkspaceMcpServerPublic**](WorkspaceMcpServerPublic.md)

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
| **429** | Every check slot on this gateway was busy; nothing was recorded. Try again shortly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServersCheckWorkspaceMcpServerConnection

> WorkspaceMcpServerHealth mcpServersCheckWorkspaceMcpServerConnection(workspaceId, workspaceMcpServerCheckRequest)

Check Workspace Mcp Server Connection

Check connection details without storing them. Organization owners/admins or this workspace\&#39;s owners/admins.  What a form\&#39;s Test button calls before it saves. Answers with what a stored server\&#39;s &#x60;health&#x60; would say, and records nothing. Pass &#x60;server_id&#x60; and omit &#x60;authorization_token&#x60; to test with that server\&#39;s stored token. The URL is checked for SSRF safety first, with the same 400 a create gets.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersCheckWorkspaceMcpServerConnectionRequest } from '';

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
    // WorkspaceMcpServerCheckRequest
    workspaceMcpServerCheckRequest: ...,
  } satisfies McpServersCheckWorkspaceMcpServerConnectionRequest;

  try {
    const data = await api.mcpServersCheckWorkspaceMcpServerConnection(body);
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
| **workspaceMcpServerCheckRequest** | [WorkspaceMcpServerCheckRequest](WorkspaceMcpServerCheckRequest.md) |  | |

### Return type

[**WorkspaceMcpServerHealth**](WorkspaceMcpServerHealth.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | The URL failed the SSRF or TLS check; nothing was sent to it. |  -  |
| **422** | Validation Error |  -  |
| **429** | Every check slot on this gateway was busy. Try again shortly. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServersCreateWorkspaceMcpServer

> WorkspaceMcpServerPublic mcpServersCreateWorkspaceMcpServer(workspaceId, workspaceMcpServerCreate)

Create Workspace Mcp Server

Register an MCP server for a workspace. Organization owners/admins or this workspace\&#39;s owners/admins.  The authorization token is encrypted at rest and never returned. The URL is checked for SSRF safety here as well as on the request path, and must use https when a token is set. A name already used in this workspace is refused with a 409.  Once stored, the server is connected to and its tools listed, and the outcome is returned as &#x60;health&#x60;. A server that fails this check is still stored, and &#x60;health.error&#x60; says why.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersCreateWorkspaceMcpServerRequest } from '';

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
  } satisfies McpServersCreateWorkspaceMcpServerRequest;

  try {
    const data = await api.mcpServersCreateWorkspaceMcpServer(body);
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


## mcpServersDeleteWorkspaceMcpServer

> Message mcpServersDeleteWorkspaceMcpServer(workspaceId, serverId)

Delete Workspace Mcp Server

Delete a server and the token stored with it. Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersDeleteWorkspaceMcpServerRequest } from '';

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
  } satisfies McpServersDeleteWorkspaceMcpServerRequest;

  try {
    const data = await api.mcpServersDeleteWorkspaceMcpServer(body);
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


## mcpServersListWorkspaceMcpServers

> WorkspaceMcpServersPublic mcpServersListWorkspaceMcpServers(workspaceId, skip, limit)

List Workspace Mcp Servers

List the MCP servers configured for a workspace.  Readable by any member who can see the workspace: these servers act on every request a member sends through it, so what they are is a member\&#39;s to view (otari-ai#1942). Changing them stays with organization owners/admins or this workspace\&#39;s owners/admins. Authorization tokens are never included; each server reports only whether it has one.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersListWorkspaceMcpServersRequest } from '';

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
  } satisfies McpServersListWorkspaceMcpServersRequest;

  try {
    const data = await api.mcpServersListWorkspaceMcpServers(body);
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


## mcpServersUpdateWorkspaceMcpServer

> WorkspaceMcpServerPublic mcpServersUpdateWorkspaceMcpServer(workspaceId, serverId, workspaceMcpServerUpdate)

Update Workspace Mcp Server

Update a server. Organization owners/admins or this workspace\&#39;s owners/admins.  Only the fields sent are applied. Omit &#x60;authorization_token&#x60; to leave the stored token alone, send an empty string to clear it, or send a value to rotate it. A change to the URL, the token or the allow-list checks the server again, as creating it does.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersUpdateWorkspaceMcpServerRequest } from '';

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
  } satisfies McpServersUpdateWorkspaceMcpServerRequest;

  try {
    const data = await api.mcpServersUpdateWorkspaceMcpServer(body);
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

