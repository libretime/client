from libretime_client.paths.api_v2_timestamps_id.get import ApiForget
from libretime_client.paths.api_v2_timestamps_id.put import ApiForput
from libretime_client.paths.api_v2_timestamps_id.delete import ApiFordelete
from libretime_client.paths.api_v2_timestamps_id.patch import ApiForpatch


class ApiV2TimestampsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
