# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from libretime_client import schemas  # noqa: F401


class RoleEnum(
    schemas.EnumBase,
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    * `G` - Guest
* `H` - Host
* `P` - Manager
* `A` - Admin
    """


    class MetaOapg:
        enum_value_to_name = {
            "G": "G",
            "H": "H",
            "P": "P",
            "A": "A",
        }
    
    @schemas.classproperty
    def G(cls):
        return cls("G")
    
    @schemas.classproperty
    def H(cls):
        return cls("H")
    
    @schemas.classproperty
    def P(cls):
        return cls("P")
    
    @schemas.classproperty
    def A(cls):
        return cls("A")
