# MountNamesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mountNamesCreate**](#mountnamescreate) | **POST** /api/v2/mount-names | |
|[**mountNamesDestroy**](#mountnamesdestroy) | **DELETE** /api/v2/mount-names/{id} | |
|[**mountNamesList**](#mountnameslist) | **GET** /api/v2/mount-names | |
|[**mountNamesPartialUpdate**](#mountnamespartialupdate) | **PATCH** /api/v2/mount-names/{id} | |
|[**mountNamesRetrieve**](#mountnamesretrieve) | **GET** /api/v2/mount-names/{id} | |
|[**mountNamesUpdate**](#mountnamesupdate) | **PUT** /api/v2/mount-names/{id} | |

# **mountNamesCreate**
> MountName mountNamesCreate(mountName)


### Example

```typescript
import {
    MountNamesApi,
    Configuration,
    MountName
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

let mountName: MountName; //

const { status, data } = await apiInstance.mountNamesCreate(
    mountName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mountName** | **MountName**|  | |


### Return type

**MountName**

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

# **mountNamesDestroy**
> mountNamesDestroy()


### Example

```typescript
import {
    MountNamesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

let id: number; //A unique integer value identifying this mount name. (default to undefined)

const { status, data } = await apiInstance.mountNamesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this mount name. | defaults to undefined|


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

# **mountNamesList**
> Array<MountName> mountNamesList()


### Example

```typescript
import {
    MountNamesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

const { status, data } = await apiInstance.mountNamesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MountName>**

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

# **mountNamesPartialUpdate**
> MountName mountNamesPartialUpdate()


### Example

```typescript
import {
    MountNamesApi,
    Configuration,
    PatchedMountName
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

let id: number; //A unique integer value identifying this mount name. (default to undefined)
let patchedMountName: PatchedMountName; // (optional)

const { status, data } = await apiInstance.mountNamesPartialUpdate(
    id,
    patchedMountName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedMountName** | **PatchedMountName**|  | |
| **id** | [**number**] | A unique integer value identifying this mount name. | defaults to undefined|


### Return type

**MountName**

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

# **mountNamesRetrieve**
> MountName mountNamesRetrieve()


### Example

```typescript
import {
    MountNamesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

let id: number; //A unique integer value identifying this mount name. (default to undefined)

const { status, data } = await apiInstance.mountNamesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this mount name. | defaults to undefined|


### Return type

**MountName**

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

# **mountNamesUpdate**
> MountName mountNamesUpdate(mountName)


### Example

```typescript
import {
    MountNamesApi,
    Configuration,
    MountName
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new MountNamesApi(configuration);

let id: number; //A unique integer value identifying this mount name. (default to undefined)
let mountName: MountName; //

const { status, data } = await apiInstance.mountNamesUpdate(
    id,
    mountName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mountName** | **MountName**|  | |
| **id** | [**number**] | A unique integer value identifying this mount name. | defaults to undefined|


### Return type

**MountName**

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

