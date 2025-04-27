# ServiceRegistersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**serviceRegistersCreate**](#serviceregisterscreate) | **POST** /api/v2/service-registers | |
|[**serviceRegistersDestroy**](#serviceregistersdestroy) | **DELETE** /api/v2/service-registers/{name} | |
|[**serviceRegistersList**](#serviceregisterslist) | **GET** /api/v2/service-registers | |
|[**serviceRegistersPartialUpdate**](#serviceregisterspartialupdate) | **PATCH** /api/v2/service-registers/{name} | |
|[**serviceRegistersRetrieve**](#serviceregistersretrieve) | **GET** /api/v2/service-registers/{name} | |
|[**serviceRegistersUpdate**](#serviceregistersupdate) | **PUT** /api/v2/service-registers/{name} | |

# **serviceRegistersCreate**
> ServiceRegister serviceRegistersCreate(serviceRegister)


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration,
    ServiceRegister
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

let serviceRegister: ServiceRegister; //

const { status, data } = await apiInstance.serviceRegistersCreate(
    serviceRegister
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serviceRegister** | **ServiceRegister**|  | |


### Return type

**ServiceRegister**

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

# **serviceRegistersDestroy**
> serviceRegistersDestroy()


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

let name: string; //A unique value identifying this service register. (default to undefined)

const { status, data } = await apiInstance.serviceRegistersDestroy(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | A unique value identifying this service register. | defaults to undefined|


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

# **serviceRegistersList**
> Array<ServiceRegister> serviceRegistersList()


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

const { status, data } = await apiInstance.serviceRegistersList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ServiceRegister>**

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

# **serviceRegistersPartialUpdate**
> ServiceRegister serviceRegistersPartialUpdate()


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration,
    PatchedServiceRegister
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

let name: string; //A unique value identifying this service register. (default to undefined)
let patchedServiceRegister: PatchedServiceRegister; // (optional)

const { status, data } = await apiInstance.serviceRegistersPartialUpdate(
    name,
    patchedServiceRegister
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedServiceRegister** | **PatchedServiceRegister**|  | |
| **name** | [**string**] | A unique value identifying this service register. | defaults to undefined|


### Return type

**ServiceRegister**

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

# **serviceRegistersRetrieve**
> ServiceRegister serviceRegistersRetrieve()


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

let name: string; //A unique value identifying this service register. (default to undefined)

const { status, data } = await apiInstance.serviceRegistersRetrieve(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | A unique value identifying this service register. | defaults to undefined|


### Return type

**ServiceRegister**

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

# **serviceRegistersUpdate**
> ServiceRegister serviceRegistersUpdate(serviceRegister)


### Example

```typescript
import {
    ServiceRegistersApi,
    Configuration,
    ServiceRegister
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ServiceRegistersApi(configuration);

let name: string; //A unique value identifying this service register. (default to undefined)
let serviceRegister: ServiceRegister; //

const { status, data } = await apiInstance.serviceRegistersUpdate(
    name,
    serviceRegister
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serviceRegister** | **ServiceRegister**|  | |
| **name** | [**string**] | A unique value identifying this service register. | defaults to undefined|


### Return type

**ServiceRegister**

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

