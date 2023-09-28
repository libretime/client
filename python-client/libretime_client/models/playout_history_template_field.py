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



from pydantic import BaseModel, Field, StrictBool, StrictInt, conint, constr

class PlayoutHistoryTemplateField(BaseModel):
    """
    PlayoutHistoryTemplateField
    """
    id: StrictInt = Field(...)
    name: constr(strict=True, max_length=128) = Field(...)
    label: constr(strict=True, max_length=128) = Field(...)
    type: constr(strict=True, max_length=128) = Field(...)
    is_file_md: StrictBool = Field(...)
    position: conint(strict=True, le=2147483647, ge=-2147483648) = Field(...)
    template: StrictInt = Field(...)
    __properties = ["id", "name", "label", "type", "is_file_md", "position", "template"]

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
    def from_json(cls, json_str: str) -> PlayoutHistoryTemplateField:
        """Create an instance of PlayoutHistoryTemplateField from a JSON string"""
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
    def from_dict(cls, obj: dict) -> PlayoutHistoryTemplateField:
        """Create an instance of PlayoutHistoryTemplateField from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PlayoutHistoryTemplateField.parse_obj(obj)

        _obj = PlayoutHistoryTemplateField.parse_obj({
            "id": obj.get("id"),
            "name": obj.get("name"),
            "label": obj.get("label"),
            "type": obj.get("type"),
            "is_file_md": obj.get("is_file_md"),
            "position": obj.get("position"),
            "template": obj.get("template")
        })
        return _obj


