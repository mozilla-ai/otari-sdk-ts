# UsageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countUsageV1UsageCountGet**](UsageApi.md#countusagev1usagecountget) | **GET** /v1/usage/count | Count Usage |
| [**deleteUsageRowsV1UsageDelete**](UsageApi.md#deleteusagerowsv1usagedelete) | **DELETE** /v1/usage | Delete Usage Rows |
| [**ingestExternalUsageV1UsageExternalEventsPost**](UsageApi.md#ingestexternalusagev1usageexternaleventspost) | **POST** /v1/usage/external-events | Ingest External Usage |
| [**listInFlightV1UsageInFlightGet**](UsageApi.md#listinflightv1usageinflightget) | **GET** /v1/usage/in-flight | List In Flight |
| [**listUsageV1UsageGet**](UsageApi.md#listusagev1usageget) | **GET** /v1/usage | List Usage |
| [**setUsagePriceRowsV1UsageSetPricePost**](UsageApi.md#setusagepricerowsv1usagesetpricepost) | **POST** /v1/usage/set-price | Set Usage Price Rows |
| [**usageSeriesV1UsageSeriesGet**](UsageApi.md#usageseriesv1usageseriesget) | **GET** /v1/usage/series | Usage Series |
| [**usageSummaryCsvV1UsageSummaryCsvGet**](UsageApi.md#usagesummarycsvv1usagesummarycsvget) | **GET** /v1/usage/summary.csv | Usage Summary Csv |
| [**usageSummaryV1UsageSummaryGet**](UsageApi.md#usagesummaryv1usagesummaryget) | **GET** /v1/usage/summary | Usage Summary |



## countUsageV1UsageCountGet

> UsageCount countUsageV1UsageCountGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, requestGroupId)

Count Usage

Total number of usage logs matching the given filters.  Serves the dashboard paginator\&#39;s \&quot;N of M\&quot; total without changing the bare array contract of &#x60;&#x60;GET /v1/usage&#x60;&#x60;. Runs only when the client asks (a separate request), so the &#x60;&#x60;COUNT(*)&#x60;&#x60; is not paid on every page load. With &#x60;&#x60;counts_toward_budget&#x3D;false&#x60;&#x60; it also backs the \&quot;select all N matching this filter\&quot; affordance for bulk delete / set-price, which touch imported rows only.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { CountUsageV1UsageCountGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
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
    // string | Filter to a single session/project label (the source_label carried by imported usage) (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation: true = only enforced gateway rows, false = only imported rows that never touch a budget (optional)
    countsTowardBudget: true,
    // Array<string> | Filter to the rows of one or more request groups; repeatable (request_group_id=a&request_group_id=b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\'s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. (optional)
    requestGroupId: ...,
  } satisfies CountUsageV1UsageCountGetRequest;

  try {
    const data = await api.countUsageV1UsageCountGet(body);
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
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session/project label (the source_label carried by imported usage) | [Optional] [Defaults to `undefined`] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation: true &#x3D; only enforced gateway rows, false &#x3D; only imported rows that never touch a budget | [Optional] [Defaults to `undefined`] |
| **requestGroupId** | `Array<string>` | Filter to the rows of one or more request groups; repeatable (request_group_id&#x3D;a&amp;request_group_id&#x3D;b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\&#39;s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. | [Optional] |

### Return type

[**UsageCount**](UsageCount.md)

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


## deleteUsageRowsV1UsageDelete

> UsageDeleteResult deleteUsageRowsV1UsageDelete(usageDeleteRequest)

Delete Usage Rows

Delete imported usage rows by explicit ids or by filter (standalone).  Target either the current selection (&#x60;&#x60;ids&#x60;&#x60;) or everything matching a filter (&#x60;&#x60;by_filter: true&#x60;&#x60; plus optional &#x60;&#x60;source&#x60;&#x60; / &#x60;&#x60;model&#x60;&#x60; / &#x60;&#x60;user_id&#x60;&#x60; / &#x60;&#x60;status&#x60;&#x60; / date range / &#x60;&#x60;priced&#x60;&#x60;). Only imported rows (&#x60;&#x60;counts_toward_budget &#x3D; false&#x60;&#x60;) are ever removed: enforced gateway rows and the spend ledger (&#x60;&#x60;users.spend&#x60;&#x60;) are untouched, so a delete can never desync a budget. Master-key only.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { DeleteUsageRowsV1UsageDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // UsageDeleteRequest
    usageDeleteRequest: ...,
  } satisfies DeleteUsageRowsV1UsageDeleteRequest;

  try {
    const data = await api.deleteUsageRowsV1UsageDelete(body);
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
| **usageDeleteRequest** | [UsageDeleteRequest](UsageDeleteRequest.md) |  | |

### Return type

[**UsageDeleteResult**](UsageDeleteResult.md)

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


## ingestExternalUsageV1UsageExternalEventsPost

> ExternalIngestResult ingestExternalUsageV1UsageExternalEventsPost(externalEventsRequest)

Ingest External Usage

Ingest a batch of externally-observed usage events (standalone).  Authenticated with either an API key or the master key. Usage binds to the authenticated principal: an API key attributes to its own user (and stamps its id on the rows); the master key may name any user via &#x60;&#x60;user_id&#x60;&#x60;. Records subscription-backed usage (e.g. Claude Code) as usage-log rows tagged with their &#x60;&#x60;source&#x60;&#x60;, priced at the effective API rate for each event\&#39;s timestamp. Imported usage is real cost, but never counts toward budgets or mutates &#x60;&#x60;users.spend&#x60;&#x60; (it is retrospective, so it cannot be reserved). Idempotent by &#x60;&#x60;(source, source_event_id)&#x60;&#x60;. The payload is content-free; any prompt/completion/tool field is rejected (422), not stored.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { IngestExternalUsageV1UsageExternalEventsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // ExternalEventsRequest
    externalEventsRequest: ...,
  } satisfies IngestExternalUsageV1UsageExternalEventsPostRequest;

  try {
    const data = await api.ingestExternalUsageV1UsageExternalEventsPost(body);
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
| **externalEventsRequest** | [ExternalEventsRequest](ExternalEventsRequest.md) |  | |

### Return type

[**ExternalIngestResult**](ExternalIngestResult.md)

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


## listInFlightV1UsageInFlightGet

> InFlightResponse listInFlightV1UsageInFlightGet()

List In Flight

Requests the gateway is currently serving, longest-running first.  A usage row is written when a request settles, so the log alone cannot answer \&quot;is anything happening right now\&quot;: on a slow backend, a 30-second local model call is invisible until it finishes. This reports what is in progress.  Read from an in-memory registry, so it describes the process that answers this call and not the deployment: behind a load balancer, consecutive polls reach different otari processes, and there is no deployment-wide total to ask for. &#x60;&#x60;total&#x60;&#x60; is the true in-flight count for the answering process even when &#x60;&#x60;requests&#x60;&#x60; is capped.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { ListInFlightV1UsageInFlightGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  try {
    const data = await api.listInFlightV1UsageInFlightGet();
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

[**InFlightResponse**](InFlightResponse.md)

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


## listUsageV1UsageGet

> Array&lt;UsageEntry&gt; listUsageV1UsageGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, requestGroupId, skip, limit)

List Usage

List usage logs ordered by timestamp (most recent first).  Supports optional filters for time range, user, status, failure status code, model, endpoint, provider, source, session (&#x60;&#x60;source_label&#x60;&#x60;), and request group (&#x60;&#x60;request_group_id&#x60;&#x60;, repeatable, which returns a routed request\&#39;s whole attempt plan). Paginated via skip/limit. The return shape is a bare JSON array; external billing/analytics consumers depend on this, so the total row count for a paginated UI is served separately by &#x60;&#x60;GET /v1/usage/count&#x60;&#x60; rather than wrapped in an envelope here. Timestamps accept either ISO 8601 strings or Unix epoch seconds (numeric).

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { ListUsageV1UsageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
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
    // string | Filter to a single session/project label (the source_label carried by imported usage) (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation: true = only enforced gateway rows, false = only imported rows that never touch a budget (optional)
    countsTowardBudget: true,
    // Array<string> | Filter to the rows of one or more request groups; repeatable (request_group_id=a&request_group_id=b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\'s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. (optional)
    requestGroupId: ...,
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
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session/project label (the source_label carried by imported usage) | [Optional] [Defaults to `undefined`] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation: true &#x3D; only enforced gateway rows, false &#x3D; only imported rows that never touch a budget | [Optional] [Defaults to `undefined`] |
| **requestGroupId** | `Array<string>` | Filter to the rows of one or more request groups; repeatable (request_group_id&#x3D;a&amp;request_group_id&#x3D;b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\&#39;s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. | [Optional] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**Array&lt;UsageEntry&gt;**](UsageEntry.md)

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


## setUsagePriceRowsV1UsageSetPricePost

> UsageSetPriceResult setUsagePriceRowsV1UsageSetPricePost(usageSetPriceRequest)

Set Usage Price Rows

Set the cost of imported usage rows from manual per-1M rates (standalone).  Target either the current selection (&#x60;&#x60;ids&#x60;&#x60;) or everything matching a filter (&#x60;&#x60;by_filter: true&#x60;&#x60;). Cost / billing meters / pricing breakdown are recomputed from each row\&#39;s own token counts at the supplied &#x60;&#x60;input&#x60;&#x60; / &#x60;&#x60;output&#x60;&#x60; / &#x60;&#x60;cache_read&#x60;&#x60; / &#x60;&#x60;cache_write&#x60;&#x60; per-1M rates (manual rates, not a recompute from configured pricing). Only imported rows (&#x60;&#x60;counts_toward_budget &#x3D; false&#x60;&#x60;) are touched, so &#x60;&#x60;users.spend&#x60;&#x60; is never affected. Master-key only.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { SetUsagePriceRowsV1UsageSetPricePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // UsageSetPriceRequest
    usageSetPriceRequest: ...,
  } satisfies SetUsagePriceRowsV1UsageSetPricePostRequest;

  try {
    const data = await api.setUsagePriceRowsV1UsageSetPricePost(body);
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
| **usageSetPriceRequest** | [UsageSetPriceRequest](UsageSetPriceRequest.md) |  | |

### Return type

[**UsageSetPriceResult**](UsageSetPriceResult.md)

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


## usageSeriesV1UsageSeriesGet

> UsageGroupedSeries usageSeriesV1UsageSeriesGet(groupBy, startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, bucket)

Usage Series

Time series split by one dimension, for the dashboard\&#39;s stacked charts.  Same filters and window bounds as &#x60;&#x60;/summary&#x60;&#x60; (kept in lockstep: the dashboard serializes one filter object for both, and a filter this endpoint silently ignored would make the stacked chart disagree with the tiles beside it). The window\&#39;s top groups by spend are returned as their own series; everything past the top eight folds into a single &#x60;&#x60;other&#x60;&#x60; series per bucket, so the stack always reconciles with the summary totals. Points are sparse (populated cells only); the bucket grid is bounded like &#x60;&#x60;/summary&#x60;&#x60;\&#39;s series, so an hourly bucket over a too-wide window is rejected rather than ballooning the payload.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { UsageSeriesV1UsageSeriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // 'model' | 'user_id' | 'api_key_id' | 'source' | Dimension to split the series by
    groupBy: groupBy_example,
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
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
    // string | Filter to a single session/project label (the source_label carried by imported usage) (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation: true = only enforced gateway rows, false = only imported rows that never touch a budget (optional)
    countsTowardBudget: true,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
  } satisfies UsageSeriesV1UsageSeriesGetRequest;

  try {
    const data = await api.usageSeriesV1UsageSeriesGet(body);
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
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session/project label (the source_label carried by imported usage) | [Optional] [Defaults to `undefined`] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation: true &#x3D; only enforced gateway rows, false &#x3D; only imported rows that never touch a budget | [Optional] [Defaults to `undefined`] |
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


## usageSummaryCsvV1UsageSummaryCsvGet

> any usageSummaryCsvV1UsageSummaryCsvGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget)

Usage Summary Csv

Download every breakdown the summary reports, as one CSV.  One row per (dimension, key): model, user, API key, source, session (&#x60;&#x60;source_label&#x60;&#x60;), endpoint, and provider. A dedicated route rather than a &#x60;&#x60;format&#x3D;csv&#x60;&#x60; flag on &#x60;&#x60;/summary&#x60;&#x60; so that endpoint keeps a single JSON response model and a clean OpenAPI schema. The export is **uncapped** (no top-N fold): finance wants every row. &#x60;&#x60;tokens&#x60;&#x60; is the billed total (fresh input, both cache buckets, and output), matching the dashboard\&#39;s analytics. Kept separate from the bare-array &#x60;&#x60;/v1/usage&#x60;&#x60; contract, which is untouched.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { UsageSummaryCsvV1UsageSummaryCsvGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
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
    // string | Filter to a single session/project label (the source_label carried by imported usage) (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation: true = only enforced gateway rows, false = only imported rows that never touch a budget (optional)
    countsTowardBudget: true,
  } satisfies UsageSummaryCsvV1UsageSummaryCsvGetRequest;

  try {
    const data = await api.usageSummaryCsvV1UsageSummaryCsvGet(body);
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
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session/project label (the source_label carried by imported usage) | [Optional] [Defaults to `undefined`] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation: true &#x3D; only enforced gateway rows, false &#x3D; only imported rows that never touch a budget | [Optional] [Defaults to `undefined`] |

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
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usageSummaryV1UsageSummaryGet

> UsageSummary usageSummaryV1UsageSummaryGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, bucket, dimensions)

Usage Summary

Aggregate spend, tokens, and request volume for the dashboard Usage page.  Range-bounded (default last 30 days, hard-capped): unlike the raw &#x60;&#x60;/v1/usage&#x60;&#x60; list, every aggregate is scoped to a bounded window so it stays served by the timestamp index. Returns grand totals, breakdowns by model / user / API key / source / session (&#x60;&#x60;source_label&#x60;&#x60;) / endpoint / provider (top rows plus a reconciling &#x60;&#x60;other&#x60;&#x60; fold, billed token counts), the error taxonomy grouped by failure status code, and a UTC-bucketed time series carrying each bucket\&#39;s error count and billed token composition (input incl. cache, cache read/write, output).  Each breakdown is its own &#x60;&#x60;GROUP BY&#x60;&#x60; pass, so a caller that reads only the totals or the series should narrow &#x60;&#x60;dimensions&#x60;&#x60; rather than pay for all eight (the dashboard\&#39;s tiles, timeline context, and model typeahead all do). Omitting the parameter keeps the full set.  &#x60;&#x60;model&#x60;&#x60;, &#x60;&#x60;user_id&#x60;&#x60;, and &#x60;&#x60;api_key_id&#x60;&#x60; are repeatable: several values match any of them, so one chart can compare a handful of models, users, or keys.

### Example

```ts
import {
  Configuration,
  UsageApi,
} from '';
import type { UsageSummaryV1UsageSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsageApi(config);

  const body = {
    // Date | Return logs with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return logs with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
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
    // string | Filter to a single session/project label (the source_label carried by imported usage) (optional)
    sourceLabel: sourceLabel_example,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // boolean | Filter by token-pricing state: true = only rows whose model tokens were priced, false = only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. (optional)
    priced: true,
    // 'any' | 'web_search' | 'code_execution' | Filter to requests that ran a gateway-run tool. \'any\' matches any tool; a tool name (web_search, code_execution) matches that tool specifically. (optional)
    tool: tool_example,
    // boolean | Filter by budget participation: true = only enforced gateway rows, false = only imported rows that never touch a budget (optional)
    countsTowardBudget: true,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
    // Array<'model' | 'user' | 'api_key' | 'source' | 'source_label' | 'endpoint' | 'provider' | 'status_code' | 'tool' | 'none'> | Which breakdowns to compute; repeatable (dimensions=model&dimensions=user). Each value names the \'by_<value>\' response field it fills, except \'status_code\', which fills the failure taxonomy in \'errors_by_status_code\'. Omit for every breakdown (the default); pass \'none\' for a totals-and-series-only response. Each dimension left out skips one GROUP BY scan, so a caller that reads only the tiles or the time series should say so. Fields that were not requested come back empty. (optional)
    dimensions: ...,
  } satisfies UsageSummaryV1UsageSummaryGetRequest;

  try {
    const data = await api.usageSummaryV1UsageSummaryGet(body);
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
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **status** | `string` | Filter to a single status: \&#39;success\&#39;, \&#39;error\&#39;, or \&#39;absorbed\&#39; (an attempt a routing policy recovered from, excluded from error_count and request_count) | [Optional] [Defaults to `undefined`] |
| **statusCode** | `number` | Filter to a single failure status code (e.g. 429 for provider rate limits, 402 for missing-pricing rejections). Only error rows carry one, so this filter also restricts to status&#x3D;\&#39;error\&#39; unless \&#39;status\&#39; is given explicitly | [Optional] [Defaults to `undefined`] |
| **model** | `Array<string>` | Filter to one or more models; repeatable (model&#x3D;a&amp;model&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **endpoint** | `string` | Filter to a single endpoint (e.g. \&#39;/v1/chat/completions\&#39;) | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Filter to a single provider (e.g. \&#39;openai\&#39;) | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter to a single provenance source (e.g. \&#39;gateway\&#39; or \&#39;claude_code\&#39;) | [Optional] [Defaults to `undefined`] |
| **sourceLabel** | `string` | Filter to a single session/project label (the source_label carried by imported usage) | [Optional] [Defaults to `undefined`] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **priced** | `boolean` | Filter by token-pricing state: true &#x3D; only rows whose model tokens were priced, false &#x3D; only rows that still need pricing (no cost at all, or tokens that were never metered because the model had no rate). A row charged only for gateway-run tool calls still counts as needing pricing. | [Optional] [Defaults to `undefined`] |
| **tool** | `any`, `web_search`, `code_execution` | Filter to requests that ran a gateway-run tool. \&#39;any\&#39; matches any tool; a tool name (web_search, code_execution) matches that tool specifically. | [Optional] [Defaults to `undefined`] [Enum: any, web_search, code_execution] |
| **countsTowardBudget** | `boolean` | Filter by budget participation: true &#x3D; only enforced gateway rows, false &#x3D; only imported rows that never touch a budget | [Optional] [Defaults to `undefined`] |
| **bucket** | `hour`, `day` | Time-series granularity: \&#39;hour\&#39; or \&#39;day\&#39; | [Optional] [Defaults to `&#39;day&#39;`] [Enum: hour, day] |
| **dimensions** | `model`, `user`, `api_key`, `source`, `source_label`, `endpoint`, `provider`, `status_code`, `tool`, `none` | Which breakdowns to compute; repeatable (dimensions&#x3D;model&amp;dimensions&#x3D;user). Each value names the \&#39;by_&lt;value&gt;\&#39; response field it fills, except \&#39;status_code\&#39;, which fills the failure taxonomy in \&#39;errors_by_status_code\&#39;. Omit for every breakdown (the default); pass \&#39;none\&#39; for a totals-and-series-only response. Each dimension left out skips one GROUP BY scan, so a caller that reads only the tiles or the time series should say so. Fields that were not requested come back empty. | [Optional] [Enum: model, user, api_key, source, source_label, endpoint, provider, status_code, tool, none] |

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

