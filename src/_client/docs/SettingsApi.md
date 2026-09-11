# SettingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**settingsGetMailSettings**](SettingsApi.md#settingsgetmailsettings) | **GET** /api/v1/settings/mail | Get Mail Settings |
| [**settingsGetMaintenanceMode**](SettingsApi.md#settingsgetmaintenancemode) | **GET** /api/v1/settings/maintenance-mode | Get Maintenance Mode |
| [**settingsGetSettings**](SettingsApi.md#settingsgetsettings) | **GET** /api/v1/settings | Get Settings |
| [**settingsRotateMasterKey**](SettingsApi.md#settingsrotatemasterkey) | **POST** /api/v1/settings/master-key/rotate | Rotate Master Key |
| [**settingsSendTestMail**](SettingsApi.md#settingssendtestmail) | **POST** /api/v1/settings/mail/test | Send Test Mail |
| [**settingsUpdateMaintenanceMode**](SettingsApi.md#settingsupdatemaintenancemode) | **PATCH** /api/v1/settings/maintenance-mode | Update Maintenance Mode |
| [**settingsUpdateSettings**](SettingsApi.md#settingsupdatesettings) | **PATCH** /api/v1/settings | Update Settings |



## settingsGetMailSettings

> MailSettings settingsGetMailSettings()

Get Mail Settings

Report the effective outgoing-mail configuration.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsGetMailSettingsRequest } from '';

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
    const data = await api.settingsGetMailSettings();
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

[**MailSettings**](MailSettings.md)

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


## settingsGetMaintenanceMode

> MaintenanceMode settingsGetMaintenanceMode()

Get Maintenance Mode

Report whether new dashboard sign-ins are frozen.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsGetMaintenanceModeRequest } from '';

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
    const data = await api.settingsGetMaintenanceMode();
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

[**MaintenanceMode**](MaintenanceMode.md)

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


## settingsGetSettings

> GatewaySettings settingsGetSettings()

Get Settings

Return non-secret runtime settings for the admin dashboard.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsGetSettingsRequest } from '';

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
    const data = await api.settingsGetSettings();
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


## settingsRotateMasterKey

> RotateMasterKeyResponse settingsRotateMasterKey()

Rotate Master Key

Regenerate the database-backed master key and invalidate the old one.  Only the first-run generated master key can be rotated here. When a master key is supplied through config or &#x60;&#x60;OTARI_MASTER_KEY&#x60;&#x60;, the dashboard cannot invalidate it; the operator must change that value and restart instead.  Every dashboard session is revoked with the rotation (a session only proves possession of the now-dead key); the caller\&#39;s own session is re-minted under the new key, for the same identity it named, so the tab that performed the rotation stays signed in as who it was. A caller that authenticated with a header key has no session identity to re-mint for, so it is not handed one: it was not signed in to the dashboard to begin with.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsRotateMasterKeyRequest } from '';

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
    const data = await api.settingsRotateMasterKey();
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


## settingsSendTestMail

> SendTestMailResponse settingsSendTestMail(sendTestMailRequest)

Send Test Mail

Send one templated test message to prove the configuration works.  Refuses with 503 when the deployment cannot send a linked message, naming the missing settings; the dashboard disables the control in that state, so reaching this is a direct API call or a race with a configuration change.  The recipient is the only caller-supplied value: the body is a fixed template, so this cannot be used to put chosen text in someone\&#39;s inbox from the deployment\&#39;s own address, and the message says outright that no account was created for whoever receives it.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsSendTestMailRequest } from '';

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
    // SendTestMailRequest
    sendTestMailRequest: ...,
  } satisfies SettingsSendTestMailRequest;

  try {
    const data = await api.settingsSendTestMail(body);
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
| **sendTestMailRequest** | [SendTestMailRequest](SendTestMailRequest.md) |  | |

### Return type

[**SendTestMailResponse**](SendTestMailResponse.md)

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


## settingsUpdateMaintenanceMode

> MaintenanceMode settingsUpdateMaintenanceMode(updateMaintenanceModeRequest)

Update Maintenance Mode

Freeze or unfreeze dashboard sign-ins, for this and every other replica.  The new state is persisted and nothing is applied to the running worker, because every reader goes back to the stored row. That is what makes one call enough for a deployment running more than one of them.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsUpdateMaintenanceModeRequest } from '';

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
    // UpdateMaintenanceModeRequest
    updateMaintenanceModeRequest: ...,
  } satisfies SettingsUpdateMaintenanceModeRequest;

  try {
    const data = await api.settingsUpdateMaintenanceMode(body);
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
| **updateMaintenanceModeRequest** | [UpdateMaintenanceModeRequest](UpdateMaintenanceModeRequest.md) |  | |

### Return type

[**MaintenanceMode**](MaintenanceMode.md)

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


## settingsUpdateSettings

> GatewaySettings settingsUpdateSettings(updateSettingsRequest)

Update Settings

Persist and apply runtime setting changes.  Each provided field is stored as an override (winning over config/env) and applied to the running gateway immediately. Operator-gated: these change how the gateway meters and lists models.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { SettingsUpdateSettingsRequest } from '';

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
  } satisfies SettingsUpdateSettingsRequest;

  try {
    const data = await api.settingsUpdateSettings(body);
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

