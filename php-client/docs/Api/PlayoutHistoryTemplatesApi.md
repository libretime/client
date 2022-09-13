# Libretime\Client\PlayoutHistoryTemplatesApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**playoutHistoryTemplatesCreate()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesCreate) | **POST** /api/v2/playout-history-templates |  |
| [**playoutHistoryTemplatesDestroy()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesDestroy) | **DELETE** /api/v2/playout-history-templates/{id} |  |
| [**playoutHistoryTemplatesList()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesList) | **GET** /api/v2/playout-history-templates |  |
| [**playoutHistoryTemplatesPartialUpdate()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesPartialUpdate) | **PATCH** /api/v2/playout-history-templates/{id} |  |
| [**playoutHistoryTemplatesRetrieve()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesRetrieve) | **GET** /api/v2/playout-history-templates/{id} |  |
| [**playoutHistoryTemplatesUpdate()**](PlayoutHistoryTemplatesApi.md#playoutHistoryTemplatesUpdate) | **PUT** /api/v2/playout-history-templates/{id} |  |


## `playoutHistoryTemplatesCreate()`

```php
playoutHistoryTemplatesCreate($playout_history_template): \Libretime\Client\Model\PlayoutHistoryTemplate
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$playout_history_template = new \Libretime\Client\Model\PlayoutHistoryTemplate(); // \Libretime\Client\Model\PlayoutHistoryTemplate

try {
    $result = $apiInstance->playoutHistoryTemplatesCreate($playout_history_template);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **playout_history_template** | [**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplatesDestroy()`

```php
playoutHistoryTemplatesDestroy($id)
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template.

try {
    $apiInstance->playoutHistoryTemplatesDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template. | |

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

## `playoutHistoryTemplatesList()`

```php
playoutHistoryTemplatesList(): \Libretime\Client\Model\PlayoutHistoryTemplate[]
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->playoutHistoryTemplatesList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplate[]**](../Model/PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplatesPartialUpdate()`

```php
playoutHistoryTemplatesPartialUpdate($id, $patched_playout_history_template): \Libretime\Client\Model\PlayoutHistoryTemplate
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template.
$patched_playout_history_template = new \Libretime\Client\Model\PatchedPlayoutHistoryTemplate(); // \Libretime\Client\Model\PatchedPlayoutHistoryTemplate

try {
    $result = $apiInstance->playoutHistoryTemplatesPartialUpdate($id, $patched_playout_history_template);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template. | |
| **patched_playout_history_template** | [**\Libretime\Client\Model\PatchedPlayoutHistoryTemplate**](../Model/PatchedPlayoutHistoryTemplate.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplatesRetrieve()`

```php
playoutHistoryTemplatesRetrieve($id): \Libretime\Client\Model\PlayoutHistoryTemplate
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template.

try {
    $result = $apiInstance->playoutHistoryTemplatesRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template. | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplatesUpdate()`

```php
playoutHistoryTemplatesUpdate($id, $playout_history_template): \Libretime\Client\Model\PlayoutHistoryTemplate
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template.
$playout_history_template = new \Libretime\Client\Model\PlayoutHistoryTemplate(); // \Libretime\Client\Model\PlayoutHistoryTemplate

try {
    $result = $apiInstance->playoutHistoryTemplatesUpdate($id, $playout_history_template);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplatesApi->playoutHistoryTemplatesUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template. | |
| **playout_history_template** | [**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplate**](../Model/PlayoutHistoryTemplate.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
