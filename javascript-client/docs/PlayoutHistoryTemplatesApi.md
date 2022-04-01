# LibreTimeApi.PlayoutHistoryTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playoutHistoryTemplatesCreate**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesCreate) | **POST** /api/v2/playout-history-templates/ | 
[**playoutHistoryTemplatesDestroy**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesDestroy) | **DELETE** /api/v2/playout-history-templates/{id}/ | 
[**playoutHistoryTemplatesList**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesList) | **GET** /api/v2/playout-history-templates/ | 
[**playoutHistoryTemplatesPartialUpdate**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesPartialUpdate) | **PATCH** /api/v2/playout-history-templates/{id}/ | 
[**playoutHistoryTemplatesRetrieve**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesRetrieve) | **GET** /api/v2/playout-history-templates/{id}/ | 
[**playoutHistoryTemplatesUpdate**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesUpdate) | **PUT** /api/v2/playout-history-templates/{id}/ | 



## playoutHistoryTemplatesCreate

> PlayoutHistoryTemplate playoutHistoryTemplatesCreate(playoutHistoryTemplate)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
let playoutHistoryTemplate = new LibreTimeApi.PlayoutHistoryTemplate(); // PlayoutHistoryTemplate | 
apiInstance.playoutHistoryTemplatesCreate(playoutHistoryTemplate, (error, data, response) => {
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
 **playoutHistoryTemplate** | [**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)|  | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryTemplatesDestroy

> playoutHistoryTemplatesDestroy(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
let id = 56; // Number | A unique integer value identifying this playout history template.
apiInstance.playoutHistoryTemplatesDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## playoutHistoryTemplatesList

> [PlayoutHistoryTemplate] playoutHistoryTemplatesList()



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
apiInstance.playoutHistoryTemplatesList((error, data, response) => {
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

[**[PlayoutHistoryTemplate]**](PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryTemplatesPartialUpdate

> PlayoutHistoryTemplate playoutHistoryTemplatesPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
let id = 56; // Number | A unique integer value identifying this playout history template.
let opts = {
  'patchedPlayoutHistoryTemplate': new LibreTimeApi.PatchedPlayoutHistoryTemplate() // PatchedPlayoutHistoryTemplate | 
};
apiInstance.playoutHistoryTemplatesPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template. | 
 **patchedPlayoutHistoryTemplate** | [**PatchedPlayoutHistoryTemplate**](PatchedPlayoutHistoryTemplate.md)|  | [optional] 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryTemplatesRetrieve

> PlayoutHistoryTemplate playoutHistoryTemplatesRetrieve(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
let id = 56; // Number | A unique integer value identifying this playout history template.
apiInstance.playoutHistoryTemplatesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template. | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryTemplatesUpdate

> PlayoutHistoryTemplate playoutHistoryTemplatesUpdate(id, playoutHistoryTemplate)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryTemplatesApi();
let id = 56; // Number | A unique integer value identifying this playout history template.
let playoutHistoryTemplate = new LibreTimeApi.PlayoutHistoryTemplate(); // PlayoutHistoryTemplate | 
apiInstance.playoutHistoryTemplatesUpdate(id, playoutHistoryTemplate, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history template. | 
 **playoutHistoryTemplate** | [**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)|  | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

