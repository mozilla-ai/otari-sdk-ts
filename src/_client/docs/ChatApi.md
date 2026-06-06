# ChatApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chatCompletionsV1ChatCompletionsPost**](ChatApi.md#chatcompletionsv1chatcompletionspost) | **POST** /v1/chat/completions | Chat Completions |



## chatCompletionsV1ChatCompletionsPost

> ChatCompletion chatCompletionsV1ChatCompletionsPost(chatCompletionRequest)

Chat Completions

OpenAI-compatible chat completions endpoint.  Supports both streaming and non-streaming responses. Handles reasoning content from otari providers.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatCompletionsV1ChatCompletionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChatApi();

  const body = {
    // ChatCompletionRequest
    chatCompletionRequest: ...,
  } satisfies ChatCompletionsV1ChatCompletionsPostRequest;

  try {
    const data = await api.chatCompletionsV1ChatCompletionsPost(body);
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

### Return type

[**ChatCompletion**](ChatCompletion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chat completion |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

