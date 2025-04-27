# WebstreamMetadataApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webstreamMetadataCreate**](#webstreammetadatacreate) | **POST** /api/v2/webstream-metadata | |
|[**webstreamMetadataDestroy**](#webstreammetadatadestroy) | **DELETE** /api/v2/webstream-metadata/{id} | |
|[**webstreamMetadataList**](#webstreammetadatalist) | **GET** /api/v2/webstream-metadata | |
|[**webstreamMetadataPartialUpdate**](#webstreammetadatapartialupdate) | **PATCH** /api/v2/webstream-metadata/{id} | |
|[**webstreamMetadataRetrieve**](#webstreammetadataretrieve) | **GET** /api/v2/webstream-metadata/{id} | |
|[**webstreamMetadataUpdate**](#webstreammetadataupdate) | **PUT** /api/v2/webstream-metadata/{id} | |

# **webstreamMetadataCreate**
> WebstreamMetadata webstreamMetadataCreate(webstreamMetadata)


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration,
    WebstreamMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

let webstreamMetadata: WebstreamMetadata; //

const { status, data } = await apiInstance.webstreamMetadataCreate(
    webstreamMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webstreamMetadata** | **WebstreamMetadata**|  | |


### Return type

**WebstreamMetadata**

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

# **webstreamMetadataDestroy**
> webstreamMetadataDestroy()


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

let id: number; //A unique integer value identifying this webstream metadata. (default to undefined)

const { status, data } = await apiInstance.webstreamMetadataDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this webstream metadata. | defaults to undefined|


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

# **webstreamMetadataList**
> Array<WebstreamMetadata> webstreamMetadataList()


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

const { status, data } = await apiInstance.webstreamMetadataList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WebstreamMetadata>**

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

# **webstreamMetadataPartialUpdate**
> WebstreamMetadata webstreamMetadataPartialUpdate()


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration,
    PatchedWebstreamMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

let id: number; //A unique integer value identifying this webstream metadata. (default to undefined)
let patchedWebstreamMetadata: PatchedWebstreamMetadata; // (optional)

const { status, data } = await apiInstance.webstreamMetadataPartialUpdate(
    id,
    patchedWebstreamMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedWebstreamMetadata** | **PatchedWebstreamMetadata**|  | |
| **id** | [**number**] | A unique integer value identifying this webstream metadata. | defaults to undefined|


### Return type

**WebstreamMetadata**

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

# **webstreamMetadataRetrieve**
> WebstreamMetadata webstreamMetadataRetrieve()


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

let id: number; //A unique integer value identifying this webstream metadata. (default to undefined)

const { status, data } = await apiInstance.webstreamMetadataRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this webstream metadata. | defaults to undefined|


### Return type

**WebstreamMetadata**

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

# **webstreamMetadataUpdate**
> WebstreamMetadata webstreamMetadataUpdate(webstreamMetadata)


### Example

```typescript
import {
    WebstreamMetadataApi,
    Configuration,
    WebstreamMetadata
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamMetadataApi(configuration);

let id: number; //A unique integer value identifying this webstream metadata. (default to undefined)
let webstreamMetadata: WebstreamMetadata; //

const { status, data } = await apiInstance.webstreamMetadataUpdate(
    id,
    webstreamMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webstreamMetadata** | **WebstreamMetadata**|  | |
| **id** | [**number**] | A unique integer value identifying this webstream metadata. | defaults to undefined|


### Return type

**WebstreamMetadata**

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

