from libretime_client.paths.api_v2_smart_block_criteria_id.get import ApiForget
from libretime_client.paths.api_v2_smart_block_criteria_id.put import ApiForput
from libretime_client.paths.api_v2_smart_block_criteria_id.delete import ApiFordelete
from libretime_client.paths.api_v2_smart_block_criteria_id.patch import ApiForpatch


class ApiV2SmartBlockCriteriaId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
