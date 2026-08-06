# SearchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSearchForToolV1SearchSearchToolNamePost**](SearchApi.md#createsearchfortoolv1searchsearchtoolnamepost) | **POST** /v1/search/{search_tool_name} | Create Search For Tool |
| [**createSearchV1SearchPost**](SearchApi.md#createsearchv1searchpost) | **POST** /v1/search | Create Search |



## createSearchForToolV1SearchSearchToolNamePost

> SearchResponse createSearchForToolV1SearchSearchToolNamePost(searchToolName, searchRequest)

Create Search For Tool

Run a search against the search tool named in the path.  Identical to &#x60;&#x60;POST /v1/search&#x60;&#x60; except that the path names the tool, which is the form LiteLLM clients use. Any &#x60;&#x60;search_tool_name&#x60;&#x60; in the body is ignored.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend always bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60;   field naming a different user is rejected with 403 (or ignored, when the   key\&#39;s own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide   setting is disabled and the key does not override it); it is never billed   to that user.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { CreateSearchForToolV1SearchSearchToolNamePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchApi(config);

  const body = {
    // string | Configured search tool to run against
    searchToolName: searchToolName_example,
    // SearchRequest
    searchRequest: ...,
  } satisfies CreateSearchForToolV1SearchSearchToolNamePostRequest;

  try {
    const data = await api.createSearchForToolV1SearchSearchToolNamePost(body);
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
| **searchToolName** | `string` | Configured search tool to run against | [Defaults to `undefined`] |
| **searchRequest** | [SearchRequest](SearchRequest.md) |  | |

### Return type

[**SearchResponse**](SearchResponse.md)

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


## createSearchV1SearchPost

> SearchResponse createSearchV1SearchPost(searchRequest)

Create Search

Run a search against a configured search tool.  The tool is taken from &#x60;&#x60;search_tool_name&#x60;&#x60;, which may be omitted when exactly one tool is configured.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend always bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60;   field naming a different user is rejected with 403 (or ignored, when the   key\&#39;s own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide   setting is disabled and the key does not override it); it is never billed   to that user.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { CreateSearchV1SearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchApi(config);

  const body = {
    // SearchRequest
    searchRequest: ...,
  } satisfies CreateSearchV1SearchPostRequest;

  try {
    const data = await api.createSearchV1SearchPost(body);
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
| **searchRequest** | [SearchRequest](SearchRequest.md) |  | |

### Return type

[**SearchResponse**](SearchResponse.md)

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

