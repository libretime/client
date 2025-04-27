# SmartBlockCriteriaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**smartBlockCriteriaCreate**](#smartblockcriteriacreate) | **POST** /api/v2/smart-block-criteria | |
|[**smartBlockCriteriaDestroy**](#smartblockcriteriadestroy) | **DELETE** /api/v2/smart-block-criteria/{id} | |
|[**smartBlockCriteriaList**](#smartblockcriterialist) | **GET** /api/v2/smart-block-criteria | |
|[**smartBlockCriteriaPartialUpdate**](#smartblockcriteriapartialupdate) | **PATCH** /api/v2/smart-block-criteria/{id} | |
|[**smartBlockCriteriaRetrieve**](#smartblockcriteriaretrieve) | **GET** /api/v2/smart-block-criteria/{id} | |
|[**smartBlockCriteriaUpdate**](#smartblockcriteriaupdate) | **PUT** /api/v2/smart-block-criteria/{id} | |

# **smartBlockCriteriaCreate**
> SmartBlockCriteria smartBlockCriteriaCreate(smartBlockCriteria)


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration,
    SmartBlockCriteria
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

let smartBlockCriteria: SmartBlockCriteria; //

const { status, data } = await apiInstance.smartBlockCriteriaCreate(
    smartBlockCriteria
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlockCriteria** | **SmartBlockCriteria**|  | |


### Return type

**SmartBlockCriteria**

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

# **smartBlockCriteriaDestroy**
> smartBlockCriteriaDestroy()


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

let id: number; //A unique integer value identifying this smart block criteria. (default to undefined)

const { status, data } = await apiInstance.smartBlockCriteriaDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block criteria. | defaults to undefined|


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

# **smartBlockCriteriaList**
> Array<SmartBlockCriteria> smartBlockCriteriaList()


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

const { status, data } = await apiInstance.smartBlockCriteriaList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SmartBlockCriteria>**

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

# **smartBlockCriteriaPartialUpdate**
> SmartBlockCriteria smartBlockCriteriaPartialUpdate()


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration,
    PatchedSmartBlockCriteria
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

let id: number; //A unique integer value identifying this smart block criteria. (default to undefined)
let patchedSmartBlockCriteria: PatchedSmartBlockCriteria; // (optional)

const { status, data } = await apiInstance.smartBlockCriteriaPartialUpdate(
    id,
    patchedSmartBlockCriteria
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSmartBlockCriteria** | **PatchedSmartBlockCriteria**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block criteria. | defaults to undefined|


### Return type

**SmartBlockCriteria**

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

# **smartBlockCriteriaRetrieve**
> SmartBlockCriteria smartBlockCriteriaRetrieve()


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

let id: number; //A unique integer value identifying this smart block criteria. (default to undefined)

const { status, data } = await apiInstance.smartBlockCriteriaRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block criteria. | defaults to undefined|


### Return type

**SmartBlockCriteria**

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

# **smartBlockCriteriaUpdate**
> SmartBlockCriteria smartBlockCriteriaUpdate(smartBlockCriteria)


### Example

```typescript
import {
    SmartBlockCriteriaApi,
    Configuration,
    SmartBlockCriteria
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockCriteriaApi(configuration);

let id: number; //A unique integer value identifying this smart block criteria. (default to undefined)
let smartBlockCriteria: SmartBlockCriteria; //

const { status, data } = await apiInstance.smartBlockCriteriaUpdate(
    id,
    smartBlockCriteria
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlockCriteria** | **SmartBlockCriteria**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block criteria. | defaults to undefined|


### Return type

**SmartBlockCriteria**

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

