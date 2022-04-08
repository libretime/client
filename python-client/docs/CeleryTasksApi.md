# openapi_client.CeleryTasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**celery_tasks_create**](CeleryTasksApi.md#celery_tasks_create) | **POST** /api/v2/celery-tasks/ | 
[**celery_tasks_destroy**](CeleryTasksApi.md#celery_tasks_destroy) | **DELETE** /api/v2/celery-tasks/{id}/ | 
[**celery_tasks_list**](CeleryTasksApi.md#celery_tasks_list) | **GET** /api/v2/celery-tasks/ | 
[**celery_tasks_partial_update**](CeleryTasksApi.md#celery_tasks_partial_update) | **PATCH** /api/v2/celery-tasks/{id}/ | 
[**celery_tasks_retrieve**](CeleryTasksApi.md#celery_tasks_retrieve) | **GET** /api/v2/celery-tasks/{id}/ | 
[**celery_tasks_update**](CeleryTasksApi.md#celery_tasks_update) | **PUT** /api/v2/celery-tasks/{id}/ | 


# **celery_tasks_create**
> CeleryTask celery_tasks_create(celery_task)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
from openapi_client.model.celery_task import CeleryTask
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)
    celery_task = CeleryTask(
        task_id="task_id_example",
        name="name_example",
        dispatch_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        status="status_example",
        track_reference="track_reference_example",
    ) # CeleryTask | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.celery_tasks_create(celery_task)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **celery_task** | [**CeleryTask**](CeleryTask.md)|  |

### Return type

[**CeleryTask**](CeleryTask.md)

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

# **celery_tasks_destroy**
> celery_tasks_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)
    id = 1 # int | A unique integer value identifying this celery task.

    # example passing only required values which don't have defaults set
    try:
        api_instance.celery_tasks_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this celery task. |

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

# **celery_tasks_list**
> [CeleryTask] celery_tasks_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
from openapi_client.model.celery_task import CeleryTask
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.celery_tasks_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[CeleryTask]**](CeleryTask.md)

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

# **celery_tasks_partial_update**
> CeleryTask celery_tasks_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
from openapi_client.model.celery_task import CeleryTask
from openapi_client.model.patched_celery_task import PatchedCeleryTask
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)
    id = 1 # int | A unique integer value identifying this celery task.
    patched_celery_task = PatchedCeleryTask(
        task_id="task_id_example",
        name="name_example",
        dispatch_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        status="status_example",
        track_reference="track_reference_example",
    ) # PatchedCeleryTask |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.celery_tasks_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.celery_tasks_partial_update(id, patched_celery_task=patched_celery_task)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this celery task. |
 **patched_celery_task** | [**PatchedCeleryTask**](PatchedCeleryTask.md)|  | [optional]

### Return type

[**CeleryTask**](CeleryTask.md)

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

# **celery_tasks_retrieve**
> CeleryTask celery_tasks_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
from openapi_client.model.celery_task import CeleryTask
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)
    id = 1 # int | A unique integer value identifying this celery task.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.celery_tasks_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this celery task. |

### Return type

[**CeleryTask**](CeleryTask.md)

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

# **celery_tasks_update**
> CeleryTask celery_tasks_update(id, celery_task)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import celery_tasks_api
from openapi_client.model.celery_task import CeleryTask
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
    api_instance = celery_tasks_api.CeleryTasksApi(api_client)
    id = 1 # int | A unique integer value identifying this celery task.
    celery_task = CeleryTask(
        task_id="task_id_example",
        name="name_example",
        dispatch_time=dateutil_parser('1970-01-01T00:00:00.00Z'),
        status="status_example",
        track_reference="track_reference_example",
    ) # CeleryTask | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.celery_tasks_update(id, celery_task)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CeleryTasksApi->celery_tasks_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this celery task. |
 **celery_task** | [**CeleryTask**](CeleryTask.md)|  |

### Return type

[**CeleryTask**](CeleryTask.md)

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

