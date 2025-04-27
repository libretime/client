# FilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**filesCreate**](#filescreate) | **POST** /api/v2/files | |
|[**filesDestroy**](#filesdestroy) | **DELETE** /api/v2/files/{id} | |
|[**filesDownloadRetrieve**](#filesdownloadretrieve) | **GET** /api/v2/files/{id}/download | |
|[**filesList**](#fileslist) | **GET** /api/v2/files | |
|[**filesPartialUpdate**](#filespartialupdate) | **PATCH** /api/v2/files/{id} | |
|[**filesRetrieve**](#filesretrieve) | **GET** /api/v2/files/{id} | |
|[**filesUpdate**](#filesupdate) | **PUT** /api/v2/files/{id} | |

# **filesCreate**
> any filesCreate(modelFile)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    ModelFile
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let modelFile: ModelFile; //

const { status, data } = await apiInstance.filesCreate(
    modelFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelFile** | **ModelFile**|  | |


### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesDestroy**
> filesDestroy()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: number; //A unique integer value identifying this file. (default to undefined)

const { status, data } = await apiInstance.filesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesDownloadRetrieve**
> any filesDownloadRetrieve()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: number; //A unique integer value identifying this file. (default to undefined)

const { status, data } = await apiInstance.filesDownloadRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined|


### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesList**
> Array<any> filesList()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let genre: string; // (optional) (default to undefined)
let md5: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.filesList(
    genre,
    md5
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **genre** | [**string**] |  | (optional) defaults to undefined|
| **md5** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<any>**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesPartialUpdate**
> any filesPartialUpdate()


### Example

```typescript
import {
    FilesApi,
    Configuration,
    PatchedFile
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: number; //A unique integer value identifying this file. (default to undefined)
let patchedFile: PatchedFile; // (optional)

const { status, data } = await apiInstance.filesPartialUpdate(
    id,
    patchedFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedFile** | **PatchedFile**|  | |
| **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined|


### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesRetrieve**
> any filesRetrieve()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: number; //A unique integer value identifying this file. (default to undefined)

const { status, data } = await apiInstance.filesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined|


### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesUpdate**
> any filesUpdate(modelFile)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    ModelFile
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: number; //A unique integer value identifying this file. (default to undefined)
let modelFile: ModelFile; //

const { status, data } = await apiInstance.filesUpdate(
    id,
    modelFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelFile** | **ModelFile**|  | |
| **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined|


### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

