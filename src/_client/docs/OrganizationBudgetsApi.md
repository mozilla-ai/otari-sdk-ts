# OrganizationBudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationBudgetsCreateOrganizationBudget**](OrganizationBudgetsApi.md#organizationbudgetscreateorganizationbudget) | **POST** /api/v1/organizations/me/budgets | Create Organization Budget |
| [**organizationBudgetsCreateOrganizationSpendCeiling**](OrganizationBudgetsApi.md#organizationbudgetscreateorganizationspendceiling) | **POST** /api/v1/organizations/me/spend-ceilings | Create Organization Spend Ceiling |
| [**organizationBudgetsDeleteOrganizationBudget**](OrganizationBudgetsApi.md#organizationbudgetsdeleteorganizationbudget) | **DELETE** /api/v1/organizations/me/budgets/{budget_id} | Delete Organization Budget |
| [**organizationBudgetsDeleteOrganizationSpendCeiling**](OrganizationBudgetsApi.md#organizationbudgetsdeleteorganizationspendceiling) | **DELETE** /api/v1/organizations/me/spend-ceilings/{ceiling_id} | Delete Organization Spend Ceiling |
| [**organizationBudgetsListOrganizationBudgets**](OrganizationBudgetsApi.md#organizationbudgetslistorganizationbudgets) | **GET** /api/v1/organizations/me/budgets | List Organization Budgets |
| [**organizationBudgetsListOrganizationSpendCeilings**](OrganizationBudgetsApi.md#organizationbudgetslistorganizationspendceilings) | **GET** /api/v1/organizations/me/spend-ceilings | List Organization Spend Ceilings |
| [**organizationBudgetsUpdateOrganizationBudget**](OrganizationBudgetsApi.md#organizationbudgetsupdateorganizationbudget) | **PATCH** /api/v1/organizations/me/budgets/{budget_id} | Update Organization Budget |
| [**organizationBudgetsUpdateOrganizationSpendCeiling**](OrganizationBudgetsApi.md#organizationbudgetsupdateorganizationspendceiling) | **PATCH** /api/v1/organizations/me/spend-ceilings/{ceiling_id} | Update Organization Spend Ceiling |



## organizationBudgetsCreateOrganizationBudget

> OrganizationBudgetPublic organizationBudgetsCreateOrganizationBudget(organizationBudgetCreate)

Create Organization Budget

Define a budget owned by this organization. Owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsCreateOrganizationBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // OrganizationBudgetCreate
    organizationBudgetCreate: ...,
  } satisfies OrganizationBudgetsCreateOrganizationBudgetRequest;

  try {
    const data = await api.organizationBudgetsCreateOrganizationBudget(body);
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
| **organizationBudgetCreate** | [OrganizationBudgetCreate](OrganizationBudgetCreate.md) |  | |

### Return type

[**OrganizationBudgetPublic**](OrganizationBudgetPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationBudgetsCreateOrganizationSpendCeiling

> OrganizationScopedBudgetPublic organizationBudgetsCreateOrganizationSpendCeiling(organizationScopedBudgetCreate)

Create Organization Spend Ceiling

Cap one identity in this organization at one of its budgets.  Answers 404 when the scope names nothing in this organization, rather than creating a ceiling that can never bind, and 404 when the budget is not this organization\&#39;s.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsCreateOrganizationSpendCeilingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // OrganizationScopedBudgetCreate
    organizationScopedBudgetCreate: ...,
  } satisfies OrganizationBudgetsCreateOrganizationSpendCeilingRequest;

  try {
    const data = await api.organizationBudgetsCreateOrganizationSpendCeiling(body);
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
| **organizationScopedBudgetCreate** | [OrganizationScopedBudgetCreate](OrganizationScopedBudgetCreate.md) |  | |

### Return type

[**OrganizationScopedBudgetPublic**](OrganizationScopedBudgetPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationBudgetsDeleteOrganizationBudget

> Message organizationBudgetsDeleteOrganizationBudget(budgetId)

Delete Organization Budget

Delete a budget, refused with 409 while a ceiling or workspace default names it.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsDeleteOrganizationBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
  } satisfies OrganizationBudgetsDeleteOrganizationBudgetRequest;

  try {
    const data = await api.organizationBudgetsDeleteOrganizationBudget(body);
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

[**Message**](Message.md)

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


## organizationBudgetsDeleteOrganizationSpendCeiling

> Message organizationBudgetsDeleteOrganizationSpendCeiling(ceilingId)

Delete Organization Spend Ceiling

Remove a ceiling inside this organization.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsDeleteOrganizationSpendCeilingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // string
    ceilingId: ceilingId_example,
  } satisfies OrganizationBudgetsDeleteOrganizationSpendCeilingRequest;

  try {
    const data = await api.organizationBudgetsDeleteOrganizationSpendCeiling(body);
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
| **ceilingId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

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


## organizationBudgetsListOrganizationBudgets

> OrganizationBudgetsPublic organizationBudgetsListOrganizationBudgets(skip, limit)

List Organization Budgets

List the budgets this organization has defined. Owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsListOrganizationBudgetsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies OrganizationBudgetsListOrganizationBudgetsRequest;

  try {
    const data = await api.organizationBudgetsListOrganizationBudgets(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**OrganizationBudgetsPublic**](OrganizationBudgetsPublic.md)

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


## organizationBudgetsListOrganizationSpendCeilings

> OrganizationScopedBudgetsPublic organizationBudgetsListOrganizationSpendCeilings(skip, limit)

List Organization Spend Ceilings

List the ceilings capping identities inside this organization. Owners and admins only.  A ceiling whose budget this organization does not own is listed with &#x60;&#x60;manageable&#x60;&#x60; false rather than omitted: it is enforcing against this organization\&#39;s spend, so leaving it out would let the page read as uncapped.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsListOrganizationSpendCeilingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies OrganizationBudgetsListOrganizationSpendCeilingsRequest;

  try {
    const data = await api.organizationBudgetsListOrganizationSpendCeilings(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**OrganizationScopedBudgetsPublic**](OrganizationScopedBudgetsPublic.md)

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


## organizationBudgetsUpdateOrganizationBudget

> OrganizationBudgetPublic organizationBudgetsUpdateOrganizationBudget(budgetId, organizationBudgetUpdate)

Update Organization Budget

Change a budget\&#39;s label, figure or period.  Every ceiling naming it is held to the new figure from here on, which is the point of naming a budget rather than typing an amount per place it applies.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsUpdateOrganizationBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // string
    budgetId: budgetId_example,
    // OrganizationBudgetUpdate
    organizationBudgetUpdate: ...,
  } satisfies OrganizationBudgetsUpdateOrganizationBudgetRequest;

  try {
    const data = await api.organizationBudgetsUpdateOrganizationBudget(body);
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
| **organizationBudgetUpdate** | [OrganizationBudgetUpdate](OrganizationBudgetUpdate.md) |  | |

### Return type

[**OrganizationBudgetPublic**](OrganizationBudgetPublic.md)

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


## organizationBudgetsUpdateOrganizationSpendCeiling

> OrganizationScopedBudgetPublic organizationBudgetsUpdateOrganizationSpendCeiling(ceilingId, organizationScopedBudgetUpdate)

Update Organization Spend Ceiling

Relabel a ceiling, or point it at a different budget of this organization\&#39;s.  The scope and the provider narrowing are not editable: changing either would move the ceiling to a different identity while carrying its spend, which is a delete and a create.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { OrganizationBudgetsUpdateOrganizationSpendCeilingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationBudgetsApi(config);

  const body = {
    // string
    ceilingId: ceilingId_example,
    // OrganizationScopedBudgetUpdate
    organizationScopedBudgetUpdate: ...,
  } satisfies OrganizationBudgetsUpdateOrganizationSpendCeilingRequest;

  try {
    const data = await api.organizationBudgetsUpdateOrganizationSpendCeiling(body);
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
| **ceilingId** | `string` |  | [Defaults to `undefined`] |
| **organizationScopedBudgetUpdate** | [OrganizationScopedBudgetUpdate](OrganizationScopedBudgetUpdate.md) |  | |

### Return type

[**OrganizationScopedBudgetPublic**](OrganizationScopedBudgetPublic.md)

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

