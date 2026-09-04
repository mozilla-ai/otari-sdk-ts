# OrganizationBudgetsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganizationBudgetV1OrganizationsMeBudgetsPost**](OrganizationBudgetsApi.md#createorganizationbudgetv1organizationsmebudgetspost) | **POST** /v1/organizations/me/budgets | Create Organization Budget |
| [**createOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPost**](OrganizationBudgetsApi.md#createorganizationspendceilingv1organizationsmespendceilingspost) | **POST** /v1/organizations/me/spend-ceilings | Create Organization Spend Ceiling |
| [**deleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDelete**](OrganizationBudgetsApi.md#deleteorganizationbudgetv1organizationsmebudgetsbudgetiddelete) | **DELETE** /v1/organizations/me/budgets/{budget_id} | Delete Organization Budget |
| [**deleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDelete**](OrganizationBudgetsApi.md#deleteorganizationspendceilingv1organizationsmespendceilingsceilingiddelete) | **DELETE** /v1/organizations/me/spend-ceilings/{ceiling_id} | Delete Organization Spend Ceiling |
| [**listOrganizationBudgetsV1OrganizationsMeBudgetsGet**](OrganizationBudgetsApi.md#listorganizationbudgetsv1organizationsmebudgetsget) | **GET** /v1/organizations/me/budgets | List Organization Budgets |
| [**listOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGet**](OrganizationBudgetsApi.md#listorganizationspendceilingsv1organizationsmespendceilingsget) | **GET** /v1/organizations/me/spend-ceilings | List Organization Spend Ceilings |
| [**updateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatch**](OrganizationBudgetsApi.md#updateorganizationbudgetv1organizationsmebudgetsbudgetidpatch) | **PATCH** /v1/organizations/me/budgets/{budget_id} | Update Organization Budget |
| [**updateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatch**](OrganizationBudgetsApi.md#updateorganizationspendceilingv1organizationsmespendceilingsceilingidpatch) | **PATCH** /v1/organizations/me/spend-ceilings/{ceiling_id} | Update Organization Spend Ceiling |



## createOrganizationBudgetV1OrganizationsMeBudgetsPost

> OrganizationBudgetPublic createOrganizationBudgetV1OrganizationsMeBudgetsPost(organizationBudgetCreate)

Create Organization Budget

Define a budget owned by this organization. Owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { CreateOrganizationBudgetV1OrganizationsMeBudgetsPostRequest } from '';

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
  } satisfies CreateOrganizationBudgetV1OrganizationsMeBudgetsPostRequest;

  try {
    const data = await api.createOrganizationBudgetV1OrganizationsMeBudgetsPost(body);
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


## createOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPost

> OrganizationScopedBudgetPublic createOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPost(organizationScopedBudgetCreate)

Create Organization Spend Ceiling

Cap one identity in this organization at one of its budgets.  Answers 404 when the scope names nothing in this organization, rather than creating a ceiling that can never bind, and 404 when the budget is not this organization\&#39;s.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { CreateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPostRequest } from '';

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
  } satisfies CreateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPostRequest;

  try {
    const data = await api.createOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsPost(body);
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


## deleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDelete

> Message deleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDelete(budgetId)

Delete Organization Budget

Delete a budget, refused with 409 while a ceiling or workspace default names it.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { DeleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDeleteRequest } from '';

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
  } satisfies DeleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDeleteRequest;

  try {
    const data = await api.deleteOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdDelete(body);
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


## deleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDelete

> Message deleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDelete(ceilingId)

Delete Organization Spend Ceiling

Remove a ceiling inside this organization.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { DeleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDeleteRequest } from '';

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
  } satisfies DeleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDeleteRequest;

  try {
    const data = await api.deleteOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdDelete(body);
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


## listOrganizationBudgetsV1OrganizationsMeBudgetsGet

> OrganizationBudgetsPublic listOrganizationBudgetsV1OrganizationsMeBudgetsGet(skip, limit)

List Organization Budgets

List the budgets this organization has defined. Owners and admins only.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { ListOrganizationBudgetsV1OrganizationsMeBudgetsGetRequest } from '';

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
  } satisfies ListOrganizationBudgetsV1OrganizationsMeBudgetsGetRequest;

  try {
    const data = await api.listOrganizationBudgetsV1OrganizationsMeBudgetsGet(body);
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


## listOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGet

> OrganizationScopedBudgetsPublic listOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGet(skip, limit)

List Organization Spend Ceilings

List the ceilings capping identities inside this organization. Owners and admins only.  A ceiling whose budget this organization does not own is listed with &#x60;&#x60;manageable&#x60;&#x60; false rather than omitted: it is enforcing against this organization\&#39;s spend, so leaving it out would let the page read as uncapped.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { ListOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGetRequest } from '';

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
  } satisfies ListOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGetRequest;

  try {
    const data = await api.listOrganizationSpendCeilingsV1OrganizationsMeSpendCeilingsGet(body);
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


## updateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatch

> OrganizationBudgetPublic updateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatch(budgetId, organizationBudgetUpdate)

Update Organization Budget

Change a budget\&#39;s label, figure or period.  Every ceiling naming it is held to the new figure from here on, which is the point of naming a budget rather than typing an amount per place it applies.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { UpdateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatchRequest } from '';

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
  } satisfies UpdateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatchRequest;

  try {
    const data = await api.updateOrganizationBudgetV1OrganizationsMeBudgetsBudgetIdPatch(body);
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


## updateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatch

> OrganizationScopedBudgetPublic updateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatch(ceilingId, organizationScopedBudgetUpdate)

Update Organization Spend Ceiling

Relabel a ceiling, or point it at a different budget of this organization\&#39;s.  The scope and the provider narrowing are not editable: changing either would move the ceiling to a different identity while carrying its spend, which is a delete and a create.

### Example

```ts
import {
  Configuration,
  OrganizationBudgetsApi,
} from '';
import type { UpdateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatchRequest } from '';

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
  } satisfies UpdateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatchRequest;

  try {
    const data = await api.updateOrganizationSpendCeilingV1OrganizationsMeSpendCeilingsCeilingIdPatch(body);
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

