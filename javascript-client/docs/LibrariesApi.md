# LibrariesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**librariesCreate**](#librariescreate) | **POST** /api/v2/libraries | |
|[**librariesDestroy**](#librariesdestroy) | **DELETE** /api/v2/libraries/{id} | |
|[**librariesList**](#librarieslist) | **GET** /api/v2/libraries | |
|[**librariesPartialUpdate**](#librariespartialupdate) | **PATCH** /api/v2/libraries/{id} | |
|[**librariesRetrieve**](#librariesretrieve) | **GET** /api/v2/libraries/{id} | |
|[**librariesUpdate**](#librariesupdate) | **PUT** /api/v2/libraries/{id} | |

# **librariesCreate**
> Library librariesCreate(library)


### Example

```typescript
import {
    LibrariesApi,
    Configuration,
    Library
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

let library: Library; //

const { status, data } = await apiInstance.librariesCreate(
    library
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **library** | **Library**|  | |


### Return type

**Library**

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

# **librariesDestroy**
> librariesDestroy()


### Example

```typescript
import {
    LibrariesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

let id: number; //A unique integer value identifying this library. (default to undefined)

const { status, data } = await apiInstance.librariesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this library. | defaults to undefined|


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

# **librariesList**
> Array<Library> librariesList()


### Example

```typescript
import {
    LibrariesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

const { status, data } = await apiInstance.librariesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Library>**

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

# **librariesPartialUpdate**
> Library librariesPartialUpdate()


### Example

```typescript
import {
    LibrariesApi,
    Configuration,
    PatchedLibrary
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

let id: number; //A unique integer value identifying this library. (default to undefined)
let patchedLibrary: PatchedLibrary; // (optional)

const { status, data } = await apiInstance.librariesPartialUpdate(
    id,
    patchedLibrary
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLibrary** | **PatchedLibrary**|  | |
| **id** | [**number**] | A unique integer value identifying this library. | defaults to undefined|


### Return type

**Library**

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

# **librariesRetrieve**
> Library librariesRetrieve()


### Example

```typescript
import {
    LibrariesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

let id: number; //A unique integer value identifying this library. (default to undefined)

const { status, data } = await apiInstance.librariesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this library. | defaults to undefined|


### Return type

**Library**

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

# **librariesUpdate**
> Library librariesUpdate(library)


### Example

```typescript
import {
    LibrariesApi,
    Configuration,
    Library
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LibrariesApi(configuration);

let id: number; //A unique integer value identifying this library. (default to undefined)
let library: Library; //

const { status, data } = await apiInstance.librariesUpdate(
    id,
    library
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **library** | **Library**|  | |
| **id** | [**number**] | A unique integer value identifying this library. | defaults to undefined|


### Return type

**Library**

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

