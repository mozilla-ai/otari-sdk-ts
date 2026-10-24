# HostedProvidersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**hostedProvidersAddHostedModel**](HostedProvidersApi.md#hostedprovidersaddhostedmodel) | **POST** /api/v1/hosted-providers/{provider}/models | Add Hosted Model |
| [**hostedProvidersApplyDeploymentProviderMigration**](HostedProvidersApi.md#hostedprovidersapplydeploymentprovidermigration) | **POST** /api/v1/hosted-providers/migration | Apply Deployment Provider Migration |
| [**hostedProvidersCreateHostedProvider**](HostedProvidersApi.md#hostedproviderscreatehostedprovider) | **POST** /api/v1/hosted-providers | Create Hosted Provider |
| [**hostedProvidersDeleteHostedProvider**](HostedProvidersApi.md#hostedprovidersdeletehostedprovider) | **DELETE** /api/v1/hosted-providers/{provider} | Delete Hosted Provider |
| [**hostedProvidersDiscardDeploymentProvider**](HostedProvidersApi.md#hostedprovidersdiscarddeploymentprovider) | **DELETE** /api/v1/hosted-providers/migration/{instance} | Discard Deployment Provider |
| [**hostedProvidersListAvailableModels**](HostedProvidersApi.md#hostedproviderslistavailablemodels) | **GET** /api/v1/hosted-providers/{provider}/available-models | List Available Models |
| [**hostedProvidersListHostedModels**](HostedProvidersApi.md#hostedproviderslisthostedmodels) | **GET** /api/v1/hosted-providers/{provider}/models | List Hosted Models |
| [**hostedProvidersListHostedProviders**](HostedProvidersApi.md#hostedproviderslisthostedproviders) | **GET** /api/v1/hosted-providers | List Hosted Providers |
| [**hostedProvidersPreviewCatalogRefresh**](HostedProvidersApi.md#hostedproviderspreviewcatalogrefresh) | **GET** /api/v1/hosted-providers/refresh/preview | Preview Catalog Refresh |
| [**hostedProvidersPreviewDeploymentProviderMigration**](HostedProvidersApi.md#hostedproviderspreviewdeploymentprovidermigration) | **GET** /api/v1/hosted-providers/migration | Preview Deployment Provider Migration |
| [**hostedProvidersReencryptHostedProviders**](HostedProvidersApi.md#hostedprovidersreencrypthostedproviders) | **POST** /api/v1/hosted-providers/reencrypt | Reencrypt Hosted Providers |
| [**hostedProvidersRefreshCatalog**](HostedProvidersApi.md#hostedprovidersrefreshcatalog) | **POST** /api/v1/hosted-providers/refresh | Refresh Catalog |
| [**hostedProvidersRefreshHostedModels**](HostedProvidersApi.md#hostedprovidersrefreshhostedmodels) | **POST** /api/v1/hosted-providers/{provider}/models/refresh | Refresh Hosted Models |
| [**hostedProvidersRemoveHostedModel**](HostedProvidersApi.md#hostedprovidersremovehostedmodel) | **DELETE** /api/v1/hosted-providers/{provider}/models/{model_id} | Remove Hosted Model |
| [**hostedProvidersTestHostedProvider**](HostedProvidersApi.md#hostedproviderstesthostedprovider) | **POST** /api/v1/hosted-providers/test | Test Hosted Provider |
| [**hostedProvidersUpdateHostedModel**](HostedProvidersApi.md#hostedprovidersupdatehostedmodel) | **PATCH** /api/v1/hosted-providers/{provider}/models/{model_id} | Update Hosted Model |
| [**hostedProvidersUpdateHostedProvider**](HostedProvidersApi.md#hostedprovidersupdatehostedprovider) | **PATCH** /api/v1/hosted-providers/{provider} | Update Hosted Provider |



## hostedProvidersAddHostedModel

> HostedModelPublic hostedProvidersAddHostedModel(provider, hostedModelCreateRequest)

Add Hosted Model

Offer a model on a provider, optionally at a custom price.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersAddHostedModelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
    // HostedModelCreateRequest
    hostedModelCreateRequest: ...,
  } satisfies HostedProvidersAddHostedModelRequest;

  try {
    const data = await api.hostedProvidersAddHostedModel(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **hostedModelCreateRequest** | [HostedModelCreateRequest](HostedModelCreateRequest.md) |  | |

### Return type

[**HostedModelPublic**](HostedModelPublic.md)

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


## hostedProvidersApplyDeploymentProviderMigration

> DeploymentProviderMigrationPublic hostedProvidersApplyDeploymentProviderMigration(deploymentProviderMigrationRequest)

Apply Deployment Provider Migration

Move the deployment providers the retired dashboard page stored onto hosted providers of the same name.  Each is created as a hosted provider that serves models not on its roster, offering what it lists as a create does, and the deployment provider is removed. One that cannot move is reported and left in place. &#x60;&#x60;rows&#x60;&#x60; limits the move to the rows of the preview the caller reviewed, at the versions it was shown them.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersApplyDeploymentProviderMigrationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // DeploymentProviderMigrationRequest (optional)
    deploymentProviderMigrationRequest: ...,
  } satisfies HostedProvidersApplyDeploymentProviderMigrationRequest;

  try {
    const data = await api.hostedProvidersApplyDeploymentProviderMigration(body);
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
| **deploymentProviderMigrationRequest** | [DeploymentProviderMigrationRequest](DeploymentProviderMigrationRequest.md) |  | [Optional] |

### Return type

[**DeploymentProviderMigrationPublic**](DeploymentProviderMigrationPublic.md)

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


## hostedProvidersCreateHostedProvider

> HostedProviderPublic hostedProvidersCreateHostedProvider(hostedProviderCreateRequest)

Create Hosted Provider

Configure a provider with the key this deployment will serve it on.  Everything the provider lists on that key is offered at once; a provider that will not say yields a provider with no models, not an error. A provider the configuration defines may be created too, and the stored one then serves instead.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersCreateHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // HostedProviderCreateRequest
    hostedProviderCreateRequest: ...,
  } satisfies HostedProvidersCreateHostedProviderRequest;

  try {
    const data = await api.hostedProvidersCreateHostedProvider(body);
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
| **hostedProviderCreateRequest** | [HostedProviderCreateRequest](HostedProviderCreateRequest.md) |  | |

### Return type

[**HostedProviderPublic**](HostedProviderPublic.md)

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


## hostedProvidersDeleteHostedProvider

> Message hostedProvidersDeleteHostedProvider(provider)

Delete Hosted Provider

Remove a provider and its roster, leaving the runtime with no hosted path for it.  A provider defined in configuration answers 409. A stored provider that overrides a configured one keeps the roster, which the configured one serves again.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersDeleteHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
  } satisfies HostedProvidersDeleteHostedProviderRequest;

  try {
    const data = await api.hostedProvidersDeleteHostedProvider(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

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


## hostedProvidersDiscardDeploymentProvider

> hostedProvidersDiscardDeploymentProvider(instance)

Discard Deployment Provider

Remove a deployment provider the move could not take, which serves nothing.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersDiscardDeploymentProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    instance: instance_example,
  } satisfies HostedProvidersDiscardDeploymentProviderRequest;

  try {
    const data = await api.hostedProvidersDiscardDeploymentProvider(body);
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
| **instance** | `string` |  | [Defaults to `undefined`] |

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


## hostedProvidersListAvailableModels

> HostedAvailableModelsPublic hostedProvidersListAvailableModels(provider)

List Available Models

Ask the provider what it serves on its credential.  Dials the upstream on every call rather than caching: the caller is the admin form\&#39;s model picker, opened rarely and entitled to a current answer. Failure comes back in the body, so the picker can fall back to a text box.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersListAvailableModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
  } satisfies HostedProvidersListAvailableModelsRequest;

  try {
    const data = await api.hostedProvidersListAvailableModels(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

[**HostedAvailableModelsPublic**](HostedAvailableModelsPublic.md)

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


## hostedProvidersListHostedModels

> HostedModelsPublic hostedProvidersListHostedModels(provider, skip, limit)

List Hosted Models

List the models offered on one provider, with the price each currently serves at.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersListHostedModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies HostedProvidersListHostedModelsRequest;

  try {
    const data = await api.hostedProvidersListHostedModels(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `500`] |

### Return type

[**HostedModelsPublic**](HostedModelsPublic.md)

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


## hostedProvidersListHostedProviders

> HostedProvidersPublic hostedProvidersListHostedProviders(skip, limit)

List Hosted Providers

List the providers this deployment serves hosted inference on.  Stored providers and those defined in the configuration\&#39;s &#x60;&#x60;hosted_providers:&#x60;&#x60; block alike, each marked with its &#x60;&#x60;source&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersListHostedProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
  } satisfies HostedProvidersListHostedProvidersRequest;

  try {
    const data = await api.hostedProvidersListHostedProviders(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**HostedProvidersPublic**](HostedProvidersPublic.md)

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


## hostedProvidersPreviewCatalogRefresh

> HostedCatalogRefreshPublic hostedProvidersPreviewCatalogRefresh()

Preview Catalog Refresh

What a catalog sweep would remove, without removing it.  A GET, and a truthful one: it writes nothing. It does dial every enabled provider, as &#x60;&#x60;available-models&#x60;&#x60; does, because a model the provider still lists would survive the sweep and previewing it as doomed would be a lie.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersPreviewCatalogRefreshRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  try {
    const data = await api.hostedProvidersPreviewCatalogRefresh();
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

[**HostedCatalogRefreshPublic**](HostedCatalogRefreshPublic.md)

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


## hostedProvidersPreviewDeploymentProviderMigration

> DeploymentProviderMigrationPublic hostedProvidersPreviewDeploymentProviderMigration()

Preview Deployment Provider Migration

What moving the deployment providers the retired dashboard page stored onto hosted providers would do.  The gateway moves them at startup, so this lists the ones it could not move, each with the reason. Writes nothing and dials nothing.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersPreviewDeploymentProviderMigrationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  try {
    const data = await api.hostedProvidersPreviewDeploymentProviderMigration();
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

[**DeploymentProviderMigrationPublic**](DeploymentProviderMigrationPublic.md)

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


## hostedProvidersReencryptHostedProviders

> HostedProvidersReencryptPublic hostedProvidersReencryptHostedProviders()

Reencrypt Hosted Providers

Re-encrypt every stored key and set of client arguments with the primary &#x60;&#x60;OTARI_SECRET_KEY&#x60;&#x60;.  Run after rotating the key, alongside &#x60;&#x60;POST /api/v1/search-tools/reencrypt&#x60;&#x60;. A provider no configured key reads is left as it is, to be re-entered.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersReencryptHostedProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  try {
    const data = await api.hostedProvidersReencryptHostedProviders();
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

[**HostedProvidersReencryptPublic**](HostedProvidersReencryptPublic.md)

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


## hostedProvidersRefreshCatalog

> HostedCatalogRefreshPublic hostedProvidersRefreshCatalog()

Refresh Catalog

Re-ask every enabled provider what it lists, then take the rest off the catalog.  The whole deployment rather than one provider: a stored price is what puts a model on a tenant\&#39;s Models page, and a price under a provider nothing here serves cannot be reached by a per-provider refresh. A model list whose provider nothing defines any more, such as a removed &#x60;&#x60;config.yml&#x60;&#x60; entry, goes too, and is named in &#x60;&#x60;orphaned_rosters&#x60;&#x60;. Where no provider offers a model, only those lists go and every price stays; with none of them either, the sweep answers 409. Declared before the &#x60;&#x60;/{provider}&#x60;&#x60; paths to read in the order the surface is used; no method collides in any case.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersRefreshCatalogRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  try {
    const data = await api.hostedProvidersRefreshCatalog();
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

[**HostedCatalogRefreshPublic**](HostedCatalogRefreshPublic.md)

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


## hostedProvidersRefreshHostedModels

> HostedModelsRefreshPublic hostedProvidersRefreshHostedModels(provider)

Refresh Hosted Models

Ask the provider again and offer whatever is newly listed.  Nothing already offered is removed, even when the provider no longer lists it. New models follow the offer rule, seeded with the community default price and off when nothing prices them. A seeded price nobody changed moves with the default. An offered model whose stored price has since been deleted is seeded again, or switched off where the default does not price it, even one an operator switched on: a refresh never switches a model on.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersRefreshHostedModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
  } satisfies HostedProvidersRefreshHostedModelsRequest;

  try {
    const data = await api.hostedProvidersRefreshHostedModels(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |

### Return type

[**HostedModelsRefreshPublic**](HostedModelsRefreshPublic.md)

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


## hostedProvidersRemoveHostedModel

> Message hostedProvidersRemoveHostedModel(provider, modelId)

Remove Hosted Model

Stop offering a model on a provider. Its pricing history stays.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersRemoveHostedModelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
    // string
    modelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies HostedProvidersRemoveHostedModelRequest;

  try {
    const data = await api.hostedProvidersRemoveHostedModel(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **modelId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Message**](Message.md)

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


## hostedProvidersTestHostedProvider

> HostedProviderTestPublic hostedProvidersTestHostedProvider(hostedProviderTestRequest)

Test Hosted Provider

Ask a provider what it lists on the given credentials, storing nothing.  Backs the form\&#39;s \&quot;Test connection\&quot;. With &#x60;&#x60;name&#x60;&#x60; naming a stored provider, a field left out is read from it, so an edit can be tested without typing the key again; pointing the stored key at another origin still needs it. Failure comes back in the body.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersTestHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // HostedProviderTestRequest
    hostedProviderTestRequest: ...,
  } satisfies HostedProvidersTestHostedProviderRequest;

  try {
    const data = await api.hostedProvidersTestHostedProvider(body);
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
| **hostedProviderTestRequest** | [HostedProviderTestRequest](HostedProviderTestRequest.md) |  | |

### Return type

[**HostedProviderTestPublic**](HostedProviderTestPublic.md)

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


## hostedProvidersUpdateHostedModel

> HostedModelPublic hostedProvidersUpdateHostedModel(provider, modelId, hostedModelUpdateRequest)

Update Hosted Model

Reprice one offered model, toggle whether it is served, or both.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersUpdateHostedModelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
    // string
    modelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // HostedModelUpdateRequest
    hostedModelUpdateRequest: ...,
  } satisfies HostedProvidersUpdateHostedModelRequest;

  try {
    const data = await api.hostedProvidersUpdateHostedModel(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **modelId** | `string` |  | [Defaults to `undefined`] |
| **hostedModelUpdateRequest** | [HostedModelUpdateRequest](HostedModelUpdateRequest.md) |  | |

### Return type

[**HostedModelPublic**](HostedModelPublic.md)

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


## hostedProvidersUpdateHostedProvider

> HostedProviderPublic hostedProvidersUpdateHostedProvider(provider, hostedProviderUpdateRequest)

Update Hosted Provider

Rotate the key, repoint the base, or turn a provider off.  A provider defined in configuration answers 409: it is changed there.

### Example

```ts
import {
  Configuration,
  HostedProvidersApi,
} from '';
import type { HostedProvidersUpdateHostedProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new HostedProvidersApi(config);

  const body = {
    // string
    provider: provider_example,
    // HostedProviderUpdateRequest
    hostedProviderUpdateRequest: ...,
  } satisfies HostedProvidersUpdateHostedProviderRequest;

  try {
    const data = await api.hostedProvidersUpdateHostedProvider(body);
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
| **provider** | `string` |  | [Defaults to `undefined`] |
| **hostedProviderUpdateRequest** | [HostedProviderUpdateRequest](HostedProviderUpdateRequest.md) |  | |

### Return type

[**HostedProviderPublic**](HostedProviderPublic.md)

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

