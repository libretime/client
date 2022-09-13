# Libretime\Client\ServiceRegistersApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**serviceRegistersCreate()**](ServiceRegistersApi.md#serviceRegistersCreate) | **POST** /api/v2/service-registers |  |
| [**serviceRegistersDestroy()**](ServiceRegistersApi.md#serviceRegistersDestroy) | **DELETE** /api/v2/service-registers/{name} |  |
| [**serviceRegistersList()**](ServiceRegistersApi.md#serviceRegistersList) | **GET** /api/v2/service-registers |  |
| [**serviceRegistersPartialUpdate()**](ServiceRegistersApi.md#serviceRegistersPartialUpdate) | **PATCH** /api/v2/service-registers/{name} |  |
| [**serviceRegistersRetrieve()**](ServiceRegistersApi.md#serviceRegistersRetrieve) | **GET** /api/v2/service-registers/{name} |  |
| [**serviceRegistersUpdate()**](ServiceRegistersApi.md#serviceRegistersUpdate) | **PUT** /api/v2/service-registers/{name} |  |


## `serviceRegistersCreate()`

```php
serviceRegistersCreate($service_register): \Libretime\Client\Model\ServiceRegister
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$service_register = new \Libretime\Client\Model\ServiceRegister(); // \Libretime\Client\Model\ServiceRegister

try {
    $result = $apiInstance->serviceRegistersCreate($service_register);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **service_register** | [**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)|  | |

### Return type

[**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceRegistersDestroy()`

```php
serviceRegistersDestroy($name)
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string | A unique value identifying this service register.

try {
    $apiInstance->serviceRegistersDestroy($name);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**| A unique value identifying this service register. | |

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

## `serviceRegistersList()`

```php
serviceRegistersList(): \Libretime\Client\Model\ServiceRegister[]
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->serviceRegistersList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\ServiceRegister[]**](../Model/ServiceRegister.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceRegistersPartialUpdate()`

```php
serviceRegistersPartialUpdate($name, $patched_service_register): \Libretime\Client\Model\ServiceRegister
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string | A unique value identifying this service register.
$patched_service_register = new \Libretime\Client\Model\PatchedServiceRegister(); // \Libretime\Client\Model\PatchedServiceRegister

try {
    $result = $apiInstance->serviceRegistersPartialUpdate($name, $patched_service_register);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**| A unique value identifying this service register. | |
| **patched_service_register** | [**\Libretime\Client\Model\PatchedServiceRegister**](../Model/PatchedServiceRegister.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceRegistersRetrieve()`

```php
serviceRegistersRetrieve($name): \Libretime\Client\Model\ServiceRegister
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string | A unique value identifying this service register.

try {
    $result = $apiInstance->serviceRegistersRetrieve($name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**| A unique value identifying this service register. | |

### Return type

[**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `serviceRegistersUpdate()`

```php
serviceRegistersUpdate($name, $service_register): \Libretime\Client\Model\ServiceRegister
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


$apiInstance = new Libretime\Client\Api\ServiceRegistersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$name = 'name_example'; // string | A unique value identifying this service register.
$service_register = new \Libretime\Client\Model\ServiceRegister(); // \Libretime\Client\Model\ServiceRegister

try {
    $result = $apiInstance->serviceRegistersUpdate($name, $service_register);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServiceRegistersApi->serviceRegistersUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**| A unique value identifying this service register. | |
| **service_register** | [**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)|  | |

### Return type

[**\Libretime\Client\Model\ServiceRegister**](../Model/ServiceRegister.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
