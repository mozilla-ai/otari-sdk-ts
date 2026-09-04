# InvitationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptInvitationV1InvitationsAcceptPost**](InvitationsApi.md#acceptinvitationv1invitationsacceptpost) | **POST** /v1/invitations/accept | Accept Invitation |
| [**validateInvitationV1InvitationsValidatePost**](InvitationsApi.md#validateinvitationv1invitationsvalidatepost) | **POST** /v1/invitations/validate | Validate Invitation |



## acceptInvitationV1InvitationsAcceptPost

> AcceptInvitationResultPublic acceptInvitationV1InvitationsAcceptPost(acceptInvitationRequest)

Accept Invitation

Accept a pending invitation, resolving it to an active membership.

### Example

```ts
import {
  Configuration,
  InvitationsApi,
} from '';
import type { AcceptInvitationV1InvitationsAcceptPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new InvitationsApi();

  const body = {
    // AcceptInvitationRequest
    acceptInvitationRequest: ...,
  } satisfies AcceptInvitationV1InvitationsAcceptPostRequest;

  try {
    const data = await api.acceptInvitationV1InvitationsAcceptPost(body);
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
| **acceptInvitationRequest** | [AcceptInvitationRequest](AcceptInvitationRequest.md) |  | |

### Return type

[**AcceptInvitationResultPublic**](AcceptInvitationResultPublic.md)

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


## validateInvitationV1InvitationsValidatePost

> InvitationPreviewPublic validateInvitationV1InvitationsValidatePost(validateInvitationRequest)

Validate Invitation

Look up a pending invitation by its token, for the accept page to render before committing.  A &#x60;&#x60;POST&#x60;&#x60; with the token in the body, not a &#x60;&#x60;GET&#x60;&#x60; with it in the URL: the token is a bearer credential, and a URL path is what an access log or an intermediate proxy routinely retains.

### Example

```ts
import {
  Configuration,
  InvitationsApi,
} from '';
import type { ValidateInvitationV1InvitationsValidatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new InvitationsApi();

  const body = {
    // ValidateInvitationRequest
    validateInvitationRequest: ...,
  } satisfies ValidateInvitationV1InvitationsValidatePostRequest;

  try {
    const data = await api.validateInvitationV1InvitationsValidatePost(body);
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
| **validateInvitationRequest** | [ValidateInvitationRequest](ValidateInvitationRequest.md) |  | |

### Return type

[**InvitationPreviewPublic**](InvitationPreviewPublic.md)

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

