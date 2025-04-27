# SmartBlockContentsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**smartBlockContentsCreate**](#smartblockcontentscreate) | **POST** /api/v2/smart-block-contents | |
|[**smartBlockContentsDestroy**](#smartblockcontentsdestroy) | **DELETE** /api/v2/smart-block-contents/{id} | |
|[**smartBlockContentsList**](#smartblockcontentslist) | **GET** /api/v2/smart-block-contents | |
|[**smartBlockContentsPartialUpdate**](#smartblockcontentspartialupdate) | **PATCH** /api/v2/smart-block-contents/{id} | |
|[**smartBlockContentsRetrieve**](#smartblockcontentsretrieve) | **GET** /api/v2/smart-block-contents/{id} | |
|[**smartBlockContentsUpdate**](#smartblockcontentsupdate) | **PUT** /api/v2/smart-block-contents/{id} | |

# **smartBlockContentsCreate**
> SmartBlockContent smartBlockContentsCreate(smartBlockContent)


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration,
    SmartBlockContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

let smartBlockContent: SmartBlockContent; //

const { status, data } = await apiInstance.smartBlockContentsCreate(
    smartBlockContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlockContent** | **SmartBlockContent**|  | |


### Return type

**SmartBlockContent**

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

# **smartBlockContentsDestroy**
> smartBlockContentsDestroy()


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

let id: number; //A unique integer value identifying this smart block content. (default to undefined)

const { status, data } = await apiInstance.smartBlockContentsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block content. | defaults to undefined|


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

# **smartBlockContentsList**
> Array<SmartBlockContent> smartBlockContentsList()


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

const { status, data } = await apiInstance.smartBlockContentsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SmartBlockContent>**

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

# **smartBlockContentsPartialUpdate**
> SmartBlockContent smartBlockContentsPartialUpdate()


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration,
    PatchedSmartBlockContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

let id: number; //A unique integer value identifying this smart block content. (default to undefined)
let patchedSmartBlockContent: PatchedSmartBlockContent; // (optional)

const { status, data } = await apiInstance.smartBlockContentsPartialUpdate(
    id,
    patchedSmartBlockContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSmartBlockContent** | **PatchedSmartBlockContent**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block content. | defaults to undefined|


### Return type

**SmartBlockContent**

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

# **smartBlockContentsRetrieve**
> SmartBlockContent smartBlockContentsRetrieve()


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

let id: number; //A unique integer value identifying this smart block content. (default to undefined)

const { status, data } = await apiInstance.smartBlockContentsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smart block content. | defaults to undefined|


### Return type

**SmartBlockContent**

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

# **smartBlockContentsUpdate**
> SmartBlockContent smartBlockContentsUpdate(smartBlockContent)


### Example

```typescript
import {
    SmartBlockContentsApi,
    Configuration,
    SmartBlockContent
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new SmartBlockContentsApi(configuration);

let id: number; //A unique integer value identifying this smart block content. (default to undefined)
let smartBlockContent: SmartBlockContent; //

const { status, data } = await apiInstance.smartBlockContentsUpdate(
    id,
    smartBlockContent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartBlockContent** | **SmartBlockContent**|  | |
| **id** | [**number**] | A unique integer value identifying this smart block content. | defaults to undefined|


### Return type

**SmartBlockContent**

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

