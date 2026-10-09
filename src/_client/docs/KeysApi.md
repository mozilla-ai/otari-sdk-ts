# KeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**keysCreateKey**](KeysApi.md#keyscreatekey) | **POST** /api/v1/keys | Create Key |
| [**keysDeleteKey**](KeysApi.md#keysdeletekey) | **DELETE** /api/v1/keys/{key_id} | Delete Key |
| [**keysGetEndUser**](KeysApi.md#keysgetenduser) | **GET** /api/v1/keys/{key_id}/end-users/{external_id} | Get End User |
| [**keysGetKey**](KeysApi.md#keysgetkey) | **GET** /api/v1/keys/{key_id} | Get Key |
| [**keysListKeys**](KeysApi.md#keyslistkeys) | **GET** /api/v1/keys | List Keys |
| [**keysPutEndUser**](KeysApi.md#keysputenduser) | **PUT** /api/v1/keys/{key_id}/end-users/{external_id} | Put End User |
| [**keysRotateKey**](KeysApi.md#keysrotatekey) | **POST** /api/v1/keys/{key_id}/rotate | Rotate Key |
| [**keysUpdateEndUser**](KeysApi.md#keysupdateenduser) | **PATCH** /api/v1/keys/{key_id}/end-users/{external_id} | Update End User |
| [**keysUpdateKey**](KeysApi.md#keysupdatekey) | **PATCH** /api/v1/keys/{key_id} | Update Key |



## keysCreateKey

> CreateKeyResponse keysCreateKey(createKeyRequest)

Create Key

Create a new API key in the caller\&#39;s organization.  Requires master key authentication.  If user_id is provided, the key will be associated with that user (creates user if it doesn\&#39;t exist). If user_id is not provided, the key is associated with the shared \&quot;default\&quot; user, which is created on first use. Keys without an explicit owner therefore share one identity, and so share budget, usage, and files.  &#x60;&#x60;workspace_id&#x60;&#x60; names a workspace in the caller\&#39;s organization, and omitting it mints into that organization\&#39;s default workspace. A key resolves that organization\&#39;s provider credentials and bills there, so minting into another organization\&#39;s workspace would spend its budget on its credentials.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysCreateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // CreateKeyRequest
    createKeyRequest: ...,
  } satisfies KeysCreateKeyRequest;

  try {
    const data = await api.keysCreateKey(body);
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
| **createKeyRequest** | [CreateKeyRequest](CreateKeyRequest.md) |  | |

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


## keysDeleteKey

> keysDeleteKey(keyId)

Delete Key

Delete (revoke) an API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysDeleteKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysDeleteKeyRequest;

  try {
    const data = await api.keysDeleteKey(body);
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


## keysGetEndUser

> EndUserPublic keysGetEndUser(keyId, externalId)

Get End User

Get an end user of a service key by the id the service names it by.  End users belong to the key\&#39;s user, so every service key of one user reaches the same end users.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysGetEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
  } satisfies KeysGetEndUserRequest;

  try {
    const data = await api.keysGetEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## keysGetKey

> KeyInfo keysGetKey(keyId)

Get Key

Get details of a specific API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysGetKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysGetKeyRequest;

  try {
    const data = await api.keysGetKey(body);
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

[**KeyInfo**](KeyInfo.md)

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


## keysListKeys

> Array&lt;KeyInfo&gt; keysListKeys(skip, limit, workspaceId)

List Keys

List the API keys in the caller\&#39;s organization.  Requires master key authentication. An unset &#x60;&#x60;workspace_id&#x60;&#x60; lists every key in that organization; naming a workspace in another one lists nothing rather than refusing, so the filter reports no more than the unfiltered read does.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysListKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only keys in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies KeysListKeysRequest;

  try {
    const data = await api.keysListKeys(body);
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


## keysPutEndUser

> EndUserPublic keysPutEndUser(keyId, externalId, endUserPut)

Put End User

Put an end user of a service key on a budget from the key\&#39;s list, creating it if it does not exist yet.  Answers 201 when the end user was created, so one can be placed on a budget before its first request. An end user already on the budget keeps its current period, so repeating the call changes nothing. A budget that is not on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60; is refused with 403 and &#x60;&#x60;end_user_budget_not_allowed&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysPutEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserPut
    endUserPut: ...,
  } satisfies KeysPutEndUserRequest;

  try {
    const data = await api.keysPutEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserPut** | [EndUserPut](EndUserPut.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **201** | The end user was created |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## keysRotateKey

> CreateKeyResponse keysRotateKey(keyId)

Rotate Key

Rotate an API key\&#39;s secret in place, within the caller\&#39;s organization.  Requires master key authentication.  Generates a new secret for the same key row (id, user, name, expiry, and metadata are preserved) and returns the new raw key once, using the same response shape as key creation. The previous secret stops authenticating immediately; there is no grace window.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysRotateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysRotateKeyRequest;

  try {
    const data = await api.keysRotateKey(body);
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


## keysUpdateEndUser

> EndUserPublic keysUpdateEndUser(keyId, externalId, endUserUpdate)

Update End User

Block, unblock or move an end user of a service key.  A move restarts the end user\&#39;s period on the new budget but keeps what it has spent and used so far, as the users API does. The budget must be on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysUpdateEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserUpdate
    endUserUpdate: ...,
  } satisfies KeysUpdateEndUserRequest;

  try {
    const data = await api.keysUpdateEndUser(body);
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
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserUpdate** | [EndUserUpdate](EndUserUpdate.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## keysUpdateKey

> KeyInfo keysUpdateKey(keyId, updateKeyRequest)

Update Key

Update an API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysUpdateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // UpdateKeyRequest
    updateKeyRequest: ...,
  } satisfies KeysUpdateKeyRequest;

  try {
    const data = await api.keysUpdateKey(body);
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
| **updateKeyRequest** | [UpdateKeyRequest](UpdateKeyRequest.md) |  | |

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

