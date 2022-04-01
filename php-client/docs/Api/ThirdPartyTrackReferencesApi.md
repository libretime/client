# OpenAPI\Client\ThirdPartyTrackReferencesApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**thirdPartyTrackReferencesCreate()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesCreate) | **POST** /api/v2/third-party-track-references/ | 
[**thirdPartyTrackReferencesDestroy()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesDestroy) | **DELETE** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesList()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesList) | **GET** /api/v2/third-party-track-references/ | 
[**thirdPartyTrackReferencesPartialUpdate()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesPartialUpdate) | **PATCH** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesRetrieve()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesRetrieve) | **GET** /api/v2/third-party-track-references/{id}/ | 
[**thirdPartyTrackReferencesUpdate()**](ThirdPartyTrackReferencesApi.md#thirdPartyTrackReferencesUpdate) | **PUT** /api/v2/third-party-track-references/{id}/ | 


## `thirdPartyTrackReferencesCreate()`

```php
thirdPartyTrackReferencesCreate($third_party_track_reference): \OpenAPI\Client\Model\ThirdPartyTrackReference
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$third_party_track_reference = new \OpenAPI\Client\Model\ThirdPartyTrackReference(); // \OpenAPI\Client\Model\ThirdPartyTrackReference

try {
    $result = $apiInstance->thirdPartyTrackReferencesCreate($third_party_track_reference);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **third_party_track_reference** | [**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)|  |

### Return type

[**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `thirdPartyTrackReferencesDestroy()`

```php
thirdPartyTrackReferencesDestroy($id)
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this third party track reference.

try {
    $apiInstance->thirdPartyTrackReferencesDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. |

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

## `thirdPartyTrackReferencesList()`

```php
thirdPartyTrackReferencesList(): \OpenAPI\Client\Model\ThirdPartyTrackReference[]
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->thirdPartyTrackReferencesList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\ThirdPartyTrackReference[]**](../Model/ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `thirdPartyTrackReferencesPartialUpdate()`

```php
thirdPartyTrackReferencesPartialUpdate($id, $patched_third_party_track_reference): \OpenAPI\Client\Model\ThirdPartyTrackReference
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this third party track reference.
$patched_third_party_track_reference = new \OpenAPI\Client\Model\PatchedThirdPartyTrackReference(); // \OpenAPI\Client\Model\PatchedThirdPartyTrackReference

try {
    $result = $apiInstance->thirdPartyTrackReferencesPartialUpdate($id, $patched_third_party_track_reference);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. |
 **patched_third_party_track_reference** | [**\OpenAPI\Client\Model\PatchedThirdPartyTrackReference**](../Model/PatchedThirdPartyTrackReference.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `thirdPartyTrackReferencesRetrieve()`

```php
thirdPartyTrackReferencesRetrieve($id): \OpenAPI\Client\Model\ThirdPartyTrackReference
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this third party track reference.

try {
    $result = $apiInstance->thirdPartyTrackReferencesRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. |

### Return type

[**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `thirdPartyTrackReferencesUpdate()`

```php
thirdPartyTrackReferencesUpdate($id, $third_party_track_reference): \OpenAPI\Client\Model\ThirdPartyTrackReference
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


$apiInstance = new OpenAPI\Client\Api\ThirdPartyTrackReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this third party track reference.
$third_party_track_reference = new \OpenAPI\Client\Model\ThirdPartyTrackReference(); // \OpenAPI\Client\Model\ThirdPartyTrackReference

try {
    $result = $apiInstance->thirdPartyTrackReferencesUpdate($id, $third_party_track_reference);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ThirdPartyTrackReferencesApi->thirdPartyTrackReferencesUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this third party track reference. |
 **third_party_track_reference** | [**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)|  |

### Return type

[**\OpenAPI\Client\Model\ThirdPartyTrackReference**](../Model/ThirdPartyTrackReference.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
