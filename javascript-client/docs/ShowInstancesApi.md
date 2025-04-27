# ShowInstancesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showInstancesCreate**](#showinstancescreate) | **POST** /api/v2/show-instances | |
|[**showInstancesDestroy**](#showinstancesdestroy) | **DELETE** /api/v2/show-instances/{id} | |
|[**showInstancesList**](#showinstanceslist) | **GET** /api/v2/show-instances | |
|[**showInstancesPartialUpdate**](#showinstancespartialupdate) | **PATCH** /api/v2/show-instances/{id} | |
|[**showInstancesRetrieve**](#showinstancesretrieve) | **GET** /api/v2/show-instances/{id} | |
|[**showInstancesUpdate**](#showinstancesupdate) | **PUT** /api/v2/show-instances/{id} | |

# **showInstancesCreate**
> ShowInstance showInstancesCreate(showInstance)


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration,
    ShowInstance
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

let showInstance: ShowInstance; //

const { status, data } = await apiInstance.showInstancesCreate(
    showInstance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showInstance** | **ShowInstance**|  | |


### Return type

**ShowInstance**

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

# **showInstancesDestroy**
> showInstancesDestroy()


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

let id: number; //A unique integer value identifying this show instance. (default to undefined)

const { status, data } = await apiInstance.showInstancesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show instance. | defaults to undefined|


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

# **showInstancesList**
> Array<ShowInstance> showInstancesList()


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

const { status, data } = await apiInstance.showInstancesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ShowInstance>**

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

# **showInstancesPartialUpdate**
> ShowInstance showInstancesPartialUpdate()


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration,
    PatchedShowInstance
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

let id: number; //A unique integer value identifying this show instance. (default to undefined)
let patchedShowInstance: PatchedShowInstance; // (optional)

const { status, data } = await apiInstance.showInstancesPartialUpdate(
    id,
    patchedShowInstance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedShowInstance** | **PatchedShowInstance**|  | |
| **id** | [**number**] | A unique integer value identifying this show instance. | defaults to undefined|


### Return type

**ShowInstance**

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

# **showInstancesRetrieve**
> ShowInstance showInstancesRetrieve()


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

let id: number; //A unique integer value identifying this show instance. (default to undefined)

const { status, data } = await apiInstance.showInstancesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show instance. | defaults to undefined|


### Return type

**ShowInstance**

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

# **showInstancesUpdate**
> ShowInstance showInstancesUpdate(showInstance)


### Example

```typescript
import {
    ShowInstancesApi,
    Configuration,
    ShowInstance
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowInstancesApi(configuration);

let id: number; //A unique integer value identifying this show instance. (default to undefined)
let showInstance: ShowInstance; //

const { status, data } = await apiInstance.showInstancesUpdate(
    id,
    showInstance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showInstance** | **ShowInstance**|  | |
| **id** | [**number**] | A unique integer value identifying this show instance. | defaults to undefined|


### Return type

**ShowInstance**

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

