# McpServersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpServersAcknowledgeMcpServerRequest**](McpServersApi.md#mcpserversacknowledgemcpserverrequest) | **POST** /api/v1/workspaces/{workspace_id}/mcp-server-requests/{request_id}/acknowledge | Acknowledge Mcp Server Request |
| [**mcpServersAddWorkspaceMcpServerGrants**](McpServersApi.md#mcpserversaddworkspacemcpservergrants) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants | Add Workspace Mcp Server Grants |
| [**mcpServersCheckWorkspaceMcpServer**](McpServersApi.md#mcpserverscheckworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/check | Check Workspace Mcp Server |
| [**mcpServersCheckWorkspaceMcpServerAccess**](McpServersApi.md#mcpserverscheckworkspacemcpserveraccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/check | Check Workspace Mcp Server Access |
| [**mcpServersCheckWorkspaceMcpServerConnection**](McpServersApi.md#mcpserverscheckworkspacemcpserverconnection) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/check | Check Workspace Mcp Server Connection |
| [**mcpServersCreateWorkspaceMcpServer**](McpServersApi.md#mcpserverscreateworkspacemcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers | Create Workspace Mcp Server |
| [**mcpServersDeclineMcpServerRequests**](McpServersApi.md#mcpserversdeclinemcpserverrequests) | **POST** /api/v1/workspaces/{workspace_id}/mcp-server-requests/decline | Decline Mcp Server Requests |
| [**mcpServersDeleteWorkspaceMcpServer**](McpServersApi.md#mcpserversdeleteworkspacemcpserver) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Delete Workspace Mcp Server |
| [**mcpServersDeleteWorkspaceMcpServerGrant**](McpServersApi.md#mcpserversdeleteworkspacemcpservergrant) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants/{grant_id} | Delete Workspace Mcp Server Grant |
| [**mcpServersEndWorkspaceMcpServerSharedAccount**](McpServersApi.md#mcpserversendworkspacemcpserversharedaccount) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/shared-account | End Workspace Mcp Server Shared Account |
| [**mcpServersGetMyWorkspaceMcpServerTools**](McpServersApi.md#mcpserversgetmyworkspacemcpservertools) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/my-tools | Get My Workspace Mcp Server Tools |
| [**mcpServersGetWorkspaceMcpKeyAccess**](McpServersApi.md#mcpserversgetworkspacemcpkeyaccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/keys/{api_key_id}/access | Get Workspace Mcp Key Access |
| [**mcpServersGetWorkspaceMcpServer**](McpServersApi.md#mcpserversgetworkspacemcpserver) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Get Workspace Mcp Server |
| [**mcpServersGetWorkspaceMcpServerAccess**](McpServersApi.md#mcpserversgetworkspacemcpserveraccess) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access | Get Workspace Mcp Server Access |
| [**mcpServersListMcpServerRequesters**](McpServersApi.md#mcpserverslistmcpserverrequesters) | **GET** /api/v1/workspaces/{workspace_id}/mcp-server-requests/requesters | List Mcp Server Requesters |
| [**mcpServersListMcpServerRequests**](McpServersApi.md#mcpserverslistmcpserverrequests) | **GET** /api/v1/workspaces/{workspace_id}/mcp-server-requests | List Mcp Server Requests |
| [**mcpServersListMyMcpServerRequests**](McpServersApi.md#mcpserverslistmymcpserverrequests) | **GET** /api/v1/workspaces/{workspace_id}/mcp-server-requests/mine | List My Mcp Server Requests |
| [**mcpServersListWorkspaceMcpServerLogos**](McpServersApi.md#mcpserverslistworkspacemcpserverlogos) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers/logos | List Workspace Mcp Server Logos |
| [**mcpServersListWorkspaceMcpServers**](McpServersApi.md#mcpserverslistworkspacemcpservers) | **GET** /api/v1/workspaces/{workspace_id}/mcp-servers | List Workspace Mcp Servers |
| [**mcpServersRemoveWorkspaceMcpServerLogo**](McpServersApi.md#mcpserversremoveworkspacemcpserverlogo) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/logo | Remove Workspace Mcp Server Logo |
| [**mcpServersRequestMcpServer**](McpServersApi.md#mcpserversrequestmcpserver) | **POST** /api/v1/workspaces/{workspace_id}/mcp-server-requests | Request Mcp Server |
| [**mcpServersSetWorkspaceMcpServerLogo**](McpServersApi.md#mcpserverssetworkspacemcpserverlogo) | **PUT** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/logo | Set Workspace Mcp Server Logo |
| [**mcpServersStartWorkspaceMcpServerCheckSignIn**](McpServersApi.md#mcpserversstartworkspacemcpserverchecksignin) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/check/sign-in | Start Workspace Mcp Server Check Sign In |
| [**mcpServersStartWorkspaceMcpServerSharedSignIn**](McpServersApi.md#mcpserversstartworkspacemcpserversharedsignin) | **POST** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/shared-account | Start Workspace Mcp Server Shared Sign In |
| [**mcpServersUpdateWorkspaceMcpServer**](McpServersApi.md#mcpserversupdateworkspacemcpserver) | **PATCH** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id} | Update Workspace Mcp Server |
| [**mcpServersUpdateWorkspaceMcpServerGrant**](McpServersApi.md#mcpserversupdateworkspacemcpservergrant) | **PATCH** /api/v1/workspaces/{workspace_id}/mcp-servers/{server_id}/access/grants/{grant_id} | Update Workspace Mcp Server Grant |
| [**mcpServersWithdrawMcpServerRequest**](McpServersApi.md#mcpserverswithdrawmcpserverrequest) | **DELETE** /api/v1/workspaces/{workspace_id}/mcp-server-requests/{request_id} | Withdraw Mcp Server Request |



## mcpServersAcknowledgeMcpServerRequest

> mcpServersAcknowledgeMcpServerRequest(workspaceId, requestId)

Acknowledge Mcp Server Request

Record that the caller has seen the answer to one of their own requests, so it is no longer listed for them.  Repeating it changes nothing. Someone else\&#39;s request is a 404.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersAcknowledgeMcpServerRequestRequest } from '';

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
    requestId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies McpServersAcknowledgeMcpServerRequestRequest;

  try {
    const data = await api.mcpServersAcknowledgeMcpServerRequest(body);
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
| **requestId** | `string` |  | [Defaults to `undefined`] |

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
| **409** | The request is still waiting for an answer. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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

Check a server\&#39;s connection now. Organization owners/admins or this workspace\&#39;s owners/admins.  Opens one session, lists the server\&#39;s tools, and stores the outcome as &#x60;health&#x60;. A server that fails is still a 200, with &#x60;health.status&#x60; set to &#x60;failing&#x60;. A 429 means every check slot on this gateway was busy and nothing was recorded. A per-user server holds no token to check with and is refused with a 409: start its check with &#x60;POST .../check/sign-in&#x60;.

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

Check connection details without storing them. Organization owners/admins or this workspace\&#39;s owners/admins.  What a form\&#39;s Test button calls before it saves. Answers with what a stored server\&#39;s &#x60;health&#x60; would say, and records nothing. Pass &#x60;server_id&#x60; and omit &#x60;authorization_token&#x60; to test with that server\&#39;s stored credential, which is only sent to a URL on that server\&#39;s own origin (scheme, host and port): any other is a 400. The URL is checked for SSRF safety first, with the same 400 a create gets.

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
| **400** | The URL failed the SSRF or TLS check, or is on another origin than the stored server whose credential was asked for; nothing was sent to it. |  -  |
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


## mcpServersDeclineMcpServerRequests

> McpServerRequestsDeclined mcpServersDeclineMcpServerRequests(workspaceId, mcpServerRequestDecline)

Decline Mcp Server Requests

Decline every pending request for one catalog server.  Organization owners/admins or this workspace\&#39;s owners/admins. Each requester sees the &#x60;reason&#x60;, and is mailed it where this deployment can send mail. To approve instead, add the server to the workspace: storing a server at the requested URL approves every pending request for it.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersDeclineMcpServerRequestsRequest } from '';

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
    // McpServerRequestDecline
    mcpServerRequestDecline: ...,
  } satisfies McpServersDeclineMcpServerRequestsRequest;

  try {
    const data = await api.mcpServersDeclineMcpServerRequests(body);
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
| **mcpServerRequestDecline** | [McpServerRequestDecline](McpServerRequestDecline.md) |  | |

### Return type

[**McpServerRequestsDeclined**](McpServerRequestsDeclined.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Nobody is waiting for that server in this workspace. |  -  |
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


## mcpServersEndWorkspaceMcpServerSharedAccount

> WorkspaceMcpServerPublic mcpServersEndWorkspaceMcpServerSharedAccount(workspaceId, serverId)

End Workspace Mcp Server Shared Account

End a shared server\&#39;s account. Organization owners/admins or this workspace\&#39;s owners/admins.  The stored tokens are deleted, and the authorization server is asked to revoke them where it publishes a revocation endpoint. The server is then checked again with no credential, and comes back with &#x60;needs_setup&#x60; when it asks for one. A server with no shared account is a 404.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersEndWorkspaceMcpServerSharedAccountRequest } from '';

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
  } satisfies McpServersEndWorkspaceMcpServerSharedAccountRequest;

  try {
    const data = await api.mcpServersEndWorkspaceMcpServerSharedAccount(body);
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


## mcpServersGetMyWorkspaceMcpServerTools

> WorkspaceMcpServerMyTools mcpServersGetMyWorkspaceMcpServerTools(workspaceId, serverId)

Get My Workspace Mcp Server Tools

The tools the caller may use on a server. Any member who can see the workspace.  Applies the caller\&#39;s own rule: their user\&#39;s grant, else the server\&#39;s &#x60;everyone_tools&#x60;, within its &#x60;allowed_tools&#x60;; a disabled server admits nothing. The tool list comes from the server\&#39;s last passing check; where there is none and the server is per-user, it is listed with the caller\&#39;s own connection and not stored. &#x60;known&#x60; is false when neither is available.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersGetMyWorkspaceMcpServerToolsRequest } from '';

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
  } satisfies McpServersGetMyWorkspaceMcpServerToolsRequest;

  try {
    const data = await api.mcpServersGetMyWorkspaceMcpServerTools(body);
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

[**WorkspaceMcpServerMyTools**](WorkspaceMcpServerMyTools.md)

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


## mcpServersListMcpServerRequesters

> McpServerRequestersPublic mcpServersListMcpServerRequesters(workspaceId, catalogName, skip, limit)

List Mcp Server Requesters

Everyone waiting for one catalog server, a page at a time, the earliest first.  Organization owners/admins or this workspace\&#39;s owners/admins. For a server whose entry in the list above names fewer requesters than its &#x60;requester_count&#x60;.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersListMcpServerRequestersRequest } from '';

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
    // string | The catalog server asked for
    catalogName: catalogName_example,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies McpServersListMcpServerRequestersRequest;

  try {
    const data = await api.mcpServersListMcpServerRequesters(body);
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
| **catalogName** | `string` | The catalog server asked for | [Defaults to `undefined`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**McpServerRequestersPublic**](McpServerRequestersPublic.md)

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


## mcpServersListMcpServerRequests

> McpServerRequestGroupsPublic mcpServersListMcpServerRequests(workspaceId, skip, limit)

List Mcp Server Requests

The workspace\&#39;s pending requests, one entry per catalog server, the longest-waiting first.  Organization owners/admins or this workspace\&#39;s owners/admins. Each entry names the first five who asked, with their notes, and &#x60;requester_count&#x60; says how many asked in all; the &#x60;requesters&#x60; list pages through the rest. Each also carries the catalog\&#39;s entry for the server as it is now. A page holds &#x60;limit&#x60; servers after the first &#x60;skip&#x60;; &#x60;count&#x60; says how many requests wait in all, and &#x60;server_count&#x60; how many servers they ask for.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersListMcpServerRequestsRequest } from '';

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
    // number | Number of catalog servers to skip (optional)
    skip: 56,
    // number | Maximum number of catalog servers to return (optional)
    limit: 56,
  } satisfies McpServersListMcpServerRequestsRequest;

  try {
    const data = await api.mcpServersListMcpServerRequests(body);
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
| **skip** | `number` | Number of catalog servers to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of catalog servers to return | [Optional] [Defaults to `100`] |

### Return type

[**McpServerRequestGroupsPublic**](McpServerRequestGroupsPublic.md)

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


## mcpServersListMyMcpServerRequests

> McpServerRequestsPublic mcpServersListMyMcpServerRequests(workspaceId, skip, limit)

List My Mcp Server Requests

The caller\&#39;s own requests in this workspace: the pending ones, and the answers they have not acknowledged.  Any member who can see the workspace. Pending requests come first, then the answers, each newest first, so a first page of 10 or more holds every pending one. An answer, approved or declined, is listed until the caller acknowledges it. A declined request also leaves the list when the caller asks for the server again or the server is added, and an approved one when its server is deleted.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersListMyMcpServerRequestsRequest } from '';

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
  } satisfies McpServersListMyMcpServerRequestsRequest;

  try {
    const data = await api.mcpServersListMyMcpServerRequests(body);
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
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `50`] |

### Return type

[**McpServerRequestsPublic**](McpServerRequestsPublic.md)

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


## mcpServersListWorkspaceMcpServerLogos

> WorkspaceMcpServerLogosPublic mcpServersListWorkspaceMcpServerLogos(workspaceId, skip, limit)

List Workspace Mcp Server Logos

The logo of each of the workspace\&#39;s MCP servers, and whether it needs a tile to stay visible.  Paged as the server list is, oldest server first. Readable by any member who can see the workspace, as the servers are. A logo is an admin\&#39;s upload, else the catalog\&#39;s for the server\&#39;s URL, else one the gateway found on the server\&#39;s host. Listing them makes the gateway fetch nothing.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersListWorkspaceMcpServerLogosRequest } from '';

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
  } satisfies McpServersListWorkspaceMcpServerLogosRequest;

  try {
    const data = await api.mcpServersListWorkspaceMcpServerLogos(body);
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

[**WorkspaceMcpServerLogosPublic**](WorkspaceMcpServerLogosPublic.md)

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


## mcpServersRemoveWorkspaceMcpServerLogo

> WorkspaceMcpServerLogoPublic mcpServersRemoveWorkspaceMcpServerLogo(workspaceId, serverId)

Remove Workspace Mcp Server Logo

Remove a server\&#39;s uploaded logo, so it shows its own again. The tile choice stays.  Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersRemoveWorkspaceMcpServerLogoRequest } from '';

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
  } satisfies McpServersRemoveWorkspaceMcpServerLogoRequest;

  try {
    const data = await api.mcpServersRemoveWorkspaceMcpServerLogo(body);
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

[**WorkspaceMcpServerLogoPublic**](WorkspaceMcpServerLogoPublic.md)

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


## mcpServersRequestMcpServer

> McpServerRequestPublic mcpServersRequestMcpServer(workspaceId, mcpServerRequestCreate)

Request Mcp Server

Ask the workspace\&#39;s owners and admins to add a server the MCP catalog lists.  Any member who can see the workspace, a viewer included. The request keeps the title and URL the catalog gives the server now. Where this deployment can send mail, the workspace\&#39;s owners and admins and its organization\&#39;s are told, at most 20 of them; otherwise they find the request on the MCP servers page. A caller holds one pending request per server.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersRequestMcpServerRequest } from '';

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
    // McpServerRequestCreate
    mcpServerRequestCreate: ...,
  } satisfies McpServersRequestMcpServerRequest;

  try {
    const data = await api.mcpServersRequestMcpServer(body);
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
| **mcpServerRequestCreate** | [McpServerRequestCreate](McpServerRequestCreate.md) |  | |

### Return type

[**McpServerRequestPublic**](McpServerRequestPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **404** | The catalog lists no server by that name. |  -  |
| **409** | The workspace already has the server, or the caller\&#39;s request for it is already waiting. |  -  |
| **422** | Validation Error |  -  |
| **429** | The caller has 10 requests waiting in this workspace, or made 10 there in the last day. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServersSetWorkspaceMcpServerLogo

> WorkspaceMcpServerLogoPublic mcpServersSetWorkspaceMcpServerLogo(workspaceId, serverId, tile, file)

Set Workspace Mcp Server Logo

Set how a server\&#39;s logo shows: the tile choice, and an uploaded PNG in place of its own logo.  Organization owners/admins or this workspace\&#39;s owners/admins. The upload is kept apart from the logo the gateway fetches, so no fetch or catalog sync replaces it.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersSetWorkspaceMcpServerLogoRequest } from '';

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
    // string | Whether the logo sits on a tile: where it would fade out, always, or never.
    tile: tile_example,
    // string | A PNG of at most 512 KB to show instead of the server\\\'s own logo. Leave out to keep it. (optional)
    file: file_example,
  } satisfies McpServersSetWorkspaceMcpServerLogoRequest;

  try {
    const data = await api.mcpServersSetWorkspaceMcpServerLogo(body);
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
| **tile** | `auto`, `always`, `never` | Whether the logo sits on a tile: where it would fade out, always, or never. | [Defaults to `undefined`] [Enum: auto, always, never] |
| **file** | `string` | A PNG of at most 512 KB to show instead of the server\\\&#39;s own logo. Leave out to keep it. | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkspaceMcpServerLogoPublic**](WorkspaceMcpServerLogoPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **413** | The body is larger than the logo limit. |  -  |
| **422** | The file is not a PNG, or the tile is not one of the choices. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpServersStartWorkspaceMcpServerCheckSignIn

> McpConnectionStarted mcpServersStartWorkspaceMcpServerCheckSignIn(workspaceId, serverId, mcpConnectionStart)

Start Workspace Mcp Server Check Sign In

Start a sign-in made only to check a per-user server. Organization or workspace owners/admins.  Returns the authorization page to send the browser to, as starting a connection does. The caller signs in with any account; finishing the sign-in (&#x60;POST /mcp-connections/complete&#x60;) lists the server\&#39;s tools once with the token it returns, stores the outcome as &#x60;health&#x60;, and drops the token, revoking it where the authorization server allows. No connection is created, and the caller\&#39;s own connection, if they have one, is left as it was. A server in &#x60;shared&#x60; mode is refused with a 409.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersStartWorkspaceMcpServerCheckSignInRequest } from '';

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
    // McpConnectionStart
    mcpConnectionStart: ...,
  } satisfies McpServersStartWorkspaceMcpServerCheckSignInRequest;

  try {
    const data = await api.mcpServersStartWorkspaceMcpServerCheckSignIn(body);
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


## mcpServersStartWorkspaceMcpServerSharedSignIn

> McpConnectionStarted mcpServersStartWorkspaceMcpServerSharedSignIn(workspaceId, serverId, mcpConnectionStart)

Start Workspace Mcp Server Shared Sign In

Start a sign-in for everyone, to a shared server. Organization or workspace owners/admins.  Returns the authorization page to send the browser to, as starting a connection does. The caller signs in with the account the whole workspace should act as, so a service account is the better choice. Finishing the sign-in (&#x60;POST /mcp-connections/complete&#x60;) stores that account as the server\&#39;s &#x60;shared_account&#x60;: every caller\&#39;s call then carries its token, which Otari renews as it does a user\&#39;s own, and a stored &#x60;authorization_token&#x60; is removed. A server in &#x60;per_user&#x60; mode is refused with a 409.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersStartWorkspaceMcpServerSharedSignInRequest } from '';

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
    // McpConnectionStart
    mcpConnectionStart: ...,
  } satisfies McpServersStartWorkspaceMcpServerSharedSignInRequest;

  try {
    const data = await api.mcpServersStartWorkspaceMcpServerSharedSignIn(body);
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


## mcpServersWithdrawMcpServerRequest

> mcpServersWithdrawMcpServerRequest(workspaceId, requestId)

Withdraw Mcp Server Request

Withdraw one of the caller\&#39;s own pending requests. Someone else\&#39;s request is a 404.

### Example

```ts
import {
  Configuration,
  McpServersApi,
} from '';
import type { McpServersWithdrawMcpServerRequestRequest } from '';

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
    requestId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies McpServersWithdrawMcpServerRequestRequest;

  try {
    const data = await api.mcpServersWithdrawMcpServerRequest(body);
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
| **requestId** | `string` |  | [Defaults to `undefined`] |

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
| **409** | The request was already answered or withdrawn. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

