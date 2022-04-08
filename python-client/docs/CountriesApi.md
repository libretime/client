# libretime.api.CountriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countries_create**](CountriesApi.md#countries_create) | **POST** /api/v2/countries/ | 
[**countries_destroy**](CountriesApi.md#countries_destroy) | **DELETE** /api/v2/countries/{isocode}/ | 
[**countries_list**](CountriesApi.md#countries_list) | **GET** /api/v2/countries/ | 
[**countries_partial_update**](CountriesApi.md#countries_partial_update) | **PATCH** /api/v2/countries/{isocode}/ | 
[**countries_retrieve**](CountriesApi.md#countries_retrieve) | **GET** /api/v2/countries/{isocode}/ | 
[**countries_update**](CountriesApi.md#countries_update) | **PUT** /api/v2/countries/{isocode}/ | 


# **countries_create**
> Country countries_create(country)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from libretime.api.model.country import Country
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)
    country = Country(
        name="name_example",
    ) # Country | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.countries_create(country)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**Country**](Country.md)|  |

### Return type

[**Country**](Country.md)

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

# **countries_destroy**
> countries_destroy(isocode)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)
    isocode = "isocode_example" # str | A unique value identifying this country.

    # example passing only required values which don't have defaults set
    try:
        api_instance.countries_destroy(isocode)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isocode** | **str**| A unique value identifying this country. |

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

# **countries_list**
> [Country] countries_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from libretime.api.model.country import Country
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.countries_list()
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Country]**](Country.md)

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

# **countries_partial_update**
> Country countries_partial_update(isocode)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from libretime.api.model.country import Country
from libretime.api.model.patched_country import PatchedCountry
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)
    isocode = "isocode_example" # str | A unique value identifying this country.
    patched_country = PatchedCountry(
        name="name_example",
    ) # PatchedCountry |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.countries_partial_update(isocode)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.countries_partial_update(isocode, patched_country=patched_country)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isocode** | **str**| A unique value identifying this country. |
 **patched_country** | [**PatchedCountry**](PatchedCountry.md)|  | [optional]

### Return type

[**Country**](Country.md)

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

# **countries_retrieve**
> Country countries_retrieve(isocode)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from libretime.api.model.country import Country
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)
    isocode = "isocode_example" # str | A unique value identifying this country.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.countries_retrieve(isocode)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isocode** | **str**| A unique value identifying this country. |

### Return type

[**Country**](Country.md)

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

# **countries_update**
> Country countries_update(isocode, country)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime.api
from libretime.api.api import countries_api
from libretime.api.model.country import Country
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime.api.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime.api.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime.api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = countries_api.CountriesApi(api_client)
    isocode = "isocode_example" # str | A unique value identifying this country.
    country = Country(
        name="name_example",
    ) # Country | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.countries_update(isocode, country)
        pprint(api_response)
    except libretime.api.ApiException as e:
        print("Exception when calling CountriesApi->countries_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isocode** | **str**| A unique value identifying this country. |
 **country** | [**Country**](Country.md)|  |

### Return type

[**Country**](Country.md)

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

