# ProvidersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**providersListProviders**](ProvidersApi.md#providerslistproviders) | **GET** /api/v1/providers | List Providers |
| [**providersProviderCatalog**](ProvidersApi.md#providersprovidercatalog) | **GET** /api/v1/providers/catalog | Provider Catalog |
| [**providersProviderCatalogDetail**](ProvidersApi.md#providersprovidercatalogdetail) | **GET** /api/v1/providers/catalog/{provider_id} | Provider Catalog Detail |
| [**providersProviderHealth**](ProvidersApi.md#providersproviderhealth) | **GET** /api/v1/providers/health | Provider Health |



## providersListProviders

> ProvidersResponse providersListProviders()

List Providers

List static metadata for every configured provider.  Operator-facing: reports each provider\&#39;s capabilities, documentation and pricing links, and display name from the bundled any-llm and models.dev datasets. No provider is contacted, so this is cheap and always available.

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


## providersProviderCatalog

> Array&lt;KnownProviderSummarySchema&gt; providersProviderCatalog()

Provider Catalog

List every known provider for the add-provider picker: id and name only.  Lightweight by design so the picker never lags: provider ids come from the any-llm registry and names from the models.dev catalog, so no provider SDK is imported. The autofill hints for a chosen provider come from GET /api/v1/providers/catalog/{provider_id}, which imports only that one SDK.

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

Report every configured provider\&#39;s reachability, with a last-checked time.  Covers the configured provider instances and every hosted provider switched on, each hosted provider under its provider name. A hosted provider that a configured instance of the same name shadows is not reported. One whose stored key cannot be decrypted with the configured &#x60;OTARI_SECRET_KEY&#x60; is reported unreachable with that reason.  Reuses the per-provider model-discovery test path, so a provider is healthy when its credentials can list models. Results are served from the discovery cache (cheap enough to poll), so &#x60;&#x60;checked_at&#x60;&#x60; reflects when each provider was actually dialed. Pass &#x60;&#x60;refresh&#x3D;true&#x60;&#x60; to force a live re-dial of every provider.  A provider whose backend serves no model-listing endpoint cannot be verified this way, but it is not unreachable either: it is reported with &#x60;&#x60;discovery_unsupported&#x60;&#x60; and counted under &#x60;&#x60;degraded&#x60;&#x60; rather than as a reachability failure.

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

