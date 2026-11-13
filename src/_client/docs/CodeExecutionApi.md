# CodeExecutionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**codeExecutionExecuteCode**](CodeExecutionApi.md#codeexecutionexecutecode) | **POST** /api/v1/code/execute | Execute Code |
| [**codeExecutionListCodeExecutionEnvironments**](CodeExecutionApi.md#codeexecutionlistcodeexecutionenvironments) | **GET** /api/v1/code/environments | List Code Execution Environments |



## codeExecutionExecuteCode

> CodeExecuteResponse codeExecutionExecuteCode(codeExecuteRequest)

Execute Code

Run code in the gateway\&#39;s sandbox and return its output.  The run is admitted as an &#x60;&#x60;otari_code_execution&#x60;&#x60; call is: a workspace whose code execution policy is off is refused, and its execution ceiling and pinned image apply. &#x60;&#x60;environment&#x60;&#x60; names one of the environments &#x60;&#x60;GET /api/v1/code/environments&#x60;&#x60; lists. The run is priced under &#x60;&#x60;otari:code_execution:&lt;environment&gt;&#x60;&#x60;, else &#x60;&#x60;otari:code_execution&#x60;&#x60;, and reserved against the caller\&#39;s budgets. &#x60;&#x60;file_ids&#x60;&#x60; puts uploads in the working directory, and each file the code writes comes back with a &#x60;&#x60;file_id&#x60;&#x60;. &#x60;&#x60;container: \&quot;auto\&quot;&#x60;&#x60; holds the sandbox after the run and names it in &#x60;&#x60;Otari-Container-Id&#x60;&#x60;; sending that id back runs in the same sandbox, with its files and interpreter state. A priced run answers with its settled cost in &#x60;&#x60;Otari-Cost-USD&#x60;&#x60; and the rate\&#39;s source in &#x60;&#x60;Otari-Pricing-Source&#x60;&#x60;.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend bind to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60; field   naming a different user is rejected with 403 (or ignored, when the key\&#39;s   own &#x60;&#x60;reject_user_mismatch&#x60;&#x60; is false, or the deployment-wide setting is   disabled and the key does not override it); it is never billed to that   user. - Service key: a &#x60;&#x60;user&#x60;&#x60; field names one of the key owner\&#39;s end users,   created on first use on the budget &#x60;&#x60;Otari-End-User-Budget&#x60;&#x60; names (or   the key\&#39;s default), and is billed and rate limited as that end user.

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
| **200** | Successful Response |  * Otari-Cost-USD - What the call cost, as a six-decimal USD string; absent when it was not priced <br>  * Otari-Pricing-Source - What priced it: organization, deployment or defaults (a rate), or reported (the provider\&#39;s own charge); absent when it was not priced <br>  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## codeExecutionListCodeExecutionEnvironments

> CodeExecutionEnvironmentList codeExecutionListCodeExecutionEnvironments(skip, limit)

List Code Execution Environments

List the sandbox environments the caller\&#39;s workspace may run code in, with their prices.  The code execution counterpart of &#x60;&#x60;GET /api/v1/models&#x60;&#x60;: each environment\&#39;s &#x60;&#x60;name&#x60;&#x60;, which &#x60;&#x60;POST /api/v1/code/execute&#x60;&#x60; takes as &#x60;&#x60;environment&#x60;&#x60;, a &#x60;&#x60;label&#x60;&#x60; and &#x60;&#x60;description&#x60;&#x60;, &#x60;&#x60;price_per_run&#x60;&#x60; for the caller\&#39;s organization, and whether it is the &#x60;&#x60;default&#x60;&#x60; a run that names none gets. A workspace whose code execution policy is off lists none, and one that pins an environment lists that one alone. A gateway with no sandbox lists none, as does one that names no image, whose runs go to the backend\&#39;s own default. A master key or a dashboard session belongs to no single workspace, so it gets the deployment\&#39;s whole list at the deployment\&#39;s prices. &#x60;&#x60;skip&#x60;&#x60; and &#x60;&#x60;limit&#x60;&#x60; page the list in the operator\&#39;s order.

### Example

```ts
import {
  Configuration,
  CodeExecutionApi,
} from '';
import type { CodeExecutionListCodeExecutionEnvironmentsRequest } from '';

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
    // number | Number of environments to skip (optional)
    skip: 56,
    // number | Maximum number of environments to return (optional)
    limit: 56,
  } satisfies CodeExecutionListCodeExecutionEnvironmentsRequest;

  try {
    const data = await api.codeExecutionListCodeExecutionEnvironments(body);
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
| **skip** | `number` | Number of environments to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of environments to return | [Optional] [Defaults to `100`] |

### Return type

[**CodeExecutionEnvironmentList**](CodeExecutionEnvironmentList.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

