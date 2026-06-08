# HealthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheckHealthGet**](HealthApi.md#healthcheckhealthget) | **GET** /health | Health Check |
| [**healthLivenessHealthLivenessGet**](HealthApi.md#healthlivenesshealthlivenessget) | **GET** /health/liveness | Health Liveness |
| [**healthReadinessHealthReadinessGet**](HealthApi.md#healthreadinesshealthreadinessget) | **GET** /health/readiness | Health Readiness |



## healthCheckHealthGet

> { [key: string]: string; } healthCheckHealthGet()

Health Check

General health check endpoint.  Returns basic health status. For infrastructure monitoring, use /health/readiness or /health/liveness instead.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthCheckHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthCheckHealthGet();
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

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthLivenessHealthLivenessGet

> string healthLivenessHealthLivenessGet()

Health Liveness

Liveness probe endpoint.  Simple check to verify the process is alive and responding. Used by Kubernetes/container orchestrators for liveness probes.  Returns:     Plain text \&quot;I\&#39;m alive!\&quot; message

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthLivenessHealthLivenessGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthLivenessHealthLivenessGet();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthReadinessHealthReadinessGet

> { [key: string]: any; } healthReadinessHealthReadinessGet()

Health Readiness

Readiness probe endpoint.  Checks if the gateway is ready to serve requests by validating: - Database connectivity - Service availability  Used by Kubernetes/container orchestrators for readiness probes. Returns HTTP 503 if any dependency is unavailable.  Returns:     dict: Status object with health details  Raises:     HTTPException: 503 if service is not ready

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthReadinessHealthReadinessGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthReadinessHealthReadinessGet();
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

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

