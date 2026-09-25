# FeedbackApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**feedbackSubmitFeedback**](FeedbackApi.md#feedbacksubmitfeedback) | **POST** /api/v1/feedback | Submit Feedback |



## feedbackSubmitFeedback

> feedbackSubmitFeedback(feedbackSubmission)

Submit Feedback

Send feedback privately to the Otari team.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '';
import type { FeedbackSubmitFeedbackRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FeedbackApi(config);

  const body = {
    // FeedbackSubmission
    feedbackSubmission: ...,
  } satisfies FeedbackSubmitFeedbackRequest;

  try {
    const data = await api.feedbackSubmitFeedback(body);
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
| **feedbackSubmission** | [FeedbackSubmission](FeedbackSubmission.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **413** | Feedback exceeds 32 KiB. |  -  |
| **415** | Only application/json is accepted. |  -  |
| **422** | Invalid feedback fields. |  -  |
| **429** | Feedback limit reached. Retry-After gives the wait in seconds. |  -  |
| **503** | Delivery could not be confirmed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

