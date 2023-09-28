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
from typing import Optional
from pydantic import BaseModel, Field, StrictBool, StrictInt, StrictStr, conint, constr
from libretime_client.models.record_enabled_enum import RecordEnabledEnum

class ShowInstance(BaseModel):
    """
    ShowInstance
    """
    id: StrictInt = Field(...)
    created_at: datetime = Field(...)
    starts_at: datetime = Field(...)
    ends_at: datetime = Field(...)
    filled_time: Optional[StrictStr] = None
    last_scheduled_at: Optional[datetime] = None
    description: Optional[constr(strict=True, max_length=8192)] = None
    modified: StrictBool = Field(...)
    rebroadcast: Optional[conint(strict=True, le=32767, ge=-32768)] = None
    auto_playlist_built: StrictBool = Field(...)
    record_enabled: Optional[RecordEnabledEnum] = None
    show: StrictInt = Field(...)
    instance: Optional[StrictInt] = None
    record_file: Optional[StrictInt] = None
    __properties = ["id", "created_at", "starts_at", "ends_at", "filled_time", "last_scheduled_at", "description", "modified", "rebroadcast", "auto_playlist_built", "record_enabled", "show", "instance", "record_file"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> ShowInstance:
        """Create an instance of ShowInstance from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if filled_time (nullable) is None
        # and __fields_set__ contains the field
        if self.filled_time is None and "filled_time" in self.__fields_set__:
            _dict['filled_time'] = None

        # set to None if last_scheduled_at (nullable) is None
        # and __fields_set__ contains the field
        if self.last_scheduled_at is None and "last_scheduled_at" in self.__fields_set__:
            _dict['last_scheduled_at'] = None

        # set to None if description (nullable) is None
        # and __fields_set__ contains the field
        if self.description is None and "description" in self.__fields_set__:
            _dict['description'] = None

        # set to None if rebroadcast (nullable) is None
        # and __fields_set__ contains the field
        if self.rebroadcast is None and "rebroadcast" in self.__fields_set__:
            _dict['rebroadcast'] = None

        # set to None if record_enabled (nullable) is None
        # and __fields_set__ contains the field
        if self.record_enabled is None and "record_enabled" in self.__fields_set__:
            _dict['record_enabled'] = None

        # set to None if instance (nullable) is None
        # and __fields_set__ contains the field
        if self.instance is None and "instance" in self.__fields_set__:
            _dict['instance'] = None

        # set to None if record_file (nullable) is None
        # and __fields_set__ contains the field
        if self.record_file is None and "record_file" in self.__fields_set__:
            _dict['record_file'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ShowInstance:
        """Create an instance of ShowInstance from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ShowInstance.parse_obj(obj)

        _obj = ShowInstance.parse_obj({
            "id": obj.get("id"),
            "created_at": obj.get("created_at"),
            "starts_at": obj.get("starts_at"),
            "ends_at": obj.get("ends_at"),
            "filled_time": obj.get("filled_time"),
            "last_scheduled_at": obj.get("last_scheduled_at"),
            "description": obj.get("description"),
            "modified": obj.get("modified"),
            "rebroadcast": obj.get("rebroadcast"),
            "auto_playlist_built": obj.get("auto_playlist_built"),
            "record_enabled": obj.get("record_enabled"),
            "show": obj.get("show"),
            "instance": obj.get("instance"),
            "record_file": obj.get("record_file")
        })
        return _obj


