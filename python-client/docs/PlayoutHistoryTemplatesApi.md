# libretime_client.PlayoutHistoryTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_templates_create**](PlayoutHistoryTemplatesApi.md#playout_history_templates_create) | **POST** /api/v2/playout-history-templates | 
[**playout_history_templates_destroy**](PlayoutHistoryTemplatesApi.md#playout_history_templates_destroy) | **DELETE** /api/v2/playout-history-templates/{id} | 
[**playout_history_templates_list**](PlayoutHistoryTemplatesApi.md#playout_history_templates_list) | **GET** /api/v2/playout-history-templates | 
[**playout_history_templates_partial_update**](PlayoutHistoryTemplatesApi.md#playout_history_templates_partial_update) | **PATCH** /api/v2/playout-history-templates/{id} | 
[**playout_history_templates_retrieve**](PlayoutHistoryTemplatesApi.md#playout_history_templates_retrieve) | **GET** /api/v2/playout-history-templates/{id} | 
[**playout_history_templates_update**](PlayoutHistoryTemplatesApi.md#playout_history_templates_update) | **PUT** /api/v2/playout-history-templates/{id} | 


# **playout_history_templates_create**
> PlayoutHistoryTemplate playout_history_templates_create(playout_history_template)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate
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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)
    playout_history_template = libretime_client.PlayoutHistoryTemplate() # PlayoutHistoryTemplate | 

    try:
        api_response = api_instance.playout_history_templates_create(playout_history_template)
        print("The response of PlayoutHistoryTemplatesApi->playout_history_templates_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playout_history_template** | [**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)|  | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

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

# **playout_history_templates_destroy**
> playout_history_templates_destroy(id)

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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template.

    try:
        api_instance.playout_history_templates_destroy(id)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template. | 

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

# **playout_history_templates_list**
> List[PlayoutHistoryTemplate] playout_history_templates_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate
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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)

    try:
        api_response = api_instance.playout_history_templates_list()
        print("The response of PlayoutHistoryTemplatesApi->playout_history_templates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PlayoutHistoryTemplate]**](PlayoutHistoryTemplate.md)

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

# **playout_history_templates_partial_update**
> PlayoutHistoryTemplate playout_history_templates_partial_update(id, patched_playout_history_template=patched_playout_history_template)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_playout_history_template import PatchedPlayoutHistoryTemplate
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate
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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template.
    patched_playout_history_template = libretime_client.PatchedPlayoutHistoryTemplate() # PatchedPlayoutHistoryTemplate |  (optional)

    try:
        api_response = api_instance.playout_history_templates_partial_update(id, patched_playout_history_template=patched_playout_history_template)
        print("The response of PlayoutHistoryTemplatesApi->playout_history_templates_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template. | 
 **patched_playout_history_template** | [**PatchedPlayoutHistoryTemplate**](PatchedPlayoutHistoryTemplate.md)|  | [optional] 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

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

# **playout_history_templates_retrieve**
> PlayoutHistoryTemplate playout_history_templates_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate
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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template.

    try:
        api_response = api_instance.playout_history_templates_retrieve(id)
        print("The response of PlayoutHistoryTemplatesApi->playout_history_templates_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template. | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

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

# **playout_history_templates_update**
> PlayoutHistoryTemplate playout_history_templates_update(id, playout_history_template)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.playout_history_template import PlayoutHistoryTemplate
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
    api_instance = libretime_client.PlayoutHistoryTemplatesApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template.
    playout_history_template = libretime_client.PlayoutHistoryTemplate() # PlayoutHistoryTemplate | 

    try:
        api_response = api_instance.playout_history_templates_update(id, playout_history_template)
        print("The response of PlayoutHistoryTemplatesApi->playout_history_templates_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplatesApi->playout_history_templates_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template. | 
 **playout_history_template** | [**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)|  | 

### Return type

[**PlayoutHistoryTemplate**](PlayoutHistoryTemplate.md)

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

