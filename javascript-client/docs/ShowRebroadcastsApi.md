# LibreTimeApi.ShowRebroadcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**showRebroadcastsCreate**](ShowRebroadcastsApi.md#showRebroadcastsCreate) | **POST** /api/v2/show-rebroadcasts/ | 
[**showRebroadcastsDestroy**](ShowRebroadcastsApi.md#showRebroadcastsDestroy) | **DELETE** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsList**](ShowRebroadcastsApi.md#showRebroadcastsList) | **GET** /api/v2/show-rebroadcasts/ | 
[**showRebroadcastsPartialUpdate**](ShowRebroadcastsApi.md#showRebroadcastsPartialUpdate) | **PATCH** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsRetrieve**](ShowRebroadcastsApi.md#showRebroadcastsRetrieve) | **GET** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsUpdate**](ShowRebroadcastsApi.md#showRebroadcastsUpdate) | **PUT** /api/v2/show-rebroadcasts/{id}/ | 



## showRebroadcastsCreate

> ShowRebroadcast showRebroadcastsCreate(showRebroadcast)



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
let showRebroadcast = new LibreTimeApi.ShowRebroadcast(); // ShowRebroadcast | 
apiInstance.showRebroadcastsCreate(showRebroadcast, (error, data, response) => {
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
 **showRebroadcast** | [**ShowRebroadcast**](ShowRebroadcast.md)|  | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## showRebroadcastsDestroy

> showRebroadcastsDestroy(id)



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
let id = 56; // Number | A unique integer value identifying this show rebroadcast.
apiInstance.showRebroadcastsDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this show rebroadcast. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## showRebroadcastsList

> [ShowRebroadcast] showRebroadcastsList()



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
apiInstance.showRebroadcastsList((error, data, response) => {
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

[**[ShowRebroadcast]**](ShowRebroadcast.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showRebroadcastsPartialUpdate

> ShowRebroadcast showRebroadcastsPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
let id = 56; // Number | A unique integer value identifying this show rebroadcast.
let opts = {
  'patchedShowRebroadcast': new LibreTimeApi.PatchedShowRebroadcast() // PatchedShowRebroadcast | 
};
apiInstance.showRebroadcastsPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this show rebroadcast. | 
 **patchedShowRebroadcast** | [**PatchedShowRebroadcast**](PatchedShowRebroadcast.md)|  | [optional] 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## showRebroadcastsRetrieve

> ShowRebroadcast showRebroadcastsRetrieve(id)



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
let id = 56; // Number | A unique integer value identifying this show rebroadcast.
apiInstance.showRebroadcastsRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this show rebroadcast. | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showRebroadcastsUpdate

> ShowRebroadcast showRebroadcastsUpdate(id, showRebroadcast)



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

let apiInstance = new LibreTimeApi.ShowRebroadcastsApi();
let id = 56; // Number | A unique integer value identifying this show rebroadcast.
let showRebroadcast = new LibreTimeApi.ShowRebroadcast(); // ShowRebroadcast | 
apiInstance.showRebroadcastsUpdate(id, showRebroadcast, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this show rebroadcast. | 
 **showRebroadcast** | [**ShowRebroadcast**](ShowRebroadcast.md)|  | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

