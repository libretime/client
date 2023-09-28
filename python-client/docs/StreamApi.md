# libretime_client.StreamApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_preferences_retrieve**](StreamApi.md#stream_preferences_retrieve) | **GET** /api/v2/stream/preferences | 
[**stream_state_retrieve**](StreamApi.md#stream_state_retrieve) | **GET** /api/v2/stream/state | 


# **stream_preferences_retrieve**
> StreamPreferences stream_preferences_retrieve()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.stream_preferences import StreamPreferences
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
    api_instance = libretime_client.StreamApi(api_client)

    try:
        api_response = api_instance.stream_preferences_retrieve()
        print("The response of StreamApi->stream_preferences_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_preferences_retrieve: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**StreamPreferences**](StreamPreferences.md)

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

# **stream_state_retrieve**
> StreamState stream_state_retrieve()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):
```python
import time
import os
import libretime_client
from libretime_client.models.stream_state import StreamState
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
    api_instance = libretime_client.StreamApi(api_client)

    try:
        api_response = api_instance.stream_state_retrieve()
        print("The response of StreamApi->stream_state_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_state_retrieve: %s\n" % e)
```



### Parameters
This endpoint does not need any parameter.

### Return type

[**StreamState**](StreamState.md)

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

