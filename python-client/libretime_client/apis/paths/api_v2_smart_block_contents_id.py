from libretime_client.paths.api_v2_smart_block_contents_id.get import ApiForget
from libretime_client.paths.api_v2_smart_block_contents_id.put import ApiForput
from libretime_client.paths.api_v2_smart_block_contents_id.delete import ApiFordelete
from libretime_client.paths.api_v2_smart_block_contents_id.patch import ApiForpatch


class ApiV2SmartBlockContentsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
