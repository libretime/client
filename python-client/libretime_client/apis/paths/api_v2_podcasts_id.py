from libretime_client.paths.api_v2_podcasts_id.get import ApiForget
from libretime_client.paths.api_v2_podcasts_id.put import ApiForput
from libretime_client.paths.api_v2_podcasts_id.delete import ApiFordelete
from libretime_client.paths.api_v2_podcasts_id.patch import ApiForpatch


class ApiV2PodcastsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
