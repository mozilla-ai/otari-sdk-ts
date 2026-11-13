# McpServersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpServersAddWorkspaceMcpServerGrants**](McpServersApi.md#mcpserversaddworkspacemcpservergrants) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants | Add Workspace Mcp Server Grants |
| [**mcpServersCheckWorkspaceMcpServer**](McpServersApi.md#mcpserverscheckworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/check | Check Workspace Mcp Server |
| [**mcpServersCheckWorkspaceMcpServerAccess**](McpServersApi.md#mcpserverscheckworkspacemcpserveraccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/check | Check Workspace Mcp Server Access |
| [**mcpServersCheckWorkspaceMcpServerConnection**](McpServersApi.md#mcpserverscheckworkspacemcpserverconnection) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/check | Check Workspace Mcp Server Connection |
| [**mcpServersCreateWorkspaceMcpServer**](McpServersApi.md#mcpserverscreateworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers | Create Workspace Mcp Server |
| [**mcpServersDeleteWorkspaceMcpServer**](McpServersApi.md#mcpserversdeleteworkspacemcpserver) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Delete Workspace Mcp Server |
| [**mcpServersDeleteWorkspaceMcpServerGrant**](McpServersApi.md#mcpserversdeleteworkspacemcpservergrant) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants/{grant_id} | Delete Workspace Mcp Server Grant |
| [**mcpServersGetWorkspaceMcpKeyAccess**](McpServersApi.md#mcpserversgetworkspacemcpkeyaccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/keys/{api_key_id}/access | Get Workspace Mcp Key Access |
| [**mcpServersGetWorkspaceMcpServer**](McpServersApi.md#mcpserversgetworkspacemcpserver) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Get Workspace Mcp Server |
| [**mcpServersGetWorkspaceMcpServerAccess**](McpServersApi.md#mcpserversgetworkspacemcpserveraccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access | Get Workspace Mcp Server Access |
| [**mcpServersListWorkspaceMcpServers**](McpServersApi.md#mcpserverslistworkspacemcpservers) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers | List Workspace Mcp Servers |
| [**mcpServersUpdateWorkspaceMcpServer**](McpServersApi.md#mcpserversupdateworkspacemcpserver) | **PATCH** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Update Workspace Mcp Server |
| [**mcpServersUpdateWorkspaceMcpServerGrant**](McpServersApi.md#mcpserversupdateworkspacemcpservergrant) | **PATCH** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants/{grant_id} | Update Workspace Mcp Server Grant |



## mcpServersAddWorkspaceMcpServerGrants

> WorkspaceMcpServerAccess mcpServersAddWorkspaceMcpServerGrants(workspaceId, serverId, workspaceMcpServerGrantsCreate)

Add Workspace Mcp Server Grants

Give keys and users the same tools on a server.  Organization owners/admins or this workspace\&#39;s owners/admins.  A key or user that already has a grant on the server gets these tools instead. A key must belong to this workspace, and a user must own a key in it or be someone the Playground lets in (a member of the workspace, or an owner or admin of its organization), named by their identity\&#39;s canonical id; a deleted user, or anyone else, is refused with a 400. Answers with the server\&#39;s whole access list.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersAddWorkspaceMcpServerGrantsRequest } from '';

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
    // WorkspaceMcpServerGrantsCreate
    workspaceMcpServerGrantsCreate: ...,
  } satisfies McpServersAddWorkspaceMcpServerGrantsRequest;

  try {
    const data = await api.mcpServersAddWorkspaceMcpServerGrants(body);
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
| **workspaceMcpServerGrantsCreate** | [WorkspaceMcpServerGrantsCreate](WorkspaceMcpServerGrantsCreate.md) |  | |

### Return type

[**WorkspaceMcpServerAccess**](WorkspaceMcpServerAccess.md)

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


## mcpServersCheckWorkspaceMcpServerAccess

> WorkspaceMcpServerAccessCheck mcpServersCheckWorkspaceMcpServerAccess(workspaceId, serverId, apiKeyId, tool)

Check Workspace Mcp Server Access

Whether a key may call a tool on a server, and which rule decides.  Organization owners/admins or this workspace\&#39;s owners/admins.  Applies the same order a request does: the server must be enabled and its &#x60;allowed_tools&#x60; must include the tool, then the key\&#39;s own grant decides, else its owner\&#39;s, else the server\&#39;s &#x60;everyone_tools&#x60;. A key of another workspace is answered with a 404.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersCheckWorkspaceMcpServerAccessRequest } from '';

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
    // string | The key to test
    apiKeyId: apiKeyId_example,
    // string | The tool name to test
    tool: tool_example,
  } satisfies McpServersCheckWorkspaceMcpServerAccessRequest;

  try {
    const data = await api.mcpServersCheckWorkspaceMcpServerAccess(body);
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
| **apiKeyId** | `string` | The key to test | [Defaults to `undefined`] |
| **tool** | `string` | The tool name to test | [Defaults to `undefined`] |

### Return type

[**WorkspaceMcpServerAccessCheck**](WorkspaceMcpServerAccessCheck.md)

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


## mcpServersDeleteWorkspaceMcpServerGrant

> WorkspaceMcpServerAccess mcpServersDeleteWorkspaceMcpServerGrant(workspaceId, serverId, grantId)

Delete Workspace Mcp Server Grant

Remove one grant, so its key or user falls back to the next rule.  Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersDeleteWorkspaceMcpServerGrantRequest } from '';

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
    // string
    grantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies McpServersDeleteWorkspaceMcpServerGrantRequest;

  try {
    const data = await api.mcpServersDeleteWorkspaceMcpServerGrant(body);
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
| **grantId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkspaceMcpServerAccess**](WorkspaceMcpServerAccess.md)

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


## mcpServersGetWorkspaceMcpKeyAccess

> Array&lt;WorkspaceMcpServerKeyAccess&gt; mcpServersGetWorkspaceMcpKeyAccess(workspaceId, apiKeyId)

Get Workspace Mcp Key Access

What one key reaches on each of the workspace\&#39;s MCP servers.  Organization owners/admins or this workspace\&#39;s owners/admins.  For each server, oldest first: the rule that decides (the key\&#39;s own grant, its owner\&#39;s, or the server\&#39;s &#x60;everyone_tools&#x60;) and that rule\&#39;s tool patterns, beside the server\&#39;s own &#x60;allowed_tools&#x60; ceiling. A key of another workspace is answered with a 404.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersGetWorkspaceMcpKeyAccessRequest } from '';

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
    apiKeyId: apiKeyId_example,
  } satisfies McpServersGetWorkspaceMcpKeyAccessRequest;

  try {
    const data = await api.mcpServersGetWorkspaceMcpKeyAccess(body);
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
| **apiKeyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;WorkspaceMcpServerKeyAccess&gt;**](WorkspaceMcpServerKeyAccess.md)

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


## mcpServersGetWorkspaceMcpServer

> WorkspaceMcpServerPublic mcpServersGetWorkspaceMcpServer(workspaceId, serverId)

Get Workspace Mcp Server

One MCP server of a workspace. Readable by any member who can see the workspace, as the list is.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersGetWorkspaceMcpServerRequest } from '';

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
  } satisfies McpServersGetWorkspaceMcpServerRequest;

  try {
    const data = await api.mcpServersGetWorkspaceMcpServer(body);
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServersGetWorkspaceMcpServerAccess

> WorkspaceMcpServerAccess mcpServersGetWorkspaceMcpServerAccess(workspaceId, serverId)

Get Workspace Mcp Server Access

A server\&#39;s access list. Organization owners/admins or this workspace\&#39;s owners/admins.  &#x60;everyone_tools&#x60; is what every key of the workspace may call. Each grant overrides it for one key, or for one user and so every key they own; a key\&#39;s own grant decides over its owner\&#39;s. Tool patterns are names, &#x60;*&#x60;, &#x60;prefix*&#x60;, or &#x60;@read&#x60; for the tools the server\&#39;s &#x60;read_tools&#x60; labels read, and &#x60;[]&#x60; denies. The server\&#39;s &#x60;allowed_tools&#x60; is a ceiling over all of them. A server holds at most 1000 grants, returned oldest first.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersGetWorkspaceMcpServerAccessRequest } from '';

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
  } satisfies McpServersGetWorkspaceMcpServerAccessRequest;

  try {
    const data = await api.mcpServersGetWorkspaceMcpServerAccess(body);
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

[**WorkspaceMcpServerAccess**](WorkspaceMcpServerAccess.md)

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

Update a server. Organization owners/admins or this workspace\&#39;s owners/admins.  Only the fields sent are applied. Omit &#x60;authorization_token&#x60; to leave the stored token alone, send an empty string to clear it, or send a value to rotate it. A change to the URL, the token or the allow-list checks the server again, as creating it does. &#x60;everyone_tools&#x60; is what every key of the workspace may call; the server\&#39;s grants override it per key or user.

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


## mcpServersUpdateWorkspaceMcpServerGrant

> WorkspaceMcpServerAccess mcpServersUpdateWorkspaceMcpServerGrant(workspaceId, serverId, grantId, workspaceMcpServerGrantUpdate)

Update Workspace Mcp Server Grant

Change the tools of one grant. Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersUpdateWorkspaceMcpServerGrantRequest } from '';

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
    // string
    grantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceMcpServerGrantUpdate
    workspaceMcpServerGrantUpdate: ...,
  } satisfies McpServersUpdateWorkspaceMcpServerGrantRequest;

  try {
    const data = await api.mcpServersUpdateWorkspaceMcpServerGrant(body);
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
| **grantId** | `string` |  | [Defaults to `undefined`] |
| **workspaceMcpServerGrantUpdate** | [WorkspaceMcpServerGrantUpdate](WorkspaceMcpServerGrantUpdate.md) |  | |

### Return type

[**WorkspaceMcpServerAccess**](WorkspaceMcpServerAccess.md)

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

