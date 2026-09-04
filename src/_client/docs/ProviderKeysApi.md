# ProviderKeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPost**](ProviderKeysApi.md#addworkspaceproviderkeymodelrestrictionv1workspacesworkspaceidproviderkeyskeyidmodelspost) | **POST** /v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | Add Workspace Provider Key Model Restriction |
| [**archiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePost**](ProviderKeysApi.md#archiveorgproviderkeyv1organizationsmeproviderkeyskeyidarchivepost) | **POST** /v1/organizations/me/provider-keys/{key_id}/archive | Archive Org Provider Key |
| [**createOrgProviderKeyV1OrganizationsMeProviderKeysPost**](ProviderKeysApi.md#createorgproviderkeyv1organizationsmeproviderkeyspost) | **POST** /v1/organizations/me/provider-keys | Create Org Provider Key |
| [**deleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDelete**](ProviderKeysApi.md#deleteorgproviderkeyv1organizationsmeproviderkeyskeyiddelete) | **DELETE** /v1/organizations/me/provider-keys/{key_id} | Delete Org Provider Key |
| [**listOrgProviderKeysV1OrganizationsMeProviderKeysGet**](ProviderKeysApi.md#listorgproviderkeysv1organizationsmeproviderkeysget) | **GET** /v1/organizations/me/provider-keys | List Org Provider Keys |
| [**listWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGet**](ProviderKeysApi.md#listworkspaceproviderkeymodelrestrictionsv1workspacesworkspaceidproviderkeyskeyidmodelsget) | **GET** /v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | List Workspace Provider Key Model Restrictions |
| [**listWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGet**](ProviderKeysApi.md#listworkspaceproviderkeysv1workspacesworkspaceidproviderkeysget) | **GET** /v1/workspaces/{workspace_id}/provider-keys | List Workspace Provider Keys |
| [**removeWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDelete**](ProviderKeysApi.md#removeworkspaceproviderkeymodelrestrictionv1workspacesworkspaceidproviderkeyskeyidmodelsmodeldelete) | **DELETE** /v1/workspaces/{workspace_id}/provider-keys/{key_id}/models/{model} | Remove Workspace Provider Key Model Restriction |
| [**resetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDelete**](ProviderKeysApi.md#resetworkspaceproviderkeyoverridev1workspacesworkspaceidproviderkeyskeyiddelete) | **DELETE** /v1/workspaces/{workspace_id}/provider-keys/{key_id} | Reset Workspace Provider Key Override |
| [**restoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePost**](ProviderKeysApi.md#restoreorgproviderkeyv1organizationsmeproviderkeyskeyidrestorepost) | **POST** /v1/organizations/me/provider-keys/{key_id}/restore | Restore Org Provider Key |
| [**setOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPost**](ProviderKeysApi.md#setorgproviderkeydefaultv1organizationsmeproviderkeyskeyiddefaultpost) | **POST** /v1/organizations/me/provider-keys/{key_id}/default | Set Org Provider Key Default |
| [**setWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatch**](ProviderKeysApi.md#setworkspaceproviderkeyoverridev1workspacesworkspaceidproviderkeyskeyidpatch) | **PATCH** /v1/workspaces/{workspace_id}/provider-keys/{key_id} | Set Workspace Provider Key Override |
| [**updateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatch**](ProviderKeysApi.md#updateorgproviderkeyv1organizationsmeproviderkeyskeyidpatch) | **PATCH** /v1/organizations/me/provider-keys/{key_id} | Update Org Provider Key |



## addWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPost

> Message addWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPost(workspaceId, keyId, workspaceProviderModelRestrictionRequest)

Add Workspace Provider Key Model Restriction

Narrow this workspace\&#39;s allow-list for a key to include one more model. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { AddWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceProviderModelRestrictionRequest
    workspaceProviderModelRestrictionRequest: ...,
  } satisfies AddWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPostRequest;

  try {
    const data = await api.addWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsPost(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **workspaceProviderModelRestrictionRequest** | [WorkspaceProviderModelRestrictionRequest](WorkspaceProviderModelRestrictionRequest.md) |  | |

### Return type

[**Message**](Message.md)

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


## archiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePost

> OrgProviderKeyPublic archiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePost(keyId)

Archive Org Provider Key

Archive a key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ArchiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ArchiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePostRequest;

  try {
    const data = await api.archiveOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdArchivePost(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrgProviderKeyPublic**](OrgProviderKeyPublic.md)

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


## createOrgProviderKeyV1OrganizationsMeProviderKeysPost

> OrgProviderKeyPublic createOrgProviderKeyV1OrganizationsMeProviderKeysPost(orgProviderKeyCreateRequest)

Create Org Provider Key

Create a provider key in the caller\&#39;s organization. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { CreateOrgProviderKeyV1OrganizationsMeProviderKeysPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // OrgProviderKeyCreateRequest
    orgProviderKeyCreateRequest: ...,
  } satisfies CreateOrgProviderKeyV1OrganizationsMeProviderKeysPostRequest;

  try {
    const data = await api.createOrgProviderKeyV1OrganizationsMeProviderKeysPost(body);
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
| **orgProviderKeyCreateRequest** | [OrgProviderKeyCreateRequest](OrgProviderKeyCreateRequest.md) |  | |

### Return type

[**OrgProviderKeyPublic**](OrgProviderKeyPublic.md)

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


## deleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDelete

> Message deleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDelete(keyId)

Delete Org Provider Key

Permanently delete an archived key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { DeleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDeleteRequest;

  try {
    const data = await api.deleteOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdDelete(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

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


## listOrgProviderKeysV1OrganizationsMeProviderKeysGet

> OrgProviderKeysPublic listOrgProviderKeysV1OrganizationsMeProviderKeysGet(includeArchived, skip, limit)

List Org Provider Keys

List the caller\&#39;s organization\&#39;s provider keys. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ListOrgProviderKeysV1OrganizationsMeProviderKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // boolean | Include archived keys. (optional)
    includeArchived: true,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListOrgProviderKeysV1OrganizationsMeProviderKeysGetRequest;

  try {
    const data = await api.listOrgProviderKeysV1OrganizationsMeProviderKeysGet(body);
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
| **includeArchived** | `boolean` | Include archived keys. | [Optional] [Defaults to `false`] |
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**OrgProviderKeysPublic**](OrgProviderKeysPublic.md)

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


## listWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGet

> WorkspaceProviderModelRestrictionsPublic listWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGet(workspaceId, keyId)

List Workspace Provider Key Model Restrictions

List this workspace\&#39;s model allow-list for a key. Empty means every model is allowed.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ListWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGetRequest;

  try {
    const data = await api.listWorkspaceProviderKeyModelRestrictionsV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsGet(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkspaceProviderModelRestrictionsPublic**](WorkspaceProviderModelRestrictionsPublic.md)

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


## listWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGet

> WorkspaceProviderKeyOverridesPublic listWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGet(workspaceId)

List Workspace Provider Keys

The effective view of every key visible to this workspace. Any member of the workspace may read it.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ListWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGetRequest;

  try {
    const data = await api.listWorkspaceProviderKeysV1WorkspacesWorkspaceIdProviderKeysGet(body);
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

[**WorkspaceProviderKeyOverridesPublic**](WorkspaceProviderKeyOverridesPublic.md)

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


## removeWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDelete

> Message removeWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDelete(workspaceId, keyId, model)

Remove Workspace Provider Key Model Restriction

Remove one model from this workspace\&#39;s allow-list for a key. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { RemoveWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    model: model_example,
  } satisfies RemoveWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDeleteRequest;

  try {
    const data = await api.removeWorkspaceProviderKeyModelRestrictionV1WorkspacesWorkspaceIdProviderKeysKeyIdModelsModelDelete(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **model** | `string` |  | [Defaults to `undefined`] |

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


## resetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDelete

> Message resetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDelete(workspaceId, keyId)

Reset Workspace Provider Key Override

Remove this workspace\&#39;s override, reverting to full inheritance. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ResetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ResetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDeleteRequest;

  try {
    const data = await api.resetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdDelete(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

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


## restoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePost

> OrgProviderKeyPublic restoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePost(keyId)

Restore Org Provider Key

Restore an archived key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { RestoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RestoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePostRequest;

  try {
    const data = await api.restoreOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdRestorePost(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrgProviderKeyPublic**](OrgProviderKeyPublic.md)

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


## setOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPost

> OrgProviderKeyPublic setOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPost(keyId)

Set Org Provider Key Default

Make a key the organization\&#39;s default for its provider. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { SetOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SetOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPostRequest;

  try {
    const data = await api.setOrgProviderKeyDefaultV1OrganizationsMeProviderKeysKeyIdDefaultPost(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**OrgProviderKeyPublic**](OrgProviderKeyPublic.md)

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


## setWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatch

> WorkspaceProviderKeyOverridePublic setWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatch(workspaceId, keyId, workspaceProviderKeyOverrideRequest)

Set Workspace Provider Key Override

Pin or disable a key for this workspace. Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { SetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceProviderKeyOverrideRequest
    workspaceProviderKeyOverrideRequest: ...,
  } satisfies SetWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatchRequest;

  try {
    const data = await api.setWorkspaceProviderKeyOverrideV1WorkspacesWorkspaceIdProviderKeysKeyIdPatch(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **workspaceProviderKeyOverrideRequest** | [WorkspaceProviderKeyOverrideRequest](WorkspaceProviderKeyOverrideRequest.md) |  | |

### Return type

[**WorkspaceProviderKeyOverridePublic**](WorkspaceProviderKeyOverridePublic.md)

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


## updateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatch

> OrgProviderKeyPublic updateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatch(keyId, orgProviderKeyUpdateRequest)

Update Org Provider Key

Change a key\&#39;s name, credential, base URL, or client args. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { UpdateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ProviderKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrgProviderKeyUpdateRequest
    orgProviderKeyUpdateRequest: ...,
  } satisfies UpdateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatchRequest;

  try {
    const data = await api.updateOrgProviderKeyV1OrganizationsMeProviderKeysKeyIdPatch(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **orgProviderKeyUpdateRequest** | [OrgProviderKeyUpdateRequest](OrgProviderKeyUpdateRequest.md) |  | |

### Return type

[**OrgProviderKeyPublic**](OrgProviderKeyPublic.md)

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

