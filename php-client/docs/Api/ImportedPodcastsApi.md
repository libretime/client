# OpenAPI\Client\ImportedPodcastsApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**importedPodcastsCreate()**](ImportedPodcastsApi.md#importedPodcastsCreate) | **POST** /api/v2/imported-podcasts/ | 
[**importedPodcastsDestroy()**](ImportedPodcastsApi.md#importedPodcastsDestroy) | **DELETE** /api/v2/imported-podcasts/{id}/ | 
[**importedPodcastsList()**](ImportedPodcastsApi.md#importedPodcastsList) | **GET** /api/v2/imported-podcasts/ | 
[**importedPodcastsPartialUpdate()**](ImportedPodcastsApi.md#importedPodcastsPartialUpdate) | **PATCH** /api/v2/imported-podcasts/{id}/ | 
[**importedPodcastsRetrieve()**](ImportedPodcastsApi.md#importedPodcastsRetrieve) | **GET** /api/v2/imported-podcasts/{id}/ | 
[**importedPodcastsUpdate()**](ImportedPodcastsApi.md#importedPodcastsUpdate) | **PUT** /api/v2/imported-podcasts/{id}/ | 


## `importedPodcastsCreate()`

```php
importedPodcastsCreate($imported_podcast): \OpenAPI\Client\Model\ImportedPodcast
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$imported_podcast = new \OpenAPI\Client\Model\ImportedPodcast(); // \OpenAPI\Client\Model\ImportedPodcast

try {
    $result = $apiInstance->importedPodcastsCreate($imported_podcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imported_podcast** | [**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)|  |

### Return type

[**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `importedPodcastsDestroy()`

```php
importedPodcastsDestroy($id)
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this imported podcast.

try {
    $apiInstance->importedPodcastsDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. |

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

## `importedPodcastsList()`

```php
importedPodcastsList(): \OpenAPI\Client\Model\ImportedPodcast[]
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->importedPodcastsList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\ImportedPodcast[]**](../Model/ImportedPodcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `importedPodcastsPartialUpdate()`

```php
importedPodcastsPartialUpdate($id, $patched_imported_podcast): \OpenAPI\Client\Model\ImportedPodcast
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this imported podcast.
$patched_imported_podcast = new \OpenAPI\Client\Model\PatchedImportedPodcast(); // \OpenAPI\Client\Model\PatchedImportedPodcast

try {
    $result = $apiInstance->importedPodcastsPartialUpdate($id, $patched_imported_podcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. |
 **patched_imported_podcast** | [**\OpenAPI\Client\Model\PatchedImportedPodcast**](../Model/PatchedImportedPodcast.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `importedPodcastsRetrieve()`

```php
importedPodcastsRetrieve($id): \OpenAPI\Client\Model\ImportedPodcast
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this imported podcast.

try {
    $result = $apiInstance->importedPodcastsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. |

### Return type

[**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `importedPodcastsUpdate()`

```php
importedPodcastsUpdate($id, $imported_podcast): \OpenAPI\Client\Model\ImportedPodcast
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


$apiInstance = new OpenAPI\Client\Api\ImportedPodcastsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this imported podcast.
$imported_podcast = new \OpenAPI\Client\Model\ImportedPodcast(); // \OpenAPI\Client\Model\ImportedPodcast

try {
    $result = $apiInstance->importedPodcastsUpdate($id, $imported_podcast);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ImportedPodcastsApi->importedPodcastsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this imported podcast. |
 **imported_podcast** | [**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)|  |

### Return type

[**\OpenAPI\Client\Model\ImportedPodcast**](../Model/ImportedPodcast.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
