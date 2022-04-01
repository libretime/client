# LibreTimeApi.LoginAttemptsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginAttemptsCreate**](LoginAttemptsApi.md#loginAttemptsCreate) | **POST** /api/v2/login-attempts/ | 
[**loginAttemptsDestroy**](LoginAttemptsApi.md#loginAttemptsDestroy) | **DELETE** /api/v2/login-attempts/{ip}/ | 
[**loginAttemptsList**](LoginAttemptsApi.md#loginAttemptsList) | **GET** /api/v2/login-attempts/ | 
[**loginAttemptsPartialUpdate**](LoginAttemptsApi.md#loginAttemptsPartialUpdate) | **PATCH** /api/v2/login-attempts/{ip}/ | 
[**loginAttemptsRetrieve**](LoginAttemptsApi.md#loginAttemptsRetrieve) | **GET** /api/v2/login-attempts/{ip}/ | 
[**loginAttemptsUpdate**](LoginAttemptsApi.md#loginAttemptsUpdate) | **PUT** /api/v2/login-attempts/{ip}/ | 



## loginAttemptsCreate

> LoginAttempt loginAttemptsCreate(opts)



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
let opts = {
  'loginAttempt': new LibreTimeApi.LoginAttempt() // LoginAttempt | 
};
apiInstance.loginAttemptsCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginAttempt** | [**LoginAttempt**](LoginAttempt.md)|  | [optional] 

### Return type

[**LoginAttempt**](LoginAttempt.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## loginAttemptsDestroy

> loginAttemptsDestroy(ip)



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
let ip = "ip_example"; // String | A unique value identifying this login attempt.
apiInstance.loginAttemptsDestroy(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| A unique value identifying this login attempt. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## loginAttemptsList

> [LoginAttempt] loginAttemptsList()



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
apiInstance.loginAttemptsList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[LoginAttempt]**](LoginAttempt.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginAttemptsPartialUpdate

> LoginAttempt loginAttemptsPartialUpdate(ip, opts)



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
let ip = "ip_example"; // String | A unique value identifying this login attempt.
let opts = {
  'patchedLoginAttempt': new LibreTimeApi.PatchedLoginAttempt() // PatchedLoginAttempt | 
};
apiInstance.loginAttemptsPartialUpdate(ip, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| A unique value identifying this login attempt. | 
 **patchedLoginAttempt** | [**PatchedLoginAttempt**](PatchedLoginAttempt.md)|  | [optional] 

### Return type

[**LoginAttempt**](LoginAttempt.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## loginAttemptsRetrieve

> LoginAttempt loginAttemptsRetrieve(ip)



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
let ip = "ip_example"; // String | A unique value identifying this login attempt.
apiInstance.loginAttemptsRetrieve(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| A unique value identifying this login attempt. | 

### Return type

[**LoginAttempt**](LoginAttempt.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginAttemptsUpdate

> LoginAttempt loginAttemptsUpdate(ip, opts)



### Example

```javascript
import LibreTimeApi from 'libre_time_api';
let defaultClient = LibreTimeApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new LibreTimeApi.LoginAttemptsApi();
let ip = "ip_example"; // String | A unique value identifying this login attempt.
let opts = {
  'loginAttempt': new LibreTimeApi.LoginAttempt() // LoginAttempt | 
};
apiInstance.loginAttemptsUpdate(ip, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| A unique value identifying this login attempt. | 
 **loginAttempt** | [**LoginAttempt**](LoginAttempt.md)|  | [optional] 

### Return type

[**LoginAttempt**](LoginAttempt.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

