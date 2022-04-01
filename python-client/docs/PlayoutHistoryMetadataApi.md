# openapi_client.PlayoutHistoryMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_metadata_create**](PlayoutHistoryMetadataApi.md#playout_history_metadata_create) | **POST** /api/v2/playout-history-metadata/ | 
[**playout_history_metadata_destroy**](PlayoutHistoryMetadataApi.md#playout_history_metadata_destroy) | **DELETE** /api/v2/playout-history-metadata/{id}/ | 
[**playout_history_metadata_list**](PlayoutHistoryMetadataApi.md#playout_history_metadata_list) | **GET** /api/v2/playout-history-metadata/ | 
[**playout_history_metadata_partial_update**](PlayoutHistoryMetadataApi.md#playout_history_metadata_partial_update) | **PATCH** /api/v2/playout-history-metadata/{id}/ | 
[**playout_history_metadata_retrieve**](PlayoutHistoryMetadataApi.md#playout_history_metadata_retrieve) | **GET** /api/v2/playout-history-metadata/{id}/ | 
[**playout_history_metadata_update**](PlayoutHistoryMetadataApi.md#playout_history_metadata_update) | **PUT** /api/v2/playout-history-metadata/{id}/ | 


# **playout_history_metadata_create**
> PlayoutHistoryMetadata playout_history_metadata_create(playout_history_metadata)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
from openapi_client.model.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)
    playout_history_metadata = PlayoutHistoryMetadata(
        key="key_example",
        value="value_example",
        history="history_example",
    ) # PlayoutHistoryMetadata | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_metadata_create(playout_history_metadata)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playout_history_metadata** | [**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)|  |

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

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

# **playout_history_metadata_destroy**
> playout_history_metadata_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history metadata.

    # example passing only required values which don't have defaults set
    try:
        api_instance.playout_history_metadata_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |

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

# **playout_history_metadata_list**
> [PlayoutHistoryMetadata] playout_history_metadata_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
from openapi_client.model.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playout_history_metadata_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayoutHistoryMetadata]**](PlayoutHistoryMetadata.md)

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

# **playout_history_metadata_partial_update**
> PlayoutHistoryMetadata playout_history_metadata_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
from openapi_client.model.patched_playout_history_metadata import PatchedPlayoutHistoryMetadata
from openapi_client.model.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history metadata.
    patched_playout_history_metadata = PatchedPlayoutHistoryMetadata(
        key="key_example",
        value="value_example",
        history="history_example",
    ) # PatchedPlayoutHistoryMetadata |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_metadata_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.playout_history_metadata_partial_update(id, patched_playout_history_metadata=patched_playout_history_metadata)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |
 **patched_playout_history_metadata** | [**PatchedPlayoutHistoryMetadata**](PatchedPlayoutHistoryMetadata.md)|  | [optional]

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

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

# **playout_history_metadata_retrieve**
> PlayoutHistoryMetadata playout_history_metadata_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
from openapi_client.model.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history metadata.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_metadata_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

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

# **playout_history_metadata_update**
> PlayoutHistoryMetadata playout_history_metadata_update(id, playout_history_metadata)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import playout_history_metadata_api
from openapi_client.model.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = playout_history_metadata_api.PlayoutHistoryMetadataApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history metadata.
    playout_history_metadata = PlayoutHistoryMetadata(
        key="key_example",
        value="value_example",
        history="history_example",
    ) # PlayoutHistoryMetadata | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_metadata_update(id, playout_history_metadata)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |
 **playout_history_metadata** | [**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)|  |

### Return type

[**PlayoutHistoryMetadata**](PlayoutHistoryMetadata.md)

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

