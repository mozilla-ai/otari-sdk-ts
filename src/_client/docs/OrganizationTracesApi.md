# OrganizationTracesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationTracesCountTraces**](OrganizationTracesApi.md#organizationtracescounttraces) | **GET** /api/v1/organizations/me/traces/count | Count Traces |
| [**organizationTracesGetTrace**](OrganizationTracesApi.md#organizationtracesgettrace) | **GET** /api/v1/organizations/me/traces/{trace_id} | Get Trace |
| [**organizationTracesListTraces**](OrganizationTracesApi.md#organizationtraceslisttraces) | **GET** /api/v1/organizations/me/traces | List Traces |
| [**organizationTracesTraceOfRequest**](OrganizationTracesApi.md#organizationtracestraceofrequest) | **GET** /api/v1/organizations/me/traces/requests/{request_id} | Trace Of Request |
| [**organizationTracesTraceSeries**](OrganizationTracesApi.md#organizationtracestraceseries) | **GET** /api/v1/organizations/me/traces/series | Trace Series |



## organizationTracesCountTraces

> TraceCountPublic organizationTracesCountTraces(workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

Count Traces

Count the agent sessions that match.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesCountTracesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationTracesApi(config);

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
  } satisfies OrganizationTracesCountTracesRequest;

  try {
    const data = await api.organizationTracesCountTraces(body);
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


## organizationTracesGetTrace

> TraceDetailPublic organizationTracesGetTrace(traceId, workspaceId)

Get Trace

One agent session: its turns, and every span inside them.  A trace outside the scope is a 404. Without &#x60;&#x60;workspace_id&#x60;&#x60;, an id in more than one of the caller\&#39;s workspaces is a 409 rather than a guess.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesGetTraceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationTracesApi(config);

  const body = {
    // string
    traceId: traceId_example,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationTracesGetTraceRequest;

  try {
    const data = await api.organizationTracesGetTrace(body);
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


## organizationTracesListTraces

> TraceListPublic organizationTracesListTraces(skip, limit, workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

List Traces

List agent sessions, most recently active first.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesListTracesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationTracesApi(config);

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
  } satisfies OrganizationTracesListTracesRequest;

  try {
    const data = await api.organizationTracesListTraces(body);
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


## organizationTracesTraceOfRequest

> TraceSummaryPublic organizationTracesTraceOfRequest(requestId)

Trace Of Request

The session a gateway request was traced into, by the &#x60;&#x60;Otari-Request-ID&#x60;&#x60; it was sent.  The usage log\&#39;s &#x60;&#x60;request_group_id&#x60;&#x60; is that id, so a request log row opens its session here. A request outside the scope, or with no trace stored, is a 404.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesTraceOfRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationTracesApi(config);

  const body = {
    // string
    requestId: requestId_example,
  } satisfies OrganizationTracesTraceOfRequestRequest;

  try {
    const data = await api.organizationTracesTraceOfRequest(body);
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


## organizationTracesTraceSeries

> TraceSeriesPublic organizationTracesTraceSeries(bucket, workspaceId, start, end, userId, apiKeyId, harness, sessionSource, hasError, q)

Trace Series

Count sessions per bucket of their start, split by whether any span failed unrecovered.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesTraceSeriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrganizationTracesApi(config);

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
  } satisfies OrganizationTracesTraceSeriesRequest;

  try {
    const data = await api.organizationTracesTraceSeries(body);
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

