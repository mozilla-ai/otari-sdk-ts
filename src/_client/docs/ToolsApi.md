# ToolsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listToolsV1ToolsGet**](ToolsApi.md#listtoolsv1toolsget) | **GET** /v1/tools | List Tools |



## listToolsV1ToolsGet

> ToolsResponse listToolsV1ToolsGet()

List Tools

List the tools Otari runs itself, with the declaration forms it accepts.  Every other &#x60;tools[]&#x60; entry, including provider-native keywords not listed here, is forwarded to the upstream provider untouched.

### Example

```ts
import {
  Configuration,
  ToolsApi,
} from '';
import type { ListToolsV1ToolsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToolsApi(config);

  try {
    const data = await api.listToolsV1ToolsGet();
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

[**ToolsResponse**](ToolsResponse.md)

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

