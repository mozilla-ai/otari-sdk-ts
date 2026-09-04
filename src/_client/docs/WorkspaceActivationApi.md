# WorkspaceActivationApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPost**](WorkspaceActivationApi.md#createworkspaceactivationkeyv1workspacesworkspaceidactivationkeypost) | **POST** /v1/workspaces/{workspace_id}/activation/key | Create Workspace Activation Key |
| [**dismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPost**](WorkspaceActivationApi.md#dismissworkspaceactivationv1workspacesworkspaceidactivationdismisspost) | **POST** /v1/workspaces/{workspace_id}/activation/dismiss | Dismiss Workspace Activation |
| [**getWorkspaceActivationV1WorkspacesWorkspaceIdActivationGet**](WorkspaceActivationApi.md#getworkspaceactivationv1workspacesworkspaceidactivationget) | **GET** /v1/workspaces/{workspace_id}/activation | Get Workspace Activation |



## createWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPost

> ActivationApiKeyPublic createWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPost(workspaceId)

Create Workspace Activation Key

Issue the workspace\&#39;s setup API key, rotating the one the guide already issued.  Workspace owners and admins only, like every other action that changes a workspace. The plaintext is returned once and never stored, so a reopened guide rotates the same key row rather than collecting a second one, and answers 409 once the workspace has activated or the guide was dismissed.

### Example

```ts
import {
  Configuration,
  WorkspaceActivationApi,
} from '';
import type { CreateWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceActivationApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CreateWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPostRequest;

  try {
    const data = await api.createWorkspaceActivationKeyV1WorkspacesWorkspaceIdActivationKeyPost(body);
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

[**ActivationApiKeyPublic**](ActivationApiKeyPublic.md)

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


## dismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPost

> Message dismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPost(workspaceId)

Dismiss Workspace Activation

Retire the guide for this workspace. Permanent, and idempotent.  Workspace owners and admins only. It retires the card and nothing else: the key the guide issued keeps working, because the operator asked for it and may well have pasted it somewhere already. Revoking one is the Keys page\&#39;s job.

### Example

```ts
import {
  Configuration,
  WorkspaceActivationApi,
} from '';
import type { DismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceActivationApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPostRequest;

  try {
    const data = await api.dismissWorkspaceActivationV1WorkspacesWorkspaceIdActivationDismissPost(body);
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


## getWorkspaceActivationV1WorkspacesWorkspaceIdActivationGet

> WorkspaceActivationPublic getWorkspaceActivationV1WorkspacesWorkspaceIdActivationGet(workspaceId)

Get Workspace Activation

Where a workspace stands on its first successful request.  Readable by any member who can see the workspace. Whether the guide should actually be offered to this caller is &#x60;&#x60;experience_eligible&#x60;&#x60;, which also answers false when the deployment has the flow turned off (&#x60;&#x60;activation_guide&#x60;&#x60;), so a dashboard left open stops offering it without needing to be reloaded.

### Example

```ts
import {
  Configuration,
  WorkspaceActivationApi,
} from '';
import type { GetWorkspaceActivationV1WorkspacesWorkspaceIdActivationGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WorkspaceActivationApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkspaceActivationV1WorkspacesWorkspaceIdActivationGetRequest;

  try {
    const data = await api.getWorkspaceActivationV1WorkspacesWorkspaceIdActivationGet(body);
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

[**WorkspaceActivationPublic**](WorkspaceActivationPublic.md)

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

