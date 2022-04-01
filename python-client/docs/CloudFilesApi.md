# openapi_client.CloudFilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloud_files_create**](CloudFilesApi.md#cloud_files_create) | **POST** /api/v2/cloud-files/ | 
[**cloud_files_destroy**](CloudFilesApi.md#cloud_files_destroy) | **DELETE** /api/v2/cloud-files/{id}/ | 
[**cloud_files_list**](CloudFilesApi.md#cloud_files_list) | **GET** /api/v2/cloud-files/ | 
[**cloud_files_partial_update**](CloudFilesApi.md#cloud_files_partial_update) | **PATCH** /api/v2/cloud-files/{id}/ | 
[**cloud_files_retrieve**](CloudFilesApi.md#cloud_files_retrieve) | **GET** /api/v2/cloud-files/{id}/ | 
[**cloud_files_update**](CloudFilesApi.md#cloud_files_update) | **PUT** /api/v2/cloud-files/{id}/ | 


# **cloud_files_create**
> CloudFile cloud_files_create(cloud_file)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
from openapi_client.model.cloud_file import CloudFile
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)
    cloud_file = CloudFile(
        storage_backend="storage_backend_example",
        resource_id="resource_id_example",
        filename="filename_example",
    ) # CloudFile | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.cloud_files_create(cloud_file)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud_file** | [**CloudFile**](CloudFile.md)|  |

### Return type

[**CloudFile**](CloudFile.md)

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

# **cloud_files_destroy**
> cloud_files_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)
    id = 1 # int | A unique integer value identifying this cloud file.

    # example passing only required values which don't have defaults set
    try:
        api_instance.cloud_files_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this cloud file. |

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

# **cloud_files_list**
> [CloudFile] cloud_files_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
from openapi_client.model.cloud_file import CloudFile
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.cloud_files_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[CloudFile]**](CloudFile.md)

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

# **cloud_files_partial_update**
> CloudFile cloud_files_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
from openapi_client.model.cloud_file import CloudFile
from openapi_client.model.patched_cloud_file import PatchedCloudFile
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)
    id = 1 # int | A unique integer value identifying this cloud file.
    patched_cloud_file = PatchedCloudFile(
        storage_backend="storage_backend_example",
        resource_id="resource_id_example",
        filename="filename_example",
    ) # PatchedCloudFile |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.cloud_files_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.cloud_files_partial_update(id, patched_cloud_file=patched_cloud_file)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this cloud file. |
 **patched_cloud_file** | [**PatchedCloudFile**](PatchedCloudFile.md)|  | [optional]

### Return type

[**CloudFile**](CloudFile.md)

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

# **cloud_files_retrieve**
> CloudFile cloud_files_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
from openapi_client.model.cloud_file import CloudFile
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)
    id = 1 # int | A unique integer value identifying this cloud file.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.cloud_files_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this cloud file. |

### Return type

[**CloudFile**](CloudFile.md)

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

# **cloud_files_update**
> CloudFile cloud_files_update(id, cloud_file)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from openapi_client.api import cloud_files_api
from openapi_client.model.cloud_file import CloudFile
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
    api_instance = cloud_files_api.CloudFilesApi(api_client)
    id = 1 # int | A unique integer value identifying this cloud file.
    cloud_file = CloudFile(
        storage_backend="storage_backend_example",
        resource_id="resource_id_example",
        filename="filename_example",
    ) # CloudFile | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.cloud_files_update(id, cloud_file)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling CloudFilesApi->cloud_files_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this cloud file. |
 **cloud_file** | [**CloudFile**](CloudFile.md)|  |

### Return type

[**CloudFile**](CloudFile.md)

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

