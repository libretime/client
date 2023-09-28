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
import os
import libretime_client
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)
    playout_history_template_field = libretime_client.PlayoutHistoryTemplateField() # PlayoutHistoryTemplateField | 

    try:
        api_response = api_instance.playout_history_template_fields_create(playout_history_template_field)
        print("The response of PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_create:\n")
        pprint(api_response)
    except Exception as e:
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template field.

    try:
        api_instance.playout_history_template_fields_destroy(id)
    except Exception as e:
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
> List[PlayoutHistoryTemplateField] playout_history_template_fields_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)

    try:
        api_response = api_instance.playout_history_template_fields_list()
        print("The response of PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_list: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**List[PlayoutHistoryTemplateField]**](PlayoutHistoryTemplateField.md)

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
> PlayoutHistoryTemplateField playout_history_template_fields_partial_update(id, patched_playout_history_template_field=patched_playout_history_template_field)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.patched_playout_history_template_field import PatchedPlayoutHistoryTemplateField
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template field.
    patched_playout_history_template_field = libretime_client.PatchedPlayoutHistoryTemplateField() # PatchedPlayoutHistoryTemplateField |  (optional)

    try:
        api_response = api_instance.playout_history_template_fields_partial_update(id, patched_playout_history_template_field=patched_playout_history_template_field)
        print("The response of PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_partial_update:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template field.

    try:
        api_response = api_instance.playout_history_template_fields_retrieve(id)
        print("The response of PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_retrieve:\n")
        pprint(api_response)
    except Exception as e:
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
import os
import libretime_client
from libretime_client.models.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = libretime_client.PlayoutHistoryTemplateFieldsApi(api_client)
    id = 56 # int | A unique integer value identifying this playout history template field.
    playout_history_template_field = libretime_client.PlayoutHistoryTemplateField() # PlayoutHistoryTemplateField | 

    try:
        api_response = api_instance.playout_history_template_fields_update(id, playout_history_template_field)
        print("The response of PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_update:\n")
        pprint(api_response)
    except Exception as e:
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

