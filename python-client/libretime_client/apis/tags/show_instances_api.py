# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_show_instances.post import ShowInstancesCreate
from libretime_client.paths.api_v2_show_instances_id.delete import ShowInstancesDestroy
from libretime_client.paths.api_v2_show_instances.get import ShowInstancesList
from libretime_client.paths.api_v2_show_instances_id.patch import ShowInstancesPartialUpdate
from libretime_client.paths.api_v2_show_instances_id.get import ShowInstancesRetrieve
from libretime_client.paths.api_v2_show_instances_id.put import ShowInstancesUpdate


class ShowInstancesApi(
    ShowInstancesCreate,
    ShowInstancesDestroy,
    ShowInstancesList,
    ShowInstancesPartialUpdate,
    ShowInstancesRetrieve,
    ShowInstancesUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
