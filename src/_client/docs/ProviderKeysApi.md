# ProviderKeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**providerKeysAddOrgProviderKeyModel**](ProviderKeysApi.md#providerkeysaddorgproviderkeymodel) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/models | Add Org Provider Key Model |
| [**providerKeysAddWorkspaceProviderKeyModelRestriction**](ProviderKeysApi.md#providerkeysaddworkspaceproviderkeymodelrestriction) | **POST** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | Add Workspace Provider Key Model Restriction |
| [**providerKeysArchiveOrgProviderKey**](ProviderKeysApi.md#providerkeysarchiveorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/archive | Archive Org Provider Key |
| [**providerKeysCreateOrgProviderKey**](ProviderKeysApi.md#providerkeyscreateorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys | Create Org Provider Key |
| [**providerKeysDeleteOrgProviderKey**](ProviderKeysApi.md#providerkeysdeleteorgproviderkey) | **DELETE** /api/v1/organizations/me/provider-keys/{key_id} | Delete Org Provider Key |
| [**providerKeysListOrgProviderKeyAvailableModels**](ProviderKeysApi.md#providerkeyslistorgproviderkeyavailablemodels) | **GET** /api/v1/organizations/me/provider-keys/{key_id}/available-models | List Org Provider Key Available Models |
| [**providerKeysListOrgProviderKeyModels**](ProviderKeysApi.md#providerkeyslistorgproviderkeymodels) | **GET** /api/v1/organizations/me/provider-keys/{key_id}/models | List Org Provider Key Models |
| [**providerKeysListOrgProviderKeys**](ProviderKeysApi.md#providerkeyslistorgproviderkeys) | **GET** /api/v1/organizations/me/provider-keys | List Org Provider Keys |
| [**providerKeysListWorkspaceProviderKeyModelRestrictions**](ProviderKeysApi.md#providerkeyslistworkspaceproviderkeymodelrestrictions) | **GET** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models | List Workspace Provider Key Model Restrictions |
| [**providerKeysListWorkspaceProviderKeys**](ProviderKeysApi.md#providerkeyslistworkspaceproviderkeys) | **GET** /api/v1/workspaces/{workspace_id}/provider-keys | List Workspace Provider Keys |
| [**providerKeysRefreshOrgProviderKeyModelPricing**](ProviderKeysApi.md#providerkeysrefreshorgproviderkeymodelpricing) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/pricing/refresh | Refresh Org Provider Key Model Pricing |
| [**providerKeysRefreshOrgProviderKeyModels**](ProviderKeysApi.md#providerkeysrefreshorgproviderkeymodels) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/models/refresh | Refresh Org Provider Key Models |
| [**providerKeysRemoveOrgProviderKeyModel**](ProviderKeysApi.md#providerkeysremoveorgproviderkeymodel) | **DELETE** /api/v1/organizations/me/provider-keys/{key_id}/models/{model_id} | Remove Org Provider Key Model |
| [**providerKeysRemoveWorkspaceProviderKeyModelRestriction**](ProviderKeysApi.md#providerkeysremoveworkspaceproviderkeymodelrestriction) | **DELETE** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id}/models/{model} | Remove Workspace Provider Key Model Restriction |
| [**providerKeysResetWorkspaceProviderKeyOverride**](ProviderKeysApi.md#providerkeysresetworkspaceproviderkeyoverride) | **DELETE** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id} | Reset Workspace Provider Key Override |
| [**providerKeysRestoreOrgProviderKey**](ProviderKeysApi.md#providerkeysrestoreorgproviderkey) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/restore | Restore Org Provider Key |
| [**providerKeysSetOrgProviderKeyDefault**](ProviderKeysApi.md#providerkeyssetorgproviderkeydefault) | **POST** /api/v1/organizations/me/provider-keys/{key_id}/default | Set Org Provider Key Default |
| [**providerKeysSetOrgProviderKeyModelEnabled**](ProviderKeysApi.md#providerkeyssetorgproviderkeymodelenabled) | **PATCH** /api/v1/organizations/me/provider-keys/{key_id}/models/{model_id} | Set Org Provider Key Model Enabled |
| [**providerKeysSetWorkspaceProviderKeyOverride**](ProviderKeysApi.md#providerkeyssetworkspaceproviderkeyoverride) | **PATCH** /api/v1/workspaces/{workspace_id}/provider-keys/{key_id} | Set Workspace Provider Key Override |
| [**providerKeysUpdateOrgProviderKey**](ProviderKeysApi.md#providerkeysupdateorgproviderkey) | **PATCH** /api/v1/organizations/me/provider-keys/{key_id} | Update Org Provider Key |



## providerKeysAddOrgProviderKeyModel

> OrgProviderKeyModelPublic providerKeysAddOrgProviderKeyModel(keyId, orgProviderKeyModelCreateRequest)

Add Org Provider Key Model

Offer one model by name, for a backend whose models cannot be listed.  Carries no rate: an organization\&#39;s rates are written through &#x60;&#x60;/api/v1/organizations/me/pricing&#x60;&#x60;, so a price set here and a price set there could not disagree about what a request costs. The offer seeds the community default like any other, and a model nothing prices arrives disabled. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysAddOrgProviderKeyModelRequest } from '';

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
    // OrgProviderKeyModelCreateRequest
    orgProviderKeyModelCreateRequest: ...,
  } satisfies ProviderKeysAddOrgProviderKeyModelRequest;

  try {
    const data = await api.providerKeysAddOrgProviderKeyModel(body);
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
| **orgProviderKeyModelCreateRequest** | [OrgProviderKeyModelCreateRequest](OrgProviderKeyModelCreateRequest.md) |  | |

### Return type

[**OrgProviderKeyModelPublic**](OrgProviderKeyModelPublic.md)

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

Create a provider key in the caller\&#39;s organization. Organization owners and admins only.  Everything the provider lists on the new credential is offered at once, so a key starts with its real catalog rather than an empty list an admin retypes by hand. A provider that will not say (no listing endpoint, unreachable, credential refused) yields a key with no models rather than a failed create: the credential may still be right for dispatch, and models can be added by name. The response is the key either way; the models are read back through &#x60;&#x60;GET /{key_id}/models&#x60;&#x60;.

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


## providerKeysListOrgProviderKeyAvailableModels

> OrgProviderAvailableModelsPublic providerKeysListOrgProviderKeyAvailableModels(keyId)

List Org Provider Key Available Models

Ask the provider what it serves on this key\&#39;s stored credential.  Dials the upstream on every call rather than caching: the caller is a model picker, opened rarely and entitled to a current answer. The credential never leaves the process; only model names come back. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysListOrgProviderKeyAvailableModelsRequest } from '';

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
  } satisfies ProviderKeysListOrgProviderKeyAvailableModelsRequest;

  try {
    const data = await api.providerKeysListOrgProviderKeyAvailableModels(body);
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

[**OrgProviderAvailableModelsPublic**](OrgProviderAvailableModelsPublic.md)

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


## providerKeysListOrgProviderKeyModels

> OrgProviderKeyModelsPublic providerKeysListOrgProviderKeyModels(keyId, skip, limit)

List Org Provider Key Models

List the models offered on one key, each with the rate it currently serves at.  Organization owners and admins only. &#x60;&#x60;count&#x60;&#x60; is the total rather than the page length, so a client knows whether another page is owed.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysListOrgProviderKeyModelsRequest } from '';

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
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ProviderKeysListOrgProviderKeyModelsRequest;

  try {
    const data = await api.providerKeysListOrgProviderKeyModels(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `500`] |

### Return type

[**OrgProviderKeyModelsPublic**](OrgProviderKeyModelsPublic.md)

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


## providerKeysRefreshOrgProviderKeyModelPricing

> OrgProviderModelsRefreshPublic providerKeysRefreshOrgProviderKeyModelPricing(keyId)

Refresh Org Provider Key Model Pricing

Move every rate this surface seeded onto today\&#39;s community default.  The other half of the refresh above, without the dial: re-reading community rates is cheap and asking a provider for its whole catalog is not, so an admin who only wants the price move does not wait on an upstream. A rate an admin has since set is left alone, and a model that arrived unpriced is offered a rate and switched on if one has appeared. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysRefreshOrgProviderKeyModelPricingRequest } from '';

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
  } satisfies ProviderKeysRefreshOrgProviderKeyModelPricingRequest;

  try {
    const data = await api.providerKeysRefreshOrgProviderKeyModelPricing(body);
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

[**OrgProviderModelsRefreshPublic**](OrgProviderModelsRefreshPublic.md)

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


## providerKeysRefreshOrgProviderKeyModels

> OrgProviderModelsRefreshPublic providerKeysRefreshOrgProviderKeyModels(keyId)

Refresh Org Provider Key Models

Ask the provider again and offer whatever is newly listed.  Additive only: nothing already offered is removed or switched off, because delisting a model is a decision the serving switch owns and an upstream hiccup must not empty a catalog. New models follow the offer rule, seeded with the community default rate and disabled when nothing prices them. A rate this surface seeded and nobody has changed moves to today\&#39;s default. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysRefreshOrgProviderKeyModelsRequest } from '';

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
  } satisfies ProviderKeysRefreshOrgProviderKeyModelsRequest;

  try {
    const data = await api.providerKeysRefreshOrgProviderKeyModels(body);
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

[**OrgProviderModelsRefreshPublic**](OrgProviderModelsRefreshPublic.md)

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


## providerKeysRemoveOrgProviderKeyModel

> Message providerKeysRemoveOrgProviderKeyModel(keyId, modelId)

Remove Org Provider Key Model

Stop offering one model. Its rate and its history stay. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysRemoveOrgProviderKeyModelRequest } from '';

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
    // string
    modelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ProviderKeysRemoveOrgProviderKeyModelRequest;

  try {
    const data = await api.providerKeysRemoveOrgProviderKeyModel(body);
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
| **modelId** | `string` |  | [Defaults to `undefined`] |

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


## providerKeysSetOrgProviderKeyModelEnabled

> OrgProviderKeyModelPublic providerKeysSetOrgProviderKeyModelEnabled(keyId, modelId, orgProviderKeyModelUpdateRequest)

Set Org Provider Key Model Enabled

Turn one offered model\&#39;s serving switch on or off. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ProviderKeysApi,
} from '';
import type { ProviderKeysSetOrgProviderKeyModelEnabledRequest } from '';

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
    // string
    modelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrgProviderKeyModelUpdateRequest
    orgProviderKeyModelUpdateRequest: ...,
  } satisfies ProviderKeysSetOrgProviderKeyModelEnabledRequest;

  try {
    const data = await api.providerKeysSetOrgProviderKeyModelEnabled(body);
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
| **modelId** | `string` |  | [Defaults to `undefined`] |
| **orgProviderKeyModelUpdateRequest** | [OrgProviderKeyModelUpdateRequest](OrgProviderKeyModelUpdateRequest.md) |  | |

### Return type

[**OrgProviderKeyModelPublic**](OrgProviderKeyModelPublic.md)

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

