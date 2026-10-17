# TracesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tracesCountTraces**](TracesApi.md#tracescounttraces) | **GET** /api/v1/traces/count | Count Traces |
| [**tracesGetTrace**](TracesApi.md#tracesgettrace) | **GET** /api/v1/traces/{trace_id} | Get Trace |
| [**tracesListTraces**](TracesApi.md#traceslisttraces) | **GET** /api/v1/traces | List Traces |
| [**tracesTraceOfRequest**](TracesApi.md#tracestraceofrequest) | **GET** /api/v1/traces/requests/{request_id} | Trace Of Request |
| [**tracesTraceSeries**](TracesApi.md#tracestraceseries) | **GET** /api/v1/traces/series | Trace Series |



## tracesCountTraces

> TraceCountPublic tracesCountTraces(workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

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
    // Date | Last activity at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Last activity before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | A trace id, or the start of one. (optional)
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
| **start** | `Date` | Last activity at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Last activity before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | A trace id, or the start of one. | [Optional] [Defaults to `undefined`] |

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


## tracesListTraces

> TraceListPublic tracesListTraces(skip, limit, workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

List Traces

List agent sessions, most recently active first.

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
    // string | Only sessions in this workspace. Narrows the caller\'s scope; never widens it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Last activity at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Last activity before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | A trace id, or the start of one. (optional)
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
| **workspaceId** | `string` | Only sessions in this workspace. Narrows the caller\&#39;s scope; never widens it. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Last activity at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Last activity before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | A trace id, or the start of one. | [Optional] [Defaults to `undefined`] |

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

> TraceSeriesPublic tracesTraceSeries(bucket, workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

Trace Series

Count sessions per bucket of their start, split by whether any span failed unrecovered.

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
    // 'hour' | 'day' (optional)
    bucket: bucket_example,
    // string | Only sessions in this workspace. Narrows the caller\'s scope; never widens it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Last activity at or after this instant (ISO 8601). (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | Last activity before this instant (ISO 8601). (optional)
    end: 2013-10-20T19:20:30+01:00,
    // Array<string> | Owning users. (optional)
    userId: ...,
    // Array<string> | API keys. (optional)
    apiKeyId: ...,
    // Array<string> | Agent harnesses. (optional)
    harness: ...,
    // Array<'client' | 'harness' | 'otlp' | 'none'> | What grouped the session. (optional)
    sessionSource: ...,
    // boolean | Only sessions with, or without, an unrecovered error. (optional)
    hasError: true,
    // string | A trace id, or the start of one. (optional)
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
| **bucket** | `hour`, `day` |  | [Optional] [Defaults to `&#39;hour&#39;`] [Enum: hour, day] |
| **workspaceId** | `string` | Only sessions in this workspace. Narrows the caller\&#39;s scope; never widens it. | [Optional] [Defaults to `undefined`] |
| **start** | `Date` | Last activity at or after this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | Last activity before this instant (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **userId** | `Array<string>` | Owning users. | [Optional] |
| **apiKeyId** | `Array<string>` | API keys. | [Optional] |
| **harness** | `Array<string>` | Agent harnesses. | [Optional] |
| **sessionSource** | `client`, `harness`, `otlp`, `none` | What grouped the session. | [Optional] [Enum: client, harness, otlp, none] |
| **hasError** | `boolean` | Only sessions with, or without, an unrecovered error. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | A trace id, or the start of one. | [Optional] [Defaults to `undefined`] |

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

