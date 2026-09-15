# ProvidersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**providersCreateStoredProvider**](ProvidersApi.md#providerscreatestoredprovider) | **POST** /api/v1/provider-credentials | Create Stored Provider |
| [**providersDeleteStoredProvider**](ProvidersApi.md#providersdeletestoredprovider) | **DELETE** /api/v1/provider-credentials/{instance} | Delete Stored Provider |
| [**providersListProviders**](ProvidersApi.md#providerslistproviders) | **GET** /api/v1/providers | List Providers |
| [**providersListStoredProviders**](ProvidersApi.md#providersliststoredproviders) | **GET** /api/v1/provider-credentials | List Stored Providers |
| [**providersProviderCatalog**](ProvidersApi.md#providersprovidercatalog) | **GET** /api/v1/providers/catalog | Provider Catalog |
| [**providersProviderCatalogDetail**](ProvidersApi.md#providersprovidercatalogdetail) | **GET** /api/v1/providers/catalog/{provider_id} | Provider Catalog Detail |
| [**providersProviderHealth**](ProvidersApi.md#providersproviderhealth) | **GET** /api/v1/providers/health | Provider Health |
| [**providersReencryptStoredProviderKeys**](ProvidersApi.md#providersreencryptstoredproviderkeys) | **POST** /api/v1/provider-credentials/reencrypt | Reencrypt Stored Provider Keys |
| [**providersTestProviderConnection**](ProvidersApi.md#providerstestproviderconnection) | **POST** /api/v1/provider-credentials/test | Test Provider Connection |
| [**providersTestStoredProvider**](ProvidersApi.md#providersteststoredprovider) | **POST** /api/v1/provider-credentials/{instance}/test | Test Stored Provider |
| [**providersUpdateStoredProvider**](ProvidersApi.md#providersupdatestoredprovider) | **PATCH** /api/v1/provider-credentials/{instance} | Update Stored Provider |



## providersCreateStoredProvider

> StoredProviderResponse providersCreateStoredProvider(createStoredProviderRequest)

Create Stored Provider

Add a provider at runtime. Storing a key requires OTARI_SECRET_KEY.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersCreateStoredProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // CreateStoredProviderRequest
    createStoredProviderRequest: ...,
  } satisfies ProvidersCreateStoredProviderRequest;

  try {
    const data = await api.providersCreateStoredProvider(body);
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
| **createStoredProviderRequest** | [CreateStoredProviderRequest](CreateStoredProviderRequest.md) |  | |

### Return type

[**StoredProviderResponse**](StoredProviderResponse.md)

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


## providersDeleteStoredProvider

> providersDeleteStoredProvider(instance)

Delete Stored Provider

Delete a stored provider. A config.yml provider cannot be deleted here.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersDeleteStoredProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // string
    instance: instance_example,
  } satisfies ProvidersDeleteStoredProviderRequest;

  try {
    const data = await api.providersDeleteStoredProvider(body);
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
| **instance** | `string` |  | [Defaults to `undefined`] |

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


## providersListProviders

> ProvidersResponse providersListProviders()

List Providers

List static metadata for every configured provider.  Operator-facing: reports each provider\&#39;s capabilities, documentation and pricing links, and display name from the bundled any-llm and genai-prices datasets. No provider is contacted, so this is cheap and always available.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersListProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  try {
    const data = await api.providersListProviders();
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

[**ProvidersResponse**](ProvidersResponse.md)

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


## providersListStoredProviders

> Array&lt;StoredProviderResponse&gt; providersListStoredProviders()

List Stored Providers

List runtime-stored providers. Keys are never returned, only &#x60;&#x60;last4&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersListStoredProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  try {
    const data = await api.providersListStoredProviders();
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

[**Array&lt;StoredProviderResponse&gt;**](StoredProviderResponse.md)

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


## providersProviderCatalog

> Array&lt;KnownProviderSummarySchema&gt; providersProviderCatalog()

Provider Catalog

List every known provider for the add-provider picker: id and name only.  Lightweight by design so the picker never lags: provider ids come from the any-llm registry and names from the bundled genai-prices dataset, so no provider SDK is imported. The autofill hints for a chosen provider come from GET /api/v1/providers/catalog/{provider_id}, which imports only that one SDK.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersProviderCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  try {
    const data = await api.providersProviderCatalog();
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

[**Array&lt;KnownProviderSummarySchema&gt;**](KnownProviderSummarySchema.md)

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


## providersProviderCatalogDetail

> KnownProviderSchema providersProviderCatalogDetail(providerId)

Provider Catalog Detail

Autofill hints for one provider the add-provider form has selected.  Imports only the selected provider\&#39;s any-llm module (not the whole catalog) to report its credential env var, default endpoint, whether a key is required, and whether that env var is already set on the server. Returns 404 for an unknown provider id.  The SDK import is offloaded to a worker thread: the first fetch for a given provider imports that provider\&#39;s module, which would otherwise block the event loop (and thus every concurrent request) for the import\&#39;s duration.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersProviderCatalogDetailRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // string
    providerId: providerId_example,
  } satisfies ProvidersProviderCatalogDetailRequest;

  try {
    const data = await api.providersProviderCatalogDetail(body);
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
| **providerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**KnownProviderSchema**](KnownProviderSchema.md)

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


## providersProviderHealth

> ProviderHealthResponse providersProviderHealth(refresh)

Provider Health

Report every configured provider\&#39;s reachability, with a last-checked time.  Reuses the per-provider model-discovery test path, so a provider is healthy when its credentials can list models. Results are served from the discovery cache (cheap enough to poll), so &#x60;&#x60;checked_at&#x60;&#x60; reflects when each provider was actually dialed. Pass &#x60;&#x60;refresh&#x3D;true&#x60;&#x60; to force a live re-dial of every provider.  A provider whose backend serves no model-listing endpoint cannot be verified this way, but it is not unreachable either: it is reported with &#x60;&#x60;discovery_unsupported&#x60;&#x60; and counted under &#x60;&#x60;degraded&#x60;&#x60; rather than as a reachability failure.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersProviderHealthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // boolean (optional)
    refresh: true,
  } satisfies ProvidersProviderHealthRequest;

  try {
    const data = await api.providersProviderHealth(body);
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
| **refresh** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**ProviderHealthResponse**](ProviderHealthResponse.md)

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


## providersReencryptStoredProviderKeys

> ReencryptProviderCredentialsResponse providersReencryptStoredProviderKeys()

Reencrypt Stored Provider Keys

Re-encrypt stored provider keys with the primary OTARI_SECRET_KEY.  Operators rotate &#x60;&#x60;OTARI_SECRET_KEY&#x60;&#x60; by setting it to &#x60;&#x60;new,old&#x60;&#x60; first, restarting, running this endpoint, then removing the old key and restarting again. Rows that cannot be decrypted are left untouched and must be recovered by replacing the affected provider keys.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersReencryptStoredProviderKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  try {
    const data = await api.providersReencryptStoredProviderKeys();
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

[**ReencryptProviderCredentialsResponse**](ReencryptProviderCredentialsResponse.md)

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


## providersTestProviderConnection

> TestProviderResponse providersTestProviderConnection(testProviderRequest)

Test Provider Connection

Test provider credentials without storing them (for the add/edit form).  Resolves the implementation from &#x60;&#x60;provider_type&#x60;&#x60; (honoring the &#x60;&#x60;*-compatible&#x60;&#x60; aliases) or the &#x60;&#x60;instance&#x60;&#x60; name, then lists the provider\&#39;s models with the supplied credentials. Nothing is persisted and the key is never echoed.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersTestProviderConnectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // TestProviderRequest
    testProviderRequest: ...,
  } satisfies ProvidersTestProviderConnectionRequest;

  try {
    const data = await api.providersTestProviderConnection(body);
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
| **testProviderRequest** | [TestProviderRequest](TestProviderRequest.md) |  | |

### Return type

[**TestProviderResponse**](TestProviderResponse.md)

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


## providersTestStoredProvider

> TestProviderResponse providersTestStoredProvider(instance)

Test Stored Provider

Verify a stored provider\&#39;s key by listing its models, without exposing the key.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersTestStoredProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // string
    instance: instance_example,
  } satisfies ProvidersTestStoredProviderRequest;

  try {
    const data = await api.providersTestStoredProvider(body);
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
| **instance** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TestProviderResponse**](TestProviderResponse.md)

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


## providersUpdateStoredProvider

> StoredProviderResponse providersUpdateStoredProvider(instance, updateStoredProviderRequest)

Update Stored Provider

Update a stored provider. Omitted fields are left as-is; an explicit &#x60;&#x60;null&#x60;&#x60; clears them.  &#x60;&#x60;api_key&#x60;&#x60; follows the same rule: omit it to keep the stored key, send a new one to rotate, or send &#x60;&#x60;null&#x60;&#x60; to clear it. The row is locked &#x60;&#x60;FOR UPDATE&#x60;&#x60; so the &#x60;&#x60;expected_updated_at&#x60;&#x60; check and the write it guards are atomic.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProvidersUpdateStoredProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProvidersApi(config);

  const body = {
    // string
    instance: instance_example,
    // UpdateStoredProviderRequest
    updateStoredProviderRequest: ...,
  } satisfies ProvidersUpdateStoredProviderRequest;

  try {
    const data = await api.providersUpdateStoredProvider(body);
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
| **instance** | `string` |  | [Defaults to `undefined`] |
| **updateStoredProviderRequest** | [UpdateStoredProviderRequest](UpdateStoredProviderRequest.md) |  | |

### Return type

[**StoredProviderResponse**](StoredProviderResponse.md)

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

