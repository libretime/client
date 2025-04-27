# PreferencesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**preferencesCreate**](#preferencescreate) | **POST** /api/v2/preferences | |
|[**preferencesDestroy**](#preferencesdestroy) | **DELETE** /api/v2/preferences/{id} | |
|[**preferencesList**](#preferenceslist) | **GET** /api/v2/preferences | |
|[**preferencesPartialUpdate**](#preferencespartialupdate) | **PATCH** /api/v2/preferences/{id} | |
|[**preferencesRetrieve**](#preferencesretrieve) | **GET** /api/v2/preferences/{id} | |
|[**preferencesUpdate**](#preferencesupdate) | **PUT** /api/v2/preferences/{id} | |

# **preferencesCreate**
> Preference preferencesCreate(preference)


### Example

```typescript
import {
    PreferencesApi,
    Configuration,
    Preference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

let preference: Preference; //

const { status, data } = await apiInstance.preferencesCreate(
    preference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **preference** | **Preference**|  | |


### Return type

**Preference**

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

# **preferencesDestroy**
> preferencesDestroy()


### Example

```typescript
import {
    PreferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

let id: number; //A unique integer value identifying this preference. (default to undefined)

const { status, data } = await apiInstance.preferencesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this preference. | defaults to undefined|


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

# **preferencesList**
> Array<Preference> preferencesList()


### Example

```typescript
import {
    PreferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

const { status, data } = await apiInstance.preferencesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Preference>**

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

# **preferencesPartialUpdate**
> Preference preferencesPartialUpdate()


### Example

```typescript
import {
    PreferencesApi,
    Configuration,
    PatchedPreference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

let id: number; //A unique integer value identifying this preference. (default to undefined)
let patchedPreference: PatchedPreference; // (optional)

const { status, data } = await apiInstance.preferencesPartialUpdate(
    id,
    patchedPreference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPreference** | **PatchedPreference**|  | |
| **id** | [**number**] | A unique integer value identifying this preference. | defaults to undefined|


### Return type

**Preference**

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

# **preferencesRetrieve**
> Preference preferencesRetrieve()


### Example

```typescript
import {
    PreferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

let id: number; //A unique integer value identifying this preference. (default to undefined)

const { status, data } = await apiInstance.preferencesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this preference. | defaults to undefined|


### Return type

**Preference**

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

# **preferencesUpdate**
> Preference preferencesUpdate(preference)


### Example

```typescript
import {
    PreferencesApi,
    Configuration,
    Preference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new PreferencesApi(configuration);

let id: number; //A unique integer value identifying this preference. (default to undefined)
let preference: Preference; //

const { status, data } = await apiInstance.preferencesUpdate(
    id,
    preference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **preference** | **Preference**|  | |
| **id** | [**number**] | A unique integer value identifying this preference. | defaults to undefined|


### Return type

**Preference**

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

