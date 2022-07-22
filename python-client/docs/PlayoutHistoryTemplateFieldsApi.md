# libretime_client.PlayoutHistoryTemplateFieldsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_template_fields_create**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_create) | **POST** /api/v2/playout-history-template-fields | 
[**playout_history_template_fields_destroy**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_destroy) | **DELETE** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_list**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_list) | **GET** /api/v2/playout-history-template-fields | 
[**playout_history_template_fields_partial_update**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_partial_update) | **PATCH** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_retrieve**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_retrieve) | **GET** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_update**](PlayoutHistoryTemplateFieldsApi.md#playout_history_template_fields_update) | **PUT** /api/v2/playout-history-template-fields/{id} | 


# **playout_history_template_fields_create**
> PlayoutHistoryTemplateField playout_history_template_fields_create(playout_history_template_field)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)
    playout_history_template_field = PlayoutHistoryTemplateField(
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template="template_example",
    ) # PlayoutHistoryTemplateField | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_template_fields_create(playout_history_template_field)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playout_history_template_field** | [**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)|  |

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

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

# **playout_history_template_fields_destroy**
> playout_history_template_fields_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history template field.

    # example passing only required values which don't have defaults set
    try:
        api_instance.playout_history_template_fields_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template field. |

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

# **playout_history_template_fields_list**
> [PlayoutHistoryTemplateField] playout_history_template_fields_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playout_history_template_fields_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayoutHistoryTemplateField]**](PlayoutHistoryTemplateField.md)

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

# **playout_history_template_fields_partial_update**
> PlayoutHistoryTemplateField playout_history_template_fields_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
from libretime_client.model.patched_playout_history_template_field import PatchedPlayoutHistoryTemplateField
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history template field.
    patched_playout_history_template_field = PatchedPlayoutHistoryTemplateField(
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template="template_example",
    ) # PatchedPlayoutHistoryTemplateField |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_template_fields_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.playout_history_template_fields_partial_update(id, patched_playout_history_template_field=patched_playout_history_template_field)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template field. |
 **patched_playout_history_template_field** | [**PatchedPlayoutHistoryTemplateField**](PatchedPlayoutHistoryTemplateField.md)|  | [optional]

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

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

# **playout_history_template_fields_retrieve**
> PlayoutHistoryTemplateField playout_history_template_fields_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history template field.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_template_fields_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template field. |

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

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

# **playout_history_template_fields_update**
> PlayoutHistoryTemplateField playout_history_template_fields_update(id, playout_history_template_field)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 1 # int | A unique integer value identifying this playout history template field.
    playout_history_template_field = PlayoutHistoryTemplateField(
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template="template_example",
    ) # PlayoutHistoryTemplateField | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.playout_history_template_fields_update(id, playout_history_template_field)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history template field. |
 **playout_history_template_field** | [**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)|  |

### Return type

[**PlayoutHistoryTemplateField**](PlayoutHistoryTemplateField.md)

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

