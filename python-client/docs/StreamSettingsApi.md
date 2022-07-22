# libretime_client.StreamSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_settings_create**](StreamSettingsApi.md#stream_settings_create) | **POST** /api/v2/stream-settings | 
[**stream_settings_destroy**](StreamSettingsApi.md#stream_settings_destroy) | **DELETE** /api/v2/stream-settings/{key} | 
[**stream_settings_list**](StreamSettingsApi.md#stream_settings_list) | **GET** /api/v2/stream-settings | 
[**stream_settings_partial_update**](StreamSettingsApi.md#stream_settings_partial_update) | **PATCH** /api/v2/stream-settings/{key} | 
[**stream_settings_retrieve**](StreamSettingsApi.md#stream_settings_retrieve) | **GET** /api/v2/stream-settings/{key} | 
[**stream_settings_update**](StreamSettingsApi.md#stream_settings_update) | **PUT** /api/v2/stream-settings/{key} | 


# **stream_settings_create**
> StreamSetting stream_settings_create(stream_setting)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
from libretime_client.model.stream_setting import StreamSetting
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)
    stream_setting = StreamSetting(
        value="value_example",
        type="type_example",
    ) # StreamSetting | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.stream_settings_create(stream_setting)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_setting** | [**StreamSetting**](StreamSetting.md)|  |

### Return type

[**StreamSetting**](StreamSetting.md)

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

# **stream_settings_destroy**
> stream_settings_destroy(key)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)
    key = "key_example" # str | A unique value identifying this stream setting.

    # example passing only required values which don't have defaults set
    try:
        api_instance.stream_settings_destroy(key)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| A unique value identifying this stream setting. |

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

# **stream_settings_list**
> [StreamSetting] stream_settings_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
from libretime_client.model.stream_setting import StreamSetting
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.stream_settings_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_list: %s\n" % e)
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


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_settings_partial_update**
> StreamSetting stream_settings_partial_update(key)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
from libretime_client.model.stream_setting import StreamSetting
from libretime_client.model.patched_stream_setting import PatchedStreamSetting
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)
    key = "key_example" # str | A unique value identifying this stream setting.
    patched_stream_setting = PatchedStreamSetting(
        value="value_example",
        type="type_example",
    ) # PatchedStreamSetting |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.stream_settings_partial_update(key)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.stream_settings_partial_update(key, patched_stream_setting=patched_stream_setting)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| A unique value identifying this stream setting. |
 **patched_stream_setting** | [**PatchedStreamSetting**](PatchedStreamSetting.md)|  | [optional]

### Return type

[**StreamSetting**](StreamSetting.md)

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

# **stream_settings_retrieve**
> StreamSetting stream_settings_retrieve(key)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
from libretime_client.model.stream_setting import StreamSetting
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)
    key = "key_example" # str | A unique value identifying this stream setting.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.stream_settings_retrieve(key)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| A unique value identifying this stream setting. |

### Return type

[**StreamSetting**](StreamSetting.md)

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

# **stream_settings_update**
> StreamSetting stream_settings_update(key, stream_setting)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import stream_settings_api
from libretime_client.model.stream_setting import StreamSetting
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
    api_instance = stream_settings_api.StreamSettingsApi(api_client)
    key = "key_example" # str | A unique value identifying this stream setting.
    stream_setting = StreamSetting(
        value="value_example",
        type="type_example",
    ) # StreamSetting | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.stream_settings_update(key, stream_setting)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StreamSettingsApi->stream_settings_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| A unique value identifying this stream setting. |
 **stream_setting** | [**StreamSetting**](StreamSetting.md)|  |

### Return type

[**StreamSetting**](StreamSetting.md)

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

