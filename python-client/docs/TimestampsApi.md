# libretime_client.TimestampsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timestamps_create**](TimestampsApi.md#timestamps_create) | **POST** /api/v2/timestamps | 
[**timestamps_destroy**](TimestampsApi.md#timestamps_destroy) | **DELETE** /api/v2/timestamps/{id} | 
[**timestamps_list**](TimestampsApi.md#timestamps_list) | **GET** /api/v2/timestamps | 
[**timestamps_partial_update**](TimestampsApi.md#timestamps_partial_update) | **PATCH** /api/v2/timestamps/{id} | 
[**timestamps_retrieve**](TimestampsApi.md#timestamps_retrieve) | **GET** /api/v2/timestamps/{id} | 
[**timestamps_update**](TimestampsApi.md#timestamps_update) | **PUT** /api/v2/timestamps/{id} | 


# **timestamps_create**
> Timestamp timestamps_create(timestamp)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.timestamp import Timestamp
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
    api_instance = libretime_client.TimestampsApi(api_client)
    timestamp = libretime_client.Timestamp() # Timestamp | 

    try:
        api_response = api_instance.timestamps_create(timestamp)
        print("The response of TimestampsApi->timestamps_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | [**Timestamp**](Timestamp.md)|  | 

### Return type

[**Timestamp**](Timestamp.md)

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

# **timestamps_destroy**
> timestamps_destroy(id)

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
    api_instance = libretime_client.TimestampsApi(api_client)
    id = 56 # int | A unique integer value identifying this timestamp.

    try:
        api_instance.timestamps_destroy(id)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this timestamp. | 

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

# **timestamps_list**
> List[Timestamp] timestamps_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.timestamp import Timestamp
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
    api_instance = libretime_client.TimestampsApi(api_client)

    try:
        api_response = api_instance.timestamps_list()
        print("The response of TimestampsApi->timestamps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Timestamp]**](Timestamp.md)

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

# **timestamps_partial_update**
> Timestamp timestamps_partial_update(id, patched_timestamp=patched_timestamp)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_timestamp import PatchedTimestamp
from libretime_client.models.timestamp import Timestamp
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
    api_instance = libretime_client.TimestampsApi(api_client)
    id = 56 # int | A unique integer value identifying this timestamp.
    patched_timestamp = libretime_client.PatchedTimestamp() # PatchedTimestamp |  (optional)

    try:
        api_response = api_instance.timestamps_partial_update(id, patched_timestamp=patched_timestamp)
        print("The response of TimestampsApi->timestamps_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this timestamp. | 
 **patched_timestamp** | [**PatchedTimestamp**](PatchedTimestamp.md)|  | [optional] 

### Return type

[**Timestamp**](Timestamp.md)

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

# **timestamps_retrieve**
> Timestamp timestamps_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.timestamp import Timestamp
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
    api_instance = libretime_client.TimestampsApi(api_client)
    id = 56 # int | A unique integer value identifying this timestamp.

    try:
        api_response = api_instance.timestamps_retrieve(id)
        print("The response of TimestampsApi->timestamps_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this timestamp. | 

### Return type

[**Timestamp**](Timestamp.md)

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

# **timestamps_update**
> Timestamp timestamps_update(id, timestamp)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.timestamp import Timestamp
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
    api_instance = libretime_client.TimestampsApi(api_client)
    id = 56 # int | A unique integer value identifying this timestamp.
    timestamp = libretime_client.Timestamp() # Timestamp | 

    try:
        api_response = api_instance.timestamps_update(id, timestamp)
        print("The response of TimestampsApi->timestamps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimestampsApi->timestamps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this timestamp. | 
 **timestamp** | [**Timestamp**](Timestamp.md)|  | 

### Return type

[**Timestamp**](Timestamp.md)

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

