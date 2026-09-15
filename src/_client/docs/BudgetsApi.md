# BudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**budgetsCreateBudget**](BudgetsApi.md#budgetscreatebudget) | **POST** /api/v1/budgets | Create Budget |
| [**budgetsDeleteBudget**](BudgetsApi.md#budgetsdeletebudget) | **DELETE** /api/v1/budgets/{budget_id} | Delete Budget |
| [**budgetsGetBudget**](BudgetsApi.md#budgetsgetbudget) | **GET** /api/v1/budgets/{budget_id} | Get Budget |
| [**budgetsListBudgetResetLogs**](BudgetsApi.md#budgetslistbudgetresetlogs) | **GET** /api/v1/budgets/{budget_id}/reset-logs | List Budget Reset Logs |
| [**budgetsListBudgets**](BudgetsApi.md#budgetslistbudgets) | **GET** /api/v1/budgets | List Budgets |
| [**budgetsUpdateBudget**](BudgetsApi.md#budgetsupdatebudget) | **PATCH** /api/v1/budgets/{budget_id} | Update Budget |



## budgetsCreateBudget

> BudgetResponse budgetsCreateBudget(createBudgetRequest)

Create Budget

Create a new budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsCreateBudgetRequest } from '';

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
  } satisfies BudgetsCreateBudgetRequest;

  try {
    const data = await api.budgetsCreateBudget(body);
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


## budgetsDeleteBudget

> budgetsDeleteBudget(budgetId)

Delete Budget

Delete a budget.  Refused with 409 while anything still names this budget: a workspace handing it to its members, or a scoped ceiling enforcing it. Both foreign keys are &#x60;&#x60;RESTRICT&#x60;&#x60;, so the database would refuse either anyway, but as an &#x60;&#x60;IntegrityError&#x60;&#x60; reported as \&quot;Database error\&quot; with nothing naming what to go and change. Checked here so the refusal can say which, and where.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsDeleteBudgetRequest } from '';

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
  } satisfies BudgetsDeleteBudgetRequest;

  try {
    const data = await api.budgetsDeleteBudget(body);
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


## budgetsGetBudget

> BudgetResponse budgetsGetBudget(budgetId)

Get Budget

Get details of a specific budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsGetBudgetRequest } from '';

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
  } satisfies BudgetsGetBudgetRequest;

  try {
    const data = await api.budgetsGetBudget(body);
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


## budgetsListBudgetResetLogs

> Array&lt;BudgetResetLogResponse&gt; budgetsListBudgetResetLogs(budgetId, skip, limit)

List Budget Reset Logs

List per-user reset events for a budget, newest first.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsListBudgetResetLogsRequest } from '';

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
  } satisfies BudgetsListBudgetResetLogsRequest;

  try {
    const data = await api.budgetsListBudgetResetLogs(body);
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


## budgetsListBudgets

> Array&lt;BudgetResponse&gt; budgetsListBudgets(skip, limit)

List Budgets

List all budgets with pagination.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsListBudgetsRequest } from '';

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
  } satisfies BudgetsListBudgetsRequest;

  try {
    const data = await api.budgetsListBudgets(body);
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


## budgetsUpdateBudget

> BudgetResponse budgetsUpdateBudget(budgetId, updateBudgetRequest)

Update Budget

Update a budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsUpdateBudgetRequest } from '';

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
  } satisfies BudgetsUpdateBudgetRequest;

  try {
    const data = await api.budgetsUpdateBudget(body);
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

