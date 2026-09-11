# FilesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**filesCreateFile**](FilesApi.md#filescreatefile) | **POST** /api/v1/files | Create File |
| [**filesDeleteFile**](FilesApi.md#filesdeletefile) | **DELETE** /api/v1/files/{file_id} | Delete File |
| [**filesGetFile**](FilesApi.md#filesgetfile) | **GET** /api/v1/files/{file_id} | Get File |
| [**filesGetFileContent**](FilesApi.md#filesgetfilecontent) | **GET** /api/v1/files/{file_id}/content | Get File Content |
| [**filesListFiles**](FilesApi.md#fileslistfiles) | **GET** /api/v1/files | List Files |



## filesCreateFile

> { [key: string]: any; } filesCreateFile(file, purpose, user)

Create File

OpenAI-compatible file upload endpoint.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { FilesCreateFileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FilesApi(config);

  const body = {
    // string
    file: file_example,
    // string (optional)
    purpose: purpose_example,
    // string (optional)
    user: user_example,
  } satisfies FilesCreateFileRequest;

  try {
    const data = await api.filesCreateFile(body);
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
| **file** | `string` |  | [Defaults to `undefined`] |
| **purpose** | `string` |  | [Optional] [Defaults to `&#39;user_data&#39;`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## filesDeleteFile

> { [key: string]: any; } filesDeleteFile(fileId, user)

Delete File

Soft-delete a file\&#39;s metadata and remove its bytes from the backend.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { FilesDeleteFileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FilesApi(config);

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies FilesDeleteFileRequest;

  try {
    const data = await api.filesDeleteFile(body);
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
| **fileId** | `string` |  | [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


## filesGetFile

> { [key: string]: any; } filesGetFile(fileId, user)

Get File

Retrieve metadata for a single file.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { FilesGetFileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FilesApi(config);

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies FilesGetFileRequest;

  try {
    const data = await api.filesGetFile(body);
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
| **fileId** | `string` |  | [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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


## filesGetFileContent

> Blob filesGetFileContent(fileId, user)

Get File Content

Download the raw bytes of a file, streamed rather than buffered whole.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { FilesGetFileContentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FilesApi(config);

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies FilesGetFileContentRequest;

  try {
    const data = await api.filesGetFileContent(body);
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
| **fileId** | `string` |  | [Defaults to `undefined`] |
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[XApiKeyAuth](../README.md#XApiKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File content. Content-Type reflects the stored media type; application/octet-stream is the fallback. |  * Content-Disposition - Attachment filename, with a UTF-8 filename* parameter for non-ASCII names. <br>  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## filesListFiles

> { [key: string]: any; } filesListFiles(user, purpose, workspaceId)

List Files

List the authenticated user\&#39;s uploaded files in the request\&#39;s workspace.  &#x60;&#x60;workspace_id&#x60;&#x60; narrows a master-key listing to one workspace; a keyed request is already confined to its key\&#39;s own and cannot widen or move it.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { FilesListFilesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: XApiKeyAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new FilesApi(config);

  const body = {
    // string (optional)
    user: user_example,
    // string (optional)
    purpose: purpose_example,
    // string (optional)
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies FilesListFilesRequest;

  try {
    const data = await api.filesListFiles(body);
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
| **user** | `string` |  | [Optional] [Defaults to `undefined`] |
| **purpose** | `string` |  | [Optional] [Defaults to `undefined`] |
| **workspaceId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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

