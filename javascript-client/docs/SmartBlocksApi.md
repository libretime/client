# SmartBlocksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**smartBlocksCreate**](#smartblockscreate) | **POST** /api/v2/smart-blocks | |
|[**smartBlocksDestroy**](#smartblocksdestroy) | **DELETE** /api/v2/smart-blocks/{id} | |
|[**smartBlocksList**](#smartblockslist) | **GET** /api/v2/smart-blocks | |
|[**smartBlocksPartialUpdate**](#smartblockspartialupdate) | **PATCH** /api/v2/smart-blocks/{id} | |
|[**smartBlocksRetrieve**](#smartblocksretrieve) | **GET** /api/v2/smart-blocks/{id} | |
|[**smartBlocksUpdate**](#smartblocksupdate) | **PUT** /api/v2/smart-blocks/{id} | |

# **smartBlocksCreate**
> SmartBlock smartBlocksCreate(smartBlock)


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration,
    SmartBlock
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

let smartBlock: SmartBlock; //

const { status, data } = await apiInstance.smartBlocksCreate(
    smartBlock
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlock** | **SmartBlock**|  | |


### Return type

**SmartBlock**

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

# **smartBlocksDestroy**
> smartBlocksDestroy()


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

let id: number; //A unique integer value identifying this smart block. (default to undefined)

const { status, data } = await apiInstance.smartBlocksDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block. | defaults to undefined|


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

# **smartBlocksList**
> Array<SmartBlock> smartBlocksList()


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

const { status, data } = await apiInstance.smartBlocksList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SmartBlock>**

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

# **smartBlocksPartialUpdate**
> SmartBlock smartBlocksPartialUpdate()


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration,
    PatchedSmartBlock
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

let id: number; //A unique integer value identifying this smart block. (default to undefined)
let patchedSmartBlock: PatchedSmartBlock; // (optional)

const { status, data } = await apiInstance.smartBlocksPartialUpdate(
    id,
    patchedSmartBlock
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSmartBlock** | **PatchedSmartBlock**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block. | defaults to undefined|


### Return type

**SmartBlock**

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

# **smartBlocksRetrieve**
> SmartBlock smartBlocksRetrieve()


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

let id: number; //A unique integer value identifying this smart block. (default to undefined)

const { status, data } = await apiInstance.smartBlocksRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block. | defaults to undefined|


### Return type

**SmartBlock**

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

# **smartBlocksUpdate**
> SmartBlock smartBlocksUpdate(smartBlock)


### Example

```typescript
import {
    SmartBlocksApi,
    Configuration,
    SmartBlock
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlocksApi(configuration);

let id: number; //A unique integer value identifying this smart block. (default to undefined)
let smartBlock: SmartBlock; //

const { status, data } = await apiInstance.smartBlocksUpdate(
    id,
    smartBlock
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlock** | **SmartBlock**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block. | defaults to undefined|


### Return type

**SmartBlock**

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

