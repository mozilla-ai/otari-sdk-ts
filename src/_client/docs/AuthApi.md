# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authAuthenticatePasskey**](AuthApi.md#authauthenticatepasskey) | **POST** /api/v1/auth/webauthn/authenticate | Authenticate Passkey |
| [**authAuthenticationOptions**](AuthApi.md#authauthenticationoptions) | **POST** /api/v1/auth/webauthn/authenticate/options | Authentication Options |
| [**authAuthorize**](AuthApi.md#authauthorize) | **GET** /api/v1/auth/oauth/{provider}/authorize | Authorize |
| [**authCallback**](AuthApi.md#authcallback) | **POST** /api/v1/auth/oauth/{provider}/callback | Callback |
| [**authConfirmReset**](AuthApi.md#authconfirmreset) | **POST** /api/v1/auth/password/reset/confirm | Confirm Reset |
| [**authCreateSession**](AuthApi.md#authcreatesession) | **POST** /api/v1/auth/session | Create Session |
| [**authDeletePasskey**](AuthApi.md#authdeletepasskey) | **DELETE** /api/v1/auth/webauthn/credentials/{credential_id} | Delete Passkey |
| [**authDeleteSession**](AuthApi.md#authdeletesession) | **DELETE** /api/v1/auth/session | Delete Session |
| [**authListPasskeys**](AuthApi.md#authlistpasskeys) | **GET** /api/v1/auth/webauthn/credentials | List Passkeys |
| [**authRegisterPasskey**](AuthApi.md#authregisterpasskey) | **POST** /api/v1/auth/webauthn/register | Register Passkey |
| [**authRegistrationOptions**](AuthApi.md#authregistrationoptions) | **POST** /api/v1/auth/webauthn/register/options | Registration Options |
| [**authRenamePasskey**](AuthApi.md#authrenamepasskey) | **PATCH** /api/v1/auth/webauthn/credentials/{credential_id} | Rename Passkey |
| [**authRequestReset**](AuthApi.md#authrequestreset) | **POST** /api/v1/auth/password/reset | Request Reset |
| [**authResendVerification**](AuthApi.md#authresendverification) | **POST** /api/v1/auth/resend-verification | Resend Verification |
| [**authSetDashboardPassword**](AuthApi.md#authsetdashboardpassword) | **PUT** /api/v1/auth/password | Set Dashboard Password |
| [**authSignup**](AuthApi.md#authsignup) | **POST** /api/v1/auth/signup | Signup |
| [**authVerifyEmailRoute**](AuthApi.md#authverifyemailroute) | **POST** /api/v1/auth/verify-email | Verify Email Route |



## authAuthenticatePasskey

> PasskeySessionResponse authAuthenticatePasskey(authenticatePasskeyRequest)

Authenticate Passkey

Verify an assertion and set the HttpOnly session cookie.  The session is bound to the identity whose passkey signed, exactly as a password sign-in binds one to the identity that authenticated, so every request it later authenticates resolves the same caller.  A refusal is counted like the other sign-in failures (&#x60;&#x60;record_auth_failure&#x60;&#x60;) and answered as a 401 by the tenancy error handler. Unlike the password path there is no separate post-failure throttle: this route is throttled unconditionally on the way in, because unlike a password there is no legitimate caller here whose correct credential must never be blocked (a passkey ceremony is one round trip a browser drives, not something a person retries by hand).  **Maintenance mode freezes this the way it freezes the password sign-in.** The freeze is on starting a session, not on a credential, so a passkey has to answer to it or the switch is bypassable by anybody holding one, which is the whole population it exists to hold off during a redeploy. Refused before the assertion is verified, so a frozen deployment does no crypto and counts no auth failure: nobody failed to authenticate, the gateway declined to try.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthAuthenticatePasskeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthenticatePasskeyRequest
    authenticatePasskeyRequest: ...,
  } satisfies AuthAuthenticatePasskeyRequest;

  try {
    const data = await api.authAuthenticatePasskey(body);
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
| **authenticatePasskeyRequest** | [AuthenticatePasskeyRequest](AuthenticatePasskeyRequest.md) |  | |

### Return type

[**PasskeySessionResponse**](PasskeySessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authAuthenticationOptions

> { [key: string]: any; } authAuthenticationOptions()

Authentication Options

Start a passkey sign-in. Public, throttled, and names no credentials.  The options carry no &#x60;&#x60;allowCredentials&#x60;&#x60;, so this publishes nothing about who holds a passkey here; see &#x60;&#x60;webauthn_service.begin_authentication&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthAuthenticationOptionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authAuthenticationOptions();
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

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authAuthorize

> AuthorizeResponse authAuthorize(provider)

Authorize

Start an OAuth sign-in: where to send the browser, and the state to keep.  A GET that writes, which is the one thing to know about it. It records the authorization it is about to start (the state\&#39;s hash, the PKCE verifier the exchange will need, and the digest of a flow secret it sets as an HttpOnly cookie) so the callback has something to check against, and that record is the whole reason the callback can refuse a code this deployment never asked for, or one presented from a browser other than the one that asked.  Still safe to repeat: each call mints its own state, and only the one the browser kept is the one it sends back. The rows the others leave expire on their own and are swept by the next call. The cookie is reused when the browser already holds one, so a second tab does not break the first.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthAuthorizeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string | Which OAuth provider to sign in with.
    provider: provider_example,
  } satisfies AuthAuthorizeRequest;

  try {
    const data = await api.authAuthorize(body);
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
| **provider** | `string` | Which OAuth provider to sign in with. | [Defaults to `undefined`] |

### Return type

[**AuthorizeResponse**](AuthorizeResponse.md)

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


## authCallback

> OAuthSessionResponse authCallback(provider, oAuthCallbackRequest)

Callback

Exchange an authorization code and set the HttpOnly session cookie.  The session is bound to the identity the provider\&#39;s account resolves to, exactly as a password sign-in binds one to the identity that authenticated, so every request it later authenticates resolves the same caller.  A refusal is counted like the other sign-in failures (&#x60;&#x60;record_auth_failure&#x60;&#x60;) and rendered by the tenancy error handler. Like the passkey route there is no separate post-failure throttle: this route is throttled unconditionally on the way in, because there is no legitimate caller here whose correct credential must never be blocked. An authorization code is single-use and minted by a redirect, not something a person retries by hand.  **Maintenance mode freezes this the way it freezes the other two sign-ins.** The freeze is on starting a session, not on a credential, so an OAuth sign-in has to answer to it or the switch is bypassable by anybody holding a Google account. Refused before the exchange, so a frozen deployment makes no outbound call, spends nobody\&#39;s authorization code, and counts no auth failure: nobody failed to authenticate, the gateway declined to try.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthCallbackRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string | Which OAuth provider to sign in with.
    provider: provider_example,
    // OAuthCallbackRequest
    oAuthCallbackRequest: ...,
  } satisfies AuthCallbackRequest;

  try {
    const data = await api.authCallback(body);
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
| **provider** | `string` | Which OAuth provider to sign in with. | [Defaults to `undefined`] |
| **oAuthCallbackRequest** | [OAuthCallbackRequest](OAuthCallbackRequest.md) |  | |

### Return type

[**OAuthSessionResponse**](OAuthSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authConfirmReset

> authConfirmReset(resetPasswordRequest)

Confirm Reset

Complete a password reset. Single-use: the token stops working after this.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthConfirmResetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResetPasswordRequest
    resetPasswordRequest: ...,
  } satisfies AuthConfirmResetRequest;

  try {
    const data = await api.authConfirmReset(body);
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
| **resetPasswordRequest** | [ResetPasswordRequest](ResetPasswordRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authCreateSession

> SessionResponse authCreateSession(createSessionRequest)

Create Session

Verify a sign-in credential and set the HttpOnly session cookie.  The session is bound to the identity that authenticated, so every request it later authenticates resolves a user and that user\&#39;s active organization rather than only \&quot;a credential was presented once\&quot;. The response names both, so a client knows who it is signed in as without a second call.  The rate-limit check deliberately runs only after a failed verification, not before it: a pre-verification gate can\&#39;t know whether *this* attempt would have succeeded, so once an IP has used up its failure quota it would end up blocking that IP\&#39;s legitimate owner too, not just further attackers. Running after verification also means the throttle bounds how many verdicts an IP gets, not how much work it can cause: a password attempt pays for a bcrypt verification (cost 12, on the order of 200ms of CPU, and one is burned against a stand-in hash even for an address nobody holds) before the limit is consulted, so a 429 costs the same as a 401. A gateway exposed to the internet should rate-limit this path at the proxy as well.  The maintenance-mode check runs before either credential is verified, and refuses both. Before, because a frozen deployment should not spend a bcrypt verification per attempt and the refusal is not about the credential anyway; both, because the way back out is the master key against &#x60;&#x60;PATCH /api/v1/settings/maintenance-mode&#x60;&#x60; through the header, which never passes through this door. That is what keeps the way back out off the frozen path, and it is why no identity needs an exemption here; an operator who no longer holds the master key recovers by setting &#x60;&#x60;OTARI_MASTER_KEY&#x60;&#x60; and restarting, which is a restart rather than a click. It leaks nothing either: &#x60;&#x60;GET /api/v1/bootstrap&#x60;&#x60; already publishes the same flag unauthenticated, so the sign-in screen can render the right page.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthCreateSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // CreateSessionRequest
    createSessionRequest: ...,
  } satisfies AuthCreateSessionRequest;

  try {
    const data = await api.authCreateSession(body);
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
| **createSessionRequest** | [CreateSessionRequest](CreateSessionRequest.md) |  | |

### Return type

[**SessionResponse**](SessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authDeletePasskey

> authDeletePasskey(credentialId)

Delete Passkey

Remove one of the caller\&#39;s passkeys.  Removing the last one is allowed: an email and password is still this deployment\&#39;s login, so this is not a lockout, and refusing would strand whoever lost the authenticator.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthDeletePasskeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // string
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AuthDeletePasskeyRequest;

  try {
    const data = await api.authDeletePasskey(body);
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
| **credentialId** | `string` |  | [Defaults to `undefined`] |

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


## authDeleteSession

> authDeleteSession()

Delete Session

Sign out: revoke the cookie\&#39;s session server-side and expire the cookie.  Deliberately unauthenticated and idempotent: it only ever revokes the session named by the caller\&#39;s own cookie, and the dashboard calls it on the 401-bounce path where no valid credential exists anymore. Unlike the read path in &#x60;&#x60;deps.py&#x60;&#x60; it applies no Sec-Fetch-Site check: &#x60;&#x60;SameSite&#x3D;Strict&#x60;&#x60; already keeps cross-site requests from carrying the cookie, and the worst a forged call could do is sign the operator out.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthDeleteSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authDeleteSession();
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authListPasskeys

> WebAuthnCredentialsPublic authListPasskeys()

List Passkeys

The caller\&#39;s own passkeys. Never anybody else\&#39;s, and never key material.  Deliberately *not* behind &#x60;&#x60;require_passkey_support&#x60;&#x60;, and not filtered to the current relying-party ID. A deployment that has changed or lost that ID still holds the rows registered under the old one, and refusing to list them would leave somebody looking at an empty page with no way to clean up and no hint as to why. Each row carries &#x60;&#x60;is_usable&#x60;&#x60; instead, so an orphan is visible, explained, and deletable.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthListPasskeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.authListPasskeys();
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

[**WebAuthnCredentialsPublic**](WebAuthnCredentialsPublic.md)

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


## authRegisterPasskey

> WebAuthnCredentialPublic authRegisterPasskey(registerPasskeyRequest)

Register Passkey

Verify a registration ceremony and store the passkey it produced.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRegisterPasskeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // RegisterPasskeyRequest
    registerPasskeyRequest: ...,
  } satisfies AuthRegisterPasskeyRequest;

  try {
    const data = await api.authRegisterPasskey(body);
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
| **registerPasskeyRequest** | [RegisterPasskeyRequest](RegisterPasskeyRequest.md) |  | |

### Return type

[**WebAuthnCredentialPublic**](WebAuthnCredentialPublic.md)

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


## authRegistrationOptions

> { [key: string]: any; } authRegistrationOptions()

Registration Options

Start registering a passkey for the signed-in identity.  A POST rather than a GET even though it reads like one: it issues a server-side challenge and writes it, so it is not safe to repeat, cache, or prefetch.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRegistrationOptionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.authRegistrationOptions();
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

**{ [key: string]: any; }**

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


## authRenamePasskey

> WebAuthnCredentialPublic authRenamePasskey(credentialId, webAuthnCredentialUpdate)

Rename Passkey

Relabel one of the caller\&#39;s passkeys, which is all that is editable.  Ungated like the list, and for the same reason: naming an orphan before deleting it is not something a lost relying-party ID should prevent.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRenamePasskeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // string
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WebAuthnCredentialUpdate
    webAuthnCredentialUpdate: ...,
  } satisfies AuthRenamePasskeyRequest;

  try {
    const data = await api.authRenamePasskey(body);
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
| **credentialId** | `string` |  | [Defaults to `undefined`] |
| **webAuthnCredentialUpdate** | [WebAuthnCredentialUpdate](WebAuthnCredentialUpdate.md) |  | |

### Return type

[**WebAuthnCredentialPublic**](WebAuthnCredentialPublic.md)

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


## authRequestReset

> RequestPasswordResetResponse authRequestReset(requestPasswordResetRequest)

Request Reset

Mail a password-reset link, or do nothing: the response never says which.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRequestResetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // RequestPasswordResetRequest
    requestPasswordResetRequest: ...,
  } satisfies AuthRequestResetRequest;

  try {
    const data = await api.authRequestReset(body);
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
| **requestPasswordResetRequest** | [RequestPasswordResetRequest](RequestPasswordResetRequest.md) |  | |

### Return type

[**RequestPasswordResetResponse**](RequestPasswordResetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authResendVerification

> ResendVerificationResponse authResendVerification(resendVerificationRequest)

Resend Verification

Mail a fresh verification link, or do nothing: the response never says which.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthResendVerificationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResendVerificationRequest
    resendVerificationRequest: ...,
  } satisfies AuthResendVerificationRequest;

  try {
    const data = await api.authResendVerification(body);
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
| **resendVerificationRequest** | [ResendVerificationRequest](ResendVerificationRequest.md) |  | |

### Return type

[**ResendVerificationResponse**](ResendVerificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authSetDashboardPassword

> PasswordResponse authSetDashboardPassword(setPasswordRequest)

Set Dashboard Password

Set or change the password the caller signs in to the dashboard with.  Always the caller\&#39;s own identity. Supply &#x60;&#x60;email&#x60;&#x60; when it has no sign-in address yet, which is the state first boot leaves the operator in, and &#x60;&#x60;current_password&#x60;&#x60; when it already has a password and the request is authenticated by the session cookie. The master key in a header is what excuses &#x60;&#x60;current_password&#x60;&#x60;, which is how a forgotten password is recovered; it does not excuse &#x60;&#x60;email&#x60;&#x60;, because an identity with no address has nothing to sign in with whoever is asking. The operator setting a password for the first time retires master-key sign-in on this deployment.  Every other session this identity holds ends, the caller\&#39;s own excepted, so a cookie stolen before the change does not outlive it.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSetDashboardPasswordRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // SetPasswordRequest
    setPasswordRequest: ...,
  } satisfies AuthSetDashboardPasswordRequest;

  try {
    const data = await api.authSetDashboardPassword(body);
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
| **setPasswordRequest** | [SetPasswordRequest](SetPasswordRequest.md) |  | |

### Return type

[**PasswordResponse**](PasswordResponse.md)

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


## authSignup

> SignupResponse authSignup(signupRequest)

Signup

Claim a roster identity, register a new one, or do nothing: the response never says which.  Which of the three this deployment will do is &#x60;&#x60;open_signup&#x60;&#x60;, published in the bootstrap so the page can say so before anyone types an address.  No session is minted. A newly claimed or registered identity is hard-blocked from signing in until it verifies, so there is nothing yet to sign it into.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthSignupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignupRequest
    signupRequest: ...,
  } satisfies AuthSignupRequest;

  try {
    const data = await api.authSignup(body);
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
| **signupRequest** | [SignupRequest](SignupRequest.md) |  | |

### Return type

[**SignupResponse**](SignupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authVerifyEmailRoute

> VerifyEmailResponse authVerifyEmailRoute(verifyEmailRequest)

Verify Email Route

Confirm an address from its verification link, lifting the sign-in gate.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthVerifyEmailRouteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // VerifyEmailRequest
    verifyEmailRequest: ...,
  } satisfies AuthVerifyEmailRouteRequest;

  try {
    const data = await api.authVerifyEmailRoute(body);
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
| **verifyEmailRequest** | [VerifyEmailRequest](VerifyEmailRequest.md) |  | |

### Return type

[**VerifyEmailResponse**](VerifyEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

