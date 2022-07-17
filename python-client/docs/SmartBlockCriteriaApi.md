# libretime_client.SmartBlockCriteriaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smart_block_criteria_create**](SmartBlockCriteriaApi.md#smart_block_criteria_create) | **POST** /api/v2/smart-block-criteria/ | 
[**smart_block_criteria_destroy**](SmartBlockCriteriaApi.md#smart_block_criteria_destroy) | **DELETE** /api/v2/smart-block-criteria/{id}/ | 
[**smart_block_criteria_list**](SmartBlockCriteriaApi.md#smart_block_criteria_list) | **GET** /api/v2/smart-block-criteria/ | 
[**smart_block_criteria_partial_update**](SmartBlockCriteriaApi.md#smart_block_criteria_partial_update) | **PATCH** /api/v2/smart-block-criteria/{id}/ | 
[**smart_block_criteria_retrieve**](SmartBlockCriteriaApi.md#smart_block_criteria_retrieve) | **GET** /api/v2/smart-block-criteria/{id}/ | 
[**smart_block_criteria_update**](SmartBlockCriteriaApi.md#smart_block_criteria_update) | **PUT** /api/v2/smart-block-criteria/{id}/ | 


# **smart_block_criteria_create**
> SmartBlockCriteria smart_block_criteria_create(smart_block_criteria)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
from libretime_client.model.smart_block_criteria import SmartBlockCriteria
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)
    smart_block_criteria = SmartBlockCriteria(
        group=-2147483648,
        criteria="criteria_example",
        condition="condition_example",
        value="value_example",
        extra="extra_example",
        block="block_example",
    ) # SmartBlockCriteria | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_block_criteria_create(smart_block_criteria)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_block_criteria** | [**SmartBlockCriteria**](SmartBlockCriteria.md)|  |

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

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

# **smart_block_criteria_destroy**
> smart_block_criteria_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block criteria.

    # example passing only required values which don't have defaults set
    try:
        api_instance.smart_block_criteria_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |

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

# **smart_block_criteria_list**
> [SmartBlockCriteria] smart_block_criteria_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
from libretime_client.model.smart_block_criteria import SmartBlockCriteria
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.smart_block_criteria_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[SmartBlockCriteria]**](SmartBlockCriteria.md)

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

# **smart_block_criteria_partial_update**
> SmartBlockCriteria smart_block_criteria_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
from libretime_client.model.smart_block_criteria import SmartBlockCriteria
from libretime_client.model.patched_smart_block_criteria import PatchedSmartBlockCriteria
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block criteria.
    patched_smart_block_criteria = PatchedSmartBlockCriteria(
        group=-2147483648,
        criteria="criteria_example",
        condition="condition_example",
        value="value_example",
        extra="extra_example",
        block="block_example",
    ) # PatchedSmartBlockCriteria |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_block_criteria_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.smart_block_criteria_partial_update(id, patched_smart_block_criteria=patched_smart_block_criteria)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |
 **patched_smart_block_criteria** | [**PatchedSmartBlockCriteria**](PatchedSmartBlockCriteria.md)|  | [optional]

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

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

# **smart_block_criteria_retrieve**
> SmartBlockCriteria smart_block_criteria_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
from libretime_client.model.smart_block_criteria import SmartBlockCriteria
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block criteria.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_block_criteria_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

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

# **smart_block_criteria_update**
> SmartBlockCriteria smart_block_criteria_update(id, smart_block_criteria)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import smart_block_criteria_api
from libretime_client.model.smart_block_criteria import SmartBlockCriteria
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
    api_instance = smart_block_criteria_api.SmartBlockCriteriaApi(api_client)
    id = 1 # int | A unique integer value identifying this smart block criteria.
    smart_block_criteria = SmartBlockCriteria(
        group=-2147483648,
        criteria="criteria_example",
        condition="condition_example",
        value="value_example",
        extra="extra_example",
        block="block_example",
    ) # SmartBlockCriteria | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.smart_block_criteria_update(id, smart_block_criteria)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling SmartBlockCriteriaApi->smart_block_criteria_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |
 **smart_block_criteria** | [**SmartBlockCriteria**](SmartBlockCriteria.md)|  |

### Return type

[**SmartBlockCriteria**](SmartBlockCriteria.md)

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

