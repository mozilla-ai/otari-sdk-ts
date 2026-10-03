# ResponsesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**responsesCreateResponse**](ResponsesApi.md#responsescreateresponse) | **POST** /api/v1/responses | Create Response |



## responsesCreateResponse

> any responsesCreateResponse(responsesRequest, idempotencyKey)

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
    // string | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests, in hybrid mode, and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. (optional)
    idempotencyKey: idempotencyKey_example,
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
| **idempotencyKey** | `string` | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests, in hybrid mode, and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. | [Optional] [Defaults to `undefined`] |

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

