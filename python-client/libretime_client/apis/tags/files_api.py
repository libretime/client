# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_files.post import FilesCreate
from libretime_client.paths.api_v2_files_id.delete import FilesDestroy
from libretime_client.paths.api_v2_files_id_download.get import FilesDownloadRetrieve
from libretime_client.paths.api_v2_files.get import FilesList
from libretime_client.paths.api_v2_files_id.patch import FilesPartialUpdate
from libretime_client.paths.api_v2_files_id.get import FilesRetrieve
from libretime_client.paths.api_v2_files_id.put import FilesUpdate


class FilesApi(
    FilesCreate,
    FilesDestroy,
    FilesDownloadRetrieve,
    FilesList,
    FilesPartialUpdate,
    FilesRetrieve,
    FilesUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
