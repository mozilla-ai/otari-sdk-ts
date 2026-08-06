# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSessionV1AuthSessionPost**](AuthApi.md#createsessionv1authsessionpost) | **POST** /v1/auth/session | Create Session |
| [**deleteSessionV1AuthSessionDelete**](AuthApi.md#deletesessionv1authsessiondelete) | **DELETE** /v1/auth/session | Delete Session |



## createSessionV1AuthSessionPost

> SessionResponse createSessionV1AuthSessionPost(createSessionRequest)

Create Session

Verify the master key and set the HttpOnly session cookie.  The rate-limit check deliberately runs only after a failed verification, not before it: a pre-verification gate can\&#39;t know whether *this* attempt would have succeeded, so once an IP has used up its failure quota it would end up blocking that IP\&#39;s legitimate owner too, not just further attackers. The issue this implements explicitly rules that out. The DB/hash lookup this exposes to repeated attempts only runs when no fixed master_key is configured (the auto-generated bootstrap-key path); with a configured master_key, verification is a constant-time string compare, not a DB round trip.

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

