# PricingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**confirmPricingRefreshV1PricingRefreshConfirmPost**](PricingApi.md#confirmpricingrefreshv1pricingrefreshconfirmpost) | **POST** /v1/pricing/refresh/confirm | Confirm Pricing Refresh |
| [**deletePricingV1PricingModelKeyDelete**](PricingApi.md#deletepricingv1pricingmodelkeydelete) | **DELETE** /v1/pricing/{model_key} | Delete Pricing |
| [**getPricingHistoryV1PricingModelKeyHistoryGet**](PricingApi.md#getpricinghistoryv1pricingmodelkeyhistoryget) | **GET** /v1/pricing/{model_key}/history | Get Pricing History |
| [**getPricingV1PricingModelKeyGet**](PricingApi.md#getpricingv1pricingmodelkeyget) | **GET** /v1/pricing/{model_key} | Get Pricing |
| [**listPricingV1PricingGet**](PricingApi.md#listpricingv1pricingget) | **GET** /v1/pricing | List Pricing |
| [**previewPricingRefreshV1PricingRefreshPost**](PricingApi.md#previewpricingrefreshv1pricingrefreshpost) | **POST** /v1/pricing/refresh | Preview Pricing Refresh |
| [**rejectPricingRefreshV1PricingRefreshRejectPost**](PricingApi.md#rejectpricingrefreshv1pricingrefreshrejectpost) | **POST** /v1/pricing/refresh/reject | Reject Pricing Refresh |
| [**setPricingV1PricingPost**](PricingApi.md#setpricingv1pricingpost) | **POST** /v1/pricing | Set Pricing |



## confirmPricingRefreshV1PricingRefreshConfirmPost

> PricingRefreshConfirmationResponse confirmPricingRefreshV1PricingRefreshConfirmPost()

Confirm Pricing Refresh

Activate the latest reviewed default-price snapshot.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { ConfirmPricingRefreshV1PricingRefreshConfirmPostRequest } from '';

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
    const data = await api.confirmPricingRefreshV1PricingRefreshConfirmPost();
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


## deletePricingV1PricingModelKeyDelete

> deletePricingV1PricingModelKeyDelete(modelKey, effectiveAt)

Delete Pricing

Delete pricing entries for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { DeletePricingV1PricingModelKeyDeleteRequest } from '';

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
  } satisfies DeletePricingV1PricingModelKeyDeleteRequest;

  try {
    const data = await api.deletePricingV1PricingModelKeyDelete(body);
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


## getPricingHistoryV1PricingModelKeyHistoryGet

> Array&lt;PricingResponse&gt; getPricingHistoryV1PricingModelKeyHistoryGet(modelKey)

Get Pricing History

Return the full pricing history for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { GetPricingHistoryV1PricingModelKeyHistoryGetRequest } from '';

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
  } satisfies GetPricingHistoryV1PricingModelKeyHistoryGetRequest;

  try {
    const data = await api.getPricingHistoryV1PricingModelKeyHistoryGet(body);
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


## getPricingV1PricingModelKeyGet

> PricingResponse getPricingV1PricingModelKeyGet(modelKey, asOf)

Get Pricing

Get pricing for a specific model as of a timestamp.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { GetPricingV1PricingModelKeyGetRequest } from '';

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
  } satisfies GetPricingV1PricingModelKeyGetRequest;

  try {
    const data = await api.getPricingV1PricingModelKeyGet(body);
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


## listPricingV1PricingGet

> Array&lt;PricingResponse&gt; listPricingV1PricingGet(skip, limit)

List Pricing

List all model pricing.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { ListPricingV1PricingGetRequest } from '';

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
  } satisfies ListPricingV1PricingGetRequest;

  try {
    const data = await api.listPricingV1PricingGet(body);
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


## previewPricingRefreshV1PricingRefreshPost

> PricingRefreshPreviewResponse previewPricingRefreshV1PricingRefreshPost()

Preview Pricing Refresh

Fetch the latest defaults and hold them for operator review.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PreviewPricingRefreshV1PricingRefreshPostRequest } from '';

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
    const data = await api.previewPricingRefreshV1PricingRefreshPost();
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


## rejectPricingRefreshV1PricingRefreshRejectPost

> rejectPricingRefreshV1PricingRefreshRejectPost()

Reject Pricing Refresh

Discard a reviewed default-price snapshot without applying it.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { RejectPricingRefreshV1PricingRefreshRejectPostRequest } from '';

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
    const data = await api.rejectPricingRefreshV1PricingRefreshRejectPost();
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


## setPricingV1PricingPost

> PricingResponse setPricingV1PricingPost(setPricingRequest)

Set Pricing

Set or update pricing for a model.  Rejects an alias: pricing, budgets, and usage all key on the resolved target, so a row stored under an alias name would never be read.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { SetPricingV1PricingPostRequest } from '';

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
  } satisfies SetPricingV1PricingPostRequest;

  try {
    const data = await api.setPricingV1PricingPost(body);
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

