# OverviewApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**overviewGetOverview**](OverviewApi.md#overviewgetoverview) | **GET** /api/v1/overview | Get Overview |



## overviewGetOverview

> OverviewSummaryResponse overviewGetOverview(workspaceId)

Get Overview

Summarize what the dashboard overview shows beside its usage chart.  The counts and the budget judgment in one answer, so the page does not read four collections to compute them. A workspace outside the caller\&#39;s organization is treated as none given rather than refused, because the id comes from a switcher whose contents can go stale.

### Example

```ts
import {
  Configuration,
  OverviewApi,
} from '';
import type { OverviewGetOverviewRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OverviewApi(config);

  const body = {
    // string | Narrow the counts to one workspace of the caller\'s organization. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OverviewGetOverviewRequest;

  try {
    const data = await api.overviewGetOverview(body);
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
| **workspaceId** | `string` | Narrow the counts to one workspace of the caller\&#39;s organization. | [Optional] [Defaults to `undefined`] |

### Return type

[**OverviewSummaryResponse**](OverviewSummaryResponse.md)

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

