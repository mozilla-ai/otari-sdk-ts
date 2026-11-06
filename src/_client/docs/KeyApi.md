# KeyApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**keyGetKeyBudget**](KeyApi.md#keygetkeybudget) | **GET** /api/v1/key/budget | Get Key Budget |
| [**keyGetKeyUsageSeries**](KeyApi.md#keygetkeyusageseries) | **GET** /api/v1/key/usage/series | Get Key Usage Series |
| [**keyGetKeyUsageSummary**](KeyApi.md#keygetkeyusagesummary) | **GET** /api/v1/key/usage/summary | Get Key Usage Summary |



## keyGetKeyBudget

> KeyBudgetPublic keyGetKeyBudget()

Get Key Budget

What the calling key may still spend, and every cap that decides it.  Lists the budget the key\&#39;s user is on and each spend ceiling on a scope the key bills to (the key itself, its user\&#39;s memberships, its workspace and its organization), as the budget gate counts them: recorded use plus the holds of requests in flight. A period that has ended reads as the fresh one the next request starts. &#x60;&#x60;remaining_usd&#x60;&#x60; is the least any cap on every provider leaves, which is what a request can still spend before a 403. Caps shared with the rest of the workspace or organization report only what they leave.

### Example

```ts
import {
  Configuration,
  KeyApi,
} from '';
import type { KeyGetKeyBudgetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeyApi(config);

  try {
    const data = await api.keyGetKeyBudget();
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

[**KeyBudgetPublic**](KeyBudgetPublic.md)

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


## keyGetKeyUsageSeries

> UsageGroupedSeries keyGetKeyUsageSeries(groupBy, startDate, endDate, status, statusCode, model, endpoint, provider, source, sourceLabel, tag, priced, tool, countsTowardBudget, bucket)

Get Key Usage Series

The calling key\&#39;s own requests over time, split by one dimension.  The same series as &#x60;&#x60;GET /api/v1/usage/series&#x60;&#x60;, over the rows this key wrote alone, kept in lockstep with the summary above.

### Example

```ts
import {
  Configuration,
  KeyApi,
} from '';
import type { KeyGetKeyUsageSeriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeyApi(config);

  const body = {
    // 'model' | 'user_id' | 'api_key_id' | 'source' | Dimension to split the series by
    groupBy: groupBy_example,
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // string | Filter to a single status: \'success\', \'error\', or \'absorbed\' (an attempt a routing policy recovered from, excluded from error_count and request_count) (optional)
    status: status_example,
    // number | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status=\'error\' unless \'status\' is given explicitly (optional)
    statusCode: 56,
    // Array<string> | Filter to one or more models; repeatable (model=a&model=b). Several values match any of them. At most 50 per call. (optional)
    model: ...,
    // string | Filter to a single endpoint (e.g. \'/v1/chat/completions\') (optional)
    endpoint: endpoint_example,
    // string | Filter to a single provider (e.g. \'openai\') (optional)
    provider: provider_example,
    // string | Filter to a single provenance source (e.g. \'gateway\' or \'claude_code\') (optional)
    source: source_example,
    // string | Filter to a single session (source_label): the session\'s trace id on a gateway request that named one, or the session/project label imported usage carried (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter by a request tag (what a request sent in its `metadata`), as `key:value`. Repeatable: values for the same key match any of them, and different keys must all match. At most 50 per call. (optional)
    tag: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'web_fetch' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, web_fetch, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
  } satisfies KeyGetKeyUsageSeriesRequest;

  try {
    const data = await api.keyGetKeyUsageSeries(body);
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
| **groupBy** | `model`, `user_id`, `api_key_id`, `source` | Dimension to split the series by | [Defaults to `undefined`] [Enum: model, user_id, api_key_id, source] |
| **startDate** | `Date` | Return logs with timestamp &gt;&#x3D; start_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Return logs with timestamp &lt; end_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session (source_label): the session\&#39;s trace id on a gateway request that named one, or the session/project label imported usage carried | [Optional] [Defaults to `undefined`] |
| **tag** | `Array<string>` | Filter by a request tag (what a request sent in its &#x60;metadata&#x60;), as &#x60;key:value&#x60;. Repeatable: values for the same key match any of them, and different keys must all match. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `web_fetch`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, web_fetch, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, web_fetch, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **bucket** | `hour`, `day` | Time-series granularity: \&#39;hour\&#39; or \&#39;day\&#39; | [Optional] [Defaults to `&#39;day&#39;`] [Enum: hour, day] |

### Return type

[**UsageGroupedSeries**](UsageGroupedSeries.md)

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


## keyGetKeyUsageSummary

> UsageSummary keyGetKeyUsageSummary(startDate, endDate, status, statusCode, model, endpoint, provider, source, sourceLabel, tag, priced, tool, countsTowardBudget, bucket, dimensions, groupByTag)

Get Key Usage Summary

Spend, tokens and request volume of the calling key\&#39;s own requests.  The same summary as &#x60;&#x60;GET /api/v1/usage/summary&#x60;&#x60;, over the rows this key wrote alone: the same bounded window (default last 30 days), breakdowns, tag filters and &#x60;&#x60;group_by_tag&#x60;&#x60;. Tag a request with &#x60;&#x60;metadata&#x60;&#x60; and pass &#x60;&#x60;group_by_tag&#x60;&#x60; to read what each kind of request cost.

### Example

```ts
import {
  Configuration,
  KeyApi,
} from '';
import type { KeyGetKeyUsageSummaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeyApi(config);

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // string | Filter to a single status: \'success\', \'error\', or \'absorbed\' (an attempt a routing policy recovered from, excluded from error_count and request_count) (optional)
    status: status_example,
    // number | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status=\'error\' unless \'status\' is given explicitly (optional)
    statusCode: 56,
    // Array<string> | Filter to one or more models; repeatable (model=a&model=b). Several values match any of them. At most 50 per call. (optional)
    model: ...,
    // string | Filter to a single endpoint (e.g. \'/v1/chat/completions\') (optional)
    endpoint: endpoint_example,
    // string | Filter to a single provider (e.g. \'openai\') (optional)
    provider: provider_example,
    // string | Filter to a single provenance source (e.g. \'gateway\' or \'claude_code\') (optional)
    source: source_example,
    // string | Filter to a single session (source_label): the session\'s trace id on a gateway request that named one, or the session/project label imported usage carried (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter by a request tag (what a request sent in its `metadata`), as `key:value`. Repeatable: values for the same key match any of them, and different keys must all match. At most 50 per call. (optional)
    tag: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'web_fetch' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, web_fetch, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
    // Array<'model' | 'user' | 'api_key' | 'source' | 'source_label' | 'endpoint' | 'provider' | 'status_code' | 'tool' | 'none'> | Which breakdowns to compute; repeatable (dimensions=model&dimensions=user). Each value names the \'by_<value>\' response field it fills, except \'status_code\', which fills the failure taxonomy in \'errors_by_status_code\'. Omit for every breakdown (the default); pass \'none\' for a totals-and-series-only response. Each dimension left out skips one GROUP BY scan, so a caller that reads only the tiles or the time series should say so. Fields that were not requested come back empty. (optional)
    dimensions: ...,
    // string | A tag key to break spend down by, returned as `by_tag`. Rows that do not carry the tag group under a null key. (optional)
    groupByTag: groupByTag_example,
  } satisfies KeyGetKeyUsageSummaryRequest;

  try {
    const data = await api.keyGetKeyUsageSummary(body);
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
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session (source_label): the session\&#39;s trace id on a gateway request that named one, or the session/project label imported usage carried | [Optional] [Defaults to `undefined`] |
| **tag** | `Array<string>` | Filter by a request tag (what a request sent in its &#x60;metadata&#x60;), as &#x60;key:value&#x60;. Repeatable: values for the same key match any of them, and different keys must all match. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `web_fetch`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, web_fetch, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, web_fetch, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **bucket** | `hour`, `day` | Time-series granularity: \&#39;hour\&#39; or \&#39;day\&#39; | [Optional] [Defaults to `&#39;day&#39;`] [Enum: hour, day] |
| **dimensions** | `model`, `user`, `api_key`, `source`, `source_label`, `endpoint`, `provider`, `status_code`, `tool`, `none` | Which breakdowns to compute; repeatable (dimensions&#x3D;model&amp;dimensions&#x3D;user). Each value names the \&#39;by_&lt;value&gt;\&#39; response field it fills, except \&#39;status_code\&#39;, which fills the failure taxonomy in \&#39;errors_by_status_code\&#39;. Omit for every breakdown (the default); pass \&#39;none\&#39; for a totals-and-series-only response. Each dimension left out skips one GROUP BY scan, so a caller that reads only the tiles or the time series should say so. Fields that were not requested come back empty. | [Optional] [Enum: model, user, api_key, source, source_label, endpoint, provider, status_code, tool, none] |
| **groupByTag** | `string` | A tag key to break spend down by, returned as &#x60;by_tag&#x60;. Rows that do not carry the tag group under a null key. | [Optional] [Defaults to `undefined`] |

### Return type

[**UsageSummary**](UsageSummary.md)

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

