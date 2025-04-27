# ShowsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showsCreate**](#showscreate) | **POST** /api/v2/shows | |
|[**showsDestroy**](#showsdestroy) | **DELETE** /api/v2/shows/{id} | |
|[**showsList**](#showslist) | **GET** /api/v2/shows | |
|[**showsPartialUpdate**](#showspartialupdate) | **PATCH** /api/v2/shows/{id} | |
|[**showsRetrieve**](#showsretrieve) | **GET** /api/v2/shows/{id} | |
|[**showsUpdate**](#showsupdate) | **PUT** /api/v2/shows/{id} | |

# **showsCreate**
> Show showsCreate(show)


### Example

```typescript
import {
    ShowsApi,
    Configuration,
    Show
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

let show: Show; //

const { status, data } = await apiInstance.showsCreate(
    show
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **show** | **Show**|  | |


### Return type

**Show**

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

# **showsDestroy**
> showsDestroy()


### Example

```typescript
import {
    ShowsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

let id: number; //A unique integer value identifying this show. (default to undefined)

const { status, data } = await apiInstance.showsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show. | defaults to undefined|


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

# **showsList**
> Array<Show> showsList()


### Example

```typescript
import {
    ShowsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

const { status, data } = await apiInstance.showsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Show>**

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

# **showsPartialUpdate**
> Show showsPartialUpdate()


### Example

```typescript
import {
    ShowsApi,
    Configuration,
    PatchedShow
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

let id: number; //A unique integer value identifying this show. (default to undefined)
let patchedShow: PatchedShow; // (optional)

const { status, data } = await apiInstance.showsPartialUpdate(
    id,
    patchedShow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedShow** | **PatchedShow**|  | |
| **id** | [**number**] | A unique integer value identifying this show. | defaults to undefined|


### Return type

**Show**

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

# **showsRetrieve**
> Show showsRetrieve()


### Example

```typescript
import {
    ShowsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

let id: number; //A unique integer value identifying this show. (default to undefined)

const { status, data } = await apiInstance.showsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show. | defaults to undefined|


### Return type

**Show**

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

# **showsUpdate**
> Show showsUpdate(show)


### Example

```typescript
import {
    ShowsApi,
    Configuration,
    Show
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowsApi(configuration);

let id: number; //A unique integer value identifying this show. (default to undefined)
let show: Show; //

const { status, data } = await apiInstance.showsUpdate(
    id,
    show
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **show** | **Show**|  | |
| **id** | [**number**] | A unique integer value identifying this show. | defaults to undefined|


### Return type

**Show**

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

