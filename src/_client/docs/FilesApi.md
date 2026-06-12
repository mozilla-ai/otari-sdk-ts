# FilesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFileV1FilesPost**](FilesApi.md#createfilev1filespost) | **POST** /v1/files | Create File |
| [**deleteFileV1FilesFileIdDelete**](FilesApi.md#deletefilev1filesfileiddelete) | **DELETE** /v1/files/{file_id} | Delete File |
| [**getFileContentV1FilesFileIdContentGet**](FilesApi.md#getfilecontentv1filesfileidcontentget) | **GET** /v1/files/{file_id}/content | Get File Content |
| [**getFileV1FilesFileIdGet**](FilesApi.md#getfilev1filesfileidget) | **GET** /v1/files/{file_id} | Get File |
| [**listFilesV1FilesGet**](FilesApi.md#listfilesv1filesget) | **GET** /v1/files | List Files |



## createFileV1FilesPost

> { [key: string]: any; } createFileV1FilesPost(file, purpose, user)

Create File

OpenAI-compatible file upload endpoint.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { CreateFileV1FilesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FilesApi();

  const body = {
    // string
    file: file_example,
    // string (optional)
    purpose: purpose_example,
    // string (optional)
    user: user_example,
  } satisfies CreateFileV1FilesPostRequest;

  try {
    const data = await api.createFileV1FilesPost(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFileV1FilesFileIdDelete

> { [key: string]: any; } deleteFileV1FilesFileIdDelete(fileId, user)

Delete File

Soft-delete a file\&#39;s metadata and remove its bytes from the backend.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { DeleteFileV1FilesFileIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FilesApi();

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies DeleteFileV1FilesFileIdDeleteRequest;

  try {
    const data = await api.deleteFileV1FilesFileIdDelete(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFileContentV1FilesFileIdContentGet

> any getFileContentV1FilesFileIdContentGet(fileId, user)

Get File Content

Download the raw bytes of a file.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { GetFileContentV1FilesFileIdContentGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FilesApi();

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies GetFileContentV1FilesFileIdContentGetRequest;

  try {
    const data = await api.getFileContentV1FilesFileIdContentGet(body);
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

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFileV1FilesFileIdGet

> { [key: string]: any; } getFileV1FilesFileIdGet(fileId, user)

Get File

Retrieve metadata for a single file.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { GetFileV1FilesFileIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FilesApi();

  const body = {
    // string
    fileId: fileId_example,
    // string (optional)
    user: user_example,
  } satisfies GetFileV1FilesFileIdGetRequest;

  try {
    const data = await api.getFileV1FilesFileIdGet(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFilesV1FilesGet

> { [key: string]: any; } listFilesV1FilesGet(user, purpose)

List Files

List the authenticated user\&#39;s uploaded files.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '';
import type { ListFilesV1FilesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FilesApi();

  const body = {
    // string (optional)
    user: user_example,
    // string (optional)
    purpose: purpose_example,
  } satisfies ListFilesV1FilesGetRequest;

  try {
    const data = await api.listFilesV1FilesGet(body);
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
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

