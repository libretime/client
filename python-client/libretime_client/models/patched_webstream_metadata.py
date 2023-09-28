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

class PatchedWebstreamMetadata(BaseModel):
    """
    PatchedWebstreamMetadata
    """
    id: Optional[StrictInt] = None
    starts_at: Optional[datetime] = None
    data: Optional[constr(strict=True, max_length=1024)] = None
    schedule: Optional[StrictInt] = None
    __properties = ["id", "starts_at", "data", "schedule"]

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
    def from_json(cls, json_str: str) -> PatchedWebstreamMetadata:
        """Create an instance of PatchedWebstreamMetadata from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedWebstreamMetadata:
        """Create an instance of PatchedWebstreamMetadata from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedWebstreamMetadata.parse_obj(obj)

        _obj = PatchedWebstreamMetadata.parse_obj({
            "id": obj.get("id"),
            "starts_at": obj.get("starts_at"),
            "data": obj.get("data"),
            "schedule": obj.get("schedule")
        })
        return _obj


