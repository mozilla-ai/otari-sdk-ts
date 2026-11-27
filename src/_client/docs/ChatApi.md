# ChatApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chatChatCompletions**](ChatApi.md#chatchatcompletions) | **POST** /api/v1/chat/completions | Chat Completions |



## chatChatCompletions

> ChatCompletion chatChatCompletions(chatCompletionRequest, idempotencyKey, otariTags)

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
    // string | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. (optional)
    idempotencyKey: idempotencyKey_example,
    // string | Tags for cost attribution, as comma-separated `key=value` pairs (`agent=bug-fix,run=1234`), for a client that cannot set the body\'s `metadata`. Keys and values are percent-decoded, so either may carry an encoded `,` or `=`, and a non-ASCII character must be encoded. Whitespace around a pair is ignored, and a repeated header is read as one list. The bounds are the body\'s: up to 16 pairs, keys up to 64 characters and values up to 512, counted after merging with the body\'s tags, which win on the same key. Never forwarded to the provider. (optional)
    otariTags: otariTags_example,
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
| **idempotencyKey** | `string` | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. | [Optional] [Defaults to `undefined`] |
| **otariTags** | `string` | Tags for cost attribution, as comma-separated &#x60;key&#x3D;value&#x60; pairs (&#x60;agent&#x3D;bug-fix,run&#x3D;1234&#x60;), for a client that cannot set the body\&#39;s &#x60;metadata&#x60;. Keys and values are percent-decoded, so either may carry an encoded &#x60;,&#x60; or &#x60;&#x3D;&#x60;, and a non-ASCII character must be encoded. Whitespace around a pair is ignored, and a repeated header is read as one list. The bounds are the body\&#39;s: up to 16 pairs, keys up to 64 characters and values up to 512, counted after merging with the body\&#39;s tags, which win on the same key. Never forwarded to the provider. | [Optional] [Defaults to `undefined`] |

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

