from libretime_client.paths.api_v2_third_party_track_references_id.get import ApiForget
from libretime_client.paths.api_v2_third_party_track_references_id.put import ApiForput
from libretime_client.paths.api_v2_third_party_track_references_id.delete import ApiFordelete
from libretime_client.paths.api_v2_third_party_track_references_id.patch import ApiForpatch


class ApiV2ThirdPartyTrackReferencesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
