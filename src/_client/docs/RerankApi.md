# RerankApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**rerankCreateRerank**](RerankApi.md#rerankcreatererank) | **POST** /api/v1/rerank | Create Rerank |



## rerankCreateRerank

> RerankResponse rerankCreateRerank(rerankRequest)

Create Rerank

Rerank documents by relevance to a query.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  RerankApi,
} from '';
import type { RerankCreateRerankRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RerankApi(config);

  const body = {
    // RerankRequest
    rerankRequest: ...,
  } satisfies RerankCreateRerankRequest;

  try {
    const data = await api.rerankCreateRerank(body);
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

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rerank result |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

