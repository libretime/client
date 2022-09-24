from libretime_client.paths.api_v2_playlists_id.get import ApiForget
from libretime_client.paths.api_v2_playlists_id.put import ApiForput
from libretime_client.paths.api_v2_playlists_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playlists_id.patch import ApiForpatch


class ApiV2PlaylistsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
