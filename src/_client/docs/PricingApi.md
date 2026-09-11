# PricingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**pricingConfirmPricingRefresh**](PricingApi.md#pricingconfirmpricingrefresh) | **POST** /api/v1/pricing/refresh/confirm | Confirm Pricing Refresh |
| [**pricingDeletePricing**](PricingApi.md#pricingdeletepricing) | **DELETE** /api/v1/pricing/{model_key} | Delete Pricing |
| [**pricingGetPricing**](PricingApi.md#pricinggetpricing) | **GET** /api/v1/pricing/{model_key} | Get Pricing |
| [**pricingGetPricingHistory**](PricingApi.md#pricinggetpricinghistory) | **GET** /api/v1/pricing/{model_key}/history | Get Pricing History |
| [**pricingListPricing**](PricingApi.md#pricinglistpricing) | **GET** /api/v1/pricing | List Pricing |
| [**pricingPreviewPricingRefresh**](PricingApi.md#pricingpreviewpricingrefresh) | **POST** /api/v1/pricing/refresh | Preview Pricing Refresh |
| [**pricingRejectPricingRefresh**](PricingApi.md#pricingrejectpricingrefresh) | **POST** /api/v1/pricing/refresh/reject | Reject Pricing Refresh |
| [**pricingSetPricing**](PricingApi.md#pricingsetpricing) | **POST** /api/v1/pricing | Set Pricing |



## pricingConfirmPricingRefresh

> PricingRefreshConfirmationResponse pricingConfirmPricingRefresh()

Confirm Pricing Refresh

Activate the latest reviewed default-price snapshot.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingConfirmPricingRefreshRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  try {
    const data = await api.pricingConfirmPricingRefresh();
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

[**PricingRefreshConfirmationResponse**](PricingRefreshConfirmationResponse.md)

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


## pricingDeletePricing

> pricingDeletePricing(modelKey, effectiveAt)

Delete Pricing

Delete pricing entries for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingDeletePricingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  const body = {
    // string
    modelKey: modelKey_example,
    // Date | ISO datetime identifying a specific pricing row to delete (optional)
    effectiveAt: 2013-10-20T19:20:30+01:00,
  } satisfies PricingDeletePricingRequest;

  try {
    const data = await api.pricingDeletePricing(body);
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
| **modelKey** | `string` |  | [Defaults to `undefined`] |
| **effectiveAt** | `Date` | ISO datetime identifying a specific pricing row to delete | [Optional] [Defaults to `undefined`] |

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


## pricingGetPricing

> PricingResponse pricingGetPricing(modelKey, asOf)

Get Pricing

Get pricing for a specific model as of a timestamp.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingGetPricingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  const body = {
    // string
    modelKey: modelKey_example,
    // Date | ISO datetime for effective lookup (optional)
    asOf: 2013-10-20T19:20:30+01:00,
  } satisfies PricingGetPricingRequest;

  try {
    const data = await api.pricingGetPricing(body);
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
| **modelKey** | `string` |  | [Defaults to `undefined`] |
| **asOf** | `Date` | ISO datetime for effective lookup | [Optional] [Defaults to `undefined`] |

### Return type

[**PricingResponse**](PricingResponse.md)

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


## pricingGetPricingHistory

> Array&lt;PricingResponse&gt; pricingGetPricingHistory(modelKey)

Get Pricing History

Return the full pricing history for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingGetPricingHistoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  const body = {
    // string
    modelKey: modelKey_example,
  } satisfies PricingGetPricingHistoryRequest;

  try {
    const data = await api.pricingGetPricingHistory(body);
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
| **modelKey** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;PricingResponse&gt;**](PricingResponse.md)

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


## pricingListPricing

> Array&lt;PricingResponse&gt; pricingListPricing(skip, limit)

List Pricing

List all model pricing.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingListPricingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies PricingListPricingRequest;

  try {
    const data = await api.pricingListPricing(body);
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

[**Array&lt;PricingResponse&gt;**](PricingResponse.md)

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


## pricingPreviewPricingRefresh

> PricingRefreshPreviewResponse pricingPreviewPricingRefresh()

Preview Pricing Refresh

Fetch the latest defaults and hold them for operator review.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingPreviewPricingRefreshRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  try {
    const data = await api.pricingPreviewPricingRefresh();
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

[**PricingRefreshPreviewResponse**](PricingRefreshPreviewResponse.md)

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


## pricingRejectPricingRefresh

> pricingRejectPricingRefresh()

Reject Pricing Refresh

Discard a reviewed default-price snapshot without applying it.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingRejectPricingRefreshRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  try {
    const data = await api.pricingRejectPricingRefresh();
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


## pricingSetPricing

> PricingResponse pricingSetPricing(setPricingRequest)

Set Pricing

Set or update pricing for a model.  Rejects an alias or a routing policy: pricing, budgets, and usage all key on the model a request resolves to, so a row stored under either name would never be read.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingSetPricingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PricingApi(config);

  const body = {
    // SetPricingRequest
    setPricingRequest: ...,
  } satisfies PricingSetPricingRequest;

  try {
    const data = await api.pricingSetPricing(body);
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
| **setPricingRequest** | [SetPricingRequest](SetPricingRequest.md) |  | |

### Return type

[**PricingResponse**](PricingResponse.md)

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

