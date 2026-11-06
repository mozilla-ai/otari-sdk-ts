# ProviderEndpointsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**providerEndpointsCreateProviderEndpoint**](ProviderEndpointsApi.md#providerendpointscreateproviderendpoint) | **POST** /api/v1/provider-endpoints | Create Provider Endpoint |
| [**providerEndpointsDeleteProviderEndpoint**](ProviderEndpointsApi.md#providerendpointsdeleteproviderendpoint) | **DELETE** /api/v1/provider-endpoints/{endpoint_id} | Delete Provider Endpoint |
| [**providerEndpointsGetProviderEndpoint**](ProviderEndpointsApi.md#providerendpointsgetproviderendpoint) | **GET** /api/v1/provider-endpoints/{endpoint_id} | Get Provider Endpoint |
| [**providerEndpointsListProviderEndpoints**](ProviderEndpointsApi.md#providerendpointslistproviderendpoints) | **GET** /api/v1/provider-endpoints | List Provider Endpoints |
| [**providerEndpointsUpdateProviderEndpoint**](ProviderEndpointsApi.md#providerendpointsupdateproviderendpoint) | **PATCH** /api/v1/provider-endpoints/{endpoint_id} | Update Provider Endpoint |



## providerEndpointsCreateProviderEndpoint

> ProviderEndpointPublic providerEndpointsCreateProviderEndpoint(providerEndpointCreateRequest)

Create Provider Endpoint

Register an endpoint for a workspace, or for one user in it.  It is reachable as &#x60;&#x60;&lt;name&gt;:&lt;model&gt;&#x60;&#x60; by its owner as soon as this returns on this worker, and on the others within 30 seconds.

### Example

```ts
import {
  Configuration,
  ProviderEndpointsApi,
} from '';
import type { ProviderEndpointsCreateProviderEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderEndpointsApi(config);

  const body = {
    // ProviderEndpointCreateRequest
    providerEndpointCreateRequest: ...,
  } satisfies ProviderEndpointsCreateProviderEndpointRequest;

  try {
    const data = await api.providerEndpointsCreateProviderEndpoint(body);
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
| **providerEndpointCreateRequest** | [ProviderEndpointCreateRequest](ProviderEndpointCreateRequest.md) |  | |

### Return type

[**ProviderEndpointPublic**](ProviderEndpointPublic.md)

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


## providerEndpointsDeleteProviderEndpoint

> providerEndpointsDeleteProviderEndpoint(endpointId)

Delete Provider Endpoint

Delete an endpoint. Its name stops resolving at once on this worker, within 30 seconds elsewhere.

### Example

```ts
import {
  Configuration,
  ProviderEndpointsApi,
} from '';
import type { ProviderEndpointsDeleteProviderEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderEndpointsApi(config);

  const body = {
    // string
    endpointId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ProviderEndpointsDeleteProviderEndpointRequest;

  try {
    const data = await api.providerEndpointsDeleteProviderEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

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


## providerEndpointsGetProviderEndpoint

> ProviderEndpointPublic providerEndpointsGetProviderEndpoint(endpointId)

Get Provider Endpoint

Read one endpoint. The key is never returned, only its last four characters.

### Example

```ts
import {
  Configuration,
  ProviderEndpointsApi,
} from '';
import type { ProviderEndpointsGetProviderEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderEndpointsApi(config);

  const body = {
    // string
    endpointId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ProviderEndpointsGetProviderEndpointRequest;

  try {
    const data = await api.providerEndpointsGetProviderEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ProviderEndpointPublic**](ProviderEndpointPublic.md)

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


## providerEndpointsListProviderEndpoints

> ProviderEndpointsPublic providerEndpointsListProviderEndpoints(workspaceId, userId, skip, limit)

List Provider Endpoints

List owned provider endpoints, narrowed by owner when given. Keys are never returned.

### Example

```ts
import {
  Configuration,
  ProviderEndpointsApi,
} from '';
import type { ProviderEndpointsListProviderEndpointsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderEndpointsApi(config);

  const body = {
    // string | Only endpoints this workspace owns. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Only endpoints this user owns. (optional)
    userId: userId_example,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ProviderEndpointsListProviderEndpointsRequest;

  try {
    const data = await api.providerEndpointsListProviderEndpoints(body);
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
| **workspaceId** | `string` | Only endpoints this workspace owns. | [Optional] [Defaults to `undefined`] |
| **userId** | `string` | Only endpoints this user owns. | [Optional] [Defaults to `undefined`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**ProviderEndpointsPublic**](ProviderEndpointsPublic.md)

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


## providerEndpointsUpdateProviderEndpoint

> ProviderEndpointPublic providerEndpointsUpdateProviderEndpoint(endpointId, providerEndpointUpdateRequest)

Update Provider Endpoint

Change an endpoint\&#39;s name, provider, base URL, key or default fields. The owner cannot change.

### Example

```ts
import {
  Configuration,
  ProviderEndpointsApi,
} from '';
import type { ProviderEndpointsUpdateProviderEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderEndpointsApi(config);

  const body = {
    // string
    endpointId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ProviderEndpointUpdateRequest
    providerEndpointUpdateRequest: ...,
  } satisfies ProviderEndpointsUpdateProviderEndpointRequest;

  try {
    const data = await api.providerEndpointsUpdateProviderEndpoint(body);
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
| **endpointId** | `string` |  | [Defaults to `undefined`] |
| **providerEndpointUpdateRequest** | [ProviderEndpointUpdateRequest](ProviderEndpointUpdateRequest.md) |  | |

### Return type

[**ProviderEndpointPublic**](ProviderEndpointPublic.md)

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

