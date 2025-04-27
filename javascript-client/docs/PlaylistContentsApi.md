# PlaylistContentsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playlistContentsCreate**](#playlistcontentscreate) | **POST** /api/v2/playlist-contents | |
|[**playlistContentsDestroy**](#playlistcontentsdestroy) | **DELETE** /api/v2/playlist-contents/{id} | |
|[**playlistContentsList**](#playlistcontentslist) | **GET** /api/v2/playlist-contents | |
|[**playlistContentsPartialUpdate**](#playlistcontentspartialupdate) | **PATCH** /api/v2/playlist-contents/{id} | |
|[**playlistContentsRetrieve**](#playlistcontentsretrieve) | **GET** /api/v2/playlist-contents/{id} | |
|[**playlistContentsUpdate**](#playlistcontentsupdate) | **PUT** /api/v2/playlist-contents/{id} | |

# **playlistContentsCreate**
> PlaylistContent playlistContentsCreate(playlistContent)


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration,
    PlaylistContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

let playlistContent: PlaylistContent; //

const { status, data } = await apiInstance.playlistContentsCreate(
    playlistContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playlistContent** | **PlaylistContent**|  | |


### Return type

**PlaylistContent**

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

# **playlistContentsDestroy**
> playlistContentsDestroy()


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

let id: number; //A unique integer value identifying this playlist content. (default to undefined)

const { status, data } = await apiInstance.playlistContentsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playlist content. | defaults to undefined|


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

# **playlistContentsList**
> Array<PlaylistContent> playlistContentsList()


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

const { status, data } = await apiInstance.playlistContentsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlaylistContent>**

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

# **playlistContentsPartialUpdate**
> PlaylistContent playlistContentsPartialUpdate()


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration,
    PatchedPlaylistContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

let id: number; //A unique integer value identifying this playlist content. (default to undefined)
let patchedPlaylistContent: PatchedPlaylistContent; // (optional)

const { status, data } = await apiInstance.playlistContentsPartialUpdate(
    id,
    patchedPlaylistContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlaylistContent** | **PatchedPlaylistContent**|  | |
| **id** | [**number**] | A unique integer value identifying this playlist content. | defaults to undefined|


### Return type

**PlaylistContent**

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

# **playlistContentsRetrieve**
> PlaylistContent playlistContentsRetrieve()


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

let id: number; //A unique integer value identifying this playlist content. (default to undefined)

const { status, data } = await apiInstance.playlistContentsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playlist content. | defaults to undefined|


### Return type

**PlaylistContent**

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

# **playlistContentsUpdate**
> PlaylistContent playlistContentsUpdate(playlistContent)


### Example

```typescript
import {
    PlaylistContentsApi,
    Configuration,
    PlaylistContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistContentsApi(configuration);

let id: number; //A unique integer value identifying this playlist content. (default to undefined)
let playlistContent: PlaylistContent; //

const { status, data } = await apiInstance.playlistContentsUpdate(
    id,
    playlistContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playlistContent** | **PlaylistContent**|  | |
| **id** | [**number**] | A unique integer value identifying this playlist content. | defaults to undefined|


### Return type

**PlaylistContent**

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

