# libretime_client.LoginAttemptsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login_attempts_create**](LoginAttemptsApi.md#login_attempts_create) | **POST** /api/v2/login-attempts | 
[**login_attempts_destroy**](LoginAttemptsApi.md#login_attempts_destroy) | **DELETE** /api/v2/login-attempts/{ip} | 
[**login_attempts_list**](LoginAttemptsApi.md#login_attempts_list) | **GET** /api/v2/login-attempts | 
[**login_attempts_partial_update**](LoginAttemptsApi.md#login_attempts_partial_update) | **PATCH** /api/v2/login-attempts/{ip} | 
[**login_attempts_retrieve**](LoginAttemptsApi.md#login_attempts_retrieve) | **GET** /api/v2/login-attempts/{ip} | 
[**login_attempts_update**](LoginAttemptsApi.md#login_attempts_update) | **PUT** /api/v2/login-attempts/{ip} | 


# **login_attempts_create**
> LoginAttempt login_attempts_create(login_attempt)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.login_attempt import LoginAttempt
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
    api_instance = libretime_client.LoginAttemptsApi(api_client)
    login_attempt = libretime_client.LoginAttempt() # LoginAttempt | 

    try:
        api_response = api_instance.login_attempts_create(login_attempt)
        print("The response of LoginAttemptsApi->login_attempts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_attempt** | [**LoginAttempt**](LoginAttempt.md)|  | 

### Return type

[**LoginAttempt**](LoginAttempt.md)

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

# **login_attempts_destroy**
> login_attempts_destroy(ip)

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
    api_instance = libretime_client.LoginAttemptsApi(api_client)
    ip = 'ip_example' # str | A unique value identifying this login attempt.

    try:
        api_instance.login_attempts_destroy(ip)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| A unique value identifying this login attempt. | 

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

# **login_attempts_list**
> List[LoginAttempt] login_attempts_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.login_attempt import LoginAttempt
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
    api_instance = libretime_client.LoginAttemptsApi(api_client)

    try:
        api_response = api_instance.login_attempts_list()
        print("The response of LoginAttemptsApi->login_attempts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LoginAttempt]**](LoginAttempt.md)

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

# **login_attempts_partial_update**
> LoginAttempt login_attempts_partial_update(ip, patched_login_attempt=patched_login_attempt)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.login_attempt import LoginAttempt
from libretime_client.models.patched_login_attempt import PatchedLoginAttempt
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
    api_instance = libretime_client.LoginAttemptsApi(api_client)
    ip = 'ip_example' # str | A unique value identifying this login attempt.
    patched_login_attempt = libretime_client.PatchedLoginAttempt() # PatchedLoginAttempt |  (optional)

    try:
        api_response = api_instance.login_attempts_partial_update(ip, patched_login_attempt=patched_login_attempt)
        print("The response of LoginAttemptsApi->login_attempts_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| A unique value identifying this login attempt. | 
 **patched_login_attempt** | [**PatchedLoginAttempt**](PatchedLoginAttempt.md)|  | [optional] 

### Return type

[**LoginAttempt**](LoginAttempt.md)

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

# **login_attempts_retrieve**
> LoginAttempt login_attempts_retrieve(ip)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.login_attempt import LoginAttempt
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
    api_instance = libretime_client.LoginAttemptsApi(api_client)
    ip = 'ip_example' # str | A unique value identifying this login attempt.

    try:
        api_response = api_instance.login_attempts_retrieve(ip)
        print("The response of LoginAttemptsApi->login_attempts_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| A unique value identifying this login attempt. | 

### Return type

[**LoginAttempt**](LoginAttempt.md)

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

# **login_attempts_update**
> LoginAttempt login_attempts_update(ip, login_attempt)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.login_attempt import LoginAttempt
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
    api_instance = libretime_client.LoginAttemptsApi(api_client)
    ip = 'ip_example' # str | A unique value identifying this login attempt.
    login_attempt = libretime_client.LoginAttempt() # LoginAttempt | 

    try:
        api_response = api_instance.login_attempts_update(ip, login_attempt)
        print("The response of LoginAttemptsApi->login_attempts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| A unique value identifying this login attempt. | 
 **login_attempt** | [**LoginAttempt**](LoginAttempt.md)|  | 

### Return type

[**LoginAttempt**](LoginAttempt.md)

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

