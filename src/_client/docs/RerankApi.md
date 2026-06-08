# RerankApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRerankV1RerankPost**](RerankApi.md#creatererankv1rerankpost) | **POST** /v1/rerank | Create Rerank |



## createRerankV1RerankPost

> RerankResponse createRerankV1RerankPost(rerankRequest)

Create Rerank

Rerank documents by relevance to a query.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  RerankApi,
} from '';
import type { CreateRerankV1RerankPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RerankApi();

  const body = {
    // RerankRequest
    rerankRequest: ...,
  } satisfies CreateRerankV1RerankPostRequest;

  try {
    const data = await api.createRerankV1RerankPost(body);
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
| **rerankRequest** | [RerankRequest](RerankRequest.md) |  | |

### Return type

[**RerankResponse**](RerankResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rerank result |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

