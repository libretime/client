# TimestampsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**timestampsCreate**](#timestampscreate) | **POST** /api/v2/timestamps | |
|[**timestampsDestroy**](#timestampsdestroy) | **DELETE** /api/v2/timestamps/{id} | |
|[**timestampsList**](#timestampslist) | **GET** /api/v2/timestamps | |
|[**timestampsPartialUpdate**](#timestampspartialupdate) | **PATCH** /api/v2/timestamps/{id} | |
|[**timestampsRetrieve**](#timestampsretrieve) | **GET** /api/v2/timestamps/{id} | |
|[**timestampsUpdate**](#timestampsupdate) | **PUT** /api/v2/timestamps/{id} | |

# **timestampsCreate**
> Timestamp timestampsCreate(timestamp)


### Example

```typescript
import {
    TimestampsApi,
    Configuration,
    Timestamp
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

let timestamp: Timestamp; //

const { status, data } = await apiInstance.timestampsCreate(
    timestamp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timestamp** | **Timestamp**|  | |


### Return type

**Timestamp**

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

# **timestampsDestroy**
> timestampsDestroy()


### Example

```typescript
import {
    TimestampsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

let id: number; //A unique integer value identifying this timestamp. (default to undefined)

const { status, data } = await apiInstance.timestampsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this timestamp. | defaults to undefined|


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

# **timestampsList**
> Array<Timestamp> timestampsList()


### Example

```typescript
import {
    TimestampsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

const { status, data } = await apiInstance.timestampsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Timestamp>**

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

# **timestampsPartialUpdate**
> Timestamp timestampsPartialUpdate()


### Example

```typescript
import {
    TimestampsApi,
    Configuration,
    PatchedTimestamp
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

let id: number; //A unique integer value identifying this timestamp. (default to undefined)
let patchedTimestamp: PatchedTimestamp; // (optional)

const { status, data } = await apiInstance.timestampsPartialUpdate(
    id,
    patchedTimestamp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTimestamp** | **PatchedTimestamp**|  | |
| **id** | [**number**] | A unique integer value identifying this timestamp. | defaults to undefined|


### Return type

**Timestamp**

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

# **timestampsRetrieve**
> Timestamp timestampsRetrieve()


### Example

```typescript
import {
    TimestampsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

let id: number; //A unique integer value identifying this timestamp. (default to undefined)

const { status, data } = await apiInstance.timestampsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this timestamp. | defaults to undefined|


### Return type

**Timestamp**

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

# **timestampsUpdate**
> Timestamp timestampsUpdate(timestamp)


### Example

```typescript
import {
    TimestampsApi,
    Configuration,
    Timestamp
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new TimestampsApi(configuration);

let id: number; //A unique integer value identifying this timestamp. (default to undefined)
let timestamp: Timestamp; //

const { status, data } = await apiInstance.timestampsUpdate(
    id,
    timestamp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timestamp** | **Timestamp**|  | |
| **id** | [**number**] | A unique integer value identifying this timestamp. | defaults to undefined|


### Return type

**Timestamp**

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

