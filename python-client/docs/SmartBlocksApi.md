# libretime_client.SmartBlocksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smart_blocks_create**](SmartBlocksApi.md#smart_blocks_create) | **POST** /api/v2/smart-blocks | 
[**smart_blocks_destroy**](SmartBlocksApi.md#smart_blocks_destroy) | **DELETE** /api/v2/smart-blocks/{id} | 
[**smart_blocks_list**](SmartBlocksApi.md#smart_blocks_list) | **GET** /api/v2/smart-blocks | 
[**smart_blocks_partial_update**](SmartBlocksApi.md#smart_blocks_partial_update) | **PATCH** /api/v2/smart-blocks/{id} | 
[**smart_blocks_retrieve**](SmartBlocksApi.md#smart_blocks_retrieve) | **GET** /api/v2/smart-blocks/{id} | 
[**smart_blocks_update**](SmartBlocksApi.md#smart_blocks_update) | **PUT** /api/v2/smart-blocks/{id} | 


# **smart_blocks_create**
> SmartBlock smart_blocks_create(smart_block)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
from libretime_client.model.smart_block import SmartBlock
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)
    smart_block = SmartBlock(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        updated_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        name="name_example",
        description="description_example",
        length="length_example",
        kind=PatchedSmartBlockKind(None),
        owner="owner_example",
    ) # SmartBlock | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_blocks_create(smart_block)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_block** | [**SmartBlock**](SmartBlock.md)|  |

### Return type

[**SmartBlock**](SmartBlock.md)

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

# **smart_blocks_destroy**
> smart_blocks_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block.

    # example passing only required values which don't have defaults set
    try:
        api_instance.smart_blocks_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block. |

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

# **smart_blocks_list**
> [SmartBlock] smart_blocks_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
from libretime_client.model.smart_block import SmartBlock
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.smart_blocks_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[SmartBlock]**](SmartBlock.md)

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

# **smart_blocks_partial_update**
> SmartBlock smart_blocks_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
from libretime_client.model.patched_smart_block import PatchedSmartBlock
from libretime_client.model.smart_block import SmartBlock
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block.
    patched_smart_block = PatchedSmartBlock(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        updated_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        name="name_example",
        description="description_example",
        length="length_example",
        kind=PatchedSmartBlockKind(None),
        owner="owner_example",
    ) # PatchedSmartBlock |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_blocks_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.smart_blocks_partial_update(id, patched_smart_block=patched_smart_block)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block. |
 **patched_smart_block** | [**PatchedSmartBlock**](PatchedSmartBlock.md)|  | [optional]

### Return type

[**SmartBlock**](SmartBlock.md)

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

# **smart_blocks_retrieve**
> SmartBlock smart_blocks_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
from libretime_client.model.smart_block import SmartBlock
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_blocks_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block. |

### Return type

[**SmartBlock**](SmartBlock.md)

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

# **smart_blocks_update**
> SmartBlock smart_blocks_update(id, smart_block)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_blocks_api
from libretime_client.model.smart_block import SmartBlock
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
    api_instance = smart_blocks_api.SmartBlocksApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block.
    smart_block = SmartBlock(
        created_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        updated_at=dateutil_parser('1970-01-01T00:00:00.00Z'),
        name="name_example",
        description="description_example",
        length="length_example",
        kind=PatchedSmartBlockKind(None),
        owner="owner_example",
    ) # SmartBlock | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_blocks_update(id, smart_block)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlocksApi->smart_blocks_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block. |
 **smart_block** | [**SmartBlock**](SmartBlock.md)|  |

### Return type

[**SmartBlock**](SmartBlock.md)

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

