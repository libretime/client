from libretime_client.paths.api_v2_playout_history_metadata_id.get import ApiForget
from libretime_client.paths.api_v2_playout_history_metadata_id.put import ApiForput
from libretime_client.paths.api_v2_playout_history_metadata_id.delete import ApiFordelete
from libretime_client.paths.api_v2_playout_history_metadata_id.patch import ApiForpatch


class ApiV2PlayoutHistoryMetadataId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
