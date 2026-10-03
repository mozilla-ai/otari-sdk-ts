# ChatApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chatChatCompletions**](ChatApi.md#chatchatcompletions) | **POST** /api/v1/chat/completions | Chat Completions |



## chatChatCompletions

> ChatCompletion chatChatCompletions(chatCompletionRequest, idempotencyKey)

Chat Completions

OpenAI-compatible chat completions endpoint.  Supports both streaming and non-streaming responses. Handles reasoning content from otari providers.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatChatCompletionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // ChatCompletionRequest
    chatCompletionRequest: ...,
    // string | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests, in hybrid mode, and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies ChatChatCompletionsRequest;

  try {
    const data = await api.chatChatCompletions(body);
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
| **chatCompletionRequest** | [ChatCompletionRequest](ChatCompletionRequest.md) |  | |
| **idempotencyKey** | `string` | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests, in hybrid mode, and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. | [Optional] [Defaults to `undefined`] |

### Return type

[**ChatCompletion**](ChatCompletion.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chat completion |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

