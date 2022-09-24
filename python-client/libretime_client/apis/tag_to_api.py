import typing_extensions

from libretime_client.apis.tags import TagValues
from libretime_client.apis.tags.celery_tasks_api import CeleryTasksApi
from libretime_client.apis.tags.files_api import FilesApi
from libretime_client.apis.tags.imported_podcasts_api import ImportedPodcastsApi
from libretime_client.apis.tags.info_api import InfoApi
from libretime_client.apis.tags.libraries_api import LibrariesApi
from libretime_client.apis.tags.listener_counts_api import ListenerCountsApi
from libretime_client.apis.tags.live_logs_api import LiveLogsApi
from libretime_client.apis.tags.login_attempts_api import LoginAttemptsApi
from libretime_client.apis.tags.mount_names_api import MountNamesApi
from libretime_client.apis.tags.playlist_contents_api import PlaylistContentsApi
from libretime_client.apis.tags.playlists_api import PlaylistsApi
from libretime_client.apis.tags.playout_history_api import PlayoutHistoryApi
from libretime_client.apis.tags.playout_history_metadata_api import PlayoutHistoryMetadataApi
from libretime_client.apis.tags.playout_history_template_fields_api import PlayoutHistoryTemplateFieldsApi
from libretime_client.apis.tags.playout_history_templates_api import PlayoutHistoryTemplatesApi
from libretime_client.apis.tags.podcast_episodes_api import PodcastEpisodesApi
from libretime_client.apis.tags.podcasts_api import PodcastsApi
from libretime_client.apis.tags.preferences_api import PreferencesApi
from libretime_client.apis.tags.schedule_api import ScheduleApi
from libretime_client.apis.tags.schema_api import SchemaApi
from libretime_client.apis.tags.service_registers_api import ServiceRegistersApi
from libretime_client.apis.tags.show_days_api import ShowDaysApi
from libretime_client.apis.tags.show_hosts_api import ShowHostsApi
from libretime_client.apis.tags.show_instances_api import ShowInstancesApi
from libretime_client.apis.tags.show_rebroadcasts_api import ShowRebroadcastsApi
from libretime_client.apis.tags.shows_api import ShowsApi
from libretime_client.apis.tags.smart_block_contents_api import SmartBlockContentsApi
from libretime_client.apis.tags.smart_block_criteria_api import SmartBlockCriteriaApi
from libretime_client.apis.tags.smart_blocks_api import SmartBlocksApi
from libretime_client.apis.tags.station_podcasts_api import StationPodcastsApi
from libretime_client.apis.tags.stream_api import StreamApi
from libretime_client.apis.tags.third_party_track_references_api import ThirdPartyTrackReferencesApi
from libretime_client.apis.tags.timestamps_api import TimestampsApi
from libretime_client.apis.tags.user_tokens_api import UserTokensApi
from libretime_client.apis.tags.users_api import UsersApi
from libretime_client.apis.tags.version_api import VersionApi
from libretime_client.apis.tags.webstream_metadata_api import WebstreamMetadataApi
from libretime_client.apis.tags.webstreams_api import WebstreamsApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.CELERYTASKS: CeleryTasksApi,
        TagValues.FILES: FilesApi,
        TagValues.IMPORTEDPODCASTS: ImportedPodcastsApi,
        TagValues.INFO: InfoApi,
        TagValues.LIBRARIES: LibrariesApi,
        TagValues.LISTENERCOUNTS: ListenerCountsApi,
        TagValues.LIVELOGS: LiveLogsApi,
        TagValues.LOGINATTEMPTS: LoginAttemptsApi,
        TagValues.MOUNTNAMES: MountNamesApi,
        TagValues.PLAYLISTCONTENTS: PlaylistContentsApi,
        TagValues.PLAYLISTS: PlaylistsApi,
        TagValues.PLAYOUTHISTORY: PlayoutHistoryApi,
        TagValues.PLAYOUTHISTORYMETADATA: PlayoutHistoryMetadataApi,
        TagValues.PLAYOUTHISTORYTEMPLATEFIELDS: PlayoutHistoryTemplateFieldsApi,
        TagValues.PLAYOUTHISTORYTEMPLATES: PlayoutHistoryTemplatesApi,
        TagValues.PODCASTEPISODES: PodcastEpisodesApi,
        TagValues.PODCASTS: PodcastsApi,
        TagValues.PREFERENCES: PreferencesApi,
        TagValues.SCHEDULE: ScheduleApi,
        TagValues.SCHEMA: SchemaApi,
        TagValues.SERVICEREGISTERS: ServiceRegistersApi,
        TagValues.SHOWDAYS: ShowDaysApi,
        TagValues.SHOWHOSTS: ShowHostsApi,
        TagValues.SHOWINSTANCES: ShowInstancesApi,
        TagValues.SHOWREBROADCASTS: ShowRebroadcastsApi,
        TagValues.SHOWS: ShowsApi,
        TagValues.SMARTBLOCKCONTENTS: SmartBlockContentsApi,
        TagValues.SMARTBLOCKCRITERIA: SmartBlockCriteriaApi,
        TagValues.SMARTBLOCKS: SmartBlocksApi,
        TagValues.STATIONPODCASTS: StationPodcastsApi,
        TagValues.STREAM: StreamApi,
        TagValues.THIRDPARTYTRACKREFERENCES: ThirdPartyTrackReferencesApi,
        TagValues.TIMESTAMPS: TimestampsApi,
        TagValues.USERTOKENS: UserTokensApi,
        TagValues.USERS: UsersApi,
        TagValues.VERSION: VersionApi,
        TagValues.WEBSTREAMMETADATA: WebstreamMetadataApi,
        TagValues.WEBSTREAMS: WebstreamsApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.CELERYTASKS: CeleryTasksApi,
        TagValues.FILES: FilesApi,
        TagValues.IMPORTEDPODCASTS: ImportedPodcastsApi,
        TagValues.INFO: InfoApi,
        TagValues.LIBRARIES: LibrariesApi,
        TagValues.LISTENERCOUNTS: ListenerCountsApi,
        TagValues.LIVELOGS: LiveLogsApi,
        TagValues.LOGINATTEMPTS: LoginAttemptsApi,
        TagValues.MOUNTNAMES: MountNamesApi,
        TagValues.PLAYLISTCONTENTS: PlaylistContentsApi,
        TagValues.PLAYLISTS: PlaylistsApi,
        TagValues.PLAYOUTHISTORY: PlayoutHistoryApi,
        TagValues.PLAYOUTHISTORYMETADATA: PlayoutHistoryMetadataApi,
        TagValues.PLAYOUTHISTORYTEMPLATEFIELDS: PlayoutHistoryTemplateFieldsApi,
        TagValues.PLAYOUTHISTORYTEMPLATES: PlayoutHistoryTemplatesApi,
        TagValues.PODCASTEPISODES: PodcastEpisodesApi,
        TagValues.PODCASTS: PodcastsApi,
        TagValues.PREFERENCES: PreferencesApi,
        TagValues.SCHEDULE: ScheduleApi,
        TagValues.SCHEMA: SchemaApi,
        TagValues.SERVICEREGISTERS: ServiceRegistersApi,
        TagValues.SHOWDAYS: ShowDaysApi,
        TagValues.SHOWHOSTS: ShowHostsApi,
        TagValues.SHOWINSTANCES: ShowInstancesApi,
        TagValues.SHOWREBROADCASTS: ShowRebroadcastsApi,
        TagValues.SHOWS: ShowsApi,
        TagValues.SMARTBLOCKCONTENTS: SmartBlockContentsApi,
        TagValues.SMARTBLOCKCRITERIA: SmartBlockCriteriaApi,
        TagValues.SMARTBLOCKS: SmartBlocksApi,
        TagValues.STATIONPODCASTS: StationPodcastsApi,
        TagValues.STREAM: StreamApi,
        TagValues.THIRDPARTYTRACKREFERENCES: ThirdPartyTrackReferencesApi,
        TagValues.TIMESTAMPS: TimestampsApi,
        TagValues.USERTOKENS: UserTokensApi,
        TagValues.USERS: UsersApi,
        TagValues.VERSION: VersionApi,
        TagValues.WEBSTREAMMETADATA: WebstreamMetadataApi,
        TagValues.WEBSTREAMS: WebstreamsApi,
    }
)
