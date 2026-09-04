# ToolSettingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getToolSettingsV1ToolSettingsGet**](ToolSettingsApi.md#gettoolsettingsv1toolsettingsget) | **GET** /v1/tool-settings | Get Tool Settings |
| [**testServiceV1ToolSettingsServiceTestPost**](ToolSettingsApi.md#testservicev1toolsettingsservicetestpost) | **POST** /v1/tool-settings/{service}/test | Test Service |
| [**updateToolSettingsV1ToolSettingsPatch**](ToolSettingsApi.md#updatetoolsettingsv1toolsettingspatch) | **PATCH** /v1/tool-settings | Update Tool Settings |



## getToolSettingsV1ToolSettingsGet

> ToolSettingsResponse getToolSettingsV1ToolSettingsGet()

Get Tool Settings

Return the effective tool/guardrail settings for the dashboard.  Authentication only on the router: the role decides *how much* rather than whether, so this is not the deployment-wide gate &#x60;&#x60;require_deployment_operator&#x60;&#x60; names. A header master key is the deployment credential and reads everything; a session reads everything only while it operates the deployment, and otherwise gets the fields without the service endpoints in them.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { GetToolSettingsV1ToolSettingsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToolSettingsApi(config);

  try {
    const data = await api.getToolSettingsV1ToolSettingsGet();
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

[**ToolSettingsResponse**](ToolSettingsResponse.md)

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


## testServiceV1ToolSettingsServiceTestPost

> TestServiceResponse testServiceV1ToolSettingsServiceTestPost(service, testServiceRequest)

Test Service

Structurally validate a URL and probe it for reachability.  Tests the URL in the request body (typically unsaved), so an operator can verify before saving. The probe is a plain HTTP GET with a short timeout: any HTTP response means the host is reachable; a connection/timeout/DNS error means it is not. The operator is trusted (master key), so no SSRF deny-list applies; only the structural check (http/https + host) runs first.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { TestServiceV1ToolSettingsServiceTestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToolSettingsApi(config);

  const body = {
    // string
    service: service_example,
    // TestServiceRequest
    testServiceRequest: ...,
  } satisfies TestServiceV1ToolSettingsServiceTestPostRequest;

  try {
    const data = await api.testServiceV1ToolSettingsServiceTestPost(body);
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
| **service** | `string` |  | [Defaults to `undefined`] |
| **testServiceRequest** | [TestServiceRequest](TestServiceRequest.md) |  | |

### Return type

[**TestServiceResponse**](TestServiceResponse.md)

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


## updateToolSettingsV1ToolSettingsPatch

> ToolSettingsResponse updateToolSettingsV1ToolSettingsPatch(updateToolSettingsRequest)

Update Tool Settings

Persist and apply tool/guardrail setting changes.  Uses &#x60;&#x60;model_fields_set&#x60;&#x60; so an explicit &#x60;&#x60;null&#x60;&#x60; clears a field while an omitted field is left unchanged. Operator-gated and standalone-only.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { UpdateToolSettingsV1ToolSettingsPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToolSettingsApi(config);

  const body = {
    // UpdateToolSettingsRequest
    updateToolSettingsRequest: ...,
  } satisfies UpdateToolSettingsV1ToolSettingsPatchRequest;

  try {
    const data = await api.updateToolSettingsV1ToolSettingsPatch(body);
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
| **updateToolSettingsRequest** | [UpdateToolSettingsRequest](UpdateToolSettingsRequest.md) |  | |

### Return type

[**ToolSettingsResponse**](ToolSettingsResponse.md)

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

