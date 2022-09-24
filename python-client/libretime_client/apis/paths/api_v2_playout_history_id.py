from libretime_client.paths.api_v2_playout_history_id.get import ApiForget
from libretime_client.paths.api_v2_playout_history_id.put import ApiForput
from libretime_client.paths.api_v2_playout_history_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playout_history_id.patch import ApiForpatch


class ApiV2PlayoutHistoryId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
