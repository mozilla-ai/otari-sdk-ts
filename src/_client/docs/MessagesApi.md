# MessagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**messagesCountMessageTokens**](MessagesApi.md#messagescountmessagetokens) | **POST** /api/v1/messages/count_tokens | Count Message Tokens |
| [**messagesCreateMessage**](MessagesApi.md#messagescreatemessage) | **POST** /api/v1/messages | Create Message |



## messagesCountMessageTokens

> CountTokensResponse messagesCountMessageTokens(countTokensRequest)

Count Message Tokens

Anthropic &#x60;&#x60;/v1/messages/count_tokens&#x60;&#x60;-compatible endpoint.  Returns &#x60;&#x60;{\&quot;input_tokens\&quot;: N}&#x60;&#x60; without contacting an upstream provider: counting is local, so there is no budget reservation, pricing, or usage logging. Authentication mirrors :func:&#x60;create_message&#x60;, validating the API key, so the endpoint is not an open token-counting oracle.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '';
import type { MessagesCountMessageTokensRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagesApi(config);

  const body = {
    // CountTokensRequest
    countTokensRequest: ...,
  } satisfies MessagesCountMessageTokensRequest;

  try {
    const data = await api.messagesCountMessageTokens(body);
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

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **4XX** | The request was refused. |  -  |
| **5XX** | The request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## messagesCreateMessage

> MessageResponse messagesCreateMessage(messagesRequest, idempotencyKey, otariTags)

Create Message

Anthropic Messages API-compatible endpoint.  Supports MCP tool-use loops, sandboxed code execution, and SearXNG web_search.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '';
import type { MessagesCreateMessageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagesApi(config);

  const body = {
    // MessagesRequest
    messagesRequest: ...,
    // string | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. (optional)
    idempotencyKey: idempotencyKey_example,
    // string | Tags for cost attribution, as comma-separated `key=value` pairs (`agent=bug-fix,run=1234`), for a client that cannot set the body\'s `metadata`. Keys and values are percent-decoded, so either may carry an encoded `,` or `=`, and a non-ASCII character must be encoded. Whitespace around a pair is ignored, and a repeated header is read as one list. The bounds are the body\'s: up to 16 pairs, keys up to 64 characters and values up to 512, counted after merging with the body\'s tags, which win on the same key. Never forwarded to the provider. (optional)
    otariTags: otariTags_example,
  } satisfies MessagesCreateMessageRequest;

  try {
    const data = await api.messagesCreateMessage(body);
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
| **idempotencyKey** | `string` | A unique value, such as a UUID, that makes a non-streaming request safe to retry. A retry with the same key and body returns the original response, request ID and cost without calling the provider or billing again. A retry while the original is still running is answered 409 with Retry-After. Reusing a key for a different body is refused with 422. Ignored for streaming requests and on a deployment without OTARI_SECRET_KEY, which encrypts the stored response. | [Optional] [Defaults to `undefined`] |
| **otariTags** | `string` | Tags for cost attribution, as comma-separated &#x60;key&#x3D;value&#x60; pairs (&#x60;agent&#x3D;bug-fix,run&#x3D;1234&#x60;), for a client that cannot set the body\&#39;s &#x60;metadata&#x60;. Keys and values are percent-decoded, so either may carry an encoded &#x60;,&#x60; or &#x60;&#x3D;&#x60;, and a non-ASCII character must be encoded. Whitespace around a pair is ignored, and a repeated header is read as one list. The bounds are the body\&#39;s: up to 16 pairs, keys up to 64 characters and values up to 512, counted after merging with the body\&#39;s tags, which win on the same key. Never forwarded to the provider. | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Anthropic-style message |  -  |
| **4XX** | The request was refused. |  -  |
| **5XX** | The request failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

