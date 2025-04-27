# CeleryTasksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**celeryTasksCreate**](#celerytaskscreate) | **POST** /api/v2/celery-tasks | |
|[**celeryTasksDestroy**](#celerytasksdestroy) | **DELETE** /api/v2/celery-tasks/{id} | |
|[**celeryTasksList**](#celerytaskslist) | **GET** /api/v2/celery-tasks | |
|[**celeryTasksPartialUpdate**](#celerytaskspartialupdate) | **PATCH** /api/v2/celery-tasks/{id} | |
|[**celeryTasksRetrieve**](#celerytasksretrieve) | **GET** /api/v2/celery-tasks/{id} | |
|[**celeryTasksUpdate**](#celerytasksupdate) | **PUT** /api/v2/celery-tasks/{id} | |

# **celeryTasksCreate**
> CeleryTask celeryTasksCreate(celeryTask)


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration,
    CeleryTask
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

let celeryTask: CeleryTask; //

const { status, data } = await apiInstance.celeryTasksCreate(
    celeryTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **celeryTask** | **CeleryTask**|  | |


### Return type

**CeleryTask**

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

# **celeryTasksDestroy**
> celeryTasksDestroy()


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

let id: number; //A unique integer value identifying this celery task. (default to undefined)

const { status, data } = await apiInstance.celeryTasksDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this celery task. | defaults to undefined|


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

# **celeryTasksList**
> Array<CeleryTask> celeryTasksList()


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

const { status, data } = await apiInstance.celeryTasksList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CeleryTask>**

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

# **celeryTasksPartialUpdate**
> CeleryTask celeryTasksPartialUpdate()


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration,
    PatchedCeleryTask
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

let id: number; //A unique integer value identifying this celery task. (default to undefined)
let patchedCeleryTask: PatchedCeleryTask; // (optional)

const { status, data } = await apiInstance.celeryTasksPartialUpdate(
    id,
    patchedCeleryTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCeleryTask** | **PatchedCeleryTask**|  | |
| **id** | [**number**] | A unique integer value identifying this celery task. | defaults to undefined|


### Return type

**CeleryTask**

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

# **celeryTasksRetrieve**
> CeleryTask celeryTasksRetrieve()


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

let id: number; //A unique integer value identifying this celery task. (default to undefined)

const { status, data } = await apiInstance.celeryTasksRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this celery task. | defaults to undefined|


### Return type

**CeleryTask**

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

# **celeryTasksUpdate**
> CeleryTask celeryTasksUpdate(celeryTask)


### Example

```typescript
import {
    CeleryTasksApi,
    Configuration,
    CeleryTask
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new CeleryTasksApi(configuration);

let id: number; //A unique integer value identifying this celery task. (default to undefined)
let celeryTask: CeleryTask; //

const { status, data } = await apiInstance.celeryTasksUpdate(
    id,
    celeryTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **celeryTask** | **CeleryTask**|  | |
| **id** | [**number**] | A unique integer value identifying this celery task. | defaults to undefined|


### Return type

**CeleryTask**

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

