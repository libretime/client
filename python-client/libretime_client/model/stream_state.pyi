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


class StreamState(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "input_show_streaming",
            "input_show_connected",
            "schedule_streaming",
            "input_main_streaming",
            "input_main_connected",
        }
        
        class properties:
            input_main_connected = schemas.BoolSchema
            input_main_streaming = schemas.BoolSchema
            input_show_connected = schemas.BoolSchema
            input_show_streaming = schemas.BoolSchema
            schedule_streaming = schemas.BoolSchema
            __annotations__ = {
                "input_main_connected": input_main_connected,
                "input_main_streaming": input_main_streaming,
                "input_show_connected": input_show_connected,
                "input_show_streaming": input_show_streaming,
                "schedule_streaming": schedule_streaming,
            }
    
    input_show_streaming: MetaOapg.properties.input_show_streaming
    input_show_connected: MetaOapg.properties.input_show_connected
    schedule_streaming: MetaOapg.properties.schedule_streaming
    input_main_streaming: MetaOapg.properties.input_main_streaming
    input_main_connected: MetaOapg.properties.input_main_connected
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["input_main_connected"]) -> MetaOapg.properties.input_main_connected: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["input_main_streaming"]) -> MetaOapg.properties.input_main_streaming: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["input_show_connected"]) -> MetaOapg.properties.input_show_connected: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["input_show_streaming"]) -> MetaOapg.properties.input_show_streaming: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["schedule_streaming"]) -> MetaOapg.properties.schedule_streaming: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["input_main_connected", "input_main_streaming", "input_show_connected", "input_show_streaming", "schedule_streaming", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["input_main_connected"]) -> MetaOapg.properties.input_main_connected: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["input_main_streaming"]) -> MetaOapg.properties.input_main_streaming: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["input_show_connected"]) -> MetaOapg.properties.input_show_connected: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["input_show_streaming"]) -> MetaOapg.properties.input_show_streaming: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["schedule_streaming"]) -> MetaOapg.properties.schedule_streaming: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["input_main_connected", "input_main_streaming", "input_show_connected", "input_show_streaming", "schedule_streaming", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        input_show_streaming: typing.Union[MetaOapg.properties.input_show_streaming, bool, ],
        input_show_connected: typing.Union[MetaOapg.properties.input_show_connected, bool, ],
        schedule_streaming: typing.Union[MetaOapg.properties.schedule_streaming, bool, ],
        input_main_streaming: typing.Union[MetaOapg.properties.input_main_streaming, bool, ],
        input_main_connected: typing.Union[MetaOapg.properties.input_main_connected, bool, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'StreamState':
        return super().__new__(
            cls,
            *args,
            input_show_streaming=input_show_streaming,
            input_show_connected=input_show_connected,
            schedule_streaming=schedule_streaming,
            input_main_streaming=input_main_streaming,
            input_main_connected=input_main_connected,
            _configuration=_configuration,
            **kwargs,
        )