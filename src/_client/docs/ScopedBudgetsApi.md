# ScopedBudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createScopedBudgetV1ScopedBudgetsPost**](ScopedBudgetsApi.md#createscopedbudgetv1scopedbudgetspost) | **POST** /v1/scoped-budgets | Create Scoped Budget |
| [**deleteScopedBudgetV1ScopedBudgetsBudgetIdDelete**](ScopedBudgetsApi.md#deletescopedbudgetv1scopedbudgetsbudgetiddelete) | **DELETE** /v1/scoped-budgets/{budget_id} | Delete Scoped Budget |
| [**getScopedBudgetV1ScopedBudgetsBudgetIdGet**](ScopedBudgetsApi.md#getscopedbudgetv1scopedbudgetsbudgetidget) | **GET** /v1/scoped-budgets/{budget_id} | Get Scoped Budget |
| [**listScopedBudgetsV1ScopedBudgetsGet**](ScopedBudgetsApi.md#listscopedbudgetsv1scopedbudgetsget) | **GET** /v1/scoped-budgets | List Scoped Budgets |
| [**updateScopedBudgetV1ScopedBudgetsBudgetIdPatch**](ScopedBudgetsApi.md#updatescopedbudgetv1scopedbudgetsbudgetidpatch) | **PATCH** /v1/scoped-budgets/{budget_id} | Update Scoped Budget |



## createScopedBudgetV1ScopedBudgetsPost

> ScopedBudgetResponse createScopedBudgetV1ScopedBudgetsPost(createScopedBudgetRequest)

Create Scoped Budget

Create a scoped budget.  Answers 404 when the scope names nothing, rather than creating a ceiling that can never bind.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { CreateScopedBudgetV1ScopedBudgetsPostRequest } from '';

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
  } satisfies CreateScopedBudgetV1ScopedBudgetsPostRequest;

  try {
    const data = await api.createScopedBudgetV1ScopedBudgetsPost(body);
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


## deleteScopedBudgetV1ScopedBudgetsBudgetIdDelete

> deleteScopedBudgetV1ScopedBudgetsBudgetIdDelete(budgetId)

Delete Scoped Budget

Delete a scoped budget.  A request holding a reservation against it settles into nothing afterwards, which is the right outcome: the ceiling no longer exists to be credited.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { DeleteScopedBudgetV1ScopedBudgetsBudgetIdDeleteRequest } from '';

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
  } satisfies DeleteScopedBudgetV1ScopedBudgetsBudgetIdDeleteRequest;

  try {
    const data = await api.deleteScopedBudgetV1ScopedBudgetsBudgetIdDelete(body);
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


## getScopedBudgetV1ScopedBudgetsBudgetIdGet

> ScopedBudgetResponse getScopedBudgetV1ScopedBudgetsBudgetIdGet(budgetId)

Get Scoped Budget

Get one scoped budget.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { GetScopedBudgetV1ScopedBudgetsBudgetIdGetRequest } from '';

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
  } satisfies GetScopedBudgetV1ScopedBudgetsBudgetIdGetRequest;

  try {
    const data = await api.getScopedBudgetV1ScopedBudgetsBudgetIdGet(body);
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


## listScopedBudgetsV1ScopedBudgetsGet

> Array&lt;ScopedBudgetResponse&gt; listScopedBudgetsV1ScopedBudgetsGet(scopeType, scopeId, skip, limit)

List Scoped Budgets

List scoped budgets, optionally filtered to one scope.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { ListScopedBudgetsV1ScopedBudgetsGetRequest } from '';

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
  } satisfies ListScopedBudgetsV1ScopedBudgetsGetRequest;

  try {
    const data = await api.listScopedBudgetsV1ScopedBudgetsGet(body);
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


## updateScopedBudgetV1ScopedBudgetsBudgetIdPatch

> ScopedBudgetResponse updateScopedBudgetV1ScopedBudgetsBudgetIdPatch(budgetId, updateScopedBudgetRequest)

Update Scoped Budget

Relabel a ceiling, or point it at a different budget.  The scope and the provider narrowing are not editable: changing either would move the ceiling to a different identity while carrying its spend, which is a delete and a create, not an update.  There is no limit or period to set here any more. Both are properties of the budget, so changing what a ceiling allows is either editing that budget, which moves every ceiling naming it, or naming a different one.

### Example

```ts
import {
  Configuration,
  ScopedBudgetsApi,
} from '';
import type { UpdateScopedBudgetV1ScopedBudgetsBudgetIdPatchRequest } from '';

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
  } satisfies UpdateScopedBudgetV1ScopedBudgetsBudgetIdPatchRequest;

  try {
    const data = await api.updateScopedBudgetV1ScopedBudgetsBudgetIdPatch(body);
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

