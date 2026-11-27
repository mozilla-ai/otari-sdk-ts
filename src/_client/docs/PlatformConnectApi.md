# PlatformConnectApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**platformConnectCancelPlatformConnect**](PlatformConnectApi.md#platformconnectcancelplatformconnect) | **DELETE** /api/v1/platform/connect | Cancel Platform Connect |
| [**platformConnectGetPlatformConnect**](PlatformConnectApi.md#platformconnectgetplatformconnect) | **GET** /api/v1/platform/connect | Get Platform Connect |
| [**platformConnectStartPlatformConnect**](PlatformConnectApi.md#platformconnectstartplatformconnect) | **POST** /api/v1/platform/connect | Start Platform Connect |



## platformConnectCancelPlatformConnect

> platformConnectCancelPlatformConnect()

Cancel Platform Connect

Forget the current attempt. A stored &#x60;&#x60;otari-ai&#x60;&#x60; provider is left as it is.

### Example

```ts
import {
  Configuration,
  PlatformConnectApi,
} from '';
import type { PlatformConnectCancelPlatformConnectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformConnectApi(config);

  try {
    const data = await api.platformConnectCancelPlatformConnect();
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

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## platformConnectGetPlatformConnect

> PlatformConnectStatusPublic platformConnectGetPlatformConnect()

Get Platform Connect

Where the connection stands: idle, pending, connected, expired or denied.  While pending, a read asks otari.ai whether the code was approved, at most once per the interval otari.ai gave. On approval the &#x60;&#x60;otari-ai&#x60;&#x60; hosted provider is stored with the issued key, its models are listed, and the status reads connected.

### Example

```ts
import {
  Configuration,
  PlatformConnectApi,
} from '';
import type { PlatformConnectGetPlatformConnectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformConnectApi(config);

  try {
    const data = await api.platformConnectGetPlatformConnect();
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

[**PlatformConnectStatusPublic**](PlatformConnectStatusPublic.md)

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


## platformConnectStartPlatformConnect

> PlatformConnectStartPublic platformConnectStartPlatformConnect()

Start Platform Connect

Ask otari.ai for a code to approve, and return the code and the page that approves it.  This is the first request this deployment sends to otari.ai. While an attempt is pending it is returned as it stands, and otari.ai is not asked again. The provider a connection stores is kept to the caller\&#39;s organization.

### Example

```ts
import {
  Configuration,
  PlatformConnectApi,
} from '';
import type { PlatformConnectStartPlatformConnectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformConnectApi(config);

  try {
    const data = await api.platformConnectStartPlatformConnect();
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

[**PlatformConnectStartPublic**](PlatformConnectStartPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **429** | Too many attempts. Retry-After gives the wait in seconds. |  -  |
| **503** | otari.ai could not be reached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

