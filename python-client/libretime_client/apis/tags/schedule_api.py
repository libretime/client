# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_schedule.post import ScheduleCreate
from libretime_client.paths.api_v2_schedule_id.delete import ScheduleDestroy
from libretime_client.paths.api_v2_schedule.get import ScheduleList
from libretime_client.paths.api_v2_schedule_id.patch import SchedulePartialUpdate
from libretime_client.paths.api_v2_schedule_id.get import ScheduleRetrieve
from libretime_client.paths.api_v2_schedule_id.put import ScheduleUpdate


class ScheduleApi(
    ScheduleCreate,
    ScheduleDestroy,
    ScheduleList,
    SchedulePartialUpdate,
    ScheduleRetrieve,
    ScheduleUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
