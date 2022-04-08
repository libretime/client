# openapi_client.UserTokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_tokens_create**](UserTokensApi.md#user_tokens_create) | **POST** /api/v2/user-tokens/ | 
[**user_tokens_destroy**](UserTokensApi.md#user_tokens_destroy) | **DELETE** /api/v2/user-tokens/{id}/ | 
[**user_tokens_list**](UserTokensApi.md#user_tokens_list) | **GET** /api/v2/user-tokens/ | 
[**user_tokens_partial_update**](UserTokensApi.md#user_tokens_partial_update) | **PATCH** /api/v2/user-tokens/{id}/ | 
[**user_tokens_retrieve**](UserTokensApi.md#user_tokens_retrieve) | **GET** /api/v2/user-tokens/{id}/ | 
[**user_tokens_update**](UserTokensApi.md#user_tokens_update) | **PUT** /api/v2/user-tokens/{id}/ | 


# **user_tokens_create**
> UserToken user_tokens_create(user_token)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
from openapi_client.model.user_token import UserToken
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
    api_instance = user_tokens_api.UserTokensApi(api_client)
    user_token = UserToken(
        action="action_example",
        token="token_example",
        created=dateutil_parser('1970-01-01T00:00:00.00Z'),
        user="user_example",
    ) # UserToken | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.user_tokens_create(user_token)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_token** | [**UserToken**](UserToken.md)|  |

### Return type

[**UserToken**](UserToken.md)

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

# **user_tokens_destroy**
> user_tokens_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
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
    api_instance = user_tokens_api.UserTokensApi(api_client)
    id = 1 # int | A unique integer value identifying this user token.

    # example passing only required values which don't have defaults set
    try:
        api_instance.user_tokens_destroy(id)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user token. |

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

# **user_tokens_list**
> [UserToken] user_tokens_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
from openapi_client.model.user_token import UserToken
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
    api_instance = user_tokens_api.UserTokensApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.user_tokens_list()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[UserToken]**](UserToken.md)

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

# **user_tokens_partial_update**
> UserToken user_tokens_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
from openapi_client.model.user_token import UserToken
from openapi_client.model.patched_user_token import PatchedUserToken
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
    api_instance = user_tokens_api.UserTokensApi(api_client)
    id = 1 # int | A unique integer value identifying this user token.
    patched_user_token = PatchedUserToken(
        action="action_example",
        token="token_example",
        created=dateutil_parser('1970-01-01T00:00:00.00Z'),
        user="user_example",
    ) # PatchedUserToken |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.user_tokens_partial_update(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.user_tokens_partial_update(id, patched_user_token=patched_user_token)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user token. |
 **patched_user_token** | [**PatchedUserToken**](PatchedUserToken.md)|  | [optional]

### Return type

[**UserToken**](UserToken.md)

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

# **user_tokens_retrieve**
> UserToken user_tokens_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
from openapi_client.model.user_token import UserToken
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
    api_instance = user_tokens_api.UserTokensApi(api_client)
    id = 1 # int | A unique integer value identifying this user token.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.user_tokens_retrieve(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user token. |

### Return type

[**UserToken**](UserToken.md)

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

# **user_tokens_update**
> UserToken user_tokens_update(id, user_token)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import openapi_client
from libretime import user_tokens_api
from openapi_client.model.user_token import UserToken
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
    api_instance = user_tokens_api.UserTokensApi(api_client)
    id = 1 # int | A unique integer value identifying this user token.
    user_token = UserToken(
        action="action_example",
        token="token_example",
        created=dateutil_parser('1970-01-01T00:00:00.00Z'),
        user="user_example",
    ) # UserToken | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.user_tokens_update(id, user_token)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UserTokensApi->user_tokens_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this user token. |
 **user_token** | [**UserToken**](UserToken.md)|  |

### Return type

[**UserToken**](UserToken.md)

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

