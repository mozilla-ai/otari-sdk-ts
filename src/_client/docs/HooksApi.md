# HooksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**hooksCheckPolicy**](HooksApi.md#hookscheckpolicy) | **POST** /api/v1/hooks/check | Check Policy |
| [**hooksRecordGuardrailDefinition**](HooksApi.md#hooksrecordguardraildefinition) | **POST** /api/v1/hooks/guardrails | Record Guardrail Definition |



## hooksCheckPolicy

> PolicyCheckResponse hooksCheckPolicy(policyCheckRequest)

Check Policy

Evaluate a submitted policy against submitted evidence.  Authenticated with either an API key or the master key (the router-level gate), like &#x60;&#x60;POST /api/v1/usage/external-events&#x60;&#x60;: this identifies who sent the request, not whether its evidence is true. &#x60;blocked&#x60; is set when a required gate\&#39;s outcome is not &#x60;pass&#x60;/&#x60;not_applicable&#x60; (an unresolved gate never counts as a pass).  The actual parse-and-evaluate work is &#x60;&#x60;otari_agent.domain.check.run_policy_check&#x60;&#x60;, shared with &#x60;&#x60;otari hook&#x60;&#x60;\&#39;s own local evaluation: this route\&#39;s own job is authentication, translating that function\&#39;s tri-state request fields into its own typed ones, and turning &#x60;&#x60;PolicyCheckError&#x60;&#x60; into a 422.

### Example

```ts
import {
  Configuration,
  HooksApi,
} from '';
import type { HooksCheckPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HooksApi(config);

  const body = {
    // PolicyCheckRequest
    policyCheckRequest: ...,
  } satisfies HooksCheckPolicyRequest;

  try {
    const data = await api.hooksCheckPolicy(body);
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
| **policyCheckRequest** | [PolicyCheckRequest](PolicyCheckRequest.md) |  | |

### Return type

[**PolicyCheckResponse**](PolicyCheckResponse.md)

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


## hooksRecordGuardrailDefinition

> GuardrailDefinitionResponse hooksRecordGuardrailDefinition(guardrailDefinitionRequest)

Record Guardrail Definition

Keep one version of an agent guardrail, so the gate spans that name it can say what each gate is for.  &#x60;otari hook&#x60; sends this once per version, the first time it reports a check against it. The fingerprint is recomputed from the gates, and one that does not match the one sent is refused, so a version cannot be stored under another\&#39;s name. Sending a version again changes nothing. A workspace keeps at most 1,000 versions, and a new one past that is refused with a 409. It is stored in the API key\&#39;s workspace, beside that key\&#39;s traces, and takes the same key a trace export does: a budget-exempt API key, never the master key.

### Example

```ts
import {
  Configuration,
  HooksApi,
} from '';
import type { HooksRecordGuardrailDefinitionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HooksApi(config);

  const body = {
    // GuardrailDefinitionRequest
    guardrailDefinitionRequest: ...,
  } satisfies HooksRecordGuardrailDefinitionRequest;

  try {
    const data = await api.hooksRecordGuardrailDefinition(body);
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
| **guardrailDefinitionRequest** | [GuardrailDefinitionRequest](GuardrailDefinitionRequest.md) |  | |

### Return type

[**GuardrailDefinitionResponse**](GuardrailDefinitionResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **409** | The workspace already keeps the most guardrail versions it may, and this one is new. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

