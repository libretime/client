# OpenAPI\Client\StreamSettingsApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamSettingsCreate()**](StreamSettingsApi.md#streamSettingsCreate) | **POST** /api/v2/stream-settings/ | 
[**streamSettingsDestroy()**](StreamSettingsApi.md#streamSettingsDestroy) | **DELETE** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsList()**](StreamSettingsApi.md#streamSettingsList) | **GET** /api/v2/stream-settings/ | 
[**streamSettingsPartialUpdate()**](StreamSettingsApi.md#streamSettingsPartialUpdate) | **PATCH** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsRetrieve()**](StreamSettingsApi.md#streamSettingsRetrieve) | **GET** /api/v2/stream-settings/{keyname}/ | 
[**streamSettingsUpdate()**](StreamSettingsApi.md#streamSettingsUpdate) | **PUT** /api/v2/stream-settings/{keyname}/ | 


## `streamSettingsCreate()`

```php
streamSettingsCreate($stream_setting): \OpenAPI\Client\Model\StreamSetting
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stream_setting = new \OpenAPI\Client\Model\StreamSetting(); // \OpenAPI\Client\Model\StreamSetting

try {
    $result = $apiInstance->streamSettingsCreate($stream_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stream_setting** | [**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)|  |

### Return type

[**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `streamSettingsDestroy()`

```php
streamSettingsDestroy($keyname)
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$keyname = 'keyname_example'; // string | A unique value identifying this stream setting.

try {
    $apiInstance->streamSettingsDestroy($keyname);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyname** | **string**| A unique value identifying this stream setting. |

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

## `streamSettingsList()`

```php
streamSettingsList(): \OpenAPI\Client\Model\StreamSetting[]
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->streamSettingsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\StreamSetting[]**](../Model/StreamSetting.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `streamSettingsPartialUpdate()`

```php
streamSettingsPartialUpdate($keyname, $patched_stream_setting): \OpenAPI\Client\Model\StreamSetting
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$keyname = 'keyname_example'; // string | A unique value identifying this stream setting.
$patched_stream_setting = new \OpenAPI\Client\Model\PatchedStreamSetting(); // \OpenAPI\Client\Model\PatchedStreamSetting

try {
    $result = $apiInstance->streamSettingsPartialUpdate($keyname, $patched_stream_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyname** | **string**| A unique value identifying this stream setting. |
 **patched_stream_setting** | [**\OpenAPI\Client\Model\PatchedStreamSetting**](../Model/PatchedStreamSetting.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `streamSettingsRetrieve()`

```php
streamSettingsRetrieve($keyname): \OpenAPI\Client\Model\StreamSetting
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$keyname = 'keyname_example'; // string | A unique value identifying this stream setting.

try {
    $result = $apiInstance->streamSettingsRetrieve($keyname);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyname** | **string**| A unique value identifying this stream setting. |

### Return type

[**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `streamSettingsUpdate()`

```php
streamSettingsUpdate($keyname, $stream_setting): \OpenAPI\Client\Model\StreamSetting
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


$apiInstance = new OpenAPI\Client\Api\StreamSettingsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$keyname = 'keyname_example'; // string | A unique value identifying this stream setting.
$stream_setting = new \OpenAPI\Client\Model\StreamSetting(); // \OpenAPI\Client\Model\StreamSetting

try {
    $result = $apiInstance->streamSettingsUpdate($keyname, $stream_setting);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StreamSettingsApi->streamSettingsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyname** | **string**| A unique value identifying this stream setting. |
 **stream_setting** | [**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)|  |

### Return type

[**\OpenAPI\Client\Model\StreamSetting**](../Model/StreamSetting.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
