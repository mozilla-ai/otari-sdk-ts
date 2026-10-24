# PricingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**pricingConfirmPricingRefresh**](PricingApi.md#pricingconfirmpricingrefresh) | **POST** /api/v1/pricing/refresh/confirm | Confirm Pricing Refresh |
| [**pricingDeletePricing**](PricingApi.md#pricingdeletepricing) | **DELETE** /api/v1/pricing/{model_key} | Delete Pricing |
| [**pricingGetPendingPricingRefresh**](PricingApi.md#pricinggetpendingpricingrefresh) | **GET** /api/v1/pricing/refresh/pending | Get Pending Pricing Refresh |
| [**pricingGetPricing**](PricingApi.md#pricinggetpricing) | **GET** /api/v1/pricing/{model_key} | Get Pricing |
| [**pricingGetPricingHistory**](PricingApi.md#pricinggetpricinghistory) | **GET** /api/v1/pricing/{model_key}/history | Get Pricing History |
| [**pricingListCurrentPricing**](PricingApi.md#pricinglistcurrentpricing) | **GET** /api/v1/pricing/current | List Current Pricing |
| [**pricingListPricing**](PricingApi.md#pricinglistpricing) | **GET** /api/v1/pricing | List Pricing |
| [**pricingListPricingDrift**](PricingApi.md#pricinglistpricingdrift) | **GET** /api/v1/pricing/drift | List Pricing Drift |
| [**pricingListPricingSnapshots**](PricingApi.md#pricinglistpricingsnapshots) | **GET** /api/v1/pricing/snapshots | List Pricing Snapshots |
| [**pricingPreviewPricingRefresh**](PricingApi.md#pricingpreviewpricingrefresh) | **POST** /api/v1/pricing/refresh | Preview Pricing Refresh |
| [**pricingRejectPricingRefresh**](PricingApi.md#pricingrejectpricingrefresh) | **POST** /api/v1/pricing/refresh/reject | Reject Pricing Refresh |
| [**pricingSetPricing**](PricingApi.md#pricingsetpricing) | **POST** /api/v1/pricing | Set Pricing |



## pricingConfirmPricingRefresh

> PricingRefreshConfirmationResponse pricingConfirmPricingRefresh(digest)

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

  const body = {
    // string | The `digest` of the previewed snapshot; 409 when the pending one differs. (optional)
    digest: digest_example,
  } satisfies PricingConfirmPricingRefreshRequest;

  try {
    const data = await api.pricingConfirmPricingRefresh(body);
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
| **digest** | `string` | The &#x60;digest&#x60; of the previewed snapshot; 409 when the pending one differs. | [Optional] [Defaults to `undefined`] |

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
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pricingDeletePricing

> pricingDeletePricing(modelKey, effectiveAt, kind)

Delete Pricing

Delete pricing entries for a model, or for a search or fetch instance.

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
    // 'model' | 'search' | 'fetch' | What the row prices: \'model\' (the default), or \'search\' or \'fetch\' for a search or fetch instance, keyed by the instance\'s name and priced per call. Only the deployment operator sets a search or fetch rate. (optional)
    kind: kind_example,
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
| **kind** | `model`, `search`, `fetch` | What the row prices: \&#39;model\&#39; (the default), or \&#39;search\&#39; or \&#39;fetch\&#39; for a search or fetch instance, keyed by the instance\&#39;s name and priced per call. Only the deployment operator sets a search or fetch rate. | [Optional] [Defaults to `&#39;model&#39;`] [Enum: model, search, fetch] |

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


## pricingGetPendingPricingRefresh

> PricingRefreshPreviewResponse pricingGetPendingPricingRefresh()

Get Pending Pricing Refresh

The update the scheduled refresh has left waiting for review, if any.  What the dashboard\&#39;s notice reads. 404 when nothing is pending, so a page can ask on load without treating the common case as an error banner.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingGetPendingPricingRefreshRequest } from '';

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
    const data = await api.pricingGetPendingPricingRefresh();
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


## pricingGetPricing

> PricingResponse pricingGetPricing(modelKey, asOf, kind)

Get Pricing

Get pricing for a specific model, or a search or fetch instance, as of a timestamp.  A 404 for a model of a hosted provider restricted to another organization than the caller\&#39;s.

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
    // 'model' | 'search' | 'fetch' | What the row prices: \'model\' (the default), or \'search\' or \'fetch\' for a search or fetch instance, keyed by the instance\'s name and priced per call. Only the deployment operator sets a search or fetch rate. (optional)
    kind: kind_example,
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
| **kind** | `model`, `search`, `fetch` | What the row prices: \&#39;model\&#39; (the default), or \&#39;search\&#39; or \&#39;fetch\&#39; for a search or fetch instance, keyed by the instance\&#39;s name and priced per call. Only the deployment operator sets a search or fetch rate. | [Optional] [Defaults to `&#39;model&#39;`] [Enum: model, search, fetch] |

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
| **404** | Nothing prices the model, or its hosted provider is restricted to another organization. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pricingGetPricingHistory

> Array&lt;PricingResponse&gt; pricingGetPricingHistory(modelKey, kind)

Get Pricing History

Return the full pricing history for a model, or for a search or fetch instance.  A 404 for a model of a hosted provider restricted to another organization than the caller\&#39;s.

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
    // 'model' | 'search' | 'fetch' | What the row prices: \'model\' (the default), or \'search\' or \'fetch\' for a search or fetch instance, keyed by the instance\'s name and priced per call. Only the deployment operator sets a search or fetch rate. (optional)
    kind: kind_example,
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
| **kind** | `model`, `search`, `fetch` | What the row prices: \&#39;model\&#39; (the default), or \&#39;search\&#39; or \&#39;fetch\&#39; for a search or fetch instance, keyed by the instance\&#39;s name and priced per call. Only the deployment operator sets a search or fetch rate. | [Optional] [Defaults to `&#39;model&#39;`] [Enum: model, search, fetch] |

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
| **404** | Nothing prices the model, or its hosted provider is restricted to another organization. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pricingListCurrentPricing

> CurrentPricingPage pricingListCurrentPricing(skip, limit)

List Current Pricing

List the rate each priced key is metered at, one row per kind and key.  Listing prices answers the stored history, one row per &#x60;&#x60;effective_at&#x60;&#x60;, so a page of that is a page of revisions rather than a page of keys. This answers one row per key: the newest rate that has taken effect, or the earliest scheduled rate for a key that has none yet. Every kind is returned, a row\&#39;s &#x60;&#x60;kind&#x60;&#x60; telling a model\&#39;s price from a search or fetch instance\&#39;s, and &#x60;&#x60;count&#x60;&#x60; is the number of priced keys of any kind, so a caller can page without reading the collection to learn how long it is. A hosted provider restricted to another organization than the caller\&#39;s is left out of both.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingListCurrentPricingRequest } from '';

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
  } satisfies PricingListCurrentPricingRequest;

  try {
    const data = await api.pricingListCurrentPricing(body);
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

[**CurrentPricingPage**](CurrentPricingPage.md)

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

List every stored price version, of every kind.  A row\&#39;s &#x60;&#x60;kind&#x60;&#x60; says whether it prices a model or a search or fetch instance. A hosted provider restricted to another organization than the caller\&#39;s is left out, as it is from the catalog.

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


## pricingListPricingDrift

> Array&lt;PricingDriftRow&gt; pricingListPricingDrift(limit)

List Pricing Drift

Every stored deployment rate in force today, beside today\&#39;s default for it.  A stored row shadows the models.dev default silently and forever, whether it was a deliberate override or a copy of a then-current default. This is what makes the difference visible: a row that matches the default is a row that could be deleted, and a row far from it is one worth a second look. Tool rows (&#x60;&#x60;otari:&#x60;&#x60;) are per request and have no default to drift from, so they are left out.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingListPricingDriftRequest } from '';

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
    limit: 56,
  } satisfies PricingListPricingDriftRequest;

  try {
    const data = await api.pricingListPricingDrift(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `200`] |

### Return type

[**Array&lt;PricingDriftRow&gt;**](PricingDriftRow.md)

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


## pricingListPricingSnapshots

> Array&lt;AcceptedSnapshotResponse&gt; pricingListPricingSnapshots(limit)

List Pricing Snapshots

The accepted default-price snapshots, newest first.

### Example

```ts
import {
  Configuration,
  PricingApi,
} from '';
import type { PricingListPricingSnapshotsRequest } from '';

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
    limit: 56,
  } satisfies PricingListPricingSnapshotsRequest;

  try {
    const data = await api.pricingListPricingSnapshots(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;AcceptedSnapshotResponse&gt;**](AcceptedSnapshotResponse.md)

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

> pricingRejectPricingRefresh(digest)

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

  const body = {
    // string | The `digest` of the previewed snapshot; 409 when the pending one differs. (optional)
    digest: digest_example,
  } satisfies PricingRejectPricingRefreshRequest;

  try {
    const data = await api.pricingRejectPricingRefresh(body);
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
| **digest** | `string` | The &#x60;digest&#x60; of the previewed snapshot; 409 when the pending one differs. | [Optional] [Defaults to `undefined`] |

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

