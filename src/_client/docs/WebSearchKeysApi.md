# WebSearchKeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**webSearchKeysArchiveOrgWebSearchKey**](WebSearchKeysApi.md#websearchkeysarchiveorgwebsearchkey) | **POST** /api/v1/organizations/me/web-search-keys/{key_id}/archive | Archive Org Web Search Key |
| [**webSearchKeysCreateOrgWebSearchKey**](WebSearchKeysApi.md#websearchkeyscreateorgwebsearchkey) | **POST** /api/v1/organizations/me/web-search-keys | Create Org Web Search Key |
| [**webSearchKeysDeleteOrgWebSearchKey**](WebSearchKeysApi.md#websearchkeysdeleteorgwebsearchkey) | **DELETE** /api/v1/organizations/me/web-search-keys/{key_id} | Delete Org Web Search Key |
| [**webSearchKeysListOrgWebSearchKeys**](WebSearchKeysApi.md#websearchkeyslistorgwebsearchkeys) | **GET** /api/v1/organizations/me/web-search-keys | List Org Web Search Keys |
| [**webSearchKeysListWorkspaceWebSearchKeys**](WebSearchKeysApi.md#websearchkeyslistworkspacewebsearchkeys) | **GET** /api/v1/workspaces/{workspace_id}/web-search-keys | List Workspace Web Search Keys |
| [**webSearchKeysResetWorkspaceWebSearchKeyOverride**](WebSearchKeysApi.md#websearchkeysresetworkspacewebsearchkeyoverride) | **DELETE** /api/v1/workspaces/{workspace_id}/web-search-keys/{key_id} | Reset Workspace Web Search Key Override |
| [**webSearchKeysRestoreOrgWebSearchKey**](WebSearchKeysApi.md#websearchkeysrestoreorgwebsearchkey) | **POST** /api/v1/organizations/me/web-search-keys/{key_id}/restore | Restore Org Web Search Key |
| [**webSearchKeysSetOrgDefaultWebSearchKey**](WebSearchKeysApi.md#websearchkeyssetorgdefaultwebsearchkey) | **POST** /api/v1/organizations/me/web-search-keys/{key_id}/default | Set Org Default Web Search Key |
| [**webSearchKeysSetWorkspaceWebSearchKeyOverride**](WebSearchKeysApi.md#websearchkeyssetworkspacewebsearchkeyoverride) | **PATCH** /api/v1/workspaces/{workspace_id}/web-search-keys/{key_id} | Set Workspace Web Search Key Override |
| [**webSearchKeysUpdateOrgWebSearchKey**](WebSearchKeysApi.md#websearchkeysupdateorgwebsearchkey) | **PATCH** /api/v1/organizations/me/web-search-keys/{key_id} | Update Org Web Search Key |



## webSearchKeysArchiveOrgWebSearchKey

> OrgWebSearchKeyPublic webSearchKeysArchiveOrgWebSearchKey(keyId)

Archive Org Web Search Key

Take a web search key out of use. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysArchiveOrgWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebSearchKeysArchiveOrgWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysArchiveOrgWebSearchKey(body);
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

[**OrgWebSearchKeyPublic**](OrgWebSearchKeyPublic.md)

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


## webSearchKeysCreateOrgWebSearchKey

> OrgWebSearchKeyPublic webSearchKeysCreateOrgWebSearchKey(orgWebSearchKeyCreateRequest)

Create Org Web Search Key

Add a web search key to the caller\&#39;s organization. Organization owners and admins only.  A workspace with a usable key searches with it rather than with the deployment\&#39;s search.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysCreateOrgWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // OrgWebSearchKeyCreateRequest
    orgWebSearchKeyCreateRequest: ...,
  } satisfies WebSearchKeysCreateOrgWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysCreateOrgWebSearchKey(body);
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
| **orgWebSearchKeyCreateRequest** | [OrgWebSearchKeyCreateRequest](OrgWebSearchKeyCreateRequest.md) |  | |

### Return type

[**OrgWebSearchKeyPublic**](OrgWebSearchKeyPublic.md)

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


## webSearchKeysDeleteOrgWebSearchKey

> webSearchKeysDeleteOrgWebSearchKey(keyId)

Delete Org Web Search Key

Delete an archived web search key. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysDeleteOrgWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebSearchKeysDeleteOrgWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysDeleteOrgWebSearchKey(body);
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


## webSearchKeysListOrgWebSearchKeys

> OrgWebSearchKeysPublic webSearchKeysListOrgWebSearchKeys(includeArchived, skip, limit)

List Org Web Search Keys

List the caller\&#39;s organization\&#39;s web search keys. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysListOrgWebSearchKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // boolean | Include archived keys. (optional)
    includeArchived: true,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies WebSearchKeysListOrgWebSearchKeysRequest;

  try {
    const data = await api.webSearchKeysListOrgWebSearchKeys(body);
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

[**OrgWebSearchKeysPublic**](OrgWebSearchKeysPublic.md)

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


## webSearchKeysListWorkspaceWebSearchKeys

> WorkspaceWebSearchKeysPublic webSearchKeysListWorkspaceWebSearchKeys(workspaceId, skip, limit)

List Workspace Web Search Keys

The organization\&#39;s web search keys as this workspace sees them, and which one it searches with.  Any member of the workspace may read it. &#x60;&#x60;is_effective&#x60;&#x60; is decided across every key, not only this page.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysListWorkspaceWebSearchKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies WebSearchKeysListWorkspaceWebSearchKeysRequest;

  try {
    const data = await api.webSearchKeysListWorkspaceWebSearchKeys(body);
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

[**WorkspaceWebSearchKeysPublic**](WorkspaceWebSearchKeysPublic.md)

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


## webSearchKeysResetWorkspaceWebSearchKeyOverride

> WorkspaceWebSearchKeysPublic webSearchKeysResetWorkspaceWebSearchKeyOverride(workspaceId, keyId)

Reset Workspace Web Search Key Override

Return this workspace to inheriting the key. Idempotent. Answers with the list\&#39;s first page.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysResetWorkspaceWebSearchKeyOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebSearchKeysResetWorkspaceWebSearchKeyOverrideRequest;

  try {
    const data = await api.webSearchKeysResetWorkspaceWebSearchKeyOverride(body);
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

[**WorkspaceWebSearchKeysPublic**](WorkspaceWebSearchKeysPublic.md)

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


## webSearchKeysRestoreOrgWebSearchKey

> OrgWebSearchKeyPublic webSearchKeysRestoreOrgWebSearchKey(keyId)

Restore Org Web Search Key

Put an archived web search key back in use. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysRestoreOrgWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebSearchKeysRestoreOrgWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysRestoreOrgWebSearchKey(body);
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

[**OrgWebSearchKeyPublic**](OrgWebSearchKeyPublic.md)

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


## webSearchKeysSetOrgDefaultWebSearchKey

> OrgWebSearchKeyPublic webSearchKeysSetOrgDefaultWebSearchKey(keyId)

Set Org Default Web Search Key

Make a web search key its provider\&#39;s organization default. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysSetOrgDefaultWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies WebSearchKeysSetOrgDefaultWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysSetOrgDefaultWebSearchKey(body);
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

[**OrgWebSearchKeyPublic**](OrgWebSearchKeyPublic.md)

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


## webSearchKeysSetWorkspaceWebSearchKeyOverride

> WorkspaceWebSearchKeysPublic webSearchKeysSetWorkspaceWebSearchKeyOverride(workspaceId, keyId, workspaceWebSearchKeyOverrideRequest)

Set Workspace Web Search Key Override

Pin a web search key as this workspace\&#39;s own, or turn it off for this workspace.  Organization owners and admins, or this workspace\&#39;s owners and admins. Answers with the list\&#39;s first page.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysSetWorkspaceWebSearchKeyOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkspaceWebSearchKeyOverrideRequest
    workspaceWebSearchKeyOverrideRequest: ...,
  } satisfies WebSearchKeysSetWorkspaceWebSearchKeyOverrideRequest;

  try {
    const data = await api.webSearchKeysSetWorkspaceWebSearchKeyOverride(body);
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
| **workspaceWebSearchKeyOverrideRequest** | [WorkspaceWebSearchKeyOverrideRequest](WorkspaceWebSearchKeyOverrideRequest.md) |  | |

### Return type

[**WorkspaceWebSearchKeysPublic**](WorkspaceWebSearchKeysPublic.md)

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


## webSearchKeysUpdateOrgWebSearchKey

> OrgWebSearchKeyPublic webSearchKeysUpdateOrgWebSearchKey(keyId, orgWebSearchKeyUpdateRequest)

Update Org Web Search Key

Rename a web search key or replace its secret. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  WebSearchKeysApi,
} from '';
import type { WebSearchKeysUpdateOrgWebSearchKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebSearchKeysApi(config);

  const body = {
    // string
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrgWebSearchKeyUpdateRequest
    orgWebSearchKeyUpdateRequest: ...,
  } satisfies WebSearchKeysUpdateOrgWebSearchKeyRequest;

  try {
    const data = await api.webSearchKeysUpdateOrgWebSearchKey(body);
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
| **orgWebSearchKeyUpdateRequest** | [OrgWebSearchKeyUpdateRequest](OrgWebSearchKeyUpdateRequest.md) |  | |

### Return type

[**OrgWebSearchKeyPublic**](OrgWebSearchKeyPublic.md)

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

