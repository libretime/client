# libretime_client.StationPodcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**station_podcasts_create**](StationPodcastsApi.md#station_podcasts_create) | **POST** /api/v2/station-podcasts/ | 
[**station_podcasts_destroy**](StationPodcastsApi.md#station_podcasts_destroy) | **DELETE** /api/v2/station-podcasts/{id}/ | 
[**station_podcasts_list**](StationPodcastsApi.md#station_podcasts_list) | **GET** /api/v2/station-podcasts/ | 
[**station_podcasts_partial_update**](StationPodcastsApi.md#station_podcasts_partial_update) | **PATCH** /api/v2/station-podcasts/{id}/ | 
[**station_podcasts_retrieve**](StationPodcastsApi.md#station_podcasts_retrieve) | **GET** /api/v2/station-podcasts/{id}/ | 
[**station_podcasts_update**](StationPodcastsApi.md#station_podcasts_update) | **PUT** /api/v2/station-podcasts/{id}/ | 


# **station_podcasts_create**
> StationPodcast station_podcasts_create(station_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
from libretime_client.model.station_podcast import StationPodcast
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)
    station_podcast = StationPodcast(
        podcast="podcast_example",
    ) # StationPodcast | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.station_podcasts_create(station_podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station_podcast** | [**StationPodcast**](StationPodcast.md)|  |

### Return type

[**StationPodcast**](StationPodcast.md)

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

# **station_podcasts_destroy**
> station_podcasts_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this station podcast.

    # example passing only required values which don't have defaults set
    try:
        api_instance.station_podcasts_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this station podcast. |

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

# **station_podcasts_list**
> [StationPodcast] station_podcasts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
from libretime_client.model.station_podcast import StationPodcast
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.station_podcasts_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[StationPodcast]**](StationPodcast.md)

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

# **station_podcasts_partial_update**
> StationPodcast station_podcasts_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
from libretime_client.model.station_podcast import StationPodcast
from libretime_client.model.patched_station_podcast import PatchedStationPodcast
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this station podcast.
    patched_station_podcast = PatchedStationPodcast(
        podcast="podcast_example",
    ) # PatchedStationPodcast |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.station_podcasts_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.station_podcasts_partial_update(id, patched_station_podcast=patched_station_podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this station podcast. |
 **patched_station_podcast** | [**PatchedStationPodcast**](PatchedStationPodcast.md)|  | [optional]

### Return type

[**StationPodcast**](StationPodcast.md)

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

# **station_podcasts_retrieve**
> StationPodcast station_podcasts_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
from libretime_client.model.station_podcast import StationPodcast
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this station podcast.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.station_podcasts_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this station podcast. |

### Return type

[**StationPodcast**](StationPodcast.md)

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

# **station_podcasts_update**
> StationPodcast station_podcasts_update(id, station_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import station_podcasts_api
from libretime_client.model.station_podcast import StationPodcast
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
    api_instance = station_podcasts_api.StationPodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this station podcast.
    station_podcast = StationPodcast(
        podcast="podcast_example",
    ) # StationPodcast | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.station_podcasts_update(id, station_podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this station podcast. |
 **station_podcast** | [**StationPodcast**](StationPodcast.md)|  |

### Return type

[**StationPodcast**](StationPodcast.md)

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

