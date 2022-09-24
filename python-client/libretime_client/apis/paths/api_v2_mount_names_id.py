from libretime_client.paths.api_v2_mount_names_id.get import ApiForget
from libretime_client.paths.api_v2_mount_names_id.put import ApiForput
from libretime_client.paths.api_v2_mount_names_id.delete import ApiFordelete
from libretime_client.paths.api_v2_mount_names_id.patch import ApiForpatch


class ApiV2MountNamesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
