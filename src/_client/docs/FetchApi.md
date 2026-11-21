# FetchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchCreateFetch**](FetchApi.md#fetchcreatefetch) | **POST** /api/v1/fetch | Create Fetch |
| [**fetchCreateFetchForTool**](FetchApi.md#fetchcreatefetchfortool) | **POST** /api/v1/fetch/{fetch_tool_name} | Create Fetch For Tool |



## fetchCreateFetch

> FetchResponse fetchCreateFetch(fetchRequest)

Create Fetch

Fetch one page through a configured fetch tool.  The tool is taken from &#x60;&#x60;fetch_tool_name&#x60;&#x60;, which may be omitted: the deployment\&#39;s &#x60;&#x60;web_fetch_default_tool&#x60;&#x60; then serves, else &#x60;&#x60;builtin_fetch&#x60;&#x60;, the gateway\&#39;s own fetcher. Such a call runs on the workspace\&#39;s organization fetch key when it has one. While the deployment\&#39;s &#x60;&#x60;web_fetch_enabled&#x60;&#x60; is off, the call is refused, as &#x60;&#x60;otari_web_fetch&#x60;&#x60; is. The URL must pass the workspace\&#39;s domain lists and the gateway\&#39;s own checks: a public http or https URL that names no private address. The built-in fetcher also checks where each host resolves.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60; field   naming a different user is rejected with 403 (or ignored, when the key\&#39;s   own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide setting is   disabled and the key does not override it); it is never billed to that   user. - Service key: a &#x60;&#x60;user&#x60;&#x60; field names one of the key owner\&#39;s end users,   created on first use on the budget &#x60;&#x60;Otari-End-User-Budget&#x60;&#x60; names (or   the key\&#39;s default), and is billed and rate limited as that end user, as   on chat completions.

### Example

```ts
import {
  Configuration,
  FetchApi,
} from '';
import type { FetchCreateFetchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FetchApi(config);

  const body = {
    // FetchRequest
    fetchRequest: ...,
  } satisfies FetchCreateFetchRequest;

  try {
    const data = await api.fetchCreateFetch(body);
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
| **fetchRequest** | [FetchRequest](FetchRequest.md) |  | |

### Return type

[**FetchResponse**](FetchResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  * Otari-Cost-USD - What the call cost, as a six-decimal USD string; absent when it was not priced <br>  * Otari-Pricing-Source - What priced it: organization, deployment or defaults (a rate), or reported (the provider\&#39;s own charge); absent when it was not priced <br>  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fetchCreateFetchForTool

> FetchResponse fetchCreateFetchForTool(fetchToolName, fetchRequest)

Create Fetch For Tool

Fetch one page through the fetch tool named in the path.  Identical to &#x60;&#x60;POST /api/v1/fetch&#x60;&#x60; except that the path names the tool, which then runs on its own key. Any &#x60;&#x60;fetch_tool_name&#x60;&#x60; in the body is ignored.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60; field   naming a different user is rejected with 403 (or ignored, when the key\&#39;s   own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide setting is   disabled and the key does not override it); it is never billed to that   user. - Service key: a &#x60;&#x60;user&#x60;&#x60; field names one of the key owner\&#39;s end users,   created on first use on the budget &#x60;&#x60;Otari-End-User-Budget&#x60;&#x60; names (or   the key\&#39;s default), and is billed and rate limited as that end user, as   on chat completions.

### Example

```ts
import {
  Configuration,
  FetchApi,
} from '';
import type { FetchCreateFetchForToolRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FetchApi(config);

  const body = {
    // string | Configured fetch tool to run on, builtin_fetch included
    fetchToolName: fetchToolName_example,
    // FetchRequest
    fetchRequest: ...,
  } satisfies FetchCreateFetchForToolRequest;

  try {
    const data = await api.fetchCreateFetchForTool(body);
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
| **fetchToolName** | `string` | Configured fetch tool to run on, builtin_fetch included | [Defaults to `undefined`] |
| **fetchRequest** | [FetchRequest](FetchRequest.md) |  | |

### Return type

[**FetchResponse**](FetchResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  * Otari-Cost-USD - What the call cost, as a six-decimal USD string; absent when it was not priced <br>  * Otari-Pricing-Source - What priced it: organization, deployment or defaults (a rate), or reported (the provider\&#39;s own charge); absent when it was not priced <br>  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

