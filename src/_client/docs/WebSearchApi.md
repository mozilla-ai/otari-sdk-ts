# WebSearchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webSearchV1WebSearchSearchGet**](WebSearchApi.md#websearchv1websearchsearchget) | **GET** /v1/web-search/search | Web Search |



## webSearchV1WebSearchSearchGet

> WebSearchBackendResponse webSearchV1WebSearchSearchGet(q, maxResults, searchDepth, topic, timeRange, includeAnswer, xGatewayToken)

Web Search

Run one search through this deployment\&#39;s configured search provider.  The declared query params are the &#x60;&#x60;provider_options&#x60;&#x60; keys the providers understand. Everything else the caller sends, &#x60;&#x60;format&#x60;&#x60; and &#x60;&#x60;engines&#x60;&#x60; included, is ignored rather than forwarded: the bag is opaque to the gateway that filled it, so passing it upstream unread would let a workspace set provider request fields this deployment never chose.

### Example

```ts
import {
  Configuration,
  WebSearchApi,
} from '';
import type { WebSearchV1WebSearchSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: GatewayTokenAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchApi(config);

  const body = {
    // string | The search query.
    q: q_example,
    // number (optional)
    maxResults: 56,
    // string (optional)
    searchDepth: searchDepth_example,
    // string (optional)
    topic: topic_example,
    // string (optional)
    timeRange: timeRange_example,
    // boolean (optional)
    includeAnswer: true,
    // string (optional)
    xGatewayToken: xGatewayToken_example,
  } satisfies WebSearchV1WebSearchSearchGetRequest;

  try {
    const data = await api.webSearchV1WebSearchSearchGet(body);
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
| **q** | `string` | The search query. | [Defaults to `undefined`] |
| **maxResults** | `number` |  | [Optional] [Defaults to `undefined`] |
| **searchDepth** | `string` |  | [Optional] [Defaults to `undefined`] |
| **topic** | `string` |  | [Optional] [Defaults to `undefined`] |
| **timeRange** | `string` |  | [Optional] [Defaults to `undefined`] |
| **includeAnswer** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **xGatewayToken** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**WebSearchBackendResponse**](WebSearchBackendResponse.md)

### Authorization

[GatewayTokenAuth](../README.md#GatewayTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

