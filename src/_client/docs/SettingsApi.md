# SettingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSettingsV1SettingsGet**](SettingsApi.md#getsettingsv1settingsget) | **GET** /v1/settings | Get Settings |
| [**rotateMasterKeyV1SettingsMasterKeyRotatePost**](SettingsApi.md#rotatemasterkeyv1settingsmasterkeyrotatepost) | **POST** /v1/settings/master-key/rotate | Rotate Master Key |
| [**updateSettingsV1SettingsPatch**](SettingsApi.md#updatesettingsv1settingspatch) | **PATCH** /v1/settings | Update Settings |



## getSettingsV1SettingsGet

> GatewaySettings getSettingsV1SettingsGet()

Get Settings

Return non-secret runtime settings for the admin dashboard.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { GetSettingsV1SettingsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SettingsApi(config);

  try {
    const data = await api.getSettingsV1SettingsGet();
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

[**GatewaySettings**](GatewaySettings.md)

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


## rotateMasterKeyV1SettingsMasterKeyRotatePost

> RotateMasterKeyResponse rotateMasterKeyV1SettingsMasterKeyRotatePost()

Rotate Master Key

Regenerate the database-backed master key and invalidate the old one.  Only the first-run generated master key can be rotated here. When a master key is supplied through config or &#x60;&#x60;OTARI_MASTER_KEY&#x60;&#x60;, the dashboard cannot invalidate it; the operator must change that value and restart instead.  Every dashboard session is revoked with the rotation (a session only proves possession of the now-dead key); the caller\&#39;s own session is re-minted under the new key so the tab that performed the rotation stays signed in.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { RotateMasterKeyV1SettingsMasterKeyRotatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SettingsApi(config);

  try {
    const data = await api.rotateMasterKeyV1SettingsMasterKeyRotatePost();
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

[**RotateMasterKeyResponse**](RotateMasterKeyResponse.md)

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


## updateSettingsV1SettingsPatch

> GatewaySettings updateSettingsV1SettingsPatch(updateSettingsRequest)

Update Settings

Persist and apply runtime setting changes.  Each provided field is stored as an override (winning over config/env) and applied to the running gateway immediately. Master-key gated: these change how the gateway meters and lists models.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { UpdateSettingsV1SettingsPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SettingsApi(config);

  const body = {
    // UpdateSettingsRequest
    updateSettingsRequest: ...,
  } satisfies UpdateSettingsV1SettingsPatchRequest;

  try {
    const data = await api.updateSettingsV1SettingsPatch(body);
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
| **updateSettingsRequest** | [UpdateSettingsRequest](UpdateSettingsRequest.md) |  | |

### Return type

[**GatewaySettings**](GatewaySettings.md)

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

