# AdminApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAdministrationAccessV1AdminAccessGet**](AdminApi.md#getadministrationaccessv1adminaccessget) | **GET** /v1/admin/access | Get Administration Access |
| [**listDeploymentUsersV1AdminUsersGet**](AdminApi.md#listdeploymentusersv1adminusersget) | **GET** /v1/admin/users | List Deployment Users |
| [**updateDeploymentUserV1AdminUsersUserIdPatch**](AdminApi.md#updatedeploymentuserv1adminusersuseridpatch) | **PATCH** /v1/admin/users/{user_id} | Update Deployment User |



## getAdministrationAccessV1AdminAccessGet

> DeploymentAdminAccessPublic getAdministrationAccessV1AdminAccessGet()

Get Administration Access

Report whether the caller may use the deployment administration surface.  The one endpoint here that answers 200 for everybody. The rest refuse a non-operator with 404 so they do not confirm they exist, which leaves a dashboard nothing to gate its navigation on but a failed request; this says the same thing without one. It publishes only the caller\&#39;s own standing, which they could establish by trying an endpoint anyway.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { GetAdministrationAccessV1AdminAccessGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  try {
    const data = await api.getAdministrationAccessV1AdminAccessGet();
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

[**DeploymentAdminAccessPublic**](DeploymentAdminAccessPublic.md)

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


## listDeploymentUsersV1AdminUsersGet

> DeploymentUsersPublic listDeploymentUsersV1AdminUsersGet(skip, limit)

List Deployment Users

List every account on this deployment, with the organizations each belongs to.  Deployment-wide, so it is not the same list as &#x60;&#x60;GET /v1/organizations/me/members&#x60;&#x60;: that one is the caller\&#39;s organization roster and drops a suspended membership, while this one carries every identity at whatever standing, including one whose memberships are all suspended. Each row also reports when the account last signed in to the dashboard, and null there means never.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { ListDeploymentUsersV1AdminUsersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListDeploymentUsersV1AdminUsersGetRequest;

  try {
    const data = await api.listDeploymentUsersV1AdminUsersGet(body);
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

[**DeploymentUsersPublic**](DeploymentUsersPublic.md)

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


## updateDeploymentUserV1AdminUsersUserIdPatch

> DeploymentUserPublic updateDeploymentUserV1AdminUsersUserIdPatch(userId, deploymentUserUpdateRequest)

Update Deployment User

Deactivate or reactivate an account, or change whether it may administer this deployment.  Both fields are optional and omitting one leaves it alone; a body naming neither is refused rather than treated as a no-op. Deactivating also ends that account\&#39;s dashboard sessions immediately, so a lost laptop stops working now rather than when its cookie is next presented.  Two changes are refused to keep a deployment reachable: an operator may not deactivate their own account or drop their own operator access, and neither may be taken from the deployment\&#39;s bootstrap operator, which is the identity master-key sign-in resolves to. Granting either is unguarded.

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { UpdateDeploymentUserV1AdminUsersUserIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AdminApi(config);

  const body = {
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DeploymentUserUpdateRequest
    deploymentUserUpdateRequest: ...,
  } satisfies UpdateDeploymentUserV1AdminUsersUserIdPatchRequest;

  try {
    const data = await api.updateDeploymentUserV1AdminUsersUserIdPatch(body);
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
| **deploymentUserUpdateRequest** | [DeploymentUserUpdateRequest](DeploymentUserUpdateRequest.md) |  | |

### Return type

[**DeploymentUserPublic**](DeploymentUserPublic.md)

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

