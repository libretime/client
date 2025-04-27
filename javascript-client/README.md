## libretime-client@2.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install libretime-client@2.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CeleryTasksApi* | [**celeryTasksCreate**](docs/CeleryTasksApi.md#celerytaskscreate) | **POST** /api/v2/celery-tasks | 
*CeleryTasksApi* | [**celeryTasksDestroy**](docs/CeleryTasksApi.md#celerytasksdestroy) | **DELETE** /api/v2/celery-tasks/{id} | 
*CeleryTasksApi* | [**celeryTasksList**](docs/CeleryTasksApi.md#celerytaskslist) | **GET** /api/v2/celery-tasks | 
*CeleryTasksApi* | [**celeryTasksPartialUpdate**](docs/CeleryTasksApi.md#celerytaskspartialupdate) | **PATCH** /api/v2/celery-tasks/{id} | 
*CeleryTasksApi* | [**celeryTasksRetrieve**](docs/CeleryTasksApi.md#celerytasksretrieve) | **GET** /api/v2/celery-tasks/{id} | 
*CeleryTasksApi* | [**celeryTasksUpdate**](docs/CeleryTasksApi.md#celerytasksupdate) | **PUT** /api/v2/celery-tasks/{id} | 
*FilesApi* | [**filesCreate**](docs/FilesApi.md#filescreate) | **POST** /api/v2/files | 
*FilesApi* | [**filesDestroy**](docs/FilesApi.md#filesdestroy) | **DELETE** /api/v2/files/{id} | 
*FilesApi* | [**filesDownloadRetrieve**](docs/FilesApi.md#filesdownloadretrieve) | **GET** /api/v2/files/{id}/download | 
*FilesApi* | [**filesList**](docs/FilesApi.md#fileslist) | **GET** /api/v2/files | 
*FilesApi* | [**filesPartialUpdate**](docs/FilesApi.md#filespartialupdate) | **PATCH** /api/v2/files/{id} | 
*FilesApi* | [**filesRetrieve**](docs/FilesApi.md#filesretrieve) | **GET** /api/v2/files/{id} | 
*FilesApi* | [**filesUpdate**](docs/FilesApi.md#filesupdate) | **PUT** /api/v2/files/{id} | 
*ImportedPodcastsApi* | [**importedPodcastsCreate**](docs/ImportedPodcastsApi.md#importedpodcastscreate) | **POST** /api/v2/imported-podcasts | 
*ImportedPodcastsApi* | [**importedPodcastsDestroy**](docs/ImportedPodcastsApi.md#importedpodcastsdestroy) | **DELETE** /api/v2/imported-podcasts/{id} | 
*ImportedPodcastsApi* | [**importedPodcastsList**](docs/ImportedPodcastsApi.md#importedpodcastslist) | **GET** /api/v2/imported-podcasts | 
*ImportedPodcastsApi* | [**importedPodcastsPartialUpdate**](docs/ImportedPodcastsApi.md#importedpodcastspartialupdate) | **PATCH** /api/v2/imported-podcasts/{id} | 
*ImportedPodcastsApi* | [**importedPodcastsRetrieve**](docs/ImportedPodcastsApi.md#importedpodcastsretrieve) | **GET** /api/v2/imported-podcasts/{id} | 
*ImportedPodcastsApi* | [**importedPodcastsUpdate**](docs/ImportedPodcastsApi.md#importedpodcastsupdate) | **PUT** /api/v2/imported-podcasts/{id} | 
*InfoApi* | [**infoRetrieve**](docs/InfoApi.md#inforetrieve) | **GET** /api/v2/info | 
*LibrariesApi* | [**librariesCreate**](docs/LibrariesApi.md#librariescreate) | **POST** /api/v2/libraries | 
*LibrariesApi* | [**librariesDestroy**](docs/LibrariesApi.md#librariesdestroy) | **DELETE** /api/v2/libraries/{id} | 
*LibrariesApi* | [**librariesList**](docs/LibrariesApi.md#librarieslist) | **GET** /api/v2/libraries | 
*LibrariesApi* | [**librariesPartialUpdate**](docs/LibrariesApi.md#librariespartialupdate) | **PATCH** /api/v2/libraries/{id} | 
*LibrariesApi* | [**librariesRetrieve**](docs/LibrariesApi.md#librariesretrieve) | **GET** /api/v2/libraries/{id} | 
*LibrariesApi* | [**librariesUpdate**](docs/LibrariesApi.md#librariesupdate) | **PUT** /api/v2/libraries/{id} | 
*ListenerCountsApi* | [**listenerCountsCreate**](docs/ListenerCountsApi.md#listenercountscreate) | **POST** /api/v2/listener-counts | 
*ListenerCountsApi* | [**listenerCountsDestroy**](docs/ListenerCountsApi.md#listenercountsdestroy) | **DELETE** /api/v2/listener-counts/{id} | 
*ListenerCountsApi* | [**listenerCountsList**](docs/ListenerCountsApi.md#listenercountslist) | **GET** /api/v2/listener-counts | 
*ListenerCountsApi* | [**listenerCountsPartialUpdate**](docs/ListenerCountsApi.md#listenercountspartialupdate) | **PATCH** /api/v2/listener-counts/{id} | 
*ListenerCountsApi* | [**listenerCountsRetrieve**](docs/ListenerCountsApi.md#listenercountsretrieve) | **GET** /api/v2/listener-counts/{id} | 
*ListenerCountsApi* | [**listenerCountsUpdate**](docs/ListenerCountsApi.md#listenercountsupdate) | **PUT** /api/v2/listener-counts/{id} | 
*LiveLogsApi* | [**liveLogsCreate**](docs/LiveLogsApi.md#livelogscreate) | **POST** /api/v2/live-logs | 
*LiveLogsApi* | [**liveLogsDestroy**](docs/LiveLogsApi.md#livelogsdestroy) | **DELETE** /api/v2/live-logs/{id} | 
*LiveLogsApi* | [**liveLogsList**](docs/LiveLogsApi.md#livelogslist) | **GET** /api/v2/live-logs | 
*LiveLogsApi* | [**liveLogsPartialUpdate**](docs/LiveLogsApi.md#livelogspartialupdate) | **PATCH** /api/v2/live-logs/{id} | 
*LiveLogsApi* | [**liveLogsRetrieve**](docs/LiveLogsApi.md#livelogsretrieve) | **GET** /api/v2/live-logs/{id} | 
*LiveLogsApi* | [**liveLogsUpdate**](docs/LiveLogsApi.md#livelogsupdate) | **PUT** /api/v2/live-logs/{id} | 
*LoginAttemptsApi* | [**loginAttemptsCreate**](docs/LoginAttemptsApi.md#loginattemptscreate) | **POST** /api/v2/login-attempts | 
*LoginAttemptsApi* | [**loginAttemptsDestroy**](docs/LoginAttemptsApi.md#loginattemptsdestroy) | **DELETE** /api/v2/login-attempts/{ip} | 
*LoginAttemptsApi* | [**loginAttemptsList**](docs/LoginAttemptsApi.md#loginattemptslist) | **GET** /api/v2/login-attempts | 
*LoginAttemptsApi* | [**loginAttemptsPartialUpdate**](docs/LoginAttemptsApi.md#loginattemptspartialupdate) | **PATCH** /api/v2/login-attempts/{ip} | 
*LoginAttemptsApi* | [**loginAttemptsRetrieve**](docs/LoginAttemptsApi.md#loginattemptsretrieve) | **GET** /api/v2/login-attempts/{ip} | 
*LoginAttemptsApi* | [**loginAttemptsUpdate**](docs/LoginAttemptsApi.md#loginattemptsupdate) | **PUT** /api/v2/login-attempts/{ip} | 
*MountNamesApi* | [**mountNamesCreate**](docs/MountNamesApi.md#mountnamescreate) | **POST** /api/v2/mount-names | 
*MountNamesApi* | [**mountNamesDestroy**](docs/MountNamesApi.md#mountnamesdestroy) | **DELETE** /api/v2/mount-names/{id} | 
*MountNamesApi* | [**mountNamesList**](docs/MountNamesApi.md#mountnameslist) | **GET** /api/v2/mount-names | 
*MountNamesApi* | [**mountNamesPartialUpdate**](docs/MountNamesApi.md#mountnamespartialupdate) | **PATCH** /api/v2/mount-names/{id} | 
*MountNamesApi* | [**mountNamesRetrieve**](docs/MountNamesApi.md#mountnamesretrieve) | **GET** /api/v2/mount-names/{id} | 
*MountNamesApi* | [**mountNamesUpdate**](docs/MountNamesApi.md#mountnamesupdate) | **PUT** /api/v2/mount-names/{id} | 
*PlaylistContentsApi* | [**playlistContentsCreate**](docs/PlaylistContentsApi.md#playlistcontentscreate) | **POST** /api/v2/playlist-contents | 
*PlaylistContentsApi* | [**playlistContentsDestroy**](docs/PlaylistContentsApi.md#playlistcontentsdestroy) | **DELETE** /api/v2/playlist-contents/{id} | 
*PlaylistContentsApi* | [**playlistContentsList**](docs/PlaylistContentsApi.md#playlistcontentslist) | **GET** /api/v2/playlist-contents | 
*PlaylistContentsApi* | [**playlistContentsPartialUpdate**](docs/PlaylistContentsApi.md#playlistcontentspartialupdate) | **PATCH** /api/v2/playlist-contents/{id} | 
*PlaylistContentsApi* | [**playlistContentsRetrieve**](docs/PlaylistContentsApi.md#playlistcontentsretrieve) | **GET** /api/v2/playlist-contents/{id} | 
*PlaylistContentsApi* | [**playlistContentsUpdate**](docs/PlaylistContentsApi.md#playlistcontentsupdate) | **PUT** /api/v2/playlist-contents/{id} | 
*PlaylistsApi* | [**playlistsCreate**](docs/PlaylistsApi.md#playlistscreate) | **POST** /api/v2/playlists | 
*PlaylistsApi* | [**playlistsDestroy**](docs/PlaylistsApi.md#playlistsdestroy) | **DELETE** /api/v2/playlists/{id} | 
*PlaylistsApi* | [**playlistsList**](docs/PlaylistsApi.md#playlistslist) | **GET** /api/v2/playlists | 
*PlaylistsApi* | [**playlistsPartialUpdate**](docs/PlaylistsApi.md#playlistspartialupdate) | **PATCH** /api/v2/playlists/{id} | 
*PlaylistsApi* | [**playlistsRetrieve**](docs/PlaylistsApi.md#playlistsretrieve) | **GET** /api/v2/playlists/{id} | 
*PlaylistsApi* | [**playlistsUpdate**](docs/PlaylistsApi.md#playlistsupdate) | **PUT** /api/v2/playlists/{id} | 
*PlayoutHistoryApi* | [**playoutHistoryCreate**](docs/PlayoutHistoryApi.md#playouthistorycreate) | **POST** /api/v2/playout-history | 
*PlayoutHistoryApi* | [**playoutHistoryDestroy**](docs/PlayoutHistoryApi.md#playouthistorydestroy) | **DELETE** /api/v2/playout-history/{id} | 
*PlayoutHistoryApi* | [**playoutHistoryList**](docs/PlayoutHistoryApi.md#playouthistorylist) | **GET** /api/v2/playout-history | 
*PlayoutHistoryApi* | [**playoutHistoryPartialUpdate**](docs/PlayoutHistoryApi.md#playouthistorypartialupdate) | **PATCH** /api/v2/playout-history/{id} | 
*PlayoutHistoryApi* | [**playoutHistoryRetrieve**](docs/PlayoutHistoryApi.md#playouthistoryretrieve) | **GET** /api/v2/playout-history/{id} | 
*PlayoutHistoryApi* | [**playoutHistoryUpdate**](docs/PlayoutHistoryApi.md#playouthistoryupdate) | **PUT** /api/v2/playout-history/{id} | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataCreate**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadatacreate) | **POST** /api/v2/playout-history-metadata | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataDestroy**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadatadestroy) | **DELETE** /api/v2/playout-history-metadata/{id} | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataList**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadatalist) | **GET** /api/v2/playout-history-metadata | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataPartialUpdate**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadatapartialupdate) | **PATCH** /api/v2/playout-history-metadata/{id} | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataRetrieve**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadataretrieve) | **GET** /api/v2/playout-history-metadata/{id} | 
*PlayoutHistoryMetadataApi* | [**playoutHistoryMetadataUpdate**](docs/PlayoutHistoryMetadataApi.md#playouthistorymetadataupdate) | **PUT** /api/v2/playout-history-metadata/{id} | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsCreate**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldscreate) | **POST** /api/v2/playout-history-template-fields | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsDestroy**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsdestroy) | **DELETE** /api/v2/playout-history-template-fields/{id} | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsList**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldslist) | **GET** /api/v2/playout-history-template-fields | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsPartialUpdate**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldspartialupdate) | **PATCH** /api/v2/playout-history-template-fields/{id} | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsRetrieve**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsretrieve) | **GET** /api/v2/playout-history-template-fields/{id} | 
*PlayoutHistoryTemplateFieldsApi* | [**playoutHistoryTemplateFieldsUpdate**](docs/PlayoutHistoryTemplateFieldsApi.md#playouthistorytemplatefieldsupdate) | **PUT** /api/v2/playout-history-template-fields/{id} | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesCreate**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplatescreate) | **POST** /api/v2/playout-history-templates | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesDestroy**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesdestroy) | **DELETE** /api/v2/playout-history-templates/{id} | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesList**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplateslist) | **GET** /api/v2/playout-history-templates | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesPartialUpdate**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplatespartialupdate) | **PATCH** /api/v2/playout-history-templates/{id} | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesRetrieve**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesretrieve) | **GET** /api/v2/playout-history-templates/{id} | 
*PlayoutHistoryTemplatesApi* | [**playoutHistoryTemplatesUpdate**](docs/PlayoutHistoryTemplatesApi.md#playouthistorytemplatesupdate) | **PUT** /api/v2/playout-history-templates/{id} | 
*PodcastEpisodesApi* | [**podcastEpisodesCreate**](docs/PodcastEpisodesApi.md#podcastepisodescreate) | **POST** /api/v2/podcast-episodes | 
*PodcastEpisodesApi* | [**podcastEpisodesDestroy**](docs/PodcastEpisodesApi.md#podcastepisodesdestroy) | **DELETE** /api/v2/podcast-episodes/{id} | 
*PodcastEpisodesApi* | [**podcastEpisodesList**](docs/PodcastEpisodesApi.md#podcastepisodeslist) | **GET** /api/v2/podcast-episodes | 
*PodcastEpisodesApi* | [**podcastEpisodesPartialUpdate**](docs/PodcastEpisodesApi.md#podcastepisodespartialupdate) | **PATCH** /api/v2/podcast-episodes/{id} | 
*PodcastEpisodesApi* | [**podcastEpisodesRetrieve**](docs/PodcastEpisodesApi.md#podcastepisodesretrieve) | **GET** /api/v2/podcast-episodes/{id} | 
*PodcastEpisodesApi* | [**podcastEpisodesUpdate**](docs/PodcastEpisodesApi.md#podcastepisodesupdate) | **PUT** /api/v2/podcast-episodes/{id} | 
*PodcastsApi* | [**podcastsCreate**](docs/PodcastsApi.md#podcastscreate) | **POST** /api/v2/podcasts | 
*PodcastsApi* | [**podcastsDestroy**](docs/PodcastsApi.md#podcastsdestroy) | **DELETE** /api/v2/podcasts/{id} | 
*PodcastsApi* | [**podcastsList**](docs/PodcastsApi.md#podcastslist) | **GET** /api/v2/podcasts | 
*PodcastsApi* | [**podcastsPartialUpdate**](docs/PodcastsApi.md#podcastspartialupdate) | **PATCH** /api/v2/podcasts/{id} | 
*PodcastsApi* | [**podcastsRetrieve**](docs/PodcastsApi.md#podcastsretrieve) | **GET** /api/v2/podcasts/{id} | 
*PodcastsApi* | [**podcastsUpdate**](docs/PodcastsApi.md#podcastsupdate) | **PUT** /api/v2/podcasts/{id} | 
*PreferencesApi* | [**preferencesCreate**](docs/PreferencesApi.md#preferencescreate) | **POST** /api/v2/preferences | 
*PreferencesApi* | [**preferencesDestroy**](docs/PreferencesApi.md#preferencesdestroy) | **DELETE** /api/v2/preferences/{id} | 
*PreferencesApi* | [**preferencesList**](docs/PreferencesApi.md#preferenceslist) | **GET** /api/v2/preferences | 
*PreferencesApi* | [**preferencesPartialUpdate**](docs/PreferencesApi.md#preferencespartialupdate) | **PATCH** /api/v2/preferences/{id} | 
*PreferencesApi* | [**preferencesRetrieve**](docs/PreferencesApi.md#preferencesretrieve) | **GET** /api/v2/preferences/{id} | 
*PreferencesApi* | [**preferencesUpdate**](docs/PreferencesApi.md#preferencesupdate) | **PUT** /api/v2/preferences/{id} | 
*ScheduleApi* | [**scheduleCreate**](docs/ScheduleApi.md#schedulecreate) | **POST** /api/v2/schedule | 
*ScheduleApi* | [**scheduleDestroy**](docs/ScheduleApi.md#scheduledestroy) | **DELETE** /api/v2/schedule/{id} | 
*ScheduleApi* | [**scheduleList**](docs/ScheduleApi.md#schedulelist) | **GET** /api/v2/schedule | 
*ScheduleApi* | [**schedulePartialUpdate**](docs/ScheduleApi.md#schedulepartialupdate) | **PATCH** /api/v2/schedule/{id} | 
*ScheduleApi* | [**scheduleRetrieve**](docs/ScheduleApi.md#scheduleretrieve) | **GET** /api/v2/schedule/{id} | 
*ScheduleApi* | [**scheduleUpdate**](docs/ScheduleApi.md#scheduleupdate) | **PUT** /api/v2/schedule/{id} | 
*SchemaApi* | [**schemaRetrieve**](docs/SchemaApi.md#schemaretrieve) | **GET** /api/v2/schema | 
*ServiceRegistersApi* | [**serviceRegistersCreate**](docs/ServiceRegistersApi.md#serviceregisterscreate) | **POST** /api/v2/service-registers | 
*ServiceRegistersApi* | [**serviceRegistersDestroy**](docs/ServiceRegistersApi.md#serviceregistersdestroy) | **DELETE** /api/v2/service-registers/{name} | 
*ServiceRegistersApi* | [**serviceRegistersList**](docs/ServiceRegistersApi.md#serviceregisterslist) | **GET** /api/v2/service-registers | 
*ServiceRegistersApi* | [**serviceRegistersPartialUpdate**](docs/ServiceRegistersApi.md#serviceregisterspartialupdate) | **PATCH** /api/v2/service-registers/{name} | 
*ServiceRegistersApi* | [**serviceRegistersRetrieve**](docs/ServiceRegistersApi.md#serviceregistersretrieve) | **GET** /api/v2/service-registers/{name} | 
*ServiceRegistersApi* | [**serviceRegistersUpdate**](docs/ServiceRegistersApi.md#serviceregistersupdate) | **PUT** /api/v2/service-registers/{name} | 
*ShowDaysApi* | [**showDaysCreate**](docs/ShowDaysApi.md#showdayscreate) | **POST** /api/v2/show-days | 
*ShowDaysApi* | [**showDaysDestroy**](docs/ShowDaysApi.md#showdaysdestroy) | **DELETE** /api/v2/show-days/{id} | 
*ShowDaysApi* | [**showDaysList**](docs/ShowDaysApi.md#showdayslist) | **GET** /api/v2/show-days | 
*ShowDaysApi* | [**showDaysPartialUpdate**](docs/ShowDaysApi.md#showdayspartialupdate) | **PATCH** /api/v2/show-days/{id} | 
*ShowDaysApi* | [**showDaysRetrieve**](docs/ShowDaysApi.md#showdaysretrieve) | **GET** /api/v2/show-days/{id} | 
*ShowDaysApi* | [**showDaysUpdate**](docs/ShowDaysApi.md#showdaysupdate) | **PUT** /api/v2/show-days/{id} | 
*ShowHostsApi* | [**showHostsCreate**](docs/ShowHostsApi.md#showhostscreate) | **POST** /api/v2/show-hosts | 
*ShowHostsApi* | [**showHostsDestroy**](docs/ShowHostsApi.md#showhostsdestroy) | **DELETE** /api/v2/show-hosts/{id} | 
*ShowHostsApi* | [**showHostsList**](docs/ShowHostsApi.md#showhostslist) | **GET** /api/v2/show-hosts | 
*ShowHostsApi* | [**showHostsPartialUpdate**](docs/ShowHostsApi.md#showhostspartialupdate) | **PATCH** /api/v2/show-hosts/{id} | 
*ShowHostsApi* | [**showHostsRetrieve**](docs/ShowHostsApi.md#showhostsretrieve) | **GET** /api/v2/show-hosts/{id} | 
*ShowHostsApi* | [**showHostsUpdate**](docs/ShowHostsApi.md#showhostsupdate) | **PUT** /api/v2/show-hosts/{id} | 
*ShowInstancesApi* | [**showInstancesCreate**](docs/ShowInstancesApi.md#showinstancescreate) | **POST** /api/v2/show-instances | 
*ShowInstancesApi* | [**showInstancesDestroy**](docs/ShowInstancesApi.md#showinstancesdestroy) | **DELETE** /api/v2/show-instances/{id} | 
*ShowInstancesApi* | [**showInstancesList**](docs/ShowInstancesApi.md#showinstanceslist) | **GET** /api/v2/show-instances | 
*ShowInstancesApi* | [**showInstancesPartialUpdate**](docs/ShowInstancesApi.md#showinstancespartialupdate) | **PATCH** /api/v2/show-instances/{id} | 
*ShowInstancesApi* | [**showInstancesRetrieve**](docs/ShowInstancesApi.md#showinstancesretrieve) | **GET** /api/v2/show-instances/{id} | 
*ShowInstancesApi* | [**showInstancesUpdate**](docs/ShowInstancesApi.md#showinstancesupdate) | **PUT** /api/v2/show-instances/{id} | 
*ShowRebroadcastsApi* | [**showRebroadcastsCreate**](docs/ShowRebroadcastsApi.md#showrebroadcastscreate) | **POST** /api/v2/show-rebroadcasts | 
*ShowRebroadcastsApi* | [**showRebroadcastsDestroy**](docs/ShowRebroadcastsApi.md#showrebroadcastsdestroy) | **DELETE** /api/v2/show-rebroadcasts/{id} | 
*ShowRebroadcastsApi* | [**showRebroadcastsList**](docs/ShowRebroadcastsApi.md#showrebroadcastslist) | **GET** /api/v2/show-rebroadcasts | 
*ShowRebroadcastsApi* | [**showRebroadcastsPartialUpdate**](docs/ShowRebroadcastsApi.md#showrebroadcastspartialupdate) | **PATCH** /api/v2/show-rebroadcasts/{id} | 
*ShowRebroadcastsApi* | [**showRebroadcastsRetrieve**](docs/ShowRebroadcastsApi.md#showrebroadcastsretrieve) | **GET** /api/v2/show-rebroadcasts/{id} | 
*ShowRebroadcastsApi* | [**showRebroadcastsUpdate**](docs/ShowRebroadcastsApi.md#showrebroadcastsupdate) | **PUT** /api/v2/show-rebroadcasts/{id} | 
*ShowsApi* | [**showsCreate**](docs/ShowsApi.md#showscreate) | **POST** /api/v2/shows | 
*ShowsApi* | [**showsDestroy**](docs/ShowsApi.md#showsdestroy) | **DELETE** /api/v2/shows/{id} | 
*ShowsApi* | [**showsList**](docs/ShowsApi.md#showslist) | **GET** /api/v2/shows | 
*ShowsApi* | [**showsPartialUpdate**](docs/ShowsApi.md#showspartialupdate) | **PATCH** /api/v2/shows/{id} | 
*ShowsApi* | [**showsRetrieve**](docs/ShowsApi.md#showsretrieve) | **GET** /api/v2/shows/{id} | 
*ShowsApi* | [**showsUpdate**](docs/ShowsApi.md#showsupdate) | **PUT** /api/v2/shows/{id} | 
*SmartBlockContentsApi* | [**smartBlockContentsCreate**](docs/SmartBlockContentsApi.md#smartblockcontentscreate) | **POST** /api/v2/smart-block-contents | 
*SmartBlockContentsApi* | [**smartBlockContentsDestroy**](docs/SmartBlockContentsApi.md#smartblockcontentsdestroy) | **DELETE** /api/v2/smart-block-contents/{id} | 
*SmartBlockContentsApi* | [**smartBlockContentsList**](docs/SmartBlockContentsApi.md#smartblockcontentslist) | **GET** /api/v2/smart-block-contents | 
*SmartBlockContentsApi* | [**smartBlockContentsPartialUpdate**](docs/SmartBlockContentsApi.md#smartblockcontentspartialupdate) | **PATCH** /api/v2/smart-block-contents/{id} | 
*SmartBlockContentsApi* | [**smartBlockContentsRetrieve**](docs/SmartBlockContentsApi.md#smartblockcontentsretrieve) | **GET** /api/v2/smart-block-contents/{id} | 
*SmartBlockContentsApi* | [**smartBlockContentsUpdate**](docs/SmartBlockContentsApi.md#smartblockcontentsupdate) | **PUT** /api/v2/smart-block-contents/{id} | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaCreate**](docs/SmartBlockCriteriaApi.md#smartblockcriteriacreate) | **POST** /api/v2/smart-block-criteria | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaDestroy**](docs/SmartBlockCriteriaApi.md#smartblockcriteriadestroy) | **DELETE** /api/v2/smart-block-criteria/{id} | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaList**](docs/SmartBlockCriteriaApi.md#smartblockcriterialist) | **GET** /api/v2/smart-block-criteria | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaPartialUpdate**](docs/SmartBlockCriteriaApi.md#smartblockcriteriapartialupdate) | **PATCH** /api/v2/smart-block-criteria/{id} | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaRetrieve**](docs/SmartBlockCriteriaApi.md#smartblockcriteriaretrieve) | **GET** /api/v2/smart-block-criteria/{id} | 
*SmartBlockCriteriaApi* | [**smartBlockCriteriaUpdate**](docs/SmartBlockCriteriaApi.md#smartblockcriteriaupdate) | **PUT** /api/v2/smart-block-criteria/{id} | 
*SmartBlocksApi* | [**smartBlocksCreate**](docs/SmartBlocksApi.md#smartblockscreate) | **POST** /api/v2/smart-blocks | 
*SmartBlocksApi* | [**smartBlocksDestroy**](docs/SmartBlocksApi.md#smartblocksdestroy) | **DELETE** /api/v2/smart-blocks/{id} | 
*SmartBlocksApi* | [**smartBlocksList**](docs/SmartBlocksApi.md#smartblockslist) | **GET** /api/v2/smart-blocks | 
*SmartBlocksApi* | [**smartBlocksPartialUpdate**](docs/SmartBlocksApi.md#smartblockspartialupdate) | **PATCH** /api/v2/smart-blocks/{id} | 
*SmartBlocksApi* | [**smartBlocksRetrieve**](docs/SmartBlocksApi.md#smartblocksretrieve) | **GET** /api/v2/smart-blocks/{id} | 
*SmartBlocksApi* | [**smartBlocksUpdate**](docs/SmartBlocksApi.md#smartblocksupdate) | **PUT** /api/v2/smart-blocks/{id} | 
*StationPodcastsApi* | [**stationPodcastsCreate**](docs/StationPodcastsApi.md#stationpodcastscreate) | **POST** /api/v2/station-podcasts | 
*StationPodcastsApi* | [**stationPodcastsDestroy**](docs/StationPodcastsApi.md#stationpodcastsdestroy) | **DELETE** /api/v2/station-podcasts/{id} | 
*StationPodcastsApi* | [**stationPodcastsList**](docs/StationPodcastsApi.md#stationpodcastslist) | **GET** /api/v2/station-podcasts | 
*StationPodcastsApi* | [**stationPodcastsPartialUpdate**](docs/StationPodcastsApi.md#stationpodcastspartialupdate) | **PATCH** /api/v2/station-podcasts/{id} | 
*StationPodcastsApi* | [**stationPodcastsRetrieve**](docs/StationPodcastsApi.md#stationpodcastsretrieve) | **GET** /api/v2/station-podcasts/{id} | 
*StationPodcastsApi* | [**stationPodcastsUpdate**](docs/StationPodcastsApi.md#stationpodcastsupdate) | **PUT** /api/v2/station-podcasts/{id} | 
*StreamApi* | [**streamPreferencesRetrieve**](docs/StreamApi.md#streampreferencesretrieve) | **GET** /api/v2/stream/preferences | 
*StreamApi* | [**streamStateRetrieve**](docs/StreamApi.md#streamstateretrieve) | **GET** /api/v2/stream/state | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesCreate**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencescreate) | **POST** /api/v2/third-party-track-references | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesDestroy**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesdestroy) | **DELETE** /api/v2/third-party-track-references/{id} | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesList**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferenceslist) | **GET** /api/v2/third-party-track-references | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesPartialUpdate**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencespartialupdate) | **PATCH** /api/v2/third-party-track-references/{id} | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesRetrieve**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesretrieve) | **GET** /api/v2/third-party-track-references/{id} | 
*ThirdPartyTrackReferencesApi* | [**thirdPartyTrackReferencesUpdate**](docs/ThirdPartyTrackReferencesApi.md#thirdpartytrackreferencesupdate) | **PUT** /api/v2/third-party-track-references/{id} | 
*TimestampsApi* | [**timestampsCreate**](docs/TimestampsApi.md#timestampscreate) | **POST** /api/v2/timestamps | 
*TimestampsApi* | [**timestampsDestroy**](docs/TimestampsApi.md#timestampsdestroy) | **DELETE** /api/v2/timestamps/{id} | 
*TimestampsApi* | [**timestampsList**](docs/TimestampsApi.md#timestampslist) | **GET** /api/v2/timestamps | 
*TimestampsApi* | [**timestampsPartialUpdate**](docs/TimestampsApi.md#timestampspartialupdate) | **PATCH** /api/v2/timestamps/{id} | 
*TimestampsApi* | [**timestampsRetrieve**](docs/TimestampsApi.md#timestampsretrieve) | **GET** /api/v2/timestamps/{id} | 
*TimestampsApi* | [**timestampsUpdate**](docs/TimestampsApi.md#timestampsupdate) | **PUT** /api/v2/timestamps/{id} | 
*UserTokensApi* | [**userTokensCreate**](docs/UserTokensApi.md#usertokenscreate) | **POST** /api/v2/user-tokens | 
*UserTokensApi* | [**userTokensDestroy**](docs/UserTokensApi.md#usertokensdestroy) | **DELETE** /api/v2/user-tokens/{id} | 
*UserTokensApi* | [**userTokensList**](docs/UserTokensApi.md#usertokenslist) | **GET** /api/v2/user-tokens | 
*UserTokensApi* | [**userTokensPartialUpdate**](docs/UserTokensApi.md#usertokenspartialupdate) | **PATCH** /api/v2/user-tokens/{id} | 
*UserTokensApi* | [**userTokensRetrieve**](docs/UserTokensApi.md#usertokensretrieve) | **GET** /api/v2/user-tokens/{id} | 
*UserTokensApi* | [**userTokensUpdate**](docs/UserTokensApi.md#usertokensupdate) | **PUT** /api/v2/user-tokens/{id} | 
*UsersApi* | [**usersCreate**](docs/UsersApi.md#userscreate) | **POST** /api/v2/users | 
*UsersApi* | [**usersDestroy**](docs/UsersApi.md#usersdestroy) | **DELETE** /api/v2/users/{id} | 
*UsersApi* | [**usersList**](docs/UsersApi.md#userslist) | **GET** /api/v2/users | 
*UsersApi* | [**usersPartialUpdate**](docs/UsersApi.md#userspartialupdate) | **PATCH** /api/v2/users/{id} | 
*UsersApi* | [**usersRetrieve**](docs/UsersApi.md#usersretrieve) | **GET** /api/v2/users/{id} | 
*UsersApi* | [**usersUpdate**](docs/UsersApi.md#usersupdate) | **PUT** /api/v2/users/{id} | 
*VersionApi* | [**versionRetrieve**](docs/VersionApi.md#versionretrieve) | **GET** /api/v2/version | 
*WebstreamMetadataApi* | [**webstreamMetadataCreate**](docs/WebstreamMetadataApi.md#webstreammetadatacreate) | **POST** /api/v2/webstream-metadata | 
*WebstreamMetadataApi* | [**webstreamMetadataDestroy**](docs/WebstreamMetadataApi.md#webstreammetadatadestroy) | **DELETE** /api/v2/webstream-metadata/{id} | 
*WebstreamMetadataApi* | [**webstreamMetadataList**](docs/WebstreamMetadataApi.md#webstreammetadatalist) | **GET** /api/v2/webstream-metadata | 
*WebstreamMetadataApi* | [**webstreamMetadataPartialUpdate**](docs/WebstreamMetadataApi.md#webstreammetadatapartialupdate) | **PATCH** /api/v2/webstream-metadata/{id} | 
*WebstreamMetadataApi* | [**webstreamMetadataRetrieve**](docs/WebstreamMetadataApi.md#webstreammetadataretrieve) | **GET** /api/v2/webstream-metadata/{id} | 
*WebstreamMetadataApi* | [**webstreamMetadataUpdate**](docs/WebstreamMetadataApi.md#webstreammetadataupdate) | **PUT** /api/v2/webstream-metadata/{id} | 
*WebstreamsApi* | [**webstreamsCreate**](docs/WebstreamsApi.md#webstreamscreate) | **POST** /api/v2/webstreams | 
*WebstreamsApi* | [**webstreamsDestroy**](docs/WebstreamsApi.md#webstreamsdestroy) | **DELETE** /api/v2/webstreams/{id} | 
*WebstreamsApi* | [**webstreamsList**](docs/WebstreamsApi.md#webstreamslist) | **GET** /api/v2/webstreams | 
*WebstreamsApi* | [**webstreamsPartialUpdate**](docs/WebstreamsApi.md#webstreamspartialupdate) | **PATCH** /api/v2/webstreams/{id} | 
*WebstreamsApi* | [**webstreamsRetrieve**](docs/WebstreamsApi.md#webstreamsretrieve) | **GET** /api/v2/webstreams/{id} | 
*WebstreamsApi* | [**webstreamsUpdate**](docs/WebstreamsApi.md#webstreamsupdate) | **PUT** /api/v2/webstreams/{id} | 


### Documentation For Models

 - [BlankEnum](docs/BlankEnum.md)
 - [CeleryTask](docs/CeleryTask.md)
 - [FileImportStatusEnum](docs/FileImportStatusEnum.md)
 - [ImportedPodcast](docs/ImportedPodcast.md)
 - [Info](docs/Info.md)
 - [Library](docs/Library.md)
 - [ListenerCount](docs/ListenerCount.md)
 - [LiveLog](docs/LiveLog.md)
 - [LoginAttempt](docs/LoginAttempt.md)
 - [ModelFile](docs/ModelFile.md)
 - [MountName](docs/MountName.md)
 - [NullEnum](docs/NullEnum.md)
 - [PatchedCeleryTask](docs/PatchedCeleryTask.md)
 - [PatchedFile](docs/PatchedFile.md)
 - [PatchedImportedPodcast](docs/PatchedImportedPodcast.md)
 - [PatchedLibrary](docs/PatchedLibrary.md)
 - [PatchedListenerCount](docs/PatchedListenerCount.md)
 - [PatchedLiveLog](docs/PatchedLiveLog.md)
 - [PatchedLoginAttempt](docs/PatchedLoginAttempt.md)
 - [PatchedMountName](docs/PatchedMountName.md)
 - [PatchedPlaylist](docs/PatchedPlaylist.md)
 - [PatchedPlaylistContent](docs/PatchedPlaylistContent.md)
 - [PatchedPlayoutHistory](docs/PatchedPlayoutHistory.md)
 - [PatchedPlayoutHistoryMetadata](docs/PatchedPlayoutHistoryMetadata.md)
 - [PatchedPlayoutHistoryTemplate](docs/PatchedPlayoutHistoryTemplate.md)
 - [PatchedPlayoutHistoryTemplateField](docs/PatchedPlayoutHistoryTemplateField.md)
 - [PatchedPodcast](docs/PatchedPodcast.md)
 - [PatchedPodcastEpisode](docs/PatchedPodcastEpisode.md)
 - [PatchedPreference](docs/PatchedPreference.md)
 - [PatchedReadSchedule](docs/PatchedReadSchedule.md)
 - [PatchedServiceRegister](docs/PatchedServiceRegister.md)
 - [PatchedShow](docs/PatchedShow.md)
 - [PatchedShowDays](docs/PatchedShowDays.md)
 - [PatchedShowHost](docs/PatchedShowHost.md)
 - [PatchedShowInstance](docs/PatchedShowInstance.md)
 - [PatchedShowRebroadcast](docs/PatchedShowRebroadcast.md)
 - [PatchedSmartBlock](docs/PatchedSmartBlock.md)
 - [PatchedSmartBlockContent](docs/PatchedSmartBlockContent.md)
 - [PatchedSmartBlockCriteria](docs/PatchedSmartBlockCriteria.md)
 - [PatchedSmartBlockKind](docs/PatchedSmartBlockKind.md)
 - [PatchedStationPodcast](docs/PatchedStationPodcast.md)
 - [PatchedThirdPartyTrackReference](docs/PatchedThirdPartyTrackReference.md)
 - [PatchedTimestamp](docs/PatchedTimestamp.md)
 - [PatchedUser](docs/PatchedUser.md)
 - [PatchedUserToken](docs/PatchedUserToken.md)
 - [PatchedWebstream](docs/PatchedWebstream.md)
 - [PatchedWebstreamMetadata](docs/PatchedWebstreamMetadata.md)
 - [Playlist](docs/Playlist.md)
 - [PlaylistContent](docs/PlaylistContent.md)
 - [PlaylistContentKindEnum](docs/PlaylistContentKindEnum.md)
 - [PlayoutHistory](docs/PlayoutHistory.md)
 - [PlayoutHistoryMetadata](docs/PlayoutHistoryMetadata.md)
 - [PlayoutHistoryTemplate](docs/PlayoutHistoryTemplate.md)
 - [PlayoutHistoryTemplateField](docs/PlayoutHistoryTemplateField.md)
 - [Podcast](docs/Podcast.md)
 - [PodcastEpisode](docs/PodcastEpisode.md)
 - [PositionStatusEnum](docs/PositionStatusEnum.md)
 - [Preference](docs/Preference.md)
 - [ReadSchedule](docs/ReadSchedule.md)
 - [RecordEnabledEnum](docs/RecordEnabledEnum.md)
 - [RepeatKindEnum](docs/RepeatKindEnum.md)
 - [RoleEnum](docs/RoleEnum.md)
 - [ServiceRegister](docs/ServiceRegister.md)
 - [Show](docs/Show.md)
 - [ShowDays](docs/ShowDays.md)
 - [ShowHost](docs/ShowHost.md)
 - [ShowInstance](docs/ShowInstance.md)
 - [ShowRebroadcast](docs/ShowRebroadcast.md)
 - [SmartBlock](docs/SmartBlock.md)
 - [SmartBlockContent](docs/SmartBlockContent.md)
 - [SmartBlockCriteria](docs/SmartBlockCriteria.md)
 - [SmartBlockKindEnum](docs/SmartBlockKindEnum.md)
 - [StationPodcast](docs/StationPodcast.md)
 - [StreamPreferences](docs/StreamPreferences.md)
 - [StreamState](docs/StreamState.md)
 - [ThirdPartyTrackReference](docs/ThirdPartyTrackReference.md)
 - [Timestamp](docs/Timestamp.md)
 - [User](docs/User.md)
 - [UserToken](docs/UserToken.md)
 - [Version](docs/Version.md)
 - [Webstream](docs/Webstream.md)
 - [WebstreamMetadata](docs/WebstreamMetadata.md)
 - [WeekDayEnum](docs/WeekDayEnum.md)
 - [WriteSchedule](docs/WriteSchedule.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication

<a id="cookieAuth"></a>
### cookieAuth

- **Type**: API key
- **API key parameter name**: sessionid
- **Location**: 

