# openapi_client.MusicDirsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**music_dirs_create**](MusicDirsApi.md#music_dirs_create) | **POST** /api/v2/music-dirs/ | 
[**music_dirs_destroy**](MusicDirsApi.md#music_dirs_destroy) | **DELETE** /api/v2/music-dirs/{id}/ | 
[**music_dirs_list**](MusicDirsApi.md#music_dirs_list) | **GET** /api/v2/music-dirs/ | 
[**music_dirs_partial_update**](MusicDirsApi.md#music_dirs_partial_update) | **PATCH** /api/v2/music-dirs/{id}/ | 
[**music_dirs_retrieve**](MusicDirsApi.md#music_dirs_retrieve) | **GET** /api/v2/music-dirs/{id}/ | 
[**music_dirs_update**](MusicDirsApi.md#music_dirs_update) | **PUT** /api/v2/music-dirs/{id}/ | 


# **music_dirs_create**
> MusicDir music_dirs_create()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
from openapi_client.model.music_dir import MusicDir
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)
    music_dir = MusicDir(
        directory="directory_example",
        type="type_example",
        exists=True,
        watched=True,
    ) # MusicDir |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.music_dirs_create(music_dir=music_dir)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **music_dir** | [**MusicDir**](MusicDir.md)|  | [optional]

### Return type

[**MusicDir**](MusicDir.md)

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

# **music_dirs_destroy**
> music_dirs_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)
    id = 1 # int | A unique integer value identifying this music dir.

    # example passing only required values which don't have defaults set
    try:
        api_instance.music_dirs_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this music dir. |

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

# **music_dirs_list**
> [MusicDir] music_dirs_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
from openapi_client.model.music_dir import MusicDir
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.music_dirs_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[MusicDir]**](MusicDir.md)

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

# **music_dirs_partial_update**
> MusicDir music_dirs_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
from openapi_client.model.music_dir import MusicDir
from openapi_client.model.patched_music_dir import PatchedMusicDir
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)
    id = 1 # int | A unique integer value identifying this music dir.
    patched_music_dir = PatchedMusicDir(
        directory="directory_example",
        type="type_example",
        exists=True,
        watched=True,
    ) # PatchedMusicDir |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.music_dirs_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.music_dirs_partial_update(id, patched_music_dir=patched_music_dir)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this music dir. |
 **patched_music_dir** | [**PatchedMusicDir**](PatchedMusicDir.md)|  | [optional]

### Return type

[**MusicDir**](MusicDir.md)

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

# **music_dirs_retrieve**
> MusicDir music_dirs_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
from openapi_client.model.music_dir import MusicDir
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)
    id = 1 # int | A unique integer value identifying this music dir.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.music_dirs_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this music dir. |

### Return type

[**MusicDir**](MusicDir.md)

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

# **music_dirs_update**
> MusicDir music_dirs_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import music_dirs_api
from openapi_client.model.music_dir import MusicDir
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
    api_instance = music_dirs_api.MusicDirsApi(api_client)
    id = 1 # int | A unique integer value identifying this music dir.
    music_dir = MusicDir(
        directory="directory_example",
        type="type_example",
        exists=True,
        watched=True,
    ) # MusicDir |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.music_dirs_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.music_dirs_update(id, music_dir=music_dir)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MusicDirsApi->music_dirs_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this music dir. |
 **music_dir** | [**MusicDir**](MusicDir.md)|  | [optional]

### Return type

[**MusicDir**](MusicDir.md)

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

