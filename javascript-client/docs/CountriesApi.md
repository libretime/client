# LibreTimeApi.CountriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesCreate**](CountriesApi.md#countriesCreate) | **POST** /api/v2/countries/ | 
[**countriesDestroy**](CountriesApi.md#countriesDestroy) | **DELETE** /api/v2/countries/{isocode}/ | 
[**countriesList**](CountriesApi.md#countriesList) | **GET** /api/v2/countries/ | 
[**countriesPartialUpdate**](CountriesApi.md#countriesPartialUpdate) | **PATCH** /api/v2/countries/{isocode}/ | 
[**countriesRetrieve**](CountriesApi.md#countriesRetrieve) | **GET** /api/v2/countries/{isocode}/ | 
[**countriesUpdate**](CountriesApi.md#countriesUpdate) | **PUT** /api/v2/countries/{isocode}/ | 



## countriesCreate

> Country countriesCreate(country)



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

let apiInstance = new LibreTimeApi.CountriesApi();
let country = new LibreTimeApi.Country(); // Country | 
apiInstance.countriesCreate(country, (error, data, response) => {
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
 **country** | [**Country**](Country.md)|  | 

### Return type

[**Country**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## countriesDestroy

> countriesDestroy(isocode)



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

let apiInstance = new LibreTimeApi.CountriesApi();
let isocode = "isocode_example"; // String | A unique value identifying this country.
apiInstance.countriesDestroy(isocode, (error, data, response) => {
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
 **isocode** | **String**| A unique value identifying this country. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## countriesList

> [Country] countriesList()



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

let apiInstance = new LibreTimeApi.CountriesApi();
apiInstance.countriesList((error, data, response) => {
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

[**[Country]**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countriesPartialUpdate

> Country countriesPartialUpdate(isocode, opts)



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

let apiInstance = new LibreTimeApi.CountriesApi();
let isocode = "isocode_example"; // String | A unique value identifying this country.
let opts = {
  'patchedCountry': new LibreTimeApi.PatchedCountry() // PatchedCountry | 
};
apiInstance.countriesPartialUpdate(isocode, opts, (error, data, response) => {
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
 **isocode** | **String**| A unique value identifying this country. | 
 **patchedCountry** | [**PatchedCountry**](PatchedCountry.md)|  | [optional] 

### Return type

[**Country**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## countriesRetrieve

> Country countriesRetrieve(isocode)



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

let apiInstance = new LibreTimeApi.CountriesApi();
let isocode = "isocode_example"; // String | A unique value identifying this country.
apiInstance.countriesRetrieve(isocode, (error, data, response) => {
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
 **isocode** | **String**| A unique value identifying this country. | 

### Return type

[**Country**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countriesUpdate

> Country countriesUpdate(isocode, country)



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

let apiInstance = new LibreTimeApi.CountriesApi();
let isocode = "isocode_example"; // String | A unique value identifying this country.
let country = new LibreTimeApi.Country(); // Country | 
apiInstance.countriesUpdate(isocode, country, (error, data, response) => {
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
 **isocode** | **String**| A unique value identifying this country. | 
 **country** | [**Country**](Country.md)|  | 

### Return type

[**Country**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

