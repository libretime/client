from libretime_client.paths.api_v2_playlist_contents_id.get import ApiForget
from libretime_client.paths.api_v2_playlist_contents_id.put import ApiForput
from libretime_client.paths.api_v2_playlist_contents_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playlist_contents_id.patch import ApiForpatch


class ApiV2PlaylistContentsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
