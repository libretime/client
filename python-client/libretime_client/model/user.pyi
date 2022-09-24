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


class User(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "role",
            "last_name",
            "id",
            "first_name",
            "username",
        }
        
        class properties:
            id = schemas.IntSchema
        
            @staticmethod
            def role() -> typing.Type['RoleEnum']:
                return RoleEnum
            
            
            class username(
                schemas.StrSchema
            ):
                pass
            
            
            class first_name(
                schemas.StrSchema
            ):
                pass
            
            
            class last_name(
                schemas.StrSchema
            ):
                pass
            
            
            class email(
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
                ) -> 'email':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class login_attempts(
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
                ) -> 'login_attempts':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class last_login(
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
                    *args: typing.Union[None, str, datetime, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'last_login':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class last_failed_login(
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
                    *args: typing.Union[None, str, datetime, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'last_failed_login':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class skype(
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
                ) -> 'skype':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class jabber(
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
                ) -> 'jabber':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class phone(
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
                ) -> 'phone':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            __annotations__ = {
                "id": id,
                "role": role,
                "username": username,
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "login_attempts": login_attempts,
                "last_login": last_login,
                "last_failed_login": last_failed_login,
                "skype": skype,
                "jabber": jabber,
                "phone": phone,
            }
    
    role: 'RoleEnum'
    last_name: MetaOapg.properties.last_name
    id: MetaOapg.properties.id
    first_name: MetaOapg.properties.first_name
    username: MetaOapg.properties.username
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["role"]) -> 'RoleEnum': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["username"]) -> MetaOapg.properties.username: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["first_name"]) -> MetaOapg.properties.first_name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_name"]) -> MetaOapg.properties.last_name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["email"]) -> MetaOapg.properties.email: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["login_attempts"]) -> MetaOapg.properties.login_attempts: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_login"]) -> MetaOapg.properties.last_login: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["last_failed_login"]) -> MetaOapg.properties.last_failed_login: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["skype"]) -> MetaOapg.properties.skype: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["jabber"]) -> MetaOapg.properties.jabber: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["phone"]) -> MetaOapg.properties.phone: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id", "role", "username", "first_name", "last_name", "email", "login_attempts", "last_login", "last_failed_login", "skype", "jabber", "phone", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["role"]) -> 'RoleEnum': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["username"]) -> MetaOapg.properties.username: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["first_name"]) -> MetaOapg.properties.first_name: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_name"]) -> MetaOapg.properties.last_name: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["email"]) -> typing.Union[MetaOapg.properties.email, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["login_attempts"]) -> typing.Union[MetaOapg.properties.login_attempts, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_login"]) -> typing.Union[MetaOapg.properties.last_login, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["last_failed_login"]) -> typing.Union[MetaOapg.properties.last_failed_login, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["skype"]) -> typing.Union[MetaOapg.properties.skype, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["jabber"]) -> typing.Union[MetaOapg.properties.jabber, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["phone"]) -> typing.Union[MetaOapg.properties.phone, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id", "role", "username", "first_name", "last_name", "email", "login_attempts", "last_login", "last_failed_login", "skype", "jabber", "phone", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        role: 'RoleEnum',
        last_name: typing.Union[MetaOapg.properties.last_name, str, ],
        id: typing.Union[MetaOapg.properties.id, decimal.Decimal, int, ],
        first_name: typing.Union[MetaOapg.properties.first_name, str, ],
        username: typing.Union[MetaOapg.properties.username, str, ],
        email: typing.Union[MetaOapg.properties.email, None, str, schemas.Unset] = schemas.unset,
        login_attempts: typing.Union[MetaOapg.properties.login_attempts, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        last_login: typing.Union[MetaOapg.properties.last_login, None, str, datetime, schemas.Unset] = schemas.unset,
        last_failed_login: typing.Union[MetaOapg.properties.last_failed_login, None, str, datetime, schemas.Unset] = schemas.unset,
        skype: typing.Union[MetaOapg.properties.skype, None, str, schemas.Unset] = schemas.unset,
        jabber: typing.Union[MetaOapg.properties.jabber, None, str, schemas.Unset] = schemas.unset,
        phone: typing.Union[MetaOapg.properties.phone, None, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'User':
        return super().__new__(
            cls,
            *args,
            role=role,
            last_name=last_name,
            id=id,
            first_name=first_name,
            username=username,
            email=email,
            login_attempts=login_attempts,
            last_login=last_login,
            last_failed_login=last_failed_login,
            skype=skype,
            jabber=jabber,
            phone=phone,
            _configuration=_configuration,
            **kwargs,
        )

from libretime_client.model.role_enum import RoleEnum
