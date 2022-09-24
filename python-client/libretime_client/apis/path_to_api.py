import typing_extensions

from libretime_client.paths import PathValues
from libretime_client.apis.paths.api_v2_celery_tasks import ApiV2CeleryTasks
from libretime_client.apis.paths.api_v2_celery_tasks_id import ApiV2CeleryTasksId
from libretime_client.apis.paths.api_v2_files import ApiV2Files
from libretime_client.apis.paths.api_v2_files_id import ApiV2FilesId
from libretime_client.apis.paths.api_v2_files_id_download import ApiV2FilesIdDownload
from libretime_client.apis.paths.api_v2_imported_podcasts import ApiV2ImportedPodcasts
from libretime_client.apis.paths.api_v2_imported_podcasts_id import ApiV2ImportedPodcastsId
from libretime_client.apis.paths.api_v2_info import ApiV2Info
from libretime_client.apis.paths.api_v2_libraries import ApiV2Libraries
from libretime_client.apis.paths.api_v2_libraries_id import ApiV2LibrariesId
from libretime_client.apis.paths.api_v2_listener_counts import ApiV2ListenerCounts
from libretime_client.apis.paths.api_v2_listener_counts_id import ApiV2ListenerCountsId
from libretime_client.apis.paths.api_v2_live_logs import ApiV2LiveLogs
from libretime_client.apis.paths.api_v2_live_logs_id import ApiV2LiveLogsId
from libretime_client.apis.paths.api_v2_login_attempts import ApiV2LoginAttempts
from libretime_client.apis.paths.api_v2_login_attempts_ip import ApiV2LoginAttemptsIp
from libretime_client.apis.paths.api_v2_mount_names import ApiV2MountNames
from libretime_client.apis.paths.api_v2_mount_names_id import ApiV2MountNamesId
from libretime_client.apis.paths.api_v2_playlist_contents import ApiV2PlaylistContents
from libretime_client.apis.paths.api_v2_playlist_contents_id import ApiV2PlaylistContentsId
from libretime_client.apis.paths.api_v2_playlists import ApiV2Playlists
from libretime_client.apis.paths.api_v2_playlists_id import ApiV2PlaylistsId
from libretime_client.apis.paths.api_v2_playout_history import ApiV2PlayoutHistory
from libretime_client.apis.paths.api_v2_playout_history_metadata import ApiV2PlayoutHistoryMetadata
from libretime_client.apis.paths.api_v2_playout_history_metadata_id import ApiV2PlayoutHistoryMetadataId
from libretime_client.apis.paths.api_v2_playout_history_template_fields import ApiV2PlayoutHistoryTemplateFields
from libretime_client.apis.paths.api_v2_playout_history_template_fields_id import ApiV2PlayoutHistoryTemplateFieldsId
from libretime_client.apis.paths.api_v2_playout_history_templates import ApiV2PlayoutHistoryTemplates
from libretime_client.apis.paths.api_v2_playout_history_templates_id import ApiV2PlayoutHistoryTemplatesId
from libretime_client.apis.paths.api_v2_playout_history_id import ApiV2PlayoutHistoryId
from libretime_client.apis.paths.api_v2_podcast_episodes import ApiV2PodcastEpisodes
from libretime_client.apis.paths.api_v2_podcast_episodes_id import ApiV2PodcastEpisodesId
from libretime_client.apis.paths.api_v2_podcasts import ApiV2Podcasts
from libretime_client.apis.paths.api_v2_podcasts_id import ApiV2PodcastsId
from libretime_client.apis.paths.api_v2_preferences import ApiV2Preferences
from libretime_client.apis.paths.api_v2_preferences_id import ApiV2PreferencesId
from libretime_client.apis.paths.api_v2_schedule import ApiV2Schedule
from libretime_client.apis.paths.api_v2_schedule_id import ApiV2ScheduleId
from libretime_client.apis.paths.api_v2_schema import ApiV2Schema
from libretime_client.apis.paths.api_v2_service_registers import ApiV2ServiceRegisters
from libretime_client.apis.paths.api_v2_service_registers_name import ApiV2ServiceRegistersName
from libretime_client.apis.paths.api_v2_show_days import ApiV2ShowDays
from libretime_client.apis.paths.api_v2_show_days_id import ApiV2ShowDaysId
from libretime_client.apis.paths.api_v2_show_hosts import ApiV2ShowHosts
from libretime_client.apis.paths.api_v2_show_hosts_id import ApiV2ShowHostsId
from libretime_client.apis.paths.api_v2_show_instances import ApiV2ShowInstances
from libretime_client.apis.paths.api_v2_show_instances_id import ApiV2ShowInstancesId
from libretime_client.apis.paths.api_v2_show_rebroadcasts import ApiV2ShowRebroadcasts
from libretime_client.apis.paths.api_v2_show_rebroadcasts_id import ApiV2ShowRebroadcastsId
from libretime_client.apis.paths.api_v2_shows import ApiV2Shows
from libretime_client.apis.paths.api_v2_shows_id import ApiV2ShowsId
from libretime_client.apis.paths.api_v2_smart_block_contents import ApiV2SmartBlockContents
from libretime_client.apis.paths.api_v2_smart_block_contents_id import ApiV2SmartBlockContentsId
from libretime_client.apis.paths.api_v2_smart_block_criteria import ApiV2SmartBlockCriteria
from libretime_client.apis.paths.api_v2_smart_block_criteria_id import ApiV2SmartBlockCriteriaId
from libretime_client.apis.paths.api_v2_smart_blocks import ApiV2SmartBlocks
from libretime_client.apis.paths.api_v2_smart_blocks_id import ApiV2SmartBlocksId
from libretime_client.apis.paths.api_v2_station_podcasts import ApiV2StationPodcasts
from libretime_client.apis.paths.api_v2_station_podcasts_id import ApiV2StationPodcastsId
from libretime_client.apis.paths.api_v2_stream_preferences import ApiV2StreamPreferences
from libretime_client.apis.paths.api_v2_stream_state import ApiV2StreamState
from libretime_client.apis.paths.api_v2_third_party_track_references import ApiV2ThirdPartyTrackReferences
from libretime_client.apis.paths.api_v2_third_party_track_references_id import ApiV2ThirdPartyTrackReferencesId
from libretime_client.apis.paths.api_v2_timestamps import ApiV2Timestamps
from libretime_client.apis.paths.api_v2_timestamps_id import ApiV2TimestampsId
from libretime_client.apis.paths.api_v2_user_tokens import ApiV2UserTokens
from libretime_client.apis.paths.api_v2_user_tokens_id import ApiV2UserTokensId
from libretime_client.apis.paths.api_v2_users import ApiV2Users
from libretime_client.apis.paths.api_v2_users_id import ApiV2UsersId
from libretime_client.apis.paths.api_v2_version import ApiV2Version
from libretime_client.apis.paths.api_v2_webstream_metadata import ApiV2WebstreamMetadata
from libretime_client.apis.paths.api_v2_webstream_metadata_id import ApiV2WebstreamMetadataId
from libretime_client.apis.paths.api_v2_webstreams import ApiV2Webstreams
from libretime_client.apis.paths.api_v2_webstreams_id import ApiV2WebstreamsId

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.API_V2_CELERYTASKS: ApiV2CeleryTasks,
        PathValues.API_V2_CELERYTASKS_ID: ApiV2CeleryTasksId,
        PathValues.API_V2_FILES: ApiV2Files,
        PathValues.API_V2_FILES_ID: ApiV2FilesId,
        PathValues.API_V2_FILES_ID_DOWNLOAD: ApiV2FilesIdDownload,
        PathValues.API_V2_IMPORTEDPODCASTS: ApiV2ImportedPodcasts,
        PathValues.API_V2_IMPORTEDPODCASTS_ID: ApiV2ImportedPodcastsId,
        PathValues.API_V2_INFO: ApiV2Info,
        PathValues.API_V2_LIBRARIES: ApiV2Libraries,
        PathValues.API_V2_LIBRARIES_ID: ApiV2LibrariesId,
        PathValues.API_V2_LISTENERCOUNTS: ApiV2ListenerCounts,
        PathValues.API_V2_LISTENERCOUNTS_ID: ApiV2ListenerCountsId,
        PathValues.API_V2_LIVELOGS: ApiV2LiveLogs,
        PathValues.API_V2_LIVELOGS_ID: ApiV2LiveLogsId,
        PathValues.API_V2_LOGINATTEMPTS: ApiV2LoginAttempts,
        PathValues.API_V2_LOGINATTEMPTS_IP: ApiV2LoginAttemptsIp,
        PathValues.API_V2_MOUNTNAMES: ApiV2MountNames,
        PathValues.API_V2_MOUNTNAMES_ID: ApiV2MountNamesId,
        PathValues.API_V2_PLAYLISTCONTENTS: ApiV2PlaylistContents,
        PathValues.API_V2_PLAYLISTCONTENTS_ID: ApiV2PlaylistContentsId,
        PathValues.API_V2_PLAYLISTS: ApiV2Playlists,
        PathValues.API_V2_PLAYLISTS_ID: ApiV2PlaylistsId,
        PathValues.API_V2_PLAYOUTHISTORY: ApiV2PlayoutHistory,
        PathValues.API_V2_PLAYOUTHISTORYMETADATA: ApiV2PlayoutHistoryMetadata,
        PathValues.API_V2_PLAYOUTHISTORYMETADATA_ID: ApiV2PlayoutHistoryMetadataId,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATEFIELDS: ApiV2PlayoutHistoryTemplateFields,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATEFIELDS_ID: ApiV2PlayoutHistoryTemplateFieldsId,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATES: ApiV2PlayoutHistoryTemplates,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATES_ID: ApiV2PlayoutHistoryTemplatesId,
        PathValues.API_V2_PLAYOUTHISTORY_ID: ApiV2PlayoutHistoryId,
        PathValues.API_V2_PODCASTEPISODES: ApiV2PodcastEpisodes,
        PathValues.API_V2_PODCASTEPISODES_ID: ApiV2PodcastEpisodesId,
        PathValues.API_V2_PODCASTS: ApiV2Podcasts,
        PathValues.API_V2_PODCASTS_ID: ApiV2PodcastsId,
        PathValues.API_V2_PREFERENCES: ApiV2Preferences,
        PathValues.API_V2_PREFERENCES_ID: ApiV2PreferencesId,
        PathValues.API_V2_SCHEDULE: ApiV2Schedule,
        PathValues.API_V2_SCHEDULE_ID: ApiV2ScheduleId,
        PathValues.API_V2_SCHEMA: ApiV2Schema,
        PathValues.API_V2_SERVICEREGISTERS: ApiV2ServiceRegisters,
        PathValues.API_V2_SERVICEREGISTERS_NAME: ApiV2ServiceRegistersName,
        PathValues.API_V2_SHOWDAYS: ApiV2ShowDays,
        PathValues.API_V2_SHOWDAYS_ID: ApiV2ShowDaysId,
        PathValues.API_V2_SHOWHOSTS: ApiV2ShowHosts,
        PathValues.API_V2_SHOWHOSTS_ID: ApiV2ShowHostsId,
        PathValues.API_V2_SHOWINSTANCES: ApiV2ShowInstances,
        PathValues.API_V2_SHOWINSTANCES_ID: ApiV2ShowInstancesId,
        PathValues.API_V2_SHOWREBROADCASTS: ApiV2ShowRebroadcasts,
        PathValues.API_V2_SHOWREBROADCASTS_ID: ApiV2ShowRebroadcastsId,
        PathValues.API_V2_SHOWS: ApiV2Shows,
        PathValues.API_V2_SHOWS_ID: ApiV2ShowsId,
        PathValues.API_V2_SMARTBLOCKCONTENTS: ApiV2SmartBlockContents,
        PathValues.API_V2_SMARTBLOCKCONTENTS_ID: ApiV2SmartBlockContentsId,
        PathValues.API_V2_SMARTBLOCKCRITERIA: ApiV2SmartBlockCriteria,
        PathValues.API_V2_SMARTBLOCKCRITERIA_ID: ApiV2SmartBlockCriteriaId,
        PathValues.API_V2_SMARTBLOCKS: ApiV2SmartBlocks,
        PathValues.API_V2_SMARTBLOCKS_ID: ApiV2SmartBlocksId,
        PathValues.API_V2_STATIONPODCASTS: ApiV2StationPodcasts,
        PathValues.API_V2_STATIONPODCASTS_ID: ApiV2StationPodcastsId,
        PathValues.API_V2_STREAM_PREFERENCES: ApiV2StreamPreferences,
        PathValues.API_V2_STREAM_STATE: ApiV2StreamState,
        PathValues.API_V2_THIRDPARTYTRACKREFERENCES: ApiV2ThirdPartyTrackReferences,
        PathValues.API_V2_THIRDPARTYTRACKREFERENCES_ID: ApiV2ThirdPartyTrackReferencesId,
        PathValues.API_V2_TIMESTAMPS: ApiV2Timestamps,
        PathValues.API_V2_TIMESTAMPS_ID: ApiV2TimestampsId,
        PathValues.API_V2_USERTOKENS: ApiV2UserTokens,
        PathValues.API_V2_USERTOKENS_ID: ApiV2UserTokensId,
        PathValues.API_V2_USERS: ApiV2Users,
        PathValues.API_V2_USERS_ID: ApiV2UsersId,
        PathValues.API_V2_VERSION: ApiV2Version,
        PathValues.API_V2_WEBSTREAMMETADATA: ApiV2WebstreamMetadata,
        PathValues.API_V2_WEBSTREAMMETADATA_ID: ApiV2WebstreamMetadataId,
        PathValues.API_V2_WEBSTREAMS: ApiV2Webstreams,
        PathValues.API_V2_WEBSTREAMS_ID: ApiV2WebstreamsId,
    }
)

path_to_api = PathToApi(
    {
        PathValues.API_V2_CELERYTASKS: ApiV2CeleryTasks,
        PathValues.API_V2_CELERYTASKS_ID: ApiV2CeleryTasksId,
        PathValues.API_V2_FILES: ApiV2Files,
        PathValues.API_V2_FILES_ID: ApiV2FilesId,
        PathValues.API_V2_FILES_ID_DOWNLOAD: ApiV2FilesIdDownload,
        PathValues.API_V2_IMPORTEDPODCASTS: ApiV2ImportedPodcasts,
        PathValues.API_V2_IMPORTEDPODCASTS_ID: ApiV2ImportedPodcastsId,
        PathValues.API_V2_INFO: ApiV2Info,
        PathValues.API_V2_LIBRARIES: ApiV2Libraries,
        PathValues.API_V2_LIBRARIES_ID: ApiV2LibrariesId,
        PathValues.API_V2_LISTENERCOUNTS: ApiV2ListenerCounts,
        PathValues.API_V2_LISTENERCOUNTS_ID: ApiV2ListenerCountsId,
        PathValues.API_V2_LIVELOGS: ApiV2LiveLogs,
        PathValues.API_V2_LIVELOGS_ID: ApiV2LiveLogsId,
        PathValues.API_V2_LOGINATTEMPTS: ApiV2LoginAttempts,
        PathValues.API_V2_LOGINATTEMPTS_IP: ApiV2LoginAttemptsIp,
        PathValues.API_V2_MOUNTNAMES: ApiV2MountNames,
        PathValues.API_V2_MOUNTNAMES_ID: ApiV2MountNamesId,
        PathValues.API_V2_PLAYLISTCONTENTS: ApiV2PlaylistContents,
        PathValues.API_V2_PLAYLISTCONTENTS_ID: ApiV2PlaylistContentsId,
        PathValues.API_V2_PLAYLISTS: ApiV2Playlists,
        PathValues.API_V2_PLAYLISTS_ID: ApiV2PlaylistsId,
        PathValues.API_V2_PLAYOUTHISTORY: ApiV2PlayoutHistory,
        PathValues.API_V2_PLAYOUTHISTORYMETADATA: ApiV2PlayoutHistoryMetadata,
        PathValues.API_V2_PLAYOUTHISTORYMETADATA_ID: ApiV2PlayoutHistoryMetadataId,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATEFIELDS: ApiV2PlayoutHistoryTemplateFields,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATEFIELDS_ID: ApiV2PlayoutHistoryTemplateFieldsId,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATES: ApiV2PlayoutHistoryTemplates,
        PathValues.API_V2_PLAYOUTHISTORYTEMPLATES_ID: ApiV2PlayoutHistoryTemplatesId,
        PathValues.API_V2_PLAYOUTHISTORY_ID: ApiV2PlayoutHistoryId,
        PathValues.API_V2_PODCASTEPISODES: ApiV2PodcastEpisodes,
        PathValues.API_V2_PODCASTEPISODES_ID: ApiV2PodcastEpisodesId,
        PathValues.API_V2_PODCASTS: ApiV2Podcasts,
        PathValues.API_V2_PODCASTS_ID: ApiV2PodcastsId,
        PathValues.API_V2_PREFERENCES: ApiV2Preferences,
        PathValues.API_V2_PREFERENCES_ID: ApiV2PreferencesId,
        PathValues.API_V2_SCHEDULE: ApiV2Schedule,
        PathValues.API_V2_SCHEDULE_ID: ApiV2ScheduleId,
        PathValues.API_V2_SCHEMA: ApiV2Schema,
        PathValues.API_V2_SERVICEREGISTERS: ApiV2ServiceRegisters,
        PathValues.API_V2_SERVICEREGISTERS_NAME: ApiV2ServiceRegistersName,
        PathValues.API_V2_SHOWDAYS: ApiV2ShowDays,
        PathValues.API_V2_SHOWDAYS_ID: ApiV2ShowDaysId,
        PathValues.API_V2_SHOWHOSTS: ApiV2ShowHosts,
        PathValues.API_V2_SHOWHOSTS_ID: ApiV2ShowHostsId,
        PathValues.API_V2_SHOWINSTANCES: ApiV2ShowInstances,
        PathValues.API_V2_SHOWINSTANCES_ID: ApiV2ShowInstancesId,
        PathValues.API_V2_SHOWREBROADCASTS: ApiV2ShowRebroadcasts,
        PathValues.API_V2_SHOWREBROADCASTS_ID: ApiV2ShowRebroadcastsId,
        PathValues.API_V2_SHOWS: ApiV2Shows,
        PathValues.API_V2_SHOWS_ID: ApiV2ShowsId,
        PathValues.API_V2_SMARTBLOCKCONTENTS: ApiV2SmartBlockContents,
        PathValues.API_V2_SMARTBLOCKCONTENTS_ID: ApiV2SmartBlockContentsId,
        PathValues.API_V2_SMARTBLOCKCRITERIA: ApiV2SmartBlockCriteria,
        PathValues.API_V2_SMARTBLOCKCRITERIA_ID: ApiV2SmartBlockCriteriaId,
        PathValues.API_V2_SMARTBLOCKS: ApiV2SmartBlocks,
        PathValues.API_V2_SMARTBLOCKS_ID: ApiV2SmartBlocksId,
        PathValues.API_V2_STATIONPODCASTS: ApiV2StationPodcasts,
        PathValues.API_V2_STATIONPODCASTS_ID: ApiV2StationPodcastsId,
        PathValues.API_V2_STREAM_PREFERENCES: ApiV2StreamPreferences,
        PathValues.API_V2_STREAM_STATE: ApiV2StreamState,
        PathValues.API_V2_THIRDPARTYTRACKREFERENCES: ApiV2ThirdPartyTrackReferences,
        PathValues.API_V2_THIRDPARTYTRACKREFERENCES_ID: ApiV2ThirdPartyTrackReferencesId,
        PathValues.API_V2_TIMESTAMPS: ApiV2Timestamps,
        PathValues.API_V2_TIMESTAMPS_ID: ApiV2TimestampsId,
        PathValues.API_V2_USERTOKENS: ApiV2UserTokens,
        PathValues.API_V2_USERTOKENS_ID: ApiV2UserTokensId,
        PathValues.API_V2_USERS: ApiV2Users,
        PathValues.API_V2_USERS_ID: ApiV2UsersId,
        PathValues.API_V2_VERSION: ApiV2Version,
        PathValues.API_V2_WEBSTREAMMETADATA: ApiV2WebstreamMetadata,
        PathValues.API_V2_WEBSTREAMMETADATA_ID: ApiV2WebstreamMetadataId,
        PathValues.API_V2_WEBSTREAMS: ApiV2Webstreams,
        PathValues.API_V2_WEBSTREAMS_ID: ApiV2WebstreamsId,
    }
)
