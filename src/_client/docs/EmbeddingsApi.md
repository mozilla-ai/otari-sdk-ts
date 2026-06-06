# EmbeddingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmbeddingV1EmbeddingsPost**](EmbeddingsApi.md#createembeddingv1embeddingspost) | **POST** /v1/embeddings | Create Embedding |



## createEmbeddingV1EmbeddingsPost

> CreateEmbeddingResponse createEmbeddingV1EmbeddingsPost(embeddingRequest)

Create Embedding

OpenAI-compatible embeddings endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  EmbeddingsApi,
} from '';
import type { CreateEmbeddingV1EmbeddingsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EmbeddingsApi();

  const body = {
    // EmbeddingRequest
    embeddingRequest: ...,
  } satisfies CreateEmbeddingV1EmbeddingsPostRequest;

  try {
    const data = await api.createEmbeddingV1EmbeddingsPost(body);
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
| **embeddingRequest** | [EmbeddingRequest](EmbeddingRequest.md) |  | |

### Return type

[**CreateEmbeddingResponse**](CreateEmbeddingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Embeddings |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

