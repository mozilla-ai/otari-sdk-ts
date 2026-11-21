# AgentRecommendersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentRecommendersCreateAgentRecommender**](AgentRecommendersApi.md#agentrecommenderscreateagentrecommender) | **POST** /api/v1/routing/recommenders | Create Agent Recommender |
| [**agentRecommendersDeleteAgentRecommender**](AgentRecommendersApi.md#agentrecommendersdeleteagentrecommender) | **DELETE** /api/v1/routing/recommenders/{recommender_id} | Delete Agent Recommender |
| [**agentRecommendersListAgentRecommenders**](AgentRecommendersApi.md#agentrecommenderslistagentrecommenders) | **GET** /api/v1/routing/recommenders | List Agent Recommenders |
| [**agentRecommendersUpdateAgentRecommender**](AgentRecommendersApi.md#agentrecommendersupdateagentrecommender) | **PATCH** /api/v1/routing/recommenders/{recommender_id} | Update Agent Recommender |



## agentRecommendersCreateAgentRecommender

> AgentRecommenderPublic agentRecommendersCreateAgentRecommender(agentRecommenderCreate)

Create Agent Recommender

Add a subagent router: a decision model, its key, and the prices a recommendation is charged at.  The first router added is switched on; a later one waits to be switched on in place of the one that is.

### Example

```ts
import {
  Configuration,
  AgentRecommendersApi,
} from '';
import type { AgentRecommendersCreateAgentRecommenderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentRecommendersApi(config);

  const body = {
    // AgentRecommenderCreate
    agentRecommenderCreate: ...,
  } satisfies AgentRecommendersCreateAgentRecommenderRequest;

  try {
    const data = await api.agentRecommendersCreateAgentRecommender(body);
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
| **agentRecommenderCreate** | [AgentRecommenderCreate](AgentRecommenderCreate.md) |  | |

### Return type

[**AgentRecommenderPublic**](AgentRecommenderPublic.md)

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


## agentRecommendersDeleteAgentRecommender

> agentRecommendersDeleteAgentRecommender(recommenderId)

Delete Agent Recommender

Remove a subagent router and its key. With none left, no recommendation is served.

### Example

```ts
import {
  Configuration,
  AgentRecommendersApi,
} from '';
import type { AgentRecommendersDeleteAgentRecommenderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentRecommendersApi(config);

  const body = {
    // string
    recommenderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AgentRecommendersDeleteAgentRecommenderRequest;

  try {
    const data = await api.agentRecommendersDeleteAgentRecommender(body);
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
| **recommenderId** | `string` |  | [Defaults to `undefined`] |

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


## agentRecommendersListAgentRecommenders

> AgentRecommendersPublic agentRecommendersListAgentRecommenders()

List Agent Recommenders

List the subagent routers.

### Example

```ts
import {
  Configuration,
  AgentRecommendersApi,
} from '';
import type { AgentRecommendersListAgentRecommendersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentRecommendersApi(config);

  try {
    const data = await api.agentRecommendersListAgentRecommenders();
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

[**AgentRecommendersPublic**](AgentRecommendersPublic.md)

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


## agentRecommendersUpdateAgentRecommender

> AgentRecommenderPublic agentRecommendersUpdateAgentRecommender(recommenderId, agentRecommenderUpdate)

Update Agent Recommender

Change a subagent router, or switch it on in place of the one that is.  An omitted field keeps its stored value, the key included while the provider and the API base stay the same.

### Example

```ts
import {
  Configuration,
  AgentRecommendersApi,
} from '';
import type { AgentRecommendersUpdateAgentRecommenderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentRecommendersApi(config);

  const body = {
    // string
    recommenderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AgentRecommenderUpdate
    agentRecommenderUpdate: ...,
  } satisfies AgentRecommendersUpdateAgentRecommenderRequest;

  try {
    const data = await api.agentRecommendersUpdateAgentRecommender(body);
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
| **recommenderId** | `string` |  | [Defaults to `undefined`] |
| **agentRecommenderUpdate** | [AgentRecommenderUpdate](AgentRecommenderUpdate.md) |  | |

### Return type

[**AgentRecommenderPublic**](AgentRecommenderPublic.md)

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

