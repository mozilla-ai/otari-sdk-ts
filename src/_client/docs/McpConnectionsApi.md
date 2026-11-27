# McpConnectionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpConnectionsCompleteMcpConnection**](McpConnectionsApi.md#mcpconnectionscompletemcpconnection) | **POST** /api/v1/mcp-connections/complete | Complete Mcp Connection |
| [**mcpConnectionsEndMyMcpConnection**](McpConnectionsApi.md#mcpconnectionsendmymcpconnection) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-connections/{server_id} | End My Mcp Connection |
| [**mcpConnectionsListMcpServerConnections**](McpConnectionsApi.md#mcpconnectionslistmcpserverconnections) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/connections | List Mcp Server Connections |
| [**mcpConnectionsListMyMcpConnections**](McpConnectionsApi.md#mcpconnectionslistmymcpconnections) | **GET** /api/v1/workspaces/{workspace_id}/mcp-connections | List My Mcp Connections |
| [**mcpConnectionsRemoveMcpServerConnection**](McpConnectionsApi.md#mcpconnectionsremovemcpserverconnection) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/connections/{user_id} | Remove Mcp Server Connection |
| [**mcpConnectionsStartMcpConnection**](McpConnectionsApi.md#mcpconnectionsstartmcpconnection) | **POST** /api/v1/workspaces/{workspace_id}/mcp-connections/{server_id} | Start Mcp Connection |



## mcpConnectionsCompleteMcpConnection

> McpConnectionCompleted mcpConnectionsCompleteMcpConnection(mcpConnectionComplete)

Complete Mcp Connection

Finish a sign-in to a per-user MCP server, from the code its authorization server returned.  The dashboard calls this from the page the callback lands on. The state is consumed whatever happens next, so it finishes one sign-in at most, and it must be one the caller started: another person\&#39;s is refused with a 400. Send the redirect\&#39;s &#x60;iss&#x60; too when it had one: an answer naming another authorization server is refused (RFC 9207).

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsCompleteMcpConnectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // McpConnectionComplete
    mcpConnectionComplete: ...,
  } satisfies McpConnectionsCompleteMcpConnectionRequest;

  try {
    const data = await api.mcpConnectionsCompleteMcpConnection(body);
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
| **mcpConnectionComplete** | [McpConnectionComplete](McpConnectionComplete.md) |  | |

### Return type

[**McpConnectionCompleted**](McpConnectionCompleted.md)

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


## mcpConnectionsEndMyMcpConnection

> mcpConnectionsEndMyMcpConnection(workspaceId, serverId)

End My Mcp Connection

End the caller\&#39;s own connection to an MCP server.  The stored tokens are deleted, and the authorization server is asked to revoke them where it publishes a revocation endpoint. The caller\&#39;s keys then get &#x60;mcp_sign_in_required&#x60; from this server until they sign in again.

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsEndMyMcpConnectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies McpConnectionsEndMyMcpConnectionRequest;

  try {
    const data = await api.mcpConnectionsEndMyMcpConnection(body);
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


## mcpConnectionsListMcpServerConnections

> McpServerConnectionsPublic mcpConnectionsListMcpServerConnections(workspaceId, serverId, skip, limit)

List Mcp Server Connections

List who is connected to a per-user MCP server. Organization owners/admins or this workspace\&#39;s owners/admins.  Each entry names the user the connection belongs to and, when that user is a dashboard account, its email and name: the caller\&#39;s own connection first, then the rest oldest first. &#x60;count&#x60; is the total. Tokens are never included.

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsListMcpServerConnectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies McpConnectionsListMcpServerConnectionsRequest;

  try {
    const data = await api.mcpConnectionsListMcpServerConnections(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**McpServerConnectionsPublic**](McpServerConnectionsPublic.md)

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


## mcpConnectionsListMyMcpConnections

> McpConnectionsPublic mcpConnectionsListMyMcpConnections(workspaceId, skip, limit)

List My Mcp Connections

List the caller\&#39;s own connections to this workspace\&#39;s MCP servers.  A connection is the caller\&#39;s sign-in to a server whose &#x60;credential_mode&#x60; is &#x60;per_user&#x60;. Any member who can see the workspace may call this, oldest connection first; &#x60;count&#x60; is the total. Tokens are never included.

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsListMyMcpConnectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies McpConnectionsListMyMcpConnectionsRequest;

  try {
    const data = await api.mcpConnectionsListMyMcpConnections(body);
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

[**McpConnectionsPublic**](McpConnectionsPublic.md)

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


## mcpConnectionsRemoveMcpServerConnection

> mcpConnectionsRemoveMcpServerConnection(workspaceId, serverId, userId)

Remove Mcp Server Connection

End one user\&#39;s connection to an MCP server. Organization owners/admins or this workspace\&#39;s owners/admins.  The stored tokens are deleted and the authorization server is asked to revoke them. That user\&#39;s keys get &#x60;mcp_sign_in_required&#x60; from this server until they sign in again.

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsRemoveMcpServerConnectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: userId_example,
  } satisfies McpConnectionsRemoveMcpServerConnectionRequest;

  try {
    const data = await api.mcpConnectionsRemoveMcpServerConnection(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

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


## mcpConnectionsStartMcpConnection

> McpConnectionStarted mcpConnectionsStartMcpConnection(workspaceId, serverId, mcpConnectionStart)

Start Mcp Connection

Start the caller\&#39;s own sign-in to a per-user MCP server.  Returns the server\&#39;s authorization page to send the browser to. Otari discovers the server\&#39;s authorization server, registers itself as a client where the server holds no client ID, and uses the authorization code flow with S256 PKCE. The sign-in is bound to the caller: it finishes only in their own dashboard session, once, within 30 minutes. The connection then belongs to the caller\&#39;s user, so every key they own in this workspace reaches the server as them.  Any member who can see the workspace may call this. A server in &#x60;shared&#x60; mode is refused with a 409, and a deployment with no &#x60;public_base_url&#x60; with a 400, because the address the authorization server returns to is derived from it.

### Example

```ts
import {
  Configuration,
  McpConnectionsApi,
} from '';
import type { McpConnectionsStartMcpConnectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpConnectionsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // McpConnectionStart
    mcpConnectionStart: ...,
  } satisfies McpConnectionsStartMcpConnectionRequest;

  try {
    const data = await api.mcpConnectionsStartMcpConnection(body);
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
| **mcpConnectionStart** | [McpConnectionStart](McpConnectionStart.md) |  | |

### Return type

[**McpConnectionStarted**](McpConnectionStarted.md)

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

