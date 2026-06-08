# BatchesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelBatchV1BatchesBatchIdCancelPost**](BatchesApi.md#cancelbatchv1batchesbatchidcancelpost) | **POST** /v1/batches/{batch_id}/cancel | Cancel Batch |
| [**createBatchV1BatchesPost**](BatchesApi.md#createbatchv1batchespost) | **POST** /v1/batches | Create Batch |
| [**listBatchesV1BatchesGet**](BatchesApi.md#listbatchesv1batchesget) | **GET** /v1/batches | List Batches |
| [**retrieveBatchResultsV1BatchesBatchIdResultsGet**](BatchesApi.md#retrievebatchresultsv1batchesbatchidresultsget) | **GET** /v1/batches/{batch_id}/results | Retrieve Batch Results |
| [**retrieveBatchV1BatchesBatchIdGet**](BatchesApi.md#retrievebatchv1batchesbatchidget) | **GET** /v1/batches/{batch_id} | Retrieve Batch |



## cancelBatchV1BatchesBatchIdCancelPost

> any cancelBatchV1BatchesBatchIdCancelPost(batchId, provider)

Cancel Batch

Cancel a batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { CancelBatchV1BatchesBatchIdCancelPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BatchesApi();

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies CancelBatchV1BatchesBatchIdCancelPostRequest;

  try {
    const data = await api.cancelBatchV1BatchesBatchIdCancelPost(body);
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
| **batchId** | `string` |  | [Defaults to `undefined`] |
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

**any**

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


## createBatchV1BatchesPost

> any createBatchV1BatchesPost(createBatchRequest)

Create Batch

Create a batch of LLM requests for asynchronous processing.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { CreateBatchV1BatchesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BatchesApi();

  const body = {
    // CreateBatchRequest
    createBatchRequest: ...,
  } satisfies CreateBatchV1BatchesPostRequest;

  try {
    const data = await api.createBatchV1BatchesPost(body);
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
| **createBatchRequest** | [CreateBatchRequest](CreateBatchRequest.md) |  | |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBatchesV1BatchesGet

> any listBatchesV1BatchesGet(provider, after, limit)

List Batches

List batches for a provider.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { ListBatchesV1BatchesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BatchesApi();

  const body = {
    // string
    provider: provider_example,
    // string (optional)
    after: after_example,
    // number (optional)
    limit: 56,
  } satisfies ListBatchesV1BatchesGetRequest;

  try {
    const data = await api.listBatchesV1BatchesGet(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **after** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

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


## retrieveBatchResultsV1BatchesBatchIdResultsGet

> any retrieveBatchResultsV1BatchesBatchIdResultsGet(batchId, provider)

Retrieve Batch Results

Retrieve the results of a completed batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { RetrieveBatchResultsV1BatchesBatchIdResultsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BatchesApi();

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies RetrieveBatchResultsV1BatchesBatchIdResultsGetRequest;

  try {
    const data = await api.retrieveBatchResultsV1BatchesBatchIdResultsGet(body);
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
| **batchId** | `string` |  | [Defaults to `undefined`] |
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | Batch is not yet complete |  -  |
| **422** | Validation Error |  -  |
| **502** | LLM provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retrieveBatchV1BatchesBatchIdGet

> any retrieveBatchV1BatchesBatchIdGet(batchId, provider)

Retrieve Batch

Retrieve the status of a batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { RetrieveBatchV1BatchesBatchIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BatchesApi();

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies RetrieveBatchV1BatchesBatchIdGetRequest;

  try {
    const data = await api.retrieveBatchV1BatchesBatchIdGet(body);
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
| **batchId** | `string` |  | [Defaults to `undefined`] |
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

**any**

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

