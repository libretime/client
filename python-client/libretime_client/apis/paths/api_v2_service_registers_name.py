from libretime_client.paths.api_v2_service_registers_name.get import ApiForget
from libretime_client.paths.api_v2_service_registers_name.put import ApiForput
from libretime_client.paths.api_v2_service_registers_name.delete import ApiFordelete
from libretime_client.paths.api_v2_service_registers_name.patch import ApiForpatch


class ApiV2ServiceRegistersName(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
