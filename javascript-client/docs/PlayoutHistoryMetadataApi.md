# LibreTimeApi.PlayoutHistoryMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playoutHistoryMetadataCreate**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataCreate) | **POST** /api/v2/playout-history-metadata/ | 
[**playoutHistoryMetadataDestroy**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataDestroy) | **DELETE** /api/v2/playout-history-metadata/{id}/ | 
[**playoutHistoryMetadataList**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataList) | **GET** /api/v2/playout-history-metadata/ | 
[**playoutHistoryMetadataPartialUpdate**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataPartialUpdate) | **PATCH** /api/v2/playout-history-metadata/{id}/ | 
[**playoutHistoryMetadataRetrieve**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataRetrieve) | **GET** /api/v2/playout-history-metadata/{id}/ | 
[**playoutHistoryMetadataUpdate**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataUpdate) | **PUT** /api/v2/playout-history-metadata/{id}/ | 



## playoutHistoryMetadataCreate

> PlayoutHistoryMetadata playoutHistoryMetadataCreate(playoutHistoryMetadata)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
let playoutHistoryMetadata = new LibreTimeApi.PlayoutHistoryMetadata(); // PlayoutHistoryMetadata | 
apiInstance.playoutHistoryMetadataCreate(playoutHistoryMetadata, (error, data, response) => {
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
 **playoutHistoryMetadata** | [**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)|  | 

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryMetadataDestroy

> playoutHistoryMetadataDestroy(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
let id = 56; // Number | A unique integer value identifying this playout history metadata.
apiInstance.playoutHistoryMetadataDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history metadata. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## playoutHistoryMetadataList

> [PlayoutHistoryMetadata] playoutHistoryMetadataList()



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
apiInstance.playoutHistoryMetadataList((error, data, response) => {
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

[**[PlayoutHistoryMetadata]**](PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryMetadataPartialUpdate

> PlayoutHistoryMetadata playoutHistoryMetadataPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
let id = 56; // Number | A unique integer value identifying this playout history metadata.
let opts = {
  'patchedPlayoutHistoryMetadata': new LibreTimeApi.PatchedPlayoutHistoryMetadata() // PatchedPlayoutHistoryMetadata | 
};
apiInstance.playoutHistoryMetadataPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history metadata. | 
 **patchedPlayoutHistoryMetadata** | [**PatchedPlayoutHistoryMetadata**](PatchedPlayoutHistoryMetadata.md)|  | [optional] 

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## playoutHistoryMetadataRetrieve

> PlayoutHistoryMetadata playoutHistoryMetadataRetrieve(id)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
let id = 56; // Number | A unique integer value identifying this playout history metadata.
apiInstance.playoutHistoryMetadataRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history metadata. | 

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playoutHistoryMetadataUpdate

> PlayoutHistoryMetadata playoutHistoryMetadataUpdate(id, playoutHistoryMetadata)



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

let apiInstance = new LibreTimeApi.PlayoutHistoryMetadataApi();
let id = 56; // Number | A unique integer value identifying this playout history metadata.
let playoutHistoryMetadata = new LibreTimeApi.PlayoutHistoryMetadata(); // PlayoutHistoryMetadata | 
apiInstance.playoutHistoryMetadataUpdate(id, playoutHistoryMetadata, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this playout history metadata. | 
 **playoutHistoryMetadata** | [**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)|  | 

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

