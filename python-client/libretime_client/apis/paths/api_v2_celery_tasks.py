from libretime_client.paths.api_v2_celery_tasks.get import ApiForget
from libretime_client.paths.api_v2_celery_tasks.post import ApiForpost


class ApiV2CeleryTasks(
    ApiForget,
    ApiForpost,
):
    pass
