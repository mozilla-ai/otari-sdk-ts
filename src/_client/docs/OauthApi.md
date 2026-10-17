# OauthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**oauthExchangeToken**](OauthApi.md#oauthexchangetoken) | **POST** /api/v1/oauth/token | Exchange Token |



## oauthExchangeToken

> FederationTokenResponse oauthExchangeToken(federationTokenRequest)

Exchange Token

Exchange an identity token for an access token (the RFC 7523 &#x60;&#x60;jwt-bearer&#x60;&#x60; grant).  The identity token must verify against an issuer on &#x60;&#x60;federation_issuers&#x60;&#x60; and match the federation rule &#x60;&#x60;federation_rule_id&#x60;&#x60; names. &#x60;&#x60;organization_id&#x60;&#x60;, &#x60;&#x60;workspace_id&#x60;&#x60; and &#x60;&#x60;service_account_id&#x60;&#x60;, where set, must be the UUIDs of the rule\&#39;s key\&#39;s organization and workspace and the key\&#39;s id. The access token authenticates as that key until &#x60;&#x60;expires_in&#x60;&#x60; runs out, the rule is deleted or the key stops passing its checks.  Every refusal of the identity token answers 401 &#x60;&#x60;invalid_grant&#x60;&#x60; with the same description.

### Example

```ts
import {
  Configuration,
  OauthApi,
} from '';
import type { OauthExchangeTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OauthApi(config);

  const body = {
    // FederationTokenRequest
    federationTokenRequest: ...,
  } satisfies OauthExchangeTokenRequest;

  try {
    const data = await api.oauthExchangeToken(body);
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
| **federationTokenRequest** | [FederationTokenRequest](FederationTokenRequest.md) |  | |

### Return type

[**FederationTokenResponse**](FederationTokenResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | invalid_request or unsupported_grant_type |  -  |
| **401** | invalid_grant |  -  |
| **422** | Validation Error |  -  |
| **503** | temporarily_unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

