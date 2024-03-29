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


class PatchedShowInstance(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        
        class properties:
            id = schemas.IntSchema
            created_at = schemas.DateTimeSchema
            starts_at = schemas.DateTimeSchema
            ends_at = schemas.DateTimeSchema
            
            
            class filled_time(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'filled_time':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            
            
            class last_scheduled_at(
                schemas.DateTimeBase,
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                class MetaOapg:
                    format = 'date-time'
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, str, datetime, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'last_scheduled_at':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            
            
            class description(
                schemas.StrBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneStrMixin
            ):
            
            
                class MetaOapg:
                    max_length = 8192
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, str, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'description':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            modified = schemas.BoolSchema
            
            
            class rebroadcast(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 32767
                    inclusive_minimum = -32768
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'rebroadcast':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            auto_playlist_built = schemas.BoolSchema
            
            
            class record_enabled(
                schemas.ComposedSchema,
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 32767
                    inclusive_minimum = -32768
                    
                    @classmethod
                    @functools.lru_cache()
                    def one_of(cls):
                        # we need this here to make our import statements work
                        # we must store _composed_schemas in here so the code is only run
                        # when we invoke this method. If we kept this at the class
                        # level we would get an error because the class level
                        # code would be run when this module is imported, and these composed
                        # classes don't exist yet because their module has not finished
                        # loading
                        return [
                            RecordEnabledEnum,
                            NullEnum,
                        ]
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                    **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                ) -> 'record_enabled':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                        **kwargs,
                    )
            show = schemas.IntSchema
            
            
            class instance(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'instance':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            
            
            class record_file(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *_args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'record_file':
                    return super().__new__(
                        cls,
                        *_args,
                        _configuration=_configuration,
                    )
            __annotations__ = {
                "id": id,
                "created_at": created_at,
                "starts_at": starts_at,
                "ends_at": ends_at,
                "filled_time": filled_time,
                "last_scheduled_at": last_scheduled_at,
                "description": description,
                "modified": modified,
                "rebroadcast": rebroadcast,
                "auto_playlist_built": auto_playlist_built,
                "record_enabled": record_enabled,
                "show": show,
                "instance": instance,
                "record_file": record_file,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["created_at"]) -> MetaOapg.properties.created_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["starts_at"]) -> MetaOapg.properties.starts_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["ends_at"]) -> MetaOapg.properties.ends_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["filled_time"]) -> MetaOapg.properties.filled_time: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_scheduled_at"]) -> MetaOapg.properties.last_scheduled_at: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["description"]) -> MetaOapg.properties.description: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["modified"]) -> MetaOapg.properties.modified: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["rebroadcast"]) -> MetaOapg.properties.rebroadcast: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["auto_playlist_built"]) -> MetaOapg.properties.auto_playlist_built: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["record_enabled"]) -> MetaOapg.properties.record_enabled: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["show"]) -> MetaOapg.properties.show: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["instance"]) -> MetaOapg.properties.instance: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["record_file"]) -> MetaOapg.properties.record_file: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "created_at", "starts_at", "ends_at", "filled_time", "last_scheduled_at", "description", "modified", "rebroadcast", "auto_playlist_built", "record_enabled", "show", "instance", "record_file", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["created_at"]) -> typing.Union[MetaOapg.properties.created_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["starts_at"]) -> typing.Union[MetaOapg.properties.starts_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["ends_at"]) -> typing.Union[MetaOapg.properties.ends_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["filled_time"]) -> typing.Union[MetaOapg.properties.filled_time, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_scheduled_at"]) -> typing.Union[MetaOapg.properties.last_scheduled_at, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["description"]) -> typing.Union[MetaOapg.properties.description, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["modified"]) -> typing.Union[MetaOapg.properties.modified, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["rebroadcast"]) -> typing.Union[MetaOapg.properties.rebroadcast, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["auto_playlist_built"]) -> typing.Union[MetaOapg.properties.auto_playlist_built, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["record_enabled"]) -> typing.Union[MetaOapg.properties.record_enabled, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["show"]) -> typing.Union[MetaOapg.properties.show, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["instance"]) -> typing.Union[MetaOapg.properties.instance, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["record_file"]) -> typing.Union[MetaOapg.properties.record_file, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "created_at", "starts_at", "ends_at", "filled_time", "last_scheduled_at", "description", "modified", "rebroadcast", "auto_playlist_built", "record_enabled", "show", "instance", "record_file", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *_args: typing.Union[dict, frozendict.frozendict, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        created_at: typing.Union[MetaOapg.properties.created_at, str, datetime, schemas.Unset] = schemas.unset,
        starts_at: typing.Union[MetaOapg.properties.starts_at, str, datetime, schemas.Unset] = schemas.unset,
        ends_at: typing.Union[MetaOapg.properties.ends_at, str, datetime, schemas.Unset] = schemas.unset,
        filled_time: typing.Union[MetaOapg.properties.filled_time, None, str, schemas.Unset] = schemas.unset,
        last_scheduled_at: typing.Union[MetaOapg.properties.last_scheduled_at, None, str, datetime, schemas.Unset] = schemas.unset,
        description: typing.Union[MetaOapg.properties.description, None, str, schemas.Unset] = schemas.unset,
        modified: typing.Union[MetaOapg.properties.modified, bool, schemas.Unset] = schemas.unset,
        rebroadcast: typing.Union[MetaOapg.properties.rebroadcast, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        auto_playlist_built: typing.Union[MetaOapg.properties.auto_playlist_built, bool, schemas.Unset] = schemas.unset,
        record_enabled: typing.Union[MetaOapg.properties.record_enabled, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, schemas.Unset] = schemas.unset,
        show: typing.Union[MetaOapg.properties.show, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        instance: typing.Union[MetaOapg.properties.instance, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        record_file: typing.Union[MetaOapg.properties.record_file, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'PatchedShowInstance':
        return super().__new__(
            cls,
            *_args,
            id=id,
            created_at=created_at,
            starts_at=starts_at,
            ends_at=ends_at,
            filled_time=filled_time,
            last_scheduled_at=last_scheduled_at,
            description=description,
            modified=modified,
            rebroadcast=rebroadcast,
            auto_playlist_built=auto_playlist_built,
            record_enabled=record_enabled,
            show=show,
            instance=instance,
            record_file=record_file,
            _configuration=_configuration,
            **kwargs,
        )

from libretime_client.model.null_enum import NullEnum
from libretime_client.model.record_enabled_enum import RecordEnabledEnum
