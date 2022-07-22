# Libretime\Client\SmartBlockContentsApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**smartBlockContentsCreate()**](SmartBlockContentsApi.md#smartBlockContentsCreate) | **POST** /api/v2/smart-block-contents | 
[**smartBlockContentsDestroy()**](SmartBlockContentsApi.md#smartBlockContentsDestroy) | **DELETE** /api/v2/smart-block-contents/{id} | 
[**smartBlockContentsList()**](SmartBlockContentsApi.md#smartBlockContentsList) | **GET** /api/v2/smart-block-contents | 
[**smartBlockContentsPartialUpdate()**](SmartBlockContentsApi.md#smartBlockContentsPartialUpdate) | **PATCH** /api/v2/smart-block-contents/{id} | 
[**smartBlockContentsRetrieve()**](SmartBlockContentsApi.md#smartBlockContentsRetrieve) | **GET** /api/v2/smart-block-contents/{id} | 
[**smartBlockContentsUpdate()**](SmartBlockContentsApi.md#smartBlockContentsUpdate) | **PUT** /api/v2/smart-block-contents/{id} | 


## `smartBlockContentsCreate()`

```php
smartBlockContentsCreate($smart_block_content): \Libretime\Client\Model\SmartBlockContent
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$smart_block_content = new \Libretime\Client\Model\SmartBlockContent(); // \Libretime\Client\Model\SmartBlockContent

try {
    $result = $apiInstance->smartBlockContentsCreate($smart_block_content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smart_block_content** | [**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)|  |

### Return type

[**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockContentsDestroy()`

```php
smartBlockContentsDestroy($id)
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block content.

try {
    $apiInstance->smartBlockContentsDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. |

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

## `smartBlockContentsList()`

```php
smartBlockContentsList(): \Libretime\Client\Model\SmartBlockContent[]
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->smartBlockContentsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\SmartBlockContent[]**](../Model/SmartBlockContent.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockContentsPartialUpdate()`

```php
smartBlockContentsPartialUpdate($id, $patched_smart_block_content): \Libretime\Client\Model\SmartBlockContent
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block content.
$patched_smart_block_content = new \Libretime\Client\Model\PatchedSmartBlockContent(); // \Libretime\Client\Model\PatchedSmartBlockContent

try {
    $result = $apiInstance->smartBlockContentsPartialUpdate($id, $patched_smart_block_content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. |
 **patched_smart_block_content** | [**\Libretime\Client\Model\PatchedSmartBlockContent**](../Model/PatchedSmartBlockContent.md)|  | [optional]

### Return type

[**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockContentsRetrieve()`

```php
smartBlockContentsRetrieve($id): \Libretime\Client\Model\SmartBlockContent
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block content.

try {
    $result = $apiInstance->smartBlockContentsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. |

### Return type

[**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `smartBlockContentsUpdate()`

```php
smartBlockContentsUpdate($id, $smart_block_content): \Libretime\Client\Model\SmartBlockContent
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


$apiInstance = new Libretime\Client\Api\SmartBlockContentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this smart block content.
$smart_block_content = new \Libretime\Client\Model\SmartBlockContent(); // \Libretime\Client\Model\SmartBlockContent

try {
    $result = $apiInstance->smartBlockContentsUpdate($id, $smart_block_content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartBlockContentsApi->smartBlockContentsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this smart block content. |
 **smart_block_content** | [**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)|  |

### Return type

[**\Libretime\Client\Model\SmartBlockContent**](../Model/SmartBlockContent.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
