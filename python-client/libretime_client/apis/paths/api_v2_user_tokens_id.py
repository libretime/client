from libretime_client.paths.api_v2_user_tokens_id.get import ApiForget
from libretime_client.paths.api_v2_user_tokens_id.put import ApiForput
from libretime_client.paths.api_v2_user_tokens_id.delete import ApiFordelete
from libretime_client.paths.api_v2_user_tokens_id.patch import ApiForpatch


class ApiV2UserTokensId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
