# BudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBudgetV1BudgetsPost**](BudgetsApi.md#createbudgetv1budgetspost) | **POST** /v1/budgets | Create Budget |
| [**deleteBudgetV1BudgetsBudgetIdDelete**](BudgetsApi.md#deletebudgetv1budgetsbudgetiddelete) | **DELETE** /v1/budgets/{budget_id} | Delete Budget |
| [**getBudgetV1BudgetsBudgetIdGet**](BudgetsApi.md#getbudgetv1budgetsbudgetidget) | **GET** /v1/budgets/{budget_id} | Get Budget |
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
} from 'otari-control-plane';
import type { CreateBudgetV1BudgetsPostRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new BudgetsApi();

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


## deleteBudgetV1BudgetsBudgetIdDelete

> deleteBudgetV1BudgetsBudgetIdDelete(budgetId)

Delete Budget

Delete a budget.

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from 'otari-control-plane';
import type { DeleteBudgetV1BudgetsBudgetIdDeleteRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new BudgetsApi();

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

No authorization required

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
} from 'otari-control-plane';
import type { GetBudgetV1BudgetsBudgetIdGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new BudgetsApi();

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

No authorization required

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
} from 'otari-control-plane';
import type { ListBudgetsV1BudgetsGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new BudgetsApi();

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

No authorization required

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
} from 'otari-control-plane';
import type { UpdateBudgetV1BudgetsBudgetIdPatchRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new BudgetsApi();

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

