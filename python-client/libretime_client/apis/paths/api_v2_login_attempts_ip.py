from libretime_client.paths.api_v2_login_attempts_ip.get import ApiForget
from libretime_client.paths.api_v2_login_attempts_ip.put import ApiForput
from libretime_client.paths.api_v2_login_attempts_ip.delete import ApiFordelete
from libretime_client.paths.api_v2_login_attempts_ip.patch import ApiForpatch


class ApiV2LoginAttemptsIp(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
