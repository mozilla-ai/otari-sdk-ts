# EmbeddingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**embeddingsCreateEmbedding**](EmbeddingsApi.md#embeddingscreateembedding) | **POST** /api/v1/embeddings | Create Embedding |



## embeddingsCreateEmbedding

> CreateEmbeddingResponse embeddingsCreateEmbedding(embeddingRequest)

Create Embedding

OpenAI-compatible embeddings endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  EmbeddingsApi,
} from '';
import type { EmbeddingsCreateEmbeddingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EmbeddingsApi(config);

  const body = {
    // EmbeddingRequest
    embeddingRequest: ...,
  } satisfies EmbeddingsCreateEmbeddingRequest;

  try {
    const data = await api.embeddingsCreateEmbedding(body);
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

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Embeddings |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

