# ModelOverridesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**modelOverridesClearModelOverride**](ModelOverridesApi.md#modeloverridesclearmodeloverride) | **DELETE** /api/v1/model-overrides/{selector} | Clear Model Override |
| [**modelOverridesClearOrganizationModelOverride**](ModelOverridesApi.md#modeloverridesclearorganizationmodeloverride) | **DELETE** /api/v1/organizations/me/model-overrides/{selector} | Clear Organization Model Override |
| [**modelOverridesSetModelOverride**](ModelOverridesApi.md#modeloverridessetmodeloverride) | **PUT** /api/v1/model-overrides/{selector} | Set Model Override |
| [**modelOverridesSetOrganizationModelOverride**](ModelOverridesApi.md#modeloverridessetorganizationmodeloverride) | **PUT** /api/v1/organizations/me/model-overrides/{selector} | Set Organization Model Override |



## modelOverridesClearModelOverride

> modelOverridesClearModelOverride(selector)

Clear Model Override

Drop the deployment\&#39;s override of a model.

### Example

```ts
import {
  Configuration,
  ModelOverridesApi,
} from '';
import type { ModelOverridesClearModelOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelOverridesApi(config);

  const body = {
    // string
    selector: selector_example,
  } satisfies ModelOverridesClearModelOverrideRequest;

  try {
    const data = await api.modelOverridesClearModelOverride(body);
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
| **selector** | `string` |  | [Defaults to `undefined`] |

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


## modelOverridesClearOrganizationModelOverride

> modelOverridesClearOrganizationModelOverride(selector)

Clear Organization Model Override

Drop the organization\&#39;s override of a model. Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ModelOverridesApi,
} from '';
import type { ModelOverridesClearOrganizationModelOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelOverridesApi(config);

  const body = {
    // string
    selector: selector_example,
  } satisfies ModelOverridesClearOrganizationModelOverrideRequest;

  try {
    const data = await api.modelOverridesClearOrganizationModelOverride(body);
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
| **selector** | `string` |  | [Defaults to `undefined`] |

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
| **404** | No key serves the prefix. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelOverridesSetModelOverride

> ModelMetadataOverridePublic modelOverridesSetModelOverride(selector, modelMetadataOverrideRequest)

Set Model Override

Replace the deployment\&#39;s override of a model; every field null clears it.

### Example

```ts
import {
  Configuration,
  ModelOverridesApi,
} from '';
import type { ModelOverridesSetModelOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelOverridesApi(config);

  const body = {
    // string
    selector: selector_example,
    // ModelMetadataOverrideRequest
    modelMetadataOverrideRequest: ...,
  } satisfies ModelOverridesSetModelOverrideRequest;

  try {
    const data = await api.modelOverridesSetModelOverride(body);
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
| **selector** | `string` |  | [Defaults to `undefined`] |
| **modelMetadataOverrideRequest** | [ModelMetadataOverrideRequest](ModelMetadataOverrideRequest.md) |  | |

### Return type

[**ModelMetadataOverridePublic**](ModelMetadataOverridePublic.md)

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


## modelOverridesSetOrganizationModelOverride

> ModelMetadataOverridePublic modelOverridesSetOrganizationModelOverride(selector, modelMetadataOverrideRequest)

Set Organization Model Override

Replace the organization\&#39;s override of a model one of its keys serves; every field null clears it.  Organization owners and admins only.

### Example

```ts
import {
  Configuration,
  ModelOverridesApi,
} from '';
import type { ModelOverridesSetOrganizationModelOverrideRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModelOverridesApi(config);

  const body = {
    // string
    selector: selector_example,
    // ModelMetadataOverrideRequest
    modelMetadataOverrideRequest: ...,
  } satisfies ModelOverridesSetOrganizationModelOverrideRequest;

  try {
    const data = await api.modelOverridesSetOrganizationModelOverride(body);
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
| **selector** | `string` |  | [Defaults to `undefined`] |
| **modelMetadataOverrideRequest** | [ModelMetadataOverrideRequest](ModelMetadataOverrideRequest.md) |  | |

### Return type

[**ModelMetadataOverridePublic**](ModelMetadataOverridePublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | No key serves the prefix. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

