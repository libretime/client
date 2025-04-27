# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersCreate**](#userscreate) | **POST** /api/v2/users | |
|[**usersDestroy**](#usersdestroy) | **DELETE** /api/v2/users/{id} | |
|[**usersList**](#userslist) | **GET** /api/v2/users | |
|[**usersPartialUpdate**](#userspartialupdate) | **PATCH** /api/v2/users/{id} | |
|[**usersRetrieve**](#usersretrieve) | **GET** /api/v2/users/{id} | |
|[**usersUpdate**](#usersupdate) | **PUT** /api/v2/users/{id} | |

# **usersCreate**
> User usersCreate(user)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    User
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let user: User; //

const { status, data } = await apiInstance.usersCreate(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |


### Return type

**User**

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

# **usersDestroy**
> usersDestroy()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)

const { status, data } = await apiInstance.usersDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


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

# **usersList**
> Array<User> usersList()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.usersList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<User>**

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

# **usersPartialUpdate**
> User usersPartialUpdate()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PatchedUser
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let patchedUser: PatchedUser; // (optional)

const { status, data } = await apiInstance.usersPartialUpdate(
    id,
    patchedUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUser** | **PatchedUser**|  | |
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

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

# **usersRetrieve**
> User usersRetrieve()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)

const { status, data } = await apiInstance.usersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

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

# **usersUpdate**
> User usersUpdate(user)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    User
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let user: User; //

const { status, data } = await apiInstance.usersUpdate(
    id,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

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

