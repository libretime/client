<a id="__pageTop"></a>
# libretime_client.apis.tags.imported_podcasts_api.ImportedPodcastsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imported_podcasts_create**](#imported_podcasts_create) | **post** /api/v2/imported-podcasts | 
[**imported_podcasts_destroy**](#imported_podcasts_destroy) | **delete** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_list**](#imported_podcasts_list) | **get** /api/v2/imported-podcasts | 
[**imported_podcasts_partial_update**](#imported_podcasts_partial_update) | **patch** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_retrieve**](#imported_podcasts_retrieve) | **get** /api/v2/imported-podcasts/{id} | 
[**imported_podcasts_update**](#imported_podcasts_update) | **put** /api/v2/imported-podcasts/{id} | 

# **imported_podcasts_create**
<a id="imported_podcasts_create"></a>
> ImportedPodcast imported_podcasts_create(imported_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
from libretime_client.model.imported_podcast import ImportedPodcast
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example passing only required values which don't have defaults set
    body = ImportedPodcast(
        id=1,
        override_album=True,
        auto_ingest=True,
        auto_ingested_at="1970-01-01T00:00:00.00Z",
        podcast=1,
    )
    try:
        api_response = api_instance.imported_podcasts_create(
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_create: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, SchemaForRequestBodyApplicationXWwwFormUrlencoded, SchemaForRequestBodyMultipartFormData] | required |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
201 | [ApiResponseFor201](#imported_podcasts_create.ApiResponseFor201) | 

#### imported_podcasts_create.ApiResponseFor201
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor201ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor201ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **imported_podcasts_destroy**
<a id="imported_podcasts_destroy"></a>
> imported_podcasts_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.imported_podcasts_destroy(
            path_params=path_params,
        )
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_destroy: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
path_params | RequestPathParams | |
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
id | IdSchema | | 

# IdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
204 | [ApiResponseFor204](#imported_podcasts_destroy.ApiResponseFor204) | No response body

#### imported_podcasts_destroy.ApiResponseFor204
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | Unset | body was not defined |
headers | Unset | headers were not defined |

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **imported_podcasts_list**
<a id="imported_podcasts_list"></a>
> [ImportedPodcast] imported_podcasts_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
from libretime_client.model.imported_podcast import ImportedPodcast
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.imported_podcasts_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_list: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#imported_podcasts_list.ApiResponseFor200) | 

#### imported_podcasts_list.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
list, tuple,  | tuple,  |  | 

### Tuple Items
Class Name | Input Type | Accessed Type | Description | Notes
------------- | ------------- | ------------- | ------------- | -------------
[**ImportedPodcast**]({{complexTypePrefix}}ImportedPodcast.md) | [**ImportedPodcast**]({{complexTypePrefix}}ImportedPodcast.md) | [**ImportedPodcast**]({{complexTypePrefix}}ImportedPodcast.md) |  | 

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **imported_podcasts_partial_update**
<a id="imported_podcasts_partial_update"></a>
> ImportedPodcast imported_podcasts_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
from libretime_client.model.patched_imported_podcast import PatchedImportedPodcast
from libretime_client.model.imported_podcast import ImportedPodcast
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.imported_podcasts_partial_update(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_partial_update: %s\n" % e)

    # example passing only optional values
    path_params = {
        'id': 1,
    }
    body = PatchedImportedPodcast(
        id=1,
        override_album=True,
        auto_ingest=True,
        auto_ingested_at="1970-01-01T00:00:00.00Z",
        podcast=1,
    )
    try:
        api_response = api_instance.imported_podcasts_partial_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_partial_update: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, SchemaForRequestBodyApplicationXWwwFormUrlencoded, SchemaForRequestBodyMultipartFormData, Unset] | optional, default is unset |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedImportedPodcast**](../../models/PatchedImportedPodcast.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedImportedPodcast**](../../models/PatchedImportedPodcast.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedImportedPodcast**](../../models/PatchedImportedPodcast.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
id | IdSchema | | 

# IdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#imported_podcasts_partial_update.ApiResponseFor200) | 

#### imported_podcasts_partial_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **imported_podcasts_retrieve**
<a id="imported_podcasts_retrieve"></a>
> ImportedPodcast imported_podcasts_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
from libretime_client.model.imported_podcast import ImportedPodcast
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.imported_podcasts_retrieve(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_retrieve: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
path_params | RequestPathParams | |
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
id | IdSchema | | 

# IdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#imported_podcasts_retrieve.ApiResponseFor200) | 

#### imported_podcasts_retrieve.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **imported_podcasts_update**
<a id="imported_podcasts_update"></a>
> ImportedPodcast imported_podcasts_update(idimported_podcast)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import imported_podcasts_api
from libretime_client.model.imported_podcast import ImportedPodcast
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
    api_instance = imported_podcasts_api.ImportedPodcastsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    body = ImportedPodcast(
        id=1,
        override_album=True,
        auto_ingest=True,
        auto_ingested_at="1970-01-01T00:00:00.00Z",
        podcast=1,
    )
    try:
        api_response = api_instance.imported_podcasts_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ImportedPodcastsApi->imported_podcasts_update: %s\n" % e)
```
### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
body | typing.Union[SchemaForRequestBodyApplicationJson, SchemaForRequestBodyApplicationXWwwFormUrlencoded, SchemaForRequestBodyMultipartFormData] | required |
path_params | RequestPathParams | |
content_type | str | optional, default is 'application/json' | Selects the schema and serialization of the request body
accept_content_types | typing.Tuple[str] | default is ('application/json', ) | Tells the server the content type(s) that are accepted by the client
stream | bool | default is False | if True then the response.content will be streamed and loaded from a file like object. When downloading a file, set this to True to force the code to deserialize the content to a FileSchema file
timeout | typing.Optional[typing.Union[int, typing.Tuple]] | default is None | the timeout used by the rest client
skip_deserialization | bool | default is False | when True, headers and body will be unset and an instance of api_client.ApiResponseWithoutDeserialization will be returned

### body

# SchemaForRequestBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### path_params
#### RequestPathParams

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
id | IdSchema | | 

# IdSchema

## Model Type Info
Input Type | Accessed Type | Description | Notes
------------ | ------------- | ------------- | -------------
decimal.Decimal, int,  | decimal.Decimal,  |  | 

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#imported_podcasts_update.ApiResponseFor200) | 

#### imported_podcasts_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**ImportedPodcast**](../../models/ImportedPodcast.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

