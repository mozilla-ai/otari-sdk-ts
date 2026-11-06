# DecisionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**decisionsCreateDecision**](DecisionsApi.md#decisionscreatedecision) | **POST** /api/v1/decisions | Create Decision |
| [**decisionsCreateSystemoneDecision**](DecisionsApi.md#decisionscreatesystemonedecision) | **POST** /api/v1/systemone | Create Systemone Decision |



## decisionsCreateDecision

> DecisionResponse decisionsCreateDecision(decisionRequest)

Create Decision

Answer typed questions (noul, choice, score) about a state.  &#x60;&#x60;model&#x60;&#x60; is &#x60;&#x60;&lt;provider&gt;:&lt;model&gt;&#x60;&#x60;, where the provider is a &#x60;&#x60;decision_providers&#x60;&#x60; entry, for example &#x60;&#x60;typesafe:jev-latest&#x60;&#x60; or &#x60;&#x60;openrouter:typesafe/jev-1.13&#x60;&#x60;.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and may name any existing user. - API key: usage and spend bind to the key\&#39;s own user; a &#x60;&#x60;user&#x60;&#x60; naming a   different user is rejected with 403 unless mismatch rejection is off.

### Example

```ts
import {
  Configuration,
  DecisionsApi,
} from '';
import type { DecisionsCreateDecisionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DecisionsApi(config);

  const body = {
    // DecisionRequest
    decisionRequest: ...,
  } satisfies DecisionsCreateDecisionRequest;

  try {
    const data = await api.decisionsCreateDecision(body);
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
| **decisionRequest** | [DecisionRequest](DecisionRequest.md) |  | |

### Return type

[**DecisionResponse**](DecisionResponse.md)

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


## decisionsCreateSystemoneDecision

> DecisionResponse decisionsCreateSystemoneDecision(decisionRequest)

Create Systemone Decision

Answer typed questions at the path TypeSafe\&#39;s SDK and llama-server use.  Identical to &#x60;&#x60;POST /api/v1/decisions&#x60;&#x60;; point the client\&#39;s base URL at the gateway\&#39;s &#x60;&#x60;/api&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  DecisionsApi,
} from '';
import type { DecisionsCreateSystemoneDecisionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DecisionsApi(config);

  const body = {
    // DecisionRequest
    decisionRequest: ...,
  } satisfies DecisionsCreateSystemoneDecisionRequest;

  try {
    const data = await api.decisionsCreateSystemoneDecision(body);
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
| **decisionRequest** | [DecisionRequest](DecisionRequest.md) |  | |

### Return type

[**DecisionResponse**](DecisionResponse.md)

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

