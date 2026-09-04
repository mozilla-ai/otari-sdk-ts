# BootstrapApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBootstrapV1BootstrapGet**](BootstrapApi.md#getbootstrapv1bootstrapget) | **GET** /v1/bootstrap | Get Bootstrap |



## getBootstrapV1BootstrapGet

> DeploymentBootstrap getBootstrapV1BootstrapGet()

Get Bootstrap

Return the deployment context the dashboard shell renders from.  Public: the shell fetches this before it knows whether it can authenticate. That is also why &#x60;&#x60;sign_in_methods&#x60;&#x60; is answered here rather than behind a credential, and it publishes nothing an unauthenticated caller could not already learn by trying both credentials against the sign-in endpoint.  The database read is two primary-key lookups: the &#x60;&#x60;tenancy_bootstrap_user_id&#x60;&#x60; marker, and the identity it names, to answer whether *that* identity holds a password (#702). It runs only in standalone mode: a hybrid gateway has no session to describe, and &#x60;&#x60;get_db_if_needed&#x60;&#x60; hands it no session to read one from.

### Example

```ts
import {
  Configuration,
  BootstrapApi,
} from '';
import type { GetBootstrapV1BootstrapGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BootstrapApi();

  try {
    const data = await api.getBootstrapV1BootstrapGet();
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

[**DeploymentBootstrap**](DeploymentBootstrap.md)

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

