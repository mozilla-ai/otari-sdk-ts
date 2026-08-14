# ModelsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModelV1ModelsModelIdGet**](ModelsApi.md#getmodelv1modelsmodelidget) | **GET** /v1/models/{model_id} | Get Model |
| [**listDiscoverableModelsV1ModelsDiscoverableGet**](ModelsApi.md#listdiscoverablemodelsv1modelsdiscoverableget) | **GET** /v1/models/discoverable | List Discoverable Models |
| [**listModelMetadataV1ModelsMetadataGet**](ModelsApi.md#listmodelmetadatav1modelsmetadataget) | **GET** /v1/models/metadata | List Model Metadata |
| [**listModelsV1ModelsGet**](ModelsApi.md#listmodelsv1modelsget) | **GET** /v1/models | List Models |



## getModelV1ModelsModelIdGet

> ModelObject getModelV1ModelsModelIdGet(modelId)

Get Model

Get details for a specific model.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { GetModelV1ModelsModelIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelsApi(config);

  const body = {
    // string
    modelId: modelId_example,
  } satisfies GetModelV1ModelsModelIdGetRequest;

  try {
    const data = await api.getModelV1ModelsModelIdGet(body);
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
| **modelId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ModelObject**](ModelObject.md)

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


## listDiscoverableModelsV1ModelsDiscoverableGet

> DiscoverableModelsResponse listDiscoverableModelsV1ModelsDiscoverableGet(refresh)

List Discoverable Models

List every model the configured provider credentials can reach.  Operator-facing counterpart to GET /v1/models, which serves a curated catalog to API callers. This reports each provider separately and keeps its error, so a provider with a bad key is distinguishable from one with no models. It is master-key gated because a provider error message describes the gateway\&#39;s own configuration.  Answers from the discovery cache, which a background refresher keeps warm, so the call does not wait on a slow or unreachable provider. Each provider carries the &#x60;&#x60;checked_at&#x60;&#x60; its result was produced at; a null one has not been dialed yet. Pass &#x60;&#x60;refresh&#x3D;true&#x60;&#x60; to force a live re-dial of every provider.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ListDiscoverableModelsV1ModelsDiscoverableGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelsApi(config);

  const body = {
    // boolean | Re-dial every provider instead of answering from the discovery cache. (optional)
    refresh: true,
  } satisfies ListDiscoverableModelsV1ModelsDiscoverableGetRequest;

  try {
    const data = await api.listDiscoverableModelsV1ModelsDiscoverableGet(body);
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
| **refresh** | `boolean` | Re-dial every provider instead of answering from the discovery cache. | [Optional] [Defaults to `false`] |

### Return type

[**DiscoverableModelsResponse**](DiscoverableModelsResponse.md)

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


## listModelMetadataV1ModelsMetadataGet

> ModelMetadataResponse listModelMetadataV1ModelsMetadataGet()

List Model Metadata

Per-model metadata for the dashboard\&#39;s detail view, from models.dev.  Covers every model models.dev lists under a configured provider, keyed by the &#x60;&#x60;instance:model&#x60;&#x60; selector the dashboard uses. &#x60;&#x60;available&#x60;&#x60; is false when enrichment is disabled (&#x60;&#x60;models_dev_metadata&#x60;&#x60;) or models.dev could not be reached; the response is then empty and the UI falls back to bundled data. Master-key gated: it describes the gateway\&#39;s configured providers.  Answers from the cached catalog, kept warm by a background refresher, so the dashboard never waits on the models.dev fetch timeout.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ListModelMetadataV1ModelsMetadataGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelsApi(config);

  try {
    const data = await api.listModelMetadataV1ModelsMetadataGet();
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

[**ModelMetadataResponse**](ModelMetadataResponse.md)

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


## listModelsV1ModelsGet

> ModelListResponse listModelsV1ModelsGet(provider)

List Models

List all available models.  Returns models auto-discovered from configured providers, enriched with pricing data from the model_pricing table when available. Models that only exist in the pricing table are also included for backward compatibility.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ListModelsV1ModelsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelsApi(config);

  const body = {
    // string | Filter models by provider name (optional)
    provider: provider_example,
  } satisfies ListModelsV1ModelsGetRequest;

  try {
    const data = await api.listModelsV1ModelsGet(body);
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
| **provider** | `string` | Filter models by provider name | [Optional] [Defaults to `undefined`] |

### Return type

[**ModelListResponse**](ModelListResponse.md)

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

