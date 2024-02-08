# libretime_client.ShowRebroadcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**show_rebroadcasts_create**](ShowRebroadcastsApi.md#show_rebroadcasts_create) | **POST** /api/v2/show-rebroadcasts | 
[**show_rebroadcasts_destroy**](ShowRebroadcastsApi.md#show_rebroadcasts_destroy) | **DELETE** /api/v2/show-rebroadcasts/{id} | 
[**show_rebroadcasts_list**](ShowRebroadcastsApi.md#show_rebroadcasts_list) | **GET** /api/v2/show-rebroadcasts | 
[**show_rebroadcasts_partial_update**](ShowRebroadcastsApi.md#show_rebroadcasts_partial_update) | **PATCH** /api/v2/show-rebroadcasts/{id} | 
[**show_rebroadcasts_retrieve**](ShowRebroadcastsApi.md#show_rebroadcasts_retrieve) | **GET** /api/v2/show-rebroadcasts/{id} | 
[**show_rebroadcasts_update**](ShowRebroadcastsApi.md#show_rebroadcasts_update) | **PUT** /api/v2/show-rebroadcasts/{id} | 


# **show_rebroadcasts_create**
> ShowRebroadcast show_rebroadcasts_create(show_rebroadcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.show_rebroadcast import ShowRebroadcast
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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)
    show_rebroadcast = libretime_client.ShowRebroadcast() # ShowRebroadcast | 

    try:
        api_response = api_instance.show_rebroadcasts_create(show_rebroadcast)
        print("The response of ShowRebroadcastsApi->show_rebroadcasts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_rebroadcast** | [**ShowRebroadcast**](ShowRebroadcast.md)|  | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

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

# **show_rebroadcasts_destroy**
> show_rebroadcasts_destroy(id)



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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this show rebroadcast.

    try:
        api_instance.show_rebroadcasts_destroy(id)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. | 

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

# **show_rebroadcasts_list**
> List[ShowRebroadcast] show_rebroadcasts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.show_rebroadcast import ShowRebroadcast
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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)

    try:
        api_response = api_instance.show_rebroadcasts_list()
        print("The response of ShowRebroadcastsApi->show_rebroadcasts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ShowRebroadcast]**](ShowRebroadcast.md)

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

# **show_rebroadcasts_partial_update**
> ShowRebroadcast show_rebroadcasts_partial_update(id, patched_show_rebroadcast=patched_show_rebroadcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_show_rebroadcast import PatchedShowRebroadcast
from libretime_client.models.show_rebroadcast import ShowRebroadcast
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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this show rebroadcast.
    patched_show_rebroadcast = libretime_client.PatchedShowRebroadcast() # PatchedShowRebroadcast |  (optional)

    try:
        api_response = api_instance.show_rebroadcasts_partial_update(id, patched_show_rebroadcast=patched_show_rebroadcast)
        print("The response of ShowRebroadcastsApi->show_rebroadcasts_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. | 
 **patched_show_rebroadcast** | [**PatchedShowRebroadcast**](PatchedShowRebroadcast.md)|  | [optional] 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

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

# **show_rebroadcasts_retrieve**
> ShowRebroadcast show_rebroadcasts_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.show_rebroadcast import ShowRebroadcast
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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this show rebroadcast.

    try:
        api_response = api_instance.show_rebroadcasts_retrieve(id)
        print("The response of ShowRebroadcastsApi->show_rebroadcasts_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

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

# **show_rebroadcasts_update**
> ShowRebroadcast show_rebroadcasts_update(id, show_rebroadcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.show_rebroadcast import ShowRebroadcast
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
    api_instance = libretime_client.ShowRebroadcastsApi(api_client)
    id = 56 # int | A unique integer value identifying this show rebroadcast.
    show_rebroadcast = libretime_client.ShowRebroadcast() # ShowRebroadcast | 

    try:
        api_response = api_instance.show_rebroadcasts_update(id, show_rebroadcast)
        print("The response of ShowRebroadcastsApi->show_rebroadcasts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowRebroadcastsApi->show_rebroadcasts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. | 
 **show_rebroadcast** | [**ShowRebroadcast**](ShowRebroadcast.md)|  | 

### Return type

[**ShowRebroadcast**](ShowRebroadcast.md)

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

