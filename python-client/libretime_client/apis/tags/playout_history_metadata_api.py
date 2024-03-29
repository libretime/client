# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_playout_history_metadata.post import PlayoutHistoryMetadataCreate
from libretime_client.paths.api_v2_playout_history_metadata_id.delete import PlayoutHistoryMetadataDestroy
from libretime_client.paths.api_v2_playout_history_metadata.get import PlayoutHistoryMetadataList
from libretime_client.paths.api_v2_playout_history_metadata_id.patch import PlayoutHistoryMetadataPartialUpdate
from libretime_client.paths.api_v2_playout_history_metadata_id.get import PlayoutHistoryMetadataRetrieve
from libretime_client.paths.api_v2_playout_history_metadata_id.put import PlayoutHistoryMetadataUpdate


class PlayoutHistoryMetadataApi(
    PlayoutHistoryMetadataCreate,
    PlayoutHistoryMetadataDestroy,
    PlayoutHistoryMetadataList,
    PlayoutHistoryMetadataPartialUpdate,
    PlayoutHistoryMetadataRetrieve,
    PlayoutHistoryMetadataUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
