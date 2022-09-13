# Libretime\Client\PlayoutHistoryApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**playoutHistoryCreate()**](PlayoutHistoryApi.md#playoutHistoryCreate) | **POST** /api/v2/playout-history |  |
| [**playoutHistoryDestroy()**](PlayoutHistoryApi.md#playoutHistoryDestroy) | **DELETE** /api/v2/playout-history/{id} |  |
| [**playoutHistoryList()**](PlayoutHistoryApi.md#playoutHistoryList) | **GET** /api/v2/playout-history |  |
| [**playoutHistoryPartialUpdate()**](PlayoutHistoryApi.md#playoutHistoryPartialUpdate) | **PATCH** /api/v2/playout-history/{id} |  |
| [**playoutHistoryRetrieve()**](PlayoutHistoryApi.md#playoutHistoryRetrieve) | **GET** /api/v2/playout-history/{id} |  |
| [**playoutHistoryUpdate()**](PlayoutHistoryApi.md#playoutHistoryUpdate) | **PUT** /api/v2/playout-history/{id} |  |


## `playoutHistoryCreate()`

```php
playoutHistoryCreate($playout_history): \Libretime\Client\Model\PlayoutHistory
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$playout_history = new \Libretime\Client\Model\PlayoutHistory(); // \Libretime\Client\Model\PlayoutHistory

try {
    $result = $apiInstance->playoutHistoryCreate($playout_history);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **playout_history** | [**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryDestroy()`

```php
playoutHistoryDestroy($id)
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history.

try {
    $apiInstance->playoutHistoryDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history. | |

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

## `playoutHistoryList()`

```php
playoutHistoryList(): \Libretime\Client\Model\PlayoutHistory[]
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->playoutHistoryList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\PlayoutHistory[]**](../Model/PlayoutHistory.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryPartialUpdate()`

```php
playoutHistoryPartialUpdate($id, $patched_playout_history): \Libretime\Client\Model\PlayoutHistory
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history.
$patched_playout_history = new \Libretime\Client\Model\PatchedPlayoutHistory(); // \Libretime\Client\Model\PatchedPlayoutHistory

try {
    $result = $apiInstance->playoutHistoryPartialUpdate($id, $patched_playout_history);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history. | |
| **patched_playout_history** | [**\Libretime\Client\Model\PatchedPlayoutHistory**](../Model/PatchedPlayoutHistory.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryRetrieve()`

```php
playoutHistoryRetrieve($id): \Libretime\Client\Model\PlayoutHistory
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history.

try {
    $result = $apiInstance->playoutHistoryRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history. | |

### Return type

[**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryUpdate()`

```php
playoutHistoryUpdate($id, $playout_history): \Libretime\Client\Model\PlayoutHistory
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history.
$playout_history = new \Libretime\Client\Model\PlayoutHistory(); // \Libretime\Client\Model\PlayoutHistory

try {
    $result = $apiInstance->playoutHistoryUpdate($id, $playout_history);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryApi->playoutHistoryUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history. | |
| **playout_history** | [**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistory**](../Model/PlayoutHistory.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
