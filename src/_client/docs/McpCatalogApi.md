# McpCatalogApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mcpCatalogGetMcpCatalogSync**](McpCatalogApi.md#mcpcataloggetmcpcatalogsync) | **GET** /api/v1/mcp-catalog/sync | Get Mcp Catalog Sync |
| [**mcpCatalogListPopularMcpServers**](McpCatalogApi.md#mcpcataloglistpopularmcpservers) | **GET** /api/v1/mcp-catalog/popular | List Popular Mcp Servers |
| [**mcpCatalogRequestMcpCatalogSync**](McpCatalogApi.md#mcpcatalogrequestmcpcatalogsync) | **POST** /api/v1/mcp-catalog/sync | Request Mcp Catalog Sync |
| [**mcpCatalogSearchMcpCatalog**](McpCatalogApi.md#mcpcatalogsearchmcpcatalog) | **GET** /api/v1/mcp-catalog/servers | Search Mcp Catalog |



## mcpCatalogGetMcpCatalogSync

> McpCatalogSyncStatus mcpCatalogGetMcpCatalogSync()

Get Mcp Catalog Sync

Whether the catalog syncs from the MCP Registry, and what the sync in progress or the last one did.

### Example

```ts
import {
  Configuration,
  McpCatalogApi,
} from '';
import type { McpCatalogGetMcpCatalogSyncRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpCatalogApi(config);

  try {
    const data = await api.mcpCatalogGetMcpCatalogSync();
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

[**McpCatalogSyncStatus**](McpCatalogSyncStatus.md)

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


## mcpCatalogListPopularMcpServers

> McpCatalogServersPublic mcpCatalogListPopularMcpServers(workspaceId, exclude)

List Popular Mcp Servers

Well-known remote MCP servers, from a list bundled with Otari, that the catalog holds now.  Each is matched to the catalog by its URL, so the list is empty until a sync has run.

### Example

```ts
import {
  Configuration,
  McpCatalogApi,
} from '';
import type { McpCatalogListPopularMcpServersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpCatalogApi(config);

  const body = {
    // string | A workspace the caller can see. The servers it already has are left out. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<string> | Catalog names to leave out, such as the servers a caller has already picked. At most 50. The count leaves them out too, so it pages the same rows the caller sees. (optional)
    exclude: ...,
  } satisfies McpCatalogListPopularMcpServersRequest;

  try {
    const data = await api.mcpCatalogListPopularMcpServers(body);
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
| **workspaceId** | `string` | A workspace the caller can see. The servers it already has are left out. | [Optional] [Defaults to `undefined`] |
| **exclude** | `Array<string>` | Catalog names to leave out, such as the servers a caller has already picked. At most 50. The count leaves them out too, so it pages the same rows the caller sees. | [Optional] |

### Return type

[**McpCatalogServersPublic**](McpCatalogServersPublic.md)

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


## mcpCatalogRequestMcpCatalogSync

> McpCatalogSyncStatus mcpCatalogRequestMcpCatalogSync(mcpCatalogSyncRequest)

Request Mcp Catalog Sync

Start a sync within a minute. Refused with a 409 while &#x60;mcp_catalog_sync&#x60; is &#x60;off&#x60;.  An operator may always ask. Anyone else names a &#x60;workspace_id&#x60; they may add MCP servers to, and waits out &#x60;next_request_at&#x60; after the last sync: an hour after a complete one, five minutes after any other. A sync already running or asked for is left to finish, and this request returns its status.

### Example

```ts
import {
  Configuration,
  McpCatalogApi,
} from '';
import type { McpCatalogRequestMcpCatalogSyncRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpCatalogApi(config);

  const body = {
    // McpCatalogSyncRequest (optional)
    mcpCatalogSyncRequest: ...,
  } satisfies McpCatalogRequestMcpCatalogSyncRequest;

  try {
    const data = await api.mcpCatalogRequestMcpCatalogSync(body);
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
| **mcpCatalogSyncRequest** | [McpCatalogSyncRequest](McpCatalogSyncRequest.md) |  | [Optional] |

### Return type

[**McpCatalogSyncStatus**](McpCatalogSyncStatus.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **403** | The caller does not operate the deployment and may not add MCP servers to the workspace. |  -  |
| **409** | The sync is switched off on this deployment; nothing was started. |  -  |
| **422** | Validation Error |  -  |
| **429** | A sync ended too recently for a workspace admin to ask for another; see next_request_at. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mcpCatalogSearchMcpCatalog

> McpCatalogServersPublic mcpCatalogSearchMcpCatalog(q, skip, limit, workspaceId, exclude)

Search Mcp Catalog

Search the catalog of remote MCP servers, or page through all of it with no &#x60;q&#x60;.  A title that starts with &#x60;q&#x60; comes first, then a title that contains it, then a match in the name or description alone; within each, a server whose &#x60;publisher_kind&#x60; is &#x60;vendor&#x60; comes first. The catalog is empty until a sync has run, and stays empty on a deployment whose &#x60;mcp_catalog_sync&#x60; is &#x60;off&#x60;. Listing a server here permits nothing: a workspace reaches a server only once it is added to that workspace.

### Example

```ts
import {
  Configuration,
  McpCatalogApi,
} from '';
import type { McpCatalogSearchMcpCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new McpCatalogApi(config);

  const body = {
    // string | Text to find in a server\'s title, name or description (optional)
    q: q_example,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
    // string | A workspace the caller can see. The servers it already has are left out. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<string> | Catalog names to leave out, such as the servers a caller has already picked. At most 50. The count leaves them out too, so it pages the same rows the caller sees. (optional)
    exclude: ...,
  } satisfies McpCatalogSearchMcpCatalogRequest;

  try {
    const data = await api.mcpCatalogSearchMcpCatalog(body);
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
| **q** | `string` | Text to find in a server\&#39;s title, name or description | [Optional] [Defaults to `&#39;&#39;`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `25`] |
| **workspaceId** | `string` | A workspace the caller can see. The servers it already has are left out. | [Optional] [Defaults to `undefined`] |
| **exclude** | `Array<string>` | Catalog names to leave out, such as the servers a caller has already picked. At most 50. The count leaves them out too, so it pages the same rows the caller sees. | [Optional] |

### Return type

[**McpCatalogServersPublic**](McpCatalogServersPublic.md)

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

