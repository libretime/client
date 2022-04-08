# libretime.api.PlaylistsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playlists_create**](PlaylistsApi.md#playlists_create) | **POST** /api/v2/playlists/ | 
[**playlists_destroy**](PlaylistsApi.md#playlists_destroy) | **DELETE** /api/v2/playlists/{id}/ | 
[**playlists_list**](PlaylistsApi.md#playlists_list) | **GET** /api/v2/playlists/ | 
[**playlists_partial_update**](PlaylistsApi.md#playlists_partial_update) | **PATCH** /api/v2/playlists/{id}/ | 
[**playlists_retrieve**](PlaylistsApi.md#playlists_retrieve) | **GET** /api/v2/playlists/{id}/ | 
[**playlists_update**](PlaylistsApi.md#playlists_update) | **PUT** /api/v2/playlists/{id}/ | 


# **playlists_create**
> Playlist playlists_create(playlist)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from libretime.api.model.playlist import Playlist
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)
    playlist = Playlist(
        name="name_example",
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        length="length_example",
        creator="creator_example",
    ) # Playlist | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlists_create(playlist)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist** | [**Playlist**](Playlist.md)|  |

### Return type

[**Playlist**](Playlist.md)

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

# **playlists_destroy**
> playlists_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist.

    # example passing only required values which don't have defaults set
    try:
        api_instance.playlists_destroy(id)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist. |

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

# **playlists_list**
> [Playlist] playlists_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from libretime.api.model.playlist import Playlist
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playlists_list()
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Playlist]**](Playlist.md)

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

# **playlists_partial_update**
> Playlist playlists_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from libretime.api.model.playlist import Playlist
from libretime.api.model.patched_playlist import PatchedPlaylist
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist.
    patched_playlist = PatchedPlaylist(
        name="name_example",
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        length="length_example",
        creator="creator_example",
    ) # PatchedPlaylist |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlists_partial_update(id)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.playlists_partial_update(id, patched_playlist=patched_playlist)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist. |
 **patched_playlist** | [**PatchedPlaylist**](PatchedPlaylist.md)|  | [optional]

### Return type

[**Playlist**](Playlist.md)

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

# **playlists_retrieve**
> Playlist playlists_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from libretime.api.model.playlist import Playlist
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlists_retrieve(id)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist. |

### Return type

[**Playlist**](Playlist.md)

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

# **playlists_update**
> Playlist playlists_update(id, playlist)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import playlists_api
from libretime.api.model.playlist import Playlist
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playlists_api.PlaylistsApi(api_client)
    id = 1 # int | A unique integer value identifying this playlist.
    playlist = Playlist(
        name="name_example",
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        description="description_example",
        length="length_example",
        creator="creator_example",
    ) # Playlist | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playlists_update(id, playlist)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling PlaylistsApi->playlists_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playlist. |
 **playlist** | [**Playlist**](Playlist.md)|  |

### Return type

[**Playlist**](Playlist.md)

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

