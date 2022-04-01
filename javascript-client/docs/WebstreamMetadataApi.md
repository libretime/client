# LibreTimeApi.WebstreamMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webstreamMetadataCreate**](WebstreamMetadataApi.md#webstreamMetadataCreate) | **POST** /api/v2/webstream-metadata/ | 
[**webstreamMetadataDestroy**](WebstreamMetadataApi.md#webstreamMetadataDestroy) | **DELETE** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataList**](WebstreamMetadataApi.md#webstreamMetadataList) | **GET** /api/v2/webstream-metadata/ | 
[**webstreamMetadataPartialUpdate**](WebstreamMetadataApi.md#webstreamMetadataPartialUpdate) | **PATCH** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataRetrieve**](WebstreamMetadataApi.md#webstreamMetadataRetrieve) | **GET** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataUpdate**](WebstreamMetadataApi.md#webstreamMetadataUpdate) | **PUT** /api/v2/webstream-metadata/{id}/ | 



## webstreamMetadataCreate

> WebstreamMetadata webstreamMetadataCreate(webstreamMetadata)



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
let webstreamMetadata = new LibreTimeApi.WebstreamMetadata(); // WebstreamMetadata | 
apiInstance.webstreamMetadataCreate(webstreamMetadata, (error, data, response) => {
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
 **webstreamMetadata** | [**WebstreamMetadata**](WebstreamMetadata.md)|  | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## webstreamMetadataDestroy

> webstreamMetadataDestroy(id)



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
let id = 56; // Number | A unique integer value identifying this webstream metadata.
apiInstance.webstreamMetadataDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this webstream metadata. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## webstreamMetadataList

> [WebstreamMetadata] webstreamMetadataList()



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
apiInstance.webstreamMetadataList((error, data, response) => {
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

[**[WebstreamMetadata]**](WebstreamMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webstreamMetadataPartialUpdate

> WebstreamMetadata webstreamMetadataPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
let id = 56; // Number | A unique integer value identifying this webstream metadata.
let opts = {
  'patchedWebstreamMetadata': new LibreTimeApi.PatchedWebstreamMetadata() // PatchedWebstreamMetadata | 
};
apiInstance.webstreamMetadataPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this webstream metadata. | 
 **patchedWebstreamMetadata** | [**PatchedWebstreamMetadata**](PatchedWebstreamMetadata.md)|  | [optional] 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## webstreamMetadataRetrieve

> WebstreamMetadata webstreamMetadataRetrieve(id)



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
let id = 56; // Number | A unique integer value identifying this webstream metadata.
apiInstance.webstreamMetadataRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this webstream metadata. | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webstreamMetadataUpdate

> WebstreamMetadata webstreamMetadataUpdate(id, webstreamMetadata)



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

let apiInstance = new LibreTimeApi.WebstreamMetadataApi();
let id = 56; // Number | A unique integer value identifying this webstream metadata.
let webstreamMetadata = new LibreTimeApi.WebstreamMetadata(); // WebstreamMetadata | 
apiInstance.webstreamMetadataUpdate(id, webstreamMetadata, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this webstream metadata. | 
 **webstreamMetadata** | [**WebstreamMetadata**](WebstreamMetadata.md)|  | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

