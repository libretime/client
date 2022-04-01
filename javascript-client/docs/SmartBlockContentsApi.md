# LibreTimeApi.SmartBlockContentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smartBlockContentsCreate**](SmartBlockContentsApi.md#smartBlockContentsCreate) | **POST** /api/v2/smart-block-contents/ | 
[**smartBlockContentsDestroy**](SmartBlockContentsApi.md#smartBlockContentsDestroy) | **DELETE** /api/v2/smart-block-contents/{id}/ | 
[**smartBlockContentsList**](SmartBlockContentsApi.md#smartBlockContentsList) | **GET** /api/v2/smart-block-contents/ | 
[**smartBlockContentsPartialUpdate**](SmartBlockContentsApi.md#smartBlockContentsPartialUpdate) | **PATCH** /api/v2/smart-block-contents/{id}/ | 
[**smartBlockContentsRetrieve**](SmartBlockContentsApi.md#smartBlockContentsRetrieve) | **GET** /api/v2/smart-block-contents/{id}/ | 
[**smartBlockContentsUpdate**](SmartBlockContentsApi.md#smartBlockContentsUpdate) | **PUT** /api/v2/smart-block-contents/{id}/ | 



## smartBlockContentsCreate

> SmartBlockContent smartBlockContentsCreate(smartBlockContent)



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
let smartBlockContent = new LibreTimeApi.SmartBlockContent(); // SmartBlockContent | 
apiInstance.smartBlockContentsCreate(smartBlockContent, (error, data, response) => {
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
 **smartBlockContent** | [**SmartBlockContent**](SmartBlockContent.md)|  | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## smartBlockContentsDestroy

> smartBlockContentsDestroy(id)



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
let id = 56; // Number | A unique integer value identifying this smart block content.
apiInstance.smartBlockContentsDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block content. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## smartBlockContentsList

> [SmartBlockContent] smartBlockContentsList()



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
apiInstance.smartBlockContentsList((error, data, response) => {
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

[**[SmartBlockContent]**](SmartBlockContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## smartBlockContentsPartialUpdate

> SmartBlockContent smartBlockContentsPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
let id = 56; // Number | A unique integer value identifying this smart block content.
let opts = {
  'patchedSmartBlockContent': new LibreTimeApi.PatchedSmartBlockContent() // PatchedSmartBlockContent | 
};
apiInstance.smartBlockContentsPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block content. | 
 **patchedSmartBlockContent** | [**PatchedSmartBlockContent**](PatchedSmartBlockContent.md)|  | [optional] 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## smartBlockContentsRetrieve

> SmartBlockContent smartBlockContentsRetrieve(id)



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
let id = 56; // Number | A unique integer value identifying this smart block content.
apiInstance.smartBlockContentsRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block content. | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## smartBlockContentsUpdate

> SmartBlockContent smartBlockContentsUpdate(id, smartBlockContent)



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

let apiInstance = new LibreTimeApi.SmartBlockContentsApi();
let id = 56; // Number | A unique integer value identifying this smart block content.
let smartBlockContent = new LibreTimeApi.SmartBlockContent(); // SmartBlockContent | 
apiInstance.smartBlockContentsUpdate(id, smartBlockContent, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this smart block content. | 
 **smartBlockContent** | [**SmartBlockContent**](SmartBlockContent.md)|  | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

