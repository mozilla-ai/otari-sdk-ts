# ImagesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**imagesCreateImage**](ImagesApi.md#imagescreateimage) | **POST** /api/v1/images/generations | Create Image |
| [**imagesEditImage**](ImagesApi.md#imageseditimage) | **POST** /api/v1/images/edits | Edit Image |



## imagesCreateImage

> ImagesResponse imagesCreateImage(imageGenerationRequest)

Create Image

OpenAI-compatible image generation endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user  A priced response carries its cost on &#x60;usage&#x60; as &#x60;cost_usd&#x60; (a six-decimal USD string) and &#x60;pricing_source&#x60;, as a chat completion does; a provider that sends no &#x60;usage&#x60; gets one holding just those two fields. An unpriced response carries neither.

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


## imagesEditImage

> any imagesEditImage(model, prompt, image, image2, mask, n, quality, responseFormat, size, user)

Edit Image

OpenAI-compatible image edit endpoint, taking &#x60;&#x60;multipart/form-data&#x60;&#x60;.  Authentication modes: - Master key: the &#x60;&#x60;user&#x60;&#x60; field is required and names an existing user. - API key: usage and spend go to the key\&#39;s own user. A &#x60;&#x60;user&#x60;&#x60; naming a   different user is refused with 403, or ignored when mismatch rejection is off.  A priced response carries its cost on &#x60;usage&#x60; as &#x60;cost_usd&#x60; (a six-decimal USD string) and &#x60;pricing_source&#x60;, as a chat completion does; a provider that sends no &#x60;usage&#x60; gets one holding just those two fields. An unpriced response carries neither.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '';
import type { ImagesEditImageRequest } from '';

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
    // string
    model: model_example,
    // string
    prompt: prompt_example,
    // Array<string> | The image or images to edit. (optional)
    image: ...,
    // Array<string> | Same as image. (optional)
    image2: ...,
    // string | Where to edit: the transparent areas of this PNG. (optional)
    mask: mask_example,
    // number (optional)
    n: 56,
    // string | Filter to a single event type or metric name (e.g. \\\'tool_result\\\', \\\'claude_code.commit.count\\\') (optional)
    quality: quality_example,
    // string (optional)
    responseFormat: responseFormat_example,
    // string | Filter to a single event type or metric name (e.g. \\\'tool_result\\\', \\\'claude_code.commit.count\\\') (optional)
    size: size_example,
    // string (optional)
    user: user_example,
  } satisfies ImagesEditImageRequest;

  try {
    const data = await api.imagesEditImage(body);
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
| **model** | `string` |  | [Defaults to `undefined`] |
| **prompt** | `string` |  | [Defaults to `undefined`] |
| **image** | `Array<string>` | The image or images to edit. | [Optional] |
| **image2** | `Array<string>` | Same as image. | [Optional] |
| **mask** | `string` | Where to edit: the transparent areas of this PNG. | [Optional] [Defaults to `undefined`] |
| **n** | `number` |  | [Optional] [Defaults to `undefined`] |
| **quality** | `string` | Filter to a single event type or metric name (e.g. \\\&#39;tool_result\\\&#39;, \\\&#39;claude_code.commit.count\\\&#39;) | [Optional] [Defaults to `undefined`] |
| **responseFormat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **size** | `string` | Filter to a single event type or metric name (e.g. \\\&#39;tool_result\\\&#39;, \\\&#39;claude_code.commit.count\\\&#39;) | [Optional] [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **413** | The upload is larger than 50 MB. |  -  |
| **422** | A required field is missing, or a field is the wrong type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

