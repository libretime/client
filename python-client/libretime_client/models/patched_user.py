# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, Field, StrictInt
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from libretime_client.models.role_enum import RoleEnum
from typing import Optional, Set
from typing_extensions import Self

class PatchedUser(BaseModel):
    """
    PatchedUser
    """ # noqa: E501
    id: Optional[StrictInt] = None
    role: Optional[RoleEnum] = None
    username: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    email: Optional[Annotated[str, Field(strict=True, max_length=1024)]] = None
    first_name: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    last_name: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    login_attempts: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    last_login: Optional[datetime] = None
    last_failed_login: Optional[datetime] = None
    skype: Optional[Annotated[str, Field(strict=True, max_length=1024)]] = None
    jabber: Optional[Annotated[str, Field(strict=True, max_length=1024)]] = None
    phone: Optional[Annotated[str, Field(strict=True, max_length=1024)]] = None
    __properties: ClassVar[List[str]] = ["id", "role", "username", "email", "first_name", "last_name", "login_attempts", "last_login", "last_failed_login", "skype", "jabber", "phone"]

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PatchedUser from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        """
        excluded_fields: Set[str] = set([
            "id",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # set to None if email (nullable) is None
        # and model_fields_set contains the field
        if self.email is None and "email" in self.model_fields_set:
            _dict['email'] = None

        # set to None if login_attempts (nullable) is None
        # and model_fields_set contains the field
        if self.login_attempts is None and "login_attempts" in self.model_fields_set:
            _dict['login_attempts'] = None

        # set to None if last_login (nullable) is None
        # and model_fields_set contains the field
        if self.last_login is None and "last_login" in self.model_fields_set:
            _dict['last_login'] = None

        # set to None if last_failed_login (nullable) is None
        # and model_fields_set contains the field
        if self.last_failed_login is None and "last_failed_login" in self.model_fields_set:
            _dict['last_failed_login'] = None

        # set to None if skype (nullable) is None
        # and model_fields_set contains the field
        if self.skype is None and "skype" in self.model_fields_set:
            _dict['skype'] = None

        # set to None if jabber (nullable) is None
        # and model_fields_set contains the field
        if self.jabber is None and "jabber" in self.model_fields_set:
            _dict['jabber'] = None

        # set to None if phone (nullable) is None
        # and model_fields_set contains the field
        if self.phone is None and "phone" in self.model_fields_set:
            _dict['phone'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PatchedUser from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "role": obj.get("role"),
            "username": obj.get("username"),
            "email": obj.get("email"),
            "first_name": obj.get("first_name"),
            "last_name": obj.get("last_name"),
            "login_attempts": obj.get("login_attempts"),
            "last_login": obj.get("last_login"),
            "last_failed_login": obj.get("last_failed_login"),
            "skype": obj.get("skype"),
            "jabber": obj.get("jabber"),
            "phone": obj.get("phone")
        })
        return _obj


