# RateLimitsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**rateLimitsCreateRateLimitRule**](RateLimitsApi.md#ratelimitscreateratelimitrule) | **POST** /api/v1/rate-limits | Create Rate Limit Rule |
| [**rateLimitsDeleteRateLimitRule**](RateLimitsApi.md#ratelimitsdeleteratelimitrule) | **DELETE** /api/v1/rate-limits/{name} | Delete Rate Limit Rule |
| [**rateLimitsListRateLimitRules**](RateLimitsApi.md#ratelimitslistratelimitrules) | **GET** /api/v1/rate-limits | List Rate Limit Rules |
| [**rateLimitsUpdateRateLimitRule**](RateLimitsApi.md#ratelimitsupdateratelimitrule) | **PATCH** /api/v1/rate-limits/{name} | Update Rate Limit Rule |



## rateLimitsCreateRateLimitRule

> RateLimitRulePublic rateLimitsCreateRateLimitRule(rateLimitRuleCreate)

Create Rate Limit Rule

Add a rule. It applies from the next request on this replica, and on every replica within 30 seconds.

### Example

```ts
import {
  Configuration,
  RateLimitsApi,
} from '';
import type { RateLimitsCreateRateLimitRuleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RateLimitsApi(config);

  const body = {
    // RateLimitRuleCreate
    rateLimitRuleCreate: ...,
  } satisfies RateLimitsCreateRateLimitRuleRequest;

  try {
    const data = await api.rateLimitsCreateRateLimitRule(body);
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
| **rateLimitRuleCreate** | [RateLimitRuleCreate](RateLimitRuleCreate.md) |  | |

### Return type

[**RateLimitRulePublic**](RateLimitRulePublic.md)

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


## rateLimitsDeleteRateLimitRule

> rateLimitsDeleteRateLimitRule(name)

Delete Rate Limit Rule

Remove a stored rule. A config.yml rule answers 409.

### Example

```ts
import {
  Configuration,
  RateLimitsApi,
} from '';
import type { RateLimitsDeleteRateLimitRuleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RateLimitsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies RateLimitsDeleteRateLimitRuleRequest;

  try {
    const data = await api.rateLimitsDeleteRateLimitRule(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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


## rateLimitsListRateLimitRules

> RateLimitRulesPublic rateLimitsListRateLimitRules()

List Rate Limit Rules

List every rule in effect: the config.yml rules, then the ones stored here.

### Example

```ts
import {
  Configuration,
  RateLimitsApi,
} from '';
import type { RateLimitsListRateLimitRulesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RateLimitsApi(config);

  try {
    const data = await api.rateLimitsListRateLimitRules();
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

[**RateLimitRulesPublic**](RateLimitRulesPublic.md)

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


## rateLimitsUpdateRateLimitRule

> RateLimitRulePublic rateLimitsUpdateRateLimitRule(name, rateLimitRuleUpdate)

Update Rate Limit Rule

Change a stored rule. Requests it already counted stay counted. A config.yml rule answers 409.

### Example

```ts
import {
  Configuration,
  RateLimitsApi,
} from '';
import type { RateLimitsUpdateRateLimitRuleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RateLimitsApi(config);

  const body = {
    // string
    name: name_example,
    // RateLimitRuleUpdate
    rateLimitRuleUpdate: ...,
  } satisfies RateLimitsUpdateRateLimitRuleRequest;

  try {
    const data = await api.rateLimitsUpdateRateLimitRule(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **rateLimitRuleUpdate** | [RateLimitRuleUpdate](RateLimitRuleUpdate.md) |  | |

### Return type

[**RateLimitRulePublic**](RateLimitRulePublic.md)

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

