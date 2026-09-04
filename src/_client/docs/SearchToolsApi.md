# SearchToolsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSearchToolV1SearchToolsPost**](SearchToolsApi.md#createsearchtoolv1searchtoolspost) | **POST** /v1/search-tools | Create Search Tool |
| [**deleteStoredSearchToolV1SearchToolsNameDelete**](SearchToolsApi.md#deletestoredsearchtoolv1searchtoolsnamedelete) | **DELETE** /v1/search-tools/{name} | Delete Stored Search Tool |
| [**listAllSearchToolsV1SearchToolsGet**](SearchToolsApi.md#listallsearchtoolsv1searchtoolsget) | **GET** /v1/search-tools | List All Search Tools |
| [**listSearchProvidersV1SearchToolsProvidersGet**](SearchToolsApi.md#listsearchprovidersv1searchtoolsprovidersget) | **GET** /v1/search-tools/providers | List Search Providers |
| [**reencryptStoredSearchToolKeysV1SearchToolsReencryptPost**](SearchToolsApi.md#reencryptstoredsearchtoolkeysv1searchtoolsreencryptpost) | **POST** /v1/search-tools/reencrypt | Reencrypt Stored Search Tool Keys |
| [**updateSearchToolV1SearchToolsNamePatch**](SearchToolsApi.md#updatesearchtoolv1searchtoolsnamepatch) | **PATCH** /v1/search-tools/{name} | Update Search Tool |



## createSearchToolV1SearchToolsPost

> StoredSearchToolSchema createSearchToolV1SearchToolsPost(createSearchToolRequest)

Create Search Tool

Add a search tool at runtime. Storing an API key requires OTARI_SECRET_KEY.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { CreateSearchToolV1SearchToolsPostRequest } from '';

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
  } satisfies CreateSearchToolV1SearchToolsPostRequest;

  try {
    const data = await api.createSearchToolV1SearchToolsPost(body);
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

[**StoredSearchToolSchema**](StoredSearchToolSchema.md)

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


## deleteStoredSearchToolV1SearchToolsNameDelete

> deleteStoredSearchToolV1SearchToolsNameDelete(name)

Delete Stored Search Tool

Delete a stored search tool. A config-file search tool cannot be deleted here.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { DeleteStoredSearchToolV1SearchToolsNameDeleteRequest } from '';

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
  } satisfies DeleteStoredSearchToolV1SearchToolsNameDeleteRequest;

  try {
    const data = await api.deleteStoredSearchToolV1SearchToolsNameDelete(body);
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


## listAllSearchToolsV1SearchToolsGet

> SearchToolsResponse listAllSearchToolsV1SearchToolsGet()

List All Search Tools

List every search tool &#x60;&#x60;POST /v1/search&#x60;&#x60; can name.  &#x60;&#x60;stored&#x60;&#x60; are the editable rows written through this API; &#x60;&#x60;config&#x60;&#x60; are the config-file entries, which are still honored and are reported so the operator can see the whole set. Keys are never returned, only &#x60;&#x60;last4&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { ListAllSearchToolsV1SearchToolsGetRequest } from '';

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
    const data = await api.listAllSearchToolsV1SearchToolsGet();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSearchProvidersV1SearchToolsProvidersGet

> Array&lt;SearchProviderSchema&gt; listSearchProvidersV1SearchToolsProvidersGet()

List Search Providers

List the search providers this build can dispatch to, for the add-tool form.  Reports per provider whether an API key is required and what endpoint a tool inherits when it declares none, so the form can ask for exactly what the chosen provider needs instead of taking a free-text provider name.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { ListSearchProvidersV1SearchToolsProvidersGetRequest } from '';

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
    const data = await api.listSearchProvidersV1SearchToolsProvidersGet();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reencryptStoredSearchToolKeysV1SearchToolsReencryptPost

> ReencryptSearchToolsResponse reencryptStoredSearchToolKeysV1SearchToolsReencryptPost()

Reencrypt Stored Search Tool Keys

Re-encrypt stored search-tool keys with the primary OTARI_SECRET_KEY.  The search-tool half of the &#x60;&#x60;OTARI_SECRET_KEY&#x60;&#x60; rotation procedure; run it alongside &#x60;&#x60;POST /v1/provider-credentials/reencrypt&#x60;&#x60;. Rows that cannot be decrypted are left untouched and must be recovered by replacing the affected tool\&#39;s key.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { ReencryptStoredSearchToolKeysV1SearchToolsReencryptPostRequest } from '';

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
    const data = await api.reencryptStoredSearchToolKeysV1SearchToolsReencryptPost();
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


## updateSearchToolV1SearchToolsNamePatch

> StoredSearchToolSchema updateSearchToolV1SearchToolsNamePatch(name, updateSearchToolRequest)

Update Search Tool

Update a stored search tool. Omitted fields are left as-is; an explicit &#x60;&#x60;null&#x60;&#x60; clears them.  &#x60;&#x60;api_key&#x60;&#x60; follows the same rule: omit it to keep the stored key, send a new one to rotate, or send &#x60;&#x60;null&#x60;&#x60; to clear it (a keyless SearXNG backend). The row is locked &#x60;&#x60;FOR UPDATE&#x60;&#x60; so the &#x60;&#x60;expected_updated_at&#x60;&#x60; check and the write it guards are atomic. The tool as it will be after the update is validated, so a change that would leave it unusable (clearing the key of a provider that needs one) is refused rather than stored.

### Example

```ts
import {
  Configuration,
  SearchToolsApi,
} from '';
import type { UpdateSearchToolV1SearchToolsNamePatchRequest } from '';

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
  } satisfies UpdateSearchToolV1SearchToolsNamePatchRequest;

  try {
    const data = await api.updateSearchToolV1SearchToolsNamePatch(body);
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

