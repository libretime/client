from libretime_client.paths.api_v2_celery_tasks_id.get import ApiForget
from libretime_client.paths.api_v2_celery_tasks_id.put import ApiForput
from libretime_client.paths.api_v2_celery_tasks_id.delete import ApiFordelete
from libretime_client.paths.api_v2_celery_tasks_id.patch import ApiForpatch


class ApiV2CeleryTasksId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
