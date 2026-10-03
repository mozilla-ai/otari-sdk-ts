# CatalogApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**catalogGetCatalogModel**](CatalogApi.md#cataloggetcatalogmodel) | **GET** /api/v1/catalog/models/{model_id} | Get Catalog Model |
| [**catalogListCatalog**](CatalogApi.md#cataloglistcatalog) | **GET** /api/v1/catalog/models | List Catalog |
| [**catalogRefreshSelectorIndex**](CatalogApi.md#catalogrefreshselectorindex) | **POST** /api/v1/catalog/selectors/refresh | Refresh Selector Index |



## catalogGetCatalogModel

> CatalogModelDetail catalogGetCatalogModel(modelId)

Get Catalog Model

One model and every offering of it this caller may use.  The whole merged catalog is built and grouped to answer for one model. That is deliberate: the identity a model is found by is a property of the group, so narrowing the build to one model would need the grouping done first. The query count is constant; the cost is CPU per page view, growing with the size of the catalog rather than with the number of readers.  A model the caller may not see answers 404, the same as one that does not exist, so the route cannot be used to probe the catalog behind an allow-list. A signed-in caller\&#39;s offerings also carry their organization\&#39;s own usage of each over the last 30 days.

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CatalogGetCatalogModelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    modelId: modelId_example,
  } satisfies CatalogGetCatalogModelRequest;

  try {
    const data = await api.catalogGetCatalogModel(body);
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
| **modelId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CatalogModelDetail**](CatalogModelDetail.md)

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


## catalogListCatalog

> CatalogResponse catalogListCatalog(atContext, search, skip, limit, provider, vendor, inputModality, outputModality, capability, minContext, maxInput, pricing, source, releasedWithinDays, sort, direction, includeFacets)

List Catalog

The models this caller may use, one entry each however many providers serve it.  Prices are the caller\&#39;s: an organization\&#39;s override where one applies, else the deployment\&#39;s row, else the genai-prices default. Aliases and routing policies are not models and are not listed; see Routing. A visitor, where the catalog is public, sees the configured instances and the hosted models at the deployment\&#39;s rates, and nothing that belongs to a tenant.

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CatalogListCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CatalogApi(config);

  const body = {
    // number | Compare prices for a request of this many input tokens: each model\'s minimum is taken from the pricing tier that request would settle at. Omitted, the base rates compare. (optional)
    atContext: 56,
    // string | Case-insensitive text in a model\'s name, vendor, id, selectors, or provider instances. (optional)
    search: search_example,
    // number | Number of matching models to skip. (optional)
    skip: 56,
    // number | Maximum number of models to return. (optional)
    limit: 56,
    // Array<string> | Match any named provider instance. (optional)
    provider: ...,
    // Array<string> | Match any vendor; an empty value names unknown vendors. (optional)
    vendor: ...,
    // Array<string> | Require every input modality. (optional)
    inputModality: ...,
    // Array<string> | Require every output modality. (optional)
    outputModality: ...,
    // Array<CatalogCapability> | Require every capability. (optional)
    capability: ...,
    // number | Minimum context window; unknown windows do not match. (optional)
    minContext: 56,
    // number | Maximum cheapest input price per million tokens; unpriced models do not match. (optional)
    maxInput: 8.14,
    // 'all' | 'custom' | 'default' | 'priced' | 'unpriced' (optional)
    pricing: pricing_example,
    // 'all' | 'discovered' | 'custom' (optional)
    source: source_example,
    // number | Release window ending today (UTC); zero disables it. Unknown and future releases do not match. (optional)
    releasedWithinDays: 56,
    // 'name' | 'released' | 'input' | 'output' | 'context' | 'providers' (optional)
    sort: sort_example,
    // 'asc' | 'desc' (optional)
    direction: direction_example,
    // boolean | Include the filter choices drawn from the whole authorized catalog. (optional)
    includeFacets: true,
  } satisfies CatalogListCatalogRequest;

  try {
    const data = await api.catalogListCatalog(body);
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
| **atContext** | `number` | Compare prices for a request of this many input tokens: each model\&#39;s minimum is taken from the pricing tier that request would settle at. Omitted, the base rates compare. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Case-insensitive text in a model\&#39;s name, vendor, id, selectors, or provider instances. | [Optional] [Defaults to `undefined`] |
| **skip** | `number` | Number of matching models to skip. | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of models to return. | [Optional] [Defaults to `100`] |
| **provider** | `Array<string>` | Match any named provider instance. | [Optional] |
| **vendor** | `Array<string>` | Match any vendor; an empty value names unknown vendors. | [Optional] |
| **inputModality** | `Array<string>` | Require every input modality. | [Optional] |
| **outputModality** | `Array<string>` | Require every output modality. | [Optional] |
| **capability** | `Array<CatalogCapability>` | Require every capability. | [Optional] |
| **minContext** | `number` | Minimum context window; unknown windows do not match. | [Optional] [Defaults to `0`] |
| **maxInput** | `number` | Maximum cheapest input price per million tokens; unpriced models do not match. | [Optional] [Defaults to `undefined`] |
| **pricing** | `all`, `custom`, `default`, `priced`, `unpriced` |  | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, custom, default, priced, unpriced] |
| **source** | `all`, `discovered`, `custom` |  | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, discovered, custom] |
| **releasedWithinDays** | `number` | Release window ending today (UTC); zero disables it. Unknown and future releases do not match. | [Optional] [Defaults to `0`] |
| **sort** | `name`, `released`, `input`, `output`, `context`, `providers` |  | [Optional] [Defaults to `&#39;name&#39;`] [Enum: name, released, input, output, context, providers] |
| **direction** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;asc&#39;`] [Enum: asc, desc] |
| **includeFacets** | `boolean` | Include the filter choices drawn from the whole authorized catalog. | [Optional] [Defaults to `false`] |

### Return type

[**CatalogResponse**](CatalogResponse.md)

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


## catalogRefreshSelectorIndex

> SelectorIndexResponse catalogRefreshSelectorIndex()

Refresh Selector Index

Re-index the short spellings now, rather than on the refresher\&#39;s next tick.

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CatalogRefreshSelectorIndexRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CatalogApi(config);

  try {
    const data = await api.catalogRefreshSelectorIndex();
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

[**SelectorIndexResponse**](SelectorIndexResponse.md)

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

