# OpenAPI\Client\WebstreamMetadataApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**webstreamMetadataCreate()**](WebstreamMetadataApi.md#webstreamMetadataCreate) | **POST** /api/v2/webstream-metadata/ | 
[**webstreamMetadataDestroy()**](WebstreamMetadataApi.md#webstreamMetadataDestroy) | **DELETE** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataList()**](WebstreamMetadataApi.md#webstreamMetadataList) | **GET** /api/v2/webstream-metadata/ | 
[**webstreamMetadataPartialUpdate()**](WebstreamMetadataApi.md#webstreamMetadataPartialUpdate) | **PATCH** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataRetrieve()**](WebstreamMetadataApi.md#webstreamMetadataRetrieve) | **GET** /api/v2/webstream-metadata/{id}/ | 
[**webstreamMetadataUpdate()**](WebstreamMetadataApi.md#webstreamMetadataUpdate) | **PUT** /api/v2/webstream-metadata/{id}/ | 


## `webstreamMetadataCreate()`

```php
webstreamMetadataCreate($webstream_metadata): \OpenAPI\Client\Model\WebstreamMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webstream_metadata = new \OpenAPI\Client\Model\WebstreamMetadata(); // \OpenAPI\Client\Model\WebstreamMetadata

try {
    $result = $apiInstance->webstreamMetadataCreate($webstream_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webstream_metadata** | [**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)|  |

### Return type

[**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webstreamMetadataDestroy()`

```php
webstreamMetadataDestroy($id)
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this webstream metadata.

try {
    $apiInstance->webstreamMetadataDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webstreamMetadataList()`

```php
webstreamMetadataList(): \OpenAPI\Client\Model\WebstreamMetadata[]
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->webstreamMetadataList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\WebstreamMetadata[]**](../Model/WebstreamMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webstreamMetadataPartialUpdate()`

```php
webstreamMetadataPartialUpdate($id, $patched_webstream_metadata): \OpenAPI\Client\Model\WebstreamMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this webstream metadata.
$patched_webstream_metadata = new \OpenAPI\Client\Model\PatchedWebstreamMetadata(); // \OpenAPI\Client\Model\PatchedWebstreamMetadata

try {
    $result = $apiInstance->webstreamMetadataPartialUpdate($id, $patched_webstream_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. |
 **patched_webstream_metadata** | [**\OpenAPI\Client\Model\PatchedWebstreamMetadata**](../Model/PatchedWebstreamMetadata.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webstreamMetadataRetrieve()`

```php
webstreamMetadataRetrieve($id): \OpenAPI\Client\Model\WebstreamMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this webstream metadata.

try {
    $result = $apiInstance->webstreamMetadataRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. |

### Return type

[**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webstreamMetadataUpdate()`

```php
webstreamMetadataUpdate($id, $webstream_metadata): \OpenAPI\Client\Model\WebstreamMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\WebstreamMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this webstream metadata.
$webstream_metadata = new \OpenAPI\Client\Model\WebstreamMetadata(); // \OpenAPI\Client\Model\WebstreamMetadata

try {
    $result = $apiInstance->webstreamMetadataUpdate($id, $webstream_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebstreamMetadataApi->webstreamMetadataUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this webstream metadata. |
 **webstream_metadata** | [**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)|  |

### Return type

[**\OpenAPI\Client\Model\WebstreamMetadata**](../Model/WebstreamMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
