from libretime_client.paths.api_v2_shows_id.get import ApiForget
from libretime_client.paths.api_v2_shows_id.put import ApiForput
from libretime_client.paths.api_v2_shows_id.delete import ApiFordelete
from libretime_client.paths.api_v2_shows_id.patch import ApiForpatch


class ApiV2ShowsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
