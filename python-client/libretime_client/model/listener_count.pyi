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


class ListenerCount(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "mount_name",
            "id",
            "listener_count",
            "timestamp",
        }
        
        class properties:
            id = schemas.IntSchema
            
            
            class listener_count(
                schemas.IntSchema
            ):
                pass
            timestamp = schemas.IntSchema
            mount_name = schemas.IntSchema
            __annotations__ = {
                "id": id,
                "listener_count": listener_count,
                "timestamp": timestamp,
                "mount_name": mount_name,
            }
    
    mount_name: MetaOapg.properties.mount_name
    id: MetaOapg.properties.id
    listener_count: MetaOapg.properties.listener_count
    timestamp: MetaOapg.properties.timestamp
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["listener_count"]) -> MetaOapg.properties.listener_count: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["timestamp"]) -> MetaOapg.properties.timestamp: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["mount_name"]) -> MetaOapg.properties.mount_name: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "listener_count", "timestamp", "mount_name", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["listener_count"]) -> MetaOapg.properties.listener_count: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["timestamp"]) -> MetaOapg.properties.timestamp: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["mount_name"]) -> MetaOapg.properties.mount_name: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "listener_count", "timestamp", "mount_name", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        mount_name: typing.Union[MetaOapg.properties.mount_name, decimal.Decimal, int, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, ],
        listener_count: typing.Union[MetaOapg.properties.listener_count, decimal.Decimal, int, ],
        timestamp: typing.Union[MetaOapg.properties.timestamp, decimal.Decimal, int, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ListenerCount':
        return super().__new__(
            cls,
            *args,
            mount_name=mount_name,
            id=id,
            listener_count=listener_count,
            timestamp=timestamp,
            _configuration=_configuration,
            **kwargs,
        )
