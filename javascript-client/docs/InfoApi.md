# InfoApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**infoRetrieve**](#inforetrieve) | **GET** /api/v2/info | |

# **infoRetrieve**
> Info infoRetrieve()


### Example

```typescript
import {
    InfoApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new InfoApi(configuration);

const { status, data } = await apiInstance.infoRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Info**

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

