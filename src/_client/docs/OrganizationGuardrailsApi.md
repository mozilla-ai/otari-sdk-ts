# OrganizationGuardrailsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationGuardrailsCreateOrganizationGuardrail**](OrganizationGuardrailsApi.md#organizationguardrailscreateorganizationguardrail) | **POST** /api/v1/organizations/me/guardrails | Create Organization Guardrail |
| [**organizationGuardrailsDeleteOrganizationGuardrail**](OrganizationGuardrailsApi.md#organizationguardrailsdeleteorganizationguardrail) | **DELETE** /api/v1/organizations/me/guardrails/{guardrail_id} | Delete Organization Guardrail |
| [**organizationGuardrailsListOrganizationGuardrails**](OrganizationGuardrailsApi.md#organizationguardrailslistorganizationguardrails) | **GET** /api/v1/organizations/me/guardrails | List Organization Guardrails |
| [**organizationGuardrailsUpdateOrganizationGuardrail**](OrganizationGuardrailsApi.md#organizationguardrailsupdateorganizationguardrail) | **PATCH** /api/v1/organizations/me/guardrails/{guardrail_id} | Update Organization Guardrail |



## organizationGuardrailsCreateOrganizationGuardrail

> OrganizationGuardrailPublic organizationGuardrailsCreateOrganizationGuardrail(organizationGuardrailCreate)

Create Organization Guardrail

Mandate a guardrail across the organization. Organization owners and admins only.  The guardrail runs on every request from the workspaces it is scoped to, in addition to whatever the caller asked for, with the stricter of the two settings applying to a profile both name. Set &#x60;&#x60;applies_to_all_workspaces&#x60;&#x60; for it to cover workspaces created later; otherwise a new workspace inherits nothing and the entry runs only in the workspaces &#x60;&#x60;workspace_ids&#x60;&#x60; lists.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailsApi,
} from '';
import type { OrganizationGuardrailsCreateOrganizationGuardrailRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailsApi(config);

  const body = {
    // OrganizationGuardrailCreate
    organizationGuardrailCreate: ...,
  } satisfies OrganizationGuardrailsCreateOrganizationGuardrailRequest;

  try {
    const data = await api.organizationGuardrailsCreateOrganizationGuardrail(body);
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
| **organizationGuardrailCreate** | [OrganizationGuardrailCreate](OrganizationGuardrailCreate.md) |  | |

### Return type

[**OrganizationGuardrailPublic**](OrganizationGuardrailPublic.md)

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


## organizationGuardrailsDeleteOrganizationGuardrail

> Message organizationGuardrailsDeleteOrganizationGuardrail(guardrailId)

Delete Organization Guardrail

Stop mandating a guardrail, discarding its credential and scope.  Organization owners and admins only. Use &#x60;&#x60;enabled: false&#x60;&#x60; instead to stop it everywhere while keeping both.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailsApi,
} from '';
import type { OrganizationGuardrailsDeleteOrganizationGuardrailRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailsApi(config);

  const body = {
    // string
    guardrailId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationGuardrailsDeleteOrganizationGuardrailRequest;

  try {
    const data = await api.organizationGuardrailsDeleteOrganizationGuardrail(body);
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
| **guardrailId** | `string` |  | [Defaults to `undefined`] |

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


## organizationGuardrailsListOrganizationGuardrails

> OrganizationGuardrailsPublic organizationGuardrailsListOrganizationGuardrails(skip, limit)

List Organization Guardrails

List the guardrails the caller\&#39;s organization mandates.  Organization owners and admins only, unlike the pricing overrides next door that any member may read: these rows name the endpoints this gateway connects to and say which of them carry a credential. A credential is never returned, only whether one is set.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailsApi,
} from '';
import type { OrganizationGuardrailsListOrganizationGuardrailsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailsApi(config);

  const body = {
    // number | Number of records to skip (optional)
    skip: 56,
    // number | Maximum number of records to return (optional)
    limit: 56,
  } satisfies OrganizationGuardrailsListOrganizationGuardrailsRequest;

  try {
    const data = await api.organizationGuardrailsListOrganizationGuardrails(body);
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

[**OrganizationGuardrailsPublic**](OrganizationGuardrailsPublic.md)

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


## organizationGuardrailsUpdateOrganizationGuardrail

> OrganizationGuardrailPublic organizationGuardrailsUpdateOrganizationGuardrail(guardrailId, organizationGuardrailUpdate)

Update Organization Guardrail

Change a guardrail\&#39;s profile, endpoint, credential, modes, or scope.  Organization owners and admins only. Omitted fields are left as they are; &#x60;&#x60;workspace_ids&#x60;&#x60; replaces the scope whole when sent, and &#x60;&#x60;url&#x60;&#x60; and &#x60;&#x60;credential&#x60;&#x60; are cleared by sending an empty string rather than null.

### Example

```ts
import {
  Configuration,
  OrganizationGuardrailsApi,
} from '';
import type { OrganizationGuardrailsUpdateOrganizationGuardrailRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationGuardrailsApi(config);

  const body = {
    // string
    guardrailId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // OrganizationGuardrailUpdate
    organizationGuardrailUpdate: ...,
  } satisfies OrganizationGuardrailsUpdateOrganizationGuardrailRequest;

  try {
    const data = await api.organizationGuardrailsUpdateOrganizationGuardrail(body);
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
| **guardrailId** | `string` |  | [Defaults to `undefined`] |
| **organizationGuardrailUpdate** | [OrganizationGuardrailUpdate](OrganizationGuardrailUpdate.md) |  | |

### Return type

[**OrganizationGuardrailPublic**](OrganizationGuardrailPublic.md)

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

