# BudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**budgetsCreateBudget**](BudgetsApi.md#budgetscreatebudget) | **POST** /api/v1/budgets | Create Budget |
| [**budgetsDeleteBudget**](BudgetsApi.md#budgetsdeletebudget) | **DELETE** /api/v1/budgets/{budget_id} | Delete Budget |
| [**budgetsGetBudget**](BudgetsApi.md#budgetsgetbudget) | **GET** /api/v1/budgets/{budget_id} | Get Budget |
| [**budgetsListBudgetResetLogs**](BudgetsApi.md#budgetslistbudgetresetlogs) | **GET** /api/v1/budgets/{budget_id}/reset-logs | List Budget Reset Logs |
| [**budgetsListBudgets**](BudgetsApi.md#budgetslistbudgets) | **GET** /api/v1/budgets | List Budgets |
| [**budgetsPutBudget**](BudgetsApi.md#budgetsputbudget) | **PUT** /api/v1/budgets/{budget_id} | Put Budget |
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

Delete a budget the deployment owns.  Refused with 409 for an organization\&#39;s budget: the operator may edit one (&#x60;&#x60;PATCH&#x60;&#x60; retimes its ceilings) but deleting it would take a budget the tenant defined out from under them.  Refused with 409, too, while anything still names this budget: a workspace handing it to its members, or a scoped ceiling enforcing it. The refusal says which, and where.  Gateway users assigned to the budget are left uncapped, as the dashboard\&#39;s confirmation says, its reset history is deleted with it, and it is taken off every service key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60;. A budget that is a key\&#39;s &#x60;&#x60;end_user_budget_id&#x60;&#x60; is refused (409) until that key\&#39;s default changes.

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


## budgetsPutBudget

> BudgetResponse budgetsPutBudget(budgetId, createBudgetRequest)

Put Budget

Create a budget under an id you choose, or replace the one with that id.  Every field takes the value in the body, and a field left out is cleared, so the same request always leaves the same budget. Answers 201 when it created the budget. Users on a budget it replaces stay on it, and its ceilings follow a change of reset period. A budget an organization owns is not replaced.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '';
import type { BudgetsPutBudgetRequest } from '';

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
    // string | An id you choose: up to 128 letters, digits, \'.\', \'_\' and \'-\', starting with a letter or digit
    budgetId: budgetId_example,
    // CreateBudgetRequest
    createBudgetRequest: ...,
  } satisfies BudgetsPutBudgetRequest;

  try {
    const data = await api.budgetsPutBudget(body);
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
| **budgetId** | `string` | An id you choose: up to 128 letters, digits, \&#39;.\&#39;, \&#39;_\&#39; and \&#39;-\&#39;, starting with a letter or digit | [Defaults to `undefined`] |
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
| **201** | The budget was created |  -  |
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

