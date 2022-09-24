from libretime_client.paths.api_v2_show_hosts_id.get import ApiForget
from libretime_client.paths.api_v2_show_hosts_id.put import ApiForput
from libretime_client.paths.api_v2_show_hosts_id.delete import ApiFordelete
from libretime_client.paths.api_v2_show_hosts_id.patch import ApiForpatch


class ApiV2ShowHostsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
