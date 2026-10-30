# WorkspacesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workspacesAddWorkspaceMember**](WorkspacesApi.md#workspacesaddworkspacemember) | **POST** /api/v1/workspaces/{workspace_id}/members/{user_id} | Add Workspace Member |
| [**workspacesCreateWorkspace**](WorkspacesApi.md#workspacescreateworkspace) | **POST** /api/v1/workspaces | Create Workspace |
| [**workspacesDeleteWorkspace**](WorkspacesApi.md#workspacesdeleteworkspace) | **DELETE** /api/v1/workspaces/{workspace_id} | Delete Workspace |
| [**workspacesDeleteWorkspaceTraceContent**](WorkspacesApi.md#workspacesdeleteworkspacetracecontent) | **DELETE** /api/v1/workspaces/{workspace_id}/trace-content | Delete Workspace Trace Content |
| [**workspacesGetWorkspace**](WorkspacesApi.md#workspacesgetworkspace) | **GET** /api/v1/workspaces/{workspace_id} | Get Workspace |
| [**workspacesListWorkspaceMembers**](WorkspacesApi.md#workspaceslistworkspacemembers) | **GET** /api/v1/workspaces/{workspace_id}/members | List Workspace Members |
| [**workspacesListWorkspaces**](WorkspacesApi.md#workspaceslistworkspaces) | **GET** /api/v1/workspaces | List Workspaces |
| [**workspacesRemoveWorkspaceMember**](WorkspacesApi.md#workspacesremoveworkspacemember) | **DELETE** /api/v1/workspaces/{workspace_id}/members/{user_id} | Remove Workspace Member |
| [**workspacesUpdateWorkspace**](WorkspacesApi.md#workspacesupdateworkspace) | **PATCH** /api/v1/workspaces/{workspace_id} | Update Workspace |
| [**workspacesUpdateWorkspaceMemberRole**](WorkspacesApi.md#workspacesupdateworkspacememberrole) | **PATCH** /api/v1/workspaces/{workspace_id}/members/{user_id} | Update Workspace Member Role |



## workspacesAddWorkspaceMember

> WorkspaceMemberPublic workspacesAddWorkspaceMember(workspaceId, userId, role)

Add Workspace Member

Add an existing organization member to a workspace.  The 404 for a workspace deleted during the add describes PostgreSQL. SQLite does not name the foreign key it enforced, so it surfaces that race as a 500.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesAddWorkspaceMemberRequest } from '';

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
  } satisfies WorkspacesAddWorkspaceMemberRequest;

  try {
    const data = await api.workspacesAddWorkspaceMember(body);
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
| **404** | The workspace does not exist, or was deleted during the add. |  -  |
| **409** | The user is already a member of the workspace. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workspacesCreateWorkspace

> WorkspacePublic workspacesCreateWorkspace(workspaceCreate)

Create Workspace

Create a workspace in the caller\&#39;s organization. Owners and admins only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesCreateWorkspaceRequest } from '';

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
  } satisfies WorkspacesCreateWorkspaceRequest;

  try {
    const data = await api.workspacesCreateWorkspace(body);
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


## workspacesDeleteWorkspace

> Message workspacesDeleteWorkspace(workspaceId)

Delete Workspace

Delete a workspace and its memberships. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesDeleteWorkspaceRequest } from '';

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
  } satisfies WorkspacesDeleteWorkspaceRequest;

  try {
    const data = await api.workspacesDeleteWorkspace(body);
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


## workspacesDeleteWorkspaceTraceContent

> Message workspacesDeleteWorkspaceTraceContent(workspaceId)

Delete Workspace Trace Content

Delete what this workspace\&#39;s agent sessions were about, keeping the sessions. Its managers only.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesDeleteWorkspaceTraceContentRequest } from '';

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
  } satisfies WorkspacesDeleteWorkspaceTraceContentRequest;

  try {
    const data = await api.workspacesDeleteWorkspaceTraceContent(body);
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


## workspacesGetWorkspace

> WorkspacePublic workspacesGetWorkspace(workspaceId)

Get Workspace

Get one workspace.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesGetWorkspaceRequest } from '';

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
  } satisfies WorkspacesGetWorkspaceRequest;

  try {
    const data = await api.workspacesGetWorkspace(body);
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


## workspacesListWorkspaceMembers

> WorkspaceMembersPublic workspacesListWorkspaceMembers(workspaceId, skip, limit)

List Workspace Members

List a workspace\&#39;s members.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesListWorkspaceMembersRequest } from '';

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
  } satisfies WorkspacesListWorkspaceMembersRequest;

  try {
    const data = await api.workspacesListWorkspaceMembers(body);
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


## workspacesListWorkspaces

> WorkspacesPublic workspacesListWorkspaces(skip, limit)

List Workspaces

List the workspaces the caller can see in their organization.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesListWorkspacesRequest } from '';

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
  } satisfies WorkspacesListWorkspacesRequest;

  try {
    const data = await api.workspacesListWorkspaces(body);
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


## workspacesRemoveWorkspaceMember

> Message workspacesRemoveWorkspaceMember(workspaceId, userId)

Remove Workspace Member

Remove a member from a workspace. Idempotent.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesRemoveWorkspaceMemberRequest } from '';

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
  } satisfies WorkspacesRemoveWorkspaceMemberRequest;

  try {
    const data = await api.workspacesRemoveWorkspaceMember(body);
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


## workspacesUpdateWorkspace

> WorkspacePublic workspacesUpdateWorkspace(workspaceId, workspaceUpdate)

Update Workspace

Rename a workspace, change its description, or turn keeping its agent sessions\&#39; content on or off.  Turning content off keeps nothing new from the next export on; what is already stored stays until it ages out, or until &#x60;&#x60;DELETE .../trace-content&#x60;&#x60; deletes it.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesUpdateWorkspaceRequest } from '';

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
  } satisfies WorkspacesUpdateWorkspaceRequest;

  try {
    const data = await api.workspacesUpdateWorkspace(body);
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


## workspacesUpdateWorkspaceMemberRole

> WorkspaceMemberPublic workspacesUpdateWorkspaceMemberRole(workspaceId, userId, role)

Update Workspace Member Role

Change a workspace member\&#39;s role.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '';
import type { WorkspacesUpdateWorkspaceMemberRoleRequest } from '';

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
  } satisfies WorkspacesUpdateWorkspaceMemberRoleRequest;

  try {
    const data = await api.workspacesUpdateWorkspaceMemberRole(body);
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

