# PodcastEpisodesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**podcastEpisodesCreate**](#podcastepisodescreate) | **POST** /api/v2/podcast-episodes | |
|[**podcastEpisodesDestroy**](#podcastepisodesdestroy) | **DELETE** /api/v2/podcast-episodes/{id} | |
|[**podcastEpisodesList**](#podcastepisodeslist) | **GET** /api/v2/podcast-episodes | |
|[**podcastEpisodesPartialUpdate**](#podcastepisodespartialupdate) | **PATCH** /api/v2/podcast-episodes/{id} | |
|[**podcastEpisodesRetrieve**](#podcastepisodesretrieve) | **GET** /api/v2/podcast-episodes/{id} | |
|[**podcastEpisodesUpdate**](#podcastepisodesupdate) | **PUT** /api/v2/podcast-episodes/{id} | |

# **podcastEpisodesCreate**
> PodcastEpisode podcastEpisodesCreate(podcastEpisode)


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration,
    PodcastEpisode
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

let podcastEpisode: PodcastEpisode; //

const { status, data } = await apiInstance.podcastEpisodesCreate(
    podcastEpisode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **podcastEpisode** | **PodcastEpisode**|  | |


### Return type

**PodcastEpisode**

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

# **podcastEpisodesDestroy**
> podcastEpisodesDestroy()


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

let id: number; //A unique integer value identifying this podcast episode. (default to undefined)

const { status, data } = await apiInstance.podcastEpisodesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this podcast episode. | defaults to undefined|


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

# **podcastEpisodesList**
> Array<PodcastEpisode> podcastEpisodesList()


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

const { status, data } = await apiInstance.podcastEpisodesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PodcastEpisode>**

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

# **podcastEpisodesPartialUpdate**
> PodcastEpisode podcastEpisodesPartialUpdate()


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration,
    PatchedPodcastEpisode
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

let id: number; //A unique integer value identifying this podcast episode. (default to undefined)
let patchedPodcastEpisode: PatchedPodcastEpisode; // (optional)

const { status, data } = await apiInstance.podcastEpisodesPartialUpdate(
    id,
    patchedPodcastEpisode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPodcastEpisode** | **PatchedPodcastEpisode**|  | |
| **id** | [**number**] | A unique integer value identifying this podcast episode. | defaults to undefined|


### Return type

**PodcastEpisode**

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

# **podcastEpisodesRetrieve**
> PodcastEpisode podcastEpisodesRetrieve()


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

let id: number; //A unique integer value identifying this podcast episode. (default to undefined)

const { status, data } = await apiInstance.podcastEpisodesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this podcast episode. | defaults to undefined|


### Return type

**PodcastEpisode**

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

# **podcastEpisodesUpdate**
> PodcastEpisode podcastEpisodesUpdate(podcastEpisode)


### Example

```typescript
import {
    PodcastEpisodesApi,
    Configuration,
    PodcastEpisode
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastEpisodesApi(configuration);

let id: number; //A unique integer value identifying this podcast episode. (default to undefined)
let podcastEpisode: PodcastEpisode; //

const { status, data } = await apiInstance.podcastEpisodesUpdate(
    id,
    podcastEpisode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **podcastEpisode** | **PodcastEpisode**|  | |
| **id** | [**number**] | A unique integer value identifying this podcast episode. | defaults to undefined|


### Return type

**PodcastEpisode**

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

