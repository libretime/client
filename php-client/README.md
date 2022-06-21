# libretime/client

Radio Broadcast & Automation Platform


## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/libretime/client.git"
    }
  ],
  "require": {
    "libretime/client": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/libretime/client/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

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


$apiInstance = new Libretime\Client\Api\CeleryTasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$celery_task = new \Libretime\Client\Model\CeleryTask(); // \Libretime\Client\Model\CeleryTask

try {
    $result = $apiInstance->celeryTasksCreate($celery_task);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CeleryTasksApi->celeryTasksCreate: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CeleryTasksApi* | [**celeryTasksCreate**](docs/Api/CeleryTasksApi.md#celerytaskscreate) | **POST** /api/v2/celery-tasks/ | 
*CeleryTasksApi* | [**celeryTasksDestroy**](docs/Api/CeleryTasksApi.md#celerytasksdestroy) | **DELETE** /api/v2/celery-tasks/{id}/ | 
*CeleryTasksApi* | [**celeryTasksList**](docs/Api/CeleryTasksApi.md#celerytaskslist) | **GET** /api/v2/celery-tasks/ | 
*CeleryTasksApi* | [**celeryTasksPartialUpdate**](docs/Api/CeleryTasksApi.md#celerytaskspartialupdate) | **PATCH** /api/v2/celery-tasks/{id}/ | 
*CeleryTasksApi* | [**celeryTasksRetrieve**](docs/Api/CeleryTasksApi.md#celerytasksretrieve) | **GET** /api/v2/celery-tasks/{id}/ | 
*CeleryTasksApi* | [**celeryTasksUpdate**](docs/Api/CeleryTasksApi.md#celerytasksupdate) | **PUT** /api/v2/celery-tasks/{id}/ | 
*CloudFilesApi* | [**cloudFilesCreate**](docs/Api/CloudFilesApi.md#cloudfilescreate) | **POST** /api/v2/cloud-files/ | 
*CloudFilesApi* | [**cloudFilesDestroy**](docs/Api/CloudFilesApi.md#cloudfilesdestroy) | **DELETE** /api/v2/cloud-files/{id}/ | 
*CloudFilesApi* | [**cloudFilesList**](docs/Api/CloudFilesApi.md#cloudfileslist) | **GET** /api/v2/cloud-files/ | 
*CloudFilesApi* | [**cloudFilesPartialUpdate**](docs/Api/CloudFilesApi.md#cloudfilespartialupdate) | **PATCH** /api/v2/cloud-files/{id}/ | 
*CloudFilesApi* | [**cloudFilesRetrieve**](docs/Api/CloudFilesApi.md#cloudfilesretrieve) | **GET** /api/v2/cloud-files/{id}/ | 
*CloudFilesApi* | [**cloudFilesUpdate**](docs/Api/CloudFilesApi.md#cloudfilesupdate) | **PUT** /api/v2/cloud-files/{id}/ | 
*CountriesApi* | [**countriesCreate**](docs/Api/CountriesApi.md#countriescreate) | **POST** /api/v2/countries/ | 
*CountriesApi* | [**countriesDestroy**](docs/Api/CountriesApi.md#countriesdestroy) | **DELETE** /api/v2/countries/{isocode}/ | 
*CountriesApi* | [**countriesList**](docs/Api/CountriesApi.md#countrieslist) | **GET** /api/v2/countries/ | 
*CountriesApi* | [**countriesPartialUpdate**](docs/Api/CountriesApi.md#countriespartialupdate) | **PATCH** /api/v2/countries/{isocode}/ | 
*CountriesApi* | [**countriesRetrieve**](docs/Api/CountriesApi.md#countriesretrieve) | **GET** /api/v2/countries/{isocode}/ | 
*CountriesApi* | [**countriesUpdate**](docs/Api/CountriesApi.md#countriesupdate) | **PUT** /api/v2/countries/{isocode}/ | 
*FilesApi* | [**filesCreate**](docs/Api/FilesApi.md#filescreate) | **POST** /api/v2/files/ | 
*FilesApi* | [**filesDestroy**](docs/Api/FilesApi.md#filesdestroy) | **DELETE** /api/v2/files/{id}/ | 
*FilesApi* | [**filesDownloadRetrieve**](docs/Api/FilesApi.md#filesdownloadretrieve) | **GET** /api/v2/files/{id}/download/ | 
*FilesApi* | [**filesList**](docs/Api/FilesApi.md#fileslist) | **GET** /api/v2/files/ | 
*FilesApi* | [**filesPartialUpdate**](docs/Api/FilesApi.md#filespartialupdate) | **PATCH** /api/v2/files/{id}/ | 
*FilesApi* | [**filesRetrieve**](docs/Api/FilesApi.md#filesretrieve) | **GET** /api/v2/files/{id}/ | 
*FilesApi* | [**filesUpdate**](docs/Api/FilesApi.md#filesupdate) | **PUT** /api/v2/files/{id}/ | 
*ImportedPodcastsApi* | [**importedPodcastsCreate**](docs/Api/ImportedPodcastsApi.md#importedpodcastscreate) | **POST** /api/v2/imported-podcasts/ | 
*ImportedPodcastsApi* | [**importedPodcastsDestroy**](docs/Api/ImportedPodcastsApi.md#importedpodcastsdestroy) | **DELETE** /api/v2/imported-podcasts/{id}/ | 
*ImportedPodcastsApi* | [**importedPodcastsList**](docs/Api/ImportedPodcastsApi.md#importedpodcastslist) | **GET** /api/v2/imported-podcasts/ | 
*ImportedPodcastsApi* | [**importedPodcastsPartialUpdate**](docs/Api/ImportedPodcastsApi.md#importedpodcastspartialupdate) | **PATCH** /api/v2/imported-podcasts/{id}/ | 
*ImportedPodcastsApi* | [**importedPodcastsRetrieve**](docs/Api/ImportedPodcastsApi.md#importedpodcastsretrieve) | **GET** /api/v2/imported-podcasts/{id}/ | 
*ImportedPodcastsApi* | [**importedPodcastsUpdate**](docs/Api/ImportedPodcastsApi.md#importedpodcastsupdate) | **PUT** /api/v2/imported-podcasts/{id}/ | 
*ListenerCountsApi* | [**listenerCountsCreate**](docs/Api/ListenerCountsApi.md#listenercountscreate) | **POST** /api/v2/listener-counts/ | 
*ListenerCountsApi* | [**listenerCountsDestroy**](docs/Api/ListenerCountsApi.md#listenercountsdestroy) | **DELETE** /api/v2/listener-counts/{id}/ | 
*ListenerCountsApi* | [**listenerCountsList**](docs/Api/ListenerCountsApi.md#listenercountslist) | **GET** /api/v2/listener-counts/ | 
*ListenerCountsApi* | [**listenerCountsPartialUpdate**](docs/Api/ListenerCountsApi.md#listenercountspartialupdate) | **PATCH** /api/v2/listener-counts/{id}/ | 
*ListenerCountsApi* | [**listenerCountsRetrieve**](docs/Api/ListenerCountsApi.md#listenercountsretrieve) | **GET** /api/v2/listener-counts/{id}/ | 
*ListenerCountsApi* | [**listenerCountsUpdate**](docs/Api/ListenerCountsApi.md#listenercountsupdate) | **PUT** /api/v2/listener-counts/{id}/ | 
*LiveLogsApi* | [**liveLogsCreate**](docs/Api/LiveLogsApi.md#livelogscreate) | **POST** /api/v2/live-logs/ | 
*LiveLogsApi* | [**liveLogsDestroy**](docs/Api/LiveLogsApi.md#livelogsdestroy) | **DELETE** /api/v2/live-logs/{id}/ | 
*LiveLogsApi* | [**liveLogsList**](docs/Api/LiveLogsApi.md#livelogslist) | **GET** /api/v2/live-logs/ | 
*LiveLogsApi* | [**liveLogsPartialUpdate**](docs/Api/LiveLogsApi.md#livelogspartialupdate) | **PATCH** /api/v2/live-logs/{id}/ | 
*LiveLogsApi* | [**liveLogsRetrieve**](docs/Api/LiveLogsApi.md#livelogsretrieve) | **GET** /api/v2/live-logs/{id}/ | 
*LiveLogsApi* | [**liveLogsUpdate**](docs/Api/LiveLogsApi.md#livelogsupdate) | **PUT** /api/v2/live-logs/{id}/ | 
*LoginAttemptsApi* | [**loginAttemptsCreate**](docs/Api/LoginAttemptsApi.md#loginattemptscreate) | **POST** /api/v2/login-attempts/ | 
*LoginAttemptsApi* | [**loginAttemptsDestroy**](docs/Api/LoginAttemptsApi.md#loginattemptsdestroy) | **DELETE** /api/v2/login-attempts/{ip}/ | 
*LoginAttemptsApi* | [**loginAttemptsList**](docs/Api/LoginAttemptsApi.md#loginattemptslist) | **GET** /api/v2/login-attempts/ | 
*LoginAttemptsApi* | [**loginAttemptsPartialUpdate**](docs/Api/LoginAttemptsApi.md#loginattemptspartialupdate) | **PATCH** /api/v2/login-attempts/{ip}/ | 
*LoginAttemptsApi* | [**loginAttemptsRetrieve**](docs/Api/LoginAttemptsApi.md#loginattemptsretrieve) | **GET** /api/v2/login-attempts/{ip}/ | 
*LoginAttemptsApi* | [**loginAttemptsUpdate**](docs/Api/LoginAttemptsApi.md#loginattemptsupdate) | **PUT** /api/v2/login-attempts/{ip}/ | 
*MountNamesApi* | [**mountNamesCreate**](docs/Api/MountNamesApi.md#mountnamescreate) | **POST** /api/v2/mount-names/ | 
*MountNamesApi* | [**mountNamesDestroy**](docs/Api/MountNamesApi.md#mountnamesdestroy) | **DELETE** /api/v2/mount-names/{id}/ | 
*MountNamesApi* | [**mountNamesList**](docs/Api/MountNamesApi.md#mountnameslist) | **GET** /api/v2/mount-names/ | 
*MountNamesApi* | [**mountNamesPartialUpdate**](docs/Api/MountNamesApi.md#mountnamespartialupdate) | **PATCH** /api/v2/mount-names/{id}/ | 
*MountNamesApi* | [**mountNamesRetrieve**](docs/Api/MountNamesApi.md#mountnamesretrieve) | **GET** /api/v2/mount-names/{id}/ | 
*MountNamesApi* | [**mountNamesUpdate**](docs/Api/MountNamesApi.md#mountnamesupdate) | **PUT** /api/v2/mount-names/{id}/ | 
*PlaylistContentsApi* | [**playlistContentsCreate**](docs/Api/PlaylistContentsApi.md#playlistcontentscreate) | **POST** /api/v2/playlist-contents/ | 
*PlaylistContentsApi* | [**playlistContentsDestroy**](docs/Api/PlaylistContentsApi.md#playlistcontentsdestroy) | **DELETE** /api/v2/playlist-contents/{id}/ | 
*PlaylistContentsApi* | [**playlistContentsList**](docs/Api/PlaylistContentsApi.md#playlistcontentslist) | **GET** /api/v2/playlist-contents/ | 
*PlaylistContentsApi* | [**playlistContentsPartialUpdate**](docs/Api/PlaylistContentsApi.md#playlistcontentspartialupdate) | **PATCH** /api/v2/playlist-contents/{id}/ | 
*PlaylistContentsApi* | [**playlistContentsRetrieve**](docs/Api/PlaylistContentsApi.md#playlistcontentsretrieve) | **GET** /api/v2/playlist-contents/{id}/ | 
*PlaylistContentsApi* | [**playlistContentsUpdate**](docs/Api/PlaylistContentsApi.md#playlistcontentsupdate) | **PUT** /api/v2/playlist-contents/{id}/ | 
*PlaylistsApi* | [**playlistsCreate**](docs/Api/PlaylistsApi.md#playlistscreate) | **POST** /api/v2/playlists/ | 
*PlaylistsApi* | [**playlistsDestroy**](docs/Api/PlaylistsApi.md#playlistsdestroy) | **DELETE** /api/v2/playlists/{id}/ | 
*PlaylistsApi* | [**playlistsList**](docs/Api/PlaylistsApi.md#playlistslist) | **GET** /api/v2/playlists/ | 
*PlaylistsApi* | [**playlistsPartialUpdate**](docs/Api/PlaylistsApi.md#playlistspartialupdate) | **PATCH** /api/v2/playlists/{id}/ | 
*PlaylistsApi* | [**playlistsRetrieve**](docs/Api/PlaylistsApi.md#playlistsretrieve) | **GET** /api/v2/playlists/{id}/ | 
*PlaylistsApi* | [**playlistsUpdate**](docs/Api/PlaylistsApi.md#playlistsupdate) | **PUT** /api/v2/playlists/{id}/ | 
*PlayoutHistoryApi* | [**playoutHistoryCreate**](docs/Api/PlayoutHistoryApi.md#playouthistorycreate) | **POST** /api/v2/playout-history/ | 
*PlayoutHistoryApi* | [**playoutHistoryDestroy**](docs/Api/PlayoutHistoryApi.md#playouthistorydestroy) | **DELETE** /api/v2/playout-history/{id}/ | 
*PlayoutHistoryApi* | [**playoutHistoryList**](docs/Api/PlayoutHistoryApi.md#playouthistorylist) | **GET** /api/v2/playout-history/ | 
*PlayoutHistoryApi* | [**playoutHistoryPartialUpdate**](docs/Api/PlayoutHistoryApi.md#playouthistorypartialupdate) | **PATCH** /api/v2/playout-history/{id}/ | 
*PlayoutHistoryApi* | [**playoutHistoryRetrieve**](docs/Api/PlayoutHistoryApi.md#playouthistoryretrieve) | **GET** /api/v2/playout-history/{id}/ | 
*PlayoutHistoryApi* | [**playoutHistoryUpdate**](docs/Api/PlayoutHistoryApi.md#playouthistoryupdate) | **PUT** /api/v2/playout-history/{id}/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataCreate**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadatacreate) | **POST** /api/v2/playout-history-metadata/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataDestroy**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadatadestroy) | **DELETE** /api/v2/playout-history-metadata/{id}/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataList**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadatalist) | **GET** /api/v2/playout-history-metadata/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataPartialUpdate**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadatapartialupdate) | **PATCH** /api/v2/playout-history-metadata/{id}/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataRetrieve**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadataretrieve) | **GET** /api/v2/playout-history-metadata/{id}/ | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataUpdate**](docs/Api/PlayoutHistoryMetadataApi.md#playouthistorymetadataupdate) | **PUT** /api/v2/playout-history-metadata/{id}/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsCreate**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldscreate) | **POST** /api/v2/playout-history-template-fields/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsDestroy**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsdestroy) | **DELETE** /api/v2/playout-history-template-fields/{id}/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsList**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldslist) | **GET** /api/v2/playout-history-template-fields/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsPartialUpdate**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldspartialupdate) | **PATCH** /api/v2/playout-history-template-fields/{id}/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsRetrieve**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsretrieve) | **GET** /api/v2/playout-history-template-fields/{id}/ | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsUpdate**](docs/Api/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsupdate) | **PUT** /api/v2/playout-history-template-fields/{id}/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesCreate**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplatescreate) | **POST** /api/v2/playout-history-templates/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesDestroy**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesdestroy) | **DELETE** /api/v2/playout-history-templates/{id}/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesList**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplateslist) | **GET** /api/v2/playout-history-templates/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesPartialUpdate**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplatespartialupdate) | **PATCH** /api/v2/playout-history-templates/{id}/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesRetrieve**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesretrieve) | **GET** /api/v2/playout-history-templates/{id}/ | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesUpdate**](docs/Api/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesupdate) | **PUT** /api/v2/playout-history-templates/{id}/ | 
*PodcastEpisodesApi* | [**podcastEpisodesCreate**](docs/Api/PodcastEpisodesApi.md#podcastepisodescreate) | **POST** /api/v2/podcast-episodes/ | 
*PodcastEpisodesApi* | [**podcastEpisodesDestroy**](docs/Api/PodcastEpisodesApi.md#podcastepisodesdestroy) | **DELETE** /api/v2/podcast-episodes/{id}/ | 
*PodcastEpisodesApi* | [**podcastEpisodesList**](docs/Api/PodcastEpisodesApi.md#podcastepisodeslist) | **GET** /api/v2/podcast-episodes/ | 
*PodcastEpisodesApi* | [**podcastEpisodesPartialUpdate**](docs/Api/PodcastEpisodesApi.md#podcastepisodespartialupdate) | **PATCH** /api/v2/podcast-episodes/{id}/ | 
*PodcastEpisodesApi* | [**podcastEpisodesRetrieve**](docs/Api/PodcastEpisodesApi.md#podcastepisodesretrieve) | **GET** /api/v2/podcast-episodes/{id}/ | 
*PodcastEpisodesApi* | [**podcastEpisodesUpdate**](docs/Api/PodcastEpisodesApi.md#podcastepisodesupdate) | **PUT** /api/v2/podcast-episodes/{id}/ | 
*PodcastsApi* | [**podcastsCreate**](docs/Api/PodcastsApi.md#podcastscreate) | **POST** /api/v2/podcasts/ | 
*PodcastsApi* | [**podcastsDestroy**](docs/Api/PodcastsApi.md#podcastsdestroy) | **DELETE** /api/v2/podcasts/{id}/ | 
*PodcastsApi* | [**podcastsList**](docs/Api/PodcastsApi.md#podcastslist) | **GET** /api/v2/podcasts/ | 
*PodcastsApi* | [**podcastsPartialUpdate**](docs/Api/PodcastsApi.md#podcastspartialupdate) | **PATCH** /api/v2/podcasts/{id}/ | 
*PodcastsApi* | [**podcastsRetrieve**](docs/Api/PodcastsApi.md#podcastsretrieve) | **GET** /api/v2/podcasts/{id}/ | 
*PodcastsApi* | [**podcastsUpdate**](docs/Api/PodcastsApi.md#podcastsupdate) | **PUT** /api/v2/podcasts/{id}/ | 
*PreferencesApi* | [**preferencesCreate**](docs/Api/PreferencesApi.md#preferencescreate) | **POST** /api/v2/preferences/ | 
*PreferencesApi* | [**preferencesDestroy**](docs/Api/PreferencesApi.md#preferencesdestroy) | **DELETE** /api/v2/preferences/{id}/ | 
*PreferencesApi* | [**preferencesList**](docs/Api/PreferencesApi.md#preferenceslist) | **GET** /api/v2/preferences/ | 
*PreferencesApi* | [**preferencesPartialUpdate**](docs/Api/PreferencesApi.md#preferencespartialupdate) | **PATCH** /api/v2/preferences/{id}/ | 
*PreferencesApi* | [**preferencesRetrieve**](docs/Api/PreferencesApi.md#preferencesretrieve) | **GET** /api/v2/preferences/{id}/ | 
*PreferencesApi* | [**preferencesUpdate**](docs/Api/PreferencesApi.md#preferencesupdate) | **PUT** /api/v2/preferences/{id}/ | 
*ScheduleApi* | [**scheduleCreate**](docs/Api/ScheduleApi.md#schedulecreate) | **POST** /api/v2/schedule/ | 
*ScheduleApi* | [**scheduleDestroy**](docs/Api/ScheduleApi.md#scheduledestroy) | **DELETE** /api/v2/schedule/{id}/ | 
*ScheduleApi* | [**scheduleList**](docs/Api/ScheduleApi.md#schedulelist) | **GET** /api/v2/schedule/ | 
*ScheduleApi* | [**schedulePartialUpdate**](docs/Api/ScheduleApi.md#schedulepartialupdate) | **PATCH** /api/v2/schedule/{id}/ | 
*ScheduleApi* | [**scheduleRetrieve**](docs/Api/ScheduleApi.md#scheduleretrieve) | **GET** /api/v2/schedule/{id}/ | 
*ScheduleApi* | [**scheduleUpdate**](docs/Api/ScheduleApi.md#scheduleupdate) | **PUT** /api/v2/schedule/{id}/ | 
*SchemaApi* | [**schemaRetrieve**](docs/Api/SchemaApi.md#schemaretrieve) | **GET** /api/v2/schema/ | 
*ServiceRegistersApi* | [**serviceRegistersCreate**](docs/Api/ServiceRegistersApi.md#serviceregisterscreate) | **POST** /api/v2/service-registers/ | 
*ServiceRegistersApi* | [**serviceRegistersDestroy**](docs/Api/ServiceRegistersApi.md#serviceregistersdestroy) | **DELETE** /api/v2/service-registers/{name}/ | 
*ServiceRegistersApi* | [**serviceRegistersList**](docs/Api/ServiceRegistersApi.md#serviceregisterslist) | **GET** /api/v2/service-registers/ | 
*ServiceRegistersApi* | [**serviceRegistersPartialUpdate**](docs/Api/ServiceRegistersApi.md#serviceregisterspartialupdate) | **PATCH** /api/v2/service-registers/{name}/ | 
*ServiceRegistersApi* | [**serviceRegistersRetrieve**](docs/Api/ServiceRegistersApi.md#serviceregistersretrieve) | **GET** /api/v2/service-registers/{name}/ | 
*ServiceRegistersApi* | [**serviceRegistersUpdate**](docs/Api/ServiceRegistersApi.md#serviceregistersupdate) | **PUT** /api/v2/service-registers/{name}/ | 
*SessionsApi* | [**sessionsCreate**](docs/Api/SessionsApi.md#sessionscreate) | **POST** /api/v2/sessions/ | 
*SessionsApi* | [**sessionsDestroy**](docs/Api/SessionsApi.md#sessionsdestroy) | **DELETE** /api/v2/sessions/{sessid}/ | 
*SessionsApi* | [**sessionsList**](docs/Api/SessionsApi.md#sessionslist) | **GET** /api/v2/sessions/ | 
*SessionsApi* | [**sessionsPartialUpdate**](docs/Api/SessionsApi.md#sessionspartialupdate) | **PATCH** /api/v2/sessions/{sessid}/ | 
*SessionsApi* | [**sessionsRetrieve**](docs/Api/SessionsApi.md#sessionsretrieve) | **GET** /api/v2/sessions/{sessid}/ | 
*SessionsApi* | [**sessionsUpdate**](docs/Api/SessionsApi.md#sessionsupdate) | **PUT** /api/v2/sessions/{sessid}/ | 
*ShowDaysApi* | [**showDaysCreate**](docs/Api/ShowDaysApi.md#showdayscreate) | **POST** /api/v2/show-days/ | 
*ShowDaysApi* | [**showDaysDestroy**](docs/Api/ShowDaysApi.md#showdaysdestroy) | **DELETE** /api/v2/show-days/{id}/ | 
*ShowDaysApi* | [**showDaysList**](docs/Api/ShowDaysApi.md#showdayslist) | **GET** /api/v2/show-days/ | 
*ShowDaysApi* | [**showDaysPartialUpdate**](docs/Api/ShowDaysApi.md#showdayspartialupdate) | **PATCH** /api/v2/show-days/{id}/ | 
*ShowDaysApi* | [**showDaysRetrieve**](docs/Api/ShowDaysApi.md#showdaysretrieve) | **GET** /api/v2/show-days/{id}/ | 
*ShowDaysApi* | [**showDaysUpdate**](docs/Api/ShowDaysApi.md#showdaysupdate) | **PUT** /api/v2/show-days/{id}/ | 
*ShowHostsApi* | [**showHostsCreate**](docs/Api/ShowHostsApi.md#showhostscreate) | **POST** /api/v2/show-hosts/ | 
*ShowHostsApi* | [**showHostsDestroy**](docs/Api/ShowHostsApi.md#showhostsdestroy) | **DELETE** /api/v2/show-hosts/{id}/ | 
*ShowHostsApi* | [**showHostsList**](docs/Api/ShowHostsApi.md#showhostslist) | **GET** /api/v2/show-hosts/ | 
*ShowHostsApi* | [**showHostsPartialUpdate**](docs/Api/ShowHostsApi.md#showhostspartialupdate) | **PATCH** /api/v2/show-hosts/{id}/ | 
*ShowHostsApi* | [**showHostsRetrieve**](docs/Api/ShowHostsApi.md#showhostsretrieve) | **GET** /api/v2/show-hosts/{id}/ | 
*ShowHostsApi* | [**showHostsUpdate**](docs/Api/ShowHostsApi.md#showhostsupdate) | **PUT** /api/v2/show-hosts/{id}/ | 
*ShowInstancesApi* | [**showInstancesCreate**](docs/Api/ShowInstancesApi.md#showinstancescreate) | **POST** /api/v2/show-instances/ | 
*ShowInstancesApi* | [**showInstancesDestroy**](docs/Api/ShowInstancesApi.md#showinstancesdestroy) | **DELETE** /api/v2/show-instances/{id}/ | 
*ShowInstancesApi* | [**showInstancesList**](docs/Api/ShowInstancesApi.md#showinstanceslist) | **GET** /api/v2/show-instances/ | 
*ShowInstancesApi* | [**showInstancesPartialUpdate**](docs/Api/ShowInstancesApi.md#showinstancespartialupdate) | **PATCH** /api/v2/show-instances/{id}/ | 
*ShowInstancesApi* | [**showInstancesRetrieve**](docs/Api/ShowInstancesApi.md#showinstancesretrieve) | **GET** /api/v2/show-instances/{id}/ | 
*ShowInstancesApi* | [**showInstancesUpdate**](docs/Api/ShowInstancesApi.md#showinstancesupdate) | **PUT** /api/v2/show-instances/{id}/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsCreate**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastscreate) | **POST** /api/v2/show-rebroadcasts/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsDestroy**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastsdestroy) | **DELETE** /api/v2/show-rebroadcasts/{id}/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsList**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastslist) | **GET** /api/v2/show-rebroadcasts/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsPartialUpdate**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastspartialupdate) | **PATCH** /api/v2/show-rebroadcasts/{id}/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsRetrieve**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastsretrieve) | **GET** /api/v2/show-rebroadcasts/{id}/ | 
*ShowRebroadcastsApi* | [**showRebroadcastsUpdate**](docs/Api/ShowRebroadcastsApi.md#showrebroadcastsupdate) | **PUT** /api/v2/show-rebroadcasts/{id}/ | 
*ShowsApi* | [**showsCreate**](docs/Api/ShowsApi.md#showscreate) | **POST** /api/v2/shows/ | 
*ShowsApi* | [**showsDestroy**](docs/Api/ShowsApi.md#showsdestroy) | **DELETE** /api/v2/shows/{id}/ | 
*ShowsApi* | [**showsList**](docs/Api/ShowsApi.md#showslist) | **GET** /api/v2/shows/ | 
*ShowsApi* | [**showsPartialUpdate**](docs/Api/ShowsApi.md#showspartialupdate) | **PATCH** /api/v2/shows/{id}/ | 
*ShowsApi* | [**showsRetrieve**](docs/Api/ShowsApi.md#showsretrieve) | **GET** /api/v2/shows/{id}/ | 
*ShowsApi* | [**showsUpdate**](docs/Api/ShowsApi.md#showsupdate) | **PUT** /api/v2/shows/{id}/ | 
*SmartBlockContentsApi* | [**smartBlockContentsCreate**](docs/Api/SmartBlockContentsApi.md#smartblockcontentscreate) | **POST** /api/v2/smart-block-contents/ | 
*SmartBlockContentsApi* | [**smartBlockContentsDestroy**](docs/Api/SmartBlockContentsApi.md#smartblockcontentsdestroy) | **DELETE** /api/v2/smart-block-contents/{id}/ | 
*SmartBlockContentsApi* | [**smartBlockContentsList**](docs/Api/SmartBlockContentsApi.md#smartblockcontentslist) | **GET** /api/v2/smart-block-contents/ | 
*SmartBlockContentsApi* | [**smartBlockContentsPartialUpdate**](docs/Api/SmartBlockContentsApi.md#smartblockcontentspartialupdate) | **PATCH** /api/v2/smart-block-contents/{id}/ | 
*SmartBlockContentsApi* | [**smartBlockContentsRetrieve**](docs/Api/SmartBlockContentsApi.md#smartblockcontentsretrieve) | **GET** /api/v2/smart-block-contents/{id}/ | 
*SmartBlockContentsApi* | [**smartBlockContentsUpdate**](docs/Api/SmartBlockContentsApi.md#smartblockcontentsupdate) | **PUT** /api/v2/smart-block-contents/{id}/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaCreate**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriteriacreate) | **POST** /api/v2/smart-block-criteria/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaDestroy**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriteriadestroy) | **DELETE** /api/v2/smart-block-criteria/{id}/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaList**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriterialist) | **GET** /api/v2/smart-block-criteria/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaPartialUpdate**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriteriapartialupdate) | **PATCH** /api/v2/smart-block-criteria/{id}/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaRetrieve**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriteriaretrieve) | **GET** /api/v2/smart-block-criteria/{id}/ | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaUpdate**](docs/Api/SmartBlockCriteriaApi.md#smartblockcriteriaupdate) | **PUT** /api/v2/smart-block-criteria/{id}/ | 
*SmartBlocksApi* | [**smartBlocksCreate**](docs/Api/SmartBlocksApi.md#smartblockscreate) | **POST** /api/v2/smart-blocks/ | 
*SmartBlocksApi* | [**smartBlocksDestroy**](docs/Api/SmartBlocksApi.md#smartblocksdestroy) | **DELETE** /api/v2/smart-blocks/{id}/ | 
*SmartBlocksApi* | [**smartBlocksList**](docs/Api/SmartBlocksApi.md#smartblockslist) | **GET** /api/v2/smart-blocks/ | 
*SmartBlocksApi* | [**smartBlocksPartialUpdate**](docs/Api/SmartBlocksApi.md#smartblockspartialupdate) | **PATCH** /api/v2/smart-blocks/{id}/ | 
*SmartBlocksApi* | [**smartBlocksRetrieve**](docs/Api/SmartBlocksApi.md#smartblocksretrieve) | **GET** /api/v2/smart-blocks/{id}/ | 
*SmartBlocksApi* | [**smartBlocksUpdate**](docs/Api/SmartBlocksApi.md#smartblocksupdate) | **PUT** /api/v2/smart-blocks/{id}/ | 
*StationPodcastsApi* | [**stationPodcastsCreate**](docs/Api/StationPodcastsApi.md#stationpodcastscreate) | **POST** /api/v2/station-podcasts/ | 
*StationPodcastsApi* | [**stationPodcastsDestroy**](docs/Api/StationPodcastsApi.md#stationpodcastsdestroy) | **DELETE** /api/v2/station-podcasts/{id}/ | 
*StationPodcastsApi* | [**stationPodcastsList**](docs/Api/StationPodcastsApi.md#stationpodcastslist) | **GET** /api/v2/station-podcasts/ | 
*StationPodcastsApi* | [**stationPodcastsPartialUpdate**](docs/Api/StationPodcastsApi.md#stationpodcastspartialupdate) | **PATCH** /api/v2/station-podcasts/{id}/ | 
*StationPodcastsApi* | [**stationPodcastsRetrieve**](docs/Api/StationPodcastsApi.md#stationpodcastsretrieve) | **GET** /api/v2/station-podcasts/{id}/ | 
*StationPodcastsApi* | [**stationPodcastsUpdate**](docs/Api/StationPodcastsApi.md#stationpodcastsupdate) | **PUT** /api/v2/station-podcasts/{id}/ | 
*StreamSettingsApi* | [**streamSettingsCreate**](docs/Api/StreamSettingsApi.md#streamsettingscreate) | **POST** /api/v2/stream-settings/ | 
*StreamSettingsApi* | [**streamSettingsDestroy**](docs/Api/StreamSettingsApi.md#streamsettingsdestroy) | **DELETE** /api/v2/stream-settings/{key}/ | 
*StreamSettingsApi* | [**streamSettingsList**](docs/Api/StreamSettingsApi.md#streamsettingslist) | **GET** /api/v2/stream-settings/ | 
*StreamSettingsApi* | [**streamSettingsPartialUpdate**](docs/Api/StreamSettingsApi.md#streamsettingspartialupdate) | **PATCH** /api/v2/stream-settings/{key}/ | 
*StreamSettingsApi* | [**streamSettingsRetrieve**](docs/Api/StreamSettingsApi.md#streamsettingsretrieve) | **GET** /api/v2/stream-settings/{key}/ | 
*StreamSettingsApi* | [**streamSettingsUpdate**](docs/Api/StreamSettingsApi.md#streamsettingsupdate) | **PUT** /api/v2/stream-settings/{key}/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesCreate**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencescreate) | **POST** /api/v2/third-party-track-references/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesDestroy**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesdestroy) | **DELETE** /api/v2/third-party-track-references/{id}/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesList**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferenceslist) | **GET** /api/v2/third-party-track-references/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesPartialUpdate**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencespartialupdate) | **PATCH** /api/v2/third-party-track-references/{id}/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesRetrieve**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesretrieve) | **GET** /api/v2/third-party-track-references/{id}/ | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesUpdate**](docs/Api/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesupdate) | **PUT** /api/v2/third-party-track-references/{id}/ | 
*TimestampsApi* | [**timestampsCreate**](docs/Api/TimestampsApi.md#timestampscreate) | **POST** /api/v2/timestamps/ | 
*TimestampsApi* | [**timestampsDestroy**](docs/Api/TimestampsApi.md#timestampsdestroy) | **DELETE** /api/v2/timestamps/{id}/ | 
*TimestampsApi* | [**timestampsList**](docs/Api/TimestampsApi.md#timestampslist) | **GET** /api/v2/timestamps/ | 
*TimestampsApi* | [**timestampsPartialUpdate**](docs/Api/TimestampsApi.md#timestampspartialupdate) | **PATCH** /api/v2/timestamps/{id}/ | 
*TimestampsApi* | [**timestampsRetrieve**](docs/Api/TimestampsApi.md#timestampsretrieve) | **GET** /api/v2/timestamps/{id}/ | 
*TimestampsApi* | [**timestampsUpdate**](docs/Api/TimestampsApi.md#timestampsupdate) | **PUT** /api/v2/timestamps/{id}/ | 
*TrackTypesApi* | [**trackTypesCreate**](docs/Api/TrackTypesApi.md#tracktypescreate) | **POST** /api/v2/track-types/ | 
*TrackTypesApi* | [**trackTypesDestroy**](docs/Api/TrackTypesApi.md#tracktypesdestroy) | **DELETE** /api/v2/track-types/{id}/ | 
*TrackTypesApi* | [**trackTypesList**](docs/Api/TrackTypesApi.md#tracktypeslist) | **GET** /api/v2/track-types/ | 
*TrackTypesApi* | [**trackTypesPartialUpdate**](docs/Api/TrackTypesApi.md#tracktypespartialupdate) | **PATCH** /api/v2/track-types/{id}/ | 
*TrackTypesApi* | [**trackTypesRetrieve**](docs/Api/TrackTypesApi.md#tracktypesretrieve) | **GET** /api/v2/track-types/{id}/ | 
*TrackTypesApi* | [**trackTypesUpdate**](docs/Api/TrackTypesApi.md#tracktypesupdate) | **PUT** /api/v2/track-types/{id}/ | 
*UserTokensApi* | [**userTokensCreate**](docs/Api/UserTokensApi.md#usertokenscreate) | **POST** /api/v2/user-tokens/ | 
*UserTokensApi* | [**userTokensDestroy**](docs/Api/UserTokensApi.md#usertokensdestroy) | **DELETE** /api/v2/user-tokens/{id}/ | 
*UserTokensApi* | [**userTokensList**](docs/Api/UserTokensApi.md#usertokenslist) | **GET** /api/v2/user-tokens/ | 
*UserTokensApi* | [**userTokensPartialUpdate**](docs/Api/UserTokensApi.md#usertokenspartialupdate) | **PATCH** /api/v2/user-tokens/{id}/ | 
*UserTokensApi* | [**userTokensRetrieve**](docs/Api/UserTokensApi.md#usertokensretrieve) | **GET** /api/v2/user-tokens/{id}/ | 
*UserTokensApi* | [**userTokensUpdate**](docs/Api/UserTokensApi.md#usertokensupdate) | **PUT** /api/v2/user-tokens/{id}/ | 
*UsersApi* | [**usersCreate**](docs/Api/UsersApi.md#userscreate) | **POST** /api/v2/users/ | 
*UsersApi* | [**usersDestroy**](docs/Api/UsersApi.md#usersdestroy) | **DELETE** /api/v2/users/{id}/ | 
*UsersApi* | [**usersList**](docs/Api/UsersApi.md#userslist) | **GET** /api/v2/users/ | 
*UsersApi* | [**usersPartialUpdate**](docs/Api/UsersApi.md#userspartialupdate) | **PATCH** /api/v2/users/{id}/ | 
*UsersApi* | [**usersRetrieve**](docs/Api/UsersApi.md#usersretrieve) | **GET** /api/v2/users/{id}/ | 
*UsersApi* | [**usersUpdate**](docs/Api/UsersApi.md#usersupdate) | **PUT** /api/v2/users/{id}/ | 
*VersionApi* | [**versionRetrieve**](docs/Api/VersionApi.md#versionretrieve) | **GET** /api/v2/version/ | 
*WebstreamMetadataApi* | [**webstreamMetadataCreate**](docs/Api/WebstreamMetadataApi.md#webstreammetadatacreate) | **POST** /api/v2/webstream-metadata/ | 
*WebstreamMetadataApi* | [**webstreamMetadataDestroy**](docs/Api/WebstreamMetadataApi.md#webstreammetadatadestroy) | **DELETE** /api/v2/webstream-metadata/{id}/ | 
*WebstreamMetadataApi* | [**webstreamMetadataList**](docs/Api/WebstreamMetadataApi.md#webstreammetadatalist) | **GET** /api/v2/webstream-metadata/ | 
*WebstreamMetadataApi* | [**webstreamMetadataPartialUpdate**](docs/Api/WebstreamMetadataApi.md#webstreammetadatapartialupdate) | **PATCH** /api/v2/webstream-metadata/{id}/ | 
*WebstreamMetadataApi* | [**webstreamMetadataRetrieve**](docs/Api/WebstreamMetadataApi.md#webstreammetadataretrieve) | **GET** /api/v2/webstream-metadata/{id}/ | 
*WebstreamMetadataApi* | [**webstreamMetadataUpdate**](docs/Api/WebstreamMetadataApi.md#webstreammetadataupdate) | **PUT** /api/v2/webstream-metadata/{id}/ | 
*WebstreamsApi* | [**webstreamsCreate**](docs/Api/WebstreamsApi.md#webstreamscreate) | **POST** /api/v2/webstreams/ | 
*WebstreamsApi* | [**webstreamsDestroy**](docs/Api/WebstreamsApi.md#webstreamsdestroy) | **DELETE** /api/v2/webstreams/{id}/ | 
*WebstreamsApi* | [**webstreamsList**](docs/Api/WebstreamsApi.md#webstreamslist) | **GET** /api/v2/webstreams/ | 
*WebstreamsApi* | [**webstreamsPartialUpdate**](docs/Api/WebstreamsApi.md#webstreamspartialupdate) | **PATCH** /api/v2/webstreams/{id}/ | 
*WebstreamsApi* | [**webstreamsRetrieve**](docs/Api/WebstreamsApi.md#webstreamsretrieve) | **GET** /api/v2/webstreams/{id}/ | 
*WebstreamsApi* | [**webstreamsUpdate**](docs/Api/WebstreamsApi.md#webstreamsupdate) | **PUT** /api/v2/webstreams/{id}/ | 

## Models

- [CeleryTask](docs/Model/CeleryTask.md)
- [CloudFile](docs/Model/CloudFile.md)
- [Country](docs/Model/Country.md)
- [File](docs/Model/File.md)
- [ImportedPodcast](docs/Model/ImportedPodcast.md)
- [ListenerCount](docs/Model/ListenerCount.md)
- [LiveLog](docs/Model/LiveLog.md)
- [LoginAttempt](docs/Model/LoginAttempt.md)
- [MountName](docs/Model/MountName.md)
- [PatchedCeleryTask](docs/Model/PatchedCeleryTask.md)
- [PatchedCloudFile](docs/Model/PatchedCloudFile.md)
- [PatchedCountry](docs/Model/PatchedCountry.md)
- [PatchedFile](docs/Model/PatchedFile.md)
- [PatchedImportedPodcast](docs/Model/PatchedImportedPodcast.md)
- [PatchedListenerCount](docs/Model/PatchedListenerCount.md)
- [PatchedLiveLog](docs/Model/PatchedLiveLog.md)
- [PatchedLoginAttempt](docs/Model/PatchedLoginAttempt.md)
- [PatchedMountName](docs/Model/PatchedMountName.md)
- [PatchedPlaylist](docs/Model/PatchedPlaylist.md)
- [PatchedPlaylistContent](docs/Model/PatchedPlaylistContent.md)
- [PatchedPlayoutHistory](docs/Model/PatchedPlayoutHistory.md)
- [PatchedPlayoutHistoryMetadata](docs/Model/PatchedPlayoutHistoryMetadata.md)
- [PatchedPlayoutHistoryTemplate](docs/Model/PatchedPlayoutHistoryTemplate.md)
- [PatchedPlayoutHistoryTemplateField](docs/Model/PatchedPlayoutHistoryTemplateField.md)
- [PatchedPodcast](docs/Model/PatchedPodcast.md)
- [PatchedPodcastEpisode](docs/Model/PatchedPodcastEpisode.md)
- [PatchedPreference](docs/Model/PatchedPreference.md)
- [PatchedSchedule](docs/Model/PatchedSchedule.md)
- [PatchedServiceRegister](docs/Model/PatchedServiceRegister.md)
- [PatchedSession](docs/Model/PatchedSession.md)
- [PatchedShow](docs/Model/PatchedShow.md)
- [PatchedShowDays](docs/Model/PatchedShowDays.md)
- [PatchedShowHost](docs/Model/PatchedShowHost.md)
- [PatchedShowInstance](docs/Model/PatchedShowInstance.md)
- [PatchedShowRebroadcast](docs/Model/PatchedShowRebroadcast.md)
- [PatchedSmartBlock](docs/Model/PatchedSmartBlock.md)
- [PatchedSmartBlockContent](docs/Model/PatchedSmartBlockContent.md)
- [PatchedSmartBlockCriteria](docs/Model/PatchedSmartBlockCriteria.md)
- [PatchedStationPodcast](docs/Model/PatchedStationPodcast.md)
- [PatchedStreamSetting](docs/Model/PatchedStreamSetting.md)
- [PatchedThirdPartyTrackReference](docs/Model/PatchedThirdPartyTrackReference.md)
- [PatchedTimestamp](docs/Model/PatchedTimestamp.md)
- [PatchedTrackType](docs/Model/PatchedTrackType.md)
- [PatchedUser](docs/Model/PatchedUser.md)
- [PatchedUserToken](docs/Model/PatchedUserToken.md)
- [PatchedWebstream](docs/Model/PatchedWebstream.md)
- [PatchedWebstreamMetadata](docs/Model/PatchedWebstreamMetadata.md)
- [Playlist](docs/Model/Playlist.md)
- [PlaylistContent](docs/Model/PlaylistContent.md)
- [PlayoutHistory](docs/Model/PlayoutHistory.md)
- [PlayoutHistoryMetadata](docs/Model/PlayoutHistoryMetadata.md)
- [PlayoutHistoryTemplate](docs/Model/PlayoutHistoryTemplate.md)
- [PlayoutHistoryTemplateField](docs/Model/PlayoutHistoryTemplateField.md)
- [Podcast](docs/Model/Podcast.md)
- [PodcastEpisode](docs/Model/PodcastEpisode.md)
- [Preference](docs/Model/Preference.md)
- [Schedule](docs/Model/Schedule.md)
- [ServiceRegister](docs/Model/ServiceRegister.md)
- [Session](docs/Model/Session.md)
- [Show](docs/Model/Show.md)
- [ShowDays](docs/Model/ShowDays.md)
- [ShowHost](docs/Model/ShowHost.md)
- [ShowInstance](docs/Model/ShowInstance.md)
- [ShowRebroadcast](docs/Model/ShowRebroadcast.md)
- [SmartBlock](docs/Model/SmartBlock.md)
- [SmartBlockContent](docs/Model/SmartBlockContent.md)
- [SmartBlockCriteria](docs/Model/SmartBlockCriteria.md)
- [StationPodcast](docs/Model/StationPodcast.md)
- [StreamSetting](docs/Model/StreamSetting.md)
- [ThirdPartyTrackReference](docs/Model/ThirdPartyTrackReference.md)
- [Timestamp](docs/Model/Timestamp.md)
- [TrackType](docs/Model/TrackType.md)
- [TypeEnum](docs/Model/TypeEnum.md)
- [User](docs/Model/User.md)
- [UserToken](docs/Model/UserToken.md)
- [Webstream](docs/Model/Webstream.md)
- [WebstreamMetadata](docs/Model/WebstreamMetadata.md)

## Authorization

### basicAuth

- **Type**: HTTP basic authentication


### cookieAuth

- **Type**: API key
- **API key parameter name**: sessionid
- **Location**: 


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
