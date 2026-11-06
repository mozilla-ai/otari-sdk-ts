# OrganizationTracesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**organizationTracesCountTraces**](OrganizationTracesApi.md#organizationtracescounttraces) | **GET** /api/v1/organizations/me/traces/count | Count Traces |
| [**organizationTracesEndTraceContentShare**](OrganizationTracesApi.md#organizationtracesendtracecontentshare) | **DELETE** /api/v1/organizations/me/traces/{trace_id}/shares/{share_id} | End Trace Content Share |
| [**organizationTracesGetTrace**](OrganizationTracesApi.md#organizationtracesgettrace) | **GET** /api/v1/organizations/me/traces/{trace_id} | Get Trace |
| [**organizationTracesListOrganizationBreakGlassReads**](OrganizationTracesApi.md#organizationtraceslistorganizationbreakglassreads) | **GET** /api/v1/organizations/me/traces/audit/break-glass | List Organization Break Glass Reads |
| [**organizationTracesListTraceContentShareReads**](OrganizationTracesApi.md#organizationtraceslisttracecontentsharereads) | **GET** /api/v1/organizations/me/traces/{trace_id}/shares/{share_id}/reads | List Trace Content Share Reads |
| [**organizationTracesListTraceContentShares**](OrganizationTracesApi.md#organizationtraceslisttracecontentshares) | **GET** /api/v1/organizations/me/traces/{trace_id}/shares | List Trace Content Shares |
| [**organizationTracesListTraces**](OrganizationTracesApi.md#organizationtraceslisttraces) | **GET** /api/v1/organizations/me/traces | List Traces |
| [**organizationTracesOrganizationBreakGlass**](OrganizationTracesApi.md#organizationtracesorganizationbreakglass) | **POST** /api/v1/organizations/me/traces/{trace_id}/break-glass | Organization Break Glass |
| [**organizationTracesShareTraceContent**](OrganizationTracesApi.md#organizationtracessharetracecontent) | **POST** /api/v1/organizations/me/traces/{trace_id}/shares | Share Trace Content |
| [**organizationTracesTraceOfRequest**](OrganizationTracesApi.md#organizationtracestraceofrequest) | **GET** /api/v1/organizations/me/traces/requests/{request_id} | Trace Of Request |
| [**organizationTracesTraceSeries**](OrganizationTracesApi.md#organizationtracestraceseries) | **GET** /api/v1/organizations/me/traces/series | Trace Series |



## organizationTracesCountTraces

> TraceCountPublic organizationTracesCountTraces(workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

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


## organizationTracesEndTraceContentShare

> organizationTracesEndTraceContentShare(traceId, shareId, workspaceId)

End Trace Content Share

Stop a share letting its audience read what your session was about.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesEndTraceContentShareRequest } from '';

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
    // string
    shareId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationTracesEndTraceContentShareRequest;

  try {
    const data = await api.organizationTracesEndTraceContentShare(body);
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
| **shareId** | `string` |  | [Defaults to `undefined`] |
| **workspaceId** | `string` | The workspace the trace is in, as its list entry names it. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
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


## organizationTracesListOrganizationBreakGlassReads

> BreakGlassReadListPublic organizationTracesListOrganizationBreakGlassReads(skip, limit)

List Organization Break Glass Reads

The organization\&#39;s owners\&#39; break-glass openings, newest first. Owners only.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesListOrganizationBreakGlassReadsRequest } from '';

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
  } satisfies OrganizationTracesListOrganizationBreakGlassReadsRequest;

  try {
    const data = await api.organizationTracesListOrganizationBreakGlassReads(body);
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


## organizationTracesListTraceContentShareReads

> ContentReadListPublic organizationTracesListTraceContentShareReads(traceId, shareId, workspaceId, skip, limit)

List Trace Content Share Reads

Every read through one share of your session, newest first, a page at a time.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesListTraceContentShareReadsRequest } from '';

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
    // string
    shareId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies OrganizationTracesListTraceContentShareReadsRequest;

  try {
    const data = await api.organizationTracesListTraceContentShareReads(body);
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
| **shareId** | `string` |  | [Defaults to `undefined`] |
| **workspaceId** | `string` | The workspace the trace is in, as its list entry names it. | [Optional] [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**ContentReadListPublic**](ContentReadListPublic.md)

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


## organizationTracesListTraceContentShares

> ContentShareListPublic organizationTracesListTraceContentShares(traceId, workspaceId, skip, limit)

List Trace Content Shares

The shares one of your sessions has had, ended ones included, newest first, each with its newest reads.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesListTraceContentSharesRequest } from '';

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
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies OrganizationTracesListTraceContentSharesRequest;

  try {
    const data = await api.organizationTracesListTraceContentShares(body);
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
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ContentShareListPublic**](ContentShareListPublic.md)

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

> TraceListPublic organizationTracesListTraces(skip, limit, sort, order, workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

List Traces

List agent sessions, most recently active first unless &#x60;&#x60;sort&#x60;&#x60; says otherwise.

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


## organizationTracesOrganizationBreakGlass

> TraceDetailPublic organizationTracesOrganizationBreakGlass(traceId, breakGlassCreate, workspaceId)

Organization Break Glass

Open a session\&#39;s content without its owner\&#39;s share, as an owner of the organization.  For an investigation the session\&#39;s owner cannot be asked to share for, a member who left included. The opening is recorded with its reason before anything opens, and listed for every owner at &#x60;&#x60;GET .../audit/break-glass&#x60;&#x60;. The session\&#39;s owner is not told.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesOrganizationBreakGlassRequest } from '';

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
    // BreakGlassCreate
    breakGlassCreate: ...,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationTracesOrganizationBreakGlassRequest;

  try {
    const data = await api.organizationTracesOrganizationBreakGlass(body);
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
| **breakGlassCreate** | [BreakGlassCreate](BreakGlassCreate.md) |  | |
| **workspaceId** | `string` | The workspace the trace is in, as its list entry names it. | [Optional] [Defaults to `undefined`] |

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


## organizationTracesShareTraceContent

> ContentSharePublic organizationTracesShareTraceContent(traceId, contentShareCreate, workspaceId)

Share Trace Content

Let the organization\&#39;s admins, or the deployment\&#39;s operator, read what one of your sessions was about.  A session\&#39;s content is private to its own user. A share lets its audience read it until you end it or lose the workspace, and each read through it is recorded for you. Only the session\&#39;s own user can share it.

### Example

```ts
import {
  Configuration,
  OrganizationTracesApi,
} from '';
import type { OrganizationTracesShareTraceContentRequest } from '';

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
    // ContentShareCreate
    contentShareCreate: ...,
    // string | The workspace the trace is in, as its list entry names it. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies OrganizationTracesShareTraceContentRequest;

  try {
    const data = await api.organizationTracesShareTraceContent(body);
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
| **contentShareCreate** | [ContentShareCreate](ContentShareCreate.md) |  | |
| **workspaceId** | `string` | The workspace the trace is in, as its list entry names it. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContentSharePublic**](ContentSharePublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
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

> TraceSeriesPublic organizationTracesTraceSeries(bucket, workspaceId, start, end, userId, apiKeyId, model, harness, sessionSource, hasError, q)

Trace Series

Count the sessions active in each bucket, split by whether they failed.  A session is active from its start to its last activity, so a long one counts in every bucket it ran through. Here &#x60;&#x60;start&#x60;&#x60; and &#x60;&#x60;end&#x60;&#x60; bound the buckets: a session that began before &#x60;&#x60;start&#x60;&#x60; or was still active at &#x60;&#x60;end&#x60;&#x60; counts in the buckets between them it overlaps. Buckets are aligned to their size in UTC and only the populated ones are returned. A session failed when it holds an unrecovered error other than a tool\&#39;s. A tool\&#39;s error goes back to the model, an MCP tool\&#39;s included, so a session whose only errors are tools\&#39; counts as succeeded.

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

