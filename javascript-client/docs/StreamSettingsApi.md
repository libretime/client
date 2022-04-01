# LibreTimeApi.StreamSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamSettingsCreate**](StreamSettingsApi.md#streamSettingsCreate) | **POST** /api/v2/stream-settings/ | 
[**streamSettingsDestroy**](StreamSettingsApi.md#streamSettingsDestroy) | **DELETE** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsList**](StreamSettingsApi.md#streamSettingsList) | **GET** /api/v2/stream-settings/ | 
[**streamSettingsPartialUpdate**](StreamSettingsApi.md#streamSettingsPartialUpdate) | **PATCH** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsRetrieve**](StreamSettingsApi.md#streamSettingsRetrieve) | **GET** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsUpdate**](StreamSettingsApi.md#streamSettingsUpdate) | **PUT** /api/v2/stream-settings/{keyname}/ | 



## streamSettingsCreate

> StreamSetting streamSettingsCreate(streamSetting)



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
let streamSetting = new LibreTimeApi.StreamSetting(); // StreamSetting | 
apiInstance.streamSettingsCreate(streamSetting, (error, data, response) => {
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
 **streamSetting** | [**StreamSetting**](StreamSetting.md)|  | 

### Return type

[**StreamSetting**](StreamSetting.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## streamSettingsDestroy

> streamSettingsDestroy(keyname)



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
let keyname = "keyname_example"; // String | A unique value identifying this stream setting.
apiInstance.streamSettingsDestroy(keyname, (error, data, response) => {
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
 **keyname** | **String**| A unique value identifying this stream setting. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## streamSettingsList

> [StreamSetting] streamSettingsList()



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
apiInstance.streamSettingsList((error, data, response) => {
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

[**[StreamSetting]**](StreamSetting.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## streamSettingsPartialUpdate

> StreamSetting streamSettingsPartialUpdate(keyname, opts)



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
let keyname = "keyname_example"; // String | A unique value identifying this stream setting.
let opts = {
  'patchedStreamSetting': new LibreTimeApi.PatchedStreamSetting() // PatchedStreamSetting | 
};
apiInstance.streamSettingsPartialUpdate(keyname, opts, (error, data, response) => {
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
 **keyname** | **String**| A unique value identifying this stream setting. | 
 **patchedStreamSetting** | [**PatchedStreamSetting**](PatchedStreamSetting.md)|  | [optional] 

### Return type

[**StreamSetting**](StreamSetting.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## streamSettingsRetrieve

> StreamSetting streamSettingsRetrieve(keyname)



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
let keyname = "keyname_example"; // String | A unique value identifying this stream setting.
apiInstance.streamSettingsRetrieve(keyname, (error, data, response) => {
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
 **keyname** | **String**| A unique value identifying this stream setting. | 

### Return type

[**StreamSetting**](StreamSetting.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## streamSettingsUpdate

> StreamSetting streamSettingsUpdate(keyname, streamSetting)



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

let apiInstance = new LibreTimeApi.StreamSettingsApi();
let keyname = "keyname_example"; // String | A unique value identifying this stream setting.
let streamSetting = new LibreTimeApi.StreamSetting(); // StreamSetting | 
apiInstance.streamSettingsUpdate(keyname, streamSetting, (error, data, response) => {
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
 **keyname** | **String**| A unique value identifying this stream setting. | 
 **streamSetting** | [**StreamSetting**](StreamSetting.md)|  | 

### Return type

[**StreamSetting**](StreamSetting.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

