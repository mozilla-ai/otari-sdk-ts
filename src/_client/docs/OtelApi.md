# OtelApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**otelReceiveLogs**](OtelApi.md#otelreceivelogs) | **POST** /otlp/v1/logs | Receive Logs |
| [**otelReceiveMetrics**](OtelApi.md#otelreceivemetrics) | **POST** /otlp/v1/metrics | Receive Metrics |
| [**otelReceiveTraces**](OtelApi.md#otelreceivetraces) | **POST** /otlp/v1/traces | Receive Traces |



## otelReceiveLogs

> any otelReceiveLogs()

Receive Logs

Ingest LLM usage from OTLP log events (Claude Code, Codex, or GenAI logs).

### Example

```ts
import {
  Configuration,
  OtelApi,
} from '';
import type { OtelReceiveLogsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OtelApi(config);

  try {
    const data = await api.otelReceiveLogs();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## otelReceiveMetrics

> any otelReceiveMetrics()

Receive Metrics

Ingest content-free coding-agent outcome metrics from OTLP metric points.  Records the outcome counters a coding agent reports on the metrics signal and that Otari has no other source for: lines of code changed, commits, pull requests, and active time. Points are stored exactly as reported, with their OTLP series identity, so a cumulative counter is turned into an increment at read time rather than re-counted on every export. Metrics that duplicate an already-recorded signal (token/cost usage, already billed; edit decisions, already captured as behavioral events) are skipped, as is any metric name this gateway does not know, so a newer agent version never breaks reception.  Outcome metrics are never billable: they touch no budget and no spend. Capture answers to the same &#x60;&#x60;capture_agent_telemetry&#x60;&#x60; toggle as behavioral events; with it off, the export still succeeds and simply stores nothing.

### Example

```ts
import {
  Configuration,
  OtelApi,
} from '';
import type { OtelReceiveMetricsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OtelApi(config);

  try {
    const data = await api.otelReceiveMetrics();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## otelReceiveTraces

> any otelReceiveTraces()

Receive Traces

Ingest LLM usage from OTLP spans (GenAI semantic conventions).

### Example

```ts
import {
  Configuration,
  OtelApi,
} from '';
import type { OtelReceiveTracesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OtelApi(config);

  try {
    const data = await api.otelReceiveTraces();
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

