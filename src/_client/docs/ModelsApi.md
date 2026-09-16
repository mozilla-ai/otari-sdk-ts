# ModelsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**modelsGetModel**](ModelsApi.md#modelsgetmodel) | **GET** /api/v1/models/{model_id} | Get Model |
| [**modelsListDiscoverableModels**](ModelsApi.md#modelslistdiscoverablemodels) | **GET** /api/v1/models/discoverable | List Discoverable Models |
| [**modelsListModelMetadata**](ModelsApi.md#modelslistmodelmetadata) | **GET** /api/v1/models/metadata | List Model Metadata |
| [**modelsListModels**](ModelsApi.md#modelslistmodels) | **GET** /api/v1/models | List Models |



## modelsGetModel

> ModelObject modelsGetModel(modelId)

Get Model

Get details for a specific model.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ModelsGetModelRequest } from '';

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
  } satisfies ModelsGetModelRequest;

  try {
    const data = await api.modelsGetModel(body);
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


## modelsListDiscoverableModels

> DiscoverableModelsResponse modelsListDiscoverableModels(refresh)

List Discoverable Models

List every model the configured provider credentials can reach.  Operator-facing counterpart to GET /api/v1/models, which serves a curated catalog to API callers. This reports each provider separately and keeps its error, so a provider with a bad key is distinguishable from one with no models. It is operator-gated because a provider error message describes the gateway\&#39;s own configuration.  Answers from the discovery cache, which a background refresher keeps warm, so the call does not wait on a slow or unreachable provider. Each provider carries the &#x60;&#x60;checked_at&#x60;&#x60; its result was produced at; a null one has not been dialed yet. Pass &#x60;&#x60;refresh&#x3D;true&#x60;&#x60; to force a live re-dial of every provider.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ModelsListDiscoverableModelsRequest } from '';

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
  } satisfies ModelsListDiscoverableModelsRequest;

  try {
    const data = await api.modelsListDiscoverableModels(body);
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


## modelsListModelMetadata

> ModelMetadataResponse modelsListModelMetadata()

List Model Metadata

Per-model metadata for the dashboard\&#39;s detail view, from models.dev.  Covers every model models.dev lists under a configured provider, keyed by the &#x60;&#x60;instance:model&#x60;&#x60; selector the dashboard uses. &#x60;&#x60;available&#x60;&#x60; is false when enrichment is disabled (&#x60;&#x60;models_dev_metadata&#x60;&#x60;) or models.dev could not be reached; the response is then empty and the UI falls back to bundled data. Operator-gated: it describes the gateway\&#39;s configured providers.  Answers from the cached catalog, kept warm by a background refresher, so the dashboard never waits on the models.dev fetch timeout.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ModelsListModelMetadataRequest } from '';

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
    const data = await api.modelsListModelMetadata();
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


## modelsListModels

> ModelListResponse modelsListModels(provider)

List Models

List all available models.  Returns models auto-discovered from configured providers, enriched with pricing data from the model_pricing table when available. Models that only exist in the pricing table are also included for backward compatibility.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '';
import type { ModelsListModelsRequest } from '';

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
  } satisfies ModelsListModelsRequest;

  try {
    const data = await api.modelsListModels(body);
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

