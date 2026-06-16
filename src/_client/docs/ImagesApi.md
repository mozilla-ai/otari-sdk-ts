# ImagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createImageV1ImagesGenerationsPost**](ImagesApi.md#createimagev1imagesgenerationspost) | **POST** /v1/images/generations | Create Image |



## createImageV1ImagesGenerationsPost

> ImagesResponse createImageV1ImagesGenerationsPost(imageGenerationRequest)

Create Image

OpenAI-compatible image generation endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '';
import type { CreateImageV1ImagesGenerationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ImagesApi();

  const body = {
    // ImageGenerationRequest
    imageGenerationRequest: ...,
  } satisfies CreateImageV1ImagesGenerationsPostRequest;

  try {
    const data = await api.createImageV1ImagesGenerationsPost(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Generated images |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

