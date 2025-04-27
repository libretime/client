# PlayoutHistoryTemplatesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**playoutHistoryTemplatesCreate**](#playouthistorytemplatescreate) | **POST** /api/v2/playout-history-templates | |
|[**playoutHistoryTemplatesDestroy**](#playouthistorytemplatesdestroy) | **DELETE** /api/v2/playout-history-templates/{id} | |
|[**playoutHistoryTemplatesList**](#playouthistorytemplateslist) | **GET** /api/v2/playout-history-templates | |
|[**playoutHistoryTemplatesPartialUpdate**](#playouthistorytemplatespartialupdate) | **PATCH** /api/v2/playout-history-templates/{id} | |
|[**playoutHistoryTemplatesRetrieve**](#playouthistorytemplatesretrieve) | **GET** /api/v2/playout-history-templates/{id} | |
|[**playoutHistoryTemplatesUpdate**](#playouthistorytemplatesupdate) | **PUT** /api/v2/playout-history-templates/{id} | |

# **playoutHistoryTemplatesCreate**
> PlayoutHistoryTemplate playoutHistoryTemplatesCreate(playoutHistoryTemplate)


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration,
    PlayoutHistoryTemplate
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

let playoutHistoryTemplate: PlayoutHistoryTemplate; //

const { status, data } = await apiInstance.playoutHistoryTemplatesCreate(
    playoutHistoryTemplate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryTemplate** | **PlayoutHistoryTemplate**|  | |


### Return type

**PlayoutHistoryTemplate**

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

# **playoutHistoryTemplatesDestroy**
> playoutHistoryTemplatesDestroy()


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

let id: number; //A unique integer value identifying this playout history template. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryTemplatesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history template. | defaults to undefined|


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

# **playoutHistoryTemplatesList**
> Array<PlayoutHistoryTemplate> playoutHistoryTemplatesList()


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

const { status, data } = await apiInstance.playoutHistoryTemplatesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlayoutHistoryTemplate>**

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

# **playoutHistoryTemplatesPartialUpdate**
> PlayoutHistoryTemplate playoutHistoryTemplatesPartialUpdate()


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration,
    PatchedPlayoutHistoryTemplate
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

let id: number; //A unique integer value identifying this playout history template. (default to undefined)
let patchedPlayoutHistoryTemplate: PatchedPlayoutHistoryTemplate; // (optional)

const { status, data } = await apiInstance.playoutHistoryTemplatesPartialUpdate(
    id,
    patchedPlayoutHistoryTemplate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPlayoutHistoryTemplate** | **PatchedPlayoutHistoryTemplate**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history template. | defaults to undefined|


### Return type

**PlayoutHistoryTemplate**

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

# **playoutHistoryTemplatesRetrieve**
> PlayoutHistoryTemplate playoutHistoryTemplatesRetrieve()


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

let id: number; //A unique integer value identifying this playout history template. (default to undefined)

const { status, data } = await apiInstance.playoutHistoryTemplatesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this playout history template. | defaults to undefined|


### Return type

**PlayoutHistoryTemplate**

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

# **playoutHistoryTemplatesUpdate**
> PlayoutHistoryTemplate playoutHistoryTemplatesUpdate(playoutHistoryTemplate)


### Example

```typescript
import {
    PlayoutHistoryTemplatesApi,
    Configuration,
    PlayoutHistoryTemplate
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PlayoutHistoryTemplatesApi(configuration);

let id: number; //A unique integer value identifying this playout history template. (default to undefined)
let playoutHistoryTemplate: PlayoutHistoryTemplate; //

const { status, data } = await apiInstance.playoutHistoryTemplatesUpdate(
    id,
    playoutHistoryTemplate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **playoutHistoryTemplate** | **PlayoutHistoryTemplate**|  | |
| **id** | [**number**] | A unique integer value identifying this playout history template. | defaults to undefined|


### Return type

**PlayoutHistoryTemplate**

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

