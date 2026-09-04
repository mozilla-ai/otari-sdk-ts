# AliasesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAliasV1AliasesNameDelete**](AliasesApi.md#deletealiasv1aliasesnamedelete) | **DELETE** /v1/aliases/{name} | Delete Alias |
| [**deleteOrganizationAliasV1OrganizationsMeAliasesNameDelete**](AliasesApi.md#deleteorganizationaliasv1organizationsmealiasesnamedelete) | **DELETE** /v1/organizations/me/aliases/{name} | Delete Organization Alias |
| [**listAliasesV1AliasesGet**](AliasesApi.md#listaliasesv1aliasesget) | **GET** /v1/aliases | List Aliases |
| [**listVisibleAliasesV1OrganizationsMeAliasesGet**](AliasesApi.md#listvisiblealiasesv1organizationsmealiasesget) | **GET** /v1/organizations/me/aliases | List Visible Aliases |
| [**setAliasV1AliasesPost**](AliasesApi.md#setaliasv1aliasespost) | **POST** /v1/aliases | Set Alias |
| [**setOrganizationAliasV1OrganizationsMeAliasesPost**](AliasesApi.md#setorganizationaliasv1organizationsmealiasespost) | **POST** /v1/organizations/me/aliases | Set Organization Alias |



## deleteAliasV1AliasesNameDelete

> deleteAliasV1AliasesNameDelete(name, userId, workspaceId)

Delete Alias

Delete a stored alias in one scope.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { DeleteAliasV1AliasesNameDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // string
    name: name_example,
    // string | Delete the alias scoped to this user. Omit to delete the workspace-wide alias of that name. (optional)
    userId: userId_example,
    // string | Delete the alias in this workspace. Omit for the deployment\'s default workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteAliasV1AliasesNameDeleteRequest;

  try {
    const data = await api.deleteAliasV1AliasesNameDelete(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` | Delete the alias scoped to this user. Omit to delete the workspace-wide alias of that name. | [Optional] [Defaults to `undefined`] |
| **workspaceId** | `string` | Delete the alias in this workspace. Omit for the deployment\&#39;s default workspace. | [Optional] [Defaults to `undefined`] |

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


## deleteOrganizationAliasV1OrganizationsMeAliasesNameDelete

> deleteOrganizationAliasV1OrganizationsMeAliasesNameDelete(name, workspaceId)

Delete Organization Alias

Delete a stored alias from one of the organization\&#39;s workspaces. Owners and admins only.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { DeleteOrganizationAliasV1OrganizationsMeAliasesNameDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // string
    name: name_example,
    // string | Delete the alias in this workspace of the caller\'s organization. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOrganizationAliasV1OrganizationsMeAliasesNameDeleteRequest;

  try {
    const data = await api.deleteOrganizationAliasV1OrganizationsMeAliasesNameDelete(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **workspaceId** | `string` | Delete the alias in this workspace of the caller\&#39;s organization. | [Optional] [Defaults to `undefined`] |

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


## listAliasesV1AliasesGet

> Array&lt;AliasResponse&gt; listAliasesV1AliasesGet(workspaceId)

List Aliases

List every alias in force, from config.yml and from storage.  Every scope at once, workspace-wide and user-scoped alike: this is the master-key management view, not what any one caller resolves.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { ListAliasesV1AliasesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // string | Only stored entries in this workspace. Config-file entries are always included, being deployment-wide. Omit to list the stored entries of every workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListAliasesV1AliasesGetRequest;

  try {
    const data = await api.listAliasesV1AliasesGet(body);
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
| **workspaceId** | `string` | Only stored entries in this workspace. Config-file entries are always included, being deployment-wide. Omit to list the stored entries of every workspace. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;AliasResponse&gt;**](AliasResponse.md)

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


## listVisibleAliasesV1OrganizationsMeAliasesGet

> Array&lt;AliasResponse&gt; listVisibleAliasesV1OrganizationsMeAliasesGet(limit)

List Visible Aliases

List the aliases in force in the workspaces this caller may see.  The policies list\&#39;s sibling, over &#x60;&#x60;model_aliases&#x60;&#x60;, and scoped the same way: stored rows from the caller\&#39;s visible workspaces, plus the config-file aliases, which are deployment-wide.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { ListVisibleAliasesV1OrganizationsMeAliasesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // number | Maximum entries to return, stored and config-file together. (optional)
    limit: 56,
  } satisfies ListVisibleAliasesV1OrganizationsMeAliasesGetRequest;

  try {
    const data = await api.listVisibleAliasesV1OrganizationsMeAliasesGet(body);
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
| **limit** | `number` | Maximum entries to return, stored and config-file together. | [Optional] [Defaults to `1000`] |

### Return type

[**Array&lt;AliasResponse&gt;**](AliasResponse.md)

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


## setAliasV1AliasesPost

> AliasResponse setAliasV1AliasesPost(aliasRequest)

Set Alias

Create or update a stored alias in one workspace, optionally for one user.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { SetAliasV1AliasesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // AliasRequest
    aliasRequest: ...,
  } satisfies SetAliasV1AliasesPostRequest;

  try {
    const data = await api.setAliasV1AliasesPost(body);
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
| **aliasRequest** | [AliasRequest](AliasRequest.md) |  | |

### Return type

[**AliasResponse**](AliasResponse.md)

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


## setOrganizationAliasV1OrganizationsMeAliasesPost

> AliasResponse setOrganizationAliasV1OrganizationsMeAliasesPost(aliasRequest)

Set Organization Alias

Create or update a stored alias in one of the organization\&#39;s workspaces.  Organization owners and admins only, with the same two scope rules the policy write has: &#x60;&#x60;workspace_id&#x60;&#x60; is required and resolved inside the caller\&#39;s organization, and &#x60;&#x60;user_id&#x60;&#x60; is not accepted.

### Example

```ts
import {
  Configuration,
  AliasesApi,
} from '';
import type { SetOrganizationAliasV1OrganizationsMeAliasesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AliasesApi(config);

  const body = {
    // AliasRequest
    aliasRequest: ...,
  } satisfies SetOrganizationAliasV1OrganizationsMeAliasesPostRequest;

  try {
    const data = await api.setOrganizationAliasV1OrganizationsMeAliasesPost(body);
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
| **aliasRequest** | [AliasRequest](AliasRequest.md) |  | |

### Return type

[**AliasResponse**](AliasResponse.md)

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

