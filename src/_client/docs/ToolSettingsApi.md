# ToolSettingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**toolSettingsGetToolSettings**](ToolSettingsApi.md#toolsettingsgettoolsettings) | **GET** /api/v1/tool-settings | Get Tool Settings |
| [**toolSettingsListGuardrailProfiles**](ToolSettingsApi.md#toolsettingslistguardrailprofiles) | **GET** /api/v1/tool-settings/guardrails/profiles | List Guardrail Profiles |
| [**toolSettingsTestService**](ToolSettingsApi.md#toolsettingstestservice) | **POST** /api/v1/tool-settings/{service}/test | Test Service |
| [**toolSettingsUpdateToolSettings**](ToolSettingsApi.md#toolsettingsupdatetoolsettings) | **PATCH** /api/v1/tool-settings | Update Tool Settings |



## toolSettingsGetToolSettings

> ToolSettingsResponse toolSettingsGetToolSettings()

Get Tool Settings

Return the effective tool/guardrail settings for the dashboard.  Authentication only on the router: the role decides *how much* rather than whether, so this is not the deployment-wide gate &#x60;&#x60;require_deployment_operator&#x60;&#x60; names. A header master key is the deployment credential and reads everything; a session reads everything only while it operates the deployment, and otherwise gets the fields without the service endpoints in them.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { ToolSettingsGetToolSettingsRequest } from '';

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
    const data = await api.toolSettingsGetToolSettings();
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


## toolSettingsListGuardrailProfiles

> GuardrailCatalog toolSettingsListGuardrailProfiles()

List Guardrail Profiles

List the guardrail profiles this deployment\&#39;s guardrails service has built.  What an organization guardrail\&#39;s &#x60;&#x60;profile&#x60;&#x60; may name, with the &#x60;&#x60;validate_kwargs&#x60;&#x60; each one accepts, so the dashboard offers a picker and typed fields instead of a free-text box beside an unrendered dict. The profiles come from the service itself and the parameter schemas from the &#x60;&#x60;any_guardrail&#x60;&#x60; registry; neither is a list kept in this repository. See &#x60;gateway.services.guardrail_catalog&#x60;.  Reports &#x60;&#x60;available: false&#x60;&#x60; with a reason rather than an error when the service is unconfigured, unreachable, or older than its &#x60;&#x60;/profiles&#x60;&#x60; endpoint, because a guardrails outage must not also break the page that configures guardrails.  Read against &#x60;&#x60;guardrails_url&#x60;&#x60;, which is the deployment\&#39;s own service. An entry that carries an endpoint of its own is not probed: that URL is caller-supplied and fetching it here would make this a way to have the gateway request an address of the caller\&#39;s choosing.  Not on &#x60;&#x60;verify_catalog_reader&#x60;&#x60;, despite being a catalog read: that plane is the three deployment-describing reads a data-plane key may also make, and admitting a key here would let any workspace credential dial the deployment\&#39;s guardrails service. This is a management read, so it takes the router\&#39;s own gate.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { ToolSettingsListGuardrailProfilesRequest } from '';

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
    const data = await api.toolSettingsListGuardrailProfiles();
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

[**GuardrailCatalog**](GuardrailCatalog.md)

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


## toolSettingsTestService

> TestServiceResponse toolSettingsTestService(service, testServiceRequest)

Test Service

Structurally validate a URL and probe it for reachability.  Tests the URL in the request body (typically unsaved), so an operator can verify before saving. The probe is a plain HTTP GET with a short timeout: any HTTP response means the host is reachable; a connection/timeout/DNS error means it is not. The operator is trusted (master key), so no SSRF deny-list applies; only the structural check (http/https + host) runs first.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { ToolSettingsTestServiceRequest } from '';

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
  } satisfies ToolSettingsTestServiceRequest;

  try {
    const data = await api.toolSettingsTestService(body);
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


## toolSettingsUpdateToolSettings

> ToolSettingsResponse toolSettingsUpdateToolSettings(updateToolSettingsRequest)

Update Tool Settings

Persist and apply tool/guardrail setting changes.  Uses &#x60;&#x60;model_fields_set&#x60;&#x60; so an explicit &#x60;&#x60;null&#x60;&#x60; clears a field while an omitted field is left unchanged. Operator-gated and standalone-only.

### Example

```ts
import {
  Configuration,
  ToolSettingsApi,
} from '';
import type { ToolSettingsUpdateToolSettingsRequest } from '';

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
  } satisfies ToolSettingsUpdateToolSettingsRequest;

  try {
    const data = await api.toolSettingsUpdateToolSettings(body);
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

