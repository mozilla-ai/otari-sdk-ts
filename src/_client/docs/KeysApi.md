# KeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**keysCreateKey**](KeysApi.md#keyscreatekey) | **POST** /api/v1/keys | Create Key |
| [**keysDeleteKey**](KeysApi.md#keysdeletekey) | **DELETE** /api/v1/keys/{key_id} | Delete Key |
| [**keysGetKey**](KeysApi.md#keysgetkey) | **GET** /api/v1/keys/{key_id} | Get Key |
| [**keysListKeys**](KeysApi.md#keyslistkeys) | **GET** /api/v1/keys | List Keys |
| [**keysRotateKey**](KeysApi.md#keysrotatekey) | **POST** /api/v1/keys/{key_id}/rotate | Rotate Key |
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

