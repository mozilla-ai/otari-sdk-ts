# UsageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listUsageV1UsageGet**](UsageApi.md#listusagev1usageget) | **GET** /v1/usage | List Usage |



## listUsageV1UsageGet

> Array&lt;UsageEntry&gt; listUsageV1UsageGet(startDate, endDate, userId, skip, limit)

List Usage

List usage logs ordered by timestamp (most recent first).  Supports optional filters for time range and user. Paginated via skip/limit. Timestamps accept either ISO 8601 strings or Unix epoch seconds (numeric).

### Example

```ts
import {
  Configuration,
  UsageApi,
} from 'otari-control-plane';
import type { ListUsageV1UsageGetRequest } from 'otari-control-plane';

async function example() {
  console.log("🚀 Testing otari-control-plane SDK...");
  const api = new UsageApi();

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // string | Filter to a single user (optional)
    userId: userId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListUsageV1UsageGetRequest;

  try {
    const data = await api.listUsageV1UsageGet(body);
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
| **startDate** | `Date` | Return logs with timestamp &gt;&#x3D; start_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Return logs with timestamp &lt; end_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **userId** | `string` | Filter to a single user | [Optional] [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;UsageEntry&gt;**](UsageEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

