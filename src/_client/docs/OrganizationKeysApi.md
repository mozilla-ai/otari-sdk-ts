# OrganizationKeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOwnKeyV1OrganizationsMeKeysPost**](OrganizationKeysApi.md#createownkeyv1organizationsmekeyspost) | **POST** /v1/organizations/me/keys | Create Own Key |
| [**deleteOwnKeyV1OrganizationsMeKeysKeyIdDelete**](OrganizationKeysApi.md#deleteownkeyv1organizationsmekeyskeyiddelete) | **DELETE** /v1/organizations/me/keys/{key_id} | Delete Own Key |
| [**listOwnKeysV1OrganizationsMeKeysGet**](OrganizationKeysApi.md#listownkeysv1organizationsmekeysget) | **GET** /v1/organizations/me/keys | List Own Keys |
| [**rotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePost**](OrganizationKeysApi.md#rotateownkeyv1organizationsmekeyskeyidrotatepost) | **POST** /v1/organizations/me/keys/{key_id}/rotate | Rotate Own Key |
| [**updateOwnKeyV1OrganizationsMeKeysKeyIdPatch**](OrganizationKeysApi.md#updateownkeyv1organizationsmekeyskeyidpatch) | **PATCH** /v1/organizations/me/keys/{key_id} | Update Own Key |



## createOwnKeyV1OrganizationsMeKeysPost

> CreateKeyResponse createOwnKeyV1OrganizationsMeKeysPost(createOwnKeyRequest)

Create Own Key

Create an API key owned by the caller, in a workspace they may see.  The member-scoped counterpart of &#x60;&#x60;POST /v1/keys&#x60;&#x60;: the owner is always the caller\&#39;s own attribution user, the key is always budget-enforced, and the workspace must be visible to the caller (a member of it, or an organization owner/admin/superuser, who see every workspace). The secret is returned once.

### Example

```ts
import {
  Configuration,
  OrganizationKeysApi,
} from '';
import type { CreateOwnKeyV1OrganizationsMeKeysPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationKeysApi(config);

  const body = {
    // CreateOwnKeyRequest
    createOwnKeyRequest: ...,
  } satisfies CreateOwnKeyV1OrganizationsMeKeysPostRequest;

  try {
    const data = await api.createOwnKeyV1OrganizationsMeKeysPost(body);
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
| **createOwnKeyRequest** | [CreateOwnKeyRequest](CreateOwnKeyRequest.md) |  | |

### Return type

[**CreateKeyResponse**](CreateKeyResponse.md)

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


## deleteOwnKeyV1OrganizationsMeKeysKeyIdDelete

> deleteOwnKeyV1OrganizationsMeKeysKeyIdDelete(keyId)

Delete Own Key

Delete (revoke) one of the caller\&#39;s own API keys.

### Example

```ts
import {
  Configuration,
  OrganizationKeysApi,
} from '';
import type { DeleteOwnKeyV1OrganizationsMeKeysKeyIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationKeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies DeleteOwnKeyV1OrganizationsMeKeysKeyIdDeleteRequest;

  try {
    const data = await api.deleteOwnKeyV1OrganizationsMeKeysKeyIdDelete(body);
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


## listOwnKeysV1OrganizationsMeKeysGet

> Array&lt;KeyInfo&gt; listOwnKeysV1OrganizationsMeKeysGet(skip, limit, workspaceId)

List Own Keys

List the caller\&#39;s own API keys in their active organization, newest first.  Only keys billed to the caller\&#39;s own user: an operator-minted key assigned to them is theirs to see here, and nobody else\&#39;s key ever is. Naming a workspace outside their organization lists nothing rather than refusing, so the filter reports no more than the unfiltered read does.

### Example

```ts
import {
  Configuration,
  OrganizationKeysApi,
} from '';
import type { ListOwnKeysV1OrganizationsMeKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationKeysApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only keys in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListOwnKeysV1OrganizationsMeKeysGetRequest;

  try {
    const data = await api.listOwnKeysV1OrganizationsMeKeysGet(body);
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
| **workspaceId** | `string` | Only keys in this workspace. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;KeyInfo&gt;**](KeyInfo.md)

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


## rotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePost

> CreateKeyResponse rotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePost(keyId)

Rotate Own Key

Rotate the secret of one of the caller\&#39;s own API keys, in place.  Same contract as the operator\&#39;s rotate: the row keeps its identity, the new raw key is returned once, and the previous secret stops authenticating immediately with no grace window.

### Example

```ts
import {
  Configuration,
  OrganizationKeysApi,
} from '';
import type { RotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationKeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies RotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePostRequest;

  try {
    const data = await api.rotateOwnKeyV1OrganizationsMeKeysKeyIdRotatePost(body);
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

[**CreateKeyResponse**](CreateKeyResponse.md)

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


## updateOwnKeyV1OrganizationsMeKeysKeyIdPatch

> KeyInfo updateOwnKeyV1OrganizationsMeKeysKeyIdPatch(keyId, updateOwnKeyRequest)

Update Own Key

Update one of the caller\&#39;s own API keys.

### Example

```ts
import {
  Configuration,
  OrganizationKeysApi,
} from '';
import type { UpdateOwnKeyV1OrganizationsMeKeysKeyIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationKeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // UpdateOwnKeyRequest
    updateOwnKeyRequest: ...,
  } satisfies UpdateOwnKeyV1OrganizationsMeKeysKeyIdPatchRequest;

  try {
    const data = await api.updateOwnKeyV1OrganizationsMeKeysKeyIdPatch(body);
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
| **updateOwnKeyRequest** | [UpdateOwnKeyRequest](UpdateOwnKeyRequest.md) |  | |

### Return type

[**KeyInfo**](KeyInfo.md)

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

