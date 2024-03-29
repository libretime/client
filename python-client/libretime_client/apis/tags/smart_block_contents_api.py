# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_smart_block_contents.post import SmartBlockContentsCreate
from libretime_client.paths.api_v2_smart_block_contents_id.delete import SmartBlockContentsDestroy
from libretime_client.paths.api_v2_smart_block_contents.get import SmartBlockContentsList
from libretime_client.paths.api_v2_smart_block_contents_id.patch import SmartBlockContentsPartialUpdate
from libretime_client.paths.api_v2_smart_block_contents_id.get import SmartBlockContentsRetrieve
from libretime_client.paths.api_v2_smart_block_contents_id.put import SmartBlockContentsUpdate


class SmartBlockContentsApi(
    SmartBlockContentsCreate,
    SmartBlockContentsDestroy,
    SmartBlockContentsList,
    SmartBlockContentsPartialUpdate,
    SmartBlockContentsRetrieve,
    SmartBlockContentsUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
