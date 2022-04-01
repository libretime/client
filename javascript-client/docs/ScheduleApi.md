# LibreTimeApi.ScheduleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduleCreate**](ScheduleApi.md#scheduleCreate) | **POST** /api/v2/schedule/ | 
[**scheduleDestroy**](ScheduleApi.md#scheduleDestroy) | **DELETE** /api/v2/schedule/{id}/ | 
[**scheduleList**](ScheduleApi.md#scheduleList) | **GET** /api/v2/schedule/ | 
[**schedulePartialUpdate**](ScheduleApi.md#schedulePartialUpdate) | **PATCH** /api/v2/schedule/{id}/ | 
[**scheduleRetrieve**](ScheduleApi.md#scheduleRetrieve) | **GET** /api/v2/schedule/{id}/ | 
[**scheduleUpdate**](ScheduleApi.md#scheduleUpdate) | **PUT** /api/v2/schedule/{id}/ | 



## scheduleCreate

> Schedule scheduleCreate(schedule)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let schedule = new LibreTimeApi.Schedule(); // Schedule | 
apiInstance.scheduleCreate(schedule, (error, data, response) => {
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
 **schedule** | [**Schedule**](Schedule.md)|  | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## scheduleDestroy

> scheduleDestroy(id)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let id = 56; // Number | A unique integer value identifying this schedule.
apiInstance.scheduleDestroy(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this schedule. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## scheduleList

> [Schedule] scheduleList(opts)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let opts = {
  'broadcasted': 56, // Number | 
  'broadcastedGt': 56, // Number | 
  'broadcastedGte': 56, // Number | 
  'broadcastedLt': 56, // Number | 
  'broadcastedLte': 56, // Number | 
  'broadcastedRange': [null], // [Number] | Multiple values may be separated by commas.
  'ends': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endsGt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endsGte': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endsLt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endsLte': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endsRange': [new Date("null")], // [Date] | Multiple values may be separated by commas.
  'isValid': true, // Boolean | Filter on valid instances
  'playoutStatus': 56, // Number | 
  'playoutStatusGt': 56, // Number | 
  'playoutStatusGte': 56, // Number | 
  'playoutStatusLt': 56, // Number | 
  'playoutStatusLte': 56, // Number | 
  'playoutStatusRange': [null], // [Number] | Multiple values may be separated by commas.
  'starts': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'startsGt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'startsGte': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'startsLt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'startsLte': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'startsRange': [new Date("null")] // [Date] | Multiple values may be separated by commas.
};
apiInstance.scheduleList(opts, (error, data, response) => {
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
 **broadcasted** | **Number**|  | [optional] 
 **broadcastedGt** | **Number**|  | [optional] 
 **broadcastedGte** | **Number**|  | [optional] 
 **broadcastedLt** | **Number**|  | [optional] 
 **broadcastedLte** | **Number**|  | [optional] 
 **broadcastedRange** | [**[Number]**](Number.md)| Multiple values may be separated by commas. | [optional] 
 **ends** | **Date**|  | [optional] 
 **endsGt** | **Date**|  | [optional] 
 **endsGte** | **Date**|  | [optional] 
 **endsLt** | **Date**|  | [optional] 
 **endsLte** | **Date**|  | [optional] 
 **endsRange** | [**[Date]**](Date.md)| Multiple values may be separated by commas. | [optional] 
 **isValid** | **Boolean**| Filter on valid instances | [optional] 
 **playoutStatus** | **Number**|  | [optional] 
 **playoutStatusGt** | **Number**|  | [optional] 
 **playoutStatusGte** | **Number**|  | [optional] 
 **playoutStatusLt** | **Number**|  | [optional] 
 **playoutStatusLte** | **Number**|  | [optional] 
 **playoutStatusRange** | [**[Number]**](Number.md)| Multiple values may be separated by commas. | [optional] 
 **starts** | **Date**|  | [optional] 
 **startsGt** | **Date**|  | [optional] 
 **startsGte** | **Date**|  | [optional] 
 **startsLt** | **Date**|  | [optional] 
 **startsLte** | **Date**|  | [optional] 
 **startsRange** | [**[Date]**](Date.md)| Multiple values may be separated by commas. | [optional] 

### Return type

[**[Schedule]**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## schedulePartialUpdate

> Schedule schedulePartialUpdate(id, opts)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let id = 56; // Number | A unique integer value identifying this schedule.
let opts = {
  'patchedSchedule': new LibreTimeApi.PatchedSchedule() // PatchedSchedule | 
};
apiInstance.schedulePartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this schedule. | 
 **patchedSchedule** | [**PatchedSchedule**](PatchedSchedule.md)|  | [optional] 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## scheduleRetrieve

> Schedule scheduleRetrieve(id)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let id = 56; // Number | A unique integer value identifying this schedule.
apiInstance.scheduleRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this schedule. | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scheduleUpdate

> Schedule scheduleUpdate(id, schedule)



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

let apiInstance = new LibreTimeApi.ScheduleApi();
let id = 56; // Number | A unique integer value identifying this schedule.
let schedule = new LibreTimeApi.Schedule(); // Schedule | 
apiInstance.scheduleUpdate(id, schedule, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this schedule. | 
 **schedule** | [**Schedule**](Schedule.md)|  | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

