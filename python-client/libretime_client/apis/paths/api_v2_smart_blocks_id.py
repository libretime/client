from libretime_client.paths.api_v2_smart_blocks_id.get import ApiForget
from libretime_client.paths.api_v2_smart_blocks_id.put import ApiForput
from libretime_client.paths.api_v2_smart_blocks_id.delete import ApiFordelete
from libretime_client.paths.api_v2_smart_blocks_id.patch import ApiForpatch


class ApiV2SmartBlocksId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
