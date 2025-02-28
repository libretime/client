# libretime_client.ThirdPartyTrackReferencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**third_party_track_references_create**](ThirdPartyTrackReferencesApi.md#third_party_track_references_create) | **POST** /api/v2/third-party-track-references | 
[**third_party_track_references_destroy**](ThirdPartyTrackReferencesApi.md#third_party_track_references_destroy) | **DELETE** /api/v2/third-party-track-references/{id} | 
[**third_party_track_references_list**](ThirdPartyTrackReferencesApi.md#third_party_track_references_list) | **GET** /api/v2/third-party-track-references | 
[**third_party_track_references_partial_update**](ThirdPartyTrackReferencesApi.md#third_party_track_references_partial_update) | **PATCH** /api/v2/third-party-track-references/{id} | 
[**third_party_track_references_retrieve**](ThirdPartyTrackReferencesApi.md#third_party_track_references_retrieve) | **GET** /api/v2/third-party-track-references/{id} | 
[**third_party_track_references_update**](ThirdPartyTrackReferencesApi.md#third_party_track_references_update) | **PUT** /api/v2/third-party-track-references/{id} | 


# **third_party_track_references_create**
> ThirdPartyTrackReference third_party_track_references_create(third_party_track_reference)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference
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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)
    third_party_track_reference = libretime_client.ThirdPartyTrackReference() # ThirdPartyTrackReference | 

    try:
        api_response = api_instance.third_party_track_references_create(third_party_track_reference)
        print("The response of ThirdPartyTrackReferencesApi->third_party_track_references_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **third_party_track_reference** | [**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)|  | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

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

# **third_party_track_references_destroy**
> third_party_track_references_destroy(id)

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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)
    id = 56 # int | A unique integer value identifying this third party track reference.

    try:
        api_instance.third_party_track_references_destroy(id)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. | 

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

# **third_party_track_references_list**
> List[ThirdPartyTrackReference] third_party_track_references_list()

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference
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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)

    try:
        api_response = api_instance.third_party_track_references_list()
        print("The response of ThirdPartyTrackReferencesApi->third_party_track_references_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ThirdPartyTrackReference]**](ThirdPartyTrackReference.md)

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

# **third_party_track_references_partial_update**
> ThirdPartyTrackReference third_party_track_references_partial_update(id, patched_third_party_track_reference=patched_third_party_track_reference)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.patched_third_party_track_reference import PatchedThirdPartyTrackReference
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference
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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)
    id = 56 # int | A unique integer value identifying this third party track reference.
    patched_third_party_track_reference = libretime_client.PatchedThirdPartyTrackReference() # PatchedThirdPartyTrackReference |  (optional)

    try:
        api_response = api_instance.third_party_track_references_partial_update(id, patched_third_party_track_reference=patched_third_party_track_reference)
        print("The response of ThirdPartyTrackReferencesApi->third_party_track_references_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. | 
 **patched_third_party_track_reference** | [**PatchedThirdPartyTrackReference**](PatchedThirdPartyTrackReference.md)|  | [optional] 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

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

# **third_party_track_references_retrieve**
> ThirdPartyTrackReference third_party_track_references_retrieve(id)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference
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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)
    id = 56 # int | A unique integer value identifying this third party track reference.

    try:
        api_response = api_instance.third_party_track_references_retrieve(id)
        print("The response of ThirdPartyTrackReferencesApi->third_party_track_references_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

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

# **third_party_track_references_update**
> ThirdPartyTrackReference third_party_track_references_update(id, third_party_track_reference)

### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import libretime_client
from libretime_client.models.third_party_track_reference import ThirdPartyTrackReference
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
    api_instance = libretime_client.ThirdPartyTrackReferencesApi(api_client)
    id = 56 # int | A unique integer value identifying this third party track reference.
    third_party_track_reference = libretime_client.ThirdPartyTrackReference() # ThirdPartyTrackReference | 

    try:
        api_response = api_instance.third_party_track_references_update(id, third_party_track_reference)
        print("The response of ThirdPartyTrackReferencesApi->third_party_track_references_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTrackReferencesApi->third_party_track_references_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. | 
 **third_party_track_reference** | [**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)|  | 

### Return type

[**ThirdPartyTrackReference**](ThirdPartyTrackReference.md)

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

