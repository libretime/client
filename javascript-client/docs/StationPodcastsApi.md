# StationPodcastsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**stationPodcastsCreate**](#stationpodcastscreate) | **POST** /api/v2/station-podcasts | |
|[**stationPodcastsDestroy**](#stationpodcastsdestroy) | **DELETE** /api/v2/station-podcasts/{id} | |
|[**stationPodcastsList**](#stationpodcastslist) | **GET** /api/v2/station-podcasts | |
|[**stationPodcastsPartialUpdate**](#stationpodcastspartialupdate) | **PATCH** /api/v2/station-podcasts/{id} | |
|[**stationPodcastsRetrieve**](#stationpodcastsretrieve) | **GET** /api/v2/station-podcasts/{id} | |
|[**stationPodcastsUpdate**](#stationpodcastsupdate) | **PUT** /api/v2/station-podcasts/{id} | |

# **stationPodcastsCreate**
> StationPodcast stationPodcastsCreate(stationPodcast)


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration,
    StationPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

let stationPodcast: StationPodcast; //

const { status, data } = await apiInstance.stationPodcastsCreate(
    stationPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationPodcast** | **StationPodcast**|  | |


### Return type

**StationPodcast**

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

# **stationPodcastsDestroy**
> stationPodcastsDestroy()


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

let id: number; //A unique integer value identifying this station podcast. (default to undefined)

const { status, data } = await apiInstance.stationPodcastsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this station podcast. | defaults to undefined|


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

# **stationPodcastsList**
> Array<StationPodcast> stationPodcastsList()


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

const { status, data } = await apiInstance.stationPodcastsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<StationPodcast>**

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

# **stationPodcastsPartialUpdate**
> StationPodcast stationPodcastsPartialUpdate()


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration,
    PatchedStationPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

let id: number; //A unique integer value identifying this station podcast. (default to undefined)
let patchedStationPodcast: PatchedStationPodcast; // (optional)

const { status, data } = await apiInstance.stationPodcastsPartialUpdate(
    id,
    patchedStationPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedStationPodcast** | **PatchedStationPodcast**|  | |
| **id** | [**number**] | A unique integer value identifying this station podcast. | defaults to undefined|


### Return type

**StationPodcast**

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

# **stationPodcastsRetrieve**
> StationPodcast stationPodcastsRetrieve()


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

let id: number; //A unique integer value identifying this station podcast. (default to undefined)

const { status, data } = await apiInstance.stationPodcastsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this station podcast. | defaults to undefined|


### Return type

**StationPodcast**

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

# **stationPodcastsUpdate**
> StationPodcast stationPodcastsUpdate(stationPodcast)


### Example

```typescript
import {
    StationPodcastsApi,
    Configuration,
    StationPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StationPodcastsApi(configuration);

let id: number; //A unique integer value identifying this station podcast. (default to undefined)
let stationPodcast: StationPodcast; //

const { status, data } = await apiInstance.stationPodcastsUpdate(
    id,
    stationPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationPodcast** | **StationPodcast**|  | |
| **id** | [**number**] | A unique integer value identifying this station podcast. | defaults to undefined|


### Return type

**StationPodcast**

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

