# libretime_client.ImportedPodcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imported_podcasts_create**](ImportedPodcastsApi.md#imported_podcasts_create) | **POST** /api/v2/imported-podcasts | 
[**imported_podcasts_destroy**](ImportedPodcastsApi.md#imported_podcasts_destroy) | **DELETE** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_list**](ImportedPodcastsApi.md#imported_podcasts_list) | **GET** /api/v2/imported-podcasts | 
[**imported_podcasts_partial_update**](ImportedPodcastsApi.md#imported_podcasts_partial_update) | **PATCH** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_retrieve**](ImportedPodcastsApi.md#imported_podcasts_retrieve) | **GET** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_update**](ImportedPodcastsApi.md#imported_podcasts_update) | **PUT** /api/v2/imported-podcasts/{id} | 


# **imported_podcasts_create**
> ImportedPodcast imported_podcasts_create(imported_podcast)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.imported_podcast import ImportedPodcast
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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)
    imported_podcast = libretime_client.ImportedPodcast() # ImportedPodcast | 

    try:
        api_response = api_instance.imported_podcasts_create(imported_podcast)
        print("The response of ImportedPodcastsApi->imported_podcasts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imported_podcast** | [**ImportedPodcast**](ImportedPodcast.md)|  | 

### Return type

[**ImportedPodcast**](ImportedPodcast.md)

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

# **imported_podcasts_destroy**
> imported_podcasts_destroy(id)

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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this imported podcast.

    try:
        api_instance.imported_podcasts_destroy(id)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. | 

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

# **imported_podcasts_list**
> List[ImportedPodcast] imported_podcasts_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.imported_podcast import ImportedPodcast
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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)

    try:
        api_response = api_instance.imported_podcasts_list()
        print("The response of ImportedPodcastsApi->imported_podcasts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ImportedPodcast]**](ImportedPodcast.md)

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

# **imported_podcasts_partial_update**
> ImportedPodcast imported_podcasts_partial_update(id, patched_imported_podcast=patched_imported_podcast)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.imported_podcast import ImportedPodcast
from libretime_client.models.patched_imported_podcast import PatchedImportedPodcast
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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this imported podcast.
    patched_imported_podcast = libretime_client.PatchedImportedPodcast() # PatchedImportedPodcast |  (optional)

    try:
        api_response = api_instance.imported_podcasts_partial_update(id, patched_imported_podcast=patched_imported_podcast)
        print("The response of ImportedPodcastsApi->imported_podcasts_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. | 
 **patched_imported_podcast** | [**PatchedImportedPodcast**](PatchedImportedPodcast.md)|  | [optional] 

### Return type

[**ImportedPodcast**](ImportedPodcast.md)

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

# **imported_podcasts_retrieve**
> ImportedPodcast imported_podcasts_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.imported_podcast import ImportedPodcast
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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this imported podcast.

    try:
        api_response = api_instance.imported_podcasts_retrieve(id)
        print("The response of ImportedPodcastsApi->imported_podcasts_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. | 

### Return type

[**ImportedPodcast**](ImportedPodcast.md)

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

# **imported_podcasts_update**
> ImportedPodcast imported_podcasts_update(id, imported_podcast)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.imported_podcast import ImportedPodcast
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
    api_instance = libretime_client.ImportedPodcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this imported podcast.
    imported_podcast = libretime_client.ImportedPodcast() # ImportedPodcast | 

    try:
        api_response = api_instance.imported_podcasts_update(id, imported_podcast)
        print("The response of ImportedPodcastsApi->imported_podcasts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. | 
 **imported_podcast** | [**ImportedPodcast**](ImportedPodcast.md)|  | 

### Return type

[**ImportedPodcast**](ImportedPodcast.md)

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

