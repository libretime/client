# ListenerCountsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listenerCountsCreate**](#listenercountscreate) | **POST** /api/v2/listener-counts | |
|[**listenerCountsDestroy**](#listenercountsdestroy) | **DELETE** /api/v2/listener-counts/{id} | |
|[**listenerCountsList**](#listenercountslist) | **GET** /api/v2/listener-counts | |
|[**listenerCountsPartialUpdate**](#listenercountspartialupdate) | **PATCH** /api/v2/listener-counts/{id} | |
|[**listenerCountsRetrieve**](#listenercountsretrieve) | **GET** /api/v2/listener-counts/{id} | |
|[**listenerCountsUpdate**](#listenercountsupdate) | **PUT** /api/v2/listener-counts/{id} | |

# **listenerCountsCreate**
> ListenerCount listenerCountsCreate(listenerCount)


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration,
    ListenerCount
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

let listenerCount: ListenerCount; //

const { status, data } = await apiInstance.listenerCountsCreate(
    listenerCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listenerCount** | **ListenerCount**|  | |


### Return type

**ListenerCount**

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

# **listenerCountsDestroy**
> listenerCountsDestroy()


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

let id: number; //A unique integer value identifying this listener count. (default to undefined)

const { status, data } = await apiInstance.listenerCountsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this listener count. | defaults to undefined|


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

# **listenerCountsList**
> Array<ListenerCount> listenerCountsList()


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

const { status, data } = await apiInstance.listenerCountsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ListenerCount>**

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

# **listenerCountsPartialUpdate**
> ListenerCount listenerCountsPartialUpdate()


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration,
    PatchedListenerCount
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

let id: number; //A unique integer value identifying this listener count. (default to undefined)
let patchedListenerCount: PatchedListenerCount; // (optional)

const { status, data } = await apiInstance.listenerCountsPartialUpdate(
    id,
    patchedListenerCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedListenerCount** | **PatchedListenerCount**|  | |
| **id** | [**number**] | A unique integer value identifying this listener count. | defaults to undefined|


### Return type

**ListenerCount**

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

# **listenerCountsRetrieve**
> ListenerCount listenerCountsRetrieve()


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

let id: number; //A unique integer value identifying this listener count. (default to undefined)

const { status, data } = await apiInstance.listenerCountsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this listener count. | defaults to undefined|


### Return type

**ListenerCount**

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

# **listenerCountsUpdate**
> ListenerCount listenerCountsUpdate(listenerCount)


### Example

```typescript
import {
    ListenerCountsApi,
    Configuration,
    ListenerCount
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ListenerCountsApi(configuration);

let id: number; //A unique integer value identifying this listener count. (default to undefined)
let listenerCount: ListenerCount; //

const { status, data } = await apiInstance.listenerCountsUpdate(
    id,
    listenerCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listenerCount** | **ListenerCount**|  | |
| **id** | [**number**] | A unique integer value identifying this listener count. | defaults to undefined|


### Return type

**ListenerCount**

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

