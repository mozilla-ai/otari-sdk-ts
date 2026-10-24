# KeysApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**keysCreateFederationRule**](KeysApi.md#keyscreatefederationrule) | **POST** /api/v1/keys/{key_id}/federation-rules | Create Federation Rule |
| [**keysCreateKey**](KeysApi.md#keyscreatekey) | **POST** /api/v1/keys | Create Key |
| [**keysDeleteFederationRule**](KeysApi.md#keysdeletefederationrule) | **DELETE** /api/v1/keys/{key_id}/federation-rules/{rule_id} | Delete Federation Rule |
| [**keysDeleteKey**](KeysApi.md#keysdeletekey) | **DELETE** /api/v1/keys/{key_id} | Delete Key |
| [**keysGetEndUser**](KeysApi.md#keysgetenduser) | **GET** /api/v1/keys/{key_id}/end-users/{external_id} | Get End User |
| [**keysGetKey**](KeysApi.md#keysgetkey) | **GET** /api/v1/keys/{key_id} | Get Key |
| [**keysListEndUsers**](KeysApi.md#keyslistendusers) | **GET** /api/v1/keys/{key_id}/end-users | List End Users |
| [**keysListFederationRules**](KeysApi.md#keyslistfederationrules) | **GET** /api/v1/keys/{key_id}/federation-rules | List Federation Rules |
| [**keysListKeys**](KeysApi.md#keyslistkeys) | **GET** /api/v1/keys | List Keys |
| [**keysPutEndUser**](KeysApi.md#keysputenduser) | **PUT** /api/v1/keys/{key_id}/end-users/{external_id} | Put End User |
| [**keysPutEndUserByQuery**](KeysApi.md#keysputenduserbyquery) | **PUT** /api/v1/keys/{key_id}/end-users | Put End User By Query |
| [**keysRotateKey**](KeysApi.md#keysrotatekey) | **POST** /api/v1/keys/{key_id}/rotate | Rotate Key |
| [**keysUpdateEndUser**](KeysApi.md#keysupdateenduser) | **PATCH** /api/v1/keys/{key_id}/end-users/{external_id} | Update End User |
| [**keysUpdateEndUserByQuery**](KeysApi.md#keysupdateenduserbyquery) | **PATCH** /api/v1/keys/{key_id}/end-users | Update End User By Query |
| [**keysUpdateKey**](KeysApi.md#keysupdatekey) | **PATCH** /api/v1/keys/{key_id} | Update Key |



## keysCreateFederationRule

> FederationRulePublic keysCreateFederationRule(keyId, federationRuleCreate)

Create Federation Rule

Let an OpenID Connect identity token authenticate as this key, in place of its secret.  The issuer must be one of the deployment\&#39;s &#x60;&#x60;federation_issuers&#x60;&#x60;, else 400. A token authenticates when it is signed by that issuer, its &#x60;&#x60;aud&#x60;&#x60; contains &#x60;&#x60;audience&#x60;&#x60;, and it carries the rule\&#39;s &#x60;&#x60;subject&#x60;&#x60; and verified &#x60;&#x60;email&#x60;&#x60;, whichever the rule sets. A rule naming the identity of an existing rule answers 409: the same issuer, audience, subject and email on this key, or on another key the same issuer and audience with a subject or email in common and no contradicting value.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysCreateFederationRuleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // FederationRuleCreate
    federationRuleCreate: ...,
  } satisfies KeysCreateFederationRuleRequest;

  try {
    const data = await api.keysCreateFederationRule(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **federationRuleCreate** | [FederationRuleCreate](FederationRuleCreate.md) |  | |

### Return type

[**FederationRulePublic**](FederationRulePublic.md)

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


## keysCreateKey

> CreateKeyResponse keysCreateKey(createKeyRequest)

Create Key

Create a new API key in the caller\&#39;s organization.  Requires master key authentication.  If user_id is provided, the key will be associated with that user (creates user if it doesn\&#39;t exist). If user_id is not provided, the key is associated with the shared \&quot;default\&quot; user, which is created on first use. Keys without an explicit owner therefore share one identity, and so share budget, usage, and files.  &#x60;&#x60;workspace_id&#x60;&#x60; names a workspace in the caller\&#39;s organization, and omitting it mints into that organization\&#39;s default workspace. A key resolves that organization\&#39;s provider credentials and bills there, so minting into another organization\&#39;s workspace would spend its budget on its credentials.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysCreateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // CreateKeyRequest
    createKeyRequest: ...,
  } satisfies KeysCreateKeyRequest;

  try {
    const data = await api.keysCreateKey(body);
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
| **createKeyRequest** | [CreateKeyRequest](CreateKeyRequest.md) |  | |

### Return type

[**CreateKeyResponse**](CreateKeyResponse.md)

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


## keysDeleteFederationRule

> keysDeleteFederationRule(keyId, ruleId)

Delete Federation Rule

Remove a federation rule. Tokens it matched stop authenticating with the next request.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysDeleteFederationRuleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string
    ruleId: ruleId_example,
  } satisfies KeysDeleteFederationRuleRequest;

  try {
    const data = await api.keysDeleteFederationRule(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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


## keysDeleteKey

> keysDeleteKey(keyId)

Delete Key

Delete (revoke) an API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysDeleteKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysDeleteKeyRequest;

  try {
    const data = await api.keysDeleteKey(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

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


## keysGetEndUser

> EndUserPublic keysGetEndUser(keyId, externalId)

Get End User

Get an end user of a service key by the id the service names it by.  End users belong to the key\&#39;s user, so every service key of one user reaches the same end users. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;GET /keys/{key_id}/end-users?external_id&#x3D;&#x60;&#x60; reads any end user.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysGetEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
  } satisfies KeysGetEndUserRequest;

  try {
    const data = await api.keysGetEndUser(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## keysGetKey

> KeyInfo keysGetKey(keyId)

Get Key

Get details of a specific API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysGetKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysGetKeyRequest;

  try {
    const data = await api.keysGetKey(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**KeyInfo**](KeyInfo.md)

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


## keysListEndUsers

> Array&lt;EndUserPublic&gt; keysListEndUsers(keyId, skip, limit, budgetId, blocked, externalId, includeTotal)

List End Users

List the end users of a service key, oldest first.  End users belong to the key\&#39;s user, so every service key of one user lists the same end users. A deleted end user is not listed. &#x60;&#x60;external_id&#x60;&#x60; reads one end user by any id, one containing \&#39;/\&#39; included, as a list of zero or one.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysListEndUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only end users on this budget. (optional)
    budgetId: budgetId_example,
    // boolean | Only end users that are, or are not, blocked. (optional)
    blocked: true,
    // string | Only the end user the service names with this `user` value: zero or one. (optional)
    externalId: externalId_example,
    // boolean | Also count every matching end user, in the Otari-Total-Count response header. (optional)
    includeTotal: true,
  } satisfies KeysListEndUsersRequest;

  try {
    const data = await api.keysListEndUsers(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
| **budgetId** | `string` | Only end users on this budget. | [Optional] [Defaults to `undefined`] |
| **blocked** | `boolean` | Only end users that are, or are not, blocked. | [Optional] [Defaults to `undefined`] |
| **externalId** | `string` | Only the end user the service names with this &#x60;user&#x60; value: zero or one. | [Optional] [Defaults to `undefined`] |
| **includeTotal** | `boolean` | Also count every matching end user, in the Otari-Total-Count response header. | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;EndUserPublic&gt;**](EndUserPublic.md)

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


## keysListFederationRules

> Array&lt;FederationRulePublic&gt; keysListFederationRules(keyId)

List Federation Rules

List the identities that may authenticate as this key, oldest first.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysListFederationRulesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysListFederationRulesRequest;

  try {
    const data = await api.keysListFederationRules(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;FederationRulePublic&gt;**](FederationRulePublic.md)

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


## keysListKeys

> Array&lt;KeyInfo&gt; keysListKeys(skip, limit, workspaceId)

List Keys

List the API keys in the caller\&#39;s organization.  Requires master key authentication. An unset &#x60;&#x60;workspace_id&#x60;&#x60; lists every key in that organization; naming a workspace in another one lists nothing rather than refusing, so the filter reports no more than the unfiltered read does.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysListKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // number (optional)
    skip: 56,
    // number (optional)
    limit: 56,
    // string | Only keys in this workspace. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies KeysListKeysRequest;

  try {
    const data = await api.keysListKeys(body);
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
| **workspaceId** | `string` | Only keys in this workspace. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;KeyInfo&gt;**](KeyInfo.md)

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


## keysPutEndUser

> EndUserPublic keysPutEndUser(keyId, externalId, endUserPut)

Put End User

Put an end user of a service key on a budget from the key\&#39;s list, creating it if it does not exist yet.  Answers 201 when the end user was created, so one can be placed on a budget before its first request. An end user already on the budget keeps its current period, so repeating the call changes nothing. A budget that is not on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60; is refused with 403 and &#x60;&#x60;end_user_budget_not_allowed&#x60;&#x60;. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;PUT /keys/{key_id}/end-users?external_id&#x3D;&#x60;&#x60; takes any id.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysPutEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserPut
    endUserPut: ...,
  } satisfies KeysPutEndUserRequest;

  try {
    const data = await api.keysPutEndUser(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserPut** | [EndUserPut](EndUserPut.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **201** | The end user was created |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## keysPutEndUserByQuery

> EndUserPublic keysPutEndUserByQuery(keyId, externalId, endUserPut)

Put End User By Query

Put the end user named by &#x60;&#x60;external_id&#x60;&#x60; on a budget from the key\&#39;s list, creating it if it does not exist yet.  The same as &#x60;&#x60;PUT /keys/{key_id}/end-users/{external_id}&#x60;&#x60;, for any id, one containing \&#39;/\&#39; included.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysPutEndUserByQueryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field, any id, \'/\' included
    externalId: externalId_example,
    // EndUserPut
    endUserPut: ...,
  } satisfies KeysPutEndUserByQueryRequest;

  try {
    const data = await api.keysPutEndUserByQuery(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field, any id, \&#39;/\&#39; included | [Defaults to `undefined`] |
| **endUserPut** | [EndUserPut](EndUserPut.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **201** | The end user was created |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## keysRotateKey

> CreateKeyResponse keysRotateKey(keyId)

Rotate Key

Rotate an API key\&#39;s secret in place, within the caller\&#39;s organization.  Requires master key authentication.  Generates a new secret for the same key row (id, user, name, expiry, and metadata are preserved) and returns the new raw key once, using the same response shape as key creation. The previous secret stops authenticating immediately; there is no grace window.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysRotateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
  } satisfies KeysRotateKeyRequest;

  try {
    const data = await api.keysRotateKey(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateKeyResponse**](CreateKeyResponse.md)

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


## keysUpdateEndUser

> EndUserPublic keysUpdateEndUser(keyId, externalId, endUserUpdate)

Update End User

Block, unblock or move an end user of a service key.  A move restarts the end user\&#39;s period on the new budget but keeps what it has spent and used so far, as the users API does. The budget must be on the key\&#39;s &#x60;&#x60;end_user_budget_ids&#x60;&#x60;. An id with a \&#39;.\&#39; or \&#39;..\&#39; segment is refused with 400; &#x60;&#x60;PATCH /keys/{key_id}/end-users?external_id&#x3D;&#x60;&#x60; takes any id.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysUpdateEndUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field
    externalId: externalId_example,
    // EndUserUpdate
    endUserUpdate: ...,
  } satisfies KeysUpdateEndUserRequest;

  try {
    const data = await api.keysUpdateEndUser(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field | [Defaults to `undefined`] |
| **endUserUpdate** | [EndUserUpdate](EndUserUpdate.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## keysUpdateEndUserByQuery

> EndUserPublic keysUpdateEndUserByQuery(keyId, externalId, endUserUpdate)

Update End User By Query

Block, unblock or move the end user of a service key named by &#x60;&#x60;external_id&#x60;&#x60;.  The same as &#x60;&#x60;PATCH /keys/{key_id}/end-users/{external_id}&#x60;&#x60;, for any id, one containing \&#39;/\&#39; included.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysUpdateEndUserByQueryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // string | The id the service names the end user by in a request\'s user field, any id, \'/\' included
    externalId: externalId_example,
    // EndUserUpdate
    endUserUpdate: ...,
  } satisfies KeysUpdateEndUserByQueryRequest;

  try {
    const data = await api.keysUpdateEndUserByQuery(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **externalId** | `string` | The id the service names the end user by in a request\&#39;s user field, any id, \&#39;/\&#39; included | [Defaults to `undefined`] |
| **endUserUpdate** | [EndUserUpdate](EndUserUpdate.md) |  | |

### Return type

[**EndUserPublic**](EndUserPublic.md)

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


## keysUpdateKey

> KeyInfo keysUpdateKey(keyId, updateKeyRequest)

Update Key

Update an API key in the caller\&#39;s organization.  Requires master key authentication.

### Example

```ts
import {
  Configuration,
  KeysApi,
} from '';
import type { KeysUpdateKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new KeysApi(config);

  const body = {
    // string
    keyId: keyId_example,
    // UpdateKeyRequest
    updateKeyRequest: ...,
  } satisfies KeysUpdateKeyRequest;

  try {
    const data = await api.keysUpdateKey(body);
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
| **keyId** | `string` |  | [Defaults to `undefined`] |
| **updateKeyRequest** | [UpdateKeyRequest](UpdateKeyRequest.md) |  | |

### Return type

[**KeyInfo**](KeyInfo.md)

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

