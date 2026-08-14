# AgentTelemetryApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentTelemetrySeriesV1AgentTelemetrySeriesGet**](AgentTelemetryApi.md#agenttelemetryseriesv1agenttelemetryseriesget) | **GET** /v1/agent-telemetry/series | Agent Telemetry Series |
| [**agentTelemetrySummaryV1AgentTelemetrySummaryGet**](AgentTelemetryApi.md#agenttelemetrysummaryv1agenttelemetrysummaryget) | **GET** /v1/agent-telemetry/summary | Agent Telemetry Summary |
| [**countAgentTelemetryV1AgentTelemetryCountGet**](AgentTelemetryApi.md#countagenttelemetryv1agenttelemetrycountget) | **GET** /v1/agent-telemetry/count | Count Agent Telemetry |
| [**deleteAgentTelemetryRowsV1AgentTelemetryDelete**](AgentTelemetryApi.md#deleteagenttelemetryrowsv1agenttelemetrydelete) | **DELETE** /v1/agent-telemetry | Delete Agent Telemetry Rows |



## agentTelemetrySeriesV1AgentTelemetrySeriesGet

> AgentTelemetryGroupedSeries agentTelemetrySeriesV1AgentTelemetrySeriesGet(groupBy, startDate, endDate, userId, apiKeyId, name, bucket)

Agent Telemetry Series

Row volume over time, split by user or API key (standalone).  Mirrors &#x60;/v1/usage/series&#x60;: same window bounds and bucket-grid cap, the top groups as their own series with the remainder folded into a reconciling &#x60;&#x60;other&#x60;&#x60;, and sparse points (populated cells only). Counts rows, not spend, so it charts telemetry volume rather than cost. Master-key only.

### Example

```ts
import {
  Configuration,
  AgentTelemetryApi,
} from '';
import type { AgentTelemetrySeriesV1AgentTelemetrySeriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentTelemetryApi(config);

  const body = {
    // 'user_id' | 'api_key_id' | Dimension to split the series by
    groupBy: groupBy_example,
    // Date | Return rows with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return rows with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // string | Filter to a single event type or metric name (e.g. \'tool_result\', \'claude_code.commit.count\') (optional)
    name: name_example,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
  } satisfies AgentTelemetrySeriesV1AgentTelemetrySeriesGetRequest;

  try {
    const data = await api.agentTelemetrySeriesV1AgentTelemetrySeriesGet(body);
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
| **groupBy** | `user_id`, `api_key_id` | Dimension to split the series by | [Defaults to `undefined`] [Enum: user_id, api_key_id] |
| **startDate** | `Date` | Return rows with timestamp &gt;&#x3D; start_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Return rows with timestamp &lt; end_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **name** | `string` | Filter to a single event type or metric name (e.g. \&#39;tool_result\&#39;, \&#39;claude_code.commit.count\&#39;) | [Optional] [Defaults to `undefined`] |
| **bucket** | `hour`, `day` | Time-series granularity: \&#39;hour\&#39; or \&#39;day\&#39; | [Optional] [Defaults to `&#39;day&#39;`] [Enum: hour, day] |

### Return type

[**AgentTelemetryGroupedSeries**](AgentTelemetryGroupedSeries.md)

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


## agentTelemetrySummaryV1AgentTelemetrySummaryGet

> AgentTelemetrySummary agentTelemetrySummaryV1AgentTelemetrySummaryGet(startDate, endDate, userId, apiKeyId, sessionLabel, bucket)

Agent Telemetry Summary

What the coding agent produced in a window, and what it cost (standalone).  Range-bounded like &#x60;/v1/usage/summary&#x60; (default last 30 days, hard-capped), so the aggregates stay served by the timestamp index. Returns the outcome totals (commits, pull requests, lines changed, active time), the behavioral counts already captured from the logs signal (tool calls and their mix, tool accept/reject, turns, API errors), the recorded spend over the same scope, and the derived per-unit measures: cost per commit / pull request / line, spend per active hour, acceptance rate, turns per session, and error rate. Each measure is null rather than an error when its denominator is zero. Filterable by user, API key, and &#x60;session_label&#x60;, so cost per outcome can be read for one agent session as well as for a whole window.  The spend side is every usage row in scope, not only the agent\&#39;s: unfiltered, that includes traffic from clients that never reported telemetry, so a per-outcome measure read over a whole deployment answers \&quot;what did this deployment spend per commit\&quot;, not \&quot;what did the agent spend per commit\&quot;. Filter by user, API key, or session to divide only the matching spend.  Outcome metrics are stored exactly as the agent reported them, so a cumulative counter is converted to a window increment here, at read time, diffed per series generation: a re-exported total adds nothing, and a counter reset never reads as negative work. Master-key only.

### Example

```ts
import {
  Configuration,
  AgentTelemetryApi,
} from '';
import type { AgentTelemetrySummaryV1AgentTelemetrySummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentTelemetryApi(config);

  const body = {
    // Date | Return rows with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return rows with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // string | Filter to a single agent session. Matches agent_telemetry.session_label and, on the usage side of the join, the usage_logs.source_label that /v1/usage/summary filters on (optional)
    sessionLabel: sessionLabel_example,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
  } satisfies AgentTelemetrySummaryV1AgentTelemetrySummaryGetRequest;

  try {
    const data = await api.agentTelemetrySummaryV1AgentTelemetrySummaryGet(body);
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
| **startDate** | `Date` | Return rows with timestamp &gt;&#x3D; start_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Return rows with timestamp &lt; end_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **sessionLabel** | `string` | Filter to a single agent session. Matches agent_telemetry.session_label and, on the usage side of the join, the usage_logs.source_label that /v1/usage/summary filters on | [Optional] [Defaults to `undefined`] |
| **bucket** | `hour`, `day` | Time-series granularity: \&#39;hour\&#39; or \&#39;day\&#39; | [Optional] [Defaults to `&#39;day&#39;`] [Enum: hour, day] |

### Return type

[**AgentTelemetrySummary**](AgentTelemetrySummary.md)

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


## countAgentTelemetryV1AgentTelemetryCountGet

> AgentTelemetryCount countAgentTelemetryV1AgentTelemetryCountGet(startDate, endDate, userId, apiKeyId, name)

Count Agent Telemetry

Total agent_telemetry rows matching the given filters (standalone).  The filter set mirrors the purge endpoint\&#39;s, so this sizes exactly what a \&quot;delete all N matching\&quot; would remove. Behavioral and metric rows are counted together: neither this nor the purge distinguishes them. Master-key only.

### Example

```ts
import {
  Configuration,
  AgentTelemetryApi,
} from '';
import type { CountAgentTelemetryV1AgentTelemetryCountGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentTelemetryApi(config);

  const body = {
    // Date | Return rows with timestamp >= start_date (ISO 8601 or Unix epoch seconds) (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Return rows with timestamp < end_date (ISO 8601 or Unix epoch seconds) (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter to one or more users; repeatable (user_id=a&user_id=b). Several values match any of them. At most 50 per call. (optional)
    userId: ...,
    // Array<string> | Filter to one or more API key ids; repeatable (api_key_id=a&api_key_id=b). Several values match any of them. At most 50 per call. (optional)
    apiKeyId: ...,
    // string | Filter to a single event type or metric name (e.g. \'tool_result\', \'claude_code.commit.count\') (optional)
    name: name_example,
  } satisfies CountAgentTelemetryV1AgentTelemetryCountGetRequest;

  try {
    const data = await api.countAgentTelemetryV1AgentTelemetryCountGet(body);
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
| **startDate** | `Date` | Return rows with timestamp &gt;&#x3D; start_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Return rows with timestamp &lt; end_date (ISO 8601 or Unix epoch seconds) | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Filter to one or more users; repeatable (user_id&#x3D;a&amp;user_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **apiKeyId** | `Array<string>` | Filter to one or more API key ids; repeatable (api_key_id&#x3D;a&amp;api_key_id&#x3D;b). Several values match any of them. At most 50 per call. | [Optional] |
| **name** | `string` | Filter to a single event type or metric name (e.g. \&#39;tool_result\&#39;, \&#39;claude_code.commit.count\&#39;) | [Optional] [Defaults to `undefined`] |

### Return type

[**AgentTelemetryCount**](AgentTelemetryCount.md)

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


## deleteAgentTelemetryRowsV1AgentTelemetryDelete

> AgentTelemetryDeleteResult deleteAgentTelemetryRowsV1AgentTelemetryDelete(agentTelemetryDeleteRequest)

Delete Agent Telemetry Rows

Delete agent_telemetry rows by explicit ids or by filter (standalone).  Target either an explicit selection (&#x60;ids&#x60;) or everything matching a filter (&#x60;by_filter: true&#x60; plus optional &#x60;user_id&#x60; / &#x60;api_key_id&#x60; / &#x60;name&#x60; / date range). A selection matching zero rows succeeds with &#x60;deleted: 0&#x60;. Master-key only.

### Example

```ts
import {
  Configuration,
  AgentTelemetryApi,
} from '';
import type { DeleteAgentTelemetryRowsV1AgentTelemetryDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentTelemetryApi(config);

  const body = {
    // AgentTelemetryDeleteRequest
    agentTelemetryDeleteRequest: ...,
  } satisfies DeleteAgentTelemetryRowsV1AgentTelemetryDeleteRequest;

  try {
    const data = await api.deleteAgentTelemetryRowsV1AgentTelemetryDelete(body);
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
| **agentTelemetryDeleteRequest** | [AgentTelemetryDeleteRequest](AgentTelemetryDeleteRequest.md) |  | |

### Return type

[**AgentTelemetryDeleteResult**](AgentTelemetryDeleteResult.md)

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

