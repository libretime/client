# ThirdPartyTrackReferencesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**thirdPartyTrackReferencesCreate**](#thirdpartytrackreferencescreate) | **POST** /api/v2/third-party-track-references | |
|[**thirdPartyTrackReferencesDestroy**](#thirdpartytrackreferencesdestroy) | **DELETE** /api/v2/third-party-track-references/{id} | |
|[**thirdPartyTrackReferencesList**](#thirdpartytrackreferenceslist) | **GET** /api/v2/third-party-track-references | |
|[**thirdPartyTrackReferencesPartialUpdate**](#thirdpartytrackreferencespartialupdate) | **PATCH** /api/v2/third-party-track-references/{id} | |
|[**thirdPartyTrackReferencesRetrieve**](#thirdpartytrackreferencesretrieve) | **GET** /api/v2/third-party-track-references/{id} | |
|[**thirdPartyTrackReferencesUpdate**](#thirdpartytrackreferencesupdate) | **PUT** /api/v2/third-party-track-references/{id} | |

# **thirdPartyTrackReferencesCreate**
> ThirdPartyTrackReference thirdPartyTrackReferencesCreate(thirdPartyTrackReference)


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration,
    ThirdPartyTrackReference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

let thirdPartyTrackReference: ThirdPartyTrackReference; //

const { status, data } = await apiInstance.thirdPartyTrackReferencesCreate(
    thirdPartyTrackReference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyTrackReference** | **ThirdPartyTrackReference**|  | |


### Return type

**ThirdPartyTrackReference**

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

# **thirdPartyTrackReferencesDestroy**
> thirdPartyTrackReferencesDestroy()


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

let id: number; //A unique integer value identifying this third party track reference. (default to undefined)

const { status, data } = await apiInstance.thirdPartyTrackReferencesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this third party track reference. | defaults to undefined|


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

# **thirdPartyTrackReferencesList**
> Array<ThirdPartyTrackReference> thirdPartyTrackReferencesList()


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

const { status, data } = await apiInstance.thirdPartyTrackReferencesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ThirdPartyTrackReference>**

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

# **thirdPartyTrackReferencesPartialUpdate**
> ThirdPartyTrackReference thirdPartyTrackReferencesPartialUpdate()


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration,
    PatchedThirdPartyTrackReference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

let id: number; //A unique integer value identifying this third party track reference. (default to undefined)
let patchedThirdPartyTrackReference: PatchedThirdPartyTrackReference; // (optional)

const { status, data } = await apiInstance.thirdPartyTrackReferencesPartialUpdate(
    id,
    patchedThirdPartyTrackReference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedThirdPartyTrackReference** | **PatchedThirdPartyTrackReference**|  | |
| **id** | [**number**] | A unique integer value identifying this third party track reference. | defaults to undefined|


### Return type

**ThirdPartyTrackReference**

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

# **thirdPartyTrackReferencesRetrieve**
> ThirdPartyTrackReference thirdPartyTrackReferencesRetrieve()


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

let id: number; //A unique integer value identifying this third party track reference. (default to undefined)

const { status, data } = await apiInstance.thirdPartyTrackReferencesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this third party track reference. | defaults to undefined|


### Return type

**ThirdPartyTrackReference**

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

# **thirdPartyTrackReferencesUpdate**
> ThirdPartyTrackReference thirdPartyTrackReferencesUpdate(thirdPartyTrackReference)


### Example

```typescript
import {
    ThirdPartyTrackReferencesApi,
    Configuration,
    ThirdPartyTrackReference
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new ThirdPartyTrackReferencesApi(configuration);

let id: number; //A unique integer value identifying this third party track reference. (default to undefined)
let thirdPartyTrackReference: ThirdPartyTrackReference; //

const { status, data } = await apiInstance.thirdPartyTrackReferencesUpdate(
    id,
    thirdPartyTrackReference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyTrackReference** | **ThirdPartyTrackReference**|  | |
| **id** | [**number**] | A unique integer value identifying this third party track reference. | defaults to undefined|


### Return type

**ThirdPartyTrackReference**

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

