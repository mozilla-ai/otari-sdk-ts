# OrganizationSsoApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationSsoDeleteOrganizationSso**](OrganizationSsoApi.md#organizationssodeleteorganizationsso) | **DELETE** /api/v1/organizations/me/sso | Delete Organization Sso |
| [**organizationSsoGetOrganizationSso**](OrganizationSsoApi.md#organizationssogetorganizationsso) | **GET** /api/v1/organizations/me/sso | Get Organization Sso |
| [**organizationSsoGetOrganizationSsoPreflight**](OrganizationSsoApi.md#organizationssogetorganizationssopreflight) | **GET** /api/v1/organizations/me/sso/preflight | Get Organization Sso Preflight |
| [**organizationSsoPatchOrganizationSso**](OrganizationSsoApi.md#organizationssopatchorganizationsso) | **PATCH** /api/v1/organizations/me/sso | Patch Organization Sso |
| [**organizationSsoPutOrganizationSso**](OrganizationSsoApi.md#organizationssoputorganizationsso) | **PUT** /api/v1/organizations/me/sso | Put Organization Sso |
| [**organizationSsoPutOrganizationSsoEnforcement**](OrganizationSsoApi.md#organizationssoputorganizationssoenforcement) | **PUT** /api/v1/organizations/me/sso/enforcement | Put Organization Sso Enforcement |
| [**organizationSsoTestOrganizationSso**](OrganizationSsoApi.md#organizationssotestorganizationsso) | **POST** /api/v1/organizations/me/sso/test | Test Organization Sso |



## organizationSsoDeleteOrganizationSso

> organizationSsoDeleteOrganizationSso()

Delete Organization Sso

Remove the caller\&#39;s organization\&#39;s own sign-in connection. Owners and admins only.  Refused with 404 when the organization has not saved a connection yet, and with 400 while the organization still requires sign-in through it: turn that requirement off first.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoDeleteOrganizationSsoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  try {
    const data = await api.organizationSsoDeleteOrganizationSso();
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

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationSsoGetOrganizationSso

> OrganizationSsoPublic organizationSsoGetOrganizationSso()

Get Organization Sso

Read the caller\&#39;s organization\&#39;s own sign-in connection. Owners and admins only.  &#x60;&#x60;connection&#x60;&#x60; is null until the organization saves one.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoGetOrganizationSsoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  try {
    const data = await api.organizationSsoGetOrganizationSso();
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

[**OrganizationSsoPublic**](OrganizationSsoPublic.md)

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


## organizationSsoGetOrganizationSsoPreflight

> OrganizationSsoPreflightPublic organizationSsoGetOrganizationSsoPreflight()

Get Organization Sso Preflight

Report who requiring sign-in through the caller\&#39;s organization\&#39;s own connection would affect.  Owners and admins only. Refused with 404 when the organization has not configured a connection yet.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoGetOrganizationSsoPreflightRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  try {
    const data = await api.organizationSsoGetOrganizationSsoPreflight();
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

[**OrganizationSsoPreflightPublic**](OrganizationSsoPreflightPublic.md)

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


## organizationSsoPatchOrganizationSso

> OrganizationSsoPublic organizationSsoPatchOrganizationSso(oIDCConnectionEnabledRequest)

Patch Organization Sso

Pause or resume sign-in through the caller\&#39;s organization\&#39;s own connection. Owners and admins only.  Writes the one field, so the issuer is neither re-read nor re-submitted and the stored client secret stands. Refused with 404 when the organization has not saved a connection yet, and with 409 when pausing a connection the organization still requires sign-in through: stop requiring it first.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoPatchOrganizationSsoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  const body = {
    // OIDCConnectionEnabledRequest
    oIDCConnectionEnabledRequest: ...,
  } satisfies OrganizationSsoPatchOrganizationSsoRequest;

  try {
    const data = await api.organizationSsoPatchOrganizationSso(body);
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
| **oIDCConnectionEnabledRequest** | [OIDCConnectionEnabledRequest](OIDCConnectionEnabledRequest.md) |  | |

### Return type

[**OrganizationSsoPublic**](OrganizationSsoPublic.md)

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


## organizationSsoPutOrganizationSso

> OrganizationSsoPublic organizationSsoPutOrganizationSso(oIDCConnectionRequest)

Put Organization Sso

Discover the submitted issuer and save the caller\&#39;s organization\&#39;s own sign-in connection.  Owners and admins only. Replaces any existing connection. The client secret is encrypted at rest and never served back.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoPutOrganizationSsoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  const body = {
    // OIDCConnectionRequest
    oIDCConnectionRequest: ...,
  } satisfies OrganizationSsoPutOrganizationSsoRequest;

  try {
    const data = await api.organizationSsoPutOrganizationSso(body);
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
| **oIDCConnectionRequest** | [OIDCConnectionRequest](OIDCConnectionRequest.md) |  | |

### Return type

[**OrganizationSsoPublic**](OrganizationSsoPublic.md)

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


## organizationSsoPutOrganizationSsoEnforcement

> organizationSsoPutOrganizationSsoEnforcement(organizationSsoEnforcementRequest)

Put Organization Sso Enforcement

Require, or stop requiring, sign-in through the caller\&#39;s organization\&#39;s own connection. Owners and admins only.  Requiring sign-in is refused with 404 when the organization has not configured a connection yet, and with 400 before anybody has signed in through the connection, when it names no owner who keeps another way in and waives none, or when the account it names could not sign in while the connection is unavailable. An account named at all must be one of the organization\&#39;s own active owners, whether or not sign-in is being required. Turning enforcement off has no other precondition.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoPutOrganizationSsoEnforcementRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  const body = {
    // OrganizationSsoEnforcementRequest
    organizationSsoEnforcementRequest: ...,
  } satisfies OrganizationSsoPutOrganizationSsoEnforcementRequest;

  try {
    const data = await api.organizationSsoPutOrganizationSsoEnforcement(body);
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
| **organizationSsoEnforcementRequest** | [OrganizationSsoEnforcementRequest](OrganizationSsoEnforcementRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationSsoTestOrganizationSso

> OrganizationSsoPublic organizationSsoTestOrganizationSso()

Test Organization Sso

Re-discover the caller\&#39;s organization\&#39;s own issuer and store the result. Owners and admins only.  Refused with 404 when the organization has not saved a connection yet.

### Example

```ts
import {
  Configuration,
  OrganizationSsoApi,
} from '';
import type { OrganizationSsoTestOrganizationSsoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationSsoApi(config);

  try {
    const data = await api.organizationSsoTestOrganizationSso();
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

[**OrganizationSsoPublic**](OrganizationSsoPublic.md)

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

