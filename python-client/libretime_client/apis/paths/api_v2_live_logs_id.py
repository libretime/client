from libretime_client.paths.api_v2_live_logs_id.get import ApiForget
from libretime_client.paths.api_v2_live_logs_id.put import ApiForput
from libretime_client.paths.api_v2_live_logs_id.delete import ApiFordelete
from libretime_client.paths.api_v2_live_logs_id.patch import ApiForpatch


class ApiV2LiveLogsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
