# openapi_client.LiveLogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**live_logs_create**](LiveLogsApi.md#live_logs_create) | **POST** /api/v2/live-logs/ | 
[**live_logs_destroy**](LiveLogsApi.md#live_logs_destroy) | **DELETE** /api/v2/live-logs/{id}/ | 
[**live_logs_list**](LiveLogsApi.md#live_logs_list) | **GET** /api/v2/live-logs/ | 
[**live_logs_partial_update**](LiveLogsApi.md#live_logs_partial_update) | **PATCH** /api/v2/live-logs/{id}/ | 
[**live_logs_retrieve**](LiveLogsApi.md#live_logs_retrieve) | **GET** /api/v2/live-logs/{id}/ | 
[**live_logs_update**](LiveLogsApi.md#live_logs_update) | **PUT** /api/v2/live-logs/{id}/ | 


# **live_logs_create**
> LiveLog live_logs_create(live_log)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from openapi_client.model.live_log import LiveLog
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)
    live_log = LiveLog(
        state="state_example",
        start_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        end_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
    ) # LiveLog | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.live_logs_create(live_log)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **live_log** | [**LiveLog**](LiveLog.md)|  |

### Return type

[**LiveLog**](LiveLog.md)

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

# **live_logs_destroy**
> live_logs_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)
    id = 1 # int | A unique integer value identifying this live log.

    # example passing only required values which don't have defaults set
    try:
        api_instance.live_logs_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this live log. |

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

# **live_logs_list**
> [LiveLog] live_logs_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from openapi_client.model.live_log import LiveLog
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.live_logs_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[LiveLog]**](LiveLog.md)

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

# **live_logs_partial_update**
> LiveLog live_logs_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from openapi_client.model.patched_live_log import PatchedLiveLog
from openapi_client.model.live_log import LiveLog
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)
    id = 1 # int | A unique integer value identifying this live log.
    patched_live_log = PatchedLiveLog(
        state="state_example",
        start_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        end_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
    ) # PatchedLiveLog |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.live_logs_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.live_logs_partial_update(id, patched_live_log=patched_live_log)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this live log. |
 **patched_live_log** | [**PatchedLiveLog**](PatchedLiveLog.md)|  | [optional]

### Return type

[**LiveLog**](LiveLog.md)

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

# **live_logs_retrieve**
> LiveLog live_logs_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from openapi_client.model.live_log import LiveLog
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)
    id = 1 # int | A unique integer value identifying this live log.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.live_logs_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this live log. |

### Return type

[**LiveLog**](LiveLog.md)

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

# **live_logs_update**
> LiveLog live_logs_update(id, live_log)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import live_logs_api
from openapi_client.model.live_log import LiveLog
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = live_logs_api.LiveLogsApi(api_client)
    id = 1 # int | A unique integer value identifying this live log.
    live_log = LiveLog(
        state="state_example",
        start_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        end_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
    ) # LiveLog | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.live_logs_update(id, live_log)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LiveLogsApi->live_logs_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this live log. |
 **live_log** | [**LiveLog**](LiveLog.md)|  |

### Return type

[**LiveLog**](LiveLog.md)

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

