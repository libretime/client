# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_service_registers.post import ServiceRegistersCreate
from libretime_client.paths.api_v2_service_registers_name.delete import ServiceRegistersDestroy
from libretime_client.paths.api_v2_service_registers.get import ServiceRegistersList
from libretime_client.paths.api_v2_service_registers_name.patch import ServiceRegistersPartialUpdate
from libretime_client.paths.api_v2_service_registers_name.get import ServiceRegistersRetrieve
from libretime_client.paths.api_v2_service_registers_name.put import ServiceRegistersUpdate


class ServiceRegistersApi(
    ServiceRegistersCreate,
    ServiceRegistersDestroy,
    ServiceRegistersList,
    ServiceRegistersPartialUpdate,
    ServiceRegistersRetrieve,
    ServiceRegistersUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
