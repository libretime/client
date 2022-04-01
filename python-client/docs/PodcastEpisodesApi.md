# openapi_client.PodcastEpisodesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**podcast_episodes_create**](PodcastEpisodesApi.md#podcast_episodes_create) | **POST** /api/v2/podcast-episodes/ | 
[**podcast_episodes_destroy**](PodcastEpisodesApi.md#podcast_episodes_destroy) | **DELETE** /api/v2/podcast-episodes/{id}/ | 
[**podcast_episodes_list**](PodcastEpisodesApi.md#podcast_episodes_list) | **GET** /api/v2/podcast-episodes/ | 
[**podcast_episodes_partial_update**](PodcastEpisodesApi.md#podcast_episodes_partial_update) | **PATCH** /api/v2/podcast-episodes/{id}/ | 
[**podcast_episodes_retrieve**](PodcastEpisodesApi.md#podcast_episodes_retrieve) | **GET** /api/v2/podcast-episodes/{id}/ | 
[**podcast_episodes_update**](PodcastEpisodesApi.md#podcast_episodes_update) | **PUT** /api/v2/podcast-episodes/{id}/ | 


# **podcast_episodes_create**
> PodcastEpisode podcast_episodes_create(podcast_episode)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
from openapi_client.model.podcast_episode import PodcastEpisode
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)
    podcast_episode = PodcastEpisode(
        publication_date=dateutil_parser('1970-01-01T00:00:00.00Z'),
        download_url="download_url_example",
        episode_guid="episode_guid_example",
        episode_title="episode_title_example",
        episode_description="episode_description_example",
        file="file_example",
        podcast="podcast_example",
    ) # PodcastEpisode | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcast_episodes_create(podcast_episode)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **podcast_episode** | [**PodcastEpisode**](PodcastEpisode.md)|  |

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

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

# **podcast_episodes_destroy**
> podcast_episodes_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast episode.

    # example passing only required values which don't have defaults set
    try:
        api_instance.podcast_episodes_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |

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

# **podcast_episodes_list**
> [PodcastEpisode] podcast_episodes_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
from openapi_client.model.podcast_episode import PodcastEpisode
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.podcast_episodes_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[PodcastEpisode]**](PodcastEpisode.md)

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

# **podcast_episodes_partial_update**
> PodcastEpisode podcast_episodes_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
from openapi_client.model.podcast_episode import PodcastEpisode
from openapi_client.model.patched_podcast_episode import PatchedPodcastEpisode
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast episode.
    patched_podcast_episode = PatchedPodcastEpisode(
        publication_date=dateutil_parser('1970-01-01T00:00:00.00Z'),
        download_url="download_url_example",
        episode_guid="episode_guid_example",
        episode_title="episode_title_example",
        episode_description="episode_description_example",
        file="file_example",
        podcast="podcast_example",
    ) # PatchedPodcastEpisode |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcast_episodes_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.podcast_episodes_partial_update(id, patched_podcast_episode=patched_podcast_episode)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |
 **patched_podcast_episode** | [**PatchedPodcastEpisode**](PatchedPodcastEpisode.md)|  | [optional]

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

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

# **podcast_episodes_retrieve**
> PodcastEpisode podcast_episodes_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
from openapi_client.model.podcast_episode import PodcastEpisode
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast episode.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcast_episodes_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

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

# **podcast_episodes_update**
> PodcastEpisode podcast_episodes_update(id, podcast_episode)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import podcast_episodes_api
from openapi_client.model.podcast_episode import PodcastEpisode
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
    api_instance = podcast_episodes_api.PodcastEpisodesApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast episode.
    podcast_episode = PodcastEpisode(
        publication_date=dateutil_parser('1970-01-01T00:00:00.00Z'),
        download_url="download_url_example",
        episode_guid="episode_guid_example",
        episode_title="episode_title_example",
        episode_description="episode_description_example",
        file="file_example",
        podcast="podcast_example",
    ) # PodcastEpisode | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcast_episodes_update(id, podcast_episode)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |
 **podcast_episode** | [**PodcastEpisode**](PodcastEpisode.md)|  |

### Return type

[**PodcastEpisode**](PodcastEpisode.md)

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

