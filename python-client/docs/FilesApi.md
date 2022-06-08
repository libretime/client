# libretime_client.FilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_create**](FilesApi.md#files_create) | **POST** /api/v2/files/ | 
[**files_destroy**](FilesApi.md#files_destroy) | **DELETE** /api/v2/files/{id}/ | 
[**files_download_retrieve**](FilesApi.md#files_download_retrieve) | **GET** /api/v2/files/{id}/download/ | 
[**files_list**](FilesApi.md#files_list) | **GET** /api/v2/files/ | 
[**files_partial_update**](FilesApi.md#files_partial_update) | **PATCH** /api/v2/files/{id}/ | 
[**files_retrieve**](FilesApi.md#files_retrieve) | **GET** /api/v2/files/{id}/ | 
[**files_update**](FilesApi.md#files_update) | **PUT** /api/v2/files/{id}/ | 


# **files_create**
> File files_create(file)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    file = File(
        name="name_example",
        mime="mime_example",
        ftype="ftype_example",
        filepath="filepath_example",
        import_status=-2147483648,
        currently_accessing=-2147483648,
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        lptime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        md5="md5_example",
        track_title="track_title_example",
        artist_name="artist_name_example",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        length="length_example",
        album_title="album_title_example",
        genre="genre_example",
        comments="comments_example",
        year="year_example",
        track_number=-2147483648,
        channels=-2147483648,
        url="url_example",
        bpm=-2147483648,
        rating="rating_example",
        encoded_by="encoded_by_example",
        disc_number="disc_number_example",
        mood="mood_example",
        label="label_example",
        composer="composer_example",
        encoder="encoder_example",
        checksum="checksum_example",
        lyrics="lyrics_example",
        orchestra="orchestra_example",
        conductor="conductor_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        radio_station_name="radio_station_name_example",
        info_url="info_url_example",
        artist_url="artist_url_example",
        audio_source_url="audio_source_url_example",
        radio_station_url="radio_station_url_example",
        buy_this_url="buy_this_url_example",
        isrc_number="isrc_number_example",
        catalog_number="catalog_number_example",
        original_artist="original_artist_example",
        copyright="copyright_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        subject="subject_example",
        contributor="contributor_example",
        language="language_example",
        file_exists=True,
        replay_gain="-807",
        cuein="cuein_example",
        cueout="cueout_example",
        silan_check=True,
        hidden=True,
        is_scheduled=True,
        is_playlist=True,
        filesize=-2147483648,
        description="description_example",
        artwork="artwork_example",
        track_type="track_type_example",
        edited_by="edited_by_example",
        owner="owner_example",
    ) # File | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.files_create(file)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**File**](File.md)|  |

### Return type

[**File**](File.md)

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

# **files_destroy**
> files_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    id = 1 # int | A unique integer value identifying this file.

    # example passing only required values which don't have defaults set
    try:
        api_instance.files_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this file. |

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

# **files_download_retrieve**
> File files_download_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    id = 1 # int | A unique integer value identifying this file.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.files_download_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_download_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this file. |

### Return type

[**File**](File.md)

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

# **files_list**
> [File] files_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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

### Return type

[**[File]**](File.md)

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

# **files_partial_update**
> File files_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    id = 1 # int | A unique integer value identifying this file.
    patched_file = PatchedFile(
        name="name_example",
        mime="mime_example",
        ftype="ftype_example",
        filepath="filepath_example",
        import_status=-2147483648,
        currently_accessing=-2147483648,
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        lptime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        md5="md5_example",
        track_title="track_title_example",
        artist_name="artist_name_example",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        length="length_example",
        album_title="album_title_example",
        genre="genre_example",
        comments="comments_example",
        year="year_example",
        track_number=-2147483648,
        channels=-2147483648,
        url="url_example",
        bpm=-2147483648,
        rating="rating_example",
        encoded_by="encoded_by_example",
        disc_number="disc_number_example",
        mood="mood_example",
        label="label_example",
        composer="composer_example",
        encoder="encoder_example",
        checksum="checksum_example",
        lyrics="lyrics_example",
        orchestra="orchestra_example",
        conductor="conductor_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        radio_station_name="radio_station_name_example",
        info_url="info_url_example",
        artist_url="artist_url_example",
        audio_source_url="audio_source_url_example",
        radio_station_url="radio_station_url_example",
        buy_this_url="buy_this_url_example",
        isrc_number="isrc_number_example",
        catalog_number="catalog_number_example",
        original_artist="original_artist_example",
        copyright="copyright_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        subject="subject_example",
        contributor="contributor_example",
        language="language_example",
        file_exists=True,
        replay_gain="-807",
        cuein="cuein_example",
        cueout="cueout_example",
        silan_check=True,
        hidden=True,
        is_scheduled=True,
        is_playlist=True,
        filesize=-2147483648,
        description="description_example",
        artwork="artwork_example",
        track_type="track_type_example",
        edited_by="edited_by_example",
        owner="owner_example",
    ) # PatchedFile |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.files_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.files_partial_update(id, patched_file=patched_file)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this file. |
 **patched_file** | [**PatchedFile**](PatchedFile.md)|  | [optional]

### Return type

[**File**](File.md)

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

# **files_retrieve**
> File files_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    id = 1 # int | A unique integer value identifying this file.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.files_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this file. |

### Return type

[**File**](File.md)

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

# **files_update**
> File files_update(id, file)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import files_api
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
    id = 1 # int | A unique integer value identifying this file.
    file = File(
        name="name_example",
        mime="mime_example",
        ftype="ftype_example",
        filepath="filepath_example",
        import_status=-2147483648,
        currently_accessing=-2147483648,
        mtime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        utime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        lptime=dateutil_parser('1970-01-01T00:00:00.00Z'),
        md5="md5_example",
        track_title="track_title_example",
        artist_name="artist_name_example",
        bit_rate=-2147483648,
        sample_rate=-2147483648,
        format="format_example",
        length="length_example",
        album_title="album_title_example",
        genre="genre_example",
        comments="comments_example",
        year="year_example",
        track_number=-2147483648,
        channels=-2147483648,
        url="url_example",
        bpm=-2147483648,
        rating="rating_example",
        encoded_by="encoded_by_example",
        disc_number="disc_number_example",
        mood="mood_example",
        label="label_example",
        composer="composer_example",
        encoder="encoder_example",
        checksum="checksum_example",
        lyrics="lyrics_example",
        orchestra="orchestra_example",
        conductor="conductor_example",
        lyricist="lyricist_example",
        original_lyricist="original_lyricist_example",
        radio_station_name="radio_station_name_example",
        info_url="info_url_example",
        artist_url="artist_url_example",
        audio_source_url="audio_source_url_example",
        radio_station_url="radio_station_url_example",
        buy_this_url="buy_this_url_example",
        isrc_number="isrc_number_example",
        catalog_number="catalog_number_example",
        original_artist="original_artist_example",
        copyright="copyright_example",
        report_datetime="report_datetime_example",
        report_location="report_location_example",
        report_organization="report_organization_example",
        subject="subject_example",
        contributor="contributor_example",
        language="language_example",
        file_exists=True,
        replay_gain="-807",
        cuein="cuein_example",
        cueout="cueout_example",
        silan_check=True,
        hidden=True,
        is_scheduled=True,
        is_playlist=True,
        filesize=-2147483648,
        description="description_example",
        artwork="artwork_example",
        track_type="track_type_example",
        edited_by="edited_by_example",
        owner="owner_example",
    ) # File | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.files_update(id, file)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling FilesApi->files_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this file. |
 **file** | [**File**](File.md)|  |

### Return type

[**File**](File.md)

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

