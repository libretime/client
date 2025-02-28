# libretime_client.WebstreamMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webstream_metadata_create**](WebstreamMetadataApi.md#webstream_metadata_create) | **POST** /api/v2/webstream-metadata | 
[**webstream_metadata_destroy**](WebstreamMetadataApi.md#webstream_metadata_destroy) | **DELETE** /api/v2/webstream-metadata/{id} | 
[**webstream_metadata_list**](WebstreamMetadataApi.md#webstream_metadata_list) | **GET** /api/v2/webstream-metadata | 
[**webstream_metadata_partial_update**](WebstreamMetadataApi.md#webstream_metadata_partial_update) | **PATCH** /api/v2/webstream-metadata/{id} | 
[**webstream_metadata_retrieve**](WebstreamMetadataApi.md#webstream_metadata_retrieve) | **GET** /api/v2/webstream-metadata/{id} | 
[**webstream_metadata_update**](WebstreamMetadataApi.md#webstream_metadata_update) | **PUT** /api/v2/webstream-metadata/{id} | 


# **webstream_metadata_create**
> WebstreamMetadata webstream_metadata_create(webstream_metadata)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.webstream_metadata import WebstreamMetadata
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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)
    webstream_metadata = libretime_client.WebstreamMetadata() # WebstreamMetadata | 

    try:
        api_response = api_instance.webstream_metadata_create(webstream_metadata)
        print("The response of WebstreamMetadataApi->webstream_metadata_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webstream_metadata** | [**WebstreamMetadata**](WebstreamMetadata.md)|  | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

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

# **webstream_metadata_destroy**
> webstream_metadata_destroy(id)

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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this webstream metadata.

    try:
        api_instance.webstream_metadata_destroy(id)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. | 

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

# **webstream_metadata_list**
> List[WebstreamMetadata] webstream_metadata_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.webstream_metadata import WebstreamMetadata
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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)

    try:
        api_response = api_instance.webstream_metadata_list()
        print("The response of WebstreamMetadataApi->webstream_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[WebstreamMetadata]**](WebstreamMetadata.md)

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

# **webstream_metadata_partial_update**
> WebstreamMetadata webstream_metadata_partial_update(id, patched_webstream_metadata=patched_webstream_metadata)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_webstream_metadata import PatchedWebstreamMetadata
from libretime_client.models.webstream_metadata import WebstreamMetadata
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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this webstream metadata.
    patched_webstream_metadata = libretime_client.PatchedWebstreamMetadata() # PatchedWebstreamMetadata |  (optional)

    try:
        api_response = api_instance.webstream_metadata_partial_update(id, patched_webstream_metadata=patched_webstream_metadata)
        print("The response of WebstreamMetadataApi->webstream_metadata_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. | 
 **patched_webstream_metadata** | [**PatchedWebstreamMetadata**](PatchedWebstreamMetadata.md)|  | [optional] 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

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

# **webstream_metadata_retrieve**
> WebstreamMetadata webstream_metadata_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.webstream_metadata import WebstreamMetadata
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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this webstream metadata.

    try:
        api_response = api_instance.webstream_metadata_retrieve(id)
        print("The response of WebstreamMetadataApi->webstream_metadata_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

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

# **webstream_metadata_update**
> WebstreamMetadata webstream_metadata_update(id, webstream_metadata)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.webstream_metadata import WebstreamMetadata
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
    api_instance = libretime_client.WebstreamMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this webstream metadata.
    webstream_metadata = libretime_client.WebstreamMetadata() # WebstreamMetadata | 

    try:
        api_response = api_instance.webstream_metadata_update(id, webstream_metadata)
        print("The response of WebstreamMetadataApi->webstream_metadata_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebstreamMetadataApi->webstream_metadata_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. | 
 **webstream_metadata** | [**WebstreamMetadata**](WebstreamMetadata.md)|  | 

### Return type

[**WebstreamMetadata**](WebstreamMetadata.md)

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

