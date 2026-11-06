# AudioApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**audioCreateSpeech**](AudioApi.md#audiocreatespeech) | **POST** /api/v1/audio/speech | Create Speech |
| [**audioCreateTranscription**](AudioApi.md#audiocreatetranscription) | **POST** /api/v1/audio/transcriptions | Create Transcription |



## audioCreateSpeech

> any audioCreateSpeech(audioSpeechRequest)

Create Speech

OpenAI-compatible audio speech (TTS) endpoint.  Billed on the characters of &#x60;&#x60;input&#x60;&#x60; at a rate priced per character, or one request at a rate priced per request. A model with no rate is refused under &#x60;&#x60;require_pricing&#x60;&#x60;. The body is audio, so the settled cost rides the response headers: &#x60;&#x60;Otari-Cost-USD&#x60;&#x60; and &#x60;&#x60;Otari-Pricing-Source&#x60;&#x60;, the &#x60;&#x60;cost_usd&#x60;&#x60; and &#x60;&#x60;pricing_source&#x60;&#x60; other responses carry on &#x60;&#x60;usage&#x60;&#x60;, and &#x60;&#x60;Otari-Usage-Unit&#x60;&#x60; and &#x60;&#x60;Otari-Usage-Units&#x60;&#x60; for the meter billed and its count.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  AudioApi,
} from '';
import type { AudioCreateSpeechRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AudioApi(config);

  const body = {
    // AudioSpeechRequest
    audioSpeechRequest: ...,
  } satisfies AudioCreateSpeechRequest;

  try {
    const data = await api.audioCreateSpeech(body);
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

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `audio/L16`, `audio/aac`, `audio/flac`, `audio/mpeg`, `audio/opus`, `audio/wav`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audio bytes in the requested format |  * Otari-Cost-USD - What the request cost, as a six-decimal USD string; absent when it was not priced <br>  * Otari-Pricing-Source - Which rate priced it: organization, deployment or defaults; absent when it was not priced <br>  * Otari-Usage-Unit - The meter the request was billed on, characters or requests; absent when nothing was billed <br>  * Otari-Usage-Units - How many of that meter were billed; absent when nothing was billed <br>  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## audioCreateTranscription

> any audioCreateTranscription(file, model, language, prompt, responseFormat, temperature, user)

Create Transcription

OpenAI-compatible audio transcription endpoint.  Authentication modes: - Master key + user field: Use specified user (must exist) - API key + user field: Use specified user (must exist) - API key without user field: Use the shared \&quot;default\&quot; user

### Example

```ts
import {
  Configuration,
  AudioApi,
} from '';
import type { AudioCreateTranscriptionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AudioApi(config);

  const body = {
    // string
    file: file_example,
    // string
    model: model_example,
    // string | Filter to a single event type or metric name (e.g. \\\'tool_result\\\', \\\'claude_code.commit.count\\\') (optional)
    language: language_example,
    // string | Filter to a single event type or metric name (e.g. \\\'tool_result\\\', \\\'claude_code.commit.count\\\') (optional)
    prompt: prompt_example,
    // string (optional)
    responseFormat: responseFormat_example,
    // number (optional)
    temperature: 8.14,
    // string (optional)
    user: user_example,
  } satisfies AudioCreateTranscriptionRequest;

  try {
    const data = await api.audioCreateTranscription(body);
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
| **file** | `string` |  | [Defaults to `undefined`] |
| **model** | `string` |  | [Defaults to `undefined`] |
| **language** | `string` | Filter to a single event type or metric name (e.g. \\\&#39;tool_result\\\&#39;, \\\&#39;claude_code.commit.count\\\&#39;) | [Optional] [Defaults to `undefined`] |
| **prompt** | `string` | Filter to a single event type or metric name (e.g. \\\&#39;tool_result\\\&#39;, \\\&#39;claude_code.commit.count\\\&#39;) | [Optional] [Defaults to `undefined`] |
| **responseFormat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **temperature** | `number` |  | [Optional] [Defaults to `undefined`] |
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
| **413** | The audio upload exceeds the maximum request size. |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

