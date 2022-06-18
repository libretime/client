# Libretime\Client\ScheduleApi

All URIs are relative to http://localhost.

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduleCreate()**](ScheduleApi.md#scheduleCreate) | **POST** /api/v2/schedule/ | 
[**scheduleDestroy()**](ScheduleApi.md#scheduleDestroy) | **DELETE** /api/v2/schedule/{id}/ | 
[**scheduleList()**](ScheduleApi.md#scheduleList) | **GET** /api/v2/schedule/ | 
[**schedulePartialUpdate()**](ScheduleApi.md#schedulePartialUpdate) | **PATCH** /api/v2/schedule/{id}/ | 
[**scheduleRetrieve()**](ScheduleApi.md#scheduleRetrieve) | **GET** /api/v2/schedule/{id}/ | 
[**scheduleUpdate()**](ScheduleApi.md#scheduleUpdate) | **PUT** /api/v2/schedule/{id}/ | 


## `scheduleCreate()`

```php
scheduleCreate($schedule): \Libretime\Client\Model\Schedule
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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$schedule = new \Libretime\Client\Model\Schedule(); // \Libretime\Client\Model\Schedule

try {
    $result = $apiInstance->scheduleCreate($schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | [**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)|  |

### Return type

[**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)

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

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |

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
scheduleList($broadcasted, $broadcasted__gt, $broadcasted__gte, $broadcasted__lt, $broadcasted__lte, $broadcasted__range, $ends, $ends__gt, $ends__gte, $ends__lt, $ends__lte, $ends__range, $is_valid, $playout_status, $playout_status__gt, $playout_status__gte, $playout_status__lt, $playout_status__lte, $playout_status__range, $starts, $starts__gt, $starts__gte, $starts__lt, $starts__lte, $starts__range): \Libretime\Client\Model\Schedule[]
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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$broadcasted = 56; // int
$broadcasted__gt = 56; // int
$broadcasted__gte = 56; // int
$broadcasted__lt = 56; // int
$broadcasted__lte = 56; // int
$broadcasted__range = array(56); // int[] | Multiple values may be separated by commas.
$ends = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$ends__gt = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$ends__gte = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$ends__lt = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$ends__lte = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$ends__range = array(new \DateTime("2013-10-20T19:20:30+01:00")); // \DateTime[] | Multiple values may be separated by commas.
$is_valid = True; // bool | Filter on valid instances
$playout_status = 56; // int
$playout_status__gt = 56; // int
$playout_status__gte = 56; // int
$playout_status__lt = 56; // int
$playout_status__lte = 56; // int
$playout_status__range = array(56); // int[] | Multiple values may be separated by commas.
$starts = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$starts__gt = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$starts__gte = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$starts__lt = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$starts__lte = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$starts__range = array(new \DateTime("2013-10-20T19:20:30+01:00")); // \DateTime[] | Multiple values may be separated by commas.

try {
    $result = $apiInstance->scheduleList($broadcasted, $broadcasted__gt, $broadcasted__gte, $broadcasted__lt, $broadcasted__lte, $broadcasted__range, $ends, $ends__gt, $ends__gte, $ends__lt, $ends__lte, $ends__range, $is_valid, $playout_status, $playout_status__gt, $playout_status__gte, $playout_status__lt, $playout_status__lte, $playout_status__range, $starts, $starts__gt, $starts__gte, $starts__lt, $starts__lte, $starts__range);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **broadcasted** | **int**|  | [optional]
 **broadcasted__gt** | **int**|  | [optional]
 **broadcasted__gte** | **int**|  | [optional]
 **broadcasted__lt** | **int**|  | [optional]
 **broadcasted__lte** | **int**|  | [optional]
 **broadcasted__range** | [**int[]**](../Model/int.md)| Multiple values may be separated by commas. | [optional]
 **ends** | **\DateTime**|  | [optional]
 **ends__gt** | **\DateTime**|  | [optional]
 **ends__gte** | **\DateTime**|  | [optional]
 **ends__lt** | **\DateTime**|  | [optional]
 **ends__lte** | **\DateTime**|  | [optional]
 **ends__range** | [**\DateTime[]**](../Model/\DateTime.md)| Multiple values may be separated by commas. | [optional]
 **is_valid** | **bool**| Filter on valid instances | [optional]
 **playout_status** | **int**|  | [optional]
 **playout_status__gt** | **int**|  | [optional]
 **playout_status__gte** | **int**|  | [optional]
 **playout_status__lt** | **int**|  | [optional]
 **playout_status__lte** | **int**|  | [optional]
 **playout_status__range** | [**int[]**](../Model/int.md)| Multiple values may be separated by commas. | [optional]
 **starts** | **\DateTime**|  | [optional]
 **starts__gt** | **\DateTime**|  | [optional]
 **starts__gte** | **\DateTime**|  | [optional]
 **starts__lt** | **\DateTime**|  | [optional]
 **starts__lte** | **\DateTime**|  | [optional]
 **starts__range** | [**\DateTime[]**](../Model/\DateTime.md)| Multiple values may be separated by commas. | [optional]

### Return type

[**\Libretime\Client\Model\Schedule[]**](../Model/Schedule.md)

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
schedulePartialUpdate($id, $patched_schedule): \Libretime\Client\Model\Schedule
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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.
$patched_schedule = new \Libretime\Client\Model\PatchedSchedule(); // \Libretime\Client\Model\PatchedSchedule

try {
    $result = $apiInstance->schedulePartialUpdate($id, $patched_schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->schedulePartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |
 **patched_schedule** | [**\Libretime\Client\Model\PatchedSchedule**](../Model/PatchedSchedule.md)|  | [optional]

### Return type

[**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)

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
scheduleRetrieve($id): \Libretime\Client\Model\Schedule
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

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |

### Return type

[**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)

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
scheduleUpdate($id, $schedule): \Libretime\Client\Model\Schedule
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


$apiInstance = new Libretime\Client\Api\ScheduleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | A unique integer value identifying this schedule.
$schedule = new \Libretime\Client\Model\Schedule(); // \Libretime\Client\Model\Schedule

try {
    $result = $apiInstance->scheduleUpdate($id, $schedule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScheduleApi->scheduleUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |
 **schedule** | [**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)|  |

### Return type

[**\Libretime\Client\Model\Schedule**](../Model/Schedule.md)

### Authorization

[basicAuth](../../README.md#basicAuth), [cookieAuth](../../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
