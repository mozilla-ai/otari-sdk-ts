# UsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersCreateUser**](UsersApi.md#userscreateuser) | **POST** /api/v1/users | Create User |
| [**usersDeleteUser**](UsersApi.md#usersdeleteuser) | **DELETE** /api/v1/users/{user_id} | Delete User |
| [**usersGetUser**](UsersApi.md#usersgetuser) | **GET** /api/v1/users/{user_id} | Get User |
| [**usersGetUserUsage**](UsersApi.md#usersgetuserusage) | **GET** /api/v1/users/{user_id}/usage | Get User Usage |
| [**usersListUsers**](UsersApi.md#userslistusers) | **GET** /api/v1/users | List Users |
| [**usersUpdateUser**](UsersApi.md#usersupdateuser) | **PATCH** /api/v1/users/{user_id} | Update User |



## usersCreateUser

> UserResponse usersCreateUser(createUserRequest)

Create User

Create a new user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersCreateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // CreateUserRequest
    createUserRequest: ...,
  } satisfies UsersCreateUserRequest;

  try {
    const data = await api.usersCreateUser(body);
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
| **createUserRequest** | [CreateUserRequest](CreateUserRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

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


## usersDeleteUser

> usersDeleteUser(userId)

Delete User

Delete a user in the caller\&#39;s organization, and erase their telemetry.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersDeleteUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string
    userId: userId_example,
  } satisfies UsersDeleteUserRequest;

  try {
    const data = await api.usersDeleteUser(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

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


## usersGetUser

> UserResponse usersGetUser(userId)

Get User

Get details of a user in the caller\&#39;s organization.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersGetUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string
    userId: userId_example,
  } satisfies UsersGetUserRequest;

  try {
    const data = await api.usersGetUser(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**UserResponse**](UserResponse.md)

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


## usersGetUserUsage

> Array&lt;UsageLogResponse&gt; usersGetUserUsage(userId, skip, limit)

Get User Usage

Get usage history for a user in the caller\&#39;s organization.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersGetUserUsageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string
    userId: userId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies UsersGetUserUsageRequest;

  try {
    const data = await api.usersGetUserUsage(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;UsageLogResponse&gt;**](UsageLogResponse.md)

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


## usersListUsers

> Array&lt;UserResponse&gt; usersListUsers(skip, limit, parentUserId, externalId, blocked, includeTotal)

List Users

List the users the caller\&#39;s organization can name, with pagination.  &#x60;&#x60;users&#x60;&#x60; is deployment-global and has no organization column, so which of them this organization can name is derived: a key, usage, or a roster row puts one in reach, and one reached from nowhere at all (the shared &#x60;&#x60;default&#x60;&#x60; owner, or a user just created) is shared rather than hidden. See &#x60;&#x60;repositories.users_repository.in_organization&#x60;&#x60;.  &#x60;&#x60;parent_user_id&#x60;&#x60; with &#x60;&#x60;external_id&#x60;&#x60; finds the end user a service key created for a &#x60;&#x60;user&#x60;&#x60; value, which is how a caller maps its own ids to Otari\&#39;s. &#x60;&#x60;include_total&#x60;&#x60; adds an &#x60;&#x60;Otari-Total-Count&#x60;&#x60; header counting every match, so &#x60;&#x60;limit&#x3D;1&#x60;&#x60; with it counts a service key\&#39;s end users.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersListUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only the end users of this owner: the user a service key belongs to. (optional)
    parentUserId: parentUserId_example,
    // string | Only the end user a service key names with this `user` value. (optional)
    externalId: externalId_example,
    // boolean | Only blocked users (true) or only unblocked ones (false). (optional)
    blocked: true,
    // boolean | Also count every matching user, in the Otari-Total-Count response header. (optional)
    includeTotal: true,
  } satisfies UsersListUsersRequest;

  try {
    const data = await api.usersListUsers(body);
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
| **parentUserId** | `string` | Only the end users of this owner: the user a service key belongs to. | [Optional] [Defaults to `undefined`] |
| **externalId** | `string` | Only the end user a service key names with this &#x60;user&#x60; value. | [Optional] [Defaults to `undefined`] |
| **blocked** | `boolean` | Only blocked users (true) or only unblocked ones (false). | [Optional] [Defaults to `undefined`] |
| **includeTotal** | `boolean` | Also count every matching user, in the Otari-Total-Count response header. | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;UserResponse&gt;**](UserResponse.md)

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


## usersUpdateUser

> UserResponse usersUpdateUser(userId, updateUserRequest)

Update User

Update a user in the caller\&#39;s organization.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersUpdateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string
    userId: userId_example,
    // UpdateUserRequest
    updateUserRequest: ...,
  } satisfies UsersUpdateUserRequest;

  try {
    const data = await api.usersUpdateUser(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |
| **updateUserRequest** | [UpdateUserRequest](UpdateUserRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

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

