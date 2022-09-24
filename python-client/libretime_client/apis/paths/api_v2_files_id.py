from libretime_client.paths.api_v2_files_id.get import ApiForget
from libretime_client.paths.api_v2_files_id.put import ApiForput
from libretime_client.paths.api_v2_files_id.delete import ApiFordelete
from libretime_client.paths.api_v2_files_id.patch import ApiForpatch


class ApiV2FilesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
