# PlaygroundApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**playgroundDeletePlaygroundComparison**](PlaygroundApi.md#playgrounddeleteplaygroundcomparison) | **DELETE** /api/v1/playground/comparisons/{comparison_id} | Delete Playground Comparison |
| [**playgroundDeletePlaygroundConversation**](PlaygroundApi.md#playgrounddeleteplaygroundconversation) | **DELETE** /api/v1/playground/conversations/{conversation_id} | Delete Playground Conversation |
| [**playgroundListPlaygroundComparisons**](PlaygroundApi.md#playgroundlistplaygroundcomparisons) | **GET** /api/v1/playground/comparisons | List Playground Comparisons |
| [**playgroundListPlaygroundConversations**](PlaygroundApi.md#playgroundlistplaygroundconversations) | **GET** /api/v1/playground/conversations | List Playground Conversations |
| [**playgroundPlaygroundChatCompletions**](PlaygroundApi.md#playgroundplaygroundchatcompletions) | **POST** /api/v1/playground/chat/completions | Playground Chat Completions |
| [**playgroundReadPlaygroundConsent**](PlaygroundApi.md#playgroundreadplaygroundconsent) | **GET** /api/v1/playground/consent | Read Playground Consent |
| [**playgroundReadPlaygroundConversationMessages**](PlaygroundApi.md#playgroundreadplaygroundconversationmessages) | **GET** /api/v1/playground/conversations/{conversation_id}/messages | Read Playground Conversation Messages |
| [**playgroundReadPlaygroundFavoriteModels**](PlaygroundApi.md#playgroundreadplaygroundfavoritemodels) | **GET** /api/v1/playground/favorite-models | Read Playground Favorite Models |
| [**playgroundReadPlaygroundTools**](PlaygroundApi.md#playgroundreadplaygroundtools) | **GET** /api/v1/playground/tools | Read Playground Tools |
| [**playgroundReplacePlaygroundFavoriteModels**](PlaygroundApi.md#playgroundreplaceplaygroundfavoritemodels) | **PUT** /api/v1/playground/favorite-models | Replace Playground Favorite Models |
| [**playgroundSavePlaygroundComparison**](PlaygroundApi.md#playgroundsaveplaygroundcomparison) | **POST** /api/v1/playground/comparisons | Save Playground Comparison |
| [**playgroundSavePlaygroundConversation**](PlaygroundApi.md#playgroundsaveplaygroundconversation) | **POST** /api/v1/playground/conversations | Save Playground Conversation |
| [**playgroundUpdatePlaygroundConsent**](PlaygroundApi.md#playgroundupdateplaygroundconsent) | **PUT** /api/v1/playground/consent | Update Playground Consent |



## playgroundDeletePlaygroundComparison

> playgroundDeletePlaygroundComparison(comparisonId)

Delete Playground Comparison

Delete one of the caller\&#39;s saved comparisons.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundDeletePlaygroundComparisonRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string
    comparisonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundDeletePlaygroundComparisonRequest;

  try {
    const data = await api.playgroundDeletePlaygroundComparison(body);
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
| **comparisonId** | `string` |  | [Defaults to `undefined`] |

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


## playgroundDeletePlaygroundConversation

> playgroundDeletePlaygroundConversation(conversationId)

Delete Playground Conversation

Delete one of the caller\&#39;s saved transcripts, and its turns with it.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundDeletePlaygroundConversationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string
    conversationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundDeletePlaygroundConversationRequest;

  try {
    const data = await api.playgroundDeletePlaygroundConversation(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |

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


## playgroundListPlaygroundComparisons

> PlaygroundComparisonsPublic playgroundListPlaygroundComparisons(workspaceId)

List Playground Comparisons

The caller\&#39;s own rated comparisons in one workspace, newest first.  Without the two answer bodies: the list shows a dozen rows and renders neither, and there is no detail endpoint because the page has no screen that reads one back. A comparison is a judgment that was recorded, not a transcript to resume.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundListPlaygroundComparisonsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundListPlaygroundComparisonsRequest;

  try {
    const data = await api.playgroundListPlaygroundComparisons(body);
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
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

[**PlaygroundComparisonsPublic**](PlaygroundComparisonsPublic.md)

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


## playgroundListPlaygroundConversations

> PlaygroundConversationsPublic playgroundListPlaygroundConversations(workspaceId)

List Playground Conversations

The caller\&#39;s own saved transcripts in one workspace, newest first.  Not gated on consent: withdrawing it stops new saves, so a transcript saved while it was granted has to stay listable and deletable by its owner.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundListPlaygroundConversationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundListPlaygroundConversationsRequest;

  try {
    const data = await api.playgroundListPlaygroundConversations(body);
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
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

[**PlaygroundConversationsPublic**](PlaygroundConversationsPublic.md)

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


## playgroundPlaygroundChatCompletions

> any playgroundPlaygroundChatCompletions(chatCompletionRequest, workspaceId)

Playground Chat Completions

Run one chat completion for the signed-in caller.  Streaming and non-streaming both, identically to &#x60;&#x60;POST /api/v1/chat/completions&#x60;&#x60;: this resolves the principal and then calls the very same handler. The request is billed to the caller\&#39;s own attribution user in the workspace they named (or their organization\&#39;s default), against that user\&#39;s budget, and writes the ordinary usage row with no &#x60;&#x60;api_key_id&#x60;&#x60;, because there was no key.  The body is &#x60;&#x60;ChatCompletionRequest&#x60;&#x60; unchanged, so the page sends the same request an SDK would and a model, tool or parameter the gateway gains is available here the day it lands. The workspace rides in the query string rather than in the body for that reason: a field added to the body would also have to be added to the pipeline\&#39;s strip list, and a gateway-internal field that is not stripped is forwarded to the provider as a call kwarg.  &#x60;&#x60;user&#x60;&#x60; in the body is the one field the pipeline will not read here: spend binds to the session\&#39;s own attribution user, derived and never accepted.  On a hosted control plane there is no local pipeline to call, so the same principal is forwarded to the data-plane gateway instead (:func:&#x60;_dispatch_to_data_plane&#x60;). The request and the response are the same either way.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundPlaygroundChatCompletionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // ChatCompletionRequest
    chatCompletionRequest: ...,
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundPlaygroundChatCompletionsRequest;

  try {
    const data = await api.playgroundPlaygroundChatCompletions(body);
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
| **chatCompletionRequest** | [ChatCompletionRequest](ChatCompletionRequest.md) |  | |
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

**any**

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


## playgroundReadPlaygroundConsent

> PlaygroundConsentPublic playgroundReadPlaygroundConsent()

Read Playground Consent

What the caller has agreed the Playground may store.  Both flags false for a caller who has never answered, and nothing is written: the page asks at the moment it needs the grant, so recording an answer on a page load would record one nobody gave.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundReadPlaygroundConsentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  try {
    const data = await api.playgroundReadPlaygroundConsent();
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

[**PlaygroundConsentPublic**](PlaygroundConsentPublic.md)

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


## playgroundReadPlaygroundConversationMessages

> PlaygroundMessagesPublic playgroundReadPlaygroundConversationMessages(conversationId)

Read Playground Conversation Messages

One saved transcript\&#39;s turns, in order.  404 for a transcript belonging to somebody else, the same answer an unknown id gets: the owner predicate is in the query, so the two are indistinguishable from here. An empty transcript is not a state a save can produce (the request requires at least one turn), so no rows means no row for this caller.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundReadPlaygroundConversationMessagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string
    conversationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundReadPlaygroundConversationMessagesRequest;

  try {
    const data = await api.playgroundReadPlaygroundConversationMessages(body);
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
| **conversationId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**PlaygroundMessagesPublic**](PlaygroundMessagesPublic.md)

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


## playgroundReadPlaygroundFavoriteModels

> PlaygroundFavoriteModelsPublic playgroundReadPlaygroundFavoriteModels(workspaceId)

Read Playground Favorite Models

The caller\&#39;s pinned model keys in one workspace, in pinned order.  Stored rather than kept in the browser, so a pin follows the person to their other devices; that is what the hosted original did and what makes the Favorites group in every picker worth having.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundReadPlaygroundFavoriteModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundReadPlaygroundFavoriteModelsRequest;

  try {
    const data = await api.playgroundReadPlaygroundFavoriteModels(body);
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
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

[**PlaygroundFavoriteModelsPublic**](PlaygroundFavoriteModelsPublic.md)

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


## playgroundReadPlaygroundTools

> PlaygroundToolsResponse playgroundReadPlaygroundTools(workspaceId)

Read Playground Tools

The gateway-run tools the caller\&#39;s workspace may attach to a message.  One read rather than the three the dashboard would otherwise make (the deployment\&#39;s tool settings, the workspace\&#39;s web-search row, its code-execution row), because the answer is a composition of them in a fixed direction: the deployment decides whether a tool exists and the workspace may only narrow that. Composing it here is what keeps the menu from offering something the request path would refuse.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundReadPlaygroundToolsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundReadPlaygroundToolsRequest;

  try {
    const data = await api.playgroundReadPlaygroundTools(body);
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
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

[**PlaygroundToolsResponse**](PlaygroundToolsResponse.md)

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


## playgroundReplacePlaygroundFavoriteModels

> PlaygroundFavoriteModelsPublic playgroundReplacePlaygroundFavoriteModels(playgroundFavoriteModelsUpdate, workspaceId)

Replace Playground Favorite Models

Replace the caller\&#39;s pin list for one workspace.  A replace rather than a toggle, because the order is part of the value and the client already holds the list it is rendering. Two tabs racing therefore resolve to one of the two lists rather than to an interleaving neither of them showed. Model keys are not validated against the catalog: a pinned model that leaves the catalog simply stops appearing in the picker, and refusing the write would make a stale pin unremovable.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundReplacePlaygroundFavoriteModelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // PlaygroundFavoriteModelsUpdate
    playgroundFavoriteModelsUpdate: ...,
    // string | Workspace to act in. Defaults to the caller\'s organization\'s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PlaygroundReplacePlaygroundFavoriteModelsRequest;

  try {
    const data = await api.playgroundReplacePlaygroundFavoriteModels(body);
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
| **playgroundFavoriteModelsUpdate** | [PlaygroundFavoriteModelsUpdate](PlaygroundFavoriteModelsUpdate.md) |  | |
| **workspaceId** | `string` | Workspace to act in. Defaults to the caller\&#39;s organization\&#39;s default workspace. A workspace the caller is not a member of answers 404, as a nonexistent one does. | [Optional] [Defaults to `undefined`] |

### Return type

[**PlaygroundFavoriteModelsPublic**](PlaygroundFavoriteModelsPublic.md)

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


## playgroundSavePlaygroundComparison

> PlaygroundComparisonSummary playgroundSavePlaygroundComparison(playgroundComparisonCreate)

Save Playground Comparison

Record which of two models answered a question better.  403 when comparison retention has not been granted; this is the flag with the wider disclosure, because the row keeps both models\&#39; full answers.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundSavePlaygroundComparisonRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // PlaygroundComparisonCreate
    playgroundComparisonCreate: ...,
  } satisfies PlaygroundSavePlaygroundComparisonRequest;

  try {
    const data = await api.playgroundSavePlaygroundComparison(body);
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
| **playgroundComparisonCreate** | [PlaygroundComparisonCreate](PlaygroundComparisonCreate.md) |  | |

### Return type

[**PlaygroundComparisonSummary**](PlaygroundComparisonSummary.md)

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


## playgroundSavePlaygroundConversation

> PlaygroundConversationSummary playgroundSavePlaygroundConversation(playgroundConversationCreate)

Save Playground Conversation

Save one transcript whole, for the caller, in a workspace they belong to.  403 when content retention has not been granted. The page asks first, so reaching that is a client that skipped the prompt: a consent gate enforced only in the browser is not a consent gate.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundSavePlaygroundConversationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // PlaygroundConversationCreate
    playgroundConversationCreate: ...,
  } satisfies PlaygroundSavePlaygroundConversationRequest;

  try {
    const data = await api.playgroundSavePlaygroundConversation(body);
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
| **playgroundConversationCreate** | [PlaygroundConversationCreate](PlaygroundConversationCreate.md) |  | |

### Return type

[**PlaygroundConversationSummary**](PlaygroundConversationSummary.md)

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


## playgroundUpdatePlaygroundConsent

> PlaygroundConsentPublic playgroundUpdatePlaygroundConsent(playgroundConsentUpdate)

Update Playground Consent

Grant or withdraw content retention, one flag at a time.  An omitted flag is left as it was. Withdrawing blocks new saves and deletes nothing: what was stored with consent stays until its owner deletes it, which is what keeps a withdrawal from being a destructive action nobody asked for.

### Example

```ts
import {
  Configuration,
  PlaygroundApi,
} from '';
import type { PlaygroundUpdatePlaygroundConsentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PlaygroundApi(config);

  const body = {
    // PlaygroundConsentUpdate
    playgroundConsentUpdate: ...,
  } satisfies PlaygroundUpdatePlaygroundConsentRequest;

  try {
    const data = await api.playgroundUpdatePlaygroundConsent(body);
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
| **playgroundConsentUpdate** | [PlaygroundConsentUpdate](PlaygroundConsentUpdate.md) |  | |

### Return type

[**PlaygroundConsentPublic**](PlaygroundConsentPublic.md)

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

