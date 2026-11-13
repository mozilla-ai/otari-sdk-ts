# OauthAppsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**oauthAppsAppDetails**](OauthAppsApi.md#oauthappsappdetails) | **GET** /api/v1/oauth/apps/clients | App Details |
| [**oauthAppsAppWorkspaces**](OauthAppsApi.md#oauthappsappworkspaces) | **GET** /api/v1/oauth/apps/workspaces | App Workspaces |
| [**oauthAppsAuthorizationRedirect**](OauthAppsApi.md#oauthappsauthorizationredirect) | **GET** /api/v1/oauth/apps/authorize | Authorization Redirect |
| [**oauthAppsAuthorize**](OauthAppsApi.md#oauthappsauthorize) | **POST** /api/v1/oauth/apps/authorize | Authorize |
| [**oauthAppsExchange**](OauthAppsApi.md#oauthappsexchange) | **POST** /api/v1/oauth/apps/token | Exchange |
| [**oauthAppsRevoke**](OauthAppsApi.md#oauthappsrevoke) | **POST** /api/v1/oauth/apps/revoke | Revoke |



## oauthAppsAppDetails

> AppDetails oauthAppsAppDetails(clientId, redirectUri)

App Details

Validate the app and redirect before the dashboard offers consent.

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsAppDetailsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new OauthAppsApi();

  const body = {
    // string
    clientId: clientId_example,
    // string
    redirectUri: redirectUri_example,
  } satisfies OauthAppsAppDetailsRequest;

  try {
    const data = await api.oauthAppsAppDetails(body);
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
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **redirectUri** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AppDetails**](AppDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthAppsAppWorkspaces

> WorkspacesPublic oauthAppsAppWorkspaces(search, skip, limit)

App Workspaces

List workspaces where the signed-in identity may authorize app access.

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsAppWorkspacesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OauthAppsApi(config);

  const body = {
    // string (optional)
    search: search_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies OauthAppsAppWorkspacesRequest;

  try {
    const data = await api.oauthAppsAppWorkspaces(body);
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
| **search** | `string` |  | [Optional] [Defaults to `&#39;&#39;`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**WorkspacesPublic**](WorkspacesPublic.md)

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


## oauthAppsAuthorizationRedirect

> oauthAppsAuthorizationRedirect(clientId, redirectUri, state, codeChallenge, codeChallengeMethod, responseType)

Authorization Redirect

Start authorization with standard OAuth query parameters, preserving them through dashboard sign-in.

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsAuthorizationRedirectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new OauthAppsApi();

  const body = {
    // string
    clientId: clientId_example,
    // string
    redirectUri: redirectUri_example,
    // string
    state: state_example,
    // string
    codeChallenge: codeChallenge_example,
    // 'S256'
    codeChallengeMethod: codeChallengeMethod_example,
    // 'code' (optional)
    responseType: responseType_example,
  } satisfies OauthAppsAuthorizationRedirectRequest;

  try {
    const data = await api.oauthAppsAuthorizationRedirect(body);
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
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **redirectUri** | `string` |  | [Defaults to `undefined`] |
| **state** | `string` |  | [Defaults to `undefined`] |
| **codeChallenge** | `string` |  | [Defaults to `undefined`] |
| **codeChallengeMethod** | `S256` |  | [Defaults to `undefined`] [Enum: S256] |
| **responseType** | `code` |  | [Optional] [Defaults to `&#39;code&#39;`] [Enum: code] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Continue to dashboard sign-in and consent. |  * Location -  <br>  |
| **400** | Bad Request |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthAppsAuthorize

> AppAuthorizationResponse oauthAppsAuthorize(appAuthorizationRequest)

Authorize

Approve access to the caller\&#39;s selected workspace, with normal budget enforcement.

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsAuthorizeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OauthAppsApi(config);

  const body = {
    // AppAuthorizationRequest
    appAuthorizationRequest: ...,
  } satisfies OauthAppsAuthorizeRequest;

  try {
    const data = await api.oauthAppsAuthorize(body);
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
| **appAuthorizationRequest** | [AppAuthorizationRequest](AppAuthorizationRequest.md) |  | |

### Return type

[**AppAuthorizationResponse**](AppAuthorizationResponse.md)

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


## oauthAppsExchange

> AppTokenResponse oauthAppsExchange(clientId, code, codeVerifier, grantType, redirectUri)

Exchange

Exchange a form-encoded single-use authorization code and S256 verifier for a revocable API key.

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsExchangeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new OauthAppsApi();

  const body = {
    // string
    clientId: clientId_example,
    // string
    code: code_example,
    // string
    codeVerifier: codeVerifier_example,
    // string
    grantType: grantType_example,
    // string
    redirectUri: redirectUri_example,
  } satisfies OauthAppsExchangeRequest;

  try {
    const data = await api.oauthAppsExchange(body);
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
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **code** | `string` |  | [Defaults to `undefined`] |
| **codeVerifier** | `string` |  | [Defaults to `undefined`] |
| **grantType** | `authorization_code` |  | [Defaults to `undefined`] [Enum: authorization_code] |
| **redirectUri** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AppTokenResponse**](AppTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthAppsRevoke

> any oauthAppsRevoke(token, tokenTypeHint)

Revoke

Revoke the presented app token. Unknown or previously revoked tokens also succeed (RFC 7009).

### Example

```ts
import {
  Configuration,
  OauthAppsApi,
} from '';
import type { OauthAppsRevokeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new OauthAppsApi();

  const body = {
    // string
    token: token_example,
    // string (optional)
    tokenTypeHint: tokenTypeHint_example,
  } satisfies OauthAppsRevokeRequest;

  try {
    const data = await api.oauthAppsRevoke(body);
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
| **token** | `string` |  | [Defaults to `undefined`] |
| **tokenTypeHint** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad Request |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

