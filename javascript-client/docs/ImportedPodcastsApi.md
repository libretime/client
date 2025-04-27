# ImportedPodcastsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**importedPodcastsCreate**](#importedpodcastscreate) | **POST** /api/v2/imported-podcasts | |
|[**importedPodcastsDestroy**](#importedpodcastsdestroy) | **DELETE** /api/v2/imported-podcasts/{id} | |
|[**importedPodcastsList**](#importedpodcastslist) | **GET** /api/v2/imported-podcasts | |
|[**importedPodcastsPartialUpdate**](#importedpodcastspartialupdate) | **PATCH** /api/v2/imported-podcasts/{id} | |
|[**importedPodcastsRetrieve**](#importedpodcastsretrieve) | **GET** /api/v2/imported-podcasts/{id} | |
|[**importedPodcastsUpdate**](#importedpodcastsupdate) | **PUT** /api/v2/imported-podcasts/{id} | |

# **importedPodcastsCreate**
> ImportedPodcast importedPodcastsCreate(importedPodcast)


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration,
    ImportedPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

let importedPodcast: ImportedPodcast; //

const { status, data } = await apiInstance.importedPodcastsCreate(
    importedPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importedPodcast** | **ImportedPodcast**|  | |


### Return type

**ImportedPodcast**

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

# **importedPodcastsDestroy**
> importedPodcastsDestroy()


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

let id: number; //A unique integer value identifying this imported podcast. (default to undefined)

const { status, data } = await apiInstance.importedPodcastsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this imported podcast. | defaults to undefined|


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

# **importedPodcastsList**
> Array<ImportedPodcast> importedPodcastsList()


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

const { status, data } = await apiInstance.importedPodcastsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ImportedPodcast>**

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

# **importedPodcastsPartialUpdate**
> ImportedPodcast importedPodcastsPartialUpdate()


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration,
    PatchedImportedPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

let id: number; //A unique integer value identifying this imported podcast. (default to undefined)
let patchedImportedPodcast: PatchedImportedPodcast; // (optional)

const { status, data } = await apiInstance.importedPodcastsPartialUpdate(
    id,
    patchedImportedPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedImportedPodcast** | **PatchedImportedPodcast**|  | |
| **id** | [**number**] | A unique integer value identifying this imported podcast. | defaults to undefined|


### Return type

**ImportedPodcast**

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

# **importedPodcastsRetrieve**
> ImportedPodcast importedPodcastsRetrieve()


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

let id: number; //A unique integer value identifying this imported podcast. (default to undefined)

const { status, data } = await apiInstance.importedPodcastsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this imported podcast. | defaults to undefined|


### Return type

**ImportedPodcast**

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

# **importedPodcastsUpdate**
> ImportedPodcast importedPodcastsUpdate(importedPodcast)


### Example

```typescript
import {
    ImportedPodcastsApi,
    Configuration,
    ImportedPodcast
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ImportedPodcastsApi(configuration);

let id: number; //A unique integer value identifying this imported podcast. (default to undefined)
let importedPodcast: ImportedPodcast; //

const { status, data } = await apiInstance.importedPodcastsUpdate(
    id,
    importedPodcast
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importedPodcast** | **ImportedPodcast**|  | |
| **id** | [**number**] | A unique integer value identifying this imported podcast. | defaults to undefined|


### Return type

**ImportedPodcast**

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

