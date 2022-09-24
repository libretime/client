from libretime_client.paths.api_v2_preferences_id.get import ApiForget
from libretime_client.paths.api_v2_preferences_id.put import ApiForput
from libretime_client.paths.api_v2_preferences_id.delete import ApiFordelete
from libretime_client.paths.api_v2_preferences_id.patch import ApiForpatch


class ApiV2PreferencesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
