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


class SmartBlockCriteria(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "condition",
            "criteria",
            "block",
            "id",
            "value",
        }
        
        class properties:
            id = schemas.IntSchema
            
            
            class criteria(
                schemas.StrSchema
            ):
                pass
            
            
            class condition(
                schemas.StrSchema
            ):
                pass
            
            
            class value(
                schemas.StrSchema
            ):
                pass
            block = schemas.IntSchema
            
            
            class group(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                class MetaOapg:
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'group':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class extra(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                class MetaOapg:
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'extra':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            __annotations__ = {
                "id": id,
                "criteria": criteria,
                "condition": condition,
                "value": value,
                "block": block,
                "group": group,
                "extra": extra,
            }
    
    condition: MetaOapg.properties.condition
    criteria: MetaOapg.properties.criteria
    block: MetaOapg.properties.block
    id: MetaOapg.properties.id
    value: MetaOapg.properties.value
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["criteria"]) -> MetaOapg.properties.criteria: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["condition"]) -> MetaOapg.properties.condition: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["value"]) -> MetaOapg.properties.value: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["block"]) -> MetaOapg.properties.block: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["group"]) -> MetaOapg.properties.group: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["extra"]) -> MetaOapg.properties.extra: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "criteria", "condition", "value", "block", "group", "extra", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["criteria"]) -> MetaOapg.properties.criteria: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["condition"]) -> MetaOapg.properties.condition: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["value"]) -> MetaOapg.properties.value: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["block"]) -> MetaOapg.properties.block: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["group"]) -> typing.Union[MetaOapg.properties.group, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["extra"]) -> typing.Union[MetaOapg.properties.extra, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "criteria", "condition", "value", "block", "group", "extra", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        condition: typing.Union[MetaOapg.properties.condition, str, ],
        criteria: typing.Union[MetaOapg.properties.criteria, str, ],
        block: typing.Union[MetaOapg.properties.block, decimal.Decimal, int, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, ],
        value: typing.Union[MetaOapg.properties.value, str, ],
        group: typing.Union[MetaOapg.properties.group, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        extra: typing.Union[MetaOapg.properties.extra, None, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SmartBlockCriteria':
        return super().__new__(
            cls,
            *args,
            condition=condition,
            criteria=criteria,
            block=block,
            id=id,
            value=value,
            group=group,
            extra=extra,
            _configuration=_configuration,
            **kwargs,
        )