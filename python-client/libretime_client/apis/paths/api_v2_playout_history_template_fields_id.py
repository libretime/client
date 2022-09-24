from libretime_client.paths.api_v2_playout_history_template_fields_id.get import ApiForget
from libretime_client.paths.api_v2_playout_history_template_fields_id.put import ApiForput
from libretime_client.paths.api_v2_playout_history_template_fields_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playout_history_template_fields_id.patch import ApiForpatch


class ApiV2PlayoutHistoryTemplateFieldsId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
