# OrganizationGuardrailDefinitionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationGuardrailDefinitionsCreateOrganizationGuardrailDefinition**](OrganizationGuardrailDefinitionsApi.md#organizationguardraildefinitionscreateorganizationguardraildefinition) | **POST** /api/v1/organizations/me/guardrail-definitions | Create Organization Guardrail Definition |
| [**organizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinition**](OrganizationGuardrailDefinitionsApi.md#organizationguardraildefinitionsdeleteorganizationguardraildefinition) | **DELETE** /api/v1/organizations/me/guardrail-definitions/{definition_id} | Delete Organization Guardrail Definition |
| [**organizationGuardrailDefinitionsListOrganizationGuardrailDefinitions**](OrganizationGuardrailDefinitionsApi.md#organizationguardraildefinitionslistorganizationguardraildefinitions) | **GET** /api/v1/organizations/me/guardrail-definitions | List Organization Guardrail Definitions |
| [**organizationGuardrailDefinitionsTestOrganizationGuardrailDefinition**](OrganizationGuardrailDefinitionsApi.md#organizationguardraildefinitionstestorganizationguardraildefinition) | **POST** /api/v1/organizations/me/guardrail-definitions/{definition_id}/test | Test Organization Guardrail Definition |
| [**organizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinition**](OrganizationGuardrailDefinitionsApi.md#organizationguardraildefinitionsupdateorganizationguardraildefinition) | **PATCH** /api/v1/organizations/me/guardrail-definitions/{definition_id} | Update Organization Guardrail Definition |



## organizationGuardrailDefinitionsCreateOrganizationGuardrailDefinition

> OrganizationGuardrailDefinitionPublic organizationGuardrailDefinitionsCreateOrganizationGuardrailDefinition(organizationGuardrailDefinitionCreate)

Create Organization Guardrail Definition

Define a guardrail this deployment will build and call itself. Organization owners and admins only.  &#x60;&#x60;guardrail_name&#x60;&#x60; must be one the built-in guardrail catalog lists (&#x60;&#x60;GET /api/v1/tool-settings/guardrails/catalog&#x60;&#x60;), and &#x60;&#x60;create_kwargs&#x60;&#x60; must satisfy that guardrail\&#39;s constructor as the catalog describes it: no argument it does not declare, nothing it types as a live object rather than configuration, and every required argument no environment variable can supply. Arguments the catalog marks secret are encrypted at rest.  A definition on its own changes no request. Mandate it through &#x60;&#x60;/api/v1/organizations/me/guardrails&#x60;&#x60; for it to run.  The definition is saved first and built second, so a guardrail this deployment cannot construct is still stored and answers &#x60;&#x60;build_state: \&quot;failed\&quot;&#x60;&#x60; rather than refusing the write. Why it failed is not reported: a vendor library may put the arguments it was handed, which are your credentials, into its own error message. The reason is in the gateway\&#39;s log.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailDefinitionsApi,
} from '';
import type { OrganizationGuardrailDefinitionsCreateOrganizationGuardrailDefinitionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailDefinitionsApi(config);

  const body = {
    // OrganizationGuardrailDefinitionCreate
    organizationGuardrailDefinitionCreate: ...,
  } satisfies OrganizationGuardrailDefinitionsCreateOrganizationGuardrailDefinitionRequest;

  try {
    const data = await api.organizationGuardrailDefinitionsCreateOrganizationGuardrailDefinition(body);
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
| **organizationGuardrailDefinitionCreate** | [OrganizationGuardrailDefinitionCreate](OrganizationGuardrailDefinitionCreate.md) |  | |

### Return type

[**OrganizationGuardrailDefinitionPublic**](OrganizationGuardrailDefinitionPublic.md)

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


## organizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinition

> Message organizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinition(definitionId)

Delete Organization Guardrail Definition

Drop a definition and the credentials it holds.  Organization owners and admins only. Use &#x60;&#x60;enabled: false&#x60;&#x60; instead to stop the guardrail everywhere while keeping both.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailDefinitionsApi,
} from '';
import type { OrganizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinitionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinitionRequest;

  try {
    const data = await api.organizationGuardrailDefinitionsDeleteOrganizationGuardrailDefinition(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

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


## organizationGuardrailDefinitionsListOrganizationGuardrailDefinitions

> OrganizationGuardrailDefinitionsPublic organizationGuardrailDefinitionsListOrganizationGuardrailDefinitions(skip, limit)

List Organization Guardrail Definitions

List the guardrails the caller\&#39;s organization has defined.  Organization owners and admins only. A stored vendor credential is never returned: each one comes back as &#x60;&#x60;***&#x60;&#x60; under its own name, which is what a form resubmits to keep it.  &#x60;&#x60;build_state&#x60;&#x60; answers for the worker that served this request, so a read taken moments after a write may still report &#x60;&#x60;pending&#x60;&#x60; on a sibling that has not caught up.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailDefinitionsApi,
} from '';
import type { OrganizationGuardrailDefinitionsListOrganizationGuardrailDefinitionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailDefinitionsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies OrganizationGuardrailDefinitionsListOrganizationGuardrailDefinitionsRequest;

  try {
    const data = await api.organizationGuardrailDefinitionsListOrganizationGuardrailDefinitions(body);
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

[**OrganizationGuardrailDefinitionsPublic**](OrganizationGuardrailDefinitionsPublic.md)

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


## organizationGuardrailDefinitionsTestOrganizationGuardrailDefinition

> OrganizationGuardrailDefinitionTestResult organizationGuardrailDefinitionsTestOrganizationGuardrailDefinition(definitionId, organizationGuardrailDefinitionTest)

Test Organization Guardrail Definition

Run a definition\&#39;s guardrail over some text and return its verdict.  Organization owners and admins only. The guardrail is the one the worker that answered already holds built, so this tests what is running rather than building it again. Nothing is stored and no mandate is involved; &#x60;&#x60;validate_kwargs&#x60;&#x60; stands in for what a mandate would pass with each check.  A definition this worker does not hold built answers 409, and its &#x60;&#x60;build_state&#x60;&#x60; says why. A vendor call that fails answers 502, and the reason is in the gateway\&#39;s log only: a vendor library may put the credentials it was handed into its own message.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailDefinitionsApi,
} from '';
import type { OrganizationGuardrailDefinitionsTestOrganizationGuardrailDefinitionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrganizationGuardrailDefinitionTest
    organizationGuardrailDefinitionTest: ...,
  } satisfies OrganizationGuardrailDefinitionsTestOrganizationGuardrailDefinitionRequest;

  try {
    const data = await api.organizationGuardrailDefinitionsTestOrganizationGuardrailDefinition(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **organizationGuardrailDefinitionTest** | [OrganizationGuardrailDefinitionTest](OrganizationGuardrailDefinitionTest.md) |  | |

### Return type

[**OrganizationGuardrailDefinitionTestResult**](OrganizationGuardrailDefinitionTestResult.md)

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


## organizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinition

> OrganizationGuardrailDefinitionPublic organizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinition(definitionId, organizationGuardrailDefinitionUpdate)

Update Organization Guardrail Definition

Change a definition\&#39;s name, guardrail, build arguments, or enabled flag.  Organization owners and admins only. Omitted fields are left as they are. &#x60;&#x60;create_kwargs&#x60;&#x60; replaces the arguments whole when sent, an argument sent as &#x60;&#x60;***&#x60;&#x60; keeps the value stored under that name, and omitting the field entirely leaves the stored credentials untouched and unread.  The guardrail is rebuilt afterwards and the response reports the outcome in &#x60;&#x60;build_state&#x60;&#x60;, so repairing a credential shows the definition running again in the same response, and &#x60;&#x60;enabled: false&#x60;&#x60; stops it here rather than on the next refresh.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailDefinitionsApi,
} from '';
import type { OrganizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinitionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrganizationGuardrailDefinitionUpdate
    organizationGuardrailDefinitionUpdate: ...,
  } satisfies OrganizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinitionRequest;

  try {
    const data = await api.organizationGuardrailDefinitionsUpdateOrganizationGuardrailDefinition(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **organizationGuardrailDefinitionUpdate** | [OrganizationGuardrailDefinitionUpdate](OrganizationGuardrailDefinitionUpdate.md) |  | |

### Return type

[**OrganizationGuardrailDefinitionPublic**](OrganizationGuardrailDefinitionPublic.md)

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

