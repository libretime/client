from libretime_client.paths.api_v2_schedule_id.get import ApiForget
from libretime_client.paths.api_v2_schedule_id.put import ApiForput
from libretime_client.paths.api_v2_schedule_id.delete import ApiFordelete
from libretime_client.paths.api_v2_schedule_id.patch import ApiForpatch


class ApiV2ScheduleId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
