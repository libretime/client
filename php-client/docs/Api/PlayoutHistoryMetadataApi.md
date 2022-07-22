# Libretime\Client\PlayoutHistoryMetadataApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**playoutHistoryMetadataCreate()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataCreate) | **POST** /api/v2/playout-history-metadata | 
[**playoutHistoryMetadataDestroy()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataDestroy) | **DELETE** /api/v2/playout-history-metadata/{id} | 
[**playoutHistoryMetadataList()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataList) | **GET** /api/v2/playout-history-metadata | 
[**playoutHistoryMetadataPartialUpdate()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataPartialUpdate) | **PATCH** /api/v2/playout-history-metadata/{id} | 
[**playoutHistoryMetadataRetrieve()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataRetrieve) | **GET** /api/v2/playout-history-metadata/{id} | 
[**playoutHistoryMetadataUpdate()**](PlayoutHistoryMetadataApi.md#playoutHistoryMetadataUpdate) | **PUT** /api/v2/playout-history-metadata/{id} | 


## `playoutHistoryMetadataCreate()`

```php
playoutHistoryMetadataCreate($playout_history_metadata): \Libretime\Client\Model\PlayoutHistoryMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$playout_history_metadata = new \Libretime\Client\Model\PlayoutHistoryMetadata(); // \Libretime\Client\Model\PlayoutHistoryMetadata

try {
    $result = $apiInstance->playoutHistoryMetadataCreate($playout_history_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playout_history_metadata** | [**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)|  |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryMetadataDestroy()`

```php
playoutHistoryMetadataDestroy($id)
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history metadata.

try {
    $apiInstance->playoutHistoryMetadataDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |

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

## `playoutHistoryMetadataList()`

```php
playoutHistoryMetadataList(): \Libretime\Client\Model\PlayoutHistoryMetadata[]
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->playoutHistoryMetadataList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\PlayoutHistoryMetadata[]**](../Model/PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryMetadataPartialUpdate()`

```php
playoutHistoryMetadataPartialUpdate($id, $patched_playout_history_metadata): \Libretime\Client\Model\PlayoutHistoryMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history metadata.
$patched_playout_history_metadata = new \Libretime\Client\Model\PatchedPlayoutHistoryMetadata(); // \Libretime\Client\Model\PatchedPlayoutHistoryMetadata

try {
    $result = $apiInstance->playoutHistoryMetadataPartialUpdate($id, $patched_playout_history_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |
 **patched_playout_history_metadata** | [**\Libretime\Client\Model\PatchedPlayoutHistoryMetadata**](../Model/PatchedPlayoutHistoryMetadata.md)|  | [optional]

### Return type

[**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryMetadataRetrieve()`

```php
playoutHistoryMetadataRetrieve($id): \Libretime\Client\Model\PlayoutHistoryMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history metadata.

try {
    $result = $apiInstance->playoutHistoryMetadataRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryMetadataUpdate()`

```php
playoutHistoryMetadataUpdate($id, $playout_history_metadata): \Libretime\Client\Model\PlayoutHistoryMetadata
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');

// Configure API key authorization: cookieAuth
$config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKey('sessionid', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Libretime\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('sessionid', 'Bearer');


$apiInstance = new Libretime\Client\Api\PlayoutHistoryMetadataApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history metadata.
$playout_history_metadata = new \Libretime\Client\Model\PlayoutHistoryMetadata(); // \Libretime\Client\Model\PlayoutHistoryMetadata

try {
    $result = $apiInstance->playoutHistoryMetadataUpdate($id, $playout_history_metadata);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryMetadataApi->playoutHistoryMetadataUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this playout history metadata. |
 **playout_history_metadata** | [**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)|  |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryMetadata**](../Model/PlayoutHistoryMetadata.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
