# HealthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthHealthCheck**](HealthApi.md#healthhealthcheck) | **GET** /api/v1/health | Health Check |
| [**healthHealthLiveness**](HealthApi.md#healthhealthliveness) | **GET** /api/v1/health/liveness | Health Liveness |
| [**healthHealthReadiness**](HealthApi.md#healthhealthreadiness) | **GET** /api/v1/health/readiness | Health Readiness |



## healthHealthCheck

> { [key: string]: string | null; } healthHealthCheck()

Health Check

General health check endpoint.  Returns basic health status. For infrastructure monitoring, use /health/readiness or /health/liveness instead.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthHealthCheckRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthHealthCheck();
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

**{ [key: string]: string | null; }**

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


## healthHealthLiveness

> string healthHealthLiveness()

Health Liveness

Liveness probe endpoint.  Simple check to verify the process is alive and responding. Used by Kubernetes/container orchestrators for liveness probes.  Returns:     Plain text \&quot;I\&#39;m alive!\&quot; message

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthHealthLivenessRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthHealthLiveness();
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


## healthHealthReadiness

> { [key: string]: any; } healthHealthReadiness()

Health Readiness

Readiness probe endpoint.  Checks if the gateway is ready to serve requests by validating: - Database connectivity - Service availability  Used by Kubernetes/container orchestrators for readiness probes. Returns HTTP 503 if any dependency is unavailable.  Returns:     dict: Status object with health details  Raises:     HTTPException: 503 if service is not ready

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthHealthReadinessRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthHealthReadiness();
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

