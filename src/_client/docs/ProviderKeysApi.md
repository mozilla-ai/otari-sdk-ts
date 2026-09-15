# ProviderKeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**providerKeysAddWorkspaceProviderKeyModelRestriction**](ProviderKeysApi.md#providerkeysaddworkspaceproviderkeymodelrestriction) | **POST** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | Add Workspace Provider Key Model Restriction |
| [**providerKeysArchiveOrgProviderKey**](ProviderKeysApi.md#providerkeysarchiveorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/archive | Archive Org Provider Key |
| [**providerKeysCreateOrgProviderKey**](ProviderKeysApi.md#providerkeyscreateorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys | Create Org Provider Key |
| [**providerKeysDeleteOrgProviderKey**](ProviderKeysApi.md#providerkeysdeleteorgproviderkey) | **DELETE** /api/v1/organizations/me/provider-keys/{key_id} | Delete Org Provider Key |
| [**providerKeysListOrgProviderKeys**](ProviderKeysApi.md#providerkeyslistorgproviderkeys) | **GET** /api/v1/organizations/me/provider-keys | List Org Provider Keys |
| [**providerKeysListWorkspaceProviderKeyModelRestrictions**](ProviderKeysApi.md#providerkeyslistworkspaceproviderkeymodelrestrictions) | **GET** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | List Workspace Provider Key Model Restrictions |
| [**providerKeysListWorkspaceProviderKeys**](ProviderKeysApi.md#providerkeyslistworkspaceproviderkeys) | **GET** /api/v1/workspaces/{workspace_id}/provider-keys | List Workspace Provider Keys |
| [**providerKeysRemoveWorkspaceProviderKeyModelRestriction**](ProviderKeysApi.md#providerkeysremoveworkspaceproviderkeymodelrestriction) | **DELETE** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models/{model} | Remove Workspace Provider Key Model Restriction |
| [**providerKeysResetWorkspaceProviderKeyOverride**](ProviderKeysApi.md#providerkeysresetworkspaceproviderkeyoverride) | **DELETE** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id} | Reset Workspace Provider Key Override |
| [**providerKeysRestoreOrgProviderKey**](ProviderKeysApi.md#providerkeysrestoreorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/restore | Restore Org Provider Key |
| [**providerKeysSetOrgProviderKeyDefault**](ProviderKeysApi.md#providerkeyssetorgproviderkeydefault) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/default | Set Org Provider Key Default |
| [**providerKeysSetWorkspaceProviderKeyOverride**](ProviderKeysApi.md#providerkeyssetworkspaceproviderkeyoverride) | **PATCH** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id} | Set Workspace Provider Key Override |
| [**providerKeysUpdateOrgProviderKey**](ProviderKeysApi.md#providerkeysupdateorgproviderkey) | **PATCH** /api/v1/organizations/me/provider-keys/{key_id} | Update Org Provider Key |



## providerKeysAddWorkspaceProviderKeyModelRestriction

> Message providerKeysAddWorkspaceProviderKeyModelRestriction(workspaceId, keyId, workspaceProviderModelRestrictionRequest)

Add Workspace Provider Key Model Restriction

Narrow this workspace\&#39;s allow-list for a key to include one more model. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysAddWorkspaceProviderKeyModelRestrictionRequest } from '';

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
  } satisfies ProviderKeysAddWorkspaceProviderKeyModelRestrictionRequest;

  try {
    const data = await api.providerKeysAddWorkspaceProviderKeyModelRestriction(body);
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


## providerKeysArchiveOrgProviderKey

> OrgProviderKeyPublic providerKeysArchiveOrgProviderKey(keyId)

Archive Org Provider Key

Archive a key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysArchiveOrgProviderKeyRequest } from '';

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
  } satisfies ProviderKeysArchiveOrgProviderKeyRequest;

  try {
    const data = await api.providerKeysArchiveOrgProviderKey(body);
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


## providerKeysCreateOrgProviderKey

> OrgProviderKeyPublic providerKeysCreateOrgProviderKey(orgProviderKeyCreateRequest)

Create Org Provider Key

Create a provider key in the caller\&#39;s organization. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysCreateOrgProviderKeyRequest } from '';

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
  } satisfies ProviderKeysCreateOrgProviderKeyRequest;

  try {
    const data = await api.providerKeysCreateOrgProviderKey(body);
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


## providerKeysDeleteOrgProviderKey

> Message providerKeysDeleteOrgProviderKey(keyId)

Delete Org Provider Key

Permanently delete an archived key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysDeleteOrgProviderKeyRequest } from '';

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
  } satisfies ProviderKeysDeleteOrgProviderKeyRequest;

  try {
    const data = await api.providerKeysDeleteOrgProviderKey(body);
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


## providerKeysListOrgProviderKeys

> OrgProviderKeysPublic providerKeysListOrgProviderKeys(includeArchived, skip, limit)

List Org Provider Keys

List the caller\&#39;s organization\&#39;s provider keys. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysListOrgProviderKeysRequest } from '';

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
  } satisfies ProviderKeysListOrgProviderKeysRequest;

  try {
    const data = await api.providerKeysListOrgProviderKeys(body);
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


## providerKeysListWorkspaceProviderKeyModelRestrictions

> WorkspaceProviderModelRestrictionsPublic providerKeysListWorkspaceProviderKeyModelRestrictions(workspaceId, keyId)

List Workspace Provider Key Model Restrictions

List this workspace\&#39;s model allow-list for a key. Empty means every model is allowed.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysListWorkspaceProviderKeyModelRestrictionsRequest } from '';

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
  } satisfies ProviderKeysListWorkspaceProviderKeyModelRestrictionsRequest;

  try {
    const data = await api.providerKeysListWorkspaceProviderKeyModelRestrictions(body);
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


## providerKeysListWorkspaceProviderKeys

> WorkspaceProviderKeyOverridesPublic providerKeysListWorkspaceProviderKeys(workspaceId)

List Workspace Provider Keys

The effective view of every key visible to this workspace. Any member of the workspace may read it.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysListWorkspaceProviderKeysRequest } from '';

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
  } satisfies ProviderKeysListWorkspaceProviderKeysRequest;

  try {
    const data = await api.providerKeysListWorkspaceProviderKeys(body);
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


## providerKeysRemoveWorkspaceProviderKeyModelRestriction

> Message providerKeysRemoveWorkspaceProviderKeyModelRestriction(workspaceId, keyId, model)

Remove Workspace Provider Key Model Restriction

Remove one model from this workspace\&#39;s allow-list for a key. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysRemoveWorkspaceProviderKeyModelRestrictionRequest } from '';

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
  } satisfies ProviderKeysRemoveWorkspaceProviderKeyModelRestrictionRequest;

  try {
    const data = await api.providerKeysRemoveWorkspaceProviderKeyModelRestriction(body);
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


## providerKeysResetWorkspaceProviderKeyOverride

> Message providerKeysResetWorkspaceProviderKeyOverride(workspaceId, keyId)

Reset Workspace Provider Key Override

Remove this workspace\&#39;s override, reverting to full inheritance. Idempotent.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysResetWorkspaceProviderKeyOverrideRequest } from '';

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
  } satisfies ProviderKeysResetWorkspaceProviderKeyOverrideRequest;

  try {
    const data = await api.providerKeysResetWorkspaceProviderKeyOverride(body);
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


## providerKeysRestoreOrgProviderKey

> OrgProviderKeyPublic providerKeysRestoreOrgProviderKey(keyId)

Restore Org Provider Key

Restore an archived key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysRestoreOrgProviderKeyRequest } from '';

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
  } satisfies ProviderKeysRestoreOrgProviderKeyRequest;

  try {
    const data = await api.providerKeysRestoreOrgProviderKey(body);
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


## providerKeysSetOrgProviderKeyDefault

> OrgProviderKeyPublic providerKeysSetOrgProviderKeyDefault(keyId)

Set Org Provider Key Default

Make a key the organization\&#39;s default for its provider. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysSetOrgProviderKeyDefaultRequest } from '';

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
  } satisfies ProviderKeysSetOrgProviderKeyDefaultRequest;

  try {
    const data = await api.providerKeysSetOrgProviderKeyDefault(body);
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


## providerKeysSetWorkspaceProviderKeyOverride

> WorkspaceProviderKeyOverridePublic providerKeysSetWorkspaceProviderKeyOverride(workspaceId, keyId, workspaceProviderKeyOverrideRequest)

Set Workspace Provider Key Override

Pin or disable a key for this workspace. Organization owners/admins or this workspace\&#39;s owners/admins.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysSetWorkspaceProviderKeyOverrideRequest } from '';

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
  } satisfies ProviderKeysSetWorkspaceProviderKeyOverrideRequest;

  try {
    const data = await api.providerKeysSetWorkspaceProviderKeyOverride(body);
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


## providerKeysUpdateOrgProviderKey

> OrgProviderKeyPublic providerKeysUpdateOrgProviderKey(keyId, orgProviderKeyUpdateRequest)

Update Org Provider Key

Change a key\&#39;s name, credential, base URL, or client args. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysUpdateOrgProviderKeyRequest } from '';

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
  } satisfies ProviderKeysUpdateOrgProviderKeyRequest;

  try {
    const data = await api.providerKeysUpdateOrgProviderKey(body);
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

