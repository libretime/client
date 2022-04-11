# libretime_client.PlayoutHistoryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_create**](PlayoutHistoryApi.md#playout_history_create) | **POST** /api/v2/playout-history/ | 
[**playout_history_destroy**](PlayoutHistoryApi.md#playout_history_destroy) | **DELETE** /api/v2/playout-history/{id}/ | 
[**playout_history_list**](PlayoutHistoryApi.md#playout_history_list) | **GET** /api/v2/playout-history/ | 
[**playout_history_partial_update**](PlayoutHistoryApi.md#playout_history_partial_update) | **PATCH** /api/v2/playout-history/{id}/ | 
[**playout_history_retrieve**](PlayoutHistoryApi.md#playout_history_retrieve) | **GET** /api/v2/playout-history/{id}/ | 
[**playout_history_update**](PlayoutHistoryApi.md#playout_history_update) | **PUT** /api/v2/playout-history/{id}/ | 


# **playout_history_create**
> PlayoutHistory playout_history_create(playout_history)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
from libretime_client.model.playout_history import PlayoutHistory
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)
    playout_history = PlayoutHistory(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        instance="instance_example",
    ) # PlayoutHistory | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_create(playout_history)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playout_history** | [**PlayoutHistory**](PlayoutHistory.md)|  |

### Return type

[**PlayoutHistory**](PlayoutHistory.md)

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

# **playout_history_destroy**
> playout_history_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history.

    # example passing only required values which don't have defaults set
    try:
        api_instance.playout_history_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history. |

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

# **playout_history_list**
> [PlayoutHistory] playout_history_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
from libretime_client.model.playout_history import PlayoutHistory
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playout_history_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayoutHistory]**](PlayoutHistory.md)

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

# **playout_history_partial_update**
> PlayoutHistory playout_history_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
from libretime_client.model.patched_playout_history import PatchedPlayoutHistory
from libretime_client.model.playout_history import PlayoutHistory
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history.
    patched_playout_history = PatchedPlayoutHistory(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        instance="instance_example",
    ) # PatchedPlayoutHistory |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.playout_history_partial_update(id, patched_playout_history=patched_playout_history)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history. |
 **patched_playout_history** | [**PatchedPlayoutHistory**](PatchedPlayoutHistory.md)|  | [optional]

### Return type

[**PlayoutHistory**](PlayoutHistory.md)

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

# **playout_history_retrieve**
> PlayoutHistory playout_history_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
from libretime_client.model.playout_history import PlayoutHistory
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history. |

### Return type

[**PlayoutHistory**](PlayoutHistory.md)

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

# **playout_history_update**
> PlayoutHistory playout_history_update(id, playout_history)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_api
from libretime_client.model.playout_history import PlayoutHistory
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
    api_instance = playout_history_api.PlayoutHistoryApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history.
    playout_history = PlayoutHistory(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        instance="instance_example",
    ) # PlayoutHistory | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_update(id, playout_history)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryApi->playout_history_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history. |
 **playout_history** | [**PlayoutHistory**](PlayoutHistory.md)|  |

### Return type

[**PlayoutHistory**](PlayoutHistory.md)

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

