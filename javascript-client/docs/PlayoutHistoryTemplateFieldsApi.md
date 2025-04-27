# PlayoutHistoryTemplateFieldsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playoutHistoryTemplateFieldsCreate**](#playouthistorytemplatefieldscreate) | **POST** /api/v2/playout-history-template-fields | |
|[**playoutHistoryTemplateFieldsDestroy**](#playouthistorytemplatefieldsdestroy) | **DELETE** /api/v2/playout-history-template-fields/{id} | |
|[**playoutHistoryTemplateFieldsList**](#playouthistorytemplatefieldslist) | **GET** /api/v2/playout-history-template-fields | |
|[**playoutHistoryTemplateFieldsPartialUpdate**](#playouthistorytemplatefieldspartialupdate) | **PATCH** /api/v2/playout-history-template-fields/{id} | |
|[**playoutHistoryTemplateFieldsRetrieve**](#playouthistorytemplatefieldsretrieve) | **GET** /api/v2/playout-history-template-fields/{id} | |
|[**playoutHistoryTemplateFieldsUpdate**](#playouthistorytemplatefieldsupdate) | **PUT** /api/v2/playout-history-template-fields/{id} | |

# **playoutHistoryTemplateFieldsCreate**
> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsCreate(playoutHistoryTemplateField)


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration,
    PlayoutHistoryTemplateField
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

let playoutHistoryTemplateField: PlayoutHistoryTemplateField; //

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsCreate(
    playoutHistoryTemplateField
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryTemplateField** | **PlayoutHistoryTemplateField**|  | |


### Return type

**PlayoutHistoryTemplateField**

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

# **playoutHistoryTemplateFieldsDestroy**
> playoutHistoryTemplateFieldsDestroy()


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

let id: number; //A unique integer value identifying this playout history template field. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history template field. | defaults to undefined|


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

# **playoutHistoryTemplateFieldsList**
> Array<PlayoutHistoryTemplateField> playoutHistoryTemplateFieldsList()


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlayoutHistoryTemplateField>**

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

# **playoutHistoryTemplateFieldsPartialUpdate**
> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsPartialUpdate()


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration,
    PatchedPlayoutHistoryTemplateField
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

let id: number; //A unique integer value identifying this playout history template field. (default to undefined)
let patchedPlayoutHistoryTemplateField: PatchedPlayoutHistoryTemplateField; // (optional)

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsPartialUpdate(
    id,
    patchedPlayoutHistoryTemplateField
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlayoutHistoryTemplateField** | **PatchedPlayoutHistoryTemplateField**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history template field. | defaults to undefined|


### Return type

**PlayoutHistoryTemplateField**

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

# **playoutHistoryTemplateFieldsRetrieve**
> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsRetrieve()


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

let id: number; //A unique integer value identifying this playout history template field. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history template field. | defaults to undefined|


### Return type

**PlayoutHistoryTemplateField**

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

# **playoutHistoryTemplateFieldsUpdate**
> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsUpdate(playoutHistoryTemplateField)


### Example

```typescript
import {
    PlayoutHistoryTemplateFieldsApi,
    Configuration,
    PlayoutHistoryTemplateField
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplateFieldsApi(configuration);

let id: number; //A unique integer value identifying this playout history template field. (default to undefined)
let playoutHistoryTemplateField: PlayoutHistoryTemplateField; //

const { status, data } = await apiInstance.playoutHistoryTemplateFieldsUpdate(
    id,
    playoutHistoryTemplateField
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryTemplateField** | **PlayoutHistoryTemplateField**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history template field. | defaults to undefined|


### Return type

**PlayoutHistoryTemplateField**

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

