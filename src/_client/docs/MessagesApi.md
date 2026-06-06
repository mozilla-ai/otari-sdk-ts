# MessagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMessageV1MessagesPost**](MessagesApi.md#createmessagev1messagespost) | **POST** /v1/messages | Create Message |



## createMessageV1MessagesPost

> MessageResponse createMessageV1MessagesPost(messagesRequest)

Create Message

Anthropic Messages API-compatible endpoint.  Supports MCP tool-use loops, sandboxed code execution, and SearXNG web_search in both standalone mode and platform mode. Platform-mode requests resolve credentials via the platform service and (for non-tool-loop requests) get multi-attempt fallback across the resolved route. Tool-loop requests collapse to a single attempt — once &#x60;&#x60;on_first_response&#x60;&#x60; lock-in plumbing lands across the codebase, a follow-up will enable pre-lock-in fallback for tool-loop requests too.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '';
import type { CreateMessageV1MessagesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MessagesApi();

  const body = {
    // MessagesRequest
    messagesRequest: ...,
  } satisfies CreateMessageV1MessagesPostRequest;

  try {
    const data = await api.createMessageV1MessagesPost(body);
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
| **messagesRequest** | [MessagesRequest](MessagesRequest.md) |  | |

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Anthropic-style message |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

