# MessagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countMessageTokensV1MessagesCountTokensPost**](MessagesApi.md#countmessagetokensv1messagescounttokenspost) | **POST** /v1/messages/count_tokens | Count Message Tokens |
| [**createMessageV1MessagesPost**](MessagesApi.md#createmessagev1messagespost) | **POST** /v1/messages | Create Message |



## countMessageTokensV1MessagesCountTokensPost

> CountTokensResponse countMessageTokensV1MessagesCountTokensPost(countTokensRequest)

Count Message Tokens

Anthropic &#x60;&#x60;/v1/messages/count_tokens&#x60;&#x60;-compatible endpoint.  Returns &#x60;&#x60;{\&quot;input_tokens\&quot;: N}&#x60;&#x60; without contacting an upstream provider: counting is local, so there is no budget reservation, pricing, or usage logging. Authentication mirrors :func:&#x60;create_message&#x60; — hybrid mode resolves the caller\&#39;s token against the platform, standalone mode validates the API key — so the endpoint is not an open token-counting oracle.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '';
import type { CountMessageTokensV1MessagesCountTokensPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MessagesApi();

  const body = {
    // CountTokensRequest
    countTokensRequest: ...,
  } satisfies CountMessageTokensV1MessagesCountTokensPostRequest;

  try {
    const data = await api.countMessageTokensV1MessagesCountTokensPost(body);
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
| **countTokensRequest** | [CountTokensRequest](CountTokensRequest.md) |  | |

### Return type

[**CountTokensResponse**](CountTokensResponse.md)

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


## createMessageV1MessagesPost

> MessageResponse createMessageV1MessagesPost(messagesRequest)

Create Message

Anthropic Messages API-compatible endpoint.  Supports MCP tool-use loops, sandboxed code execution, and SearXNG web_search in both standalone mode and hybrid mode. Hybrid-mode requests resolve credentials via the platform service and (for non-tool-loop requests) get multi-attempt fallback across the resolved route. Tool-loop requests collapse to a single attempt — once &#x60;&#x60;on_first_response&#x60;&#x60; lock-in plumbing lands across the codebase, a follow-up will enable pre-lock-in fallback for tool-loop requests too.

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

