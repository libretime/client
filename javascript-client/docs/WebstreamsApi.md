# WebstreamsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webstreamsCreate**](#webstreamscreate) | **POST** /api/v2/webstreams | |
|[**webstreamsDestroy**](#webstreamsdestroy) | **DELETE** /api/v2/webstreams/{id} | |
|[**webstreamsList**](#webstreamslist) | **GET** /api/v2/webstreams | |
|[**webstreamsPartialUpdate**](#webstreamspartialupdate) | **PATCH** /api/v2/webstreams/{id} | |
|[**webstreamsRetrieve**](#webstreamsretrieve) | **GET** /api/v2/webstreams/{id} | |
|[**webstreamsUpdate**](#webstreamsupdate) | **PUT** /api/v2/webstreams/{id} | |

# **webstreamsCreate**
> Webstream webstreamsCreate(webstream)


### Example

```typescript
import {
    WebstreamsApi,
    Configuration,
    Webstream
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

let webstream: Webstream; //

const { status, data } = await apiInstance.webstreamsCreate(
    webstream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webstream** | **Webstream**|  | |


### Return type

**Webstream**

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

# **webstreamsDestroy**
> webstreamsDestroy()


### Example

```typescript
import {
    WebstreamsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

let id: number; //A unique integer value identifying this webstream. (default to undefined)

const { status, data } = await apiInstance.webstreamsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this webstream. | defaults to undefined|


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

# **webstreamsList**
> Array<Webstream> webstreamsList()


### Example

```typescript
import {
    WebstreamsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

const { status, data } = await apiInstance.webstreamsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Webstream>**

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

# **webstreamsPartialUpdate**
> Webstream webstreamsPartialUpdate()


### Example

```typescript
import {
    WebstreamsApi,
    Configuration,
    PatchedWebstream
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

let id: number; //A unique integer value identifying this webstream. (default to undefined)
let patchedWebstream: PatchedWebstream; // (optional)

const { status, data } = await apiInstance.webstreamsPartialUpdate(
    id,
    patchedWebstream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedWebstream** | **PatchedWebstream**|  | |
| **id** | [**number**] | A unique integer value identifying this webstream. | defaults to undefined|


### Return type

**Webstream**

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

# **webstreamsRetrieve**
> Webstream webstreamsRetrieve()


### Example

```typescript
import {
    WebstreamsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

let id: number; //A unique integer value identifying this webstream. (default to undefined)

const { status, data } = await apiInstance.webstreamsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this webstream. | defaults to undefined|


### Return type

**Webstream**

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

# **webstreamsUpdate**
> Webstream webstreamsUpdate(webstream)


### Example

```typescript
import {
    WebstreamsApi,
    Configuration,
    Webstream
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new WebstreamsApi(configuration);

let id: number; //A unique integer value identifying this webstream. (default to undefined)
let webstream: Webstream; //

const { status, data } = await apiInstance.webstreamsUpdate(
    id,
    webstream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webstream** | **Webstream**|  | |
| **id** | [**number**] | A unique integer value identifying this webstream. | defaults to undefined|


### Return type

**Webstream**

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

