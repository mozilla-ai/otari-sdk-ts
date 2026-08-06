# OtelApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**receiveLogsV1LogsPost**](OtelApi.md#receivelogsv1logspost) | **POST** /v1/logs | Receive Logs |
| [**receiveTracesV1TracesPost**](OtelApi.md#receivetracesv1tracespost) | **POST** /v1/traces | Receive Traces |



## receiveLogsV1LogsPost

> any receiveLogsV1LogsPost()

Receive Logs

Ingest LLM usage from OTLP log events (Claude Code, Codex, or GenAI logs).

### Example

```ts
import {
  Configuration,
  OtelApi,
} from '';
import type { ReceiveLogsV1LogsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OtelApi(config);

  try {
    const data = await api.receiveLogsV1LogsPost();
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

**any**

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


## receiveTracesV1TracesPost

> any receiveTracesV1TracesPost()

Receive Traces

Ingest LLM usage from OTLP spans (GenAI semantic conventions).

### Example

```ts
import {
  Configuration,
  OtelApi,
} from '';
import type { ReceiveTracesV1TracesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OtelApi(config);

  try {
    const data = await api.receiveTracesV1TracesPost();
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

**any**

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

