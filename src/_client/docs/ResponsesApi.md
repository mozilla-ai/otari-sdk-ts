# ResponsesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createResponseV1ResponsesPost**](ResponsesApi.md#createresponsev1responsespost) | **POST** /v1/responses | Create Response |



## createResponseV1ResponsesPost

> any createResponseV1ResponsesPost(responsesRequest)

Create Response

OpenAI-compatible Responses endpoint.  Supports MCP tool-use loops, sandboxed code execution, and SearXNG web_search in both standalone mode and hybrid mode. Hybrid-mode requests resolve credentials via the platform service and (for non-tool-loop requests) get multi-attempt fallback across the resolved route. Tool-loop requests collapse to a single attempt — once &#x60;&#x60;on_first_response&#x60;&#x60; lock-in plumbing lands across the codebase, a follow-up will enable pre-lock-in fallback for tool-loop requests too.

### Example

```ts
import {
  Configuration,
  ResponsesApi,
} from '';
import type { CreateResponseV1ResponsesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ResponsesApi();

  const body = {
    // ResponsesRequest
    responsesRequest: ...,
  } satisfies CreateResponseV1ResponsesPostRequest;

  try {
    const data = await api.createResponseV1ResponsesPost(body);
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

