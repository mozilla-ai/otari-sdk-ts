# ScopedBudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**scopedBudgetsCreateScopedBudget**](ScopedBudgetsApi.md#scopedbudgetscreatescopedbudget) | **POST** /api/v1/scoped-budgets | Create Scoped Budget |
| [**scopedBudgetsDeleteScopedBudget**](ScopedBudgetsApi.md#scopedbudgetsdeletescopedbudget) | **DELETE** /api/v1/scoped-budgets/{budget_id} | Delete Scoped Budget |
| [**scopedBudgetsGetScopedBudget**](ScopedBudgetsApi.md#scopedbudgetsgetscopedbudget) | **GET** /api/v1/scoped-budgets/{budget_id} | Get Scoped Budget |
| [**scopedBudgetsListScopedBudgets**](ScopedBudgetsApi.md#scopedbudgetslistscopedbudgets) | **GET** /api/v1/scoped-budgets | List Scoped Budgets |
| [**scopedBudgetsUpdateScopedBudget**](ScopedBudgetsApi.md#scopedbudgetsupdatescopedbudget) | **PATCH** /api/v1/scoped-budgets/{budget_id} | Update Scoped Budget |



## scopedBudgetsCreateScopedBudget

> ScopedBudgetResponse scopedBudgetsCreateScopedBudget(createScopedBudgetRequest)

Create Scoped Budget

Create a scoped budget.  Answers 404 when the scope names nothing, rather than creating a ceiling that can never bind.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ScopedBudgetsCreateScopedBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ScopedBudgetsApi(config);

  const body = {
    // CreateScopedBudgetRequest
    createScopedBudgetRequest: ...,
  } satisfies ScopedBudgetsCreateScopedBudgetRequest;

  try {
    const data = await api.scopedBudgetsCreateScopedBudget(body);
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
| **createScopedBudgetRequest** | [CreateScopedBudgetRequest](CreateScopedBudgetRequest.md) |  | |

### Return type

[**ScopedBudgetResponse**](ScopedBudgetResponse.md)

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


## scopedBudgetsDeleteScopedBudget

> scopedBudgetsDeleteScopedBudget(budgetId)

Delete Scoped Budget

Delete a scoped budget.  A request holding a reservation against it settles into nothing afterwards, which is the right outcome: the ceiling no longer exists to be credited.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ScopedBudgetsDeleteScopedBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ScopedBudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
  } satisfies ScopedBudgetsDeleteScopedBudgetRequest;

  try {
    const data = await api.scopedBudgetsDeleteScopedBudget(body);
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


## scopedBudgetsGetScopedBudget

> ScopedBudgetResponse scopedBudgetsGetScopedBudget(budgetId)

Get Scoped Budget

Get one scoped budget.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ScopedBudgetsGetScopedBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ScopedBudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
  } satisfies ScopedBudgetsGetScopedBudgetRequest;

  try {
    const data = await api.scopedBudgetsGetScopedBudget(body);
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

[**ScopedBudgetResponse**](ScopedBudgetResponse.md)

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


## scopedBudgetsListScopedBudgets

> Array&lt;ScopedBudgetResponse&gt; scopedBudgetsListScopedBudgets(scopeType, scopeId, skip, limit)

List Scoped Budgets

List scoped budgets, optionally filtered to one scope.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ScopedBudgetsListScopedBudgetsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ScopedBudgetsApi(config);

  const body = {
    // 'organization' | 'workspace' | 'workspace_member' | 'org_member' | 'api_token' (optional)
    scopeType: scopeType_example,
    // string (optional)
    scopeId: scopeId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ScopedBudgetsListScopedBudgetsRequest;

  try {
    const data = await api.scopedBudgetsListScopedBudgets(body);
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
| **scopeType** | `organization`, `workspace`, `workspace_member`, `org_member`, `api_token` |  | [Optional] [Defaults to `undefined`] [Enum: organization, workspace, workspace_member, org_member, api_token] |
| **scopeId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;ScopedBudgetResponse&gt;**](ScopedBudgetResponse.md)

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


## scopedBudgetsUpdateScopedBudget

> ScopedBudgetResponse scopedBudgetsUpdateScopedBudget(budgetId, updateScopedBudgetRequest)

Update Scoped Budget

Relabel a ceiling, or point it at a different budget.  The scope and the provider narrowing are not editable: changing either would move the ceiling to a different identity while carrying its spend, which is a delete and a create, not an update.  There is no limit or period to set here any more. Both are properties of the budget, so changing what a ceiling allows is either editing that budget, which moves every ceiling naming it, or naming a different one.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ScopedBudgetsUpdateScopedBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ScopedBudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
    // UpdateScopedBudgetRequest
    updateScopedBudgetRequest: ...,
  } satisfies ScopedBudgetsUpdateScopedBudgetRequest;

  try {
    const data = await api.scopedBudgetsUpdateScopedBudget(body);
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
| **updateScopedBudgetRequest** | [UpdateScopedBudgetRequest](UpdateScopedBudgetRequest.md) |  | |

### Return type

[**ScopedBudgetResponse**](ScopedBudgetResponse.md)

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

