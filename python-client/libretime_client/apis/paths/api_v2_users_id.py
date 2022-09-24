from libretime_client.paths.api_v2_users_id.get import ApiForget
from libretime_client.paths.api_v2_users_id.put import ApiForput
from libretime_client.paths.api_v2_users_id.delete import ApiFordelete
from libretime_client.paths.api_v2_users_id.patch import ApiForpatch


class ApiV2UsersId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
