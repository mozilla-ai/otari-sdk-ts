# BudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBudgetV1BudgetsPost**](BudgetsApi.md#createbudgetv1budgetspost) | **POST** /v1/budgets | Create Budget |
| [**deleteBudgetV1BudgetsBudgetIdDelete**](BudgetsApi.md#deletebudgetv1budgetsbudgetiddelete) | **DELETE** /v1/budgets/{budget_id} | Delete Budget |
| [**getBudgetV1BudgetsBudgetIdGet**](BudgetsApi.md#getbudgetv1budgetsbudgetidget) | **GET** /v1/budgets/{budget_id} | Get Budget |
| [**listBudgetResetLogsV1BudgetsBudgetIdResetLogsGet**](BudgetsApi.md#listbudgetresetlogsv1budgetsbudgetidresetlogsget) | **GET** /v1/budgets/{budget_id}/reset-logs | List Budget Reset Logs |
| [**listBudgetsV1BudgetsGet**](BudgetsApi.md#listbudgetsv1budgetsget) | **GET** /v1/budgets | List Budgets |
| [**updateBudgetV1BudgetsBudgetIdPatch**](BudgetsApi.md#updatebudgetv1budgetsbudgetidpatch) | **PATCH** /v1/budgets/{budget_id} | Update Budget |



## createBudgetV1BudgetsPost

> BudgetResponse createBudgetV1BudgetsPost(createBudgetRequest)

Create Budget

Create a new budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { CreateBudgetV1BudgetsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // CreateBudgetRequest
    createBudgetRequest: ...,
  } satisfies CreateBudgetV1BudgetsPostRequest;

  try {
    const data = await api.createBudgetV1BudgetsPost(body);
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
| **createBudgetRequest** | [CreateBudgetRequest](CreateBudgetRequest.md) |  | |

### Return type

[**BudgetResponse**](BudgetResponse.md)

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


## deleteBudgetV1BudgetsBudgetIdDelete

> deleteBudgetV1BudgetsBudgetIdDelete(budgetId)

Delete Budget

Delete a budget.  Refused with 409 while anything still names this budget: a workspace handing it to its members, or a scoped ceiling enforcing it. Both foreign keys are &#x60;&#x60;RESTRICT&#x60;&#x60;, so the database would refuse either anyway, but as an &#x60;&#x60;IntegrityError&#x60;&#x60; reported as \&quot;Database error\&quot; with nothing naming what to go and change. Checked here so the refusal can say which, and where.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { DeleteBudgetV1BudgetsBudgetIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
  } satisfies DeleteBudgetV1BudgetsBudgetIdDeleteRequest;

  try {
    const data = await api.deleteBudgetV1BudgetsBudgetIdDelete(body);
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
| **budgetId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBudgetV1BudgetsBudgetIdGet

> BudgetResponse getBudgetV1BudgetsBudgetIdGet(budgetId)

Get Budget

Get details of a specific budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { GetBudgetV1BudgetsBudgetIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
  } satisfies GetBudgetV1BudgetsBudgetIdGetRequest;

  try {
    const data = await api.getBudgetV1BudgetsBudgetIdGet(body);
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
| **budgetId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**BudgetResponse**](BudgetResponse.md)

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


## listBudgetResetLogsV1BudgetsBudgetIdResetLogsGet

> Array&lt;BudgetResetLogResponse&gt; listBudgetResetLogsV1BudgetsBudgetIdResetLogsGet(budgetId, skip, limit)

List Budget Reset Logs

List per-user reset events for a budget, newest first.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { ListBudgetResetLogsV1BudgetsBudgetIdResetLogsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListBudgetResetLogsV1BudgetsBudgetIdResetLogsGetRequest;

  try {
    const data = await api.listBudgetResetLogsV1BudgetsBudgetIdResetLogsGet(body);
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
| **budgetId** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;BudgetResetLogResponse&gt;**](BudgetResetLogResponse.md)

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


## listBudgetsV1BudgetsGet

> Array&lt;BudgetResponse&gt; listBudgetsV1BudgetsGet(skip, limit)

List Budgets

List all budgets with pagination.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { ListBudgetsV1BudgetsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListBudgetsV1BudgetsGetRequest;

  try {
    const data = await api.listBudgetsV1BudgetsGet(body);
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
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;BudgetResponse&gt;**](BudgetResponse.md)

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


## updateBudgetV1BudgetsBudgetIdPatch

> BudgetResponse updateBudgetV1BudgetsBudgetIdPatch(budgetId, updateBudgetRequest)

Update Budget

Update a budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { UpdateBudgetV1BudgetsBudgetIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
    // UpdateBudgetRequest
    updateBudgetRequest: ...,
  } satisfies UpdateBudgetV1BudgetsBudgetIdPatchRequest;

  try {
    const data = await api.updateBudgetV1BudgetsBudgetIdPatch(body);
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
| **budgetId** | `string` |  | [Defaults to `undefined`] |
| **updateBudgetRequest** | [UpdateBudgetRequest](UpdateBudgetRequest.md) |  | |

### Return type

[**BudgetResponse**](BudgetResponse.md)

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

