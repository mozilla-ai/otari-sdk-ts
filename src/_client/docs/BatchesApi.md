# BatchesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchesCancelBatch**](BatchesApi.md#batchescancelbatch) | **POST** /api/v1/batches/{batch_id}/cancel | Cancel Batch |
| [**batchesCreateBatch**](BatchesApi.md#batchescreatebatch) | **POST** /api/v1/batches | Create Batch |
| [**batchesListBatches**](BatchesApi.md#batcheslistbatches) | **GET** /api/v1/batches | List Batches |
| [**batchesRetrieveBatch**](BatchesApi.md#batchesretrievebatch) | **GET** /api/v1/batches/{batch_id} | Retrieve Batch |
| [**batchesRetrieveBatchResults**](BatchesApi.md#batchesretrievebatchresults) | **GET** /api/v1/batches/{batch_id}/results | Retrieve Batch Results |



## batchesCancelBatch

> any batchesCancelBatch(batchId, provider)

Cancel Batch

Cancel a batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { BatchesCancelBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BatchesApi(config);

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies BatchesCancelBatchRequest;

  try {
    const data = await api.batchesCancelBatch(body);
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


## batchesCreateBatch

> any batchesCreateBatch(createBatchRequest)

Create Batch

Create a batch of LLM requests for asynchronous processing.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { BatchesCreateBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BatchesApi(config);

  const body = {
    // CreateBatchRequest
    createBatchRequest: ...,
  } satisfies BatchesCreateBatchRequest;

  try {
    const data = await api.batchesCreateBatch(body);
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


## batchesListBatches

> any batchesListBatches(provider, after, limit)

List Batches

List batches for a provider.  Non-master keys only see batches they own in their own workspace (plus legacy batches without an ownership marker, or without a recorded workspace); the page is filtered after the provider call, so a page may contain fewer than &#x60;&#x60;limit&#x60;&#x60; items.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { BatchesListBatchesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BatchesApi(config);

  const body = {
    // string
    provider: provider_example,
    // string (optional)
    after: after_example,
    // number (optional)
    limit: 56,
  } satisfies BatchesListBatchesRequest;

  try {
    const data = await api.batchesListBatches(body);
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


## batchesRetrieveBatch

> any batchesRetrieveBatch(batchId, provider)

Retrieve Batch

Retrieve the status of a batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { BatchesRetrieveBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BatchesApi(config);

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies BatchesRetrieveBatchRequest;

  try {
    const data = await api.batchesRetrieveBatch(body);
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


## batchesRetrieveBatchResults

> any batchesRetrieveBatchResults(batchId, provider)

Retrieve Batch Results

Retrieve the results of a completed batch.

### Example

```ts
import {
  Configuration,
  BatchesApi,
} from '';
import type { BatchesRetrieveBatchResultsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BatchesApi(config);

  const body = {
    // string
    batchId: batchId_example,
    // string
    provider: provider_example,
  } satisfies BatchesRetrieveBatchResultsRequest;

  try {
    const data = await api.batchesRetrieveBatchResults(body);
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

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

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

