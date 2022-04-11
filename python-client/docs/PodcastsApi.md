# libretime_client.PodcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**podcasts_create**](PodcastsApi.md#podcasts_create) | **POST** /api/v2/podcasts/ | 
[**podcasts_destroy**](PodcastsApi.md#podcasts_destroy) | **DELETE** /api/v2/podcasts/{id}/ | 
[**podcasts_list**](PodcastsApi.md#podcasts_list) | **GET** /api/v2/podcasts/ | 
[**podcasts_partial_update**](PodcastsApi.md#podcasts_partial_update) | **PATCH** /api/v2/podcasts/{id}/ | 
[**podcasts_retrieve**](PodcastsApi.md#podcasts_retrieve) | **GET** /api/v2/podcasts/{id}/ | 
[**podcasts_update**](PodcastsApi.md#podcasts_update) | **PUT** /api/v2/podcasts/{id}/ | 


# **podcasts_create**
> Podcast podcasts_create(podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
from libretime_client.model.podcast import Podcast
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
    api_instance = podcasts_api.PodcastsApi(api_client)
    podcast = Podcast(
        url="url_example",
        title="title_example",
        creator="creator_example",
        description="description_example",
        language="language_example",
        copyright="copyright_example",
        link="link_example",
        itunes_author="itunes_author_example",
        itunes_keywords="itunes_keywords_example",
        itunes_summary="itunes_summary_example",
        itunes_subtitle="itunes_subtitle_example",
        itunes_category="itunes_category_example",
        itunes_explicit="itunes_explicit_example",
        owner="owner_example",
    ) # Podcast | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcasts_create(podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **podcast** | [**Podcast**](Podcast.md)|  |

### Return type

[**Podcast**](Podcast.md)

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

# **podcasts_destroy**
> podcasts_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
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
    api_instance = podcasts_api.PodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast.

    # example passing only required values which don't have defaults set
    try:
        api_instance.podcasts_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast. |

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

# **podcasts_list**
> [Podcast] podcasts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
from libretime_client.model.podcast import Podcast
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
    api_instance = podcasts_api.PodcastsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.podcasts_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Podcast]**](Podcast.md)

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

# **podcasts_partial_update**
> Podcast podcasts_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
from libretime_client.model.podcast import Podcast
from libretime_client.model.patched_podcast import PatchedPodcast
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
    api_instance = podcasts_api.PodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast.
    patched_podcast = PatchedPodcast(
        url="url_example",
        title="title_example",
        creator="creator_example",
        description="description_example",
        language="language_example",
        copyright="copyright_example",
        link="link_example",
        itunes_author="itunes_author_example",
        itunes_keywords="itunes_keywords_example",
        itunes_summary="itunes_summary_example",
        itunes_subtitle="itunes_subtitle_example",
        itunes_category="itunes_category_example",
        itunes_explicit="itunes_explicit_example",
        owner="owner_example",
    ) # PatchedPodcast |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcasts_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.podcasts_partial_update(id, patched_podcast=patched_podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast. |
 **patched_podcast** | [**PatchedPodcast**](PatchedPodcast.md)|  | [optional]

### Return type

[**Podcast**](Podcast.md)

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

# **podcasts_retrieve**
> Podcast podcasts_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
from libretime_client.model.podcast import Podcast
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
    api_instance = podcasts_api.PodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcasts_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast. |

### Return type

[**Podcast**](Podcast.md)

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

# **podcasts_update**
> Podcast podcasts_update(id, podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import podcasts_api
from libretime_client.model.podcast import Podcast
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
    api_instance = podcasts_api.PodcastsApi(api_client)
    id = 1 # int | A unique integer value identifying this podcast.
    podcast = Podcast(
        url="url_example",
        title="title_example",
        creator="creator_example",
        description="description_example",
        language="language_example",
        copyright="copyright_example",
        link="link_example",
        itunes_author="itunes_author_example",
        itunes_keywords="itunes_keywords_example",
        itunes_summary="itunes_summary_example",
        itunes_subtitle="itunes_subtitle_example",
        itunes_category="itunes_category_example",
        itunes_explicit="itunes_explicit_example",
        owner="owner_example",
    ) # Podcast | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.podcasts_update(id, podcast)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PodcastsApi->podcasts_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast. |
 **podcast** | [**Podcast**](Podcast.md)|  |

### Return type

[**Podcast**](Podcast.md)

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

