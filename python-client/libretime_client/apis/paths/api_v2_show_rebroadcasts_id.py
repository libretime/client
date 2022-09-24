from libretime_client.paths.api_v2_show_rebroadcasts_id.get import ApiForget
from libretime_client.paths.api_v2_show_rebroadcasts_id.put import ApiForput
from libretime_client.paths.api_v2_show_rebroadcasts_id.delete import ApiFordelete
from libretime_client.paths.api_v2_show_rebroadcasts_id.patch import ApiForpatch


class ApiV2ShowRebroadcastsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
