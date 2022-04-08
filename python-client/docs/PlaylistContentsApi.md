# openapi_client.PlaylistContentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playlist_contents_create**](PlaylistContentsApi.md#playlist_contents_create) | **POST** /api/v2/playlist-contents/ | 
[**playlist_contents_destroy**](PlaylistContentsApi.md#playlist_contents_destroy) | **DELETE** /api/v2/playlist-contents/{id}/ | 
[**playlist_contents_list**](PlaylistContentsApi.md#playlist_contents_list) | **GET** /api/v2/playlist-contents/ | 
[**playlist_contents_partial_update**](PlaylistContentsApi.md#playlist_contents_partial_update) | **PATCH** /api/v2/playlist-contents/{id}/ | 
[**playlist_contents_retrieve**](PlaylistContentsApi.md#playlist_contents_retrieve) | **GET** /api/v2/playlist-contents/{id}/ | 
[**playlist_contents_update**](PlaylistContentsApi.md#playlist_contents_update) | **PUT** /api/v2/playlist-contents/{id}/ | 


# **playlist_contents_create**
> PlaylistContent playlist_contents_create(playlist_content)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
from openapi_client.model.playlist_content import PlaylistContent
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)
    playlist_content = PlaylistContent(
        stream_id=-2147483648,
        type=-32768,
        position=-2147483648,
        trackoffset=3.14,
        cliplength="cliplength_example",
        cuein="cuein_example",
        cueout="cueout_example",
        fadein="fadein_example",
        fadeout="fadeout_example",
        playlist="playlist_example",
        file="file_example",
        block="block_example",
    ) # PlaylistContent | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlist_contents_create(playlist_content)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist_content** | [**PlaylistContent**](PlaylistContent.md)|  |

### Return type

[**PlaylistContent**](PlaylistContent.md)

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

# **playlist_contents_destroy**
> playlist_contents_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist content.

    # example passing only required values which don't have defaults set
    try:
        api_instance.playlist_contents_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist content. |

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

# **playlist_contents_list**
> [PlaylistContent] playlist_contents_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
from openapi_client.model.playlist_content import PlaylistContent
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playlist_contents_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlaylistContent]**](PlaylistContent.md)

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

# **playlist_contents_partial_update**
> PlaylistContent playlist_contents_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
from openapi_client.model.patched_playlist_content import PatchedPlaylistContent
from openapi_client.model.playlist_content import PlaylistContent
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist content.
    patched_playlist_content = PatchedPlaylistContent(
        stream_id=-2147483648,
        type=-32768,
        position=-2147483648,
        trackoffset=3.14,
        cliplength="cliplength_example",
        cuein="cuein_example",
        cueout="cueout_example",
        fadein="fadein_example",
        fadeout="fadeout_example",
        playlist="playlist_example",
        file="file_example",
        block="block_example",
    ) # PatchedPlaylistContent |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlist_contents_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.playlist_contents_partial_update(id, patched_playlist_content=patched_playlist_content)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist content. |
 **patched_playlist_content** | [**PatchedPlaylistContent**](PatchedPlaylistContent.md)|  | [optional]

### Return type

[**PlaylistContent**](PlaylistContent.md)

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

# **playlist_contents_retrieve**
> PlaylistContent playlist_contents_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
from openapi_client.model.playlist_content import PlaylistContent
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist content.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlist_contents_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist content. |

### Return type

[**PlaylistContent**](PlaylistContent.md)

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

# **playlist_contents_update**
> PlaylistContent playlist_contents_update(id, playlist_content)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import playlist_contents_api
from openapi_client.model.playlist_content import PlaylistContent
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
    api_instance = playlist_contents_api.PlaylistContentsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist content.
    playlist_content = PlaylistContent(
        stream_id=-2147483648,
        type=-32768,
        position=-2147483648,
        trackoffset=3.14,
        cliplength="cliplength_example",
        cuein="cuein_example",
        cueout="cueout_example",
        fadein="fadein_example",
        fadeout="fadeout_example",
        playlist="playlist_example",
        file="file_example",
        block="block_example",
    ) # PlaylistContent | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlist_contents_update(id, playlist_content)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlaylistContentsApi->playlist_contents_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist content. |
 **playlist_content** | [**PlaylistContent**](PlaylistContent.md)|  |

### Return type

[**PlaylistContent**](PlaylistContent.md)

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

