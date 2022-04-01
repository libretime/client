# OpenAPI\Client\SmartBlockCriteriaApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**smartBlockCriteriaCreate()**](SmartBlockCriteriaApi.md#smartBlockCriteriaCreate) | **POST** /api/v2/smart-block-criteria/ | 
[**smartBlockCriteriaDestroy()**](SmartBlockCriteriaApi.md#smartBlockCriteriaDestroy) | **DELETE** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaList()**](SmartBlockCriteriaApi.md#smartBlockCriteriaList) | **GET** /api/v2/smart-block-criteria/ | 
[**smartBlockCriteriaPartialUpdate()**](SmartBlockCriteriaApi.md#smartBlockCriteriaPartialUpdate) | **PATCH** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaRetrieve()**](SmartBlockCriteriaApi.md#smartBlockCriteriaRetrieve) | **GET** /api/v2/smart-block-criteria/{id}/ | 
[**smartBlockCriteriaUpdate()**](SmartBlockCriteriaApi.md#smartBlockCriteriaUpdate) | **PUT** /api/v2/smart-block-criteria/{id}/ | 


## `smartBlockCriteriaCreate()`

```php
smartBlockCriteriaCreate($smart_block_criteria): \OpenAPI\Client\Model\SmartBlockCriteria
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$smart_block_criteria = new \OpenAPI\Client\Model\SmartBlockCriteria(); // \OpenAPI\Client\Model\SmartBlockCriteria

try {
    $result = $apiInstance->smartBlockCriteriaCreate($smart_block_criteria);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_block_criteria** | [**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)|  |

### Return type

[**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockCriteriaDestroy()`

```php
smartBlockCriteriaDestroy($id)
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block criteria.

try {
    $apiInstance->smartBlockCriteriaDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |

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

## `smartBlockCriteriaList()`

```php
smartBlockCriteriaList(): \OpenAPI\Client\Model\SmartBlockCriteria[]
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->smartBlockCriteriaList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\SmartBlockCriteria[]**](../Model/SmartBlockCriteria.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockCriteriaPartialUpdate()`

```php
smartBlockCriteriaPartialUpdate($id, $patched_smart_block_criteria): \OpenAPI\Client\Model\SmartBlockCriteria
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block criteria.
$patched_smart_block_criteria = new \OpenAPI\Client\Model\PatchedSmartBlockCriteria(); // \OpenAPI\Client\Model\PatchedSmartBlockCriteria

try {
    $result = $apiInstance->smartBlockCriteriaPartialUpdate($id, $patched_smart_block_criteria);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |
 **patched_smart_block_criteria** | [**\OpenAPI\Client\Model\PatchedSmartBlockCriteria**](../Model/PatchedSmartBlockCriteria.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockCriteriaRetrieve()`

```php
smartBlockCriteriaRetrieve($id): \OpenAPI\Client\Model\SmartBlockCriteria
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block criteria.

try {
    $result = $apiInstance->smartBlockCriteriaRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |

### Return type

[**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockCriteriaUpdate()`

```php
smartBlockCriteriaUpdate($id, $smart_block_criteria): \OpenAPI\Client\Model\SmartBlockCriteria
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


$apiInstance = new OpenAPI\Client\Api\SmartBlockCriteriaApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block criteria.
$smart_block_criteria = new \OpenAPI\Client\Model\SmartBlockCriteria(); // \OpenAPI\Client\Model\SmartBlockCriteria

try {
    $result = $apiInstance->smartBlockCriteriaUpdate($id, $smart_block_criteria);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockCriteriaApi->smartBlockCriteriaUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block criteria. |
 **smart_block_criteria** | [**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)|  |

### Return type

[**\OpenAPI\Client\Model\SmartBlockCriteria**](../Model/SmartBlockCriteria.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
