# OpenAPI\Client\ShowRebroadcastsApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**showRebroadcastsCreate()**](ShowRebroadcastsApi.md#showRebroadcastsCreate) | **POST** /api/v2/show-rebroadcasts/ | 
[**showRebroadcastsDestroy()**](ShowRebroadcastsApi.md#showRebroadcastsDestroy) | **DELETE** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsList()**](ShowRebroadcastsApi.md#showRebroadcastsList) | **GET** /api/v2/show-rebroadcasts/ | 
[**showRebroadcastsPartialUpdate()**](ShowRebroadcastsApi.md#showRebroadcastsPartialUpdate) | **PATCH** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsRetrieve()**](ShowRebroadcastsApi.md#showRebroadcastsRetrieve) | **GET** /api/v2/show-rebroadcasts/{id}/ | 
[**showRebroadcastsUpdate()**](ShowRebroadcastsApi.md#showRebroadcastsUpdate) | **PUT** /api/v2/show-rebroadcasts/{id}/ | 


## `showRebroadcastsCreate()`

```php
showRebroadcastsCreate($show_rebroadcast): \OpenAPI\Client\Model\ShowRebroadcast
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$show_rebroadcast = new \OpenAPI\Client\Model\ShowRebroadcast(); // \OpenAPI\Client\Model\ShowRebroadcast

try {
    $result = $apiInstance->showRebroadcastsCreate($show_rebroadcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_rebroadcast** | [**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)|  |

### Return type

[**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showRebroadcastsDestroy()`

```php
showRebroadcastsDestroy($id)
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show rebroadcast.

try {
    $apiInstance->showRebroadcastsDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. |

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

## `showRebroadcastsList()`

```php
showRebroadcastsList(): \OpenAPI\Client\Model\ShowRebroadcast[]
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->showRebroadcastsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\ShowRebroadcast[]**](../Model/ShowRebroadcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showRebroadcastsPartialUpdate()`

```php
showRebroadcastsPartialUpdate($id, $patched_show_rebroadcast): \OpenAPI\Client\Model\ShowRebroadcast
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show rebroadcast.
$patched_show_rebroadcast = new \OpenAPI\Client\Model\PatchedShowRebroadcast(); // \OpenAPI\Client\Model\PatchedShowRebroadcast

try {
    $result = $apiInstance->showRebroadcastsPartialUpdate($id, $patched_show_rebroadcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. |
 **patched_show_rebroadcast** | [**\OpenAPI\Client\Model\PatchedShowRebroadcast**](../Model/PatchedShowRebroadcast.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showRebroadcastsRetrieve()`

```php
showRebroadcastsRetrieve($id): \OpenAPI\Client\Model\ShowRebroadcast
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show rebroadcast.

try {
    $result = $apiInstance->showRebroadcastsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. |

### Return type

[**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `showRebroadcastsUpdate()`

```php
showRebroadcastsUpdate($id, $show_rebroadcast): \OpenAPI\Client\Model\ShowRebroadcast
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


$apiInstance = new OpenAPI\Client\Api\ShowRebroadcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this show rebroadcast.
$show_rebroadcast = new \OpenAPI\Client\Model\ShowRebroadcast(); // \OpenAPI\Client\Model\ShowRebroadcast

try {
    $result = $apiInstance->showRebroadcastsUpdate($id, $show_rebroadcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShowRebroadcastsApi->showRebroadcastsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show rebroadcast. |
 **show_rebroadcast** | [**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)|  |

### Return type

[**\OpenAPI\Client\Model\ShowRebroadcast**](../Model/ShowRebroadcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
