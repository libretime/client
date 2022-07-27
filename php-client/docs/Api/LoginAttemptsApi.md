# Libretime\Client\LoginAttemptsApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginAttemptsCreate()**](LoginAttemptsApi.md#loginAttemptsCreate) | **POST** /api/v2/login-attempts | 
[**loginAttemptsDestroy()**](LoginAttemptsApi.md#loginAttemptsDestroy) | **DELETE** /api/v2/login-attempts/{ip} | 
[**loginAttemptsList()**](LoginAttemptsApi.md#loginAttemptsList) | **GET** /api/v2/login-attempts | 
[**loginAttemptsPartialUpdate()**](LoginAttemptsApi.md#loginAttemptsPartialUpdate) | **PATCH** /api/v2/login-attempts/{ip} | 
[**loginAttemptsRetrieve()**](LoginAttemptsApi.md#loginAttemptsRetrieve) | **GET** /api/v2/login-attempts/{ip} | 
[**loginAttemptsUpdate()**](LoginAttemptsApi.md#loginAttemptsUpdate) | **PUT** /api/v2/login-attempts/{ip} | 


## `loginAttemptsCreate()`

```php
loginAttemptsCreate($login_attempt): \Libretime\Client\Model\LoginAttempt
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$login_attempt = new \Libretime\Client\Model\LoginAttempt(); // \Libretime\Client\Model\LoginAttempt

try {
    $result = $apiInstance->loginAttemptsCreate($login_attempt);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_attempt** | [**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)|  |

### Return type

[**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginAttemptsDestroy()`

```php
loginAttemptsDestroy($ip)
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ip = 'ip_example'; // string | A unique value identifying this login attempt.

try {
    $apiInstance->loginAttemptsDestroy($ip);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**| A unique value identifying this login attempt. |

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

## `loginAttemptsList()`

```php
loginAttemptsList(): \Libretime\Client\Model\LoginAttempt[]
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->loginAttemptsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\LoginAttempt[]**](../Model/LoginAttempt.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginAttemptsPartialUpdate()`

```php
loginAttemptsPartialUpdate($ip, $patched_login_attempt): \Libretime\Client\Model\LoginAttempt
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ip = 'ip_example'; // string | A unique value identifying this login attempt.
$patched_login_attempt = new \Libretime\Client\Model\PatchedLoginAttempt(); // \Libretime\Client\Model\PatchedLoginAttempt

try {
    $result = $apiInstance->loginAttemptsPartialUpdate($ip, $patched_login_attempt);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**| A unique value identifying this login attempt. |
 **patched_login_attempt** | [**\Libretime\Client\Model\PatchedLoginAttempt**](../Model/PatchedLoginAttempt.md)|  | [optional]

### Return type

[**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginAttemptsRetrieve()`

```php
loginAttemptsRetrieve($ip): \Libretime\Client\Model\LoginAttempt
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ip = 'ip_example'; // string | A unique value identifying this login attempt.

try {
    $result = $apiInstance->loginAttemptsRetrieve($ip);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**| A unique value identifying this login attempt. |

### Return type

[**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginAttemptsUpdate()`

```php
loginAttemptsUpdate($ip, $login_attempt): \Libretime\Client\Model\LoginAttempt
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


$apiInstance = new Libretime\Client\Api\LoginAttemptsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ip = 'ip_example'; // string | A unique value identifying this login attempt.
$login_attempt = new \Libretime\Client\Model\LoginAttempt(); // \Libretime\Client\Model\LoginAttempt

try {
    $result = $apiInstance->loginAttemptsUpdate($ip, $login_attempt);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LoginAttemptsApi->loginAttemptsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**| A unique value identifying this login attempt. |
 **login_attempt** | [**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)|  |

### Return type

[**\Libretime\Client\Model\LoginAttempt**](../Model/LoginAttempt.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
