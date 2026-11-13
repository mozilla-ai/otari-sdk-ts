# UpdateCheckApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**updateCheckAnswerUpdateCheck**](UpdateCheckApi.md#updatecheckanswerupdatecheck) | **PUT** /api/v1/update-check | Answer Update Check |
| [**updateCheckGetUpdateCheck**](UpdateCheckApi.md#updatecheckgetupdatecheck) | **GET** /api/v1/update-check | Get Update Check |



## updateCheckAnswerUpdateCheck

> UpdateCheckStatus updateCheckAnswerUpdateCheck(updateCheckAnswer)

Answer Update Check

Turn the checks on or off. A yes is checked within a minute.  Refused with 409 when the deployment\&#39;s configuration answers instead.

### Example

```ts
import {
  Configuration,
  UpdateCheckApi,
} from '';
import type { UpdateCheckAnswerUpdateCheckRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UpdateCheckApi(config);

  const body = {
    // UpdateCheckAnswer
    updateCheckAnswer: ...,
  } satisfies UpdateCheckAnswerUpdateCheckRequest;

  try {
    const data = await api.updateCheckAnswerUpdateCheck(body);
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
| **updateCheckAnswer** | [UpdateCheckAnswer](UpdateCheckAnswer.md) |  | |

### Return type

[**UpdateCheckStatus**](UpdateCheckStatus.md)

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


## updateCheckGetUpdateCheck

> UpdateCheckStatus updateCheckGetUpdateCheck()

Get Update Check

Whether checks are on and who decided, what a check sends, and what the last one heard.

### Example

```ts
import {
  Configuration,
  UpdateCheckApi,
} from '';
import type { UpdateCheckGetUpdateCheckRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UpdateCheckApi(config);

  try {
    const data = await api.updateCheckGetUpdateCheck();
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

[**UpdateCheckStatus**](UpdateCheckStatus.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

