# WorkspacesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPost**](WorkspacesApi.md#addworkspacememberv1workspacesworkspaceidmembersuseridpost) | **POST** /v1/workspaces/{workspace_id}/members/{user_id} | Add Workspace Member |
| [**createWorkspaceV1WorkspacesPost**](WorkspacesApi.md#createworkspacev1workspacespost) | **POST** /v1/workspaces | Create Workspace |
| [**deleteWorkspaceV1WorkspacesWorkspaceIdDelete**](WorkspacesApi.md#deleteworkspacev1workspacesworkspaceiddelete) | **DELETE** /v1/workspaces/{workspace_id} | Delete Workspace |
| [**getWorkspaceV1WorkspacesWorkspaceIdGet**](WorkspacesApi.md#getworkspacev1workspacesworkspaceidget) | **GET** /v1/workspaces/{workspace_id} | Get Workspace |
| [**listWorkspaceMembersV1WorkspacesWorkspaceIdMembersGet**](WorkspacesApi.md#listworkspacemembersv1workspacesworkspaceidmembersget) | **GET** /v1/workspaces/{workspace_id}/members | List Workspace Members |
| [**listWorkspacesV1WorkspacesGet**](WorkspacesApi.md#listworkspacesv1workspacesget) | **GET** /v1/workspaces | List Workspaces |
| [**removeWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDelete**](WorkspacesApi.md#removeworkspacememberv1workspacesworkspaceidmembersuseriddelete) | **DELETE** /v1/workspaces/{workspace_id}/members/{user_id} | Remove Workspace Member |
| [**updateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatch**](WorkspacesApi.md#updateworkspacememberrolev1workspacesworkspaceidmembersuseridpatch) | **PATCH** /v1/workspaces/{workspace_id}/members/{user_id} | Update Workspace Member Role |
| [**updateWorkspaceV1WorkspacesWorkspaceIdPatch**](WorkspacesApi.md#updateworkspacev1workspacesworkspaceidpatch) | **PATCH** /v1/workspaces/{workspace_id} | Update Workspace |



## addWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPost

> WorkspaceMemberPublic addWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPost(workspaceId, userId, role)

Add Workspace Member

Add an existing organization member to a workspace.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { AddWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'owner' | 'admin' | 'member' | 'viewer' | Role to assign in this workspace. (optional)
    role: role_example,
  } satisfies AddWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPostRequest;

  try {
    const data = await api.addWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdPost(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |
| **role** | `owner`, `admin`, `member`, `viewer` | Role to assign in this workspace. | [Optional] [Defaults to `&#39;member&#39;`] [Enum: owner, admin, member, viewer] |

### Return type

[**WorkspaceMemberPublic**](WorkspaceMemberPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWorkspaceV1WorkspacesPost

> WorkspacePublic createWorkspaceV1WorkspacesPost(workspaceCreate)

Create Workspace

Create a workspace in the caller\&#39;s organization. Owners and admins only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { CreateWorkspaceV1WorkspacesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // WorkspaceCreate
    workspaceCreate: ...,
  } satisfies CreateWorkspaceV1WorkspacesPostRequest;

  try {
    const data = await api.createWorkspaceV1WorkspacesPost(body);
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
| **workspaceCreate** | [WorkspaceCreate](WorkspaceCreate.md) |  | |

### Return type

[**WorkspacePublic**](WorkspacePublic.md)

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


## deleteWorkspaceV1WorkspacesWorkspaceIdDelete

> Message deleteWorkspaceV1WorkspacesWorkspaceIdDelete(workspaceId)

Delete Workspace

Delete a workspace and its memberships. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { DeleteWorkspaceV1WorkspacesWorkspaceIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWorkspaceV1WorkspacesWorkspaceIdDeleteRequest;

  try {
    const data = await api.deleteWorkspaceV1WorkspacesWorkspaceIdDelete(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |

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


## getWorkspaceV1WorkspacesWorkspaceIdGet

> WorkspacePublic getWorkspaceV1WorkspacesWorkspaceIdGet(workspaceId)

Get Workspace

Get one workspace.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { GetWorkspaceV1WorkspacesWorkspaceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkspaceV1WorkspacesWorkspaceIdGetRequest;

  try {
    const data = await api.getWorkspaceV1WorkspacesWorkspaceIdGet(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkspacePublic**](WorkspacePublic.md)

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


## listWorkspaceMembersV1WorkspacesWorkspaceIdMembersGet

> WorkspaceMembersPublic listWorkspaceMembersV1WorkspacesWorkspaceIdMembersGet(workspaceId, skip, limit)

List Workspace Members

List a workspace\&#39;s members.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { ListWorkspaceMembersV1WorkspacesWorkspaceIdMembersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListWorkspaceMembersV1WorkspacesWorkspaceIdMembersGetRequest;

  try {
    const data = await api.listWorkspaceMembersV1WorkspacesWorkspaceIdMembersGet(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**WorkspaceMembersPublic**](WorkspaceMembersPublic.md)

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


## listWorkspacesV1WorkspacesGet

> WorkspacesPublic listWorkspacesV1WorkspacesGet(skip, limit)

List Workspaces

List the workspaces the caller can see in their organization.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { ListWorkspacesV1WorkspacesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListWorkspacesV1WorkspacesGetRequest;

  try {
    const data = await api.listWorkspacesV1WorkspacesGet(body);
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

[**WorkspacesPublic**](WorkspacesPublic.md)

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


## removeWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDelete

> Message removeWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDelete(workspaceId, userId)

Remove Workspace Member

Remove a member from a workspace. Idempotent.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { RemoveWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RemoveWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDeleteRequest;

  try {
    const data = await api.removeWorkspaceMemberV1WorkspacesWorkspaceIdMembersUserIdDelete(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |

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


## updateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatch

> WorkspaceMemberPublic updateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatch(workspaceId, userId, role)

Update Workspace Member Role

Change a workspace member\&#39;s role.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { UpdateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'owner' | 'admin' | 'member' | 'viewer' | Role to assign in this workspace.
    role: role_example,
  } satisfies UpdateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatchRequest;

  try {
    const data = await api.updateWorkspaceMemberRoleV1WorkspacesWorkspaceIdMembersUserIdPatch(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |
| **role** | `owner`, `admin`, `member`, `viewer` | Role to assign in this workspace. | [Defaults to `undefined`] [Enum: owner, admin, member, viewer] |

### Return type

[**WorkspaceMemberPublic**](WorkspaceMemberPublic.md)

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


## updateWorkspaceV1WorkspacesWorkspaceIdPatch

> WorkspacePublic updateWorkspaceV1WorkspacesWorkspaceIdPatch(workspaceId, workspaceUpdate)

Update Workspace

Rename a workspace or change its description.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { UpdateWorkspaceV1WorkspacesWorkspaceIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceUpdate
    workspaceUpdate: ...,
  } satisfies UpdateWorkspaceV1WorkspacesWorkspaceIdPatchRequest;

  try {
    const data = await api.updateWorkspaceV1WorkspacesWorkspaceIdPatch(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **workspaceUpdate** | [WorkspaceUpdate](WorkspaceUpdate.md) |  | |

### Return type

[**WorkspacePublic**](WorkspacePublic.md)

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

