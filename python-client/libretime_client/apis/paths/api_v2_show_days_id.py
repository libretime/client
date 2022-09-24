from libretime_client.paths.api_v2_show_days_id.get import ApiForget
from libretime_client.paths.api_v2_show_days_id.put import ApiForput
from libretime_client.paths.api_v2_show_days_id.delete import ApiFordelete
from libretime_client.paths.api_v2_show_days_id.patch import ApiForpatch


class ApiV2ShowDaysId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
