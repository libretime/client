# Libretime\Client\ScheduleApi

All URIs are relative to http://localhost, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**scheduleCreate()**](ScheduleApi.md#scheduleCreate) | **POST** /api/v2/schedule |  |
| [**scheduleDestroy()**](ScheduleApi.md#scheduleDestroy) | **DELETE** /api/v2/schedule/{id} |  |
| [**scheduleList()**](ScheduleApi.md#scheduleList) | **GET** /api/v2/schedule |  |
| [**schedulePartialUpdate()**](ScheduleApi.md#schedulePartialUpdate) | **PATCH** /api/v2/schedule/{id} |  |
| [**scheduleRetrieve()**](ScheduleApi.md#scheduleRetrieve) | **GET** /api/v2/schedule/{id} |  |
| [**scheduleUpdate()**](ScheduleApi.md#scheduleUpdate) | **PUT** /api/v2/schedule/{id} |  |


## `scheduleCreate()`

```php
scheduleCreate($write_schedule): \Libretime\Client\Model\WriteSchedule
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$write_schedule = new \Libretime\Client\Model\WriteSchedule(); // \Libretime\Client\Model\WriteSchedule

try {
    $result = $apiInstance->scheduleCreate($write_schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **write_schedule** | [**\Libretime\Client\Model\WriteSchedule**](../Model/WriteSchedule.md)|  | |

### Return type

[**\Libretime\Client\Model\WriteSchedule**](../Model/WriteSchedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scheduleDestroy()`

```php
scheduleDestroy($id)
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.

try {
    $apiInstance->scheduleDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this schedule. | |

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

## `scheduleList()`

```php
scheduleList($broadcasted, $ends_after, $ends_before, $overbooked, $position_status, $starts_after, $starts_before): \Libretime\Client\Model\ReadSchedule[]
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$broadcasted = 56; // int
$ends_after = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$ends_before = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$overbooked = True; // bool
$position_status = 56; // int
$starts_after = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$starts_before = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->scheduleList($broadcasted, $ends_after, $ends_before, $overbooked, $position_status, $starts_after, $starts_before);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **broadcasted** | **int**|  | [optional] |
| **ends_after** | **\DateTime**|  | [optional] |
| **ends_before** | **\DateTime**|  | [optional] |
| **overbooked** | **bool**|  | [optional] |
| **position_status** | **int**|  | [optional] |
| **starts_after** | **\DateTime**|  | [optional] |
| **starts_before** | **\DateTime**|  | [optional] |

### Return type

[**\Libretime\Client\Model\ReadSchedule[]**](../Model/ReadSchedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `schedulePartialUpdate()`

```php
schedulePartialUpdate($id, $patched_read_schedule): \Libretime\Client\Model\ReadSchedule
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.
$patched_read_schedule = new \Libretime\Client\Model\PatchedReadSchedule(); // \Libretime\Client\Model\PatchedReadSchedule

try {
    $result = $apiInstance->schedulePartialUpdate($id, $patched_read_schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->schedulePartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this schedule. | |
| **patched_read_schedule** | [**\Libretime\Client\Model\PatchedReadSchedule**](../Model/PatchedReadSchedule.md)|  | [optional] |

### Return type

[**\Libretime\Client\Model\ReadSchedule**](../Model/ReadSchedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scheduleRetrieve()`

```php
scheduleRetrieve($id): \Libretime\Client\Model\ReadSchedule
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.

try {
    $result = $apiInstance->scheduleRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this schedule. | |

### Return type

[**\Libretime\Client\Model\ReadSchedule**](../Model/ReadSchedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `scheduleUpdate()`

```php
scheduleUpdate($id, $read_schedule): \Libretime\Client\Model\ReadSchedule
```



Overrides get_serializer_class to choose the read serializer for GET requests and the write serializer for POST requests.  Set read_serializer_class and write_serializer_class attributes on a viewset.

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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.
$read_schedule = new \Libretime\Client\Model\ReadSchedule(); // \Libretime\Client\Model\ReadSchedule

try {
    $result = $apiInstance->scheduleUpdate($id, $read_schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| A unique integer value identifying this schedule. | |
| **read_schedule** | [**\Libretime\Client\Model\ReadSchedule**](../Model/ReadSchedule.md)|  | |

### Return type

[**\Libretime\Client\Model\ReadSchedule**](../Model/ReadSchedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
