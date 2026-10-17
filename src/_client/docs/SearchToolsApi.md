# SearchToolsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchToolsCreateSearchTool**](SearchToolsApi.md#searchtoolscreatesearchtool) | **POST** /api/v1/search-tools | Create Search Tool |
| [**searchToolsDeleteStoredSearchTool**](SearchToolsApi.md#searchtoolsdeletestoredsearchtool) | **DELETE** /api/v1/search-tools/{name} | Delete Stored Search Tool |
| [**searchToolsListAllSearchTools**](SearchToolsApi.md#searchtoolslistallsearchtools) | **GET** /api/v1/search-tools | List All Search Tools |
| [**searchToolsListSearchProviders**](SearchToolsApi.md#searchtoolslistsearchproviders) | **GET** /api/v1/search-tools/providers | List Search Providers |
| [**searchToolsReencryptStoredSearchToolKeys**](SearchToolsApi.md#searchtoolsreencryptstoredsearchtoolkeys) | **POST** /api/v1/search-tools/reencrypt | Reencrypt Stored Search Tool Keys |
| [**searchToolsTestSearchTool**](SearchToolsApi.md#searchtoolstestsearchtool) | **POST** /api/v1/search-tools/{name}/test | Test Search Tool |
| [**searchToolsTestUnsavedSearchTool**](SearchToolsApi.md#searchtoolstestunsavedsearchtool) | **POST** /api/v1/search-tools/test | Test Unsaved Search Tool |
| [**searchToolsUpdateSearchTool**](SearchToolsApi.md#searchtoolsupdatesearchtool) | **PATCH** /api/v1/search-tools/{name} | Update Search Tool |



## searchToolsCreateSearchTool

> CreatedSearchToolSchema searchToolsCreateSearchTool(createSearchToolRequest)

Create Search Tool

Add a search or fetch instance at runtime. Storing an API key requires OTARI_SECRET_KEY.  Creating a second search instance, while the first is the in-loop default only because it is the only one, first sets &#x60;&#x60;web_search_default_tool&#x60;&#x60; to the first in the same commit, and says so in the response, so that adding an instance never turns in-loop search off. That runtime value wins over the configuration file until it is cleared.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsCreateSearchToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // CreateSearchToolRequest
    createSearchToolRequest: ...,
  } satisfies SearchToolsCreateSearchToolRequest;

  try {
    const data = await api.searchToolsCreateSearchTool(body);
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
| **createSearchToolRequest** | [CreateSearchToolRequest](CreateSearchToolRequest.md) |  | |

### Return type

[**CreatedSearchToolSchema**](CreatedSearchToolSchema.md)

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


## searchToolsDeleteStoredSearchTool

> searchToolsDeleteStoredSearchTool(name)

Delete Stored Search Tool

Delete a stored search or fetch instance. A config-file one, or &#x60;&#x60;builtin_fetch&#x60;&#x60;, cannot be deleted here.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsDeleteStoredSearchToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies SearchToolsDeleteStoredSearchToolRequest;

  try {
    const data = await api.searchToolsDeleteStoredSearchTool(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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


## searchToolsListAllSearchTools

> SearchToolsResponse searchToolsListAllSearchTools(kind)

List All Search Tools

List every search instance &#x60;&#x60;POST /api/v1/search&#x60;&#x60; can name, or with &#x60;&#x60;?kind&#x3D;fetch&#x60;&#x60; every fetch instance.  &#x60;&#x60;stored&#x60;&#x60; are the editable rows written through this API; &#x60;&#x60;config&#x60;&#x60; are the config-file entries, which are still honored and are reported so the operator can see the whole set, &#x60;&#x60;builtin_fetch&#x60;&#x60; first among the fetch instances. Keys are never returned, only &#x60;&#x60;last4&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsListAllSearchToolsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // 'search' | 'fetch' | Which instances to list: \'search\' (the default) or \'fetch\'. (optional)
    kind: kind_example,
  } satisfies SearchToolsListAllSearchToolsRequest;

  try {
    const data = await api.searchToolsListAllSearchTools(body);
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
| **kind** | `search`, `fetch` | Which instances to list: \&#39;search\&#39; (the default) or \&#39;fetch\&#39;. | [Optional] [Defaults to `&#39;search&#39;`] [Enum: search, fetch] |

### Return type

[**SearchToolsResponse**](SearchToolsResponse.md)

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


## searchToolsListSearchProviders

> Array&lt;SearchProviderSchema&gt; searchToolsListSearchProviders(kind)

List Search Providers

List the providers a search or fetch tool may name, for the add-tool form.  The list comes from the metadata any-search and any-fetch publish, so a provider either library adds appears with no change to the gateway. Reports per provider whether an API key is required, what endpoint a tool inherits when it declares none, and the native options a tool may set. Providers that exist only for tests are left out, and so is the fetch provider &#x60;&#x60;builtin&#x60;&#x60;, which only the implicit &#x60;&#x60;builtin_fetch&#x60;&#x60; tool uses.  What belongs to this deployment rather than to the libraries, its own tools on each provider and an endpoint a tool inherits from its settings, is shown only to a caller who operates the deployment: the tool settings reader withholds the same from anyone else.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsListSearchProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // 'search' | 'fetch' | Which providers to list: search providers (the default) or fetch providers. (optional)
    kind: kind_example,
  } satisfies SearchToolsListSearchProvidersRequest;

  try {
    const data = await api.searchToolsListSearchProviders(body);
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
| **kind** | `search`, `fetch` | Which providers to list: search providers (the default) or fetch providers. | [Optional] [Defaults to `&#39;search&#39;`] [Enum: search, fetch] |

### Return type

[**Array&lt;SearchProviderSchema&gt;**](SearchProviderSchema.md)

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


## searchToolsReencryptStoredSearchToolKeys

> ReencryptSearchToolsResponse searchToolsReencryptStoredSearchToolKeys()

Reencrypt Stored Search Tool Keys

Re-encrypt stored search-tool keys with the primary OTARI_SECRET_KEY.  The search-tool half of the &#x60;&#x60;OTARI_SECRET_KEY&#x60;&#x60; rotation procedure; run it alongside &#x60;&#x60;POST /api/v1/provider-credentials/reencrypt&#x60;&#x60;. Rows that cannot be decrypted are left untouched and must be recovered by replacing the affected tool\&#39;s key.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsReencryptStoredSearchToolKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  try {
    const data = await api.searchToolsReencryptStoredSearchToolKeys();
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

[**ReencryptSearchToolsResponse**](ReencryptSearchToolsResponse.md)

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


## searchToolsTestSearchTool

> SearchToolTestResponse searchToolsTestSearchTool(name, storedSearchToolTestRequest)

Test Search Tool

Test a configured or stored instance with one search or one fetch.  Takes &#x60;&#x60;query&#x60;&#x60; for a search instance or &#x60;&#x60;url&#x60;&#x60; for a fetch instance, and answers as &#x60;&#x60;POST /search-tools/test&#x60;&#x60; does. &#x60;&#x60;builtin_fetch&#x60;&#x60; has no test yet, and answers a 400.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsTestSearchToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // string
    name: name_example,
    // StoredSearchToolTestRequest
    storedSearchToolTestRequest: ...,
  } satisfies SearchToolsTestSearchToolRequest;

  try {
    const data = await api.searchToolsTestSearchTool(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **storedSearchToolTestRequest** | [StoredSearchToolTestRequest](StoredSearchToolTestRequest.md) |  | |

### Return type

[**SearchToolTestResponse**](SearchToolTestResponse.md)

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


## searchToolsTestUnsavedSearchTool

> SearchToolTestResponse searchToolsTestUnsavedSearchTool(searchToolTestRequest)

Test Unsaved Search Tool

Test an instance before saving it, with one search or one fetch.  Takes the create request\&#39;s fields, held to the create\&#39;s checks against the instances this worker has loaded, plus &#x60;&#x60;query&#x60;&#x60; for a search instance or &#x60;&#x60;url&#x60;&#x60; for a fetch instance. Answers whether the provider answered without an error, the error\&#39;s tag when it did not, and how many hits or characters came back, never the results or the page.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsTestUnsavedSearchToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // SearchToolTestRequest
    searchToolTestRequest: ...,
  } satisfies SearchToolsTestUnsavedSearchToolRequest;

  try {
    const data = await api.searchToolsTestUnsavedSearchTool(body);
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
| **searchToolTestRequest** | [SearchToolTestRequest](SearchToolTestRequest.md) |  | |

### Return type

[**SearchToolTestResponse**](SearchToolTestResponse.md)

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


## searchToolsUpdateSearchTool

> StoredSearchToolSchema searchToolsUpdateSearchTool(name, updateSearchToolRequest)

Update Search Tool

Update a stored search or fetch instance. Omitted fields are left as-is; an explicit &#x60;&#x60;null&#x60;&#x60; clears them.  &#x60;&#x60;api_key&#x60;&#x60; follows the same rule: omit it to keep the stored key, send a new one to rotate, or send &#x60;&#x60;null&#x60;&#x60; to clear it (a keyless SearXNG backend). The row is locked &#x60;&#x60;FOR UPDATE&#x60;&#x60; so the &#x60;&#x60;expected_updated_at&#x60;&#x60; check and the write it guards are atomic. The tool as it will be after the update is validated, so a change that would leave it unusable (clearing the key of a provider that needs one) is refused rather than stored. Its options are checked against the provider\&#39;s when the update sets them or changes the provider, and &#x60;&#x60;fetch_tool&#x60;&#x60; when the update sets it, so rotating the key of an instance stored before those rules never trips on them. &#x60;&#x60;kind&#x60;&#x60; cannot change, so an instance never moves between the search and fetch maps.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { SearchToolsUpdateSearchToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchToolsApi(config);

  const body = {
    // string
    name: name_example,
    // UpdateSearchToolRequest
    updateSearchToolRequest: ...,
  } satisfies SearchToolsUpdateSearchToolRequest;

  try {
    const data = await api.searchToolsUpdateSearchTool(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **updateSearchToolRequest** | [UpdateSearchToolRequest](UpdateSearchToolRequest.md) |  | |

### Return type

[**StoredSearchToolSchema**](StoredSearchToolSchema.md)

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

