# libretime_client.StationPodcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**station_podcasts_create**](StationPodcastsApi.md#station_podcasts_create) | **POST** /api/v2/station-podcasts | 
[**station_podcasts_destroy**](StationPodcastsApi.md#station_podcasts_destroy) | **DELETE** /api/v2/station-podcasts/{id} | 
[**station_podcasts_list**](StationPodcastsApi.md#station_podcasts_list) | **GET** /api/v2/station-podcasts | 
[**station_podcasts_partial_update**](StationPodcastsApi.md#station_podcasts_partial_update) | **PATCH** /api/v2/station-podcasts/{id} | 
[**station_podcasts_retrieve**](StationPodcastsApi.md#station_podcasts_retrieve) | **GET** /api/v2/station-podcasts/{id} | 
[**station_podcasts_update**](StationPodcastsApi.md#station_podcasts_update) | **PUT** /api/v2/station-podcasts/{id} | 


# **station_podcasts_create**
> StationPodcast station_podcasts_create(station_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.station_podcast import StationPodcast
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)
    station_podcast = libretime_client.StationPodcast() # StationPodcast | 

    try:
        api_response = api_instance.station_podcasts_create(station_podcast)
        print("The response of StationPodcastsApi->station_podcasts_create:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this station podcast.

    try:
        api_instance.station_podcasts_destroy(id)
    except Exception as e:
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
> List[StationPodcast] station_podcasts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.station_podcast import StationPodcast
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)

    try:
        api_response = api_instance.station_podcasts_list()
        print("The response of StationPodcastsApi->station_podcasts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StationPodcastsApi->station_podcasts_list: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**List[StationPodcast]**](StationPodcast.md)

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
> StationPodcast station_podcasts_partial_update(id, patched_station_podcast=patched_station_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.patched_station_podcast import PatchedStationPodcast
from libretime_client.models.station_podcast import StationPodcast
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this station podcast.
    patched_station_podcast = libretime_client.PatchedStationPodcast() # PatchedStationPodcast |  (optional)

    try:
        api_response = api_instance.station_podcasts_partial_update(id, patched_station_podcast=patched_station_podcast)
        print("The response of StationPodcastsApi->station_podcasts_partial_update:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.station_podcast import StationPodcast
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this station podcast.

    try:
        api_response = api_instance.station_podcasts_retrieve(id)
        print("The response of StationPodcastsApi->station_podcasts_retrieve:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.station_podcast import StationPodcast
from libretime_client.rest import ApiException
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
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = libretime_client.StationPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this station podcast.
    station_podcast = libretime_client.StationPodcast() # StationPodcast | 

    try:
        api_response = api_instance.station_podcasts_update(id, station_podcast)
        print("The response of StationPodcastsApi->station_podcasts_update:\n")
        pprint(api_response)
    except Exception as e:
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

