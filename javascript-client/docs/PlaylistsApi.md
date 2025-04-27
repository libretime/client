# PlaylistsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playlistsCreate**](#playlistscreate) | **POST** /api/v2/playlists | |
|[**playlistsDestroy**](#playlistsdestroy) | **DELETE** /api/v2/playlists/{id} | |
|[**playlistsList**](#playlistslist) | **GET** /api/v2/playlists | |
|[**playlistsPartialUpdate**](#playlistspartialupdate) | **PATCH** /api/v2/playlists/{id} | |
|[**playlistsRetrieve**](#playlistsretrieve) | **GET** /api/v2/playlists/{id} | |
|[**playlistsUpdate**](#playlistsupdate) | **PUT** /api/v2/playlists/{id} | |

# **playlistsCreate**
> Playlist playlistsCreate(playlist)


### Example

```typescript
import {
    PlaylistsApi,
    Configuration,
    Playlist
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

let playlist: Playlist; //

const { status, data } = await apiInstance.playlistsCreate(
    playlist
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playlist** | **Playlist**|  | |


### Return type

**Playlist**

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

# **playlistsDestroy**
> playlistsDestroy()


### Example

```typescript
import {
    PlaylistsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

let id: number; //A unique integer value identifying this playlist. (default to undefined)

const { status, data } = await apiInstance.playlistsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playlist. | defaults to undefined|


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

# **playlistsList**
> Array<Playlist> playlistsList()


### Example

```typescript
import {
    PlaylistsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

const { status, data } = await apiInstance.playlistsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Playlist>**

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

# **playlistsPartialUpdate**
> Playlist playlistsPartialUpdate()


### Example

```typescript
import {
    PlaylistsApi,
    Configuration,
    PatchedPlaylist
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

let id: number; //A unique integer value identifying this playlist. (default to undefined)
let patchedPlaylist: PatchedPlaylist; // (optional)

const { status, data } = await apiInstance.playlistsPartialUpdate(
    id,
    patchedPlaylist
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlaylist** | **PatchedPlaylist**|  | |
| **id** | [**number**] | A unique integer value identifying this playlist. | defaults to undefined|


### Return type

**Playlist**

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

# **playlistsRetrieve**
> Playlist playlistsRetrieve()


### Example

```typescript
import {
    PlaylistsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

let id: number; //A unique integer value identifying this playlist. (default to undefined)

const { status, data } = await apiInstance.playlistsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playlist. | defaults to undefined|


### Return type

**Playlist**

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

# **playlistsUpdate**
> Playlist playlistsUpdate(playlist)


### Example

```typescript
import {
    PlaylistsApi,
    Configuration,
    Playlist
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlaylistsApi(configuration);

let id: number; //A unique integer value identifying this playlist. (default to undefined)
let playlist: Playlist; //

const { status, data } = await apiInstance.playlistsUpdate(
    id,
    playlist
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playlist** | **Playlist**|  | |
| **id** | [**number**] | A unique integer value identifying this playlist. | defaults to undefined|


### Return type

**Playlist**

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

