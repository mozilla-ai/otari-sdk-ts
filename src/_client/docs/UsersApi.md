# UsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserV1UsersPost**](UsersApi.md#createuserv1userspost) | **POST** /v1/users | Create User |
| [**deleteUserV1UsersUserIdDelete**](UsersApi.md#deleteuserv1usersuseriddelete) | **DELETE** /v1/users/{user_id} | Delete User |
| [**getUserUsageV1UsersUserIdUsageGet**](UsersApi.md#getuserusagev1usersuseridusageget) | **GET** /v1/users/{user_id}/usage | Get User Usage |
| [**getUserV1UsersUserIdGet**](UsersApi.md#getuserv1usersuseridget) | **GET** /v1/users/{user_id} | Get User |
| [**listUsersV1UsersGet**](UsersApi.md#listusersv1usersget) | **GET** /v1/users | List Users |
| [**updateUserV1UsersUserIdPatch**](UsersApi.md#updateuserv1usersuseridpatch) | **PATCH** /v1/users/{user_id} | Update User |



## createUserV1UsersPost

> UserResponse createUserV1UsersPost(createUserRequest)

Create User

Create a new user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { CreateUserV1UsersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // CreateUserRequest
    createUserRequest: ...,
  } satisfies CreateUserV1UsersPostRequest;

  try {
    const data = await api.createUserV1UsersPost(body);
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


## deleteUserV1UsersUserIdDelete

> deleteUserV1UsersUserIdDelete(userId)

Delete User

Delete a user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { DeleteUserV1UsersUserIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userId: userId_example,
  } satisfies DeleteUserV1UsersUserIdDeleteRequest;

  try {
    const data = await api.deleteUserV1UsersUserIdDelete(body);
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


## getUserUsageV1UsersUserIdUsageGet

> Array&lt;UsageLogResponse&gt; getUserUsageV1UsersUserIdUsageGet(userId, skip, limit)

Get User Usage

Get usage history for a specific user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { GetUserUsageV1UsersUserIdUsageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userId: userId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies GetUserUsageV1UsersUserIdUsageGetRequest;

  try {
    const data = await api.getUserUsageV1UsersUserIdUsageGet(body);
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


## getUserV1UsersUserIdGet

> UserResponse getUserV1UsersUserIdGet(userId)

Get User

Get details of a specific user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { GetUserV1UsersUserIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userId: userId_example,
  } satisfies GetUserV1UsersUserIdGetRequest;

  try {
    const data = await api.getUserV1UsersUserIdGet(body);
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


## listUsersV1UsersGet

> Array&lt;UserResponse&gt; listUsersV1UsersGet(skip, limit)

List Users

List all users with pagination.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { ListUsersV1UsersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListUsersV1UsersGetRequest;

  try {
    const data = await api.listUsersV1UsersGet(body);
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

[**Array&lt;UserResponse&gt;**](UserResponse.md)

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


## updateUserV1UsersUserIdPatch

> UserResponse updateUserV1UsersUserIdPatch(userId, updateUserRequest)

Update User

Update a user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UpdateUserV1UsersUserIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userId: userId_example,
    // UpdateUserRequest
    updateUserRequest: ...,
  } satisfies UpdateUserV1UsersUserIdPatchRequest;

  try {
    const data = await api.updateUserV1UsersUserIdPatch(body);
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

