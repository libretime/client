<a name="__pageTop"></a>
# libretime_client.apis.tags.playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playout_history_template_fields_create**](#playout_history_template_fields_create) | **post** /api/v2/playout-history-template-fields | 
[**playout_history_template_fields_destroy**](#playout_history_template_fields_destroy) | **delete** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_list**](#playout_history_template_fields_list) | **get** /api/v2/playout-history-template-fields | 
[**playout_history_template_fields_partial_update**](#playout_history_template_fields_partial_update) | **patch** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_retrieve**](#playout_history_template_fields_retrieve) | **get** /api/v2/playout-history-template-fields/{id} | 
[**playout_history_template_fields_update**](#playout_history_template_fields_update) | **put** /api/v2/playout-history-template-fields/{id} | 

# **playout_history_template_fields_create**
<a name="playout_history_template_fields_create"></a>
> PlayoutHistoryTemplateField playout_history_template_fields_create(playout_history_template_field)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example passing only required values which don't have defaults set
    body = PlayoutHistoryTemplateField(
        id=1,
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template=1,
    )
    try:
        api_response = api_instance.playout_history_template_fields_create(
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_create: %s\n" % e)
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
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
201 | [ApiResponseFor201](#playout_history_template_fields_create.ApiResponseFor201) | 

#### playout_history_template_fields_create.ApiResponseFor201
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor201ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor201ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **playout_history_template_fields_destroy**
<a name="playout_history_template_fields_destroy"></a>
> playout_history_template_fields_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.playout_history_template_fields_destroy(
            path_params=path_params,
        )
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_destroy: %s\n" % e)
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
204 | [ApiResponseFor204](#playout_history_template_fields_destroy.ApiResponseFor204) | No response body

#### playout_history_template_fields_destroy.ApiResponseFor204
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | Unset | body was not defined |
headers | Unset | headers were not defined |

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **playout_history_template_fields_list**
<a name="playout_history_template_fields_list"></a>
> [PlayoutHistoryTemplateField] playout_history_template_fields_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.playout_history_template_fields_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_list: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#playout_history_template_fields_list.ApiResponseFor200) | 

#### playout_history_template_fields_list.ApiResponseFor200
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
[**PlayoutHistoryTemplateField**]({{complexTypePrefix}}PlayoutHistoryTemplateField.md) | [**PlayoutHistoryTemplateField**]({{complexTypePrefix}}PlayoutHistoryTemplateField.md) | [**PlayoutHistoryTemplateField**]({{complexTypePrefix}}PlayoutHistoryTemplateField.md) |  | 

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **playout_history_template_fields_partial_update**
<a name="playout_history_template_fields_partial_update"></a>
> PlayoutHistoryTemplateField playout_history_template_fields_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
from libretime_client.model.patched_playout_history_template_field import PatchedPlayoutHistoryTemplateField
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.playout_history_template_fields_partial_update(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_partial_update: %s\n" % e)

    # example passing only optional values
    path_params = {
        'id': 1,
    }
    body = PatchedPlayoutHistoryTemplateField(
        id=1,
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template=1,
    )
    try:
        api_response = api_instance.playout_history_template_fields_partial_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_partial_update: %s\n" % e)
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
[**PatchedPlayoutHistoryTemplateField**](../../models/PatchedPlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedPlayoutHistoryTemplateField**](../../models/PatchedPlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedPlayoutHistoryTemplateField**](../../models/PatchedPlayoutHistoryTemplateField.md) |  | 


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
200 | [ApiResponseFor200](#playout_history_template_fields_partial_update.ApiResponseFor200) | 

#### playout_history_template_fields_partial_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **playout_history_template_fields_retrieve**
<a name="playout_history_template_fields_retrieve"></a>
> PlayoutHistoryTemplateField playout_history_template_fields_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.playout_history_template_fields_retrieve(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_retrieve: %s\n" % e)
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
200 | [ApiResponseFor200](#playout_history_template_fields_retrieve.ApiResponseFor200) | 

#### playout_history_template_fields_retrieve.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **playout_history_template_fields_update**
<a name="playout_history_template_fields_update"></a>
> PlayoutHistoryTemplateField playout_history_template_fields_update(idplayout_history_template_field)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import playout_history_template_fields_api
from libretime_client.model.playout_history_template_field import PlayoutHistoryTemplateField
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
    api_instance = playout_history_template_fields_api.PlayoutHistoryTemplateFieldsApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    body = PlayoutHistoryTemplateField(
        id=1,
        name="name_example",
        label="label_example",
        type="type_example",
        is_file_md=True,
        position=-2147483648,
        template=1,
    )
    try:
        api_response = api_instance.playout_history_template_fields_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling PlayoutHistoryTemplateFieldsApi->playout_history_template_fields_update: %s\n" % e)
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
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


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
200 | [ApiResponseFor200](#playout_history_template_fields_update.ApiResponseFor200) | 

#### playout_history_template_fields_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**PlayoutHistoryTemplateField**](../../models/PlayoutHistoryTemplateField.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

