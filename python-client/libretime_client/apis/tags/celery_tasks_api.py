# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_celery_tasks.post import CeleryTasksCreate
from libretime_client.paths.api_v2_celery_tasks_id.delete import CeleryTasksDestroy
from libretime_client.paths.api_v2_celery_tasks.get import CeleryTasksList
from libretime_client.paths.api_v2_celery_tasks_id.patch import CeleryTasksPartialUpdate
from libretime_client.paths.api_v2_celery_tasks_id.get import CeleryTasksRetrieve
from libretime_client.paths.api_v2_celery_tasks_id.put import CeleryTasksUpdate


class CeleryTasksApi(
    CeleryTasksCreate,
    CeleryTasksDestroy,
    CeleryTasksList,
    CeleryTasksPartialUpdate,
    CeleryTasksRetrieve,
    CeleryTasksUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
