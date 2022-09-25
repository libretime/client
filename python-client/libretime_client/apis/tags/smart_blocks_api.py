# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_smart_blocks.post import SmartBlocksCreate
from libretime_client.paths.api_v2_smart_blocks_id.delete import SmartBlocksDestroy
from libretime_client.paths.api_v2_smart_blocks.get import SmartBlocksList
from libretime_client.paths.api_v2_smart_blocks_id.patch import SmartBlocksPartialUpdate
from libretime_client.paths.api_v2_smart_blocks_id.get import SmartBlocksRetrieve
from libretime_client.paths.api_v2_smart_blocks_id.put import SmartBlocksUpdate


class SmartBlocksApi(
    SmartBlocksCreate,
    SmartBlocksDestroy,
    SmartBlocksList,
    SmartBlocksPartialUpdate,
    SmartBlocksRetrieve,
    SmartBlocksUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass