from libretime_client.paths.api_v2_webstreams_id.get import ApiForget
from libretime_client.paths.api_v2_webstreams_id.put import ApiForput
from libretime_client.paths.api_v2_webstreams_id.delete import ApiFordelete
from libretime_client.paths.api_v2_webstreams_id.patch import ApiForpatch


class ApiV2WebstreamsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
