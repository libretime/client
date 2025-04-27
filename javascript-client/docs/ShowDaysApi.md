# ShowDaysApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showDaysCreate**](#showdayscreate) | **POST** /api/v2/show-days | |
|[**showDaysDestroy**](#showdaysdestroy) | **DELETE** /api/v2/show-days/{id} | |
|[**showDaysList**](#showdayslist) | **GET** /api/v2/show-days | |
|[**showDaysPartialUpdate**](#showdayspartialupdate) | **PATCH** /api/v2/show-days/{id} | |
|[**showDaysRetrieve**](#showdaysretrieve) | **GET** /api/v2/show-days/{id} | |
|[**showDaysUpdate**](#showdaysupdate) | **PUT** /api/v2/show-days/{id} | |

# **showDaysCreate**
> ShowDays showDaysCreate(showDays)


### Example

```typescript
import {
    ShowDaysApi,
    Configuration,
    ShowDays
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

let showDays: ShowDays; //

const { status, data } = await apiInstance.showDaysCreate(
    showDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showDays** | **ShowDays**|  | |


### Return type

**ShowDays**

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

# **showDaysDestroy**
> showDaysDestroy()


### Example

```typescript
import {
    ShowDaysApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

let id: number; //A unique integer value identifying this show days. (default to undefined)

const { status, data } = await apiInstance.showDaysDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show days. | defaults to undefined|


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

# **showDaysList**
> Array<ShowDays> showDaysList()


### Example

```typescript
import {
    ShowDaysApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

const { status, data } = await apiInstance.showDaysList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ShowDays>**

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

# **showDaysPartialUpdate**
> ShowDays showDaysPartialUpdate()


### Example

```typescript
import {
    ShowDaysApi,
    Configuration,
    PatchedShowDays
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

let id: number; //A unique integer value identifying this show days. (default to undefined)
let patchedShowDays: PatchedShowDays; // (optional)

const { status, data } = await apiInstance.showDaysPartialUpdate(
    id,
    patchedShowDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedShowDays** | **PatchedShowDays**|  | |
| **id** | [**number**] | A unique integer value identifying this show days. | defaults to undefined|


### Return type

**ShowDays**

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

# **showDaysRetrieve**
> ShowDays showDaysRetrieve()


### Example

```typescript
import {
    ShowDaysApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

let id: number; //A unique integer value identifying this show days. (default to undefined)

const { status, data } = await apiInstance.showDaysRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show days. | defaults to undefined|


### Return type

**ShowDays**

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

# **showDaysUpdate**
> ShowDays showDaysUpdate(showDays)


### Example

```typescript
import {
    ShowDaysApi,
    Configuration,
    ShowDays
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowDaysApi(configuration);

let id: number; //A unique integer value identifying this show days. (default to undefined)
let showDays: ShowDays; //

const { status, data } = await apiInstance.showDaysUpdate(
    id,
    showDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showDays** | **ShowDays**|  | |
| **id** | [**number**] | A unique integer value identifying this show days. | defaults to undefined|


### Return type

**ShowDays**

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

