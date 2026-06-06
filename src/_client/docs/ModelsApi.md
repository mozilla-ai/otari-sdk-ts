# ModelsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModelV1ModelsModelIdGet**](ModelsApi.md#getmodelv1modelsmodelidget) | **GET** /v1/models/{model_id} | Get Model |
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
  const api = new ModelsApi();

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

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
  const api = new ModelsApi();

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

