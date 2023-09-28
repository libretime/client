# libretime_client.ServiceRegistersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_registers_create**](ServiceRegistersApi.md#service_registers_create) | **POST** /api/v2/service-registers | 
[**service_registers_destroy**](ServiceRegistersApi.md#service_registers_destroy) | **DELETE** /api/v2/service-registers/{name} | 
[**service_registers_list**](ServiceRegistersApi.md#service_registers_list) | **GET** /api/v2/service-registers | 
[**service_registers_partial_update**](ServiceRegistersApi.md#service_registers_partial_update) | **PATCH** /api/v2/service-registers/{name} | 
[**service_registers_retrieve**](ServiceRegistersApi.md#service_registers_retrieve) | **GET** /api/v2/service-registers/{name} | 
[**service_registers_update**](ServiceRegistersApi.md#service_registers_update) | **PUT** /api/v2/service-registers/{name} | 


# **service_registers_create**
> ServiceRegister service_registers_create(service_register)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.service_register import ServiceRegister
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
    api_instance = libretime_client.ServiceRegistersApi(api_client)
    service_register = libretime_client.ServiceRegister() # ServiceRegister | 

    try:
        api_response = api_instance.service_registers_create(service_register)
        print("The response of ServiceRegistersApi->service_registers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_create: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_register** | [**ServiceRegister**](ServiceRegister.md)|  | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

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

# **service_registers_destroy**
> service_registers_destroy(name)



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
    api_instance = libretime_client.ServiceRegistersApi(api_client)
    name = 'name_example' # str | A unique value identifying this service register.

    try:
        api_instance.service_registers_destroy(name)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_destroy: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| A unique value identifying this service register. | 

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

# **service_registers_list**
> List[ServiceRegister] service_registers_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.service_register import ServiceRegister
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
    api_instance = libretime_client.ServiceRegistersApi(api_client)

    try:
        api_response = api_instance.service_registers_list()
        print("The response of ServiceRegistersApi->service_registers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_list: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**List[ServiceRegister]**](ServiceRegister.md)

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

# **service_registers_partial_update**
> ServiceRegister service_registers_partial_update(name, patched_service_register=patched_service_register)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.patched_service_register import PatchedServiceRegister
from libretime_client.models.service_register import ServiceRegister
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
    api_instance = libretime_client.ServiceRegistersApi(api_client)
    name = 'name_example' # str | A unique value identifying this service register.
    patched_service_register = libretime_client.PatchedServiceRegister() # PatchedServiceRegister |  (optional)

    try:
        api_response = api_instance.service_registers_partial_update(name, patched_service_register=patched_service_register)
        print("The response of ServiceRegistersApi->service_registers_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_partial_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| A unique value identifying this service register. | 
 **patched_service_register** | [**PatchedServiceRegister**](PatchedServiceRegister.md)|  | [optional] 

### Return type

[**ServiceRegister**](ServiceRegister.md)

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

# **service_registers_retrieve**
> ServiceRegister service_registers_retrieve(name)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.service_register import ServiceRegister
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
    api_instance = libretime_client.ServiceRegistersApi(api_client)
    name = 'name_example' # str | A unique value identifying this service register.

    try:
        api_response = api_instance.service_registers_retrieve(name)
        print("The response of ServiceRegistersApi->service_registers_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_retrieve: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| A unique value identifying this service register. | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

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

# **service_registers_update**
> ServiceRegister service_registers_update(name, service_register)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.service_register import ServiceRegister
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
    api_instance = libretime_client.ServiceRegistersApi(api_client)
    name = 'name_example' # str | A unique value identifying this service register.
    service_register = libretime_client.ServiceRegister() # ServiceRegister | 

    try:
        api_response = api_instance.service_registers_update(name, service_register)
        print("The response of ServiceRegistersApi->service_registers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceRegistersApi->service_registers_update: %s\n" % e)
```



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| A unique value identifying this service register. | 
 **service_register** | [**ServiceRegister**](ServiceRegister.md)|  | 

### Return type

[**ServiceRegister**](ServiceRegister.md)

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

