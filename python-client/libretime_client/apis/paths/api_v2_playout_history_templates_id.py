from libretime_client.paths.api_v2_playout_history_templates_id.get import ApiForget
from libretime_client.paths.api_v2_playout_history_templates_id.put import ApiForput
from libretime_client.paths.api_v2_playout_history_templates_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playout_history_templates_id.patch import ApiForpatch


class ApiV2PlayoutHistoryTemplatesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
