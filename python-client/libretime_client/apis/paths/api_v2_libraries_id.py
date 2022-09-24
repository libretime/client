from libretime_client.paths.api_v2_libraries_id.get import ApiForget
from libretime_client.paths.api_v2_libraries_id.put import ApiForput
from libretime_client.paths.api_v2_libraries_id.delete import ApiFordelete
from libretime_client.paths.api_v2_libraries_id.patch import ApiForpatch


class ApiV2LibrariesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
