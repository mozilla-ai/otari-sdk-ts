# McpApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpExecuteMcpTool**](McpApi.md#mcpexecutemcptool) | **POST** /api/v1/mcp/execute | Execute Mcp Tool |
| [**mcpListMcpTools**](McpApi.md#mcplistmcptools) | **GET** /api/v1/mcp/servers/{mcp_server_id}/tools | List Mcp Tools |



## mcpExecuteMcpTool

> CallToolResult mcpExecuteMcpTool(mcpExecuteRequest)

Execute Mcp Tool

Execute one caller-authorized tool call against a stored MCP server.  The calling application owns any user approval, argument editing, cancellation and action history; Otari executes exactly the tool name and arguments it is given, once, and returns the remote server\&#39;s native result. A result with &#x60;&#x60;isError: true&#x60;&#x60; is a definitive outcome and comes back as an HTTP 200.  **This request must never be retried automatically.** &#x60;&#x60;client_execution_id&#x60;&#x60; is correlation, not idempotency: once the call has been dispatched Otari cannot know whether the tool ran, and an &#x60;&#x60;outcome_unknown&#x60;&#x60; response means exactly that. Proxies, service meshes and SDKs on this path have to disable retries for it, including on connection resets and 5xx responses.

### Example

```ts
import {
  Configuration,
  McpApi,
} from '';
import type { McpExecuteMcpToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpApi(config);

  const body = {
    // McpExecuteRequest
    mcpExecuteRequest: ...,
  } satisfies McpExecuteMcpToolRequest;

  try {
    const data = await api.mcpExecuteMcpTool(body);
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
| **mcpExecuteRequest** | [McpExecuteRequest](McpExecuteRequest.md) |  | |

### Return type

[**CallToolResult**](CallToolResult.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **402** | Payment Required |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **422** | Unprocessable Content |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **502** | Bad Gateway |  -  |
| **503** | Service Unavailable |  -  |
| **504** | Gateway Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpListMcpTools

> McpToolsResponse mcpListMcpTools(mcpServerId)

List Mcp Tools

List the tools a stored MCP server exposes to the authenticated workspace.  Call this once per server when preparing a model or workflow run, and reuse the answer for every tool from that server for the length of the run: there is no cross-run cache in this version, so a later run rediscovers and staleness stays bounded without any invalidation state to keep.  The response is the whole authorized catalog or an error. It is never partial, because a caller would read a short catalog as the complete input to its own authorization and risk policy. The single exception is &#x60;&#x60;warnings&#x60;&#x60;, which names a tool whose descriptor Otari could not carry.  A tool the server removes after discovery may still be proposed from the run\&#39;s snapshot; execution then returns the remote server\&#39;s own typed error.

### Example

```ts
import {
  Configuration,
  McpApi,
} from '';
import type { McpListMcpToolsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpApi(config);

  const body = {
    // string
    mcpServerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies McpListMcpToolsRequest;

  try {
    const data = await api.mcpListMcpTools(body);
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
| **mcpServerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**McpToolsResponse**](McpToolsResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **402** | Payment Required |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **422** | Unprocessable Content |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |
| **502** | Bad Gateway |  -  |
| **503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

