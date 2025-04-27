# ScheduleApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**scheduleCreate**](#schedulecreate) | **POST** /api/v2/schedule | |
|[**scheduleDestroy**](#scheduledestroy) | **DELETE** /api/v2/schedule/{id} | |
|[**scheduleList**](#schedulelist) | **GET** /api/v2/schedule | |
|[**schedulePartialUpdate**](#schedulepartialupdate) | **PATCH** /api/v2/schedule/{id} | |
|[**scheduleRetrieve**](#scheduleretrieve) | **GET** /api/v2/schedule/{id} | |
|[**scheduleUpdate**](#scheduleupdate) | **PUT** /api/v2/schedule/{id} | |

# **scheduleCreate**
> WriteSchedule scheduleCreate(writeSchedule)

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration,
    WriteSchedule
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let writeSchedule: WriteSchedule; //

const { status, data } = await apiInstance.scheduleCreate(
    writeSchedule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **writeSchedule** | **WriteSchedule**|  | |


### Return type

**WriteSchedule**

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

# **scheduleDestroy**
> scheduleDestroy()

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let id: number; //A unique integer value identifying this schedule. (default to undefined)

const { status, data } = await apiInstance.scheduleDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this schedule. | defaults to undefined|


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

# **scheduleList**
> Array<ReadSchedule> scheduleList()

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let broadcasted: number; // (optional) (default to undefined)
let endsAfter: string; // (optional) (default to undefined)
let endsBefore: string; // (optional) (default to undefined)
let overbooked: boolean; // (optional) (default to undefined)
let positionStatus: number; // (optional) (default to undefined)
let startsAfter: string; // (optional) (default to undefined)
let startsBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.scheduleList(
    broadcasted,
    endsAfter,
    endsBefore,
    overbooked,
    positionStatus,
    startsAfter,
    startsBefore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **broadcasted** | [**number**] |  | (optional) defaults to undefined|
| **endsAfter** | [**string**] |  | (optional) defaults to undefined|
| **endsBefore** | [**string**] |  | (optional) defaults to undefined|
| **overbooked** | [**boolean**] |  | (optional) defaults to undefined|
| **positionStatus** | [**number**] |  | (optional) defaults to undefined|
| **startsAfter** | [**string**] |  | (optional) defaults to undefined|
| **startsBefore** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ReadSchedule>**

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

# **schedulePartialUpdate**
> ReadSchedule schedulePartialUpdate()

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration,
    PatchedReadSchedule
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let id: number; //A unique integer value identifying this schedule. (default to undefined)
let patchedReadSchedule: PatchedReadSchedule; // (optional)

const { status, data } = await apiInstance.schedulePartialUpdate(
    id,
    patchedReadSchedule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedReadSchedule** | **PatchedReadSchedule**|  | |
| **id** | [**number**] | A unique integer value identifying this schedule. | defaults to undefined|


### Return type

**ReadSchedule**

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

# **scheduleRetrieve**
> ReadSchedule scheduleRetrieve()

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let id: number; //A unique integer value identifying this schedule. (default to undefined)

const { status, data } = await apiInstance.scheduleRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this schedule. | defaults to undefined|


### Return type

**ReadSchedule**

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

# **scheduleUpdate**
> ReadSchedule scheduleUpdate(readSchedule)

Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

### Example

```typescript
import {
    ScheduleApi,
    Configuration,
    ReadSchedule
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let id: number; //A unique integer value identifying this schedule. (default to undefined)
let readSchedule: ReadSchedule; //

const { status, data } = await apiInstance.scheduleUpdate(
    id,
    readSchedule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **readSchedule** | **ReadSchedule**|  | |
| **id** | [**number**] | A unique integer value identifying this schedule. | defaults to undefined|


### Return type

**ReadSchedule**

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

