# AliasesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAliasV1AliasesNameDelete**](AliasesApi.md#deletealiasv1aliasesnamedelete) | **DELETE** /v1/aliases/{name} | Delete Alias |
| [**listAliasesV1AliasesGet**](AliasesApi.md#listaliasesv1aliasesget) | **GET** /v1/aliases | List Aliases |
| [**setAliasV1AliasesPost**](AliasesApi.md#setaliasv1aliasespost) | **POST** /v1/aliases | Set Alias |



## deleteAliasV1AliasesNameDelete

> deleteAliasV1AliasesNameDelete(name, userId)

Delete Alias

Delete a stored alias in one scope.  Scoped by &#x60;&#x60;user_id&#x60;&#x60; for the same reason the upsert is: deleting the global alias must not take a user\&#39;s override with it, and deleting an override must leave the global one serving everyone else.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { DeleteAliasV1AliasesNameDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // string
    name: name_example,
    // string | Delete the alias scoped to this user. Omit to delete the global alias of that name. (optional)
    userId: userId_example,
  } satisfies DeleteAliasV1AliasesNameDeleteRequest;

  try {
    const data = await api.deleteAliasV1AliasesNameDelete(body);
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
| **userId** | `string` | Delete the alias scoped to this user. Omit to delete the global alias of that name. | [Optional] [Defaults to `undefined`] |

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


## listAliasesV1AliasesGet

> Array&lt;AliasResponse&gt; listAliasesV1AliasesGet()

List Aliases

List every alias in force, from config.yml and from storage.  Every scope at once, global and user-scoped alike: this is the master-key management view, not what any one caller resolves.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { ListAliasesV1AliasesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  try {
    const data = await api.listAliasesV1AliasesGet();
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

[**Array&lt;AliasResponse&gt;**](AliasResponse.md)

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


## setAliasV1AliasesPost

> AliasResponse setAliasV1AliasesPost(aliasRequest)

Set Alias

Create or update a stored alias, global or scoped to one user.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { SetAliasV1AliasesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // AliasRequest
    aliasRequest: ...,
  } satisfies SetAliasV1AliasesPostRequest;

  try {
    const data = await api.setAliasV1AliasesPost(body);
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
| **aliasRequest** | [AliasRequest](AliasRequest.md) |  | |

### Return type

[**AliasResponse**](AliasResponse.md)

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

