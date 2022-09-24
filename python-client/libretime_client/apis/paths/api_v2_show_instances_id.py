from libretime_client.paths.api_v2_show_instances_id.get import ApiForget
from libretime_client.paths.api_v2_show_instances_id.put import ApiForput
from libretime_client.paths.api_v2_show_instances_id.delete import ApiFordelete
from libretime_client.paths.api_v2_show_instances_id.patch import ApiForpatch


class ApiV2ShowInstancesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
