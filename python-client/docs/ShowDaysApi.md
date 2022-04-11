# libretime_client.ShowDaysApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**show_days_create**](ShowDaysApi.md#show_days_create) | **POST** /api/v2/show-days/ | 
[**show_days_destroy**](ShowDaysApi.md#show_days_destroy) | **DELETE** /api/v2/show-days/{id}/ | 
[**show_days_list**](ShowDaysApi.md#show_days_list) | **GET** /api/v2/show-days/ | 
[**show_days_partial_update**](ShowDaysApi.md#show_days_partial_update) | **PATCH** /api/v2/show-days/{id}/ | 
[**show_days_retrieve**](ShowDaysApi.md#show_days_retrieve) | **GET** /api/v2/show-days/{id}/ | 
[**show_days_update**](ShowDaysApi.md#show_days_update) | **PUT** /api/v2/show-days/{id}/ | 


# **show_days_create**
> ShowDays show_days_create(show_days)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
from libretime_client.model.show_days import ShowDays
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)
    show_days = ShowDays(
        first_show=dateutil_parser('1970-01-01').date(),
        last_show=dateutil_parser('1970-01-01').date(),
        start_time="start_time_example",
        timezone="timezone_example",
        duration="duration_example",
        day=-32768,
        repeat_type=-32768,
        next_pop_date=dateutil_parser('1970-01-01').date(),
        record=-32768,
        show="show_example",
    ) # ShowDays | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_days_create(show_days)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_days** | [**ShowDays**](ShowDays.md)|  |

### Return type

[**ShowDays**](ShowDays.md)

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

# **show_days_destroy**
> show_days_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)
    id = 1 # int | A unique integer value identifying this show days.

    # example passing only required values which don't have defaults set
    try:
        api_instance.show_days_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show days. |

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

# **show_days_list**
> [ShowDays] show_days_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
from libretime_client.model.show_days import ShowDays
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.show_days_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[ShowDays]**](ShowDays.md)

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

# **show_days_partial_update**
> ShowDays show_days_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
from libretime_client.model.patched_show_days import PatchedShowDays
from libretime_client.model.show_days import ShowDays
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)
    id = 1 # int | A unique integer value identifying this show days.
    patched_show_days = PatchedShowDays(
        first_show=dateutil_parser('1970-01-01').date(),
        last_show=dateutil_parser('1970-01-01').date(),
        start_time="start_time_example",
        timezone="timezone_example",
        duration="duration_example",
        day=-32768,
        repeat_type=-32768,
        next_pop_date=dateutil_parser('1970-01-01').date(),
        record=-32768,
        show="show_example",
    ) # PatchedShowDays |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_days_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.show_days_partial_update(id, patched_show_days=patched_show_days)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show days. |
 **patched_show_days** | [**PatchedShowDays**](PatchedShowDays.md)|  | [optional]

### Return type

[**ShowDays**](ShowDays.md)

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

# **show_days_retrieve**
> ShowDays show_days_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
from libretime_client.model.show_days import ShowDays
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)
    id = 1 # int | A unique integer value identifying this show days.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_days_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show days. |

### Return type

[**ShowDays**](ShowDays.md)

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

# **show_days_update**
> ShowDays show_days_update(id, show_days)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_days_api
from libretime_client.model.show_days import ShowDays
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
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = show_days_api.ShowDaysApi(api_client)
    id = 1 # int | A unique integer value identifying this show days.
    show_days = ShowDays(
        first_show=dateutil_parser('1970-01-01').date(),
        last_show=dateutil_parser('1970-01-01').date(),
        start_time="start_time_example",
        timezone="timezone_example",
        duration="duration_example",
        day=-32768,
        repeat_type=-32768,
        next_pop_date=dateutil_parser('1970-01-01').date(),
        record=-32768,
        show="show_example",
    ) # ShowDays | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_days_update(id, show_days)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowDaysApi->show_days_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show days. |
 **show_days** | [**ShowDays**](ShowDays.md)|  |

### Return type

[**ShowDays**](ShowDays.md)

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

