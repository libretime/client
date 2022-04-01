# LibreTimeApi.PodcastEpisodesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**podcastEpisodesCreate**](PodcastEpisodesApi.md#podcastEpisodesCreate) | **POST** /api/v2/podcast-episodes/ | 
[**podcastEpisodesDestroy**](PodcastEpisodesApi.md#podcastEpisodesDestroy) | **DELETE** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesList**](PodcastEpisodesApi.md#podcastEpisodesList) | **GET** /api/v2/podcast-episodes/ | 
[**podcastEpisodesPartialUpdate**](PodcastEpisodesApi.md#podcastEpisodesPartialUpdate) | **PATCH** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesRetrieve**](PodcastEpisodesApi.md#podcastEpisodesRetrieve) | **GET** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesUpdate**](PodcastEpisodesApi.md#podcastEpisodesUpdate) | **PUT** /api/v2/podcast-episodes/{id}/ | 



## podcastEpisodesCreate

> PodcastEpisode podcastEpisodesCreate(podcastEpisode)



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
let podcastEpisode = new LibreTimeApi.PodcastEpisode(); // PodcastEpisode | 
apiInstance.podcastEpisodesCreate(podcastEpisode, (error, data, response) => {
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
 **podcastEpisode** | [**PodcastEpisode**](PodcastEpisode.md)|  | 

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## podcastEpisodesDestroy

> podcastEpisodesDestroy(id)



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
let id = 56; // Number | A unique integer value identifying this podcast episode.
apiInstance.podcastEpisodesDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this podcast episode. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## podcastEpisodesList

> [PodcastEpisode] podcastEpisodesList()



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
apiInstance.podcastEpisodesList((error, data, response) => {
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

[**[PodcastEpisode]**](PodcastEpisode.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## podcastEpisodesPartialUpdate

> PodcastEpisode podcastEpisodesPartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
let id = 56; // Number | A unique integer value identifying this podcast episode.
let opts = {
  'patchedPodcastEpisode': new LibreTimeApi.PatchedPodcastEpisode() // PatchedPodcastEpisode | 
};
apiInstance.podcastEpisodesPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this podcast episode. | 
 **patchedPodcastEpisode** | [**PatchedPodcastEpisode**](PatchedPodcastEpisode.md)|  | [optional] 

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## podcastEpisodesRetrieve

> PodcastEpisode podcastEpisodesRetrieve(id)



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
let id = 56; // Number | A unique integer value identifying this podcast episode.
apiInstance.podcastEpisodesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this podcast episode. | 

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## podcastEpisodesUpdate

> PodcastEpisode podcastEpisodesUpdate(id, podcastEpisode)



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

let apiInstance = new LibreTimeApi.PodcastEpisodesApi();
let id = 56; // Number | A unique integer value identifying this podcast episode.
let podcastEpisode = new LibreTimeApi.PodcastEpisode(); // PodcastEpisode | 
apiInstance.podcastEpisodesUpdate(id, podcastEpisode, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this podcast episode. | 
 **podcastEpisode** | [**PodcastEpisode**](PodcastEpisode.md)|  | 

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

