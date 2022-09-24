from libretime_client.paths.api_v2_listener_counts_id.get import ApiForget
from libretime_client.paths.api_v2_listener_counts_id.put import ApiForput
from libretime_client.paths.api_v2_listener_counts_id.delete import ApiFordelete
from libretime_client.paths.api_v2_listener_counts_id.patch import ApiForpatch


class ApiV2ListenerCountsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
