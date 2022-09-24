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


class WebstreamMetadata(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "schedule",
            "starts_at",
            "data",
            "id",
        }
        
        class properties:
            id = schemas.IntSchema
            starts_at = schemas.DateTimeSchema
            
            
            class data(
                schemas.StrSchema
            ):
                pass
            schedule = schemas.IntSchema
            __annotations__ = {
                "id": id,
                "starts_at": starts_at,
                "data": data,
                "schedule": schedule,
            }
    
    schedule: MetaOapg.properties.schedule
    starts_at: MetaOapg.properties.starts_at
    data: MetaOapg.properties.data
    id: MetaOapg.properties.id
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["starts_at"]) -> MetaOapg.properties.starts_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["data"]) -> MetaOapg.properties.data: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["schedule"]) -> MetaOapg.properties.schedule: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "starts_at", "data", "schedule", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["starts_at"]) -> MetaOapg.properties.starts_at: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["data"]) -> MetaOapg.properties.data: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["schedule"]) -> MetaOapg.properties.schedule: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "starts_at", "data", "schedule", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        schedule: typing.Union[MetaOapg.properties.schedule, decimal.Decimal, int, ],
        starts_at: typing.Union[MetaOapg.properties.starts_at, str, datetime, ],
        data: typing.Union[MetaOapg.properties.data, str, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'WebstreamMetadata':
        return super().__new__(
            cls,
            *args,
            schedule=schedule,
            starts_at=starts_at,
            data=data,
            id=id,
            _configuration=_configuration,
            **kwargs,
        )
