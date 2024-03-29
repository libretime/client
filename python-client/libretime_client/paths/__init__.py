# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from libretime_client.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    API_V2_CELERYTASKS = "/api/v2/celery-tasks"
    API_V2_CELERYTASKS_ID = "/api/v2/celery-tasks/{id}"
    API_V2_FILES = "/api/v2/files"
    API_V2_FILES_ID = "/api/v2/files/{id}"
    API_V2_FILES_ID_DOWNLOAD = "/api/v2/files/{id}/download"
    API_V2_IMPORTEDPODCASTS = "/api/v2/imported-podcasts"
    API_V2_IMPORTEDPODCASTS_ID = "/api/v2/imported-podcasts/{id}"
    API_V2_INFO = "/api/v2/info"
    API_V2_LIBRARIES = "/api/v2/libraries"
    API_V2_LIBRARIES_ID = "/api/v2/libraries/{id}"
    API_V2_LISTENERCOUNTS = "/api/v2/listener-counts"
    API_V2_LISTENERCOUNTS_ID = "/api/v2/listener-counts/{id}"
    API_V2_LIVELOGS = "/api/v2/live-logs"
    API_V2_LIVELOGS_ID = "/api/v2/live-logs/{id}"
    API_V2_LOGINATTEMPTS = "/api/v2/login-attempts"
    API_V2_LOGINATTEMPTS_IP = "/api/v2/login-attempts/{ip}"
    API_V2_MOUNTNAMES = "/api/v2/mount-names"
    API_V2_MOUNTNAMES_ID = "/api/v2/mount-names/{id}"
    API_V2_PLAYLISTCONTENTS = "/api/v2/playlist-contents"
    API_V2_PLAYLISTCONTENTS_ID = "/api/v2/playlist-contents/{id}"
    API_V2_PLAYLISTS = "/api/v2/playlists"
    API_V2_PLAYLISTS_ID = "/api/v2/playlists/{id}"
    API_V2_PLAYOUTHISTORY = "/api/v2/playout-history"
    API_V2_PLAYOUTHISTORYMETADATA = "/api/v2/playout-history-metadata"
    API_V2_PLAYOUTHISTORYMETADATA_ID = "/api/v2/playout-history-metadata/{id}"
    API_V2_PLAYOUTHISTORYTEMPLATEFIELDS = "/api/v2/playout-history-template-fields"
    API_V2_PLAYOUTHISTORYTEMPLATEFIELDS_ID = "/api/v2/playout-history-template-fields/{id}"
    API_V2_PLAYOUTHISTORYTEMPLATES = "/api/v2/playout-history-templates"
    API_V2_PLAYOUTHISTORYTEMPLATES_ID = "/api/v2/playout-history-templates/{id}"
    API_V2_PLAYOUTHISTORY_ID = "/api/v2/playout-history/{id}"
    API_V2_PODCASTEPISODES = "/api/v2/podcast-episodes"
    API_V2_PODCASTEPISODES_ID = "/api/v2/podcast-episodes/{id}"
    API_V2_PODCASTS = "/api/v2/podcasts"
    API_V2_PODCASTS_ID = "/api/v2/podcasts/{id}"
    API_V2_PREFERENCES = "/api/v2/preferences"
    API_V2_PREFERENCES_ID = "/api/v2/preferences/{id}"
    API_V2_SCHEDULE = "/api/v2/schedule"
    API_V2_SCHEDULE_ID = "/api/v2/schedule/{id}"
    API_V2_SCHEMA = "/api/v2/schema"
    API_V2_SERVICEREGISTERS = "/api/v2/service-registers"
    API_V2_SERVICEREGISTERS_NAME = "/api/v2/service-registers/{name}"
    API_V2_SHOWDAYS = "/api/v2/show-days"
    API_V2_SHOWDAYS_ID = "/api/v2/show-days/{id}"
    API_V2_SHOWHOSTS = "/api/v2/show-hosts"
    API_V2_SHOWHOSTS_ID = "/api/v2/show-hosts/{id}"
    API_V2_SHOWINSTANCES = "/api/v2/show-instances"
    API_V2_SHOWINSTANCES_ID = "/api/v2/show-instances/{id}"
    API_V2_SHOWREBROADCASTS = "/api/v2/show-rebroadcasts"
    API_V2_SHOWREBROADCASTS_ID = "/api/v2/show-rebroadcasts/{id}"
    API_V2_SHOWS = "/api/v2/shows"
    API_V2_SHOWS_ID = "/api/v2/shows/{id}"
    API_V2_SMARTBLOCKCONTENTS = "/api/v2/smart-block-contents"
    API_V2_SMARTBLOCKCONTENTS_ID = "/api/v2/smart-block-contents/{id}"
    API_V2_SMARTBLOCKCRITERIA = "/api/v2/smart-block-criteria"
    API_V2_SMARTBLOCKCRITERIA_ID = "/api/v2/smart-block-criteria/{id}"
    API_V2_SMARTBLOCKS = "/api/v2/smart-blocks"
    API_V2_SMARTBLOCKS_ID = "/api/v2/smart-blocks/{id}"
    API_V2_STATIONPODCASTS = "/api/v2/station-podcasts"
    API_V2_STATIONPODCASTS_ID = "/api/v2/station-podcasts/{id}"
    API_V2_STREAM_PREFERENCES = "/api/v2/stream/preferences"
    API_V2_STREAM_STATE = "/api/v2/stream/state"
    API_V2_THIRDPARTYTRACKREFERENCES = "/api/v2/third-party-track-references"
    API_V2_THIRDPARTYTRACKREFERENCES_ID = "/api/v2/third-party-track-references/{id}"
    API_V2_TIMESTAMPS = "/api/v2/timestamps"
    API_V2_TIMESTAMPS_ID = "/api/v2/timestamps/{id}"
    API_V2_USERTOKENS = "/api/v2/user-tokens"
    API_V2_USERTOKENS_ID = "/api/v2/user-tokens/{id}"
    API_V2_USERS = "/api/v2/users"
    API_V2_USERS_ID = "/api/v2/users/{id}"
    API_V2_VERSION = "/api/v2/version"
    API_V2_WEBSTREAMMETADATA = "/api/v2/webstream-metadata"
    API_V2_WEBSTREAMMETADATA_ID = "/api/v2/webstream-metadata/{id}"
    API_V2_WEBSTREAMS = "/api/v2/webstreams"
    API_V2_WEBSTREAMS_ID = "/api/v2/webstreams/{id}"
