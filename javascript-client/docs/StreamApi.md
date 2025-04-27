# StreamApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**streamPreferencesRetrieve**](#streampreferencesretrieve) | **GET** /api/v2/stream/preferences | |
|[**streamStateRetrieve**](#streamstateretrieve) | **GET** /api/v2/stream/state | |

# **streamPreferencesRetrieve**
> StreamPreferences streamPreferencesRetrieve()


### Example

```typescript
import {
    StreamApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StreamApi(configuration);

const { status, data } = await apiInstance.streamPreferencesRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StreamPreferences**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streamStateRetrieve**
> StreamState streamStateRetrieve()


### Example

```typescript
import {
    StreamApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new StreamApi(configuration);

const { status, data } = await apiInstance.streamStateRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StreamState**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

