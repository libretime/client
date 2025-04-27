# UserTokensApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**userTokensCreate**](#usertokenscreate) | **POST** /api/v2/user-tokens | |
|[**userTokensDestroy**](#usertokensdestroy) | **DELETE** /api/v2/user-tokens/{id} | |
|[**userTokensList**](#usertokenslist) | **GET** /api/v2/user-tokens | |
|[**userTokensPartialUpdate**](#usertokenspartialupdate) | **PATCH** /api/v2/user-tokens/{id} | |
|[**userTokensRetrieve**](#usertokensretrieve) | **GET** /api/v2/user-tokens/{id} | |
|[**userTokensUpdate**](#usertokensupdate) | **PUT** /api/v2/user-tokens/{id} | |

# **userTokensCreate**
> UserToken userTokensCreate(userToken)


### Example

```typescript
import {
    UserTokensApi,
    Configuration,
    UserToken
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

let userToken: UserToken; //

const { status, data } = await apiInstance.userTokensCreate(
    userToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | **UserToken**|  | |


### Return type

**UserToken**

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

# **userTokensDestroy**
> userTokensDestroy()


### Example

```typescript
import {
    UserTokensApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

let id: number; //A unique integer value identifying this user token. (default to undefined)

const { status, data } = await apiInstance.userTokensDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user token. | defaults to undefined|


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

# **userTokensList**
> Array<UserToken> userTokensList()


### Example

```typescript
import {
    UserTokensApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

const { status, data } = await apiInstance.userTokensList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserToken>**

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

# **userTokensPartialUpdate**
> UserToken userTokensPartialUpdate()


### Example

```typescript
import {
    UserTokensApi,
    Configuration,
    PatchedUserToken
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

let id: number; //A unique integer value identifying this user token. (default to undefined)
let patchedUserToken: PatchedUserToken; // (optional)

const { status, data } = await apiInstance.userTokensPartialUpdate(
    id,
    patchedUserToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUserToken** | **PatchedUserToken**|  | |
| **id** | [**number**] | A unique integer value identifying this user token. | defaults to undefined|


### Return type

**UserToken**

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

# **userTokensRetrieve**
> UserToken userTokensRetrieve()


### Example

```typescript
import {
    UserTokensApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

let id: number; //A unique integer value identifying this user token. (default to undefined)

const { status, data } = await apiInstance.userTokensRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user token. | defaults to undefined|


### Return type

**UserToken**

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

# **userTokensUpdate**
> UserToken userTokensUpdate(userToken)


### Example

```typescript
import {
    UserTokensApi,
    Configuration,
    UserToken
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UserTokensApi(configuration);

let id: number; //A unique integer value identifying this user token. (default to undefined)
let userToken: UserToken; //

const { status, data } = await apiInstance.userTokensUpdate(
    id,
    userToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | **UserToken**|  | |
| **id** | [**number**] | A unique integer value identifying this user token. | defaults to undefined|


### Return type

**UserToken**

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

