# PlayoutHistoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playoutHistoryCreate**](#playouthistorycreate) | **POST** /api/v2/playout-history | |
|[**playoutHistoryDestroy**](#playouthistorydestroy) | **DELETE** /api/v2/playout-history/{id} | |
|[**playoutHistoryList**](#playouthistorylist) | **GET** /api/v2/playout-history | |
|[**playoutHistoryPartialUpdate**](#playouthistorypartialupdate) | **PATCH** /api/v2/playout-history/{id} | |
|[**playoutHistoryRetrieve**](#playouthistoryretrieve) | **GET** /api/v2/playout-history/{id} | |
|[**playoutHistoryUpdate**](#playouthistoryupdate) | **PUT** /api/v2/playout-history/{id} | |

# **playoutHistoryCreate**
> PlayoutHistory playoutHistoryCreate(playoutHistory)


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration,
    PlayoutHistory
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

let playoutHistory: PlayoutHistory; //

const { status, data } = await apiInstance.playoutHistoryCreate(
    playoutHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistory** | **PlayoutHistory**|  | |


### Return type

**PlayoutHistory**

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

# **playoutHistoryDestroy**
> playoutHistoryDestroy()


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

let id: number; //A unique integer value identifying this playout history. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history. | defaults to undefined|


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

# **playoutHistoryList**
> Array<PlayoutHistory> playoutHistoryList()


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

const { status, data } = await apiInstance.playoutHistoryList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlayoutHistory>**

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

# **playoutHistoryPartialUpdate**
> PlayoutHistory playoutHistoryPartialUpdate()


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration,
    PatchedPlayoutHistory
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

let id: number; //A unique integer value identifying this playout history. (default to undefined)
let patchedPlayoutHistory: PatchedPlayoutHistory; // (optional)

const { status, data } = await apiInstance.playoutHistoryPartialUpdate(
    id,
    patchedPlayoutHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlayoutHistory** | **PatchedPlayoutHistory**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history. | defaults to undefined|


### Return type

**PlayoutHistory**

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

# **playoutHistoryRetrieve**
> PlayoutHistory playoutHistoryRetrieve()


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

let id: number; //A unique integer value identifying this playout history. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history. | defaults to undefined|


### Return type

**PlayoutHistory**

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

# **playoutHistoryUpdate**
> PlayoutHistory playoutHistoryUpdate(playoutHistory)


### Example

```typescript
import {
    PlayoutHistoryApi,
    Configuration,
    PlayoutHistory
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryApi(configuration);

let id: number; //A unique integer value identifying this playout history. (default to undefined)
let playoutHistory: PlayoutHistory; //

const { status, data } = await apiInstance.playoutHistoryUpdate(
    id,
    playoutHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistory** | **PlayoutHistory**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history. | defaults to undefined|


### Return type

**PlayoutHistory**

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

