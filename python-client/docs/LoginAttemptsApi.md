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
import time
import libretime_client
from libretime_client.api import login_attempts_api
from libretime_client.model.login_attempt import LoginAttempt
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)
    login_attempt = LoginAttempt(
        ip="ip_example",
        attempts=-2147483648,
    ) # LoginAttempt | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.login_attempts_create(login_attempt)
        pprint(api_response)
    except libretime_client.ApiException as e:
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
import time
import libretime_client
from libretime_client.api import login_attempts_api
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)
    ip = "ip_example" # str | A unique value identifying this login attempt.

    # example passing only required values which don't have defaults set
    try:
        api_instance.login_attempts_destroy(ip)
    except libretime_client.ApiException as e:
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
> [LoginAttempt] login_attempts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import login_attempts_api
from libretime_client.model.login_attempt import LoginAttempt
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.login_attempts_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[LoginAttempt]**](LoginAttempt.md)

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
> LoginAttempt login_attempts_partial_update(ip)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import login_attempts_api
from libretime_client.model.patched_login_attempt import PatchedLoginAttempt
from libretime_client.model.login_attempt import LoginAttempt
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)
    ip = "ip_example" # str | A unique value identifying this login attempt.
    patched_login_attempt = PatchedLoginAttempt(
        ip="ip_example",
        attempts=-2147483648,
    ) # PatchedLoginAttempt |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.login_attempts_partial_update(ip)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling LoginAttemptsApi->login_attempts_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.login_attempts_partial_update(ip, patched_login_attempt=patched_login_attempt)
        pprint(api_response)
    except libretime_client.ApiException as e:
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
import time
import libretime_client
from libretime_client.api import login_attempts_api
from libretime_client.model.login_attempt import LoginAttempt
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)
    ip = "ip_example" # str | A unique value identifying this login attempt.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.login_attempts_retrieve(ip)
        pprint(api_response)
    except libretime_client.ApiException as e:
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
import time
import libretime_client
from libretime_client.api import login_attempts_api
from libretime_client.model.login_attempt import LoginAttempt
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
    api_instance = login_attempts_api.LoginAttemptsApi(api_client)
    ip = "ip_example" # str | A unique value identifying this login attempt.
    login_attempt = LoginAttempt(
        ip="ip_example",
        attempts=-2147483648,
    ) # LoginAttempt | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.login_attempts_update(ip, login_attempt)
        pprint(api_response)
    except libretime_client.ApiException as e:
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

