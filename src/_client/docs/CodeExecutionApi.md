# CodeExecutionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**codeExecutionExecuteCode**](CodeExecutionApi.md#codeexecutionexecutecode) | **POST** /api/v1/code/execute | Execute Code |



## codeExecutionExecuteCode

> CodeExecuteResponse codeExecutionExecuteCode(codeExecuteRequest)

Execute Code

Run code in the gateway\&#39;s sandbox and return its output.  The run is admitted as an &#x60;&#x60;otari_code_execution&#x60;&#x60; call is: a workspace whose code execution policy is off is refused, and its execution ceiling and pinned image apply. It is priced under &#x60;&#x60;otari:code_execution&#x60;&#x60; and reserved against the caller\&#39;s budgets. &#x60;&#x60;file_ids&#x60;&#x60; puts uploads in the working directory, and each file the code writes comes back with a &#x60;&#x60;file_id&#x60;&#x60;. &#x60;&#x60;container: \&quot;auto\&quot;&#x60;&#x60; holds the sandbox after the run and names it in &#x60;&#x60;Otari-Container-Id&#x60;&#x60;; sending that id back runs in the same sandbox, with its files and interpreter state.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60; field   naming a different user is rejected with 403 (or ignored, when the key\&#39;s   own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide setting is   disabled and the key does not override it); it is never billed to that   user. - Service key: a &#x60;&#x60;user&#x60;&#x60; field names one of the key owner\&#39;s end users,   created on first use on the budget &#x60;&#x60;Otari-End-User-Budget&#x60;&#x60; names (or   the key\&#39;s default), and is billed and rate limited as that end user.

### Example

```ts
import {
  Configuration,
  CodeExecutionApi,
} from '';
import type { CodeExecutionExecuteCodeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CodeExecutionApi(config);

  const body = {
    // CodeExecuteRequest
    codeExecuteRequest: ...,
  } satisfies CodeExecutionExecuteCodeRequest;

  try {
    const data = await api.codeExecutionExecuteCode(body);
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
| **codeExecuteRequest** | [CodeExecuteRequest](CodeExecuteRequest.md) |  | |

### Return type

[**CodeExecuteResponse**](CodeExecuteResponse.md)

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

