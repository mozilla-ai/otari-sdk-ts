# ModerationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createModerationV1ModerationsPost**](ModerationsApi.md#createmoderationv1moderationspost) | **POST** /v1/moderations | Create Moderation |



## createModerationV1ModerationsPost

> ModerationResponse createModerationV1ModerationsPost(moderationRequest, includeRaw)

Create Moderation

OpenAI-compatible moderations endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  ModerationsApi,
} from '';
import type { CreateModerationV1ModerationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ModerationsApi(config);

  const body = {
    // ModerationRequest
    moderationRequest: ...,
    // boolean (optional)
    includeRaw: true,
  } satisfies CreateModerationV1ModerationsPostRequest;

  try {
    const data = await api.createModerationV1ModerationsPost(body);
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
| **moderationRequest** | [ModerationRequest](ModerationRequest.md) |  | |
| **includeRaw** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**ModerationResponse**](ModerationResponse.md)

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

