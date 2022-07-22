# libretime_client.ShowInstancesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**show_instances_create**](ShowInstancesApi.md#show_instances_create) | **POST** /api/v2/show-instances | 
[**show_instances_destroy**](ShowInstancesApi.md#show_instances_destroy) | **DELETE** /api/v2/show-instances/{id} | 
[**show_instances_list**](ShowInstancesApi.md#show_instances_list) | **GET** /api/v2/show-instances | 
[**show_instances_partial_update**](ShowInstancesApi.md#show_instances_partial_update) | **PATCH** /api/v2/show-instances/{id} | 
[**show_instances_retrieve**](ShowInstancesApi.md#show_instances_retrieve) | **GET** /api/v2/show-instances/{id} | 
[**show_instances_update**](ShowInstancesApi.md#show_instances_update) | **PUT** /api/v2/show-instances/{id} | 


# **show_instances_create**
> ShowInstance show_instances_create(show_instance)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
from libretime_client.model.show_instance import ShowInstance
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)
    show_instance = ShowInstance(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        show="show_example",
        instance="instance_example",
        starts_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        filled_time="filled_time_example",
        last_scheduled_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        modified=True,
        rebroadcast=-32768,
        auto_playlist_built=True,
        record_enabled=PatchedShowDaysRecordEnabled(None),
        record_file="record_file_example",
    ) # ShowInstance | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_instances_create(show_instance)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_instance** | [**ShowInstance**](ShowInstance.md)|  |

### Return type

[**ShowInstance**](ShowInstance.md)

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

# **show_instances_destroy**
> show_instances_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)
    id = 1 # int | A unique integer value identifying this show instance.

    # example passing only required values which don't have defaults set
    try:
        api_instance.show_instances_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show instance. |

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

# **show_instances_list**
> [ShowInstance] show_instances_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
from libretime_client.model.show_instance import ShowInstance
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.show_instances_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[ShowInstance]**](ShowInstance.md)

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

# **show_instances_partial_update**
> ShowInstance show_instances_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
from libretime_client.model.patched_show_instance import PatchedShowInstance
from libretime_client.model.show_instance import ShowInstance
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)
    id = 1 # int | A unique integer value identifying this show instance.
    patched_show_instance = PatchedShowInstance(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        show="show_example",
        instance="instance_example",
        starts_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        filled_time="filled_time_example",
        last_scheduled_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        modified=True,
        rebroadcast=-32768,
        auto_playlist_built=True,
        record_enabled=PatchedShowDaysRecordEnabled(None),
        record_file="record_file_example",
    ) # PatchedShowInstance |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_instances_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.show_instances_partial_update(id, patched_show_instance=patched_show_instance)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show instance. |
 **patched_show_instance** | [**PatchedShowInstance**](PatchedShowInstance.md)|  | [optional]

### Return type

[**ShowInstance**](ShowInstance.md)

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

# **show_instances_retrieve**
> ShowInstance show_instances_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
from libretime_client.model.show_instance import ShowInstance
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)
    id = 1 # int | A unique integer value identifying this show instance.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_instances_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show instance. |

### Return type

[**ShowInstance**](ShowInstance.md)

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

# **show_instances_update**
> ShowInstance show_instances_update(id, show_instance)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import show_instances_api
from libretime_client.model.show_instance import ShowInstance
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
    api_instance = show_instances_api.ShowInstancesApi(api_client)
    id = 1 # int | A unique integer value identifying this show instance.
    show_instance = ShowInstance(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        show="show_example",
        instance="instance_example",
        starts_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ends_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        filled_time="filled_time_example",
        last_scheduled_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        modified=True,
        rebroadcast=-32768,
        auto_playlist_built=True,
        record_enabled=PatchedShowDaysRecordEnabled(None),
        record_file="record_file_example",
    ) # ShowInstance | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.show_instances_update(id, show_instance)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowInstancesApi->show_instances_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show instance. |
 **show_instance** | [**ShowInstance**](ShowInstance.md)|  |

### Return type

[**ShowInstance**](ShowInstance.md)

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

