# libretime_client.ScheduleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedule_create**](ScheduleApi.md#schedule_create) | **POST** /api/v2/schedule | 
[**schedule_destroy**](ScheduleApi.md#schedule_destroy) | **DELETE** /api/v2/schedule/{id} | 
[**schedule_list**](ScheduleApi.md#schedule_list) | **GET** /api/v2/schedule | 
[**schedule_partial_update**](ScheduleApi.md#schedule_partial_update) | **PATCH** /api/v2/schedule/{id} | 
[**schedule_retrieve**](ScheduleApi.md#schedule_retrieve) | **GET** /api/v2/schedule/{id} | 
[**schedule_update**](ScheduleApi.md#schedule_update) | **PUT** /api/v2/schedule/{id} | 


# **schedule_create**
> WriteSchedule schedule_create(write_schedule)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.write_schedule import WriteSchedule
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    write_schedule = libretime_client.WriteSchedule() # WriteSchedule | 

    try:
        api_response = api_instance.schedule_create(write_schedule)
        print("The response of ScheduleApi->schedule_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **write_schedule** | [**WriteSchedule**](WriteSchedule.md)|  | 

### Return type

[**WriteSchedule**](WriteSchedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_destroy**
> schedule_destroy(id)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    id = 56 # int | A unique integer value identifying this schedule.

    try:
        api_instance.schedule_destroy(id)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. | 

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_list**
> List[ReadSchedule] schedule_list(broadcasted=broadcasted, ends_after=ends_after, ends_before=ends_before, overbooked=overbooked, position_status=position_status, starts_after=starts_after, starts_before=starts_before)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.read_schedule import ReadSchedule
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    broadcasted = 56 # int |  (optional)
    ends_after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    ends_before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    overbooked = True # bool |  (optional)
    position_status = 56 # int |  (optional)
    starts_after = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    starts_before = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        api_response = api_instance.schedule_list(broadcasted=broadcasted, ends_after=ends_after, ends_before=ends_before, overbooked=overbooked, position_status=position_status, starts_after=starts_after, starts_before=starts_before)
        print("The response of ScheduleApi->schedule_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **broadcasted** | **int**|  | [optional] 
 **ends_after** | **datetime**|  | [optional] 
 **ends_before** | **datetime**|  | [optional] 
 **overbooked** | **bool**|  | [optional] 
 **position_status** | **int**|  | [optional] 
 **starts_after** | **datetime**|  | [optional] 
 **starts_before** | **datetime**|  | [optional] 

### Return type

[**List[ReadSchedule]**](ReadSchedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_partial_update**
> ReadSchedule schedule_partial_update(id, patched_read_schedule=patched_read_schedule)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_read_schedule import PatchedReadSchedule
from libretime_client.models.read_schedule import ReadSchedule
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    id = 56 # int | A unique integer value identifying this schedule.
    patched_read_schedule = libretime_client.PatchedReadSchedule() # PatchedReadSchedule |  (optional)

    try:
        api_response = api_instance.schedule_partial_update(id, patched_read_schedule=patched_read_schedule)
        print("The response of ScheduleApi->schedule_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. | 
 **patched_read_schedule** | [**PatchedReadSchedule**](PatchedReadSchedule.md)|  | [optional] 

### Return type

[**ReadSchedule**](ReadSchedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_retrieve**
> ReadSchedule schedule_retrieve(id)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.read_schedule import ReadSchedule
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    id = 56 # int | A unique integer value identifying this schedule.

    try:
        api_response = api_instance.schedule_retrieve(id)
        print("The response of ScheduleApi->schedule_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. | 

### Return type

[**ReadSchedule**](ReadSchedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_update**
> ReadSchedule schedule_update(id, read_schedule)

Overrides get_serializer_class to choose the read serializer
for GET requests and the write serializer for POST requests.

Set read_serializer_class and write_serializer_class attributes on a
viewset.

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.read_schedule import ReadSchedule
from libretime_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.ScheduleApi(api_client)
    id = 56 # int | A unique integer value identifying this schedule.
    read_schedule = libretime_client.ReadSchedule() # ReadSchedule | 

    try:
        api_response = api_instance.schedule_update(id, read_schedule)
        print("The response of ScheduleApi->schedule_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleApi->schedule_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. | 
 **read_schedule** | [**ReadSchedule**](ReadSchedule.md)|  | 

### Return type

[**ReadSchedule**](ReadSchedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

