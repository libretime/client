# Libretime\Client\ShowInstancesApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**showInstancesCreate()**](ShowInstancesApi.md#showInstancesCreate) | **POST** /api/v2/show-instances |  |
| [**showInstancesDestroy()**](ShowInstancesApi.md#showInstancesDestroy) | **DELETE** /api/v2/show-instances/{id} |  |
| [**showInstancesList()**](ShowInstancesApi.md#showInstancesList) | **GET** /api/v2/show-instances |  |
| [**showInstancesPartialUpdate()**](ShowInstancesApi.md#showInstancesPartialUpdate) | **PATCH** /api/v2/show-instances/{id} |  |
| [**showInstancesRetrieve()**](ShowInstancesApi.md#showInstancesRetrieve) | **GET** /api/v2/show-instances/{id} |  |
| [**showInstancesUpdate()**](ShowInstancesApi.md#showInstancesUpdate) | **PUT** /api/v2/show-instances/{id} |  |


## `showInstancesCreate()`

```php
showInstancesCreate($show_instance): \Libretime\Client\Model\ShowInstance
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$show_instance = new \Libretime\Client\Model\ShowInstance(); // \Libretime\Client\Model\ShowInstance

try {
    $result = $apiInstance->showInstancesCreate($show_instance);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **show_instance** | [**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)|  | |

### Return type

[**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showInstancesDestroy()`

```php
showInstancesDestroy($id)
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show instance.

try {
    $apiInstance->showInstancesDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this show instance. | |

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

## `showInstancesList()`

```php
showInstancesList(): \Libretime\Client\Model\ShowInstance[]
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->showInstancesList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\ShowInstance[]**](../Model/ShowInstance.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showInstancesPartialUpdate()`

```php
showInstancesPartialUpdate($id, $patched_show_instance): \Libretime\Client\Model\ShowInstance
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show instance.
$patched_show_instance = new \Libretime\Client\Model\PatchedShowInstance(); // \Libretime\Client\Model\PatchedShowInstance

try {
    $result = $apiInstance->showInstancesPartialUpdate($id, $patched_show_instance);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this show instance. | |
| **patched_show_instance** | [**\Libretime\Client\Model\PatchedShowInstance**](../Model/PatchedShowInstance.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showInstancesRetrieve()`

```php
showInstancesRetrieve($id): \Libretime\Client\Model\ShowInstance
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show instance.

try {
    $result = $apiInstance->showInstancesRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this show instance. | |

### Return type

[**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showInstancesUpdate()`

```php
showInstancesUpdate($id, $show_instance): \Libretime\Client\Model\ShowInstance
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


$apiInstance = new Libretime\Client\Api\ShowInstancesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show instance.
$show_instance = new \Libretime\Client\Model\ShowInstance(); // \Libretime\Client\Model\ShowInstance

try {
    $result = $apiInstance->showInstancesUpdate($id, $show_instance);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowInstancesApi->showInstancesUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this show instance. | |
| **show_instance** | [**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)|  | |

### Return type

[**\Libretime\Client\Model\ShowInstance**](../Model/ShowInstance.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
