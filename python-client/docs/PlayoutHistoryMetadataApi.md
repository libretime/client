# libretime_client.PlayoutHistoryMetadataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_metadata_create**](PlayoutHistoryMetadataApi.md#playout_history_metadata_create) | **POST** /api/v2/playout-history-metadata | 
[**playout_history_metadata_destroy**](PlayoutHistoryMetadataApi.md#playout_history_metadata_destroy) | **DELETE** /api/v2/playout-history-metadata/{id} | 
[**playout_history_metadata_list**](PlayoutHistoryMetadataApi.md#playout_history_metadata_list) | **GET** /api/v2/playout-history-metadata | 
[**playout_history_metadata_partial_update**](PlayoutHistoryMetadataApi.md#playout_history_metadata_partial_update) | **PATCH** /api/v2/playout-history-metadata/{id} | 
[**playout_history_metadata_retrieve**](PlayoutHistoryMetadataApi.md#playout_history_metadata_retrieve) | **GET** /api/v2/playout-history-metadata/{id} | 
[**playout_history_metadata_update**](PlayoutHistoryMetadataApi.md#playout_history_metadata_update) | **PUT** /api/v2/playout-history-metadata/{id} | 


# **playout_history_metadata_create**
> PlayoutHistoryMetadata playout_history_metadata_create(playout_history_metadata)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)
    playout_history_metadata = libretime_client.PlayoutHistoryMetadata() # PlayoutHistoryMetadata | 

    try:
        api_response = api_instance.playout_history_metadata_create(playout_history_metadata)
        print("The response of PlayoutHistoryMetadataApi->playout_history_metadata_create:\n")
        pprint(api_response)
    except Exception as e:
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history metadata.

    try:
        api_instance.playout_history_metadata_destroy(id)
    except Exception as e:
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
> List[PlayoutHistoryMetadata] playout_history_metadata_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)

    try:
        api_response = api_instance.playout_history_metadata_list()
        print("The response of PlayoutHistoryMetadataApi->playout_history_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryMetadataApi->playout_history_metadata_list: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**List[PlayoutHistoryMetadata]**](PlayoutHistoryMetadata.md)

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
> PlayoutHistoryMetadata playout_history_metadata_partial_update(id, patched_playout_history_metadata=patched_playout_history_metadata)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.patched_playout_history_metadata import PatchedPlayoutHistoryMetadata
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history metadata.
    patched_playout_history_metadata = libretime_client.PatchedPlayoutHistoryMetadata() # PatchedPlayoutHistoryMetadata |  (optional)

    try:
        api_response = api_instance.playout_history_metadata_partial_update(id, patched_playout_history_metadata=patched_playout_history_metadata)
        print("The response of PlayoutHistoryMetadataApi->playout_history_metadata_partial_update:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history metadata.

    try:
        api_response = api_instance.playout_history_metadata_retrieve(id)
        print("The response of PlayoutHistoryMetadataApi->playout_history_metadata_retrieve:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.playout_history_metadata import PlayoutHistoryMetadata
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
    api_instance = libretime_client.PlayoutHistoryMetadataApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history metadata.
    playout_history_metadata = libretime_client.PlayoutHistoryMetadata() # PlayoutHistoryMetadata | 

    try:
        api_response = api_instance.playout_history_metadata_update(id, playout_history_metadata)
        print("The response of PlayoutHistoryMetadataApi->playout_history_metadata_update:\n")
        pprint(api_response)
    except Exception as e:
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

