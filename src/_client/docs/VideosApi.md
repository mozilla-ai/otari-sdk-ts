# VideosApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**videosCreateVideo**](VideosApi.md#videoscreatevideo) | **POST** /api/v1/videos | Create Video |
| [**videosListVideos**](VideosApi.md#videoslistvideos) | **GET** /api/v1/videos | List Videos |
| [**videosRetrieveVideo**](VideosApi.md#videosretrievevideo) | **GET** /api/v1/videos/{video_id} | Retrieve Video |
| [**videosRetrieveVideoContent**](VideosApi.md#videosretrievevideocontent) | **GET** /api/v1/videos/{video_id}/content | Retrieve Video Content |



## videosCreateVideo

> VideoJobResponse videosCreateVideo(videoGenerationRequest)

Create Video

Start a video generation job.  The job is returned at once. Poll &#x60;&#x60;GET /api/v1/videos/{video_id}&#x60;&#x60; until its status is &#x60;&#x60;completed&#x60;&#x60;, then fetch the video from &#x60;&#x60;GET /api/v1/videos/{video_id}/content&#x60;&#x60;. The model must have a per-second video price, from the catalog or set through the pricing API; one with none is refused with 402. The length asked for is reserved against the budget at that price while the job starts, and the job is billed when a retrieval finds it completed. A provider that renders inside this call returns the job already completed, billed, and ready for its content.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '';
import type { VideosCreateVideoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new VideosApi(config);

  const body = {
    // VideoGenerationRequest
    videoGenerationRequest: ...,
  } satisfies VideosCreateVideoRequest;

  try {
    const data = await api.videosCreateVideo(body);
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
| **videoGenerationRequest** | [VideoGenerationRequest](VideoGenerationRequest.md) |  | |

### Return type

[**VideoJobResponse**](VideoJobResponse.md)

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


## videosListVideos

> VideoJobList videosListVideos(limit)

List Videos

The caller\&#39;s video jobs, newest first, from the gateway\&#39;s own records.  A key sees the jobs its user started in its workspace; the master key sees every job. The records say what the gateway knows without asking a provider; a job\&#39;s status is &#x60;&#x60;GET /api/v1/videos/{video_id}&#x60;&#x60;\&#39;s.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '';
import type { VideosListVideosRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new VideosApi(config);

  const body = {
    // number | How many of the newest jobs to list (optional)
    limit: 56,
  } satisfies VideosListVideosRequest;

  try {
    const data = await api.videosListVideos(body);
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
| **limit** | `number` | How many of the newest jobs to list | [Optional] [Defaults to `20`] |

### Return type

[**VideoJobList**](VideoJobList.md)

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


## videosRetrieveVideo

> VideoJobResponse videosRetrieveVideo(videoId)

Retrieve Video

The job\&#39;s status, from its record once it completed, else from the provider that runs it.  The first retrieval that finds the job completed bills its length at the model\&#39;s per-second video price. A job whose length neither the provider nor the request states is billed what the provider charged for it, else the length its reservation assumed. A key reads only the jobs its user started in its workspace; the master key reads any job.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '';
import type { VideosRetrieveVideoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new VideosApi(config);

  const body = {
    // string
    videoId: videoId_example,
  } satisfies VideosRetrieveVideoRequest;

  try {
    const data = await api.videosRetrieveVideo(body);
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**VideoJobResponse**](VideoJobResponse.md)

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


## videosRetrieveVideoContent

> videosRetrieveVideoContent(videoId)

Retrieve Video Content

The finished video\&#39;s bytes, in the provider\&#39;s media type.  Reads the job first, so a completed job is billed here as it would be on &#x60;&#x60;GET /api/v1/videos/{video_id}&#x60;&#x60;. A job still running, or one that failed, is a 409 naming its status.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '';
import type { VideosRetrieveVideoContentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new VideosApi(config);

  const body = {
    // string
    videoId: videoId_example,
  } satisfies VideosRetrieveVideoContentRequest;

  try {
    const data = await api.videosRetrieveVideoContent(body);
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
| **videoId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `video/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The video, in the provider\&#39;s media type |  -  |
| **409** | The job has not completed |  -  |
| **422** | Validation Error |  -  |
| **502** | LLM provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

