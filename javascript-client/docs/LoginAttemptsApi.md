# LoginAttemptsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loginAttemptsCreate**](#loginattemptscreate) | **POST** /api/v2/login-attempts | |
|[**loginAttemptsDestroy**](#loginattemptsdestroy) | **DELETE** /api/v2/login-attempts/{ip} | |
|[**loginAttemptsList**](#loginattemptslist) | **GET** /api/v2/login-attempts | |
|[**loginAttemptsPartialUpdate**](#loginattemptspartialupdate) | **PATCH** /api/v2/login-attempts/{ip} | |
|[**loginAttemptsRetrieve**](#loginattemptsretrieve) | **GET** /api/v2/login-attempts/{ip} | |
|[**loginAttemptsUpdate**](#loginattemptsupdate) | **PUT** /api/v2/login-attempts/{ip} | |

# **loginAttemptsCreate**
> LoginAttempt loginAttemptsCreate(loginAttempt)


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration,
    LoginAttempt
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

let loginAttempt: LoginAttempt; //

const { status, data } = await apiInstance.loginAttemptsCreate(
    loginAttempt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginAttempt** | **LoginAttempt**|  | |


### Return type

**LoginAttempt**

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

# **loginAttemptsDestroy**
> loginAttemptsDestroy()


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

let ip: string; //A unique value identifying this login attempt. (default to undefined)

const { status, data } = await apiInstance.loginAttemptsDestroy(
    ip
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ip** | [**string**] | A unique value identifying this login attempt. | defaults to undefined|


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

# **loginAttemptsList**
> Array<LoginAttempt> loginAttemptsList()


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

const { status, data } = await apiInstance.loginAttemptsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<LoginAttempt>**

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

# **loginAttemptsPartialUpdate**
> LoginAttempt loginAttemptsPartialUpdate()


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration,
    PatchedLoginAttempt
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

let ip: string; //A unique value identifying this login attempt. (default to undefined)
let patchedLoginAttempt: PatchedLoginAttempt; // (optional)

const { status, data } = await apiInstance.loginAttemptsPartialUpdate(
    ip,
    patchedLoginAttempt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLoginAttempt** | **PatchedLoginAttempt**|  | |
| **ip** | [**string**] | A unique value identifying this login attempt. | defaults to undefined|


### Return type

**LoginAttempt**

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

# **loginAttemptsRetrieve**
> LoginAttempt loginAttemptsRetrieve()


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

let ip: string; //A unique value identifying this login attempt. (default to undefined)

const { status, data } = await apiInstance.loginAttemptsRetrieve(
    ip
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ip** | [**string**] | A unique value identifying this login attempt. | defaults to undefined|


### Return type

**LoginAttempt**

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

# **loginAttemptsUpdate**
> LoginAttempt loginAttemptsUpdate(loginAttempt)


### Example

```typescript
import {
    LoginAttemptsApi,
    Configuration,
    LoginAttempt
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new LoginAttemptsApi(configuration);

let ip: string; //A unique value identifying this login attempt. (default to undefined)
let loginAttempt: LoginAttempt; //

const { status, data } = await apiInstance.loginAttemptsUpdate(
    ip,
    loginAttempt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginAttempt** | **LoginAttempt**|  | |
| **ip** | [**string**] | A unique value identifying this login attempt. | defaults to undefined|


### Return type

**LoginAttempt**

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

