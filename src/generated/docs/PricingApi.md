# PricingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePricingV1PricingModelKeyDelete**](PricingApi.md#deletepricingv1pricingmodelkeydelete) | **DELETE** /v1/pricing/{model_key} | Delete Pricing |
| [**getPricingHistoryV1PricingModelKeyHistoryGet**](PricingApi.md#getpricinghistoryv1pricingmodelkeyhistoryget) | **GET** /v1/pricing/{model_key}/history | Get Pricing History |
| [**getPricingV1PricingModelKeyGet**](PricingApi.md#getpricingv1pricingmodelkeyget) | **GET** /v1/pricing/{model_key} | Get Pricing |
| [**listPricingV1PricingGet**](PricingApi.md#listpricingv1pricingget) | **GET** /v1/pricing | List Pricing |
| [**setPricingV1PricingPost**](PricingApi.md#setpricingv1pricingpost) | **POST** /v1/pricing | Set Pricing |



## deletePricingV1PricingModelKeyDelete

> deletePricingV1PricingModelKeyDelete(modelKey, effectiveAt)

Delete Pricing

Delete pricing entries for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from 'otari-control-plane';
import type { DeletePricingV1PricingModelKeyDeleteRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new PricingApi();

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


## getPricingHistoryV1PricingModelKeyHistoryGet

> Array&lt;PricingResponse&gt; getPricingHistoryV1PricingModelKeyHistoryGet(modelKey)

Get Pricing History

Return the full pricing history for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from 'otari-control-plane';
import type { GetPricingHistoryV1PricingModelKeyHistoryGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new PricingApi();

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


## getPricingV1PricingModelKeyGet

> PricingResponse getPricingV1PricingModelKeyGet(modelKey, asOf)

Get Pricing

Get pricing for a specific model as of a timestamp.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from 'otari-control-plane';
import type { GetPricingV1PricingModelKeyGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new PricingApi();

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


## listPricingV1PricingGet

> Array&lt;PricingResponse&gt; listPricingV1PricingGet(skip, limit)

List Pricing

List all model pricing.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from 'otari-control-plane';
import type { ListPricingV1PricingGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new PricingApi();

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


## setPricingV1PricingPost

> PricingResponse setPricingV1PricingPost(setPricingRequest)

Set Pricing

Set or update pricing for a model.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from 'otari-control-plane';
import type { SetPricingV1PricingPostRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new PricingApi();

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

