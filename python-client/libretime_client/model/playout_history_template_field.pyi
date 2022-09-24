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


class PlayoutHistoryTemplateField(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "template",
            "is_file_md",
            "name",
            "id",
            "label",
            "position",
            "type",
        }
        
        class properties:
            id = schemas.IntSchema
            
            
            class name(
                schemas.StrSchema
            ):
                pass
            
            
            class label(
                schemas.StrSchema
            ):
                pass
            
            
            class type(
                schemas.StrSchema
            ):
                pass
            is_file_md = schemas.BoolSchema
            
            
            class position(
                schemas.IntSchema
            ):
                pass
            template = schemas.IntSchema
            __annotations__ = {
                "id": id,
                "name": name,
                "label": label,
                "type": type,
                "is_file_md": is_file_md,
                "position": position,
                "template": template,
            }
    
    template: MetaOapg.properties.template
    is_file_md: MetaOapg.properties.is_file_md
    name: MetaOapg.properties.name
    id: MetaOapg.properties.id
    label: MetaOapg.properties.label
    position: MetaOapg.properties.position
    type: MetaOapg.properties.type
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["label"]) -> MetaOapg.properties.label: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["type"]) -> MetaOapg.properties.type: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["is_file_md"]) -> MetaOapg.properties.is_file_md: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["position"]) -> MetaOapg.properties.position: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["template"]) -> MetaOapg.properties.template: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "name", "label", "type", "is_file_md", "position", "template", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["label"]) -> MetaOapg.properties.label: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["type"]) -> MetaOapg.properties.type: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["is_file_md"]) -> MetaOapg.properties.is_file_md: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["position"]) -> MetaOapg.properties.position: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["template"]) -> MetaOapg.properties.template: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "name", "label", "type", "is_file_md", "position", "template", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        template: typing.Union[MetaOapg.properties.template, decimal.Decimal, int, ],
        is_file_md: typing.Union[MetaOapg.properties.is_file_md, bool, ],
        name: typing.Union[MetaOapg.properties.name, str, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, ],
        label: typing.Union[MetaOapg.properties.label, str, ],
        position: typing.Union[MetaOapg.properties.position, decimal.Decimal, int, ],
        type: typing.Union[MetaOapg.properties.type, str, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'PlayoutHistoryTemplateField':
        return super().__new__(
            cls,
            *args,
            template=template,
            is_file_md=is_file_md,
            name=name,
            id=id,
            label=label,
            position=position,
            type=type,
            _configuration=_configuration,
            **kwargs,
        )
