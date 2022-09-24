<a name="__pageTop"></a>
# libretime_client.apis.tags.files_api.FilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_create**](#files_create) | **post** /api/v2/files | 
[**files_destroy**](#files_destroy) | **delete** /api/v2/files/{id} | 
[**files_download_retrieve**](#files_download_retrieve) | **get** /api/v2/files/{id}/download | 
[**files_list**](#files_list) | **get** /api/v2/files | 
[**files_partial_update**](#files_partial_update) | **patch** /api/v2/files/{id} | 
[**files_retrieve**](#files_retrieve) | **get** /api/v2/files/{id} | 
[**files_update**](#files_update) | **put** /api/v2/files/{id} | 

# **files_create**
<a name="files_create"></a>
> File files_create(file)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    body = File(
        id=1,
        import_status=None,
        filepath="filepath_example",
        size=-2147483648,
        exists=True,
        mime="mime_example",
        md5="md5_example",
        hidden=True,
        accessed=-2147483648,
        scheduled=True,
        part_of_list=True,
        created_at="1970-01-01T00:00:00.00Z",
        updated_at="1970-01-01T00:00:00.00Z",
        last_played_at="1970-01-01T00:00:00.00Z",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        channels=-2147483648,
        length="length_example",
        bpm=-2147483648,
        replay_gain="-807",
        cue_in="cue_in_example",
        cue_out="cue_out_example",
        name="name_example",
        description="description_example",
        artwork="artwork_example",
        artist_name="artist_name_example",
        artist_url="artist_url_example",
        original_artist="original_artist_example",
        album_title="album_title_example",
        track_title="track_title_example",
        genre="genre_example",
        mood="mood_example",
        date="date_example",
        track_number=-2147483648,
        disc_number="disc_number_example",
        comment="comment_example",
        language="language_example",
        label="label_example",
        copyright="copyright_example",
        composer="composer_example",
        conductor="conductor_example",
        orchestra="orchestra_example",
        encoder="encoder_example",
        encoded_by="encoded_by_example",
        isrc="isrc_example",
        lyrics="lyrics_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        subject="subject_example",
        contributor="contributor_example",
        rating="rating_example",
        url="url_example",
        info_url="info_url_example",
        audio_source_url="audio_source_url_example",
        buy_this_url="buy_this_url_example",
        catalog_number="catalog_number_example",
        radio_station_name="radio_station_name_example",
        radio_station_url="radio_station_url_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        library=1,
        owner=1,
        edited_by=1,
    )
    try:
        api_response = api_instance.files_create(
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_create: %s\n" % e)
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
[**File**](../../models/File.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
201 | [ApiResponseFor201](#files_create.ApiResponseFor201) | 

#### files_create.ApiResponseFor201
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor201ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor201ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_destroy**
<a name="files_destroy"></a>
> files_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.files_destroy(
            path_params=path_params,
        )
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_destroy: %s\n" % e)
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
204 | [ApiResponseFor204](#files_destroy.ApiResponseFor204) | No response body

#### files_destroy.ApiResponseFor204
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | Unset | body was not defined |
headers | Unset | headers were not defined |

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_download_retrieve**
<a name="files_download_retrieve"></a>
> File files_download_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.files_download_retrieve(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_download_retrieve: %s\n" % e)
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
200 | [ApiResponseFor200](#files_download_retrieve.ApiResponseFor200) | 

#### files_download_retrieve.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_list**
<a name="files_list"></a>
> [File] files_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
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
    api_instance = files_api.FilesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.files_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_list: %s\n" % e)
```
### Parameters
This endpoint does not need any parameter.

### Return Types, Responses

Code | Class | Description
------------- | ------------- | -------------
n/a | api_client.ApiResponseWithoutDeserialization | When skip_deserialization is True this response is returned
200 | [ApiResponseFor200](#files_list.ApiResponseFor200) | 

#### files_list.ApiResponseFor200
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
[**File**]({{complexTypePrefix}}File.md) | [**File**]({{complexTypePrefix}}File.md) | [**File**]({{complexTypePrefix}}File.md) |  | 

### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_partial_update**
<a name="files_partial_update"></a>
> File files_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
from libretime_client.model.patched_file import PatchedFile
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.files_partial_update(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_partial_update: %s\n" % e)

    # example passing only optional values
    path_params = {
        'id': 1,
    }
    body = PatchedFile(
        id=1,
        import_status=None,
        filepath="filepath_example",
        size=-2147483648,
        exists=True,
        mime="mime_example",
        md5="md5_example",
        hidden=True,
        accessed=-2147483648,
        scheduled=True,
        part_of_list=True,
        created_at="1970-01-01T00:00:00.00Z",
        updated_at="1970-01-01T00:00:00.00Z",
        last_played_at="1970-01-01T00:00:00.00Z",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        channels=-2147483648,
        length="length_example",
        bpm=-2147483648,
        replay_gain="-807",
        cue_in="cue_in_example",
        cue_out="cue_out_example",
        name="name_example",
        description="description_example",
        artwork="artwork_example",
        artist_name="artist_name_example",
        artist_url="artist_url_example",
        original_artist="original_artist_example",
        album_title="album_title_example",
        track_title="track_title_example",
        genre="genre_example",
        mood="mood_example",
        date="date_example",
        track_number=-2147483648,
        disc_number="disc_number_example",
        comment="comment_example",
        language="language_example",
        label="label_example",
        copyright="copyright_example",
        composer="composer_example",
        conductor="conductor_example",
        orchestra="orchestra_example",
        encoder="encoder_example",
        encoded_by="encoded_by_example",
        isrc="isrc_example",
        lyrics="lyrics_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        subject="subject_example",
        contributor="contributor_example",
        rating="rating_example",
        url="url_example",
        info_url="info_url_example",
        audio_source_url="audio_source_url_example",
        buy_this_url="buy_this_url_example",
        catalog_number="catalog_number_example",
        radio_station_name="radio_station_name_example",
        radio_station_url="radio_station_url_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        library=1,
        owner=1,
        edited_by=1,
    )
    try:
        api_response = api_instance.files_partial_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_partial_update: %s\n" % e)
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
[**PatchedFile**](../../models/PatchedFile.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedFile**](../../models/PatchedFile.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**PatchedFile**](../../models/PatchedFile.md) |  | 


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
200 | [ApiResponseFor200](#files_partial_update.ApiResponseFor200) | 

#### files_partial_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_retrieve**
<a name="files_retrieve"></a>
> File files_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    try:
        api_response = api_instance.files_retrieve(
            path_params=path_params,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_retrieve: %s\n" % e)
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
200 | [ApiResponseFor200](#files_retrieve.ApiResponseFor200) | 

#### files_retrieve.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

# **files_update**
<a name="files_update"></a>
> File files_update(idfile)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import libretime_client
from libretime_client.apis.tags import files_api
from libretime_client.model.file import File
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
    api_instance = files_api.FilesApi(api_client)

    # example passing only required values which don't have defaults set
    path_params = {
        'id': 1,
    }
    body = File(
        id=1,
        import_status=None,
        filepath="filepath_example",
        size=-2147483648,
        exists=True,
        mime="mime_example",
        md5="md5_example",
        hidden=True,
        accessed=-2147483648,
        scheduled=True,
        part_of_list=True,
        created_at="1970-01-01T00:00:00.00Z",
        updated_at="1970-01-01T00:00:00.00Z",
        last_played_at="1970-01-01T00:00:00.00Z",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        channels=-2147483648,
        length="length_example",
        bpm=-2147483648,
        replay_gain="-807",
        cue_in="cue_in_example",
        cue_out="cue_out_example",
        name="name_example",
        description="description_example",
        artwork="artwork_example",
        artist_name="artist_name_example",
        artist_url="artist_url_example",
        original_artist="original_artist_example",
        album_title="album_title_example",
        track_title="track_title_example",
        genre="genre_example",
        mood="mood_example",
        date="date_example",
        track_number=-2147483648,
        disc_number="disc_number_example",
        comment="comment_example",
        language="language_example",
        label="label_example",
        copyright="copyright_example",
        composer="composer_example",
        conductor="conductor_example",
        orchestra="orchestra_example",
        encoder="encoder_example",
        encoded_by="encoded_by_example",
        isrc="isrc_example",
        lyrics="lyrics_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        subject="subject_example",
        contributor="contributor_example",
        rating="rating_example",
        url="url_example",
        info_url="info_url_example",
        audio_source_url="audio_source_url_example",
        buy_this_url="buy_this_url_example",
        catalog_number="catalog_number_example",
        radio_station_name="radio_station_name_example",
        radio_station_url="radio_station_url_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        library=1,
        owner=1,
        edited_by=1,
    )
    try:
        api_response = api_instance.files_update(
            path_params=path_params,
            body=body,
        )
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_update: %s\n" % e)
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
[**File**](../../models/File.md) |  | 


# SchemaForRequestBodyApplicationXWwwFormUrlencoded
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


# SchemaForRequestBodyMultipartFormData
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


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
200 | [ApiResponseFor200](#files_update.ApiResponseFor200) | 

#### files_update.ApiResponseFor200
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
response | urllib3.HTTPResponse | Raw response |
body | typing.Union[SchemaFor200ResponseBodyApplicationJson, ] |  |
headers | Unset | headers were not defined |

# SchemaFor200ResponseBodyApplicationJson
Type | Description  | Notes
------------- | ------------- | -------------
[**File**](../../models/File.md) |  | 


### Authorization

[basicAuth](../../../README.md#basicAuth), [cookieAuth](../../../README.md#cookieAuth)

[[Back to top]](#__pageTop) [[Back to API list]](../../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../../README.md#documentation-for-models) [[Back to README]](../../../README.md)

