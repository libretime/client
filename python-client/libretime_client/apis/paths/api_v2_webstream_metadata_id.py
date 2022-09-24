from libretime_client.paths.api_v2_webstream_metadata_id.get import ApiForget
from libretime_client.paths.api_v2_webstream_metadata_id.put import ApiForput
from libretime_client.paths.api_v2_webstream_metadata_id.delete import ApiFordelete
from libretime_client.paths.api_v2_webstream_metadata_id.patch import ApiForpatch


class ApiV2WebstreamMetadataId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
