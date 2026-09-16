# ImagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**imagesCreateImage**](ImagesApi.md#imagescreateimage) | **POST** /api/v1/images/generations | Create Image |



## imagesCreateImage

> ImagesResponse imagesCreateImage(imageGenerationRequest)

Create Image

OpenAI-compatible image generation endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '';
import type { ImagesCreateImageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ImagesApi(config);

  const body = {
    // ImageGenerationRequest
    imageGenerationRequest: ...,
  } satisfies ImagesCreateImageRequest;

  try {
    const data = await api.imagesCreateImage(body);
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
| **imageGenerationRequest** | [ImageGenerationRequest](ImageGenerationRequest.md) |  | |

### Return type

[**ImagesResponse**](ImagesResponse.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Generated images |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

