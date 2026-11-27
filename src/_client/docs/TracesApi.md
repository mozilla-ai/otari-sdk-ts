# TracesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tracesCountTraces**](TracesApi.md#tracescounttraces) | **GET** /api/v1/traces/count | Count Traces |
| [**tracesGetTrace**](TracesApi.md#tracesgettrace) | **GET** /api/v1/traces/{trace_id} | Get Trace |
| [**tracesGetTraceContentPolicy**](TracesApi.md#tracesgettracecontentpolicy) | **GET** /api/v1/trace-content/policy | Get Trace Content Policy |
| [**tracesListBreakGlassReads**](TracesApi.md#traceslistbreakglassreads) | **GET** /api/v1/traces/audit/break-glass | List Break Glass Reads |
| [**tracesListTraces**](TracesApi.md#traceslisttraces) | **GET** /api/v1/traces | List Traces |
| [**tracesPlatformBreakGlass**](TracesApi.md#tracesplatformbreakglass) | **POST** /api/v1/traces/{trace_id}/break-glass | Platform Break Glass |
| [**tracesTraceOfRequest**](TracesApi.md#tracestraceofrequest) | **GET** /api/v1/traces/requests/{request_id} | Trace Of Request |
| [**tracesTraceSeries**](TracesApi.md#tracestraceseries) | **GET** /api/v1/traces/series | Trace Series |



## tracesCountTraces

> TraceCountPublic tracesCountTraces(workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

Count Traces

Count the agent sessions that match.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesCountTracesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // string | Only sessions in this workspace. Narrows the caller\'s scope; never widens it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Sessions active at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Sessions started before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Sessions with an LLM call recorded under any of these model ids (exact match). (optional)
    model: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | Part of a trace id, session name, harness or user id, in any case. (optional)
    q: q_example,
  } satisfies TracesCountTracesRequest;

  try {
    const data = await api.tracesCountTraces(body);
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
| **workspaceId** | `string` | Only sessions in this workspace. Narrows the caller\&#39;s scope; never widens it. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Sessions active at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Sessions started before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **model** | `Array<string>` | Sessions with an LLM call recorded under any of these model ids (exact match). | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Part of a trace id, session name, harness or user id, in any case. | [Optional] [Defaults to `undefined`] |

### Return type

[**TraceCountPublic**](TraceCountPublic.md)

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


## tracesGetTrace

> TraceDetailPublic tracesGetTrace(traceId, workspaceId)

Get Trace

One agent session: its turns, and every span inside them.  A trace outside the scope is a 404. Without &#x60;&#x60;workspace_id&#x60;&#x60;, an id in more than one of the caller\&#39;s workspaces is a 409 rather than a guess.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesGetTraceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // string
    traceId: traceId_example,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TracesGetTraceRequest;

  try {
    const data = await api.tracesGetTrace(body);
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
| **traceId** | `string` |  | [Defaults to `undefined`] |
| **workspaceId** | `string` | The workspace the trace is in, as its list entry names it. | [Optional] [Defaults to `undefined`] |

### Return type

[**TraceDetailPublic**](TraceDetailPublic.md)

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


## tracesGetTraceContentPolicy

> TraceContentPolicyPublic tracesGetTraceContentPolicy()

Get Trace Content Policy

What this deployment keeps of agent sessions, and who besides a session\&#39;s owner can open it.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesGetTraceContentPolicyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  try {
    const data = await api.tracesGetTraceContentPolicy();
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

[**TraceContentPolicyPublic**](TraceContentPolicyPublic.md)

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


## tracesListBreakGlassReads

> BreakGlassReadListPublic tracesListBreakGlassReads(skip, limit)

List Break Glass Reads

The operator\&#39;s recorded break-glass openings, in any organization, newest first.  An organization owner\&#39;s openings are listed for that organization\&#39;s owners alone, at &#x60;&#x60;GET /organizations/me/traces/audit/break-glass&#x60;&#x60;: their reasons can name the people under investigation, which is no business of the operator\&#39;s.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesListBreakGlassReadsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies TracesListBreakGlassReadsRequest;

  try {
    const data = await api.tracesListBreakGlassReads(body);
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
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**BreakGlassReadListPublic**](BreakGlassReadListPublic.md)

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


## tracesListTraces

> TraceListPublic tracesListTraces(skip, limit, sort, order, workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

List Traces

List agent sessions, most recently active first unless &#x60;&#x60;sort&#x60;&#x60; says otherwise.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesListTracesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // 'last_activity' | 'latency' | 'tokens' | 'cost' | 'errors' | What to order by. Latency runs from a session\'s start to its last activity. (optional)
    sort: sort_example,
    // 'asc' | 'desc' | The direction of `sort`. (optional)
    order: order_example,
    // string | Only sessions in this workspace. Narrows the caller\'s scope; never widens it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Sessions active at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Sessions started before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Sessions with an LLM call recorded under any of these model ids (exact match). (optional)
    model: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | Part of a trace id, session name, harness or user id, in any case. (optional)
    q: q_example,
  } satisfies TracesListTracesRequest;

  try {
    const data = await api.tracesListTraces(body);
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
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **sort** | `last_activity`, `latency`, `tokens`, `cost`, `errors` | What to order by. Latency runs from a session\&#39;s start to its last activity. | [Optional] [Defaults to `&#39;last_activity&#39;`] [Enum: last_activity, latency, tokens, cost, errors] |
| **order** | `asc`, `desc` | The direction of &#x60;sort&#x60;. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **workspaceId** | `string` | Only sessions in this workspace. Narrows the caller\&#39;s scope; never widens it. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Sessions active at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Sessions started before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **model** | `Array<string>` | Sessions with an LLM call recorded under any of these model ids (exact match). | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Part of a trace id, session name, harness or user id, in any case. | [Optional] [Defaults to `undefined`] |

### Return type

[**TraceListPublic**](TraceListPublic.md)

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


## tracesPlatformBreakGlass

> TraceDetailPublic tracesPlatformBreakGlass(traceId, workspaceId, platformBreakGlassCreate)

Platform Break Glass

Open a session\&#39;s content in any organization without its owner\&#39;s share, as the deployment\&#39;s operator.  Only where &#x60;&#x60;trace_platform_break_glass_enabled&#x60;&#x60; is on; a 404 otherwise. The opening is recorded with its reason and reference before anything opens, and listed at &#x60;&#x60;GET /traces/audit/break-glass&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesPlatformBreakGlassRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // string
    traceId: traceId_example,
    // string | The workspace the session is in.
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PlatformBreakGlassCreate
    platformBreakGlassCreate: ...,
  } satisfies TracesPlatformBreakGlassRequest;

  try {
    const data = await api.tracesPlatformBreakGlass(body);
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
| **traceId** | `string` |  | [Defaults to `undefined`] |
| **workspaceId** | `string` | The workspace the session is in. | [Defaults to `undefined`] |
| **platformBreakGlassCreate** | [PlatformBreakGlassCreate](PlatformBreakGlassCreate.md) |  | |

### Return type

[**TraceDetailPublic**](TraceDetailPublic.md)

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


## tracesTraceOfRequest

> TraceSummaryPublic tracesTraceOfRequest(requestId)

Trace Of Request

The session a gateway request was traced into, by the &#x60;&#x60;Otari-Request-ID&#x60;&#x60; it was sent.  The usage log\&#39;s &#x60;&#x60;request_group_id&#x60;&#x60; is that id, so a request log row opens its session here. A request outside the scope, or with no trace stored, is a 404.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesTraceOfRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // string
    requestId: requestId_example,
  } satisfies TracesTraceOfRequestRequest;

  try {
    const data = await api.tracesTraceOfRequest(body);
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
| **requestId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TraceSummaryPublic**](TraceSummaryPublic.md)

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


## tracesTraceSeries

> TraceSeriesPublic tracesTraceSeries(bucket, workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

Trace Series

Count the sessions active in each bucket, split by whether they failed.  A session is active from its start to its last activity, so a long one counts in every bucket it ran through. Here &#x60;&#x60;start&#x60;&#x60; and &#x60;&#x60;end&#x60;&#x60; bound the buckets: a session that began before &#x60;&#x60;start&#x60;&#x60; or was still active at &#x60;&#x60;end&#x60;&#x60; counts in the buckets between them it overlaps. Buckets are aligned to their size in UTC and only the populated ones are returned. A session failed when it holds an unrecovered error other than a tool\&#39;s. A tool\&#39;s error goes back to the model, an MCP tool\&#39;s included, so a session whose only errors are tools\&#39; counts as succeeded.

### Example

```ts
import {
  Configuration,
  TracesApi,
} from '';
import type { TracesTraceSeriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TracesApi(config);

  const body = {
    // '1m' | '5m' | '30m' | 'hour' | '6h' | 'day' (optional)
    bucket: bucket_example,
    // string | Only sessions in this workspace. Narrows the caller\'s scope; never widens it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Sessions active at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Sessions started before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Sessions with an LLM call recorded under any of these model ids (exact match). (optional)
    model: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | Part of a trace id, session name, harness or user id, in any case. (optional)
    q: q_example,
  } satisfies TracesTraceSeriesRequest;

  try {
    const data = await api.tracesTraceSeries(body);
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
| **bucket** | `1m`, `5m`, `30m`, `hour`, `6h`, `day` |  | [Optional] [Defaults to `&#39;hour&#39;`] [Enum: 1m, 5m, 30m, hour, 6h, day] |
| **workspaceId** | `string` | Only sessions in this workspace. Narrows the caller\&#39;s scope; never widens it. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Sessions active at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Sessions started before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **model** | `Array<string>` | Sessions with an LLM call recorded under any of these model ids (exact match). | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Part of a trace id, session name, harness or user id, in any case. | [Optional] [Defaults to `undefined`] |

### Return type

[**TraceSeriesPublic**](TraceSeriesPublic.md)

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

