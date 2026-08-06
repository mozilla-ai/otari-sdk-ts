# ProvidersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStoredProviderV1ProviderCredentialsPost**](ProvidersApi.md#createstoredproviderv1providercredentialspost) | **POST** /v1/provider-credentials | Create Stored Provider |
| [**deleteStoredProviderV1ProviderCredentialsInstanceDelete**](ProvidersApi.md#deletestoredproviderv1providercredentialsinstancedelete) | **DELETE** /v1/provider-credentials/{instance} | Delete Stored Provider |
| [**listProvidersV1ProvidersGet**](ProvidersApi.md#listprovidersv1providersget) | **GET** /v1/providers | List Providers |
| [**listStoredProvidersV1ProviderCredentialsGet**](ProvidersApi.md#liststoredprovidersv1providercredentialsget) | **GET** /v1/provider-credentials | List Stored Providers |
| [**providerCatalogDetailV1ProvidersCatalogProviderIdGet**](ProvidersApi.md#providercatalogdetailv1providerscatalogprovideridget) | **GET** /v1/providers/catalog/{provider_id} | Provider Catalog Detail |
| [**providerCatalogV1ProvidersCatalogGet**](ProvidersApi.md#providercatalogv1providerscatalogget) | **GET** /v1/providers/catalog | Provider Catalog |
| [**providerHealthV1ProvidersHealthGet**](ProvidersApi.md#providerhealthv1providershealthget) | **GET** /v1/providers/health | Provider Health |
| [**reencryptStoredProviderKeysV1ProviderCredentialsReencryptPost**](ProvidersApi.md#reencryptstoredproviderkeysv1providercredentialsreencryptpost) | **POST** /v1/provider-credentials/reencrypt | Reencrypt Stored Provider Keys |
| [**testProviderConnectionV1ProviderCredentialsTestPost**](ProvidersApi.md#testproviderconnectionv1providercredentialstestpost) | **POST** /v1/provider-credentials/test | Test Provider Connection |
| [**testStoredProviderV1ProviderCredentialsInstanceTestPost**](ProvidersApi.md#teststoredproviderv1providercredentialsinstancetestpost) | **POST** /v1/provider-credentials/{instance}/test | Test Stored Provider |
| [**updateStoredProviderV1ProviderCredentialsInstancePatch**](ProvidersApi.md#updatestoredproviderv1providercredentialsinstancepatch) | **PATCH** /v1/provider-credentials/{instance} | Update Stored Provider |



## createStoredProviderV1ProviderCredentialsPost

> StoredProviderResponse createStoredProviderV1ProviderCredentialsPost(createStoredProviderRequest)

Create Stored Provider

Add a provider at runtime. Storing a key requires OTARI_SECRET_KEY.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { CreateStoredProviderV1ProviderCredentialsPostRequest } from '';

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
  } satisfies CreateStoredProviderV1ProviderCredentialsPostRequest;

  try {
    const data = await api.createStoredProviderV1ProviderCredentialsPost(body);
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


## deleteStoredProviderV1ProviderCredentialsInstanceDelete

> deleteStoredProviderV1ProviderCredentialsInstanceDelete(instance)

Delete Stored Provider

Delete a stored provider. A config.yml provider cannot be deleted here.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { DeleteStoredProviderV1ProviderCredentialsInstanceDeleteRequest } from '';

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
  } satisfies DeleteStoredProviderV1ProviderCredentialsInstanceDeleteRequest;

  try {
    const data = await api.deleteStoredProviderV1ProviderCredentialsInstanceDelete(body);
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


## listProvidersV1ProvidersGet

> ProvidersResponse listProvidersV1ProvidersGet()

List Providers

List static metadata for every configured provider.  Operator-facing: reports each provider\&#39;s capabilities, documentation and pricing links, and display name from the bundled any-llm and genai-prices datasets. No provider is contacted, so this is cheap and always available. Master-key gated because it describes the gateway\&#39;s own configuration.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ListProvidersV1ProvidersGetRequest } from '';

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
    const data = await api.listProvidersV1ProvidersGet();
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


## listStoredProvidersV1ProviderCredentialsGet

> Array&lt;StoredProviderResponse&gt; listStoredProvidersV1ProviderCredentialsGet()

List Stored Providers

List runtime-stored providers. Keys are never returned, only &#x60;&#x60;last4&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ListStoredProvidersV1ProviderCredentialsGetRequest } from '';

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
    const data = await api.listStoredProvidersV1ProviderCredentialsGet();
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


## providerCatalogDetailV1ProvidersCatalogProviderIdGet

> KnownProviderSchema providerCatalogDetailV1ProvidersCatalogProviderIdGet(providerId)

Provider Catalog Detail

Autofill hints for one provider the add-provider form has selected.  Imports only the selected provider\&#39;s any-llm module (not the whole catalog) to report its credential env var, default endpoint, whether a key is required, and whether that env var is already set on the server. Returns 404 for an unknown provider id. Master-key gated because it is operator-facing.  The SDK import is offloaded to a worker thread: the first fetch for a given provider imports that provider\&#39;s module, which would otherwise block the event loop (and thus every concurrent request) for the import\&#39;s duration.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProviderCatalogDetailV1ProvidersCatalogProviderIdGetRequest } from '';

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
  } satisfies ProviderCatalogDetailV1ProvidersCatalogProviderIdGetRequest;

  try {
    const data = await api.providerCatalogDetailV1ProvidersCatalogProviderIdGet(body);
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


## providerCatalogV1ProvidersCatalogGet

> Array&lt;KnownProviderSummarySchema&gt; providerCatalogV1ProvidersCatalogGet()

Provider Catalog

List every known provider for the add-provider picker: id and name only.  Lightweight by design so the picker never lags: provider ids come from the any-llm registry and names from the bundled genai-prices dataset, so no provider SDK is imported. The autofill hints for a chosen provider come from GET /v1/providers/catalog/{provider_id}, which imports only that one SDK. Master-key gated because it is operator-facing dashboard data.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProviderCatalogV1ProvidersCatalogGetRequest } from '';

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
    const data = await api.providerCatalogV1ProvidersCatalogGet();
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


## providerHealthV1ProvidersHealthGet

> ProviderHealthResponse providerHealthV1ProvidersHealthGet(refresh)

Provider Health

Report every configured provider\&#39;s reachability, with a last-checked time.  Reuses the per-provider model-discovery test path, so a provider is healthy when its credentials can list models. Results are served from the discovery cache (cheap enough to poll), so &#x60;&#x60;checked_at&#x60;&#x60; reflects when each provider was actually dialed. Pass &#x60;&#x60;refresh&#x3D;true&#x60;&#x60; to force a live re-dial of every provider. Master-key gated because it describes the gateway\&#39;s own providers.  A provider whose backend serves no model-listing endpoint cannot be verified this way, but it is not unreachable either: it is reported with &#x60;&#x60;discovery_unsupported&#x60;&#x60; and counted under &#x60;&#x60;degraded&#x60;&#x60; rather than as a reachability failure.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ProviderHealthV1ProvidersHealthGetRequest } from '';

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
  } satisfies ProviderHealthV1ProvidersHealthGetRequest;

  try {
    const data = await api.providerHealthV1ProvidersHealthGet(body);
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


## reencryptStoredProviderKeysV1ProviderCredentialsReencryptPost

> ReencryptProviderCredentialsResponse reencryptStoredProviderKeysV1ProviderCredentialsReencryptPost()

Reencrypt Stored Provider Keys

Re-encrypt stored provider keys with the primary OTARI_SECRET_KEY.  Operators rotate &#x60;&#x60;OTARI_SECRET_KEY&#x60;&#x60; by setting it to &#x60;&#x60;new,old&#x60;&#x60; first, restarting, running this endpoint, then removing the old key and restarting again. Rows that cannot be decrypted are left untouched and must be recovered by replacing the affected provider keys.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { ReencryptStoredProviderKeysV1ProviderCredentialsReencryptPostRequest } from '';

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
    const data = await api.reencryptStoredProviderKeysV1ProviderCredentialsReencryptPost();
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


## testProviderConnectionV1ProviderCredentialsTestPost

> TestProviderResponse testProviderConnectionV1ProviderCredentialsTestPost(testProviderRequest)

Test Provider Connection

Test provider credentials without storing them (for the add/edit form).  Resolves the implementation from &#x60;&#x60;provider_type&#x60;&#x60; (honoring the &#x60;&#x60;*-compatible&#x60;&#x60; aliases) or the &#x60;&#x60;instance&#x60;&#x60; name, then lists the provider\&#39;s models with the supplied credentials. Nothing is persisted and the key is never echoed.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { TestProviderConnectionV1ProviderCredentialsTestPostRequest } from '';

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
  } satisfies TestProviderConnectionV1ProviderCredentialsTestPostRequest;

  try {
    const data = await api.testProviderConnectionV1ProviderCredentialsTestPost(body);
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


## testStoredProviderV1ProviderCredentialsInstanceTestPost

> TestProviderResponse testStoredProviderV1ProviderCredentialsInstanceTestPost(instance)

Test Stored Provider

Verify a stored provider\&#39;s key by listing its models, without exposing the key.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { TestStoredProviderV1ProviderCredentialsInstanceTestPostRequest } from '';

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
  } satisfies TestStoredProviderV1ProviderCredentialsInstanceTestPostRequest;

  try {
    const data = await api.testStoredProviderV1ProviderCredentialsInstanceTestPost(body);
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


## updateStoredProviderV1ProviderCredentialsInstancePatch

> StoredProviderResponse updateStoredProviderV1ProviderCredentialsInstancePatch(instance, updateStoredProviderRequest)

Update Stored Provider

Update a stored provider. Omitted fields are left as-is; an explicit &#x60;&#x60;null&#x60;&#x60; clears them.  &#x60;&#x60;api_key&#x60;&#x60; follows the same rule: omit it to keep the stored key, send a new one to rotate, or send &#x60;&#x60;null&#x60;&#x60; to clear it. The row is locked &#x60;&#x60;FOR UPDATE&#x60;&#x60; so the &#x60;&#x60;expected_updated_at&#x60;&#x60; check and the write it guards are atomic.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '';
import type { UpdateStoredProviderV1ProviderCredentialsInstancePatchRequest } from '';

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
  } satisfies UpdateStoredProviderV1ProviderCredentialsInstancePatchRequest;

  try {
    const data = await api.updateStoredProviderV1ProviderCredentialsInstancePatch(body);
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

