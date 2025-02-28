# libretime_client.PodcastEpisodesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**podcast_episodes_create**](PodcastEpisodesApi.md#podcast_episodes_create) | **POST** /api/v2/podcast-episodes | 
[**podcast_episodes_destroy**](PodcastEpisodesApi.md#podcast_episodes_destroy) | **DELETE** /api/v2/podcast-episodes/{id} | 
[**podcast_episodes_list**](PodcastEpisodesApi.md#podcast_episodes_list) | **GET** /api/v2/podcast-episodes | 
[**podcast_episodes_partial_update**](PodcastEpisodesApi.md#podcast_episodes_partial_update) | **PATCH** /api/v2/podcast-episodes/{id} | 
[**podcast_episodes_retrieve**](PodcastEpisodesApi.md#podcast_episodes_retrieve) | **GET** /api/v2/podcast-episodes/{id} | 
[**podcast_episodes_update**](PodcastEpisodesApi.md#podcast_episodes_update) | **PUT** /api/v2/podcast-episodes/{id} | 


# **podcast_episodes_create**
> PodcastEpisode podcast_episodes_create(podcast_episode)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.podcast_episode import PodcastEpisode
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)
    podcast_episode = libretime_client.PodcastEpisode() # PodcastEpisode | 

    try:
        api_response = api_instance.podcast_episodes_create(podcast_episode)
        print("The response of PodcastEpisodesApi->podcast_episodes_create:\n")
        pprint(api_response)
    except Exception as e:
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)
    id = 56 # int | A unique integer value identifying this podcast episode.

    try:
        api_instance.podcast_episodes_destroy(id)
    except Exception as e:
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
> List[PodcastEpisode] podcast_episodes_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.podcast_episode import PodcastEpisode
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)

    try:
        api_response = api_instance.podcast_episodes_list()
        print("The response of PodcastEpisodesApi->podcast_episodes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PodcastEpisodesApi->podcast_episodes_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PodcastEpisode]**](PodcastEpisode.md)

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
> PodcastEpisode podcast_episodes_partial_update(id, patched_podcast_episode=patched_podcast_episode)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_podcast_episode import PatchedPodcastEpisode
from libretime_client.models.podcast_episode import PodcastEpisode
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)
    id = 56 # int | A unique integer value identifying this podcast episode.
    patched_podcast_episode = libretime_client.PatchedPodcastEpisode() # PatchedPodcastEpisode |  (optional)

    try:
        api_response = api_instance.podcast_episodes_partial_update(id, patched_podcast_episode=patched_podcast_episode)
        print("The response of PodcastEpisodesApi->podcast_episodes_partial_update:\n")
        pprint(api_response)
    except Exception as e:
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
import libretime_client
from libretime_client.models.podcast_episode import PodcastEpisode
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)
    id = 56 # int | A unique integer value identifying this podcast episode.

    try:
        api_response = api_instance.podcast_episodes_retrieve(id)
        print("The response of PodcastEpisodesApi->podcast_episodes_retrieve:\n")
        pprint(api_response)
    except Exception as e:
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
import libretime_client
from libretime_client.models.podcast_episode import PodcastEpisode
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
    api_instance = libretime_client.PodcastEpisodesApi(api_client)
    id = 56 # int | A unique integer value identifying this podcast episode.
    podcast_episode = libretime_client.PodcastEpisode() # PodcastEpisode | 

    try:
        api_response = api_instance.podcast_episodes_update(id, podcast_episode)
        print("The response of PodcastEpisodesApi->podcast_episodes_update:\n")
        pprint(api_response)
    except Exception as e:
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

