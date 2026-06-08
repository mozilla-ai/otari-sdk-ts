# KeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createKeyV1KeysPost**](KeysApi.md#createkeyv1keyspost) | **POST** /v1/keys | Create Key |
| [**deleteKeyV1KeysKeyIdDelete**](KeysApi.md#deletekeyv1keyskeyiddelete) | **DELETE** /v1/keys/{key_id} | Delete Key |
| [**getKeyV1KeysKeyIdGet**](KeysApi.md#getkeyv1keyskeyidget) | **GET** /v1/keys/{key_id} | Get Key |
| [**listKeysV1KeysGet**](KeysApi.md#listkeysv1keysget) | **GET** /v1/keys | List Keys |
| [**updateKeyV1KeysKeyIdPatch**](KeysApi.md#updatekeyv1keyskeyidpatch) | **PATCH** /v1/keys/{key_id} | Update Key |



## createKeyV1KeysPost

> CreateKeyResponse createKeyV1KeysPost(createKeyRequest)

Create Key

Create a new API key.  Requires master key authentication.  If user_id is provided, the key will be associated with that user (creates user if it doesn\&#39;t exist). If user_id is not provided, a new user will be created automatically and the key will be associated with it.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { CreateKeyV1KeysPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new KeysApi();

  const body = {
    // CreateKeyRequest
    createKeyRequest: ...,
  } satisfies CreateKeyV1KeysPostRequest;

  try {
    const data = await api.createKeyV1KeysPost(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteKeyV1KeysKeyIdDelete

> deleteKeyV1KeysKeyIdDelete(keyId)

Delete Key

Delete (revoke) an API key.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { DeleteKeyV1KeysKeyIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new KeysApi();

  const body = {
    // string
    keyId: keyId_example,
  } satisfies DeleteKeyV1KeysKeyIdDeleteRequest;

  try {
    const data = await api.deleteKeyV1KeysKeyIdDelete(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getKeyV1KeysKeyIdGet

> KeyInfo getKeyV1KeysKeyIdGet(keyId)

Get Key

Get details of a specific API key.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { GetKeyV1KeysKeyIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new KeysApi();

  const body = {
    // string
    keyId: keyId_example,
  } satisfies GetKeyV1KeysKeyIdGetRequest;

  try {
    const data = await api.getKeyV1KeysKeyIdGet(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listKeysV1KeysGet

> Array&lt;KeyInfo&gt; listKeysV1KeysGet(skip, limit)

List Keys

List all API keys.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { ListKeysV1KeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new KeysApi();

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListKeysV1KeysGetRequest;

  try {
    const data = await api.listKeysV1KeysGet(body);
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

### Return type

[**Array&lt;KeyInfo&gt;**](KeyInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateKeyV1KeysKeyIdPatch

> KeyInfo updateKeyV1KeysKeyIdPatch(keyId, updateKeyRequest)

Update Key

Update an API key.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { UpdateKeyV1KeysKeyIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new KeysApi();

  const body = {
    // string
    keyId: keyId_example,
    // UpdateKeyRequest
    updateKeyRequest: ...,
  } satisfies UpdateKeyV1KeysKeyIdPatchRequest;

  try {
    const data = await api.updateKeyV1KeysKeyIdPatch(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

