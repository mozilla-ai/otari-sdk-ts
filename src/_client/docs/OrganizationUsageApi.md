# OrganizationUsageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countOrganizationUsageV1OrganizationsMeUsageCountGet**](OrganizationUsageApi.md#countorganizationusagev1organizationsmeusagecountget) | **GET** /v1/organizations/me/usage/count | Count Organization Usage |
| [**listOrganizationUsageV1OrganizationsMeUsageGet**](OrganizationUsageApi.md#listorganizationusagev1organizationsmeusageget) | **GET** /v1/organizations/me/usage | List Organization Usage |
| [**organizationUsageSeriesV1OrganizationsMeUsageSeriesGet**](OrganizationUsageApi.md#organizationusageseriesv1organizationsmeusageseriesget) | **GET** /v1/organizations/me/usage/series | Organization Usage Series |
| [**organizationUsageSummaryV1OrganizationsMeUsageSummaryGet**](OrganizationUsageApi.md#organizationusagesummaryv1organizationsmeusagesummaryget) | **GET** /v1/organizations/me/usage/summary | Organization Usage Summary |



## countOrganizationUsageV1OrganizationsMeUsageCountGet

> UsageCount countOrganizationUsageV1OrganizationsMeUsageCountGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, requestGroupId, workspaceId)

Count Organization Usage

Total rows matching these filters, within the caller\&#39;s scope.  Serves the paginator\&#39;s \&quot;N of M\&quot; beside the list above, and is scoped the same way, so the total can never describe more rows than the list will show.  Unlike the deployment-wide &#x60;&#x60;GET /v1/usage/count&#x60;&#x60;, &#x60;&#x60;counts_toward_budget&#x3D;false&#x60;&#x60; is not narrowed to imported rows here: that narrowing sizes the bulk mutations, and this surface has none. So this total keeps matching the list beside it.

### Example

```ts
import {
  Configuration,
  OrganizationUsageApi,
} from '';
import type { CountOrganizationUsageV1OrganizationsMeUsageCountGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationUsageApi(config);

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
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // Array<string> | Filter to the rows of one or more request groups; repeatable (request_group_id=a&request_group_id=b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\'s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. (optional)
    requestGroupId: ...,
    // string | Only usage recorded in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CountOrganizationUsageV1OrganizationsMeUsageCountGetRequest;

  try {
    const data = await api.countOrganizationUsageV1OrganizationsMeUsageCountGet(body);
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
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **requestGroupId** | `Array<string>` | Filter to the rows of one or more request groups; repeatable (request_group_id&#x3D;a&amp;request_group_id&#x3D;b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\&#39;s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. | [Optional] |
| **workspaceId** | `string` | Only usage recorded in this workspace. | [Optional] [Defaults to `undefined`] |

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


## listOrganizationUsageV1OrganizationsMeUsageGet

> Array&lt;UsageEntry&gt; listOrganizationUsageV1OrganizationsMeUsageGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, requestGroupId, workspaceId, skip, limit)

List Organization Usage

List the caller\&#39;s organization\&#39;s usage logs, most recent first.  The tenant-scoped counterpart of &#x60;&#x60;GET /v1/usage&#x60;&#x60;: same filters, same bare JSON array, same separate &#x60;&#x60;/count&#x60;&#x60; for a paginator\&#39;s total, confined to what the caller\&#39;s membership lets them see. Scope is never a parameter here.

### Example

```ts
import {
  Configuration,
  OrganizationUsageApi,
} from '';
import type { ListOrganizationUsageV1OrganizationsMeUsageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationUsageApi(config);

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
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // Array<string> | Filter to the rows of one or more request groups; repeatable (request_group_id=a&request_group_id=b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\'s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. (optional)
    requestGroupId: ...,
    // string | Only usage recorded in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies ListOrganizationUsageV1OrganizationsMeUsageGetRequest;

  try {
    const data = await api.listOrganizationUsageV1OrganizationsMeUsageGet(body);
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
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **requestGroupId** | `Array<string>` | Filter to the rows of one or more request groups; repeatable (request_group_id&#x3D;a&amp;request_group_id&#x3D;b). A routed request writes one row per attempt, all sharing a request_group_id, so this returns a request\&#39;s whole plan: its absorbed attempts and the attempt that served it. Ignore ordering by timestamp and read attempt_position to reconstruct the plan. At most 1000 ids per call. | [Optional] |
| **workspaceId** | `string` | Only usage recorded in this workspace. | [Optional] [Defaults to `undefined`] |
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


## organizationUsageSeriesV1OrganizationsMeUsageSeriesGet

> UsageGroupedSeries organizationUsageSeriesV1OrganizationsMeUsageSeriesGet(groupBy, startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, workspaceId, bucket)

Organization Usage Series

Time series split by one dimension, for the caller\&#39;s organization.  The tenant-scoped counterpart of &#x60;&#x60;GET /v1/usage/series&#x60;&#x60;, and kept in lockstep with the summary above for the reason that endpoint gives: the dashboard serializes one filter object for both, so a filter one of them ignored would make the stacked chart disagree with the tiles beside it.

### Example

```ts
import {
  Configuration,
  OrganizationUsageApi,
} from '';
import type { OrganizationUsageSeriesV1OrganizationsMeUsageSeriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationUsageApi(config);

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
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // string | Only usage recorded in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
  } satisfies OrganizationUsageSeriesV1OrganizationsMeUsageSeriesGetRequest;

  try {
    const data = await api.organizationUsageSeriesV1OrganizationsMeUsageSeriesGet(body);
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
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **workspaceId** | `string` | Only usage recorded in this workspace. | [Optional] [Defaults to `undefined`] |
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


## organizationUsageSummaryV1OrganizationsMeUsageSummaryGet

> UsageSummary organizationUsageSummaryV1OrganizationsMeUsageSummaryGet(startDate, endDate, userId, status, statusCode, model, endpoint, provider, source, sourceLabel, apiKeyId, priced, tool, countsTowardBudget, workspaceId, bucket, dimensions)

Organization Usage Summary

Aggregate spend, tokens and request volume for the caller\&#39;s organization.  The tenant-scoped counterpart of &#x60;&#x60;GET /v1/usage/summary&#x60;&#x60;, running the same aggregation over a narrower row set: the same bounded window, the same breakdowns, the same &#x60;&#x60;dimensions&#x60;&#x60; selector for paying only for the passes a caller reads. The breakdown by user names the people inside the caller\&#39;s own scope, which is the roster they can already read.

### Example

```ts
import {
  Configuration,
  OrganizationUsageApi,
} from '';
import type { OrganizationUsageSummaryV1OrganizationsMeUsageSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationUsageApi(config);

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
    // boolean | Filter by budget participation, which is not the same question as provenance: true = only enforced gateway rows, false = every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key (optional)
    countsTowardBudget: true,
    // string | Only usage recorded in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'hour' | 'day' | Time-series granularity: \'hour\' or \'day\' (optional)
    bucket: bucket_example,
    // Array<'model' | 'user' | 'api_key' | 'source' | 'source_label' | 'endpoint' | 'provider' | 'status_code' | 'tool' | 'none'> | Which breakdowns to compute; repeatable (dimensions=model&dimensions=user). Each value names the \'by_<value>\' response field it fills, except \'status_code\', which fills the failure taxonomy in \'errors_by_status_code\'. Omit for every breakdown (the default); pass \'none\' for a totals-and-series-only response. Each dimension left out skips one GROUP BY scan, so a caller that reads only the tiles or the time series should say so. Fields that were not requested come back empty. (optional)
    dimensions: ...,
  } satisfies OrganizationUsageSummaryV1OrganizationsMeUsageSummaryGetRequest;

  try {
    const data = await api.organizationUsageSummaryV1OrganizationsMeUsageSummaryGet(body);
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
| **countsTowardBudget** | `boolean` | Filter by budget participation, which is not the same question as provenance: true &#x3D; only enforced gateway rows, false &#x3D; every row that never touches a budget, meaning imported usage and also gateway traffic on a budget-exempt key | [Optional] [Defaults to `undefined`] |
| **workspaceId** | `string` | Only usage recorded in this workspace. | [Optional] [Defaults to `undefined`] |
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

