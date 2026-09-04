# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authenticatePasskeyV1AuthWebauthnAuthenticatePost**](AuthApi.md#authenticatepasskeyv1authwebauthnauthenticatepost) | **POST** /v1/auth/webauthn/authenticate | Authenticate Passkey |
| [**authenticationOptionsV1AuthWebauthnAuthenticateOptionsPost**](AuthApi.md#authenticationoptionsv1authwebauthnauthenticateoptionspost) | **POST** /v1/auth/webauthn/authenticate/options | Authentication Options |
| [**authorizeV1AuthOauthProviderAuthorizeGet**](AuthApi.md#authorizev1authoauthproviderauthorizeget) | **GET** /v1/auth/oauth/{provider}/authorize | Authorize |
| [**callbackV1AuthOauthProviderCallbackPost**](AuthApi.md#callbackv1authoauthprovidercallbackpost) | **POST** /v1/auth/oauth/{provider}/callback | Callback |
| [**confirmResetV1AuthPasswordResetConfirmPost**](AuthApi.md#confirmresetv1authpasswordresetconfirmpost) | **POST** /v1/auth/password/reset/confirm | Confirm Reset |
| [**createSessionV1AuthSessionPost**](AuthApi.md#createsessionv1authsessionpost) | **POST** /v1/auth/session | Create Session |
| [**deletePasskeyV1AuthWebauthnCredentialsCredentialIdDelete**](AuthApi.md#deletepasskeyv1authwebauthncredentialscredentialiddelete) | **DELETE** /v1/auth/webauthn/credentials/{credential_id} | Delete Passkey |
| [**deleteSessionV1AuthSessionDelete**](AuthApi.md#deletesessionv1authsessiondelete) | **DELETE** /v1/auth/session | Delete Session |
| [**listPasskeysV1AuthWebauthnCredentialsGet**](AuthApi.md#listpasskeysv1authwebauthncredentialsget) | **GET** /v1/auth/webauthn/credentials | List Passkeys |
| [**registerPasskeyV1AuthWebauthnRegisterPost**](AuthApi.md#registerpasskeyv1authwebauthnregisterpost) | **POST** /v1/auth/webauthn/register | Register Passkey |
| [**registrationOptionsV1AuthWebauthnRegisterOptionsPost**](AuthApi.md#registrationoptionsv1authwebauthnregisteroptionspost) | **POST** /v1/auth/webauthn/register/options | Registration Options |
| [**renamePasskeyV1AuthWebauthnCredentialsCredentialIdPatch**](AuthApi.md#renamepasskeyv1authwebauthncredentialscredentialidpatch) | **PATCH** /v1/auth/webauthn/credentials/{credential_id} | Rename Passkey |
| [**requestResetV1AuthPasswordResetPost**](AuthApi.md#requestresetv1authpasswordresetpost) | **POST** /v1/auth/password/reset | Request Reset |
| [**resendVerificationV1AuthResendVerificationPost**](AuthApi.md#resendverificationv1authresendverificationpost) | **POST** /v1/auth/resend-verification | Resend Verification |
| [**setDashboardPasswordV1AuthPasswordPut**](AuthApi.md#setdashboardpasswordv1authpasswordput) | **PUT** /v1/auth/password | Set Dashboard Password |
| [**signupV1AuthSignupPost**](AuthApi.md#signupv1authsignuppost) | **POST** /v1/auth/signup | Signup |
| [**verifyEmailRouteV1AuthVerifyEmailPost**](AuthApi.md#verifyemailroutev1authverifyemailpost) | **POST** /v1/auth/verify-email | Verify Email Route |



## authenticatePasskeyV1AuthWebauthnAuthenticatePost

> PasskeySessionResponse authenticatePasskeyV1AuthWebauthnAuthenticatePost(authenticatePasskeyRequest)

Authenticate Passkey

Verify an assertion and set the HttpOnly session cookie.  The session is bound to the identity whose passkey signed, exactly as a password sign-in binds one to the identity that authenticated, so every request it later authenticates resolves the same caller.  A refusal is counted like the other sign-in failures (&#x60;&#x60;record_auth_failure&#x60;&#x60;) and answered as a 401 by the tenancy error handler. Unlike the password path there is no separate post-failure throttle: this route is throttled unconditionally on the way in, because unlike a password there is no legitimate caller here whose correct credential must never be blocked (a passkey ceremony is one round trip a browser drives, not something a person retries by hand).  **Maintenance mode freezes this the way it freezes the password sign-in.** The freeze is on starting a session, not on a credential, so a passkey has to answer to it or the switch is bypassable by anybody holding one, which is the whole population it exists to hold off during a redeploy. Refused before the assertion is verified, so a frozen deployment does no crypto and counts no auth failure: nobody failed to authenticate, the gateway declined to try.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthenticatePasskeyV1AuthWebauthnAuthenticatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthenticatePasskeyRequest
    authenticatePasskeyRequest: ...,
  } satisfies AuthenticatePasskeyV1AuthWebauthnAuthenticatePostRequest;

  try {
    const data = await api.authenticatePasskeyV1AuthWebauthnAuthenticatePost(body);
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


## authenticationOptionsV1AuthWebauthnAuthenticateOptionsPost

> { [key: string]: any; } authenticationOptionsV1AuthWebauthnAuthenticateOptionsPost()

Authentication Options

Start a passkey sign-in. Public, throttled, and names no credentials.  The options carry no &#x60;&#x60;allowCredentials&#x60;&#x60;, so this publishes nothing about who holds a passkey here; see &#x60;&#x60;webauthn_service.begin_authentication&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthenticationOptionsV1AuthWebauthnAuthenticateOptionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.authenticationOptionsV1AuthWebauthnAuthenticateOptionsPost();
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


## authorizeV1AuthOauthProviderAuthorizeGet

> AuthorizeResponse authorizeV1AuthOauthProviderAuthorizeGet(provider)

Authorize

Start an OAuth sign-in: where to send the browser, and the state to keep.  A GET, and safe: it reads configuration and mints a random value, writing nothing. Repeating it simply produces another state, and only the one the browser kept is the one it will compare against.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthorizeV1AuthOauthProviderAuthorizeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string | Which OAuth provider to sign in with.
    provider: provider_example,
  } satisfies AuthorizeV1AuthOauthProviderAuthorizeGetRequest;

  try {
    const data = await api.authorizeV1AuthOauthProviderAuthorizeGet(body);
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


## callbackV1AuthOauthProviderCallbackPost

> OAuthSessionResponse callbackV1AuthOauthProviderCallbackPost(provider, oAuthCallbackRequest)

Callback

Exchange an authorization code and set the HttpOnly session cookie.  The session is bound to the identity the provider\&#39;s account resolves to, exactly as a password sign-in binds one to the identity that authenticated, so every request it later authenticates resolves the same caller.  A refusal is counted like the other sign-in failures (&#x60;&#x60;record_auth_failure&#x60;&#x60;) and rendered by the tenancy error handler. Like the passkey route there is no separate post-failure throttle: this route is throttled unconditionally on the way in, because there is no legitimate caller here whose correct credential must never be blocked. An authorization code is single-use and minted by a redirect, not something a person retries by hand.  **Maintenance mode freezes this the way it freezes the other two sign-ins.** The freeze is on starting a session, not on a credential, so an OAuth sign-in has to answer to it or the switch is bypassable by anybody holding a Google account. Refused before the exchange, so a frozen deployment makes no outbound call, spends nobody\&#39;s authorization code, and counts no auth failure: nobody failed to authenticate, the gateway declined to try.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { CallbackV1AuthOauthProviderCallbackPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // string | Which OAuth provider to sign in with.
    provider: provider_example,
    // OAuthCallbackRequest
    oAuthCallbackRequest: ...,
  } satisfies CallbackV1AuthOauthProviderCallbackPostRequest;

  try {
    const data = await api.callbackV1AuthOauthProviderCallbackPost(body);
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


## confirmResetV1AuthPasswordResetConfirmPost

> confirmResetV1AuthPasswordResetConfirmPost(resetPasswordRequest)

Confirm Reset

Complete a password reset. Single-use: the token stops working after this.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { ConfirmResetV1AuthPasswordResetConfirmPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResetPasswordRequest
    resetPasswordRequest: ...,
  } satisfies ConfirmResetV1AuthPasswordResetConfirmPostRequest;

  try {
    const data = await api.confirmResetV1AuthPasswordResetConfirmPost(body);
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


## createSessionV1AuthSessionPost

> SessionResponse createSessionV1AuthSessionPost(createSessionRequest)

Create Session

Verify a sign-in credential and set the HttpOnly session cookie.  The session is bound to the identity that authenticated, so every request it later authenticates resolves a user and that user\&#39;s active organization rather than only \&quot;a credential was presented once\&quot;. The response names both, so a client knows who it is signed in as without a second call.  The rate-limit check deliberately runs only after a failed verification, not before it: a pre-verification gate can\&#39;t know whether *this* attempt would have succeeded, so once an IP has used up its failure quota it would end up blocking that IP\&#39;s legitimate owner too, not just further attackers. Running after verification also means the throttle bounds how many verdicts an IP gets, not how much work it can cause: a password attempt pays for a bcrypt verification (cost 12, on the order of 200ms of CPU, and one is burned against a stand-in hash even for an address nobody holds) before the limit is consulted, so a 429 costs the same as a 401. A gateway exposed to the internet should rate-limit this path at the proxy as well.  The maintenance-mode check runs before either credential is verified, and refuses both. Before, because a frozen deployment should not spend a bcrypt verification per attempt and the refusal is not about the credential anyway; both, because the way back out is the master key against &#x60;&#x60;PATCH /v1/settings/maintenance-mode&#x60;&#x60; through the header, which never passes through this door. That is what keeps the way back out off the frozen path, and it is why no identity needs an exemption here; an operator who no longer holds the master key recovers by setting &#x60;&#x60;OTARI_MASTER_KEY&#x60;&#x60; and restarting, which is a restart rather than a click. It leaks nothing either: &#x60;&#x60;GET /v1/bootstrap&#x60;&#x60; already publishes the same flag unauthenticated, so the sign-in screen can render the right page.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { CreateSessionV1AuthSessionPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // CreateSessionRequest
    createSessionRequest: ...,
  } satisfies CreateSessionV1AuthSessionPostRequest;

  try {
    const data = await api.createSessionV1AuthSessionPost(body);
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


## deletePasskeyV1AuthWebauthnCredentialsCredentialIdDelete

> deletePasskeyV1AuthWebauthnCredentialsCredentialIdDelete(credentialId)

Delete Passkey

Remove one of the caller\&#39;s passkeys.  Removing the last one is allowed: an email and password is still this deployment\&#39;s login, so this is not a lockout, and refusing would strand whoever lost the authenticator.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { DeletePasskeyV1AuthWebauthnCredentialsCredentialIdDeleteRequest } from '';

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
  } satisfies DeletePasskeyV1AuthWebauthnCredentialsCredentialIdDeleteRequest;

  try {
    const data = await api.deletePasskeyV1AuthWebauthnCredentialsCredentialIdDelete(body);
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


## deleteSessionV1AuthSessionDelete

> deleteSessionV1AuthSessionDelete()

Delete Session

Sign out: revoke the cookie\&#39;s session server-side and expire the cookie.  Deliberately unauthenticated and idempotent: it only ever revokes the session named by the caller\&#39;s own cookie, and the dashboard calls it on the 401-bounce path where no valid credential exists anymore. Unlike the read path in &#x60;&#x60;deps.py&#x60;&#x60; it applies no Sec-Fetch-Site check: &#x60;&#x60;SameSite&#x3D;Strict&#x60;&#x60; already keeps cross-site requests from carrying the cookie, and the worst a forged call could do is sign the operator out.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { DeleteSessionV1AuthSessionDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.deleteSessionV1AuthSessionDelete();
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


## listPasskeysV1AuthWebauthnCredentialsGet

> WebAuthnCredentialsPublic listPasskeysV1AuthWebauthnCredentialsGet()

List Passkeys

The caller\&#39;s own passkeys. Never anybody else\&#39;s, and never key material.  Deliberately *not* behind &#x60;&#x60;require_passkey_support&#x60;&#x60;, and not filtered to the current relying-party ID. A deployment that has changed or lost that ID still holds the rows registered under the old one, and refusing to list them would leave somebody looking at an empty page with no way to clean up and no hint as to why. Each row carries &#x60;&#x60;is_usable&#x60;&#x60; instead, so an orphan is visible, explained, and deletable.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { ListPasskeysV1AuthWebauthnCredentialsGetRequest } from '';

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
    const data = await api.listPasskeysV1AuthWebauthnCredentialsGet();
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


## registerPasskeyV1AuthWebauthnRegisterPost

> WebAuthnCredentialPublic registerPasskeyV1AuthWebauthnRegisterPost(registerPasskeyRequest)

Register Passkey

Verify a registration ceremony and store the passkey it produced.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { RegisterPasskeyV1AuthWebauthnRegisterPostRequest } from '';

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
  } satisfies RegisterPasskeyV1AuthWebauthnRegisterPostRequest;

  try {
    const data = await api.registerPasskeyV1AuthWebauthnRegisterPost(body);
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


## registrationOptionsV1AuthWebauthnRegisterOptionsPost

> { [key: string]: any; } registrationOptionsV1AuthWebauthnRegisterOptionsPost()

Registration Options

Start registering a passkey for the signed-in identity.  A POST rather than a GET even though it reads like one: it issues a server-side challenge and writes it, so it is not safe to repeat, cache, or prefetch.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { RegistrationOptionsV1AuthWebauthnRegisterOptionsPostRequest } from '';

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
    const data = await api.registrationOptionsV1AuthWebauthnRegisterOptionsPost();
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


## renamePasskeyV1AuthWebauthnCredentialsCredentialIdPatch

> WebAuthnCredentialPublic renamePasskeyV1AuthWebauthnCredentialsCredentialIdPatch(credentialId, webAuthnCredentialUpdate)

Rename Passkey

Relabel one of the caller\&#39;s passkeys, which is all that is editable.  Ungated like the list, and for the same reason: naming an orphan before deleting it is not something a lost relying-party ID should prevent.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { RenamePasskeyV1AuthWebauthnCredentialsCredentialIdPatchRequest } from '';

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
  } satisfies RenamePasskeyV1AuthWebauthnCredentialsCredentialIdPatchRequest;

  try {
    const data = await api.renamePasskeyV1AuthWebauthnCredentialsCredentialIdPatch(body);
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


## requestResetV1AuthPasswordResetPost

> RequestPasswordResetResponse requestResetV1AuthPasswordResetPost(requestPasswordResetRequest)

Request Reset

Mail a password-reset link, or do nothing: the response never says which.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { RequestResetV1AuthPasswordResetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // RequestPasswordResetRequest
    requestPasswordResetRequest: ...,
  } satisfies RequestResetV1AuthPasswordResetPostRequest;

  try {
    const data = await api.requestResetV1AuthPasswordResetPost(body);
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


## resendVerificationV1AuthResendVerificationPost

> ResendVerificationResponse resendVerificationV1AuthResendVerificationPost(resendVerificationRequest)

Resend Verification

Mail a fresh verification link, or do nothing: the response never says which.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { ResendVerificationV1AuthResendVerificationPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ResendVerificationRequest
    resendVerificationRequest: ...,
  } satisfies ResendVerificationV1AuthResendVerificationPostRequest;

  try {
    const data = await api.resendVerificationV1AuthResendVerificationPost(body);
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


## setDashboardPasswordV1AuthPasswordPut

> PasswordResponse setDashboardPasswordV1AuthPasswordPut(setPasswordRequest)

Set Dashboard Password

Set or change the password the caller signs in to the dashboard with.  Always the caller\&#39;s own identity. Supply &#x60;&#x60;email&#x60;&#x60; when it has no sign-in address yet, which is the state first boot leaves the operator in, and &#x60;&#x60;current_password&#x60;&#x60; when it already has a password and the request is authenticated by the session cookie. The master key in a header is what excuses &#x60;&#x60;current_password&#x60;&#x60;, which is how a forgotten password is recovered; it does not excuse &#x60;&#x60;email&#x60;&#x60;, because an identity with no address has nothing to sign in with whoever is asking. The operator setting a password for the first time retires master-key sign-in on this deployment.  Every other session this identity holds ends, the caller\&#39;s own excepted, so a cookie stolen before the change does not outlive it.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { SetDashboardPasswordV1AuthPasswordPutRequest } from '';

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
  } satisfies SetDashboardPasswordV1AuthPasswordPutRequest;

  try {
    const data = await api.setDashboardPasswordV1AuthPasswordPut(body);
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


## signupV1AuthSignupPost

> SignupResponse signupV1AuthSignupPost(signupRequest)

Signup

Claim a roster identity, or do nothing: the response never says which.  No session is minted. A newly claimed identity is hard-blocked from signing in until it verifies, so there is nothing yet to sign it into.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { SignupV1AuthSignupPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // SignupRequest
    signupRequest: ...,
  } satisfies SignupV1AuthSignupPostRequest;

  try {
    const data = await api.signupV1AuthSignupPost(body);
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


## verifyEmailRouteV1AuthVerifyEmailPost

> VerifyEmailResponse verifyEmailRouteV1AuthVerifyEmailPost(verifyEmailRequest)

Verify Email Route

Confirm an address from its verification link, lifting the sign-in gate.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { VerifyEmailRouteV1AuthVerifyEmailPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // VerifyEmailRequest
    verifyEmailRequest: ...,
  } satisfies VerifyEmailRouteV1AuthVerifyEmailPostRequest;

  try {
    const data = await api.verifyEmailRouteV1AuthVerifyEmailPost(body);
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

