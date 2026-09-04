# WorkspaceCodeExecutionPolicyApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDelete**](WorkspaceCodeExecutionPolicyApi.md#clearworkspacecodeexecutionpolicyv1workspacesworkspaceidcodeexecutionpolicydelete) | **DELETE** /v1/workspaces/{workspace_id}/code-execution-policy | Clear Workspace Code Execution Policy |
| [**getWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGet**](WorkspaceCodeExecutionPolicyApi.md#getworkspacecodeexecutionpolicyv1workspacesworkspaceidcodeexecutionpolicyget) | **GET** /v1/workspaces/{workspace_id}/code-execution-policy | Get Workspace Code Execution Policy |
| [**setWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPut**](WorkspaceCodeExecutionPolicyApi.md#setworkspacecodeexecutionpolicyv1workspacesworkspaceidcodeexecutionpolicyput) | **PUT** /v1/workspaces/{workspace_id}/code-execution-policy | Set Workspace Code Execution Policy |



## clearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDelete

> WorkspaceCodeExecutionPolicyPublic clearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDelete(workspaceId)

Clear Workspace Code Execution Policy

Drop a workspace\&#39;s policy, returning it to the deployment\&#39;s behavior.  Idempotent: a workspace that has no policy is already in the state this asks for, so it answers with the unconfigured policy rather than a 404.

### Example

```ts
import {
  Configuration,
  WorkspaceCodeExecutionPolicyApi,
} from '';
import type { ClearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceCodeExecutionPolicyApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ClearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDeleteRequest;

  try {
    const data = await api.clearWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyDelete(body);
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

[**WorkspaceCodeExecutionPolicyPublic**](WorkspaceCodeExecutionPolicyPublic.md)

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


## getWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGet

> WorkspaceCodeExecutionPolicyPublic getWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGet(workspaceId)

Get Workspace Code Execution Policy

Read a workspace\&#39;s code-execution policy.  Takes the same role as setting it (an organization owner/admin, or an owner/admin of this workspace), because the policy describes the workspace\&#39;s security and billing posture rather than one member\&#39;s allowance. A workspace with no policy answers with the unconfigured one (&#x60;&#x60;configured: false&#x60;&#x60;), which is the deployment\&#39;s own behavior described in the same shape rather than a 404.

### Example

```ts
import {
  Configuration,
  WorkspaceCodeExecutionPolicyApi,
} from '';
import type { GetWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceCodeExecutionPolicyApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGetRequest;

  try {
    const data = await api.getWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyGet(body);
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

[**WorkspaceCodeExecutionPolicyPublic**](WorkspaceCodeExecutionPolicyPublic.md)

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


## setWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPut

> WorkspaceCodeExecutionPolicyPublic setWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPut(workspaceId, workspaceCodeExecutionPolicyUpdate)

Set Workspace Code Execution Policy

Set a workspace\&#39;s code-execution policy, replacing any existing one.  An organization owner/admin, or an owner/admin of this workspace, may write it. The policy can only narrow what the deployment permits: turning code execution off for the workspace, lowering the loop and execution ceilings, and removing tool kinds from what the sandbox backend serves. It never turns a sandbox the deployment has not configured on, and &#x60;&#x60;image&#x60;&#x60; may only name one the operator curated (&#x60;&#x60;allowed_images&#x60;&#x60; on the response reports the set); anything else is refused with 400.

### Example

```ts
import {
  Configuration,
  WorkspaceCodeExecutionPolicyApi,
} from '';
import type { SetWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceCodeExecutionPolicyApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceCodeExecutionPolicyUpdate
    workspaceCodeExecutionPolicyUpdate: ...,
  } satisfies SetWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPutRequest;

  try {
    const data = await api.setWorkspaceCodeExecutionPolicyV1WorkspacesWorkspaceIdCodeExecutionPolicyPut(body);
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
| **workspaceCodeExecutionPolicyUpdate** | [WorkspaceCodeExecutionPolicyUpdate](WorkspaceCodeExecutionPolicyUpdate.md) |  | |

### Return type

[**WorkspaceCodeExecutionPolicyPublic**](WorkspaceCodeExecutionPolicyPublic.md)

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

