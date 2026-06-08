# AudioApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSpeechV1AudioSpeechPost**](AudioApi.md#createspeechv1audiospeechpost) | **POST** /v1/audio/speech | Create Speech |
| [**createTranscriptionV1AudioTranscriptionsPost**](AudioApi.md#createtranscriptionv1audiotranscriptionspost) | **POST** /v1/audio/transcriptions | Create Transcription |



## createSpeechV1AudioSpeechPost

> any createSpeechV1AudioSpeechPost(audioSpeechRequest)

Create Speech

OpenAI-compatible audio speech (TTS) endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  AudioApi,
} from '';
import type { CreateSpeechV1AudioSpeechPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AudioApi();

  const body = {
    // AudioSpeechRequest
    audioSpeechRequest: ...,
  } satisfies CreateSpeechV1AudioSpeechPostRequest;

  try {
    const data = await api.createSpeechV1AudioSpeechPost(body);
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
| **audioSpeechRequest** | [AudioSpeechRequest](AudioSpeechRequest.md) |  | |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `audio/L16`, `audio/aac`, `audio/flac`, `audio/mpeg`, `audio/opus`, `audio/wav`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audio bytes in the requested format |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTranscriptionV1AudioTranscriptionsPost

> any createTranscriptionV1AudioTranscriptionsPost(file, model, language, prompt, responseFormat, temperature, user)

Create Transcription

OpenAI-compatible audio transcription endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use virtual user created with API key

### Example

```ts
import {
  Configuration,
  AudioApi,
} from '';
import type { CreateTranscriptionV1AudioTranscriptionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AudioApi();

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string
    model: model_example,
    // string (optional)
    language: language_example,
    // string (optional)
    prompt: prompt_example,
    // string (optional)
    responseFormat: responseFormat_example,
    // number (optional)
    temperature: 8.14,
    // string (optional)
    user: user_example,
  } satisfies CreateTranscriptionV1AudioTranscriptionsPostRequest;

  try {
    const data = await api.createTranscriptionV1AudioTranscriptionsPost(body);
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
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **model** | `string` |  | [Defaults to `undefined`] |
| **language** | `string` |  | [Optional] [Defaults to `undefined`] |
| **prompt** | `string` |  | [Optional] [Defaults to `undefined`] |
| **responseFormat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **temperature** | `number` |  | [Optional] [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

