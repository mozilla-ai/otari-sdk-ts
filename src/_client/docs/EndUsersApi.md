# EndUsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**endUsersGetEndUser**](EndUsersApi.md#endusersgetenduser) | **GET** /api/v1/end-users/{external_id} | Get End User |
| [**endUsersListEndUserBudgets**](EndUsersApi.md#enduserslistenduserbudgets) | **GET** /api/v1/end-user-budgets | List End User Budgets |
| [**endUsersListEndUsers**](EndUsersApi.md#enduserslistendusers) | **GET** /api/v1/end-users | List End Users |
| [**endUsersPutEndUser**](EndUsersApi.md#endusersputenduser) | **PUT** /api/v1/end-users/{external_id} | Put End User |
| [**endUsersPutEndUserByQuery**](EndUsersApi.md#endusersputenduserbyquery) | **PUT** /api/v1/end-users | Put End User By Query |
| [**endUsersUpdateEndUser**](EndUsersApi.md#endusersupdateenduser) | **PATCH** /api/v1/end-users/{external_id} | Update End User |
| [**endUsersUpdateEndUserByQuery**](EndUsersApi.md#endusersupdateenduserbyquery) | **PATCH** /api/v1/end-users | Update End User By Query |



## endUsersGetEndUser

> EndUserPublic endUsersGetEndUser(externalId)

Get End User

Get an end user of the calling service key by the id the service names it by.  Requires a service key. An id no end user of the key\&#39;s user goes by answers 404. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;GET /end-users?external_id&#x3D;&#x60;&#x60; reads any end user.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersGetEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
  } satisfies EndUsersGetEndUserRequest;

  try {
    const data = await api.endUsersGetEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## endUsersListEndUserBudgets

> Array&lt;EndUserBudgetPublic&gt; endUsersListEndUserBudgets()

List End User Budgets

List the budgets the calling service key may put its end users on, with how many end users each holds.  Requires a service key. The counts cover the end users of the key\&#39;s user, blocked ones included and deleted ones not.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersListEndUserBudgetsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  try {
    const data = await api.endUsersListEndUserBudgets();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;EndUserBudgetPublic&gt;**](EndUserBudgetPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## endUsersListEndUsers

> Array&lt;EndUserPublic&gt; endUsersListEndUsers(skip, limit, budgetId, blocked, externalId, includeTotal)

List End Users

List the end users of the calling service key, oldest first.  Requires a service key. End users belong to the key\&#39;s user, so every service key of one user lists the same end users. A deleted end user is not listed. &#x60;&#x60;external_id&#x60;&#x60; reads one end user by any id, one containing \&#39;/\&#39; included, as a list of zero or one.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersListEndUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only end users on this budget. (optional)
    budgetId: budgetId_example,
    // boolean | Only end users that are, or are not, blocked. (optional)
    blocked: true,
    // string | Only the end user the service names with this `user` value: zero or one. (optional)
    externalId: externalId_example,
    // boolean | Also count every matching end user, in the Otari-Total-Count response header. (optional)
    includeTotal: true,
  } satisfies EndUsersListEndUsersRequest;

  try {
    const data = await api.endUsersListEndUsers(body);
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
| **budgetId** | `string` | Only end users on this budget. | [Optional] [Defaults to `undefined`] |
| **blocked** | `boolean` | Only end users that are, or are not, blocked. | [Optional] [Defaults to `undefined`] |
| **externalId** | `string` | Only the end user the service names with this &#x60;user&#x60; value: zero or one. | [Optional] [Defaults to `undefined`] |
| **includeTotal** | `boolean` | Also count every matching end user, in the Otari-Total-Count response header. | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;EndUserPublic&gt;**](EndUserPublic.md)

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


## endUsersPutEndUser

> EndUserPublic endUsersPutEndUser(externalId, endUserPut)

Put End User

Put an end user of the calling service key on a budget from the key\&#39;s list, creating it if needed.  Requires a service key. Answers 201 when the end user was created. An end user already on the budget keeps its current period, so repeating the call changes nothing. A budget that is not on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60; is refused with 403 and &#x60;&#x60;end_user_budget_not_allowed&#x60;&#x60;. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;PUT /end-users?external_id&#x3D;&#x60;&#x60; takes any id.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersPutEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserPut
    endUserPut: ...,
  } satisfies EndUsersPutEndUserRequest;

  try {
    const data = await api.endUsersPutEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserPut** | [EndUserPut](EndUserPut.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **201** | The end user was created |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## endUsersPutEndUserByQuery

> EndUserPublic endUsersPutEndUserByQuery(externalId, endUserPut)

Put End User By Query

Put the end user named by &#x60;&#x60;external_id&#x60;&#x60; on a budget from the key\&#39;s list, creating it if needed.  The same as &#x60;&#x60;PUT /end-users/{external_id}&#x60;&#x60;, for any id, one containing \&#39;/\&#39; included.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersPutEndUserByQueryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // string | The id the service names the end user by in a request\'s user field, any id, \'/\' included
    externalId: externalId_example,
    // EndUserPut
    endUserPut: ...,
  } satisfies EndUsersPutEndUserByQueryRequest;

  try {
    const data = await api.endUsersPutEndUserByQuery(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field, any id, \&#39;/\&#39; included | [Defaults to `undefined`] |
| **endUserPut** | [EndUserPut](EndUserPut.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **201** | The end user was created |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## endUsersUpdateEndUser

> EndUserPublic endUsersUpdateEndUser(externalId, endUserUpdate)

Update End User

Block, unblock or move an end user of the calling service key.  Requires a service key. A move restarts the end user\&#39;s period on the new budget but keeps what it has spent and used so far. The budget must be on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60;, or the move is refused with 403 and &#x60;&#x60;end_user_budget_not_allowed&#x60;&#x60;. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;PATCH /end-users?external_id&#x3D;&#x60;&#x60; takes any id.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersUpdateEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserUpdate
    endUserUpdate: ...,
  } satisfies EndUsersUpdateEndUserRequest;

  try {
    const data = await api.endUsersUpdateEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserUpdate** | [EndUserUpdate](EndUserUpdate.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## endUsersUpdateEndUserByQuery

> EndUserPublic endUsersUpdateEndUserByQuery(externalId, endUserUpdate)

Update End User By Query

Block, unblock or move the end user named by &#x60;&#x60;external_id&#x60;&#x60;.  The same as &#x60;&#x60;PATCH /end-users/{external_id}&#x60;&#x60;, for any id, one containing \&#39;/\&#39; included.

### Example

```ts
import {
  Configuration,
  EndUsersApi,
} from '';
import type { EndUsersUpdateEndUserByQueryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EndUsersApi(config);

  const body = {
    // string | The id the service names the end user by in a request\'s user field, any id, \'/\' included
    externalId: externalId_example,
    // EndUserUpdate
    endUserUpdate: ...,
  } satisfies EndUsersUpdateEndUserByQueryRequest;

  try {
    const data = await api.endUsersUpdateEndUserByQuery(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field, any id, \&#39;/\&#39; included | [Defaults to `undefined`] |
| **endUserUpdate** | [EndUserUpdate](EndUserUpdate.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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

