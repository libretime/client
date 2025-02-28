# libretime_client.SmartBlockContentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smart_block_contents_create**](SmartBlockContentsApi.md#smart_block_contents_create) | **POST** /api/v2/smart-block-contents | 
[**smart_block_contents_destroy**](SmartBlockContentsApi.md#smart_block_contents_destroy) | **DELETE** /api/v2/smart-block-contents/{id} | 
[**smart_block_contents_list**](SmartBlockContentsApi.md#smart_block_contents_list) | **GET** /api/v2/smart-block-contents | 
[**smart_block_contents_partial_update**](SmartBlockContentsApi.md#smart_block_contents_partial_update) | **PATCH** /api/v2/smart-block-contents/{id} | 
[**smart_block_contents_retrieve**](SmartBlockContentsApi.md#smart_block_contents_retrieve) | **GET** /api/v2/smart-block-contents/{id} | 
[**smart_block_contents_update**](SmartBlockContentsApi.md#smart_block_contents_update) | **PUT** /api/v2/smart-block-contents/{id} | 


# **smart_block_contents_create**
> SmartBlockContent smart_block_contents_create(smart_block_content)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.smart_block_content import SmartBlockContent
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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)
    smart_block_content = libretime_client.SmartBlockContent() # SmartBlockContent | 

    try:
        api_response = api_instance.smart_block_contents_create(smart_block_content)
        print("The response of SmartBlockContentsApi->smart_block_contents_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_block_content** | [**SmartBlockContent**](SmartBlockContent.md)|  | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

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

# **smart_block_contents_destroy**
> smart_block_contents_destroy(id)

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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)
    id = 56 # int | A unique integer value identifying this smart block content.

    try:
        api_instance.smart_block_contents_destroy(id)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. | 

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

# **smart_block_contents_list**
> List[SmartBlockContent] smart_block_contents_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.smart_block_content import SmartBlockContent
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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)

    try:
        api_response = api_instance.smart_block_contents_list()
        print("The response of SmartBlockContentsApi->smart_block_contents_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SmartBlockContent]**](SmartBlockContent.md)

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

# **smart_block_contents_partial_update**
> SmartBlockContent smart_block_contents_partial_update(id, patched_smart_block_content=patched_smart_block_content)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_smart_block_content import PatchedSmartBlockContent
from libretime_client.models.smart_block_content import SmartBlockContent
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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)
    id = 56 # int | A unique integer value identifying this smart block content.
    patched_smart_block_content = libretime_client.PatchedSmartBlockContent() # PatchedSmartBlockContent |  (optional)

    try:
        api_response = api_instance.smart_block_contents_partial_update(id, patched_smart_block_content=patched_smart_block_content)
        print("The response of SmartBlockContentsApi->smart_block_contents_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. | 
 **patched_smart_block_content** | [**PatchedSmartBlockContent**](PatchedSmartBlockContent.md)|  | [optional] 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

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

# **smart_block_contents_retrieve**
> SmartBlockContent smart_block_contents_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.smart_block_content import SmartBlockContent
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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)
    id = 56 # int | A unique integer value identifying this smart block content.

    try:
        api_response = api_instance.smart_block_contents_retrieve(id)
        print("The response of SmartBlockContentsApi->smart_block_contents_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

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

# **smart_block_contents_update**
> SmartBlockContent smart_block_contents_update(id, smart_block_content)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.smart_block_content import SmartBlockContent
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
    api_instance = libretime_client.SmartBlockContentsApi(api_client)
    id = 56 # int | A unique integer value identifying this smart block content.
    smart_block_content = libretime_client.SmartBlockContent() # SmartBlockContent | 

    try:
        api_response = api_instance.smart_block_contents_update(id, smart_block_content)
        print("The response of SmartBlockContentsApi->smart_block_contents_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartBlockContentsApi->smart_block_contents_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. | 
 **smart_block_content** | [**SmartBlockContent**](SmartBlockContent.md)|  | 

### Return type

[**SmartBlockContent**](SmartBlockContent.md)

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

