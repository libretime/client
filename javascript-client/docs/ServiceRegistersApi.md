# LibreTimeApi.ServiceRegistersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceRegistersCreate**](ServiceRegistersApi.md#serviceRegistersCreate) | **POST** /api/v2/service-registers/ | 
[**serviceRegistersDestroy**](ServiceRegistersApi.md#serviceRegistersDestroy) | **DELETE** /api/v2/service-registers/{name}/ | 
[**serviceRegistersList**](ServiceRegistersApi.md#serviceRegistersList) | **GET** /api/v2/service-registers/ | 
[**serviceRegistersPartialUpdate**](ServiceRegistersApi.md#serviceRegistersPartialUpdate) | **PATCH** /api/v2/service-registers/{name}/ | 
[**serviceRegistersRetrieve**](ServiceRegistersApi.md#serviceRegistersRetrieve) | **GET** /api/v2/service-registers/{name}/ | 
[**serviceRegistersUpdate**](ServiceRegistersApi.md#serviceRegistersUpdate) | **PUT** /api/v2/service-registers/{name}/ | 



## serviceRegistersCreate

> ServiceRegister serviceRegistersCreate(serviceRegister)



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
let serviceRegister = new LibreTimeApi.ServiceRegister(); // ServiceRegister | 
apiInstance.serviceRegistersCreate(serviceRegister, (error, data, response) => {
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
 **serviceRegister** | [**ServiceRegister**](ServiceRegister.md)|  | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## serviceRegistersDestroy

> serviceRegistersDestroy(name)



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
let name = "name_example"; // String | A unique value identifying this service register.
apiInstance.serviceRegistersDestroy(name, (error, data, response) => {
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
 **name** | **String**| A unique value identifying this service register. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## serviceRegistersList

> [ServiceRegister] serviceRegistersList()



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
apiInstance.serviceRegistersList((error, data, response) => {
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

[**[ServiceRegister]**](ServiceRegister.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serviceRegistersPartialUpdate

> ServiceRegister serviceRegistersPartialUpdate(name, opts)



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
let name = "name_example"; // String | A unique value identifying this service register.
let opts = {
  'patchedServiceRegister': new LibreTimeApi.PatchedServiceRegister() // PatchedServiceRegister | 
};
apiInstance.serviceRegistersPartialUpdate(name, opts, (error, data, response) => {
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
 **name** | **String**| A unique value identifying this service register. | 
 **patchedServiceRegister** | [**PatchedServiceRegister**](PatchedServiceRegister.md)|  | [optional] 

### Return type

[**ServiceRegister**](ServiceRegister.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## serviceRegistersRetrieve

> ServiceRegister serviceRegistersRetrieve(name)



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
let name = "name_example"; // String | A unique value identifying this service register.
apiInstance.serviceRegistersRetrieve(name, (error, data, response) => {
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
 **name** | **String**| A unique value identifying this service register. | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serviceRegistersUpdate

> ServiceRegister serviceRegistersUpdate(name, serviceRegister)



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

let apiInstance = new LibreTimeApi.ServiceRegistersApi();
let name = "name_example"; // String | A unique value identifying this service register.
let serviceRegister = new LibreTimeApi.ServiceRegister(); // ServiceRegister | 
apiInstance.serviceRegistersUpdate(name, serviceRegister, (error, data, response) => {
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
 **name** | **String**| A unique value identifying this service register. | 
 **serviceRegister** | [**ServiceRegister**](ServiceRegister.md)|  | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

