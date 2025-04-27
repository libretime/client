# ShowRebroadcastsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showRebroadcastsCreate**](#showrebroadcastscreate) | **POST** /api/v2/show-rebroadcasts | |
|[**showRebroadcastsDestroy**](#showrebroadcastsdestroy) | **DELETE** /api/v2/show-rebroadcasts/{id} | |
|[**showRebroadcastsList**](#showrebroadcastslist) | **GET** /api/v2/show-rebroadcasts | |
|[**showRebroadcastsPartialUpdate**](#showrebroadcastspartialupdate) | **PATCH** /api/v2/show-rebroadcasts/{id} | |
|[**showRebroadcastsRetrieve**](#showrebroadcastsretrieve) | **GET** /api/v2/show-rebroadcasts/{id} | |
|[**showRebroadcastsUpdate**](#showrebroadcastsupdate) | **PUT** /api/v2/show-rebroadcasts/{id} | |

# **showRebroadcastsCreate**
> ShowRebroadcast showRebroadcastsCreate(showRebroadcast)


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration,
    ShowRebroadcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

let showRebroadcast: ShowRebroadcast; //

const { status, data } = await apiInstance.showRebroadcastsCreate(
    showRebroadcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showRebroadcast** | **ShowRebroadcast**|  | |


### Return type

**ShowRebroadcast**

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

# **showRebroadcastsDestroy**
> showRebroadcastsDestroy()


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

let id: number; //A unique integer value identifying this show rebroadcast. (default to undefined)

const { status, data } = await apiInstance.showRebroadcastsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show rebroadcast. | defaults to undefined|


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

# **showRebroadcastsList**
> Array<ShowRebroadcast> showRebroadcastsList()


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

const { status, data } = await apiInstance.showRebroadcastsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ShowRebroadcast>**

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

# **showRebroadcastsPartialUpdate**
> ShowRebroadcast showRebroadcastsPartialUpdate()


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration,
    PatchedShowRebroadcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

let id: number; //A unique integer value identifying this show rebroadcast. (default to undefined)
let patchedShowRebroadcast: PatchedShowRebroadcast; // (optional)

const { status, data } = await apiInstance.showRebroadcastsPartialUpdate(
    id,
    patchedShowRebroadcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedShowRebroadcast** | **PatchedShowRebroadcast**|  | |
| **id** | [**number**] | A unique integer value identifying this show rebroadcast. | defaults to undefined|


### Return type

**ShowRebroadcast**

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

# **showRebroadcastsRetrieve**
> ShowRebroadcast showRebroadcastsRetrieve()


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

let id: number; //A unique integer value identifying this show rebroadcast. (default to undefined)

const { status, data } = await apiInstance.showRebroadcastsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show rebroadcast. | defaults to undefined|


### Return type

**ShowRebroadcast**

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

# **showRebroadcastsUpdate**
> ShowRebroadcast showRebroadcastsUpdate(showRebroadcast)


### Example

```typescript
import {
    ShowRebroadcastsApi,
    Configuration,
    ShowRebroadcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowRebroadcastsApi(configuration);

let id: number; //A unique integer value identifying this show rebroadcast. (default to undefined)
let showRebroadcast: ShowRebroadcast; //

const { status, data } = await apiInstance.showRebroadcastsUpdate(
    id,
    showRebroadcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showRebroadcast** | **ShowRebroadcast**|  | |
| **id** | [**number**] | A unique integer value identifying this show rebroadcast. | defaults to undefined|


### Return type

**ShowRebroadcast**

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

