# ShowHostsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**showHostsCreate**](#showhostscreate) | **POST** /api/v2/show-hosts | |
|[**showHostsDestroy**](#showhostsdestroy) | **DELETE** /api/v2/show-hosts/{id} | |
|[**showHostsList**](#showhostslist) | **GET** /api/v2/show-hosts | |
|[**showHostsPartialUpdate**](#showhostspartialupdate) | **PATCH** /api/v2/show-hosts/{id} | |
|[**showHostsRetrieve**](#showhostsretrieve) | **GET** /api/v2/show-hosts/{id} | |
|[**showHostsUpdate**](#showhostsupdate) | **PUT** /api/v2/show-hosts/{id} | |

# **showHostsCreate**
> ShowHost showHostsCreate(showHost)


### Example

```typescript
import {
    ShowHostsApi,
    Configuration,
    ShowHost
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

let showHost: ShowHost; //

const { status, data } = await apiInstance.showHostsCreate(
    showHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showHost** | **ShowHost**|  | |


### Return type

**ShowHost**

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

# **showHostsDestroy**
> showHostsDestroy()


### Example

```typescript
import {
    ShowHostsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

let id: number; //A unique integer value identifying this show host. (default to undefined)

const { status, data } = await apiInstance.showHostsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show host. | defaults to undefined|


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

# **showHostsList**
> Array<ShowHost> showHostsList()


### Example

```typescript
import {
    ShowHostsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

const { status, data } = await apiInstance.showHostsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ShowHost>**

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

# **showHostsPartialUpdate**
> ShowHost showHostsPartialUpdate()


### Example

```typescript
import {
    ShowHostsApi,
    Configuration,
    PatchedShowHost
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

let id: number; //A unique integer value identifying this show host. (default to undefined)
let patchedShowHost: PatchedShowHost; // (optional)

const { status, data } = await apiInstance.showHostsPartialUpdate(
    id,
    patchedShowHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedShowHost** | **PatchedShowHost**|  | |
| **id** | [**number**] | A unique integer value identifying this show host. | defaults to undefined|


### Return type

**ShowHost**

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

# **showHostsRetrieve**
> ShowHost showHostsRetrieve()


### Example

```typescript
import {
    ShowHostsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

let id: number; //A unique integer value identifying this show host. (default to undefined)

const { status, data } = await apiInstance.showHostsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this show host. | defaults to undefined|


### Return type

**ShowHost**

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

# **showHostsUpdate**
> ShowHost showHostsUpdate(showHost)


### Example

```typescript
import {
    ShowHostsApi,
    Configuration,
    ShowHost
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ShowHostsApi(configuration);

let id: number; //A unique integer value identifying this show host. (default to undefined)
let showHost: ShowHost; //

const { status, data } = await apiInstance.showHostsUpdate(
    id,
    showHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showHost** | **ShowHost**|  | |
| **id** | [**number**] | A unique integer value identifying this show host. | defaults to undefined|


### Return type

**ShowHost**

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

