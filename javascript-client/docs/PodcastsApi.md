# PodcastsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**podcastsCreate**](#podcastscreate) | **POST** /api/v2/podcasts | |
|[**podcastsDestroy**](#podcastsdestroy) | **DELETE** /api/v2/podcasts/{id} | |
|[**podcastsList**](#podcastslist) | **GET** /api/v2/podcasts | |
|[**podcastsPartialUpdate**](#podcastspartialupdate) | **PATCH** /api/v2/podcasts/{id} | |
|[**podcastsRetrieve**](#podcastsretrieve) | **GET** /api/v2/podcasts/{id} | |
|[**podcastsUpdate**](#podcastsupdate) | **PUT** /api/v2/podcasts/{id} | |

# **podcastsCreate**
> Podcast podcastsCreate(podcast)


### Example

```typescript
import {
    PodcastsApi,
    Configuration,
    Podcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

let podcast: Podcast; //

const { status, data } = await apiInstance.podcastsCreate(
    podcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **podcast** | **Podcast**|  | |


### Return type

**Podcast**

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

# **podcastsDestroy**
> podcastsDestroy()


### Example

```typescript
import {
    PodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

let id: number; //A unique integer value identifying this podcast. (default to undefined)

const { status, data } = await apiInstance.podcastsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this podcast. | defaults to undefined|


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

# **podcastsList**
> Array<Podcast> podcastsList()


### Example

```typescript
import {
    PodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

const { status, data } = await apiInstance.podcastsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Podcast>**

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

# **podcastsPartialUpdate**
> Podcast podcastsPartialUpdate()


### Example

```typescript
import {
    PodcastsApi,
    Configuration,
    PatchedPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

let id: number; //A unique integer value identifying this podcast. (default to undefined)
let patchedPodcast: PatchedPodcast; // (optional)

const { status, data } = await apiInstance.podcastsPartialUpdate(
    id,
    patchedPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPodcast** | **PatchedPodcast**|  | |
| **id** | [**number**] | A unique integer value identifying this podcast. | defaults to undefined|


### Return type

**Podcast**

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

# **podcastsRetrieve**
> Podcast podcastsRetrieve()


### Example

```typescript
import {
    PodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

let id: number; //A unique integer value identifying this podcast. (default to undefined)

const { status, data } = await apiInstance.podcastsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this podcast. | defaults to undefined|


### Return type

**Podcast**

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

# **podcastsUpdate**
> Podcast podcastsUpdate(podcast)


### Example

```typescript
import {
    PodcastsApi,
    Configuration,
    Podcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PodcastsApi(configuration);

let id: number; //A unique integer value identifying this podcast. (default to undefined)
let podcast: Podcast; //

const { status, data } = await apiInstance.podcastsUpdate(
    id,
    podcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **podcast** | **Podcast**|  | |
| **id** | [**number**] | A unique integer value identifying this podcast. | defaults to undefined|


### Return type

**Podcast**

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

