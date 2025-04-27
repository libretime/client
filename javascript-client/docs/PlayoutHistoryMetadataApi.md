# PlayoutHistoryMetadataApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playoutHistoryMetadataCreate**](#playouthistorymetadatacreate) | **POST** /api/v2/playout-history-metadata | |
|[**playoutHistoryMetadataDestroy**](#playouthistorymetadatadestroy) | **DELETE** /api/v2/playout-history-metadata/{id} | |
|[**playoutHistoryMetadataList**](#playouthistorymetadatalist) | **GET** /api/v2/playout-history-metadata | |
|[**playoutHistoryMetadataPartialUpdate**](#playouthistorymetadatapartialupdate) | **PATCH** /api/v2/playout-history-metadata/{id} | |
|[**playoutHistoryMetadataRetrieve**](#playouthistorymetadataretrieve) | **GET** /api/v2/playout-history-metadata/{id} | |
|[**playoutHistoryMetadataUpdate**](#playouthistorymetadataupdate) | **PUT** /api/v2/playout-history-metadata/{id} | |

# **playoutHistoryMetadataCreate**
> PlayoutHistoryMetadata playoutHistoryMetadataCreate(playoutHistoryMetadata)


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration,
    PlayoutHistoryMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

let playoutHistoryMetadata: PlayoutHistoryMetadata; //

const { status, data } = await apiInstance.playoutHistoryMetadataCreate(
    playoutHistoryMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryMetadata** | **PlayoutHistoryMetadata**|  | |


### Return type

**PlayoutHistoryMetadata**

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

# **playoutHistoryMetadataDestroy**
> playoutHistoryMetadataDestroy()


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

let id: number; //A unique integer value identifying this playout history metadata. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryMetadataDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history metadata. | defaults to undefined|


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

# **playoutHistoryMetadataList**
> Array<PlayoutHistoryMetadata> playoutHistoryMetadataList()


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

const { status, data } = await apiInstance.playoutHistoryMetadataList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlayoutHistoryMetadata>**

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

# **playoutHistoryMetadataPartialUpdate**
> PlayoutHistoryMetadata playoutHistoryMetadataPartialUpdate()


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration,
    PatchedPlayoutHistoryMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

let id: number; //A unique integer value identifying this playout history metadata. (default to undefined)
let patchedPlayoutHistoryMetadata: PatchedPlayoutHistoryMetadata; // (optional)

const { status, data } = await apiInstance.playoutHistoryMetadataPartialUpdate(
    id,
    patchedPlayoutHistoryMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlayoutHistoryMetadata** | **PatchedPlayoutHistoryMetadata**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history metadata. | defaults to undefined|


### Return type

**PlayoutHistoryMetadata**

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

# **playoutHistoryMetadataRetrieve**
> PlayoutHistoryMetadata playoutHistoryMetadataRetrieve()


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

let id: number; //A unique integer value identifying this playout history metadata. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryMetadataRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history metadata. | defaults to undefined|


### Return type

**PlayoutHistoryMetadata**

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

# **playoutHistoryMetadataUpdate**
> PlayoutHistoryMetadata playoutHistoryMetadataUpdate(playoutHistoryMetadata)


### Example

```typescript
import {
    PlayoutHistoryMetadataApi,
    Configuration,
    PlayoutHistoryMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryMetadataApi(configuration);

let id: number; //A unique integer value identifying this playout history metadata. (default to undefined)
let playoutHistoryMetadata: PlayoutHistoryMetadata; //

const { status, data } = await apiInstance.playoutHistoryMetadataUpdate(
    id,
    playoutHistoryMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryMetadata** | **PlayoutHistoryMetadata**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history metadata. | defaults to undefined|


### Return type

**PlayoutHistoryMetadata**

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

