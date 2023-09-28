# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class RoleEnum(str, Enum):
    """
    * `G` - Guest * `H` - Host * `P` - Manager * `A` - Admin
    """

    """
    allowed enum values
    """
    G = 'G'
    H = 'H'
    P = 'P'
    A = 'A'

    @classmethod
    def from_json(cls, json_str: str) -> RoleEnum:
        """Create an instance of RoleEnum from a JSON string"""
        return RoleEnum(json.loads(json_str))


