# OrganizationPricingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganizationPricingV1OrganizationsMePricingPost**](OrganizationPricingApi.md#createorganizationpricingv1organizationsmepricingpost) | **POST** /v1/organizations/me/pricing | Create Organization Pricing |
| [**deleteOrganizationPricingV1OrganizationsMePricingPricingIdDelete**](OrganizationPricingApi.md#deleteorganizationpricingv1organizationsmepricingpricingiddelete) | **DELETE** /v1/organizations/me/pricing/{pricing_id} | Delete Organization Pricing |
| [**listOrganizationPricingV1OrganizationsMePricingGet**](OrganizationPricingApi.md#listorganizationpricingv1organizationsmepricingget) | **GET** /v1/organizations/me/pricing | List Organization Pricing |
| [**replaceOrganizationPricingV1OrganizationsMePricingPricingIdPut**](OrganizationPricingApi.md#replaceorganizationpricingv1organizationsmepricingpricingidput) | **PUT** /v1/organizations/me/pricing/{pricing_id} | Replace Organization Pricing |



## createOrganizationPricingV1OrganizationsMePricingPost

> OrganizationModelPricingPublic createOrganizationPricingV1OrganizationsMePricingPost(organizationModelPricingCreate)

Create Organization Pricing

Set the organization\&#39;s rate for a model over a period.  Refused with a 409 when the period overlaps one already stored for that model, naming the period it collides with, rather than shadowing it.  The key is normalized to its canonical &#x60;&#x60;instance:model&#x60;&#x60; form first, the same call &#x60;&#x60;POST /v1/pricing&#x60;&#x60; makes, and that is what makes one model one row rather than one per spelling. Stored verbatim, &#x60;&#x60;openai:gpt-4o&#x60;&#x60; and &#x60;&#x60;openai/gpt-4o&#x60;&#x60; are two keys: the overlap rule would not see them as colliding, and both would resolve, with the canonical one preferred, leaving the other dormant until the first is deleted. Normalizing on the way in is what stops that pair existing at all.

### Example

```ts
import {
  Configuration,
  OrganizationPricingApi,
} from '';
import type { CreateOrganizationPricingV1OrganizationsMePricingPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationPricingApi(config);

  const body = {
    // OrganizationModelPricingCreate
    organizationModelPricingCreate: ...,
  } satisfies CreateOrganizationPricingV1OrganizationsMePricingPostRequest;

  try {
    const data = await api.createOrganizationPricingV1OrganizationsMePricingPost(body);
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
| **organizationModelPricingCreate** | [OrganizationModelPricingCreate](OrganizationModelPricingCreate.md) |  | |

### Return type

[**OrganizationModelPricingPublic**](OrganizationModelPricingPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteOrganizationPricingV1OrganizationsMePricingPricingIdDelete

> deleteOrganizationPricingV1OrganizationsMePricingPricingIdDelete(pricingId)

Delete Organization Pricing

Remove an override, returning the model to the deployment price list.

### Example

```ts
import {
  Configuration,
  OrganizationPricingApi,
} from '';
import type { DeleteOrganizationPricingV1OrganizationsMePricingPricingIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationPricingApi(config);

  const body = {
    // string
    pricingId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteOrganizationPricingV1OrganizationsMePricingPricingIdDeleteRequest;

  try {
    const data = await api.deleteOrganizationPricingV1OrganizationsMePricingPricingIdDelete(body);
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
| **pricingId** | `string` |  | [Defaults to `undefined`] |

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


## listOrganizationPricingV1OrganizationsMePricingGet

> OrganizationModelPricingsPublic listOrganizationPricingV1OrganizationsMePricingGet(skip, limit)

List Organization Pricing

List the organization\&#39;s rate overrides.  Readable by any member: these rates decide what the caller\&#39;s own requests cost, so they are not withheld from the people billed at them. Writing needs an owner or admin.  Paged on the same bounds the rest of the tenancy surface uses, because the table grows a row per model per period. &#x60;&#x60;count&#x60;&#x60; is the total, so a client knows whether another page is owed.

### Example

```ts
import {
  Configuration,
  OrganizationPricingApi,
} from '';
import type { ListOrganizationPricingV1OrganizationsMePricingGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationPricingApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies ListOrganizationPricingV1OrganizationsMePricingGetRequest;

  try {
    const data = await api.listOrganizationPricingV1OrganizationsMePricingGet(body);
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
| **skip** | `number` | Number of records to skip | [Optional] [Defaults to `0`] |
| **limit** | `number` | Maximum number of records to return | [Optional] [Defaults to `100`] |

### Return type

[**OrganizationModelPricingsPublic**](OrganizationModelPricingsPublic.md)

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


## replaceOrganizationPricingV1OrganizationsMePricingPricingIdPut

> OrganizationModelPricingPublic replaceOrganizationPricingV1OrganizationsMePricingPricingIdPut(pricingId, organizationModelPricingUpdate)

Replace Organization Pricing

Replace an override\&#39;s rates and period.  Future requests in the period price at the new rate; usage already settled keeps the cost it was billed, because a settled cost is stored on the usage row rather than recomputed.

### Example

```ts
import {
  Configuration,
  OrganizationPricingApi,
} from '';
import type { ReplaceOrganizationPricingV1OrganizationsMePricingPricingIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationPricingApi(config);

  const body = {
    // string
    pricingId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrganizationModelPricingUpdate
    organizationModelPricingUpdate: ...,
  } satisfies ReplaceOrganizationPricingV1OrganizationsMePricingPricingIdPutRequest;

  try {
    const data = await api.replaceOrganizationPricingV1OrganizationsMePricingPricingIdPut(body);
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
| **pricingId** | `string` |  | [Defaults to `undefined`] |
| **organizationModelPricingUpdate** | [OrganizationModelPricingUpdate](OrganizationModelPricingUpdate.md) |  | |

### Return type

[**OrganizationModelPricingPublic**](OrganizationModelPricingPublic.md)

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

