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
from pydantic import BaseModel, StrictInt, constr

class PatchedCeleryTask(BaseModel):
    """
    PatchedCeleryTask
    """
    id: Optional[StrictInt] = None
    task_id: Optional[constr(strict=True, max_length=256)] = None
    name: Optional[constr(strict=True, max_length=256)] = None
    dispatch_time: Optional[datetime] = None
    status: Optional[constr(strict=True, max_length=256)] = None
    track_reference: Optional[StrictInt] = None
    __properties = ["id", "task_id", "name", "dispatch_time", "status", "track_reference"]

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
    def from_json(cls, json_str: str) -> PatchedCeleryTask:
        """Create an instance of PatchedCeleryTask from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if name (nullable) is None
        # and __fields_set__ contains the field
        if self.name is None and "name" in self.__fields_set__:
            _dict['name'] = None

        # set to None if dispatch_time (nullable) is None
        # and __fields_set__ contains the field
        if self.dispatch_time is None and "dispatch_time" in self.__fields_set__:
            _dict['dispatch_time'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedCeleryTask:
        """Create an instance of PatchedCeleryTask from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedCeleryTask.parse_obj(obj)

        _obj = PatchedCeleryTask.parse_obj({
            "id": obj.get("id"),
            "task_id": obj.get("task_id"),
            "name": obj.get("name"),
            "dispatch_time": obj.get("dispatch_time"),
            "status": obj.get("status"),
            "track_reference": obj.get("track_reference")
        })
        return _obj

