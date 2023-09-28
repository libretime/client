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

class PatchedLiveLog(BaseModel):
    """
    PatchedLiveLog
    """
    id: Optional[StrictInt] = None
    state: Optional[constr(strict=True, max_length=32)] = None
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    __properties = ["id", "state", "start_time", "end_time"]

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
    def from_json(cls, json_str: str) -> PatchedLiveLog:
        """Create an instance of PatchedLiveLog from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if end_time (nullable) is None
        # and __fields_set__ contains the field
        if self.end_time is None and "end_time" in self.__fields_set__:
            _dict['end_time'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedLiveLog:
        """Create an instance of PatchedLiveLog from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedLiveLog.parse_obj(obj)

        _obj = PatchedLiveLog.parse_obj({
            "id": obj.get("id"),
            "state": obj.get("state"),
            "start_time": obj.get("start_time"),
            "end_time": obj.get("end_time")
        })
        return _obj


