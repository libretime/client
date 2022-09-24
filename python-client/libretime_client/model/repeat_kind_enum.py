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


class RepeatKindEnum(
    schemas.EnumBase,
    schemas.IntSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        enum_value_to_name = {
            0: "POSITIVE_0",
            1: "POSITIVE_1",
            4: "POSITIVE_4",
            5: "POSITIVE_5",
            2: "POSITIVE_2",
        }
    
    @schemas.classproperty
    def POSITIVE_0(cls):
        return cls(0)
    
    @schemas.classproperty
    def POSITIVE_1(cls):
        return cls(1)
    
    @schemas.classproperty
    def POSITIVE_4(cls):
        return cls(4)
    
    @schemas.classproperty
    def POSITIVE_5(cls):
        return cls(5)
    
    @schemas.classproperty
    def POSITIVE_2(cls):
        return cls(2)
