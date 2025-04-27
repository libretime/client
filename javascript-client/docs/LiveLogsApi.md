# LiveLogsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**liveLogsCreate**](#livelogscreate) | **POST** /api/v2/live-logs | |
|[**liveLogsDestroy**](#livelogsdestroy) | **DELETE** /api/v2/live-logs/{id} | |
|[**liveLogsList**](#livelogslist) | **GET** /api/v2/live-logs | |
|[**liveLogsPartialUpdate**](#livelogspartialupdate) | **PATCH** /api/v2/live-logs/{id} | |
|[**liveLogsRetrieve**](#livelogsretrieve) | **GET** /api/v2/live-logs/{id} | |
|[**liveLogsUpdate**](#livelogsupdate) | **PUT** /api/v2/live-logs/{id} | |

# **liveLogsCreate**
> LiveLog liveLogsCreate(liveLog)


### Example

```typescript
import {
    LiveLogsApi,
    Configuration,
    LiveLog
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

let liveLog: LiveLog; //

const { status, data } = await apiInstance.liveLogsCreate(
    liveLog
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **liveLog** | **LiveLog**|  | |


### Return type

**LiveLog**

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

# **liveLogsDestroy**
> liveLogsDestroy()


### Example

```typescript
import {
    LiveLogsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

let id: number; //A unique integer value identifying this live log. (default to undefined)

const { status, data } = await apiInstance.liveLogsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this live log. | defaults to undefined|


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

# **liveLogsList**
> Array<LiveLog> liveLogsList()


### Example

```typescript
import {
    LiveLogsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

const { status, data } = await apiInstance.liveLogsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<LiveLog>**

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

# **liveLogsPartialUpdate**
> LiveLog liveLogsPartialUpdate()


### Example

```typescript
import {
    LiveLogsApi,
    Configuration,
    PatchedLiveLog
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

let id: number; //A unique integer value identifying this live log. (default to undefined)
let patchedLiveLog: PatchedLiveLog; // (optional)

const { status, data } = await apiInstance.liveLogsPartialUpdate(
    id,
    patchedLiveLog
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLiveLog** | **PatchedLiveLog**|  | |
| **id** | [**number**] | A unique integer value identifying this live log. | defaults to undefined|


### Return type

**LiveLog**

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

# **liveLogsRetrieve**
> LiveLog liveLogsRetrieve()


### Example

```typescript
import {
    LiveLogsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

let id: number; //A unique integer value identifying this live log. (default to undefined)

const { status, data } = await apiInstance.liveLogsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this live log. | defaults to undefined|


### Return type

**LiveLog**

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

# **liveLogsUpdate**
> LiveLog liveLogsUpdate(liveLog)


### Example

```typescript
import {
    LiveLogsApi,
    Configuration,
    LiveLog
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LiveLogsApi(configuration);

let id: number; //A unique integer value identifying this live log. (default to undefined)
let liveLog: LiveLog; //

const { status, data } = await apiInstance.liveLogsUpdate(
    id,
    liveLog
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **liveLog** | **LiveLog**|  | |
| **id** | [**number**] | A unique integer value identifying this live log. | defaults to undefined|


### Return type

**LiveLog**

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

