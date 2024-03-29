# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_login_attempts.post import LoginAttemptsCreate
from libretime_client.paths.api_v2_login_attempts_ip.delete import LoginAttemptsDestroy
from libretime_client.paths.api_v2_login_attempts.get import LoginAttemptsList
from libretime_client.paths.api_v2_login_attempts_ip.patch import LoginAttemptsPartialUpdate
from libretime_client.paths.api_v2_login_attempts_ip.get import LoginAttemptsRetrieve
from libretime_client.paths.api_v2_login_attempts_ip.put import LoginAttemptsUpdate


class LoginAttemptsApi(
    LoginAttemptsCreate,
    LoginAttemptsDestroy,
    LoginAttemptsList,
    LoginAttemptsPartialUpdate,
    LoginAttemptsRetrieve,
    LoginAttemptsUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass
