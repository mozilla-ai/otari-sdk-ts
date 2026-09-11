# ResponsesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**responsesCreateResponse**](ResponsesApi.md#responsescreateresponse) | **POST** /api/v1/responses | Create Response |



## responsesCreateResponse

> any responsesCreateResponse(responsesRequest)

Create Response

OpenAI-compatible Responses endpoint.  Supports MCP tool-use loops, sandboxed code execution, and SearXNG web_search in both standalone mode and hybrid mode. Hybrid-mode requests resolve credentials via the platform service and get multi-attempt fallback across the resolved route, tool-loop requests included (fallback applies up to the pre-lock-in point, same as chat).

### Example

```ts
import {
  Configuration,
  ResponsesApi,
} from '';
import type { ResponsesCreateResponseRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ResponsesApi(config);

  const body = {
    // ResponsesRequest
    responsesRequest: ...,
  } satisfies ResponsesCreateResponseRequest;

  try {
    const data = await api.responsesCreateResponse(body);
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
| **responsesRequest** | [ResponsesRequest](ResponsesRequest.md) |  | |

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

