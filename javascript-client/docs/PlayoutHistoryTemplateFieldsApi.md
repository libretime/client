# LibreTimeApi.PlayoutHistoryTemplateFieldsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playoutHistoryTemplateFieldsCreate**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsCreate) | **POST** /api/v2/playout-history-template-fields/ | 
[**playoutHistoryTemplateFieldsDestroy**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsDestroy) | **DELETE** /api/v2/playout-history-template-fields/{id}/ | 
[**playoutHistoryTemplateFieldsList**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsList) | **GET** /api/v2/playout-history-template-fields/ | 
[**playoutHistoryTemplateFieldsPartialUpdate**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsPartialUpdate) | **PATCH** /api/v2/playout-history-template-fields/{id}/ | 
[**playoutHistoryTemplateFieldsRetrieve**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsRetrieve) | **GET** /api/v2/playout-history-template-fields/{id}/ | 
[**playoutHistoryTemplateFieldsUpdate**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsUpdate) | **PUT** /api/v2/playout-history-template-fields/{id}/ | 



## playoutHistoryTemplateFieldsCreate

> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsCreate(playoutHistoryTemplateField)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
let playoutHistoryTemplateField = new LibreTimeApi.PlayoutHistoryTemplateField(); // PlayoutHistoryTemplateField | 
apiInstance.playoutHistoryTemplateFieldsCreate(playoutHistoryTemplateField, (error, data, response) => {
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
 **playoutHistoryTemplateField** | [**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)|  | 

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryTemplateFieldsDestroy

> playoutHistoryTemplateFieldsDestroy(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
let id = 56; // Number | A unique integer value identifying this playout history template field.
apiInstance.playoutHistoryTemplateFieldsDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template field. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## playoutHistoryTemplateFieldsList

> [PlayoutHistoryTemplateField] playoutHistoryTemplateFieldsList()



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
apiInstance.playoutHistoryTemplateFieldsList((error, data, response) => {
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

[**[PlayoutHistoryTemplateField]**](PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryTemplateFieldsPartialUpdate

> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
let id = 56; // Number | A unique integer value identifying this playout history template field.
let opts = {
  'patchedPlayoutHistoryTemplateField': new LibreTimeApi.PatchedPlayoutHistoryTemplateField() // PatchedPlayoutHistoryTemplateField | 
};
apiInstance.playoutHistoryTemplateFieldsPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template field. | 
 **patchedPlayoutHistoryTemplateField** | [**PatchedPlayoutHistoryTemplateField**](PatchedPlayoutHistoryTemplateField.md)|  | [optional] 

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryTemplateFieldsRetrieve

> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsRetrieve(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
let id = 56; // Number | A unique integer value identifying this playout history template field.
apiInstance.playoutHistoryTemplateFieldsRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template field. | 

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryTemplateFieldsUpdate

> PlayoutHistoryTemplateField playoutHistoryTemplateFieldsUpdate(id, playoutHistoryTemplateField)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplateFieldsApi();
let id = 56; // Number | A unique integer value identifying this playout history template field.
let playoutHistoryTemplateField = new LibreTimeApi.PlayoutHistoryTemplateField(); // PlayoutHistoryTemplateField | 
apiInstance.playoutHistoryTemplateFieldsUpdate(id, playoutHistoryTemplateField, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template field. | 
 **playoutHistoryTemplateField** | [**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)|  | 

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

