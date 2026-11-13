# HealthChecksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthChecksDisableFailingModels**](HealthChecksApi.md#healthchecksdisablefailingmodels) | **POST** /api/v1/health-checks/disable-failing | Disable Failing Models |
| [**healthChecksGetHealthCheckSettings**](HealthChecksApi.md#healthchecksgethealthchecksettings) | **GET** /api/v1/health-checks/settings | Get Health Check Settings |
| [**healthChecksGetHealthCheckStatus**](HealthChecksApi.md#healthchecksgethealthcheckstatus) | **GET** /api/v1/health-checks | Get Health Check Status |
| [**healthChecksRunHealthChecks**](HealthChecksApi.md#healthchecksrunhealthchecks) | **POST** /api/v1/health-checks/run | Run Health Checks |
| [**healthChecksUpdateHealthCheckSettings**](HealthChecksApi.md#healthchecksupdatehealthchecksettings) | **PATCH** /api/v1/health-checks/settings | Update Health Check Settings |



## healthChecksDisableFailingModels

> HealthCheckDisabled healthChecksDisableFailingModels()

Disable Failing Models

Stop serving every model the latest run found failing, on its hosted provider.  Each stays listed on the Hosted providers page, priced, to be switched back on there.

### Example

```ts
import {
  Configuration,
  HealthChecksApi,
} from '';
import type { HealthChecksDisableFailingModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HealthChecksApi(config);

  try {
    const data = await api.healthChecksDisableFailingModels();
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

[**HealthCheckDisabled**](HealthCheckDisabled.md)

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


## healthChecksGetHealthCheckSettings

> HealthCheckSettingsPublic healthChecksGetHealthCheckSettings()

Get Health Check Settings

Whether the checks run on a schedule, how often, and what they send.

### Example

```ts
import {
  Configuration,
  HealthChecksApi,
} from '';
import type { HealthChecksGetHealthCheckSettingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HealthChecksApi(config);

  try {
    const data = await api.healthChecksGetHealthCheckSettings();
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

[**HealthCheckSettingsPublic**](HealthCheckSettingsPublic.md)

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


## healthChecksGetHealthCheckStatus

> HealthCheckStatus healthChecksGetHealthCheckStatus()

Get Health Check Status

The settings, the run in progress, and the latest finished run by provider and by offering.

### Example

```ts
import {
  Configuration,
  HealthChecksApi,
} from '';
import type { HealthChecksGetHealthCheckStatusRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HealthChecksApi(config);

  try {
    const data = await api.healthChecksGetHealthCheckStatus();
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

[**HealthCheckStatus**](HealthCheckStatus.md)

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


## healthChecksRunHealthChecks

> HealthCheckSettingsPublic healthChecksRunHealthChecks()

Run Health Checks

Start a run within a minute, whether or not the schedule is on.

### Example

```ts
import {
  Configuration,
  HealthChecksApi,
} from '';
import type { HealthChecksRunHealthChecksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HealthChecksApi(config);

  try {
    const data = await api.healthChecksRunHealthChecks();
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

[**HealthCheckSettingsPublic**](HealthCheckSettingsPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthChecksUpdateHealthCheckSettings

> HealthCheckSettingsPublic healthChecksUpdateHealthCheckSettings(healthCheckSettingsUpdate)

Update Health Check Settings

Change the settings. Turning the schedule on starts a run within a minute.

### Example

```ts
import {
  Configuration,
  HealthChecksApi,
} from '';
import type { HealthChecksUpdateHealthCheckSettingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HealthChecksApi(config);

  const body = {
    // HealthCheckSettingsUpdate
    healthCheckSettingsUpdate: ...,
  } satisfies HealthChecksUpdateHealthCheckSettingsRequest;

  try {
    const data = await api.healthChecksUpdateHealthCheckSettings(body);
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
| **healthCheckSettingsUpdate** | [HealthCheckSettingsUpdate](HealthCheckSettingsUpdate.md) |  | |

### Return type

[**HealthCheckSettingsPublic**](HealthCheckSettingsPublic.md)

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

