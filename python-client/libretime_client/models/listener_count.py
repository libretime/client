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



from pydantic import BaseModel, Field, StrictInt, conint

class ListenerCount(BaseModel):
    """
    ListenerCount
    """
    id: StrictInt = Field(...)
    listener_count: conint(strict=True, le=2147483647, ge=-2147483648) = Field(...)
    timestamp: StrictInt = Field(...)
    mount_name: StrictInt = Field(...)
    __properties = ["id", "listener_count", "timestamp", "mount_name"]

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
    def from_json(cls, json_str: str) -> ListenerCount:
        """Create an instance of ListenerCount from a JSON string"""
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
    def from_dict(cls, obj: dict) -> ListenerCount:
        """Create an instance of ListenerCount from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ListenerCount.parse_obj(obj)

        _obj = ListenerCount.parse_obj({
            "id": obj.get("id"),
            "listener_count": obj.get("listener_count"),
            "timestamp": obj.get("timestamp"),
            "mount_name": obj.get("mount_name")
        })
        return _obj


