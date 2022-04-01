# openapi_client.ListenerCountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listener_counts_create**](ListenerCountsApi.md#listener_counts_create) | **POST** /api/v2/listener-counts/ | 
[**listener_counts_destroy**](ListenerCountsApi.md#listener_counts_destroy) | **DELETE** /api/v2/listener-counts/{id}/ | 
[**listener_counts_list**](ListenerCountsApi.md#listener_counts_list) | **GET** /api/v2/listener-counts/ | 
[**listener_counts_partial_update**](ListenerCountsApi.md#listener_counts_partial_update) | **PATCH** /api/v2/listener-counts/{id}/ | 
[**listener_counts_retrieve**](ListenerCountsApi.md#listener_counts_retrieve) | **GET** /api/v2/listener-counts/{id}/ | 
[**listener_counts_update**](ListenerCountsApi.md#listener_counts_update) | **PUT** /api/v2/listener-counts/{id}/ | 


# **listener_counts_create**
> ListenerCount listener_counts_create(listener_count)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
from openapi_client.model.listener_count import ListenerCount
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)
    listener_count = ListenerCount(
        listener_count=-2147483648,
        timestamp="timestamp_example",
        mount_name="mount_name_example",
    ) # ListenerCount | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.listener_counts_create(listener_count)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listener_count** | [**ListenerCount**](ListenerCount.md)|  |

### Return type

[**ListenerCount**](ListenerCount.md)

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

# **listener_counts_destroy**
> listener_counts_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)
    id = 1 # int | A unique integer value identifying this listener count.

    # example passing only required values which don't have defaults set
    try:
        api_instance.listener_counts_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this listener count. |

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

# **listener_counts_list**
> [ListenerCount] listener_counts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
from openapi_client.model.listener_count import ListenerCount
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.listener_counts_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[ListenerCount]**](ListenerCount.md)

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

# **listener_counts_partial_update**
> ListenerCount listener_counts_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
from openapi_client.model.patched_listener_count import PatchedListenerCount
from openapi_client.model.listener_count import ListenerCount
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)
    id = 1 # int | A unique integer value identifying this listener count.
    patched_listener_count = PatchedListenerCount(
        listener_count=-2147483648,
        timestamp="timestamp_example",
        mount_name="mount_name_example",
    ) # PatchedListenerCount |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.listener_counts_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.listener_counts_partial_update(id, patched_listener_count=patched_listener_count)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this listener count. |
 **patched_listener_count** | [**PatchedListenerCount**](PatchedListenerCount.md)|  | [optional]

### Return type

[**ListenerCount**](ListenerCount.md)

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

# **listener_counts_retrieve**
> ListenerCount listener_counts_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
from openapi_client.model.listener_count import ListenerCount
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)
    id = 1 # int | A unique integer value identifying this listener count.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.listener_counts_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this listener count. |

### Return type

[**ListenerCount**](ListenerCount.md)

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

# **listener_counts_update**
> ListenerCount listener_counts_update(id, listener_count)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import listener_counts_api
from openapi_client.model.listener_count import ListenerCount
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
    api_instance = listener_counts_api.ListenerCountsApi(api_client)
    id = 1 # int | A unique integer value identifying this listener count.
    listener_count = ListenerCount(
        listener_count=-2147483648,
        timestamp="timestamp_example",
        mount_name="mount_name_example",
    ) # ListenerCount | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.listener_counts_update(id, listener_count)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ListenerCountsApi->listener_counts_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this listener count. |
 **listener_count** | [**ListenerCount**](ListenerCount.md)|  |

### Return type

[**ListenerCount**](ListenerCount.md)

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

