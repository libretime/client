# Libretime\Client\PodcastEpisodesApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**podcastEpisodesCreate()**](PodcastEpisodesApi.md#podcastEpisodesCreate) | **POST** /api/v2/podcast-episodes/ | 
[**podcastEpisodesDestroy()**](PodcastEpisodesApi.md#podcastEpisodesDestroy) | **DELETE** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesList()**](PodcastEpisodesApi.md#podcastEpisodesList) | **GET** /api/v2/podcast-episodes/ | 
[**podcastEpisodesPartialUpdate()**](PodcastEpisodesApi.md#podcastEpisodesPartialUpdate) | **PATCH** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesRetrieve()**](PodcastEpisodesApi.md#podcastEpisodesRetrieve) | **GET** /api/v2/podcast-episodes/{id}/ | 
[**podcastEpisodesUpdate()**](PodcastEpisodesApi.md#podcastEpisodesUpdate) | **PUT** /api/v2/podcast-episodes/{id}/ | 


## `podcastEpisodesCreate()`

```php
podcastEpisodesCreate($podcast_episode): \Libretime\Client\Model\PodcastEpisode
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$podcast_episode = new \Libretime\Client\Model\PodcastEpisode(); // \Libretime\Client\Model\PodcastEpisode

try {
    $result = $apiInstance->podcastEpisodesCreate($podcast_episode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **podcast_episode** | [**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)|  |

### Return type

[**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `podcastEpisodesDestroy()`

```php
podcastEpisodesDestroy($id)
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this podcast episode.

try {
    $apiInstance->podcastEpisodesDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |

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

## `podcastEpisodesList()`

```php
podcastEpisodesList(): \Libretime\Client\Model\PodcastEpisode[]
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->podcastEpisodesList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Libretime\Client\Model\PodcastEpisode[]**](../Model/PodcastEpisode.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `podcastEpisodesPartialUpdate()`

```php
podcastEpisodesPartialUpdate($id, $patched_podcast_episode): \Libretime\Client\Model\PodcastEpisode
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this podcast episode.
$patched_podcast_episode = new \Libretime\Client\Model\PatchedPodcastEpisode(); // \Libretime\Client\Model\PatchedPodcastEpisode

try {
    $result = $apiInstance->podcastEpisodesPartialUpdate($id, $patched_podcast_episode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |
 **patched_podcast_episode** | [**\Libretime\Client\Model\PatchedPodcastEpisode**](../Model/PatchedPodcastEpisode.md)|  | [optional]

### Return type

[**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `podcastEpisodesRetrieve()`

```php
podcastEpisodesRetrieve($id): \Libretime\Client\Model\PodcastEpisode
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this podcast episode.

try {
    $result = $apiInstance->podcastEpisodesRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |

### Return type

[**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `podcastEpisodesUpdate()`

```php
podcastEpisodesUpdate($id, $podcast_episode): \Libretime\Client\Model\PodcastEpisode
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


$apiInstance = new Libretime\Client\Api\PodcastEpisodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this podcast episode.
$podcast_episode = new \Libretime\Client\Model\PodcastEpisode(); // \Libretime\Client\Model\PodcastEpisode

try {
    $result = $apiInstance->podcastEpisodesUpdate($id, $podcast_episode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PodcastEpisodesApi->podcastEpisodesUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this podcast episode. |
 **podcast_episode** | [**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)|  |

### Return type

[**\Libretime\Client\Model\PodcastEpisode**](../Model/PodcastEpisode.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
