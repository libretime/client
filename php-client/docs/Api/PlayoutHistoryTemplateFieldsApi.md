# Libretime\Client\PlayoutHistoryTemplateFieldsApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**playoutHistoryTemplateFieldsCreate()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsCreate) | **POST** /api/v2/playout-history-template-fields |  |
| [**playoutHistoryTemplateFieldsDestroy()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsDestroy) | **DELETE** /api/v2/playout-history-template-fields/{id} |  |
| [**playoutHistoryTemplateFieldsList()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsList) | **GET** /api/v2/playout-history-template-fields |  |
| [**playoutHistoryTemplateFieldsPartialUpdate()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsPartialUpdate) | **PATCH** /api/v2/playout-history-template-fields/{id} |  |
| [**playoutHistoryTemplateFieldsRetrieve()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsRetrieve) | **GET** /api/v2/playout-history-template-fields/{id} |  |
| [**playoutHistoryTemplateFieldsUpdate()**](PlayoutHistoryTemplateFieldsApi.md#playoutHistoryTemplateFieldsUpdate) | **PUT** /api/v2/playout-history-template-fields/{id} |  |


## `playoutHistoryTemplateFieldsCreate()`

```php
playoutHistoryTemplateFieldsCreate($playout_history_template_field): \Libretime\Client\Model\PlayoutHistoryTemplateField
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$playout_history_template_field = new \Libretime\Client\Model\PlayoutHistoryTemplateField(); // \Libretime\Client\Model\PlayoutHistoryTemplateField

try {
    $result = $apiInstance->playoutHistoryTemplateFieldsCreate($playout_history_template_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **playout_history_template_field** | [**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplateFieldsDestroy()`

```php
playoutHistoryTemplateFieldsDestroy($id)
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template field.

try {
    $apiInstance->playoutHistoryTemplateFieldsDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template field. | |

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

## `playoutHistoryTemplateFieldsList()`

```php
playoutHistoryTemplateFieldsList(): \Libretime\Client\Model\PlayoutHistoryTemplateField[]
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->playoutHistoryTemplateFieldsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplateField[]**](../Model/PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplateFieldsPartialUpdate()`

```php
playoutHistoryTemplateFieldsPartialUpdate($id, $patched_playout_history_template_field): \Libretime\Client\Model\PlayoutHistoryTemplateField
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template field.
$patched_playout_history_template_field = new \Libretime\Client\Model\PatchedPlayoutHistoryTemplateField(); // \Libretime\Client\Model\PatchedPlayoutHistoryTemplateField

try {
    $result = $apiInstance->playoutHistoryTemplateFieldsPartialUpdate($id, $patched_playout_history_template_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template field. | |
| **patched_playout_history_template_field** | [**\Libretime\Client\Model\PatchedPlayoutHistoryTemplateField**](../Model/PatchedPlayoutHistoryTemplateField.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplateFieldsRetrieve()`

```php
playoutHistoryTemplateFieldsRetrieve($id): \Libretime\Client\Model\PlayoutHistoryTemplateField
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template field.

try {
    $result = $apiInstance->playoutHistoryTemplateFieldsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template field. | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `playoutHistoryTemplateFieldsUpdate()`

```php
playoutHistoryTemplateFieldsUpdate($id, $playout_history_template_field): \Libretime\Client\Model\PlayoutHistoryTemplateField
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


$apiInstance = new Libretime\Client\Api\PlayoutHistoryTemplateFieldsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this playout history template field.
$playout_history_template_field = new \Libretime\Client\Model\PlayoutHistoryTemplateField(); // \Libretime\Client\Model\PlayoutHistoryTemplateField

try {
    $result = $apiInstance->playoutHistoryTemplateFieldsUpdate($id, $playout_history_template_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlayoutHistoryTemplateFieldsApi->playoutHistoryTemplateFieldsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this playout history template field. | |
| **playout_history_template_field** | [**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)|  | |

### Return type

[**\Libretime\Client\Model\PlayoutHistoryTemplateField**](../Model/PlayoutHistoryTemplateField.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
