# LibreTimeApi.SmartBlockCriteriaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smartBlockCriteriaCreate**](SmartBlockCriteriaApi.md#smartBlockCriteriaCreate) | **POST** /api/v2/smart-block-criteria/ | 
[**smartBlockCriteriaDestroy**](SmartBlockCriteriaApi.md#smartBlockCriteriaDestroy) | **DELETE** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaList**](SmartBlockCriteriaApi.md#smartBlockCriteriaList) | **GET** /api/v2/smart-block-criteria/ | 
[**smartBlockCriteriaPartialUpdate**](SmartBlockCriteriaApi.md#smartBlockCriteriaPartialUpdate) | **PATCH** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaRetrieve**](SmartBlockCriteriaApi.md#smartBlockCriteriaRetrieve) | **GET** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaUpdate**](SmartBlockCriteriaApi.md#smartBlockCriteriaUpdate) | **PUT** /api/v2/smart-block-criteria/{id}/ | 



## smartBlockCriteriaCreate

> SmartBlockCriteria smartBlockCriteriaCreate(smartBlockCriteria)



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
let smartBlockCriteria = new LibreTimeApi.SmartBlockCriteria(); // SmartBlockCriteria | 
apiInstance.smartBlockCriteriaCreate(smartBlockCriteria, (error, data, response) => {
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
 **smartBlockCriteria** | [**SmartBlockCriteria**](SmartBlockCriteria.md)|  | 

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## smartBlockCriteriaDestroy

> smartBlockCriteriaDestroy(id)



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
let id = 56; // Number | A unique integer value identifying this smart block criteria.
apiInstance.smartBlockCriteriaDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block criteria. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## smartBlockCriteriaList

> [SmartBlockCriteria] smartBlockCriteriaList()



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
apiInstance.smartBlockCriteriaList((error, data, response) => {
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

[**[SmartBlockCriteria]**](SmartBlockCriteria.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## smartBlockCriteriaPartialUpdate

> SmartBlockCriteria smartBlockCriteriaPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
let id = 56; // Number | A unique integer value identifying this smart block criteria.
let opts = {
  'patchedSmartBlockCriteria': new LibreTimeApi.PatchedSmartBlockCriteria() // PatchedSmartBlockCriteria | 
};
apiInstance.smartBlockCriteriaPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block criteria. | 
 **patchedSmartBlockCriteria** | [**PatchedSmartBlockCriteria**](PatchedSmartBlockCriteria.md)|  | [optional] 

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## smartBlockCriteriaRetrieve

> SmartBlockCriteria smartBlockCriteriaRetrieve(id)



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
let id = 56; // Number | A unique integer value identifying this smart block criteria.
apiInstance.smartBlockCriteriaRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block criteria. | 

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## smartBlockCriteriaUpdate

> SmartBlockCriteria smartBlockCriteriaUpdate(id, smartBlockCriteria)



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

let apiInstance = new LibreTimeApi.SmartBlockCriteriaApi();
let id = 56; // Number | A unique integer value identifying this smart block criteria.
let smartBlockCriteria = new LibreTimeApi.SmartBlockCriteria(); // SmartBlockCriteria | 
apiInstance.smartBlockCriteriaUpdate(id, smartBlockCriteria, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block criteria. | 
 **smartBlockCriteria** | [**SmartBlockCriteria**](SmartBlockCriteria.md)|  | 

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

