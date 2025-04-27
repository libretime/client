# VersionApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**versionRetrieve**](#versionretrieve) | **GET** /api/v2/version | |

# **versionRetrieve**
> Version versionRetrieve()


### Example

```typescript
import {
    VersionApi,
    Configuration
} from 'libretime-client';

const configuration = new Configuration();
const apiInstance = new VersionApi(configuration);

const { status, data } = await apiInstance.versionRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Version**

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

