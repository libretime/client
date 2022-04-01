# LibreTimeApi.ThirdPartyTrackReferencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thirdPartyTrackReferencesCreate**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesCreate) | **POST** /api/v2/third-party-track-references/ | 
[**thirdPartyTrackReferencesDestroy**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesDestroy) | **DELETE** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesList**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesList) | **GET** /api/v2/third-party-track-references/ | 
[**thirdPartyTrackReferencesPartialUpdate**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesPartialUpdate) | **PATCH** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesRetrieve**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesRetrieve) | **GET** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesUpdate**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesUpdate) | **PUT** /api/v2/third-party-track-references/{id}/ | 



## thirdPartyTrackReferencesCreate

> ThirdPartyTrackReference thirdPartyTrackReferencesCreate(thirdPartyTrackReference)



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
let thirdPartyTrackReference = new LibreTimeApi.ThirdPartyTrackReference(); // ThirdPartyTrackReference | 
apiInstance.thirdPartyTrackReferencesCreate(thirdPartyTrackReference, (error, data, response) => {
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
 **thirdPartyTrackReference** | [**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)|  | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## thirdPartyTrackReferencesDestroy

> thirdPartyTrackReferencesDestroy(id)



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
let id = 56; // Number | A unique integer value identifying this third party track reference.
apiInstance.thirdPartyTrackReferencesDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this third party track reference. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## thirdPartyTrackReferencesList

> [ThirdPartyTrackReference] thirdPartyTrackReferencesList()



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
apiInstance.thirdPartyTrackReferencesList((error, data, response) => {
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

[**[ThirdPartyTrackReference]**](ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## thirdPartyTrackReferencesPartialUpdate

> ThirdPartyTrackReference thirdPartyTrackReferencesPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
let id = 56; // Number | A unique integer value identifying this third party track reference.
let opts = {
  'patchedThirdPartyTrackReference': new LibreTimeApi.PatchedThirdPartyTrackReference() // PatchedThirdPartyTrackReference | 
};
apiInstance.thirdPartyTrackReferencesPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this third party track reference. | 
 **patchedThirdPartyTrackReference** | [**PatchedThirdPartyTrackReference**](PatchedThirdPartyTrackReference.md)|  | [optional] 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## thirdPartyTrackReferencesRetrieve

> ThirdPartyTrackReference thirdPartyTrackReferencesRetrieve(id)



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
let id = 56; // Number | A unique integer value identifying this third party track reference.
apiInstance.thirdPartyTrackReferencesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this third party track reference. | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## thirdPartyTrackReferencesUpdate

> ThirdPartyTrackReference thirdPartyTrackReferencesUpdate(id, thirdPartyTrackReference)



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

let apiInstance = new LibreTimeApi.ThirdPartyTrackReferencesApi();
let id = 56; // Number | A unique integer value identifying this third party track reference.
let thirdPartyTrackReference = new LibreTimeApi.ThirdPartyTrackReference(); // ThirdPartyTrackReference | 
apiInstance.thirdPartyTrackReferencesUpdate(id, thirdPartyTrackReference, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this third party track reference. | 
 **thirdPartyTrackReference** | [**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)|  | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

