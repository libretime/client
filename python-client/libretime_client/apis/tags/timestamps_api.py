# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_timestamps.post import TimestampsCreate
from libretime_client.paths.api_v2_timestamps_id.delete import TimestampsDestroy
from libretime_client.paths.api_v2_timestamps.get import TimestampsList
from libretime_client.paths.api_v2_timestamps_id.patch import TimestampsPartialUpdate
from libretime_client.paths.api_v2_timestamps_id.get import TimestampsRetrieve
from libretime_client.paths.api_v2_timestamps_id.put import TimestampsUpdate


class TimestampsApi(
    TimestampsCreate,
    TimestampsDestroy,
    TimestampsList,
    TimestampsPartialUpdate,
    TimestampsRetrieve,
    TimestampsUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
